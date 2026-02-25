'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

varying vec2 vUv;

// Classic noise to create fog/cloud structures
float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    
    float res = mix(
        mix(rand(ip), rand(ip+vec2(1.0,0.0)), u.x),
        mix(rand(ip+vec2(0.0,1.0)), rand(ip+vec2(1.0,1.0)), u.x), u.y);
    return res*res;
}

float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 5; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  vec2 mouseNorm = uMouse / uResolution.xy;
  mouseNorm.y = 1.0 - mouseNorm.y;
  
  // Parallax and slow drift
  vec2 pos = st * 3.0; // Scale of fog
  pos.y -= uTime * 0.05; // Slow vertical drift
  pos.x += uTime * 0.02; // Slow horizontal drift
  
  // Mouse slight parallax interaction (very subtle)
  pos += (mouseNorm - 0.5) * 0.1;
  
  // Create volumetric fog layers
  float q = fbm(pos + vec2(0.0, uTime * 0.01));
  vec2 r = vec2(fbm(pos + q + vec2(1.7, 9.2) + 0.15 * uTime),
                fbm(pos + q + vec2(8.3, 2.8) + 0.12 * uTime));
  float f = fbm(pos + r);

  // BASE COLOR (Extra Dark Navy/Black)
  vec3 color = mix(
      vec3(0.02, 0.02, 0.03), // Deep black-blue
      vec3(0.05, 0.07, 0.12), // Subtle light navy
      clamp(f * f * 4.0, 0.0, 1.0)
  );

  // VIGNETTE: Force left side to be absolute black for perfect typography contrast
  float vignette = smoothstep(0.0, 0.8, st.x); // Left side is 0, fading right
  float outerVignette = smoothstep(1.5, 0.2, length(st - vec2(0.5))); // Darken edges
  
  color *= vignette * 0.8 + 0.2; // Keep minimum brightness on left, brighten right
  color *= outerVignette;

  // Add subtle light bleed on the right edge
  float lightBleed = smoothstep(0.5, 1.0, st.x) * smoothstep(0.0, 1.0, f);
  color += vec3(0.1, 0.15, 0.25) * lightBleed * 0.4;

  // FILM GRAIN (Subtle premium static noise)
  float grain = rand(st * uTime) * 0.03;
  color += grain;

  gl_FragColor = vec4(color, 1.0);
}
`;

export default function CinematicBackground() {
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const { viewport, size } = useThree();

    const uniforms = useMemo(() => {
        return {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(size.width, size.height) },
            uMouse: { value: new THREE.Vector2(size.width / 2, size.height / 2) }
        };
    }, [size]);

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            materialRef.current.uniforms.uResolution.value.set(size.width, size.height);

            // Extremely dampened mouse interaction for "authority" feel rather than chaotic jitter
            const targetMouseX = state.pointer.x * (size.width / 2) + (size.width / 2);
            const targetMouseY = (state.pointer.y * (size.height / 2)) + (size.height / 2);

            // Lerp mouse uniform for smooth, lagging trailing effect
            materialRef.current.uniforms.uMouse.value.lerp(
                new THREE.Vector2(targetMouseX, targetMouseY),
                0.02
            );
        }
    });

    return (
        <mesh scale={[viewport.width, viewport.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                depthWrite={false}
            />
        </mesh>
    );
}

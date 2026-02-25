'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 150;

export default function FloatingParticles() {
    const meshRef = useRef<THREE.InstancedMesh>(null);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        return Array.from({ length: COUNT }, () => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10 - 2
            ],
            offset: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.5 + 0.1,
            rotationSpeed: [
                Math.random() * 0.02 - 0.01,
                Math.random() * 0.02 - 0.01,
                Math.random() * 0.02 - 0.01
            ],
            scale: Math.random() * 0.1 + 0.02
        }));
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        particles.forEach((particle, i) => {
            const t = state.clock.elapsedTime * particle.speed + particle.offset;

            // Floating motion
            dummy.position.set(
                particle.position[0] + Math.sin(t * 0.5) * 0.5,
                particle.position[1] + Math.cos(t * 0.3) * 0.5,
                particle.position[2] + Math.sin(t * 0.2) * 0.5
            );

            // Rotation
            dummy.rotation.x += particle.rotationSpeed[0];
            dummy.rotation.y += particle.rotationSpeed[1];
            dummy.rotation.z += particle.rotationSpeed[2];

            dummy.scale.setScalar(particle.scale);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color="#00f0ff"
                emissive="#00f0ff"
                emissiveIntensity={0.5}
                transparent
                opacity={0.6}
                wireframe
            />
        </instancedMesh>
    );
}

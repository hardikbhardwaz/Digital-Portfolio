'use client';

import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 300;

export default function CinematicDust() {
    const meshRef = useRef<THREE.InstancedMesh>(null);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    const [particles] = useState(() => {
        return Array.from({ length: COUNT }, () => ({
            position: [
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 15 - 5
            ],
            offset: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.1 + 0.02,
            scale: Math.random() * 0.03 + 0.01
        }));
    });

    useFrame((state) => {
        if (!meshRef.current) return;

        particles.forEach((particle, i) => {
            const t = state.clock.elapsedTime * particle.speed + particle.offset;

            dummy.position.set(
                particle.position[0] + Math.sin(t) * 1.5,
                particle.position[1] + Math.cos(t * 0.8) * 1.5,
                particle.position[2] + Math.sin(t * 0.5) * 1.5
            );

            dummy.scale.setScalar(particle.scale);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.15}
                depthWrite={false}
            />
        </instancedMesh>
    );
}

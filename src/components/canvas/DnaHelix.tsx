'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PAIRS = 60;
const RADIUS = 1.5;
const HEIGHT_SCALE = 0.2;

export default function DnaHelix() {
    const groupRef = useRef<THREE.Group>(null);

    const strandMeshRef = useRef<THREE.InstancedMesh>(null);
    const rungMeshRef = useRef<THREE.InstancedMesh>(null);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Vibrant glowing cyan for the strands
    const glassMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: '#00ffff',
        emissive: '#0055ff',
        emissiveIntensity: 0.8,
        metalness: 0.8,
        roughness: 0.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
    }), []);

    // Electric violet/magenta for the rungs
    const rungMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: '#ff00ff',
        emissive: '#8f00ff',
        emissiveIntensity: 0.6,
        metalness: 0.8,
        roughness: 0.2,
    }), []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.15; // Slower, more elegant rotation
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3 - (PAIRS * HEIGHT_SCALE) / 2;
        }

        if (strandMeshRef.current && rungMeshRef.current) {
            for (let i = 0; i < PAIRS; i++) {
                const t = i * 0.3;
                const y = i * HEIGHT_SCALE;

                // --- STRAND 1 ---
                const x1 = Math.cos(t) * RADIUS;
                const z1 = Math.sin(t) * RADIUS;
                dummy.position.set(x1, y, z1);
                dummy.rotation.set(0, 0, 0);
                dummy.scale.setScalar(0.18); // Slightly bigger spheres for luxury weight
                dummy.updateMatrix();
                strandMeshRef.current.setMatrixAt(i * 2, dummy.matrix);

                // --- STRAND 2 ---
                const x2 = Math.cos(t + Math.PI) * RADIUS;
                const z2 = Math.sin(t + Math.PI) * RADIUS;
                dummy.position.set(x2, y, z2);
                dummy.updateMatrix();
                strandMeshRef.current.setMatrixAt(i * 2 + 1, dummy.matrix);

                // --- RUNG ---
                const xCenter = (x1 + x2) / 2;
                const zCenter = (z1 + z2) / 2;

                dummy.position.set(xCenter, y, zCenter);
                dummy.lookAt(x1, y, z1);
                dummy.rotateX(Math.PI / 2);
                dummy.scale.set(0.06, RADIUS * 2, 0.06);
                dummy.updateMatrix();
                rungMeshRef.current.setMatrixAt(i, dummy.matrix);
            }

            strandMeshRef.current.instanceMatrix.needsUpdate = true;
            rungMeshRef.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <group position={[5, 0, -4]} scale={0.9} rotation={[0.1, 0, 0]}>
            <group ref={groupRef}>
                <instancedMesh ref={strandMeshRef} args={[undefined, undefined, PAIRS * 2]} material={glassMaterial}>
                    <sphereGeometry args={[1, 32, 32]} /> {/* Higher poly for smoother reflections */}
                </instancedMesh>

                <instancedMesh ref={rungMeshRef} args={[undefined, undefined, PAIRS]} material={rungMaterial}>
                    <cylinderGeometry args={[1, 1, 1, 16]} />
                </instancedMesh>
            </group>
        </group>
    );
}

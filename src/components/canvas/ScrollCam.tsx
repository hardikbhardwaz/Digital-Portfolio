'use client';

import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useState } from 'react';

// Syncs the Three.js camera with the browser's scroll position
export default function ScrollCam() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate normalized scroll position 0 to 1 based on total body height
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollY(maxScroll > 0 ? currentScroll / maxScroll : 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useFrame((state) => {
        // We want the camera to move down as we scroll down
        // Use lerp for smooth camera movement
        const targetY = scrollY * -10; // Pan down 10 units total over the whole page

        state.camera.position.y = THREE.MathUtils.lerp(
            state.camera.position.y,
            targetY,
            0.05
        );

        // Also slightly rotate the camera for parallax feel
        state.camera.rotation.x = THREE.MathUtils.lerp(
            state.camera.rotation.x,
            scrollY * 0.2, // slight tilt down
            0.05
        );
    });

    return null;
}

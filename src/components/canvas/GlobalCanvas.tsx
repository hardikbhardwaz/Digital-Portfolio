'use client';

import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import CinematicBackground from './CinematicBackground';
import CinematicDust from './CinematicDust';
import DnaHelix from './DnaHelix';
import ScrollCam from './ScrollCam';

export default function GlobalCanvas() {
    const [dpr, setDpr] = useState(1);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDpr(Math.min(window.devicePixelRatio, 2));
        }, 0);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-background">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                dpr={dpr}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <fog attach="fog" args={['#000000', 5, 20]} />

                    <ambientLight intensity={0.8} />
                    {/* Subtle elegant directional lighting for reflections */}
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0055FF" />

                    <ScrollCam />
                    <CinematicBackground />
                    <CinematicDust />
                    <DnaHelix />

                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}

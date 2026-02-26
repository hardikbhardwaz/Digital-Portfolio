'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Simulate a loading sequence
        let currentProgress = 0;
        const totalDuration = 2000; // 2 seconds total loading animation
        const intervalTime = 20; // update every 20ms
        const increment = (100 / (totalDuration / intervalTime));

        const interval = setInterval(() => {
            currentProgress += increment;

            // Add a little randomness so it looks realistic
            if (currentProgress > 100) {
                currentProgress = 100;
                setProgress(100);
                clearInterval(interval);

                // Keep the 100% on screen for just a fraction of a second before hiding
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = '';
                }, 400);
            } else {
                setProgress(Math.floor(currentProgress));
            }
        }, intervalTime);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{ y: '-100%', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%' }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} // smooth cubic bezier curve
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background pointer-events-auto"
                >
                    <div className="flex flex-col items-center gap-12 w-full max-w-sm px-8">

                        {/* Central Animated Element */}
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            {/* Outer Spinning Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full border border-dashed border-luxury-violet/30"
                            ></motion.div>

                            {/* Inner Spinning Ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-2 rounded-full border-t border-l border-luxury-blue shadow-[0_0_15px_rgba(0,85,255,0.5)]"
                            ></motion.div>

                            {/* Percentage Text */}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50"
                            >
                                {progress}<span className="text-xl">%</span>
                            </motion.span>
                        </div>

                        {/* Loading Bar */}
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-luxury-blue to-luxury-violet"
                                initial={{ width: '0%' }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1, ease: 'linear' }}
                            ></motion.div>
                        </div>

                        {/* Tagline / Branding */}
                        <div className="flex flex-col items-center gap-2 overflow-hidden">
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="uppercase tracking-[0.3em] text-xs font-bold text-luxury-blue"
                            >
                                Digital Ecosystems
                            </motion.p>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-white/40 text-[10px] uppercase tracking-widest font-mono"
                            >
                                Initializing Architecture
                            </motion.p>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

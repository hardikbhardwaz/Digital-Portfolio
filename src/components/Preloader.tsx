'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Fast increment for visual pleasure, but actual removal depends on DOM
        let currentProgress = 0;
        const intervalTime = 15;
        const increment = 5; // Fast fake progress

        const interval = setInterval(() => {
            currentProgress += increment;

            if (currentProgress < 95) {
                setProgress(Math.floor(currentProgress));
            }
        }, intervalTime);

        // Core Web Vitals Fix: Don't block LCP artificially. 
        // Once the window is fully loaded (React + Images + CSS), instantly finish the progress.
        const finishLoading = () => {
            clearInterval(interval);
            setProgress(100);

            // Trigger unmount instantly to unblock interactivity
            setIsLoading(false);
            document.body.style.overflow = '';
        };

        if (document.readyState === 'complete') {
            finishLoading();
        } else {
            window.addEventListener('load', finishLoading);
            // Drastically reduced fallback if network is choked
            setTimeout(finishLoading, 300);
        }

        return () => {
            clearInterval(interval);
            window.removeEventListener('load', finishLoading);
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
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }} 
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

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Detect if device has touch capability
        if (window.matchMedia('(pointer: coarse)').matches) {
            setTimeout(() => setIsTouch(true), 0);
            return;
        }

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('magnetic')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    if (isTouch) return null; // Do not render on mobile

    const cursorSize = isHovering ? 64 : 16;
    const cursorOpacity = isHovering ? 0.2 : 1;
    const mixBlendMode = isHovering ? 'normal' : 'difference';

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[999] flex items-center justify-center border border-white mix-blend-difference"
            animate={{
                x: mousePosition.x - cursorSize / 2,
                y: mousePosition.y - cursorSize / 2,
                width: cursorSize,
                height: cursorSize,
                opacity: cursorOpacity,
                backgroundColor: isHovering ? '#FAFAFA' : 'transparent',
            }}
            transition={{
                type: 'spring',
                stiffness: 700,
                damping: 40,
                mass: 0.5,
            }}
        >
            {isHovering && <span className="text-[10px] uppercase font-bold text-black mix-blend-normal">View</span>}
        </motion.div>
    );
}

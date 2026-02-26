'use client';

import { FileDown } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

export default function FloatingBrochure() {
    return (
        <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[100]">
            <MagneticWrapper strength={15}>
                <a
                    href="/Hardik-Portfolio.pdf"
                    download="Hardik_Sharma_Portfolio.pdf"
                    aria-label="Download Portfolio Brochure"
                    className="relative group flex items-center gap-2 md:gap-3 bg-black/60 backdrop-blur-xl border border-white/10 text-white shadow-[0_0_40px_rgba(0,0,0,0.8)] px-4 py-2.5 md:px-5 md:py-3.5 rounded-full hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 overflow-hidden"
                >
                    {/* Animated gradient hover fill */}
                    <div className="absolute inset-0 bg-gradient-to-r from-luxury-blue/20 to-luxury-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <FileDown className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:animate-bounce" />
                    <span className="font-heading font-bold text-xs md:text-sm tracking-wide relative z-10 whitespace-nowrap">
                        <span className="hidden sm:inline">Download </span>Brochure
                    </span>

                    {/* Glowing indicator dot */}
                    <span className="absolute top-0 right-1 w-2.5 h-2.5 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
                    </span>
                </a>
            </MagneticWrapper>
        </div>
    );
}

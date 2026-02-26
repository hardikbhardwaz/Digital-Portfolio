'use client';

import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTimeout(() => setMounted(true), 0);
    }, []);

    if (!mounted) return null;

    return (
        <a
            href="https://wa.me/919588899560"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center group"
        >
            <MessageCircle size={32} />

            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 shadow-[0_0_20px_#25D366] -z-10 animate-ping"></span>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 bg-foreground text-background text-sm font-semibold py-2 px-4 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                Let&apos;s Chat!
                {/* Triangle pointer */}
                <div className="absolute top-1/2 -right-1 w-2 h-2 bg-foreground transform -translate-y-1/2 rotate-45"></div>
            </div>
        </a>
    );
}

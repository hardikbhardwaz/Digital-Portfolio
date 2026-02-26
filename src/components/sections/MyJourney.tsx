'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MyJourney() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.journey-text',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, stagger: 0.2, duration: 1.5, ease: 'power3.out',
                    scrollTrigger: { trigger: containerRef.current, start: 'top 70%' }
                }
            );

            // Parallax Mandala
            gsap.to('.mandala-bg', {
                yPercent: -30,
                rotate: 15,
                ease: 'none',
                scrollTrigger: { trigger: containerRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 md:py-40 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto relative overflow-hidden">

            {/* Subtle Cultural Motif / Mandala */}
            <svg
                className="mandala-bg absolute top-0 -right-40 w-[600px] h-[600px] opacity-[0.03] text-foreground pointer-events-none"
                viewBox="0 0 100 100"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M50 0C50 25 75 50 100 50C75 50 50 75 50 100C50 75 25 50 0 50C25 50 50 25 50 0Z" />
                <path d="M50 10L61.76 38.24L90 50L61.76 61.76L50 90L38.24 61.76L10 50L38.24 38.24L50 10Z" opacity="0.5" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: Large Cinematic Image */}
                <div className="journey-text relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border">
                    <div className="absolute inset-0 bg-luxury-blue/10 mix-blend-overlay z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
                        alt="Hardik Sharma - Global Digital Expert"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                    />
                    <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-xl border border-white/10 backdrop-blur-md z-20 overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 bg-luxury-blue h-full"></div>
                        <p className="font-heading font-bold text-lg mb-1">Operating out of Rajasthan, India.</p>
                        <p className="text-sm text-foreground/70 font-light">Scaling brands globally with relentless execution.</p>
                    </div>
                </div>

                {/* Right: Narrative Text */}
                <div className="flex flex-col justify-center">
                    <div className="journey-text inline-flex items-center gap-3 mb-8">
                        <span className="w-8 h-[1px] bg-luxury-blue"></span>
                        <span className="text-sm uppercase tracking-[0.3em] font-semibold text-luxury-blue">My Journey</span>
                    </div>

                    <h2 className="journey-text text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-[1.1]">
                        Engineering Growth,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/80 to-foreground/40">From India to the World.</span>
                    </h2>

                    <div className="space-y-6 text-lg text-foreground/80 font-light leading-relaxed">
                        <p className="journey-text">
                            I didn’t just learn digital marketing—I reverse-engineered it. I blend the extreme technical precision of web engineering with algorithmic media buying to create digital ecosystems that print revenue.
                        </p>
                        <p className="journey-text">
                            As an individual expert, I don&apos;t hide behind a massive agency team. When you work with me, you are getting my direct strategic mind, my code, and my creative vision. I&apos;ve scaled SaaS platforms, Enterprise B2B, and E-Commerce giants internationally without the corporate bloat.
                        </p>
                        <p className="journey-text italic text-foreground border-l-2 border-luxury-violet pl-6 mt-8">
                            &quot;The aesthetic of a global agency. The agility and obsession of an individual.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

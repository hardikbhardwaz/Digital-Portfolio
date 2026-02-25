'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.about-text',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen w-full flex items-center justify-center py-16 md:py-32 px-4 md:px-12 lg:px-24">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 md:gap-24 items-center">

                <div>
                    <h2 className="about-text text-4xl md:text-5xl lg:text-6xl font-heading mb-8 font-bold leading-tight">
                        Building digital ecosystems that <span className="text-luxury-blue">dominate</span> markets.
                    </h2>
                    <div className="about-text space-y-6 text-gray-400 text-lg font-light leading-relaxed">
                        <p>
                            We merge data-driven performance marketing with award-winning creative design and advanced Next.js architectures.
                            Our focus is entirely on measurable business outcomes.
                        </p>
                        <p>
                            Unlike traditional agencies that silo creative and technical teams, we operate as a unified growth engine. We specialize in B2B SaaS, international e-commerce scaling, and high-ticket service industries.
                        </p>
                    </div>

                    <div className="about-text mt-12 grid grid-cols-2 gap-6">
                        <div className="border-l border-luxury-blue pl-4">
                            <span className="block text-3xl font-heading font-bold text-white mb-1">30%</span>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Avg Conversion Lift</span>
                        </div>
                        <div className="border-l border-luxury-violet pl-4">
                            <span className="block text-3xl font-heading font-bold text-white mb-1">2.5x</span>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Revenue Growth YoY</span>
                        </div>
                    </div>
                </div>

                <div className="about-text relative h-[600px] rounded-2xl overflow-hidden bg-[#050505] border border-white/5 shadow-2xl group flex flex-col justify-end p-8">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                    {/* Placeholder for a high-end team/office or conceptual 3D render image */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>

                    <div className="relative z-20">
                        <h3 className="text-2xl font-bold font-heading mb-2">Our Methodology</h3>
                        <ul className="space-y-3 text-gray-400 font-light">
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-luxury-blue"></span> Data-Driven Strategy</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-luxury-blue"></span> High-Fidelity Creative</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-luxury-blue"></span> Conversion-Optimized Engineering</li>
                            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-luxury-blue"></span> Continuous Automation Scaling</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, ShoppingBag, GraduationCap, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = [
    { id: 1, name: 'B2B & Enterprise', icon: <Building2 className="w-8 h-8 mx-auto mb-4 text-luxury-blue" /> },
    { id: 2, name: 'SaaS & Tech', icon: <Code className="w-8 h-8 mx-auto mb-4 text-luxury-violet" /> },
    { id: 3, name: 'Global eCommerce', icon: <ShoppingBag className="w-8 h-8 mx-auto mb-4 text-luxury-blue" /> },
    { id: 4, name: 'Education & EdTech', icon: <GraduationCap className="w-8 h-8 mx-auto mb-4 text-luxury-violet" /> },
];

export default function Industries() {
    const cRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.industry-card',
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1, scale: 1, stagger: 0.1, duration: 1, ease: 'back.out(1.5)',
                    scrollTrigger: { trigger: cRef.current, start: 'top 80%' }
                }
            );
        }, cRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={cRef} className="py-16 md:py-32 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto border-t border-border">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Industries We <span className="text-luxury-blue">Dominate</span></h2>
                <p className="text-foreground/70 font-light max-w-2xl mx-auto">Providing specialized, high-conversion frameworks tailored precisely to the complexities of these key global sectors.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {INDUSTRIES.map((ind) => (
                    <div key={ind.id} className="industry-card bg-surface border border-border rounded-2xl p-8 hover:bg-foreground/5 transition-colors text-center group cursor-default">
                        <div className="group-hover:-translate-y-2 transition-transform duration-300">
                            {ind.icon}
                            <h3 className="font-heading font-bold text-lg">{ind.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

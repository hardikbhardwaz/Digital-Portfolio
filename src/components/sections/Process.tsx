'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    { step: '01', title: 'Data Audit & Strategy', desc: 'We analyze current bottlenecks, target CAP, and define a scalable revenue architecture.' },
    { step: '02', title: 'Graphic & Creative Engineering', desc: 'Our team crafts high-fidelity graphics, elite ad creatives, and frictionless UI/UX flows.' },
    { step: '03', title: 'Technical Deployment', desc: 'We launch Next.js platforms, Shopify architectures, and automated WhatsApp/CRM funnels.' },
    { step: '04', title: 'Scale & Optimize', desc: 'Continuous multivariate testing, algorithmic media buying, and LTV maximization.' }
];

export default function Process() {
    const cRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.process-step',
                { opacity: 0, x: -30 },
                {
                    opacity: 1, x: 0, stagger: 0.2, duration: 1, ease: 'power2.out',
                    scrollTrigger: { trigger: cRef.current, start: 'top 75%' }
                }
            );
        }, cRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={cRef} className="py-16 md:py-32 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
            <div className="mb-20">
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Growth <span className="text-luxury-violet">Methodology</span></h2>
                <p className="text-foreground/70 text-lg font-light max-w-xl">A battle-tested, four-phase execution framework designed specifically to scale high-ticket offerings.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {STEPS.map((step, i) => (
                    <div key={i} className="process-step relative border-l border-border pl-6 pb-8 md:pb-0">
                        <span className="absolute -left-4 top-0 bg-background text-foreground border border-border font-heading font-bold text-sm w-8 h-8 flex items-center justify-center rounded-full">
                            {step.step}
                        </span>
                        <h3 className="text-2xl font-bold font-heading mb-3 mt-1">{step.title}</h3>
                        <p className="text-foreground/70 font-light leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

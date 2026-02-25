'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticWrapper from '../MagneticWrapper';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    { step: '01', title: 'Data & Architecture', desc: 'Before writing a line of code or launching an ad, I map the exact math required for your business to acquire customers profitably.' },
    { step: '02', title: 'Creative Synthesis', desc: 'I design visuals and video assets that don\'t just look premium—they are psychologically engineered to stop the scroll.' },
    { step: '03', title: 'Technical Build', desc: 'From seamless Next.js platforms to automated WhatsApp funnels, I build the digital machinery needed to capture and convert.' },
    { step: '04', title: 'Scale & Dominate', desc: 'Aggressive algorithmic media buying and multivariate testing to force exponential, highly-profitable growth.' }
];

export default function MyApproach() {
    const cRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.approach-step',
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
        <section ref={cRef} className="py-16 md:py-32 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto border-t border-border">
            <div className="mb-20">
                <MagneticWrapper strength={15}>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 inline-block">
                        My <span className="text-luxury-violet">Approach</span>
                    </h2>
                </MagneticWrapper>
                <p className="text-foreground/70 text-lg font-light max-w-2xl mt-4">A relentless, framework-driven process optimizing every touchpoint from initial impression to final conversion.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {STEPS.map((step, i) => (
                    <div key={i} className="approach-step relative border-l border-border pl-6 pb-8 md:pb-0 group">
                        <span className="absolute -left-4 top-0 bg-background text-foreground border border-border font-heading font-bold text-sm w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-luxury-violet group-hover:text-white transition-colors">
                            {step.step}
                        </span>
                        <h3 className="text-2xl font-bold font-heading mb-3 mt-1 group-hover:text-luxury-violet transition-colors">{step.title}</h3>
                        <p className="text-foreground/70 font-light leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

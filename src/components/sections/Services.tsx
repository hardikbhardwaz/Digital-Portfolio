'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Filter, Search, PenTool, Video, Laptop, Bot } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        title: 'Performance Marketing & Meta Ads',
        description: 'Data-driven acquisition engines scaling ROI through algorithmic testing and high-converting creatives.',
        icon: <Target className="w-6 h-6 text-luxury-blue" />
    },
    {
        title: 'Lead Gen & Funnel Systems',
        description: 'End-to-end B2B and consumer funnels engineered for maximum conversion velocity.',
        icon: <Filter className="w-6 h-6 text-luxury-violet" />
    },
    {
        title: 'SEO & Growth Strategy',
        description: 'Dominating search intent and driving compounding organic authority across global markets.',
        icon: <Search className="w-6 h-6 text-luxury-blue" />
    },
    {
        title: 'Graphic Design',
        description: 'High-fidelity visual identity systems that position your brand as a premium authority.',
        icon: <PenTool className="w-6 h-6 text-luxury-violet" />
    },
    {
        title: 'Video Editing, Motion & AI',
        description: 'Cinematic storytelling, short-form reels, and AI-generated content that stops the scroll.',
        icon: <Video className="w-6 h-6 text-luxury-blue" />
    },
    {
        title: 'Web Dev, WordPress & Shopify',
        description: 'Lightning-fast Next.js architectures, complex e-commerce, and conversion-optimized landing pages.',
        icon: <Laptop className="w-6 h-6 text-luxury-violet" />
    },
    {
        title: 'Automation, CRM & WhatsApp',
        description: 'Seamless AI workflows, WhatsApp API setups, and CRM integrations to nurture leads on autopilot.',
        icon: <Bot className="w-6 h-6 text-luxury-blue" />
    }
];

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.service-card',
                { opacity: 0, scale: 0.95, y: 30 },
                {
                    opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-32 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

            <div className="mb-20 grid md:grid-cols-2 gap-12 items-end">
                <div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                        End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-blue to-luxury-violet">Capabilities</span>
                    </h2>
                </div>
                <div>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed">
                        We function as a full-stack growth team—fusing elite creative design, high-velocity engineering, and algorithmic media buying.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {SERVICES.map((service, i) => (
                    <div
                        key={i}
                        className="service-card group glass p-8 rounded-2xl border border-border hover:border-luxury-blue/50 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-luxury-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="p-3 bg-foreground/5 rounded-xl border border-border w-fit mb-6 group-hover:bg-foreground/10 transition-colors">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                            <p className="text-foreground/70 font-light text-sm leading-relaxed mt-auto">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Fill the 8th grid spot with a CTA card */}
                <div className="service-card glass p-8 rounded-2xl border border-border bg-foreground flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl font-heading font-bold text-background mb-4">Need a Custom Solution?</h3>
                    <button className="px-6 py-3 bg-background text-foreground font-semibold rounded-lg hover:scale-105 transition-transform">
                        Let&apos;s Talk
                    </button>
                </div>
            </div>

        </section>
    );
}

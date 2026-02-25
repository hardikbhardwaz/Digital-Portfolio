'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
    {
        quote: "Their algorithmic approach to Meta Ads completely transformed our acquisition cost. We scaled from $10k to $150k monthly spend while maintaining a 4x ROAS.",
        name: "[Client Name]",
        role: "CMO, [Enterprise SaaS Company]",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
    },
    {
        quote: "The Next.js architecture they deployed for our global eCommerce platform dropped our load times to sub-second levels, instantly boosting conversion by 40%.",
        name: "[Client Name]",
        role: "Founder, [Global Retailer]",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
        quote: "Beyond just an agency, they operate like an embedded growth team. The WhatsApp Automation funnels alone created $2M in new pipeline.",
        name: "[Client Name]",
        role: "VP of Sales, [B2B Manufacturer]",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
    }
];

export default function Testimonials() {
    const cRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.testimonial-card',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: cRef.current, start: 'top 80%' }
                }
            );
        }, cRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={cRef} className="py-16 md:py-32 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Client <span className="text-luxury-violet">Validation</span></h2>
                <p className="text-foreground/70 font-light max-w-2xl mx-auto">Don't take our word for it. Look at the numbers our partners generate.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="testimonial-card glass p-8 md:p-12 rounded-[2rem] border border-border relative flex flex-col">
                        <Quote className="absolute top-8 right-8 w-12 h-12 text-luxury-blue opacity-10" />

                        <p className="text-foreground/80 font-light text-lg leading-relaxed mb-10 italic relative z-10">"{t.quote}"</p>

                        <div className="mt-auto flex items-center gap-4">
                            <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border border-border grayscale" />
                            <div>
                                <h4 className="font-heading font-bold text-foreground">{t.name}</h4>
                                <span className="text-xs text-foreground/50 uppercase tracking-widest font-semibold">{t.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

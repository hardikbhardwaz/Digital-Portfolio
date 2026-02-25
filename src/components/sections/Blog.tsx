'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ARTICLES = [
    {
        category: 'Performance Marketing',
        title: 'The Algorithmic Approach to Scaling Meta Ads Past $10k/Day.',
        date: 'Oct 12, 2026',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    },
    {
        category: 'Engineering',
        title: 'Why Headless Next.js is the Only Option for Enterprise B2B.',
        date: 'Oct 08, 2026',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
    }
];

export default function Blog() {
    const cRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.article-card',
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: 'power2.out',
                    scrollTrigger: { trigger: cRef.current, start: 'top 80%' }
                }
            );
        }, cRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={cRef} className="py-32 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto border-t border-border mt-16">

            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Strategic <span className="text-luxury-blue">Insights</span></h2>
                    <p className="text-foreground/70 text-lg max-w-xl font-light">
                        Deep dives into the technical and creative frameworks we use to engineer exponential growth.
                    </p>
                </div>
                <button className="flex items-center gap-2 text-foreground font-semibold border-b border-foreground pb-1 hover:text-luxury-blue hover:border-luxury-blue transition-colors w-fit">
                    View Research & Articles <ArrowUpRight size={18} />
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {ARTICLES.map((article, i) => (
                    <div key={i} className="article-card group cursor-pointer">
                        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 relative">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="px-3 py-1 bg-foreground/5 rounded-full text-xs font-bold uppercase tracking-wider text-luxury-blue">{article.category}</span>
                            <span className="text-xs text-foreground/50 uppercase tracking-widest">{article.date}</span>
                        </div>
                        <h3 className="text-2xl font-heading font-bold leading-tight group-hover:text-luxury-blue transition-colors">{article.title}</h3>
                    </div>
                ))}
            </div>

        </section>
    );
}

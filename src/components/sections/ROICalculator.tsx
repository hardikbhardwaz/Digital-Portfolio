'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ROICalculator() {
    const [adSpend, setAdSpend] = useState(10000);
    const [conversionRate, setConversionRate] = useState(2.0);
    const [aov, setAov] = useState(500); // Average Order Value

    const clicks = Math.round(adSpend / 2); // Assuming $2 CPC
    const conversions = Math.round(clicks * (conversionRate / 100));
    const revenue = conversions * aov;
    const roas = ((revenue / adSpend) * 100).toFixed(0);

    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.calc-item',
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1, scale: 1, stagger: 0.1, duration: 1, ease: 'power2.out',
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
        <section ref={containerRef} className="py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    Forecast Your <span className="text-luxury-blue">Growth</span>
                </h2>
                <p className="text-gray-400 text-lg">Interactive ROI simulation based on our historical performance models.</p>
            </div>

            <div className="calc-item grid md:grid-cols-2 gap-12 bg-[#050505] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl">

                {/* Controls */}
                <div className="space-y-10 pr-0 md:pr-8 md:border-r border-white/5">

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <label className="text-sm font-semibold uppercase tracking-widest text-gray-500">Monthly Ad Spend</label>
                            <span className="font-heading font-bold text-white">${adSpend.toLocaleString()}</span>
                        </div>
                        <input type="range" min="1000" max="100000" step="1000" value={adSpend} onChange={(e) => setAdSpend(Number(e.target.value))} className="w-full accent-luxury-blue" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <label className="text-sm font-semibold uppercase tracking-widest text-gray-500">Target Conversion Rate</label>
                            <span className="font-heading font-bold text-white">{conversionRate.toFixed(1)}%</span>
                        </div>
                        <input type="range" min="0.5" max="10" step="0.1" value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value))} className="w-full accent-luxury-blue" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <label className="text-sm font-semibold uppercase tracking-widest text-gray-500">Average Order Value (LTV)</label>
                            <span className="font-heading font-bold text-white">${aov.toLocaleString()}</span>
                        </div>
                        <input type="range" min="50" max="5000" step="50" value={aov} onChange={(e) => setAov(Number(e.target.value))} className="w-full accent-luxury-blue" />
                    </div>

                </div>

                {/* Dashboard / Outputs */}
                <div className="flex flex-col justify-center gap-8">
                    <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-luxury-blue/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Projected Monthly Revenue</p>
                        <div className="text-5xl md:text-6xl font-heading font-bold text-white">${revenue.toLocaleString()}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Estimated ROAS</p>
                            <div className="text-3xl font-heading font-bold text-luxury-blue">{roas}%</div>
                        </div>
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Conversions</p>
                            <div className="text-3xl font-heading font-bold text-white">{conversions}</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

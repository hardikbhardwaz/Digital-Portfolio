'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Presentation } from 'lucide-react';
import MagneticWrapper from '../MagneticWrapper';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Slower, more elegant and calculated animation profile
            gsap.fromTo(
                '.hero-glass',
                { opacity: 0, x: -30, backdropFilter: 'blur(0px)' },
                { opacity: 1, x: 0, backdropFilter: 'blur(30px)', duration: 2, ease: 'power2.out' }
            );
            gsap.fromTo(
                '.hero-line',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.8, stagger: 0.15, ease: 'power4.out', delay: 0.3 }
            );
            gsap.fromTo(
                '.hero-element',
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 2, delay: 0.8, stagger: 0.15, ease: 'power3.out' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen w-full flex items-center px-4 md:px-12 lg:px-24 pt-20 relative z-10 overflow-hidden">

            {/* Hidden explicit H1 to obey strict SEO requirements natively */}
            <h1 className="sr-only">Digital Marketing, Creative & Web Expert from India Driving Global Growth.</h1>

            {/* Asymmetrical Layout */}
            <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative pt-8 md:pt-0">

                {/* Calm left side (Text) */}
                <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col justify-center relative">

                    {/* Ultimate Premium Glass Container */}
                    <div className="hero-glass relative p-8 md:p-14 lg:p-16 rounded-[2rem] bg-black/40 border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] backdrop-blur-3xl group">

                        {/* Extremely subtle lighting bleed from top left */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                        <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-white opacity-5 blur-[120px] pointer-events-none rounded-full"></div>

                        {/* Strategic Eyebrow */}
                        <div className="hero-element inline-flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-white/40"></span>
                            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-white/50">
                                Hardik Sharma
                            </span>
                        </div>

                        {/* Sharp, Bold Headline - High Contrast */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-bold font-heading mb-8 tracking-tighter leading-[1.1] text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
                            <div className="hero-line pb-2">I help brands scale</div>
                            <div className="hero-line pb-2">with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-luxury-blue to-luxury-violet italic font-light drop-shadow-[0_0_30px_rgba(0,85,255,0.4)]">performance,</span></div>
                            <div className="hero-line pb-2">creativity, & high-impact</div>
                            <div className="hero-line pb-2">digital experiences.</div>
                        </h2>

                        {/* Subheadline - Readability focused */}
                        <p className="hero-element text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 drop-shadow-md max-w-2xl">
                            A Digital Marketing, Creative, Video, and Web Expert from India working with global brands. I combine <span className="text-white font-medium">Indian authenticity</span> with <span className="text-white font-medium">international premium standards</span> to drive measurable growth.
                        </p>

                        {/* CTAs */}
                        <div className="hero-element flex flex-wrap items-center gap-4 mb-8">
                            {/* Scroll trigger handled globally or can trigger vault modal if architected */}
                            <MagneticWrapper strength={30}>
                                <button
                                    onClick={() => document.getElementById('work-vault-trigger')?.click()}
                                    className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-luxury-blue text-white font-bold text-sm hover:scale-[1.03] transition-transform shadow-[0_0_40px_rgba(0,85,255,0.4)] border border-blue-400/30"
                                >
                                    View My Work <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-rotate-45 transition-transform" />
                                </button>
                            </MagneticWrapper>

                            <MagneticWrapper strength={20}>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-luxury-violet/10 border border-luxury-violet/30 text-white font-medium text-sm hover:bg-luxury-violet/20 hover:shadow-[0_0_20px_rgba(143,0,255,0.2)] transition-all"
                                >
                                    Get Free Growth Audit
                                </button>
                            </MagneticWrapper>

                            <MagneticWrapper strength={10}>
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-transparent border border-white/5 text-white/70 font-medium text-sm hover:text-white hover:border-white/20 transition-colors"
                                >
                                    <Presentation className="w-4 h-4" /> Book Strategy Call
                                </button>
                            </MagneticWrapper>
                        </div>

                        {/* Minimal Trust Indicator */}
                        <div className="hero-element border-t border-white/10 pt-6 mt-6 w-full flex flex-col md:flex-row md:items-center gap-4 text-xs font-semibold uppercase tracking-widest text-white/40">
                            <span>Core Expertise</span>
                            <div className="hidden md:block w-8 h-[2px] bg-gradient-to-r from-luxury-blue to-luxury-violet rounded-full shadow-[0_0_10px_rgba(0,85,255,0.5)]"></div>
                            <div className="flex flex-wrap gap-4 text-white/80">
                                <span className="hover:text-luxury-blue transition-colors cursor-default">Performance</span>
                                <span className="hover:text-white transition-colors cursor-default">Systems</span>
                                <span className="hover:text-luxury-violet transition-colors cursor-default">Video</span>
                                <span className="hover:text-blue-400 transition-colors cursor-default">Web</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Creative Right Side (Image Identity) */}
                <div className="hero-element flex w-full md:w-[40%] lg:w-[35%] justify-center items-center relative z-10" style={{ perspective: '1200px' }}>

                    <MagneticWrapper strength={15}>
                        <div className="relative w-72 lg:w-96 aspect-[3/4] rounded-[2rem] overflow-visible group transform-gpu hover:rotate-y-[-5deg] hover:rotate-x-[5deg] transition-all duration-700">

                            {/* Premium Glow effect behind image */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-luxury-blue to-luxury-violet opacity-30 group-hover:opacity-60 blur-2xl transition-opacity duration-1000 rounded-[3rem] mix-blend-screen pointer-events-none"></div>

                            {/* Main Image Mask */}
                            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-black/50 z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                                {/* NOTE: Using placeholder, User will swap with /profile.png */}
                                <img
                                    src="/Hardik.png"
                                    alt="Hardik Sharma"
                                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80'; }}
                                    className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 scale-105 group-hover:scale-110 transition-all duration-1000"
                                />

                                {/* Inner Glass Flare */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
                            </div>

                            {/* Floating Tech Badge */}
                            <div className="absolute -bottom-6 -left-8 bg-black/60 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl shadow-2xl transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-700 z-20">
                                <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Current Status</span>
                                <span className="text-sm font-bold text-white flex items-center gap-3">
                                    <div className="flex items-center justify-center relative">
                                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 absolute animate-ping opacity-75"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-luxury-blue relative"></div>
                                    </div>
                                    Available for Projects
                                </span>
                            </div>

                            {/* Abstract Floating Graphic */}
                            <div className="absolute -top-10 -right-6 w-24 h-24 border border-luxury-violet/30 rounded-full flex items-center justify-center animate-spin-slow z-0">
                                <div className="w-full h-[1px] bg-luxury-violet/30 absolute"></div>
                                <div className="h-full w-[1px] bg-luxury-violet/30 absolute"></div>
                            </div>

                        </div>
                    </MagneticWrapper>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4 hero-element opacity-20 hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase tracking-widest font-bold rotate-90 origin-right translate-y-6 -translate-x-2 text-white">Scroll</span>
                <div className="w-[1px] h-16 bg-white/20 overflow-hidden relative mt-8">
                    <div className="absolute top-0 left-0 w-full h-[50%] bg-white animate-bounce" style={{ transformOrigin: 'top' }}></div>
                </div>
            </div>

        </section>
    );
}

'use client';

import { ArrowLeft, Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import MagneticWrapper from '@/components/MagneticWrapper';

export default function VSLFunnel() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500 selection:text-white">

            <div className="p-4 md:p-8 lg:p-12 pb-0">
                <Link href="/#work-vault-trigger" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Vault
                </Link>
            </div>

            {/* Mock Landing Page Hero */}
            <div className="max-w-5xl mx-auto px-4 py-20 text-center flex flex-col items-center">

                <h3 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-6 animate-pulse">
                    Live VSL Funnel Preview
                </h3>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-tight tracking-tighter">
                    How We Scaled To <span className="text-red-500">$100k/MRR</span> Without Using Complex Funnels
                </h1>

                <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-16 font-light">
                    The exact 3-step high-ticket acquisition model driving a 240% increase in calendar bookings for modern consultants.
                </p>

                {/* Video Player Mockup */}
                <div className="w-full max-w-4xl bg-[#111] p-2 rounded-3xl border border-white/10 shadow-[0_0_100px_rgba(239,68,68,0.15)] relative group cursor-pointer aspect-video flex items-center justify-center overflow-hidden mb-16">
                    <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80" alt="VSL Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                    <div className="relative z-10 w-24 h-24 bg-red-500/90 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white ml-2" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white">Watch The Free Breakdown (12:45)</span>
                    </div>
                </div>

                <MagneticWrapper strength={20}>
                    <button className="text-2xl font-bold bg-red-600 hover:bg-red-500 text-white px-12 py-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 shadow-[0_0_40px_rgba(239,68,68,0.4)]">
                        Apply For Your Strategy Call <ArrowRight className="w-6 h-6" />
                    </button>
                    <p className="text-white/40 mt-4 text-sm">*Strictly limited to 5 new clients per month.</p>
                </MagneticWrapper>
            </div>

            {/* Micro-Commitment Section */}
            <div className="bg-[#050505] py-24 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 font-heading">What You'll Discover:</h2>
                        <ul className="space-y-4">
                            {['The Old Way vs The New Way of Client Acquisition', 'How to Engineer a "God Offer"', 'The 1-Click Calendar Booking Architecture'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-white/70">
                                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
                        <h3 className="text-xl font-bold mb-4 font-heading text-center">Ready To Scale?</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Your Name" disabled className="w-full bg-black border border-white/10 p-4 rounded-xl text-white/50 opacity-50 cursor-not-allowed" />
                            <input type="email" placeholder="Best Email Address" disabled className="w-full bg-black border border-white/10 p-4 rounded-xl text-white/50 opacity-50 cursor-not-allowed" />
                            <button disabled className="w-full bg-white/10 text-white/50 p-4 rounded-xl font-bold cursor-not-allowed mt-2 border border-white/5">Watch Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

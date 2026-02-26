'use client';

import { ArrowLeft, Clock, Calendar, CheckCircle, Video } from 'lucide-react';
import Link from 'next/link';

export default function WebinarFunnel() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-4 md:p-8 lg:p-12 font-sans pb-32">

            <Link href="/#work-vault-trigger" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Vault
            </Link>

            <header className="mb-16">
                <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    Evergreen Blueprint
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Automated Webinar <span className="text-cyan-400">Architecture</span></h1>
                <p className="text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
                    Interactive wireframe representing an evergreen webinar registration flow designed to convert cold traffic into high-ticket buyers on autopilot.
                </p>
            </header>

            {/* Architecture Flow */}
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 py-12">

                {/* Step 1: Optin */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-sm flex flex-col relative z-10 shadow-xl">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6 text-cyan-400 font-bold border border-cyan-500/30">1</div>
                    <h3 className="text-xl font-bold mb-2">Registration Page</h3>
                    <p className="text-sm text-slate-400 mb-6">Cold traffic lands here via Meta Ads. Converts at 32% opt-in rate.</p>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                        <div className="h-4 bg-slate-800 rounded w-3/4 mb-3"></div>
                        <div className="h-4 bg-slate-800 rounded w-1/2 mb-6"></div>
                        <div className="bg-cyan-500/20 text-cyan-400 text-xs font-bold p-3 rounded text-center border border-cyan-500/20 mb-3">Reserve My Spot</div>
                    </div>
                </div>

                <div className="hidden lg:block w-16 h-1 bg-slate-700 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-slate-700 rotate-45 transform translate-x-1"></div>
                </div>

                {/* Step 2: Indoctrination */}
                <div className="bg-slate-800 border border-cyan-500/30 rounded-2xl p-6 w-full max-w-sm flex flex-col relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.1)] transform lg:-translate-y-8">
                    <div className="absolute -top-3 -right-3 bg-cyan-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full animate-pulse">Live Demo</div>
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 text-cyan-400 font-bold border border-cyan-500">2</div>
                    <h3 className="text-xl font-bold mb-2 text-cyan-50">The Show Room</h3>
                    <p className="text-sm text-cyan-100/60 mb-6">Simulated "Just in Time" viewing environment. High perceived value.</p>
                    <div className="bg-slate-900 p-2 rounded-xl border border-slate-700 relative overflow-hidden aspect-video flex items-center justify-center">
                        <Video className="w-8 h-8 text-slate-600" />
                        <div className="absolute bottom-2 left-2 flex gap-1">
                            <span className="w-2 h-2 rounded-full bg-cyan-500"></span><span className="w-2 h-2 rounded-full bg-slate-700"></span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block w-16 h-1 bg-slate-700 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-slate-700 rotate-45 transform translate-x-1"></div>
                </div>

                {/* Step 3: Fast Action */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 w-full max-w-sm flex flex-col relative z-10 shadow-xl">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-6 text-green-400 font-bold border border-green-500/30">3</div>
                    <h3 className="text-xl font-bold mb-2">Application / Stripe</h3>
                    <p className="text-sm text-slate-400 mb-6">Scarcity timer activates. 5% conversion rate to high-ticket sale.</p>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-center mb-4">
                            <div className="h-4 bg-slate-800 rounded w-1/3"></div>
                            <span className="text-xs font-mono text-red-400 border border-red-500/30 bg-red-500/10 px-2 py-1 rounded">14:59</span>
                        </div>
                        <div className="bg-green-500/20 text-green-400 text-xs font-bold p-3 rounded text-center border border-green-500/20">Complete Purchase ($997)</div>
                    </div>
                </div>

            </div>

            {/* Email Sequence Graphic */}
            <div className="max-w-4xl mx-auto mt-12 bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-3"><Calendar className="w-5 h-5 text-cyan-400" /> Automated Follow-up Sequence</h3>
                <div className="space-y-3">
                    {[
                        { day: 'Day 0', title: 'Your Replay Link (24hr Expiry)', open: '78%' },
                        { day: 'Day 1', title: 'Did you miss this specific strategy?', open: '52%' },
                        { day: 'Day 2', title: 'Case Study: How John scaled past 10k', open: '46%' },
                        { day: 'Day 3', title: '[Final Warning] Cart Closes Tonight.', open: '61%' },
                    ].map((email, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-slate-900 p-4 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-4 mb-2 sm:mb-0">
                                <span className="text-xs font-bold uppercase text-slate-500 bg-slate-800 px-3 py-1 rounded-full">{email.day}</span>
                                <span className="font-semibold">{email.title}</span>
                            </div>
                            <span className="text-xs text-slate-400"><span className="text-cyan-400 font-bold">{email.open}</span> Open Rate</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

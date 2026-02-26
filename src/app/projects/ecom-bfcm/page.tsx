'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import Link from 'next/link';

export default function EcomBFCM() {
    return (
        <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 lg:p-12 font-sans selection:bg-luxury-blue selection:text-white pb-32">

            <Link href="/#work-vault-trigger" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Vault
            </Link>

            <header className="mb-16">
                <div className="inline-block px-3 py-1 bg-luxury-blue/10 border border-luxury-blue/30 text-luxury-blue text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    Live Performance Data
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">Ecom BFCM Scaling <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-blue to-blue-400">Dashboard</span></h1>
                <p className="text-xl text-white/60 font-light max-w-3xl leading-relaxed">
                    Live view of a custom Meta & Google Ads analytics dashboard engineered for a 4-day BFCM sprint,
                    tracking a 4.2x ROAS and $850k in rapid ARR generation.
                </p>
            </header>

            {/* Dashboard Mockup */}
            <div className="w-full max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 backdrop-blur-3xl shadow-2xl">

                {/* Top KPI row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { title: 'Total Revenue (4 Days)', value: '$852,431.50', up: '+420%', icon: <DollarSign className="text-green-400" /> },
                        { title: 'Blended ROAS', value: '4.24x', up: '+1.2x', icon: <TrendingUp className="text-luxury-blue" /> },
                        { title: 'Total Ad Spend', value: '$201,045.00', up: null, icon: <Activity className="text-luxury-violet" /> },
                        { title: 'New Customer Acq.', value: '14,289', up: '+310%', icon: <Users className="text-blue-400" /> },
                    ].map((kpi, i) => (
                        <div key={i} className="bg-black/50 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-40 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start">
                                <span className="text-white/50 text-xs font-bold uppercase tracking-wider">{kpi.title}</span>
                                {kpi.icon}
                            </div>
                            <div className="flex items-end justify-between">
                                <span className="text-3xl font-heading font-bold">{kpi.value}</span>
                                {kpi.up && <span className="text-green-400 text-sm font-bold bg-green-400/10 px-2 py-1 rounded">{kpi.up}</span>}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Chart Area */}
                    <div className="lg:col-span-2 bg-black/50 border border-white/5 rounded-2xl p-8 min-h-[400px] flex flex-col">
                        <h3 className="text-lg font-bold mb-8">Hourly Revenue Velocity (Meta vs Google)</h3>
                        <div className="flex-1 w-full bg-gradient-to-t from-luxury-blue/20 to-transparent border-b-2 border-l-2 border-white/10 relative rounded-bl-lg">
                            {/* Mock abstract graph lines */}
                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <polyline fill="none" stroke="#0055ff" strokeWidth="2" points="0,90 10,85 20,60 30,70 40,30 50,45 60,20 70,35 80,10 90,15 100,5" />
                                <polyline fill="none" stroke="#8f00ff" strokeWidth="2" points="0,95 10,90 20,80 30,85 40,65 50,75 60,50 70,60 80,45 90,55 100,30" strokeDasharray="4 4" />
                            </svg>
                        </div>
                        <div className="flex justify-center gap-6 mt-6 text-xs text-white/50 font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-2"><div className="w-3 h-3 bg-luxury-blue rounded-full"></div> Meta Campaigns</span>
                            <span className="flex items-center gap-2"><div className="w-3 h-3 bg-luxury-violet rounded-full"></div> Google PMax</span>
                        </div>
                    </div>

                    {/* Campaign Status Feed */}
                    <div className="bg-black/50 border border-white/5 rounded-2xl p-8 flex flex-col">
                        <h3 className="text-lg font-bold mb-8">Live Campaign Status</h3>
                        <div className="space-y-4 flex-1 overflow-y-auto pr-2">
                            {[
                                { name: 'BFCM_Retargeting_V2', status: 'Scaling', cpa: '$12.40', spend: '$45k' },
                                { name: 'Lookalike_1%_Purchasers', status: 'Stable', cpa: '$18.90', spend: '$82k' },
                                { name: 'Google_Search_Branded', status: 'Capped', cpa: '$4.20', spend: '$12k' },
                                { name: 'Broad_Creative_Test_C', status: 'Killed', cpa: '$42.10', spend: '$2k' },
                                { name: 'Advantage+_Shopping', status: 'Scaling', cpa: '$14.80', spend: '$60k' },
                            ].map((camp, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-luxury-blue/30 transition-colors cursor-default">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-bold truncate pr-4">{camp.name}</span>
                                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${camp.status === 'Scaling' ? 'bg-green-500/20 text-green-400' : camp.status === 'Stable' ? 'bg-blue-500/20 text-blue-400' : camp.status === 'Capped' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{camp.status}</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-white/40">
                                        <span>CPA: <span className="text-white">{camp.cpa}</span></span>
                                        <span>Spend: <span className="text-white">{camp.spend}</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

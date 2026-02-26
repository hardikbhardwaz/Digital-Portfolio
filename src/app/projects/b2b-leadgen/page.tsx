'use client';

import { ArrowLeft, Filter, PhoneCall, Mail, DollarSign, Database } from 'lucide-react';
import Link from 'next/link';

export default function B2BLeadGen() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-foreground p-4 md:p-8 lg:p-12 font-sans selection:bg-luxury-violet selection:text-white pb-32">

            <Link href="/#work-vault-trigger" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Vault
            </Link>

            <header className="mb-16">
                <div className="inline-block px-3 py-1 bg-luxury-violet/10 border border-luxury-violet/30 text-luxury-violet text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                    B2B Pipeline Visualizer
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">SaaS Lead Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-violet to-purple-400">Framework</span></h1>
                <p className="text-xl text-white/60 font-light max-w-3xl leading-relaxed">
                    Interactive view of the multi-channel lead qualification infrastructure built for a $12k/yr Enterprise SaaS, driving down Cost Per SQL by 65%.
                </p>
            </header>

            <div className="max-w-7xl mx-auto flex flex-col gap-8">

                {/* Pipeline Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Raw Leads (Top)', val: '4,102', icon: <Database className="w-4 h-4 text-gray-400" /> },
                        { label: 'MQLs (Engaged)', val: '840', icon: <Mail className="w-4 h-4 text-blue-400" /> },
                        { label: 'SQLs (Qualified)', val: '215', icon: <Filter className="w-4 h-4 text-purple-400" /> },
                        { label: 'Closed Won', val: '42', icon: <DollarSign className="w-4 h-4 text-green-400" /> },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col justify-between h-32">
                            <div className="flex items-center justify-between opacity-70">
                                {stat.icon}
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold font-heading">{stat.val}</h4>
                                <span className="text-xs uppercase tracking-widest text-white/40 font-bold">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pipeline UI Mockup */}
                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 overflow-x-auto">
                    <div className="min-w-[800px] flex gap-6 pb-4">

                        {/* Column 1 */}
                        <div className="flex-1 bg-black rounded-xl border border-white/5 p-4 flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 border-b border-white/10 pb-3">New Leads (LinkedIn)</h3>
                            {[1, 2, 3, 4].map(n => (
                                <div key={n} className="bg-[#1a1a1a] p-4 rounded-lg border border-white/5 hover:border-luxury-violet/40 cursor-pointer transition-colors">
                                    <h4 className="font-bold text-sm mb-1">Director of Tech at Corp {n}</h4>
                                    <p className="text-xs text-white/40">Acquired: {n} hrs ago via eBook</p>
                                </div>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="flex-1 bg-black rounded-xl border border-white/5 p-4 flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-luxury-violet/80 border-b border-white/10 pb-3">MQL Sequence Active</h3>
                            {[1, 2].map(n => (
                                <div key={n} className="bg-[#1a1a1a] p-4 rounded-lg border border-luxury-violet/20 hover:border-luxury-violet transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-bold text-sm">VP Engineering</h4>
                                        <span className="w-2 h-2 rounded-full bg-luxury-violet animate-pulse"></span>
                                    </div>
                                    <p className="text-xs text-white/40 mb-3">Email 2 Read (100% Score)</p>
                                    <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden"><div className="w-[60%] h-full bg-luxury-violet"></div></div>
                                </div>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className="flex-1 bg-black rounded-xl border border-white/5 p-4 flex flex-col gap-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-green-400 border-b border-white/10 pb-3">Sales Qualified (SQL)</h3>
                            <div className="bg-[#1a1a1a] p-4 rounded-lg border border-green-400/30 hover:border-green-400 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-sm">CTO at ScaleUp Inc</h4>
                                    <PhoneCall className="w-3 h-3 text-green-400" />
                                </div>
                                <p className="text-xs text-green-400/80 mb-3">Meeting Booked: Tomorrow 2PM</p>
                                <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-md transition-colors border border-white/10">View Lead Profile</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

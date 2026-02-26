'use client';

import { ArrowLeft, MessageCircle, Bot, Zap, Smartphone, Code, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppBot() {
    return (
        <div className="min-h-screen bg-green-950 text-green-50 p-4 md:p-8 lg:p-12 font-sans selection:bg-green-500 selection:text-white pb-32">

            <Link href="/#work-vault-trigger" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Vault
            </Link>

            <header className="mb-16">
                <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 flex items-center gap-2 w-fit">
                    <Zap className="w-4 h-4" /> Cloud API Integration
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">WhatsApp Conversational <span className="text-green-400">AI Bot</span></h1>
                <p className="text-xl text-green-100/70 font-light max-w-3xl leading-relaxed">
                    A live demonstration of a custom Node.js script connecting Facebook Lead Ads directly into WhatsApp for instant, 1-second lead qualification workflows.
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

                {/* Simulated Phone UI */}
                <div className="flex justify-center">
                    <div className="w-[320px] h-[650px] bg-black rounded-[3rem] border-8 border-green-900 overflow-hidden relative shadow-2xl flex flex-col">

                        {/* Status Bar */}
                        <div className="h-12 bg-green-900/50 backdrop-blur-md flex items-center justify-between px-6 text-[10px] font-bold text-white z-10 border-b border-white/5">
                            <span>14:32</span>
                            <div className="flex gap-1.5"><Smartphone className="w-3 h-3" /></div>
                        </div>

                        {/* WhatsApp Header */}
                        <div className="bg-[#075E54] p-3 flex items-center gap-3 shadow-md z-10">
                            <ArrowLeft className="w-5 h-5 text-white" />
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <Bot className="w-5 h-5 text-[#075E54]" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Growth AI Assistant</h3>
                                <p className="text-white/70 text-[10px]">online</p>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 bg-[#E5DDD5] p-4 flex flex-col gap-3 overflow-y-auto" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundSize: 'cover', opacity: 0.9 }}>

                            <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[85%] border border-[#dcf8c6]/50">
                                <p className="text-[#111] text-sm">Hi Hardik! 👋 I saw you requested the Scale Protocol eBook. Are you currently doing over $10k/mo?</p>
                                <p className="text-[#999] text-[10px] text-right mt-1">14:30</p>
                            </div>

                            <div className="bg-[#dcf8c6] p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[85%] self-end">
                                <p className="text-[#111] text-sm">Yes, around $25k/mo right now.</p>
                                <p className="text-[#55bb76] text-[10px] text-right mt-1 flex justify-end gap-1">14:31 <CheckCircle2 className="w-3 h-3" /></p>
                            </div>

                            <div className="bg-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm max-w-[85%] border border-[#dcf8c6]/50">
                                <p className="text-[#111] text-sm">Perfect. Based on that volume, the eBook is attached below. 📄<br /><br />Would you like to book a quick 15-min mapping session to discuss scaling that $25k to $100k?</p>
                                <div className="mt-2 flex flex-col gap-1">
                                    <button className="bg-[#f0f0f0] text-[#075E54] font-bold text-xs py-2 rounded-lg border border-[#ddd]">Yes, let's chat</button>
                                    <button className="bg-[#f0f0f0] text-[#075E54] font-bold text-xs py-2 rounded-lg border border-[#ddd]">Just the eBook for now</button>
                                </div>
                                <p className="text-[#999] text-[10px] text-right mt-1">14:32</p>
                            </div>

                        </div>

                        {/* Input Area */}
                        <div className="bg-[#f0f0f0] p-2 flex items-center gap-2">
                            <div className="flex-1 bg-white rounded-full py-2 px-4 text-sm text-[#999]">Type a message...</div>
                            <div className="w-10 h-10 rounded-full bg-[#00897B] flex items-center justify-center">
                                <MessageCircle className="w-5 h-5 text-white" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Dashboard Metrics Panel */}
                <div className="flex flex-col gap-6 justify-center">
                    <div className="bg-green-900/30 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2"><Code className="w-5 h-5 text-green-400" /> Webhook Architecture</h3>
                        <p className="text-green-100/70 text-sm mb-6 leading-relaxed">
                            Upon a Facebook Lead Form submission, a serverless function immediately triggers the WhatsApp Cloud API. This bypasses email entirely, guaranteeing a 100% open rate and dropping speed-to-lead from hours to exactly <span className="text-green-400 font-bold">1.2 seconds</span>.
                        </p>

                        <div className="flex flex-col gap-4">
                            {[
                                { metric: 'Speed to Lead', old: '14 hrs', new: '1.2s' },
                                { metric: 'Qualification Rate', old: '12%', new: '68%' },
                                { metric: 'Message Open Rate', old: '22%', new: '98%' },
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-green-800/50 pb-3">
                                    <span className="font-bold text-green-50">{row.metric}</span>
                                    <div className="flex items-center gap-3">
                                        <span className="text-red-400/70 line-through text-xs font-mono">{row.old}</span>
                                        <ArrowLeft className="w-4 h-4 text-green-500 rotate-180" />
                                        <span className="text-green-400 font-mono font-bold bg-green-500/10 px-2 py-1 rounded">{row.new}</span>
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

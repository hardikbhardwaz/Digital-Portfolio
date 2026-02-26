'use client';

import { ArrowLeft, Server, CreditCard, ShoppingCart, Database, GitMerge } from 'lucide-react';
import Link from 'next/link';

export default function CRMSync() {
    return (
        <div className="min-h-screen bg-indigo-950 text-indigo-50 p-4 md:p-8 lg:p-12 font-sans selection:bg-indigo-500 selection:text-white pb-32">

            <Link href="/#work-vault-trigger" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Vault
            </Link>

            <header className="mb-16">
                <div className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-xs font-bold uppercase tracking-widest rounded-full mb-6 flex items-center gap-2 w-fit">
                    <GitMerge className="w-4 h-4" /> Integromat / Make.com Scenario
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Enterprise Scale <span className="text-indigo-400">Sync Architecture</span></h1>
                <p className="text-xl text-indigo-100/70 font-light max-w-3xl leading-relaxed">
                    Interactive visualization of a massive 30+ module Make.com scenario bridging Shopify, Stripe, and HubSpot to automate high-ticket physical product fulfillment globally.
                </p>
            </header>

            {/* Scenario Canvas Mockup */}
            <div className="w-full max-w-7xl mx-auto bg-indigo-900/20 border border-indigo-700/50 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden min-h-[600px] flex items-center justify-center">

                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-4xl">

                    {/* Trigger Vector */}
                    <div className="flex gap-4 items-center">
                        <div className="bg-white text-[#96bf48] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(150,191,72,0.4)] border-4 border-[#96bf48]">
                            <ShoppingCart className="w-8 h-8" />
                        </div>
                        <div className="bg-indigo-900/80 p-3 rounded-xl border border-indigo-500/30 shadow-lg">
                            <span className="text-[10px] uppercase font-bold text-indigo-300 block mb-1">Trigger Event</span>
                            <span className="font-bold">Shopify: Watch Orders</span>
                        </div>
                    </div>

                    <div className="w-1 h-12 bg-indigo-500/50 relative"><div className="absolute -bottom-2 -left-1.5 w-4 h-4 border-b-2 border-r-2 border-indigo-500/50 rotate-45"></div></div>

                    {/* Router */}
                    <div className="bg-indigo-800 w-12 h-12 rounded-full border-2 border-indigo-400 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                        <Server className="w-5 h-5 text-indigo-200" />
                    </div>

                    <div className="w-full max-w-2xl flex justify-between relative mt-4">
                        {/* Connecting Lines */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-indigo-500/50"></div>
                        <div className="absolute top-0 left-1/4 w-1 h-8 bg-indigo-500/50"><div className="absolute -bottom-2 -left-1.5 w-4 h-4 border-b-2 border-r-2 border-indigo-500/50 rotate-45"></div></div>
                        <div className="absolute top-0 right-1/4 w-1 h-8 bg-indigo-500/50"><div className="absolute -bottom-2 -left-1.5 w-4 h-4 border-b-2 border-r-2 border-indigo-500/50 rotate-45"></div></div>

                        {/* Branch 1 */}
                        <div className="flex flex-col items-center gap-4 mt-12 w-1/2">
                            <div className="bg-white text-[#635BFF] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,91,255,0.4)] border-4 border-[#635BFF]">
                                <CreditCard className="w-8 h-8" />
                            </div>
                            <div className="bg-indigo-900/80 p-3 rounded-xl border border-indigo-500/30 text-center shadow-lg">
                                <span className="text-[10px] uppercase font-bold text-indigo-300 block mb-1">Financial Link</span>
                                <span className="font-bold text-sm block">Stripe: Retrieve Charge</span>
                                <span className="text-xs text-indigo-200/50">Capture gross volume & fees</span>
                            </div>
                        </div>

                        {/* Branch 2 */}
                        <div className="flex flex-col items-center gap-4 mt-12 w-1/2">
                            <div className="bg-white text-[#ff7a59] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,122,89,0.4)] border-4 border-[#ff7a59]">
                                <Database className="w-8 h-8" />
                            </div>
                            <div className="bg-indigo-900/80 p-3 rounded-xl border border-indigo-500/30 text-center shadow-lg">
                                <span className="text-[10px] uppercase font-bold text-indigo-300 block mb-1">CRM Upsert</span>
                                <span className="font-bold text-sm block">HubSpot: Create/Update Deal</span>
                                <span className="text-xs text-indigo-200/50">Move pipeline stage to "Won"</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

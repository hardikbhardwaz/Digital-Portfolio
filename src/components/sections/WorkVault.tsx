'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Folder, FileVideo, FileCode2, LineChart, FileText, ArrowRight, ChevronRight } from 'lucide-react';
import MagneticWrapper from '../MagneticWrapper';

type CategoryType = 'All' | 'Digital Marketing' | 'Funnels' | 'Branding' | 'Video' | 'Automation' | 'Websites';

const DRIVE_FILES = [
    { id: 'f1', name: 'SaaS_Growth_Q3.mp4', type: 'Video', cat: 'Digital Marketing', size: '142 MB', thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80', description: 'Engineered a multi-channel performance strategy targeting high-net-worth individuals, dropping acquisition costs massively.' },
    { id: 'f2', name: 'Global_Rebrand_Guidelines.pdf', type: 'Branding', cat: 'Branding', size: '48 MB', thumb: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80', description: 'A complete visual overhaul for a B2B SaaS platform positioning them as the premium leader in their vertical.' },
    { id: 'f3', name: 'Auto_Cinematic_Final.mov', type: 'Video', cat: 'Video', size: '1.2 GB', thumb: 'https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&q=80', description: 'High-fidelity motion tracking and cinematic storytelling blending raw live-action footage with immersive CGI environments.' },
    { id: 'f4', name: 'Headless_Nextjs_Shopify.zip', type: 'Websites', cat: 'Websites', size: '12 MB', thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80', description: 'Architected a headless Next.js & Shopify integration handling tens of thousands of dynamic SKUs with zero latency.' },
    { id: 'f5', name: 'WhatsApp_Lead_Funnel_Logic.js', type: 'Automation', cat: 'Funnels', size: '4 KB', thumb: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80', description: 'Deeply automated WhatsApp Chatbot funnel filtering unqualified leads and closing high-ticket sales automatically.' },
    { id: 'f6', name: 'CRO_A_B_Test_Results.xlsx', type: 'Digital Marketing', cat: 'Digital Marketing', size: '2 MB', thumb: 'https://images.unsplash.com/photo-1504868584819-f8e8b4bcafe2?auto=format&fit=crop&q=80', description: 'Extensive multivariate testing data leading to a 45% uplift in base conversion rate for an international e-commerce brand.' },
];

const CATEGORIES: CategoryType[] = ['All', 'Digital Marketing', 'Funnels', 'Branding', 'Video', 'Automation', 'Websites'];

export default function WorkVault() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState<CategoryType>('All');
    const [selectedFile, setSelectedFile] = useState<any | null>(null);

    const filteredFiles = DRIVE_FILES.filter(f => activeFilter === 'All' || f.cat === activeFilter);

    const getIcon = (type: string) => {
        switch (type) {
            case 'Video': return <FileVideo className="w-5 h-5 text-luxury-blue" />;
            case 'Websites': return <FileCode2 className="w-5 h-5 text-luxury-violet" />;
            case 'Digital Marketing': return <LineChart className="w-5 h-5 text-green-500" />;
            default: return <FileText className="w-5 h-5 text-gray-400" />;
        }
    };

    return (
        <section className="py-40 px-4 md:px-12 lg:px-24 w-full flex justify-center items-center relative z-20">

            {/* Interactive Trigger Button */}
            <MagneticWrapper strength={40}>
                <button
                    id="work-vault-trigger"
                    onClick={() => setIsOpen(true)}
                    className="group relative px-12 py-8 rounded-3xl bg-black border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] hover:shadow-[0_0_120px_rgba(0,85,255,0.2)] transition-all duration-700 overflow-hidden transform-gpu"
                >
                    {/* Animated Glow Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#0055ff_50%,#000000_100%)] animate-spin-slow mix-blend-screen pointer-events-none"></div>
                    <div className="absolute inset-[1px] bg-black rounded-[calc(1.5rem-1px)] z-0"></div>

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:bg-luxury-blue/20 group-hover:text-luxury-blue transition-colors">
                            <Folder className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl md:text-4xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 group-hover:text-white transition-colors">
                            Explore My Work Vault
                        </h3>
                        <p className="text-sm font-semibold tracking-widest uppercase text-white/40 group-hover:text-luxury-blue transition-colors flex items-center gap-2">
                            <span>Restricted Access</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </p>
                    </div>
                </button>
            </MagneticWrapper>

            {/* Fullscreen Cinematic Modal representing a Google Drive archive */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl overflow-y-auto"
                    >
                        <div className="min-h-screen w-full p-4 md:p-12 lg:p-24 max-w-[1600px] mx-auto flex flex-col">

                            {/* Modal Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 border-b border-white/10 pb-8 relative">
                                <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors z-20">
                                    <X className="w-6 h-6" />
                                </button>

                                <div>
                                    <div className="flex items-center gap-3 text-white/50 text-sm font-semibold tracking-widest uppercase mb-4">
                                        <Folder className="w-4 h-4" /> <span>My Drive</span> <ChevronRight className="w-3 h-3" /> <span className="text-white">Hardik_Public_Vault_2026</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">The Digital Archive</h2>
                                </div>

                                {/* Filters */}
                                <div className="flex flex-wrap gap-2 mt-4 md:mt-0 max-w-2xl justify-end">
                                    {CATEGORIES.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveFilter(cat)}
                                            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeFilter === cat
                                                ? 'bg-luxury-blue text-white shadow-[0_0_20px_rgba(0,85,255,0.4)]'
                                                : 'bg-white/5 text-white/50 border border-white/5 hover:bg-white/10 hover:text-white'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Drive Grid Layout */}
                            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                <AnimatePresence>
                                    {filteredFiles.map(file => (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            key={file.id}
                                            onClick={() => setSelectedFile(file)}
                                            className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-luxury-blue/50 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col"
                                        >
                                            {/* Preview Image */}
                                            <div className="w-full aspect-video bg-black relative overflow-hidden">
                                                <img src={file.thumb} alt={file.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                                                    {getIcon(file.type)}
                                                </div>
                                            </div>

                                            {/* Meta */}
                                            <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/20">
                                                <div>
                                                    <p className="text-white font-semibold font-sans truncate mb-1" title={file.name}>{file.name}</p>
                                                    <p className="text-xs text-white/40 tracking-wider">Type: {file.type}</p>
                                                </div>
                                                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                                                    <span className="text-[10px] uppercase font-bold text-luxury-blue bg-luxury-blue/10 px-2 py-1 rounded">{file.cat}</span>
                                                    <span className="text-xs text-white/30 font-mono">{file.size}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                            {/* Project Specific Overlay (Simulating opening a file) */}
                            <AnimatePresence>
                                {selectedFile && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                                    >
                                        <div className="w-full max-w-4xl bg-[#111] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row">
                                            <button onClick={(e) => { e.stopPropagation(); setSelectedFile(null); }} className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black rounded-full text-white">
                                                <X className="w-5 h-5" />
                                            </button>

                                            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                                                <img src={selectedFile.thumb} className="w-full h-full object-cover" />
                                            </div>

                                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                                <div className="flex items-center gap-3 mb-6">
                                                    {getIcon(selectedFile.type)}
                                                    <span className="text-white/50 text-sm font-mono">{selectedFile.name}</span>
                                                </div>
                                                <h3 className="text-3xl font-heading font-bold text-white mb-4">Strategic Execution</h3>
                                                <p className="text-white/70 font-light leading-relaxed mb-8">{selectedFile.description}</p>

                                                <button className="w-full py-4 text-center bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors">
                                                    View Full Case Study
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}

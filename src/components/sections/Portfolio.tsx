'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import MagneticWrapper from '../MagneticWrapper';

type Category = 'All' | 'Marketing' | 'Graphics' | 'Video' | 'Web';

interface Project {
    id: number;
    title: string;
    category: Category;
    image: string;
    videoUrl?: string; // Optional video preview
    metrics: { label: string; value: string }[];
    description: string;
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Enterprise Fintech Scale',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        metrics: [{ label: 'RoAS', value: '450%' }, { label: 'New ARR', value: '$2.4M' }],
        description: 'I engineered an aggressive, multi-channel performance marketing strategy targeting high-net-worth individuals, dropping acquisition costs significantly.'
    },
    {
        id: 2,
        title: 'Global SaaS Rebrand',
        category: 'Graphics',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
        videoUrl: 'https://cdn.pixabay.com/vimeo/328243006/abstract-22709.mp4?width=1280&hash=85e82f50af8c79294e02de8b704c718a38a7d32c',
        metrics: [{ label: 'Brand Lift', value: '64%' }, { label: 'Market Share', value: '+12%' }],
        description: 'A complete visual overhaul for a B2B SaaS platform. I designed an identity positioning them as the premium, indisputable leader in their vertical.'
    },
    {
        id: 3,
        title: 'Automotive Cinematic Ad',
        category: 'Video',
        image: 'https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&q=80',
        videoUrl: 'https://cdn.pixabay.com/vimeo/143573216/car-961.mp4?width=1280&hash=5f4cf1e271ee9497e5fc7acdcad2f64a4d952615',
        metrics: [{ label: 'Views', value: '1.2M' }, { label: 'Engagement', value: '14%' }],
        description: 'High-fidelity motion tracking and cinematic storytelling blending raw live-action footage with immersive CGI environments.'
    },
    {
        id: 4,
        title: 'Headless E-Commerce',
        category: 'Web',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        metrics: [{ label: 'Load Speed', value: '0.8s' }, { label: 'Conversion', value: '+45%' }],
        description: 'I architected a headless Next.js & Shopify integration handling tens of thousands of dynamic SKUs with absolute zero latency.'
    },
    {
        id: 5,
        title: 'Education Lead Funnel',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
        metrics: [{ label: 'Lead Cost', value: '-60%' }, { label: 'Enrollments', value: '+300' }],
        description: 'A deeply automated WhatsApp and AI Chatbot funnel filtering unqualified students and closing high-ticket program sales.'
    }
];

const CATEGORIES: Category[] = ['All', 'Marketing', 'Graphics', 'Video', 'Web'];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState<Category>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = PROJECTS.filter(
        (p) => activeFilter === 'All' || p.category === activeFilter
    );

    return (
        <section className="py-16 md:py-32 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto">

            <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <MagneticWrapper strength={10}>
                        <h2 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold mb-4 inline-block">
                            Creative <span className="text-luxury-blue">Gallery</span>
                        </h2>
                    </MagneticWrapper>
                    <p className="text-foreground/70 text-lg max-w-xl font-light">
                        An immersive look at the ecosystems I&apos;ve engineered. Hover to reveal cinematic previews.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3">
                    {CATEGORIES.map((cat) => (
                        <MagneticWrapper key={cat} strength={20}>
                            <button
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${activeFilter === cat
                                    ? 'bg-foreground text-background shadow-lg scale-105'
                                    : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                                    }`}
                            >
                                {cat}
                            </button>
                        </MagneticWrapper>
                    ))}
                </div>
            </div>

            {/* Experimental Masonry Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                            transition={{ duration: 0.4, type: 'spring' }}
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={`group cursor-pointer relative rounded-2xl overflow-hidden bg-foreground/5 border border-border
                        ${index === 2 || index === 3 ? 'md:col-span-2 lg:col-span-2 aspect-video' : 'aspect-[4/5]'}
                    `}
                        >
                            {/* Media Layer */}
                            <div className="absolute inset-0">
                                {project.videoUrl ? (
                                    <video
                                        src={project.videoUrl}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover scale-[1.05] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                ) : (
                                    <Image
                                        fill
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover scale-[1.05] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    />
                                )}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>

                            {/* Content Layer */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center justify-between w-full mb-3">
                                    <div className="px-3 py-1 bg-background/50 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider w-fit border border-white/10">
                                        {project.category}
                                    </div>
                                    {project.videoUrl && <PlayCircle className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700" />}
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-white">{project.title}</h3>
                                <div className="w-0 group-hover:w-full h-[1px] bg-luxury-blue mt-4 transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Cinematic Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/80 backdrop-blur-3xl"
                    >
                        <motion.div
                            initial={{ y: 100, scale: 0.95, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 50, scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative w-full max-w-6xl bg-surface border border-border rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-background/80 hover:bg-background backdrop-blur-xl transition-transform hover:scale-110 border border-border"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-black flex items-center justify-center">
                                {selectedProject.videoUrl ? (
                                    <video src={selectedProject.videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80" />
                                ) : (
                                    <Image fill src={selectedProject.image} alt={selectedProject.title} className="object-cover opacity-80" />
                                )}
                            </div>

                            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
                                <div className="mb-4 px-4 py-2 rounded-full bg-foreground/5 text-xs font-bold uppercase tracking-widest w-fit text-luxury-blue border border-luxury-blue/20">
                                    {selectedProject.category}
                                </div>
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[1.1]">{selectedProject.title}</h3>

                                <p className="text-foreground/70 font-light text-xl leading-relaxed mb-12">
                                    {selectedProject.description}
                                </p>

                                <div className="grid grid-cols-2 gap-8 mb-12 border-t border-border pt-10">
                                    {selectedProject.metrics.map((m, i) => (
                                        <div key={i}>
                                            <span className="block text-4xl font-heading font-bold mb-2 text-luxury-violet">{m.value}</span>
                                            <span className="text-xs text-foreground/50 uppercase tracking-widest font-bold">{m.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <MagneticWrapper strength={10} className="w-full">
                                    <button className="w-full py-5 text-center bg-foreground text-background rounded-full font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                                        Enter Interactive Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </MagneticWrapper>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}

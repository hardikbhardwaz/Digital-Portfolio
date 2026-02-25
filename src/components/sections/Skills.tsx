'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, PenTool, Video, Code2, Bot } from 'lucide-react';
import MagneticWrapper from '../MagneticWrapper';

gsap.registerPlugin(ScrollTrigger);

const SKILLS_DATA = [
    {
        id: 'marketing',
        title: 'Digital Marketing',
        icon: <Rocket size={24} className="text-luxury-blue group-hover:scale-110 transition-transform" />,
        skills: ['Meta Ads & Performance', 'Lead Generation', 'SEO Strategy', 'CRMs & WhatsApp API']
    },
    {
        id: 'creative',
        title: 'Creative Design',
        icon: <PenTool size={24} className="text-luxury-violet group-hover:scale-110 transition-transform" />,
        skills: ['Premium Branding', 'Motion Graphics', 'UI/UX Prototypes', 'AI-Generated Art']
    },
    {
        id: 'video',
        title: 'Video & Media',
        icon: <Video size={24} className="text-luxury-blue group-hover:scale-110 transition-transform" />,
        skills: ['Cinematic Editing', 'Social Media Reels', 'Color Grading', 'AI Video Synths']
    },
    {
        id: 'web',
        title: 'Web Engineering',
        icon: <Code2 size={24} className="text-luxury-violet group-hover:scale-110 transition-transform" />,
        skills: ['Next.js Architecture', 'Complex Shopify', 'Framer Motion', 'Conversion Landing Pages']
    },
    {
        id: 'ai',
        title: 'Automation & AI',
        icon: <Bot size={24} className="text-luxury-blue group-hover:scale-110 transition-transform" />,
        skills: ['Intelligent Chatbots', 'Workflow Automations', 'Personalization Algorithms', 'Data Pipelines']
    }
];

export default function Skills() {
    const cRef = useRef<HTMLElement>(null);
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.skill-card',
                { opacity: 0, rotateY: -15, z: -100 },
                {
                    opacity: 1, rotateY: 0, z: 0, stagger: 0.1, duration: 1.2, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, cRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={cRef} className="py-32 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto" style={{ perspective: '1000px' }}>

            <div className="mb-20 grid md:grid-cols-2 gap-12 items-end">
                <div>
                    <MagneticWrapper strength={10}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 inline-block">
                            My <span className="text-luxury-violet">Capabilities</span>
                        </h2>
                    </MagneticWrapper>
                </div>
                <div>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed">
                        I don't just specialize in one domain. I engineer complete growth ecosystems—from the very first ad creative to the final automated checkout flow.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {SKILLS_DATA.map((cat, index) => (
                    <MagneticWrapper key={cat.id} strength={5} className={index === 4 ? `md:col-span-2 lg:col-span-1 block w-full` : `block w-full`}>
                        <div
                            className={`skill-card group glass p-8 rounded-[2rem] border transition-all duration-500 transform-gpu w-full h-full
                ${activeSkill === cat.id ? 'border-luxury-blue shadow-[0_30px_60px_-15px_rgba(0,85,255,0.15)] scale-[1.02] -translate-y-2' : 'border-border hover:border-foreground/20'}`}
                            onMouseEnter={() => setActiveSkill(cat.id)}
                            onMouseLeave={() => setActiveSkill(null)}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-4 bg-foreground/5 rounded-2xl border border-border">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-heading font-bold">{cat.title}</h3>
                            </div>

                            <ul className="space-y-4">
                                {cat.skills.map((skill, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground/70 group-hover:text-foreground transition-colors mix-blend-difference">
                                        <span className="h-1.5 w-1.5 mt-2 rounded-full bg-transparent group-hover:bg-luxury-blue border border-luxury-blue inline-block flex-shrink-0 transition-colors"></span>
                                        <span className="font-light tracking-wide text-sm leading-relaxed">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </MagneticWrapper>
                ))}

                {/* Placeholder 6th block for layout symmetry */}
                <MagneticWrapper strength={5} className="block w-full">
                    <div className="skill-card glass p-8 rounded-[2rem] border border-border h-full flex flex-col items-center justify-center text-center bg-foreground group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-luxury-blue to-luxury-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-2xl font-heading font-bold text-background relative z-10">Need an All-In-One Solution?</h3>
                        <p className="text-background/80 mt-4 font-semibold relative z-10 border-b border-background/30 pb-1">Let's discuss your project</p>
                    </div>
                </MagneticWrapper>
            </div>
        </section>
    );
}

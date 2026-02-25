'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import MagneticWrapper from '../MagneticWrapper';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const cRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.contact-fade',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: cRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }, cRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={cRef} className="py-16 md:py-32 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">

            <div className="text-center mb-16 contact-fade">
                <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                    Work directly with <span className="text-luxury-blue border-b-2 border-luxury-violet border-dashed pb-2">Hardik.</span>
                </h2>
                <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
                    No account managers. No junior devs. You get my direct strategic mind and exact technical execution.
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">

                {/* Contact Info Sidebar */}
                <div className="lg:col-span-2 space-y-8 contact-fade flex flex-col justify-center">

                    <a href="mailto:hardikzen@gmail.com" className="flex items-center gap-6 p-6 rounded-2xl glass hover:bg-foreground/5 transition-colors group">
                        <div className="p-4 bg-luxury-blue/10 text-luxury-blue rounded-xl group-hover:bg-luxury-blue group-hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xs text-foreground/50 uppercase tracking-widest font-semibold mb-1">Email</h4>
                            <p className="font-heading font-bold text-lg">hardikzen@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://wa.me/919588899560" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 rounded-2xl glass hover:bg-foreground/5 transition-colors group">
                        <div className="p-4 bg-[#25D366]/10 text-[#25D366] rounded-xl group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xs text-foreground/50 uppercase tracking-widest font-semibold mb-1">WhatsApp / Phone</h4>
                            <p className="font-heading font-bold text-lg">+91 9588899560</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-6 p-6 rounded-2xl glass hover:bg-foreground/5 transition-colors group">
                        <div className="p-4 bg-luxury-violet/10 text-luxury-violet rounded-xl group-hover:bg-luxury-violet group-hover:text-white transition-colors">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xs text-foreground/50 uppercase tracking-widest font-semibold mb-1">Location</h4>
                            <p className="font-heading font-bold text-lg">Rajasthan, India</p>
                            <p className="text-xs text-foreground/50">Operating Globally 🌎</p>
                        </div>
                    </div>

                </div>

                {/* Form Container */}
                <div className="lg:col-span-3 bg-surface p-8 md:p-12 rounded-[2rem] contact-fade border border-border shadow-2xl relative overflow-hidden">

                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-luxury-blue to-transparent opacity-50"></div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs text-foreground/70 uppercase tracking-widest font-semibold ml-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-background border border-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-luxury-blue transition-colors focus:bg-foreground/5"
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-foreground/70 uppercase tracking-widest font-semibold ml-2">Corporate Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-background border border-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-luxury-blue transition-colors focus:bg-foreground/5"
                                    placeholder="j.doe@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-foreground/70 uppercase tracking-widest font-semibold ml-2">Your Challenge or Vision</label>
                            <textarea
                                rows={5}
                                className="w-full bg-background border border-border rounded-xl px-6 py-4 text-foreground focus:outline-none focus:border-luxury-blue transition-colors focus:bg-foreground/5 resize-none"
                                placeholder="Tell me what we are scaling..."
                            ></textarea>
                        </div>

                        <MagneticWrapper strength={15} className="w-full">
                            <button className="w-full py-5 rounded-full bg-foreground text-background font-bold font-heading text-lg hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)] mt-4">
                                Message Hardik Directly
                            </button>
                        </MagneticWrapper>
                    </form>
                </div>
            </div>
        </section>
    );
}

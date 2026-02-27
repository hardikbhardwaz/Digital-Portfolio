'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat',
        initialMessages: [
            { id: '1', role: 'assistant', content: "Hi! I'm Hardik's AI assistant. I can answer questions about his digital marketing strategies, web development expertise, or how we can help scale your brand. What would you like to know?" }
        ]
    });

    // Auto-scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="fixed bottom-24 right-4 md:bottom-28 md:right-6 z-[100] flex flex-col items-end pointer-events-none">

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="pointer-events-auto bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-2xl w-[90vw] md:w-[400px] h-[500px] max-h-[70vh] flex flex-col mb-4 overflow-hidden"
                    >
                        {/* Chat Header */}
                        <div className="p-4 border-b border-white/10 bg-gradient-to-r from-luxury-blue/20 to-luxury-violet/20 flex items-center justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/5 opacity-50 pointer-events-none mix-blend-overlay"></div>

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-black/50 border border-luxury-blue/50 flex items-center justify-center overflow-hidden">
                                        <Bot className="w-5 h-5 text-luxury-violet" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-sm text-white flex items-center gap-2">
                                        Hardik AI <Sparkles className="w-3 h-3 text-luxury-blue" />
                                    </h3>
                                    <p className="text-[10px] text-white/50 uppercase tracking-widest">Digital Proxy</p>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="relative z-10 p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((m: any) => (
                                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-black/50 border border-white/10 mt-1">
                                            {m.role === 'user' ? <User className="w-4 h-4 text-white/70" /> : <Bot className="w-4 h-4 text-luxury-violet" />}
                                        </div>

                                        <div className={`p-3 rounded-2xl text-sm ${m.role === 'user'
                                            ? 'bg-luxury-blue text-white rounded-tr-sm'
                                            : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-sm'
                                            }`}>
                                            {m.content}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="flex gap-2 max-w-[85%]">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-black/50 border border-white/10 mt-1">
                                            <Bot className="w-4 h-4 text-luxury-violet" />
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-sm flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-luxury-blue animate-bounce"></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-luxury-blue animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-luxury-blue animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-black/50 relative">
                            <div className="relative flex items-center">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Ask me anything..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-luxury-blue/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 p-2 bg-luxury-blue hover:bg-luxury-violet rounded-full text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <div className={`pointer-events-auto transition-all duration-500 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
                <MagneticWrapper strength={20}>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="relative group flex items-center justify-center p-3 md:p-4 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:bg-white hover:text-black hover:scale-110 transition-all duration-500"
                    >
                        {/* Animated gradient hover fill */}
                        <div className="absolute inset-0 bg-gradient-to-r from-luxury-blue/30 to-luxury-violet/30 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 pointer-events-none"></div>

                        <MessageSquare className="w-6 h-6 md:w-8 md:h-8 relative z-10" />

                        {/* Glowing ring */}
                        <span className="absolute inset-0 rounded-full border border-luxury-blue/50 group-hover:border-transparent transition-colors duration-300"></span>

                        {/* Status dot */}
                        <span className="absolute top-0 right-0 w-3 h-3 flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                        </span>
                    </button>
                </MagneticWrapper>
            </div>
        </div>
    );
}

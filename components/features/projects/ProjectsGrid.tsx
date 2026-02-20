"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const projects = [
    {
        title: "BEACON Knowledge Hub",
        desc: "AI-powered enterprise search system transforming 2,419+ chaotic documents into an intelligent, searchable knowledge base with 95% time savings.",
        tags: ["SPFx", "React", "TypeScript", "Azure OpenAI"],
        status: "Production",
        github: "#beacon" // Internal link to showcase section
    },
    {
        title: "Python Piano",
        desc: "Interactive musical instrument built with Python and Pygame. Features realistic piano sounds, keyboard mapping, and visual feedback.",
        tags: ["Python", "Pygame", "Audio Processing"],
        status: "Live",
        github: "https://github.com/dhrxvats/Python_Piano"
    },
    {
        title: "Portfolio v1",
        desc: "The site you're looking at. Built with Next.js 14, Framer Motion, and Tailwind CSS. Features 120fps canvas scrollytelling.",
        tags: ["Next.js", "TypeScript", "Canvas", "Framer Motion"],
        status: "Live",
        github: "#"
    }
];

export default function ProjectsGrid() {
    return (
        <section id="github" className="py-32 px-6 bg-void relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-h2 font-display font-bold text-white mb-16"
                >
                    Other Experiments
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative h-full bg-surface/30 border border-white/5 rounded-2xl p-8 hover:bg-surface/50 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${p.status === 'Live' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-white/60'}`}>
                                    {p.status}
                                </span>
                                <div className="flex gap-4 text-white/40">
                                    <InteractiveHoverButton
                                        text="GitHub"
                                        className="w-24 py-1 px-3 text-xs font-mono border-transparent bg-transparent text-white/60 hover:text-white"
                                        onClick={(e) => {
                                            if (p.github.startsWith('#')) {
                                                e.preventDefault();
                                                document.querySelector(p.github)?.scrollIntoView({ behavior: 'smooth' });
                                            } else {
                                                window.open(p.github, '_blank', 'noopener,noreferrer');
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-beacon-orange transition-colors">
                                {p.title}
                            </h3>

                            <p className="text-text-secondary leading-relaxed mb-6">
                                {p.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {p.tags.map(t => (
                                    <span key={t} className="text-sm font-mono text-text-muted">
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

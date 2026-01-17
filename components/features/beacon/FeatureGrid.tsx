"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Layout, BarChart } from "lucide-react";

const features = [
    {
        title: "AI-Powered Search",
        description: "Azure OpenAI GPT-3.5 Turbo integration provides natural language understanding and semantic relevance.",
        icon: Brain,
        color: "text-azure"
    },
    {
        title: "Metadata Automation",
        description: "PowerShell scripts bulk-tagged 2,419 documents, eliminating manual entry for 100% of the repository.",
        icon: Zap,
        color: "text-beacon-orange"
    },
    {
        title: "Modern UI/UX",
        description: "A responsive glassmorphism interface built with SPFx, React, and Fluent UI for seamless SharePoint integration.",
        icon: Layout,
        color: "text-emerald"
    },
    {
        title: "Enterprise Scale",
        description: "Serving 23 clients across 7 business units with 99.9% uptime and <$10/month Azure costs.",
        icon: BarChart,
        color: "text-purple-400" // Custom color for variety
    }
];

export default function FeatureGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto px-4 my-16">
            {features.map((feature, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="group relative p-8 bg-surface/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden"
                >
                    {/* Hover Glow Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-current ${feature.color}`} />

                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-void/50 ${feature.color}`}>
                            <feature.icon size={32} />
                        </div>
                    </div>

                    <h3 className="text-h3 font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-text-secondary transition-all">
                        {feature.title}
                    </h3>

                    <p className="text-body text-text-secondary leading-relaxed">
                        {feature.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}

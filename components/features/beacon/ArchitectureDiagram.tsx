"use client";

import { motion } from "framer-motion";

export default function ArchitectureDiagram() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 my-16">
            <h3 className="text-h3 font-display font-bold text-white mb-12 text-center">System Architecture</h3>

            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-surface/20 rounded-xl border border-white/5 p-8 flex items-center justify-between gap-4 overflow-x-auto">

                {/* Layer 1: Frontend */}
                <Node label="Frontend Layer" sub="SPFx + React" color="border-azure text-azure" delay={0}>
                    <div className="p-2 bg-void rounded text-xs text-white/70 font-mono">User Query</div>
                </Node>

                <Connector />

                {/* Layer 2: Automation */}
                <Node label="Automation" sub="Power Automate" color="border-emerald text-emerald" delay={0.2}>
                    <div className="p-2 bg-void rounded text-xs text-white/70 font-mono">Metadata Tagging</div>
                </Node>

                <Connector />

                {/* Layer 3: Backend */}
                <Node label="Backend Layer" sub="Azure Functions" color="border-purple-400 text-purple-400" delay={0.4}>
                    <div className="p-2 bg-void rounded text-xs text-white/70 font-mono">Process Logic</div>
                </Node>

                <Connector />

                {/* Layer 4: AI */}
                <Node label="AI Engine" sub="Azure OpenAI" color="border-beacon-orange text-beacon-orange" delay={0.6}>
                    <div className="p-2 bg-void rounded text-xs text-white/70 font-mono">Semantic Search</div>
                </Node>

            </div>
        </div>
    );
}

function Node({ label, sub, color, children, delay }: { label: string, sub: string, color: string, children: React.ReactNode, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`flex-shrink-0 w-48 h-40 rounded-xl bg-void/50 border-2 ${color} flex flex-col items-center justify-center p-4 relative z-10 hover:scale-105 transition-transform`}
        >
            <span className="font-bold mb-1">{label}</span>
            <span className="text-xs opacity-70 mb-4">{sub}</span>
            {children}
        </motion.div>
    );
}

function Connector() {
    return (
        <div className="flex-1 h-[2px] bg-white/10 min-w-[20px] relative overflow-hidden">
            <motion.div
                className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </div>
    )
}

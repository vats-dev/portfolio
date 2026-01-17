"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BeaconHero() {
    return (
        <div className="relative w-full py-24 px-6 md:px-12 flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beacon-orange/10 border border-beacon-orange/20 text-beacon-orange font-mono text-sm mb-8"
            >
                <div className="w-2 h-2 rounded-full bg-beacon-orange animate-pulse" />
                <span className="font-bold tracking-wide">FEATURED PROJECT</span>
            </motion.div>

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-hero font-display font-black leading-none bg-gradient-to-br from-white via-white to-white/50 bg-clip-text text-transparent mb-6"
            >
                BEACON
            </motion.h2>

            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-h2 font-display font-medium text-azure mb-8 max-w-3xl"
            >
                Intelligent Knowledge Hub for Enterprise
            </motion.p>

            {/* Metadata */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4 md:gap-12 text-text-muted font-mono text-sm md:text-base border-t border-b border-white/5 py-6 w-full max-w-4xl"
            >
                <div className="flex flex-col items-center gap-1">
                    <span className="text-white/40 uppercase tracking-widest text-xs">Role</span>
                    <span className="text-white font-semibold">Lead Architect</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-white/40 uppercase tracking-widest text-xs">Timeline</span>
                    <span className="text-white font-semibold">Dec 2025 - Jan 2026</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-white/40 uppercase tracking-widest text-xs">Stack</span>
                    <span className="text-white font-semibold flex items-center gap-2">
                        Azure <span className="text-white/20">•</span> SPFx <span className="text-white/20">•</span> OpenAI
                    </span>
                </div>
            </motion.div>
        </div>
    );
}

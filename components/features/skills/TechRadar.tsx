"use client";

import { motion } from "framer-motion";

export default function TechRadar() {
    const categories = ["Frontend", "Backend", "Cloud", "Creative"];

    return (
        <section className="py-24 bg-void overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-h2 font-display font-bold text-white mb-16">Values & Capabilities</h2>

                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto">
                    {/* Radar Circles */}
                    {[1, 2, 3].map((r) => (
                        <div
                            key={r}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                            style={{ width: `${r * 33}%`, height: `${r * 33}%` }}
                        />
                    ))}

                    {/* Axes */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white/5" />
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white/5" />

                    {/* Labels */}
                    <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-mono text-azure uppercase tracking-widest bg-void px-2">Frontend</span>
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-mono text-emerald uppercase tracking-widest bg-void px-2">Backend</span>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-mono text-purple-400 uppercase tracking-widest bg-void px-2 -rotate-90">Cloud</span>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-beacon-orange uppercase tracking-widest bg-void px-2 rotate-90">Creative</span>

                    {/* Skill Blips */}
                    <Blip x="50%" y="20%" label="React" color="bg-azure" delay={0.1} />
                    <Blip x="65%" y="65%" label=".NET" color="bg-emerald" delay={0.2} />
                    <Blip x="25%" y="50%" label="Azure" color="bg-purple-400" delay={0.3} />
                    <Blip x="80%" y="40%" label="Design" color="bg-beacon-orange" delay={0.4} />
                    <Blip x="40%" y="30%" label="Next.js" color="bg-azure" delay={0.5} />
                    <Blip x="60%" y="80%" label="SQL" color="bg-emerald" delay={0.6} />

                    {/* Radar Scan Effect */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-[50%] h-[2px] bg-gradient-to-r from-transparent to-beacon-orange/50 origin-left"
                        animate={{ rotate: 360 }}
                        style={{ top: '50%', left: '50%' }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>
        </section>
    );
}

function Blip({ x, y, label, color, delay }: any) {
    return (
        <motion.div
            className="absolute flex flex-col items-center gap-2"
            style={{ left: x, top: y }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay }}
        >
            <div className={`w-3 h-3 rounded-full ${color} shadow-[0_0_10px_currentColor]`} />
            <span className="text-[10px] text-white/50">{label}</span>
        </motion.div>
    )
}

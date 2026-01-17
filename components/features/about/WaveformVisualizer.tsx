"use client";

import { motion } from "framer-motion";

export default function WaveformVisualizer() {
    const bars = 20;

    return (
        <div className="flex items-end justify-center gap-1 h-[100px] w-full px-4">
            {Array.from({ length: bars }).map((_, i) => (
                <motion.div
                    key={i}
                    className="w-full bg-beacon-orange/80 rounded-t-sm"
                    animate={{
                        height: ["20%", `${Math.random() * 80 + 20}%`, "20%"],
                    }}
                    transition={{
                        duration: 0.8 + Math.random() * 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: i * 0.05,
                    }}
                />
            ))}
        </div>
    );
}

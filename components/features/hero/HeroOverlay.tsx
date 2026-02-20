"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function HeroOverlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Animation Transforms
    // Section 1: 0-25%
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
    const blur1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 10]);

    // Section 2: 30-55%
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.6], [50, -50]);

    // Section 3: 60-90%
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 1], [50, 0]);

    return (
        <div className="fixed inset-0 z-20 pointer-events-none flex flex-col justify-center items-center h-screen w-full">

            {/* Section 1: Intro */}
            <motion.div
                style={{ opacity: opacity1, y: y1, filter: `blur(${blur1})` }} // blur added manually if supported or via class
                className="absolute text-center max-w-[90vw]"
            >
                <h1 className="text-[clamp(3.5rem,14vw,9rem)] font-display font-black tracking-tight mb-4 leading-none">
                    <span className="text-gray-300">Srivatsan</span>{" "}
                    <span className="text-beacon-orange">Rangan</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center text-text-secondary text-body-lg font-mono">
                    <span>Full-Stack Developer</span>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-beacon-orange"></span>
                    <span>AI Engineer</span>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-azure"></span>
                    <span className="text-beacon-orange">Music Producer</span>
                </div>
                <p className="mt-4 text-text-muted text-body font-medium">
                    Sophomore @ Sri Venkateswara College of Engineering
                </p>
                <p className="mt-1 text-azure text-sm font-mono">
                    Intern @ Psiog Digital
                </p>
            </motion.div>

            {/* Section 2: Philosophy */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-4 md:left-24 max-w-2xl"
            >
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent">
                    I build digital experiences<br />
                    that bridge <span className="text-beacon-orange">design</span> and <span className="text-azure">engineering</span>.
                </h2>
            </motion.div>

            {/* Section 3: Tech Stack */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-4 md:right-24 text-right max-w-2xl"
            >
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                    From SPFx frontends<br />
                    to <span className="text-azure">Azure</span> backends.
                </h2>
                <p className="text-xl md:text-3xl font-text text-text-secondary">
                    With a relentless focus on <span className="text-emerald">user experience</span>.
                </p>
            </motion.div>

        </div>
    );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SkillConstellation from "./SkillConstellation";
import WaveformVisualizer from "./WaveformVisualizer";

export default function AboutSplit() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Split Animation
    // 0 -> 1 progress as we scroll through
    const splitProgress = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    // Left Side (Engineer) - Slides Left
    const xLeft = useTransform(splitProgress, [0, 1], ["0%", "-5%"]);
    // Right Side (Artist) - Slides Right
    const xRight = useTransform(splitProgress, [0, 1], ["0%", "5%"]);

    // Gap expansion
    const gap = useTransform(splitProgress, [0, 1], ["0px", "24px"]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] bg-void">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Mobile Layout (Stacked) */}
                <div className="md:hidden w-full h-full overflow-y-auto p-6 flex flex-col gap-12">
                    {/* Engineer Mobile */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-h1 font-display font-medium text-azure">The Engineer</h2>
                        <p className="text-body text-text-secondary">
                            Structuring chaos into logic. From scalable Azure architectures to responsive SPFx frontends.
                        </p>
                        <SkillConstellation />
                    </div>

                    {/* Artist Mobile */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-h1 font-display font-medium text-beacon-orange">The Artist</h2>
                        <p className="text-body text-text-secondary">
                            Composing rhythm from noise. Music production teaches me the art of iteration and flow.
                        </p>
                        <WaveformVisualizer />
                    </div>
                </div>

                {/* Desktop Layout (Split Screen) */}
                <motion.div
                    className="hidden md:flex w-full max-w-[90vw] h-[80vh] relative"
                    style={{ gap }}
                >
                    {/* LEFT SIDE: ENGINEER */}
                    <motion.div
                        className="flex-1 bg-surface/50 backdrop-blur-md rounded-2xl border border-white/5 p-12 flex flex-col justify-between overflow-hidden relative group"
                        style={{ x: xLeft }}
                    >
                        {/* Background Decorations */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                        <div className="relative z-10">
                            <h2 className="text-h1 font-display font-bold text-azure mb-2">The Engineer</h2>
                            <p className="text-h3 font-mono text-white/60">3+ Years • Full-Stack • AI</p>
                        </div>

                        <div className="relative z-10 my-8">
                            <SkillConstellation />
                        </div>

                        <div className="relative z-10">
                            <p className="text-body-lg text-text-secondary max-w-md">
                                "I believe code should be beautiful. I build scalable systems that feel magical to use."
                            </p>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-azure/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>

                    {/* RIGHT SIDE: ARTIST */}
                    <motion.div
                        className="flex-1 bg-surface/50 backdrop-blur-md rounded-2xl border border-white/5 p-12 flex flex-col justify-between overflow-hidden relative group"
                        style={{ x: xRight }}
                    >
                        {/* Background Decorations */}
                        <div className="absolute inset-0 bg-gradient-to-br from-beacon-orange/5 to-transparent" />

                        <div className="relative z-10 text-right">
                            <h2 className="text-h1 font-display font-bold text-beacon-orange mb-2">The Artist</h2>
                            <p className="text-h3 font-mono text-white/60">Musician • Producer • Creator</p>
                        </div>

                        <div className="relative z-10 my-8 flex items-center justify-center flex-1">
                            <div className="w-full h-full max-h-[300px] rounded-xl overflow-hidden relative">
                                <img
                                    src="/artist-photo.jpg"
                                    alt="Artist photo"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-void/30" />
                            </div>
                        </div>

                        <div className="relative z-10 text-right self-end">
                            <p className="text-body-lg text-text-secondary max-w-md">
                                "Rhythm, harmony, and silence. The principles of music guide my approach to user experience."
                            </p>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-beacon-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>

                </motion.div>

                {/* Philosophy Footer */}
                <motion.div
                    className="hidden md:block absolute bottom-12 text-center"
                    style={{ opacity: splitProgress }}
                >
                    <p className="text-body-lg italic text-text-muted">
                        Where Engineering meets Artistry.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

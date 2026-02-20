"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/lib/AudioContext";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const NAV_LINKS = [
    { label: "About", id: "about" },
    { label: "Projects", id: "beacon" },
    { label: "Github", id: "github" },
    { label: "Music", id: "music" },
    { label: "Connect", id: "connect" },
];

const SECTION_IDS = ["about", "beacon", "github", "music", "connect"];

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
    const { isPlaying, togglePlay } = useAudio();
    const [activeSection, setActiveSection] = useState<string>("");
    const [scrolled, setScrolled] = useState(false);

    // Track which section is currently in view
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.3 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Darken background after scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center pt-5 px-6 pointer-events-none">
            {/* Glass pill nav */}
            <motion.nav
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "pointer-events-auto flex items-center gap-0.5 sm:gap-1 px-1 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 backdrop-blur-md transition-colors duration-300 max-w-[calc(100vw-1rem)] overflow-x-auto no-scrollbar",
                    scrolled ? "bg-void/70" : "bg-white/5"
                )}
            >
                {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                        <div key={link.label} className="relative">
                            {isActive && (
                                <motion.div
                                    layoutId="activeNavPill"
                                    className="absolute inset-0 rounded-full bg-beacon-orange/15 border border-beacon-orange/30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                                />
                            )}
                            <InteractiveHoverButton
                                text={link.label}
                                onClick={() => {
                                    setActiveSection(link.id);
                                    scrollTo(link.id);
                                }}
                                className={cn(
                                    "relative z-10 w-[70px] sm:w-28 px-1 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-mono border border-transparent bg-transparent transition-colors duration-200",
                                    isActive
                                        ? "text-beacon-orange"
                                        : "text-text-secondary hover:text-white"
                                )}
                            />
                        </div>
                    );
                })}
            </motion.nav>

            {/* Sound toggle — top-right */}
            <motion.button
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                className={cn(
                    "pointer-events-auto absolute right-6 top-5 w-10 h-10 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center transition-colors duration-300",
                    isPlaying
                        ? "bg-beacon-orange/20 border-beacon-orange/40 text-beacon-orange"
                        : "bg-white/5 text-text-secondary hover:text-white"
                )}
                aria-label={isPlaying ? "Mute music" : "Play music"}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={isPlaying ? "on" : "off"}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
                    </motion.span>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}

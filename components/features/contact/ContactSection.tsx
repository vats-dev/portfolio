"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function ContactSection() {
    return (
        <section id="connect" className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-void to-surface/20 relative overflow-hidden px-6 text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-azure/5 to-transparent opacity-50 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl"
            >
                <h2 className="text-h1 font-display font-black text-white mb-6">
                    Let's Build Something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-beacon-orange to-purple-500">Amazing Together.</span>
                </h2>

                <p className="text-h3 text-text-secondary mb-12 max-w-2xl mx-auto">
                    I'm always open to new opportunities, collaborations, and interesting technical challenges.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <InteractiveHoverButton
                        text="Email Me"
                        className="w-48 py-3 bg-white text-void hover:text-white rounded-full font-bold text-lg border-transparent transition-colors"
                        onClick={() => { window.location.href = "mailto:srivatsanrangan555@gmail.com"; }}
                    />

                    <InteractiveHoverButton
                        text="LinkedIn Profile"
                        className="w-56 py-3 bg-azure/10 text-azure hover:text-white border border-azure/20 rounded-full font-bold text-lg transition-colors"
                        onClick={() => { window.open("https://www.linkedin.com/in/srivatsan-rangan-00b2b430a/", "_blank", "noopener,noreferrer"); }}
                    />
                </div>

            </motion.div>
        </section>
    );
}

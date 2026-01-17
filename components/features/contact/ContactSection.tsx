"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-void to-surface/20 relative overflow-hidden px-6 text-center">
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
                    <Link
                        href="mailto:srivatsanrangan555@gmail.com"
                        className="group relative px-8 py-4 bg-white text-void rounded-full font-bold text-lg flex items-center gap-3 hover:bg-gray-200 transition-colors"
                    >
                        <Mail /> Email Me
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/srivatsan-rangan-00b2b430a/"
                        target="_blank"
                        className="group px-8 py-4 bg-azure/10 text-azure border border-azure/20 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-azure/20 transition-colors"
                    >
                        <Linkedin /> LinkedIn Profile
                    </Link>
                </div>

            </motion.div>
        </section>
    );
}

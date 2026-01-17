"use client";

import { motion } from "framer-motion";
import { Linkedin, MapPin, Users, Award } from "lucide-react";
import Link from "next/link";

export default function LinkedInBanner() {
    return (
        <section className="py-24 px-4 bg-void flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-2xl bg-surface/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
                {/* Banner Image */}
                <div className="h-32 bg-gradient-to-r from-azure to-blue-600 relative">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
                </div>

                <div className="px-8 pb-8">
                    {/* Profile Picture Placeholder */}
                    <div className="-mt-16 mb-4 relative">
                        <div className="w-32 h-32 rounded-full border-4 border-void bg-zinc-800 flex items-center justify-center overflow-hidden">
                            <span className="text-4xl">👨‍💻</span>
                        </div>
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald rounded-full border-4 border-void" title="Open to Work" />
                    </div>

                    <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                Srivatsan Rangan <Linkedin size={18} className="text-azure" />
                            </h3>
                            <p className="text-text-secondary mt-1 max-w-md">
                                Sophomore @ SVCE | Full-Stack Developer | AI Enthusiast
                            </p>

                            <div className="flex flex-wrap gap-4 text-xs font-mono text-text-muted mt-4">
                                <span className="flex items-center gap-1"><MapPin size={12} /> Chennai, India</span>
                                <span className="flex items-center gap-1"><Users size={12} /> 500+ Connections</span>
                                <span className="flex items-center gap-1"><Award size={12} /> 50+ Endorsements</span>
                            </div>
                        </div>

                        <Link
                            href="https://www.linkedin.com/in/srivatsan-rangan-00b2b430a/"
                            target="_blank"
                            className="bg-azure hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
                        >
                            <Linkedin size={16} /> Connect
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 bg-void border-t border-white/5 text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">

                <div className="flex gap-6">
                    <a href="https://github.com/srivatsanrangan" aria-label="GitHub" className="text-text-muted hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/srivatsan-rangan-00b2b430a" aria-label="LinkedIn" className="text-text-muted hover:text-azure transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:srivatsanrangan555@gmail.com" aria-label="Email" className="text-text-muted hover:text-beacon-orange transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                <p className="text-text-muted font-mono text-sm">
                    © {new Date().getFullYear()} Srivatsan Rangan. Crafted with passion.
                </p>

                <p className="text-xs text-text-muted/50">
                    Built with Next.js 14, Framer Motion, Tailwind CSS, and 🎵
                </p>
            </div>
        </footer>
    );
}

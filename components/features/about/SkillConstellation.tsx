"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "React", x: 10, y: 20 },
    { name: "Next.js", x: 30, y: 10 },
    { name: "TypeScript", x: 50, y: 25 },
    { name: "Azure", x: 70, y: 15 },
    { name: ".NET", x: 90, y: 30 },
    { name: "Node.js", x: 20, y: 50 },
    { name: "SPFx", x: 40, y: 60 },
    { name: "C#", x: 60, y: 50 },
    { name: "OpenAI", x: 80, y: 60 },
];

export default function SkillConstellation() {
    return (
        <div className="relative w-full h-[300px] bg-void/30 rounded-xl overflow-hidden border border-white/5 backdrop-blur-sm">
            {/* Connecting Lines (svg) */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <line x1="10%" y1="20%" x2="30%" y2="10%" stroke="currentColor" className="text-azure" />
                <line x1="30%" y1="10%" x2="50%" y2="25%" stroke="currentColor" className="text-azure" />
                <line x1="50%" y1="25%" x2="20%" y2="50%" stroke="currentColor" className="text-azure" />
                <line x1="50%" y1="25%" x2="70%" y2="15%" stroke="currentColor" className="text-azure" />
                <line x1="70%" y1="15%" x2="90%" y2="30%" stroke="currentColor" className="text-azure" />
                <line x1="20%" y1="50%" x2="40%" y2="60%" stroke="currentColor" className="text-azure" />
                <line x1="60%" y1="50%" x2="40%" y2="60%" stroke="currentColor" className="text-azure" />
                <line x1="60%" y1="50%" x2="80%" y2="60%" stroke="currentColor" className="text-azure" />
            </svg>

            {/* Skill Nodes */}
            {skills.map((skill, i) => (
                <motion.div
                    key={skill.name}
                    className="absolute flex flex-col items-center justify-center"
                    style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <div className="w-3 h-3 rounded-full bg-azure shadow-[0_0_10px_rgba(0,120,212,0.5)] mb-2" />
                    <span className="text-xs font-mono text-text-secondary whitespace-nowrap">
                        {skill.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );
}

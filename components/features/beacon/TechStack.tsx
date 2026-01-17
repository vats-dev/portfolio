"use client";

import { motion } from "framer-motion";

const stack = [
    { category: "Frontend", items: ["SPFx", "React 17", "TypeScript", "Fluent UI"], color: "bg-[#0078D4]" },
    { category: "Backend", items: ["Azure Functions", "C# .NET 10", "Azure OpenAI", "Key Vault"], color: "bg-[#512BD4]" },
    { category: "Automation", items: ["PowerShell", "Power Automate", "PnP PowerShell"], color: "bg-[#0066FF]" },
];

export default function TechStack() {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 my-16 flex flex-col items-center">
            <h3 className="text-h3 font-display font-bold text-white mb-8">Technology Stack</h3>

            <div className="flex flex-wrap justify-center gap-8">
                {stack.map((group, groupIndex) => (
                    <div key={group.category} className="flex flex-col items-center gap-3">
                        <span className="text-xs font-mono text-text-muted uppercase tracking-widest">{group.category}</span>
                        <div className="flex flex-wrap justify-center gap-2">
                            {group.items.map((tech, i) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: groupIndex * 0.1 + i * 0.05 }}
                                    className="px-4 py-2 rounded-full bg-surface border border-white/10 text-sm font-medium hover:scale-105 transition-transform cursor-default relative overflow-hidden group"
                                >
                                    {/* Color bottom border */}
                                    <span className={`absolute bottom-0 left-0 h-[2px] w-full ${group.color} opacity-70`} />
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

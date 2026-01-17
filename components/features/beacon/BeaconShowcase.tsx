"use client";

import BeaconHero from "./BeaconHero";
import MetricsCounter from "./MetricsCounter";
import ArchitectureDiagram from "./ArchitectureDiagram";
import FeatureGrid from "./FeatureGrid";
import TechStack from "./TechStack";

export default function BeaconShowcase() {
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-void via-[#0d0d14] to-void border-t border-white/5 pb-32">
            {/* Ambient Backlights */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-azure/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <BeaconHero />
                <MetricsCounter />
                <ArchitectureDiagram />
                <FeatureGrid />
                <TechStack />

                {/* Quote */}
                <div className="max-w-3xl mx-auto px-6 text-center mt-24">
                    <blockquote className="text-2xl md:text-3xl font-display font-medium leading-relaxed">
                        "Turning chaotic documents into an intelligent system that <span className="text-beacon-orange">actually feels magical</span>."
                    </blockquote>
                    <cite className="block mt-6 text-text-muted font-mono not-italic uppercase tracking-widest text-sm">
                        — Project Impact
                    </cite>
                </div>
            </div>
        </section>
    );
}

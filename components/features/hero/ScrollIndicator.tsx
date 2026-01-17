"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollIndicator() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed bottom-0 left-0 right-0 h-1.5 bg-surface z-50">
            <motion.div
                className="h-full bg-beacon-orange origin-left"
                style={{ scaleX }}
            />
        </div>
    );
}

"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
}

const Counter = ({ value, suffix = "", prefix = "", label }: CounterProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        duration: 2 // Slower animation for impact
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    return (
        <div ref={ref} className="flex flex-col items-center p-6 bg-surface/30 backdrop-blur-sm border border-white/5 rounded-2xl w-full lg:min-w-[200px]">
            <div className="text-4xl md:text-5xl font-display font-bold text-beacon-orange mb-2 flex items-baseline">
                <span className="text-2xl mr-1 opacity-70">{prefix}</span>
                <DisplayValue value={springValue} />
                <span className="text-2xl ml-1 opacity-70">{suffix}</span>
            </div>
            <p className="text-text-secondary font-mono text-sm uppercase tracking-wider">{label}</p>
        </div>
    );
};

function DisplayValue({ value }: { value: any }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        return value.on("change", (latest: number) => {
            if (ref.current) {
                // Format large numbers with commas
                ref.current.textContent = Math.floor(latest).toLocaleString();
            }
        });
    }, [value]);

    return <span ref={ref} />;
}

export default function MetricsCounter() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 w-full max-w-6xl mx-auto my-16">
            <Counter value={2419} suffix="+" label="Documents" />
            <Counter value={95} suffix="%" label="Time Saved" />
            <Counter value={10} prefix="<" suffix="s" label="Search Time" />
            <Counter value={19700} suffix="%" label="ROI" />
        </div>
    );
}

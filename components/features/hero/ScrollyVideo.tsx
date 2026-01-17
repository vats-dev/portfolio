"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";

interface ScrollyVideoProps {
    className?: string;
}

export default function ScrollyVideo({ className }: ScrollyVideoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Handle video events
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleCanPlay = () => {
            console.log("Video can play");
            setIsLoaded(true);
            video.play().catch((e) => {
                console.log("Autoplay blocked:", e);
            });
        };

        const handleLoadedData = () => {
            console.log("Video data loaded");
            setIsLoaded(true);
        };

        const handleError = () => {
            console.error("Video error:", video.error);
            setError(`Failed to load video: ${video.error?.message || 'Unknown error'}`);
        };

        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('error', handleError);

        // Force load
        video.load();

        return () => {
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('error', handleError);
        };
    }, []);

    // IntersectionObserver for pause/resume on scroll
    useEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        if (!video || !container || !isLoaded) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => { });
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, [isLoaded]);

    return (
        <div ref={containerRef} className={cn("fixed inset-0 z-0 bg-void", className)}>
            {/* Loading State */}
            {!isLoaded && !error && (
                <div className="absolute inset-0 flex items-center justify-center text-beacon-orange font-mono z-50 relative">
                    Loading Video...
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center text-red-500 font-mono z-50 relative">
                    {error}
                </div>
            )}

            {/* Video Element */}
            <video
                ref={videoRef}
                className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                    isLoaded ? "opacity-100" : "opacity-0"
                )}
                muted
                loop
                playsInline
                autoPlay
                preload="auto"
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void opacity-60 z-10 pointer-events-none" />
        </div>
    );
}

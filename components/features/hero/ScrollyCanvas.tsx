"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useImagePreloader } from "../../../lib/useImagePreloader";
import { cn } from "../../../lib/utils";

interface ScrollyCanvasProps {
    numFrames?: number;
    className?: string;
}

export default function ScrollyCanvas({
    numFrames = 192,
    className,
}: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { images, imagesLoaded, progress } = useImagePreloader(numFrames);
    const { scrollYProgress } = useScroll();

    // Transform scroll (0-1) to frame index (0 to numFrames-1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, numFrames - 1]);
    const [currentFrame, setCurrentFrame] = useState(0);

    // Update current frame based on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        setCurrentFrame(Math.round(latest));
    });

    // Draw to canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !imagesLoaded || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[currentFrame];
        if (!img) return;

        // Handle object-fit: cover logic
        const drawImage = () => {
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let renderWidth, renderHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                // Canvas is wider than image
                renderWidth = canvasWidth;
                renderHeight = canvasWidth / imgRatio;
                offsetX = 0;
                offsetY = (canvasHeight - renderHeight) / 2;
            } else {
                // Canvas is taller than image
                renderWidth = canvasHeight * imgRatio;
                renderHeight = canvasHeight;
                offsetX = (canvasWidth - renderWidth) / 2;
                offsetY = 0;
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        };

        requestAnimationFrame(drawImage);

    }, [currentFrame, images, imagesLoaded]);

    // Handle Window Resize (Debounced for performance)
    useEffect(() => {
        let resizeTimeout: NodeJS.Timeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (canvasRef.current) {
                    canvasRef.current.width = window.innerWidth;
                    canvasRef.current.height = window.innerHeight;
                    // Trigger redraw
                    if (imagesLoaded && images[currentFrame]) {
                        setCurrentFrame(prev => prev);
                    }
                }
            }, 100); // 100ms debounce
        };

        window.addEventListener("resize", handleResize, { passive: true });

        // Initial size (immediate)
        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
        }

        return () => {
            clearTimeout(resizeTimeout);
            window.removeEventListener("resize", handleResize);
        };
    }, [imagesLoaded, currentFrame, images]);

    return (
        <div className={cn("fixed inset-0 z-0 bg-void", className)}>
            {!imagesLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-beacon-orange font-mono z-50">
                    Loading Sequence... {progress}%
                </div>
            )}
            <canvas
                ref={canvasRef}
                className={cn("w-full h-full block opacity-0 transition-opacity duration-700", imagesLoaded && "opacity-100")}
                style={{
                    willChange: 'transform',
                    transform: 'translate3d(0, 0, 0)',
                    backfaceVisibility: 'hidden',
                }}
            />
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void opacity-60 z-10 pointer-events-none" />
        </div>
    );
}

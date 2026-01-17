import { useState, useEffect } from 'react';

export const useImagePreloader = (frameCount: number) => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let mounted = true;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const loadImages = async () => {
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                // Format: frame_000_delay-0.05s.webp
                const indexStr = i.toString().padStart(3, '0');
                img.src = `/sequence/frame_${indexStr}_delay-0.05s.webp`;

                await new Promise<void>((resolve) => {
                    img.onload = () => {
                        loadedCount++;
                        if (mounted) setProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        // Resolve anyway to continue loading other frames
                        resolve();
                    };
                });

                loadedImages.push(img);
            }

            if (mounted) {
                setImages(loadedImages);
                setImagesLoaded(true);
            }
        };

        loadImages();

        return () => {
            mounted = false;
        };
    }, [frameCount]);

    return { images, imagesLoaded, progress };
};

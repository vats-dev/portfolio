"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Music, Volume2 } from "lucide-react";

export default function MusicShowcase() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [autoplayBlocked, setAutoplayBlocked] = useState(false);

    // Handle play/pause
    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
        setAutoplayBlocked(false);
    };

    // Attempt autoplay on page load
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const attemptAutoplay = () => {
            audio.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch(() => {
                    // Autoplay blocked by browser - show prompt
                    setAutoplayBlocked(true);
                });
        };

        // Try autoplay after a short delay
        const timer = setTimeout(attemptAutoplay, 500);
        return () => clearTimeout(timer);
    }, []);

    // Update progress bar
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateProgress = () => {
            setCurrentTime(audio.currentTime);
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
            if (audio) audio.currentTime = 0;
        };

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
        };
    }, []);

    // Format time as MM:SS
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Seek functionality
    const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!audioRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioRef.current.currentTime = percent * audioRef.current.duration;
    };

    return (
        <section className="py-24 px-6 bg-surface/20 border-t border-white/5 relative overflow-hidden">
            {/* Hidden Audio Element */}
            <audio ref={audioRef} src="/audio/aagayam-kaatadha.m4a" preload="metadata" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                {/* Text Side */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3 text-beacon-orange mb-2">
                        <Music size={20} />
                        <span className="font-mono text-sm uppercase tracking-widest">Sound Engineering</span>
                    </div>

                    <h2 className="text-h2 font-display font-bold text-white">
                        Where Code Meets Composition.
                    </h2>

                    <p className="text-body-lg text-text-secondary leading-relaxed">
                        Beyond the terminal, I live in the DAW. Producing electronic landscapes teaches me patience, rhythm, and the subtle art of layering—principles that directly influence how I architect software systems.
                    </p>

                    <div className="flex gap-4 text-sm font-mono text-text-muted mt-8">
                        <span>LOGIC PRO X</span>
                        <span>•</span>
                        <span>FL STUDIO</span>
                        <span>•</span>
                        <span>SOUND DESIGN</span>
                    </div>
                </div>

                {/* Player Side */}
                <div className="flex-1 w-full max-w-md">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden group"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 rgba(255,255,255,0.1)',
                        }}
                    >
                        {/* Album Art */}
                        <div className="w-full aspect-square rounded-xl mb-6 relative overflow-hidden">
                            <img
                                src="/MusicSinging.jpg"
                                alt="Artist performing"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                        </div>

                        {/* Track Info & Controls */}
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-bold text-white">Aagayam Kaatadha</h3>
                                <p className="text-xs text-text-muted">Self-composed piece</p>
                            </div>

                            <button
                                onClick={togglePlay}
                                className="w-12 h-12 rounded-full bg-beacon-orange text-white flex items-center justify-center hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] transition-all"
                            >
                                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div
                            className="h-2 bg-white/10 rounded-full cursor-pointer mb-2 relative overflow-hidden"
                            onClick={handleSeek}
                        >
                            <motion.div
                                className="h-full bg-beacon-orange rounded-full"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Time Display */}
                        <div className="flex justify-between text-xs text-text-muted font-mono">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>

                        {/* Waveform Visualizer */}
                        <div className="flex items-end justify-between h-8 gap-1 mt-4">
                            {Array.from({ length: 30 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-white/20 rounded-t-sm"
                                    animate={{
                                        height: isPlaying ? ["20%", `${Math.random() * 80 + 20}%`, "20%"] : "20%",
                                        backgroundColor: isPlaying ? "#FF6B35" : "rgba(255,255,255,0.2)"
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        repeat: Infinity,
                                        delay: i * 0.05,
                                        repeatType: "reverse"
                                    }}
                                />
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

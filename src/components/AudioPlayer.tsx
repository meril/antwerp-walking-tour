import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { clsx } from 'clsx';
import { getAudioPath, formatTime } from '../utils/audioUtils';

interface AudioPlayerProps {
    stopId: number;
    lang: 'en' | 'zh';
    isActive: boolean;
}

const PLAYBACK_SPEEDS = [0.75, 1, 1.25, 1.5];

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ stopId, lang, isActive }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const audioPath = getAudioPath(stopId, lang);

    // Pause when card becomes inactive
    useEffect(() => {
        if (!isActive && isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
        }
    }, [isActive, isPlaying]);

    // Reset state when language changes (audio element is recreated via key)
    useEffect(() => {
        setCurrentTime(0);
        setDuration(0);
        setIsPlaying(false);
        setError(null);
    }, [lang, stopId]);

    const handlePlayPause = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            setIsLoading(true);
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError('Unable to play audio');
                    console.error('Audio playback error:', err);
                });
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (!audioRef.current || !duration) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = x / rect.width;
        const newTime = percentage * duration;

        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleMuteToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleSpeedChange = (e: React.MouseEvent) => {
        e.stopPropagation();
        const currentIndex = PLAYBACK_SPEEDS.indexOf(playbackRate);
        const nextIndex = (currentIndex + 1) % PLAYBACK_SPEEDS.length;
        const newRate = PLAYBACK_SPEEDS[nextIndex];

        if (audioRef.current) {
            audioRef.current.playbackRate = newRate;
        }
        setPlaybackRate(newRate);
    };

    const handleError = () => {
        setError('Audio file not available');
        setIsLoading(false);
    };

    const progress = duration ? (currentTime / duration) * 100 : 0;

    if (!audioPath) return null;

    return (
        <div
            className="mt-4 p-3 bg-ink/5 rounded-lg border border-stone/10"
            onClick={(e) => e.stopPropagation()}
        >
            <audio
                key={`${stopId}-${lang}`}
                ref={audioRef}
                src={audioPath}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
                onError={handleError}
                preload="metadata"
            />

            {error ? (
                <p className="text-sm text-burgundy/80 text-center py-2">{error}</p>
            ) : (
                <div className="flex flex-col gap-2">
                    {/* Controls row */}
                    <div className="flex items-center gap-3">
                        {/* Play/Pause button */}
                        <button
                            onClick={handlePlayPause}
                            disabled={isLoading}
                            className={clsx(
                                "w-10 h-10 flex items-center justify-center rounded-full transition-all",
                                "bg-gold text-ink hover:bg-gold-light",
                                isLoading && "opacity-50 cursor-wait"
                            )}
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? (
                                <Pause size={18} fill="currentColor" />
                            ) : (
                                <Play size={18} fill="currentColor" className="ml-0.5" />
                            )}
                        </button>

                        {/* Time display */}
                        <span className="text-xs font-mono text-stone min-w-[70px]">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </span>

                        {/* Speed control */}
                        <button
                            onClick={handleSpeedChange}
                            className="px-2 py-1 text-xs font-medium text-stone bg-stone/10 rounded hover:bg-stone/20 transition-colors min-w-[45px]"
                            aria-label={`Playback speed: ${playbackRate}x`}
                        >
                            {playbackRate}x
                        </button>

                        {/* Mute button */}
                        <button
                            onClick={handleMuteToggle}
                            className="p-1.5 text-stone hover:text-gold transition-colors"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                        </button>
                    </div>

                    {/* Progress bar */}
                    <div
                        className="w-full h-2 bg-stone/20 rounded-full cursor-pointer group"
                        onClick={handleProgressClick}
                    >
                        <div
                            className="h-full bg-gold rounded-full relative transition-all group-hover:bg-gold-light"
                            style={{ width: `${progress}%` }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gold rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

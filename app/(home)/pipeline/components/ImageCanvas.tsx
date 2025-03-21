"use client";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ImageCanvasProps {
    scrollHeight?: number;
    videoSrc: string;
    videoDuration?: number;
    onVideoEnd?: () => void; // Callback when video ends
}

export default function ImageCanvas({
    scrollHeight = 6000,
    videoSrc,
    videoDuration = 14,
    onVideoEnd,
}: ImageCanvasProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [viewportHeight, setViewportHeight] = useState(0);
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    // Set viewport height for accurate scroll calculations
    useEffect(() => {
        setViewportHeight(window.innerHeight);
        const handleResize = () => setViewportHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll tracking
    const { scrollY } = useScroll();

    // Map scroll progress to video time (0 to 14 seconds)
    const rawVideoTime = useTransform(
        scrollY,
        [0, scrollHeight - viewportHeight],
        [0, videoDuration]
    );
    const videoTime = useSpring(rawVideoTime, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001,
    });

    // Fade-in at the start (first 1 second of video time)
    // Fade-out at the end (last 0.3 seconds of video time)
    const opacity = useTransform(
        videoTime,
        [0, 1, videoDuration - 0.3, videoDuration],
        [0, 1, 1, 0] // Fade in from 0 to 1, then fade out from 1 to 0
    );

    // Height reduction from 100vh to 0vh between scrollY 5500 to 6000
    const height = useTransform(
        scrollY,
        [5800, 6000],
        ['100vh', '0vh'],
        { clamp: true }
    );

    // Update video time and detect end
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.pause();
        video.loop = false;
        video.muted = true;
        video.playbackRate = 1;

        let lastUpdate = 0;
        let lastTime = -1;
        const updateVideoTime = () => {
            const now = performance.now();
            if (now - lastUpdate < 16) return;

            const currentTime = videoTime.get();
            if (Math.abs(currentTime - lastTime) > 0.02) {
                video.currentTime = Math.max(0, Math.min(videoDuration, currentTime));
                lastTime = currentTime;
                lastUpdate = now;

                // Check if video has reached the end
                if (currentTime >= videoDuration - 0.1 && !isVideoEnded) {
                    setIsVideoEnded(true);
                    if (onVideoEnd) onVideoEnd();
                }
            }
        };

        const handleMetadataLoaded = () => {
            updateVideoTime();
        };
        video.addEventListener('loadedmetadata', handleMetadataLoaded);

        const unsubscribe = videoTime.on('change', () => {
            requestAnimationFrame(updateVideoTime);
        });

        return () => {
            video.removeEventListener('loadedmetadata', handleMetadataLoaded);
            unsubscribe();
        };
    }, [videoTime, videoDuration, onVideoEnd, isVideoEnded]);

    return (
        <>
            <div style={{ height: `${scrollHeight}px` }}>
                <motion.video
                    ref={videoRef}
                    src={videoSrc}
                    className="sticky top-0 w-full h-screen object-cover"
                    preload="auto"
                    style={{ opacity, height }} // Bind opacity and height
                />

            </div>
           
        </>
    );
}
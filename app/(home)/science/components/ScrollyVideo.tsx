'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type ScrollyVideoProps = {
    src: string;
    children?: React.ReactNode;
};
  

interface ScrollyVideoOptions {
    scrollyVideoContainer: HTMLElement;
    src: string;
    transitionSpeed?: number;
    cover?: boolean;
    full?: boolean;
    sticky?: boolean;
    trackScroll?: boolean;
    lockScroll?: boolean;
    debug?: boolean; // optional: logs more info internally
    onChange?: (percentage: number) => void; // callback for scroll progress
}

interface WindowWithScrollyVideo extends Window {
    ScrollyVideo?: new (options: ScrollyVideoOptions) => void;
}

export default function ScrollyVideo({ src, children }: ScrollyVideoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Track scroll progress of the wrapper div
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ['start start', 'end end'],
    });

    // Transform scroll progress to overlay opacity (black fade starting at 0.96)
    const overlayOpacity = useTransform(scrollYProgress, [0.96, 1], [0, 1]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/scrolly-video@latest/dist/scrolly-video.js';

        script.onload = () => {
            const win = window as WindowWithScrollyVideo;
            if (win.ScrollyVideo && containerRef.current) {
                new win.ScrollyVideo({
                    scrollyVideoContainer: containerRef.current,
                    src,
                    transitionSpeed: 8,
                    cover: true,
                    full: true,
                    trackScroll: true,
                    debug: true, // optional: logs more info internally
                    // onChange: (percentage: number) => {
                    //     console.log('📽️ Video Scroll Progress:', percentage);
                    // },
                });

                setTimeout(() => {
                    if (containerRef.current) {
                        const videoElement = containerRef.current.querySelector('video');
                        if (videoElement) {
                            videoElement.style.width = '100vw';
                            videoElement.style.height = '100vh';
                            videoElement.style.objectFit = 'cover';
                            videoElement.style.position = 'fixed';
                            videoElement.style.top = '0';
                            videoElement.style.left = '0';
                        }
                    }
                    window.dispatchEvent(new Event('resize'));
                }, 500);
            }
        };

        script.onerror = () => console.error('❌ Failed to load ScrollyVideo script');
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [src]);
    

    return (
        <div ref={wrapperRef} style={{ height: '500vh' }}>
            <motion.div
                id="scrolly-video"
                className="aspect-video object-cover"
                ref={containerRef}
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'sticky',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                }}
            >
                {/* Black overlay */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'black',
                        opacity: overlayOpacity,
                        zIndex: 10,
                    }}
                />
                {/* Text reveal */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        maxWidth: '800px',
                        padding: '20px',
                        opacity: overlayOpacity, // Sync text opacity with overlay
                        zIndex: 11, // Above overlay
                    }}
                >
                    {children}
                    
                </motion.div>
            </motion.div>
        </div>
    );
}
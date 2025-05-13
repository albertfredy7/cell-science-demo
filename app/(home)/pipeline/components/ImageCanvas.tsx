"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import GradientText from "../../components/GradientText";

interface ImageCanvasProps {
    videoSrc: string;
    videoDuration?: number;
    scrollHeight?: number;
    type?: string;
}

export default function ImageCanvas({
    videoSrc,
    videoDuration = 15,
    scrollHeight = 4000,
    type,
}: ImageCanvasProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Track scroll position
    const { scrollY } = useScroll();

    // Map scroll position to video time (0 to 15 seconds)
    const videoTime = useSpring(
        useTransform(scrollY, [0, scrollHeight], [0, videoDuration]),
        { stiffness: 100, damping: 30 }
    );

    // Video opacity: Fade in over first second, fade out over last 0.5 seconds
    const videoOpacity = useTransform(
        videoTime,
        [0, 1, videoDuration - 0.5, videoDuration],
        [0, 1, 1, 0]
    );

    // Text opacity: Fade in as video fades out (last 0.5 seconds)
    const textOpacity = useTransform(
        videoTime,
        [videoDuration - 0.5, videoDuration],
        [0, 1]
    );

    // Text y-position: Slide up from bottom (100vh to 0) as video fades out
    const textY = useTransform(
        videoTime,
        [videoDuration - 0.5, videoDuration],
        ["100vh", "0vh"]
    );

    // Update video frame based on scroll
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.loop = false;
        video.playbackRate = 1;

        const updateFrame = () => {
            const time = videoTime.get();
            video.currentTime = Math.max(0, Math.min(videoDuration, time));
        };

        const unsubscribe = videoTime.on("change", () => {
            requestAnimationFrame(updateFrame);
        });

        return () => {
            unsubscribe();
        };
    }, [videoTime, videoDuration]);

    return (
        <div style={{ height: `${scrollHeight}px`, position: "relative" }}>
            {/* Video */}
            <motion.video
                ref={videoRef}
                src={videoSrc}
                className="sticky top-0 w-full h-screen object-cover  "
                preload="auto"
                style={{ opacity: videoOpacity }}
            />

            {/* Text section, fades in and slides up from bottom */}

            {/* if type = science  then this */}
            {type === "science" ? (
               <motion.section
                    className="sticky top-20 min-h-screen flex justify-center items-center py-16 "
                    style={{ opacity: textOpacity, y: textY }}>
                    <div className="max-w-5xl px-6">
                        <div className="  text-white text-center text-3xl md:text-4xl lg:text-4xl font-light">
                            <p className="font-light"> The analogy of mitochondria as powerhouses has expired. Mitochondria are living, dynamic, maternally inherited, energy transforming, biosynthetic, and signaling organelles that actively transduce biological information. We argue that mitochondria are the professor of the cell.</p>
                        </div>

                    </div>
                </motion.section>
            )
            : (<motion.section
                className="sticky top-20 min-h-screen flex justify-center items-center py-16 "
                style={{ opacity: textOpacity, y: textY }}
            >
                <div className="max-w-5xl px-6">
                    <div className=" text-center text-white text-3xl md:text-4xl lg:text-4xl font-light">
                        Cellscience Biotech targets the very first organs that age in humans — the female reproductive organs. We are shifting the perspective of ovarian biology; <GradientText>it&apos;s not just the egg, the ovary — Nest, and the homeostasis in the ovarian microenvironment changes with age.</GradientText>
                    </div>
                    <div className="text-center text-white text-3xl md:text-4xl lg:text-4xl font-light mt-6">
                        Targeting these newly identified hallmarks can enhance the quality of follicles by restoring the freshness of youth in the reproductive tissues.
                    </div>
                </div>
            </motion.section>)}
            {/* Text section */}
            
           
            
        </div>
    );
}
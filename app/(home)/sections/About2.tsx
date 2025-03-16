"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

const About2 = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Text animation
    const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);
    const textScale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);
    const TextBlur = useTransform(scrollYProgress, [0.1, 0.35], ["blur(10px)", "blur(0px)"]);

    // Card animations
    const card1Opacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
    const card2Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
    const card3Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

    const card1Y = useTransform(scrollYProgress, [0.35, 0.4], [50, 0]);
    const card2Y = useTransform(scrollYProgress, [0.4, 0.45], [50, 0]);
    const card3Y = useTransform(scrollYProgress, [0.45, 0.5], [50, 0]);

    // Image slide-in effect
    const imageX = useTransform(scrollYProgress, [0.5, 0.6], [-200, 0]);
    const imageOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[150vh] ">
            <div className="sticky top-10 lg:top-0 h-screen overflow-hidden flex items-center">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-20 flex flex-col items-center justify-center gap-5">

                    {/* Image for larger screens */}
                    <motion.div
                        className="hidden md:block absolute left-0 bottom-0 w-full xl:max-w-sm 2xl:max-w-xl"
                        style={{ x: imageX, opacity: imageOpacity }}
                    >
                        <Image
                            src="/young.png"
                            alt="hero"
                            width={500}
                            height={500}
                            className="w-full h-auto"
                        />
                    </motion.div>

                  

                    {/* Animated Text */}
                    <motion.h1
                        style={{ opacity: textOpacity, y: textY, scale: textScale, filter: TextBlur }}
                        className="text-center font-normal text-lg sm:text-2xl md:text-3xl leading-tight max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl px-4 sm:px-6"
                    >
                        We collaborate with experts to develop advanced treatments in reproductive medicine and women&apos;s health for couples struggling with conception.
                    </motion.h1>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl w-full px-4 sm:px-6">
                        <motion.div
                            style={{ opacity: card1Opacity, y: card1Y }}
                            className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full text-center"
                        >
                            <Image src="/icons/cradle.png" alt="Cells are the cradle of life" width={40} height={40} className="w-12 sm:w-16 mix-blend-multiply" />
                            <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl">Cells are the cradle of life</p>
                        </motion.div>
                        <motion.div
                            style={{ opacity: card2Opacity, y: card2Y }}
                            className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full text-center"
                        >
                            <Image src="/icons/organHealth.png" alt="Cellular health precedes organ health" width={40} height={40} className="w-12 sm:w-16 mix-blend-multiply" />
                            <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl">Cellular health precedes organ health</p>
                        </motion.div>
                        <motion.div
                            style={{ opacity: card3Opacity, y: card3Y }}
                            className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full text-center"
                        >
                            <Image src="/icons/human.png" alt="Your life story is imprinted in your cells" width={40} height={40} className="w-12 sm:w-16 mix-blend-multiply" />
                            <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl">Your life story is imprinted in your cells</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;

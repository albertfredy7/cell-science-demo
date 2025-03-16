"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import * as React from 'react';

const About4 = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])
    const textY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0])
    const textScale = useTransform(scrollYProgress, [0.1, 0.3], [0.7, 1])
    const TextBlur = useTransform(scrollYProgress,
        [0.1, 0.35],
        ["blur(10px)", "blur(0px)"]
    )

    const card1Opacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
    const card2Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
    const card3Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

    // Scale transforms
    const card1Scale = useTransform(scrollYProgress, [0.35, 0.4], [0.8, 1]);
    const card2Scale = useTransform(scrollYProgress, [0.4, 0.45], [0.8, 1]);
    const card3Scale = useTransform(scrollYProgress, [0.45, 0.5], [0.8, 1]);

    // Y position transforms
    const card1Y = useTransform(scrollYProgress, [0.35, 0.4], [50, 0]);
    const card2Y = useTransform(scrollYProgress, [0.4, 0.45], [50, 0]);
    const card3Y = useTransform(scrollYProgress, [0.45, 0.5], [50, 0]);

    const cards = [
        {
            icon: "/icons/reproduction.png",
            alt: "Cells are the cradle of life",
            text: "Hallmarks of Reproductive Aging",
            opacity: card1Opacity,
            scale: card1Scale,
            y: card1Y
        },
        {
            icon: "/icons/rejuvenation.png",
            alt: "Cellular health precedes organ health",
            text: "Oocyte Rejuvenation",
            opacity: card2Opacity,
            scale: card2Scale,
            y: card2Y
        },
        {
            icon: "/icons/mutation.png",
            alt: "Your life story is imprinted in your cells",
            text: "Coq10 mutation in Offsprings health",
            opacity: card3Opacity,
            scale: card3Scale,
            y: card3Y
        }
    ];

    return (
        <div ref={containerRef} className="relative h-[150vh] sm:h-[175vh] md:h-[200vh]">
            <div className="sticky top-0 sm:top-5 md:top-10 h-[100vh] overflow-hidden flex items-center">
                <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16 items-center justify-between w-full">
                        <motion.div
                            style={{
                                opacity: textOpacity,
                                y: textY,
                                scale: textScale,
                                filter: TextBlur,
                            }}
                            className="w-full md:w-1/2 lg:w-5/12"
                        >
                            <h1 className="font-light text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-2 sm:mb-3 md:mb-4 text-center md:text-left">
                                Cellscience Biotech Inc partners with the International Coenzyme Q10 Association to promote CoQ10&apos;s health benefits. Our pipeline targets aging, focusing on mitochondria, diet, and exercise to improve reproductive, metabolic, and offspring health.
                            </h1>
                        </motion.div>

                        <div className="w-full md:w-1/2 lg:w-7/12 flex flex-col justify-center items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                            {cards.map((card, index) => (
                                <motion.div
                                    key={index}
                                    style={{
                                        opacity: card.opacity,
                                        scale: card.scale,
                                        y: card.y
                                    }}
                                    className="flex flex-col items-center bg-gray-100 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg w-full max-w-[90%] sm:max-w-[85%] md:max-w-md mx-auto"
                                >
                                    <div className="flex items-center justify-center w-8 xs:w-10 sm:w-12 md:w-14 lg:w-16 h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16">
                                        <Image 
                                            src={card.icon || "/placeholder.svg"} 
                                            alt={card.alt} 
                                            width={40} 
                                            height={40} 
                                            className="w-full h-full object-contain mix-blend-multiply"
                                        />
                                    </div>
                                    <p className="text-center mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-full">
                                        {card.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About4;

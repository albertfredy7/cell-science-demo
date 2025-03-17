"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import * as React from "react";

const About3 = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Text animation
    const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);
    const textScale = useTransform(scrollYProgress, [0.1, 0.3], [0.7, 1]);

    // Card animations with staggered appearances
    const cardAnimations = [
        useTransform(scrollYProgress, [0.35, 0.4], [0, 1]),
        useTransform(scrollYProgress, [0.4, 0.45], [0, 1]),
        useTransform(scrollYProgress, [0.45, 0.5], [0, 1]),
    ];

    const cardY = [
        useTransform(scrollYProgress, [0.35, 0.4], [50, 0]),
        useTransform(scrollYProgress, [0.4, 0.45], [50, 0]),
        useTransform(scrollYProgress, [0.45, 0.5], [50, 0]),
    ];

    // Card data
    const cardData = [
        {
            src: "/icons/fertility.png",
            alt: "Fertility Preservation",
            text: "Fertility Preservation",
        },
        {
            src: "/icons/oocyte.png",
            alt: "Oocyte Biology",
            text: "Oocyte Biology",
        },
        {
            src: "/icons/metabolism.png",
            alt: "Mitochondrial Metabolism",
            text: "Mitochondrial Metabolism",
        },
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-10 lg:top-0 h-svh overflow-hidden">
                <div className="max-w-4xl h-full mx-auto px-4 py-4 md:px-6 md:py-20 flex flex-col md:flex-row items-center justify-end">
                    <div className="flex flex-col gap-6 md:gap-16 items-center justify-center w-full h-full">
                        <motion.h1
                            style={{ opacity: textOpacity, y: textY, scale: textScale }}
                            className="font-light text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-2 sm:mb-3 md:mb-4 text-center"
                        >
                            Cellscience Biotech Inc collaborate and interact with leading experts in the field of Reproductive medicine, longevity, cell therapy, Ovarian ageing, mitochondrial research & Ferroptosis form of cell death.
                        </motion.h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-3xl mx-auto px-2 sm:px-6">
                            {cardData.map((card, index) => (
                                <motion.div
                                    key={index}
                                    style={{ opacity: cardAnimations[index], y: cardY[index] }}
                                    className="flex flex-col gap-3 items-center bg-gray-100 p-6 rounded-xl text-center"
                                >
                                    <div className="flex items-center justify-center w-14 sm:w-16">
                                        <Image
                                            src={card.src}
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
        </section>
    );
};

export default About3;
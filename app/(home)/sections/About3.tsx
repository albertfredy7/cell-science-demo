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

    const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);
    const textScale = useTransform(scrollYProgress, [0.1, 0.3], [0.7, 1]);

    const card1Opacity = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]);
    const card2Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
    const card3Opacity = useTransform(scrollYProgress, [0.45, 0.5], [0, 1]);

    const card1Y = useTransform(scrollYProgress, [0.35, 0.4], [50, 0]);
    const card2Y = useTransform(scrollYProgress, [0.4, 0.45], [50, 0]);
    const card3Y = useTransform(scrollYProgress, [0.45, 0.5], [50, 0]);

    return (
        <section ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-32 lg:top-0 h-screen overflow-hidden">
                <div className="max-w-6xl h-full mx-auto px-4 py-4 md:px-6 md:py-20 flex flex-col md:flex-row items-center justify-end">
                    <div className="flex flex-col gap-6 md:gap-16 items-center justify-center w-full h-full">
                        <motion.h1
                            style={{ opacity: textOpacity, y: textY, scale: textScale }}
                            className="font-normal text-lg xs:text-xl md:text-2xl lg:text-3xl leading-tight text-center md:max-w-md lg:max-w-4xl mx-auto px-2"
                        >
                            Cellscience Biotech Inc collaborate and interact with leading experts in the field of Reproductive medicine, longevity, cell therapy, Ovarian ageing, mitochondrial research & Ferroptosis form of cell death.
                        </motion.h1>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-10 max-w-3xl w-full px-2 sm:px-6">
                            <motion.div
                                style={{ opacity: card1Opacity, y: card1Y }}
                                className="flex flex-col items-center bg-gray-100 p-4 md:p-6 rounded-lg w-full sm:w-1/3 min-h-[160px] sm:h-64"
                            >
                                <Image src="/icons/fertility.png" alt="Cells are the cradle of life" width={40} height={40} className="w-16 xs:w-20 sm:w-24 mix-blend-multiply" />
                                <p className="text-center mt-3 md:mt-4 text-base xs:text-lg md:text-xl">Fertility Preservation</p>
                            </motion.div>
                            <motion.div
                                style={{ opacity: card2Opacity, y: card2Y }}
                                className="flex flex-col items-center bg-gray-100 p-4 md:p-6 rounded-lg w-full sm:w-1/3 min-h-[160px] sm:h-64"
                            >
                                <Image src="/icons/oocyte.png" alt="Cellular health precedes organ health" width={40} height={40} className="w-16 xs:w-20 sm:w-28 mix-blend-multiply" />
                                <p className="text-center mt-3 md:mt-4 text-base xs:text-lg md:text-xl">Oocyte Biology</p>
                            </motion.div>
                            <motion.div
                                style={{ opacity: card3Opacity, y: card3Y }}
                                className="flex flex-col items-center bg-gray-100 p-4 md:p-6 rounded-lg w-full sm:w-1/3 min-h-[160px] sm:h-64"
                            >
                                <Image src="/icons/metabolism.png" alt="Your life story is imprinted in your cells" width={40} height={40} className="w-16 xs:w-20 sm:w-24 mix-blend-multiply" />
                                <p className="text-center mt-3 md:mt-4 text-base xs:text-lg md:text-xl">Mitochondrial Metabolism</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About3;

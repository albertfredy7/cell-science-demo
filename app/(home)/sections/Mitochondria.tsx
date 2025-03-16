"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Mitochondria = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Use state to store window width, initialized as 0 (safe default for server)
    const [windowWidth, setWindowWidth] = useState(0);

    // Update windowWidth only on the client side
    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []); // Runs once on mount

    // Use the dynamic windowWidth value
    const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [-windowWidth / 2, 0, 50]);
    const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [180, 0, 45]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.1]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

    const textY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
    const textBlur = useTransform(scrollYProgress, [0, 0.3, 1], [5, 0, 0]);

    return (
        <section ref={sectionRef} className="relative overflow-hidden">
            <div className="mx-auto flex flex-col lg:flex-row h-auto lg:min-h-screen max-w-7xl px-4 sm:px-6 md:px-8 max-sm:overflow-x-hidden">
                <motion.div
                    style={{ x: imageX, rotate: imageRotate, scale: imageScale, opacity: imageOpacity }}
                    className="w-full lg:w-1/2 flex items-center justify-center py-8 sm:py-12 lg:py-0 max-sm:py-4 origin-center"
                >
                    <motion.div className="w-full">
                        <Image
                            src="/mitochondria.png"
                            alt="Mitochondria"
                            width={600}
                            height={600}
                            className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain max-sm:max-w-[200px]"
                            priority
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="w-full mx-auto lg:w-1/2 flex items-center justify-center py-8 sm:py-12 lg:py-0 max-sm:py-4"
                >
                    <div className="w-full space-y-4 sm:space-y-6">
                        <motion.h1
                            style={{ filter: useTransform(textBlur, (value) => `blur(${value}px)`) }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-4xl xl:text-5xl 2xl:text-6xl font-normal leading-tight"
                        >
                            Mitochondria: The Power within
                        </motion.h1>

                        <motion.p
                            style={{ filter: useTransform(textBlur, (value) => `blur(${value}px)`) }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="text-base sm:text-base md:text-xl lg:text-xl xl:text-xl  font-normal"
                        >
                            Mitochondria do more than fuel your cells. They carry the essence of life
                            itself. As the architects of energy, they hold the blueprint for life,
                            reproduction, and the evolution of twin sexes.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Mitochondria;
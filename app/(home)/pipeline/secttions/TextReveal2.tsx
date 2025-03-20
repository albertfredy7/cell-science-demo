"use client";

import { TextReveal } from "@/components/TextReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Cell() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    const imageX = useTransform(scrollYProgress, [0, 0.5, 1], [-windowWidth , 0, 50]);
    const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [-windowWidth , 0, 50]);
    const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [180, 0, 45]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1.1]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);



    return (
        <section ref={sectionRef} className="relative bg-black overflow-hidden">
            <div className="mx-auto flex flex-col lg:flex-row h-auto lg:min-h-screen max-w-6xl px-4 sm:px-6 md:px-8">
                <motion.div
                    className="w-full xl:w-1/2 flex items-center justify-center py-8 sm:py-12 lg:py-0 origin-center"
                    style={{ x: imageX,y:imageY, rotate: imageRotate, scale: imageScale, opacity: imageOpacity }}
                >
                    <motion.div className="w-full flex items-center justify-center" >
                        <Image
                            src="/pipeline/cell2.svg"
                            alt="cell2"
                            width={600}
                            height={600}
                            className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-contain animate-pulse"
                            priority
                        />
                    </motion.div>
                </motion.div>

                <div
                    className="w-full xl:w-1/2 flex items-center justify-center py-8 sm:py-12 lg:py-0"
                >
                    <div className="w-full space-y-4 sm:space-y-6 flex justify-center">
                        <div className="w-full flex items-center justify-center mt-8 md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl">
                            <TextReveal
                                className="text-center text-white text-3xl md:text-4xl lg:text-5xl font-light"
                                specialWords={['rejuvenate', 'detoxify', 'energise', 'protect']}
                            >
                                Let the cells breath and nourish from within to detoxify, rejuvenate, energise and protect her for the best.
                            </TextReveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
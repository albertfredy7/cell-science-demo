"use client";
import { LetterSwapPingPong } from "@/components/letter-swap";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import GradientText from "../components/GradientText";

const About = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.1, 0.3], [30, 0]);
    const textScale = useTransform(scrollYProgress, [0.1, 0.3], [0.7, 1]);
    const TextBlur = useTransform(scrollYProgress, [0.1, 0.35], ["blur(10px)", "blur(0px)"]);

    const imageX = useTransform(scrollYProgress, [0.3, 0.4], [200, 0]);
    const imageOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[150vh]">
            <div className="sticky top-0 h-screen flex items-center justify-start overflow-hidden">
                <div className="max-w-6xl container mx-auto px-4 py-10 md:py-16 lg:py-20 flex flex-col md:flex-row items-center lg:items-start">
                    <motion.div
                        style={{ x: imageX, opacity: imageOpacity }}
                        className="absolute right-0 bottom-0"
                    >
                        <Image
                            src="/old.png"
                            alt="hero"
                            width={800}
                            height={800}
                            quality={100}
                            className="max-w-48 md:max-w-60 "
                        />
                    </motion.div>

                    <motion.div
                        style={{ opacity: textOpacity, y: textY, scale: textScale, filter: TextBlur }}
                        className="max-w-2xl flex flex-col md:max-w-xl lg:max-w-2xl"
                    >
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-normal leading-tight mb-6">
                            We can bring to life your vision of health by focusing on{' '}
                            <GradientText className="font-normal text-start block sm:inline">
                                cellular vitality
                            </GradientText>
                        </h1>
                        <p className="text-gray-700 max-w-60 lg:max-w-lg text-base md:text-xl mb-8 font-normal">
                            Cellscience Biotech Inc. focuses on the{' '}
                            <span className="font-medium">back to Cell intelligence</span>{' '}
                            approach to develop new and safer treatment options for women and couples struggling with conception.
                        </p>
                        <div>
                            <Button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-black transition-colors">
                                <LetterSwapPingPong label={"Discover Science"} staggerFrom="first" reverse={true} className="font-medium" />
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

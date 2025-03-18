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



    const imageX = useTransform(scrollYProgress, [0.3, 0.4,0.6,0.7], [200, 0,0,250]);
    const imageOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.7], [0, 1,1,0]);

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
                            className="max-w-48 md:max-w-60 lg:max-w-72 xl:max-w-72"
                        />
                    </motion.div>

                    <motion.div
                        style={{ opacity: textOpacity, y: textY, scale: textScale, filter: TextBlur }}
                        className="max-w-2xl flex flex-col md:max-w-2xl lg:max-w-2xl lg:p-10 space-y-4"
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-normal leading-normal ">
                            We can bring to life your vision of health by focusing on{' '}
                            <GradientText className="font-normal text-start block sm:inline">
                                cellular vitality
                            </GradientText>
                        </h1>
                        <p className=" max-w-60 md:max-w-lg lg:max-w-xl text-base md:text-2xl lg:text-3xl xl:text-2xl mb-8 font-light">
                            Cellscience Biotech Inc. focuses on the{' '}
                            <span className="font-normal">back to Cell intelligence</span>{' '}
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

"use client";
import { BlurIn } from "@/components/Blur-in";
import { LetterSwapPingPong } from "@/components/letter-swap";
import { Button } from "@/components/ui/button";
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import * as React from 'react';
import GradientText from "../components/GradientText";

const About = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className="relative h-screen overflow-x-hidden">
            <section className="max-w-6xl h-full mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row items-center" >

                <div className="max-w-2xl flex flex-col">
                    <BlurIn>
                        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-normal leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                            We can bring to life your vision of health by focusing on{' '}
                            <GradientText className="font-normal text-start block sm:inline">
                                cellular vitality
                            </GradientText>
                        </h1>
                    </BlurIn>

                    <BlurIn delay={.5} >
                        <p className="text-gray-700   max-w-56 lg:max-w-lg text-base font-normal md:text-lg mb-6 md:mb-8 leading-relaxed">
                            Cellscience Biotech Inc. focus on the{' '}
                            <span className="font-semibold">back to Cell intelligence</span>{' '}
                            approach to develop new and safer treatment options for women and couples struggling with conception.
                        </p>
                    </BlurIn>

                    <BlurIn delay={.8}>
                        <Button className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:bg-black transition-colors"
                            ref={ref}>
                            <LetterSwapPingPong label={"Discover Science"} staggerFrom="first" reverse={true} className="font-medium" />
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </BlurIn>
                </div>

                <div className="">
                    <motion.div className="right-0 bottom-0 absolute"
                        initial={{ filter: 'blur(10px)', opacity: 0, x: 100 }}
                        animate={isInView ? { filter: 'blur(0px)', opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5, duration: 1.5 }}

                    >
                        <Image 
                            src="/old.png" 
                            alt="hero" 
                            width={600} 
                            height={600} 
                            className="max-w-52 lg:max-w-sm"
                            
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;

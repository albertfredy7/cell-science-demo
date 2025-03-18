"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

import { BlurIn } from '@/components/Blur-in';
import { CustomButton } from '@/components/CustomButton';
import { LetterSwapPingPong } from '@/components/letter-swap';
import { Button } from '@/components/ui/button';
import GradientText from '../components/GradientText';
import { TextAnimate } from '../components/TextAnimate';

const Hero = () => {
    const startMarquee = useCallback((id: string, pathId: string, content: string, speed: number) => {
        const textPathElement = document.getElementById(id);
        const pathElement = document.getElementById(pathId);

        if (textPathElement instanceof SVGTextPathElement && pathElement instanceof SVGPathElement) {
            const pathLength = pathElement.getTotalLength();
            const repeatedContent = content.repeat(2);
            textPathElement.innerHTML = repeatedContent;

            let offset = 0;

            function animateText() {
                offset -= speed;
                if (offset <= -pathLength / 2) {
                    offset = 0;
                }
                if (textPathElement) {
                    textPathElement.setAttribute('startOffset', `${offset}px`);
                }
                requestAnimationFrame(animateText);
            }

            animateText();
        }
    }, []);

    useEffect(() => {
        const textContent = 'Explore Now &nbsp;&nbsp;&nbsp;&nbsp;'.repeat(50);
        startMarquee('custom-marquee-text', 'custom-text-path', textContent, 1);
        startMarquee('mobile-marquee-text', 'mobile-text-path', textContent, 1);
        startMarquee('tablet-marquee-text', 'tablet-text-path', textContent, 1);
    }, [startMarquee]);

    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const exit = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.1]);



    return (
        <motion.section className="relative min-h-svh  overflow-hidden flex flex-col" ref={containerRef}
        style={{opacity: exit}}
        >
            {/* Main content container */}
            <div className="flex-1 w-full pt-16 xs:pt-20 sm:pt-24 lg:pt-28 mx-auto flex flex-col ">
                <div className="flex-1 xl:grid grid-cols-2 z-20 ">
                    {/* Left column - Main heading */}
           
                        <div className="h-full p-4 sm:p-6 md:p-8 lg:p-10 2xl:ps-36 xl:text-left text-center pt-[16%] md:pt-20 lg:pt-0 space-y-2 ">
                            <span className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-3xl 2xl:text-4xl max-w-md inline-block lg:pt-[10%] ">
                                <TextAnimate type='shiftInUp'>
                                    <h1 className="md:w-full  max-w-64 md:max-w-lg xl:max-w-md ">
                                        You are unique and your body is made of trillions of
                                    </h1>
                                </TextAnimate>
                                <div className='flex justify-center xl:justify-start '>
                                    <TextAnimate type='whipInUp'>
                                        <GradientText className="w-full flex justify-center xl:justify-start">
                                            intelligent cells.
                                        </GradientText>
                                    </TextAnimate>
                                </div>
                            </span>
                            <div className="pt-4 flex justify-center xl:justify-start">
                                <TextAnimate type='shiftInUp' delay={1.5}>
                                    <CustomButton className="font-normal tracking-wide">
                                        <LetterSwapPingPong
                                            label="KNOW MORE"
                                            staggerFrom="first"
                                            reverse={true}
                                            className="font-medium md:text-base"
                                        />
                                    </CustomButton>
                                </TextAnimate >
                            </div>
                        </div>
              

                    {/* Right column - Now visible on all devices */}
                    <div className="  absolute right-0 bottom-0 hidden w-full xl:flex items-end  justify-end xl:pr-[1%] xl:pb-[4%] px-4 sm:px-6 md:px-8 lg:px-0 pb-10 ">
                       
                            <TextAnimate type='shiftInUp' delay={4}>
                                <div className="space-y-2 mx-auto lg:float-end pt-10 lg:pt-10 2xl:pt-16  max-w-sm md:max-w-md lg:max-w-sm xl:max-w-xs 2xl:max-w-md text-center lg:text-left">
                                        <GradientText>
                                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal">
                                                Defying the time & Defying the clock
                                            </p>
                                        </GradientText>
                                    <p className="text-sm sm:text-base lg:text-base text-gray-600">
                                        We at CellScience Biotech, rediscover the beauty within the cells and envision the cellular health through Integrated Intelligent Biology, encourage the body to embrace the health Span.
                                    </p>
                                    <div className="flex justify-center lg:justify-start">
                                        <Button
                                            size="sm"
                                            className="items-center gap-2 rounded-md bg-black text-xs hover:bg-black font-bold text-white"
                                        >
                                            <LetterSwapPingPong
                                                label="Know More"
                                                staggerFrom="first"
                                                reverse={true}
                                                className="font-medium"
                                            />
                                            <span className="text-sm">
                                                <ArrowRight />
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </TextAnimate>
                        
                    </div>
                </div>
            </div>

            {/* Hero image */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto w-full">
                <BlurIn delay={0} blur="8px" duration={1}>
                    <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh] xl:h-[75vh] 2xl:h-[80vh] max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[80%] mx-auto">
                        <Image
                            src="/hero.webp"
                            alt="hero"
                            fill
                            sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                            priority
                            className="object-contain object-bottom z-10"
                            quality={90}
                        />
                    </div>
                </BlurIn>
            </div>

            {/* Desktop curved text path */}
            <div className="hidden -z-10 xl:block h-full w-full overflow-hidden rounded-lg">
                <motion.svg
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    width="100%"
                    height="100%"
                    viewBox="0 0 1908 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-5 absolute bottom-0 z-0"
                >
                    <defs>
                        <path
                            id="custom-text-path"
                            d="M0.25 351.413C38.4067 340.394 128.117 321.203 181.703 332.595C248.685 346.835 436.136 426.682 450.133 436.853C460.399 444.314 523.613 480.082 555.605 486.185C587.597 492.288 693.11 478.597 722.562 477.031C799.042 472.962 1100.46 478.048 1187.44 426.173C1225.91 403.232 1244.43 370.23 1246.92 340.224C1249.42 310.218 1245.43 198.331 1250.92 180.531C1256.42 162.731 1263.42 45.2504 1391.39 19.8217C1519.35 -5.60705 1908.25 0.495854 1917.25 4.05588"
                        />
                    </defs>

                    <motion.path
                        initial={{ pathLength: 0, filter: 'blur(5px)' }}
                        animate={{ pathLength: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.8, ease: 'easeIn' }}
                        d="M0.25 351.413C38.4067 340.394 128.117 321.203 181.703 332.595C248.685 346.835 436.136 426.682 450.133 436.853C460.399 444.314 523.613 480.082 555.605 486.185C587.597 492.288 693.11 478.597 722.562 477.031C799.042 472.962 1100.46 478.048 1187.44 426.173C1225.91 403.232 1244.43 370.23 1246.92 340.224C1249.42 310.218 1245.43 198.331 1250.92 180.531C1256.42 162.731 1263.42 45.2504 1391.39 19.8217C1519.35 -5.60705 1908.25 0.495854 1917.25 4.05588"
                        className="stroke-gray-200"
                        strokeWidth="45"
                    />

                    <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2, stiffness: 1 }}
                        className="uppercase text-xs sm:text-sm md:text-base lg:text-lg"
                        fill="#020203"
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        <textPath id="custom-marquee-text" href="#custom-text-path">
                            {/* Text added via JavaScript */}
                        </textPath>
                    </motion.text>
                </motion.svg>
            </div>

            {/* Mobile curved text path */}
            <div className="-z-10 block xl:hidden h-full w-full overflow-hidden rounded-lg">
                <motion.svg
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0 }}
                    width="100%"
                    height="300"
                    viewBox="0 0 370 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 z-0"
                >
                    <defs>
                        <path
                            id="mobile-text-path"
                            d="M1 149.5C17.6667 113.833 74.4 37.1001 168 15.5001C261.6 -6.09991 341.333 1.83342 369.5 8.50009"
                        />
                    </defs>

                    <motion.path
                        initial={{ pathLength: 0, filter: 'blur(5px)' }}
                        animate={{ pathLength: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.8, ease: 'easeIn' }}
                        d="M1 149.5C17.6667 113.833 74.4 37.1001 168 15.5001C261.6 -6.09991 341.333 1.83342 369.5 8.50009"
                        className="stroke-gray-200"
                        strokeWidth="30"
                    />

                    <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2, stiffness: 1 }}
                        className="uppercase text-xs sm:text-sm"
                        fill="#020203"
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        <textPath id="mobile-marquee-text" href="#mobile-text-path">
                            {/* Text added via JavaScript */}
                        </textPath>
                    </motion.text>
                </motion.svg>
            </div>


            {/* tablet curve text path */}
            <div className="hidden md:block xl:hidden h-full w-full overflow-hidden rounded-lg -z-10">
                <motion.svg
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0 }}
                    width="100%"
                    height="300"
                    viewBox="0 0 370 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 z-0"
                >
                    <defs>
                        <path
                            id="tablet-text-path"
                            d="M1 149.5C17.6667 113.833 74.4 37.1001 168 15.5001C261.6 -6.09991 341.333 1.83342 369.5 8.50009"
                        />
                    </defs>

                    <motion.path
                        initial={{ pathLength: 0, filter: 'blur(5px)' }}
                        animate={{ pathLength: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.8, ease: 'easeIn' }}
                        d="M1 149.5C17.6667 113.833 74.4 37.1001 168 15.5001C261.6 -6.09991 341.333 1.83342 369.5 8.50009"
                        className="stroke-gray-200"
                        strokeWidth="20"
                    />

                    <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2, stiffness: 1 }}
                        className="uppercase text-xs sm:text-sm"
                        fill="#020203"
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        <textPath id="tablet-marquee-text" href="#tablet-text-path">
                            {/* Text added via JavaScript */}
                        </textPath>
                    </motion.text>
                </motion.svg>
            </div>
        </motion.section>
    );
};

export default Hero;
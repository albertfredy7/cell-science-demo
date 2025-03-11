"use client";

import { BlurIn } from '@/components/Blur-in';
import { CustomButton } from '@/components/CustomButton';
import { LetterSwapPingPong } from '@/components/letter-swap';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import GradientText from '../components/GradientText';

const Hero = () => {
    useEffect(() => {
        function startMarquee(id: string, pathId: string, content: string, speed: number) {
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
        }

        const textContent = 'Explore Now &nbsp;&nbsp;&nbsp;&nbsp;'.repeat(50);
        startMarquee('custom-marquee-text', 'custom-text-path', textContent, 1);
        startMarquee('mobile-marquee-text', 'mobile-text-path', textContent, 1);
    }, []);

    return (
        <section className="relative  min-h-svh overflow-hidden lg:pt-20 flex flex-col">
            <div className="xs:pt-28 flex-1 w-full pt-20 lg:pt-28 h-full  mx-auto flex flex-col">
                <div className=' flex-1 lg:grid grid-cols-2 z-20 '>
                    <BlurIn delay={0.4} duration={1.6}>
                        <div className='h-full p-10 2xl:ps-36 lg:text-left text-center md:pt-28 lg:pt-0 space-y-2'>
                            <span className='text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-md inline-block'>

                                <h1 className='w-full max-w-xs md:max-w-lg xl:max-w-md text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>You are unique and your body is made of trillions of</h1>
                                <GradientText className='w-full text-2xl sm:text-2xl md:text-3xl lg:text-4xl'>intelligent cells.</GradientText>
                            </span>
                            <div className="pt-4 flex justify-center lg:justify-start">
                                <CustomButton className='font-normal tracking-wide'> <LetterSwapPingPong label={"KNOW MORE"} staggerFrom="first" reverse={true} className="font-medium" /></CustomButton>
                            </div>
                        </div>
                    </BlurIn>
                    <div className='h-full w-full hidden lg:flex items-end justify-end  2xl:pb-28'>
                        <div className='2xl:pb-8 lg:pb-16 w-full'>
                            <BlurIn delay={1.8} duration={1} >
                                <div className='space-y-2 float-end pt-6 2xl:pt-10 2xl:pr-20'>

                                    <GradientText>
                                        <p className='text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl  font-normal max-w-sm w-full'>
                                            Defying the time & Defying the clock
                                        </p>
                                    </GradientText>
                                    <p className='text-base lg:text-lg text-gray-600 max-w-xs'>
                                        We at CellScience Biotech, rediscover the beauty within the cells and envision the cellular health through Integrated Intelligent Biology, encourage the body to embrace the health Span.
                                    </p>
                                    <Button size={'sm'} className=" items-center gap-2 rounded-md bg-black text-xs hover:bg-black font-bold text-white ">
                                        <LetterSwapPingPong label={"Know More"} staggerFrom="first" reverse={true} className="font-medium" />
                                        <span className="text-sm">
                                            <ArrowRight />
                                        </span>
                                    </Button>
                                </div>
                            </BlurIn>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 mx-auto w-full">
                <BlurIn delay={0} blur='8px' duration={1}>
                    <div className="relative h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-[90vh] max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
                        <Image
                            src="/hero.png"
                            alt="hero"
                            fill
                            sizes="(max-width: 640px) 90vw,
                                   (max-width: 768px) 80vw,
                                   70vw"
                            priority
                            className="object-contain object-bottom z-10"
                            quality={90}
                        />
                    </div>
                </BlurIn>
            </div>

            {/* desktop */}
            <div className="hidden -z-10 lg:block h-full w-full overflow-hidden rounded-lg">
                <motion.svg
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0 }}
                    width="100%"
                    height="100%"
                    viewBox="0 0 1908 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='transform rotate-5 absolute bottom-0 z-0'
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
                        animate={{ opacity: 1, }}
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

            {/* mobile */}
            <div className="-z-10 block lg:hidden h-full w-full overflow-hidden rounded-lg">
                <motion.svg
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0 }}
                    width="100%"
                    height="300"
                    viewBox="0 0 370 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='absolute bottom-0 z-0'
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
                        className="uppercase text-xs sm:text-sm md:text-sm lg:text-base"
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
        </section>
    );
};

export default Hero;
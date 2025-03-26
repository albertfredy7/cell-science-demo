"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';

import { BlurIn } from '@/components/Blur-in';

const Hero2 = () => {
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



           

          
            
        </motion.section>
    );
};

export default Hero2;
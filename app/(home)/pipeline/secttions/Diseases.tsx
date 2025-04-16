'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextAnimate } from "../../components/TextAnimate";

const Diseases = () => {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile devices on client side
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Adjust animation values based on device type
    const diagramOpacity = useTransform(scrollYProgress,
        isMobile ? [0, 0.1] : [0, 0.1],
        [0, 1]
    );
    const labelsOpacity = useTransform(scrollYProgress,
        isMobile ? [0.2, 0.4] : [0.3, 0.5],
        [0, 1]
    );
    const labelsScale = useTransform(scrollYProgress,
        isMobile ? [0.2, 0.4] : [0.3, 0.5],
        [0.92, 1]
    );

    const reproductiveOpacity = useTransform(scrollYProgress,
        isMobile ? [0.4, 0.6] : [0.5, 0.7],
        [0, 1]
    );
    const reproductiveScale = useTransform(scrollYProgress,
        isMobile ? [0.4, 0.6] : [0.5, 0.7],
        [0.92, 1]
    );


    return (
        <section ref={containerRef} className="relative w-full h-auto pt-16">
            {/* Sticky container */}
            <div className="sticky top-0 2xl:top-20 flex flex-col items-center justify-center w-full h-screen px-4 sm:px-6 md:px-8 lg:px-12">
                <TextAnimate type="shiftInUp">
                    <h2 className="text-xl font-normal text-center sm:text-2xl md:text-3xl 2xl:text-4xl  max-w-xl">
                        CoQ10 Deficiency - The Multisystem Mitochondrial Diseases                    </h2>
                </TextAnimate>

                <div className="relative w-full h-[70vh] sm:h-[70vh] md:h-[70vh] lg:h-[80vh] 2xl:h-[90vh] max-w-5xl  overflow-hidden">
                    {/* Diagram layer */}
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        style={{ opacity: diagramOpacity }}
                    >
                        <Image
                            src={'/diseases/diagram.svg'}
                            alt="Mitochondrial diseases diagram"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 80vw"
                            className="object-contain object-center"
                            priority
                        />
                    </motion.div>

                    {/* Labels layer */}
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            opacity: labelsOpacity,
                            scale: labelsScale,
                        }}
                    >
                        <Image
                            src={'/diseases/labels.svg'}
                            alt="Mitochondrial diseases labels"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                            className="object-contain object-center"
                        />
                    </motion.div>

                    {/* reproductive layger */}
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        style={{
                            opacity: reproductiveOpacity,
                            scale: reproductiveScale,
                        }}
                    >
                        <Image
                            src={'/diseases/reproductive.svg'}
                            alt="Mitochondrial diseases labels"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 70vw"
                            className="object-contain object-center"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="h-[100vh]" aria-hidden>

            </div>
        </section>
    );
};

export default Diseases;
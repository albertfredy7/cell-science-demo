"use client";
import { BlurIn } from "@/components/Blur-in";
import { motion, useInView } from 'framer-motion';
import Image from "next/image";
import * as React from 'react';

const About4 = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <section className="max-w-6xl min-h-full mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-20 flex flex-col md:flex-row items-center justify-end" >

                {/* content */}
                <div className="flex flex-col md:flex-row gap-10 sm:gap-16 items-center justify-between w-full  max-w-5xl min-h-screen">
                    <BlurIn>
                        <h1 className="font-light text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl  leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 text-center lg:max-w-xl md:max-w-md mx-auto px-2">
                            Cellscience Biotech Inc partners with the International Coenzyme Q10 Association to promote CoQ10&apos;s health benefits. Our pipeline targets aging, focusing on mitochondria, diet, and exercise to improve reproductive, metabolic, and offspring health.
                        </h1>
                    </BlurIn>

                    <BlurIn delay={.8}>
                        <div className="flex flex-col justify-center items-center gap-4 sm:gap-4 lg:gap-6 lg:max-w-3xl w-full px-2 sm:px-6" ref={ref}>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-3 sm:p-4 rounded-lg w-full h-auto sm:h-48"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                            >
                                <Image src="/icons/reproduction.png" alt="Cells are the cradle of life" width={40} height={40} className="w-16 sm:w-16 mix-blend-multiply" />
                                <p className="text-center mt-2 text-lg md:text-lg max-w-36">Hallmarks of Reproductive Aging</p>
                            </motion.div>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-3 sm:p-4 rounded-lg w-full h-auto sm:h-48"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Image src="/icons/rejuvenation.png" alt="Cellular health precedes organ health" width={40} height={40} className="w-16 sm:w-20 mix-blend-multiply" />
                                <p className="text-center mt-2 text-lg md:text-lg">Oocyte Rejuvenation</p>
                            </motion.div>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-3 sm:p-4 rounded-lg w-full h-auto sm:h-48"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Image src="/icons/mutation.png" alt="Your life story is imprinted in your cells" width={40} height={40} className="w-16 sm:w-16 mix-blend-multiply" />
                                <p className="text-center mt-2 text-lg md:text-lg max-w-36">Coq10 mutation in  Offsprings health</p>
                            </motion.div>
                        </div>
                    </BlurIn>
                </div>
            </section>
        </main>
    );
};

export default About4;

"use client";
import { BlurIn } from "@/components/Blur-in";
import { motion, useInView } from 'framer-motion';
import Image from "next/image";
import * as React from 'react';

const About2 = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section className="relative min-h-screen overflow-x-hidden">
            <div className="max-w-6xl min-h-full mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-20 flex flex-col md:flex-row items-center justify-end" >
                {/* image */}
                <div className="hidden lg:block">
                    <motion.div className="left-0 bottom-0 absolute"
                        initial={{ filter: 'blur(10px)', opacity: 0, x: -100 }}
                        animate={isInView ? { filter: 'blur(0px)', opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5, duration: 1.5 }}
                    >
                        <Image
                            src="/young.png"
                            alt="hero"
                            width={600}
                            height={600}
                            className="max-w-52 lg:max-w-sm"
                        />
                    </motion.div>
                </div>
                {/* content */}
                <div className="flex flex-col gap-3 sm:gap-10 items-center max-w-4xl justify-center w-full min-h-screen">
                    <BlurIn>
                        <h1 className="font-normal text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl  leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 text-center lg:max-w-3xl md:max-w-xl mx-auto px-2">
                            We collaborate with experts to develop advanced treatments in reproductive medicine and women&apos;s health and couples struggling with conception
                        </h1>
                    </BlurIn>

                    <BlurIn delay={.8}>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-6 lg:gap-10 max-w-3xl w-full px-2 sm:px-6" ref={ref}>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full sm:w-1/3 h-auto sm:h-64 justify-between"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                            >
                                <Image src="/icons/cradle.png" alt="Cells are the cradle of life" width={40} height={40} className="w-24 sm:w-20 mix-blend-multiply" />
                                <p className="text-center mt-2 sm:mt-4 text-xl md:text-xl">Cells are the cradle of life</p>
                                <p className="text-center text-sm text-gray-600">(Prof Nick Lane)<br />BIOCHEMIST AND WRITER</p>
                            </motion.div>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full sm:w-1/3 h-auto sm:h-64 justify-between"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Image src="/icons/organHealth.png" alt="Cellular health precedes organ health" width={40} height={40} className="w-24 sm:w-20" />
                                <p className="text-center mt-2 sm:mt-4 text-xl md:text-xl">Cellular health precedes organ health</p>
                                <div className="invisible">
                                    <p className="text-center text-xs">Spacer</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full sm:w-1/3 h-auto sm:h-64 justify-between"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Image src="/icons/human.png" alt="Your life story is imprinted in your cells" width={40} height={40} className="w-24 sm:w-20 mix-blend-multiply" />
                                <p className="text-center mt-2 sm:mt-4 text-xl md:text-xl">Your life story is imprinted in your cells</p>
                                <div className="invisible">
                                    <p className="text-center text-xs">Spacer</p>
                                </div>
                            </motion.div>
                        </div>
                    </BlurIn>
                </div>
            </div>
        </section>
    );
};

export default About2;

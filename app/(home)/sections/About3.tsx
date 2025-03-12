"use client";
import { BlurIn } from "@/components/Blur-in";
import { motion, useInView } from 'framer-motion';
import Image from "next/image";
import * as React from 'react';

const About3 = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <section className="max-w-6xl min-h-full mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-20 flex flex-col md:flex-row items-center justify-end" >

                {/* content */}
                <div className="flex flex-col gap-3 sm:gap-16 items-center  justify-center w-full min-h-screen">
                    <BlurIn>
                        <h1 className="font-normal text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl  leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 text-center md:max-w-md lg:max-w-4xl mx-auto px-2">
                            Cellscience Biotech Inc collaborate  and interact with leading experts in  the field of Reproductive medicine,  longevity, cell therapy, Ovarian  ageing, mitochondrial research &   Ferroptosis form of cell death.
                        </h1>
                    </BlurIn>

                    <BlurIn delay={.8}>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-6 lg:gap-10 max-w-3xl w-full px-2 sm:px-6" ref={ref}>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full sm:w-1/3 h-auto sm:h-64 "
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                            >
                                <Image src="/icons/fertility.png" alt="Cells are the cradle of life" width={40} height={40} className="w-24 sm:w-20 mix-blend-multiply" />
                                <p className="text-center mt-2 sm:mt-4 text-xl md:text-xl">Fertility Preservation</p>
                            </motion.div>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full sm:w-1/3 h-auto sm:h-64 "
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Image src="/icons/oocyte.png" alt="Cellular health precedes organ health" width={40} height={40} className="w-24 sm:w-28 mix-blend-multiply" />
                                <p className="text-center mt-2 sm:mt-4 text-xl md:text-xl">Oocyte Biology</p>
                                <div className="invisible">
                                    <p className="text-center text-xs">Spacer</p>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex flex-col items-center bg-gray-100 p-4 sm:p-6 rounded-lg w-full sm:w-1/3 h-auto sm:h-64 "
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Image src="/icons/metabolism.png" alt="Your life story is imprinted in your cells" width={40} height={40} className="w-24 sm:w-20 mix-blend-multiply" />
                                <p className="text-center mt-2 sm:mt-4 text-xl md:text-xl">Mitochondrial Metabolism</p>
                                <div className="invisible">
                                    <p className="text-center text-xs">Spacer</p>
                                </div>
                            </motion.div>
                        </div>
                    </BlurIn>
                </div>
            </section>
        </main>
    );
};

export default About3;

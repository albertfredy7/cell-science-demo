"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const Hero = () => {
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })

    const yTransform = useTransform(scrollYProgress, [0, 0.4, 1], [0, 200, 150])
    const xTransform = useTransform(scrollYProgress, [0, 0.5, 0.8, 0.9, 1], [0, -200, -800, -1200, -2000])
    const rotate = useTransform(scrollYProgress, [0, 0.4, 1], [0, -50, -90])
    const scale = useTransform(scrollYProgress, [0, 0.3, 1], [.85, 1.2, 1.5])
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [1, 1, 0, 0])
    const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.7], [0, 0, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.9, 1], [0, 0, 1, 1])

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            {/* Floating Cell */}


            {/* Section 1 */}
            <section className="h-screen max-w-6xl mx-auto w-full flex items-center justify-center px-4">
                <motion.div
                    className="fixed top-1/4 lg:top-[4%] left-[37%] 2xl:left-[40%] pointer-events-none -z-10"
                    style={{
                        x: xTransform,
                        y: yTransform,
                        rotate,
                        scale,
                    }}
                >
                    <Image
                        src="/pipeline/cell.svg"
                        alt="cell"
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 300px, 350px"
                        className="object-contain w-[150px] sm:w-[200px] md:w-[300px] lg:w-[350px] xl:max-w-sm h-auto"
                    />
                </motion.div>



                <motion.h1
                    style={{ opacity: opacity1 }}
                    className="text-center text-2xl sm:text-4xl md:text-3xl xl:text-3xl 2xl:text-5xl font-normal max-w-md xl:max-w-xl 2xl:max-w-3xl md:mt-36 lg:mt-24 xl:mt-20 "
                >
                    You are special, possess a unique biology, your cells are wise and knows how to heal and grow.
                </motion.h1>
            </section>

            {/* Section 2 */}
            <section className="h-screen max-w-6xl mx-auto w-full flex items-center px-4">
                <motion.div style={{ opacity: opacity2 }} className="w-full md:w-1/2 ml-auto text-center md:text-left">
                    <h2 className="text-center text-2xl sm:text-4xl md:text-3xl xl:text-3xl 2xl:text-5xl font-normal max-w-md xl:max-w-xl 2xl:max-w-3xl md:pl-16 mx-auto">
                        We believe with the right touch, we can rekindle the beauty of cell science to heal and restore the harmony.
                    </h2>
                </motion.div>
            </section>

            {/* Section 3 */}
            <section className="h-screen max-w-6xl mx-auto w-full flex justify-center items-center px-4 text-center">
                <motion.h2
                    style={{ opacity: opacity3 }}
                    className="text-center text-2xl sm:text-4xl md:text-3xl xl:text-3xl 2xl:text-5xl font-normal max-w-md xl:max-w-xl 2xl:max-w-3xl"
                >
                    Enhancing the natural processes & the substrate of the body, our technologies use the best that biology can offer for you.
                </motion.h2>
            </section>
        </div>
    )
}

export default Hero

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const Mitochondria = () => {
    const sectionRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    })

    // Image animations
    const imageScale = useTransform(scrollYProgress, [0, 0.1,0.8], [2, 1,.8])
    const imageOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
    const imageMotion = useTransform(scrollYProgress, [0, 0.1], [0, 50])
    const imageBlur = useTransform(scrollYProgress,
        [0, 0.18],
        ["blur(8px)", "blur(0px)"]
    )
    // Text animations
    const textOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
    const textY = useTransform(scrollYProgress, [0, 0.1], [50, 0])
    const textScale = useTransform(scrollYProgress, [0, 0.1], [.8, 1])
    const TextBlur = useTransform(scrollYProgress,
        [0, 0.18],
        ["blur(8px)", "blur(0px)"]
    )

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden"
        >
            <div className="mx-auto container flex flex-col lg:flex-row overflow-hidden h-full">
                {/* Image container */}
                <motion.div
                    className=" w-full h-screen  flex items-center justify-center 
                            relative lg:w-1/2 lg:h-full  "
                    style={{
                        scale: imageScale,
                        opacity: imageOpacity,
                        translateY: imageMotion,
                        filter: imageBlur,
                    }}
                >
                    <Image
                        src="/mitochondria.png"
                        alt="Mitochondria"
                        width={600}
                        height={600}
                        className="w-1/2 h-auto max-w-2xl object-contain 
                                  lg:w-auto"
                        priority
                    />
                </motion.div>
    
                {/* Text content */}
                <motion.div
                    className="flex justify-center lg:justify-end items-center h-screen lg:h-full z-10 
                             px-4 sm:px-6 md:px-8 lg:px-0 lg:w-1/2 2xl:mr-36"
                    style={{
                        opacity: textOpacity,
                        y: textY,
                        scale: textScale,
                        filter: TextBlur,
                    }}
                >
                    <div className=" gap-3  w-full max-w-xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-black">
                            Mitochondria: The Power within
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl">
                            Mitochondria do more than fuel your cells—they carry the essence of life itself. As the architects of
                            energy, they hold the blueprint for life, reproduction, and the evolution of twin sexes.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Mitochondria

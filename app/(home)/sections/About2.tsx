"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";


const About2 = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Text animation
    const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
    const textScale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);
    const TextBlur = useTransform(scrollYProgress, [0.1, 0.3], ["blur(15px)", "blur(0px)"]);

    // Card animations with delayed appearances
    const cardAnimations = [
        useTransform(scrollYProgress, [0.3, 0.4], [0, 1]),
        useTransform(scrollYProgress, [0.4, 0.5], [0, 1]),
        useTransform(scrollYProgress, [0.5, 0.6], [0, 1])
    ];

    const cardY = [
        useTransform(scrollYProgress, [0.3, 0.4], [50, 0]),
        useTransform(scrollYProgress, [0.4, 0.5], [50, 0]),
        useTransform(scrollYProgress, [0.5, 0.6], [50, 0])
    ];

    // Image slide-in effect
    const imageX = useTransform(scrollYProgress, [0.3, 0.5,0.7,0.8], [-250, 0,0,-250]);
    const imageOpacity = useTransform(scrollYProgress, [0.3, 0.5,0.7,0.8], [0, 1,1,0]);

    const cardData = [
        { src: "/icons/cradle.png", alt: "Cells are the cradle of life", text: "Cells are the cradle of life" },
        { src: "/icons/organHealth.png", alt: "Cellular health precedes organ health", text: "Cellular health precedes organ health" },
        { src: "/icons/human.png", alt: "Your life story is imprinted in your cells", text: "Your life story is imprinted in your cells" }
    ];

    return (
        <section ref={containerRef} className="relative h-[200lvh] ">
            <div className="sticky top-10 lg:top-12 h-svh  flex items-center justify-start overflow-hidden">
                <div className="max-w-md lg:max-w-xl container mx-auto px-4 md:py-16 lg:py-20 flex flex-col  md:flex-row items-center lg:items-start  ">
                    {/* Animated Image */}

                    <motion.div
                        className="hidden md:block absolute left-0 bottom-0 w-full max-w-xs 2xl:max-w-[22%] "
                        style={{ x: imageX, opacity: imageOpacity }}
                    >
                        <Image
                            src="/young.png"
                            alt="hero"
                            width={600}
                            height={600}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    {/* Animated Text */}
                    <div className="flex flex-col gap-6 items-center justify-center px-6">
                        <motion.h1
                            style={{ opacity: textOpacity, y: textY, scale: textScale, filter: TextBlur }}
                            className="font-normal text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-center "
                        >
                            We collaborate with experts to develop advanced treatments in reproductive medicine and women&apos;s health for couples struggling with conception.
                        </motion.h1>

                        {/* Cards Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-xl mx-auto  ">
                            {cardData.map((card, index) => (
                                // <motion.div
                                //     key={index}
                                //     style={{ opacity: cardAnimations[index], y: cardY[index] }}
                                //     className="flex flex-col gap-3 items-center bg-gray-100 p-6 rounded-xl text-center"
                                // >
                                //     <Image
                                //         src={card.src}
                                //         alt={card.alt}
                                //         width={50}
                                //         height={50}
                                //         className="w-14 sm:w-16 mix-blend-multiply"
                                //     />
                                //     <p className="font-normal text-base leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-center ">{card.text}</p>
                                // </motion.div>

                                <motion.div
                                    key={index}
                                        style={{ opacity: cardAnimations[index], y: cardY[index] }}
                                        className="flex flex-col gap-3 items-center bg-gray-100 p-6 rounded-xl text-center"
                                >
                                    <div className="flex items-center justify-center  w-14">
                                        <Image
                                            src={card.src || "/placeholder.svg"}
                                            alt={card.alt}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-contain mix-blend-multiply"
                                        />
                                    </div>
                                    <p className="text-center mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-full">
                                        {card.text}
                                    </p>
                                </motion.div>


                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;


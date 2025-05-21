"use client";
import { CustomButton } from "@/components/CustomButton";
import { LetterSwapPingPong } from "@/components/letter-swap";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });


    const videoWidth = useTransform(scrollYProgress, [0.4, 0.7], ["80%", "150%"]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen w-full overflow-y-auto bg-white py-16 md:py-24 overflow-hidden"
        >
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8">

                    {/* Heading Section */}
                    <div className="flex items-center justify-center w-full text-center pt-20">

                        <h1 className="text-4xl font-normal max-w-3xl tracking-tight text-black md:text-5xl lg:text-6xl">
                            Unlocking the Power of{" "}
                            <span className="relative">
                                <span className="relative z-10 px-4">Mitochondria</span>
                                <span className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r px-4 from-purple-200 to-cyan-200"></span>
                            </span>{" "}
                            for Cellular Energy
                        </h1>

                    </div>

                    {/* Animated Video Section */}
                    <motion.div
                        style={{ width: videoWidth }}
                        className="relative min-h-[7rem] rounded-3xl overflow-hidden"
                    >
                        <video
                            src="/science/hero-video.webm"
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </motion.div>

                    {/* Button Section */}
                    <div className="md:flex justify-between lg:min-h-[120px] w-full max-w-7xl mt-8 space-y-6">
                        <p className="text-3xl md:text-4xl font-normal max-w-2xl  text-black tracking-tight">
                            Pioneering research into cellular energetics and mitochondrial function to revolutionize our understanding of health and aging.
                        </p>
                        <CustomButton className="font-normal tracking-wide">
                            <LetterSwapPingPong
                                label="KNOW MORE"
                                staggerFrom="first"
                                reverse={true}
                                className="font-medium md:text-base"
                            />
                        </CustomButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

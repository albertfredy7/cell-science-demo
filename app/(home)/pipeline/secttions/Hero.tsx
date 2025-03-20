import { CustomButton } from "@/components/CustomButton";
import { LetterSwapPingPong } from "@/components/letter-swap";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextAnimate } from "../../components/TextAnimate";

const Hero = () => {
    return (
        <section className="h-screen w-full md:overflow-hidden relative">
            <div className="w-full h-full flex  flex-col justify-center">

                {/* image with framer motion animation */}
                <div className="flex items-center justify-center p-4 w-full pt-[10%] lg:pt-10 overflow-hidden">
                    <motion.div
                        animate={{
                            y: [0, -15, 0, 15, 0],
                            scale: [1, 1.1, 1.1, 1.02, 1]
                        }}
                        transition={{
                            duration: 8,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        >
                            <Image
                                src={'/pipeline/cell.svg'}
                                alt="cell"
                                width={350}
                                height={350}
                                objectFit="contain"
                                className="w-full  xs:max-w-xs sm:max-w-[10%] md:max-w-md lg:max-w-lg xl:max-w-sm 2xl:max-w-lg z-0"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* content */}
                <div className="flex flex-col xl:flex-row xl:justiify-between xl:gap-20 mx-auto w-full max-w-6xl z-10">
                    <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-start w-full gap-2">
                        <TextAnimate type="shiftInUp">
                            <p className="text-xl 2xl:text-2xl z-10">Pipeline</p>
                        </TextAnimate>
                        <TextAnimate type="shiftInUp">
                            <h1 className="font-normal text-3xl md:text-4xl lg:text-6xl xl:text-4xl 2xl:text-6xl max-w-xs lg:max-w-lg xl:max-w-sm 2xl:max-w-sm z-10"> Reigniting the Beauty of Cell Science</h1>
                        </TextAnimate>
                    </div>
                    <TextAnimate type="swingDrop">
                        <div className="w-full flex flex-col gap-4 justify-center items-center mx-auto">
                            <p className="font-normal text-lg md:text-xl lg:text-xl 2xl:text-2xl text-center lg:text-left max-w-60 md:max-w-md xl:max-w-md z-10">
                                Harnessing the power of biology, our technologies amplify your body&apos;s potential like never before.
                            </p>
                            
                                <div className="w-full xl:max-w-md flex justify-center xl:justify-start">
                                    <CustomButton className="font-normal tracking-wide text-sm md:text-base">
                                        <LetterSwapPingPong
                                            label="KNOW MORE"
                                            staggerFrom="first"
                                            reverse={true}
                                            className="font-medium"
                                        />
                                    </CustomButton>
                                </div>
                           
                        </div>
                    </TextAnimate>
                </div>
            </div>
        </section>
    );
}

export default Hero;
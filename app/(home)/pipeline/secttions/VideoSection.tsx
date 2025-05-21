"use client";

import GradientText from "../../components/GradientText";
import ScrollyVideo from "../../science/components/ScrollyVideo";

export default function Home() {


    return (
        <section className="bg-black">
            {/* <ImageCanvas
                videoSrc="/pipeline/optimized-video.webm"
                videoDuration={15}
                scrollHeight={4000}
            /> */}
            <ScrollyVideo src="/pipeline/enhanced-video.webm" >
                <div className="max-w-5xl px-6">
                    <div className=" text-center text-white text-3xl md:text-4xl lg:text-4xl font-light">
                        Cellscience Biotech targets the very first organs that age in humans — the female reproductive organs. We are shifting the perspective of ovarian biology; <GradientText>it&apos;s not just the egg, the ovary — Nest, and the homeostasis in the ovarian microenvironment changes with age.</GradientText>
                    </div>
                    <div className="text-center text-white text-3xl md:text-4xl lg:text-4xl font-light mt-6">
                        Targeting these newly identified hallmarks can enhance the quality of follicles by restoring the freshness of youth in the reproductive tissues.
                    </div>
                </div>
            </ScrollyVideo>
        </section>
    );
}
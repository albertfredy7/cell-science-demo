import { QuoteIcon } from "lucide-react";
import ScrollyVideo from "../components/ScrollyVideo";

const VideoSection = () => {
    return (
        <section className="bg-black relative">
            <div className="hidden md:block">
                <ScrollyVideo src="/science/optimized-video.webm">
                    <div className="w-full">
                        <blockquote className="border-l-4 border-white pl-4 md:pl-6 font-light">
                            <QuoteIcon size={36} color="#fafafa" />
                            <p className="text-4xl text-white">
                                &quot;Mitochondria are so small that one billion of them would fit comfortably in a grain of sand. The
                                evolution of mitochondria fitted life with a turbo charged engine, revved up and ready for use at any
                                time&quot;.
                            </p>
                            <footer className="mt-2 text-sm md:text-base text-white/70 italic">
                                Nick Lane, Power, Sex, Suicide
                            </footer>
                        </blockquote>
                    </div>
                </ScrollyVideo>
                    

            </div>
            <div className="block md:hidden">
                <ScrollyVideo src="/science/mob-optimized-video.webm">
                    <div className="w-full">
                        <blockquote className="border-l-4 border-white pl-4 md:pl-6 font-light">
                            <QuoteIcon size={36} color="#fafafa" />
                            <p className="text-4xl text-white">
                                &quot;Mitochondria are so small that one billion of them would fit comfortably in a grain of sand. The
                                evolution of mitochondria fitted life with a turbo charged engine, revved up and ready for use at any
                                time&quot;.
                            </p>
                            <footer className="mt-2 text-sm md:text-base text-white/70 italic">
                                Nick Lane, Power, Sex, Suicide
                            </footer>
                        </blockquote>
                    </div>
                </ScrollyVideo>
            </div>
        </section>
    );
};

export default VideoSection;

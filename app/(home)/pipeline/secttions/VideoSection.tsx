"use client";
import TextReveal from '@/components/TextReveal';
import ImageCanvas from '../components/ImageCanvas';

export default function Home() {
  

    return (
        <section >
            {/* Animated section */}
            <div
                className="bg-black"
            >
                <div className='sticky top-10'>
                    <ImageCanvas
                        videoSrc="/pipeline/optimized-video.webm"
                        scrollHeight={5000}
                        videoDuration={13}
                    />
                </div>
            </div>

            {/* Unaffected section */}
            <section className="bg-black min-h-screen flex justify-center items-center">
                <div className="max-w-5xl px-6">
                    <TextReveal
                        className="text-center text-white text-3xl md:text-4xl lg:text-4xl font-light "
                        // specialWords={'the ovary serves as the nest, and the homeostasis in the ovarian microenvironment changes with age'}
                    >
                        Cellscience Biotech focuses on the very first organs that age in humans—the female reproductive organs. We are shifting the perspective of ovarian biology it’s not just about the egg, the ovary serves as the nest, and the homeostasis in the ovarian microenvironment changes with age.
                    </TextReveal>
                    <TextReveal
                        className="text-center text-white text-3xl md:text-4xl lg:text-4xl font-light"
                    >
                        Targeting these newly identified hallmarks can enhance the quality of follicles by restoring the freshness of youth in the reproductive tissues.
                    </TextReveal>
                </div>
            </section>
        </section>
    );
}
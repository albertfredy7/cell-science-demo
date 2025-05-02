"use client";

import ImageCanvas from "../components/ImageCanvas";

export default function Home() {


    return (
        <section className="bg-black">
            <ImageCanvas
                videoSrc="/pipeline/optimized-video.webm"
                videoDuration={15}
                scrollHeight={4000}
            />
        </section>
    );
}
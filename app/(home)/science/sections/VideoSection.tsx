import ImageCanvas from "../../pipeline/components/ImageCanvas";

const VideoSection = () => {
    return (
        <section className="bg-black">
            <div className="hidden md:block">
                <ImageCanvas
                    videoSrc="/science/optimized-video.webm"
                    videoDuration={33}
                    scrollHeight={8600}
                    type="science"
                />
            </div>
            <div className="block md:hidden">
                <ImageCanvas
                    videoSrc="/science/mob-optimized-video.webm"
                    videoDuration={33}
                    scrollHeight={8600}
                    type="science"
                />
            </div>
        </section>
    );
}

export default VideoSection;
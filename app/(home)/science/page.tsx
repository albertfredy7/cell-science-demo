import ReactLenis from "lenis/react";
import ScrollVelocityChild from "../pipeline/components/ScrollVelocityChild";
import About from "./sections/About";
import Reveal from "./sections/Reveal";
import Testimonial from "./sections/Testimonial";
import VideoSection from "./sections/VideoSection";

export default function Page() {
    return (
        <ReactLenis root options={{
            duration: 3,
            infinite: false,
        }}>
            <div>
                <div className="h-screen bg-white"></div>
                <ScrollVelocityChild/>
                <About/>
                 <VideoSection/>
                <Reveal/>
                <Testimonial/>
            </div>
        </ReactLenis>
    );
}
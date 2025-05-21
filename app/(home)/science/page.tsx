import ReactLenis from "lenis/react";
import ScrollVelocityChild from "../pipeline/components/ScrollVelocityChild";
import About from "./sections/About";
import Hallmarks from "./sections/Hallmarks";
import Hero from "./sections/Hero";
import Mitochondria from "./sections/Mitochondria";
import MitochondriaCenter from "./sections/MitochondriaCenter";
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
                {/* <div className="h-screen bg-white"></div> */}
                <Hero/>
                <ScrollVelocityChild/>
                <About/>
                <Mitochondria/>
                <VideoSection/>
                <MitochondriaCenter/>
                <Reveal/>
                <Hallmarks/>
                <Testimonial/>
            </div>
        </ReactLenis>
    );
}
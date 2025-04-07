"use client"

import ReactLenis from "lenis/react";
import ScrollVelocityChild from "./components/ScrollVelocityChild";
import CoQ10 from "./secttions/CoQ10";
import Diseases from "./secttions/Diseases";
import HarnessingMitochondria from "./secttions/HarnessingMitochondria";
import Hero from "./secttions/Hero";
import Homeostasis from "./secttions/Homeostasis";
import Manifestations from "./secttions/Manifestations";
import ParentingBeforeConception from "./secttions/ParentingBeforeConception";
import Technology from "./secttions/Technology";
import { Cell } from "./secttions/TextReveal2";
import VideoSection from "./secttions/VideoSection";

export default function Page() {
    return (
        <>
        <ReactLenis
            root
            options={{
                duration: 3,
                infinite: false,
            }}
        >
        <Hero/>
        <ScrollVelocityChild/>
        <VideoSection/>
        <Homeostasis/>
        <ParentingBeforeConception/>
        <Cell/>
        <HarnessingMitochondria/>
        <Technology/>
        <Diseases/>
        <Manifestations/>
        <CoQ10/>
        </ReactLenis>
        </>
    );
}
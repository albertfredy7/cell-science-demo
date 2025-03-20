"use client"

import ScrollVelocityChild from "./components/ScrollVelocityChild";
import CoQ10 from "./secttions/CoQ10";
import Diseases from "./secttions/Diseases";
import HarnessingMitochondria from "./secttions/HarnessingMitochondria";
import Hero from "./secttions/Hero";
import Homeostasis from "./secttions/Homeostasis";
import Manifestations from "./secttions/Manifestations";
import ParentingBeforeConception from "./secttions/ParentingBeforeConception";
import Technology from "./secttions/Technology";

export default function Page() {
    return (
        <>
        <Hero/>
        <ScrollVelocityChild/>
        <Homeostasis/>
        <ParentingBeforeConception/>
        <HarnessingMitochondria/>
        <Technology/>
        <Diseases/>
        <Manifestations/>
        <CoQ10/>
        </>
    );
}
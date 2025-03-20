"use client"

import ScrollVelocityChild from "./components/ScrollVelocityChild";
import CoQ10 from "./secttions/CoQ10";
import Diseases from "./secttions/Diseases";
import Hero from "./secttions/Hero";
import Manifestations from "./secttions/Manifestations";
import Technology from "./secttions/Technology";

export default function Page() {
    return (
        <>
        <Hero/>
        <ScrollVelocityChild/>
        <Technology/>
        <Diseases/>
        <Manifestations/>
        <CoQ10/>
        </>
    );
}
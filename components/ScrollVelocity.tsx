"use client";

import { cn } from "@/lib/utils";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface VelocityScrollProps {
    children: React.ReactNode; // Changed from text: string to children: React.ReactNode
    default_velocity?: number;
    className?: string;
}

interface ParallaxProps {
    children: React.ReactNode; // Changed from string to React.ReactNode
    baseVelocity: number;
    className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
    children, // Changed from text to children
    default_velocity = 5,
    className,
}: VelocityScrollProps) {
    function ParallaxText({
        children,
        baseVelocity = 100,
        className,
    }: ParallaxProps) {
        const baseX = useMotionValue(0);
        const { scrollY } = useScroll();
        const scrollVelocity = useVelocity(scrollY);
        const smoothVelocity = useSpring(scrollVelocity, {
            damping: 50,
            stiffness: 400,
        });

        const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
            clamp: false,
        });

        const [repetitions, setRepetitions] = useState(1);
        const containerRef = useRef<HTMLDivElement>(null);
        const contentRef = useRef<HTMLDivElement>(null); // Changed from textRef to contentRef

        useEffect(() => {
            const calculateRepetitions = () => {
                if (containerRef.current && contentRef.current) {
                    const containerWidth = containerRef.current.offsetWidth;
                    const contentWidth = contentRef.current.offsetWidth;
                    const newRepetitions = Math.ceil(containerWidth / contentWidth) + 2;
                    setRepetitions(newRepetitions);
                }
            };

            calculateRepetitions();
            window.addEventListener("resize", calculateRepetitions);
            return () => window.removeEventListener("resize", calculateRepetitions);
        }, [children]);

        const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

        const directionFactor = React.useRef<number>(1);
        useAnimationFrame((t, delta) => {
            let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();
            baseX.set(baseX.get() + moveBy);
        });

        return (
            <div
                className="w-full overflow-hidden whitespace-nowrap"
                ref={containerRef}
            >
                <motion.div className={cn("inline-block", className)} style={{ x }}>
                    {Array.from({ length: repetitions }).map((_, i) => (
                        <div
                            key={i}
                            className="inline-block"
                            ref={i === 0 ? contentRef : null}
                        >
                            {children}
                            {" "} {/* Added space between repetitions */}
                        </div>
                    ))}
                </motion.div>
            </div>
        );
    }

    return (
        <section className="relative w-full">
            <ParallaxText baseVelocity={default_velocity} className={className}>
                {children}
            </ParallaxText>
        </section>
    );
}
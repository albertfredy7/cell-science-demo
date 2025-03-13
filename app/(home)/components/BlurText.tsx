"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface BlurTextProps {
    children: string;
    animateBy?: "words" | "letters";
    direction?: "top" | "bottom" | "left" | "right";
    className?: string;
}

const BlurText: React.FC<BlurTextProps> = ({
    children,
    animateBy = "letters",
    direction = "top",
    className = "",
}) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const words = children.split(" ");
    const letters = children.split("");

    const getAnimation = (index: number) => {
        const directionMap = {
            top: { y: -20 },
            bottom: { y: 20 },
            left: { x: -20 },
            right: { x: 20 },
        };

        return {
            hidden: { opacity: 0, ...directionMap[direction] },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 },
            },
        };
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className={className} ref={ref}>
            {animateBy === "words"
                ? words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial="hidden"
                        animate={controls}
                        variants={getAnimation(index)}
                        style={{ display: "inline-block", marginRight: "0.25rem" }}
                    >
                        {word}
                    </motion.span>
                ))
                : letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        initial="hidden"
                        animate={controls}
                        variants={getAnimation(index)}
                        style={{ display: "inline-block" }}
                    >
                        {letter}
                    </motion.span>
                ))}
        </div>
    );
};

export default BlurText;
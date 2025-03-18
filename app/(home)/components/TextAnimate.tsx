"use client"

import { HTMLMotionProps, motion, useAnimation, useInView } from "framer-motion";
import React, { FC, ReactNode, useEffect, useRef } from "react";

type AnimationType =
    | "fadeIn"
    | "fadeInUp"
    | "popIn"
    | "shiftInUp"
    | "rollIn"
    | "whipIn"
    | "whipInUp"
    | "calmInUp"
    | "twirlIn"        // New
    | "bounceInWave"  // New
    | "glitchIn"      // New
    | "typewriter"    // New
    | "swingDrop";    // New

interface Props extends HTMLMotionProps<"h2"> {
    children: ReactNode
    type?: AnimationType
    delay?: number
    duration?: number
}

const animationVariants = {
    // Existing Variants (unchanged)
    fadeIn: {
        container: {
            hidden: { opacity: 0 },
            visible: (i: number = 1) => ({
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: i * 0.3 },
            }),
        },
        child: {
            visible: {
                opacity: 1,
                y: [0, -10, 0],
                transition: { type: "spring", damping: 12, stiffness: 100 },
            },
            hidden: { opacity: 0, y: 10 },
        },
    },
    fadeInUp: {
        container: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        },
        child: {
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, y: 20 },
        },
    },
    popIn: {
        container: {
            hidden: { scale: 0 },
            visible: { scale: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
        },
        child: {
            visible: { opacity: 1, scale: 1.1, transition: { type: "spring", damping: 15, stiffness: 400 } },
            hidden: { opacity: 0, scale: 0 },
        },
    },
    calmInUp: {
        container: {
            hidden: {},
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.1, delayChildren: 0.2 * i } }),
        },
        child: {
            hidden: { y: "200%", transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 } },
            visible: { y: 0, transition: { ease: [0.125, 0.92, 0.69, 0.975], duration: 0.75 } },
        },
    },
    shiftInUp: {
        container: {
            hidden: {},
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.1, delayChildren: 0.2 * i } }),
        },
        child: {
            hidden: { y: "100%", transition: { ease: [0.75, 0, 0.25, 1], duration: 0.6 } },
            visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
        },
    },
    whipInUp: {
        container: {
            hidden: {},
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.1, delayChildren: 0.2 * i } }),
        },
        child: {
            hidden: { y: "200%", transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 } },
            visible: { y: 0, transition: { ease: [0.5, -0.15, 0.25, 1.05], duration: 0.75 } },
        },
    },
    rollIn: {
        container: {
            hidden: {},
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.1, delayChildren: 0.2 * i } }),
        },
        child: {
            hidden: { opacity: 0, y: "0.25em" },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.65, 0, 0.75, 1] } },
        },
    },
    whipIn: {
        container: {
            hidden: {},
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.1, delayChildren: 0.2 * i } }),
        },
        child: {
            hidden: { opacity: 0, y: "0.35em" },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.85, 0.1, 0.9, 1.2] } },
        },
    },

    // New Creative Variants
    twirlIn: {
        container: {
            hidden: { opacity: 0 },
            visible: (i: number = 1) => ({ opacity: 1, transition: { staggerChildren: 0.15, delayChildren: i * 0.2 } }),
        },
        child: {
            hidden: { opacity: 0, rotate: -180, scale: 0.5 },
            visible: {
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: { type: "spring", damping: 20, stiffness: 200, duration: 0.6 },
            },
        },
    },
    bounceInWave: {
        container: {
            hidden: {},
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.2, delayChildren: i * 0.1 } }),
        },
        child: {
            hidden: { opacity: 0, y: "-100%" },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.5,
                    duration: 0.8,
                    delay: Math.random() * 0.2, // Slight randomness for wave effect
                },
            },
        },
    },
    glitchIn: {
        container: {
            hidden: {},
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.1, delayChildren: i * 0.3 } }),
        },
        child: {
            hidden: { opacity: 0, x: -20 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.5,
                    repeat: 2,
                    repeatType: "mirror" as const,
                    ease: "easeInOut",
                    keyframes: { x: [0, 5, -5, 3, -3, 0] }, // Glitchy jitter
                },
            },
        },
    },
    typewriter: {
        container: {
            hidden: { opacity: 1 },
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.3, delayChildren: i * 0.2 } }),
        },
        child: {
            hidden: { opacity: 0, width: 0 },
            visible: {
                opacity: 1,
                width: "auto",
                transition: { duration: 0.5, ease: "linear" },
            },
        },
    },
    swingDrop: {
        container: {
            hidden: {},
            visible: (i: number = 1) => ({ transition: { staggerChildren: 0.2, delayChildren: i * 0.2 } }),
        },
        child: {
            hidden: { opacity: 0, y: "-50%", rotateX: -90 },
            visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { duration: 0.7, ease: [0.6, -0.2, 0.4, 1.2] },
            },
        },
    },
}

const TextAnimate: FC<Props> = ({
    children,
    type = "whipInUp",
    ...props
}: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: false })
    const ctrls = useAnimation()

    const { container, child } = animationVariants[type]

    useEffect(() => {
        if (isInView) {
            ctrls.start("visible")
        }
    }, [ctrls, isInView])

    const lines = typeof children === "string"
        ? children.split("\n").filter(line => line.trim() !== "")
        : React.Children.toArray(children)

    return (
        <motion.h2
            ref={ref}
            style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
            role="heading"
            variants={container}
            initial="hidden"
            animate={ctrls}
            {...props}
        >
            {lines.map((line, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: "block" }}
                >
                    {line}
                </motion.span>
            ))}
        </motion.h2>
    )
}

export { TextAnimate };


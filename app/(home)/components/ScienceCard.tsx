"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkle } from "lucide-react"


export default function ScienceCard() {
 

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-black min-h-[550px] flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#001B4D] to-[#004D1F] opacity-80"></div>

      {/* SVG Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          width="332"
          height="600"
          viewBox="0 0 532 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute  top-0 opacity-5 scale-125 "
        >
          <path
            d="M377.087 399.29L338.222 588.95C335.942 600.032 329.295 607.595 321.774 607.595H200.716C189.071 607.595 180.726 590.074 184.268 572.852L223.133 383.265C225.364 372.109 232.06 364.621 239.581 364.621H360.639C372.284 364.622 380.629 382.143 377.087 399.29Z"
            fill="white"
          />
          <path
            d="M530.411 34.8683L491.547 224.53C489.266 235.612 482.619 243.099 475.098 243.099H184.414C177.766 243.099 171.993 249.688 169.906 259.272C169.858 259.347 169.809 259.496 169.809 259.572V259.646L166.898 273.874V273.948C166.898 274.023 166.849 274.173 166.801 274.248L123.376 486.072L77.4268 710.401C75.1465 721.483 68.4993 729.045 60.93 729.045H-60.0797C-71.7733 729.045 -80.0702 711.524 -76.5768 694.302L-33.8789 486.072L12.0699 261.744C14.3501 250.663 21.0461 243.1 28.5667 243.1H161.949C168.644 243.1 174.564 236.437 176.553 226.627L181.988 200.121C181.988 200.046 182.036 199.896 182.085 199.821L219.154 18.7715C221.434 7.68981 228.082 0.202637 235.651 0.202637H513.915C525.608 0.201796 533.953 17.7224 530.411 34.8683Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 py-12 text-center">
        <div className="mb-2 flex justify-center">
          <span className="text-xs font-light uppercase flex items-center gap-2 text-white"><Sparkle size={12}/><span className="tracking-widest">THE SCIENCE</span></span>
        </div>
        <h2 className="mb-2 text-3xl font-normal  leading-tight text-white md:text-5xl">
                  Explore the science behind CellScience.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg lg:text-2xl font-light text-white/90">
                  Breakthrough mitochondrial supplements to support vitality, cellular longevity, and whole-body health.
        </p>
        <div className="flex justify-center">
          <Button className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00AEE3] to-[#03D363] px-8 py-6 font-normal text-white text-lg  group">
            <span className="flex items-center justify-center">
                Go to Science
            </span>
            <motion.div
                className="h-6 w-6 flex items-center justify-center"
                variants={{
                    hover: { rotate: -45, scale: 1.2 },
                    initial: { rotate: 0, scale: 1 }
                }}
                initial="initial"
                whileHover="hover"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <ArrowRight />
            </motion.div>
          </Button>
        </div>
      </div>
    </div>
  )
}

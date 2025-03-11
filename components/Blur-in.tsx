'use client';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface BlurInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  blur?: string;
}

export const BlurIn = ({ children, delay = 0, duration = 1.2, blur = '15px' }: BlurInProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ filter: `blur(${blur})`, opacity: 0, scale: 0.9 , zIndex:0}}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay }}
    >
      {children}
    </motion.span>
  );
};
"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface FadeInContainerProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  classname?: string;
}

export function FadeInContainer({ children, delay = 0, duration = 0.5, classname }: FadeInContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: duration, delay: delay }}
      className={classname}
    >
      {children}
    </motion.span>
  );
}

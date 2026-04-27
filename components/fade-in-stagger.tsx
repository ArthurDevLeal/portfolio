import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  Variants,
} from "framer-motion"
import React, { ReactNode } from "react"

interface MotionListProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay: number = 0.1) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
}

export const MotionList = ({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: MotionListProps) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={staggerDelay}
        className={className}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!child) return null

          return (
            <motion.div variants={itemVariants as Variants}>{child}</motion.div>
          )
        })}
      </motion.div>
    </AnimatePresence>
  )
}

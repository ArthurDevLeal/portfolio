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
  delayStart?: number
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: ({
    staggerDelay = 0.1,
    delayStart = 0,
  }: {
    staggerDelay: number
    delayStart: number
  }) => ({
    opacity: 1,
    transition: {
      delayChildren: delayStart,
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
  delayStart = 0,
  ...props
}: MotionListProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        custom={{ staggerDelay, delayStart }}
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
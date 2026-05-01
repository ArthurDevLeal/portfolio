import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function RevealLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <span ref={ref} className="block overflow-hidden pb-1">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: isInView ? "0%" : "110%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  )
}
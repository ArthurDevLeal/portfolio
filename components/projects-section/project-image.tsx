import { motion, MotionValue, useTransform } from "motion/react"

interface ProjectImageProps {
  src: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}

export function ProjectImage({
  src,
  index,
  total,
  scrollYProgress,
}: ProjectImageProps) {
  const divisor = Math.max(total - 1, 1)

  const grayscaleStart = index / divisor
  const grayscaleEnd = Math.min((index + 1) / divisor, 1)
  const isLast = index === total - 1

  const inputStart = index === 0 ? 0 : (index - 1) / divisor
  const inputEnd = index === 0 ? 1 : index / divisor

  const y = useTransform(
    scrollYProgress,
    [inputStart, inputEnd],
    index === 0 ? ["0%", "0%"] : ["105%", "0%"]
  )

  const scale = useTransform(
    scrollYProgress,
    [inputStart, inputEnd],
    index === 0 ? [1, 1] : [0.8, 1]
  )

  const filter = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [grayscaleStart, grayscaleEnd],
    isLast
      ? ["grayscale(0%)", "grayscale(0%)"]
      : ["grayscale(0%)", "grayscale(100%)"]
  )

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-2xl will-change-transform"
      style={{ y, scale, filter, zIndex: index }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover object-top"
        draggable={false}
      />
    </motion.div>
  )
}

import { motion, MotionValue, useTransform } from "motion/react"

export function ScrollHint({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.04, 0.92, 1], [0.9, 0.7, 0.4, 0])
  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex justify-center"
    >
      <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase md:text-[11px]">
        <span className="block h-px w-8 bg-border" />
        Scroll para empilhar
        <span className="block h-px w-8 bg-border" />
      </div>
    </motion.div>
  )
}

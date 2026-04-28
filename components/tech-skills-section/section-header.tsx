import { MotionValue, useMotionValueEvent } from "motion/react"
import { useState } from "react"

export function SectionHeader({
  progress,
  total,
}: {
  progress: MotionValue<number>
  total: number
}) {
  const [count, setCount] = useState(0)
  useMotionValueEvent(progress, "change", (v) => {
    setCount(Math.min(total, Math.max(0, Math.round(v * (total + 0.4)))))
  })

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-6 px-6 pt-6 md:px-12 md:pt-10">
      <div>
        <h2 className="font-sans text-3xl">Tech skills</h2>
      </div>
    </header>
  )
}
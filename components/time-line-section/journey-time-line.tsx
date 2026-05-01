"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import { MotionList } from "../fade-in-stagger"
import { JourneyHeader } from "./journey-header"
import { TimelineEntry, TimelineItem } from "./time-line-item"

type Props = {
  entries: TimelineEntry[]
}

const YEAR_SPACING = 360

export function JourneyTimeline({ entries }: Props) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let raf = 0

    const update = () => {
      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]
      if (items.length === 0) return

      const center = window.innerHeight / 2

      const positions = items.map((el) => {
        const r = el.getBoundingClientRect()
        return r.top + r.height / 2
      })

      let active = 0
      if (positions[0] >= center) {
        active = 0
      } else if (positions[positions.length - 1] <= center) {
        active = positions.length - 1
      } else {
        for (let i = 1; i < positions.length; i++) {
          if (positions[i] >= center) {
            const prev = positions[i - 1]
            const curr = positions[i]
            const t = (center - prev) / (curr - prev)
            active = i - 1 + Math.max(0, Math.min(1, t))
            break
          }
        }
      }

      setActiveIndex(active)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [entries.length])

  return (
    <section
      id="timeline"
      aria-labelledby="jornada-title"
      className="relative w-full bg-background"
    >
      <JourneyHeader />
      <div className="relative mt-24 w-full pb-32 sm:mt-32 sm:pb-40">
        <div
          className={cn(
            "relative grid w-full gap-x-8 sm:gap-x-12 lg:gap-x-24",
            "grid-cols-[100px_1fr] px-6",
            "sm:grid-cols-[160px_1fr] sm:px-10",
            "lg:grid-cols-[220px_1fr] lg:px-16"
          )}
        >
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute top-0 bottom-0 w-px bg-border",
              "left-71"
            )}
          />

          <div className="relative">
            <div className="sticky top-0 h-svh">
              <div className="absolute inset-0 overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-linear-to-b from-background via-background/80 to-transparent"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-linear-to-t from-background via-background/80 to-transparent"
                />

                <div
                  className="absolute inset-x-0 top-1/2 will-change-transform"
                  style={{
                    transform: `translateY(${-activeIndex * YEAR_SPACING}px)`,
                    transition: "transform 200ms linear",
                  }}
                >
                  {entries.map((entry, i) => {
                    const distance = Math.abs(activeIndex - i)
                    const opacity = Math.max(0, 1 - distance * 0.85)
                    const isActive = distance < 0.5
                    return (
                      <div
                        key={entry.year}
                        className="absolute inset-x-0 flex justify-end pr-4 sm:pr-6 lg:pr-8"
                        style={{
                          top: `${i * YEAR_SPACING}px`,
                          transform: "translateY(-50%)",
                        }}
                      >
                        <span
                          className={cn(
                            "font-mono font-light tracking-tighter text-foreground",
                            "text-5xl sm:text-7xl lg:text-8xl"
                          )}
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                            opacity,
                            scale: isActive ? "1" : "0.92",
                            transition:
                              "opacity 300ms ease-out, scale 300ms ease-out",
                          }}
                        >
                          {entry.year}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 right-0 z-20 size-3 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background"
              />
            </div>
          </div>

          <MotionList className="py-[40vh]">
            {entries.map((entry, i) => (
              <div
                key={entry.year}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                className={cn(
                  "py-24 sm:py-32 lg:py-40",
                  i === 0 && "pt-0 sm:pt-0 lg:pt-0",
                  i === entries.length - 1 && "pb-0 sm:pb-0 lg:pb-0"
                )}
              >
                <TimelineItem entry={entry} index={i} />
              </div>
            ))}
          </MotionList>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 z-100 h-64 bg-linear-to-b from-background/50 via-background to-background"
          />
        </div>
      </div>
    </section>
  )
}

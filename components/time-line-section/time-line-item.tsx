"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Badge } from "../ui/badge"

export type TimelineEntry = {
  year: string
  title: string
  subtitle: string
  description: string
  skills: string[]
  image: string | null
  imageAlt: string | null
}

type Props = {
  entry: TimelineEntry
  index: number
}

export function TimelineItem({ entry, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-2xl transition-all duration-1000 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
    >
      <p className="mb-3 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase sm:mb-5">
        {String(index + 1).padStart(2, "0")} / {entry.subtitle}
      </p>

      <h3 className="font-sans text-2xl leading-tight font-medium tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
        {entry.title}
      </h3>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-muted-foreground sm:mt-6">
        {entry.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2 sm:mt-8">
        {entry.skills.map((skill) => (
          <Badge key={skill} variant={"outline"}>
            {skill}
          </Badge>
        ))}
      </ul>

      {entry.image && (
        <div className="relative mt-6 aspect-4/2 w-full max-w-xs overflow-hidden rounded-md border border-border bg-muted sm:mt-10 sm:max-w-xl">
          <Image
            src={entry.image || "/placeholder.svg"}
            alt={entry.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 100vw"
            className={cn(
              "object-cover grayscale hover:grayscale-0 transition-[scale_opacity] duration-1000 ease-out",
              visible ? "scale-100 opacity-100" : "scale-105 opacity-0"
            )}
          />
        </div>
      )}
    </div>
  )
}

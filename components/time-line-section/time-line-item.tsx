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
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {String(index + 1).padStart(2, "0")} / {entry.subtitle}
      </p>

      <h3 className="font-sans leading-tight font-medium tracking-tight text-balance text-foreground text-5xl">
        {entry.title}
      </h3>

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-pretty text-muted-foreground ">
        {entry.description}
      </p>

      <ul className="mt-8 flex flex-wrap gap-2">
        {entry.skills.map((skill) => (
          <Badge key={skill} variant={"outline"}>
            {skill}
          </Badge>
        ))}
      </ul>

      {entry.image && (
        <div className="relative mt-10 aspect-4/3 w-full max-w-md overflow-hidden rounded-md border border-border bg-muted ">
          <Image
            src={entry.image || "/placeholder.svg"}
            alt={entry.imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 100vw"
            className={cn(
              "object-cover grayscale transition-all duration-1000 ease-out",
              visible ? "scale-100 opacity-100" : "scale-105 opacity-0"
            )}
            style={{ transitionDelay: visible ? "300ms" : "0ms" }}
          />
        </div>
      )}
    </div>
  )
}

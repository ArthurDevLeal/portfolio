"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

type Dot = {
  ox: number
  oy: number
  x: number
  y: number
  vx: number
  vy: number
}

type DotGridBackgroundProps = {
  /** Spacing between dots in px */
  gap?: number
  /** Base radius of each dot in px */
  dotSize?: number
  /** Radius (px) of cursor influence */
  proximity?: number
  /** How strongly dots are pushed away from the cursor */
  repulse?: number
  /** Spring-back strength toward origin (0..1) */
  spring?: number
  /** Damping (0..1). Higher = more friction */
  damping?: number
  /** Optional className for the wrapper */
  className?: string
}

/**
 * ReactBits-style interactive Dot Grid background.
 * Pure canvas, dependency-free. Dots magnetically repulse from the cursor
 * and spring back to their origin with smooth physics.
 */
export function DotGridBackground({
  gap = 28,
  dotSize = 1.6,
  proximity = 140,
  repulse = 38,
  spring = 0.08,
  damping = 0.82,
  className,
}: DotGridBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const dotsRef = useRef<Dot[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const buildDots = () => {
      const dots: Dot[] = []
      const cols = Math.floor(width / gap)
      const rows = Math.floor(height / gap)
      const offsetX = (width - cols * gap) / 2 + gap / 2
      const offsetY = (height - rows * gap) / 2 + gap / 2
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = offsetX + i * gap
          const y = offsetY + j * gap
          dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 })
        }
      }
      dotsRef.current = dots
    }

    const resize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildDots()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const m = mouseRef.current
      const prox2 = proximity * proximity
      const dots = dotsRef.current

      for (let k = 0; k < dots.length; k++) {
        const d = dots[k]

        // physics: repulse from mouse, spring to origin
        if (m) {
          const dx = d.x - m.x
          const dy = d.y - m.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < prox2 && dist2 > 0.0001) {
            const dist = Math.sqrt(dist2)
            const force = (1 - dist / proximity) * repulse
            d.vx += (dx / dist) * force * 0.06
            d.vy += (dy / dist) * force * 0.06
          }
        }

        // spring back to origin
        d.vx += (d.ox - d.x) * spring
        d.vy += (d.oy - d.y) * spring
        // damping
        d.vx *= damping
        d.vy *= damping
        // integrate
        d.x += d.vx
        d.y += d.vy

        // visuals — closer to cursor = larger + darker
        let size = dotSize
        let alpha = 0.18
        if (m) {
          const dx = d.ox - m.x
          const dy = d.oy - m.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < prox2) {
            const f = 1 - Math.sqrt(dist2) / proximity
            size = dotSize + f * 3.2
            alpha = 0.18 + f * 0.78
          }
        }

        ctx.beginPath()
        ctx.arc(d.x, d.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(10, 10, 10, ${alpha})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      // Only track when pointer is within the container bounds (with a buffer
      // equal to the proximity so dots near edges still react).
      if (
        x >= -proximity &&
        y >= -proximity &&
        x <= rect.width + proximity &&
        y <= rect.height + proximity
      ) {
        mouseRef.current = { x, y }
      } else {
        mouseRef.current = null
      }
    }
    const onPointerOut = () => {
      mouseRef.current = null
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(container)
    window.addEventListener("pointermove", onPointerMove, { passive: true })
    window.addEventListener("blur", onPointerOut)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("blur", onPointerOut)
    }
  }, [gap, dotSize, proximity, repulse, spring, damping])

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}

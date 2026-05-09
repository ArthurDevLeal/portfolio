"use client"

import { categoryMeta, type TechSkill } from "@/data/tech-skills"
import { motion, useTransform, type MotionValue } from "motion/react"

const CARD_W = 320
const CARD_H = 420
const CARD_W_MOBILE = 240
const CARD_H_MOBILE = 320

export function SkillCard({
  skill,
  index,
  total,
  progress,
  viewport,
  hovered,
  anyHovered,
  onHoverChange,
  onSelect,
}: {
  skill: TechSkill
  index: number
  total: number
  progress: MotionValue<number>
  viewport: { w: number; h: number; mobile: boolean }
  hovered: boolean
  anyHovered: boolean
  onHoverChange: (h: boolean) => void
  onSelect: () => void
}) {
  const meta = categoryMeta[skill.category]

  // Cada card tem uma janela de animação proporcional dentro do range total
  // Range usado: 0.0 a 0.9 (deixa 10% de "respiro" no final para o último card pousar)
  const animRangeStart = 0.0
  const animRangeEnd = 0.9
  const totalRange = animRangeEnd - animRangeStart
  const slotSize = totalRange / total

  // Cada card começa a animar em seu slot
  const start = animRangeStart + index * slotSize
  const end = start + slotSize * 1.3 // overlap com o próximo card

  const cardW = viewport.mobile ? CARD_W_MOBILE : CARD_W
  const cardH = viewport.mobile ? CARD_H_MOBILE : CARD_H
  const baseLeft = viewport.mobile ? 16 : 32
  const xJitter = ((index % 3) - 1) * 5
  const yJitter = ((index % 4) - 1) * 5
  const rotJitter = -3 + ((index % 5) - 2) * 1.6

  const offX = viewport.w > 0 ? viewport.w + 80 : 1500
  const landedX = baseLeft + xJitter

  // useTransform clampa por padrão, então quando progress > end, os valores ficam travados no final
  const x = useTransform(progress, [start, end], [offX, landedX])
  const y = useTransform(progress, [start, end], [-50 + index * 3, yJitter])
  const rot = useTransform(progress, [start, end], [14, rotJitter])
  const scale = useTransform(progress, [start, end], [0.92, 1])

  // Opacidade: aparece rapidamente quando o card começa a entrar e fica em 1
  // Fica fully opaque quando progress atinge start + 30% do slot
  const opacityFull = start + slotSize * 0.3
  const enterOpacity = useTransform(progress, [start, opacityFull], [0, 1])

  const topPx = `calc(50% - ${cardH / 2}px)`

  return (
    <motion.div
      style={{
        x,
        y,
        rotate: rot,
        scale,
        opacity: enterOpacity,
        zIndex: hovered ? 200 : 10 + index,
        width: cardW,
        height: cardH,
        position: "absolute",
        top: topPx,
        left: 0,
        transformOrigin: "60% 60%",
        willChange: "transform",
      }}
    >
      <motion.button
        type="button"
        onHoverStart={() => !viewport.mobile && onHoverChange(true)}
        onHoverEnd={() => !viewport.mobile && onHoverChange(false)}
        onFocus={() => !viewport.mobile && onHoverChange(true)}
        onBlur={() => !viewport.mobile && onHoverChange(false)}
        onClick={onSelect}
        initial={false}
        animate={hovered ? { y: -12, scale: 1.04 } : { y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.6 }}
        aria-label={`${skill.name} — ${meta.label}. Toque para ver detalhes.`}
        className="block h-full w-full rounded-2xl border border-border bg-card text-left text-card-foreground shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45),0_8px_16px_-8px_rgba(0,0,0,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7),0_8px_16px_-8px_rgba(0,0,0,0.4)]"
        style={{ willChange: "transform", transformOrigin: "50% 100%" }}
      >
        <div
          className="h-1.5 w-full rounded-t-2xl"
          style={{ background: meta.var }}
        />

        <div className="flex h-[calc(100%-6px)] flex-col p-5 md:p-6">
          <div className="flex items-start justify-between">
            <span
              className="font-mono text-[10px] tracking-[0.25em] uppercase"
              style={{ color: meta.var }}
            >
              {meta.label}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <div
            className="mt-auto -mb-2 self-end font-mono text-[6rem] leading-none opacity-[0.06] select-none md:text-[7rem]"
            aria-hidden
          >
            {skill.glyph}
          </div>

          <div className="mt-auto">
            <h3 className="font-sans text-[40px] leading-[0.95] font-semibold tracking-tight text-balance md:text-[52px]">
              {skill.name}
            </h3>
            <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-pretty text-muted-foreground md:text-sm">
              {skill.short}
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-border pt-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              <span className="tabular-nums">
                {skill.years} {skill.years === 1 ? "ano" : "anos"}
              </span>
            </div>
          </div>
        </div>

        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: anyHovered && !hovered ? 0.5 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 rounded-2xl bg-background"
        />
      </motion.button>
    </motion.div>
  )
}

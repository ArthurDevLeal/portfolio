"use client"

import { categoryMeta, type TechSkill } from "@/data/tech-skills"
import { AnimatePresence, motion } from "motion/react"

export function InfoPanel({ skill }: { skill: TechSkill | null }) {
  return (
    <aside
      className="pointer-events-none absolute top-1/2 right-12 z-99999 hidden w-95 max-w-[34vw] -translate-y-1/2 flex-col lg:flex"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        {skill ? (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span
                className="block h-0.5 w-12"
                style={{ background: categoryMeta[skill.category].var }}
              />
              <span
                className="font-mono text-[10px] tracking-[0.3em] uppercase"
                style={{ color: categoryMeta[skill.category].var }}
              >
                {categoryMeta[skill.category].label}
              </span>
            </div>
            <h3 className="font-sans text-4xl font-semibold tracking-tight text-balance">
              {skill.name}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-pretty text-foreground/80">
              {skill.description}
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-x-6 gap-y-1 border-t border-border pt-5 font-mono text-xs">
              <dt className="tracking-[0.2em] text-muted-foreground uppercase">
                Tempo
              </dt>
              <dd className="mt-1 text-base text-foreground tabular-nums">
                {skill.years} {skill.years === 1 ? "ano" : "anos"}
              </dd>
            </dl>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              Detalhes
            </p>
            <p className="text-base leading-relaxed text-pretty text-foreground/70">
              Passe o mouse sobre um card à esquerda para conhecer a tech em
              profundidade — anos de experiência, nível e o que eu construo com
              ela.
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              <span>Hover</span>
              <span className="block h-px w-12 bg-border" />
              <span>Reveal</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}

"use client"

import { categoryMeta, type TechSkill } from "@/data/tech-skills"
import { AnimatePresence, motion } from "motion/react"
import { useEffect } from "react"

export function MobileSkillDrawer({
  skill,
  onClose,
}: {
  skill: TechSkill | null
  onClose: () => void
}) {
  useEffect(() => {
    if (skill) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [skill])

  useEffect(() => {
    if (!skill) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [skill, onClose])

  return (
    <AnimatePresence>
      {skill ? (
        <motion.div
          key="drawer-root"
          className="fixed inset-0 z-9999 lg:hidden"
          initial={{ pointerEvents: "none" }}
          animate={{ pointerEvents: "auto" }}
          exit={{ pointerEvents: "none" }}
        >
          <motion.button
            type="button"
            aria-label="Fechar detalhes"
            onClick={onClose}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-background/60"
            style={{ WebkitBackdropFilter: "blur(12px)" }}
          />

          <motion.div
            key="drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`Detalhes de ${skill.name}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 34,
              mass: 0.8,
            }}
            className="absolute right-0 bottom-0 left-0 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-border bg-card text-card-foreground shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.5)]"
          >
            <div className="sticky top-0 z-10 flex justify-center bg-card pt-3 pb-2">
              <span
                className="h-1.5 w-12 rounded-full bg-muted-foreground/30"
                aria-hidden
              />
            </div>

            <div
              className="h-1 w-full"
              style={{ background: categoryMeta[skill.category].var }}
              aria-hidden
            />

            <div className="px-6 pt-6 pb-10">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="block h-0.5 w-10"
                  style={{ background: categoryMeta[skill.category].var }}
                />
                <span
                  className="font-mono text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: categoryMeta[skill.category].var }}
                >
                  {categoryMeta[skill.category].label}
                </span>
              </div>

              <h3 className="font-sans text-4xl leading-[1.05] font-semibold tracking-tight text-balance">
                {skill.name}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground">
                {skill.description}
              </p>

              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-border pt-5 font-mono text-xs">
                <div>
                  <dt className="tracking-[0.2em] text-muted-foreground uppercase">
                    Tempo
                  </dt>
                  <dd className="mt-1 text-base text-foreground tabular-nums">
                    {skill.years} {skill.years === 1 ? "ano" : "anos"}
                  </dd>
                </div>
                <div>
                  <dt className="tracking-[0.2em] text-muted-foreground uppercase">
                    Categoria
                  </dt>
                  <dd className="mt-1 text-base text-foreground">
                    {categoryMeta[skill.category].label}
                  </dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={onClose}
                className="mt-8 w-full rounded-xl border border-border bg-background py-3 font-mono text-xs tracking-[0.25em] text-foreground uppercase transition-colors hover:bg-muted"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

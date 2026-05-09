"use client"

import { techSkills } from "@/data/tech-skills"
import { useMotionValue } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
import { TechSkillsSectionIndex } from "."

export function TechSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollYProgress = useMotionValue(0)

  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [viewport, setViewport] = useState({ w: 0, h: 0, mobile: false })

  useEffect(() => {
    const update = () =>
      setViewport({
        w: window.innerWidth,
        h: window.innerHeight,
        mobile: window.innerWidth < 768,
      })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  useEffect(() => {
    const calculateProgress = () => {
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      const totalScrollDistance = rect.height - viewportHeight

      if (totalScrollDistance <= 0) {
        scrollYProgress.set(0)
        return
      }

      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance))

      scrollYProgress.set(progress)
    }

    calculateProgress()
    window.addEventListener("scroll", calculateProgress, { passive: true })
    window.addEventListener("resize", calculateProgress)

    const timeout = setTimeout(calculateProgress, 100)

    return () => {
      window.removeEventListener("scroll", calculateProgress)
      window.removeEventListener("resize", calculateProgress)
      clearTimeout(timeout)
    }
  }, [scrollYProgress])

  const total = techSkills.length
  const sectionHeight = `${100 + total * 50}vh`

  const hoveredSkill = useMemo(
    () => techSkills.find((s) => s.id === hoveredId) ?? null,
    [hoveredId]
  )

  const selectedSkill = useMemo(
    () => techSkills.find((s) => s.id === selectedId) ?? null,
    [selectedId]
  )

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative bg-background text-foreground"
      style={{ height: sectionHeight }}
      aria-label="Tech skills"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <TechSkillsSectionIndex.Header />
        <div className="absolute inset-0">
          {techSkills.map((skill, i) => (
            <TechSkillsSectionIndex.Card
              key={skill.id}
              skill={skill}
              index={i}
              total={total}
              progress={scrollYProgress}
              viewport={viewport}
              hovered={hoveredId === skill.id}
              anyHovered={hoveredId !== null}
              onHoverChange={(h) => setHoveredId(h ? skill.id : null)}
              onSelect={() => {
                if (viewport.mobile) {
                  setSelectedId(skill.id)
                }
              }}
            />
          ))}
        </div>

        <TechSkillsSectionIndex.InfoPanel skill={hoveredSkill} />
        <TechSkillsSectionIndex.ScrollHint progress={scrollYProgress} />
      </div>

      <TechSkillsSectionIndex.MobileDrawer
        skill={selectedSkill}
        onClose={() => setSelectedId(null)}
      />
    </section>
  )
}

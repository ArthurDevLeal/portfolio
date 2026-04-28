"use client"

import { techSkills } from "@/data/tech-skills"
import { useScroll } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
import { InfoPanel } from "./info-panel"
import { ScrollHint } from "./scroll-hint"
import { SectionHeader } from "./section-header"
import { SkillCard } from "./skill-card"

export function TechSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const [hoveredId, setHoveredId] = useState<string | null>(null)
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

  const total = techSkills.length
  const sectionHeight = `${(total + 1) * 80}svh`

  const hoveredSkill = useMemo(
    () => techSkills.find((s) => s.id === hoveredId) ?? null,
    [hoveredId]
  )

  return (
    <section
      ref={sectionRef}
      className="relative bg-background text-foreground"
      style={{ height: sectionHeight }}
      aria-label="Tech skills"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <SectionHeader progress={scrollYProgress} total={total} />

        <div className="absolute inset-0">
          {techSkills.map((skill, i) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              index={i}
              total={total}
              progress={scrollYProgress}
              viewport={viewport}
              hovered={hoveredId === skill.id}
              anyHovered={hoveredId !== null}
              onHoverChange={(h) => setHoveredId(h ? skill.id : null)}
            />
          ))}
        </div>

        <InfoPanel skill={hoveredSkill} />
        <ScrollHint progress={scrollYProgress} />
      </div>
    </section>
  )
}

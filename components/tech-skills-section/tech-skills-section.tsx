"use client"

import { techSkills } from "@/data/tech-skills"
import { useMotionValue } from "motion/react"
import { useEffect, useMemo, useRef, useState } from "react"
import { InfoPanel } from "./info-panel"
import { MobileSkillDrawer } from "./mobile-skill-drawer"
import { ScrollHint } from "./scroll-hint"
import { SectionHeader } from "./section-header"
import { SkillCard } from "./skill-card"

export function TechSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Em vez de usar useScroll do motion (que tem problemas quando há conteúdo grande
  // abaixo da seção), calculamos o progresso manualmente baseado na posição
  // do elemento na viewport. Isso é determinístico e independente do contexto da página.
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

  // Listener manual de scroll: calcula o progresso baseado em onde a seção está
  // na viewport. Funciona independentemente de quanto conteúdo existe acima ou abaixo.
  useEffect(() => {
    const calculateProgress = () => {
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // A seção tem um sticky de 100vh. O scroll "útil" é (sectionHeight - viewportHeight).
      // progress = 0 quando o topo da seção atinge o topo da viewport (rect.top === 0)
      // progress = 1 quando o fundo da seção atinge o fundo da viewport
      //              (rect.bottom === viewportHeight, ou seja, rect.top === viewportHeight - rect.height)
      const totalScrollDistance = rect.height - viewportHeight

      if (totalScrollDistance <= 0) {
        scrollYProgress.set(0)
        return
      }

      // rect.top vai de 0 (no início) até -totalScrollDistance (no final)
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance))

      scrollYProgress.set(progress)
    }

    // Recalcula em scroll, resize e quando a página carrega
    calculateProgress()
    window.addEventListener("scroll", calculateProgress, { passive: true })
    window.addEventListener("resize", calculateProgress)

    // Recalcula após um delay para pegar mudanças de layout (imagens carregando, etc)
    const timeout = setTimeout(calculateProgress, 100)

    return () => {
      window.removeEventListener("scroll", calculateProgress)
      window.removeEventListener("resize", calculateProgress)
      clearTimeout(timeout)
    }
  }, [scrollYProgress])

  const total = techSkills.length
  // Altura: 100vh para o sticky + scroll suficiente para todos os cards animarem
  // Cada card precisa de aproximadamente 50vh de scroll para uma animação suave
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
        <SectionHeader />
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
              onSelect={() => {
                if (viewport.mobile) {
                  setSelectedId(skill.id)
                }
              }}
            />
          ))}
        </div>

        <InfoPanel skill={hoveredSkill} />
        <ScrollHint progress={scrollYProgress} />
      </div>

      <MobileSkillDrawer
        skill={selectedSkill}
        onClose={() => setSelectedId(null)}
      />
    </section>
  )
}

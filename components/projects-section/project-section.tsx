"use client"

import { Project } from "@/types/project"
import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import { MotionList } from "../fade-in-stagger"
import { AnimatedTextGenerate } from "../ui/animated-textgenerate"
import { Badge } from "../ui/badge"
import { ProjectImage } from "./project-image"
import { ProjectLinkButton } from "./project-link-button"

interface ProjectSectionProps {
  project: Project
  eyebrow?: string
}

// Mobile: imagens empilhadas com fade-in simples
function MobileImages({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col gap-3">
      {images.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden rounded-xl"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            draggable={false}
            className="h-52 w-full object-cover object-top sm:h-64"
          />
        </motion.div>
      ))}
    </div>
  )
}

export function ProjectSection({ project, eyebrow }: ProjectSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const {
    images,
    skillsGroup,
    title,
    description,
    textSpeed = 0.1,
    github,
    url,
  } = project
  const textDelay = description.split(" ").length * textSpeed

  return (
    <>
      {/* ── Mobile layout (< md) ───────────────────────────────────────── */}
      <div className="block px-4 py-12 md:hidden">
        <div className="flex flex-col gap-8">
          {/* Content */}
          <div className="flex flex-col gap-4">
            {eyebrow && (
              <p className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                {eyebrow}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 className="font-sans text-3xl leading-[1.1] font-medium tracking-tight text-balance text-foreground">
                {title}
              </h2>
              <ProjectLinkButton github={github} url={url} />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-wrap items-start gap-3">
              {skillsGroup.map((group) => (
                <div
                  key={group.category}
                  className="relative w-fit gap-1.5 rounded-md border px-2 py-2"
                >
                  <p className="absolute -top-2 -left-1 bg-background px-1 font-mono text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    {group.category}
                  </p>
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      shiny={skill.isShiny}
                      variant={skill.isShiny ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Images stacked */}
          <MobileImages images={images} />
        </div>
      </div>

      {/* ── Desktop layout (≥ md) — sticky scroll ─────────────────────── */}
      <div
        ref={containerRef}
        style={{ minHeight: `${images.length * 100}vh` }}
        className="relative hidden md:block"
      >
        <div className="sticky top-0 grid h-screen grid-cols-2 gap-8 px-10 pt-20 pb-8 lg:gap-12 lg:px-16 lg:pt-24">
          {/* Content Column */}
          <div className="flex flex-col">
            <header>
              {eyebrow && (
                <p className="mb-5 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
                  {eyebrow}
                </p>
              )}
              <MotionList className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <h2 className="max-w-3xl font-sans text-5xl leading-[1.05] font-medium tracking-tight text-balance text-foreground lg:text-6xl">
                  {title}
                </h2>
                <ProjectLinkButton github={github} url={url} />
              </MotionList>
              <div className="mt-6 max-w-xl">
                <AnimatedTextGenerate
                  text={description}
                  className="text-base leading-relaxed font-normal text-muted-foreground"
                  textClassName="text-base leading-relaxed text-muted-foreground font-normal"
                  blurEffect
                  speed={textSpeed}
                />
              </div>
            </header>

            <MotionList
              delayStart={textDelay}
              className="mt-10 grid items-center gap-6"
            >
              {skillsGroup.map((group) => (
                <div
                  key={group.category}
                  className="relative w-fit gap-2 rounded-md border px-2 py-2"
                >
                  <p className="absolute -top-2 -left-1 bg-background px-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    {group.category}
                  </p>
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      shiny={skill.isShiny}
                      variant={skill.isShiny ? "default" : "secondary"}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              ))}
            </MotionList>
          </div>

          {/* Image Column — animated scroll */}
          <div className="relative h-full">
            {images.map((src, i) => (
              <ProjectImage
                key={i}
                src={src}
                index={i}
                total={images.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

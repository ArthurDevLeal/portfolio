"use client"

import { Project } from "@/types/project"
import { useScroll } from "motion/react"
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
    <div
      ref={containerRef}
      style={{ minHeight: `${images.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 grid h-screen grid-cols-1 gap-8 px-6 pt-16 pb-8 sm:px-10 sm:pt-20 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:pt-24">
        <div className="flex flex-col">
          <header>
            {eyebrow ? (
              <p className="mb-5 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
                {eyebrow}
              </p>
            ) : null}

            <MotionList className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <h2 className="max-w-3xl font-sans text-6xl leading-[1.05] font-medium tracking-tight text-balance text-foreground">
                {title}
              </h2>
              <ProjectLinkButton github={github} url={url} />
            </MotionList>

            <div className="mt-6 max-w-xl ">
              <AnimatedTextGenerate
                text={description}
                className="text-base leading-relaxed text-muted-foreground font-normal"
                textClassName=" text-base leading-relaxed text-muted-foreground font-normal"
                blurEffect
                speed={textSpeed}
              />
            </div>
          </header>

          <MotionList
            delayStart={textDelay}
            className="mt-10 grid   items-center gap-6"
          >
            {skillsGroup.flatMap((group) => (
              <div
                className="relative gap-2 rounded-md border px-2 py-2 w-fit"
                key={group.category}
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

        <div className="relative hidden h-full lg:block">
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
  )
}

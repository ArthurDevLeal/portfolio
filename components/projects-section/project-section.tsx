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
}

export function ProjectSection({ project }: ProjectSectionProps) {
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
      <div className="sticky top-0 grid h-screen grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center">
          <div className="relative h-10 overflow-visible">
            <MotionList className="flex items-center gap-2">
              <h2 className="font-heading text-3xl">{title}</h2>
              <ProjectLinkButton github={github} url={url} />
            </MotionList>
          </div>

          <AnimatedTextGenerate
            text={description}
            className="text-sm font-normal text-muted-foreground"
            textClassName="text-sm font-normal text-muted-foreground"
            blurEffect
            speed={textSpeed}
          />

          <MotionList
            delayStart={textDelay}
            className="mt-6 flex flex-wrap items-center gap-6"
          >
            {skillsGroup.flatMap((group) => (
              <div
                className="relative flex flex-wrap gap-2 rounded-md border px-2 py-2"
                key={group.category}
              >
                <p className="absolute -top-2 -left-1 bg-background text-xs text-primary">
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

        <div className="relative h-full py-8">
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

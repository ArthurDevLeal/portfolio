import { Project } from "@/types/project"
import { ProjectSection } from "./project-section"

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  )
}

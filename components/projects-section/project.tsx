import { Project } from "@/types/project"
import { ProjectSection } from "./project-section"
import { ProjectsSection } from "."

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <div id="projects">
      {projects.map((project) => (
        <ProjectsSection.Section key={project.id} project={project} />
      ))}
    </div>
  )
}

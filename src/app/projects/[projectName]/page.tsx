"use client";
import { FadeInContainer } from "@/app/components/fade-in-container";
import projectTexts from "@/app/projects/data/project-texts.json";
import { useParams } from "next/navigation";
import { Project } from "../data/type";
import { ProjectIndex } from "./components";
export default function ProjectPage() {
  const { projectName } = useParams();
  const Project: Project | undefined =
    projectTexts.projects[projectName as keyof typeof projectTexts.projects];

  return (
    <div className="w-full flex justify-center pb-[120px] py-[40px] mx-auto md:my-[50px] px-8 md:pb-0 md:max-w-4xl">
      <div className="flex flex-col grow">
        <FadeInContainer>
          <ProjectIndex.Title mainText={Project.title} description={Project.description} />
        </FadeInContainer>
        <FadeInContainer delay={0.2}>
          <p className="text-xs opacity-60 my-4">{Project.date}</p>
        </FadeInContainer>

        <FadeInContainer delay={0.4}>
          <div className="w-full">
            <img src={Project.src} className="w-full h-[400px] object-cover rounded-lg" loading="lazy" />
          </div>
        </FadeInContainer>
        <FadeInContainer delay={0.5}>
          <ProjectIndex.LinkButtons
            href={Project.links.demo}
            repoHref={Project.links.repo}
            figmaLink={Project.links.figmaLink}
          />
        </FadeInContainer>
        <FadeInContainer delay={0.6}>
          <p className="mt-8 mb-2 font-semibold">
            Ideia de Projeto: <span className="opacity-60 font-normal text-sm">{Project.context}</span>
          </p>
        </FadeInContainer>

        <FadeInContainer delay={0.8}>
          <ProjectIndex.SectionInfo texts={Project.challenges} title="Desafios" position={1} />
        </FadeInContainer>
        <FadeInContainer delay={0.9}>
          <ProjectIndex.SectionInfo texts={Project.solution.features} title="Features" position={2} />
        </FadeInContainer>
        <FadeInContainer delay={1}>
          <ProjectIndex.SectionInfo texts={Project.solution.stack} title="Stack" position={3} />
        </FadeInContainer>

        <FadeInContainer delay={1.2}>
          <p className="mt-4 font-semibold">
            Resultado: <span className="opacity-60 font-normal text-sm">{Project.result}</span>
          </p>
        </FadeInContainer>
      </div>
    </div>
  );
}

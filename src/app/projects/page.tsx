"use client";
import { BsStack } from "react-icons/bs";
import SeeMoreRoot from "../components/see-more/see-more-root";
import Title from "../components/title";
import ProjectItem from "./components/project-item";

export default function Projects() {
  return (
    <div className="w-full flex justify-center pb-[120px] py-[40px] mx-auto md:my-[50px] px-8 md:pb-0 md:max-w-4xl">
      <div className="flex flex-col">
        <Title title="Projetos" description="Lista dos meus melhores projetos" />

        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center mt-6">
          <ProjectItem
            delay={0.4}
            name="Coroatá Conecta"
            description="Coroatá Conecta é um projeto de design criado para proporcionar uma experiência moderna e acessível aos usuários."
            src="./CoroataMock.png"
            href="/projects/coroata-conecta"
            stack={["Figma", "Responsive"]}
          />

          <ProjectItem
            delay={0.6}
            name="Study Hub"
            description="Study Hub é um design de aplicativo moderno e intuitivo, criado para transformar a experiência de aprendizado. "
            src="./StudyHubMock.png"
            href="/projects/studyhub"
            stack={["Figma", "Responsive"]}
          />
        </div>

        <SeeMoreRoot
          name="Stack"
          description="Clique para ver minha Stack de desenvolvimento."
          href="/stack"
          Icon={BsStack}
          buttonText="Ver Stack"
        />
      </div>
    </div>
  );
}

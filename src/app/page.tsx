"use client";
import { HiPencil } from "react-icons/hi";
import { FadeInContainer } from "./components/fade-in-container";
import { MainPage } from "./components/main-page";
import SeeMoreRoot from "./components/see-more/see-more-root";

export default function Page() {
  return (
    <main className="w-full flex justify-center pb-[120px] py-[40px] mx-auto md:my-[50px] px-8 md:pb-0 md:max-w-4xl">
      <div className="flex flex-col">
        <MainPage.Title />

        <FadeInContainer delay={0.3}>
          <MainPage.TitleButtons />
        </FadeInContainer>

        <section className="flex flex-col gap-2 mt-6">
          <FadeInContainer delay={0.5}>
            <p className="text-lg font-semibold">lançamentos</p>
          </FadeInContainer>
          <MainPage.NewDrops.Root>
            <MainPage.NewDrops.Item
              delay={0.4}
              name="Lumina"
              description="Lumina é uma plataforma inteligente de gestão financeira pessoal, desenvolvida para simplificar o controle de receitas, despesas e metas financeiras."
              src="./lumina.png"
              href="/projects/lumina"
            />

            <MainPage.NewDrops.Item
              delay={0.7}
              name="Coroatá Conecta"
              description="Coroatá Conecta é um projeto de design criado para proporcionar uma experiência moderna e acessível aos usuários."
              src="./CoroataMock.png"
              href="/projects/coroata-conecta"
            />
          </MainPage.NewDrops.Root>

          <SeeMoreRoot
            name="Projetos"
            description="Clique para ver meus projetos."
            href="/projects"
            Icon={HiPencil}
            buttonText="Ver projetos"
          />
        </section>
      </div>
    </main>
  );
}

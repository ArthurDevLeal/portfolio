import { FadeInContainer } from "../components/fade-in-container";
import Title from "../components/title";
import AboutMeItem from "./components/about-me-item";

export default function About() {
  return (
    <main className="w-full flex justify-center pb-[120px] py-[40px] mx-auto md:my-[50px] px-8 md:pb-0 md:max-w-4xl">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="max-w-[600px]">
            <Title
              title="Sobre mim"
              description="Com mais de 2 anos de experiência em front-end, focado em JavaScript, React e suas bibliotecas, trabalhei em projetos variados, sempre priorizando a experiência do usuário e o desempenho. Recentemente, comecei a explorar o desenvolvimento backend, com experiência em Node.js e bancos de dados, expandindo meus conhecimentos em full-stack."
            />
          </div>
          <FadeInContainer delay={0.3}>
            <div>
              <img src="./me.jpg" className="h-full w-full rounded-lg" alt="My photo" loading="lazy" />
            </div>
          </FadeInContainer>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <AboutMeItem
            delay={0.6}
            title="Skills"
            description="Tenho experiência com React, Next.js, Tailwind CSS, Tauri, Figma, Node.js, Express e Prisma. Essas tecnologias me permitem criar soluções modernas, escaláveis e bem estruturadas, tanto para o front-end quanto para o back-end, além de garantir uma excelente experiência de usuário."
          />
          <AboutMeItem
            delay={0.7}
            title="Hobbies"
            description="Além de programar, sou apaixonado por música, caminhar, treinar e jogar. Essas atividades me ajudam a relaxar e a me manter motivado, além de me proporcionar momentos de diversão e aprendizado fora do ambiente de desenvolvimento."
          />
          <AboutMeItem
            delay={0.8}
            title="Idiomas"
            description="Sou fluente em português e tenho um nível intermediário em inglês, o que me permite me comunicar e aprender em um ambiente global, mesmo que ainda esteja aprimorando minha fluência na língua."
          />
        </section>
      </div>
    </main>
  );
}

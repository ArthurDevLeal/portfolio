import { IconType } from "react-icons";
import { DiVisualstudio } from "react-icons/di";
import { FaFigma, FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCanva,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export interface TechItem {
  title: string;
  Icon: IconType;
  description: string;
}

export const frontEndData: TechItem[] = [
  {
    title: "Next.js",
    Icon: SiNextdotjs,
    description: "Framework React que permite criar aplicações com o poder dos componentes React",
  },
  {
    title: "React",
    Icon: FaReact,
    description: "Biblioteca JavaScript para construir interfaces de usuário interativas e reativas",
  },
  {
    title: "Tailwind CSS",
    Icon: SiTailwindcss,
    description: "Framework CSS utility-first para estilização rápida e responsiva",
  },
  {
    title: "TypeScript",
    Icon: SiTypescript,
    description: "Superset do JavaScript que adiciona tipagem estática e recursos avançados",
  },
  {
    title: "JavaScript",
    Icon: SiJavascript,
    description: "Linguagem de programação versátil para desenvolvimento web frontend e backend",
  },
  {
    title: "HTML5",
    Icon: SiHtml5,
    description: "Linguagem de marcação para estruturar e apresentar conteúdo na web",
  },
  {
    title: "CSS3",
    Icon: SiCss3,
    description: "Linguagem de estilização para design e layout de páginas web",
  },
  {
    title: "Tauri",
    Icon: SiTauri,
    description: "Framework para criar aplicações desktop multiplataforma com tecnologias web",
  },
];

export const backEndData: TechItem[] = [
  {
    title: "Node.js",
    Icon: FaNodeJs,
    description: "Ambiente de execução JavaScript do lado do servidor",
  },
  {
    title: "Express",
    Icon: SiExpress,
    description: "Framework web rápido e minimalista para Node.js",
  },
  {
    title: "Prisma",
    Icon: SiPrisma,
    description: "ORM moderno para Node.js e TypeScript com foco em type safety",
  },
  {
    title: "NestJS",
    Icon: SiNestjs,
    description: "Framework Node.js progressivo para construir aplicações escaláveis",
  },
];

export const designData: TechItem[] = [
  {
    title: "Figma",
    Icon: FaFigma,
    description: "Ferramenta de design de interface colaborativa baseada na web",
  },
  {
    title: "Framer",
    Icon: SiFramer,
    description: "Plataforma para criar protótipos interativos e animações",
  },
  {
    title: "Canva",
    Icon: SiCanva,
    description: "Plataforma de design gráfico para criar conteúdo visual",
  },
];

export const toolsData: TechItem[] = [
  {
    title: "VS Code",
    Icon: DiVisualstudio,
    description: "Editor de código-fonte leve e extensível da Microsoft",
  },
  {
    title: "Postman",
    Icon: SiPostman,
    description: "Plataforma para testar e documentar APIs",
  },
  {
    title: "Insomnia",
    Icon: SiInsomnia,
    description: "Cliente REST para testar e depurar APIs",
  },
  {
    title: "Git",
    Icon: FaGitAlt,
    description: "Sistema de controle de versão distribuído",
  },
  {
    title: "GitHub",
    Icon: FaGithub,
    description: "Plataforma de hospedagem de código e colaboração",
  },
];

export const mobileData: TechItem[] = [
  {
    title: "Expo",
    Icon: SiExpo,
    description: "Framework e plataforma para desenvolvimento React Native simplificado",
  },
  {
    title: "React Native",
    Icon: TbBrandReactNative,
    description: "Framework para desenvolvimento de aplicativos móveis multiplataforma",
  },
  {
    title: "NativeWind",
    Icon: SiTailwindcss,
    description: "Tailwind CSS para React Native, permitindo estilização consistente",
  },
];

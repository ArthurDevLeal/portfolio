export type SkillCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "devops"
  | "libsUi"
  | "design"

export type TechSkill = {
  id: string
  name: string
  category: SkillCategory
  short: string
  description: string
  years: number
  glyph: string
}

export const categoryMeta: Record<
  SkillCategory,
  { label: string; tone: string; var: string }
> = {
  frontend: { label: "Frontend", tone: "azul", var: "var(--skill-fe)" },
  backend: { label: "Backend", tone: "laranja", var: "var(--skill-be)" },
  mobile: { label: "Mobile", tone: "verde", var: "var(--skill-mb)" },
  database: { label: "Database", tone: "âmbar", var: "var(--skill-db)" },
  devops: { label: "DevOps", tone: "violeta", var: "var(--skill-ops)" },
  design: { label: "Design", tone: "roxo", var: "var(--skill-dgn)" },
  libsUi: { label: "Libs/UI", tone: "rosa", var: "var(--skill-lb)" },
}
export const techSkills: TechSkill[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    short: "Fullstack React framework",
    description:
      "App Router, RSC, streaming, edge runtime e ISR. Construo aplicações prontas para produção com foco em performance e SEO.",
    years: 2,
    glyph: "▲",
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    short: "Biblioteca declarativa de UI",
    description:
      "Construo interfaces componíveis com hooks, server components e padrões avançados de composição. Performance e acessibilidade no centro.",
    years: 2,
    glyph: "⚛",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    short: "JavaScript com tipos",
    description:
      "Tipagem estática como ferramenta de design. Uso de Generics, inferência avançada e schemas zod compartilhados.",
    years: 2,
    glyph: "TS",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    category: "frontend",
    short: "Utility-first CSS",
    description:
      "Design systems com tokens semânticos. Variantes via class-variance-authority, motion-aware e dark mode nativo.",
    years: 2,
    glyph: "≋",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    short: "Linguagem core da web",
    description:
      "Domínio de ES6+, manipulação de DOM, Promises e APIs assíncronas. Base sólida para qualquer framework moderno.",
    years: 3,
    glyph: "JS",
  },
  {
    id: "html-css",
    name: "HTML5/CSS3",
    category: "frontend",
    short: "Estrutura e estilo base",
    description:
      "Semântica acessível, SEO-friendly, Flexbox, Grid e animações nativas. Foco em renderização crítica.",
    years: 3,
    glyph: "HTML",
  },
  {
    id: "tauri",
    name: "Tauri",
    category: "frontend",
    short: "Apps Desktop leves",
    description:
      "Desenvolvimento de aplicações nativas usando tecnologias web no frontend e Rust no backend para performance e segurança.",
    years: 1,
    glyph: "τ",
  },
  {
    id:"ShadcnUI",
    name: "Shadcn/UI",
    category: "libsUi",
    short: "Componentes acessíveis para React",
    description:
      "Biblioteca de componentes UI acessíveis e personalizáveis, construída sobre Radix UI e Tailwind CSS, para acelerar o desenvolvimento frontend.",
    years: 2,
    glyph: "Ui",
  },


  {
    id: "react-native",
    name: "React Native",
    category: "mobile",
    short: "Mobile multiplataforma nativo",
    description:
      "Desenvolvimento de apps iOS e Android com base de código compartilhada, performance nativa e Bridge/JSI.",
    years: 1,
    glyph: "⚛",
  },
  {
    id: "expo",
    name: "Expo",
    category: "mobile",
    short: "Ecosistema React Native",
    description:
      "Desenvolvimento mobile acelerado com EAS (Expo Application Services), notificações e atualizações OTA.",
    years: 1,
    glyph: "E",
  },
  {
    id: "nativewind",
    name: "NativeWind",
    category: "mobile",
    short: "Tailwind CSS para Native",
    description:
      "Estilização consistente entre Web e Mobile usando classes utilitárias no ecossistema Native.",
    years: 1,
    glyph: "≋",
  },

  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    short: "Runtime JavaScript no servidor",
    description:
      "APIs com Express, Hono e Fastify. Streams, workers, rate-limiting e observability com OpenTelemetry.",
    years: 1,
    glyph: "⬢",
  },
  {
    id: "express",
    name: "Express",
    category: "backend",
    short: "Framework Node.js minimalista",
    description:
      "Criação de APIs RESTful robustas, middlewares customizados e integração fluida com bancos de dados.",
    years: 1,
    glyph: "ex",
  },

  {
    id: "Prisma",
    name: "Prisma",
    category: "database",
    short: "ORM moderno para Node.js",
    description:
      "Modelagem de dados intuitiva, query builder com type safety e migration management. Suporte para PostgreSQL, MySQL, SQLite e MongoDB.",
    years: 1,
    glyph: "pg",
  },

  {
    id: "figma",
    name: "Figma",
    category: "design",
    short: "Design de interface e prototipagem",
    description:
      "Design system, componentes reutilizáveis e prototipagem interativa. Colaboração em tempo real.",
    years: 2,
    glyph: "⬢",
  },
  {
    id: "framer",
    name: "Framer",
    category: "design",
    short: "Prototipagem de alta fidelidade",
    description:
      "Criação de interações complexas e animações baseadas em estados. Ponte entre design e código real.",
    years: 1,
    glyph: "F",
  },
  {
    id: "canva",
    name: "Canva",
    category: "design",
    short: "Design gráfico ágil",
    description:
      "Criação rápida de assets visuais, apresentações e materiais de suporte para interfaces.",
    years: 2,
    glyph: "C",
  },

  {
    id: "vercel",
    name: "Vercel",
    category: "devops",
    short: "Deploy para frontend e edge",
    description:
      "Preview deploys por PR, edge functions e analytics. Pipeline CI/CD direto do Git para produção.",
    years: 0.5,
    glyph: "▲",
  },
]

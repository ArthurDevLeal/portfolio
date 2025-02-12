import type { Metadata } from "next";
import { radioCanada, spaceGrotesk } from "./components/fonts";
import { NavBar } from "./components/nav-bar";
import { SideBar } from "./components/side-bar";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthur Leal | Desenvolvedor Front-end",
  description:
    "Arthur Leal - Desenvolvedor Front-end especializado em React, Next.js e Tailwind CSS. Crio interfaces modernas, responsivas e performáticas, com experiência também em Node.js e Prisma. Confira meus projetos!",
  keywords: [
    "Desenvolvedor Front-end",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "Desenvolvimento Web",
    "Portfolio",
  ],
  authors: [{ name: "Arthur Leal", url: "https://www.arthurdevleal.tech/" }],
  openGraph: {
    title: "Arthur Leal | Desenvolvedor Front-end",
    description:
      "Arthur Leal - Desenvolvedor Front-end especializado em React, Next.js e Tailwind CSS. Crio interfaces modernas, responsivas e performáticas, com experiência também em Node.js e Prisma. Confira meus projetos!",
    url: "https://www.arthurdevleal.tech/",
    siteName: "Arthur Leal | Portfolio",
    images: [
      {
        url: "https://cdn.discordapp.com/attachments/1285307087718711338/1339040855280980119/logo.png?ex=67ad467a&is=67abf4fa&hm=3d11d56a34ebf3bb985b4bd508bc6fb44567fbe4576874e9f9f3287da21e654a&",
        width: 500,
        height: 500,
        alt: "Arthur Leal - Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  metadataBase: new URL("https://www.arthurdevleal.tech/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/Logo.png/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/Logo.png/favicon.svg" />
        <link rel="shortcut icon" href="/Logo.png/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Logo.png/apple-touch-icon.png" />
        <link rel="manifest" href="/Logo.png/site.webmanifest" />
      </head>
      <body
        className={`${spaceGrotesk.className} ${radioCanada.variable} antialiased bg-background text-foreground flex `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SideBar.Root />
          <div className="h-full w-[250px] hidden md:block"></div>
          <div className="flex-1 flex flex-col">{children}</div>
          <NavBar.Root />
        </ThemeProvider>
      </body>
    </html>
  );
}

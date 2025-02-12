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
      "Desenvolvedor Front-end especializado em React, Next.js e Tailwind CSS. Interfaces modernas e performáticas com experiência também em Node.js e Prisma.",
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
  twitter: {
    card: "summary_large_image",
    title: "Arthur Leal | Desenvolvedor Front-end",
    description:
      "Desenvolvedor Front-end especializado em React, Next.js e Tailwind CSS. Interfaces modernas e performáticas com experiência também em Node.js e Prisma.",
    images: [
      "https://cdn.discordapp.com/attachments/1285307087718711338/1339040855280980119/logo.png?ex=67ad467a&is=67abf4fa&hm=3d11d56a34ebf3bb985b4bd508bc6fb44567fbe4576874e9f9f3287da21e654a&",
    ],
  },
  metadataBase: new URL("https://www.arthurdevleal.tech/"),
  alternates: {
    canonical: "https://www.arthurdevleal.tech/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <head>
        <link rel="icon" href="/Logo.png" sizes="32x32" type="image/png" />
        <meta name="robots" content="index, follow" />
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

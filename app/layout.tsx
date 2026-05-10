import type { Metadata } from "next" // Importe o tipo para ter autocomplete
import { Inter, Space_Grotesk } from "next/font/google"
import { LenisProvider } from "@/components/lenis-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Arthur Leal | Desenvolvedor Web",
  description: "Desenvolvedor focado em criar produtos digitais com React, Next.js e IA. Transformando ideias em experiências reais de ponta a ponta.",
  keywords: ["Arthur Leal", "Desenvolvedor Front-end", "Full-stack", "Next.js", "React", "Portfólio"],
  authors: [{ name: "Arthur Leal" }],
  creator: "Arthur Leal",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portfolio.vlsolutions.site",
    title: "Arthur Leal | Desenvolvedor Web",
    description: "Confira meus projetos e trajetória como desenvolvedor.",
    siteName: "Arthur Leal Portfólio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arthur Leal Portfólio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Leal | Desenvolvedor Web",
    description: "Desenvolvedor focado em criar produtos digitais com React, Next.js e IA.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        spaceGrotesk.variable,
        interHeading.variable
      )}
    >
      <body>
        <Analytics />
        <ThemeProvider defaultTheme="system" enableSystem>
          <LenisProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
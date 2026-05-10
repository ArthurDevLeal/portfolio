"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import type { ReactNode } from "react"
import { ContactIcons } from "./hero-section/contact-icons"

type FooterContact = {
  name: string
  url: string
  Icon: ReactNode
  className?: string
  classNameArrow?: string
}

type SiteFooterProps = {
  contacts: FooterContact[]
}

export function Footer({ contacts }: SiteFooterProps) {
  const { theme, setTheme } = useTheme()

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <footer className="relative flex w-full flex-col gap-8 border-t border-border bg-background px-4 pt-8 pb-4 sm:gap-16 sm:px-10 sm:pt-16 sm:pb-6 lg:px-12">
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:gap-8">
        <p className="max-w-xs text-xs leading-relaxed text-pretty text-foreground sm:text-sm">
          Construindo produtos digitais com{" "}
          <span className="text-muted-foreground italic">
            &ldquo;atenção aos detalhes&rdquo;
          </span>{" "}
          e código limpo.
        </p>

        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="size-7 rounded-full border-border sm:size-9"
            aria-label="Alternar tema"
          >
            <Sun className="size-3 scale-100 rotate-0 transition-all dark:-rotate-90 dark:scale-0 sm:size-4" />
            <Moon className="absolute size-3 scale-0 rotate-90 transition-all dark:rotate-0 dark:scale-100 sm:size-4" />
          </Button>

          <button
            onClick={handleScrollTop}
            className="group flex items-center gap-2 whitespace-nowrap sm:gap-3"
            aria-label="Voltar ao topo"
          >
            <span className="text-[9px] font-medium tracking-[0.18em] text-muted-foreground uppercase transition-colors group-hover:text-foreground sm:text-[11px]">
              Voltar ao topo
            </span>
            <Button
              variant="outline"
              size="icon"
              className="size-7 rounded-full border-border transition-transform group-hover:-translate-y-1 sm:size-9"
              asChild
            >
              <span>
                <ArrowUp className="size-3 sm:size-4" />
              </span>
            </Button>
          </button>
        </div>
      </div>

      <h2 className="w-full font-sans text-[clamp(2rem,18vw,22rem)] leading-[0.85] font-bold tracking-[-0.04em] text-foreground">
        Arthur L<span className="text-muted-foreground">.</span>
      </h2>

      <div className="flex flex-col gap-6 border-t border-border pt-6 sm:gap-8 sm:pt-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col">
          <span className="text-[9px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:text-[11px]">
            Redes &nbsp;/&nbsp; Contato
          </span>
          <ContactIcons contacts={contacts} />
        </div>

        <div className="flex flex-col items-start gap-1 text-xs text-muted-foreground sm:text-sm md:items-end md:text-right">
          <p>
            <span className="text-[9px] font-medium tracking-[0.18em] uppercase sm:text-[11px]">
              Designed by
            </span>{" "}
            <span className="text-foreground italic">Arthur Leal</span>
          </p>
          <p>
            <span className="text-[9px] font-medium tracking-[0.18em] uppercase sm:text-[11px]">
              Developed by
            </span>{" "}
            <span className="text-foreground italic">Arthur Leal</span>
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-between gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:gap-0 sm:pt-6">
        <p className="text-[9px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:text-[11px]">
          &copy; 2026 &mdash; Todos os direitos reservados
        </p>
        <p className="text-[9px] font-medium tracking-[0.18em] text-muted-foreground uppercase sm:text-[11px]">
          Brasil
        </p>
      </div>
    </footer>
  )
}
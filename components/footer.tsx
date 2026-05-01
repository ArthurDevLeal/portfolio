"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
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
  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="relative flex w-full flex-col gap-16 border-t border-border bg-background px-12 pt-16 pb-6">
      <div className="flex w-full items-start justify-between gap-8">
        <p className="max-w-xs text-sm leading-relaxed text-pretty text-foreground">
          Construindo produtos digitais com{" "}
          <span className="text-muted-foreground italic">
            &ldquo;atenção aos detalhes&rdquo;
          </span>{" "}
          e código limpo.
        </p>

        <button
          onClick={handleScrollTop}
          className="group flex items-center gap-3"
          aria-label="Voltar ao topo"
        >
          <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase transition-colors group-hover:text-foreground">
            Voltar ao topo
          </span>
          <Button
            variant="outline"
            size="icon"
            className="size-9 rounded-full border-border transition-transform group-hover:-translate-y-1"
            asChild
          >
            <span>
              <ArrowUp className="size-4" />
            </span>
          </Button>
        </button>
      </div>

      <h2 className="w-full font-sans text-[clamp(4rem,21vw,22rem)] leading-[0.85] font-bold tracking-[-0.04em] text-foreground">
        Arthur L<span className="text-muted-foreground">.</span>
      </h2>

      <div className="flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col">
          <span className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Redes &nbsp;/&nbsp; Contato
          </span>
          <ContactIcons contacts={contacts} />
        </div>

        <div className="flex flex-col items-start gap-1 text-sm text-muted-foreground md:items-end md:text-right">
          <p>
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase">
              Designed by
            </span>{" "}
            <span className="text-foreground italic">Arthur Leal</span>
          </p>
          <p>
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase">
              Developed by
            </span>{" "}
            <span className="text-foreground italic">Arthur Leal</span>
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between border-t border-border pt-6">
        <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          &copy; 2026 &mdash; Todos os direitos reservados
        </p>
        <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Brasil
        </p>
      </div>
    </footer>
  )
}

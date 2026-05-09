"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { ButtonEmail } from "./ui/button-email"
import { RevealLine } from "./ui/reveal-line"

const EMAIL = "arthurdevleal@gmail.com"

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = buttonRef.current
    if (!btn) return
    const onMove = (e: PointerEvent) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const radius = 160
      if (dist < radius) {
        const f = (1 - dist / radius) * 0.35
        btn.style.transform = `translate(${dx * f}px, ${dy * f}px)`
      } else {
        btn.style.transform = "translate(0px, 0px)"
      }
    }
    const onLeave = () => {
      btn.style.transform = "translate(0px, 0px)"
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("blur", onLeave)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("blur", onLeave)
    }
  }, [])

  return (
    <section
      id="contactCta"
      ref={sectionRef}
      className="relative isolate flex min-h-[30svh] w-full flex-col items-center justify-center overflow-hidden bg-background px-4 pb-[30svh] sm:min-h-[60svh] sm:px-6"
    >
      <div
        className={`relative z-10 flex w-full max-w-5xl flex-col items-center gap-6 text-center transition-all duration-1000 ease-out sm:gap-10`}
      >
        <h2 className="font-sans text-3xl leading-[1.1] font-bold tracking-tight text-balance text-foreground sm:text-5xl sm:leading-[0.95]">
          <RevealLine delay={0.05}>Pronto para começar um</RevealLine>
          <RevealLine delay={0.25}>
            <span className="font-bold text-muted-foreground italic">
              novo projeto
            </span>
            <span className="text-foreground">?</span>
          </RevealLine>
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          Vamos conversar sobre a sua ideia. Respondo todos os e-mails em até{" "}
          <span className="text-foreground italic">24 horas</span>.
        </p>

        <div className="mt-4 flex flex-col items-center gap-4 sm:mt-2 sm:gap-6">
          <Link
            ref={buttonRef}
            href={`mailto:${EMAIL}`}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-3 py-3 text-sm text-background transition-[transform,gap] duration-300 ease-out will-change-transform hover:gap-4 sm:gap-3 sm:px-4 sm:py-4 sm:text-base sm:hover:gap-5"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-background/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
            />
            <span className="relative z-10 font-medium tracking-tight">
              Entrar em contato
            </span>
            <span className="relative z-10 flex size-8 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 ease-out group-hover:rotate-45 sm:size-10">
              <ArrowUpRight className="size-3 sm:size-4" strokeWidth={2.25} />
            </span>
          </Link>
          <ButtonEmail email={EMAIL} />
        </div>
      </div>
    </section>
  )
}

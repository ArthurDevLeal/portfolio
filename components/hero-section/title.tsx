"use client"

import { useTypewriter } from "@/hooks/use-typewriter"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const ROLES = ["Web developer", "Desenvolvedor frontend"]

interface HeroTitleProps {
  eyebrowName?: string
  className?: string
}

export function HeroTitle({
  eyebrowName = "Arthur Leal",
  className = "",
}: HeroTitleProps) {
  const role = useTypewriter(ROLES)

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        className
      )}
    >
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase"
      >
        <span>{eyebrowName}</span>
        <span aria-hidden className="mx-2 opacity-60">
          —
        </span>
        <span className="text-muted-foreground">{role}</span>
        <span
          aria-hidden
          className="ml-1 inline-block h-3 w-px animate-pulse bg-foreground/80"
        />
      </motion.p>

      <h1 className="max-w-4xl font-sans text-7xl leading-[1.02] font-medium tracking-tight text-balance text-foreground">
        <RevealLine delay={0.05}>Desenvolvendo ideias</RevealLine>
        <RevealLine delay={0.25} className="text-muted-foreground italic">
          através da computação Web.
        </RevealLine>
      </h1>
    </div>
  )
}

function RevealLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  )
}

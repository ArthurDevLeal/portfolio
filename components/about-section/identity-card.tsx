"use client"

import { MapPin, Radio, Sparkles, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

export function IdentityCard() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const tick = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(tick)
  }, [])

  const time = now
    ? new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Bahia",
        hour12: false,
      }).format(now)
    : "--:--:--"

  return (
    <div className="mt-24">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
        <Cell
          className="col-span-2 md:col-span-3 md:row-span-2"
          label="Local time / Bahia"
        >
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Radio className="h-3.5 w-3.5 text-primary" aria-hidden />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase">
                ao vivo
              </span>
              <span
                aria-hidden
                className="ml-1 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary"
              />
            </div>
            <div>
              <p
                className="ftext-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                aria-live="polite"
              >
                {time}
              </p>
              <p className="mt-3 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                GMT-3 · Brasil — Itapetinga
              </p>
            </div>
          </div>
        </Cell>

        <Cell label="Status" icon={<Sparkles className="h-3.5 w-3.5" />}>
          <p className="font-sans text-xl leading-tight font-medium text-foreground">
            Construindo
          </p>
          <p className="mt-1 text-xs text-muted-foreground italic">
            calmo &amp; focado
          </p>
        </Cell>

        <Cell label="Foco atual" icon={<Terminal className="h-3.5 w-3.5" />}>
          <p className="font-sans text-xl leading-tight font-medium text-foreground">
            Front-end
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            React · Next · Motion
          </p>
        </Cell>

        <Cell label="Onde" icon={<MapPin className="h-3.5 w-3.5" />}>
          <p className="font-sans text-xl leading-tight font-medium text-foreground">
            Bahia
          </p>
          <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            -15.24, -40.24
          </p>
        </Cell>
      </div>
    </div>
  )
}

function Cell({
  label,
  icon,
  className = "",
  children,
}: {
  label: string
  icon?: React.ReactNode
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={`group relative flex min-h-35 flex-col justify-between rounded-md border border-border bg-card p-5 transition-colors hover:border-foreground/30 ${className}`}
    >
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
        {icon ? <span className="text-muted-foreground/80">{icon}</span> : null}
        <span>{label}</span>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  )
}
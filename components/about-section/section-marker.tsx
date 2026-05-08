type SectionMarkerProps = {
  index: string
  label: string
  hint?: string
}

export function SectionMarker({ index, label, hint }: SectionMarkerProps) {
  return (
    <div className="flex items-center justify-between border-t border-border/70 pt-6">
      <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
        <span aria-hidden>{index}</span>
        <span className="mx-3 text-muted-foreground/60">/</span>
        <span className="text-foreground">{label}</span>
      </p>
      {hint ? (
        <p className="hidden items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase md:flex">
          <span className="block h-px w-10 bg-border" aria-hidden />
          {hint}
        </p>
      ) : null}
    </div>
  )
}

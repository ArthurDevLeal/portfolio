export function JourneyHeader() {
  return (
    <header className="px-6 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
      <p className="mb-5 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
        2022 — Hoje
      </p>
      <h2
        id="jornada-title"
        className="max-w-4xl font-sans text-5xl leading-[1.05] font-medium tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl"
      >
        A jornada, do primeiro
        <br />
        <span className="text-muted-foreground italic">
          {'"Hello, world"'}
        </span>{" "}
        até hoje.
      </h2>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
        Uma linha do tempo honesta, não só empresas, mas todas as etapas que me
        trouxeram até aqui. Role com calma.
      </p>
    </header>
  )
}

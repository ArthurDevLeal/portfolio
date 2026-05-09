export function JourneyHeader() {
  return (
    <header className="px-4 pt-12 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
      <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase sm:mb-5">
        2022 — Hoje
      </p>
      <h2
        id="jornada-title"
        className="max-w-4xl font-sans text-3xl leading-[1.1] font-medium tracking-tight text-balance text-foreground sm:text-5xl sm:leading-[1.05] lg:text-7xl"
      >
        A jornada, do primeiro
        <br className="hidden xs:block" />
        {" "}
        <span className="text-muted-foreground italic">
          {'"Hello, world"'}
        </span>{" "}
        até hoje.
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-pretty text-muted-foreground sm:mt-6 sm:text-base">
        Uma linha do tempo honesta, não só empresas, mas todas as etapas que me
        trouxeram até aqui. Role com calma.
      </p>
    </header>
  )
}

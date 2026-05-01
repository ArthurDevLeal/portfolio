export function SectionHeader() {
  return (
    <header id="skills" className="pointer-events-none absolute inset-x-0 top-0 px-16 pt-24">
      <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
       Stack
      </p>
      <h2 className="max-w-4xl text-balance font-sans text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        Tech skills,
        <br />
        <span className="italic text-muted-foreground">as que uso no dia a dia.</span>
      </h2>
      <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
        Cards flutuam da direita e empilham conforme você desce. Hover para conhecer cada tech.
      </p>
    </header>
  )
}

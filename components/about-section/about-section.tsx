import { AboutSectionIndex } from "."

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="relative flex min-h-svh flex-col px-4 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <p className="mb-4 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase sm:mb-5">
        Sobre mim
      </p>

      <AboutSectionIndex.IntroBlock />
      <AboutSectionIndex.Card />
    </section>
  )
}

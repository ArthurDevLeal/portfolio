import { IdentityCard } from "./identity-card"
import { IntroBlock } from "./intro-block"

export default function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="relative flex min-h-svh flex-col p-8 px-16"
    >
      <p className="mb-5 font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
        Sobre mim
      </p>

      <IntroBlock />
      <IdentityCard />
    </section>
  )
}

import Image from "next/image"

export function IntroBlock() {
  return (
    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-18 md:gap-x-6 lg:gap-x-8">
      <div className="md:col-span-12">
        <h2 className="max-w-4xl font-sans text-3xl leading-[1.1] font-medium tracking-tight text-balance text-foreground sm:text-5xl sm:leading-[1.05] lg:text-6xl">
          Sou um desenvolvedor
          <br className="hidden sm:block" />
          que curte unir{" "}
          <span className="font-medium text-muted-foreground italic">
            técnica e criatividade.
          </span>
        </h2>

        <div className="mt-4 max-w-xl space-y-4 text-sm leading-relaxed text-pretty text-muted-foreground sm:mt-6 sm:space-y-5 sm:text-base">
          <p>
            Meu nome é{" "}
            <span className="font-medium text-foreground">Arthur Leal</span> e
            eu construo produtos digitais focados em resolver problemas reais.
            Cuido de tudo, desde a interface no Figma até o código final no
            deploy, sempre priorizando experiências que façam sentido pra quem
            usa.
          </p>

          <p>
            Fora do código eu busco manter o equilíbrio. Sou apaixonado por
            música e games, e não abro mão de <span className="font-medium text-foreground">treinar</span> ou fazer uma caminhada.
            Essas pausas são o que me mantêm motivado e com a cabeça fresca para
            o dia a dia.
          </p>

          <p>
            Ao longo da vida aprendi de uma forma nativa o{" "}
            <span className="font-medium text-foreground">Português</span> e de
            uma maneira{" "}
            <span className="font-medium text-foreground">avançada</span> o{" "}
            <span className="font-medium text-foreground">Inglês</span>. Isso me
            ajuda a aprender com as documentações mais recentes e a colaborar em
            projetos de qualquer lugar do mundo sem barreiras.
          </p>
        </div>
      </div>

      <div className="md:col-span-6">
        <div className="relative mx-auto aspect-4/5 w-full max-w-xs sm:max-w-sm">
          <div
            aria-hidden
            className="absolute inset-0 -translate-x-3 translate-y-3 rotate-[-4deg] rounded-sm border border-border bg-card shadow-sm"
          />
          <div
            aria-hidden
            className="rotate 3 absolute inset-0 translate-x-2 -translate-y-1 rounded-sm border border-border bg-card shadow-md"
          />
          <figure className="relative h-full w-full rotate-[-1.5deg] rounded-sm border border-border bg-card p-3 shadow-lg">
            <div className="relative h-[82%] w-full overflow-hidden bg-muted">
              <Image
                src="/me.png"
                alt="Retrato de Arthur Leal"
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
                priority={true}
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
              <span>Arthur, 2026</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="block h-1.5 w-1.5 rounded-full bg-primary" />
                Brasil
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image"

export function IntroBlock() {
  return (
    <div className="relative grid grid-cols-1 gap-8 md:grid-cols-18 md:gap-x-6 lg:gap-x-8">
      <div className="md:col-span-12">
        <h2 className="max-w-4xl text-balance font-sans text-3xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl sm:leading-[1.05] lg:text-6xl">
          Sou um desenvolvedor,
          <br className="hidden sm:block" />
          mas, antes disso,{" "}
          <span className="font-medium text-muted-foreground italic">
            sou um curioso.
          </span>
        </h2>

        <div className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground space-y-4 sm:mt-6 sm:text-base sm:space-y-5">
          <p>
            Meu nome é{" "}
            <span className="font-medium text-foreground">Arthur Leal</span>.
            Construo produtos digitais{" "}
            <span className="italic">de ponta a ponta</span> — do primeiro
            wireframe ao deploy — com obsessão por detalhes que ninguém parece
            notar até que eles estejam ali.
          </p>
          <p>
            Acredito que software é <span className="italic">um ofício</span>:
            feito de pequenas decisões, microinterações e linhas de código que
            respeitam quem está do outro lado da tela.
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
            className="absolute inset-0 translate-x-2 -translate-y-1 rotate-3 rounded-sm border border-border bg-card shadow-md"
          />
          <figure className="relative h-full w-full rotate-[-1.5deg] rounded-sm border border-border bg-card p-3 shadow-lg">
            <div className="relative h-[82%] w-full overflow-hidden bg-muted">
              <Image
                src="/me.png"
                alt="Retrato em preto e branco de Arthur Leal"
                fill
                sizes="(min-width: 1024px) 320px, 60vw"
                className="object-cover"
                priority={false}
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

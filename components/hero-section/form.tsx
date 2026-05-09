// form.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import {
  contactSchema,
  type ContactFormValues,
} from "@/schemas/project-form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import WavyButton from "../ui/wavy-button"

const WHATSAPP_NUMBER = "5577981375008"

function buildWhatsAppUrl(values: ContactFormValues) {
  const message = [
    "Olá! Tenho interesse em conversar sobre um projeto.",
    `Nome: ${values.name}`,
    `Email: ${values.email}`,
    `Tipo de projeto: ${values.projectType}`,
    `Mensagem: ${values.message}`,
  ].join("\n")

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const PROJECT_TYPES = [
  { value: "web-app", label: "Website" },
  { value: "landing", label: "Landing Page" },
  { value: "design-system", label: "Design de projeto" },
  { value: "consulting", label: "Mobile app" },
  { value: "other", label: "Outro" },
]

export function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  function onSubmit(values: ContactFormValues) {
    window.location.href = buildWhatsAppUrl(values)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <WavyButton
          className="absolute top-4 right-4 sm:top-8 sm:right-8"
          variant={"outline"}
          size={"sm"}
        >
          <span className="mr-1 size-2 rounded-full bg-primary" />
          Disponível para projeto
        </WavyButton>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full overflow-y-auto p-0 sm:max-w-md"
      >
        <SheetHeader className="gap-0 border-b px-6 pt-8 pb-6 sm:px-8 sm:pt-12 sm:pb-8">
          <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
            Contato — Vamos conversar
          </p>
          <SheetTitle className="font-sans text-2xl leading-[1.05] font-medium tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl">
            Vamos trabalhar
            <br />
            <span className="text-muted-foreground italic">juntos.</span>
          </SheetTitle>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-pretty text-muted-foreground sm:mt-5">
            Me conte sobre seu projeto. Eu retorno para você dentro de 24h.
          </p>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 px-6 py-6 sm:px-8 sm:py-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="name"
                className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase"
              >
                01 — Nome
              </Label>
              <Input id="name" placeholder="Arthur" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase"
              >
                02 — Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="voce@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              03 — Tipo de projeto
            </Label>
            <Select
              onValueChange={(val) =>
                setValue("projectType", val, { shouldValidate: true })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Qual projeto estamos construindo?" />
              </SelectTrigger>
              <SelectContent>
                {PROJECT_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.projectType && (
              <p className="text-xs text-destructive">
                {errors.projectType.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label
              htmlFor="message"
              className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase"
            >
              04 — Mensagem
            </Label>
            <Textarea
              id="message"
              placeholder="Me conte sobre o projeto, cronograma e orçamento..."
              className="min-h-32 resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <SheetFooter className="mt-2 flex-row gap-2 p-0">
            <SheetClose asChild>
              <Button type="button" variant="ghost">
                Cancelar
              </Button>
            </SheetClose>
            <Button
              type="submit"
              className="group flex-1 gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner className="size-3" />
                  <span>Enviando</span>
                </>
              ) : (
                <>
                  <span>Enviar mensagem</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

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
  SheetContent,
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
  { value: "mobile-app", label: "Mobile app" },
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
          className="absolute top-4 right-4 z-10 sm:top-8 sm:right-8"
          variant="outline"
          size="sm"
        >
          <span className="mr-1 size-2 rounded-full bg-primary" />
          Disponível para projeto
        </WavyButton>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-full overflow-y-auto p-0 sm:max-w-md"
      >
        <SheetHeader className="gap-0 border-b px-5 pt-8 pb-6 sm:px-8 sm:pt-12 sm:pb-8">
          <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
            Contato — Vamos conversar
          </p>
          <SheetTitle className="font-sans text-2xl leading-[1.05] font-medium tracking-tight text-balance text-foreground sm:text-3xl">
            Vamos trabalhar
            <br />
            <span className="text-muted-foreground italic">juntos.</span>
          </SheetTitle>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-pretty text-muted-foreground sm:mt-4">
            Me conte sobre seu projeto. Eu retorno para você dentro de 24h.
          </p>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 px-5 py-6 sm:px-8 sm:py-8"
        >
          {/* Nome e Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
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

            <div className="flex flex-col gap-1.5">
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

          {/* Tipo de projeto */}
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="projectType"
              className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase"
            >
              03 — Tipo de projeto
            </Label>
            <Select onValueChange={(val) => setValue("projectType", val)}>
              <SelectTrigger id="projectType" className="w-full">
                <SelectValue placeholder="Selecione..." />
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

          {/* Mensagem */}
          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="message"
              className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase"
            >
              04 — Mensagem
            </Label>
            <Textarea
              id="message"
              placeholder="Conte um pouco sobre o projeto, prazo e orçamento..."
              rows={5}
              className="resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Botão submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full"
            size="lg"
          >
            {isSubmitting ? (
              <Spinner className="mr-2 size-4" />
            ) : (
              <ArrowRight className="mr-2 size-4" />
            )}
            Enviar via WhatsApp
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  )
}

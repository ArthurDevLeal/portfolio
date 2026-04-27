"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  SideSheet,
  SideSheetClose,
  SideSheetContent,
  SideSheetDescription,
  SideSheetFooter,
  SideSheetHeader,
  SideSheetTitle,
  SideSheetTrigger,
} from "@/components/ui/side-sheet"
import { Textarea } from "@/components/ui/textarea"
import WavyButton from "@/components/ui/wavy-button"
import { ContactFormValues, contactSchema } from "@/schemas/project-form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { Loader } from "../ui/loader"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

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

export function Form() {
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
    <SideSheet side="left">
      <SideSheetTrigger asChild>
        <WavyButton
          className="absolute top-8 right-8"
          variant="outline"
          size="sm"
        >
          <span className="mr-1 size-2 rounded-full bg-primary" />
          Disponível para projeto
        </WavyButton>
      </SideSheetTrigger>

      <SideSheetContent>
        <SideSheetHeader>
          <SideSheetTitle>Vamos trabalhar juntos</SideSheetTitle>
          <SideSheetDescription>
            Me conte sobre seu projeto. Eu retorno para você dentro de 24h.
          </SideSheetDescription>
        </SideSheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-5 px-1"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Arthur" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
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

          <div className="flex flex-col gap-1.5">
            <Label>Tipo de projeto</Label>
            <Select
              onValueChange={(val) =>
                setValue("projectType", val, { shouldValidate: true })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Qual projeto estamos construindo?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-app">Website</SelectItem>
                <SelectItem value="landing">Landing Page</SelectItem>
                <SelectItem value="design-system">Design de projeto</SelectItem>
                <SelectItem value="consulting">Mobile app</SelectItem>
                <SelectItem value="other">Outro</SelectItem>
              </SelectContent>
            </Select>
            {errors.projectType && (
              <p className="text-xs text-destructive">
                {errors.projectType.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              placeholder="Me conte sobre o projeto, cronograma e orçamento..."
              className="min-h-35 resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-xs text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <SideSheetFooter className="mt-2 gap-2 px-0">
            <SideSheetClose asChild>
              <Button type="button" variant="ghost">
                Cancelar
              </Button>
            </SideSheetClose>
            <Button
              type="submit"
              className="group flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <>
                  <Loader variant="magnetic-dots" />
                  <span>Enviando</span>
                </>
              )}
              {!isSubmitting && (
                <>
                  <p>Enviar mensagem</p>
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </SideSheetFooter>
        </form>
      </SideSheetContent>
    </SideSheet>
  )
}

import z from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "No mínimo 2 caracteres"),
  email: z.email("Digite um email válido"),
  projectType: z.string().min(1, "Escolha um tipo de projeto"),
  message: z.string().min(20, "No mínimo 20 caracteres"),
})
type ContactFormValues = z.infer<typeof contactSchema>
export type { ContactFormValues }

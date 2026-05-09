import { Copy } from "lucide-react"
import { useState } from "react"

export function ButtonEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }
  return (
    <button
      onClick={handleCopy}
      className="hidden group relative md:inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
      aria-label="Copiar e-mail"
    >
      <span className="relative inline-block h-5 overflow-hidden font-mono tracking-tight">
        <span
          className={`block transition-transform duration-300 ease-out ${
            copied ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {email}
        </span>
        <span
          aria-live="polite"
          className={`absolute inset-x-0 top-full block text-foreground transition-transform duration-300 ease-out ${
            copied ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          E-mail copiado
        </span>
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </span>

      {!copied && (
        <Copy
          size={14}
          className="absolute -right-6 text-foreground opacity-0 transition-opacity group-hover:opacity-100"
        />
      )}
    </button>
  )
}

import { RiLinkedinBoxFill, RiGithubFill, RiMailFill } from "@remixicon/react"
import { AtSign, Mail } from "lucide-react"

const iconMap = {
  linkedin: RiLinkedinBoxFill,
  github: RiGithubFill,
  email: AtSign,
} as const

export type IconKey = keyof typeof iconMap

export function resolveIcon(key: IconKey, color: string, size = 20) {
  const Icon = iconMap[key]
  return <Icon color={color} size={size} />
}
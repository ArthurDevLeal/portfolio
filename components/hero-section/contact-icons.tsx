import Link from "next/link"
import type { ReactNode } from "react"
import { MotionList } from "../fade-in-stagger"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
export interface Contact {
  name: string
  url: string
  Icon: ReactNode
  className?: string
  classNameArrow?: string
}
interface ContactIconsProps {
  contacts: Contact[]
}

export function ContactIcons({ contacts }: ContactIconsProps) {
  return (
    <MotionList className="flex items-center gap-4 mt-4">
      {contacts.map((contact) => (
        <Tooltip key={contact.name}>
          <TooltipTrigger asChild>
            <Link href={contact.url} target="_blank" rel="noopener noreferrer">
              <button className="rounded-lg bg-muted p-1.5 transition-[colors_transform] hover:-translate-y-1 hover:bg-input/80">
                {contact.Icon}
              </button>
            </Link>
          </TooltipTrigger>
          <TooltipContent
            className={contact.className}
            classNameArrow={contact.classNameArrow}
            side="bottom"
          >
            <p>{contact.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </MotionList>
  )
}

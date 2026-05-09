import { HeroSection } from "."
import ExpandableNavbar from "../expandable-navbar"
import { Contact } from "./contact-icons"
const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#tech" },
  { label: "TimeLine", href: "#timeline" },
  { label: "Contato", href: "#contactCta" },
]
export default function Hero({ contacts }: { contacts: Contact[] }) {
  return (
    <HeroSection.Root>
      <HeroSection.Form />
      <HeroSection.Title />
      <HeroSection.Contact contacts={contacts} />
      <ExpandableNavbar
        autoCollapseOnFirstScroll
        scrollThreshold={600}
        items={navItems}
      />
    </HeroSection.Root>
  )
}

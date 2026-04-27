"use client"
import ExpandableNavbar from "@/components/expandable-navbar"
import { HeroSection } from "@/components/hero-section"
import data from "@/data/hero-section.json"
import { IconKey, resolveIcon } from "@/lib/contact-icon-map"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing " },
  { label: "Docs", href: "/docs" },
]
export default function Page() {
  const contacts = data.contacts.map((item) => ({
    ...item,
    Icon: resolveIcon(item.icon as IconKey, item.color),
  }))

  return (
    <HeroSection.Root>
      <HeroSection.Form />
      <HeroSection.Title />
      <HeroSection.Contact contacts={contacts} />

      <ExpandableNavbar items={navItems} />
    </HeroSection.Root>
  )
}

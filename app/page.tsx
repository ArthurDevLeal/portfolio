"use client"

import ExpandableNavbar from "@/components/expandable-navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechSkillsSectionIndex } from "@/components/tech-skills-section"
import heroSectionData from "@/data/hero-section.json"
import projectSectionData from "@/data/project-section.json"
import { IconKey, resolveIcon } from "@/lib/contact-icon-map"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
]

export default function Page() {
  const contacts = heroSectionData.contacts.map((item) => ({
    ...item,
    Icon: resolveIcon(item.icon as IconKey, item.color),
  }))
  const projects = projectSectionData.projects.map((project) => ({
    ...project,
  }))

  return (
    <>
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
      <ProjectsSection.Projects projects={projects} />

      <TechSkillsSectionIndex.TechSkills />
    </>
  )
}

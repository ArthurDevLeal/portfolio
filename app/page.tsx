"use client"

import AboutSection from "@/components/about-section/about-section"
import { ContactCTA } from "@/components/contact-cta"
import ExpandableNavbar from "@/components/expandable-navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechSkillsSectionIndex } from "@/components/tech-skills-section"
import { JourneyTimeline } from "@/components/time-line-section/journey-time-line"
import { TimelineEntry } from "@/components/time-line-section/time-line-item"
import heroSectionData from "@/data/hero-section.json"
import journeyData from "@/data/journey.json"
import projectSectionData from "@/data/project-section.json"
import { IconKey, resolveIcon } from "@/lib/contact-icon-map"

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#tech" },
  { label: "TimeLine", href: "#timeline" },
  { label: "Contact", href: "#contactCta" },
]

export default function Page() {
  const contacts = heroSectionData.contacts.map((item) => ({
    ...item,
    Icon: resolveIcon(item.icon as IconKey, item.color),
  }))
  const projects = projectSectionData.projects.map((project) => ({
    ...project,
  }))
  const entries = journeyData.entries as TimelineEntry[]

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
      <JourneyTimeline entries={entries} />
      <AboutSection />
      <ContactCTA />
      <Footer contacts={contacts} />
      
    </>
  )
}

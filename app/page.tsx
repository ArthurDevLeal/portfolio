"use client"

import { AboutSectionIndex } from "@/components/about-section"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechSkillsSectionIndex } from "@/components/tech-skills-section"
import { TimeLineSection } from "@/components/time-line-section"
import { TimelineEntry } from "@/components/time-line-section/time-line-item"
import heroSectionData from "@/data/hero-section.json"
import journeyData from "@/data/journey.json"
import projectSectionData from "@/data/project-section.json"
import { IconKey, resolveIcon } from "@/lib/contact-icon-map"

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
      <HeroSection.HeroSection contacts={contacts} />
      <ProjectsSection.Projects projects={projects} />
      <TechSkillsSectionIndex.TechSkills />
      <TimeLineSection.TimeLine entries={entries} />
      <AboutSectionIndex.AboutSection />
      <ContactCTA />
      <Footer contacts={contacts} />
    </>
  )
}

export interface Project {
  id: string
  title: string
  description: string
  skillsGroup: {
    category: string
    skills: {
      name: string
      isShiny: boolean
    }[]
  }[]
  images: string[]
  link?: string
  textSpeed?: number
  github?: string
  url?: string
}
"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Globe, Home, LucideSquareArrowOutUpRight, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

interface ProjectLinkButtonProps {
  github?: string
  url?: string
  className?: string
}

interface LinkCardProps {
  href: string
  icon: React.ReactNode
  label: string
  sublabel: string
  delay: number
  onLaunch: () => void
  isLaunching: boolean
}

function extractDomain(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "")
  } catch {
    return url
  }
}

function extractRepoName(url: string) {
  try {
    const parts = new URL(url).pathname.replace(/^\//, "").split("/")
    return parts.slice(0, 2).join("/")
  } catch {
    return url
  }
}

function LinkCard({
  href,
  icon,
  label,
  sublabel,
  delay,
  onLaunch,
  isLaunching,
}: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.4, y: 12 }}
      animate={
        isLaunching
          ? {
              opacity: 0,
              scale: 1.15,
              x: 40,
              y: -40,
              transition: { duration: 0.38, ease: [0.32, 0, 0.67, 0] },
            }
          : {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                delay,
                type: "spring",
                stiffness: 420,
                damping: 22,
              },
            }
      }
      exit={{ opacity: 0, scale: 0.5, y: 8, transition: { duration: 0.18 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onLaunch}
      className={cn(
        "group relative flex items-center gap-3 rounded-md border bg-background px-4 py-3",
        "text-left",
        "min-w-40 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      )}
    >
      <motion.span
        className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
        animate={{ rotate: isHovered ? 8 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        {icon}
      </motion.span>
      <span className="flex flex-col overflow-hidden">
        <span className="mb-1 text-xs leading-none text-muted-foreground">
          {label}
        </span>
        <span className="max-w-27.5 truncate text-sm leading-none text-foreground">
          {sublabel}
        </span>
      </span>
      <motion.span
        className="ml-auto text-muted-foreground transition-colors group-hover:text-foreground"
        animate={{ x: isHovered ? 2 : 0, y: isHovered ? -2 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <LucideSquareArrowOutUpRight className="size-3.5" />
      </motion.span>
    </motion.button>
  )
}

export function ProjectLinkButton({
  github,
  url,
  className,
}: ProjectLinkButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [launching, setLaunching] = useState<"github" | "url" | null>(null)

  const handleLaunch = (href: string, key: "github" | "url") => {
    setLaunching(key)
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer")
      setLaunching(null)
      setIsOpen(false)
    }, 420)
  }

  return (
    <div
      className={cn("relative size-8 overflow-visible", className)}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="trigger"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 500, damping: 24 },
            }}
            exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.15 } }}
          >
            <Button
              variant="outline"
              className="size-8 rounded-full"
              onClick={() => setIsOpen(true)}
              aria-label="Check project links"
            >
              <span
                className="flex items-center justify-center rounded-full size-8"
              >
                <LucideSquareArrowOutUpRight className="size-3.5" />
              </span>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2"
          >
            <motion.button
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 500, damping: 20 },
              }}
              onClick={() => {
                if (!launching) setIsOpen(false)
              }}
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full border bg-background",
                "text-muted-foreground transition-colors hover:text-foreground",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-label="Close"
            >
              <X className="size-3.5" />
            </motion.button>

            <AnimatePresence>
              {github && (
                <LinkCard
                  key="github"
                  href={github}
                  icon={<Home className="size-4" />}
                  label="Repository"
                  sublabel={extractRepoName(github)}
                  delay={0.05}
                  onLaunch={() => handleLaunch(github, "github")}
                  isLaunching={launching === "github"}
                />
              )}
              {url && (
                <LinkCard
                  key="url"
                  href={url}
                  icon={<Globe className="size-4" />}
                  label="Live site"
                  sublabel={extractDomain(url)}
                  delay={github ? 0.12 : 0.05}
                  onLaunch={() => handleLaunch(url, "url")}
                  isLaunching={launching === "url"}
                />
              )}
              {!github && !url && (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm text-muted-foreground"
                >
                  No links yet.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

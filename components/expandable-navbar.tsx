"use client"
import { cn } from "@/lib/utils"
import {
  RiCloseLine,
  RiGlassesFill,
  RiGlassesLine,
  RiMenuLine,
} from "@remixicon/react"
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react"
import StaggerChars from "./ui/stagger-chars"

export interface NavItem {
  label: string
  href?: string
  onClick?: () => void
}

interface ExpandableNavbarProps {
  items: NavItem[]
  logo?: ReactNode
  cta?: ReactNode
  className?: string
  autoCollapseOnFirstScroll?: boolean
  scrollThreshold?: number
}

type AnimationStage =
  | "collapsed"
  | "movingToCenter"
  | "widthExpanding"
  | "fullyExpanded"
  | "contentFadingOut"
  | "widthCollapsing"
  | "movingToLeft"

const ExpandableNavbar = ({
  items,
  logo,
  cta,
  className,
  autoCollapseOnFirstScroll = false,
  scrollThreshold,
}: ExpandableNavbarProps) => {
  const [stage, setStage] = useState<AnimationStage>("fullyExpanded")
  const [mobileOpen, setMobileOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [fullWidth, setFullWidth] = useState(52)

  const hasAutoCollapsed = useRef(false)

  useEffect(() => {
    if (contentRef.current) {
      const measuredWidth = contentRef.current.offsetWidth + 52
      setFullWidth(measuredWidth)
    }
  }, [items, logo, cta])

  const handleExpand = () => {
    setStage("movingToCenter")
    setTimeout(() => setStage("widthExpanding"), 350)
    setTimeout(() => setStage("fullyExpanded"), 750)
  }

  const handleCollapse = () => {
    setStage("contentFadingOut")
    setTimeout(() => setStage("widthCollapsing"), 250)
    setTimeout(() => setStage("movingToLeft"), 650)
    setTimeout(() => setStage("collapsed"), 1000)
  }

  const isCollapsed = stage === "collapsed"
  const isExpanded = stage === "fullyExpanded"

  // Click-outside collapse (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        isExpanded
      ) {
        handleCollapse()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside, {
      passive: true,
    })
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [isExpanded])

  useEffect(() => {
    if (!mobileOpen) return
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside, {
      passive: true,
    })
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!autoCollapseOnFirstScroll) return

    const threshold = scrollThreshold ?? window.innerHeight * 0.8

    const handleScroll = () => {
      if (hasAutoCollapsed.current) return
      if (window.scrollY > threshold) {
        hasAutoCollapsed.current = true
        handleCollapse()
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [autoCollapseOnFirstScroll, scrollThreshold])

  const handleScrollTo = (item: NavItem, e?: React.MouseEvent) => {
    if (item.onClick) {
      e?.preventDefault()
      item.onClick()
      setMobileOpen(false)
      return
    }

    if (!item.href) {
      setMobileOpen(false)
      return
    }

    if (item.href.startsWith("#")) {
      e?.preventDefault()
      const id = item.href.slice(1)
      const target = document.getElementById(id)
      if (target) {
        const offset = 80
        const top = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: "smooth" })
      }
      setMobileOpen(false)
      return
    }

    setMobileOpen(false)

    if (e && e.currentTarget.tagName !== "A" && typeof window !== "undefined") {
      window.location.href = item.href
    }
  }

  return (
    <div className="pointer-events-none fixed right-0 bottom-8 left-0 z-50 flex justify-center px-4">
      <motion.div
        ref={mobileRef}
        className={cn(
          "pointer-events-auto block w-full overflow-hidden rounded-[18px] border bg-background md:hidden",
          className
        )}
        animate={{ borderRadius: mobileOpen ? 20 : 18 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex h-13 items-center justify-between px-2">
          {logo && <div className="shrink-0 border-r pr-3 pl-1">{logo}</div>}
          <div className="ml-auto flex items-center gap-1">
            {cta && <div className="shrink-0">{cta}</div>}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-muted"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    <RiCloseLine size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    <RiMenuLine size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? "auto" : 0 }}
          transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div className="border-t">
            {items.map((item, i) => {
              const isLink = !!item.href
              const commonProps = {
                onClick: (e: any) => handleScrollTo(item, e),
                className:
                  "block w-full cursor-pointer px-4 py-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted",
              }
              const motionProps = {
                initial: false,
                animate: {
                  opacity: mobileOpen ? 1 : 0,
                  y: mobileOpen ? 0 : 8,
                },
                transition: {
                  delay: mobileOpen ? i * 0.05 : 0,
                  duration: 0.22,
                  ease: "easeOut",
                },
              }

              if (isLink) {
                return (
                  // @ts-ignore
                  <motion.a
                    key={i}
                    href={item.href}
                    {...commonProps}
                    {...motionProps}
                  >
                    {item.label}
                  </motion.a>
                )
              }

              return (
                // @ts-ignore
                <motion.button key={i} {...commonProps} {...motionProps}>
                  {item.label}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </motion.div>

      <div className="hidden md:flex">
        <div
          ref={contentRef}
          className="pointer-events-none invisible absolute flex items-center gap-1 pr-2 whitespace-nowrap"
          aria-hidden="true"
        >
          {logo && (
            <div className="mr-1 shrink-0 border-r pr-3 pl-2">{logo}</div>
          )}
          <nav className="flex items-center gap-0.5">
            {items.map((item, i) => {
              const content = (
                <StaggerChars
                  className="rounded-xl px-3.5 py-2 text-sm font-medium whitespace-nowrap"
                  text={item.label}
                />
              )

              if (item.href) {
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="cursor-pointer text-sm font-medium whitespace-nowrap"
                  >
                    {content}
                  </a>
                )
              }
              return (
                <button
                  key={i}
                  className="cursor-pointer text-sm font-medium whitespace-nowrap"
                >
                  {content}
                </button>
              )
            })}
          </nav>
          {cta && <div className="ml-auto shrink-0 pl-2">{cta}</div>}
        </div>

        <motion.div
          ref={containerRef}
          initial={false}
          animate={{
            x:
              stage === "collapsed" || stage === "movingToLeft"
                ? "calc(50vw - 26px - 2rem)"
                : 0,
            width:
              stage === "widthExpanding" ||
              stage === "fullyExpanded" ||
              stage === "contentFadingOut"
                ? fullWidth
                : "52px",
            borderRadius:
              stage === "fullyExpanded" ||
              stage === "widthExpanding" ||
              stage === "contentFadingOut"
                ? 18
                : 999,
          }}
          transition={{
            x: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
            width: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
            borderRadius: { duration: 0.3 },
          }}
          className={cn(
            "pointer-events-auto flex h-13 items-center overflow-hidden border bg-background",
            className
          )}
        >
          <button
            onClick={() => (isCollapsed ? handleExpand() : handleCollapse())}
            className="relative flex h-13 w-13 shrink-0 cursor-pointer items-center justify-center text-foreground transition-colors hover:bg-muted"
          >
            <motion.span
              animate={{
                rotate: isCollapsed ? 360 : 0,
                opacity: isCollapsed ? 0 : 1,
              }}
              transition={{
                duration: 0.3,
                opacity: { duration: isCollapsed ? 0.28 : 0 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <RiGlassesFill size={26} className="text-foreground" />
            </motion.span>
            <motion.span
              animate={{
                rotate: isCollapsed ? 360 : 0,
                opacity: isCollapsed ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                opacity: { duration: isCollapsed ? 0.28 : 0 },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <RiGlassesLine size={26} className="text-foreground" />
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{
              opacity: stage === "fullyExpanded" ? 1 : 0,
              display:
                stage === "fullyExpanded" || stage === "contentFadingOut"
                  ? "flex"
                  : "none",
            }}
            transition={{ duration: 0.25 }}
            className="flex flex-1 items-center gap-1 overflow-hidden pr-2"
          >
            {logo && (
              <div className="mr-1 shrink-0 border-r pr-3 pl-2">{logo}</div>
            )}
            <nav className="flex flex-1 items-center gap-0.5">
              {items.map((item, i) => {
                const commonProps = {
                  onClick: (e: any) => handleScrollTo(item, e),
                  className:
                    "cursor-pointer text-sm font-medium whitespace-nowrap transition-colors",
                }
                const content = (
                  <StaggerChars
                    className="rounded-xl px-3.5 py-2 text-sm font-medium whitespace-nowrap hover:bg-muted"
                    text={item.label}
                  />
                )

                if (item.href) {
                  return (
                    <a key={i} href={item.href} {...commonProps}>
                      {content}
                    </a>
                  )
                }
                return (
                  <button key={i} {...commonProps}>
                    {content}
                  </button>
                )
              })}
            </nav>
            {cta && <div className="ml-auto shrink-0 pl-2">{cta}</div>}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ExpandableNavbar

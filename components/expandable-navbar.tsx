"use client"
import { cn } from "@/lib/utils"
import { RiGlassesFill, RiGlassesLine } from "@remixicon/react"
import { motion } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react"

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
}: ExpandableNavbarProps) => {
  const [stage, setStage] = useState<AnimationStage>("fullyExpanded")
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [fullWidth, setFullWidth] = useState(52) 

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node) && isExpanded) {
        handleCollapse()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isExpanded])

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div 
        ref={contentRef} 
        className="invisible absolute flex items-center gap-1 pr-2 pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        {logo && <div className="mr-1 shrink-0 border-r pr-3 pl-2">{logo}</div>}
        <nav className="flex items-center gap-0.5">
          {items.map((item, i) => (
            <span key={i} className="px-3.5 py-2 text-sm font-medium">{item.label}</span>
          ))}
        </nav>
        {cta && <div className="ml-auto shrink-0 pl-2">{cta}</div>}
      </div>

      <motion.div
        ref={containerRef}
        initial={false}
        animate={{
          x: stage === "collapsed" || stage === "movingToLeft" 
            ? "calc(50vw - 26px - 2rem)" 
            : 0,

          width:
            stage === "widthExpanding" ||
            stage === "fullyExpanded" ||
            stage === "contentFadingOut"
              ? fullWidth 
              : "52px",

          borderRadius:
            stage === "fullyExpanded" || stage === "widthExpanding" || stage === "contentFadingOut" ? 18 : 999,
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
              transition={{ duration: 0.3, opacity: { duration: isCollapsed ? 0.28 : 0 } }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <RiGlassesFill size={26} className="text-foreground" />
            </motion.span>
            <motion.span
              animate={{
                rotate: isCollapsed ? 360 : 0,
                opacity: isCollapsed ? 1 : 0,
              }}
              transition={{ duration: 0.3, opacity: { duration: isCollapsed ? 0.28 : 0 } }}
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
          {logo && <div className="mr-1 shrink-0 border-r pr-3 pl-2">{logo}</div>}
          <nav className="flex flex-1 items-center gap-0.5">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={item.onClick}
                className="cursor-pointer rounded-xl px-3.5 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
          </nav>
          {cta && <div className="ml-auto shrink-0 pl-2">{cta}</div>}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ExpandableNavbar
import { useEffect, useState } from "react"
import { RevealText } from "../ui/reveal-text"
import { TypingAnimation } from "../ui/typing-animation"

export function Title() {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsAnimationFinished(true)
    }, 1400)
  }, [])
  return (
    <>
      <span className="justify-content flex items-center">
        <TypingAnimation
          cursorStyle="underscore"
          className="mr-2 text-center font-mono text-xs text-muted-foreground uppercase"
          duration={100}
        >
          Arthur leal -
        </TypingAnimation>
        {isAnimationFinished && (
          <TypingAnimation
            cursorStyle="underscore"
            blinkCursor
            className="text-center font-mono text-xs text-muted-foreground uppercase"
            words={["Web developer", "Desenvolvedor frontend"]}
            loop={true}
          />
        )}
      </span>
      <RevealText
        className="text-center font-heading text-3xl"
        mode="auto"
        direction="down"
        delay={0}
        duration={1.2}
      >
        Desenvolvendo ideias através
      </RevealText>
      <RevealText
        className="text-center font-heading text-3xl"
        mode="auto"
        direction="down"
        delay={0.9}
        duration={1.2}
      >
        da computação Web
      </RevealText>
    </>
  )
}

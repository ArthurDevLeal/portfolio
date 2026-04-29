import { useEffect, useState } from "react"

export function useTypewriter(words: string[], { typing = 80, deleting = 40, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing")

  useEffect(() => {
    const word = words[index]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === "typing") {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), typing)
      } else {
        timeout = setTimeout(() => setPhase("deleting"), hold)
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), deleting)
      } else {
        setPhase("typing")
        setIndex((i) => (i + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, index, words, typing, deleting, hold])

  return text
}
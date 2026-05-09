import { Children } from "@/types/children"

export function Root({ children }: { children: Children }) {
  return (
    <div
      id="hero"
      className="relative flex min-h-svh flex-col items-center justify-center p-4 sm:p-8"
    >
      {children}
    </div>
  )
}
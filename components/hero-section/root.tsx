import { Children } from "@/types/children"

export function Root({ children }: { children: Children }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center p-8">
      {children}
    </div>
  )
}

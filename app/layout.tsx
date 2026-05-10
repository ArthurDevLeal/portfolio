import { Inter, Space_Grotesk } from "next/font/google"

import { LenisProvider } from "@/components/lenis-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"


const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" })

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        spaceGrotesk.variable,
        interHeading.variable
      )}
    >
      <body>
        <Analytics/>
        <ThemeProvider defaultTheme="system" enableSystem>
          <LenisProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

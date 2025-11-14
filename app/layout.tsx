import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PageTransition } from "@/components/page-transition"
import { RouteChangeAnimation } from "@/components/route-change-animation"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata = {
  title: "GINTAIK - Advanced TPU Laminated Fabric Solutions",
  description: "Eco-friendly, high-quality TPU laminated fabric for various applications",
  generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <RouteChangeAnimation />
            <PageTransition>{children}</PageTransition>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

"use client"
import { Header } from "@/components/header"
import { BackgroundPaths } from "@/components/background-paths"
import { AnimatedBackground } from "@/components/animated-background"
import { useLanguage } from "@/contexts/language-context"
import { LocationFooter } from "@/components/location-footer"

export default function ContactPage() {
  const { t } = useLanguage()
  const primaryBlue = "#2a4399"

  return (
    <div className="flex flex-col min-h-screen bg-blue-50/30">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 via-white/80 to-amber-50/50"></div>
        <BackgroundPaths />
      </div>

      {/* Navigation */}
      <Header />

      <main className="flex-1 relative z-10 pt-20 flex flex-col">
        <div className="relative flex-1 flex flex-col">
          <AnimatedBackground color={primaryBlue} density="low" speed="slow" className="opacity-20" />
          {/* 已删除container和返回首页链接 */}
        </div>
      </main>

      {/* Footer */}
      <LocationFooter />
    </div>
  )
}

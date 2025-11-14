"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === "en" ? "zh" : "en")}
        className="flex items-center gap-1 text-xs lg:text-sm text-slate-700 hover:text-[#2a4399] hover:bg-slate-100 px-2 lg:px-3 h-8"
      >
        <Globe className="h-3.5 w-3.5" />
        <span>{language === "en" ? "EN" : "中"}</span>
      </Button>
    </div>
  )
}

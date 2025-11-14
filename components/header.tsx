"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const pathname = usePathname()
  const { t, language, setLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // 根据当前路径设置活动tab
  useEffect(() => {
    // 根据当前路径设置活动tab
    if (pathname === "/") {
      setActiveTab("home")
    } else if (pathname === "/products") {
      setActiveTab("products")
    } else if (pathname === "/innovation") {
      setActiveTab("innovation")
    } else if (pathname === "/about") {
      setActiveTab("about")
    } else if (pathname === "/contact") {
      setActiveTab("contact")
    }
  }, [pathname])

  // 单独处理滚动逻辑，不依赖于路径变化
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // 菜单项
  const menuItems = [
    { href: "/", id: "home", labelKey: "navHome" },
    { href: "/products", id: "products", labelKey: "navProducts" },
    { href: "/innovation", id: "innovation", labelKey: "navInnovation" },
    { href: "/about", id: "about", labelKey: "navAbout" },
    { href: "/#contact", id: "contact", labelKey: "navContact" },
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-gradient-to-b from-[#e0f2fe] to-blue-50/30 shadow-md ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container flex h-20 items-center justify-between relative">
          <div className="flex items-center gap-2">
            <div className="relative w-[400px] h-20 -ml-6">
              <Image src="/images/gintaik-logo.png" alt="GINTAIK Logo" fill className="object-contain" priority />
            </div>
          </div>

          {/* 导航菜单全部居右，确保不换行 */}
          <nav className="hidden md:flex items-center justify-end">
            <div className="flex items-center whitespace-nowrap">
              <Link
                href="/"
                className={`text-xs lg:text-sm font-medium transition-colors relative px-2 lg:px-3 inline-flex items-center justify-center min-w-[60px] lg:min-w-[70px] ${
                  activeTab === "home" ? "text-[#2a4399] font-semibold" : "text-slate-700 hover:text-[#2a4399]"
                }`}
              >
                {t("navHome")}
                {activeTab === "home" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2a4399]"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              <Link
                href="/products"
                className={`text-xs lg:text-sm font-medium transition-colors relative px-2 lg:px-3 inline-flex items-center justify-center min-w-[80px] lg:min-w-[100px] ${
                  activeTab === "products" ? "text-[#2a4399] font-semibold" : "text-slate-700 hover:text-[#2a4399]"
                }`}
              >
                {t("navProducts")}
                {activeTab === "products" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2a4399]"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              <Link
                href="/innovation"
                className={`text-xs lg:text-sm font-medium transition-colors relative px-2 lg:px-3 inline-flex items-center justify-center min-w-[90px] lg:min-w-[110px] ${
                  activeTab === "innovation" ? "text-[#2a4399] font-semibold" : "text-slate-700 hover:text-[#2a4399]"
                }`}
              >
                {t("navInnovation")}
                {activeTab === "innovation" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2a4399]"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              <Link
                href="/about"
                className={`text-xs lg:text-sm font-medium transition-colors relative px-2 lg:px-3 inline-flex items-center justify-center min-w-[70px] lg:min-w-[90px] ${
                  activeTab === "about" ? "text-[#2a4399] font-semibold" : "text-slate-700 hover:text-[#2a4399]"
                }`}
              >
                {t("navAbout")}
                {activeTab === "about" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2a4399]"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              <div className="h-4 w-px bg-slate-300 mx-1"></div>
              <Link
                href="/#contact"
                className={`text-xs lg:text-sm font-medium transition-colors relative px-2 lg:px-3 inline-flex items-center justify-center min-w-[70px] lg:min-w-[90px] ${
                  activeTab === "contact" ? "text-[#2a4399] font-semibold" : "text-slate-700 hover:text-[#2a4399]"
                }`}
              >
                {t("navContact")}
                {activeTab === "contact" && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2a4399]"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
              <LanguageSwitcher />
            </div>
          </nav>

          {/* 移动端菜单按钮 */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-slate-700"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* 移动菜单弹出层 - 与header同级 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* 背景遮罩 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={closeMobileMenu}
            />

            {/* 顶部弹出菜单 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 left-0 w-full z-50 bg-white shadow-lg rounded-b-lg overflow-hidden"
              style={{ maxHeight: "40vh" }}
            >
              <div className="flex flex-col">
                <div className="overflow-auto py-2">
                  <nav className="grid grid-cols-1">
                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between px-6 py-3.5 hover:bg-blue-50 transition-colors ${
                          activeTab === item.id ? "text-[#2a4399] font-medium bg-blue-50/70" : "text-slate-700"
                        }`}
                        onClick={closeMobileMenu}
                      >
                        <span>{t(item.labelKey as any)}</span>
                        {activeTab === item.id && <ChevronRight className="h-4 w-4 text-[#2a4399]" />}
                      </Link>
                    ))}
                    <div className="flex items-center justify-between px-6 py-3.5 hover:bg-blue-50 transition-colors border-t border-gray-100">
                      <span className="text-slate-700">Language</span>
                      <div className="flex items-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setLanguage(language === "en" ? "zh" : "en")
                            closeMobileMenu()
                          }}
                          className="text-[#2a4399] font-medium"
                        >
                          {language === "en" ? "English" : "中文"}
                        </Button>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

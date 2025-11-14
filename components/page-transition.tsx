"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { BackgroundPaths } from "./background-paths"
import { useLanguage } from "@/contexts/language-context"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    // Simulate loading time to ensure animation completes
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Animation duration

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full">
              <BackgroundPaths />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative w-96 h-32"
                  >
                    <Image
                      src="/images/gintaik-text-logo.png"
                      alt="GINTAIK Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-warm-yellow text-lg font-medium text-center mt-[-30px]"
                  >
                    Innovate. Adhere. Advance.
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.5 }}>
        {children}
      </motion.div>
    </>
  )
}

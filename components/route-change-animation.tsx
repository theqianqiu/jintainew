"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { BackgroundPaths } from "./background-paths"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function RouteChangeAnimation() {
  const pathname = usePathname()
  const [isChangingRoute, setIsChangingRoute] = useState(false)
  const [prevPathname, setPrevPathname] = useState("")
  const { t } = useLanguage()

  useEffect(() => {
    // If this is the first render, don't show the animation
    if (prevPathname === "") {
      setPrevPathname(pathname)
      return
    }

    // If the path changed, show the animation
    if (pathname !== prevPathname) {
      setIsChangingRoute(true)

      // Hide the animation after it completes
      const timer = setTimeout(() => {
        setIsChangingRoute(false)
        setPrevPathname(pathname)
      }, 2000) // Animation duration

      return () => clearTimeout(timer)
    }
  }, [pathname, prevPathname])

  return (
    <AnimatePresence>
      {isChangingRoute && (
        <motion.div
          key="route-change-animation"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-full">
            <BackgroundPaths />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
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
                  transition={{ delay: 0.5, duration: 0.3 }}
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
  )
}

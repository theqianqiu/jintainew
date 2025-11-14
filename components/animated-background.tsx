"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  className?: string
  color?: string
  density?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
}

export function AnimatedBackground({
  className = "",
  color = "#0ea5e9",
  density = "medium",
  speed = "medium",
}: AnimatedBackgroundProps) {
  const [paths, setPaths] = useState<Array<{ id: number; d: string; delay: number }>>([])

  // 使用loading页面的固定曲线路径
  const predefinedPaths = [
    "M0,50 Q25,30 50,50 T100,50",
    "M0,30 Q35,60 70,30 T100,30",
    "M0,70 Q50,40 75,70 T100,70",
    "M0,20 Q20,60 40,20 T100,20",
    "M0,80 Q30,20 60,80 T100,80",
  ]

  // Determine animation duration based on speed
  const getDuration = () => {
    switch (speed) {
      case "slow":
        return { min: 15, max: 25 }
      case "fast":
        return { min: 5, max: 10 }
      default:
        return { min: 10, max: 15 }
    }
  }

  // Determine number of paths based on density
  const getPathCount = () => {
    switch (density) {
      case "low":
        return 3
      case "high":
        return 5 // 最多使用所有5条路径
      default:
        return 4
    }
  }

  useEffect(() => {
    // 从预定义路径中随机选择
    const generatePaths = () => {
      const pathCount = getPathCount()
      const shuffledPaths = [...predefinedPaths].sort(() => 0.5 - Math.random())
      const selectedPaths = shuffledPaths.slice(0, pathCount)

      const newPaths = selectedPaths.map((pathD, i) => ({
        id: i,
        d: pathD,
        delay: i * 0.5, // Stagger the animations
      }))

      setPaths(newPaths)
    }

    generatePaths()
  }, [density])

  const { min, max } = getDuration()

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-20">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={color}
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.5, 0.8, 0.5, 0],
              transition: {
                pathLength: {
                  duration: min + Math.random() * (max - min),
                  delay: path.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                opacity: {
                  duration: min + Math.random() * (max - min),
                  delay: path.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                },
              },
            }}
          />
        ))}
      </svg>
    </div>
  )
}

"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  className?: string
  color?: string
  density?: "low" | "medium" | "high"
  speed?: "slow" | "medium" | "fast"
}

// 使用loading页面的固定曲线路径（移到组件外部，避免每次渲染创建新数组）
const PREDEFINED_PATHS = [
  "M0,50 Q25,30 50,50 T100,50",
  "M0,30 Q35,60 70,30 T100,30",
  "M0,70 Q50,40 75,70 T100,70",
  "M0,20 Q20,60 40,20 T100,20",
  "M0,80 Q30,20 60,80 T100,80",
]

// 简单的伪随机数生成器（Mulberry32算法）
function createSeededRandom(seed: number) {
  let state = seed
  return function() {
    state = state + 0x6D2B79F5
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Fisher-Yates 洗牌算法 - 确保完全确定性
function shuffleArray<T>(array: T[], random: () => number): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function AnimatedBackground({
  className = "",
  color = "#0ea5e9",
  density = "medium",
  speed = "medium",
}: AnimatedBackgroundProps) {
  // 使用 useMemo 和固定种子生成路径，确保 SSR 和客户端渲染一致
  const paths = useMemo(() => {
    // Determine number of paths based on density
    const pathCount = density === "low" ? 3 : density === "high" ? 5 : 4
    
    // Determine animation duration based on speed
    const durationRange = speed === "slow" 
      ? { min: 15, max: 25 } 
      : speed === "fast" 
      ? { min: 5, max: 10 } 
      : { min: 10, max: 15 }
    
    const seededRandom = createSeededRandom(54321) // 固定种子
    
    // 使用 Fisher-Yates 算法打乱数组，确保确定性
    const shuffledPaths = shuffleArray(PREDEFINED_PATHS, seededRandom)
    const selectedPaths = shuffledPaths.slice(0, pathCount)

    return selectedPaths.map((pathD, i) => ({
      id: i,
      d: pathD,
      delay: i * 0.5,
      duration: durationRange.min + seededRandom() * (durationRange.max - durationRange.min),
    }))
  }, [density, speed])

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
                  duration: path.duration,
                  delay: path.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                opacity: {
                  duration: path.duration,
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

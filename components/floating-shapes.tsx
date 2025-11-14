"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface FloatingShapesProps {
  className?: string
  color?: string
  count?: number
}

export function FloatingShapes({ className = "", color = "#0ea5e9", count = 5 }: FloatingShapesProps) {
  const [mounted, setMounted] = useState(false)

  // 只在客户端挂载，避免 SSR 水合问题
  useEffect(() => {
    setMounted(true)
  }, [])

  // 在挂载前不渲染任何内容
  if (!mounted) {
    return null
  }

  // 生成固定的形状（每次渲染保持一致）
  const shapes = Array.from({ length: count }, (_, i) => {
    // 使用索引生成伪随机但一致的值
    const seed = i * 12345
    const random1 = (Math.sin(seed) * 10000) % 1
    const random2 = (Math.sin(seed + 1) * 10000) % 1
    const random3 = (Math.sin(seed + 2) * 10000) % 1
    const random4 = (Math.sin(seed + 3) * 10000) % 1
    const random5 = (Math.sin(seed + 4) * 10000) % 1
    
    return {
      id: i,
      type: random1 > 0.5 ? "circle" : "rect",
      x: Math.abs(random2) * 100,
      y: Math.abs(random3) * 100,
      size: 2 + Math.abs(random4) * 5,
      duration: 20 + Math.abs(random5) * 40,
      delay: i * 2,
    }
  })

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-10">
        {shapes.map((shape) => {
          if (shape.type === "circle") {
            return (
              <motion.g
                key={shape.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0.7, 0.5, 0],
                  scale: [0, 1, 1.5, 1, 0],
                }}
                transition={{
                  duration: shape.duration,
                  delay: shape.delay,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: `${shape.x}px ${shape.y}px` }}
              >
                <circle
                  cx={shape.x}
                  cy={shape.y}
                  r={shape.size / 2}
                  fill={color}
                />
              </motion.g>
            )
          } else {
            return (
              <motion.g
                key={shape.id}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0.7, 0.5, 0],
                  scale: [0, 1, 1.5, 1, 0],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: shape.duration,
                  delay: shape.delay,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: `${shape.x + shape.size / 2}px ${shape.y + shape.size / 2}px` }}
              >
                <rect
                  x={shape.x}
                  y={shape.y}
                  width={shape.size}
                  height={shape.size}
                  fill={color}
                />
              </motion.g>
            )
          }
        })}
      </svg>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"

interface FloatingShapesProps {
  className?: string
  color?: string
  count?: number
}

export function FloatingShapes({ className = "", color = "#0ea5e9", count = 5 }: FloatingShapesProps) {
  // Generate shapes
  const shapes = Array.from({ length: count }, (_, i) => ({
    id: i,
    type: Math.random() > 0.5 ? "circle" : "rect",
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 5,
    duration: 20 + Math.random() * 40,
    delay: i * 2,
  }))

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="opacity-10">
        {shapes.map((shape) => {
          if (shape.type === "circle") {
            return (
              <motion.circle
                key={shape.id}
                cx={shape.x}
                cy={shape.y}
                r={shape.size / 2}
                fill={color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 1.5, 1, 0],
                  opacity: [0, 0.5, 0.7, 0.5, 0],
                  cx: [shape.x, shape.x + 10, shape.x - 5, shape.x + 15, shape.x],
                  cy: [shape.y, shape.y - 10, shape.y + 15, shape.y - 5, shape.y],
                }}
                transition={{
                  duration: shape.duration,
                  delay: shape.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            )
          } else {
            return (
              <motion.rect
                key={shape.id}
                x={shape.x}
                y={shape.y}
                width={shape.size}
                height={shape.size}
                fill={color}
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1, 1.5, 1, 0],
                  opacity: [0, 0.5, 0.7, 0.5, 0],
                  rotate: [0, 45, 90, 180, 360],
                  x: [shape.x, shape.x + 10, shape.x - 5, shape.x + 15, shape.x],
                  y: [shape.y, shape.y - 10, shape.y + 15, shape.y - 5, shape.y],
                }}
                transition={{
                  duration: shape.duration,
                  delay: shape.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            )
          }
        })}
      </svg>
    </div>
  )
}

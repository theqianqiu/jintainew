"use client"

import { motion } from "framer-motion"

interface AtomicStructureProps {
  className?: string
  color1?: string
  color2?: string
}

export function AtomicStructure({ className = "", color1 = "#2563eb", color2 = "#f59e0b" }: AtomicStructureProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
        {/* Nucleus */}
        <motion.g
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <circle cx="100" cy="100" r="8" fill={color1} />
        </motion.g>

        {/* Electron orbits */}
        {[0, 1, 2].map((idx) => (
          <g key={idx}>
            <motion.g
              initial={{ opacity: 0.3, rotate: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                rotate: 360,
              }}
              transition={{
                duration: 15 + idx * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformOrigin: "100px 100px" }}
            >
              <ellipse
                cx="100"
                cy="100"
                rx={30 + idx * 20}
                ry={15 + idx * 10}
                fill="none"
                stroke={idx % 2 === 0 ? color1 : color2}
                strokeWidth="0.5"
                strokeDasharray="3,2"
              />
            </motion.g>

            {/* Electrons */}
            <motion.g
              initial={{ opacity: 0.8, rotate: 0 }}
              animate={{
                opacity: [0.8, 1, 0.8],
                rotate: 360,
              }}
              transition={{
                duration: 8 + idx * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "100px 100px",
              }}
            >
              <circle
                cx="100"
                cy={100 - (15 + idx * 10)}
                r="3"
                fill={idx % 2 === 0 ? color1 : color2}
                style={{
                  transform: `rotate(${idx * 120}deg) translateY(-${30 + idx * 15}px)`,
                  transformOrigin: "100px 100px",
                }}
              />
            </motion.g>
          </g>
        ))}
      </svg>
    </div>
  )
}

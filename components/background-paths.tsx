"use client"

import { motion } from "framer-motion"

export function BackgroundPaths() {
  // GINTAIK logo colors
  const primaryBlue = "#2a4399"
  const accentOrange = "#f59e0b"

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M0,50 Q25,30 50,50 T100,50"
          stroke={primaryBlue}
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.1 }}
          animate={{
            pathLength: 1,
            opacity: [0.1, 0.3, 0.7, 0.3, 0.1],
            transition: {
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        />
        <motion.path
          d="M0,30 Q35,60 70,30 T100,30"
          stroke={primaryBlue}
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.1 }}
          animate={{
            pathLength: 1,
            opacity: [0.1, 0.3, 0.7, 0.3, 0.1],
            transition: {
              duration: 2.5,
              ease: "easeInOut",
              delay: 0.2,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        />
        <motion.path
          d="M0,70 Q50,40 75,70 T100,70"
          stroke={primaryBlue}
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.1 }}
          animate={{
            pathLength: 1,
            opacity: [0.1, 0.3, 0.7, 0.3, 0.1],
            transition: {
              duration: 3,
              ease: "easeInOut",
              delay: 0.4,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        />
        <motion.path
          d="M0,20 Q20,60 40,20 T100,20"
          stroke={accentOrange}
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.1 }}
          animate={{
            pathLength: 1,
            opacity: [0.1, 0.3, 0.7, 0.3, 0.1],
            transition: {
              duration: 2.2,
              ease: "easeInOut",
              delay: 0.6,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        />
        <motion.path
          d="M0,80 Q30,20 60,80 T100,80"
          stroke={primaryBlue}
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.1 }}
          animate={{
            pathLength: 1,
            opacity: [0.1, 0.3, 0.7, 0.3, 0.1],
            transition: {
              duration: 2.8,
              ease: "easeInOut",
              delay: 0.8,
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        />
        {/* Additional decorative elements */}
        <motion.circle
          cx="20"
          cy="30"
          r="0.5"
          fill={primaryBlue}
          initial={{ scale: 0, opacity: 0.1 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0.1, 0.7, 0.1],
            transition: {
              duration: 2,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        />
        <motion.circle
          cx="70"
          cy="60"
          r="0.5"
          fill={accentOrange}
          initial={{ scale: 0, opacity: 0.1 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0.1, 0.7, 0.1],
            transition: {
              duration: 2,
              delay: 0.5,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        />
        <motion.circle
          cx="40"
          cy="80"
          r="0.5"
          fill={primaryBlue}
          initial={{ scale: 0, opacity: 0.1 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0.1, 0.7, 0.1],
            transition: {
              duration: 2,
              delay: 1,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        />
      </svg>
    </div>
  )
}

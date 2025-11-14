"use client"

import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function WaveBackground() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [viewBox, setViewBox] = useState("0 0 1440 400")

  useEffect(() => {
    setViewBox("0 0 1440 400")
  }, [isMobile])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 left-0 w-full"
        style={{ height: "70%" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        preserveAspectRatio="none"
      >
        {/* 最上层浅蓝色波浪 - 更平缓的弧度 */}
        <path fill="#e1ebf2" d="M0,160 Q720,60 1440,160 L1440,400 L0,400 Z" />

        {/* 中间层中蓝色波浪 - 更平缓的弧度 */}
        <path fill="#a8c5e0" d="M0,220 Q720,120 1440,220 L1440,400 L0,400 Z" />

        {/* 第三层深蓝色波浪 - 更平缓的弧度 */}
        <path fill="#5a89b9" d="M0,280 Q720,180 1440,280 L1440,400 L0,400 Z" />

        {/* 底层深蓝色波浪 - 更平缓的弧度 */}
        <path fill="#2c3e6e" d="M0,340 Q720,240 1440,340 L1440,400 L0,400 Z" />
      </svg>
    </div>
  )
}

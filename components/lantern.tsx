"use client"

import { useEffect, useState } from "react"

interface LanternProps {
  size: "sm" | "md" | "lg"
  color: "red" | "gold"
}

export function Lantern({ size, color }: LanternProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  const sizeClasses = {
    sm: "w-12 h-16",
    md: "w-16 h-24",
    lg: "w-20 h-32",
  }

  const colorClasses = {
    red: "bg-chinese-red",
    gold: "bg-chinese-gold",
  }

  const glowColors = {
    red: "rgba(220, 38, 38, 0.3)",
    gold: "rgba(245, 158, 11, 0.3)",
  }

  return (
    <div
      className={`relative ${sizeClasses[size]} ${isAnimating ? "animate-float" : ""}`}
      style={{
        transition: "all 0.5s ease-in-out",
        boxShadow: `0 0 20px ${glowColors[color]}`,
      }}
    >
      {/* Lantern top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/6 bg-yellow-800 rounded-t-md"></div>

      {/* Lantern body */}
      <div
        className={`absolute top-1/6 left-0 w-full h-4/6 ${colorClasses[color]} rounded-md flex items-center justify-center`}
      >
        <div className="text-yellow-100 font-bold text-center">{size === "lg" && "福"}</div>
      </div>

      {/* Lantern bottom */}
      <div className={`absolute bottom-0 left-0 w-full h-1/6 ${colorClasses[color]} rounded-b-full`}></div>

      {/* Lantern string */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-yellow-800"></div>
    </div>
  )
}

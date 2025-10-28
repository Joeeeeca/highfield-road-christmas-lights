"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  left: number
  animationDuration: number
  opacity: number
  size: number
  delay: number
  animationName: string
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes: Snowflake[] = []
    for (let i = 0; i < 50; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 5,
        opacity: Math.random() * 0.6 + 0.4,
        size: Math.random() * 0.5 + 0.5,
        delay: Math.random() * 5,
        animationName: Math.random() > 0.5 ? "snowfall" : "snowfall-left",
      })
    }
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
            fontSize: `${flake.size}em`,
            animationName: flake.animationName,
            textShadow: "0 0 3px rgba(0, 0, 0, 0.5), 0 0 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}

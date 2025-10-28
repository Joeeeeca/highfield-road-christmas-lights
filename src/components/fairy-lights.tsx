"use client"

import { useEffect, useState } from "react"

export function FairyLights() {
  const [bulbCount, setBulbCount] = useState(9)

  useEffect(() => {
    const updateBulbCount = () => {
      const width = window.innerWidth
      if (width < 640) {
        setBulbCount(5) // 📱 Mobile
      } else if (width < 1024) {
        setBulbCount(7) // 💻 Tablet
      } else {
        setBulbCount(9) // 🖥️ Desktop
      }
    }

    updateBulbCount()
    window.addEventListener("resize", updateBulbCount)
    return () => window.removeEventListener("resize", updateBulbCount)
  }, [])

  return (
    <div className="w-full mx-auto my-8 relative h-12">
      {/* Wire/String at the top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-slate-600 to-transparent" />

      {/* String of golden fairy lights hanging down */}
      <div className="flex justify-between items-end relative z-10 px-8">
        {Array.from({ length: bulbCount }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-px h-3 bg-slate-600" />
            {/* Alternate ON/OFF just like your original pattern */}
            <div className={`fairy-light-bulb ${index % 2 === 0 ? "fairy-light-on" : "fairy-light-off"}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

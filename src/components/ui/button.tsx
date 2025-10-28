import React from "react"
import { cn } from "@/lib/utils"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline"
  size?: "sm" | "md" | "lg"
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-md font-bold transition-all duration-200 shadow-[0_0_12px_rgba(255,255,255,0.15)] hover:shadow-[0_0_18px_rgba(255,255,255,0.25)]",
        {
          // 🔴 Solid red button
          "bg-[#8B1C26] text-white hover:bg-[#70161E]":
            variant === "primary",

          // ⚪ Outline button
          "border border-white text-white hover:bg-white":
            variant === "outline",
        },
        {
          // 📏 Size options
          "px-3 py-1 text-sm": size === "sm",
          "px-5 py-2 text-base": size === "md",
          "px-7 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

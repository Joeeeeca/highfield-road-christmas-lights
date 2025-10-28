import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind class names conditionally.
 * Example:
 * cn("px-4", isActive && "bg-blue-500")
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

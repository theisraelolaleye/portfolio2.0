"use client"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { MdDarkMode, MdLightMode } from "react-icons/md"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="p-2 rounded-md border border-gray-600 text-gray-300"
      >
        <MdDarkMode className="w-5 h-5" />
      </button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-md border border-gray-600 hover:border-white transition-colors text-gray-300 hover:text-white flex items-center gap-2"
    >
      {isDark ? (
        <MdLightMode className="w-5 h-5" />
      ) : (
        <MdDarkMode className="w-5 h-5" />
      )}
      <span className="text-xs md:text-sm">{isDark ? "Light" : "Dark"}</span>
    </button>
  )
}

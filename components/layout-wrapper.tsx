"use client"

import type React from "react"
import { AnimatePresence } from "framer-motion"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>
}

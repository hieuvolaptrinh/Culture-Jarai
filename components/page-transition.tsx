"use client"

import type React from "react"

import { motion } from "framer-motion"
import { pageTransitionVariants } from "@/lib/animations"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

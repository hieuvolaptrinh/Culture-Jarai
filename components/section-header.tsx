"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  number: string
  title: string
  subtitle?: string
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-6xl font-bold text-white/20">{number}</span>
        <h2 className="text-5xl md:text-6xl font-bold text-white border-b-2 border-gold pb-2">{title}</h2>
      </div>
      {subtitle && <p className="text-lg text-white/60 mt-4 max-w-2xl">{subtitle}</p>}
    </motion.div>
  )
}

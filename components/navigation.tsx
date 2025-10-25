"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Các di sản", href: "/di-san" },
    { label: "Thông tin", href: "/thong-tin" },
    { label: "Liên lạc", href: "/lien-he" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <Link href="/">
          <motion.div className="text-xl font-semibold tracking-widest text-foreground" whileHover={{ opacity: 0.7 }}>
            JRAI ETHNIC MUSUME
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.span
                className="text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors cursor-pointer"
                whileHover={{ y: -1 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-5 h-px bg-foreground"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          />
          <motion.div className="w-5 h-px bg-foreground" animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
          <motion.div
            className="w-5 h-px bg-foreground"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          />
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-6 p-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <span className="text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

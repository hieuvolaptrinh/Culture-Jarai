"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Thông tin", href: "/thong-tin" },
    { label: "Di sản", href: "/di-san" },
    { label: " Tìm hiểu thêm", href: "/tim-hieu" },
    { label: "Liên lạc", href: "/lien-he" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/10">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              🏛️
            </div>
            <motion.div
              className="text-lg font-bold tracking-wider bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hidden sm:block"
              whileHover={{ letterSpacing: "0.1em" }}
            >
              JRAI MUSEUM
            </motion.div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ y: -2 }}
              >
                <span className="text-sm font-medium tracking-wide text-foreground group-hover:text-primary transition-colors relative z-10">
                  {item.label}
                </span>
                <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/lien-he">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Badge className="bg-linear-to-r from-primary to-secondary text-primary-foreground px-4 py-2 cursor-pointer hover:shadow-lg hover:shadow-primary/30 transition-all">
                Liên hệ ngay
              </Badge>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 relative z-20"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-6 h-px bg-foreground rounded-full"
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <motion.div
            className="w-6 h-px bg-foreground rounded-full"
            animate={
              isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <motion.div
            className="w-6 h-px bg-foreground rounded-full"
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="absolute top-full left-0 right-0 bg-background border-b border-primary/10 backdrop-blur-md md:hidden overflow-hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
        }
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="flex flex-col gap-4 p-6 max-w-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <motion.span
                className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors block p-2 rounded-lg hover:bg-primary/5"
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
          <motion.div
            className="pt-4 border-t border-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/lien-he" onClick={() => setIsOpen(false)}>
              <Badge className="w-full justify-center bg-linear-to-r from-primary to-secondary text-primary-foreground cursor-pointer">
                Liên hệ ngay
              </Badge>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}

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
    { label: "Tìm hiểu thêm", href: "/tim-hieu" },
    { label: "Liên lạc", href: "/lien-he" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-background/70 border-b border-primary/30 shadow-lg shadow-primary/5">
      {/* Jrai Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="nav-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 10 L40 20 L30 30 L20 20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              />
              <circle
                cx="30"
                cy="20"
                r="2"
                fill="currentColor"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nav-pattern)" />
        </svg>
      </div>

      {/* Enhanced gradient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-24 bg-primary/15 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-24 bg-secondary/15 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-primary via-primary/80 to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all">
                🏛️
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/20 group-hover:border-primary/40 transition-colors" />
            </div>
            <div className="flex flex-col">
              <motion.span className="text-xl font-bold tracking-wide bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hidden sm:block">
                JRAI MUSEUM
              </motion.span>
              <span className="text-[10px] text-muted-foreground tracking-wider hidden md:block">
                VĂN HÓA DÂN GIAN
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                className="relative group cursor-pointer py-2"
                whileHover={{ y: -1 }}
              >
                <span className="text-sm font-medium tracking-wide text-foreground/90 group-hover:text-primary transition-colors relative z-10">
                  {item.label}
                </span>
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"
                  whileHover={{ scaleX: 1 }}
                  initial={{ scaleX: 0 }}
                />
                {/* Subtle glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/lien-he">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge className="relative bg-linear-to-r from-primary to-secondary text-primary-foreground px-5 py-2.5 cursor-pointer hover:shadow-xl hover:shadow-primary/40 transition-all overflow-hidden group">
                <span className="relative z-10 font-medium">Liên hệ ngay</span>
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                />
              </Badge>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col gap-1.5 relative z-20 p-2"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-6 h-0.5 bg-foreground rounded-full"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-foreground rounded-full"
            animate={
              isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-foreground rounded-full"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/20 md:hidden overflow-hidden shadow-xl"
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
        <div className="flex flex-col gap-2 p-6 max-w-sm">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="text-sm font-medium tracking-wide text-foreground hover:text-primary transition-colors p-3 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/20"
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 6 }}
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
          <motion.div
            className="pt-4 mt-2 border-t border-border/50"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/lien-he" onClick={() => setIsOpen(false)}>
              <Badge className="w-full justify-center bg-linear-to-r from-primary to-secondary text-primary-foreground cursor-pointer py-3 hover:shadow-lg hover:shadow-primary/30 transition-all">
                Liên hệ ngay
              </Badge>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}

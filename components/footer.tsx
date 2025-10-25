"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { label: "Exhibits", href: "/exhibits" },
        { label: "Gallery", href: "/gallery" },
        { label: "Collections", href: "/exhibits" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Mission", href: "/about" },
        { label: "Team", href: "/about" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Newsletter", href: "/contact" },
        { label: "Social Media", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-card border-t border-border/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainerVariants}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={staggerItemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Digital Museum
            </h3>
            <p className="text-muted-foreground">
              Immersive experiences through interactive art and motion storytelling.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={staggerItemVariants}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-muted-foreground hover:text-accent transition-colors">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">© {currentYear} Digital Museum. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

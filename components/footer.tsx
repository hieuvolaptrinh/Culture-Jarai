"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Khám phá",
      links: [
        { label: "Di sản văn học", href: "/di-san" },
      ],
    },
    {
      title: "Giới thiệu",
      links: [
        { label: "Về Bảo tàng Văn học Jrai", href: "/thong-tin" },
      ],
    },
    {
      title: "Liên hệ",
      links: [
        { label: "Thông tin liên lạc", href: "/lien-he" },
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
              Bảo tàng Văn học Jrai
            </h3>
            <p className="text-muted-foreground">
              Nơi lưu giữ, bảo tồn và lan tỏa giá trị văn học dân gian Jrai – kho tàng tri thức, tâm hồn và bản sắc văn hóa Tây Nguyên.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="text-white">
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
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Bảo tàng Văn học Jrai. Mọi quyền được bảo lưu.
          </p>
          <div className="text-muted-foreground text-sm leading-relaxed">
            <p>📞 Thông tin liên hệ:</p>
            <p>Đinh Đức Anh – 0394 834 694</p>
            <p>Rơ Lan H’ Rê Ny – 0362 745 894</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

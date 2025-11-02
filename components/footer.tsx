"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Khám phá",
      links: [
        { label: "Di sản văn học", href: "/di-san" },
        { label: "Ca dao", href: "/di-san/ca-dao" },
        { label: "Tục ngữ", href: "/di-san/tuc-ngu" },
      ],
    },
    {
      title: "Giới thiệu",
      links: [
        { label: "Về bảo tàng", href: "/thong-tin" },
        { label: "Giá trị cốt lõi", href: "/thong-tin#values" },
        { label: "Thành viên dự án", href: "/thong-tin#team" },
      ],
    },
    {
      title: "Liên hệ",
      links: [
        { label: "Gửi thông điệp", href: "/lien-he" },
        { label: "Câu hỏi thường gặp", href: "/lien-he#faq" },
        { label: "Hợp tác với chúng tôi", href: "/lien-he" },
      ],
    },
  ]

  const socialLinks = [
    { icon: "", label: "Blog", href: "#" },
    { icon: "", label: "Facebook", href: "#" },
    { icon: "", label: "Âm nhạc", href: "#" },
  ]

  return (
    <footer className="relative bg-background border-t border-primary/10 mt-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-12 border-b border-primary/10"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainerVariants}
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItemVariants} className="lg:col-span-1">
            <motion.div className="mb-4 inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                
              </div>
              <h3 className="text-lg font-bold tracking-wide">JRAI MUSEUM</h3>
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed">Lưu giữ và lan tỏa giá trị văn hóa Jrai qua công nghệ số.</p>
            <div className="flex gap-2 mt-6">
              {socialLinks.map((social) => (
                <motion.div key={social.label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link href={social.href}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                      {social.icon}
                    </Badge>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={staggerItemVariants}>
              <h4 className="font-semibold text-foreground mb-5 text-sm">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <motion.span className="text-muted-foreground text-sm hover:text-primary transition-colors" whileHover={{ x: 4 }}>
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-col md:flex-row justify-between items-center gap-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm mb-2"> {currentYear} Bảo Tàng Văn Học Dân Gian Jrai</p>
            <p className="text-xs text-muted-foreground/60">Bảo tồn và tôn vinh di sản văn hóa Jrai</p>
          </div>

          <motion.div className="text-center md:text-right" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center md:justify-end gap-4 text-sm">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Đinh Đức Anh</span>
                <span className="text-muted-foreground text-xs"> 0394 834 694</span>
              </div>
              <div className="w-px h-8 bg-border/50" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Rơ Lan H' Rê Ny</span>
                <span className="text-muted-foreground text-xs"> 0362 745 894</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

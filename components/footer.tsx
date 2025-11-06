"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Khám phá",
      links: [
        { label: "Di sản văn học", href: "/di-san" },
        { label: "Ca dao", href: "/di-san/ca-dao" },
        { label: "Tục ngữ", href: "/di-san/tuc-ngu" },
        { label: "Truyện dân gian", href: "/di-san/truyen-dan-gian" },
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
  ];

  const socialLinks = [
    { icon: "📝", label: "Blog", href: "#" },
    { icon: "👥", label: "Facebook", href: "#" },
    { icon: "🎵", label: "Âm nhạc", href: "#" },
  ];

  return (
    <footer className="relative bg-background/95 backdrop-blur-xl border-t border-primary/40 mt-24 overflow-hidden shadow-[0_-10px_60px_rgba(0,0,0,0.2)]">
      {/* Jrai Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="footer-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 10 L55 25 L40 40 L25 25 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              />
              <circle
                cx="40"
                cy="25"
                r="2.5"
                fill="currentColor"
                className="text-primary"
              />
              <path
                d="M20 60 Q30 55, 40 60 T60 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-secondary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* Enhanced ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-primary/20"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainerVariants}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={staggerItemVariants} className="lg:col-span-1">
            <motion.div className="mb-6 inline-flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary via-primary/80 to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
                  🏛️
                </div>
                <div className="absolute inset-0 rounded-xl border-2 border-primary/30" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold tracking-wide bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  JRAI MUSEUM
                </h3>
                <span className="text-[10px] text-muted-foreground tracking-wider">
                  VĂN HÓA DÂN GIAN
                </span>
              </div>
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Lưu giữ và lan tỏa giá trị văn hóa Jrai qua công nghệ số, kết nối
              quá khứ với hiện tại.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={social.href}>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 hover:border-primary/40 transition-all w-10 h-10 flex items-center justify-center p-0"
                      title={social.label}
                    >
                      <span className="text-base">{social.icon}</span>
                    </Badge>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={staggerItemVariants}>
              <h4 className="font-semibold text-foreground mb-5 text-sm tracking-wide flex items-center gap-2">
                <div className="w-1 h-4 bg-linear-to-b from-primary to-secondary rounded-full" />
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <motion.span
                        className="text-muted-foreground text-sm hover:text-primary transition-colors inline-flex items-center gap-2 group"
                        whileHover={{ x: 4 }}
                      >
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50 group-hover:bg-primary transition-colors" />
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm mb-1.5 flex items-center gap-2 justify-center md:justify-start">
              <span>©</span>
              <span>{currentYear}</span>
              <span className="text-primary">•</span>
              <span>Bảo Tàng Văn Học Dân Gian Jrai</span>
            </p>
            <p className="text-xs text-muted-foreground/70">
              Bảo tồn và tôn vinh di sản văn hóa Jrai
            </p>
          </div>

          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 text-sm">
              <div className="flex flex-col gap-1 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <span className="font-semibold text-foreground">
                  Đinh Đức Anh
                </span>
                <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                  <span>📞</span>
                  <span>0394 834 694</span>
                </span>
              </div>
              <div className="w-px h-12 bg-border/50 hidden sm:block" />
              <div className="flex flex-col gap-1 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <span className="font-semibold text-foreground">
                  Rơ Lan H' Rê Ny
                </span>
                <span className="text-muted-foreground text-xs flex items-center gap-1.5">
                  <span>📞</span>
                  <span>0362 745 894</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

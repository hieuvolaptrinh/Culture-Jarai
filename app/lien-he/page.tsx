"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { PageTransition } from "@/components/page-transition"
import { SectionHeader } from "@/components/section-header"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } catch {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { title: "Người liên hệ", value: "Đinh Đức Anh – 0394 834 694" },
    { title: "Người liên hệ", value: "Rơ Lan H’Rê Ny – 0362 745 894" },
    { title: "Email", value: "baotangjrai@museum.vn" },
    { title: "Địa điểm", value: "Pleiku, Gia Lai – Việt Nam" },
  ]

  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        {/* --- HERO --- */}
        <section className="relative h-96 flex items-center px-8 md:px-16 overflow-hidden border-b border-white/10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold border-b-4 border-gold pb-6 inline-block">
              Liên hệ
            </h1>
            <p className="text-lg text-foreground mt-8 max-w-2xl leading-relaxed">
              Nếu bạn có thắc mắc, mong muốn hợp tác hoặc đóng góp tư liệu cho dự án
              “Bảo tàng Văn học Jrai”, chúng tôi luôn sẵn lòng lắng nghe và đón nhận.
            </p>
          </motion.div>
        </section>

        {/* --- CONTACT INFO --- */}
        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-b border-white/10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} className="border-l-2 border-gold pl-8 py-4" variants={staggerItemVariants}>
                <p className="text-gold font-bold text-sm mb-3">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                <p className="text-foreground">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* --- CONTACT FORM --- */}
        <section className="px-8 md:px-16 py-32 max-w-4xl mx-auto border-b border-white/10">
          <SectionHeader number="01" title="Gửi thông điệp" />

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={staggerItemVariants}>
                <label className="block text-sm font-bold text-gold mb-4">Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-white/30 focus:border-gold outline-none transition-colors text-foreground placeholder:text-foreground/40"
                  placeholder="Nhập họ và tên của bạn"
                />
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <label className="block text-sm font-bold text-gold mb-4">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-white/30 focus:border-gold outline-none transition-colors text-foreground placeholder:text-foreground/40"
                  placeholder="example@email.com"
                />
              </motion.div>
            </div>

            <motion.div variants={staggerItemVariants}>
              <label className="block text-sm font-bold text-gold mb-4">Chủ đề</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-white/30 focus:border-gold outline-none transition-colors text-foreground placeholder:text-foreground/40"
                placeholder="Nội dung bạn muốn trao đổi"
              />
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <label className="block text-sm font-bold text-gold mb-4">Nội dung</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-0 py-3 bg-transparent border-b border-foreground focus:border-gold outline-none transition-colors text-foreground placeholder:text-foreground/40 resize-none"
                placeholder="Viết thông điệp của bạn..."
              />
            </motion.div>

            <motion.div variants={staggerItemVariants} className="pt-8">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 disabled:opacity-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Đang gửi..." : "Gửi thông điệp"}
              </motion.button>
            </motion.div>

            {/* Thông báo trạng thái */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: submitStatus !== "idle" ? 1 : 0,
                y: submitStatus !== "idle" ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
            >
              {submitStatus === "success" && (
                <div className="p-6 rounded-lg border border-gold/50 bg-gold/5 text-gold">
                  Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-6 rounded-lg border border-red-500/50 bg-red-500/5 text-red-500">
                  Có lỗi xảy ra, vui lòng thử lại sau.
                </div>
              )}
            </motion.div>
          </motion.form>
        </section>

        {/* --- FAQ --- */}
        <section className="px-8 md:px-16 py-32 max-w-4xl mx-auto">
          <SectionHeader number="02" title="Câu hỏi thường gặp" subtitle="Giải đáp một số thắc mắc phổ biến" />

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                q: "Bảo tàng có mở cửa cho công chúng tham quan trực tiếp không?",
                a: "Hiện tại, Bảo tàng Văn học Jrai hoạt động chủ yếu dưới hình thức trực tuyến. Mọi người có thể truy cập website để tìm hiểu, khám phá và đóng góp tư liệu.",
              },
              {
                q: "Tôi có thể gửi truyện, thơ hoặc tư liệu dân gian Jrai cho bảo tàng không?",
                a: "Rất hoan nghênh! Bạn có thể gửi qua biểu mẫu liên hệ hoặc email chính thức của bảo tàng. Mọi đóng góp đều được trân trọng và ghi nhận.",
              },
              {
                q: "Dự án có hợp tác với trường học hay tổ chức văn hóa không?",
                a: "Chúng tôi sẵn sàng hợp tác với các trường, viện nghiên cứu và tổ chức văn hóa trong công tác sưu tầm, giảng dạy và quảng bá văn học dân gian Jrai.",
              },
              {
                q: "Có thể sử dụng tư liệu của bảo tàng cho mục đích học tập không?",
                a: "Hoàn toàn được phép, miễn là ghi rõ nguồn “Bảo tàng Văn học Jrai”. Với mục đích thương mại, vui lòng liên hệ trước để được hướng dẫn cụ thể.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-white/10 pb-8 last:border-b-0"
                variants={staggerItemVariants}
              >
                <h3 className="text-xl font-bold mb-4 text-gold">{faq.q}</h3>
                <p className="text-foreground/70 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </PageTransition>
  )
}

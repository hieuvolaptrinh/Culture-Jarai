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
    { title: "Email", value: "hello@digitalmuseum.com" },
    { title: "Phone", value: "+1 (555) 123-4567" },
    { title: "Location", value: "San Francisco, CA" },
    { title: "Hours", value: "24/7 Online Access" },
  ]

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white">
        <section className="relative h-96 flex items-center px-8 md:px-16 overflow-hidden border-b border-white/10">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold border-b-4 border-gold pb-6 inline-block">Get In Touch</h1>
            <p className="text-xl text-white/70 mt-8 max-w-2xl">
              Have questions about our exhibits or want to collaborate? We'd love to hear from you.
            </p>
          </motion.div>
        </section>

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
                <p className="text-white/70">{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-4xl mx-auto border-b border-white/10">
          <SectionHeader number="01" title="Send a Message" />

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
                <label className="block text-sm font-bold text-gold mb-4">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-white/30 focus:border-gold outline-none transition-colors text-white placeholder:text-white/40"
                  placeholder="Your name"
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
                  className="w-full px-0 py-3 bg-transparent border-b border-white/30 focus:border-gold outline-none transition-colors text-white placeholder:text-white/40"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            <motion.div variants={staggerItemVariants}>
              <label className="block text-sm font-bold text-gold mb-4">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 bg-transparent border-b border-white/30 focus:border-gold outline-none transition-colors text-white placeholder:text-white/40"
                placeholder="What is this about?"
              />
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <label className="block text-sm font-bold text-gold mb-4">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-0 py-3 bg-transparent border-b border-white/30 focus:border-gold outline-none transition-colors text-white placeholder:text-white/40 resize-none"
                placeholder="Tell us more..."
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
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.div>

            {/* Status Messages */}
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
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-6 rounded-lg border border-red-500/50 bg-red-500/5 text-red-500">
                  Something went wrong. Please try again.
                </div>
              )}
            </motion.div>
          </motion.form>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-4xl mx-auto">
          <SectionHeader number="02" title="FAQ" subtitle="Frequently asked questions" />

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                q: "Is the museum free to access?",
                a: "Yes! Our digital museum is completely free and accessible 24/7 from anywhere in the world.",
              },
              {
                q: "Can I use the 3D models for commercial purposes?",
                a: "Please contact us for licensing information regarding commercial use of our 3D models.",
              },
              {
                q: "How often are new exhibits added?",
                a: "We add new exhibits and collections monthly. Subscribe to our newsletter for updates.",
              },
              {
                q: "Do you offer virtual tours?",
                a: "Yes! We offer guided virtual tours. Check our exhibits page for scheduled tour times.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-white/10 pb-8 last:border-b-0"
                variants={staggerItemVariants}
              >
                <h3 className="text-xl font-bold mb-4 text-gold">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </PageTransition>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

const exhibits = [
  {
    id: 1,
    title: "Ca dao",
    slug: "ca-dao",
    description: "Ca dao của người Jrai phản ánh triết lý sống, kinh nghiệm lao động, về mối quan hệ giữa con người với thiên nhiên hùng vĩ.",
    image: "/images/tho.jpg",
    color: "from-primary/20 to-primary/5",
    accent: "primary",
  },
  {
    id: 2,
    title: "Tục ngữ",
    slug: "tuc-ngu",
    description: " Thể loại sưu tầm tục ngữ thương là những câu nói ngắn gọn súc tích chứ đựng triết lý sống kinh nghiệm lao động ứng xử và giáo dục ông cha ta kể lại.",
    image: "/images/tucngu.jpg",
    color: "from-accent/20 to-accent/5",
    accent: "accent",
  },
  {
    id: 3,
    title: "Truyện dân gian",
    slug: "truyen-dan-gian",
    description: "Truyện dân gian Jrai mang phong cách mộc mạc nhưng giàu cảm xúc và nhân văn, thường chứa yếu tố kỳ ảo, siêu nhiên và thần thoại, phản ánh thế giới quan độc đáo của người Jrai.",
    image: "/images/truyeb.jpg",
    color: "from-secondary/20 to-secondary/5",
    accent: "secondary",
  }
]

export default function ExhibitsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Triển lãm văn học</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
            Khám phá di sản văn học Jrai qua không gian số – nơi câu chuyện cổ vang vọng trong từng nhịp công nghệ hiện đại.
            </p>
          </ScrollReveal>
        </section>

        {/* Exhibits Grid */}
        <section className="px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {exhibits.map((exhibit) => (
              <Link key={exhibit.id} href={`/di-san/${exhibit.slug}`}>
                <motion.div
                  className={`group cursor-pointer rounded-lg overflow-hidden bg-gradient-to-br ${exhibit.color} border border-border/50 hover:border-accent/50 transition-all duration-300`}
                  variants={staggerItemVariants}
                  whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(96, 165, 250, 0.1)" }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <motion.img
                      src={exhibit.image}
                      alt={exhibit.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {exhibit.title}
                    </motion.h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{exhibit.description}</p>

                    <motion.div
                      className="flex items-center gap-2 text-accent font-semibold"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      Explore
                      <span>→</span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </section>
      </main>
    </PageTransition>
  )
}

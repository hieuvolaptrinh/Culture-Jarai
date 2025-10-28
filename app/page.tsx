"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { ScrollReveal } from "@/components/scroll-reveal";
import JraiLifeSection from "@/components/JraiLife";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* ========== HERO SECTION ========== */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
        >
          {/* Background image with parallax */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/dangianjraibahnar.jpg')",
              scale,
            }}
          />

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full"
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <Badge
                    variant="outline"
                    className="border-primary/50 text-primary bg-primary/10 backdrop-blur-sm px-4 py-2 text-xs tracking-widest"
                  >
                    🏛️ BẢO TÀNG SỐ HÓA
                  </Badge>
                </motion.div>

                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                    Bảo Tàng
                  </span>
                  <br />
                  <span className="text-white">Văn Học Jrai</span>
                </motion.h1>

                <motion.div
                  className="flex items-center gap-3 text-sm text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                  <span className="tracking-wider">
                    Giữ hồn văn hóa, kể chuyện Jrai bằng ánh sáng số
                  </span>
                </motion.div>
              </div>

              <motion.p
                className="text-base md:text-xl font-light text-gray-200/90 max-w-3xl leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-lg border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Từ miền đất gió Lào và nắng cao nguyên, dân tộc Jrai đã dệt nên
                kho tàng văn học dân gian phong phú – từ ca dao, tục ngữ đến
                truyện kể và sử thi. Những lời ca, tiếng hát, câu nói vần ấy đã
                nuôi dưỡng tâm hồn bao thế hệ.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link href="/di-san">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold tracking-wide shadow-lg shadow-primary/20 group"
                  >
                    Khám phá di sản
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
                <Link href="/thong-tin">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm px-8 py-6 text-base font-semibold tracking-wide"
                  >
                    Tìm hiểu thêm
                  </Button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 pt-12 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {[
                  { number: "50+", label: "Ca dao" },
                  { number: "30+", label: "Tục ngữ" },
                  { number: "15+", label: "Truyện" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(255,255,255,0.3)",
                    }}
                  >
                    <div className="text-3xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10">
              <span className="text-xs font-light tracking-widest text-gray-200">
                KHÁM PHÁ
              </span>
              <svg
                className="w-4 h-4 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </section>

        {/* ========== EXHIBIT SECTIONS ========== */}
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge
                variant="outline"
                className="mb-6 border-primary/50 text-primary"
              >
                DI SẢN VĂN HỌC
              </Badge>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Kho Tàng Văn Học Jrai
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ba trụ cột văn học dân gian của người Jrai - nơi lưu giữ tinh
                hoa văn hóa cao nguyên
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Ca dao Jrai",
                description:
                  "Những bài ca mộc mạc, giàu hình ảnh và nhạc tính, thể hiện tình yêu quê hương, lao động và triết lý sống gắn bó với núi rừng.",
                image: "/images/tho.jpg",
                gradient: "from-primary/20 via-primary/10 to-transparent",
              },
              {
                number: "02",
                title: "Tục ngữ Jrai",
                description:
                  "Tục ngữ của người Jrai ngắn gọn, sâu sắc, chứa đựng kinh nghiệm lao động và ứng xử. Đó là kho tri thức dân gian kết tinh từ đời sống sản xuất.",
                image: "/images/tucngu.jpg",
                gradient: "from-secondary/20 via-secondary/10 to-transparent",
              },
              {
                number: "03",
                title: "Truyện dân gian Jrai",
                description:
                  "Từ huyền thoại tạo trời đất đến những chuyện tình, chuyện người, truyện dân gian Jrai là tấm gương phản chiếu tâm hồn.",
                image: "/images/truyeb.jpg",
                gradient: "from-accent/20 via-accent/10 to-transparent",
              },
            ].map((exhibit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 bg-card/50 backdrop-blur-sm h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={exhibit.image}
                      alt={exhibit.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${exhibit.gradient} to-background/80`}
                    />

                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-lg px-3 py-1"
                    >
                      {exhibit.number}
                    </Badge>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {exhibit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {exhibit.description}
                    </p>

                    <Link href="/di-san">
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all mt-4"
                      >
                        Khám phá
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <JraiLifeSection />

        {/* ========== CLOSING SECTION ========== */}
        <section className="py-32 px-4 md:px-8 border-t border-border relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <ScrollReveal>
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center space-y-8 mb-16">
                <Badge
                  variant="outline"
                  className="border-primary/50 text-primary"
                >
                  HÀNH TRÌNH KẾT NỐI DI SẢN
                </Badge>

                <motion.h2
                  className="text-5xl md:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Giữ hồn văn hóa,
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    Kể chuyện Jrai bằng ánh sáng số
                  </span>
                </motion.h2>

                <motion.p
                  className="text-lg md:text-xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Mỗi câu ca, mỗi lời nói vần là một ký ức sống động của dân
                  tộc. Hãy cùng chúng tôi bước vào hành trình gìn giữ và lan tỏa
                  tinh hoa văn học Jrai trong kỷ nguyên kỹ thuật số.
                </motion.p>
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/di-san">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg font-semibold tracking-wide shadow-lg shadow-primary/20"
                  >
                    Bắt đầu hành trình khám phá
                    <motion.span
                      className="ml-2 inline-block text-xl"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>

          <motion.div
            className="text-center mt-24 text-sm text-muted-foreground space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold">Thông tin liên hệ</p>
            <p>Đinh Đức Anh – 0394834694 | Rơ Lan H' Rê Ny – 0362745894</p>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}

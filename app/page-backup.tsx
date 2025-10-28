"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { ScrollReveal } from "@/components/scroll-reveal";
import JraiLifeSection from "@/components/JraiLife";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* ========== HERO SECTION ========== */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/dangianjraibahnar.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.p
                  className="text-sm font-light tracking-widest text-gray-300 uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Chào mừng đến với
                </motion.p>

                <motion.h1
                  className="text-7xl md:text-8xl lg:text-7xl font-bold leading-none tracking-tight text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Bảo Tàng Văn Học Jrai
                </motion.h1>
              </div>

              <motion.p
                className="text-md md:text-lg font-light text-gray-200 max-w-4xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Từ miền đất gió Lào và nắng cao nguyên, dân tộc Jrai đã dệt nên
                kho tàng văn học dân gian phong phú – từ ca dao, tục ngữ đến
                truyện kể và sử thi. Những lời ca, tiếng hát, câu nói vần ấy đã
                nuôi dưỡng tâm hồn bao thế hệ, phản ánh tình yêu thiên nhiên,
                lao động và con người. “Bảo tàng Văn học Jrai” ra đời nhằm lưu
                giữ, số hóa và lan tỏa di sản ngôn từ ấy trong không gian hiện
                đại, giúp người trẻ tìm lại mạch nguồn văn hóa của mình.
              </motion.p>

              <motion.div
                className="flex gap-8 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link href="/di-san">
                  <motion.button
                    className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Khám phá di sản
                  </motion.button>
                </Link>
                <Link href="/thong-tin">
                  <motion.button
                    className="px-8 py-4 border border-white text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Tìm hiểu thêm
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-light tracking-widest text-gray-300">
                SCROLL
              </span>
              <svg
                className="w-5 h-5 text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </section>

        {/* ========== EXHIBIT SECTIONS ========== */}
        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="space-y-32">
            {[
              {
                number: "02",
                title: "Ca dao Jrai",
                description:
                  "Những bài ca mộc mạc, giàu hình ảnh và nhạc tính, thể hiện tình yêu quê hương, lao động và triết lý sống gắn bó với núi rừng. Mỗi lời ca là một khúc tâm tình, một cách người Jrai gửi gắm niềm tin và khát vọng.",
                image: "/images/tho.jpg",
              },
              {
                number: "03",
                title: "Tục ngữ Jrai",
                description:
                  "Tục ngữ của người Jrai ngắn gọn, sâu sắc, chứa đựng kinh nghiệm lao động và ứng xử. Đó là kho tri thức dân gian kết tinh từ đời sống sản xuất và quan hệ cộng đồng qua bao thế hệ.",
                image: "/images/tucngu.jpg",
              },
              {
                number: "04",
                title: "Truyện dân gian Jrai",
                description:
                  "Từ huyền thoại tạo trời đất đến những chuyện tình, chuyện người, truyện dân gian Jrai là tấm gương phản chiếu tâm hồn – nơi cái thiện, cái đẹp và lòng nhân ái luôn được tôn vinh.",
                image: "/images/truyeb.jpg",
              },
            ].map((exhibit, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <p className="text-sm font-light tracking-widest text-muted-foreground">
                    {exhibit.number}
                  </p>
                  <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                    {exhibit.title}
                  </h2>
                  <p className="text-lg font-light text-muted-foreground leading-relaxed max-w-lg">
                    {exhibit.description}
                  </p>
                  <Link href="/di-san">
                    <motion.button
                      className="inline-flex items-center gap-3 text-sm font-light tracking-wide text-foreground hover:text-primary transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      Khám phá ngay
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  </Link>
                </motion.div>

                <motion.div
                  className={`relative h-96 md:h-full min-h-96 overflow-hidden group ${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.img
                    src={exhibit.image}
                    alt={exhibit.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
        <JraiLifeSection />

        {/* ========== CLOSING SECTION ========== */}
        <section className="py-32 px-4 md:px-8 border-t border-border">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.p
                className="text-sm font-light tracking-widest text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                05 / HÀNH TRÌNH KẾT NỐI DI SẢN
              </motion.p>
              <motion.h2
                className="text-6xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Giữ hồn văn hóa
                <br />
                <span className="border-b-4 border-primary pb-4">
                  Kể chuyện Jrai bằng ánh sáng số
                </span>
              </motion.h2>
              <motion.p
                className="text-lg font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Mỗi câu ca, mỗi lời nói vần là một ký ức sống động của dân tộc.
                Hãy cùng chúng tôi bước vào hành trình gìn giữ và lan tỏa tinh
                hoa văn học Jrai trong kỷ nguyên kỹ thuật số.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link href="/di-san">
                  <motion.button
                    className="px-10 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Bắt đầu hành trình khám phá
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>

          <div className="text-center mt-24 text-sm text-muted-foreground">
            Thông tin liên hệ: Đinh Đức Anh – 0394834694 | Rơ Lan H’ Rê Ny –
            0362745894
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

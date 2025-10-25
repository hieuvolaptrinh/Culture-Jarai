"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageTransition } from "@/components/page-transition";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground overflow-hidden">
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/dangianjraibahnar.jpg')", // ✅ Put image in /public/images
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

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
                  className="text-sm font-light tracking-widest text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  01 / Chào Mừng Đến Với
                </motion.p>

                <motion.h1
                  className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Bảo Tàng
                  <br />
                  <span className="border-b-4 border-primary pb-4">
                    Văn Học
                  </span>
                  <br />
                  Jrai
                </motion.h1>
              </div>

              <motion.p
                className="text-md md:text-lg font-light text-gray-200 max-w-5xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Văn học dân gian Jrai – những câu chuyện và lời kể truyền miệng
                qua bao thế hệ – đang dần bị lãng quên giữa nhịp sống hiện đại.
                Từ trăn trở ấy, dự án “Bảo tàng Văn học Jrai” ra đời với mục
                tiêu sưu tầm, lưu giữ và lan tỏa kho tàng văn học dân gian trên
                nền tảng số. Dù gặp nhiều khó khăn về tư liệu và nhận thức cộng
                đồng, dự án vẫn nỗ lực trở thành cầu nối văn hóa, giúp học sinh
                và người dân hiểu, trân trọng và tự hào hơn về di sản tinh thần
                của dân tộc Jrai.{" "}
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
                    Khám phá
                  </motion.button>
                </Link>
                <Link href="/about">
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

          {/* Scroll Indicator */}
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

        <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="space-y-32">
            {[
              {
                number: "02",
                title: "Ca dao của người Jrai",
                description:
                  "Ca dao của người Jrai phản ánh triết lý sống, kinh nghiệm lao động, về mối quan hệ giữa con người với thiên nhiên hùng vĩ.",
                image: "/images/tho.jpg",
              },
              {
                number: "03",
                title: "Tục ngữ của người Jrai",
                description:
                  "Thể loại sưu tầm tục ngữ thương là những câu nói ngắn gọn súc tích chứ đựng triết lý sống kinh nghiệm lao động ứng xử và giáo dục ông cha ta kể lại.",
                image: "/images/tucngu.jpg",
              },
              {
                number: "04",
                title: "Truyện dân gian của người Jrai",
                description:
                  "Truyện dân gian Jrai mang phong cách mộc mạc nhưng giàu cảm xúc và nhân văn, thường chứa yếu tố kỳ ảo, siêu nhiên và thần thoại, phản ánh thế giới quan độc đáo của người Jrai.",
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
                  {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" /> */}
                  {/* <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div> */}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

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
                05 / SẴN SÀNG ĐỂ KHÁM PHÁ
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
                Kể chuyện Jrai bằng ánh sáng số</span>
              </motion.h2>
              <motion.p
                className="text-lg font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Khám phá di sản văn học Jrai qua không gian số – nơi câu chuyện cổ vang vọng trong từng nhịp công nghệ hiện đại
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
                    Bắt đầu hành trình khám giá nào
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </PageTransition>
  );
}

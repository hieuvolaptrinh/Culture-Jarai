"use client";

import type React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

// Định nghĩa lại màu Gold cho TailwindCSS nếu chưa có (theo theme bạn cung cấp)
const GOLD_COLOR = "hsl(80 15% 60% / 1)";

// Dữ liệu mẫu về Văn hóa Jrai
const jraiSections = [
  {
    icon: "🏠",
    title: "Kiến trúc Nhà dài (Sang Jrai)",
    subtitle: "Nét đặc trưng của cộng đồng",
    description:
      "Nhà dài truyền thống là biểu tượng mạnh mẽ của văn hóa mẫu hệ Jrai, nơi nhiều thế hệ cùng sinh sống. Nó thể hiện sự **đoàn kết** và cách thức **phân chia không gian** dựa trên vai trò giới tính và tuổi tác.",
    image: "/images/att.4_RS68Pwde1wDbVZxxgbky8HOGnym4Dn1HoFOiev_C0.JPG",
    link: "#architecture",
  },
  {
    icon: "🎶",
    title: "Âm nhạc Cồng chiêng",
    subtitle: "Hồn thiêng Tây Nguyên",
    description:
      "Cồng chiêng không chỉ là nhạc cụ mà còn là tài sản thiêng liêng. Bộ cồng chiêng được coi là **tiếng nói của thần linh (Giàng)**, sử dụng trong các nghi lễ cầu mùa, tang lễ và lễ hội cộng đồng lớn.",
    image: "/images/att.SpU9U0BH8lJIKIUdo22m1d8JiqTQt6HpeTyuKg76Znk.JPG",
    link: "#music",
  },
  {
    icon: "👘",
    title: "Trang phục & Dệt thổ cẩm",
    subtitle: "Màu sắc của núi rừng",
    description:
      "Thổ cẩm Jrai có hoa văn **hình học và nhân tạo** (hình người, chim), mang đậm tính biểu tượng. Màu sắc chủ đạo là đen, đỏ và vàng, phản ánh thế giới quan và mối quan hệ với tự nhiên.",
    image: "/images/IMG_4716.JPG",
    link: "#textile",
  },
  {
    icon: "🍖",
    title: "Phong tục & Ẩm thực",
    subtitle: "Lễ Pơ Thi và rượu Cần",
    description:
      "Lễ Pơ Thi (**Bỏ Mả**) là nghi lễ lớn nhất, đánh dấu sự chia lìa vĩnh viễn với người chết. Rượu Cần là thức uống truyền thống, là sợi dây kết nối mọi người trong các dịp lễ hội và đàm đạo.",
    image: "/images/att.fMEjWtollSYB7kExfbhIZi1Y-Ll3KVW5OKsglvsHaAI.JPG",
    link: "#rituals",
  },
];

// Dữ liệu mới cho phần Văn học Dân gian
const literatureSections = [
  {
    title: "Sử thi (H'mon)",
    detail:
      "Kho tàng sử thi khổng lồ, được truyền khẩu qua các thế hệ nghệ nhân (H’bel). Nội dung thường kể về các anh hùng khai thiên lập địa, chiến đấu với quỷ dữ và xây dựng buôn làng.",
    emoji: "📖",
  },
  {
    title: "Truyện cổ (Kleă kơpal)",
    detail:
      "Chủ yếu là các truyện thần thoại, truyền thuyết về nguồn gốc loài người, các loài vật và hiện tượng tự nhiên, mang tính giáo dục sâu sắc về đạo lý và lối sống.",
    emoji: "🗣️",
  },
  {
    title: "Ca dao, Tục ngữ (Hri)",
    detail:
      "Các bài ca vần điệu ngắn gọn, bao gồm lời ru, hát đối đáp, và những câu nói đúc kết kinh nghiệm sống, thể hiện tình yêu đôi lứa và triết lý dân gian.",
    emoji: "🎤",
  },
];

export default function JraiCulturePage() {
  return (
    <PageTransition>
      <main className="min-h-screen text-foreground">
        {/* --- HERO: GIỚI THIỆU CHUNG --- */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-primary/40 via-background/95 to-secondary/40" />
            <div className="absolute inset-0 bg-linear-to-tr from-accent/20 via-transparent to-primary/20 " />
          </div>

          {/* Geometric Pattern Layer */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L70 30 L50 50 L30 30 Z M10 50 L30 70 L50 50 L30 30 Z M50 50 L70 70 L90 50 L70 30 Z' fill='none' stroke='%23000' stroke-width='0.5' opacity='0.3'/%3E%3Ccircle cx='50' cy='30' r='3' fill='%23000' opacity='0.2'/%3E%3Ccircle cx='30' cy='50' r='3' fill='%23000' opacity='0.2'/%3E%3Ccircle cx='70' cy='50' r='3' fill='%23000' opacity='0.2'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Animated Dots Pattern */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating Gradient Orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-[100px]"
            animate={{
              y: [0, -50, 0],
              x: [0, -30, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/20 rounded-full blur-[90px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Glass Morphism Overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-background/10" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Badge
                variant="outline"
                className="border-primary/50 text-primary bg-primary/10 backdrop-blur-sm px-4 py-2 text-sm"
              >
                TÌM HIỂU VĂN HÓA JRAI
              </Badge>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Văn hóa
                </span>
                <br />
                <span className="text-foreground">Jrai</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Dân tộc Jrai (Gia Rai) là một trong những dân tộc có dân số đông
                nhất tại Tây Nguyên, Việt Nam. Văn hóa Jrai là sự kết tinh của
                tinh thần cộng đồng, phong tục độc đáo và mối quan hệ gắn bó với
                thiên nhiên hùng vĩ.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}

        {/* --- SECTION 1: CÁC KHÍA CẠNH VĂN HÓA CHỦ ĐẠO (GRID CARDS) --- */}
        <section className="px-8 md:px-16 py-20 max-w-7xl mx-auto border-b border-border">
          <SectionHeader
            number="01"
            title="Khám phá các khía cạnh"
            subtitle="Từ kiến trúc đến âm nhạc, đi sâu vào tâm hồn Jrai"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {jraiSections.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className="bg-card shadow-lg rounded-2xl overflow-hidden group border border-border transition-all duration-300 hover:shadow-xl hover:border-primary"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/50 to-transparent p-6 flex flex-col justify-end">
                    <span className="text-4xl mb-2 text-white">
                      {item.icon}
                    </span>{" "}
                    {/* Đổi màu icon trên nền ảnh */}
                    <p className="text-sm font-semibold uppercase tracking-wider text-background/80">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  {/* <a 
                    href={item.link}
                    className="inline-flex items-center text-primary font-bold transition-colors hover:text-foreground"
                  >
                    Xem chi tiết
                    <span className="ml-2">→</span>
                  </a> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ------------------------------------------------------------- */}

        {/* --- NEW SECTION 2: VĂN HỌC DÂN GIAN --- */}
        <section className="px-8 md:px-16 py-20 max-w-7xl mx-auto border-b border-border">
          <SectionHeader
            number="02"
            title="Văn học Dân gian"
            subtitle="Tiếng nói của đại ngàn được lưu giữ qua Truyền khẩu"
          />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={staggerItemVariants}
              className="lg:col-span-1"
            >
              <h3 className="text-4xl font-bold mb-6 text-foreground">
                Kho tàng Sử thi và Truyện cổ Jrai
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Văn học truyền miệng là cột mốc quan trọng trong việc bảo tồn
                lịch sử và triết lý Jrai. Những câu chuyện này không chỉ là giải
                trí mà còn là sách giáo khoa về thế giới và thần linh.
              </p>
            </motion.div>

            <div className="lg:col-span-2 space-y-8">
              {literatureSections.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-2xl font-bold mb-3 flex items-center">
                    <span className="text-3xl mr-3 text-primary">
                      {item.emoji}
                    </span>{" "}
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-10">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------- */}

        {/* --- SECTION 3: GIÁ TRỊ CỐT LÕI (Cũ) --- */}
        <section className="px-8 md:px-16 py-20 max-w-7xl mx-auto border-b border-border">
          <SectionHeader
            number="03"
            title="Giá trị cốt lõi"
            subtitle="Những điều làm nên bản sắc văn hóa Jrai"
          />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              variants={staggerItemVariants}
              className="lg:col-span-1"
            >
              <h3 className="text-4xl font-bold mb-6 text-foreground">
                Triết lý sống gắn liền với thiên nhiên
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Người Jrai tin vào thần linh tự nhiên (Giàng) và duy trì sự cân
                bằng với rừng núi. Điều này được thể hiện qua mọi khía cạnh, từ
                kiến trúc nhà ở đến các nghi lễ nông nghiệp.
              </p>
            </motion.div>

            <div className="lg:col-span-2 space-y-8">
              {[
                {
                  title: "Tín ngưỡng đa thần",
                  detail:
                    "Thờ cúng các thần Giàng (Trời), thần Đất, thần Nước, và các linh hồn tổ tiên. Tín ngưỡng là trung tâm của đời sống tinh thần.",
                  emoji: "✨",
                },
                {
                  title: "Mẫu hệ",
                  detail:
                    "Vai trò của người phụ nữ trong gia đình và xã hội được đề cao. Con cái mang họ mẹ và việc hôn nhân thường là 'bắt chồng'.",
                  emoji: "👩‍👧‍👦",
                },
                {
                  title: "Văn học Truyền miệng",
                  detail:
                    "Giữ gìn kho tàng sử thi, truyện cổ, và ca dao (Hri) phong phú, được truyền từ đời này sang đời khác.",
                  emoji: "📜",
                },
                {
                  title: "Lễ hội Cộng đồng",
                  detail:
                    "Các lễ hội thường niên như Lễ ăn trâu (Koh Kông) và Lễ hội Mừng lúa mới là dịp để cả làng cùng nhau gắn kết và tạ ơn Giàng.",
                  emoji: "🥁",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItemVariants}
                  className="border-l-4 border-primary pl-6 py-2"
                >
                  <h4 className="text-xl font-bold mb-2 flex items-center">
                    <span className="text-2xl mr-3 text-primary">
                      {item.emoji}
                    </span>{" "}
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------- */}

        {/* --- NEW SECTION 4: KÊU GỌI HÀNH ĐỘNG 2 (Bảo tồn) --- */}
        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto text-center">
          <SectionHeader
            number="04"
            title="Bảo tồn di sản"
            subtitle="Chung tay giữ gìn những giá trị văn hóa độc đáo"
          />
          <motion.div
            className="max-w-4xl mx-auto mt-16 p-12 bg-secondary text-secondary-foreground rounded-2xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-semibold mb-6">
              Dự án Bảo tàng Văn học Jrai là nỗ lực số hóa và bảo tồn kho tàng
              văn hóa dân tộc trong bối cảnh hiện đại. Sự tham gia của bạn là
              chìa khóa để giữ lửa truyền thống.
            </p>
            <motion.button
              className="mt-6 px-10 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
            >
              Tìm hiểu cách tham gia dự án →
            </motion.button>
          </motion.div>
        </section>

        {/* ------------------------------------------------------------- */}

        {/* --- FOOTER CTA (Cũ) --- */}
        <section className="px-8 md:px-16 py-20">
          <motion.div
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between p-10 rounded-xl border border-primary/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Đóng góp tư liệu
              </h3>
              <p className="text-muted-foreground">
                Bạn có tài liệu, hình ảnh hay câu chuyện về Jrai? Hãy chia sẻ
                cùng chúng tôi!
              </p>
            </div>
            <motion.button
              className="mt-6 md:mt-0 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Gửi tư liệu ngay →
            </motion.button>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}

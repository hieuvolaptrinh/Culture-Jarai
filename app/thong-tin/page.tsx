"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Constume3D from "@/components/section/home/costume.3d";

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<any>(null);

  const mediaItems = [
    {
      type: "image",
      // title: "Không gian sinh hoạt cộng đồng Jrai",
      src: "/images/att.vRN2nLAmUi2T-Pb8qwQU7EuHsvqbl5QMKr2Zt7bmhl8.JPG",
    },
    {
      type: "image",
      // title: "Chiêng Jrai trong lễ hội mùa",
      src: "/images/att.wLKsB8WmBgAQaB6A043eF5__0XJaINQkyiEpHTzDoBA.JPG",
    },
    {
      type: "video",
      // title: "Lễ hội mừng lúa mới của người Jrai",
      src: "/images/video/IMG_3209.MOV",
    },
    {
      type: "video",
      // title: "Trang phục truyền thống Jrai",
      src: "/images/video/IMG_3213.MOV",
    },
    {
      type: "video",
      // title: "Nghệ nhân trình diễn cồng chiêng",
      src: "/images/video/IMG_3208.MOV",
    },
  ];
  const team = [
    {
      name: "Đinh Đức Anh",
      role: "Trưởng nhóm",
      bio: "Phụ trách sưu tầm, biên tập và triển khai kỹ thuật dự án",
    },
    {
      name: "Rơ Lan H’ Rê Ny",
      role: "Thành viên",
      bio: "Thu thập, dịch và biên soạn nội dung ca dao tục ngữ Jrai",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Bảo tồn văn hóa",
      description:
        "Gìn giữ, sưu tầm và lan tỏa kho tàng văn học dân gian Jrai — di sản tinh thần quý báu của đồng bào Tây Nguyên.",
    },
    {
      number: "02",
      title: "Giáo dục và cộng đồng",
      description:
        "Tạo cầu nối giúp học sinh, giáo viên và người dân tiếp cận, học tập và tự hào về văn hóa Jrai thông qua công nghệ số.",
    },
    {
      number: "03",
      title: "Đổi mới sáng tạo",
      description:
        "Ứng dụng công nghệ hiện đại để kể lại câu chuyện Jrai bằng ánh sáng số, mang hơi thở truyền thống vào không gian số.",
    },
    {
      number: "04",
      title: "Tôn vinh bản sắc",
      description:
        "Khẳng định giá trị văn hóa Jrai giữa nhịp sống hiện đại – nơi quá khứ và hiện tại cùng song hành qua nghệ thuật kể chuyện.",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen text-foreground relative overflow-hidden">
        {/* Background decorations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            className="absolute -top-40 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-8 md:px-16 overflow-hidden pt-24">
          {/* Advanced Gradient Layers */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-primary/45 via-background/95 to-secondary/45" />
            <div className="absolute inset-0 bg-linear-to-tr from-accent/25 via-transparent to-primary/25" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/50 to-background/80" />
          </div>

          {/* Sophisticated Pattern Layer */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='jrai-pattern' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M30 5 L45 20 L30 35 L15 20 Z' fill='none' stroke='%23000' stroke-width='0.5' opacity='0.3'/%3E%3Ccircle cx='30' cy='20' r='2' fill='%23000' opacity='0.2'/%3E%3Cpath d='M0 30 Q15 25, 30 30 T60 30' fill='none' stroke='%23000' stroke-width='0.8' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23jrai-pattern)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Mesh Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px), radial-gradient(circle at 80% 50%, currentColor 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Dynamic Animated Orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-[550px] h-[550px] bg-primary/35 rounded-full blur-[140px]"
            animate={{
              y: [0, 70, 0],
              x: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/35 rounded-full blur-[130px]"
            animate={{
              y: [0, -70, 0],
              x: [0, -50, 0],
              scale: [1.3, 1, 1.3],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-accent/25 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Premium Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-[1.5px] bg-background/8" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
                <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                  🏛️ BẢO TÀNG VĂN HỌC JRAI
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <motion.span
                  className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: [
                      "0% center",
                      "100% center",
                      "0% center",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Gìn Giữ Di Sản
                </motion.span>
                <br />
                <span className="text-foreground">Văn Hóa Jrai</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Nơi lưu trữ, bảo tồn và lan tỏa kho tàng trí tuệ từng thế hệ của
                đồng bào Jrai – nơi câu chuyện cổ xưa vang vọng trong nhịp sống
                hiện đại
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-foreground">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-foreground">01</span>
                <h2 className="text-5xl font-bold border-b-2 border-gold pb-2">
                  Giới Thiệu Dự Án
                </h2>
              </div>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Văn học dân gian Jrai — những câu chuyện, lời kể được truyền
                miệng qua bao thế hệ — đang dần bị quên lãng giữa nhịp sống hiện
                đại. Xuất phát từ trăn trở ấy, dự án “Bảo tàng Văn học Jrai” ra
                đời với mục tiêu sưu tầm, lưu giữ và lan tỏa kho tàng văn học
                dân gian của người Jrai trên nền tảng số.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Dự án không chỉ hỗ trợ học tập mà còn là bước nhỏ nhưng ý nghĩa
                trong hành trình bảo tồn và tôn vinh bản sắc văn hóa dân tộc nơi
                đại ngàn Tây Nguyên.
              </p>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/images/att.e7XvYZwWruOMQpgkpODDYrzP4XC6WhemvGiCzh2lCq4.JPG"
                alt="Jrai Museum"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* VALUES */}
        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <SectionHeader number="02" title="Giá Trị Cốt Lõi" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-foreground pl-8 py-4 hover:pl-12 transition-all duration-300"
                variants={staggerItemVariants}
              >
                <p className="text-foreground font-bold text-sm mb-2">
                  {value.number}
                </p>
                <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                <p className="text-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* SKETCHFAB MODEL */}
        {/* SKETCHFAB MODEL */}
        <Constume3D />
        {/* TEAM */}
        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <SectionHeader number="04" title="Thành Viên Dự Án" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group"
                variants={staggerItemVariants}
              >
                <div className="relative h-64 rounded-lg overflow-hidden mb-6 bg-foreground">
                  <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white/20 group-hover:text-gold/40 transition-colors">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-gold transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-foreground text-center mt-16">
            <p>Thông tin liên hệ:</p>
            <p>📞 Đinh Đức Anh — 0394 834 694</p>
            <p>📞 Rơ Lan H’ Rê Ny — 0362 745 894</p>
          </div>
        </section>

        {/* FOOTER TEXT */}
        <section className="px-8 md:px-16 py-32 text-center border-t border-white/10">
          <motion.p
            className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ca dao, tục ngữ của người Jrai không chỉ là lời nói dân gian đơn
            thuần mà còn là tinh hoa văn hóa — phản ánh tâm hồn, phong tục và
            giá trị sống của cộng đồng Jrai giữa đại ngàn Tây Nguyên.
          </motion.p>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <SectionHeader number="05" title="Tư Liệu Hình Ảnh & Video" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {mediaItems.map((item, i) => (
              <motion.div
                key={i}
                className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white/5"
                variants={staggerItemVariants}
                onClick={() => {
                  setActiveMedia(item);
                  setOpen(true);
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.src}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls={false}
                    muted
                    loop
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {/* <p className="text-gold font-semibold">{item.title}</p> */}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dialog xem ảnh / video chi tiết */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-full min-w-full sm:min-w-[900px] bg-background border-0 p-0 overflow-hidden">
              {activeMedia && activeMedia.type === "image" && (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.title}
                  className="w-full h-auto object-contain"
                />
              )}
              {activeMedia && activeMedia.type === "video" && (
                <video
                  src={activeMedia.src}
                  controls={false}
                  autoPlay
                  className="w-full h-auto object-contain"
                />
              )}
            </DialogContent>
          </Dialog>
        </section>
      </main>
    </PageTransition>
  );
}

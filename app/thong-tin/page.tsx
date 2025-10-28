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
      <main className="min-h-screen bg-background text-foreground">
        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-0" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/dangianjraibahnar.jpg')" }}
          />

          <motion.div
            className="relative z-10 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 border-b-4 border-foreground pb-6 inline-block">
              Bảo Tàng Văn Học Jrai
            </h1>
            <p className="text-2xl text-foreground leading-relaxed max-w-2xl mt-8">
              Giữ hồn văn hóa, kể chuyện Jrai bằng ánh sáng số — nơi câu chuyện
              cổ vang vọng trong từng nhịp công nghệ hiện đại.
            </p>
          </motion.div>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
        <section className="px-8 md:px-16 py-32 max-w-6xl mx-auto border-t border-white/10 text-center">
          <SectionHeader number="03" title="Hiện Vật Tiêu Biểu" />

          {/* Mô hình 1: Bộ quần áo nam Jrai */}
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg border border-white/10 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Bộ quần áo nam Jrai"
              src="https://sketchfab.com/models/56692ff0eb3f48df868022fa8b21cb32/embed?transparent=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              style={{
                width: "100%",
                height: "600px",
                borderRadius: "16px",
              }}
            ></iframe>
          </motion.div>
          <p className="text-foreground mt-8 mb-24 text-lg italic">
            “Bộ quần áo nam Jrai” – biểu tượng của đời sống, lao động và bản sắc
            văn hóa Jrai.
          </p>

          {/* Mô hình 2: Bộ quần áo nữ Jrai */}
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Bộ quần áo nữ Jrai"
              src="https://sketchfab.com/models/a088712ca8094ebdbec7e84ddff3cea3/embed?transparent=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              style={{
                width: "100%",
                height: "600px",
                borderRadius: "16px",
              }}
            ></iframe>
          </motion.div>
          <p className="text-foreground mt-8 mb-24 text-lg italic">
            “Bộ quần áo nữ Jrai” – trang phục truyền thống thể hiện nét duyên
            dáng và tinh thần của người phụ nữ Jrai.
          </p>

          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              title="73. Cồng 1 (Bộ chiêng Kơ đơ)"
              src="https://sketchfab.com/models/8b88cf4cd0b043c48d362f6df57f74b2/embed?transparent=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              style={{
                width: "100%",
                height: "600px",
                borderRadius: "16px",
              }}
            ></iframe>
          </motion.div>
          <p className="text-foreground mt-8 mb-24 text-lg italic">
            “Bộ chiêng” là nhạc cụ truyền thống gắn liền với đời sống tinh thần
            của người Jrai, tượng trưng cho sự đoàn kết, niềm vui và bản sắc văn
            hóa cộng đồng nơi đại ngàn Tây Nguyên.
          </p>

          <motion.div
            className="relative rounded-xl overflow-hidden shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Hiện vật Công cụ lao động 8"
              src="https://sketchfab.com/models/7443b4defccb48c99eb445626b859793/embed?transparent=1&ui_infos=0&ui_watermark_link=0&ui_watermark=0"
              frameBorder="0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              style={{
                width: "100%",
                height: "600px",
                borderRadius: "16px",
              }}
            ></iframe>
          </motion.div>
          <p className="text-foreground mt-8 mb-24 text-lg italic">
            “Công cụ lao động” phản ánh đời sống sản xuất giản dị nhưng đầy sáng
            tạo của người Jrai. Mỗi dụng cụ không chỉ phục vụ sinh hoạt hàng
            ngày mà còn thể hiện tri thức, kinh nghiệm và mối gắn kết hài hòa
            giữa con người với thiên nhiên đại ngàn.
          </p>
        </section>

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
            <DialogContent className="min-w-[900px] bg-black/90 border-none p-0 overflow-hidden">
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
                  controls
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

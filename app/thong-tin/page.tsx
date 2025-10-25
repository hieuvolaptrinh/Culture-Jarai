"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

export default function AboutPage() {
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
      <main className="min-h-screen bg-black text-white">
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
            <h1 className="text-6xl md:text-8xl font-bold mb-8 border-b-4 border-gold pb-6 inline-block">
              Bảo Tàng Văn Học Jrai
            </h1>
            <p className="text-2xl text-white/80 leading-relaxed max-w-2xl mt-8">
              Giữ hồn văn hóa, kể chuyện Jrai bằng ánh sáng số — nơi câu chuyện
              cổ vang vọng trong từng nhịp công nghệ hiện đại.
            </p>
          </motion.div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-white/20">01</span>
                <h2 className="text-5xl font-bold border-b-2 border-gold pb-2">
                  Giới Thiệu Dự Án
                </h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Văn học dân gian Jrai — những câu chuyện, lời kể được truyền
                miệng qua bao thế hệ — đang dần bị quên lãng giữa nhịp sống hiện
                đại. Xuất phát từ trăn trở ấy, dự án “Bảo tàng Văn học Jrai” ra
                đời với mục tiêu sưu tầm, lưu giữ và lan tỏa kho tàng văn học
                dân gian của người Jrai trên nền tảng số.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
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
                src="/images/jrai-museum.jpg"
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
                className="border-l-2 border-gold pl-8 py-4 hover:pl-12 transition-all duration-300"
                variants={staggerItemVariants}
              >
                <p className="text-gold font-bold text-sm mb-2">
                  {value.number}
                </p>
                <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">
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
          <p className="text-white/70 mt-8 mb-24 text-lg italic">
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
          <p className="text-white/70 mt-8 text-lg italic">
            “Bộ quần áo nữ Jrai” – trang phục truyền thống thể hiện nét duyên
            dáng và tinh thần của người phụ nữ Jrai.
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
                <div className="relative h-64 rounded-lg overflow-hidden mb-6 bg-white/5">
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
                <p className="text-white/60 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-white/70 text-center mt-16">
            <p>Thông tin liên hệ:</p>
            <p>📞 Đinh Đức Anh — 0394 834 694</p>
            <p>📞 Rơ Lan H’ Rê Ny — 0362 745 894</p>
          </div>
        </section>

        {/* FOOTER TEXT */}
        <section className="px-8 md:px-16 py-32 text-center border-t border-white/10">
          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
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
      </main>
    </PageTransition>
  );
}

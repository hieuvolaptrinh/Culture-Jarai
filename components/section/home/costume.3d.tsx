import { SectionHeader } from "@/components/section-header";
import { motion } from "framer-motion";
const Constume3D = () => {
  return (
    <>
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
          “Bộ quần áo nữ Jrai” – trang phục truyền thống thể hiện nét duyên dáng
          và tinh thần của người phụ nữ Jrai.
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
          tạo của người Jrai. Mỗi dụng cụ không chỉ phục vụ sinh hoạt hàng ngày
          mà còn thể hiện tri thức, kinh nghiệm và mối gắn kết hài hòa giữa con
          người với thiên nhiên đại ngàn.
        </p>
      </section>
    </>
  );
};
export default Constume3D;

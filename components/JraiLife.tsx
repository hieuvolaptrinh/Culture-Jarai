"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

export default function JraiLifeSection() {
  const [open, setOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState<{
    type: string;
    src: string;
    title: string;
  } | null>(null);

  const mediaItems = [
    {
      type: "image",
      src: "/images/att.SpU9U0BH8lJIKIUdo22m1d8JiqTQt6HpeTyuKg76Znk.JPG",
      title: "Nụ cười người Jrai",
    },
    {
      type: "image",
      src: "/images/att.NYjcmWRFFZlCBJSKDEeVWx-yifsA-GM7MR1BB4eq8qg.gif.JPEG",
      title: "Lễ hội truyền thống Jrai",
    },
    {
      type: "video",
      src: "/images/video/IMG_3201.MOV",
      title: "Cuộc sống thường ngày của người Jrai",
    },
    {
      type: "video",
      src: "/images/video/IMG_3212.MOV",
      title: "Học sinh Jrai trong lớp học",
    },
    {
      type: "video",
      src: "/images/video/IMG_3200.MOV",
      title: "Ngôi làng bên chân núi",
    },
  ];

  return (
    <>
      {/* Section 1: Video giới thiệu */}
      <section className="relative w-full overflow-hidden mt-[200px]">
        <motion.video
          src="/videos/jrai_intro.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-background" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Con Người Và Cuộc Sống Của Dân Tộc Jrai
          </h1>
          <p className="text-lg max-w-3xl font-light leading-relaxed">
            Cuộc sống của người Jrai là bản hòa tấu giữa thiên nhiên, con người
            và văn hóa truyền thống — nơi mỗi tiếng chiêng, mỗi nụ cười đều chứa
            đựng linh hồn của núi rừng.
          </p>
          <div className="max-w-7xl rounded-2xl overflow-hidden mt-5">
            <video src="/images/video/IMG_3200.MOV" autoPlay muted loop></video>
          </div>
        </div>
      </section>

      {/* Section 2: Bộ sưu tập */}
      <section className="py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hình Ảnh & Tư Liệu Về Cuộc Sống Jrai
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-md group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => {
                setActiveMedia(item);
                setOpen(true);
              }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  playsInline
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-lg font-medium">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal xem chi tiết */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="min-w-[900px] bg-black/90 border-none p-0 overflow-hidden">
          {activeMedia && activeMedia.type === "image" && (
            <Image
              src={activeMedia.src}
              alt="Xem chi tiết"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
            />
          )}
          {activeMedia && activeMedia.type === "video" && (
            <video
              src={activeMedia.src}
              controls
              autoPlay
              muted
              loop
              className="w-full h-auto object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

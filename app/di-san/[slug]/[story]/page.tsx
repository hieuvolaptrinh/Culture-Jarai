"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { mockData } from "@/mock-data";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CaDaoGiaDinhDetail() {
  const params = useParams();
  const story = params.story as string;
  const detailData = mockData.find((item) => item.slug === story);
  const router = useRouter()
  if (!detailData) return "no data";
  return (
    <motion.div
      className="min-h-screen bg-background text-foreground py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Hàng 1: Tiêu đề & Ảnh chính (Exhibit Header) - Sử dụng ảnh chung */}
        <motion.div className="mb-12 md:mb-16" variants={itemVariants}>
          {/* <SectionHeader title={detailData.subtitle} /> */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mt-2 mb-4 max-w-4xl">
            {detailData.subtitle}
          </h1>
          <Separator className="bg-primary/50 h-1 w-20 mb-8" />

          {/* Khung ảnh nổi bật chung */}
          <div className="relative w-full aspect-video md:aspect-[3/1] overflow-hidden rounded-xl shadow-2xl shadow-primary/20 group">
            <img
              src={detailData.image} // Sử dụng ảnh chung của chủ đề
              alt={detailData.subtitle}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/10 mix-blend-multiply pointer-events-none" />
          </div>
        </motion.div>

        {/* LẶP QUA MẢNG body để hiển thị từng bài ca dao chi tiết */}
        <div className="space-y-20">
          {detailData.body.map((item, index) => {
            return (
              <div key={item.slug}>
                {/* Tiêu đề từng bài ca dao */}
                <motion.h2
                  className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 pt-4 border-t border-border/50"
                  variants={itemVariants}
                >
                  {item.subtitle}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Cột 1: Hình ảnh và Gốc/Dịch nghĩa */}
                  <motion.div className="space-y-8 self-center" variants={itemVariants}>
                    {/* Ảnh riêng cho từng bài ca dao */}
                    <div className="w-full aspect-square overflow-hidden rounded-lg shadow-xl border border-border/70">
                      <img
                        src={item.image}
                        alt={item.subtitle}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Card Gốc & Dịch nghĩa */}
                  </motion.div>

                  {/* Cột 2: Phân tích & Ý nghĩa Văn hóa Sâu sắc */}
                  <motion.div className="" variants={itemVariants}>
                    <Card className="bg-card border-l-4 border-primary rounded-lg shadow-lg">
                      <CardContent className="p-6">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.body,
                          }}
                          className="prose max-w-none text-foreground/80 space-y-4 [&>strong]:text-foreground [&>em]:text-primary/90"
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                {/* Thanh ngăn cách giữa các bài ca dao */}
                {index < detailData.body.length - 1 && (
                  <motion.div
                    variants={itemVariants}
                    className="my-16 flex justify-center"
                  >
                    <Separator className="w-1/2 md:w-1/3 bg-border/50 h-px" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Thanh điều hướng/ Quay lại */}
        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <button onClick={() => router.back()} className="text-primary hover:text-primary/80 transition-colors flex items-center justify-center mx-auto">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Quay lại Di sản
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

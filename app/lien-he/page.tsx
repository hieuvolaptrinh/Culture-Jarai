"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageTransition } from "@/components/page-transition";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Đinh Đức Anh",
      value: "0394 834 694",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: "📞",
      title: "Rơ Lan H'Rê Ny",
      value: "0362 745 894",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: "✉️",
      title: "Email",
      value: "baotangjrai@museum.vn",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: "📍",
      title: "Địa điểm",
      value: "Pleiku, Gia Lai – Việt Nam",
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  const faqs = [
    {
      q: "Bảo tàng có mở cửa cho công chúng tham quan trực tiếp không?",
      a: "Hiện tại, Bảo tàng Văn học Jrai hoạt động chủ yếu dưới hình thức trực tuyến. Mọi người có thể truy cập website để tìm hiểu, khám phá và đóng góp tư liệu.",
    },
    {
      q: "Tôi có thể gửi truyện, thơ hoặc tư liệu dân gian Jrai cho bảo tàng không?",
      a: "Rất hoan nghênh! Bạn có thể gửi qua biểu mẫu liên hệ hoặc email chính thức của bảo tàng. Mọi đóng góp đều được trân trọng và ghi nhận.",
    },
    {
      q: "Dự án có hợp tác với trường học hay tổ chức văn hóa không?",
      a: "Chúng tôi sẵn sàng hợp tác với các trường, viện nghiên cứu và tổ chức văn hóa trong công tác sưu tầm, giảng dạy và quảng bá văn học dân gian Jrai.",
    },
    {
      q: "Có thể sử dụng tư liệu của bảo tàng cho mục đích học tập không?",
      a: "Hoàn toàn được phép, miễn là ghi rõ nguồn 'Bảo tàng Văn học Jrai'. Với mục đích thương mại, vui lòng liên hệ trước để được hướng dẫn cụ thể.",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen text-foreground relative overflow-hidden">
        {/* Background decorations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Modern Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-primary/40 via-background/95 to-secondary/40" />
            <div className="absolute inset-0 bg-linear-to-tl from-accent/30 via-transparent to-primary/30" />
          </div>

          {/* Geometric Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L70 30 L50 50 L30 30 Z M10 50 L30 70 L50 50 L30 30 Z M50 50 L70 70 L90 50 L70 30 Z' fill='none' stroke='%23000' stroke-width='0.5' opacity='0.4'/%3E%3Ccircle cx='50' cy='30' r='2.5' fill='%23000' opacity='0.25'/%3E%3Ccircle cx='30' cy='50' r='2.5' fill='%23000' opacity='0.25'/%3E%3Ccircle cx='70' cy='50' r='2.5' fill='%23000' opacity='0.25'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Striped Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
            }}
          />

          {/* Animated Gradient Spheres */}
          <motion.div
            className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-primary/35 rounded-full blur-[130px]"
            animate={{
              y: [0, 60, 0],
              x: [0, 40, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-1/3 w-[450px] h-[450px] bg-secondary/35 rounded-full blur-[110px]"
            animate={{
              y: [0, -60, 0],
              x: [0, -40, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/25 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Subtle Glass Effect */}
          <div className="absolute inset-0 backdrop-blur-[1px] bg-background/5" />

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
                LIÊN HỆ VỚI CHÚNG TÔI
              </Badge>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Kết Nối
                </span>
                <br />
                <span className="text-foreground">Cùng Bảo Tàng</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Nếu bạn có thắc mắc, mong muốn hợp tác hoặc đóng góp tư liệu cho
                dự án "Bảo tàng Văn học Jrai", chúng tôi luôn sẵn lòng lắng nghe
                và đón nhận.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <Card
                  className={`group h-full border-border/50 hover:border-primary/50 transition-all duration-300 bg-linear-to-br ${info.gradient} backdrop-blur-sm`}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 text-primary"
            >
              GỬI THÔNG ĐIỆP
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Để lại lời nhắn cho chúng tôi
            </h2>
            <p className="text-muted-foreground">
              Điền vào form bên dưới và chúng tôi sẽ phản hồi sớm nhất có thể
            </p>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Họ và tên
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nguyễn Văn A"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Tiêu đề
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Nội dung bạn muốn trao đổi"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nội dung
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Viết thông điệp của bạn..."
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi thông điệp"}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-950/20 p-4 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Gửi thành công! Chúng tôi sẽ liên hệ lại sớm.</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>Có lỗi xảy ra. Vui lòng thử lại.</span>
                  </motion.div>
                )}
              </motion.form>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="mb-4 border-secondary/50 text-secondary"
            >
              CÂU HỎI THƯỜNG GẶP
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Giải đáp thắc mắc
            </h2>
            <p className="text-muted-foreground">
              Một số câu hỏi phổ biến từ cộng đồng
            </p>
          </div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={staggerItemVariants}>
                <Card className="group border-border/50 hover:border-primary/50 transition-all backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {faq.q}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}

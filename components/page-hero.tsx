"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  gradient?: string;
  pattern?: boolean;
  minHeight?: string;
}

export function PageHero({
  title,
  description,
  backgroundImage,
  gradient = "from-background/95 via-background/70 to-background",
  pattern = true,
  minHeight = "min-h-[60vh]",
}: PageHeroProps) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={heroRef}
      className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image with Parallax */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            scale,
          }}
        />
      )}

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-linear-to-b ${gradient} pointer-events-none`}
      />

      {/* Jrai Pattern Overlay */}
      {pattern && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="hero-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M50 10 L70 30 L50 50 L30 30 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary/60"
                />
                <circle
                  cx="50"
                  cy="30"
                  r="3"
                  fill="currentColor"
                  className="text-primary/40"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
      )}

      {/* Ambient Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full text-center"
        style={{ opacity, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Title with gradient */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {title}
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent to-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-primary" />
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {description}
            </motion.p>
          )}

          {/* Additional decorative elements */}
          <motion.div
            className="flex items-center justify-center gap-2 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary/50"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-2 text-foreground/60">
          <span className="text-xs font-light tracking-widest">KHÁM PHÁ</span>
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

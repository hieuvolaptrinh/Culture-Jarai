"use client";

import { motion } from "framer-motion";

interface JraiPatternProps {
  className?: string;
  opacity?: number;
}

export function JraiPattern({
  className = "",
  opacity = 0.03,
}: JraiPatternProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Traditional Jrai patterns */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="jrai-diamond"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            {/* Diamond pattern - mẫu kim cương đặc trưng Jrai */}
            <path
              d="M60 10 L90 40 L60 70 L30 40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-primary/40"
            />
            <path
              d="M60 30 L75 45 L60 60 L45 45 Z"
              fill="currentColor"
              className="text-primary/20"
            />

            {/* Decorative dots */}
            <circle
              cx="60"
              cy="10"
              r="2"
              fill="currentColor"
              className="text-primary/30"
            />
            <circle
              cx="90"
              cy="40"
              r="2"
              fill="currentColor"
              className="text-primary/30"
            />
            <circle
              cx="60"
              cy="70"
              r="2"
              fill="currentColor"
              className="text-primary/30"
            />
            <circle
              cx="30"
              cy="40"
              r="2"
              fill="currentColor"
              className="text-primary/30"
            />
          </pattern>

          <pattern
            id="jrai-weave"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Weaving pattern - mẫu dệt thổ cẩm */}
            <path
              d="M0 40 L40 0 M40 80 L80 40 M0 80 L80 0"
              stroke="currentColor"
              strokeWidth="1"
              className="text-secondary/30"
              fill="none"
            />
            <path
              d="M0 0 L40 40 M40 40 L80 80"
              stroke="currentColor"
              strokeWidth="1"
              className="text-secondary/20"
              fill="none"
            />
          </pattern>

          <pattern
            id="jrai-zigzag"
            x="0"
            y="0"
            width="60"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Zigzag pattern - mẫu răng cưa */}
            <path
              d="M0 20 L15 10 L30 20 L45 10 L60 20 L60 30 L45 20 L30 30 L15 20 L0 30 Z"
              fill="currentColor"
              className="text-accent/15"
            />
          </pattern>
        </defs>

        {/* Layer multiple patterns */}
        <rect width="100%" height="100%" fill="url(#jrai-diamond)" />
        <rect
          width="100%"
          height="100%"
          fill="url(#jrai-weave)"
          opacity="0.5"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#jrai-zigzag)"
          opacity="0.3"
        />
      </svg>

      {/* Animated gradient orbs for depth */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-secondary/10 via-secondary/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

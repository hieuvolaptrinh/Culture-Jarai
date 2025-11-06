"use client";

import { motion } from "framer-motion";

interface JraiTextilePatternProps {
  className?: string;
  opacity?: number;
}

export function JraiTextilePattern({
  className = "",
  opacity = 0.06,
}: JraiTextilePatternProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Traditional Jrai Textile Weaving Pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Weave Border Pattern - Top and Bottom */}
          <pattern
            id="jrai-wave-border"
            x="0"
            y="0"
            width="120"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Top Wave */}
            <path
              d="M0 15 Q15 10, 30 15 T60 15 T90 15 T120 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary/70"
            />
            <path
              d="M0 20 Q15 15, 30 20 T60 20 T90 20 T120 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-secondary/60"
            />

            {/* Diamond Lattice Center */}
            <path
              d="M15 30 L30 40 L45 30 L60 40 L75 30 L90 40 L105 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />
            <path
              d="M15 50 L30 40 L45 50 L60 40 L75 50 L90 40 L105 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />

            {/* Center Diamonds Filled */}
            <path
              d="M30 35 L37 40 L30 45 L23 40 Z"
              fill="currentColor"
              className="text-accent/40"
            />
            <path
              d="M60 35 L67 40 L60 45 L53 40 Z"
              fill="currentColor"
              className="text-accent/40"
            />
            <path
              d="M90 35 L97 40 L90 45 L83 40 Z"
              fill="currentColor"
              className="text-accent/40"
            />

            {/* Bottom Wave */}
            <path
              d="M0 60 Q15 65, 30 60 T60 60 T90 60 T120 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-secondary/60"
            />
            <path
              d="M0 65 Q15 70, 30 65 T60 65 T90 65 T120 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary/70"
            />
          </pattern>

          {/* Zigzag Teeth Pattern */}
          <pattern
            id="jrai-zigzag-teeth"
            x="0"
            y="0"
            width="60"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 15 L5 8 L10 15 L15 8 L20 15 L25 8 L30 15 L35 8 L40 15 L45 8 L50 15 L55 8 L60 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-accent/60"
            />
            <path
              d="M0 20 L5 15 L10 20 L15 15 L20 20 L25 15 L30 20 L35 15 L40 20 L45 15 L50 20 L55 15 L60 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent/40"
            />
          </pattern>

          {/* Cross Stitch Pattern */}
          <pattern
            id="jrai-cross-stitch"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Diagonal crosses */}
            <path
              d="M10 10 L30 30 M30 10 L10 30"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-secondary/40"
            />
            <circle
              cx="20"
              cy="20"
              r="3"
              fill="currentColor"
              className="text-primary/40"
            />
          </pattern>

          {/* Decorative Dots Grid */}
          <pattern
            id="jrai-dots-grid"
            x="0"
            y="0"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="6"
              cy="6"
              r="1.5"
              fill="currentColor"
              className="text-primary/40"
            />
            <circle
              cx="19"
              cy="19"
              r="1.5"
              fill="currentColor"
              className="text-secondary/40"
            />
          </pattern>

          {/* Small Diamond Grid */}
          <pattern
            id="jrai-diamond-grid"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M25 10 L35 20 L25 30 L15 20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/30"
            />
            <path
              d="M25 18 L30 22 L25 26 L20 22 Z"
              fill="currentColor"
              className="text-secondary/25"
            />
          </pattern>
        </defs>

        {/* Layer patterns to create textile effect */}
        <rect
          width="100%"
          height="100%"
          fill="url(#jrai-wave-border)"
          opacity="1"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#jrai-zigzag-teeth)"
          opacity="0.4"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#jrai-diamond-grid)"
          opacity="0.5"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#jrai-cross-stitch)"
          opacity="0.3"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#jrai-dots-grid)"
          opacity="0.6"
        />
      </svg>

      {/* Animated gradient orbs for depth - more vibrant */}
      <motion.div
        className="absolute top-0 right-0 w-[900px] h-[900px] bg-gradient-radial from-primary/10 via-primary/5 to-transparent rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.7, 0.5],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-secondary/10 via-secondary/5 to-transparent rounded-full blur-[150px]"
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.4, 0.6, 0.4],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-accent/8 via-accent/4 to-transparent rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

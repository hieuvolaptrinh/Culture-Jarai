"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Interactive3DShowcaseProps {
  title: string
  description: string
  modelId: string
  features: string[]
}

export function Interactive3DShowcase({ title, description, modelId, features }: Interactive3DShowcaseProps) {
  const [isRotating, setIsRotating] = useState(true)

  return (
    <div className="w-full space-y-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* 3D Model */}
        <motion.div
          className="relative rounded-lg overflow-hidden border border-border/50 bg-card aspect-square"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <iframe
            title={title}
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src={`https://sketchfab.com/models/${modelId}/embed?autostart=${isRotating ? 1 : 0}&ui_controls=1&ui_infos=1`}
            className="w-full h-full"
          />

          {/* Control Button */}
          <motion.button
            onClick={() => setIsRotating(!isRotating)}
            className="absolute bottom-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRotating ? "Pause" : "Rotate"}
          </motion.button>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Key Features:</h3>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-3 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

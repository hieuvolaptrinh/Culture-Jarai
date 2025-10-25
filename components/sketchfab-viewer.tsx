"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface SketchfabViewerProps {
  modelId: string
  title: string
  description?: string
  autoplay?: boolean
}

export function SketchfabViewer({ modelId, title, description, autoplay = true }: SketchfabViewerProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <motion.div
      className="w-full rounded-lg overflow-hidden border border-border/50 bg-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full aspect-video bg-muted">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
            <motion.div
              className="w-12 h-12 border-3 border-accent/30 border-t-accent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </div>
        )}

        <iframe
          title={title}
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src={`https://sketchfab.com/models/${modelId}/embed?autostart=${autoplay ? 1 : 0}&ui_controls=1&ui_infos=1&ui_inspector=1&ui_help=1&ui_watermark=1&ui_watermark_link=1`}
          className="w-full h-full"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
    </motion.div>
  )
}

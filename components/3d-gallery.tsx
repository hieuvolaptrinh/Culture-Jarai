"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

interface Model3D {
  id: string
  title: string
  description: string
  modelId: string
  thumbnail: string
}

interface Gallery3DProps {
  models: Model3D[]
  title?: string
}

export function Gallery3D({ models, title = "3D Model Gallery" }: Gallery3DProps) {
  const [selectedModel, setSelectedModel] = useState<Model3D | null>(models[0] || null)

  return (
    <div className="w-full space-y-8">
      <motion.h2
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Viewer */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {selectedModel && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/50 bg-card">
              <iframe
                title={selectedModel.title}
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src={`https://sketchfab.com/models/${selectedModel.modelId}/embed?autostart=1&ui_controls=1&ui_infos=1&ui_inspector=1`}
                className="w-full h-full"
              />
            </div>
          )}
        </motion.div>

        {/* Model List */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainerVariants}
          viewport={{ once: true }}
        >
          {models.map((model) => (
            <motion.button
              key={model.id}
              onClick={() => setSelectedModel(model)}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                selectedModel?.id === model.id
                  ? "border-accent bg-accent/10"
                  : "border-border/50 bg-card hover:border-accent/50"
              }`}
              variants={staggerItemVariants}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex gap-4">
                <img
                  src={model.thumbnail || "/placeholder.svg"}
                  alt={model.title}
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm truncate">{model.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{model.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

"use client"

import { PageTransition } from "@/components/page-transition"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Gallery3D } from "@/components/3d-gallery"
import { Interactive3DShowcase } from "@/components/interactive-3d-showcase"

const models3D = [
  {
    id: "1",
    title: "Ancient Greek Vase",
    description: "Intricately decorated ceramic vessel from ancient Greece",
    modelId: "a1b2c3d4e5f6g7h8",
    thumbnail: "/ancient-greek-vase.jpg",
  },
  {
    id: "2",
    title: "Roman Bust",
    description: "Classical marble sculpture of a Roman emperor",
    modelId: "b2c3d4e5f6g7h8i9",
    thumbnail: "/roman-bust.jpg",
  },
  {
    id: "3",
    title: "Medieval Armor",
    description: "Complete suit of medieval knight armor",
    modelId: "c3d4e5f6g7h8i9j0",
    thumbnail: "/medieval-armor.jpg",
  },
  {
    id: "4",
    title: "Egyptian Canopic Jar",
    description: "Ceremonial jar used in ancient Egyptian burial practices",
    modelId: "d4e5f6g7h8i9j0k1",
    thumbnail: "/egyptian-canopic-jar.jpg",
  },
]

export default function GalleryPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">3D Model Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Explore our interactive 3D collection of artifacts. Rotate, zoom, and inspect each piece in detail.
            </p>
          </ScrollReveal>
        </section>

        {/* Gallery Section */}
        <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
          <Gallery3D models={models3D} title="Interactive 3D Models" />
        </section>

        {/* Featured Showcase */}
        <section className="px-4 md:px-8 py-20 max-w-7xl mx-auto border-t border-border/50">
          <Interactive3DShowcase
            title="Featured Artifact"
            description="This ancient artifact represents the pinnacle of craftsmanship from its era. Use the interactive viewer to examine every detail, rotate the model, and zoom in to appreciate the intricate work."
            modelId="a1b2c3d4e5f6g7h8"
            features={[
              "360-degree rotation for complete inspection",
              "Zoom functionality to examine fine details",
              "High-resolution 3D scanning technology",
              "Detailed artifact information and history",
              "Interactive lighting to highlight features",
            ]}
          />
        </section>
      </main>
    </PageTransition>
  )
}

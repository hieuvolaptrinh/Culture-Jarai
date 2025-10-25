"use client"

import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { SectionHeader } from "@/components/section-header"
import { staggerContainerVariants, staggerItemVariants } from "@/lib/animations"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Visionary leader with 15+ years in digital art and immersive experiences",
    },
    {
      name: "Marcus Johnson",
      role: "Technical Director",
      bio: "Expert in 3D visualization and interactive web technologies",
    },
    {
      name: "Elena Rodriguez",
      role: "Curator",
      bio: "Art historian specializing in contemporary and classical collections",
    },
    {
      name: "David Kim",
      role: "Motion Designer",
      bio: "Award-winning animator creating seamless interactive experiences",
    },
  ]

  const values = [
    {
      number: "01",
      title: "Innovation",
      description: "Pushing the boundaries of digital art and interactive storytelling",
    },
    {
      number: "02",
      title: "Accessibility",
      description: "Making art and culture accessible to everyone, everywhere",
    },
    {
      number: "03",
      title: "Quality",
      description: "Delivering exceptional experiences with meticulous attention to detail",
    },
    {
      number: "04",
      title: "Community",
      description: "Building a vibrant community of artists, creators, and art enthusiasts",
    },
  ]

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white">
        <section className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-0" />
          <img
            src="/museum-interior-modern-architecture.jpg"
            alt="Museum"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />

          <motion.div
            className="relative z-10 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-8 border-b-4 border-gold pb-6 inline-block">About Us</h1>
            <p className="text-2xl text-white/80 leading-relaxed max-w-2xl mt-8">
              We're reimagining how people experience art through immersive digital exhibitions and interactive
              storytelling.
            </p>
          </motion.div>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-white/20">01</span>
                <h2 className="text-5xl font-bold border-b-2 border-gold pb-2">Our Mission</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                The Digital Museum is dedicated to democratizing access to world-class art and cultural artifacts. We
                believe that technology can enhance human connection to art, making it more engaging, interactive, and
                meaningful.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Through innovative digital experiences, we're creating a new paradigm for how people discover, explore,
                and appreciate art from around the world.
              </p>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/museum-interior-modern-architecture.jpg"
                alt="Museum interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <SectionHeader number="02" title="Our Values" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-gold pl-8 py-4 hover:pl-12 transition-all duration-300"
                variants={staggerItemVariants}
              >
                <p className="text-gold font-bold text-sm mb-2">{value.number}</p>
                <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <SectionHeader number="03" title="Our Team" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {team.map((member, index) => (
              <motion.div key={index} className="group" variants={staggerItemVariants}>
                <div className="relative h-64 rounded-lg overflow-hidden mb-6 bg-white/5">
                  <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-white/20 group-hover:text-gold/40 transition-colors">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-gold text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { number: "500+", label: "Artifacts" },
              { number: "50+", label: "Exhibits" },
              { number: "100K+", label: "Visitors" },
              { number: "24/7", label: "Access" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center border-t border-gold pt-8" variants={staggerItemVariants}>
                <motion.div
                  className="text-6xl font-bold text-gold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-white/60 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </PageTransition>
  )
}

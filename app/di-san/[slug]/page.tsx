"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { PageTransition } from "@/components/page-transition";
import { SectionHeader } from "@/components/section-header";
import { HorizontalScrollGallery } from "@/components/horizontal-scroll-gallery";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/animations";

const exhibitDetails: Record<
  string,
  {
    title: string;
    description: string;
    fullDescription: string;
    heroImage: string;
    sections: Array<{
      title: string;
      content: string;
      image: string;
    }>;
    gallery: Array<{
      image: string;
      title: string;
    }>;
  }
> = {
  "ca-dao": {
    title: "Ca Dao Jrai",
    description: "Vẻ đẹp mộc mạc, sâu sắc trong lời ca dân gian của người Jrai",
    fullDescription:
      "Ca dao của người Jrai phản ánh triết lý sống, kinh nghiệm lao động và tình cảm giữa con người với thiên nhiên hùng vĩ. Những câu ca truyền miệng qua bao thế hệ vừa giản dị, vừa chứa đựng chiều sâu nhân văn, thể hiện tâm hồn và bản sắc văn hóa độc đáo của dân tộc Jrai.",
    heroImage: "/images/tho.jpg",
    sections: [
      {
        title: "Ca dao về gia đình",
        content: `Ca dao Jrai về gia đình thường nhấn mạnh lòng biết ơn cha mẹ và giá trị của lao động. Ví dụ như câu:<br/><br/>'po tao nai ami<br/>
Po tao nao ama<br/>
H' dong nai h' dong kha<br/>
Bơ nai bơr miêng' <br/> <br/>(Cây lúa của mẹ<br/>
Cây lúa của cha<br/>
Ruộng đồng là ruộng quý<br/>
Cỏ cây là quà thiên nhiên) thể hiện sự trân trọng công lao của đấng sinh thành và ý thức gìn giữ truyền thống lao động.`,
        image: "/images/cadao/ca-dao-family.jpeg",
      },
      {
        title: "Ca dao về kinh nghiệm sống",
        content:
          "Những câu ca như <br/><br/> 'Yang cho ho khơn, cho khơn cho pian' (Ruộng cho lúa, lúa cho người) thể hiện triết lý lao động cần cù và tinh thần tôn trọng thành quả làm ra. Ca dao Jrai truyền dạy đạo lý tiết kiệm, siêng năng và biết ơn thiên nhiên.",
        image: "/ca-dao-life.jpg",
      },
      {
        title: "Ca dao dân gian & lễ hội",
        content:
          "Các bài ca dân gian mô tả sinh hoạt và lễ hội cồng chiêng, phản ánh nhịp sống buôn làng và niềm vui lao động. Ví dụ: 'Gơ sang chiêng pơ hlâm, pơ sang hlâm pơ ting' – cồng vang xa, chiêng gọi gần – miêu tả không khí rộn ràng của ngày hội Jrai.",
        image: "/ca-dao-festival.jpg",
      },
      {
        title: "Ca dao về thiên nhiên",
        content:
          "Người Jrai xem thiên nhiên là bạn đồng hành. Những câu ca như 'Ai yang ai tơng ia, ai tơng ia ai yang' (Nước nuôi cây, cây giữ nước) thể hiện mối quan hệ hài hòa giữa con người và môi trường – một triết lý sống xanh, bền vững từ bao đời.",
        image: "/ca-dao-nature.jpg",
      },
      {
        title: "Ca dao về tình yêu đôi lứa",
        content:
          "Ca dao tình yêu của người Jrai thường mộc mạc nhưng sâu lắng, ca ngợi sự thủy chung và son sắt. Những lời ca kể về tình yêu xa cách, nỗi nhớ và niềm tin gặp lại, phản ánh vẻ đẹp trong sáng, chân thành của tâm hồn Jrai.",
        image: "/ca-dao-love.jpg",
      },
    ],
    gallery: [
      { image: "/ca-dao-family.jpg", title: "Ca dao về gia đình" },
      { image: "/ca-dao-life.jpg", title: "Ca dao về kinh nghiệm sống" },
      { image: "/ca-dao-festival.jpg", title: "Ca dao dân gian & lễ hội" },
      { image: "/ca-dao-nature.jpg", title: "Ca dao về thiên nhiên" },
      { image: "/ca-dao-love.jpg", title: "Ca dao về tình yêu đôi lứa" },
    ],
  },
  "tuc-ngu": {
    title: "Modern Sculptures",
    description: "Contemporary art in motion",
    fullDescription:
      "Experience the evolution of sculptural art in the modern era. Our collection features works that challenge perception and redefine the boundaries of three-dimensional artistic expression.",
    heroImage: "/modern-sculpture-art.jpg",
    sections: [
      {
        title: "Abstract Forms",
        content:
          "Explore sculptures that break free from traditional representation, using geometric shapes and innovative materials to create thought-provoking installations.",
        image: "/modern-sculpture-art.jpg",
      },
      {
        title: "Interactive Pieces",
        content:
          "Engage with sculptures designed for interaction, where movement and viewer participation become integral parts of the artistic experience.",
        image: "/interactive-sculpture.jpg",
      },
      {
        title: "Material Innovation",
        content:
          "Discover how contemporary artists push boundaries using unconventional materials, from recycled objects to cutting-edge composites.",
        image: "/modern-sculpture-materials.jpg",
      },
    ],
    gallery: [
      { image: "/modern-sculpture-art.jpg", title: "Abstract Form" },
      { image: "/sculpture-1.jpg", title: "Geometric Sculpture" },
      { image: "/sculpture-2.jpg", title: "Interactive Installation" },
      { image: "/sculpture-3.jpg", title: "Material Study" },
    ],
  },
  "truyen-dan-gian": {
    title: "Digital Installations",
    description: "Interactive experiences and immersive tech",
    fullDescription:
      "Step into the future of art with our digital installations. These immersive experiences blend technology, light, and sound to create unforgettable moments.",
    heroImage: "/digital-art-installation.png",
    sections: [
      {
        title: "Light & Sound",
        content:
          "Experience installations that combine synchronized light patterns with ambient soundscapes, creating multisensory artistic experiences.",
        image: "/digital-art-installation.png",
      },
      {
        title: "Virtual Reality",
        content:
          "Immerse yourself in virtual worlds created by contemporary digital artists, where imagination becomes tangible reality.",
        image: "/virtual-reality-art.jpg",
      },
      {
        title: "Generative Art",
        content:
          "Witness art that evolves and changes in real-time, powered by algorithms and artificial intelligence that create ever-unique visual experiences.",
        image: "/generative-art.jpg",
      },
    ],
    gallery: [
      { image: "/digital-art-installation.png", title: "Light Installation" },
      { image: "/digital-1.jpg", title: "Sound Visualization" },
      { image: "/digital-2.jpg", title: "VR Experience" },
      { image: "/digital-3.jpg", title: "Generative Pattern" },
    ],
  },
  "renaissance-masters": {
    title: "Renaissance Masters",
    description: "Classical paintings and techniques",
    fullDescription:
      "Celebrate the golden age of art with works from the Renaissance masters. These paintings represent the pinnacle of classical technique and artistic vision.",
    heroImage: "/renaissance-painting-art.jpg",
    sections: [
      {
        title: "Oil Painting Mastery",
        content:
          "Explore the revolutionary oil painting techniques that allowed Renaissance artists to achieve unprecedented depth, color, and realism.",
        image: "/renaissance-painting-art.jpg",
      },
      {
        title: "Perspective & Composition",
        content:
          "Understand the mathematical principles of perspective that transformed painting, creating the illusion of three-dimensional space on canvas.",
        image: "/renaissance-perspective.jpg",
      },
      {
        title: "Iconic Works",
        content:
          "Admire the most celebrated paintings of the Renaissance period, each a masterpiece of composition, color, and human expression.",
        image: "/renaissance-masterpiece.jpg",
      },
    ],
    gallery: [
      {
        image: "/renaissance-painting-art.jpg",
        title: "Renaissance Masterpiece",
      },
      { image: "/renaissance-1.jpg", title: "Portrait Study" },
      { image: "/renaissance-2.jpg", title: "Religious Scene" },
      {
        image: "/placeholder.svg?height=400&width=400",
        title: "Landscape Painting",
      },
    ],
  },
  "contemporary-photography": {
    title: "Contemporary Photography",
    description: "Modern visual storytelling",
    fullDescription:
      "Discover how contemporary photographers use the camera as a tool for artistic expression, social commentary, and visual storytelling.",
    heroImage: "/contemporary-photography.jpg",
    sections: [
      {
        title: "Documentary Photography",
        content:
          "Experience powerful visual narratives that capture real moments, telling stories of human experience, culture, and social issues.",
        image: "/contemporary-photography.jpg",
      },
      {
        title: "Conceptual Photography",
        content:
          "Explore photographs that transcend documentation, using creative techniques and conceptual frameworks to challenge viewers' perceptions.",
        image: "/placeholder.svg?height=500&width=800",
      },
      {
        title: "Digital Photography",
        content:
          "Witness how digital technology has expanded the possibilities of photography, enabling new forms of manipulation and artistic expression.",
        image: "/placeholder.svg?height=500&width=800",
      },
    ],
    gallery: [
      { image: "/contemporary-photography.jpg", title: "Documentary Shot" },
      {
        image: "/placeholder.svg?height=400&width=400",
        title: "Conceptual Work",
      },
      {
        image: "/placeholder.svg?height=400&width=400",
        title: "Portrait Series",
      },
      {
        image: "/placeholder.svg?height=400&width=400",
        title: "Landscape Study",
      },
    ],
  },
};

export default function ExhibitDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const exhibit = exhibitDetails[slug];

  if (!exhibit) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl text-white/60">Exhibit not found</p>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white">
        <section className="relative h-screen flex items-end overflow-hidden">
          <img
            src={exhibit.heroImage || "/placeholder.svg"}
            alt={exhibit.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <motion.div
            className="relative z-10 px-8 md:px-16 pb-20 max-w-7xl w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 border-b-4 border-gold pb-4 inline-block">
              {exhibit.title}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mt-8">
              {exhibit.fullDescription}
            </p>
          </motion.div>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
          <motion.div
            className="space-y-32"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {exhibit.sections.map((section, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div key={index} variants={staggerItemVariants}>
                  <SectionHeader
                    number={String(index + 1).padStart(2, "0")}
                    title={section.title}
                  />

                  <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Content Left / Image Right */}
                    {isEven ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <p
                            className="text-lg text-white/70 leading-relaxed mb-8"
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                          />
                          {/* <motion.a
                            href="#"
                            className="inline-flex items-center gap-3 text-gold font-semibold hover:gap-5 transition-all"
                            whileHover={{ x: 5 }}
                          >
                            Explore More →
                          </motion.a> */}
                        </motion.div>

                        <motion.div
                          className="relative h-96 rounded-lg overflow-hidden group"
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <img
                            src={section.image || "/placeholder.svg"}
                            alt={section.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <motion.div
                              className="w-16 h-16 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                            >
                              <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                            </motion.div>
                          </div>
                        </motion.div>
                      </>
                    ) : (
                      /* Image Left / Content Right */
                      <>
                        <motion.div
                          className="relative h-96 rounded-lg overflow-hidden group"
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <img
                            src={section.image || "/placeholder.svg"}
                            alt={section.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <motion.div
                              className="w-16 h-16 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                            >
                              <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                            </motion.div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <p
                            className="text-lg text-white/70 leading-relaxed mb-8"
                            dangerouslySetInnerHTML={{
                              __html: section.content,
                            }}
                          />
                          {/* <motion.a
                            href="#"
                            className="inline-flex items-center gap-3 text-gold font-semibold hover:gap-5 transition-all"
                            whileHover={{ x: 5 }}
                          >
                            Explore More →
                          </motion.a> */}
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <SectionHeader
            number="04"
            title="Gallery"
            subtitle="Explore our complete collection"
          />
          <HorizontalScrollGallery items={exhibit.gallery} />
        </section>

        <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto border-t border-white/10">
          <SectionHeader number="05" title="More Exhibits" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainerVariants}
            viewport={{ once: true, margin: "-100px" }}
          >
            {[1, 2, 3].map((i) => (
              <motion.a
                key={i}
                href="#"
                className="group"
                variants={staggerItemVariants}
              >
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <div className="w-full h-full bg-white/5 group-hover:bg-white/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-0 h-0 border-l-5 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold group-hover:text-gold transition-colors">
                  Related Exhibit {i}
                </h3>
                <p className="text-white/60 text-sm mt-2">
                  Discover more collections
                </p>
              </motion.a>
            ))}
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}

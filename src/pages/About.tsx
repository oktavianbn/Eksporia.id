import { Ship, MapPin, Eye, Target } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Mock images - replace with your actual imports
const visi = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop";
const misi = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop";
const tentang = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop";
const latarBelakang = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop";

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transform values for different scroll stages
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0.8]);
  const headingY = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0, -100]);

  // Bento grid transforms
  const gridOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const gridScale = useTransform(scrollYProgress, [0.3, 0.5], [0.6, 1]);
  const gridY = useTransform(scrollYProgress, [0.3, 0.5], [200, 0]);

  // Cards data with 3D positioning
  const cards = [
    {
      title: "Tentang Kami",
      image: tentang,
      icon: Ship,
      description: "Eksporia.id adalah platform ekspor digital yang membantu pelaku usaha Indonesia menjangkau pasar global dengan mudah dan terpercaya. Kami hadir sebagai solusi lengkap—dari edukasi, pengurusan dokumen, hingga pengiriman.",
      gridClass: "col-span-2 row-span-3",
      delay: 0,
      rotateX: 15,
      rotateY: -10,
      translateZ: 50
    },
    {
      title: "Latar Belakang",
      image: latarBelakang,
      icon: MapPin,
      description: "Banyak pengusaha kesulitan ekspor karena minimnya akses dan informasi. Eksporia.id hadir untuk membuka jalan dan memberikan akses lebih sederhana serta bisa diakses siapa saja.",
      gridClass: "col-span-2 row-span-2",
      delay: 0.1,
      rotateX: -10,
      rotateY: 15,
      translateZ: 30
    },
    {
      title: "Visi",
      image: visi,
      icon: Eye,
      description: "Menjadi jembatan utama produk lokal Indonesia ke pasar dunia.",
      gridClass: "col-span-1 row-span-1",
      delay: 0.2,
      rotateX: 20,
      rotateY: -20,
      translateZ: 40
    },
    {
      title: "Misi",
      image: misi,
      icon: Target,
      description: "Memberikan kemudahan ekspor melalui digitalisasi proses dan edukasi komprehensif.",
      gridClass: "col-span-1 row-span-1",
      delay: 0.3,
      rotateX: -15,
      rotateY: 25,
      translateZ: 35
    },
  ];

  return (
    <div ref={containerRef} className="min-h-[500vh] relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 dark:from-slate-900 dark:via-cyan-900 dark:to-blue-900">
        
        {/* Heading Section */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            opacity: headingOpacity,
            scale: headingScale,
            y: headingY
          }}
        >
          <div className="text-center">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-700 bg-clip-text text-transparent leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Eksporia.id adalah
            </motion.h1>
          </div>
        </motion.div>

        {/* Background particles/dots for depth */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Bento Grid Section */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            opacity: gridOpacity,
            scale: gridScale,
            y: gridY,
          }}
        >
          <div className="max-w-7xl mx-auto px-6 w-full perspective-1000">
            <div 
              className="grid grid-cols-4 grid-rows-3 gap-6"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {cards.map((card, index) => {
                const cardOpacity = useTransform(
                  scrollYProgress, 
                  [0.4 + card.delay, 0.6 + card.delay], 
                  [0, 1]
                );
                const cardY = useTransform(
                  scrollYProgress, 
                  [0.4 + card.delay, 0.7 + card.delay], 
                  [100 + (index * 20), 0]
                );
                const cardRotateX = useTransform(
                  scrollYProgress, 
                  [0.4 + card.delay, 0.7 + card.delay], 
                  [card.rotateX, 0]
                );
                const cardRotateY = useTransform(
                  scrollYProgress, 
                  [0.4 + card.delay, 0.7 + card.delay], 
                  [card.rotateY, 0]
                );
                const cardZ = useTransform(
                  scrollYProgress, 
                  [0.4 + card.delay, 0.7 + card.delay], 
                  [card.translateZ, 0]
                );

                return (
                  <motion.div
                    key={card.title}
                    className={`${card.gridClass} relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl`}
                    style={{
                      opacity: cardOpacity,
                      y: cardY,
                      rotateX: cardRotateX,
                      rotateY: cardRotateY,
                      z: cardZ,
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateX: 0,
                      rotateY: 0,
                      z: 20,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${card.image})`,
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + card.delay, duration: 0.6 }}
                      >
                        <card.icon className="w-10 h-10 text-white mb-4 drop-shadow-lg transform transition-transform duration-300 group-hover:scale-110" />
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                          {card.title}
                        </h3>
                        <motion.p 
                          className="text-white/90 text-sm lg:text-base leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                        >
                          {card.description}  
                        </motion.p>
                      </motion.div>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              style={{
                scaleX: scrollYProgress,
                transformOrigin: "left"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
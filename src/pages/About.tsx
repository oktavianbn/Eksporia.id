import { Ship, MapPin, Eye, Target } from "lucide-react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tentang from "../assets/about/tentang.png";
import latar from "../assets/about/latarBelakang.png";
import visi from "../assets/about/visi.png";
import misi from "../assets/about/misi.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      title: "Tentang Kami",
      image: tentang,
      icon: Ship,
      description: "Eksporia.id adalah platform ekspor digital yang membantu pelaku usaha Indonesia menjangkau pasar global dengan mudah dan terpercaya.",
      gridClass: "col-span-4 md:col-span-2 row-span-2 md:row-span-2",
      translateZ: 50
    },
    {
      title: "Latar Belakang",
      image: latar,
      icon: MapPin,
      description: "Banyak pengusaha kesulitan ekspor karena minimnya akses dan informasi.",
      gridClass: "col-span-4 md:col-span-2 row-span-1 md:row-span-1",
      translateZ: 40
    },
    {
      title: "Visi",
      image: visi,
      icon: Eye,
      description: "Menjadi jembatan utama produk lokal Indonesia ke pasar dunia.",
      gridClass: "col-span-2 md:col-span-1 row-span-1 md:row-span-1",
      translateZ: 30
    },
    {
      title: "Misi",
      image: misi,
      icon: Target,
      description: "Menyederhanakan ekspor untuk produk lokal Indonesia.",
      gridClass: "col-span-2 md:col-span-1 row-span-1 md:row-span-1",
      translateZ: 20
    }
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: 1,
          markers: false // Remove in production
        }
      });

      // Heading animation
      tl.from(headingRef.current, {
        opacity: 0,
        y: 100,
        duration: 2
      })
      .to(headingRef.current, {
        opacity: 0,
        y: -100,
        duration: 2
      }, "+=1");

      // Staggered cards animation with 3D effect
      cardsRef.current.forEach((card, index) => {
        tl.from(card, {
          opacity: 0,
          y: 200,
          rotateX: 45,
          rotateY: -15,
          z: -500,
          duration: 2,
          stagger: {
            amount: 1,
            from: "start"
          }
        }, "-=1.5");
      });

      // Particle effect
      gsap.to(".particle", {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        opacity: "random(0.3, 0.8)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 4,
          from: "random"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
    id="tentang"
      ref={containerRef}
      className="relative min-h-screen w-full dark:bg-gray-900 bg-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Heading */}
        <div 
          ref={headingRef}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-center px-4">
            Apa itu Eksporia.id?
          </h1>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="absolute inset-0 flex items-center justify-center px-4 md:px-6"
          style={{ perspective: "1000px" }}
        >
          <div className="max-w-7xl w-full">
            <div 
              className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 p-4 md:p-6 min-h-[70vh] md:min-h-[auto]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  ref={el => cardsRef.current[index] = el}
                  className={`${card.gridClass} group relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[140px] sm:min-h-[180px] md:min-h-[200px]`}
                  style={{
                    transform: `translateZ(${card.translateZ}px)`,
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Card Content */}
                  <div className="relative h-full bg-white/10 backdrop-blur-sm p-3 sm:p-4 md:p-6 border border-white/20 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 group-hover:bg-white/20"
                  style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <card.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white mb-2 sm:mb-3 md:mb-4 bg-blue-500 p-1.5 sm:p-2 md:p-2 rounded-lg md:rounded-xl" />
                      <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 md:mb-3 leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-blue-200/90 text-xs sm:text-sm md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                        {card.description}
                      </p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-10 sm:-top-15 md:-top-20 -right-10 sm:-right-15 md:-right-20 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 bg-cyan-500/10 rounded-full blur-xl md:blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300" />
                    <div className="absolute -bottom-10 sm:-bottom-15 md:-bottom-20 -left-10 sm:-left-15 md:-left-20 w-20 sm:w-30 md:w-40 h-20 sm:h-30 md:h-40 bg-blue-500/10 rounded-full blur-xl md:blur-2xl group-hover:bg-blue-500/20 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="progress-bar h-full w-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default About;
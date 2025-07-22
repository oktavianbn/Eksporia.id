import React, { useEffect, useState, useCallback } from "react";
import Kapal from "../assets/kapal.png";
import Awan from "../assets/awan.png";

interface ParallaxProps {
  background: string;
  children?: React.ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({ background, children }) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    setOffset(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
      capture: false,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Adjusted parallax speeds
  const bgY = offset * 0.15; // Slowest (background)
  const kapalY = offset * 0.7; // Fastest (ship)
  const contentY = offset * 0.3; // Medium (content)
  const cloudY = offset * 0.4; // Slightly faster than background

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `center ${bgY}px`,
          willChange: "background-position",
        }}
      />

      {/* Content with parallax */}
      <div
        className="relative z-10 h-full"
        style={{
          transform: `translateY(${contentY}px)`,
          willChange: "transform",
        }}
      >
        {children}
      </div>

      {/* Ship */}
      <img
        src={Kapal}
        alt="Kapal"
        className="absolute pointer-events-none"
        style={{
          right: "10%",
          bottom: "20%",
          transform: `translateY(${kapalY}px)`,
          width: "280px",
          maxWidth: "40vw",
          willChange: "transform",
          zIndex: 2,
        }}
        draggable={false}
      />

      {/* Cloud transition */}
      <div
        className="absolute -bottom-32 left-0 right-0 w-full overflow-hidden"
        style={{
          transform: `translateY(${cloudY}px)`,
          zIndex: 20,
        }}
      >
        <img
          src={Awan}
          alt=""
          className="absolute bottom-0 w-full object-cover"
          style={{
            height: "250px",
            filter: "brightness(1.1)",
          }}
        />
        <img
          src={Awan}
          alt=""
          className="absolute -bottom-10 w-full object-cover scale-x-[-1]"
          style={{
            height: "280px",
            opacity: 0.9,
          }}
        />
        <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/90 to-white dark:via-gray-900/90 dark:to-gray-900" />
      </div>
    </div>
  );
};

export default Parallax;
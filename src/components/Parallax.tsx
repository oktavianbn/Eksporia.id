import React from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import Awan from "../assets/awan.png";
import Kapal from "../../src/assets/Kapal.png";

interface ParallaxProps {
  background: string;
  children?: React.ReactNode;
}

const ParallaxContent: React.FC<ParallaxProps> = ({ background, children }) => {
  const backgroundParallax = useParallax({
    easing: "easeOutQuad",
    speed: -20,
  });

  const shipParallax = useParallax({
    translateY: [0, 50],
    easing: "easeInOutQuad",
    speed: -100,
  });

  const contentParallax = useParallax({
    translateY: [-3, 25],
    easing: "easeOutQuad",
    speed: -10,
  });

  const cloudParallax = useParallax({
    translateY: [0, 70],
    easing: "easeInOutQuad",
    speed: -20,
  });

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Background */}
      <div
        ref={backgroundParallax.ref as React.RefObject<HTMLDivElement>}
        className="absolute inset-0 will-change-transform -top-96"
      >
        {/* Content */}
        <div
          ref={contentParallax.ref as React.RefObject<HTMLDivElement>}
          className="relative z-10 h-full will-change-transform"
        >
          {children}
        </div>

        {/* Ship */}
        <img
          ref={shipParallax.ref as React.RefObject<HTMLImageElement>}
          src={Kapal}
          alt="Kapal"
          className="absolute pointer-events-none will-change-transform drop-shadow-zinc-600 drop-shadow-xl"
          style={{
            right: "10%",
            bottom: "0%",
            top: "0%",
            width: "320px",
            maxWidth: "40vw",
            zIndex: 2
          }}
          draggable={false}
        />

        {/* Cloud transition */}
        <div
          ref={cloudParallax.ref as React.RefObject<HTMLDivElement>}
          className="absolute -bottom-32 left-0 right-0 w-full overflow-hidden will-change-transform"
          style={{ zIndex: 20 }}
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
    </div>
  );
};

const Parallax: React.FC<ParallaxProps> = ({ background, children }) => {
  return (
    <ParallaxProvider>
      <ParallaxContent background={background}>{children}</ParallaxContent>
    </ParallaxProvider>
  );
};

export default Parallax;

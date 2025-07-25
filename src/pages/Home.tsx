import { useEffect, useState } from "react";
import Awan from "../components/Awan";
import Navbar from "../components/Navbar";
import About from "./About";
import Hero from "./Hero";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Tentang", "Potensi", "Informasi", "Kontak"];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-popp 
        scroll-smooth`}
      // ${isDark ? "dark" : "" }
        >
      <Navbar
        isScrolled={isScrolled}
        // isDark={isDark}
        // setIsDark={setIsDark}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navItems={navItems}
      />

      {/* Hero Section */}
      <section id="hero" className="relative z-40">
        <Hero />
        <Awan />
      </section>

      {/* About Section */}
      <section id="about" className="relative z-20">
        <About />
      </section>
      
    </div>
  );
};

export default Home;

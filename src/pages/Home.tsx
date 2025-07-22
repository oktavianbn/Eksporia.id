import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Parallax from "../components/Parallax";
import Hero from "./Hero";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

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
      className={`min-h-screen transition-colors duration-300 font-popp ${
        isDark ? "dark" : ""
      } scroll-smooth`}
    >
      <Navbar
        isScrolled={isScrolled}
        isDark={isDark}
        setIsDark={setIsDark}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        navItems={navItems}
      />

        {/* Hero Section */}
        <Hero/>
    </div>
  );
};

export default Home;

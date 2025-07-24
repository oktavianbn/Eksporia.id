import React, { useState, useEffect } from "react";
import Parallax from "../components/Parallax";
import Laut from "../assets/laut.jpg";
import { Globe } from "lucide-react";
import Awan2 from "../assets/awan2.svg";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);

  const texts = ["UMKM", "IKM", "Bisnis"];

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentIndex];

      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        setTypeSpeed(50);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        setTypeSpeed(100);
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTypeSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, typeSpeed, texts]);

  return (
    <div>
      <Parallax background={Laut}>
        <div className="relative max-w-7xl mx-auto py-20 min-h-screen flex items-center">
          <div className="max-w-3xl relative z-20">
            {/* Floating particles effect */}
            <div
              className="absolute -top-10 -left-10 w-20 h-20 bg-orange-400/10 rounded-full blur-xl animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute top-32 -right-16 w-16 h-16 bg-blue-400/10 rounded-full blur-lg animate-pulse"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute -bottom-8 left-1/3 w-12 h-12 bg-yellow-400/10 rounded-full blur-md animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "5s" }}
            ></div>

            {/* Content */}
            <div className="text-white relative z-10">
              <div className=" mb-8">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight relative">
                  {/* Background glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 via-orange-500/5 to-yellow-500/5 blur-3xl rounded-3xl"></div>
                  <span className="text-white drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 relative z-10 hover:text-blue-100">
                    Level Up{" "}
                  </span>
                  <span
                    className="relative inline-block hover:scale-105 transition-transform duration-300 z-10 group"
                    style={{ minWidth: "280px", display: "inline-block" }}
                  >
                    <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-400 bg-clip-text text-transparent">
                      {currentText}
                    </span>
                    <span className="animate-pulse bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                      |
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400/40 via-orange-300/40 to-yellow-400/40 blur-sm rounded animate-pulse group-hover:blur-none transition-all duration-300" />
                    {/* Enhanced glow effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/10 via-orange-300/10 to-yellow-400/10 blur-2xl rounded-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                    {/* Floating sparkles */}
                    <div
                      className="absolute -top-3 left-1/4 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-all duration-300"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute -top-1 right-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-300"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 relative z-10 hover:text-blue-100">
                    di
                  </span>{" "}
                  <span className="text-orange-400 hover:text-orange-300 transition-colors duration-300 relative z-10 hover:drop-shadow-lg">
                    Indonesia
                  </span>
                  <br />
                  <span className="text-white drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 relative z-10 hover:text-blue-100">
                    Lewat
                  </span>{" "}
                  <span className="text-orange-400 hover:text-orange-300 transition-colors duration-300 relative z-10 hover:drop-shadow-lg">
                    Ekspor
                  </span>
                </h1>
              </div>

              <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 hover:text-white transition-colors duration-300 relative z-10 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10">
                Menghubungkan produk lokal Indonesia dengan pasar dunia melalui
                platform ekspor digital yang mudah, terpercaya, dan
                komprehensif.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <button className="group bg-white text-blue-700 px-8 py-4 rounded-s-xl rounded-tr-xl rounded-br-[64px] font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg relative overflow-hidden">
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">
                    Eksplor Yuk!
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      →
                    </span>
                  </span>
                </button>
                <button className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Globe className="w-5 h-5 inline mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Pelajari Lebih Lanjut</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="flex flex-col items-center space-y-2 text-white/60 group cursor-pointer hover:text-white/80 transition-colors duration-300">
            <span className="text-sm font-medium group-hover:tracking-wider transition-all duration-300">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative group-hover:border-white/50 transition-colors duration-300 backdrop-blur-sm">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-white/70 transition-colors duration-300" />
              {/* Glowing ring effect */}
              <div className="absolute -inset-2 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;

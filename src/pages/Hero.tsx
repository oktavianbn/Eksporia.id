import React from "react";
import Parallax from "../components/Parallax";
import Laut from "../assets/laut.jpg";
import { Globe } from "lucide-react";
import Awan from "../assets/awan.png";
import Awan2 from "../assets/awan2.svg";

const Hero = () => {
  return (
    <div>
      <Parallax background={Laut}>
        <div className="relative max-w-7xl mx-auto py-28 min-h-screen flex">
          <div className="max-w-3xl">
            {" "}
            {/* Changed from max-w-4xl to give more space for ship */}
            {/* Content */}
            <div className="text-white space-y-4">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Platform{" "}
                  <span className="text-orange-400 relative inline-block">
                    Edukasi
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-400/40 blur-sm rounded" />
                  </span>
                  <br />
                  <span className="text-orange-400">Ekspor</span> untuk UMKM
                  <br />
                  Indonesia
                </h1>
              </div>

              <p className="text-lg lg:text-xl text-white leading-relaxed">
                Siap bawa produk lokal ke pasar dunia? Di EksporMaju, kami bantu
                kamu mulai dari nol sampai bisa kirim barang ke luar negeri!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="group bg-white text-blue-700 px-8 py-4 rounded-s-xl rounded-tr-xl rounded-br-[64px] font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
                  Eksplor Yuk!
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    →
                  </span>
                </button>
                <button className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  <Globe className="w-5 h-5 inline mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </Parallax>

      <div className="absolute bottom-36 left-0 right-0 w-full">
        <img
          src={Awan2}
          alt="Kapal"
          className="absolute"
          style={{
            position: "absolute",
            width: "full",
            transform: "scale(1.2)",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

  import React, { useEffect, useState } from "react";
  import { Share2 } from "lucide-react";
  import type { DaerahData } from "../data/DataDaerah"; // Import tipe data

  interface DaerahCardProps {
    data: DaerahData;
    onClose: () => void;
  }


  const DaerahCard: React.FC<DaerahCardProps> = ({ data, onClose }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const visibleKomoditas = isExpanded ? data.komoditas : data.komoditas.slice(0, 3);



   useEffect(() => {
  // Tambah class ke <html> dan <body>
  document.documentElement.classList.add("overflow-hidden");
  document.body.classList.add("overflow-hidden");

  // Bersihkan saat modal ditutup
  return () => {
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");
  };
}, []);




    // === SHARE FUNCTION ===
    const handleShare = async () => {
      const shareText = `Lihat komoditas dari ${data.nama}: ${data.komoditas.join(", ")}`;
      if (navigator.share) {
        try {
          await navigator.share({
            title: data.nama,
            text: shareText,
            url: window.location.href,
          });
        } catch (err) {
          console.error("Gagal membagikan:", err);
        }
      } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
          alert("Info berhasil disalin ke clipboard!");
        });
      }
    };
    // === END SHARE FUNCTION ===

    return (
      <div
        style={{ touchAction: "none" }}
        className={`fixed h-screen inset-0 z-[3000] flex items-center justify-center p-4 transition-all duration-300 bg-transparent"`}
      >
        {/* Modal */}
        <div
          className="p-4 relative w-full max-w-4xl rounded-3xl shadow-3xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] bg-white/90 border border-gray-200 dark:bg-gray-800/90 dark:border-gray-700"
        >
          <div className="flex max-md:flex-col">

          {/* Content */}
          <div className="flex flex-col lg:flex-row">
            {/* Image Gallery */}
            <div className="lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2 h-20 overflow-hidden">
              {/* Mobile scrollabl  e image gallery */}
              <div className="flex lg:hidden gap-3 overflow-x-auto scroll-smooth h-20 snap-x snap-mandatory">
                {data.gambar.map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-3/4 snap-center scroll-mx-10 relative group overflow-hidden rounded-2xl"
                  >
                    <img
                      src={img}
                      alt={`gambar-${i}`}
                      className="w-full h-64 object-center transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              </div>

              {/* Desktop bento grid */}
              <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-2 w-xl h-full">
                {/* Main large image */}
                <div className="row-span-2 relative group overflow-hidden rounded-2xl">
                  <img
                    src={data.gambar[0]}
                    alt="gambar-0"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Right top */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={data.gambar[1]}
                    alt="gambar-1"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Right bottom */}
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={data.gambar[2]}
                    alt="gambar-2"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>


            {/* Content Section */}
            <div className="lg:w-1/2 px-4 flex flex-col">
              {/* Header */}
              <div className="mb-4">
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white"
                >
                  {data.nama}
                </h2>

                {/* Action buttons */}
                <div className="flex gap-3 mb-4">
                  {/* Tombol Bagikan */}
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    <Share2 className="w-4 h-4" />
                    Bagikan
                  </button>
                  {/* === Kalau butuh tombol lain, taruh di sini === */}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-4">
                <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300"> 
                  Kategori
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.kategori.map((k, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
                    >
                      {k.icon}
                      {k.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commodities */}
              <div className="mb-4 flex-1">
                <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  Komoditas Tersedia
                </h3>
                <div
                  className={`grid grid-cols-1 gap-2 overflow-x-hidden transition-all ${isExpanded ? "max-h-32 overflow-y-auto" : "max-h-full"}`}
                >
                  {visibleKomoditas.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all md:hover:scale-105 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${i % 4 === 0
                          ? "bg-green-500"
                          : i % 4 === 1
                            ? "bg-blue-500"
                            : i % 4 === 2
                              ? "bg-purple-500"
                              : "bg-orange-500"
                          }`}
                      ></div>
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Dropdown toggle */}
                {data.komoditas.length > 3 && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 px-3 py-1 text-sm rounded-md font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    {isExpanded ? "Sembunyikan" : "Lihat semua"}
                  </button>
                )}
              </div>


              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2 sm:px-8 sm:py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95 bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/25 dark:bg-red-600 dark:hover:bg-red-500 dark:shadow-red-600/25"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
          </div>

          {/* Decorative elements */}
          <div
            className="absolute top-0 left-0 w-32 h-32 rounded-full opacity-10 -translate-x-16 -translate-y-16 bg-blue-500 dark:bg-blue-400"
          ></div>
          <div
            className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-10 translate-x-12 translate-y-12 bg-purple-500 dark:bg-purple-400"
          ></div>
        </div>
    );
  };

  export default DaerahCard;

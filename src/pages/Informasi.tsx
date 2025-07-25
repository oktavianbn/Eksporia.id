import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import InformasiCard from "../components/InformasiCard";
import InformasiModal from "../components/InformasiModal";
import informasiList from "../data/DataInformasi";



export default function InformasiPage() {
  const [activeCard, setActiveCard] = useState(1);
  const [visibleStart, setVisibleStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isWidthCard, setWidthCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  // Lock scroll saat modal terbuka
  useEffect(() => {
    if (selectedCard !== null) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedCard]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleCards = isMobile ? 1 : 4;
  const maxStart = Math.max(0, informasiList.length - visibleCards);

  const handleCardClick = (id: number) => {
    if (activeCard === id) {
      setSelectedCard(id); // klik kedua: buka modal
      setWidthCard(false);
    } else {
      setWidthCard(true);
      setActiveCard(id); // klik pertama: jadikan aktif
    }
  };

  const handlePrevious = () => setVisibleStart((prev) => Math.max(0, prev - 1));
  const handleNext = () => setVisibleStart((prev) => Math.min(maxStart, prev + 1));

  const getCardWidth = () => (isMobile ? "w-full" : "w-[400px]");
  const getExpandedCardWidth = () => (isMobile ? "w-full" : "w-[650px]");

  return (
    <>
      {/* Section Informasi */}
      <div id="informasi" className="w-full min-h-screen max-md:px-6 md:px-20 py-6 overflow-x-hidden relative dark:bg-gray-900 bg-white">
        {/* Header */}
        <div className="max-w-7xl mx-auto pt-5 md:pt-24 pb-10 px-4">
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Informasi
            </h1>
          </div>
        </div>
        <div className="w-full h-max flex items-center justify-center">
          <button
            onClick={handlePrevious}
            disabled={visibleStart === 0}
            className="p-3 rounded-full mr-4 bg-white text-gray-700 shadow-lg dark:bg-gray-700 dark:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={isMobile ? 16 : 24} />
          </button>

          <div className="h-max relative w-full">
            <div className="flex gap-6 min-h-max relative z-0">
              {informasiList
                .slice(visibleStart, visibleStart + visibleCards)
                .map((card, index) => (
                  <InformasiCard
                    key={card.id}
                    card={card}
                    isActive={card.id === activeCard}
                    isMobile={isMobile}
                    getActive={isWidthCard}
                    onClick={handleCardClick}
                    index={visibleStart + index}
                    getCardWidth={getCardWidth}
                    getExpandedCardWidth={getExpandedCardWidth}
                  />
                ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={visibleStart >= maxStart}
            className="p-3 rounded-full ml-4 bg-white text-gray-700 shadow-lg dark:bg-gray-700 dark:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={isMobile ? 16 : 24} />
          </button>
        </div>

        {selectedCard !== null && (
          <InformasiModal
            data={informasiList.find(item => item.id === selectedCard)!}
            onClose={() => {
              setSelectedCard(null);
              setActiveCard(-1);
            }}
          />
        )}
      </div>
    </>
  );
}

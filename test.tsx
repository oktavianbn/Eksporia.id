import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

const CardSlider = () => {
  const [activeCard, setActiveCard] = useState(1); // Card ke-2 terbuka secara default
  const [visibleStart, setVisibleStart] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Data dummy untuk cards
  const cardsData = [
    {
      id: 0,
      title: "Ekspor Terbesar",
      subtitle: "Dalam Negeri",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      id: 1,
      title: "Cepat Kaya",
      subtitle: "Dengan Ekspor",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ad sed velit repellat porro laboriosam, iusto repudiandae ducimus."
    },
    {
      id: 2,
      title: "Teknologi Modern",
      subtitle: "Untuk Perdagangan",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud."
    },
    {
      id: 3,
      title: "Jaringan Global",
      subtitle: "Ekspor Import",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis aute irure dolor in reprehenderit."
    },
    {
      id: 4,
      title: "Solusi Terpadu",
      subtitle: "Bisnis Ekspor",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident."
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleCards = isMobile ? 3 : 5;
  const maxStart = Math.max(0, cardsData.length - visibleCards);

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  const handlePrevious = () => {
    if (visibleStart > 0) {
      setVisibleStart(visibleStart - 1);
    }
  };

  const handleNext = () => {
    if (visibleStart < maxStart) {
      setVisibleStart(visibleStart + 1);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const getCardWidth = () => {
    if (isMobile) return 'w-24'; // Mobile: smaller cards
    return activeCard !== null ? 'w-32' : 'w-28';
  };

  const getExpandedCardWidth = () => {
    return isMobile ? 'w-48' : 'w-80';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-100 text-gray-900'
    }`}>
      {/* Header dengan toggle dark mode */}
      <div className="relative flex justify-center items-center p-6">
        <h1 className={`text-3xl font-bold ${
          darkMode ? 'text-blue-400' : 'text-blue-600'
        }`}>
          Informasi
        </h1>
        <button
          onClick={toggleDarkMode}
          className={`absolute right-6 p-2 rounded-full transition-colors ${
            darkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
              : 'bg-white hover:bg-gray-50 text-gray-600 shadow-md'
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Container utama */}
      <div className="flex items-center justify-center px-4 py-8 min-h-[calc(100vh-120px)]">
        {/* Tombol Previous */}
        <button
          onClick={handlePrevious}
          disabled={visibleStart === 0}
          className={`p-3 rounded-full mr-4 transition-all duration-300 ${
            visibleStart === 0
              ? 'opacity-30 cursor-not-allowed'
              : darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white shadow-lg'
                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-lg hover:shadow-xl'
          }`}
        >
          <ChevronLeft size={isMobile ? 16 : 20} />
        </button>

        {/* Container cards */}
        <div className="flex gap-2 md:gap-4 overflow-hidden">
          {cardsData
            .slice(visibleStart, visibleStart + visibleCards)
            .map((card, index) => {
              const isActive = card.id === activeCard;
              const actualIndex = visibleStart + index;
              
              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`
                    relative cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105
                    ${isActive ? getExpandedCardWidth() : getCardWidth()} 
                    ${isMobile ? 'h-96' : 'h-screen max-h-[80vh]'}
                    rounded-xl overflow-hidden shadow-lg hover:shadow-2xl
                    ${darkMode ? 'shadow-gray-800' : 'shadow-gray-300'}
                  `}
                >
                  {/* Background image dengan gradient overlay */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                        <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id="containers" x="0" y="0" width="80" height="60" patternUnits="userSpaceOnUse">
                              <rect width="35" height="25" x="5" y="5" fill="${darkMode ? '#1f2937' : '#3b82f6'}" rx="2"/>
                              <rect width="35" height="25" x="45" y="5" fill="${darkMode ? '#374151' : '#ef4444'}" rx="2"/>
                              <rect width="35" height="25" x="5" y="30" fill="${darkMode ? '#4b5563' : '#10b981'}" rx="2"/>
                              <rect width="35" height="25" x="45" y="30" fill="${darkMode ? '#6b7280' : '#f59e0b'}" rx="2"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#containers)"/>
                          <rect width="60" height="120" x="20" y="90" fill="${darkMode ? '#dc2626' : '#dc2626'}" rx="3"/>
                          <rect width="60" height="120" x="90" y="90" fill="${darkMode ? '#dc2626' : '#dc2626'}" rx="3"/>
                          <rect width="20" height="80" x="140" y="50" fill="${darkMode ? '#f97316' : '#f97316'}" rx="8"/>
                          <rect width="20" height="80" x="170" y="50" fill="${darkMode ? '#f97316' : '#f97316'}" rx="8"/>
                        </svg>
                      `)}`
                    }}
                  />
                  
                  {/* Gradient overlay untuk teks yang lebih mudah dibaca */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Nomor card */}
                  <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    darkMode ? 'bg-blue-500' : 'bg-blue-600'
                  } text-white`}>
                    {actualIndex + 1}
                  </div>

                  {/* Konten card */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                    <div className={`transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-90'
                    }`}>
                      <h3 className={`font-bold leading-tight mb-1 ${
                        isMobile ? 'text-sm' : isActive ? 'text-lg' : 'text-base'
                      }`}>
                        {card.title}
                      </h3>
                      <p className={`mb-2 ${
                        isMobile ? 'text-xs' : isActive ? 'text-sm' : 'text-sm'
                      } opacity-90 leading-tight`}>
                        {card.subtitle}
                      </p>
                      
                      {/* Deskripsi hanya muncul di card aktif */}
                      <div className={`overflow-hidden transition-all duration-500 ${
                        isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className={`${
                          isMobile ? 'text-xs' : 'text-sm'
                        } text-gray-200 leading-relaxed`}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Indikator active card */}
                  {isActive && (
                    <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${
                      darkMode ? 'bg-green-400' : 'bg-green-500'
                    } animate-pulse`} />
                  )}
                </div>
              );
            })}
        </div>

        {/* Tombol Next */}
        <button
          onClick={handleNext}
          disabled={visibleStart >= maxStart}
          className={`p-3 rounded-full ml-4 transition-all duration-300 ${
            visibleStart >= maxStart
              ? 'opacity-30 cursor-not-allowed'
              : darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white shadow-lg'
                : 'bg-white hover:bg-gray-50 text-gray-700 shadow-lg hover:shadow-xl'
          }`}
        >
          <ChevronRight size={isMobile ? 16 : 20} />
        </button>
      </div>

      {/* Indikator posisi */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(cardsData.length / visibleCards) }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              Math.floor(visibleStart / visibleCards) === index
                ? darkMode ? 'bg-blue-400' : 'bg-blue-600'
                : darkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
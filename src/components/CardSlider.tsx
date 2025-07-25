import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";

import InformasiCard from "./InformasiCard";
import informasiList from "../data/DataInformasi";

interface CardSliderProps {
    onCardClick?: (id: number) => void;
    }

const CardSlider : React.FC<CardSliderProps> = () => {
    const [activeCard, setActiveCard] = useState(1);
    const [visibleStart, setVisibleStart] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const visibleCards = isMobile ? 3 : 5;
    const maxStart = Math.max(0, informasiList.length - visibleCards);

    const handleCardClick = (id: number) => setActiveCard(id);
    const handlePrevious = () => setVisibleStart(prev => Math.max(0, prev - 1));
    const handleNext = () => setVisibleStart(prev => Math.min(maxStart, prev + 1));
    const toggleDarkMode = () => setDarkMode(prev => !prev);

    const getCardWidth = () => (isMobile ? "w-24" : "w-32");
    const getExpandedCardWidth = () => (isMobile ? "w-48" : "w-80");

    return (
        <div className={`min-h-screen w-full transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            <div className="relative flex justify-center items-center p-6">
                <h1 className={`text-3xl font-bold ${darkMode ? "text-blue-400" : "text-blue-600"}`}>Informasi</h1>
                <button onClick={toggleDarkMode} className={`absolute right-6 p-2 rounded-full ${darkMode ? "bg-gray-700 text-yellow-400" : "bg-white text-gray-600 shadow-md"}`}>
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            <div className="flex items-center justify-center w-full px-4 py-4 min-h-[calc(100vh-120px)]">
                <button onClick={handlePrevious} disabled={visibleStart === 0} className={`p-3 rounded-full mr-4 ${visibleStart === 0 ? "opacity-30 cursor-not-allowed" : darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-700 shadow-lg"}`}>
                    <ChevronLeft size={isMobile ? 16 : 20} />
                </button>

                <div className="flex gap-2 md:gap-4 overflow-hidden">
                    {informasiList.slice(visibleStart, visibleStart + visibleCards).map((card, index) => (
                        <InformasiCard
                            key={card.id}
                            card={card}

                            isActive={card.id === activeCard}
                            // darkMode={darkMode}
                            isMobile={isMobile}
                            onClick={handleCardClick}
                            index={visibleStart + index}
                            getCardWidth={getCardWidth}
                            getExpandedCardWidth={getExpandedCardWidth} getActive={false}                        />
                    ))}
                </div>

                <button onClick={handleNext} disabled={visibleStart >= maxStart} className={`p-3 rounded-full ml-4 ${visibleStart >= maxStart ? "opacity-30 cursor-not-allowed" : darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-700 shadow-lg"}`}>
                    <ChevronRight size={isMobile ? 16 : 20} />
                </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: Math.ceil(informasiList.length / visibleCards) }).map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full ${Math.floor(visibleStart / visibleCards) === index ? (darkMode ? "bg-blue-400" : "bg-blue-600") : (darkMode ? "bg-gray-600" : "bg-gray-300")}`} />
                ))}
            </div>
        </div>
    );
};

export default CardSlider;

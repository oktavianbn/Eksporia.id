import React from "react";

interface CardProps {
    card: {
        id: number;
        title: string;
        subtitle: string;
        description: string;
    };
    isActive: boolean;
    darkMode: boolean;
    isMobile: boolean;
    onClick: (id: number) => void;
    index: number;
    getCardWidth: () => string;
    getExpandedCardWidth: () => string;
}

const InformasiCard: React.FC<CardProps> = ({
    card,
    isActive,
    darkMode,
    isMobile,
    onClick,
    index,
    getCardWidth,
    getExpandedCardWidth,
}) => {
    const background = encodeURIComponent(`
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
    </svg>
  `);

    return (
        <div
        id="card"
            onClick={() => onClick(card.id)}
            className={`
        relative cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105
        ${isActive ? getExpandedCardWidth() : getCardWidth()}
        ${isMobile ? "h-96" : "h-screen max-h-[80vh]"}
        rounded-xl overflow-hidden shadow-lg hover:shadow-2xl
        ${darkMode ? "shadow-gray-800" : "shadow-gray-300"}
      `}
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("data:image/svg+xml,${background}")` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Nomor */}
            <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${darkMode ? "bg-blue-500" : "bg-blue-600"
                } text-white`}>
                {index + 1}
            </div>

            {/* Konten */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <h3 className={`font-bold leading-tight mb-1 ${isMobile ? "text-sm" : isActive ? "text-lg" : "text-base"}`}>
                    {card.title}
                </h3>
                <p className={`mb-2 ${isMobile ? "text-xs" : "text-sm"} opacity-90`}>
                    {card.subtitle}
                </p>
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                    <p className={`${isMobile ? "text-xs" : "text-sm"} text-gray-200`}>{card.description}</p>
                </div>
            </div>

            {/* Indikator */}
            {isActive && (
                <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${darkMode ? "bg-green-400" : "bg-green-500"
                    } animate-pulse`} />
            )}
        </div>
    );
};

export default InformasiCard;

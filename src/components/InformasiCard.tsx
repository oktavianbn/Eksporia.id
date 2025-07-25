import React from "react";

interface CardProps {
    card: {
        id: number;
        title: string;
        subtitle: string;
        image: string;
        description: string;
    };
    isActive: boolean;
    isMobile: boolean;
    getActive: boolean;
    onClick: (id: number) => void;
    index: number;
    getCardWidth: () => string;
    getExpandedCardWidth: () => string;
}

const InformasiCard: React.FC<CardProps> = ({
    card,
    isActive,
    isMobile,
    onClick,
    index,
    getCardWidth,
    getActive,
    getExpandedCardWidth,
}) => {
    return (
        <div
        
            onClick={() => onClick(card.id)}
            className={`z-10 relative cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105
            ${isActive ? getExpandedCardWidth() : getCardWidth()}
            ${isMobile ? "h-96" : "h-screen max-h-[80vh]"}
            rounded-xl overflow-hidden shadow-lg hover:shadow-2xl`}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Nomor bulat kiri atas */}
            <div className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-blue-600 text-white dark:bg-blue-500">
                {index + 1}
            </div>

            {/* Konten bawah */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                <h3 className={`font-bold leading-tight mb-1 ${isMobile ? "text-sm" : isActive ? "text-lg" : "text-base"}`}>
                    {card.title}
                </h3>
                <p className={`mb-2 ${isMobile ? "text-xs" : "text-sm"} opacity-90`}>
                    {card.subtitle}
                </p>
                <p className="text-zinc-200 dark:text-zinc-300 text-sm line-clamp-2">{card.description}</p>
                
                <h1 className="text-zinc-300 dark:text-zinc-300 text-sm">{isActive?" (Klik untuk selengkapnya)":""}</h1>
            </div>
        </div>
    );
};

export default InformasiCard;

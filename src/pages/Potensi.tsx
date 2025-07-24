import { useState, type SetStateAction } from "react";
import PotensiModal from "../components/PotensiModal";
import PotensiCard from "../components/PotensiCard";

import potensiList from "../data/DataPotensi";

function Potensi() {

    const [darkMode, setDarkMode] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);

    // const handleCardClick = (data: Potensi) => {
    //   setSelectedProduct(data);
    //   setIsModalOpen(true);
    // };
    const handleCardClick = (data:any) => {
        setSelectedProduct(data);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`transition-colors px-auto duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
            <div className="relative max-w-7xl mx-auto py-20 min-h-screen flex flex-col justify-centerr">
                {/* Header */}
                <div className="flex items-center text-center justify-between mb-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-center">
                        Potensi
                    </h1>
                </div>

                {/* Cards Container */}
                <div className="relative">
                    <div className={`flex justify-between gap-4 transition-all duration-500 ${showAll ? 'flex-wrap' : 'overflow-hidden'}`}>
                        {potensiList.map((data, index) => (
                            <div
                                key={data.id}
                                className={`transition-all duration-500 ${!showAll && index >= 2 ? 'hidden sm:block' : ''
                                    } ${!showAll && index >= 3 ? 'hidden lg:block' : ''
                                    } ${!showAll && index >= 4 ? 'hidden xl:block' : ''
                                    } ${!showAll && index >= 5 ? 'hidden' : ''
                                    }`}
                            >
                                <PotensiCard
                                    data={data}
                                    onClick={handleCardClick}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlay - hanya tampil jika tidak showAll */}
                    {!showAll && (
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
                    )}
                </div>

                {/* Selengkapnya Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={toggleShowAll}
                        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full font-medium transition-colors duration-200 border border-gray-300 dark:border-gray-600"
                    >
                        {showAll ? 'Sembunyikan' : 'Selengkapnya'}
                    </button>
                </div>

                {/* Modal */}
                <PotensiModal
                    data={selectedProduct}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </div>
        </div>
    );
};

export default Potensi;
import { MapPin, Star, Eye } from "lucide-react";
import type { PotensiData } from "../data/DataPotensi";

interface PotensiCardProps {
    data:PotensiData;
    onClick: (data: PotensiData) => void;
}
const PotensiCard : React.FC<PotensiCardProps> = ({ data, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 flex-shrink-0 w-72 sm:w-80"
      onClick={() => onClick(data)}
    >
      <div className="relative">
        <img 
          src={data.image} 
          alt={data.nama}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {data.kategori}
          </span>
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-1">
          <MapPin className="w-3 h-3 mr-1" />
          <span>{data.lokasi}</span>
        </div>
        
        <h3 className="font-semibold text-base text-gray-900 dark:text-white mb-2">
          {data.nama}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-2">
          {data.deskripsi.substring(0, 80)}...
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="text-xs text-gray-600 dark:text-gray-300">{data.rating}</span>
          </div>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 flex items-center">
            <Eye className="w-3 h-3 mr-1" />
            Pelajari
          </button>
        </div>
      </div>
    </div>
  );
};
export default PotensiCard;
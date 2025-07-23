// components/DaerahCard.tsx
import { X } from "lucide-react";
import { DaerahData } from "../data/daerah";

interface DaerahCardProps {
  data: DaerahData;
  onClose: () => void;
}

const DaerahCard: React.FC<DaerahCardProps> = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-4 w-[600px] shadow-xl relative animate-fadeIn">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {data.gambar.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`gambar-${i}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-2">{data.nama}</h2>

        <ul className="list-disc pl-5 text-gray-700 mb-4">
          {data.komoditas.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="flex gap-2 mb-4">
          {data.kategori.map((k, i) => (
            <span
              key={i}
              className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-sm font-medium"
            >
              {k.icon}
              {k.text}
            </span>
          ))}
        </div>

        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default DaerahCard;

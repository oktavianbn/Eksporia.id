import { X } from "lucide-react";

interface InformasiModalProps {
  data: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  onClose: () => void;
}

const InformasiModal: React.FC<InformasiModalProps> = ({ data, onClose }) => {
  return (
    <div className="fixed z-[3000] inset-0 max-h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center ">
      <div className="relative overflow-y-auto max-h-xl bg-white dark:bg-zinc-900 rounded-xl shadow-xl w-[90%] max-w-3xl overflow-hidden">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
        >
          <X className="w-5 h-5 text-zinc-800 dark:text-zinc-100" />
        </button>

        {/* Isi Artikel */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-6 ">
          <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-1">{data.title}</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{data.subtitle}</p>
          <p className="text-zinc-700 dark:text-zinc-300">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InformasiModal;

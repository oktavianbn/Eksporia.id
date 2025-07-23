// data/daerah.ts
import { Factory, Sprout, Scissors } from "lucide-react";

export interface DaerahData {
  nama: string;
  komoditas: string[];
  kategori: { icon: JSX.Element; text: string }[];
  gambar: string[];
}

export const daerahList: DaerahData[] = [
  {
    nama: "Sumatra Selatan",
    komoditas: [
      "Kopi robusta",
      "Rempah-rempah",
      "Keripik singkong",
      "Songket Palembang",
      "Kerajinan rotan",
    ],
    kategori: [
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
      { icon: <Sprout className="w-4 h-4" />, text: "Pertanian" },
      { icon: <Scissors className="w-4 h-4" />, text: "Kerajinan" },
    ],
    gambar: [
    //   "/images/songket.jpg",
    //   "/images/kopi.jpg",
    //   "/images/karet.jpg",
    ],
  },
  // Tambah daerah lain...
];

// data/daerah.ts
import { Factory, Sprout, Scissors, Fish, Wheat, Mountain, Trees, Droplet } from "lucide-react";
import type { JSX } from "react";

export interface DaerahData {
  nama: string;
  komoditas: string[];
  kategori: { icon: JSX.Element; text: string }[];
  gambar: string[];
}

const daerahList: DaerahData[] = [
  {
    nama: "Sumatra",
    komoditas: [
      "Kopi robusta",
      "Kelapa sawit",
      "Rempah-rempah",
      "Karet",
      "Ikan laut",
      "Keripik singkong",
    ],
    kategori: [
      { icon: <Sprout className="w-4 h-4" />, text: "Pertanian" },
      { icon: <Fish className="w-4 h-4" />, text: "Perikanan" },
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
    ],
    gambar: [
      "/src/assets/image/sumatra/kopi.jpg",
      "/src/assets/image/sumatra/sawit.jpg",
      "/src/assets/image/sumatra/rempah.jpg",
    ],
  },
  {
    nama: "Jawa",
    komoditas: [
      "Batik",
      "Teh",
      "Beras",
      "Kerajinan kayu",
      "Tebu",
    ],
    kategori: [
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
      { icon: <Wheat className="w-4 h-4" />, text: "Pangan" },
      { icon: <Scissors className="w-4 h-4" />, text: "Kerajinan" },
    ],
    gambar: [
      "/src/assets/image/jawa/batik.jpeg",
      "/src/assets/image/jawa/teh.wpeg",
      "/src/assets/image/jawa/beras.jpg",
    ],
  },
  {
    nama: "Kalimantan",
    komoditas: [
      "Rotan",
      "Hasil hutan",
      "Kelapa sawit",
      "Lada",
      "Kayu ulin",
    ],
    kategori: [
      { icon: <Trees className="w-4 h-4" />, text: "Hasil Hutan" },
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
      { icon: <Sprout className="w-4 h-4" />, text: "Pertanian" },
    ],
    gambar: [
      "/src/assets/image/kalimantan/rotan.wpeg",
      "/src/assets/image/kalimantan/lada.wpeg",
      "/src/assets/image/kalimantan/kayu.jpg",
    ],
  },
  {
    nama: "Sulawesi",
    komoditas: [
      "Cokelat",
      "Kopi Toraja",
      "Kelapa",
      "Ikan tuna",
      "Cengkeh",
    ],
    kategori: [
      { icon: <Sprout className="w-4 h-4" />, text: "Pertanian" },
      { icon: <Fish className="w-4 h-4" />, text: "Perikanan" },
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
    ],
    gambar: [
      "/src/assets/image/sulawesi/cokelat.jpg",
      "/src/assets/image/sulawesi/kopi-toraja.jpg",
      "/src/assets/image/sulawesi/ikan.jpg",
    ],
  },
  {
    nama: "Papua",
    komoditas: [
      "Kopi Wamena",
      "Ikan laut",
      "Kayu merbau",
      "Buah merah",
      "Sagu",
    ],
    kategori: [
      { icon: <Mountain className="w-4 h-4" />, text: "Hasil Alam" },
      { icon: <Fish className="w-4 h-4" />, text: "Perikanan" },
      { icon: <Sprout className="w-4 h-4" />, text: "Pertanian" },
    ],
    gambar: [
      "/src/assets/image/papua/kopi.jpg",
      "/src/assets/image/papua/sagu.jpg",
      "/src/assets/image/papua/ikan.jpg",
    ],
  },
  {
    nama: "Bali & Nusa Tenggara",
    komoditas: [
      "Kopi Bali Kintamani",
      "Garam Amed",
      "Kerajinan perak",
      "Rumput laut",
      "Tenun ikat",
    ],
    kategori: [
      { icon: <Scissors className="w-4 h-4" />, text: "Kerajinan" },
      { icon: <Sprout className="w-4 h-4" />, text: "Pertanian" },
      { icon: <Droplet className="w-4 h-4" />, text: "Kelautan" },
    ],
    gambar: [
      "/src/assets/image/bali-nt/kopi.jpg",
      "/src/assets/image/bali-nt/garam.jpg",
      "/src/assets/image/bali-nt/tenun.jpg",
    ],
  },
  {
    nama: "Maluku",
    komoditas: [
      "Pala",
      "Cengkeh",
      "Ikan tuna",
      "Kopra",
      "Rumput laut",
    ],
    kategori: [
      { icon: <Fish className="w-4 h-4" />, text: "Perikanan" },
      { icon: <Sprout className="w-4 h-4" />, text: "Rempah" },
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
    ],
    gambar: [
      "/src/assets/image/maluku/pala.jpg",
      "/src/assets/image/maluku/cengkeh.jpg",
      "/src/assets/image/maluku/ikan.jpg",
    ],
  },
];

export default daerahList;

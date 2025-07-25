// data/daerah.ts
import { Factory, Sprout, Scissors, Fish, Wheat, Mountain, Trees, Droplet } from "lucide-react";
import type { JSX } from "react";

// Sumatara
import kopiSumatra from "../assets/image/sumatra/kopi.jpg";
import sawitSumatra from "../assets/image/sumatra/sawit.jpg";
import rempahSumatra from "../assets/image/sumatra/rempah.jpg";

// Jawa
import batikJawa from "../assets/image/jawa/batik.jpeg";
import tehJawa from "../assets/image/jawa/teh.webp"; 
import berasJawa from "../assets/image/jawa/beras.jpg";

// Kalimantan
import ladaKaltim from "../assets/image/kalimantan/lada.webp";
import rotanKaltim from "../assets/image/kalimantan/rotan.webp";
import kayuKaltim from "../assets/image/kalimantan/kayu.jpg";

// Sulawesi
import cokelatSulawesi from "../assets/image/sulawesi/coklat.jpg";
import kopiToraja from "../assets/image/sulawesi/kopi-toraja.jpg";
import ikanSulawesi from "../assets/image/sulawesi/ikan.jpg";

// Papua
import kopiPapua from "../assets/image/papua/kopi.webp";
import saguPapua from "../assets/image/papua/sagu.jpg";
import ikanPapua from "../assets/image/papua/ikan2.jpg";

// Bali & Nusa Tenggara
import garamBali from "../assets/image/nusaTenggara/garam.jpg";
import tembakauntt from "../assets/image/nusaTenggara/tembakau.jpg";
import tenunBali from "../assets/image/nusaTenggara/tenun.jpg";

// Maluku
import palaMaluku from "../assets/image/maluku/pala.jpg";
import cengkehMaluku from "../assets/image/maluku/cengkeh.jpg";
import ikanMaluku from "../assets/image/maluku/ikan1.jpg";


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
    gambar: [kopiSumatra, sawitSumatra, rempahSumatra],
  },
  {
    nama: "Jawa",
    komoditas: ["Batik", "Teh", "Beras", "Kerajinan kayu", "Tebu"],
    kategori: [
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
      { icon: <Wheat className="w-4 h-4" />, text: "Pangan" },
      { icon: <Scissors className="w-4 h-4" />, text: "Kerajinan" },
    ],
    gambar: [batikJawa, tehJawa, berasJawa],
  },
  {
    nama: "Kalimantan",
    komoditas: ["Rotan", "Hasil hutan", "Kelapa sawit", "Lada", "Kayu ulin"],
    kategori: [
      { icon: <Trees className="w-4 h-4" />, text: "Hasil Hutan" },
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
      { icon: <Sprout className="w-4 h-4" />, text: "Pertanian" },
    ],
    gambar: [rotanKaltim, ladaKaltim, kayuKaltim],
  },
  {
    nama: "Sulawesi",
    komoditas: ["Cokelat", "Kopi Toraja", "Kelapa", "Ikan tuna", "Cengkeh"],
    kategori: [
      { icon: <Sprout className="w-4 h-4" />, text: "Pertanian" },
      { icon: <Fish className="w-4 h-4" />, text: "Perikanan" },
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
    ],
    gambar: [cokelatSulawesi, kopiToraja, ikanSulawesi],
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
    gambar: [kopiPapua, saguPapua, ikanPapua],
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
    gambar: [tembakauntt, garamBali, tenunBali],
  },
  {
    nama: "Maluku",
    komoditas: ["Pala", "Cengkeh", "Ikan tuna", "Kopra", "Rumput laut"],
    kategori: [
      { icon: <Fish className="w-4 h-4" />, text: "Perikanan" },
      { icon: <Sprout className="w-4 h-4" />, text: "Rempah" },
      { icon: <Factory className="w-4 h-4" />, text: "Industri" },
    ],
    gambar: [palaMaluku, cengkehMaluku, ikanMaluku],
  },
];

export default daerahList;

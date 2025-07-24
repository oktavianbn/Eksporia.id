export interface PotensiData{
    id: number;
    nama: string;
    lokasi: string;
    image: string;
    kategori: string;
    deskripsi: string;
    produksiTahunan: string;
    areaProduksi: string;
    jumlahPetani: string;
    tahunMulai: string;
    keunggulan: string[];
    pasar: string[];
    rating: number;
}

const potensiList = [
  {
    id: 1,
    nama: "Kopi Arabika",
    lokasi: "Sumatera Selatan",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=200&fit=crop",
    kategori: "Pertanian",
    deskripsi: "Kopi arabika premium dengan cita rasa khas Sumatera yang telah dikenal hingga mancanegara. Memiliki karakteristik rasa yang bold dengan aroma yang kuat.",
    produksiTahunan: "15,000 ton",
    areaProduksi: "25,000 Ha",
    jumlahPetani: "8,500 petani",
    tahunMulai: "1920",
    keunggulan: ["Rasa bold dan kuat", "Aroma khas Sumatera", "Kualitas ekspor", "Ramah lingkungan"],
    pasar: ["Lokal", "Nasional", "Ekspor"],
    rating: 4.8
  },
  {
    id: 2,
    nama: "Teh Hijau",
    lokasi: "Jawa Barat",
    image: "https://images.unsplash.com/photo-1556909046-f58c37a7d9b3?w=300&h=200&fit=crop",
    kategori: "Pertanian",
    deskripsi: "Teh hijau berkualitas tinggi dengan proses pengolahan tradisional yang telah diwariskan turun temurun.",
    produksiTahunan: "8,500 ton",
    areaProduksi: "12,000 Ha",
    jumlahPetani: "4,200 petani",
    tahunMulai: "1878",
    keunggulan: ["Antioksidan tinggi", "Rasa segar", "Organik", "Kemasan modern"],
    pasar: ["Lokal", "Nasional"],
    rating: 4.6
  },
  {
    id: 3,
    nama: "Batik Tulis",
    lokasi: "Yogyakarta",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    kategori: "Kerajinan",
    deskripsi: "Batik tulis tradisional dengan motif khas Yogyakarta yang merupakan warisan budaya Indonesia.",
    produksiTahunan: "50,000 pcs",
    areaProduksi: "500 workshop",
    jumlahPetani: "2,800 pengrajin",
    tahunMulai: "1755",
    keunggulan: ["Motif unik", "Handmade", "Warisan UNESCO", "Kualitas premium"],
    pasar: ["Lokal", "Nasional", "Ekspor"],
    rating: 4.9
  },
  {
    id: 4,
    nama: "Udang Vaname",
    lokasi: "Lampung",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=200&fit=crop",
    kategori: "Perikanan",
    deskripsi: "Udang vaname hasil budidaya tambak dengan sistem teknologi modern dan ramah lingkungan.",
    produksiTahunan: "12,000 ton",
    areaProduksi: "3,500 Ha",
    jumlahPetani: "1,200 pembudidaya",
    tahunMulai: "2005",
    keunggulan: ["Teknologi modern", "Kualitas ekspor", "Sistem berkelanjutan", "Harga kompetitif"],
    pasar: ["Nasional", "Ekspor"],
    rating: 4.7
  },
  {
    id: 5,
    nama: "Kerajinan Rotan",
    lokasi: "Kalimantan Selatan",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    kategori: "Kerajinan",
    deskripsi: "Kerajinan rotan berkualitas tinggi dengan desain modern yang menggabungkan tradisi dan inovasi.",
    produksiTahunan: "25,000 pcs",
    areaProduksi: "200 workshop",
    jumlahPetani: "1,500 pengrajin",
    tahunMulai: "1960",
    keunggulan: ["Bahan alami", "Desain modern", "Tahan lama", "Eco-friendly"],
    pasar: ["Lokal", "Nasional", "Ekspor"],
    rating: 4.5
  },
  {
    id: 6,
    nama: "Ikan Patin",
    lokasi: "Riau",
    image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop",
    kategori: "Perikanan",
    deskripsi: "Ikan patin budidaya dengan kualitas premium, dibudidayakan di kolam dengan sistem bioflok.",
    produksiTahunan: "18,000 ton",
    areaProduksi: "2,800 Ha",
    jumlahPetani: "3,200 pembudidaya",
    tahunMulai: "1995",
    keunggulan: ["Daging tebal", "Nutrisi tinggi", "Sistem bioflok", "Bebas antibiotik"],
    pasar: ["Lokal", "Nasional"],
    rating: 4.4
  }
];
export default potensiList;
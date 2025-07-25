import eksporDalamNegeri from "../assets/informasi/ekspor-dalam-negeri.jpg";
import jadiKayaEkspor from "../assets/informasi/jadi-kaya-ekspor.jpg";
import teknologiPerdagangan from "../assets/informasi/teknologi-perdagangan.jpg";
import jaringanGlobal from "../assets/informasi/jaringan-global.jpg";
import solusiTerpadu from "../assets/informasi/solusi-terpadu.jpg";
import legalitasRegulasi from "../assets/informasi/legalitas-regulasi.jpg";
import produkPotensial from "../assets/informasi/produk-potensial.png";
import transportasiEfisien from "../assets/informasi/transportasi-efisien.jpg";

export interface Informasi {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const informasiList: Informasi[] = [
  {
    id: 0,
    title: "Ekspor Terbesar",
    subtitle: "Dalam Negeri",
    description:
      "Indonesia menjadi salah satu pengekspor utama produk agrikultur dan tambang, seperti kelapa sawit, batubara, karet, dan kopi. Negara-negara seperti India, Tiongkok, dan Uni Eropa merupakan pasar utama bagi produk ekspor Indonesia. Pemerintah terus mendorong peningkatan nilai tambah melalui hilirisasi industri dan peningkatan kualitas produk agar lebih kompetitif di pasar global.",
    image: eksporDalamNegeri,
  },
  {
    id: 1,
    title: "Jadi Kaya",
    subtitle: "Dengan Ekspor",
    description:
      "Ekspor bukan hanya tentang menjual barang ke luar negeri, tapi juga memahami kebutuhan pasar global dan memanfaatkan kekuatan produk lokal. Dengan strategi pemasaran yang tepat, dukungan logistik, dan kepatuhan terhadap regulasi internasional, pelaku usaha bisa meraih keuntungan yang signifikan. Banyak eksportir lokal yang telah membuktikan bahwa bisnis ekspor adalah jalan menuju kemandirian ekonomi dan kesejahteraan.",
    image: jadiKayaEkspor,
  },
  {
    id: 2,
    title: "Teknologi Modern",
    subtitle: "Untuk Perdagangan",
    description:
      "Teknologi digital seperti platform e-commerce B2B, integrasi logistik, dan sistem pelacakan real-time telah mengubah cara pelaku usaha mengelola ekspor. Data analytics juga membantu memetakan permintaan dan tren pasar. Penggunaan teknologi tidak hanya meningkatkan efisiensi, tetapi juga memberikan transparansi dan keamanan dalam transaksi internasional.",
    image: teknologiPerdagangan,
  },
  {
    id: 3,
    title: "Jaringan Global",
    subtitle: "Ekspor Import",
    description:
      "Membangun jaringan global merupakan aset penting dalam perdagangan internasional. Hubungan baik dengan mitra bisnis dari luar negeri dapat membuka banyak peluang kolaborasi, pemasaran bersama, hingga pengembangan produk baru. Dengan memperluas koneksi ke berbagai negara, pelaku usaha bisa menavigasi tantangan global secara lebih fleksibel dan adaptif.",
    image: jaringanGlobal,
  },
  {
    id: 4,
    title: "Solusi Terpadu",
    subtitle: "Bisnis Ekspor",
    description:
      "Memulai bisnis ekspor seringkali terasa rumit, namun berbagai layanan pendukung kini tersedia untuk membantu. Mulai dari pembiayaan ekspor, pelatihan ekspor, jasa pengurusan dokumen, sertifikasi halal dan SNI, hingga layanan logistik terpadu. Semua ini bertujuan untuk mempermudah UMKM maupun perusahaan besar dalam menembus pasar internasional dengan lebih percaya diri.",
    image: solusiTerpadu,
  },
  {
    id: 5,
    title: "Legalitas & Regulasi",
    subtitle: "Ekspor Aman",
    description:
      "Kepatuhan terhadap aturan ekspor sangat penting untuk kelancaran bisnis. Pelaku ekspor harus memahami dokumen seperti HS Code, PEB (Pemberitahuan Ekspor Barang), COO (Certificate of Origin), serta persyaratan dari negara tujuan. Ketidaktahuan terhadap regulasi bisa menyebabkan barang tertahan di bea cukai, denda, atau bahkan penolakan. Pemerintah dan lembaga ekspor siap memberikan bimbingan terkait hal ini.",
    image: legalitasRegulasi,
  },
  {
    id: 6,
    title: "Produk Potensial",
    subtitle: "Unggulan Lokal",
    description:
      "Indonesia memiliki banyak produk unggulan yang diminati pasar global, seperti kopi specialty, rempah-rempah, tekstil batik, rotan, hingga produk makanan ringan khas daerah. Dengan pengemasan yang menarik dan narasi budaya yang kuat, produk-produk lokal bisa bersaing dan memiliki daya tarik di pasar luar negeri. Kunci keberhasilan adalah inovasi, kualitas, dan konsistensi.",
    image: produkPotensial,
  },
  {
    id: 7,
    title: "Transportasi Efisien",
    subtitle: "Rantai Pasok",
    description:
      "Efisiensi pengiriman barang sangat menentukan keberhasilan ekspor. Pemilihan pelabuhan utama, pengaturan kontainer, kerja sama dengan forwarder, dan penggunaan jalur logistik yang optimal akan menekan biaya dan waktu pengiriman. Selain itu, sistem manajemen rantai pasok yang baik akan memastikan barang sampai ke tangan pembeli dalam kondisi terbaik dan tepat waktu.",
    image: transportasiEfisien,
  },
];

export default informasiList;

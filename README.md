# ⚛️ Menjalankan Website React

Petunjuk ini akan membantu Anda menjalankan proyek React JS yang sudah ada (misalnya hasil ekstrak file ZIP) dan menampilkan tampilan (view) React di browser.

---

## 🧰 Prasyarat

Sebelum memulai, pastikan Anda sudah menginstal:

* [Node.js (versi LTS)](https://nodejs.org/) – disarankan versi 18 atau lebih tinggi

Cek dengan perintah:

```bash
node -v
npm -v
```

---

## 📂 1. Ekstrak dan Masuk ke Folder Proyek

Misalnya file ZIP Anda bernama `react-project.zip`, lakukan langkah berikut:

```bash
unzip Eksporia.id.zip
cd Eksporia.id
```

Gantilah `nama-folder-proyek` sesuai dengan nama folder hasil ekstrak Anda.

---

## 📦 2. Instalasi Dependensi

Jalankan perintah berikut di dalam folder proyek:

```bash
npm install
```

Ini akan mengunduh semua package/library yang dibutuhkan berdasarkan `package.json`.

---

## ▶️ 3. Menjalankan Aplikasi

Jalankan salah satu dari perintah berikut, tergantung pada tool yang digunakan oleh proyek:

### Jika menggunakan Vite:

```bash
npm run dev
```

Akses di browser: [http://localhost:5173](http://localhost:5173)

### Jika menggunakan Create React App:

```bash
npm start
```

Akses di browser: [http://localhost:3000](http://localhost:3000)

---

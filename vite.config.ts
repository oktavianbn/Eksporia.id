import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],server: {
    host: true, // wajib biar bisa diakses publik
    allowedHosts: ['breezy-bats-leave.loca.lt'], // ganti sesuai tunnel kamu
  }
})

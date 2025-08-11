import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   darkMode: 'media', // OS এর ডার্ক মোড detect করবে
  plugins: [
    tailwindcss(),
    react()
  ],
})

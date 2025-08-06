import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/portfolio': 'http://localhost:5100',
      '/auth': 'http://localhost:5100',
    },
  },
}) 
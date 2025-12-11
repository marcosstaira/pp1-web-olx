import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://167.71.123.166:8080',
        changeOrigin: true,
        // Remova a linha rewrite ou use assim:
        rewrite: (path) => path
      },
    },
  },
})
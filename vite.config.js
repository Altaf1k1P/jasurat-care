import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500, // Specify the port for the development server
    open: true, // Open the browser automatically when the server starts
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist-mobile',
    rollupOptions: {
      input: {
        mobile: 'mobile.html'
      }
    }
  },
  server: {
    port: 5174,
    host: true
  },
  preview: {
    port: 4174,
    host: true
  }
})

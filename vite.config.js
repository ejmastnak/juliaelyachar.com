import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    imagetools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

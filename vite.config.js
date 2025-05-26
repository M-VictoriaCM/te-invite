import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base:'/',
  plugins: [vue()],
  define: {
    'import.meta.env': JSON.stringify(process.env)
  }
})

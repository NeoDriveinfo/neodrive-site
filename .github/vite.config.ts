// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Importante: usa el nombre EXACTO del repo
export default defineConfig({
  plugins: [react()],
  base: '/neodrive-site/',
})

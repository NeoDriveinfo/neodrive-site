// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ¡Importante! base = '/<nombre-del-repo>/'
export default defineConfig({
  plugins: [react()],
  base: '/neodrive-site/',
})

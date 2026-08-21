import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (tiwaritradingcompany.com) serves the site from the root,
// so base stays '/'. If you ever host at username.github.io/ttc instead,
// change this to '/ttc/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: { outDir: 'dist', assetsInlineLimit: 8192 },
})

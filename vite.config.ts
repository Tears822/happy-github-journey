
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger"

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  server: {
    port: 8080,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  // Make sure TypeScript options don't conflict
  optimizeDeps: {
    force: true
  }
}))

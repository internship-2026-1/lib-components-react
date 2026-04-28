import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'lib': path.resolve(__dirname, '..', 'src')
    }
  },
  server: {
    port: 5173,
    fs: {
      // allow serving files from project root (one level up)
      allow: [path.resolve(__dirname, '..')]
    }
  }
})

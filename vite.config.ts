import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), react()],
})

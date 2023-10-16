import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { host: false, open: true },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
})

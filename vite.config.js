import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/svc-website/', // ← اسم الريبو على GitHub
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // ✅ apka network IP expose karega
    port: 5173,        // ✅ default port (chahe to change kar sakte ho)
  },
})

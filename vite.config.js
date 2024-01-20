// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


//https://vitejs.dev/config/
const isProduction = process.env.NODE_ENV === "production";


export default defineConfig({
  base: isProduction ? "/clplace/" : "./",
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': path.resolve(fileURLToPath(import.meta.url), '../../react-data-tables/public/images')
    },
  },
  server: {
    fs: {
      allow: [
        // Autoriser l'accès au répertoire racine du projet
        path.resolve(fileURLToPath(import.meta.url), '../../'),
        // Autoriser l'accès au répertoire externe contenant les images
        path.resolve(fileURLToPath(import.meta.url), '../../react-data-tables/public/images')
      ],
    },
  },
});
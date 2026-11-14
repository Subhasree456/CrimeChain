import fs from 'node:fs';
if (fs.realpathSync.native) {
  fs.realpathSync.native = fs.realpathSync;
}
if (fs.realpath.native) {
  fs.realpath.native = fs.realpath;
}

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});


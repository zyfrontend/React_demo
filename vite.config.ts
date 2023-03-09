import { defineConfig } from 'vite';
import { join } from 'path';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';
import nodePolyfills from 'rollup-plugin-polyfill-node';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      util: 'util/',
    }),
  ],
  base: './',
  // Node.js global to browser globalThis
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {},
});

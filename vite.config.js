import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  define: {
    'process.env': {} // Polyfill process.env if it's used in your project
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: 'src/main.js', // Entry file for the app
      name: 'MyVueApp',      // Global variable for your Vue app
      fileName: 'my-vue-app', // Name of the output file
      formats: ['umd'], // Use the UMD format to ensure compatibility
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue', // Expose Vue globally for compatibility
        },
        // Make sure to exclude any unnecessary chunks
        manualChunks: undefined, // If you want everything bundled into one file
      },
    },
  },
})

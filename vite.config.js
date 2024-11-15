// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all interfaces
    port: 5173, // Optional: Set a specific port if you want
    hmr: {
      overlay: false // Disables the error overlay
    }
  },
  plugins: [react()]
  // Check if you have a `base` property or other URL-related config
});

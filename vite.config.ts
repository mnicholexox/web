import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web/', // GitHub Pages base path for mnicholexox/web repo
  root: process.cwd(), // Explicitly set root directory
  plugins: [react()],
  assetsInclude: ["**/*.JPEG", "**/*.JPG", "**/*.PNG"], // Handle uppercase image extensions
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // Listen on all addresses (explicit for Docker)
    port: 5173,
    strictPort: true, // Exit if port is already in use
    watch: {
      usePolling: true, // Required for file watching in Docker
    },
  },
});


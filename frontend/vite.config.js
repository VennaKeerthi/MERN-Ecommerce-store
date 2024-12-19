import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This proxy configuration will only apply during development (not production)
    proxy: {
      "/api/": process.env.VITE_BACKEND_URL,  // Automatically uses the VITE_BACKEND_URL from the environment
      "/uploads/": process.env.VITE_BACKEND_URL,
    },
  },
  build: {
    outDir: "dist", // Production output folder
    minify: "terser", // Minification
    target: "esnext", // Modern JavaScript
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Chunk vendor code
        },
      },
    },
    sourcemap: false, // Optional: set to true if you need source maps in production
  },
  define: {
    "process.env.NODE_ENV": '"production"', // Set the NODE_ENV to production
  },
});

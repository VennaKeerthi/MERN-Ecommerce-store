import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": process.env.VITE_BACKEND_URL,
      "/uploads/": process.env.VITE_BACKEND_URL,
    },
  },
  build: {
    outDir: "dist", 
    minify: "terser", 
    target: "esnext", 
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], 
        },
      },
    },
    sourcemap: false, 
  },

  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
});

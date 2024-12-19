import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
dotenv.config();
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://mern-ecommerce-store-1-ycta.onrender.com",
      "/uploads/": "https://mern-ecommerce-store-1-ycta.onrender.com",
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

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries
          vendor: ['react', 'react-dom'],
          // Split UI components
          ui: ['@/components/ui/button', '@/components/ui/input', '@/components/ui/textarea', '@/components/ui/badge'],
          // Split icons
          icons: ['lucide-react'],
          // Split routing and state management
          router: ['react-router-dom'],
          state: ['@tanstack/react-query'],
          // Split animation library
          animation: ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB
  },
}));

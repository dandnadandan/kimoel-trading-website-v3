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
          // Split React core separately
          react: ['react'],
          'react-dom': ['react-dom'],
          // Split each major library separately
          'react-router': ['react-router-dom'],
          'react-query': ['@tanstack/react-query'],
          'framer-motion': ['framer-motion'],
          // Split icons into smaller chunks
          'lucide-icons': ['lucide-react'],
          // Split UI components individually
          'ui-button': ['@/components/ui/button'],
          'ui-input': ['@/components/ui/input'],
          'ui-textarea': ['@/components/ui/textarea'],
          'ui-badge': ['@/components/ui/badge'],
          // Split contexts separately
          'invoice-context': ['@/contexts/InvoiceContext'],
          // Split major components
          'details-modal': ['@/components/DetailsModal'],
          'invoice-drawer': ['@/components/InvoiceDrawer'],
          'invoice-modal': ['@/components/InvoiceRequestModal'],
        },
      },
    },
    chunkSizeWarningLimit: 300, // Reduce limit to 300KB
  },
}));

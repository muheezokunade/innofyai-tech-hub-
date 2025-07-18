import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    // Only load Replit plugins in development environment
    ...(process.env.NODE_ENV === "development" && process.env.REPL_ID
      ? [
          import("@replit/vite-plugin-runtime-error-modal").then((m) => m.default()),
          import("@replit/vite-plugin-cartographer").then((m) => m.cartographer()),
        ]
      : []),
    // Bundle analyzer for production builds
    process.env.ANALYZE === 'true' && visualizer({
      filename: 'dist/bundle-analysis.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
    },
    rollupOptions: {
      output: {
        // Aggressive code splitting
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom'],
          
          // UI Framework
          'ui-vendor': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tabs',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-slot',
            '@radix-ui/react-label',
            '@radix-ui/react-separator',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-select',
            '@radix-ui/react-popover',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-slider',
            '@radix-ui/react-switch',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
          ],
          
          // Animation and UI utilities
          'animation-vendor': ['framer-motion'],
          'ui-utils': ['class-variance-authority', 'clsx', 'tailwind-merge', 'cmdk'],
          
          // Icons and graphics
          'icons-vendor': ['lucide-react'],
          
          // Form handling
          'form-vendor': ['react-hook-form', '@hookform/resolvers'],
          
          // Data fetching
          'query-vendor': ['@tanstack/react-query'],
          
          // Date handling
          'date-vendor': ['date-fns'],
          
          // Carousel
          'carousel-vendor': ['embla-carousel-react'],
          
          // Theme
          'theme-vendor': ['next-themes'],
          
          // Other utilities
          'utils-vendor': ['nanoid', 'zod', 'zod-validation-error'],
          
          // Input components
          'input-vendor': ['input-otp'],
          
          // Charts
          'charts-vendor': ['recharts'],
          
          // Panels
          'panels-vendor': ['react-resizable-panels'],
          
          // Drawer
          'drawer-vendor': ['vaul'],
          
          // Animations
          'animations-vendor': ['tailwindcss-animate', 'tw-animate-css'],
        },
        
        // Optimize chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/[name]-[hash].js`;
        },
        
        // Optimize asset naming
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || 'asset';
          const info = name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 500,
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
      'clsx',
      'tailwind-merge',
    ],
    exclude: [
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-tabs',
    ],
  },
  
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/client',
  //? Uncomment To set base URL
  // base: '/SAD21-IMS-SYSTEM/',

  server: {
    port: 4200,
    host: 'localhost',
    watch: {
      usePolling: true
    }
  },

  preview: {
    port: 4300,
    host: 'localhost'
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../'
    })
  ],

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  },

  optimizeDeps: {
    include: ['@tanstack/react-query']
    // exclude: [
    //   // add the module paths here
    //   '/@tanstack/react-query-devtools/',
    //   '/@tanstack/react-query/'
    // ]
  },

  build: {
    // ...
    rollupOptions: {
      external: [
        // Add the package names that are causing the error here
        // '@tanstack/react-query',
        // '@tanstack/react-query-devtools'
      ],
      output: {
        // ...
        globals: {
          // Add the package names and their global variable names here
          // '@tanstack/react-query': 'ReactQuery',
          // '@tanstack/react-query-devtools': 'ReactQueryDevtools'
        }
      }
    }
  }

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },
});

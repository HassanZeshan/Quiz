import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';
import viteEnvCompatiblePlugin from 'vite-plugin-env-compatible';

export default defineConfig({   
  resolve: {
    alias: {
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@hooks':'/src/hooks',
      '@api':'/src/api',  
      '@context':'/src/context',              
    },
  },    
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
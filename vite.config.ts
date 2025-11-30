import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_CMS_API_URL || 'http://localhost:3000', // Next.js backend
          changeOrigin: true,
        },
      },
    },
    // optimizeDeps: {
    //   exclude: ['lucide-react'],
    // },
  };
});

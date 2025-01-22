import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@mui/styled-engine': '@mui/styled-engine-sc',
      },
    },
    test: {
      coverage: {
        provider: 'istanbul',
      },
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setupTests.ts'],
    },
  };
});

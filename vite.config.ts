import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    test: {
      coverage: {
        provider: "istanbul",
      },
      globals: true,
      environment: "jsdom",
    },
  };
});

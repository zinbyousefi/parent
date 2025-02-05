import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://91.107.174.28:8010",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

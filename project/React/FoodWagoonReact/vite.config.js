import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // Set src as the root
  build: {
    outDir: "../FoodWagoonReact/src/dist", // Ensure the dist folder is created outside src
  },
});
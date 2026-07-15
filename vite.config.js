import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        attendance: "attendance.html",
        specialLecture: "special-lecture.html"
      }
    }
  },
  server: {
    port: 5173
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  define: {
    "import.meta.env.VITE_ACADEMY_RUNTIME_MODE": JSON.stringify(mode === "safe" ? "safe-fixture" : "")
  },
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
    port: Number(process.env.ACADEMY_SAFE_FRONTEND_PORT || 5173),
    strictPort: true
  }
}));

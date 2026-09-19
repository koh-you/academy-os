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
      },
      output: {
        // react·react-dom·scheduler(192 KB)는 배포마다 바뀌지 않는데, 교사·태블릿 진입점이 함께
        // 쓰는 app 모듈(apiClient·appConfig·출결 컨트롤러 등, 6월 이후 63개 커밋)과 한 청크에
        // 묶여 있어 그 파일이 바뀔 때마다 브라우저가 React 를 다시 받았다. 벤더만 떼어 해시가
        // 배포 사이에 유지되게 한다. 다른 npm 패키지는 첫 로딩 청크에 없다(pptxgenjs 는 클릭 시
        // 동적 import) — 여기 더 넣지 말 것.
        manualChunks(id) {
          // Vite 는 모듈 id 를 항상 posix 구분자로 준다.
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return "vendor-react";
          return undefined;
        }
      }
    }
  },
  server: {
    port: Number(process.env.ACADEMY_SAFE_FRONTEND_PORT || 5173),
    strictPort: true
  }
}));

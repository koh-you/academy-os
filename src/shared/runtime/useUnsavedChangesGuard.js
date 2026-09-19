import { useEffect } from "react";

// 저장하지 않은 변경이 있을 때 새로고침·탭 닫기(beforeunload)와 사이드바 이동을 막는 공용 가드(2026-09-19 U11).
// SNS 스튜디오(useBlogWorkspace)에 있던 패턴을 그대로 뽑아 수업연구와 함께 쓴다.
// - isDirty: 저장 전 변경이 있으면 true. 브라우저 이탈은 네이티브 beforeunload 경고, 사이드바 클릭은 message 로 한 번 묻는다.
// - busy: 저장·검증 중이면 true. 이때는 묻지 않고 사이드바 이동을 막는다(응답 확인 전 화면을 바꾸지 않게).
// 사이드바 클릭은 capture 단계에서 잡아 메뉴의 onChangeView 가 실행되기 전에 멈춘다.
export function useUnsavedChangesGuard(isDirty, message, { busy = false } = {}) {
  useEffect(() => {
    if (!isDirty && !busy) return undefined;
    const unload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };
    const navigate = (event) => {
      if (!event.target.closest?.("#academy-primary-navigation button")) return;
      if (busy || !window.confirm(message)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    window.addEventListener("beforeunload", unload);
    document.addEventListener("click", navigate, true);
    return () => {
      window.removeEventListener("beforeunload", unload);
      document.removeEventListener("click", navigate, true);
    };
  }, [busy, isDirty, message]);
}

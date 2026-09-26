import { useEffect, useRef } from "react";
import { isSessionRefreshDue } from "./useAppSession.js";

// 교사 토큰은 8시간짜리인데 학원 하루는 그보다 길다. 화면을 실제로 쓰는 동안에만 연장한다 —
// 켜두기만 한 탭이 세션을 무한정 늘리면 만료 자체가 의미를 잃는다.
//
// 마지막 갱신 시각은 ref 에 둔다. effect 지역 변수에 두고 refreshSession(렌더마다 새 함수)을
// 의존성에 넣으면 App 이 렌더될 때마다(수업일지에서는 출결 폴링으로 7초에 두 번) effect 가
// 다시 시작되며 시각이 "지금" 으로 되돌아가 30분이 영영 차지 않는다 — 2026-09-09 부터
// 2026-09-19 까지 실제로 갱신이 한 번도 나가지 않았다(tests/browser/session-identity.spec.js).
export function useSessionActivityRefresh({
  documentTarget = typeof document === "undefined" ? null : document,
  enabled,
  refreshSession,
  sessionToken
}) {
  const refreshSessionRef = useRef(refreshSession);
  refreshSessionRef.current = refreshSession;
  const lastRefreshAtRef = useRef(0);

  useEffect(() => {
    if (!enabled || !sessionToken || !documentTarget) return undefined;
    // 토큰이 바뀌었다(로그인 또는 방금 갱신) — 여기서부터 30분을 센다.
    lastRefreshAtRef.current = Date.now();
    function refreshIfStale() {
      if (documentTarget.visibilityState === "hidden") return;
      if (!isSessionRefreshDue(lastRefreshAtRef.current, Date.now())) return;
      lastRefreshAtRef.current = Date.now();
      refreshSessionRef.current();
    }
    const events = ["visibilitychange", "focus", "pointerdown", "keydown"];
    for (const eventName of events) documentTarget.addEventListener(eventName, refreshIfStale, { passive: true });
    return () => {
      for (const eventName of events) documentTarget.removeEventListener(eventName, refreshIfStale);
    };
  }, [documentTarget, enabled, sessionToken]);
}

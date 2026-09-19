import { useEffect, useState } from "react";
import { apiFetch } from "../shared/utils/apiClient.js";

// 발송 설정(실번호 허용·dry-run 등, GET /api/integrations/status)을 교사 세션이 있을 때 읽는다.
//
// 마운트 때 한 번만 읽으면 로그인 화면에서 토큰 없이 401 을 받고 끝나, 같은 탭에서 로그인한
// 뒤에도 값이 null 로 남는다. 그러면 수업일지 "즉시 발송" 의 forceTestRecipient 가 참이 되어
// 알림톡이 조용히 테스트 번호로 간다(2026-09-19 까지의 실제 동작). 세션(토큰)이 바뀌면
// 다시 읽고, 세션이 없어지면 null 로 되돌린다. null 은 화면에 "확인 중" 으로 보인다.
export function useIntegrationStatus({ enabled, request = apiFetch, sessionToken }) {
  const [integrationStatus, setIntegrationStatus] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (!enabled || !sessionToken) {
      setIntegrationStatus(null);
      return undefined;
    }

    async function loadIntegrationStatus() {
      try {
        const response = await request("/api/integrations/status");
        const result = await response.json();
        if (isMounted && result.ok) {
          setIntegrationStatus(result.result);
        }
      } catch (error) {
        if (isMounted) setIntegrationStatus(null);
        console.info("academy-os integration status skipped:", error.message);
      }
    }

    loadIntegrationStatus();
    return () => {
      isMounted = false;
    };
  }, [enabled, request, sessionToken]);

  return integrationStatus;
}

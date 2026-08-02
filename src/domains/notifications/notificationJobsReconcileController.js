import { createNotificationJobReconcilePayload } from "./notificationJobReconcilePayload.js";

export function createNotificationJobsReconcileController({ onResult, request }) {
  let disposed = false;
  const inFlightByPayload = new Map();

  function reconcile(options = {}) {
    const payload = createNotificationJobReconcilePayload(options);
    const signature = JSON.stringify(payload);
    const existing = inFlightByPayload.get(signature);
    if (existing) return existing;

    const promise = (async () => {
      try {
        const result = await request(
          "/api/notification-jobs/reconcile-solapi",
          payload,
          90000,
          "Solapi 발송결과 조회가 90초를 넘었습니다. 예약 확인에서 다시 시도해 주세요."
        );
        if (!disposed) onResult(result);
        return result;
      } finally {
        inFlightByPayload.delete(signature);
      }
    })();
    inFlightByPayload.set(signature, promise);
    return promise;
  }

  function dispose() {
    disposed = true;
  }

  return { dispose, reconcile };
}

import {
  createReportSnapshot,
  isReportSnapshotRetryMatch,
  saveReportSnapshotRequest
} from "./reportSnapshotApi.js";

export function saveReportSnapshotAction({
  mutationMap,
  onApply,
  onState,
  report,
  sessionToken,
  status = "snapshot_saved"
} = {}) {
  const studentId = String(report?.studentId ?? report?.student?.studentId ?? "");
  const lessonId = String(report?.lessonId ?? report?.lesson?.lessonId ?? "");
  const retryKey = `${status}:${studentId}:${lessonId}`;
  const currentMutation = mutationMap.get(retryKey);
  if (currentMutation?.promise) return currentMutation.promise;
  onState?.({ message: "Supabase에 저장하고 다시 확인하는 중입니다.", state: "saving" });
  const snapshot = currentMutation?.snapshot && isReportSnapshotRetryMatch(currentMutation.snapshot, report, status)
    ? currentMutation.snapshot
    : createReportSnapshot({ randomUUID: () => globalThis.crypto?.randomUUID?.(), report, status });
  const operation = saveReportSnapshotRequest({ sessionToken, snapshot })
    .then((result) => {
      mutationMap.delete(retryKey);
      onApply?.(result.reportSnapshots);
      onState?.({ message: "Supabase 저장 및 재조회 확인 완료", state: "saved" }, status);
      return { ok: true, snapshot: result.snapshot };
    })
    .catch((error) => {
      mutationMap.set(retryKey, { promise: null, snapshot });
      onState?.({ message: error.message || "보고서 저장에 실패했습니다.", state: "failed" });
      return { error, ok: false };
    });
  mutationMap.set(retryKey, { promise: operation, snapshot });
  return operation;
}

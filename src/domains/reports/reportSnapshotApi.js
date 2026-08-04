import { apiUrl } from "../../shared/utils/apiClient.js";
import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../../shared/contracts/versionedWriteRouteContracts.js";
import {
  areReportSnapshotsEqual,
  createReportSnapshot,
  isReportSnapshotRetryMatch
} from "./reportSnapshotPersistence.js";

export { createReportSnapshot, isReportSnapshotRetryMatch };

export async function saveReportSnapshotRequest({ sessionToken, snapshot, timeoutMs = 15000 } = {}) {
  if (!sessionToken) throw new Error("보고서를 저장하려면 다시 로그인해 주세요.");
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const payload = parseVersionedWriteRequest("POST", "/api/report-snapshots", { snapshot });
    const response = await fetch(apiUrl("/api/report-snapshots"), {
      body: JSON.stringify(payload),
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${sessionToken}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || result.ok === false) {
      const error = new Error(result.error || "보고서 저장에 실패했습니다.");
      error.code = result.code;
      error.statusCode = response.status;
      throw error;
    }
    const parsedResult = parseVersionedWriteResponse("POST", "/api/report-snapshots", result);
    const verifiedSnapshot = parsedResult.reportSnapshots.find((item) => item?.reportId === snapshot?.reportId);
    if (
      parsedResult.source !== "supabase" ||
      parsedResult.verified !== true ||
      !verifiedSnapshot ||
      !areReportSnapshotsEqual(verifiedSnapshot, snapshot)
    ) {
      throw new Error("보고서 저장 결과를 Supabase 재조회로 확인하지 못했습니다.");
    }
    return parsedResult;
  } catch (error) {
    if (error.name === "AbortError") {
      const timeoutError = new Error("보고서 저장 확인이 15초를 넘었습니다. 같은 보고서로 다시 확인해 주세요.");
      timeoutError.requestTimedOut = true;
      throw timeoutError;
    }
    throw error;
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
}

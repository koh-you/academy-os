import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../../shared/contracts/versionedWriteRouteContracts.js";

const method = "POST";
const path = "/api/exam-analysis-runs";

export function parseExamAnalysisRunWriteRequest(payload) {
  const hasContainer = Boolean(
    payload &&
    typeof payload === "object" &&
    !Array.isArray(payload) &&
    (
      Object.prototype.hasOwnProperty.call(payload, "analysisRun") ||
      Object.prototype.hasOwnProperty.call(payload, "run")
    )
  );
  return parseVersionedWriteRequest(method, path, hasContainer ? payload : { analysisRun: payload });
}

export async function saveExamAnalysisRunContractRequest({ analysisRun, request }) {
  if (typeof request !== "function") throw new Error("시험분석 저장 request 함수가 필요합니다.");
  const payload = parseExamAnalysisRunWriteRequest({ analysisRun });
  const result = await request(path, payload);
  return parseVersionedWriteResponse(method, path, result);
}

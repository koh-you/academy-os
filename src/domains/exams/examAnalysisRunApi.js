import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../../shared/contracts/versionedWriteRouteContracts.js";

const method = "POST";
const path = "/api/exam-analysis-runs";
const questionCountPath = "/api/exam-analysis-runs/confirm-question-count";

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

export function parseExamAnalysisQuestionCountConfirmRequest(payload) {
  const parsed = parseVersionedWriteRequest(method, questionCountPath, payload);
  if (!Number.isInteger(parsed.questionCount) || parsed.questionCount < 1 || parsed.questionCount > 200) {
    const error = new Error("확정 문항 수는 1~200 사이의 정수여야 합니다.");
    error.name = "ApiPayloadContractError";
    error.code = "INVALID_API_PAYLOAD";
    error.statusCode = 400;
    error.field = "questionCount";
    throw error;
  }
  return parsed;
}

export async function confirmExamQuestionCount(request, payload) {
  if (typeof request !== "function") throw new Error("문항 수 확정 request 함수가 필요합니다.");
  const parsedPayload = parseExamAnalysisQuestionCountConfirmRequest(payload);
  const result = await request(
    questionCountPath,
    parsedPayload,
    30000,
    "문항 수 저장이 늦습니다."
  );
  return parseVersionedWriteResponse(method, questionCountPath, result);
}

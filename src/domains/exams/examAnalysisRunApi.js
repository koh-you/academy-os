import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../../shared/contracts/versionedWriteRouteContracts.js";

const method = "POST";
const path = "/api/exam-analysis-runs";
const questionCountPath = "/api/exam-analysis-runs/confirm-question-count";
const questionReviewsPath = "/api/exam-analysis-runs/save-question-reviews";
const promptStudioPath = "/api/exam-analysis-runs/save-prompt-studio";

function createExamAnalysisPayloadError(field, message) {
  const error = new Error(message);
  error.name = "ApiPayloadContractError";
  error.code = "INVALID_API_PAYLOAD";
  error.statusCode = 400;
  error.field = field;
  return error;
}

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
    throw createExamAnalysisPayloadError("questionCount", "확정 문항 수는 1~200 사이의 정수여야 합니다.");
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

export function parseExamAnalysisQuestionReviewsSaveRequest(payload) {
  const parsed = parseVersionedWriteRequest(method, questionReviewsPath, payload);
  if (!parsed.reviews.length) {
    throw createExamAnalysisPayloadError("reviews", "저장할 검수 문항이 필요합니다.");
  }
  const questionNumbers = new Set();
  parsed.reviews.forEach((review, index) => {
    if (!review || typeof review !== "object" || Array.isArray(review)) {
      throw createExamAnalysisPayloadError(`reviews[${index}]`, "문항 검수 항목은 object여야 합니다.");
    }
    const questionNumber = Number(review.questionNumber ?? review.question_number);
    if (!Number.isInteger(questionNumber) || questionNumber < 1 || questionNumber > 200) {
      throw createExamAnalysisPayloadError(
        `reviews[${index}].questionNumber`,
        "검수 문항 번호는 1~200 사이의 정수여야 합니다."
      );
    }
    if (questionNumbers.has(questionNumber)) {
      throw createExamAnalysisPayloadError(
        `reviews[${index}].questionNumber`,
        "같은 문항 번호의 검수 결과를 중복 저장할 수 없습니다."
      );
    }
    questionNumbers.add(questionNumber);
  });
  return parsed;
}

export async function saveExamQuestionReviews(request, payload) {
  if (typeof request !== "function") throw new Error("문항 검수 저장 request 함수가 필요합니다.");
  const parsedPayload = parseExamAnalysisQuestionReviewsSaveRequest(payload);
  const result = await request(
    questionReviewsPath,
    parsedPayload,
    30000,
    "문항 검수 저장이 지연되고 있습니다."
  );
  return parseVersionedWriteResponse(method, questionReviewsPath, result);
}

export function parseExamAnalysisPromptStudioSaveRequest(payload) {
  const parsed = parseVersionedWriteRequest(method, promptStudioPath, payload);
  if (!Number.isInteger(parsed.expectedRevision) || parsed.expectedRevision < 0) {
    throw createExamAnalysisPayloadError(
      "expectedRevision",
      "프롬프트 작업본 expectedRevision은 0 이상의 정수여야 합니다."
    );
  }
  return parsed;
}

export async function saveExamPromptStudio(request, payload) {
  if (typeof request !== "function") throw new Error("프롬프트 작업본 저장 request 함수가 필요합니다.");
  const parsedPayload = parseExamAnalysisPromptStudioSaveRequest(payload);
  const result = await request(
    promptStudioPath,
    parsedPayload,
    20000,
    "프롬프트 작업본 저장이 지연되고 있습니다."
  );
  return parseVersionedWriteResponse(method, promptStudioPath, result);
}

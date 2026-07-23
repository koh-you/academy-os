import assert from "node:assert/strict";
import {
  buildExamReviewPolishPayload,
  polishExamReviewRequest
} from "../src/domains/exams/examReviewApi.js";

const payload = buildExamReviewPolishPayload({
  aiModel: "test-model",
  aiPrompt: "맞춤법만 수정",
  aiProvider: "mock",
  grade: "고1",
  lessonDate: "2026-07-23",
  lessonName: "테스트고 수학 시험 총평",
  rawText: "원문",
  schoolName: "테스트고"
});

assert.deepEqual(payload, {
  aiProvider: "mock",
  aiModel: "test-model",
  aiPrompt: "맞춤법만 수정",
  audience: "teacher",
  grade: "고1",
  homeworkStatus: "시험 후 총평",
  lessonDate: "2026-07-23",
  lessonName: "테스트고 수학 시험 총평",
  polishMode: "spellingOnly",
  rawText: "원문",
  schoolName: "테스트고",
  studentName: "시험관리"
});

let capturedRequest = null;
const polishedResult = await polishExamReviewRequest({
  fetchImpl: async (url, options) => {
    capturedRequest = { url, options };
    return {
      ok: true,
      async json() {
        return {
          ok: true,
          result: {
            polishedText: "수정본",
            provider: "mock"
          }
        };
      }
    };
  },
  payload,
  resolveApiUrl: (path) => `/mock${path}`
});

assert.equal(capturedRequest.url, "/mock/api/ai/comment-polish");
assert.equal(capturedRequest.options.method, "POST");
assert.deepEqual(capturedRequest.options.headers, { "Content-Type": "application/json" });
assert.deepEqual(JSON.parse(capturedRequest.options.body), payload);
assert.deepEqual(polishedResult, { polishedText: "수정본", provider: "mock" });

await assert.rejects(
  polishExamReviewRequest({
    fetchImpl: async () => ({
      ok: false,
      async json() {
        return { ok: false, error: "fixture failure" };
      }
    }),
    payload
  }),
  /fixture failure/
);

await assert.rejects(
  polishExamReviewRequest({
    fetchImpl: async () => ({
      ok: true,
      async json() {
        return { ok: false };
      }
    }),
    payload
  }),
  /시험 후 총평 AI 수정에 실패했습니다/
);

console.log("exam review API fixtures passed");

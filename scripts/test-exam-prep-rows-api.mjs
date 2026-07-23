import assert from "node:assert/strict";
import {
  deleteExamPrepRowRequest,
  saveExamPrepRowsRequest
} from "../src/domains/exams/examPrepRowsApi.js";

const rows = [
  { examPrepId: "exam-row-1", schoolName: "테스트중" },
  { examPrepId: "exam-row-2", schoolName: "테스트고" }
];
let savedRequest = null;
const saveResult = await saveExamPrepRowsRequest({
  examPrepRows: rows,
  request: async (path, payload) => {
    savedRequest = { path, payload };
    return { ok: true };
  }
});
assert.deepEqual(savedRequest, {
  path: "/api/exam-prep-rows/bulk",
  payload: { examPrepRows: rows }
});
assert.deepEqual(saveResult, { ok: true });
assert.throws(
  () => saveExamPrepRowsRequest({ examPrepRows: rows }),
  /시험정보 저장 request가 필요합니다/
);

let deletedRequest = null;
const deleteResult = await deleteExamPrepRowRequest({
  examPrepId: "시험 row/1",
  fetchImpl: async (url, options) => {
    deletedRequest = { url, options };
    return {
      ok: true,
      json: async () => ({ ok: true, examPrepId: "시험 row/1" })
    };
  },
  resolveApiUrl: (path) => `https://academy.test${path}`
});
assert.deepEqual(deletedRequest, {
  url: "https://academy.test/api/exam-prep-rows?id=%EC%8B%9C%ED%97%98%20row%2F1&confirm=true",
  options: { method: "DELETE" }
});
assert.deepEqual(deleteResult, { ok: true, examPrepId: "시험 row/1" });

await assert.rejects(
  deleteExamPrepRowRequest({
    examPrepId: "exam-row-1",
    fetchImpl: async () => ({
      ok: false,
      json: async () => ({ ok: false, error: "삭제 차단" })
    })
  }),
  /삭제 차단/
);
await assert.rejects(
  deleteExamPrepRowRequest({
    examPrepId: "exam-row-1",
    fetchImpl: async () => ({
      ok: false,
      json: async () => ({})
    })
  }),
  /시험정보 삭제 실패/
);

console.log("exam prep rows API fixtures passed");

import assert from "node:assert/strict";
import {
  deleteExamPrepLessonRequest,
  saveExamPrepLessonsRequest
} from "../src/domains/exams/examPrepLessonApi.js";

const lessons = [
  { lessonId: "lesson-1", sourceLabel: "시험대비 1" },
  { lessonId: "lesson-2", sourceLabel: "시험대비 2" }
];
let saveRequest = null;
const saveResult = await saveExamPrepLessonsRequest({
  lessons,
  request: async (path, payload) => {
    saveRequest = { path, payload };
    return { ok: true };
  }
});
assert.deepEqual(saveRequest, {
  path: "/api/lessons/bulk",
  payload: { lessons }
});
assert.deepEqual(saveResult, { ok: true });

let deleteRequest = null;
const deleteResponse = {
  ok: true,
  json: async () => ({ ok: true, lessonId: "시험/수업 1" })
};
const result = await deleteExamPrepLessonRequest({
  auditId: "audit-시험/1",
  fetchImpl: async (url, options) => {
    deleteRequest = { options, url };
    return deleteResponse;
  },
  lessonId: "시험/수업 1",
  resolveApiUrl: (path) => `https://academy.test${path}`
});
assert.deepEqual(deleteRequest, {
  url: "https://academy.test/api/lessons?id=%EC%8B%9C%ED%97%98%2F%EC%88%98%EC%97%85%201&mode=exam-prep-reconcile&auditId=audit-%EC%8B%9C%ED%97%98%2F1",
  options: { method: "DELETE" }
});
assert.deepEqual(result, { ok: true, lessonId: "시험/수업 1" });

const failedAudit = { rollback: { verified: true } };
await assert.rejects(
  async () => {
    try {
      await deleteExamPrepLessonRequest({
        auditId: "audit-failed",
        fetchImpl: async () => ({
          ok: false,
          json: async () => ({ ok: false, error: "삭제 차단", audit: failedAudit })
        }),
        lessonId: "lesson-failed"
      });
    } catch (error) {
      assert.deepEqual(error.audit, failedAudit);
      throw error;
    }
  },
  /삭제 차단/
);

console.log("exam prep lesson API fixtures passed");

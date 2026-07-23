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
const deleteResponse = { ok: true };
const result = await deleteExamPrepLessonRequest({
  fetchImpl: async (url, options) => {
    deleteRequest = { options, url };
    return deleteResponse;
  },
  lessonId: "시험/수업 1",
  resolveApiUrl: (path) => `https://academy.test${path}`
});
assert.deepEqual(deleteRequest, {
  url: "https://academy.test/api/lessons?id=%EC%8B%9C%ED%97%98%2F%EC%88%98%EC%97%85%201",
  options: { method: "DELETE" }
});
assert.equal(result, deleteResponse);

console.log("exam prep lesson API fixtures passed");

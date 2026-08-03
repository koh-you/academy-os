import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { saveLessonJournalRecordsWithVerification } from "../src/domains/lessons/lessonJournalRecordBulkApi.js";

const targetRecords = [
  {
    lessonStudentRecordId: "record_TARGET_1",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET_1",
    lessonMemo: "TARGET 메모"
  },
  {
    lessonStudentRecordId: "record_TARGET_2",
    lessonId: "lesson_TARGET",
    studentId: "student_TARGET_2",
    lessonMemo: "두 번째 메모"
  }
];
const originalSnapshot = structuredClone(targetRecords);
const requestCalls = [];
const verifiedRecords = [
  structuredClone(targetRecords[0]),
  structuredClone(targetRecords[1]),
  {
    lessonStudentRecordId: "record_EXTRA_CONTROL",
    lessonId: "lesson_CONTROL",
    studentId: "student_CONTROL"
  }
];
const matchesRecord = (expected, actual) =>
  expected.lessonId === actual.lessonId &&
  expected.studentId === actual.studentId &&
  expected.lessonMemo === actual.lessonMemo;

assert.deepEqual(
  await saveLessonJournalRecordsWithVerification({
    records: targetRecords,
    request: async (...args) => {
      requestCalls.push(args);
      return {
        source: "supabase",
        records: verifiedRecords
      };
    },
    matchesRecord
  }),
  verifiedRecords
);
assert.deepEqual(requestCalls, [
  ["/api/lesson-records/bulk", { records: targetRecords }]
]);
assert.deepEqual(targetRecords, originalSnapshot);

let emptyRequestCalled = false;
assert.deepEqual(
  await saveLessonJournalRecordsWithVerification({
    records: [],
    request: async () => {
      emptyRequestCalled = true;
      throw new Error("빈 CONTROL은 요청하면 안 됩니다.");
    },
    matchesRecord
  }),
  []
);
assert.equal(emptyRequestCalled, false);

await assert.rejects(
  saveLessonJournalRecordsWithVerification({
    records: targetRecords,
    request: async () => ({ source: "fallback", records: targetRecords }),
    matchesRecord
  }),
  /수업기록을 Supabase에서 다시 확인하지 못했습니다/
);

await assert.rejects(
  saveLessonJournalRecordsWithVerification({
    records: targetRecords,
    request: async () => ({
      source: "supabase",
      records: [targetRecords[0]]
    }),
    matchesRecord
  }),
  /record_TARGET_2/
);

await assert.rejects(
  saveLessonJournalRecordsWithVerification({
    records: targetRecords,
    request: async () => ({
      source: "supabase",
      records: [
        targetRecords[0],
        {
          ...targetRecords[1],
          lessonMemo: "불일치 CONTROL"
        }
      ]
    }),
    matchesRecord
  }),
  /record_TARGET_2/
);

const networkError = new Error("가상 네트워크 실패");
await assert.rejects(
  saveLessonJournalRecordsWithVerification({
    records: targetRecords,
    request: async () => {
      throw networkError;
    },
    matchesRecord
  }),
  (error) => error === networkError
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const apiSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalRecordBulkApi.js", import.meta.url),
  "utf8"
);
const handlerStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const handlerEnd = appSource.indexOf("async function handleSaveRecord(", handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);

for (const AppOwnedBinding of [
  "saveLessonJournalRowsAction({",
  "recordsToSave,",
  "currentRecords: recordsRef.current",
  "request: postJsonWithTimeout",
  "recordsRef.current = nextRecords",
  "setRecords(nextRecords)",
  "writeStorageValue(window.localStorage"
]) {
  assert.ok(handlerSource.includes(AppOwnedBinding), `missing App record binding: ${AppOwnedBinding}`);
}
assert.ok(
  !handlerSource.includes("saveLessonJournalRecordsWithVerification({"),
  "draft saving must not use the legacy blind record bulk endpoint"
);
for (const forbiddenUiEffect of [
  "recordsRef",
  "setRecords",
  "localStorage",
  "setSaveStates",
  "useState",
  "useEffect",
  "notification_jobs",
  "Solapi"
]) {
  assert.ok(!apiSource.includes(forbiddenUiEffect), `record API adapter must not own UI effect: ${forbiddenUiEffect}`);
}

console.log("lesson journal record bulk API TARGET/CONTROL fixtures passed");

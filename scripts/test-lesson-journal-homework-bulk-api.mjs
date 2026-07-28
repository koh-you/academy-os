import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalHomeworkSaveFingerprint,
  saveLessonJournalHomeworksWithVerification
} from "../src/domains/lessons/lessonJournalHomeworkBulkApi.js";

const fingerprintFields = [
  "assignmentStatus",
  "checkedAt",
  "dueDate",
  "homeworkId",
  "incompleteHomework",
  "status",
  "teacherStatus",
  "title"
];
const targetHomeworks = [
  {
    assignmentStatus: "incomplete",
    checkedAt: "2026-07-28T09:00:00.000Z",
    dueDate: "2026-07-30",
    homeworkId: "homework_TARGET_1",
    incompleteHomework: "TARGET 오답",
    status: "pending",
    teacherStatus: "needs_check",
    title: "TARGET 숙제",
    ignoredField: "요청 원본"
  },
  {
    assignmentStatus: "completed",
    checkedAt: "2026-07-28T10:00:00.000Z",
    dueDate: "2026-07-31",
    homeworkId: "homework_TARGET_2",
    incompleteHomework: "",
    status: "completed",
    teacherStatus: "checked",
    title: "두 번째 숙제"
  }
];
const originalSnapshot = structuredClone(targetHomeworks);
const verifiedFirst = {
  ...structuredClone(targetHomeworks[0]),
  ignoredField: "Supabase 추가 필드"
};
const verifiedSecond = structuredClone(targetHomeworks[1]);
const extraControl = {
  homeworkId: "homework_EXTRA_CONTROL",
  title: "추가 반환 CONTROL"
};
const requestCalls = [];

assert.deepEqual(
  await saveLessonJournalHomeworksWithVerification({
    homeworks: targetHomeworks,
    request: async (...args) => {
      requestCalls.push(args);
      return {
        source: "supabase",
        homeworks: [verifiedSecond, extraControl, verifiedFirst]
      };
    }
  }),
  [verifiedFirst, verifiedSecond]
);
assert.deepEqual(requestCalls, [
  ["/api/homeworks/bulk", { homeworks: targetHomeworks }]
]);
assert.deepEqual(targetHomeworks, originalSnapshot);
assert.equal(
  createLessonJournalHomeworkSaveFingerprint(targetHomeworks[0]),
  createLessonJournalHomeworkSaveFingerprint(verifiedFirst),
  "unrelated Supabase fields must not change the save fingerprint"
);

let emptyRequestCalled = false;
assert.deepEqual(
  await saveLessonJournalHomeworksWithVerification({
    homeworks: [],
    request: async () => {
      emptyRequestCalled = true;
      throw new Error("빈 CONTROL은 요청하면 안 됩니다.");
    }
  }),
  []
);
assert.equal(emptyRequestCalled, false);

await assert.rejects(
  saveLessonJournalHomeworksWithVerification({
    homeworks: targetHomeworks,
    request: async () => ({
      source: "fallback",
      homeworks: targetHomeworks
    })
  }),
  /숙제를 Supabase에서 다시 확인하지 못했습니다/
);

await assert.rejects(
  saveLessonJournalHomeworksWithVerification({
    homeworks: targetHomeworks,
    request: async () => ({
      source: "supabase",
      homeworks: [targetHomeworks[0]]
    })
  }),
  /homework_TARGET_2/
);

for (const field of fingerprintFields) {
  await assert.rejects(
    saveLessonJournalHomeworksWithVerification({
      homeworks: [targetHomeworks[0]],
      request: async () => ({
        source: "supabase",
        homeworks: [{
          ...targetHomeworks[0],
          [field]: `${targetHomeworks[0][field]}_불일치`
        }]
      })
    }),
    /homework_TARGET_1/,
    `${field} mismatch must fail verification`
  );
}

const networkError = new Error("가상 숙제 네트워크 실패");
await assert.rejects(
  saveLessonJournalHomeworksWithVerification({
    homeworks: targetHomeworks,
    request: async () => {
      throw networkError;
    }
  }),
  (error) => error === networkError
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const apiSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalHomeworkBulkApi.js", import.meta.url),
  "utf8"
);
const handlerStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const handlerEnd = appSource.indexOf("async function handleSaveRecord(", handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);

for (const appOwnedBinding of [
  "saveLessonJournalHomeworksWithVerification({",
  "homeworks: persistencePlan.changedHomeworks",
  "request: postJson",
  "homeworksRef.current = nextHomeworks",
  "setHomeworks(nextHomeworks)"
]) {
  assert.ok(handlerSource.includes(appOwnedBinding), `missing App homework binding: ${appOwnedBinding}`);
}
assert.ok(
  !appSource.includes("function getLessonJournalHomeworkSaveFingerprint("),
  "App must not retain the extracted homework fingerprint"
);
for (const forbiddenUiEffect of [
  "homeworksRef",
  "setHomeworks",
  "localStorage",
  "setSaveStates",
  "useState",
  "useEffect",
  "notification_jobs",
  "Solapi"
]) {
  assert.ok(!apiSource.includes(forbiddenUiEffect), `homework API adapter must not own UI effect: ${forbiddenUiEffect}`);
}

console.log("lesson journal homework bulk API TARGET/CONTROL fixtures passed");

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  lessonJournalMakeupTaskIdentityFields,
  saveLessonJournalMakeupTasksWithVerification
} from "../src/domains/lessons/lessonJournalMakeupTaskBulkApi.js";

assert.deepEqual(lessonJournalMakeupTaskIdentityFields, [
  "studentId",
  "sourceId",
  "sourceHomeworkId",
  "taskType",
  "supplementMethod",
  "supplementHomeworkNote"
]);

const requestedTasks = [
  {
    makeupTaskId: "makeup_TARGET_1",
    studentId: "student_TARGET_1",
    sourceId: "source_TARGET_1",
    sourceHomeworkId: "homework_TARGET_1",
    taskType: "homework_makeup",
    supplementMethod: "arrival_makeup",
    supplementHomeworkNote: "TARGET 보충",
    status: "draft"
  },
  {
    makeupTaskId: "makeup_TARGET_2",
    studentId: "student_TARGET_2",
    sourceId: "source_TARGET_2",
    sourceHomeworkId: "",
    taskType: "absence_makeup",
    supplementMethod: "onsite",
    supplementHomeworkNote: "",
    status: "scheduled"
  }
];
const originalSnapshot = structuredClone(requestedTasks);
const verifiedFirst = {
  ...structuredClone(requestedTasks[0]),
  providerIgnoredField: "Supabase 추가 필드"
};
const verifiedSecond = structuredClone(requestedTasks[1]);
const extraControl = {
  makeupTaskId: "makeup_EXTRA_CONTROL",
  studentId: "student_EXTRA_CONTROL"
};
const requestCalls = [];

assert.deepEqual(
  await saveLessonJournalMakeupTasksWithVerification({
    requestedTasks,
    request: async (...args) => {
      requestCalls.push(args);
      return {
        source: "supabase",
        makeupTasks: [verifiedSecond, extraControl, verifiedFirst]
      };
    }
  }),
  [verifiedFirst, verifiedSecond]
);
assert.deepEqual(requestCalls, [[requestedTasks]]);
assert.deepEqual(requestedTasks, originalSnapshot);

let emptyRequestCalled = false;
assert.deepEqual(
  await saveLessonJournalMakeupTasksWithVerification({
    requestedTasks: [],
    request: async () => {
      emptyRequestCalled = true;
      throw new Error("빈 CONTROL은 요청하면 안 됩니다.");
    }
  }),
  []
);
assert.equal(emptyRequestCalled, false);

await assert.rejects(
  saveLessonJournalMakeupTasksWithVerification({
    requestedTasks,
    request: async () => ({
      source: "fallback",
      makeupTasks: requestedTasks
    })
  }),
  /등원보충을 Supabase에서 다시 확인하지 못했습니다/
);

await assert.rejects(
  saveLessonJournalMakeupTasksWithVerification({
    requestedTasks,
    request: async () => ({
      source: "supabase",
      makeupTasks: [requestedTasks[0]]
    })
  }),
  /studentId/
);

for (const field of lessonJournalMakeupTaskIdentityFields) {
  await assert.rejects(
    saveLessonJournalMakeupTasksWithVerification({
      requestedTasks: [requestedTasks[0]],
      request: async () => ({
        source: "supabase",
        makeupTasks: [{
          ...requestedTasks[0],
          [field]: `${requestedTasks[0][field]}_불일치`
        }]
      })
    }),
    new RegExp(field),
    `${field} mismatch must report the mismatched identity field`
  );
}

const networkError = new Error("가상 등원보충 네트워크 실패");
await assert.rejects(
  saveLessonJournalMakeupTasksWithVerification({
    requestedTasks,
    request: async () => {
      throw networkError;
    }
  }),
  (error) => error === networkError
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const apiSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalMakeupTaskBulkApi.js", import.meta.url),
  "utf8"
);
const handlerStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const handlerEnd = appSource.indexOf("async function handleSaveRecord(", handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);

for (const appOwnedBinding of [
  "createLessonJournalMakeupTaskRequests({",
  "taskDrafts: makeupTaskDrafts",
  "saveLessonJournalMakeupTasksWithVerification({",
  "requestedTasks,",
  "request: postMakeupTasks",
  "setMakeupTasks("
]) {
  assert.ok(handlerSource.includes(appOwnedBinding), `missing App makeup binding: ${appOwnedBinding}`);
}
assert.ok(
  !appSource.includes("async function saveLessonJournalMakeupTasksWithVerification("),
  "App must not retain the extracted makeup persistence helper"
);
for (const forbiddenUiEffect of [
  "setMakeupTasks",
  "localStorage",
  "setSaveStates",
  "useState",
  "useEffect",
  "notification_jobs",
  "Solapi"
]) {
  assert.ok(!apiSource.includes(forbiddenUiEffect), `makeup API adapter must not own UI effect: ${forbiddenUiEffect}`);
}

console.log("lesson journal makeup task bulk API TARGET/CONTROL fixtures passed");

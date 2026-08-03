import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalMakeupTaskRequests } from "../src/domains/lessons/lessonJournalMakeupTaskRequest.js";
import { createLessonJournalMakeupTaskId } from "../src/domains/lessons/lessonJournalMakeupTaskPersistence.js";

const currentTasks = [
  {
    makeupTaskId: "makeup_EXISTING_DONE",
    studentId: "student_EXISTING_DONE",
    sourceId: "source_EXISTING_DONE",
    taskType: "homework_makeup",
    status: "done",
    scheduledDate: "2026-07-27",
    attemptCount: 2,
    supplementHomeworkNote: "기존 메모"
  },
  {
    makeupTaskId: "makeup_EXISTING_DRAFT",
    studentId: "student_EXISTING_DRAFT",
    sourceId: "source_EXISTING_DRAFT",
    taskType: "homework_makeup",
    status: "draft",
    scheduledDate: "2026-07-29",
    attemptCount: 1
  }
];
const taskDrafts = [
  {
    studentId: "student_EXISTING_DONE",
    sourceId: "source_EXISTING_DONE",
    taskType: "homework_makeup",
    status: "draft",
    supplementHomeworkNote: "수정 TARGET"
  },
  {
    studentId: "student_EXISTING_DRAFT",
    sourceId: "source_EXISTING_DRAFT",
    taskType: "homework_makeup",
    status: "done",
    supplementHomeworkNote: "기존 상태 보존 TARGET"
  },
  {
    studentId: "student_NEW",
    sourceId: "source_NEW",
    sourceHomeworkId: "homework_NEW",
    taskType: "homework_makeup",
    supplementMethod: "arrival_makeup"
  },
  {
    studentId: "student_OVERRIDE",
    sourceId: "source_OVERRIDE",
    taskType: "homework_makeup",
    makeupTaskId: "makeup_EXPLICIT_CONTROL",
    status: "scheduled",
    scheduledDate: "2026-08-01",
    childHomeworkIds: ["homework_CHILD_CONTROL"]
  }
];
const currentSnapshot = structuredClone(currentTasks);
const draftSnapshot = structuredClone(taskDrafts);
const timestamps = [
  "2026-07-28T01:00:00.000Z",
  "2026-07-28T01:00:01.000Z",
  "2026-07-28T01:00:02.000Z",
  "2026-07-28T01:00:03.000Z"
];

assert.deepEqual(
  createLessonJournalMakeupTaskRequests({
    currentTasks,
    taskDrafts,
    timestamps,
    today: "2026-07-28"
  }),
  [
    {
      ...currentTasks[0],
      ...taskDrafts[0],
      makeupTaskId: "makeup_EXISTING_DONE",
      status: "scheduled",
      touchedAt: timestamps[0]
    },
    {
      ...currentTasks[1],
      ...taskDrafts[1],
      makeupTaskId: "makeup_EXISTING_DRAFT",
      status: "draft",
      touchedAt: timestamps[1]
    },
    {
      makeupTaskId: createLessonJournalMakeupTaskId(taskDrafts[2]),
      status: "draft",
      scheduledDate: "2026-07-28",
      scheduledTime: "",
      notificationDraft: "",
      attemptCount: 0,
      childHomeworkIds: [],
      createdAt: timestamps[2],
      ...taskDrafts[2]
    },
    {
      makeupTaskId: createLessonJournalMakeupTaskId(taskDrafts[3]),
      status: "draft",
      scheduledDate: "2026-07-28",
      scheduledTime: "",
      notificationDraft: "",
      attemptCount: 0,
      childHomeworkIds: [],
      createdAt: timestamps[3],
      ...taskDrafts[3]
    }
  ]
);
assert.deepEqual(currentTasks, currentSnapshot);
assert.deepEqual(taskDrafts, draftSnapshot);
assert.deepEqual(
  createLessonJournalMakeupTaskRequests({
    currentTasks,
    taskDrafts: [],
    timestamps: [],
    today: "2026-07-28"
  }),
  []
);

const differentSourceControl = createLessonJournalMakeupTaskRequests({
  currentTasks,
  taskDrafts: [{
    studentId: "student_EXISTING_DONE",
    sourceId: "source_DIFFERENT_CONTROL",
    taskType: "homework_makeup"
  }],
  timestamps: ["2026-07-28T02:00:00.000Z"],
  today: "2026-07-28"
});
assert.equal(
  differentSourceControl[0].makeupTaskId,
  createLessonJournalMakeupTaskId({
    studentId: "student_EXISTING_DONE",
    sourceId: "source_DIFFERENT_CONTROL",
    taskType: "homework_makeup"
  })
);
assert.equal(differentSourceControl[0].createdAt, "2026-07-28T02:00:00.000Z");
assert.equal(differentSourceControl[0].touchedAt, undefined);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const requestSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalMakeupTaskRequest.js", import.meta.url),
  "utf8"
);
const apiSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalMakeupTaskBulkApi.js", import.meta.url),
  "utf8"
);
const handlerStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const handlerEnd = appSource.indexOf("async function handleSaveRecord(", handlerStart);
const helperSource = appSource.slice(handlerStart, handlerEnd);

for (const injectedSource of [
  "createLessonJournalMakeupTaskRequests({",
  "currentTasks: makeupTasks",
  "taskDrafts: makeupTaskDrafts",
  "timestamps: makeupTaskDrafts.map(() => new Date().toISOString())",
  "today"
]) {
  assert.ok(helperSource.includes(injectedSource), `missing makeup request source: ${injectedSource}`);
}
assert.ok(!helperSource.includes("idSeed: Date.now()"), "makeup request ID must not change on retry");
assert.ok(
  requestSource.includes("createLessonJournalMakeupTaskId(task)"),
  "new makeup tasks must use the logical-source stable ID"
);
for (const AppOwnedSideEffect of [
  "saveLessonJournalMakeupTasksWithVerification({",
  "request: postMakeupTasks",
  "setMakeupTasks("
]) {
  assert.ok(helperSource.includes(AppOwnedSideEffect), `makeup persistence must remain in App: ${AppOwnedSideEffect}`);
  assert.ok(!requestSource.includes(AppOwnedSideEffect), `request builder must not persist: ${AppOwnedSideEffect}`);
}
for (const apiVerification of [
  'verification.source !== "supabase"',
  "verifiedById",
  "lessonJournalMakeupTaskIdentityFields"
]) {
  assert.ok(apiSource.includes(apiVerification), `makeup API must preserve verification: ${apiVerification}`);
  assert.ok(!requestSource.includes(apiVerification), `request builder must not verify persistence: ${apiVerification}`);
}
for (const forbiddenRuntimeSource of [
  "Date.now",
  "new Date",
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "useState",
  "useEffect"
]) {
  assert.ok(!requestSource.includes(forbiddenRuntimeSource), `makeup request builder must stay deterministic: ${forbiddenRuntimeSource}`);
}

console.log("lesson journal makeup task request TARGET/CONTROL fixtures passed");

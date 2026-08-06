import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalRecordSaveStates,
  mergeCreatedLessonJournalHomeworkConflict,
  mergeVerifiedLessonJournalHomeworks,
  mergeVerifiedLessonJournalMakeupTasks,
  mergeVerifiedLessonJournalRecords
} from "../src/domains/lessons/lessonJournalDraftPersistenceState.js";

const plannedHomeworks = [
  { homeworkId: "homework_TARGET", title: "기존 TARGET" },
  { homeworkId: "homework_CONTROL", title: "보존 CONTROL" }
];
const verifiedHomeworks = [
  { homeworkId: "homework_TARGET", title: "첫 응답" },
  { homeworkId: "homework_EXTRA", title: "추가 CONTROL" },
  { homeworkId: "homework_TARGET", title: "최종 TARGET" }
];
const plannedHomeworkSnapshot = structuredClone(plannedHomeworks);
const verifiedHomeworkSnapshot = structuredClone(verifiedHomeworks);
assert.deepEqual(
  mergeVerifiedLessonJournalHomeworks({
    plannedHomeworks,
    verifiedHomeworks
  }),
  [
    verifiedHomeworks[2],
    plannedHomeworks[1]
  ]
);
assert.deepEqual(plannedHomeworks, plannedHomeworkSnapshot);
assert.deepEqual(verifiedHomeworks, verifiedHomeworkSnapshot);
assert.deepEqual(
  mergeVerifiedLessonJournalHomeworks({
    plannedHomeworks,
    verifiedHomeworks: []
  }),
  plannedHomeworks
);

const createdElsewhereHomework = {
  homeworkId: "homework_CREATED_ELSEWHERE",
  title: "다른 화면에서 생성된 숙제",
  updatedAt: "2026-08-06T10:00:00.000Z"
};
assert.deepEqual(
  mergeCreatedLessonJournalHomeworkConflict({
    conflictHomework: createdElsewhereHomework,
    currentHomeworks: plannedHomeworks
  }),
  {
    homeworks: [createdElsewhereHomework, ...plannedHomeworks],
    recovered: true
  }
);
assert.deepEqual(
  mergeCreatedLessonJournalHomeworkConflict({
    conflictHomework: plannedHomeworks[0],
    currentHomeworks: plannedHomeworks
  }),
  { homeworks: plannedHomeworks, recovered: false },
  "이미 로컬에 있는 숙제는 다른 화면의 최신 행으로 자동 덮어쓰지 않아야 합니다."
);

function upsertById(items, nextItem, idKey) {
  return items.some((item) => item[idKey] === nextItem[idKey])
    ? items.map((item) => (item[idKey] === nextItem[idKey] ? nextItem : item))
    : [...items, nextItem];
}

const currentTasks = [
  { makeupTaskId: "makeup_TARGET", status: "draft" },
  { makeupTaskId: "makeup_CONTROL", status: "scheduled" }
];
const verifiedTasks = [
  { makeupTaskId: "makeup_TARGET", status: "scheduled" },
  { makeupTaskId: "makeup_NEW", status: "draft" }
];
const taskCalls = [];
assert.deepEqual(
  mergeVerifiedLessonJournalMakeupTasks({
    currentTasks,
    verifiedTasks,
    upsertTask: (tasks, task) => {
      taskCalls.push({
        ids: tasks.map((item) => item.makeupTaskId),
        nextId: task.makeupTaskId
      });
      return upsertById(tasks, task, "makeupTaskId");
    }
  }),
  [
    verifiedTasks[0],
    currentTasks[1],
    verifiedTasks[1]
  ]
);
assert.deepEqual(taskCalls, [
  {
    ids: ["makeup_TARGET", "makeup_CONTROL"],
    nextId: "makeup_TARGET"
  },
  {
    ids: ["makeup_TARGET", "makeup_CONTROL"],
    nextId: "makeup_NEW"
  }
]);

const currentRecords = [
  { lessonStudentRecordId: "record_TARGET", lessonMemo: "기존 TARGET" },
  { lessonStudentRecordId: "record_CONTROL", lessonMemo: "보존 CONTROL" }
];
const verifiedRecords = [
  { lessonStudentRecordId: "record_TARGET", lessonMemo: "검증 TARGET" },
  { lessonStudentRecordId: "record_NEW", lessonMemo: "신규 TARGET" }
];
const recordCalls = [];
assert.deepEqual(
  mergeVerifiedLessonJournalRecords({
    currentRecords,
    verifiedRecords,
    upsertRecord: (records, record) => {
      recordCalls.push({
        ids: records.map((item) => item.lessonStudentRecordId),
        nextId: record.lessonStudentRecordId
      });
      return upsertById(records, record, "lessonStudentRecordId");
    }
  }),
  [
    verifiedRecords[0],
    currentRecords[1],
    verifiedRecords[1]
  ]
);
assert.deepEqual(recordCalls, [
  {
    ids: ["record_TARGET", "record_CONTROL"],
    nextId: "record_TARGET"
  },
  {
    ids: ["record_TARGET", "record_CONTROL"],
    nextId: "record_NEW"
  }
]);

assert.deepEqual(
  createLessonJournalRecordSaveStates(
    [
      { lessonStudentRecordId: "record_TARGET" },
      { lessonStudentRecordId: "record_CONTROL" },
      { lessonStudentRecordId: "record_TARGET" }
    ],
    "saved"
  ),
  {
    record_TARGET: "saved",
    record_CONTROL: "saved"
  }
);
assert.deepEqual(createLessonJournalRecordSaveStates([], "failed"), {});

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const stateSource = await readFile(
  new URL("../src/domains/lessons/lessonJournalDraftPersistenceState.js", import.meta.url),
  "utf8"
);
const handlerStart = appSource.indexOf("async function handleSaveLessonJournalDrafts(");
const handlerEnd = appSource.indexOf("async function handleSaveRecord(", handlerStart);
const handlerSource = appSource.slice(handlerStart, handlerEnd);

for (const stateBinding of [
  'createLessonJournalRecordSaveStates(recordsToSave, "saving")',
  "mergeVerifiedLessonJournalHomeworks({",
  "mergeVerifiedLessonJournalMakeupTasks({",
  "upsertTask: (tasks, task) => upsertById(tasks, task, \"makeupTaskId\")",
  "mergeVerifiedLessonJournalRecords({",
  "upsertRecord: upsertLessonStudentRecord",
  'createLessonJournalRecordSaveStates(recordsToSave, "saved")',
  'createLessonJournalRecordSaveStates(recordsToSave, "failed")'
]) {
  assert.ok(handlerSource.includes(stateBinding), `missing App persistence state binding: ${stateBinding}`);
}
for (const AppOwnedEffect of [
  "homeworksRef.current = nextHomeworks",
  "setHomeworks(nextHomeworks)",
  "setMakeupTasks(",
  "recordsRef.current = nextRecords",
  "setRecords(nextRecords)",
  "writeStorageValue(window.localStorage",
  "setSaveStates("
]) {
  assert.ok(handlerSource.includes(AppOwnedEffect), `persistence effect must remain in App: ${AppOwnedEffect}`);
  assert.ok(!stateSource.includes(AppOwnedEffect), `state model must not own App effect: ${AppOwnedEffect}`);
}
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "Supabase",
  "localStorage",
  "useState",
  "useEffect",
  "notification_jobs",
  "Solapi"
]) {
  assert.ok(!stateSource.includes(forbiddenSideEffect), `persistence state model must stay pure: ${forbiddenSideEffect}`);
}

console.log("lesson journal persistence state TARGET/CONTROL fixtures passed");

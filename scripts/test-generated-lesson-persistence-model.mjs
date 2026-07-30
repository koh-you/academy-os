import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  areGeneratedLessonPersistedFieldsEqual,
  normalizeGeneratedLessonStudentIds
} from "../src/domains/lessons/generatedLessonPersistenceModel.js";

const candidate = {
  classTemplateId: "",
  className: "가상고 2 수학 직전수업",
  lessonType: "preExam",
  lessonTopic: "직전대비",
  sourceSchoolEventId: "event_TARGET",
  sourceLabel: "가상고 2학년",
  date: "2026-08-01",
  color: "#123456",
  status: "scheduled",
  startTime: "19:00",
  endTime: "21:00",
  studentIds: [
    "student_TARGET_B",
    "student_TARGET_A",
    "student_TARGET_A"
  ]
};
const equivalentExisting = {
  ...candidate,
  startTime: "19:00:00",
  endTime: "21:00:00",
  studentIds: [
    "student_TARGET_A",
    "student_TARGET_B"
  ]
};
const candidateSnapshot = structuredClone(candidate);
const existingSnapshot = structuredClone(equivalentExisting);

assert.deepEqual(
  normalizeGeneratedLessonStudentIds(
    candidate.studentIds
  ),
  ["student_TARGET_A", "student_TARGET_B"]
);
assert.deepEqual(normalizeGeneratedLessonStudentIds(), []);
assert.equal(
  areGeneratedLessonPersistedFieldsEqual(
    candidate,
    equivalentExisting
  ),
  true
);
assert.equal(
  areGeneratedLessonPersistedFieldsEqual(
    candidate,
    {
      ...equivalentExisting,
      lessonTopic: "CONTROL 변경"
    }
  ),
  false
);
assert.equal(
  areGeneratedLessonPersistedFieldsEqual(
    candidate,
    {
      ...equivalentExisting,
      startTime: "19:30"
    }
  ),
  false
);
assert.equal(
  areGeneratedLessonPersistedFieldsEqual(
    candidate,
    {
      ...equivalentExisting,
      studentIds: ["student_TARGET_A"]
    }
  ),
  false
);
assert.equal(areGeneratedLessonPersistedFieldsEqual(), true);
assert.deepEqual(candidate, candidateSnapshot);
assert.deepEqual(equivalentExisting, existingSnapshot);

const appSource = [
  await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
  ),
  await readFile(
    new URL("../src/domains/lessons/generatedLessonPlanBuilder.js", import.meta.url),
    "utf8"
  )
].join("\n");
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonPersistenceModel.js",
    import.meta.url
  ),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedLessonPersistenceModel.js"'
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "areGeneratedLessonPersistedFieldsEqual("
  ).length - 1,
  2
);
for (const appBoundary of [
  "if (existingLesson && areGeneratedLessonPersistedFieldsEqual(nextLesson, existingLesson)) return",
  "const needsUpdate = existing && !areGeneratedLessonPersistedFieldsEqual(candidate.lesson, existing)",
  'status = suppressed ? "skipped"'
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated lesson persistence App boundary: ${appBoundary}`
  );
}
assert.ok(
  !appSource.includes(
    "function areGeneratedLessonPersistedFieldsEqual("
  )
);
assert.ok(
  !appSource.includes(
    "function normalizeStudentIdList("
  )
);
for (const helperExport of [
  "export function normalizeGeneratedLessonStudentIds(",
  "export function areGeneratedLessonPersistedFieldsEqual("
]) {
  assert.equal(
    helperSource.split(helperExport).length - 1,
    1,
    `generated lesson persistence export count changed: ${helperExport}`
  );
}
for (const helperBoundary of [
  'import { normalizeTimeInput } from "./attendance.js"',
  '"classTemplateId"',
  '"className"',
  '"lessonType"',
  '"lessonTopic"',
  '"sourceSchoolEventId"',
  '"sourceLabel"',
  '"date"',
  '"color"',
  '"status"',
  'const sameTimes = ["startTime", "endTime"].every',
  "normalizeGeneratedLessonStudentIds("
]) {
  assert.ok(
    helperSource.includes(helperBoundary),
    `missing generated lesson persistence helper boundary: ${helperBoundary}`
  );
}
for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "setExamPrepRows",
  "persistExamPrepRows",
  "localStorage",
  "Supabase",
  "Solapi",
  "new Date",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !helperSource.includes(forbiddenHelperEffect),
    `generated lesson persistence model crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson persistence model TARGET/CONTROL extraction fixtures passed"
);

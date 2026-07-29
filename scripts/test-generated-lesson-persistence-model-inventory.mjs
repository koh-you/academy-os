import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { normalizeTimeInput } from "../src/domains/lessons/attendance.js";

function normalizeExistingStudentIdList(studentIds = []) {
  return [...new Set(studentIds)].sort();
}

function areExistingGeneratedLessonPersistedFieldsEqual(
  candidate = {},
  existing = {}
) {
  const fields = [
    "classTemplateId",
    "className",
    "lessonType",
    "lessonTopic",
    "sourceSchoolEventId",
    "sourceLabel",
    "date",
    "color",
    "status"
  ];
  const sameFields = fields.every(
    (field) =>
      String(candidate[field] ?? "") ===
      String(existing[field] ?? "")
  );
  if (!sameFields) return false;
  const sameTimes = ["startTime", "endTime"].every(
    (field) =>
      normalizeTimeInput(candidate[field] ?? "") ===
      normalizeTimeInput(existing[field] ?? "")
  );
  if (!sameTimes) return false;
  return (
    JSON.stringify(
      normalizeExistingStudentIdList(
        candidate.studentIds ?? []
      )
    ) ===
    JSON.stringify(
      normalizeExistingStudentIdList(
        existing.studentIds ?? []
      )
    )
  );
}

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

assert.equal(
  areExistingGeneratedLessonPersistedFieldsEqual(
    candidate,
    equivalentExisting
  ),
  true
);
assert.equal(
  areExistingGeneratedLessonPersistedFieldsEqual(
    candidate,
    {
      ...equivalentExisting,
      lessonTopic: "CONTROL 변경"
    }
  ),
  false
);
assert.equal(
  areExistingGeneratedLessonPersistedFieldsEqual(
    candidate,
    {
      ...equivalentExisting,
      startTime: "19:30"
    }
  ),
  false
);
assert.equal(
  areExistingGeneratedLessonPersistedFieldsEqual(
    candidate,
    {
      ...equivalentExisting,
      studentIds: ["student_TARGET_A"]
    }
  ),
  false
);
assert.equal(
  areExistingGeneratedLessonPersistedFieldsEqual(),
  true
);
assert.deepEqual(candidate, candidateSnapshot);
assert.deepEqual(equivalentExisting, existingSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const compareStart = appSource.indexOf(
  "function normalizeStudentIdList(studentIds = [])"
);
const compareEnd = appSource.indexOf(
  "function createPreExamGeneratedKey(",
  compareStart
);
assert.ok(compareStart >= 0 && compareEnd > compareStart);
const compareSource = appSource.slice(
  compareStart,
  compareEnd
);
const compareBoundaries = [
  "function normalizeStudentIdList(studentIds = [])",
  "return [...new Set(studentIds)].sort()",
  "function areGeneratedLessonPersistedFieldsEqual(candidate = {}, existing = {})",
  '"classTemplateId"',
  '"className"',
  '"lessonType"',
  '"lessonTopic"',
  '"sourceSchoolEventId"',
  '"sourceLabel"',
  '"date"',
  '"color"',
  '"status"',
  "if (!sameFields) return false",
  'const sameTimes = ["startTime", "endTime"].every',
  'normalizeTimeInput(candidate[field] ?? "") === normalizeTimeInput(existing[field] ?? "")',
  "if (!sameTimes) return false",
  "normalizeStudentIdList(candidate.studentIds ?? [])",
  "normalizeStudentIdList(existing.studentIds ?? [])"
];
let previousIndex = -1;
for (const boundary of compareBoundaries) {
  const boundaryIndex = compareSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson persistence comparison order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "areGeneratedLessonPersistedFieldsEqual("
  ).length - 1,
  3
);
assert.ok(!compareSource.includes("fetch("));
assert.ok(!compareSource.includes("/api/"));
assert.ok(!compareSource.includes("postJson"));
assert.ok(!compareSource.includes("setLessons"));

console.log(
  "generated lesson persistence model inventory TARGET/CONTROL fixtures passed"
);

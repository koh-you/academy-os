import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { normalizeTimeInput } from "../src/domains/lessons/attendance.js";
import {
  areGeneratedLessonPersistedFieldsEqual,
  normalizeGeneratedLessonStudentIds
} from "../src/domains/lessons/generatedLessonPersistenceModel.js";

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
  areGeneratedLessonPersistedFieldsEqual(
    candidate,
    equivalentExisting
  ),
  true
);
assert.deepEqual(
  normalizeGeneratedLessonStudentIds(
    candidate.studentIds
  ),
  ["student_TARGET_A", "student_TARGET_B"]
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
  areGeneratedLessonPersistedFieldsEqual(
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
const compareBoundaries = [
  "export function normalizeGeneratedLessonStudentIds(",
  "return [...new Set(studentIds)].sort()",
  "export function areGeneratedLessonPersistedFieldsEqual(",
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
  "normalizeGeneratedLessonStudentIds(",
  "candidate.studentIds ?? []",
  "normalizeGeneratedLessonStudentIds(",
  "existing.studentIds ?? []"
];
let previousIndex = -1;
for (const boundary of compareBoundaries) {
  const boundaryIndex = helperSource.indexOf(
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
  2
);
assert.ok(
  appSource.includes(
    'from "../domains/lessons/generatedLessonPersistenceModel.js"'
  )
);
assert.ok(!helperSource.includes("fetch("));
assert.ok(!helperSource.includes("/api/"));
assert.ok(!helperSource.includes("postJson"));
assert.ok(!helperSource.includes("setLessons"));

console.log(
  "generated lesson persistence model inventory TARGET/CONTROL fixtures passed"
);

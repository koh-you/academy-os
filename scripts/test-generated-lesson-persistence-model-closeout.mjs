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
const modulePath =
  'from "../domains/lessons/generatedLessonPersistenceModel.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  helperSource.split(
    "export function normalizeGeneratedLessonStudentIds("
  ).length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function areGeneratedLessonPersistedFieldsEqual("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "areGeneratedLessonPersistedFieldsEqual("
  ).length - 1,
  2
);

const syncHandlerStart = appSource.indexOf(
  "  function handleSyncPreExamLessonFromSchoolEvent(event) {"
);
const syncHandlerEnd = appSource.indexOf(
  "  function handleUpdateClassRoster(",
  syncHandlerStart
);
assert.ok(
  syncHandlerStart >= 0 &&
    syncHandlerEnd > syncHandlerStart
);
const syncHandlerSource = appSource.slice(
  syncHandlerStart,
  syncHandlerEnd
);
const syncBoundaries = [
  "createPreExamLessonFromSchoolEvent(event, students)",
  "const generatedKey = getGeneratedLessonKey(lesson)",
  "normalizeGeneratedLessonControls(generatedLessonControls)",
  "const existingLesson = lessons.find(",
  "const nextLesson = existingLesson ?",
  "if (existingLesson && areGeneratedLessonPersistedFieldsEqual(nextLesson, existingLesson)) return",
  'setLessons((current) => upsertById(current, nextLesson, "lessonId"))',
  'postJson("/api/lessons", { lesson: nextLesson })'
];
let previousSyncIndex = -1;
for (const boundary of syncBoundaries) {
  const boundaryIndex = syncHandlerSource.indexOf(
    boundary,
    previousSyncIndex + 1
  );
  assert.ok(
    boundaryIndex > previousSyncIndex,
    `generated lesson sync consumer order changed: ${boundary}`
  );
  previousSyncIndex = boundaryIndex;
}

const planStart = appSource.indexOf(
  "function buildGeneratedLessonPlan("
);
const planEnd = appSource.length;
assert.ok(planStart >= 0 && planEnd > planStart);
const planSource = appSource.slice(planStart, planEnd);
const planBoundaries = [
  "const existing = lessons.find(",
  "const suppressed =",
  "const manualOverride =",
  "const needsUpdate = existing && !areGeneratedLessonPersistedFieldsEqual(candidate.lesson, existing)",
  'const status = suppressed ? "skipped" : manualOverride ? "protected" : !existing ? "create" : needsUpdate ? "update" : "synced"',
  "existingLesson: existing,",
  "status,"
];
let previousPlanIndex = -1;
for (const boundary of planBoundaries) {
  const boundaryIndex = planSource.indexOf(
    boundary,
    previousPlanIndex + 1
  );
  assert.ok(
    boundaryIndex > previousPlanIndex,
    `generated lesson plan equality consumer order changed: ${boundary}`
  );
  previousPlanIndex = boundaryIndex;
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
    `generated lesson persistence closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated lesson persistence model boundary closeout passed"
);

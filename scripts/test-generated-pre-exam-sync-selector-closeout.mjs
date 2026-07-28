import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedPreExamLessonsToSync } from "../src/domains/lessons/generatedPreExamSyncSelector.js";

const createTarget = {
  generatedKey: "generated_TARGET_PRE_EXAM_CREATE",
  lesson: {
    lessonId: "lesson_TARGET_PRE_EXAM_CREATE",
    lessonType: "preExam"
  },
  status: "create"
};
const missingLessonControl = {
  generatedKey: "generated_CONTROL_MISSING_LESSON",
  status: "create"
};
const updateTarget = {
  generatedKey: "generated_TARGET_PRE_EXAM_UPDATE",
  lesson: {
    lessonId: "lesson_TARGET_PRE_EXAM_UPDATE",
    lessonType: "preExam"
  },
  status: "update"
};
const examPrepUpdateControl = {
  generatedKey: "generated_CONTROL_EXAM_PREP_UPDATE",
  lesson: {
    lessonId: "lesson_CONTROL_EXAM_PREP_UPDATE",
    lessonType: "examPrep"
  },
  status: "update"
};
const syncedControl = {
  generatedKey: "generated_CONTROL_PRE_EXAM_SYNCED",
  lesson: {
    lessonId: "lesson_CONTROL_PRE_EXAM_SYNCED",
    lessonType: "preExam"
  },
  status: "synced"
};
const planItems = [
  createTarget,
  missingLessonControl,
  updateTarget,
  examPrepUpdateControl,
  syncedControl
];
const inputSnapshot = structuredClone(planItems);
const selected = selectGeneratedPreExamLessonsToSync(planItems);

assert.deepEqual(selected, [createTarget, updateTarget]);
assert.equal(selected[0], createTarget);
assert.equal(selected[1], updateTarget);
assert.deepEqual(planItems, inputSnapshot);
assert.deepEqual(selectGeneratedPreExamLessonsToSync(), []);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedPreExamSyncSelector.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath =
  'from "../domains/lessons/generatedPreExamSyncSelector.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(
  appSource.split(
    "selectGeneratedPreExamLessonsToSync(generatedLessonPlan)"
  ).length - 1,
  1
);
assert.equal(
  helperSource.split(
    "export function selectGeneratedPreExamLessonsToSync("
  ).length - 1,
  1
);

const selectorAnchor = appSource.indexOf(
  "selectGeneratedPreExamLessonsToSync(generatedLessonPlan)"
);
const effectStart = appSource.lastIndexOf(
  "  useEffect(() => {",
  selectorAnchor
);
const effectEnd = appSource.indexOf(
  "  async function refreshNotificationJobs(",
  selectorAnchor
);
assert.ok(
  effectStart >= 0 &&
    selectorAnchor > effectStart &&
    effectEnd > selectorAnchor
);
const effectSource = appSource.slice(effectStart, effectEnd);
const effectBoundaries = [
  'if (session?.role !== "teacher" || !isAppStateReady || attendanceOnlyMode) return',
  "const preExamLessonsToSync =",
  "selectGeneratedPreExamLessonsToSync(generatedLessonPlan)",
  "if (preExamLessonsToSync.length === 0) return",
  "saveGeneratedLessonsFromPlan(preExamLessonsToSync)",
  "}, [attendanceOnlyMode, generatedLessonPlan, isAppStateReady, session?.role]);"
];
let previousEffectIndex = -1;
for (const boundary of effectBoundaries) {
  const boundaryIndex = effectSource.indexOf(
    boundary,
    previousEffectIndex + 1
  );
  assert.ok(
    boundaryIndex > previousEffectIndex,
    `generated pre-exam sync effect order changed: ${boundary}`
  );
  previousEffectIndex = boundaryIndex;
}
assert.ok(!effectSource.includes("generatedLessonPlan.filter("));

for (const selectorBoundary of [
  "return planItems.filter(",
  'item.lesson?.lessonType === "preExam"',
  'item.status === "create" || item.status === "update"'
]) {
  assert.ok(
    helperSource.includes(selectorBoundary),
    `missing generated pre-exam selector boundary: ${selectorBoundary}`
  );
}

for (const forbiddenHelperEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "saveGeneratedLessons",
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
    `generated pre-exam sync closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated pre-exam sync selector boundary closeout passed"
);

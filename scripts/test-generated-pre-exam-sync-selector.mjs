import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedPreExamLessonsToSync } from "../src/domains/lessons/generatedPreExamSyncSelector.js";

const createTarget = {
  lesson: {
    lessonId: "lesson_TARGET_PRE_EXAM_CREATE",
    lessonType: "preExam"
  },
  status: "create"
};
const examPrepCreateControl = {
  lesson: {
    lessonId: "lesson_CONTROL_EXAM_PREP_CREATE",
    lessonType: "examPrep"
  },
  status: "create"
};
const syncedControl = {
  lesson: {
    lessonId: "lesson_CONTROL_PRE_EXAM_SYNCED",
    lessonType: "preExam"
  },
  status: "synced"
};
const updateTarget = {
  lesson: {
    lessonId: "lesson_TARGET_PRE_EXAM_UPDATE",
    lessonType: "preExam"
  },
  status: "update"
};
const protectedControl = {
  lesson: {
    lessonId: "lesson_CONTROL_PRE_EXAM_PROTECTED",
    lessonType: "preExam"
  },
  status: "protected"
};
const planItems = [
  createTarget,
  examPrepCreateControl,
  syncedControl,
  updateTarget,
  protectedControl
];
const inputSnapshot = structuredClone(planItems);
const preExamLessonsToSync =
  selectGeneratedPreExamLessonsToSync(planItems);

assert.deepEqual(preExamLessonsToSync, [
  createTarget,
  updateTarget
]);
assert.equal(preExamLessonsToSync[0], createTarget);
assert.equal(preExamLessonsToSync[1], updateTarget);
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
for (const appBoundary of [
  'import { selectGeneratedPreExamLessonsToSync } from "../domains/lessons/generatedPreExamSyncSelector.js"',
  'session?.role !== "teacher" || !isAppStateReady || attendanceOnlyMode',
  "const preExamLessonsToSync =",
  "selectGeneratedPreExamLessonsToSync(generatedLessonPlan)",
  "if (preExamLessonsToSync.length === 0) return",
  "saveGeneratedLessonsFromPlan(preExamLessonsToSync)",
  "[attendanceOnlyMode, generatedLessonPlan, isAppStateReady, session?.role]"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing generated pre-exam sync App boundary: ${appBoundary}`
  );
}
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
assert.ok(!effectSource.includes("generatedLessonPlan.filter("));

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
    `generated pre-exam sync selector crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log(
  "generated pre-exam sync selector TARGET/CONTROL extraction fixtures passed"
);

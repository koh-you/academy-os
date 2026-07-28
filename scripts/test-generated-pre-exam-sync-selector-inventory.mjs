import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

function selectExistingPreExamLessonsToSync(planItems = []) {
  return planItems.filter(
    (item) =>
      item.lesson?.lessonType === "preExam" &&
      (item.status === "create" || item.status === "update")
  );
}

const createTarget = {
  generatedKey: "generated_TARGET_PRE_EXAM_CREATE",
  lesson: {
    lessonId: "lesson_TARGET_PRE_EXAM_CREATE",
    lessonType: "preExam"
  },
  status: "create"
};
const examPrepCreateControl = {
  generatedKey: "generated_CONTROL_EXAM_PREP_CREATE",
  lesson: {
    lessonId: "lesson_CONTROL_EXAM_PREP_CREATE",
    lessonType: "examPrep"
  },
  status: "create"
};
const syncedControl = {
  generatedKey: "generated_CONTROL_PRE_EXAM_SYNCED",
  lesson: {
    lessonId: "lesson_CONTROL_PRE_EXAM_SYNCED",
    lessonType: "preExam"
  },
  status: "synced"
};
const updateTarget = {
  generatedKey: "generated_TARGET_PRE_EXAM_UPDATE",
  lesson: {
    lessonId: "lesson_TARGET_PRE_EXAM_UPDATE",
    lessonType: "preExam"
  },
  status: "update"
};
const protectedControl = {
  generatedKey: "generated_CONTROL_PRE_EXAM_PROTECTED",
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
  selectExistingPreExamLessonsToSync(planItems);

assert.deepEqual(preExamLessonsToSync, [
  createTarget,
  updateTarget
]);
assert.equal(preExamLessonsToSync[0], createTarget);
assert.equal(preExamLessonsToSync[1], updateTarget);
assert.deepEqual(planItems, inputSnapshot);
assert.deepEqual(selectExistingPreExamLessonsToSync(), []);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const effectAnchor = appSource.indexOf(
  "const preExamLessonsToSync = generatedLessonPlan.filter("
);
const effectStart = appSource.lastIndexOf(
  "  useEffect(() => {",
  effectAnchor
);
const effectEnd = appSource.indexOf(
  "  async function refreshNotificationJobs(",
  effectAnchor
);
assert.ok(
  effectStart >= 0 &&
    effectAnchor > effectStart &&
    effectEnd > effectAnchor
);
const effectSource = appSource.slice(effectStart, effectEnd);
const effectBoundaries = [
  'session?.role !== "teacher" || !isAppStateReady || attendanceOnlyMode',
  "const preExamLessonsToSync = generatedLessonPlan.filter(",
  'item.lesson?.lessonType === "preExam"',
  'item.status === "create" || item.status === "update"',
  "if (preExamLessonsToSync.length === 0) return",
  "saveGeneratedLessonsFromPlan(preExamLessonsToSync)",
  "[attendanceOnlyMode, generatedLessonPlan, isAppStateReady, session?.role]"
];
let previousIndex = -1;
for (const boundary of effectBoundaries) {
  const boundaryIndex = effectSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated pre-exam sync effect order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}

console.log(
  "generated pre-exam sync selector inventory TARGET/CONTROL fixtures passed"
);

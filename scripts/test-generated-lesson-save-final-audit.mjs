import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectGeneratedLessonsToSave } from "../src/domains/lessons/generatedLessonSaveSelector.js";
import {
  createGeneratedLessonFailedStatus,
  createGeneratedLessonSavedStatus,
  createGeneratedLessonSavingStatus
} from "../src/domains/lessons/generatedLessonSaveStatus.js";
import { mergeGeneratedLessonLists } from "../src/domains/lessons/generatedLessonState.js";

const currentTarget = {
  lessonId: "lesson_TARGET",
  baseField: "BASE",
  marker: "TARGET_OLD"
};
const currentControl = {
  lessonId: "lesson_CONTROL",
  marker: "CONTROL"
};
const targetPatch = {
  lessonId: "lesson_TARGET",
  patchField: "PATCH",
  marker: "TARGET_NEW"
};
const newTarget = {
  lessonId: "lesson_NEW",
  marker: "NEW"
};
const planItems = [
  { lesson: targetPatch, status: "update" },
  { lesson: currentControl, status: "persisted" },
  { lesson: newTarget, status: "create" }
];
const currentLessons = [currentTarget, currentControl];
const inputSnapshot = structuredClone({ currentLessons, planItems });
const lessonsToSave = selectGeneratedLessonsToSave(planItems);
const nextLessons = mergeGeneratedLessonLists(
  currentLessons,
  lessonsToSave
);
const savingStatus = createGeneratedLessonSavingStatus(lessonsToSave);
const savedStatus = createGeneratedLessonSavedStatus(lessonsToSave);
const failedStatus = createGeneratedLessonFailedStatus(
  lessonsToSave,
  "TARGET_ERROR"
);

assert.deepEqual(lessonsToSave, [targetPatch, newTarget]);
assert.deepEqual(nextLessons, [
  {
    lessonId: "lesson_TARGET",
    baseField: "BASE",
    patchField: "PATCH",
    marker: "TARGET_NEW"
  },
  currentControl,
  newTarget
]);
assert.equal(nextLessons[1], currentControl);
assert.equal(nextLessons[2], newTarget);
assert.equal(savingStatus.lessons, lessonsToSave);
assert.equal(savingStatus.message, "자동 수업 2건 저장 중...");
assert.deepEqual(savedStatus.lessons, []);
assert.equal(savedStatus.message, "자동 수업 2건 저장 완료");
assert.equal(failedStatus.lessons, lessonsToSave);
assert.equal(
  failedStatus.message,
  "자동 수업 저장 실패 · TARGET_ERROR"
);
assert.deepEqual({ currentLessons, planItems }, inputSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const selectorSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonSaveSelector.js",
    import.meta.url
  ),
  "utf8"
);
const statusSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonSaveStatus.js",
    import.meta.url
  ),
  "utf8"
);
const stateSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonState.js",
    import.meta.url
  ),
  "utf8"
);

for (const modulePath of [
  'from "../domains/lessons/generatedLessonSaveSelector.js"',
  'from "../domains/lessons/generatedLessonSaveStatus.js"',
  'from "../domains/lessons/generatedLessonState.js"'
]) {
  assert.equal(appSource.split(modulePath).length - 1, 1);
}
assert.equal(selectorSource.split("export function ").length - 1, 1);
assert.equal(statusSource.split("export function ").length - 1, 3);
assert.equal(stateSource.split("export function ").length - 1, 1);
assert.equal(
  appSource.split("selectGeneratedLessonsToSave(planItems)").length - 1,
  1
);
assert.equal(
  appSource.split(
    "mergeGeneratedLessonLists(current, lessonsToSave)"
  ).length - 1,
  1
);
assert.equal(
  appSource.split("createGeneratedLessonSavingStatus(lessonsToSave)")
    .length - 1,
  1
);
assert.equal(
  appSource.split("createGeneratedLessonSavedStatus(lessonsToSave)")
    .length - 1,
  1
);
assert.equal(
  appSource.split(
    "createGeneratedLessonFailedStatus(lessonsToSave, error.message)"
  ).length - 1,
  1
);

const boundaryStart = appSource.indexOf(
  "function mergeGeneratedLessonsIntoState(lessonsToSave)"
);
const boundaryEnd = appSource.indexOf(
  "\n  function handleApplyGeneratedLessons()",
  boundaryStart
);
assert.ok(boundaryStart >= 0 && boundaryEnd > boundaryStart);
const boundarySource = appSource.slice(boundaryStart, boundaryEnd);
const orderedBoundaries = [
  "setLessons((current) => mergeGeneratedLessonLists(current, lessonsToSave))",
  "function saveGeneratedLessons(lessonsToSave)",
  "if (lessonsToSave.length === 0) return",
  "mergeGeneratedLessonsIntoState(lessonsToSave)",
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonSavingStatus(lessonsToSave)",
  "postJsonWithTimeout(",
  '"/api/lessons/bulk"',
  "20000",
  ".then((result)",
  "if (Array.isArray(result.lessons) && result.lessons.length > 0)",
  "mergeGeneratedLessonsIntoState(result.lessons)",
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonSavedStatus(lessonsToSave)",
  ".catch((error)",
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonFailedStatus(lessonsToSave, error.message)",
  "function saveGeneratedLessonsFromPlan(planItems)",
  "selectGeneratedLessonsToSave(planItems)",
  "saveGeneratedLessons(lessonsToSave)"
];
let previousIndex = -1;
for (const boundary of orderedBoundaries) {
  const boundaryIndex = boundarySource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson final audit order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.ok(!boundarySource.includes("lessonsToSave.forEach("));
assert.ok(!boundarySource.includes(".filter((item) => item.status"));
assert.ok(!boundarySource.includes("message: `자동 수업"));

for (const helperSource of [
  selectorSource,
  statusSource,
  stateSource
]) {
  for (const forbiddenHelperEffect of [
    "useState",
    "useEffect",
    "fetch(",
    "postJson",
    "/api/",
    "setLessons",
    "setGeneratedLessonSaveStatus",
    "localStorage",
    "Supabase",
    "Solapi",
    "new Date",
    "Date.now",
    "Promise.all"
  ]) {
    assert.ok(
      !helperSource.includes(forbiddenHelperEffect),
      `generated lesson final audit found a helper side effect: ${forbiddenHelperEffect}`
    );
  }
}

const nextCandidateStart = appSource.indexOf(
  "const generatedLessonPlanRows = useMemo("
);
const nextCandidateEnd = appSource.indexOf(
  "  useEffect(() => {",
  nextCandidateStart
);
assert.ok(nextCandidateStart >= 0 && nextCandidateEnd > nextCandidateStart);
const nextCandidateSource = appSource.slice(
  nextCandidateStart,
  nextCandidateEnd
);
for (const candidateRule of [
  "() => selectGeneratedLessonPlanRows(examPrepRows, currentExamCycle)",
  "[examPrepRows]"
]) {
  assert.ok(
    nextCandidateSource.includes(candidateRule),
    `next generated lesson row candidate changed: ${candidateRule}`
  );
}

console.log("generated lesson save final aggregate audit passed");

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createGeneratedLessonFailedStatus,
  createGeneratedLessonSavedStatus,
  createGeneratedLessonSavingStatus
} from "../src/domains/lessons/generatedLessonSaveStatus.js";

const targetLesson = {
  lessonId: "lesson_TARGET",
  marker: "TARGET"
};
const controlLesson = {
  lessonId: "lesson_CONTROL",
  marker: "CONTROL"
};
const lessons = [targetLesson, controlLesson];
const inputSnapshot = structuredClone(lessons);
const savingStatus = createGeneratedLessonSavingStatus(lessons);
const savedStatus = createGeneratedLessonSavedStatus(lessons);
const failedStatus = createGeneratedLessonFailedStatus(
  lessons,
  "TARGET_ERROR"
);
assert.equal(savingStatus.lessons, lessons);
assert.equal(savingStatus.message, "자동 수업 2건 저장 중...");
assert.deepEqual(savedStatus.lessons, []);
assert.equal(savedStatus.message, "자동 수업 2건 저장 완료");
assert.equal(failedStatus.lessons, lessons);
assert.equal(
  failedStatus.message,
  "자동 수업 저장 실패 · TARGET_ERROR"
);
assert.deepEqual(lessons, inputSnapshot);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const helperSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedLessonSaveStatus.js",
    import.meta.url
  ),
  "utf8"
);
const modulePath =
  'from "../domains/lessons/generatedLessonSaveStatus.js"';
assert.equal(appSource.split(modulePath).length - 1, 1);
assert.equal(helperSource.split("export function ").length - 1, 3);
assert.equal(
  helperSource.split("export function createGeneratedLessonSavingStatus(")
    .length - 1,
  1
);
assert.equal(
  helperSource.split("export function createGeneratedLessonSavedStatus(")
    .length - 1,
  1
);
assert.equal(
  helperSource.split("export function createGeneratedLessonFailedStatus(")
    .length - 1,
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
assert.equal(
  appSource.split("setGeneratedLessonSaveStatus(").length - 1,
  3
);

const functionStart = appSource.indexOf(
  "function saveGeneratedLessons(lessonsToSave)"
);
const functionEnd = appSource.indexOf(
  "\n  function saveGeneratedLessonsFromPlan(",
  functionStart
);
assert.ok(functionStart >= 0 && functionEnd > functionStart);
const functionSource = appSource.slice(functionStart, functionEnd);
const orderedBoundaries = [
  "if (lessonsToSave.length === 0) return",
  "mergeGeneratedLessonsIntoState(lessonsToSave)",
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonSavingStatus(lessonsToSave)",
  "postJsonWithTimeout(",
  '"/api/lessons/bulk"',
  "20000",
  ".then((result)",
  "mergeGeneratedLessonsIntoState(result.lessons)",
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonSavedStatus(lessonsToSave)",
  ".catch((error)",
  "setGeneratedLessonSaveStatus(",
  "createGeneratedLessonFailedStatus(lessonsToSave, error.message)"
];
let previousIndex = -1;
for (const boundary of orderedBoundaries) {
  const boundaryIndex = functionSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `generated lesson status closeout order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.ok(!functionSource.includes("message: `자동 수업"));
assert.ok(!functionSource.includes('state: "saving"'));
assert.ok(!functionSource.includes('state: "saved"'));
assert.ok(!functionSource.includes('state: "failed"'));

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
    `generated lesson status closeout crossed a side effect: ${forbiddenHelperEffect}`
  );
}

console.log("generated lesson save status boundary closeout passed");

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createPreExamLessonId } from "../src/domains/lessons/generatedPreExamLessonIdBuilder.js";

const sharedPrefix = `source_${"x".repeat(50)}`;
const firstSourceId = `${sharedPrefix}_TARGET_1`;
const secondSourceId = `${sharedPrefix}_TARGET_2`;
const firstLessonId =
  createPreExamLessonId(firstSourceId);
const secondLessonId =
  createPreExamLessonId(secondSourceId);
assert.equal(
  firstLessonId.slice(
    0,
    firstLessonId.lastIndexOf("_")
  ),
  secondLessonId.slice(
    0,
    secondLessonId.lastIndexOf("_")
  )
);
assert.notEqual(firstLessonId, secondLessonId);
assert.equal(
  createPreExamLessonId(
    " 가상 학교 / 고2 : 2026-08-11 "
  ),
  "lesson_pre_exam_가상-학교--고2--2026-08-11_ohz7l9"
);
assert.equal(createPreExamLessonId(), "lesson_pre_exam__0");
assert.equal(
  createPreExamLessonId("event_TARGET_STABLE"),
  createPreExamLessonId("event_TARGET_STABLE")
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const lessonIdBuilderSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedPreExamLessonIdBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const lessonBuilderSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedPreExamLessonBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const sharedIdSource = await readFile(
  new URL("../src/shared/utils/id.js", import.meta.url),
  "utf8"
);
assert.equal(
  appSource.split(
    'from "../domains/lessons/generatedPreExamLessonIdBuilder.js"'
  ).length - 1,
  1
);
assert.equal(
  lessonIdBuilderSource.split(
    "export function createPreExamLessonId("
  ).length - 1,
  1
);
assert.equal(
  appSource.split(
    "function createPreExamLessonId("
  ).length - 1,
  0
);
assert.equal(
  lessonIdBuilderSource.split(
    'from "../../shared/utils/id.js"'
  ).length - 1,
  1
);
const lessonIdBoundaries = [
  "import {",
  "safeIdPart,",
  "shortStableHash",
  'from "../../shared/utils/id.js"',
  'export function createPreExamLessonId(sourceId = "")',
  "safeIdPart(sourceId)",
  "shortStableHash(sourceId)"
];
let previousIndex = -1;
for (const boundary of lessonIdBoundaries) {
  const boundaryIndex = lessonIdBuilderSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `preExam lesson ID closeout order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
for (const appBoundary of [
  "createGeneratedPreExamLessonBuilder({",
  "createPreExamLessonId,"
]) {
  assert.ok(
    appSource.includes(appBoundary),
    `missing App preExam lesson ID boundary: ${appBoundary}`
  );
}
assert.ok(
  lessonBuilderSource.includes(
    "lessonId: createPreExamLessonId(sourceId)"
  )
);
for (const sharedBoundary of [
  'export function safeIdPart(value = "")',
  ".slice(0, 40)",
  'export function shortStableHash(value = "")',
  "Math.abs(hash).toString(36).slice(0, 6)"
]) {
  assert.ok(
    sharedIdSource.includes(sharedBoundary),
    `missing shared ID boundary: ${sharedBoundary}`
  );
}
for (const forbiddenEffect of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "/api/",
  "setLessons",
  "localStorage",
  "Supabase",
  "Solapi",
  "Date.now",
  "Promise.all"
]) {
  assert.ok(
    !lessonIdBuilderSource.includes(forbiddenEffect),
    `preExam lesson ID closeout crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "generated preExam lesson ID builder boundary closeout passed"
);

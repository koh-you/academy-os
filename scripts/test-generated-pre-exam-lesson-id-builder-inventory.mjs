import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  safeIdPart,
  shortStableHash
} from "../src/shared/utils/id.js";

function createExistingPreExamLessonId(sourceId = "") {
  return `lesson_pre_exam_${safeIdPart(sourceId)}_${shortStableHash(sourceId)}`;
}

const collisionPrefix =
  `source_${"a".repeat(45)}`;
const firstCollisionTarget =
  `${collisionPrefix}_TARGET_A`;
const secondCollisionTarget =
  `${collisionPrefix}_TARGET_B`;
assert.equal(
  safeIdPart(firstCollisionTarget),
  safeIdPart(secondCollisionTarget)
);
assert.equal(
  createExistingPreExamLessonId(firstCollisionTarget),
  "lesson_pre_exam_source_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_3bvg5x"
);
assert.equal(
  createExistingPreExamLessonId(secondCollisionTarget),
  "lesson_pre_exam_source_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_3bvg5y"
);
assert.notEqual(
  createExistingPreExamLessonId(firstCollisionTarget),
  createExistingPreExamLessonId(secondCollisionTarget)
);
assert.equal(
  createExistingPreExamLessonId(
    " 가상 학교 / 고2 : 2026-08-11 "
  ),
  "lesson_pre_exam_가상-학교--고2--2026-08-11_ohz7l9"
);
assert.equal(
  createExistingPreExamLessonId(),
  "lesson_pre_exam__0"
);

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const builderSource = await readFile(
  new URL(
    "../src/domains/lessons/generatedPreExamLessonBuilder.js",
    import.meta.url
  ),
  "utf8"
);
const idSource = await readFile(
  new URL("../src/shared/utils/id.js", import.meta.url),
  "utf8"
);
const appBoundaries = [
  "function createPreExamLessonId(sourceId = \"\")",
  "return `lesson_pre_exam_${safeIdPart(sourceId)}_${shortStableHash(sourceId)}`",
  "const createPreExamLessonFromSchoolEvent =",
  "createGeneratedPreExamLessonBuilder({",
  "createPreExamLessonId,"
];
let previousIndex = -1;
for (const boundary of appBoundaries) {
  const boundaryIndex = appSource.indexOf(
    boundary,
    previousIndex + 1
  );
  assert.ok(
    boundaryIndex > previousIndex,
    `preExam lesson ID boundary order changed: ${boundary}`
  );
  previousIndex = boundaryIndex;
}
assert.equal(
  appSource.split(
    "function createPreExamLessonId("
  ).length - 1,
  1
);
assert.equal(
  builderSource.split(
    "createPreExamLessonId("
  ).length - 1,
  1
);
assert.ok(
  builderSource.includes(
    "lessonId: createPreExamLessonId(sourceId)"
  )
);
for (const utilityBoundary of [
  "export function safeIdPart(value = \"\")",
  ".slice(0, 40)",
  "export function shortStableHash(value = \"\")",
  "Math.abs(hash).toString(36).slice(0, 6)"
]) {
  assert.ok(
    idSource.includes(utilityBoundary),
    `missing shared ID utility boundary: ${utilityBoundary}`
  );
}
for (const forbiddenEffect of [
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
    !idSource.includes(forbiddenEffect),
    `shared ID utility crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "generated preExam lesson ID builder inventory TARGET/CONTROL fixtures passed"
);

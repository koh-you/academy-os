import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createPreExamLessonId } from "../src/domains/lessons/generatedPreExamLessonIdBuilder.js";

const commonPrefix = `event_${"가".repeat(45)}`;
const firstTarget = `${commonPrefix}_TARGET_A`;
const secondTarget = `${commonPrefix}_TARGET_B`;
const firstId = createPreExamLessonId(firstTarget);
const secondId = createPreExamLessonId(secondTarget);
assert.match(
  firstId,
  /^lesson_pre_exam_event_가+_[0-9a-z]+$/
);
assert.match(
  secondId,
  /^lesson_pre_exam_event_가+_[0-9a-z]+$/
);
assert.equal(
  firstId.split("_").slice(0, -1).join("_"),
  secondId.split("_").slice(0, -1).join("_")
);
assert.notEqual(firstId, secondId);
assert.equal(
  createPreExamLessonId(
    " 가상 학교 / 고2 : 2026-08-11 "
  ),
  "lesson_pre_exam_가상-학교--고2--2026-08-11_ohz7l9"
);
assert.equal(createPreExamLessonId(), "lesson_pre_exam__0");

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
assert.ok(
  appSource.includes(
    "createGeneratedPreExamLessonBuilder({"
  )
);
assert.ok(appSource.includes("createPreExamLessonId,"));
assert.ok(
  lessonBuilderSource.includes(
    "lessonId: createPreExamLessonId(sourceId)"
  )
);
for (const helperBoundary of [
  'from "../../shared/utils/id.js"',
  "safeIdPart,",
  "shortStableHash",
  'export function createPreExamLessonId(sourceId = "")',
  "safeIdPart(sourceId)",
  "shortStableHash(sourceId)"
]) {
  assert.ok(
    lessonIdBuilderSource.includes(helperBoundary),
    `missing extracted preExam lesson ID boundary: ${helperBoundary}`
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
    `preExam lesson ID helper crossed a side effect: ${forbiddenEffect}`
  );
}

console.log(
  "generated preExam lesson ID builder extraction TARGET/CONTROL fixtures passed"
);

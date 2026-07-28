import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { verifyLessonModalSaveResults } from "../src/domains/lessons/lessonModalSaveVerification.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(
  path.join(root, "src", "domains", "lessons", "lessonModalSaveVerification.js"),
  "utf8"
);
const expectedLessons = [
  {
    className: "중3 A",
    date: "2026-07-28",
    endTime: "22:00",
    lessonId: "lesson-a",
    lessonType: "regular",
    startTime: "19:00",
    studentIds: ["student-b", "student-a"]
  },
  {
    className: "중3 B",
    date: "2026-07-29",
    endTime: "22:00",
    lessonId: "lesson-b",
    lessonType: "regular",
    startTime: "19:00",
    studentIds: ["student-c"]
  }
];
const persistedLessons = [
  { ...expectedLessons[1], serverOnlyField: "ignored" },
  {
    ...expectedLessons[0],
    endTime: "22:00:00",
    startTime: "19:00:00",
    studentIds: ["student-a", "student-b"]
  },
  { lessonId: "unrelated" }
];

assert.deepEqual(
  verifyLessonModalSaveResults({ expectedLessons, persistedLessons }),
  [persistedLessons[1], persistedLessons[0]],
  "verification must return persisted rows in expected order"
);
assert.throws(
  () => verifyLessonModalSaveResults({
    expectedLessons,
    persistedLessons: persistedLessons.filter((lesson) => lesson.lessonId !== "lesson-b")
  }),
  /저장 후 수업일지를 찾지 못했습니다: 중3 B/
);
assert.throws(
  () => verifyLessonModalSaveResults({
    expectedLessons,
    persistedLessons: persistedLessons.map((lesson) =>
      lesson.lessonId === "lesson-a"
        ? { ...lesson, className: "다른 반" }
        : lesson
    )
  }),
  /저장 후 Supabase 값이 일치하지 않습니다: 중3 A/
);
assert.deepEqual(verifyLessonModalSaveResults({}), []);

for (const forbidden of [
  "fetch(",
  "postJson",
  "apiUrl",
  "/api/",
  "useState",
  "useEffect",
  "supabase",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `save verification must not include ${forbidden}`);
}

console.log("lesson modal persisted result verification passed");

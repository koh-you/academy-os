import assert from "node:assert/strict";
import {
  getCanceledLessonRemainingDays,
  getStoredGeneratedLessonSuppressedKeys,
  selectRecentCanceledLessons,
  selectRecentRestorableLessons
} from "../src/domains/lessons/recentCanceledLessons.js";

const now = new Date("2026-09-05T12:00:00+09:00");
const recent = {
  lessonId: "recent",
  date: "2026-09-06",
  startTime: "13:00",
  status: "canceled",
  updatedAt: "2026-08-31T22:13:50+09:00"
};
const newer = {
  lessonId: "newer",
  date: "2026-09-07",
  startTime: "10:00",
  status: "canceled",
  updatedAt: "2026-09-05T10:00:00+09:00"
};

assert.deepEqual(
  selectRecentCanceledLessons([
    recent,
    newer,
    { ...recent, lessonId: "active", status: "scheduled" },
    { ...recent, lessonId: "expired", updatedAt: "2026-08-29T11:59:59+09:00" },
    { ...recent, lessonId: "future-cancel", updatedAt: "2026-09-05T13:00:00+09:00" }
  ], now).map((lesson) => lesson.lessonId),
  ["newer", "recent"]
);
assert.equal(getCanceledLessonRemainingDays(recent, now), 3);
assert.equal(getCanceledLessonRemainingDays({ ...recent, updatedAt: "invalid" }, now), 0);
assert.deepEqual(getStoredGeneratedLessonSuppressedKeys({ getItem: () => JSON.stringify({ suppressedKeys: ["one"] }) }), ["one"]);
assert.deepEqual(getStoredGeneratedLessonSuppressedKeys({ getItem: () => "invalid" }), []);

const hiddenRestored = {
  ...recent,
  generatedKey: "generated:exam_prep:2026-09-06",
  lessonId: "hidden-restored",
  status: "scheduled"
};
assert.deepEqual(
  selectRecentRestorableLessons([recent, newer, hiddenRestored], {
    suppressedKeys: [hiddenRestored.generatedKey]
  }, now).map(({ lessonId, restoreMode }) => ({ lessonId, restoreMode })),
  [
    { lessonId: "newer", restoreMode: "lesson" },
    { lessonId: "recent", restoreMode: "lesson" },
    { lessonId: "hidden-restored", restoreMode: "visibility" }
  ]
);

console.log("recent canceled lesson selection and retention labels passed");

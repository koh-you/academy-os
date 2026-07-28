import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { saveLessonModalLessonsWithVerification } from "../src/domains/lessons/lessonModalSaveController.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(
  path.join(root, "src", "domains", "lessons", "lessonModalSaveController.js"),
  "utf8"
);
const expectedLesson = {
  className: "가상 CONTROL 반",
  date: "2026-07-29",
  endTime: "22:00",
  lessonId: "virtual-lesson",
  lessonType: "regular",
  startTime: "19:00",
  studentIds: ["virtual-control"]
};
const persistedLesson = {
  ...expectedLesson,
  endTime: "22:00:00",
  startTime: "19:00:00",
  serverOnlyField: "preserved"
};
const events = [];

const success = await saveLessonModalLessonsWithVerification({
  lessonDrafts: [{ ignored: true }, expectedLesson],
  onProgress: (state, message) => events.push(["progress", state, message]),
  saveLessons: async (lessons) => {
    events.push(["save", lessons]);
    return { source: "supabase" };
  },
  readLessons: async () => {
    events.push(["read"]);
    return {
      source: "supabase",
      lessons: [{ lessonId: "unrelated" }, persistedLesson]
    };
  }
});

assert.deepEqual(
  events.map(([event]) => event),
  ["save", "progress", "read"],
  "save, progress, and persisted read must stay ordered"
);
assert.deepEqual(events[0][1], [expectedLesson], "invalid drafts must not reach the save request");
assert.deepEqual(
  events[1],
  ["progress", "saving", "Supabase 반영 확인 중"],
  "persisted verification progress must stay unchanged"
);
assert.deepEqual(success.verifiedLessons, [persistedLesson]);
assert.deepEqual(success.persistedLessons, [{ lessonId: "unrelated" }, persistedLesson]);

let requestCount = 0;
await assert.rejects(
  saveLessonModalLessonsWithVerification({
    lessonDrafts: [{ date: "2026-07-29" }],
    saveLessons: async () => {
      requestCount += 1;
    },
    readLessons: async () => {
      requestCount += 1;
    }
  }),
  /저장할 수업일지가 없습니다/
);
assert.equal(requestCount, 0, "empty drafts must fail before any request");

let readCount = 0;
await assert.rejects(
  saveLessonModalLessonsWithVerification({
    lessonDrafts: [expectedLesson],
    saveLessons: async () => ({ source: "fallback" }),
    readLessons: async () => {
      readCount += 1;
      return { source: "supabase", lessons: [persistedLesson] };
    }
  }),
  /임시 원천에 저장되어/
);
assert.equal(readCount, 0, "fallback saves must stop before persisted verification");

await assert.rejects(
  saveLessonModalLessonsWithVerification({
    lessonDrafts: [expectedLesson],
    saveLessons: async () => ({ source: "supabase" }),
    readLessons: async () => ({ source: "fallback", lessons: [persistedLesson] })
  }),
  /Supabase에서 다시 확인하지 못했습니다/
);

await assert.rejects(
  saveLessonModalLessonsWithVerification({
    lessonDrafts: [expectedLesson],
    saveLessons: async () => ({ source: "supabase" }),
    readLessons: async () => ({
      source: "supabase",
      lessons: [{ ...persistedLesson, className: "변경된 반" }]
    })
  }),
  /저장 후 Supabase 값이 일치하지 않습니다/
);

for (const forbidden of [
  "fetch(",
  "postJson",
  "getJson",
  "apiUrl",
  "/api/",
  "useState",
  "useEffect",
  "setLessons",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(source.includes(forbidden), false, `save controller must not include ${forbidden}`);
}

console.log("lesson modal injected save controller passed");

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getLessonModalSaveSnapshot } from "../src/domains/lessons/lessonModalSaveSnapshot.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(
  path.join(root, "src", "domains", "lessons", "lessonModalSaveSnapshot.js"),
  "utf8"
);

const baseLesson = {
  className: "중3 정규",
  classTemplateId: "template-1",
  date: "2026-07-28",
  endTime: "22:00:00",
  lessonId: "lesson-1",
  lessonType: "regular",
  specialLectureStudentSchedules: {
    "student-b": { endTime: "21:00", startTime: "19:00" },
    "student-a": { endTime: "20:00", startTime: "18:00" }
  },
  startTime: "9:05",
  studentIds: ["student-b", "student-a", "student-b"]
};
const reorderedLesson = {
  ...baseLesson,
  endTime: "22:00",
  specialLectureStudentSchedules: {
    "student-a": baseLesson.specialLectureStudentSchedules["student-a"],
    "student-b": baseLesson.specialLectureStudentSchedules["student-b"]
  },
  startTime: "09:05:59",
  status: "scheduled",
  studentIds: ["student-a", "student-b"],
  transientUiOnly: true
};

assert.equal(
  getLessonModalSaveSnapshot(baseLesson),
  getLessonModalSaveSnapshot(reorderedLesson),
  "time formats, roster order, duplicate ids, schedule key order, and transient fields must normalize"
);
assert.notEqual(
  getLessonModalSaveSnapshot(baseLesson),
  getLessonModalSaveSnapshot({ ...baseLesson, className: "중3 변경" }),
  "persisted field changes must remain visible"
);
assert.equal(
  getLessonModalSaveSnapshot({}),
  getLessonModalSaveSnapshot({ status: "scheduled", studentIds: [] })
);

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
  assert.equal(source.includes(forbidden), false, `snapshot helper must not include ${forbidden}`);
}

console.log("lesson modal save snapshot normalization passed");

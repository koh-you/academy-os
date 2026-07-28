import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildNewLessonModalLessons } from "../src/domains/lessons/lessonModalPayloadBuilders.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(
  path.join(root, "src", "domains", "lessons", "lessonModalPayloadBuilders.js"),
  "utf8"
);
const resolveDayKey = (date) => `day:${date}`;
const resolveLessonColor = (lesson) => `color:${lesson.lessonType}:${lesson.className}`;
const baseFormValues = {
  closureMakeupDate: "2026-08-04",
  closureMakeupEndTime: "20:00",
  closureMakeupStartTime: "18:00",
  date: "2026-07-28",
  endTime: "22:00",
  lessonType: "regular",
  name: "중3 정규",
  startTime: "19:00"
};
const studentIds = ["student-a", "student-b"];

const regularLessons = buildNewLessonModalLessons({
  classTemplateId: "template-1",
  closureMakeupLessonId: "",
  formValues: baseFormValues,
  lessonId: "lesson-1",
  resolveDayKey,
  resolveLessonColor,
  studentIds
});
assert.deepEqual(regularLessons, [{
  lessonId: "lesson-1",
  classTemplateId: "template-1",
  className: "중3 정규",
  lessonType: "regular",
  lessonTopic: "",
  date: "2026-07-28",
  dayOfWeek: "day:2026-07-28",
  startTime: "19:00",
  endTime: "22:00",
  color: "color:regular:중3 정규",
  teacherId: "instructor_owner_001",
  studentIds,
  sourceLabel: "",
  status: "scheduled"
}]);

const closureLessons = buildNewLessonModalLessons({
  classTemplateId: "template-1",
  closureMakeupLessonId: "lesson-makeup-1",
  formValues: { ...baseFormValues, lessonType: "closure" },
  lessonId: "lesson-closure-1",
  resolveDayKey,
  resolveLessonColor,
  studentIds
});
assert.equal(closureLessons.length, 2);
assert.deepEqual(closureLessons[0], {
  ...regularLessons[0],
  lessonId: "lesson-closure-1",
  lessonType: "closure",
  lessonTopic: "휴강",
  color: "color:closure:중3 정규",
  sourceLabel: "연결 휴강 보충 · lesson-makeup-1"
});
assert.deepEqual(closureLessons[1], {
  lessonId: "lesson-makeup-1",
  classTemplateId: "template-1",
  className: "중3 정규 · 휴강 보충",
  lessonType: "makeup",
  lessonTopic: "휴강 보충",
  date: "2026-08-04",
  dayOfWeek: "day:2026-08-04",
  startTime: "18:00",
  endTime: "20:00",
  color: "color:makeup:중3 정규 · 휴강 보충",
  teacherId: "instructor_owner_001",
  studentIds,
  sourceLabel: "원 휴강 수업 · lesson-closure-1",
  status: "scheduled"
});

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
  assert.equal(source.includes(forbidden), false, `payload builder must not include ${forbidden}`);
}

console.log("new lesson and optional closure makeup payload builders passed");

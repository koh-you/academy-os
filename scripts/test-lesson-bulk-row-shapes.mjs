import assert from "node:assert/strict";
import { toLessonRow } from "../api/routes/coreData.js";

const existingLesson = {
  lessonId: "lesson_existing",
  classTemplateId: "template_1",
  className: "기존 수업",
  date: "2026-07-27",
  startTime: "13:00",
  endTime: "16:00",
  studentIds: ["student_1"],
  lessonType: "closure",
  lessonTopic: "휴강",
  specialLectureStudentSchedules: [],
  status: "scheduled"
};

const linkedMakeupLesson = {
  lessonId: "lesson_makeup",
  classTemplateId: "template_1",
  className: "기존 수업 · 휴강 보충",
  date: "2026-08-03",
  startTime: "13:00",
  endTime: "16:00",
  studentIds: ["student_1"],
  lessonType: "makeup",
  lessonTopic: "휴강 보충",
  status: "scheduled"
};

const bulkRows = [existingLesson, linkedMakeupLesson].map((lesson) => toLessonRow(lesson));
assert.deepEqual(
  Object.keys(bulkRows[0]).sort(),
  Object.keys(bulkRows[1]).sort(),
  "Supabase bulk upsert rows must use the same object keys."
);
assert.deepEqual(bulkRows[0].special_lecture_student_schedules, []);
assert.deepEqual(bulkRows[1].special_lecture_student_schedules, []);

const legacyRows = [existingLesson, linkedMakeupLesson]
  .map((lesson) => toLessonRow(lesson, { includeScheduleMetadata: false }));
assert.deepEqual(Object.keys(legacyRows[0]).sort(), Object.keys(legacyRows[1]).sort());
assert.equal("special_lecture_student_schedules" in legacyRows[0], false);
assert.equal("special_lecture_student_schedules" in legacyRows[1], false);

console.log("lesson bulk row key contract passed");

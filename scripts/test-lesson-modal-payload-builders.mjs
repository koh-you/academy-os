import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildNewLessonModalLessons,
  buildUpdatedLessonModalLessons
} from "../src/domains/lessons/lessonModalPayloadBuilders.js";

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

const latestSourceLesson = {
  ...regularLessons[0],
  isExamPrepAutoLesson: true,
  isVirtualGeneratedLesson: true,
  lessonTopic: "기존 주제",
  lessonTrackId: "track-1",
  lessonTrackType: "special",
  sourceLabel: "기존 연결",
  specialLectureGuideId: "guide-1",
  status: "paused",
  teacherId: "teacher-existing"
};
const updatedLessons = buildUpdatedLessonModalLessons({
  classTemplateId: "template-2",
  closureMakeupLessonId: "",
  editingLesson: latestSourceLesson,
  formValues: {
    ...baseFormValues,
    date: "2026-07-29",
    name: "중3 수정"
  },
  latestSourceLesson,
  resolveDayKey,
  resolveLessonColor,
  studentIds: ["student-a", "student-historical"]
});
assert.deepEqual(updatedLessons, [{
  ...latestSourceLesson,
  isExamPrepAutoLesson: undefined,
  isVirtualGeneratedLesson: undefined,
  classTemplateId: "template-2",
  className: "중3 수정",
  lessonType: "regular",
  lessonTopic: "기존 주제",
  date: "2026-07-29",
  dayOfWeek: "day:2026-07-29",
  startTime: "19:00",
  endTime: "22:00",
  color: "color:regular:중3 수정",
  studentIds: ["student-a", "student-historical"],
  sourceLabel: "기존 연결",
  status: "paused"
}]);

const updatedClosureLessons = buildUpdatedLessonModalLessons({
  classTemplateId: "template-2",
  closureMakeupLessonId: "lesson-makeup-2",
  editingLesson: latestSourceLesson,
  formValues: {
    ...baseFormValues,
    lessonType: "closure",
    name: "중3 휴강"
  },
  latestSourceLesson,
  resolveDayKey,
  resolveLessonColor,
  studentIds
});
assert.equal(updatedClosureLessons.length, 2);
assert.equal(updatedClosureLessons[0].lessonTrackId, "track-1");
assert.equal(updatedClosureLessons[0].specialLectureGuideId, "guide-1");
assert.equal(updatedClosureLessons[0].teacherId, "teacher-existing");
assert.equal(updatedClosureLessons[0].lessonTopic, "휴강");
assert.equal(updatedClosureLessons[0].sourceLabel, "연결 휴강 보충 · lesson-makeup-2");
assert.equal(updatedClosureLessons[1].sourceLabel, "원 휴강 수업 · lesson-1");
assert.deepEqual(updatedClosureLessons[1].studentIds, studentIds);

const existingClosureWithoutNewMakeup = buildUpdatedLessonModalLessons({
  classTemplateId: "template-1",
  closureMakeupLessonId: "",
  editingLesson: {
    ...latestSourceLesson,
    lessonType: "closure",
    sourceLabel: "기존 휴강 연결"
  },
  formValues: { ...baseFormValues, lessonType: "closure" },
  latestSourceLesson,
  resolveDayKey,
  resolveLessonColor,
  studentIds
});
assert.equal(existingClosureWithoutNewMakeup[0].sourceLabel, "기존 휴강 연결");

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

console.log("new and updated lesson modal payload builders passed");

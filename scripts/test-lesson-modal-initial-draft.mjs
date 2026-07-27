import assert from "node:assert/strict";
import {
  createLessonModalClosureMakeupLessonId,
  createLessonModalDraftLessonId,
  createLessonModalInitialDraft
} from "../src/domains/lessons/lessonModalInitialDraft.js";

const activeTemplate = {
  classTemplateId: "class-a",
  name: "월수금 4-7",
  startTime: "16:00",
  endTime: "19:00"
};
const activeStudents = [
  { studentId: "student-a" },
  { studentId: "student-b" }
];
const addDaysInKorea = (date, days) => `${date}+${days}`;
const getTemplateLessonTimes = (template) => ({
  startTime: template.startTime,
  endTime: template.endTime
});
const normalizeTimeInput = (value) =>
  /^\d{2}:\d{2}$/.test(value ?? "") ? value : "";
const getStandardLessonColor = (lesson) =>
  `#${lesson.lessonType}-${lesson.classTemplateId}-${lesson.className}`;
const getActiveStudentIdsFromSelection = (studentIds, students) => {
  const activeIds = new Set(students.map((student) => student.studentId));
  return studentIds.filter((studentId) => activeIds.has(studentId));
};

const newLessonDraft = createLessonModalInitialDraft({
  activeStudents,
  activeTemplate,
  addDaysInKorea,
  getActiveStudentIdsFromSelection,
  getStandardLessonColor,
  getTemplateLessonTimes,
  initialLesson: null,
  normalizeTimeInput,
  today: "2026-07-27"
});
assert.deepEqual(newLessonDraft, {
  closureMakeupDate: "2026-07-27+7",
  closureMakeupEndTime: "19:00",
  closureMakeupStartTime: "16:00",
  color: "#class-class-a-월수금 4-7",
  date: "2026-07-27",
  endTime: "19:00",
  lessonType: "class",
  name: "월수금 4-7",
  startTime: "16:00",
  studentIds: ["student-a", "student-b"]
});

const existingLesson = {
  lessonId: "lesson-existing",
  lessonType: "closure",
  classTemplateId: "class-a",
  className: "기존 수업",
  color: "#saved",
  date: "2026-07-28",
  startTime: "17:00",
  endTime: "20:00",
  studentIds: ["student-b", "withdrawn-student"]
};
const existingLessonDraft = createLessonModalInitialDraft({
  activeStudents,
  activeTemplate,
  addDaysInKorea,
  getActiveStudentIdsFromSelection,
  getStandardLessonColor,
  getTemplateLessonTimes,
  initialLesson: existingLesson,
  normalizeTimeInput,
  today: "2026-07-27"
});
assert.deepEqual(existingLessonDraft, {
  closureMakeupDate: "2026-07-28+7",
  closureMakeupEndTime: "20:00",
  closureMakeupStartTime: "17:00",
  color: "#closure-class-a-기존 수업",
  date: "2026-07-28",
  endTime: "20:00",
  lessonType: "closure",
  name: "기존 수업",
  startTime: "17:00",
  studentIds: ["student-b"]
});

const idCalls = [];
const createLessonId = (date, name) => {
  idCalls.push({ date, name });
  return `id:${date}:${name}`;
};
assert.equal(
  createLessonModalDraftLessonId({
    activeTemplate,
    createLessonId,
    initialDraft: newLessonDraft,
    initialLesson: null
  }),
  "id:2026-07-27:월수금 4-7"
);
assert.equal(
  createLessonModalClosureMakeupLessonId({
    activeTemplate,
    createLessonId,
    initialDraft: newLessonDraft,
    initialLesson: null
  }),
  "id:2026-07-27+7:월수금 4-7-휴강-보충"
);
assert.deepEqual(idCalls, [
  { date: "2026-07-27", name: "월수금 4-7" },
  { date: "2026-07-27+7", name: "월수금 4-7-휴강-보충" }
]);

const persistedIdCalls = [];
assert.equal(
  createLessonModalDraftLessonId({
    activeTemplate,
    createLessonId: (...args) => {
      persistedIdCalls.push(args);
      return "unexpected";
    },
    initialDraft: existingLessonDraft,
    initialLesson: existingLesson
  }),
  "lesson-existing"
);
assert.deepEqual(
  persistedIdCalls,
  [],
  "an existing lesson id must not invoke the generated id source"
);

console.log("lesson modal initial draft and mount-time id factories passed");

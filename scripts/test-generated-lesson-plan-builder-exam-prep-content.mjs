import assert from "node:assert/strict";
import { buildGeneratedLessonPlan } from "../src/domains/lessons/generatedLessonPlanBuilder.js";

const existingLesson = {
  lessonId: "persisted-exam-prep",
  lessonTopic: "안전고 고1 함수 단원 오답 정리",
  lessonType: "examPrep",
  specialLectureStudentSchedules: [],
  studentIds: ["student-1"]
};
const candidateLesson = {
  lessonId: "generated-exam-prep",
  lessonTopic: "시험대비",
  lessonType: "examPrep",
  specialLectureStudentSchedules: [],
  studentIds: ["student-1"]
};

const plan = buildGeneratedLessonPlan({ lessons: [existingLesson] }, {
  normalizeGeneratedLessonControls: () => ({ manualOverrideKeys: [], suppressedKeys: [] }),
  buildExamCalendarEvents: () => [],
  createPreExamLessonFromSchoolEvent: () => null,
  createPreExamGeneratedKey: () => "",
  buildExamPrepLessonCandidates: () => [{
    generatedKey: "generated:exam-prep:2026-08-09",
    label: "시험대비",
    lesson: candidateLesson,
    reason: "시험기간 일요일"
  }],
  getGeneratedLessonIdentityKeys: () => ["exam-prep-date"],
  areGeneratedLessonPersistedFieldsEqual: (candidate, existing) => candidate.lessonTopic === existing.lessonTopic
});

assert.equal(plan.length, 1);
assert.equal(plan[0].lesson.lessonId, candidateLesson.lessonId);
assert.equal(plan[0].lesson.lessonTopic, "안전고 고1 함수 단원 오답 정리");
assert.equal(plan[0].status, "synced");

console.log("generated exam prep lesson content preservation tests passed");

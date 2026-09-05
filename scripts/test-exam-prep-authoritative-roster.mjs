import assert from "node:assert/strict";
import { createExamPrepLessonCandidateBuilder } from "../src/domains/lessons/examPrepLessonCandidateBuilder.js";
import { buildGeneratedLessonPlan } from "../src/domains/lessons/generatedLessonPlanBuilder.js";
import { areGeneratedLessonPersistedFieldsEqual } from "../src/domains/lessons/generatedLessonPersistenceModel.js";
import { filterStaleGeneratedExamPrepLessons } from "../src/domains/lessons/examPrepGeneratedLessonSourceFilter.js";

const keyFor = (value = {}) => `${String(value.schoolName || "").replace(/학교$/, "")}_${value.grade || ""}`;
const buildCandidates = createExamPrepLessonCandidateBuilder({
  examCycleLabel: () => "2학기 중간고사",
  getExamPrepGeneratedKeyForDate: (date) => `generated:exam_prep:${date}`,
  getExamPrepSchoolGradeKey: keyFor,
  getStandardLessonColor: () => "#bae6fd",
  getStudentSchoolGradeKey: keyFor,
  getSundayDatesForExamPeriod: () => ["2026-09-06"],
  isActiveStudent: (student) => student.status !== "withdrawn",
  parseDateRangeText: () => ({ date: "2026-09-20", endDate: "2026-09-22" })
});
const rows = [{ examPrepId: "r1", schoolName: "정의여고", grade: "고2", examCycle: "2026-2-mid", examPeriod: "period" }];
const students = [
  { studentId: "target", schoolName: "정의여고", grade: "고2", status: "active" },
  { studentId: "wrong-grade", schoolName: "정의여고", grade: "고1", status: "active" },
  { studentId: "withdrawn", schoolName: "정의여고", grade: "고2", status: "withdrawn" },
  { studentId: "stale-school", schoolName: "상계고", grade: "고2", status: "active" }
];
const candidate = buildCandidates(rows, students)[0];
assert.deepEqual(candidate.lesson.studentIds, ["target"]);
assert.equal(candidate.lesson.sourceLabel.includes("상계고"), false);

const existing = {
  ...candidate.lesson,
  sourceLabel: "상계고 2학기 중간고사 · 정의여고 2학기 중간고사",
  studentIds: ["stale-school", "target"],
  specialLectureStudentSchedules: [
    { studentId: "stale-school", startTime: "13:00", endTime: "15:00", scheduleType: "adjusted" },
    { studentId: "target", startTime: "14:00", endTime: "16:00", scheduleType: "adjusted" }
  ],
  updatedAt: "2026-08-11T00:00:00.000Z"
};
const [plan] = buildGeneratedLessonPlan({
  rows,
  lessons: [existing],
  students,
  controls: { manualOverrideKeys: [candidate.generatedKey] }
}, {
  normalizeGeneratedLessonControls: (value) => ({ manualOverrideKeys: value.manualOverrideKeys ?? [], suppressedKeys: [] }),
  buildExamCalendarEvents: () => [],
  createPreExamLessonFromSchoolEvent: () => null,
  createPreExamGeneratedKey: () => "",
  buildExamPrepLessonCandidates: buildCandidates,
  getGeneratedLessonIdentityKeys: (lesson) => [lesson.generatedKey, lesson.sourceSchoolEventId, lesson.lessonId].filter(Boolean),
  areGeneratedLessonPersistedFieldsEqual
});
assert.equal(plan.status, "update");
assert.equal(plan.lesson.sourceLabel, "정의여고 2학기 중간고사");
assert.deepEqual(plan.lesson.studentIds, ["target"]);
assert.deepEqual(plan.lesson.specialLectureStudentSchedules.map((schedule) => schedule.studentId), ["target"]);

const staleOnlyLesson = { ...existing, lessonId: "lesson_exam_prep_2026-08-30", generatedKey: "generated:exam_prep:2026-08-30", sourceSchoolEventId: "generated:exam_prep:2026-08-30" };
assert.deepEqual(filterStaleGeneratedExamPrepLessons([existing, staleOnlyLesson], [plan]).map((lesson) => lesson.lessonId), [existing.lessonId]);
assert.deepEqual(filterStaleGeneratedExamPrepLessons(
  [existing, staleOnlyLesson],
  [plan],
  { manualOverrideKeys: [staleOnlyLesson.generatedKey] }
).map((lesson) => lesson.lessonId), [existing.lessonId, staleOnlyLesson.lessonId]);

console.log("exam prep authoritative roster tests passed");

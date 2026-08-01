import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { selectPreviousLessonMemoContext } from "../src/domains/lessons/lessonJournalPreviousMemoSelector.js";

const student = { studentId: "student_target" };
const controlStudent = { studentId: "student_control" };
const currentLesson = {
  classTemplateId: "class_a",
  date: "2026-07-28",
  lessonId: "lesson_current",
  startTime: "18:00",
  studentIds: [student.studentId]
};

function isSpecialLectureLesson(lesson = {}) {
  return Boolean(lesson.lessonType === "specialLecture" || lesson.specialLectureGuideId);
}

function getLessonGroupKey(lesson = {}) {
  if (isSpecialLectureLesson(lesson)) {
    return lesson.lessonTrackId || lesson.specialLectureGuideId || "";
  }
  return lesson.classTemplateId || lesson.className || "";
}

function isSameLessonGroup(lesson, candidate) {
  const lessonIsSpecial = isSpecialLectureLesson(lesson);
  const candidateIsSpecial = isSpecialLectureLesson(candidate);
  if (lessonIsSpecial || candidateIsSpecial) {
    return lessonIsSpecial && candidateIsSpecial && getLessonGroupKey(lesson) === getLessonGroupKey(candidate);
  }
  return getLessonGroupKey(lesson) === getLessonGroupKey(candidate);
}

function isClosureLesson(lesson = {}) {
  return lesson.lessonType === "closure";
}

function lessonSortValue(lesson = {}) {
  return `${lesson.date ?? ""}T${lesson.startTime || "00:00"}`;
}

function findPreviousLessonForStudent(lessons, lesson, studentId, { allowRegularClassFallback = false } = {}) {
  const previousLessons = lessons
    .filter((candidate) => candidate.lessonId !== lesson.lessonId)
    .filter((candidate) => candidate.status !== "canceled" && !isClosureLesson(candidate))
    .filter((candidate) => candidate.studentIds?.includes(studentId))
    .filter((candidate) => lessonSortValue(candidate) < lessonSortValue(lesson))
    .sort((left, right) => lessonSortValue(right).localeCompare(lessonSortValue(left)));
  const sameGroupLesson = previousLessons.find((candidate) => isSameLessonGroup(lesson, candidate));
  if (sameGroupLesson || !allowRegularClassFallback || isSpecialLectureLesson(lesson)) return sameGroupLesson;
  return previousLessons.find((candidate) => !isSpecialLectureLesson(candidate));
}

const dependencies = {
  findPreviousLessonForStudent,
  isClosureLesson,
  isSameLessonGroup,
  isSpecialLectureLesson
};
const priorLesson = {
  classTemplateId: "class_a",
  date: "2026-07-27",
  lessonId: "lesson_prior",
  startTime: "18:00",
  studentIds: [student.studentId]
};
const olderLesson = {
  classTemplateId: "class_a",
  date: "2026-07-25",
  lessonId: "lesson_older",
  startTime: "18:00",
  studentIds: [student.studentId]
};
const baseLessons = [currentLesson, priorLesson, olderLesson];
const priorMemoRecord = {
  lessonId: priorLesson.lessonId,
  lessonStudentRecordId: "record_prior",
  preparationMemo: "직전 TARGET 메모",
  studentId: student.studentId
};
const olderMemoRecord = {
  lessonId: olderLesson.lessonId,
  lessonStudentRecordId: "record_older",
  preparationMemo: "이전 참고 메모",
  studentId: student.studentId
};

const directContext = selectPreviousLessonMemoContext({
  ...dependencies,
  currentLesson,
  lessons: baseLessons,
  records: [
    priorMemoRecord,
    olderMemoRecord,
    { ...priorMemoRecord, lessonStudentRecordId: "control_record", studentId: controlStudent.studentId }
  ],
  student
});
assert.equal(directContext.previousRecord?.lessonId, priorLesson.lessonId);
assert.equal(directContext.previousMemoRecord?.preparationMemo, "직전 TARGET 메모");
assert.equal(directContext.referenceRecord, null);

const referenceContext = selectPreviousLessonMemoContext({
  ...dependencies,
  currentLesson,
  lessons: baseLessons,
  records: [{ ...priorMemoRecord, preparationMemo: "" }, olderMemoRecord],
  student
});
assert.equal(referenceContext.previousRecord?.lessonId, priorLesson.lessonId);
assert.equal(referenceContext.previousMemoRecord, null);
assert.equal(referenceContext.referenceRecord?.lessonId, olderLesson.lessonId);

const acknowledgedContext = selectPreviousLessonMemoContext({
  ...dependencies,
  allRecords: [
    priorMemoRecord,
    olderMemoRecord,
    {
      lessonId: currentLesson.lessonId,
      prepMemoCheckedAt: "2026-07-28T09:00:00.000Z",
      prepMemoCheckedSourceDate: priorLesson.date,
      studentId: student.studentId
    }
  ],
  currentLesson,
  lessons: baseLessons,
  records: [{ ...priorMemoRecord, preparationMemo: "낡은 로컬 CONTROL 메모" }],
  student
});
assert.equal(acknowledgedContext.acknowledgedMemoCutoffDate, priorLesson.date);
assert.equal(acknowledgedContext.previousMemoRecord, null);
assert.equal(acknowledgedContext.referenceRecord, null);

const movedClassLesson = {
  classTemplateId: "class_b",
  date: "2026-07-27",
  lessonId: "lesson_moved_class",
  startTime: "20:00",
  studentIds: [student.studentId]
};
const fallbackContext = selectPreviousLessonMemoContext({
  ...dependencies,
  currentLesson,
  lessons: [currentLesson, movedClassLesson],
  records: [{
    lessonId: movedClassLesson.lessonId,
    preparationMemo: "반 이동 직전 메모",
    studentId: student.studentId
  }],
  student
});
assert.equal(fallbackContext.previousRecord?.lessonId, movedClassLesson.lessonId);
assert.equal(fallbackContext.previousMemoRecord?.preparationMemo, "반 이동 직전 메모");

const specialLesson = {
  date: "2026-07-28",
  lessonId: "special_current",
  lessonTrackId: "special_track_a",
  lessonType: "specialLecture",
  startTime: "10:00",
  studentIds: [student.studentId]
};
const specialIsolationContext = selectPreviousLessonMemoContext({
  ...dependencies,
  currentLesson: specialLesson,
  lessons: [specialLesson, movedClassLesson],
  records: [{
    lessonId: movedClassLesson.lessonId,
    preparationMemo: "정규 CONTROL 메모",
    studentId: student.studentId
  }],
  student
});
assert.equal(specialIsolationContext.previousRecord, null);
assert.equal(specialIsolationContext.previousMemoRecord, null);
assert.equal(specialIsolationContext.referenceRecord, null);

const canceledLesson = {
  ...priorLesson,
  date: "2026-07-27",
  lessonId: "lesson_canceled",
  status: "canceled"
};
const closureLesson = {
  ...priorLesson,
  date: "2026-07-26",
  lessonId: "lesson_closure",
  lessonType: "closure"
};
const filteredContext = selectPreviousLessonMemoContext({
  ...dependencies,
  currentLesson,
  lessons: [currentLesson, canceledLesson, closureLesson, olderLesson],
  records: [
    { lessonId: canceledLesson.lessonId, preparationMemo: "취소 CONTROL", studentId: student.studentId },
    { lessonId: closureLesson.lessonId, preparationMemo: "휴강 CONTROL", studentId: student.studentId },
    olderMemoRecord
  ],
  student
});
assert.equal(filteredContext.previousRecord?.lessonId, olderLesson.lessonId);
assert.equal(filteredContext.previousMemoRecord?.preparationMemo, "이전 참고 메모");

const monthBoundaryCurrentLesson = {
  ...currentLesson,
  date: "2026-08-01",
  lessonId: "lesson_august_current"
};
const blankImmediateLesson = {
  ...priorLesson,
  date: "2026-07-30",
  lessonId: "lesson_july_blank"
};
const populatedOlderLesson = {
  ...olderLesson,
  date: "2026-07-28",
  lessonId: "lesson_july_populated"
};
const unrelatedSpecialLesson = {
  date: "2026-07-31",
  lessonId: "lesson_july_special",
  lessonTrackId: "special_track_control",
  lessonType: "specialLecture",
  startTime: "13:00",
  studentIds: [student.studentId]
};
const monthBoundaryContext = selectPreviousLessonMemoContext({
  ...dependencies,
  currentLesson: monthBoundaryCurrentLesson,
  lessons: [monthBoundaryCurrentLesson, blankImmediateLesson, populatedOlderLesson, unrelatedSpecialLesson],
  records: [
    {
      lessonId: blankImmediateLesson.lessonId,
      lessonMaterial: "",
      lessonProgress: "",
      studentId: student.studentId
    },
    {
      lessonId: populatedOlderLesson.lessonId,
      lessonMaterial: "7월 최신 교재",
      lessonProgress: "7월 최신 진도",
      studentId: student.studentId
    },
    {
      lessonId: unrelatedSpecialLesson.lessonId,
      lessonMaterial: "특강 CONTROL 교재",
      lessonProgress: "특강 CONTROL 진도",
      studentId: student.studentId
    }
  ],
  student
});
assert.equal(monthBoundaryContext.previousRecord?.lessonId, blankImmediateLesson.lessonId);
assert.equal(monthBoundaryContext.previousEditableRecord?.lessonMaterial, "7월 최신 교재");
assert.equal(monthBoundaryContext.previousEditableRecord?.lessonProgress, "7월 최신 진도");
assert.notEqual(monthBoundaryContext.previousEditableRecord?.lessonMaterial, "특강 CONTROL 교재");

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
assert.match(appSource, /selectPreviousLessonMemoContext\(\{/);
assert.match(appSource, /previousMemoContext\.previousEditableRecord \?\? previousRecord/);
assert.doesNotMatch(appSource, /function getPreviousLessonMemoContext\(student\)/);

console.log("lesson journal previous memo selector TARGET/CONTROL fixtures passed");

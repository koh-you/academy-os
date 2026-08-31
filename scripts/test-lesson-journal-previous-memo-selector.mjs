import assert from "node:assert/strict";
import {
  findNextLessonForStudent,
  findPreviousLessonsForStudent as findActualPreviousLessonsForStudent,
  selectLinkedPreviousHomework
} from "../src/domains/lessons/lessonHomeworkContinuity.js";
import { selectPreviousLessonMemoContext } from "../src/domains/lessons/lessonJournalPreviousMemoSelector.js";
import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";

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

const dependencies = {
  findPreviousLessonsForStudent: findActualPreviousLessonsForStudent,
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
  attendanceStatus: "present",
  lessonId: priorLesson.lessonId,
  lessonStudentRecordId: "record_prior",
  preparationMemo: "직전 TARGET 메모",
  studentId: student.studentId
};
const olderMemoRecord = {
  attendanceStatus: "late",
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
    attendanceStatus: "present",
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
    attendanceStatus: "present",
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
    { attendanceStatus: "present", lessonId: canceledLesson.lessonId, preparationMemo: "취소 CONTROL", studentId: student.studentId },
    { attendanceStatus: "present", lessonId: closureLesson.lessonId, preparationMemo: "휴강 CONTROL", studentId: student.studentId },
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
      attendanceStatus: "present",
      lessonId: blankImmediateLesson.lessonId,
      lessonMaterial: "",
      lessonProgress: "",
      studentId: student.studentId
    },
    {
      attendanceStatus: "present",
      lessonId: populatedOlderLesson.lessonId,
      lessonMaterial: "7월 최신 교재",
      lessonProgress: "7월 최신 진도",
      studentId: student.studentId
    },
    {
      attendanceStatus: "present",
      lessonId: unrelatedSpecialLesson.lessonId,
      lessonMaterial: "특강 CONTROL 교재",
      lessonProgress: "특강 CONTROL 진도",
      studentId: student.studentId
    }
  ],
  student
});
assert.equal(monthBoundaryContext.previousRecord?.lessonId, blankImmediateLesson.lessonId);
assert.equal(monthBoundaryContext.previousEditableRecord?.lessonMaterial, "");
assert.equal(monthBoundaryContext.previousEditableRecord?.lessonProgress, "");
assert.notEqual(monthBoundaryContext.previousEditableRecord?.lessonMaterial, "특강 CONTROL 교재");

const splitScheduleStudent = {
  defaultClassTemplateId: "class_7_10",
  scheduleOverride: "월 16:00-19:00 / 수금 19:00-22:00",
  studentId: "student_split_schedule"
};
const splitCurrentLesson = {
  classTemplateId: "class_4_7",
  date: "2026-08-31",
  lessonId: "lesson_split_current",
  lessonType: "class",
  startTime: "16:00",
  endTime: "19:00",
  studentIds: [splitScheduleStudent.studentId]
};
const splitOlderMondayLesson = {
  ...splitCurrentLesson,
  date: "2026-08-24",
  lessonId: "lesson_split_monday_old"
};
const splitRecentWednesdayLesson = {
  ...splitCurrentLesson,
  classTemplateId: "class_7_10",
  date: "2026-08-26",
  lessonId: "lesson_split_wednesday_recent",
  startTime: "19:00",
  endTime: "22:00"
};
const splitImmediateMakeupLesson = {
  ...splitRecentWednesdayLesson,
  date: "2026-08-30",
  lessonId: "lesson_split_makeup_immediate",
  lessonType: "makeup",
  startTime: "18:00",
  endTime: "21:00"
};
const splitLessons = [
  splitCurrentLesson,
  splitOlderMondayLesson,
  splitRecentWednesdayLesson,
  splitImmediateMakeupLesson
];
const splitRecords = [
  {
    attendanceStatus: "present",
    lessonId: splitImmediateMakeupLesson.lessonId,
    lessonMaterial: "",
    lessonProgress: "",
    studentId: splitScheduleStudent.studentId
  },
  {
    attendanceStatus: "absent",
    lessonId: splitRecentWednesdayLesson.lessonId,
    lessonMaterial: "결석한 수요일 CONTROL 교재",
    lessonProgress: "결석한 수요일 CONTROL 진도",
    studentId: splitScheduleStudent.studentId
  },
  {
    attendanceStatus: "present",
    lessonId: splitOlderMondayLesson.lessonId,
    lessonMaterial: "오래된 월요일 CONTROL 교재",
    lessonProgress: "오래된 월요일 CONTROL 진도",
    studentId: splitScheduleStudent.studentId
  }
];
const splitPreviousLessons = findActualPreviousLessonsForStudent(
  splitLessons,
  splitCurrentLesson,
  splitScheduleStudent.studentId,
  { records: splitRecords }
);
assert.deepEqual(
  splitPreviousLessons.map((lesson) => lesson.lessonId),
  [
    splitImmediateMakeupLesson.lessonId,
    splitOlderMondayLesson.lessonId
  ]
);
assert.equal(
  findNextLessonForStudent(splitLessons, splitOlderMondayLesson, splitScheduleStudent)?.lessonId,
  splitRecentWednesdayLesson.lessonId
);

const splitContext = selectPreviousLessonMemoContext({
  ...dependencies,
  currentLesson: splitCurrentLesson,
  findPreviousLessonsForStudent: findActualPreviousLessonsForStudent,
  lessons: splitLessons,
  records: splitRecords,
  student: splitScheduleStudent
});
assert.equal(splitContext.previousRecord?.lessonId, splitImmediateMakeupLesson.lessonId);
assert.equal(splitContext.previousEditableRecord?.lessonMaterial, "");
assert.equal(splitContext.previousEditableRecord?.lessonProgress, "");
assert.notEqual(splitContext.previousEditableRecord?.lessonMaterial, "오래된 월요일 CONTROL 교재");
assert.equal(selectLinkedPreviousHomework({
  homeworks: [{
    homeworkId: "homework_old_monday_next",
    homeworkType: "next",
    lessonId: splitOlderMondayLesson.lessonId,
    studentId: splitScheduleStudent.studentId,
    title: "오래된 월요일 CONTROL 숙제"
  }],
  previousLessons: splitPreviousLessons,
  records: [{
    attendanceStatus: "present",
    lessonId: splitImmediateMakeupLesson.lessonId,
    studentId: splitScheduleStudent.studentId
  }],
  studentId: splitScheduleStudent.studentId
}), null);

// A teacher can opt out of the "closest attended lesson (even a makeup)"
// default and ask for the closest *regular* class instead — this is the
// same fixture as above, so it proves the toggle actually changes which
// lesson gets treated as "직전 수업" rather than only filtering candidates
// that were already excluded for other reasons.
const splitRegularOnlyPreviousLessons = findActualPreviousLessonsForStudent(
  splitLessons,
  splitCurrentLesson,
  splitScheduleStudent.studentId,
  { onlyRegularLessons: true, records: splitRecords }
);
assert.deepEqual(
  splitRegularOnlyPreviousLessons.map((lesson) => lesson.lessonId),
  [splitOlderMondayLesson.lessonId],
  "onlyRegularLessons must skip the makeup lesson entirely, not just prefer it less"
);
const splitRegularOnlyContext = selectPreviousLessonMemoContext({
  ...dependencies,
  currentLesson: splitCurrentLesson,
  findPreviousLessonsForStudent: findActualPreviousLessonsForStudent,
  lessons: splitLessons,
  onlyRegularLessons: true,
  records: splitRecords,
  student: splitScheduleStudent
});
assert.equal(splitRegularOnlyContext.previousRecord?.lessonId, splitOlderMondayLesson.lessonId);
assert.equal(splitRegularOnlyContext.previousEditableRecord?.lessonMaterial, "오래된 월요일 CONTROL 교재");
assert.equal(
  selectLinkedPreviousHomework({
    homeworks: [{
      homeworkId: "homework_old_monday_next",
      homeworkType: "next",
      lessonId: splitOlderMondayLesson.lessonId,
      studentId: splitScheduleStudent.studentId,
      title: "오래된 월요일 CONTROL 숙제"
    }],
    previousLessons: splitRegularOnlyPreviousLessons,
    records: splitRecords,
    studentId: splitScheduleStudent.studentId
  })?.title,
  "오래된 월요일 CONTROL 숙제",
  "onlyRegularLessons must let the previous-homework lookup reach the older regular class"
);

const alternateWeekdayStudent = {
  defaultClassTemplateId: "class_saturday_morning",
  studentId: "student_alternate_weekdays"
};
const alternateWeekdayLessons = [
  {
    classTemplateId: "class_saturday_morning",
    date: "2026-09-05",
    endTime: "19:00",
    lessonId: "lesson_alternate_saturday_current",
    lessonType: "class",
    startTime: "16:00",
    studentIds: [alternateWeekdayStudent.studentId]
  },
  {
    classTemplateId: "class_friday_evening",
    date: "2026-09-04",
    endTime: "22:00",
    lessonId: "lesson_alternate_friday_not_attended",
    lessonType: "class",
    startTime: "19:00",
    studentIds: [alternateWeekdayStudent.studentId]
  },
  {
    classTemplateId: "class_thursday_morning",
    date: "2026-09-03",
    endTime: "13:00",
    lessonId: "lesson_alternate_thursday_previous",
    lessonType: "class",
    startTime: "10:00",
    studentIds: [alternateWeekdayStudent.studentId]
  },
  {
    classTemplateId: "class_tuesday_afternoon",
    date: "2026-09-01",
    endTime: "16:00",
    lessonId: "lesson_alternate_tuesday_older",
    lessonType: "class",
    startTime: "13:00",
    studentIds: [alternateWeekdayStudent.studentId]
  }
];
assert.deepEqual(
  findActualPreviousLessonsForStudent(
    alternateWeekdayLessons,
    alternateWeekdayLessons[0],
    alternateWeekdayStudent.studentId,
    {
      records: [
        {
          attendanceStatus: "pending",
          lessonId: "lesson_alternate_friday_not_attended",
          studentId: alternateWeekdayStudent.studentId
        },
        {
          attendanceStatus: "present",
          lessonId: "lesson_alternate_thursday_previous",
          studentId: alternateWeekdayStudent.studentId
        },
        {
          attendanceStatus: "late",
          lessonId: "lesson_alternate_tuesday_older",
          studentId: alternateWeekdayStudent.studentId
        }
      ]
    }
  ).map((lesson) => lesson.lessonId),
  ["lesson_alternate_thursday_previous", "lesson_alternate_tuesday_older"]
);
assert.equal(
  findNextLessonForStudent(
    alternateWeekdayLessons,
    alternateWeekdayLessons[3],
    alternateWeekdayStudent
  )?.lessonId,
  "lesson_alternate_thursday_previous"
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
assert.match(appSource, /selectPreviousLessonMemoContext\(\{/);
assert.match(appSource, /previousMemoContext\.previousEditableRecord \?\? previousRecord/);
assert.doesNotMatch(appSource, /function getPreviousLessonMemoContext\(student\)/);

console.log("lesson journal previous memo selector TARGET/CONTROL fixtures passed");

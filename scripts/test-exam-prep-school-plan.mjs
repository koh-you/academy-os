import assert from "node:assert/strict";
import {
  addExamPrepSchoolExclusion,
  createExamPrepSchoolRosterSavePlan,
  getExamPrepExcludedSchools,
  isExamPrepSchoolExcluded,
  normalizeExamPrepSchoolExclusions,
  rebaseExamPrepSchoolRosterChange,
  removeExamPrepSchoolExclusion
} from "../src/domains/lessons/examPrepSchoolPlan.js";
import {
  addGeneratedLessonExamPrepSchoolExclusion,
  normalizeGeneratedLessonControls,
  removeGeneratedLessonExamPrepSchoolExclusion
} from "../src/domains/lessons/generatedLessonControlsModel.js";
import { createExamPrepLessonCandidateBuilder } from "../src/domains/lessons/examPrepLessonCandidateBuilder.js";
import { createExamPeriodSundayDateSelector } from "../src/domains/lessons/examPeriodSundayDateSelector.js";
import { createExamPrepSchoolPlanRows } from "../src/domains/lessons/examPrepLessonPresentation.js";
import { createExamPrepScheduleSavePlan } from "../src/domains/lessons/examPrepSchedulePlan.js";

const generatedKey = "generated:exam_prep:2026-10-04";

// 학교명은 시험정보 행에서 고칠 수 있어 학생 쪽 표기와 어긋난다. 비교는 정규화해서 한다.
assert.equal(isExamPrepSchoolExcluded(
  addExamPrepSchoolExclusion([], generatedKey, "창동고등학교"),
  generatedKey,
  "창동고"
), true);
assert.equal(isExamPrepSchoolExcluded(
  addExamPrepSchoolExclusion([], generatedKey, "창동고"),
  "generated:exam_prep:2026-10-11",
  "창동고"
), false, "제외는 그 날짜에만 적용된다");
assert.equal(isExamPrepSchoolExcluded([], generatedKey, "창동고"), false);

// 화면에 보여줄 원래 표기는 남는다 — 제외하면 명단에서 사라져 다시 알 수 없다.
const withTwo = addExamPrepSchoolExclusion(
  addExamPrepSchoolExclusion([], generatedKey, "노원중학교"),
  generatedKey,
  "창동고"
);
assert.deepEqual(
  getExamPrepExcludedSchools(withTwo, generatedKey).map((entry) => entry.schoolName),
  ["노원중학교", "창동고"]
);
assert.equal(
  isExamPrepSchoolExcluded(removeExamPrepSchoolExclusion(withTwo, generatedKey, "노원중"), generatedKey, "노원중학교"),
  false,
  "다시 포함도 정규화된 이름으로 지워진다"
);
// 같은 학교를 두 번 담아도 하나로 남고, 깨진 항목은 버린다.
assert.equal(normalizeExamPrepSchoolExclusions([
  { generatedKey, schoolName: "창동고" },
  { generatedKey, schoolName: "창동고등학교" },
  { generatedKey: "", schoolName: "창동고" },
  { generatedKey, schoolName: "" },
  "문자열은 무시"
]).length, 1);

// 생성 제어에 섞여도 다른 키를 건드리지 않는다.
const controls = normalizeGeneratedLessonControls({
  manualOverrideKeys: ["generated:pre_exam:a"],
  suppressedKeys: ["generated:exam_prep:2026-09-27"]
});
assert.deepEqual(controls.examPrepSchoolExclusions, []);
const controlsWithExclusion = addGeneratedLessonExamPrepSchoolExclusion(controls, generatedKey, "노원중");
assert.deepEqual(controlsWithExclusion.suppressedKeys, ["generated:exam_prep:2026-09-27"]);
assert.deepEqual(controlsWithExclusion.manualOverrideKeys, ["generated:pre_exam:a"]);
assert.equal(controlsWithExclusion.examPrepSchoolExclusions.length, 1);
assert.deepEqual(
  removeGeneratedLessonExamPrepSchoolExclusion(controlsWithExclusion, generatedKey, "노원중").examPrepSchoolExclusions,
  []
);

// --- 생성 후보: 한 날짜에서 학교 하나만 빠진다 ---
function toKoreaDateString(date) {
  return new Date(date.getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
}
const buildCandidates = createExamPrepLessonCandidateBuilder({
  examCycleLabel: () => "2학기 중간",
  getExamPrepGeneratedKeyForDate: (date) => `generated:exam_prep:${date}`,
  getExamPrepSchoolGradeKey: (row) => `${row.schoolName}_${row.grade}`,
  getStandardLessonColor: () => "#000",
  getStudentSchoolGradeKey: (student) => `${student.schoolName}_${student.grade}`,
  getSundayDatesForExamPeriod: createExamPeriodSundayDateSelector({ toKoreaDateString }),
  isActiveStudent: () => true,
  parseDateRangeText: (value) => {
    const [date, endDate] = String(value || "").split("~");
    if (!date) return null;
    return { date: date.trim(), endDate: (endDate || date).trim(), startDate: date.trim() };
  }
});
// 시험기간 시작이 2026-10-07(수)이므로 마지막 대비 일요일은 10-04 이다(PR #433 기준).
const rows = [
  { examPrepId: "r1", schoolName: "창동고", grade: "고2", examCycle: "2026-2-mid", examPeriod: "2026-10-07~2026-10-13" },
  { examPrepId: "r2", schoolName: "노원중", grade: "중3", examCycle: "2026-2-mid", examPeriod: "2026-10-07~2026-10-13" }
];
const studentsForCandidates = [
  { studentId: "s1", schoolName: "창동고", grade: "고2" },
  { studentId: "s2", schoolName: "노원중", grade: "중3" }
];
function candidateFor(exclusions) {
  return buildCandidates(rows, studentsForCandidates, exclusions)
    .find((item) => item.lesson.date === "2026-10-04");
}
const allSchools = candidateFor([]);
assert.deepEqual(allSchools.lesson.studentIds, ["s1", "s2"]);
assert.equal(allSchools.lesson.sourceLabel, "창동고 2학기 중간 · 노원중 2학기 중간");

const middleSchoolExcluded = candidateFor(addExamPrepSchoolExclusion([], generatedKey, "노원중"));
assert.deepEqual(
  middleSchoolExcluded.lesson.studentIds,
  ["s1"],
  "제외한 학교 학생만 명단에서 빠진다"
);
assert.equal(
  middleSchoolExcluded.lesson.sourceLabel,
  "창동고 2학기 중간",
  "표시 라벨도 같은 원천에서 갈린다"
);
assert.equal(
  buildCandidates(rows, studentsForCandidates, addExamPrepSchoolExclusion([], generatedKey, "노원중"))
    .some((item) => item.lesson.date === "2026-10-11"),
  false,
  "다른 날짜에는 없던 수업이 생기지 않는다"
);
// 다른 회차(10-04 가 아닌 날)는 그대로다.
assert.deepEqual(
  buildCandidates(rows, studentsForCandidates, addExamPrepSchoolExclusion([], generatedKey, "노원중"))
    .find((item) => item.lesson.date === "2026-09-27").lesson.studentIds,
  ["s1", "s2"]
);
// 그 날짜의 모든 학교를 빼면 수업 자체가 사라진다.
const everySchoolExcluded = addExamPrepSchoolExclusion(
  addExamPrepSchoolExclusion([], generatedKey, "노원중"),
  generatedKey,
  "창동고"
);
assert.equal(candidateFor(everySchoolExcluded), undefined);

// --- 학교별 행: 시간이 섞여 있으면 한 시간으로 보여주지 않는다 ---
const studentRows = [
  { studentId: "s1", schoolName: "창동고", startTime: "13:00", endTime: "18:00" },
  { studentId: "s2", schoolName: "창동고", startTime: "13:00", endTime: "18:00" },
  { studentId: "s3", schoolName: "노원중", startTime: "14:00", endTime: "17:00" },
  { studentId: "s4", schoolName: "노원중", startTime: "15:00", endTime: "17:00" }
];
const planRows = createExamPrepSchoolPlanRows(studentRows);
assert.deepEqual(planRows.map((row) => row.schoolName), ["노원중", "창동고"]);
assert.deepEqual(
  planRows.find((row) => row.schoolName === "창동고"),
  { endTime: "18:00", isMixedTime: false, schoolName: "창동고", startTime: "13:00", studentIds: ["s1", "s2"] }
);
const mixedRow = planRows.find((row) => row.schoolName === "노원중");
assert.equal(mixedRow.isMixedTime, true);
assert.equal(mixedRow.startTime, "");
assert.equal(mixedRow.endTime, "");

// --- 학교별 시간: 이 날짜만 바꾼다 ---
const sourceLesson = {
  lessonId: "lesson_exam_prep_2026-10-04",
  lessonType: "examPrep",
  date: "2026-10-04",
  startTime: "13:00",
  endTime: "18:00",
  studentIds: ["s1", "s3"]
};
const laterLesson = { ...sourceLesson, lessonId: "lesson_exam_prep_2026-10-11", date: "2026-10-11" };
const scheduleStudents = [
  { studentId: "s1", schoolName: "창동고" },
  { studentId: "s3", schoolName: "노원중" }
];
const datePlan = createExamPrepScheduleSavePlan({
  endTime: "17:00",
  lessons: [sourceLesson, laterLesson],
  mode: "school",
  persistedLessons: [sourceLesson, laterLesson],
  scope: "date",
  selectedKeys: ["노원중"],
  sourceLesson,
  startTime: "14:00",
  students: scheduleStudents
});
assert.deepEqual(datePlan.changes.map((change) => change.after.lessonId), ["lesson_exam_prep_2026-10-04"]);
assert.deepEqual(datePlan.changes[0].after.specialLectureStudentSchedules, [
  { endTime: "17:00", overrideReason: "시험대비 일정 수정", scheduleType: "adjusted", startTime: "14:00", studentId: "s3" }
]);
// 기본 scope 는 그대로 이후 회차까지 민다(기존 일정 수정 모달 계약).
assert.deepEqual(
  createExamPrepScheduleSavePlan({
    endTime: "17:00",
    lessons: [sourceLesson, laterLesson],
    mode: "school",
    persistedLessons: [sourceLesson, laterLesson],
    selectedKeys: ["노원중"],
    sourceLesson,
    startTime: "14:00",
    students: scheduleStudents
  }).changes.map((change) => change.after.lessonId),
  ["lesson_exam_prep_2026-10-04", "lesson_exam_prep_2026-10-11"]
);

// --- 제외 저장 계획: 저장된 수업의 명단과 개별 시간을 같이 정리한다 ---
const persistedLesson = {
  ...sourceLesson,
  specialLectureStudentSchedules: [
    { studentId: "s3", startTime: "14:00", endTime: "17:00" }
  ]
};
const rosterPlan = createExamPrepSchoolRosterSavePlan({
  persistedLessons: [persistedLesson],
  schoolName: "노원중학교",
  sourceLesson: persistedLesson,
  students: scheduleStudents
});
assert.deepEqual(rosterPlan.removedStudentIds, ["s3"]);
assert.deepEqual(rosterPlan.changes[0].after.studentIds, ["s1"]);
assert.deepEqual(
  rosterPlan.changes[0].after.specialLectureStudentSchedules,
  [],
  "명단에서 빠진 학생의 개별 시간도 같이 지운다 — 서버 검증이 명단 밖 시간을 거부한다"
);
assert.equal(rosterPlan.changes[0].before, persistedLesson);

// 저장되지 않은 자동 생성 수업은 보낼 변경이 없다(생성 제어만 바꾸면 화면이 다시 만든다).
const virtualPlan = createExamPrepSchoolRosterSavePlan({
  persistedLessons: [],
  schoolName: "노원중",
  sourceLesson,
  students: scheduleStudents
});
assert.deepEqual(virtualPlan.changes, []);
assert.deepEqual(virtualPlan.removedStudentIds, ["s3"]);

// 충돌이면 서버 최신본 위에 같은 의도를 다시 얹는다.
const serverLesson = { ...persistedLesson, studentIds: ["s1", "s3", "s9"], updatedAt: "2026-10-01T00:00:00Z" };
const rebased = rebaseExamPrepSchoolRosterChange(rosterPlan.changes[0], serverLesson, rosterPlan);
assert.deepEqual(rebased.after.studentIds, ["s1", "s9"], "최신 명단에 새로 들어온 학생은 지키고 그 학교만 뺀다");
assert.equal(rebased.before, serverLesson);
// 최신본에 그 학교 학생이 이미 없으면 할 일이 없다.
assert.equal(
  rebaseExamPrepSchoolRosterChange(rosterPlan.changes[0], { ...serverLesson, studentIds: ["s1"], specialLectureStudentSchedules: [] }, rosterPlan),
  null
);

console.log("exam prep per-school participation and time TARGET/CONTROL fixtures passed");

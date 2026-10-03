import assert from "node:assert/strict";
import {
  addExamPrepSchoolExclusion,
  createExamPrepSchoolPlanSavePlan,
  getExamPrepExcludedSchools,
  isExamPrepSchoolExcluded,
  normalizeExamPrepSchoolExclusions,
  rebaseExamPrepSchoolPlanChange,
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
import {
  createExamPrepSchoolPlanDraft,
  getExamPrepSchoolPlanChanges,
  getExamPrepSchoolPlanValidationError,
  hasExamPrepSchoolPlanChanges,
  setExamPrepSchoolPlanDraftField,
  setExamPrepSchoolPlanDraftStudentTime
} from "../src/domains/lessons/examPrepSchoolPlanDraft.js";

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

// --- 같은 학교의 두 학년이 같은 일요일에 걸리면 둘 다 명단에 든다 ---
// 2026-10-01 · 중복 제거가 `학교명 + 고사` 기준이던 동안은 먼저 온 학년의 block 하나만
// 남아서, 나머지 학년 학생이 그 일요일 시험대비에서 통째로 빠졌다.
const twoGradeRows = [
  { examPrepId: "m2", schoolName: "노원중", grade: "중2", examCycle: "2026-2-mid", examPeriod: "2026-10-07~2026-10-13" },
  { examPrepId: "m3", schoolName: "노원중", grade: "중3", examCycle: "2026-2-mid", examPeriod: "2026-10-07~2026-10-13" },
  { examPrepId: "h2", schoolName: "창동고", grade: "고2", examCycle: "2026-2-mid", examPeriod: "2026-10-07~2026-10-13" }
];
const twoGradeStudents = [
  { studentId: "m2a", schoolName: "노원중", grade: "중2" },
  { studentId: "m3a", schoolName: "노원중", grade: "중3" },
  { studentId: "h2a", schoolName: "창동고", grade: "고2" }
];
const twoGradeCandidate = buildCandidates(twoGradeRows, twoGradeStudents, [])
  .find((item) => item.lesson.date === "2026-10-04");
assert.deepEqual(
  [...twoGradeCandidate.lesson.studentIds].sort(),
  ["h2a", "m2a", "m3a"],
  "같은 학교의 두 학년 학생이 모두 명단에 든다"
);
// 표시 문구는 학교·고사 단위로 묶여 학년 수만큼 늘어나지 않는다.
assert.equal(
  twoGradeCandidate.lesson.sourceLabel,
  "노원중 2학기 중간 · 창동고 2학기 중간"
);
assert.equal(
  twoGradeCandidate.reason,
  "노원중, 창동고 시험기간 전 시험대비"
);
// 학교 단위 제외는 그 학교의 모든 학년을 함께 뺀다.
const twoGradeExcluded = buildCandidates(
  twoGradeRows,
  twoGradeStudents,
  addExamPrepSchoolExclusion([], generatedKey, "노원중학교")
).find((item) => item.lesson.date === "2026-10-04");
assert.deepEqual(twoGradeExcluded.lesson.studentIds, ["h2a"]);
assert.equal(twoGradeExcluded.lesson.sourceLabel, "창동고 2학기 중간");
// 같은 학교·학년 행이 두 벌 있어도(중복 등록) 명단과 문구는 한 번만 센다.
const duplicatedRowCandidate = buildCandidates(
  [...twoGradeRows, { ...twoGradeRows[1], examPrepId: "m3-dup" }],
  twoGradeStudents,
  []
).find((item) => item.lesson.date === "2026-10-04");
assert.deepEqual([...duplicatedRowCandidate.lesson.studentIds].sort(), ["h2a", "m2a", "m3a"]);
assert.equal(duplicatedRowCandidate.lesson.sourceLabel, "노원중 2학기 중간 · 창동고 2학기 중간");
// 학년이 비어 학교·학년 키를 만들 수 없는 행은 학교명으로 한 벌만 센다.
const gradelessCandidate = buildCandidates(
  [
    { examPrepId: "g1", schoolName: "미정중", grade: "", examCycle: "2026-2-mid", examPeriod: "2026-10-07~2026-10-13" },
    { examPrepId: "g2", schoolName: "미정중", grade: "", examCycle: "2026-2-mid", examPeriod: "2026-10-07~2026-10-13" }
  ],
  [],
  []
).find((item) => item.lesson.date === "2026-10-04");
assert.equal(gradelessCandidate.lesson.sourceLabel, "미정중 2학기 중간");
assert.deepEqual(gradelessCandidate.lesson.studentIds, []);

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

// --- 초안: 바꾼 것만 뽑는다 ---
// 2026-10-01 · 행마다 버튼을 달지 않고 `수정 -> 저장` 하나로 묶었다. 그래서 "무엇이 바뀌었나"
// 를 초안과 원본의 차이에서 뽑는다.
const draftSchoolRows = [
  { schoolName: "창동고", studentIds: ["s1", "s2"], startTime: "13:00", endTime: "18:00", isMixedTime: false },
  { schoolName: "노원중", studentIds: ["s3", "s4"], startTime: "", endTime: "", isMixedTime: true }
];
const draftStudentRows = [
  { studentId: "s1", name: "가", schoolName: "창동고", startTime: "13:00", endTime: "18:00" },
  { studentId: "s2", name: "나", schoolName: "창동고", startTime: "13:00", endTime: "18:00" },
  { studentId: "s3", name: "다", schoolName: "노원중", startTime: "14:00", endTime: "17:00" },
  { studentId: "s4", name: "라", schoolName: "노원중", startTime: "15:00", endTime: "17:00" }
];
const baseDraft = createExamPrepSchoolPlanDraft({
  excludedSchools: [{ generatedKey, schoolKey: "상계중", schoolName: "상계중" }],
  schoolRows: draftSchoolRows,
  studentRows: draftStudentRows
});
// 제외한 학교도 같은 목록에 남는다 — 따로 칩으로 빼면 어디서 되돌리는지 찾기 어렵다.
assert.deepEqual(
  baseDraft.schools.map((school) => [school.schoolName, school.isIncluded]),
  [["노원중", true], ["상계중", false], ["창동고", true]]
);
assert.equal(hasExamPrepSchoolPlanChanges(getExamPrepSchoolPlanChanges(baseDraft, baseDraft)), false);

// 학교 시간 하나만 바꾸면 그 학교만 나온다.
const timeChangedDraft = setExamPrepSchoolPlanDraftField(
  setExamPrepSchoolPlanDraftField(baseDraft, "창동고", "startTime", "14:00"),
  "창동고",
  "endTime",
  "17:00"
);
const timeChanges = getExamPrepSchoolPlanChanges(timeChangedDraft, baseDraft);
assert.deepEqual(timeChanges.schoolTimes, [
  { endTime: "17:00", schoolKey: "창동고", schoolName: "창동고", startTime: "14:00", studentIds: ["s1", "s2"] }
]);
assert.deepEqual(timeChanges.studentTimes, []);
assert.deepEqual(timeChanges.toExclude, []);

// 체크를 풀면 제외, 제외된 학교를 체크하면 다시 포함.
const toggledDraft = setExamPrepSchoolPlanDraftField(
  setExamPrepSchoolPlanDraftField(baseDraft, "노원중", "isIncluded", false),
  "상계중",
  "isIncluded",
  true
);
const toggledChanges = getExamPrepSchoolPlanChanges(toggledDraft, baseDraft);
assert.deepEqual(toggledChanges.toExclude, [{ schoolKey: "노원중", schoolName: "노원중" }]);
assert.deepEqual(toggledChanges.toInclude, [{ schoolKey: "상계중", schoolName: "상계중" }]);

// 학생별 시간 — 학교 시간을 안 건드린 학교에서만 센다.
const studentChangedDraft = setExamPrepSchoolPlanDraftStudentTime(
  setExamPrepSchoolPlanDraftStudentTime(baseDraft, "s3", "startTime", "15:00"),
  "s3",
  "endTime",
  "18:00"
);
assert.deepEqual(getExamPrepSchoolPlanChanges(studentChangedDraft, baseDraft).studentTimes, [
  { endTime: "18:00", startTime: "15:00", studentId: "s3" }
]);
// 같은 학교에서 학교 시간과 학생 시간을 함께 고치면 학교 시간이 이긴다 — 한 저장 안에서 두
// 의도가 겹치면 어느 쪽이 반영됐는지 화면만 보고 알 수 없다.
const bothDraft = setExamPrepSchoolPlanDraftField(
  setExamPrepSchoolPlanDraftField(studentChangedDraft, "노원중", "startTime", "13:00"),
  "노원중",
  "endTime",
  "16:00"
);
const bothChanges = getExamPrepSchoolPlanChanges(bothDraft, baseDraft);
assert.deepEqual(bothChanges.studentTimes, []);
assert.equal(bothChanges.schoolTimes.length, 1);

// 저장 전에 막는 입력 오류.
assert.equal(
  getExamPrepSchoolPlanValidationError(bothDraft, {
    schoolTimes: [{ endTime: "12:00", startTime: "13:00" }],
    studentTimes: []
  }),
  "시작 시간보다 늦은 종료 시간을 입력해 주세요."
);
const partialDraft = setExamPrepSchoolPlanDraftField(baseDraft, "창동고", "endTime", "");
assert.equal(
  getExamPrepSchoolPlanValidationError(partialDraft, getExamPrepSchoolPlanChanges(partialDraft, baseDraft)),
  "창동고의 시작·종료 시간을 모두 입력해 주세요."
);
const noneDraft = setExamPrepSchoolPlanDraftField(
  setExamPrepSchoolPlanDraftField(baseDraft, "창동고", "isIncluded", false),
  "노원중",
  "isIncluded",
  false
);
assert.equal(
  getExamPrepSchoolPlanValidationError(noneDraft, getExamPrepSchoolPlanChanges(noneDraft, baseDraft)),
  "모든 학교를 빼려면 이 수업 자체를 삭제하세요. 한 학교 이상 남겨야 합니다."
);

// --- 일괄 저장 계획: 제외와 시간을 한 요청으로 보낸다 ---
const persistedLesson = {
  ...sourceLesson,
  studentIds: ["s1", "s3"],
  specialLectureStudentSchedules: [
    { studentId: "s3", startTime: "14:00", endTime: "17:00" }
  ]
};
const batchPlan = createExamPrepSchoolPlanSavePlan({
  persistedLessons: [persistedLesson],
  schoolTimes: [{ endTime: "17:00", schoolKey: "창동고", schoolName: "창동고", startTime: "14:00", studentIds: ["s1"] }],
  sourceLesson: persistedLesson,
  students: scheduleStudents,
  studentTimes: [],
  toExclude: [{ schoolKey: "노원중", schoolName: "노원중학교" }]
});
assert.equal(batchPlan.changes.length, 1, "학교마다 따로 보내지 않는다 — 같은 수업에 CAS 쓰기가 겹친다");
assert.deepEqual(batchPlan.removedStudentIds, ["s3"]);
assert.deepEqual(batchPlan.changes[0].after.studentIds, ["s1"]);
assert.deepEqual(
  batchPlan.changes[0].after.specialLectureStudentSchedules,
  [{ endTime: "17:00", overrideReason: "시험대비 학교별 시간", scheduleType: "adjusted", startTime: "14:00", studentId: "s1" }],
  "명단에서 빠진 학생의 개별 시간은 사라지고, 남은 학생의 새 시간만 들어간다"
);
assert.equal(batchPlan.changes[0].before, persistedLesson);

// 저장되지 않은 자동 생성 수업은 보낼 변경이 없다(생성 제어만 바꾸면 화면이 다시 만든다).
assert.deepEqual(
  createExamPrepSchoolPlanSavePlan({
    persistedLessons: [],
    sourceLesson,
    students: scheduleStudents,
    toExclude: [{ schoolKey: "노원중", schoolName: "노원중" }]
  }).changes,
  []
);
// 바꿀 것이 없으면 요청도 없다.
assert.deepEqual(
  createExamPrepSchoolPlanSavePlan({
    persistedLessons: [persistedLesson],
    sourceLesson: persistedLesson,
    students: scheduleStudents
  }).changes,
  []
);

// 충돌이면 서버 최신본 위에 같은 의도를 다시 얹는다.
const serverLesson = { ...persistedLesson, studentIds: ["s1", "s3", "s9"], updatedAt: "2026-10-01T00:00:00Z" };
const rebased = rebaseExamPrepSchoolPlanChange(batchPlan.changes[0], serverLesson, batchPlan);
assert.deepEqual(rebased.after.studentIds, ["s1", "s9"], "최신 명단에 새로 들어온 학생은 지키고 그 학교만 뺀다");
assert.equal(rebased.before, serverLesson);
// 최신본에 이미 반영돼 할 일이 없으면 null.
assert.equal(
  rebaseExamPrepSchoolPlanChange(
    batchPlan.changes[0],
    { ...persistedLesson, studentIds: ["s1"], specialLectureStudentSchedules: batchPlan.changes[0].after.specialLectureStudentSchedules },
    batchPlan
  ),
  null
);

console.log("exam prep per-school participation and time TARGET/CONTROL fixtures passed");

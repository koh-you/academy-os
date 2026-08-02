import assert from "node:assert/strict";
import {
  applyMonthlySettlementJournalMode,
  buildMonthlyScheduleEvents,
  buildMonthlySettlementSummary,
  buildStudentMonthEvidence,
  buildStudentSettlementRow,
  getDefaultFixedAmountForStudent,
  getDefaultNewStudentSessionAmount,
  getFixedAmountAfterScheduleChange,
  getMonthRange,
  getMonthlySettlementMonthSaveSnapshot,
  getMonthlySettlementRateLabel,
  getMonthlySettlementStudents,
  getSettlementAttendanceTone,
  getWeeklyScheduleHours,
  isClosureReplacementSettlementLesson,
  monthlySettlementFactor,
  normalizeMonthlySettlementStudentSetting
} from "../src/domains/settlements/monthlySettlement.js";
import {
  buildMonthlySettlementReportModel,
  createMonthlySettlementReportHtml
} from "../src/domains/settlements/monthlySettlementReport.js";
import {
  buildSpecialLectureAttendanceSummary,
  buildStudentMonthlyAttendanceSummary
} from "../src/domains/settlements/settlementAttendance.js";
import {
  buildSpecialLectureSettlementRows,
  buildSpecialLectureSettlementSummary,
  createSpecialLectureSettlementStateWithDraft,
  getSpecialLectureSettlementSaveSnapshot,
  normalizeSpecialLectureSettlementState
} from "../src/domains/settlements/specialLectureSettlement.js";

const monthKey = "2026-07";
const student = {
  defaultClassTemplateId: "class_mwf",
  grade: "고1",
  name: "정산테스트",
  studentId: "student_settlement_test"
};
const classTemplates = [{
  classTemplateId: "class_mwf",
  days: ["mon", "wed", "fri"],
  endTime: "22:00",
  name: "월수금반",
  startTime: "19:00",
  timeLabel: "19:00-22:00"
}];
const scheduleText = "월수금 19:00-22:00";
const scheduledEvents = buildMonthlyScheduleEvents(monthKey, scheduleText);
const lessons = [
  {
    className: "월수금반",
    date: "2026-07-01",
    endTime: "22:00",
    lessonId: "lesson_regular_july_01",
    lessonType: "class",
    startTime: "19:00",
    status: "completed",
    studentIds: [student.studentId]
  },
  {
    className: "일요 시험대비",
    date: "2026-07-05",
    endTime: "15:00",
    lessonId: "lesson_exam_sunday",
    lessonType: "examPrep",
    startTime: "12:00",
    status: "completed",
    studentIds: [student.studentId]
  },
  {
    className: "월수금반",
    date: "2026-07-15",
    endTime: "22:00",
    lessonId: "lesson_regular_july_15",
    lessonType: "class",
    startTime: "19:00",
    status: "completed",
    studentIds: [student.studentId]
  },
  {
    className: "월수금반",
    date: "2026-07-29",
    endTime: "22:00",
    lessonId: "lesson_regular_july_29",
    lessonType: "class",
    startTime: "19:00",
    status: "scheduled",
    studentIds: [student.studentId]
  },
  {
    className: "결석 보충",
    date: "2026-07-07",
    endTime: "18:00",
    lessonId: "lesson_makeup",
    lessonType: "makeup",
    sourceMakeupTaskId: "makeup_1",
    startTime: "16:00",
    status: "completed",
    studentIds: [student.studentId]
  },
  {
    className: "월수금반",
    date: "2026-07-22",
    endTime: "22:00",
    lessonId: "lesson_closure",
    lessonTopic: "휴강",
    lessonType: "closure",
    startTime: "19:00",
    status: "scheduled",
    studentIds: [student.studentId]
  }
];
const records = [
  {
    attendanceStatus: "pending",
    lessonId: "lesson_exam_sunday",
    studentId: student.studentId
  },
  {
    attendanceStatus: "present",
    lessonId: "lesson_makeup",
    studentId: student.studentId
  }
];

assert.deepEqual(getMonthRange("2026-02"), {
  endDate: "2026-02-28",
  startDate: "2026-02-01"
});
assert.deepEqual(getMonthRange("2028-02"), {
  endDate: "2028-02-29",
  startDate: "2028-02-01"
});
assert.ok(scheduledEvents.length >= 12, "월별 일정은 실제 달력의 1일~말일 요일 수로 생성해야 합니다.");
assert.equal(
  scheduledEvents.every((event) => event.date >= "2026-07-01" && event.date <= "2026-07-31"),
  true
);
assert.equal(getWeeklyScheduleHours("월수 19:00-22:00"), 6);
assert.equal(getWeeklyScheduleHours("월수금 19:00-22:00"), 9);
assert.equal(getSettlementAttendanceTone("present"), "present");
assert.equal(getSettlementAttendanceTone("absent"), "absent");
assert.equal(getSettlementAttendanceTone("late"), "late");
assert.equal(getSettlementAttendanceTone("pending"), "pending");
assert.equal(
  getDefaultFixedAmountForStudent({ grade: "중3" }, "월수 19:00-22:00"),
  308000
);
assert.equal(
  getDefaultFixedAmountForStudent({ grade: "중3" }, "월수금 19:00-22:00"),
  420000
);
assert.equal(
  getDefaultFixedAmountForStudent({ grade: "고1" }, "화목 16:00-19:00"),
  341000
);
assert.equal(
  getDefaultFixedAmountForStudent({ grade: "고1" }, "월수금 19:00-22:00"),
  450000
);
assert.equal(
  getMonthlySettlementRateLabel({ grade: "고1" }, "화목 16:00-19:00"),
  "고등 주 6시간 기준"
);
assert.equal(
  normalizeMonthlySettlementStudentSetting({}, {
    classTemplates: [],
    monthKey,
    student: { grade: "중3" }
  }).fixedAmount,
  420000,
  "저장 전 중등 학생은 기본 고정급 420,000원을 적용해야 합니다."
);
assert.equal(
  normalizeMonthlySettlementStudentSetting({ fixedAmount: 399000 }, {
    classTemplates: [],
    monthKey,
    student: { grade: "중3" }
  }).fixedAmount,
  399000,
  "이미 저장된 학생별 금액은 새 기본 단가로 덮어쓰지 않아야 합니다."
);
assert.equal(
  normalizeMonthlySettlementStudentSetting({ fixedAmount: "" }, {
    classTemplates: [],
    monthKey,
    student: { grade: "중3" }
  }).fixedAmount,
  420000,
  "과거 단가 미정으로 저장된 빈 값은 새 중등 기본 단가를 받아야 합니다."
);
assert.equal(
  getFixedAmountAfterScheduleChange({
    currentFixedAmount: 420000,
    nextScheduleText: "월수 19:00-22:00",
    previousScheduleText: "월수금 19:00-22:00",
    student: { grade: "중3" }
  }),
  308000,
  "기본 단가를 쓰는 행은 주 6시간 스케줄로 변경하면 새 기본 단가를 따라야 합니다."
);
assert.equal(
  getFixedAmountAfterScheduleChange({
    currentFixedAmount: 399000,
    nextScheduleText: "월수 19:00-22:00",
    previousScheduleText: "월수금 19:00-22:00",
    student: { grade: "중3" }
  }),
  399000,
  "학생별로 수정한 금액은 스케줄을 바꿔도 보존해야 합니다."
);

const journalOnlyStudent = {
  grade: "중2",
  name: "특강일지학생",
  status: "paused",
  studentId: "student_special_journal"
};
const closureOnlyStudent = {
  grade: "고1",
  name: "휴강일지만있는학생",
  status: "active",
  studentId: "student_closure_only"
};
const rosterStudents = getMonthlySettlementStudents({
  includedStudentIds: ["student_saved_without_journal"],
  lessons: [
    ...lessons,
    {
      date: "2026-07-20",
      lessonId: "lesson_special_journal",
      lessonType: "specialLecture",
      status: "scheduled",
      studentIds: [journalOnlyStudent.studentId]
    },
    {
      date: "2026-07-21",
      lessonId: "lesson_closure_only",
      lessonType: "closure",
      status: "scheduled",
      studentIds: [closureOnlyStudent.studentId]
    }
  ],
  monthKey,
  students: [
    student,
    journalOnlyStudent,
    closureOnlyStudent,
    {
      name: "수업일지없는재원생",
      status: "active",
      studentId: "student_active_without_journal"
    },
    {
      name: "수업일지없는퇴원생",
      status: "paused",
      studentId: "student_withdrawn_without_journal",
      withdrawnAt: "2026-07-09"
    },
    {
      name: "과거저장만있는학생",
      status: "paused",
      studentId: "student_saved_without_journal"
    }
  ]
});
assert.deepEqual(
  rosterStudents.map((item) => item.studentId).sort(),
  [student.studentId],
  "정규 정산 대상은 선택 월 실제 정규 수업일지 명단으로만 구성하고 특강·휴강만 있는 학생은 별도 정산해야 합니다."
);
const specialOnlyRow = buildStudentSettlementRow({
  classTemplates,
  lessons: [{
    date: "2026-07-20",
    lessonId: "lesson_special_journal",
    lessonType: "specialLecture",
    status: "scheduled",
    studentIds: [journalOnlyStudent.studentId]
  }],
  monthKey,
  records: [],
  setting: {
    fixedAmount: 420000,
    mode: "fixed",
    specialGrossAmount: 120000
  },
  student: journalOnlyStudent
});
assert.equal(specialOnlyRow.regularGrossAmount, 0, "특강 수업일지만 있는 학생에게 정규 월정액을 자동 부과하지 않아야 합니다.");
assert.equal(
  specialOnlyRow.specialGrossAmount,
  undefined,
  "과거 월별 정산의 수기 특강 금액은 더 이상 학생 정규 행 계산에 사용하지 않아야 합니다."
);

const pendingSpecialStudent = {
  grade: "중3",
  name: "미확정특강학생",
  studentId: "student_special_pending"
};
const specialLectureGuides = [{
  specialLectureGuideId: "guide_hourly",
  slug: "guide-hourly",
  title: "시간제 특강",
  shortTitle: "시간제 특강",
  pricingMode: "perHour",
  pricePerHour: 12500,
  sessions: [
    {
      sessionId: "hourly_session_1",
      dateKey: "2026-07-20",
      startTime: "13:00",
      endTime: "16:00",
      topic: "1회차"
    },
    {
      sessionId: "hourly_session_2",
      dateKey: "2026-07-22",
      startTime: "13:00",
      endTime: "16:00",
      topic: "2회차"
    },
    {
      sessionId: "hourly_session_august",
      dateKey: "2026-08-03",
      startTime: "13:00",
      endTime: "16:00",
      topic: "8월 회차"
    }
  ]
}];
const specialLectureEnrollments = [
  {
    enrollmentId: "enrollment_hourly_primary",
    specialLectureGuideId: "guide_hourly",
    studentId: journalOnlyStudent.studentId,
    status: "active",
    planReviewedAt: "2026-07-20T00:00:00.000Z",
    updatedAt: "2026-07-20T00:00:00.000Z",
    sessionPlans: [
      {
        sessionId: "hourly_session_1",
        status: "active",
        effectiveStartTime: "13:00",
        effectiveEndTime: "15:00"
      },
      {
        sessionId: "hourly_session_2",
        status: "excluded"
      }
    ]
  },
  {
    enrollmentId: "enrollment_hourly_duplicate",
    specialLectureGuideId: "guide_hourly",
    studentId: journalOnlyStudent.studentId,
    status: "active",
    planReviewedAt: "2026-07-21T00:00:00.000Z",
    updatedAt: "2026-07-21T00:00:00.000Z",
    sessionPlans: [
      {
        sessionId: "hourly_session_1",
        status: "active",
        effectiveStartTime: "13:00",
        effectiveEndTime: "15:00"
      },
      {
        sessionId: "hourly_session_2",
        status: "active",
        effectiveStartTime: "14:00",
        effectiveEndTime: "16:00"
      },
      {
        sessionId: "hourly_session_august",
        status: "active"
      }
    ]
  },
  {
    enrollmentId: "enrollment_hourly_pending",
    specialLectureGuideId: "guide_hourly",
    studentId: pendingSpecialStudent.studentId,
    status: "active",
    sessionIds: ["hourly_session_1"]
  },
  {
    enrollmentId: "enrollment_hourly_canceled",
    specialLectureGuideId: "guide_hourly",
    studentId: "student_special_canceled",
    status: "canceled",
    sessionIds: ["hourly_session_1"]
  }
];
const specialLectureRows = buildSpecialLectureSettlementRows({
  specialLectureEnrollments,
  specialLectureGuides,
  students: [journalOnlyStudent, pendingSpecialStudent]
});
assert.equal(specialLectureRows.length, 2, "취소 수강 원천은 특강 정산에 나타나지 않아야 합니다.");
const confirmedSpecialRow = specialLectureRows.find((row) =>
  row.student.studentId === journalOnlyStudent.studentId
);
const pendingSpecialRow = specialLectureRows.find((row) =>
  row.student.studentId === pendingSpecialStudent.studentId
);
assert.equal(confirmedSpecialRow.sourceEnrollmentCount, 2, "같은 학생·특강의 중복 수강 원천은 한 행으로 묶어야 합니다.");
assert.equal(confirmedSpecialRow.sessionCount, 3, "특강 정산은 월 경계를 두지 않고 7월·8월 전체 확정 회차를 합쳐야 합니다.");
assert.equal(confirmedSpecialRow.totalHours, 7, "학생별 유효 수업시간 변경과 다른 달 회차를 전체 특강 시수에 반영해야 합니다.");
assert.equal(confirmedSpecialRow.grossAmount, 87500, "시간제 특강은 전체 확정 시수와 특강관리 시간 단가로 계산해야 합니다.");
assert.equal(pendingSpecialRow.isConfirmed, false);
assert.equal(pendingSpecialRow.grossAmount, 0, "회차 계획 미확정 수강은 특강 합계에 넣지 않아야 합니다.");

const clinicGuide = {
  specialLectureGuideId: "guide_clinic",
  slug: "guide-clinic",
  title: "여름 개별 진도 클리닉",
  pricingMode: "perSession",
  pricePerSession: 37500,
  sessions: [
    "2026-07-22",
    "2026-07-24",
    "2026-07-27",
    "2026-07-29",
    "2026-07-31",
    "2026-08-03",
    "2026-08-05",
    "2026-08-07"
  ].map((dateKey, index) => ({
    dateKey,
    endTime: "16:00",
    sessionId: `clinic_session_${index + 1}`,
    startTime: "13:00",
    topic: `${index + 1}회차`
  }))
};
const clinicStudents = [
  { grade: "중3", name: "김연우", studentId: "student_clinic_yeonwoo" },
  { grade: "중3", name: "김보현", studentId: "student_clinic_bohyeon" },
  { grade: "중3", name: "신초봄", studentId: "student_clinic_chobom" }
];
const clinicEnrollments = clinicStudents.map((clinicStudent, index) => {
  const sessionCount = [7, 5, 5][index];
  return {
    enrollmentId: `enrollment_${clinicStudent.studentId}`,
    planReviewedAt: "2026-07-27T00:00:00.000Z",
    specialLectureGuideId: clinicGuide.specialLectureGuideId,
    status: "active",
    studentId: clinicStudent.studentId,
    sessionIds: clinicGuide.sessions.slice(index === 0 ? 1 : 0, (index === 0 ? 1 : 0) + sessionCount)
      .map((session) => session.sessionId)
  };
});
const specialManualState = normalizeSpecialLectureSettlementState({
  guideSettings: {
    [clinicGuide.specialLectureGuideId]: {
      studentSettings: {
        student_clinic_bohyeon: {
          billableSessionCount: 3,
          mode: "sessionCount",
          note: "특강 참여 중 정규 보강 대체분 2회를 제외하고 유료 3회 적용"
        },
        student_clinic_chobom: {
          fixedAmount: 116000,
          mode: "fixedAmount",
          note: "선생님 확정 특강비"
        }
      }
    }
  },
  updatedAt: "2026-07-27T00:00:00.000Z",
  version: 2
});
const clinicRows = buildSpecialLectureSettlementRows({
  settlementState: specialManualState,
  specialLectureEnrollments: clinicEnrollments,
  specialLectureGuides: [clinicGuide],
  students: clinicStudents
});
const yeonwooClinicRow = clinicRows.find((row) => row.student.name === "김연우");
const bohyeonClinicRow = clinicRows.find((row) => row.student.name === "김보현");
const chobomClinicRow = clinicRows.find((row) => row.student.name === "신초봄");
assert.equal(yeonwooClinicRow.sessionCount, 7, "김연우는 7월 24일부터 전체 7회 수강 원천을 표시해야 합니다.");
assert.equal(yeonwooClinicRow.grossAmount, 262500, "김연우 7회는 회차당 37,500원으로 자동 계산해야 합니다.");
assert.equal(bohyeonClinicRow.sessionCount, 5, "김보현 실제 특강 참여 5회 원천은 필터링하거나 삭제하지 않아야 합니다.");
assert.equal(bohyeonClinicRow.billableSessionCount, 3, "김보현은 별도 수기값으로 유료 3회를 적용해야 합니다.");
assert.equal(bohyeonClinicRow.grossAmount, 112500);
assert.equal(chobomClinicRow.sessionCount, 5, "신초봄 실제 특강 회차는 직접 금액과 별개로 보존해야 합니다.");
assert.equal(chobomClinicRow.grossAmount, 116000, "신초봄은 계산식 대신 직접 확정한 특강비를 사용해야 합니다.");
assert.equal(
  buildSpecialLectureSettlementSummary(clinicRows).manualOverrideCount,
  2,
  "회차 조정과 직접 금액 입력을 수동 정산으로 구분해야 합니다."
);
const mergedSpecialState = createSpecialLectureSettlementStateWithDraft(
  {
    guideSettings: {
      [clinicGuide.specialLectureGuideId]: {
        studentSettings: {
          student_concurrent_saved: {
            fixedAmount: 50000,
            mode: "fixedAmount",
            note: "다른 저장값"
          }
        }
      }
    },
    updatedAt: "2026-07-26T00:00:00.000Z",
    version: 4
  },
  specialManualState
);
assert.equal(mergedSpecialState.version, 5);
assert.equal(
  mergedSpecialState.guideSettings[clinicGuide.specialLectureGuideId]
    .studentSettings.student_concurrent_saved.fixedAmount,
  50000,
  "저장 직전 재조회에서 발견한 같은 특강의 다른 학생 설정을 덮어쓰지 않아야 합니다."
);
assert.equal(
  getSpecialLectureSettlementSaveSnapshot(mergedSpecialState),
  getSpecialLectureSettlementSaveSnapshot(normalizeSpecialLectureSettlementState(mergedSpecialState)),
  "특강 정산 저장 snapshot은 Supabase 재조회 정규화 뒤에도 같아야 합니다."
);

const fixedRow = buildStudentSettlementRow({
  classTemplates,
  lessons,
  monthKey,
  records,
  setting: {
    adjustmentAmount: 0,
    fixedAmount: 450000,
    mode: "fixed",
    scheduleText,
    specialGrossAmount: 100000
  },
  student
});
assert.equal(fixedRow.regularGrossAmount, 450000, "재원생 금액은 실제 횟수와 무관한 월 고정금액이어야 합니다.");
assert.equal(fixedRow.regularCount, 5, "정규 4회와 보강 예정 휴강 1회를 정산 회차로 인정해야 합니다.");
assert.equal(
  fixedRow.regularEvents.some((event) => event.lessonType === "closure"),
  true,
  "보강 전 휴강도 해당 월 정규 횟수에 포함해야 합니다."
);
assert.equal(fixedRow.closureCount, 1);
assert.equal(fixedRow.actualStatusCounts.pending, 4, "대기 출결은 수업일지 원천 상태를 유지한 채 집계되어야 합니다.");
assert.equal(fixedRow.makeupCount, 1, "보충은 별도 횟수로 표시해야 합니다.");
assert.equal(fixedRow.makeupHours, 2, "보충 시수는 별도 참고값이어야 합니다.");
assert.equal(fixedRow.systemProrationCount, 5, "월정액 학생의 시스템 정규 횟수는 예정 스케줄이 아니라 수업일지 인정 회차여야 합니다.");
const fixedOverrideRow = buildStudentSettlementRow({
  classTemplates,
  lessons,
  monthKey,
  records,
  setting: {
    fixedAmount: 450000,
    mode: "fixed",
    regularCountOverride: 4,
    scheduleText
  },
  student
});
assert.equal(fixedOverrideRow.prorationCount, 4);
assert.equal(fixedOverrideRow.hasRegularCountOverride, true);
assert.equal(fixedOverrideRow.regularGrossAmount, 450000, "월정액 학생은 최종 정규 횟수를 확정해도 월 고정금액을 유지해야 합니다.");

const closureReplacementStudent = {
  defaultClassTemplateId: "class_mwf",
  grade: "고3",
  name: "휴강보충학생",
  studentId: "student_closure_replacement"
};
const closureReplacementLessons = [
  ["2026-07-22", "class", ""],
  ["2026-07-24", "closure", ""],
  ["2026-07-27", "class", ""],
  ["2026-07-28", "makeup", "원 휴강 수업 · lesson_closure_replacement_24"],
  ["2026-07-29", "class", ""],
  ["2026-07-31", "class", ""]
].map(([date, lessonType, sourceLabel], index) => ({
  className: lessonType === "makeup" ? "월수금반 · 휴강 보충" : "월수금반",
  date,
  endTime: "19:00",
  lessonId: `lesson_closure_replacement_${index + 1}`,
  lessonTopic: lessonType === "closure" ? "휴강" : lessonType === "makeup" ? "휴강 보충" : "",
  lessonType,
  sourceLabel,
  startTime: "16:00",
  status: "scheduled",
  studentIds: [closureReplacementStudent.studentId]
}));
assert.equal(
  isClosureReplacementSettlementLesson(closureReplacementLessons[3]),
  true,
  "원 휴강 수업과 연결된 휴강 보충만 정규 이행으로 식별해야 합니다."
);
const closureReplacementRow = buildStudentSettlementRow({
  classTemplates,
  lessons: closureReplacementLessons,
  monthKey,
  records: [{
    attendanceStatus: "present",
    lessonId: closureReplacementLessons[3].lessonId,
    studentId: closureReplacementStudent.studentId
  }],
  setting: { fixedAmount: 450000, mode: "fixed", scheduleText: "월수금 16:00-19:00" },
  student: closureReplacementStudent
});
assert.equal(closureReplacementRow.setting.mode, "new");
assert.equal(closureReplacementRow.regularCount, 5, "휴강 1회는 포함하고 연결 보강은 추가 회차로 중복 계산하지 않아야 합니다.");
assert.equal(closureReplacementRow.makeupCount, 0, "휴강 보충을 일반 결석·숙제 보충과 중복 집계하지 않아야 합니다.");
assert.equal(closureReplacementRow.closureCount, 1);
assert.equal(closureReplacementRow.closureReplacementCount, 1);
assert.equal(
  closureReplacementRow.regularEvents.some((event) => event.eventType === "regularReplacement"),
  false,
  "연결 휴강 보충은 정산 인정 정규 회차를 추가하지 않아야 합니다."
);
assert.equal(closureReplacementRow.prorationCount, 5);
assert.equal(closureReplacementRow.regularGrossAmount, 187500);

const julyNewStudent = {
  defaultClassTemplateId: "class_mwf",
  grade: "고1",
  name: "7월 신입 정규10회와 휴강1회",
  studentId: "student_july_new_ten"
};
const julyNewTenLessons = ["08", "10", "13", "15", "17", "20", "22", "27", "29", "31"].map((day) => ({
  className: "월수금반",
  date: `2026-07-${day}`,
  endTime: "22:00",
  lessonId: `lesson_july_new_ten_${day}`,
  lessonType: "class",
  startTime: "19:00",
  status: "scheduled",
  studentIds: [julyNewStudent.studentId]
})).concat({
  className: "월수금반",
  date: "2026-07-24",
  endTime: "22:00",
  lessonId: "lesson_july_new_ten_closure_24",
  lessonTopic: "휴강",
  lessonType: "closure",
  startTime: "19:00",
  status: "scheduled",
  studentIds: [julyNewStudent.studentId]
});
const julyNewTenRow = buildStudentSettlementRow({
  classTemplates,
  lessons: julyNewTenLessons,
  monthKey,
  records: [],
  setting: { fixedAmount: 450000, mode: "fixed", scheduleText },
  student: julyNewStudent
});
assert.equal(julyNewTenRow.monthlyScheduleCount, 14);
assert.equal(julyNewTenRow.regularCount, 11);
assert.equal(julyNewTenRow.closureCount, 1);
assert.equal(julyNewTenRow.prorationCount, 11, "보강 예정인 휴강 1회를 정규 정산 횟수에 포함해야 합니다.");
assert.equal(julyNewTenRow.regularGrossAmount, 412500);

const offScheduleStudent = {
  defaultClassTemplateId: "class_mwf",
  grade: "중3",
  name: "스케줄밖첫수업학생",
  studentId: "student_off_schedule_first"
};
const offScheduleLessons = ["08", "09", "11", "14", "16", "18", "21", "23", "25", "28", "30"].map((day) => ({
  className: "실제 정규반",
  date: `2026-07-${day}`,
  endTime: "19:00",
  lessonId: `lesson_off_schedule_${day}`,
  lessonType: "class",
  startTime: "16:00",
  status: "scheduled",
  studentIds: [offScheduleStudent.studentId]
}));
const offScheduleRow = buildStudentSettlementRow({
  classTemplates,
  lessons: offScheduleLessons,
  monthKey,
  records: [],
  setting: { fixedAmount: 420000, mode: "fixed", scheduleText: "화목 16:00-19:00 / 토 10:00-13:00" },
  student: offScheduleStudent
});
assert.equal(offScheduleRow.regularCount, 11);
assert.equal(offScheduleRow.prorationCount, 11, "저장 스케줄 밖에서 실제 진행한 첫 정규수업도 신입 정산 횟수에 포함해야 합니다.");
assert.equal(offScheduleRow.regularGrossAmount, 385000);

const autoWithdrawnStudent = {
  defaultClassTemplateId: "class_mwf",
  grade: "고1",
  name: "7월 퇴원 자동학생",
  status: "paused",
  studentId: "student_auto_withdrawn",
  withdrawnAt: "2026-07-29T12:00:00+09:00"
};
const autoWithdrawnLessons = [
  { date: "2026-06-24", lessonId: "lesson_auto_withdrawn_june" },
  ...["08", "10", "13", "15", "17", "20", "22", "27", "29"].map((day) => ({
    date: `2026-07-${day}`,
    lessonId: `lesson_auto_withdrawn_${day}`
  }))
].map((lesson) => ({
  ...lesson,
  className: "월수금반",
  endTime: "22:00",
  lessonType: "class",
  startTime: "19:00",
  status: "scheduled",
  studentIds: [autoWithdrawnStudent.studentId]
}));
const autoWithdrawnRow = buildStudentSettlementRow({
  classTemplates,
  lessons: autoWithdrawnLessons,
  monthKey,
  records: [],
  setting: { fixedAmount: 450000, mode: "fixed", scheduleText },
  student: autoWithdrawnStudent
});
assert.equal(autoWithdrawnRow.setting.mode, "withdrawn", "퇴원일 원천이 있고 교사 고정급 확정이 없으면 퇴원 방식으로 자동 전환해야 합니다.");
assert.equal(autoWithdrawnRow.setting.modeSource, "lesson_journal");
assert.equal(autoWithdrawnRow.periodEnd, "2026-07-29");
assert.equal(autoWithdrawnRow.prorationCount, 13);
assert.equal(autoWithdrawnRow.regularGrossAmount, Math.round(450000 * 13 / 14));
const teacherFixedWithdrawnRow = buildStudentSettlementRow({
  classTemplates,
  lessons: autoWithdrawnLessons,
  monthKey,
  records: [],
  setting: { fixedAmount: 450000, mode: "fixed", modeSource: "teacher", scheduleText },
  student: autoWithdrawnStudent
});
assert.equal(teacherFixedWithdrawnRow.setting.mode, "fixed", "교사가 확정한 월정액은 퇴원 자동 판정으로 덮어쓰지 않아야 합니다.");

const newStudent = {
  ...student,
  name: "7월 신입생",
  studentId: "student_settlement_new"
};
const newStudentLessons = [
  {
    className: "월수금반",
    date: "2026-07-15",
    endTime: "22:00",
    lessonId: "lesson_new_july_15",
    lessonType: "class",
    startTime: "19:00",
    status: "completed",
    studentIds: [newStudent.studentId]
  },
  {
    className: "월수금반",
    date: "2026-07-29",
    endTime: "22:00",
    lessonId: "lesson_new_july_29",
    lessonType: "class",
    startTime: "19:00",
    status: "scheduled",
    studentIds: [newStudent.studentId]
  }
];
const unevenScheduleText = "월 19:00-22:00 / 수금 19:00-20:00";
const unevenScheduledEvents = buildMonthlyScheduleEvents(monthKey, unevenScheduleText);
const newStudentRow = buildStudentSettlementRow({
  classTemplates,
  lessons: newStudentLessons,
  monthKey,
  records: [],
  setting: {
    adjustmentAmount: 0,
    endDate: "2026-07-20",
    fixedAmount: 450000,
    mode: "new",
    scheduleText: unevenScheduleText,
    specialGrossAmount: 0,
    startDate: "2026-07-05"
  },
  student: newStudent
});
const newStudentOverrideRow = buildStudentSettlementRow({
  classTemplates,
  lessons: newStudentLessons,
  monthKey,
  records: [],
  setting: {
    fixedAmount: 450000,
    mode: "new",
    newStudentSessionAmount: 37500,
    regularCountOverride: 3,
    scheduleText: unevenScheduleText
  },
  student: newStudent
});
assert.equal(newStudentOverrideRow.systemProrationCount, 2);
assert.equal(newStudentOverrideRow.prorationCount, 3);
assert.equal(newStudentOverrideRow.regularGrossAmount, 112500, "신입생은 교사가 확정한 최종 정규 횟수로 금액을 계산해야 합니다.");
const newStudentNoJournalOverrideRow = buildStudentSettlementRow({
  classTemplates,
  lessons: [],
  monthKey,
  records: [],
  setting: {
    mode: "new",
    modeSource: "teacher",
    newStudentSessionAmount: 37500,
    regularCountOverride: 3,
    scheduleText: unevenScheduleText
  },
  student: newStudent
});
assert.equal(newStudentNoJournalOverrideRow.hasRegularJournal, false);
assert.equal(
  newStudentNoJournalOverrideRow.regularGrossAmount,
  112500,
  "수업일지가 없어도 교사가 확정한 최종 정규 횟수는 금액에 반영되어야 합니다."
);
const journalAutoNewSetting = applyMonthlySettlementJournalMode({
  fixedAmount: 450000,
  mode: "fixed",
  scheduleText
}, {
  classTemplates,
  lessons: newStudentLessons,
  monthKey,
  student: newStudent
});
assert.equal(
  journalAutoNewSetting.mode,
  "new",
  "전체 정규 수업일지에서 이번 달이 최초 수업 월이면 신입생 부분월 방식을 자동 적용해야 합니다."
);
assert.equal(journalAutoNewSetting.modeSource, "lesson_journal");
const journalAutoNewRow = buildStudentSettlementRow({
  classTemplates,
  lessons: newStudentLessons,
  monthKey,
  records: [],
  setting: {
    fixedAmount: 450000,
    mode: "fixed",
    scheduleText
  },
  student: newStudent
});
assert.equal(journalAutoNewRow.setting.mode, "new");
assert.equal(journalAutoNewRow.isJournalAutoNew, true);
const teacherFixedNewCandidate = applyMonthlySettlementJournalMode({
  fixedAmount: 450000,
  mode: "fixed",
  modeSource: "teacher",
  scheduleText
}, {
  classTemplates,
  lessons: newStudentLessons,
  monthKey,
  student: newStudent
});
assert.equal(
  teacherFixedNewCandidate.mode,
  "fixed",
  "선생님이 월정액을 수기로 선택한 뒤에는 수업일지 자동 판정이 다시 덮어쓰면 안 됩니다."
);
assert.equal(teacherFixedNewCandidate.modeSource, "teacher");
const historicalStudentSetting = applyMonthlySettlementJournalMode({
  fixedAmount: 450000,
  mode: "fixed",
  scheduleText
}, {
  classTemplates,
  lessons: [
    {
      ...newStudentLessons[0],
      date: "2026-06-29",
      lessonId: "lesson_new_history_june_29"
    },
    ...newStudentLessons
  ],
  monthKey,
  student: newStudent
});
assert.equal(
  historicalStudentSetting.mode,
  "fixed",
  "이전 달 정규 수업일지가 있는 학생은 이번 달 첫 등장 학생으로 계산하면 안 됩니다."
);
const expectedNewCount = newStudentLessons.length;
const fullUnevenHours = unevenScheduledEvents.reduce((sum, event) => sum + event.durationHours, 0);
const recognizedUnevenHours = unevenScheduledEvents
  .filter((event) => event.date >= "2026-07-15")
  .reduce((sum, event) => sum + event.durationHours, 0);
assert.equal(newStudentRow.periodStart, "2026-07-15", "신입생 시작일은 저장된 수기 날짜가 아니라 첫 정규 수업일지여야 합니다.");
assert.equal(newStudentRow.periodEnd, "2026-07-31");
assert.equal(newStudentRow.monthlyScheduleCount, unevenScheduledEvents.length);
assert.equal(newStudentRow.prorationCount, expectedNewCount);
assert.equal(newStudentRow.partialRatio, expectedNewCount / unevenScheduledEvents.length);
assert.equal(getDefaultNewStudentSessionAmount(newStudent), 37500);
assert.equal(newStudentRow.setting.newStudentSessionAmount, 37500);
assert.notEqual(
  newStudentRow.partialRatio,
  recognizedUnevenHours / fullUnevenHours,
  "신입 정산 횟수는 서로 다른 수업 길이가 있어도 시수 비율로 바뀌면 안 됩니다."
);
assert.equal(
  newStudentRow.regularGrossAmount,
  37500 * expectedNewCount,
  "고등 신입생은 월 전체 예정 횟수가 아니라 실제 정규 이행 횟수에 37,500원을 곱해야 합니다."
);
const middleNewStudent = {
  ...newStudent,
  grade: "중3",
  studentId: "student_settlement_middle_new"
};
const middleNewStudentRow = buildStudentSettlementRow({
  classTemplates,
  lessons: newStudentLessons.map((lesson) => ({
    ...lesson,
    studentIds: [middleNewStudent.studentId]
  })),
  monthKey,
  records: [],
  setting: {
    adjustmentAmount: 0,
    fixedAmount: 420000,
    mode: "new",
    scheduleText: unevenScheduleText
  },
  student: middleNewStudent
});
assert.equal(getDefaultNewStudentSessionAmount(middleNewStudent), 35000);
assert.equal(middleNewStudentRow.setting.newStudentSessionAmount, 35000);
assert.equal(
  middleNewStudentRow.regularGrossAmount,
  35000 * expectedNewCount,
  "중등 신입생은 월 전체 예정 횟수가 아니라 실제 정규 이행 횟수에 35,000원을 곱해야 합니다."
);

const newWithdrawnScheduleText = "화목 16:00-19:00 / 토 10:00-13:00";
const newWithdrawnRegularDates = [
  "2026-07-09",
  "2026-07-11",
  "2026-07-14",
  "2026-07-16",
  "2026-07-18",
  "2026-07-21",
  "2026-07-23",
  "2026-07-25"
];
const newWithdrawnStudent = {
  ...middleNewStudent,
  name: "7월 신입·퇴원생",
  status: "paused",
  studentId: "student_settlement_new_withdrawn",
  withdrawnAt: "2026-07-27T11:05:26.949+00:00"
};
const newWithdrawnLessons = newWithdrawnRegularDates.map((date, index) => ({
  className: "화목토반",
  date,
  endTime: date === "2026-07-11" || date === "2026-07-18" || date === "2026-07-25"
    ? "13:00"
    : "19:00",
  lessonId: `lesson_new_withdrawn_${index + 1}`,
  lessonType: "class",
  startTime: date === "2026-07-11" || date === "2026-07-18" || date === "2026-07-25"
    ? "10:00"
    : "16:00",
  status: "completed",
  studentIds: [newWithdrawnStudent.studentId]
}));
const newWithdrawnRow = buildStudentSettlementRow({
  classTemplates,
  lessons: newWithdrawnLessons,
  monthKey,
  records: [],
  setting: {
    adjustmentAmount: 0,
    fixedAmount: 420000,
    scheduleText: newWithdrawnScheduleText
  },
  student: newWithdrawnStudent
});
const expectedNewWithdrawnCount = buildMonthlyScheduleEvents(monthKey, newWithdrawnScheduleText)
  .filter((event) => event.date >= "2026-07-09" && event.date <= "2026-07-27")
  .length;
assert.equal(newWithdrawnRow.setting.mode, "new", "첫 수업 월에 퇴원한 학생도 신입 회당 계산을 자동 적용해야 합니다.");
assert.equal(newWithdrawnRow.setting.modeSource, "lesson_journal");
assert.equal(newWithdrawnRow.isNewWithdrawnPeriod, true);
assert.equal(newWithdrawnRow.periodStart, "2026-07-09");
assert.equal(newWithdrawnRow.periodEnd, "2026-07-27", "신입·퇴원 중첩 학생의 종료일은 말일이 아니라 퇴원일이어야 합니다.");
assert.equal(expectedNewWithdrawnCount, 8, "조소현 운영 사례의 화·목·토 스케줄은 첫 수업~퇴원일 사이 8회여야 합니다.");
assert.equal(newWithdrawnRow.prorationCount, expectedNewWithdrawnCount);
assert.equal(newWithdrawnRow.recognizedRegularCount, 8);
assert.equal(
  newWithdrawnRow.regularGrossAmount,
  35000 * expectedNewWithdrawnCount,
  "중등 신입·퇴원 학생은 첫 수업일부터 퇴원일까지의 횟수에 회당 35,000원을 곱해야 합니다."
);

assert.equal(
  JSON.parse(getMonthlySettlementMonthSaveSnapshot({
    monthKey,
    studentSettings: {
      [middleNewStudent.studentId]: middleNewStudentRow.setting
    },
    updatedAt: "2026-07-27T00:00:00.000Z"
  })).studentSettings[middleNewStudent.studentId].newStudentSessionAmount,
  35000,
  "신입생 회당 단가는 월별 Supabase 재조회 대조 스냅샷에 포함되어야 합니다."
);

const withdrawnStudent = {
  ...student,
  name: "7월 퇴원생",
  status: "paused",
  studentId: "student_settlement_withdrawn",
  withdrawnAt: "2026-07-18"
};
const withdrawnStudentLessons = [
  {
    className: "월수금반",
    date: "2026-07-01",
    endTime: "22:00",
    lessonId: "lesson_withdrawn_july_01",
    lessonType: "class",
    startTime: "19:00",
    status: "completed",
    studentIds: [withdrawnStudent.studentId]
  },
  {
    className: "월수금반",
    date: "2026-07-15",
    endTime: "22:00",
    lessonId: "lesson_withdrawn_july_15",
    lessonType: "class",
    startTime: "19:00",
    status: "completed",
    studentIds: [withdrawnStudent.studentId]
  }
];
const withdrawnRow = buildStudentSettlementRow({
  classTemplates,
  lessons: withdrawnStudentLessons,
  monthKey,
  records: [],
  setting: {
    adjustmentAmount: 0,
    endDate: "2026-07-30",
    fixedAmount: 450000,
    mode: "withdrawn",
    scheduleText,
    specialGrossAmount: 0,
    startDate: "2026-07-08"
  },
  student: withdrawnStudent
});
const withdrawnOverrideRow = buildStudentSettlementRow({
  classTemplates,
  lessons: withdrawnStudentLessons,
  monthKey,
  records: [],
  setting: {
    fixedAmount: 450000,
    mode: "withdrawn",
    regularCountOverride: 10,
    scheduleText
  },
  student: withdrawnStudent
});
assert.equal(withdrawnOverrideRow.prorationCount, 10);
assert.equal(
  withdrawnOverrideRow.regularGrossAmount,
  Math.round(450000 * 10 / withdrawnOverrideRow.monthlyScheduleCount),
  "퇴원생은 교사가 확정한 최종 정규 횟수 비율로 금액을 계산해야 합니다."
);
const expectedWithdrawnCount = scheduledEvents.filter((event) => event.date <= "2026-07-15").length;
assert.equal(withdrawnRow.periodStart, "2026-07-01", "퇴원생 인정 기간은 해당 월 1일부터 시작해야 합니다.");
assert.equal(withdrawnRow.periodEnd, "2026-07-15", "퇴원생 종료일은 퇴원일이나 수기 날짜가 아니라 마지막 정규 수업일지여야 합니다.");
assert.equal(withdrawnRow.monthlyScheduleCount, scheduledEvents.length);
assert.equal(withdrawnRow.prorationCount, expectedWithdrawnCount);
assert.equal(withdrawnRow.partialRatio, expectedWithdrawnCount / scheduledEvents.length);
assert.equal(
  withdrawnRow.regularGrossAmount,
  Math.round(450000 * expectedWithdrawnCount / scheduledEvents.length),
  "퇴원생은 1일부터 마지막 수업일까지의 월별 스케줄 횟수 비율로 계산해야 합니다."
);
const missingScheduleRow = buildStudentSettlementRow({
  classTemplates: [],
  lessons: newStudentLessons,
  monthKey,
  records: [],
  setting: {
    fixedAmount: 450000,
    mode: "new",
    scheduleText: "형식 확인 필요"
  },
  student: newStudent
});
assert.equal(missingScheduleRow.monthlyScheduleCount, 0);
assert.equal(missingScheduleRow.prorationCount, 2);
assert.equal(missingScheduleRow.regularGrossAmount, 75000, "신입 회당 정산은 월별 스케줄 형식과 무관하게 실제 정규 이행 횟수를 사용해야 합니다.");

const excludedRow = buildStudentSettlementRow({
  classTemplates,
  lessons,
  monthKey,
  records,
  setting: {
    adjustmentAmount: -50000,
    excluded: true,
    fixedAmount: 450000,
    mode: "fixed",
    scheduleText,
    specialGrossAmount: 100000
  },
  student
});
assert.equal(excludedRow.regularGrossAmount, 0, "정산 제외 학생은 정규 금액과 조정을 모두 합계에서 제외해야 합니다.");
assert.equal(
  JSON.parse(getMonthlySettlementMonthSaveSnapshot({
    monthKey,
    studentSettings: {
      [student.studentId]: excludedRow.setting
    },
    updatedAt: "2026-07-27T00:00:00.000Z"
  })).studentSettings[student.studentId].excluded,
  true,
  "정산 제외 상태는 월별 Supabase 재조회 대조 스냅샷에 포함되어야 합니다."
);
assert.equal(
  JSON.parse(getMonthlySettlementMonthSaveSnapshot({
    monthKey,
    studentSettings: {
      [newStudent.studentId]: journalAutoNewSetting
    },
    updatedAt: "2026-07-27T00:00:00.000Z"
  })).studentSettings[newStudent.studentId].modeSource,
  "lesson_journal",
  "수업일지 자동 판정 원천은 저장 후 Supabase 재조회 대조에 포함되어야 합니다."
);
assert.equal(
  JSON.parse(getMonthlySettlementMonthSaveSnapshot({
    monthKey,
    studentSettings: {
      [student.studentId]: fixedOverrideRow.setting
    }
  })).studentSettings[student.studentId].regularCountOverride,
  4,
  "교사 확정 최종 정규 횟수는 월별 저장 재조회 대조에 포함되어야 합니다."
);

const summary = buildMonthlySettlementSummary([fixedRow]);
assert.equal(summary.regularGrossAmount, 450000);
assert.equal(summary.regularNetAmount, Math.round(450000 * monthlySettlementFactor));
assert.equal(summary.specialGrossAmount, undefined, "월별 정규 정산 summary에는 특강 금액을 섞지 않아야 합니다.");
const excludedSummary = buildMonthlySettlementSummary([fixedRow, excludedRow]);
assert.equal(excludedSummary.regularGrossAmount, fixedRow.regularGrossAmount);
assert.equal(excludedSummary.excludedStudentCount, 1);

const makeupTimeEvidence = buildStudentMonthEvidence({
  lessons: [{
    date: "2026-07-30",
    endTime: "16:00",
    lessonId: "lesson_makeup_actual_time",
    lessonType: "makeup",
    startTime: "14:00",
    status: "completed",
    studentIds: [student.studentId]
  }],
  monthKey,
  records: [],
  student: {
    ...student,
    scheduleOverride: "목 16:00-19:00"
  }
});
assert.equal(makeupTimeEvidence.makeupEvents[0].startTime, "14:00", "보강은 학생 정규 스케줄이 아니라 실제 수업일지 시간을 표시해야 합니다.");
assert.equal(makeupTimeEvidence.makeupEvents[0].endTime, "16:00");

const attendanceLessons = [
  {
    date: "2026-07-01",
    lessonId: "regular_attendance",
    lessonType: "class",
    status: "completed",
    studentIds: [student.studentId]
  },
  {
    date: "2026-07-20",
    lessonId: "special_attendance",
    lessonType: "specialLecture",
    specialLectureGuideId: "guide_attendance",
    specialLectureSessionId: "session_attendance_1",
    status: "completed",
    studentIds: [student.studentId]
  }
];
const attendanceRecords = [
  { attendanceStatus: "present", lessonId: "regular_attendance", studentId: student.studentId },
  { attendanceStatus: "late", lessonId: "special_attendance", studentId: student.studentId }
];
const studentAttendance = buildStudentMonthlyAttendanceSummary({
  lessons: attendanceLessons,
  monthKey,
  records: attendanceRecords,
  studentId: student.studentId
});
assert.equal(studentAttendance.regular.present, 1);
assert.equal(studentAttendance.special.late, 1);
const specialAttendance = buildSpecialLectureAttendanceSummary({
  guideId: "guide_attendance",
  lessons: attendanceLessons,
  records: attendanceRecords,
  sessions: [{ sessionId: "session_attendance_1" }, { sessionId: "session_attendance_2" }],
  studentId: student.studentId
});
assert.equal(specialAttendance.journalCount, 1);
assert.equal(specialAttendance.journalMissingCount, 1);
assert.equal(specialAttendance.late, 1);

const reportModel = buildMonthlySettlementReportModel({
  monthKey,
  rows: [fixedRow, excludedRow]
});
assert.equal(reportModel.rows.length, 1, "PDF에는 정산 제외 행을 넣지 않아야 합니다.");
assert.equal(reportModel.rows[0].count, fixedRow.prorationCount);
assert.equal(reportModel.rows[0].amount, fixedRow.regularGrossAmount);
assert.equal("totalCount" in reportModel, false, "PDF model은 최종 정규 횟수 합계를 만들지 않아야 합니다.");
const reportHtml = createMonthlySettlementReportHtml(reportModel);
assert.match(reportHtml, /학생별 정산 반영 횟수와 최종 금액/);
assert.doesNotMatch(reportHtml, /출석|결석|대기|필터/);
assert.match(reportHtml, /최종 정규 횟수/);
assert.doesNotMatch(reportHtml, /총 횟수/);
assert.match(reportHtml, /<td colspan="2">합계<\/td>/);
assert.match(reportHtml, /onclick="window\.print\(\)"[^>]*>인쇄하기</);
assert.doesNotMatch(reportHtml, /학교·학년/);

console.log("monthly settlement tests passed");

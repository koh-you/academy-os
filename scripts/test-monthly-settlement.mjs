import assert from "node:assert/strict";
import {
  buildMonthlyScheduleEvents,
  buildMonthlySettlementSummary,
  buildStudentSettlementRow,
  getMonthRange,
  monthlySettlementFactor
} from "../src/domains/settlements/monthlySettlement.js";

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
    className: "결석 보충",
    date: "2026-07-07",
    endTime: "18:00",
    lessonId: "lesson_makeup",
    lessonType: "makeup",
    sourceMakeupTaskId: "makeup_1",
    startTime: "16:00",
    status: "completed",
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
assert.equal(fixedRow.regularCount, scheduledEvents.length + 1, "일요 시험대비는 참고 횟수에 추가되어야 합니다.");
assert.equal(fixedRow.actualStatusCounts.pending, 1, "대기 출결은 원천 상태를 유지한 채 집계되어야 합니다.");
assert.equal(fixedRow.makeupCount, 1, "보충은 별도 횟수로 표시해야 합니다.");
assert.equal(fixedRow.makeupHours, 2, "보충 시수는 별도 참고값이어야 합니다.");

const newStudentRow = buildStudentSettlementRow({
  classTemplates,
  lessons,
  monthKey,
  records,
  setting: {
    adjustmentAmount: 0,
    endDate: "2026-07-31",
    fixedAmount: 450000,
    mode: "new",
    scheduleText,
    specialGrossAmount: 0,
    startDate: "2026-07-15"
  },
  student
});
assert.ok(newStudentRow.partialRatio > 0 && newStudentRow.partialRatio < 1);
assert.equal(
  newStudentRow.regularGrossAmount,
  Math.round(450000 * newStudentRow.partialRatio),
  "신입생은 해당 월 전체 달력 시수 대비 인정 기간 시수로 계산해야 합니다."
);

const withdrawnRow = buildStudentSettlementRow({
  classTemplates,
  lessons,
  monthKey,
  records,
  setting: {
    adjustmentAmount: 0,
    endDate: "2026-07-18",
    fixedAmount: 450000,
    mode: "withdrawn",
    scheduleText,
    specialGrossAmount: 0
  },
  student
});
assert.equal(withdrawnRow.periodStart, "2026-07-01", "퇴원생 인정 기간은 해당 월 1일부터 시작해야 합니다.");
assert.equal(withdrawnRow.periodEnd, "2026-07-18");
assert.ok(withdrawnRow.partialRatio > 0 && withdrawnRow.partialRatio < 1);

const summary = buildMonthlySettlementSummary([fixedRow]);
assert.equal(summary.regularGrossAmount, 450000);
assert.equal(summary.specialGrossAmount, 100000);
assert.equal(summary.regularNetAmount, Math.round(450000 * monthlySettlementFactor));
assert.equal(summary.specialNetAmount, Math.round(100000 * monthlySettlementFactor));
assert.equal(summary.totalNetAmount, summary.regularNetAmount + summary.specialNetAmount);

console.log("monthly settlement tests passed");

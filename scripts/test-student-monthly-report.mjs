import assert from "node:assert/strict";
import {
  buildStudentMonthlyReportModel,
  buildStudentMonthlyReportText,
  openStudentMonthlyReportPdf
} from "../src/domains/students/studentMonthlyReport.js";

const student = {
  defaultClassTemplateId: "template_mwf",
  grade: "중3",
  name: "강민준",
  scheduleOverride: "월금 17:00-19:00",
  schoolName: "창동중",
  studentId: "student_minjun"
};
const lessons = [
  { lessonId: "regular_mon", classTemplateId: "template_mwf", className: "월수금 앞반", date: "2026-08-03", endTime: "19:00", lessonType: "class", startTime: "16:00", studentIds: [student.studentId] },
  { lessonId: "regular_wed", classTemplateId: "template_mwf", className: "월수금 앞반", date: "2026-08-05", endTime: "19:00", lessonType: "class", startTime: "16:00", studentIds: [student.studentId] },
  { lessonId: "regular_fri", classTemplateId: "template_mwf", className: "월수금 앞반", date: "2026-08-07", endTime: "19:00", lessonType: "class", startTime: "16:00", studentIds: [student.studentId] },
  { lessonId: "closure_mon", classTemplateId: "template_mwf", className: "월수금 앞반", date: "2026-08-10", endTime: "19:00", lessonType: "closure", startTime: "16:00", studentIds: [student.studentId] },
  { lessonId: "canceled_fri", classTemplateId: "template_mwf", className: "월수금 앞반", date: "2026-08-14", endTime: "19:00", lessonType: "class", startTime: "16:00", status: "canceled", studentIds: [student.studentId] },
  { lessonId: "special", className: "여름 특강", date: "2026-08-20", endTime: "15:00", lessonType: "specialLecture", startTime: "13:00", studentIds: [student.studentId] },
  { lessonId: "one_day", className: "강민준 추가수업", date: "2026-08-26", endTime: "19:00", lessonType: "makeup", startTime: "17:00", studentIds: [student.studentId] },
  { lessonId: "other_month", className: "9월 수업", date: "2026-09-02", endTime: "19:00", lessonType: "makeup", startTime: "17:00", studentIds: [student.studentId] }
];
const records = [
  { attendanceStatus: "present", lessonId: "regular_mon", studentId: student.studentId },
  { attendanceStatus: "late", lessonId: "special", studentId: student.studentId }
];

const model = buildStudentMonthlyReportModel({
  lessons,
  monthKey: "2026-08",
  now: new Date("2026-08-04T12:00:00+09:00"),
  records,
  student
});

assert.equal(model.monthLabel, "2026년 8월");
assert.deepEqual(model.plannedRows.map((row) => row.lessonId), ["regular_mon", "regular_fri", "special", "one_day"], "개별 월금 스케줄은 수요일 정규 명단을 제외하고 별도 수업은 보존해야 합니다.");
assert.deepEqual(model.actualRows.map((row) => row.lessonId), ["regular_mon", "special"], "지난 수업과 기록이 있는 수업만 실제 출결에 표시해야 합니다.");
assert.equal(model.summary.planned, 4);
assert.equal(model.summary.actual, 2);
assert.equal(model.attendance.present, 1);
assert.equal(model.attendance.late, 1);
assert.ok(model.changeRows.some((row) => row.lessonId === "one_day" && row.changeReason === "보강·추가 수업"));
assert.ok(model.changeRows.some((row) => row.lessonId === "canceled_fri" && row.changeReason === "취소된 수업"));
assert.ok(model.changeRows.some((row) => row.lessonId === "closure_mon" && row.changeReason === "휴강"));
assert.ok(!model.changeRows.some((row) => row.lessonId === "regular_wed"), "개별 요일에서 제외된 정규 수업은 제출 내역에 섞지 않아야 합니다.");

const parentText = buildStudentMonthlyReportText(model, { audience: "parent", note: "8월 마지막 주부터 일정이 달라집니다." });
assert.match(parentText, /강민준 2026년 8월 수업 안내/);
assert.match(parentText, /■ 예정 수업/);
assert.match(parentText, /■ 실제 출결/);
assert.match(parentText, /■ 변동사항/);
assert.match(parentText, /안내 메모/);
assert.doesNotMatch(parentText, /개별 스케줄/);

const directorText = buildStudentMonthlyReportText(model, { audience: "director" });
assert.match(directorText, /창동중 · 중3 · 월금 17:00-19:00/);
assert.match(directorText, /월수금 앞반/);

const printedHtml = [];
globalThis.window = {
  open: () => ({
    document: { close() {}, write: (html) => printedHtml.push(html) },
    opener: "origin"
  })
};
openStudentMonthlyReportPdf(model, { audience: "director", note: "원장님 확인용" });
delete globalThis.window;
assert.equal(printedHtml.length, 1);
assert.match(printedHtml[0], /원장님용 상세본/);
assert.match(printedHtml[0], /예정 수업/);
assert.match(printedHtml[0], /실제 출결/);
assert.match(printedHtml[0], /변동사항/);
assert.match(printedHtml[0], /원장님 확인용/);

console.log("student monthly report model tests passed");

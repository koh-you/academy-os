import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalAbsenceAlimtalkSectionModel,
  createLessonJournalReservationModalModel
} from "../src/domains/lessons/lessonJournalReservationModalModel.js";

assert.deepEqual(
  createLessonJournalReservationModalModel({
    auditedJobCount: 5,
    canceledJobCount: 1,
    failedJobCount: 2,
    inspectLabel: "OS 학생 예약",
    reservationAudit: { message: "TARGET 조회 완료", state: "ready" },
    reservationInspectMode: "studentScheduled",
    scheduledParentCount: 2,
    scheduledStudentCount: 1,
    solapiResultRefreshState: "idle"
  }),
  {
    auditMessage: "TARGET 조회 완료",
    auditRefreshLabel: "OS 새로고침",
    inspectSummary: "OS 예약 5건",
    inspectTitle: "OS 학생 예약",
    resultRefreshLabel: "솔라피 발송결과",
    showAllViewAction: true,
    summaryCards: [
      { count: 2, label: "OS 학부모 예약", mode: "parentScheduled" },
      { count: 1, label: "OS 학생 예약", mode: "studentScheduled" },
      { count: 3, label: "취소/실패", mode: "issues" }
    ]
  }
);

const controlModel = createLessonJournalReservationModalModel({
  reservationAudit: { state: "loading" },
  reservationInspectMode: "all",
  solapiResultRefreshState: "loading"
});
assert.equal(controlModel.auditMessage, "예약 기준: Academy OS 예약 기록");
assert.equal(controlModel.auditRefreshLabel, "조회 중");
assert.equal(controlModel.resultRefreshLabel, "확인 중");
assert.equal(controlModel.showAllViewAction, false);
assert.deepEqual(controlModel.summaryCards.map((card) => card.count), [0, 0, 0]);

// 2026-09-25 · 출결 결석 알림톡(attendance_absence_*) 구획. 학생별 학부모/학생 칸은 notificationType 으로
// parent_comment·student_comment 만 고르므로 이 job 은 수업일지 어디에도 안 나왔다 — 이 구획이 그 자리다.
function createAbsenceJob(overrides = {}) {
  return {
    lessonId: "lesson-1",
    notificationJobId: "attendance_absence_record-roster_2026092521",
    notificationType: "attendance",
    payload: { studentName: "명단 학생" },
    result: { attendanceSource: "manual_journal", reservationPending: true },
    scheduledAt: "2026-09-25T12:00:00.000Z",
    status: "scheduled",
    studentId: "student-roster",
    target: "parent",
    ...overrides
  };
}

const absenceSection = createLessonJournalAbsenceAlimtalkSectionModel({
  auditedJobs: [
    { notificationJobId: "job-parent-comment", notificationType: "parent_comment", status: "scheduled", studentId: "student-roster" },
    createAbsenceJob({ notificationJobId: "attendance_absence_record-outside_2026092521", payload: {}, studentId: "student-outside" }),
    createAbsenceJob({ notificationJobId: "attendance_absence_record-roster_2026092522", scheduledAt: "2026-09-25T13:00:00.000Z", status: "canceled" }),
    createAbsenceJob()
  ],
  cancelingReservationJobId: "attendance_absence_record-roster_2026092521",
  lessonStudents: [{ studentId: "student-roster" }],
  students: [{ name: "명단 학생", studentId: "student-roster" }, { name: "명단 밖 학생", studentId: "student-outside" }]
});
assert.equal(absenceSection.visible, true);
assert.equal(absenceSection.title, "출결 결석 알림톡");
assert.equal(absenceSection.countLabel, "전체 3건 · 취소 가능 2건");
assert.equal(absenceSection.cancelableCount, 2);
assert.match(absenceSection.description, /자동으로 취소되지 않습니다/);
// 로스터 학생이 먼저(취소 가능한 것부터), 로스터 밖 학생이 뒤에 온다. parent_comment 는 섞이지 않는다.
assert.deepEqual(
  absenceSection.rows.map((row) => [row.key, row.studentName, row.canCancel, row.isCanceling, row.outsideRoster, row.scheduledAtLabel]),
  [
    ["attendance_absence_record-roster_2026092521", "명단 학생", true, true, false, "21:00"],
    ["attendance_absence_record-roster_2026092522", "명단 학생", false, false, false, "22:00"],
    ["attendance_absence_record-outside_2026092521", "명단 밖 학생", true, false, true, "21:00"]
  ]
);
// 공용 상태 문구가 status "scheduled" 에만 예약 시각을 함께 찍으므로("예약 중 · 09. 25. 21:00"),
// 같은 행에 시각이 두 번 나오지 않게 그때는 별도 시각 라벨을 숨긴다. 취소된 행에는 남긴다.
assert.deepEqual(
  absenceSection.rows.map((row) => [row.job.status, row.showScheduledAtLabel]),
  [["scheduled", false], ["canceled", true], ["scheduled", false]]
);
// 취소는 모달이 넘겨받은 job 그 자체로 한다(모델이 job 을 새로 만들지 않는다).
assert.equal(absenceSection.rows[0].job.notificationJobId, "attendance_absence_record-roster_2026092521");

// 출결 결석 알림톡이 하나도 없으면 빈 구획을 그리지 않는다.
const emptyAbsenceSection = createLessonJournalAbsenceAlimtalkSectionModel({
  auditedJobs: [{ notificationJobId: "job-parent-comment", notificationType: "parent_comment", status: "scheduled" }]
});
assert.equal(emptyAbsenceSection.visible, false);
assert.deepEqual(emptyAbsenceSection.rows, []);
assert.equal(createLessonJournalAbsenceAlimtalkSectionModel().visible, false);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalReservationModal.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalReservationModal/);
assert.match(journalSource, /onRefreshReservationAudit=\{refreshReservationAudit\}/);
// 2026-09-19 · U11: 모달의 [취소] 는 ConfirmDialog 를 여는 requestCancelReservationJob 을 받고, 확정 시 cancelReservationJob 이 실행된다.
assert.match(journalSource, /onCancelReservationJob=\{requestCancelReservationJob\}/);
// 2026-09-25 · 출결 결석 알림톡 구획은 로스터 순서를 알아야 '명단 밖' 을 구분할 수 있다.
assert.match(journalSource, /lessonStudents=\{lessonStudents\}/);
assert.match(journalSource, /async function cancelReservationJob\(job\)/);
assert.match(journalSource, /onRefreshSolapiSendResults=\{refreshSolapiSendResults\}/);
assert.match(journalSource, /solapiReservationSyncStatus=\{solapiReservationSyncStatus\}/);
assert.doesNotMatch(journalSource, /className="reservationSummaryGrid"/);
assert.doesNotMatch(journalSource, /onCancelSolapiGroup=/);

for (const contract of [
  "알림톡 예약 확인",
  "명단 밖 예약",
  "오늘 14:00 일괄예약",
  "Academy OS 상태",
  "예약 업데이트 필요",
  "현재 저장본과 예약 내용이 다릅니다.",
  "onCancelReservationJob(job)",
  // 2026-09-25 · 수업일지에서도 예약된 출결 결석 알림톡을 확인하고 취소할 수 있다.
  "createLessonJournalAbsenceAlimtalkSectionModel({",
  "reservationAbsenceSection",
  "onCancelReservationJob(row.job)",
  "예약 취소",
  "명단 밖",
  "onRefreshReservationAudit",
  "onRefreshSolapiSendResults",
  "DataTableShell"
]) {
  assert.ok(componentSource.includes(contract), `missing controlled reservation modal contract: ${contract}`);
}
for (const forbiddenContract of [
  "Solapi 그룹 이력",
  "Solapi 메시지",
  "그룹 취소",
  "onCancelSolapiGroup",
  "solapiGroups",
  "solapiMessages"
]) {
  assert.ok(!componentSource.includes(forbiddenContract), `raw Solapi audit must stay removed: ${forbiddenContract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `reservation modal must not own orchestration: ${forbiddenSideEffect}`);
}

console.log("lesson journal reservation modal TARGET/CONTROL fixtures passed");

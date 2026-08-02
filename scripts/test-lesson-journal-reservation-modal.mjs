import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalReservationModalModel } from "../src/domains/lessons/lessonJournalReservationModalModel.js";

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
assert.match(journalSource, /onCancelReservationJob=\{cancelReservationJob\}/);
assert.match(journalSource, /onRefreshSolapiSendResults=\{refreshSolapiSendResults\}/);
assert.doesNotMatch(journalSource, /className="reservationSummaryGrid"/);
assert.doesNotMatch(journalSource, /onCancelSolapiGroup=/);

for (const contract of [
  "알림톡 예약 확인",
  "명단 밖 예약",
  "오늘 14:00 일괄예약",
  "Academy OS 상태",
  "onCancelReservationJob(job)",
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

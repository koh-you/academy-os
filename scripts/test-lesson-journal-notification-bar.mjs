import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalNotificationBarModel } from "../src/domains/lessons/lessonJournalNotificationBarModel.js";

assert.deepEqual(
  createLessonJournalNotificationBarModel({
    canApplySolapiReservation: false,
    checkoutMissingStudents: [{ name: "고태영" }, { name: "CONTROL 학생" }],
    hasSolapiResultRefreshTarget: true,
    journalEditMode: false,
    reservationApplyState: "idle",
    solapiResultRefreshState: "loading"
  }),
  {
    checkoutMissingCount: 2,
    checkoutMissingTitle: "고태영, CONTROL 학생",
    refreshButtonLabel: "확인 중",
    showApplyAction: false,
    showEditAction: true,
    showRefreshAction: true
  }
);
assert.deepEqual(
  createLessonJournalNotificationBarModel({
    canApplySolapiReservation: false,
    checkoutMissingStudents: [],
    hasSolapiResultRefreshTarget: false,
    journalEditMode: true,
    reservationApplyState: "applying",
    solapiResultRefreshState: "failed"
  }),
  {
    checkoutMissingCount: 0,
    checkoutMissingTitle: "",
    refreshButtonLabel: "발송 결과",
    showApplyAction: true,
    showEditAction: false,
    showRefreshAction: false
  }
);

const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalNotificationBar.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalNotificationBar/);
assert.match(journalSource, /onApplySolapiReservationPlan=\{applySolapiReservationPlan\}/);
assert.match(journalSource, /onRefreshSolapiSendResults=\{refreshSolapiSendResults\}/);
assert.match(journalSource, /onUpdateLessonNotificationPlan=\{onUpdateLessonNotificationPlan\}/);
assert.match(journalSource, /setReservationInspectMode\("all"\)/);
assert.match(journalSource, /setReservationModalOpen\(true\)/);
assert.doesNotMatch(journalSource, /<section className="panel lessonSaveSummary"/);

for (const contract of [
  'aria-label="알림톡 상태"',
  'aria-label="알림톡 예약 작업"',
  "aria-label=\"알림톡 예약 설정\"",
  "수정 시작",
  "예약 확인",
  "onClick={onRefreshSolapiSendResults}",
  "onClick={onApplySolapiReservationPlan}",
  "disabled={!canApplySolapiReservation}"
]) {
  assert.ok(componentSource.includes(contract), `missing controlled notification bar contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "setReservationModalOpen", "setReservationInspectMode", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `notification bar must not own orchestration: ${forbiddenSideEffect}`);
}

console.log("lesson journal notification bar TARGET/CONTROL fixtures passed");

import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalNotificationBarModel } from "../src/domains/lessons/lessonJournalNotificationBarModel.js";

// 2026-09-12 · "수정 시작" 단계가 없어져 showEditAction 이 사라졌다. 나머지 표시 조건은
// 상단 pill 이 아니라 하단 고정바의 "알림톡 작업" 그룹이 쓴다.
assert.deepEqual(
  createLessonJournalNotificationBarModel({
    canApplySolapiReservation: false,
    checkoutMissingStudents: [{ name: "고태영" }, { name: "CONTROL 학생" }],
    hasSolapiResultRefreshTarget: true,
    reservationApplyState: "idle",
    solapiResultRefreshState: "loading"
  }),
  {
    checkoutMissingCount: 2,
    checkoutMissingTitle: "고태영, CONTROL 학생",
    refreshButtonLabel: "확인 중",
    showApplyAction: false,
    showRefreshAction: true
  }
);
assert.deepEqual(
  createLessonJournalNotificationBarModel({
    canApplySolapiReservation: false,
    checkoutMissingStudents: [],
    hasSolapiResultRefreshTarget: false,
    reservationApplyState: "applying",
    solapiResultRefreshState: "failed"
  }),
  {
    checkoutMissingCount: 0,
    checkoutMissingTitle: "",
    refreshButtonLabel: "발송 결과",
    showApplyAction: true,
    showRefreshAction: false
  }
);

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalNotificationBar.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalNotificationBar/);
assert.doesNotMatch(journalSource, /<section className="panel lessonSaveSummary"/);

// 상단 바는 발송 상태 pill 만 그린다. 조작 버튼과 오케스트레이션은 갖지 않는다.
for (const contract of [
  'aria-label="발송 상태"',
  'aria-label="알림톡 상태"',
  "lessonNotificationPlanStatus",
  "checkoutMissingSummary",
  "solapiReservationSync"
]) {
  assert.ok(componentSource.includes(contract), `missing controlled notification bar contract: ${contract}`);
}
for (const removedAction of ["<button", "<select", "수정 시작", "예약 확인", "onStartJournalEditMode", '알림톡 예약 작업']) {
  assert.ok(!componentSource.includes(removedAction), `notification bar must not keep ${removedAction}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "setReservationModalOpen", "setReservationInspectMode", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `notification bar must not own orchestration: ${forbiddenSideEffect}`);
}

// 조작은 전부 하단 고정바(LessonJournalDetail 이 조립)로 옮겨졌다.
for (const bottomBarContract of [
  "notificationActions={(",
  'aria-label="알림톡 예약 설정"',
  "onUpdateLessonNotificationPlan?.(lesson.lessonId, event.target.value)",
  "예약 확인",
  'setReservationInspectMode("all")',
  "setReservationModalOpen(true)",
  "onClick={refreshSolapiSendResults}",
  "onClick={applySolapiReservationPlan}",
  "disabled={!canApplySolapiReservation}"
]) {
  assert.ok(journalSource.includes(bottomBarContract), `missing bottom bar notification contract: ${bottomBarContract}`);
}

console.log("lesson journal notification bar TARGET/CONTROL fixtures passed");

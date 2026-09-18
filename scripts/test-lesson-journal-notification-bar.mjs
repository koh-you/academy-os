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

// 2026-09-14 · 이 컴포넌트는 저장·발송 상태 pill 묶음이고, 헤더 우상단(LessonJournalHeader 의 statusPills)에
// 들어간다. 별도 패널을 그리지 않고, 조작 버튼도 갖지 않는다.
assert.match(journalSource, /<LessonJournalHeader[\s\S]*?statusPills=\{\(\s*<LessonJournalNotificationBar/);
assert.doesNotMatch(journalSource, /<section className="panel lessonSaveSummary"/);
assert.ok(!componentSource.includes("<section"), "notification bar must not render its own panel");

for (const contract of [
  'aria-label="알림톡 상태"',
  'className="lessonNotificationStatusRow"',
  '<InlineSaveStatus label="수업일지" saveState={journalSaveState} />',
  "lessonNotificationPlanStatus",
  "checkoutMissingSummary",
  "solapiReservationSync"
]) {
  assert.ok(componentSource.includes(contract), `missing controlled notification bar contract: ${contract}`);
}
// 2026-09-18 · pill 순서는 기본 예약 → 하원 미체크 → 수업일지 저장 상태 → Solapi 반영 상태.
assert.match(
  componentSource,
  /lessonNotificationPlanStatus[\s\S]*checkoutMissingSummary[\s\S]*<InlineSaveStatus label="수업일지"[\s\S]*solapiReservationSync/
);
// 2026-09-14 · 저장 상태는 InlineSaveStatus pill 하나로만 보여준다. 저장 메시지 텍스트를 옆에 또 쓰면 중복이라 없앴다.
for (const removedAction of ["<button", "<select", "journalSaveMessage", "lessonJournalSaveStatusMessage", "<strong>발송 상태</strong>", "수정 시작", "예약 확인", "onStartJournalEditMode", '알림톡 예약 작업']) {
  assert.ok(!componentSource.includes(removedAction), `notification bar must not keep ${removedAction}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "setReservationModalOpen", "setReservationInspectMode", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `notification bar must not own orchestration: ${forbiddenSideEffect}`);
}

// 조작은 전부 하단 고정바(LessonJournalDetail 이 조립). 알림톡 예약은 상시 버튼, 나머지는 ⋮ 메뉴 항목.
for (const bottomBarContract of [
  "reservationAction={(",
  "menuItems={journalMenuItems}",
  "onSelect: () => onUpdateLessonNotificationPlan?.(lesson.lessonId, option.value)",
  'label: "예약 확인"',
  'setReservationInspectMode("all")',
  "setReservationModalOpen(true)",
  "onSelect: refreshSolapiSendResults",
  "onClick={applySolapiReservationPlan}",
  "disabled={!canApplySolapiReservation}"
]) {
  assert.ok(journalSource.includes(bottomBarContract), `missing bottom bar notification contract: ${bottomBarContract}`);
}

console.log("lesson journal notification bar TARGET/CONTROL fixtures passed");

import { readAppWithLessonJournalSource } from "./lessonJournalTestSource.mjs";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createLessonJournalSaveBarModel } from "../src/domains/lessons/lessonJournalSaveBarModel.js";

// 2026-09-19 · showMessage: 하단바에 메시지 텍스트를 보일지. failed/dirty 일 때만 true(saving/saved 는 헤더 pill 만).
// cancelDisabled: 편집 취소 버튼은 저장 중에만 비활성.
assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: true,
    isEditMode: true,
    saveState: "idle"
  }),
  {
    buttonDisabled: false,
    buttonLabel: "변경 저장",
    cancelDisabled: false,
    message: "",
    saveState: "idle",
    shouldShow: true,
    showMessage: false
  }
);

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: false,
    isEditMode: true,
    saveState: "saving"
  }),
  {
    buttonDisabled: true,
    buttonLabel: "저장 중",
    cancelDisabled: true,
    message: "",
    saveState: "saving",
    shouldShow: true,
    showMessage: false
  }
);

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: true,
    isEditMode: false,
    manualSaveMessage: "TARGET 저장 완료",
    saveState: "saved"
  }),
  {
    buttonDisabled: false,
    buttonLabel: "편집",
    cancelDisabled: false,
    message: "",
    saveState: "saved",
    shouldShow: true,
    showMessage: false
  }
);

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: true,
    isEditMode: false,
    manualSaveMessage: "",
    saveState: "idle"
  }),
  {
    buttonDisabled: false,
    buttonLabel: "편집",
    cancelDisabled: false,
    message: "",
    saveState: "idle",
    shouldShow: true,
    showMessage: false
  }
);

assert.deepEqual(
  createLessonJournalSaveBarModel({
    hasDraftChanges: false,
    isEditMode: false,
    manualSaveMessage: "Solapi 예약 반영 완료",
    message: "Solapi 예약 반영 완료",
    reservationSyncStatus: {
      detail: "누락 0건 · 남은 예약 0건 · 내용 변경 2건",
      label: "Solapi 예약 업데이트 필요",
      state: "needs"
    },
    saveState: "saved"
  }),
  {
    buttonDisabled: false,
    buttonLabel: "편집",
    cancelDisabled: false,
    message: "Solapi 예약 업데이트 필요",
    saveState: "dirty",
    shouldShow: true,
    // 실시간 예약 상태 라벨은 헤더의 Solapi pill 이 같은 문구로 보여주므로 하단바에는 다시 쓰지 않는다.
    showMessage: false
  },
  "실시간 예약 상태가 needs이면 하단바가 이전의 반영 완료 문구를 계속 보여주면 안 됩니다."
);

// 저장 전 변경 건수(dirty) · 저장 실패 사유(failed) · 부분 저장(failed) 은 하단바에 텍스트로 보인다.
for (const [saveState, message] of [
  ["dirty", "저장 전 변경 2건"],
  ["dirty", "수업일지 · 저장 완료 · 이후 변경 저장 필요 · 저장 전 변경 1건"],
  ["failed", "수업일지 · 저장 실패 · 서버 오류 · 저장 전 변경 1건"],
  ["failed", "수업일지 · 부분 저장 · 수업기록 · 저장 실패 · 숙제 저장 실패"]
]) {
  const model = createLessonJournalSaveBarModel({
    hasDraftChanges: true,
    isEditMode: true,
    manualSaveMessage: message,
    message,
    saveState
  });
  assert.equal(model.showMessage, true, `${saveState} 메시지는 하단바에 보여야 합니다: ${message}`);
  assert.equal(model.message, message);
}
for (const [saveState, message] of [
  ["saving", "수업일지 · 저장 중"],
  ["saved", "수업일지 · 저장 완료 · 수업기록"],
  ["idle", "수업일지 · 변경 취소"],
  // 기록 상태가 실패로 남은 채 편집을 취소하면 상태는 failed 지만 사유가 없는 안내라 보이지 않는다.
  ["failed", "수업일지 · 변경 취소"],
  // 라벨만 있는 "저장 실패" 는 헤더 pill 과 같은 말이라 보이지 않는다.
  ["failed", "저장 실패"],
  // 초안 없이 기록 상태만 dirty 인 옛 자동저장 경로의 라벨도 카운터가 아니므로 보이지 않는다.
  ["dirty", "저장 대기..."]
]) {
  const model = createLessonJournalSaveBarModel({
    hasDraftChanges: false,
    isEditMode: false,
    manualSaveMessage: message,
    message,
    saveState
  });
  assert.equal(model.showMessage, false, `${saveState} 문구는 헤더 pill 만 보여준다(중복 금지): ${message}`);
}

const appSource = await readAppWithLessonJournalSource(import.meta.url);
const componentSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalSaveBar.jsx", import.meta.url),
  "utf8"
);
const journalStart = appSource.indexOf("function LessonJournalDetail({");
const journalEnd = appSource.indexOf("function CommentComposerModal({", journalStart);
const journalSource = appSource.slice(journalStart, journalEnd);

assert.match(journalSource, /<LessonJournalSaveBar/);
assert.match(journalSource, /hasDraftChanges=\{hasJournalDraftChanges\}/);
assert.match(journalSource, /isEditMode=\{journalEditMode\}/);
assert.match(journalSource, /manualSaveMessage=\{journalManualSaveMessage\}/);
assert.match(journalSource, /onCancelEdit=\{cancelJournalEditMode\}/);
assert.match(journalSource, /onEdit=\{startJournalEditMode\}/);
assert.match(journalSource, /onSave=\{saveJournalDrafts\}/);
assert.match(journalSource, /reservationSyncStatus=\{solapiReservationSyncStatus\}/);
assert.doesNotMatch(journalSource, /className="lessonJournalStickySaveBar"/);

for (const contract of [
  "createLessonJournalSaveBarModel",
  'className="lessonJournalStickySaveBar"',
  'label="수업일지"',
  'className="primaryButton"',
  "disabled={model.buttonDisabled}",
  // 2026-09-14 · 상태 pill 은 헤더 우상단이 그린다(hideStatusPill).
  // 2026-09-19 · 메시지 텍스트는 failed/dirty 일 때만 하단바에 보인다(저장 실패 사유·부분 저장·저장 전 변경 N건).
  "hideStatusPill",
  "message={model.showMessage ? model.message : \"\"}",
  "onClick={isEditMode ? onSave : onEdit}",
  "model.buttonLabel",
  "saveState={model.saveState}",
  // 2026-09-19 · 편집 모드 취소 출구. softButton, primary 왼쪽, 저장 중에는 비활성.
  "{isEditMode ? (",
  'className="softButton"',
  "disabled={model.cancelDisabled}",
  "onClick={onCancelEdit}",
  "편집 취소"
]) {
  assert.ok(componentSource.includes(contract), `missing lesson journal save bar contract: ${contract}`);
}
for (const forbiddenSideEffect of ["fetch(", "postJson", "/api/", "useState", "useEffect"]) {
  assert.ok(!componentSource.includes(forbiddenSideEffect), `lesson journal save bar must stay controlled: ${forbiddenSideEffect}`);
}
// 하단바 순서: [알림톡 예약][편집 취소][편집/변경 저장][⋮]
assert.match(
  componentSource,
  /\{reservationAction\}[\s\S]*편집 취소[\s\S]*className="primaryButton"[\s\S]*<OverflowMenu/
);
assert.equal((componentSource.match(/className="primaryButton"/g) ?? []).length, 1, "하단바의 primaryButton 은 1개");

console.log("lesson journal save bar TARGET/CONTROL fixtures passed");

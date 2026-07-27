import assert from "node:assert/strict";
import {
  createLessonModalFailedSaveState,
  createLessonModalSavedSaveState,
  createLessonModalSavingSaveState,
  createLessonModalValidationFailureSaveState,
  getLessonModalSaveMessageAfterDraftChange,
  getLessonModalSaveStateAfterDraftChange,
  lessonModalInitialSaveMessage
} from "../src/domains/lessons/lessonModalSaveState.js";

assert.equal(
  lessonModalInitialSaveMessage,
  "수정 내용은 저장 버튼을 눌러야 Supabase에 반영됩니다."
);
assert.equal(getLessonModalSaveStateAfterDraftChange("failed"), "dirty");
assert.equal(getLessonModalSaveStateAfterDraftChange("saving"), "saving");
assert.equal(getLessonModalSaveStateAfterDraftChange("saved"), "saved");
assert.equal(
  getLessonModalSaveMessageAfterDraftChange({
    currentMessage: "서버 오류",
    saveState: "failed"
  }),
  "입력 내용을 수정했습니다. 저장 버튼을 다시 눌러 주세요."
);
assert.equal(
  getLessonModalSaveMessageAfterDraftChange({
    currentMessage: "수업일지 저장 완료",
    saveState: "saved"
  }),
  "수업일지 저장 완료"
);

assert.deepEqual(
  createLessonModalValidationFailureSaveState("수업 날짜를 입력해 주세요."),
  {
    message: "수업 날짜를 입력해 주세요.",
    state: "failed"
  }
);
assert.deepEqual(
  createLessonModalSavingSaveState({
    closureMakeupEnabled: true,
    lessonType: "closure"
  }),
  {
    message: "휴강과 연결 보충 수업일지 저장 중",
    state: "saving"
  }
);
assert.deepEqual(
  createLessonModalSavingSaveState({
    closureMakeupEnabled: true,
    lessonType: "class"
  }),
  {
    message: "수업일지 저장 중",
    state: "saving"
  }
);
assert.deepEqual(createLessonModalSavedSaveState({ message: "서버 재조회 완료" }), {
  message: "서버 재조회 완료",
  state: "saved"
});
assert.deepEqual(createLessonModalSavedSaveState(null), {
  message: "수업일지 저장 완료",
  state: "saved"
});
assert.deepEqual(createLessonModalFailedSaveState(new Error("네트워크 오류")), {
  message: "저장 실패 · 네트워크 오류",
  state: "failed"
});
assert.deepEqual(createLessonModalFailedSaveState(null), {
  message: "저장 실패 · 입력 내용은 그대로 유지됩니다.",
  state: "failed"
});

console.log("lesson modal local save-state transitions passed");

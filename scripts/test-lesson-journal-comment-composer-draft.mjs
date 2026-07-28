import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createLessonJournalCommentDraftSnapshot,
  getLessonJournalCommentAiTransitionDraft,
  hasLessonJournalCommentDraftChange
} from "../src/domains/lessons/useLessonJournalCommentComposerDraft.js";

assert.deepEqual(
  createLessonJournalCommentDraftSnapshot({
    aiStatus: "AI 완료",
    comment: "저장 문구 CONTROL",
    initialCommentDraft: "가져온 메모 TARGET"
  }),
  {
    draftComment: "가져온 메모 TARGET",
    draftSaveState: "idle",
    localAiStatus: "AI 완료"
  }
);
assert.deepEqual(
  createLessonJournalCommentDraftSnapshot({
    comment: "저장 문구 TARGET"
  }),
  {
    draftComment: "저장 문구 TARGET",
    draftSaveState: "idle",
    localAiStatus: "AI 대기"
  }
);

assert.equal(
  getLessonJournalCommentAiTransitionDraft({
    aiStatus: "완료 · openai",
    field: "teacherComment",
    previousAiStatus: "AI 수정 중",
    record: { teacherComment: "AI 결과 TARGET" }
  }),
  "AI 결과 TARGET"
);
for (const control of [
  {
    aiStatus: "AI 수정 중",
    previousAiStatus: "AI 수정 중"
  },
  {
    aiStatus: "완료 · openai",
    previousAiStatus: "AI 대기"
  },
  {
    aiStatus: "",
    previousAiStatus: "AI 수정 중"
  }
]) {
  assert.equal(
    getLessonJournalCommentAiTransitionDraft({
      ...control,
      field: "studentComment",
      record: { studentComment: "CONTROL 문구" }
    }),
    null
  );
}

assert.equal(
  hasLessonJournalCommentDraftChange({
    draftComment: "수정 TARGET",
    lastSavedDraft: "저장 CONTROL"
  }),
  true
);
assert.equal(
  hasLessonJournalCommentDraftChange({
    draftComment: "동일 CONTROL",
    lastSavedDraft: "동일 CONTROL"
  }),
  false
);

const modalSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalCommentComposer.jsx", import.meta.url),
  "utf8"
);
const hookSource = await readFile(
  new URL("../src/domains/lessons/useLessonJournalCommentComposerDraft.js", import.meta.url),
  "utf8"
);

for (const hookBinding of [
  "useLessonJournalCommentComposerDraft({",
  "aiStatus,",
  "audience,",
  "comment,",
  "field,",
  "initialCommentDraft,",
  "record,",
  "studentId: student.studentId",
  "markDraftSaved(draftComment)",
  "onToggleSource={toggleSource}"
]) {
  assert.ok(modalSource.includes(hookBinding), `missing comment draft hook binding: ${hookBinding}`);
}
for (const retainedAction of [
  "async function handlePolishClick()",
  "async function handleSaveDraftClick()",
  "function handleSendClick()",
  "requestPolish: onPolishComment",
  "saveRecord: onSaveRecord",
  "onSendComment("
]) {
  assert.ok(modalSource.includes(retainedAction), `comment action must remain in the domain shell: ${retainedAction}`);
}
for (const removedLocalState of [
  "const [isSourceOpen, setIsSourceOpen]",
  "const [draftComment, setDraftComment]",
  "const lastSavedDraftRef = useRef",
  "const previousAiStatusRef = useRef"
]) {
  assert.ok(
    !modalSource.includes(removedLocalState),
    `CommentComposerModal must not retain extracted local state: ${removedLocalState}`
  );
}
for (const hookContract of [
  "createLessonJournalCommentDraftSnapshot",
  "getLessonJournalCommentAiTransitionDraft",
  "hasLessonJournalCommentDraftChange",
  "useLessonJournalCommentComposerDraft",
  "lastSavedDraftRef.current = nextComment",
  "previousAiStatusRef.current = aiStatus",
  "markDraftSaved",
  "toggleSource"
]) {
  assert.ok(hookSource.includes(hookContract), `missing comment draft hook contract: ${hookContract}`);
}
for (const forbiddenSideEffect of [
  "fetch(",
  "postJson",
  "/api/",
  "notification_jobs",
  "Solapi",
  "onPolishComment",
  "onSaveRecord",
  "onSendComment"
]) {
  assert.ok(
    !hookSource.includes(forbiddenSideEffect),
    `comment draft hook must not own external side effects: ${forbiddenSideEffect}`
  );
}

console.log("lesson journal comment draft TARGET/CONTROL fixtures passed");

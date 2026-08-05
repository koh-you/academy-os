import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const actionsSource = await readFile(
  new URL("../src/domains/lessons/LessonModalActions.jsx", import.meta.url),
  "utf8"
);
const modalSource = await readFile(
  new URL("../src/domains/lessons/LessonModal.jsx", import.meta.url),
  "utf8"
);

for (const requiredSource of [
  "export function LessonModalActions({",
  "InlineSaveStatus",
  'label="수업일지"',
  "saveState={saveState}",
  "{saveMessage}",
  '"저장 중..."',
  '"✅ 저장 완료"',
  '"수업 수정 저장"',
  '"휴강 · 보충 수업일지 등록"',
  '"수업 등록"',
  "disabled={isSaving || isSaved}",
  "onClick={onSave}",
  "onClick={onClose}",
  'isSaved ? "달력에서 확인" : "취소"'
]) {
  assert.ok(
    actionsSource.includes(requiredSource),
    `lesson modal actions must preserve ${requiredSource}`
  );
}

for (const forbiddenSource of [
  "useState",
  "useEffect",
  "fetch(",
  "postJson",
  "apiUrl",
  "supabase",
  "notification_jobs",
  "Solapi"
]) {
  assert.equal(
    actionsSource.includes(forbiddenSource),
    false,
    `lesson modal actions must stay controlled without ${forbiddenSource}`
  );
}

assert.ok(
  modalSource.includes(
    'import { LessonModalActions } from "./LessonModalActions.jsx";'
  ),
  "LessonModal must import the controlled modal actions"
);
assert.ok(
  modalSource.includes("<LessonModalActions"),
  "LessonModal must render the controlled modal actions"
);
for (const modalOwnedSource of [
  "onSave={submitLesson}",
  "onClose={onClose}",
  "saveMessage={saveMessage}",
  "saveState={saveState}",
  "isSaving={isSaving}",
  "isSaved={isSaved}"
]) {
  assert.ok(
    modalSource.includes(modalOwnedSource),
    `LessonModal must retain local save-state ownership through ${modalOwnedSource}`
  );
}

assert.ok(appSource.includes('import("../domains/lessons/LessonModal.jsx")'));

console.log("lesson modal actions controlled boundary passed");

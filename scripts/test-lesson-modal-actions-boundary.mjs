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
  appSource.includes(
    'import { LessonModalActions } from "../domains/lessons/LessonModalActions.jsx";'
  ),
  "App must import the extracted modal actions"
);
assert.ok(
  appSource.includes("<LessonModalActions"),
  "App must render the extracted modal actions"
);
for (const appOwnedSource of [
  "onSave={submitLesson}",
  "onClose={onClose}",
  "saveMessage={saveMessage}",
  "saveState={saveState}",
  "isSaving={isSaving}",
  "isSaved={isSaved}"
]) {
  assert.ok(
    appSource.includes(appOwnedSource),
    `App must retain save ownership through ${appOwnedSource}`
  );
}

console.log("lesson modal actions controlled boundary passed");

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
  // 2026-09-19 · 이 모달은 수업 일정(lessons)을 저장하므로 라벨을 '수업 일정' 으로 바꿨다(수업일지=학생 기록과 구분).
  'label="수업 일정"',
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
  'isSaved ? "달력에서 확인" : "취소"',
  // 2026-09-26(검증 반영) · 명단 안내는 저장 검증과 같은 순수 모델에서 나온다(문구가 갈라지지 않는다).
  'import { getLessonModalRosterNotice } from "./lessonModalDraftModel.js";',
  "const emptyRosterNotice = getLessonModalRosterNotice({",
  "lessonType,",
  "saveState,",
  "selectedStudentCount"
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
  "Solapi",
  // 명단 안내 문구를 이 컴포넌트가 직접 들고 있으면 검증 규칙과 다시 갈라진다.
  "포함 학생 0명으로 저장됩니다.",
  "학생을 1명 이상 선택해야 저장됩니다."
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

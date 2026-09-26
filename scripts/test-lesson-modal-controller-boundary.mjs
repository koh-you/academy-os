import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const modalSource = await readFile(
  new URL("../src/domains/lessons/LessonModal.jsx", import.meta.url),
  "utf8"
);
const controllerStart = modalSource.indexOf("export function LessonModal({");
const controllerEnd = modalSource.length;

assert.ok(controllerStart >= 0, "lesson domain must own the LessonModal local controller");
assert.ok(
  controllerEnd > controllerStart,
  "LessonModal controller boundary must remain readable"
);

const controllerSource = modalSource.slice(controllerStart, controllerEnd);

assert.ok(
  appSource.includes('import("../domains/lessons/LessonModal.jsx")'),
  "App must lazy-load the extracted LessonModal controller"
);
assert.equal(
  appSource.includes("function LessonModal("),
  false,
  "App must not retain a duplicate LessonModal controller"
);

for (const requiredSource of [
  "useState",
  "useEffect",
  "createLessonModalInitialDraft",
  "createLessonModalStudentSelectionModel",
  "createLessonModalTemplateChangePatch",
  "getLessonModalValidationError",
  "createLessonModalSubmitPayload",
  "getLessonClosureBlockingNotificationJobs",
  "await onSubmit(",
  // 2026-09-26(검증 반영) · 신규 등록은 반을 고르지 않은 상태로 연다(목록 첫 반을 미리 선택하지 않는다).
  // 미리 선택해 두면 「반 불러오기」가 첫 반에서 죽은 컨트롤이 되고 저장 payload 가 고르지 않은 반을 참칭한다.
  'useState(initialLesson?.classTemplateId || "")',
  "isEditingExistingLesson",
  "<LessonModalBasics",
  "<LessonModalClosurePanel",
  "<LessonModalStudentPicker",
  "<LessonModalActions"
]) {
  assert.ok(
    controllerSource.includes(requiredSource),
    `local controller must preserve ${requiredSource}`
  );
}

for (const forbiddenSource of [
  "fetch(",
  "postJson",
  "apiUrl",
  "/api/",
  "supabase",
  "notification_jobs",
  "Solapi",
  "localStorage",
  'normalizedTemplates[0]?.classTemplateId || ""'
]) {
  assert.equal(
    controllerSource.includes(forbiddenSource),
    false,
    `local controller must not own external persistence through ${forbiddenSource}`
  );
}

assert.equal(
  controllerSource.includes("<input"),
  false,
  "field inputs must remain in extracted controlled components"
);
assert.equal(
  controllerSource.includes("<button"),
  false,
  "modal buttons must remain in extracted controlled components"
);

console.log("lesson modal controller closeout boundary passed");

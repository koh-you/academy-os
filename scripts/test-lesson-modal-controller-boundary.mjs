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
  "localStorage"
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

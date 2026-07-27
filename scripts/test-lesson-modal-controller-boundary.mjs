import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const appSource = await readFile(
  new URL("../src/app/App.jsx", import.meta.url),
  "utf8"
);
const controllerStart = appSource.indexOf("function LessonModal({");
const controllerEnd = appSource.indexOf(
  "\nfunction parseCsvRows",
  controllerStart
);

assert.ok(controllerStart >= 0, "App must retain the LessonModal local controller");
assert.ok(
  controllerEnd > controllerStart,
  "LessonModal controller boundary must end before parseCsvRows"
);

const controllerSource = appSource.slice(controllerStart, controllerEnd);

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

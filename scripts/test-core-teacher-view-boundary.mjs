import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, outletSource, registrySource, examSource, settingsSource, evaluationSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/exams/ExamPrepCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/settings/SettingsCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/EvaluationCenter.jsx", import.meta.url), "utf8")
]);

for (const [name, source, modulePath] of [
  ["ExamPrepCenter", examSource, "../domains/exams/ExamPrepCenter.jsx"],
  ["SettingsCenter", settingsSource, "../domains/settings/SettingsCenter.jsx"]
]) {
  assert.equal(source.includes(`export function ${name}(`), true);
  assert.equal(appSource.includes(`function ${name}(`), false);
  assert.equal(registrySource.includes(`() => import("${modulePath}")`), true);
}
assert.equal(evaluationSource.includes("export function EvaluationCenter("), true);
assert.equal(appSource.includes('import { EvaluationCenter } from "../domains/teacher/EvaluationCenter.jsx";'), true);

function readRuntimeKeys(name) {
  const match = appSource.match(new RegExp(`const ${name} = Object\\.freeze\\(\\{([\\s\\S]*?)\\n\\}\\);`));
  assert.ok(match, `${name} must remain App-owned`);
  return match[1].split(",").map((value) => value.trim()).filter(Boolean).sort();
}

assert.deepEqual(readRuntimeKeys("examPrepCenterRuntime"), [
  "buildExamPostTargetsForStudent", "buildTallySubmission", "createMathExamEntry", "currentExamCycle",
  "dedupeExamPrepRowsForDisplay", "defaultAiSettings", "examCycleLabel", "examPrepAutosaveRisk",
  "formatKoreanDateTime", "formatMathExamEntryLabel", "formatShortDate", "getAiPrompt",
  "getExamPrepSchoolGradeKey", "getStudentSchoolGradeKey", "gradeMatchesStudent",
  "normalizeMathExamEntries", "parseCsvRows", "safeIdPart", "schoolMatchesStudent",
  "summarizeTallySubmissions", "syncPrimaryMathExamDate", "today"
].sort());
assert.deepEqual(readRuntimeKeys("settingsCenterRuntime"), [
  "appStateAutosaveRisk", "buildNotificationTemplatePreview", "defaultAiPrompts", "defaultAiSettings",
  "defaultNotificationTemplates", "defaultTeacherAccountSettings", "getKoreaDateString",
  "normalizeAiPrompts", "normalizeAiSettings", "normalizeNotificationTemplates",
  "notificationTemplateRows", "postJson"
].sort());

assert.equal(outletSource.includes("runtime: runtimeBindings.examPrepCenter"), true);
assert.equal(outletSource.includes("runtime: runtimeBindings.settingsCenter"), true);
assert.equal(settingsSource.includes("const { buildNotificationTemplatePreview, getKoreaDateString, postJson } = runtime;"), true);
assert.equal(settingsSource.includes('from "../../app/apiClient.js"'), false);
for (const source of [examSource, settingsSource, evaluationSource]) {
  assert.equal(source.includes('from "../../app/App.jsx"'), false);
  assert.equal(source.includes('from "../../app/TeacherViewOutlet.js"'), false);
  assert.equal(source.includes("localStorage"), false);
  assert.equal(source.includes("Solapi"), false);
}
for (const forbidden of ["fetch(", "postJson", "/api/"]) {
  assert.equal(examSource.includes(forbidden), false, `exam prep screen must not own ${forbidden}`);
}
assert.equal(settingsSource.includes("const result = await postJson(endpoint, basePayload)"), true);
assert.equal(settingsSource.includes('await postJson("/api/auth/teacher-account"'), true);

console.log("exam prep, settings, evaluation, runtime transport, and lazy boundary fixtures passed");

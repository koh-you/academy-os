import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [appSource, componentSource, lazyViewSource, outletSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/exams/ExamAnalysisPipelineCenter.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8")
]);

const runtimeNames = [
  "confirmExamAnalysisQuestionCountRequest",
  "deleteExamAnalysisRunRequest",
  "deleteExamAnalysisSourceRequest",
  "detectExamAnalysisQuestionBoundariesRequest",
  "extractExamAnalysisSourceRequest",
  "fetchExamAnalysisSsenTypesRequest",
  "fillExamAnalysisQuestionRowsRequest",
  "formatKoreaTimeLabel",
  "generateExamAnalysisOutputDraftRequest",
  "refineExamAnalysisQuestionRowsRequest",
  "saveExamAnalysisOutputDraftsRequest",
  "saveExamAnalysisQuestionReviewsRequest",
  "verifyExamAnalysisSourceWithAiRequest"
];

assert.equal(appSource.includes("function ExamAnalysisPipelineCenter("), false);
assert.equal(appSource.includes("function ExamAnalysisOutputDraftPanel("), false);
assert.equal(componentSource.includes("export function ExamAnalysisPipelineCenter({ examPrepRows = [], runtime })"), true);
assert.equal(componentSource.includes("function ExamAnalysisOutputDraftPanel("), true);
assert.equal(lazyViewSource.includes('import("../domains/exams/ExamAnalysisPipelineCenter.jsx")'), true);
assert.equal(outletSource.includes("runtime: runtimeBindings.examAnalysisPipeline"), true);

const appRuntimeStart = appSource.indexOf("const examAnalysisPipelineRuntime = Object.freeze({");
const appRuntimeEnd = appSource.indexOf("\n});", appRuntimeStart);
const appRuntimeSource = appSource.slice(appRuntimeStart, appRuntimeEnd);
const componentRuntimeStart = componentSource.indexOf("  const {");
const componentRuntimeEnd = componentSource.indexOf("\n  } = runtime;", componentRuntimeStart);
const componentRuntimeSource = componentSource.slice(componentRuntimeStart, componentRuntimeEnd);
for (const runtimeName of runtimeNames) {
  assert.equal(appRuntimeSource.includes(runtimeName), true, `App runtime must retain ${runtimeName}`);
  assert.equal(componentRuntimeSource.includes(runtimeName), true, `screen runtime must receive ${runtimeName}`);
  assert.equal(
    appSource.includes(`function ${runtimeName}(`),
    runtimeName === "formatKoreaTimeLabel" || runtimeName.endsWith("Request"),
    `${runtimeName} owner must stay in App`
  );
}

for (const forbiddenImport of ["../../app/App", "../app/App", "TeacherViewOutlet"]) {
  assert.equal(componentSource.includes(forbiddenImport), false, `exam screen must not import ${forbiddenImport}`);
}
for (const requestName of runtimeNames.filter((name) => name.endsWith("Request"))) {
  assert.equal(componentSource.includes(`function ${requestName}(`), false, `${requestName} implementation must stay in App`);
}
assert.equal(componentSource.includes('getJsonWithTimeout("/api/exam-analysis-runs"'), true);
assert.equal(componentSource.includes('postJson("/api/exam-analysis-runs"'), true);
assert.equal(componentSource.includes("readFileAsDataUrl(file)"), true);
assert.equal(componentSource.includes("getExamAnalysisReviewSaveMismatches"), true);
assert.equal(componentSource.includes("getExamAnalysisOutputSaveMismatches"), true);
assert.equal(componentSource.includes("Supabase 재조회 값이 문항 검수 요청과 다릅니다"), true);
assert.equal(componentSource.includes("Supabase 재조회 값이 산출물 저장 요청과 다릅니다"), true);

console.log("exam analysis pipeline screen, request owner, and lazy boundary fixtures passed");

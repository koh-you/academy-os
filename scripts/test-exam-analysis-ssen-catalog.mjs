import assert from "node:assert/strict";
import {
  formatSsenTypeCandidatesForPrompt,
  getExamAnalysisSsenSubject,
  getSsenTypeCatalogForExamAnalysis,
  getSsenTypesForExamAnalysis,
  sanitizeExamAnalysisSubject
} from "../src/shared/server/examAnalysisSsenCatalog.js";

assert.equal(sanitizeExamAnalysisSubject("공수1"), "공통수학1");
assert.equal(sanitizeExamAnalysisSubject("수학"), "");

const subjectTypes = getSsenTypesForExamAnalysis({ analysisRun: { subject: "공통수학1" } });
assert.equal(subjectTypes.subject, "공통수학1");
assert.equal(subjectTypes.types.length, 179);
assert.equal(subjectTypes.types[0].typeCode, "SSEN-CM1-01-01");

assert.equal(getExamAnalysisSsenSubject({
  analysisRun: { subject: "수학" },
  questions: [{ finalFields: { mainTypeCode: "SSEN-CM1-01-01" } }]
}), "공통수학1");

const scopedCatalog = getSsenTypeCatalogForExamAnalysis({ subject: "공통수학1", scope: "다항식" });
assert.equal(scopedCatalog.status, "scope_matched");
assert.ok(scopedCatalog.scopeMatchedCount > 0);
assert.ok(scopedCatalog.types.every((row) => row.partName === "다항식"));

const promptCandidates = formatSsenTypeCandidatesForPrompt(subjectTypes.types);
assert.match(promptCandidates, /^SSEN-CM1-01-01 \| 다항식의 연산 \| 다항식의 덧셈과 뺄셈/m);
assert.equal(promptCandidates.split("\n").length, 179);

console.log("exam analysis Ssen catalog passed · subject inference, type-code fallback, scope matching, prompt formatting");

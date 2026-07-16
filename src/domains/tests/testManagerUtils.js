import { testPaperKindOptions } from "../../app/appConfig.js";
import { safeIdPart } from "../../shared/utils/id.js";

export function getTestPaperKindLabel(value = "") {
  return testPaperKindOptions.find((option) => option.id === value)?.label ?? "데일리";
}

export function createTestSessionIdForPaper({
  classTemplateId = "",
  problemBookId = "",
  subject = "",
  testDate = "",
  testKind = "",
  testTitle = ""
} = {}) {
  const sourceKey = problemBookId || [testKind, subject, testTitle].filter(Boolean).join("_");
  return `test_session_${safeIdPart(testDate || "date")}_${safeIdPart(classTemplateId || "all")}_${safeIdPart(sourceKey || "test")}`;
}

export function createTestAttemptId(testSessionId = "", studentId = "") {
  return `test_attempt_${safeIdPart(testSessionId)}_${safeIdPart(studentId)}`;
}

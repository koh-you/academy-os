function requireFunction(value, name) {
  if (typeof value !== "function") {
    throw new Error(`${name} helper가 필요합니다.`);
  }
  return value;
}

export async function uploadExamAnalysisSourceFile(file, analysis, options = {}) {
  const readFileAsDataUrl = requireFunction(options.readFileAsDataUrl, "readFileAsDataUrl");
  const postJson = requireFunction(options.postJson, "postJson");
  const dataUrl = await readFileAsDataUrl(file);
  const result = await postJson("/api/exam-analysis-sources", {
    dataUrl,
    fileName: file.name,
    fileType: file.type,
    analysisId: analysis.examAnalysisId,
    schoolName: analysis.schoolName,
    grade: analysis.grade,
    subject: analysis.subject,
    examName: analysis.examName,
    examDate: analysis.examDate
  });
  return result.file;
}

export async function requestExamQuestionCropDraft(payload, options = {}) {
  const postJson = requireFunction(options.postJson, "postJson");
  const result = await postJson("/api/ai/exam-question-crops", payload);
  return result.result;
}

export async function requestExamQuestionInfoTextDraft(payload, options = {}) {
  const postJson = requireFunction(options.postJson, "postJson");
  const result = await postJson("/api/ai/exam-question-info-text", payload);
  return result.result;
}

export async function requestExamQuestionClassificationDraft(payload, options = {}) {
  const postJson = requireFunction(options.postJson, "postJson");
  const result = await postJson("/api/ai/exam-question-classification", payload);
  return result.result;
}

export function getExamAnalysisSourceOpenUrl(file, options = {}) {
  const apiUrl = requireFunction(options.apiUrl, "apiUrl");
  if (file?.storagePath) {
    return apiUrl(`/api/exam-analysis-sources/open?bucket=${encodeURIComponent(file.bucketId || "exam-analysis-sources")}&path=${encodeURIComponent(file.storagePath)}`);
  }
  return file?.signedUrl || "";
}

export function getExamAnalysisSourceRenderUrl(file, options = {}) {
  const apiUrl = requireFunction(options.apiUrl, "apiUrl");
  if (!file?.storagePath) return file?.signedUrl || "";
  return apiUrl(`/api/exam-analysis-sources/file?bucket=${encodeURIComponent(file.bucketId || "exam-analysis-sources")}&path=${encodeURIComponent(file.storagePath)}`);
}

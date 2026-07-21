import { apiUrl, postJson, postJsonWithHeaders } from "../../shared/utils/apiClient.js";
import { readFileAsDataUrl } from "../../shared/utils/file.js";

function requireStudentSession(sessionToken) {
  if (!sessionToken) throw new Error("학생 로그인 정보가 필요합니다.");
}

export function getExamPostFileOpenUrl(file) {
  if (file?.signedUrl) return file.signedUrl;
  if (!file?.storagePath) return "";
  return apiUrl(`/api/exam-post-files/open?bucket=${encodeURIComponent(file.bucketId || "exam-submissions")}&path=${encodeURIComponent(file.storagePath)}`);
}

export async function uploadStudentExamPostFile(sessionToken, file, target) {
  requireStudentSession(sessionToken);
  if (!file || !target?.targetId || !target?.examPrepId) {
    throw new Error("업로드할 시험지 파일 또는 제출 대상을 찾지 못했습니다.");
  }
  const dataUrl = await readFileAsDataUrl(file);
  const result = await postJsonWithHeaders(
    "/api/exam-post-files",
    {
      dataUrl,
      examPrepId: target.examPrepId,
      fileName: file.name,
      targetId: target.targetId
    },
    { Authorization: `Bearer ${sessionToken}` }
  );
  if (!result?.file?.storagePath) throw new Error("업로드된 시험지 파일을 확인하지 못했습니다.");
  return result.file;
}

export async function cleanupStudentExamPostFiles(sessionToken, target, attachments = []) {
  requireStudentSession(sessionToken);
  if (!target?.targetId || !target?.examPrepId) throw new Error("정리할 제출 대상을 찾지 못했습니다.");
  if (!attachments.length) return { cleaned: true, results: [] };
  return postJsonWithHeaders(
    "/api/exam-post-files/cleanup",
    {
      attachments,
      examPrepId: target.examPrepId,
      targetId: target.targetId
    },
    { Authorization: `Bearer ${sessionToken}` }
  );
}

export async function saveStudentExamPostSubmission(sessionToken, target, values, fileAttachments) {
  requireStudentSession(sessionToken);
  if (!target?.targetId || !target?.examPrepId) throw new Error("저장할 제출 대상을 찾지 못했습니다.");
  const result = await postJsonWithHeaders(
    "/api/portal-exam-post-submissions",
    {
      examPrepId: target.examPrepId,
      fileAttachments,
      targetId: target.targetId,
      values
    },
    { Authorization: `Bearer ${sessionToken}` }
  );
  if (!result?.verified || !result?.submission || !Array.isArray(result?.submissions)) {
    throw new Error("Supabase 시험 후 제출 상태를 확인하지 못했습니다.");
  }
  return {
    submission: result.submission,
    submissions: result.submissions
  };
}

export async function confirmTeacherExamPostSubmission(submissionId, teacherConfirmed) {
  if (!submissionId) throw new Error("확인할 시험 후 제출을 찾지 못했습니다.");
  const result = await postJson("/api/exam-post-submissions/confirm", { submissionId, teacherConfirmed });
  if (!result?.verified || !result?.submission || !Array.isArray(result?.submissions)) {
    throw new Error("Supabase 시험 후 제출 확인 상태를 검증하지 못했습니다.");
  }
  return {
    submission: result.submission,
    submissions: result.submissions
  };
}

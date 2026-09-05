// 시험지 파일(문제/정답 PDF) Supabase Storage 참조 모델. 순수 함수만 둔다.
//
// problem_books/resource_materials 처럼 DB row로 관리하지 않는다. 시험지 목록 항목은
// app_state 의 testPaperLibrary 배열에 저장되고, 이 파일이 만드는 참조 문자열
// (`test-paper-storage://...`)이 그 항목의 questionFileUrl/answerFileUrl 값이 된다.

export const testPaperStorageBucket = "test-papers";
export const testPaperStorageMaxBytes = 20 * 1024 * 1024;
export const testPaperStorageAllowedMimeTypes = Object.freeze(["application/pdf"]);

export function sanitizeTestPaperStorageSegment(value, fallback = "file") {
  const sanitized = String(value ?? "")
    .trim()
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/\.\.+/g, ".")
    .replace(/-+/g, "-")
    .replace(/^[.-]+|[.-]+$/g, "");
  return sanitized || fallback;
}

export function getTestPaperFileExtension(fileName = "") {
  return String(fileName).trim().match(/\.([A-Za-z0-9]{1,12})$/)?.[1]?.toLowerCase() ?? "";
}

export function validateTestPaperFile({ fileName = "", mimeType = "", size = 0 } = {}) {
  const extension = getTestPaperFileExtension(fileName);
  if (!fileName || extension !== "pdf") {
    throw new Error("시험지 파일은 PDF만 등록할 수 있습니다.");
  }
  if (!testPaperStorageAllowedMimeTypes.includes(mimeType)) {
    throw new Error("시험지 파일 형식을 확인할 수 없습니다. PDF 파일을 선택해 주세요.");
  }
  if (!Number.isFinite(size) || size <= 0) throw new Error("비어 있는 시험지 파일은 등록할 수 없습니다.");
  if (size > testPaperStorageMaxBytes) throw new Error("시험지 파일은 20MB 이하만 등록할 수 있습니다.");
  return { extension, fileName: String(fileName).trim(), mimeType, size };
}

export function createTestPaperStoragePath({ digest, fileName } = {}) {
  const extension = getTestPaperFileExtension(fileName) || "pdf";
  return `${sanitizeTestPaperStorageSegment(digest, "file")}.${extension}`;
}

export function createTestPaperStorageReference({ bucketId = testPaperStorageBucket, storagePath = "" } = {}) {
  if (!storagePath) throw new Error("시험지 파일 Storage 경로가 필요합니다.");
  return `test-paper-storage://${sanitizeTestPaperStorageSegment(bucketId, testPaperStorageBucket)}/${storagePath}`;
}

export function parseTestPaperStorageReference(value = "") {
  const match = String(value).match(/^test-paper-storage:\/\/([^/]+)\/(.+)$/);
  if (!match) return null;
  const bucketId = match[1];
  const storagePath = match[2];
  if (!bucketId || !storagePath || storagePath.includes("..")) return null;
  return { bucketId, storagePath };
}

export function isExternalTestPaperFileUrl(value = "") {
  return /^https?:\/\//i.test(String(value).trim());
}

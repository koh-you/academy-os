export const resourceMaterialStorageBucket = "resource-materials";
export const resourceMaterialStorageMaxBytes = 20 * 1024 * 1024;

export const resourceMaterialStorageAllowedMimeTypes = Object.freeze([
  "application/haansofthwp",
  "application/haansofthwpx",
  "application/octet-stream",
  "application/pdf",
  "application/vnd.hancom.hwp",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/x-hwp",
  "image/heic",
  "image/jpeg",
  "image/png",
  "image/webp",
  "text/plain"
]);

const allowedExtensions = new Set([
  "docx",
  "heic",
  "hwp",
  "hwpx",
  "jpeg",
  "jpg",
  "pdf",
  "png",
  "pptx",
  "txt",
  "webp",
  "xlsx"
]);

export function sanitizeResourceMaterialStorageSegment(value, fallback = "unknown") {
  const sanitized = String(value ?? "")
    .trim()
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/\.\.+/g, ".")
    .replace(/-+/g, "-")
    .replace(/^[.-]+|[.-]+$/g, "");
  return sanitized || fallback;
}

export function getResourceMaterialFileExtension(fileName = "") {
  return String(fileName).trim().match(/\.([A-Za-z0-9]{1,12})$/)?.[1]?.toLowerCase() ?? "";
}

export function validateResourceMaterialFile({ fileName = "", mimeType = "", size = 0 } = {}) {
  const extension = getResourceMaterialFileExtension(fileName);
  if (!fileName || !allowedExtensions.has(extension)) {
    throw new Error("자료 파일은 PDF, 이미지, TXT, HWP/HWPX 또는 Office 문서만 등록할 수 있습니다.");
  }
  if (!resourceMaterialStorageAllowedMimeTypes.includes(mimeType)) {
    throw new Error("자료 파일 형식을 확인할 수 없습니다. 지원되는 문서 또는 이미지 파일을 선택해 주세요.");
  }
  if (!Number.isFinite(size) || size <= 0) throw new Error("비어 있는 자료 파일은 등록할 수 없습니다.");
  if (size > resourceMaterialStorageMaxBytes) throw new Error("자료 파일은 20MB 이하만 등록할 수 있습니다.");
  return { extension, fileName: String(fileName).trim(), mimeType, size };
}

export function createResourceMaterialStoragePath({ createdAt, digest, fileName, materialId } = {}) {
  const extension = getResourceMaterialFileExtension(fileName) || "bin";
  return [
    sanitizeResourceMaterialStorageSegment(materialId, "material"),
    sanitizeResourceMaterialStorageSegment(createdAt, "draft"),
    `${sanitizeResourceMaterialStorageSegment(digest, "content")}.${extension}`
  ].join("/");
}

export function createResourceMaterialStorageReference({ bucketId = resourceMaterialStorageBucket, storagePath = "" } = {}) {
  if (!storagePath) throw new Error("자료 파일 Storage 경로가 필요합니다.");
  return `resource-storage://${sanitizeResourceMaterialStorageSegment(bucketId, resourceMaterialStorageBucket)}/${storagePath}`;
}

export function parseResourceMaterialStorageReference(value = "") {
  const match = String(value).match(/^resource-storage:\/\/([^/]+)\/(.+)$/);
  if (!match) return null;
  const bucketId = match[1];
  const storagePath = match[2];
  if (!bucketId || !storagePath || storagePath.includes("..")) return null;
  return { bucketId, storagePath };
}

export function isExternalResourceMaterialUrl(value = "") {
  return /^https?:\/\//i.test(String(value).trim());
}

export function canPortalSessionAccessResourceMaterial(material = {}, student = {}, role = "student") {
  const visibility = material.visibility ?? "student";
  const audienceAllowed = visibility === "both" || visibility === role;
  const classTemplateIds = material.classTemplateIds ?? (material.classTemplateId ? [material.classTemplateId] : []);
  const studentAllowed =
    !material.studentIds?.length ||
    material.studentIds.includes(student.studentId) ||
    (classTemplateIds.length > 0 && classTemplateIds.includes(student.defaultClassTemplateId));
  return Boolean(audienceAllowed && studentAllowed);
}

const persistedFields = Object.freeze([
  "materialId",
  "title",
  "materialType",
  "subject",
  "description",
  "fileUrl",
  "fileName",
  "studentIds",
  "classTemplateIds",
  "visibility",
  "notifyByAlimtalk",
  "createdBy",
  "createdAt"
]);

function normalizeComparableValue(value) {
  if (value == null) return "";
  if (Array.isArray(value)) return JSON.stringify([...value].map(String).sort());
  return String(value);
}

function getComparableField(material, field) {
  if (field === "materialId") return material.materialId ?? material.resourceMaterialId ?? "";
  if (field === "materialType") return material.materialType ?? "link";
  if (field === "fileUrl") return material.fileUrl ?? material.url ?? "";
  if (field === "fileName") return material.fileName ?? material.content ?? "";
  if (field === "studentIds") return material.studentIds ?? [];
  if (field === "classTemplateIds") {
    return material.classTemplateIds ?? (material.classTemplateId ? [material.classTemplateId] : []);
  }
  if (field === "visibility") return material.visibility ?? "teacher";
  if (field === "notifyByAlimtalk") return Boolean(material.notifyByAlimtalk);
  return material[field] ?? "";
}

export function createResourceMaterialDraftId({ now = Date.now, randomUUID } = {}) {
  const uuid = typeof randomUUID === "function" ? String(randomUUID()).trim() : "";
  return `resource_${uuid || now()}`;
}

export function createResourceMaterialVersionFilter(materialId, expectedUpdatedAt) {
  return [
    `resource_material_id=eq.${encodeURIComponent(materialId)}`,
    `updated_at=eq.${encodeURIComponent(expectedUpdatedAt)}`
  ].join("&");
}

export function isResourceMaterialInsertConflict(error) {
  const message = String(error?.message ?? "").toLowerCase();
  return message.includes("23505") || message.includes("duplicate key") || message.includes("unique constraint");
}

export function createResourceMaterialConflict(materialId, currentMaterial = null, reason = "updated") {
  const reasonMessage = reason === "deleted"
    ? "다른 화면에서 먼저 삭제되었습니다."
    : reason === "duplicate"
      ? "같은 자료 ID가 이미 다른 내용으로 저장되어 있습니다."
      : "다른 화면에서 먼저 변경되었습니다.";
  return {
    code: "RESOURCE_MATERIAL_CONFLICT",
    currentMaterial,
    materialId,
    message: `자료 ${materialId}가 ${reasonMessage} 현재 입력과 목록은 유지했으니 서버 저장본을 확인해 주세요.`
  };
}

export function createNextResourceMaterialUpdatedAt(expectedUpdatedAt = "", now = Date.now()) {
  const expectedTime = new Date(expectedUpdatedAt).getTime();
  const nextTime = Number.isFinite(expectedTime) ? Math.max(now, expectedTime + 1) : now;
  return new Date(nextTime).toISOString();
}

export function areResourceMaterialTimestampsEqual(left, right) {
  const leftTime = new Date(left).getTime();
  const rightTime = new Date(right).getTime();
  return Number.isFinite(leftTime) && Number.isFinite(rightTime) && leftTime === rightTime;
}

export function isSameResourceMaterialDraft(requested = {}, persisted = {}) {
  return Boolean(
    requested.createdAt &&
    persisted.createdAt &&
    areResourceMaterialTimestampsEqual(requested.createdAt, persisted.createdAt)
  );
}

export function areResourceMaterialsPersistedEqual(requested = {}, persisted = {}) {
  return persistedFields.every((field) => (
    normalizeComparableValue(getComparableField(requested, field)) ===
    normalizeComparableValue(getComparableField(persisted, field))
  ));
}

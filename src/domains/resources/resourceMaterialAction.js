import {
  deleteAndVerifyResourceMaterial,
  saveAndVerifyResourceMaterial
} from "./resourceMaterialApi.js";
import {
  deleteResourceMaterialFileAndVerify,
  saveResourceMaterialFileAndVerify
} from "./resourceMaterialFileApi.js";

export function createResourceMaterialPayload(material) {
  return {
    materialId: material.materialId,
    createdAt: material.createdAt,
    title: material.title.trim(),
    description: material.description.trim(),
    fileName: material.fileName.trim(),
    fileUrl: material.fileUrl.trim(),
    visibility: material.visibility,
    classTemplateId: material.classTemplateId,
    studentIds: material.studentIds,
    notifyByAlimtalk: material.notifyByAlimtalk
  };
}

export async function saveResourceMaterialWithFileAction({
  file,
  material,
  onApply,
  onState,
  read,
  sessionToken
} = {}) {
  onState?.({ message: "파일을 private Storage에 올리고 자료 row를 확인하는 중입니다.", state: "saving" });
  try {
    const result = await saveResourceMaterialFileAndVerify({
      file,
      material: createResourceMaterialPayload(material),
      read,
      sessionToken
    });
    onApply?.(result.materials);
    onState?.({
      message: result.previousFileCleanupFailed
        ? "새 파일과 자료 row 저장은 완료됐지만 이전 파일 정리가 지연됐습니다. 관리자 점검이 필요합니다."
        : "Storage 업로드와 Supabase row 재조회 확인 완료",
      state: result.previousFileCleanupFailed ? "failed" : "saved"
    });
    return { material: result.material, ok: true, warning: result.previousFileCleanupFailed };
  } catch (error) {
    onState?.({ message: error.message || "자료 파일 등록에 실패했습니다. 선택 파일과 입력은 유지됩니다.", state: "failed" });
    return { error, ok: false };
  }
}

export async function saveResourceMaterialAction(options = {}) {
  if (options.file) return saveResourceMaterialWithFileAction(options);
  const { material, onApply, onState, read, request } = options;
  onState?.({ message: "Supabase에 저장하고 목록을 다시 확인하는 중입니다.", state: "saving" });
  try {
    const result = await saveAndVerifyResourceMaterial({
      material: createResourceMaterialPayload(material),
      read,
      request
    });
    onApply?.(result.materials);
    onState?.({ message: "Supabase 저장 및 목록 재조회 확인 완료", state: "saved" });
    return { material: result.material, ok: true };
  } catch (error) {
    onState?.({ message: error.message || "자료 등록 저장에 실패했습니다.", state: "failed" });
    return { error, ok: false };
  }
}

export async function deleteResourceMaterialAction(options = {}) {
  if (options.sessionToken) return deleteResourceMaterialWithFileAction(options);
  const { material, onApply, onState, read, request } = options;
  onState?.({ message: "Supabase에서 삭제하고 목록을 다시 확인하는 중입니다.", state: "saving" });
  try {
    const result = await deleteAndVerifyResourceMaterial({ material, read, request });
    onApply?.(result.materials);
    onState?.({ message: "Supabase 삭제 및 목록 재조회 확인 완료", state: "saved" });
    return { materialId: result.materialId, ok: true };
  } catch (error) {
    onState?.({ message: error.message || "자료 삭제에 실패했습니다.", state: "failed" });
    return { error, ok: false };
  }
}

export async function deleteResourceMaterialWithFileAction({ material, onApply, onState, read, sessionToken } = {}) {
  onState?.({ message: "파일을 안전하게 백업한 뒤 Storage와 자료 row를 삭제하는 중입니다.", state: "saving" });
  try {
    const result = await deleteResourceMaterialFileAndVerify({ material, read, sessionToken });
    onApply?.(result.materials);
    onState?.({ message: "Storage 삭제와 Supabase row 재조회 확인 완료", state: "saved" });
    return { materialId: result.materialId, ok: true };
  } catch (error) {
    onState?.({ message: error.message || "자료 삭제에 실패했습니다. 파일과 목록 상태를 확인해 주세요.", state: "failed" });
    return { error, ok: false };
  }
}

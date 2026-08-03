import {
  deleteAndVerifyResourceMaterial,
  saveAndVerifyResourceMaterial
} from "./resourceMaterialApi.js";

function createResourceMaterialPayload(material) {
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

export async function saveResourceMaterialAction({ material, onApply, onState, read, request } = {}) {
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

export async function deleteResourceMaterialAction({ material, onApply, onState, read, request } = {}) {
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

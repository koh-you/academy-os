import {
  areResourceMaterialsPersistedEqual,
  areResourceMaterialTimestampsEqual
} from "./resourceMaterialPersistence.js";

export async function saveResourceMaterialRequest({ material, request } = {}) {
  if (!material?.materialId) throw new Error("저장할 자료 ID가 필요합니다.");
  if (!material.createdAt) throw new Error("자료 초안의 생성 토큰이 필요합니다.");
  if (typeof request !== "function") throw new Error("자료 저장 request가 필요합니다.");
  const result = await request(
    "/api/resource-materials",
    { material },
    15000,
    "자료 등록이 15초를 넘었습니다. 현재 입력을 유지한 채 서버 저장 상태를 확인해 주세요."
  );
  if (
    result?.source !== "supabase" ||
    result?.verified !== true ||
    result?.material?.materialId !== material.materialId ||
    !result?.material?.updatedAt
  ) {
    throw new Error("자료의 Supabase 저장 결과를 재조회로 확인하지 못했습니다. 현재 입력은 유지됩니다.");
  }
  return result.material;
}

export async function deleteResourceMaterialRequest({ material, request } = {}) {
  if (!material?.materialId) throw new Error("삭제할 자료 ID가 필요합니다.");
  if (!material.updatedAt) throw new Error("자료의 서버 버전을 확인하지 못했습니다. 새로고침 후 다시 삭제해 주세요.");
  if (typeof request !== "function") throw new Error("자료 삭제 request가 필요합니다.");
  const path = `/api/resource-materials?id=${encodeURIComponent(material.materialId)}&expectedUpdatedAt=${encodeURIComponent(material.updatedAt)}`;
  const result = await request(
    path,
    {},
    15000,
    "자료 삭제가 15초를 넘었습니다. 목록을 유지한 채 서버 삭제 상태를 확인해 주세요."
  );
  if (
    result?.source !== "supabase" ||
    result?.verified !== true ||
    result?.materialId !== material.materialId
  ) {
    throw new Error("자료 삭제 결과를 Supabase 재조회로 확인하지 못했습니다. 목록을 새로고침해 주세요.");
  }
  return result;
}

export async function saveAndVerifyResourceMaterial({ material, read, request } = {}) {
  if (typeof read !== "function") throw new Error("자료 재조회 request가 필요합니다.");
  const savedMaterial = await saveResourceMaterialRequest({ material, request });
  const verification = await read(
    "/api/resource-materials",
    12000,
    "자료 등록 후 서버 재조회가 12초를 넘었습니다. 현재 입력은 유지됩니다."
  );
  const verifiedMaterial = verification?.materials?.find((item) => item.materialId === savedMaterial.materialId);
  if (
    verification?.source !== "supabase" ||
    !Array.isArray(verification?.materials) ||
    !verifiedMaterial ||
    !areResourceMaterialsPersistedEqual(savedMaterial, verifiedMaterial) ||
    !areResourceMaterialTimestampsEqual(savedMaterial.updatedAt, verifiedMaterial.updatedAt)
  ) {
    throw new Error("자료 등록 후 Supabase 원천 재조회를 확인하지 못했습니다. 현재 입력은 유지됩니다.");
  }
  return { material: verifiedMaterial, materials: verification.materials };
}

export async function deleteAndVerifyResourceMaterial({ material, read, request } = {}) {
  if (typeof read !== "function") throw new Error("자료 재조회 request가 필요합니다.");
  await deleteResourceMaterialRequest({ material, request });
  const verification = await read(
    "/api/resource-materials",
    12000,
    "자료 삭제 후 서버 재조회가 12초를 넘었습니다. 목록을 유지합니다."
  );
  if (
    verification?.source !== "supabase" ||
    !Array.isArray(verification?.materials) ||
    verification.materials.some((item) => item.materialId === material.materialId)
  ) {
    throw new Error("자료 삭제 후 Supabase 원천 재조회를 확인하지 못했습니다. 목록을 유지합니다.");
  }
  return { materialId: material.materialId, materials: verification.materials };
}

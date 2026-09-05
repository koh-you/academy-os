import { apiFetch } from "../../shared/utils/apiClient.js";
import { readFileAsDataUrl } from "../../shared/utils/file.js";
import {
  parseVersionedWriteRequest,
  parseVersionedWriteResponse
} from "../../shared/contracts/versionedWriteRouteContracts.js";
import {
  areResourceMaterialsPersistedEqual,
  areResourceMaterialTimestampsEqual
} from "./resourceMaterialPersistence.js";

async function requestResourceMaterialFile(path, {
  body,
  method = "GET",
  sessionToken,
  timeoutMs = 45000
} = {}) {
  if (!sessionToken) throw new Error("자료 파일 작업을 하려면 다시 로그인해 주세요.");
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await apiFetch(path, {
      body: body === undefined ? undefined : JSON.stringify(body),
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${sessionToken}`,
        ...(body === undefined ? {} : { "Content-Type": "application/json" })
      },
      method,
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || result.ok === false) {
      const error = new Error(result.error || "자료 파일 요청에 실패했습니다.");
      error.code = result.code;
      error.result = result;
      error.statusCode = response.status;
      throw error;
    }
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      const timeoutError = new Error("자료 파일 요청이 45초를 넘었습니다. 현재 입력을 유지한 채 서버 상태를 확인해 주세요.");
      timeoutError.requestTimedOut = true;
      throw timeoutError;
    }
    throw error;
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
}

export async function saveResourceMaterialFileAndVerify({ file, material, read, sessionToken } = {}) {
  if (!file) throw new Error("업로드할 자료 파일을 선택해 주세요.");
  if (typeof read !== "function") throw new Error("자료 목록 재조회 request가 필요합니다.");
  const dataUrl = await readFileAsDataUrl(file);
  const payload = parseVersionedWriteRequest("POST", "/api/resource-material-files", {
    file: { dataUrl, fileName: file.name },
    material
  });
  const result = parseVersionedWriteResponse(
    "POST",
    "/api/resource-material-files",
    await requestResourceMaterialFile("/api/resource-material-files", {
      body: payload,
      method: "POST",
      sessionToken
    })
  );
  if (result?.source !== "supabase" || result?.verified !== true || !result?.material?.updatedAt) {
    throw new Error("파일 업로드 뒤 자료 row 저장을 재조회로 확인하지 못했습니다. 현재 입력을 유지합니다.");
  }
  const verification = await read(
    "/api/resource-materials",
    12000,
    "파일 등록 후 자료 목록 재조회가 12초를 넘었습니다. 현재 입력을 유지합니다."
  );
  const verifiedMaterial = verification?.materials?.find((item) => item.materialId === result.material.materialId);
  if (
    verification?.source !== "supabase" ||
    !verifiedMaterial ||
    !areResourceMaterialsPersistedEqual(result.material, verifiedMaterial) ||
    !areResourceMaterialTimestampsEqual(result.material.updatedAt, verifiedMaterial.updatedAt)
  ) {
    throw new Error("파일 등록 뒤 Supabase 자료 row를 다시 확인하지 못했습니다. 현재 입력을 유지합니다.");
  }
  return {
    material: verifiedMaterial,
    materials: verification.materials,
    previousFileCleanupFailed: Boolean(result.previousFileCleanupFailed)
  };
}

export async function deleteResourceMaterialFileAndVerify({ material, read, sessionToken } = {}) {
  if (!material?.materialId || !material?.updatedAt) throw new Error("삭제할 자료의 서버 버전이 필요합니다.");
  if (typeof read !== "function") throw new Error("자료 목록 재조회 request가 필요합니다.");
  const payload = parseVersionedWriteRequest("DELETE", "/api/resource-material-files", { material });
  const result = parseVersionedWriteResponse(
    "DELETE",
    "/api/resource-material-files",
    await requestResourceMaterialFile("/api/resource-material-files", {
      body: payload,
      method: "DELETE",
      sessionToken
    })
  );
  if (result?.source !== "supabase" || result?.verified !== true || result?.materialId !== material.materialId) {
    throw new Error("자료 파일과 row 삭제 결과를 재조회로 확인하지 못했습니다. 목록을 유지합니다.");
  }
  const verification = await read(
    "/api/resource-materials",
    12000,
    "자료 삭제 후 목록 재조회가 12초를 넘었습니다. 목록을 유지합니다."
  );
  if (
    verification?.source !== "supabase" ||
    !Array.isArray(verification.materials) ||
    verification.materials.some((item) => item.materialId === material.materialId)
  ) {
    throw new Error("자료 삭제 후 Supabase row가 남아 있습니다. 목록을 유지합니다.");
  }
  return { materialId: material.materialId, materials: verification.materials };
}

export async function getResourceMaterialOpenUrl({ materialId, sessionToken } = {}) {
  if (!materialId) throw new Error("열람할 자료 ID가 필요합니다.");
  const result = await requestResourceMaterialFile(
    `/api/resource-material-files/open?id=${encodeURIComponent(materialId)}`,
    { sessionToken, timeoutMs: 15000 }
  );
  if (!result?.signedUrl) throw new Error("자료 파일 열기 주소를 발급받지 못했습니다.");
  return result.signedUrl;
}

export async function openResourceMaterialWindow({ materialId, popup, sessionToken } = {}) {
  try {
    const url = await getResourceMaterialOpenUrl({ materialId, sessionToken });
    if (popup) popup.location.href = url;
    else window.location.href = url;
  } catch (error) {
    popup?.close();
    console.error(error);
    window.alert(error.message || "자료 파일을 열지 못했습니다.");
  }
}

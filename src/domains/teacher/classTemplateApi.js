import { postJson } from "../../shared/utils/apiClient.js";

// 반 개설·수정 저장. classTemplateId 가 비어 있으면 개설, 있으면 수정.
// 서버가 verified 를 주지 않으면 화면 상태를 바꾸지 않는다(저장됐다고 믿지 않는다).
export async function saveClassTemplateRequest(classTemplate, { request = postJson } = {}) {
  const result = await request("/api/classes", { classTemplate });
  if (!result?.ok || !result.classTemplate?.classTemplateId) {
    throw new Error(result?.error || "반 저장 결과를 확인하지 못했습니다.");
  }
  if (result.source === "supabase" && result.verified !== true) {
    throw new Error("반 저장을 서버에서 확인하지 못했습니다. 새로고침 후 다시 확인해 주세요.");
  }
  return result.classTemplate;
}

// 저장된 반을 목록에 반영한다 — 수정이면 같은 id 를 교체, 개설이면 이름순 자리에 끼운다.
export function mergeClassTemplate(templates = [], savedTemplate) {
  const others = templates.filter((template) => template.classTemplateId !== savedTemplate.classTemplateId);
  return [...others, savedTemplate].sort((a, b) => String(a.name ?? "").localeCompare(String(b.name ?? ""), "ko"));
}

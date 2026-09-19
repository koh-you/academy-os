// tenant(선생님)별 운영 설정. app_state 의 `tenantSettings` 키에 저장된다.
//
// 2026-09-19 원장 방침: 원장 전용 상수(반 id·이름)를 코드에 두지 말고 범용 설정으로.
// 선생님이 더 추가돼도 코드는 손대지 않는다. 값이 비어 있으면(새 선생님) 합리적 기본으로 돈다.

export const defaultTenantSettings = Object.freeze({
  // 시험관리 자동 생성 대상 반. 비면 활성 학생 전체. 원장은 마이그레이션으로 내신반만 넣는다.
  examPrepAutoRowClassTemplateIds: Object.freeze([]),
  // 학생관리 "반별" 탭·시험관리 반 필터의 처음 선택. 비면 첫 반.
  defaultClassTemplateId: ""
});

function normalizeIdList(value) {
  if (!Array.isArray(value)) return [];
  return Array.from(new Set(value.map((item) => String(item ?? "").trim()).filter(Boolean)));
}

export function normalizeTenantSettings(value = {}) {
  const source = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  return {
    examPrepAutoRowClassTemplateIds: normalizeIdList(source.examPrepAutoRowClassTemplateIds),
    defaultClassTemplateId: String(source.defaultClassTemplateId ?? "").trim()
  };
}

/**
 * 시험관리 자동 생성 대상 반 id 목록. 설정에 적힌 반 중 실제로 있는 것만 쓴다 —
 * 반을 지웠거나 다른 tenant 의 id 가 남아 있어도 조용히 무시한다. 남는 게 없으면 [] (전체).
 */
export function resolveExamPrepAutoRowClassTemplateIds(settings = {}, classTemplates = []) {
  const known = new Set(classTemplates.map((template) => template.classTemplateId));
  return normalizeTenantSettings(settings).examPrepAutoRowClassTemplateIds.filter((id) => known.has(id));
}

/** 처음 선택할 반. 설정된 반이 있으면 그것, 없으면 첫 반, 반이 없으면 "". */
export function resolveDefaultClassTemplateId(settings = {}, classTemplates = []) {
  const preferred = normalizeTenantSettings(settings).defaultClassTemplateId;
  if (preferred && classTemplates.some((template) => template.classTemplateId === preferred)) return preferred;
  return classTemplates[0]?.classTemplateId ?? "";
}

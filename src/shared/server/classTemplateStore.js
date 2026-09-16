// @ts-check
//
// 반(class template) 개설·수정 저장소.
//
// 2026-09-16 까지 반은 DB 에 손으로 넣은 4개가 전부였고 화면에서 만들 수 없었다.
// 협력 교사 tenant 는 반이 0개라 반관리 화면이 비고(제목이 undefined), 학생을 배정할
// 곳도 없었다. 원장 요청: "반 개설은 반관리에서 할 수 있어야 한다."
//
// tenant 경계:
// - 개설은 insertRows — tenant_id 는 supabaseRest 가 현재 요청 tenant 로 채운다.
//   PK(class_template_id) 가 다른 tenant 에 이미 있으면 DB 가 거부한다(409).
// - 수정은 patchRows — 조회 조건에 tenant 필터가 강제되므로 다른 tenant 의 반은
//   0건 갱신으로 끝난다(404). upsert(merge-duplicates) 를 쓰면 다른 tenant 의 반을
//   내 tenant 로 끌어올 수 있어 일부러 쓰지 않는다.

import { fromClassTemplateRow, toClassTemplateRow } from "../persistence/coreIdentityRowMappers.js";

export const CLASS_TEMPLATE_DAY_KEYS = Object.freeze(["mon", "tue", "wed", "thu", "fri", "sat", "sun"]);

const clockTimePattern = /^([01]\d|2[0-3]):[0-5]\d$/;
const colorPattern = /^#[0-9a-fA-F]{6}$/;

function createRequestError(message, statusCode, code) {
  const error = /** @type {Error & { statusCode?: number, code?: string }} */ (new Error(message));
  error.statusCode = statusCode;
  if (code) error.code = code;
  return error;
}

export function createClassTemplateId(now = Date.now()) {
  const randomPart = globalThis.crypto?.randomUUID?.().slice(0, 8) ?? Math.random().toString(36).slice(2, 10);
  return `template_${now}_${randomPart}`;
}

/**
 * 화면 입력을 저장 가능한 반으로 정규화한다. 잘못된 입력은 400 으로 돌려준다.
 * @param {Record<string, *>} input
 */
export function normalizeClassTemplateInput(input = {}) {
  const name = String(input.name ?? "").trim();
  if (!name) throw createRequestError("반 이름을 입력해 주세요.", 400, "invalid_class_template");
  const days = Array.from(new Set((Array.isArray(input.days) ? input.days : []).map((day) => String(day).toLowerCase())));
  const unknownDay = days.find((day) => !CLASS_TEMPLATE_DAY_KEYS.includes(day));
  if (unknownDay) throw createRequestError(`알 수 없는 요일입니다: ${unknownDay}`, 400, "invalid_class_template");
  if (days.length === 0) throw createRequestError("수업 요일을 하나 이상 선택해 주세요.", 400, "invalid_class_template");
  const startTime = String(input.startTime ?? "").trim();
  const endTime = String(input.endTime ?? "").trim();
  if (!clockTimePattern.test(startTime) || !clockTimePattern.test(endTime)) {
    throw createRequestError("시작·종료 시간은 HH:MM 형식이어야 합니다.", 400, "invalid_class_template");
  }
  if (startTime >= endTime) throw createRequestError("종료 시간은 시작 시간보다 늦어야 합니다.", 400, "invalid_class_template");
  const color = String(input.color ?? "").trim() || "#c7d2fe";
  if (!colorPattern.test(color)) throw createRequestError("색상은 #RRGGBB 형식이어야 합니다.", 400, "invalid_class_template");
  const status = String(input.status ?? "active");
  if (!["active", "paused", "archived"].includes(status)) {
    throw createRequestError("반 상태가 올바르지 않습니다.", 400, "invalid_class_template");
  }
  return {
    classTemplateId: String(input.classTemplateId ?? "").trim(),
    name,
    days: CLASS_TEMPLATE_DAY_KEYS.filter((day) => days.includes(day)),
    startTime,
    endTime,
    color,
    status
  };
}

/**
 * @param {Object} deps
 * @param {(table: string, rows: *[]) => Promise<*[]>} deps.insertRows
 * @param {(table: string, query: string, values: *) => Promise<*[]>} deps.patchRows
 * @param {() => boolean} deps.isSupabaseConfigured
 */
export function createClassTemplateStore({ insertRows, isSupabaseConfigured, patchRows }) {
  /**
   * classTemplateId 가 비어 있으면 개설, 있으면 같은 tenant 안에서만 수정한다.
   * @param {Record<string, *>} input
   */
  async function saveClassTemplate(input) {
    const template = normalizeClassTemplateInput(input);
    if (!isSupabaseConfigured()) {
      return { source: "fallback", classTemplate: { ...template, classTemplateId: template.classTemplateId || createClassTemplateId() }, verified: false };
    }
    if (!template.classTemplateId) {
      const created = { ...template, classTemplateId: createClassTemplateId() };
      let rows;
      try {
        rows = await insertRows("class_templates", [toClassTemplateRow(created)]);
      } catch (error) {
        if (/duplicate key|23505|409/.test(String(error?.message ?? ""))) {
          throw createRequestError("같은 ID 의 반이 이미 있습니다. 다시 시도해 주세요.", 409, "class_template_conflict");
        }
        throw error;
      }
      if (!rows?.[0]) throw new Error("반 개설 결과를 확인하지 못했습니다.");
      return { source: "supabase", classTemplate: fromClassTemplateRow(rows[0]), verified: true, created: true };
    }
    const { class_template_id: _ignored, ...values } = toClassTemplateRow(template);
    const rows = await patchRows(
      "class_templates",
      `class_template_id=eq.${encodeURIComponent(template.classTemplateId)}`,
      values
    );
    if (!rows?.[0]) throw createRequestError("수정할 반을 찾지 못했습니다.", 404, "class_template_not_found");
    return { source: "supabase", classTemplate: fromClassTemplateRow(rows[0]), verified: true, created: false };
  }

  return Object.freeze({ saveClassTemplate });
}

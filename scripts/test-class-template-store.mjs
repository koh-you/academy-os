import assert from "node:assert/strict";
import {
  createClassTemplateStore,
  normalizeClassTemplateInput
} from "../src/shared/server/classTemplateStore.js";

// 입력 검증 — 화면이 보여줄 수 있는 문장과 400 을 낸다.
for (const [input, message] of [
  [{}, "반 이름을 입력해 주세요."],
  [{ name: "A" }, "수업 요일을 하나 이상 선택해 주세요."],
  [{ name: "A", days: ["mon", "funday"] }, "알 수 없는 요일입니다: funday"],
  [{ name: "A", days: ["mon"], startTime: "7pm", endTime: "22:00" }, "시작·종료 시간은 HH:MM 형식이어야 합니다."],
  [{ name: "A", days: ["mon"], startTime: "22:00", endTime: "19:00" }, "종료 시간은 시작 시간보다 늦어야 합니다."],
  [{ name: "A", days: ["mon"], startTime: "19:00", endTime: "22:00", color: "blue" }, "색상은 #RRGGBB 형식이어야 합니다."]
]) {
  assert.throws(() => normalizeClassTemplateInput(input), (error) => error.message === message && error.statusCode === 400);
}

// 요일은 월→일 순으로 정렬하고 중복을 없앤다. 색상은 비우면 기본값.
assert.deepEqual(
  normalizeClassTemplateInput({ name: " 화목 5-7반 ", days: ["thu", "tue", "tue"], startTime: "17:00", endTime: "19:00" }),
  { classTemplateId: "", name: "화목 5-7반", days: ["tue", "thu"], startTime: "17:00", endTime: "19:00", color: "#c7d2fe", status: "active" }
);

// 개설은 insertRows 로만 — upsert 로 다른 tenant 의 반을 끌어오지 않는다.
const calls = [];
const store = createClassTemplateStore({
  isSupabaseConfigured: () => true,
  insertRows: async (table, rows) => {
    calls.push(["insert", table, rows]);
    return rows.map((row) => ({ ...row, tenant_id: "tenant_a" }));
  },
  patchRows: async (table, query, values) => {
    calls.push(["patch", table, query, values]);
    return query.includes("template_known") ? [{ class_template_id: "template_known", ...values }] : [];
  }
});

const created = await store.saveClassTemplate({ name: "화목 5-7반", days: ["tue", "thu"], startTime: "17:00", endTime: "19:00" });
assert.equal(calls[0][0], "insert");
assert.equal(calls[0][1], "class_templates");
assert.match(created.classTemplate.classTemplateId, /^template_\d+_/);
assert.equal(created.created, true);
assert.equal(created.verified, true);
assert.equal(created.classTemplate.name, "화목 5-7반");

// 수정은 patchRows — id 는 조회 조건으로만 쓰고 값에는 넣지 않는다(PK 변경 금지).
const updated = await store.saveClassTemplate({ classTemplateId: "template_known", name: "화목 5-7반(수정)", days: ["tue"], startTime: "17:00", endTime: "19:00" });
assert.equal(calls[1][0], "patch");
assert.equal(calls[1][2], "class_template_id=eq.template_known");
assert.equal("class_template_id" in calls[1][3], false);
assert.equal(updated.created, false);
assert.equal(updated.classTemplate.name, "화목 5-7반(수정)");

// 내 tenant 에 없는 반(다른 교사의 반)은 404 — 0건 갱신을 성공으로 보지 않는다.
await assert.rejects(
  store.saveClassTemplate({ classTemplateId: "template_other_tenant", name: "X", days: ["mon"], startTime: "10:00", endTime: "11:00" }),
  (error) => error.statusCode === 404 && error.code === "class_template_not_found"
);

console.log("class template store create/update/tenant-boundary contracts passed");

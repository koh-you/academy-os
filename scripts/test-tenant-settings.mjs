import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  defaultTenantSettings,
  normalizeTenantSettings,
  resolveDefaultClassTemplateId,
  resolveExamPrepAutoRowClassTemplateIds
} from "../src/domains/settings/tenantSettings.js";
import { createExamPrepCalendarCluster } from "../src/domains/exams/examPrepCalendarCluster.js";

// 2026-09-19 원장 방침: 원장 전용 상수 대신 tenant 설정. 새 선생님은 빈 설정 = 합리적 기본.

assert.deepEqual(normalizeTenantSettings(undefined), { examPrepAutoRowClassTemplateIds: [], defaultClassTemplateId: "" });
assert.deepEqual(normalizeTenantSettings({ examPrepAutoRowClassTemplateIds: ["a", "a", " b ", 3, null], defaultClassTemplateId: " x " }),
  { examPrepAutoRowClassTemplateIds: ["a", "b", "3"], defaultClassTemplateId: "x" });
assert.deepEqual(normalizeTenantSettings(defaultTenantSettings), { examPrepAutoRowClassTemplateIds: [], defaultClassTemplateId: "" });

const templates = [{ classTemplateId: "t1", name: "A" }, { classTemplateId: "t2", name: "B" }];
// 설정된 반 중 실제로 있는 것만. 없는 id(지운 반·남의 반)는 조용히 무시.
assert.deepEqual(resolveExamPrepAutoRowClassTemplateIds({ examPrepAutoRowClassTemplateIds: ["t2", "ghost"] }, templates), ["t2"]);
assert.deepEqual(resolveExamPrepAutoRowClassTemplateIds({}, templates), [], "빈 설정 = 전체");
assert.equal(resolveDefaultClassTemplateId({ defaultClassTemplateId: "t2" }, templates), "t2");
assert.equal(resolveDefaultClassTemplateId({ defaultClassTemplateId: "ghost" }, templates), "t1", "없는 반이면 첫 반");
assert.equal(resolveDefaultClassTemplateId({}, []), "", "반이 없으면 빈 값");

// 자동 생성 빌더는 대상 반을 여러 개(쉼표/배열) 받는다. 비면 전체.
const cluster = createExamPrepCalendarCluster("2026-09-19");
const students = [
  { studentId: "s1", status: "active", schoolName: "A고", grade: "고1", defaultClassTemplateId: "t1" },
  { studentId: "s2", status: "active", schoolName: "B고", grade: "고2", defaultClassTemplateId: "t2" },
  { studentId: "s3", status: "active", schoolName: "C고", grade: "고3", defaultClassTemplateId: "t3" }
];
assert.deepEqual(cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", "", []).map((r) => r.schoolName), ["A고", "B고", "C고"]);
assert.deepEqual(cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", "t1,t3", []).map((r) => r.schoolName), ["A고", "C고"]);
assert.deepEqual(cluster.buildExamPrepRowsFromStudents(students, "2026-2-mid", ["t2"], []).map((r) => r.schoolName), ["B고"]);

// App 은 설정에서 대상 반을 뽑고, 원장 반 id 는 더 이상 코드에 없다.
const app = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
assert.ok(app.includes("resolveExamPrepAutoRowClassTemplateIds(tenantSettings, classTemplates)"));
assert.equal(app.includes('"template_mwf_7_10"'), false, "App 에 원장 반 id 가 남아 있으면 안 된다");
const settings = await readFile(new URL("../src/domains/settings/SettingsCenter.jsx", import.meta.url), "utf8");
assert.ok(settings.includes('{ id: "tenant", label: "운영 설정" }'));
assert.ok(settings.includes("시험관리 자동 생성 대상 반"));
const migration = await readFile(new URL("../supabase/20260919_owner_tenant_settings.sql", import.meta.url), "utf8");
assert.ok(migration.includes('"examPrepAutoRowClassTemplateIds": ["template_mwf_7_10"]'), "원장 값은 마이그레이션이 옮긴다");
assert.ok(migration.includes("on conflict (tenant_id, state_key) do nothing"), "화면에서 바꾼 값을 덮어쓰지 않는다");

console.log("tenant settings: defaults, resolution, multi-class auto rows, owner migration passed");

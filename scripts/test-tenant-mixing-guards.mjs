import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// 2026-09-19 감사에서 확정된 "원장 자료가 협력 교사 tenant 로 넘어가는" 통로 세 개를 소스
// 계약으로 잠근다. 깨지면 어느 통로가 다시 열렸는지 메시지로 안다.

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const server = await read("api/server.js");
const guard = await read("src/shared/server/sessionRouteGuard.js");
const app = await read("src/app/App.jsx");
const main = await read("src/main.jsx");
const migration = await read("supabase/20260919_tenant_id_immutable.sql");

// (1) 포털 토큰이 학생 tenant 를 싣고, 게이트가 그 tenant 로 컨텍스트를 잡는다.
assert.ok(guard.includes('tenantId: account.tenantId || "tenant_default"'), "포털 토큰에 tenantId 가 있어야 한다");
assert.ok(server.includes("select=student_id,name,login_id,pin,status,tenant_id&status=eq.active"), "학생 로그인 조회가 tenant_id 를 읽어야 한다");
assert.ok(server.includes('tenantId: student.tenant_id || "tenant_default"'), "학생 인증 결과에 tenantId 가 있어야 한다");
assert.ok(server.includes('{ kind: "portal", studentId: portalSession.studentId, tenantId: portalSession.tenantId || "tenant_default" }'), "게이트가 포털 세션을 tenant 와 함께 판정해야 한다");

// (2) 원장 "다른 선생님으로 보기" 전환은 화면 자료를 다시 불러와야 한다 — 헤더만 바꾸고 화면을
//     두면 원장 자료가 보이는 채로 저장이 상대 tenant 로 간다. main(#374)이 세션+보는 tenant 를
//     부트스트랩 경계(sessionDataIdentity)로 삼고, 전환 값은 캐시 초기화에서 뺐다. 그 위에
//     결정적 id 의 tenant 조각이 같은 값을 따라야 한다.
assert.ok(app.includes("const sessionDataIdentity = createSessionDataIdentity(session, activeViewTenantId);"), "보기 전환이 부트스트랩 경계에 들어가야 한다");
const appConfig = await read("src/app/appConfig.js");
assert.ok(appConfig.includes('name !== "teacherSession" && name !== "viewTenantId"'), "캐시 초기화가 viewTenantId 를 지우면 안 된다");
assert.ok(main.includes("createCacheOwnerId({"), "main 의 캐시 주인 키가 App 과 같은 함수로 만들어져야 한다");
assert.ok(app.includes('setTenantIdScope(activeViewTenantId || session?.tenantId || "")'), "결정적 id 의 tenant 조각이 세션·보기 전환을 따라야 한다");

// (3) DB 가 tenant_id 변경(upsert 로 남의 행 끌어오기)을 거부한다.
assert.ok(migration.includes("create or replace function public.forbid_tenant_id_change()"));
assert.ok(migration.includes("before update of tenant_id"));
for (const table of ["lessons", "school_events", "test_sessions", "exam_prep_rows", "students", "app_state"]) {
  assert.ok(migration.includes(`'${table}'`), `${table} 에 트리거가 걸려야 한다`);
}

console.log("tenant mixing guards: portal tenant, view-as reload, tenant_id immutable trigger contracts passed");

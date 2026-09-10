// 원장의 "다른 선생님으로 보기" 권한 경계.
//
// 원장은 학원 전체를 관리하므로 각 선생님의 명단·수업일지를 열어보고 고칠 수 있어야 한다.
// 하지만 이건 테넌트 경계를 넘는 일이라, 헤더 하나로 아무나 넘어갈 수 있으면 안 된다.
// 이 테스트가 그 경계를 고정한다.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const { resolveViewAsTenantId } = await import("../src/shared/server/apiAccessPolicy.js");

const OWNER = { kind: "teacher", teacherRole: "owner", tenantId: "tenant_default" };
const ASSISTANT = { kind: "teacher", teacherRole: "assistant", tenantId: "tenant_a" };
const KNOWN = new Set(["tenant_default", "tenant_a", "tenant_b"]);

// 원장은 등록된 다른 선생님 테넌트로 전환할 수 있다.
assert.equal(resolveViewAsTenantId(OWNER, "tenant_a", KNOWN), "tenant_a");
assert.equal(resolveViewAsTenantId(OWNER, "tenant_b", KNOWN), "tenant_b");

// 협력 교사는 같은 헤더를 보내도 자기 테넌트에 머문다 — 여기가 핵심 경계다.
assert.equal(resolveViewAsTenantId(ASSISTANT, "tenant_default", KNOWN), "tenant_a");
assert.equal(resolveViewAsTenantId(ASSISTANT, "tenant_b", KNOWN), "tenant_a");

// 등록되지 않은 테넌트는 원장이라도 거부한다(임의 문자열로 넘어갈 수 없다).
assert.equal(resolveViewAsTenantId(OWNER, "tenant_does_not_exist", KNOWN), "tenant_default");
assert.equal(resolveViewAsTenantId(OWNER, "'; drop table students; --", KNOWN), "tenant_default");

// 값이 없거나 자기 자신이면 그대로.
assert.equal(resolveViewAsTenantId(OWNER, "", KNOWN), "tenant_default");
assert.equal(resolveViewAsTenantId(OWNER, "   ", KNOWN), "tenant_default");
assert.equal(resolveViewAsTenantId(OWNER, "tenant_default", KNOWN), "tenant_default");

// 교사 세션이 아니면(키오스크·ops·비로그인) 절대 전환할 수 없다.
for (const kind of ["kiosk", "ops", "dispatch", "none"]) {
  assert.equal(
    resolveViewAsTenantId({ kind, teacherRole: "owner", tenantId: "tenant_default" }, "tenant_a", KNOWN),
    "tenant_default",
    `${kind} 는 테넌트를 전환할 수 없어야 한다`
  );
}

// 배열로 넘겨도 동작해야 한다(호출부가 Set 을 만들지 않아도 되게).
assert.equal(resolveViewAsTenantId(OWNER, "tenant_a", ["tenant_a"]), "tenant_a");

// 서버 게이트가 실제로 이 판정을 쓰는지 — 안 쓰면 위 계약이 있으나 마나다.
const serverSource = await readFile(new URL("../api/server.js", import.meta.url), "utf8");
assert.ok(
  serverSource.includes("resolveViewAsTenantId(auth, requestedTenantId"),
  "요청 게이트가 resolveViewAsTenantId 로 판정해야 한다"
);
assert.ok(
  serverSource.includes('enterTenantContext(effectiveTenantId'),
  "판정 결과 테넌트로 요청 컨텍스트를 심어야 한다(조회·수정 모두 그 테넌트로 간다)"
);
assert.ok(
  serverSource.includes('"[view-as-tenant]"'),
  "테넌트 경계를 넘는 요청은 감사 로그를 남겨야 한다"
);

// 클라이언트는 원장이 아닐 때 헤더를 비워야 한다.
const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
assert.ok(
  appSource.includes('const activeViewTenantId = teacherRole === "owner" ? viewTenantId : ""'),
  "협력 교사에게는 보기 대상 테넌트를 적용하지 않아야 한다"
);
// 보고 있는 선생님이 바뀌면 화면 캐시도 갈라져야 한다(이전 선생님 자료가 남으면 안 된다).
assert.ok(
  appSource.includes("`${session.teacherId}:${activeViewTenantId}`"),
  "화면 캐시는 계정 + 보고 있는 선생님 조합으로 갈라져야 한다"
);

console.log("owner view-as tenant: 원장만 전환 가능 · 미등록 테넌트 거부 · 캐시 분리 계약 통과");

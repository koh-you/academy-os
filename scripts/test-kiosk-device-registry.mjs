// 키오스크 기기 등록부 + 여러 테넌트를 함께 받는 태블릿의 읽기/쓰기 범위 계약.
//
// 핵심 불변식: 태블릿은 자기 tenant_ids 범위를 "읽을" 수 있지만,
// "쓰기"는 학생이 속한 테넌트로만 들어가고 그 테넌트는 반드시 허용 목록 안이어야 한다.
import assert from "node:assert/strict";

const {
  createKioskDeviceRegistry,
  createKioskToken,
  hashKioskToken,
  isTenantAllowedForDevice,
  normalizeKioskDevice
} = await import("../src/shared/server/kioskDeviceRegistry.js");

const {
  applyTenantFilterToQuery,
  enterTenantContext,
  getCurrentTenantId,
  getReadTenantIds,
  runWithTenant,
  setWriteTenant
} = await import("../src/shared/server/tenantScope.js");

// ── 토큰 ────────────────────────────────────────────────────────────────
assert.equal(hashKioskToken("abc"), hashKioskToken("abc"), "같은 토큰은 같은 해시");
assert.notEqual(hashKioskToken("abc"), hashKioskToken("abd"), "다른 토큰은 다른 해시");
assert.match(hashKioskToken("abc"), /^[0-9a-f]{64}$/, "sha256 hex");
assert.notEqual(createKioskToken(), createKioskToken(), "발급 토큰은 매번 달라야 한다");

// ── 행 정규화 ───────────────────────────────────────────────────────────
const device = normalizeKioskDevice({
  kiosk_id: "kiosk_2f_lobby",
  label: "2층 로비",
  tenant_ids: ["tenant_a", "tenant_b", "tenant_a", "", null],
  is_active: true
});
assert.deepEqual(device.tenantIds, ["tenant_a", "tenant_b"], "중복·빈 값 제거");
assert.equal(normalizeKioskDevice(null), null);

assert.ok(isTenantAllowedForDevice(device, "tenant_b"));
assert.ok(!isTenantAllowedForDevice(device, "tenant_c"), "담당 밖 테넌트는 거부");
assert.ok(!isTenantAllowedForDevice(device, ""), "빈 테넌트는 거부");

// ── 조회 + 캐시 ─────────────────────────────────────────────────────────
let loadCount = 0;
let clock = 0;
const registry = createKioskDeviceRegistry({
  now: () => clock,
  ttlMs: 1000,
  loadDeviceByTokenHash: async (tokenHash) => {
    loadCount += 1;
    if (tokenHash === hashKioskToken("good")) {
      return { kiosk_id: "kiosk_1", label: "L", tenant_ids: ["tenant_a"], is_active: true };
    }
    if (tokenHash === hashKioskToken("retired")) {
      return { kiosk_id: "kiosk_2", label: "L2", tenant_ids: ["tenant_a"], is_active: false };
    }
    return null;
  }
});

assert.equal((await registry.resolveDevice("good")).kioskId, "kiosk_1");
assert.equal(loadCount, 1);
await registry.resolveDevice("good");
assert.equal(loadCount, 1, "TTL 안에서는 캐시를 쓴다");
clock = 2000;
await registry.resolveDevice("good");
assert.equal(loadCount, 2, "TTL 이 지나면 다시 조회한다");

assert.equal(await registry.resolveDevice("retired"), null, "비활성 기기는 인증 실패");
assert.equal(await registry.resolveDevice("nope"), null, "미등록 토큰은 인증 실패");
assert.equal(await registry.resolveDevice(""), null, "빈 토큰은 조회조차 하지 않는다");

const throwingRegistry = createKioskDeviceRegistry({
  loadDeviceByTokenHash: async () => { throw new Error("db down"); }
});
assert.equal(await throwingRegistry.resolveDevice("good"), null, "조회 실패는 인증 실패로 다룬다");

// ── 읽기/쓰기 범위 ──────────────────────────────────────────────────────
globalThis.process.env.MULTITENANT_SCOPING = "true";

// 담당이 하나면 쓰기 테넌트가 바로 정해진다.
runWithTenant("tenant_a", () => {
  assert.equal(getCurrentTenantId(), "tenant_a");
  assert.deepEqual(getReadTenantIds(), ["tenant_a"], "지정이 없으면 읽기=쓰기");
  assert.equal(
    applyTenantFilterToQuery("students", "select=*", ["tenant_a"]),
    "select=*&tenant_id=eq.tenant_a",
    "하나면 eq"
  );
});

// 담당이 둘이면 읽기는 넓고 쓰기 테넌트는 아직 없다.
runWithTenant(null, () => {
  assert.equal(getCurrentTenantId(), null, "쓰기 테넌트는 학생을 고르기 전까지 비어 있다");
  assert.deepEqual(getReadTenantIds(), ["tenant_a", "tenant_b"]);

  const query = applyTenantFilterToQuery("students", "select=*", getReadTenantIds());
  assert.equal(
    query,
    `select=*&tenant_id=in.${encodeURIComponent('("tenant_a","tenant_b")')}`,
    "둘 이상이면 in.(...) 이고 각 값은 큰따옴표로 감싼다"
  );

  // 학생을 고른 뒤 그 학생의 테넌트로 쓰기를 고정한다.
  setWriteTenant("tenant_b");
  assert.equal(getCurrentTenantId(), "tenant_b");
  assert.deepEqual(getReadTenantIds(), ["tenant_a", "tenant_b"], "읽기 범위는 그대로 유지");
}, { readTenantIds: ["tenant_a", "tenant_b"] });

// 담당 밖 테넌트로는 쓰기를 고정할 수 없다 — 기기 격리의 핵심.
runWithTenant(null, () => {
  assert.throws(() => setWriteTenant("tenant_c"), /허용되지 않은 테넌트/);
  assert.throws(() => setWriteTenant(""), /쓰기 테넌트가 필요/);
}, { readTenantIds: ["tenant_a", "tenant_b"] });

// 스코핑 플래그가 꺼져 있으면 필터를 붙이지 않는다(기존 동작 유지).
globalThis.process.env.MULTITENANT_SCOPING = "false";
enterTenantContext(null, { readTenantIds: ["tenant_a", "tenant_b"] });
assert.equal(
  applyTenantFilterToQuery("students", "select=*", ["tenant_a", "tenant_b"]),
  "select=*",
  "플래그 OFF 면 원본 쿼리 그대로"
);

// 스코핑 대상이 아닌 테이블은 켜져 있어도 필터를 붙이지 않는다.
// kiosk_devices 는 여러 테넌트를 가로지르는 것이 존재 이유라 반드시 여기에 속해야 한다.
globalThis.process.env.MULTITENANT_SCOPING = "true";
assert.equal(
  applyTenantFilterToQuery("kiosk_devices", "select=*", ["tenant_a"]),
  "select=*",
  "kiosk_devices 는 테넌트 스코핑 대상이 아니다"
);

console.log("kiosk device registry: 토큰·캐시·기기별 테넌트 읽기/쓰기 범위 계약 통과");

// 키오스크(로비 태블릿) 기기 등록부.
//
// 왜 필요한가: 예전에는 `ACADEMY_KIOSK_TOKEN` 하나를 모든 태블릿이 공유했고,
// 테넌트가 "tenant_default" 로 하드코딩돼 있었다. 그래서
//   1) 태블릿을 구별할 수 없고(하나가 유출되면 전부 교체),
//   2) 다른 선생님(다른 테넌트) 학생은 태블릿에 아예 뜨지 않았다.
//
// 이 모듈은 "태블릿 하나 = 기기 행 하나" 로 바꾼다. 기기 행에 적힌 tenantIds 범위만
// 그 태블릿이 볼 수 있고, 출결 저장은 학생이 속한 테넌트로 들어가되 그 테넌트가
// 기기 허용 목록 안에 있을 때만 허용된다(kiosk 가 담당 밖에 쓰는 것을 구조적으로 막는다).
//
// 순수 모듈: DB 접근은 loadDeviceByTokenHash 로 주입받는다.

import crypto from "node:crypto";

/**
 * 태블릿이 보내는 토큰을 조회 키로 바꾼다.
 * 토큰은 고엔트로피 난수라 salt 없이 sha256 으로 충분하고, 그래야 인덱스 조회가 된다.
 */
export function hashKioskToken(token) {
  return crypto.createHash("sha256").update(String(token || ""), "utf8").digest("hex");
}

/** 새 기기용 토큰을 만든다. 이 원본 값은 태블릿에만 심고 서버는 해시만 저장한다. */
export function createKioskToken() {
  return `kiosk_${crypto.randomBytes(24).toString("hex")}`;
}

export function normalizeKioskDevice(row) {
  if (!row) return null;
  const tenantIds = [
    ...new Set(
      (Array.isArray(row.tenant_ids) ? row.tenant_ids : [])
        .map((value) => String(value || "").trim())
        .filter(Boolean)
    )
  ];
  return {
    kioskId: String(row.kiosk_id || ""),
    label: String(row.label || ""),
    tenantIds,
    isActive: row.is_active !== false
  };
}

/** 이 기기가 해당 테넌트에 쓸 수 있는가. */
export function isTenantAllowedForDevice(device, tenantId) {
  const target = String(tenantId || "").trim();
  if (!device || !target) return false;
  return device.tenantIds.includes(target);
}

/**
 * 토큰 → 기기 조회. 요청마다 DB 를 때리지 않도록 짧은 TTL 캐시를 둔다.
 * 기기를 비활성화해도 최대 ttlMs 동안은 통과하므로 TTL 은 짧게 유지한다.
 *
 * @param {Object} deps
 * @param {(tokenHash: string) => Promise<*>} deps.loadDeviceByTokenHash DB 행(raw) 을 돌려준다.
 * @param {() => number} [deps.now]
 * @param {number} [deps.ttlMs]
 */
export function createKioskDeviceRegistry({ loadDeviceByTokenHash, now = Date.now, ttlMs = 60_000 }) {
  const cache = new Map();

  async function resolveDevice(token) {
    const rawToken = String(token || "").trim();
    if (!rawToken) return null;
    const tokenHash = hashKioskToken(rawToken);

    const cached = cache.get(tokenHash);
    if (cached && cached.expiresAt > now()) return cached.device;

    let device = null;
    try {
      device = normalizeKioskDevice(await loadDeviceByTokenHash(tokenHash));
    } catch {
      // 조회 실패는 "인증 실패" 로 다룬다. 캐시에 넣지 않아 다음 요청에서 다시 시도한다.
      return null;
    }
    if (device && !device.isActive) device = null;
    cache.set(tokenHash, { device, expiresAt: now() + ttlMs });
    return device;
  }

  function clearCache() {
    cache.clear();
  }

  return Object.freeze({ clearCache, resolveDevice });
}

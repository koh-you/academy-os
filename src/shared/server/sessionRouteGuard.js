// @ts-check

// @ts-expect-error -- no @types/node in this project; node: imports are unresolved for type-checking only, runtime is unaffected
import crypto from "node:crypto";
// @ts-expect-error -- no @types/node in this project; node: imports are unresolved for type-checking only, runtime is unaffected
import { Buffer } from "node:buffer";

/** @typedef {import("./routeRegistryTypes.js").MinimalHttpRequest} MinimalHttpRequest */

export function timingSafeEqualText(left = "", right = "") {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

/**
 * @param {Object} deps
 * @param {(request: MinimalHttpRequest, name: string) => string|string[]} deps.getRequestHeader
 * @param {() => string} deps.getSecret
 * @param {() => string} [deps.getOpsSecret] -- ops(기계) 토큰 서명 전용 비밀. 미지정 시 getSecret.
 * @param {() => number} [deps.now]
 */
export function createSessionRouteGuard({ getRequestHeader, getSecret, getOpsSecret, now = () => Date.now() }) {
  const resolveOpsSecret = getOpsSecret || getSecret;
  const OPS_SCOPES = ["read", "cas-write", "highrisk"];

  function encodeBase64Url(value) {
    return Buffer.from(JSON.stringify(value)).toString("base64url");
  }

  function signSessionPayload(payload) {
    return crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
  }

  function signOpsPayload(payload) {
    return crypto.createHmac("sha256", resolveOpsSecret()).update(payload).digest("base64url");
  }

  function createPortalSessionToken(account) {
    const payload = encodeBase64Url({
      role: account.role,
      studentId: account.studentId,
      name: account.name,
      exp: now() + 1000 * 60 * 60 * 24 * 14
    });
    return `${payload}.${signSessionPayload(payload)}`;
  }

  function createTeacherSessionToken(account) {
    const payload = encodeBase64Url({
      role: "teacher",
      teacherId: account.teacherId,
      name: account.name,
      // 멀티테넌트 1단계: 소속 학원 식별자. 단일 교사 데이터는 "tenant_default".
      tenantId: account.tenantId || "tenant_default",
      // 화면 범위: "owner"(전체) | "assistant"(출결·수업 캘린더·학생 명단만).
      teacherRole: account.teacherRole || "owner",
      exp: now() + 1000 * 60 * 60 * 8
    });
    return `${payload}.${signSessionPayload(payload)}`;
  }

  /**
   * ops(기계) 토큰. Claude/Codex 가 최소권한으로 운영 API 를 호출할 때 사용.
   * @param {{ scope: string, tenantId?: string|null, crossTenant?: boolean, label?: string, ttlMs?: number }} options
   */
  function createOpsSessionToken({ scope, tenantId = null, crossTenant = false, label = "", ttlMs } = {}) {
    if (!OPS_SCOPES.includes(scope)) throw new Error(`잘못된 ops scope: ${scope}`);
    if (!tenantId && !crossTenant) throw new Error("ops 토큰에는 tenantId 또는 crossTenant:true 가 필요합니다.");
    const defaultTtl = scope === "read" ? 1000 * 60 * 60 * 2 : scope === "cas-write" ? 1000 * 60 * 30 : 1000 * 60 * 15;
    const payload = encodeBase64Url({
      role: "ops",
      scope,
      tenantId: crossTenant ? null : tenantId,
      crossTenant: Boolean(crossTenant),
      label: String(label || ""),
      exp: now() + (Number(ttlMs) > 0 ? Number(ttlMs) : defaultTtl)
    });
    return `${payload}.${signOpsPayload(payload)}`;
  }

  function verifySignedSessionToken(token = "") {
    const [payload, signature] = String(token).split(".");
    if (!payload || !signature || !timingSafeEqualText(signSessionPayload(payload), signature)) return null;
    try {
      const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
      return Number(session.exp) >= now() ? session : null;
    } catch {
      return null;
    }
  }

  function verifyOpsSessionToken(token = "") {
    const [payload, signature] = String(token).split(".");
    if (!payload || !signature || !timingSafeEqualText(signOpsPayload(payload), signature)) return null;
    try {
      const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
      if (session.role !== "ops" || !OPS_SCOPES.includes(session.scope)) return null;
      if (!session.tenantId && !session.crossTenant) return null;
      return Number(session.exp) >= now() ? session : null;
    } catch {
      return null;
    }
  }

  function verifyPortalSessionToken(token = "") {
    const session = verifySignedSessionToken(token);
    return session?.studentId && ["student", "parent"].includes(session.role) ? session : null;
  }

  function verifyTeacherSessionToken(token = "") {
    const session = verifySignedSessionToken(token);
    return session?.teacherId && session.role === "teacher" ? session : null;
  }

  /** @param {MinimalHttpRequest} request */
  function getAuthorizationToken(request) {
    return String(getRequestHeader(request, "authorization") ?? "").replace(/^Bearer\s+/i, "");
  }

  /** @param {MinimalHttpRequest} request */
  function getPortalSession(request) {
    return verifyPortalSessionToken(getAuthorizationToken(request));
  }

  /** @param {MinimalHttpRequest} request */
  function getTeacherSession(request) {
    return verifyTeacherSessionToken(getAuthorizationToken(request));
  }

  /** @param {MinimalHttpRequest} request */
  function getOpsSession(request) {
    return verifyOpsSessionToken(getAuthorizationToken(request));
  }

  /** @param {MinimalHttpRequest} request */
  function getTeacherOrPortalSession(request) {
    const token = getAuthorizationToken(request);
    const teacherSession = verifyTeacherSessionToken(token);
    const portalSession = teacherSession ? null : verifyPortalSessionToken(token);
    return { portalSession, teacherSession };
  }

  return Object.freeze({
    createOpsSessionToken,
    createPortalSessionToken,
    createTeacherSessionToken,
    getAuthorizationToken,
    getOpsSession,
    getPortalSession,
    getTeacherOrPortalSession,
    getTeacherSession,
    verifyOpsSessionToken,
    verifyPortalSessionToken,
    verifySignedSessionToken,
    verifyTeacherSessionToken
  });
}

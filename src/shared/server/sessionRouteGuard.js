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
 * @param {() => number} [deps.now]
 */
export function createSessionRouteGuard({ getRequestHeader, getSecret, now = () => Date.now() }) {
  function encodeBase64Url(value) {
    return Buffer.from(JSON.stringify(value)).toString("base64url");
  }

  function signSessionPayload(payload) {
    return crypto.createHmac("sha256", getSecret()).update(payload).digest("base64url");
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
  function getTeacherOrPortalSession(request) {
    const token = getAuthorizationToken(request);
    const teacherSession = verifyTeacherSessionToken(token);
    const portalSession = teacherSession ? null : verifyPortalSessionToken(token);
    return { portalSession, teacherSession };
  }

  return Object.freeze({
    createPortalSessionToken,
    createTeacherSessionToken,
    getAuthorizationToken,
    getPortalSession,
    getTeacherOrPortalSession,
    getTeacherSession,
    verifyPortalSessionToken,
    verifySignedSessionToken,
    verifyTeacherSessionToken
  });
}

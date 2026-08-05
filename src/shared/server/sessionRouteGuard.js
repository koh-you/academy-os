import crypto from "node:crypto";
import { Buffer } from "node:buffer";

export function timingSafeEqualText(left = "", right = "") {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

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

  function getAuthorizationToken(request) {
    return String(getRequestHeader(request, "authorization") ?? "").replace(/^Bearer\s+/i, "");
  }

  function getPortalSession(request) {
    return verifyPortalSessionToken(getAuthorizationToken(request));
  }

  function getTeacherSession(request) {
    return verifyTeacherSessionToken(getAuthorizationToken(request));
  }

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

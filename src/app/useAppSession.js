import { useState } from "react";
import { DEFAULT_TEACHER_ID } from "../shared/utils/sessionActor.js";
import { DEFAULT_TENANT_ID } from "../shared/utils/tenantIdScope.js";

function safeDecodeURIComponent(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return "";
  }
}

function parseTeacherSession(rawValue) {
  if (!rawValue) return null;
  for (const candidate of [rawValue, safeDecodeURIComponent(rawValue)]) {
    if (!candidate) continue;
    try {
      const parsed = JSON.parse(candidate);
      if (parsed?.role === "teacher") return parsed;
    } catch {
      // Try the next representation.
    }
  }
  return null;
}

function readStorageValue(storage, key) {
  try {
    return storage?.getItem(key) ?? "";
  } catch {
    return "";
  }
}

function writeStorageValue(storage, key, value) {
  try {
    storage?.setItem(key, value);
  } catch {
    // Keep the other session persistence channels available.
  }
}

function removeStorageValue(storage, key) {
  try {
    storage?.removeItem(key);
  } catch {
    // Keep logout usable when one storage channel is unavailable.
  }
}

function readCookieValue(documentTarget, name) {
  const encodedName = `${encodeURIComponent(name)}=`;
  return String(documentTarget?.cookie ?? "")
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(encodedName))
    ?.slice(encodedName.length) ?? "";
}

function normalizeTeacherSessionForStorage(session) {
  if (session?.role !== "teacher") return null;
  const { actorId, name, role, sessionToken, teacherId, tenantId, teacherRole } = session;
  return {
    actorId,
    name,
    role,
    sessionToken,
    teacherId,
    tenantId: tenantId || DEFAULT_TENANT_ID,
    teacherRole: teacherRole || "owner"
  };
}

function encodeTeacherSession(session) {
  try {
    const safeSession = normalizeTeacherSessionForStorage(session);
    return safeSession ? JSON.stringify(safeSession) : "";
  } catch {
    return "";
  }
}

// 활동 중 세션 연장 간격. App 의 활동 감지 effect 가 마지막 갱신 시각과 비교한다.
export const sessionRefreshMinimumIntervalMs = 30 * 60 * 1000;

export function isSessionRefreshDue(lastRefreshAt, now, minimumIntervalMs = sessionRefreshMinimumIntervalMs) {
  return now - Number(lastRefreshAt || 0) >= minimumIntervalMs;
}

/**
 * "지금 어느 자료를 보고 있나" 를 한 문자열로. 부트스트랩(전체 조회)은 이 값이 바뀔 때만
 * 다시 돈다 — 계정·역할·테넌트·원장이 보는 선생님. 세션 토큰은 넣지 않는다: 활동 중
 * 갱신으로 토큰만 바뀔 때 16개 조회를 다시 돌고 화면 상태를 서버 값으로 덮어쓸 이유가
 * 없다.
 */
export function createSessionDataIdentity(session, viewTenantId = "") {
  if (!session) return "";
  return [
    session.role ?? "",
    session.teacherId ?? "",
    session.studentId ?? "",
    session.parentId ?? "",
    session.tenantId ?? "",
    viewTenantId ?? ""
  ].join("|");
}

export function readStoredTeacherSession({ documentTarget, storageKey, windowTarget }) {
  if (!windowTarget) return null;
  return (
    parseTeacherSession(readStorageValue(windowTarget.localStorage, storageKey)) ||
    parseTeacherSession(readStorageValue(windowTarget.sessionStorage, storageKey)) ||
    parseTeacherSession(readCookieValue(documentTarget, storageKey))
  );
}

export function persistTeacherSession({ documentTarget, session, storageKey, windowTarget }) {
  if (!windowTarget) return;
  const storedValue = encodeTeacherSession(session);
  if (storedValue) {
    writeStorageValue(windowTarget.localStorage, storageKey, storedValue);
    writeStorageValue(windowTarget.sessionStorage, storageKey, storedValue);
    if (documentTarget) {
      documentTarget.cookie = `${encodeURIComponent(storageKey)}=${encodeURIComponent(storedValue)}; max-age=${60 * 60 * 24 * 30}; path=/; samesite=lax`;
    }
    return;
  }
  removeStorageValue(windowTarget.localStorage, storageKey);
  removeStorageValue(windowTarget.sessionStorage, storageKey);
  if (documentTarget) {
    documentTarget.cookie = `${encodeURIComponent(storageKey)}=; max-age=0; path=/; samesite=lax`;
  }
}

export async function authenticateAppSession({
  loginId,
  password,
  request,
  role,
  teacherAccount
}) {
  try {
    const result = await request("/api/auth/login", { role, loginId, password });
    if (role === "teacher" && result.authenticated) {
      return {
        ok: true,
        session: {
          role: "teacher",
          actorId: result.account?.teacherId || DEFAULT_TEACHER_ID,
          name: result.account?.name || teacherAccount.name,
          teacherId: result.account?.teacherId || "",
          tenantId: result.account?.tenantId || DEFAULT_TENANT_ID,
          teacherRole: result.account?.teacherRole || "owner",
          sessionToken: result.account?.sessionToken || ""
        }
      };
    }
    if (["student", "parent"].includes(role) && result.authenticated && result.account?.studentId) {
      return {
        ok: true,
        session: {
          role,
          actorId: result.account.actorId,
          studentId: result.account.studentId,
          name: result.account.name,
          sessionToken: result.account.sessionToken
        }
      };
    }
  } catch (error) {
    console.warn(`Server ${role === "teacher" ? "teacher" : "student"} auth failed.`, error);
  }

  const message = role === "teacher"
    ? "선생님 아이디 또는 비밀번호가 맞지 않습니다."
    : role === "student"
      ? "학생 아이디 또는 비밀번호가 맞지 않습니다."
      : role === "parent"
        ? "학부모 아이디 또는 비밀번호가 맞지 않습니다."
        : "지원하지 않는 로그인 역할입니다.";
  return { ok: false, message };
}

export function useAppSession({
  documentTarget,
  onLogout,
  onSessionAccepted,
  request,
  storageKey,
  teacherAccount,
  windowTarget
}) {
  const [session, setSession] = useState(() =>
    readStoredTeacherSession({ documentTarget, storageKey, windowTarget })
  );

  async function login(role, loginId, password) {
    const result = await authenticateAppSession({
      loginId,
      password,
      request,
      role,
      teacherAccount
    });
    if (!result.ok) return result;
    setSession(result.session);
    if (result.session.role === "teacher") {
      persistTeacherSession({
        documentTarget,
        session: result.session,
        storageKey,
        windowTarget
      });
    }
    onSessionAccepted(result.session);
    return { ok: true };
  }

  // 아직 살아 있는 교사 세션을 새 토큰으로 갈아끼운다. 화면이 활동 중일 때만 부른다
  // (App 참고). 서버가 거절하면 세션은 그대로 두고 실패만 알린다 — 여기서 로그아웃까지
  // 해버리면 일시적인 네트워크 오류로 작성 중인 수업일지가 날아간다.
  async function refresh() {
    if (session?.role !== "teacher" || !session?.sessionToken) return { ok: false };
    try {
      const result = await request("/api/auth/refresh", {});
      const sessionToken = result?.account?.sessionToken;
      if (!sessionToken) return { ok: false };
      const nextSession = { ...session, sessionToken };
      setSession(nextSession);
      persistTeacherSession({ documentTarget, session: nextSession, storageKey, windowTarget });
      return { ok: true };
    } catch (error) {
      return { ok: false, expired: Boolean(error?.sessionExpired) };
    }
  }

  function logout() {
    persistTeacherSession({ documentTarget, session: null, storageKey, windowTarget });
    setSession(null);
    onLogout();
  }

  return { login, logout, refresh, session };
}

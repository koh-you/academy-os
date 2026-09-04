import { useState } from "react";

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
    tenantId: tenantId || "tenant_default",
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
          actorId: "instructor_owner_001",
          name: result.account?.name || teacherAccount.name,
          teacherId: result.account?.teacherId || "",
          tenantId: result.account?.tenantId || "tenant_default",
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

  function logout() {
    persistTeacherSession({ documentTarget, session: null, storageKey, windowTarget });
    setSession(null);
    onLogout();
  }

  return { login, logout, session };
}

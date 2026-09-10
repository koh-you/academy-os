import { canTeacherRoleCallRoute } from "../server/apiAccessPolicy.js";
import { resolveKioskDeviceToken } from "./kioskToken.js";

const localApiBaseUrl = "http://127.0.0.1:8787";
const productionApiBaseUrl = "https://koh-you-math-academy-os-api.onrender.com";
const configuredApiBaseUrl = (import.meta.env?.VITE_API_BASE_URL || "").trim();

function isLocalBrowser() {
  if (typeof window === "undefined") return true;
  return ["localhost", "127.0.0.1"].includes(window.location.hostname);
}

function isLocalApiBaseUrl(value) {
  return /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/i.test(value);
}

function getApiBaseUrl() {
  if (typeof window === "undefined") return localApiBaseUrl;
  if (!isLocalBrowser() && isLocalApiBaseUrl(configuredApiBaseUrl)) return productionApiBaseUrl;
  if (configuredApiBaseUrl) return configuredApiBaseUrl;
  return isLocalBrowser() ? localApiBaseUrl : productionApiBaseUrl;
}

export const apiBaseUrl = getApiBaseUrl().replace(/\/$/, "");

export function apiUrl(path) {
  return `${apiBaseUrl}${path}`;
}

// 로그인 세션 토큰을 모든 API 요청에 Authorization 헤더로 첨부한다.
// App 이 로그인/세션 복원/로그아웃 시 setApiAuthToken 을 호출한다.
let currentAuthToken = "";
export function setApiAuthToken(token) {
  currentAuthToken = String(token || "");
}

// 키오스크(/attendance 로비 태블릿) 기기 토큰. **명시적으로 켠 진입점만** 보낸다.
//
// 예전에는 빌드에 박힌 값을 모든 진입점이 무조건 보냈다. 그래서 교사 브라우저도
// X-Kiosk-Token 을 달고 다녔고, 로그인 세션이 만료되자 서버가 그 요청을 키오스크로
// 판정해 kiosk_forbidden 을 돌려줬다. 교사 화면에는 "다시 로그인하세요" 대신
// 원인 모를 저장 실패가 떴다(2026-09-07 수업일지 저장 실패).
//
// 키오스크 토큰은 태블릿 진입점(kioskMain.jsx)만의 것이다. 교사 앱은 보내지 않는다.
let kioskToken = "";

/** 태블릿 진입점이 앱을 그리기 전에 1회 호출한다. */
export function enableKioskDeviceToken() {
  kioskToken = resolveKioskDeviceToken(import.meta.env?.VITE_KIOSK_TOKEN);
  return kioskToken;
}

// 세션 만료(401)를 앱 한 곳으로 모으는 통로.
//
// 교사 세션이 끝나면 서버는 401 auth_required 를 준다. 예전에는 화면이 그걸 그냥
// "저장 실패"로만 보여줬다. 로그인 정보는 브라우저에 30일짜리로 남아 있어서 새로고침해도
// 같은 만료 토큰을 다시 보내고, 그래서 원장님이 이유를 모른 채 저장을 반복했다
// (2026-09-08 수업일지·출결 장애). 401 은 반드시 여기로 모아 재로그인을 안내한다.
const unauthorizedListeners = new Set();

/** 401 이 오면 부른다. 해제 함수를 돌려준다. */
export function onApiUnauthorized(listener) {
  if (typeof listener !== "function") return () => {};
  unauthorizedListeners.add(listener);
  return () => {
    unauthorizedListeners.delete(listener);
  };
}

export function isSessionExpiredError(error) {
  return Boolean(error?.sessionExpired);
}

// 응답 오류를 한 모양으로 만든다. 401 이면 sessionExpired 를 달아서, 호출부가
// "저장 실패"와 "다시 로그인해야 함"을 구분할 수 있게 한다.
function createApiError(response, result, fallbackMessage) {
  const sessionExpired = response.status === 401 || result?.code === "auth_required";
  // 권한 코드는 그대로 보여주면 "role_forbidden" 같은 영문 코드가 화면에 뜬다.
  // 읽을 수 있는 문장으로 바꿔서, 쓰는 사람이 "고장" 과 "권한 없음" 을 구분할 수 있게 한다.
  const roleForbidden = result?.code === "role_forbidden";
  const error = new Error(
    sessionExpired
      ? "로그인 세션이 만료되었습니다. 다시 로그인해 주세요."
      : roleForbidden
        ? "이 계정에는 이 기능의 권한이 없습니다. 원장님께 문의해 주세요."
        : result?.error || fallbackMessage
  );
  error.audit = result?.audit;
  error.code = result?.code;
  error.result = result;
  error.responseReceived = true;
  error.statusCode = response.status;
  if (sessionExpired) {
    error.sessionExpired = true;
    for (const listener of unauthorizedListeners) {
      try {
        listener(error);
      } catch {
        // 안내 한 곳이 실패해도 다른 구독자와 원래 오류 전파를 막지 않는다.
      }
    }
  }
  return error;
}

// 원장이 "다른 선생님으로 보기" 를 켜면 그 테넌트를 모든 요청에 실어 보낸다.
// 서버가 owner 인지, 실제 등록된 테넌트인지 다시 확인하므로 이 값만으로는 권한이 생기지 않는다.
let viewTenantId = "";

export function setViewTenantId(tenantId) {
  viewTenantId = String(tenantId || "");
}

export function getViewTenantId() {
  return viewTenantId;
}

export function withAuthHeaders(headers = {}) {
  const merged = { ...headers };
  // 호출부가 Authorization 을 직접 넘겼으면(보고서 저장 등) 그쪽을 존중한다.
  if (currentAuthToken && !merged.Authorization) merged.Authorization = `Bearer ${currentAuthToken}`;
  if (kioskToken) merged["X-Kiosk-Token"] = kioskToken;
  if (viewTenantId) merged["X-View-Tenant-Id"] = viewTenantId;
  return merged;
}

// 인증 헤더가 붙은 fetch. 직접 `fetch(apiUrl(path))` 를 쓰면 토큰이 빠져 401 이 되므로
// 앱 코드는 반드시 이걸 쓴다. path 는 apiUrl 로 감싸므로 "/api/..." 형태를 그대로 넘긴다.
export function apiFetch(path, options = {}) {
  return fetchWithAuth(apiUrl(path), options);
}

// fetch 와 시그니처가 같은(절대 URL 을 받는) 버전. 도메인 모듈이 `fetchImpl` 로 주입받는 자리에
// 전역 fetch 대신 이걸 넘겨야 인증 헤더가 붙는다.
export function fetchWithAuth(url, options = {}) {
  return fetch(url, { ...options, headers: withAuthHeaders(options.headers) });
}

// 이 역할이 못 부르는 라우트는 아예 부르지 않는다. 서버가 403 으로 막아주긴 하지만,
// 로그인할 때마다 콘솔이 403 으로 도배되면 진짜 오류가 묻힌다(2026-09-08 협력 교사
// 로그인 시 14건). 판정은 서버와 같은 정책 모듈을 써서 목록이 갈라지지 않게 한다.
// 건너뛴 요청은 실패가 아니라 "해당 없음"이므로 ok:false + skipped:true 로 답한다.
function skippedApiResponse() {
  return new Response(JSON.stringify({ ok: false, skipped: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

// 지금 로그인한 교사 역할. 화면이 "이 기능을 쓸 수 있나" 를 물을 때 쓴다.
// App 이 로그인·복원·로그아웃 때 설정한다.
let currentTeacherRole = "owner";

export function setCurrentTeacherRole(role) {
  currentTeacherRole = String(role || "owner");
}

/**
 * 이 계정이 알림톡을 보낼 수 있나. 판정은 **서버와 같은 정책 모듈**에서 파생한다.
 * 그래서 나중에 알림톡 권한을 다시 열면 화면 잠금도 저절로 풀린다 — 화면에 별도
 * 목록을 두면 서버는 열렸는데 버튼은 잠긴 상태가 남는다.
 */
export function canCurrentRoleSendAlimtalk() {
  return canTeacherRoleCallRoute(currentTeacherRole, "POST", "/api/notifications/comment-alimtalk");
}

export function roleAwareApiFetch(path, teacherRole, options = {}) {
  const pathname = String(path).split("?")[0];
  if (!canTeacherRoleCallRoute(teacherRole, "GET", pathname)) {
    return Promise.resolve(skippedApiResponse());
  }
  return apiFetch(path, options);
}

export async function postJson(path, body) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: withAuthHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) throw createApiError(response, result, "API 저장 실패");
  return result;
}

export function createRequestTimeoutError(timeoutMs, timeoutMessage = "") {
  const error = new Error(timeoutMessage || `요청 시간이 ${Math.round(timeoutMs / 1000)}초를 넘었습니다. 잠시 뒤 상태를 확인해 주세요.`);
  error.name = "TimeoutError";
  error.requestTimedOut = true;
  return error;
}

export function isRequestTimeoutError(error) {
  return Boolean(
    error?.requestTimedOut ||
    error?.name === "TimeoutError" ||
    error?.name === "AbortError" ||
    String(error?.message ?? "").includes("시간을 넘었습니다")
  );
}

export async function getJsonWithTimeout(path, timeoutMs = 12000, timeoutMessage = "") {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(apiUrl(path), {
      cache: "no-store",
      headers: withAuthHeaders(),
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw createApiError(response, result, `API 조회 실패: ${response.status}`);
    }
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      throw createRequestTimeoutError(timeoutMs, timeoutMessage);
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export async function getJsonWithHeaders(path, headers = {}) {
  const response = await fetch(apiUrl(path), {
    cache: "no-store",
    headers: withAuthHeaders(headers)
  });
  const result = await response.json();
  if (!response.ok || result.ok === false) {
    throw createApiError(response, result, `API 조회 실패: ${response.status}`);
  }
  return result;
}

export async function postJsonWithTimeout(path, body, timeoutMs = 30000, timeoutMessage = "") {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(apiUrl(path), {
      method: "POST",
      headers: withAuthHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify(body),
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw createApiError(response, result, "API 저장 실패");
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      throw createRequestTimeoutError(timeoutMs, timeoutMessage);
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export async function deleteJsonWithTimeout(path, body, timeoutMs = 30000, timeoutMessage = "") {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(apiUrl(path), {
      method: "DELETE",
      headers: withAuthHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify(body),
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw createApiError(response, result, "API 삭제 실패");
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      throw createRequestTimeoutError(timeoutMs, timeoutMessage);
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

export async function postJsonWithHeaders(path, body, headers = {}) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: withAuthHeaders({ "Content-Type": "application/json", ...headers }),
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!response.ok || result.ok === false) {
    throw createApiError(response, result, "요청에 실패했습니다.");
  }
  return result;
}

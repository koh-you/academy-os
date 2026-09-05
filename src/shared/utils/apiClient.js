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

// 키오스크(/attendance 로비 태블릿)는 로그인이 없으므로 빌드에 심어둔 반(半)공개 토큰을
// X-Kiosk-Token 으로 보낸다. 서버는 이 토큰이 있으면 GET /api/* + 출결 체크인만 허용한다.
// 교사/ops 토큰이 있으면 서버가 그쪽을 우선하므로 로그인 사용자에겐 무해하다.
const kioskToken = (import.meta.env?.VITE_KIOSK_TOKEN || "").trim();

export function withAuthHeaders(headers = {}) {
  const merged = { ...headers };
  // 호출부가 Authorization 을 직접 넘겼으면(보고서 저장 등) 그쪽을 존중한다.
  if (currentAuthToken && !merged.Authorization) merged.Authorization = `Bearer ${currentAuthToken}`;
  if (kioskToken) merged["X-Kiosk-Token"] = kioskToken;
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

export async function postJson(path, body) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: withAuthHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    const error = new Error(result.error || "API 저장 실패");
    error.audit = result.audit;
    error.code = result.code;
    error.result = result;
    error.statusCode = response.status;
    throw error;
  }
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
      throw new Error(result.error || `API 조회 실패: ${response.status}`);
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
    const error = new Error(result.error || `API 조회 실패: ${response.status}`);
    error.responseReceived = true;
    error.statusCode = response.status;
    throw error;
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
    if (!response.ok || !result.ok) {
      const error = new Error(result.error || "API 저장 실패");
      error.audit = result.audit;
      error.code = result.code;
      error.result = result;
      error.statusCode = response.status;
      throw error;
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
    if (!response.ok || !result.ok) {
      const error = new Error(result.error || "API 삭제 실패");
      error.audit = result.audit;
      error.statusCode = response.status;
      throw error;
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

export async function postJsonWithHeaders(path, body, headers = {}) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: withAuthHeaders({ "Content-Type": "application/json", ...headers }),
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!response.ok || result.ok === false) {
    const error = new Error(result.error || "요청에 실패했습니다.");
    error.responseReceived = true;
    error.statusCode = response.status;
    throw error;
  }
  return result;
}

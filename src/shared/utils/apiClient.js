const localApiBaseUrl = "http://127.0.0.1:8787";
const productionApiBaseUrl = "https://koh-you-math-academy-os-api.onrender.com";
const configuredApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "").trim();

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

export async function postJson(path, body) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "API 저장 실패");
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

export async function postJsonWithTimeout(path, body, timeoutMs = 30000, timeoutMessage = "") {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(apiUrl(path), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error(result.error || "API 저장 실패");
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
    headers: { "Content-Type": "application/json", ...headers },
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

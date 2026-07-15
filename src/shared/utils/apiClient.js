export const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8787").replace(/\/$/, "");

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
  if (!response.ok || result.ok === false) throw new Error(result.error || "요청에 실패했습니다.");
  return result;
}

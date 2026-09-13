// 문제은행 API 호출. 서버 라우트는 src/shared/server/problemBankRouteRegistry.js.

import { apiUrl, getJsonWithTimeout, postJson, postJsonWithTimeout, withAuthHeaders } from "../../shared/utils/apiClient.js";

/**
 * 네트워크 단절(TypeError: Failed to fetch)이나 시간 초과는 API 서버가 재배포·절전에서 깨어나는 중일 때 난다.
 * 그런 오류만 잠시 뒤 다시 시도한다. 4xx/5xx 응답은 서버가 살아 있다는 뜻이므로 그대로 던진다.
 */
function isTransientNetworkError(error) {
  if (!error) return false;
  if (error.name === "AbortError" || error.name === "TimeoutError" || error.requestTimedOut) return true;
  return error instanceof TypeError || /Failed to fetch|NetworkError|Load failed/i.test(String(error.message));
}

async function withWakeRetry(run, { attempts = 3, delayMs = 4000, onRetry } = {}) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await run();
    } catch (error) {
      lastError = error;
      if (!isTransientNetworkError(error) || attempt === attempts) throw error;
      onRetry?.(attempt, error);
      await new Promise((resolve) => window.setTimeout(resolve, delayMs * attempt));
    }
  }
  throw lastError;
}

/** 서버가 깨어 있는지 본다. 잠들어 있으면 최대 90초까지 기다린다(Render 무료 인스턴스 재시작). */
export async function wakeProblemBankApi({ onWait } = {}) {
  const deadline = Date.now() + 90000;
  let waited = false;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(apiUrl("/health"), { cache: "no-store" });
      if (response.ok) return true;
    } catch {
      // 아직 응답 없음 — 아래에서 기다린다.
    }
    if (!waited) onWait?.();
    waited = true;
    await new Promise((resolve) => window.setTimeout(resolve, 3000));
  }
  return false;
}

export function fetchProblemBankBooks() {
  return withWakeRetry(() => getJsonWithTimeout("/api/problem-bank/books", 45000).then((result) => result.books ?? []));
}

/** 교재 이미지 누락 검사: 영역 표와 Storage 파일을 대조한다. */
export function auditProblemBankBook(bookId) {
  return getJsonWithTimeout(`/api/problem-bank/book-audit?bookId=${encodeURIComponent(bookId)}`, 60000);
}

export function fetchProblemBankBook(bookId) {
  return withWakeRetry(() => getJsonWithTimeout(`/api/problem-bank/book?bookId=${encodeURIComponent(bookId)}`, 45000));
}

export function updateProblemBankBook(bookId, patch) {
  return postJson("/api/problem-bank/book", { bookId, patch }).then((result) => result.book);
}

/** 교재와 그 아래 문항·기록·이미지를 지운다. 되돌릴 수 없다. */
export async function deleteProblemBankBook(bookId) {
  const response = await fetch(apiUrl(`/api/problem-bank/book?bookId=${encodeURIComponent(bookId)}`), {
    method: "DELETE",
    headers: withAuthHeaders()
  });
  const result = await response.json();
  if (!response.ok || !result.ok) throw new Error(result?.error || `교재 삭제 실패: ${response.status}`);
  return result;
}

/** 문항 몇 개의 영역 이미지 서명 URL. 미리보기·인쇄 직전에만 부른다. */
export function fetchProblemBankItemImages(itemIds) {
  return postJson("/api/problem-bank/item-images", { itemIds }).then((result) => result.regions ?? []);
}

export function fetchProblemBankAttempts({ bookId, studentId } = {}) {
  const query = new URLSearchParams();
  if (bookId) query.set("bookId", bookId);
  if (studentId) query.set("studentId", studentId);
  return getJsonWithTimeout(`/api/problem-bank/attempts?${query.toString()}`, 15000).then((result) => result.attempts ?? []);
}

export function saveProblemBankAttempts(entries) {
  return postJson("/api/problem-bank/attempts", { entries });
}

export function importProblemBankManifest(manifest) {
  return withWakeRetry(() => postJsonWithTimeout("/api/problem-bank/import", { manifest }, 120000, "패키지 등록이 2분을 넘었습니다."), { attempts: 2 });
}

/** 정답·해설 패키지(manifest-answers.json)를 등록된 교재에 붙인다. 이미지는 uploadProblemBankImages 로 따로 올린다. */
export function importProblemBankAnswers(manifest) {
  return postJsonWithTimeout("/api/problem-bank/import-answers", { manifest }, 120000, "정답·해설 등록이 2분을 넘었습니다.");
}

export function uploadProblemBankImages(bookId, files) {
  // 같은 파일을 다시 올려도 덮어쓰므로 재시도해도 안전하다.
  return withWakeRetry(() => postJsonWithTimeout("/api/problem-bank/images", { bookId, files }, 120000, "이미지 업로드가 2분을 넘었습니다."), { attempts: 3 });
}

/** 브라우저 File → data URL. 패키지 이미지 배치 업로드에 쓴다. */
export function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(reader.error ?? new Error("파일을 읽지 못했습니다."));
    reader.readAsDataURL(file);
  });
}

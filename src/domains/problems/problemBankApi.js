// 문제은행 API 호출. 서버 라우트는 src/shared/server/problemBankRouteRegistry.js.

import { apiUrl, getJsonWithTimeout, postJson, postJsonWithTimeout, withAuthHeaders } from "../../shared/utils/apiClient.js";

export function fetchProblemBankBooks() {
  return getJsonWithTimeout("/api/problem-bank/books", 15000).then((result) => result.books ?? []);
}

export function fetchProblemBankBook(bookId) {
  return getJsonWithTimeout(`/api/problem-bank/book?bookId=${encodeURIComponent(bookId)}`, 20000);
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
  return postJsonWithTimeout("/api/problem-bank/import", { manifest }, 120000, "패키지 등록이 2분을 넘었습니다.");
}

/** 정답·해설 패키지(manifest-answers.json)를 등록된 교재에 붙인다. 이미지는 uploadProblemBankImages 로 따로 올린다. */
export function importProblemBankAnswers(manifest) {
  return postJsonWithTimeout("/api/problem-bank/import-answers", { manifest }, 120000, "정답·해설 등록이 2분을 넘었습니다.");
}

export function uploadProblemBankImages(bookId, files) {
  return postJsonWithTimeout("/api/problem-bank/images", { bookId, files }, 120000, "이미지 업로드가 2분을 넘었습니다.");
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

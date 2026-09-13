// 문제은행 API 호출. 서버 라우트는 src/shared/server/problemBankRouteRegistry.js.

import { getJsonWithTimeout, postJson, postJsonWithTimeout } from "../../shared/utils/apiClient.js";

export function fetchProblemBankBooks() {
  return getJsonWithTimeout("/api/problem-bank/books", 15000).then((result) => result.books ?? []);
}

export function fetchProblemBankBook(bookId) {
  return getJsonWithTimeout(`/api/problem-bank/book?bookId=${encodeURIComponent(bookId)}`, 20000);
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

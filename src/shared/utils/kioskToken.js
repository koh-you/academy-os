// 태블릿(키오스크)이 자기 기기 토큰을 기억하게 한다.
//
// 왜 필요한가: 예전에는 빌드 시점 `VITE_KIOSK_TOKEN` 하나뿐이라 배포가 하나면 태블릿도
// 하나만 가능했다. 태블릿마다 다른 토큰을 주려면 빌드를 갈라야 했는데, 그러면 배포가
// 태블릿 수만큼 늘어난다. 대신 기기가 자기 토큰을 로컬에 들고 있게 한다.
//
// 설정 절차: 그 태블릿에서 딱 한 번 `/attendance?kiosk=<토큰>` 을 연다.
// 토큰이 저장되고 주소에서 지워지며, 이후로는 `/attendance` 만 열면 된다.
//
// 우선순위: URL 파라미터(설정) > 저장값 > 빌드 환경변수(기존 태블릿 폴백).

const STORAGE_KEY = "academyOs.kioskDeviceToken";
const QUERY_KEY = "kiosk";

function readStoredToken() {
  try {
    return String(window.localStorage.getItem(STORAGE_KEY) || "").trim();
  } catch {
    // 사생활 보호 모드 등에서 localStorage 접근 자체가 throw 한다.
    return "";
  }
}

function writeStoredToken(token) {
  try {
    window.localStorage.setItem(STORAGE_KEY, token);
    return true;
  } catch {
    return false;
  }
}

/**
 * 주소창에서 토큰을 지운다. 태블릿 화면·방문기록·스크린샷에 토큰이 남지 않게 한다.
 * 저장에 실패했으면 지우지 않는다 — 지웠는데 저장도 안 됐으면 토큰이 사라져 버린다.
 */
function stripTokenFromUrl() {
  try {
    const url = new URL(window.location.href);
    if (!url.searchParams.has(QUERY_KEY)) return;
    url.searchParams.delete(QUERY_KEY);
    const nextUrl = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState(null, "", nextUrl);
  } catch {
    // history 조작이 막혀 있어도 토큰은 이미 저장됐으므로 동작에는 지장이 없다.
  }
}

/**
 * 이 기기의 키오스크 토큰을 정한다. 앱 로드 시 1회 호출한다.
 * @param {string} buildTimeToken 빌드에 박힌 VITE_KIOSK_TOKEN (없으면 빈 문자열)
 * @returns {string}
 */
export function resolveKioskDeviceToken(buildTimeToken = "") {
  const fallback = String(buildTimeToken || "").trim();
  if (typeof window === "undefined") return fallback;

  let urlToken = "";
  try {
    urlToken = String(new URL(window.location.href).searchParams.get(QUERY_KEY) || "").trim();
  } catch {
    urlToken = "";
  }

  if (urlToken) {
    if (writeStoredToken(urlToken)) stripTokenFromUrl();
    return urlToken;
  }

  return readStoredToken() || fallback;
}

export const kioskTokenStorageKey = STORAGE_KEY;
export const kioskTokenQueryKey = QUERY_KEY;

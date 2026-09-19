// 브라우저 캐시를 "지금 로그인한 계정" 에 묶는다.
//
// 왜 필요한가: 화면 데이터(학생·수업·수업기록 등)는 localStorage 에 캐시되는데, 키가
// 계정과 무관한 고정 이름이다. 그래서 같은 브라우저에서 계정을 바꾸면 **이전 계정의
// 데이터가 화면에 남는다.** 서버는 정상적으로 빈 목록을 주지만, 화면은 캐시를 먼저
// 그리고 응답이 올 때까지 그대로 둔다.
//
// 2026-09-09 실제 발생: 원장 계정으로 쓰던 브라우저에서 협력 교사로 로그인하니
// 원장님 수업(일요일 시험대비 포함)이 그대로 보였다. 서버의 협력 교사 tenant 는
// 비어 있는 것을 확인했으므로 순전히 캐시 문제였다.
//
// 계정이 바뀌면 캐시를 지운다. 로그인 세션 키 자체는 지우지 않는다.

const CACHE_OWNER_KEY = "academyOs.cacheOwner.v1";

/**
 * 캐시 주인 식별자. "누구의 어느 자료를 보고 있나" 를 한 문자열로 만든다.
 *
 * 진입점(main.jsx, React 마운트 전)과 App 의 계정 전환 effect 가 **같은 식**으로 만들어야
 * 한다. 두 곳이 다른 식을 쓰면 서로의 표시를 못 알아봐 매 로드마다 캐시를 지운다 —
 * 2026-09-19 까지 실제로 그랬다(main 은 teacherId, App 은 `teacherId:viewTenantId`).
 * 원장이 다른 선생님 자료를 보는 동안만 보는 테넌트가 식별자에 들어간다.
 *
 * @param {{ teacherId?: string, teacherRole?: string, viewTenantId?: string }} identity
 * @returns {string} 로그인 정보가 없으면 빈 문자열
 */
export function createCacheOwnerId({ teacherId, teacherRole, viewTenantId } = {}) {
  const ownerId = String(teacherId ?? "").trim();
  if (!ownerId) return "";
  const viewedTenantId = teacherRole === "owner" ? String(viewTenantId ?? "").trim() : "";
  return viewedTenantId ? `${ownerId}:${viewedTenantId}` : ownerId;
}

/**
 * @param {Storage} storage
 * @param {string} accountId 지금 로그인한 계정 식별자(teacherId 등)
 * @param {string[]} cacheKeys 계정별로 갈라져야 하는 캐시 키
 * @returns {boolean} 실제로 지웠으면 true
 */
export function resetCacheForAccount(storage, accountId, cacheKeys = []) {
  const nextOwner = String(accountId ?? "").trim();
  if (!storage || !nextOwner) return false;
  let previousOwner = null;
  try {
    previousOwner = storage.getItem(CACHE_OWNER_KEY);
  } catch {
    // 사생활 보호 모드 등에서 접근 자체가 throw 한다. 캐시를 못 읽으면 지울 것도 없다.
    return false;
  }
  if (previousOwner === nextOwner) return false;

  for (const key of cacheKeys) {
    try {
      storage.removeItem(key);
    } catch {
      // 하나가 실패해도 나머지는 계속 지운다. 남기는 것보다 지우는 쪽이 안전하다.
    }
  }
  try {
    storage.setItem(CACHE_OWNER_KEY, nextOwner);
  } catch {
    // 표시를 못 남기면 다음 로드에서 한 번 더 지운다. 손해는 캐시 재조회뿐이다.
  }
  return true;
}

/** 로그아웃할 때 캐시 주인 표시를 지운다. 다음 로그인이 항상 새로 시작하게 한다. */
export function clearCacheOwner(storage) {
  try {
    storage?.removeItem(CACHE_OWNER_KEY);
  } catch {
    // 무시해도 안전하다 — 다음 계정이 다르면 어차피 주인 표시가 달라 지워진다.
  }
}

export const cacheOwnerStorageKey = CACHE_OWNER_KEY;

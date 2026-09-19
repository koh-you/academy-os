// 로그인 아이디를 이 브라우저에 기억해 둔다. **아이디와 마지막 로그인 역할만** 저장한다.
//
// 교사 토큰은 8시간짜리라 앱을 하룻밤 닫아 두면 만료되고, 그때는 다시 로그인해야 한다
// (만료된 토큰은 연장하지 않는다 — 그러면 제한이 의미를 잃는다). 그래서 재로그인 자체는
// 남는데, 매번 아이디를 다시 치는 수고까지 남길 이유는 없다.
//
// 비밀번호는 절대 저장하지 않는다. 학원 컴퓨터는 공용으로 쓰일 수 있어서, 아이디가 채워져
// 있는 것과 그냥 로그인이 되는 것은 위험이 전혀 다르다.
//
// 마지막으로 로그인에 성공한 역할(`lastRole`)도 같은 객체에 둔다(2026-09-19). 교사·학부모가
// 재로그인할 때마다 '학생' 탭에서 시작해 역할부터 다시 고르던 한 단계를 없애기 위해서다.
// 역할은 식별 정보가 아니므로 아이디 기억 체크를 풀어도 남는다.
export const rememberedLoginIdsStorageKey = "academy-os.rememberedLoginIds.v1";

const supportedRoles = ["student", "parent", "teacher"];

function readStorage(windowTarget) {
  try {
    return windowTarget?.localStorage?.getItem(rememberedLoginIdsStorageKey) ?? "";
  } catch {
    return "";
  }
}

function writeStorage(windowTarget, value) {
  try {
    if (value) windowTarget?.localStorage?.setItem(rememberedLoginIdsStorageKey, value);
    else windowTarget?.localStorage?.removeItem(rememberedLoginIdsStorageKey);
  } catch {
    // 저장 공간이 막혀도 로그인 자체는 되어야 한다.
  }
}

/** 저장본을 역할별 아이디 맵(+ lastRole)으로 정리한다. 모르는 역할·문자열 아닌 값은 버린다. */
export function normalizeRememberedLoginIds(value) {
  const source = value && typeof value === "object" ? value : {};
  const normalized = {};
  for (const role of supportedRoles) {
    const loginId = typeof source[role] === "string" ? source[role].trim() : "";
    if (loginId) normalized[role] = loginId;
  }
  if (supportedRoles.includes(source.lastRole)) normalized.lastRole = source.lastRole;
  return normalized;
}

/** 한 역할의 아이디를 넣거나(값 있음) 지운다(빈 값). 순수 함수라 저장 없이 테스트한다. */
export function applyRememberedLoginId(current, role, loginId) {
  const next = normalizeRememberedLoginIds(current);
  if (!supportedRoles.includes(role)) return next;
  const trimmed = String(loginId ?? "").trim();
  if (trimmed) next[role] = trimmed;
  else delete next[role];
  return next;
}

export function readRememberedLoginIds(windowTarget) {
  try {
    return normalizeRememberedLoginIds(JSON.parse(readStorage(windowTarget) || "{}"));
  } catch {
    return {};
  }
}

export function getRememberedLoginId(windowTarget, role) {
  if (!supportedRoles.includes(role)) return "";
  return readRememberedLoginIds(windowTarget)[role] ?? "";
}

/** 마지막으로 로그인에 성공한 역할을 기록한다. 순수 함수. 모르는 역할이면 그대로 둔다. */
export function applyLastLoginRole(current, role) {
  const next = normalizeRememberedLoginIds(current);
  if (supportedRoles.includes(role)) next.lastRole = role;
  return next;
}

/** 로그인 화면이 처음 열 역할 탭. 기록이 없으면 빈 문자열이라 호출자가 기본값을 쓴다. */
export function getLastLoginRole(windowTarget) {
  return readRememberedLoginIds(windowTarget).lastRole ?? "";
}

/**
 * 로그인에 성공했을 때 부른다. 빈 아이디를 넘기면 그 역할의 아이디 기억을 지운다.
 * 마지막 로그인 역할은 아이디 기억 여부와 상관없이 항상 갱신한다.
 */
export function saveRememberedLoginId(windowTarget, role, loginId) {
  const next = applyLastLoginRole(applyRememberedLoginId(readRememberedLoginIds(windowTarget), role, loginId), role);
  writeStorage(windowTarget, Object.keys(next).length ? JSON.stringify(next) : "");
  return next;
}

import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

// apiClient.js 는 import.meta.env / window 를 참조하므로 최소 stub 후 import.
globalThis.window = globalThis.window || { location: { hostname: "localhost" }, setTimeout, clearTimeout };

const {
  canCurrentRoleSendAlimtalk,
  isSessionExpiredError,
  onApiUnauthorized,
  postJson,
  setApiAuthToken,
  setCurrentTeacherRole,
  withAuthHeaders
} = await import("../src/shared/utils/apiClient.js");

// 토큰 없음 → Authorization 없음
assert.deepEqual(withAuthHeaders(), {});
assert.deepEqual(withAuthHeaders({ "Content-Type": "application/json" }), { "Content-Type": "application/json" });

// 토큰 설정 → 모든 헤더에 Bearer 첨부
setApiAuthToken("tok-123");
assert.deepEqual(withAuthHeaders(), { Authorization: "Bearer tok-123" });
assert.deepEqual(withAuthHeaders({ "Content-Type": "application/json" }), {
  Authorization: "Bearer tok-123",
  "Content-Type": "application/json"
});

// 로그아웃(빈 토큰) → 다시 제거
setApiAuthToken("");
assert.deepEqual(withAuthHeaders(), {});
setApiAuthToken(null);
assert.deepEqual(withAuthHeaders(), {});

// 호출부가 Authorization 을 명시하면 세션 토큰이 덮어쓰지 않는다(보고서 저장 경로).
setApiAuthToken("tok-session");
assert.deepEqual(withAuthHeaders({ Authorization: "Bearer explicit" }), { Authorization: "Bearer explicit" });
setApiAuthToken("");

// 키오스크 토큰은 켜기 전까지 절대 나가지 않는다.
// 교사 앱이 X-Kiosk-Token 을 달고 다니면, 세션이 만료됐을 때 서버가 그 요청을
// 키오스크로 판정해 kiosk_forbidden 을 돌려준다. 교사 화면에는 "다시 로그인하세요"
// 대신 원인 모를 저장 실패가 뜬다(2026-09-07 수업일지 저장 실패).
assert.ok(
  !Object.prototype.hasOwnProperty.call(withAuthHeaders(), "X-Kiosk-Token"),
  "켜지 않은 진입점(교사 앱)은 X-Kiosk-Token 을 보내면 안 된다"
);

const kioskMainSource = await readFile(
  new URL("../src/kioskMain.jsx", import.meta.url),
  "utf8"
);
assert.ok(
  kioskMainSource.includes("enableKioskDeviceToken()"),
  "태블릿 진입점은 enableKioskDeviceToken() 을 호출해야 한다"
);
const teacherMainSource = await readFile(new URL("../src/main.jsx", import.meta.url), "utf8");
assert.ok(
  !teacherMainSource.includes("enableKioskDeviceToken"),
  "교사 진입점은 키오스크 토큰을 켜면 안 된다"
);

// 알림톡 잠금은 서버 정책에서 파생한다.
// 화면에 별도 목록을 두면 "서버는 열렸는데 버튼은 잠긴" 상태가 남는다.
setCurrentTeacherRole("assistant");
assert.equal(canCurrentRoleSendAlimtalk(), false, "협력 교사는 알림톡 버튼이 잠겨야 한다");
setCurrentTeacherRole("owner");
assert.equal(canCurrentRoleSendAlimtalk(), true, "원장은 알림톡을 보낼 수 있어야 한다");
setCurrentTeacherRole("");
assert.equal(canCurrentRoleSendAlimtalk(), true, "역할을 모르면 원장으로 본다(기존 동작 유지)");

// 화면이 이 판정을 실제로 쓰는지 — 안 쓰면 위 계약이 있으나 마나다.
const journalSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url),
  "utf8"
);
assert.ok(
  journalSource.includes("const isAlimtalkLocked = !canCurrentRoleSendAlimtalk()"),
  "수업일지가 알림톡 잠금 여부를 정책에서 파생해야 한다"
);
const cellSource = await readFile(
  new URL("../src/domains/lessons/LessonJournalNotificationCommentCell.jsx", import.meta.url),
  "utf8"
);
assert.ok(
  cellSource.includes("disabled={isAlimtalkLocked}"),
  "알림톡 버튼은 숨기지 말고 잠가야 한다(권한을 풀면 그대로 동작해야 한다)"
);

// 회귀 방지: 앱 코드에서 인증 헤더를 우회하는 직접 호출이 다시 생기면 실패시킨다.
// 2026-09-05 버그 — `fetch(apiUrl(...))` 40곳이 토큰 없이 나가 운영에서 전부 401 이 났다.
const srcRoot = fileURLToPath(new URL("../src/", import.meta.url));
const apiClientPath = join(srcRoot, "shared", "utils", "apiClient.js");

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(entryPath)));
      continue;
    }
    if (/\.(js|jsx)$/.test(entry.name)) files.push(entryPath);
  }
  return files;
}

const bypassOffenders = [];
for (const filePath of await collectSourceFiles(srcRoot)) {
  if (filePath === apiClientPath) continue;
  const source = await readFile(filePath, "utf8");
  const relativePath = relative(srcRoot, filePath).replace(/\\/g, "/");
  if (source.includes("fetch(apiUrl(")) bypassOffenders.push(`${relativePath}: fetch(apiUrl(...))`);
  if (/\bfetchImpl:\s*fetch\b/.test(source)) bypassOffenders.push(`${relativePath}: fetchImpl: fetch`);
}
assert.deepEqual(
  bypassOffenders,
  [],
  `인증 헤더를 우회하는 직접 호출이 남아 있습니다. apiFetch / fetchWithAuth 를 쓰세요:\n${bypassOffenders.join("\n")}`
);

// 401 은 한 곳으로 모여야 한다.
//
// 세션이 끊기면 서버는 401 auth_required 를 주는데, 예전에는 화면이 그걸 "저장 실패"로만
// 보여줬다. 로그인 정보는 브라우저에 30일짜리로 남아 있어 새로고침해도 같은 만료 토큰을
// 다시 보내므로, 원장님이 원인을 모른 채 저장을 반복했다(2026-09-08 수업일지·출결 장애).
const originalFetch = globalThis.fetch;
const unauthorizedEvents = [];
const stopListening = onApiUnauthorized((error) => unauthorizedEvents.push(error));

function stubFetch(status, body) {
  globalThis.fetch = async () => ({ ok: status >= 200 && status < 300, status, json: async () => body });
}

// 401 → sessionExpired 오류 + 구독자 통지 + 사람이 읽을 안내 문구
stubFetch(401, { ok: false, code: "auth_required", error: "auth_required" });
const expiredError = await postJson("/api/lesson-records", {}).then(
  () => null,
  (error) => error
);
assert.equal(expiredError.statusCode, 401);
assert.equal(isSessionExpiredError(expiredError), true);
assert.equal(expiredError.message, "로그인 세션이 만료되었습니다. 다시 로그인해 주세요.");
assert.equal(unauthorizedEvents.length, 1);

// 401 이 아닌 실패는 세션 만료로 취급하지 않는다 — 재로그인 안내가 잘못 뜨면 안 된다.
stubFetch(409, { ok: false, error: "수업기록이 다른 화면에서 먼저 변경되었습니다." });
const conflictError = await postJson("/api/lesson-records", {}).then(
  () => null,
  (error) => error
);
assert.equal(conflictError.statusCode, 409);
assert.equal(isSessionExpiredError(conflictError), false);
assert.equal(conflictError.message, "수업기록이 다른 화면에서 먼저 변경되었습니다.");
assert.equal(unauthorizedEvents.length, 1);

// 권한 없음(role_forbidden)은 영문 코드가 아니라 읽을 수 있는 문장으로 보여준다.
// 협력 교사에게 닫아둔 알림톡 등을 눌렀을 때 "role_forbidden" 이 그대로 뜨면 안 된다.
stubFetch(403, { ok: false, code: "role_forbidden", error: "role_forbidden" });
const forbiddenError = await postJson("/api/notifications/comment-alimtalk", {}).then(
  () => null,
  (error) => error
);
assert.equal(forbiddenError.statusCode, 403);
assert.equal(isSessionExpiredError(forbiddenError), false, "권한 없음은 세션 만료가 아니다");
assert.equal(forbiddenError.message, "이 계정에는 이 기능의 권한이 없습니다. 원장님께 문의해 주세요.");

// 200 이지만 본문이 auth_required 인 경우도 만료로 본다.
stubFetch(200, { ok: false, code: "auth_required", error: "auth_required" });
const bodyExpiredError = await postJson("/api/lesson-records", {}).then(
  () => null,
  (error) => error
);
assert.equal(isSessionExpiredError(bodyExpiredError), true);
assert.equal(unauthorizedEvents.length, 2);

// 구독 해제 후에는 통지하지 않는다.
stopListening();
stubFetch(401, { ok: false, code: "auth_required", error: "auth_required" });
await postJson("/api/lesson-records", {}).catch(() => {});
assert.equal(unauthorizedEvents.length, 2);

globalThis.fetch = originalFetch;

// 화면이 401 을 실제로 안내하는지 — App 이 구독하고 오버레이를 띄워야 한다.
const appSource = await readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8");
assert.ok(appSource.includes("onApiUnauthorized(() => setIsSessionExpired(true))"));
assert.ok(appSource.includes("<SessionExpiredOverlay"));

console.log(
  "api client auth header: token attach/clear contract + apiFetch bypass guard + 401 session-expiry fan-out passed"
);

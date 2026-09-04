import assert from "node:assert/strict";

// apiClient.js 는 import.meta.env / window 를 참조하므로 최소 stub 후 import.
globalThis.window = globalThis.window || { location: { hostname: "localhost" }, setTimeout, clearTimeout };

const { setApiAuthToken, withAuthHeaders } = await import("../src/shared/utils/apiClient.js");

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

console.log("api client auth header: token attach/clear contract passed");

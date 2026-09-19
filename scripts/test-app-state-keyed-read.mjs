// app_state 읽기의 keys 범위 지정. 저장 뒤 재조회(Supabase 원천 대조)는 유지하되, 한 키를 확인하려고
// 표 전체(알림 기록·보고서 스냅샷·성적·시험지 …)를 다시 받지 않게 한다. 2026-09-19 까지 키 하나
// 저장마다 표 전체를 두 번(states + stateRows) 직렬화해 받았다.
import assert from "node:assert/strict";

process.env.SUPABASE_URL = "https://safe-fixture.supabase.co";
process.env.SUPABASE_ANON_KEY = "safe-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "safe-service-role-key";
const { listAppState } = await import("../api/routes/coreData.js");

const originalFetch = globalThis.fetch;
async function withFetch(handler, run) {
  globalThis.fetch = handler;
  try {
    return await run();
  } finally {
    globalThis.fetch = originalFetch;
  }
}
const tableRows = [
  { state_key: "aiSettings", state_value: { commentProvider: "auto" }, updated_at: "2026-09-19T00:00:00.000Z" },
  { state_key: "notificationLogs", state_value: [{ id: 1 }], updated_at: "2026-09-19T00:00:01.000Z" },
  { state_key: "teacherAccountSettings", state_value: { secret: true }, updated_at: "2026-09-19T00:00:02.000Z" },
  { state_key: "wrongProblems", state_value: [], updated_at: "2026-09-19T00:00:03.000Z" }
];
function serve(requests) {
  return async (url) => {
    requests.push(String(url));
    const parsed = new URL(url);
    const keyFilter = parsed.searchParams.get("state_key");
    let rows = tableRows;
    if (keyFilter?.startsWith("in.(")) {
      const wanted = new Set(keyFilter.slice(4, -1).split(",").map((part) => decodeURIComponent(part.replace(/^"|"$/g, ""))));
      rows = tableRows.filter((row) => wanted.has(row.state_key));
    }
    return { ok: true, text: async () => JSON.stringify(rows) };
  };
}

// 1. keys 없음 = 전체(숨은 키 제외). 부트스트랩이 쓰는 모양 그대로.
{
  const requests = [];
  const result = await withFetch(serve(requests), () => listAppState());
  assert.equal(requests.length, 1);
  assert.ok(!requests[0].includes("state_key="), "전체 읽기에는 키 필터가 없어야 한다");
  assert.deepEqual(Object.keys(result.states).sort(), ["aiSettings", "notificationLogs", "wrongProblems"]);
  assert.equal(result.stateRows.length, 3);
  assert.ok(!("teacherAccountSettings" in result.states), "숨은 키는 돌려주지 않는다");
}

// 2. keys 지정 = 그 키만, 같은 응답 모양(states + stateRows, updatedAt 포함).
{
  const requests = [];
  const result = await withFetch(serve(requests), () => listAppState({ keys: ["wrongProblems"] }));
  assert.equal(requests.length, 1);
  assert.ok(requests[0].includes("state_key=in.(%22wrongProblems%22)") || requests[0].includes('state_key=in.("wrongProblems")'), requests[0]);
  assert.deepEqual(result.states, { wrongProblems: [] });
  assert.deepEqual(result.stateRows, [{ key: "wrongProblems", updatedAt: "2026-09-19T00:00:03.000Z", value: [] }]);
  assert.equal(result.source, "supabase");
}

// 3. 여러 키·공백·중복 정리, 숨은 키는 요청에서 걸러진다(필터에도 응답에도 없다).
{
  const requests = [];
  const result = await withFetch(serve(requests), () => listAppState({ keys: ["notificationLogs", " aiSettings ", "aiSettings", "teacherAccountSettings", ""] }));
  assert.ok(!requests[0].includes("teacherAccountSettings"), "숨은 키는 Supabase 에 묻지도 않는다");
  assert.deepEqual(Object.keys(result.states).sort(), ["aiSettings", "notificationLogs"]);
}

// 4. 요청한 키가 전부 숨은 키면 왕복 없이 빈 결과.
{
  const requests = [];
  const result = await withFetch(serve(requests), () => listAppState({ keys: ["teacherAccountSettings"] }));
  assert.equal(requests.length, 0);
  assert.deepEqual(result, { source: "supabase", states: {}, stateRows: [] });
}

console.log("app_state keyed read: 전체/키 한정/숨은 키/빈 요청 계약 통과");

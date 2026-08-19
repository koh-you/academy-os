import assert from "node:assert/strict";
import {
  createSolapiRouteRegistry,
  solapiRouteSignatures
} from "../src/shared/server/solapiRouteRegistry.js";

const events = [];
const sends = [];
let rawBody = {};
let messagesResult = { source: "solapi", messages: [] };
let groupsResult = { source: "solapi", groups: [] };
let cancelResult = { canceled: true };
let routeError = null;

const registry = createSolapiRouteRegistry({
  cancelSolapiReservationGroup: async (groupId) => {
    events.push({ type: "cancel", groupId });
    if (routeError?.stage === "cancel") throw routeError.error;
    return cancelResult;
  },
  getKoreaDayUtcRange: (dateText) => {
    events.push({ type: "range", dateText });
    return { startIso: "2026-01-01T00:00:00.000Z", endIso: "2026-01-02T00:00:00.000Z" };
  },
  listSolapiGroups: async (options) => {
    events.push({ type: "groups", options });
    if (routeError?.stage === "groups") throw routeError.error;
    return groupsResult;
  },
  listSolapiMessages: async (options) => {
    events.push({ type: "messages", options });
    if (routeError?.stage === "messages") throw routeError.error;
    return messagesResult;
  },
  readJsonBody: async () => {
    events.push({ type: "read" });
    return rawBody;
  },
  sendJson: (request, response, statusCode, body) => {
    sends.push({ body, request, response, statusCode });
  }
});

function route(method, path, searchParams = {}) {
  const requestUrl = new URL(path, "http://127.0.0.1");
  Object.entries(searchParams).forEach(([key, value]) => requestUrl.searchParams.set(key, value));
  return {
    request: { method },
    response: { path },
    requestUrl
  };
}

assert.equal(Object.isFrozen(registry), true);
assert.equal(Object.isFrozen(solapiRouteSignatures), true);
assert.equal(solapiRouteSignatures.every(Object.isFrozen), true);
assert.deepEqual(solapiRouteSignatures, [
  { method: "GET", path: "/api/solapi/messages" },
  { method: "GET", path: "/api/solapi/groups" },
  { method: "POST", path: "/api/solapi/groups/cancel" }
]);

assert.equal(await registry.dispatch(route("GET", "/unknown")), false);
assert.deepEqual(events, []);

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/solapi/messages", { date: "2026-01-01" })), true);
assert.equal(events.length, 2);
assert.equal(events[0].type, "range");
assert.equal(events[1].type, "messages");
assert.deepEqual(events[1].options, {
  endDate: "2026-01-02T00:00:00.000Z",
  groupId: "",
  limit: 100,
  messageId: "",
  startDate: "2026-01-01T00:00:00.000Z",
  statusCode: "",
  to: "",
  type: "ATA"
});
assert.deepEqual(sends.at(-1).body, { ok: true, ...messagesResult });

events.length = 0;
assert.equal(await registry.dispatch(route("GET", "/api/solapi/groups", { date: "2026-01-01" })), true);
assert.equal(events.length, 2);
assert.equal(events[1].type, "groups");
assert.deepEqual(sends.at(-1).body, { ok: true, ...groupsResult });

events.length = 0;
rawBody = { groupId: "group-1" };
assert.equal(await registry.dispatch(route("POST", "/api/solapi/groups/cancel")), true);
assert.deepEqual(events, [{ type: "read" }, { type: "cancel", groupId: "group-1" }]);
assert.deepEqual(sends.at(-1).body, { ok: true, ...cancelResult });

events.length = 0;
rawBody = { id: "group-2" };
assert.equal(await registry.dispatch(route("POST", "/api/solapi/groups/cancel")), true);
assert.deepEqual(events.at(-1), { type: "cancel", groupId: "group-2" });

events.length = 0;
rawBody = {};
assert.equal(await registry.dispatch(route("POST", "/api/solapi/groups/cancel")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "취소할 Solapi groupId가 필요합니다." });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "messages", error: new Error("조회 실패") };
assert.equal(await registry.dispatch(route("GET", "/api/solapi/messages")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "조회 실패" });
assert.equal(sends.at(-1).statusCode, 500);

routeError = { stage: "groups", error: new Error("그룹 조회 실패") };
assert.equal(await registry.dispatch(route("GET", "/api/solapi/groups")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "그룹 조회 실패" });

routeError = { stage: "cancel", error: new Error("취소 실패") };
rawBody = { groupId: "group-1" };
assert.equal(await registry.dispatch(route("POST", "/api/solapi/groups/cancel")), true);
assert.deepEqual(sends.at(-1).body, { ok: false, error: "취소 실패" });

console.log("solapi route registry messages, groups, cancel, and error contracts passed");

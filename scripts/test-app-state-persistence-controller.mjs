import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  areAppStateValuesEqual,
  createAppStatePersistenceController
} from "../src/domains/appState/appStatePersistenceController.js";
import {
  createAppStateConflictError,
  createAppStateVersionFilter,
  isAppStateInsertConflict
} from "../api/domain/appStatePersistence.js";

function createDeferred() {
  let resolve;
  const promise = new Promise((nextResolve) => {
    resolve = nextResolve;
  });
  return { promise, resolve };
}

async function waitFor(predicate) {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    if (predicate()) return;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
  assert.fail("timed out waiting for persistence fixture");
}

assert.equal(areAppStateValuesEqual({ b: 2, a: 1 }, { a: 1, b: 2 }), true);
assert.equal(areAppStateValuesEqual([{ b: 2, a: 1 }], [{ a: 1, b: 2 }]), true);
assert.equal(areAppStateValuesEqual({ a: 1 }, { a: 2 }), false);
assert.equal(
  createAppStateVersionFilter("lesson plans", "2026-08-02T00:00:00.000+00:00"),
  "state_key=eq.lesson%20plans&updated_at=eq.2026-08-02T00%3A00%3A00.000%2B00%3A00"
);
assert.equal(isAppStateInsertConflict(new Error("code 23505 duplicate key")), true);
assert.equal(createAppStateConflictError("aiSettings").statusCode, 409);

const writes = [];
const persisted = [];
const states = [];
let serverValue = { value: "initial" };
let serverUpdatedAt = "version-1";
const controller = createAppStatePersistenceController({
  onPersisted: (result) => persisted.push(result),
  onState: (state) => states.push(state),
  read: async () => ({
    ok: true,
    source: "supabase",
    stateRows: [{ key: "aiSettings", updatedAt: serverUpdatedAt }],
    states: { aiSettings: serverValue }
  }),
  write: ({ expectedUpdatedAt, states: nextStates }) => {
    const deferred = createDeferred();
    writes.push({ deferred, expectedUpdatedAt, nextStates });
    return deferred.promise.then(() => {
      serverValue = nextStates.aiSettings;
      serverUpdatedAt = `version-${writes.indexOf(writes.find((item) => item.deferred === deferred)) + 2}`;
      return { ok: true };
    });
  }
});
controller.setSnapshot({
  keys: ["aiSettings"],
  stateRows: [{ key: "aiSettings", updatedAt: "version-1" }],
  states: { aiSettings: serverValue }
});
const firstSave = controller.save({ aiSettings: { value: "A" } });
const duplicateFirstSave = controller.save({ aiSettings: { value: "A" } });
const secondSave = controller.save({ aiSettings: { value: "B" } });
assert.equal(firstSave, duplicateFirstSave, "identical active value must not enqueue twice");
assert.equal(firstSave, secondSave, "same-key saves must share one drain");
assert.equal(writes.length, 1, "newer value must wait for the active write");
assert.deepEqual(writes[0].expectedUpdatedAt, { aiSettings: "version-1" });
writes[0].deferred.resolve();
await waitFor(() => writes.length === 2);
assert.deepEqual(writes[1].expectedUpdatedAt, { aiSettings: "version-2" });
assert.deepEqual(writes[1].nextStates, { aiSettings: { value: "B" } });
writes[1].deferred.resolve();
assert.deepEqual(await firstSave, { ok: true });
assert.deepEqual(persisted.map((item) => item.value), [
  { value: "A" },
  { value: "B" }
]);
assert.equal(states.at(-1), "saved");
const stateCountBeforeVerifiedDuplicate = states.length;
await controller.save({ aiSettings: { value: "B" } });
assert.equal(writes.length, 2, "verified values must not be written again");
assert.equal(states.length, stateCountBeforeVerifiedDuplicate + 1);
assert.equal(states.at(-1), "saved");

let conflict = true;
let conflictWrites = 0;
const conflictStates = [];
const conflictPersisted = [];
const conflictController = createAppStatePersistenceController({
  onPersisted: (result) => conflictPersisted.push(result),
  onState: (state) => conflictStates.push(state),
  read: async () => ({
    ok: true,
    source: "supabase",
    stateRows: [{ key: "attendanceSettings", updatedAt: "version-2" }],
    states: { attendanceSettings: { mode: "retry" } }
  }),
  write: async () => {
    conflictWrites += 1;
    if (conflict) throw createAppStateConflictError("attendanceSettings");
  }
});
conflictController.setSnapshot({
  keys: ["attendanceSettings"],
  stateRows: [{ key: "attendanceSettings", updatedAt: "version-1" }],
  states: { attendanceSettings: { mode: "initial" } }
});
const failed = await conflictController.save({ attendanceSettings: { mode: "retry" } });
assert.equal(failed.ok, false);
assert.equal(conflictWrites, 1, "failed writes must not loop immediately");
assert.equal(conflictStates.at(-1), "failed");
assert.deepEqual(conflictPersisted, []);
conflict = false;
assert.deepEqual(await conflictController.retry(), { ok: true });
assert.equal(conflictWrites, 2);
assert.equal(conflictStates.at(-1), "saved");
assert.equal(conflictPersisted.length, 1);

const [appSource, appStateWriteRouteSource, coreSource, serverSource, restSource, workflowSource, packageSource] =
  await Promise.all([
    readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/shared/server/appStateWriteRouteRegistry.js", import.meta.url), "utf8"),
    readFile(new URL("../api/routes/coreData.js", import.meta.url), "utf8"),
    readFile(new URL("../api/server.js", import.meta.url), "utf8"),
    readFile(new URL("../api/lib/supabaseRest.js", import.meta.url), "utf8"),
    readFile(new URL("../.github/workflows/production-checks.yml", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8")
  ]);
for (const expected of [
  "createAppStatePersistenceController",
  "appStatePersistenceControllerRef",
  "createAppStateWritePayload",
  "parseVersionedWriteResponse",
  "postAppStateWithTimeout",
  "/api/app-state?includeRows=true",
  "getAppStatePersistenceController().save(changedStates)",
  "expectedUpdatedAt"
]) {
  assert.ok(appSource.includes(expected), `missing App persistence adapter: ${expected}`);
}
for (const expected of [
  "createAppStateVersionFilter",
  'insertRows("app_state", [row])',
  "createAppStateConflictError(key)"
]) {
  assert.ok(coreSource.includes(expected), `missing app_state CAS boundary: ${expected}`);
}
assert.match(
  coreSource,
  /patchRows\(\s*"app_state"/,
  "app_state CAS patch boundary must not depend on checkout line endings"
);
assert.ok(restSource.includes("export async function insertRows("));
assert.ok(serverSource.includes("createAppStateWriteRouteRegistry({"));
assert.ok(serverSource.includes("await dispatchAppStateWriteRoute({ request, response, requestUrl })"));
assert.ok(appStateWriteRouteSource.includes("parseVersionedWriteRequest("));
assert.ok(appStateWriteRouteSource.includes("const requestedStates = payload.states"));
assert.ok(appStateWriteRouteSource.includes("upsertAppState(safeStates, { expectedUpdatedAt })"));
assert.ok(appStateWriteRouteSource.includes("Number(error.statusCode) || 500"));
const packageJson = JSON.parse(packageSource);
assert.equal(
  packageJson.scripts["test:app-state-persistence-controller"],
  "node scripts/test-app-state-persistence-controller.mjs"
);
assert.ok(workflowSource.includes("npm run test:app-state-persistence-controller"));

console.log("app_state serialized CAS and read-after-write persistence fixtures passed");

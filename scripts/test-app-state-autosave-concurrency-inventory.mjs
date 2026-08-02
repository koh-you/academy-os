import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createAppStateSaveQueue } from "../src/app/appStateSaveQueue.js";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");
const [appSource, queueSource, coreDataSource, serverSource, schemaSource, workflowSource, packageSource] = await Promise.all([
  read("../src/app/App.jsx"),
  read("../src/app/appStateSaveQueue.js"),
  read("../api/routes/coreData.js"),
  read("../api/server.js"),
  read("../supabase/20260620_app_state_store.sql"),
  read("../.github/workflows/production-checks.yml"),
  read("../package.json")
]);

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert.ok(startIndex >= 0, `missing source boundary: ${start}`);
  assert.ok(endIndex > startIndex, `missing source boundary: ${end}`);
  return source.slice(startIndex, endIndex);
}

const sharedStateSource = sourceBetween(
  appSource,
  "const sharedAppState = useMemo(() => ({",
  "const initialSharedAppStateRef"
);
const sharedStateObjectSource = sourceBetween(
  sharedStateSource,
  "const sharedAppState = useMemo(() => ({",
  "}), ["
);
const sharedStateKeys = [...sharedStateObjectSource.matchAll(/^    ([A-Za-z][A-Za-z0-9]*),?$/gm)]
  .map((match) => match[1]);
assert.deepEqual(sharedStateKeys, [
  "aiSettings",
  "attendanceSettings",
  "deletedLessonBundles",
  "generatedLessonControls",
  "lessonNotificationPlans",
  "lessonResearchItems",
  "notificationLogs",
  "reportSnapshots",
  "examPostTargetStudentIds",
  "tallySubmissions",
  "tallySummaries",
  "wrongProblems"
]);

const autosaveSource = sourceBetween(
  appSource,
  'if (session?.role !== "teacher" || !isAppStateReady || isApplyingRemoteAppStateRef.current) return;',
  "useEffect(() => () => {"
);
for (const boundary of [
  "const changedStates = Object.fromEntries",
  "persistedSharedAppStateRef.current[key]",
  "appStateSaveQueueRef.current.enqueue(changedStates)",
  "}, 500)"
]) {
  assert.ok(autosaveSource.includes(boundary), `missing app_state autosave boundary: ${boundary}`);
}
for (const boundary of [
  "createAppStateSaveQueue({",
  "save: postAppState",
  "onBatchSaved: (savedStates)"
]) {
  assert.ok(appSource.includes(boundary), `missing app_state save queue boundary: ${boundary}`);
}
assert.ok(!autosaveSource.includes('fetch(apiUrl("/api/app-state")'));
assert.ok(!autosaveSource.includes("expectedUpdatedAt"));
assert.ok(!autosaveSource.includes("expectedVersion"));
assert.ok(queueSource.includes("await save(batch)"));
assert.ok(queueSource.includes("pendingStates[key] = value"));
assert.ok(queueSource.includes("delete pendingStates[key]"));

const listSource = sourceBetween(coreDataSource, "export async function listAppState()", "export async function upsertAppState(states)");
assert.ok(listSource.includes("stateRows: rows.map(fromAppStateRow)"));
assert.ok(coreDataSource.includes("function fromAppStateRow(row)"));
assert.ok(coreDataSource.includes("updatedAt: row.updated_at"));

const upsertSource = sourceBetween(coreDataSource, "export async function upsertAppState(states)", "export async function listResourceMaterials()");
assert.ok(upsertSource.includes('upsertRows("app_state", rows)'));
assert.ok(!upsertSource.includes('patchRows("app_state"'));
assert.ok(!upsertSource.includes("expectedUpdatedAt"));
assert.ok(!upsertSource.includes("expectedVersion"));

const getRouteSource = sourceBetween(
  serverSource,
  'if (request.method === "GET" && requestUrl.pathname === "/api/app-state")',
  'if (request.method === "GET" && requestUrl.pathname === "/api/special-lecture-guides")'
);
assert.ok(getRouteSource.includes('requestUrl.searchParams.get("includeRows") === "true"'));
assert.ok(getRouteSource.includes("{ stateRows, ...summary }"));

const postRouteSource = sourceBetween(
  serverSource,
  'if (request.method === "POST" && requestUrl.pathname === "/api/app-state")',
  'if (request.method === "GET" && requestUrl.pathname === "/api/resource-materials")'
);
assert.ok(postRouteSource.includes("upsertAppState(safeStates)"));
assert.ok(!postRouteSource.includes("expectedUpdatedAt"));
assert.ok(!postRouteSource.includes("expectedVersion"));

assert.ok(schemaSource.includes("state_key text primary key"));
assert.ok(schemaSource.includes("updated_at timestamptz not null default now()"));
assert.ok(!schemaSource.includes(" version "));

function deferred() {
  let resolve;
  const promise = new Promise((nextResolve) => {
    resolve = nextResolve;
  });
  return { promise, resolve };
}

const requests = [];
const savedBatches = [];
const statuses = [];
let activeRequests = 0;
let maxActiveRequests = 0;
const queue = createAppStateSaveQueue({
  save: (states) => {
    const request = deferred();
    activeRequests += 1;
    maxActiveRequests = Math.max(maxActiveRequests, activeRequests);
    requests.push({
      states,
      resolve: () => {
        activeRequests -= 1;
        request.resolve();
      }
    });
    return request.promise;
  },
  onBatchSaved: (states) => savedBatches.push(states),
  onStatusChange: (status) => statuses.push(status)
});

const drainPromise = queue.enqueue({ aiSettings: { value: "older" } });
queue.enqueue({ aiSettings: { value: "newer" } });
queue.enqueue({ aiSettings: { value: "latest" }, wrongProblems: [{ id: "wp-1" }] });
assert.equal(requests.length, 1, "a second request must not start while the first request is in flight");
assert.deepEqual(requests[0].states, { aiSettings: { value: "older" } });

requests[0].resolve();
await Promise.resolve();
await Promise.resolve();
assert.equal(requests.length, 2, "queued changes must flush after the in-flight request settles");
assert.deepEqual(requests[1].states, {
  aiSettings: { value: "latest" },
  wrongProblems: [{ id: "wp-1" }]
});
requests[1].resolve();
await drainPromise;

assert.equal(maxActiveRequests, 1, "app_state requests must be serialized in the browser");
assert.deepEqual(savedBatches, [
  { aiSettings: { value: "older" } },
  { aiSettings: { value: "latest" }, wrongProblems: [{ id: "wp-1" }] }
]);
assert.equal(statuses.at(-1), "saved");

const revertedRequests = [];
const revertQueue = createAppStateSaveQueue({
  save: (states) => {
    const request = deferred();
    revertedRequests.push({ states, resolve: request.resolve });
    return request.promise;
  }
});
const revertDrainPromise = revertQueue.enqueue({ aiSettings: { value: "same" } });
revertQueue.enqueue({ aiSettings: { value: "temporary" } });
revertQueue.enqueue({ aiSettings: { value: "same" } });
revertedRequests[0].resolve();
await revertDrainPromise;
assert.equal(revertedRequests.length, 1, "returning to the in-flight value must cancel the redundant follow-up write");

const failedStatuses = [];
let failureAttempt = 0;
const failureQueue = createAppStateSaveQueue({
  save: () => {
    failureAttempt += 1;
    return failureAttempt === 1
      ? Promise.reject(new Error("expected fixture failure"))
      : Promise.resolve();
  },
  onError: () => {},
  onStatusChange: (status) => failedStatuses.push(status)
});
const failedDrainPromise = failureQueue.enqueue({ aiSettings: { value: "unsaved" } });
failureQueue.enqueue({ wrongProblems: [{ id: "saved-later" }] });
await failedDrainPromise;
assert.equal(
  failedStatuses.at(-1),
  "failed",
  "a successful write for another key must not hide an earlier failed key"
);
await failureQueue.enqueue({ aiSettings: { value: "retried" } });
assert.equal(failedStatuses.at(-1), "saved", "retrying the failed key successfully must restore saved status");

const packageJson = JSON.parse(packageSource);
assert.equal(
  packageJson.scripts["test:app-state-autosave-inventory"],
  "node scripts/test-app-state-autosave-concurrency-inventory.mjs"
);
assert.ok(workflowSource.includes("npm run test:app-state-autosave-inventory"));

console.log("app_state autosave concurrency inventory passed (12 keys; browser writes serialized and coalesced)");

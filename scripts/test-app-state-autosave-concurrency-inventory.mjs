import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");
const [appSource, coreDataSource, serverSource, schemaSource, workflowSource, packageSource] = await Promise.all([
  read("../src/app/App.jsx"),
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
  "appStateSaveRequestRef.current = requestId",
  "postAppState(changedStates)",
  "persistedSharedAppStateRef.current = {",
  "}, 500)"
]) {
  assert.ok(autosaveSource.includes(boundary), `missing app_state autosave boundary: ${boundary}`);
}
assert.ok(!autosaveSource.includes('fetch(apiUrl("/api/app-state")'));
assert.ok(!autosaveSource.includes("expectedUpdatedAt"));
assert.ok(!autosaveSource.includes("expectedVersion"));

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

const writesByArrival = [
  { request: "newer", value: "B", arrivesAt: 10 },
  { request: "older", value: "A", arrivesAt: 20 }
];
const finalValue = writesByArrival
  .sort((left, right) => left.arrivesAt - right.arrivesAt)
  .reduce((_current, write) => write.value, "initial");
assert.equal(finalValue, "A", "the current last-arrival-wins contract must reproduce stale overwrite risk");

const packageJson = JSON.parse(packageSource);
assert.equal(
  packageJson.scripts["test:app-state-autosave-inventory"],
  "node scripts/test-app-state-autosave-concurrency-inventory.mjs"
);
assert.ok(workflowSource.includes("npm run test:app-state-autosave-inventory"));

console.log("app_state autosave concurrency inventory passed (12 keys; stale-overwrite risk reproduced)");

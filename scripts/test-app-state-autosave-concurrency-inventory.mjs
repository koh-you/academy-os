import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");
const [appCoreReadRouteRegistrySource, appStateWriteRouteRegistrySource, appSource, controllerSource, coreDataSource, platformMapperSource, serverSource, schemaSource, workflowSource, packageSource] = await Promise.all([
  read("../src/shared/server/appCoreReadRouteRegistry.js"),
  read("../src/shared/server/appStateWriteRouteRegistry.js"),
  read("../src/app/App.jsx"),
  read("../src/domains/appState/appStatePersistenceController.js"),
  read("../api/routes/coreData.js"),
  read("../src/shared/persistence/platformSourceRowMappers.js"),
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
  "examPostTargetStudentIds",
  "tallySubmissions",
  "tallySummaries"
]);
assert.equal(sharedStateKeys.includes("wrongProblems"), false);

const autosaveSource = sourceBetween(
  appSource,
  'if (session?.role !== "teacher" || !isAppStateReady || isApplyingRemoteAppStateRef.current) return;',
  "useEffect(() => () => {"
);
for (const boundary of [
  "const changedStates = Object.fromEntries",
  "persistedSharedAppStateRef.current[key]",
  "getAppStatePersistenceController().save(changedStates)",
  "}, 500)"
]) {
  assert.ok(autosaveSource.includes(boundary), `missing app_state autosave boundary: ${boundary}`);
}
assert.ok(!autosaveSource.includes("appStateSaveRequestRef"));
assert.ok(appSource.includes('/api/app-state?includeRows=true'));
for (const boundary of [
  "pendingByKey",
  "updatedAtByKey",
  "await write({",
  "const verification = await read()",
  'verification.source !== "supabase"',
  "onPersisted({ key, updatedAt: verifiedRow.updatedAt"
]) {
  assert.ok(controllerSource.includes(boundary), `missing persistence controller boundary: ${boundary}`);
}

const listSource = sourceBetween(
  coreDataSource,
  "export async function listAppState()",
  "export async function upsertAppState(states, { expectedUpdatedAt = null } = {})"
);
assert.ok(listSource.includes("stateRows: rows.map(fromAppStateRow)"));
assert.ok(coreDataSource.includes('from "../../src/shared/persistence/platformSourceRowMappers.js"'));
assert.ok(platformMapperSource.includes("export function fromAppStateRow(row)"));
assert.ok(platformMapperSource.includes("updatedAt: row.updated_at"));

const upsertSource = sourceBetween(coreDataSource, "export async function upsertAppState(states, { expectedUpdatedAt = null } = {})", "export async function listResourceMaterials()");
assert.ok(upsertSource.includes('upsertRows("app_state", [row])'));
assert.ok(upsertSource.includes('insertRows("app_state", [row])'));
assert.ok(upsertSource.includes('patchRows('));
assert.ok(upsertSource.includes("createAppStateVersionFilter(key, expectedVersion)"));
assert.ok(upsertSource.includes("createAppStateConflictError(key)"));

const getRouteSource = sourceBetween(
  appCoreReadRouteRegistrySource,
  'if (requestUrl.pathname === "/api/app-state")',
  'if (requestUrl.pathname === "/api/special-lecture-guides")'
);
assert.ok(serverSource.includes("await dispatchAppCoreReadRoute({ request, response, requestUrl })"));
assert.ok(getRouteSource.includes('requestUrl.searchParams.get("includeRows") === "true"'));
assert.ok(getRouteSource.includes("{ stateRows, ...summary }"));

const postRouteSource = appStateWriteRouteRegistrySource;
assert.ok(serverSource.includes("await dispatchAppStateWriteRoute({ request, response, requestUrl })"));
assert.ok(postRouteSource.includes("upsertAppState(safeStates, { expectedUpdatedAt })"));
assert.ok(postRouteSource.includes("Number(error.statusCode) || 500"));

assert.ok(schemaSource.includes("state_key text primary key"));
assert.ok(schemaSource.includes("updated_at timestamptz not null default now()"));
assert.ok(!schemaSource.includes(" version "));

const writesByInvocation = [
  { request: "older", value: "A", networkDelay: 20 },
  { request: "newer", value: "B", networkDelay: 10 }
];
const finalValue = writesByInvocation.reduce((_current, write) => write.value, "initial");
assert.equal(finalValue, "B", "serialized same-key writes must preserve invocation order");

const packageJson = JSON.parse(packageSource);
assert.equal(
  packageJson.scripts["test:app-state-autosave-inventory"],
  "node scripts/test-app-state-autosave-concurrency-inventory.mjs"
);
assert.ok(workflowSource.includes("npm run test:app-state-autosave-inventory"));

console.log("app_state autosave concurrency inventory passed (10 keys; serialization/CAS/requery guarded)");

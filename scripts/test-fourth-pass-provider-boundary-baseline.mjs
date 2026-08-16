import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [serverSource, notificationsRouteSource, commentPolishRouteSource, ssenCatalogSource, resourceStorageOperationSource, supabaseRestSource, packageJson] = await Promise.all([
  readFile(new URL("../api/server.js", import.meta.url), "utf8"),
  readFile(new URL("../api/routes/notifications.js", import.meta.url), "utf8"),
  readFile(new URL("../api/routes/commentPolish.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/examAnalysisSsenCatalog.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/resources/resourceMaterialStorageOperation.js", import.meta.url), "utf8"),
  readFile(new URL("../api/lib/supabaseRest.js", import.meta.url), "utf8"),
  readFile(new URL("../package.json", import.meta.url), "utf8").then(JSON.parse)
]);

// Solapi/Slack call sites are already isolated in api/routes/notifications.js,
// with no DB import — this is the 4-5 goal-2 template, not a candidate.
for (const dbImport of ["coreData.js", "supabase", "createClient"]) {
  assert.equal(
    notificationsRouteSource.includes(dbImport),
    false,
    `notifications.js must stay DB-free (already isolated): ${dbImport}`
  );
}

// Comment polish AI is already isolated too — the template 4-5c/4-5d reuse.
for (const dbImport of ["coreData.js", "supabase", "createClient"]) {
  assert.equal(
    commentPolishRouteSource.includes(dbImport),
    false,
    `commentPolish.js must stay DB-free (already isolated): ${dbImport}`
  );
}

// resourceMaterialStorageOperation.js is the DI + rollback template 4-5b/4-5c reuse.
for (const required of [
  "export async function saveResourceMaterialFile({",
  "export async function deleteResourceMaterialWithFile({ material, operations } = {})",
  "previousFileCleanupFailed",
  "storageDeleted"
]) {
  assert.ok(
    resourceStorageOperationSource.includes(required),
    `resource material storage DI template missing: ${required}`
  );
}
for (const forbidden of ["createClient", "SUPABASE_SERVICE_ROLE"]) {
  assert.equal(
    resourceStorageOperationSource.includes(forbidden),
    false,
    `resource material storage module must stay DI-only, not own the Supabase client: ${forbidden}`
  );
}

// 4-5b closeout: Storage primitives moved out of api/server.js into the
// existing api/lib/supabaseRest.js (not a new file — a new api/ file would
// have crossed the Vercel Hobby 12-function ceiling this baseline itself
// flags below).
for (const moved of [
  "async function supabaseStorageRequest(path, options = {})",
  "export async function ensureStorageBucket(bucketId, options = {})",
  "export async function uploadStorageObjectWithBucketRetry(bucketId, storagePath, { bucketOptions = {}, contentType, body })",
  "export async function createSignedStorageUrl(bucketId, storagePath, expiresIn = 60 * 60 * 24 * 7)",
  "export async function downloadStorageObjectWithMetadata(bucketId, storagePath)",
  "export async function downloadStorageObject(bucketId, storagePath)",
  "export async function deleteStorageObject(bucketId, storagePath)"
]) {
  assert.ok(
    supabaseRestSource.includes(moved),
    `Storage primitive missing from its 4-5b home (api/lib/supabaseRest.js): ${moved}`
  );
  const bareDeclaration = moved.replace("export ", "");
  assert.equal(
    serverSource.includes(bareDeclaration),
    false,
    `Storage primitive should no longer be declared in server.js after 4-5b: ${bareDeclaration}`
  );
}

// The vision-check/boundary-detect wrappers keep server-side normalization.
for (const stillDeclaredInServer of [
  "async function runAnthropicPdfVisionCheck(sourceFile, buffer)",
  "async function runOpenAiPdfVisionCheck(sourceFile, buffer)",
  "async function runAnthropicPdfQuestionBoundaryDetection(sourceFile, buffer, detail)",
  "async function runOpenAiPdfQuestionBoundaryDetection(sourceFile, buffer, detail)"
]) {
  assert.ok(
    serverSource.includes(stillDeclaredInServer),
    `exam analysis AI wrapper drifted from its 4-5a/4-5d signature: ${stillDeclaredInServer}`
  );
}

// 4-5g: row-fill/output-draft provider wrappers reuse the generic transports;
// prompt construction, provider choice, parsing, and normalization stay in server.js.
for (const moved of [
  "export async function runAnthropicExamAnalysisOutputDraft({ model, outputType, prompt })",
  "export async function runOpenAiExamAnalysisOutputDraft({ model, outputType, prompt })",
  "export function runAnthropicPdfQuestionRowFill({ buffer, model, promptText })",
  "export function runOpenAiPdfQuestionRowFill({ buffer, fileName, model, promptText })"
]) {
  assert.ok(commentPolishRouteSource.includes(moved), `4-5g provider wrapper missing: ${moved}`);
  assert.equal(serverSource.includes(moved), false, `4-5g provider wrapper must not be declared in server.js: ${moved}`);
}

for (const moved of [
  "export function inferExamAnalysisSubjectFromText",
  "export function sanitizeExamAnalysisSubject",
  "export function getExamAnalysisSsenSubject",
  "export function getSsenTypesForExamAnalysis",
  "export function getSsenTypeCatalogForExamAnalysis",
  "export function formatSsenTypeCandidatesForPrompt"
]) {
  assert.ok(ssenCatalogSource.includes(moved), `4-5g Ssen catalog export missing: ${moved}`);
  assert.equal(serverSource.includes(moved), false, `4-5g Ssen catalog helper must not be declared in server.js: ${moved}`);
}

// 4-5d closeout: the vision-check/boundary-detect pair's raw fetch calls
// moved to these two generic transport functions in commentPolish.js.
for (const moved of [
  "export async function runAnthropicPdfMessage({ buffer, errorMessage, maxTokens = 4000, model, promptText })",
  "export async function runOpenAiPdfMessage({ buffer, errorMessage, fileName, maxOutputTokens = 4000, model, promptText })"
]) {
  assert.ok(
    commentPolishRouteSource.includes(moved),
    `4-5d PDF transport function missing from commentPolish.js: ${moved}`
  );
}
assert.equal(
  (serverSource.match(/anthropicMessagesUrl|openAiResponsesUrl/g) ?? []).length,
  0,
  "server.js should no longer own provider URL constants after 4-5g"
);

assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:fourth-pass-provider-boundary-baseline")
);

console.log("fourth-pass provider boundary baseline passed · 4-5g row-fill/output wrappers and Ssen catalog isolated");

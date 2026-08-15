import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [serverSource, notificationsRouteSource, commentPolishRouteSource, resourceStorageOperationSource, packageJson] = await Promise.all([
  readFile(new URL("../api/server.js", import.meta.url), "utf8"),
  readFile(new URL("../api/routes/notifications.js", import.meta.url), "utf8"),
  readFile(new URL("../api/routes/commentPolish.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/resources/resourceMaterialStorageOperation.js", import.meta.url), "utf8"),
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

// 4-5a baseline: Storage primitives are still inline in api/server.js, not
// yet split into their own module (4-5b's target). Locks the starting point.
for (const stillInline of [
  "async function supabaseStorageRequest(path, options = {})",
  "async function ensureStorageBucket(bucketId, options = {})",
  "async function uploadStorageObjectWithBucketRetry(bucketId, storagePath, { bucketOptions = {}, contentType, body })",
  "async function createSignedStorageUrl(bucketId, storagePath, expiresIn = 60 * 60 * 24 * 7)",
  "async function downloadStorageObjectWithMetadata(bucketId, storagePath)",
  "async function downloadStorageObject(bucketId, storagePath)",
  "async function deleteStorageObject(bucketId, storagePath)"
]) {
  assert.ok(
    serverSource.includes(stillInline),
    `Storage primitive drifted from the 4-5a baseline (still expected inline in server.js): ${stillInline}`
  );
}

// 4-5a baseline: the 8 raw exam-analysis AI fetch functions are still inline
// in api/server.js, not yet split into their own module (4-5d's target).
for (const stillInline of [
  "async function runAnthropicExamAnalysisOutputDraft(prompt, outputType)",
  "async function runOpenAiExamAnalysisOutputDraft(prompt, outputType)",
  "async function runAnthropicPdfVisionCheck(sourceFile, buffer)",
  "async function runOpenAiPdfVisionCheck(sourceFile, buffer)",
  "async function runAnthropicPdfQuestionBoundaryDetection(sourceFile, buffer, detail)",
  "async function runOpenAiPdfQuestionBoundaryDetection(sourceFile, buffer, detail)",
  "async function runAnthropicPdfQuestionRowFill(sourceFile, buffer, detail, options = {})",
  "async function runOpenAiPdfQuestionRowFill(sourceFile, buffer, detail, options = {})"
]) {
  assert.ok(
    serverSource.includes(stillInline),
    `Exam analysis AI function drifted from the 4-5a baseline (still expected inline in server.js): ${stillInline}`
  );
}

assert.ok(
  packageJson.scripts["test:production"].includes("npm run test:fourth-pass-provider-boundary-baseline")
);

console.log(
  "fourth-pass provider boundary baseline passed · Solapi/Slack/comment-polish already isolated · Storage primitives 7 inline · exam-analysis AI functions 8 inline"
);

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  deleteResourceMaterialWithFile,
  saveResourceMaterialFile
} from "../src/domains/resources/resourceMaterialStorageOperation.js";
import {
  canPortalSessionAccessResourceMaterial,
  createResourceMaterialStoragePath,
  createResourceMaterialStorageReference,
  parseResourceMaterialStorageReference,
  validateResourceMaterialFile
} from "../src/domains/resources/resourceMaterialStorageModel.js";

const createdAt = "2026-08-03T00:00:00.000Z";
const updatedAt = "2026-08-03T00:00:01.000Z";
const baseMaterial = {
  classTemplateId: "class-1",
  createdAt,
  description: "안전 자료",
  fileName: "",
  fileUrl: "",
  materialId: "resource-storage-fixture",
  notifyByAlimtalk: false,
  studentIds: ["student-1"],
  title: "Storage fixture",
  updatedAt: "",
  visibility: "both"
};
const file = {
  buffer: Buffer.from("safe pdf fixture"),
  fileName: "fixture.pdf",
  mimeType: "application/pdf",
  size: Buffer.byteLength("safe pdf fixture")
};
const digest = "a".repeat(64);
const expectedPath = createResourceMaterialStoragePath({
  createdAt,
  digest,
  fileName: file.fileName,
  materialId: baseMaterial.materialId
});
const expectedReference = createResourceMaterialStorageReference({ storagePath: expectedPath });

assert.deepEqual(parseResourceMaterialStorageReference(expectedReference), {
  bucketId: "resource-materials",
  storagePath: expectedPath
});
assert.equal(validateResourceMaterialFile(file).extension, "pdf");
assert.throws(() => validateResourceMaterialFile({ ...file, fileName: "unsafe.exe" }), /PDF/);
assert.equal(canPortalSessionAccessResourceMaterial(baseMaterial, {
  defaultClassTemplateId: "class-x",
  studentId: "student-1"
}, "student"), true);
assert.equal(canPortalSessionAccessResourceMaterial(baseMaterial, {
  defaultClassTemplateId: "class-x",
  studentId: "student-2"
}, "student"), false);
assert.equal(canPortalSessionAccessResourceMaterial({ ...baseMaterial, studentIds: [] }, {
  defaultClassTemplateId: "class-x",
  studentId: "student-2"
}, "parent"), true);

const uploaded = [];
const deletedObjects = [];
const savedResult = await saveResourceMaterialFile({
  digest,
  file,
  material: baseMaterial,
  operations: {
    deleteObject: async (...args) => { deletedObjects.push(args); },
    getMaterial: async () => null,
    saveMaterial: async (material) => ({
      material: { ...material, updatedAt },
      source: "supabase",
      verified: true
    }),
    upload: async (...args) => { uploaded.push(args); }
  }
});
assert.equal(uploaded.length, 1);
assert.equal(uploaded[0][0], "resource-materials");
assert.equal(uploaded[0][1], expectedPath);
assert.equal(savedResult.material.fileUrl, expectedReference);
assert.equal(deletedObjects.length, 0);

let cleanedFailedUpload = false;
await assert.rejects(
  saveResourceMaterialFile({
    digest,
    file,
    material: baseMaterial,
    operations: {
      deleteObject: async () => { cleanedFailedUpload = true; },
      getMaterial: async () => null,
      saveMaterial: async () => { throw new Error("row conflict"); },
      upload: async () => {}
    }
  }),
  /row conflict/
);
assert.equal(cleanedFailedUpload, true, "row failure must remove the newly uploaded object");

await assert.rejects(
  saveResourceMaterialFile({
    digest,
    file,
    material: baseMaterial,
    operations: {
      deleteObject: async () => { throw new Error("cleanup failed"); },
      getMaterial: async () => null,
      saveMaterial: async () => { throw new Error("row failed"); },
      upload: async () => {}
    }
  }),
  (error) => error.code === "RESOURCE_MATERIAL_UPLOAD_ROLLBACK_FAILED"
);

const persistedMaterial = { ...baseMaterial, fileName: file.fileName, fileUrl: expectedReference, updatedAt };
let restored = null;
await assert.rejects(
  deleteResourceMaterialWithFile({
    material: persistedMaterial,
    operations: {
      deleteMaterial: async () => { throw new Error("row CAS conflict"); },
      deleteObject: async () => true,
      download: async () => ({ buffer: file.buffer, contentType: file.mimeType }),
      getMaterial: async () => persistedMaterial,
      upload: async (bucketId, storagePath, options) => { restored = { bucketId, options, storagePath }; }
    }
  }),
  /row CAS conflict/
);
assert.equal(restored.storagePath, expectedPath, "row conflict must restore the deleted object to its exact path");
assert.deepEqual(restored.options.body, file.buffer);

await assert.rejects(
  deleteResourceMaterialWithFile({
    material: persistedMaterial,
    operations: {
      deleteMaterial: async () => { throw new Error("row failure"); },
      deleteObject: async () => true,
      download: async () => ({ buffer: file.buffer, contentType: file.mimeType }),
      getMaterial: async () => persistedMaterial,
      upload: async () => { throw new Error("restore failure"); }
    }
  }),
  (error) => error.code === "RESOURCE_MATERIAL_DELETE_ROLLBACK_FAILED"
);

let removedRow = false;
const deleteResult = await deleteResourceMaterialWithFile({
  material: persistedMaterial,
  operations: {
    deleteMaterial: async () => {
      removedRow = true;
      return { materialId: persistedMaterial.materialId, source: "supabase", verified: true };
    },
    deleteObject: async () => true,
    download: async () => ({ buffer: file.buffer, contentType: file.mimeType }),
    getMaterial: async () => persistedMaterial,
    upload: async () => assert.fail("successful delete must not restore the object")
  }
});
assert.equal(removedRow, true);
assert.equal(deleteResult.storageDeleted, true);

await assert.rejects(
  deleteResourceMaterialWithFile({
    material: { ...persistedMaterial, fileUrl: "resource-storage://other-bucket/file.pdf" },
    operations: {
      deleteMaterial: async () => assert.fail("invalid bucket must not delete the row"),
      deleteObject: async () => assert.fail("invalid bucket must not delete an object"),
      getMaterial: async () => null
    }
  }),
  (error) => error.code === "RESOURCE_MATERIAL_STORAGE_REFERENCE_INVALID" && error.statusCode === 400
);

const [appSource, fileApiSource, portalSource, screenSource, serverSource, sessionGuardSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/resources/resourceMaterialFileApi.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/portals/PortalMaterialsTab.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/LearningSupportCenters.jsx", import.meta.url), "utf8"),
  readFile(new URL("../api/server.js", import.meta.url), "utf8"),
  readFile(new URL("../src/shared/server/sessionRouteGuard.js", import.meta.url), "utf8")
]);
const resourceFileServerSource = serverSource.slice(
  serverSource.indexOf('if (request.method === "POST" && requestUrl.pathname === "/api/resource-material-files")'),
  serverSource.indexOf('if (request.method === "GET" && requestUrl.pathname === "/api/resource-material-files/open")')
);
for (const binding of [
  'requestUrl.pathname === "/api/resource-material-files"',
  "getTeacherSession(request)",
  "parseVersionedWriteRequest(",
  "deleteResourceMaterialWithFile({",
  "saveResourceMaterialFile({"
]) assert.ok(resourceFileServerSource.includes(binding), `missing server Storage boundary: ${binding}`);
for (const binding of [
  'requestUrl.pathname === "/api/resource-material-files/open"',
  "getTeacherOrPortalSession(request)",
  "canPortalSessionAccessResourceMaterial(material, student, portalSession.role)",
  "downloadStorageObjectWithMetadata"
]) assert.ok(serverSource.includes(binding), `missing server Storage open boundary: ${binding}`);
for (const binding of [
  "function verifyTeacherSessionToken",
  "function verifyPortalSessionToken",
  "function getTeacherOrPortalSession"
]) assert.ok(sessionGuardSource.includes(binding), `missing session guard boundary: ${binding}`);
for (const binding of [
  "readFileAsDataUrl(file)",
  "Authorization: `Bearer ${sessionToken}`",
  'parseVersionedWriteRequest("POST", "/api/resource-material-files"',
  'parseVersionedWriteRequest("DELETE", "/api/resource-material-files"',
  "saveResourceMaterialFileAndVerify",
  "deleteResourceMaterialFileAndVerify",
  "getResourceMaterialOpenUrl",
  "openResourceMaterialWindow"
]) assert.ok(fileApiSource.includes(binding), `missing client Storage boundary: ${binding}`);
assert.match(fileApiSource, /parseVersionedWriteResponse\(\s*"POST",\s*"\/api\/resource-material-files"/);
assert.match(fileApiSource, /parseVersionedWriteResponse\(\s*"DELETE",\s*"\/api\/resource-material-files"/);
for (const binding of [
  "saveResourceMaterialAction",
  "deleteResourceMaterialAction",
  "file,",
  "openResourceMaterial",
  "openResourceMaterialWindow",
  "session?.sessionToken"
]) assert.ok(appSource.includes(binding), `missing App Storage binding: ${binding}`);
assert.ok(screenSource.includes("selectedFile"));
assert.ok(screenSource.includes("private Storage"));
assert.ok(portalSource.includes("openMaterial?.(material)"));
assert.equal(portalSource.includes("href={material.fileUrl}"), false);

console.log("resource material private Storage upload, access, delete rollback, and UI fixtures passed");

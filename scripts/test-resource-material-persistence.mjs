import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  deleteAndVerifyResourceMaterial,
  saveAndVerifyResourceMaterial
} from "../src/domains/resources/resourceMaterialApi.js";
import {
  deleteResourceMaterialAction,
  saveResourceMaterialAction
} from "../src/domains/resources/resourceMaterialAction.js";
import {
  areResourceMaterialsPersistedEqual,
  createResourceMaterialDraftId,
  createResourceMaterialVersionFilter,
  isResourceMaterialInsertConflict
} from "../src/domains/resources/resourceMaterialPersistence.js";

const version0 = "2026-08-03T00:00:00.000Z";
const baseMaterial = {
  classTemplateId: "class-1",
  createdAt: version0,
  description: "TARGET 설명",
  fileName: "target.pdf",
  fileUrl: "https://example.test/target.pdf",
  materialId: "resource-target",
  notifyByAlimtalk: false,
  studentIds: ["student-2", "student-1"],
  title: "TARGET 자료",
  updatedAt: version0,
  visibility: "student"
};

assert.equal(createResourceMaterialDraftId({ randomUUID: () => "fixture-id" }), "resource_fixture-id");
assert.equal(
  createResourceMaterialVersionFilter("자료/1", "2026-08-03T00:00:00.000+00:00"),
  "resource_material_id=eq.%EC%9E%90%EB%A3%8C%2F1&updated_at=eq.2026-08-03T00%3A00%3A00.000%2B00%3A00"
);
assert.equal(isResourceMaterialInsertConflict(new Error("duplicate key 23505")), true);
assert.equal(areResourceMaterialsPersistedEqual(baseMaterial, {
  ...baseMaterial,
  classTemplateId: "",
  classTemplateIds: ["class-1"],
  materialType: "link",
  studentIds: ["student-1", "student-2"]
}), true);

let saveCalls = 0;
const apiSaved = { ...baseMaterial, updatedAt: "2026-08-03T00:00:00.001Z" };
const saveResult = await saveAndVerifyResourceMaterial({
  material: baseMaterial,
  read: async () => ({ materials: [apiSaved], source: "supabase" }),
  request: async (path, body, timeoutMs) => {
    saveCalls += 1;
    assert.equal(path, "/api/resource-materials");
    assert.deepEqual(body, { material: baseMaterial });
    assert.equal(timeoutMs, 15000);
    return { material: apiSaved, source: "supabase", verified: true };
  }
});
assert.equal(saveCalls, 1);
assert.equal(saveResult.material.updatedAt, apiSaved.updatedAt);

let deletePath = "";
const deleteResult = await deleteAndVerifyResourceMaterial({
  material: apiSaved,
  read: async () => ({ materials: [], source: "supabase" }),
  request: async (path) => {
    deletePath = path;
    return { materialId: apiSaved.materialId, source: "supabase", verified: true };
  }
});
assert.match(deletePath, /expectedUpdatedAt=2026-08-03T00%3A00%3A00.001Z/);
assert.equal(deleteResult.materialId, apiSaved.materialId);

const saveStates = [];
let appliedMaterials = null;
const actionSaveResult = await saveResourceMaterialAction({
  material: { ...baseMaterial, description: " TARGET 설명 ", title: " TARGET 자료 " },
  onApply: (materials) => { appliedMaterials = materials; },
  onState: (state) => { saveStates.push(state.state); },
  read: async () => ({ materials: [apiSaved], source: "supabase" }),
  request: async (_path, body) => {
    assert.equal(body.material.title, "TARGET 자료");
    assert.equal(body.material.description, "TARGET 설명");
    return { material: apiSaved, source: "supabase", verified: true };
  }
});
assert.equal(actionSaveResult.ok, true);
assert.deepEqual(saveStates, ["saving", "saved"]);
assert.deepEqual(appliedMaterials, [apiSaved]);

const deleteStates = [];
const actionDeleteResult = await deleteResourceMaterialAction({
  material: apiSaved,
  onApply: () => assert.fail("failed delete must preserve the current list"),
  onState: (state) => { deleteStates.push(state.state); },
  read: async () => ({ materials: [apiSaved], source: "supabase" }),
  request: async () => { throw new Error("fixture conflict"); }
});
assert.equal(actionDeleteResult.ok, false);
assert.deepEqual(deleteStates, ["saving", "failed"]);

const originalEnv = {
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  SUPABASE_URL: process.env.SUPABASE_URL
};
const originalFetch = globalThis.fetch;
process.env.SUPABASE_URL = "https://resource-material-fixture.supabase.test";
process.env.SUPABASE_ANON_KEY = "fixture-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "fixture-service-key";

function toDbRow(material) {
  return {
    class_template_ids: material.classTemplateIds ?? (material.classTemplateId ? [material.classTemplateId] : []),
    content: material.fileName || null,
    created_at: material.createdAt || version0,
    created_by: material.createdBy || null,
    description: material.description || null,
    material_type: material.materialType || "link",
    notify_by_alimtalk: Boolean(material.notifyByAlimtalk),
    resource_material_id: material.materialId,
    student_ids: material.studentIds || [],
    subject: material.subject || null,
    title: material.title,
    updated_at: material.updatedAt,
    url: material.fileUrl || null,
    visibility: material.visibility === "both" ? "student_parent" : material.visibility
  };
}

let storedRows = [];
const mutations = [];
let concurrentInsertRow = null;
function getEq(searchParams, field) {
  return searchParams.get(field)?.replace(/^eq\./, "") ?? "";
}

globalThis.fetch = async (url, options = {}) => {
  const requestUrl = new URL(url);
  assert.equal(requestUrl.pathname.split("/rest/v1/")[1], "resource_materials");
  const method = options.method || "GET";
  if (method === "GET") {
    const materialId = getEq(requestUrl.searchParams, "resource_material_id");
    return Response.json(materialId ? storedRows.filter((row) => row.resource_material_id === materialId) : storedRows);
  }
  const body = JSON.parse(options.body || "null");
  mutations.push({ body, method, search: requestUrl.search });
  if (method === "POST") {
    const rows = Array.isArray(body) ? body : [body];
    if (concurrentInsertRow) {
      storedRows.push(concurrentInsertRow);
      concurrentInsertRow = null;
      return Response.json({ message: "duplicate key 23505" }, { status: 409 });
    }
    if (rows.some((row) => storedRows.some((stored) => stored.resource_material_id === row.resource_material_id))) {
      return Response.json({ message: "duplicate key 23505" }, { status: 409 });
    }
    storedRows.push(...rows);
    return Response.json(rows, { status: 201 });
  }
  if (method === "PATCH") {
    const materialId = getEq(requestUrl.searchParams, "resource_material_id");
    const expectedUpdatedAt = getEq(requestUrl.searchParams, "updated_at");
    const patched = [];
    storedRows = storedRows.map((row) => {
      if (row.resource_material_id !== materialId || row.updated_at !== expectedUpdatedAt) return row;
      const nextRow = { ...row, ...body };
      patched.push(nextRow);
      return nextRow;
    });
    return Response.json(patched);
  }
  if (method === "DELETE") {
    const materialId = getEq(requestUrl.searchParams, "resource_material_id");
    const expectedUpdatedAt = getEq(requestUrl.searchParams, "updated_at");
    const deleted = storedRows.filter((row) => row.resource_material_id === materialId && row.updated_at === expectedUpdatedAt);
    storedRows = storedRows.filter((row) => !deleted.includes(row));
    return Response.json(deleted);
  }
  assert.fail(`unexpected Supabase fixture method: ${method}`);
};

try {
  const { deleteResourceMaterial, upsertResourceMaterial } = await import("../api/routes/coreData.js");
  const created = await upsertResourceMaterial({ ...baseMaterial, updatedAt: "" });
  assert.equal(created.verified, true);
  assert.equal(storedRows.length, 1);
  assert.equal(mutations.filter((request) => request.method === "POST").length, 1);

  const retried = await upsertResourceMaterial({ ...baseMaterial, updatedAt: "" });
  assert.equal(retried.material.updatedAt, created.material.updatedAt);
  assert.equal(mutations.filter((request) => request.method === "POST").length, 1, "unknown-result retry must not insert twice");
  const converged = await upsertResourceMaterial({
    ...baseMaterial,
    fileName: "latest.pdf",
    title: "응답 유실 뒤 최신 초안",
    updatedAt: ""
  });
  assert.equal(converged.recoveredDraft, true);
  assert.equal(converged.material.title, "응답 유실 뒤 최신 초안");
  assert.equal(storedRows.length, 1, "latest draft convergence must not create a duplicate row");
  assert.equal(mutations.filter((request) => request.method === "PATCH").length, 1);
  await assert.rejects(
    upsertResourceMaterial({
      ...baseMaterial,
      createdAt: "2026-08-03T00:00:01.000Z",
      title: "다른 생성 토큰의 충돌 자료",
      updatedAt: ""
    }),
    (error) => error.code === "RESOURCE_MATERIAL_CONFLICT" && error.statusCode === 409
  );

  await assert.rejects(
    deleteResourceMaterial(baseMaterial.materialId, { expectedUpdatedAt: version0 }),
    (error) => error.code === "RESOURCE_MATERIAL_CONFLICT" && error.statusCode === 409
  );
  const deleted = await deleteResourceMaterial(baseMaterial.materialId, {
    expectedUpdatedAt: converged.material.updatedAt
  });
  assert.equal(deleted.verified, true);
  assert.equal(storedRows.length, 0);
  const retriedDelete = await deleteResourceMaterial(baseMaterial.materialId, {
    expectedUpdatedAt: created.material.updatedAt
  });
  assert.equal(retriedDelete.verified, true, "unknown-result delete retry must converge when the row is absent");

  concurrentInsertRow = toDbRow({
    ...baseMaterial,
    title: "동시에 먼저 저장된 초안",
    updatedAt: "2026-08-03T00:00:02.000Z"
  });
  const racedInsert = await upsertResourceMaterial({
    ...baseMaterial,
    title: "insert 충돌 뒤 최신 초안",
    updatedAt: ""
  });
  assert.equal(racedInsert.recoveredDraft, true);
  assert.equal(racedInsert.material.title, "insert 충돌 뒤 최신 초안");
  assert.equal(storedRows.length, 1, "insert race recovery must converge to one row");
} finally {
  globalThis.fetch = originalFetch;
  for (const [key, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

const [actionSource, appSource, outletSource, screenSource, serverSource] = await Promise.all([
  readFile(new URL("../src/domains/resources/resourceMaterialAction.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/teacher/LearningSupportCenters.jsx", import.meta.url), "utf8"),
  readFile(new URL("../api/server.js", import.meta.url), "utf8")
]);
for (const binding of [
  "resourceMaterialMutationRef.current",
  "saveResourceMaterialAction({",
  "deleteResourceMaterialAction({",
  "resourceMaterialsRef.current = materials",
  "setResourceMaterialBusy(false)"
]) assert.ok(appSource.includes(binding), `missing App resource persistence binding: ${binding}`);
for (const binding of [
  "saveAndVerifyResourceMaterial({",
  "deleteAndVerifyResourceMaterial({",
  "Supabase 저장 및 목록 재조회 확인 완료"
]) assert.ok(actionSource.includes(binding), `missing resource action binding: ${binding}`);
assert.ok(!appSource.includes('postJson("/api/resource-materials", { material: nextMaterial })'));
for (const binding of [
  "resourceMaterialBusy: models.resourceMaterialBusy",
  "resourceMaterialDeleteStates: models.resourceMaterialDeleteStates",
  "resourceMaterialSaveState: models.resourceMaterialSaveState",
  "if (result?.ok) setForm(createEmptyResourceMaterialForm())",
  "disabled={resourceMaterialBusy}",
  "resourceMaterialSaveFeedback",
  "visibleResourceMaterialSaveState",
  "파일 내용이 업로드되지 않고 파일명만 저장됩니다"
]) assert.ok(`${outletSource}\n${screenSource}`.includes(binding), `missing resource save UI binding: ${binding}`);
assert.ok(serverSource.includes('expectedUpdatedAt: requestUrl.searchParams.get("expectedUpdatedAt") || ""'));

console.log("resource material insert-only, CAS delete, readback, retry, and UI fixtures passed");

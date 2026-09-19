import { loadEnvFile } from "./loadEnv.js";
import {
  applyTenantFilterToQuery,
  applyTenantToRows,
  requireTenantScopedMutationQuery,
  resolveReadTenantIds,
  resolveTenantId
} from "../../src/shared/server/tenantScope.js";

loadEnvFile();

const SUPABASE_REQUIRED_KEYS = ["SUPABASE_URL", "SUPABASE_ANON_KEY"];

function getEnv(name) {
  return process.env[name]?.trim() ?? "";
}

export function isSupabaseConfigured({ requireServiceRole = false } = {}) {
  const baseReady = SUPABASE_REQUIRED_KEYS.every((key) => Boolean(getEnv(key)));
  if (!baseReady) return false;
  return requireServiceRole ? Boolean(getEnv("SUPABASE_SERVICE_ROLE_KEY")) : true;
}

export function getSupabaseStatus() {
  return {
    configured: isSupabaseConfigured(),
    serviceRoleConfigured: isSupabaseConfigured({ requireServiceRole: true }),
    url: getEnv("SUPABASE_URL") ? "set" : "missing",
    anonKey: getEnv("SUPABASE_ANON_KEY") ? "set" : "missing",
    serviceRoleKey: getEnv("SUPABASE_SERVICE_ROLE_KEY") ? "set" : "missing"
  };
}

const scheduledNotificationStatus = "scheduled";
const authenticatedManualNotificationStatuses = ["queued", "pending_send"];

function normalizeNotificationDispatchNow(now) {
  const value = now instanceof Date ? now : new Date(now);
  if (Number.isNaN(value.getTime())) throw new Error("now must be a valid date value.");
  return value.toISOString();
}

export function createNotificationDispatchCandidateQuery({
  allowManualStatuses = false,
  limit = 1000,
  now = new Date()
} = {}) {
  const safeLimit = Math.max(1, Math.min(1000, Number(limit) || 1000));
  const statuses = [
    scheduledNotificationStatus,
    ...(allowManualStatuses ? authenticatedManualNotificationStatuses : [])
  ];
  const dueFilter = `(scheduled_at.is.null,scheduled_at.lte.${normalizeNotificationDispatchNow(now)})`;

  return [
    "select=*",
    `status=in.(${statuses.join(",")})`,
    `or=${encodeURIComponent(dueFilter)}`,
    "order=created_at.desc",
    `limit=${safeLimit}`
  ].join("&");
}

export async function supabaseRestRequest(path, options = {}) {
  const requireServiceRole = options.requireServiceRole ?? false;
  if (!isSupabaseConfigured({ requireServiceRole })) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const supabaseUrl = getEnv("SUPABASE_URL").replace(/\/$/, "");
  const anonKey = getEnv("SUPABASE_ANON_KEY");
  const serviceRoleKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");
  const apiKey = requireServiceRole && serviceRoleKey ? serviceRoleKey : anonKey;
  const url = `${supabaseUrl}/rest/v1/${path.replace(/^\//, "")}`;
  const timeoutMs = options.timeoutMs ?? 12000;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  let response;
  try {
    response = await fetch(url, {
      method: options.method ?? "GET",
      headers: {
        apikey: apiKey,
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        ...(options.prefer ? { Prefer: options.prefer } : {}),
        ...(options.headers ?? {})
      },
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      signal: controller.signal
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error(`Supabase request timed out after ${timeoutMs}ms.`);
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    const message = data?.message || data?.error || response.statusText;
    throw new Error(`Supabase request failed: ${message}`);
  }

  return data;
}

const listRowsDefaultPageSize = 1000;
const listRowsExplicitLimitPattern = /(^|&)limit=/;

// 표별 기본키. 페이지를 나눠 읽을 때 정렬 맨 뒤에 붙여 페이지 경계를 고정한다.
// offset 페이지네이션은 두 요청 사이에 같은 정렬 값(같은 날짜·같은 수업)인 행들의
// 순서가 보장되지 않아서, 그 사이에 한 행이 갱신되면(키오스크 체크인, 수업일지 저장)
// 행이 빠지거나 두 번 나온다 — 2026-08-25 "저장했는데 새로고침 뒤 사라짐" 과 같은
// 모양의 조용한 오독이다. 기본키가 정렬 끝에 있으면 전체 순서가 유일해진다.
// supabase/schema.sql·migrations 와 test-supabase-rest-list-rows-pagination 이 대조한다.
export const primaryKeyColumnsByTable = Object.freeze({
  academy_reminders: "reminder_id",
  app_state: "tenant_id,state_key",
  attendance_events: "attendance_event_id",
  class_templates: "class_template_id",
  exam_analysis_ai_jobs: "ai_job_id",
  exam_analysis_events: "event_id",
  exam_analysis_questions: "question_row_id",
  exam_analysis_runs: "analysis_run_id",
  exam_analysis_sources: "source_id",
  exam_post_submissions: "submission_id",
  exam_prep_rows: "tenant_id,exam_prep_id",
  exam_submission_files: "file_id",
  homeworks: "homework_id",
  kiosk_devices: "kiosk_id",
  lesson_student_records: "lesson_student_record_id",
  lessons: "lesson_id",
  makeup_tasks: "makeup_task_id",
  notification_jobs: "notification_job_id",
  notification_logs: "notification_log_id",
  problem_bank_attempts: "attempt_id",
  problem_bank_books: "book_id",
  problem_bank_items: "item_id",
  problem_bank_regions: "region_id",
  problem_bank_units: "unit_id",
  problem_books: "problem_book_id",
  resource_materials: "resource_material_id",
  school_events: "school_event_id",
  score_records: "score_record_id",
  special_lecture_applications: "application_id",
  special_lecture_enrollments: "enrollment_id",
  student_intake_applicants: "applicant_id",
  students: "student_id",
  teacher_accounts: "teacher_id",
  test_attempts: "test_attempt_id",
  test_sessions: "test_session_id",
  wrong_problem_statuses: "wrong_problem_status_id"
});

function orderColumnName(orderTerm) {
  return orderTerm.split(".")[0];
}

/**
 * 페이지 읽기의 정렬을 결정적으로 만든다: `order=` 가 없으면 기본키 정렬을 넣고, 있으면
 * 이미 들어 있지 않은 기본키 열을 뒤에 덧붙인다. 호출자가 보는 순서는 동률 안에서만 바뀐다.
 * 기본키를 모르는 표는 그대로 둔다(정렬을 잘못 붙여 요청이 실패하는 것보다 낫다).
 */
export function withStablePaginationOrder(table, query) {
  const primaryKey = primaryKeyColumnsByTable[table];
  if (!primaryKey) return query;
  const params = query ? query.split("&") : [];
  const orderIndex = params.findIndex((param) => param.startsWith("order="));
  const existingColumns = orderIndex === -1
    ? []
    : params[orderIndex].slice("order=".length).split(",").map(orderColumnName);
  const missing = primaryKey.split(",").filter((column) => !existingColumns.includes(column));
  if (missing.length === 0) return query;
  const tiebreaker = missing.map((column) => `${column}.asc`).join(",");
  if (orderIndex === -1) return params.length ? `${query}&order=${tiebreaker}` : `order=${tiebreaker}`;
  params[orderIndex] = `${params[orderIndex]},${tiebreaker}`;
  return params.join("&");
}

export async function listRows(table, query = "select=*", options = {}) {
  const requireServiceRole = options.requireServiceRole ?? false;
  query = applyTenantFilterToQuery(table, query, resolveReadTenantIds(options.tenantId));
  if (listRowsExplicitLimitPattern.test(query)) {
    return supabaseRestRequest(`${table}?${query}`, { requireServiceRole });
  }

  query = withStablePaginationOrder(table, query);
  const pageSize = options.pageSize ?? listRowsDefaultPageSize;
  const rows = [];
  let offset = 0;
  for (;;) {
    const page = await supabaseRestRequest(
      `${table}?${query}&limit=${pageSize}&offset=${offset}`,
      { requireServiceRole }
    );
    rows.push(...page);
    if (page.length < pageSize) return rows;
    offset += pageSize;
  }
}

export async function upsertRows(table, rows, options = {}) {
  if (!Array.isArray(rows) || rows.length === 0) return [];
  rows = applyTenantToRows(table, rows, resolveTenantId(options.tenantId));
  const conflictQuery = options.onConflict ? `?on_conflict=${encodeURIComponent(options.onConflict)}` : "";
  return supabaseRestRequest(`${table}${conflictQuery}`, {
    method: "POST",
    body: rows,
    prefer: "resolution=merge-duplicates,return=representation",
    requireServiceRole: true
  });
}

export async function insertRows(table, rows, options = {}) {
  if (!Array.isArray(rows) || rows.length === 0) return [];
  rows = applyTenantToRows(table, rows, resolveTenantId(options.tenantId));
  return supabaseRestRequest(table, {
    method: "POST",
    body: rows,
    prefer: "return=representation",
    requireServiceRole: options.requireServiceRole ?? true,
    timeoutMs: options.timeoutMs
  });
}

export async function callRpc(functionName, args = {}, options = {}) {
  if (!functionName) throw new Error("Supabase RPC function name is required.");
  return supabaseRestRequest(`rpc/${functionName}`, {
    method: "POST",
    body: args,
    requireServiceRole: options.requireServiceRole ?? true,
    timeoutMs: options.timeoutMs
  });
}

export async function patchRows(table, query, values, options = {}) {
  query = requireTenantScopedMutationQuery(table, query, resolveTenantId(options.tenantId));
  return supabaseRestRequest(`${table}?${query}`, {
    method: "PATCH",
    body: values,
    prefer: "return=representation",
    requireServiceRole: true
  });
}

export async function deleteRows(table, query, options = {}) {
  query = requireTenantScopedMutationQuery(table, query, resolveTenantId(options.tenantId));
  return supabaseRestRequest(`${table}?${query}`, {
    method: "DELETE",
    prefer: "return=representation",
    requireServiceRole: true
  });
}

function getSupabaseStorageBaseUrl() {
  const supabaseUrl = getEnv("SUPABASE_URL").replace(/\/$/, "");
  if (!supabaseUrl) throw new Error("SUPABASE_URL이 설정되지 않았습니다.");
  return `${supabaseUrl}/storage/v1`;
}

function getSupabaseServiceRoleKey() {
  const key = getEnv("SUPABASE_SERVICE_ROLE_KEY");
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY가 설정되지 않았습니다.");
  return key;
}

async function supabaseStorageRequest(path, options = {}) {
  const serviceRoleKey = getSupabaseServiceRoleKey();
  const response = await fetch(`${getSupabaseStorageBaseUrl()}/${path.replace(/^\//, "")}`, {
    method: options.method ?? "GET",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      ...(options.contentType ? { "Content-Type": options.contentType } : {}),
      ...(options.headers ?? {})
    },
    body: options.body
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = data?.message || data?.error || response.statusText;
    const error = new Error(message);
    error.statusCode = response.status;
    throw error;
  }
  return data;
}

function isStorageBucketNotFound(error) {
  const message = String(error?.message ?? "").toLowerCase();
  return error?.statusCode === 404 || message.includes("bucket not found") || message.includes("bucket not exist");
}

export async function ensureStorageBucket(bucketId, options = {}) {
  try {
    await supabaseStorageRequest(`bucket/${encodeURIComponent(bucketId)}`);
  } catch (error) {
    if (!isStorageBucketNotFound(error)) throw error;
    await supabaseStorageRequest("bucket", {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify({
        id: bucketId,
        name: bucketId,
        public: false,
        file_size_limit: options.fileSizeLimit ?? 20 * 1024 * 1024,
        allowed_mime_types: options.allowedMimeTypes ?? ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf"]
      })
    });
  }
}

export async function uploadStorageObjectWithBucketRetry(bucketId, storagePath, { bucketOptions = {}, contentType, body }) {
  try {
    return await supabaseStorageRequest(`object/${bucketId}/${storagePath}`, {
      method: "PUT",
      contentType,
      headers: { "x-upsert": "true" },
      body
    });
  } catch (error) {
    if (!isStorageBucketNotFound(error)) throw error;
    await ensureStorageBucket(bucketId, bucketOptions);
    return supabaseStorageRequest(`object/${bucketId}/${storagePath}`, {
      method: "PUT",
      contentType,
      headers: { "x-upsert": "true" },
      body
    });
  }
}

export function sanitizeStorageSegment(value, fallback = "unknown") {
  const sanitized = String(value ?? "")
    .trim()
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/\.\.+/g, ".")
    .replace(/-+/g, "-")
    .replace(/^[.-]+|[.-]+$/g, "");
  return sanitized || fallback;
}

function getStorageFileExtension(fileName, mimeType) {
  const extensionMatch = String(fileName ?? "").match(/\.([A-Za-z0-9]{1,12})$/);
  if (extensionMatch) return `.${extensionMatch[1].toLowerCase()}`;
  const subtype = String(mimeType ?? "").split("/")[1] ?? "";
  return subtype ? `.${sanitizeStorageSegment(subtype, "bin")}` : "";
}

export function getStorageSafeFileName(fileName, mimeType, fallbackBase = "file") {
  const rawFileName = String(fileName ?? "").trim();
  const extension = getStorageFileExtension(rawFileName, mimeType);
  const baseName = extension && rawFileName.toLowerCase().endsWith(extension)
    ? rawFileName.slice(0, -extension.length)
    : rawFileName.replace(/\.[^.]+$/, "");
  return `${sanitizeStorageSegment(baseName, fallbackBase)}${extension}`;
}

export function parseDataUrl(dataUrl) {
  const match = String(dataUrl ?? "").match(/^data:([^;,]+)?(;base64)?,(.*)$/);
  if (!match) throw new Error("파일 데이터 형식이 올바르지 않습니다.");
  return {
    mimeType: match[1] || "application/octet-stream",
    buffer: Buffer.from(match[3], match[2] ? "base64" : "utf8")
  };
}

export async function createSignedStorageUrl(bucketId, storagePath, expiresIn = 60 * 60 * 24 * 7) {
  const result = await supabaseStorageRequest(`object/sign/${bucketId}/${storagePath}`, {
    method: "POST",
    contentType: "application/json",
    body: JSON.stringify({ expiresIn })
  });
  if (!result?.signedURL) return "";
  if (/^https?:\/\//.test(result.signedURL)) return result.signedURL;
  return `${getSupabaseStorageBaseUrl()}${result.signedURL}`;
}

export async function downloadStorageObjectWithMetadata(bucketId, storagePath) {
  if (!bucketId || !storagePath) throw new Error("다운로드할 파일 경로가 없습니다.");
  const serviceRoleKey = getSupabaseServiceRoleKey();
  const response = await fetch(`${getSupabaseStorageBaseUrl()}/object/${bucketId}/${storagePath}`, {
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`
    }
  });
  if (!response.ok) {
    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }
    const error = new Error(data?.message || data?.error || response.statusText);
    error.statusCode = response.status;
    throw error;
  }
  return {
    buffer: Buffer.from(await response.arrayBuffer()),
    contentType: response.headers.get("content-type") || "application/octet-stream"
  };
}

export async function downloadStorageObject(bucketId, storagePath) {
  return (await downloadStorageObjectWithMetadata(bucketId, storagePath)).buffer;
}

/**
 * 접두사 아래 객체 목록(최대 1000개씩 · 하위 폴더는 재귀) — { path, size, md5 }. md5 는 Storage 의 eTag(한 번에 올린 객체는
 * 내용의 MD5)에서 따옴표를 뗀 것. 교재 다시 등록 때 「바뀐 파일만 올리기」의 대조 기준이다(eTag 가 MD5 꼴이 아니면 빈 문자열).
 */
export async function listStorageObjectEntries(bucketId, prefix) {
  const entries = [];
  const folders = [String(prefix ?? "").replace(/^\/+|\/+$/g, "")];
  while (folders.length) {
    const folder = folders.pop();
    let offset = 0;
    for (;;) {
      const page = await supabaseStorageRequest(`object/list/${bucketId}`, {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify({ prefix: folder, limit: 1000, offset, sortBy: { column: "name", order: "asc" } })
      });
      const list = Array.isArray(page) ? page : [];
      for (const entry of list) {
        const name = `${folder ? `${folder}/` : ""}${entry.name}`;
        // 폴더 항목은 id 가 없다.
        if (!entry.id) {
          folders.push(name);
          continue;
        }
        const etag = String(entry.metadata?.eTag ?? entry.metadata?.etag ?? "").replace(/^"+|"+$/g, "");
        entries.push({ path: name, size: Number(entry.metadata?.size ?? 0) || 0, md5: /^[a-f0-9]{32}$/i.test(etag) ? etag.toLowerCase() : "" });
      }
      if (list.length < 1000) break;
      offset += 1000;
    }
  }
  return entries;
}

/** 접두사 아래 객체 이름 목록. 교재 삭제 때 이미지 정리에 쓴다. */
export async function listStorageObjectPaths(bucketId, prefix) {
  return (await listStorageObjectEntries(bucketId, prefix)).map((entry) => entry.path);
}

/** 여러 객체를 한 번에 지운다(100개씩). */
export async function deleteStorageObjects(bucketId, storagePaths) {
  const list = (Array.isArray(storagePaths) ? storagePaths : []).filter(Boolean);
  for (let offset = 0; offset < list.length; offset += 100) {
    await supabaseStorageRequest(`object/${bucketId}`, {
      method: "DELETE",
      contentType: "application/json",
      body: JSON.stringify({ prefixes: list.slice(offset, offset + 100) })
    });
  }
  return list.length;
}

export async function deleteStorageObject(bucketId, storagePath) {
  if (!bucketId || !storagePath) return false;
  try {
    await supabaseStorageRequest(`object/${bucketId}/${storagePath}`, { method: "DELETE" });
    return true;
  } catch (error) {
    if (error?.statusCode === 404) return false;
    throw error;
  }
}

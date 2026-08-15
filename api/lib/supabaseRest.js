import { loadEnvFile } from "./loadEnv.js";

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

export async function listRows(table, query = "select=*", options = {}) {
  return supabaseRestRequest(`${table}?${query}`, {
    requireServiceRole: options.requireServiceRole ?? false
  });
}

export async function upsertRows(table, rows, options = {}) {
  if (!Array.isArray(rows) || rows.length === 0) return [];
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

export async function patchRows(table, query, values) {
  return supabaseRestRequest(`${table}?${query}`, {
    method: "PATCH",
    body: values,
    prefer: "return=representation",
    requireServiceRole: true
  });
}

export async function deleteRows(table, query) {
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

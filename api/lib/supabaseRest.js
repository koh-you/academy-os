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

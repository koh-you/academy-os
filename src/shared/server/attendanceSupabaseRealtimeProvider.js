import { createClient } from "@supabase/supabase-js";

const table = "lesson_student_records";
const databaseChangeEventTypes = new Set(["INSERT", "UPDATE", "DELETE"]);

function getDatabaseChangeEventType(message = {}) {
  const candidates = [
    message?.eventType,
    message?.event_type,
    message?.type,
    message?.payload?.eventType,
    message?.payload?.event_type,
    message?.payload?.type,
    message?.payload?.payload?.eventType,
    message?.payload?.payload?.event_type,
    message?.payload?.payload?.type
  ];
  return candidates
    .map((value) => String(value ?? "").toUpperCase())
    .find((value) => databaseChangeEventTypes.has(value));
}

export function createAttendanceSupabaseRealtimeProvider({
  enabled = globalThis.process?.env?.SUPABASE_REALTIME_ENABLED === "true",
  logger = console,
  serviceRoleKey = globalThis.process?.env?.SUPABASE_SERVICE_ROLE_KEY,
  supabaseUrl = globalThis.process?.env?.SUPABASE_URL,
  createSupabaseClient = createClient
} = {}) {
  if (!enabled || !supabaseUrl || !serviceRoleKey) return undefined;

  const client = createSupabaseClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
  client.realtime.setAuth(serviceRoleKey);
  const tenantChannels = new Map();

  function removeTenantChannel(tenantId, entry) {
    if (entry.listeners.size || tenantChannels.get(tenantId) !== entry) return;
    tenantChannels.delete(tenantId);
    void client.removeChannel(entry.channel);
  }

  function getTenantChannel(tenantId) {
    const existing = tenantChannels.get(tenantId);
    if (existing) return existing;
    const listeners = new Set();
    const channel = client
      .channel(`attendance:${tenantId}`, { config: { private: true } })
      .on(
        "broadcast",
        { event: "lesson_student_records_changed" },
        (message = {}) => {
          // Supabase SDK versions expose database Broadcast metadata at
          // different envelope depths. Search the known shallow envelopes and
          // accept only database operation names, never the generic
          // protocol-level `broadcast` type or any row payload.
          const change = {
            eventType: getDatabaseChangeEventType(message),
            table
          };
          logger.info?.("[attendance-realtime]", JSON.stringify({
            eventType: change.eventType ?? null,
            listeners: listeners.size,
            stage: "broadcast_received"
          }));
          for (const listener of listeners) listener.onChange(change);
        }
      );
    const entry = { channel, listeners, status: "" };
    tenantChannels.set(tenantId, entry);
    channel.subscribe((status) => {
      entry.status = status;
      logger.info?.("[attendance-realtime]", JSON.stringify({
        listeners: listeners.size,
        stage: "channel_status",
        status
      }));
      for (const listener of listeners) listener.onStatus?.(status);
    });
    return entry;
  }

  function subscribeToAttendanceChanges({ onChange, onStatus, tenantId }) {
    const entry = getTenantChannel(tenantId);
    const listener = { onChange, onStatus };
    entry.listeners.add(listener);
    logger.info?.("[attendance-realtime]", JSON.stringify({
      listeners: entry.listeners.size,
      stage: "listener_added"
    }));
    if (entry.status) onStatus?.(entry.status);
    return () => {
      entry.listeners.delete(listener);
      logger.info?.("[attendance-realtime]", JSON.stringify({
        listeners: entry.listeners.size,
        stage: "listener_removed"
      }));
      removeTenantChannel(tenantId, entry);
    };
  }

  return { subscribeToAttendanceChanges };
}

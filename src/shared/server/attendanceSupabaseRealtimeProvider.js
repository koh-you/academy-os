import { createClient } from "@supabase/supabase-js";

const table = "lesson_student_records";

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
        ({ payload = {} } = {}) => {
          // `realtime.broadcast_changes` payloads can arrive one level deeper
          // than client-originated broadcasts, depending on the Realtime
          // protocol/SDK version. Normalize both shapes before the SSE layer
          // forwards the privacy-safe event metadata to browsers.
          const changePayload = payload?.payload ?? payload;
          const change = {
            eventType: changePayload?.eventType ?? changePayload?.type,
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

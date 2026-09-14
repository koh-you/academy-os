import { apiUrl, withAuthHeaders } from "../../shared/utils/apiClient.js";

const terminalStatuses = new Set(["CHANNEL_ERROR", "TIMED_OUT", "CLOSED"]);

function parseSseEvent(block) {
  let event = "message";
  const data = [];
  for (const line of block.split("\n")) {
    if (line.startsWith("event:")) event = line.slice(6).trim();
    if (line.startsWith("data:")) data.push(line.slice(5).trimStart());
  }
  if (!data.length) return null;
  try {
    return { event, payload: JSON.parse(data.join("\n")) };
  } catch {
    return null;
  }
}

export function createAttendanceRealtimeSubscriptionFactory({
  date,
  fetchImpl = fetch,
  realtimeEnabled = import.meta.env?.VITE_ATTENDANCE_REALTIME_ENABLED === "true"
}) {
  if (!realtimeEnabled) return undefined;
  return ({ onEvent, onStatus }) => {
    const controller = new AbortController();
    let disposed = false;
    void (async () => {
      try {
        const response = await fetchImpl(
          apiUrl(`/api/lesson-records/realtime?date=${encodeURIComponent(date)}`),
          { cache: "no-store", headers: withAuthHeaders(), signal: controller.signal }
        );
        if (!response.ok || !response.body) throw new Error("realtime_unavailable");
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        while (!disposed) {
          const { done, value } = await reader.read();
          buffer += decoder.decode(value, { stream: !done }).replace(/\r\n/g, "\n");
          const blocks = buffer.split("\n\n");
          buffer = blocks.pop() ?? "";
          for (const block of blocks) {
            const parsed = parseSseEvent(block);
            if (!parsed) continue;
            if (parsed.event === "ready") onStatus("SUBSCRIBED");
            if (parsed.event === "change") onEvent(parsed.payload);
            if (parsed.event === "status" && terminalStatuses.has(parsed.payload?.status)) {
              onStatus(parsed.payload.status);
            }
          }
          if (done) break;
        }
        if (!disposed) onStatus("CLOSED");
      } catch (error) {
        if (!disposed && error?.name !== "AbortError") onStatus("CHANNEL_ERROR");
      }
    })();
    return () => {
      disposed = true;
      controller.abort();
    };
  };
}

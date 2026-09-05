import { apiFetch } from "../utils/apiClient.js";

const clientErrorStorageKey = "academy-os.clientErrors.v1";
const maxStoredErrors = 20;
const recentFingerprints = new Map();

function compactText(value, maxLength) {
  return redactSensitiveText(value).replaceAll(/\s+/g, " ").trim().slice(0, maxLength);
}

function redactSensitiveText(value) {
  return String(value || "")
    .replace(/\bBearer\s+[A-Za-z0-9._~+\/-]+=*/gi, "Bearer [REDACTED]")
    .replace(/\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g, "[REDACTED_JWT]")
    .replace(/\b(authorization|api[-_ ]?key|apikey|access[-_ ]?token|refresh[-_ ]?token|service[-_ ]?role|secret|password)\b(\s*[:=]\s*|\s+)([^\s,;"']+)/gi, "$1=[REDACTED]");
}

function createFingerprint(report) {
  return [report.kind, report.message, report.pathname, report.source].join("|").slice(0, 600);
}

function createErrorId(timestamp = new Date()) {
  return `WEB-${timestamp.toISOString().replaceAll(/[-:.TZ]/g, "").slice(0, 14)}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

export function createClientErrorReport(error, context = {}) {
  const timestamp = new Date();
  return {
    componentStack: compactText(context.componentStack, 2000),
    errorId: context.errorId || createErrorId(timestamp),
    kind: compactText(context.kind || error?.name || "Error", 80),
    message: compactText(error?.message || error || "알 수 없는 화면 오류", 1000),
    pathname: typeof window === "undefined" ? "" : compactText(window.location.pathname, 300),
    release: compactText(import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA || import.meta.env.VITE_GIT_COMMIT_SHA || "local", 80),
    source: compactText(context.source || "runtime", 120),
    stack: compactText(error?.stack, 5000),
    timestamp: timestamp.toISOString(),
    userAgent: typeof navigator === "undefined" ? "" : compactText(navigator.userAgent, 500)
  };
}

function storeClientErrorReport(report) {
  if (typeof window === "undefined") return;
  try {
    const previous = JSON.parse(window.localStorage.getItem(clientErrorStorageKey) || "[]");
    const next = [report, ...(Array.isArray(previous) ? previous : [])].slice(0, maxStoredErrors);
    window.localStorage.setItem(clientErrorStorageKey, JSON.stringify(next));
  } catch {
    // Error reporting must never interrupt the original screen.
  }
}

function shouldSendReport(report) {
  const now = Date.now();
  const fingerprint = createFingerprint(report);
  const previous = recentFingerprints.get(fingerprint) || 0;
  recentFingerprints.set(fingerprint, now);
  return now - previous > 30_000;
}

export function reportClientError(error, context = {}) {
  const report = createClientErrorReport(error, context);
  storeClientErrorReport(report);
  if (typeof fetch === "function" && shouldSendReport(report)) {
    apiFetch("/api/client-errors", {
      body: JSON.stringify({ report }),
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      method: "POST"
    }).catch(() => {});
  }
  return report;
}

export function installGlobalClientErrorHandlers() {
  if (typeof window === "undefined" || window.__academyOsErrorHandlersInstalled) return;
  window.__academyOsErrorHandlersInstalled = true;
  window.addEventListener("error", (event) => {
    reportClientError(event.error || event.message, { kind: "window_error", source: event.filename || "window" });
  });
  window.addEventListener("unhandledrejection", (event) => {
    reportClientError(event.reason, { kind: "unhandled_rejection", source: "promise" });
  });
}

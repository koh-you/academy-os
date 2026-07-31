function compactText(value, maxLength) {
  return redactSensitiveText(value).replaceAll(/\s+/g, " ").trim().slice(0, maxLength);
}

export function redactSensitiveText(value) {
  return String(value || "")
    .replace(/\bBearer\s+[A-Za-z0-9._~+\/-]+=*/gi, "Bearer [REDACTED]")
    .replace(/\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\b/g, "[REDACTED_JWT]")
    .replace(/\b(authorization|api[-_ ]?key|apikey|access[-_ ]?token|refresh[-_ ]?token|service[-_ ]?role|secret|password)\b(\s*[:=]\s*|\s+)([^\s,;"']+)/gi, "$1=[REDACTED]");
}

export function normalizeClientRuntimeErrorReport(value = {}) {
  return {
    componentStack: compactText(value.componentStack, 2000),
    errorId: compactText(value.errorId, 80),
    kind: compactText(value.kind || "Error", 80),
    message: compactText(value.message || "Unknown client error", 1000),
    pathname: compactText(value.pathname, 300),
    release: compactText(value.release, 80),
    source: compactText(value.source, 120),
    stack: compactText(value.stack, 5000),
    timestamp: compactText(value.timestamp, 80),
    userAgent: compactText(value.userAgent, 500)
  };
}

export function createClientRuntimeErrorRateLimiter({ limit = 12, windowMs = 60_000 } = {}) {
  const buckets = new Map();
  return function allowClientRuntimeError(key, now = Date.now()) {
    const bucketKey = compactText(key || "unknown", 200);
    const previous = buckets.get(bucketKey) || [];
    const active = previous.filter((timestamp) => now - timestamp < windowMs);
    if (active.length >= limit) {
      buckets.set(bucketKey, active);
      return false;
    }
    active.push(now);
    buckets.set(bucketKey, active);
    return true;
  };
}

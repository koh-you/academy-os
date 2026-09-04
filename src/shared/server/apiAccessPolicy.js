// 운영 API 접근 정책 — 순수 판정 함수. api/server.js 전역 게이트가 사용.
// docs/security/attendance-prototype-plan.md + docs/security/ops-api-auth-implementation-prompt.md §1b 기준.

const PUBLIC_EXACT = new Set([
  "GET /health",
  "GET /api/core/status",
  "POST /api/auth/login",
  "POST /api/client-errors"
]);

const PUBLIC_PREFIXES = [
  "/api/portal-",
  "/api/intake/tally",
  "/api/special-lecture-applications/tally",
  "/api/exam-post-files"
];

// dispatch 공유 토큰(크론)만 허용되는 라우트.
const DISPATCH_TOKEN_ROUTES = new Set([
  "POST /api/notification-jobs/dispatch-due",
  "POST /api/notifications/slack-today-schedule/reserve"
]);

// 협력 교사(assistant)가 호출 가능한 라우트 — 출결 프로토타입 기능 표면.
const ASSISTANT_ALLOW_EXACT = new Set([
  "GET /api/lessons",
  "GET /api/lessons/closure-preflight",
  "GET /api/lesson-records",
  "GET /api/students",
  "GET /api/classes",
  "GET /api/school-events",
  "GET /api/app-state",
  "GET /api/integrations/status",
  "GET /api/notification-jobs",
  "POST /api/attendance/check",
  "POST /api/attendance/preview",
  "POST /api/lesson-records",
  "POST /api/lesson-records/notification-status",
  "POST /api/notifications/attendance-alimtalk"
]);

// ops cas-write 스코프가 호출 가능한 POST (그 외 POST/DELETE 는 highrisk 만).
const OPS_CASWRITE_POST = new Set([
  "POST /api/lesson-journal/rows/save",
  "POST /api/class-rosters/save",
  "POST /api/school-calendar/derived-save",
  "POST /api/exam-prep-schedule/save",
  "POST /api/supplement-schedules/save",
  "POST /api/lesson-journal/history-action",
  "POST /api/lesson-journal/makeup-tasks/save",
  "POST /api/app-state",
  "POST /api/students",
  "POST /api/lessons",
  "POST /api/lesson-records",
  "POST /api/homeworks",
  "POST /api/makeup-tasks",
  "POST /api/school-events",
  "POST /api/exam-prep-rows",
  "POST /api/notification-jobs",
  "POST /api/attendance/check"
]);

// ops highrisk 스코프만 호출 가능(발송·유료·seed·취소).
const OPS_HIGHRISK_ONLY_PREFIXES = ["/api/notifications/", "/api/ai/", "/api/admin/"];
const OPS_HIGHRISK_ONLY_EXACT = new Set([
  "POST /api/solapi/groups/cancel",
  "POST /api/notification-jobs/reserve",
  "POST /api/notification-jobs/reserve-bulk",
  "POST /api/notification-jobs/cancel",
  "POST /api/notification-jobs/reconcile-solapi",
  "POST /api/exam-analysis-source-files/vision-check",
  "POST /api/exam-analysis-runs/detect-question-boundaries",
  "POST /api/exam-analysis-runs/fill-question-rows",
  "POST /api/exam-analysis-runs/refine-question-rows",
  "POST /api/exam-analysis-runs/generate-output-draft"
]);

function hasPrefix(pathname, prefixes) {
  return prefixes.some((prefix) => pathname === prefix || pathname.startsWith(prefix));
}

export function isPublicRoute(method, pathname) {
  return PUBLIC_EXACT.has(`${method} ${pathname}`) || hasPrefix(pathname, PUBLIC_PREFIXES);
}

export function isDispatchTokenRoute(method, pathname) {
  return DISPATCH_TOKEN_ROUTES.has(`${method} ${pathname}`);
}

export function isAssistantAllowed(method, pathname) {
  return ASSISTANT_ALLOW_EXACT.has(`${method} ${pathname}`);
}

function opsHighriskOnly(method, pathname) {
  return OPS_HIGHRISK_ONLY_EXACT.has(`${method} ${pathname}`) || hasPrefix(pathname, OPS_HIGHRISK_ONLY_PREFIXES);
}

/**
 * @param {{ method: string, pathname: string, auth: {
 *   kind: "none"|"teacher"|"ops"|"dispatch",
 *   teacherRole?: string, opsScope?: string, hasVersionField?: boolean
 * } }} input
 * @returns {{ ok: boolean, status: 200|401|403|422, code?: string }}
 */
export function evaluateApiAccess({ method, pathname, auth = { kind: "none" } }) {
  if (method === "OPTIONS") return { ok: true, status: 200 };
  if (isPublicRoute(method, pathname)) return { ok: true, status: 200 };

  if (isDispatchTokenRoute(method, pathname)) {
    if (auth.kind === "dispatch" || auth.kind === "teacher") return { ok: true, status: 200 };
    return { ok: false, status: 401, code: "auth_required" };
  }

  if (auth.kind === "none") return { ok: false, status: 401, code: "auth_required" };
  if (auth.kind === "dispatch") return { ok: false, status: 403, code: "dispatch_scope" };

  if (auth.kind === "teacher") {
    if (auth.teacherRole === "assistant") {
      return isAssistantAllowed(method, pathname)
        ? { ok: true, status: 200 }
        : { ok: false, status: 403, code: "role_forbidden" };
    }
    return { ok: true, status: 200 }; // owner
  }

  if (auth.kind === "ops") {
    if (auth.opsScope === "highrisk") return { ok: true, status: 200 };
    if (method === "GET") return { ok: true, status: 200 };
    if (auth.opsScope === "read") return { ok: false, status: 403, code: "scope_forbidden" };
    // cas-write
    if (method === "DELETE" || opsHighriskOnly(method, pathname)) {
      return { ok: false, status: 403, code: "scope_forbidden" };
    }
    if (OPS_CASWRITE_POST.has(`${method} ${pathname}`)) {
      if (auth.hasVersionField === false) return { ok: false, status: 422, code: "version_required" };
      return { ok: true, status: 200 };
    }
    return { ok: false, status: 403, code: "scope_forbidden" };
  }

  return { ok: false, status: 401, code: "auth_required" };
}

export const __policyTables = {
  PUBLIC_EXACT,
  PUBLIC_PREFIXES,
  DISPATCH_TOKEN_ROUTES,
  ASSISTANT_ALLOW_EXACT,
  OPS_CASWRITE_POST,
  OPS_HIGHRISK_ONLY_EXACT,
  OPS_HIGHRISK_ONLY_PREFIXES
};

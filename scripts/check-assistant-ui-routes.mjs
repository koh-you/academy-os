// 협력 교사가 여는 화면이 부르는 API 경로 ⊂ 협력 교사 허용 목록 — 정적 검사.
//
// 2026-09-19 감사: 허용 목록(apiAccessPolicy.ASSISTANT_ALLOW_EXACT)과 화면이 따로 놀아서
// 버튼은 보이는데 서버가 403 을 주는 경로가 쌓였다(app_state 저장·운영 알림 쓰기 …).
// 원장 계정은 모든 경로가 열려 있어 절대 못 본다. 그래서 코드에서 직접 뽑아 맞춘다.
//
// 대상 파일: 협력 교사 메뉴(수업일지·학생관리·반관리·시험관리·학사일정·설정)와 그 안의
// 모달이 사는 도메인. 원장 전용 화면(정산·블로그·시험분석·특강·문제은행·포털·자료함)은 뺀다.
// 의도적으로 잠근 경로(AI·Slack)는 KNOWN_LOCKED 에 적고, 화면이 잠금 표시를 하는지 별도로 본다.
import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { evaluateApiAccess } from "../src/shared/server/apiAccessPolicy.js";

const root = fileURLToPath(new URL("../", import.meta.url));

const ASSISTANT_DOMAINS = [
  "src/app/",
  "src/domains/lessons/",
  "src/domains/students/",
  "src/domains/teacher/PlanningToolCenters.jsx",
  "src/domains/teacher/ClassTemplateEditorModal.jsx",
  "src/domains/teacher/classTemplateApi.js",
  "src/domains/exams/ExamPrep",
  "src/domains/exams/examPrep",
  "src/domains/exams/ExamReview",
  "src/domains/exams/examReview",
  "src/domains/schoolCalendar/",
  "src/domains/settings/",
  "src/domains/notifications/",
  "src/domains/supplements/",
  "src/domains/homeworks/",
  "src/domains/tests/",
  "src/domains/attendance/",
  "src/kiosk/"
];

// 협력 교사에게 일부러 닫아둔 경로. 화면은 버튼을 숨기지 않고 잠근다(canCurrentRole*).
const KNOWN_LOCKED = [
  /^POST \/api\/ai\//,
  /^POST \/api\/notifications\/slack-/,
  /^POST \/api\/exam-analysis/,
  /^POST \/api\/admin\//
];

// 원장 전용 화면이 App.jsx 안에서 부르는 경로(협력 교사 메뉴에서 닿지 않는다).
const OWNER_ONLY_IN_SHARED_FILES = new Set([
  "GET /api/teacher-accounts", "POST /api/teacher-accounts", "POST /api/teacher-accounts/status",
  "GET /api/special-lecture-applications", "GET /api/special-lecture-enrollments", "GET /api/special-lecture-guides",
  "POST /api/special-lecture-applications", "DELETE /api/special-lecture-applications", "POST /api/special-lecture-enrollments",
  "GET /api/student-intake-applicants", "POST /api/student-intake-applicants",
  "GET /api/resource-materials", "POST /api/resource-materials", "DELETE /api/resource-materials",
  "GET /api/report-snapshots", "POST /api/report-snapshots",
  "GET /api/portal-data", "POST /api/portal-question", "POST /api/portal-exam-post",
  "POST /api/exam-post-submissions/confirm", "GET /api/exam-post-files/open",
  "GET /api/problem-bank", "POST /api/problem-bank",
  "GET /api/solapi/groups", "GET /api/solapi/messages", "POST /api/solapi/groups/cancel",
  "POST /api/notification-jobs/dispatch-due",
  "DELETE /api/exam-analysis-runs", "DELETE /api/exam-analysis-source-files",
  "POST /api/test-paper-files", "POST /api/test-paper-files/watermark", "DELETE /api/test-paper-files"
]);

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collect(path)));
    else if (/\.(js|jsx)$/.test(entry.name)) files.push(path);
  }
  return files;
}

function isAssistantFile(rel) {
  return ASSISTANT_DOMAINS.some((prefix) => rel.startsWith(prefix));
}

// 호출 모양에서 (method, path) 를 뽑는다. 템플릿 경로는 첫 `?`/`${` 앞까지만 본다.
function extractCalls(source) {
  const calls = [];
  const pathOf = (raw) => raw.split(/[?$]/)[0].replace(/\/+$/, "");
  for (const m of source.matchAll(/\b(postJson|postJsonWithTimeout)\(\s*[`"']([^`"']+)/g)) calls.push(["POST", pathOf(m[2])]);
  for (const m of source.matchAll(/\b(apiFetch|fetchWithAuth|roleAwareApiFetch)\(\s*(?:apiUrl\()?[`"']([^`"']+)[`"'][^)]*?\)/gs)) {
    const method = /method:\s*["'`](DELETE|POST|PATCH|PUT)["'`]/.exec(m[0])?.[1] ?? "GET";
    calls.push([method, pathOf(m[2])]);
  }
  // 얇은 요청 래퍼: request(path, body …) 는 POST, method 명시는 그대로.
  for (const m of source.matchAll(/\b(?:request|save\w*Request|fetchImpl)\(\s*[`"']([^`"']+)[`"']([^)]*)\)/gs)) {
    const explicit = /method:\s*["'`](DELETE|POST|PATCH|PUT)["'`]/.exec(m[2])?.[1];
    // request(path) 하나면 GET, request(path, body …) 처럼 두 번째 인자가 있으면 POST.
    const method = explicit ?? (m[2].trim().startsWith(",") ? "POST" : "GET");
    calls.push([method, pathOf(m[1])]);
  }
  return calls.filter(([, path]) => path.startsWith("/api/"));
}

const violations = new Map();
const seen = new Set();
for (const file of await collect(join(root, "src"))) {
  const rel = relative(root, file).replaceAll("\\", "/");
  if (!isAssistantFile(rel)) continue;
  const source = await readFile(file, "utf8");
  for (const [method, path] of extractCalls(source)) {
    const key = `${method} ${path}`;
    seen.add(key);
    if (OWNER_ONLY_IN_SHARED_FILES.has(key)) continue;
    if (KNOWN_LOCKED.some((pattern) => pattern.test(key))) continue;
    if (evaluateApiAccess({ method, pathname: path, auth: { kind: "teacher", teacherRole: "assistant" } }).ok) continue;
    violations.set(key, [...(violations.get(key) ?? []), rel]);
  }
}

if (violations.size > 0) {
  console.error("assistant ui routes check failed — 협력 교사 화면이 부르는데 허용 목록에 없는 경로:");
  for (const [key, files] of [...violations].sort()) console.error(`  ${key}  ← ${[...new Set(files)].join(", ")}`);
  console.error("허용하려면 apiAccessPolicy.ASSISTANT_ALLOW_EXACT 에, 일부러 잠그려면 KNOWN_LOCKED 에 넣고 화면 버튼을 잠그세요.");
  process.exit(1);
}
console.log(`assistant ui routes check passed · ${seen.size} (method,path) pairs from co-teacher screens all allowed or explicitly locked`);

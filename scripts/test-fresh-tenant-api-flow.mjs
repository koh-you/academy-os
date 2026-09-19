// "빈 tenant 의 협력 교사" 가 매일 밟는 API 흐름을 실제 서버 프로세스에 HTTP 로 던진다.
//
// 2026-09-19 감사: 협력 교사 오류의 2/3 는 허용 목록 누락·원장 상수였고, 원장 계정에선 절대
// 재현되지 않았다. 이 테스트는 role=assistant 토큰으로 반 개설 → 학생 등록 → 시험정보 저장
// → app_state 저장 → 운영 알림 → 수업 등록을 순서대로 부르고, 게이트가 401/403 을 내면 실패한다.
// 일부러 잠근 경로(AI·Slack·교사 계정 관리)는 403 + code "role_forbidden" 을 내야 한다.
//
// DB 없이(Supabase 미설정) 서버의 fallback 모드로 돈다 — 게이트·정책·응답 모양이 대상이다.
// 저장 자체의 tenant 경계는 test:class-template-store 등 단위 테스트가 본다.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createSessionRouteGuard } from "../src/shared/server/sessionRouteGuard.js";

const serverPath = fileURLToPath(new URL("../api/server.js", import.meta.url));
const port = 8798;
const secret = "fresh-tenant-test-secret";
const base = `http://127.0.0.1:${port}`;

const guard = createSessionRouteGuard({
  getRequestHeader: () => "",
  getSecret: () => secret
});
const assistantToken = guard.createTeacherSessionToken({
  teacherId: "teacher_fresh",
  name: "새 선생님",
  tenantId: "tenant_fresh_00000000",
  teacherRole: "assistant"
});

const child = spawn(process.execPath, [serverPath], {
  env: {
    ...process.env,
    PORT: String(port),
    ACADEMY_API_PORT: String(port),
    NODE_ENV: "test",
    APP_SESSION_SECRET: secret,
    API_REQUIRE_AUTH: "true",
    MULTITENANT_SCOPING: "true",
    SUPABASE_URL: "",
    SUPABASE_ANON_KEY: "",
    SUPABASE_SERVICE_ROLE_KEY: ""
  },
  stdio: ["ignore", "pipe", "pipe"]
});
let serverLog = "";
child.stdout.on("data", (chunk) => { serverLog += chunk; });
child.stderr.on("data", (chunk) => { serverLog += chunk; });

async function waitForHealth() {
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${base}/health`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error(`server did not answer /health\n${serverLog.slice(-2000)}`);
}

async function call(method, path, body) {
  const response = await fetch(`${base}${path}`, {
    method,
    headers: { Authorization: `Bearer ${assistantToken}`, "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  let json = null;
  try { json = await response.json(); } catch {}
  return { status: response.status, json };
}

function expectOpen(label, result) {
  assert.ok(
    result.status !== 401 && result.status !== 403,
    `${label}: 협력 교사에게 닫혀 있다 (${result.status} ${JSON.stringify(result.json)?.slice(0, 200)})`
  );
}

try {
  await waitForHealth();

  // 부트스트랩이 읽는 것들 — 빈 tenant 라도 전부 열려 있어야 화면이 뜬다.
  for (const path of ["/api/classes", "/api/students", "/api/lessons", "/api/lesson-records", "/api/homeworks", "/api/makeup-tasks", "/api/academy-reminders", "/api/exam-prep-rows", "/api/school-events", "/api/test-sessions", "/api/test-attempts", "/api/app-state?includeRows=true", "/api/notification-jobs", "/api/integrations/status"]) {
    expectOpen(`GET ${path}`, await call("GET", path));
  }

  // 1) 반 개설 — 빈 tenant 의 첫 행동.
  const classResult = await call("POST", "/api/classes", { classTemplate: { name: "화목 5-7반", scheduleRules: [{ days: ["tue", "thu"], startTime: "17:00", endTime: "19:00" }] } });
  expectOpen("POST /api/classes", classResult);
  assert.equal(classResult.json?.ok, true);

  // 2) 학생 등록 — 원장 학생과 같은 이름이어도 막히면 안 된다(정책 관점).
  expectOpen("POST /api/students", await call("POST", "/api/students", { student: { studentId: "student_fresh_1", name: "김민준", loginId: "04김민준", pin: "1234", grade: "고1", schoolName: "창북고", status: "active" } }));

  // 3) 시험정보 자동 생성 저장 + 4) app_state 첫 저장(예전엔 403 → isAppStateReady 영영 false).
  expectOpen("POST /api/exam-prep-rows/bulk", await call("POST", "/api/exam-prep-rows/bulk", { examPrepRows: [{ examPrepId: "exam_prep_2026-2-mid_창북고_고1_공통수학1", examCycle: "2026-2-mid", schoolName: "창북고", grade: "고1", subject: "공통수학1" }] }));
  expectOpen("POST /api/app-state", await call("POST", "/api/app-state", { states: { tenantSettings: { examPrepAutoRowClassTemplateIds: [], defaultClassTemplateId: "" } } }));

  // 5) 운영 알림 쓰기(화면에 버튼이 있다) + 6) 수업 등록 + 7) 출결.
  expectOpen("POST /api/academy-reminders", await call("POST", "/api/academy-reminders", { reminder: { reminderId: "reminder_fresh", title: "상담", type: "custom", date: "2026-09-19" } }));
  expectOpen("POST /api/lessons", await call("POST", "/api/lessons", { lesson: { lessonId: "lesson_fresh_1", classTemplateId: classResult.json?.classTemplate?.classTemplateId ?? "", className: "화목 5-7반", date: "2026-09-22", startTime: "17:00", endTime: "19:00", studentIds: ["student_fresh_1"], lessonType: "class" } }));
  expectOpen("POST /api/attendance/preview", await call("POST", "/api/attendance/preview", { phoneTail: "0000" }));

  // 일부러 닫힌 것: 403 + code. code 가 없으면 화면이 영문 "role_forbidden" 을 그대로 보여준다.
  for (const [method, path] of [["POST", "/api/ai/comment-polish"], ["POST", "/api/notifications/slack-daily-schedule"], ["POST", "/api/teacher-accounts"], ["GET", "/api/teacher-accounts"]]) {
    const locked = await call(method, path, method === "GET" ? undefined : {});
    assert.equal(locked.status, 403, `${method} ${path} 는 협력 교사에게 403 이어야 한다 (got ${locked.status})`);
    assert.equal(locked.json?.code, "role_forbidden", `${method} ${path} 403 응답에 code 가 있어야 한다`);
  }

  // 토큰 없이는 401.
  const anonymous = await fetch(`${base}/api/students`);
  assert.equal(anonymous.status, 401);

  console.log("fresh tenant api flow: co-teacher bootstrap reads, class/student/exam-prep/app_state/reminder/lesson/attendance writes open; AI/Slack/teacher-accounts locked with code");
} finally {
  child.kill();
}

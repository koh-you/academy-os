const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "src", "app", "App.jsx");
const cssPath = path.join(root, "src", "app", "App.css");
const notificationRoutePath = path.join(root, "api", "routes", "notifications.js");
const schemaPath = path.join(root, "supabase", "schema.sql");
const envExamplePath = path.join(root, ".env.example");

const app = fs.readFileSync(appPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const notificationRoute = fs.readFileSync(notificationRoutePath, "utf8");
const schema = fs.existsSync(schemaPath) ? fs.readFileSync(schemaPath, "utf8") : "";
const envExample = fs.readFileSync(envExamplePath, "utf8");

const checks = [];

function check(name, condition, detail = "") {
  checks.push({ name, ok: Boolean(condition), detail });
}

function hasAll(source, patterns) {
  return patterns.every((pattern) => source.includes(pattern));
}

check("01 로그인 기본값 노출 제거", !app.includes('setLoginId(nextRole)') && app.includes('const [loginId, setLoginId] = useState("");'));
check("02 로그인 실패 횟수 제한", hasAll(app, ["loginAttempts", "lockedUntil", "5분 동안 로그인이 제한"]));
check("03 로그인 잠금 UI", hasAll(app, ["loginSecurityNotice", "보호 잠금"]));
check("04 출결 전용 라우트", hasAll(app, ["isAttendanceOnlyRoute", 'window.location.pathname === "/attendance"', "AttendanceKiosk"]));
check("05 태블릿 출결 URL 설정", hasAll(app, ["attendanceUrl", "새 창 열기", "지각 유예시간"]));
check("06 출결 지각 유예시간", hasAll(app, ["lateGraceMinutes", "calculateLateMinutes"]));
check("07 출결 알림톡 API 연결", hasAll(app, ["/api/notifications/attendance-alimtalk", "handleSendAttendanceAlimtalk"]));
check("08 학부모 알림톡 API 연결", hasAll(app, ["/api/notifications/comment-alimtalk", "parentPhone"]));
check("09 학생 알림톡 분기", hasAll(app, ['target: testType === "student"', "studentPhone"]));
check("10 알림톡 드라이런 보호", hasAll(app, ["forceDryRun", "테스트 보호", "실제 번호 잠금"]));
check("11 알림톡 미리보기", hasAll(app, ["buildNotificationTemplatePreview", "templatePreviewText"]));
check("12 알림톡 테스트 결과 상세", hasAll(app, ["templateResultCard", "templateEnvName", "variables"]));
check("13 과제상태 발송문구 변환", hasAll(app, ["assignmentStatusParentMessages", "getAssignmentStatusParentMessage"]));
check("14 강의 교재 변수", hasAll(app, ["lessonMaterial", "강의 교재"]));
check("15 강의 내용 변수", hasAll(app, ["lessonContent", "강의 내용"]));
check("16 미완료 과제 누적 문구", notificationRoute.includes("미완료 과제") && notificationRoute.includes("normalizeList"));
check("17 재시험/보충 중요 일정 문구", hasAll(notificationRoute, ["재시험 일정", "보충 일정"]));
check("18 Solapi 템플릿 환경변수", hasAll(envExample, ["SOLAPI_ATTENDANCE_TEMPLATE_ID", "SOLAPI_DAILY_REPORT_TEMPLATE_ID", "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"]));
check("19 Supabase 수업기록 컬럼", hasAll(schema, ["lesson_material", "lesson_content", "assignment_status"]));
check("20 알림관리 화면", hasAll(app, ["NotificationCenter", "예약 발송 점검", "누락 점검"]));

const failed = checks.filter((item) => !item.ok);
console.log(JSON.stringify({ ok: failed.length === 0, total: checks.length, failed, checks }, null, 2));

if (failed.length) {
  process.exitCode = 1;
}

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

check("01 login form does not expose default credentials", !app.includes('setLoginId(nextRole)') && app.includes('const [loginId, setLoginId] = useState("");'));
check("02 login form does not include temporary lockout", !hasAll(app, ["loginAttempts", "lockedUntil"]) && !css.includes("loginSecurityNotice"));
check("03 role switching clears credentials", hasAll(app, ["function selectRole(nextRole)", 'setLoginId("");', 'setPassword("");', 'setError("");']));
check("04 attendance-only route exists", hasAll(app, ["isAttendanceOnlyRoute", 'window.location.pathname === "/attendance"', "AttendanceKiosk"]));
check("05 tablet attendance URL setting exists", hasAll(app, ["attendanceUrl", "lateGraceMinutes"]));
check("06 attendance late grace logic exists", hasAll(app, ["lateGraceMinutes", "calculateLateMinutes"]));
check("07 attendance alimtalk API is connected", hasAll(app, ["/api/notifications/attendance-alimtalk", "handleSendAttendanceAlimtalk"]));
check("08 parent alimtalk API is connected", hasAll(app, ["/api/notifications/comment-alimtalk", "parentPhone"]));
check("09 student alimtalk branch exists", hasAll(app, ['target: testType === "student"', "studentPhone"]));
check("10 alimtalk dry-run safety exists", hasAll(app, ["forceDryRun", "dryRun", "allowRealRecipients"]));
check("11 alimtalk preview builder exists", hasAll(app, ["buildNotificationTemplatePreview", "templatePreviewText"]));
check("12 alimtalk test result details exist", hasAll(app, ["templateResultCard", "templateEnvName", "variables"]));
check("13 assignment status maps to parent-safe wording", hasAll(app, ["assignmentStatusParentMessages", "getAssignmentStatusParentMessage"]));
check("14 lesson material field exists", hasAll(app, ["lessonMaterial", "강의 교재"]));
check("15 lesson content field exists", hasAll(app, ["lessonContent", "강의 내용"]));
check("16 incomplete assignment list is normalized", notificationRoute.includes("normalizeList") && notificationRoute.includes("incomplete"));
check("17 retest and supplement schedule variables exist", hasAll(notificationRoute, ["retestSchedule", "supplementSchedule"]));
check("18 Solapi template env vars exist", hasAll(envExample, ["SOLAPI_ATTENDANCE_TEMPLATE_ID", "SOLAPI_DAILY_REPORT_TEMPLATE_ID", "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"]));
check("19 Supabase lesson record columns exist", hasAll(schema, ["lesson_material", "lesson_content", "assignment_status"]));
check("20 notification management screen exists", hasAll(app, ["NotificationCenter", "templatePreviewText", "handleDispatchDue", "handleReadinessCheck"]));

const failed = checks.filter((item) => !item.ok);
console.log(JSON.stringify({ ok: failed.length === 0, total: checks.length, failed, checks }, null, 2));

if (failed.length) {
  process.exitCode = 1;
}

import http from "node:http";
import pdfParse from "pdf-parse/lib/pdf-parse.js";
import {
  deleteLesson,
  deleteLessonsBefore,
  deleteDuplicateExamPrepRows,
  deleteExamPrepRow,
  deleteAllMakeupTasks,
  deleteMakeupTask,
  deleteNotificationJob,
  deleteResourceMaterial,
  deleteSchoolEvent,
  getCoreDataStatus,
  listAppState,
  listClassTemplates,
  listExamPrepRows,
  listHomeworks,
  listLessons,
  listLessonStudentRecords,
  listMakeupTasks,
  listNotificationJobs,
  listResourceMaterials,
  listSchoolEvents,
  listStudentIntakeApplicants,
  listStudents,
  claimNotificationJob,
  seedCoreData,
  upsertAppState,
  upsertHomework,
  upsertHomeworks,
  upsertExamPrepRow,
  upsertExamPrepRows,
  upsertLesson,
  upsertLessons,
  upsertNotificationJob,
  upsertMakeupTask,
  upsertMakeupTasks,
  upsertResourceMaterial,
  upsertSchoolEvent,
  upsertSchoolEvents,
  upsertStudentIntakeApplicant,
  upsertStudent,
  upsertStudents,
  upsertLessonStudentRecord
} from "./routes/coreData.js";
import crypto from "node:crypto";
import { loadEnvFile } from "./lib/loadEnv.js";
import { isSupabaseConfigured, listRows, upsertRows } from "./lib/supabaseRest.js";
import { getAiStatus, polishLessonComment, runExamAnalysis } from "./routes/examAnalysis.js";
import {
  getNotificationStatus,
  sendAttendanceAlimtalk,
  sendDailyReportAlimtalk,
  sendLessonCommentAlimtalk,
  sendSlackDailyScheduleSummary,
  sendStudentScheduleReminderAlimtalk
} from "./routes/notifications.js";

loadEnvFile();

const port = Number(process.env.PORT ?? process.env.ACADEMY_API_PORT ?? 8787);
const host = process.env.ACADEMY_API_HOST ?? (process.env.RENDER ? "0.0.0.0" : "127.0.0.1");
const allowedOrigins = (process.env.CORS_ALLOWED_ORIGINS ?? "*")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const dispatchableNotificationStatuses = new Set(["queued", "pending_send"]);
const readinessCheckStatuses = new Set(["queued", "pending_send", "scheduled"]);
const attendanceAlimtalkDedupeWindowMs = 2 * 60 * 1000;
const recentAttendanceAlimtalkSends = new Map();
const teacherAccountTable = "teacher_accounts";
const defaultTeacherAccount = {
  teacherId: "instructor_owner_001",
  loginId: process.env.TEACHER_LOGIN_ID ?? "teacher",
  name: "고태영T",
  password: process.env.TEACHER_PASSWORD ?? "1234"
};

function normalizeGradeLabel(grade = "") {
  const value = String(grade || "").trim();
  if (value.includes("1")) return value.includes("중") ? "중1" : "고1";
  if (value.includes("2")) return value.includes("중") ? "중2" : "고2";
  if (value.includes("3")) return value.includes("중") ? "중3" : "고3";
  return value;
}

function normalizeSchoolName(value = "") {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[·ㆍ.,_/\\-]/g, "")
    .replace(/여자고등학교/g, "여고")
    .replace(/여자고/g, "여고")
    .replace(/남자고등학교/g, "남고")
    .replace(/남자고/g, "남고")
    .replace(/고등학교/g, "고")
    .replace(/중학교/g, "중");
}

function getRequestHeader(request, name) {
  return request.headers[name.toLowerCase()] ?? request.headers[name] ?? "";
}

function timingSafeEqualText(left = "", right = "") {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function compactPhoneNumber(value = "") {
  return String(value || "").replaceAll(/[^0-9]/g, "");
}

function getAttendanceAlimtalkDedupeKey(payload = {}) {
  return [
    compactPhoneNumber(payload.parentPhone),
    payload.studentId || payload.studentName || "",
    payload.lessonId || payload.lessonName || "",
    payload.attendanceStatus || ""
  ].join("|");
}

function cleanupRecentAttendanceAlimtalkSends(nowTime) {
  for (const [key, entry] of recentAttendanceAlimtalkSends.entries()) {
    if (nowTime - entry.createdAt > attendanceAlimtalkDedupeWindowMs) {
      recentAttendanceAlimtalkSends.delete(key);
    }
  }
}

async function sendAttendanceAlimtalkOnce(payload) {
  const nowTime = Date.now();
  cleanupRecentAttendanceAlimtalkSends(nowTime);
  const dedupeKey = getAttendanceAlimtalkDedupeKey(payload);
  const existing = recentAttendanceAlimtalkSends.get(dedupeKey);
  if (existing && nowTime - existing.createdAt <= attendanceAlimtalkDedupeWindowMs) {
    await existing.promise.catch(() => null);
    return {
      duplicateSuppressed: true,
      dedupeWindowSeconds: Math.round(attendanceAlimtalkDedupeWindowMs / 1000)
    };
  }

  const sendPromise = sendAttendanceAlimtalk(payload);
  recentAttendanceAlimtalkSends.set(dedupeKey, { createdAt: nowTime, promise: sendPromise });
  try {
    return await sendPromise;
  } catch (error) {
    recentAttendanceAlimtalkSends.delete(dedupeKey);
    throw error;
  }
}

function getDispatchTokenFromRequest(request, payload = {}) {
  const authorization = String(getRequestHeader(request, "authorization") || "");
  const bearerToken = authorization.match(/^Bearer\s+(.+)$/i)?.[1] ?? "";
  return String(
    getRequestHeader(request, "x-dispatch-token") ||
    bearerToken ||
    payload.dispatchToken ||
    ""
  ).trim();
}

function getDispatchAuthState(request, payload = {}) {
  const expectedToken = String(process.env.NOTIFICATION_DISPATCH_TOKEN || "").trim();
  if (!expectedToken) return { configured: false, ok: false };
  const requestToken = getDispatchTokenFromRequest(request, payload);
  return {
    configured: true,
    ok: Boolean(requestToken) && timingSafeEqualText(requestToken, expectedToken)
  };
}

function isStaleDispatchClaim(job, nowTime) {
  if (job.provider !== "academy-os-dispatching") return false;
  const updatedTime = new Date(job.updatedAt || job.createdAt || 0).getTime();
  return Number.isFinite(updatedTime) && nowTime - updatedTime > 10 * 60 * 1000;
}

function schoolNamesMatch(firstSchool = "", secondSchool = "", { allowBlank = true } = {}) {
  if (!firstSchool || !secondSchool) return allowBlank;
  const firstText = normalizeSchoolName(firstSchool);
  const secondText = normalizeSchoolName(secondSchool);
  if (!firstText || !secondText) return allowBlank;
  return firstText === secondText || firstText.includes(secondText) || secondText.includes(firstText);
}

function compactText(value = "") {
  return String(value ?? "").trim();
}

function normalizePhone(value = "") {
  return compactText(value).replace(/[^\d+]/g, "");
}

function getTallyFieldText(field) {
  if (!field) return "";
  if (Array.isArray(field.value)) {
    const optionById = new Map((field.options ?? []).map((option) => [option.id, option.text]));
    return field.value.map((value) => optionById.get(value) ?? value).filter(Boolean).join(", ");
  }
  if (field.value && typeof field.value === "object") return JSON.stringify(field.value);
  return compactText(field.value);
}

function getTallyFieldLabel(field = {}) {
  return compactText(field.label ?? field.title ?? field.question ?? field.key ?? field.name);
}

function findTallyField(fields, patterns) {
  return fields.find((field) => patterns.some((pattern) => pattern.test(getTallyFieldLabel(field))));
}

function normalizeTallyApplicantPayload(payload = {}) {
  const data = payload.data ?? payload;
  const fields = Array.isArray(data.fields) ? data.fields : [];
  const getValue = (patterns) => getTallyFieldText(findTallyField(fields, patterns));
  const enrollmentStatus = getValue([/^재원생\s*여부$/i, /재원생/i, /반이동/i]);
  const name = getValue([/학생.*이름/i, /^이름$/i, /성명/i, /student.*name/i, /name/i]);
  const birthYear = getValue([/출생/i, /생년/i, /birth/i, /태어난/i]).replace(/[^0-9]/g, "").slice(0, 4);
  const grade = normalizeGradeLabel(getValue([/^학생\s*학년$/i, /학년/i, /grade/i]));
  const schoolName = getValue([/^학교\s*이름$/i, /학교/i, /school/i]);
  const studentPhone = normalizePhone(getValue([/^학생\s*전화번호$/i, /학생.*전화/i, /학생.*휴대/i, /student.*phone/i]));
  const parentPhone = normalizePhone(getValue([/^학부모님\s*전화번호$/i, /학부모.*전화/i, /보호자.*전화/i, /부모.*전화/i, /parent.*phone/i, /guardian.*phone/i]));
  const currentLearningProcess = getValue([/^현재\s*학습하고\s*있는\s*과정/i, /선행\s*정도/i, /학습.*과정/i]);
  const previousSemesterScore = getValue([/^직전학기\s*내신\s*성적/i, /내신\s*성적/i, /등급.*점수/i]);
  const specialNote = getValue([/^특이사항/i, /특이사항/i, /자세하게/i]);
  const submissionId = compactText(data.submissionId ?? data.responseId ?? payload.eventId);
  return {
    applicantId: submissionId ? `tally_${submissionId}` : `tally_${Date.now()}`,
    source: "tally",
    sourceSubmissionId: submissionId,
    formId: compactText(data.formId),
    formName: compactText(data.formName),
    status: "received",
    name,
    birthYear,
    grade: grade || "",
    schoolName,
    studentPhone,
    parentPhone,
    desiredClass: "",
    enrollmentStatus,
    currentLearningProcess,
    previousSemesterScore,
    specialNote,
    memo: "",
    rawPayload: payload,
    createdAt: compactText(data.createdAt ?? payload.createdAt) || new Date().toISOString()
  };
}

function verifyTallyWebhookSignature(payload, signature) {
  const secret = process.env.TALLY_WEBHOOK_SIGNING_SECRET;
  if (!secret) return true;
  if (!signature) return false;
  const calculatedSignature = crypto.createHmac("sha256", secret).update(JSON.stringify(payload)).digest("base64");
  const received = Buffer.from(signature);
  const expected = Buffer.from(calculatedSignature);
  return received.length === expected.length && crypto.timingSafeEqual(received, expected);
}

function gradesMatch(firstGrade = "", secondGrade = "") {
  if (!firstGrade || !secondGrade) return true;
  return normalizeGradeLabel(firstGrade) === normalizeGradeLabel(secondGrade);
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.pbkdf2Sync(String(password), salt, 120_000, 32, "sha256").toString("hex");
  return `pbkdf2_sha256$120000$${salt}$${hash}`;
}

function verifyPassword(password, passwordHash) {
  if (!passwordHash?.startsWith("pbkdf2_sha256$")) return false;
  const [, iterationsText, salt, expectedHash] = passwordHash.split("$");
  const iterations = Number(iterationsText);
  if (!iterations || !salt || !expectedHash) return false;
  const actualHash = crypto.pbkdf2Sync(String(password), salt, iterations, 32, "sha256").toString("hex");
  return crypto.timingSafeEqual(Buffer.from(actualHash, "hex"), Buffer.from(expectedHash, "hex"));
}

function toTeacherAccount(row) {
  return {
    teacherId: row.teacher_id,
    loginId: row.login_id,
    name: row.name ?? defaultTeacherAccount.name
  };
}

async function getTeacherAccountRow(loginId = "") {
  if (!isSupabaseConfigured({ requireServiceRole: true })) return null;
  const rows = await listRows(
    teacherAccountTable,
    `select=*&login_id=eq.${encodeURIComponent(loginId)}&is_active=eq.true&limit=1`,
    { requireServiceRole: true }
  );
  return rows[0] ?? null;
}

async function hasAnyTeacherAccount() {
  if (!isSupabaseConfigured({ requireServiceRole: true })) return false;
  const rows = await listRows(teacherAccountTable, "select=teacher_id&is_active=eq.true&limit=1", {
    requireServiceRole: true
  });
  return rows.length > 0;
}

async function saveTeacherAccount({ teacherId, loginId, name, password }) {
  const row = {
    teacher_id: teacherId || defaultTeacherAccount.teacherId,
    login_id: loginId,
    name: name || defaultTeacherAccount.name,
    password_hash: hashPassword(password),
    is_active: true,
    updated_at: new Date().toISOString()
  };
  const [saved] = await upsertRows(teacherAccountTable, [row]);
  return saved;
}

async function authenticateTeacher(loginId, password) {
  const row = await getTeacherAccountRow(loginId);
  if (row) {
    return verifyPassword(password, row.password_hash) ? toTeacherAccount(row) : null;
  }
  const needsBootstrap = !(await hasAnyTeacherAccount());
  if (needsBootstrap && loginId === defaultTeacherAccount.loginId && password === defaultTeacherAccount.password) {
    return {
      teacherId: defaultTeacherAccount.teacherId,
      loginId: defaultTeacherAccount.loginId,
      name: defaultTeacherAccount.name
    };
  }
  return null;
}

function createParentLoginId(student) {
  return `parent-${student.loginId}`;
}

function getSessionSecret() {
  return process.env.APP_SESSION_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "academy-os-dev-session-secret";
}

function encodeBase64Url(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

function signSessionPayload(payload) {
  return crypto.createHmac("sha256", getSessionSecret()).update(payload).digest("base64url");
}

function createPortalSessionToken(account) {
  const payload = encodeBase64Url({
    role: account.role,
    studentId: account.studentId,
    name: account.name,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 14
  });
  return `${payload}.${signSessionPayload(payload)}`;
}

function verifyPortalSessionToken(token = "") {
  const [payload, signature] = String(token).split(".");
  if (!payload || !signature || signSessionPayload(payload) !== signature) return null;
  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (!session.studentId || !["student", "parent"].includes(session.role) || Number(session.exp) < Date.now()) return null;
    return session;
  } catch {
    return null;
  }
}

async function authenticateStudentOrParent(role, loginId, password) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) return null;
  const rows = await listRows(
    "students",
    `select=student_id,name,login_id,pin,status&status=eq.active&limit=1000`,
    { requireServiceRole: true }
  );
  const student = rows.find((row) => {
    if (role === "student") return row.login_id === loginId && row.pin === password;
    if (role === "parent") return createParentLoginId({ loginId: row.login_id }) === loginId && row.pin === password;
    return false;
  });
  if (!student) return null;
  return {
    role,
    studentId: student.student_id,
    loginId: student.login_id,
    name: student.name
  };
}

async function getPortalData(session) {
  const [
    studentsResult,
    lessonsResult,
    recordsResult,
    homeworksResult,
    makeupTasksResult,
    examPrepRowsResult,
    schoolEventsResult,
    appStateResult,
    materialsResult
  ] = await Promise.all([
    listStudents(),
    listLessons(),
    listLessonStudentRecords(),
    listHomeworks(),
    listMakeupTasks(),
    listExamPrepRows(),
    listSchoolEvents(),
    listAppState(),
    listResourceMaterials()
  ]);
  const student = (studentsResult.students ?? []).find((item) => item.studentId === session.studentId);
  if (!student) return null;
  const lessons = (lessonsResult.lessons ?? []).filter((lesson) => lesson.studentIds?.includes(session.studentId));
  const lessonIds = new Set(lessons.map((lesson) => lesson.lessonId));
  const states = appStateResult.states ?? {};
  return {
    source: studentsResult.source,
    students: [student],
    lessons,
    records: (recordsResult.records ?? []).filter((record) => record.studentId === session.studentId && lessonIds.has(record.lessonId)),
    homeworks: (homeworksResult.homeworks ?? []).filter((homework) => homework.studentId === session.studentId),
    makeupTasks: (makeupTasksResult.makeupTasks ?? []).filter((task) => task.studentId === session.studentId),
    examPrepRows: (examPrepRowsResult.examPrepRows ?? []).filter((row) =>
      schoolNamesMatch(row.schoolName, student.schoolName) && gradesMatch(row.grade, student.grade)
    ),
    schoolEvents: (schoolEventsResult.schoolEvents ?? []).filter((event) =>
      schoolNamesMatch(event.schoolName, student.schoolName)
    ),
    materials: materialsResult.materials ?? [],
    reportSnapshots: (states.reportSnapshots ?? []).filter((item) => item.studentId === session.studentId),
    scoreRecords: (states.scoreRecords ?? []).filter((item) => item.studentId === session.studentId),
    examPostSubmissions: (states.examPostSubmissions ?? []).filter((item) => item.studentId === session.studentId),
    examPostTargetStudentIds: states.examPostTargetStudentIds ?? {},
    studentQuestions: (states.studentQuestions ?? []).filter((item) => item.studentId === session.studentId)
  };
}

async function upsertPortalState(session, scopedStates = {}) {
  const appState = await listAppState();
  const currentStates = appState.states ?? {};
  const nextStates = {};
  for (const key of ["studentQuestions", "examPostSubmissions"]) {
    if (!Array.isArray(scopedStates[key])) continue;
    const currentRows = Array.isArray(currentStates[key]) ? currentStates[key] : [];
    const scopedRows = scopedStates[key].filter((item) => item.studentId === session.studentId);
    nextStates[key] = [
      ...scopedRows,
      ...currentRows.filter((item) => item.studentId !== session.studentId)
    ];
  }
  if (Object.keys(nextStates).length === 0) return { states: {} };
  return upsertAppState(nextStates);
}

function readJsonBody(request, options = {}) {
  const limitBytes = options.limitBytes ?? 2_000_000;
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body) > limitBytes) {
        reject(new Error("요청 본문이 너무 큽니다."));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("JSON 형식이 올바르지 않습니다."));
      }
    });
    request.on("error", reject);
  });
}

function getCorsOrigin(request) {
  if (allowedOrigins.includes("*")) return "*";
  const origin = request.headers.origin;
  return origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0] ?? "*";
}

function sendJson(request, response, statusCode, data) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Origin": getCorsOrigin(request),
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(data));
}

function getProviderMessageId(result) {
  return (
    result?.response?.messageId ??
    result?.response?.message_id ??
    result?.response?.groupId ??
    result?.response?.group_id ??
    result?.response?.[0]?.messageId ??
    result?.response?.[0]?.message_id ??
    ""
  );
}

function hasText(value) {
  return Boolean(String(value ?? "").trim());
}

const lessonCommentNotificationTypes = new Set(["daily_report", "parent_comment", "student_comment"]);
const lessonBodyFields = [
  "attendanceStatus",
  "assignmentStatus",
  "assignmentStatusMessage",
  "assignmentStatusParentMessage",
  "assignmentStatusStudentMessage",
  "lessonMaterial",
  "lessonContent",
  "previousHomework",
  "nextHomework",
  "preparationNotice",
  "supplementSchedule",
  "message",
  "commentBodyOverride",
  "reportBody"
];

function getReadinessMissingFields(job) {
  const payload = job.payload ?? {};
  const missing = [];
  const recipient = job.recipient || (job.target === "student" ? payload.studentPhone : payload.parentPhone);

  if (!hasText(payload.studentName)) missing.push("학생명");
  if (!hasText(recipient)) missing.push("수신번호");

  if (job.notificationType === "attendance") {
    if (!hasText(payload.attendanceStatus)) missing.push("출결상태");
    if (!hasText(payload.lessonName)) missing.push("수업명");
    return missing;
  }

  if (job.notificationType === "student_reminder") {
    if (!hasText(payload.scheduleTitle) && !hasText(payload.lessonName)) missing.push("일정명");
    if (!hasText(payload.scheduleDate) && !hasText(job.scheduledAt)) missing.push("일정일");
    return missing;
  }

  if (job.notificationType === "notice_parent" || job.notificationType === "notice_student") {
    if (!hasText(payload.message) && !hasText(payload.commentBodyOverride)) missing.push("공지 본문");
    return missing;
  }

  if (!hasText(payload.lessonDate) && !hasText(job.scheduledAt)) missing.push("수업일");

  if (lessonCommentNotificationTypes.has(job.notificationType)) {
    if (!lessonBodyFields.some((field) => hasText(payload[field]))) missing.push("본문");
    if (!hasText(payload.attendanceStatus)) missing.push("출결상태");
    if (!hasText(payload.lessonMaterial)) missing.push("강의 교재");
    if (!hasText(payload.lessonContent)) missing.push("강의 내용");
    if (!hasText(payload.assignmentStatus) && !hasText(payload.assignmentStatusMessage)) missing.push("과제 상태");
  }

  return missing;
}

function buildReadinessSlackText({ issues, windowMinutes }) {
  const lines = [
    `[으뜸수학 고태영T] 알림톡 발송 전 누락 점검`,
    `대상: 앞으로 ${windowMinutes}분 이내 발송 예정`,
    "",
    issues.length ? "확인이 필요한 항목:" : "확인이 필요한 항목이 없습니다."
  ];

  for (const issue of issues) {
    lines.push(`- ${issue.studentName} · ${issue.notificationType} · ${issue.scheduledAt || "즉시/미지정"} · 누락: ${issue.missing.join(", ")}`);
  }

  return lines.join("\n");
}

async function checkNotificationReadiness({ notifySlack = false, now = new Date().toISOString(), windowMinutes = 15 } = {}) {
  const listed = await listNotificationJobs();
  const nowTime = new Date(now).getTime();
  const windowTime = nowTime + Math.max(1, Number(windowMinutes) || 15) * 60_000;
  if (Number.isNaN(nowTime)) throw new Error("now must be a valid date string.");

  const dueSoonJobs = (listed.notificationJobs ?? []).filter((job) => {
    if (!readinessCheckStatuses.has(job.status)) return false;
    if (!job.scheduledAt) return true;
    const scheduledTime = new Date(job.scheduledAt).getTime();
    return !Number.isNaN(scheduledTime) && scheduledTime >= nowTime && scheduledTime <= windowTime;
  });

  const issues = dueSoonJobs
    .map((job) => ({
      notificationJobId: job.notificationJobId,
      notificationType: job.notificationType,
      scheduledAt: job.scheduledAt,
      studentName: job.payload?.studentName || job.studentId || "학생",
      missing: getReadinessMissingFields(job)
    }))
    .filter((issue) => issue.missing.length > 0);

  let slack = null;
  if (notifySlack && issues.length > 0) {
    slack = await sendSlackDailyScheduleSummary({
      text: buildReadinessSlackText({ issues, windowMinutes })
    });
  }

  return {
    checkedCount: dueSoonJobs.length,
    issueCount: issues.length,
    issues,
    slack,
    source: listed.source,
    windowMinutes: Math.max(1, Number(windowMinutes) || 15)
  };
}

async function sendNotificationJob(job, { forceDryRun = false } = {}) {
  const payload = {
    ...(job.payload ?? {}),
    forceDryRun: forceDryRun || Boolean(job.payload?.forceDryRun),
    scheduledDate: ""
  };

  if (job.notificationType === "attendance") {
    return sendAttendanceAlimtalk(payload);
  }
  if (job.notificationType === "daily_report") {
    return sendDailyReportAlimtalk(payload);
  }
  if (job.notificationType === "student_reminder") {
    return sendStudentScheduleReminderAlimtalk(payload);
  }
  return sendLessonCommentAlimtalk({
    ...payload,
    target: job.notificationType === "student_comment" || job.notificationType === "notice_student" ? "student" : payload.target ?? "parent"
  });
}

function getSupabaseEnv(name) {
  return process.env[name]?.trim() ?? "";
}

function getSupabaseStorageBaseUrl() {
  const supabaseUrl = getSupabaseEnv("SUPABASE_URL").replace(/\/$/, "");
  if (!supabaseUrl) throw new Error("SUPABASE_URL이 설정되지 않았습니다.");
  return `${supabaseUrl}/storage/v1`;
}

function getSupabaseServiceRoleKey() {
  const key = getSupabaseEnv("SUPABASE_SERVICE_ROLE_KEY");
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY가 설정되지 않았습니다.");
  return key;
}

async function supabaseStorageRequest(path, options = {}) {
  const serviceRoleKey = getSupabaseServiceRoleKey();
  const response = await fetch(`${getSupabaseStorageBaseUrl()}/${path.replace(/^\//, "")}`, {
    method: options.method ?? "GET",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      ...(options.contentType ? { "Content-Type": options.contentType } : {}),
      ...(options.headers ?? {})
    },
    body: options.body
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = data?.message || data?.error || response.statusText;
    const error = new Error(message);
    error.statusCode = response.status;
    throw error;
  }
  return data;
}

async function ensureExamSubmissionBucket(bucketId) {
  try {
    await supabaseStorageRequest(`bucket/${encodeURIComponent(bucketId)}`);
  } catch (error) {
    if (error.statusCode !== 404) throw error;
    await supabaseStorageRequest("bucket", {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify({
        id: bucketId,
        name: bucketId,
        public: false,
        file_size_limit: 20 * 1024 * 1024,
        allowed_mime_types: ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf"]
      })
    });
  }
}

function sanitizeStorageSegment(value, fallback = "unknown") {
  const sanitized = String(value ?? "")
    .trim()
    .replace(/[\\/:*?"<>|#%{}^~[\]`]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return sanitized || fallback;
}

function parseDataUrl(dataUrl) {
  const match = String(dataUrl ?? "").match(/^data:([^;,]+)?(;base64)?,(.*)$/);
  if (!match) throw new Error("파일 데이터 형식이 올바르지 않습니다.");
  return {
    mimeType: match[1] || "application/octet-stream",
    buffer: Buffer.from(match[3], match[2] ? "base64" : "utf8")
  };
}

async function createSignedStorageUrl(bucketId, storagePath, expiresIn = 60 * 60 * 24 * 7) {
  const result = await supabaseStorageRequest(`object/sign/${bucketId}/${storagePath}`, {
    method: "POST",
    contentType: "application/json",
    body: JSON.stringify({ expiresIn })
  });
  if (!result?.signedURL) return "";
  if (/^https?:\/\//.test(result.signedURL)) return result.signedURL;
  return `${getSupabaseStorageBaseUrl()}${result.signedURL}`;
}

async function uploadExamPostFile(payload) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    throw new Error("Supabase Storage 업로드에는 service role 설정이 필요합니다.");
  }
  const bucketId = "exam-submissions";
  await ensureExamSubmissionBucket(bucketId);
  const { mimeType, buffer } = parseDataUrl(payload.dataUrl);
  if (buffer.length > 20 * 1024 * 1024) throw new Error("파일은 20MB 이하만 업로드할 수 있습니다.");
  const fileName = sanitizeStorageSegment(payload.fileName || `submission-${Date.now()}`);
  const extension = fileName.includes(".") ? "" : (mimeType.split("/")[1] ? `.${mimeType.split("/")[1]}` : "");
  const storagePath = [
    "exam-post",
    sanitizeStorageSegment(payload.examCycle, "cycle"),
    sanitizeStorageSegment(payload.schoolName, "school"),
    sanitizeStorageSegment(payload.grade, "grade"),
    sanitizeStorageSegment(payload.studentName, payload.studentId || "student"),
    sanitizeStorageSegment(payload.targetId, "target"),
    `${Date.now()}-${fileName}${extension}`
  ].join("/");

  await supabaseStorageRequest(`object/${bucketId}/${storagePath}`, {
    method: "PUT",
    contentType: mimeType,
    headers: { "x-upsert": "true" },
    body: buffer
  });

  return {
    bucketId,
    storagePath,
    fileName,
    fileType: mimeType,
    fileSize: buffer.length,
    signedUrl: await createSignedStorageUrl(bucketId, storagePath),
    uploadedAt: new Date().toISOString(),
    source: "student_camera"
  };
}

async function extractPdfText(buffer) {
  try {
    const result = await pdfParse(buffer);
    return String(result.text ?? "").trim();
  } catch {
    return "";
  }
}

async function uploadExamAnalysisSourceFile(payload) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    throw new Error("Supabase Storage 업로드에는 service role 설정이 필요합니다.");
  }
  const bucketId = "exam-analysis-sources";
  await ensureExamSubmissionBucket(bucketId);
  const { mimeType, buffer } = parseDataUrl(payload.dataUrl);
  if (buffer.length > 20 * 1024 * 1024) throw new Error("파일은 20MB 이하만 업로드할 수 있습니다.");
  const fileName = sanitizeStorageSegment(payload.fileName || `exam-source-${Date.now()}`);
  const extension = fileName.includes(".") ? "" : (mimeType === "application/pdf" ? ".pdf" : "");
  const storagePath = [
    "exam-analysis",
    sanitizeStorageSegment(payload.schoolName, "school"),
    sanitizeStorageSegment(payload.grade, "grade"),
    sanitizeStorageSegment(payload.examName, "exam"),
    sanitizeStorageSegment(payload.analysisId, "analysis"),
    `${Date.now()}-${fileName}${extension}`
  ].join("/");

  await supabaseStorageRequest(`object/${bucketId}/${storagePath}`, {
    method: "PUT",
    contentType: mimeType,
    headers: { "x-upsert": "true" },
    body: buffer
  });

  const extractedText = mimeType === "application/pdf" || /\.pdf$/i.test(fileName)
    ? await extractPdfText(buffer)
    : "";

  return {
    bucketId,
    storagePath,
    fileName,
    fileType: mimeType,
    fileSize: buffer.length,
    signedUrl: await createSignedStorageUrl(bucketId, storagePath),
    extractedText,
    extractionStatus: extractedText ? "텍스트 추출 완료" : "텍스트 추출 없음",
    uploadedAt: new Date().toISOString(),
    source: "exam_analysis_source"
  };
}

async function dispatchDueNotificationJobs({
  allowManualStatuses = false,
  forceDryRun = false,
  limit = 20,
  now = new Date().toISOString()
} = {}) {
  const listed = await listNotificationJobs();
  const nowTime = new Date(now).getTime();
  if (Number.isNaN(nowTime)) throw new Error("now must be a valid date string.");

  const jobs = (listed.notificationJobs ?? [])
    .filter((job) => {
      if (allowManualStatuses && dispatchableNotificationStatuses.has(job.status)) return true;
      if (job.status !== "scheduled" || job.payload?.osScheduled !== true) return false;
      return job.provider !== "academy-os-dispatching" || isStaleDispatchClaim(job, nowTime);
    })
    .filter((job) => {
      if (!job.scheduledAt) return true;
      const scheduledTime = new Date(job.scheduledAt).getTime();
      return !Number.isNaN(scheduledTime) && scheduledTime <= nowTime;
    })
    .slice(0, Math.max(1, Number(limit) || 20));

  const processed = [];
  for (const job of jobs) {
    const shouldClaim = job.status === "scheduled" && job.payload?.osScheduled === true;
    const claimId = `dispatch_${Date.now()}_${crypto.randomBytes(6).toString("hex")}`;
    const claim = shouldClaim ? await claimNotificationJob(job, claimId) : { notificationJob: job };
    const claimedJob = claim.notificationJob;
    if (!claimedJob) {
      processed.push({ notificationJobId: job.notificationJobId, status: "skipped_claimed" });
      continue;
    }

    try {
      const result = await sendNotificationJob(claimedJob, { forceDryRun });
      const status = result?.dryRun ? "dry_run" : "sent";
      const updatedJob = {
        ...claimedJob,
        status,
        result,
        provider: "solapi",
        providerMessageId: getProviderMessageId(result),
        error: ""
      };
      await upsertNotificationJob(updatedJob);
      processed.push({ notificationJobId: claimedJob.notificationJobId, status, result });
    } catch (error) {
      const failedJob = {
        ...claimedJob,
        status: "failed",
        error: error.message
      };
      await upsertNotificationJob(failedJob);
      processed.push({ error: error.message, notificationJobId: claimedJob.notificationJobId, status: "failed" });
    }
  }

  return {
    dryRun: forceDryRun || getNotificationStatus().dryRun,
    processed,
    processedCount: processed.length,
    source: listed.source
  };
}

const internalDispatchEnabled = process.env.NOTIFICATION_INTERNAL_DISPATCH_LOOP !== "false";
let internalDispatchRunning = false;

async function runInternalNotificationDispatch(reason = "interval") {
  if (!internalDispatchEnabled || internalDispatchRunning) return;
  internalDispatchRunning = true;
  try {
    const result = await dispatchDueNotificationJobs({
      forceDryRun: false,
      limit: Number(process.env.NOTIFICATION_INTERNAL_DISPATCH_LIMIT || process.env.NOTIFICATION_DISPATCH_LIMIT || 50),
      now: new Date().toISOString()
    });
    if (result.processedCount > 0) {
      console.log(JSON.stringify({
        event: "notification_internal_dispatch",
        processedCount: result.processedCount,
        reason
      }));
    }
  } catch (error) {
    console.error("[notification_internal_dispatch_failed]", error);
  } finally {
    internalDispatchRunning = false;
  }
}

function getKoreaDateString(value = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric"
  }).formatToParts(new Date(value));
  const dateParts = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
}

function isSupplementLesson(lesson = {}) {
  return (
    lesson.lessonType === "makeup" ||
    lesson.classTemplateId === "supplement" ||
    String(lesson.className ?? "").includes("보충") ||
    String(lesson.lessonTopic ?? "").includes("보충")
  );
}

function isRetestLesson(lesson = {}) {
  return (
    String(lesson.className ?? "").includes("재시험") ||
    String(lesson.lessonTopic ?? "").includes("재시험")
  );
}

function formatTeacherScheduleItem(lesson = {}, students = []) {
  const names = (lesson.studentIds ?? [])
    .map((studentId) => students.find((student) => student.studentId === studentId)?.name)
    .filter(Boolean)
    .join(", ");
  return {
    studentName: names || "학생 미지정",
    title: lesson.sourceLabel || lesson.lessonTopic || lesson.className,
    date: lesson.date,
    time: [lesson.startTime, lesson.endTime].filter(Boolean).join("-"),
    lessonName: lesson.className
  };
}

async function sendTodayTeacherScheduleSlack({ date = getKoreaDateString(), notifyEmpty = true } = {}) {
  const [{ lessons }, { students }] = await Promise.all([
    listLessons({ date }),
    listStudents()
  ]);
  const activeLessons = (lessons ?? []).filter((lesson) => !["canceled", "deleted"].includes(lesson.status));
  const supplements = activeLessons
    .filter(isSupplementLesson)
    .filter((lesson) => !isRetestLesson(lesson))
    .map((lesson) => formatTeacherScheduleItem(lesson, students ?? []));
  const retests = activeLessons
    .filter(isRetestLesson)
    .map((lesson) => formatTeacherScheduleItem(lesson, students ?? []));

  if (!notifyEmpty && supplements.length === 0 && retests.length === 0) {
    return { skipped: true, date, supplements, retests };
  }

  const result = await sendSlackDailyScheduleSummary({ date, retests, supplements });
  return { date, result, retests, supplements };
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, "http://127.0.0.1");

  if (request.method === "OPTIONS") {
    sendJson(request, response, 204, {});
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/health") {
    sendJson(request, response, 200, { ok: true, service: "academy-os-api" });
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/core/status") {
    sendJson(request, response, 200, { ok: true, result: getCoreDataStatus() });
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/auth/login") {
    try {
      const payload = await readJsonBody(request);
      if (!["teacher", "student", "parent"].includes(payload.role)) {
        sendJson(request, response, 403, { ok: false, error: "지원하지 않는 로그인 역할입니다." });
        return;
      }
      const loginId = String(payload.loginId ?? "").trim();
      const password = String(payload.password ?? "");
      if (payload.role !== "teacher") {
        const student = await authenticateStudentOrParent(payload.role, loginId, password);
        sendJson(request, response, 200, {
          ok: true,
          authenticated: Boolean(student),
          account: student
            ? {
                role: payload.role,
                actorId: payload.role === "student" ? student.studentId : `parent_${student.studentId}`,
                studentId: student.studentId,
                loginId: student.loginId,
                name: student.name,
                sessionToken: createPortalSessionToken({ ...student, role: payload.role })
              }
            : null
        });
        return;
      }
      const account = await authenticateTeacher(loginId, password);
      sendJson(request, response, 200, {
        ok: true,
        authenticated: Boolean(account),
        account: account ? { loginId: account.loginId, name: account.name, teacherId: account.teacherId } : null
      });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/portal-data") {
    try {
      const token = String(request.headers.authorization ?? "").replace(/^Bearer\s+/i, "");
      const portalSession = verifyPortalSessionToken(token);
      if (!portalSession) {
        sendJson(request, response, 401, { ok: false, error: "학생 세션 인증이 필요합니다." });
        return;
      }
      const data = await getPortalData(portalSession);
      if (!data) {
        sendJson(request, response, 404, { ok: false, error: "학생 정보를 찾지 못했습니다." });
        return;
      }
      sendJson(request, response, 200, { ok: true, role: portalSession.role, ...data });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/portal-state") {
    try {
      const token = String(request.headers.authorization ?? "").replace(/^Bearer\s+/i, "");
      const portalSession = verifyPortalSessionToken(token);
      if (!portalSession) {
        sendJson(request, response, 401, { ok: false, error: "학생 세션 인증이 필요합니다." });
        return;
      }
      const payload = await readJsonBody(request);
      const result = await upsertPortalState(portalSession, payload.states ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/auth/teacher-account") {
    try {
      if (!isSupabaseConfigured({ requireServiceRole: true })) {
        sendJson(request, response, 503, {
          ok: false,
          error: "Supabase service role 또는 teacher_accounts 테이블 설정이 필요합니다."
        });
        return;
      }
      const payload = await readJsonBody(request);
      const currentLoginId = String(payload.currentLoginId ?? "").trim();
      const currentPassword = String(payload.currentPassword ?? "");
      const nextLoginId = String(payload.loginId ?? "").trim();
      const nextPassword = String(payload.newPassword ?? "");
      if (!nextLoginId) throw new Error("아이디를 입력해주세요.");
      if (nextPassword && nextPassword.length < 4) throw new Error("새 비밀번호는 4자리 이상이어야 합니다.");

      const account = await authenticateTeacher(currentLoginId, currentPassword);
      if (!account) {
        sendJson(request, response, 401, { ok: false, error: "현재 아이디 또는 비밀번호가 맞지 않습니다." });
        return;
      }

      const saved = await saveTeacherAccount({
        teacherId: account.teacherId,
        loginId: nextLoginId,
        name: payload.name ?? account.name,
        password: nextPassword || currentPassword
      });
      sendJson(request, response, 200, { ok: true, account: toTeacherAccount(saved) });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/app-state") {
    try {
      const result = await listAppState();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/app-state") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertAppState(payload.states ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/integrations/status") {
    sendJson(request, response, 200, {
      ok: true,
      result: {
        ai: getAiStatus(),
        notifications: getNotificationStatus()
      }
    });
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-post-files") {
    try {
      const payload = await readJsonBody(request, { limitBytes: 28 * 1024 * 1024 });
      const file = await uploadExamPostFile(payload);
      sendJson(request, response, 200, { ok: true, file });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/exam-post-files/open") {
    try {
      const bucketId = requestUrl.searchParams.get("bucket") || "exam-submissions";
      const storagePath = requestUrl.searchParams.get("path") || "";
      if (!storagePath) throw new Error("파일 경로가 없습니다.");
      const signedUrl = await createSignedStorageUrl(bucketId, storagePath);
      response.writeHead(302, {
        "Access-Control-Allow-Origin": getCorsOrigin(request),
        Location: signedUrl
      });
      response.end();
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-sources") {
    try {
      const payload = await readJsonBody(request, { limitBytes: 28 * 1024 * 1024 });
      const file = await uploadExamAnalysisSourceFile(payload);
      sendJson(request, response, 200, { ok: true, file });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/exam-analysis-sources/open") {
    try {
      const bucketId = requestUrl.searchParams.get("bucket") || "exam-analysis-sources";
      const storagePath = requestUrl.searchParams.get("path") || "";
      if (!storagePath) throw new Error("파일 경로가 없습니다.");
      const signedUrl = await createSignedStorageUrl(bucketId, storagePath);
      response.writeHead(302, {
        "Access-Control-Allow-Origin": getCorsOrigin(request),
        Location: signedUrl
      });
      response.end();
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/students") {
    try {
      const result = await listStudents();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/students") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertStudent(payload.student ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/students/bulk") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertStudents(payload.students ?? []);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/student-intake-applicants") {
    try {
      const result = await listStudentIntakeApplicants();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/student-intake-applicants") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertStudentIntakeApplicant(payload.applicant ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/intake/tally") {
    try {
      const payload = await readJsonBody(request);
      const signature = request.headers["tally-signature"];
      if (!verifyTallyWebhookSignature(payload, Array.isArray(signature) ? signature[0] : signature)) {
        sendJson(request, response, 401, { ok: false, error: "Invalid Tally signature." });
        return;
      }
      const applicant = normalizeTallyApplicantPayload(payload);
      const result = await upsertStudentIntakeApplicant(applicant);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/classes") {
    try {
      const result = await listClassTemplates();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/lessons") {
    try {
      const result = await listLessons({ date: requestUrl.searchParams.get("date") });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/lessons") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertLesson(payload.lesson ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/lessons/bulk") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertLessons(payload.lessons ?? []);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/lessons") {
    try {
      const lessonId = requestUrl.searchParams.get("id");
      const beforeDate = requestUrl.searchParams.get("before");
      const result = beforeDate ? await deleteLessonsBefore(beforeDate) : await deleteLesson(lessonId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/lesson-records") {
    try {
      const result = await listLessonStudentRecords();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/homeworks") {
    try {
      const result = await listHomeworks();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/lesson-records") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertLessonStudentRecord(payload.record ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/homeworks") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertHomework(payload.homework ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/homeworks/bulk") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertHomeworks(payload.homeworks ?? []);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/makeup-tasks") {
    try {
      const result = await listMakeupTasks();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/makeup-tasks") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertMakeupTask(payload.makeupTask ?? payload.task ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/makeup-tasks/bulk") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertMakeupTasks(payload.makeupTasks ?? payload.tasks ?? []);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/makeup-tasks") {
    try {
      const taskId = requestUrl.searchParams.get("id");
      const deleteAll = requestUrl.searchParams.get("all") === "true";
      const result = deleteAll ? await deleteAllMakeupTasks() : await deleteMakeupTask(taskId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/exam-prep-rows") {
    try {
      const result = await listExamPrepRows();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-prep-rows") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertExamPrepRow(payload.examPrepRow ?? payload.row ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-prep-rows/bulk") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertExamPrepRows(payload.examPrepRows ?? payload.rows ?? []);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/exam-prep-rows") {
    try {
      const deleteDuplicates = requestUrl.searchParams.get("duplicates") === "true";
      const confirmed = requestUrl.searchParams.get("confirm") === "true";
      const examPrepId = requestUrl.searchParams.get("id");
      if (!confirmed) throw new Error("시험정보 삭제는 confirm=true가 필요합니다.");
      const result = deleteDuplicates ? await deleteDuplicateExamPrepRows() : await deleteExamPrepRow(examPrepId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/school-events") {
    try {
      const result = await listSchoolEvents();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/school-events") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertSchoolEvent(payload.schoolEvent ?? payload.event ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/school-events/bulk") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertSchoolEvents(payload.schoolEvents ?? payload.events ?? []);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/school-events") {
    try {
      const eventId = requestUrl.searchParams.get("id");
      if (!eventId) throw new Error("삭제할 학사일정 ID가 필요합니다.");
      const result = await deleteSchoolEvent(eventId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/resource-materials") {
    try {
      const result = await listResourceMaterials();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/resource-materials") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertResourceMaterial(payload.material ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/resource-materials") {
    try {
      const materialId = requestUrl.searchParams.get("id");
      if (!materialId) throw new Error("삭제할 자료 ID가 필요합니다.");
      const result = await deleteResourceMaterial(materialId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/notification-jobs") {
    try {
      const result = await listNotificationJobs();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertNotificationJob(payload.notificationJob ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/notification-jobs") {
    try {
      const notificationJobId = requestUrl.searchParams.get("id");
      if (!notificationJobId) throw new Error("삭제할 알림톡 기록 ID가 필요합니다.");
      const result = await deleteNotificationJob(notificationJobId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/dispatch-due") {
    try {
      const payload = await readJsonBody(request);
      const dispatchAuth = getDispatchAuthState(request, payload);
      const hasSensitiveOverride = Boolean(payload.now || payload.dispatchToken || payload.forceDryRun);
      if (dispatchAuth.configured && hasSensitiveOverride && !dispatchAuth.ok) {
        sendJson(request, response, 401, { ok: false, error: "Invalid notification dispatch token." });
        return;
      }
      const result = await dispatchDueNotificationJobs({
        allowManualStatuses: dispatchAuth.ok,
        forceDryRun: dispatchAuth.ok ? Boolean(payload.forceDryRun) : false,
        limit: payload.limit,
        now: dispatchAuth.ok && payload.now ? payload.now : new Date().toISOString()
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/readiness-check") {
    try {
      const payload = await readJsonBody(request);
      const result = await checkNotificationReadiness({
        notifySlack: Boolean(payload.notifySlack),
        now: payload.now,
        windowMinutes: payload.windowMinutes
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/admin/seed-core-data") {
    try {
      const result = await seedCoreData();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notifications/attendance-alimtalk") {
    try {
      const payload = await readJsonBody(request);
      const result = await sendAttendanceAlimtalkOnce(payload);
      sendJson(request, response, 200, { ok: true, provider: "solapi", result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notifications/comment-alimtalk") {
    try {
      const payload = await readJsonBody(request);
      if (payload.sendMode === "scheduled" && !payload.scheduledDate) {
        throw new Error("scheduledDate is required for scheduled comment Alimtalk sends.");
      }
      const result = await sendLessonCommentAlimtalk(payload);
      sendJson(request, response, 200, { ok: true, provider: "solapi", result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notifications/daily-report-alimtalk") {
    try {
      const payload = await readJsonBody(request);
      const result = await sendDailyReportAlimtalk(payload);
      sendJson(request, response, 200, { ok: true, provider: "solapi", result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notifications/student-schedule-reminder") {
    try {
      const payload = await readJsonBody(request);
      const result = await sendStudentScheduleReminderAlimtalk(payload);
      sendJson(request, response, 200, { ok: true, provider: "solapi", result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notifications/slack-daily-schedule") {
    try {
      const payload = await readJsonBody(request);
      const result = await sendSlackDailyScheduleSummary(payload);
      sendJson(request, response, 200, { ok: true, provider: "slack", result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notifications/slack-today-schedule") {
    try {
      const payload = await readJsonBody(request);
      const result = await sendTodayTeacherScheduleSlack({
        date: payload.date || getKoreaDateString(payload.now || new Date()),
        notifyEmpty: payload.notifyEmpty !== false
      });
      sendJson(request, response, 200, { ok: true, provider: "slack", result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/ai/exam-analysis") {
    try {
      const payload = await readJsonBody(request);
      const result = await runExamAnalysis(payload);
      sendJson(request, response, 200, { ok: true, result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/ai/comment-polish") {
    try {
      const payload = await readJsonBody(request);
      const result = await polishLessonComment(payload);
      sendJson(request, response, 200, { ok: true, result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  sendJson(request, response, 404, { ok: false, error: "not found" });
});

server.listen(port, host, () => {
  console.log(`academy-os api server listening on http://${host}:${port}`);
  if (internalDispatchEnabled) {
    runInternalNotificationDispatch("startup");
    setInterval(() => runInternalNotificationDispatch("interval"), 60 * 1000).unref?.();
  }
});


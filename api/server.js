import http from "node:http";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
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
import { getAiStatus, polishLessonComment } from "./routes/commentPolish.js";
import {
  confirmExamAnalysisQuestionCount,
  deleteExamAnalysisRun,
  examAnalysisSourceBucket,
  getExamAnalysisRun,
  getExamAnalysisSource,
  listExamAnalysisRuns,
  recordExamAnalysisEvent,
  recordExamAnalysisSourceUpload,
  saveExamAnalysisSourceExtraction,
  saveExamAnalysisQuestionBoundaries,
  saveExamAnalysisQuestionRowFill,
  updateExamAnalysisRun,
  updateExamAnalysisSource,
  upsertExamAnalysisRun
} from "./routes/examAnalysisPipeline.js";
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
const openAiResponsesUrl = "https://api.openai.com/v1/responses";
const anthropicMessagesUrl = "https://api.anthropic.com/v1/messages";
const recentAttendanceAlimtalkSends = new Map();
const teacherAccountTable = "teacher_accounts";
const defaultTeacherAccount = {
  teacherId: "instructor_owner_001",
  loginId: process.env.TEACHER_LOGIN_ID ?? "teacher",
  name: "고태영T",
  password: process.env.TEACHER_PASSWORD ?? "1234"
};

function summarizeNotificationJobResult(result) {
  if (!result || typeof result !== "object") return result ?? null;
  const response = result.response;
  const groupInfo = response?.groupInfo;
  return {
    dryRun: Boolean(result.dryRun),
    isTestRedirected: Boolean(result.isTestRedirected),
    requestedTo: result.requestedTo || "",
    sentTo: result.sentTo || "",
    scheduledDate: result.scheduledDate || "",
    templateEnvName: result.templateEnvName || "",
    groupId: groupInfo?.groupId || groupInfo?._id || "",
    solapiStatus: groupInfo?.status || "",
    count: groupInfo?.count || null
  };
}

function summarizeNotificationJobForList(job = {}) {
  return {
    ...job,
    result: summarizeNotificationJobResult(job.result)
  };
}

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

function isNoticeNotificationType(type = "") {
  return type === "notice_parent" || type === "notice_student";
}

function isOsScheduledNotificationJob(job) {
  if (job.payload?.osScheduled === true) return true;
  return (
    isNoticeNotificationType(job.notificationType) &&
    job.provider === "academy-os" &&
    job.payload?.sendMode === "scheduled"
  );
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

function isStorageBucketNotFound(error) {
  const message = String(error?.message ?? "").toLowerCase();
  return error?.statusCode === 404 || message.includes("bucket not found") || message.includes("bucket not exist");
}

async function ensureStorageBucket(bucketId, options = {}) {
  try {
    await supabaseStorageRequest(`bucket/${encodeURIComponent(bucketId)}`);
  } catch (error) {
    if (!isStorageBucketNotFound(error)) throw error;
    await supabaseStorageRequest("bucket", {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify({
        id: bucketId,
        name: bucketId,
        public: false,
        file_size_limit: options.fileSizeLimit ?? 20 * 1024 * 1024,
        allowed_mime_types: options.allowedMimeTypes ?? ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf"]
      })
    });
  }
}

async function uploadStorageObjectWithBucketRetry(bucketId, storagePath, { contentType, body }) {
  try {
    return await supabaseStorageRequest(`object/${bucketId}/${storagePath}`, {
      method: "PUT",
      contentType,
      headers: { "x-upsert": "true" },
      body
    });
  } catch (error) {
    if (!isStorageBucketNotFound(error)) throw error;
    await ensureStorageBucket(bucketId);
    return supabaseStorageRequest(`object/${bucketId}/${storagePath}`, {
      method: "PUT",
      contentType,
      headers: { "x-upsert": "true" },
      body
    });
  }
}

function sanitizeStorageSegment(value, fallback = "unknown") {
  const sanitized = String(value ?? "")
    .trim()
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/\.\.+/g, ".")
    .replace(/-+/g, "-")
    .replace(/^[.-]+|[.-]+$/g, "");
  return sanitized || fallback;
}

function getStorageFileExtension(fileName, mimeType) {
  const extensionMatch = String(fileName ?? "").match(/\.([A-Za-z0-9]{1,12})$/);
  if (extensionMatch) return `.${extensionMatch[1].toLowerCase()}`;
  const subtype = String(mimeType ?? "").split("/")[1] ?? "";
  return subtype ? `.${sanitizeStorageSegment(subtype, "bin")}` : "";
}

function getStorageSafeFileName(fileName, mimeType, fallbackBase = "file") {
  const rawFileName = String(fileName ?? "").trim();
  const extension = getStorageFileExtension(rawFileName, mimeType);
  const baseName = extension && rawFileName.toLowerCase().endsWith(extension)
    ? rawFileName.slice(0, -extension.length)
    : rawFileName.replace(/\.[^.]+$/, "");
  return `${sanitizeStorageSegment(baseName, fallbackBase)}${extension}`;
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

async function downloadStorageObject(bucketId, storagePath) {
  if (!bucketId || !storagePath) throw new Error("다운로드할 파일 경로가 없습니다.");
  const serviceRoleKey = getSupabaseServiceRoleKey();
  const response = await fetch(`${getSupabaseStorageBaseUrl()}/object/${bucketId}/${storagePath}`, {
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`
    }
  });
  if (!response.ok) {
    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }
    throw new Error(data?.message || data?.error || response.statusText);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function deleteStorageObject(bucketId, storagePath) {
  if (!bucketId || !storagePath) return false;
  try {
    await supabaseStorageRequest(`object/${bucketId}/${storagePath}`, { method: "DELETE" });
    return true;
  } catch (error) {
    if (error?.statusCode === 404) return false;
    throw error;
  }
}

function inferExamAnalysisSubjectFromText(value = "") {
  const text = String(value || "").replace(/\s+/g, "");
  const candidates = [
    [/공통수학1|공수1|공통수학Ⅰ|공통수학I/i, "공통수학1"],
    [/공통수학2|공수2|공통수학Ⅱ|공통수학II/i, "공통수학2"],
    [/미적분2|미적분Ⅱ|미적분II/i, "미적분2"],
    [/미적분1|미적분Ⅰ|미적분I/i, "미적분1"],
    [/확률과통계|확통/i, "확률과통계"],
    [/대수/i, "대수"]
  ];
  return candidates.find(([pattern]) => pattern.test(text))?.[1] ?? "";
}

function sanitizeExamAnalysisSubject(value = "") {
  const text = String(value || "").trim();
  if (!text || text === "기하") return "";
  return text;
}

function detectQuestionNumberCandidates(text = "") {
  const candidates = new Set();
  const pattern = /(?:^|\n)\s*(\d{1,3})\s*[.)]/g;
  let match = pattern.exec(String(text || ""));
  while (match) {
    const number = Number(match[1]);
    if (number > 0 && number <= 200) candidates.add(number);
    match = pattern.exec(String(text || ""));
  }
  return [...candidates].sort((a, b) => a - b);
}

function hasLongEncodedTokenRun(line = "") {
  let runLength = 0;
  for (const token of String(line || "").trim().split(/\s+/).filter(Boolean)) {
    if (/^[A-Za-z0-9+/=]{1,4}$/.test(token)) {
      runLength += 1;
      if (runLength >= 10) return true;
    } else {
      runLength = 0;
    }
  }
  return false;
}

function inspectPdfTextLayerNoise(text = "") {
  const lines = String(text || "").split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const encodedLineCount = lines.filter((line) => {
    const compactText = line.replace(/\s+/g, "");
    return compactText.length >= 50 && /^[A-Za-z0-9+/=]+$/.test(compactText);
  }).length;
  const encodedTokenRunCount = lines.filter(hasLongEncodedTokenRun).length;
  return {
    lineCount: lines.length,
    encodedLineCount,
    encodedTokenRunCount,
    suspicious: encodedLineCount > 0 || encodedTokenRunCount > 0
  };
}

function compactNumberList(numbers = [], limit = 60) {
  const values = [...new Set(numbers.map(Number).filter((number) => Number.isFinite(number) && number > 0))]
    .sort((a, b) => a - b);
  if (!values.length) return "";
  const shown = values.slice(0, limit).join(", ");
  return values.length > limit ? `${shown}, ...` : shown;
}

function buildQuestionNumberDiagnosticFromText(text = "") {
  const questionNumberCandidates = detectQuestionNumberCandidates(text);
  const maxQuestionNumber = questionNumberCandidates.at(-1) ?? null;
  const missingQuestionNumbers = maxQuestionNumber
    ? Array.from({ length: maxQuestionNumber }, (_, index) => index + 1)
        .filter((number) => !questionNumberCandidates.includes(number))
    : [];
  return {
    questionNumberCandidates,
    maxQuestionNumber,
    missingQuestionNumbers
  };
}

function buildTextExtractionDiagnosticForVision(sourceFile = {}) {
  const extractedText = String(sourceFile.extractedText || "");
  const pageRanges = Array.isArray(sourceFile.pageTextRanges) ? sourceFile.pageTextRanges : [];
  if (!extractedText && !pageRanges.length) {
    return "1차 텍스트 추출 결과 없음. PDF 원본 페이지를 기준으로 판단한다.";
  }

  const diagnostic = buildQuestionNumberDiagnosticFromText(extractedText);
  const textLayerNoise = inspectPdfTextLayerNoise(extractedText);
  const pageLengths = pageRanges
    .map((page) => `${page.pageNumber}p:${Number(page.textLength || 0)}`)
    .join(", ");
  return [
    "1차 텍스트 추출 결과는 참고용 후보이며, 최종 판단은 PDF 원본 페이지가 우선이다.",
    `추출 상태: ${sourceFile.extractionStatus || "unknown"}`,
    `추출 페이지: ${sourceFile.pageCount || pageRanges.length || "unknown"}`,
    `추출 텍스트 bytes: ${Buffer.byteLength(extractedText, "utf8")}`,
    diagnostic.questionNumberCandidates.length
      ? `문항번호 후보: ${compactNumberList(diagnostic.questionNumberCandidates)}`
      : "문항번호 후보: 없음",
    diagnostic.maxQuestionNumber ? `최대 문항번호 후보: ${diagnostic.maxQuestionNumber}` : "",
    diagnostic.missingQuestionNumbers.length
      ? `누락 후보: ${compactNumberList(diagnostic.missingQuestionNumbers)}`
      : "누락 후보: 없음",
    textLayerNoise.suspicious
      ? `텍스트 레이어 잡음 감지: encodedLine=${textLayerNoise.encodedLineCount}, encodedTokenRun=${textLayerNoise.encodedTokenRunCount}`
      : "텍스트 레이어 잡음 감지: 없음",
    pageLengths ? `페이지별 추출 길이: ${pageLengths}` : ""
  ].filter(Boolean).join("\n");
}

function buildExtractionQuality(extraction = {}) {
  const pageRanges = Array.isArray(extraction.pageTextRanges) ? extraction.pageTextRanges : [];
  const diagnostic = buildQuestionNumberDiagnosticFromText(extraction.extractedText);
  const questionNumberCandidates = diagnostic.questionNumberCandidates;
  const textLayerNoise = inspectPdfTextLayerNoise(extraction.extractedText);
  const maxQuestionNumber = diagnostic.maxQuestionNumber;
  const missingQuestionNumbers = diagnostic.missingQuestionNumbers;
  const emptyPageNumbers = pageRanges
    .filter((page) => Number(page.textLength || 0) === 0)
    .map((page) => page.pageNumber);
  const shortPageNumbers = pageRanges
    .filter((page) => Number(page.textLength || 0) > 0 && Number(page.textLength || 0) < 80)
    .map((page) => page.pageNumber);
  const warnings = [
    extraction.extractedText ? "" : "추출된 텍스트가 없습니다.",
    emptyPageNumbers.length ? `빈 텍스트 페이지: ${emptyPageNumbers.join(", ")}` : "",
    shortPageNumbers.length ? `텍스트가 짧은 페이지: ${shortPageNumbers.join(", ")}` : "",
    questionNumberCandidates.length ? "" : "문항번호 후보를 찾지 못했습니다.",
    missingQuestionNumbers.length ? `문항번호 후보 누락: ${missingQuestionNumbers.join(", ")}` : "",
    textLayerNoise.suspicious ? "PDF 텍스트 레이어 잡음 감지: AI 원본 검증이 필요합니다." : ""
  ].filter(Boolean);
  return {
    status: warnings.length ? "needs_review" : "ok",
    pageCount: extraction.pageCount ?? pageRanges.length,
    textBytes: extraction.textBytes ?? Buffer.byteLength(extraction.extractedText || "", "utf8"),
    textLength: extraction.extractedText?.length ?? 0,
    questionNumberCandidates,
    maxQuestionNumber,
    missingQuestionNumbers,
    emptyPageNumbers,
    shortPageNumbers,
    textLayerNoise,
    warnings
  };
}

function apiEnvValue(name) {
  const value = process.env[name];
  return value && !value.startsWith("your_") ? value : "";
}

function outputTextFromOpenAiResponse(data = {}) {
  if (data.output_text) return data.output_text;
  const texts = [];
  if (Array.isArray(data.output)) {
    data.output.forEach((item) => {
      if (typeof item?.content === "string") texts.push(item.content);
      if (Array.isArray(item?.content)) {
        item.content.forEach((block) => {
          const text = block?.text || block?.output_text || block?.content;
          if (typeof text === "string") texts.push(text);
        });
      }
    });
  }
  return texts.join("\n").trim();
}

function parseLooseJsonObject(text = "") {
  const raw = String(text || "").trim();
  try {
    return JSON.parse(raw);
  } catch {
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) return {};
    try {
      return JSON.parse(match[0]);
    } catch {
      return {};
    }
  }
}

function buildPdfVisionCheckPrompt(sourceFile = {}) {
  return [
    "역할: 수학 시험지 PDF 원본 검증자",
    "목표: PDF가 시험분석 파이프라인에 들어가기 전에 모델이 실제 페이지를 읽을 수 있는지 검증한다.",
    "중요: PDF 내부 텍스트 레이어만 믿지 말고 페이지 이미지까지 본다는 전제로 판단한다.",
    "아래 1차 텍스트 추출 결과는 후보 체크리스트일 뿐이다. 서로 충돌하면 PDF 원본 페이지를 우선한다.",
    "",
    "[1차 텍스트 추출 후보]",
    buildTextExtractionDiagnosticForVision(sourceFile),
    "",
    "본문 문제를 길게 옮기지 말고, 검증에 필요한 짧은 근거만 반환한다.",
    "과목은 PDF 표지, 파일명, 시험지 상단에 명확히 보이는 경우만 반환한다. 명확하지 않으면 빈 문자열로 둔다.",
    "반드시 JSON 객체만 반환한다.",
    "",
    "필드:",
    "- readable: boolean",
    "- page_count: number",
    "- subject: string",
    "- question_number_candidates: number[]",
    "- question_count_candidate: number|null",
    "- missing_question_numbers: number[]",
    "- answer_key_detected: boolean",
    "- first_page_evidence: string",
    "- last_page_evidence: string",
    "- warnings: string[]"
  ].join("\n");
}

function normalizePdfVisionCheckResult({ provider, model, rawText, parsed = {} }) {
  return {
    provider,
    model,
    checkedAt: new Date().toISOString(),
    rawText,
    readable: Boolean(parsed.readable),
    pageCount: Number(parsed.page_count || parsed.pageCount || 0) || null,
    subject: sanitizeExamAnalysisSubject(parsed.subject),
    questionNumberCandidates: Array.isArray(parsed.question_number_candidates)
      ? parsed.question_number_candidates.map(Number).filter((number) => Number.isFinite(number) && number > 0)
      : [],
    questionCountCandidate: parsed.question_count_candidate === null || parsed.question_count_candidate === undefined
      ? null
      : Number(parsed.question_count_candidate),
    missingQuestionNumbers: Array.isArray(parsed.missing_question_numbers)
      ? parsed.missing_question_numbers.map(Number).filter((number) => Number.isFinite(number) && number > 0)
      : [],
    answerKeyDetected: Boolean(parsed.answer_key_detected),
    firstPageEvidence: String(parsed.first_page_evidence || "").slice(0, 500),
    lastPageEvidence: String(parsed.last_page_evidence || "").slice(0, 500),
    warnings: Array.isArray(parsed.warnings) ? parsed.warnings.map(String).slice(0, 10) : []
  };
}

function buildPdfQuestionBoundaryPrompt({ sourceFile = {}, analysisRun = {}, questions = [] } = {}) {
  const questionNumbers = questions
    .map((question) => Number(question.questionNumber))
    .filter((number) => Number.isInteger(number) && number > 0)
    .sort((a, b) => a - b);
  const confirmedCount = Number(analysisRun.confirmedQuestionCount || questionNumbers.at(-1) || questionNumbers.length || 0);
  return [
    "역할: 수학 시험지 PDF 문항 경계 검수자",
    "목표: 확정된 문항번호별로 PDF 원본에서 시작 페이지와 끝 페이지, 대략 위치만 찾는다.",
    "금지: 문제 풀이, 정답 추론, 단원/유형 분류, 본문 대량 복사는 하지 않는다.",
    "중요: PDF 텍스트 레이어 후보보다 PDF 원본 페이지를 우선한다.",
    "",
    "[분석 대상]",
    `파일명: ${sourceFile.originalFileName || "exam-source.pdf"}`,
    `학교: ${analysisRun.schoolName || ""}`,
    `학년: ${analysisRun.grade || ""}`,
    `고사: ${analysisRun.examCycle || analysisRun.examTerm || ""}`,
    `과목: ${analysisRun.subject || ""}`,
    `확정 문항 수: ${confirmedCount}`,
    questionNumbers.length ? `확정 행 번호: ${questionNumbers.join(", ")}` : "",
    "",
    "[반환 규칙]",
    "반드시 JSON 객체만 반환한다.",
    "question_boundaries는 확정 행 번호마다 하나씩 반환한다.",
    "position_hint는 top, upper-middle, middle, lower-middle, bottom, continued 중 하나에 가깝게 짧게 쓴다.",
    "start_evidence와 end_evidence는 사람이 위치를 확인할 수 있는 매우 짧은 근거만 쓴다.",
    "",
    "필드:",
    "- readable: boolean",
    "- question_boundaries: array of { question_number:number, page_start:number|null, page_end:number|null, position_hint:string, start_evidence:string, end_evidence:string, needs_review:boolean, warnings:string[] }",
    "- missing_question_numbers: number[]",
    "- overlap_warnings: string[]",
    "- summary: string"
  ].filter(Boolean).join("\n");
}

function normalizePdfQuestionBoundaryResult({ provider, model, rawText, parsed = {} }) {
  const boundaries = Array.isArray(parsed.question_boundaries)
    ? parsed.question_boundaries
    : Array.isArray(parsed.questionBoundaries)
      ? parsed.questionBoundaries
      : [];
  return {
    provider,
    model,
    detectedAt: new Date().toISOString(),
    rawText,
    readable: Boolean(parsed.readable),
    questionBoundaries: boundaries.map((boundary) => ({
      questionNumber: Number(boundary.question_number ?? boundary.questionNumber),
      pageStart: boundary.page_start === null || boundary.page_start === undefined
        ? null
        : Number(boundary.page_start ?? boundary.pageStart),
      pageEnd: boundary.page_end === null || boundary.page_end === undefined
        ? null
        : Number(boundary.page_end ?? boundary.pageEnd),
      positionHint: String(boundary.position_hint ?? boundary.positionHint ?? "").slice(0, 120),
      startEvidence: String(boundary.start_evidence ?? boundary.startEvidence ?? "").slice(0, 300),
      endEvidence: String(boundary.end_evidence ?? boundary.endEvidence ?? "").slice(0, 300),
      needsReview: Boolean(boundary.needs_review ?? boundary.needsReview),
      warnings: Array.isArray(boundary.warnings) ? boundary.warnings.map(String).slice(0, 5) : []
    })).filter((boundary) => Number.isInteger(boundary.questionNumber) && boundary.questionNumber > 0),
    missingQuestionNumbers: Array.isArray(parsed.missing_question_numbers)
      ? parsed.missing_question_numbers.map(Number).filter((number) => Number.isFinite(number) && number > 0)
      : [],
    overlapWarnings: Array.isArray(parsed.overlap_warnings) ? parsed.overlap_warnings.map(String).slice(0, 20) : [],
    summary: String(parsed.summary || "").slice(0, 500)
  };
}

function buildPdfQuestionRowFillPrompt({ sourceFile = {}, analysisRun = {}, questions = [] } = {}) {
  const questionLines = questions
    .map((question) => {
      const boundary = question.sourceEvidence?.boundary ?? {};
      const pageStart = boundary.pageStart || question.sourcePage || "?";
      const pageEnd = boundary.pageEnd && boundary.pageEnd !== pageStart ? `~${boundary.pageEnd}` : "";
      const position = boundary.positionHint || "unknown";
      return `${question.questionNumber}: ${pageStart}${pageEnd}p, ${position}`;
    })
    .join("\n");
  return [
    "역할: 수학 시험지 문항 메타데이터 초안 작성자",
    "목표: 이미 확정된 1~N 문항 행에 대해 단원, 쎈 주유형, 보조유형, 난이도, 짧은 판별 근거만 채운다.",
    "금지: 문제 본문 대량 복사, 정답 추론, 상세 풀이, 학생용 해설 작성은 하지 않는다.",
    "중요: 결과는 사람이 검수할 AI 초안이다. 확실하지 않은 문항은 needs_review=true로 표시한다.",
    "",
    "[분석 대상]",
    `파일명: ${sourceFile.originalFileName || "exam-source.pdf"}`,
    `학교: ${analysisRun.schoolName || ""}`,
    `학년: ${analysisRun.grade || ""}`,
    `고사: ${analysisRun.examCycle || analysisRun.examTerm || ""}`,
    `과목: ${analysisRun.subject || ""}`,
    "",
    "[확정 문항 경계]",
    questionLines,
    "",
    "[분류 기준]",
    "- unit_name: 교과 단원명 또는 시험 범위상 단원명",
    "- main_type: 쎈 유형별분석표에 붙일 수 있는 대표 주유형 이름. 확실하지 않으면 일반적인 수학 유형명으로 짧게 쓴다.",
    "- sub_types: 보조유형 0~2개. 복합 문항이면 결합 요소를 짧게 쓴다.",
    "- difficulty: 하, 중하, 중, 중상, 상 중 하나에 가깝게 쓴다.",
    "- reasoning_summary: 본문을 복사하지 말고, 어떤 구조라서 그렇게 봤는지 1문장으로만 쓴다.",
    "",
    "반드시 JSON 객체만 반환한다.",
    "필드:",
    "- rows: array of { question_number:number, unit_name:string, main_type:string, sub_types:string[], difficulty:string, reasoning_summary:string, concept_tags:string[], confidence:number, needs_review:boolean, warnings:string[] }",
    "- missing_question_numbers: number[]",
    "- summary: string"
  ].join("\n");
}

function normalizePdfQuestionRowFillResult({ provider, model, rawText, parsed = {} }) {
  const rows = Array.isArray(parsed.rows) ? parsed.rows : [];
  return {
    provider,
    model,
    filledAt: new Date().toISOString(),
    rawText,
    rows: rows.map((row) => ({
      questionNumber: Number(row.question_number ?? row.questionNumber),
      unitName: String(row.unit_name ?? row.unitName ?? "").slice(0, 120),
      mainType: String(row.main_type ?? row.mainType ?? "").slice(0, 160),
      subTypes: Array.isArray(row.sub_types ?? row.subTypes)
        ? (row.sub_types ?? row.subTypes).map(String).filter(Boolean).slice(0, 3)
        : [],
      difficulty: String(row.difficulty || "").slice(0, 40),
      reasoningSummary: String(row.reasoning_summary ?? row.reasoningSummary ?? "").slice(0, 500),
      conceptTags: Array.isArray(row.concept_tags ?? row.conceptTags)
        ? (row.concept_tags ?? row.conceptTags).map(String).filter(Boolean).slice(0, 10)
        : [],
      confidence: row.confidence === undefined || row.confidence === null ? null : Number(row.confidence),
      needsReview: Boolean(row.needs_review ?? row.needsReview),
      warnings: Array.isArray(row.warnings) ? row.warnings.map(String).slice(0, 6) : []
    })).filter((row) => Number.isInteger(row.questionNumber) && row.questionNumber > 0),
    missingQuestionNumbers: Array.isArray(parsed.missing_question_numbers)
      ? parsed.missing_question_numbers.map(Number).filter((number) => Number.isFinite(number) && number > 0)
      : [],
    summary: String(parsed.summary || "").slice(0, 500)
  };
}

function outputTextFromAnthropicResponse(data = {}) {
  if (!Array.isArray(data.content)) return "";
  return data.content
    .map((block) => {
      if (typeof block?.text === "string") return block.text;
      if (typeof block?.content === "string") return block.content;
      return "";
    })
    .filter(Boolean)
    .join("\n")
    .trim();
}

async function runAnthropicPdfVisionCheck(sourceFile, buffer) {
  const apiKey = apiEnvValue("ANTHROPIC_API_KEY");
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY 환경변수가 필요합니다.");
  const model = apiEnvValue("ANTHROPIC_EXAM_PDF_MODEL") || apiEnvValue("ANTHROPIC_MODEL") || "claude-sonnet-4-5";
  const response = await fetch(anthropicMessagesUrl, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify({
      model,
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: buffer.toString("base64")
              }
            },
            { type: "text", text: buildPdfVisionCheckPrompt(sourceFile) }
          ]
        }
      ]
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude PDF 검증 요청에 실패했습니다.");
  }
  const rawText = outputTextFromAnthropicResponse(data);
  return normalizePdfVisionCheckResult({
    provider: "anthropic",
    model,
    rawText,
    parsed: parseLooseJsonObject(rawText)
  });
}

async function runOpenAiPdfVisionCheck(sourceFile, buffer) {
  const apiKey = apiEnvValue("OPENAI_API_KEY");
  if (!apiKey) throw new Error("OPENAI_API_KEY 환경변수가 필요합니다.");
  const model = apiEnvValue("OPENAI_EXAM_PDF_MODEL") || apiEnvValue("OPENAI_MODEL") || "gpt-4.1-mini";

  const response = await fetch(openAiResponsesUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_file",
              filename: sourceFile.originalFileName || "exam-source.pdf",
              file_data: `data:application/pdf;base64,${buffer.toString("base64")}`
            },
            { type: "input_text", text: buildPdfVisionCheckPrompt(sourceFile) }
          ]
        }
      ],
      max_output_tokens: 2000
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI PDF 검증 요청에 실패했습니다.");
  }
  const rawText = outputTextFromOpenAiResponse(data);
  return normalizePdfVisionCheckResult({
    provider: "openai",
    model,
    rawText,
    parsed: parseLooseJsonObject(rawText)
  });
}

async function runPdfVisionCheck(sourceFile, buffer) {
  if (apiEnvValue("ANTHROPIC_API_KEY")) {
    return runAnthropicPdfVisionCheck(sourceFile, buffer);
  }
  if (apiEnvValue("OPENAI_API_KEY")) {
    return runOpenAiPdfVisionCheck(sourceFile, buffer);
  }
  throw new Error("ANTHROPIC_API_KEY 또는 OPENAI_API_KEY 환경변수가 필요합니다.");
}

async function runAnthropicPdfQuestionBoundaryDetection(sourceFile, buffer, detail) {
  const apiKey = apiEnvValue("ANTHROPIC_API_KEY");
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY 환경변수가 필요합니다.");
  const model = apiEnvValue("ANTHROPIC_EXAM_PDF_MODEL") || apiEnvValue("ANTHROPIC_MODEL") || "claude-sonnet-4-5";
  const response = await fetch(anthropicMessagesUrl, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify({
      model,
      max_tokens: 6000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: buffer.toString("base64")
              }
            },
            { type: "text", text: buildPdfQuestionBoundaryPrompt({ sourceFile, analysisRun: detail.analysisRun, questions: detail.questions }) }
          ]
        }
      ]
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude 문항 경계 탐지 요청에 실패했습니다.");
  }
  const rawText = outputTextFromAnthropicResponse(data);
  return normalizePdfQuestionBoundaryResult({
    provider: "anthropic",
    model,
    rawText,
    parsed: parseLooseJsonObject(rawText)
  });
}

async function runOpenAiPdfQuestionBoundaryDetection(sourceFile, buffer, detail) {
  const apiKey = apiEnvValue("OPENAI_API_KEY");
  if (!apiKey) throw new Error("OPENAI_API_KEY 환경변수가 필요합니다.");
  const model = apiEnvValue("OPENAI_EXAM_PDF_MODEL") || apiEnvValue("OPENAI_MODEL") || "gpt-4.1-mini";
  const response = await fetch(openAiResponsesUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_file",
              filename: sourceFile.originalFileName || "exam-source.pdf",
              file_data: `data:application/pdf;base64,${buffer.toString("base64")}`
            },
            { type: "input_text", text: buildPdfQuestionBoundaryPrompt({ sourceFile, analysisRun: detail.analysisRun, questions: detail.questions }) }
          ]
        }
      ],
      max_output_tokens: 6000
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI 문항 경계 탐지 요청에 실패했습니다.");
  }
  const rawText = outputTextFromOpenAiResponse(data);
  return normalizePdfQuestionBoundaryResult({
    provider: "openai",
    model,
    rawText,
    parsed: parseLooseJsonObject(rawText)
  });
}

async function runPdfQuestionBoundaryDetection(sourceFile, buffer, detail) {
  if (apiEnvValue("ANTHROPIC_API_KEY")) {
    return runAnthropicPdfQuestionBoundaryDetection(sourceFile, buffer, detail);
  }
  if (apiEnvValue("OPENAI_API_KEY")) {
    return runOpenAiPdfQuestionBoundaryDetection(sourceFile, buffer, detail);
  }
  throw new Error("ANTHROPIC_API_KEY 또는 OPENAI_API_KEY 환경변수가 필요합니다.");
}

async function runAnthropicPdfQuestionRowFill(sourceFile, buffer, detail) {
  const apiKey = apiEnvValue("ANTHROPIC_API_KEY");
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY 환경변수가 필요합니다.");
  const model = apiEnvValue("ANTHROPIC_EXAM_PDF_MODEL") || apiEnvValue("ANTHROPIC_MODEL") || "claude-sonnet-4-5";
  const response = await fetch(anthropicMessagesUrl, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify({
      model,
      max_tokens: 6000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: buffer.toString("base64")
              }
            },
            { type: "text", text: buildPdfQuestionRowFillPrompt({ sourceFile, analysisRun: detail.analysisRun, questions: detail.questions }) }
          ]
        }
      ]
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude AI 행 채움 요청에 실패했습니다.");
  }
  const rawText = outputTextFromAnthropicResponse(data);
  return normalizePdfQuestionRowFillResult({
    provider: "anthropic",
    model,
    rawText,
    parsed: parseLooseJsonObject(rawText)
  });
}

async function runOpenAiPdfQuestionRowFill(sourceFile, buffer, detail) {
  const apiKey = apiEnvValue("OPENAI_API_KEY");
  if (!apiKey) throw new Error("OPENAI_API_KEY 환경변수가 필요합니다.");
  const model = apiEnvValue("OPENAI_EXAM_PDF_MODEL") || apiEnvValue("OPENAI_MODEL") || "gpt-4.1-mini";
  const response = await fetch(openAiResponsesUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_file",
              filename: sourceFile.originalFileName || "exam-source.pdf",
              file_data: `data:application/pdf;base64,${buffer.toString("base64")}`
            },
            { type: "input_text", text: buildPdfQuestionRowFillPrompt({ sourceFile, analysisRun: detail.analysisRun, questions: detail.questions }) }
          ]
        }
      ],
      max_output_tokens: 6000
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI AI 행 채움 요청에 실패했습니다.");
  }
  const rawText = outputTextFromOpenAiResponse(data);
  return normalizePdfQuestionRowFillResult({
    provider: "openai",
    model,
    rawText,
    parsed: parseLooseJsonObject(rawText)
  });
}

async function runPdfQuestionRowFill(sourceFile, buffer, detail) {
  if (apiEnvValue("ANTHROPIC_API_KEY")) {
    return runAnthropicPdfQuestionRowFill(sourceFile, buffer, detail);
  }
  if (apiEnvValue("OPENAI_API_KEY")) {
    return runOpenAiPdfQuestionRowFill(sourceFile, buffer, detail);
  }
  throw new Error("ANTHROPIC_API_KEY 또는 OPENAI_API_KEY 환경변수가 필요합니다.");
}

function normalizePdfPageText(items = []) {
  const lines = [];
  let currentLine = [];
  let currentY = null;

  for (const item of items) {
    const text = String(item?.str ?? "").replace(/\s+/g, " ").trim();
    if (!text) continue;
    const y = Array.isArray(item?.transform) ? Number(item.transform[5]) : null;
    const startsNewLine = currentLine.length > 0
      && Number.isFinite(y)
      && Number.isFinite(currentY)
      && Math.abs(y - currentY) > 3;
    if (startsNewLine) {
      lines.push(currentLine.join(" "));
      currentLine = [];
    }
    currentLine.push(text);
    if (Number.isFinite(y)) currentY = y;
  }

  if (currentLine.length > 0) lines.push(currentLine.join(" "));
  return lines
    .join("\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function extractPdfTextPages(buffer) {
  const pdf = await getDocument({
    data: new Uint8Array(buffer),
    disableWorker: true,
    isEvalSupported: false,
    useSystemFonts: true
  }).promise;
  const pageTextRanges = [];
  const pageImageManifest = [];
  const pageCount = pdf.numPages;
  let extractedText = "";

  try {
    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1 });
      const content = await page.getTextContent({
        disableCombineTextItems: false,
        normalizeWhitespace: true
      });
      const pageText = normalizePdfPageText(content.items);
      if (extractedText) extractedText += "\n\n";
      const startOffset = extractedText.length;
      extractedText += pageText;
      const endOffset = extractedText.length;
      pageTextRanges.push({
        pageNumber,
        startOffset,
        endOffset,
        textLength: pageText.length,
        itemCount: content.items.length,
        preview: pageText.slice(0, 160)
      });
      pageImageManifest.push({
        pageNumber,
        width: Math.round(viewport.width),
        height: Math.round(viewport.height),
        rotation: page.rotate ?? 0
      });
      page.cleanup();
    }
  } finally {
    await pdf.destroy();
  }

  return {
    pageCount,
    extractedText,
    pageTextRanges,
    pageImageManifest,
    textBytes: Buffer.byteLength(extractedText, "utf8")
  };
}

async function uploadExamPostFile(payload) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    throw new Error("Supabase Storage 업로드에는 service role 설정이 필요합니다.");
  }
  const bucketId = "exam-submissions";
  await ensureStorageBucket(bucketId);
  const { mimeType, buffer } = parseDataUrl(payload.dataUrl);
  if (buffer.length > 20 * 1024 * 1024) throw new Error("파일은 20MB 이하만 업로드할 수 있습니다.");
  const fileName = String(payload.fileName || `submission-${Date.now()}`).trim();
  const storageFileName = getStorageSafeFileName(fileName, mimeType, "submission");
  const storagePath = [
    "exam-post",
    sanitizeStorageSegment(payload.examCycle, "cycle"),
    sanitizeStorageSegment(payload.schoolName, "school"),
    sanitizeStorageSegment(payload.grade, "grade"),
    sanitizeStorageSegment(payload.studentName, payload.studentId || "student"),
    sanitizeStorageSegment(payload.targetId, "target"),
    `${Date.now()}-${storageFileName}`
  ].join("/");

  await uploadStorageObjectWithBucketRetry(bucketId, storagePath, { contentType: mimeType, body: buffer });

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

async function uploadExamAnalysisSourceFile(payload) {
  if (!isSupabaseConfigured({ requireServiceRole: true })) {
    throw new Error("시험분석 PDF 업로드에는 Supabase service role 설정이 필요합니다.");
  }
  if (!payload?.dataUrl) throw new Error("업로드할 PDF 데이터가 없습니다.");

  const { mimeType, buffer } = parseDataUrl(payload.dataUrl);
  if (mimeType !== "application/pdf") {
    throw new Error("시험분석 원본은 PDF 파일만 업로드할 수 있습니다.");
  }
  if (buffer.length > 50 * 1024 * 1024) throw new Error("시험분석 PDF는 50MB 이하만 업로드할 수 있습니다.");
  const fileName = String(payload.fileName || `exam-analysis-${Date.now()}.pdf`).trim();
  const inferredSubject = inferExamAnalysisSubjectFromText(fileName);
  const requestedSubject = payload.subject ?? payload.analysisRun?.subject ?? payload.run?.subject;

  const runInput = {
    ...(payload.analysisRun ?? payload.run ?? {}),
    analysisRunId: payload.analysisRunId || payload.analysisRun?.analysisRunId || payload.run?.analysisRunId,
    examPrepId: payload.examPrepId ?? payload.analysisRun?.examPrepId ?? payload.run?.examPrepId,
    title: payload.title ?? payload.analysisRun?.title ?? payload.run?.title,
    schoolName: payload.schoolName ?? payload.analysisRun?.schoolName ?? payload.run?.schoolName,
    grade: payload.grade ?? payload.analysisRun?.grade ?? payload.run?.grade,
    subject: inferredSubject || sanitizeExamAnalysisSubject(requestedSubject),
    examTerm: payload.examTerm ?? payload.analysisRun?.examTerm ?? payload.run?.examTerm,
    examCycle: payload.examCycle ?? payload.analysisRun?.examCycle ?? payload.run?.examCycle,
    workflowStatus: "source_uploaded",
    skipEvent: true
  };
  const runResult = await upsertExamAnalysisRun(runInput);
  const analysisRun = runResult.analysisRun;
  if (!analysisRun?.analysisRunId) throw new Error("시험분석 작업을 생성하지 못했습니다.");

  const bucketId = examAnalysisSourceBucket;
  await ensureStorageBucket(bucketId, {
    fileSizeLimit: 50 * 1024 * 1024,
    allowedMimeTypes: ["application/pdf"]
  });

  const storageFileName = getStorageSafeFileName(fileName, mimeType, "exam-analysis");
  const storagePath = [
    "exam-analysis-v2",
    sanitizeStorageSegment(analysisRun.schoolName || payload.schoolName, "school"),
    sanitizeStorageSegment(analysisRun.grade || payload.grade, "grade"),
    sanitizeStorageSegment(analysisRun.analysisRunId, "run"),
    `${Date.now()}-${storageFileName}`
  ].join("/");

  await uploadStorageObjectWithBucketRetry(bucketId, storagePath, { contentType: mimeType, body: buffer });
  const signedUrl = await createSignedStorageUrl(bucketId, storagePath);
  const recorded = await recordExamAnalysisSourceUpload({
    analysisRunId: analysisRun.analysisRunId,
    sourceFile: {
      bucketId,
      storagePath,
      originalFileName: fileName,
      mimeType,
      sizeBytes: buffer.length
    }
  });

  return {
    ...recorded,
    sourceFile: {
      ...recorded.sourceFile,
      signedUrl
    }
  };
}

async function extractExamAnalysisSourceFile(sourceId) {
  if (!sourceId) throw new Error("sourceId가 필요합니다.");
  const { sourceFile } = await getExamAnalysisSource(sourceId);
  if (!sourceFile?.sourceId) throw new Error("PDF 원본 정보를 찾지 못했습니다.");
  if (sourceFile.mimeType && sourceFile.mimeType !== "application/pdf") {
    throw new Error("PDF 원본만 텍스트 추출할 수 있습니다.");
  }

  await updateExamAnalysisSource(sourceId, { extractionStatus: "extracting", error: "" });
  await recordExamAnalysisEvent({
    analysisRunId: sourceFile.analysisRunId,
    eventType: "source_extract_started",
    message: "PDF 텍스트 추출을 시작했습니다.",
    payload: { sourceId }
  });

  try {
    const buffer = await downloadStorageObject(sourceFile.bucketId || examAnalysisSourceBucket, sourceFile.storagePath);
    const extraction = await extractPdfTextPages(buffer);
    extraction.quality = buildExtractionQuality(extraction);
    const inferredSubject = inferExamAnalysisSubjectFromText(`${sourceFile.originalFileName}\n${extraction.extractedText.slice(0, 2000)}`);
    const result = await saveExamAnalysisSourceExtraction(sourceId, extraction);
    if (inferredSubject && sourceFile.analysisRunId) {
      const runResult = await updateExamAnalysisRun(sourceFile.analysisRunId, { subject: inferredSubject });
      result.analysisRun = runResult.analysisRun ?? result.analysisRun;
    }
    return { ...result, extraction };
  } catch (error) {
    await updateExamAnalysisSource(sourceId, { extractionStatus: "failed", error: error.message });
    await recordExamAnalysisEvent({
      analysisRunId: sourceFile.analysisRunId,
      eventType: "source_extract_failed",
      message: "PDF 텍스트 추출에 실패했습니다.",
      payload: { sourceId, error: error.message }
    });
    throw error;
  }
}

async function verifyExamAnalysisSourceFileWithAi(sourceId) {
  if (!sourceId) throw new Error("sourceId가 필요합니다.");
  const { sourceFile } = await getExamAnalysisSource(sourceId);
  if (!sourceFile?.sourceId) throw new Error("PDF 원본 정보를 찾지 못했습니다.");
  const buffer = await downloadStorageObject(sourceFile.bucketId || examAnalysisSourceBucket, sourceFile.storagePath);
  await recordExamAnalysisEvent({
    analysisRunId: sourceFile.analysisRunId,
    eventType: "source_vision_check_started",
    message: "PDF 원본 AI 검증을 시작했습니다.",
    payload: { sourceId }
  });

  try {
    const visionCheck = await runPdfVisionCheck(sourceFile, buffer);
    const detail = await getExamAnalysisRun(sourceFile.analysisRunId);
    const previousSummary = detail.analysisRun?.extractionSummary ?? {};
    const runResult = await updateExamAnalysisRun(sourceFile.analysisRunId, {
      subject: visionCheck.subject || detail.analysisRun?.subject || "",
      extractionSummary: {
        ...previousSummary,
        visionCheck: {
          sourceId,
          ...visionCheck
        }
      }
    });
    await recordExamAnalysisEvent({
      analysisRunId: sourceFile.analysisRunId,
      eventType: "source_vision_check_completed",
      message: "PDF 원본 AI 검증이 완료되었습니다.",
      payload: {
        sourceId,
        provider: visionCheck.provider,
        model: visionCheck.model,
        readable: visionCheck.readable,
        pageCount: visionCheck.pageCount,
        questionCountCandidate: visionCheck.questionCountCandidate
      }
    });
    return {
      source: "supabase",
      analysisRun: runResult.analysisRun,
      sourceFile,
      visionCheck
    };
  } catch (error) {
    await recordExamAnalysisEvent({
      analysisRunId: sourceFile.analysisRunId,
      eventType: "source_vision_check_failed",
      message: "PDF 원본 AI 검증에 실패했습니다.",
      payload: { sourceId, error: error.message }
    });
    throw error;
  }
}

async function detectExamAnalysisQuestionBoundaries({ analysisRunId, sourceId } = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");
  if (!detail.questions?.length) throw new Error("고정 문항 행을 먼저 생성해 주세요.");
  const sourceFile = sourceId
    ? detail.sources?.find((source) => source.sourceId === sourceId)
    : detail.sources?.[0];
  if (!sourceFile?.sourceId) throw new Error("PDF 원본 정보를 찾지 못했습니다.");
  const buffer = await downloadStorageObject(sourceFile.bucketId || examAnalysisSourceBucket, sourceFile.storagePath);

  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "question_boundary_detect_started",
    message: "문항 경계 탐지를 시작했습니다.",
    payload: { sourceId: sourceFile.sourceId, questionCount: detail.questions.length }
  });

  try {
    const boundaryResult = await runPdfQuestionBoundaryDetection(sourceFile, buffer, detail);
    const saved = await saveExamAnalysisQuestionBoundaries({
      analysisRunId,
      sourceId: sourceFile.sourceId,
      boundaryResult
    });
    return {
      ...saved,
      boundaryResult: {
        provider: boundaryResult.provider,
        model: boundaryResult.model,
        readable: boundaryResult.readable,
        detectedCount: boundaryResult.questionBoundaries.length,
        missingQuestionNumbers: boundaryResult.missingQuestionNumbers,
        overlapWarnings: boundaryResult.overlapWarnings,
        summary: boundaryResult.summary
      }
    };
  } catch (error) {
    await recordExamAnalysisEvent({
      analysisRunId,
      eventType: "question_boundary_detect_failed",
      message: "문항 경계 탐지에 실패했습니다.",
      payload: { sourceId: sourceFile.sourceId, error: error.message }
    });
    throw error;
  }
}

async function fillExamAnalysisQuestionRowsWithAi({ analysisRunId, sourceId } = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");
  if (!detail.questions?.length) throw new Error("고정 문항 행을 먼저 생성해 주세요.");
  const hasBoundaries = detail.questions.some((question) => question.sourceEvidence?.boundary?.pageStart || question.sourcePage);
  if (!hasBoundaries) throw new Error("문항 경계를 먼저 탐지해 주세요.");
  const sourceFile = sourceId
    ? detail.sources?.find((source) => source.sourceId === sourceId)
    : detail.sources?.[0];
  if (!sourceFile?.sourceId) throw new Error("PDF 원본 정보를 찾지 못했습니다.");
  const buffer = await downloadStorageObject(sourceFile.bucketId || examAnalysisSourceBucket, sourceFile.storagePath);

  await updateExamAnalysisRun(analysisRunId, { workflowStatus: "ai_fill_running" });
  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "question_rows_ai_fill_started",
    message: "AI 행 채움을 시작했습니다.",
    payload: { sourceId: sourceFile.sourceId, questionCount: detail.questions.length }
  });

  try {
    const rowFillResult = await runPdfQuestionRowFill(sourceFile, buffer, detail);
    const saved = await saveExamAnalysisQuestionRowFill({
      analysisRunId,
      sourceId: sourceFile.sourceId,
      rowFillResult
    });
    return {
      ...saved,
      rowFillResult: {
        provider: rowFillResult.provider,
        model: rowFillResult.model,
        returnedCount: rowFillResult.rows.length,
        missingQuestionNumbers: rowFillResult.missingQuestionNumbers,
        summary: rowFillResult.summary
      }
    };
  } catch (error) {
    await updateExamAnalysisRun(analysisRunId, { workflowStatus: "missing_audit_needed" });
    await recordExamAnalysisEvent({
      analysisRunId,
      eventType: "question_rows_ai_fill_failed",
      message: "AI 행 채움에 실패했습니다.",
      payload: { sourceId: sourceFile.sourceId, error: error.message }
    });
    throw error;
  }
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
      if (job.status !== "scheduled" || !isOsScheduledNotificationJob(job)) return false;
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
    const shouldClaim = job.status === "scheduled" && isOsScheduledNotificationJob(job);
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

  if (request.method === "GET" && requestUrl.pathname === "/api/exam-analysis-runs") {
    try {
      const analysisRunId = requestUrl.searchParams.get("id") || requestUrl.searchParams.get("analysisRunId");
      const result = analysisRunId
        ? await getExamAnalysisRun(analysisRunId)
        : await listExamAnalysisRuns({
            examPrepId: requestUrl.searchParams.get("examPrepId"),
            workflowStatus: requestUrl.searchParams.get("workflowStatus"),
            limit: requestUrl.searchParams.get("limit")
          });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertExamAnalysisRun(payload.analysisRun ?? payload.run ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/confirm-question-count") {
    try {
      const payload = await readJsonBody(request);
      const result = await confirmExamAnalysisQuestionCount({
        analysisRunId: payload.analysisRunId,
        questionCount: payload.questionCount,
        detectedQuestionEvidence: payload.detectedQuestionEvidence,
        detectedQuestionConfidence: payload.detectedQuestionConfidence,
        missingQuestionNumbers: payload.missingQuestionNumbers,
        confirmedBy: payload.confirmedBy || "teacher"
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/detect-question-boundaries") {
    try {
      const payload = await readJsonBody(request);
      const result = await detectExamAnalysisQuestionBoundaries({
        analysisRunId: payload.analysisRunId,
        sourceId: payload.sourceId
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/fill-question-rows") {
    try {
      const payload = await readJsonBody(request);
      const result = await fillExamAnalysisQuestionRowsWithAi({
        analysisRunId: payload.analysisRunId,
        sourceId: payload.sourceId
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/exam-analysis-runs") {
    try {
      const analysisRunId = requestUrl.searchParams.get("id") || requestUrl.searchParams.get("analysisRunId");
      if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
      const detail = await getExamAnalysisRun(analysisRunId);
      const storageResults = await Promise.allSettled(
        (detail.sources ?? []).map((source) => deleteStorageObject(source.bucketId || examAnalysisSourceBucket, source.storagePath))
      );
      const result = await deleteExamAnalysisRun(analysisRunId);
      sendJson(request, response, 200, {
        ok: true,
        ...result,
        deletedStorageCount: storageResults.filter((item) => item.status === "fulfilled" && item.value).length,
        storageDeleteErrors: storageResults
          .filter((item) => item.status === "rejected")
          .map((item) => item.reason?.message || String(item.reason))
      });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-source-files") {
    try {
      const payload = await readJsonBody(request, { limitBytes: 68 * 1024 * 1024 });
      const result = await uploadExamAnalysisSourceFile(payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-source-files/extract") {
    try {
      const payload = await readJsonBody(request);
      const result = await extractExamAnalysisSourceFile(payload.sourceId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-source-files/vision-check") {
    try {
      const payload = await readJsonBody(request);
      const result = await verifyExamAnalysisSourceFileWithAi(payload.sourceId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/exam-analysis-source-files/open") {
    try {
      const bucketId = requestUrl.searchParams.get("bucket") || examAnalysisSourceBucket;
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
      const result = await listNotificationJobs({ limit: requestUrl.searchParams.get("limit") || 300 });
      const includeResult = requestUrl.searchParams.get("includeResult") === "true";
      sendJson(request, response, 200, {
        ok: true,
        ...result,
        notificationJobs: includeResult
          ? result.notificationJobs
          : (result.notificationJobs ?? []).map(summarizeNotificationJobForList)
      });
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


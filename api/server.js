import http from "node:http";
import fs from "node:fs";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import {
  cancelNotificationJob,
  deleteLesson,
  deleteLessonsBefore,
  deleteDuplicateExamPrepRows,
  deleteExamPrepRow,
  deleteAcademyReminder,
  deleteAllMakeupTasks,
  deleteMakeupTask,
  deleteNotificationJob,
  deleteResourceMaterial,
  deleteSchoolEvent,
  getCoreDataStatus,
  getLessonStudentRecordForAttendance,
  getNotificationJob,
  listAttendanceCandidateStudents,
  listAcademyReminders,
  listAppState,
  listClassTemplates,
  listExamPrepRows,
  listHomeworks,
  listLessons,
  listLessonStudentRecords,
  listLessonStudentRecordsForLessons,
  listMakeupTasks,
  listNotificationJobs,
  listResourceMaterials,
  listSchoolEvents,
  listSpecialLectureApplications,
  listSpecialLectureEnrollments,
  listStudentIntakeApplicants,
  listStudents,
  listTestAttempts,
  listTestSessions,
  patchLessonStudentRecordNotificationStatus,
  pruneStaleLessonStudentRecords,
  recordAttendanceEvent,
  claimNotificationJob,
  seedCoreData,
  upsertAppState,
  upsertAcademyReminder,
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
  upsertSpecialLectureApplication,
  upsertSpecialLectureEnrollment,
  upsertSpecialLectureEnrollments,
  upsertStudentIntakeApplicant,
  upsertStudent,
  upsertStudents,
  upsertLessonStudentRecord,
  upsertTestSessionWithAttempts,
  deleteTestSession
} from "./routes/coreData.js";
import crypto from "node:crypto";
import { loadEnvFile } from "./lib/loadEnv.js";
import { isSupabaseConfigured, listRows, upsertRows } from "./lib/supabaseRest.js";
import { getAiStatus, polishLessonComment } from "./routes/commentPolish.js";
import {
  getAssignmentStatusMessage,
  getAssignmentStatusParentMessage,
  getAssignmentStatusStudentMessage,
  normalizeAssignmentStatusValue
} from "../src/domains/lessons/assignmentStatus.js";
import { applyStudentScheduleToLesson } from "../src/shared/utils/studentSchedule.js";
import { isSupplementScheduleForLessonComment } from "../src/domains/notifications/supplementSchedule.js";
import { normalizeSpecialLectureTallySessionRequests } from "../src/domains/specialLectures/tallySessionRequests.js";
import {
  confirmExamAnalysisQuestionCount,
  deleteExamAnalysisRun,
  deleteExamAnalysisSource,
  examAnalysisSourceBucket,
  getExamAnalysisRun,
  getExamAnalysisSource,
  listExamAnalysisRuns,
  recordExamAnalysisEvent,
  recordExamAnalysisSourceUpload,
  saveExamAnalysisSourceExtraction,
  saveExamAnalysisQuestionBoundaries,
  saveExamAnalysisQuestionRowFill,
  saveExamAnalysisQuestionTeacherReviews,
  updateExamAnalysisRun,
  updateExamAnalysisSource,
  upsertExamAnalysisRun
} from "./routes/examAnalysisPipeline.js";
import {
  cancelSolapiReservationGroup,
  getNotificationStatus,
  listSolapiGroups,
  listSolapiMessages,
  sendAttendanceAlimtalk,
  sendDailyReportAlimtalk,
  sendLessonCommentAlimtalk,
  sendSlackDailyScheduleSummary,
  sendStudentScheduleReminderAlimtalk
} from "./routes/notifications.js";

loadEnvFile();

const ssenTypeIndex = JSON.parse(
  fs.readFileSync(new URL("./data/ssenTypeIndex.json", import.meta.url), "utf8")
);
const ssenSubjectNames = [...new Set(ssenTypeIndex
  .map((row) => String(row.subject || "").trim())
  .filter(Boolean))];
const ssenSubjectNameSet = new Set(ssenSubjectNames);
const ssenSubjectByTypeCode = new Map(ssenTypeIndex
  .filter((row) => row.typeCode && row.subject)
  .map((row) => [String(row.typeCode).trim(), String(row.subject).trim()]));

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

function getKoreaDateStringForAttendance(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function formatKoreaAttendanceTime(date = new Date()) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}

function normalizeAttendanceTime(value = "") {
  const text = String(value ?? "").trim();
  const match = text.match(/(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const hour = Math.max(0, Math.min(23, Number(match[1]) || 0));
  const minute = Math.max(0, Math.min(59, Number(match[2]) || 0));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function createKoreaIsoForAttendance(dateValue, timeValue, fallbackIso = new Date().toISOString()) {
  const time = normalizeAttendanceTime(timeValue);
  if (!dateValue || !time) return fallbackIso;
  const date = new Date(`${dateValue}T${time}:00+09:00`);
  return Number.isNaN(date.getTime()) ? fallbackIso : date.toISOString();
}

function createLessonStudentRecordIdForAttendance(lessonId, studentId) {
  return `lsr_${String(lessonId || "").replace("lesson_", "")}_${studentId}`;
}

function sortLessonsByStartTime(left = {}, right = {}) {
  return String(left.startTime || "").localeCompare(String(right.startTime || ""));
}

function parseAttendanceClockMinutes(value = "") {
  const match = String(value ?? "").match(/^(\d{1,2}):(\d{2})/);
  if (!match) return null;
  return (Number(match[1]) || 0) * 60 + (Number(match[2]) || 0);
}

function getKoreaClockMinutesForAttendance(date = new Date()) {
  const time = formatKoreaAttendanceTime(date);
  return parseAttendanceClockMinutes(time) ?? 0;
}

function getAttendanceLessonTimeDistance(lesson = {}, currentMinutes = 0) {
  const startMinutes = parseAttendanceClockMinutes(lesson.startTime);
  const endMinutes = parseAttendanceClockMinutes(lesson.endTime);
  if (startMinutes === null && endMinutes === null) return Number.MAX_SAFE_INTEGER;
  if (startMinutes !== null && endMinutes !== null && currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
    return 0;
  }
  const distances = [startMinutes, endMinutes]
    .filter((value) => value !== null)
    .map((value) => Math.abs(currentMinutes - value));
  return Math.min(...distances);
}

function createAttendanceLessonCandidate(lesson = {}, student = {}, currentMinutes = 0) {
  const matchedByStudent = (lesson.studentIds ?? []).includes(student.studentId);
  const matchedByClass = Boolean(lesson.classTemplateId && lesson.classTemplateId === student.defaultClassTemplateId);
  if (!matchedByStudent && !matchedByClass) return null;
  const studentLesson = applyStudentScheduleToLesson(lesson, student);
  return {
    attendanceLesson: studentLesson,
    distance: getAttendanceLessonTimeDistance(studentLesson, currentMinutes),
    endMinutes: parseAttendanceClockMinutes(studentLesson.endTime),
    lesson,
    matchedByClass,
    matchedByStudent,
    startMinutes: parseAttendanceClockMinutes(studentLesson.startTime)
  };
}

function getAttendanceLessonCandidatesForStudent(lessons = [], student = {}, now = new Date()) {
  const currentMinutes = getKoreaClockMinutesForAttendance(now);
  const candidates = new Map();
  lessons.forEach((lesson) => {
    const candidate = createAttendanceLessonCandidate(lesson, student, currentMinutes);
    if (!candidate) return;
    const existing = candidates.get(lesson.lessonId);
    candidates.set(lesson.lessonId, {
      ...candidate,
      matchedByStudent: Boolean(existing?.matchedByStudent || candidate.matchedByStudent),
      matchedByClass: Boolean(existing?.matchedByClass || candidate.matchedByClass)
    });
  });
  return [...candidates.values()];
}

function selectAttendanceLessonForStudent(lessons = [], student = {}, now = new Date()) {
  const currentMinutes = getKoreaClockMinutesForAttendance(now);
  return getAttendanceLessonCandidatesForStudent(lessons, student, now)
    .sort((left, right) => {
      const timeDistance = getAttendanceLessonTimeDistance(left.attendanceLesson, currentMinutes) - getAttendanceLessonTimeDistance(right.attendanceLesson, currentMinutes);
      if (timeDistance !== 0) return timeDistance;
      if (left.matchedByStudent !== right.matchedByStudent) return left.matchedByStudent ? -1 : 1;
      return sortLessonsByStartTime(left.attendanceLesson, right.attendanceLesson);
    })[0]?.lesson ?? null;
}

function selectLastAttendanceLessonCandidate(candidates = []) {
  return [...candidates]
    .sort((left, right) => {
      const leftEnd = left.endMinutes ?? left.startMinutes ?? -1;
      const rightEnd = right.endMinutes ?? right.startMinutes ?? -1;
      if (leftEnd !== rightEnd) return rightEnd - leftEnd;
      return sortLessonsByStartTime(right.attendanceLesson, left.attendanceLesson);
    })[0] ?? null;
}

function createAttendanceRecordByLessonId(records = [], studentId = "") {
  const byLessonId = new Map();
  records
    .filter((record) => record.studentId === studentId)
    .forEach((record) => {
      if (record.lessonId && !byLessonId.has(record.lessonId)) byLessonId.set(record.lessonId, record);
    });
  return byLessonId;
}

function createAttendanceLessonCandidatePayloads(candidates = [], recordByLessonId = new Map(), latestLessonId = "") {
  return [...candidates]
    .sort((left, right) => sortLessonsByStartTime(left.attendanceLesson, right.attendanceLesson))
    .map((candidate) => {
      const record = recordByLessonId.get(candidate.lesson.lessonId) ?? null;
      return {
        attendanceLesson: candidate.attendanceLesson,
        hasArrival: hasAttendanceArrival(record),
        hasCheckout: hasAttendanceCheckout(record),
        isLatest: candidate.lesson.lessonId === latestLessonId,
        lesson: candidate.lesson,
        matchedByClass: candidate.matchedByClass,
        matchedByStudent: candidate.matchedByStudent,
        record
      };
    });
}

function findAttendanceRecord(records = [], lessonId, studentId) {
  return records.find((record) => record.lessonId === lessonId && record.studentId === studentId) ?? null;
}

function hasAttendanceArrival(record = {}) {
  const status = record?.attendanceStatus || "pending";
  return Boolean(
    record?.checkInAt ||
    record?.checkInTime ||
    ["present", "late", "checkin"].includes(status)
  );
}

function hasAttendanceCheckout(record = {}) {
  return Boolean(record?.checkOutAt || record?.checkOutTime);
}

function calculateAttendanceLateMinutes(lesson = {}, now = new Date(), graceMinutes = 5) {
  if (!lesson?.date || !lesson?.startTime) return "";
  const start = new Date(`${lesson.date}T${String(lesson.startTime).slice(0, 5)}:00+09:00`);
  if (Number.isNaN(start.getTime())) return "";
  const diff = Math.floor((now.getTime() - start.getTime()) / 60000);
  return Math.max(0, diff - normalizeAttendanceGraceMinutes(graceMinutes));
}

function calculateAttendanceLateMinutesFromTime(lesson = {}, timeValue = "", graceMinutes = 5) {
  const startMinutes = parseAttendanceClockMinutes(lesson.startTime);
  const checkedMinutes = parseAttendanceClockMinutes(timeValue);
  if (startMinutes === null || checkedMinutes === null) return "";
  return Math.max(0, checkedMinutes - startMinutes - normalizeAttendanceGraceMinutes(graceMinutes));
}

function normalizeAttendanceGraceMinutes(value = 5) {
  const minutes = Number(value);
  return Number.isFinite(minutes) && minutes > 0 ? minutes : 5;
}

function isWithinAttendanceGrace(lateMinutes) {
  if (lateMinutes === "" || lateMinutes === undefined || lateMinutes === null) return false;
  const numericLateMinutes = Number(lateMinutes);
  return Number.isFinite(numericLateMinutes) && numericLateMinutes <= 0;
}

function normalizeAttendanceStatusForRecord(status = "present") {
  if (status === "checkin") return "present";
  if (status === "checkout") return "present";
  if (["pending", "present", "late", "absent", "excused"].includes(status)) return status;
  return "present";
}

function getAttendanceResultMode(eventType) {
  if (eventType === "checkout") return "checkOut";
  if (eventType === "completed") return "completed";
  return "checkIn";
}

async function tryRecordAttendanceEvent(event) {
  try {
    return await recordAttendanceEvent(event);
  } catch (error) {
    return {
      source: "not_recorded",
      attendanceEvent: {
        ...event,
        error: error.message
      }
    };
  }
}

function queueKioskAttendanceAlimtalk(attendanceEvent, alimtalkPayload) {
  Promise.resolve()
    .then(async () => {
      try {
        const alimtalkResult = await sendAttendanceAlimtalkOnce(alimtalkPayload);
        await tryRecordAttendanceEvent({
          ...attendanceEvent,
          alimtalkStatus: alimtalkResult?.duplicateSuppressed ? "duplicate_suppressed" : "sent",
          alimtalkResult,
          error: ""
        });
      } catch (error) {
        await tryRecordAttendanceEvent({
          ...attendanceEvent,
          alimtalkStatus: "failed",
          alimtalkResult: null,
          error: error.message
        });
      }
    })
    .catch((error) => console.error("Queued attendance Alimtalk failed.", error));
}

async function handleAttendanceCheck(payload = {}) {
  const source = String(payload.source || "kiosk");
  const now = new Date();
  const nowIso = now.toISOString();
  const todayString = getKoreaDateStringForAttendance(now);
  const attendanceDate = String(payload.date || todayString);
  const currentTime = formatKoreaAttendanceTime(now);
  const previewOnly = payload.previewOnly === true;
  const sendAlimtalk = !previewOnly && payload.sendAlimtalk !== false;

  const [studentsResult, lessonsResult] = await Promise.all([
    listAttendanceCandidateStudents({
      phoneLast4: payload.phoneLast4,
      studentId: payload.studentId
    }),
    listLessons({ date: attendanceDate })
  ]);
  const students = studentsResult.students ?? [];
  const lessons = (lessonsResult.lessons ?? []).filter((lesson) => lesson.date === attendanceDate && lesson.status !== "canceled");

  let student = null;
  if (payload.studentId) {
    student = students.find((item) => item.studentId === payload.studentId) ?? null;
  } else {
    const digits = compactPhoneNumber(payload.phoneLast4).slice(-4);
    if (digits.length !== 4) throw new Error("휴대폰 번호 뒤 4자리가 필요합니다.");
    const matchedStudents = students.filter((item) => {
      if ((item.status ?? "active") !== "active") return false;
      return compactPhoneNumber(item.studentPhone).slice(-4) === digits;
    });
    if (matchedStudents.length === 0) throw new Error("해당 학생 전화번호를 찾지 못했습니다.");
    if (matchedStudents.length > 1) throw new Error("같은 뒤 4자리 학생 전화번호가 2명 이상입니다. 선생님께 말씀해 주세요.");
    student = matchedStudents[0];
  }
  if (!student) throw new Error("학생을 찾지 못했습니다.");

  let attendanceCandidates = getAttendanceLessonCandidatesForStudent(lessons, student, now);
  let lesson = payload.lessonId
    ? lessons.find((item) => item.lessonId === payload.lessonId) ?? null
    : null;
  if (payload.lessonId && !lesson) {
    throw new Error(`${student.name} 학생의 ${attendanceDate} 수업을 찾지 못했습니다.`);
  }
  if (lesson && !attendanceCandidates.some((candidate) => candidate.lesson.lessonId === lesson.lessonId)) {
    const selectedCandidate = createAttendanceLessonCandidate(lesson, student, getKoreaClockMinutesForAttendance(now));
    if (selectedCandidate) attendanceCandidates = [...attendanceCandidates, selectedCandidate];
  }
  if (attendanceCandidates.length === 0 && !lesson) {
    throw new Error(`${student.name} 학생의 ${attendanceDate === todayString ? "오늘" : attendanceDate} 수업 일정이 없습니다.`);
  }

  const candidateLessons = attendanceCandidates.map((candidate) => candidate.lesson);
  const candidateRecordsResult = candidateLessons.length
    ? await listLessonStudentRecordsForLessons(candidateLessons)
    : { records: [] };
  const candidateRecordByLessonId = createAttendanceRecordByLessonId(candidateRecordsResult.records ?? [], student.studentId);
  const latestCandidate = selectLastAttendanceLessonCandidate(attendanceCandidates);
  const latestLessonId = latestCandidate?.lesson?.lessonId ?? "";
  const hasOpenAttendanceArrival = [...candidateRecordByLessonId.values()].some((record) => hasAttendanceArrival(record) && !hasAttendanceCheckout(record));
  const shouldCheckoutLatestLesson = source === "kiosk" && !payload.lessonId && hasOpenAttendanceArrival && latestCandidate;

  if (source === "kiosk" && !payload.lessonId && !shouldCheckoutLatestLesson && attendanceCandidates.length > 1) {
    const lessonCandidates = createAttendanceLessonCandidatePayloads(attendanceCandidates, candidateRecordByLessonId, latestLessonId);
    if (previewOnly) {
      return {
        action: "selectLesson",
        mode: "selectLesson",
        requiresLessonSelection: true,
        message: `${student.name} 학생의 오늘 수업을 선택해 주세요.`,
        checkedTime: currentTime,
        student,
        lesson: null,
        lessonCandidates,
        record: null,
        attendanceEvent: null,
        alimtalk: { status: "preview" }
      };
    }
    throw new Error(`${student.name} 학생의 오늘 수업이 2개 이상입니다. 먼저 수업을 선택해 주세요.`);
  }

  let forcedKioskEventType = "";
  if (shouldCheckoutLatestLesson) {
    lesson = latestCandidate.lesson;
    const latestRecord = candidateRecordByLessonId.get(lesson.lessonId) ?? null;
    forcedKioskEventType = hasAttendanceCheckout(latestRecord) ? "completed" : "checkout";
  }
  if (!lesson) {
    lesson = selectAttendanceLessonForStudent(lessons, student, now);
  }
  if (!lesson) throw new Error(`${student.name} 학생의 ${attendanceDate === todayString ? "오늘" : attendanceDate} 수업 일정이 없습니다.`);

  if (!(lesson.studentIds ?? []).includes(student.studentId)) {
    lesson = {
      ...lesson,
      studentIds: [...(lesson.studentIds ?? []), student.studentId]
    };
    if (!previewOnly) await upsertLesson(lesson);
  }
  const attendanceLesson = applyStudentScheduleToLesson(lesson, student);

  const recordId = createLessonStudentRecordIdForAttendance(lesson.lessonId, student.studentId);
  const recordResult = await getLessonStudentRecordForAttendance(lesson.lessonId, student.studentId);
  const records = recordResult.record ? [recordResult.record] : [];
  const existingRecord = findAttendanceRecord(records, lesson.lessonId, student.studentId);
  const hasArrival = hasAttendanceArrival(existingRecord);
  const hasCheckout = hasAttendanceCheckout(existingRecord);
  const manualCheckOutTime = normalizeAttendanceTime(payload.checkOutTime);

  let eventType = String(payload.action || "");
  if (!eventType) {
    if (source === "manual") {
      const manualStatus = String(payload.attendanceStatus || "present");
      eventType = manualStatus === "checkout" || manualCheckOutTime ? "checkout" : ["absent", "excused", "pending"].includes(manualStatus) ? "status" : "checkin";
    } else {
      eventType = hasCheckout ? "completed" : hasArrival ? "checkout" : "checkin";
      if (forcedKioskEventType) eventType = forcedKioskEventType;
    }
  }

  if (eventType === "completed") {
    const checkedTime = existingRecord?.checkOutTime || existingRecord?.checkInTime || currentTime;
    if (previewOnly) {
      return {
        action: "completed",
        mode: "completed",
        message: `${student.name} 이미 하원 처리되었습니다.`,
        checkedTime,
        student,
        lesson,
        record: existingRecord,
        attendanceEvent: null,
        alimtalk: { status: "preview" }
      };
    }
    const eventResult = await tryRecordAttendanceEvent({
      attendanceEventId: `attendance_event_${Date.now()}_${student.studentId}_completed`,
      lessonId: lesson.lessonId,
      studentId: student.studentId,
      lessonStudentRecordId: recordId,
      eventType: "completed",
      source,
      attendanceStatus: existingRecord?.attendanceStatus || "present",
      checkedAt: nowIso,
      checkInAt: existingRecord?.checkInAt || "",
      checkInTime: existingRecord?.checkInTime || "",
      checkOutAt: existingRecord?.checkOutAt || "",
      checkOutTime: existingRecord?.checkOutTime || "",
      attendanceReason: existingRecord?.attendanceReason || "",
      actorId: payload.actorId || "",
      recordBefore: existingRecord,
      recordAfter: existingRecord,
      alimtalkStatus: "skipped_completed"
    });
    return {
      action: "completed",
      mode: "completed",
      message: `${student.name} 이미 하원 처리되었습니다.`,
      checkedTime,
      student,
      lesson,
      record: existingRecord,
      attendanceEvent: eventResult.attendanceEvent,
      alimtalk: { status: "skipped_completed" }
    };
  }

  const manualCheckInTime = normalizeAttendanceTime(payload.checkInTime);
  const existingStatus = normalizeAttendanceStatusForRecord(existingRecord?.attendanceStatus || "pending");
  const lateMinutesFromCheckedTime = calculateAttendanceLateMinutesFromTime(
    attendanceLesson,
    manualCheckInTime || existingRecord?.checkInTime || currentTime,
    payload.lateGraceMinutes
  );
  const lateMinutes = payload.lateMinutes === "" || payload.lateMinutes === undefined || payload.lateMinutes === null
    ? eventType === "checkin"
      ? lateMinutesFromCheckedTime !== ""
        ? lateMinutesFromCheckedTime
        : calculateAttendanceLateMinutes(attendanceLesson, now, payload.lateGraceMinutes)
      : existingRecord?.lateMinutes ?? ""
    : payload.lateMinutes;

  let nextStatus = normalizeAttendanceStatusForRecord(payload.attendanceStatus || existingStatus || "present");
  let checkInTime = existingRecord?.checkInTime || "";
  let checkInAt = existingRecord?.checkInAt || "";
  let checkOutTime = existingRecord?.checkOutTime || "";
  let checkOutAt = existingRecord?.checkOutAt || "";

  if (eventType === "checkin") {
    nextStatus = payload.attendanceStatus
      ? normalizeAttendanceStatusForRecord(payload.attendanceStatus)
      : Number(lateMinutes) > 0
        ? "late"
        : "present";
    if (nextStatus === "late" && isWithinAttendanceGrace(lateMinutes)) {
      nextStatus = "present";
    }
    checkInTime = manualCheckInTime || checkInTime || currentTime;
    checkInAt = createKoreaIsoForAttendance(lesson.date, checkInTime, checkInAt || nowIso);
    checkOutTime = "";
    checkOutAt = "";
  } else if (eventType === "checkout") {
    nextStatus = ["present", "late"].includes(existingStatus) ? existingStatus : "present";
    checkInTime = manualCheckInTime || checkInTime;
    checkInAt = checkInTime ? createKoreaIsoForAttendance(lesson.date, checkInTime, checkInAt || nowIso) : checkInAt;
    checkOutTime = manualCheckOutTime || checkOutTime || currentTime;
    checkOutAt = createKoreaIsoForAttendance(lesson.date, checkOutTime, checkOutAt || nowIso);
    const checkoutLateMinutes = calculateAttendanceLateMinutesFromTime(attendanceLesson, checkInTime, payload.lateGraceMinutes);
    if (nextStatus === "late" && isWithinAttendanceGrace(checkoutLateMinutes)) {
      nextStatus = "present";
    }
  } else if (["status", "absent", "excused", "pending"].includes(eventType)) {
    nextStatus = normalizeAttendanceStatusForRecord(payload.attendanceStatus || eventType);
    if (["absent", "excused", "pending"].includes(nextStatus)) {
      checkInTime = "";
      checkInAt = "";
      checkOutTime = "";
      checkOutAt = "";
    }
  }
  const persistedLateMinutes = nextStatus === "late" ? lateMinutes : "";

  const nextRecord = {
    ...(existingRecord ?? {}),
    lessonStudentRecordId: recordId,
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    attendanceStatus: nextStatus,
    attendanceReason: payload.attendanceReason ?? existingRecord?.attendanceReason ?? "",
    lateMinutes: persistedLateMinutes,
    checkInAt,
    checkInTime,
    checkOutAt,
    checkOutTime,
    updatedBy: source === "manual" ? "manual_attendance" : "attendance_kiosk",
    updatedAt: nowIso
  };
  const previewCheckedTime = eventType === "checkout" ? nextRecord.checkOutTime : nextRecord.checkInTime;
  if (previewOnly) {
    return {
      action: eventType,
      mode: getAttendanceResultMode(eventType),
      message: `${student.name} ${eventType === "checkout" ? "하원" : nextStatus === "late" ? "지각" : nextStatus === "absent" ? "결석" : "등원"}`,
      checkedTime: previewCheckedTime,
      student,
      lesson,
      record: nextRecord,
      attendanceEvent: null,
      alimtalk: { status: "preview" }
    };
  }

  const savedResult = await upsertLessonStudentRecord(nextRecord);
  const savedRecord = savedResult.record;

  const alimtalkPayload = {
    attendanceStatus: eventType === "checkout" ? "checkout" : nextStatus === "present" ? "checkin" : nextStatus,
    checkedAt: eventType === "checkout" ? savedRecord.checkOutAt || nowIso : savedRecord.checkInAt || nowIso,
    checkInTime: savedRecord.checkInTime,
    checkOutTime: savedRecord.checkOutTime,
    lateMinutes: savedRecord.lateMinutes,
    lessonId: lesson.lessonId,
    lessonName: lesson.className,
    parentPhone: student.parentPhone,
    reason: savedRecord.attendanceReason,
    studentId: student.studentId,
    studentName: student.name
  };

  const shouldQueueKioskAlimtalk = sendAlimtalk && source === "kiosk";
  let alimtalkStatus = shouldQueueKioskAlimtalk ? "queued" : "skipped";
  let alimtalkResult = null;
  let alimtalkError = "";
  if (sendAlimtalk && !shouldQueueKioskAlimtalk) {
    try {
      alimtalkResult = await sendAttendanceAlimtalkOnce(alimtalkPayload);
      alimtalkStatus = alimtalkResult?.duplicateSuppressed ? "duplicate_suppressed" : "sent";
    } catch (error) {
      alimtalkStatus = "failed";
      alimtalkError = error.message;
    }
  }

  const checkedAt = eventType === "checkout" ? savedRecord.checkOutAt : savedRecord.checkInAt;
  const checkedTime = eventType === "checkout" ? savedRecord.checkOutTime : savedRecord.checkInTime;
  const attendanceEventPayload = {
    attendanceEventId: `attendance_event_${Date.now()}_${student.studentId}_${eventType}`,
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    lessonStudentRecordId: recordId,
    eventType,
    source,
    attendanceStatus: savedRecord.attendanceStatus,
    checkedAt,
    checkInAt: savedRecord.checkInAt,
    checkInTime: savedRecord.checkInTime,
    checkOutAt: savedRecord.checkOutAt,
    checkOutTime: savedRecord.checkOutTime,
    attendanceReason: savedRecord.attendanceReason,
    lateMinutes: savedRecord.lateMinutes,
    actorId: payload.actorId || "",
    recordBefore: existingRecord,
    recordAfter: savedRecord,
    alimtalkStatus,
    alimtalkResult,
    error: alimtalkError
  };
  const eventResult = await tryRecordAttendanceEvent(attendanceEventPayload);
  if (shouldQueueKioskAlimtalk) {
    queueKioskAttendanceAlimtalk(attendanceEventPayload, alimtalkPayload);
  }

  return {
    action: eventType,
    mode: getAttendanceResultMode(eventType),
    message: `${student.name} ${eventType === "checkout" ? "하원" : nextStatus === "late" ? "지각" : nextStatus === "absent" ? "결석" : "등원"}`,
    checkedTime,
    student,
    lesson,
    record: savedRecord,
    attendanceEvent: eventResult.attendanceEvent,
    alimtalk: {
      status: alimtalkStatus,
      result: alimtalkResult,
      error: alimtalkError,
      queued: shouldQueueKioskAlimtalk
    }
  };
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
  if (job.provider === "solapi") return false;
  if (job.provider === "academy-os-reserving" || job.result?.reservationPending) return false;
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

function getTallyScalarText(value) {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value)) return value.map(getTallyScalarText).filter(Boolean).join(", ");
  if (typeof value === "object") {
    return compactText(value.value ?? value.text ?? value.answer ?? value.label ?? value.name ?? value.id ?? "");
  }
  return compactText(value);
}

function getTallyFieldText(field) {
  if (!field) return "";
  const fieldValue = field.value ?? field.answer ?? field.text ?? field.response;
  if (Array.isArray(fieldValue)) {
    const optionById = new Map((field.options ?? []).map((option) => [option.id, option.text]));
    return fieldValue.map((value) => optionById.get(value) ?? getTallyScalarText(value)).filter(Boolean).join(", ");
  }
  if (fieldValue && typeof fieldValue === "object") {
    return getTallyScalarText(fieldValue) || JSON.stringify(fieldValue);
  }
  return compactText(fieldValue);
}

function getTallyFieldLabel(field = {}) {
  return compactText(field.label ?? field.title ?? field.question ?? field.key ?? field.name);
}

function findTallyField(fields, patterns) {
  return fields.find((field) => patterns.some((pattern) => pattern.test(getTallyFieldLabel(field))));
}

function normalizeTallyLookupKey(value = "") {
  return compactText(value).toLowerCase().replaceAll(/[\s_-]+/g, "");
}

function getTallyObjectValue(source, names = []) {
  if (!source || typeof source !== "object" || Array.isArray(source)) return "";
  const normalizedNames = names.map(normalizeTallyLookupKey).filter(Boolean);
  for (const [key, value] of Object.entries(source)) {
    if (normalizedNames.includes(normalizeTallyLookupKey(key))) return getTallyScalarText(value);
  }
  return "";
}

function getTallyArrayValue(source, names = []) {
  if (!Array.isArray(source)) return "";
  const normalizedNames = names.map(normalizeTallyLookupKey).filter(Boolean);
  const matchedItem = source.find((item) => item && typeof item === "object" && [
    item.key,
    item.name,
    item.id,
    item.label,
    item.title,
    item.question
  ].some((value) => normalizedNames.includes(normalizeTallyLookupKey(value))));
  return getTallyFieldText(matchedItem);
}

function getTallyCollectionValue(source, names = []) {
  return getTallyObjectValue(source, names) || getTallyArrayValue(source, names);
}

function getSearchParamValueFromUrl(value = "", names = []) {
  const rawUrl = compactText(value);
  if (!rawUrl || !rawUrl.includes("?")) return "";
  const normalizedNames = names.map(normalizeTallyLookupKey).filter(Boolean);
  try {
    const parsedUrl = new URL(rawUrl, "https://academy-os.local");
    for (const [key, paramValue] of parsedUrl.searchParams.entries()) {
      if (normalizedNames.includes(normalizeTallyLookupKey(key))) return compactText(paramValue);
    }
  } catch {
    const query = rawUrl.split("?")[1] ?? "";
    const searchParams = new URLSearchParams(query);
    for (const [key, paramValue] of searchParams.entries()) {
      if (normalizedNames.includes(normalizeTallyLookupKey(key))) return compactText(paramValue);
    }
  }
  return "";
}

function getTallyUrlPayloadValue(source, names = [], depth = 0) {
  if (!source || depth > 2) return "";
  if (typeof source === "string") return getSearchParamValueFromUrl(source, names);
  if (Array.isArray(source)) {
    for (const item of source) {
      const value = getTallyUrlPayloadValue(item, names, depth + 1);
      if (value) return value;
    }
    return "";
  }
  if (typeof source !== "object") return "";
  for (const [key, value] of Object.entries(source)) {
    if (typeof value === "string" && /(url|href|link|refer|page|source)/i.test(key)) {
      const urlValue = getSearchParamValueFromUrl(value, names);
      if (urlValue) return urlValue;
    }
    if (value && typeof value === "object") {
      const nestedValue = getTallyUrlPayloadValue(value, names, depth + 1);
      if (nestedValue) return nestedValue;
    }
  }
  return "";
}

function getTallyPayloadValue(data = {}, names = []) {
  const sources = [
    data,
    data.hiddenFields,
    data.hidden_fields,
    data.hidden,
    data.variables,
    data.query,
    data.queryParams,
    data.query_params,
    data.urlParams,
    data.url_params,
    data.metadata,
    data.meta,
    data.tracking,
    data.trackingParams,
    data.tracking_params
  ];
  for (const source of sources) {
    const directValue = getTallyCollectionValue(source, names);
    if (directValue) return directValue;
  }

  const fields = Array.isArray(data.fields) ? data.fields : [];
  const normalizedNames = names.map(normalizeTallyLookupKey).filter(Boolean);
  const matchedField = fields.find((field) => [
    field.key,
    field.name,
    field.id,
    field.label,
    field.title
  ].some((value) => normalizedNames.includes(normalizeTallyLookupKey(value))));
  return getTallyFieldText(matchedField) || getTallyUrlPayloadValue(data, names);
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

function normalizeTallyRequestedSessionPlans(fields = []) {
  const entries = fields.map((field) => ({
    label: getTallyFieldLabel(field),
    value: getTallyFieldText(field)
  }));
  return normalizeSpecialLectureTallySessionRequests(entries);
}

function normalizeSpecialLectureApplicationPayload(payload = {}) {
  const data = payload.data ?? payload;
  const fields = Array.isArray(data.fields) ? data.fields : [];
  const getValue = (patterns) => getTallyFieldText(findTallyField(fields, patterns));
  const getHidden = (names) => getTallyPayloadValue(data, names);
  const submissionId = compactText(data.submissionId ?? data.responseId ?? payload.eventId);
  const specialLectureGuideId = getHidden([
    "specialLectureId",
    "special_lecture_id",
    "specialLectureGuideId",
    "special_lecture_guide_id",
    "specialLecture",
    "special_lecture"
  ]);
  const guideSlug = getHidden([
    "guideId",
    "guide_id",
    "guide_slug",
    "guideSlug",
    "guide",
    "specialLectureSlug",
    "special_lecture_slug",
    "slug"
  ]);
  const campaign = getHidden(["campaign"]);
  const studentName = getValue([/학생.*이름/i, /^이름$/i, /성명/i, /student.*name/i, /name/i]) || getHidden(["studentName", "name"]);
  return {
    applicationId: submissionId ? `special_lecture_tally_${submissionId}` : `special_lecture_tally_${Date.now()}`,
    specialLectureGuideId,
    guideSlug,
    campaign,
    source: "tally",
    sourceSubmissionId: submissionId,
    formId: compactText(data.formId),
    formName: compactText(data.formName),
    status: "received",
    studentName,
    schoolName: getValue([/학교/i, /school/i]) || getHidden(["schoolName", "school"]),
    grade: normalizeGradeLabel(getValue([/학년/i, /grade/i]) || getHidden(["grade"])),
    studentPhone: normalizePhone(getValue([/학생.*전화/i, /학생.*휴대/i, /student.*phone/i]) || getHidden(["studentPhone"])),
    parentPhone: normalizePhone(getValue([/학부모.*전화/i, /보호자.*전화/i, /부모.*전화/i, /parent.*phone/i, /guardian.*phone/i]) || getHidden(["parentPhone"])),
    selectedSession: getValue([/희망.*시간/i, /신청.*시간/i, /신청.*반/i, /희망.{0,12}반/i, /회차/i, /요일/i]) || getHidden(["selectedSession", "session", "classTime"]),
    requestedSessionPlans: normalizeTallyRequestedSessionPlans(fields),
    memo: getValue([/요청/i, /문의/i, /메모/i, /기타/i, /특이/i]) || getHidden(["memo"]),
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
    "Access-Control-Allow-Headers": "Content-Type,Tally-Signature,Authorization",
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
    result?.response?.groupInfo?.groupId ??
    result?.response?.groupInfo?._id ??
    result?.response?.messageList?.[0]?.messageId ??
    result?.response?.failedMessageList?.[0]?.messageId ??
    result?.response?.groupId ??
    result?.response?.group_id ??
    result?.response?.[0]?.messageId ??
    result?.response?.[0]?.message_id ??
    ""
  );
}

function getKoreaDayUtcRange(dateText = "") {
  const date = String(dateText || "").trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return { startIso: "", endIso: "" };
  const start = new Date(`${date}T00:00:00+09:00`);
  const end = new Date(start.getTime() + 24 * 60 * 60 * 1000);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return { startIso: "", endIso: "" };
  return { startIso: start.toISOString(), endIso: end.toISOString() };
}

function getNotificationJobQueryFilters(requestUrl) {
  const { startIso, endIso } = getKoreaDayUtcRange(requestUrl.searchParams.get("date") || "");
  return {
    lessonId: requestUrl.searchParams.get("lessonId") || "",
    scheduledFrom: requestUrl.searchParams.get("scheduledFrom") || startIso,
    scheduledTo: requestUrl.searchParams.get("scheduledTo") || endIso,
    status: requestUrl.searchParams.get("status") || ""
  };
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
  "homeworkFollowupNotice",
  "testResult",
  "supplementSchedule",
  "message",
  "commentBodyOverride",
  "reportBody"
];
const attendanceLabelMap = {
  absent: "결석",
  checkin: "등원",
  checkout: "하원",
  excused: "인정결석",
  late: "지각",
  pending: "대기",
  present: "등원"
};

function isLessonCommentNotificationJob(job = {}) {
  return lessonCommentNotificationTypes.has(job.notificationType);
}

function shouldRefreshLessonCommentJobBeforeSend(job = {}) {
  return Boolean(job.lessonId && job.studentId && isLessonCommentNotificationJob(job));
}

function normalizeNotificationText(value = "") {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function getNotificationTextKey(value = "") {
  return normalizeNotificationText(value).replace(/\s+/g, " ");
}

function compactDuplicateNotificationBlocks(value = "") {
  const seen = new Set();
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n+/g)
    .map(normalizeNotificationText)
    .filter(Boolean)
    .filter((block) => {
      const key = getNotificationTextKey(block);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join("\n\n");
}

function notificationTextIncludesBlock(text = "", block = "") {
  const textKey = getNotificationTextKey(text);
  const blockKey = getNotificationTextKey(block);
  return Boolean(blockKey && textKey.includes(blockKey));
}

function notificationTextIncludesEveryLine(text = "", lines = []) {
  const textKey = getNotificationTextKey(text);
  return lines.every((line) => {
    const lineKey = getNotificationTextKey(line);
    return !lineKey || textKey.includes(lineKey);
  });
}

function joinNotificationBlocks(blocks = []) {
  return blocks.map(normalizeNotificationText).filter(Boolean).join("\n\n");
}

function notificationLine(label, value) {
  const text = normalizeNotificationText(value);
  return text ? `${label} : ${text}` : "";
}

function notificationBlock(label, value) {
  const text = normalizeNotificationText(value);
  return text ? `${label}\n${text}` : "";
}

function getLessonStudentIdsForNotification(lesson = {}) {
  return Array.isArray(lesson.studentIds) ? lesson.studentIds : [];
}

function createLessonStudentRecordIdForNotification(lessonId = "", studentId = "") {
  return `lsr_${String(lessonId).replace(/^lesson_/, "")}_${studentId}`;
}

function createEmptyNotificationRecord(lesson = {}, student = {}) {
  return {
    lessonStudentRecordId: createLessonStudentRecordIdForNotification(lesson.lessonId, student.studentId),
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    attendanceStatus: "pending",
    attendanceReason: "",
    checkInAt: "",
    checkInTime: "",
    checkOutAt: "",
    checkOutTime: "",
    lateMinutes: "",
    lessonMaterial: "",
    lessonContent: "",
    lessonProgress: "",
    progress: "",
    preparationMemo: "",
    prepParentVisible: false,
    prepStudentVisible: false,
    teacherComment: "",
    studentComment: "",
    assignmentStatus: "",
    incompleteHomework: "",
    notificationMutedParent: false,
    notificationMutedStudent: false,
    notificationMutedReason: ""
  };
}

function getLatestNotificationRecord(context, lesson = {}, student = {}) {
  return (
    context.recordByLessonStudent.get(`${lesson.lessonId}|${student.studentId}`) ??
    createEmptyNotificationRecord(lesson, student)
  );
}

function getNotificationLessonMaterial(record = {}, student = {}) {
  return compactText(record.lessonMaterial) || compactText(student.textbook) || compactText(student.currentTextbook);
}

function getNotificationLessonContent(record = {}) {
  return compactText(record.lessonProgress) || compactText(record.progress) || compactText(record.lessonContent);
}

function getHomeworkAssignmentStatusForNotification(homework = {}, records = []) {
  const ownStatus = homework.assignmentStatus ?? homework.incompleteHomework ?? "";
  if (ownStatus) return ownStatus;
  const record = records.find(
    (item) => item.lessonId === (homework.checkedLessonId ?? homework.lessonId) && item.studentId === homework.studentId
  );
  return record?.assignmentStatus ?? record?.incompleteHomework ?? "";
}

function getAssignmentStatusForNotification(record = {}, previousHomework = null, records = []) {
  const recordStatus = normalizeAssignmentStatusValue(record.assignmentStatus ?? record.incompleteHomework ?? "");
  if (recordStatus) return recordStatus;

  const homeworkStatus = normalizeAssignmentStatusValue(
    getHomeworkAssignmentStatusForNotification(previousHomework ?? {}, records)
  );
  if (homeworkStatus) return homeworkStatus;

  if (previousHomework?.teacherStatus === "verified" || previousHomework?.status === "verified") return "complete_thorough";
  if (previousHomework?.teacherStatus === "missing") return "not_done";
  if (previousHomework?.teacherStatus === "unverified") return "not_checked";
  if (previousHomework?.teacherStatus === "partial") return "partial_50";
  return "";
}

function getLessonHomeworkForNotification(homeworks = [], lessons = [], lesson = {}, student = {}, homeworkType = "") {
  const directHomework =
    homeworks.find(
      (homework) =>
        homework.lessonId === lesson.lessonId &&
        homework.studentId === student.studentId &&
        homework.homeworkType === homeworkType
    ) ?? null;

  if (directHomework || homeworkType !== "previous") return directHomework;

  const previousLesson = [...lessons]
    .filter(
      (item) =>
        item.lessonId !== lesson.lessonId &&
        item.date < lesson.date &&
        getLessonStudentIdsForNotification(item).includes(student.studentId) &&
        (!lesson.classTemplateId || !item.classTemplateId || item.classTemplateId === lesson.classTemplateId)
    )
    .sort((a, b) => b.date.localeCompare(a.date) || b.startTime.localeCompare(a.startTime))[0];

  if (!previousLesson) return null;

  return (
    homeworks.find(
      (homework) =>
        homework.lessonId === previousLesson.lessonId &&
        homework.studentId === student.studentId &&
        homework.homeworkType === "next"
    ) ?? null
  );
}

function followUpTypeLabelForNotification(taskType) {
  return {
    homework_makeup: "숙제보충",
    absence_makeup: "결석 보강",
    retest: "재시험"
  }[taskType] ?? "보충관리";
}

function supplementMethodLabelForNotification(task = {}) {
  const defaultMethod = task.taskType === "homework_makeup" ? "arrival_makeup" : task.taskType === "absence_makeup" ? "onsite_makeup" : "onsite_retest";
  const methodId = task.supplementMethod || defaultMethod;
  return {
    arrival_makeup: "등원보충",
    next_lesson: "다음시간까지",
    onsite_makeup: "현장보강",
    onsite_retest: "현장 재시험",
    recorded_lecture: "녹강보강",
    stay_after: "남아서 하고 가기"
  }[methodId] ?? "방식 미정";
}

function getSupplementTaskSourceLabelForNotification(task = {}) {
  if (task.taskType === "homework_makeup") {
    const hasSavedHomeworkNote =
      Object.prototype.hasOwnProperty.call(task, "supplementHomeworkNote") ||
      (Array.isArray(task.supplementTeacherEditedFields) && task.supplementTeacherEditedFields.includes("supplementHomeworkNote"));
    return hasSavedHomeworkNote
      ? normalizeNotificationText(task.supplementHomeworkNote || "")
      : task.sourceLabel || "";
  }
  return task.sourceLabel || "";
}

function formatSupplementHomeworkCheckSentenceForNotification(task = {}) {
  const homeworkText = normalizeNotificationText(task.supplementHomeworkNote || "").replace(/\s+/g, " ").trim();
  if (!homeworkText) return "";
  return `지난 숙제 ${homeworkText}도 함께 확인하겠습니다.`;
}

function formatSupplementScheduleLineForNotification(task = {}) {
  const schedule = [task.scheduledDate, task.scheduledTime].filter(Boolean).join(" ");
  const method = supplementMethodLabelForNotification(task);
  const source = getSupplementTaskSourceLabelForNotification(task) || followUpTypeLabelForNotification(task.taskType);
  const homeworkCheckSentence = formatSupplementHomeworkCheckSentenceForNotification(task);
  const schedulePrefix = schedule ? `${schedule}에 ` : "";

  if (task.taskType === "homework_makeup") {
    const methodId = task.supplementMethod || "arrival_makeup";
    if (methodId === "next_lesson") {
      return `다음 수업 때 ${source}를 함께 확인하겠습니다.`;
    }
    return `${schedulePrefix}${method}으로 ${source} 보충을 진행하겠습니다.`;
  }

  if (task.taskType === "absence_makeup") {
    return `${schedulePrefix}${method}으로 ${source} 결석 보강을 진행하겠습니다.${homeworkCheckSentence ? ` ${homeworkCheckSentence}` : ""}`;
  }

  if (task.taskType === "retest") {
    return `${schedulePrefix}${source} 재시험을 진행하겠습니다.`;
  }

  return `${schedulePrefix}${source} 일정을 진행하겠습니다.`;
}

function getStudentSupplementSchedulesForNotification(makeupTasks = [], studentId = "", options = {}) {
  const { lesson = null, mode = "all" } = options;
  return makeupTasks
    .filter((task) => task.studentId === studentId && task.status !== "done")
    .filter((task) => (mode === "lesson_comment" ? isSupplementScheduleForLessonComment(task, lesson) : true))
    .filter((task) => task.scheduledDate || task.scheduledTime || task.notificationDraft || task.supplementHomeworkNote || task.sourceLabel)
    .sort((a, b) => `${a.scheduledDate || "9999-99-99"} ${a.scheduledTime || ""}`.localeCompare(`${b.scheduledDate || "9999-99-99"} ${b.scheduledTime || ""}`))
    .map(formatSupplementScheduleLineForNotification);
}

function getNotificationTestKindLabel(kind = "") {
  return {
    cumulative: "누적테스트",
    daily: "데일리테스트",
    unit: "단원테스트"
  }[kind] ?? "테스트";
}

function formatTestAttemptLineForNotification(session = {}, attempt = {}) {
  const title = compactText(session.testTitle) || getNotificationTestKindLabel(session.testKind);
  if (attempt.status === "not_taken") {
    const reason = compactText(attempt.notTakenReason);
    return `${title} · 미응시${reason ? ` (사유: ${reason})` : ""}`;
  }

  const correct = attempt.correctCount === "" || attempt.correctCount === null || attempt.correctCount === undefined
    ? ""
    : `${attempt.correctCount}문항 정답`;
  const total = session.totalQuestions === "" || session.totalQuestions === null || session.totalQuestions === undefined
    ? ""
    : `${session.totalQuestions}문항 중 `;
  return `${title} · ${correct ? `${total}${correct}` : "응시"}`;
}

function getStudentTestResultLinesForNotification(testSessions = [], testAttempts = [], lesson = {}, student = {}) {
  const sessionById = new Map(testSessions.map((session) => [session.testSessionId, session]));
  return testAttempts
    .filter((attempt) => attempt.studentId === student.studentId)
    .map((attempt) => ({ attempt, session: sessionById.get(attempt.testSessionId) }))
    .filter(({ session }) => session && session.testDate === lesson.date)
    .filter(({ session }) => {
      if (!session.classTemplateId) return true;
      return session.classTemplateId === lesson.classTemplateId;
    })
    .sort((a, b) => String(a.session.updatedAt || a.session.createdAt || "").localeCompare(String(b.session.updatedAt || b.session.createdAt || "")))
    .map(({ session, attempt }) => formatTestAttemptLineForNotification(session, attempt));
}

function getPreparationNoticeForNotification(record = {}, target = "parent") {
  const shouldInclude = target === "student" ? Boolean(record.prepStudentVisible) : Boolean(record.prepParentVisible);
  return shouldInclude ? removeHomeworkFollowupMemoLinesForNotification(record.preparationMemo) : "";
}

function getHomeworkFollowupNoticeForNotification(record = {}, target = "parent") {
  const shouldInclude = target === "student" ? Boolean(record.prepStudentVisible) : Boolean(record.prepParentVisible);
  return shouldInclude ? formatHomeworkFollowupMemoForNotification(record.preparationMemo) : "";
}

function parseHomeworkFollowupMemoLineForNotification(line = "") {
  const text = normalizeNotificationText(line);
  const match = text.match(/^(다음 수업 확인|수업 후 보충)\s*:\s*(.+)$/);
  if (!match) return null;
  const method = match[1] === "다음 수업 확인" ? "next_lesson" : "stay_after";
  return { method, text: match[2].trim() };
}

function formatHomeworkFollowupMemoForNotification(value = "") {
  const lines = normalizeNotificationText(value).split("\n").flatMap((line) => {
    const parsed = parseHomeworkFollowupMemoLineForNotification(line);
    if (!parsed) return [];
    if (parsed.method === "next_lesson") {
      return [`- 다음 수업 때 ${parsed.text}를 함께 확인하겠습니다.`];
    }
    if (parsed.method === "stay_after") {
      return [`- 오늘 수업 후 ${parsed.text} 보충을 마무리합니다.`];
    }
    return [];
  });
  return normalizeNotificationText(lines.join("\n"));
}

function removeHomeworkFollowupMemoLinesForNotification(value = "") {
  return normalizeNotificationText(value)
    .split("\n")
    .filter((line) => !parseHomeworkFollowupMemoLineForNotification(line))
    .join("\n")
    .trim();
}

function buildInitialNotificationComment({ audience, existingComment, record, supplementSchedules }) {
  const commentText = compactDuplicateNotificationBlocks(existingComment);
  const prepMemo = getPreparationNoticeForNotification(record, audience);
  const shouldAddPrepMemo = prepMemo && !notificationTextIncludesBlock(commentText, prepMemo);

  if (commentText) {
    return joinNotificationBlocks([
      shouldAddPrepMemo ? prepMemo : "",
      commentText
    ]);
  }

  return joinNotificationBlocks([
    shouldAddPrepMemo ? prepMemo : "",
    commentText
  ]);
}

function formatNotificationAttendance(record = {}) {
  const label = attendanceLabelMap[record.attendanceStatus ?? "pending"] ?? record.attendanceStatus ?? "";
  if (!["지각", "결석", "인정결석"].includes(label)) return label;

  const details = [];
  const reason = normalizeNotificationText(record.attendanceReason ?? record.reason ?? "");
  const time = compactText(record.checkInTime || record.checkedAt || record.checkInAt);
  if (reason) details.push(`사유: ${reason}`);
  if (label === "지각" && time) details.push(`등원 ${time}`);
  if (label === "지각" && !time && record.lateMinutes) details.push(`${record.lateMinutes}분 지각`);
  if ((label === "결석" || label === "인정결석") && time) details.push(`처리 ${time}`);
  return details.length ? `${label} (${details.join(" · ")})` : label;
}

function buildLatestLessonCommentPreview({ audience, commentBody, homeworkFollowupNotice = "", lesson, nextHomework, previousHomework, record, student, supplementSchedules, testResultLines = [] }) {
  const assignmentStatus = getAssignmentStatusForNotification(record, previousHomework);
  const commentText = normalizeNotificationText(commentBody);
  const homeworkFollowupText = normalizeNotificationText(homeworkFollowupNotice);
  const supplementText = supplementSchedules.length ? supplementSchedules.map((item) => `- ${item}`).join("\n") : "";
  const supplementAndFollowupText = [homeworkFollowupText, supplementText].filter(Boolean).join("\n");
  const testResultText = testResultLines.length ? testResultLines.map((item) => `- ${item}`).join("\n") : "";
  const commentHasSupplement =
    commentText.includes("보충/확인 안내") ||
    commentText.includes("보충일정") ||
    commentText.includes("보충 일정") ||
    supplementSchedules.some((item) => commentText.includes(item));
  const commentHasFollowup = homeworkFollowupText && notificationTextIncludesBlock(commentText, homeworkFollowupText);
  const supplementNotice =
    supplementAndFollowupText && (!commentHasSupplement || !commentHasFollowup)
      ? [commentHasFollowup ? "" : homeworkFollowupText, commentHasSupplement ? "" : supplementText].filter(Boolean).join("\n")
      : "";

  return joinNotificationBlocks([
    `${student.name} 학생 ${audience === "student" ? "안내" : "수업 안내"}`,
    notificationLine("🏫 출결", formatNotificationAttendance(record)),
    notificationLine("✅ 과제 상태", getAssignmentStatusMessage(audience, assignmentStatus)),
    notificationLine("📚 강의 교재", getNotificationLessonMaterial(record, student)),
    notificationLine("🧭 강의 내용", getNotificationLessonContent(record)),
    notificationLine("📘 지난 과제", previousHomework?.title ?? ""),
    notificationLine("➡️ 다음 과제", nextHomework?.title ?? ""),
    notificationBlock("📝 테스트", testResultText),
    notificationBlock("⭐ 보충/확인 안내", supplementNotice),
    notificationBlock("💬 코멘트", commentText),
    notificationLine("📘 수업", lesson.className)
  ]);
}

async function createLessonNotificationDispatchContext(jobs = []) {
  if (!jobs.some(shouldRefreshLessonCommentJobBeforeSend)) return null;
  const [
    lessonsResult,
    recordsResult,
    studentsResult,
    homeworksResult,
    makeupTasksResult,
    testSessionsResult,
    testAttemptsResult
  ] = await Promise.all([
    listLessons(),
    listLessonStudentRecords(),
    listStudents(),
    listHomeworks(),
    listMakeupTasks(),
    listTestSessions(),
    listTestAttempts()
  ]);
  const lessons = lessonsResult.lessons ?? [];
  const records = recordsResult.records ?? [];
  const students = studentsResult.students ?? [];

  return {
    homeworks: homeworksResult.homeworks ?? [],
    lessons,
    makeupTasks: makeupTasksResult.makeupTasks ?? [],
    records,
    students,
    testAttempts: testAttemptsResult.testAttempts ?? [],
    testSessions: testSessionsResult.testSessions ?? [],
    lessonById: new Map(lessons.map((lesson) => [lesson.lessonId, lesson])),
    recordByLessonStudent: new Map(records.map((record) => [`${record.lessonId}|${record.studentId}`, record])),
    studentById: new Map(students.map((student) => [student.studentId, student]))
  };
}

function cancelNotificationJobBeforeSend(job = {}, reason = "발송 대상이 아닙니다.", code = "not_dispatchable") {
  return {
    ...job,
    status: "canceled",
    provider: "academy-os",
    providerMessageId: "",
    error: reason,
    result: {
      ...(job.result && typeof job.result === "object" ? job.result : {}),
      dispatchCheckedAt: new Date().toISOString(),
      dispatchSkipped: true,
      dispatchSkippedCode: code,
      dispatchSkippedReason: reason
    },
    updatedAt: new Date().toISOString()
  };
}

function refreshLessonCommentJobBeforeSend(job = {}, context = null) {
  if (!shouldRefreshLessonCommentJobBeforeSend(job) || !context) {
    return { action: "send", job };
  }

  const lesson = context.lessonById.get(job.lessonId);
  if (!lesson || ["canceled", "deleted"].includes(lesson.status)) {
    return {
      action: "cancel",
      job: cancelNotificationJobBeforeSend(job, "수업이 삭제되었거나 취소되어 발송하지 않았습니다.", "lesson_missing")
    };
  }

  const lessonStudentIds = getLessonStudentIdsForNotification(lesson);
  if (!lessonStudentIds.includes(job.studentId)) {
    return {
      action: "cancel",
      job: cancelNotificationJobBeforeSend(job, "학생이 현재 수업 명단에서 제외되어 발송하지 않았습니다.", "student_removed_from_lesson")
    };
  }

  const student = context.studentById.get(job.studentId);
  if (!student || (student.status ?? "active") !== "active") {
    return {
      action: "cancel",
      job: cancelNotificationJobBeforeSend(job, "학생이 현재 활성 학생이 아니어서 발송하지 않았습니다.", "student_inactive")
    };
  }

  const audience = job.notificationType === "student_comment" || job.target === "student" ? "student" : "parent";
  const record = getLatestNotificationRecord(context, lesson, student);
  if (audience === "parent" && record.notificationMutedParent) {
    return {
      action: "cancel",
      job: cancelNotificationJobBeforeSend(job, "학부모 알림 제외 상태라 발송하지 않았습니다.", "parent_muted")
    };
  }
  if (audience === "student" && record.notificationMutedStudent) {
    return {
      action: "cancel",
      job: cancelNotificationJobBeforeSend(job, "학생 알림 제외 상태라 발송하지 않았습니다.", "student_muted")
    };
  }

  const previousHomework = getLessonHomeworkForNotification(context.homeworks, context.lessons, lesson, student, "previous");
  const nextHomework = getLessonHomeworkForNotification(context.homeworks, context.lessons, lesson, student, "next");
  const supplementSchedules = getStudentSupplementSchedulesForNotification(context.makeupTasks, student.studentId, {
    lesson,
    mode: "lesson_comment"
  });
  const testResultLines = getStudentTestResultLinesForNotification(context.testSessions, context.testAttempts, lesson, student);
  const sourceField = audience === "student" ? "studentComment" : "teacherComment";
  const commentBody = buildInitialNotificationComment({
    audience,
    existingComment: record[sourceField] ?? "",
    record,
    supplementSchedules
  });
  const homeworkFollowupNotice = getHomeworkFollowupNoticeForNotification(record, audience);
  const preparationNotice = getPreparationNoticeForNotification(record, audience);
  const assignmentStatus = getAssignmentStatusForNotification(record, previousHomework, context.records);
  const payload = {
    ...(job.payload ?? {}),
    academyName: (job.payload ?? {}).academyName || "으뜸수학 고태영T",
    assignmentStatus,
    assignmentStatusMessage: getAssignmentStatusMessage(audience, assignmentStatus),
    assignmentStatusParentMessage: getAssignmentStatusParentMessage(assignmentStatus),
    assignmentStatusStudentMessage: getAssignmentStatusStudentMessage(assignmentStatus),
    attendanceReason: record.attendanceReason ?? "",
    attendanceStatus: record.attendanceStatus ?? "pending",
    checkedAt: record.checkInAt || record.checkOutAt || "",
    checkInTime: record.checkInTime ?? "",
    checkOutTime: record.checkOutTime ?? "",
    commentBodyOverride: commentBody,
    homeworkFollowupNotice,
    lateMinutes: record.lateMinutes ?? "",
    lessonContent: getNotificationLessonContent(record),
    lessonDate: lesson.date,
    lessonId: lesson.lessonId,
    lessonMaterial: getNotificationLessonMaterial(record, student),
    lessonName: lesson.className,
    message: commentBody,
    nextHomework: nextHomework?.title ?? "",
    osScheduled: true,
    parentPhone: student.parentPhone,
    preparationNotice,
    previousHomework: previousHomework?.title ?? "",
    scheduledDate: job.scheduledAt,
    sendMode: "scheduled",
    studentId: student.studentId,
    studentName: student.name,
    studentPhone: student.studentPhone,
    supplementSchedule: supplementSchedules.join("\n"),
    testResult: testResultLines.join("\n"),
    target: audience
  };
  const previewBody = buildLatestLessonCommentPreview({
    audience,
    commentBody,
    homeworkFollowupNotice,
    lesson,
    nextHomework,
    previousHomework,
    record,
    student,
    supplementSchedules,
    testResultLines
  });

  return {
    action: "send",
    job: {
      ...job,
      lessonStudentRecordId: record.lessonStudentRecordId,
      payload,
      previewBody,
      recipient: audience === "student" ? student.studentPhone : student.parentPhone,
      target: audience,
      updatedAt: new Date().toISOString()
    }
  };
}

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

  if (job.notificationType === "student_reminder" || job.notificationType === "schedule_reminder") {
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
  if (job.notificationType === "student_reminder" || job.notificationType === "schedule_reminder") {
    return sendStudentScheduleReminderAlimtalk(payload);
  }
  return sendLessonCommentAlimtalk({
    ...payload,
    target: job.notificationType === "student_comment" || job.notificationType === "notice_student" ? "student" : payload.target ?? "parent"
  });
}

function getNotificationReservationFingerprint(job = {}) {
  const payload = job.payload ?? {};
  return JSON.stringify({
    notificationType: job.notificationType,
    previewBody: job.previewBody ?? "",
    recipient: job.recipient ?? "",
    scheduledAt: job.scheduledAt ?? "",
    target: job.target ?? "",
    payload: {
      assignmentStatus: payload.assignmentStatus ?? "",
      attendanceReason: payload.attendanceReason ?? payload.reason ?? "",
      attendanceStatus: payload.attendanceStatus ?? "",
      checkInTime: payload.checkInTime ?? "",
      checkOutTime: payload.checkOutTime ?? "",
      commentBodyOverride: payload.commentBodyOverride ?? "",
      lateMinutes: payload.lateMinutes ?? "",
      lessonContent: payload.lessonContent ?? "",
      lessonDate: payload.lessonDate ?? "",
      lessonMaterial: payload.lessonMaterial ?? "",
      message: payload.message ?? "",
      makeupTaskId: payload.makeupTaskId ?? "",
      nextHomework: payload.nextHomework ?? "",
      previousHomework: payload.previousHomework ?? "",
      reminderBody: payload.reminderBody ?? "",
      scheduleDate: payload.scheduleDate ?? "",
      scheduleTime: payload.scheduleTime ?? "",
      scheduleTitle: payload.scheduleTitle ?? "",
      scheduleType: payload.scheduleType ?? "",
      studentName: payload.studentName ?? "",
      target: payload.target ?? ""
    }
  });
}

function isSameSolapiReservation(existingJob = {}, nextJob = {}) {
  if (!existingJob) return false;
  return (
    existingJob.status === "scheduled" &&
    existingJob.provider === "solapi" &&
    Boolean(getProviderMessageId(existingJob.result) || existingJob.providerMessageId) &&
    getNotificationReservationFingerprint(existingJob) === getNotificationReservationFingerprint(nextJob)
  );
}

const notificationReservationPendingReuseMs = 2 * 60 * 1000;

function isSameSolapiReservationPending(existingJob = {}, nextJob = {}, now = new Date()) {
  if (!existingJob) return false;
  const pendingAt = new Date(existingJob.result?.reservationStartedAt || existingJob.updatedAt || 0).getTime();
  return (
    existingJob.status === "scheduled" &&
    existingJob.provider === "academy-os-reserving" &&
    existingJob.result?.reservationPending === true &&
    Number.isFinite(pendingAt) &&
    now.getTime() - pendingAt < notificationReservationPendingReuseMs &&
    getNotificationReservationFingerprint(existingJob) === getNotificationReservationFingerprint(nextJob)
  );
}

async function sendScheduledNotificationJobToSolapi(job, { forceDryRun = false } = {}) {
  const scheduledDate = job.scheduledAt || job.payload?.scheduledDate || "";
  if (!scheduledDate) throw new Error("Solapi 예약 발송 시각이 필요합니다.");
  const payload = {
    ...(job.payload ?? {}),
    forceDryRun: forceDryRun || Boolean(job.payload?.forceDryRun),
    notificationType: job.notificationType,
    scheduledDate,
    sendMode: "scheduled"
  };

  if (job.notificationType === "attendance") {
    return sendAttendanceAlimtalk(payload);
  }
  if (job.notificationType === "daily_report") {
    return sendDailyReportAlimtalk(payload);
  }
  if (job.notificationType === "student_reminder" || job.notificationType === "schedule_reminder") {
    return sendStudentScheduleReminderAlimtalk(payload);
  }
  return sendLessonCommentAlimtalk({
    ...payload,
    target: job.notificationType === "student_comment" || job.notificationType === "notice_student" ? "student" : payload.target ?? "parent"
  });
}

async function reserveNotificationJobInSolapi(job, { forceDryRun = false, reason = "Solapi 예약 갱신" } = {}) {
  if (!job?.notificationJobId) throw new Error("예약할 알림톡 job ID가 필요합니다.");
  const context = lessonCommentNotificationTypes.has(job.notificationType)
    ? await createLessonNotificationDispatchContext([job])
    : null;
  const prepared = refreshLessonCommentJobBeforeSend(job, context);
  if (prepared.action === "cancel") {
    await upsertNotificationJob(prepared.job);
    return { notificationJob: prepared.job, reserved: false, source: "supabase" };
  }

  const nextJob = prepared.job;
  const existing = await getNotificationJob(nextJob.notificationJobId);
  const existingJob = existing.notificationJob;
  if (isSameSolapiReservation(existingJob, nextJob) || isSameSolapiReservationPending(existingJob, nextJob)) {
    return { notificationJob: existingJob, reserved: false, reused: true, source: existing.source };
  }

  const existingProviderGroupId =
    existingJob?.provider === "solapi"
      ? existingJob.providerMessageId || getProviderMessageId(existingJob.result)
      : "";
  let solapiCancellation = null;
  if (existingProviderGroupId && existingJob?.status === "scheduled") {
    solapiCancellation = await cancelSolapiReservationGroup(existingProviderGroupId);
  }

  const reservationStartedAt = new Date().toISOString();
  const reservingJob = {
    ...nextJob,
    provider: "academy-os-reserving",
    result: {
      ...(nextJob.result && typeof nextJob.result === "object" ? nextJob.result : {}),
      reservationPending: true,
      reservationReason: reason,
      reservationStartedAt
    },
    status: "scheduled",
    updatedAt: reservationStartedAt
  };
  await upsertNotificationJob(reservingJob);

  const result = await sendScheduledNotificationJobToSolapi(reservingJob, { forceDryRun });
  const status = result?.dryRun ? "dry_run" : "scheduled";
  const latest = await getNotificationJob(nextJob.notificationJobId);
  if (latest.notificationJob?.status === "canceled") {
    const reservedGroupId = getProviderMessageId(result);
    let canceledReservedGroup = null;
    if (reservedGroupId && !result?.dryRun) {
      canceledReservedGroup = await cancelSolapiReservationGroup(reservedGroupId);
    }
    const canceledJob = {
      ...latest.notificationJob,
      provider: reservedGroupId ? "solapi" : latest.notificationJob.provider,
      providerMessageId: reservedGroupId || latest.notificationJob.providerMessageId || "",
      result: {
        ...(latest.notificationJob.result && typeof latest.notificationJob.result === "object" ? latest.notificationJob.result : {}),
        canceledReservedGroup,
        reservationCanceledAfterTeacherCancel: true
      }
    };
    await upsertNotificationJob(canceledJob);
    return { notificationJob: canceledJob, reserved: false, canceledAfterReserve: true, source: "solapi" };
  }
  const updatedJob = {
    ...reservingJob,
    error: "",
    payload: {
      ...(reservingJob.payload ?? {}),
      scheduledDate: reservingJob.scheduledAt,
      sendMode: "scheduled"
    },
    provider: "solapi",
    providerMessageId: getProviderMessageId(result),
    result: {
      ...(nextJob.result && typeof nextJob.result === "object" ? nextJob.result : {}),
      ...(result && typeof result === "object" ? result : {}),
      reservationPending: false,
      reservedAt: new Date().toISOString(),
      reservationReason: reason
    },
    status,
    updatedAt: new Date().toISOString()
  };
  await upsertNotificationJob(updatedJob);
  return {
    notificationJob: updatedJob,
    reserved: status === "scheduled",
    solapiCancellation,
    source: "solapi"
  };
}

function getNotificationJobSolapiGroupId(job = {}) {
  return (
    job.providerMessageId ||
    getProviderMessageId(job.result) ||
    getProviderMessageId(job.result?.result) ||
    job.result?.groupId ||
    job.result?.result?.groupId ||
    ""
  );
}

function normalizeSolapiStatus(value = "") {
  return String(value ?? "").trim().toUpperCase();
}

function isSolapiCanceledStatus(value = "") {
  const status = normalizeSolapiStatus(value);
  return status === "CANCELED" || status === "CANCELLED" || status.includes("CANCEL");
}

function isSolapiFailedStatus(value = "") {
  const status = normalizeSolapiStatus(value);
  return status === "FAILED" || status === "FAIL" || status.includes("FAIL") || status.includes("ERROR");
}

function isSolapiCompleteStatus(value = "") {
  const status = normalizeSolapiStatus(value);
  return status === "COMPLETE" || status === "COMPLETED" || status === "DONE" || status.includes("COMPLETE");
}

function getSolapiPrimaryMessage(messages = [], job = {}) {
  const recipient = String(job.recipient || job.payload?.recipient || "").replace(/\D/g, "");
  if (recipient) {
    const matched = messages.find((message) => String(message.to || "").replace(/\D/g, "") === recipient);
    if (matched) return matched;
  }
  return messages.find((message) => String(message.statusCode || "") === "4000") ?? messages[0] ?? null;
}

function getSolapiStatusDetail({ group, message } = {}) {
  const statusCode = String(message?.statusCode || "").trim();
  const messageStatus = String(message?.status || "").trim();
  const groupStatus = String(group?.status || "").trim();
  const reason = String(message?.reason || "").trim();
  return [statusCode ? `statusCode ${statusCode}` : "", reason, messageStatus || groupStatus]
    .filter(Boolean)
    .join(" · ");
}

function getReconciledSolapiJobState(job = {}, group = null, messages = [], now = new Date()) {
  const message = getSolapiPrimaryMessage(messages, job);
  const statusCode = String(message?.statusCode || "").trim();
  const detail = getSolapiStatusDetail({ group, message });

  if (statusCode === "4000") {
    return { error: "", message, shouldUpdate: job.status !== "sent", status: "sent" };
  }
  if (isSolapiCanceledStatus(group?.status) || isSolapiCanceledStatus(message?.status)) {
    return { error: detail || "Solapi 취소", message, shouldUpdate: job.status !== "canceled", status: "canceled" };
  }
  if (isSolapiFailedStatus(group?.status) || isSolapiFailedStatus(message?.status)) {
    return { error: detail || "Solapi 실패", message, shouldUpdate: job.status !== "failed" || job.error !== detail, status: "failed" };
  }
  if (isSolapiCompleteStatus(group?.status) || isSolapiCompleteStatus(message?.status) || group?.dateCompleted || message?.dateReported) {
    const error = detail || "Solapi 완료 상태 확인 필요";
    return { error, message, shouldUpdate: job.status !== "send_unconfirmed" || job.error !== error, status: "send_unconfirmed" };
  }

  const scheduledTime = job.scheduledAt ? new Date(job.scheduledAt).getTime() : NaN;
  if (Number.isFinite(scheduledTime) && now.getTime() > scheduledTime) {
    const error = detail || "Solapi 발송결과 확인 필요";
    return { error, message, shouldUpdate: job.status !== "send_unconfirmed" || job.error !== error, status: "send_unconfirmed" };
  }

  return { error: detail, message, shouldUpdate: false, status: job.status || "scheduled" };
}

function getLessonRecordStatusForSolapiResult(status, error = "") {
  if (status === "sent") return "발송 완료";
  if (status === "send_unconfirmed") return error ? `발송 확인 필요 · ${error}` : "발송 확인 필요";
  if (status === "failed") return error ? `발송 실패 · ${error}` : "발송 실패";
  if (status === "canceled") return "취소";
  return "";
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withSolapiRetry(action, { attempts = 3, delayMs = 350 } = {}) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await action();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await wait(delayMs * attempt);
    }
  }
  throw lastError;
}

async function listNotificationJobsByIds(notificationJobIds = []) {
  const uniqueIds = [...new Set(
    notificationJobIds
      .map((item) => String(item || "").trim())
      .filter(Boolean)
  )];
  const results = [];
  for (const notificationJobId of uniqueIds) {
    const result = await getNotificationJob(notificationJobId);
    if (result.notificationJob) results.push(result.notificationJob);
  }
  return results;
}

async function reconcileSolapiNotificationJobs({ date = "", lessonId = "", limit = 500, notificationJobIds = [], scheduledFrom = "", scheduledTo = "" } = {}) {
  const targetJobIds = Array.isArray(notificationJobIds)
    ? notificationJobIds.map((item) => String(item || "").trim()).filter(Boolean)
    : [];
  if (!date && !lessonId && !scheduledFrom && !scheduledTo && targetJobIds.length === 0) {
    throw new Error("조회할 알림톡 예약 ID, 수업일 또는 수업 ID가 필요합니다.");
  }
  const { startIso, endIso } = targetJobIds.length ? { startIso: "", endIso: "" } : getKoreaDayUtcRange(date);
  const targetJobs = targetJobIds.length
    ? await listNotificationJobsByIds(targetJobIds)
    : (await listNotificationJobs({
        lessonId,
        limit,
        scheduledFrom: scheduledFrom || startIso,
        scheduledTo: scheduledTo || endIso,
        status: "scheduled,send_unconfirmed"
      })).notificationJobs ?? [];
  const targetJobIdSet = new Set(targetJobIds);
  const targetStatuses = new Set(["scheduled", "send_unconfirmed"]);
  const now = new Date();
  const candidates = targetJobs.filter((job) =>
    job.provider === "solapi" &&
    targetStatuses.has(job.status) &&
    getNotificationJobSolapiGroupId(job) &&
    (targetJobIdSet.size === 0 || targetJobIdSet.has(job.notificationJobId))
  );
  const checked = [];
  const notificationJobs = [];
  const records = [];
  const solapiLookupCache = new Map();

  async function getSolapiLookup(groupId) {
    if (!solapiLookupCache.has(groupId)) {
      solapiLookupCache.set(groupId, withSolapiRetry(async () => {
        const [groupsResult, messagesResult] = await Promise.all([
          listSolapiGroups({ groupId, limit: 1 }),
          listSolapiMessages({ groupId, limit: 50 })
        ]);
        return {
          group: groupsResult.groups?.[0] ?? null,
          messages: messagesResult.messages ?? []
        };
      }));
    }
    return solapiLookupCache.get(groupId);
  }

  for (const job of candidates) {
    const groupId = getNotificationJobSolapiGroupId(job);
    try {
      if (checked.length > 0) await wait(80);
      const { group, messages } = await getSolapiLookup(groupId);
      const reconciled = getReconciledSolapiJobState(job, group, messages, now);
      checked.push({
        group,
        groupId,
        message: reconciled.message,
        notificationJobId: job.notificationJobId,
        status: reconciled.status,
        updated: reconciled.shouldUpdate
      });
      if (!reconciled.shouldUpdate) continue;

      const updatedJob = {
        ...job,
        error: reconciled.error,
        result: {
          ...(job.result && typeof job.result === "object" ? job.result : {}),
          solapiGroup: group,
          solapiMessages: messages,
          solapiReconciledAt: now.toISOString(),
          solapiReconciledSource: "manual-send-result"
        },
        status: reconciled.status,
        updatedAt: now.toISOString()
      };
      const savedJob = await upsertNotificationJob(updatedJob);
      notificationJobs.push(savedJob.notificationJob ?? updatedJob);

      const recordStatus = getLessonRecordStatusForSolapiResult(reconciled.status, reconciled.error);
      if (lessonCommentNotificationTypes.has(job.notificationType) && job.lessonId && job.studentId && recordStatus) {
        try {
          const patchResult = await patchLessonStudentRecordNotificationStatus({
            lessonId: job.lessonId,
            lessonStudentRecordId: job.lessonStudentRecordId,
            studentId: job.studentId,
            ...(job.notificationType === "student_comment"
              ? { studentCommentSendStatus: recordStatus }
              : { teacherCommentSendStatus: recordStatus })
          });
          if (patchResult.record) records.push(patchResult.record);
        } catch (recordError) {
          checked[checked.length - 1].recordError = recordError.message;
        }
      }
    } catch (error) {
      checked.push({
        error: error.message,
        groupId,
        notificationJobId: job.notificationJobId,
        status: "failed_to_check",
        updated: false
      });
    }
  }

  return {
    checked,
    checkedCount: checked.length,
    notificationJobs,
    records,
    source: "solapi",
    updatedCount: notificationJobs.length
  };
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
    [/확률과통계|확통/i, "확률과 통계"],
    [/기하/i, "기하"],
    [/대수/i, "대수"]
  ];
  const inferredSubject = candidates.find(([pattern]) => pattern.test(text))?.[1] ?? "";
  return inferredSubject && ssenSubjectNameSet.has(inferredSubject) ? inferredSubject : "";
}

function sanitizeExamAnalysisSubject(value = "") {
  const text = String(value || "").trim().replace(/\s+/g, " ");
  if (!text) return "";
  const compactText = text.replace(/\s+/g, "");
  if (["수학", "수학영역", "수학과"].includes(compactText)) return "";
  const inferredSubject = inferExamAnalysisSubjectFromText(text);
  if (inferredSubject && ssenSubjectNameSet.has(inferredSubject)) return inferredSubject;
  return ssenSubjectNames.find((subject) => subject.replace(/\s+/g, "") === compactText) || "";
}

function collectExamAnalysisQuestionTypeCodes(questions = []) {
  const codes = [];
  const addCode = (value) => {
    const code = String(value || "").trim();
    if (code) codes.push(code);
  };
  const addCodes = (values) => {
    if (Array.isArray(values)) values.forEach(addCode);
  };
  (Array.isArray(questions) ? questions : []).forEach((question) => {
    addCode(question.mainTypeCode ?? question.main_type_code);
    addCodes(question.subTypeCodes ?? question.sub_type_codes);
    [question.finalFields, question.teacherFields, question.aiFields, question.final_fields, question.teacher_fields, question.ai_fields]
      .filter((fields) => fields && typeof fields === "object")
      .forEach((fields) => {
        addCode(fields.mainTypeCode ?? fields.main_type_code);
        addCodes(fields.subTypeCodes ?? fields.sub_type_codes);
        addCode(fields.ssenMeta?.mainType?.typeCode ?? fields.ssen_meta?.main_type?.type_code);
        addCodes(Array.isArray(fields.ssenMeta?.subTypes)
          ? fields.ssenMeta.subTypes.map((item) => item?.typeCode)
          : []);
        addCodes(Array.isArray(fields.ssen_meta?.sub_types)
          ? fields.ssen_meta.sub_types.map((item) => item?.type_code)
          : []);
      });
  });
  return [...new Set(codes)];
}

function inferExamAnalysisSubjectFromTypeCodes(typeCodes = []) {
  const subjectCounts = new Map();
  (Array.isArray(typeCodes) ? typeCodes : []).forEach((typeCode) => {
    const subject = ssenSubjectByTypeCode.get(String(typeCode || "").trim());
    if (subject) subjectCounts.set(subject, (subjectCounts.get(subject) ?? 0) + 1);
  });
  return [...subjectCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
}

function getExamAnalysisSsenSubject({ sourceFile = {}, analysisRun = {}, sourceFiles = [], questions = [] } = {}) {
  const inferredSubject = inferExamAnalysisSubjectFromText([
    analysisRun.subject,
    analysisRun.extractionSummary?.visionCheck?.subject,
    analysisRun.extractionSummary?.visionCheck?.firstPageEvidence,
    analysisRun.extractionSummary?.visionCheck?.lastPageEvidence,
    sourceFile.originalFileName,
    ...(Array.isArray(sourceFiles) ? sourceFiles.map((source) => source.originalFileName) : []),
    analysisRun.title
  ].filter(Boolean).join("\n"));
  if (inferredSubject) return inferredSubject;
  const typeCodeSubject = inferExamAnalysisSubjectFromTypeCodes(collectExamAnalysisQuestionTypeCodes(questions));
  if (typeCodeSubject) return typeCodeSubject;
  return sanitizeExamAnalysisSubject(analysisRun.subject);
}

function getSsenTypesForExamAnalysis({ sourceFile = {}, analysisRun = {}, questions = [] } = {}) {
  const subject = getExamAnalysisSsenSubject({ sourceFile, analysisRun, questions });
  const types = subject
    ? ssenTypeIndex.filter((item) => item.subject === subject)
    : [];
  return {
    subject,
    types: types.length ? types : ssenTypeIndex.slice(0, 240)
  };
}

function compactSsenScopeText(value = "") {
  return String(value || "").replace(/[\s.,，/|·:;()[\]{}~\-–—_]+/g, "");
}

function getSsenScopeTokens(scopeText = "") {
  return String(scopeText || "")
    .split(/[\n,，/|·:;()[\]{}]+|부터|까지|~/g)
    .map(compactSsenScopeText)
    .filter((token) => token.length >= 2);
}

function getSsenScopeSegments(scopeText = "") {
  return String(scopeText || "")
    .split(/[\n,，/|·:;()[\]{}]+/g)
    .map((segment) => segment.trim())
    .filter(Boolean);
}

function getSsenUnitKey(row = {}) {
  return [row.partName, row.unitNo, row.unitName].map((item) => String(item ?? "").trim()).join("|");
}

function getSsenUnitNumber(row = {}) {
  const unitNo = Number(row.unitNo);
  return Number.isInteger(unitNo) ? unitNo : null;
}

function addSsenUnitRange(unitKeys, rows = [], startUnitNo, endUnitNo) {
  if (!Number.isInteger(startUnitNo) || !Number.isInteger(endUnitNo)) return;
  const minUnitNo = Math.min(startUnitNo, endUnitNo);
  const maxUnitNo = Math.max(startUnitNo, endUnitNo);
  rows.forEach((row) => {
    const unitNo = getSsenUnitNumber(row);
    if (Number.isInteger(unitNo) && unitNo >= minUnitNo && unitNo <= maxUnitNo) {
      unitKeys.add(getSsenUnitKey(row));
    }
  });
}

function ssenRowMatchesScope(row = {}, scopeText = "") {
  const compactScope = compactSsenScopeText(scopeText);
  const tokens = getSsenScopeTokens(scopeText);
  const partName = compactSsenScopeText(row.partName);
  const unitName = compactSsenScopeText(row.unitName);
  const typeName = compactSsenScopeText(row.typeName);
  if (!compactScope) return false;
  if ([partName, unitName].filter(Boolean).some((label) => compactScope.includes(label))) return true;
  return tokens.some((token) => (
    (partName && (partName.includes(token) || token.includes(partName))) ||
    (unitName && (unitName.includes(token) || token.includes(unitName))) ||
    (typeName && typeName.includes(token))
  ));
}

function getSsenUnitLabelMatchedKeys(rows = [], scopeText = "") {
  const compactScope = compactSsenScopeText(scopeText);
  if (!compactScope) return new Set();
  const tokens = getSsenScopeTokens(scopeText);
  const exactLabelKeys = new Set(rows
    .filter((row) => [row.partName, row.unitName]
      .map(compactSsenScopeText)
      .filter(Boolean)
      .some((label) => tokens.includes(label)))
    .map(getSsenUnitKey));
  if (exactLabelKeys.size) return exactLabelKeys;

  const unitNameKeys = new Set(rows
    .filter((row) => {
      const unitName = compactSsenScopeText(row.unitName);
      return unitName && compactScope.includes(unitName);
    })
    .map(getSsenUnitKey));
  if (unitNameKeys.size) return unitNameKeys;

  return new Set(rows
    .filter((row) => {
      const partName = compactSsenScopeText(row.partName);
      return partName && compactScope.includes(partName);
    })
    .map(getSsenUnitKey));
}

function getSsenScopeMatchedUnitKeys(rows = [], scopeText = "") {
  const segments = getSsenScopeSegments(scopeText);
  const matchedUnitKeys = new Set();
  const sortedUnitNumbers = [...new Set(rows.map(getSsenUnitNumber).filter((number) => Number.isInteger(number)))]
    .sort((a, b) => a - b);
  const firstUnitNo = sortedUnitNumbers[0] ?? null;

  segments.forEach((segment) => {
    const unitLabelMatchedKeys = getSsenUnitLabelMatchedKeys(rows, segment);
    const segmentMatchedUnitKeys = unitLabelMatchedKeys.size
      ? unitLabelMatchedKeys
      : new Set(rows.filter((row) => ssenRowMatchesScope(row, segment)).map(getSsenUnitKey));
    const segmentUnitNumbers = [...segmentMatchedUnitKeys]
      .map((key) => Number(key.split("|")[1]))
      .filter((number) => Number.isInteger(number));
    const scopeHasRange = /[~\-–—]|부터|까지/.test(segment);
    if (scopeHasRange && segmentUnitNumbers.length >= 2) {
      addSsenUnitRange(matchedUnitKeys, rows, Math.min(...segmentUnitNumbers), Math.max(...segmentUnitNumbers));
      return;
    }
    if (
      scopeHasRange
      && segmentUnitNumbers.length === 1
      && Number.isInteger(firstUnitNo)
      && (/^\s*[~\-–—]/.test(segment) || /까지/.test(segment))
    ) {
      addSsenUnitRange(matchedUnitKeys, rows, firstUnitNo, segmentUnitNumbers[0]);
      return;
    }
    segmentMatchedUnitKeys.forEach((key) => matchedUnitKeys.add(key));
  });

  return matchedUnitKeys;
}

function normalizeSsenTypeIndexRow(row = {}, scopeText = "") {
  const partName = String(row.partName ?? "").trim();
  const unitName = String(row.unitName ?? "").trim();
  return {
    bookCode: row.bookCode || "",
    bookTitle: row.bookTitle || "",
    subject: row.subject || "",
    typeCode: row.typeCode || "",
    partName,
    unitNo: row.unitNo || "",
    unitName,
    typeNo: row.typeNo || "",
    typeName: row.typeName || "",
    scopeMatched: ssenRowMatchesScope(row, scopeText)
  };
}

function getSsenTypeCatalogForExamAnalysis({
  subject = "",
  scope = "",
  analysisRun = null,
  sourceFiles = [],
  questions = []
} = {}) {
  const inferredSubject = inferExamAnalysisSubjectFromText([
    subject,
    scope,
    analysisRun?.subject,
    analysisRun?.extractionSummary?.visionCheck?.subject,
    analysisRun?.extractionSummary?.visionCheck?.firstPageEvidence,
    analysisRun?.extractionSummary?.visionCheck?.lastPageEvidence,
    analysisRun?.title,
    ...(Array.isArray(sourceFiles) ? sourceFiles.map((source) => source.originalFileName) : [])
  ].filter(Boolean).join("\n"));
  const typeCodeSubject = inferExamAnalysisSubjectFromTypeCodes(collectExamAnalysisQuestionTypeCodes(questions));
  const normalizedSubject = inferredSubject
    || typeCodeSubject
    || sanitizeExamAnalysisSubject(subject)
    || sanitizeExamAnalysisSubject(analysisRun?.subject);
  const subjectTypes = normalizedSubject
    ? ssenTypeIndex.filter((item) => item.subject === normalizedSubject)
    : [];
  const normalizedTypes = subjectTypes.map((row) => normalizeSsenTypeIndexRow(row, scope));
  const matchedUnitKeys = getSsenScopeMatchedUnitKeys(normalizedTypes, scope);
  const scopeMatchedTypes = matchedUnitKeys.size
    ? normalizedTypes
        .filter((row) => matchedUnitKeys.has(getSsenUnitKey(row)))
        .map((row) => ({ ...row, scopeMatched: true }))
    : [];
  const visibleTypes = scopeMatchedTypes.length ? scopeMatchedTypes : normalizedTypes;
  const unitMap = new Map();
  visibleTypes.forEach((row) => {
    const key = [row.partName, row.unitNo, row.unitName].join("|");
    if (!unitMap.has(key)) {
      unitMap.set(key, {
        key,
        partName: row.partName,
        unitNo: row.unitNo,
        unitName: row.unitName,
        typeCount: 0
      });
    }
    unitMap.get(key).typeCount += 1;
  });
  return {
    subject: normalizedSubject,
    scope: String(scope || "").trim(),
    status: !normalizedSubject
      ? "subject_missing"
      : scope && !scopeMatchedTypes.length
        ? "scope_not_matched"
        : scopeMatchedTypes.length
          ? "scope_matched"
          : "subject_all",
    subjectTypeCount: subjectTypes.length,
    scopeMatchedCount: scopeMatchedTypes.length,
    types: visibleTypes,
    units: [...unitMap.values()]
  };
}

function formatSsenTypeCandidatesForPrompt(types = []) {
  return (Array.isArray(types) ? types : [])
    .slice(0, 240)
    .map((item) => `${item.typeCode} | ${item.unitName} | ${item.typeName}`)
    .join("\n");
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

function buildPdfQuestionRowFillPrompt({
  sourceFile = {},
  analysisRun = {},
  questions = [],
  targetQuestionNumbers = [],
  mode = "fill"
} = {}) {
  const targetSet = new Set((Array.isArray(targetQuestionNumbers) ? targetQuestionNumbers : [])
    .map(Number)
    .filter((number) => Number.isInteger(number) && number > 0));
  const targetQuestions = targetSet.size
    ? questions.filter((question) => targetSet.has(Number(question.questionNumber)))
    : questions;
  const questionLines = targetQuestions
    .map((question) => {
      const boundary = question.sourceEvidence?.boundary ?? {};
      const pageStart = boundary.pageStart || question.sourcePage || "?";
      const pageEnd = boundary.pageEnd && boundary.pageEnd !== pageStart ? `~${boundary.pageEnd}` : "";
      const position = boundary.positionHint || "unknown";
      return `${question.questionNumber}: ${pageStart}${pageEnd}p, ${position}`;
    })
    .join("\n");
  const ssenTypes = getSsenTypesForExamAnalysis({ sourceFile, analysisRun, questions: targetQuestions });
  const ssenCandidateText = formatSsenTypeCandidatesForPrompt(ssenTypes.types);
  return [
    mode === "refine"
      ? "역할: 수학 시험지 문항 메타데이터 2차 검수자"
      : "역할: 수학 시험지 문항 메타데이터 초안 작성자",
    mode === "refine"
      ? "목표: 재확인 대상 문항만 PDF 원본을 다시 자세히 읽고, 필요한 만큼 짧게 풀이 방향을 따져 쎈 기준 유형을 더 정확히 고친다."
      : "목표: 이미 확정된 1~N 문항 행에 대해 단원, 쎈 주유형, 보조유형, 난이도, 짧은 판별 근거만 채운다.",
    "금지: 문제 본문 대량 복사, 정답 추론 결과, 상세 풀이, 학생용 해설 작성은 반환하지 않는다.",
    "중요: 결과는 사람이 검수할 AI 초안이다. 확실하지 않은 문항은 needs_review=true로 표시한다.",
    "중요: main_type과 sub_types는 아래 [쎈 유형 후보]의 typeName을 그대로 사용한다. '방정식', '행렬', '부등식' 같은 대분류만 쓰면 안 된다.",
    "",
    "[분석 대상]",
    `파일명: ${sourceFile.originalFileName || "exam-source.pdf"}`,
    `학교: ${analysisRun.schoolName || ""}`,
    `학년: ${analysisRun.grade || ""}`,
    `고사: ${analysisRun.examCycle || analysisRun.examTerm || ""}`,
    `과목: ${analysisRun.subject || ""}`,
    `쎈 기준 과목: ${ssenTypes.subject || "과목 자동 판별 실패"}`,
    "",
    targetSet.size ? "[재검토 대상 문항 경계]" : "[확정 문항 경계]",
    questionLines,
    "",
    "[쎈 유형 후보]",
    ssenCandidateText || "쎈 유형 후보를 찾지 못했습니다. 이 경우 needs_review=true로 표시하고 reason에 과목 확인 필요라고 쓴다.",
    "",
    "[분류 기준]",
    "- unit_name: [쎈 유형 후보]의 unitName을 우선 사용한다.",
    "- main_type: [쎈 유형 후보]의 typeName 중 가장 대표적인 하나를 그대로 쓴다.",
    "- sub_types: [쎈 유형 후보]의 typeName 중 보조유형 0~2개를 그대로 쓴다. 복합 문항이면 결합된 쎈 유형을 넣는다.",
    "- difficulty: 하, 중하, 중, 중상, 상 중 하나에 가깝게 쓴다.",
    "- reasoning_summary: 본문을 복사하지 말고, 어떤 풀이 행동/조건 때문에 그 쎈 유형으로 봤는지 1문장으로만 쓴다.",
    "- main_type_code: 선택한 주유형의 typeCode를 쓴다.",
    "- sub_type_codes: 선택한 보조유형들의 typeCode를 쓴다.",
    "",
    "반드시 JSON 객체만 반환한다.",
    "필드:",
    "- rows: array of { question_number:number, unit_name:string, main_type:string, main_type_code:string, sub_types:string[], sub_type_codes:string[], difficulty:string, reasoning_summary:string, concept_tags:string[], confidence:number, needs_review:boolean, warnings:string[] }",
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
      mainTypeCode: String(row.main_type_code ?? row.mainTypeCode ?? "").slice(0, 60),
      subTypes: Array.isArray(row.sub_types ?? row.subTypes)
        ? (row.sub_types ?? row.subTypes).map(String).filter(Boolean).slice(0, 3)
        : [],
      subTypeCodes: Array.isArray(row.sub_type_codes ?? row.subTypeCodes)
        ? (row.sub_type_codes ?? row.subTypeCodes).map(String).filter(Boolean).slice(0, 3)
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

function cleanExamAnalysisOutputText(value = "", maxLength = 4000) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function normalizeExamAnalysisOutputVisibility(value = "") {
  const normalized = String(value || "").trim();
  return ["blog_instagram", "blog", "instagram", "internal"].includes(normalized)
    ? normalized
    : "blog_instagram";
}

const examAnalysisBlogBlockFields = [
  ["blogBlockOpening", 1, "인사/시험 소개", "paragraph"],
  ["blogBlockStructure", 2, "시험 개요/구조", "paragraph"],
  ["blogBlockOverallReview", 3, "출제 흐름/체감 정리", "highlight"],
  ["blogBlockNextStudy", 4, "다음 학습 방향", "paragraph"],
  ["blogBlockAcademyTrust", 5, "학원 관리 문장", "paragraph"],
  ["blogBlockCta", 6, "특강/상담 CTA", "cta"]
];

const legacyExamAnalysisBlogInstructorSectionGroups = {
  blogBlockOpening: ["blogSectionOpening", "blogSectionIntroCard"],
  blogBlockStructure: ["blogSectionStructureText1", "blogSectionStructureCard", "blogSectionStructureText2"],
  blogBlockOverallReview: ["blogSectionOverallCard", "blogSectionOverallText1", "blogSectionOverallText2"],
  blogBlockNextStudy: ["blogSectionNextExam"],
  blogBlockAcademyTrust: ["blogSectionClosing1", "blogSectionClosing2", "blogSectionClosing3"],
  blogBlockCta: ["blogSectionCta"]
};

const legacyExamAnalysisKeyQuestionGroups = {
  questionMemo: ["blogBlockKeyQuestion", "blogSectionQuestion1Look", "blogSectionQuestion1Explain", "blogSectionQuestion23Pattern"],
  solutionMemo: ["blogBlockSolution", "blogSectionQuestion1SolutionCard", "blogSectionQuestion1SolutionText"]
};

const examAnalysisGptChecklistManualFields = [
  "checklistExamDate",
  "checklistExamRange",
  "checklistTextbookPublisher",
  "checklistGradeCut",
  "checklistSourceEvidence",
  "checklistForbiddenTextbook",
  "checklistUnconfirmedQuestions",
  "checklistAiNoGuess"
];

const examAnalysisKeyQuestionBlockFields = [
  "questionNumber",
  "title",
  "selectionReason",
  "similarTypeEvidence",
  "questionMemo",
  "mistakePoint",
  "solutionMemo",
  "imageSlotMemo"
];

function createEmptyExamAnalysisKeyQuestionBlock(index = 1) {
  return {
    blockId: `key-question-${index}`,
    questionNumber: "",
    title: "",
    selectionReason: "",
    similarTypeEvidence: "",
    questionMemo: "",
    mistakePoint: "",
    solutionMemo: "",
    imageSlotMemo: ""
  };
}

function cleanExamAnalysisKeyQuestionBlock(block = {}, index = 0) {
  const empty = createEmptyExamAnalysisKeyQuestionBlock(index + 1);
  const blockId = cleanExamAnalysisOutputText(block.blockId || empty.blockId, 120) || empty.blockId;
  return {
    ...empty,
    blockId,
    questionNumber: cleanExamAnalysisOutputText(block.questionNumber, 80),
    title: cleanExamAnalysisOutputText(block.title, 240),
    selectionReason: cleanExamAnalysisOutputText(block.selectionReason, 1200),
    similarTypeEvidence: cleanExamAnalysisOutputText(block.similarTypeEvidence, 1200),
    questionMemo: cleanExamAnalysisOutputText(block.questionMemo, 1600),
    mistakePoint: cleanExamAnalysisOutputText(block.mistakePoint, 1200),
    solutionMemo: cleanExamAnalysisOutputText(block.solutionMemo, 1600),
    imageSlotMemo: cleanExamAnalysisOutputText(block.imageSlotMemo, 1200)
  };
}

function getLegacyExamAnalysisKeyQuestionText(inputs = {}, keys = []) {
  return keys
    .map((key) => cleanExamAnalysisOutputText(inputs?.[key], 700))
    .filter(Boolean)
    .join("\n");
}

function normalizeExamAnalysisKeyQuestionBlocks(inputs = {}) {
  if (Array.isArray(inputs.keyQuestionBlocks) && inputs.keyQuestionBlocks.length) {
    return inputs.keyQuestionBlocks
      .slice(0, 12)
      .map(cleanExamAnalysisKeyQuestionBlock);
  }
  const legacyQuestionMemo = getLegacyExamAnalysisKeyQuestionText(inputs, legacyExamAnalysisKeyQuestionGroups.questionMemo);
  const legacySolutionMemo = getLegacyExamAnalysisKeyQuestionText(inputs, legacyExamAnalysisKeyQuestionGroups.solutionMemo);
  return [cleanExamAnalysisKeyQuestionBlock({
    ...createEmptyExamAnalysisKeyQuestionBlock(1),
    questionMemo: legacyQuestionMemo,
    solutionMemo: legacySolutionMemo
  }, 0)];
}

function getExamAnalysisKeyQuestionBlockHasContent(block = {}) {
  return examAnalysisKeyQuestionBlockFields.some((key) => cleanExamAnalysisOutputText(block[key], 20));
}

function createExamAnalysisCardNewsModel(keyQuestionBlocks = []) {
  const questionBlocks = Array.isArray(keyQuestionBlocks) && keyQuestionBlocks.length
    ? keyQuestionBlocks
    : [createEmptyExamAnalysisKeyQuestionBlock(1)];
  const slides = [
    [0, "cover", "시작 슬라이드", "통렌더", "학교/학년/고사/과목 + 첫 문단 핵심"],
    [0, "examStructure", "시험구조 슬라이드", "통렌더", "객관식/서술형/만점/범위/출제 흐름"],
    [0, "overallReview", "출제 흐름 슬라이드", "통렌더", "체감 난도/후반부 흐름/흔들린 지점/학습 포인트"],
    ...questionBlocks.flatMap((block, index) => ([
      [0, "keyQuestion", `주요문항 ${index + 1} 슬라이드`, "문제 이미지 슬롯", `${block.questionNumber ? `${block.questionNumber} ` : ""}선생님 crop 문제 이미지 + 왜 중요한지`],
      [0, "solution", `손풀이 ${index + 1} 슬라이드`, "손풀이 이미지 슬롯", `${block.questionNumber ? `${block.questionNumber} ` : ""}선생님 crop 손풀이 이미지 + 풀이 흐름`]
    ])),
    [0, "closing", "마무리 슬라이드", "통렌더", "다음 학습 방향 + 특강/상담 CTA"]
  ];
  return slides.map((slide, index) => [index + 1, slide[1], slide[2], slide[3], slide[4]]);
}

const examAnalysisCardNewsModel = createExamAnalysisCardNewsModel();

const examAnalysisOutputAiBoundaryRules = [
  "AI 가능: 이모티콘 위치, 문단 줄나눔, 형광펜 태그, 문체 다듬기, 카드 문구 압축",
  "AI 가능: 선생님 메모를 학부모가 읽기 쉬운 블로그 문장과 인스타 카드 문장으로 재구성",
  "AI 불가: 문항 수, 시험 범위, 문항번호, 유사문항, 정답/풀이 사실을 추측해서 새로 만들기",
  "AI 불가: 선생님 저장본을 자동으로 덮어쓰기, Canva 실제 레이아웃을 확인 없이 완료 처리하기"
];

function migrateLegacyExamAnalysisBlogSectionInputs(inputs = {}) {
  const nextInputs = { ...(inputs && typeof inputs === "object" ? inputs : {}) };
  Object.entries(legacyExamAnalysisBlogInstructorSectionGroups).forEach(([targetKey, legacyKeys]) => {
    if (cleanExamAnalysisOutputText(nextInputs[targetKey], 1400)) return;
    const legacyText = legacyKeys
      .map((legacyKey) => cleanExamAnalysisOutputText(inputs?.[legacyKey], 700))
      .filter(Boolean)
      .join("\n");
    if (legacyText) nextInputs[targetKey] = legacyText;
  });
  return nextInputs;
}

function normalizeExamAnalysisOutputInputs(inputs = {}) {
  const migratedInputs = migrateLegacyExamAnalysisBlogSectionInputs(inputs);
  const blogBlockInputs = Object.fromEntries(
    examAnalysisBlogBlockFields.map(([key]) => [key, cleanExamAnalysisOutputText(migratedInputs[key], 1400)])
  );
  return {
    visibility: normalizeExamAnalysisOutputVisibility(migratedInputs.visibility),
    oneLineReview: cleanExamAnalysisOutputText(migratedInputs.oneLineReview, 500),
    flowReview: cleanExamAnalysisOutputText(migratedInputs.flowReview, 1200),
    scoreGapPoint: cleanExamAnalysisOutputText(migratedInputs.scoreGapPoint, 1200),
    nextStudyPlan: cleanExamAnalysisOutputText(migratedInputs.nextStudyPlan, 1200),
    imageSlotNotes: cleanExamAnalysisOutputText(migratedInputs.imageSlotNotes, 1600),
    schoolVariationNotes: cleanExamAnalysisOutputText(migratedInputs.schoolVariationNotes, 1600),
    ...Object.fromEntries(examAnalysisGptChecklistManualFields.map((key) => [
      key,
      cleanExamAnalysisOutputText(migratedInputs[key], 1600)
    ])),
    keyQuestionBlocks: normalizeExamAnalysisKeyQuestionBlocks(migratedInputs),
    ...blogBlockInputs
  };
}

function getExamAnalysisOutputDrafts(auditSummary = {}) {
  const outputDrafts = auditSummary?.outputDrafts && typeof auditSummary.outputDrafts === "object"
    ? auditSummary.outputDrafts
    : {};
  const normalizeSection = (section = {}) => ({
    aiDraft: cleanExamAnalysisOutputText(section.aiDraft, 20000),
    teacherDraft: cleanExamAnalysisOutputText(section.teacherDraft, 20000),
    status: cleanExamAnalysisOutputText(section.status, 80),
    provider: cleanExamAnalysisOutputText(section.provider, 80),
    model: cleanExamAnalysisOutputText(section.model, 120),
    generatedAt: cleanExamAnalysisOutputText(section.generatedAt, 80),
    teacherUpdatedAt: cleanExamAnalysisOutputText(section.teacherUpdatedAt, 80),
    updatedAt: cleanExamAnalysisOutputText(section.updatedAt, 80)
  });
  return {
    inputs: normalizeExamAnalysisOutputInputs(outputDrafts.inputs ?? {}),
    blog: normalizeSection(outputDrafts.blog ?? {}),
    instagram: normalizeSection(outputDrafts.instagram ?? {})
  };
}

function getExamAnalysisOutputQuestionFields(question = {}) {
  const aiFields = question.aiFields && typeof question.aiFields === "object" ? question.aiFields : {};
  const teacherFields = question.teacherFields && typeof question.teacherFields === "object" ? question.teacherFields : {};
  const finalFields = question.finalFields && typeof question.finalFields === "object" ? question.finalFields : {};
  const ssenMeta = finalFields.ssenMeta && typeof finalFields.ssenMeta === "object"
    ? finalFields.ssenMeta
    : teacherFields.ssenMeta && typeof teacherFields.ssenMeta === "object"
      ? teacherFields.ssenMeta
      : aiFields.ssenMeta && typeof aiFields.ssenMeta === "object"
        ? aiFields.ssenMeta
        : {};
  const mainTypeMeta = ssenMeta.mainType && typeof ssenMeta.mainType === "object" ? ssenMeta.mainType : {};
  const valueFrom = (...values) => values.map((value) => String(value ?? "").trim()).find(Boolean) || "";
  const arrayFrom = (...values) => {
    for (const value of values) {
      if (Array.isArray(value) && value.length) return value.map((item) => String(item).trim()).filter(Boolean);
    }
    return [];
  };
  return {
    questionNumber: Number(question.questionNumber),
    partName: valueFrom(finalFields.partName, teacherFields.partName, mainTypeMeta.partName),
    unitName: valueFrom(finalFields.unitName, teacherFields.unitName, mainTypeMeta.unitName, question.unitName),
    mainType: valueFrom(finalFields.mainType, teacherFields.mainType, mainTypeMeta.typeName, question.mainType),
    subTypes: arrayFrom(finalFields.subTypes, teacherFields.subTypes, question.subTypes, aiFields.subTypes),
    difficulty: valueFrom(finalFields.difficulty, teacherFields.difficulty, question.difficulty, aiFields.difficulty, "미정"),
    reviewNote: valueFrom(finalFields.reviewNote, teacherFields.reviewNote),
    isImportantQuestion: Boolean(finalFields.isImportantQuestion ?? teacherFields.isImportantQuestion ?? false),
    pageStart: question.sourceEvidence?.boundary?.pageStart || question.sourcePage || null,
    pageEnd: question.sourceEvidence?.boundary?.pageEnd || question.sourceEvidence?.boundary?.pageStart || question.sourcePage || null
  };
}

function countExamAnalysisOutputLabels(items = [], selector) {
  const counts = new Map();
  items.forEach((item) => {
    const label = cleanExamAnalysisOutputText(selector(item) || "미입력", 120) || "미입력";
    counts.set(label, (counts.get(label) || 0) + 1);
  });
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "ko"));
}

function formatExamAnalysisOutputCountSummary(items = [], total = 0) {
  return items.map((item) => `${item.label} ${item.count}문항${total ? `(${Math.round((item.count / total) * 1000) / 10}%)` : ""}`).join(", ");
}

function formatExamAnalysisOutputQuestionPage(question = {}) {
  if (!question.pageStart) return "";
  return question.pageEnd && question.pageEnd !== question.pageStart
    ? `${question.pageStart}~${question.pageEnd}p`
    : `${question.pageStart}p`;
}

function buildExamAnalysisOutputContext(detail = {}) {
  const analysisRun = detail.analysisRun ?? {};
  const questions = (detail.questions ?? [])
    .map(getExamAnalysisOutputQuestionFields)
    .filter((question) => Number.isInteger(question.questionNumber) && question.questionNumber > 0)
    .sort((a, b) => a.questionNumber - b.questionNumber);
  const total = questions.length;
  const difficultySummary = formatExamAnalysisOutputCountSummary(
    countExamAnalysisOutputLabels(questions, (question) => question.difficulty),
    total
  );
  const partSummary = formatExamAnalysisOutputCountSummary(
    countExamAnalysisOutputLabels(questions, (question) => question.partName || question.unitName),
    total
  );
  const importantQuestions = questions.filter((question) => question.isImportantQuestion);
  const importantSummary = importantQuestions.length
    ? importantQuestions.map((question) => {
        const parts = [
          `${question.questionNumber}번`,
          question.mainType,
          question.unitName,
          question.difficulty,
          formatExamAnalysisOutputQuestionPage(question),
          question.reviewNote ? `메모: ${question.reviewNote}` : ""
        ].filter(Boolean);
        return `- ${parts.join(" · ")}`;
      }).join("\n")
    : "- 선생님이 선택한 주요문항 없음";
  const questionFlow = questions.map((question) => (
    `${question.questionNumber}번 ${question.difficulty} ${question.mainType || question.unitName || "유형 미입력"}`
  )).join(" | ").slice(0, 3000);
  return [
    `[분석 메타]`,
    `제목: ${analysisRun.title || ""}`,
    `학교/학년/고사/과목: ${[analysisRun.schoolName, analysisRun.grade, analysisRun.examCycle || analysisRun.examTerm, analysisRun.subject].filter(Boolean).join(" · ")}`,
    `총 문항 수: ${total}`,
    "",
    "[검수 저장본 요약]",
    `대단원/중단원 분포: ${partSummary || "없음"}`,
    `난이도 분포: ${difficultySummary || "없음"}`,
    `문항 흐름: ${questionFlow || "없음"}`,
    "",
    "[선생님 선택 주요문항]",
    importantSummary
  ].join("\n");
}

function buildExamAnalysisOutputPrompt({ outputType, detail, inputs }) {
  const editorialChecklist = [
    "- 인사와 학교/학년/고사 소개가 자연스럽게 시작되는지",
    "- 시험 개요에 문항 구성, 배점, 범위, 등급컷 또는 예상컷이 필요한 만큼 들어갔는지",
    "- 초반/중반/후반 출제 흐름과 체감 난도가 설명되는지",
    "- 주요문항마다 문항번호, 유사교재, 핵심 개념, 학생이 흔들릴 지점, 풀이 방향이 보이는지",
    "- 다음 학습 방향과 수업/특강/상담 연결이 과장 없이 이어지는지"
  ].join("\n");
  const benchmarkFormatRules = [
    "[벤치마킹 문체/강조 규칙]",
    "- 모바일 블로그에서 읽기 좋게 한 문단은 1~2줄 중심으로 짧게 끊는다.",
    "- AI가 쓴 티가 나는 과장된 문장, 추상적인 홍보 문구, 같은 접속사의 반복을 피한다.",
    "- 인사말 끝에는 😊를 1회 사용한다.",
    "- 주요문항 섹션 시작에는 📌를 사용한다.",
    "- 핵심 포인트, 자주 틀리는 지점, 다음 대비 체크에는 ✅를 사용한다.",
    "- 특강/상담/블로그 유입 CTA에는 ⬇️⬇️를 사용한다.",
    "- 위치에는 📍, 전화번호에는 ☎를 사용한다.",
    "- 형광펜이 필요한 문장은 텍스트로 [형광펜: 하늘색]...[/형광펜] 또는 [형광펜: 노랑]...[/형광펜]처럼 표시한다.",
    "- 하늘색 형광펜은 핵심 결론/전문성, 노랑 형광펜은 실수 포인트/주의 지점에만 쓴다.",
    "- 정답과 상세 풀이를 길게 공개하지 말고, 출제 의도/실수 가능성/대비 전략 중심으로 쓴다."
  ].join("\n");
  const aiBoundaryRules = [
    "[AI 편집 가능/불가 경계]",
    ...examAnalysisOutputAiBoundaryRules.map((rule) => `- ${rule}`)
  ].join("\n");
  const cardNewsModel = createExamAnalysisCardNewsModel(inputs.keyQuestionBlocks);
  const canvaCardRules = [
    `[cardNewsModel - 6개 슬라이드 유형 기반 ${cardNewsModel.length}장 구조]`,
    "핵심: 6개 슬라이드 유형은 cover, examStructure, overallReview, keyQuestion, solution, closing이다.",
    "주요문항/손풀이 쌍은 keyQuestionBlocks 개수만큼 반복한다.",
    "주요문항이 3개이면 keyQuestion/solution 쌍을 반복해 총 10장 기준이 된다.",
    "시작/시험구조/총평/마무리는 통렌더하고, 주요문항/손풀이 카드는 선생님이 직접 crop한 문제/손풀이 이미지만 슬롯에 넣는다.",
    ...cardNewsModel.map(([card, type, role, renderMode, slot]) => (
      `카드 ${card}: ${role} (${type}) [${renderMode}] - ${slot}`
    ))
  ].join("\n");
  const blogBlockSummary = [
    "[blogBlocks - 블로그 흐름 블록 메모]",
    "주의: 18개 섹션은 벤치마킹 예시일 뿐 고정 구조가 아니다. 아래 블록 메모를 카드 사이에 조립한다.",
    ...examAnalysisBlogBlockFields.map(([key, order, label, type]) => (
      `${order}. ${label} (${type}): ${inputs[key] || "(미입력)"}`
    ))
  ].join("\n");
  const keyQuestionBlockSummary = [
    "[keyQuestionBlocks - 주요문항 반복 블록]",
    "주의: 주요문항은 고정 1개가 아니다. 선생님이 추가한 블록 수만큼 주요문항 설명과 손풀이 설명을 반복한다.",
    ...normalizeExamAnalysisKeyQuestionBlocks(inputs).map((block, index) => [
      `주요문항 ${index + 1}`,
      `문항번호: ${block.questionNumber || "(미입력)"}`,
      `카드 제목/핵심: ${block.title || "(미입력)"}`,
      `선생님 선택 이유: ${block.selectionReason || "(미입력)"}`,
      `유사유형 근거: ${block.similarTypeEvidence || "(미입력)"}`,
      `주요문항 설명: ${block.questionMemo || "(미입력)"}`,
      `자주 틀리는 지점: ${block.mistakePoint || "(미입력)"}`,
      `손풀이 설명: ${block.solutionMemo || "(미입력)"}`,
      `이미지 슬롯 메모: ${block.imageSlotMemo || "(미입력)"}`
    ].join("\n"))
  ].join("\n\n");
  const inputSummary = [
    `[선생님 작성 원문 - 최우선 원천]`,
    `공개 범위: ${inputs.visibility}`,
    `첫 문단 핵심 요약: ${inputs.oneLineReview || "(미입력)"}`,
    `시험 흐름/체감 난도: ${inputs.flowReview || "(미입력)"}`,
    `변별 문항/흔들린 지점: ${inputs.scoreGapPoint || "(미입력)"}`,
    `다음 학습 방향: ${inputs.nextStudyPlan || "(미입력)"}`,
    `6개 슬라이드 유형/슬롯 메모: ${inputs.imageSlotNotes || "(미입력)"}`,
    `수업/상담 연결 메모: ${inputs.schoolVariationNotes || "(미입력)"}`,
    "",
    "[GPT Image/카드뉴스 체크리스트 - 선생님 확정 입력]",
    `시험일: ${inputs.checklistExamDate || "(미입력)"}`,
    `시험범위: ${inputs.checklistExamRange || "(미입력)"}`,
    `교과서/출판사: ${inputs.checklistTextbookPublisher || "(미입력)"}`,
    `등급컷/예상 등급컷: ${inputs.checklistGradeCut || "(미입력)"}`,
    `부교재/모의고사/학습지 출제 근거: ${inputs.checklistSourceEvidence || "(미입력)"}`,
    `쓰면 안 되는 교재명: ${inputs.checklistForbiddenTextbook || "(미입력)"}`,
    `확인 안 된 문항번호: ${inputs.checklistUnconfirmedQuestions || "(미입력)"}`,
    `AI가 추측하면 안 되는 내용: ${inputs.checklistAiNoGuess || "(미입력)"}`,
    "",
    blogBlockSummary,
    "",
    keyQuestionBlockSummary
  ].join("\n");
  const sharedRules = [
    "역할: 수학학원 시험분석 공개 산출물 편집자",
    "원칙: 선생님 작성 원문을 최우선 원천으로 삼고, 검수 저장본 수치와 주요문항만 보조 자료로 쓴다.",
    "금지: 문제 본문/정답/상세 풀이를 길게 노출하지 않는다. 없는 사실을 만들거나 학교/학생을 단정적으로 평가하지 않는다.",
    "문장 방향: 벤치마킹 블로그처럼 인사/시험 소개, 시험 개요, 출제 흐름, 주요문항, 다음 학습 방향, 특강/상담 연결 순서로 쓴다.",
    "개괄 정보 사용법: 단원/난이도/문항 흐름/주요문항 수치는 답변의 근거로만 쓰고, 수치 자체를 길게 나열하지 않는다.",
    "편집 점검 기준: 아래 항목을 그대로 소제목/카드 제목으로 쓰지 않아도 된다. 다만 초안을 다 읽고 나면 아래 질문에 대한 답이 자연스럽게 보여야 한다.",
    editorialChecklist,
    "톤: 전문적이되 과장하지 말고, 학부모가 읽어도 바로 이해되게 쓴다.",
    "브랜드 톤: 으뜸수학 고태영T 기준으로 블루/화이트 계열의 차분하고 전문적인 인상을 전제로 쓴다.",
    benchmarkFormatRules,
    aiBoundaryRules,
    canvaCardRules,
    "",
    inputSummary,
    "",
    buildExamAnalysisOutputContext(detail)
  ];
  if (outputType === "instagram") {
    return [
      ...sharedRules,
      "",
      "[출력 형식]",
      `인스타/Canva 카드뉴스 초안을 cardNewsModel 기준 ${cardNewsModel.length}장으로 작성한다.`,
      "각 카드마다 cardNewsModel의 type과 제작 방식을 명시한다.",
      "주요문항/손풀이 카드는 사람이 직접 crop한 이미지가 들어갈 슬롯 안내만 쓴다.",
      "각 카드는 아래 형식을 정확히 반복한다.",
      "[카드 n] 제목",
      "유형: cover/examStructure/overallReview/keyQuestion/solution/closing 중 하나",
      "본문: 모바일에서 읽히는 2~4줄",
      "제작 방식: 통렌더 또는 문제 이미지 슬롯 또는 손풀이 이미지 슬롯",
      "이미지 슬롯: 주요문항/손풀이 카드에만 들어갈 선생님 crop 이미지",
      "강조: 형광펜 색 또는 이모티콘 사용 위치",
      "",
      "마지막 카드에는 반드시 다음 학습 방향과 특강/상담 CTA를 넣는다.",
      "마지막에 인스타 캡션 초안을 5~8줄로 붙이고, 더 자세한 해설은 블로그에서 확인하라는 문장을 포함한다."
    ].join("\n");
  }
  return [
    ...sharedRules,
    "",
    "[출력 형식]",
    "네이버 블로그 초안을 작성한다. 벤치마킹 블로그처럼 사람이 쓴 시험분석 글처럼 보이게 짧은 문단으로 쓴다.",
    "제목 후보 3개를 먼저 쓴다. 제목에는 학교명, 학년, 고사, 수학/과목, 시험분석 키워드를 자연스럽게 포함한다.",
    "본문 구조는 blogBlocks를 기준으로 조립한다. 18개 섹션 순서를 고정하지 않는다.",
    "블로그는 전체를 통이미지로 만들지 말고, 일반 줄글과 카드 이미지 삽입 위치를 섞는다.",
    "권장 흐름: 인사/시험 소개 -> [card-01.png 삽입] -> 시험 개요/구조 -> [card-02.png 삽입] -> 출제 흐름/체감 정리 -> [card-03.png 삽입] -> 주요문항 설명/카드 -> 손풀이 설명/카드 쌍을 keyQuestionBlocks 수만큼 반복 -> 다음 학습 방향 -> 마지막 카드 삽입 -> 특강/상담 CTA.",
    "주요문항 섹션은 📌로 시작하고, 핵심 포인트와 자주 틀리는 지점에는 ✅를 사용한다.",
    "주요문항/손풀이 이미지 자체는 사람이 직접 crop해서 넣으므로 AI가 문제 이미지나 풀이 이미지를 만들거나 추측하지 않는다.",
    "네이버 에디터에서 사람이 형광펜을 적용할 수 있도록 [형광펜: 색] 표시를 유지한다."
  ].join("\n");
}

async function runAnthropicExamAnalysisOutputDraft(prompt, outputType) {
  const apiKey = apiEnvValue("ANTHROPIC_API_KEY");
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY 환경변수가 필요합니다.");
  const model = apiEnvValue("ANTHROPIC_EXAM_OUTPUT_MODEL") || apiEnvValue("ANTHROPIC_MODEL") || "claude-sonnet-4-5";
  const response = await fetch(anthropicMessagesUrl, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify({
      model,
      max_tokens: outputType === "blog" ? 6500 : 4800,
      messages: [{ role: "user", content: [{ type: "text", text: prompt }] }]
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude 시험분석 산출물 초안 생성에 실패했습니다.");
  }
  return {
    provider: "anthropic",
    model,
    text: outputTextFromAnthropicResponse(data)
  };
}

async function runOpenAiExamAnalysisOutputDraft(prompt, outputType) {
  const apiKey = apiEnvValue("OPENAI_API_KEY");
  if (!apiKey) throw new Error("OPENAI_API_KEY 환경변수가 필요합니다.");
  const model = apiEnvValue("OPENAI_EXAM_OUTPUT_MODEL") || apiEnvValue("OPENAI_MODEL") || "gpt-4.1-mini";
  const response = await fetch(openAiResponsesUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: [{ role: "user", content: [{ type: "input_text", text: prompt }] }],
      max_output_tokens: outputType === "blog" ? 6500 : 4800
    })
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI 시험분석 산출물 초안 생성에 실패했습니다.");
  }
  return {
    provider: "openai",
    model,
    text: outputTextFromOpenAiResponse(data)
  };
}

async function runExamAnalysisOutputDraftAi({ outputType, prompt } = {}) {
  if (apiEnvValue("ANTHROPIC_API_KEY")) {
    return runAnthropicExamAnalysisOutputDraft(prompt, outputType);
  }
  if (apiEnvValue("OPENAI_API_KEY")) {
    return runOpenAiExamAnalysisOutputDraft(prompt, outputType);
  }
  throw new Error("ANTHROPIC_API_KEY 또는 OPENAI_API_KEY 환경변수가 필요합니다.");
}

async function saveExamAnalysisOutputDrafts({ analysisRunId, outputInputs = {}, blogTeacherDraft, instagramTeacherDraft, blogTeacherDraftEdited = false, instagramTeacherDraftEdited = false } = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");
  const now = new Date().toISOString();
  const previousAuditSummary = detail.analysisRun.auditSummary ?? {};
  const previousDrafts = getExamAnalysisOutputDrafts(previousAuditSummary);
  const nextDrafts = {
    ...previousDrafts,
    inputs: {
      ...normalizeExamAnalysisOutputInputs({ ...previousDrafts.inputs, ...outputInputs }),
      updatedAt: now
    },
    blog: {
      ...previousDrafts.blog,
      ...(blogTeacherDraftEdited ? {
        teacherDraft: cleanExamAnalysisOutputText(blogTeacherDraft, 20000),
        teacherUpdatedAt: now
      } : {}),
      updatedAt: now
    },
    instagram: {
      ...previousDrafts.instagram,
      ...(instagramTeacherDraftEdited ? {
        teacherDraft: cleanExamAnalysisOutputText(instagramTeacherDraft, 20000),
        teacherUpdatedAt: now
      } : {}),
      updatedAt: now
    }
  };
  nextDrafts.blog.status = nextDrafts.blog.teacherUpdatedAt ? "teacher_saved" : nextDrafts.blog.aiDraft ? "ai_draft" : "inputs_saved";
  nextDrafts.instagram.status = nextDrafts.instagram.teacherUpdatedAt ? "teacher_saved" : nextDrafts.instagram.aiDraft ? "ai_draft" : "inputs_saved";
  await updateExamAnalysisRun(analysisRunId, {
    auditSummary: {
      ...previousAuditSummary,
      outputDrafts: nextDrafts
    }
  });
  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "exam_analysis_output_draft_saved",
    message: "시험분석 블로그/인스타 산출물 초안이 저장되었습니다.",
    payload: {
      hasBlogTeacherDraft: Boolean(nextDrafts.blog.teacherDraft),
      hasInstagramTeacherDraft: Boolean(nextDrafts.instagram.teacherDraft),
      visibility: nextDrafts.inputs.visibility,
      keyQuestionBlockCount: normalizeExamAnalysisKeyQuestionBlocks(nextDrafts.inputs).length
    }
  });
  return getExamAnalysisRun(analysisRunId);
}

async function generateExamAnalysisOutputDraft({ analysisRunId, outputType, outputInputs = {} } = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  if (!["blog", "instagram"].includes(outputType)) throw new Error("outputType은 blog 또는 instagram이어야 합니다.");
  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");
  const now = new Date().toISOString();
  const previousAuditSummary = detail.analysisRun.auditSummary ?? {};
  const previousDrafts = getExamAnalysisOutputDrafts(previousAuditSummary);
  const inputs = normalizeExamAnalysisOutputInputs({ ...previousDrafts.inputs, ...outputInputs });
  const hasTeacherInput = [
    inputs.oneLineReview,
    inputs.flowReview,
    inputs.scoreGapPoint,
    inputs.nextStudyPlan,
    inputs.imageSlotNotes,
    inputs.schoolVariationNotes,
    ...examAnalysisGptChecklistManualFields.map((key) => inputs[key]),
    ...examAnalysisBlogBlockFields.map(([key]) => inputs[key]),
    ...normalizeExamAnalysisKeyQuestionBlocks(inputs).flatMap((block) => examAnalysisKeyQuestionBlockFields.map((key) => block[key]))
  ].some(Boolean);
  if (!hasTeacherInput) {
    throw new Error("먼저 기본 메모, 블로그 흐름 블록, 주요문항 카드 중 하나 이상을 작성해 주세요.");
  }
  const prompt = buildExamAnalysisOutputPrompt({ outputType, detail, inputs });
  const generated = await runExamAnalysisOutputDraftAi({ outputType, prompt });
  const nextDrafts = {
    ...previousDrafts,
    inputs: {
      ...inputs,
      updatedAt: now
    },
    [outputType]: {
      ...previousDrafts[outputType],
      aiDraft: cleanExamAnalysisOutputText(generated.text, 20000),
      provider: generated.provider,
      model: generated.model,
      generatedAt: now,
      updatedAt: now,
      status: previousDrafts[outputType]?.teacherUpdatedAt ? "teacher_saved" : "ai_draft"
    }
  };
  await updateExamAnalysisRun(analysisRunId, {
    auditSummary: {
      ...previousAuditSummary,
      outputDrafts: nextDrafts
    }
  });
  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "exam_analysis_output_draft_generated",
    message: outputType === "blog" ? "블로그 초안이 생성되었습니다." : "인스타 카드 초안이 생성되었습니다.",
    payload: {
      outputType,
      provider: generated.provider,
      model: generated.model,
      preservedTeacherDraft: Boolean(previousDrafts[outputType]?.teacherUpdatedAt),
      keyQuestionBlockCount: normalizeExamAnalysisKeyQuestionBlocks(inputs).length
    }
  });
  return getExamAnalysisRun(analysisRunId);
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

async function runAnthropicPdfQuestionRowFill(sourceFile, buffer, detail, options = {}) {
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
            { type: "text", text: buildPdfQuestionRowFillPrompt({ sourceFile, analysisRun: detail.analysisRun, questions: detail.questions, ...options }) }
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

async function runOpenAiPdfQuestionRowFill(sourceFile, buffer, detail, options = {}) {
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
            { type: "input_text", text: buildPdfQuestionRowFillPrompt({ sourceFile, analysisRun: detail.analysisRun, questions: detail.questions, ...options }) }
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

async function runPdfQuestionRowFill(sourceFile, buffer, detail, options = {}) {
  if (apiEnvValue("ANTHROPIC_API_KEY")) {
    return runAnthropicPdfQuestionRowFill(sourceFile, buffer, detail, options);
  }
  if (apiEnvValue("OPENAI_API_KEY")) {
    return runOpenAiPdfQuestionRowFill(sourceFile, buffer, detail, options);
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
    const verifiedSubject = getExamAnalysisSsenSubject({
      sourceFile,
      analysisRun: {
        ...(detail.analysisRun ?? {}),
        extractionSummary: {
          ...previousSummary,
          visionCheck
        }
      }
    });
    const runResult = await updateExamAnalysisRun(sourceFile.analysisRunId, {
      subject: verifiedSubject || detail.analysisRun?.subject || "",
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
    rowFillResult.mode = "fill";
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

async function refineExamAnalysisQuestionRowsWithAi({ analysisRunId, sourceId, targetQuestionNumbers = [] } = {}) {
  if (!analysisRunId) throw new Error("analysisRunId가 필요합니다.");
  const detail = await getExamAnalysisRun(analysisRunId);
  if (!detail.analysisRun?.analysisRunId) throw new Error("시험분석 작업을 찾지 못했습니다.");
  if (!detail.questions?.length) throw new Error("고정 문항 행을 먼저 생성해 주세요.");
  const targetNumbers = [...new Set((Array.isArray(targetQuestionNumbers) ? targetQuestionNumbers : [])
    .map(Number)
    .filter((number) => Number.isInteger(number) && number > 0))]
    .sort((a, b) => a - b);
  if (!targetNumbers.length) throw new Error("AI 2차 수정 대상 문항을 선택해 주세요.");
  const targetSet = new Set(targetNumbers);
  const targetQuestions = detail.questions.filter((question) => targetSet.has(Number(question.questionNumber)));
  if (!targetQuestions.length) throw new Error("선택한 문항 행을 찾지 못했습니다.");
  const lockedNumbers = targetQuestions
    .filter((question) => question.teacherOverride || question.rowStatus === "teacher_edited" || question.rowStatus === "confirmed")
    .map((question) => Number(question.questionNumber));
  const runnableNumbers = targetNumbers.filter((number) => !lockedNumbers.includes(number));
  if (!runnableNumbers.length) {
    throw new Error("선생님이 수정/확정한 문항은 AI가 덮어쓸 수 없습니다. 수정본을 유지하거나 해당 분석을 다시 만들어 주세요.");
  }
  const sourceFile = sourceId
    ? detail.sources?.find((source) => source.sourceId === sourceId)
    : detail.sources?.[0];
  if (!sourceFile?.sourceId) throw new Error("PDF 원본 정보를 찾지 못했습니다.");
  const buffer = await downloadStorageObject(sourceFile.bucketId || examAnalysisSourceBucket, sourceFile.storagePath);

  await updateExamAnalysisRun(analysisRunId, { workflowStatus: "missing_retry_running" });
  await recordExamAnalysisEvent({
    analysisRunId,
    eventType: "question_rows_refine_started",
    message: `AI 2차 수정을 시작했습니다. 대상 ${runnableNumbers.join(", ")}번.`,
    payload: { sourceId: sourceFile.sourceId, targetQuestionNumbers: runnableNumbers, skippedLockedNumbers: lockedNumbers }
  });

  try {
    const rowFillResult = await runPdfQuestionRowFill(sourceFile, buffer, detail, {
      mode: "refine",
      targetQuestionNumbers: runnableNumbers
    });
    rowFillResult.mode = "refine";
    rowFillResult.targetQuestionNumbers = runnableNumbers;
    rowFillResult.skippedLockedNumbers = lockedNumbers;
    const saved = await saveExamAnalysisQuestionRowFill({
      analysisRunId,
      sourceId: sourceFile.sourceId,
      rowFillResult
    });
    return {
      ...saved,
      rowRefineResult: {
        provider: rowFillResult.provider,
        model: rowFillResult.model,
        targetQuestionNumbers: runnableNumbers,
        skippedLockedNumbers: lockedNumbers,
        returnedCount: rowFillResult.rows.length,
        missingQuestionNumbers: rowFillResult.missingQuestionNumbers,
        summary: rowFillResult.summary
      }
    };
  } catch (error) {
    await updateExamAnalysisRun(analysisRunId, { workflowStatus: "missing_audit_needed" });
    await recordExamAnalysisEvent({
      analysisRunId,
      eventType: "question_rows_refine_failed",
      message: "AI 2차 수정에 실패했습니다.",
      payload: { sourceId: sourceFile.sourceId, targetQuestionNumbers: runnableNumbers, error: error.message }
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
  const lessonNotificationContext = await createLessonNotificationDispatchContext(jobs);

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
      const prepared = refreshLessonCommentJobBeforeSend(claimedJob, lessonNotificationContext);
      if (prepared.action === "cancel") {
        await upsertNotificationJob(prepared.job);
        processed.push({
          error: prepared.job.error,
          notificationJobId: claimedJob.notificationJobId,
          status: "canceled"
        });
        continue;
      }

      const result = await sendNotificationJob(prepared.job, { forceDryRun });
      const status = result?.dryRun ? "dry_run" : "sent";
      const updatedJob = {
        ...prepared.job,
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

function formatAcademyReminderSlackItem(reminder = {}, students = []) {
  const student = students.find((item) => item.studentId === reminder.studentId);
  const sourcePayload = reminder.sourcePayload && typeof reminder.sourcePayload === "object" ? reminder.sourcePayload : {};
  return {
    ...reminder,
    date: reminder.reminderDate || reminder.date,
    time: reminder.reminderTime || reminder.time,
    memo: reminder.content || reminder.memo,
    className: sourcePayload.className || reminder.className || "",
    studentName: student?.name || reminder.studentName || "",
    lessonName: reminder.title
  };
}

async function sendTodayTeacherScheduleSlack({ date = getKoreaDateString(), force = false, notifyEmpty = true } = {}) {
  const [{ lessons }, { students }, { academyReminders }] = await Promise.all([
    listLessons({ date }),
    listStudents(),
    listAcademyReminders({ date, includeDone: false })
  ]);
  const activeLessons = (lessons ?? []).filter((lesson) => !["canceled", "deleted"].includes(lesson.status));
  const reminders = (academyReminders ?? [])
    .filter((reminder) => reminder.slackNotify !== false)
    .map((reminder) => formatAcademyReminderSlackItem(reminder, students ?? []));
  const supplements = activeLessons
    .filter(isSupplementLesson)
    .filter((lesson) => !isRetestLesson(lesson))
    .map((lesson) => formatTeacherScheduleItem(lesson, students ?? []));
  const retests = activeLessons
    .filter(isRetestLesson)
    .map((lesson) => formatTeacherScheduleItem(lesson, students ?? []));

  if (!notifyEmpty && reminders.length === 0 && supplements.length === 0 && retests.length === 0) {
    return { skipped: true, date, reminders, supplements, retests };
  }

  const notificationJobId = `slack_daily_summary_${date}`;
  const existingJob = await getNotificationJob(notificationJobId);
  if (!force && existingJob.notificationJob?.status === "sent") {
    return { skipped: true, reason: "already_sent", date, reminders, retests, supplements };
  }

  const result = await sendSlackDailyScheduleSummary({ date, reminders, retests, supplements });
  await upsertNotificationJob({
    notificationJobId,
    notificationType: "slack_daily_summary",
    target: "slack",
    recipient: "SLACK_WEBHOOK_URL",
    scheduledAt: `${date}T00:00:00.000Z`,
    payload: { date, reminders, retests, supplements },
    previewBody: result.text,
    status: result.dryRun ? "dry_run" : "sent",
    provider: "slack",
    result
  });
  return { date, result, reminders, retests, supplements };
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

  if (request.method === "GET" && requestUrl.pathname === "/api/special-lecture-guides") {
    try {
      const result = await listAppState();
      const hasSpecialLectureGuides = Array.isArray(result.states?.specialLectureGuides);
      const specialLectureGuides = hasSpecialLectureGuides
        ? result.states.specialLectureGuides
        : [];
      sendJson(request, response, 200, {
        hasSpecialLectureGuides,
        ok: true,
        source: result.source,
        specialLectureGuides
      });
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

  if (request.method === "GET" && requestUrl.pathname === "/api/test-sessions") {
    try {
      const result = await listTestSessions({
        testDate: requestUrl.searchParams.get("date") || requestUrl.searchParams.get("testDate") || "",
        classTemplateId: requestUrl.searchParams.get("classTemplateId") || ""
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/test-attempts") {
    try {
      const result = await listTestAttempts({
        testSessionId: requestUrl.searchParams.get("testSessionId") || "",
        studentId: requestUrl.searchParams.get("studentId") || ""
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/test-sessions") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertTestSessionWithAttempts(payload.testSession ?? payload.session ?? payload, payload.testAttempts ?? payload.attempts ?? []);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/test-sessions") {
    try {
      const testSessionId = requestUrl.searchParams.get("testSessionId") || requestUrl.searchParams.get("id") || "";
      const result = await deleteTestSession(testSessionId);
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

  if (request.method === "GET" && requestUrl.pathname === "/api/exam-analysis-ssen-types") {
    try {
      const analysisRunId = requestUrl.searchParams.get("analysisRunId") || "";
      const detail = analysisRunId ? await getExamAnalysisRun(analysisRunId) : null;
      const result = getSsenTypeCatalogForExamAnalysis({
        subject: requestUrl.searchParams.get("subject") || "",
        scope: requestUrl.searchParams.get("scope") || "",
        analysisRun: detail?.analysisRun ?? null,
        sourceFiles: detail?.sources ?? [],
        questions: detail?.questions ?? []
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

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/refine-question-rows") {
    try {
      const payload = await readJsonBody(request);
      const result = await refineExamAnalysisQuestionRowsWithAi({
        analysisRunId: payload.analysisRunId,
        sourceId: payload.sourceId,
        targetQuestionNumbers: payload.targetQuestionNumbers
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/save-question-reviews") {
    try {
      const payload = await readJsonBody(request);
      const result = await saveExamAnalysisQuestionTeacherReviews({
        analysisRunId: payload.analysisRunId,
        reviews: payload.reviews
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/save-output-drafts") {
    try {
      const payload = await readJsonBody(request);
      const result = await saveExamAnalysisOutputDrafts({
        analysisRunId: payload.analysisRunId,
        outputInputs: payload.outputInputs,
        blogTeacherDraft: payload.blogTeacherDraft,
        instagramTeacherDraft: payload.instagramTeacherDraft,
        blogTeacherDraftEdited: payload.blogTeacherDraftEdited,
        instagramTeacherDraftEdited: payload.instagramTeacherDraftEdited
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/exam-analysis-runs/generate-output-draft") {
    try {
      const payload = await readJsonBody(request);
      const result = await generateExamAnalysisOutputDraft({
        analysisRunId: payload.analysisRunId,
        outputType: payload.outputType,
        outputInputs: payload.outputInputs
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

  if (request.method === "DELETE" && requestUrl.pathname === "/api/exam-analysis-source-files") {
    try {
      const sourceId = requestUrl.searchParams.get("id") || requestUrl.searchParams.get("sourceId");
      if (!sourceId) throw new Error("sourceId가 필요합니다.");
      const { sourceFile } = await getExamAnalysisSource(sourceId);
      if (!sourceFile?.sourceId) throw new Error("PDF 원본 정보를 찾지 못했습니다.");
      const storageDeleted = await deleteStorageObject(sourceFile.bucketId || examAnalysisSourceBucket, sourceFile.storagePath);
      const result = await deleteExamAnalysisSource(sourceId);
      sendJson(request, response, 200, {
        ok: true,
        ...result,
        storageDeleted
      });
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

  if (request.method === "GET" && requestUrl.pathname === "/api/special-lecture-applications") {
    try {
      const result = await listSpecialLectureApplications();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/special-lecture-applications") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertSpecialLectureApplication(payload.application ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/special-lecture-applications/tally") {
    try {
      const payload = await readJsonBody(request);
      const signature = request.headers["tally-signature"];
      if (!verifyTallyWebhookSignature(payload, Array.isArray(signature) ? signature[0] : signature)) {
        sendJson(request, response, 401, { ok: false, error: "Invalid Tally signature." });
        return;
      }
      const application = normalizeSpecialLectureApplicationPayload(payload);
      const result = await upsertSpecialLectureApplication(application);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/special-lecture-enrollments") {
    try {
      const result = await listSpecialLectureEnrollments();
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/special-lecture-enrollments") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertSpecialLectureEnrollment(payload.enrollment ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/special-lecture-enrollments/bulk") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertSpecialLectureEnrollments(payload.enrollments ?? []);
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
      const date = requestUrl.searchParams.get("date");
      const result = date
        ? await listLessonStudentRecordsForLessons((await listLessons({ date })).lessons ?? [])
        : await listLessonStudentRecords();
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

  if (request.method === "POST" && requestUrl.pathname === "/api/lesson-records/notification-status") {
    try {
      const payload = await readJsonBody(request);
      const result = await patchLessonStudentRecordNotificationStatus(payload.record ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/lesson-records/prune-stale") {
    try {
      const payload = await readJsonBody(request);
      const result = await pruneStaleLessonStudentRecords(payload.lessonId);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/attendance/check") {
    try {
      const payload = await readJsonBody(request);
      const result = await handleAttendanceCheck(payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/attendance/preview") {
    try {
      const payload = await readJsonBody(request);
      const result = await handleAttendanceCheck({
        ...payload,
        previewOnly: true,
        sendAlimtalk: false
      });
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

  if (request.method === "GET" && requestUrl.pathname === "/api/academy-reminders") {
    try {
      const result = await listAcademyReminders({
        date: requestUrl.searchParams.get("date") ?? "",
        from: requestUrl.searchParams.get("from") ?? "",
        to: requestUrl.searchParams.get("to") ?? "",
        includeDone: requestUrl.searchParams.get("includeDone") === "true",
        status: requestUrl.searchParams.get("status") ?? ""
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/academy-reminders") {
    try {
      const payload = await readJsonBody(request);
      const result = await upsertAcademyReminder(payload.academyReminder ?? payload.reminder ?? payload);
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "DELETE" && requestUrl.pathname === "/api/academy-reminders") {
    try {
      const result = await deleteAcademyReminder(requestUrl.searchParams.get("id"));
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
      const notificationJobFilters = getNotificationJobQueryFilters(requestUrl);
      const result = await listNotificationJobs({ limit: requestUrl.searchParams.get("limit") || 300, ...notificationJobFilters });
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

  if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/cancel") {
    try {
      const payload = await readJsonBody(request);
      const notificationJobId = payload.notificationJobId || payload.id;
      if (!notificationJobId) throw new Error("취소할 알림톡 예약 ID가 필요합니다.");
      const reason = payload.reason || "선생님 예약 취소";
      const existing = await getNotificationJob(notificationJobId);
      const job = existing.notificationJob;
      if (!job) throw new Error("취소할 알림톡 예약을 찾지 못했습니다.");
      const providerGroupId =
        job.providerMessageId ||
        getProviderMessageId(job.result) ||
        getProviderMessageId(job.result?.result) ||
        job.result?.groupId ||
        job.result?.result?.groupId ||
        "";
      let solapiCancellation = null;
      if (payload.cancelSolapi !== false && job.provider === "solapi" && providerGroupId) {
        solapiCancellation = await cancelSolapiReservationGroup(providerGroupId);
      }
      const result = await cancelNotificationJob(notificationJobId, reason);
      sendJson(request, response, 200, { ok: true, ...result, solapiCancellation });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reserve") {
    try {
      const payload = await readJsonBody(request);
      const notificationJob = payload.notificationJob ?? payload;
      const result = await reserveNotificationJobInSolapi(notificationJob, {
        forceDryRun: Boolean(payload.forceDryRun),
        reason: payload.reason || "수업일지 예약"
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/reconcile-solapi") {
    try {
      const payload = await readJsonBody(request);
      const result = await reconcileSolapiNotificationJobs({
        date: payload.date || "",
        lessonId: payload.lessonId || "",
        limit: payload.limit || 500,
        notificationJobIds: payload.notificationJobIds ?? [],
        scheduledFrom: payload.scheduledFrom || "",
        scheduledTo: payload.scheduledTo || ""
      });
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

  if (request.method === "GET" && requestUrl.pathname === "/api/solapi/messages") {
    try {
      const { startIso, endIso } = getKoreaDayUtcRange(requestUrl.searchParams.get("date") || "");
      const result = await listSolapiMessages({
        endDate: requestUrl.searchParams.get("endDate") || endIso,
        groupId: requestUrl.searchParams.get("groupId") || "",
        limit: requestUrl.searchParams.get("limit") || 100,
        messageId: requestUrl.searchParams.get("messageId") || "",
        startDate: requestUrl.searchParams.get("startDate") || startIso,
        statusCode: requestUrl.searchParams.get("statusCode") || "",
        to: requestUrl.searchParams.get("to") || "",
        type: requestUrl.searchParams.get("type") || "ATA"
      });
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && requestUrl.pathname === "/api/solapi/groups") {
    try {
      const { startIso, endIso } = getKoreaDayUtcRange(requestUrl.searchParams.get("date") || "");
      const result = await listSolapiGroups({
        endDate: requestUrl.searchParams.get("endDate") || endIso,
        groupId: requestUrl.searchParams.get("groupId") || "",
        limit: requestUrl.searchParams.get("limit") || 100,
        startDate: requestUrl.searchParams.get("startDate") || startIso
      });
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
      if (!result.deletedNotificationJobIds?.includes(notificationJobId)) {
        sendJson(request, response, 409, {
          ok: false,
          error: "삭제 가능한 알림 이력이 아니거나 이미 삭제된 기록입니다."
        });
        return;
      }
      sendJson(request, response, 200, { ok: true, ...result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/solapi/groups/cancel") {
    try {
      const payload = await readJsonBody(request);
      const groupId = payload.groupId || payload.id;
      if (!groupId) throw new Error("취소할 Solapi groupId가 필요합니다.");
      const result = await cancelSolapiReservationGroup(groupId);
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
        force: payload.force === true,
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


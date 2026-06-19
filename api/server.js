import http from "node:http";
import {
  deleteResourceMaterial,
  getCoreDataStatus,
  listClassTemplates,
  listHomeworks,
  listLessons,
  listLessonStudentRecords,
  listNotificationJobs,
  listResourceMaterials,
  listStudents,
  seedCoreData,
  upsertHomework,
  upsertHomeworks,
  upsertLesson,
  upsertLessons,
  upsertNotificationJob,
  upsertResourceMaterial,
  upsertStudent,
  upsertStudents,
  upsertLessonStudentRecord
} from "./routes/coreData.js";
import { loadEnvFile } from "./lib/loadEnv.js";
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

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2_000_000) {
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

  if (!hasText(payload.lessonDate) && !hasText(job.scheduledAt)) missing.push("수업일");

  const hasMessage = hasText(payload.message) || hasText(payload.reportBody) || hasText(payload.preparationNotice);
  if (!hasMessage) missing.push("본문/코멘트");

  if (job.notificationType === "daily_report" || job.notificationType === "parent_comment") {
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
    target: job.notificationType === "student_comment" ? "student" : payload.target ?? "parent"
  });
}

async function dispatchDueNotificationJobs({ forceDryRun = false, limit = 20, now = new Date().toISOString() } = {}) {
  const listed = await listNotificationJobs();
  const nowTime = new Date(now).getTime();
  if (Number.isNaN(nowTime)) throw new Error("now must be a valid date string.");

  const jobs = (listed.notificationJobs ?? [])
    .filter((job) => dispatchableNotificationStatuses.has(job.status))
    .filter((job) => {
      if (!job.scheduledAt) return true;
      const scheduledTime = new Date(job.scheduledAt).getTime();
      return !Number.isNaN(scheduledTime) && scheduledTime <= nowTime;
    })
    .slice(0, Math.max(1, Number(limit) || 20));

  const processed = [];
  for (const job of jobs) {
    try {
      const result = await sendNotificationJob(job, { forceDryRun });
      const status = result?.dryRun ? "dry_run" : "sent";
      const updatedJob = {
        ...job,
        status,
        result,
        provider: "solapi",
        providerMessageId: getProviderMessageId(result),
        error: ""
      };
      await upsertNotificationJob(updatedJob);
      processed.push({ notificationJobId: job.notificationJobId, status, result });
    } catch (error) {
      const failedJob = {
        ...job,
        status: "failed",
        error: error.message
      };
      await upsertNotificationJob(failedJob);
      processed.push({ error: error.message, notificationJobId: job.notificationJobId, status: "failed" });
    }
  }

  return {
    dryRun: forceDryRun || getNotificationStatus().dryRun,
    processed,
    processedCount: processed.length,
    source: listed.source
  };
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

  if (request.method === "POST" && requestUrl.pathname === "/api/notification-jobs/dispatch-due") {
    try {
      const payload = await readJsonBody(request);
      const result = await dispatchDueNotificationJobs({
        forceDryRun: Boolean(payload.forceDryRun),
        limit: payload.limit,
        now: payload.now
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
      const result = await sendAttendanceAlimtalk(payload);
      sendJson(request, response, 200, { ok: true, provider: "solapi", result });
    } catch (error) {
      sendJson(request, response, 500, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/notifications/comment-alimtalk") {
    try {
      const payload = await readJsonBody(request);
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
});


import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { SolapiMessageService } = require("solapi");

const DEFAULT_TEST_RECIPIENT = "01057882748";

const REQUIRED_SOLAPI_ENV = [
  "SOLAPI_API_KEY",
  "SOLAPI_API_SECRET",
  "SOLAPI_FROM",
  "SOLAPI_PFID"
];

const TEMPLATE_ENV = {
  attendance: "SOLAPI_ATTENDANCE_TEMPLATE_ID",
  dailyReport: "SOLAPI_DAILY_REPORT_TEMPLATE_ID",
  studentComment: "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"
};

function compactPhoneNumber(value = "") {
  return String(value).replaceAll(/[^0-9]/g, "");
}

function envValue(name) {
  const value = process.env[name];
  return value && !value.startsWith("your_") ? value : "";
}

function requiredEnv(name) {
  const value = envValue(name);
  if (!value) {
    throw new Error(`${name} environment variable is required.`);
  }
  return value;
}

function isDryRun() {
  return process.env.ALIMTALK_DRY_RUN !== "false";
}

function isSlackDryRun() {
  return process.env.SLACK_DRY_RUN !== "false";
}

function attendanceLabel(status) {
  return {
    absent: "결석",
    checkin: "등원",
    checkout: "하원",
    excused: "인정결석",
    late: "지각",
    pending: "대기",
    present: "출석"
  }[status] ?? status ?? "출석";
}

function resolveRecipient(phone) {
  const requestedTo = compactPhoneNumber(phone);
  const allowRealRecipients = process.env.ALIMTALK_ALLOW_REAL_PARENT_NUMBERS === "true";

  if (allowRealRecipients) {
    return {
      requestedTo,
      to: requestedTo,
      isTestRedirected: false
    };
  }

  return {
    requestedTo,
    to: compactPhoneNumber(process.env.ALIMTALK_TEST_RECIPIENT ?? DEFAULT_TEST_RECIPIENT),
    isTestRedirected: true
  };
}

function createServiceConfig(templateEnvName) {
  return {
    apiKey: requiredEnv("SOLAPI_API_KEY"),
    apiSecret: requiredEnv("SOLAPI_API_SECRET"),
    from: compactPhoneNumber(requiredEnv("SOLAPI_FROM")),
    pfId: requiredEnv("SOLAPI_PFID"),
    templateId: requiredEnv(templateEnvName)
  };
}

function configState(name) {
  return Boolean(envValue(name));
}

function normalizeList(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item.trim() : item))
      .filter(Boolean);
  }

  if (!value) return [];

  return String(value)
    .split(/\r?\n|,\s*/g)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatScheduleItem(item) {
  if (typeof item === "string") return item;

  const parts = [
    item.studentName,
    item.title ?? item.type,
    item.date,
    item.time,
    item.lessonName ? `수업: ${item.lessonName}` : "",
    item.memo
  ];

  return parts.filter(Boolean).join(" · ");
}

export function getNotificationStatus() {
  const required = [
    ...REQUIRED_SOLAPI_ENV,
    TEMPLATE_ENV.attendance,
    TEMPLATE_ENV.dailyReport,
    TEMPLATE_ENV.studentComment
  ];

  return {
    dryRun: isDryRun(),
    allowRealRecipients: process.env.ALIMTALK_ALLOW_REAL_PARENT_NUMBERS === "true",
    testRecipient: compactPhoneNumber(process.env.ALIMTALK_TEST_RECIPIENT ?? DEFAULT_TEST_RECIPIENT),
    solapiConfigured: REQUIRED_SOLAPI_ENV.every(configState),
    slackConfigured: configState("SLACK_WEBHOOK_URL"),
    templatesConfigured: {
      attendance: configState(TEMPLATE_ENV.attendance),
      dailyReport: configState(TEMPLATE_ENV.dailyReport),
      studentComment: configState(TEMPLATE_ENV.studentComment)
    },
    missing: required.filter((name) => !configState(name))
  };
}

async function sendKakaoAlimtalk({ payload, recipientPhone, templateEnvName, variables }) {
  const recipient = resolveRecipient(recipientPhone);

  if (!recipient.to) {
    throw new Error("A recipient phone number is required.");
  }

  if (process.env.ALIMTALK_ALLOW_REAL_PARENT_NUMBERS === "true" && !recipient.requestedTo) {
    throw new Error("A real recipient phone number is required in live-send mode.");
  }

  if (isDryRun()) {
    return {
      dryRun: true,
      payload,
      requestedTo: recipient.requestedTo,
      sentTo: recipient.to,
      isTestRedirected: recipient.isTestRedirected,
      templateEnvName,
      variables
    };
  }

  const config = createServiceConfig(templateEnvName);
  const service = new SolapiMessageService(config.apiKey, config.apiSecret);
  const response = await service.send({
    to: recipient.to,
    from: config.from,
    kakaoOptions: {
      pfId: config.pfId,
      templateId: config.templateId,
      variables,
      disableSms: process.env.SOLAPI_DISABLE_SMS === "true"
    }
  });

  return {
    response,
    requestedTo: recipient.requestedTo,
    sentTo: recipient.to,
    isTestRedirected: recipient.isTestRedirected,
    dryRun: false
  };
}

export async function sendAttendanceAlimtalk(payload) {
  const attendanceBody =
    payload.attendanceBody ??
    buildAttendanceBody({
      attendanceStatus: payload.attendanceStatus,
      checkedAt: payload.checkedAt,
      lessonName: payload.lessonName,
      lateMinutes: payload.lateMinutes,
      reason: payload.reason
    });

  return sendKakaoAlimtalk({
    payload,
    recipientPhone: payload.parentPhone,
    templateEnvName: TEMPLATE_ENV.attendance,
    variables: {
      "#{학원명}": String(payload.academyName ?? "koh_you_math"),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{출결본문}": attendanceBody
    }
  });
}

function buildAttendanceBody({ attendanceStatus, checkedAt, lessonName, lateMinutes, reason }) {
  const status = attendanceLabel(attendanceStatus);
  const lines = [
    `${checkedAt ? `${checkedAt}에 ` : ""}${status} 처리되었습니다.`,
    lessonName ? `수업: ${lessonName}` : ""
  ];

  if (status === "지각" && lateMinutes) {
    lines.push(`지각: ${lateMinutes}분`);
  }

  if ((status === "지각" || status === "결석" || status === "인정결석") && reason) {
    lines.push(`사유: ${reason}`);
  }

  return lines.filter(Boolean).join("\n");
}

export async function sendDailyReportAlimtalk(payload) {
  const reportBody =
    payload.reportBody ??
    buildDailyReportBody({
      attendanceStatus: payload.attendanceStatus,
      incompleteHomeworks: payload.incompleteHomeworks ?? payload.incompleteHomework,
      assignmentStatus: payload.assignmentStatus,
      lessonContent: payload.lessonContent ?? payload.progress,
      lessonMaterial: payload.lessonMaterial ?? payload.textbook,
      nextHomework: payload.nextHomework,
      previousHomework: payload.previousHomework,
      retestSchedule: payload.retestSchedule,
      supplementSchedule: payload.supplementSchedule,
      teacherComment: payload.teacherComment
    });

  return sendKakaoAlimtalk({
    payload,
    recipientPhone: payload.parentPhone,
    templateEnvName: TEMPLATE_ENV.dailyReport,
    variables: {
      "#{학원명}": String(payload.academyName ?? "koh_you_math"),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{수업일}": String(payload.lessonDate ?? ""),
      "#{리포트본문}": reportBody
    }
  });
}

function buildDailyReportBody({
  attendanceStatus,
  assignmentStatus,
  incompleteHomeworks,
  lessonContent,
  lessonMaterial,
  nextHomework,
  previousHomework,
  retestSchedule,
  supplementSchedule,
  teacherComment
}) {
  const incompleteList = normalizeList(incompleteHomeworks);
  const lines = [
    `출결: ${attendanceLabel(attendanceStatus)}`,
    lessonMaterial ? `강의 교재: ${lessonMaterial}` : "",
    lessonContent ? `강의 내용: ${lessonContent}` : "",
    previousHomework ? `지난 숙제: ${previousHomework}` : "",
    nextHomework ? `다음 숙제: ${nextHomework}` : "",
    assignmentStatus ? `과제 상태: ${assignmentStatus}` : "",
    incompleteList.length ? `미완료 숙제:\n${incompleteList.map((item) => `- ${item}`).join("\n")}` : "",
    retestSchedule ? `[중요] 재시험 일정: ${retestSchedule}` : "",
    supplementSchedule ? `[중요] 보충 일정: ${supplementSchedule}` : "",
    teacherComment ? `코멘트: ${teacherComment}` : ""
  ];

  return lines.filter(Boolean).join("\n");
}

export async function sendLessonCommentAlimtalk(payload) {
  const audience = payload.target === "student" ? "student" : "parent";
  const recipientPhone = audience === "student" ? payload.studentPhone : payload.parentPhone;
  const templateEnvName =
    audience === "student" ? TEMPLATE_ENV.studentComment : TEMPLATE_ENV.dailyReport;

  return sendKakaoAlimtalk({
    payload,
    recipientPhone,
    templateEnvName,
    variables: {
      "#{학원명}": String(payload.academyName ?? "koh_you_math"),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{수업명}": String(payload.lessonName ?? ""),
      "#{수업일}": String(payload.lessonDate ?? ""),
      "#{코멘트}": String(payload.message ?? "")
    }
  });
}

export async function sendStudentScheduleReminderAlimtalk(payload) {
  const reminderBody =
    payload.reminderBody ??
    buildStudentScheduleReminderBody({
      scheduleType: payload.scheduleType,
      scheduleTitle: payload.scheduleTitle,
      scheduleDate: payload.scheduleDate,
      scheduleTime: payload.scheduleTime,
      lessonName: payload.lessonName,
      memo: payload.memo
    });

  return sendKakaoAlimtalk({
    payload,
    recipientPhone: payload.studentPhone,
    templateEnvName: TEMPLATE_ENV.studentComment,
    variables: {
      "#{학원명}": String(payload.academyName ?? "koh_you_math"),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{수업명}": String(payload.lessonName ?? payload.scheduleTitle ?? ""),
      "#{수업일}": String(payload.scheduleDate ?? ""),
      "#{코멘트}": reminderBody
    }
  });
}

function buildStudentScheduleReminderBody({
  scheduleType,
  scheduleTitle,
  scheduleDate,
  scheduleTime,
  lessonName,
  memo
}) {
  const type = scheduleType === "retest" ? "재시험" : scheduleType === "supplement" ? "보충" : "일정";
  const lines = [
    `[중요] 오늘 ${type} 일정이 있습니다.`,
    scheduleTitle ? `내용: ${scheduleTitle}` : "",
    scheduleDate || scheduleTime ? `일시: ${[scheduleDate, scheduleTime].filter(Boolean).join(" ")}` : "",
    lessonName ? `수업: ${lessonName}` : "",
    memo ? `메모: ${memo}` : ""
  ];

  return lines.filter(Boolean).join("\n");
}

export async function sendSlackDailyScheduleSummary(payload) {
  const text =
    payload.text ??
    buildSlackDailyScheduleSummary({
      date: payload.date,
      retests: payload.retests,
      supplements: payload.supplements
    });

  if (isSlackDryRun()) {
    return {
      dryRun: true,
      text
    };
  }

  const webhookUrl = requiredEnv("SLACK_WEBHOOK_URL");
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  if (!response.ok) {
    throw new Error(`Slack webhook failed: ${response.status} ${response.statusText}`);
  }

  return {
    dryRun: false,
    status: response.status,
    text
  };
}

function buildSlackDailyScheduleSummary({ date, retests, supplements }) {
  const retestItems = normalizeList(retests).map(formatScheduleItem);
  const supplementItems = normalizeList(supplements).map(formatScheduleItem);
  const lines = [`[koh_you_math] ${date ?? "오늘"} 보충/재시험 일정`];

  lines.push("");
  lines.push(retestItems.length ? `재시험\n${retestItems.map((item) => `- ${item}`).join("\n")}` : "재시험: 없음");
  lines.push("");
  lines.push(
    supplementItems.length
      ? `보충\n${supplementItems.map((item) => `- ${item}`).join("\n")}`
      : "보충: 없음"
  );

  return lines.join("\n");
}

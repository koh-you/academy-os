import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { SolapiMessageService } = require("solapi");

const ACADEMY_NAME = "으뜸수학 고태영T";
const DEFAULT_TEST_RECIPIENT = "01057882748";

const REQUIRED_SOLAPI_ENV = [
  "SOLAPI_API_KEY",
  "SOLAPI_API_SECRET",
  "SOLAPI_PFID"
];

const TEMPLATE_ENV = {
  attendance: "SOLAPI_ATTENDANCE_TEMPLATE_ID",
  dailyReport: "SOLAPI_DAILY_REPORT_TEMPLATE_ID",
  studentComment: "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"
};

const assignmentStatusParentMessageMap = {
  complete_thorough: "과제를 성실하게 완료했습니다.",
  complete_easy: "과제를 성실하게 완료했습니다.",
  partial_80: "과제의 약 80%를 수행했습니다. 남은 부분은 다음 시간에 함께 확인하도록 하겠습니다.",
  partial_50: "숙제를 많이 진행하지 못했습니다. 남은 부분은 다음 시간에 함께 확인하고, 필요하면 추가 등원보충으로 관리하겠습니다.",
  known_only: "쉬운 문항 위주로 풀어온 것으로 보입니다. 어려운 문항은 수업에서 다시 확인하겠습니다.",
  too_hard: "과제 난이도가 높아 해결하지 못한 부분이 있었습니다. 과제 난이도를 조정해보도록 하겠습니다.",
  answer_suspected: "풀이 과정 확인이 필요한 문항이 있어 다음 수업에서 점검하겠습니다.",
  not_done: "과제를 해오지 못했습니다. 필요하면 추가 등원보충으로 관리하겠습니다.",
  not_checked: "오늘은 과제 검사가 아직 완료되지 않았습니다. 확인 후 필요한 내용을 다시 안내드리겠습니다."
};

const assignmentStatusStudentMessageMap = {
  complete_thorough: "과제를 성실하게 완료했어.",
  complete_easy: "과제를 성실하게 완료했어.",
  partial_80: "과제의 약 80%를 해왔어. 남은 부분은 다음 시간에 같이 확인하자.",
  partial_50: "숙제를 많이 못 해왔어. 남은 부분은 다음 시간에 같이 확인하고, 필요하면 추가 등원보충으로 마무리하자.",
  known_only: "쉬운 문항 위주로 풀어온 것 같아. 어려운 문항도 조금씩 시도해보자.",
  too_hard: "이번 과제 난이도가 높아서 해결하지 못한 부분이 있었어. 과제 난이도는 조정해볼게.",
  answer_suspected: "풀이 과정이 충분히 남아 있지 않아 이해 여부를 다시 확인할게.",
  not_done: "과제를 못 해왔어. 필요하면 추가 등원보충으로 마무리하자.",
  not_checked: "오늘은 아직 과제 검사가 완료되지 않았어. 확인 후 필요한 부분을 다시 안내할게."
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
  if (!value) throw new Error(`${name} environment variable is required.`);
  return value;
}

function isDryRun(payload = {}) {
  if (Boolean(payload.forceDryRun)) return true;
  if (payload.forceTestRecipient && process.env.ALIMTALK_ALLOW_LIVE_TEST_SEND === "true") return false;
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

function assignmentStatusText(value, fallback = "", audience = "parent") {
  const messageMap = audience === "student" ? assignmentStatusStudentMessageMap : assignmentStatusParentMessageMap;
  return messageMap[value] ?? fallback ?? value ?? "";
}

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
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

function messageBlock(label, value) {
  const text = normalizeText(value);
  return text ? `${label}\n${text}` : "";
}

function messageLine(label, value) {
  const text = normalizeText(value);
  return text ? `${label} : ${text}` : "";
}

function joinMessageBlocks(blocks) {
  return blocks.map(normalizeText).filter(Boolean).join("\n\n");
}

function canUseRealRecipient(recipientType = "parent") {
  if (recipientType === "student") return process.env.ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS === "true";
  return process.env.ALIMTALK_ALLOW_REAL_PARENT_NUMBERS === "true";
}

function resolveRecipient(phone, payload = {}, recipientType = "parent") {
  const requestedTo = compactPhoneNumber(phone);
  const allowRealRecipients = canUseRealRecipient(recipientType);
  const testRecipient = compactPhoneNumber(process.env.ALIMTALK_TEST_RECIPIENT ?? DEFAULT_TEST_RECIPIENT);

  if (payload.forceTestRecipient || !allowRealRecipients) {
    return {
      requestedTo,
      to: testRecipient,
      isTestRedirected: true
    };
  }

  return { requestedTo, to: requestedTo, isTestRedirected: false };
}

function createServiceConfig(templateEnvName) {
  const from = compactPhoneNumber(envValue("SOLAPI_FROM"));
  return {
    apiKey: requiredEnv("SOLAPI_API_KEY"),
    apiSecret: requiredEnv("SOLAPI_API_SECRET"),
    from,
    pfId: requiredEnv("SOLAPI_PFID"),
    templateId: requiredEnv(templateEnvName)
  };
}

function configState(name) {
  return Boolean(envValue(name));
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

function buildAttendanceBody({ attendanceStatus, checkedAt, lessonName, lateMinutes, reason }) {
  const status = attendanceLabel(attendanceStatus);
  const lines = [
    messageLine("🏫 출결", status),
    lessonName ? messageLine("📘 수업", lessonName) : "",
    checkedAt ? messageLine("🕒 시간", checkedAt) : ""
  ];

  if (status === "지각" && lateMinutes) lines.push(messageLine("⏱️ 지각", `${lateMinutes}분`));
  if ((status === "지각" || status === "결석" || status === "인정결석") && reason) {
    lines.push(messageLine("📝 사유", reason));
  }

  return joinMessageBlocks(lines);
}

function buildDailyReportBody({
  attendanceStatus,
  assignmentStatus,
  incompleteHomeworks,
  lessonContent,
  lessonMaterial,
  nextHomework,
  previousHomework,
  preparationNotice,
  retestSchedule,
  audience = "parent",
  supplementSchedule,
  teacherComment
}) {
  const incompleteList = normalizeList(incompleteHomeworks);
  const assignmentStatusMessage = assignmentStatusText(assignmentStatus, assignmentStatus, audience);

  return joinMessageBlocks([
    messageLine("🏫 출결", attendanceLabel(attendanceStatus)),
    messageLine("✅ 과제 상태", assignmentStatusMessage),
    messageLine("📚 강의 교재", lessonMaterial),
    messageLine("🧭 강의 내용", lessonContent),
    messageLine("📘 지난 과제", previousHomework),
    messageLine("➡️ 다음 과제", nextHomework),
    messageBlock("📝 수업메모", preparationNotice),
    incompleteList.length ? messageBlock("⚠️ 미완료 과제", incompleteList.map((item) => `- ${item}`).join("\n")) : "",
    messageBlock("⭐ 중요 · 재시험 일정", retestSchedule),
    messageBlock("⭐ 중요 · 보충 일정", supplementSchedule),
    messageBlock("💬 코멘트", teacherComment)
  ]);
}

function buildLessonCommentBody(payload, audience) {
  return buildDailyReportBody({
    attendanceStatus: payload.attendanceStatus,
    assignmentStatus:
      audience === "student"
        ? payload.assignmentStatusStudentMessage || payload.assignmentStatusMessage || payload.assignmentStatus
        : payload.assignmentStatusParentMessage || payload.assignmentStatusMessage || payload.assignmentStatus,
    audience,
    lessonContent: payload.lessonContent,
    lessonMaterial: payload.lessonMaterial,
    nextHomework: payload.nextHomework,
    previousHomework: payload.previousHomework,
    preparationNotice: payload.preparationNotice,
    supplementSchedule: payload.supplementSchedule,
    teacherComment: payload.message
  });
}

function buildStudentScheduleReminderBody({ scheduleType, scheduleTitle, scheduleDate, scheduleTime, lessonName, memo }) {
  const type = scheduleType === "retest" ? "재시험" : scheduleType === "supplement" ? "보충" : "일정";

  return joinMessageBlocks([
    `⭐ 중요\n오늘 ${type} 일정이 있습니다.`,
    messageBlock("📌 내용", scheduleTitle),
    messageBlock("🕒 일시", [scheduleDate, scheduleTime].filter(Boolean).join(" ")),
    messageBlock("📘 수업", lessonName),
    messageBlock("💬 메모", memo)
  ]);
}

function buildSlackDailyScheduleSummary({ date, retests, supplements }) {
  const retestItems = normalizeList(retests).map(formatScheduleItem);
  const supplementItems = normalizeList(supplements).map(formatScheduleItem);

  return joinMessageBlocks([
    `[${ACADEMY_NAME}] ${date ?? "오늘"} 보충/재시험 일정`,
    retestItems.length ? messageBlock("⭐ 재시험", retestItems.map((item) => `- ${item}`).join("\n")) : "⭐ 재시험\n없음",
    supplementItems.length ? messageBlock("📌 보충", supplementItems.map((item) => `- ${item}`).join("\n")) : "📌 보충\n없음"
  ]);
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
    allowRealRecipients:
      process.env.ALIMTALK_ALLOW_REAL_PARENT_NUMBERS === "true" ||
      process.env.ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS === "true",
    allowRealParentRecipients: process.env.ALIMTALK_ALLOW_REAL_PARENT_NUMBERS === "true",
    allowRealStudentRecipients: process.env.ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS === "true",
    liveTestSendEnabled: process.env.ALIMTALK_ALLOW_LIVE_TEST_SEND === "true",
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

async function sendKakaoAlimtalk({ payload, recipientPhone, recipientType = "parent", templateEnvName, variables }) {
  const recipient = resolveRecipient(recipientPhone, payload, recipientType);
  const scheduledDate = payload.scheduledDate ? new Date(payload.scheduledDate) : null;

  if (!recipient.to) throw new Error("A recipient phone number is required.");
  if (canUseRealRecipient(recipientType) && !recipient.requestedTo) {
    throw new Error("A real recipient phone number is required in live-send mode.");
  }
  if (scheduledDate && Number.isNaN(scheduledDate.getTime())) {
    throw new Error("scheduledDate must be a valid date string.");
  }

  if (isDryRun(payload)) {
    return {
      dryRun: true,
      payload,
      requestedTo: recipient.requestedTo,
      sentTo: recipient.to,
      isTestRedirected: recipient.isTestRedirected,
      scheduledDate: scheduledDate ? scheduledDate.toISOString() : "",
      templateEnvName,
      variables
    };
  }

  const config = createServiceConfig(templateEnvName);
  const service = new SolapiMessageService(config.apiKey, config.apiSecret);
  const message = {
    to: recipient.to,
    kakaoOptions: {
      pfId: config.pfId,
      templateId: config.templateId,
      variables,
      disableSms: process.env.SOLAPI_DISABLE_SMS === "true"
    }
  };
  if (config.from) {
    message.from = config.from;
  }
  const requestConfig = scheduledDate ? { scheduledDate } : undefined;
  const response = await service.send(message, requestConfig);

  return {
    response,
    requestedTo: recipient.requestedTo,
    sentTo: recipient.to,
    isTestRedirected: recipient.isTestRedirected,
    scheduledDate: scheduledDate ? scheduledDate.toISOString() : "",
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
    recipientType: "parent",
    templateEnvName: TEMPLATE_ENV.attendance,
    variables: {
      "#{학원명}": String(payload.academyName ?? ACADEMY_NAME),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{출결본문}": attendanceBody
    }
  });
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
      preparationNotice: payload.preparationNotice,
      retestSchedule: payload.retestSchedule,
      supplementSchedule: payload.supplementSchedule,
      teacherComment: payload.teacherComment
    });

  return sendKakaoAlimtalk({
    payload,
    recipientPhone: payload.parentPhone,
    recipientType: "parent",
    templateEnvName: TEMPLATE_ENV.dailyReport,
    variables: {
      "#{학원명}": String(payload.academyName ?? ACADEMY_NAME),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{수업일}": String(payload.lessonDate ?? ""),
      "#{리포트본문}": reportBody
    }
  });
}

export async function sendLessonCommentAlimtalk(payload) {
  const audience = payload.target === "student" ? "student" : "parent";
  const recipientPhone = audience === "student" ? payload.studentPhone : payload.parentPhone;
  const templateEnvName = audience === "student" ? TEMPLATE_ENV.studentComment : TEMPLATE_ENV.dailyReport;
  const commentBody = normalizeText(payload.commentBodyOverride) || buildLessonCommentBody(payload, audience);

  return sendKakaoAlimtalk({
    payload,
    recipientPhone,
    recipientType: audience,
    templateEnvName,
    variables: {
      "#{학원명}": String(payload.academyName ?? ACADEMY_NAME),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{수업명}": String(payload.lessonName ?? ""),
      "#{수업일}": String(payload.lessonDate ?? ""),
      "#{리포트본문}": commentBody,
      "#{코멘트}": commentBody
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
    recipientType: "student",
    templateEnvName: TEMPLATE_ENV.studentComment,
    variables: {
      "#{학원명}": String(payload.academyName ?? ACADEMY_NAME),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{수업명}": String(payload.lessonName ?? payload.scheduleTitle ?? ""),
      "#{수업일}": String(payload.scheduleDate ?? ""),
      "#{코멘트}": reminderBody
    }
  });
}

export async function sendSlackDailyScheduleSummary(payload) {
  const text =
    payload.text ??
    buildSlackDailyScheduleSummary({
      date: payload.date,
      retests: payload.retests,
      supplements: payload.supplements
    });

  if (isSlackDryRun()) return { dryRun: true, text };

  const webhookUrl = requiredEnv("SLACK_WEBHOOK_URL");
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  if (!response.ok) throw new Error(`Slack webhook failed: ${response.status} ${response.statusText}`);

  return { dryRun: false, status: response.status, text };
}

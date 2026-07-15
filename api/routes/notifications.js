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
  specialLectureNotice: "SOLAPI_SPECIAL_LECTURE_TEMPLATE_ID",
  studentComment: "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"
};

const assignmentStatusParentMessageMap = {
  complete_thorough: "과제를 성실하게 완료했습니다.",
  complete_easy: "과제를 성실하게 완료했습니다.",
  partial_80: "과제의 약 80%를 수행했습니다. 남은 부분은 다음 시간에 같이 확인하도록 하겠습니다.",
  partial_50: "숙제를 많이 해오지 못했습니다. 남은 부분은 다음 시간에 같이 확인하고, 필요하면 추가 보충을 하도록 하겠습니다.",
  known_only: "풀기 쉬운 문항만 풀어온 것으로 보입니다. 필요하면 추가 보충을 하도록 하겠습니다.",
  too_hard: "과제 난이도가 높아 해결하지 못한 부분이 있었습니다. 과제 난이도를 조정해보도록 하겠습니다.",
  answer_suspected: "풀이 과정 확인이 필요한 문항이 있어 다음 수업에서 점검하겠습니다.",
  not_done: "과제를 해오지 못했습니다. 필요하면 추가 보충을 하도록 하겠습니다.",
  not_checked: "과제를 가져오지 못해 검사하지 못했습니다. 다음 시간에 같이 확인하도록 하겠습니다."
};

const assignmentStatusStudentMessageMap = {
  complete_thorough: "과제를 꼼꼼하게 잘 해왔어. 열심히 하느라 수고했어~!",
  complete_easy: "과제를 꼼꼼하게 잘 해왔어. 열심히 하느라 수고했어~!",
  partial_80: "과제의 약 80%를 해왔어. 다음 시간부터는 깔끔하게 다 풀어오도록 하자.",
  partial_50: "숙제를 많이 해오지 못했어. 남은 부분은 다음 시간에 같이 확인하고, 필요하면 추가 보충으로 마무리하자.",
  known_only: "쉬운 문제만 풀고 넘어가면 실력이 잘 늘지 않아. 어려운 문제를 고민한 흔적까지 남겨와야 해.",
  too_hard: "난이도가 높아서 풀기 어려웠을 것 같아. 난이도를 좀 조정해보자.",
  answer_suspected: "풀이 과정이 충분히 남아 있지 않아 이해 여부를 다시 확인할게. 숙제는 꼭 풀이 과정을 남겨오도록 해.",
  not_done: "과제를 못 해왔어. 오늘 나간 과제까지 다음 시간에 같이 검사받고, 다 못 끝내면 추가 등원보충을 해야 할 수도 있어.",
  not_checked: "과제를 가져오지 못해서 검사하지 못했어. 다음 시간에 같이 확인하자."
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
    present: "등원"
  }[status] ?? status ?? "등원";
}

function formatAttendanceTime(value) {
  const text = String(value ?? "").trim();
  if (!text) return "";
  const isoTime = text.match(/T(\d{2}:\d{2})/);
  if (isoTime?.[1]) return isoTime[1];
  const koreanTime = text.match(/(오전|오후)\s*(\d{1,2}):(\d{2})/);
  if (koreanTime) {
    const period = koreanTime[1];
    let hour = Number(koreanTime[2]);
    if (period === "오후" && hour < 12) hour += 12;
    if (period === "오전" && hour === 12) hour = 0;
    return `${String(hour).padStart(2, "0")}:${koreanTime[3]}`;
  }
  const time = text.match(/(\d{1,2}:\d{2})/);
  if (time?.[1]) return time[1].padStart(5, "0");
  return text;
}

function attendanceLabelWithDetail({ attendanceStatus, checkedAt, checkInTime, lateMinutes, reason } = {}) {
  const label = attendanceLabel(attendanceStatus);
  if (!["지각", "결석", "인정결석"].includes(label)) return label;

  const details = [];
  const cleanReason = normalizeText(reason);
  const time = formatAttendanceTime(checkInTime || checkedAt);
  if (cleanReason) details.push(`사유: ${cleanReason}`);
  if (label === "지각" && time) details.push(`등원 ${time}`);
  if (label === "지각" && !time && lateMinutes) details.push(`${lateMinutes}분 지각`);
  if ((label === "결석" || label === "인정결석") && time) details.push(`처리 ${time}`);
  return details.length ? `${label} (${details.join(" · ")})` : label;
}

function attendanceLabelForAttendanceBody({ attendanceStatus, reason } = {}) {
  const label = attendanceLabel(attendanceStatus);
  const cleanReason = normalizeText(reason);
  if (cleanReason && ["지각", "결석", "인정결석"].includes(label)) {
    return `${label} (사유: ${cleanReason})`;
  }
  return label;
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

function normalizeMessageBodyText(value) {
  return String(value ?? "")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
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

function normalizeBulletLines(value = "") {
  return normalizeText(value)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.startsWith("-") ? line : `- ${line}`)
    .join("\n");
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

function createSolapiMessageService() {
  return new SolapiMessageService(requiredEnv("SOLAPI_API_KEY"), requiredEnv("SOLAPI_API_SECRET"));
}

function buildSolapiCustomFields(payload = {}, recipientType = "parent") {
  return Object.fromEntries(
    Object.entries({
      academyOs: "true",
      lessonId: payload.lessonId,
      lessonDate: payload.lessonDate,
      studentId: payload.studentId,
      studentName: payload.studentName,
      target: payload.target ?? recipientType,
      sendMode: payload.sendMode,
      osScheduled: payload.osScheduled ? "true" : "",
      notificationType: payload.notificationType
    })
      .map(([key, value]) => [key, String(value ?? "").slice(0, 100)])
      .filter(([, value]) => value)
  );
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

function reminderTypeLabel(type = "") {
  return {
    consultation: "상담",
    student_consultation: "학생 상담",
    parent_consultation: "학부모 상담",
    student_intake: "신입생 일정",
    special_note: "특이사항",
    parent_contact: "학부모 연락",
    custom: "운영 알림"
  }[type] ?? "운영 알림";
}

function formatAcademyReminderItem(item) {
  if (typeof item === "string") return item;

  const priority = item.priority === "high" ? "중요" : "";
  const parts = [
    reminderTypeLabel(item.reminderType ?? item.type),
    item.studentName,
    item.title,
    item.date ?? item.reminderDate,
    item.time ?? item.reminderTime,
    priority,
    item.memo ?? item.content
  ];

  return parts.filter(Boolean).join(" · ");
}

function buildAttendanceBody({ attendanceStatus, checkedAt, checkInTime, checkOutTime, lessonName, lateMinutes, reason }) {
  const timeSource = attendanceStatus === "checkout" ? checkOutTime || checkedAt : checkInTime || checkedAt;
  const time = formatAttendanceTime(timeSource);
  const lines = [
    messageLine("🏫 출결", attendanceLabelForAttendanceBody({ attendanceStatus, lateMinutes, reason })),
    lessonName ? messageLine("📘 수업", lessonName) : "",
    time ? messageLine("🕒 시간", time) : ""
  ];

  return joinMessageBlocks(lines);
}

function buildDailyReportBody({
  attendanceStatus,
  attendanceReason,
  checkInTime,
  checkedAt,
  assignmentStatus,
  incompleteHomeworks,
  homeworkFollowupNotice,
  lessonContent,
  lessonMaterial,
  nextHomework,
  previousHomework,
  preparationNotice,
  retestSchedule,
  audience = "parent",
  supplementSchedule,
  testResult,
  teacherComment
}) {
  const incompleteList = normalizeList(incompleteHomeworks);
  const assignmentStatusMessage = assignmentStatusText(assignmentStatus, assignmentStatus, audience);
  const preparationText = normalizeText(preparationNotice);
  const homeworkFollowupText = normalizeBulletLines(homeworkFollowupNotice);
  const supplementText = normalizeBulletLines(supplementSchedule);
  const teacherCommentText = normalizeText(teacherComment);
  const commentText = joinMessageBlocks([
    preparationText && !teacherCommentText.includes(preparationText) ? preparationText : "",
    teacherCommentText
  ]);
  const supplementNotice = joinMessageBlocks([
    homeworkFollowupText,
    supplementText
  ]);

  return joinMessageBlocks([
    messageLine("🏫 출결", attendanceLabelWithDetail({ attendanceStatus, checkedAt, checkInTime, reason: attendanceReason })),
    messageLine("✅ 과제 상태", assignmentStatusMessage),
    messageLine("📚 강의 교재", lessonMaterial),
    messageLine("🧭 강의 내용", lessonContent),
    messageLine("📘 지난 과제", previousHomework),
    messageLine("➡️ 다음 과제", nextHomework),
    messageBlock("📝 테스트", testResult),
    incompleteList.length ? messageBlock("⚠️ 미완료 과제", incompleteList.map((item) => `- ${item}`).join("\n")) : "",
    messageBlock("⭐ 중요 · 재시험 일정", retestSchedule),
    messageBlock("⭐ 보충/확인 안내", supplementNotice),
    messageBlock("💬 코멘트", commentText)
  ]);
}

function buildLessonCommentBody(payload, audience) {
  return buildDailyReportBody({
    attendanceStatus: payload.attendanceStatus,
    attendanceReason: payload.attendanceReason || payload.reason,
    checkInTime: payload.checkInTime,
    checkedAt: payload.checkedAt,
    assignmentStatus:
      audience === "student"
        ? payload.assignmentStatusStudentMessage || payload.assignmentStatusMessage || payload.assignmentStatus
        : payload.assignmentStatusParentMessage || payload.assignmentStatusMessage || payload.assignmentStatus,
    audience,
    homeworkFollowupNotice: payload.homeworkFollowupNotice,
    lessonContent: payload.lessonContent,
    lessonMaterial: payload.lessonMaterial,
    nextHomework: payload.nextHomework,
    previousHomework: payload.previousHomework,
    preparationNotice: payload.preparationNotice,
    supplementSchedule: payload.supplementSchedule,
    testResult: payload.testResult,
    teacherComment: payload.message
  });
}

function hasLessonCommentContext(payload = {}) {
  return Boolean(
    payload.lessonId ||
    payload.osScheduled ||
    payload.attendanceStatus ||
    payload.assignmentStatus ||
    payload.assignmentStatusMessage ||
    payload.lessonMaterial ||
    payload.lessonContent ||
    payload.previousHomework ||
    payload.nextHomework ||
    payload.supplementSchedule ||
    payload.preparationNotice ||
    payload.homeworkFollowupNotice
  );
}

function isNoticePayload(payload = {}) {
  const notificationType = String(payload.notificationType ?? "");
  return Boolean(
    payload.noticeKind ||
    payload.noticeTitle ||
    payload.noticeBody ||
    notificationType === "notice_parent" ||
    notificationType === "notice_student"
  );
}

function resolveLessonCommentBody(payload, audience) {
  const overrideText = normalizeMessageBodyText(payload.commentBodyOverride);
  if (isNoticePayload(payload)) {
    return overrideText || normalizeMessageBodyText(payload.message) || buildLessonCommentBody(payload, audience);
  }
  if (!hasLessonCommentContext(payload)) {
    return overrideText || buildLessonCommentBody(payload, audience);
  }

  return buildLessonCommentBody({
    ...payload,
    message: normalizeMessageBodyText(payload.message) || overrideText
  }, audience);
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

function buildSlackDailyScheduleSummary({ date, reminders, retests, supplements }) {
  const reminderItems = normalizeList(reminders).map(formatAcademyReminderItem);
  const retestItems = normalizeList(retests).map(formatScheduleItem);
  const supplementItems = normalizeList(supplements).map(formatScheduleItem);

  return joinMessageBlocks([
    `[${ACADEMY_NAME}] ${date ?? "오늘"} 오늘 운영 일정`,
    reminderItems.length ? messageBlock("📍 상담/운영 알림", reminderItems.map((item) => `- ${item}`).join("\n")) : "📍 상담/운영 알림\n없음",
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
      specialLectureNotice: configState(TEMPLATE_ENV.specialLectureNotice),
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
    customFields: buildSolapiCustomFields(payload, recipientType),
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
  const requestConfig = scheduledDate ? { scheduledDate, showMessageList: true } : { showMessageList: true };
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

function objectRecordValues(record = {}) {
  if (!record || typeof record !== "object") return [];
  if (Array.isArray(record)) return record;
  return Object.values(record);
}

function summarizeSolapiMessage(message = {}) {
  return {
    accountId: message.accountId ?? "",
    customFields: message.customFields ?? null,
    dateCreated: message.dateCreated ?? "",
    dateProcessed: message.dateProcessed ?? "",
    dateReceived: message.dateReceived ?? "",
    dateReported: message.dateReported ?? "",
    dateUpdated: message.dateUpdated ?? "",
    from: message.from ?? "",
    groupId: message.groupId ?? "",
    messageId: message.messageId ?? message._id ?? "",
    reason: message.reason ?? "",
    status: message.status ?? "",
    statusCode: message.statusCode ?? "",
    text: message.text ?? "",
    to: message.to ?? "",
    type: message.type ?? ""
  };
}

function summarizeSolapiGroup(group = {}) {
  return {
    accountId: group.accountId ?? "",
    count: group.count ?? null,
    dateCompleted: group.dateCompleted ?? "",
    dateCreated: group.dateCreated ?? "",
    dateSent: group.dateSent ?? "",
    dateUpdated: group.dateUpdated ?? "",
    groupId: group.groupId ?? "",
    isRefunded: Boolean(group.isRefunded),
    scheduledDate: group.scheduledDate ?? "",
    status: group.status ?? ""
  };
}

export async function listSolapiMessages({ endDate, groupId, limit = 100, messageId, startDate, statusCode, to, type = "ATA" } = {}) {
  const service = createSolapiMessageService();
  const request = {
    limit: Math.max(1, Math.min(500, Number(limit) || 100))
  };
  if (startDate) request.startDate = startDate;
  if (endDate) request.endDate = endDate;
  if (startDate || endDate) request.dateType = "CREATED";
  if (groupId) request.groupId = groupId;
  if (messageId) request.messageId = messageId;
  if (statusCode) request.statusCode = statusCode;
  if (to) request.to = compactPhoneNumber(to);
  if (type) request.type = type;
  const result = await service.getMessages(request);
  return {
    messages: objectRecordValues(result.messageList).map(summarizeSolapiMessage),
    nextKey: result.nextKey ?? "",
    source: "solapi",
    startKey: result.startKey ?? ""
  };
}

export async function listSolapiGroups({ endDate, groupId, limit = 100, startDate } = {}) {
  const service = createSolapiMessageService();
  const request = {
    limit: Math.max(1, Math.min(500, Number(limit) || 100))
  };
  if (startDate) request.startDate = startDate;
  if (endDate) request.endDate = endDate;
  if (groupId) request.groupId = groupId;
  const result = await service.getGroups(request);
  return {
    groups: objectRecordValues(result.groupList).map(summarizeSolapiGroup),
    nextKey: result.nextKey ?? "",
    source: "solapi",
    startKey: result.startKey ?? ""
  };
}

export async function cancelSolapiReservationGroup(groupId) {
  if (!groupId) throw new Error("Solapi groupId가 필요합니다.");
  const service = createSolapiMessageService();
  const result = await service.removeReservationToGroup(groupId);
  return {
    group: summarizeSolapiGroup(result),
    source: "solapi"
  };
}

export async function sendAttendanceAlimtalk(payload) {
  const attendanceBody =
    payload.attendanceBody ??
    buildAttendanceBody({
      attendanceStatus: payload.attendanceStatus,
      checkedAt: payload.checkedAt,
      checkInTime: payload.checkInTime,
      checkOutTime: payload.checkOutTime,
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
      attendanceReason: payload.attendanceReason || payload.reason,
      checkInTime: payload.checkInTime,
      checkedAt: payload.checkedAt,
      incompleteHomeworks: payload.incompleteHomeworks ?? payload.incompleteHomework,
      assignmentStatus: payload.assignmentStatus,
      lessonContent: payload.lessonContent ?? payload.progress,
      lessonMaterial: payload.lessonMaterial ?? payload.textbook,
      nextHomework: payload.nextHomework,
      previousHomework: payload.previousHomework,
      preparationNotice: payload.preparationNotice,
      retestSchedule: payload.retestSchedule,
      supplementSchedule: payload.supplementSchedule,
      testResult: payload.testResult,
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
  const canUseSpecialLectureTemplate = payload.noticeKind === "special_lecture" && configState(TEMPLATE_ENV.specialLectureNotice);
  const templateEnvName = canUseSpecialLectureTemplate
    ? TEMPLATE_ENV.specialLectureNotice
    : audience === "student" ? TEMPLATE_ENV.studentComment : TEMPLATE_ENV.dailyReport;
  const commentBody = resolveLessonCommentBody(payload, audience);

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
      "#{코멘트}": commentBody,
      "#{특강명}": String(payload.specialLectureTitle ?? payload.noticeTitle ?? payload.lessonName ?? ""),
      "#{대상}": String(payload.specialLectureAudience ?? ""),
      "#{요일}": String(payload.specialLectureDays ?? ""),
      "#{시간}": String(payload.specialLectureTime ?? ""),
      "#{안내문링크}": String(payload.specialLectureUrl ?? "")
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
      reminders: payload.reminders,
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

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

function attendanceLabel(status) {
  return {
    absent: "결석",
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

export function getNotificationStatus() {
  const required = [
    ...REQUIRED_SOLAPI_ENV,
    TEMPLATE_ENV.attendance,
    TEMPLATE_ENV.dailyReport,
    TEMPLATE_ENV.parentComment,
    TEMPLATE_ENV.studentComment
  ];

  return {
    dryRun: isDryRun(),
    allowRealRecipients: process.env.ALIMTALK_ALLOW_REAL_PARENT_NUMBERS === "true",
    testRecipient: compactPhoneNumber(process.env.ALIMTALK_TEST_RECIPIENT ?? DEFAULT_TEST_RECIPIENT),
    solapiConfigured: REQUIRED_SOLAPI_ENV.every(configState),
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
  return sendKakaoAlimtalk({
    payload,
    recipientPhone: payload.parentPhone,
    templateEnvName: TEMPLATE_ENV.attendance,
    variables: {
      "#{학원명}": String(payload.academyName ?? "koh_you_math"),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{상태}": attendanceLabel(payload.attendanceStatus),
      "#{시간}": String(payload.checkedAt ?? ""),
      "#{수업명}": String(payload.lessonName ?? ""),
      "#{지각분}": String(payload.lateMinutes ?? "0"),
      "#{사유}": String(payload.reason ?? "")
    }
  });
}

export async function sendDailyReportAlimtalk(payload) {
  return sendKakaoAlimtalk({
    payload,
    recipientPhone: payload.parentPhone,
    templateEnvName: TEMPLATE_ENV.dailyReport,
    variables: {
      "#{학원명}": String(payload.academyName ?? "koh_you_math"),
      "#{학생명}": String(payload.studentName ?? ""),
      "#{수업일}": String(payload.lessonDate ?? ""),
      "#{수업명}": String(payload.lessonName ?? ""),
      "#{출결}": attendanceLabel(payload.attendanceStatus),
      "#{지난숙제}": String(payload.previousHomework ?? ""),
      "#{다음숙제}": String(payload.nextHomework ?? ""),
      "#{미완료}": String(payload.incompleteHomework ?? ""),
      "#{강사코멘트}": String(payload.teacherComment ?? "")
    }
  });
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

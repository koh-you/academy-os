import http from "node:http";
import crypto from "node:crypto";
import {
  areLessonJournalHistoryHomeworksEqual,
  areLessonJournalHistoryLessonsEqual
} from "../src/domains/lessons/lessonJournalHistoryPersistence.js";
import { areLessonJournalRecordsEqual } from "../src/domains/lessons/lessonJournalRowsPersistence.js";
import {
  areLessonJournalMakeupTasksEqual,
  createNextLessonJournalMakeupTaskUpdatedAt
} from "../src/domains/lessons/lessonJournalMakeupTaskPersistence.js";
import {
  areSupplementScheduleTasksEqual,
  createSupplementScheduleSavePlan
} from "../src/domains/supplements/supplementSchedulePersistence.js";
import {
  createConsecutiveAttendanceVisitRecord,
  findConsecutiveAbsenceMakeupVisit,
  getConsecutiveAttendanceVisitLabel,
  shouldApplyConsecutiveAttendanceVisit
} from "../src/domains/lessons/attendanceVisitContinuity.js";
import {
  areResourceMaterialsPersistedEqual,
  createNextResourceMaterialUpdatedAt,
  isSameResourceMaterialDraft
} from "../src/domains/resources/resourceMaterialPersistence.js";
import {
  createResourceMaterialStoragePath,
  createResourceMaterialStorageReference,
  parseResourceMaterialStorageReference,
  validateResourceMaterialFile
} from "../src/domains/resources/resourceMaterialStorageModel.js";
import { saveReportSnapshotWithVerification } from "../src/domains/reports/reportSnapshotPersistence.js";
import {
  parseExamAnalysisQuestionCountConfirmRequest,
  parseExamAnalysisQuestionReviewsSaveRequest,
  parseExamAnalysisOutputDraftsSaveRequest,
  parseExamAnalysisPromptStudioSaveRequest,
  parseExamAnalysisRunWriteRequest
} from "../src/domains/exams/examAnalysisRunApi.js";
import {
  getExamAnalysisPromptStudioDraftFromRun,
  normalizeExamAnalysisPromptStudioDraft
} from "../src/domains/exams/examAnalysisPromptStudioDraft.js";
import { parseVersionedWriteRequest } from "../src/shared/contracts/versionedWriteRouteContracts.js";

const host = "127.0.0.1";
const port = Number(process.env.ACADEMY_SAFE_API_PORT || 8787);
const safeConsecutiveAttendanceTask = Object.freeze({
  linkedLessonId: "safe-consecutive-attendance-makeup",
  makeupTaskId: "safe-consecutive-attendance-task",
  studentId: "safe-consecutive-attendance-student",
  taskType: "absence_makeup"
});

function getSafeKoreaDateString(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "2-digit",
    timeZone: "Asia/Seoul",
    year: "numeric"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

const initialState = {
  academyReminders: [],
  attendanceEvents: [],
  attendanceQueuedNotifications: [],
  appStateUpdatedAt: {},
  appStates: {},
  classTemplates: [
    {
      className: "월 경계 연동반",
      classTemplateId: "safe-cross-month-class",
      endTime: "13:00",
      name: "월 경계 연동반",
      startTime: "10:00",
      studentIds: ["safe-active-student"]
    },
    {
      className: "정산 미리보기반",
      classTemplateId: "safe-settlement-class",
      days: ["mon", "wed", "fri"],
      endTime: "19:00",
      name: "정산 미리보기반",
      startTime: "16:00",
      studentIds: ["safe-settlement-student"]
    }
  ],
  examAnalysisEvents: [],
  examAnalysisQuestions: [],
  examAnalysisRuns: [],
  examPrepRows: [
    {
      examCycle: "2026-2-mid",
      examPrepId: "safe-exam-prep-row",
      grade: "고1",
      publisher: "안전 출판사",
      schoolName: "안전고",
      scope: "안전 fixture 시험 범위",
      subject: "공통수학1",
      subTextbook: "안전 fixture 부교재",
      updatedAt: "2026-08-03T00:00:00.000Z"
    }
  ],
  homeworks: [
    {
      assignedDate: "2026-07-30",
      dueDate: "2026-08-01",
      homeworkId: "safe-cross-month-previous-homework",
      homeworkType: "next",
      lessonId: "safe-cross-month-blank-lesson",
      status: "assigned",
      studentId: "safe-active-student",
      studentStatus: "not_started",
      teacherStatus: "unverified",
      title: "안전 이전 숙제",
      updatedAt: "2026-08-03T00:00:00.000Z"
    },
    {
      assignedDate: "2026-07-22",
      dueDate: "2026-07-23",
      homeworkId: "safe-teacher-status-homework",
      homeworkType: "previous",
      lessonId: "safe-settlement-regular",
      status: "missing",
      studentId: "safe-settlement-student",
      studentStatus: "not_started",
      teacherStatus: "missing",
      title: "안전 교사 확인 숙제",
      updatedAt: "2026-08-03T00:00:00.000Z"
    }
  ],
  lessons: [
    {
      className: "안전 미리보기반",
      date: "2026-07-21",
      endTime: "22:00",
      lessonId: "safe-absence-lesson",
      startTime: "19:00",
      status: "scheduled",
      studentIds: ["safe-withdrawn-student"],
      title: "안전 미리보기 수업",
      type: "regular"
    },
    {
      className: "월 경계 연동반",
      classTemplateId: "safe-cross-month-class",
      date: "2026-07-28",
      endTime: "13:00",
      lessonId: "safe-cross-month-populated-lesson",
      startTime: "10:00",
      status: "scheduled",
      studentIds: ["safe-active-student"],
      title: "월 경계 연동반",
      type: "regular"
    },
    {
      className: "정산 미리보기반",
      classTemplateId: "safe-settlement-class",
      date: "2026-07-22",
      endTime: "19:00",
      lessonId: "safe-settlement-regular",
      lessonType: "class",
      startTime: "16:00",
      status: "scheduled",
      studentIds: ["safe-settlement-student"],
      title: "정산 미리보기반"
    },
    {
      className: "정산 미리보기반",
      classTemplateId: "safe-settlement-class",
      date: "2026-07-23",
      endTime: "19:00",
      lessonId: "safe-settlement-pending",
      lessonType: "class",
      startTime: "16:00",
      status: "scheduled",
      studentIds: ["safe-settlement-student"],
      title: "정산 미리보기반"
    },
    {
      className: "정산 미리보기반",
      classTemplateId: "safe-settlement-class",
      date: "2026-07-24",
      endTime: "19:00",
      lessonId: "safe-settlement-closure",
      lessonTopic: "휴강",
      lessonType: "closure",
      sourceLabel: "연결 휴강 보충 · safe-settlement-replacement",
      startTime: "16:00",
      status: "scheduled",
      studentIds: ["safe-settlement-student"],
      title: "정산 미리보기반 휴강"
    },
    {
      className: "정산 미리보기반 · 휴강 보충",
      classTemplateId: "safe-settlement-class",
      date: "2026-07-28",
      endTime: "16:00",
      lessonId: "safe-settlement-replacement",
      lessonTopic: "휴강 보충",
      lessonType: "makeup",
      sourceLabel: "원 휴강 수업 · safe-settlement-closure",
      startTime: "13:00",
      status: "scheduled",
      studentIds: ["safe-settlement-student"],
      title: "정산 미리보기반 휴강 보충"
    },
    {
      className: "여름 개별 진도 클리닉",
      date: "2026-08-03",
      endTime: "16:00",
      lessonId: "safe-special-lecture-journal",
      lessonType: "specialLecture",
      specialLectureGuideId: "special_lecture_2026_summer_high1_clinic_mwf",
      specialLectureSessionId: "special_lecture_session_special_lecture_2026_summer_high1_clinic_mwf_06",
      startTime: "13:00",
      status: "completed",
      studentIds: ["safe-settlement-student"],
      title: "여름 개별 진도 클리닉"
    },
    {
      className: "정산 미리보기반",
      classTemplateId: "safe-settlement-class",
      date: "2026-08-01",
      endTime: "19:00",
      lessonId: "safe-settlement-august-regular",
      lessonType: "class",
      startTime: "16:00",
      status: "completed",
      studentIds: ["safe-settlement-student"],
      title: "정산 미리보기반"
    },
    {
      className: "정산 미리보기반",
      classTemplateId: "safe-settlement-class",
      date: "2026-08-04",
      endTime: "19:00",
      lessonId: "safe-settlement-future-roster",
      lessonType: "class",
      startTime: "16:00",
      status: "scheduled",
      studentIds: ["safe-settlement-student"],
      title: "정산 미리보기반 미래 수업"
    },
    {
      className: "월 경계 연동반",
      classTemplateId: "safe-cross-month-class",
      date: "2026-07-30",
      endTime: "13:00",
      lessonId: "safe-cross-month-blank-lesson",
      startTime: "10:00",
      status: "scheduled",
      studentIds: ["safe-active-student"],
      title: "월 경계 연동반",
      type: "regular"
    },
    {
      className: "월 경계 연동반",
      classTemplateId: "safe-cross-month-class",
      date: "2026-08-01",
      endTime: "13:00",
      lessonId: "safe-cross-month-current-lesson",
      startTime: "10:00",
      status: "scheduled",
      studentIds: ["safe-active-student"],
      title: "월 경계 연동반",
      type: "regular"
    }
  ],
  makeupTasks: [],
  notificationJobs: [],
  records: [
    {
      absenceReason: "병결",
      attendanceStatus: "absent",
      date: "2026-07-21",
      lessonId: "safe-absence-lesson",
      lessonStudentRecordId: "safe-absence-record",
      recordId: "safe-absence-record",
      studentId: "safe-withdrawn-student"
    },
    {
      attendanceStatus: "present",
      lessonId: "safe-cross-month-populated-lesson",
      lessonMaterial: "7월 최신 교재",
      lessonProgress: "7월 최신 진도",
      lessonStudentRecordId: "safe-cross-month-populated-record",
      recordId: "safe-cross-month-populated-record",
      studentId: "safe-active-student"
    },
    {
      attendanceStatus: "present",
      lessonId: "safe-cross-month-blank-lesson",
      lessonMaterial: "",
      lessonProgress: "",
      lessonStudentRecordId: "safe-cross-month-blank-record",
      recordId: "safe-cross-month-blank-record",
      studentId: "safe-active-student"
    },
    {
      attendanceStatus: "pending",
      lessonId: "safe-cross-month-current-lesson",
      lessonMaterial: "",
      lessonProgress: "",
      lessonStudentRecordId: "safe-cross-month-current-record",
      recordId: "safe-cross-month-current-record",
      studentId: "safe-active-student"
    },
    {
      attendanceStatus: "present",
      lessonId: "safe-settlement-regular",
      lessonStudentRecordId: "safe-settlement-regular-record",
      recordId: "safe-settlement-regular-record",
      studentId: "safe-settlement-student"
    },
    {
      attendanceStatus: "absent",
      lessonId: "safe-settlement-replacement",
      lessonStudentRecordId: "safe-settlement-replacement-record",
      recordId: "safe-settlement-replacement-record",
      studentId: "safe-settlement-student"
    },
    {
      attendanceStatus: "late",
      lessonId: "safe-special-lecture-journal",
      lessonStudentRecordId: "safe-special-lecture-record",
      recordId: "safe-special-lecture-record",
      studentId: "safe-settlement-student"
    },
    {
      attendanceStatus: "present",
      lessonId: "safe-settlement-august-regular",
      lessonStudentRecordId: "safe-settlement-august-regular-record",
      recordId: "safe-settlement-august-regular-record",
      studentId: "safe-settlement-student"
    }
  ],
  resourceMaterials: [],
  schoolEvents: [],
  specialLectureApplications: [],
  specialLectureEnrollments: [{
    enrollmentId: "safe-special-lecture-enrollment",
    planReviewedAt: "2026-07-20T00:00:00.000Z",
    specialLectureGuideId: "special_lecture_2026_summer_high1_clinic_mwf",
    status: "active",
    studentId: "safe-settlement-student",
    sessionIds: [
      "special_lecture_session_special_lecture_2026_summer_high1_clinic_mwf_06",
      "special_lecture_session_special_lecture_2026_summer_high1_clinic_mwf_07"
    ]
  }],
  studentIntakeApplicants: [{
    applicantId: "safe-intake-applicant",
    birthYear: "2010",
    createdAt: "2026-08-03T00:00:00.000Z",
    currentLearningProcess: "안전 fixture 기존 과정",
    defaultClassTemplateId: "",
    desiredClass: "",
    enrollmentStatus: "상담중",
    formId: "safe-intake-form",
    formName: "안전 신규생 Tally",
    grade: "고1",
    memo: "",
    name: "Tally 안전후보",
    parentPhone: "01022223333",
    previousSemesterScore: "3등급",
    rawPayload: { safeFixture: true },
    schoolName: "안전고",
    source: "tally",
    sourceSubmissionId: "safe-intake-submission",
    specialNote: "",
    status: "received",
    studentPhone: "01011112222",
    updatedAt: "2026-08-03T00:00:00.000Z"
  }],
  students: [
    {
      grade: "중3",
      loginId: "safe_withdrawn",
      name: "미리보기 퇴원생",
      pin: "1234",
      schoolName: "안전중",
      status: "paused",
      studentId: "safe-withdrawn-student",
      updatedAt: "2026-08-03T00:00:00.000Z",
      withdrawnAt: "2026-07-31T00:00:00.000Z"
    },
    {
      grade: "중3",
      loginId: "safe_active",
      name: "월경계 학생",
      pin: "1234",
      schoolName: "안전중",
      status: "active",
      studentId: "safe-active-student",
      updatedAt: "2026-08-03T00:00:00.000Z"
    },
    {
      defaultClassTemplateId: "safe-settlement-class",
      grade: "고1",
      loginId: "safe_settlement",
      name: "정산 미리보기 학생",
      pin: "1234",
      schoolName: "안전고",
      status: "active",
      studentId: "safe-settlement-student",
      updatedAt: "2026-08-03T00:00:00.000Z"
    }
  ],
  testAttempts: [],
  testSessions: []
};

function createInitialState() {
  const snapshot = JSON.parse(JSON.stringify(initialState));
  const attendanceDate = getSafeKoreaDateString();
  snapshot.students.push({
    grade: "고1",
    name: "연속출결 가상학생",
    parentPhone: "01000000000",
    status: "active",
    studentId: "safe-consecutive-attendance-student",
    studentPhone: "01000000833"
  });
  snapshot.lessons.push(
    {
      className: "결석보강 가상수업",
      date: attendanceDate,
      endTime: "16:00",
      lessonId: "safe-consecutive-attendance-makeup",
      lessonType: "makeup",
      sourceMakeupTaskId: "safe-consecutive-attendance-task",
      startTime: "15:00",
      status: "scheduled",
      studentIds: ["safe-consecutive-attendance-student"]
    },
    {
      className: "고1 정규 가상수업",
      date: attendanceDate,
      endTime: "19:00",
      lessonId: "safe-consecutive-attendance-regular",
      lessonType: "class",
      startTime: "16:00",
      status: "scheduled",
      studentIds: ["safe-consecutive-attendance-student"]
    }
  );
  snapshot.lessons = snapshot.lessons.map((lesson) => ({
    ...lesson,
    updatedAt: lesson.updatedAt || "2026-08-03T00:00:00.000Z"
  }));
  return snapshot;
}

let state = createInitialState();
let resourceMaterialFiles = new Map();

const listRoutes = new Map([
  ["/api/academy-reminders", ["academyReminders", "academyReminders"]],
  ["/api/safe-fixture/attendance-events", ["attendanceEvents", "attendanceEvents"]],
  ["/api/safe-fixture/attendance-queued-notifications", ["attendanceQueuedNotifications", "attendanceQueuedNotifications"]],
  ["/api/classes", ["classTemplates", "classTemplates"]],
  ["/api/exam-prep-rows", ["examPrepRows", "examPrepRows"]],
  ["/api/homeworks", ["homeworks", "homeworks"]],
  ["/api/lessons", ["lessons", "lessons"]],
  ["/api/lesson-records", ["records", "records"]],
  ["/api/makeup-tasks", ["makeupTasks", "makeupTasks"]],
  ["/api/notification-jobs", ["notificationJobs", "notificationJobs"]],
  ["/api/resource-materials", ["resourceMaterials", "materials"]],
  ["/api/school-events", ["schoolEvents", "schoolEvents"]],
  ["/api/special-lecture-applications", ["specialLectureApplications", "applications"]],
  ["/api/special-lecture-enrollments", ["specialLectureEnrollments", "enrollments"]],
  ["/api/student-intake-applicants", ["studentIntakeApplicants", "applicants"]],
  ["/api/students", ["students", "students"]],
  ["/api/test-attempts", ["testAttempts", "testAttempts"]],
  ["/api/test-sessions", ["testSessions", "testSessions"]]
]);

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Origin": "*",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8"
  });
  response.end(JSON.stringify(payload));
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (chunks.length === 0) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function upsertById(rows, row, idFields) {
  const idField = idFields.find((field) => row?.[field]);
  if (!idField) return [...rows, row];
  const index = rows.findIndex((candidate) => candidate?.[idField] === row[idField]);
  if (index < 0) return [...rows, row];
  return rows.map((candidate, candidateIndex) => candidateIndex === index ? row : candidate);
}

function haveSameSafeRosterStudentIds(left = [], right = []) {
  return JSON.stringify([...new Set(left)].sort()) === JSON.stringify([...new Set(right)].sort());
}

function haveSameSafeStudentTarget(requested = {}, persisted = {}) {
  const fields = [
    "birthYear", "defaultClassTemplateId", "grade", "loginId", "name", "parentPhone", "pin",
    "scheduleOverride", "schoolName", "specialNote", "status", "studentId", "studentPhone", "textbook",
    "withdrawalComment", "withdrawalReason", "withdrawnAt"
  ];
  return fields.every((field) => String(requested[field] ?? "") === String(persisted[field] ?? ""));
}

function haveSameSafeSchoolEvent(requested = {}, persisted = {}) {
  const fields = [
    "color", "date", "endDate", "eventId", "examCycle", "examSubject", "grade",
    "mathSubjectByDate", "memo", "schoolName", "title", "type"
  ];
  return fields.every((field) => (
    typeof requested[field] === "object" || typeof persisted[field] === "object"
      ? JSON.stringify(requested[field] ?? "") === JSON.stringify(persisted[field] ?? "")
      : String(requested[field] ?? "") === String(persisted[field] ?? "")
  ));
}

function haveSameSafeDerivedExamPrepRow(requested = {}, persisted = {}) {
  const fields = ["examPrepId", "schoolName", "grade", "subject", "examCycle", "examPeriod", "mathExamDate", "mathExamDates"];
  return fields.every((field) => (
    typeof requested[field] === "object" || typeof persisted[field] === "object"
      ? JSON.stringify(requested[field] ?? []) === JSON.stringify(persisted[field] ?? [])
      : String(requested[field] ?? "") === String(persisted[field] ?? "")
  ));
}

function haveSameSafeDerivedLesson(requested = {}, persisted = {}) {
  const fields = [
    "lessonId", "classTemplateId", "className", "lessonType", "lessonTopic", "sourceSchoolEventId",
    "sourceLabel", "date", "startTime", "endTime", "color", "status", "studentIds"
  ];
  return fields.every((field) => (
    typeof requested[field] === "object" || typeof persisted[field] === "object"
      ? JSON.stringify([...(requested[field] ?? [])].sort()) === JSON.stringify([...(persisted[field] ?? [])].sort())
      : String(requested[field] ?? "") === String(persisted[field] ?? "")
  ));
}

function parseSafeAttendanceMinutes(value = "") {
  const [hours, minutes] = String(value).split(":").map(Number);
  return Number.isInteger(hours) && Number.isInteger(minutes) ? hours * 60 + minutes : 0;
}

function hasSafeAttendanceArrival(record = {}) {
  return Boolean(record?.checkInAt || record?.checkInTime);
}

function hasSafeAttendanceCheckout(record = {}) {
  return Boolean(record?.checkOutAt || record?.checkOutTime);
}

function handleSafeConsecutiveAttendance(pathname, payload = {}) {
  const student = state.students.find((item) => (
    item.studentId === payload.studentId || String(item.studentPhone ?? "").replaceAll(/\D/g, "").endsWith(String(payload.phoneLast4 ?? ""))
  ));
  if (!student) return { error: "가상 출결 학생을 찾지 못했습니다.", ok: false, statusCode: 404 };
  const attendanceLessons = state.lessons
    .filter((lesson) => lesson.date === getSafeKoreaDateString())
    .filter((lesson) => lesson.studentIds?.includes(student.studentId))
    .sort((left, right) => String(left.startTime).localeCompare(String(right.startTime)));
  const recordByLessonId = new Map(
    state.records
      .filter((record) => record.studentId === student.studentId)
      .map((record) => [record.lessonId, record])
  );
  const openArrival = [...recordByLessonId.values()].some((record) => hasSafeAttendanceArrival(record) && !hasSafeAttendanceCheckout(record));
  if (!payload.lessonId && !openArrival && attendanceLessons.length > 1) {
    return {
      action: "selectLesson",
      alimtalk: { status: "preview" },
      checkedTime: "15:55",
      lesson: null,
      lessonCandidates: attendanceLessons.map((lesson, index) => ({
        attendanceLesson: lesson,
        hasArrival: hasSafeAttendanceArrival(recordByLessonId.get(lesson.lessonId)),
        hasCheckout: hasSafeAttendanceCheckout(recordByLessonId.get(lesson.lessonId)),
        isLatest: index === attendanceLessons.length - 1,
        lesson
      })),
      message: `${student.name} 학생의 오늘 수업을 선택해 주세요.`,
      mode: "selectLesson",
      record: null,
      requiresLessonSelection: true,
      student
    };
  }
  const lesson = payload.lessonId
    ? attendanceLessons.find((item) => item.lessonId === payload.lessonId)
    : [...attendanceLessons].reverse()[0];
  if (!lesson) return { error: "가상 출결 수업을 찾지 못했습니다.", ok: false, statusCode: 404 };
  const existingRecord = recordByLessonId.get(lesson.lessonId) ?? null;
  const eventType = payload.action || (openArrival ? "checkout" : "checkin");
  const checkedTime = eventType === "checkout" ? payload.checkOutTime || "19:05" : payload.checkInTime || "15:55";
  const nowIso = eventType === "checkout" ? `${lesson.date}T10:05:00.000Z` : `${lesson.date}T06:55:00.000Z`;
  const dependencies = {
    calculateLateMinutes: (candidate, time, graceMinutes = 5) => Math.max(0, parseSafeAttendanceMinutes(time) - parseSafeAttendanceMinutes(candidate.startTime) - Number(graceMinutes || 5)),
    createAttendanceIso: (date, time) => `${date}T${time}:00+09:00`,
    createRecordId: (lessonId, studentId) => `safe_record_${lessonId}_${studentId}`,
    hasArrival: hasSafeAttendanceArrival,
    hasCheckout: hasSafeAttendanceCheckout
  };
  const primaryRecord = createConsecutiveAttendanceVisitRecord({
    ...dependencies,
    currentTime: checkedTime,
    eventType,
    existingRecord,
    lateGraceMinutes: payload.lateGraceMinutes,
    lesson,
    nowIso,
    studentId: student.studentId
  });
  const visit = findConsecutiveAbsenceMakeupVisit({
    lessons: attendanceLessons,
    makeupTasks: [safeConsecutiveAttendanceTask],
    selectedLessonId: lesson.lessonId
  });
  const applyVisit = shouldApplyConsecutiveAttendanceVisit({ eventType, selectedLessonId: lesson.lessonId, visit });
  const companionLesson = applyVisit ? visit.lessons.find((item) => item.lessonId !== lesson.lessonId) : null;
  const companionRecord = companionLesson ? createConsecutiveAttendanceVisitRecord({
    ...dependencies,
    currentTime: checkedTime,
    eventType,
    existingRecord: recordByLessonId.get(companionLesson.lessonId) ?? null,
    lateGraceMinutes: payload.lateGraceMinutes,
    lesson: companionLesson,
    nowIso,
    studentId: student.studentId
  }) : null;
  const records = [primaryRecord, companionRecord].filter(Boolean);
  const attendanceVisit = companionRecord ? {
    label: getConsecutiveAttendanceVisitLabel(visit),
    lessonIds: visit.lessonIds,
    visitType: visit.visitType
  } : null;
  if (pathname === "/api/attendance/preview") {
    return {
      action: eventType,
      alimtalk: { status: "preview" },
      attendanceVisit,
      checkedTime,
      lesson,
      message: `${student.name} ${eventType === "checkout" ? "하원" : "등원"}`,
      mode: eventType === "checkout" ? "checkOut" : "checkIn",
      record: primaryRecord,
      records,
      student
    };
  }
  for (const record of records) state.records = upsertById(state.records, record, ["lessonStudentRecordId"]);
  const attendanceEvent = {
    attendanceEventId: `safe_attendance_event_${state.attendanceEvents.length + 1}`,
    eventType,
    lessonId: lesson.lessonId,
    studentId: student.studentId
  };
  state.attendanceEvents.push(attendanceEvent);
  state.attendanceQueuedNotifications.push({
    eventType,
    notificationId: `safe_attendance_notification_${state.attendanceQueuedNotifications.length + 1}`,
    studentId: student.studentId
  });
  return {
    action: eventType,
    alimtalk: { status: "queued" },
    attendanceEvent,
    attendanceVisit,
    checkedTime,
    lesson,
    message: `${student.name} ${eventType === "checkout" ? "하원" : "등원"}`,
    mode: eventType === "checkout" ? "checkOut" : "checkIn",
    record: primaryRecord,
    records,
    student
  };
}

function handleMutation(pathname, payload) {
  if (pathname === "/api/exam-analysis-runs") {
    let parsedPayload;
    try {
      parsedPayload = parseExamAnalysisRunWriteRequest(payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const current = parsedPayload.analysisRun;
    const analysisRun = {
      ...current,
      analysisRunId: current.analysisRunId || `safe-exam-analysis-${crypto.randomUUID()}`,
      updatedAt: new Date().toISOString(),
      workflowStatus: current.workflowStatus || "draft"
    };
    state.examAnalysisRuns = upsertById(state.examAnalysisRuns, analysisRun, ["analysisRunId"]);
    return { analysisRun, ok: true, source: "supabase" };
  }
  if (pathname === "/api/exam-analysis-runs/confirm-question-count") {
    let parsedPayload;
    try {
      parsedPayload = parseExamAnalysisQuestionCountConfirmRequest(payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const currentRun = state.examAnalysisRuns
      .find((run) => run.analysisRunId === parsedPayload.analysisRunId) ?? null;
    if (!currentRun) {
      return {
        error: "시험분석 작업을 찾지 못했습니다.",
        ok: false,
        statusCode: 404
      };
    }
    const previousQuestions = state.examAnalysisQuestions
      .filter((question) => question.analysisRunId === parsedPayload.analysisRunId);
    const previousNumbers = new Set(previousQuestions.map((question) => Number(question.questionNumber)));
    const insertedQuestionCount = Array.from(
      { length: parsedPayload.questionCount },
      (_, index) => index + 1
    ).filter((questionNumber) => !previousNumbers.has(questionNumber)).length;
    const questions = Array.from({ length: parsedPayload.questionCount }, (_, index) => {
      const questionNumber = index + 1;
      return previousQuestions.find((question) => Number(question.questionNumber) === questionNumber) ?? {
        analysisRunId: parsedPayload.analysisRunId,
        questionId: `${parsedPayload.analysisRunId}-question-${questionNumber}`,
        questionNumber
      };
    });
    state.examAnalysisQuestions = [
      ...state.examAnalysisQuestions.filter((question) => question.analysisRunId !== parsedPayload.analysisRunId),
      ...questions
    ];
    const confirmedAt = new Date().toISOString();
    const analysisRun = {
      ...currentRun,
      confirmedAt,
      confirmedBy: parsedPayload.confirmedBy,
      confirmedQuestionCount: parsedPayload.questionCount,
      detectedQuestionConfidence: parsedPayload.detectedQuestionConfidence,
      detectedQuestionCount: parsedPayload.questionCount,
      detectedQuestionEvidence: parsedPayload.detectedQuestionEvidence,
      missingQuestionNumbers: parsedPayload.missingQuestionNumbers,
      questionCountStatus: "teacher_confirmed",
      rowsLocked: true,
      updatedAt: confirmedAt,
      workflowStatus: "rows_created"
    };
    state.examAnalysisRuns = upsertById(state.examAnalysisRuns, analysisRun, ["analysisRunId"]);
    const event = {
      analysisRunId: parsedPayload.analysisRunId,
      eventId: `${parsedPayload.analysisRunId}-question-count-confirmed`,
      eventType: "question_count_confirmed",
      occurredAt: confirmedAt
    };
    state.examAnalysisEvents = upsertById(state.examAnalysisEvents, event, ["eventId"]);
    return {
      aiJobs: [],
      analysisRun,
      events: state.examAnalysisEvents.filter((item) => item.analysisRunId === parsedPayload.analysisRunId),
      insertedQuestionCount,
      ok: true,
      questions,
      source: "supabase",
      sources: []
    };
  }
  if (pathname === "/api/exam-analysis-runs/save-question-reviews") {
    let parsedPayload;
    try {
      parsedPayload = parseExamAnalysisQuestionReviewsSaveRequest(payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const currentRun = state.examAnalysisRuns
      .find((run) => run.analysisRunId === parsedPayload.analysisRunId) ?? null;
    const currentQuestions = state.examAnalysisQuestions
      .filter((question) => question.analysisRunId === parsedPayload.analysisRunId);
    if (!currentRun || !currentQuestions.length) {
      return {
        error: currentRun ? "고정 문항 행을 먼저 생성해 주세요." : "시험분석 작업을 찾지 못했습니다.",
        ok: false,
        statusCode: 404
      };
    }
    const questionNumbers = new Set(currentQuestions.map((question) => Number(question.questionNumber)));
    const reviews = parsedPayload.reviews
      .map((review) => {
        const questionNumber = Number(review.questionNumber ?? review.question_number);
        const unitName = String(review.unitName ?? review.unit_name ?? "").trim().slice(0, 120);
        const mainType = String(review.mainType ?? review.main_type ?? "").trim().slice(0, 160);
        const subTypesValue = review.subTypes ?? review.sub_types ?? [];
        return {
          confirmed: Boolean(review.confirmed) && Boolean(unitName) && Boolean(mainType),
          difficulty: String(review.difficulty ?? "").trim().slice(0, 40),
          isImportantQuestion: Boolean(review.isImportantQuestion ?? review.is_important_question),
          mainType,
          mainTypeCode: String(review.mainTypeCode ?? review.main_type_code ?? "").trim().slice(0, 60),
          questionNumber,
          reviewNote: String(review.reviewNote ?? review.review_note ?? "").trim().slice(0, 500),
          ssenMeta: review.ssenMeta && typeof review.ssenMeta === "object" ? review.ssenMeta : {},
          subTypeCodes: Array.isArray(review.subTypeCodes ?? review.sub_type_codes)
            ? (review.subTypeCodes ?? review.sub_type_codes).map(String).filter(Boolean).slice(0, 3)
            : [],
          subTypes: Array.isArray(subTypesValue)
            ? subTypesValue.map(String).filter(Boolean).slice(0, 3)
            : String(subTypesValue || "").split(/[,，]/).map((item) => item.trim()).filter(Boolean).slice(0, 3),
          unitName
        };
      })
      .filter((review) => questionNumbers.has(review.questionNumber));
    if (!reviews.length) {
      return { error: "저장할 검수 문항이 없습니다.", ok: false, statusCode: 400 };
    }
    const reviewedAt = new Date().toISOString();
    const reviewByNumber = new Map(reviews.map((review) => [review.questionNumber, review]));
    const questions = currentQuestions.map((question) => {
      const review = reviewByNumber.get(Number(question.questionNumber));
      if (!review) return question;
      const teacherFields = {
        difficulty: review.difficulty,
        isImportantQuestion: review.isImportantQuestion,
        mainType: review.mainType,
        mainTypeCode: review.mainTypeCode,
        reviewNote: review.reviewNote,
        reviewedAt,
        source: "teacher_review",
        ssenMeta: review.ssenMeta,
        subTypeCodes: review.subTypeCodes,
        subTypes: review.subTypes,
        unitName: review.unitName
      };
      return {
        ...question,
        confirmedAt: review.confirmed ? reviewedAt : null,
        difficulty: review.difficulty,
        finalFields: review.confirmed ? { ...teacherFields, confirmedAt: reviewedAt } : {},
        mainType: review.mainType,
        manualEditCount: Number(question.manualEditCount || 0) + 1,
        rowStatus: review.confirmed ? "confirmed" : "teacher_edited",
        subTypes: review.subTypes,
        teacherEditedAt: reviewedAt,
        teacherFields,
        teacherOverride: true,
        unitName: review.unitName,
        updatedAt: reviewedAt
      };
    });
    state.examAnalysisQuestions = [
      ...state.examAnalysisQuestions.filter((question) => question.analysisRunId !== parsedPayload.analysisRunId),
      ...questions
    ];
    const confirmedCount = questions.filter((question) => question.rowStatus === "confirmed").length;
    const editedCount = questions.filter((question) => question.teacherOverride).length;
    const importantQuestionNumbers = questions
      .filter((question) => Boolean(question.finalFields?.isImportantQuestion ?? question.teacherFields?.isImportantQuestion))
      .map((question) => Number(question.questionNumber));
    const unconfirmedNumbers = questions
      .filter((question) => question.rowStatus !== "confirmed")
      .map((question) => Number(question.questionNumber));
    const teacherReview = {
      confirmedCount,
      editedCount,
      importantQuestionNumbers,
      reviewedAt,
      reviewedCount: reviews.length,
      status: confirmedCount === questions.length ? "completed" : "in_progress",
      totalQuestionCount: questions.length,
      unconfirmedNumbers
    };
    const analysisRun = {
      ...currentRun,
      auditSummary: { ...(currentRun.auditSummary ?? {}), teacherReview },
      updatedAt: reviewedAt,
      workflowStatus: teacherReview.status === "completed" ? "completed" : "teacher_review"
    };
    state.examAnalysisRuns = upsertById(state.examAnalysisRuns, analysisRun, ["analysisRunId"]);
    const event = {
      analysisRunId: parsedPayload.analysisRunId,
      eventId: `${parsedPayload.analysisRunId}-question-teacher-review-saved-${reviewedAt}`,
      eventType: "question_teacher_review_saved",
      occurredAt: reviewedAt
    };
    state.examAnalysisEvents = upsertById(state.examAnalysisEvents, event, ["eventId"]);
    return {
      aiJobs: [],
      analysisRun,
      events: state.examAnalysisEvents.filter((item) => item.analysisRunId === parsedPayload.analysisRunId),
      ok: true,
      questions,
      source: "supabase",
      sources: [],
      teacherReview
    };
  }
  if (pathname === "/api/exam-analysis-runs/save-prompt-studio") {
    let parsedPayload;
    try {
      parsedPayload = parseExamAnalysisPromptStudioSaveRequest(payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const currentRun = state.examAnalysisRuns
      .find((run) => run.analysisRunId === parsedPayload.analysisRunId) ?? null;
    if (!currentRun) {
      return { error: "시험분석 작업을 찾지 못했습니다.", ok: false, statusCode: 404 };
    }
    const previousDraft = getExamAnalysisPromptStudioDraftFromRun(currentRun);
    if (previousDraft.revision !== parsedPayload.expectedRevision) {
      return {
        error: `다른 화면에서 프롬프트 작업본이 변경되었습니다. 현재 revision ${previousDraft.revision}을 다시 불러와 주세요.`,
        ok: false,
        statusCode: 409
      };
    }
    const savedAt = new Date().toISOString();
    const promptStudioDraft = normalizeExamAnalysisPromptStudioDraft({
      ...parsedPayload.promptStudioDraft,
      revision: previousDraft.revision + 1,
      savedAt
    });
    const analysisRun = {
      ...currentRun,
      auditSummary: { ...(currentRun.auditSummary ?? {}), promptStudio: promptStudioDraft },
      updatedAt: savedAt
    };
    state.examAnalysisRuns = upsertById(state.examAnalysisRuns, analysisRun, ["analysisRunId"]);
    const event = {
      analysisRunId: parsedPayload.analysisRunId,
      eventId: `${parsedPayload.analysisRunId}-prompt-studio-saved-${savedAt}`,
      eventType: "exam_analysis_prompt_studio_saved",
      occurredAt: savedAt
    };
    state.examAnalysisEvents = upsertById(state.examAnalysisEvents, event, ["eventId"]);
    return {
      aiJobs: [],
      analysisRun,
      events: state.examAnalysisEvents.filter((item) => item.analysisRunId === parsedPayload.analysisRunId),
      ok: true,
      promptStudioDraft,
      questions: state.examAnalysisQuestions.filter((item) => item.analysisRunId === parsedPayload.analysisRunId),
      saveVerification: { revision: promptStudioDraft.revision, verified: true, verifiedAt: savedAt },
      source: "supabase",
      sources: []
    };
  }
  if (pathname === "/api/exam-analysis-runs/save-output-drafts") {
    let parsedPayload;
    try {
      parsedPayload = parseExamAnalysisOutputDraftsSaveRequest(payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const currentRun = state.examAnalysisRuns
      .find((run) => run.analysisRunId === parsedPayload.analysisRunId) ?? null;
    if (!currentRun) {
      return { error: "시험분석 작업을 찾지 못했습니다.", ok: false, statusCode: 404 };
    }
    const savedAt = new Date().toISOString();
    const previousDrafts = currentRun.auditSummary?.outputDrafts ?? {};
    const outputDrafts = {
      ...previousDrafts,
      inputs: {
        ...(previousDrafts.inputs ?? {}),
        ...parsedPayload.outputInputs,
        updatedAt: savedAt
      },
      blog: {
        ...(previousDrafts.blog ?? {}),
        ...(parsedPayload.blogTeacherDraftEdited ? {
          teacherDraft: parsedPayload.blogTeacherDraft.trim().slice(0, 20000),
          teacherUpdatedAt: savedAt
        } : {}),
        updatedAt: savedAt
      },
      instagram: {
        ...(previousDrafts.instagram ?? {}),
        ...(parsedPayload.instagramTeacherDraftEdited ? {
          teacherDraft: parsedPayload.instagramTeacherDraft.trim().slice(0, 20000),
          teacherUpdatedAt: savedAt
        } : {}),
        updatedAt: savedAt
      }
    };
    outputDrafts.blog.status = outputDrafts.blog.teacherUpdatedAt
      ? "teacher_saved"
      : outputDrafts.blog.aiDraft ? "ai_draft" : "inputs_saved";
    outputDrafts.instagram.status = outputDrafts.instagram.teacherUpdatedAt
      ? "teacher_saved"
      : outputDrafts.instagram.aiDraft ? "ai_draft" : "inputs_saved";
    const analysisRun = {
      ...currentRun,
      auditSummary: { ...(currentRun.auditSummary ?? {}), outputDrafts },
      updatedAt: savedAt
    };
    state.examAnalysisRuns = upsertById(state.examAnalysisRuns, analysisRun, ["analysisRunId"]);
    const event = {
      analysisRunId: parsedPayload.analysisRunId,
      eventId: `${parsedPayload.analysisRunId}-output-draft-saved-${savedAt}`,
      eventType: "exam_analysis_output_draft_saved",
      occurredAt: savedAt
    };
    state.examAnalysisEvents = upsertById(state.examAnalysisEvents, event, ["eventId"]);
    return {
      aiJobs: [],
      analysisRun,
      events: state.examAnalysisEvents.filter((item) => item.analysisRunId === parsedPayload.analysisRunId),
      ok: true,
      questions: state.examAnalysisQuestions.filter((item) => item.analysisRunId === parsedPayload.analysisRunId),
      source: "supabase",
      sources: []
    };
  }
  if (["/api/attendance/check", "/api/attendance/preview"].includes(pathname)) {
    return { ok: true, ...handleSafeConsecutiveAttendance(pathname, payload) };
  }
  if (pathname === "/api/app-state") {
    const requestedStates = payload.states || {};
    const expectedUpdatedAt = payload.expectedUpdatedAt || null;
    for (const key of Object.keys(requestedStates)) {
      if (
        expectedUpdatedAt &&
        Object.prototype.hasOwnProperty.call(expectedUpdatedAt, key) &&
        expectedUpdatedAt[key] !== (state.appStateUpdatedAt[key] ?? null)
      ) {
        return {
          code: "APP_STATE_CONFLICT",
          error: `${key} 설정이 다른 화면에서 먼저 변경되었습니다.`,
          ok: false,
          statusCode: 409
        };
      }
    }
    state.appStates = { ...state.appStates, ...requestedStates };
    for (const key of Object.keys(requestedStates)) {
      const previousTime = new Date(state.appStateUpdatedAt[key] || 0).getTime();
      state.appStateUpdatedAt[key] = new Date(Math.max(Date.now(), previousTime + 1)).toISOString();
    }
    return {
      ok: true,
      stateRows: Object.entries(state.appStateUpdatedAt).map(([key, updatedAt]) => ({ key, updatedAt })),
      states: state.appStates,
      verified: true
    };
  }
  if (pathname === "/api/notification-jobs") {
    let parsedPayload;
    try {
      parsedPayload = parseVersionedWriteRequest("POST", pathname, payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const notificationJob = parsedPayload.notificationJob;
    state.notificationJobs = upsertById(
      state.notificationJobs,
      notificationJob,
      ["notificationJobId"]
    );
    return { notificationJob, ok: true };
  }
  if (pathname === "/api/notification-jobs/reserve") {
    let parsedPayload;
    try {
      parsedPayload = parseVersionedWriteRequest("POST", pathname, payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const notificationJob = {
      ...parsedPayload.notificationJob,
      provider: parsedPayload.forceDryRun ? "academy-os" : "solapi",
      status: parsedPayload.forceDryRun ? "dry_run" : "scheduled"
    };
    state.notificationJobs = upsertById(
      state.notificationJobs,
      notificationJob,
      ["notificationJobId"]
    );
    return {
      notificationJob,
      ok: true,
      reserved: !parsedPayload.forceDryRun
    };
  }
  if (pathname === "/api/notification-jobs/cancel") {
    let parsedPayload;
    try {
      parsedPayload = parseVersionedWriteRequest("POST", pathname, payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const currentJob = state.notificationJobs.find((job) => (
      job.notificationJobId === parsedPayload.notificationJobId
    )) ?? null;
    if (!currentJob) {
      return {
        error: "안전 fixture에서 취소할 알림톡 예약을 찾지 못했습니다.",
        ok: false,
        statusCode: 404
      };
    }
    const notificationJob = {
      ...currentJob,
      error: parsedPayload.reason || "선생님 예약 취소",
      status: "canceled",
      updatedAt: new Date().toISOString()
    };
    state.notificationJobs = upsertById(
      state.notificationJobs,
      notificationJob,
      ["notificationJobId"]
    );
    return {
      notificationJob,
      ok: true,
      solapiCancellation: null
    };
  }
  if (pathname === "/api/notification-jobs/reconcile-solapi") {
    let parsedPayload;
    try {
      parsedPayload = parseVersionedWriteRequest("POST", pathname, payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const requestedIds = new Set(parsedPayload.notificationJobIds);
    if (
      !requestedIds.size &&
      !parsedPayload.date &&
      !parsedPayload.lessonId &&
      !parsedPayload.scheduledFrom &&
      !parsedPayload.scheduledTo
    ) {
      return {
        error: "조회할 안전 fixture 알림톡 예약 범위가 필요합니다.",
        ok: false,
        statusCode: 400
      };
    }
    const candidates = state.notificationJobs.filter((job) => (
      (!requestedIds.size || requestedIds.has(job.notificationJobId)) &&
      (!parsedPayload.lessonId || job.lessonId === parsedPayload.lessonId)
    ));
    return {
      checked: candidates.map((job) => ({
        notificationJobId: job.notificationJobId,
        status: "safe_fixture",
        updated: false
      })),
      checkedCount: candidates.length,
      notificationJobs: [],
      ok: true,
      records: [],
      source: "safe-provider",
      updatedCount: 0
    };
  }
  if (pathname === "/api/notification-jobs/reserve-bulk") {
    let parsedPayload;
    try {
      parsedPayload = parseVersionedWriteRequest("POST", pathname, payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const requestedJobs = parsedPayload.notificationJobs.filter((job) => job?.notificationJobId);
    const results = requestedJobs.map((requestedJob) => {
      const notificationJob = {
        ...requestedJob,
        provider: "academy-os",
        status: "dry_run"
      };
      state.notificationJobs = upsertById(
        state.notificationJobs,
        notificationJob,
        ["notificationJobId"]
      );
      return {
        notificationJob,
        reserved: false,
        source: "supabase"
      };
    });
    return {
      failedCount: 0,
      notificationJobs: results.map((result) => result.notificationJob),
      ok: true,
      reservedCount: 0,
      results,
      reusedCount: 0
    };
  }
  if (pathname === "/api/notification-jobs/readiness-check") {
    let parsedPayload;
    try {
      parsedPayload = parseVersionedWriteRequest("POST", pathname, payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    if (parsedPayload.notifySlack) {
      return {
        error: "안전 fixture에서는 Slack 알림을 보낼 수 없습니다.",
        ok: false,
        statusCode: 400
      };
    }
    const nowTime = new Date(parsedPayload.now || new Date().toISOString()).getTime();
    if (Number.isNaN(nowTime)) {
      return { error: "now must be a valid date string.", ok: false, statusCode: 500 };
    }
    const windowMinutes = Math.max(1, parsedPayload.windowMinutes || 15);
    const windowTime = nowTime + windowMinutes * 60_000;
    const dueSoonJobs = state.notificationJobs.filter((job) => {
      if (!["queued", "pending_send", "scheduled"].includes(job.status)) return false;
      if (!job.scheduledAt) return true;
      const scheduledTime = new Date(job.scheduledAt).getTime();
      return !Number.isNaN(scheduledTime) && scheduledTime >= nowTime && scheduledTime <= windowTime;
    });
    const issues = dueSoonJobs
      .map((job) => ({
        missing: ["notice_parent", "notice_student"].includes(job.notificationType) &&
          !String(job.payload?.message || job.payload?.commentBodyOverride || "").trim()
          ? ["공지 본문"]
          : [],
        notificationJobId: job.notificationJobId,
        notificationType: job.notificationType,
        scheduledAt: job.scheduledAt,
        studentName: job.payload?.studentName || job.studentId || "학생"
      }))
      .filter((issue) => issue.missing.length > 0);
    return {
      checkedCount: dueSoonJobs.length,
      issueCount: issues.length,
      issues,
      ok: true,
      slack: null,
      windowMinutes
    };
  }
  if (pathname === "/api/notification-jobs/dispatch-due") {
    let parsedPayload;
    try {
      parsedPayload = parseVersionedWriteRequest("POST", pathname, payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    if (parsedPayload.dispatchToken || parsedPayload.forceDryRun || parsedPayload.now) {
      return {
        error: "안전 fixture에서는 알림 자동 처리 override를 사용할 수 없습니다.",
        ok: false,
        statusCode: 401
      };
    }
    return {
      automaticSolapiReconcile: {
        checkedCount: 0,
        candidateCount: 0,
        source: "safe-provider",
        updatedCount: 0
      },
      dryRun: true,
      ok: true,
      processed: [],
      processedCount: 0,
      source: "supabase"
    };
  }
  if (pathname === "/api/resource-materials") {
    let parsedPayload;
    try {
      parsedPayload = parseVersionedWriteRequest("POST", pathname, payload);
    } catch (error) {
      return {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        statusCode: Number(error.statusCode) || 400
      };
    }
    const material = parsedPayload.material;
    const currentMaterial = state.resourceMaterials.find((item) => item.materialId === material.materialId) ?? null;
    if (currentMaterial && areResourceMaterialsPersistedEqual(material, currentMaterial)) {
      return { material: currentMaterial, ok: true, verified: true };
    }
    if (currentMaterial) {
      if (isSameResourceMaterialDraft(material, currentMaterial)) {
        const savedMaterial = {
          ...material,
          createdAt: currentMaterial.createdAt,
          updatedAt: createNextResourceMaterialUpdatedAt(currentMaterial.updatedAt)
        };
        state.resourceMaterials = state.resourceMaterials.map((item) => (
          item.materialId === material.materialId ? savedMaterial : item
        ));
        return { material: savedMaterial, ok: true, recoveredDraft: true, verified: true };
      }
      return {
        code: "RESOURCE_MATERIAL_CONFLICT",
        currentMaterial,
        error: `자료 ${material.materialId}가 같은 ID의 다른 내용으로 먼저 저장되었습니다.`,
        ok: false,
        statusCode: 409
      };
    }
    const savedMaterial = {
      ...material,
      updatedAt: createNextResourceMaterialUpdatedAt()
    };
    state.resourceMaterials = [savedMaterial, ...state.resourceMaterials];
    return { material: savedMaterial, ok: true, verified: true };
  }
  if (pathname === "/api/makeup-tasks") {
    const makeupTask = payload.makeupTask || {};
    state.makeupTasks = upsertById(state.makeupTasks, makeupTask, ["makeupTaskId", "id"]);
    return { makeupTask, makeupTasks: state.makeupTasks, ok: true };
  }
  if (pathname === "/api/makeup-tasks/bulk") {
    state.makeupTasks = payload.makeupTasks || [];
    return { makeupTasks: state.makeupTasks, ok: true };
  }
  if (pathname === "/api/lesson-journal/makeup-tasks/save") {
    const savedTasks = [];
    for (const requestedTask of payload.makeupTasks || []) {
      const currentTask = state.makeupTasks.find(
        (task) => task.makeupTaskId === requestedTask.makeupTaskId
      ) ?? null;
      if (currentTask && areLessonJournalMakeupTasksEqual(currentTask, requestedTask)) {
        savedTasks.push(currentTask);
        continue;
      }
      if (
        currentTask &&
        (!requestedTask.updatedAt || requestedTask.updatedAt !== currentTask.updatedAt)
      ) {
        return {
          code: "LESSON_JOURNAL_MAKEUP_TASK_CONFLICT",
          error: `등원보충 ${requestedTask.makeupTaskId}가 다른 화면에서 먼저 변경되었습니다.`,
          ok: false,
          statusCode: 409
        };
      }
      const savedTask = {
        ...requestedTask,
        updatedAt: createNextLessonJournalMakeupTaskUpdatedAt(currentTask?.updatedAt)
      };
      state.makeupTasks = upsertById(state.makeupTasks, savedTask, ["makeupTaskId"]);
      savedTasks.push(savedTask);
    }
    return { makeupTasks: savedTasks, ok: true, verified: true };
  }
  if (pathname === "/api/supplement-schedules/save") {
    let plan;
    try {
      plan = createSupplementScheduleSavePlan({
        afterLesson: payload.lessonChange?.after,
        afterTask: payload.taskChange?.after,
        beforeLesson: payload.lessonChange?.before,
        beforeTask: payload.taskChange?.before
      });
    } catch (error) {
      return { code: "SUPPLEMENT_SCHEDULE_INVALID", error: error.message, ok: false, statusCode: 400 };
    }
    const { lessonChange, taskChange } = plan;
    const currentLesson = state.lessons.find(
      (lesson) => lesson.lessonId === lessonChange.after.lessonId
    ) ?? null;
    const currentTask = state.makeupTasks.find(
      (task) => task.makeupTaskId === taskChange.after.makeupTaskId
    ) ?? null;
    const lessonAlreadySaved = currentLesson && areLessonJournalHistoryLessonsEqual(currentLesson, lessonChange.after);
    const taskAlreadySaved = currentTask && areSupplementScheduleTasksEqual(currentTask, taskChange.after);
    const lessonBeforeMatches = lessonChange.before
      ? Boolean(
          currentLesson &&
          currentLesson.updatedAt === lessonChange.before.updatedAt &&
          areLessonJournalHistoryLessonsEqual(currentLesson, lessonChange.before)
        )
      : !currentLesson;
    const taskBeforeMatches = taskChange.before
      ? Boolean(
          currentTask &&
          currentTask.updatedAt === taskChange.before.updatedAt &&
          areSupplementScheduleTasksEqual(currentTask, taskChange.before)
        )
      : !currentTask;
    if ((!lessonAlreadySaved && !lessonBeforeMatches) || (!taskAlreadySaved && !taskBeforeMatches)) {
      return {
        code: "SUPPLEMENT_SCHEDULE_CONFLICT",
        error: "보충 일정 원천이 다른 화면에서 먼저 변경되었습니다.",
        ok: false,
        statusCode: 409
      };
    }
    const lesson = lessonAlreadySaved
      ? currentLesson
      : {
          ...lessonChange.after,
          updatedAt: new Date(Math.max(Date.now(), new Date(currentLesson?.updatedAt || 0).getTime() + 1)).toISOString()
        };
    const makeupTask = taskAlreadySaved
      ? currentTask
      : {
          ...taskChange.after,
          updatedAt: createNextLessonJournalMakeupTaskUpdatedAt(currentTask?.updatedAt)
        };
    state.lessons = upsertById(state.lessons, lesson, ["lessonId"]);
    state.makeupTasks = upsertById(state.makeupTasks, makeupTask, ["makeupTaskId"]);
    return {
      auditId: payload.auditId,
      lesson,
      makeupTask,
      ok: true,
      verified: true
    };
  }
  if (pathname === "/api/exam-prep-rows/bulk") {
    const conflicts = [];
    const examPrepRows = [];
    for (const examPrepRow of payload.examPrepRows || []) {
      const existingRow = state.examPrepRows.find((row) => row.examPrepId === examPrepRow.examPrepId);
      if (
        (existingRow && examPrepRow.updatedAt !== existingRow.updatedAt) ||
        (!existingRow && examPrepRow.updatedAt && payload.allowRestore !== true)
      ) {
        conflicts.push({
          code: "EXAM_PREP_ROW_CONFLICT",
          currentRow: existingRow ?? null,
          examPrepId: examPrepRow.examPrepId,
          message: `시험정보 ${examPrepRow.examPrepId}가 다른 화면에서 먼저 변경되었습니다.`
        });
        continue;
      }
      const savedRow = {
        ...examPrepRow,
        updatedAt: new Date(Math.max(Date.now(), new Date(existingRow?.updatedAt || 0).getTime() + 1)).toISOString()
      };
      state.examPrepRows = upsertById(state.examPrepRows, savedRow, ["examPrepId"]);
      examPrepRows.push(savedRow);
    }
    return {
      conflicts,
      examPrepRows,
      failures: [],
      ok: true,
      verified: examPrepRows.length === (payload.examPrepRows || []).length && conflicts.length === 0
    };
  }
  if (pathname === "/api/student-intake-applicants") {
    const applicant = payload.applicant || {};
    const existingApplicant = state.studentIntakeApplicants
      .find((item) => item.applicantId === applicant.applicantId);
    if (!existingApplicant || payload.expectedUpdatedAt !== existingApplicant.updatedAt) {
      return {
        code: "STUDENT_INTAKE_APPLICANT_CONFLICT",
        currentApplicant: existingApplicant ?? null,
        error: `Tally 후보 ${applicant.applicantId}가 다른 화면에서 먼저 변경되었습니다.`,
        ok: false,
        statusCode: 409
      };
    }
    const savedApplicant = {
      ...applicant,
      updatedAt: new Date(
        Math.max(Date.now(), new Date(existingApplicant.updatedAt).getTime() + 1)
      ).toISOString()
    };
    state.studentIntakeApplicants = upsertById(
      state.studentIntakeApplicants,
      savedApplicant,
      ["applicantId"]
    );
    return { applicant: savedApplicant, ok: true, verified: true };
  }
  if (pathname === "/api/class-rosters/save") {
    const studentChanges = payload.studentChanges || [];
    const lessonChanges = payload.lessonChanges || [];
    for (const change of studentChanges) {
      const currentStudent = state.students.find((item) => item.studentId === change.after?.studentId) ?? null;
      if (currentStudent && haveSameSafeStudentTarget(change.after, currentStudent)) continue;
      if (
        (!change.before && currentStudent) ||
        (change.before && (!currentStudent || currentStudent.updatedAt !== change.before.updatedAt))
      ) {
        return {
          audit: { auditId: payload.auditId, failedStage: "students", rollback: { verified: true } },
          code: "CLASS_ROSTER_SAVE_FAILED",
          error: "학생 반 배정 원천이 다른 화면에서 먼저 변경되었습니다.",
          ok: false,
          statusCode: 409
        };
      }
    }
    for (const change of lessonChanges) {
      const currentLesson = state.lessons.find((item) => item.lessonId === change.lessonId) ?? null;
      if (currentLesson && haveSameSafeRosterStudentIds(currentLesson.studentIds, change.afterStudentIds)) continue;
      if (
        !currentLesson ||
        currentLesson.updatedAt !== change.expectedUpdatedAt ||
        !haveSameSafeRosterStudentIds(currentLesson.studentIds, change.beforeStudentIds)
      ) {
        return {
          audit: { auditId: payload.auditId, failedStage: "lessons", rollback: { verified: true } },
          code: "CLASS_ROSTER_SAVE_FAILED",
          error: "미래 수업 명단이 다른 화면에서 먼저 변경되었습니다.",
          ok: false,
          statusCode: 409
        };
      }
    }
    const savedStudents = studentChanges.map((change) => {
      const existingStudent = state.students.find((item) => item.studentId === change.after.studentId) ?? null;
      const savedStudent = existingStudent && haveSameSafeStudentTarget(change.after, existingStudent)
        ? existingStudent
        : {
            ...change.after,
            updatedAt: new Date(Math.max(Date.now(), new Date(existingStudent?.updatedAt || 0).getTime() + 1)).toISOString()
          };
      state.students = upsertById(state.students, savedStudent, ["studentId"]);
      return savedStudent;
    });
    const savedLessons = lessonChanges.map((change) => {
      const existingLesson = state.lessons.find((item) => item.lessonId === change.lessonId);
      const savedLesson = haveSameSafeRosterStudentIds(existingLesson.studentIds, change.afterStudentIds)
        ? existingLesson
        : {
            ...existingLesson,
            studentIds: change.afterStudentIds,
            updatedAt: new Date(Math.max(Date.now(), new Date(existingLesson.updatedAt).getTime() + 1)).toISOString()
          };
      state.lessons = upsertById(state.lessons, savedLesson, ["lessonId"]);
      return savedLesson;
    });
    return {
      auditId: payload.auditId,
      cleanup: { errors: [], verified: true },
      lessons: savedLessons,
      ok: true,
      students: savedStudents,
      verified: true
    };
  }
  if (pathname === "/api/school-calendar/derived-save") {
    const examPrepChanges = payload.examPrepChanges || [];
    const lessonChanges = payload.lessonChanges || [];
    for (const { after, before } of examPrepChanges) {
      const current = state.examPrepRows.find((row) => row.examPrepId === after?.examPrepId) ?? null;
      if (current && haveSameSafeDerivedExamPrepRow(after, current)) continue;
      if (!current || !before?.updatedAt || current.updatedAt !== before.updatedAt || !haveSameSafeDerivedExamPrepRow(before, current)) {
        return {
          audit: { auditId: payload.auditId, failedStage: "exam-prep-rows", rollback: { verified: true } },
          code: "SCHOOL_CALENDAR_DERIVED_SAVE_FAILED",
          error: "시험관리 원본이 다른 화면에서 먼저 변경되었습니다.",
          ok: false,
          statusCode: 409
        };
      }
    }
    for (const { after, before } of lessonChanges) {
      const lessonId = after?.lessonId || before?.lessonId;
      const current = state.lessons.find((lesson) => lesson.lessonId === lessonId) ?? null;
      if (after && current && haveSameSafeDerivedLesson(after, current)) continue;
      if (!after && !current) continue;
      if (
        (before && (!current || !before.updatedAt || current.updatedAt !== before.updatedAt || !haveSameSafeDerivedLesson(before, current))) ||
        (!before && current)
      ) {
        return {
          audit: { auditId: payload.auditId, failedStage: "pre-exam-lessons", rollback: { verified: true } },
          code: "SCHOOL_CALENDAR_DERIVED_SAVE_FAILED",
          error: "직전수업 원본이 다른 화면에서 먼저 변경되었습니다.",
          ok: false,
          statusCode: 409
        };
      }
    }
    const examPrepRows = examPrepChanges.map(({ after }) => {
      const current = state.examPrepRows.find((row) => row.examPrepId === after.examPrepId);
      const saved = current && haveSameSafeDerivedExamPrepRow(after, current)
        ? current
        : { ...after, updatedAt: new Date(Math.max(Date.now(), new Date(current.updatedAt).getTime() + 1)).toISOString() };
      state.examPrepRows = upsertById(state.examPrepRows, saved, ["examPrepId"]);
      return saved;
    });
    const lessonIdsToDelete = [];
    const lessons = [];
    lessonChanges.forEach(({ after, before }) => {
      const lessonId = after?.lessonId || before?.lessonId;
      const current = state.lessons.find((lesson) => lesson.lessonId === lessonId) ?? null;
      if (!after) {
        state.lessons = state.lessons.filter((lesson) => lesson.lessonId !== lessonId);
        lessonIdsToDelete.push(lessonId);
        return;
      }
      const saved = current && haveSameSafeDerivedLesson(after, current)
        ? current
        : {
            ...after,
            updatedAt: new Date(Math.max(Date.now(), new Date(current?.updatedAt || 0).getTime() + 1)).toISOString()
          };
      state.lessons = upsertById(state.lessons, saved, ["lessonId"]);
      lessons.push(saved);
    });
    return {
      auditId: payload.auditId,
      examPrepRows,
      lessonIdsToDelete,
      lessons,
      ok: true,
      verified: true
    };
  }
  if (pathname === "/api/students") {
    const student = payload.student || {};
    const existingStudent = state.students.find((item) => item.studentId === student.studentId) ?? null;
    const duplicateLoginStudent = state.students.find((item) => (
      item.loginId && item.loginId === student.loginId && item.studentId !== student.studentId
    )) ?? null;
    if (payload.createOnly === true && (existingStudent || duplicateLoginStudent)) {
      return {
        code: "STUDENT_CONFLICT",
        currentStudent: existingStudent,
        error: `학생 ${student.studentId}의 학생 ID 또는 로그인 ID가 이미 저장되어 있습니다.`,
        ok: false,
        statusCode: 409
      };
    }
    if (
      payload.createOnly !== true &&
      Object.prototype.hasOwnProperty.call(payload, "expectedUpdatedAt") &&
      (!existingStudent || payload.expectedUpdatedAt !== existingStudent.updatedAt)
    ) {
      return {
        code: "STUDENT_CONFLICT",
        currentStudent: existingStudent,
        error: `학생 ${student.studentId}가 다른 화면에서 먼저 변경되었습니다.`,
        ok: false,
        statusCode: 409
      };
    }
    const savedStudent = {
      ...student,
      updatedAt: new Date(
        Math.max(Date.now(), new Date(existingStudent?.updatedAt || 0).getTime() + 1)
      ).toISOString()
    };
    state.students = upsertById(state.students, savedStudent, ["studentId"]);
    return { ok: true, student: savedStudent, verified: true };
  }
  if (pathname === "/api/school-events") {
    const schoolEvent = payload.schoolEvent || payload.event || payload || {};
    const existingSchoolEvent = state.schoolEvents
      .find((item) => item.eventId === schoolEvent.eventId) ?? null;
    if (!existingSchoolEvent && schoolEvent.updatedAt) {
      return {
        code: "SCHOOL_EVENT_CONFLICT",
        currentSchoolEvent: null,
        error: `학사일정 ${schoolEvent.eventId}가 다른 화면에서 먼저 삭제되었습니다.`,
        ok: false,
        statusCode: 409
      };
    }
    if (existingSchoolEvent && haveSameSafeSchoolEvent(schoolEvent, existingSchoolEvent)) {
      return { ok: true, schoolEvent: existingSchoolEvent, verified: true };
    }
    if (
      existingSchoolEvent &&
      (!schoolEvent.updatedAt || schoolEvent.updatedAt !== existingSchoolEvent.updatedAt)
    ) {
      return {
        code: "SCHOOL_EVENT_CONFLICT",
        currentSchoolEvent: existingSchoolEvent,
        error: `학사일정 ${schoolEvent.eventId}가 다른 화면에서 먼저 변경되었습니다.`,
        ok: false,
        statusCode: 409
      };
    }
    const savedSchoolEvent = {
      ...schoolEvent,
      updatedAt: new Date(
        Math.max(Date.now(), new Date(existingSchoolEvent?.updatedAt || 0).getTime() + 1)
      ).toISOString()
    };
    state.schoolEvents = upsertById(state.schoolEvents, savedSchoolEvent, ["eventId"]);
    return { ok: true, schoolEvent: savedSchoolEvent, verified: true };
  }
  if (pathname === "/api/lesson-journal/history-action") {
    const { action, auditId, homeworkChanges = [], lessonChange = {} } = payload;
    const lessonId = lessonChange.after?.lessonId || lessonChange.before?.lessonId || "";
    const currentLesson = state.lessons.find((lesson) => lesson.lessonId === lessonId) ?? null;
    const conflict = (error) => ({ code: "LESSON_JOURNAL_HISTORY_CONFLICT", error, ok: false, statusCode: 409 });
    if (action === "undo_copy") {
      const plannedHomeworkIds = new Set(homeworkChanges.map((change) => change.before?.homeworkId));
      const unexpectedHomeworks = state.homeworks.filter((homework) => (
        homework.lessonId === lessonId && !plannedHomeworkIds.has(homework.homeworkId)
      ));
      const records = state.records.filter((record) => record.lessonId === lessonId);
      const jobs = state.notificationJobs.filter((job) => job.lessonId === lessonId);
      if (unexpectedHomeworks.length || records.length || jobs.length) {
        return conflict("복사된 수업에 새 수업기록·숙제·알림 작업이 연결되어 되돌리기를 중단했습니다.");
      }
      for (const { before } of homeworkChanges) {
        const current = state.homeworks.find((homework) => homework.homeworkId === before.homeworkId) ?? null;
        if (current && (current.updatedAt !== before.updatedAt || !areLessonJournalHistoryHomeworksEqual(before, current))) {
          return conflict("숙제 원본이 다른 화면에서 먼저 변경되었습니다.");
        }
      }
      if (currentLesson && (
        currentLesson.updatedAt !== lessonChange.before?.updatedAt ||
        !areLessonJournalHistoryLessonsEqual(lessonChange.before, currentLesson)
      )) return conflict("수업 원본이 다른 화면에서 먼저 변경되었습니다.");
      state.homeworks = state.homeworks.filter((homework) => !plannedHomeworkIds.has(homework.homeworkId));
      state.lessons = state.lessons.filter((lesson) => lesson.lessonId !== lessonId);
      return { action, auditId, homeworks: [], lesson: null, ok: true, verified: true };
    }
    let savedLesson = currentLesson;
    if (lessonChange.after && currentLesson && areLessonJournalHistoryLessonsEqual(lessonChange.after, currentLesson)) {
      savedLesson = currentLesson;
    } else if (action === "copy" && !currentLesson) {
      savedLesson = { ...lessonChange.after, updatedAt: new Date().toISOString() };
      state.lessons = upsertById(state.lessons, savedLesson, ["lessonId"]);
    } else if (
      lessonChange.before &&
      currentLesson?.updatedAt === lessonChange.before.updatedAt &&
      areLessonJournalHistoryLessonsEqual(lessonChange.before, currentLesson)
    ) {
      savedLesson = {
        ...lessonChange.after,
        updatedAt: new Date(Math.max(Date.now(), new Date(currentLesson.updatedAt).getTime() + 1)).toISOString()
      };
      state.lessons = upsertById(state.lessons, savedLesson, ["lessonId"]);
    } else {
      return conflict("수업 원본이 다른 화면에서 먼저 변경되었습니다.");
    }
    const savedHomeworks = [];
    for (const { after } of homeworkChanges) {
      const current = state.homeworks.find((homework) => homework.homeworkId === after.homeworkId) ?? null;
      if (current && areLessonJournalHistoryHomeworksEqual(after, current)) {
        savedHomeworks.push(current);
        continue;
      }
      if (current || action !== "copy") return conflict("숙제 원본이 다른 화면에서 먼저 변경되었습니다.");
      const saved = { ...after, updatedAt: new Date().toISOString() };
      state.homeworks = upsertById(state.homeworks, saved, ["homeworkId"]);
      savedHomeworks.push(saved);
    }
    const relatedHomeworks = action === "undo_cancel"
      ? state.homeworks.filter((homework) => homework.lessonId === lessonId)
      : undefined;
    const relatedRecords = action === "undo_cancel"
      ? state.records.filter((record) => record.lessonId === lessonId)
      : undefined;
    return {
      action,
      auditId,
      homeworks: savedHomeworks,
      lesson: savedLesson,
      ok: true,
      ...(relatedHomeworks ? { relatedHomeworks, relatedRecords } : {}),
      verified: true
    };
  }
  if (pathname === "/api/lesson-journal/rows/save") {
    const { auditId, homeworkChanges = [], recordChanges = [] } = payload;
    const conflict = (error) => ({ code: "LESSON_JOURNAL_ROWS_CONFLICT", error, ok: false, statusCode: 409 });
    const homeworkPreflight = homeworkChanges.map(({ after, before }) => {
      const current = state.homeworks.find((homework) => homework.homeworkId === after.homeworkId) ?? null;
      if (current && areLessonJournalHistoryHomeworksEqual(after, current)) return { after, current, unchanged: true };
      if (
        (!before && current) ||
        (before && (!current || current.updatedAt !== before.updatedAt || !areLessonJournalHistoryHomeworksEqual(before, current)))
      ) return null;
      return { after, current, unchanged: false };
    });
    if (homeworkPreflight.some((entry) => !entry)) return conflict("숙제 원본이 다른 화면에서 먼저 변경되었습니다.");
    const recordPreflight = recordChanges.map(({ after, before }) => {
      const current = state.records.find((record) => (
        record.lessonId === after.lessonId && record.studentId === after.studentId
      )) ?? null;
      if (current && areLessonJournalRecordsEqual(after, current)) return { after, current, unchanged: true };
      if (
        (!before && current) ||
        (before && (!current || current.updatedAt !== before.updatedAt || !areLessonJournalRecordsEqual(before, current)))
      ) return null;
      return { after, current, unchanged: false };
    });
    if (recordPreflight.some((entry) => !entry)) return conflict("수업기록 원본이 다른 화면에서 먼저 변경되었습니다.");
    const homeworks = homeworkPreflight.map(({ after, current, unchanged }) => {
      if (unchanged) return current;
      const saved = {
        ...after,
        updatedAt: new Date(Math.max(Date.now(), new Date(current?.updatedAt || 0).getTime() + 1)).toISOString()
      };
      state.homeworks = upsertById(state.homeworks, saved, ["homeworkId"]);
      return saved;
    });
    const records = recordPreflight.map(({ after, current, unchanged }) => {
      if (unchanged) return current;
      const saved = {
        ...current,
        ...after,
        lessonStudentRecordId: current?.lessonStudentRecordId || after.lessonStudentRecordId,
        updatedAt: new Date(Math.max(Date.now(), new Date(current?.updatedAt || 0).getTime() + 1)).toISOString()
      };
      state.records = upsertById(state.records, saved, ["lessonStudentRecordId"]);
      return saved;
    });
    return { auditId, homeworks, ok: true, records, verified: true };
  }
  if (pathname === "/api/lessons/bulk") {
    const lessons = Array.isArray(payload.lessons) ? payload.lessons : [];
    lessons.forEach((lesson) => {
      state.lessons = upsertById(state.lessons, lesson, ["lessonId", "id"]);
    });
    return { lessons: state.lessons, ok: true, source: "supabase", verified: true };
  }
  if (pathname === "/api/exam-prep-schedule/save") {
    const changes = Array.isArray(payload.changes) ? payload.changes : [];
    const conflicts = changes.filter(({ before, after }) => {
      const current = state.lessons.find((lesson) => lesson.lessonId === after?.lessonId) ?? null;
      return before ? current?.updatedAt !== before.updatedAt : Boolean(current);
    });
    if (conflicts.length) {
      return {
        code: "EXAM_PREP_SCHEDULE_SAVE_FAILED",
        error: "시험대비 일정 원본이 다른 화면에서 먼저 변경되었습니다.",
        ok: false,
        statusCode: 409
      };
    }
    const lessons = changes.map(({ after }) => {
      const saved = { ...after, updatedAt: new Date().toISOString() };
      state.lessons = upsertById(state.lessons, saved, ["lessonId", "id"]);
      return saved;
    });
    return { auditId: payload.auditId, lessons, ok: true, source: "supabase", verified: lessons.length === changes.length };
  }
  if (pathname === "/api/lessons") {
    const lesson = payload.lesson || {};
    state.lessons = upsertById(state.lessons, lesson, ["lessonId", "id"]);
    return { lesson, lessons: state.lessons, ok: true };
  }
  if (pathname === "/api/lesson-records") {
    const record = payload.record || {};
    state.records = upsertById(state.records, record, ["lessonStudentRecordId", "recordId", "id"]);
    return { ok: true, record, records: state.records };
  }
  return { ...payload, ok: true, safeFixture: true };
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${host}:${port}`);
  if (request.method === "OPTIONS") return sendJson(response, 204, {});
  if (request.method === "GET" && requestUrl.pathname === "/health") {
    return sendJson(response, 200, { mode: "safe-fixture", ok: true, service: "academy-os-safe-local-api" });
  }
  if (request.method === "POST" && requestUrl.pathname === "/api/auth/login") {
    const payload = await readJson(request);
    if (!payload.loginId || !payload.password) return sendJson(response, 400, { ok: false, error: "미리보기 아이디와 비밀번호를 입력하세요." });
    return sendJson(response, 200, {
      account: {
        actorId: "safe-preview-teacher",
        loginId: String(payload.loginId),
        name: "안전 미리보기 교사",
        role: "teacher",
        sessionToken: "safe-fixture-session",
        teacherId: "safe-preview-teacher"
      },
      authenticated: true,
      ok: true,
      safeFixture: true
    });
  }
  if (request.method === "GET" && requestUrl.pathname === "/api/app-state") {
    return sendJson(response, 200, {
      ok: true,
      safeFixture: true,
      source: "supabase",
      stateRows: Object.entries(state.appStateUpdatedAt).map(([key, updatedAt]) => ({ key, updatedAt })),
      states: state.appStates
    });
  }
  if (request.method === "POST" && requestUrl.pathname === "/api/report-snapshots") {
    if (request.headers.authorization !== "Bearer safe-fixture-session") {
      return sendJson(response, 401, { ok: false, error: "안전 fixture 보고서 저장 인증이 필요합니다." });
    }
    try {
      const payload = parseVersionedWriteRequest(
        request.method,
        requestUrl.pathname,
        await readJson(request)
      );
      const result = await saveReportSnapshotWithVerification({
        operations: {
          read: async () => ({
            source: "supabase",
            stateRows: Object.entries(state.appStateUpdatedAt).map(([key, updatedAt]) => ({ key, updatedAt })),
            states: state.appStates
          }),
          write: async (states, { expectedUpdatedAt } = {}) => {
            const currentUpdatedAt = state.appStateUpdatedAt.reportSnapshots ?? null;
            if (expectedUpdatedAt?.reportSnapshots !== currentUpdatedAt) {
              const conflict = new Error("다른 안전 화면에서 보고서가 먼저 저장되었습니다.");
              conflict.code = "APP_STATE_CONFLICT";
              conflict.statusCode = 409;
              throw conflict;
            }
            state.appStates = { ...state.appStates, ...states };
            state.appStateUpdatedAt = {
              ...state.appStateUpdatedAt,
              reportSnapshots: new Date().toISOString()
            };
          }
        },
        snapshot: payload.snapshot
      });
      return sendJson(response, 200, { ...result, ok: true, safeFixture: true });
    } catch (error) {
      return sendJson(response, Number(error.statusCode) || 500, {
        code: error.code,
        error: error.message,
        ...(error.field ? { field: error.field } : {}),
        ok: false,
        safeFixture: true
      });
    }
  }
  if (request.method === "GET" && requestUrl.pathname === "/api/integrations/status") {
    return sendJson(response, 200, { ok: true, safeFixture: true });
  }
  if (request.method === "GET" && requestUrl.pathname === "/api/exam-analysis-runs") {
    const analysisRunId = requestUrl.searchParams.get("id") || requestUrl.searchParams.get("analysisRunId") || "";
    if (!analysisRunId) {
      return sendJson(response, 200, {
        analysisRuns: state.examAnalysisRuns,
        ok: true,
        safeFixture: true,
        source: "supabase"
      });
    }
    const analysisRun = state.examAnalysisRuns.find((run) => run.analysisRunId === analysisRunId) ?? null;
    return sendJson(response, 200, {
      aiJobs: [],
      analysisRun,
      events: state.examAnalysisEvents.filter((event) => event.analysisRunId === analysisRunId),
      ok: true,
      questions: state.examAnalysisQuestions.filter((question) => question.analysisRunId === analysisRunId),
      safeFixture: true,
      source: "supabase",
      sources: []
    });
  }
  if (request.method === "POST" && requestUrl.pathname === "/api/resource-material-files") {
    let payload;
    try {
      payload = parseVersionedWriteRequest(request.method, requestUrl.pathname, await readJson(request));
    } catch (error) {
      return sendJson(response, Number(error.statusCode) || 400, {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        safeFixture: true
      });
    }
    const match = String(payload.file?.dataUrl ?? "").match(/^data:([^;,]+)?(;base64)?,(.*)$/);
    if (!match) return sendJson(response, 400, { ok: false, error: "안전 fixture 파일 형식이 올바르지 않습니다." });
    const buffer = Buffer.from(match[3], match[2] ? "base64" : "utf8");
    const mimeType = match[1] || "application/octet-stream";
    try {
      validateResourceMaterialFile({ fileName: payload.file?.fileName, mimeType, size: buffer.length });
    } catch (error) {
      return sendJson(response, 400, { ok: false, error: error.message });
    }
    const material = payload.material || {};
    const storagePath = createResourceMaterialStoragePath({
      createdAt: material.createdAt,
      digest: crypto.createHash("sha256").update(buffer).digest("hex"),
      fileName: payload.file?.fileName,
      materialId: material.materialId
    });
    const fileReference = createResourceMaterialStorageReference({ storagePath });
    resourceMaterialFiles.set(storagePath, { buffer, mimeType });
    const { statusCode = 200, ...result } = handleMutation("/api/resource-materials", {
      material: {
        ...material,
        fileName: payload.file?.fileName,
        fileUrl: fileReference,
        materialType: "file"
      }
    });
    if (statusCode !== 200) resourceMaterialFiles.delete(storagePath);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return sendJson(response, statusCode, {
      ...result,
      fileReference,
      ok: statusCode === 200 && result.ok !== false,
      safeFixture: true,
      source: "supabase",
      storagePath
    });
  }
  if (request.method === "DELETE" && requestUrl.pathname === "/api/resource-material-files") {
    let payload;
    try {
      payload = parseVersionedWriteRequest(request.method, requestUrl.pathname, await readJson(request));
    } catch (error) {
      return sendJson(response, Number(error.statusCode) || 400, {
        code: error.code,
        error: error.message,
        field: error.field,
        ok: false,
        safeFixture: true
      });
    }
    const material = payload.material || {};
    const currentMaterial = state.resourceMaterials.find((item) => item.materialId === material.materialId) ?? null;
    if (currentMaterial && currentMaterial.updatedAt !== material.updatedAt) {
      return sendJson(response, 409, {
        code: "RESOURCE_MATERIAL_CONFLICT",
        currentMaterial,
        error: `자료 ${material.materialId}가 다른 화면에서 먼저 변경되었습니다.`,
        ok: false,
        safeFixture: true,
        source: "supabase"
      });
    }
    const reference = parseResourceMaterialStorageReference(currentMaterial?.fileUrl || material.fileUrl);
    if (reference) resourceMaterialFiles.delete(reference.storagePath);
    state.resourceMaterials = state.resourceMaterials.filter((item) => item.materialId !== material.materialId);
    await new Promise((resolve) => setTimeout(resolve, 800));
    return sendJson(response, 200, {
      materialId: material.materialId,
      ok: true,
      safeFixture: true,
      source: "supabase",
      verified: true
    });
  }
  if (request.method === "GET" && requestUrl.pathname === "/api/resource-material-files/open") {
    const materialId = requestUrl.searchParams.get("id") || "";
    const material = state.resourceMaterials.find((item) => item.materialId === materialId) ?? null;
    if (!material) return sendJson(response, 404, { ok: false, error: "안전 fixture 자료를 찾지 못했습니다." });
    const reference = parseResourceMaterialStorageReference(material.fileUrl);
    if (!reference) return sendJson(response, 200, { ok: true, safeFixture: true, signedUrl: material.fileUrl });
    const storedFile = resourceMaterialFiles.get(reference.storagePath);
    if (!storedFile) return sendJson(response, 404, { ok: false, error: "안전 fixture 파일을 찾지 못했습니다." });
    return sendJson(response, 200, {
      ok: true,
      safeFixture: true,
      signedUrl: `http://${host}:${port}/api/safe-fixture/resource-material-file?path=${encodeURIComponent(reference.storagePath)}`
    });
  }
  if (request.method === "GET" && requestUrl.pathname === "/api/safe-fixture/resource-material-file") {
    const storedFile = resourceMaterialFiles.get(requestUrl.searchParams.get("path") || "");
    if (!storedFile) return sendJson(response, 404, { ok: false, error: "안전 fixture 파일을 찾지 못했습니다." });
    response.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": storedFile.mimeType
    });
    response.end(storedFile.buffer);
    return;
  }
  if (request.method === "GET" && listRoutes.has(requestUrl.pathname)) {
    const [stateKey, responseKey] = listRoutes.get(requestUrl.pathname);
    return sendJson(response, 200, { ok: true, safeFixture: true, source: "supabase", [responseKey]: state[stateKey] });
  }
  if (["POST", "PATCH"].includes(request.method || "")) {
    const payload = await readJson(request);
    if (requestUrl.pathname === "/api/safe-fixture/reset") {
      state = createInitialState();
      resourceMaterialFiles = new Map();
      return sendJson(response, 200, { ok: true, safeFixture: true });
    }
    if (["/api/app-state", "/api/lesson-records/bulk", "/api/lesson-journal/makeup-tasks/save", "/api/lesson-journal/rows/save", "/api/resource-materials", "/api/supplement-schedules/save", "/api/school-events", "/api/school-calendar/derived-save"].includes(requestUrl.pathname)) {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
    const { statusCode = 200, ...result } = handleMutation(requestUrl.pathname, payload);
    return sendJson(response, statusCode, {
      ...result,
      safeFixture: true,
      source: result.source ?? "supabase"
    });
  }
  if (request.method === "DELETE" && requestUrl.pathname === "/api/school-events") {
    const eventId = requestUrl.searchParams.get("id") || "";
    const expectedUpdatedAt = requestUrl.searchParams.get("expectedUpdatedAt") || "";
    const currentSchoolEvent = state.schoolEvents.find((event) => event.eventId === eventId) ?? null;
    if (!currentSchoolEvent || currentSchoolEvent.updatedAt !== expectedUpdatedAt) {
      return sendJson(response, 409, {
        code: "SCHOOL_EVENT_CONFLICT",
        currentSchoolEvent,
        error: `학사일정 ${eventId}가 다른 화면에서 먼저 변경되었거나 삭제되었습니다.`,
        ok: false,
        safeFixture: true,
        source: "supabase"
      });
    }
    state.schoolEvents = state.schoolEvents.filter((event) => event.eventId !== eventId);
    return sendJson(response, 200, {
      ok: true,
      safeFixture: true,
      schoolEventId: eventId,
      source: "supabase",
      verified: true
    });
  }
  if (request.method === "DELETE" && requestUrl.pathname === "/api/resource-materials") {
    const materialId = requestUrl.searchParams.get("id") || "";
    const expectedUpdatedAt = requestUrl.searchParams.get("expectedUpdatedAt") || "";
    const currentMaterial = state.resourceMaterials.find((material) => material.materialId === materialId) ?? null;
    if (!currentMaterial) {
      return sendJson(response, 200, {
        materialId,
        ok: true,
        safeFixture: true,
        source: "supabase",
        verified: true
      });
    }
    if (currentMaterial.updatedAt !== expectedUpdatedAt) {
      return sendJson(response, 409, {
        code: "RESOURCE_MATERIAL_CONFLICT",
        currentMaterial,
        error: `자료 ${materialId}가 다른 화면에서 먼저 변경되었습니다.`,
        ok: false,
        safeFixture: true,
        source: "supabase"
      });
    }
    state.resourceMaterials = state.resourceMaterials.filter((material) => material.materialId !== materialId);
    return sendJson(response, 200, {
      materialId,
      ok: true,
      safeFixture: true,
      source: "supabase",
      verified: true
    });
  }
  if (request.method === "DELETE") return sendJson(response, 200, { ok: true, safeFixture: true });
  return sendJson(response, 404, { error: "안전 미리보기 API에 준비되지 않은 경로입니다.", ok: false, path: requestUrl.pathname });
});

server.listen(port, host, () => {
  console.log(`safe fixture api listening on http://${host}:${port}`);
  console.log("운영 Supabase·Solapi·Storage에는 연결하지 않습니다.");
});

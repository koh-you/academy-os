import http from "node:http";

const host = "127.0.0.1";
const port = Number(process.env.ACADEMY_SAFE_API_PORT || 8787);

const initialState = {
  academyReminders: [],
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
  homeworks: [],
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
  snapshot.lessons = snapshot.lessons.map((lesson) => ({
    ...lesson,
    updatedAt: lesson.updatedAt || "2026-08-03T00:00:00.000Z"
  }));
  return snapshot;
}

let state = createInitialState();

const listRoutes = new Map([
  ["/api/academy-reminders", ["academyReminders", "academyReminders"]],
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

function handleMutation(pathname, payload) {
  if (pathname === "/api/app-state") {
    state.appStates = { ...state.appStates, ...(payload.states || {}) };
    return { ok: true, states: state.appStates };
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
    return sendJson(response, 200, { ok: true, safeFixture: true, source: "supabase", states: state.appStates });
  }
  if (request.method === "GET" && requestUrl.pathname === "/api/integrations/status") {
    return sendJson(response, 200, { ok: true, safeFixture: true });
  }
  if (request.method === "GET" && listRoutes.has(requestUrl.pathname)) {
    const [stateKey, responseKey] = listRoutes.get(requestUrl.pathname);
    return sendJson(response, 200, { ok: true, safeFixture: true, source: "supabase", [responseKey]: state[stateKey] });
  }
  if (["POST", "PATCH"].includes(request.method || "")) {
    const payload = await readJson(request);
    if (requestUrl.pathname === "/api/safe-fixture/reset") {
      state = createInitialState();
      return sendJson(response, 200, { ok: true, safeFixture: true });
    }
    if (["/api/app-state", "/api/lesson-records/bulk"].includes(requestUrl.pathname)) {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }
    const { statusCode = 200, ...result } = handleMutation(requestUrl.pathname, payload);
    return sendJson(response, statusCode, {
      ...result,
      safeFixture: true,
      source: "supabase"
    });
  }
  if (request.method === "DELETE") return sendJson(response, 200, { ok: true, safeFixture: true });
  return sendJson(response, 404, { error: "안전 미리보기 API에 준비되지 않은 경로입니다.", ok: false, path: requestUrl.pathname });
});

server.listen(port, host, () => {
  console.log(`safe fixture api listening on http://${host}:${port}`);
  console.log("운영 Supabase·Solapi·Storage에는 연결하지 않습니다.");
});

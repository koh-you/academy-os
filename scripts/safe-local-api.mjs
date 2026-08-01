import http from "node:http";

const host = "127.0.0.1";
const port = 8787;

const initialState = {
  academyReminders: [],
  appStates: {},
  classTemplates: [
    {
      className: "월 경계 연동반",
      classTemplateId: "safe-cross-month-class",
      endTime: "13:00",
      startTime: "10:00",
      studentIds: ["safe-active-student"]
    }
  ],
  examPrepRows: [],
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
    }
  ],
  resourceMaterials: [],
  schoolEvents: [],
  specialLectureApplications: [],
  specialLectureEnrollments: [],
  studentIntakeApplicants: [],
  students: [
    {
      grade: "중3",
      name: "미리보기 퇴원생",
      schoolName: "안전중",
      status: "paused",
      studentId: "safe-withdrawn-student",
      withdrawnAt: "2026-07-31T00:00:00.000Z"
    },
    {
      grade: "중3",
      name: "월경계 학생",
      schoolName: "안전중",
      status: "active",
      studentId: "safe-active-student"
    }
  ],
  testAttempts: [],
  testSessions: []
};

function createInitialState() {
  return JSON.parse(JSON.stringify(initialState));
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
    return sendJson(response, 200, {
      ...handleMutation(requestUrl.pathname, payload),
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

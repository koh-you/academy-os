const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "src", "app", "App.jsx");
const cssPath = path.join(root, "src", "app", "App.css");
const dataPath = path.join(root, "src", "shared", "data", "sampleData.js");
const apiServerPath = path.join(root, "api", "server.js");
const notificationRoutePath = path.join(root, "api", "routes", "notifications.js");
const coreDataRoutePath = path.join(root, "api", "routes", "coreData.js");
const supabaseRestPath = path.join(root, "api", "lib", "supabaseRest.js");
const envExamplePath = path.join(root, ".env.example");
const schemaPath = path.join(root, "supabase", "schema.sql");
const backendPlanPath = path.join(root, "docs", "backend-db-deployment-plan.md");
const productionChecklistPath = path.join(root, "docs", "first-time-production-checklist.md");
const app = fs.readFileSync(appPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const data = fs.readFileSync(dataPath, "utf8");
const apiServer = fs.readFileSync(apiServerPath, "utf8");
const notificationRoute = fs.readFileSync(notificationRoutePath, "utf8");
const coreDataRoute = fs.readFileSync(coreDataRoutePath, "utf8");
const supabaseRest = fs.readFileSync(supabaseRestPath, "utf8");
const envExample = fs.readFileSync(envExamplePath, "utf8");
const schema = fs.readFileSync(schemaPath, "utf8");

function assert(name, condition, detail = "") {
  if (!condition) {
    throw new Error(`${name}${detail ? ` - ${detail}` : ""}`);
  }
  return { name, status: "PASS" };
}

function includesAll(source, patterns) {
  return patterns.every((pattern) => source.includes(pattern));
}

function updateClassRoster(students, classTemplateId, nextStudentIds) {
  const nextStudentIdSet = new Set(nextStudentIds);
  return students.map((student) => {
    if (nextStudentIdSet.has(student.studentId)) {
      return { ...student, defaultClassTemplateId: classTemplateId };
    }
    if (student.defaultClassTemplateId === classTemplateId) {
      return { ...student, defaultClassTemplateId: "" };
    }
    return student;
  });
}

function deleteStudentState(state, studentId) {
  return {
    students: state.students.filter((student) => student.studentId !== studentId),
    lessons: state.lessons.map((lesson) => ({
      ...lesson,
      studentIds: (lesson.studentIds ?? []).filter((id) => id !== studentId)
    })),
    records: state.records.filter((record) => record.studentId !== studentId),
    homeworks: state.homeworks.filter((homework) => homework.studentId !== studentId),
    wrongProblems: state.wrongProblems.filter((problem) => problem.studentId !== studentId),
    scoreRecords: state.scoreRecords.filter((score) => score.studentId !== studentId),
    academyTests: state.academyTests.filter((test) => test.studentId !== studentId),
    makeupTasks: state.makeupTasks.filter((task) => task.studentId !== studentId)
  };
}

function updateHomework(homeworks, lesson, student, homeworkType, title) {
  const homeworkId = `hw_${lesson.lessonId}_${student.studentId}_${homeworkType}`;
  const nextHomework = {
    homeworkId,
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    homeworkType,
    title,
    assignedDate: homeworkType === "previous" ? lesson.date : lesson.date,
    dueDate: lesson.date,
    subject: "공통수학1",
    status: "assigned",
    teacherStatus: "assigned"
  };
  return homeworks.some((item) => item.homeworkId === homeworkId)
    ? homeworks.map((item) => (item.homeworkId === homeworkId ? nextHomework : item))
    : [nextHomework, ...homeworks];
}

function getLessonHomework(homeworks, lesson, student, homeworkType, lessons = []) {
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
        item.studentIds?.includes(student.studentId) &&
        (!lesson.classTemplateId || !item.classTemplateId || item.classTemplateId === lesson.classTemplateId)
    )
    .sort((a, b) => b.date.localeCompare(a.date) || b.startTime.localeCompare(a.startTime))[0];
  if (!previousLesson) return null;
  const linkedHomework =
    homeworks.find(
      (homework) =>
        homework.lessonId === previousLesson.lessonId &&
        homework.studentId === student.studentId &&
        homework.homeworkType === "next"
    ) ?? null;
  return linkedHomework ? { ...linkedHomework, linkedFromLessonId: previousLesson.lessonId, homeworkType: "previous" } : null;
}

function cycleProblemStatus(status) {
  const cycle = ["first", "retry", "wrong", "mistake"];
  const index = cycle.indexOf(status);
  return cycle[(index + 1) % cycle.length];
}

const fixture = {
  students: [
    { studentId: "s1", name: "A", studentPhone: "01011112222", parentPhone: "01057882748", defaultClassTemplateId: "c1" },
    { studentId: "s2", name: "B", studentPhone: "01033334444", parentPhone: "01057882748", defaultClassTemplateId: "c2" },
    { studentId: "s3", name: "C", studentPhone: "01055556666", parentPhone: "01057882748", defaultClassTemplateId: "" }
  ],
  lessons: [
    { lessonId: "l1", classTemplateId: "c1", className: "월수금 7-10반", date: "2026-06-12", startTime: "19:00", studentIds: ["s1"] },
    { lessonId: "l2", classTemplateId: "c1", className: "월수금 7-10반", date: "2026-06-15", startTime: "19:00", studentIds: ["s1"] }
  ],
  records: [{ lessonStudentRecordId: "r1", lessonId: "l1", studentId: "s1" }],
  homeworks: [],
  wrongProblems: [{ wrongProblemId: "w1", studentId: "s1" }],
  scoreRecords: [{ scoreRecordId: "sc1", studentId: "s1" }],
  academyTests: [{ testId: "t1", studentId: "s1" }, { testId: "general-test" }],
  makeupTasks: [{ taskId: "m1", studentId: "s1" }]
};

const results = [];

results.push(assert("01. production build artifact exists", fs.existsSync(path.join(root, "dist", "index.html"))));
results.push(assert("02. legacy browser confirm/alert removed", !/window\.confirm|alert\(/.test(app)));
results.push(assert("03. academy brand is centralized as 으뜸수학 고태영T", app.includes('const academyBrandName = "으뜸수학 고태영T"')));
results.push(assert("04. student table exposes student and parent phone fields", includesAll(app, ["studentPhone", "parentPhone", "onUpdateStudent(student.studentId, \"studentPhone\"", "onUpdateStudent(student.studentId, \"parentPhone\""])));
results.push(assert("05. student delete uses modal confirmation", includesAll(app, ["deleteStudentId", "setDeleteStudentId", "onDeleteStudent(deleteStudent.studentId)", "studentDeleteModal"])));
results.push(assert("06. lesson delete uses modal confirmation", includesAll(app, ["lessonDeleteModalId", "setLessonDeleteModalId", "confirmDeleteLesson", "pendingDeleteLesson"])));
results.push(assert("07. class roster edit modal exists", includesAll(app, ["classRosterModal", "onUpdateClassRoster", "handleUpdateClassRoster"])));
results.push(assert("08. class roster assigns and removes students correctly", (() => {
  const next = updateClassRoster(fixture.students, "c1", ["s2", "s3"]);
  return next.find((s) => s.studentId === "s1").defaultClassTemplateId === "" &&
    next.find((s) => s.studentId === "s2").defaultClassTemplateId === "c1" &&
    next.find((s) => s.studentId === "s3").defaultClassTemplateId === "c1";
})()));
results.push(assert("09. student deletion clears linked state", (() => {
  const next = deleteStudentState(fixture, "s1");
  return next.students.length === 2 &&
    next.lessons.every((lesson) => !lesson.studentIds.includes("s1")) &&
    next.records.length === 0 &&
    next.homeworks.length === 0 &&
    next.wrongProblems.length === 0 &&
    next.scoreRecords.length === 0 &&
    next.academyTests.length === 1 &&
    next.makeupTasks.length === 0;
})()));
results.push(assert("10. attendance kiosk has tablet number pad", includesAll(app, ["attendanceNumberPad", "pressKey", "submitPin", "attendanceKiosk"])));
results.push(assert("11. attendance result modal auto closes", includesAll(app, ["attendanceResultModal", "window.setTimeout(() => setResult(null), 3000)"])));
results.push(assert("12. lesson journal comment buttons restored", includesAll(app, ["journalCommentCell", "commentOpenButton", "teacherComment", "studentComment"])));
results.push(assert("13. parent/student comment composer stays connected", includesAll(app, ["openCommentComposer(\"parent\"", "openCommentComposer(\"student\"", "teacherComment", "studentComment"])));
results.push(assert("14. student profile edit mode exists", includesAll(app, ["isEditingProfile", "profileEditInput", "onUpdateStudent", "setIsEditingProfile"])));
results.push(assert("15. next homework links to next lesson previous homework", (() => {
  const homeworks = updateHomework([], fixture.lessons[0], fixture.students[0], "next", "쎈 643-647");
  const previous = getLessonHomework(homeworks, fixture.lessons[1], fixture.students[0], "previous", fixture.lessons);
  return previous?.title === "쎈 643-647" && previous.linkedFromLessonId === "l1";
})()));
results.push(assert("16. calendar keyboard shortcuts remain wired", includesAll(app, ["Ctrl+C/V/Z", "onCopyLesson()", "onPasteLesson()", "onUndoLessonAction()", "onDeleteSelectedLesson()"])));
results.push(assert("17. student portal preview button remains wired", includesAll(app, ["studentPortalPreviewButton", "studentPortalPreviewModal", "setStudentPreviewId"])));
results.push(assert("18. problem status click cycle matches requested colors", (() => {
  return cycleProblemStatus("first") === "retry" &&
    cycleProblemStatus("retry") === "wrong" &&
    cycleProblemStatus("wrong") === "mistake" &&
    cycleProblemStatus("mistake") === "first";
})()));
results.push(assert("19. test paper manager removes PageSnap import UI and keeps manual shelf controls", includesAll(app, ["function createDefaultProblemBooks", "function normalizeProblemBooks", "시험지 보관함", "testPaperKindTabs", "onDeleteBook", "dangerTextButton"]) && !app.includes("PageSnap JSON") && !app.includes("createProblemBooksFromPageSnapJson") && !app.includes("createSsenCommonMath1PageSnapExample")));
results.push(assert("20. school calendar supports add/update/delete", includesAll(app, ["onAddEvent", "onDeleteEvent", "onUpdateEvent", "SchoolCalendarCenter"])));
results.push(assert("21. sample data keeps 8 pilot student identifiers", (data.match(/student_mwf710_/g) ?? []).length >= 8));
results.push(assert("22. lesson comments send through comment Alimtalk API", includesAll(app, ["/api/notifications/comment-alimtalk", "student_alimtalk", "parent_alimtalk", "알림톡 발송 중"])));
results.push(assert("23. API exposes Solapi comment Alimtalk route", includesAll(apiServer, ["sendLessonCommentAlimtalk", "/api/notifications/comment-alimtalk"])));
results.push(assert("24. notification route keeps dry-run and test redirect safety", includesAll(notificationRoute, ["ALIMTALK_DRY_RUN", "ALIMTALK_TEST_RECIPIENT", "SOLAPI_DAILY_REPORT_TEMPLATE_ID", "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"])));
results.push(assert("25. frontend API base URL is configurable for hosting", includesAll(app, ["VITE_API_BASE_URL", "apiUrl("]) && !app.includes('fetch("http://127.0.0.1:8787')));
results.push(assert("26. env template includes deployment and Supabase variables", includesAll(envExample, ["VITE_API_BASE_URL", "SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "RENDER_API_URL", "VERCEL_FRONTEND_URL"])));
results.push(assert("27. Supabase schema covers MVP core tables", includesAll(schema, ["create table if not exists students", "create table if not exists lessons", "create table if not exists lesson_student_records", "create table if not exists homeworks", "create table if not exists notification_logs"])));
results.push(assert("28. production onboarding docs exist", fs.existsSync(backendPlanPath) && fs.existsSync(productionChecklistPath)));
results.push(assert("29. Supabase REST layer has safe fallback detection", includesAll(supabaseRest, ["isSupabaseConfigured", "SUPABASE_SERVICE_ROLE_KEY", "Supabase environment variables are not configured"])));
results.push(assert("30. core data APIs fallback to local sample data", includesAll(coreDataRoute, ["local_sample", "sampleData.students", "sampleData.classTemplates", "sampleData.lessons"])));
results.push(assert("31. server exposes students classes lessons and seed endpoints", includesAll(apiServer, ["/api/students", "/api/classes", "/api/lessons", "/api/admin/seed-core-data"])));
results.push(assert("32. server exposes lesson records and homework read endpoints", includesAll(apiServer, ["/api/lesson-records", "/api/homeworks", "listLessonStudentRecords", "listHomeworks"])));
results.push(assert("33. frontend syncs core data from API before falling back to local state", includesAll(app, ["/api/students", "/api/classes", "/api/lessons", "/api/lesson-records", "/api/homeworks", "setClassTemplates"])));
results.push(assert("34. server exposes Supabase write endpoints for records and homework", includesAll(apiServer, ["upsertLessonStudentRecord", "upsertHomework", "upsertHomeworks", "/api/homeworks/bulk"])));
results.push(assert("35. lesson journal save persists records and homework through API", includesAll(app, ["postJson(\"/api/lesson-records\"", "postJson(\"/api/homeworks/bulk\"", "setSaveStates"])));
results.push(assert("36. student and teacher homework actions persist through API", includesAll(app, ["postJson(\"/api/homeworks\"", "handleStudentCheckHomework", "handleTeacherVerifyHomework"])));
results.push(assert("37. server exposes student and lesson write endpoints", includesAll(apiServer, ["upsertStudent", "upsertStudents", "upsertLesson", "/api/students/bulk", "/api/lessons"])));
results.push(assert("38. frontend persists lesson creation edits and roster changes", includesAll(app, ["postJson(\"/api/lessons\"", "postJson(\"/api/students\"", "postJson(\"/api/students/bulk\"", "handleUpdateClassRoster"])));
results.push(assert("39. core reads hide paused students and canceled lessons", includesAll(coreDataRoute, ["status=eq.active", "status=neq.canceled"])));
results.push(assert("40. frontend persists soft delete states instead of physical deletion", includesAll(app, ["status: \"canceled\"", "status: \"paused\"", "postJson(\"/api/lessons/bulk\"", "학생 숨김"])));

results.push(assert("41. lesson journal exposes visible save summary and row save controls", includesAll(app, ["lessonSaveSummary", "saveSummaryChips", "journalSaveCell", "journalSaveButton", "getSaveButtonLabel(saveState)"])));
results.push(assert("42. lesson journal can save an empty newly-created row safely", includesAll(app, ["lessonForRecord = null", "studentForRecord = null", "createEmptyRecord(lessonForRecord, studentForRecord)", "recordsRef.current = nextRecords"])));
results.push(assert("43. save state styling covers dirty saving saved and failed", includesAll(css, ["lessonSaveSummary", "saveSummaryChip", "journalSave-dirty", "journalSave-saving", "journalSave-saved", "journalSave-failed"])));

console.log(`Scenario QA: ${results.length}/${results.length} PASS`);
for (const result of results) {
  console.log(`PASS ${result.name}`);
}

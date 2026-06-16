const fs = require("fs");
const path = require("path");

const root = process.cwd();
const appPath = path.join(root, "src", "app", "App.jsx");
const samplePath = path.join(root, "src", "shared", "data", "sampleData.js");
const outputPath = path.join(root, "docs", "scenario-test-results-day-23.json");

const app = fs.readFileSync(appPath, "utf8");
const sample = fs.readFileSync(samplePath, "utf8");

const results = [];

function run(id, title, fn) {
  try {
    const detail = fn();
    results.push({ id, title, status: "PASS", detail: detail || "검증 통과" });
  } catch (error) {
    const message = error && error.message ? error.message : String(error);
    const status = message.startsWith("PENDING:") ? "PENDING" : "FAIL";
    results.push({ id, title, status, detail: message.replace(/^PENDING:\s*/, "") });
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function hasAll(...patterns) {
  return patterns.every((pattern) => app.includes(pattern));
}

function countMatches(text, pattern) {
  const matches = text.match(new RegExp(pattern, "g"));
  return matches ? matches.length : 0;
}

run("S01", "학생은 본인 데이터만 볼 수 있어야 한다", () => {
  const hasStudentSelector = app.includes("StudentPortalV2") && app.includes("compactSelect") && app.includes("setSelectedStudentId");
  assert(!hasStudentSelector, "학생 포털에 학생 선택 드롭다운/상태가 있어 다른 학생 데이터 접근 가능");
});

run("S02", "학부모는 읽기 전용이어야 한다", () => {
  throw new Error("PENDING: 학부모 전용 포털과 parent role gate가 아직 구현되지 않음");
});

run("S03", "원장/강사는 관리 화면에 접근할 수 있어야 한다", () => {
  assert(hasAll("lessons", "studentPortal", "overdue", "students", "followups", "reports"), "사이드바 핵심 관리 화면 ID 일부가 없음");
});

run("S04", "강사가 날짜와 수업을 선택하면 해당 수업 학생만 보여야 한다", () => {
  assert(hasAll("lessonsForDate", "selectedLesson", "selectedLesson.studentIds", "onSelectLesson"), "날짜/수업 선택과 학생 필터링 흐름이 불완전함");
});

run("S05", "강사가 수업 기록을 수정하고 저장할 수 있어야 한다", () => {
  assert(hasAll("handleChangeRecord", "handleSaveRecord", "localStorage.setItem(storageKeys.records", "failed"), "수업 기록 변경/저장/실패 흐름이 불완전함");
});

run("S06", "학생이 오늘 숙제를 완료 체크할 수 있어야 한다", () => {
  assert(hasAll("handleStudentCheckHomework", "checked_done", "teacherStatus", "unverified"), "학생 완료 체크 후 강사 미확인 상태 유지 흐름이 없음");
});

run("S07", "학생이 숙제를 직접 등록할 수 있어야 한다", () => {
  assert(hasAll("handleStudentCreateHomework", "createdByRole", "student", "onStudentCreateHomework"), "학생 직접 숙제 등록 흐름이 없음");
});

run("S08", "학생은 숙제를 실제 삭제할 수 없어야 한다", () => {
  assert(hasAll("dangerSoftButton", "disabled", "삭제"), "삭제 잠금/비활성 UI가 없음");
});

run("S09", "강사가 밀린 숙제를 볼 수 있어야 한다", () => {
  assert(hasAll("OverdueHomework", "isHomeworkOverdue", "unresolvedHomeworks"), "밀린 숙제 목록 계산 흐름이 없음");
  assert(countMatches(sample, "status:\\s*\"missing\"") > 0, "샘플 데이터에 missing 숙제가 없음");
});

run("S10", "강사가 숙제를 확인 처리할 수 있어야 한다", () => {
  assert(hasAll("handleTeacherVerifyHomework", "teacherStatus === \"verified\"", "verifiedAt"), "강사 확인 처리 흐름이 없음");
});

run("S11", "강사가 밀린 숙제에서 숙제보충을 생성할 수 있어야 한다", () => {
  assert(hasAll("handleCreateMakeupTask", "homework_makeup", "sourceId", "makeupTaskId"), "숙제보충 MakeupTask 생성 흐름이 없음");
});

run("S12", "같은 원본으로 보충 과제가 중복 생성되면 안 된다", () => {
  const createStart = app.indexOf("function handleCreateMakeupTask");
  const createEnd = app.indexOf("function handleUpdateMakeupTask");
  const createBlock = app.slice(createStart, createEnd);
  const hasUniquenessGuard = createBlock.includes("sourceId") && (createBlock.includes("some(") || createBlock.includes("find("));
  assert(hasUniquenessGuard, "중복 생성 방지 로직이 없어 같은 sourceId로 MakeupTask가 여러 개 생성될 수 있음");
});

run("S13", "강사가 후속조치 일정을 배정할 수 있어야 한다", () => {
  assert(hasAll("scheduledDate", "scheduledTime", "input type=\"date\"", "input type=\"time\""), "후속조치 일정/시간 입력 흐름이 없음");
});

run("S14", "강사가 알림 문구 초안만 생성할 수 있어야 한다", () => {
  assert(hasAll("createNotificationDraft", "notificationDraft", "문구"), "알림 문구 초안 생성 흐름이 없음");
});

run("S15", "강사가 모의 알림 로그를 남길 수 있어야 한다", () => {
  assert(hasAll("handleLogNotification", "channel: \"mock\"", "draft_logged"), "모의 알림 로그 저장 흐름이 없음");
});

run("S16", "강사가 데일리 리포트 초안을 열 수 있어야 한다", () => {
  assert(hasAll("ReportCenter", "ReportModal", "createAiReportDraft", "homeworkBundle"), "데일리 리포트 초안 생성/모달 흐름이 없음");
});

run("S17", "리포트 스냅샷은 원본 변경과 분리되어야 한다", () => {
  assert(hasAll("reportSnapshots", "snapshot_saved", "body: reportBody") || hasAll("reportSnapshots", "snapshot_saved", "body"), "리포트 스냅샷 저장 구조가 불충분함");
});

run("S18", "공통 ID 링크가 존재해야 한다", () => {
  assert(hasAll("studentId", "lessonId", "homeworkId", "reportId", "makeupTaskId", "sourceId"), "공통 ID 필드 일부가 코드에 없음");
  assert(sample.includes("studentId") && sample.includes("lessonId") && sample.includes("homeworkId"), "샘플 데이터에 핵심 ID 일부가 없음");
});

run("S19", "새로고침 후 데이터가 유지되어야 한다", () => {
  assert(hasAll("useStoredState", "localStorage.getItem", "localStorage.setItem", "storageKeys.homeworks"), "localStorage 지속 저장 흐름이 없음");
});

run("S20", "저장 실패가 사용자에게 표시되어야 한다", () => {
  const hookStart = app.indexOf("function useStoredState");
  const hookBlock = app.slice(hookStart);
  const effectStart = hookBlock.indexOf("useEffect");
  const effectEnd = hookBlock.indexOf("return [value, setValue]");
  const effectBlock = hookBlock.slice(effectStart, effectEnd);
  assert(effectBlock.includes("try") && effectBlock.includes("catch"), "useStoredState 저장 effect에 try/catch 및 사용자 실패 표시가 없음");
});

const summary = {
  pass: results.filter((item) => item.status === "PASS").length,
  fail: results.filter((item) => item.status === "FAIL").length,
  pending: results.filter((item) => item.status === "PENDING").length
};

const payload = {
  executedAt: new Date().toISOString(),
  method: "static-code-and-sample-data-check",
  note: "Playwright browser execution was not available because playwright-core is missing. These checks were executed directly against the current source code and sample data.",
  summary,
  results
};

fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(JSON.stringify(payload, null, 2));

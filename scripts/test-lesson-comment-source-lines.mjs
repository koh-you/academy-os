// 수업 알림톡 원천 줄은 화면 미리보기와 발송 직전 서버 갱신이 같은 함수를 쓴다.
//
// 2026-09-19 까지 App.jsx 와 api/server.js 에 거의 같은 사본이 있었고, 화면 쪽만 고친 변경이
// 발송 문구에 빠졌다: (1) 테스트 결과 줄의 "· 통과 / · 재시험" 표기(#257·#259) — 서버 사본에는
// 없어 실제 알림톡에는 점수만 나갔다. (2) 시험대비 수업(반 미지정)에서 반이 정해진 응시 기록을
// 명단 기준으로 붙이는 규칙(#283) — 서버 사본은 반 일치만 봐서 시험대비 수업의 테스트 줄이
// 통째로 빠졌다. 여기서는 그 두 동작과 보충 일정 문장을 고정하고, 두 런타임이 사본 없이 이
// 모듈만 쓰는지 본다.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  formatSupplementScheduleLine,
  formatTestAttemptMessageLine,
  getLessonContent,
  getLessonMaterial,
  getLessonTestResultLines,
  getStudentSupplementScheduleTasks,
  getStudentSupplementSchedules
} from "../src/domains/notifications/lessonCommentSourceLines.js";

// 1. 테스트 결과 줄: 통과/재시험 표기가 붙는다. 미응시·문항 수 없음도 그대로.
{
  const session = { testKind: "daily", testSessionId: "ts-1", testTitle: "  3단원 데일리  ", totalQuestions: 10 };
  assert.equal(formatTestAttemptMessageLine(session, { correctCount: 7, passStatus: "failed" }), "3단원 데일리 · 10문항 중 7문항 정답 · 재시험");
  assert.equal(formatTestAttemptMessageLine(session, { correctCount: 10, passStatus: "passed" }), "3단원 데일리 · 10문항 중 10문항 정답 · 통과");
  assert.equal(formatTestAttemptMessageLine(session, { correctCount: 8 }), "3단원 데일리 · 10문항 중 8문항 정답");
  assert.equal(formatTestAttemptMessageLine({ testKind: "unit", testSessionId: "ts-2" }, { correctCount: "" }), "단원테스트 · 응시");
  assert.equal(formatTestAttemptMessageLine(session, { notTakenReason: "조퇴", status: "not_taken" }), "3단원 데일리 · 미응시 (사유: 조퇴)");
}

// 2. 시험대비 수업(반 미지정)은 명단에 있는 학생의 반 응시 기록도 그날 결과로 붙인다.
//    반이 있는 수업은 같은 날 두 수업에 중복 발송되지 않게 반이 같을 때만 붙인다.
{
  const student = { studentId: "s1" };
  const sessions = [
    { classTemplateId: "class-a", createdAt: "2026-09-19T01:00:00.000Z", testDate: "2026-09-19", testSessionId: "ts-a", testTitle: "반A 테스트", totalQuestions: 5 },
    { classTemplateId: "class-b", createdAt: "2026-09-19T02:00:00.000Z", testDate: "2026-09-19", testSessionId: "ts-b", testTitle: "반B 테스트", totalQuestions: 5 },
    { classTemplateId: "", createdAt: "2026-09-19T00:30:00.000Z", testDate: "2026-09-19", testSessionId: "ts-open", testTitle: "공통 테스트", totalQuestions: 5 },
    { classTemplateId: "class-a", createdAt: "2026-09-18T01:00:00.000Z", testDate: "2026-09-18", testSessionId: "ts-yesterday", testTitle: "어제 테스트", totalQuestions: 5 }
  ];
  const attempts = [
    { correctCount: 5, passStatus: "passed", studentId: "s1", testSessionId: "ts-a" },
    { correctCount: 2, passStatus: "failed", studentId: "s1", testSessionId: "ts-b" },
    { correctCount: 4, studentId: "s1", testSessionId: "ts-open" },
    { correctCount: 5, studentId: "s1", testSessionId: "ts-yesterday" },
    { correctCount: 1, studentId: "s2", testSessionId: "ts-a" }
  ];
  const examPrepLesson = { classTemplateId: "", date: "2026-09-19", lessonId: "exam-prep", studentIds: ["s1"] };
  assert.deepEqual(getLessonTestResultLines(sessions, attempts, examPrepLesson, student), [
    "공통 테스트 · 5문항 중 4문항 정답",
    "반A 테스트 · 5문항 중 5문항 정답 · 통과",
    "반B 테스트 · 5문항 중 2문항 정답 · 재시험"
  ]);
  // 명단에 없는 학생에게는 반 응시 기록을 붙이지 않는다(반 없는 기록만).
  assert.deepEqual(getLessonTestResultLines(sessions, attempts, { ...examPrepLesson, studentIds: ["s9"] }, student), ["공통 테스트 · 5문항 중 4문항 정답"]);
  // 반이 있는 수업은 그 반의 기록 + 반 없는 기록만.
  const classLesson = { classTemplateId: "class-a", date: "2026-09-19", lessonId: "class-a-lesson", studentIds: ["s1"] };
  assert.deepEqual(getLessonTestResultLines(sessions, attempts, classLesson, student), [
    "공통 테스트 · 5문항 중 4문항 정답",
    "반A 테스트 · 5문항 중 5문항 정답 · 통과"
  ]);
}

// 3. 보충 일정 문장·후보 선별은 자연어 문장이고 내부 상태 라벨이 없다.
{
  const tasks = [
    { makeupTaskId: "t-next", scheduledDate: "2026-09-21", status: "scheduled", studentId: "s1", supplementMethod: "next_lesson", taskType: "homework_makeup", sourceLabel: "3단원 숙제" },
    { makeupTaskId: "t-arrival", scheduledDate: "2026-09-20", scheduledTime: "16:00", status: "scheduled", studentId: "s1", taskType: "homework_makeup", sourceLabel: "2단원 숙제" },
    { makeupTaskId: "t-retest", scheduledDate: "2026-09-22", status: "scheduled", studentId: "s1", taskType: "retest", sourceLabel: "3단원 데일리" },
    { makeupTaskId: "t-done", scheduledDate: "2026-09-19", status: "done", studentId: "s1", taskType: "homework_makeup", sourceLabel: "끝난 숙제" },
    { makeupTaskId: "t-other", scheduledDate: "2026-09-19", status: "scheduled", studentId: "s2", taskType: "homework_makeup", sourceLabel: "남의 숙제" },
    { makeupTaskId: "t-blank", status: "scheduled", studentId: "s1", taskType: "homework_makeup" }
  ];
  assert.equal(formatSupplementScheduleLine(tasks[0]), "다음 수업 때 3단원 숙제를 함께 확인하겠습니다.");
  assert.match(formatSupplementScheduleLine(tasks[1]), /^2026-09-20 16:00에 .+으로 2단원 숙제 보충을 진행하겠습니다\.$/);
  assert.equal(formatSupplementScheduleLine(tasks[2]), "2026-09-22에 3단원 데일리 재시험을 진행하겠습니다.");
  assert.deepEqual(getStudentSupplementScheduleTasks(tasks, "s1").map((task) => task.makeupTaskId), ["t-arrival", "t-next", "t-retest"]);
  const lines = getStudentSupplementSchedules(tasks, "s1");
  assert.equal(lines.length, 3);
  for (const line of lines) {
    assert.ok(!line.includes("일정 확정") && !line.includes("일정 미확정") && !line.includes(" · "), line);
  }
}

// 4. 교재·진도는 기록 값을 우선하고 없으면 학생 교재로 내려간다.
{
  assert.equal(getLessonMaterial({ lessonMaterial: " 쎈 공통수학1 " }, { textbook: "RPM" }), "쎈 공통수학1");
  assert.equal(getLessonMaterial({}, { textbook: "  ", currentTextbook: "RPM" }), "RPM");
  assert.equal(getLessonContent({ lessonProgress: "", progress: " 3단원 ", lessonContent: "x" }), "3단원");
  assert.equal(getLessonContent(undefined), "");
}

// 5. 두 런타임은 이 모듈만 쓴다 — 사본이 다시 생기면 미리보기와 발송이 갈라진다.
{
  const [appSource, serverSource] = await Promise.all([
    readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../api/server.js", import.meta.url), "utf8")
  ]);
  assert.ok(appSource.includes('from "../domains/notifications/lessonCommentSourceLines.js"'));
  assert.ok(serverSource.includes('from "../src/domains/notifications/lessonCommentSourceLines.js"'));
  for (const copy of [
    "function formatSupplementScheduleLine(",
    "function getStudentSupplementSchedules(",
    "function formatTestAttemptMessageLine(",
    "function getLessonTestResultLines(",
    "function getLessonMaterial(",
    "function getLessonContent("
  ]) {
    assert.ok(!appSource.includes(copy), `App.jsx must not redefine ${copy}`);
  }
  for (const copy of [
    "function formatSupplementScheduleLineForNotification(",
    "function getStudentSupplementSchedulesForNotification(",
    "function formatTestAttemptLineForNotification(",
    "function getStudentTestResultLinesForNotification(",
    "function getNotificationLessonMaterial(",
    "function getNotificationLessonContent("
  ]) {
    assert.ok(!serverSource.includes(copy), `api/server.js must not redefine ${copy}`);
  }
  assert.ok(serverSource.includes("getLessonTestResultLines(context.testSessions, context.testAttempts, lesson, student)"));
  assert.ok(serverSource.includes("getStudentSupplementSchedules(context.makeupTasks, student.studentId, {"));
}

console.log("lesson comment source lines: 통과/재시험 표기 · 시험대비 수업 테스트 줄 · 보충 문장 · 사본 없음 통과");

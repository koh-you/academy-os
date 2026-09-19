// 수업 알림톡(코멘트) 본문에 들어가는 "원천 줄" 을 만드는 순수 함수들 — 교재·진도, 보충 일정 문장,
// 테스트 결과 줄.
//
// 화면 미리보기(App)와 발송 직전 서버 갱신(api/server.js refreshLessonCommentJobBeforeSend)이
// **같은 함수**를 써야 한다. 2026-09-19 까지는 두 곳에 거의 같은 사본이 있었고, 화면 쪽만 고친
// 변경(#257·#259 통과/재시험 표기, #283 시험대비 수업의 테스트 줄)이 발송 문구에는 반영되지
// 않아 선생님이 본 미리보기와 실제로 나간 알림톡이 달랐다. AGENTS.md "알림 미리보기와 실제
// 발송 문구는 같은 설정 원천을 사용한다" 의 함수 단위 구현이다. 문구를 고칠 때는 여기만 고친다.

import { normalizeNotificationText } from "./notificationMessageRenderer.js";
import { isSupplementScheduleForLessonComment } from "./supplementSchedule.js";
import {
  followUpTypeLabel,
  formatSupplementHomeworkCheckSentence,
  getSupplementTaskSourceLabel,
  supplementDefaultMethod,
  supplementMethodLabel
} from "../supplements/supplementMethodLabel.js";
import { getTestPaperKindLabel } from "../tests/testManagerUtils.js";

export function getLessonMaterial(record, student) {
  return record?.lessonMaterial?.trim() || student?.textbook?.trim() || student?.currentTextbook?.trim() || "";
}

export function getLessonContent(record) {
  return record?.lessonProgress?.trim() || record?.progress?.trim() || record?.lessonContent?.trim() || "";
}

export function formatSupplementScheduleLine(task = {}) {
  const schedule = [task.scheduledDate, task.scheduledTime].filter(Boolean).join(" ");
  const method = supplementMethodLabel(task);
  const source = getSupplementTaskSourceLabel(task) || followUpTypeLabel(task.taskType);
  const homeworkCheckSentence = formatSupplementHomeworkCheckSentence(task);
  const schedulePrefix = schedule ? `${schedule}에 ` : "";

  if (task.taskType === "homework_makeup") {
    if ((task.supplementMethod || supplementDefaultMethod(task.taskType)) === "next_lesson") {
      return `다음 수업 때 ${source}를 함께 확인하겠습니다.`;
    }
    return `${schedulePrefix}${method}으로 ${source} 보충을 진행하겠습니다.`;
  }

  if (task.taskType === "absence_makeup") {
    return `${schedulePrefix}${method}으로 ${source} 결석 보강을 진행하겠습니다.${homeworkCheckSentence ? ` ${homeworkCheckSentence}` : ""}`;
  }

  if (task.taskType === "retest") {
    return `${schedulePrefix}${source} 재시험을 진행하겠습니다.`;
  }

  return `${schedulePrefix}${source} 일정을 진행하겠습니다.`;
}

export function getStudentSupplementScheduleTasks(makeupTasks = [], studentId = "", options = {}) {
  const { lesson = null, mode = "all" } = options;
  return makeupTasks
    .filter((task) => task.studentId === studentId && task.status !== "done")
    .filter((task) => (mode === "lesson_comment" ? isSupplementScheduleForLessonComment(task, lesson) : true))
    .filter((task) => task.scheduledDate || task.scheduledTime || task.notificationDraft || task.supplementHomeworkNote || task.sourceLabel)
    .sort((a, b) => `${a.scheduledDate || "9999-99-99"} ${a.scheduledTime || ""}`.localeCompare(`${b.scheduledDate || "9999-99-99"} ${b.scheduledTime || ""}`));
}

export function getStudentSupplementSchedules(makeupTasks = [], studentId = "", options = {}) {
  return getStudentSupplementScheduleTasks(makeupTasks, studentId, options).map(formatSupplementScheduleLine);
}

export function formatTestAttemptMessageLine(session = {}, attempt = {}) {
  const title = normalizeNotificationText(session.testTitle) || getTestPaperKindLabel(session.testKind);
  if (attempt.status === "not_taken") {
    const reason = normalizeNotificationText(attempt.notTakenReason);
    return `${title} · 미응시${reason ? ` (사유: ${reason})` : ""}`;
  }

  const hasCorrect = attempt.correctCount !== "" && attempt.correctCount !== null && attempt.correctCount !== undefined;
  const total = session.totalQuestions !== "" && session.totalQuestions !== null && session.totalQuestions !== undefined
    ? `${session.totalQuestions}문항 중 `
    : "";
  // 통과/재시험 표기(#257·#259). 미리보기와 발송 본문이 같은 줄을 쓴다.
  const passSuffix = attempt.passStatus === "failed"
    ? " · 재시험"
    : attempt.passStatus === "passed"
      ? " · 통과"
      : "";
  return `${title} · ${hasCorrect ? `${total}${attempt.correctCount}문항 정답` : "응시"}${passSuffix}`;
}

export function getLessonTestResultLines(testSessions = [], testAttempts = [], lesson = {}, student = {}) {
  const sessionById = new Map(testSessions.map((session) => [session.testSessionId, session]));
  return testAttempts
    .filter((attempt) => attempt.studentId === student.studentId)
    .map((attempt) => ({ attempt, session: sessionById.get(attempt.testSessionId) }))
    .filter(({ session }) => session && session.testDate === lesson.date)
    // 시험대비 수업은 반이 지정돼 있지 않다. 그런 수업에서는 반이 정해진
    // 응시 기록도 그날 그 학생의 결과이므로 명단 기준으로 붙인다(#283). 반이 있는 수업은
    // 같은 날 두 수업에 중복 발송되지 않도록 기존처럼 반이 일치할 때만 붙인다.
    .filter(({ session }) => {
      if (!session.classTemplateId) return true;
      if (!lesson.classTemplateId) return (lesson.studentIds ?? []).includes(student.studentId);
      return session.classTemplateId === lesson.classTemplateId;
    })
    .sort((a, b) => String(a.session.updatedAt || a.session.createdAt || "").localeCompare(String(b.session.updatedAt || b.session.createdAt || "")))
    .map(({ session, attempt }) => formatTestAttemptMessageLine(session, attempt));
}

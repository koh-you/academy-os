import { useEffect, useMemo, useRef, useState } from "react";
import {
  copyTextToClipboard
} from "../domains/exams/outputPreview.js";
import {
  createExamAnalysisFinalPreviewModel,
  examAnalysisPreviewPalette
} from "../domains/exams/finalPreview.js";
import {
  examPostAcademyHelpOptions,
  examPostFeelingOptions,
  examPostRegretReasonOptions,
  examPostScaleOptions,
  examPostStudyDifficultyOptions
} from "../domains/exams/postSubmissionOptions.js";
import { StudentManager } from "../domains/students/StudentManager.jsx";
import {
  assignmentStatusLabels,
  assignmentStatusOptions,
  assignmentStatusParentMessages,
  assignmentStatusStudentMessages,
  getAssignmentStatusMessage,
  getAssignmentStatusParentMessage,
  getAssignmentStatusStudentMessage,
  getHomeworkStatusFromAssignmentStatus,
  isAssignmentStatusHomeworkMakeupCandidate,
  normalizeAssignmentStatusValue
} from "../domains/lessons/assignmentStatus.js";
import {
  clearAttendanceFields,
  formatKoreaTimeFromIso,
  formatShortDateLabel,
  getAttendanceDateMismatch,
  getAttendanceDisplay,
  hasMissingCheckOut,
  normalizeTimeInput
} from "../domains/lessons/attendance.js";
import { LessonJournalErrorBoundary } from "../domains/lessons/LessonJournalErrorBoundary.jsx";
import { attendanceLabels, dayLabels, homeworkLabels } from "../domains/lessons/labels.js";
import { sampleData } from "../shared/data/sampleData.js";
import { readFileAsDataUrl } from "../shared/utils/file.js";
import { safeIdPart, shortStableHash } from "../shared/utils/id.js";

const storageKeys = {
  classTemplates: "academy-os.classTemplates.v1",
  lessons: "academy-os.lessons.v8",
  students: "academy-os.students.v12",
  studentIntakeApplicants: "academy-os.studentIntakeApplicants.v1",
  records: "academy-os.lessonStudentRecords.v7",
  homeworks: "academy-os.homeworks.v7",
  reportSnapshots: "academy-os.reportSnapshots.v1",
  makeupTasks: "academy-os.makeupTasks.v1",
  notificationLogs: "academy-os.notificationLogs.v1",
  wrongProblems: "academy-os.wrongProblems.v1",
  problemBooks: "academy-os.problemBooks.v1",
  scoreRecords: "academy-os.scoreRecords.v1",
  academyTests: "academy-os.academyTests.v1",
  examPrepRows: "academy-os.examPrepRows.v2",
  tallySubmissions: "academy-os.tallySubmissions.v1",
  tallySummaries: "academy-os.tallySummaries.v1",
  examPostTargetStudentIds: "academy-os.examPostTargetStudentIds.v1",
  schoolEvents: "academy-os.schoolEvents.v1",
  studentQuestions: "academy-os.studentQuestions.v1",
  examPostSubmissions: "academy-os.examPostSubmissions.v1",
  resourceMaterials: "academy-os.resourceMaterials.v1",
  lessonResearchItems: "academy-os.lessonResearchItems.v1",
  aiSettings: "academy-os.aiSettings.v1",
  attendanceSettings: "academy-os.attendanceSettings.v1",
  lessonNotificationPlans: "academy-os.lessonNotificationPlans.v1",
  deletedLessonBundles: "academy-os.deletedLessonBundles.v1",
  teacherSession: "academy-os.teacherSession.v1"
};
const legacySensitiveStorageKeys = ["academy-os.teacherAccountSettings.v1"];

const academyBrandName = "으뜸수학 고태영T";
const academyOperationalStartDate = "2026-06-19";
const lessonDeleteRetentionMs = 7 * 24 * 60 * 60 * 1000;

function getAssignmentStatusForMessage(record, previousHomework) {
  const recordStatus = normalizeAssignmentStatusValue(record?.assignmentStatus ?? record?.incompleteHomework ?? "");
  if (recordStatus) return recordStatus;

  const homeworkStatus = normalizeAssignmentStatusValue(getHomeworkAssignmentStatus(previousHomework, record ? [record] : []));
  if (homeworkStatus) return homeworkStatus;

  if (previousHomework?.teacherStatus === "verified" || previousHomework?.status === "verified") return "complete_thorough";
  if (previousHomework?.teacherStatus === "missing") return "not_done";
  if (previousHomework?.teacherStatus === "unverified") return "not_checked";
  if (previousHomework?.teacherStatus === "partial") return "partial_50";
  return "";
}

function getLessonMaterial(record, student) {
  return record?.lessonMaterial?.trim() || student?.textbook?.trim() || student?.currentTextbook?.trim() || "";
}

function getLessonContent(record) {
  return record?.lessonProgress?.trim() || record?.progress?.trim() || record?.lessonContent?.trim() || "";
}

function isStudentVisibleHomework(homework) {
  return homework?.homeworkType !== "previous";
}

function isHomeworkCompletedForStudent(homework) {
  return isHomeworkResolved(homework);
}

function getHomeworkStatusLabel(homework, records = []) {
  const assignmentStatus = getHomeworkAssignmentStatus(homework, records);
  const normalizedStatus = normalizeAssignmentStatusValue(assignmentStatus);
  if (assignmentStatus) return assignmentStatusLabels[normalizedStatus] ?? assignmentStatus;
  if (homework?.teacherStatus === "verified" || homework?.status === "verified") return "완료";
  if (homework?.teacherStatus === "partial") return "일부 완료";
  if (homework?.teacherStatus === "missing") return "미완료";
  if (homework?.teacherStatus === "unverified") return "미검사";
  return homeworkLabels[homework?.status] ?? "검사 전";
}

function getHomeworkStatusTone(homework, records = []) {
  const normalizedStatus = normalizeAssignmentStatusValue(getHomeworkAssignmentStatus(homework, records));
  if (normalizedStatus === "complete_thorough" || homework?.teacherStatus === "verified" || homework?.status === "verified") return "done";
  if (["partial_80", "partial_50", "known_only", "too_hard", "answer_suspected"].includes(normalizedStatus) || homework?.teacherStatus === "partial") return "partial";
  if (normalizedStatus === "not_done" || homework?.teacherStatus === "missing") return "danger";
  return "pending";
}

function getHomeworkAssignmentStatus(homework, records = []) {
  const ownStatus = homework?.assignmentStatus ?? homework?.incompleteHomework ?? "";
  if (ownStatus) return ownStatus;
  const record = records.find(
    (item) => item.lessonId === (homework?.checkedLessonId ?? homework?.lessonId) && item.studentId === homework?.studentId
  );
  return record?.assignmentStatus ?? record?.incompleteHomework ?? "";
}

function getLinkedPreviousHomework(homework, homeworks = []) {
  if (homework?.homeworkType !== "next") return null;
  return homeworks.find(
    (candidate) =>
      candidate.homeworkType === "previous" &&
      candidate.studentId === homework.studentId &&
      candidate.linkedFromLessonId === homework.lessonId &&
      String(candidate.title ?? "").trim() === String(homework.title ?? "").trim()
  ) ?? null;
}

function mergeHomeworkStatusFromLinkedPrevious(homework, homeworks = [], records = []) {
  const linkedPreviousHomework = getLinkedPreviousHomework(homework, homeworks);
  if (!linkedPreviousHomework) return homework;
  const linkedHasTeacherStatus = linkedPreviousHomework.teacherStatus && linkedPreviousHomework.teacherStatus !== "unverified";
  const linkedRecordStatus = getHomeworkAssignmentStatus(linkedPreviousHomework, records);
  const linkedHasAssignmentStatus = linkedPreviousHomework.assignmentStatus || linkedPreviousHomework.incompleteHomework || linkedRecordStatus;
  if (!linkedHasTeacherStatus && !linkedHasAssignmentStatus) return homework;
  return {
    ...homework,
    status: linkedHasTeacherStatus ? linkedPreviousHomework.status : homework.status,
    teacherStatus: linkedHasTeacherStatus ? linkedPreviousHomework.teacherStatus : homework.teacherStatus,
    checkedLessonId: linkedPreviousHomework.lessonId,
    assignmentStatus: linkedPreviousHomework.assignmentStatus ?? linkedPreviousHomework.incompleteHomework ?? linkedRecordStatus ?? homework.assignmentStatus,
    incompleteHomework: linkedPreviousHomework.incompleteHomework ?? linkedPreviousHomework.assignmentStatus ?? linkedRecordStatus ?? homework.incompleteHomework,
    verifiedAt: linkedPreviousHomework.verifiedAt ?? homework.verifiedAt,
    checkedAt: linkedPreviousHomework.checkedAt ?? homework.checkedAt
  };
}

function normalizeMessageText(value) {
  return (value ?? "")
    .toString()
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function createMessageBlock(label, value) {
  const text = normalizeMessageText(value);
  return text ? `${label}\n${text}` : "";
}

function createMessageLine(label, value) {
  const text = normalizeMessageText(value);
  return text ? `${label} : ${text}` : "";
}

function formatAttendanceMessageTime(value) {
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

function formatLessonClockTime(value = "") {
  const match = String(value ?? "").match(/^(\d{1,2}):(\d{2})/);
  if (!match) return String(value ?? "");
  return `${String(match[1]).padStart(2, "0")}:${match[2]}`;
}

function formatLessonTimeRange(lesson = {}) {
  const start = formatLessonClockTime(lesson.startTime);
  const end = formatLessonClockTime(lesson.endTime);
  return [start, end].filter(Boolean).join("-");
}

function formatLessonDisplayName(lesson = {}) {
  return [lesson.className, formatLessonTimeRange(lesson)].filter(Boolean).join(" · ");
}

function getLessonStudentIds(lesson = {}) {
  return Array.isArray(lesson?.studentIds) ? lesson.studentIds : [];
}

function isWithdrawnStudent(student = {}) {
  return (student.status ?? "active") !== "active" || Boolean(student.withdrawnAt);
}

function isActiveStudent(student = {}) {
  return student && !isWithdrawnStudent(student);
}

function getActiveLessonStudents(lesson = {}, students = []) {
  return getLessonStudentIds(lesson)
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter(isActiveStudent);
}

function getActiveStudentIdsFromSelection(studentIds = [], students = []) {
  const selectedStudentIds = new Set(studentIds);
  return students
    .filter((student) => isActiveStudent(student) && selectedStudentIds.has(student.studentId))
    .map((student) => student.studentId);
}

function getAttendanceClockMinutes(value = "") {
  const time = normalizeTimeInput(value);
  if (!time) return null;
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function calculateLateMinutesFromLessonTime(lesson = {}, checkInTime = "", graceMinutes = 0) {
  const startMinutes = getAttendanceClockMinutes(lesson.startTime);
  const checkInMinutes = getAttendanceClockMinutes(checkInTime);
  if (startMinutes === null || checkInMinutes === null) return "";
  return Math.max(0, checkInMinutes - startMinutes - (Number(graceMinutes) || 0));
}

function formatAttendanceForMessage(recordOrPayload = {}) {
  const attendanceStatus = recordOrPayload.attendanceStatus ?? "pending";
  const label = attendanceLabels[attendanceStatus] ?? attendanceStatus ?? "";
  if (!["지각", "결석", "인정결석"].includes(label)) return label;

  const details = [];
  const reason = normalizeMessageText(recordOrPayload.attendanceReason ?? recordOrPayload.reason ?? "");
  const time = formatAttendanceMessageTime(
    recordOrPayload.checkInTime ||
    recordOrPayload.checkedAt ||
    recordOrPayload.checkInAt
  );
  if (reason) details.push(`사유: ${reason}`);
  if (label === "지각" && time) details.push(`등원 ${time}`);
  if (label === "지각" && !time && recordOrPayload.lateMinutes) details.push(`${recordOrPayload.lateMinutes}분 지각`);
  if ((label === "결석" || label === "인정결석") && time) details.push(`처리 ${time}`);
  return details.length ? `${label} (${details.join(" · ")})` : label;
}

function formatAttendanceStatusForMessage(recordOrPayload = {}) {
  const attendanceStatus = recordOrPayload.attendanceStatus ?? "pending";
  const label = attendanceLabels[attendanceStatus] ?? attendanceStatus ?? "";
  const reason = normalizeMessageText(recordOrPayload.attendanceReason ?? recordOrPayload.reason ?? "");
  if (reason && ["지각", "결석", "인정결석"].includes(label)) {
    return `${label} (사유: ${reason})`;
  }
  return label;
}

function joinMessageBlocks(blocks) {
  return blocks.map(normalizeMessageText).filter(Boolean).join("\n\n");
}

function getMessageDedupeKey(value = "") {
  return normalizeMessageText(value).replace(/\s+/g, " ");
}

function compactDuplicateMessageBlocks(value = "") {
  const seen = new Set();
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n+/g)
    .map(normalizeMessageText)
    .filter(Boolean)
    .filter((block) => {
      const key = getMessageDedupeKey(block);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .join("\n\n");
}

function textIncludesMessageBlock(text = "", block = "") {
  const textKey = getMessageDedupeKey(text);
  const blockKey = getMessageDedupeKey(block);
  return Boolean(blockKey && textKey.includes(blockKey));
}

function textIncludesEveryLine(text = "", lines = []) {
  const textKey = getMessageDedupeKey(text);
  return lines.every((line) => {
    const lineKey = getMessageDedupeKey(line);
    return !lineKey || textKey.includes(lineKey);
  });
}

function getPreparationNoticeForTarget(record = {}, target = "parent") {
  const shouldIncludePrepMemo =
    target === "student" ? Boolean(record?.prepStudentVisible) : Boolean(record?.prepParentVisible);
  return shouldIncludePrepMemo ? normalizeMessageText(record?.preparationMemo) : "";
}

function buildCommentPreviewLines({ audience, comment, nextHomework, previousHomework, record, student, supplementSchedules = [] }) {
  const lessonMaterial = getLessonMaterial(record, student);
  const lessonContent = getLessonContent(record);
  const assignmentStatus = getAssignmentStatusForMessage(record, previousHomework);
  const attendance = formatAttendanceForMessage(record);
  const commentText = normalizeMessageText(comment);
  const supplementText = supplementSchedules.length ? supplementSchedules.map((item) => `- ${item}`).join("\n") : "";
  const supplementNotice = supplementText && !commentText.includes("보충일정") && !supplementSchedules.some((item) => commentText.includes(item))
    ? supplementText
    : "";
  const lines = [
    createMessageLine("🏫 출결", attendance),
    assignmentStatus ? createMessageLine("✅ 과제 상태", getAssignmentStatusMessage(audience, assignmentStatus)) : "",
    createMessageLine("📚 강의 교재", lessonMaterial),
    createMessageLine("🧭 강의 내용", lessonContent),
    createMessageLine("📘 지난 과제", previousHomework?.title),
    createMessageLine("➡️ 다음 과제", nextHomework?.title),
    supplementNotice ? createMessageBlock("⭐ 보충 일정", supplementNotice) : "",
    commentText ? createMessageBlock("💬 코멘트", commentText) : ""
  ];

  return lines.filter(Boolean);
}

function buildCommentPreviewText({ audience, comment, lesson, nextHomework, previousHomework, record, student, supplementSchedules = [] }) {
  const isParent = audience === "parent";
  const previewLines = buildCommentPreviewLines({
    audience,
    comment,
    nextHomework,
    previousHomework,
    record,
    student,
    supplementSchedules
  });

  return joinMessageBlocks([
    `#{학원명}: ${academyBrandName}`,
    `#{학생명}: ${student.name}`,
    isParent ? `#{수업일}: ${lesson.date}` : `#{수업명}: ${lesson.className}`,
    isParent ? "#{리포트본문}:" : "#{코멘트}:",
    ...(previewLines.length ? previewLines : ["왼쪽에 작성한 내용이 받는 사람 화면에 이렇게 표시됩니다."])
  ]);
}

function buildCommentSourceText({ audience = "parent", lesson, nextHomework, previousHomework, record, student, supplementSchedules = [] }) {
  return joinMessageBlocks([
    createMessageLine("수신 학생", student.name),
    createMessageLine("수업", `${lesson.date} ${lesson.className}`),
    createMessageLine("출결", formatAttendanceForMessage(record)),
    createMessageLine("과제 상태", getAssignmentStatusMessage(audience, getAssignmentStatusForMessage(record, previousHomework))),
    createMessageLine("강의 교재", getLessonMaterial(record, student)),
    createMessageLine("강의 내용", getLessonContent(record)),
    createMessageLine("지난 과제", previousHomework?.title),
    createMessageLine("다음 과제", nextHomework?.title),
    supplementSchedules.length ? createMessageBlock("보충일정", supplementSchedules.map((item) => `- ${item}`).join("\n")) : "",
    createMessageBlock("수업메모", record?.preparationMemo)
  ]) || "알림톡에 참고할 원본 정보가 아직 없습니다.";
}

function formatSupplementScheduleLine(task = {}) {
  const schedule = [task.scheduledDate, task.scheduledTime].filter(Boolean).join(" ");
  const method = supplementMethodLabel(task);
  const source = getSupplementTaskSourceLabel(task) || followUpTypeLabel(task.taskType);
  const status = task.status === "done" ? "보충 완료" : task.status === "scheduled" ? "일정 확정" : "일정 미확정";
  return [schedule || "일정 미정", source, method, status].filter(Boolean).join(" · ");
}

function getStudentSupplementSchedules(makeupTasks = [], studentId = "") {
  return makeupTasks
    .filter((task) => task.studentId === studentId && task.status !== "done")
    .filter((task) => task.scheduledDate || task.scheduledTime || task.notificationDraft || task.supplementHomeworkNote || task.sourceLabel)
    .sort((a, b) => `${a.scheduledDate || "9999-99-99"} ${a.scheduledTime || ""}`.localeCompare(`${b.scheduledDate || "9999-99-99"} ${b.scheduledTime || ""}`))
    .map(formatSupplementScheduleLine);
}

function buildInitialCommentDraft({ audience, existingComment, record, supplementSchedules }) {
  const commentText = compactDuplicateMessageBlocks(existingComment);
  const prepMemo = getPreparationNoticeForTarget(record, audience);
  const supplementText = supplementSchedules.length ? supplementSchedules.map((item) => `- ${item}`).join("\n") : "";
  const supplementBlock = supplementText ? `보충 일정:\n${supplementText}` : "";
  const shouldAddPrepMemo = prepMemo && !textIncludesMessageBlock(commentText, prepMemo);
  const shouldAddSupplement =
    supplementBlock &&
    !textIncludesMessageBlock(commentText, supplementBlock) &&
    !textIncludesEveryLine(commentText, supplementSchedules);
  return joinMessageBlocks([
    shouldAddPrepMemo ? prepMemo : "",
    shouldAddSupplement ? supplementBlock : "",
    commentText
  ]);
}

const saveStateLabels = {
  idle: "저장 전",
  dirty: "변경됨",
  saving: "저장 중",
  saved: "저장 완료",
  failed: "저장 실패"
};

function normalizeExamReviewDraftValue(value = "") {
  const lines = String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return lines.filter((line, index) => index === 0 || line !== lines[index - 1]).join("\n");
}

function formatExamReviewDraftLine(label, value = "") {
  const normalizedValue = normalizeExamReviewDraftValue(value);
  if (!normalizedValue) return label;
  const [firstLine, ...restLines] = normalizedValue.split("\n");
  return [`${label} ${firstLine}`, ...restLines].join("\n");
}

function getExamReviewDraftTitle(row = {}) {
  const schoolName = String(row.schoolName ?? "").trim();
  return schoolName ? `[${schoolName} 시험지 총평]` : "[시험지 총평]";
}

function createExamReviewDraft(row = {}) {
  const specialNote = row.specialNote ?? row.memo ?? "";
  return `${getExamReviewDraftTitle(row)}

${formatExamReviewDraftLine("1. 시험 범위 :", row.scope)}

2. 난이도 :

${formatExamReviewDraftLine("3. 문항 출처  :", row.subTextbook)}

${formatExamReviewDraftLine("4. 특이사항  :", specialNote)}

5. 대비 방법  :`;
}

const defaultExamReviewDraft = createExamReviewDraft();

function isExamReviewDraftTitleLine(line = "") {
  return /^\[(?:.+\s+)?시험지 총평\]$/.test(String(line).trim());
}

function isExamReviewDraftLike(value = "") {
  const lines = String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  return (
    isExamReviewDraftTitleLine(lines[0]) &&
    lines.some((line) => /^1\.\s*시험 범위\s*:/.test(line)) &&
    lines.some((line) => /^3\.\s*문항 출처\s*:/.test(line))
  );
}

function isExamReviewDraftSectionLine(line = "") {
  return /^[1-5]\.\s*(시험 범위|난이도|문항 출처|특이사항|대비 방법)\s*:/.test(String(line).trim());
}

function getNextExamReviewDraftSectionIndex(lines = [], fromIndex = 0) {
  for (let index = fromIndex + 1; index < lines.length; index += 1) {
    if (isExamReviewDraftSectionLine(lines[index])) return index;
  }
  return lines.length;
}

function replaceExamReviewDraftField(lines = [], fieldPattern, label, value = "") {
  const normalizedValue = normalizeExamReviewDraftValue(value);
  if (!normalizedValue) return lines;
  const fieldIndex = lines.findIndex((line) => fieldPattern.test(String(line).trim()));
  if (fieldIndex < 0) return lines;
  const nextSectionIndex = getNextExamReviewDraftSectionIndex(lines, fieldIndex);
  const replacementLines = formatExamReviewDraftLine(label, normalizedValue).split("\n");
  return [
    ...lines.slice(0, fieldIndex),
    ...replacementLines,
    ...lines.slice(nextSectionIndex)
  ];
}

function syncExamReviewDraftWithExamPrepRow(review = "", row = {}) {
  const currentReview = String(review ?? "");
  if (!currentReview.trim()) return createExamReviewDraft(row);
  if (!isExamReviewDraftLike(currentReview)) return currentReview;
  const nextScope = normalizeExamReviewDraftValue(row.scope);
  const nextSubTextbook = normalizeExamReviewDraftValue(row.subTextbook);
  let nextLines = currentReview.replace(/\r\n/g, "\n").split("\n");
  const titleIndex = nextLines.findIndex(isExamReviewDraftTitleLine);
  if (titleIndex >= 0) nextLines[titleIndex] = getExamReviewDraftTitle(row);
  if (!nextScope && !nextSubTextbook) return nextLines.join("\n");
  nextLines = replaceExamReviewDraftField(nextLines, /^1\.\s*시험 범위\s*:/, "1. 시험 범위 :", nextScope);
  nextLines = replaceExamReviewDraftField(nextLines, /^3\.\s*문항 출처\s*:/, "3. 문항 출처  :", nextSubTextbook);
  return nextLines.join("\n");
}

function normalizeExamReviewDraftText(review = "", row = {}) {
  const currentReview = String(review ?? "");
  if (!isExamReviewDraftLike(currentReview)) return currentReview;
  const lines = currentReview.replace(/\r\n/g, "\n").split("\n");
  const titleIndex = lines.findIndex(isExamReviewDraftTitleLine);
  if (titleIndex >= 0) lines[titleIndex] = getExamReviewDraftTitle(row);
  return lines
    .filter((line, index) => {
      const currentLine = String(line ?? "").trim();
      const previousLine = String(lines[index - 1] ?? "").trim();
      return !currentLine || currentLine !== previousLine;
    })
    .join("\n");
}

function normalizeExamPrepRowReviewDraft(row = {}) {
  const currentReview = String(row.review ?? "");
  if (!isExamReviewDraftLike(currentReview)) return row;
  const nextReview = normalizeExamReviewDraftText(currentReview, row);
  return nextReview === currentReview ? row : { ...row, review: nextReview };
}

function normalizeSaveState(saveState) {
  return Object.prototype.hasOwnProperty.call(saveStateLabels, saveState) ? saveState : "idle";
}

function getAggregateSaveState(states = []) {
  const normalizedStates = states.map(normalizeSaveState).filter((state) => state !== "idle");
  if (normalizedStates.includes("saving")) return "saving";
  if (normalizedStates.includes("dirty")) return "dirty";
  if (normalizedStates.includes("failed")) return "failed";
  if (normalizedStates.includes("saved")) return "saved";
  return "idle";
}

function InlineSaveStatus({ className = "", label = "", saveState = "idle" }) {
  const normalizedSaveState = normalizeSaveState(saveState);
  const classes = ["saveState", `save-${normalizedSaveState}`, "inlineSaveStatus", className].filter(Boolean).join(" ");
  return (
    <small className={classes}>
      {label ? `${label} · ` : ""}{saveStateLabels[normalizedSaveState]}
    </small>
  );
}

function getSaveButtonLabel(saveState) {
  if (saveState === "saving") return "저장 중";
  if (saveState === "failed") return "다시 저장";
  if (saveState === "saved") return "저장 완료";
  return "저장";
}

const notificationScheduleGraceMs = 10 * 60 * 1000;

function isNotificationSchedulePast(value, graceMs = notificationScheduleGraceMs) {
  if (!value) return false;
  const time = value instanceof Date ? value.getTime() : new Date(value).getTime();
  return Number.isFinite(time) && Date.now() - time > graceMs;
}

function parseKoreaShortScheduleLabel(text = "") {
  const match = String(text ?? "").match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const [, month, day, hour, minute] = match;
  const year = Number(getKoreaDateString().slice(0, 4)) || new Date().getFullYear();
  return new Date(
    `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:${minute}:00+09:00`
  );
}

function getDisplayCommentSendStatus(sendStatus = "") {
  const normalizedStatus = normalizeMessageText(sendStatus);
  if (!normalizedStatus.includes("예약 중")) return normalizedStatus;
  const scheduledDate = parseKoreaShortScheduleLabel(normalizedStatus);
  if (!scheduledDate || !isNotificationSchedulePast(scheduledDate)) return normalizedStatus;
  return `예약 시각 지남 · 확인 필요 · ${normalizedStatus.replace(/^예약 중\s*·\s*/, "")}`;
}

function getCommentSendState(sendStatus = "") {
  const normalizedStatus = getDisplayCommentSendStatus(sendStatus);
  if (!normalizedStatus) return "";
  if (normalizedStatus === "내용 없음") return "";
  if (normalizedStatus.includes("확인 필요") || normalizedStatus.includes("시각 지남")) return "failed";
  if (normalizedStatus.includes("실패")) return "failed";
  if (normalizedStatus.includes("발송 중") || normalizedStatus.includes("예약 중")) return "pending";
  if (normalizedStatus.includes("완료") || normalizedStatus.includes("기록됨")) return "sent";
  return "draft";
}

function getCommentButtonState(comment = "", sendStatus = "") {
  const sendState = getCommentSendState(sendStatus);
  if (sendState) return sendState;
  return normalizeMessageText(comment) ? "draft" : "empty";
}

function getCommentStatusLabel(comment = "", sendStatus = "") {
  const displayStatus = getDisplayCommentSendStatus(sendStatus);
  const sendState = getCommentSendState(displayStatus);
  if (sendState === "failed") return displayStatus || "발송 실패";
  if (sendState === "pending") return displayStatus;
  if (sendState === "sent") return displayStatus;
  return normalizeMessageText(comment) ? "작성됨 · 발송 전" : "미작성";
}

function formatNotificationJobStatus(job) {
  if (!job) return "없음";
  if (job.status === "scheduled") {
    const scheduledLabel = formatKoreaTimeLabel(job.scheduledAt);
    return isNotificationSchedulePast(job.scheduledAt)
      ? `예약 시각 지남 · 확인 필요 · ${scheduledLabel || "예약시각 없음"}`
      : `예약 중 · ${scheduledLabel}`;
  }
  if (job.status === "sent") return "발송 완료";
  if (job.status === "dry_run") return "테스트 기록";
  if (job.status === "send_unconfirmed") return `발송 확인 필요${job.error ? ` · ${job.error}` : ""}`;
  if (job.status === "pending_send") return "발송 대기";
  if (job.status === "failed") return `실패${job.error ? ` · ${job.error}` : ""}`;
  if (job.status === "canceled") return "취소";
  if (job.status === "draft") return "초안";
  return job.status || "확인 필요";
}

const deletableNotificationJobStatuses = new Set(["failed", "draft", "dry_run", "canceled"]);

function canDeleteNotificationJob(job) {
  return deletableNotificationJobStatuses.has(job?.status);
}

function canCancelNotificationJob(job) {
  return job?.status === "scheduled" && !isNotificationSchedulePast(job.scheduledAt);
}

function normalizePhoneNumber(value = "") {
  return String(value ?? "").replaceAll(/\D/g, "");
}

const today = getKoreaDateString();
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8787").replace(/\/$/, "");
const appRuntimeSessionId = `runtime_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

function apiUrl(path) {
  return `${apiBaseUrl}${path}`;
}

function getAlimtalkSafetyTone(notificationStatus, forceDryRun = false, forceTestRecipient = false) {
  if (forceDryRun || notificationStatus?.dryRun) return "safe";
  if (forceTestRecipient) return "safe";
  if (!notificationStatus) return "warning";
  if (!notificationStatus.allowRealRecipients) return "warning";
  return "danger";
}

function getAlimtalkSafetyText(notificationStatus, forceDryRun = false, forceTestRecipient = false) {
  const testRecipient = notificationStatus?.testRecipient || "테스트 번호";
  if (forceDryRun) return "테스트 발송: 실제 번호로 보내지 않고 서버에서 dry-run으로만 기록합니다.";
  if (forceTestRecipient && notificationStatus?.liveTestSendEnabled) {
    return `테스트 실발송: 실제 Solapi로 보내되 수신번호는 ${testRecipient}로 고정합니다.`;
  }
  if (forceTestRecipient) return `테스트 발송 준비: 수신번호는 ${testRecipient}로 고정되지만, Render의 테스트 실발송 스위치가 꺼져 있으면 dry-run으로만 기록됩니다.`;
  if (!notificationStatus) return "서버 발송 설정을 확인 중입니다. 실제 발송 전 Render 환경변수를 확인하세요.";
  if (notificationStatus.dryRun) return `테스트 보호 ON: 실제 발송 없이 ${testRecipient}로만 기록됩니다.`;
  if (!notificationStatus.allowRealRecipients) return `실제 번호 잠금: 등록 번호 대신 ${testRecipient}로 전환됩니다.`;
  return "실발송 모드: 등록된 실제 번호로 발송됩니다.";
}

function getAlimtalkAudienceStatus(notificationStatus, audience = "parent") {
  const allowRealRecipients = audience === "student"
    ? Boolean(notificationStatus?.allowRealStudentRecipients)
    : Boolean(notificationStatus?.allowRealParentRecipients ?? notificationStatus?.allowRealRecipients);
  return { ...(notificationStatus ?? {}), allowRealRecipients };
}

function buildNotificationTemplatePreview(type) {
  const base = {
    academyName: academyBrandName,
    assignmentStatus: "complete_thorough",
    attendanceStatus: "present",
    checkedAt: "19:00",
    lessonContent: "개별 진도 점검",
    lessonDate: getKoreaDateString(new Date()),
    lessonMaterial: "공통수학1",
    lessonName: "월수금 7-10반",
    message: "오늘 수업에서 확인한 내용을 바탕으로 다음 과제를 안내드립니다.",
    nextHomework: "쎈 - 경우의 수",
    previousHomework: "rpm 순열과 조합",
    studentName: "테스트학생"
  };

  if (type === "attendance") {
    const attendanceSample = {
      ...base,
      attendanceReason: "교통 지연",
      attendanceStatus: "late",
      checkInTime: "19:18"
    };
    return joinMessageBlocks([
      `#{학원명}: ${base.academyName}`,
      `#{학생명}: ${base.studentName}`,
      "#{출결본문}:",
      createMessageLine("🏫 출결", formatAttendanceStatusForMessage(attendanceSample)),
      createMessageLine("📘 수업", base.lessonName),
      createMessageLine("🕒 시간", attendanceSample.checkInTime)
    ]);
  }

  const commonBody = joinMessageBlocks([
    createMessageLine("🏫 출결", formatAttendanceForMessage(base)),
    createMessageLine("✅ 과제 상태", getAssignmentStatusMessage(type, base.assignmentStatus)),
    createMessageLine("📚 강의 교재", base.lessonMaterial),
    createMessageLine("🧭 강의 내용", base.lessonContent),
    createMessageLine("📘 지난 과제", base.previousHomework),
    createMessageLine("➡️ 다음 과제", base.nextHomework),
    createMessageBlock("💬 코멘트", base.message)
  ]);

  return joinMessageBlocks([
    `#{학원명}: ${base.academyName}`,
    `#{학생명}: ${base.studentName}`,
    `#{수업명}: ${base.lessonName}`,
    `#{수업일}: ${base.lessonDate}`,
    type === "parent" ? "#{리포트본문}:" : "#{코멘트}:",
    commonBody
  ]);
}

function isAttendanceOnlyRoute() {
  if (typeof window === "undefined") return false;
  return window.location.pathname === "/attendance" || window.location.hash === "#attendance";
}

function readStoredTeacherSession() {
  if (typeof window === "undefined") return null;
  return (
    parseTeacherSession(readStorageValue(window.localStorage, storageKeys.teacherSession)) ||
    parseTeacherSession(readStorageValue(window.sessionStorage, storageKeys.teacherSession)) ||
    parseTeacherSession(readCookieValue(storageKeys.teacherSession))
  );
}

function readCookieValue(name) {
  if (typeof document === "undefined") return "";
  const encodedName = `${encodeURIComponent(name)}=`;
  return document.cookie
    .split(";")
    .map((item) => item.trim())
    .find((item) => item.startsWith(encodedName))
    ?.slice(encodedName.length) ?? "";
}

function writeCookieValue(name, value) {
  if (typeof document === "undefined") return;
  document.cookie = `${encodeURIComponent(name)}=${value}; max-age=${60 * 60 * 24 * 30}; path=/; samesite=lax`;
}

function removeCookieValue(name) {
  if (typeof document === "undefined") return;
  document.cookie = `${encodeURIComponent(name)}=; max-age=0; path=/; samesite=lax`;
}

function normalizeTeacherSessionForStorage(session) {
  if (session?.role !== "teacher") return null;
  const { actorId, name, role } = session;
  return { actorId, name, role };
}

function encodeTeacherSession(session) {
  try {
    const safeSession = normalizeTeacherSessionForStorage(session);
    return safeSession ? JSON.stringify(safeSession) : "";
  } catch {
    return "";
  }
}

function parseTeacherSession(rawValue) {
  if (!rawValue) return null;
  for (const candidate of [rawValue, safeDecodeURIComponent(rawValue)]) {
    if (!candidate) continue;
    try {
      const parsed = JSON.parse(candidate);
      if (parsed?.role === "teacher") return parsed;
    } catch {
      // Try the next representation.
    }
  }
  return null;
}

function readStorageValue(storage, key) {
  try {
    return storage?.getItem(key) ?? "";
  } catch {
    return "";
  }
}

function writeStorageValue(storage, key, value) {
  try {
    storage?.setItem(key, value);
  } catch {
    // Ignore storage failures and keep the other persistence channels available.
  }
}

function removeStorageValue(storage, key) {
  try {
    storage?.removeItem(key);
  } catch {
    // Ignore storage failures and keep logout usable.
  }
}

function safeDecodeURIComponent(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return "";
  }
}

function persistTeacherSession(session) {
  if (typeof window === "undefined") return;
  const storedValue = encodeTeacherSession(session);
  if (storedValue) {
    writeStorageValue(window.localStorage, storageKeys.teacherSession, storedValue);
    writeStorageValue(window.sessionStorage, storageKeys.teacherSession, storedValue);
    writeCookieValue(storageKeys.teacherSession, encodeURIComponent(storedValue));
    return;
  }
  removeStorageValue(window.localStorage, storageKeys.teacherSession);
  removeStorageValue(window.sessionStorage, storageKeys.teacherSession);
  removeCookieValue(storageKeys.teacherSession);
}

async function postJson(path, body) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.error || "API 저장 실패");
  }
  return result;
}

function createRequestTimeoutError(timeoutMs, timeoutMessage = "") {
  const error = new Error(timeoutMessage || `요청 시간이 ${Math.round(timeoutMs / 1000)}초를 넘었습니다. 잠시 뒤 상태를 확인해 주세요.`);
  error.name = "TimeoutError";
  error.requestTimedOut = true;
  return error;
}

function isRequestTimeoutError(error) {
  return Boolean(
    error?.requestTimedOut ||
    error?.name === "TimeoutError" ||
    error?.name === "AbortError" ||
    String(error?.message ?? "").includes("시간을 넘었습니다")
  );
}

async function getJsonWithTimeout(path, timeoutMs = 12000, timeoutMessage = "") {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(apiUrl(path), {
      cache: "no-store",
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error(result.error || `API 조회 실패: ${response.status}`);
    }
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      throw createRequestTimeoutError(timeoutMs, timeoutMessage);
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function postJsonWithTimeout(path, body, timeoutMs = 30000, timeoutMessage = "") {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(apiUrl(path), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      throw new Error(result.error || "API 저장 실패");
    }
    return result;
  } catch (error) {
    if (error.name === "AbortError") {
      throw createRequestTimeoutError(timeoutMs, timeoutMessage);
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function uploadExamPostSubmissionFile(file, target, student) {
  const dataUrl = await readFileAsDataUrl(file);
  const result = await postJson("/api/exam-post-files", {
    dataUrl,
    fileName: file.name,
    fileType: file.type,
    targetId: target.targetId,
    examCycle: target.examCycle,
    schoolName: target.schoolName,
    grade: target.grade,
    subject: target.subject,
    examDate: target.examDate,
    studentId: student?.studentId,
    studentName: student?.name
  });
  return result.file;
}

function getExamPostFileOpenUrl(file) {
  if (file?.signedUrl) return file.signedUrl;
  if (!file?.storagePath) return "";
  return apiUrl(`/api/exam-post-files/open?bucket=${encodeURIComponent(file.bucketId || "exam-submissions")}&path=${encodeURIComponent(file.storagePath)}`);
}

function getExamAnalysisSourceOpenUrl(file) {
  if (file?.signedUrl) return file.signedUrl;
  if (!file?.storagePath) return "";
  return apiUrl(`/api/exam-analysis-source-files/open?bucket=${encodeURIComponent(file.bucketId || "exam-analysis-pipeline-sources")}&path=${encodeURIComponent(file.storagePath)}`);
}

function formatBytes(sizeBytes) {
  const value = Number(sizeBytes || 0);
  if (!value) return "-";
  if (value < 1024) return `${value}B`;
  if (value < 1024 * 1024) return `${Math.round(value / 1024)}KB`;
  return `${(value / 1024 / 1024).toFixed(1)}MB`;
}

function detectExamAnalysisQuestionNumberCandidates(text = "") {
  const candidates = new Set();
  const pattern = /(?:^|\n)\s*(\d{1,3})\s*[.)]/g;
  let match = pattern.exec(String(text || ""));
  while (match) {
    const number = Number(match[1]);
    if (number > 0 && number <= 200) candidates.add(number);
    match = pattern.exec(String(text || ""));
  }
  return [...candidates].sort((a, b) => a - b);
}

function buildExamAnalysisExtractionCheck(file = {}) {
  const pageRanges = Array.isArray(file.pageTextRanges) ? file.pageTextRanges : [];
  const questionNumbers = detectExamAnalysisQuestionNumberCandidates(file.extractedText);
  const maxQuestionNumber = questionNumbers.at(-1) ?? null;
  const missingQuestionNumbers = maxQuestionNumber
    ? Array.from({ length: maxQuestionNumber }, (_, index) => index + 1).filter((number) => !questionNumbers.includes(number))
    : [];
  const emptyPageNumbers = pageRanges
    .filter((page) => Number(page.textLength || 0) === 0)
    .map((page) => page.pageNumber);
  const shortPageNumbers = pageRanges
    .filter((page) => Number(page.textLength || 0) > 0 && Number(page.textLength || 0) < 80)
    .map((page) => page.pageNumber);
  const textBytes = file.extractedText ? new Blob([file.extractedText]).size : 0;
  const warnings = [
    file.extractionStatus === "extracted" && !file.extractedText ? "추출된 텍스트가 없습니다." : "",
    emptyPageNumbers.length ? `빈 페이지 ${emptyPageNumbers.join(", ")}` : "",
    shortPageNumbers.length ? `짧은 페이지 ${shortPageNumbers.join(", ")}` : "",
    file.extractionStatus === "extracted" && questionNumbers.length === 0 ? "문항번호 후보 없음" : "",
    missingQuestionNumbers.length ? `누락 후보 ${missingQuestionNumbers.join(", ")}` : ""
  ].filter(Boolean);
  return {
    textBytes,
    pageCount: file.pageCount || pageRanges.length || 0,
    questionNumbers,
    maxQuestionNumber,
    missingQuestionNumbers,
    emptyPageNumbers,
    shortPageNumbers,
    warnings,
    status: warnings.length ? "needsReview" : "ok"
  };
}

function formatExamAnalysisPageTextLengthSummary(pageRanges = []) {
  const ranges = Array.isArray(pageRanges) ? pageRanges : [];
  if (!ranges.length) return "";
  const shown = ranges
    .slice(0, 8)
    .map((page) => `${page.pageNumber}p ${Number(page.textLength || 0).toLocaleString("ko-KR")}자`)
    .join(" · ");
  return ranges.length > 8 ? `${shown} · ...` : shown;
}

function getExamAnalysisVisionCheck(run = {}, sourceId = "") {
  const check = run?.extractionSummary?.visionCheck;
  if (!check || check.sourceId !== sourceId) return null;
  return check;
}

function getExamAnalysisExtractionSummary(run = {}, sourceId = "") {
  const summary = run?.extractionSummary;
  if (!summary || summary.sourceId !== sourceId) return null;
  return summary;
}

function formatExamAnalysisEventTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.month}.${values.day} ${values.hour}:${values.minute}`;
}

function normalizeExamAnalysisPositiveNumbers(numbers = []) {
  return [...new Set((Array.isArray(numbers) ? numbers : [])
    .map(Number)
    .filter((number) => Number.isInteger(number) && number > 0 && number <= 200))]
    .sort((a, b) => a - b);
}

function getExamAnalysisQuestionBoundary(question = {}) {
  return question?.sourceEvidence?.boundary ?? null;
}

function formatExamAnalysisBoundaryPage(boundary = {}) {
  if (!boundary?.pageStart) return "페이지 확인 필요";
  if (boundary.pageEnd && boundary.pageEnd !== boundary.pageStart) {
    return `${boundary.pageStart}~${boundary.pageEnd}p`;
  }
  return `${boundary.pageStart}p`;
}

function normalizeExamAnalysisSsenCodeList(value = []) {
  return (Array.isArray(value) ? value : [])
    .map((item) => String(item ?? "").trim())
    .filter(Boolean)
    .slice(0, 3);
}

function createExamAnalysisSsenUnitKey(value = {}) {
  return [value.partName, value.unitNo, value.unitName].map((item) => String(item ?? "").trim()).join("|");
}

function createExamAnalysisReviewSsenMeta({
  catalog = {},
  mainTypeCode = "",
  subTypeCodes = []
} = {}) {
  const types = Array.isArray(catalog.types) ? catalog.types : [];
  const findType = (typeCode) => types.find((item) => item.typeCode === typeCode) ?? null;
  const mainType = findType(mainTypeCode);
  const subTypes = normalizeExamAnalysisSsenCodeList(subTypeCodes)
    .map(findType)
    .filter(Boolean);
  return {
    source: "ssen_type_index",
    matchStatus: mainType ? "matched" : "needs_mapping",
    mainType: mainType
      ? {
          subject: mainType.subject,
          typeCode: mainType.typeCode,
          partName: mainType.partName,
          unitNo: mainType.unitNo,
          unitName: mainType.unitName,
          typeNo: mainType.typeNo,
          typeName: mainType.typeName
        }
      : {},
    subTypes: subTypes.map((item) => ({
      subject: item.subject,
      typeCode: item.typeCode,
      partName: item.partName,
      unitNo: item.unitNo,
      unitName: item.unitName,
      typeNo: item.typeNo,
      typeName: item.typeName
    }))
  };
}

function enrichExamAnalysisReviewDraftWithSsenCatalog(draftValue = {}, catalog = {}) {
  if (!draftValue?.mainTypeCode) return draftValue;
  const meta = createExamAnalysisReviewSsenMeta({
    catalog,
    mainTypeCode: draftValue.mainTypeCode,
    subTypeCodes: draftValue.subTypeCodes
  });
  if (meta.matchStatus !== "matched") return draftValue;
  return {
    ...draftValue,
    unitKey: createExamAnalysisSsenUnitKey(meta.mainType),
    partName: meta.mainType.partName,
    unitNo: meta.mainType.unitNo,
    unitName: draftValue.unitName || meta.mainType.unitName,
    mainType: draftValue.mainType || meta.mainType.typeName,
    ssenMeta: meta
  };
}

function createEmptyExamAnalysisSsenCatalog() {
  return {
    subject: "",
    scope: "",
    status: "idle",
    subjectTypeCount: 0,
    scopeMatchedCount: 0,
    types: [],
    units: []
  };
}

function createExamAnalysisReviewDraft(question = {}) {
  const finalFields = question.finalFields ?? {};
  const teacherFields = question.teacherFields ?? {};
  const sourceFields = { ...question, ...teacherFields, ...finalFields };
  const subTypes = Array.isArray(sourceFields.subTypes) ? sourceFields.subTypes : [];
  const aiFields = question.aiFields ?? {};
  const ssenMeta = sourceFields.ssenMeta && typeof sourceFields.ssenMeta === "object" ? sourceFields.ssenMeta : {};
  const mainTypeMeta = ssenMeta.mainType && typeof ssenMeta.mainType === "object" ? ssenMeta.mainType : {};
  const mainTypeCode = sourceFields.mainTypeCode ?? mainTypeMeta.typeCode ?? aiFields.mainTypeCode ?? "";
  const subTypeCodes = normalizeExamAnalysisSsenCodeList(sourceFields.subTypeCodes ?? aiFields.subTypeCodes ?? []);
  const partName = sourceFields.partName ?? mainTypeMeta.partName ?? "";
  const unitNo = sourceFields.unitNo ?? mainTypeMeta.unitNo ?? "";
  const unitName = sourceFields.unitName ?? mainTypeMeta.unitName ?? "";
  return {
    unitKey: sourceFields.unitKey ?? createExamAnalysisSsenUnitKey({ partName, unitNo, unitName }),
    partName,
    unitNo,
    unitName,
    mainType: sourceFields.mainType ?? "",
    mainTypeCode,
    subTypesText: subTypes.join(", "),
    subTypeCodes,
    ssenMeta,
    difficulty: sourceFields.difficulty ?? "",
    reviewNote: sourceFields.reviewNote ?? "",
    isImportantQuestion: Boolean(sourceFields.isImportantQuestion),
    confirmed: question.rowStatus === "confirmed" || Boolean(question.confirmedAt || finalFields.confirmedAt)
  };
}

function buildExamAnalysisReviewDrafts(questions = []) {
  return Object.fromEntries(
    (Array.isArray(questions) ? questions : [])
      .filter((question) => Number.isInteger(Number(question.questionNumber)))
      .map((question) => [String(question.questionNumber), createExamAnalysisReviewDraft(question)])
  );
}

function isSameExamAnalysisReviewDraft(left = {}, right = {}) {
  return (
    String(left.unitName ?? "") === String(right.unitName ?? "") &&
    String(left.mainType ?? "") === String(right.mainType ?? "") &&
    String(left.subTypesText ?? "") === String(right.subTypesText ?? "") &&
    String(left.mainTypeCode ?? "") === String(right.mainTypeCode ?? "") &&
    normalizeExamAnalysisSsenCodeList(left.subTypeCodes).join("|") === normalizeExamAnalysisSsenCodeList(right.subTypeCodes).join("|") &&
    String(left.partName ?? "") === String(right.partName ?? "") &&
    String(left.unitNo ?? "") === String(right.unitNo ?? "") &&
    String(left.difficulty ?? "") === String(right.difficulty ?? "") &&
    String(left.reviewNote ?? "") === String(right.reviewNote ?? "") &&
    Boolean(left.isImportantQuestion) === Boolean(right.isImportantQuestion) &&
    Boolean(left.confirmed) === Boolean(right.confirmed)
  );
}

function mergeExamAnalysisReviewDraftsFromSeed(currentDrafts = {}, previousSeedDrafts = {}, nextSeedDrafts = {}) {
  return Object.fromEntries(
    Object.entries(nextSeedDrafts).map(([questionNumber, nextSeedDraft]) => {
      const currentDraft = currentDrafts[questionNumber];
      if (!currentDraft) return [questionNumber, nextSeedDraft];
      const previousSeedDraft = previousSeedDrafts[questionNumber];
      if (previousSeedDraft && isSameExamAnalysisReviewDraft(currentDraft, previousSeedDraft)) {
        return [questionNumber, nextSeedDraft];
      }
      return [questionNumber, currentDraft];
    })
  );
}

function parseExamAnalysisReviewSubTypes(value = "") {
  return String(value ?? "")
    .split(/[,，]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);
}

function isExamAnalysisQuestionAiReviewTarget(question = {}) {
  return Boolean(
    question.rowStatus === "missing" ||
    question.aiFields?.needsReview ||
    question.aiFields?.warnings?.length
  );
}

function isExamAnalysisQuestionRefineTarget(question = {}, draftValue = {}) {
  return isExamAnalysisQuestionAiReviewTarget(question);
}

const examAnalysisDifficultyOptions = ["하", "중하", "중", "중상", "상"];

function applyExamAnalysisReviewDraftsToQuestions(questions = [], reviewDrafts = {}, ssenCatalog = {}) {
  return (Array.isArray(questions) ? questions : []).map((question) => {
    const draftValue = enrichExamAnalysisReviewDraftWithSsenCatalog(reviewDrafts[String(question.questionNumber)], ssenCatalog);
    if (!draftValue) return question;
    const subTypes = parseExamAnalysisReviewSubTypes(draftValue.subTypesText);
    const fields = {
      unitName: draftValue.unitName ?? "",
      mainType: draftValue.mainType ?? "",
      subTypes,
      partName: draftValue.partName ?? "",
      unitNo: draftValue.unitNo ?? "",
      unitKey: draftValue.unitKey ?? "",
      mainTypeCode: draftValue.mainTypeCode ?? "",
      subTypeCodes: normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes),
      ssenMeta: draftValue.ssenMeta ?? {},
      difficulty: draftValue.difficulty ?? "",
      reviewNote: draftValue.reviewNote ?? "",
      isImportantQuestion: Boolean(draftValue.isImportantQuestion)
    };
    return {
      ...question,
      unitName: fields.unitName,
      mainType: fields.mainType,
      subTypes,
      difficulty: fields.difficulty,
      isImportantQuestion: fields.isImportantQuestion,
      teacherFields: {
        ...(question.teacherFields ?? {}),
        ...fields
      },
      finalFields: {
        ...(question.finalFields ?? {}),
        ...fields
      },
      rowStatus: draftValue.confirmed ? "confirmed" : question.rowStatus
    };
  });
}

function ExamAnalysisMiniDonut({ segments = [], centerLabel = "단원", ariaLabel = "출제 비중" }) {
  const visibleSegments = segments.filter((segment) => Number(segment.count || 0) > 0);
  let offset = 0;
  if (!visibleSegments.length) {
    return <div className="examAnalysisDonut empty" aria-label="데이터 없음" />;
  }
  return (
    <svg className="examAnalysisDonut" viewBox="0 0 42 42" role="img" aria-label={ariaLabel}>
      <circle className="examAnalysisDonutBase" cx="21" cy="21" r="15.9155" />
      {visibleSegments.map((segment) => {
        const dash = `${segment.percent} ${100 - segment.percent}`;
        const circle = (
          <circle
            className="examAnalysisDonutSlice"
            cx="21"
            cy="21"
            key={segment.label}
            r="15.9155"
            stroke={segment.color}
            strokeDasharray={dash}
            strokeDashoffset={-offset}
          />
        );
        offset += segment.percent;
        return circle;
      })}
      <text x="21" y="20" textAnchor="middle">{visibleSegments.length}</text>
      <text x="21" y="25" textAnchor="middle">{centerLabel}</text>
    </svg>
  );
}

function ExamAnalysisLegendList({ items = [], emptyLabel = "데이터 없음" }) {
  if (!items.length) return <div className="emptyState compact">{emptyLabel}</div>;
  return (
    <div className="examAnalysisPreviewLegend">
      {items.map((item) => (
        <span key={item.label}>
          <i style={{ backgroundColor: item.color }} />
          <b>{item.label}</b>
          <small>{item.count}문항 · {item.percent}%</small>
        </span>
      ))}
    </div>
  );
}

function ExamAnalysisBarList({ items = [], emptyLabel = "데이터 없음" }) {
  if (!items.length) return <div className="emptyState compact">{emptyLabel}</div>;
  return (
    <div className="examAnalysisPreviewBars">
      {items.map((item) => (
        <div className="examAnalysisPreviewBarRow" key={item.label}>
          <div>
            <strong>{item.label}</strong>
            <span>{item.count}문항 · {item.percent}%</span>
          </div>
          <div className="examAnalysisPreviewBarTrack">
            <span style={{ backgroundColor: item.color, width: `${Math.max(item.percent, 4)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ExamAnalysisUnitBreakdownList({ items = [] }) {
  const visibleItems = items.filter((item) => item.units?.length);
  if (!visibleItems.length) return null;
  return (
    <div className="examAnalysisUnitBreakdown">
      {visibleItems.map((part) => (
        <div key={part.label}>
          <strong>{part.label}</strong>
          <span>{part.units.map((unit) => `${unit.label} ${unit.count}`).join(" · ")}</span>
        </div>
      ))}
    </div>
  );
}

function ExamAnalysisPartDifficultyList({ items = [] }) {
  if (!items.length) return <div className="emptyState compact">난이도 데이터 없음</div>;
  return (
    <div className="examAnalysisPartDifficultyList">
      {items.map((part) => (
        <div className="examAnalysisPartDifficultyRow" key={part.label}>
          <div>
            <strong>{part.label}</strong>
            <span>{part.count}문항 · {part.percent}%</span>
          </div>
          <div className="examAnalysisStackedBar">
            {part.difficulties.map((difficulty) => (
              <span
                key={difficulty.label}
                style={{ backgroundColor: difficulty.color, width: `${Math.max(difficulty.percent, 6)}%` }}
                title={`${difficulty.label} · ${difficulty.count}문항`}
              />
            ))}
          </div>
          <small>{part.difficulties.map((difficulty) => `${difficulty.label} ${difficulty.count}`).join(" · ")}</small>
        </div>
      ))}
    </div>
  );
}

function ExamAnalysisQuestionMap({ questions = [] }) {
  if (!questions.length) return <div className="emptyState compact">문항 없음</div>;
  return (
    <div className="examAnalysisQuestionMap">
      {questions.map((question) => {
        const color = examAnalysisPreviewPalette.difficulties[question.difficulty] || examAnalysisPreviewPalette.difficulties["미정"];
        return (
          <span
            key={question.questionNumber}
            style={{ borderColor: color, backgroundColor: `${color}1a` }}
            title={[`${question.questionNumber}번`, question.unitName, question.mainType, question.difficulty].filter(Boolean).join(" · ")}
          >
            {question.questionNumber}
          </span>
        );
      })}
    </div>
  );
}

function ExamAnalysisFinalPreviewPanel({ model }) {
  if (!model?.questions?.length) {
    return (
      <div className="panel examAnalysisFinalPreviewPanel">
        <div className="sectionHeader slim">
          <div>
            <strong>최종 미리보기</strong>
            <span>검수 저장 후 표시됩니다.</span>
          </div>
        </div>
        <div className="emptyState compact">저장된 문항 검수본이 없습니다.</div>
      </div>
    );
  }

  const { meta } = model;
  return (
    <div className="panel examAnalysisFinalPreviewPanel">
      <div className="sectionHeader slim">
        <div>
          <strong>최종 미리보기</strong>
          <span>{meta.totalQuestions}문항 · {model.notes.sourceOfTruth}</span>
        </div>
      </div>
      <div className="examAnalysisPreviewHero">
        <div>
          <strong>{meta.title}</strong>
          <span>{[meta.schoolName, meta.grade, meta.examCycle, meta.subject].filter(Boolean).join(" · ") || "기본정보 없음"}</span>
          {meta.sourceFileName ? <small>PDF 원본 · {meta.sourceFileName}</small> : null}
          {meta.reviewedAt ? <small>검수 저장 · {formatExamAnalysisEventTime(meta.reviewedAt)}</small> : null}
        </div>
        <div className="examAnalysisPreviewMetricGrid">
          <span><b>{meta.totalQuestions}</b><small>문항</small></span>
          <span><b>{model.partDistribution.length}</b><small>단원</small></span>
          <span><b>{model.importantQuestions.length}</b><small>주요문항</small></span>
        </div>
      </div>

      <div className="examAnalysisPreviewGrid">
        <section className="examAnalysisPreviewCard wide">
          <div className="examAnalysisPreviewCardHeader">
            <strong>단원별 출제 비중</strong>
            <span>주요유형 breakdown</span>
          </div>
          <div className="examAnalysisPreviewDonutLayout">
            <ExamAnalysisMiniDonut segments={model.partDistribution} centerLabel="단원" ariaLabel="단원별 출제 비중" />
            <div>
              <ExamAnalysisLegendList items={model.partDistribution} />
              <ExamAnalysisUnitBreakdownList items={model.unitBreakdown} />
            </div>
          </div>
        </section>

        <section className="examAnalysisPreviewCard">
          <div className="examAnalysisPreviewCardHeader">
            <strong>난이도 분포</strong>
            <span>고정 색상</span>
          </div>
          <ExamAnalysisBarList items={model.difficultyDistribution} />
        </section>

        <section className="examAnalysisPreviewCard">
          <div className="examAnalysisPreviewCardHeader">
            <strong>단원별 난이도</strong>
            <span>검수 저장본</span>
          </div>
          <ExamAnalysisPartDifficultyList items={model.difficultyByPart} />
        </section>

        <section className="examAnalysisPreviewCard wide">
          <div className="examAnalysisPreviewCardHeader">
            <strong>문항 흐름</strong>
            <span>난이도 색상 기준</span>
          </div>
          <ExamAnalysisQuestionMap questions={model.questions} />
        </section>

        <section className="examAnalysisPreviewCard wide">
          <div className="examAnalysisPreviewCardHeader">
            <strong>주요문항</strong>
            <span>선생님 체크 저장본</span>
          </div>
          {model.importantQuestions.length ? (
            <div className="examAnalysisImportantQuestions">
              {model.importantQuestions.map((question) => (
                <article key={question.questionNumber}>
                  <strong>{question.questionNumber}번</strong>
                  <div>
                    <b>{question.mainType || "유형 미입력"}</b>
                    <span>{[question.partName, question.unitName, question.difficulty, question.pageLabel].filter(Boolean).join(" · ")}</span>
                    <small>{question.reasons?.join(" · ") || "후보"}</small>
                    {question.reviewNote ? <p>{question.reviewNote}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="emptyState compact">주요문항 선택 없음</div>
          )}
        </section>
      </div>

      <div className="examAnalysisPreviewPolicy">
        <span>난이도 수정과 저장은 위 AI 결과 검수 표에서 진행합니다.</span>
        <span>{model.notes.formulaPolicy}</span>
        <span>{model.notes.publicOutputPolicy}</span>
      </div>
    </div>
  );
}

const examAnalysisOutputInputFields = [
  {
    key: "oneLineReview",
    label: "한줄 총평",
    guide: "산출물의 첫 결론입니다. 이번 시험이 쉬웠는지 어려웠는지, 작년/중간고사/평소 모의고사 대비 체감이 어땠는지를 한 문장으로 잡아주세요.",
    placeholder: "예: 전 범위가 고르게 나왔지만, 후반부 계산 집중력과 조건 해석에서 점수가 갈린 시험이었습니다."
  },
  {
    key: "flowReview",
    label: "시험 흐름/체감",
    guide: "체감 난이도와 점수 갈림의 근거입니다. 초반-중반-후반 흐름, 어느 구간부터 시간이 걸렸는지, 점수가 갈린 위치를 문항 흐름 기준으로 적어주세요.",
    placeholder: "예: 1~10번은 기본 유형 확인에 가까웠고, 13번 이후부터 계산량과 조건 해석이 늘어나 체감 난이도가 올라갔습니다."
  },
  {
    key: "scoreGapPoint",
    label: "점수 갈림 포인트",
    guide: "변별 포인트와 실수 포인트입니다. 어디서 점수가 갈렸는지, 틀렸다면 왜 틀렸을 가능성이 큰지, 실수인지 이해 부족인지 구분해 적어주세요.",
    placeholder: "예: 익숙한 유형처럼 보여도 조건을 끝까지 정리하지 않으면 식을 잘못 세우기 쉬웠고, 중상 문항에서 풀이 순서 선택이 중요했습니다."
  },
  {
    key: "nextStudyPlan",
    label: "다음 시험 대비",
    guide: "다음 행동과 신뢰감입니다. 다음 시험까지 무엇을 해야 하는지와, 이 분석을 바탕으로 학원이 어떻게 관리할 수 있는지까지 적어주세요.",
    placeholder: "예: 단순 유형 반복보다 조건을 식으로 바꾸는 훈련, 풀이 과정 검산, 중상 난이도 문항의 시간 배분 연습이 필요합니다."
  },
  {
    key: "imageSlotNotes",
    label: "6개 슬라이드 유형/슬롯 메모",
    guide: "시작, 시험구조, 총평, 주요문항, 손풀이, 마무리 슬라이드의 제작 방식입니다. 주요문항/손풀이 이미지는 선생님이 직접 crop한 파일만 슬롯에 넣습니다.",
    placeholder: "예: 시작/시험구조/총평/마무리는 통렌더, 주요문항과 손풀이는 선생님 crop 이미지 슬롯. 주요문항 3개 기준 10장."
  },
  {
    key: "schoolVariationNotes",
    label: "학교별 변주/홍보 메모",
    guide: "학교별 출제 습관, 유사 교재, 이번 시험만의 특징, 마지막 CTA에 넣을 상담/수업 연결 문장을 적어주세요.",
    placeholder: "예: 상계고는 조건 해석과 계산량이 반복 포인트. CTA는 학교별 시험분석을 수업/보충에 반영한다는 신뢰감 중심."
  }
];

const examAnalysisBlogBlockFields = [
  {
    key: "blogBlockOpening",
    order: 1,
    type: "paragraph",
    label: "시작글/인사",
    guide: "카드뉴스 전에 들어갈 첫 문단입니다. 학교/학년/고사와 이번 분석의 목적, 한줄 체감을 적어주세요.",
    benchmark: "벤치마킹 위치: 인사말 😊 -> 시험 소개 -> 한줄 체감",
    placeholder: "예: 2026 불암중 2학년 1학기 기말고사를 기준으로, 이번 시험의 체감 난도와 내신 대비 핵심을 정리합니다."
  },
  {
    key: "blogBlockStructure",
    order: 2,
    type: "paragraph",
    label: "시험구조 설명",
    guide: "시험구조 카드 전후에 붙일 설명입니다. 객관식/서술형 수, 만점, 범위, 큰 출제 흐름을 줄글로 적어주세요.",
    benchmark: "벤치마킹 위치: 시험 구조 카드 전후 · 객관식/서술형/범위 설명",
    placeholder: "예: 객관식 24문항, 서술형 0문항, 100점 만점. 연립방정식부터 일차함수 관계까지 출제되었습니다."
  },
  {
    key: "blogBlockOverallReview",
    order: 3,
    type: "highlight",
    label: "총평/변별 포인트",
    guide: "총평 카드 전후에 붙일 핵심 해석입니다. 시험이 쉬웠는지, 어디서 점수가 갈렸는지, 왜 그렇게 봤는지 적어주세요.",
    benchmark: "벤치마킹 위치: 총평 카드 전후 · 난도/체감/점수 갈림",
    placeholder: "예: 난도가 크게 튄 시험은 아니지만, 쉬운 시험이라고 보기에는 후반부 조건 정리가 까다로웠습니다."
  },
  {
    key: "blogBlockNextStudy",
    order: 4,
    type: "paragraph",
    label: "다음 시험 준비",
    guide: "마무리 카드 전후에 붙일 학습 전략입니다. 다음 시험까지 학생이 실제로 해야 할 훈련을 구체적으로 적어주세요.",
    benchmark: "벤치마킹 위치: 다음 시험을 준비하며 · 체크리스트/훈련 방향",
    placeholder: "예: 계산 안정감, 문장제 조건 분리, 그래프 해석, 시간 배분 루틴을 같이 훈련해야 합니다."
  },
  {
    key: "blogBlockAcademyTrust",
    order: 5,
    type: "paragraph",
    label: "학원 분석 신뢰 문장",
    guide: "학원이 시험지를 어떻게 분석하고 수업/보충에 반영하는지 보여주는 문장입니다.",
    benchmark: "벤치마킹 위치: 학원 분석 방식 · 문항별 분석/관리 신뢰 문장",
    placeholder: "예: 시험지를 문항별로 분석해 어떤 개념, 유형, 실수가 연결되는지 확인합니다."
  },
  {
    key: "blogBlockCta",
    order: 6,
    type: "cta",
    label: "CTA",
    guide: "상담/블로그 유입/위치/전화 안내 메모입니다. 실제 연락처는 자리표시자로 두어도 됩니다.",
    benchmark: "벤치마킹 위치: 마무리/신청 안내 ⬇️⬇️ · 위치 📍 · 전화 ☎",
    placeholder: "예: 더 자세한 시험 해설은 블로그에서 확인, 학교별 내신 대비 상담 가능, 위치/전화 자리표시자."
  }
];

const examAnalysisOutputBenchmarkMap = [
  ["인사말", "시작글/인사 블록 -> 블로그 첫 문단"],
  ["시험 구조", "시험구조 설명 블록 -> 구조 카드 앞뒤 설명"],
  ["총평", "총평/변별 포인트 블록 -> 체감 난도와 점수 갈림"],
  ["📌 주요문항", "주요문항 반복 블록 -> 문제 카드, 설명글, 손풀이 카드"],
  ["다음 대비", "다음 시험 준비 블록 -> 훈련 체크리스트"],
  ["CTA", "CTA 블록 -> 신청 안내, 위치, 전화"]
];

const legacyExamAnalysisBlogInstructorSectionGroups = {
  blogBlockOpening: ["blogSectionOpening", "blogSectionIntroCard"],
  blogBlockStructure: ["blogSectionStructureText1", "blogSectionStructureCard", "blogSectionStructureText2"],
  blogBlockOverallReview: ["blogSectionOverallCard", "blogSectionOverallText1", "blogSectionOverallText2"],
  blogBlockNextStudy: ["blogSectionNextExam"],
  blogBlockAcademyTrust: ["blogSectionClosing1", "blogSectionClosing2", "blogSectionClosing3"],
  blogBlockCta: ["blogSectionCta"]
};

const legacyExamAnalysisKeyQuestionGroups = {
  questionMemo: ["blogBlockKeyQuestion", "blogSectionQuestion1Look", "blogSectionQuestion1Explain", "blogSectionQuestion23Pattern"],
  solutionMemo: ["blogBlockSolution", "blogSectionQuestion1SolutionCard", "blogSectionQuestion1SolutionText"]
};

const examAnalysisKeyQuestionBlockFields = [
  {
    key: "questionNumber",
    label: "문항번호",
    placeholder: "예: 9번",
    type: "input"
  },
  {
    key: "title",
    label: "카드 제목/핵심",
    placeholder: "예: 조건을 식으로 바꾸는 문항",
    type: "input"
  },
  {
    key: "questionMemo",
    label: "주요문항 설명",
    placeholder: "왜 대표 문항인지, 어떤 단원/유형인지, 학생이 어디서 흔들리는지 적어주세요.",
    type: "textarea"
  },
  {
    key: "mistakePoint",
    label: "자주 틀리는 지점",
    placeholder: "예: 2차 합격자와 최종 합격자 조건을 혼동하기 쉽습니다.",
    type: "textarea"
  },
  {
    key: "solutionMemo",
    label: "손풀이 설명",
    placeholder: "정답보다 풀이 순서, 조건 정리, 다음 훈련 방향을 적어주세요.",
    type: "textarea"
  },
  {
    key: "imageSlotMemo",
    label: "이미지 슬롯 메모",
    placeholder: "예: 문제 crop 1장, 손풀이 crop 1장 사용. 이미지는 선생님이 직접 crop.",
    type: "textarea"
  }
];

const examAnalysisOutputAllInputFields = [
  ...examAnalysisOutputInputFields,
  ...examAnalysisBlogBlockFields
];

const examAnalysisOutputEditorialChecklist = [
  "이번 시험이 쉬웠는지 어려웠는지",
  "어디서 점수가 갈렸는지",
  "우리 아이가 틀렸다면 왜 틀렸을 가능성이 큰지",
  "다음 시험까지 뭘 해야 하는지",
  "이 학원이 학교 시험을 제대로 분석하고 있다는 신뢰감"
];

const examAnalysisOutputAiBoundaryRules = [
  "AI 가능: 이모티콘 위치, 문단 줄나눔, 형광펜 태그, 문체 다듬기, 카드 문구 압축",
  "AI 가능: 선생님 메모를 학부모가 읽기 쉬운 블로그 문장과 인스타 카드 문장으로 재구성",
  "AI 불가: 문항 수, 시험 범위, 문항번호, 유사문항, 정답/풀이 사실을 추측해서 새로 만들기",
  "AI 불가: 선생님 저장본을 자동으로 덮어쓰기, Canva 실제 레이아웃을 확인 없이 완료 처리하기"
];

function createEmptyExamAnalysisKeyQuestionBlock(index = 1) {
  return {
    blockId: `key-question-${index}`,
    questionNumber: "",
    title: "",
    questionMemo: "",
    mistakePoint: "",
    solutionMemo: "",
    imageSlotMemo: ""
  };
}

function normalizeExamAnalysisKeyQuestionBlock(block = {}, index = 0) {
  const empty = createEmptyExamAnalysisKeyQuestionBlock(index + 1);
  const blockId = String(block.blockId || empty.blockId || `key-question-${index + 1}`).trim();
  return {
    ...empty,
    blockId,
    questionNumber: String(block.questionNumber ?? ""),
    title: String(block.title ?? ""),
    questionMemo: String(block.questionMemo ?? ""),
    mistakePoint: String(block.mistakePoint ?? ""),
    solutionMemo: String(block.solutionMemo ?? ""),
    imageSlotMemo: String(block.imageSlotMemo ?? "")
  };
}

function getExamAnalysisKeyQuestionBlockHasContent(block = {}) {
  return examAnalysisKeyQuestionBlockFields.some((field) => String(block[field.key] || "").trim());
}

function getLegacyExamAnalysisKeyQuestionText(inputs = {}, keys = []) {
  return keys
    .map((key) => String(inputs?.[key] || "").trim())
    .filter(Boolean)
    .join("\n");
}

function normalizeExamAnalysisKeyQuestionBlocks(inputs = {}) {
  if (Array.isArray(inputs.keyQuestionBlocks) && inputs.keyQuestionBlocks.length) {
    return inputs.keyQuestionBlocks.map(normalizeExamAnalysisKeyQuestionBlock);
  }
  const legacyQuestionMemo = getLegacyExamAnalysisKeyQuestionText(inputs, legacyExamAnalysisKeyQuestionGroups.questionMemo);
  const legacySolutionMemo = getLegacyExamAnalysisKeyQuestionText(inputs, legacyExamAnalysisKeyQuestionGroups.solutionMemo);
  const legacyBlock = {
    ...createEmptyExamAnalysisKeyQuestionBlock(1),
    questionMemo: legacyQuestionMemo,
    solutionMemo: legacySolutionMemo
  };
  return [normalizeExamAnalysisKeyQuestionBlock(legacyBlock, 0)];
}

function createEmptyExamAnalysisOutputDrafts() {
  return {
    inputs: {
      visibility: "blog_instagram",
      oneLineReview: "",
      flowReview: "",
      scoreGapPoint: "",
      nextStudyPlan: "",
      imageSlotNotes: "",
      schoolVariationNotes: "",
      ...Object.fromEntries(examAnalysisBlogBlockFields.map((field) => [field.key, ""])),
      keyQuestionBlocks: [createEmptyExamAnalysisKeyQuestionBlock(1)]
    },
    blog: {
      aiDraft: "",
      teacherDraft: "",
      status: "",
      provider: "",
      model: "",
      generatedAt: "",
      teacherUpdatedAt: "",
      updatedAt: "",
      teacherTouched: false
    },
    instagram: {
      aiDraft: "",
      teacherDraft: "",
      status: "",
      provider: "",
      model: "",
      generatedAt: "",
      teacherUpdatedAt: "",
      updatedAt: "",
      teacherTouched: false
    }
  };
}

function migrateLegacyExamAnalysisBlogSectionInputs(inputs = {}) {
  const nextInputs = { ...(inputs && typeof inputs === "object" ? inputs : {}) };
  Object.entries(legacyExamAnalysisBlogInstructorSectionGroups).forEach(([targetKey, legacyKeys]) => {
    if (String(nextInputs[targetKey] || "").trim()) return;
    const legacyText = legacyKeys
      .map((legacyKey) => String(inputs?.[legacyKey] || "").trim())
      .filter(Boolean)
      .join("\n");
    if (legacyText) nextInputs[targetKey] = legacyText;
  });
  return nextInputs;
}

function normalizeExamAnalysisOutputDraftSection(section = {}) {
  return {
    aiDraft: String(section.aiDraft ?? ""),
    teacherDraft: String(section.teacherDraft ?? ""),
    status: String(section.status ?? ""),
    provider: String(section.provider ?? ""),
    model: String(section.model ?? ""),
    generatedAt: String(section.generatedAt ?? ""),
    teacherUpdatedAt: String(section.teacherUpdatedAt ?? ""),
    updatedAt: String(section.updatedAt ?? ""),
    teacherTouched: Boolean(section.teacherTouched)
  };
}

function getExamAnalysisOutputDraftsFromRun(run = {}) {
  const stored = run?.auditSummary?.outputDrafts && typeof run.auditSummary.outputDrafts === "object"
    ? run.auditSummary.outputDrafts
    : {};
  const empty = createEmptyExamAnalysisOutputDrafts();
  const storedInputs = migrateLegacyExamAnalysisBlogSectionInputs(stored.inputs ?? {});
  return {
    inputs: {
      ...empty.inputs,
      ...(storedInputs && typeof storedInputs === "object" ? storedInputs : {}),
      keyQuestionBlocks: normalizeExamAnalysisKeyQuestionBlocks(storedInputs)
    },
    blog: normalizeExamAnalysisOutputDraftSection(stored.blog ?? {}),
    instagram: normalizeExamAnalysisOutputDraftSection(stored.instagram ?? {})
  };
}

function getExamAnalysisOutputSectionText(section = {}) {
  return section.teacherTouched || section.teacherUpdatedAt || section.teacherDraft
    ? section.teacherDraft
    : section.aiDraft || "";
}

function getExamAnalysisOutputSectionLabel(section = {}) {
  if (section.teacherTouched || section.teacherUpdatedAt || section.teacherDraft) return "선생님 수정본 우선";
  if (section.aiDraft) return "AI 초안";
  return "초안 없음";
}

function getExamAnalysisOutputLastSavedAt(outputDrafts = {}) {
  return [
    outputDrafts.inputs?.updatedAt,
    outputDrafts.blog?.teacherUpdatedAt,
    outputDrafts.blog?.generatedAt,
    outputDrafts.blog?.updatedAt,
    outputDrafts.instagram?.teacherUpdatedAt,
    outputDrafts.instagram?.generatedAt,
    outputDrafts.instagram?.updatedAt
  ]
    .map((value) => String(value || ""))
    .filter(Boolean)
    .sort()
    .at(-1) || "";
}

function mergeExamAnalysisOutputSectionPreservingLocalEdits(nextSection = {}, localSection = {}) {
  if (!localSection?.teacherTouched) return nextSection;
  return {
    ...nextSection,
    teacherDraft: localSection.teacherDraft ?? "",
    teacherTouched: true,
    teacherUpdatedAt: localSection.teacherUpdatedAt || nextSection.teacherUpdatedAt || "",
    updatedAt: nextSection.updatedAt || localSection.updatedAt || ""
  };
}

function mergeExamAnalysisOutputDraftsPreservingLocalEdits(nextDrafts = {}, localDrafts = {}) {
  return {
    ...nextDrafts,
    inputs: {
      ...(nextDrafts.inputs ?? {}),
      ...(localDrafts.inputs ?? {})
    },
    blog: mergeExamAnalysisOutputSectionPreservingLocalEdits(nextDrafts.blog ?? {}, localDrafts.blog ?? {}),
    instagram: mergeExamAnalysisOutputSectionPreservingLocalEdits(nextDrafts.instagram ?? {}, localDrafts.instagram ?? {})
  };
}

function getExamAnalysisOutputInputCount(inputs = {}) {
  const regularInputCount = examAnalysisOutputAllInputFields.filter((field) => String(inputs[field.key] || "").trim()).length;
  const keyQuestionInputCount = (inputs.keyQuestionBlocks ?? []).filter(getExamAnalysisKeyQuestionBlockHasContent).length;
  return regularInputCount + keyQuestionInputCount;
}

function getExamAnalysisOutputInputTotal(inputs = {}) {
  const keyQuestionBlocks = Array.isArray(inputs.keyQuestionBlocks) && inputs.keyQuestionBlocks.length
    ? inputs.keyQuestionBlocks
    : [createEmptyExamAnalysisKeyQuestionBlock(1)];
  return examAnalysisOutputAllInputFields.length + keyQuestionBlocks.length;
}

function sanitizeExamAnalysisOutputFileNamePart(value = "") {
  return String(value || "")
    .trim()
    .replace(/[\\/:*?"<>|]/g, " ")
    .replace(/\s+/g, " ")
    .slice(0, 60)
    .trim() || "시험분석";
}

function createExamAnalysisOutputExportFileName(activeRun = {}, outputType = "blog") {
  const mediaLabel = outputType === "instagram" ? "instagram-card" : "blog";
  const title = sanitizeExamAnalysisOutputFileNamePart([
    activeRun.schoolName,
    activeRun.grade,
    activeRun.examCycle || activeRun.examTerm,
    activeRun.subject
  ].filter(Boolean).join(" "));
  return `${title}-${mediaLabel}-draft.txt`;
}

function downloadExamAnalysisOutputTextFile({ activeRun, outputType, text }) {
  const value = String(text || "").trim();
  if (!value) return false;
  const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = createExamAnalysisOutputExportFileName(activeRun, outputType);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return true;
}

function downloadBlobFile(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function escapeExamAnalysisSvgText(value = "") {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function truncateExamAnalysisChartLabel(value = "", maxLength = 24) {
  const text = String(value || "").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}...` : text;
}

const examAnalysisChartPngExportScale = 3;
const examAnalysisChartFooterLabel = "으뜸수학학원 고태영T 시험분석";
const examAnalysisChartDifficultyOrder = ["하", "중하", "중", "중상", "상", "미정"];
const examAnalysisCardNewsSlideTypes = [
  { type: "cover", label: "시작 슬라이드" },
  { type: "examStructure", label: "시험구조 슬라이드" },
  { type: "overallReview", label: "총평 슬라이드" },
  { type: "keyQuestion", label: "주요문항 슬라이드" },
  { type: "solution", label: "손풀이 슬라이드" },
  { type: "closing", label: "마무리 슬라이드" }
];
function createExamAnalysisCardNewsModel(keyQuestionBlocks = [createEmptyExamAnalysisKeyQuestionBlock(1)]) {
  const questionBlocks = Array.isArray(keyQuestionBlocks) && keyQuestionBlocks.length
    ? keyQuestionBlocks
    : [createEmptyExamAnalysisKeyQuestionBlock(1)];
  const slides = [
    { type: "cover", role: "시작 슬라이드", renderMode: "통렌더", slot: "학교/학년/고사/과목 + 한줄 훅" },
    { type: "examStructure", role: "시험구조 슬라이드", renderMode: "통렌더", slot: "객관식/서술형/만점/범위/출제 흐름" },
    { type: "overallReview", role: "총평 슬라이드", renderMode: "통렌더", slot: "난도/점수 갈림/실수 포인트/고득점 전략" },
    ...questionBlocks.flatMap((block, index) => ([
      {
        type: "keyQuestion",
        role: `주요문항 ${index + 1} 슬라이드`,
        renderMode: "문제 이미지 슬롯",
        keyQuestionIndex: index,
        keyQuestionBlockId: block.blockId || `key-question-${index + 1}`,
        questionNumber: block.questionNumber || "",
        slot: `${block.questionNumber ? `${block.questionNumber} ` : ""}선생님 crop 문제 이미지 + 왜 중요한지`
      },
      {
        type: "solution",
        role: `손풀이 ${index + 1} 슬라이드`,
        renderMode: "손풀이 이미지 슬롯",
        keyQuestionIndex: index,
        keyQuestionBlockId: block.blockId || `key-question-${index + 1}`,
        questionNumber: block.questionNumber || "",
        slot: `${block.questionNumber ? `${block.questionNumber} ` : ""}선생님 crop 손풀이 이미지 + 풀이 흐름`
      }
    ])),
    { type: "closing", role: "마무리 슬라이드", renderMode: "통렌더", slot: "다음 시험 대비 + 블로그 유입/상담 CTA" }
  ];
  return slides.map((slide, index) => ({
    ...slide,
    card: index + 1,
    suggestedSource: `cards/card-${String(index + 1).padStart(2, "0")}.png`
  }));
}

const examAnalysisCardNewsModel = createExamAnalysisCardNewsModel();
const examAnalysisCanvaCardPlan = examAnalysisCardNewsModel;

function getExamAnalysisChartPartLabel(question = {}) {
  return String(question.partName || question.unitName || "미입력").trim() || "미입력";
}

function countExamAnalysisChartLabels(values = []) {
  const counts = new Map();
  values
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label, "ko"));
}

function createExamAnalysisPartInsightRows(model = {}) {
  const difficultyByPart = new Map((model.difficultyByPart ?? []).map((part) => [part.label, part]));
  return (model.partDistribution ?? [])
    .filter((item) => Number(item.count || 0) > 0)
    .slice(0, 6)
    .map((part) => {
      const partQuestions = (model.questions ?? []).filter((question) => getExamAnalysisChartPartLabel(question) === part.label);
      const fallbackDifficultyCounts = countExamAnalysisChartLabels(partQuestions.map((question) => question.difficulty));
      const fallbackDifficulties = examAnalysisChartDifficultyOrder
        .map((label) => ({
          label,
          count: fallbackDifficultyCounts.find((item) => item.label === label)?.count || 0,
          percent: partQuestions.length ? Math.round(((fallbackDifficultyCounts.find((item) => item.label === label)?.count || 0) / partQuestions.length) * 1000) / 10 : 0,
          color: examAnalysisPreviewPalette.difficulties[label] || examAnalysisPreviewPalette.difficulties["미정"]
        }))
        .filter((item) => item.count > 0);
      const difficultyMeta = difficultyByPart.get(part.label);
      return {
        ...part,
        difficulties: difficultyMeta?.difficulties?.length ? difficultyMeta.difficulties : fallbackDifficulties,
        mainTypes: countExamAnalysisChartLabels(partQuestions.map((question) => question.mainType)).slice(0, 3)
      };
    });
}

function createExamAnalysisChartSvgShell({ title, subtitle, width = 1200, height = 675, body = "" }) {
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    `<rect width="${width}" height="${height}" rx="28" fill="#ffffff"/>`,
    `<rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="24" fill="#f8fbff" stroke="#bfdbfe" stroke-width="2"/>`,
    `<style>text{font-family:'Malgun Gothic','Apple SD Gothic Neo',Arial,sans-serif;letter-spacing:0}.title{fill:#17213d;font-size:36px;font-weight:900}.subtitle{fill:#64748b;font-size:19px;font-weight:800}.label{fill:#17213d;font-size:20px;font-weight:900}.muted{fill:#64748b;font-size:17px;font-weight:800}.small{fill:#64748b;font-size:15px;font-weight:800}.num{fill:#17213d;font-size:22px;font-weight:900}</style>`,
    `<text class="title" x="64" y="78">${escapeExamAnalysisSvgText(title)}</text>`,
    subtitle ? `<text class="subtitle" x="64" y="112">${escapeExamAnalysisSvgText(subtitle)}</text>` : "",
    body,
    `<text class="small" x="${width - 64}" y="${height - 42}" text-anchor="end">${escapeExamAnalysisSvgText(examAnalysisChartFooterLabel)}</text>`,
    `</svg>`
  ].filter(Boolean).join("");
}

function createExamAnalysisPartDistributionSvg(model = {}) {
  const width = 1200;
  const height = 675;
  const segments = createExamAnalysisPartInsightRows(model);
  const total = segments.reduce((sum, item) => sum + Number(item.count || 0), 0);
  const cx = 255;
  const cy = 380;
  const r = 132;
  const strokeWidth = 70;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const slices = segments.map((segment) => {
    const ratio = total ? Number(segment.count || 0) / total : 0;
    const dash = ratio * circumference;
    const gap = circumference - dash;
    const circle = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${segment.color}" stroke-width="${strokeWidth}" stroke-dasharray="${dash} ${gap}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})"/>`;
    offset += dash;
    return circle;
  }).join("");
  const detailRows = segments.map((segment, index) => {
    const x = 480;
    const y = 176 + index * 92;
    const difficultyText = segment.difficulties?.length
      ? segment.difficulties.map((difficulty) => `${difficulty.label} ${difficulty.count}`).join(" · ")
      : "난이도 미입력";
    const mainTypeText = segment.mainTypes?.length
      ? segment.mainTypes.map((type) => `${truncateExamAnalysisChartLabel(type.label, 16)} ${type.count}`).join(" · ")
      : "대표유형 미입력";
    let barX = x + 350;
    const barWidth = 260;
    const bars = (segment.difficulties ?? []).map((difficulty) => {
      const widthValue = Math.max(12, (Number(difficulty.count || 0) / Math.max(1, Number(segment.count || 0))) * barWidth);
      const rect = `<rect x="${barX}" y="${y + 53}" width="${widthValue}" height="16" rx="8" fill="${difficulty.color}"/>`;
      barX += widthValue;
      return rect;
    }).join("");
    return [
      `<rect x="${x}" y="${y}" width="650" height="80" rx="18" fill="#ffffff" stroke="#dbeafe"/>`,
      `<circle cx="${x + 30}" cy="${y + 29}" r="10" fill="${segment.color}"/>`,
      `<text class="label" x="${x + 54}" y="${y + 31}">${escapeExamAnalysisSvgText(truncateExamAnalysisChartLabel(segment.label, 14))}</text>`,
      `<text class="muted" x="${x + 616}" y="${y + 31}" text-anchor="end">${segment.count}문항 · ${segment.percent}%</text>`,
      `<text class="small" x="${x + 54}" y="${y + 57}">대표유형: ${escapeExamAnalysisSvgText(mainTypeText)}</text>`,
      `<text class="small" x="${x + 54}" y="${y + 76}">난이도: ${escapeExamAnalysisSvgText(difficultyText)}</text>`,
      `<rect x="${x + 350}" y="${y + 53}" width="${barWidth}" height="16" rx="8" fill="#eaf1fb"/>`,
      bars
    ].join("");
  }).join("");
  const body = [
    `<circle cx="${cx}" cy="${cy}" r="${r + strokeWidth / 2}" fill="#eff6ff"/>`,
    slices,
    `<circle cx="${cx}" cy="${cy}" r="${r - strokeWidth / 2 + 4}" fill="#ffffff"/>`,
    `<text class="title" x="${cx}" y="${cy - 8}" text-anchor="middle">${segments.length}</text>`,
    `<text class="muted" x="${cx}" y="${cy + 26}" text-anchor="middle">단원</text>`,
    `<text class="small" x="${cx}" y="${cy + 56}" text-anchor="middle">${total}문항 기준</text>`,
    detailRows || `<text class="muted" x="500" y="240">단원 데이터 없음</text>`
  ].join("");
  return {
    key: "part-distribution",
    label: "단원별 출제 비중",
    fileName: "01-part-distribution.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "단원별 출제 비중",
      subtitle: "문항 비중 · 단원별 난이도 · 대표 주요유형",
      width,
      height,
      body
    })
  };
}

function createExamAnalysisDifficultyDistributionSvg(model = {}) {
  const width = 1200;
  const height = 675;
  const items = model.difficultyDistribution ?? [];
  const maxCount = Math.max(1, ...items.map((item) => Number(item.count || 0)));
  const rows = items.length ? items : [{ label: "데이터 없음", count: 0, percent: 0, color: "#cbd5e1" }];
  const body = rows.map((item, index) => {
    const y = 190 + index * 82;
    const barWidth = Math.max(24, (Number(item.count || 0) / maxCount) * 760);
    return [
      `<text class="label" x="94" y="${y}">${escapeExamAnalysisSvgText(item.label)}</text>`,
      `<text class="muted" x="1080" y="${y}" text-anchor="end">${item.count}문항 · ${item.percent}%</text>`,
      `<rect x="240" y="${y - 25}" width="780" height="28" rx="14" fill="#eaf1fb"/>`,
      `<rect x="240" y="${y - 25}" width="${barWidth}" height="28" rx="14" fill="${item.color}"/>`
    ].join("");
  }).join("");
  return {
    key: "difficulty-distribution",
    label: "난이도 분포",
    fileName: "02-difficulty-distribution.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "난이도 분포",
      subtitle: "하 · 중하 · 중 · 중상 · 상 고정 색상",
      width,
      height,
      body
    })
  };
}

function createExamAnalysisPartDifficultySvg(model = {}) {
  const width = 1200;
  const items = (model.difficultyByPart ?? []).slice(0, 7);
  const height = Math.max(675, 185 + items.length * 84 + 80);
  const rows = items.length ? items : [{ label: "데이터 없음", count: 0, percent: 0, difficulties: [] }];
  const body = rows.map((part, index) => {
    const y = 178 + index * 84;
    let x = 310;
    const segments = part.difficulties?.length ? part.difficulties : [{ label: "미정", count: 0, percent: 100, color: "#cbd5e1" }];
    const bars = segments.map((difficulty) => {
      const widthValue = Math.max(16, difficulty.percent * 7.6);
      const rect = `<rect x="${x}" y="${y - 25}" width="${widthValue}" height="28" rx="14" fill="${difficulty.color}"/>`;
      x += widthValue;
      return rect;
    }).join("");
    return [
      `<text class="label" x="94" y="${y}">${escapeExamAnalysisSvgText(truncateExamAnalysisChartLabel(part.label, 14))}</text>`,
      `<text class="muted" x="1080" y="${y}" text-anchor="end">${part.count}문항 · ${part.percent}%</text>`,
      `<rect x="310" y="${y - 25}" width="760" height="28" rx="14" fill="#eaf1fb"/>`,
      bars,
      `<text class="small" x="310" y="${y + 28}">${escapeExamAnalysisSvgText(segments.map((difficulty) => `${difficulty.label} ${difficulty.count}`).join(" · "))}</text>`
    ].join("");
  }).join("");
  return {
    key: "part-difficulty",
    label: "단원별 난이도",
    fileName: "03-part-difficulty.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "단원별 난이도",
      subtitle: "단원마다 난이도 분포를 누적 막대로 표시",
      width,
      height,
      body
    })
  };
}

function createExamAnalysisQuestionFlowSvg(model = {}) {
  const width = 1200;
  const questions = model.questions ?? [];
  const columns = 10;
  const cellWidth = 96;
  const cellHeight = 62;
  const gap = 12;
  const rows = Math.max(1, Math.ceil(questions.length / columns));
  const height = Math.max(675, 170 + rows * (cellHeight + gap) + 96);
  const body = questions.length ? questions.map((question, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = 78 + col * (cellWidth + gap);
    const y = 164 + row * (cellHeight + gap);
    const color = examAnalysisPreviewPalette.difficulties[question.difficulty] || examAnalysisPreviewPalette.difficulties["미정"];
    return [
      `<rect x="${x}" y="${y}" width="${cellWidth}" height="${cellHeight}" rx="18" fill="${color}22" stroke="${color}" stroke-width="3"/>`,
      `<text class="num" x="${x + 20}" y="${y + 34}">${question.questionNumber}</text>`,
      `<text class="small" x="${x + cellWidth - 16}" y="${y + 34}" text-anchor="end">${escapeExamAnalysisSvgText(question.difficulty || "미정")}</text>`
    ].join("");
  }).join("") : `<text class="muted" x="78" y="210">문항 흐름 데이터 없음</text>`;
  return {
    key: "question-flow",
    label: "문항 흐름",
    fileName: "03-question-flow.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "문항 흐름",
      subtitle: "문항 번호 순서대로 난이도 색상을 표시",
      width,
      height,
      body
    })
  };
}

function createExamAnalysisChartSvgAssets(model = {}) {
  if (!model?.questions?.length) return [];
  return [
    createExamAnalysisPartDistributionSvg(model),
    createExamAnalysisDifficultyDistributionSvg(model),
    createExamAnalysisQuestionFlowSvg(model)
  ];
}

function createExamAnalysisChartSvgFiles(model = {}) {
  return createExamAnalysisChartSvgAssets(model).map((asset) => ({
    name: `charts-svg/${asset.fileName.replace(/\.png$/i, ".svg")}`,
    text: asset.svg,
    label: `${asset.label} SVG`
  }));
}

function convertExamAnalysisSvgToPngBlob(asset) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const svgBlob = new Blob([asset.svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = asset.width * examAnalysisChartPngExportScale;
        canvas.height = asset.height * examAnalysisChartPngExportScale;
        const context = canvas.getContext("2d");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          URL.revokeObjectURL(url);
          if (blob) resolve(blob);
          else reject(new Error("차트 PNG 생성에 실패했습니다."));
        }, "image/png");
      } catch (error) {
        URL.revokeObjectURL(url);
        reject(error);
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("차트 SVG를 이미지로 변환하지 못했습니다."));
    };
    image.src = url;
  });
}

async function createExamAnalysisChartPngFiles(model = {}) {
  const assets = createExamAnalysisChartSvgAssets(model);
  const files = [];
  for (const asset of assets) {
    const blob = await convertExamAnalysisSvgToPngBlob(asset);
    files.push({
      name: `charts/${asset.fileName}`,
      blob,
      label: asset.label
    });
  }
  return files;
}

let examAnalysisZipCrcTable = null;

function getExamAnalysisZipCrcTable() {
  if (examAnalysisZipCrcTable) return examAnalysisZipCrcTable;
  examAnalysisZipCrcTable = new Uint32Array(256);
  for (let index = 0; index < 256; index += 1) {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) {
      value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    }
    examAnalysisZipCrcTable[index] = value >>> 0;
  }
  return examAnalysisZipCrcTable;
}

function getExamAnalysisZipCrc32(bytes) {
  const table = getExamAnalysisZipCrcTable();
  let crc = 0xffffffff;
  for (let index = 0; index < bytes.length; index += 1) {
    crc = table[(crc ^ bytes[index]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeExamAnalysisZipUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function writeExamAnalysisZipUint32(view, offset, value) {
  view.setUint32(offset, value >>> 0, true);
}

function getExamAnalysisZipDosDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear());
  const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosDate, dosTime };
}

async function getExamAnalysisZipFileBytes(file) {
  if (file.blob instanceof Blob) return new Uint8Array(await file.blob.arrayBuffer());
  return new TextEncoder().encode(String(file.text ?? ""));
}

async function createExamAnalysisZipBlob(files = []) {
  const encoder = new TextEncoder();
  const now = getExamAnalysisZipDosDateTime();
  const chunks = [];
  const centralChunks = [];
  let offset = 0;

  for (const file of files) {
    const safeName = String(file.name || "file.txt").replace(/\\/g, "/");
    const nameBytes = encoder.encode(safeName);
    const dataBytes = await getExamAnalysisZipFileBytes(file);
    const crc = getExamAnalysisZipCrc32(dataBytes);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    writeExamAnalysisZipUint32(localView, 0, 0x04034b50);
    writeExamAnalysisZipUint16(localView, 4, 20);
    writeExamAnalysisZipUint16(localView, 6, 0x0800);
    writeExamAnalysisZipUint16(localView, 8, 0);
    writeExamAnalysisZipUint16(localView, 10, now.dosTime);
    writeExamAnalysisZipUint16(localView, 12, now.dosDate);
    writeExamAnalysisZipUint32(localView, 14, crc);
    writeExamAnalysisZipUint32(localView, 18, dataBytes.length);
    writeExamAnalysisZipUint32(localView, 22, dataBytes.length);
    writeExamAnalysisZipUint16(localView, 26, nameBytes.length);
    writeExamAnalysisZipUint16(localView, 28, 0);
    localHeader.set(nameBytes, 30);
    chunks.push(localHeader, dataBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    writeExamAnalysisZipUint32(centralView, 0, 0x02014b50);
    writeExamAnalysisZipUint16(centralView, 4, 20);
    writeExamAnalysisZipUint16(centralView, 6, 20);
    writeExamAnalysisZipUint16(centralView, 8, 0x0800);
    writeExamAnalysisZipUint16(centralView, 10, 0);
    writeExamAnalysisZipUint16(centralView, 12, now.dosTime);
    writeExamAnalysisZipUint16(centralView, 14, now.dosDate);
    writeExamAnalysisZipUint32(centralView, 16, crc);
    writeExamAnalysisZipUint32(centralView, 20, dataBytes.length);
    writeExamAnalysisZipUint32(centralView, 24, dataBytes.length);
    writeExamAnalysisZipUint16(centralView, 28, nameBytes.length);
    writeExamAnalysisZipUint16(centralView, 30, 0);
    writeExamAnalysisZipUint16(centralView, 32, 0);
    writeExamAnalysisZipUint16(centralView, 34, 0);
    writeExamAnalysisZipUint16(centralView, 36, 0);
    writeExamAnalysisZipUint32(centralView, 38, 0);
    writeExamAnalysisZipUint32(centralView, 42, offset);
    centralHeader.set(nameBytes, 46);
    centralChunks.push(centralHeader);
    offset += localHeader.length + dataBytes.length;
  }

  const centralSize = centralChunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const endHeader = new Uint8Array(22);
  const endView = new DataView(endHeader.buffer);
  writeExamAnalysisZipUint32(endView, 0, 0x06054b50);
  writeExamAnalysisZipUint16(endView, 4, 0);
  writeExamAnalysisZipUint16(endView, 6, 0);
  writeExamAnalysisZipUint16(endView, 8, files.length);
  writeExamAnalysisZipUint16(endView, 10, files.length);
  writeExamAnalysisZipUint32(endView, 12, centralSize);
  writeExamAnalysisZipUint32(endView, 16, offset);
  writeExamAnalysisZipUint16(endView, 20, 0);
  return new Blob([...chunks, ...centralChunks, endHeader], { type: "application/zip" });
}

function getExamAnalysisOutputCardPlan(outputDrafts = {}) {
  return createExamAnalysisCardNewsModel(outputDrafts?.inputs?.keyQuestionBlocks);
}

function createExamAnalysisPackageReadme({ activeRun = {}, outputDrafts = {}, chartFiles = [] } = {}) {
  const canvaCardPlan = getExamAnalysisOutputCardPlan(outputDrafts);
  return [
    "으뜸수학학원 고태영T 시험분석 산출물 패키지",
    "",
    "사용 방법",
    "1. texts/blog-draft.txt 내용을 네이버 블로그 에디터에 붙여넣고 문장을 최종 수정합니다.",
    "2. texts/instagram-card-draft.txt 내용을 Canva 카드뉴스 문구로 사용합니다.",
    `3. charts 폴더의 PNG 이미지는 ${examAnalysisChartPngExportScale}배 해상도 고화질 이미지입니다. 통렌더 카드의 재료 또는 네이버 블로그 보조 이미지로 사용합니다.`,
    "4. texts/canva-10-card-plan.txt 기준으로 6개 슬라이드 유형과 주요문항 반복 구조를 확인합니다.",
    "5. texts/blog-block-guide.txt 기준으로 블로그 블록 조립 순서를 확인합니다.",
    "6. charts-svg 폴더의 SVG 원본은 PPT/Canva에서 더 선명한 원본이 필요할 때 사용합니다.",
    "7. 외부 에디터에서 수정한 최종본은 현재 앱으로 자동 동기화되지 않습니다.",
    "",
    `카드뉴스 구조 (${canvaCardPlan.length}장)`,
    canvaCardPlan.map((item) => `${item.card}. ${item.role} [${item.renderMode}] - ${item.slot}`).join("\n"),
    "",
    "포함 차트",
    chartFiles.length ? chartFiles.map((file) => `- ${file.name}`).join("\n") : "- 차트 없음",
    "",
    `분석: ${[activeRun.schoolName, activeRun.grade, activeRun.examCycle || activeRun.examTerm, activeRun.subject].filter(Boolean).join(" · ") || "시험분석"}`,
    `생성 시각: ${new Date().toISOString()}`
  ].join("\n");
}

function createExamAnalysisPackageManifest({ activeRun = {}, outputDrafts = {}, chartFiles = [] } = {}) {
  return JSON.stringify({
    generatedAt: new Date().toISOString(),
    analysisRunId: activeRun.analysisRunId || "",
    title: activeRun.title || "",
    schoolName: activeRun.schoolName || "",
    grade: activeRun.grade || "",
    examCycle: activeRun.examCycle || activeRun.examTerm || "",
    subject: activeRun.subject || "",
    sourceOfTruth: "exam_analysis_runs.audit_summary.outputDrafts + final preview model",
    texts: {
      blog: "texts/blog-draft.txt",
      instagram: "texts/instagram-card-draft.txt",
      blogBlockGuide: "texts/blog-block-guide.txt",
      canvaCardPlan: "texts/canva-10-card-plan.txt"
    },
    charts: chartFiles.map((file) => ({
      label: file.label,
      path: file.name
    })),
    chartSourceFiles: "charts-svg/*.svg",
    imageQuality: {
      pngScale: examAnalysisChartPngExportScale,
      policy: "용량보다 선명도 우선"
    },
    canvaSlots: getExamAnalysisOutputCardPlan(outputDrafts),
    draftStatus: {
      blog: getExamAnalysisOutputSectionLabel(outputDrafts.blog),
      instagram: getExamAnalysisOutputSectionLabel(outputDrafts.instagram)
    }
  }, null, 2);
}

function createExamAnalysisCanvaCardPlanText(outputDrafts = {}) {
  const canvaCardPlan = getExamAnalysisOutputCardPlan(outputDrafts);
  return [
    `카드뉴스 ${canvaCardPlan.length}장 구조 - 6개 슬라이드 유형 반복`,
    "",
    "슬라이드 유형",
    examAnalysisCardNewsSlideTypes.map((item) => `- ${item.type}: ${item.label}`).join("\n"),
    "",
    ...canvaCardPlan.map((item) => [
      `[카드 ${item.card}] ${item.role}`,
      `슬라이드 유형: ${item.type}`,
      `제작 방식: ${item.renderMode}`,
      `이미지/텍스트 슬롯: ${item.slot}`,
      `추천 원천: ${item.suggestedSource}`
    ].join("\n")),
    "",
    "운영 원칙",
    "- 카드 구조는 학교별로 바꾸지 않고, 텍스트/색상 포인트/주요문항만 바꿉니다.",
    "- 주요문항이 늘어나면 주요문항/손풀이 카드 쌍이 같은 구조로 반복됩니다.",
    "- 시작/시험구조/총평/마무리는 통렌더하고, 주요문항/손풀이 카드는 선생님 crop 이미지만 슬롯에 둡니다.",
    "- 인스타에는 생성된 카드뉴스를 올리고, 마지막 카드에서 블로그 상세 해설로 유입합니다.",
    "- 블로그에는 같은 카드뉴스 이미지와 더 긴 문항별 해설/다음 대비 전략을 붙입니다."
  ].join("\n\n");
}

function createExamAnalysisBlogBlockGuideText() {
  return [
    "블로그 블록 작성 가이드",
    "",
    "선생님은 완성문을 쓰지 않아도 됩니다. 카드 사이에 들어갈 사실, 판단, 문항 메모를 블록별로 적고 AI가 문체/줄나눔/강조를 정리합니다.",
    "18개 섹션은 벤치마킹 예시일 뿐 고정 입력 스키마가 아닙니다.",
    "",
    ...examAnalysisBlogBlockFields.map((field) => [
      `${field.order}. ${field.label} (${field.type})`,
      `작성 성격: ${field.guide}`,
      `예시 메모: ${field.placeholder}`
    ].join("\n")),
    "",
    "블로그 조립 순서 예시",
    "- 시작글 -> [card-01.png 삽입]",
    "- 시험구조 설명 -> [card-02.png 삽입]",
    "- 총평/변별 포인트 -> [card-03.png 삽입]",
    "- 주요문항 설명 -> [card-04.png 삽입] -> 손풀이 설명 -> [card-05.png 삽입]",
    "- 주요문항/손풀이 쌍 반복 -> 마지막 마무리 카드 삽입 -> CTA",
    "",
    "AI 편집 규칙",
    ...examAnalysisOutputAiBoundaryRules.map((rule) => `- ${rule}`),
    "",
    "강조 규칙",
    "- 😊: 인사말 끝",
    "- 📌: 주요문항 시작",
    "- ✅: 핵심 포인트, 자주 틀리는 지점, 다음 대비 체크",
    "- ⬇️⬇️: CTA/신청/블로그 유입",
    "- 📍: 위치",
    "- ☎: 전화번호",
    "- [형광펜: 하늘색]: 핵심 결론/전문성",
    "- [형광펜: 노랑]: 실수 포인트/주의 지점"
  ].join("\n\n");
}

function getExamAnalysisCardPreviewText(value = "", fallback = "") {
  return String(value || "").trim() || fallback;
}

function getExamAnalysisCardPreviewLines(values = [], maxCount = 4) {
  return values
    .flatMap((value) => String(value || "").split("\n"))
    .map((value) => value.trim())
    .filter(Boolean)
    .slice(0, maxCount);
}

function createExamAnalysisCardRendererRegions(slide = {}) {
  const hasImageSlot = Boolean(slide.slotLabel);
  const bodyLines = Array.isArray(slide.lines) && slide.lines.length
    ? slide.lines
    : ["선생님 메모를 입력하면 이 영역의 문구 밀도를 확인할 수 있습니다."];
  const slotLabel = slide.type === "solution" ? "손풀이 이미지 슬롯" : "문제 이미지 슬롯";
  const regions = [
    {
      key: "meta",
      kind: "meta",
      label: "HTML 영역 1 · 상단 메타",
      source: "activeRun + finalPreviewModel.meta",
      content: `${slide.schoolLabel || "학교/학년"} · ${slide.examLabel || "고사/과목"}`
    },
    {
      key: "title",
      kind: "title",
      label: "HTML 영역 2 · 제목/훅",
      source: "cardNewsModel + outputDrafts.inputs",
      content: [slide.title, slide.headline].filter(Boolean).join("\n")
    }
  ];

  if (hasImageSlot) {
    regions.push({
      key: "imageSlot",
      kind: "slot",
      label: `HTML 영역 3 · ${slotLabel}`,
      source: "선생님 직접 crop 이미지 파일(다음 gate)",
      content: slide.slotLabel
    });
  }

  regions.push(
    {
      key: "body",
      kind: "body",
      label: hasImageSlot ? "HTML 영역 4 · 설명/요약" : "HTML 영역 3 · 본문/요약",
      source: "outputDrafts.inputs + keyQuestionBlocks + finalPreviewModel",
      content: bodyLines.join("\n")
    },
    {
      key: "footer",
      kind: "footer",
      label: hasImageSlot ? "HTML 영역 5 · 하단 출처/CTA" : "HTML 영역 4 · 하단 출처/CTA",
      source: "렌더러 고정 문구 + teacherDraft",
      content: slide.type === "closing" ? "더 자세한 해설은 블로그에서 확인 / 상담 CTA" : slide.sourceNote
    }
  );

  return regions;
}

function getExamAnalysisCardRendererSourceKeys(slide = {}) {
  const keys = [
    "activeRun",
    "finalPreviewModel.meta",
    "outputDrafts.inputs"
  ];
  if (Number.isInteger(slide.keyQuestionIndex)) {
    keys.push(`outputDrafts.inputs.keyQuestionBlocks[${slide.keyQuestionIndex}]`);
  }
  if (slide.slotLabel) {
    keys.push("teacherCropImage(nextGate)");
  }
  return keys;
}

function attachExamAnalysisCardRendererSkeleton(slide = {}) {
  return {
    ...slide,
    rendererLabel: "HTML/CSS/JS 렌더러 골격",
    aspectRatio: "1080x1080",
    regions: createExamAnalysisCardRendererRegions(slide),
    sourceKeys: getExamAnalysisCardRendererSourceKeys(slide)
  };
}

function getExamAnalysisCardDesignKicker(slide = {}) {
  if (slide.type === "cover") return "시험분석 리포트";
  if (slide.type === "examStructure") return "시험 구조";
  if (slide.type === "overallReview") return "총평 정리";
  if (slide.type === "keyQuestion") return "주요문항 살펴보기";
  if (slide.type === "solution") return "손풀이 흐름";
  return "다음 시험 준비";
}

function getExamAnalysisCardDesignFooter(slide = {}) {
  if (slide.type === "closing") return "블로그에서 상세 해설 확인";
  if (slide.type === "keyQuestion") return "문제 이미지는 선생님 crop 기준";
  if (slide.type === "solution") return "손풀이는 선생님 저장본 기준";
  return "으뜸수학 고태영T 시험분석";
}

function getExamAnalysisCardSchoolShortLabel(slide = {}) {
  return String(slide.schoolLabel || "학교").split(" ")[0] || "학교";
}

function getExamAnalysisCardDesignBadge(slide = {}) {
  if (slide.type === "cover") return "기말고사";
  if (slide.type === "examStructure") return "100점 만점";
  if (slide.type === "overallReview") return "전체 난도";
  if (slide.type === "keyQuestion") return slide.questionNumber ? `객관식 ${slide.questionNumber}` : "주요문항";
  if (slide.type === "solution") return slide.questionNumber ? `${slide.questionNumber}번 손풀이` : "손풀이";
  return "다음 대비";
}

function getExamAnalysisCardDisplayTitle(slide = {}) {
  if (slide.type === "cover") {
    return {
      primary: getExamAnalysisCardSchoolShortLabel(slide),
      secondary: "시험분석"
    };
  }
  if (slide.type === "keyQuestion") {
    return {
      primary: slide.questionNumber ? `주요문항 ${slide.questionNumber}` : "주요문항",
      secondary: "살펴보기"
    };
  }
  if (slide.type === "solution") {
    return {
      primary: slide.questionNumber ? `주요문항 ${slide.questionNumber}` : "주요문항",
      secondary: "손풀이"
    };
  }
  const [primary, ...rest] = String(slide.title || "").split(" ");
  return {
    primary: primary || slide.title,
    secondary: rest.join(" ")
  };
}

function ExamAnalysisBenchmarkDonut({ segments = [], centerLabel = "단원" }) {
  const visibleSegments = (Array.isArray(segments) ? segments : [])
    .filter((segment) => Number(segment.count || 0) > 0)
    .slice(0, 5);
  let offset = 0;
  if (!visibleSegments.length) {
    return <div className="examAnalysisBenchmarkChartEmpty">차트 데이터 없음</div>;
  }
  return (
    <div className="examAnalysisBenchmarkDonutLayout">
      <svg className="examAnalysisBenchmarkDonut" viewBox="0 0 42 42" role="img" aria-label="카드뉴스 단원별 출제 비중">
        <circle className="examAnalysisBenchmarkDonutBase" cx="21" cy="21" r="15.9155" />
        {visibleSegments.map((segment) => {
          const percent = Math.max(0, Math.min(100, Number(segment.percent || 0)));
          const circle = (
            <circle
              className="examAnalysisBenchmarkDonutSlice"
              cx="21"
              cy="21"
              key={segment.label}
              r="15.9155"
              stroke={segment.color || "#2563eb"}
              strokeDasharray={`${percent} ${100 - percent}`}
              strokeDashoffset={-offset}
            />
          );
          offset += percent;
          return circle;
        })}
        <text x="21" y="20" textAnchor="middle">{visibleSegments.length}</text>
        <text x="21" y="25" textAnchor="middle">{centerLabel}</text>
      </svg>
      <div className="examAnalysisBenchmarkChartLegend">
        {visibleSegments.slice(0, 4).map((segment) => (
          <span key={segment.label}>
            <i style={{ backgroundColor: segment.color || "#2563eb" }} />
            <b>{segment.label}</b>
            <small>{segment.count}문항</small>
          </span>
        ))}
      </div>
    </div>
  );
}

function ExamAnalysisBenchmarkMiniBars({ items = [] }) {
  const visibleItems = (Array.isArray(items) ? items : [])
    .filter((item) => Number(item.count || 0) > 0)
    .slice(0, 5);
  if (!visibleItems.length) {
    return <div className="examAnalysisBenchmarkChartEmpty">난이도 데이터 없음</div>;
  }
  return (
    <div className="examAnalysisBenchmarkMiniBars">
      {visibleItems.map((item) => (
        <div className="examAnalysisBenchmarkMiniBarRow" key={item.label}>
          <span>{item.label}</span>
          <div><i style={{ backgroundColor: item.color || "#2563eb", width: `${Math.max(Number(item.percent || 0), 7)}%` }} /></div>
          <b>{item.count}</b>
        </div>
      ))}
    </div>
  );
}

function renderExamAnalysisCardDesignBody(slide = {}) {
  const lines = Array.isArray(slide.lines) && slide.lines.length
    ? slide.lines
    : ["선생님 메모를 입력하면 이 영역의 문구 밀도를 확인할 수 있습니다."];
  const titleParts = getExamAnalysisCardDisplayTitle(slide);

  if (slide.type === "cover") {
    return (
      <div className="examAnalysisBenchmarkCoverBody">
        <div className="examAnalysisBenchmarkHeroTitle">
          <strong>{titleParts.primary}</strong>
          <b>{titleParts.secondary}</b>
        </div>
        <div className="examAnalysisBenchmarkBrushBand">
          <span>{slide.headline}</span>
          <strong>실수 관리와 풀이 순서가 핵심</strong>
        </div>
        <div className="examAnalysisBenchmarkCoverCta">
          총평 · 주요문항 · 손풀이 확인
        </div>
      </div>
    );
  }

  if (slide.type === "examStructure") {
    return (
      <div className="examAnalysisBenchmarkStructureBody">
        <div className="examAnalysisBenchmarkStatRow">
          <div><small>객관식</small><strong>{slide.totalQuestions ? `${slide.totalQuestions}문항` : "검수"}</strong></div>
          <div><small>서술형</small><strong>{slide.essayQuestions ? `${slide.essayQuestions}문항` : "확인"}</strong></div>
          <div><small>만점</small><strong>100점</strong></div>
        </div>
        <div className="examAnalysisBenchmarkMetaRow">
          <span>시행일 · {slide.examDate || "확인 필요"}</span>
          <span>출판사 · {slide.publisher || "확인 필요"}</span>
        </div>
        <div className="examAnalysisBenchmarkTwoColumns structure">
          <section>
            <strong>시험 범위</strong>
            {lines.slice(0, 4).map((line, index) => <p key={`${slide.card}-scope-${index}`}>{line}</p>)}
          </section>
          <section className="examAnalysisBenchmarkChartPanel">
            <strong>단원별 출제 비중</strong>
            <ExamAnalysisBenchmarkDonut segments={slide.partDistribution} />
            <div className="examAnalysisBenchmarkDifficultyPanel">
              <b>난이도 분포</b>
              <ExamAnalysisBenchmarkMiniBars items={slide.difficultyDistribution} />
            </div>
          </section>
        </div>
        <div className="examAnalysisBenchmarkFlowRow">
          {["범위 확인", "비중 파악", "풀이 순서", "실수 점검"].map((label) => <span key={label}>{label}</span>)}
        </div>
      </div>
    );
  }

  if (slide.type === "overallReview") {
    return (
      <div className="examAnalysisBenchmarkReviewBody">
        <div className="examAnalysisBenchmarkReviewGrid">
          {lines.slice(0, 4).map((line, index) => (
            <div key={`${slide.card}-review-${index}`}>
              <strong>{["출제 경향", "체감 난도", "후반부 특징", "고득점 전략"][index] || `포인트 ${index + 1}`}</strong>
              <p>{line}</p>
            </div>
          ))}
        </div>
        <div className="examAnalysisBenchmarkSearchBand">
          {slide.headline}
        </div>
        <div className="examAnalysisBenchmarkOneLine">
          한줄평 | 실수 관리와 풀이 순서가 고득점의 핵심
        </div>
      </div>
    );
  }

  if (slide.type === "keyQuestion" || slide.type === "solution") {
    const isSolution = slide.type === "solution";
    return (
      <div className="examAnalysisBenchmarkQuestionBody">
        <div className="examAnalysisBenchmarkQuestionColumns">
          <section className="examAnalysisBenchmarkImagePanel">
            <strong>{isSolution ? "문제" : "시험 원안"}</strong>
            <div className={`examAnalysisCardDesignImageSlot ${slide.type}`}>
              <span>{isSolution ? "선생님 crop 문제 이미지" : "선생님 crop 시험문제 이미지"}</span>
            </div>
          </section>
          <section className="examAnalysisBenchmarkImagePanel">
            <strong>{isSolution ? "수학의기술 BEST 풀이" : "유사유형 / 핵심 해석"}</strong>
            <div className={`examAnalysisCardDesignImageSlot ${isSolution ? "solution" : "keyQuestion"}`}>
              <span>{isSolution ? "선생님 crop 손풀이 이미지" : slide.headline}</span>
            </div>
          </section>
        </div>
        <div className="examAnalysisBenchmarkTipStrip">
          <strong>{isSolution ? "문제풀이 TIP" : "핵심 개념"}</strong>
          <span>{lines[0] || slide.headline}</span>
        </div>
        <div className="examAnalysisBenchmarkBottomBoxes">
          {["개념 연결", "자주 틀리는 포인트", "추천 복습"].map((label, index) => (
            <div key={`${slide.card}-${label}`}>
              <strong>{label}</strong>
              <p>{lines[index + 1] || lines[index] || "선생님 메모 기준으로 채워집니다."}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="examAnalysisBenchmarkClosingBody">
      <div className="examAnalysisBenchmarkReviewGrid">
        {["정확도", "해석력", "그래프", "시간 관리"].map((label, index) => (
          <div key={`${slide.card}-closing-${label}`}>
            <strong>{label}</strong>
            <p>{lines[index] || "다음 시험 대비 방향을 입력해 주세요."}</p>
          </div>
        ))}
      </div>
      <div className="examAnalysisBenchmarkBottomBoxes">
        {lines.slice(0, 3).map((line, index) => (
          <div key={`${slide.card}-closing-line-${index}`}>
            <strong>{index + 1}</strong>
            <p>{line}</p>
          </div>
        ))}
      </div>
      <div className="examAnalysisBenchmarkOneLine">더 자세한 해설은 블로그에서 확인</div>
    </div>
  );
}

function ExamAnalysisCardDesignCard({ isFocused = false, isSelected = false, onFocus = null, slide = {} }) {
  const cardClassName = [
    "examAnalysisCardDesignCard",
    slide.type,
    isFocused ? "focused" : "",
    isSelected ? "selected" : ""
  ].filter(Boolean).join(" ");
  return (
    <article className={cardClassName}>
      <header className="examAnalysisCardDesignHeader">
        <span className="examAnalysisBenchmarkSchoolBadge">{getExamAnalysisCardSchoolShortLabel(slide)}</span>
        <strong>으뜸수학 고태영T</strong>
        <small>{getExamAnalysisCardDesignBadge(slide)}</small>
      </header>
      <div className={`examAnalysisCardDesignTitleBlock ${slide.type}`}>
        <span>{getExamAnalysisCardDesignKicker(slide)} · {slide.examLabel}</span>
        <h4>
          <span>{getExamAnalysisCardDisplayTitle(slide).primary}</span>
          {getExamAnalysisCardDisplayTitle(slide).secondary ? <b>{getExamAnalysisCardDisplayTitle(slide).secondary}</b> : null}
        </h4>
        <p>{slide.headline}</p>
      </div>
      {renderExamAnalysisCardDesignBody(slide)}
      <footer className="examAnalysisCardDesignFooter">
        <span>{slide.renderMode}</span>
        <strong>{getExamAnalysisCardDesignFooter(slide)}</strong>
      </footer>
      {onFocus ? (
        <button className="examAnalysisCardDesignZoomButton" onClick={onFocus} type="button">
          크게 보기
        </button>
      ) : null}
    </article>
  );
}

function createExamAnalysisCardNewsPreviewSlides({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const run = activeRun && typeof activeRun === "object" ? activeRun : {};
  const previewModel = model && typeof model === "object" ? model : {};
  const drafts = outputDrafts && typeof outputDrafts === "object" ? outputDrafts : {};
  const inputs = drafts.inputs && typeof drafts.inputs === "object" ? drafts.inputs : {};
  const keyQuestionBlocks = normalizeExamAnalysisKeyQuestionBlocks(inputs);
  const cardPlan = getExamAnalysisOutputCardPlan(drafts);
  const meta = previewModel.meta && typeof previewModel.meta === "object" ? previewModel.meta : {};
  const schoolLabel = [run.schoolName || meta.schoolName, run.grade || meta.grade].filter(Boolean).join(" ") || "학교/학년";
  const examLabel = [run.examCycle || run.examTerm || meta.examCycle, run.subject || meta.subject].filter(Boolean).join(" · ") || "고사/과목";
  const totalQuestions = Number(meta.totalQuestions || previewModel.questions?.length || 0);
  const partDistribution = Array.isArray(previewModel.partDistribution) ? previewModel.partDistribution : [];
  const difficultyDistribution = Array.isArray(previewModel.difficultyDistribution) ? previewModel.difficultyDistribution : [];
  const partSummary = partDistribution
    .slice(0, 4)
    .map((item) => `${item.label} ${item.count}문항`);
  const difficultySummary = difficultyDistribution
    .slice(0, 4)
    .map((item) => `${item.label} ${item.count}문항`);

  return cardPlan.map((slide) => {
    const block = Number.isInteger(slide.keyQuestionIndex) ? keyQuestionBlocks[slide.keyQuestionIndex] || {} : {};
    const questionLabel = getExamAnalysisCardPreviewText(block.questionNumber, `주요문항 ${Number(slide.keyQuestionIndex || 0) + 1}`);
    const base = {
      ...slide,
      schoolLabel,
      examLabel,
      chips: [slide.renderMode, slide.type],
      totalQuestions,
      partSummary,
      difficultySummary,
      partDistribution,
      difficultyDistribution,
      slotLabel: slide.renderMode.includes("슬롯") ? slide.slot : "",
      sourceNote: "현재 화면 수정본 기준"
    };

    if (slide.type === "cover") {
      return {
        ...base,
        title: "시험분석",
        headline: getExamAnalysisCardPreviewText(inputs.oneLineReview, "한줄 총평을 입력하면 표지 핵심 문구로 들어갑니다."),
        lines: getExamAnalysisCardPreviewLines([
          inputs.flowReview,
          `${totalQuestions || "검수"}문항 기준 · ${examLabel}`,
          inputs.schoolVariationNotes
        ], 3)
      };
    }

    if (slide.type === "examStructure") {
      return {
        ...base,
        title: "시험 구조",
        headline: totalQuestions ? `${totalQuestions}문항 기준 구조 미리보기` : "검수 저장본 기준 시험 구조",
        lines: getExamAnalysisCardPreviewLines([
          inputs.blogBlockStructure,
          partSummary.join(" · "),
          difficultySummary.join(" · "),
          inputs.imageSlotNotes
        ], 4)
      };
    }

    if (slide.type === "overallReview") {
      return {
        ...base,
        title: "총평 정리",
        headline: getExamAnalysisCardPreviewText(inputs.oneLineReview, "총평 핵심 문장을 입력해 주세요."),
        lines: getExamAnalysisCardPreviewLines([
          inputs.flowReview,
          inputs.scoreGapPoint,
          inputs.blogBlockOverallReview
        ], 4)
      };
    }

    if (slide.type === "keyQuestion") {
      return {
        ...base,
        title: `${questionLabel} 살펴보기`,
        headline: getExamAnalysisCardPreviewText(block.title, "대표 문항의 핵심을 입력해 주세요."),
        lines: getExamAnalysisCardPreviewLines([
          block.questionMemo,
          block.mistakePoint ? `자주 틀리는 지점: ${block.mistakePoint}` : "",
          block.imageSlotMemo
        ], 4)
      };
    }

    if (slide.type === "solution") {
      return {
        ...base,
        title: `${questionLabel} 손풀이`,
        headline: getExamAnalysisCardPreviewText(block.title, "풀이 방향과 조건 정리 흐름을 보여줍니다."),
        lines: getExamAnalysisCardPreviewLines([
          block.solutionMemo,
          block.mistakePoint ? `풀이 전 점검: ${block.mistakePoint}` : "",
          "문제/풀이 사실은 선생님 crop 이미지와 저장 메모 기준입니다."
        ], 4)
      };
    }

    return {
      ...base,
      title: "다음 시험을 준비하며",
      headline: getExamAnalysisCardPreviewText(inputs.nextStudyPlan || inputs.blogBlockNextStudy, "다음 시험 대비 방향을 입력해 주세요."),
      lines: getExamAnalysisCardPreviewLines([
        inputs.blogBlockAcademyTrust,
        inputs.blogBlockCta,
        "더 자세한 시험 해설은 블로그에서 확인합니다."
      ], 4)
    };
  }).map(attachExamAnalysisCardRendererSkeleton);
}

function ExamAnalysisCardNewsPreviewPanel({ slides = [] }) {
  const [focusedCardIndex, setFocusedCardIndex] = useState(0);
  if (!slides.length) return <div className="emptyState compact">카드뉴스 미리보기 없음</div>;
  const safeFocusedIndex = Math.min(focusedCardIndex, slides.length - 1);
  const focusedSlide = slides[safeFocusedIndex] || slides[0];
  const selectPreviousCard = () => setFocusedCardIndex((current) => Math.max(current - 1, 0));
  const selectNextCard = () => setFocusedCardIndex((current) => Math.min(current + 1, slides.length - 1));
  return (
    <div className="examAnalysisCardNewsPreviewPanel">
      <div className="examAnalysisCardNewsPreviewSummary">
        <strong>블로그형 카드 디자인 Gate 3</strong>
        <span>{slides.length}장 · 1080x1080 정사각형 검수용 · HTML/CSS/JS 렌더러에 블루/화이트 전문 톤을 얹어보는 화면 검수 단계</span>
      </div>
      <div className="examAnalysisCardFocusPanel">
        <div className="examAnalysisCardFocusHeader">
          <div>
            <strong>크게 보기</strong>
            <span>카드 {safeFocusedIndex + 1}/{slides.length} · 글자 밀도, 줄바꿈, 슬롯 크기를 이 화면에서 먼저 검수합니다.</span>
          </div>
          <div className="examAnalysisCardFocusActions">
            <button disabled={safeFocusedIndex === 0} onClick={selectPreviousCard} type="button">이전</button>
            <button disabled={safeFocusedIndex >= slides.length - 1} onClick={selectNextCard} type="button">다음</button>
          </div>
        </div>
        <div className="examAnalysisCardFocusCanvas">
          <ExamAnalysisCardDesignCard isFocused slide={focusedSlide} />
        </div>
      </div>
      <div className="examAnalysisCardDesignGrid">
        {slides.map((slide, index) => (
          <ExamAnalysisCardDesignCard
            isSelected={index === safeFocusedIndex}
            key={`${slide.card}-${slide.type}-design`}
            onFocus={() => setFocusedCardIndex(index)}
            slide={slide}
          />
        ))}
      </div>

      <details className="examAnalysisCardRendererDetails">
        <summary>HTML 영역/데이터 원천 확인 열기</summary>
        <div className="examAnalysisCardNewsPreviewGrid">
          {slides.map((slide) => (
            <article className={`examAnalysisCardNewsPreviewCard ${slide.type}`} key={`${slide.card}-${slide.type}`}>
              <div className="examAnalysisCardRendererMeta">
                <div>
                  <strong>card-{String(slide.card).padStart(2, "0")}</strong>
                  <span>{slide.role}</span>
                </div>
                <small>{slide.rendererLabel} · {slide.renderMode}</small>
              </div>
              <div className="examAnalysisCardRendererFrame" aria-label={`${slide.role} HTML 렌더러 골격`}>
                {slide.regions.map((region) => {
                  const contentLines = String(region.content || "")
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean);
                  return (
                    <section className={`examAnalysisCardRendererRegion ${region.kind}`} key={region.key}>
                      <div className="examAnalysisCardRendererRegionHeader">
                        <strong>{region.label}</strong>
                        <span>{region.source}</span>
                      </div>
                      <div className="examAnalysisCardRendererContent">
                        {contentLines.map((line, lineIndex) => (
                          <p key={`${region.key}-${lineIndex}`}>{line}</p>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
              <div className="examAnalysisCardRendererSources">
                {slide.sourceKeys.map((sourceKey) => <span key={sourceKey}>{sourceKey}</span>)}
              </div>
            </article>
          ))}
        </div>
      </details>
    </div>
  );
}

async function downloadExamAnalysisOutputPackageZip({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const blogText = getExamAnalysisOutputSectionText(outputDrafts.blog);
  const instagramText = getExamAnalysisOutputSectionText(outputDrafts.instagram);
  const chartFiles = await createExamAnalysisChartPngFiles(model);
  const svgFiles = createExamAnalysisChartSvgFiles(model);
  const files = [
    { name: "README.txt", text: createExamAnalysisPackageReadme({ activeRun, outputDrafts, chartFiles }) },
    { name: "manifest.json", text: createExamAnalysisPackageManifest({ activeRun, outputDrafts, chartFiles }) },
    { name: "texts/blog-draft.txt", text: blogText || "블로그 초안 없음" },
    { name: "texts/instagram-card-draft.txt", text: instagramText || "인스타 카드 초안 없음" },
    { name: "texts/canva-10-card-plan.txt", text: createExamAnalysisCanvaCardPlanText(outputDrafts) },
    { name: "texts/blog-block-guide.txt", text: createExamAnalysisBlogBlockGuideText() },
    ...chartFiles,
    ...svgFiles
  ];
  const zipBlob = await createExamAnalysisZipBlob(files);
  const baseName = sanitizeExamAnalysisOutputFileNamePart(activeRun.title || [activeRun.schoolName, activeRun.grade, activeRun.examCycle || activeRun.examTerm].filter(Boolean).join(" "));
  downloadBlobFile(zipBlob, `${baseName}-output-package.zip`);
  return {
    textCount: [blogText, instagramText].filter((text) => String(text || "").trim()).length,
    chartCount: chartFiles.length,
    svgCount: svgFiles.length
  };
}

function ExamAnalysisOutputDraftPanel({
  activeRun,
  model,
  outputDrafts,
  outputStatus,
  generatingOutputType,
  exportingOutputType,
  isSavingOutputDrafts,
  onGenerateOutputDraft,
  onCopyOutputDraft,
  onDownloadOutputDraft,
  onDownloadOutputPackageZip,
  onSaveOutputDrafts,
  onUpdateInput,
  onAddKeyQuestionBlock,
  onUpdateKeyQuestionBlock,
  onRemoveKeyQuestionBlock,
  onUpdateTeacherDraft
}) {
  const hasRun = Boolean(activeRun?.analysisRunId);
  const hasReviewModel = Boolean(model?.questions?.length);
  const isOutputBusy = isSavingOutputDrafts || Boolean(generatingOutputType) || Boolean(exportingOutputType);
  const blogText = getExamAnalysisOutputSectionText(outputDrafts.blog);
  const instagramText = getExamAnalysisOutputSectionText(outputDrafts.instagram);
  const inputCount = getExamAnalysisOutputInputCount(outputDrafts.inputs);
  const inputTotal = getExamAnalysisOutputInputTotal(outputDrafts.inputs);
  const keyQuestionBlocks = normalizeExamAnalysisKeyQuestionBlocks(outputDrafts.inputs);
  const cardPreviewSlides = createExamAnalysisCardNewsPreviewSlides({ activeRun, model, outputDrafts });
  const lastSavedAt = getExamAnalysisOutputLastSavedAt(outputDrafts);
  const saveCheckpointState = outputStatus.state === "dirty" || outputStatus.state === "saving" || outputStatus.state === "failed"
    ? outputStatus.state
    : lastSavedAt
      ? "success"
      : "idle";
  const saveCheckpointTitle = saveCheckpointState === "dirty"
    ? "저장 전 수정 있음"
    : saveCheckpointState === "saving"
      ? "저장 중"
      : saveCheckpointState === "failed"
        ? "저장 실패"
        : lastSavedAt
          ? "저장 확인됨"
          : "아직 저장 전";
  const saveCheckpointText = saveCheckpointState === "dirty"
    ? "산출물 저장을 눌러야 새로고침 후에도 유지됩니다."
    : saveCheckpointState === "saving"
      ? "입력칸과 선생님 수정본을 저장하고 있습니다."
      : saveCheckpointState === "failed"
        ? outputStatus.message || "저장에 실패했습니다."
        : lastSavedAt
        ? `마지막 저장 ${formatExamAnalysisEventTime(lastSavedAt)} · 새로고침 유지`
        : "산출물 저장을 누르면 입력칸과 선생님 수정본이 저장됩니다.";
  const [collapsedOutputSections, setCollapsedOutputSections] = useState({
    topSummary: false,
    guide: true,
    baseInputs: false,
    blogBlocks: false,
    keyQuestions: false,
    cardPreview: false,
    finalDrafts: true
  });
  const toggleOutputSection = (sectionKey) => {
    setCollapsedOutputSections((currentSections) => ({
      ...currentSections,
      [sectionKey]: !currentSections[sectionKey]
    }));
  };
  const isOutputSectionCollapsed = (sectionKey) => Boolean(collapsedOutputSections[sectionKey]);
  return (
    <div className="panel examAnalysisOutputDraftPanel">
      <div className="sectionHeader slim">
        <div>
          <strong>블로그/인스타 산출물 초안</strong>
          <span>선생님 총평 입력 · AI 초안 · 선생님 수정본 저장</span>
        </div>
        <div className="headerActions">
          {outputStatus.message ? <span className={`saveStateBadge ${outputStatus.state}`}>{outputStatus.message}</span> : null}
          <button
            className="secondaryButton"
            disabled={!hasRun || !hasReviewModel || isOutputBusy}
            onClick={() => onGenerateOutputDraft("blog")}
            type="button"
          >
            {generatingOutputType === "blog" ? "블로그 생성 중" : "블로그 초안 생성"}
          </button>
          <button
            className="secondaryButton"
            disabled={!hasRun || !hasReviewModel || isOutputBusy}
            onClick={() => onGenerateOutputDraft("instagram")}
            type="button"
          >
            {generatingOutputType === "instagram" ? "인스타 생성 중" : "인스타 카드 초안 생성"}
          </button>
          <button
            className="secondaryButton"
            disabled={!hasRun || !hasReviewModel || isOutputBusy}
            onClick={onDownloadOutputPackageZip}
            type="button"
          >
            {exportingOutputType === "package" ? "패키지 생성 중" : "산출물 ZIP"}
          </button>
          <button
            className="primaryButton"
            disabled={!hasRun || isOutputBusy}
            onClick={onSaveOutputDrafts}
            type="button"
          >
            {isSavingOutputDrafts ? "저장 중" : "산출물 저장"}
          </button>
        </div>
      </div>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>상단 안내/저장 상태</strong>
          <span>
            {saveCheckpointTitle} · 입력 {inputCount}/{inputTotal}블록 · 블로그 {getExamAnalysisOutputSectionLabel(outputDrafts.blog)} · 인스타 {getExamAnalysisOutputSectionLabel(outputDrafts.instagram)}
          </span>
        </div>
        <button
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("topSummary")}
          type="button"
        >
          {isOutputSectionCollapsed("topSummary") ? "펼치기" : "접기"}
        </button>
      </div>
      {!isOutputSectionCollapsed("topSummary") ? (
        <>
          <div className={`examAnalysisOutputSaveCheckpoint ${saveCheckpointState}`}>
            <strong>{saveCheckpointTitle}</strong>
            <span>{saveCheckpointText}</span>
            <small>
              입력 {inputCount}/{inputTotal}블록 · 블로그 {getExamAnalysisOutputSectionLabel(outputDrafts.blog)} · 인스타 {getExamAnalysisOutputSectionLabel(outputDrafts.instagram)}
            </small>
          </div>

          <div className="examAnalysisBenchmarkMap">
            <div>
              <strong>벤치마킹 글 위치표</strong>
              <span>아래 입력칸이 네이버 글의 어느 흐름에 들어가는지 먼저 확인합니다.</span>
            </div>
            <div>
              {examAnalysisOutputBenchmarkMap.map(([label, description]) => (
                <span key={label}>
                  <strong>{label}</strong>
                  {description}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : null}

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>작성 방향/AI 편집 룰</strong>
          <span>초안 점검 기준, 이모티콘, 형광펜, AI 가능/불가 경계를 확인합니다.</span>
        </div>
        <button
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("guide")}
          type="button"
        >
          {isOutputSectionCollapsed("guide") ? "펼치기" : "접기"}
        </button>
      </div>
      {!isOutputSectionCollapsed("guide") ? (
        <div className="examAnalysisOutputGuide">
          <strong>작성 방향</strong>
          <span>산출물은 단원 분류를 보여주는 자료가 아니라, 학생과 학부모가 실제로 궁금해하는 내용을 해석해주는 자료입니다. 카드뉴스는 6개 슬라이드 유형을 바탕으로 만들고, 주요문항/손풀이 카드는 선생님 crop 이미지만 슬롯에 넣습니다.</span>
          <small>초안 점검 기준</small>
          <ol>
            {examAnalysisOutputEditorialChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <small>벤치마킹 포맷</small>
          <ol>
            <li>😊 인사말 끝 · 📌 주요문항 시작 · ✅ 핵심 포인트/자주 틀리는 지점</li>
            <li>⬇️⬇️ CTA · 📍 위치 · ☎ 전화번호 자리표시자를 사용합니다.</li>
            <li>[형광펜: 하늘색]핵심 결론[/형광펜], [형광펜: 노랑]주의 지점[/형광펜]처럼 표시합니다.</li>
            <li>Canva는 주요문항 3개 기준 10장 구조를 기본으로 보고, 주요문항 수가 바뀌면 주요문항/손풀이 카드 쌍만 반복합니다.</li>
          </ol>
          <small>AI 편집 경계</small>
          <ol>
            {examAnalysisOutputAiBoundaryRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      ) : null}

      {!isOutputSectionCollapsed("topSummary") ? (
        <div className="examAnalysisOutputVisibility">
          <span>공개 범위</span>
          {[
            ["blog_instagram", "블로그+인스타"],
            ["blog", "블로그용"],
            ["instagram", "인스타용"],
            ["internal", "내부용"]
          ].map(([value, label]) => (
            <button
              className={outputDrafts.inputs.visibility === value ? "active" : ""}
              key={value}
              onClick={() => onUpdateInput("visibility", value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>기본 메모</strong>
          <span>한줄 총평, 시험 체감, 점수 갈림, 다음 대비처럼 전체 산출물에 반복해서 쓰는 원천 메모입니다.</span>
        </div>
        <button
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("baseInputs")}
          type="button"
        >
          {isOutputSectionCollapsed("baseInputs") ? "펼치기" : "접기"}
        </button>
      </div>
      {!isOutputSectionCollapsed("baseInputs") ? (
        <div className="examAnalysisOutputInputGrid">
          {examAnalysisOutputInputFields.map((field) => (
            <label key={field.key}>
              <span>{field.label}</span>
              <small>{field.guide}</small>
              <textarea
                onChange={(event) => onUpdateInput(field.key, event.target.value)}
                placeholder={field.placeholder}
                rows={4}
                value={outputDrafts.inputs[field.key] || ""}
              />
            </label>
          ))}
        </div>
      ) : null}

      <div className="examAnalysisInstructorSectionHeader withAction">
        <div>
          <strong>블로그 흐름 블록</strong>
          <span>18개 고정 섹션이 아니라 카드 사이에 들어갈 글의 성격을 적는 칸입니다. 각 카드에 벤치마킹 글 위치를 표시했습니다.</span>
        </div>
        <button
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("blogBlocks")}
          type="button"
        >
          {isOutputSectionCollapsed("blogBlocks") ? "펼치기" : "접기"}
        </button>
      </div>

      {!isOutputSectionCollapsed("blogBlocks") ? (
        <div className="examAnalysisBlogBlockGrid">
          {examAnalysisBlogBlockFields.map((field) => (
            <article className="examAnalysisBlogBlockCard" key={field.key}>
              <div className="examAnalysisBlogBlockCardHeader">
                <span>{field.order}</span>
                <div>
                  <strong>{field.label}</strong>
                  <small>{field.type}</small>
                </div>
              </div>
              <p>{field.guide}</p>
              <span className="examAnalysisBenchmarkHint">{field.benchmark}</span>
              <textarea
                onChange={(event) => onUpdateInput(field.key, event.target.value)}
                placeholder={field.placeholder}
                rows={3}
                value={outputDrafts.inputs[field.key] || ""}
              />
            </article>
          ))}
        </div>
      ) : null}

      <div className="examAnalysisKeyQuestionHeader">
        <div>
          <strong>주요문항 반복 블록</strong>
          <span>주요문항 하나가 추가될 때마다 주요문항 카드, 손풀이 카드, 블로그 설명글 구조가 함께 반복됩니다.</span>
          <span>{"벤치마킹 위치: 📌 주요문항 시작 -> 문제 카드 -> 설명글 -> 손풀이 카드 -> 손풀이 설명글"}</span>
        </div>
        <div className="examAnalysisSectionActionGroup">
          <button
            className="examAnalysisOutputCollapseButton"
            onClick={() => toggleOutputSection("keyQuestions")}
            type="button"
          >
            {isOutputSectionCollapsed("keyQuestions") ? "펼치기" : "접기"}
          </button>
          <button
            className="secondaryButton"
            disabled={isOutputBusy}
            onClick={onAddKeyQuestionBlock}
            type="button"
          >
            주요문항 추가
          </button>
        </div>
      </div>

      {!isOutputSectionCollapsed("keyQuestions") ? (
        <div className="examAnalysisKeyQuestionList">
          {keyQuestionBlocks.map((block, index) => (
            <article className="examAnalysisKeyQuestionCard" key={block.blockId || index}>
              <div className="examAnalysisKeyQuestionCardHeader">
                <div>
                  <strong>주요문항 {index + 1}</strong>
                  <span>주요문항 슬라이드 + 손풀이 슬라이드 + 블로그 설명글</span>
                </div>
                <button
                  disabled={isOutputBusy || keyQuestionBlocks.length <= 1}
                  onClick={() => onRemoveKeyQuestionBlock(block.blockId)}
                  type="button"
                >
                  삭제
                </button>
              </div>
              <div className="examAnalysisKeyQuestionFields">
                {examAnalysisKeyQuestionBlockFields.map((field) => (
                  <label className={field.type === "textarea" ? "wide" : ""} key={field.key}>
                    <span>{field.label}</span>
                    {field.type === "input" ? (
                      <input
                        disabled={isOutputBusy}
                        onChange={(event) => onUpdateKeyQuestionBlock(block.blockId, field.key, event.target.value)}
                        placeholder={field.placeholder}
                        type="text"
                        value={block[field.key] || ""}
                      />
                    ) : (
                      <textarea
                        disabled={isOutputBusy}
                        onChange={(event) => onUpdateKeyQuestionBlock(block.blockId, field.key, event.target.value)}
                        placeholder={field.placeholder}
                        rows={3}
                        value={block[field.key] || ""}
                      />
                    )}
                  </label>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : null}

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>블로그형 카드 디자인 Gate 3</strong>
          <span>확정된 HTML 골격 위에 블루/화이트 카드 디자인을 얹어 카드 수, 반복 구조, 모바일 가독성을 확인합니다.</span>
        </div>
        <button
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("cardPreview")}
          type="button"
        >
          {isOutputSectionCollapsed("cardPreview") ? "펼치기" : "접기"}
        </button>
      </div>
      {!isOutputSectionCollapsed("cardPreview") ? (
        <ExamAnalysisCardNewsPreviewPanel slides={cardPreviewSlides} />
      ) : null}

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>최종 초안 / 복사 / TXT</strong>
          <span>블로그/인스타 초안은 삭제하지 않습니다. AI 생성 후 선생님이 최종 문장으로 고치는 원본이며, 복사/TXT/ZIP export가 이 값을 읽습니다.</span>
        </div>
        <button
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("finalDrafts")}
          type="button"
        >
          {isOutputSectionCollapsed("finalDrafts") ? "펼치기" : "접기"}
        </button>
      </div>
      {!isOutputSectionCollapsed("finalDrafts") ? (
        <div className="examAnalysisOutputEditorGrid">
          <section>
            <div>
              <div>
                <strong>블로그 초안</strong>
                <span>{getExamAnalysisOutputSectionLabel(outputDrafts.blog)}</span>
              </div>
              <div className="examAnalysisOutputEditorActions">
                <button disabled={isOutputBusy} onClick={onSaveOutputDrafts} type="button">저장</button>
                <button disabled={!blogText.trim()} onClick={() => onCopyOutputDraft("blog", blogText)} type="button">복사</button>
                <button disabled={!blogText.trim()} onClick={() => onDownloadOutputDraft("blog", blogText)} type="button">TXT</button>
              </div>
            </div>
            <textarea
              onChange={(event) => onUpdateTeacherDraft("blog", event.target.value)}
              placeholder="블로그 초안 생성 후 선생님이 최종 문장으로 수정합니다."
              rows={18}
              value={blogText}
            />
          </section>
          <section>
            <div>
              <div>
                <strong>인스타 카드 초안</strong>
                <span>{getExamAnalysisOutputSectionLabel(outputDrafts.instagram)}</span>
              </div>
              <div className="examAnalysisOutputEditorActions">
                <button disabled={isOutputBusy} onClick={onSaveOutputDrafts} type="button">저장</button>
                <button disabled={!instagramText.trim()} onClick={() => onCopyOutputDraft("instagram", instagramText)} type="button">복사</button>
                <button disabled={!instagramText.trim()} onClick={() => onDownloadOutputDraft("instagram", instagramText)} type="button">TXT</button>
              </div>
            </div>
            <textarea
              onChange={(event) => onUpdateTeacherDraft("instagram", event.target.value)}
              placeholder="인스타 카드 초안 생성 후 카드별 문구, 슬라이드 유형, 주요문항/손풀이 슬롯 안내를 수정합니다."
              rows={18}
              value={instagramText}
            />
          </section>
        </div>
      ) : null}

      <div className="examAnalysisOutputPolicy">
        <span>입력칸과 선생님 수정본은 저장 후 새로고침해도 유지됩니다.</span>
        <span>읽기 우선순위: 선생님 수정본 &gt; AI 초안 &gt; 빈 값입니다.</span>
        <span>AI 재생성은 AI 초안만 갱신하고, 저장된 선생님 수정본은 덮어쓰지 않습니다.</span>
      </div>
    </div>
  );
}

function getExamAnalysisQuestionCountCandidate(run = {}, sourceFiles = []) {
  const files = Array.isArray(sourceFiles) ? sourceFiles : [];
  const visionChecks = files
    .map((file) => getExamAnalysisVisionCheck(run, file.sourceId))
    .filter(Boolean);
  const visionCheck = visionChecks.find((check) => (
    Number(check.questionCountCandidate || 0) > 0 ||
    normalizeExamAnalysisPositiveNumbers(check.questionNumberCandidates).length > 0
  ));
  if (visionCheck) {
    const questionNumbers = normalizeExamAnalysisPositiveNumbers(visionCheck.questionNumberCandidates);
    const count = Number(visionCheck.questionCountCandidate || questionNumbers.at(-1) || questionNumbers.length || 0);
    if (count > 0) {
      return {
        count,
        sourceLabel: "AI 원본 검증",
        confidence: visionCheck.readable ? 0.95 : 0.75,
        missingQuestionNumbers: normalizeExamAnalysisPositiveNumbers(visionCheck.missingQuestionNumbers),
        detectedQuestionEvidence: [
          visionCheck.firstPageEvidence,
          visionCheck.lastPageEvidence,
          visionCheck.provider ? `provider: ${visionCheck.provider}` : "",
          questionNumbers.length ? `문항번호 후보 ${questionNumbers[0]}~${questionNumbers.at(-1)} (${questionNumbers.length}개)` : ""
        ].filter(Boolean),
        detailLabel: visionCheck.readable ? "PDF 원본 페이지 기준 후보" : "AI 검증 읽기 상태 확인 필요"
      };
    }
  }

  const summaryQuality = run?.extractionSummary?.quality;
  if (Number(summaryQuality?.maxQuestionNumber || 0) > 0) {
    return {
      count: Number(summaryQuality.maxQuestionNumber),
      sourceLabel: "텍스트 검증",
      confidence: summaryQuality.status === "ok" ? 0.8 : 0.6,
      missingQuestionNumbers: normalizeExamAnalysisPositiveNumbers(summaryQuality.missingQuestionNumbers),
      detectedQuestionEvidence: [
        `텍스트 추출 ${formatBytes(summaryQuality.textBytes)} · ${summaryQuality.pageCount || "-"}쪽`,
        `문항번호 후보 1~${summaryQuality.maxQuestionNumber} (${summaryQuality.questionNumberCandidates?.length || 0}개)`
      ],
      detailLabel: summaryQuality.status === "ok" ? "텍스트 후보 기준" : "텍스트 후보 검토 필요"
    };
  }

  const extractedFile = files.find((file) => file.extractionStatus === "extracted" && file.extractedText);
  if (extractedFile) {
    const extractionCheck = buildExamAnalysisExtractionCheck(extractedFile);
    if (extractionCheck.maxQuestionNumber) {
      return {
        count: extractionCheck.maxQuestionNumber,
        sourceLabel: "텍스트 검증",
        confidence: extractionCheck.status === "ok" ? 0.8 : 0.6,
        missingQuestionNumbers: extractionCheck.missingQuestionNumbers,
        detectedQuestionEvidence: [
          `텍스트 추출 ${formatBytes(extractionCheck.textBytes)} · ${extractionCheck.pageCount || "-"}쪽`,
          `문항번호 후보 1~${extractionCheck.maxQuestionNumber} (${extractionCheck.questionNumbers.length}개)`
        ],
        detailLabel: extractionCheck.status === "ok" ? "텍스트 후보 기준" : "텍스트 후보 검토 필요"
      };
    }
  }

  return {
    count: 0,
    sourceLabel: "",
    confidence: 0,
    missingQuestionNumbers: [],
    detectedQuestionEvidence: [],
    detailLabel: "텍스트 추출 또는 AI 검증을 먼저 실행해 주세요."
  };
}

function workflowStatusLabel(status = "") {
  const labels = {
    draft: "초안",
    source_uploaded: "PDF 저장 완료",
    source_extracted: "추출 완료",
    question_count_detected: "문항 수 판독 완료",
    question_count_confirmed: "문항 수 확정",
    rows_created: "1~N 행 생성",
    ai_fill_running: "AI 행 채움 중",
    ai_filled: "AI 행 채움 완료",
    missing_audit_needed: "누락 검수 필요",
    missing_retry_running: "누락 재요청 중",
    teacher_review: "선생님 검토",
    completed: "완료",
    failed: "실패",
    archived: "보관"
  };
  return labels[status] ?? status ?? "초안";
}

function examAnalysisSourceStatusLabel(status = "") {
  const labels = {
    uploaded: "PDF 저장 완료",
    extracting: "텍스트 추출 중",
    extracted: "텍스트 추출 완료",
    failed: "텍스트 추출 실패"
  };
  return labels[status] ?? status ?? "PDF 저장 완료";
}

function getExamAnalysisRunTitle(run = {}) {
  return run.title || [run.schoolName, run.grade, run.subject, run.examCycle].filter(Boolean).join(" · ") || "새 시험분석";
}

const examAnalysisSchools = ["상계고", "자운고", "창동고", "용화여고", "정의여고"];
const examAnalysisGrades = ["고1", "고2", "고3"];
const examAnalysisExamCycles = ["1학기 중간", "1학기 기말", "2학기 중간", "2학기 기말"];
const defaultExamAnalysisSubject = "";

function inferExamAnalysisSubject(value = "") {
  const text = String(value || "").replace(/\s+/g, "");
  const candidates = [
    [/공통수학1|공수1|공통수학Ⅰ|공통수학I/i, "공통수학1"],
    [/공통수학2|공수2|공통수학Ⅱ|공통수학II/i, "공통수학2"],
    [/미적분2|미적분Ⅱ|미적분II/i, "미적분2"],
    [/미적분1|미적분Ⅰ|미적분I/i, "미적분1"],
    [/확률과통계|확통/i, "확률과통계"],
    [/대수/i, "대수"]
  ];
  return candidates.find(([pattern]) => pattern.test(text))?.[1] ?? "";
}

function getDefaultExamAnalysisSubject(row = {}) {
  const detailSubject = inferExamAnalysisSubject(`${row.scope ?? ""} ${row.subTextbook ?? ""} ${row.title ?? ""}`);
  if (detailSubject) return detailSubject;
  const rawSubject = String(row.subject ?? "").trim();
  if (rawSubject && rawSubject !== "기하") return rawSubject;
  return defaultExamAnalysisSubject;
}

function normalizeExamAnalysisSchoolName(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return examAnalysisSchools.find((school) => text.includes(school.replace("고", "")) || text.includes(school)) || text;
}

function normalizeExamAnalysisGrade(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  if (/고?\s*1|1\s*학년/.test(text)) return "고1";
  if (/고?\s*2|2\s*학년/.test(text)) return "고2";
  if (/고?\s*3|3\s*학년/.test(text)) return "고3";
  return text;
}

function normalizeExamAnalysisExamCycle(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  const semester = text.includes("2학기") ? "2학기" : text.includes("1학기") ? "1학기" : "";
  const cycle = text.includes("기말") ? "기말" : text.includes("중간") ? "중간" : "";
  return semester && cycle ? `${semester} ${cycle}` : text.replace(/고사/g, "").trim();
}

function formatExamAnalysisExamCycleTitle(value) {
  const normalized = normalizeExamAnalysisExamCycle(value);
  if (!normalized) return "고사";
  return normalized.endsWith("고사") ? normalized : `${normalized}고사`;
}

function buildExamAnalysisTitle({ schoolName, grade, examCycle } = {}) {
  return `${new Date().getFullYear()} ${schoolName || "학교"} ${grade || "학년"} ${formatExamAnalysisExamCycleTitle(examCycle)} 시험분석`;
}

function postMakeupTask(makeupTask) {
  return postJson("/api/makeup-tasks", { makeupTask });
}

function postMakeupTasks(makeupTasks) {
  return postJson("/api/makeup-tasks/bulk", { makeupTasks });
}

function postExamPrepRow(examPrepRow) {
  return postJson("/api/exam-prep-rows", { examPrepRow });
}

function postExamPrepRows(examPrepRows) {
  return postJson("/api/exam-prep-rows/bulk", { examPrepRows });
}

function deleteExamPrepRowRequest(examPrepId) {
  return fetch(apiUrl(`/api/exam-prep-rows?id=${encodeURIComponent(examPrepId)}&confirm=true`), { method: "DELETE" })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "시험정보 삭제 실패");
      return result;
    });
}

function deleteExamAnalysisRunRequest(analysisRunId) {
  return fetch(apiUrl(`/api/exam-analysis-runs?id=${encodeURIComponent(analysisRunId)}`), { method: "DELETE" })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "시험분석 삭제 실패");
      return result;
    });
}

function deleteExamAnalysisSourceRequest(sourceId) {
  return fetch(apiUrl(`/api/exam-analysis-source-files?id=${encodeURIComponent(sourceId)}`), { method: "DELETE" })
    .then(async (response) => {
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || "PDF 원본 삭제 실패");
      return result;
    });
}

function fetchExamAnalysisSsenTypesRequest(payload = {}) {
  const params = new URLSearchParams();
  if (payload.analysisRunId) params.set("analysisRunId", payload.analysisRunId);
  if (payload.subject) params.set("subject", payload.subject);
  if (payload.scope) params.set("scope", payload.scope);
  return getJsonWithTimeout(
    `/api/exam-analysis-ssen-types?${params.toString()}`,
    12000,
    "쎈 기준표 조회가 지연되고 있습니다."
  );
}

function extractExamAnalysisSourceRequest(sourceId) {
  return postJsonWithTimeout(
    "/api/exam-analysis-source-files/extract",
    { sourceId },
    90000,
    "PDF 텍스트 추출이 지연되고 있습니다."
  );
}

function verifyExamAnalysisSourceWithAiRequest(sourceId) {
  return postJsonWithTimeout(
    "/api/exam-analysis-source-files/vision-check",
    { sourceId },
    120000,
    "PDF 원본 AI 검증이 지연되고 있습니다."
  );
}

function confirmExamAnalysisQuestionCountRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/confirm-question-count",
    payload,
    30000,
    "문항 수 확정 저장이 지연되고 있습니다."
  );
}

function detectExamAnalysisQuestionBoundariesRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/detect-question-boundaries",
    payload,
    180000,
    "문항 경계 탐지가 지연되고 있습니다."
  );
}

function fillExamAnalysisQuestionRowsRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/fill-question-rows",
    payload,
    240000,
    "AI 행 채움이 지연되고 있습니다."
  );
}

function refineExamAnalysisQuestionRowsRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/refine-question-rows",
    payload,
    240000,
    "AI 2차 수정이 지연되고 있습니다."
  );
}

function saveExamAnalysisQuestionReviewsRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/save-question-reviews",
    payload,
    30000,
    "문항 검수 저장이 지연되고 있습니다."
  );
}

function saveExamAnalysisOutputDraftsRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/save-output-drafts",
    payload,
    30000,
    "시험분석 산출물 저장이 지연되고 있습니다."
  );
}

function generateExamAnalysisOutputDraftRequest(payload) {
  return postJsonWithTimeout(
    "/api/exam-analysis-runs/generate-output-draft",
    payload,
    120000,
    "시험분석 산출물 AI 초안 생성이 지연되고 있습니다."
  );
}

function checkAttendanceRequest(payload) {
  return postJsonWithTimeout(
    "/api/attendance/check",
    payload,
    30000,
    "출결 저장과 알림톡 처리가 지연되고 있습니다."
  );
}

function previewAttendanceRequest(payload) {
  return postJsonWithTimeout(
    "/api/attendance/preview",
    payload,
    30000,
    "출결 확인이 지연되고 있습니다."
  );
}

function patchLessonRecordNotificationStatusRequest(record) {
  return postJson("/api/lesson-records/notification-status", { record });
}

function postSchoolEvent(schoolEvent) {
  return postJson("/api/school-events", { schoolEvent });
}

function postSchoolEvents(schoolEvents) {
  return postJson("/api/school-events/bulk", { schoolEvents });
}

function deleteSchoolEventFromApi(eventId) {
  return fetch(apiUrl(`/api/school-events?id=${encodeURIComponent(eventId)}`), { method: "DELETE" })
    .then((response) => response.json())
    .then((result) => {
      if (!result.ok) throw new Error(result.error || "학사일정 삭제 저장 실패");
      return result;
    });
}

function postAppState(states) {
  return postJson("/api/app-state", { states });
}

async function fetchPortalData(sessionToken) {
  const response = await fetch(apiUrl("/api/portal-data"), {
    headers: { Authorization: `Bearer ${sessionToken}` }
  });
  const result = await response.json();
  if (!response.ok || result.ok === false) throw new Error(result.error || "학생 데이터를 불러오지 못했습니다.");
  return result;
}

function postPortalState(sessionToken, states) {
  return postJsonWithHeaders("/api/portal-state", { states }, { Authorization: `Bearer ${sessionToken}` });
}

async function postJsonWithHeaders(path, body, headers = {}) {
  const response = await fetch(apiUrl(path), {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(body)
  });
  const result = await response.json();
  if (!response.ok || result.ok === false) throw new Error(result.error || "요청에 실패했습니다.");
  return result;
}

const teacherAccount = {
  loginId: "teacher",
  name: "고태영",
  role: "teacher"
};

const defaultTeacherAccountSettings = {
  loginId: teacherAccount.loginId,
  name: teacherAccount.name
};

const examPrepTextbookBySchoolGrade = {
  "용화여고_고1": "천재(홍)",
  "상계고_고1": "천재(홍)",
  "자운고_고1": "미래엔",
  "정의여고_고1": "미래엔",
  "창동고_고1": "미래엔"
};

const schoolCalendarGradeOptions = ["중3", "고1", "고2", "고3"];
const schoolCalendarMathSubjectOptions = ["공통수학1", "공통수학2", "대수", "미적분1", "확률과통계", "미적분2", "기하"];
const currentExamCycle = getDefaultExamCycleForDate(today);

function inferExamCycleFromPrepId(examPrepId = "") {
  const id = String(examPrepId);
  const explicitCycle = id.match(/(20\d{2})[-_](1|2)[-_](mid|final)/);
  if (explicitCycle) return `${explicitCycle[1]}-${explicitCycle[2]}-${explicitCycle[3]}`;
  const legacyYear = id.match(/(20\d{2})/);
  const year = legacyYear?.[1] ?? String(new Date(`${today}T00:00:00+09:00`).getFullYear());
  if (id.includes("_mid_") || id.endsWith("_mid") || id.includes("_mid")) return `${year}-1-mid`;
  if (id.includes("_final_") || id.endsWith("_final") || id.includes("_final")) return `${year}-1-final`;
  return "";
}

function getDefaultExamCycleForDate(dateString = today) {
  const [yearText, monthText] = String(dateString).split("-");
  const year = Number(yearText) || new Date().getFullYear();
  const month = Number(monthText) || 1;
  if (month <= 5) return `${year}-1-mid`;
  if (month <= 7) return `${year}-1-final`;
  if (month <= 10) return `${year}-2-mid`;
  return `${year}-2-final`;
}

function normalizeExamPrepRowCycle(row = {}) {
  const inferredCycle = inferExamCycleFromPrepId(row.examPrepId);
  if (inferredCycle && row.examCycle !== inferredCycle) {
    return { ...row, examCycle: inferredCycle, examTerm: inferredCycle };
  }
  if (!row.examCycle && !row.examTerm) {
    return { ...row, examCycle: currentExamCycle, examTerm: currentExamCycle };
  }
  if (!row.examCycle && row.examTerm) return { ...row, examCycle: row.examTerm };
  if (!row.examTerm && row.examCycle) return { ...row, examTerm: row.examCycle };
  return row;
}

function normalizeExamPrepRows(rows = []) {
  return rows.map((row) => normalizeExamPrepRowReviewDraft(normalizeExamPrepRowCycle(row)));
}

function createParentLoginId(student) {
  return `parent-${student.loginId}`;
}

function getDemoStudent(students) {
  return students.find((student) => student.studentId === "student_mwf710_001") ?? students[0];
}

function createPreExamLessonId(sourceId = "") {
  return `lesson_pre_exam_${safeIdPart(sourceId)}_${shortStableHash(sourceId)}`;
}

function examCycleLabel(examCycle) {
  const [, semester, phase] = String(examCycle).match(/^20\d{2}-(1|2)-(mid|final)$/) ?? [];
  if (!semester || !phase) return examCycle;
  return `${semester}학기 ${phase === "mid" ? "중간고사" : "기말고사"}`;
}

function getDefaultExamPeriodRange(examCycle = currentExamCycle) {
  const [yearText, semester, phase] = String(examCycle).split("-");
  const year = Number(yearText) || new Date(`${today}T00:00:00+09:00`).getFullYear();
  const ranges = {
    "1-mid": { date: `${year}-04-27`, endDate: `${year}-05-08` },
    "1-final": { date: `${year}-06-29`, endDate: `${year}-07-03` },
    "2-mid": { date: `${year}-09-28`, endDate: `${year}-10-02` },
    "2-final": { date: `${year}-12-14`, endDate: `${year}-12-24` }
  };
  return ranges[`${semester}-${phase}`] ?? { date: today, endDate: today };
}

function getDefaultExamPeriodText(examCycle = currentExamCycle) {
  const range = getDefaultExamPeriodRange(examCycle);
  return formatDateRangeText(range.date, range.endDate);
}

function normalizeGradeLabel(grade = "") {
  const value = String(grade).trim();
  if (value.includes("1")) return value.includes("중") ? "중1" : "고1";
  if (value.includes("2")) return value.includes("중") ? "중2" : "고2";
  if (value.includes("3")) return value.includes("중") ? "중3" : "고3";
  return value;
}

function normalizeSchoolName(value = "") {
  return String(value || "")
    .trim()
    .replace(/\s+/g, "")
    .replace(/[·ㆍ.,_/\\-]/g, "")
    .replace(/여자고등학교/g, "여고")
    .replace(/여자고/g, "여고")
    .replace(/남자고등학교/g, "남고")
    .replace(/남자고/g, "남고")
    .replace(/고등학교/g, "고")
    .replace(/중학교/g, "중");
}

function schoolNamesMatch(firstSchool = "", secondSchool = "", { allowBlank = true } = {}) {
  if (!firstSchool || !secondSchool) return allowBlank;
  const firstText = normalizeSchoolName(firstSchool);
  const secondText = normalizeSchoolName(secondSchool);
  if (!firstText || !secondText) return allowBlank;
  return firstText === secondText || firstText.includes(secondText) || secondText.includes(firstText);
}

function getSchoolGradeKey(schoolName = "", grade = "") {
  const schoolKey = normalizeSchoolName(schoolName);
  const gradeKey = compactCalendarLabel(normalizeGradeLabel(grade));
  if (!schoolKey || !gradeKey) return "";
  return `${schoolKey}_${gradeKey}`;
}

function getStudentSchoolGradeKey(student = {}) {
  return getSchoolGradeKey(student.schoolName, student.grade);
}

function getExamPrepSchoolGradeKey(row = {}) {
  return getSchoolGradeKey(row.schoolName, row.grade);
}

function getTextbookFromExamPrep(student) {
  const key = `${student.schoolName || ""}_${normalizeGradeLabel(student.grade)}`;
  return examPrepTextbookBySchoolGrade[key] ?? student.textbook ?? "";
}

function getDefaultMathExamDate(row, index = 0) {
  const fallbackBySchool = {
    "용화여고": "2026-06-24",
    "정의여고": "2026-06-25",
    "자운고": "2026-06-26",
    "상계고": "2026-06-27",
    "창동고": "2026-06-29"
  };
  return row.mathExamDate || fallbackBySchool[row.schoolName] || `2026-06-${String(24 + (index % 5)).padStart(2, "0")}`;
}

function normalizeMathSubject(subject = "") {
  const value = String(subject || "").trim();
  if (!value) return "수학";
  if (value === "공통수학1" || value === "공통수학2") return "수학";
  return value;
}

function createMathExamEntry(row = {}, index = 0) {
  const baseId = safeIdPart(row.examPrepId || `${row.schoolName}_${row.grade}_${row.subject}`);
  return {
    id: `math_${baseId}_${index}`,
    date: row.mathExamDate || "",
    grade: row.grade || "",
    subject: normalizeMathSubject(row.subject),
    label: ""
  };
}

function normalizeMathExamEntries(row = {}, { includeBlank = false } = {}) {
  const entries = Array.isArray(row.mathExamDates) ? row.mathExamDates : [];
  const normalized = entries
    .map((entry, index) => ({
      id: entry.id || `math_${safeIdPart(row.examPrepId || row.schoolName || "exam")}_${index}`,
      date: entry.date || "",
      grade: entry.grade || row.grade || "",
      subject: entry.subject || normalizeMathSubject(row.subject),
      label: entry.label || "",
      sourceSchoolEventId: entry.sourceSchoolEventId || ""
    }))
    .filter((entry) => includeBlank || entry.date || entry.label);
  if (normalized.length) return normalized;
  if (row.mathExamDate) return [createMathExamEntry(row, 0)];
  return [];
}

function formatShortDate(date = "") {
  return date ? date.slice(5).replace("-", ".") : "날짜 미입력";
}

function compactCalendarLabel(value = "") {
  return String(value ?? "").replace(/\s+/g, "");
}

function escapeRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeRepeatedSchoolPrefix(value = "", schoolName = "") {
  const cleanSchool = String(schoolName || "").trim();
  let label = String(value || "").trim().replace(/\s+/g, " ");
  if (!cleanSchool || !label) return label;
  const duplicatePrefix = new RegExp(`^${escapeRegExp(cleanSchool)}\\s+${escapeRegExp(cleanSchool)}`);
  while (duplicatePrefix.test(label)) {
    label = label.replace(duplicatePrefix, cleanSchool);
  }
  return label;
}

function joinCalendarLabel(schoolName = "", detail = "", fallback = "") {
  const cleanSchool = String(schoolName || "").trim();
  const cleanDetail = normalizeRepeatedSchoolPrefix(String(detail || fallback || "").trim(), cleanSchool);
  if (!cleanDetail) return cleanSchool || "학교 미입력";
  if (!cleanSchool) return cleanDetail;
  if (compactCalendarLabel(cleanDetail).startsWith(compactCalendarLabel(cleanSchool))) {
    return cleanDetail;
  }
  return normalizeRepeatedSchoolPrefix(`${cleanSchool} ${cleanDetail}`, cleanSchool);
}

function formatMathExamEntryLabel(row = {}, entry = {}) {
  const explicitLabel = String(entry.label || "").trim();
  if (explicitLabel) return joinCalendarLabel(row.schoolName, explicitLabel);
  const subject = entry.subject || normalizeMathSubject(row.subject);
  const grade = entry.grade || row.grade || "";
  const detail = [grade, subject].filter(Boolean).join(" ").trim();
  return joinCalendarLabel(row.schoolName || "학교 미입력", detail, row.examName || "수학시험");
}

function formatCalendarSummaryLabel(event = {}) {
  return [event.schoolName, event.grade, event.examSubject || event.subject]
    .filter(Boolean)
    .join(" ")
    .trim() || formatCalendarEventLabel(event);
}

function getExamPrepLogicalKey(row = {}) {
  return [
    row.examCycle || currentExamCycle,
    normalizeSchoolName(row.schoolName || "") || compactCalendarLabel(row.schoolName || "학교 미입력"),
    compactCalendarLabel(row.grade || "학년 미입력"),
    compactCalendarLabel(row.subject || "공통수학1")
  ].join("|");
}

function getExamPrepRowCompleteness(row = {}) {
  return [
    row.publisher,
    row.examPeriod,
    row.mathExamDate,
    row.scope,
    row.subTextbook,
    row.review,
    row.revisedReview,
    row.specialNote,
    row.memo,
    ...(normalizeMathExamEntries(row).flatMap((entry) => [entry.date, entry.subject, entry.label]))
  ].filter((value) => String(value ?? "").trim()).length;
}

function isPlaceholderExamPrepRow(row = {}) {
  return String(row.examPrepId || "").endsWith("_textbook") || !String(row.publisher || "").trim();
}

function chooseRepresentativeExamPrepRow(currentRow, candidateRow) {
  const currentScore = getExamPrepRowCompleteness(currentRow);
  const candidateScore = getExamPrepRowCompleteness(candidateRow);
  if (candidateScore !== currentScore) return candidateScore > currentScore ? candidateRow : currentRow;
  const currentPlaceholder = isPlaceholderExamPrepRow(currentRow);
  const candidatePlaceholder = isPlaceholderExamPrepRow(candidateRow);
  if (currentPlaceholder !== candidatePlaceholder) return candidatePlaceholder ? currentRow : candidateRow;
  return String(candidateRow.updatedAt || "") > String(currentRow.updatedAt || "") ? candidateRow : currentRow;
}

function dedupeExamPrepRowsForDisplay(rows = []) {
  const grouped = new Map();
  rows.forEach((row) => {
    const key = getExamPrepLogicalKey(row);
    const previous = grouped.get(key);
    grouped.set(key, previous ? chooseRepresentativeExamPrepRow(previous, row) : row);
  });
  return [...grouped.values()];
}

function getSchoolCalendarFilterGroup(event = {}) {
  if (event.type === "examPeriod") return "examPeriod";
  if (event.type === "mathExam") return "mathExam";
  if (event.type === "preExam") return "preExam";
  if (event.type === "vacation") return "vacation";
  return "custom";
}

function formatCalendarEventLabel(event = {}) {
  if (event.type === "mathExam") {
    return joinCalendarLabel(event.schoolName, event.title || event.examSubject || "수학시험");
  }
  if (event.type === "examPeriod") {
    return joinCalendarLabel(event.schoolName, event.title || "시험기간");
  }
  return joinCalendarLabel(event.schoolName, event.title || event.examSubject || "일정");
}

function syncPrimaryMathExamDate(entries = []) {
  return entries.find((entry) => entry.date)?.date || "";
}

function examCycleTermKey(examCycle = "") {
  const [year, semester] = String(examCycle).split("-");
  return [year || "", semester || ""].join("-");
}

function examPublisherLinkKey(row) {
  return [
    examCycleTermKey(row.examCycle),
    normalizeSchoolName(row.schoolName || "") || "학교미입력",
    compactCalendarLabel(normalizeGradeLabel(row.grade || "")) || "학년미입력",
    compactCalendarLabel(row.subject || "공통수학1")
  ].join("_");
}

function findLinkedPublisher(existingRows, draftRow) {
  const linkKey = examPublisherLinkKey(draftRow);
  return existingRows.find((row) => examPublisherLinkKey(row) === linkKey && row.publisher)?.publisher ?? "";
}

function syncPublisherAcrossExamTerm(rows, sourceRow) {
  if (!sourceRow?.publisher) return rows;
  const linkKey = examPublisherLinkKey(sourceRow);
  return rows.map((row) =>
    row.examPrepId !== sourceRow.examPrepId && examPublisherLinkKey(row) === linkKey
      ? { ...row, publisher: sourceRow.publisher }
      : row
  );
}

function buildExamPrepRowsFromStudents(students, examCycle, classTemplateId = "", existingRows = []) {
  const classStudents = classTemplateId
    ? students.filter((student) => (student.status ?? "active") === "active" && student.defaultClassTemplateId === classTemplateId)
    : students.filter((student) => (student.status ?? "active") === "active");
  const seen = new Set();

  return classStudents
    .map((student) => {
      const schoolName = student.schoolName || "학교 미입력";
      const grade = student.grade || "학년 미입력";
      const subject = "공통수학1";
      const draftRow = { examCycle, schoolName, grade, subject };
      const key = examPublisherLinkKey(draftRow);
      if (seen.has(key)) return null;
      seen.add(key);

      return {
        examPrepId: `exam_prep_${safeIdPart(examCycle)}_${safeIdPart(schoolName)}_${safeIdPart(grade)}_${safeIdPart(subject)}`,
        examCycle,
        schoolName,
        grade,
        subject,
        publisher: findLinkedPublisher(existingRows, draftRow) || student.textbook || "",
        scope: "",
        subTextbook: "",
        examPeriod: getDefaultExamPeriodText(examCycle),
        mathExamDate: "",
        mathExamDates: [],
        review: "",
        revisedReview: "",
        memo: "",
        source: "학생DB 자동생성"
      };
    })
    .filter(Boolean);
}

function createSchoolEventFromExamPrepRow(row, index = 0) {
  return {
    eventId: `event_exam_${row.examPrepId ?? index}`,
    date: getDefaultMathExamDate(row, index),
    schoolName: row.schoolName || "학교 미입력",
    title: `${examCycleLabel(row.examCycle ?? currentExamCycle)} 수학시험`,
    type: "mathExam",
    color: "#dc2626"
  };
}

function createDefaultSchoolEvents(rows) {
  return rows.map((row, index) => createSchoolEventFromExamPrepRow(row, index));
}

function parseDateRangeText(value = "") {
  const text = String(value).trim();
  if (!text) return null;
  const match = text.match(/(\d{4})-(\d{2})-(\d{2})\s*[~\-–]\s*(?:(\d{4})-)?(\d{2})-(\d{2})/);
  if (!match) return null;
  const [, startYear, startMonth, startDay, endYear, endMonth, endDay] = match;
  return {
    date: `${startYear}-${startMonth}-${startDay}`,
    endDate: `${endYear || startYear}-${endMonth}-${endDay}`
  };
}

function formatDateRangeText(date = "", endDate = "") {
  if (date && endDate) return `${date} ~ ${endDate}`;
  return date || endDate || "";
}

function getDateRangeField(value = "", field) {
  const parsed = parseDateRangeText(value);
  if (!parsed) return "";
  return field === "endDate" ? parsed.endDate : parsed.date;
}

function updateDateRangeField(value = "", field, nextValue = "") {
  const parsed = parseDateRangeText(value) ?? { date: "", endDate: "" };
  const nextRange = { ...parsed, [field]: nextValue };
  return formatDateRangeText(nextRange.date, nextRange.endDate);
}

function getSchoolCalendarTargetRows(rows = [], event = {}) {
  const eventGrade = normalizeGradeLabel(event.grade || "");
  const eventSubject = normalizeMathSubject(event.examSubject || event.subject || "");
  const hasSpecificSubject = event.type === "mathExam" && eventSubject && !["수학", "수학시험"].includes(eventSubject);
  return rows.filter((row) => {
    const rowSchool = row.schoolName || "";
    const eventSchool = event.schoolName || "";
    if ((rowSchool || eventSchool) && !schoolNamesMatch(rowSchool, eventSchool, { allowBlank: false })) return false;
    if (event.examCycle && row.examCycle !== event.examCycle) return false;
    if (!eventGrade) return true;
    if (normalizeGradeLabel(row.grade || "") !== eventGrade) return false;
    if (hasSpecificSubject && normalizeMathSubject(row.subject || "") !== eventSubject) return false;
    return true;
  });
}

function upsertMathExamEntryFromSchoolEvent(row = {}, event = {}) {
  const entries = normalizeMathExamEntries(row);
  const subject = normalizeMathSubject(event.examSubject || event.title || "수학");
  const sourceEventId = event.eventId || "";
  const existingIndex = entries.findIndex((entry) =>
    (sourceEventId && entry.sourceSchoolEventId === sourceEventId) ||
    (entry.date === event.date && normalizeMathSubject(entry.subject) === subject)
  );
  const nextEntry = {
    ...(existingIndex >= 0 ? entries[existingIndex] : {}),
    id: existingIndex >= 0
      ? entries[existingIndex].id
      : `math_${safeIdPart(row.examPrepId || row.schoolName || "exam")}_${safeIdPart(sourceEventId || event.date || "date")}`,
    date: event.date || "",
    grade: event.grade || row.grade || "",
    subject,
    label: event.examSubject || "수학시험",
    sourceSchoolEventId: sourceEventId
  };
  return existingIndex >= 0
    ? entries.map((entry, index) => (index === existingIndex ? nextEntry : entry))
    : [...entries, nextEntry];
}

function syncSchoolCalendarEventToExamPrepRows(rows = [], event = {}, onUpdateExamPrepRow) {
  if (!onUpdateExamPrepRow || !["examPeriod", "mathExam"].includes(event.type)) return;
  const targetRows = getSchoolCalendarTargetRows(rows, event);
  targetRows.forEach((row) => {
    if (event.type === "examPeriod") {
      onUpdateExamPrepRow(row.examPrepId, "examPeriod", formatDateRangeText(event.date, event.endDate || event.date));
      return;
    }
    const nextEntries = upsertMathExamEntryFromSchoolEvent(row, event);
    onUpdateExamPrepRow(row.examPrepId, "mathExamDates", nextEntries);
    onUpdateExamPrepRow(row.examPrepId, "mathExamDate", syncPrimaryMathExamDate(nextEntries));
  });
}

function isExamLinkedCalendarEvent(event = {}) {
  return event.type === "examPeriod" || event.type === "mathExam";
}

function getExamPeriodGroupKey(row = {}) {
  const period = parseDateRangeText(row.examPeriod);
  return [
    row.schoolName || "학교 미입력",
    row.examCycle || currentExamCycle,
    period?.date || "",
    period?.endDate || ""
  ].join("|");
}

function isDateWithinEvent(date, event) {
  if (!event.endDate) return event.date === date;
  return event.date <= date && date <= event.endDate;
}

function getPeriodBarClass(date, event) {
  if (!event.endDate) return "periodSingle";
  const dayOfWeek = new Date(`${date}T00:00:00+09:00`).getDay();
  const startsHere = date === event.date || dayOfWeek === 0;
  const endsHere = date === event.endDate || dayOfWeek === 6;
  if (startsHere && endsHere) return "periodSingle";
  if (startsHere) return "periodStart";
  if (endsHere) return "periodEnd";
  return "periodMiddle";
}

function groupExamPeriodEventsForMonth(events = []) {
  const grouped = new Map();
  events.forEach((event) => {
    if (event.type !== "examPeriod") return;
    const key = [
      event.examCycle || currentExamCycle,
      event.date || "",
      event.endDate || event.date || ""
    ].join("|");
    const existing = grouped.get(key) ?? {
      ...event,
      eventId: `month_period_${safeIdPart(key)}`,
      title: "",
      schoolNames: new Set(),
      type: "examPeriod"
    };
    if (event.schoolName) existing.schoolNames.add(event.schoolName);
    existing.title = `${examCycleLabel(event.examCycle || currentExamCycle)} 시험기간 · ${existing.schoolNames.size}개 학교`;
    grouped.set(key, existing);
  });
  return [...grouped.values()].map((event) => ({
    ...event,
    schoolNames: [...event.schoolNames]
  }));
}

function formatPeriodSummaryLabel(event = {}) {
  const schools = Array.isArray(event.schoolNames) ? event.schoolNames.filter(Boolean) : [];
  if (!schools.length) return event.schoolName || "시험기간";
  if (schools.length <= 2) return schools.join(", ");
  return `${schools.slice(0, 2).join(", ")} 외 ${schools.length - 2}`;
}

function getMonthCellDisplayEvents(dayEvents = []) {
  const periodSummaries = groupExamPeriodEventsForMonth(dayEvents).slice(0, 3);
  const mathExamEvents = dayEvents.filter((event) => event.type === "mathExam").slice(0, 5);
  const regularEvents = dayEvents.filter((event) => event.type !== "examPeriod" && event.type !== "mathExam").slice(0, 2);
  const hiddenCount =
    Math.max(0, groupExamPeriodEventsForMonth(dayEvents).length - periodSummaries.length) +
    Math.max(0, dayEvents.filter((event) => event.type === "mathExam").length - mathExamEvents.length) +
    Math.max(0, dayEvents.filter((event) => event.type !== "examPeriod" && event.type !== "mathExam").length - regularEvents.length);
  return { hiddenCount, mathExamEvents, periodSummaries, regularEvents };
}

function buildExamCalendarEvents(rows) {
  const periodKeys = new Set();
  return dedupeExamPrepRowsForDisplay(rows).flatMap((row) => {
    const base = {
      schoolName: row.schoolName || "학교 미입력",
      grade: row.grade || "",
      examSubject: "수학",
      memo: "시험관리 탭에서 연동된 일정입니다.",
      derived: true,
      examPrepId: row.examPrepId
    };
    const events = [];
    const period = parseDateRangeText(row.examPeriod);
    if (period) {
      const periodKey = getExamPeriodGroupKey(row);
      if (!periodKeys.has(periodKey)) {
        periodKeys.add(periodKey);
        events.push({
          ...base,
          eventId: `derived_period_${safeIdPart(periodKey)}`,
          examPeriodGroupKey: periodKey,
          date: period.date,
          endDate: period.endDate,
          title: `${row.schoolName || "학교 미입력"} ${row.grade || ""} ${examCycleLabel(row.examCycle ?? currentExamCycle)} 시험기간`.trim(),
          type: "examPeriod",
          color: "#ef4444"
        });
      }
    }
    const mathEntries = normalizeMathExamEntries(row);
    const emittedMathKeys = new Set();
    const addMathExamEvent = (entry, index) => {
      if (!entry.date) return;
      const mathKey = `${entry.date}:${compactCalendarLabel(entry.label || entry.subject || "")}`;
      if (emittedMathKeys.has(mathKey)) return;
      emittedMathKeys.add(mathKey);
      events.push({
        ...base,
        grade: entry.grade || row.grade || "",
        examSubject: entry.label || entry.subject || row.subject || "수학",
        eventId: `derived_math_${row.examPrepId}_${entry.id || index}`,
        date: entry.date,
        endDate: "",
        title: formatMathExamEntryLabel(row, entry),
        type: "mathExam",
        mathExamEntryId: entry.id,
        mathExamEntryIndex: index,
        color: "#dc2626"
      });
    };
    mathEntries.forEach(addMathExamEvent);
    if (!emittedMathKeys.size && row.mathExamDate) {
      addMathExamEvent(createMathExamEntry(row, 0), 0);
    }
    return events;
  });
}

function mergeById(currentItems, nextItems, idKey) {
  const existingIds = new Set(currentItems.map((item) => item[idKey]));
  return [...currentItems, ...nextItems.filter((item) => !existingIds.has(item[idKey]))];
}

const lessonResearchSubjects = ["공통수학1", "공통수학2", "대수", "확률과 통계", "미적분", "기하", "미적분2"];

function createLessonResearchItem(subject = "공통수학1") {
  return {
    researchItemId: `research_${Date.now()}`,
    subject,
    category: "빈출 테마",
    title: "새 연구 항목",
    source: "",
    problemNote: "",
    teachingNote: "",
    materialPlan: "",
    priority: "중",
    status: "수집",
    createdAt: today,
    updatedAt: today
  };
}

function createDefaultLessonResearchItems() {
  return [
    {
      ...createLessonResearchItem("공통수학1"),
      researchItemId: "research_common_math_1_quadratic_theme",
      category: "빈출 테마",
      title: "이차함수 그래프와 부등식 연결",
      source: "고1 내신 대비 수업 메모",
      problemNote: "그래프의 위치 관계를 식으로 옮기는 과정에서 학생들이 자주 멈춤.",
      teachingNote: "교점 개수, 판별식, 부호표를 한 흐름으로 설명하는 판서를 보강.",
      materialPlan: "개념 확인 3문항 + 내신형 5문항으로 교재 후보 구성",
      priority: "상",
      status: "정리중"
    },
    {
      ...createLessonResearchItem("대수"),
      researchItemId: "research_algebra_sequence_note",
      category: "설명 아쉬움",
      title: "수열 점화식 풀이 도입",
      source: "학생 질문 기록",
      problemNote: "처음 보는 점화식을 등차/등비와 연결하지 못함.",
      teachingNote: "항을 직접 4개 써보고 규칙을 찾는 단계부터 다시 설계.",
      materialPlan: "대표 유형별 풀이 템플릿으로 정리",
      priority: "중",
      status: "수집"
    },
    {
      ...createLessonResearchItem("미적분"),
      researchItemId: "research_calculus_derivative_killer",
      category: "못 푼 문제",
      title: "접선 조건이 숨어 있는 미분 문제",
      source: "기출 변형 후보",
      problemNote: "조건 해석은 됐지만 식 세팅 시간이 오래 걸림.",
      teachingNote: "접점, 기울기, 함수값 조건을 표로 먼저 분해.",
      materialPlan: "킬러문항 해설 카드로 발전",
      priority: "상",
      status: "교재후보"
    }
  ];
}

function createDefaultProblemBooks() {
  return [
    {
      problemBookId: "book_common_math_step01",
      title: "공수1 고쟁이 STEP 01 다항식의 연산",
      subject: "공통수학1",
      grade: "고1",
      unit: "다항식의 연산",
      sourceFileName: "sample_textbook.pdf",
      totalProblems: 28,
      statusCounts: { first: 28, retry: 0, second: 0, wrong: 0, question: 0, outOfScope: 0, unchecked: 0 },
      problems: Array.from({ length: 28 }, (_, index) => ({
        problemId: `problem_step01_${index + 1}`,
        number: index + 1,
        status: "first",
        cropImageUrl: "",
        text: index === 3 ? "다항식 (x+3y-1)(2x-y+3)을 바르게 전개한 것은?" : "",
        answer: "",
        note: ""
      }))
    },
    {
      problemBookId: "book_common_math_step02",
      title: "공수1 고쟁이 STEP 02 항등식과 나머지정리",
      subject: "공통수학1",
      grade: "고1",
      unit: "항등식과 나머지정리",
      sourceFileName: "sample_textbook.pdf",
      totalProblems: 26,
      statusCounts: { first: 4, retry: 2, second: 0, wrong: 1, question: 0, outOfScope: 0, unchecked: 19 },
      problems: Array.from({ length: 26 }, (_, index) => ({
        problemId: `problem_step02_${index + 78}`,
        number: index + 78,
        status: index === 3 ? "retry" : index === 4 ? "wrong" : index < 4 ? "first" : "unchecked",
        cropImageUrl: "",
        text: "",
        answer: "",
        note: ""
      }))
    }
  ];
}

function createProblemBookFromFile(fileName) {
  const timestamp = Date.now();
  return {
    problemBookId: `book_uploaded_${timestamp}`,
    title: fileName.replace(/\.[^.]+$/, "") || "새 교재",
    subject: "공통수학1",
    grade: "고1",
    unit: "단원 미지정",
    sourceFileName: fileName,
    uploadedAt: today,
    totalProblems: 30,
    problems: Array.from({ length: 30 }, (_, index) => ({
      problemId: `problem_uploaded_${timestamp}_${index + 1}`,
      number: index + 1,
      status: "unchecked",
      cropImageUrl: "",
      text: "",
      answer: "",
      note: ""
    }))
  };
}

function createProblemBookFolder(folderName) {
  const timestamp = Date.now();
  return {
    problemBookId: `book_folder_${timestamp}`,
    title: folderName || "새 교재 폴더",
    subject: folderName || "과목 미지정",
    grade: "",
    unit: "",
    sourceFileName: "",
    uploadedAt: today,
    uploadedAcademy: academyBrandName,
    numberRange: "",
    averageMinutes: "",
    totalProblems: 0,
    problems: []
  };
}

function createProblemBooksFromPageSnapJson(jsonText) {
  let parsed;
  try {
    parsed = JSON.parse(jsonText);
  } catch (error) {
    throw new Error("JSON 형식이 올바르지 않습니다. PageSnap의 AI JSON 가져오기 형식 그대로 붙여넣어 주세요.");
  }

  const rows = Array.isArray(parsed) ? parsed : [parsed];
  if (rows.length === 0) {
    throw new Error("가져올 교재 항목이 없습니다.");
  }

  const timestamp = Date.now();
  return rows.map((row, index) => {
    const title = row.item_title || row.book_name || `PageSnap 교재 ${index + 1}`;
    const startProblem = Number.parseInt(row.start_problem_id ?? row.startProblemId ?? 1, 10) || 1;
    const endProblem = Number.parseInt(row.end_problem_id ?? row.endProblemId ?? startProblem, 10) || startProblem;
    const problemCount = Math.max(0, endProblem - startProblem + 1);
    const bookId = `book_pagesnap_${timestamp}_${index}_${safeIdPart(title)}`;

    return {
      problemBookId: bookId,
      title,
      subject: row.subject || "과목 미지정",
      grade: row.grade || inferGradeFromSubject(row.subject),
      unit: row.item_title || row.unit || title,
      sourceFileName: row.source_file_name || row.pdf_file_name || "PageSnap",
      sourceType: "pagesnap",
      bookName: row.book_name || "",
      uploadedAt: today,
      uploadedAcademy: academyBrandName,
      numberRange: `${startProblem}~${endProblem}`,
      startPdfPage: row.start_pdf_page ?? "",
      endPdfPage: row.end_pdf_page ?? "",
      startBookPage: row.start_book_page ?? "",
      endBookPage: row.end_book_page ?? "",
      averageMinutes: row.estimated_minutes_per_problem ?? "",
      confidence: row.confidence ?? "",
      note: row.note ?? "",
      totalProblems: problemCount,
      problems: Array.from({ length: problemCount }, (_, problemIndex) => {
        const number = startProblem + problemIndex;
        return {
          problemId: `${bookId}_problem_${number}`,
          number,
          status: "unchecked",
          cropImageUrl: "",
          text: "",
          answer: "",
          note: row.note ?? "",
          sourcePdfPage: row.start_pdf_page ?? "",
          sourceBookPage: row.start_book_page ?? ""
        };
      })
    };
  });
}

function createSsenCommonMath1PageSnapExample() {
  return JSON.stringify(
    [
      {
        item_title: "쎈 공통수학1 다항식의 연산",
        book_name: "쎈 공통수학1 본문",
        subject: "공통수학1",
        source_file_name: "쎈 공통수학1 본문.pdf",
        start_pdf_page: 1,
        end_pdf_page: 6,
        start_book_page: 8,
        end_book_page: 13,
        start_problem_id: 1,
        end_problem_id: 28,
        estimated_minutes_per_problem: 3,
        confidence: 0.7,
        note: "예시 데이터입니다. 실제 단원/페이지/문항 번호는 PageSnap에서 PDF를 보며 조정합니다."
      },
      {
        item_title: "쎈 공통수학1 항등식과 나머지정리",
        book_name: "쎈 공통수학1 본문",
        subject: "공통수학1",
        source_file_name: "쎈 공통수학1 본문.pdf",
        start_pdf_page: 7,
        end_pdf_page: 12,
        start_book_page: 14,
        end_book_page: 19,
        start_problem_id: 29,
        end_problem_id: 56,
        estimated_minutes_per_problem: 3,
        confidence: 0.7,
        note: "예시 데이터입니다. 실제 단원/페이지/문항 번호는 PageSnap에서 PDF를 보며 조정합니다."
      },
      {
        item_title: "쎈 공통수학1 인수분해",
        book_name: "쎈 공통수학1 본문",
        subject: "공통수학1",
        source_file_name: "쎈 공통수학1 본문.pdf",
        start_pdf_page: 13,
        end_pdf_page: 20,
        start_book_page: 20,
        end_book_page: 27,
        start_problem_id: 57,
        end_problem_id: 97,
        estimated_minutes_per_problem: 3,
        confidence: 0.7,
        note: "예시 데이터입니다. 실제 단원/페이지/문항 번호는 PageSnap에서 PDF를 보며 조정합니다."
      }
    ],
    null,
    2
  );
}

function inferGradeFromSubject(subject = "") {
  if (String(subject).includes("중")) return String(subject).slice(0, 2);
  return "고1";
}

const problemStatusMeta = {
  selected: { label: "선택", shortLabel: "선택", className: "selected" },
  first: { label: "첫회 맞음", shortLabel: "첫회", className: "first" },
  retry: { label: "한번 틀림", shortLabel: "한번 틀림", className: "retry" },
  mistake: { label: "실수/확실히 앎", shortLabel: "실수", className: "mistake" },
  second: { label: "2회차 맞음", shortLabel: "2회차", className: "second" },
  wrong: { label: "두번 틀림", shortLabel: "두번 틀림", className: "wrong" },
  question: { label: "질문 전", shortLabel: "질문 전", className: "question" },
  outOfScope: { label: "범위 제외", shortLabel: "범위x", className: "outOfScope" },
  unchecked: { label: "미체크", shortLabel: "미체크", className: "unchecked" }
};

const problemClickCycle = ["first", "retry", "wrong", "mistake"];

const defaultAiPrompts = {
  commentPolish: [
    "역할: 으뜸수학 고태영T의 수업 코멘트 편집자",
    "목표: 강사가 대강 적은 메모를 실제 발송 가능한 자연스러운 문장으로 다듬는다.",
    "작성 원칙:",
    "- 입력된 사실만 사용하고 없는 내용은 만들지 않는다.",
    "- 강사 원문의 핵심 의도와 표현의 사실은 반드시 반영한다.",
    "- 학생을 비난하거나 단정하지 않고, 다음 행동 중심으로 쓴다.",
    "- 알림톡에 바로 붙여 넣을 수 있게 최종 문장만 반환한다.",
    "- 제목, 마크다운, 구분선, 설명 문구는 쓰지 않는다.",
    "- 2~5문장 안에서 간결하게 작성한다."
  ].join("\n"),
  examReviewSpelling: [
    "역할: 시험 후 총평 맞춤법 교정자",
    "목표: 입력된 시험 후 총평의 맞춤법, 띄어쓰기, 명백한 오탈자만 고친다.",
    "작성 원칙:",
    "- 문장 구조, 어휘, 말투, 분량, 번호, 줄바꿈은 유지한다.",
    "- 사실, 날짜, 점수, 난이도, 과목명, 학교명, 교재명은 바꾸지 않는다.",
    "- 내용을 요약하거나 더 자연스럽게 다시 쓰지 않는다.",
    "- 새 문장이나 설명을 추가하지 않는다.",
    "- 수정할 곳이 없으면 원문을 그대로 반환한다.",
    "- 최종 교정문만 반환한다."
  ].join("\n"),
  preparationNotice: [
    "역할: 으뜸수학 고태영T의 수업메모 알림톡 편집자",
    "목표: 강사용 수업메모를 학생 또는 학부모에게 보낼 짧고 정중한 안내문으로 다듬는다.",
    "작성 원칙:",
    "- 메모에 없는 사실을 만들지 않는다.",
    "- 수신자가 바로 이해할 수 있게 한두 문단으로 정리한다.",
    "- 학생용은 분명하고 부담 없는 말투, 학부모용은 정중한 말투를 사용한다.",
    "- 최종 문장만 반환한다."
  ].join("\n"),
  noticeMessage: [
    "역할: 으뜸수학 고태영T의 알림톡 공지문 편집자",
    "목표: 강사가 입력한 교재/보강/공지 초안을 실제 발송 가능한 짧고 명료한 알림톡 문장으로 다듬는다.",
    "작성 원칙:",
    "- 입력된 사실만 사용하고 없는 날짜, 금액, 준비물, 일정은 만들지 않는다.",
    "- 학부모와 학생이 모두 읽어도 어색하지 않은 정중하고 분명한 말투를 사용한다.",
    "- 핵심 일정, 해야 할 행동, 문의가 필요한 지점을 빠르게 알 수 있게 쓴다.",
    "- 제목, 마크다운, 구분선, 설명 문구는 쓰지 않는다.",
    "- 알림톡 본문으로 바로 보낼 수 있게 최종 문장만 반환한다."
  ].join("\n")
};

const defaultAiSettings = {
  commentProvider: "auto",
  commentModel: "server-default",
  prompts: defaultAiPrompts
};

const defaultAttendanceSettings = {
  lateGraceMinutes: 0
};

function hasBrokenPromptEncoding(prompt = "") {
  const text = String(prompt ?? "");
  const replacementCount = (text.match(/\uFFFD/g) || []).length;
  return replacementCount >= 6 || /����|��/.test(text);
}

function normalizeAiPrompts(prompts = {}) {
  const sourcePrompts = prompts && typeof prompts === "object" ? prompts : {};
  const nextPrompts = Object.keys(defaultAiPrompts).reduce((normalized, promptKey) => ({
    ...normalized,
    [promptKey]: sourcePrompts[promptKey] ?? defaultAiPrompts[promptKey]
  }), {});
  return nextPrompts;
}

function normalizeAttendanceSettings(settings = {}) {
  return {
    ...defaultAttendanceSettings,
    ...(settings ?? {}),
    lateGraceMinutes: Number(settings?.lateGraceMinutes ?? defaultAttendanceSettings.lateGraceMinutes) || 0
  };
}

const defaultGeneratedLessonControls = {
  manualOverrideKeys: [],
  sundayMakeupBlocks: {},
  suppressedKeys: []
};

function getAiPrompt(settings = {}, promptKey) {
  const prompts = normalizeAiPrompts(settings?.prompts);
  return prompts[promptKey] ?? defaultAiPrompts[promptKey] ?? "";
}

function countProblemStatuses(problems = []) {
  return Object.keys(problemStatusMeta).reduce((counts, status) => {
    counts[status] = problems.filter((problem) => problem.status === status).length;
    return counts;
  }, {});
}

export function App() {
  const [activeView, setActiveView] = useState("lessons");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [session, setSession] = useState(() => readStoredTeacherSession());
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [lessonClipboard, setLessonClipboard] = useState(null);
  const [lessonUndoStack, setLessonUndoStack] = useState([]);
  const lessonCancelRequestsRef = useRef(new Map());
  const attendanceLoadedDateRef = useRef(getKoreaDateString());
  const [deletedLessonBundles, setDeletedLessonBundles] = useStoredState(storageKeys.deletedLessonBundles, []);
  const [classTemplates, setClassTemplates] = useStoredState(storageKeys.classTemplates, sampleData.classTemplates);
  const [students, setStudents] = useStoredState(storageKeys.students, sampleData.students);
  const [studentIntakeApplicants, setStudentIntakeApplicants] = useStoredState(storageKeys.studentIntakeApplicants, []);
  const [lessons, setLessons] = useStoredState(storageKeys.lessons, sampleData.lessons);
  const [records, setRecords] = useStoredState(storageKeys.records, sampleData.lessonStudentRecords);
  const [homeworks, setHomeworks] = useStoredState(storageKeys.homeworks, sampleData.homeworks);
  const [reportSnapshots, setReportSnapshots] = useStoredState(storageKeys.reportSnapshots, []);
  const [makeupTasks, setMakeupTasks] = useStoredState(storageKeys.makeupTasks, []);
  const [notificationLogs, setNotificationLogs] = useStoredState(storageKeys.notificationLogs, []);
  const [notificationJobs, setNotificationJobs] = useState([]);
  const [notificationJobsStatus, setNotificationJobsStatus] = useState({ state: "idle", message: "" });
  const [wrongProblems, setWrongProblems] = useStoredState(storageKeys.wrongProblems, sampleData.wrongProblems ?? []);
  const [problemBooks, setProblemBooks] = useStoredState(storageKeys.problemBooks, createDefaultProblemBooks());
  const [scoreRecords, setScoreRecords] = useStoredState(storageKeys.scoreRecords, sampleData.scoreRecords ?? []);
  const [academyTests, setAcademyTests] = useStoredState(storageKeys.academyTests, sampleData.academyTests ?? []);
  const [examPrepRows, setExamPrepRows] = useStoredState(storageKeys.examPrepRows, normalizeExamPrepRows(sampleData.examPrepRows ?? []));
  const [tallySubmissions, setTallySubmissions] = useStoredState(storageKeys.tallySubmissions, []);
  const [tallySummaries, setTallySummaries] = useStoredState(storageKeys.tallySummaries, {});
  const [studentQuestions, setStudentQuestions] = useStoredState(storageKeys.studentQuestions, []);
  const [examPostSubmissions, setExamPostSubmissions] = useStoredState(storageKeys.examPostSubmissions, []);
  const [examPostTargetStudentIds, setExamPostTargetStudentIds] = useStoredState(storageKeys.examPostTargetStudentIds, {});
  const [schoolEvents, setSchoolEvents] = useStoredState(
    storageKeys.schoolEvents,
    createDefaultSchoolEvents(sampleData.examPrepRows ?? [])
  );
  const [lessonResearchItems, setLessonResearchItems] = useStoredState(
    storageKeys.lessonResearchItems,
    createDefaultLessonResearchItems()
  );
  const [resourceMaterials, setResourceMaterials] = useStoredState(storageKeys.resourceMaterials, []);
  const [aiSettings, setAiSettings] = useStoredState(storageKeys.aiSettings, defaultAiSettings);
  const [attendanceSettings, setAttendanceSettings] = useStoredState(
    storageKeys.attendanceSettings,
    defaultAttendanceSettings
  );
  const [teacherAccountSettings, setTeacherAccountSettings] = useState(defaultTeacherAccountSettings);
  const [lessonNotificationPlans, setLessonNotificationPlans] = useStoredState(storageKeys.lessonNotificationPlans, {});
  const [generatedLessonControls, setGeneratedLessonControls] = useStoredState(
    "academy-os.generatedLessonControls.v1",
    defaultGeneratedLessonControls
  );
  const [generatedLessonSaveStatus, setGeneratedLessonSaveStatus] = useState({
    lessons: [],
    message: "",
    state: "idle"
  });
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [isAppStateReady, setIsAppStateReady] = useState(false);
  const [isPortalDataReady, setIsPortalDataReady] = useState(false);
  const [attendanceReloadKey, setAttendanceReloadKey] = useState(0);
  const [saveStates, setSaveStates] = useState({});
  const [appStateSaveState, setAppStateSaveState] = useState("idle");
  const [examPrepRowSaveStates, setExamPrepRowSaveStates] = useState({});
  const [studentAutoSaveStates, setStudentAutoSaveStates] = useState({});
  const [studentIntakeSaveStates, setStudentIntakeSaveStates] = useState({});
  const [reportModal, setReportModal] = useState(null);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
  const [isLessonJournalOpen, setIsLessonJournalOpen] = useState(false);
  const [attendanceModal, setAttendanceModal] = useState(null);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [lessonDeleteModalId, setLessonDeleteModalId] = useState("");
  const [selectedReportLessonId, setSelectedReportLessonId] = useState("");
  const recordsRef = useRef(records);
  const homeworksRef = useRef(homeworks);
  const autoSaveTimersRef = useRef(new Map());
  const initialMakeupTasksRef = useRef(makeupTasks);
  const initialExamPrepRowsRef = useRef(examPrepRows);
  const initialSchoolEventsRef = useRef(schoolEvents);
  const appStateSaveRequestRef = useRef(0);
  const examPrepRowSaveRequestRef = useRef({});
  const studentAutoSaveRequestRef = useRef({});
  const studentIntakeSaveRequestRef = useRef({});
  const isApplyingRemoteAppStateRef = useRef(false);
  const attendanceOnlyMode = isAttendanceOnlyRoute();

  const sharedAppState = useMemo(() => ({
    academyTests,
    aiSettings,
    attendanceSettings,
    deletedLessonBundles,
    generatedLessonControls,
    lessonNotificationPlans,
    lessonResearchItems,
    notificationLogs,
    problemBooks,
    reportSnapshots,
    scoreRecords,
    examPostSubmissions,
    examPostTargetStudentIds,
    studentQuestions,
    tallySubmissions,
    tallySummaries,
    wrongProblems
  }), [
    academyTests,
    aiSettings,
    attendanceSettings,
    deletedLessonBundles,
    generatedLessonControls,
    lessonNotificationPlans,
    lessonResearchItems,
    notificationLogs,
    problemBooks,
    reportSnapshots,
    scoreRecords,
    examPostSubmissions,
    examPostTargetStudentIds,
    studentQuestions,
    tallySubmissions,
    tallySummaries,
    wrongProblems
  ]);
  const initialSharedAppStateRef = useRef(sharedAppState);

  useEffect(() => {
    let isMounted = true;

    async function loadCoreDataFromApi() {
      if (!session && !attendanceOnlyMode) {
        setIsAppStateReady(false);
        setIsPortalDataReady(false);
        return;
      }
      if (attendanceOnlyMode) setIsAppStateReady(false);
      try {
        if (attendanceOnlyMode) {
          const [studentsResponse, lessonsResponse, recordsResponse] = await Promise.all([
            fetch(apiUrl("/api/students")),
            fetch(apiUrl("/api/lessons")),
            fetch(apiUrl("/api/lesson-records"))
          ]);
          const [studentsResult, lessonsResult, recordsResult] = await Promise.all([
            studentsResponse.json(),
            lessonsResponse.json(),
            recordsResponse.json()
          ]);
          if (!isMounted) return;
          const nextLessons = lessonsResult.ok && Array.isArray(lessonsResult.lessons)
            ? filterActiveLessons(lessonsResult.lessons)
            : [];
          if (studentsResult.ok && Array.isArray(studentsResult.students)) {
            setStudents(studentsResult.students);
          }
          if (nextLessons.length > 0) {
            setLessons(nextLessons);
          }
          if (recordsResult.ok && Array.isArray(recordsResult.records)) {
            setRecords(nextLessons.length > 0 ? filterRecordsForLessons(recordsResult.records, nextLessons) : recordsResult.records);
          }
          setAttendanceSettings((current) => normalizeAttendanceSettings(current));
          attendanceLoadedDateRef.current = getKoreaDateString();
          setIsPortalDataReady(false);
          setIsAppStateReady(true);
          return;
        }
        if (session && ["student", "parent"].includes(session.role)) {
          const portalData = await fetchPortalData(session.sessionToken);
          if (!isMounted) return;
          setStudents(portalData.students ?? []);
          setLessons(portalData.lessons ?? []);
          setRecords(portalData.records ?? []);
          setHomeworks(portalData.homeworks ?? []);
          setMakeupTasks(portalData.makeupTasks ?? []);
          setExamPrepRows(portalData.examPrepRows ?? []);
          setSchoolEvents(portalData.schoolEvents ?? []);
          setResourceMaterials(portalData.materials ?? []);
          setReportSnapshots(portalData.reportSnapshots ?? []);
          setScoreRecords(portalData.scoreRecords ?? []);
          setExamPostSubmissions(portalData.examPostSubmissions ?? []);
          if (portalData.examPostTargetStudentIds && typeof portalData.examPostTargetStudentIds === "object") {
            setExamPostTargetStudentIds(portalData.examPostTargetStudentIds);
          }
          setStudentQuestions(portalData.studentQuestions ?? []);
          setIsAppStateReady(false);
          setIsPortalDataReady(true);
          return;
        }
        setIsPortalDataReady(false);
        const [
          studentsResponse,
          studentIntakeApplicantsResponse,
          classesResponse,
          lessonsResponse,
          recordsResponse,
          homeworksResponse,
          makeupTasksResponse,
          examPrepRowsResponse,
          schoolEventsResponse,
          appStateResponse,
          resourceMaterialsResponse
        ] = await Promise.all([
          fetch(apiUrl("/api/students")),
          fetch(apiUrl("/api/student-intake-applicants")),
          fetch(apiUrl("/api/classes")),
          fetch(apiUrl("/api/lessons")),
          fetch(apiUrl("/api/lesson-records")),
          fetch(apiUrl("/api/homeworks")),
          fetch(apiUrl("/api/makeup-tasks")),
          fetch(apiUrl("/api/exam-prep-rows")),
          fetch(apiUrl("/api/school-events")),
          fetch(apiUrl("/api/app-state")),
          fetch(apiUrl("/api/resource-materials"))
        ]);
        const [
          studentsResult,
          studentIntakeApplicantsResult,
          classesResult,
          lessonsResult,
          recordsResult,
          homeworksResult,
          makeupTasksResult,
          examPrepRowsResult,
          schoolEventsResult,
          appStateResult,
          resourceMaterialsResult
        ] = await Promise.all([
          studentsResponse.json(),
          studentIntakeApplicantsResponse.json(),
          classesResponse.json(),
          lessonsResponse.json(),
          recordsResponse.json(),
          homeworksResponse.json(),
          makeupTasksResponse.json(),
          examPrepRowsResponse.json(),
          schoolEventsResponse.json(),
          appStateResponse.json(),
          resourceMaterialsResponse.json()
        ]);
        if (!isMounted) return;
        if (studentsResult.ok && Array.isArray(studentsResult.students) && studentsResult.students.length > 0) {
          setStudents(studentsResult.students);
        }
        if (studentIntakeApplicantsResult.ok && Array.isArray(studentIntakeApplicantsResult.applicants)) {
          setStudentIntakeApplicants(studentIntakeApplicantsResult.applicants);
        }
        if (classesResult.ok && Array.isArray(classesResult.classTemplates) && classesResult.classTemplates.length > 0) {
          setClassTemplates(classesResult.classTemplates);
        }
        const normalizedLessons = lessonsResult.ok && Array.isArray(lessonsResult.lessons)
          ? normalizeHomeworkMakeupLessonColors(lessonsResult.lessons, makeupTasksResult.makeupTasks ?? [])
          : [];
        if (normalizedLessons.length > 0) {
          setLessons(filterActiveLessons(normalizedLessons));
          normalizedLessons
            .filter((lesson, index) => lesson.color !== lessonsResult.lessons[index]?.color)
            .forEach((lesson) => postJson("/api/lessons", { lesson }).catch((error) => console.error(error)));
        }
        if (recordsResult.ok && Array.isArray(recordsResult.records) && recordsResult.records.length > 0) {
          const sourceLessons = normalizedLessons.length > 0 ? normalizedLessons : lessons;
          setRecords(filterRecordsForLessons(recordsResult.records, sourceLessons));
        }
        if (homeworksResult.ok && Array.isArray(homeworksResult.homeworks) && homeworksResult.homeworks.length > 0) {
          const sourceLessons = normalizedLessons.length > 0 ? normalizedLessons : lessons;
          setHomeworks(filterHomeworksForLessons(homeworksResult.homeworks, sourceLessons));
        }
        if (makeupTasksResult.ok && Array.isArray(makeupTasksResult.makeupTasks)) {
          setMakeupTasks(makeupTasksResult.makeupTasks);
        }
        if (examPrepRowsResult.ok && Array.isArray(examPrepRowsResult.examPrepRows)) {
          const normalizedRows = normalizeExamPrepRows(examPrepRowsResult.examPrepRows);
          const changedRows = normalizedRows.filter((row, index) => JSON.stringify(row) !== JSON.stringify(examPrepRowsResult.examPrepRows[index]));
          setExamPrepRows(normalizedRows);
          if (changedRows.length > 0) {
            persistExamPrepRows(changedRows);
          }
        }
        if (schoolEventsResult.ok && Array.isArray(schoolEventsResult.schoolEvents)) {
          setSchoolEvents(schoolEventsResult.schoolEvents);
        }
        if (appStateResult.ok && appStateResult.states && Object.keys(appStateResult.states).length > 0) {
          const states = appStateResult.states;
          isApplyingRemoteAppStateRef.current = true;
          if (Array.isArray(states.academyTests)) setAcademyTests(states.academyTests);
          if (states.aiSettings) setAiSettings(states.aiSettings);
          if (states.attendanceSettings) setAttendanceSettings(normalizeAttendanceSettings(states.attendanceSettings));
          if (Array.isArray(states.deletedLessonBundles)) setDeletedLessonBundles(states.deletedLessonBundles);
          if (states.generatedLessonControls) setGeneratedLessonControls(normalizeGeneratedLessonControls(states.generatedLessonControls));
          if (states.lessonNotificationPlans && typeof states.lessonNotificationPlans === "object" && !Array.isArray(states.lessonNotificationPlans)) {
            setLessonNotificationPlans(states.lessonNotificationPlans);
          }
          if (Array.isArray(states.lessonResearchItems)) setLessonResearchItems(states.lessonResearchItems);
          if (Array.isArray(states.notificationLogs)) setNotificationLogs(states.notificationLogs);
          if (Array.isArray(states.problemBooks)) setProblemBooks(states.problemBooks);
          if (Array.isArray(states.reportSnapshots)) setReportSnapshots(states.reportSnapshots);
          if (Array.isArray(states.scoreRecords)) setScoreRecords(states.scoreRecords);
          if (Array.isArray(states.examPostSubmissions)) setExamPostSubmissions(states.examPostSubmissions);
          if (states.examPostTargetStudentIds && typeof states.examPostTargetStudentIds === "object" && !Array.isArray(states.examPostTargetStudentIds)) {
            setExamPostTargetStudentIds(states.examPostTargetStudentIds);
          }
          if (Array.isArray(states.studentQuestions)) setStudentQuestions(states.studentQuestions);
          if (Array.isArray(states.tallySubmissions)) setTallySubmissions(states.tallySubmissions);
          if (states.tallySummaries && typeof states.tallySummaries === "object" && !Array.isArray(states.tallySummaries)) {
            setTallySummaries(states.tallySummaries);
          }
          if (Array.isArray(states.wrongProblems)) setWrongProblems(states.wrongProblems);
          window.setTimeout(() => {
            isApplyingRemoteAppStateRef.current = false;
            setIsAppStateReady(true);
          }, 0);
        } else if (appStateResult.ok) {
          postAppState(initialSharedAppStateRef.current).catch((error) => console.error(error));
          setIsAppStateReady(true);
        }
        if (resourceMaterialsResult.ok && Array.isArray(resourceMaterialsResult.materials)) {
          setResourceMaterials(resourceMaterialsResult.materials);
        }
      } catch (error) {
        console.info("academy-os API sync skipped:", error.message);
        if (attendanceOnlyMode) setIsAppStateReady(false);
      }
    }

    loadCoreDataFromApi();
    return () => {
      isMounted = false;
    };
  }, [
    setClassTemplates,
    setAcademyTests,
    setAiSettings,
    setAttendanceSettings,
    setDeletedLessonBundles,
    setExamPrepRows,
    setGeneratedLessonControls,
    setHomeworks,
    setLessonResearchItems,
    setLessons,
    setMakeupTasks,
    setNotificationLogs,
    setProblemBooks,
    setRecords,
    setReportSnapshots,
    setResourceMaterials,
    setScoreRecords,
    setSchoolEvents,
    setStudents,
    setStudentIntakeApplicants,
    setTallySubmissions,
    setTallySummaries,
    setWrongProblems,
    session,
    attendanceOnlyMode,
    attendanceReloadKey
  ]);

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady || isApplyingRemoteAppStateRef.current) return;
    const requestId = appStateSaveRequestRef.current + 1;
    appStateSaveRequestRef.current = requestId;
    setAppStateSaveState("saving");
    postAppState(sharedAppState)
      .then(() => {
        if (appStateSaveRequestRef.current === requestId) setAppStateSaveState("saved");
      })
      .catch((error) => {
        console.error(error);
        if (appStateSaveRequestRef.current === requestId) setAppStateSaveState("failed");
      });
  }, [isAppStateReady, sharedAppState, session?.role]);

  useEffect(() => {
    if (!isPortalDataReady || !["student", "parent"].includes(session?.role) || !session?.sessionToken) return;
    postPortalState(session.sessionToken, {
      examPostSubmissions,
      studentQuestions
    }).catch((error) => console.error(error));
  }, [examPostSubmissions, isPortalDataReady, session?.role, session?.sessionToken, studentQuestions]);

  useEffect(() => {
    setDeletedLessonBundles((current) => pruneExpiredLessonDeletes(current));
    setLessons((currentLessons) => filterActiveLessons(currentLessons));
  }, [setDeletedLessonBundles, setLessons]);

  useEffect(() => {
    setRecords((currentRecords) => filterRecordsForLessons(currentRecords, lessons));
    setHomeworks((currentHomeworks) => filterHomeworksForLessons(currentHomeworks, lessons));
  }, [lessons, setHomeworks, setRecords]);

  const generatedLessonPlanRows = useMemo(
    () => examPrepRows.filter((row) => (row.examCycle || currentExamCycle) === currentExamCycle),
    [examPrepRows]
  );

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady) return;
    setExamPrepRows((current) => {
      const repairedRows = repairExamPrepRowsFromPersistedPreExamLessons(current, lessons);
      const changedRows = repairedRows.filter((row, index) => JSON.stringify(row) !== JSON.stringify(current[index]));
      if (changedRows.length > 0) {
        persistExamPrepRows(changedRows);
      }
      return changedRows.length > 0 ? repairedRows : current;
    });
  }, [isAppStateReady, lessons, session?.role, setExamPrepRows]);

  const generatedLessonPlan = useMemo(
    () => buildGeneratedLessonPlan({ rows: generatedLessonPlanRows, lessons, students, controls: generatedLessonControls }),
    [generatedLessonControls, generatedLessonPlanRows, lessons, students]
  );

  function updateGeneratedLessonControls(updater) {
    setGeneratedLessonControls((current) => normalizeGeneratedLessonControls(updater(normalizeGeneratedLessonControls(current))));
  }

  function markGeneratedLessonManualOverride(lesson) {
    const generatedKey = getGeneratedLessonKey(lesson);
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) => ({
      ...current,
      manualOverrideKeys: [...new Set([...(current.manualOverrideKeys ?? []), generatedKey])]
    }));
  }

  function suppressGeneratedLessonKey(generatedKey) {
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) => ({
      ...current,
      suppressedKeys: [...new Set([...(current.suppressedKeys ?? []), generatedKey])]
    }));
  }

  function unsuppressGeneratedLessonKey(generatedKey) {
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) => ({
      ...current,
      suppressedKeys: (current.suppressedKeys ?? []).filter((key) => key !== generatedKey)
    }));
  }

  function clearGeneratedLessonManualOverride(generatedKey) {
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) => ({
      ...current,
      manualOverrideKeys: (current.manualOverrideKeys ?? []).filter((key) => key !== generatedKey)
    }));
  }

  function updateExamSundayMakeupBlocks(generatedKey, blocks) {
    if (!generatedKey) return;
    updateGeneratedLessonControls((current) => ({
      ...current,
      sundayMakeupBlocks: {
        ...(current.sundayMakeupBlocks ?? {}),
        [generatedKey]: blocks
      }
    }));
  }

  function mergeGeneratedLessonsIntoState(lessonsToSave) {
    setLessons((current) => {
      const next = [...current];
      lessonsToSave.forEach((lesson) => {
        const index = next.findIndex((item) => item.lessonId === lesson.lessonId);
        if (index >= 0) next[index] = { ...next[index], ...lesson };
        else next.push(lesson);
      });
      return next;
    });
  }

  function saveGeneratedLessons(lessonsToSave) {
    if (lessonsToSave.length === 0) return;
    mergeGeneratedLessonsIntoState(lessonsToSave);
    setGeneratedLessonSaveStatus({
      lessons: lessonsToSave,
      message: `자동 수업 ${lessonsToSave.length}건 저장 중...`,
      state: "saving"
    });
    postJsonWithTimeout(
      "/api/lessons/bulk",
      { lessons: lessonsToSave },
      20000,
      "자동 수업 저장이 20초를 넘었습니다. 잠시 뒤 다시 시도해 주세요."
    )
      .then((result) => {
        if (Array.isArray(result.lessons) && result.lessons.length > 0) {
          mergeGeneratedLessonsIntoState(result.lessons);
        }
        setGeneratedLessonSaveStatus({
          lessons: [],
          message: `자동 수업 ${lessonsToSave.length}건 저장 완료`,
          state: "saved"
        });
      })
      .catch((error) => {
        console.error(error);
        setGeneratedLessonSaveStatus({
          lessons: lessonsToSave,
          message: `자동 수업 저장 실패 · ${error.message}`,
          state: "failed"
        });
      });
  }

  function saveGeneratedLessonsFromPlan(planItems) {
    const lessonsToSave = planItems
      .filter((item) => item.status === "create" || item.status === "update")
      .map((item) => item.lesson);
    saveGeneratedLessons(lessonsToSave);
  }

  function handleApplyGeneratedLessons() {
    saveGeneratedLessonsFromPlan(generatedLessonPlan);
  }

  function handleApplyGeneratedLesson(generatedKey) {
    saveGeneratedLessonsFromPlan(generatedLessonPlan.filter((item) => item.generatedKey === generatedKey));
  }

  function handleRetryGeneratedLessonSave() {
    if (generatedLessonSaveStatus.lessons?.length) {
      saveGeneratedLessons(generatedLessonSaveStatus.lessons);
      return;
    }
    saveGeneratedLessonsFromPlan(generatedLessonPlan);
  }

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady || attendanceOnlyMode) return;
    const preExamLessonsToSync = generatedLessonPlan.filter(
      (item) => item.lesson?.lessonType === "preExam" && (item.status === "create" || item.status === "update")
    );
    if (preExamLessonsToSync.length === 0) return;
    saveGeneratedLessonsFromPlan(preExamLessonsToSync);
  }, [attendanceOnlyMode, generatedLessonPlan, isAppStateReady, session?.role]);

  async function refreshNotificationJobs() {
    setNotificationJobsStatus({ state: "loading", message: "알림 기록을 불러오는 중입니다." });
    try {
      const result = await getJsonWithTimeout(
        "/api/notification-jobs?limit=300",
        12000,
        "알림 기록 조회가 12초를 넘었습니다. 발송 기능은 사용할 수 있고, 기록만 새로고침으로 다시 확인해 주세요."
      );
      if (result.ok && Array.isArray(result.notificationJobs)) {
        setNotificationJobs(result.notificationJobs);
        setNotificationJobsStatus({
          state: "ready",
          message: `알림 기록 ${result.notificationJobs.length}건을 불러왔습니다.`
        });
      }
    } catch (error) {
      setNotificationJobsStatus({ state: "failed", message: error.message });
      console.info("academy-os notification jobs skipped:", error.message);
    }
  }

  useEffect(() => {
    let isMounted = true;

    async function loadIntegrationStatus() {
      try {
        const response = await fetch(apiUrl("/api/integrations/status"));
        const result = await response.json();
        if (isMounted && result.ok) {
          setIntegrationStatus(result.result);
        }
      } catch (error) {
        if (isMounted) setIntegrationStatus(null);
        console.info("academy-os integration status skipped:", error.message);
      }
    }

    loadIntegrationStatus();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    refreshNotificationJobs();
  }, []);

  useEffect(() => {
    recordsRef.current = records;
  }, [records]);

  useEffect(() => {
    homeworksRef.current = homeworks;
  }, [homeworks]);

  useEffect(() => () => {
    autoSaveTimersRef.current.forEach((timerId) => clearTimeout(timerId));
    autoSaveTimersRef.current.clear();
  }, []);

  useEffect(() => {
    setExamPrepRows((current) => {
      const normalizedRows = normalizeExamPrepRows(current);
      const changedRows = normalizedRows.filter((row, index) => JSON.stringify(row) !== JSON.stringify(current[index]));
      if (changedRows.length > 0) {
        persistExamPrepRows(changedRows);
      }
      return changedRows.length > 0 ? normalizedRows : current;
    });
  }, [setExamPrepRows]);

  useEffect(() => {
    setStudents((currentStudents) => {
      let hasChanged = false;
      const nextStudents = currentStudents.map((student) => {
        const textbook = getTextbookFromExamPrep(student);
        const normalizedGrade = normalizeGradeLabel(student.grade);
        if ((textbook && student.textbook !== textbook) || (normalizedGrade && student.grade !== normalizedGrade)) {
          hasChanged = true;
          return { ...student, grade: normalizedGrade || student.grade, textbook };
        }
        return student;
      });
      return hasChanged ? nextStudents : currentStudents;
    });
  }, [setStudents]);

  useEffect(() => {
    setExamPrepRows((current) => {
      const nextRowsToAdd = buildExamPrepRowsFromStudents(students, currentExamCycle, "template_mwf_7_10", current);
      const nextRows = mergeById(current, nextRowsToAdd, "examPrepId");
      const addedRows = nextRows.filter((row) => !current.some((item) => item.examPrepId === row.examPrepId));
      if (addedRows.length > 0) {
        persistExamPrepRows(addedRows);
      }
      return nextRows;
    });
  }, [setExamPrepRows, students]);

  useEffect(() => {
    setExamPrepRows((current) => {
      let hasChanged = false;
      const nextRows = current.map((row) => {
        if (row.examPeriod || !row.examCycle) return row;
        hasChanged = true;
        return { ...row, examPeriod: getDefaultExamPeriodText(row.examCycle) };
      });
      if (hasChanged) {
        persistExamPrepRows(nextRows.filter((row, index) => row !== current[index]));
      }
      return hasChanged ? nextRows : current;
    });
  }, [setExamPrepRows]);

  const examSundayMakeupBlockLessons = useMemo(
    () => createExamSundayMakeupBlockLessons(lessons, generatedLessonControls),
    [generatedLessonControls, lessons]
  );
  const autoGeneratedDisplayLessons = useMemo(
    () => generatedLessonPlan
      .filter((item) => item.lesson?.lessonType !== "preExam" && (item.status === "create" || item.status === "update"))
      .map((item) => ({
        ...item.lesson,
        isExamPrepAutoLesson: true,
        isVirtualGeneratedLesson: item.status === "create",
        generatedKey: item.generatedKey
      })),
    [generatedLessonPlan]
  );
  const calendarLessons = useMemo(
    () => {
      const autoDisplayKeys = new Set(autoGeneratedDisplayLessons.flatMap(getGeneratedLessonIdentityKeys));
      const baseLessons = lessons.filter((lesson) => !getGeneratedLessonIdentityKeys(lesson).some((key) => autoDisplayKeys.has(key)));
      return [...baseLessons, ...autoGeneratedDisplayLessons, ...examSundayMakeupBlockLessons];
    },
    [autoGeneratedDisplayLessons, examSundayMakeupBlockLessons, lessons]
  );
  const lessonsForDate = useMemo(
    () => calendarLessons.filter((lesson) => lesson.date === selectedDate).sort(sortByTime),
    [calendarLessons, selectedDate]
  );

  const selectedLesson =
    calendarLessons.find((lesson) => lesson.lessonId === selectedLessonId) ?? lessonsForDate[0] ?? null;

  useEffect(() => {
    if (!selectedLessonId && lessonsForDate[0]) {
      setSelectedLessonId(lessonsForDate[0].lessonId);
    }
  }, [lessonsForDate, selectedLessonId]);

  const selectedRecords = selectedLesson
    ? records.filter((record) => record.lessonId === selectedLesson.lessonId)
    : [];

  const selectedStudents = selectedLesson
    ? getActiveLessonStudents(selectedLesson, students)
    : [];

  useEffect(() => {
    if (!isAppStateReady || session?.role !== "teacher") return;
    const inactiveStudentIds = students.filter(isWithdrawnStudent).map((student) => student.studentId);
    if (inactiveStudentIds.length === 0) return;
    removeStudentsFromLessonsFromDate(inactiveStudentIds, today);
  }, [isAppStateReady, lessons, session?.role, students]);

  useEffect(() => {
    if (!isLessonJournalOpen || !selectedLesson?.lessonId || !isAppStateReady || session?.role !== "teacher") return;
    const activeLessonStudents = getActiveLessonStudents(selectedLesson, students);
    if (activeLessonStudents.length === 0) return;
    const currentPlan = lessonNotificationPlans[selectedLesson.lessonId];
    const currentMode = currentPlan?.mode || "default";
    if (currentMode === "none") return;
    const delayMinutes = currentMode === "delay30" ? 30 : 0;
    if (isLessonAlimtalkScheduleExpired(selectedLesson, delayMinutes)) return;

    const expectedJobIds = new Set(
      activeLessonStudents.flatMap((student) => [
        getLessonNotificationJobId(selectedLesson.lessonId, student.studentId, "parent"),
        getLessonNotificationJobId(selectedLesson.lessonId, student.studentId, "student")
      ])
    );
    const scheduledJobCount = notificationJobs.filter((job) =>
      expectedJobIds.has(job.notificationJobId) && job.status === "scheduled"
    ).length;
    const hasStaleAttendanceJob = activeLessonStudents.some((student) => {
      const record = findLessonStudentRecord(recordsRef.current, selectedLesson, student) ?? createEmptyRecord(selectedLesson, student);
      const jobs = ["parent", "student"]
        .map((target) => notificationJobs.find((job) =>
          job.notificationJobId === getLessonNotificationJobId(selectedLesson.lessonId, student.studentId, target) &&
          job.status === "scheduled"
        ))
        .filter(Boolean);
      if (jobs.length === 0) return true;
      return jobs.some((job) => {
        const payload = job.payload ?? {};
        return (
          String(payload.attendanceStatus ?? "") !== String(record.attendanceStatus ?? "pending") ||
          String(payload.attendanceReason ?? payload.reason ?? "") !== String(record.attendanceReason ?? "") ||
          String(payload.checkInTime ?? "") !== String(record.checkInTime ?? "") ||
          String(payload.checkOutTime ?? "") !== String(record.checkOutTime ?? "") ||
          String(payload.lateMinutes ?? "") !== String(record.lateMinutes ?? "")
        );
      });
    });
    if (expectedJobIds.size > 0 && scheduledJobCount >= expectedJobIds.size && !hasStaleAttendanceJob) return;

    if (!currentPlan) {
      setLessonNotificationPlans((current) => {
        if (current[selectedLesson.lessonId]) return current;
        return {
          ...current,
          [selectedLesson.lessonId]: { mode: "default", updatedAt: new Date().toISOString() }
        };
      });
    }
    applyLessonNotificationPlan(selectedLesson.lessonId, currentMode);
  }, [isAppStateReady, isLessonJournalOpen, lessonNotificationPlans, notificationJobs, records, selectedLesson, session?.role, students]);

  const reportLesson = lessons.find((lesson) => lesson.lessonId === selectedReportLessonId) ?? lessons[0];
  const reportRecords = reportLesson
    ? records.filter((record) => record.lessonId === reportLesson.lessonId)
    : [];
  const pendingDeleteLesson = lessons.find((lesson) => lesson.lessonId === lessonDeleteModalId) ?? null;
  useEffect(() => {
    legacySensitiveStorageKeys.forEach((key) => window.localStorage.removeItem(key));
  }, []);

  useEffect(() => {
    if (!attendanceOnlyMode) return undefined;
    document.body.classList.add("attendanceOnlyBody");
    return () => document.body.classList.remove("attendanceOnlyBody");
  }, [attendanceOnlyMode]);

  useEffect(() => {
    if (!attendanceOnlyMode) return undefined;

    function refreshAttendanceDataIfDateChanged() {
      const currentDate = getKoreaDateString();
      if (attendanceLoadedDateRef.current === currentDate && isAppStateReady) return;
      attendanceLoadedDateRef.current = currentDate;
      setIsAppStateReady(false);
      setAttendanceReloadKey((current) => current + 1);
    }

    const intervalId = window.setInterval(refreshAttendanceDataIfDateChanged, 30_000);
    window.addEventListener("focus", refreshAttendanceDataIfDateChanged);
    document.addEventListener("visibilitychange", refreshAttendanceDataIfDateChanged);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refreshAttendanceDataIfDateChanged);
      document.removeEventListener("visibilitychange", refreshAttendanceDataIfDateChanged);
    };
  }, [attendanceOnlyMode, isAppStateReady]);

  async function handleLogin(role, loginId, password) {
    if (role === "teacher") {
      const account = { ...defaultTeacherAccountSettings, ...teacherAccountSettings };
      try {
        const result = await postJson("/api/auth/login", { role, loginId, password });
        if (result.authenticated) {
          setIsPortalDataReady(false);
          const teacherSession = { role: "teacher", actorId: "instructor_owner_001", name: result.account?.name || account.name || teacherAccount.name };
          setSession(teacherSession);
          persistTeacherSession(teacherSession);
          setActiveView("lessons");
          return { ok: true };
        }
      } catch (error) {
        console.warn("Server teacher auth failed.", error);
      }
      return { ok: false, message: "선생님 아이디 또는 비밀번호가 맞지 않습니다." };
    }

    try {
      const result = await postJson("/api/auth/login", { role, loginId, password });
      if (result.authenticated && result.account?.studentId) {
        setIsPortalDataReady(false);
        setSession({
          role,
          actorId: result.account.actorId,
          studentId: result.account.studentId,
          name: result.account.name,
          sessionToken: result.account.sessionToken
        });
        return { ok: true };
      }
    } catch (error) {
      console.warn("Server student auth failed.", error);
    }

    if (role === "student" || role === "parent") {
      return { ok: false, message: role === "student" ? "학생 아이디 또는 비밀번호가 맞지 않습니다." : "학부모 아이디 또는 비밀번호가 맞지 않습니다." };
    }

    return { ok: false, message: "지원하지 않는 로그인 역할입니다." };
  }

  function handleLogout() {
    setIsPortalDataReady(false);
    persistTeacherSession(null);
    setSession(null);
    setActiveView("lessons");
  }

  async function handleAttendancePinPreview(phoneLast4) {
    if (attendanceOnlyMode && attendanceLoadedDateRef.current !== getKoreaDateString()) {
      setIsAppStateReady(false);
      setAttendanceReloadKey((current) => current + 1);
      return { ok: false, message: "날짜가 바뀌어 출결 데이터를 다시 불러오는 중입니다. 잠시 후 다시 입력해 주세요." };
    }

    const digits = String(phoneLast4).replaceAll(/\D/g, "").slice(-4);
    if (digits.length !== 4) {
      return { ok: false, message: "휴대폰 번호 뒤 4자리를 입력해 주세요." };
    }

    try {
      const result = await previewAttendanceRequest({
        phoneLast4: digits,
        lateGraceMinutes: attendanceSettings.lateGraceMinutes,
        source: "kiosk"
      });
      return { ok: true, ...result };
    } catch (error) {
      return { ok: false, message: error.message || "출결 확인에 실패했습니다. 선생님께 말씀해 주세요." };
    }
  }

  async function handleAttendancePinCheck(phoneLast4, options = {}) {
    if (attendanceOnlyMode && attendanceLoadedDateRef.current !== getKoreaDateString()) {
      setIsAppStateReady(false);
      setAttendanceReloadKey((current) => current + 1);
      return { ok: false, message: "날짜가 바뀌어 출결 데이터를 다시 불러오는 중입니다. 잠시 후 다시 입력해 주세요." };
    }

    const digits = String(phoneLast4).replaceAll(/\D/g, "").slice(-4);
    if (digits.length !== 4) {
      return { ok: false, message: "휴대폰 번호 뒤 4자리를 입력해 주세요." };
    }

    try {
      const result = await checkAttendanceRequest({
        attendanceStatus: options.attendanceStatus,
        checkInTime: options.checkInTime,
        checkOutTime: options.checkOutTime,
        phoneLast4: digits,
        lateMinutes: options.lateMinutes,
        lateGraceMinutes: attendanceSettings.lateGraceMinutes,
        lessonId: options.lessonId,
        sendAlimtalk: true,
        source: "kiosk",
        studentId: options.studentId
      });
      if (result.lesson) {
        setLessons((current) => upsertById(current, result.lesson, "lessonId"));
      }
      if (result.record) {
        const nextRecords = upsertLessonStudentRecord(recordsRef.current, result.record);
        recordsRef.current = nextRecords;
        setRecords(nextRecords);
      }
      if (result.attendanceEvent) {
        setNotificationLogs((current) => [
          {
            notificationLogId: result.attendanceEvent.attendanceEventId || `attendance_kiosk_${Date.now()}_${result.student?.studentId || "student"}`,
            channel: "attendance_kiosk",
            createdAt: result.attendanceEvent.createdAt || new Date().toISOString(),
            lessonId: result.lesson?.lessonId,
            message: `[출결체크] ${result.message} · ${result.checkedTime || ""}`.trim(),
            provider: "academy-os",
            status: result.alimtalk?.status || "saved",
            studentId: result.student?.studentId,
            target: "parent"
          },
          ...current
        ]);
      }
      return { ok: true, ...result };
    } catch (error) {
      return { ok: false, message: error.message || "출결 저장에 실패했습니다. 선생님께 말씀해 주세요." };
    }
  }

  if (attendanceOnlyMode) {
    return (
      <AttendanceKiosk
        isStandalone
        lessons={lessons}
        isLoading={!isAppStateReady}
        records={records}
        students={students}
        onAttendanceCheck={handleAttendancePinCheck}
        onAttendancePreview={handleAttendancePinPreview}
      />
    );
  }

  if (!session) {
    return (
      <RoleLoginScreen
        onLogin={handleLogin}
      />
    );
  }

  if (session.role === "student") {
    return (
      <StudentPortalV2
        examPrepRows={examPrepRows}
        examPostSubmissions={examPostSubmissions}
        examPostTargetStudentIds={examPostTargetStudentIds}
        homeworks={homeworks}
        lessons={lessons}
        materials={resourceMaterials}
        makeupTasks={makeupTasks}
        records={records}
        reportSnapshots={reportSnapshots}
        schoolEvents={schoolEvents}
        sessionStudentId={session.studentId}
        studentQuestions={studentQuestions}
        students={students.filter((student) => student.studentId === session.studentId)}
        onLogout={handleLogout}
        onStudentAddQuestion={handleStudentAddQuestion}
        onStudentCheckHomework={handleStudentCheckHomework}
        onStudentDeleteQuestion={handleStudentDeleteQuestion}
        onSubmitExamPostSubmission={handleSubmitExamPostSubmission}
        onStudentUpdateQuestion={handleStudentUpdateQuestion}
      />
    );
  }

  if (session.role === "parent") {
    return (
      <ParentPortal
        homeworks={homeworks}
        lessons={lessons}
        materials={resourceMaterials}
        records={records}
        reportSnapshots={reportSnapshots}
        sessionStudentId={session.studentId}
        students={students}
        onLogout={handleLogout}
      />
    );
  }

  function handleDateSelect(date) {
    const nextLessons = calendarLessons.filter((lesson) => lesson.date === date).sort(sortByTime);
    setSelectedDate(date);
    setSelectedLessonId(nextLessons[0]?.lessonId ?? "");
    setIsLessonJournalOpen(false);
  }

  function handleCalendarMove(dayOffset) {
    const nextDate = addDaysInKorea(selectedDate, dayOffset);
    handleDateSelect(nextDate);
  }

  function handleCopySelectedLesson() {
    const lesson = lessons.find((item) => item.lessonId === selectedLessonId);
    if (!lesson) return;
    setLessonClipboard({ ...lesson });
  }

  function handlePasteLessonToSelectedDate() {
    if (!lessonClipboard) return;
    const pastedLesson = {
      ...lessonClipboard,
      lessonId: createLessonId(selectedDate, lessonClipboard.className),
      date: selectedDate,
      dayOfWeek: getDayKey(selectedDate),
      status: "scheduled"
    };
    setLessonUndoStack((current) => [{ type: "create", lesson: pastedLesson }, ...current].slice(0, 20));
    setLessons((current) => [...current, pastedLesson]);
    const linkedPreviousHomeworks = createPreviousHomeworksFromPriorLesson(homeworks, lessons, pastedLesson);
    if (linkedPreviousHomeworks.length > 0) {
      setHomeworks((current) => [...linkedPreviousHomeworks, ...current]);
      postJson("/api/homeworks/bulk", { homeworks: linkedPreviousHomeworks }).catch((error) => console.error(error));
    }
    setSelectedLessonId(pastedLesson.lessonId);
    postJson("/api/lessons", { lesson: pastedLesson }).catch((error) => console.error(error));
  }

  function handleUndoLessonAction() {
    const [latestAction, ...restActions] = lessonUndoStack;
    if (!latestAction) return;
    if (latestAction.type === "create") {
      setLessons((current) => current.filter((lesson) => lesson.lessonId !== latestAction.lesson.lessonId));
      setSelectedLessonId("");
    }
    if (latestAction.type === "delete") {
      const bundle = latestAction.bundle ?? { lesson: latestAction.lesson, records: [], homeworks: [] };
      if (!bundle.lesson) return;
      const restoredLesson = {
        ...bundle.lesson,
        status: ["canceled", "deleted"].includes(bundle.lesson.status) ? "scheduled" : (bundle.lesson.status ?? "scheduled")
      };
      setLessons((current) => upsertById(current, restoredLesson, "lessonId"));
      setRecords((current) => [...(bundle.records ?? []), ...current.filter((record) => record.lessonId !== bundle.lesson.lessonId)]);
      setHomeworks((current) => [...(bundle.homeworks ?? []), ...current.filter((homework) => homework.lessonId !== bundle.lesson.lessonId)]);
      setDeletedLessonBundles((current) => current.filter((item) => item.bundleId !== bundle.bundleId));
      setSelectedDate(restoredLesson.date);
      setSelectedLessonId(restoredLesson.lessonId);
      const pendingCancelRequest = lessonCancelRequestsRef.current.get(restoredLesson.lessonId) ?? Promise.resolve();
      pendingCancelRequest
        .catch(() => null)
        .then(() => postJson("/api/lessons", { lesson: restoredLesson }))
        .catch((error) => console.error(error));
      if (bundle.records?.length) {
        bundle.records.forEach((record) => postJson("/api/lesson-records", { record }).catch((error) => console.error(error)));
      }
      if (bundle.homeworks?.length) {
        postJson("/api/homeworks/bulk", { homeworks: bundle.homeworks }).catch((error) => console.error(error));
      }
    }
    setLessonUndoStack(restActions);
  }

  function handleDeleteSelectedLessonFromCalendar() {
    const lesson = calendarLessons.find((item) => item.lessonId === selectedLessonId);
    if (!lesson) return;
    if (lesson.isVirtualGeneratedLesson || lesson.isExamPrepAutoLesson) {
      const generatedKey = getGeneratedLessonKey(lesson) || lesson.generatedKey;
      suppressGeneratedLessonKey(generatedKey);
      setSelectedLessonId("");
      setIsLessonJournalOpen(false);
      return;
    }
    setLessonDeleteModalId(lesson.lessonId);
  }

  function confirmDeleteLesson(lessonId) {
    const lesson = calendarLessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    if (lesson.isVirtualGeneratedLesson || lesson.isExamPrepAutoLesson) {
      const generatedKey = getGeneratedLessonKey(lesson) || lesson.generatedKey;
      suppressGeneratedLessonKey(generatedKey);
      setLessonDeleteModalId("");
      setSelectedLessonId("");
      setIsLessonJournalOpen(false);
      return;
    }
    const deletedAt = new Date().toISOString();
    const bundle = {
      bundleId: `deleted_${lessonId}_${Date.now()}`,
      lesson,
      records: recordsRef.current.filter((record) => record.lessonId === lessonId),
      homeworks: homeworksRef.current.filter((homework) => homework.lessonId === lessonId),
      deletedAt,
      expiresAt: new Date(Date.now() + lessonDeleteRetentionMs).toISOString()
    };
    const canceledLesson = { ...lesson, status: "canceled" };
    setDeletedLessonBundles((current) => pruneExpiredLessonDeletes([bundle, ...current]));
    setLessonUndoStack((current) => [{ type: "delete", bundle }, ...current].slice(0, 20));
    const generatedKey = getGeneratedLessonKey(lesson);
    if (generatedKey) suppressGeneratedLessonKey(generatedKey);
    setLessons((current) => current.filter((item) => item.lessonId !== lessonId));
    setRecords((current) => current.filter((record) => record.lessonId !== lessonId));
    setHomeworks((current) => current.filter((homework) => homework.lessonId !== lessonId));
    setLessonDeleteModalId("");
    const nextLessonForDate = lessons
      .filter((item) => item.lessonId !== lessonId && item.date === lesson.date)
      .sort(sortByTime)[0];
    setSelectedLessonId(nextLessonForDate?.lessonId ?? "");
    setIsLessonJournalOpen(false);
    const cancelRequest = postJson("/api/lessons", { lesson: canceledLesson }).catch((error) => console.error(error));
    lessonCancelRequestsRef.current.set(lessonId, cancelRequest);
    cancelRequest.finally(() => lessonCancelRequestsRef.current.delete(lessonId));
  }

  function handleOpenLessonJournal(lessonId) {
    const lesson = calendarLessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    setSelectedDate(lesson.date);
    setSelectedLessonId(lessonId);
    setIsLessonJournalOpen(true);
  }

  function handleAddLesson(formValues) {
    const template = classTemplates.find(
      (item) => item.classTemplateId === formValues.classTemplateId
    );
    const classTemplateId = formValues.classTemplateId && template ? template.classTemplateId : "";
    const studentIds = getActiveStudentIdsFromSelection(formValues.studentIds, students);
    const lesson = {
      lessonId: createLessonId(formValues.date, formValues.name),
      classTemplateId,
      className: formValues.name,
      lessonType: formValues.lessonType,
      date: formValues.date,
      dayOfWeek: getDayKey(formValues.date),
      startTime: formValues.startTime,
      endTime: formValues.endTime,
      color: formValues.color,
      teacherId: "instructor_owner_001",
      studentIds,
      status: "scheduled"
    };

    setLessons((current) => upsertById(current, lesson, "lessonId"));
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    setIsLessonModalOpen(false);
    postJson("/api/lessons", { lesson }).catch((error) => {
      console.error(error);
      window.alert(`수업 저장 실패: ${error.message}`);
    });
  }

  function handleUpdateLesson(formValues) {
    const template = classTemplates.find(
      (item) => item.classTemplateId === formValues.classTemplateId
    );
    const classTemplateId = formValues.classTemplateId && template ? template.classTemplateId : "";
    const studentIds = getActiveStudentIdsFromSelection(formValues.studentIds, students);
    const lesson = {
      ...editingLesson,
      isExamPrepAutoLesson: undefined,
      isVirtualGeneratedLesson: undefined,
      classTemplateId,
      className: formValues.name,
      lessonType: formValues.lessonType,
      date: formValues.date,
      dayOfWeek: getDayKey(formValues.date),
      startTime: formValues.startTime,
      endTime: formValues.endTime,
      color: formValues.color,
      studentIds,
      status: editingLesson?.status ?? "scheduled"
    };

    markGeneratedLessonManualOverride(editingLesson);
    setLessons((current) => upsertById(current, lesson, "lessonId"));
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    setEditingLesson(null);
    setIsLessonModalOpen(false);
    postJson("/api/lessons", { lesson }).catch((error) => {
      console.error(error);
      window.alert(`수업 저장 실패: ${error.message}`);
    });
  }

  function handleDeleteLesson(lessonId) {
    const lesson = calendarLessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    if (lesson.isVirtualGeneratedLesson || lesson.isExamPrepAutoLesson) {
      const generatedKey = getGeneratedLessonKey(lesson) || lesson.generatedKey;
      suppressGeneratedLessonKey(generatedKey);
      setSelectedLessonId("");
      setIsLessonJournalOpen(false);
      return;
    }
    setLessonDeleteModalId(lesson.lessonId);
  }

  function createUniqueStudentLoginId(name = "") {
    const baseLoginId = `04${String(name || "student").replace(/\s+/g, "")}`;
    const existingLoginIds = new Set(students.map((student) => student.loginId).filter(Boolean));
    if (!existingLoginIds.has(baseLoginId)) return baseLoginId;
    let suffix = 2;
    while (existingLoginIds.has(`${baseLoginId}-${suffix}`)) suffix += 1;
    return `${baseLoginId}-${suffix}`;
  }

  function createStudentFromFormValues(formValues) {
    return {
      studentId: formValues.studentId || `student_${Date.now()}`,
      loginId: formValues.loginId || createUniqueStudentLoginId(formValues.name),
      name: formValues.name,
      pin: formValues.pin || "1234",
      birthYear: formValues.birthYear,
      schoolName: formValues.schoolName,
      grade: formValues.grade || inferGradeFromBirthYear(formValues.birthYear),
      studentPhone: formValues.studentPhone,
      parentPhone: formValues.parentPhone,
      textbook: formValues.textbook ?? "",
      specialNote: formValues.specialNote ?? "",
      defaultClassTemplateId: formValues.defaultClassTemplateId ?? "",
      scheduleOverride: formValues.scheduleOverride ?? "",
      status: "active"
    };
  }

  function isActiveLessonForRosterSync(lesson) {
    return (lesson.status ?? "scheduled") !== "canceled" && !lesson.isVirtualSundayMakeupBlock;
  }

  function applyLessonRosterChanges(changedLessons) {
    if (!changedLessons.length) return;
    const changedById = new Map(changedLessons.map((lesson) => [lesson.lessonId, lesson]));
    setLessons((current) => current.map((lesson) => changedById.get(lesson.lessonId) ?? lesson));
    postJson("/api/lessons/bulk", { lessons: changedLessons }).catch((error) => {
      console.error(error);
      window.alert(`수업 명단 저장 실패: ${error.message}`);
    });
  }

  function addStudentToFutureClassLessons(student, fromDate = today) {
    if (!isActiveStudent(student) || !student.defaultClassTemplateId) return [];
    const changedLessons = lessons
      .filter((lesson) =>
        isActiveLessonForRosterSync(lesson) &&
        lesson.classTemplateId === student.defaultClassTemplateId &&
        String(lesson.date) >= fromDate &&
        !(lesson.studentIds ?? []).includes(student.studentId)
      )
      .map((lesson) => ({
        ...lesson,
        studentIds: [...(lesson.studentIds ?? []), student.studentId]
      }));
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
  }

  function reconcileChangedStudentsFutureClassLessons(changedStudents = [], previousStudents = [], fromDate = today) {
    const changePairs = changedStudents
      .map((student) => ({
        student,
        previousStudent: previousStudents.find((item) => item.studentId === student.studentId)
      }))
      .filter(({ student, previousStudent }) => student && previousStudent);
    if (changePairs.length === 0) return [];

    const changedLessons = lessons.flatMap((lesson) => {
      if (!isActiveLessonForRosterSync(lesson) || String(lesson.date) < fromDate) return [];
      let nextStudentIds = lesson.studentIds ?? [];
      changePairs.forEach(({ student, previousStudent }) => {
        const previousClassTemplateId = previousStudent.defaultClassTemplateId ?? "";
        const nextClassTemplateId = isActiveStudent(student) ? (student.defaultClassTemplateId ?? "") : "";
        if (previousClassTemplateId && previousClassTemplateId !== nextClassTemplateId && lesson.classTemplateId === previousClassTemplateId) {
          nextStudentIds = nextStudentIds.filter((id) => id !== student.studentId);
        }
        if (nextClassTemplateId && lesson.classTemplateId === nextClassTemplateId && !nextStudentIds.includes(student.studentId)) {
          nextStudentIds = [...nextStudentIds, student.studentId];
        }
      });
      if (JSON.stringify(nextStudentIds) === JSON.stringify(lesson.studentIds ?? [])) return [];
      return [{ ...lesson, studentIds: nextStudentIds }];
    });
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
  }

  function reconcileStudentFutureClassLessons(student, previousClassTemplateId = "", fromDate = today) {
    const previousStudent = {
      ...student,
      defaultClassTemplateId: previousClassTemplateId
    };
    return reconcileChangedStudentsFutureClassLessons([student], [previousStudent], fromDate);
  }

  function removeStudentsFromLessonsFromDate(studentIds = [], fromDate = today) {
    const removalStudentIds = new Set(studentIds);
    if (removalStudentIds.size === 0) return [];
    const changedLessons = lessons
      .filter((lesson) =>
        isActiveLessonForRosterSync(lesson) &&
        String(lesson.date) >= fromDate &&
        (lesson.studentIds ?? []).some((studentId) => removalStudentIds.has(studentId))
      )
      .map((lesson) => ({
        ...lesson,
        studentIds: (lesson.studentIds ?? []).filter((id) => !removalStudentIds.has(id))
      }));
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
  }

  function removeStudentFromLessonsFromDate(studentId, fromDate = today) {
    return removeStudentsFromLessonsFromDate([studentId], fromDate);
  }

  function handleAddStudent(formValues) {
    const student = createStudentFromFormValues(formValues);

    setStudents((current) => [...current, student]);
    addStudentToFutureClassLessons(student, today);
    setIsStudentModalOpen(false);
    postJson("/api/students", { student }).catch((error) => console.error(error));
  }

  function handleUpdateStudentIntakeApplicant(applicantId, updates) {
    const nextApplicant = {
      ...studentIntakeApplicants.find((applicant) => applicant.applicantId === applicantId),
      ...updates,
      updatedAt: new Date().toISOString()
    };
    if (!nextApplicant.applicantId) return;
    setStudentIntakeApplicants((current) =>
      current.map((applicant) => (applicant.applicantId === applicantId ? nextApplicant : applicant))
    );
    const requestId = (studentIntakeSaveRequestRef.current[applicantId] ?? 0) + 1;
    studentIntakeSaveRequestRef.current[applicantId] = requestId;
    setStudentIntakeSaveStates((current) => ({ ...current, [applicantId]: "saving" }));
    postJson("/api/student-intake-applicants", { applicant: nextApplicant })
      .then(() => {
        if (studentIntakeSaveRequestRef.current[applicantId] === requestId) {
          setStudentIntakeSaveStates((current) => ({ ...current, [applicantId]: "saved" }));
        }
      })
      .catch((error) => {
        console.error(error);
        if (studentIntakeSaveRequestRef.current[applicantId] === requestId) {
          setStudentIntakeSaveStates((current) => ({ ...current, [applicantId]: "failed" }));
        }
      });
  }

  function handleRegisterStudentIntakeApplicant(applicantId, values) {
    const applicant = studentIntakeApplicants.find((item) => item.applicantId === applicantId);
    if (!applicant) return;
    const student = createStudentFromFormValues({
      ...values,
      name: values.name || applicant.name,
      birthYear: values.birthYear || applicant.birthYear,
      grade: values.grade || applicant.grade,
      schoolName: values.schoolName || applicant.schoolName,
      studentPhone: values.studentPhone || applicant.studentPhone,
      parentPhone: values.parentPhone || applicant.parentPhone,
      specialNote: values.specialNote || applicant.memo,
      defaultClassTemplateId: values.defaultClassTemplateId ?? ""
    });
    const registeredApplicant = {
      ...applicant,
      ...values,
      status: "registered",
      memo: [applicant.memo, `정식 학생 등록: ${student.loginId}`].filter(Boolean).join("\n"),
      updatedAt: new Date().toISOString()
    };
    setStudents((current) => [...current, student]);
    addStudentToFutureClassLessons(student, today);
    setStudentIntakeApplicants((current) =>
      current.map((item) => (item.applicantId === applicantId ? registeredApplicant : item))
    );
    setIsStudentModalOpen(false);
    postJson("/api/students", { student }).catch((error) => console.error(error));
    postJson("/api/student-intake-applicants", { applicant: registeredApplicant }).catch((error) => console.error(error));
  }

  function handleUpdateStudent(studentId, field, value, options = {}) {
    const shouldPersist = options.persist !== false;
    const currentStudent = students.find((student) => student.studentId === studentId);
    const nextStudent = currentStudent ? { ...currentStudent, [field]: value } : null;
    setStudents((current) =>
      current.map((student) => (student.studentId === studentId ? { ...student, [field]: value } : student))
    );
    if (shouldPersist && nextStudent) {
      const requestId = (studentAutoSaveRequestRef.current[studentId] ?? 0) + 1;
      studentAutoSaveRequestRef.current[studentId] = requestId;
      setStudentAutoSaveStates((current) => ({ ...current, [studentId]: "saving" }));
      postJson("/api/students", { student: nextStudent })
        .then(() => {
          if (studentAutoSaveRequestRef.current[studentId] === requestId) {
            setStudentAutoSaveStates((current) => ({ ...current, [studentId]: "saved" }));
          }
        })
        .catch((error) => {
          console.error(error);
          if (studentAutoSaveRequestRef.current[studentId] === requestId) {
            setStudentAutoSaveStates((current) => ({ ...current, [studentId]: "failed" }));
          }
        });
    }
  }

  async function handleSaveStudent(studentId, options = {}) {
    const student = students.find((item) => item.studentId === studentId);
    if (!student) throw new Error("저장할 학생을 찾지 못했습니다.");
    await postJson("/api/students", { student });
    if (
      Object.prototype.hasOwnProperty.call(options, "previousClassTemplateId") &&
      options.previousClassTemplateId !== student.defaultClassTemplateId
    ) {
      reconcileStudentFutureClassLessons(student, options.previousClassTemplateId, today);
    }
  }

  function persistExamPrepRows(rowsToPersist) {
    const changedRows = rowsToPersist.filter(Boolean);
    if (changedRows.length === 0) return Promise.resolve();
    const rowIds = [...new Set(changedRows.map((row) => row.examPrepId).filter(Boolean))];
    const requestIds = rowIds.reduce((acc, rowId) => {
      const requestId = (examPrepRowSaveRequestRef.current[rowId] ?? 0) + 1;
      examPrepRowSaveRequestRef.current[rowId] = requestId;
      acc[rowId] = requestId;
      return acc;
    }, {});
    setExamPrepRowSaveStates((current) => {
      const next = { ...current };
      rowIds.forEach((rowId) => {
        next[rowId] = "saving";
      });
      return next;
    });
    return postExamPrepRows(changedRows)
      .then(() => {
        setExamPrepRowSaveStates((current) => {
          const next = { ...current };
          rowIds.forEach((rowId) => {
            if (examPrepRowSaveRequestRef.current[rowId] === requestIds[rowId]) next[rowId] = "saved";
          });
          return next;
        });
      })
      .catch((error) => {
        console.error(error);
        setExamPrepRowSaveStates((current) => {
          const next = { ...current };
          rowIds.forEach((rowId) => {
            if (examPrepRowSaveRequestRef.current[rowId] === requestIds[rowId]) next[rowId] = "failed";
          });
          return next;
        });
      });
  }

  function handleUpdateExamPrepRow(examPrepId, field, value) {
    setExamPrepRows((current) => {
      const existingExamRow = current.find((row) => row.examPrepId === examPrepId);
      if (!existingExamRow || existingExamRow[field] === value) return current;
      const updatedExamRow = existingExamRow ? { ...existingExamRow, [field]: value } : null;
      const shouldSyncPublisher = ["publisher", "examCycle", "schoolName", "grade", "subject"].includes(field);
      const updatedRows = current.map((row) => (row.examPrepId === examPrepId ? { ...row, [field]: value } : row));
      const nextRows = shouldSyncPublisher && updatedExamRow ? syncPublisherAcrossExamTerm(updatedRows, updatedExamRow) : updatedRows;
      const changedRows = nextRows.filter((row) => {
        const previousRow = current.find((item) => item.examPrepId === row.examPrepId);
        return previousRow && JSON.stringify(previousRow) !== JSON.stringify(row);
      });
      if (changedRows.length > 0) {
        persistExamPrepRows(changedRows);
      }
      return nextRows;
    });
  }

  function reconcilePersistedSundayMakeupLessons(nextExamPrepRows) {
    const sundayCandidates = buildSundayMakeupCandidates(nextExamPrepRows);
    const candidateByLessonId = new Map(sundayCandidates.map((item) => [item.lesson.lessonId, item.lesson]));
    const existingSundayLessons = lessons.filter((lesson) => lesson.lessonType === "examSundayMakeup");
    const lessonsToSave = [];
    const lessonIdsToDelete = [];

    existingSundayLessons.forEach((lesson) => {
      const nextLesson = candidateByLessonId.get(lesson.lessonId);
      if (!nextLesson) {
        lessonIdsToDelete.push(lesson.lessonId);
        return;
      }
      const mergedLesson = { ...lesson, ...nextLesson, lessonId: lesson.lessonId };
      if (JSON.stringify(mergedLesson) !== JSON.stringify(lesson)) {
        lessonsToSave.push(mergedLesson);
      }
    });

    if (lessonsToSave.length === 0 && lessonIdsToDelete.length === 0) return;

    setLessons((current) => {
      const deletedIds = new Set(lessonIdsToDelete);
      const next = current.filter((lesson) => !deletedIds.has(lesson.lessonId));
      lessonsToSave.forEach((lesson) => {
        const index = next.findIndex((item) => item.lessonId === lesson.lessonId);
        if (index >= 0) next[index] = { ...next[index], ...lesson };
        else next.push(lesson);
      });
      return next;
    });

    if (lessonsToSave.length > 0) {
      postJson("/api/lessons/bulk", { lessons: lessonsToSave }).catch((error) => console.error(error));
    }
    lessonIdsToDelete.forEach((lessonId) => {
      fetch(apiUrl(`/api/lessons?id=${encodeURIComponent(lessonId)}`), { method: "DELETE" })
        .catch((error) => console.error(error));
    });
  }

  function handleDeleteExamPrepRow(examPrepId) {
    const row = examPrepRows.find((item) => item.examPrepId === examPrepId);
    if (!row) return;
    const label = [row.schoolName, row.grade, row.subject, examCycleLabel(row.examCycle)].filter(Boolean).join(" · ");
    if (typeof window !== "undefined" && !window.confirm(`${label || "이 시험정보"} 행을 삭제할까요?`)) return;
    const nextExamPrepRows = examPrepRows.filter((item) => item.examPrepId !== examPrepId);
    setExamPrepRows(nextExamPrepRows);
    reconcilePersistedSundayMakeupLessons(nextExamPrepRows);
    deleteExamPrepRowRequest(examPrepId).catch((error) => {
      console.error(error);
      setExamPrepRows((current) => upsertById(current, row, "examPrepId"));
      reconcilePersistedSundayMakeupLessons(examPrepRows);
      if (typeof window !== "undefined") window.alert(`시험정보 삭제 실패: ${error.message}`);
    });
  }

  function handleSyncPreExamLessonFromSchoolEvent(event) {
    const lesson = createPreExamLessonFromSchoolEvent(event, students);
    if (!lesson) return;
    const generatedKey = getGeneratedLessonKey(lesson);
    const controls = normalizeGeneratedLessonControls(generatedLessonControls);
    if (controls.suppressedKeys.includes(generatedKey) || controls.manualOverrideKeys.includes(generatedKey)) return;
    const lessonKeys = new Set(getGeneratedLessonIdentityKeys(lesson));
    const existingLesson = lessons.find((item) =>
      item.sourceSchoolEventId === lesson.sourceSchoolEventId ||
      item.lessonId === lesson.lessonId ||
      getGeneratedLessonIdentityKeys(item).some((key) => lessonKeys.has(key))
    );
    const nextLesson = existingLesson ? { ...lesson, lessonId: existingLesson.lessonId } : lesson;
    if (existingLesson && areGeneratedLessonPersistedFieldsEqual(nextLesson, existingLesson)) return;
    setLessons((current) => upsertById(current, nextLesson, "lessonId"));
    postJson("/api/lessons", { lesson: nextLesson }).catch((error) => console.error(error));
  }

  function handleUpdateClassRoster(classTemplateId, nextStudentIds) {
    const nextStudentIdSet = new Set(nextStudentIds);
    const previousStudents = students;
    const nextStudents = previousStudents.map((student) => {
      if (!isActiveStudent(student)) {
        return student;
      }
      if (nextStudentIdSet.has(student.studentId)) {
        return { ...student, defaultClassTemplateId: classTemplateId };
      }
      if (student.defaultClassTemplateId === classTemplateId) {
        return { ...student, defaultClassTemplateId: "" };
      }
      return student;
    });
    setStudents(nextStudents);
    const changedStudents = nextStudents.filter((student) => {
      const previousStudent = previousStudents.find((item) => item.studentId === student.studentId);
      return previousStudent && previousStudent.defaultClassTemplateId !== student.defaultClassTemplateId;
    });
    reconcileChangedStudentsFutureClassLessons(changedStudents, previousStudents, today);
    if (changedStudents.length > 0) {
      postJson("/api/students/bulk", { students: changedStudents }).catch((error) => console.error(error));
    }
  }

  function handleDeleteStudent(studentId, withdrawalInfo = {}) {
    const removedStudent = students.find((student) => student.studentId === studentId);
    if (!removedStudent) return;
    const pausedStudent = {
      ...removedStudent,
      status: "paused",
      withdrawalReason: withdrawalInfo.reason || removedStudent.withdrawalReason || "other",
      withdrawalComment: withdrawalInfo.comment ?? removedStudent.withdrawalComment ?? "",
      withdrawnAt: new Date().toISOString()
    };
    setStudents((current) => current.map((student) => (student.studentId === studentId ? pausedStudent : student)));
    removeStudentFromLessonsFromDate(studentId, today);
    if (removedStudent) {
      postJson("/api/students", { student: pausedStudent }).catch((error) => console.error(error));
    }
  }

  function scheduleRecordAutoSave(record, lessonForRecord = null) {
    if (!record?.lessonStudentRecordId) return;
    const recordId = record.lessonStudentRecordId;
    const existingTimerId = autoSaveTimersRef.current.get(recordId);
    if (existingTimerId) clearTimeout(existingTimerId);
    setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "dirty" }));
    const timerId = setTimeout(() => {
      autoSaveTimersRef.current.delete(recordId);
      handleSaveRecord(recordId, lessonForRecord, null, record);
    }, 1000);
    autoSaveTimersRef.current.set(recordId, timerId);
  }

  async function saveAttendanceRecord(lesson, student, values, updatedBy = "instructor_owner_001", options = {}) {
    const result = await checkAttendanceRequest({
      action: values.attendanceStatus === "checkout"
        ? "checkout"
        : ["absent", "excused", "pending"].includes(values.attendanceStatus)
        ? "status"
        : "checkin",
      actorId: updatedBy,
      attendanceReason: values.attendanceReason,
      attendanceStatus: values.attendanceStatus,
      checkInTime: values.checkInTime,
      checkOutTime: values.checkOutTime,
      lateMinutes: values.lateMinutes,
      lateGraceMinutes: attendanceSettings.lateGraceMinutes,
      lessonId: lesson.lessonId,
      sendAlimtalk: Boolean(options.sendAlimtalk),
      source: "manual",
      studentId: student.studentId
    });
    const nextRecord = result.record;
    if (!nextRecord) throw new Error("출결 저장 결과가 없습니다.");
    if (result.lesson) {
      setLessons((current) => upsertById(current, result.lesson, "lessonId"));
    }
    const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    refreshLessonNotificationJobsForRecord(nextRecord, result.lesson ?? lesson);
    return { record: nextRecord, saved: true };
  }

  function handleChangeRecord(lesson, student, field, value) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const existingRecord = findLessonStudentRecord(recordsRef.current, lesson, student);
    const safeExistingRecord = getAttendanceDateMismatch(existingRecord, lesson)
      ? clearAttendanceFields(existingRecord)
      : existingRecord;
    const nextRecord = {
      lessonStudentRecordId: recordId,
      lessonId: lesson.lessonId,
      studentId: student.studentId,
      attendanceStatus: "pending",
      homeworkStatus: "not_started",
      behaviorTag: "",
      teacherComment: "",
      studentComment: "",
      needsMakeup: false,
      needsRetest: false,
      ...(safeExistingRecord ?? {}),
      [field]: value,
      ...(field === "assignmentStatus" ? { incompleteHomework: value } : {}),
      ...(field === "teacherComment" ? { teacherCommentSendStatus: "" } : {}),
      ...(field === "studentComment" ? { studentCommentSendStatus: "" } : {}),
      updatedBy: "instructor_owner_001",
      updatedAt: new Date().toISOString()
    };
    const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
    recordsRef.current = nextRecords;
    setRecords(nextRecords);

    if (field === "assignmentStatus") {
      syncPreviousHomeworkStatusFromAssignment(lesson, student, value);
    }

    scheduleRecordAutoSave(nextRecord, lesson);
  }

  async function ensurePersistedLesson(lesson, { markManualOverride = false } = {}) {
    if (!lesson?.isVirtualGeneratedLesson && !lesson?.isExamPrepAutoLesson) return lesson;
    const persistedLesson = {
      ...lesson,
      isExamPrepAutoLesson: undefined,
      isVirtualGeneratedLesson: undefined
    };
    if (markManualOverride) markGeneratedLessonManualOverride(lesson);
    setLessons((current) => upsertById(current, persistedLesson, "lessonId"));
    await postJson("/api/lessons", { lesson: persistedLesson });
    return persistedLesson;
  }

  function persistLessonNotificationPlans(nextPlans) {
    if (session?.role !== "teacher") return;
    postAppState({
      ...sharedAppState,
      lessonNotificationPlans: nextPlans
    }).catch((error) => console.error(error));
  }

  function handleUpdateLessonNotificationPlan(lessonId, mode) {
    if (!lessonId) return;
    const nextMode = mode || "default";
    const currentPlan = lessonNotificationPlans[lessonId];
    const nextPlans = {
      ...lessonNotificationPlans,
      [lessonId]: {
        ...(currentPlan ?? {}),
        mode: nextMode,
        updatedAt: new Date().toISOString()
      }
    };
    setLessonNotificationPlans(nextPlans);
    persistLessonNotificationPlans(nextPlans);
    applyLessonNotificationPlan(lessonId, nextMode);
  }

  function getLessonNotificationJobId(lessonId, studentId, target) {
    return `lesson_comment_${lessonId}_${studentId}_${target}`;
  }

  function isRecordNotificationMuted(record, target) {
    return target === "student" ? Boolean(record?.notificationMutedStudent) : Boolean(record?.notificationMutedParent);
  }

  function getLessonStudentRecord(lesson, student) {
    return findLessonStudentRecord(recordsRef.current, lesson, student) ?? createEmptyRecord(lesson, student);
  }

  function buildLessonNotificationJob(lesson, student, target, scheduledDate, mode) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const record = getLessonStudentRecord(lesson, student);
    if (isRecordNotificationMuted(record, target)) return null;
    const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons);
    const nextHomework = getLessonHomework(homeworks, lesson, student, "next");
    const audience = target === "student" ? "student" : "parent";
    const sourceField = audience === "student" ? "studentComment" : "teacherComment";
    const supplementSchedules = getStudentSupplementSchedules(makeupTasks, student.studentId);
    const commentBody = buildInitialCommentDraft({
      audience,
      existingComment: record?.[sourceField] ?? "",
      record,
      supplementSchedules
    });
    const assignmentStatus = getAssignmentStatusForMessage(record, previousHomework);
    const payload = {
      academyName: academyBrandName,
      assignmentStatus,
      assignmentStatusMessage: getAssignmentStatusMessage(audience, assignmentStatus),
      assignmentStatusParentMessage: getAssignmentStatusParentMessage(assignmentStatus),
      assignmentStatusStudentMessage: getAssignmentStatusStudentMessage(assignmentStatus),
      attendanceStatus: record?.attendanceStatus ?? "pending",
      attendanceReason: record?.attendanceReason ?? "",
      checkInTime: record?.checkInTime ?? "",
      checkOutTime: record?.checkOutTime ?? "",
      checkedAt: record?.checkInAt || record?.checkOutAt || "",
      lateMinutes: record?.lateMinutes ?? "",
      commentBodyOverride: commentBody,
      lessonContent: getLessonContent(record),
      lessonDate: lesson.date,
      lessonId: lesson.lessonId,
      lessonMaterial: getLessonMaterial(record, student),
      lessonName: lesson.className,
      message: commentBody,
      nextHomework: nextHomework?.title ?? "",
      osScheduled: true,
      parentPhone: student.parentPhone,
      preparationNotice: "",
      previousHomework: previousHomework?.title ?? "",
      scheduledDate,
      scheduleMode: mode,
      sendMode: "scheduled",
      studentId: student.studentId,
      studentName: student.name,
      studentPhone: student.studentPhone,
      supplementSchedule: supplementSchedules.join("\n"),
      target: audience
    };
    return {
      notificationJobId: getLessonNotificationJobId(lesson.lessonId, student.studentId, audience),
      notificationType: audience === "student" ? "student_comment" : "parent_comment",
      studentId: student.studentId,
      lessonId: lesson.lessonId,
      lessonStudentRecordId: recordId,
      target: audience,
      recipient: audience === "student" ? student.studentPhone : student.parentPhone,
      scheduledAt: scheduledDate,
      payload,
      previewBody: buildCommentPreviewText({
        audience,
        comment: commentBody,
        lesson,
        nextHomework,
        previousHomework,
        record,
        student,
        supplementSchedules
      }),
      status: "scheduled",
      provider: "academy-os",
      error: "",
      createdAt: new Date().toISOString()
    };
  }

  function updateLessonNotificationRecordStatuses(lesson, statusText) {
    const lessonStudentsForRecords = getActiveLessonStudents(lesson, students);
    const updatedAt = new Date().toISOString();
    const recordsToSave = lessonStudentsForRecords.map((student) => {
      const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
      const record = findLessonStudentRecord(recordsRef.current, lesson, student) ?? createEmptyRecord(lesson, student);
      return {
        ...record,
        lessonStudentRecordId: recordId,
        lessonId: lesson.lessonId,
        studentId: student.studentId,
        teacherCommentSendStatus: record.notificationMutedParent ? "알림 제외" : statusText,
        studentCommentSendStatus: record.notificationMutedStudent ? "알림 제외" : statusText,
        updatedBy: "instructor_owner_001",
        updatedAt
      };
    });
    if (recordsToSave.length === 0) return;
    const nextRecords = recordsToSave.reduce(
      (currentRecords, record) => upsertLessonStudentRecord(currentRecords, record),
      recordsRef.current
    );
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    const savingStates = Object.fromEntries(recordsToSave.map((record) => [record.lessonStudentRecordId, "saving"]));
    setSaveStates((currentStates) => ({ ...currentStates, ...savingStates }));
    Promise.all(recordsToSave.map((record) => patchLessonRecordNotificationStatusRequest({
      lessonId: record.lessonId,
      lessonStudentRecordId: record.lessonStudentRecordId,
      studentId: record.studentId,
      teacherCommentSendStatus: record.teacherCommentSendStatus,
      studentCommentSendStatus: record.studentCommentSendStatus,
      updatedBy: record.updatedBy
    })))
      .then(() => {
        const savedStates = Object.fromEntries(recordsToSave.map((record) => [record.lessonStudentRecordId, "saved"]));
        setSaveStates((currentStates) => ({ ...currentStates, ...savedStates }));
      })
      .catch((error) => {
        console.error(error);
        const failedStates = Object.fromEntries(recordsToSave.map((record) => [record.lessonStudentRecordId, "failed"]));
        setSaveStates((currentStates) => ({ ...currentStates, ...failedStates }));
      });
  }

  function cancelActiveLessonNotificationJobs(lesson, reason = "수업 학생 없음") {
    const canceledJobs = notificationJobs
      .filter((job) => job.lessonId === lesson.lessonId)
      .filter((job) => !["sent", "dry_run", "failed", "canceled"].includes(job.status))
      .map((job) => ({ ...job, status: "canceled", error: reason, updatedAt: new Date().toISOString() }));
    if (canceledJobs.length === 0) return [];
    setNotificationJobs((current) =>
      current.map((job) => canceledJobs.find((canceledJob) => canceledJob.notificationJobId === job.notificationJobId) ?? job)
    );
    canceledJobs.forEach((notificationJob) =>
      postJson("/api/notification-jobs", { notificationJob }).catch((error) => console.error(error))
    );
    return canceledJobs;
  }

  function refreshLessonNotificationJobsForRecord(record, lessonForRecord = null) {
    const lesson = lessonForRecord ?? lessons.find((item) => item.lessonId === record?.lessonId);
    if (!lesson?.lessonId) return;
    const planMode = lessonNotificationPlans[lesson.lessonId]?.mode || "default";
    if (planMode === "none") return;
    applyLessonNotificationPlan(lesson.lessonId, planMode);
  }

  function cancelNotificationJobs(jobIds, reason = "알림 제외") {
    const canceledJobs = notificationJobs
      .filter((job) => jobIds.has(job.notificationJobId))
      .filter((job) => !["sent", "dry_run", "failed", "canceled"].includes(job.status))
      .map((job) => ({ ...job, status: "canceled", error: reason, updatedAt: new Date().toISOString() }));
    if (!canceledJobs.length) return [];
    setNotificationJobs((current) =>
      current.map((job) => canceledJobs.find((canceledJob) => canceledJob.notificationJobId === job.notificationJobId) ?? job)
    );
    canceledJobs.forEach((notificationJob) =>
      postJson("/api/notification-jobs", { notificationJob }).catch((error) => console.error(error))
    );
    return canceledJobs;
  }

  function isActiveNotificationJob(job = {}) {
    return !["sent", "dry_run", "failed", "canceled"].includes(job.status);
  }

  function buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, mode) {
    return lessonStudents
      .flatMap((student) => [
        buildLessonNotificationJob(lesson, student, "parent", scheduledDate, mode),
        buildLessonNotificationJob(lesson, student, "student", scheduledDate, mode)
      ])
      .filter(Boolean);
  }

  function applyLessonNotificationPlan(lessonId, mode) {
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    const lessonStudents = getActiveLessonStudents(lesson, students);
    if (lessonStudents.length === 0) {
      cancelActiveLessonNotificationJobs(lesson, "수업 학생 없음");
      return;
    }
    if (mode === "none") {
      const canceledJobs = notificationJobs
        .filter((job) => job.lessonId === lesson.lessonId)
        .filter(isActiveNotificationJob)
        .map((job) => ({ ...job, status: "canceled", error: "", updatedAt: new Date().toISOString() }));
      if (canceledJobs.length) {
        setNotificationJobs((current) =>
          current.map((job) => canceledJobs.find((canceledJob) => canceledJob.notificationJobId === job.notificationJobId) ?? job)
        );
        canceledJobs.forEach((notificationJob) =>
          postJson("/api/notification-jobs", { notificationJob }).catch((error) => console.error(error))
        );
      }
      updateLessonNotificationRecordStatuses(lesson, "알림톡 없음");
      return;
    }

    const delayMinutes = mode === "delay30" ? 30 : 0;
    if (isLessonAlimtalkScheduleExpired(lesson, delayMinutes)) {
      updateLessonNotificationRecordStatuses(lesson, "예약 시간 지남");
      return;
    }
    const scheduledDate = getLessonAlimtalkScheduledDate(lesson, delayMinutes);
    const scheduledLabel = formatKoreaTimeLabel(scheduledDate);
    const nextJobs = buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, mode);
    const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
    const canceledJobs = notificationJobs
      .filter((job) => job.lessonId === lesson.lessonId && !nextJobIds.has(job.notificationJobId))
      .filter(isActiveNotificationJob)
      .map((job) => ({ ...job, status: "canceled", error: "알림 제외", updatedAt: new Date().toISOString() }));
    const replacedJobIds = new Set([...nextJobIds, ...canceledJobs.map((job) => job.notificationJobId)]);
    setNotificationJobs((current) => [
      ...nextJobs,
      ...canceledJobs,
      ...current.filter((job) =>
        !replacedJobIds.has(job.notificationJobId) &&
        !(job.lessonId === lesson.lessonId && isActiveNotificationJob(job))
      )
    ]);
    nextJobs.forEach((notificationJob) =>
      postJson("/api/notification-jobs", { notificationJob }).catch((error) => console.error(error))
    );
    canceledJobs.forEach((notificationJob) =>
      postJson("/api/notification-jobs", { notificationJob }).catch((error) => console.error(error))
    );
    updateLessonNotificationRecordStatuses(lesson, `예약 중 · ${scheduledLabel}`);
  }

  function scheduleLessonNotificationsAt(lesson, scheduledDate, mode = "manual") {
    if (!lesson?.lessonId || !scheduledDate) return;
    const lessonStudents = getActiveLessonStudents(lesson, students);
    if (lessonStudents.length === 0) {
      cancelActiveLessonNotificationJobs(lesson, "수업 학생 없음");
      return;
    }
    const nextJobs = buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, mode);
    const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
    const canceledJobs = notificationJobs
      .filter((job) => job.lessonId === lesson.lessonId && !nextJobIds.has(job.notificationJobId))
      .filter(isActiveNotificationJob)
      .map((job) => ({ ...job, status: "canceled", error: "알림 제외", updatedAt: new Date().toISOString() }));
    const replacedJobIds = new Set([...nextJobIds, ...canceledJobs.map((job) => job.notificationJobId)]);
    const scheduledLabel = formatKoreaTimeLabel(scheduledDate);
    setNotificationJobs((current) => [
      ...nextJobs,
      ...canceledJobs,
      ...current.filter((job) =>
        !replacedJobIds.has(job.notificationJobId) &&
        !(job.lessonId === lesson.lessonId && isActiveNotificationJob(job))
      )
    ]);
    nextJobs.forEach((notificationJob) =>
      postJson("/api/notification-jobs", { notificationJob }).catch((error) => console.error(error))
    );
    canceledJobs.forEach((notificationJob) =>
      postJson("/api/notification-jobs", { notificationJob }).catch((error) => console.error(error))
    );
    updateLessonNotificationRecordStatuses(lesson, `예약 중 · ${scheduledLabel}`);
  }

  function handleScheduleLessonNotificationsAt(lessonId, scheduledDate) {
    const lesson = calendarLessons.find((item) => item.lessonId === lessonId) ?? lessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    const nextPlans = {
      ...lessonNotificationPlans,
      [lesson.lessonId]: {
        mode: "manual",
        scheduledAt: scheduledDate,
        updatedAt: new Date().toISOString()
      }
    };
    setLessonNotificationPlans(nextPlans);
    persistLessonNotificationPlans(nextPlans);
    scheduleLessonNotificationsAt(lesson, scheduledDate, "manual");
  }

  function handleToggleStudentNotificationMute(lesson, student, target, reason = "") {
    if (!lesson?.lessonId || !student?.studentId) return;
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const existingRecord = getLessonStudentRecord(lesson, student);
    const field = target === "student" ? "notificationMutedStudent" : "notificationMutedParent";
    const statusField = target === "student" ? "studentCommentSendStatus" : "teacherCommentSendStatus";
    const nextMuted = !Boolean(existingRecord?.[field]);
    const nextRecord = {
      ...createEmptyRecord(lesson, student),
      ...(existingRecord ?? {}),
      lessonStudentRecordId: recordId,
      lessonId: lesson.lessonId,
      studentId: student.studentId,
      [field]: nextMuted,
      notificationMutedReason: nextMuted ? (reason || existingRecord.notificationMutedReason || "개별 알림 제외") : existingRecord.notificationMutedReason,
      [statusField]: nextMuted ? "알림 제외" : "",
      updatedBy: "instructor_owner_001",
      updatedAt: new Date().toISOString()
    };
    const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    handleSaveRecord(recordId, lesson, student, nextRecord);

    const jobId = getLessonNotificationJobId(lesson.lessonId, student.studentId, target);
    if (nextMuted) {
      cancelNotificationJobs(new Set([jobId]), "개별 알림 제외");
      return;
    }

    const planMode = lessonNotificationPlans[lesson.lessonId]?.mode || "default";
    if (planMode !== "none") {
      applyLessonNotificationPlan(lesson.lessonId, planMode);
    }
  }

  function syncPreviousHomeworkStatusFromAssignment(lesson, student, assignmentStatus) {
    const homeworkStatus = getHomeworkStatusFromAssignmentStatus(assignmentStatus);
    const normalizedAssignmentStatus = normalizeAssignmentStatusValue(assignmentStatus);
    setHomeworks((current) => {
      const previousHomework = getLessonHomework(current, lesson, student, "previous", lessons);
      if (!previousHomework?.homeworkId || !previousHomework.title?.trim()) return current;

      const existing = current.find((homework) => homework.homeworkId === previousHomework.homeworkId);
      if (!existing) return current;

      const checkedFields = {
        status: homeworkStatus.status,
        teacherStatus: homeworkStatus.teacherStatus,
        assignmentStatus: normalizedAssignmentStatus,
        incompleteHomework: normalizedAssignmentStatus,
        checkedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      const nextHomework = {
        ...existing,
        ...checkedFields,
        dueDate: existing.dueDate || lesson.date,
      };
      const sourceHomework = current.find(
        (homework) =>
          homework.homeworkType === "next" &&
          homework.studentId === student.studentId &&
          homework.lessonId === (existing.linkedFromLessonId || previousHomework.linkedFromLessonId) &&
          String(homework.title ?? "").trim() === String(existing.title ?? "").trim()
      );
      const updatedSourceHomework = sourceHomework
        ? {
            ...sourceHomework,
            ...checkedFields,
            dueDate: sourceHomework.dueDate || lesson.date
          }
        : null;

      const changedHomeworks = updatedSourceHomework ? [nextHomework, updatedSourceHomework] : [nextHomework];
      postJson("/api/homeworks/bulk", { homeworks: changedHomeworks }).catch((error) => console.error(error));
      return current.map((homework) => {
        if (homework.homeworkId === nextHomework.homeworkId) return nextHomework;
        if (updatedSourceHomework && homework.homeworkId === updatedSourceHomework.homeworkId) return updatedSourceHomework;
        return homework;
      });
    });
  }

  function handleUpdateHomework(lesson, student, homeworkType, title) {
    const existingId = `homework_${homeworkType}_${lesson.date}_${student.studentId}`;
    setHomeworks((current) => {
      const existing = current.find(
        (homework) =>
          homework.lessonId === lesson.lessonId &&
          homework.studentId === student.studentId &&
          homework.homeworkType === homeworkType
      );
      const nextHomework = {
        ...(existing ?? {}),
        homeworkId: existing?.homeworkId ?? existingId,
        lessonId: lesson.lessonId,
        studentId: student.studentId,
        title,
        subject: existing?.subject ?? "노션 수업 DB",
        homeworkType,
        totalProblems: existing?.totalProblems ?? null,
        status: existing?.status ?? (homeworkType === "previous" ? "verified" : "assigned"),
        studentStatus: existing?.studentStatus ?? "not_started",
        teacherStatus: existing?.teacherStatus ?? "unverified",
        assignedDate: lesson.date,
        dueDate: existing?.dueDate ?? ""
      };

      const updatedHomeworks = existing
        ? current.map((homework) => (homework.homeworkId === existing.homeworkId ? nextHomework : homework))
        : [nextHomework, ...current];

      if (homeworkType !== "next") {
        postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
        return updatedHomeworks;
      }

      const linkedPreviousHomework = createLinkedPreviousHomework(
        updatedHomeworks,
        lessons,
        lesson,
        student,
        nextHomework
      );

      if (!linkedPreviousHomework) {
        postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
        return updatedHomeworks;
      }

      const withLinkedPrevious = updatedHomeworks.some((homework) => homework.homeworkId === linkedPreviousHomework.homeworkId)
        ? updatedHomeworks.map((homework) =>
            homework.homeworkId === linkedPreviousHomework.homeworkId ? linkedPreviousHomework : homework
          )
        : [linkedPreviousHomework, ...updatedHomeworks];

      postJson("/api/homeworks/bulk", { homeworks: [nextHomework, linkedPreviousHomework] }).catch((error) =>
        console.error(error)
      );

      return withLinkedPrevious;
    });
  }

  function handleApplyBulkHomework(lesson, homeworkType, title) {
    getActiveLessonStudents(lesson, students).forEach((student) => handleUpdateHomework(lesson, student, homeworkType, title));
  }

  async function handleSaveRecord(recordId, lessonForRecord = null, studentForRecord = null, recordOverride = null, options = {}) {
    const { skipNotificationRefresh = false, skipRelatedHomeworks = false } = options;
    const existingTimerId = autoSaveTimersRef.current.get(recordId);
    if (existingTimerId) {
      clearTimeout(existingTimerId);
      autoSaveTimersRef.current.delete(recordId);
    }
    setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "saving" }));

    try {
      if (lessonForRecord?.isVirtualGeneratedLesson || lessonForRecord?.isExamPrepAutoLesson) {
        await ensurePersistedLesson(lessonForRecord);
      }
      let record =
        recordOverride ??
        (lessonForRecord && studentForRecord ? findLessonStudentRecord(recordsRef.current, lessonForRecord, studentForRecord) : null) ??
        recordsRef.current.find((item) => item.lessonStudentRecordId === recordId) ??
        (lessonForRecord && studentForRecord ? createEmptyRecord(lessonForRecord, studentForRecord) : null);
      if (!record) throw new Error("저장할 수업기록을 찾지 못했습니다.");
      if (lessonForRecord && getAttendanceDateMismatch(record, lessonForRecord)) {
        record = clearAttendanceFields(record);
      }
      const relatedHomeworks = skipRelatedHomeworks
        ? []
        : homeworksRef.current.filter(
            (homework) => homework.lessonId === record.lessonId && homework.studentId === record.studentId
          );

      await postJson("/api/lesson-records", { record });
      if (relatedHomeworks.length > 0) {
        await postJson("/api/homeworks/bulk", { homeworks: relatedHomeworks });
      }
      const latestRecord = findMatchingLessonStudentRecord(recordsRef.current, record);
      const latestTime = latestRecord?.updatedAt ? Date.parse(latestRecord.updatedAt) : 0;
      const savedTime = record.updatedAt ? Date.parse(record.updatedAt) : Date.now();
      const isLatestRecord = !recordOverride || !latestRecord || !latestTime || !savedTime || latestTime <= savedTime;
      if (isLatestRecord) {
        const nextRecords = upsertLessonStudentRecord(recordsRef.current, record);
        recordsRef.current = nextRecords;
        setRecords(nextRecords);
      }
      window.localStorage.setItem(storageKeys.records, JSON.stringify(recordsRef.current));
      window.localStorage.setItem(storageKeys.homeworks, JSON.stringify(homeworksRef.current));
      if (isLatestRecord) {
        setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "saved" }));
      }
      if (!skipNotificationRefresh) {
        refreshLessonNotificationJobsForRecord(record, lessonForRecord);
      }
      return true;
    } catch (error) {
      console.error(error);
      setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "failed" }));
      return false;
    }
  }

  function handleSaveReportSnapshot(snapshot) {
    setReportSnapshots((current) => [snapshot, ...current]);
  }

  function handleChangeView(nextView) {
    setActiveView(nextView);
    if (nextView === "lessons") {
      setIsLessonJournalOpen(false);
    }
  }

  return (
    <main className={isSidebarCollapsed ? "appFrame sidebarCollapsed" : "appFrame"}>
      <Sidebar
        activeView={activeView}
        isCollapsed={isSidebarCollapsed}
        onChangeView={handleChangeView}
        onLogout={handleLogout}
        onToggle={() => setIsSidebarCollapsed((current) => !current)}
      />

      <section className="mainPanel">
        {activeView === "lessons" ? (
          <TeacherLessonHubV2
            academyTests={academyTests}
            aiSettings={aiSettings}
            allRecords={records}
            generatedLessonControls={generatedLessonControls}
            integrationStatus={integrationStatus}
            lessonNotificationPlans={lessonNotificationPlans}
            notificationJobs={notificationJobs}
            lessons={calendarLessons}
            lessonsForDate={lessonsForDate}
            makeupTasks={makeupTasks}
            materials={resourceMaterials}
            records={records}
            saveStates={saveStates}
            selectedDate={selectedDate}
            selectedLesson={selectedLesson}
            selectedLessonId={selectedLessonId}
            students={students}
            homeworks={homeworks}
            clipboardCount={lessonClipboard ? 1 : 0}
            undoCount={lessonUndoStack.length}
            onAddLesson={() => setIsLessonModalOpen(true)}
            onChangeRecord={handleChangeRecord}
            onCopyLesson={handleCopySelectedLesson}
            onDateSelect={handleDateSelect}
            onDeleteLesson={handleDeleteLesson}
            onDeleteSelectedLesson={handleDeleteSelectedLessonFromCalendar}
            onEditLesson={(lesson) => {
              setEditingLesson(lesson);
              setIsLessonModalOpen(true);
            }}
            onApplyBulkHomework={handleApplyBulkHomework}
            onBackToCalendar={() => setIsLessonJournalOpen(false)}
            onMoveDate={handleCalendarMove}
            onOpenAttendance={setAttendanceModal}
            onOpenExamPrep={() => handleChangeView("examPrep")}
            onOpenLessonJournal={handleOpenLessonJournal}
            onPasteLesson={handlePasteLessonToSelectedDate}
            onOpenReport={handleOpenReport}
            onPolishComment={handlePolishLessonComment}
            onPolishPreparationNotice={handlePolishPreparationNotice}
            onPassMakeupTask={handlePassSupplementTask}
            onSaveRecord={handleSaveRecord}
            onSendComment={handleSendLessonComment}
            onSelectLesson={setSelectedLessonId}
            onScheduleLessonNotificationsAt={handleScheduleLessonNotificationsAt}
            onUndoLessonAction={handleUndoLessonAction}
            onUpdateHomework={handleUpdateHomework}
            onUpdateLessonNotificationPlan={handleUpdateLessonNotificationPlan}
            onUpdateExamSundayMakeupBlocks={updateExamSundayMakeupBlocks}
            onUpdateMakeupTask={handleUpdateMakeupTask}
            onToggleStudentNotificationMute={handleToggleStudentNotificationMute}
            isLessonJournalOpen={isLessonJournalOpen}
          />
        ) : null}

        {activeView === "studentPortal" ? (
          <StudentPortalV2
            examPrepRows={examPrepRows}
            examPostSubmissions={examPostSubmissions}
            examPostTargetStudentIds={examPostTargetStudentIds}
            homeworks={homeworks}
            lessons={lessons}
            materials={resourceMaterials}
            makeupTasks={makeupTasks}
            records={records}
            reportSnapshots={reportSnapshots}
            schoolEvents={schoolEvents}
            previewMode
            scoreRecords={scoreRecords}
            studentQuestions={studentQuestions}
            students={students}
            onStudentAddQuestion={handleStudentAddQuestion}
            onStudentCheckHomework={handleStudentCheckHomework}
            onStudentDeleteQuestion={handleStudentDeleteQuestion}
            onSubmitExamPostSubmission={handleSubmitExamPostSubmission}
            onStudentUpdateQuestion={handleStudentUpdateQuestion}
          />
        ) : null}

        {activeView === "overdue" ? (
          <OverdueHomework
            homeworks={homeworks}
            lessons={lessons}
            materials={resourceMaterials}
            records={records}
            reportSnapshots={reportSnapshots}
            scoreRecords={scoreRecords}
            students={students}
            onTeacherVerifyHomework={handleTeacherVerifyHomework}
          />
        ) : null}

        {activeView === "students" ? (
          <StudentManager
            academyTests={academyTests}
            appStateSaveState={appStateSaveState}
            ModalComponent={Modal}
            scoreRecords={scoreRecords}
            studentAutoSaveStates={studentAutoSaveStates}
            students={students}
            templates={classTemplates}
            onAddAcademyTest={(studentId) =>
              setAcademyTests((current) => [
                {
                  testId: `academy_test_${Date.now()}_${studentId}`,
                  studentId,
                  testDate: today,
                  title: "학원 테스트",
                  scope: "",
                  score: "",
                  averageScore: "",
                  note: ""
                },
                ...current
              ])
            }
            onAddStudent={() => setIsStudentModalOpen(true)}
            onAddScore={(studentId) =>
              setScoreRecords((current) => [
                {
                  scoreRecordId: `score_${Date.now()}_${studentId}`,
                  studentId,
                  examType: "내신",
                  examDate: today,
                  subject: "수학",
                  score: "",
                  grade: "",
                  note: ""
                },
                ...current
              ])
            }
            onUpdateAcademyTest={(testId, field, value) =>
              setAcademyTests((current) =>
                current.map((item) => (item.testId === testId ? { ...item, [field]: value } : item))
              )
            }
            onUpdateScore={(scoreRecordId, field, value) =>
              setScoreRecords((current) =>
                current.map((item) => (item.scoreRecordId === scoreRecordId ? { ...item, [field]: value } : item))
              )
            }
            onDeleteStudent={handleDeleteStudent}
            onSaveStudent={handleSaveStudent}
            onUpdateStudent={handleUpdateStudent}
          />
        ) : null}

        {activeView === "classes" ? (
          <ClassManager
            students={students}
            templates={classTemplates}
            onUpdateClassRoster={handleUpdateClassRoster}
          />
        ) : null}

        {activeView === "examPrep" ? (
          <ExamPrepCenter
            aiSettings={aiSettings}
            examPostSubmissions={examPostSubmissions}
            examPostTargetStudentIds={examPostTargetStudentIds}
            rowSaveStates={examPrepRowSaveStates}
            tallySubmissions={tallySubmissions}
            tallySummaries={tallySummaries}
            templates={classTemplates}
            rows={examPrepRows}
            students={students}
            onConfirmExamPostSubmission={handleConfirmExamPostSubmission}
            onEnsureExamCycleRows={(examCycle, classTemplateId) =>
              setExamPrepRows((current) => {
                const nextRowsToAdd = buildExamPrepRowsFromStudents(students, examCycle, classTemplateId, current);
                const nextRows = mergeById(current, nextRowsToAdd, "examPrepId");
                const addedRows = nextRows.filter((row) => !current.some((item) => item.examPrepId === row.examPrepId));
                if (addedRows.length > 0) {
                  persistExamPrepRows(addedRows);
                }
                return nextRows;
              })
            }
            onSetTallySubmissions={setTallySubmissions}
            onSetTallySummaries={setTallySummaries}
            onSetExamPostTargetStudentIds={setExamPostTargetStudentIds}
            onUpdateRow={handleUpdateExamPrepRow}
            onDeleteRow={handleDeleteExamPrepRow}
          />
        ) : null}

        {activeView === "examAnalysisPipeline" ? (
          <ExamAnalysisPipelineCenter examPrepRows={examPrepRows} />
        ) : null}

        {activeView === "schoolCalendar" ? (
          <SchoolCalendarCenter
            generatedLessonPlan={generatedLessonPlan}
            generatedLessonSaveStatus={generatedLessonSaveStatus}
            events={schoolEvents}
            rows={examPrepRows}
            onApplyGeneratedLesson={handleApplyGeneratedLesson}
            onApplyGeneratedLessons={handleApplyGeneratedLessons}
            onClearGeneratedLessonManualOverride={clearGeneratedLessonManualOverride}
            onAddEvent={(event) => {
              const nextEvent = { ...event, eventId: event.eventId || `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}` };
              setSchoolEvents((current) => [nextEvent, ...current]);
              postSchoolEvent(nextEvent).catch((error) => console.error(error));
            }}
            onDeleteEvent={(eventId) => {
              setSchoolEvents((current) => current.filter((event) => event.eventId !== eventId));
              deleteSchoolEventFromApi(eventId).catch((error) => console.error(error));
            }}
            onSuppressGeneratedLesson={suppressGeneratedLessonKey}
            onRetryGeneratedLessonSave={handleRetryGeneratedLessonSave}
            onUnsuppressGeneratedLesson={unsuppressGeneratedLessonKey}
            onSyncPreExamLesson={handleSyncPreExamLessonFromSchoolEvent}
            onUpdateExamPrepRow={handleUpdateExamPrepRow}
            onUpdateEvent={(eventId, field, value) =>
              setSchoolEvents((current) =>
                current.map((event) => {
                  if (event.eventId !== eventId) return event;
                  const nextEvent = { ...event, [field]: value };
                  postSchoolEvent(nextEvent).catch((error) => console.error(error));
                  return nextEvent;
                })
              )
            }
          />
        ) : null}

        {activeView === "lessonResearch" ? (
          <LessonResearchCenter
            appStateSaveState={appStateSaveState}
            items={lessonResearchItems}
            onAddItem={(subject) =>
              setLessonResearchItems((current) => [
                createLessonResearchItem(subject),
                ...current
              ])
            }
            onDeleteItem={(researchItemId) =>
              setLessonResearchItems((current) => current.filter((item) => item.researchItemId !== researchItemId))
            }
            onUpdateItem={(researchItemId, field, value) =>
              setLessonResearchItems((current) =>
                current.map((item) =>
                  item.researchItemId === researchItemId ? { ...item, [field]: value, updatedAt: today } : item
                )
              )
            }
          />
        ) : null}

        {activeView === "aiVariants" ? (
          <AIVariantProblemCenter aiSettings={aiSettings} students={students} />
        ) : null}

        {activeView === "settings" ? (
          <SettingsCenter
            aiSettings={aiSettings}
            appStateSaveState={appStateSaveState}
            attendanceSettings={attendanceSettings}
            integrationStatus={integrationStatus}
            onUpdateAiSettings={setAiSettings}
            onUpdateAttendanceSettings={setAttendanceSettings}
            teacherAccountSettings={teacherAccountSettings}
            onUpdateTeacherAccountSettings={setTeacherAccountSettings}
          />
        ) : null}

        {activeView === "notifications" ? (
          <NotificationCenter
            aiSettings={aiSettings}
            classTemplates={classTemplates}
            integrationStatus={integrationStatus}
            lessons={calendarLessons}
            notificationJobs={notificationJobs}
            notificationJobsStatus={notificationJobsStatus}
            notificationLogs={notificationLogs}
            onScheduleLessonNotificationsAt={handleScheduleLessonNotificationsAt}
            onUpdateLessonNotificationPlan={handleUpdateLessonNotificationPlan}
            students={students}
            onRefresh={refreshNotificationJobs}
          />
        ) : null}

        {activeView === "followups" ? (
          <FollowUpCenter
            appStateSaveState={appStateSaveState}
            homeworks={homeworks}
            lessons={lessons}
            notificationLogs={notificationLogs}
            problemBooks={problemBooks}
            records={records}
            students={students}
            tasks={makeupTasks}
            wrongProblems={wrongProblems}
            onAddProblemBook={(fileName) =>
              setProblemBooks((current) => [createProblemBookFromFile(fileName), ...current])
            }
            onAddWrongProblem={(studentId) =>
              setWrongProblems((current) => [
                {
                  wrongProblemId: `wrong_${Date.now()}_${studentId}`,
                  studentId,
                  source: "",
                  problemRange: "",
                  status: "open",
                  note: ""
                },
                ...current
              ])
            }
            onAssignHomework={handleAssignHomeworkFromTask}
            onCreateTask={handleCreateMakeupTask}
            onLogNotification={handleLogNotification}
            onUpdateProblemBook={(problemBookId, field, value) =>
              setProblemBooks((current) =>
                current.map((book) => (book.problemBookId === problemBookId ? { ...book, [field]: value } : book))
              )
            }
            onUpdateProblemMeta={(problemBookId, problemId, field, value) =>
              setProblemBooks((current) =>
                current.map((book) =>
                  book.problemBookId === problemBookId
                    ? {
                        ...book,
                        problems: book.problems.map((problem) =>
                          problem.problemId === problemId ? { ...problem, [field]: value } : problem
                        )
                      }
                    : book
                )
              )
            }
            onUpdateTask={handleUpdateMakeupTask}
            onUpdateWrongProblem={(wrongProblemId, field, value) =>
              setWrongProblems((current) =>
                current.map((item) => (item.wrongProblemId === wrongProblemId ? { ...item, [field]: value } : item))
              )
            }
          />
        ) : null}

        {activeView === "supplements" ? (
          <SupplementCenter
            homeworks={homeworks}
            lessons={lessons}
            records={records}
            students={students}
            tasks={makeupTasks}
            onCreateTask={handleCreateMakeupTask}
            onPassTask={handlePassSupplementTask}
            onScheduleTask={handleScheduleSupplementTask}
            onUndoPassTask={handleUndoPassSupplementTask}
            onUpdateTask={handleUpdateMakeupTask}
          />
        ) : null}

        {activeView === "materials" ? (
          <MaterialManager
            appStateSaveState={appStateSaveState}
            problemBooks={problemBooks}
            students={students}
            onAddFolder={(folderName) =>
              setProblemBooks((current) => [createProblemBookFolder(folderName), ...current])
            }
            onAddPdf={(fileName) =>
              setProblemBooks((current) => [createProblemBookFromFile(fileName), ...current])
            }
            onSyncProblemCounts={() =>
              setProblemBooks((current) =>
                current.map((book) => ({ ...book, totalProblems: book.problems?.length ?? book.totalProblems ?? 0 }))
              )
            }
            onImportPageSnapBooks={(jsonText) => {
              const importedBooks = createProblemBooksFromPageSnapJson(jsonText);
              setProblemBooks((current) => [...importedBooks, ...current]);
              return importedBooks.length;
            }}
            onUpdateBook={(problemBookId, field, value) =>
              setProblemBooks((current) =>
                current.map((book) => (book.problemBookId === problemBookId ? { ...book, [field]: value } : book))
              )
            }
          />
        ) : null}

        {activeView === "resources" ? (
          <ResourceLibraryCenter
            materials={resourceMaterials}
            students={students}
            templates={classTemplates}
            onAddMaterial={handleAddResourceMaterial}
            onDeleteMaterial={handleDeleteResourceMaterial}
          />
        ) : null}

        {activeView === "reports" ? (
          <EvaluationCenter
            academyTests={academyTests}
            scoreRecords={scoreRecords}
            students={students}
            wrongProblems={wrongProblems}
            onAddAcademyTest={() =>
              setAcademyTests((current) => [
                {
                  testId: `academy_test_${Date.now()}`,
                  testDate: today,
                  title: "학원 테스트",
                  scope: "",
                  averageScore: "",
                  note: ""
                },
                ...current
              ])
            }
            onAddScore={() =>
              setScoreRecords((current) => [
                {
                  scoreRecordId: `score_${Date.now()}`,
                  studentId: students[0]?.studentId ?? "",
                  examType: "내신",
                  examDate: today,
                  subject: "수학",
                  score: "",
                  grade: "",
                  note: ""
                },
                ...current
              ])
            }
            onAddWrongProblem={() =>
              setWrongProblems((current) => [
                {
                  wrongProblemId: `wrong_${Date.now()}`,
                  studentId: students[0]?.studentId ?? "",
                  source: "",
                  problemRange: "",
                  status: "open",
                  note: ""
                },
                ...current
              ])
            }
            onUpdateAcademyTest={(testId, field, value) =>
              setAcademyTests((current) =>
                current.map((item) => (item.testId === testId ? { ...item, [field]: value } : item))
              )
            }
            onUpdateScore={(scoreRecordId, field, value) =>
              setScoreRecords((current) =>
                current.map((item) => (item.scoreRecordId === scoreRecordId ? { ...item, [field]: value } : item))
              )
            }
            onUpdateWrongProblem={(wrongProblemId, field, value) =>
              setWrongProblems((current) =>
                current.map((item) => (item.wrongProblemId === wrongProblemId ? { ...item, [field]: value } : item))
              )
            }
          />
        ) : null}
      </section>

      {isLessonModalOpen ? (
        <LessonModal
          initialLesson={editingLesson}
          students={students}
          templates={classTemplates}
          onClose={() => {
            setEditingLesson(null);
            setIsLessonModalOpen(false);
          }}
          onSubmit={editingLesson ? handleUpdateLesson : handleAddLesson}
        />
      ) : null}

      {isStudentModalOpen ? (
        <StudentModal
          intakeApplicants={studentIntakeApplicants}
          applicantSaveStates={studentIntakeSaveStates}
          templates={classTemplates}
          onClose={() => setIsStudentModalOpen(false)}
          onRegisterApplicant={handleRegisterStudentIntakeApplicant}
          onSubmit={handleAddStudent}
          onUpdateApplicant={handleUpdateStudentIntakeApplicant}
        />
      ) : null}

      {attendanceModal ? (
        <AttendanceModal
          item={attendanceModal}
          lateGraceMinutes={attendanceSettings.lateGraceMinutes}
          onClose={() => setAttendanceModal(null)}
          onSave={async (lesson, student, values, options = {}) => {
            const { saved } = await saveAttendanceRecord(lesson, student, values, "instructor_owner_001", {
              sendAlimtalk: Boolean(options.sendAlimtalk)
            });
            if (!saved) return false;
            setAttendanceModal(null);
            return true;
          }}
        />
      ) : null}

      {reportModal ? (
        <ReportModal
          report={reportModal}
          onClose={() => setReportModal(null)}
          onMockSend={(report) => {
            setReportSnapshots((current) => [
              { ...report, reportId: `report_${Date.now()}_${report.student.studentId}`, status: "mock_sent", createdAt: new Date().toISOString() },
              ...current
            ]);
            setReportModal({ ...report, sendStatus: "mock_sent" });
          }}
          onSaveSnapshot={(report) => {
            setReportSnapshots((current) => [
              { ...report, reportId: `report_${Date.now()}_${report.student.studentId}`, status: "snapshot_saved", createdAt: new Date().toISOString() },
              ...current
            ]);
            setReportModal({ ...report, sendStatus: "snapshot_saved" });
          }}
        />
      ) : null}

      {pendingDeleteLesson ? (
        <Modal
          className="studentDeleteModal"
          onClose={() => setLessonDeleteModalId("")}
          subtitle="수업을 취소 처리하면 달력과 수업일지 목록에서는 숨겨지고, DB에는 7일 동안 취소 상태로 보관됩니다."
          title="수업 취소 확인"
        >
          <div className="deleteConfirmBody">
            <div className="deleteConfirmStudent">
              <span className="studentInitial">수</span>
              <div>
                <strong>{pendingDeleteLesson.className}</strong>
                <p className="muted">
                  {pendingDeleteLesson.date} · {pendingDeleteLesson.startTime}-{pendingDeleteLesson.endTime} · {pendingDeleteLesson.studentIds?.length ?? 0}명
                </p>
              </div>
            </div>
            <p className="dangerCopy">정말 이 수업을 취소 처리할까요? 7일 안에는 되돌릴 수 있고, 이후에는 자동 삭제됩니다.</p>
          </div>
          <div className="deleteConfirmActions">
            <button className="softButton" onClick={() => setLessonDeleteModalId("")} type="button">취소</button>
            <button className="dangerButton" onClick={() => confirmDeleteLesson(pendingDeleteLesson.lessonId)} type="button">수업 취소 처리</button>
          </div>
        </Modal>
      ) : null}
    </main>
  );

  function handleOpenReport(lesson, student, record, homeworkBundle) {
    setReportModal({
      lesson,
      student,
      record,
      homeworkBundle,
      title: `${lesson.date} ${student.name} 데일리 리포트`,
      body: createAiReportDraft(student, lesson, record, homeworkBundle),
      sendStatus: "draft"
    });
  }

  async function handlePolishLessonComment(lesson, student, record, target, aiProvider, aiModel) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const sourceField = target === "student" ? "studentComment" : "teacherComment";
    const statusField = target === "student" ? "studentCommentAiStatus" : "teacherCommentAiStatus";
    const supplementSchedules = getStudentSupplementSchedules(makeupTasks, student.studentId);
    const sourceDraft = buildInitialCommentDraft({
      audience: target === "student" ? "student" : "parent",
      existingComment: record?.[sourceField] ?? "",
      record,
      supplementSchedules
    });

    setRecords((current) =>
      upsertById(
        current,
        {
          ...createEmptyRecord(lesson, student),
          ...(record ?? {}),
          lessonStudentRecordId: recordId,
          [statusField]: "AI 수정 중"
        },
        "lessonStudentRecordId"
      )
    );

    try {
      const response = await fetch(apiUrl("/api/ai/comment-polish"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aiProvider,
          aiModel,
          aiPrompt: getAiPrompt(aiSettings, "commentPolish"),
          audience: target === "student" ? "student" : "parent",
          attendanceStatus: attendanceLabels[record?.attendanceStatus ?? "pending"],
          assignmentStatus: getAssignmentStatusMessage(target === "student" ? "student" : "parent", record?.assignmentStatus ?? record?.incompleteHomework ?? ""),
          grade: student.grade,
          homeworkStatus: homeworkLabels[record?.homeworkStatus ?? "not_started"],
          lessonDate: lesson.date,
          lessonContent: getLessonContent(record),
          lessonMaterial: getLessonMaterial(record, student),
          lessonName: lesson.className,
          rawText: sourceDraft || (record?.[sourceField] ?? ""),
          schoolName: student.schoolName,
          studentName: student.name,
          supplementSchedule: supplementSchedules.join("\n")
        })
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "코멘트 AI 수정에 실패했습니다.");
      }

      setRecords((current) =>
        upsertById(
          current,
          {
            ...createEmptyRecord(lesson, student),
            ...(record ?? {}),
            lessonStudentRecordId: recordId,
            [sourceField]: result.result.polishedText,
            [statusField]: `완료 · ${result.result.provider}`,
            updatedAt: new Date().toISOString()
          },
          "lessonStudentRecordId"
        )
      );
    } catch (error) {
      setRecords((current) =>
        upsertById(
          current,
          {
            ...createEmptyRecord(lesson, student),
            ...(record ?? {}),
            lessonStudentRecordId: recordId,
            [statusField]: `실패 · ${error.message}`
          },
          "lessonStudentRecordId"
        )
      );
    }
  }

  async function handlePolishPreparationNotice(lesson, student, record, target, aiProvider, aiModel) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const statusField = target === "student" ? "prepStudentAiStatus" : "prepParentAiStatus";
    const resultField = target === "student" ? "prepStudentNotice" : "prepParentNotice";
    const audienceLabel = target === "student" ? "학생" : "학부모";
    const rawText = record?.preparationMemo?.trim() || record?.[resultField]?.trim() || "";

    setRecords((current) =>
      upsertById(
        current,
        {
          ...createEmptyRecord(lesson, student),
          ...(record ?? {}),
          lessonStudentRecordId: recordId,
          [statusField]: "AI 정제 중"
        },
        "lessonStudentRecordId"
      )
    );

    if (!rawText) {
      setRecords((current) =>
        upsertById(
          current,
          {
            ...createEmptyRecord(lesson, student),
            ...(record ?? {}),
            lessonStudentRecordId: recordId,
            [statusField]: "메모 없음"
          },
          "lessonStudentRecordId"
        )
      );
      return;
    }

    try {
      const response = await fetch(apiUrl("/api/ai/comment-polish"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aiProvider,
          aiModel,
          aiPrompt: getAiPrompt(aiSettings, "preparationNotice"),
          audience: target === "student" ? "student" : "parent",
          attendanceStatus: attendanceLabels[record?.attendanceStatus ?? "pending"],
          assignmentStatus: getAssignmentStatusMessage(target === "student" ? "student" : "parent", record?.assignmentStatus ?? record?.incompleteHomework ?? ""),
          grade: student.grade,
          homeworkStatus: "수업 준비 안내",
          lessonDate: lesson.date,
          lessonContent: getLessonContent(record),
          lessonMaterial: getLessonMaterial(record, student),
          lessonName: lesson.className,
          rawText: `${audienceLabel}에게 안내할 수업메모입니다. 짧고 정중하게 다듬어 주세요.\n${rawText}`,
          schoolName: student.schoolName,
          studentName: student.name
        })
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "수업메모 AI 정제에 실패했습니다.");
      }

      setRecords((current) =>
        upsertById(
          current,
          {
            ...createEmptyRecord(lesson, student),
            ...(record ?? {}),
            lessonStudentRecordId: recordId,
            [resultField]: result.result.polishedText,
            [statusField]: `완료 · ${result.result.provider}`,
            updatedAt: new Date().toISOString()
          },
          "lessonStudentRecordId"
        )
      );
      setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "dirty" }));
    } catch (error) {
      setRecords((current) =>
        upsertById(
          current,
          {
            ...createEmptyRecord(lesson, student),
            ...(record ?? {}),
            lessonStudentRecordId: recordId,
            [statusField]: `실패 · ${error.message}`
          },
          "lessonStudentRecordId"
        )
      );
    }
  }

  async function handleSendLessonComment(lesson, student, record, target, options = {}) {
    if (options.sendTiming === "none") return;
    if (isRecordNotificationMuted(record, target)) return;
    const sourceField = target === "student" ? "studentComment" : "teacherComment";
    const message = normalizeMessageText(record?.[sourceField]);
    const preparationNotice = getPreparationNoticeForTarget(record, target);
    const prepMessage = preparationNotice && !textIncludesMessageBlock(message, preparationNotice) ? preparationNotice : "";
    const composedMessage = joinMessageBlocks([prepMessage, message]);
    const manualCommentBody = normalizeMessageText(options.manualCommentBody);
    const manualPreviewBody = normalizeMessageText(options.manualPreviewBody);
    const finalMessage = manualCommentBody || composedMessage;
    const hasSendContent = Boolean(finalMessage);
    const channel = target === "student" ? "student_alimtalk" : "parent_alimtalk";
    const statusField = target === "student" ? "studentCommentSendStatus" : "teacherCommentSendStatus";
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const scheduledDate = options.sendTiming === "now" ? "" : getLessonAlimtalkScheduledDate(lesson, options.delayMinutes ?? 0);
    const scheduledLabel = scheduledDate ? formatKoreaTimeLabel(scheduledDate) : "";
    const logBase = {
      notificationLogId: `notification_${Date.now()}_${recordId}_${target}`,
      channel,
      createdAt: new Date().toISOString(),
      lessonId: lesson.lessonId,
      message: manualPreviewBody || finalMessage || "발송할 코멘트가 없습니다.",
      provider: "solapi",
      scheduledDate,
      scheduledLabel,
      studentId: student.studentId,
      target
    };
    const applySendStatus = (statusText, { persist = false } = {}) => {
      const nextRecord = {
        ...createEmptyRecord(lesson, student),
        ...(record ?? {}),
        lessonStudentRecordId: recordId,
        lessonId: lesson.lessonId,
        studentId: student.studentId,
        [statusField]: statusText
      };
      setRecords((current) => upsertLessonStudentRecord(current, nextRecord));
      if (persist) {
        patchLessonRecordNotificationStatusRequest({
          lessonId: lesson.lessonId,
          lessonStudentRecordId: recordId,
          studentId: student.studentId,
          teacherCommentSendStatus: target === "parent" ? statusText : undefined,
          studentCommentSendStatus: target === "student" ? statusText : undefined,
          updatedBy: "instructor_owner_001"
        }).catch((error) => console.error(error));
      }
    };

    if (!hasSendContent) {
      setNotificationLogs((current) => [
        { ...logBase, status: "empty_message" },
        ...current
      ]);
      applySendStatus("내용 없음", { persist: true });
      return;
    }

    applySendStatus(scheduledDate ? `예약 중 · ${scheduledLabel}` : "알림톡 발송 중");

    try {
      const lessonMaterial = getLessonMaterial(record, student);
      const lessonContent = getLessonContent(record);
      const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons);
      const nextHomework = getLessonHomework(homeworks, lesson, student, "next");
      const assignmentStatus = getAssignmentStatusForMessage(record, previousHomework);
      const supplementSchedules = getStudentSupplementSchedules(makeupTasks, student.studentId);
      const notificationPayload = {
        academyName: academyBrandName,
        assignmentStatus,
        assignmentStatusMessage: getAssignmentStatusMessage(target === "student" ? "student" : "parent", assignmentStatus),
        assignmentStatusParentMessage: getAssignmentStatusParentMessage(assignmentStatus),
        assignmentStatusStudentMessage: getAssignmentStatusStudentMessage(assignmentStatus),
        attendanceStatus: record?.attendanceStatus ?? "pending",
        attendanceReason: record?.attendanceReason ?? "",
        checkInTime: record?.checkInTime ?? "",
        checkOutTime: record?.checkOutTime ?? "",
        checkedAt: record?.checkInAt || record?.checkOutAt || "",
        lateMinutes: record?.lateMinutes ?? "",
        lessonDate: lesson.date,
        lessonContent,
        lessonId: lesson.lessonId,
        lessonMaterial,
        lessonName: lesson.className,
        forceDryRun: Boolean(options.forceDryRun),
        forceTestRecipient: Boolean(options.forceTestRecipient),
        commentBodyOverride: manualCommentBody,
        manualResend: Boolean(options.resendReason),
        message: finalMessage,
        nextHomework: nextHomework?.title ?? "",
        preparationNotice: "",
        parentPhone: student.parentPhone,
        previousHomework: previousHomework?.title ?? "",
        resendReason: options.resendReason ?? "",
        scheduledDate,
        sendMode: options.forceDryRun || options.forceTestRecipient ? "test" : scheduledDate ? "scheduled" : "immediate",
        studentId: student.studentId,
        studentName: student.name,
        studentPhone: student.studentPhone,
        supplementSchedule: supplementSchedules.join("\n"),
        target
      };
      const response = await fetch(apiUrl("/api/notifications/comment-alimtalk"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(notificationPayload)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "코멘트 알림톡 발송 실패");
      }

      const logStatus = scheduledDate ? "scheduled" : result.result?.dryRun ? "dry_run" : "sent";
      const notificationLog = { ...logBase, result, status: logStatus };
      setNotificationLogs((current) => [notificationLog, ...current]);
      const notificationJob = {
        ...notificationLog,
        notificationJobId: notificationLog.notificationLogId,
        notificationType: target === "student" ? "student_comment" : "parent_comment",
        lessonStudentRecordId: recordId,
        payload: notificationPayload,
        previewBody: logBase.message,
        recipient: target === "student" ? student.studentPhone : student.parentPhone,
        scheduledAt: scheduledDate,
        status: logStatus === "dry_run" ? "draft" : logStatus
      };
      setNotificationJobs((current) => [notificationJob, ...current.filter((job) => job.notificationJobId !== notificationJob.notificationJobId)]);
      postJson("/api/notification-jobs", {
        notificationJob
      }).catch((error) => console.error(error));
      const completeStatus = scheduledDate
        ? `예약 중 · ${scheduledLabel}`
        : result.result?.dryRun
          ? "테스트 발송 기록됨"
          : "알림톡 발송 완료";
      applySendStatus(completeStatus, { persist: true });
    } catch (error) {
      const failedLog = { ...logBase, error: error.message, status: "failed" };
      setNotificationLogs((current) => [failedLog, ...current]);
      const failedJob = {
        ...failedLog,
        notificationJobId: failedLog.notificationLogId,
        notificationType: target === "student" ? "student_comment" : "parent_comment",
        lessonStudentRecordId: recordId,
        previewBody: logBase.message,
        recipient: target === "student" ? student.studentPhone : student.parentPhone,
        scheduledAt: scheduledDate
      };
      setNotificationJobs((current) => [failedJob, ...current.filter((job) => job.notificationJobId !== failedJob.notificationJobId)]);
      postJson("/api/notification-jobs", {
        notificationJob: failedJob
      }).catch((persistError) => console.error(persistError));
      applySendStatus(`실패 · ${error.message}`, { persist: true });
    }
  }

  function handleStudentCheckHomework(homeworkId) {
    setHomeworks((current) =>
      current.map((homework) => {
        if (homework.homeworkId !== homeworkId) return homework;
        const nextHomework = {
          ...homework,
          status: "submitted",
          studentStatus: "checked_done",
          teacherStatus: homework.teacherStatus === "verified" ? "verified" : "unverified",
          checkedAt: new Date().toISOString()
        };
        postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
        return nextHomework;
      })
    );
  }

  function handleStudentAddQuestion(question) {
    const text = String(question?.text ?? "").trim();
    if (!text || !question?.studentId) return;
    const nextQuestion = {
      questionId: `student_question_${Date.now()}`,
      studentId: question.studentId,
      text,
      source: question.source ?? "student",
      status: "ready",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setStudentQuestions((current) => [nextQuestion, ...current]);
  }

  function handleStudentUpdateQuestion(questionId, updates) {
    setStudentQuestions((current) =>
      current.map((question) =>
        question.questionId === questionId
          ? { ...question, ...updates, updatedAt: new Date().toISOString() }
          : question
      )
    );
  }

  function handleStudentDeleteQuestion(questionId) {
    setStudentQuestions((current) => current.filter((question) => question.questionId !== questionId));
  }

  function handleSubmitExamPostSubmission(target, student, values) {
    const nextSubmission = createExamPostSubmissionPayload(target, student, {
      ...target.submission,
      ...values,
      submissionId: target.submission?.submissionId
    });
    setExamPostSubmissions((current) => [
      nextSubmission,
      ...current.filter((submission) => submission.submissionId !== nextSubmission.submissionId && submission.targetId !== nextSubmission.targetId)
    ]);
  }

  function handleConfirmExamPostSubmission(submissionId, teacherConfirmed) {
    setExamPostSubmissions((current) =>
      current.map((submission) =>
        submission.submissionId === submissionId
          ? { ...submission, teacherConfirmed, updatedAt: new Date().toISOString() }
          : submission
      )
    );
  }

  function handleTeacherVerifyHomework(homeworkId, teacherStatus) {
    setHomeworks((current) =>
      current.map((homework) => {
        if (homework.homeworkId !== homeworkId) return homework;
        const nextHomework = {
          ...homework,
          status: teacherStatus === "verified" ? "verified" : teacherStatus,
          teacherStatus,
          verifiedAt: new Date().toISOString()
        };
        postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
        return nextHomework;
      })
    );
  }

  function handleAddResourceMaterial(material) {
    const nextMaterial = {
      materialId: `resource_${Date.now()}`,
      createdAt: new Date().toISOString(),
      title: material.title.trim(),
      description: material.description.trim(),
      fileName: material.fileName.trim(),
      fileUrl: material.fileUrl.trim(),
      visibility: material.visibility,
      classTemplateId: material.classTemplateId,
      studentIds: material.studentIds,
      notifyByAlimtalk: material.notifyByAlimtalk
    };
    setResourceMaterials((current) => [nextMaterial, ...current]);
    postJson("/api/resource-materials", { material: nextMaterial })
      .then((result) => {
        if (!result.ok || !result.material) return;
        setResourceMaterials((current) =>
          current.map((item) => (item.materialId === nextMaterial.materialId ? result.material : item))
        );
      })
      .catch((error) => console.error(error));
  }

  function handleDeleteResourceMaterial(materialId) {
    setResourceMaterials((current) => current.filter((material) => material.materialId !== materialId));
    fetch(apiUrl(`/api/resource-materials?id=${encodeURIComponent(materialId)}`), { method: "DELETE" })
      .then((response) => response.json())
      .then((result) => {
        if (!result.ok) throw new Error(result.error || "자료 삭제 저장 실패");
      })
      .catch((error) => console.error(error));
  }

  function handleCreateMakeupTask(task) {
    const taskId = `makeup_${Date.now()}_${task.studentId}`;
    setMakeupTasks((current) => {
      const existingTask = current.find(
        (item) =>
          item.studentId === task.studentId &&
          item.sourceId === task.sourceId &&
          item.taskType === task.taskType
      );

      if (existingTask) {
        const nextTask = {
          ...existingTask,
          status: existingTask.status === "done" ? "scheduled" : existingTask.status,
          touchedAt: new Date().toISOString()
        };
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return current.map((item) =>
          item.makeupTaskId === existingTask.makeupTaskId
            ? nextTask
            : item
        );
      }

      const nextTask = {
        makeupTaskId: taskId,
        status: "draft",
        scheduledDate: today,
        scheduledTime: "",
        supplementHomeworkNote: task.supplementHomeworkNote || task.sourceLabel || "",
        notificationDraft: "",
        attemptCount: 0,
        childHomeworkIds: [],
        createdAt: new Date().toISOString(),
        ...task
      };
      postMakeupTask(nextTask).catch((error) => console.error(error));
      return [nextTask, ...current];
    });
  }

  function handleAssignHomeworkFromTask(task) {
    const homeworkId = `homework_makeup_${Date.now()}_${task.studentId}`;
    const nextHomework = {
      homeworkId,
      studentId: task.studentId,
      lessonId: "",
      makeupTaskId: task.makeupTaskId,
      sourceHomeworkId: task.sourceId,
      title: `보충: ${task.sourceLabel}`,
      subject: "공통수학1",
      homeworkType: "makeup",
      totalProblems: 10,
      assignedDate: today,
      dueDate: addDaysInKorea(today, 3),
      status: "assigned",
      studentStatus: "not_started",
      teacherStatus: "unverified",
      createdByRole: "teacher",
      createdAt: new Date().toISOString()
    };

    setHomeworks((current) => [nextHomework, ...current]);
    setMakeupTasks((current) =>
      current.map((item) => {
        if (item.makeupTaskId !== task.makeupTaskId) return item;
        const nextTask = {
          ...item,
          status: "scheduled",
          lastHomeworkId: homeworkId,
          childHomeworkIds: [...(item.childHomeworkIds ?? []), homeworkId],
          attemptCount: (item.attemptCount ?? 0) + 1,
          lastAssignedAt: new Date().toISOString()
        };
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return nextTask;
      })
    );
  }

  function handleScheduleSupplementTask(task) {
    const student = students.find((item) => item.studentId === task.studentId);
    if (!student || !task.scheduledDate || !task.scheduledTime) return;

    const lessonId = task.linkedLessonId || createSupplementLessonId(task);
    const className = createSupplementLessonName(task, student);
    const lesson = {
      lessonId,
      classTemplateId: "",
      className,
      lessonType: "makeup",
      date: task.scheduledDate,
      dayOfWeek: getDayKey(task.scheduledDate),
      startTime: task.scheduledTime,
      endTime: addMinutesToTime(task.scheduledTime, 60),
      color: getSupplementLessonColor(task.taskType),
      teacherId: "instructor_owner_001",
      studentIds: [student.studentId],
      status: "scheduled",
      lessonTopic: `${followUpTypeLabel(task.taskType)} 일정`,
      sourceMakeupTaskId: task.makeupTaskId,
      sourceLabel: task.sourceLabel
    };

    setLessons((current) => upsertById(current, lesson, "lessonId"));
    setMakeupTasks((current) =>
      current.map((item) => {
        if (item.makeupTaskId !== task.makeupTaskId) return item;
        const nextTask = {
          ...item,
          ...task,
          status: "scheduled",
          scheduledDate: lesson.date,
          scheduledTime: lesson.startTime,
          linkedLessonId: lessonId,
          linkedLessonDate: lesson.date,
          linkedLessonTime: lesson.startTime,
          needsLessonResync: false,
          lastScheduledAt: new Date().toISOString()
        };
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return nextTask;
      })
    );
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    setIsLessonJournalOpen(false);
    postJson("/api/lessons", { lesson }).catch((error) => console.error(error));
  }

  function handlePassSupplementTask(task) {
    if (!task?.studentId || !task?.sourceId) return;
    const completedAt = new Date().toISOString();
    const makeupTaskId = task.makeupTaskId || `makeup_pass_${Date.now()}_${task.studentId}`;
    const needsMoreSupplement = task.completionDecision === "needs_more" || task.supplementProcessStatus === "needs_more";
    const nextTask = {
      scheduledDate: task.scheduledDate || today,
      scheduledTime: task.scheduledTime || "",
      notificationDraft: task.notificationDraft || "",
      attemptCount: task.attemptCount ?? 0,
      childHomeworkIds: task.childHomeworkIds ?? [],
      createdAt: task.createdAt || completedAt,
      ...task,
      makeupTaskId,
      completedAt: needsMoreSupplement ? task.completedAt || "" : completedAt,
      passedAt: needsMoreSupplement ? task.passedAt || "" : completedAt,
      status: needsMoreSupplement ? "scheduled" : "done",
      supplementProcessStatus: needsMoreSupplement ? "needs_more" : "completed",
      touchedAt: completedAt
    };

    setMakeupTasks((current) => upsertById(current, nextTask, "makeupTaskId"));
    postMakeupTask(nextTask).catch((error) => console.error(error));

    if (!needsMoreSupplement && task.taskType === "homework_makeup") {
      setHomeworks((current) =>
        current.map((homework) => {
          if (homework.homeworkId !== task.sourceId) return homework;
          const nextHomework = {
            ...homework,
            status: "verified",
            teacherStatus: "verified",
            verifiedAt: completedAt
          };
          postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
          return nextHomework;
        })
      );
    }
  }

  function handleUndoPassSupplementTask(task) {
    if (!task?.makeupTaskId) return;
    const updatedAt = new Date().toISOString();
    const restoredStatus = task.linkedLessonId || task.scheduledDate ? "scheduled" : "draft";
    setMakeupTasks((current) =>
      current.map((item) => {
        if (item.makeupTaskId !== task.makeupTaskId) return item;
        const nextTask = {
          ...item,
          status: restoredStatus,
          completedAt: "",
          passedAt: "",
          touchedAt: updatedAt,
          updatedAt
        };
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return nextTask;
      })
    );

    if (task.taskType === "homework_makeup" && task.sourceId) {
      setHomeworks((current) =>
        current.map((homework) => {
          if (homework.homeworkId !== task.sourceId) return homework;
          const nextTeacherStatus = task.reason?.includes("미완료") ? "missing" : "partial";
          const nextHomework = {
            ...homework,
            status: nextTeacherStatus,
            teacherStatus: nextTeacherStatus,
            verifiedAt: ""
          };
          postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
          return nextHomework;
        })
      );
    }
  }

  function handleUpdateMakeupTask(taskId, field, value) {
    setMakeupTasks((current) =>
      current.map((task) => {
        if (task.makeupTaskId !== taskId) return task;
        const nextTask = { ...task, [field]: value, updatedAt: new Date().toISOString() };
        if (
          task.linkedLessonId &&
          ((field === "scheduledDate" && value !== task.linkedLessonDate) ||
            (field === "scheduledTime" && value !== task.linkedLessonTime))
        ) {
          nextTask.needsLessonResync = true;
        }
        postMakeupTask(nextTask).catch((error) => console.error(error));
        return nextTask;
      })
    );
  }

  function handleLogNotification(task) {
    setNotificationLogs((current) => [
      {
        notificationLogId: `notification_${Date.now()}_${task.makeupTaskId}`,
        makeupTaskId: task.makeupTaskId,
        studentId: task.studentId,
        channel: "mock",
        status: "draft_logged",
        message: task.notificationDraft || createNotificationDraft(task, students),
        createdAt: new Date().toISOString()
      },
      ...current
    ]);
  }
}

function getNotificationJobLabel(type) {
  return {
    attendance: "출결 알림톡",
    daily_report: "학부모 알림톡",
    notice_parent: "학부모 공지",
    notice_student: "학생 공지",
    parent_comment: "학부모 알림톡",
    student_comment: "학생 알림톡",
    student_reminder: "학생 일정 알림톡"
  }[type] ?? type ?? "알림톡";
}

function getNotificationStatusLabel(status) {
  return {
    draft: "테스트/초안",
    dry_run: "테스트 기록",
    send_unconfirmed: "확인 필요",
    pending_send: "발송 대기",
    queued: "내부 대기",
    scheduled: "예약됨",
    sent: "발송 완료",
    failed: "실패",
    empty_message: "내용 없음"
  }[status] ?? status ?? "대기";
}

function getNotificationJobStatusClass(job) {
  if (!job) return "draft";
  if (job.status === "scheduled" && isNotificationSchedulePast(job.scheduledAt)) return "send_unconfirmed";
  return job.status || "draft";
}

function StatusDot({ active }) {
  return <span className={active ? "statusDot active" : "statusDot inactive"} />;
}

const noticeMessageTemplates = [
  {
    id: "material",
    label: "교재문자",
    title: "교재 안내",
    body: "안녕하세요. 으뜸수학 고태영T입니다.\n\n다음 수업부터 사용할 교재를 안내드립니다.\n학생이 수업에 필요한 교재와 필기구를 준비할 수 있도록 확인 부탁드립니다.\n\n감사합니다."
  },
  {
    id: "makeup",
    label: "보강문자",
    title: "보강 안내",
    body: "안녕하세요. 으뜸수학 고태영T입니다.\n\n보강 수업 일정을 안내드립니다.\n가능한 시간 확인 후 회신 부탁드립니다.\n\n감사합니다."
  },
  {
    id: "notice",
    label: "공지문자",
    title: "공지 안내",
    body: "안녕하세요. 으뜸수학 고태영T입니다.\n\n학원 공지사항을 안내드립니다.\n내용 확인 부탁드립니다.\n\n감사합니다."
  }
];

const noticeWithdrawnClassFilterId = "withdrawn_students";

function isNoticeWithdrawnStudent(student = {}) {
  return ["paused", "withdrawn"].includes(student.status ?? "active") || Boolean(student.withdrawnAt);
}

function NotificationCenter({
  aiSettings = defaultAiSettings,
  classTemplates = [],
  integrationStatus,
  notificationJobs,
  notificationJobsStatus = { state: "idle", message: "" },
  onRefresh,
  students
}) {
  const [classFilter, setClassFilter] = useState("all");
  const [deletingJobId, setDeletingJobId] = useState("");
  const [dispatchMessage, setDispatchMessage] = useState("");
  const [isPolishingNotice, setIsPolishingNotice] = useState(false);
  const [isSendingNotice, setIsSendingNotice] = useState(false);
  const [jobFilter, setJobFilter] = useState("all");
  const [localNoticeJobs, setLocalNoticeJobs] = useState([]);
  const [noticeBody, setNoticeBody] = useState("");
  const [noticeRecipientMode, setNoticeRecipientMode] = useState("selected");
  const [noticeTemplateId, setNoticeTemplateId] = useState("notice");
  const [noticeTitle, setNoticeTitle] = useState("");
  const [scheduleDate, setScheduleDate] = useState(today);
  const [scheduleTime, setScheduleTime] = useState("18:00");
  const [searchText, setSearchText] = useState("");
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);
  const commentAiProvider = aiSettings.commentProvider ?? defaultAiSettings.commentProvider;
  const commentAiModel = aiSettings.commentModel ?? defaultAiSettings.commentModel;
  const notificationStatus = integrationStatus?.notifications;
  const isNotificationJobsLoading = notificationJobsStatus?.state === "loading";
  const notificationJobsNoticeClass = notificationJobsStatus?.state === "failed"
    ? "inlineNotice danger"
    : "inlineNotice";
  const persistedNotificationJobIds = new Set(notificationJobs.map((job) => job.notificationJobId));
  const mergedNotificationJobs = [
    ...localNoticeJobs.filter((job) => !persistedNotificationJobIds.has(job.notificationJobId)),
    ...notificationJobs
  ];
  const noticeJobs = mergedNotificationJobs.filter((job) => String(job.notificationType ?? "").startsWith("notice_"));
  const pastScheduledNoticeJobs = noticeJobs.filter((job) => job.status === "scheduled" && isNotificationSchedulePast(job.scheduledAt));
  const scheduledNoticeJobs = noticeJobs.filter((job) => job.status === "scheduled" && !isNotificationSchedulePast(job.scheduledAt));
  const sentNoticeJobs = noticeJobs.filter((job) => job.status === "sent");
  const pendingNoticeJobs = noticeJobs.filter((job) => job.status === "send_unconfirmed").concat(pastScheduledNoticeJobs);
  const failedNoticeJobs = noticeJobs.filter((job) => job.status === "failed");
  const draftNoticeJobs = noticeJobs.filter((job) => job.status === "draft" || job.status === "dry_run" || job.status === "canceled");
  const filteredNoticeJobs = {
    all: noticeJobs.slice(0, 40),
    scheduled: scheduledNoticeJobs,
    sent: sentNoticeJobs,
    pending: pendingNoticeJobs,
    failed: failedNoticeJobs,
    draft: draftNoticeJobs
  }[jobFilter] ?? noticeJobs.slice(0, 40);
  const filterLabels = {
    all: "최근 공지",
    scheduled: "예약",
    sent: "발송 완료",
    pending: "확인 필요",
    failed: "실패",
    draft: "정리함"
  };
  const noticeRecipientModes = [
    { id: "selected", label: "선택", description: "체크한 학생에게 발송" },
    { id: "all", label: "전체", description: "선택 학생의 학부모+학생" },
    { id: "parent", label: "학부모", description: "선택 학생의 학부모" },
    { id: "student", label: "학생", description: "선택 학생에게만" }
  ];
  const activeStudents = useMemo(
    () => students.filter((student) => !isNoticeWithdrawnStudent(student)),
    [students]
  );
  const withdrawnStudents = useMemo(
    () => students.filter((student) => isNoticeWithdrawnStudent(student)),
    [students]
  );
  const classTemplateById = useMemo(
    () => new Map(classTemplates.map((template) => [template.classTemplateId, template])),
    [classTemplates]
  );
  const studentMatchesNoticeClass = (student) => {
    if (classFilter === noticeWithdrawnClassFilterId) return isNoticeWithdrawnStudent(student);
    if (classFilter === "all") return true;
    const template = classTemplateById.get(classFilter);
    return (
      student.defaultClassTemplateId === classFilter ||
      student.classTemplateId === classFilter ||
      student.classId === classFilter ||
      (template?.name && [student.className, student.defaultClassName].includes(template.name))
    );
  };
  const classFilteredStudents = useMemo(() => {
    const sourceStudents = classFilter === noticeWithdrawnClassFilterId ? withdrawnStudents : activeStudents;
    return sourceStudents.filter((student) => studentMatchesNoticeClass(student));
  }, [activeStudents, withdrawnStudents, classFilter, classTemplateById]);
  const searchableStudents = useMemo(() => classFilteredStudents.filter((student) => {
    const keyword = normalizeMessageText(searchText).toLowerCase();
    const matchesSearch =
      !keyword ||
      [student.name, student.schoolName, student.grade, student.studentPhone, student.parentPhone]
        .some((value) => String(value ?? "").toLowerCase().includes(keyword));
    return matchesSearch;
  }), [classFilteredStudents, searchText]);
  const selectedNoticeStudents = classFilteredStudents.filter((student) => selectedStudentIds.includes(student.studentId));
  const targetStudents = selectedNoticeStudents;
  const targetAudiences = noticeRecipientMode === "parent"
    ? ["parent"]
    : noticeRecipientMode === "student"
      ? ["student"]
      : ["parent", "student"];
  const visibleNoticeStudents = searchableStudents;
  const noticeAudienceLabels = {
    parent: "학부모",
    student: "학생"
  };
  const noticeRecipients = targetStudents.flatMap((student) =>
    targetAudiences
      .map((audience) => ({
        audience,
        phone: audience === "student" ? student.studentPhone : student.parentPhone,
        student
      }))
      .filter((recipient) => normalizePhoneNumber(recipient.phone))
  );
  const parentRecipientCount = noticeRecipients.filter((recipient) => recipient.audience === "parent").length;
  const studentRecipientCount = noticeRecipients.filter((recipient) => recipient.audience === "student").length;
  const noticeText = [noticeTitle.trim() ? `[${noticeTitle.trim()}]` : "", noticeBody.trim()].filter(Boolean).join("\n\n");
  const scheduledAt = scheduleDate && scheduleTime ? new Date(`${scheduleDate}T${scheduleTime}:00+09:00`).toISOString() : "";

  useEffect(() => {
    setSelectedStudentIds((current) => current.filter((studentId) => classFilteredStudents.some((student) => student.studentId === studentId)));
  }, [classFilteredStudents]);

  function studentName(studentId, payload) {
    return payload?.studentName || students.find((student) => student.studentId === studentId)?.name || "학생";
  }

  function toggleStudentSelection(studentId) {
    setSelectedStudentIds((current) =>
      current.includes(studentId)
        ? current.filter((item) => item !== studentId)
        : [...current, studentId]
    );
  }

  function selectAllVisibleStudents() {
    setSelectedStudentIds(searchableStudents.map((student) => student.studentId));
  }

  function clearSelectedStudents() {
    setSelectedStudentIds([]);
  }

  function getNoticeAudiencePhone(student, audience) {
    return audience === "student" ? student.studentPhone : student.parentPhone;
  }

  function applyNoticeTemplate(templateId) {
    const template = noticeMessageTemplates.find((item) => item.id === templateId);
    setNoticeTemplateId(templateId);
    if (!template) return;
    setNoticeTitle(template.title);
    setNoticeBody(template.body);
  }

  function selectJobFilter(nextFilter) {
    setJobFilter(nextFilter);
    window.setTimeout(() => {
      document.querySelector(".notificationQueuePanel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  function upsertLocalNoticeJob(job) {
    setLocalNoticeJobs((current) => [
      job,
      ...current.filter((item) => item.notificationJobId !== job.notificationJobId)
    ].slice(0, 80));
  }

  function buildNoticePayload(recipient, mode = "immediate") {
    const audienceLabel = recipient.audience === "student" ? "학생" : "학부모";
    return {
      academyName: academyBrandName,
      commentBodyOverride: noticeText,
      forceDryRun: false,
      lessonDate: today,
      lessonName: noticeTitle.trim() || `${audienceLabel} 공지`,
      message: noticeText,
      noticeAudience: recipient.audience,
      noticeBody,
      noticeTitle,
      osScheduled: mode === "scheduled",
      parentPhone: recipient.student.parentPhone,
      scheduledDate: mode === "scheduled" ? scheduledAt : "",
      sendMode: mode === "scheduled" ? "scheduled" : "immediate",
      studentId: recipient.student.studentId,
      studentName: recipient.student.name,
      studentPhone: recipient.student.studentPhone,
      target: recipient.audience
    };
  }

  function buildNoticeJob(recipient, mode = "scheduled") {
    const payload = buildNoticePayload(recipient, mode);
    const notificationType = recipient.audience === "student" ? "notice_student" : "notice_parent";
    return {
      notificationJobId: `notice_${Date.now()}_${recipient.student.studentId}_${recipient.audience}_${Math.random().toString(36).slice(2, 7)}`,
      notificationType,
      studentId: recipient.student.studentId,
      target: recipient.audience,
      recipient: recipient.phone,
      scheduledAt: mode === "scheduled" ? scheduledAt : "",
      payload,
      previewBody: noticeText,
      status: mode === "scheduled" ? "scheduled" : "draft",
      provider: "academy-os",
      error: "",
      createdAt: new Date().toISOString()
    };
  }

  async function persistNoticeJob(notificationJob) {
    await postJsonWithTimeout(
      "/api/notification-jobs",
      { notificationJob },
      15000,
      "발송 기록 저장 요청이 15초를 넘었습니다. 새로고침 후 기록 반영 여부를 확인해 주세요."
    );
  }

  function refreshNoticeJobsInBackground() {
    Promise.resolve(onRefresh?.()).catch((error) => {
      setDispatchMessage((current) => `${current || "처리는 완료됐습니다."} 발송 기록 새로고침 실패: ${error.message}`);
    });
  }

  async function sendNoticeNow() {
    if (!noticeText || noticeRecipients.length === 0 || isSendingNotice) return;
    setIsSendingNotice(true);
    setDispatchMessage(`공지 즉시 발송 중: 0/${noticeRecipients.length}건 요청 시작`);
    let sentCount = 0;
    let pendingCount = 0;
    let failedCount = 0;
    let recordFailedCount = 0;
    try {
      for (const [index, recipient] of noticeRecipients.entries()) {
        const notificationJob = buildNoticeJob(recipient, "immediate");
        const audienceLabel = recipient.audience === "student" ? "학생" : "학부모";
        setDispatchMessage(`공지 즉시 발송 중: ${index + 1}/${noticeRecipients.length}건 · ${recipient.student.name} ${audienceLabel}`);
        try {
          const result = await postJsonWithTimeout(
            "/api/notifications/comment-alimtalk",
            notificationJob.payload,
            45000,
            "알림톡 발송 요청이 45초를 넘었습니다. 실제 발송 여부는 발송 기록 또는 Solapi에서 확인해 주세요."
          );
          sentCount += 1;
          try {
            await persistNoticeJob({
              ...notificationJob,
              status: result.result?.dryRun ? "dry_run" : "sent",
              provider: result.provider ?? "solapi",
              result: result.result ?? null
            });
          } catch (recordError) {
            recordFailedCount += 1;
          }
        } catch (error) {
          const timedOut = isRequestTimeoutError(error);
          if (timedOut) pendingCount += 1;
          else failedCount += 1;
          try {
            await persistNoticeJob({
              ...notificationJob,
              status: timedOut ? "send_unconfirmed" : "failed",
              error: error.message
            });
          } catch (recordError) {
            recordFailedCount += 1;
          }
        }
      }
      setDispatchMessage(`공지 발송 처리 완료: 성공 ${sentCount}건${pendingCount ? `, 확인 필요 ${pendingCount}건` : ""}${failedCount ? `, 실패 ${failedCount}건` : ""}${recordFailedCount ? `, 기록 저장 실패 ${recordFailedCount}건` : ""}`);
      setJobFilter(pendingCount ? "pending" : failedCount ? "failed" : "sent");
      refreshNoticeJobsInBackground();
    } finally {
      setIsSendingNotice(false);
    }
  }

  async function scheduleNotice() {
    if (!noticeText || noticeRecipients.length === 0 || !scheduledAt || isSendingNotice) return;
    setIsSendingNotice(true);
    setDispatchMessage(`공지 예약 저장 중: 0/${noticeRecipients.length}건`);
    let savedCount = 0;
    let failedCount = 0;
    try {
      const jobs = noticeRecipients.map((recipient) => buildNoticeJob(recipient, "scheduled"));
      for (const [index, notificationJob] of jobs.entries()) {
        setDispatchMessage(`공지 예약 저장 중: ${index + 1}/${jobs.length}건`);
        try {
          await persistNoticeJob(notificationJob);
          upsertLocalNoticeJob(notificationJob);
          savedCount += 1;
        } catch (error) {
          upsertLocalNoticeJob({
            ...notificationJob,
            status: "failed",
            error: `예약 저장 실패: ${error.message}`,
            updatedAt: new Date().toISOString()
          });
          failedCount += 1;
        }
      }
      setDispatchMessage(`${formatKoreaTimeLabel(scheduledAt)} 공지 예약 저장 완료: 성공 ${savedCount}건${failedCount ? `, 실패 ${failedCount}건` : ""}`);
      setJobFilter(failedCount ? "failed" : "scheduled");
      refreshNoticeJobsInBackground();
    } finally {
      setIsSendingNotice(false);
    }
  }

  async function sendTestNotice() {
    if (!noticeText || isSendingNotice) return;
    setIsSendingNotice(true);
    setDispatchMessage("공지 테스트 발송을 요청하는 중입니다.");
    const fallbackStudent = noticeRecipients[0]?.student ?? searchableStudents[0] ?? students[0] ?? { name: "테스트학생", studentId: "test" };
    const testRecipient = {
      audience: noticeRecipientMode === "student" ? "student" : "parent",
      phone: notificationStatus?.testRecipient,
      student: fallbackStudent
    };
    try {
      await postJsonWithTimeout(
        "/api/notifications/comment-alimtalk",
        {
          ...buildNoticePayload(testRecipient),
          forceTestRecipient: true
        },
        30000,
        "테스트 발송 요청이 30초를 넘었습니다. 실제 수신 여부를 확인해 주세요."
      );
      setDispatchMessage(`테스트 번호(${notificationStatus?.testRecipient || "설정값"})로 공지 테스트를 요청했습니다.`);
    } catch (error) {
      setDispatchMessage(isRequestTimeoutError(error)
        ? `공지 테스트 확인 필요: ${error.message}`
        : `공지 테스트 실패: ${error.message}`);
    } finally {
      setIsSendingNotice(false);
    }
  }

  async function polishNoticeMessage() {
    if (!noticeBody.trim() || isPolishingNotice) return;
    setIsPolishingNotice(true);
    setDispatchMessage("");
    try {
      const response = await fetch(apiUrl("/api/ai/comment-polish"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aiProvider: commentAiProvider,
          aiModel: commentAiModel,
          aiPrompt: getAiPrompt(aiSettings, "noticeMessage"),
          audience: "parent",
          lessonName: noticeTitle.trim() || "알림관리 공지",
          lessonDate: today,
          rawText: noticeBody,
          studentName: "수신자",
          schoolName: "",
          grade: "",
          lessonMaterial: "",
          lessonContent: "",
          attendanceStatus: "",
          homeworkStatus: "",
          assignmentStatus: ""
        })
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "공지 AI 수정에 실패했습니다.");
      }
      setNoticeBody(result.polishedText ?? noticeBody);
      setDispatchMessage("공지 문구를 AI로 다듬었습니다.");
    } catch (error) {
      setDispatchMessage(`AI 수정 실패: ${error.message}`);
    } finally {
      setIsPolishingNotice(false);
    }
  }

  async function deleteNotificationJob(job) {
    if (!canDeleteNotificationJob(job) || deletingJobId) return;
    setDeletingJobId(job.notificationJobId);
    setDispatchMessage("");
    try {
      const response = await fetch(apiUrl(`/api/notification-jobs?id=${encodeURIComponent(job.notificationJobId)}`), {
        method: "DELETE"
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || `삭제 실패: ${response.status}`);
      }
      setDispatchMessage("발송하지 않은 공지 기록 1건을 삭제했습니다.");
      await onRefresh?.();
    } catch (error) {
      setDispatchMessage(`공지 기록 삭제 실패: ${error.message}`);
    } finally {
      setDeletingJobId("");
    }
  }

  async function cancelNotificationJob(job) {
    if (!canCancelNotificationJob(job) || deletingJobId) return;
    if (typeof window !== "undefined" && !window.confirm("이 예약 발송 1건을 취소할까요? 취소한 기록은 이력에 남습니다.")) return;
    const canceledAt = new Date().toISOString();
    const canceledJob = {
      ...job,
      status: "canceled",
      error: "",
      result: {
        ...(job.result && typeof job.result === "object" ? job.result : {}),
        canceledAt,
        canceledBy: "teacher"
      },
      updatedAt: canceledAt
    };
    setDeletingJobId(job.notificationJobId);
    setDispatchMessage("");
    try {
      await persistNoticeJob(canceledJob);
      upsertLocalNoticeJob(canceledJob);
      setDispatchMessage("공지 예약 1건을 취소했습니다.");
      setJobFilter("draft");
      refreshNoticeJobsInBackground();
    } catch (error) {
      setDispatchMessage(`공지 예약 취소 실패: ${error.message}`);
    } finally {
      setDeletingJobId("");
    }
  }

  return (
    <section className="notificationCenterPage">
      <div className="pageTop">
        <div>
          <h1>알림관리</h1>
          <p className="muted">수업일지 밖에서 필요한 연락을 한 화면에서 작성하고, 수신 범위만 선택해 발송합니다.</p>
        </div>
        <div className="pageActions">
          <button className="softButton" disabled={isNotificationJobsLoading} onClick={onRefresh} type="button">
            {isNotificationJobsLoading ? "기록 불러오는 중" : "기록 새로고침"}
          </button>
        </div>
      </div>
      {["loading", "failed"].includes(notificationJobsStatus?.state) ? (
        <div className={`${notificationJobsNoticeClass} notificationJobsStatusNotice`}>
          <span>{notificationJobsStatus.message}</span>
          {notificationJobsStatus.state === "failed" ? (
            <button className="softButton compact" onClick={onRefresh} type="button">다시 시도</button>
          ) : null}
        </div>
      ) : null}
      {dispatchMessage ? <p className="inlineNotice">{dispatchMessage}</p> : null}

      <section className="notificationPanel noticeComposerPanel">
        <div className="sectionHeader slim">
          <div>
            <p className="eyebrow">MESSAGE CENTER</p>
            <h2>개별 발송</h2>
          </div>
          <span className="countBadge">수신 {noticeRecipients.length}건</span>
        </div>

        <div className="noticeComposerGrid">
          <div className="noticeTargetPanel">
            <div className="noticeModeTabs compact">
              {noticeRecipientModes.map((mode) => (
                <button
                  className={noticeRecipientMode === mode.id ? "active" : ""}
                  key={mode.id}
                  onClick={() => setNoticeRecipientMode(mode.id)}
                  type="button"
                >
                  <strong>{mode.label}</strong>
                  <span>{mode.description}</span>
                </button>
              ))}
            </div>
            <div className="noticeFilterGrid">
              <label>
                반
                <select value={classFilter} onChange={(event) => setClassFilter(event.target.value)}>
                  <option value="all">전체 반</option>
                  {classTemplates.map((template) => (
                    <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                  ))}
                  <option value={noticeWithdrawnClassFilterId}>퇴원학생반 ({withdrawnStudents.length}명)</option>
                </select>
              </label>
              <label>
                학생 검색
                <input value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="이름, 학교, 전화번호" />
              </label>
            </div>

            <div className="noticeTargetSummary">
              <div>
                <span>대상 학생</span>
                <strong>{targetStudents.length}명</strong>
              </div>
              <div>
                <span>학부모</span>
                <strong>{parentRecipientCount}건</strong>
              </div>
              <div>
                <span>학생</span>
                <strong>{studentRecipientCount}건</strong>
              </div>
            </div>

            <div className="noticeStudentPicker">
              <div className="noticePickerActions noticeListHeader">
                <div>
                  <strong>학생 선택</strong>
                  <span>선택한 학생 {targetStudents.length}명 · 수신 {noticeRecipients.length}건</span>
                </div>
                <div>
                  <button className="softButton compact" onClick={selectAllVisibleStudents} type="button">보이는 학생 전체</button>
                  <button className="softButton compact subtle" onClick={clearSelectedStudents} type="button">선택 해제</button>
                </div>
              </div>
              {visibleNoticeStudents.length ? (
                visibleNoticeStudents.map((student) => {
                  const checked = selectedStudentIds.includes(student.studentId);
                  return (
                    <label className={checked ? "noticeStudentOption active" : "noticeStudentOption"} key={student.studentId}>
                      <input checked={checked} onChange={() => toggleStudentSelection(student.studentId)} type="checkbox" />
                      <span>
                        <strong>{student.name}</strong>
                        <small>
                          {[
                            student.grade,
                            student.schoolName,
                            classFilter === noticeWithdrawnClassFilterId
                              ? `퇴원${student.withdrawnAt ? ` ${String(student.withdrawnAt).slice(0, 10)}` : ""}`
                              : ""
                          ].filter(Boolean).join(" · ") || "기본 정보 없음"}
                        </small>
                      </span>
                      <span className="noticeRecipientBadges">
                        {targetAudiences.map((audience) => {
                          const phone = getNoticeAudiencePhone(student, audience);
                          const hasPhone = Boolean(normalizePhoneNumber(phone));
                          return (
                            <small className={hasPhone ? "available" : "missing"} key={audience}>
                              {noticeAudienceLabels[audience]} {hasPhone ? "등록" : "번호 없음"}
                            </small>
                          );
                        })}
                      </span>
                    </label>
                  );
                })
              ) : (
                <div className="noticeStudentEmpty">조건에 맞는 학생이 없습니다.</div>
              )}
            </div>
          </div>

          <div className="noticeWritePanel">
            <label>
              템플릿
              <select value={noticeTemplateId} onChange={(event) => applyNoticeTemplate(event.target.value)}>
                <option value="">직접 작성</option>
                {noticeMessageTemplates.map((template) => (
                  <option key={template.id} value={template.id}>{template.label}</option>
                ))}
              </select>
            </label>
            <label>
              제목
              <input value={noticeTitle} onChange={(event) => setNoticeTitle(event.target.value)} placeholder="예: 휴원 안내, 보강 안내" />
            </label>
            <label>
              본문
              <textarea value={noticeBody} onChange={(event) => setNoticeBody(event.target.value)} rows="10" placeholder="보낼 공지 내용을 입력하세요." />
            </label>
            <div className="noticeScheduleGrid">
              <label>
                예약일
                <input type="date" value={scheduleDate} onChange={(event) => setScheduleDate(event.target.value)} />
              </label>
              <label>
                예약시간
                <input type="time" value={scheduleTime} onChange={(event) => setScheduleTime(event.target.value)} />
              </label>
            </div>
            <div className="noticePreviewBox">
              <strong>미리보기</strong>
              <p>{noticeText || "제목과 본문을 입력하면 이곳에 발송 문구가 표시됩니다."}</p>
            </div>
            <div className="noticeSendActions">
              <button className="softButton" disabled={!noticeBody.trim() || isPolishingNotice} onClick={polishNoticeMessage} type="button">
                {isPolishingNotice ? "AI 수정 중" : "AI 수정"}
              </button>
              <button className="softButton" disabled={!noticeText || isSendingNotice} onClick={sendTestNotice} type="button">테스트 발송</button>
              <button className="softButton" disabled={!noticeText || !noticeRecipients.length || !scheduledAt || isSendingNotice} onClick={scheduleNotice} type="button">예약 발송</button>
              <button className="sendButton" disabled={!noticeText || !noticeRecipients.length || isSendingNotice} onClick={sendNoticeNow} type="button">
                {isSendingNotice ? "처리 중..." : "즉시 발송"}
              </button>
            </div>
            {dispatchMessage ? <p className="inlineNotice noticeDispatchMessage">{dispatchMessage}</p> : null}
          </div>
        </div>
      </section>

      <div className="notificationStatsGrid noticeStatsGrid">
        {[
          ["scheduled", "예약", scheduledNoticeJobs.length, "공지 예약 대기"],
          ["sent", "발송 완료", sentNoticeJobs.length, "공지 발송 완료"],
          ["pending", "확인 필요", pendingNoticeJobs.length, "응답 지연 공지"],
          ["failed", "실패", failedNoticeJobs.length, "재확인 필요"],
          ["draft", "정리함", draftNoticeJobs.length, "테스트/취소/초안"]
        ].map(([id, label, count, detail]) => (
          <button className={jobFilter === id ? "active" : ""} key={id} onClick={() => selectJobFilter(id)} type="button">
            <span>{label}</span>
            <strong>{count}건</strong>
            <small>{detail}</small>
          </button>
        ))}
      </div>

      <section className="notificationPanel notificationQueuePanel">
        <div className="sectionHeader slim">
          <div>
            <p className="eyebrow">NOTICE HISTORY</p>
            <h2>공지 발송 기록 · {filterLabels[jobFilter]}</h2>
          </div>
          <div className="notificationQueueActions">
            {jobFilter !== "all" ? (
              <button className="softButton compact" onClick={() => setJobFilter("all")} type="button">전체 보기</button>
            ) : null}
            <span className="countBadge">{filteredNoticeJobs.length}건</span>
          </div>
        </div>
        <div className="notificationTable noticeHistoryTable">
          <div className="notificationTableHead">
            <span>상태</span>
            <span>종류</span>
            <span>학생</span>
            <span>발송시각</span>
            <span>수신번호</span>
            <span>미리보기</span>
            <span>관리</span>
          </div>
          {filteredNoticeJobs.length === 0 ? (
            <p className="emptyState">공지 발송 기록이 없습니다.</p>
          ) : (
            filteredNoticeJobs.map((job) => (
              <article className="notificationTableRow" key={job.notificationJobId}>
                <span className={`statusPill status-${getNotificationJobStatusClass(job)}`}>{formatNotificationJobStatus(job) || getNotificationStatusLabel(job.status)}</span>
                <strong>{getNotificationJobLabel(job.notificationType)}</strong>
                <span>{studentName(job.studentId, job.payload)}</span>
                <span>{job.scheduledAt ? formatKoreaTimeLabel(job.scheduledAt) : job.createdAt ? formatKoreaTimeLabel(job.createdAt) : "-"}</span>
                <span>{job.recipient || "번호 없음"}</span>
                <p>
                  {job.error ? `오류: ${job.error}` : job.previewBody || job.payload?.message || "미리보기 없음"}
                </p>
                <span className="notificationJobActions">
                  {canCancelNotificationJob(job) ? (
                    <button
                      className="dangerSoftButton compact"
                      disabled={deletingJobId === job.notificationJobId}
                      onClick={() => cancelNotificationJob(job)}
                      type="button"
                    >
                      {deletingJobId === job.notificationJobId ? "취소 중" : "예약 취소"}
                    </button>
                  ) : null}
                  {canDeleteNotificationJob(job) ? (
                    <button
                      className="dangerSoftButton compact"
                      disabled={deletingJobId === job.notificationJobId}
                      onClick={() => deleteNotificationJob(job)}
                      type="button"
                    >
                      {deletingJobId === job.notificationJobId ? "삭제 중" : "삭제"}
                    </button>
                  ) : null}
                  {!canCancelNotificationJob(job) && !canDeleteNotificationJob(job) ? (
                    <small>보관</small>
                  ) : null}
                </span>
              </article>
            ))
          )}
        </div>
      </section>
    </section>
  );
}

function ExamAnalysisPipelineCenter({ examPrepRows = [] }) {
  const fileInputRef = useRef(null);
  const didAutoSelectExamPrepRef = useRef(Boolean(examPrepRows[0]?.examPrepId));
  const reviewDraftRunIdRef = useRef("");
  const reviewSeedDraftsRef = useRef({});
  const outputDraftRunIdRef = useRef("");
  const [analysisRuns, setAnalysisRuns] = useState([]);
  const [selectedRunId, setSelectedRunId] = useState("");
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [selectedExamPrepId, setSelectedExamPrepId] = useState(examPrepRows[0]?.examPrepId ?? "");
  const [selectedSchoolName, setSelectedSchoolName] = useState(normalizeExamAnalysisSchoolName(examPrepRows[0]?.schoolName) || examAnalysisSchools[0]);
  const [selectedGrade, setSelectedGrade] = useState(normalizeExamAnalysisGrade(examPrepRows[0]?.grade) || examAnalysisGrades[0]);
  const [selectedExamCycle, setSelectedExamCycle] = useState(normalizeExamAnalysisExamCycle(examPrepRows[0]?.examCycle || examPrepRows[0]?.examTerm) || examAnalysisExamCycles[0]);
  const [draft, setDraft] = useState(() => {
    const row = examPrepRows[0] ?? {};
    const schoolName = normalizeExamAnalysisSchoolName(row.schoolName) || examAnalysisSchools[0];
    const grade = normalizeExamAnalysisGrade(row.grade) || examAnalysisGrades[0];
    const examCycle = normalizeExamAnalysisExamCycle(row.examCycle || row.examTerm) || examAnalysisExamCycles[0];
    return {
      title: buildExamAnalysisTitle({ schoolName, grade, examCycle }),
      schoolName,
      grade,
      subject: getDefaultExamAnalysisSubject(row),
      examTerm: row.examTerm ?? "",
      examCycle
    };
  });
  const [loadStatus, setLoadStatus] = useState({ state: "idle", message: "" });
  const [saveStatus, setSaveStatus] = useState({ state: "idle", message: "" });
  const [uploadStatus, setUploadStatus] = useState({ state: "idle", message: "" });
  const [deleteStatus, setDeleteStatus] = useState({ state: "idle", message: "" });
  const [deletingRunId, setDeletingRunId] = useState("");
  const [sourceDeleteStatus, setSourceDeleteStatus] = useState({ state: "idle", message: "" });
  const [deletingSourceId, setDeletingSourceId] = useState("");
  const [extractStatus, setExtractStatus] = useState({ state: "idle", message: "" });
  const [extractingSourceId, setExtractingSourceId] = useState("");
  const [visionStatus, setVisionStatus] = useState({ state: "idle", message: "" });
  const [checkingSourceId, setCheckingSourceId] = useState("");
  const [confirmStatus, setConfirmStatus] = useState({ state: "idle", message: "" });
  const [questionCountDraft, setQuestionCountDraft] = useState("");
  const [isConfirmingQuestionCount, setIsConfirmingQuestionCount] = useState(false);
  const [boundaryStatus, setBoundaryStatus] = useState({ state: "idle", message: "" });
  const [isDetectingBoundaries, setIsDetectingBoundaries] = useState(false);
  const [rowFillStatus, setRowFillStatus] = useState({ state: "idle", message: "" });
  const [isFillingRows, setIsFillingRows] = useState(false);
  const [rowRefineStatus, setRowRefineStatus] = useState({ state: "idle", message: "" });
  const [isRefiningRows, setIsRefiningRows] = useState(false);
  const [reviewStatus, setReviewStatus] = useState({ state: "idle", message: "" });
  const [reviewDrafts, setReviewDrafts] = useState({});
  const [isSavingReviews, setIsSavingReviews] = useState(false);
  const [editingSsenQuestionNumber, setEditingSsenQuestionNumber] = useState("");
  const [isPdfDropActive, setIsPdfDropActive] = useState(false);
  const [ssenCatalog, setSsenCatalog] = useState(() => createEmptyExamAnalysisSsenCatalog());
  const [ssenCatalogStatus, setSsenCatalogStatus] = useState({ state: "idle", message: "" });
  const [outputDrafts, setOutputDrafts] = useState(() => createEmptyExamAnalysisOutputDrafts());
  const [outputStatus, setOutputStatus] = useState({ state: "idle", message: "" });
  const [isSavingOutputDrafts, setIsSavingOutputDrafts] = useState(false);
  const [generatingOutputType, setGeneratingOutputType] = useState("");
  const [exportingOutputType, setExportingOutputType] = useState("");

  const selectedExamPrepRow = useMemo(
    () => examPrepRows.find((row) => row.examPrepId === selectedExamPrepId) ?? null,
    [examPrepRows, selectedExamPrepId]
  );
  const selectedDetailRun = selectedDetail?.analysisRun?.analysisRunId === selectedRunId ? selectedDetail.analysisRun : null;
  const activeRun = selectedDetailRun ?? analysisRuns.find((run) => run.analysisRunId === selectedRunId) ?? null;
  const sourceFiles = selectedDetailRun ? selectedDetail?.sources ?? [] : [];
  const questionRows = selectedDetailRun ? selectedDetail?.questions ?? [] : [];
  const events = selectedDetailRun ? selectedDetail?.events ?? [] : [];
  const ssenCatalogQuery = useMemo(() => {
    const scope = selectedExamPrepRow?.scope ?? "";
    const subject = getDefaultExamAnalysisSubject({
      subject: draft.subject || activeRun?.subject || selectedExamPrepRow?.subject || "",
      scope,
      title: draft.title || activeRun?.title || ""
    });
    return {
      analysisRunId: activeRun?.analysisRunId || "",
      subject,
      scope
    };
  }, [activeRun?.analysisRunId, activeRun?.subject, activeRun?.title, draft.subject, draft.title, selectedExamPrepRow?.scope, selectedExamPrepRow?.subject]);
  const questionCountCandidate = useMemo(
    () => getExamAnalysisQuestionCountCandidate(activeRun, sourceFiles),
    [activeRun, sourceFiles]
  );
  const boundaryDetection = activeRun?.auditSummary?.boundaryDetection ?? null;
  const rowFill = activeRun?.auditSummary?.rowFill ?? null;
  const rowRefine = activeRun?.auditSummary?.rowRefine ?? null;
  const teacherReview = activeRun?.auditSummary?.teacherReview ?? null;
  const previewQuestionRows = useMemo(
    () => applyExamAnalysisReviewDraftsToQuestions(questionRows, reviewDrafts, ssenCatalog),
    [questionRows, reviewDrafts, ssenCatalog]
  );
  const finalPreviewModel = useMemo(
    () => createExamAnalysisFinalPreviewModel({
      analysisRun: activeRun ?? {},
      questions: previewQuestionRows,
      sourceFiles
    }),
    [activeRun, previewQuestionRows, sourceFiles]
  );
  const reviewSeedKey = useMemo(
    () => questionRows
      .map((question) => [
        question.questionNumber,
        question.rowStatus,
        question.teacherEditedAt,
        question.confirmedAt,
        question.updatedAt
      ].join(":"))
      .join("|"),
    [questionRows]
  );
  const schoolCards = useMemo(() => {
    const customSchools = [...new Set([
      ...examPrepRows.map((row) => normalizeExamAnalysisSchoolName(row.schoolName)),
      ...analysisRuns.map((run) => normalizeExamAnalysisSchoolName(run.schoolName))
    ].filter(Boolean))]
      .filter((schoolName) => !examAnalysisSchools.includes(schoolName))
      .sort((a, b) => a.localeCompare(b, "ko"));
    return [...examAnalysisSchools, ...customSchools].map((schoolName) => ({
      name: schoolName,
      gradeCount: examAnalysisGrades.length,
      examCount: examAnalysisExamCycles.length,
      runCount: analysisRuns.filter((run) => normalizeExamAnalysisSchoolName(run.schoolName) === schoolName).length
    }));
  }, [analysisRuns, examPrepRows]);
  const gradeCards = useMemo(() => {
    return examAnalysisGrades.map((grade) => ({
      name: grade,
      examCount: examAnalysisExamCycles.length,
      runCount: analysisRuns.filter((run) => (
        normalizeExamAnalysisSchoolName(run.schoolName) === selectedSchoolName
        && normalizeExamAnalysisGrade(run.grade) === grade
      )).length
    }));
  }, [analysisRuns, selectedSchoolName]);
  const examCycleCards = useMemo(() => examAnalysisExamCycles.map((examCycle) => ({
    name: examCycle,
    runCount: analysisRuns.filter((run) => (
      normalizeExamAnalysisSchoolName(run.schoolName) === selectedSchoolName
      && normalizeExamAnalysisGrade(run.grade) === selectedGrade
      && normalizeExamAnalysisExamCycle(run.examCycle || run.examTerm) === examCycle
    )).length
  })), [analysisRuns, selectedExamCycle, selectedGrade, selectedSchoolName]);
  const scopedRuns = useMemo(
    () => analysisRuns.filter((run) => (
      normalizeExamAnalysisSchoolName(run.schoolName) === selectedSchoolName
      && normalizeExamAnalysisGrade(run.grade) === selectedGrade
      && normalizeExamAnalysisExamCycle(run.examCycle || run.examTerm) === selectedExamCycle
    )),
    [analysisRuns, selectedExamCycle, selectedGrade, selectedSchoolName]
  );

  useEffect(() => {
    if (!ssenCatalogQuery.analysisRunId && !ssenCatalogQuery.subject && !ssenCatalogQuery.scope) {
      setSsenCatalog(createEmptyExamAnalysisSsenCatalog());
      setSsenCatalogStatus({ state: "idle", message: "" });
      return;
    }
    let canceled = false;
    setSsenCatalogStatus({ state: "saving", message: "시험분석 · 쎈 기준표 조회 중" });
    fetchExamAnalysisSsenTypesRequest(ssenCatalogQuery)
      .then((result) => {
        if (canceled) return;
        setSsenCatalog({
          subject: result.subject || "",
          scope: result.scope || "",
          status: result.status || "",
          subjectTypeCount: result.subjectTypeCount || 0,
          scopeMatchedCount: result.scopeMatchedCount || 0,
          types: Array.isArray(result.types) ? result.types : [],
          units: Array.isArray(result.units) ? result.units : []
        });
        const count = result.scopeMatchedCount || result.subjectTypeCount || 0;
        setSsenCatalogStatus({
          state: result.status === "subject_missing" ? "failed" : "success",
          message: result.status === "scope_not_matched"
            ? `시험분석 · 쎈 기준표 과목 전체 · ${count}개`
            : result.status === "subject_missing"
              ? "시험분석 · 쎈 기준표 과목 확인 필요"
              : `시험분석 · 쎈 기준표 준비 · ${count}개`
        });
      })
      .catch((error) => {
        if (canceled) return;
        setSsenCatalog(createEmptyExamAnalysisSsenCatalog());
        setSsenCatalogStatus({ state: "failed", message: `시험분석 · 쎈 기준표 조회 실패 · ${error.message}` });
      });
    return () => {
      canceled = true;
    };
  }, [ssenCatalogQuery]);

  useEffect(() => {
    if (!didAutoSelectExamPrepRef.current && !selectedExamPrepId && examPrepRows[0]?.examPrepId) {
      didAutoSelectExamPrepRef.current = true;
      setSelectedExamPrepId(examPrepRows[0].examPrepId);
      applyExamPrepRow(examPrepRows[0]);
    }
  }, [examPrepRows, selectedExamPrepId]);

  useEffect(() => {
    if (!didAutoSelectExamPrepRef.current && !selectedSchoolName && !draft.schoolName && schoolCards[0]?.name) {
      didAutoSelectExamPrepRef.current = true;
      setSelectedSchoolName(schoolCards[0].name);
      setDraft((current) => ({
        ...current,
        schoolName: schoolCards[0].name,
        grade: selectedGrade,
        examCycle: selectedExamCycle,
        title: buildExamAnalysisTitle({ schoolName: schoolCards[0].name, grade: selectedGrade, examCycle: selectedExamCycle })
      }));
    }
  }, [draft.schoolName, schoolCards, selectedExamCycle, selectedGrade, selectedSchoolName]);

  useEffect(() => {
    loadRuns();
  }, []);

  useEffect(() => {
    if (!selectedRunId) {
      setSelectedDetail(null);
      return;
    }
    loadRunDetail(selectedRunId);
  }, [selectedRunId]);

  useEffect(() => {
    const nextCount = Number(activeRun?.confirmedQuestionCount || questionCountCandidate.count || 0);
    setQuestionCountDraft(nextCount ? String(nextCount) : "");
  }, [activeRun?.analysisRunId, activeRun?.confirmedQuestionCount, questionCountCandidate.count]);

  useEffect(() => {
    const runId = activeRun?.analysisRunId || "";
    if (!runId || !questionRows.length) {
      reviewDraftRunIdRef.current = runId;
      reviewSeedDraftsRef.current = {};
      setEditingSsenQuestionNumber("");
      setReviewDrafts({});
      return;
    }
    const seededDrafts = buildExamAnalysisReviewDrafts(questionRows);
    if (reviewDraftRunIdRef.current !== runId) {
      reviewDraftRunIdRef.current = runId;
      reviewSeedDraftsRef.current = seededDrafts;
      setEditingSsenQuestionNumber("");
      setReviewDrafts(seededDrafts);
      return;
    }
    const previousSeedDrafts = reviewSeedDraftsRef.current;
    setReviewDrafts((current) => {
      return mergeExamAnalysisReviewDraftsFromSeed(current, previousSeedDrafts, seededDrafts);
    });
    reviewSeedDraftsRef.current = seededDrafts;
  }, [activeRun?.analysisRunId, questionRows.length, reviewSeedKey]);

  useEffect(() => {
    const runId = activeRun?.analysisRunId || "";
    const nextDrafts = getExamAnalysisOutputDraftsFromRun(activeRun);
    const shouldPreserveLocalDraft = Boolean(runId)
      && outputDraftRunIdRef.current === runId
      && outputStatus.state === "dirty";
    setOutputDrafts((current) => (
      shouldPreserveLocalDraft
        ? mergeExamAnalysisOutputDraftsPreservingLocalEdits(nextDrafts, current)
        : nextDrafts
    ));
    if (outputDraftRunIdRef.current !== runId) {
      outputDraftRunIdRef.current = runId;
      setOutputStatus({ state: "idle", message: "" });
    }
  }, [activeRun?.analysisRunId, activeRun?.auditSummary?.outputDrafts]);

  function applyExamPrepRow(row) {
    if (!row) return;
    const schoolName = normalizeExamAnalysisSchoolName(row.schoolName) || selectedSchoolName;
    const grade = normalizeExamAnalysisGrade(row.grade) || selectedGrade;
    const examCycle = normalizeExamAnalysisExamCycle(row.examCycle || row.examTerm) || selectedExamCycle;
    setSelectedSchoolName(schoolName);
    setSelectedGrade(grade);
    setSelectedExamCycle(examCycle);
    setDraft({
      title: buildExamAnalysisTitle({ schoolName, grade, examCycle }),
      schoolName,
      grade,
      subject: getDefaultExamAnalysisSubject(row),
      examTerm: row.examTerm ?? "",
      examCycle
    });
  }

  function applyRunToDraft(run) {
    if (!run) return;
    const schoolName = normalizeExamAnalysisSchoolName(run.schoolName) || selectedSchoolName;
    const grade = normalizeExamAnalysisGrade(run.grade) || selectedGrade;
    const examCycle = normalizeExamAnalysisExamCycle(run.examCycle || run.examTerm) || selectedExamCycle;
    didAutoSelectExamPrepRef.current = true;
    setSelectedExamPrepId(run.examPrepId || "");
    setSelectedSchoolName(schoolName);
    setSelectedGrade(grade);
    setSelectedExamCycle(examCycle);
    setDraft({
      title: run.title || buildExamAnalysisTitle({ schoolName, grade, examCycle }),
      schoolName,
      grade,
      subject: getDefaultExamAnalysisSubject(run),
      examTerm: run.examTerm ?? "",
      examCycle
    });
  }

  function getFirstExamPrepRow(schoolName = selectedSchoolName, grade = selectedGrade, examCycle = selectedExamCycle) {
    return examPrepRows.find((row) => (
      normalizeExamAnalysisSchoolName(row.schoolName) === schoolName
      && normalizeExamAnalysisGrade(row.grade) === grade
      && normalizeExamAnalysisExamCycle(row.examCycle || row.examTerm) === examCycle
    )) ?? null;
  }

  function selectSchoolCard(school) {
    const nextSchoolName = school?.name || examAnalysisSchools[0];
    const nextGrade = selectedGrade || examAnalysisGrades[0];
    const nextExamCycle = selectedExamCycle || examAnalysisExamCycles[0];
    const row = getFirstExamPrepRow(nextSchoolName, nextGrade, nextExamCycle);
    setSelectedRunId("");
    setSelectedDetail(null);
    setSelectedSchoolName(nextSchoolName);
    setSelectedGrade(nextGrade);
    setSelectedExamCycle(nextExamCycle);
    setSelectedExamPrepId(row?.examPrepId || "");
    if (row) {
      applyExamPrepRow(row);
      return;
    }
    setDraft((current) => ({
      ...current,
      title: buildExamAnalysisTitle({ schoolName: nextSchoolName, grade: nextGrade, examCycle: nextExamCycle }),
      schoolName: nextSchoolName,
      grade: nextGrade,
      examCycle: nextExamCycle
    }));
  }

  function selectGradeCard(grade) {
    const nextGrade = grade?.name || examAnalysisGrades[0];
    const row = getFirstExamPrepRow(selectedSchoolName, nextGrade, selectedExamCycle);
    setSelectedRunId("");
    setSelectedDetail(null);
    setSelectedGrade(nextGrade);
    setSelectedExamPrepId(row?.examPrepId || "");
    if (row) {
      applyExamPrepRow(row);
      return;
    }
    setDraft((current) => ({
      ...current,
      title: buildExamAnalysisTitle({ schoolName: selectedSchoolName || current.schoolName, grade: nextGrade, examCycle: selectedExamCycle || current.examCycle }),
      schoolName: selectedSchoolName || current.schoolName,
      grade: nextGrade,
      examCycle: selectedExamCycle || current.examCycle
    }));
  }

  function selectExamCycleCard(examCycle) {
    const nextExamCycle = examCycle?.name || examAnalysisExamCycles[0];
    const row = getFirstExamPrepRow(selectedSchoolName, selectedGrade, nextExamCycle);
    setSelectedRunId("");
    setSelectedDetail(null);
    setSelectedExamCycle(nextExamCycle);
    setSelectedExamPrepId(row?.examPrepId || "");
    if (row) {
      applyExamPrepRow(row);
      return;
    }
    setDraft((current) => ({
      ...current,
      title: buildExamAnalysisTitle({ schoolName: selectedSchoolName || current.schoolName, grade: selectedGrade || current.grade, examCycle: nextExamCycle }),
      schoolName: selectedSchoolName || current.schoolName,
      grade: selectedGrade || current.grade,
      examCycle: nextExamCycle
    }));
  }

  function buildRunPayload() {
    return {
      analysisRunId: selectedRunId || undefined,
      examPrepId: selectedExamPrepId || "",
      title: draft.title.trim() || "새 시험분석",
      schoolName: draft.schoolName.trim(),
      grade: draft.grade.trim(),
      subject: draft.subject.trim() || defaultExamAnalysisSubject,
      examTerm: draft.examTerm.trim(),
      examCycle: draft.examCycle.trim()
    };
  }

  async function loadRuns(nextSelectedRunId) {
    setLoadStatus({ state: "loading", message: "시험분석 · 불러오는 중" });
    try {
      const result = await getJsonWithTimeout("/api/exam-analysis-runs", 12000, "시험분석 목록 조회가 지연되고 있습니다.");
      const runs = result.analysisRuns ?? [];
      setAnalysisRuns(runs);
      const nextId = nextSelectedRunId !== undefined ? nextSelectedRunId : selectedRunId || runs[0]?.analysisRunId || "";
      setSelectedRunId(nextId);
      setLoadStatus({ state: "success", message: "시험분석 · 불러오기 완료" });
    } catch (error) {
      setLoadStatus({ state: "failed", message: `시험분석 · 불러오기 실패 · ${error.message}` });
    }
  }

  async function loadRunDetail(analysisRunId) {
    setLoadStatus({ state: "loading", message: "시험분석 상세 · 불러오는 중" });
    try {
      const result = await getJsonWithTimeout(
        `/api/exam-analysis-runs?id=${encodeURIComponent(analysisRunId)}`,
        12000,
        "시험분석 상세 조회가 지연되고 있습니다."
      );
      setSelectedDetail(result);
      applyRunToDraft(result.analysisRun);
      setLoadStatus({ state: "success", message: "시험분석 상세 · 불러오기 완료" });
    } catch (error) {
      setLoadStatus({ state: "failed", message: `시험분석 상세 · 불러오기 실패 · ${error.message}` });
    }
  }

  async function saveRun() {
    setSaveStatus({ state: "saving", message: "시험분석 · 저장 중" });
    try {
      const result = await postJson("/api/exam-analysis-runs", { analysisRun: buildRunPayload() });
      const savedRun = result.analysisRun;
      setSaveStatus({ state: "success", message: "시험분석 · 저장 완료" });
      if (savedRun?.analysisRunId) {
        await loadRuns(savedRun.analysisRunId);
      }
    } catch (error) {
      setSaveStatus({ state: "failed", message: `시험분석 · 저장 실패 · ${error.message}` });
    }
  }

  async function deleteSelectedAnalysisRun() {
    const targetRun = activeRun;
    if (!targetRun?.analysisRunId) return;
    const confirmMessage = `${getExamAnalysisRunTitle(targetRun)} 분석과 연결된 PDF 원본을 삭제할까요?`;
    if (!window.confirm(confirmMessage)) return;
    setDeletingRunId(targetRun.analysisRunId);
    setDeleteStatus({ state: "saving", message: "시험분석 · 삭제 중" });
    try {
      await deleteExamAnalysisRunRequest(targetRun.analysisRunId);
      setAnalysisRuns((current) => current.filter((run) => run.analysisRunId !== targetRun.analysisRunId));
      setSelectedRunId("");
      setSelectedDetail(null);
      setDeleteStatus({ state: "success", message: "시험분석 · 삭제 완료" });
      await loadRuns("");
    } catch (error) {
      setDeleteStatus({ state: "failed", message: `시험분석 · 삭제 실패 · ${error.message}` });
    } finally {
      setDeletingRunId("");
    }
  }

  async function uploadPdf(file) {
    if (!file) return;
    const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
    if (!isPdf) {
      setUploadStatus({ state: "failed", message: "시험분석 PDF · PDF 파일만 업로드할 수 있습니다." });
      return;
    }

    setUploadStatus({ state: "saving", message: "시험분석 PDF · 업로드 중" });
    try {
      const dataUrl = await readFileAsDataUrl(file);
      const result = await postJsonWithTimeout(
        "/api/exam-analysis-source-files",
        {
          ...buildRunPayload(),
          analysisRunId: selectedRunId || undefined,
          analysisRun: buildRunPayload(),
          dataUrl,
          fileName: file.name,
          fileType: file.type
        },
        90000,
        "시험분석 PDF 업로드가 지연되고 있습니다."
      );
      const nextRunId = result.analysisRun?.analysisRunId || selectedRunId;
      setUploadStatus({ state: "success", message: "시험분석 PDF · 업로드 완료" });
      if (nextRunId) {
        await loadRuns(nextRunId);
        await loadRunDetail(nextRunId);
      }
    } catch (error) {
      setUploadStatus({ state: "failed", message: `시험분석 PDF · 업로드 실패 · ${error.message}` });
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function deleteSourceFile(sourceFile) {
    if (!sourceFile?.sourceId) return;
    const isLastSource = sourceFiles.length <= 1;
    const confirmMessage = isLastSource
      ? `${sourceFile.originalFileName || "PDF 원본"} 파일을 삭제할까요?\n마지막 PDF 원본입니다. 문항 행과 검수 저장본은 유지되지만 이후 PDF 확인/AI 실행에는 원본이 필요합니다.`
      : `${sourceFile.originalFileName || "PDF 원본"} 파일 1건을 삭제할까요?\n문항 행과 검수 저장본은 유지됩니다.`;
    if (!window.confirm(confirmMessage)) return;
    setDeletingSourceId(sourceFile.sourceId);
    setSourceDeleteStatus({ state: "saving", message: "시험분석 PDF · 삭제 중" });
    try {
      await deleteExamAnalysisSourceRequest(sourceFile.sourceId);
      setSourceDeleteStatus({ state: "success", message: "시험분석 PDF · 삭제 완료" });
      if (activeRun?.analysisRunId) {
        await loadRuns(activeRun.analysisRunId);
        await loadRunDetail(activeRun.analysisRunId);
      } else {
        await loadRuns(selectedRunId);
      }
    } catch (error) {
      setSourceDeleteStatus({ state: "failed", message: `시험분석 PDF · 삭제 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setDeletingSourceId("");
    }
  }

  function handlePdfDragEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  function handlePdfDragEnter(event) {
    handlePdfDragEvent(event);
    setIsPdfDropActive(true);
  }

  function handlePdfDragLeave(event) {
    handlePdfDragEvent(event);
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPdfDropActive(false);
    }
  }

  async function handlePdfDrop(event) {
    handlePdfDragEvent(event);
    setIsPdfDropActive(false);
    const file = [...(event.dataTransfer?.files ?? [])].find((item) => (
      item.type === "application/pdf" || /\.pdf$/i.test(item.name)
    ));
    if (!file) {
      setUploadStatus({ state: "failed", message: "시험분석 PDF · PDF 파일만 드롭할 수 있습니다." });
      return;
    }
    await uploadPdf(file);
  }

  async function extractSourceText(sourceFile) {
    if (!sourceFile?.sourceId) return;
    setExtractingSourceId(sourceFile.sourceId);
    setExtractStatus({ state: "saving", message: "시험분석 PDF · 텍스트 추출 중" });
    try {
      const result = await extractExamAnalysisSourceRequest(sourceFile.sourceId);
      const textBytes = result.extraction?.textBytes ?? result.sourceFile?.extractedText?.length ?? 0;
      setExtractStatus({
        state: "success",
        message: `시험분석 PDF · 텍스트 추출 완료 · ${result.sourceFile?.pageCount || result.extraction?.pageCount || 0}쪽 · ${formatBytes(textBytes)}`
      });
      if (result.analysisRun?.analysisRunId) {
        await loadRuns(result.analysisRun.analysisRunId);
        await loadRunDetail(result.analysisRun.analysisRunId);
      } else if (selectedRunId) {
        await loadRunDetail(selectedRunId);
      }
    } catch (error) {
      setExtractStatus({ state: "failed", message: `시험분석 PDF · 텍스트 추출 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setExtractingSourceId("");
    }
  }

  async function verifySourceWithAi(sourceFile) {
    if (!sourceFile?.sourceId) return;
    setCheckingSourceId(sourceFile.sourceId);
    setVisionStatus({ state: "saving", message: "시험분석 PDF · AI 검증 중" });
    try {
      const result = await verifyExamAnalysisSourceWithAiRequest(sourceFile.sourceId);
      const questionCount = result.visionCheck?.questionCountCandidate || result.visionCheck?.questionNumberCandidates?.length || 0;
      const providerLabel = result.visionCheck?.provider === "anthropic" ? "Claude" : result.visionCheck?.provider === "openai" ? "OpenAI" : "AI";
      setVisionStatus({
        state: "success",
        message: `시험분석 PDF · ${providerLabel} 검증 완료 · ${result.visionCheck?.pageCount || 0}쪽 · 문항 후보 ${questionCount}개`
      });
      if (result.analysisRun?.analysisRunId) {
        await loadRuns(result.analysisRun.analysisRunId);
        await loadRunDetail(result.analysisRun.analysisRunId);
      } else if (selectedRunId) {
        await loadRunDetail(selectedRunId);
      }
    } catch (error) {
      setVisionStatus({ state: "failed", message: `시험분석 PDF · AI 검증 실패 · ${error.message}` });
    } finally {
      setCheckingSourceId("");
    }
  }

  async function confirmQuestionCount() {
    if (!activeRun?.analysisRunId) {
      setConfirmStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    const questionCount = Number(questionCountDraft);
    if (!Number.isInteger(questionCount) || questionCount < 1 || questionCount > 200) {
      setConfirmStatus({ state: "failed", message: "시험분석 · 문항 수는 1~200 사이의 정수로 입력해 주세요." });
      return;
    }

    setIsConfirmingQuestionCount(true);
    setConfirmStatus({ state: "saving", message: "시험분석 · 문항 수 확정 중" });
    try {
      const result = await confirmExamAnalysisQuestionCountRequest({
        analysisRunId: activeRun.analysisRunId,
        questionCount,
        detectedQuestionConfidence: questionCountCandidate.confidence,
        detectedQuestionEvidence: questionCountCandidate.detectedQuestionEvidence,
        missingQuestionNumbers: questionCountCandidate.missingQuestionNumbers,
        confirmedBy: "teacher"
      });
      const rowCount = result.questions?.length || questionCount;
      setSelectedDetail(result);
      setConfirmStatus({
        state: "success",
        message: `시험분석 · 문항 수 확정 완료 · ${questionCount}문항 · ${rowCount}행`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setConfirmStatus({ state: "failed", message: `시험분석 · 문항 수 확정 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsConfirmingQuestionCount(false);
    }
  }

  async function detectQuestionBoundaries() {
    if (!activeRun?.analysisRunId) {
      setBoundaryStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    if (!questionRows.length) {
      setBoundaryStatus({ state: "failed", message: "시험분석 · 문항 수를 먼저 확정해 주세요." });
      return;
    }
    const sourceFile = sourceFiles[0];
    if (!sourceFile?.sourceId) {
      setBoundaryStatus({ state: "failed", message: "시험분석 · PDF 원본이 필요합니다." });
      return;
    }

    setIsDetectingBoundaries(true);
    setBoundaryStatus({ state: "saving", message: "시험분석 · 문항 경계 탐지 중" });
    try {
      const result = await detectExamAnalysisQuestionBoundariesRequest({
        analysisRunId: activeRun.analysisRunId,
        sourceId: sourceFile.sourceId
      });
      const detectedCount = result.boundaryDetection?.detectedCount || result.boundaryResult?.detectedCount || 0;
      const totalCount = result.boundaryDetection?.totalQuestionCount || questionRows.length;
      setSelectedDetail(result);
      setBoundaryStatus({
        state: "success",
        message: `시험분석 · 문항 경계 탐지 완료 · ${detectedCount}/${totalCount}개`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setBoundaryStatus({ state: "failed", message: `시험분석 · 문항 경계 탐지 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsDetectingBoundaries(false);
    }
  }

  async function fillQuestionRowsWithAi() {
    if (!activeRun?.analysisRunId) {
      setRowFillStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    if (!questionRows.length) {
      setRowFillStatus({ state: "failed", message: "시험분석 · 문항 수를 먼저 확정해 주세요." });
      return;
    }
    if (!boundaryDetectedCount) {
      setRowFillStatus({ state: "failed", message: "시험분석 · 문항 경계를 먼저 탐지해 주세요." });
      return;
    }
    const sourceFile = sourceFiles[0];
    if (!sourceFile?.sourceId) {
      setRowFillStatus({ state: "failed", message: "시험분석 · PDF 원본이 필요합니다." });
      return;
    }

    setIsFillingRows(true);
    setRowFillStatus({ state: "saving", message: "시험분석 · AI 행 채움 중" });
    try {
      const result = await fillExamAnalysisQuestionRowsRequest({
        analysisRunId: activeRun.analysisRunId,
        sourceId: sourceFile.sourceId
      });
      const filledCount = result.rowFill?.filledCount || result.questions?.filter((question) => question.rowStatus === "ai_filled").length || 0;
      const totalCount = result.rowFill?.totalQuestionCount || questionRows.length;
      setSelectedDetail(result);
      setRowFillStatus({
        state: "success",
        message: `시험분석 · AI 행 채움 완료 · ${filledCount}/${totalCount}개`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setRowFillStatus({ state: "failed", message: `시험분석 · AI 행 채움 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsFillingRows(false);
    }
  }

  function getSsenTypeByCode(typeCode = "") {
    return (ssenCatalog.types ?? []).find((item) => item.typeCode === typeCode) ?? null;
  }

  function getSsenUnitByKey(unitKey = "") {
    return (ssenCatalog.units ?? []).find((item) => item.key === unitKey) ?? null;
  }

  function getReviewDraftUnitKey(draftValue = {}) {
    if (draftValue.unitKey && getSsenUnitByKey(draftValue.unitKey)) return draftValue.unitKey;
    const mainType = getSsenTypeByCode(draftValue.mainTypeCode);
    if (mainType) return createExamAnalysisSsenUnitKey(mainType);
    const unit = (ssenCatalog.units ?? []).find((item) => item.unitName === draftValue.unitName);
    return unit?.key ?? "";
  }

  function getSsenTypesForReviewDraft(draftValue = {}) {
    const unitKey = getReviewDraftUnitKey(draftValue);
    const types = Array.isArray(ssenCatalog.types) ? ssenCatalog.types : [];
    if (!unitKey) return types;
    const unit = getSsenUnitByKey(unitKey);
    if (!unit) return types;
    return types.filter((item) => createExamAnalysisSsenUnitKey(item) === unit.key);
  }

  function selectReviewSsenUnit(questionNumber, unitKey) {
    const unit = getSsenUnitByKey(unitKey);
    updateReviewDraft(questionNumber, {
      unitKey: unit?.key ?? "",
      partName: unit?.partName ?? "",
      unitNo: unit?.unitNo ?? "",
      unitName: unit?.unitName ?? "",
      mainType: "",
      mainTypeCode: "",
      subTypesText: "",
      subTypeCodes: [],
      ssenMeta: { source: "ssen_type_index", matchStatus: "unit_selected", mainType: {}, subTypes: [] }
    });
  }

  function selectReviewMainType(questionNumber, typeCode) {
    const type = getSsenTypeByCode(typeCode);
    if (!type) {
      updateReviewDraft(questionNumber, {
        mainType: "",
        mainTypeCode: "",
        ssenMeta: { source: "ssen_type_index", matchStatus: "needs_mapping", mainType: {}, subTypes: [] }
      });
      return;
    }
    const nextSubTypeCodes = [];
    updateReviewDraft(questionNumber, {
      unitKey: createExamAnalysisSsenUnitKey(type),
      partName: type.partName,
      unitNo: type.unitNo,
      unitName: type.unitName,
      mainType: type.typeName,
      mainTypeCode: type.typeCode,
      subTypesText: "",
      subTypeCodes: nextSubTypeCodes,
      ssenMeta: createExamAnalysisReviewSsenMeta({ catalog: ssenCatalog, mainTypeCode: type.typeCode, subTypeCodes: nextSubTypeCodes })
    });
  }

  function addReviewSubType(questionNumber, draftValue = {}, typeCode = "") {
    const type = getSsenTypeByCode(typeCode);
    if (!type) return;
    const nextSubTypeCodes = [...new Set([...normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes), type.typeCode])]
      .filter((code) => code !== draftValue.mainTypeCode)
      .slice(0, 3);
    const nextSubTypes = nextSubTypeCodes.map(getSsenTypeByCode).filter(Boolean);
    updateReviewDraft(questionNumber, {
      subTypeCodes: nextSubTypeCodes,
      subTypesText: nextSubTypes.map((item) => item.typeName).join(", "),
      ssenMeta: createExamAnalysisReviewSsenMeta({
        catalog: ssenCatalog,
        mainTypeCode: draftValue.mainTypeCode,
        subTypeCodes: nextSubTypeCodes
      })
    });
  }

  function removeReviewSubType(questionNumber, draftValue = {}, typeCode = "") {
    const nextSubTypeCodes = normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes).filter((code) => code !== typeCode);
    const nextSubTypes = nextSubTypeCodes.map(getSsenTypeByCode).filter(Boolean);
    updateReviewDraft(questionNumber, {
      subTypeCodes: nextSubTypeCodes,
      subTypesText: nextSubTypes.map((item) => item.typeName).join(", "),
      ssenMeta: createExamAnalysisReviewSsenMeta({
        catalog: ssenCatalog,
        mainTypeCode: draftValue.mainTypeCode,
        subTypeCodes: nextSubTypeCodes
      })
    });
  }

  function updateReviewDraft(questionNumber, patch) {
    const key = String(questionNumber);
    const question = questionRows.find((row) => String(row.questionNumber) === key);
    const seededDraft = question ? createExamAnalysisReviewDraft(question) : {};
    setReviewDrafts((current) => ({
      ...current,
      [key]: {
        ...seededDraft,
        ...(current[key] ?? {}),
        ...patch
      }
    }));
    setReviewStatus({ state: "dirty", message: "시험분석 · 수정됨 · 저장 필요" });
  }

  function markAllQuestionReviewsConfirmed() {
    setReviewDrafts((current) => {
      const seededDrafts = buildExamAnalysisReviewDrafts(questionRows);
      return Object.fromEntries(
        questionRows.map((question) => {
          const key = String(question.questionNumber);
          return [
            key,
            {
              ...(seededDrafts[key] ?? {}),
              ...(current[key] ?? {}),
              confirmed: true
            }
          ];
        })
      );
    });
    setReviewStatus({ state: "dirty", message: "시험분석 · 확정 변경됨 · 저장 필요" });
  }

  function buildQuestionReviewPayload() {
    return questionRows.map((question) => {
      const key = String(question.questionNumber);
      const draftValue = enrichExamAnalysisReviewDraftWithSsenCatalog(
        reviewDrafts[key] ?? createExamAnalysisReviewDraft(question),
        ssenCatalog
      );
      const subTypeCodes = normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes);
      const ssenMeta = draftValue.ssenMeta?.matchStatus === "matched"
        ? draftValue.ssenMeta
        : createExamAnalysisReviewSsenMeta({
            catalog: ssenCatalog,
            mainTypeCode: draftValue.mainTypeCode,
            subTypeCodes
          });
      return {
        questionNumber: Number(question.questionNumber),
        unitName: draftValue.unitName ?? "",
        mainType: draftValue.mainType ?? "",
        subTypes: parseExamAnalysisReviewSubTypes(draftValue.subTypesText),
        mainTypeCode: draftValue.mainTypeCode ?? "",
        subTypeCodes,
        ssenMeta,
        difficulty: draftValue.difficulty ?? "",
        reviewNote: draftValue.reviewNote ?? "",
        isImportantQuestion: Boolean(draftValue.isImportantQuestion),
        confirmed: Boolean(draftValue.confirmed)
      };
    });
  }

  function getQuestionReviewRefineTargetNumbers() {
    return questionRows
      .filter((question) => {
        const draftValue = reviewDrafts[String(question.questionNumber)] ?? createExamAnalysisReviewDraft(question);
        return isExamAnalysisQuestionRefineTarget(question, draftValue);
      })
      .map((question) => Number(question.questionNumber))
      .filter((number) => Number.isInteger(number) && number > 0)
      .sort((a, b) => a - b);
  }

  async function refineQuestionRowsWithAi() {
    if (!activeRun?.analysisRunId) {
      setRowRefineStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    const targetQuestionNumbers = getQuestionReviewRefineTargetNumbers();
    if (!targetQuestionNumbers.length) {
      setRowRefineStatus({ state: "failed", message: "시험분석 · AI 2차 수정 대상 문항이 없습니다." });
      return;
    }
    const sourceFile = sourceFiles[0];
    if (!sourceFile?.sourceId) {
      setRowRefineStatus({ state: "failed", message: "시험분석 · PDF 원본이 필요합니다." });
      return;
    }

    setIsRefiningRows(true);
    setRowRefineStatus({ state: "saving", message: `시험분석 · AI 2차 수정 중 · ${targetQuestionNumbers.join(", ")}번` });
    try {
      const result = await refineExamAnalysisQuestionRowsRequest({
        analysisRunId: activeRun.analysisRunId,
        sourceId: sourceFile.sourceId,
        targetQuestionNumbers
      });
      const updatedCount = result.analysisRun?.auditSummary?.rowRefine?.updatedCount || result.rowRefine?.updatedCount || result.rowRefineResult?.returnedCount || 0;
      const targetCount = result.analysisRun?.auditSummary?.rowRefine?.targetQuestionNumbers?.length || targetQuestionNumbers.length;
      setSelectedDetail(result);
      setRowRefineStatus({
        state: "success",
        message: `시험분석 · AI 2차 수정 완료 · ${updatedCount}/${targetCount}개`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setRowRefineStatus({ state: "failed", message: `시험분석 · AI 2차 수정 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsRefiningRows(false);
    }
  }

  async function saveQuestionReviews() {
    if (!activeRun?.analysisRunId) {
      setReviewStatus({ state: "failed", message: "시험분석 · 분석을 먼저 저장해 주세요." });
      return;
    }
    if (!questionRows.length) {
      setReviewStatus({ state: "failed", message: "시험분석 · 검수할 문항 행이 없습니다." });
      return;
    }

    setIsSavingReviews(true);
    setReviewStatus({ state: "saving", message: "시험분석 · 검수 저장 중" });
    try {
      const result = await saveExamAnalysisQuestionReviewsRequest({
        analysisRunId: activeRun.analysisRunId,
        reviews: buildQuestionReviewPayload()
      });
      const totalCount = result.teacherReview?.totalQuestionCount || result.questions?.length || questionRows.length;
      const confirmedCount = result.teacherReview?.confirmedCount || result.questions?.filter((question) => question.rowStatus === "confirmed").length || 0;
      setSelectedDetail(result);
      setReviewDrafts(buildExamAnalysisReviewDrafts(result.questions ?? []));
      setEditingSsenQuestionNumber("");
      setReviewStatus({
        state: "success",
        message: `시험분석 · 검수 저장 완료 · ${confirmedCount}/${totalCount}개 확정`
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setReviewStatus({ state: "failed", message: `시험분석 · 검수 저장 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsSavingReviews(false);
    }
  }

  function updateOutputInput(key, value) {
    setOutputDrafts((current) => ({
      ...current,
      inputs: {
        ...current.inputs,
        [key]: value
      }
    }));
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 수정됨 · 저장 필요" });
  }

  function updateOutputKeyQuestionBlock(blockId, fieldKey, value) {
    setOutputDrafts((current) => {
      const currentBlocks = normalizeExamAnalysisKeyQuestionBlocks(current.inputs);
      return {
        ...current,
        inputs: {
          ...current.inputs,
          keyQuestionBlocks: currentBlocks.map((block) => (
            block.blockId === blockId ? { ...block, [fieldKey]: value } : block
          ))
        }
      };
    });
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 주요문항 수정됨 · 저장 필요" });
  }

  function addOutputKeyQuestionBlock() {
    setOutputDrafts((current) => {
      const currentBlocks = normalizeExamAnalysisKeyQuestionBlocks(current.inputs);
      const nextIndex = currentBlocks.length + 1;
      const nextBlock = {
        ...createEmptyExamAnalysisKeyQuestionBlock(nextIndex),
        blockId: `key-question-${Date.now()}-${nextIndex}`
      };
      return {
        ...current,
        inputs: {
          ...current.inputs,
          keyQuestionBlocks: [...currentBlocks, nextBlock]
        }
      };
    });
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 주요문항 추가됨 · 저장 필요" });
  }

  function removeOutputKeyQuestionBlock(blockId) {
    setOutputDrafts((current) => {
      const currentBlocks = normalizeExamAnalysisKeyQuestionBlocks(current.inputs);
      const nextBlocks = currentBlocks.length > 1
        ? currentBlocks.filter((block) => block.blockId !== blockId)
        : currentBlocks;
      return {
        ...current,
        inputs: {
          ...current.inputs,
          keyQuestionBlocks: nextBlocks
        }
      };
    });
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 주요문항 삭제됨 · 저장 필요" });
  }

  function updateOutputTeacherDraft(outputType, value) {
    setOutputDrafts((current) => ({
      ...current,
      [outputType]: {
        ...current[outputType],
        teacherDraft: value,
        teacherTouched: true,
        teacherUpdatedAt: current[outputType]?.teacherUpdatedAt || new Date().toISOString()
      }
    }));
    setOutputStatus({ state: "dirty", message: "시험분석 산출물 · 수정됨 · 저장 필요" });
  }

  async function saveOutputDrafts() {
    if (!activeRun?.analysisRunId) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 분석을 먼저 저장해 주세요." });
      return;
    }
    setIsSavingOutputDrafts(true);
    setOutputStatus({ state: "saving", message: "시험분석 산출물 · 저장 중" });
    try {
      const result = await saveExamAnalysisOutputDraftsRequest({
        analysisRunId: activeRun.analysisRunId,
        outputInputs: outputDrafts.inputs,
        blogTeacherDraft: outputDrafts.blog.teacherDraft,
        instagramTeacherDraft: outputDrafts.instagram.teacherDraft,
        blogTeacherDraftEdited: Boolean(outputDrafts.blog.teacherTouched),
        instagramTeacherDraftEdited: Boolean(outputDrafts.instagram.teacherTouched)
      });
      setSelectedDetail(result);
      setOutputDrafts(getExamAnalysisOutputDraftsFromRun(result.analysisRun));
      setOutputStatus({ state: "success", message: "시험분석 산출물 · 저장 완료" });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setOutputStatus({ state: "failed", message: `시험분석 산출물 · 저장 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setIsSavingOutputDrafts(false);
    }
  }

  async function generateOutputDraft(outputType) {
    if (!activeRun?.analysisRunId) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 분석을 먼저 저장해 주세요." });
      return;
    }
    const keyQuestionValues = normalizeExamAnalysisKeyQuestionBlocks(outputDrafts.inputs)
      .flatMap((block) => examAnalysisKeyQuestionBlockFields.map((field) => block[field.key]));
    const inputValues = [
      ...examAnalysisOutputAllInputFields.map((field) => outputDrafts.inputs[field.key]),
      ...keyQuestionValues
    ];
    if (!inputValues.some((value) => String(value || "").trim())) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 먼저 기본 메모 또는 블로그 흐름 블록 중 하나 이상을 작성해 주세요." });
      return;
    }
    const section = outputDrafts[outputType] ?? {};
    const hasTeacherDraft = Boolean(section.teacherTouched || section.teacherUpdatedAt || section.teacherDraft);
    const hasUnsavedTeacherDraft = Boolean(section.teacherTouched);
    if (hasTeacherDraft && !window.confirm("선생님 수정본은 유지하고 AI 초안만 다시 생성할까요?")) {
      return;
    }
    setGeneratingOutputType(outputType);
    setOutputStatus({
      state: "saving",
      message: outputType === "blog" ? "시험분석 산출물 · 블로그 초안 생성 중" : "시험분석 산출물 · 인스타 카드 초안 생성 중"
    });
    try {
      const result = await generateExamAnalysisOutputDraftRequest({
        analysisRunId: activeRun.analysisRunId,
        outputType,
        outputInputs: outputDrafts.inputs
      });
      const generatedDrafts = getExamAnalysisOutputDraftsFromRun(result.analysisRun);
      setSelectedDetail(result);
      setOutputDrafts(hasUnsavedTeacherDraft
        ? mergeExamAnalysisOutputDraftsPreservingLocalEdits(generatedDrafts, outputDrafts)
        : generatedDrafts);
      setOutputStatus({
        state: hasUnsavedTeacherDraft ? "dirty" : "success",
        message: hasUnsavedTeacherDraft
          ? (outputType === "blog"
              ? "시험분석 산출물 · 블로그 초안 생성 완료 · 선생님 수정본 저장 필요"
              : "시험분석 산출물 · 인스타 카드 초안 생성 완료 · 선생님 수정본 저장 필요")
          : (outputType === "blog" ? "시험분석 산출물 · 블로그 초안 생성 완료" : "시험분석 산출물 · 인스타 카드 초안 생성 완료")
      });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setOutputStatus({ state: "failed", message: `시험분석 산출물 · 초안 생성 실패 · ${error.message}` });
      if (selectedRunId) await loadRunDetail(selectedRunId);
    } finally {
      setGeneratingOutputType("");
    }
  }

  async function copyOutputDraft(outputType, text) {
    const copied = await copyTextToClipboard(text);
    const label = outputType === "instagram" ? "인스타 카드 초안" : "블로그 초안";
    setOutputStatus({
      state: copied ? "success" : "failed",
      message: copied ? `시험분석 산출물 · ${label} 복사 완료` : `시험분석 산출물 · ${label} 복사 실패`
    });
  }

  function downloadOutputDraft(outputType, text) {
    const label = outputType === "instagram" ? "인스타 카드 초안" : "블로그 초안";
    const downloaded = downloadExamAnalysisOutputTextFile({
      activeRun: activeRun ?? {},
      outputType,
      text
    });
    setOutputStatus({
      state: downloaded ? "success" : "failed",
      message: downloaded ? `시험분석 산출물 · ${label} TXT 내보내기 완료` : `시험분석 산출물 · ${label} 내보낼 내용이 없습니다.`
    });
  }

  async function downloadOutputPackageZip() {
    if (!activeRun?.analysisRunId) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 분석을 먼저 저장해 주세요." });
      return;
    }
    if (!finalPreviewModel?.questions?.length) {
      setOutputStatus({ state: "failed", message: "시험분석 산출물 · 패키지에 넣을 검수 저장본이 없습니다." });
      return;
    }
    setExportingOutputType("package");
    setOutputStatus({ state: "saving", message: "시험분석 산출물 · 산출물 ZIP 생성 중 · 현재 화면 수정본 기준" });
    try {
      const result = await downloadExamAnalysisOutputPackageZip({
        activeRun,
        model: finalPreviewModel,
        outputDrafts
      });
      setOutputStatus({
        state: "success",
        message: `시험분석 산출물 · 산출물 ZIP 완료 · 텍스트 ${result.textCount}개 · PNG ${result.chartCount}개 · SVG ${result.svgCount}개`
      });
    } catch (error) {
      setOutputStatus({ state: "failed", message: `시험분석 산출물 · 산출물 ZIP 실패 · ${error.message}` });
    } finally {
      setExportingOutputType("");
    }
  }

  const confirmedQuestionCount = Number(activeRun?.confirmedQuestionCount || 0);
  const questionRowNumbers = questionRows
    .map((question) => Number(question.questionNumber))
    .filter((number) => Number.isInteger(number) && number > 0)
    .sort((a, b) => a - b);
  const shownQuestionRowNumbers = questionRowNumbers.slice(0, 60);
  const boundaryRows = questionRows.map((question) => ({
    question,
    boundary: getExamAnalysisQuestionBoundary(question)
  }));
  const boundaryDetectedCount = boundaryRows.filter(({ boundary }) => Boolean(boundary?.pageStart)).length;
  const aiFilledRows = questionRows.filter((question) => question.rowStatus === "ai_filled" || question.unitName || question.mainType);
  const aiNeedsReviewRows = questionRows.filter(isExamAnalysisQuestionAiReviewTarget);
  const reviewRowsReady = questionRows.length > 0 && (Boolean(rowFill) || aiFilledRows.length > 0 || Boolean(teacherReview));
  const confirmedReviewCount = questionRows.filter((question) => {
    const draftValue = reviewDrafts[String(question.questionNumber)] ?? createExamAnalysisReviewDraft(question);
    return Boolean(draftValue.confirmed);
  }).length;
  const refineTargetCount = questionRows.filter((question) => {
    const draftValue = reviewDrafts[String(question.questionNumber)] ?? createExamAnalysisReviewDraft(question);
    return isExamAnalysisQuestionRefineTarget(question, draftValue);
  }).length;
  const questionCountButtonLabel = isConfirmingQuestionCount
    ? "확정 중"
    : questionCountDraft
      ? `${questionCountDraft}문항 확정`
      : "문항 수 확정";
  const ssenCatalogLabel = ssenCatalog.status === "scope_matched"
    ? `${ssenCatalog.subject} · 범위 후보 ${ssenCatalog.scopeMatchedCount}개`
    : ssenCatalog.status === "scope_not_matched"
      ? `${ssenCatalog.subject || "과목 미정"} · 범위 매칭 없음 · 과목 전체 ${ssenCatalog.subjectTypeCount}개`
      : ssenCatalog.status === "subject_all"
        ? `${ssenCatalog.subject} · 과목 전체 ${ssenCatalog.subjectTypeCount}개`
        : "과목 확인 필요";

  return (
    <section className="examAnalysisPipelinePage">
      <div className="pageTop">
        <div>
          <h1>시험분석</h1>
          <p className="muted">PDF 원본 저장과 분석 작업 관리</p>
        </div>
        <div className="pageActions">
          <button className="secondaryButton" onClick={() => loadRuns(selectedRunId)} type="button">새로고침</button>
          <button className="primaryButton" onClick={saveRun} type="button">분석 저장</button>
        </div>
      </div>

      <div className="examAnalysisStatusBar">
        {[loadStatus, saveStatus, uploadStatus, sourceDeleteStatus, extractStatus, visionStatus, confirmStatus, boundaryStatus, rowFillStatus, rowRefineStatus, reviewStatus, outputStatus, deleteStatus].filter((item) => item.message).map((item, index) => (
          <span className={`saveStateBadge ${item.state}`} key={`${item.message}-${index}`}>{item.message}</span>
        ))}
      </div>

      <div className="examAnalysisGrid">
        <section className="examAnalysisLibraryPanel panel">
          <div className="examAnalysisColumnBoard">
            <div className="examAnalysisColumn">
              <div className="examAnalysisColumnHeader">
                <div>
                  <strong>학교</strong>
                  <span>{schoolCards.length}개</span>
                </div>
              </div>
              <div className="examAnalysisColumnList">
                {schoolCards.length === 0 ? (
                  <div className="emptyState compact">학교 없음</div>
                ) : schoolCards.map((school) => (
                  <button
                    className={selectedSchoolName === school.name ? "examAnalysisColumnCard active" : "examAnalysisColumnCard"}
                    key={school.name}
                    onClick={() => selectSchoolCard(school)}
                    type="button"
                  >
                    <strong>{school.name}</strong>
                    <span>{school.gradeCount}학년 · {school.examCount}고사 · {school.runCount}건</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="examAnalysisColumn">
              <div className="examAnalysisColumnHeader">
                <div>
                  <strong>학년</strong>
                  <span>{gradeCards.length}개</span>
                </div>
              </div>
              <div className="examAnalysisColumnList">
                {gradeCards.length === 0 ? (
                  <div className="emptyState compact">학년 없음</div>
                ) : gradeCards.map((grade) => (
                  <button
                    className={selectedGrade === grade.name ? "examAnalysisColumnCard active" : "examAnalysisColumnCard"}
                    key={grade.name}
                    onClick={() => selectGradeCard(grade)}
                    type="button"
                  >
                    <strong>{grade.name}</strong>
                    <span>{grade.examCount}고사 · {grade.runCount}건</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="examAnalysisColumn">
              <div className="examAnalysisColumnHeader">
                <div>
                  <strong>고사</strong>
                  <span>{examCycleCards.length}개</span>
                </div>
              </div>
              <div className="examAnalysisColumnList">
                {examCycleCards.map((examCycle) => (
                  <button
                    className={selectedExamCycle === examCycle.name ? "examAnalysisColumnCard active" : "examAnalysisColumnCard"}
                    key={examCycle.name}
                    onClick={() => selectExamCycleCard(examCycle)}
                    type="button"
                  >
                    <strong>{examCycle.name}</strong>
                    <span>{examCycle.runCount}건</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="examAnalysisColumn">
              <div className="examAnalysisColumnHeader">
                <div>
                  <strong>분석</strong>
                  <span>{scopedRuns.length}건</span>
                </div>
                <div className="examAnalysisColumnHeaderActions">
                  <button
                    className="dangerSoftButton compact"
                    disabled={!activeRun?.analysisRunId || deletingRunId === activeRun?.analysisRunId}
                    onClick={deleteSelectedAnalysisRun}
                    type="button"
                  >
                    {deletingRunId === activeRun?.analysisRunId ? "삭제 중" : "삭제"}
                  </button>
                </div>
              </div>
              <div className="examAnalysisColumnList">
                {scopedRuns.length === 0 ? (
                  <div className="emptyState compact">PDF를 업로드하면 분석이 생성됩니다.</div>
                ) : scopedRuns.map((run) => (
                  <button
                    className={selectedRunId === run.analysisRunId ? "examAnalysisColumnCard active" : "examAnalysisColumnCard"}
                    key={run.analysisRunId}
                    onClick={() => setSelectedRunId(run.analysisRunId)}
                    type="button"
                  >
                    <strong>{getExamAnalysisRunTitle(run)}</strong>
                    <span>{[run.createdAt?.slice(0, 4), workflowStatusLabel(run.workflowStatus), getDefaultExamAnalysisSubject(run)].filter(Boolean).join(" · ")}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="examAnalysisWorkPanel">
          <div className="panel examAnalysisFormPanel">
            <div className="sectionHeader slim">
              <div>
                <strong>기본정보</strong>
                <span>{activeRun ? workflowStatusLabel(activeRun.workflowStatus) : "새 분석"}</span>
              </div>
            </div>
            <div className="examAnalysisFormGrid">
              <label>
                <span>연결 시험정보</span>
                <select
                  value={selectedExamPrepId}
                  onChange={(event) => {
                    const nextId = event.target.value;
                    setSelectedExamPrepId(nextId);
                    if (!nextId) return;
                    applyExamPrepRow(examPrepRows.find((row) => row.examPrepId === nextId));
                  }}
                >
                  <option value="">직접 입력</option>
                  {examPrepRows.map((row) => (
                    <option key={row.examPrepId} value={row.examPrepId}>
                      {[row.schoolName, row.grade, row.subject, row.examCycle || row.examTerm].filter(Boolean).join(" · ")}
                    </option>
                  ))}
                </select>
              </label>
              <label className="span2">
                <span>분석명</span>
                <input value={draft.title} onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))} />
              </label>
              <label>
                <span>학교</span>
                <input value={draft.schoolName} onChange={(event) => setDraft((current) => ({ ...current, schoolName: event.target.value }))} />
              </label>
              <label>
                <span>학년</span>
                <input value={draft.grade} onChange={(event) => setDraft((current) => ({ ...current, grade: event.target.value }))} />
              </label>
              <label>
                <span>과목</span>
                <input value={draft.subject} onChange={(event) => setDraft((current) => ({ ...current, subject: event.target.value }))} />
              </label>
              <label>
                <span>고사</span>
                <input value={draft.examCycle || draft.examTerm} onChange={(event) => setDraft((current) => ({ ...current, examCycle: event.target.value }))} />
              </label>
            </div>
            {selectedExamPrepRow ? (
              <div className="examAnalysisLinkedInfo">
                <span>시험기간 {selectedExamPrepRow.examPeriod || "-"}</span>
                <span>수학 시험일 {selectedExamPrepRow.mathExamDate || selectedExamPrepRow.mathExamDates?.[0]?.date || "-"}</span>
                <span>범위 {selectedExamPrepRow.scope || "미입력"}</span>
              </div>
            ) : null}
          </div>

          <div
            className={isPdfDropActive ? "panel examAnalysisUploadPanel dropActive" : "panel examAnalysisUploadPanel"}
            onDragEnter={handlePdfDragEnter}
            onDragLeave={handlePdfDragLeave}
            onDragOver={handlePdfDragEvent}
            onDrop={handlePdfDrop}
          >
            <div className="sectionHeader slim">
              <div>
                <strong>PDF 원본</strong>
                <span>{sourceFiles.length}개</span>
              </div>
              <div className="headerActions">
                <input
                  accept="application/pdf,.pdf"
                  className="visuallyHiddenInput"
                  onChange={(event) => uploadPdf(event.target.files?.[0])}
                  ref={fileInputRef}
                  type="file"
                />
                <button className="primaryButton" onClick={() => fileInputRef.current?.click()} type="button">PDF 업로드</button>
              </div>
            </div>
            <div
              className="examAnalysisDropZone"
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <strong>PDF 파일을 여기에 드롭</strong>
              <span>또는 PDF 업로드 버튼으로 선택</span>
            </div>
            <div className="examAnalysisSourceList">
              {sourceFiles.length === 0 ? (
                <div className="emptyState compact">PDF 원본 없음</div>
              ) : sourceFiles.map((file) => {
                const extractionCheck = buildExamAnalysisExtractionCheck(file);
                const extractionSummary = getExamAnalysisExtractionSummary(activeRun, file.sourceId);
                const extractionWarnings = extractionSummary?.quality?.warnings?.length
                  ? extractionSummary.quality.warnings
                  : extractionCheck.warnings;
                const extractionStatusClass = extractionSummary?.quality?.status === "ok"
                  ? "ok"
                  : extractionWarnings.length
                    ? "needsReview"
                    : extractionCheck.status;
                const visionCheck = getExamAnalysisVisionCheck(activeRun, file.sourceId);
                return (
                  <div className="examAnalysisSourceItem" key={file.sourceId}>
                    <div>
                      <strong>{file.originalFileName || "PDF 원본"}</strong>
                      <span>
                        {examAnalysisSourceStatusLabel(file.extractionStatus)}
                        {" · "}파일 {formatBytes(file.sizeBytes)}
                        {" · "}{file.extractedText ? `추출 ${formatBytes(extractionCheck.textBytes)}` : "텍스트 추출 전"}
                        {file.pageCount ? ` · ${file.pageCount}쪽` : ""}
                        {" · "}{file.createdAt ? file.createdAt.slice(0, 10) : "-"}
                      </span>
                      {file.extractionStatus === "extracted" ? (
                        <div className={`examAnalysisExtractionCheck ${extractionStatusClass}`}>
                          <strong>텍스트 검증</strong>
                          <span>
                            {extractionCheck.pageCount}쪽 · {formatBytes(extractionCheck.textBytes)}
                            {extractionCheck.maxQuestionNumber
                              ? ` · 문항번호 후보 1~${extractionCheck.maxQuestionNumber} (${extractionCheck.questionNumbers.length}개)`
                              : " · 문항번호 후보 없음"}
                          </span>
                          {extractionWarnings.length ? <small>{extractionWarnings.join(" · ")}</small> : <small>빈 페이지와 번호 누락 후보 없음</small>}
                          {formatExamAnalysisPageTextLengthSummary(file.pageTextRanges) ? (
                            <small>{formatExamAnalysisPageTextLengthSummary(file.pageTextRanges)}</small>
                          ) : null}
                        </div>
                      ) : null}
                      {visionCheck ? (
                        <div className={`examAnalysisExtractionCheck ${visionCheck.readable ? "ok" : "needsReview"}`}>
                          <strong>AI 원본 검증</strong>
                          <span>
                            {visionCheck.pageCount || "-"}쪽 · 문항 후보 {visionCheck.questionCountCandidate || visionCheck.questionNumberCandidates?.length || 0}개
                            {visionCheck.answerKeyDetected ? " · 빠른 정답 감지" : ""}
                            {visionCheck.provider ? ` · ${visionCheck.provider}` : ""}
                          </span>
                          {visionCheck.warnings?.length ? <small>{visionCheck.warnings.join(" · ")}</small> : <small>{visionCheck.firstPageEvidence || "원본 PDF를 페이지 이미지 포함으로 검증했습니다."}</small>}
                        </div>
                      ) : null}
                    </div>
                    <div className="examAnalysisSourceActions">
                      <button
                        className="secondaryButton compact"
                        disabled={extractingSourceId === file.sourceId}
                        onClick={() => extractSourceText(file)}
                        type="button"
                      >
                        {extractingSourceId === file.sourceId ? "추출 중" : file.extractionStatus === "extracted" ? "재추출" : "텍스트 추출"}
                      </button>
                      <button
                        className="secondaryButton compact"
                        disabled={checkingSourceId === file.sourceId}
                        onClick={() => verifySourceWithAi(file)}
                        type="button"
                      >
                        {checkingSourceId === file.sourceId ? "검증 중" : "원본 AI 검증"}
                      </button>
                      {getExamAnalysisSourceOpenUrl(file) ? (
                        <a className="secondaryButton linkButton" href={getExamAnalysisSourceOpenUrl(file)} rel="noreferrer" target="_blank">열기</a>
                      ) : null}
                      <button
                        className="dangerSoftButton compact"
                        disabled={deletingSourceId === file.sourceId || extractingSourceId === file.sourceId || checkingSourceId === file.sourceId}
                        onClick={() => deleteSourceFile(file)}
                        type="button"
                      >
                        {deletingSourceId === file.sourceId ? "삭제 중" : "삭제"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="panel examAnalysisQuestionCountPanel">
            <div className="sectionHeader slim">
              <div>
                <strong>문항 수 확인</strong>
                <span>
                  {confirmedQuestionCount
                    ? `${confirmedQuestionCount}문항 확정`
                    : questionCountCandidate.count
                      ? `${questionCountCandidate.count}문항 후보`
                      : "대기"}
                </span>
              </div>
              {confirmStatus.message ? <span className={`saveStateBadge ${confirmStatus.state}`}>{confirmStatus.message}</span> : null}
            </div>
            <div className="examAnalysisQuestionCountGrid">
              <div className="examAnalysisQuestionCountCard">
                <strong>{questionCountCandidate.count ? `${questionCountCandidate.count}문항 후보` : "문항 후보 없음"}</strong>
                <span>{questionCountCandidate.sourceLabel || "PDF 검증 대기"}</span>
                <small>{questionCountCandidate.detailLabel}</small>
                {questionCountCandidate.detectedQuestionEvidence?.length ? (
                  <small>{questionCountCandidate.detectedQuestionEvidence.slice(0, 3).join(" · ")}</small>
                ) : null}
                {questionCountCandidate.missingQuestionNumbers?.length ? (
                  <small>누락 후보 {questionCountCandidate.missingQuestionNumbers.join(", ")}</small>
                ) : null}
              </div>
              <div className="examAnalysisQuestionCountConfirm">
                <label>
                  <span>선생님 확정 문항 수</span>
                  <input
                    inputMode="numeric"
                    max="200"
                    min="1"
                    onChange={(event) => setQuestionCountDraft(event.target.value)}
                    placeholder="예: 24"
                    type="number"
                    value={questionCountDraft}
                  />
                </label>
                <button
                  className="primaryButton"
                  disabled={!activeRun?.analysisRunId || isConfirmingQuestionCount}
                  onClick={confirmQuestionCount}
                  type="button"
                >
                  {questionCountButtonLabel}
                </button>
              </div>
            </div>
            <div className="questionRowsPreview">
              <div>
                <strong>고정 문항 행</strong>
                <span>
                  {questionRowNumbers.length
                    ? `${questionRowNumbers[0]}~${questionRowNumbers.at(-1)}번 · ${questionRowNumbers.length}행`
                    : "문항 수를 확정하면 1~N 빈 행이 생성됩니다."}
                </span>
              </div>
              {questionRowNumbers.length ? (
                <div className="questionRowsPreviewChips">
                  {shownQuestionRowNumbers.map((number) => <span key={number}>{number}</span>)}
                  {questionRowNumbers.length > shownQuestionRowNumbers.length ? <span>+{questionRowNumbers.length - shownQuestionRowNumbers.length}</span> : null}
                </div>
              ) : null}
            </div>
          </div>

          <div className="panel examAnalysisBoundaryPanel">
            <div className="sectionHeader slim">
              <div>
                <strong>문항 경계 탐지</strong>
                <span>
                  {boundaryRows.length
                    ? `${boundaryDetectedCount}/${boundaryRows.length}개`
                    : "대기"}
                </span>
              </div>
              <div className="headerActions">
                {boundaryStatus.message ? <span className={`saveStateBadge ${boundaryStatus.state}`}>{boundaryStatus.message}</span> : null}
                <button
                  className="secondaryButton"
                  disabled={!questionRows.length || !sourceFiles.length || isDetectingBoundaries}
                  onClick={detectQuestionBoundaries}
                  type="button"
                >
                  {isDetectingBoundaries ? "탐지 중" : "문항 경계 탐지"}
                </button>
              </div>
            </div>
            {boundaryDetection ? (
              <div className={boundaryDetection.status === "needs_review" ? "examAnalysisBoundarySummary needsReview" : "examAnalysisBoundarySummary ok"}>
                <strong>{boundaryDetection.status === "needs_review" ? "검토 필요" : "탐지 완료"}</strong>
                <span>
                  {boundaryDetection.detectedCount || 0}/{boundaryDetection.totalQuestionCount || questionRows.length || 0}개
                  {boundaryDetection.provider ? ` · ${boundaryDetection.provider}` : ""}
                  {boundaryDetection.detectedAt ? ` · ${formatExamAnalysisEventTime(boundaryDetection.detectedAt)}` : ""}
                </span>
                {boundaryDetection.missingQuestionNumbers?.length ? <small>누락 {boundaryDetection.missingQuestionNumbers.join(", ")}</small> : null}
                {boundaryDetection.needsReviewNumbers?.length ? <small>재확인 {boundaryDetection.needsReviewNumbers.join(", ")}</small> : null}
                {boundaryDetection.overlapWarnings?.length ? <small>{boundaryDetection.overlapWarnings.join(" · ")}</small> : null}
              </div>
            ) : null}
            {boundaryRows.length ? (
              <div className="examAnalysisBoundaryGrid">
                {boundaryRows.map(({ question, boundary }) => (
                  <div className={boundary?.needsReview || !boundary?.pageStart ? "examAnalysisBoundaryCard needsReview" : "examAnalysisBoundaryCard"} key={question.questionRowId || question.questionNumber}>
                    <strong>{question.questionNumber}</strong>
                    <span>{formatExamAnalysisBoundaryPage(boundary)}</span>
                    <small>{boundary?.positionHint || "위치 대기"}</small>
                  </div>
                ))}
              </div>
            ) : (
              <div className="emptyState compact">고정 문항 행 없음</div>
            )}
          </div>

          <div className="panel examAnalysisRowFillPanel">
            <div className="sectionHeader slim">
              <div>
                <strong>AI 행 채움</strong>
                <span>{questionRows.length ? `${aiFilledRows.length}/${questionRows.length}개` : "대기"}</span>
              </div>
              <div className="headerActions">
                {rowFillStatus.message ? <span className={`saveStateBadge ${rowFillStatus.state}`}>{rowFillStatus.message}</span> : null}
                <button
                  className="secondaryButton"
                  disabled={!questionRows.length || !boundaryDetectedCount || isFillingRows}
                  onClick={fillQuestionRowsWithAi}
                  type="button"
                >
                  {isFillingRows ? "채움 중" : "AI 행 채움"}
                </button>
              </div>
            </div>
            {rowFill ? (
              <div className={rowFill.status === "needs_review" ? "examAnalysisRowFillSummary needsReview" : "examAnalysisRowFillSummary ok"}>
                <strong>{rowFill.status === "needs_review" ? "검토 필요" : "채움 완료"}</strong>
                <span>
                  {rowFill.filledCount || 0}/{rowFill.totalQuestionCount || questionRows.length || 0}개
                  {rowFill.provider ? ` · ${rowFill.provider}` : ""}
                  {rowFill.filledAt ? ` · ${formatExamAnalysisEventTime(rowFill.filledAt)}` : ""}
                </span>
                {rowFill.needsReviewNumbers?.length ? <small>재확인 {rowFill.needsReviewNumbers.join(", ")}</small> : null}
                {rowFill.missingQuestionNumbers?.length ? <small>누락 {rowFill.missingQuestionNumbers.join(", ")}</small> : null}
              </div>
            ) : null}
            {questionRows.length ? (
              <div className="examAnalysisRowFillGrid">
                {questionRows.map((question) => {
                  const needsReview = isExamAnalysisQuestionAiReviewTarget(question);
                  return (
                    <div className={needsReview ? "examAnalysisRowFillCard needsReview" : "examAnalysisRowFillCard"} key={question.questionRowId || question.questionNumber}>
                      <strong>{question.questionNumber}</strong>
                      <span>{question.unitName || "단원 대기"}</span>
                      <small>{question.mainType || "유형 대기"}</small>
                      {question.difficulty ? <em>{question.difficulty}</em> : null}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="emptyState compact">고정 문항 행 없음</div>
            )}
            {aiNeedsReviewRows.length ? (
              <p className="examAnalysisReviewNotice">재확인 문항 {aiNeedsReviewRows.map((question) => question.questionNumber).join(", ")}번은 다음 검수 단계에서 확인해야 합니다.</p>
            ) : null}
          </div>

          <div className="panel examAnalysisReviewPanel">
            <div className="sectionHeader slim">
              <div>
                <strong>AI 결과 검수</strong>
                <span>{questionRows.length ? `${confirmedReviewCount}/${questionRows.length}개 확정` : "대기"}</span>
              </div>
              <div className="headerActions">
                {rowRefineStatus.message ? <span className={`saveStateBadge ${rowRefineStatus.state}`}>{rowRefineStatus.message}</span> : null}
                {reviewStatus.message ? <span className={`saveStateBadge ${reviewStatus.state}`}>{reviewStatus.message}</span> : null}
                <button
                  className="secondaryButton"
                  disabled={!reviewRowsReady || isSavingReviews || isRefiningRows || !refineTargetCount}
                  onClick={refineQuestionRowsWithAi}
                  type="button"
                >
                  {isRefiningRows ? "2차 수정 중" : `AI 2차 수정${refineTargetCount ? ` · ${refineTargetCount}개` : ""}`}
                </button>
                <button
                  className="secondaryButton"
                  disabled={!reviewRowsReady || isSavingReviews || isRefiningRows}
                  onClick={markAllQuestionReviewsConfirmed}
                  type="button"
                >
                  모두 확정
                </button>
                <button
                  className="primaryButton"
                  disabled={!reviewRowsReady || isSavingReviews || isRefiningRows}
                  onClick={saveQuestionReviews}
                  type="button"
                >
                  {isSavingReviews ? "저장 중" : "검수 저장"}
                </button>
              </div>
            </div>
            {teacherReview ? (
              <div className={teacherReview.status === "completed" ? "examAnalysisReviewSummary ok" : "examAnalysisReviewSummary needsReview"}>
                <strong>{teacherReview.status === "completed" ? "검수 완료" : "검수 진행 중"}</strong>
                <span>
                  {teacherReview.confirmedCount || 0}/{teacherReview.totalQuestionCount || questionRows.length || 0}개
                  {teacherReview.reviewedAt ? ` · ${formatExamAnalysisEventTime(teacherReview.reviewedAt)}` : ""}
                </span>
                {teacherReview.unconfirmedNumbers?.length ? <small>미확정 {teacherReview.unconfirmedNumbers.join(", ")}</small> : null}
              </div>
            ) : null}
            {rowRefine ? (
              <div className={rowRefine.status === "needs_review" ? "examAnalysisReviewSummary needsReview" : "examAnalysisReviewSummary ok"}>
                <strong>AI 2차 수정</strong>
                <span>
                  {rowRefine.updatedCount || 0}/{rowRefine.targetQuestionNumbers?.length || 0}개
                  {rowRefine.provider ? ` · ${rowRefine.provider}` : ""}
                  {rowRefine.refinedAt ? ` · ${formatExamAnalysisEventTime(rowRefine.refinedAt)}` : ""}
                </span>
                {rowRefine.needsReviewNumbers?.length ? <small>재확인 {rowRefine.needsReviewNumbers.join(", ")}</small> : null}
                {rowRefine.skippedTeacherOverrideNumbers?.length ? <small>선생님 수정본 보호 {rowRefine.skippedTeacherOverrideNumbers.join(", ")}</small> : null}
              </div>
            ) : null}
            <div className={ssenCatalog.status === "scope_not_matched" || ssenCatalog.status === "subject_missing" ? "examAnalysisSsenGate needsReview" : "examAnalysisSsenGate"}>
              <strong>쎈 기준표</strong>
              <span>{ssenCatalogStatus.message || ssenCatalogLabel}</span>
              <small>{ssenCatalogLabel}</small>
            </div>
            {reviewRowsReady ? (
              <div className="examAnalysisReviewTableWrap">
                <table className="examAnalysisReviewTable">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>확정</th>
                      <th>주요</th>
                      <th>단원</th>
                      <th>주유형</th>
                      <th>보조유형</th>
                      <th>난이도</th>
                      <th>검수 메모</th>
                      <th>기준표</th>
                      <th>상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    {questionRows.map((question) => {
                      const draftValue = enrichExamAnalysisReviewDraftWithSsenCatalog(
                        reviewDrafts[String(question.questionNumber)] ?? createExamAnalysisReviewDraft(question),
                        ssenCatalog
                      );
                      const needsReview = isExamAnalysisQuestionAiReviewTarget(question);
                      const unitKey = getReviewDraftUnitKey(draftValue);
                      const ssenTypeOptions = getSsenTypesForReviewDraft(draftValue);
                      const selectedSubTypeCodes = normalizeExamAnalysisSsenCodeList(draftValue.subTypeCodes);
                      const selectedSubTypes = selectedSubTypeCodes.map(getSsenTypeByCode).filter(Boolean);
                      const mainTypeMeta = getSsenTypeByCode(draftValue.mainTypeCode);
                      const isSsenEditing = editingSsenQuestionNumber === String(question.questionNumber);
                      const unitLabel = mainTypeMeta?.unitName || draftValue.unitName || "단원 선택 필요";
                      const mainTypeLabel = mainTypeMeta?.typeName || draftValue.mainType || "주유형 선택 필요";
                      const subTypeLabels = selectedSubTypes.length
                        ? selectedSubTypes.map((type) => type.typeName)
                        : parseExamAnalysisReviewSubTypes(draftValue.subTypesText);
                      const reviewClassName = [
                        needsReview ? "needsReview" : "",
                        draftValue.confirmed ? "confirmed" : "",
                        isSsenEditing ? "editingSsen" : ""
                      ].filter(Boolean).join(" ");
                      return (
                        <tr className={reviewClassName} key={question.questionRowId || question.questionNumber}>
                          <td className="questionNo">{question.questionNumber}</td>
                          <td className="confirmCell">
                            <input
                              aria-label={`${question.questionNumber}번 확정`}
                              checked={Boolean(draftValue.confirmed)}
                              onChange={(event) => updateReviewDraft(question.questionNumber, { confirmed: event.target.checked })}
                              type="checkbox"
                            />
                          </td>
                          <td className="importantCell">
                            <input
                              aria-label={`${question.questionNumber}번 주요문항`}
                              checked={Boolean(draftValue.isImportantQuestion)}
                              onChange={(event) => updateReviewDraft(question.questionNumber, { isImportantQuestion: event.target.checked })}
                              type="checkbox"
                            />
                          </td>
                          <td>
                            {isSsenEditing ? (
                              <select
                                value={unitKey}
                                onChange={(event) => selectReviewSsenUnit(question.questionNumber, event.target.value)}
                              >
                                <option value="">단원 선택</option>
                                {(ssenCatalog.units ?? []).map((unit) => (
                                  <option key={unit.key} value={unit.key}>
                                    {[unit.partName, unit.unitName].filter(Boolean).join(" · ")}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <div className="examAnalysisSubTypeChips readonly compact">
                                <span>{unitLabel}</span>
                              </div>
                            )}
                          </td>
                          <td>
                            {isSsenEditing ? (
                              <div className="examAnalysisReviewEditCell withAction">
                                <select
                                  value={draftValue.mainTypeCode}
                                  onChange={(event) => selectReviewMainType(question.questionNumber, event.target.value)}
                                >
                                  <option value="">주유형 선택</option>
                                  {ssenTypeOptions.map((type) => (
                                    <option key={type.typeCode} value={type.typeCode}>
                                      {`${type.typeNo}. ${type.typeName}`}
                                    </option>
                                  ))}
                                </select>
                                <button
                                  className="softTinyButton square"
                                  onClick={() => setEditingSsenQuestionNumber("")}
                                  type="button"
                                >
                                  닫기
                                </button>
                              </div>
                            ) : (
                              <div className="examAnalysisReviewTypeCell">
                                <div className="examAnalysisSubTypeChips readonly compact">
                                  <span>{mainTypeLabel}</span>
                                </div>
                                <button
                                  className="softTinyButton"
                                  onClick={() => setEditingSsenQuestionNumber(String(question.questionNumber))}
                                  type="button"
                                >
                                  수정
                                </button>
                              </div>
                            )}
                          </td>
                          <td>
                            {isSsenEditing ? (
                              <div className="examAnalysisSubTypePicker">
                                <select
                                  aria-label={`${question.questionNumber}번 보조유형 추가`}
                                  onChange={(event) => {
                                    addReviewSubType(question.questionNumber, draftValue, event.target.value);
                                    event.target.value = "";
                                  }}
                                  value=""
                                >
                                  <option value="">보조유형 추가</option>
                                  {ssenTypeOptions
                                    .filter((type) => type.typeCode !== draftValue.mainTypeCode && !selectedSubTypeCodes.includes(type.typeCode))
                                    .map((type) => (
                                      <option key={type.typeCode} value={type.typeCode}>
                                        {`${type.typeNo}. ${type.typeName}`}
                                      </option>
                                    ))}
                                </select>
                                <div className="examAnalysisSubTypeChips">
                                  {selectedSubTypes.length ? selectedSubTypes.map((type) => (
                                    <button
                                      aria-label={`${type.typeName} 제거`}
                                      key={type.typeCode}
                                      onClick={() => removeReviewSubType(question.questionNumber, draftValue, type.typeCode)}
                                      type="button"
                                    >
                                      {type.typeName}
                                    </button>
                                  )) : <span>없음</span>}
                                </div>
                              </div>
                            ) : (
                              <div className="examAnalysisSubTypeChips readonly">
                                {subTypeLabels.length ? subTypeLabels.map((label) => (
                                  <span key={label}>{label}</span>
                                )) : <span>없음</span>}
                              </div>
                            )}
                          </td>
                          <td>
                            {isSsenEditing ? (
                              <select
                                value={draftValue.difficulty}
                                onChange={(event) => updateReviewDraft(question.questionNumber, { difficulty: event.target.value })}
                              >
                                <option value="">선택</option>
                                <option value="하">하</option>
                                <option value="중하">중하</option>
                                <option value="중">중</option>
                                <option value="중상">중상</option>
                                <option value="상">상</option>
                              </select>
                            ) : (
                              <span className="examAnalysisReviewPill">{draftValue.difficulty || "미정"}</span>
                            )}
                          </td>
                          <td>
                            <input
                              value={draftValue.reviewNote}
                              onChange={(event) => updateReviewDraft(question.questionNumber, { reviewNote: event.target.value })}
                              placeholder="재확인 근거 또는 수정 이유"
                            />
                          </td>
                          <td className="ssenMetaCell">
                            <strong>{mainTypeMeta?.partName || draftValue.partName || "매칭 필요"}</strong>
                            <span>{mainTypeMeta ? `${mainTypeMeta.unitNo}. ${mainTypeMeta.unitName}` : draftValue.unitName || "-"}</span>
                            <small>{draftValue.mainTypeCode || "typeCode 없음"}</small>
                          </td>
                          <td className="reviewStateCell">
                            {needsReview ? "2차 수정 필요" : draftValue.confirmed ? "확정" : "미확정"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="emptyState compact">AI 행 채움 후 검수할 수 있습니다.</div>
            )}
          </div>

          <ExamAnalysisFinalPreviewPanel
            model={finalPreviewModel}
          />

          <ExamAnalysisOutputDraftPanel
            activeRun={activeRun}
            exportingOutputType={exportingOutputType}
            generatingOutputType={generatingOutputType}
            isSavingOutputDrafts={isSavingOutputDrafts}
            model={finalPreviewModel}
            onGenerateOutputDraft={generateOutputDraft}
            onAddKeyQuestionBlock={addOutputKeyQuestionBlock}
            onCopyOutputDraft={copyOutputDraft}
            onDownloadOutputDraft={downloadOutputDraft}
            onDownloadOutputPackageZip={downloadOutputPackageZip}
            onRemoveKeyQuestionBlock={removeOutputKeyQuestionBlock}
            onSaveOutputDrafts={saveOutputDrafts}
            onUpdateInput={updateOutputInput}
            onUpdateKeyQuestionBlock={updateOutputKeyQuestionBlock}
            onUpdateTeacherDraft={updateOutputTeacherDraft}
            outputDrafts={outputDrafts}
            outputStatus={outputStatus}
          />

          <div className="panel examAnalysisStepPanel">
            <div className="sectionHeader slim">
              <div>
                <strong>진행 단계</strong>
                <span>{activeRun ? workflowStatusLabel(activeRun.workflowStatus) : "대기"}</span>
              </div>
            </div>
            <div className="examAnalysisSteps">
              {[
                ["source_uploaded", "PDF 저장"],
                ["source_extracted", "텍스트/페이지 추출"],
                ["question_count_detected", "문항 수 판독"],
                ["question_count_confirmed", "선생님 확인"],
                ["rows_created", "1~N 행 고정"],
                ["boundary_detected", "문항 경계"],
                ["ai_filled", "AI 행 채움"],
                ["teacher_review", "선생님 검수"],
                ["completed", "최종 확정"]
              ].map(([status, label]) => (
                <span
                  className={
                    activeRun?.workflowStatus === status ||
                    (status === "boundary_detected" && boundaryDetection) ||
                    (status === "ai_filled" && rowFill) ||
                    (status === "teacher_review" && teacherReview)
                      ? "active"
                      : ""
                  }
                  key={status}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="panel examAnalysisEventPanel">
            <div className="sectionHeader slim">
              <div>
                <strong>저장 이벤트</strong>
                <span>{events.length}건</span>
              </div>
            </div>
            <div className="examAnalysisEventList">
              {events.length === 0 ? (
                <div className="emptyState compact">이벤트 없음</div>
              ) : events.slice(0, 8).map((event) => (
                <div className="examAnalysisEventItem" key={event.eventId}>
                  <strong>{event.message || event.eventType}</strong>
                  <span title={event.createdAt ? formatKoreaTimeLabel(event.createdAt) : ""}>{formatExamAnalysisEventTime(event.createdAt)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function Sidebar({ activeView, isCollapsed, onChangeView, onLogout, onToggle }) {
  const menuGroups = [
    {
      title: "Lesson Hub",
      items: [
        { id: "lessons", label: "수업일지", icon: "📓" },
        { id: "overdue", label: "숙제현황", icon: "📊" },
        { id: "followups", label: "오답관리", icon: "✕" },
        { id: "supplements", label: "보충관리", icon: "↪" },
        { id: "materials", label: "교재관리", icon: "📚" },
        { id: "resources", label: "자료함", icon: "📁" }
      ]
    },
    {
      title: "학생",
      items: [
        { id: "students", label: "학생관리", icon: "👥" },
        { id: "classes", label: "반관리", icon: "🏫" }
      ]
    },
    {
      title: "시험",
      items: [
        { id: "examPrep", label: "시험관리", icon: "📋" },
        { id: "examAnalysisPipeline", label: "시험분석", icon: "🧾" },
        { id: "schoolCalendar", label: "학사일정", icon: "🗓️" }
      ]
    },
    {
      title: "연구실",
      items: [
        { id: "lessonResearch", label: "수업연구", icon: "📚" },
        { id: "aiVariants", label: "AI 도구", icon: "✨" }
      ]
    },
    {
      title: "시스템",
      items: [
        { id: "notifications", label: "알림관리", icon: "📣" },
        { id: "settings", label: "설정", icon: "⚙️" }
      ]
    }
  ];

  return (
    <aside className={isCollapsed ? "sidebar collapsed" : "sidebar"}>
      <div className="brandBlock">
        <div className="brandHeader">
          <span className="brandMark">KYM</span>
          <button
            aria-label={isCollapsed ? "좌측 메뉴 펼치기" : "좌측 메뉴 접기"}
            className="sidebarToggle"
            onClick={onToggle}
            type="button"
          >
            {isCollapsed ? "›" : "‹"}
          </button>
        </div>
        <strong>{academyBrandName}</strong>
        <span>고태영T Lesson OS</span>
      </div>
      <nav className="sideNav">
        {menuGroups.map((group) => (
          <div className="sideGroup" key={group.title}>
            <p>{group.title}</p>
            {group.items.map((item) => (
              <button
                className={activeView === item.id ? "active" : ""}
                key={item.id}
                onClick={() => onChangeView(item.id)}
                title={isCollapsed ? item.label : undefined}
                type="button"
              >
                <span>{item.icon}</span>
                <b>{item.label}</b>
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className="sideStatus">
        <span>접속 중 1명</span>
        <strong>{today}</strong>
        <button className="logoutButton" onClick={onLogout} type="button">로그아웃</button>
      </div>
    </aside>
  );
}

function LoginScreen({ students, onLogin }) {
  const [role, setRole] = useState("student");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function selectRole(nextRole) {
    setRole(nextRole);
    setError("");
    setLoginId("");
    setPassword("");
  }

  async function submit(event) {
    event.preventDefault();
    const result = await onLogin(role, loginId.trim(), password.trim());
    if (!result.ok) setError(result.message);
  }

  const roleLabels = {
    student: "학생",
    parent: "학부모",
    teacher: "선생님"
  };

  return (
    <main className="loginPage">
      <form className="loginCard" onSubmit={submit}>
        <button className="loginClose" type="button">×</button>
        <p className="loginEyebrow">{academyBrandName}</p>
        <h1>로그인</h1>
        <div className="loginTabs">
          {["student", "parent", "teacher"].map((item) => (
            <button className={role === item ? "active" : ""} key={item} onClick={() => selectRole(item)} type="button">
              {roleLabels[item]}
            </button>
          ))}
        </div>
        <p className="muted">
          {role === "student" ? "학생은 학원 번호를 붙여 로그인합니다." : null}
          {role === "parent" ? "학부모는 자녀 계정과 연결된 보호자 계정으로 로그인합니다." : null}
          {role === "teacher" ? "선생님은 운영자 계정으로 로그인합니다." : null}
        </p>
        <input value={loginId} onChange={(event) => setLoginId(event.target.value)} placeholder="아이디" />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="비밀번호" />
        {error ? <div className="loginError">{error}</div> : null}
        <button className="primaryButton full" type="submit">{roleLabels[role]} 로그인</button>
      </form>
    </main>
  );
}

function RoleLoginScreen({ initialRole = "student", onLogin }) {
  const [role, setRole] = useState(initialRole);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const roleLabels = {
    student: "학생",
    parent: "학부모",
    teacher: "선생님"
  };

  function selectRole(nextRole) {
    setRole(nextRole);
    setLoginId("");
    setPassword("");
    setError("");
  }

  async function submit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await onLogin(role, loginId.trim(), password.trim());
      if (!result.ok) {
        setError(result.message);
        return;
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="loginPage">
      <form className="loginCard" onSubmit={submit}>
        <button className="loginClose" type="button">x</button>
        <p className="loginEyebrow">{academyBrandName}</p>
        <h1>로그인</h1>
        <div className="loginTabs">
          {["student", "parent", "teacher"].map((item) => (
            <button
              className={role === item ? "active" : ""}
              key={item}
              onClick={() => selectRole(item)}
              type="button"
            >
              {roleLabels[item]}
            </button>
          ))}
        </div>
        <p className="muted">
          {role === "student" ? "학생 본인 계정으로 입장합니다." : null}
          {role === "parent" ? "학부모 열람 계정으로 입장합니다." : null}
          {role === "teacher" ? "강사 운영 화면으로 입장합니다." : null}
        </p>
        <input value={loginId} onChange={(event) => setLoginId(event.target.value)} placeholder="아이디" />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="비밀번호"
        />
        {error ? <div className="loginError">{error}</div> : null}
        <button className="primaryButton full" disabled={isSubmitting} type="submit">
          {isSubmitting ? "확인 중" : `${roleLabels[role]} 로그인`}
        </button>
      </form>
    </main>
  );
}

function TeacherLessonHubV2({
  academyTests = [],
  aiSettings,
  allRecords = [],
  generatedLessonControls = defaultGeneratedLessonControls,
  integrationStatus,
  lessonNotificationPlans = {},
  clipboardCount,
  lessons,
  makeupTasks = [],
  materials = [],
  notificationJobs = [],
  records,
  saveStates,
  selectedDate,
  selectedLesson,
  selectedLessonId,
  students,
  homeworks,
  onAddLesson,
  onApplyBulkHomework,
  onBackToCalendar,
  onChangeRecord,
  onCopyLesson,
  onDateSelect,
  onDeleteLesson,
  onDeleteSelectedLesson,
  onEditLesson,
  onMoveDate,
  onOpenAttendance,
  onOpenExamPrep,
  onOpenLessonJournal,
  onOpenReport,
  onPasteLesson,
  onPassMakeupTask,
  onPolishComment,
  onPolishPreparationNotice,
  onSaveRecord,
  onScheduleLessonNotificationsAt,
  onSendComment,
  onSelectLesson,
  onUndoLessonAction,
  onUpdateExamSundayMakeupBlocks,
  onUpdateHomework,
  onUpdateLessonNotificationPlan,
  onUpdateMakeupTask,
  onToggleStudentNotificationMute,
  undoCount,
  isLessonJournalOpen
}) {
  const [lessonTypeFilter, setLessonTypeFilter] = useState("all");
  useEffect(() => {
    function isEditableTarget(target) {
      const tagName = target?.tagName?.toLowerCase();
      return tagName === "input" || tagName === "textarea" || tagName === "select" || target?.isContentEditable;
    }

    function handleKeyDown(event) {
      if (isLessonJournalOpen || isEditableTarget(event.target)) return;
      const key = event.key.toLowerCase();
      const isControl = event.ctrlKey || event.metaKey;

      if (isControl && key === "c") {
        event.preventDefault();
        onCopyLesson();
        return;
      }
      if (isControl && key === "v") {
        event.preventDefault();
        onPasteLesson();
        return;
      }
      if (isControl && key === "z") {
        event.preventDefault();
        onUndoLessonAction();
        return;
      }
      if (event.key === "Delete") {
        event.preventDefault();
        onDeleteSelectedLesson();
        return;
      }
      if (event.key === "Enter" && selectedLessonId) {
        event.preventDefault();
        onOpenLessonJournal(selectedLessonId);
        return;
      }
      const movementMap = {
        ArrowLeft: -1,
        ArrowRight: 1,
        ArrowUp: -7,
        ArrowDown: 7
      };
      if (movementMap[event.key]) {
        event.preventDefault();
        onMoveDate(movementMap[event.key]);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isLessonJournalOpen,
    onCopyLesson,
    onDeleteSelectedLesson,
    onMoveDate,
    onOpenLessonJournal,
    onPasteLesson,
    onUndoLessonAction,
    selectedLessonId
  ]);

  const selectedMakeupTask = selectedLesson
    ? makeupTasks.find((task) => task.makeupTaskId === selectedLesson.sourceMakeupTaskId)
    : null;
  const selectedSourceLesson = selectedLesson?.sourceLessonId
    ? lessons.find((lesson) => lesson.lessonId === selectedLesson.sourceLessonId) ?? selectedLesson
    : selectedLesson;
  const isHomeworkMakeupLesson = isHomeworkMakeupTaskLesson(selectedLesson, selectedMakeupTask);
  const isExamSundayMakeupLesson = selectedLesson?.lessonType === "examSundayMakeup";
  const lessonJournalDialog = isLessonJournalOpen && selectedLesson ? (
    isHomeworkMakeupLesson ? (
      <Modal
        backdropClassName="homeworkMakeupModalBackdrop"
        className="homeworkMakeupScheduleModal"
        title="숙제보충 일정"
        subtitle="일반 수업일지가 아니라, 미완료 숙제 보충 정보를 확인하는 전용 화면입니다."
        onClose={onBackToCalendar}
      >
        <HomeworkMakeupLessonDetail
          homeworks={homeworks}
          lesson={selectedLesson}
          lessons={lessons}
          onDeleteLesson={onDeleteLesson}
          onEditLesson={onEditLesson}
          onPassTask={onPassMakeupTask}
          onUpdateTask={onUpdateMakeupTask}
          students={students}
          task={selectedMakeupTask}
        />
      </Modal>
    ) : isExamSundayMakeupLesson ? (
      <Modal
        backdropClassName="homeworkMakeupModalBackdrop"
        className="homeworkMakeupScheduleModal examSundayMakeupModal"
        title="일요시험보강"
        subtitle="시험기간 전 학교별 보강 타임테이블을 한 수업 안에서 확인합니다."
        onClose={onBackToCalendar}
      >
        <ExamSundayMakeupLessonDetail
          lesson={selectedSourceLesson}
          blocksOverride={generatedLessonControls.sundayMakeupBlocks?.[getGeneratedLessonKey(selectedSourceLesson)]}
          displayLesson={selectedLesson}
          focusBlockId={selectedLesson?.virtualBlockId}
          onDeleteLesson={onDeleteLesson}
          onEditLesson={onEditLesson}
          onUpdateBlocks={(blocks) => onUpdateExamSundayMakeupBlocks?.(getGeneratedLessonKey(selectedSourceLesson), blocks)}
        />
      </Modal>
    ) : (
      <Modal
        backdropClassName="lessonJournalModalBackdrop"
        className="lessonJournalModal"
        hideHeader
        onClose={onBackToCalendar}
      >
        <LessonJournalErrorBoundary
          key={selectedLesson.lessonId}
          fallback={(error) => (
            <LessonJournalFallback
              error={error}
              lesson={selectedLesson}
              onBack={onBackToCalendar}
              onDeleteLesson={onDeleteLesson}
              onEditLesson={onEditLesson}
              students={students}
            />
          )}
        >
          <LessonJournalDetail
            academyTests={academyTests}
            aiSettings={aiSettings}
            allRecords={allRecords}
            generatedLessonControls={generatedLessonControls}
            integrationStatus={integrationStatus}
            lessonNotificationPlan={lessonNotificationPlans[selectedLesson.lessonId] ?? { mode: "default" }}
            notificationJobs={notificationJobs}
            homeworks={homeworks}
            lesson={selectedLesson}
            lessons={lessons}
            materials={materials}
            makeupTasks={makeupTasks}
            onApplyBulkHomework={onApplyBulkHomework}
            onBack={onBackToCalendar}
            onChangeRecord={onChangeRecord}
            onDeleteLesson={onDeleteLesson}
            onEditLesson={onEditLesson}
            onOpenAttendance={onOpenAttendance}
            onOpenExamPrep={onOpenExamPrep}
            onOpenReport={onOpenReport}
            onPassMakeupTask={onPassMakeupTask}
            onPolishComment={onPolishComment}
            onPolishPreparationNotice={onPolishPreparationNotice}
            onSaveRecord={onSaveRecord}
            onScheduleLessonNotificationsAt={onScheduleLessonNotificationsAt}
            onSendComment={onSendComment}
            onUpdateExamSundayMakeupBlocks={onUpdateExamSundayMakeupBlocks}
            onUpdateHomework={onUpdateHomework}
            onUpdateLessonNotificationPlan={onUpdateLessonNotificationPlan}
            onUpdateMakeupTask={onUpdateMakeupTask}
            onToggleStudentNotificationMute={onToggleStudentNotificationMute}
            records={records}
            saveStates={saveStates}
            students={students}
          />
        </LessonJournalErrorBoundary>
      </Modal>
    )
  ) : null;
  const lessonTypeFilterOptions = [
    { id: "all", label: "전체" },
    { id: "regular", label: "정규수업" },
    { id: "preExam", label: "직전수업" },
    { id: "makeup", label: "보충수업" },
    { id: "examSundayMakeup", label: "일요보강" }
  ];
  const visibleLessons = lessons.filter((lesson) => {
    if (!shouldDisplayExamSundayMakeupSourceLesson(lesson, generatedLessonControls)) return false;
    if (lessonTypeFilter === "all") return true;
    if (lessonTypeFilter === "regular") return !["preExam", "makeup", "examSundayMakeup"].includes(lesson.lessonType);
    return lesson.lessonType === lessonTypeFilter;
  });
  const visibleLessonCount = visibleLessons.filter((lesson) => lesson.date.slice(0, 7) === selectedDate.slice(0, 7)).length;

  return (
    <>
      <header className="pageTop teacherCalendarTop">
        <button className="iconButton" onClick={() => onMoveDate(-30)} type="button">‹</button>
        <h1>{formatMonthTitle(selectedDate)}</h1>
        <button className="iconButton" onClick={() => onMoveDate(30)} type="button">›</button>
        <div className="lessonTypeFilterBar" aria-label="수업일지 일정 종류 필터">
          {lessonTypeFilterOptions.map((option) => (
            <button
              className={lessonTypeFilter === option.id ? "active" : ""}
              key={option.id}
              onClick={() => setLessonTypeFilter(option.id)}
              type="button"
            >
              {option.label}
            </button>
          ))}
          <span>{visibleLessonCount}개</span>
        </div>
        <button className="primaryButton" onClick={onAddLesson} type="button">+ 수업 등록</button>
      </header>

      <section className="calendarShell teacherCalendarShell">
        <div className="calendarGrid teacherCalendarGrid">
          {["일", "월", "화", "수", "목", "금", "토"].map((label) => (
            <div className="weekday" key={label}>{label}</div>
          ))}
          {buildMonthDays(selectedDate).map((day) => {
            const dayLessons = visibleLessons.filter((lesson) => lesson.date === day.date).sort(sortByTime);
            return (
              <div
                className={[
                  "monthCell",
                  "teacherMonthCell",
                  day.inMonth ? "" : "outside",
                  selectedDate === day.date ? "selected" : ""
                ].join(" ")}
                key={day.date}
                onClick={() => onDateSelect(day.date)}
              >
                <span className="dayNumber">{day.dayNumber}</span>
                <span className="cellPlus">+</span>
                <span className="lessonPills">
                  {dayLessons.map((lesson) => {
                    const sundayMakeupSourceLabel = getExamSundayMakeupVisibleSourceLabel(lesson, generatedLessonControls);
                    return (
                      <button
                        className={[
                          "lessonPill",
                          lesson.lessonId === selectedLessonId ? "active" : "",
                          lesson.lessonType === "preExam" ? "preExamLessonPill" : "",
                          lesson.lessonType === "makeup" ? "makeupLessonPill" : "",
                          lesson.lessonType === "examSundayMakeup" ? "sundayMakeupLessonPill" : "",
                          lesson.isVirtualSundayMakeupBlock ? "blockMoved" : ""
                        ].filter(Boolean).join(" ")}
                        key={lesson.lessonId}
                        onClick={(event) => {
                          event.stopPropagation();
                          onOpenLessonJournal(lesson.lessonId);
                        }}
                        style={{ background: lesson.color }}
                        type="button"
                      >
                        {lesson.startTime} {lesson.isVirtualSundayMakeupBlock ? lesson.virtualBlockLabel || lesson.lessonTopic : lesson.className}
                        {lesson.isVirtualSundayMakeupBlock
                          ? lesson.virtualBlockMemo ? ` · ${lesson.virtualBlockMemo}` : " · 이동"
                          : lesson.lessonType === "examSundayMakeup"
                          ? sundayMakeupSourceLabel ? ` · ${sundayMakeupSourceLabel}` : ""
                          : ` (${getLessonStudentIds(lesson).length}명)`}
                      </button>
                    );
                  })}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      {lessonJournalDialog}
    </>
  );
}

function parseExamSundayMakeupBlocks(lesson, blocksOverride = null) {
  if (Array.isArray(blocksOverride) && blocksOverride.length > 0) {
    return blocksOverride.map((block, index) => ({
      blockId: block.blockId || `${lesson.lessonId || lesson.sourceSchoolEventId || lesson.date}_block_${index}`,
      date: block.date || lesson.date,
      endTime: block.endTime || addMinutesToTime(block.startTime || lesson.startTime || "13:00", 90),
      label: block.label || "학교별 보강 타임테이블 미입력",
      memo: block.memo || "",
      startTime: block.startTime || lesson.startTime || "13:00"
    }));
  }
  const labels = String(lesson.sourceLabel || "")
    .split("·")
    .map((label) => label.trim())
    .filter(Boolean);
  const startTime = lesson.startTime || "13:00";
  const blockMinutes = labels.length > 3 ? 60 : 90;
  const blockLabels = labels.length ? labels : ["학교별 보강 타임테이블 미입력"];

  return blockLabels.map((label, index) => ({
    blockId: `${lesson.lessonId || lesson.sourceSchoolEventId || lesson.date}_block_${index}`,
    date: lesson.date,
    endTime: addMinutesToTime(startTime, (index + 1) * blockMinutes),
    label,
    memo: "",
    startTime: addMinutesToTime(startTime, index * blockMinutes)
  }));
}

function getExamSundayMakeupVisibleSourceLabel(lesson, controls = defaultGeneratedLessonControls) {
  if (lesson?.lessonType !== "examSundayMakeup" || lesson.isVirtualSundayMakeupBlock) {
    return lesson?.sourceLabel || "";
  }
  const safeControls = normalizeGeneratedLessonControls(controls);
  const generatedKey = getGeneratedLessonKey(lesson);
  const blocksOverride = safeControls.sundayMakeupBlocks?.[generatedKey];
  if (!Array.isArray(blocksOverride) || blocksOverride.length === 0) {
    return lesson.sourceLabel || "";
  }
  return parseExamSundayMakeupBlocks(lesson, blocksOverride)
    .filter((block) => (block.date || lesson.date) === lesson.date)
    .map((block) => block.label)
    .filter(Boolean)
    .join(" · ");
}

function shouldDisplayExamSundayMakeupSourceLesson(lesson, controls = defaultGeneratedLessonControls) {
  if (lesson?.lessonType !== "examSundayMakeup" || lesson.isVirtualSundayMakeupBlock) return true;
  const safeControls = normalizeGeneratedLessonControls(controls);
  const generatedKey = getGeneratedLessonKey(lesson);
  const blocksOverride = safeControls.sundayMakeupBlocks?.[generatedKey];
  if (!Array.isArray(blocksOverride) || blocksOverride.length === 0) return true;
  return parseExamSundayMakeupBlocks(lesson, blocksOverride).some((block) => (block.date || lesson.date) === lesson.date);
}

function createExamSundayMakeupBlockLessons(lessons = [], controls = defaultGeneratedLessonControls) {
  const safeControls = normalizeGeneratedLessonControls(controls);
  return lessons
    .filter((lesson) => lesson.lessonType === "examSundayMakeup")
    .flatMap((lesson) => {
      const generatedKey = getGeneratedLessonKey(lesson);
      const blocksOverride = safeControls.sundayMakeupBlocks?.[generatedKey];
      if (!Array.isArray(blocksOverride) || blocksOverride.length === 0) return [];
      return parseExamSundayMakeupBlocks(lesson, blocksOverride)
        .filter((block) => {
          const blockDate = block.date || lesson.date;
          return blockDate !== lesson.date;
        })
        .map((block) => ({
          ...lesson,
          className: "일요시험보강",
          date: block.date || lesson.date,
          dayOfWeek: getDayKey(block.date || lesson.date),
          endTime: block.endTime || lesson.endTime,
          isVirtualSundayMakeupBlock: true,
          lessonId: `${lesson.lessonId || safeIdPart(generatedKey)}__block_${safeIdPart(block.blockId)}`,
          lessonTopic: block.label || lesson.lessonTopic || "일요시험보강",
          sourceLessonId: lesson.lessonId,
          sourceLabel: block.label || lesson.sourceLabel,
          startTime: block.startTime || lesson.startTime,
          virtualBlockId: block.blockId,
          virtualBlockLabel: block.label || "",
          virtualBlockMemo: block.memo || ""
        }));
    });
}

function ExamSundayMakeupLessonDetail({
  blocksOverride,
  displayLesson,
  focusBlockId = "",
  lesson,
  onDeleteLesson,
  onEditLesson,
  onUpdateBlocks
}) {
  const [draftBlocks, setDraftBlocks] = useState(() => parseExamSundayMakeupBlocks(lesson, blocksOverride));
  const [blockSaveState, setBlockSaveState] = useState("saved");
  useEffect(() => {
    setDraftBlocks(parseExamSundayMakeupBlocks(lesson, blocksOverride));
    setBlockSaveState("saved");
  }, [blocksOverride, lesson]);
  const blocks = draftBlocks;
  const currentBlock = focusBlockId ? blocks.find((block) => block.blockId === focusBlockId) : null;
  const isFocusedMovedBlock = Boolean(displayLesson?.isVirtualSundayMakeupBlock && currentBlock);
  const displayedBlocks = isFocusedMovedBlock
    ? [currentBlock]
    : blocks.filter((block) => (block.date || lesson.date) === lesson.date);
  const scheduledTime = `${lesson.date} ${lesson.startTime || ""}${lesson.endTime ? `-${lesson.endTime}` : ""}`.trim();
  const displayedTime = displayLesson && displayLesson.lessonId !== lesson.lessonId
    ? `${displayLesson.date} ${displayLesson.startTime || ""}${displayLesson.endTime ? `-${displayLesson.endTime}` : ""}`.trim()
    : "";
  const hasBlockSave = Boolean(onUpdateBlocks);
  const blockSaveLabel = {
    dirty: "변경됨 · 블록 저장 필요",
    saved: "저장됨 · Supabase 자동 반영",
    saving: "저장 중"
  }[blockSaveState] ?? "저장 전";

  function updateBlock(blockId, field, value) {
    setDraftBlocks((current) => current.map((block) => (block.blockId === blockId ? { ...block, [field]: value } : block)));
    setBlockSaveState("dirty");
  }

  function deleteBlock(blockId) {
    setDraftBlocks((current) => {
      if (current.length <= 1) {
        window.alert("마지막 블록은 삭제할 수 없습니다. 전체 일정을 삭제하려면 일정 삭제를 사용하세요.");
        return current;
      }
      setBlockSaveState("dirty");
      return current.filter((block) => block.blockId !== blockId);
    });
  }

  function resetBlocks() {
    const defaultBlocks = parseExamSundayMakeupBlocks(lesson);
    setDraftBlocks(defaultBlocks);
    setBlockSaveState("saving");
    onUpdateBlocks?.(defaultBlocks);
    setBlockSaveState("saved");
  }

  function saveBlocks() {
    setBlockSaveState("saving");
    onUpdateBlocks?.(draftBlocks);
    setBlockSaveState("saved");
  }

  return (
    <div className="examSundayMakeupBody">
      <div className="examSundaySummaryGrid">
        <div>
          <span>수업일</span>
          <strong>{currentBlock?.date || displayLesson?.date || lesson.date}</strong>
          <small>{displayedTime ? "이동된 학교별 블록" : "일요시험보강"}</small>
        </div>
        <div>
          <span>전체 시간</span>
          <strong>{currentBlock ? `${currentBlock.startTime}-${currentBlock.endTime}` : `${lesson.startTime || "미정"}-${lesson.endTime || "미정"}`}</strong>
          <small>{displayedTime || "학교별 블록은 아래에서 확인"}</small>
        </div>
        <div>
          <span>보강 학교</span>
          <strong>{displayedBlocks.length}개</strong>
          <small>{lesson.status === "canceled" ? "취소됨" : "진행 예정"}</small>
        </div>
      </div>

      <section className="panel examSundayPanel">
        <div className="sectionHeader slim">
          <div>
            <span className="eyebrow">자동 생성 수업</span>
            <h3>{lesson.lessonTopic || lesson.className || "일요시험보강"}</h3>
            <p className="muted">
              시험기간 기준으로 자동 생성된 후보입니다. 실제 시간표가 다르면 일정 수정에서 날짜와 전체 시간을 먼저 조정합니다.
            </p>
          </div>
          <div className="examSundayActions">
            <button className="ghostButton" onClick={() => onEditLesson(lesson)} type="button">
              일정 수정
            </button>
            <button className="dangerButton" onClick={() => onDeleteLesson(lesson.lessonId)} type="button">
              일정 삭제
            </button>
          </div>
        </div>

        <div className="examSundayBlockList" aria-label="학교별 일요시험보강 블록">
          {displayedBlocks.map((block) => (
            <div
              className={["examSundayBlockItem", block.blockId === focusBlockId ? "focused" : ""].filter(Boolean).join(" ")}
              key={block.blockId}
            >
              <div className="examSundayBlockTimeFields">
                <input
                  aria-label="블록 날짜"
                  onChange={(event) => updateBlock(block.blockId, "date", event.target.value)}
                  type="date"
                  value={block.date || lesson.date}
                />
                <div>
                  <input
                    aria-label="블록 시작 시간"
                    onChange={(event) => updateBlock(block.blockId, "startTime", event.target.value)}
                    type="time"
                    value={block.startTime}
                  />
                  <input
                    aria-label="블록 종료 시간"
                    onChange={(event) => updateBlock(block.blockId, "endTime", event.target.value)}
                    type="time"
                    value={block.endTime}
                  />
                </div>
              </div>
              <div>
                <input
                  aria-label="학교별 보강명"
                  className="examSundayBlockTitleInput"
                  onChange={(event) => updateBlock(block.blockId, "label", event.target.value)}
                  value={block.label}
                />
                <textarea
                  aria-label="보강 메모"
                  onChange={(event) => updateBlock(block.blockId, "memo", event.target.value)}
                  placeholder="예: 창동고1 대수 집중, 정의여고는 오답 20문항 점검"
                  value={block.memo}
                />
                <small>{scheduledTime}</small>
              </div>
              <div className="examSundayBlockActions">
                <span>시험 대비</span>
                <button className="dangerSoftButton compact" onClick={() => deleteBlock(block.blockId)} type="button">
                  블록 삭제
                </button>
              </div>
            </div>
          ))}
        </div>
        {hasBlockSave ? (
          <div className={`examSundaySaveBar ${blockSaveState}`}>
            <span>{blockSaveLabel}</span>
            <div>
              <button className="softButton compact" onClick={resetBlocks} type="button">
                자동값 복구
              </button>
              <button className="primaryButton compact" onClick={saveBlocks} type="button">
                블록 저장
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

function HomeworkMakeupLessonDetail({
  homeworks = [],
  lesson,
  lessons = [],
  onDeleteLesson,
  onEditLesson,
  onPassTask,
  onUpdateTask,
  students = [],
  task
}) {
  const [passConfirmMode, setPassConfirmMode] = useState("");
  const lessonStudents = (lesson.studentIds ?? [])
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter(Boolean);
  const student = lessonStudents[0] ?? students.find((item) => item.studentId === task?.studentId);
  const targetHomework =
    homeworks.find((homework) => homework.homeworkId === task?.sourceId) ??
    homeworks.find(
      (homework) =>
        homework.studentId === student?.studentId &&
        homework.title === (task?.sourceLabel ?? lesson.sourceLabel)
    );
  const sourceLesson = targetHomework?.lessonId
    ? lessons.find((item) => item.lessonId === targetHomework.lessonId)
    : null;
  const sourceDate =
    sourceLesson?.date ??
    targetHomework?.assignedDate ??
    targetHomework?.startDate ??
    targetHomework?.date ??
    "기록 없음";
  const dueDate = targetHomework?.dueDate ?? targetHomework?.endDate ?? "기록 없음";
  const sourceLessonLabel = sourceLesson?.className ?? sourceLesson?.lessonTopic ?? "원 수업 기록";
  const targetTitle =
    getSupplementTaskSourceLabel(task) ||
    targetHomework?.title ||
    lesson.sourceLabel ||
    "보충 대상 숙제";
  const originalHomeworkTitle = targetHomework?.title || task?.sourceLabel || lesson.sourceLabel || "";
  const originalHomeworkHint =
    originalHomeworkTitle && originalHomeworkTitle !== targetTitle ? `원본 숙제명: ${originalHomeworkTitle}` : sourceLessonLabel;
  const methodLabel = task ? supplementMethodLabel(task) : "방식 미정";
  const statusLabel =
    task?.status === "done" ? "보충 완료" : task?.status === "scheduled" ? "일정 확정" : "일정 미확정";
  const assignmentCount = task?.assignmentCount ?? task?.attemptCount ?? 0;
  const scheduledText = `${lesson.date} ${lesson.startTime || ""}`.trim();
  const confirmedText = task?.lastScheduledAt ? formatKoreanDateTime(task.lastScheduledAt) : "확정 기록 없음";
  const processStatus = task?.supplementProcessStatus || (task?.status === "done" ? "completed" : "in_progress");
  const processMemo = task?.supplementProgressMemo || "";
  const nextSupplementPlan = task?.nextSupplementPlan || "";

  function updateTaskField(field, value) {
    if (!task?.makeupTaskId || !onUpdateTask) return;
    onUpdateTask(task.makeupTaskId, field, value);
  }

  function handleProcessStatusChange(nextStatus) {
    updateTaskField("supplementProcessStatus", nextStatus);
    if (nextStatus === "needs_more") {
      updateTaskField("status", "scheduled");
    }
  }

  function confirmPassTask() {
    if (!task || !onPassTask) return;
    const completedMemo = [
      processMemo,
      passConfirmMode === "needs_more" && nextSupplementPlan ? `추가 보충 필요: ${nextSupplementPlan}` : ""
    ].filter(Boolean).join("\n");
    onPassTask({
      ...task,
      supplementProcessStatus: passConfirmMode === "needs_more" ? "needs_more" : "completed",
      supplementProgressMemo: completedMemo,
      nextSupplementPlan: passConfirmMode === "needs_more" ? nextSupplementPlan : task.nextSupplementPlan || "",
      completionDecision: passConfirmMode === "needs_more" ? "needs_more" : "completed"
    });
    setPassConfirmMode("");
  }

  return (
    <div className="homeworkMakeupModalBody">
      <div className="homeworkMakeupSummary">
        <div>
          <span>대상 학생</span>
          <strong>{student?.name ?? "미확인"}</strong>
          <small>{student?.grade ?? "-"} · {student?.schoolName ?? student?.school ?? "학교 미입력"}</small>
        </div>
        <div>
          <span>해야 했던 날짜</span>
          <strong>{dueDate}</strong>
          <small>{sourceDate} 배정</small>
        </div>
        <div>
          <span>안 한 숙제 내용</span>
          <strong>{targetTitle}</strong>
          <small>{originalHomeworkHint}</small>
        </div>
        <div>
          <span>보충 확정 일정</span>
          <strong>{scheduledText}</strong>
          <small>확정 처리: {confirmedText}</small>
        </div>
      </div>

      <div className="homeworkMakeupModalActions">
        <span className="statusPill">{statusLabel}</span>
        <div>
          <button className="ghostButton" type="button" onClick={() => onEditLesson(lesson)}>
            일정 수정
          </button>
          <button className="dangerButton" type="button" onClick={() => onDeleteLesson(lesson.lessonId)}>
            일정 삭제
          </button>
        </div>
      </div>

      <section className="panel homeworkMakeupTarget">
        <div className="sectionHeader">
          <div>
            <span className="eyebrow">보충 대상 숙제</span>
            <h2>{targetTitle}</h2>
            <p>
              {student?.name ?? "학생 미확인"} 학생이 {dueDate}까지 끝냈어야 하는 숙제입니다.
              보충은 {scheduledText}에 진행됩니다.
            </p>
            {originalHomeworkTitle && originalHomeworkTitle !== targetTitle ? (
              <small className="makeupOriginalHomework">수업일지 원본 숙제명: {originalHomeworkTitle}</small>
            ) : null}
          </div>
        </div>
        <div className="makeupInfoGrid">
          <div className="makeupInfoTile">
            <span>대상 학생</span>
            <strong>{student?.name ?? "미확인"}</strong>
            <small>
              {student?.grade ?? "-"} · {student?.schoolName ?? student?.school ?? "-"}
            </small>
          </div>
          <div className="makeupInfoTile">
            <span>원 수업일자</span>
            <strong>{sourceDate}</strong>
            <small>{sourceLessonLabel}</small>
          </div>
          <div className="makeupInfoTile">
            <span>숙제 마감일</span>
            <strong>{dueDate}</strong>
            <small>{assignmentCount ? `배정 ${assignmentCount}회` : "배정 기록 확인"}</small>
          </div>
          <div className="makeupInfoTile">
            <span>보충 확정일</span>
            <strong>{scheduledText}</strong>
            <small>확정 처리: {confirmedText}</small>
          </div>
          <div className="makeupInfoTile">
            <span>보충 방식</span>
            <strong>{methodLabel}</strong>
            <small>{task?.reason ?? "숙제보충"}</small>
          </div>
        </div>
      </section>

      <div className="homeworkMakeupHero">
        <section className="panel homeworkMakeupNotice">
          <h3>보충 대상</h3>
          <div className="makeupLinkedBox">
            <span>보충 대상</span>
            <strong>{targetTitle}</strong>
            <small>원 수업일자: {sourceDate} · 마감일: {dueDate}</small>
          </div>
        </section>
        <section className="panel homeworkMakeupProcess">
          <div className="sectionHeader slim">
            <div>
              <h3>보충 처리</h3>
              <p className="muted">오늘 무엇을 보충했고, 남은 보충이 있는지 기록합니다.</p>
            </div>
          </div>
          <div className="makeupProcessStatusGrid">
            {[
              { id: "in_progress", label: "진행 중", description: "보충을 진행했지만 아직 완료 판단 전" },
              { id: "needs_more", label: "추가 보충 필요", description: "오늘 다 끝나지 않아 다음 보충이 필요" },
              { id: "completed", label: "보충 완료", description: "이번 보충 항목을 통과 처리 가능" }
            ].map((option) => (
              <button
                className={processStatus === option.id ? "active" : ""}
                key={option.id}
                onClick={() => handleProcessStatusChange(option.id)}
                type="button"
              >
                <strong>{option.label}</strong>
                <span>{option.description}</span>
              </button>
            ))}
          </div>
          <div className="makeupProcessFormGrid">
            <label className="makeupProcessField">
              보충 진행 메모
              <textarea
                value={processMemo}
                onChange={(event) => updateTaskField("supplementProgressMemo", event.target.value)}
                placeholder="예: 쎈 오답 5문항 중 3문항 풀이 완료. 나머지 2문항은 계산 실수 반복으로 추가 확인 필요."
              />
            </label>
            <label className="makeupProcessField">
              추가 보충 내용
              <textarea
                value={nextSupplementPlan}
                onChange={(event) => updateTaskField("nextSupplementPlan", event.target.value)}
                placeholder="추가 보충이 필요할 때 다음에 진행할 숙제/문항/범위를 적어주세요."
              />
            </label>
          </div>
          <div className="makeupProcessActions">
            <button className="softButton" onClick={() => setPassConfirmMode("needs_more")} type="button">
              추가 보충 필요로 기록
            </button>
            <button className="passButton" disabled={!task || task.status === "done"} onClick={() => setPassConfirmMode("completed")} type="button">
              보충 완료 처리
            </button>
          </div>
        </section>
      </div>
      {passConfirmMode ? (
        <Modal
          className="supplementPassConfirmModal"
          title={passConfirmMode === "needs_more" ? "추가 보충 필요 기록" : "보충 완료 처리"}
          subtitle="처리 내용은 보충관리 이력에 남습니다."
          onClose={() => setPassConfirmMode("")}
        >
          <div className="supplementPassConfirmBody">
            <p>
              <strong>{student?.name ?? "학생"}</strong> 학생의 보충을
              {passConfirmMode === "needs_more" ? " 추가 보충 필요 상태로 기록할까요?" : " 완료 처리할까요?"}
            </p>
            <dl className="supplementPassConfirmSummary">
              <div>
                <dt>보충 대상</dt>
                <dd>{targetTitle}</dd>
              </div>
              <div>
                <dt>진행 메모</dt>
                <dd>{processMemo || "메모 없음"}</dd>
              </div>
              {passConfirmMode === "needs_more" ? (
                <div>
                  <dt>추가 내용</dt>
                  <dd>{nextSupplementPlan || "추가 보충 내용을 입력하지 않았습니다."}</dd>
                </div>
              ) : null}
            </dl>
          </div>
          <div className="modalActions confirmActions">
            <button className="softButton" onClick={() => setPassConfirmMode("")} type="button">
              취소
            </button>
            <button className="passButton" onClick={confirmPassTask} type="button">
              {passConfirmMode === "needs_more" ? "추가 보충 필요 기록" : "보충 완료 처리"}
            </button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

function EditableMemoCard({ className = "", editKey, editingKey, onChange, onEdit, placeholder, value }) {
  const textareaRef = useRef(null);
  const isEditing = editingKey === editKey;
  const displayValue = value?.trim() ? value : "";

  useEffect(() => {
    if (!isEditing || !textareaRef.current) return;
    const textarea = textareaRef.current;
    textarea.focus();
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [isEditing, value]);

  function handleChange(event) {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    onChange(textarea.value);
  }

  if (isEditing) {
    return (
      <textarea
        className={`journalMemoCardInput ${className}`.trim()}
        onBlur={() => onEdit("")}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.key === "Escape" || (event.key === "Enter" && (event.ctrlKey || event.metaKey))) {
            event.currentTarget.blur();
          }
        }}
        placeholder={placeholder}
        ref={textareaRef}
        rows="1"
        value={value ?? ""}
      />
    );
  }

  return (
    <button
      className={`journalMemoCardRead ${displayValue ? "" : "empty"} ${className}`.trim()}
      onClick={() => onEdit(editKey)}
      type="button"
    >
      {displayValue || placeholder}
    </button>
  );
}

function LessonJournalFallback({ error, lesson, onBack, onDeleteLesson, onEditLesson, students = [] }) {
  const lessonStudents = (lesson?.studentIds ?? [])
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter(Boolean);
  return (
    <section className="lessonJournalPage">
      <header className="pageTop lessonJournalHeader">
        <button className="iconButton" onClick={onBack} type="button">‹</button>
        <div>
          <h2>{lesson?.className || "수업일지"}</h2>
          <p className="muted">{lesson?.date || "-"} · {lesson?.startTime || ""}-{lesson?.endTime || ""} · {lessonStudents.length}명</p>
        </div>
        <button className="softButton" onClick={() => onEditLesson?.(lesson)} type="button">수업 수정</button>
        <button className="dangerButton" onClick={() => onDeleteLesson?.(lesson.lessonId)} type="button">수업 취소 처리</button>
      </header>
      <section className="panel lessonJournalFallback">
        <strong>수업일지를 여는 중 오류가 발생했습니다.</strong>
        <p>수업 정보는 저장되어 있습니다. 수업 수정에서 학생과 시간을 확인한 뒤 다시 열어 주세요.</p>
        {lessonStudents.length > 0 ? (
          <div className="studentChips">
            {lessonStudents.map((student) => (
              <span className="lessonStudentChip selected" key={student.studentId}>{student.name}</span>
            ))}
          </div>
        ) : (
          <p className="muted">이 수업에 표시할 학생을 찾지 못했습니다.</p>
        )}
        <small>{String(error?.message ?? error ?? "알 수 없는 오류")}</small>
      </section>
    </section>
  );
}

function LessonJournalDetail({
  academyTests = [],
  aiSettings = defaultAiSettings,
  allRecords = [],
  generatedLessonControls = defaultGeneratedLessonControls,
  integrationStatus,
  homeworks = [],
  lesson,
  lessonNotificationPlan = { mode: "default" },
  lessons,
  materials = [],
  makeupTasks = [],
  onApplyBulkHomework,
  onBack,
  onChangeRecord,
  onDeleteLesson,
  onEditLesson,
  onOpenAttendance,
  onOpenExamPrep,
  onOpenReport,
  onPassMakeupTask,
  onPolishComment,
  onPolishPreparationNotice,
  onSaveRecord,
  onScheduleLessonNotificationsAt,
  onSendComment,
  onUpdateExamSundayMakeupBlocks,
  onUpdateHomework,
  onUpdateLessonNotificationPlan,
  onUpdateMakeupTask,
  onToggleStudentNotificationMute,
  notificationJobs = [],
  records,
  saveStates,
  students
}) {
  const [bulkPreviousHomework, setBulkPreviousHomework] = useState("");
  const [bulkNextHomework, setBulkNextHomework] = useState("");
  const [commentModal, setCommentModal] = useState(null);
  const [prepMemoModal, setPrepMemoModal] = useState(null);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [editingMemoKey, setEditingMemoKey] = useState("");
  const [showPreSendCheck, setShowPreSendCheck] = useState(false);
  const [studentPreviewId, setStudentPreviewId] = useState("");
  const commentAiProvider = aiSettings.commentProvider ?? defaultAiSettings.commentProvider;
  const commentAiModel = aiSettings.commentModel ?? defaultAiSettings.commentModel;
  const linkedMakeupTask = makeupTasks.find((task) => task.makeupTaskId === lesson.sourceMakeupTaskId);
  const notificationPlanMode = lessonNotificationPlan?.mode || "default";
  const defaultAlimtalkTimeLabel = formatKoreaTimeLabel(getLessonAlimtalkScheduledDate(lesson, 0, { allowPastFallback: false }));
  const isDefaultScheduleExpired = isLessonAlimtalkScheduleExpired(lesson, 0);
  const isDelayedScheduleExpired = isLessonAlimtalkScheduleExpired(lesson, 30);
  const lessonNotificationJobs = notificationJobs.filter((job) => job.lessonId === lesson.lessonId);
  const scheduledParentCount = lessonNotificationJobs.filter((job) => job.notificationType === "parent_comment" && job.status === "scheduled").length;
  const scheduledStudentCount = lessonNotificationJobs.filter((job) => job.notificationType === "student_comment" && job.status === "scheduled").length;
  const sentParentCount = lessonNotificationJobs.filter((job) => job.notificationType === "parent_comment" && job.status === "sent").length;
  const sentStudentCount = lessonNotificationJobs.filter((job) => job.notificationType === "student_comment" && job.status === "sent").length;
  const canceledJobCount = lessonNotificationJobs.filter((job) => job.status === "canceled").length;
  const failedJobCount = lessonNotificationJobs.filter((job) => job.status === "failed").length;
  const todayTwoPmIso = new Date(`${today}T14:00:00+09:00`).toISOString();
  const canScheduleTodayTwoPm = lesson.date < today && Boolean(onScheduleLessonNotificationsAt);
  const lessonStudents = getActiveLessonStudents(lesson, students);
  const lessonRecordSaveStates = lessonStudents
    .map((student) => saveStates[createLessonStudentRecordId(lesson.lessonId, student.studentId)])
    .filter(Boolean);
  const lessonJournalSaveStatus = (() => {
    if (lessonRecordSaveStates.includes("saving")) return { label: "저장 중...", tone: "saving" };
    if (lessonRecordSaveStates.includes("dirty")) return { label: "저장 대기...", tone: "dirty" };
    if (lessonRecordSaveStates.includes("failed")) return { label: "저장 실패", tone: "failed" };
    if (lessonRecordSaveStates.includes("saved")) return { label: "저장 완료", tone: "saved" };
    return { label: "", tone: "idle" };
  })();
  const defaultScheduleHintText = isDefaultScheduleExpired
    ? `기본 예약 시간 지남 · ${defaultAlimtalkTimeLabel}`
    : `기본 예약 ${defaultAlimtalkTimeLabel}`;
  const isLessonNotificationOff = notificationPlanMode === "none";
  const checkoutMissingStudents = lessonStudents.filter((student) => {
    const record = findLessonStudentRecord(records, lesson, student);
    return hasMissingCheckOut(record, lesson);
  });
  const isHomeworkMakeupLesson = isHomeworkMakeupTaskLesson(lesson, linkedMakeupTask);
  const isExamSundayMakeupLesson = lesson.lessonType === "examSundayMakeup";

  if (isHomeworkMakeupLesson) {
    return (
      <HomeworkMakeupLessonDetail
        homeworks={homeworks}
        lesson={lesson}
        lessons={lessons}
        onDeleteLesson={onDeleteLesson}
        onEditLesson={onEditLesson}
        onPassTask={onPassMakeupTask}
        onUpdateTask={onUpdateMakeupTask}
        students={students}
        task={linkedMakeupTask}
      />
    );
  }
  if (isExamSundayMakeupLesson) {
    return (
      <ExamSundayMakeupLessonDetail
        lesson={lesson}
        blocksOverride={generatedLessonControls.sundayMakeupBlocks?.[getGeneratedLessonKey(lesson)]}
        onDeleteLesson={onDeleteLesson}
        onEditLesson={onEditLesson}
        onUpdateBlocks={(blocks) => onUpdateExamSundayMakeupBlocks?.(getGeneratedLessonKey(lesson), blocks)}
      />
    );
  }
  function hasPreSendMissingRequiredData(record, previousHomework, nextHomework) {
    const attendanceStatus = record?.attendanceStatus ?? "pending";
    const attendanceDateMismatch = getAttendanceDateMismatch(record, lesson);
    return (
      attendanceDateMismatch ||
      !attendanceStatus ||
      attendanceStatus === "pending" ||
      !String(record?.lessonMaterial ?? "").trim() ||
      !String(getLessonContent(record) ?? "").trim() ||
      !String(previousHomework?.title ?? "").trim() ||
      !String(nextHomework?.title ?? "").trim() ||
      !normalizeAssignmentStatusValue(getAssignmentStatusForMessage(record, previousHomework))
    );
  }

  function openCommentComposer(audience, targetStudent, baseRecord, previousHomework, nextHomework) {
    const field = audience === "student" ? "studentComment" : "teacherComment";
    const supplementSchedules = getStudentSupplementSchedules(makeupTasks, targetStudent.studentId);
    const draft = buildInitialCommentDraft({
      audience,
      existingComment: baseRecord?.[field] ?? "",
      record: baseRecord,
      supplementSchedules
    });
    const shouldSeedDraft = draft && draft !== normalizeMessageText(baseRecord?.[field] ?? "");
    const nextRecord = shouldSeedDraft ? { ...baseRecord, [field]: draft } : baseRecord;

    if (shouldSeedDraft) {
      onChangeRecord(lesson, targetStudent, field, draft);
    }

    setCommentModal({ audience, nextHomework, previousHomework, record: nextRecord, student: targetStudent, supplementSchedules });
  }

  function getCommentModalRecord() {
    if (!commentModal) return null;
    const recordId = createLessonStudentRecordId(lesson.lessonId, commentModal.student.studentId);
    const latestRecord = records.find((item) => item.lessonStudentRecordId === recordId) ?? commentModal.record;
    const field = commentModal.audience === "student" ? "studentComment" : "teacherComment";

    return {
      ...(latestRecord ?? {}),
      [field]: latestRecord?.[field]?.trim() ? latestRecord[field] : commentModal.record?.[field] ?? latestRecord?.[field] ?? ""
    };
  }

  function getPreviousLessonMemoContext(student) {
    const sourceRecords = allRecords.length ? allRecords : records;
    const lessonById = new Map(lessons.map((item) => [item.lessonId, item]));
    const getRecordLessonDate = (record) => {
      const sourceLesson = lessonById.get(record.lessonId);
      if (sourceLesson?.date) return sourceLesson.date;
      return String(record.lessonStudentRecordId ?? "").match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? "";
    };
    const getRecordLessonSortValue = (record) => {
      const sourceLesson = lessonById.get(record.lessonId);
      return `${getRecordLessonDate(record)} ${sourceLesson?.startTime ?? ""}`;
    };
    const previousLessons = lessons
      .filter((item) =>
        item.lessonId !== lesson.lessonId &&
        item.date < lesson.date &&
        item.status !== "canceled" &&
        item.studentIds?.includes(student.studentId)
      )
      .sort((lessonA, lessonB) => (
        `${lessonB.date} ${lessonB.startTime ?? ""}`.localeCompare(`${lessonA.date} ${lessonA.startTime ?? ""}`)
      ));

    const previousLessonRecord = previousLessons
      .map((previousLesson) =>
        sourceRecords.find((item) => item.lessonId === previousLesson.lessonId && item.studentId === student.studentId)
      )
      .find(Boolean);

    const previousMemoRecord = sourceRecords
      .filter((item) =>
        item.lessonId !== lesson.lessonId &&
        item.studentId === student.studentId &&
        item.preparationMemo?.trim() &&
        getRecordLessonDate(item) < lesson.date
        && item.lessonId !== previousLessonRecord?.lessonId
      )
      .sort((recordA, recordB) => getRecordLessonSortValue(recordB).localeCompare(getRecordLessonSortValue(recordA)))[0];

    return {
      previousRecord: previousLessonRecord ?? null,
      referenceRecord: previousLessonRecord?.preparationMemo?.trim() ? null : previousMemoRecord ?? null
    };
  }

  function getStudentReservationStatus(student, target) {
    const notificationType = target === "student" ? "student_comment" : "parent_comment";
    return lessonNotificationJobs.find((job) => job.studentId === student.studentId && job.notificationType === notificationType) ?? null;
  }

  function getEffectiveCommentSendStatus(record, student, target) {
    const jobStatus = formatNotificationJobStatus(getStudentReservationStatus(student, target));
    if (jobStatus && jobStatus !== "없음") return jobStatus;
    const persistedStatus = target === "student" ? record.studentCommentSendStatus : record.teacherCommentSendStatus;
    return getDisplayCommentSendStatus(persistedStatus);
  }

  return (
    <section className="lessonJournalPage">
      <header className="pageTop lessonJournalHeader">
        <button className="iconButton" onClick={onBack} type="button">‹</button>
        <div>
          <button className="linkTitleButton" onClick={onOpenExamPrep} type="button">{lesson.className}</button>
          <p className="muted">{lesson.date} · {formatLessonTimeRange(lesson)} · {lessonStudents.length}명</p>
        </div>
        <span className="shortcutHint">{lesson.lessonTopic || "수업일지"}</span>
        <button className="softButton" onClick={() => onEditLesson(lesson)} type="button">수업 수정</button>
        <button className="dangerButton" onClick={() => onDeleteLesson(lesson.lessonId)} type="button">수업 취소 처리</button>
      </header>

      <section className="panel bulkHomeworkPanel">
        <label>
          전체 지난 숙제
          <div className="inlineInputAction">
            <input value={bulkPreviousHomework} onChange={(event) => setBulkPreviousHomework(event.target.value)} placeholder="전체 지난 과제 입력" />
            <button className="softButton" onClick={() => onApplyBulkHomework(lesson, "previous", bulkPreviousHomework)} type="button">전체 적용</button>
          </div>
        </label>
        <label>
          전체 다음 숙제
          <div className="inlineInputAction">
            <input value={bulkNextHomework} onChange={(event) => setBulkNextHomework(event.target.value)} placeholder="전체 다음 과제 입력" />
            <button className="softButton" onClick={() => onApplyBulkHomework(lesson, "next", bulkNextHomework)} type="button">전체 적용</button>
          </div>
        </label>
      </section>

      <section className="panel lessonSaveSummary" aria-label="발송 전 점검">
        <button className={showPreSendCheck ? "preSendCheckButton active" : "preSendCheckButton"} onClick={() => setShowPreSendCheck((current) => !current)} type="button">
          {showPreSendCheck ? "점검 표시 해제" : "발송 전 점검"}
        </button>
        <span
          aria-live="polite"
          className={`defaultScheduleHint journalAutoSaveStatus ${lessonJournalSaveStatus.tone}`}
          title={defaultScheduleHintText}
        >
          {lessonJournalSaveStatus.label || defaultScheduleHintText}
        </span>
        {checkoutMissingStudents.length > 0 ? (
          <span className="checkoutMissingSummary" title={checkoutMissingStudents.map((student) => student.name).join(", ")}>
            하원 미체크 {checkoutMissingStudents.length}명
          </span>
        ) : null}
        <button className="schedulePlanButton check" onClick={() => setReservationModalOpen(true)} type="button">
          예약 확인
        </button>
        <button
          className={notificationPlanMode === "default" ? "schedulePlanButton active" : "schedulePlanButton"}
          onClick={() => onUpdateLessonNotificationPlan?.(lesson.lessonId, "default")}
          disabled={isDefaultScheduleExpired}
          type="button"
        >
          기본 예약
        </button>
        <button
          className={notificationPlanMode === "delay30" ? "schedulePlanButton active" : "schedulePlanButton"}
          onClick={() => onUpdateLessonNotificationPlan?.(lesson.lessonId, "delay30")}
          disabled={isDelayedScheduleExpired}
          type="button"
        >
          30분 지연
        </button>
        <button
          className={notificationPlanMode === "none" ? "schedulePlanButton noSend active" : "schedulePlanButton noSend"}
          onClick={() => onUpdateLessonNotificationPlan?.(lesson.lessonId, "none")}
          type="button"
        >
          알림톡 없음
        </button>
      </section>

      {reservationModalOpen ? (
        <Modal
          className="reservationStatusModal"
          title="알림톡 예약 확인"
          subtitle={`${lesson.date} · ${lesson.className}`}
          onClose={() => setReservationModalOpen(false)}
        >
          <div className="reservationSummaryGrid">
            <div>
              <span>학부모 예약</span>
              <strong>{scheduledParentCount}건</strong>
            </div>
            <div>
              <span>학생 예약</span>
              <strong>{scheduledStudentCount}건</strong>
            </div>
            <div>
              <span>발송 완료</span>
              <strong>{sentParentCount + sentStudentCount}건</strong>
            </div>
            <div>
              <span>취소/실패</span>
              <strong>{canceledJobCount + failedJobCount}건</strong>
            </div>
          </div>
          <div className="reservationModalActions">
            <span>예약 기준: 실제 서버 발송 대기열</span>
            {canScheduleTodayTwoPm ? (
              <button
                className="sendButton"
                onClick={() => onScheduleLessonNotificationsAt?.(lesson.lessonId, todayTwoPmIso)}
                type="button"
              >
                오늘 14:00 일괄예약
              </button>
            ) : null}
          </div>
          <div className="reservationStatusTable">
            <div className="reservationStatusRow head">
              <span>학생</span>
              <span>학부모</span>
              <span>학생</span>
            </div>
            {lessonStudents.map((student) => {
              const record = findLessonStudentRecord(records, lesson, student) ?? createEmptyRecord(lesson, student);
              const parentJob = getStudentReservationStatus(student, "parent");
              const studentJob = getStudentReservationStatus(student, "student");
              return (
                <div className="reservationStatusRow" key={student.studentId}>
                  <strong>{student.name}</strong>
                  <span>{record.notificationMutedParent ? "알림 제외" : formatNotificationJobStatus(parentJob)}</span>
                  <span>{record.notificationMutedStudent ? "알림 제외" : formatNotificationJobStatus(studentJob)}</span>
                </div>
              );
            })}
          </div>
        </Modal>
      ) : null}

      <section className="panel journalTablePanel">
        <div className="journalTable">
          <div className="journalRow journalHead">
            <span>학생</span>
            <span>수업메모</span>
            <span>출결</span>
            <span>강의 교재</span>
            <span>강의 내용</span>
            <span>지난 숙제</span>
            <span>다음 숙제</span>
            <span>과제 상태</span>
            <span>학부모 알림톡</span>
            <span>학생 알림톡</span>
          </div>
          {lessonStudents.map((student) => {
            const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
            const record = findLessonStudentRecord(records, lesson, student) ?? createEmptyRecord(lesson, student);
            const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons);
            const nextHomework = getLessonHomework(homeworks, lesson, student, "next");
            const attendanceDisplay = getAttendanceDisplay(record, lesson);
            const checkoutMissing = hasMissingCheckOut(record, lesson);
            const previousMemoContext = getPreviousLessonMemoContext(student);
            const previousRecord = previousMemoContext.previousRecord;
            const referenceRecord = previousMemoContext.referenceRecord;
            const previousLessonMaterial = previousRecord?.lessonMaterial?.trim() ?? "";
            const previousLessonContent = getLessonContent(previousRecord);
            const previousPreparationMemo = previousRecord?.preparationMemo?.trim() ?? "";
            const referencePreparationMemo = referenceRecord?.preparationMemo?.trim() ?? "";
            const parentCommentSendStatus = getEffectiveCommentSendStatus(record, student, "parent");
            const studentCommentSendStatus = getEffectiveCommentSendStatus(record, student, "student");
            const parentCommentState = getCommentButtonState(record.teacherComment, parentCommentSendStatus);
            const studentCommentState = getCommentButtonState(record.studentComment, studentCommentSendStatus);
            const hasMissingPreSendData = hasPreSendMissingRequiredData(record, previousHomework, nextHomework);
            const isParentNotificationOff = isLessonNotificationOff || record.notificationMutedParent;
            const isStudentNotificationOff = isLessonNotificationOff || record.notificationMutedStudent;

            return (
              <div className={["journalRow", showPreSendCheck && hasMissingPreSendData ? "preSendMissing" : ""].filter(Boolean).join(" ")} key={student.studentId}>
                <span className="studentCell compact">
                  <span className="journalStudentTopLine">
                    <strong>{student.name}</strong>
                    <button
                      aria-label={`${student.name} 학생 화면 보기`}
                      className="studentPortalPreviewButton"
                      onClick={() => setStudentPreviewId(student.studentId)}
                      type="button"
                    >
                      👤
                    </button>
                  </span>
                  <small>{student.grade || "고1"} · {student.schoolName || "학교 미입력"}</small>
                </span>
                <div className="journalPrepCell">
                  <button
                    className={[
                      "prepMemoButton",
                      record.preparationMemo || record.prepStudentVisible || record.prepParentVisible ? "filled" : "",
                      previousPreparationMemo ? "hasPrevious" : "",
                      !previousPreparationMemo && referencePreparationMemo ? "hasReference" : ""
                    ].filter(Boolean).join(" ")}
                    onClick={() => setPrepMemoModal({ nextHomework, previousHomework, previousRecord, record, referenceRecord, student })}
                    type="button"
                  >
                    수업메모
                  </button>
                  <small>
                    {[
                      previousPreparationMemo ? "직전 메모 있음" : "",
                      !previousPreparationMemo && referencePreparationMemo ? "참고 메모 있음" : "",
                      record.prepStudentVisible ? "학생 알림톡 포함" : "",
                      record.prepParentVisible ? "학부모 알림톡 포함" : ""
                    ].filter(Boolean).join(" · ") || "알림톡 미포함"}
                  </small>
                </div>
                <button
                  className={`attendanceBadge attendance-${attendanceDisplay.statusClass ?? record.attendanceStatus ?? "pending"}`}
                  onClick={() => onOpenAttendance({ lesson, record, student })}
                  type="button"
                >
                  <span>{attendanceDisplay.label}</span>
                  {attendanceDisplay.detail ? <small>{attendanceDisplay.detail}</small> : null}
                  {attendanceDisplay.dateMismatch ? <small className="attendanceMismatchText">확인 필요</small> : null}
                  {checkoutMissing ? <small className="checkoutMissingText">하원 미체크</small> : null}
                </button>
                <EditableMemoCard
                  editKey={`${recordId}:lessonMaterial`}
                  editingKey={editingMemoKey}
                  onChange={(value) => onChangeRecord(lesson, student, "lessonMaterial", value)}
                  onEdit={setEditingMemoKey}
                  placeholder={previousLessonMaterial || student.textbook || student.currentTextbook || "강의 교재"}
                  value={record.lessonMaterial ?? ""}
                />
                <EditableMemoCard
                  editKey={`${recordId}:lessonProgress`}
                  editingKey={editingMemoKey}
                  onChange={(value) => onChangeRecord(lesson, student, "lessonProgress", value)}
                  onEdit={setEditingMemoKey}
                  placeholder={previousLessonContent || "오늘 강의 내용"}
                  value={record.lessonProgress ?? record.progress ?? ""}
                />
                <EditableMemoCard
                  editKey={`${recordId}:previousHomework`}
                  editingKey={editingMemoKey}
                  onChange={(value) => onUpdateHomework(lesson, student, "previous", value)}
                  onEdit={setEditingMemoKey}
                  placeholder="지난 숙제"
                  value={previousHomework?.title ?? ""}
                />
                <EditableMemoCard
                  editKey={`${recordId}:nextHomework`}
                  editingKey={editingMemoKey}
                  onChange={(value) => onUpdateHomework(lesson, student, "next", value)}
                  onEdit={setEditingMemoKey}
                  placeholder="다음 숙제"
                  value={nextHomework?.title ?? ""}
                />
                <select
                  className="assignmentStatusSelect"
                  value={normalizeAssignmentStatusValue(record.assignmentStatus ?? record.incompleteHomework ?? "")}
                  onChange={(event) => onChangeRecord(lesson, student, "assignmentStatus", event.target.value)}
                >
                  {assignmentStatusOptions.map((option) => (
                    <option key={option.value || "empty"} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <div className="journalCommentCell">
                  <button
                    className={`commentOpenButton comment-${parentCommentState}${isParentNotificationOff ? " notification-off" : ""}`}
                    onClick={() => openCommentComposer("parent", student, record, previousHomework, nextHomework)}
                    type="button"
                  >
                    학부모 알림톡
                  </button>
                  <small className={`commentStatusText comment-${parentCommentState}`}>
                    {getCommentStatusLabel(record.teacherComment, parentCommentSendStatus)}
                  </small>
                  <button
                    className={[
                      "notificationMuteButton",
                      record.notificationMutedParent ? "active" : "",
                      isLessonNotificationOff && !record.notificationMutedParent ? "planOff" : ""
                    ].filter(Boolean).join(" ")}
                    onClick={() => onToggleStudentNotificationMute?.(lesson, student, "parent")}
                    title={isLessonNotificationOff ? "현재 수업 발송 계획이 알림톡 없음입니다." : ""}
                    type="button"
                  >
                    {record.notificationMutedParent ? "제외 해제" : "알림 제외"}
                  </button>
                </div>
                <div className="journalCommentCell">
                  <button
                    className={`commentOpenButton comment-${studentCommentState}${isStudentNotificationOff ? " notification-off" : ""}`}
                    onClick={() => openCommentComposer("student", student, record, previousHomework, nextHomework)}
                    type="button"
                  >
                    학생 알림톡
                  </button>
                  <small className={`commentStatusText comment-${studentCommentState}`}>
                    {getCommentStatusLabel(record.studentComment, studentCommentSendStatus)}
                  </small>
                  <button
                    className={[
                      "notificationMuteButton",
                      record.notificationMutedStudent ? "active" : "",
                      isLessonNotificationOff && !record.notificationMutedStudent ? "planOff" : ""
                    ].filter(Boolean).join(" ")}
                    onClick={() => onToggleStudentNotificationMute?.(lesson, student, "student")}
                    title={isLessonNotificationOff ? "현재 수업 발송 계획이 알림톡 없음입니다." : ""}
                    type="button"
                  >
                    {record.notificationMutedStudent ? "제외 해제" : "알림 제외"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {commentModal ? (
        <CommentComposerModal
          aiModel={commentAiModel}
          aiProvider={commentAiProvider}
          audience={commentModal.audience}
          integrationStatus={integrationStatus}
          initialSendTiming={notificationPlanMode}
          lesson={lesson}
          onChangeRecord={onChangeRecord}
          onClose={() => setCommentModal(null)}
          onPolishComment={onPolishComment}
          onSendComment={onSendComment}
          record={getCommentModalRecord()}
          nextHomework={commentModal.nextHomework}
          previousHomework={commentModal.previousHomework}
          student={commentModal.student}
          supplementSchedules={commentModal.supplementSchedules}
        />
      ) : null}

      {prepMemoModal ? (
        <PreparationMemoModal
          lesson={lesson}
          onChangeRecord={onChangeRecord}
          onClose={() => setPrepMemoModal(null)}
          onSaveRecord={onSaveRecord}
          record={
            records.find((item) =>
              item.lessonStudentRecordId === createLessonStudentRecordId(lesson.lessonId, prepMemoModal.student.studentId)
            ) ?? prepMemoModal.record
          }
          saveState={saveStates[createLessonStudentRecordId(lesson.lessonId, prepMemoModal.student.studentId)] ?? "idle"}
          student={prepMemoModal.student}
          previousRecord={prepMemoModal.previousRecord}
          previousLesson={prepMemoModal.previousRecord ? lessons.find((item) => item.lessonId === prepMemoModal.previousRecord.lessonId) : null}
          referenceRecord={prepMemoModal.referenceRecord}
          referenceLesson={prepMemoModal.referenceRecord ? lessons.find((item) => item.lessonId === prepMemoModal.referenceRecord.lessonId) : null}
        />
      ) : null}

      {studentPreviewId ? (
        <Modal
          backdropClassName="studentPortalPreviewBackdrop"
          className="studentPortalPreviewModal"
          title="학생 화면 미리보기"
          subtitle="강사가 보는 학생 포털 화면입니다."
          onClose={() => setStudentPreviewId("")}
        >
          <StudentPortalV2
            homeworks={homeworks}
            lessons={lessons}
            materials={materials}
            records={records}
            reportSnapshots={[]}
            scoreRecords={[]}
            sessionStudentId={studentPreviewId}
            students={students.filter((student) => student.studentId === studentPreviewId)}
            previewMode
            onLogout={() => setStudentPreviewId("")}
            onStudentCheckHomework={() => {}}
          />
        </Modal>
      ) : null}
    </section>
  );
}

function PreparationMemoModal({
  lesson,
  onChangeRecord,
  onClose,
  onSaveRecord,
  previousLesson = null,
  previousRecord = null,
  record,
  referenceLesson = null,
  referenceRecord = null,
  saveState = "idle",
  student
}) {
  const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
  const currentRecord = {
    ...createEmptyRecord(lesson, student),
    ...(record ?? {})
  };
  const [draftMemo, setDraftMemo] = useState(currentRecord.preparationMemo ?? "");
  const [draftStudentVisible, setDraftStudentVisible] = useState(Boolean(currentRecord.prepStudentVisible));
  const [draftParentVisible, setDraftParentVisible] = useState(Boolean(currentRecord.prepParentVisible));
  const initialDraftSnapshot = JSON.stringify({
    preparationMemo: currentRecord.preparationMemo ?? "",
    prepStudentVisible: Boolean(currentRecord.prepStudentVisible),
    prepParentVisible: Boolean(currentRecord.prepParentVisible)
  });
  const lastSavedSnapshotRef = useRef(initialDraftSnapshot);
  const previousMemo = previousRecord?.preparationMemo?.trim() ?? "";
  const previousLessonLabel = previousLesson
    ? `${previousLesson.date} · ${previousLesson.className}`
    : "직전 수업";
  const referenceMemo = referenceRecord?.preparationMemo?.trim() ?? "";
  const referenceLessonLabel = referenceLesson
    ? `${referenceLesson.date} · ${referenceLesson.className}`
    : "최근 참고 수업";

  function updateDraft(field, value) {
    if (field === "preparationMemo") setDraftMemo(value);
    if (field === "prepStudentVisible") setDraftStudentVisible(Boolean(value));
    if (field === "prepParentVisible") setDraftParentVisible(Boolean(value));
  }

  function saveMemo() {
    const draftSnapshot = JSON.stringify({
      preparationMemo: draftMemo,
      prepStudentVisible: draftStudentVisible,
      prepParentVisible: draftParentVisible
    });
    if (draftSnapshot === lastSavedSnapshotRef.current && saveState !== "failed") {
      return Promise.resolve();
    }
    const nowIso = new Date().toISOString();
    return onSaveRecord(recordId, lesson, student, {
      ...currentRecord,
      preparationMemo: draftMemo,
      prepStudentVisible: draftStudentVisible,
      prepParentVisible: draftParentVisible,
      updatedBy: "instructor_owner_001",
      updatedAt: nowIso
    }, { skipRelatedHomeworks: true, skipNotificationRefresh: true }).then((saved) => {
      if (saved !== false) lastSavedSnapshotRef.current = draftSnapshot;
      return saved;
    });
  }

  function closeMemo() {
    saveMemo();
    onClose();
  }

  return (
    <Modal
      className="preparationMemoModal"
      title={`${student.name} 수업메모`}
      subtitle={`${lesson.date} · ${lesson.className}`}
      onClose={closeMemo}
    >
      <div className="prepMemoColumns">
        <section className="prepMemoPrevious">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">PREVIOUS</p>
              <h2>직전 수업메모</h2>
            </div>
          </div>
          <span>{previousLessonLabel}</span>
          {previousMemo ? (
            <pre>{previousMemo}</pre>
          ) : (
            <div className="emptyState compact">직전 수업메모가 없습니다.</div>
          )}
          {referenceMemo ? (
            <div className="prepMemoReference">
              <div className="sectionHeader slim">
                <div>
                  <p className="eyebrow">REFERENCE</p>
                  <h2>최근 참고 메모</h2>
                </div>
              </div>
              <span>{referenceLessonLabel}</span>
              <pre>{referenceMemo}</pre>
            </div>
          ) : null}
        </section>
        <section className="prepMemoDraft">
          <label>
            강사용 메모
            <textarea
              value={draftMemo}
              onChange={(event) => updateDraft("preparationMemo", event.target.value)}
              placeholder="다음 시간에 꼭 기억해야 할 내용, 질문, 자료, 보충 포인트를 적어주세요."
            />
          </label>
          <div className="prepMemoIncludeBox">
            <strong>알림톡 초안 포함</strong>
            <label className="checkboxLine">
              <input
                checked={draftStudentVisible}
                onChange={(event) => updateDraft("prepStudentVisible", event.target.checked)}
                type="checkbox"
              />
              학생 알림톡 초안에 포함
            </label>
            <label className="checkboxLine">
              <input
                checked={draftParentVisible}
                onChange={(event) => updateDraft("prepParentVisible", event.target.checked)}
                type="checkbox"
              />
              학부모 알림톡 초안에 포함
            </label>
            <p className="muted">
              체크한 대상의 알림톡 초안을 열 때 이 메모가 한 번만 반영됩니다. AI 수정은 알림톡 작성 화면에서 수신인에 맞게 실행합니다.
            </p>
          </div>
          <div className="prepMemoSaveBar">
            <button
              className={`journalSaveButton journalSave-${saveState}`}
              disabled={saveState === "saving"}
              onClick={saveMemo}
              type="button"
            >
              {getSaveButtonLabel(saveState)}
            </button>
          </div>
        </section>
      </div>
    </Modal>
  );
}

function CommentComposerModal({
  aiModel,
  aiProvider,
  audience,
  integrationStatus,
  initialSendTiming = "default",
  lesson,
  nextHomework,
  onChangeRecord,
  onClose,
  onPolishComment,
  onSendComment,
  previousHomework,
  record,
  student,
  supplementSchedules = []
}) {
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const planMode = ["default", "delay30", "none"].includes(initialSendTiming) ? initialSendTiming : "default";
  const sendDelayMinutes = planMode === "delay30" ? 30 : 0;
  const isManualResendAvailable = isLessonAlimtalkScheduleExpired(lesson, sendDelayMinutes);
  const isScheduleExpired = planMode !== "none" && isManualResendAvailable;
  const sendTiming = isManualResendAvailable ? "now" : planMode === "none" ? "none" : "scheduled";
  const isParent = audience === "parent";
  const field = isParent ? "teacherComment" : "studentComment";
  const comment = record?.[field] ?? "";
  const aiStatus = isParent ? record?.teacherCommentAiStatus : record?.studentCommentAiStatus;
  const [draftComment, setDraftComment] = useState(comment);
  const previousAiStatusRef = useRef(aiStatus);
  const title = isParent ? `${student.name} 학부모 알림톡` : `${student.name} 학생 알림톡`;
  const receiverLabel = isParent ? `${student.name} 학부모님` : student.name;
  const previewTitle = isParent ? "학부모 알림톡 미리보기" : "학생 알림톡 미리보기";
  const sendStatus = isParent ? record?.teacherCommentSendStatus : record?.studentCommentSendStatus;
  const displaySendStatus = getDisplayCommentSendStatus(sendStatus);
  const isNotificationMuted = isParent ? Boolean(record?.notificationMutedParent) : Boolean(record?.notificationMutedStudent);
  const notificationStatus = integrationStatus?.notifications;
  const audienceNotificationStatus = getAlimtalkAudienceStatus(notificationStatus, audience);
  const recipientPhone = isParent ? student.parentPhone : student.studentPhone;
  const forceDryRun = false;
  const canSendNowToRealRecipient =
    !audienceNotificationStatus?.dryRun &&
    audienceNotificationStatus?.allowRealRecipients;
  const forceTestRecipient = !canSendNowToRealRecipient;
  const actionLabel =
    isNotificationMuted
      ? "알림 제외"
      : isManualResendAvailable
        ? "수동 재발송"
      : planMode === "none"
      ? "발송 안 함"
      : planMode === "delay30"
        ? "30분 지연 예약"
        : "예약 발송";
  const safetyTone = getAlimtalkSafetyTone(audienceNotificationStatus, forceDryRun, forceTestRecipient);
  const safetyText = getAlimtalkSafetyText(audienceNotificationStatus, forceDryRun, forceTestRecipient);
  const missingNotificationEnv = notificationStatus?.missing ?? [];
  const defaultScheduledDate = getLessonAlimtalkScheduledDate(lesson, 0, { allowPastFallback: false });
  const delayedScheduledDate = getLessonAlimtalkScheduledDate(lesson, 30, { allowPastFallback: false });
  const currentPlanLabel =
    planMode === "none"
      ? "알림톡 없음"
      : isScheduleExpired
        ? `${planMode === "delay30" ? "30분 지연" : "기본 예약"} 시간 지남 · ${formatKoreaTimeLabel(planMode === "delay30" ? delayedScheduledDate : defaultScheduledDate)}`
      : planMode === "delay30"
        ? `30분 지연 ${formatKoreaTimeLabel(delayedScheduledDate)}`
        : `기본 예약 ${formatKoreaTimeLabel(defaultScheduledDate)}`;
  const sourceText = buildCommentSourceText({
    audience,
    lesson,
    nextHomework,
    previousHomework,
    record,
    student,
    supplementSchedules
  });
  const generatedPreviewText = buildCommentPreviewText({
    audience,
    comment: draftComment,
    lesson,
    nextHomework,
    previousHomework,
    record,
    student,
    supplementSchedules
  });
  useEffect(() => {
    setDraftComment(record?.[field] ?? "");
    previousAiStatusRef.current = aiStatus;
  }, [audience, student.studentId]);

  useEffect(() => {
    const previousAiStatus = previousAiStatusRef.current;
    previousAiStatusRef.current = aiStatus;
    if (previousAiStatus === "AI 수정 중" && aiStatus && aiStatus !== "AI 수정 중") {
      setDraftComment(record?.[field] ?? "");
    }
  }, [aiStatus, field, record]);

  function persistDraftComment() {
    if (draftComment !== comment) {
      onChangeRecord(lesson, student, field, draftComment);
    }
  }

  function handleClose() {
    persistDraftComment();
    onClose();
  }

  function handlePolishClick() {
    const nextRecord = { ...(record ?? {}), [field]: draftComment };
    persistDraftComment();
    onPolishComment(lesson, student, nextRecord, audience, aiProvider, aiModel);
  }

  function handleSendClick() {
    const nextRecord = { ...(record ?? {}), [field]: draftComment };
    persistDraftComment();
    onSendComment(lesson, student, nextRecord, audience, {
      delayMinutes: sendDelayMinutes,
      forceDryRun,
      forceTestRecipient,
      manualCommentBody: draftComment,
      manualPreviewBody: generatedPreviewText,
      resendReason: isManualResendAvailable ? "예약 시간 경과 후 수동 재발송" : "",
      sendTiming
    });
  }

  return (
    <Modal className="commentComposerModal" title={title} subtitle={`${lesson.date} · ${lesson.className}`} onClose={handleClose}>
      <div className="commentComposerGrid">
        <section className="commentDraftPanel">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">FINAL</p>
              <h2>최종 알림톡 문구</h2>
            </div>
            <span className="countBadge">{isParent ? "학부모용" : "학생용"}</span>
          </div>
          <div className="commentSourceToggle">
            <button className="softButton mini" onClick={() => setIsSourceOpen((current) => !current)} type="button">
              {isSourceOpen ? "원본 메모 접기" : "원본 메모 보기"}
            </button>
            <span>수업메모와 일정 정보는 AI 수정 참고용으로 보관됩니다.</span>
          </div>
          {isSourceOpen ? (
            <pre className="templatePreviewText commentSourcePreview">{sourceText}</pre>
          ) : null}
          <textarea
            className="commentComposerTextarea"
            value={draftComment}
            onChange={(event) => setDraftComment(event.target.value)}
            placeholder={isParent ? "학부모님께 실제로 보낼 최종 문구를 적어주세요." : "학생에게 실제로 보낼 최종 문구를 적어주세요."}
          />
          <div className="commentComposerActions">
            <button
              className="softButton"
              disabled={aiStatus === "AI 수정 중"}
              onClick={handlePolishClick}
              type="button"
            >
              {aiStatus === "AI 수정 중" ? "AI 수정 중..." : "AI 수정"}
            </button>
            <button
              className="sendButton"
              disabled={isNotificationMuted || (planMode === "none" && !isManualResendAvailable)}
              onClick={handleSendClick}
              type="button"
            >
              {actionLabel}
            </button>
          </div>
          <div className="currentSchedulePlan" aria-label="현재 수업 발송 계획">
            <span>현재 수업 발송 계획</span>
            <strong>{currentPlanLabel}</strong>
            <small>
              {isNotificationMuted
                ? "이 학생의 해당 알림톡은 개별 제외 상태입니다."
                : isManualResendAvailable
                  ? "예약 계획과 관계없이 버튼을 누르면 즉시 수동 재발송합니다."
                  : "발송 버튼은 현재 수업 발송 계획대로 예약합니다."}
            </small>
          </div>
          <div className={`alimtalkSafetyBox ${safetyTone}`}>
            <strong>{safetyText}</strong>
            <span>수신 대상: {receiverLabel} · 등록 번호: {recipientPhone || "번호 없음"}</span>
            {missingNotificationEnv.length ? <span>미입력 환경변수: {missingNotificationEnv.join(", ")}</span> : null}
          </div>
          <small className="muted">발송 수신 기준: {canSendNowToRealRecipient ? "등록된 실제 번호" : "테스트 번호 또는 dry-run"}</small>
          <small className="muted">{aiStatus || "AI 대기"} · {displaySendStatus || "발송 전"}</small>
        </section>

        <section className="commentPreviewPanel">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">PREVIEW</p>
              <h2>{previewTitle}</h2>
            </div>
          </div>
          <pre className="templatePreviewText commentTemplatePreview">{generatedPreviewText}</pre>
        </section>
      </div>
    </Modal>
  );
}

function AttendanceModal({ item, lateGraceMinutes = 0, onClose, onSave }) {
  const { lesson, record, student } = item;
  const attendanceDateMismatch = getAttendanceDateMismatch(record, lesson);
  const editableRecord = attendanceDateMismatch ? clearAttendanceFields(record) : record;
  const [attendanceStatus, setAttendanceStatus] = useState(getManualAttendanceInitialStatus(editableRecord));
  const [checkInTime, setCheckInTime] = useState(editableRecord.checkInTime || formatKoreaTimeFromIso(editableRecord.checkInAt) || "");
  const [checkOutTime, setCheckOutTime] = useState(editableRecord.checkOutTime || formatKoreaTimeFromIso(editableRecord.checkOutAt) || "");
  const [attendanceReason, setAttendanceReason] = useState(editableRecord.attendanceReason ?? "");
  const [pendingSave, setPendingSave] = useState(null);
  const [confirmStep, setConfirmStep] = useState("");
  const [saveError, setSaveError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const calculatedLateMinutes = attendanceStatus === "late"
    ? calculateLateMinutesFromLessonTime(lesson, checkInTime, lateGraceMinutes)
    : "";
  const effectiveLateMinutes = attendanceStatus !== "late"
    ? ""
    : calculatedLateMinutes !== ""
      ? calculatedLateMinutes
      : editableRecord.lateMinutes ?? "";
  const values = { attendanceStatus, lateMinutes: effectiveLateMinutes, checkInTime, checkOutTime, attendanceReason };
  const hasKioskRecord = !attendanceDateMismatch && hasTabletAttendanceRecord(record);
  const hasChanged = hasAttendanceModalChanges(editableRecord, values);

  function requestSave() {
    setSaveError("");
    const nextSave = { values, options: {} };
    if (hasKioskRecord && hasChanged) {
      setPendingSave(nextSave);
      setConfirmStep("change");
      return;
    }
    setPendingSave(nextSave);
    setConfirmStep("saveMode");
  }

  function confirmManualChange() {
    setConfirmStep("saveMode");
  }

  async function finishConfirmedSave(sendAlimtalk) {
    if (isSaving) return;
    const nextSave = pendingSave ?? { values, options: {} };
    setIsSaving(true);
    setSaveError("");
    try {
      const saved = await onSave(lesson, student, nextSave.values, { ...nextSave.options, sendAlimtalk });
      if (!saved) {
        setSaveError("출결 저장에 실패했습니다. 잠시 후 다시 눌러 주세요.");
      }
    } catch (error) {
      setSaveError(`출결 저장에 실패했습니다. ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Modal title={`${student.name} 출결 체크`} subtitle="지각/결석이면 시간과 사유를 남깁니다." onClose={onClose}>
      <div className="typeTabs">
        {[
          ["present", "등원"],
          ["late", "지각"],
          ["checkout", "하원"],
          ["absent", "결석"]
        ].map(([value, label]) => (
          <button className={attendanceStatus === value ? "active" : ""} key={value} onClick={() => setAttendanceStatus(value)} type="button">
            {label}
          </button>
        ))}
      </div>
      <div className="fieldGrid">
        <label>
          등원 시각
          <input
            type="time"
            value={checkInTime}
            onChange={(event) => setCheckInTime(event.target.value)}
          />
          <small>출결을 못 찍은 학생은 실제 등원 시각을 입력하세요. 지각 분은 수업 시작 기준으로 자동 계산됩니다.</small>
        </label>
        <label>
          하원 시각
          <input
            type="time"
            value={checkOutTime}
            onChange={(event) => setCheckOutTime(event.target.value)}
          />
          <small>하원 처리를 못 찍은 학생은 실제 하원 시각을 입력하세요.</small>
        </label>
        <label>
          사유
          <input value={attendanceReason} onChange={(event) => setAttendanceReason(event.target.value)} placeholder="예: 학교 동아리" />
        </label>
      </div>
      {hasKioskRecord ? (
        <div className="attendanceSourceNotice">
          태블릿에서 기록된 출결입니다. 수동으로 바꾸면 확인 후 저장됩니다.
        </div>
      ) : null}
      {attendanceDateMismatch ? (
        <div className="attendanceSourceNotice warning">
          저장된 출결 날짜가 수업 날짜와 다릅니다. 출결 {attendanceDateMismatch.mismatchedDates.map(formatShortDateLabel).join(", ")} · 수업 {formatShortDateLabel(attendanceDateMismatch.lessonDate)}. 저장하면 이 수업 날짜 기준으로 새 출결을 기록합니다.
        </div>
      ) : null}
      {confirmStep === "change" ? (
        <div className="attendanceConfirmPanel">
          <strong>태블릿 출결 기록을 변경하시겠습니까?</strong>
          <p>실수 방지를 위해 한 번 더 확인합니다. 저장하면 현재 화면의 출결 상태와 사유로 덮어씁니다.</p>
          <div className="attendanceConfirmActions">
            <button className="softButton" onClick={() => setConfirmStep("")} type="button">
              취소
            </button>
            <button className="primaryButton" onClick={confirmManualChange} type="button">
              변경하기
            </button>
          </div>
        </div>
      ) : null}
      {confirmStep === "saveMode" ? (
        <div className="attendanceConfirmPanel">
          <strong>출결을 어떻게 저장할까요?</strong>
          <p>출결 기록만 저장하거나, 저장 후 학부모에게 출결 알림톡까지 발송할 수 있습니다.</p>
          {saveError ? <p className="apiErrorBox">{saveError}</p> : null}
          <div className="attendanceConfirmActions">
            <button className="softButton" disabled={isSaving} onClick={() => finishConfirmedSave(false)} type="button">
              {isSaving ? "저장 중..." : "저장만"}
            </button>
            <button className="primaryButton" disabled={isSaving} onClick={() => finishConfirmedSave(true)} type="button">
              {isSaving ? "저장 중..." : "저장 후 출결 알림톡 발송"}
            </button>
          </div>
        </div>
      ) : null}
      {!confirmStep ? (
        <div className="attendanceModalActions">
          <button className="primaryButton full" onClick={() => requestSave()} type="button">
            출결 저장
          </button>
        </div>
      ) : null}
    </Modal>
  );
}

function hasTabletAttendanceRecord(record = {}) {
  return Boolean(record.checkInAt || record.checkInTime || record.checkOutAt || record.checkOutTime || record.updatedBy === "attendance_kiosk");
}

function getManualAttendanceInitialStatus(record = {}) {
  const status = record?.attendanceStatus;
  if (status && status !== "pending") return status;
  if (record?.checkOutAt || record?.checkOutTime) return "checkout";
  return "present";
}

function normalizeAttendanceField(value) {
  return String(value ?? "").trim();
}

function hasAttendanceModalChanges(record = {}, values = {}) {
  return (
    normalizeAttendanceField(record.attendanceStatus ?? "present") !== normalizeAttendanceField(values.attendanceStatus ?? "present") ||
    normalizeAttendanceField(record.lateMinutes) !== normalizeAttendanceField(values.lateMinutes) ||
    normalizeAttendanceField(record.checkInTime || formatKoreaTimeFromIso(record.checkInAt)) !== normalizeAttendanceField(values.checkInTime) ||
    normalizeAttendanceField(record.checkOutTime || formatKoreaTimeFromIso(record.checkOutAt)) !== normalizeAttendanceField(values.checkOutTime) ||
    normalizeAttendanceField(record.attendanceReason) !== normalizeAttendanceField(values.attendanceReason)
  );
}

function getAttendanceActionLabel(result = {}) {
  if (result.mode === "completed") return "이미 하원";
  if (result.mode === "checkOut") return "하원";
  const status = result.record?.attendanceStatus ?? "";
  if (status === "late") return "지각 등원";
  if (status === "absent") return "결석";
  if (status === "excused") return "인정결석";
  return "등원";
}

function AttendanceKiosk({
  isLoading = false,
  isStandalone = false,
  lessons = [],
  records = [],
  students,
  onAttendanceCheck,
  onAttendancePreview,
  onBack
}) {
  const [pin, setPin] = useState("");
  const [pendingPreview, setPendingPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function runAttendancePreview(nextPin) {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const nextPreview = await onAttendancePreview(nextPin);
      if (nextPreview.ok) {
        setPendingPreview({ ...nextPreview, pin: nextPin });
        setResult(null);
        setPin("");
      } else {
        setResult(nextPreview);
      }
    } catch (error) {
      setResult({ ok: false, message: error.message || "출결 확인에 실패했습니다." });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function confirmAttendanceCheck() {
    if (!pendingPreview || isSubmitting) return;
    if (pendingPreview.mode === "completed") {
      setPendingPreview(null);
      return;
    }
    setIsSubmitting(true);
    try {
      const nextResult = await onAttendanceCheck(pendingPreview.pin, {
        attendanceStatus: pendingPreview.record?.attendanceStatus,
        checkInTime: pendingPreview.record?.checkInTime,
        checkOutTime: pendingPreview.record?.checkOutTime,
        lateMinutes: pendingPreview.record?.lateMinutes,
        lessonId: pendingPreview.lesson?.lessonId,
        studentId: pendingPreview.student?.studentId
      });
      setPendingPreview(null);
      if (!nextResult?.ok) {
        setResult(nextResult);
      }
    } catch (error) {
      setResult({ ok: false, message: error.message || "출결 저장에 실패했습니다." });
      setPendingPreview(null);
    } finally {
      setIsSubmitting(false);
    }
  }

  function submitPin(event) {
    event?.preventDefault();
    if (isLoading || isSubmitting || pendingPreview) return;
    runAttendancePreview(pin);
  }

  function pressKey(value) {
    if (isLoading || isSubmitting || pendingPreview) return;
    if (value === "backspace") {
      setPin((current) => current.slice(0, -1));
      return;
    }
    if (value === "clear") {
      setPin("");
      return;
    }
    setPin((current) => `${current}${value}`.replaceAll(/\D/g, "").slice(0, 4));
  }

  const resultTitle = result?.ok ? getAttendanceActionLabel(result) : "출결 체크 실패";
  const resultDetail = result?.ok
    ? `${result.student?.name ?? ""} · ${formatLessonDisplayName(result.lesson)} · ${result.checkedTime || ""}`
    : result?.message;
  const previewActionLabel = pendingPreview ? getAttendanceActionLabel(pendingPreview) : "";
  const previewDetail = pendingPreview?.ok
    ? `${pendingPreview.student?.name ?? ""} · ${formatLessonDisplayName(pendingPreview.lesson)} · ${pendingPreview.checkedTime || ""}`
    : "";

  return (
    <section className={isStandalone ? "attendanceKioskPage standalone" : "attendanceKioskPage"}>
      <div className="attendanceKioskCard">
        <div className="attendanceKioskHeader">
          <div>
            <p className="eyebrow">{academyBrandName} ATTENDANCE</p>
            <h1>출결 체크</h1>
            <p className="muted">{isLoading ? "출결 데이터를 불러오는 중입니다." : "학생 휴대폰 번호 뒤 4자리를 입력하세요."}</p>
          </div>
          {onBack ? <button className="iconButton" onClick={onBack} type="button">×</button> : null}
        </div>
        <form className="attendancePinForm" onSubmit={submitPin}>
          <input
            autoFocus
            inputMode="numeric"
            maxLength={4}
            disabled={isLoading || isSubmitting || Boolean(pendingPreview)}
            value={pin}
            onChange={(event) => setPin(event.target.value.replaceAll(/\D/g, "").slice(0, 4))}
            placeholder={isLoading || isSubmitting ? "대기" : "뒤 4자리"}
          />
          <button className="primaryButton" disabled={isLoading || isSubmitting || Boolean(pendingPreview) || pin.length !== 4} type="submit">
            {isSubmitting ? "확인 중" : "확인"}
          </button>
        </form>

        <div className={isLoading || isSubmitting || pendingPreview ? "attendanceNumberPad disabled" : "attendanceNumberPad"} aria-label="출결 번호 입력 키패드">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((value) => (
            <button disabled={isLoading || isSubmitting || Boolean(pendingPreview)} key={value} onClick={() => pressKey(value)} type="button">{value}</button>
          ))}
          <button className="secondaryKey" disabled={isLoading || isSubmitting || Boolean(pendingPreview)} onClick={() => pressKey("clear")} type="button">지움</button>
          <button disabled={isLoading || isSubmitting || Boolean(pendingPreview)} onClick={() => pressKey("0")} type="button">0</button>
          <button className="secondaryKey" disabled={isLoading || isSubmitting || Boolean(pendingPreview)} onClick={() => pressKey("backspace")} type="button">⌫</button>
        </div>
      </div>

      {pendingPreview ? (
        <Modal
          className="attendanceResultModal"
          hideCloseButton
          subtitle={previewDetail}
          title="출결 확인"
        >
          <div className="attendanceResultContent">
            <strong>{previewActionLabel}</strong>
            <div className="attendancePreviewSummary">
              <span><small>학생</small><b>{pendingPreview.student?.name ?? "-"}</b></span>
              <span><small>수업</small><b>{formatLessonDisplayName(pendingPreview.lesson) || "-"}</b></span>
              <span><small>시간</small><b>{pendingPreview.checkedTime || "-"}</b></span>
            </div>
            <div className="attendanceConfirmActions single">
              <button className="primaryButton" disabled={isSubmitting} onClick={confirmAttendanceCheck} type="button">
                {isSubmitting ? "저장 중..." : "확인"}
              </button>
            </div>
          </div>
        </Modal>
      ) : null}

      {result ? (
        <Modal
          className={result.ok ? "attendanceResultModal success" : "attendanceResultModal error"}
          onClose={() => setResult(null)}
          subtitle={resultDetail}
          title={resultTitle}
        >
          <div className="attendanceResultContent">
            <strong>{result.message}</strong>
            <p>번호를 확인한 뒤 다시 입력해 주세요.</p>
            <button className="primaryButton" onClick={() => setResult(null)} type="button">닫기</button>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

function TeacherLessonHub({
  lessons,
  records,
  saveStates,
  selectedDate,
  selectedLesson,
  selectedLessonId,
  students,
  homeworks,
  onAddLesson,
  onChangeRecord,
  onDateSelect,
  onDeleteLesson,
  onEditLesson,
  onOpenReport,
  onSaveRecord,
  onSelectLesson
}) {
  return (
    <>
      <header className="pageTop teacherCalendarTop">
        <button className="iconButton" type="button">‹</button>
        <h1>{formatMonthTitle(selectedDate)}</h1>
        <button className="iconButton" type="button">›</button>
        <button className="primaryButton" onClick={onAddLesson} type="button">+ 수업 등록</button>
      </header>

      <section className="calendarShell teacherCalendarShell">
        <TeacherMonthCalendar
          lessons={lessons}
          selectedDate={selectedDate}
          selectedLessonId={selectedLessonId}
          onDateSelect={onDateSelect}
          onSelectLesson={onSelectLesson}
        />
      </section>

      <section className="lessonJournalArea">
        {selectedLesson ? (
          <>
            <div className="panel lessonJournalToolbar">
              <div>
                <h2>{selectedLesson.className}</h2>
                <p className="muted">
                  {selectedLesson.date} · {formatLessonTimeRange(selectedLesson)} · {students.length}명
                </p>
              </div>
              <div className="lessonToolbarActions">
                <button className="softButton" onClick={() => onEditLesson(selectedLesson)} type="button">
                  수업 수정
                </button>
                <button className="dangerButton" onClick={() => onDeleteLesson(selectedLesson.lessonId)} type="button">
                  수업 취소 처리
                </button>
              </div>
            </div>
            <LessonDetail
              lesson={selectedLesson}
              records={records}
              saveStates={saveStates}
              students={students}
              homeworks={homeworks}
              onChangeRecord={onChangeRecord}
              onOpenReport={onOpenReport}
              onSaveRecord={onSaveRecord}
            />
          </>
        ) : (
          <div className="panel emptyState">{selectedDate}에 등록된 수업이 없습니다.</div>
        )}
      </section>
    </>
  );
}

function TeacherMonthCalendar({ lessons, selectedDate, selectedLessonId, onDateSelect, onSelectLesson }) {
  const days = buildMonthDays(selectedDate);

  return (
    <div className="calendarGrid teacherCalendarGrid">
      {["일", "월", "화", "수", "목", "금", "토"].map((label) => (
        <div className="weekday" key={label}>{label}</div>
      ))}
      {days.map((day) => {
        const dayLessons = lessons.filter((lesson) => lesson.date === day.date).sort(sortByTime);
        return (
          <button
            className={[
              "monthCell",
              "teacherMonthCell",
              day.inMonth ? "" : "outside",
              selectedDate === day.date ? "selected" : ""
            ].join(" ")}
            key={day.date}
            onClick={() => onDateSelect(day.date)}
            type="button"
          >
            <span className="dayNumber">{day.dayNumber}</span>
            <span className="cellPlus">+</span>
            <span className="lessonPills">
              {dayLessons.slice(0, 4).map((lesson) => (
                <span
                  className={lesson.lessonId === selectedLessonId ? "lessonPill active" : "lessonPill"}
                  key={lesson.lessonId}
                  onClick={(event) => {
                    event.stopPropagation();
                    onDateSelect(day.date);
                    onSelectLesson(lesson.lessonId);
                  }}
                  style={{ background: lesson.color }}
                >
                  {formatLessonDisplayName(lesson)} ({getLessonStudentIds(lesson).length}명)
                </span>
              ))}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function LessonHub({
  lessons,
  lessonsForDate,
  records,
  saveStates,
  selectedDate,
  selectedLesson,
  selectedLessonId,
  students,
  homeworks,
  onAddLesson,
  onChangeRecord,
  onDateSelect,
  onOpenReport,
  onSaveRecord,
  onSelectLesson
}) {
  return (
    <>
      <header className="pageTop">
        <button className="iconButton" type="button">‹</button>
        <h1>2026년 6월</h1>
        <button className="iconButton" type="button">›</button>
        <button className="primaryButton" onClick={onAddLesson} type="button">+ 수업 등록</button>
      </header>

      <section className="calendarShell">
        <MonthCalendar lessons={lessons} selectedDate={selectedDate} onDateSelect={onDateSelect} />
      </section>

      <section className="contentGrid">
        <div className="panel">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">날짜별 수업</p>
              <h2>{selectedDate}</h2>
            </div>
            <span className="countBadge">{lessonsForDate.length}개</span>
          </div>
          <div className="lessonCards">
            {lessonsForDate.map((lesson) => (
              <button
                aria-label={`${lesson.className} 수업 선택`}
                className={lesson.lessonId === selectedLessonId ? "lessonCard active" : "lessonCard"}
                key={lesson.lessonId}
                onClick={() => onSelectLesson(lesson.lessonId)}
                style={{ borderColor: lesson.lessonId === selectedLessonId ? lesson.color : undefined }}
                title={`${lesson.className} · ${lesson.startTime}-${lesson.endTime}`}
                type="button"
              >
                <span className="lessonDot" style={{ background: lesson.color }} />
                <strong>{lesson.className}</strong>
                <small>{formatLessonTimeRange(lesson)} · {getLessonStudentIds(lesson).length}명</small>
              </button>
            ))}
          </div>
        </div>

        {selectedLesson ? (
          <LessonDetail
            lesson={selectedLesson}
            records={records}
            saveStates={saveStates}
            students={students}
            homeworks={homeworks}
            onChangeRecord={onChangeRecord}
            onOpenReport={onOpenReport}
            onSaveRecord={onSaveRecord}
          />
        ) : (
          <div className="panel emptyState">선택한 날짜에 등록된 수업이 없습니다.</div>
        )}
      </section>
    </>
  );
}

function MonthCalendar({ lessons, selectedDate, onDateSelect }) {
  const days = buildMonthDays();

  return (
    <div className="calendarGrid">
      {["일", "월", "화", "수", "목", "금", "토"].map((label) => (
        <div className="weekday" key={label}>{label}</div>
      ))}
      {days.map((day) => {
        const dayLessons = lessons.filter((lesson) => lesson.date === day.date).sort(sortByTime);
        return (
          <button
            className={[
              "monthCell",
              day.inMonth ? "" : "outside",
              selectedDate === day.date ? "selected" : ""
            ].join(" ")}
            key={day.date}
            onClick={() => onDateSelect(day.date)}
            type="button"
          >
            <span className="dayNumber">{day.dayNumber}</span>
            <span className="cellPlus">+</span>
            <span className="lessonPills">
              {dayLessons.slice(0, 3).map((lesson) => (
                <span
                  aria-label={`${lesson.className} 수업 표시`}
                  className="lessonPill"
                  key={lesson.lessonId}
                  style={{ background: lesson.color }}
                  title={`${lesson.className} · ${lesson.startTime}-${lesson.endTime}`}
                >
                  {formatLessonDisplayName(lesson)}
                </span>
              ))}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function LessonDetail({ lesson, records, saveStates, students, homeworks, onChangeRecord, onOpenReport, onSaveRecord }) {
  return (
    <section className="panel detailPanel">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">수업 상세</p>
          <h2>{lesson.className}</h2>
        </div>
        <div className="metaGrid">
          <span>{lesson.date}</span>
          <span>{formatLessonTimeRange(lesson)}</span>
          <span>{lesson.status}</span>
        </div>
      </div>

      <div className="studentTable">
        <div className="tableRow tableHead">
          <span>학생</span>
          <span>행동태그</span>
          <span>지난 숙제</span>
          <span>오늘 숙제</span>
          <span>데일리코멘트</span>
          <span>등원</span>
          <span>하원</span>
          <span>저장</span>
          <span>보고서</span>
          <span>발송</span>
        </div>
        {students.map((student) => {
          const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
          const record = findLessonStudentRecord(records, lesson, student) ?? createEmptyRecord(lesson, student);
          const saveState = saveStates[recordId] ?? "idle";
          const homeworkBundle = getHomeworkBundle(homeworks, lesson, student);

          return (
            <div className="tableRow" key={student.studentId}>
              <span className="studentCell">
                <strong>{student.name}</strong>
                <small>{student.schoolName} · {student.grade}</small>
                <small>{student.textbook ?? "교과서 미지정"}</small>
                <small className="noteText">{student.specialNote ?? "특이사항 없음"}</small>
              </span>
              <select
                value={record.behaviorTag ?? ""}
                onChange={(event) => onChangeRecord(lesson, student, "behaviorTag", event.target.value)}
              >
                <option value="">태그 선택</option>
                <option value="집중 좋음">집중 좋음</option>
                <option value="질문 좋음">질문 좋음</option>
                <option value="계산 실수">계산 실수</option>
                <option value="개념 보강">개념 보강</option>
                <option value="숙제 미흡">숙제 미흡</option>
              </select>
              <HomeworkCell homework={homeworkBundle.previous} emptyText="지난 숙제 없음" />
              <HomeworkCell homework={homeworkBundle.today} emptyText="오늘 숙제 미등록" />
              <textarea
                value={record.teacherComment}
                onChange={(event) => onChangeRecord(lesson, student, "teacherComment", event.target.value)}
                placeholder="코멘트 입력..."
                rows="2"
              />
              <input disabled title="추후 출결앱 연동 예정" type="time" />
              <input disabled title="추후 출결앱 연동 예정" type="time" />
              <span className="saveCell">
                <button
                  className="saveButton"
                  disabled={saveState === "saving"}
                  onClick={() => onSaveRecord(recordId)}
                  type="button"
                >
                  저장
                </button>
                <small className={`saveState save-${saveState}`}>{saveStateLabels[saveState]}</small>
              </span>
              <button
                className="softButton"
                onClick={() => onOpenReport(lesson, student, record, homeworkBundle)}
                type="button"
              >
                보고서
              </button>
              <button
                className="sendButton"
                onClick={() => onOpenReport(lesson, student, record, homeworkBundle)}
                type="button"
              >
                발송
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HomeworkCell({ homework, emptyText }) {
  if (!homework) {
    return <span className="homeworkCell muted">{emptyText}</span>;
  }

  return (
    <span className={`homeworkCell homework-${homework.status}`}>
      <strong>{homework.title}</strong>
      <small>{homework.assignedDate} → {homework.dueDate}</small>
      <small>{homeworkLabels[homework.status] ?? homework.status}</small>
    </span>
  );
}

function ReportModal({ report, onClose, onMockSend, onSaveSnapshot }) {
  return (
    <Modal title="AI 데일리 리포트" subtitle="현재는 실제 AI API/발송 대신 모의 초안과 모의 발송 상태로 검수합니다." onClose={onClose}>
      <div className="reportMeta">
        <span>{report.lesson.date}</span>
        <span>{report.lesson.className}</span>
        <span>{report.student.name}</span>
        <span>{report.sendStatus}</span>
      </div>
      <label>
        AI API 입력 데이터
        <textarea
          readOnly
          rows="6"
          value={JSON.stringify(
            {
              student: {
                name: report.student.name,
                schoolName: report.student.schoolName,
                grade: report.student.grade,
                textbook: report.student.textbook,
                specialNote: report.student.specialNote
              },
              lesson: report.lesson,
              record: report.record,
              homework: report.homeworkBundle
            },
            null,
            2
          )}
        />
      </label>
      <label>
        보고서 초안
        <textarea readOnly rows="8" value={report.body} />
      </label>
      <div className="modalActions">
        <button className="softButton" onClick={() => onSaveSnapshot(report)} type="button">스냅샷 저장</button>
        <button className="sendButton" onClick={() => onMockSend(report)} type="button">모의 발송</button>
      </div>
    </Modal>
  );
}

function LessonModal({ initialLesson = null, students, templates, onClose, onSubmit }) {
  const activeStudents = students.filter(isActiveStudent);
  const fallbackTemplate = templates[0] ?? { name: "", startTime: "16:00", endTime: "17:00", color: "#17213d" };
  const [lessonType, setLessonType] = useState(initialLesson?.lessonType ?? "class");
  const [classTemplateId, setClassTemplateId] = useState(initialLesson ? initialLesson.classTemplateId || "" : templates[0]?.classTemplateId || "");
  const activeTemplate = templates.find((template) => template.classTemplateId === classTemplateId) ?? fallbackTemplate;
  const [name, setName] = useState(initialLesson?.className ?? activeTemplate.name);
  const [date, setDate] = useState(initialLesson?.date ?? today);
  const [startTime, setStartTime] = useState(normalizeTimeInput(initialLesson?.startTime) || activeTemplate.startTime);
  const [endTime, setEndTime] = useState(normalizeTimeInput(initialLesson?.endTime) || activeTemplate.endTime);
  const [color, setColor] = useState(initialLesson?.color ?? activeTemplate.color);
  const [studentIds, setStudentIds] = useState(() => {
    const initialStudentIds = initialLesson?.studentIds ?? activeStudents.map((student) => student.studentId);
    return getActiveStudentIdsFromSelection(initialStudentIds, activeStudents);
  });
  const [studentSearch, setStudentSearch] = useState("");
  const lessonColors = ["#17213d", "#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#ef4444", "#f59e0b", "#10b981", "#059669", "#0891b2", "#7c3aed", "#dc2626", "#d97706", "#16a34a", "#0284c7"];
  const filteredStudents = activeStudents.filter((student) =>
    [student.name, student.grade, student.schoolName].join(" ").toLowerCase().includes(studentSearch.toLowerCase())
  );
  const lessonStudentGradeOrder = ["고3", "고2", "고1", "중3", "중2", "중1"];
  const studentGrades = Array.from(new Set(filteredStudents.map((student) => student.grade || "학년 미입력")));
  const orderedStudentGrades = [
    ...lessonStudentGradeOrder.filter((grade) => studentGrades.includes(grade)),
    ...studentGrades.filter((grade) => !lessonStudentGradeOrder.includes(grade)).sort()
  ];
  const groupedStudents = orderedStudentGrades.map((grade) => ({
    grade,
    students: filteredStudents.filter((student) => (student.grade || "학년 미입력") === grade)
  })).filter((group) => group.students.length > 0);

  function handleTemplateChange(nextTemplateId) {
    const template = templates.find((item) => item.classTemplateId === nextTemplateId);
    setClassTemplateId(nextTemplateId);
    if (!template) return;
    setName(template.name);
    setStartTime(getTemplateStartTime(template, date));
    setEndTime(getTemplateEndTime(template, date));
    setColor(template.color);
    setStudentIds(
      activeStudents
        .filter((student) => student.defaultClassTemplateId === nextTemplateId)
        .map((student) => student.studentId)
    );
  }

  function handleDateChange(nextDate) {
    setDate(nextDate);
    setStartTime(getTemplateStartTime(activeTemplate, nextDate));
    setEndTime(getTemplateEndTime(activeTemplate, nextDate));
  }

  return (
    <Modal className="lessonModal" title={initialLesson ? "수업 수정" : "수업 등록"} onClose={onClose}>
      <div className="modalSection lessonModalSection">
        <label>수업 유형</label>
        <div className="typeTabs">
          {[
            ["class", "🏹 수업"],
            ["preExam", "📌 직전수업"],
            ["exam", "📝 평가"],
            ["makeup", "🔧 보강"],
            ["examSundayMakeup", "🗓 일요보강"]
          ].map(([value, label]) => (
            <button
              className={lessonType === value ? "active" : ""}
              key={value}
              onClick={() => setLessonType(value)}
              type="button"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="modalSection lessonModalSection">
        <label>
          큰 수업 틀
          <select value={classTemplateId} onChange={(event) => handleTemplateChange(event.target.value)}>
            <option value="">직접 입력 일정</option>
            {templates.map((template) => (
              <option key={template.classTemplateId} value={template.classTemplateId}>
                {template.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="modalSection lessonModalSection">
        <label>달력 색상</label>
        <div className="lessonColorPalette">
          {lessonColors.map((item) => (
            <button
              aria-label={`${item} 색상 선택`}
              className={color.toLowerCase() === item.toLowerCase() ? "active" : ""}
              key={item}
              onClick={() => setColor(item)}
              style={{ background: item }}
              type="button"
            />
          ))}
          <label className="customColorInput">
            <span style={{ background: color }} />
            직접입력
            <input type="color" value={color} onChange={(event) => setColor(event.target.value)} />
          </label>
        </div>
      </div>

      <div className="fieldGrid two lessonModalFields">
        <label>
          수업명
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="예: 수학 특강" />
        </label>
        <label>
          날짜
          <input type="date" value={date} onChange={(event) => handleDateChange(event.target.value)} />
        </label>
        <label>
          시작
          <input type="time" value={startTime} onChange={(event) => setStartTime(event.target.value)} />
        </label>
        <label>
          종료
          <input type="time" value={endTime} onChange={(event) => setEndTime(event.target.value)} />
        </label>
      </div>

      <div className="modalSection lessonModalSection">
        <div className="sectionHeader">
          <label>포함 학생</label>
          <span className="muted">선택 {studentIds.length}명</span>
        </div>
        <div className="lessonStudentSearchRow">
          <input
            value={studentSearch}
            onChange={(event) => setStudentSearch(event.target.value)}
            placeholder="학생 이름 또는 반으로 검색"
          />
          <button className="softButton" onClick={() => setStudentIds(filteredStudents.map((student) => student.studentId))} type="button">
            보이는 학생 선택
          </button>
        </div>
        <small className="muted">전체 {activeStudents.length}명</small>
        <div className="lessonStudentGroups">
          {groupedStudents.map((group) => (
            <div className="lessonStudentGroup" key={group.grade}>
              <div>
                <strong>{group.grade}</strong>
                <button
                  className="softButton mini"
                  onClick={() => {
                    const groupIds = group.students.map((student) => student.studentId);
                    setStudentIds((current) => Array.from(new Set([...current, ...groupIds])));
                  }}
                  type="button"
                >
                  전체 선택
                </button>
                <button
                  className="softButton mini"
                  onClick={() => {
                    const groupIds = new Set(group.students.map((student) => student.studentId));
                    setStudentIds((current) => current.filter((studentId) => !groupIds.has(studentId)));
                  }}
                  type="button"
                >
                  전체 해제
                </button>
              </div>
              <div className="studentChips">
                {group.students.map((student) => {
                  const isSelected = studentIds.includes(student.studentId);
                  return (
                    <button
                      className={isSelected ? "lessonStudentChip selected" : "lessonStudentChip"}
                      key={student.studentId}
                      onClick={() =>
                        setStudentIds((current) =>
                          isSelected
                            ? current.filter((studentId) => studentId !== student.studentId)
                            : [...current, student.studentId]
                        )
                      }
                      type="button"
                    >
                      {student.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lessonModalActions">
        <button
          className="primaryButton full"
          onClick={() => onSubmit({ classTemplateId, color, date, endTime, lessonType, name, startTime, studentIds })}
          type="button"
        >
          ✅ {initialLesson ? "수업 수정 저장" : "수업 등록"}
        </button>
        <button className="softButton" onClick={onClose} type="button">취소</button>
      </div>
    </Modal>
  );
}

function parseCsvRows(text) {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const nextChar = text[index + 1];

    if (char === '"' && nextChar === '"' && inQuotes) {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") index += 1;
      row.push(current);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      current = "";
      continue;
    }

    current += char;
  }

  row.push(current);
  if (row.some((cell) => cell.trim())) rows.push(row);

  if (rows.length < 2) return [];
  const headers = rows[0].map((header) => header.replace(/^\uFEFF/, "").trim());
  return rows.slice(1).map((cells, index) => {
    const result = { csvRowNumber: index + 2 };
    headers.forEach((header, headerIndex) => {
      result[header] = (cells[headerIndex] ?? "").trim();
    });
    return result;
  });
}

function csvValue(row, candidates) {
  const normalizedEntries = Object.entries(row).map(([key, value]) => [key.replace(/\s+/g, "").toLowerCase(), value]);
  for (const candidate of candidates) {
    const normalizedCandidate = candidate.replace(/\s+/g, "").toLowerCase();
    const found = normalizedEntries.find(([key]) => key.includes(normalizedCandidate) || normalizedCandidate.includes(key));
    if (found?.[1]) return found[1];
  }
  return "";
}

function numberFromText(value) {
  const match = String(value ?? "").match(/\d+/);
  return match ? Number(match[0]) : null;
}

function buildTallySubmission(row, index, { examCycle, classTemplateId, students }) {
  const studentName = csvValue(row, ["학생명", "이름", "성명", "name"]) || `제출 ${index + 1}`;
  const matchedStudent = students.find((student) => student.name === studentName || student.loginId === studentName);
  return {
    submissionId: `tally_${safeIdPart(examCycle)}_${safeIdPart(studentName)}_${Date.now()}_${index}`,
    classTemplateId,
    examCycle,
    studentId: matchedStudent?.studentId ?? "",
    studentName,
    schoolName: matchedStudent?.schoolName || csvValue(row, ["학교", "학교명"]),
    grade: matchedStudent?.grade || csvValue(row, ["학년"]),
    difficulty: numberFromText(csvValue(row, ["시험 난이도", "난이도", "difficulty"])),
    preparation: numberFromText(csvValue(row, ["준비 충분도", "준비충분도", "준비", "preparation"])),
    academyHelp: csvValue(row, ["학원 도움", "도움", "academy"]),
    nextGoal: csvValue(row, ["다음 목표", "목표"]),
    goodPart: csvValue(row, ["잘 준비한 부분", "잘한 부분"]),
    regretReason: csvValue(row, ["아쉬웠던 이유", "아쉬운 이유"]),
    needMore: csvValue(row, ["더 준비할 부분", "보완할 부분"]),
    wantedHelp: csvValue(row, ["도움받고 싶은 것", "도움 받고 싶은 것"]),
    freeComment: csvValue(row, ["학생 코멘트", "하고 싶은 말", "의견", "comment"]),
    raw: row,
    importedAt: new Date().toISOString()
  };
}

function summarizeTallySubmissions(submissions) {
  if (!submissions.length) return "아직 생성된 AI 총평 초안이 없습니다.";
  const difficultyValues = submissions.map((item) => item.difficulty).filter((value) => Number.isFinite(value));
  const preparationValues = submissions.map((item) => item.preparation).filter((value) => Number.isFinite(value));
  const average = (values) => values.length ? (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1) : "-";
  const goals = submissions.map((item) => item.nextGoal).filter(Boolean).slice(0, 5);
  const needs = submissions.map((item) => item.needMore || item.wantedHelp).filter(Boolean).slice(0, 5);

  return [
    `제출 ${submissions.length}명 기준 요약입니다.`,
    `시험 난이도 평균: ${average(difficultyValues)}`,
    `준비 충분도 평균: ${average(preparationValues)}`,
    goals.length ? `다음 목표: ${goals.join(" / ")}` : "",
    needs.length ? `보완 필요: ${needs.join(" / ")}` : "",
    "학생별 세부 응답은 왼쪽 카드에서 확인하고, 최종 총평은 학교별 총평 모달에 반영하세요."
  ].filter(Boolean).join("\n");
}

function ExamPrepCenter({
  aiSettings = defaultAiSettings,
  examPostSubmissions = [],
  examPostTargetStudentIds = {},
  rowSaveStates = {},
  tallySubmissions = [],
  tallySummaries = {},
  rows,
  students,
  templates,
  onConfirmExamPostSubmission,
  onEnsureExamCycleRows,
  onSetExamPostTargetStudentIds,
  onSetTallySubmissions,
  onSetTallySummaries,
  onUpdateRow,
  onDeleteRow
}) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("info");
  const [selectedClassTemplateId, setSelectedClassTemplateId] = useState("template_mwf_7_10");
  const [selectedExamCycle, setSelectedExamCycle] = useState(currentExamCycle);
  const [editingExamPrepId, setEditingExamPrepId] = useState("");
  const [reviewModalRowId, setReviewModalRowId] = useState("");
  const [tallyImportStatus, setTallyImportStatus] = useState("");
  const [pastPaperFrameKey, setPastPaperFrameKey] = useState(0);
  const [pastPaperLoadState, setPastPaperLoadState] = useState("loading");
  const setTallySubmissions = onSetTallySubmissions ?? (() => {});
  const setTallySummaries = onSetTallySummaries ?? (() => {});
  const pastPaperArchiveUrl =
    "https://script.google.com/macros/s/AKfycbyYi-NUHHzb9vrBl4Adj6Pq9zXIZJ9oR97g-uQyAf7up7AGVzeRdBUqfVcUZ1zjQiug/exec";
  const classStudents = students.filter(
    (student) => (student.status ?? "active") === "active" && student.defaultClassTemplateId === selectedClassTemplateId
  );
  const classSchoolGradeKeys = new Set(classStudents.map(getStudentSchoolGradeKey).filter(Boolean));
  const displayRows = dedupeExamPrepRowsForDisplay(rows);
  const visibleRows = displayRows.filter((row) => {
    const rowCycle = row.examCycle ?? currentExamCycle;
    const matchesCycle = rowCycle === selectedExamCycle;
    const matchesClass = classSchoolGradeKeys.has(getExamPrepSchoolGradeKey(row));
    return matchesCycle && matchesClass;
  });
  const filteredRows = visibleRows.filter((row) => {
    const haystack = [
      row.schoolName,
      row.grade,
      row.subject,
      row.publisher,
      row.scope,
      row.subTextbook,
      row.examPeriod,
      normalizeMathExamEntries(row).map((entry) => `${entry.date} ${entry.grade} ${entry.subject} ${entry.label}`).join(" "),
      row.mathExamDate,
      row.specialNote,
      row.memo
    ].join(" ");
    return haystack.toLowerCase().includes(query.toLowerCase());
  });
  const examPrepSaveState = getAggregateSaveState(filteredRows.map((row) => rowSaveStates[row.examPrepId]));
  const selectedClass = templates.find((template) => template.classTemplateId === selectedClassTemplateId);
  const editingExamPrepRow = visibleRows.find((row) => row.examPrepId === editingExamPrepId) ?? null;
  const reviewModalRow = visibleRows.find((row) => row.examPrepId === reviewModalRowId) ?? null;
  const visibleTallySubmissions = tallySubmissions.filter(
    (submission) => submission.examCycle === selectedExamCycle && submission.classTemplateId === selectedClassTemplateId
  );
  const tallyDifficultyValues = visibleTallySubmissions.map((item) => item.difficulty).filter(Number.isFinite);
  const tallyPreparationValues = visibleTallySubmissions.map((item) => item.preparation).filter(Number.isFinite);
  const tallyAverageLabel = (values) => {
    if (!values.length) return "-";
    return (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1);
  };
  const tallySummaryKey = `${selectedClassTemplateId}_${selectedExamCycle}`;
  const tallySummary = tallySummaries[tallySummaryKey] ?? summarizeTallySubmissions(visibleTallySubmissions);
  const examManagementTabs = [
    {
      id: "info",
      label: "시험정보"
    },
    {
      id: "postSubmit",
      label: "시험 후 제출"
    },
    {
      id: "pastPapers",
      label: "기출문제"
    }
  ];

  function changeExamCycle(examCycle) {
    setSelectedExamCycle(examCycle);
    onEnsureExamCycleRows(examCycle, selectedClassTemplateId);
  }

  function changeClassTemplate(classTemplateId) {
    setSelectedClassTemplateId(classTemplateId);
    onEnsureExamCycleRows(selectedExamCycle, classTemplateId);
  }

  async function importTallyCsv(file) {
    if (!file) return;
    setTallyImportStatus("파일을 읽는 중입니다.");
    try {
      const text = await file.text();
      const parsedRows = parseCsvRows(text);
      const nextSubmissions = parsedRows.map((row, index) =>
        buildTallySubmission(row, index, {
          classTemplateId: selectedClassTemplateId,
          examCycle: selectedExamCycle,
          students
        })
      );
      setTallySubmissions((current) => [
        ...nextSubmissions,
        ...current.filter(
          (submission) =>
            !(submission.examCycle === selectedExamCycle && submission.classTemplateId === selectedClassTemplateId)
        )
      ]);
      setTallySummaries((current) => ({
        ...current,
        [tallySummaryKey]: summarizeTallySubmissions(nextSubmissions)
      }));
      setTallyImportStatus(`${file.name} · ${nextSubmissions.length}명 제출을 불러왔습니다.`);
    } catch (error) {
      setTallyImportStatus(`CSV 읽기 실패 · ${error.message}`);
    }
  }

  function refreshTallySummary() {
    setTallySummaries((current) => ({
      ...current,
      [tallySummaryKey]: summarizeTallySubmissions(visibleTallySubmissions)
    }));
  }

  function getEditableMathExamEntries(row) {
    const entries = normalizeMathExamEntries(row, { includeBlank: true });
    return entries.length ? entries : [{ ...createMathExamEntry(row, 0), date: "" }];
  }

  function commitMathExamEntries(row, entries) {
    onUpdateRow(row.examPrepId, "mathExamDates", entries);
    onUpdateRow(row.examPrepId, "mathExamDate", syncPrimaryMathExamDate(entries));
  }

  function updateMathExamEntry(row, entryIndex, field, value) {
    const entries = getEditableMathExamEntries(row).map((entry, index) =>
      index === entryIndex ? { ...entry, [field]: value } : entry
    );
    commitMathExamEntries(row, entries);
  }

  function addMathExamEntry(row) {
    const entries = getEditableMathExamEntries(row);
    const uniqueIndex = Date.now();
    commitMathExamEntries(row, [
      ...entries,
      {
        ...createMathExamEntry(row, uniqueIndex),
        id: `math_${safeIdPart(row.examPrepId || "exam")}_${uniqueIndex}`,
        date: ""
      }
    ]);
  }

  function removeMathExamEntry(row, entryIndex) {
    const entries = getEditableMathExamEntries(row).filter((_, index) => index !== entryIndex);
    commitMathExamEntries(row, entries);
  }

  return (
    <section className="panel fullPanel examPrepCenter">
      <div className="sectionHeader">
        <div>
          <h1>시험관리</h1>
          <p className="muted">{selectedClass?.name} · {examCycleLabel(selectedExamCycle)}</p>
        </div>
        <div className="examPrepHeaderActions">
          {activeTab === "info" ? (
            <input
              className="searchInput"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="학교, 과목, 출판사 검색"
            />
          ) : null}
        </div>
      </div>

      <div className="examManagementTabs" aria-label="시험관리 하위 탭">
        {examManagementTabs.map((tab) => (
          <button
            className={activeTab === tab.id ? "active" : ""}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab !== "pastPapers" ? (
        <div className="classTabList">
          {templates.map((template) => (
            <button
              className={selectedClassTemplateId === template.classTemplateId ? "active" : ""}
              key={template.classTemplateId}
              onClick={() => changeClassTemplate(template.classTemplateId)}
              type="button"
            >
              <strong>{template.name}</strong>
            </button>
          ))}
        </div>
      ) : null}

      {activeTab === "info" ? (
        <>
          <div className="examCycleBar">
            <strong>현재 고사</strong>
            <select value={selectedExamCycle} onChange={(event) => changeExamCycle(event.target.value)}>
              <option value="2026-1-mid">2026 1학기 중간</option>
              <option value="2026-1-final">2026 1학기 기말</option>
              <option value="2026-2-mid">2026 2학기 중간</option>
              <option value="2026-2-final">2026 2학기 기말</option>
            </select>
            <span>{filteredRows.length}개 시험정보 · {classStudents.length}명</span>
            {examPrepSaveState !== "idle" ? (
              <InlineSaveStatus className="examCycleSaveStatus" label="시험정보" saveState={examPrepSaveState} />
            ) : null}
          </div>
          <div className="examPrepTable">
            <div className="examPrepRow examPrepHead">
              <span>학교명</span>
              <span>특이사항</span>
              <span>학년</span>
              <span>과목</span>
              <span>출판사</span>
              <span>시험기간</span>
              <span>수학 시험 일정</span>
              <span>시험 범위</span>
              <span>부교재</span>
              <span>시험 후 총평</span>
              <span>관리</span>
            </div>
            {filteredRows.map((row) => {
              const specialNote = row.specialNote ?? row.memo ?? "";
              const reviewSummary = row.revisedReview || row.review || "시험 후 총평 미작성";

              return (
                <div className="examPrepRow" key={row.examPrepId}>
                  <div className="examReadCell strong">{row.schoolName || "-"}</div>
                  <div className="examReadCell multiline">{specialNote || "특이사항 없음"}</div>
                  <div className="examReadCell">{row.grade || "-"}</div>
                  <div className="examReadCell">{row.subject || "-"}</div>
                  <div className="examReadCell">{row.publisher || "-"}</div>
                  <div className="examReadCell">{row.examPeriod || "미입력"}</div>
                  <div className="examReadCell mathExamEntryList">
                    {normalizeMathExamEntries(row).length ? (
                      normalizeMathExamEntries(row).map((entry, index) => (
                        <span className="mathExamEntryChip" key={entry.id || index}>
                          <strong>{formatShortDate(entry.date)}</strong>
                          {formatMathExamEntryLabel(row, entry)}
                        </span>
                      ))
                    ) : (
                      "미입력"
                    )}
                  </div>
                  <textarea
                    aria-label={`${row.schoolName || "학교"} 시험 범위`}
                    className="examPrepInlineTextarea"
                    value={row.scope ?? ""}
                    onChange={(event) => onUpdateRow(row.examPrepId, "scope", event.target.value)}
                    placeholder="시험 범위"
                  />
                  <textarea
                    aria-label={`${row.schoolName || "학교"} 부교재`}
                    className="examPrepInlineTextarea"
                    value={row.subTextbook ?? ""}
                    onChange={(event) => onUpdateRow(row.examPrepId, "subTextbook", event.target.value)}
                    placeholder="부교재"
                  />
                  <button className={row.review || row.revisedReview ? "examReviewOpenButton filled" : "examReviewOpenButton"} onClick={() => setReviewModalRowId(row.examPrepId)} type="button">
                    <strong>{row.review || row.revisedReview ? "총평 보기/수정" : "총평 작성"}</strong>
                    <span>{reviewSummary}</span>
                  </button>
                  <div className="examPrepRowActions">
                    {rowSaveStates[row.examPrepId] ? <InlineSaveStatus saveState={rowSaveStates[row.examPrepId]} /> : null}
                    <button className="softButton compact" onClick={() => setEditingExamPrepId(row.examPrepId)} type="button">수정</button>
                    <button className="dangerSoftButton compact" onClick={() => onDeleteRow?.(row.examPrepId)} type="button">삭제</button>
                  </div>
                </div>
              );
            })}
            {filteredRows.length === 0 ? (
              <div className="examPrepEmptyState">
                <strong>표시할 시험정보가 없습니다.</strong>
                <span>반 또는 고사를 바꾸면 해당 조건의 시험정보가 표시됩니다.</span>
              </div>
            ) : null}
          </div>
        </>
      ) : null}

      {activeTab === "postSubmit" ? (
        <ExamPostSubmissionManager
          examPostTargetStudentIds={examPostTargetStudentIds}
          onUpdateRow={onUpdateRow}
          rows={filteredRows}
          selectedClass={selectedClass}
          selectedExamCycle={selectedExamCycle}
          submissions={examPostSubmissions}
          students={classStudents}
          onConfirmExamPostSubmission={onConfirmExamPostSubmission}
          onSetExamPostTargetStudentIds={onSetExamPostTargetStudentIds}
        />
      ) : null}

      {activeTab === "pastPapers" ? (
        <section className="pastPaperFramePanel">
          <div className="pastPaperToolbar">
            <div>
              <h2>기출문제 아카이브</h2>
              <p className="muted">외부 Google Apps Script 웹앱을 academy-os 안에서 엽니다.</p>
            </div>
            <div className="pastPaperActions">
              <button
                className="softButton"
                onClick={() => {
                  setPastPaperLoadState("loading");
                  setPastPaperFrameKey((current) => current + 1);
                }}
                type="button"
              >
                다시 불러오기
              </button>
              <a className="softButton" href={pastPaperArchiveUrl} rel="noreferrer" target="_blank">
                새 창에서 열기
              </a>
            </div>
          </div>
          <div className="pastPaperFrameWrap">
            {pastPaperLoadState === "loading" ? (
              <div className="pastPaperLoading">기출문제 아카이브를 불러오는 중입니다.</div>
            ) : null}
            <iframe
              className="pastPaperFrame"
              key={pastPaperFrameKey}
              onLoad={() => setPastPaperLoadState("loaded")}
              src={pastPaperArchiveUrl}
              title="으뜸수학 기출아카이브"
            />
          </div>
          <p className="pastPaperHelp">
            화면이 비어 있으면 Google Apps Script가 iframe 표시를 제한한 상태일 수 있습니다. 이 경우 새 창에서 열기를 사용하세요.
          </p>
        </section>
      ) : null}

      {reviewModalRow ? (
        <ExamReviewComposerModal
          aiSettings={aiSettings}
          saveState={rowSaveStates[reviewModalRow.examPrepId] ?? "idle"}
          row={reviewModalRow}
          onClose={() => setReviewModalRowId("")}
          onUpdateRow={onUpdateRow}
        />
      ) : null}
      {editingExamPrepRow ? (
        <ExamPrepEditModal
          row={editingExamPrepRow}
          saveState={rowSaveStates[editingExamPrepRow.examPrepId] ?? "idle"}
          getEditableMathExamEntries={getEditableMathExamEntries}
          onAddMathExamEntry={addMathExamEntry}
          onClose={() => setEditingExamPrepId("")}
          onRemoveMathExamEntry={removeMathExamEntry}
          onUpdateMathExamEntry={updateMathExamEntry}
          onUpdateRow={onUpdateRow}
        />
      ) : null}
    </section>
  );
}

function ExamPrepEditModal({
  getEditableMathExamEntries,
  onAddMathExamEntry,
  onClose,
  onRemoveMathExamEntry,
  onUpdateMathExamEntry,
  onUpdateRow,
  row,
  saveState = "idle"
}) {
  const specialNote = row.specialNote ?? row.memo ?? "";

  return (
    <Modal
      className="examPrepEditModal"
      title={`${row.schoolName || "학교 미입력"} 시험정보 수정`}
      subtitle={[row.grade, row.subject, row.publisher].filter(Boolean).join(" · ") || "시험관리 상세 입력"}
      onClose={onClose}
    >
      <div className="examPrepEditForm">
        <section className="examPrepEditSection">
          <h2>기본 정보</h2>
          <div className="examPrepEditGrid">
            <label>
              <span>학교명</span>
              <input value={row.schoolName ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "schoolName", event.target.value)} />
            </label>
            <label>
              <span>학년</span>
              <input value={row.grade ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "grade", event.target.value)} />
            </label>
            <label>
              <span>과목</span>
              <input value={row.subject ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "subject", event.target.value)} />
            </label>
            <label>
              <span>출판사</span>
              <input value={row.publisher ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "publisher", event.target.value)} />
            </label>
          </div>
        </section>

        <section className="examPrepEditSection">
          <h2>시험 일정</h2>
          <div className="examPrepDateGrid examDateRangeInputs">
            <label>
              <span>시험기간 시작일</span>
              <input
                type="date"
                value={getDateRangeField(row.examPeriod, "date")}
                onChange={(event) =>
                  onUpdateRow(row.examPrepId, "examPeriod", updateDateRangeField(row.examPeriod, "date", event.target.value))
                }
              />
            </label>
            <label>
              <span>시험기간 종료일</span>
              <input
                type="date"
                value={getDateRangeField(row.examPeriod, "endDate")}
                onChange={(event) =>
                  onUpdateRow(row.examPrepId, "examPeriod", updateDateRangeField(row.examPeriod, "endDate", event.target.value))
                }
              />
            </label>
          </div>
          <div className="mathExamEntryEditor modalMathExamEntryEditor">
            {getEditableMathExamEntries(row).map((entry, entryIndex) => (
              <div className="mathExamEntryRow" key={entry.id || entryIndex}>
                <label>
                  <span>수학시험 날짜</span>
                  <input
                    type="date"
                    value={entry.date ?? ""}
                    onChange={(event) => onUpdateMathExamEntry(row, entryIndex, "date", event.target.value)}
                  />
                </label>
                <label>
                  <span>학년</span>
                  <input
                    value={entry.grade ?? ""}
                    placeholder="예: 고3"
                    onChange={(event) => onUpdateMathExamEntry(row, entryIndex, "grade", event.target.value)}
                  />
                </label>
                <label>
                  <span>과목</span>
                  <input
                    value={entry.subject ?? ""}
                    placeholder="예: 미적분"
                    onChange={(event) => onUpdateMathExamEntry(row, entryIndex, "subject", event.target.value)}
                  />
                </label>
                <label>
                  <span>표시명</span>
                  <input
                    value={entry.label ?? ""}
                    placeholder="표시명 선택"
                    onChange={(event) => onUpdateMathExamEntry(row, entryIndex, "label", event.target.value)}
                  />
                </label>
                <button className="iconTinyButton" type="button" onClick={() => onRemoveMathExamEntry(row, entryIndex)}>
                  삭제
                </button>
              </div>
            ))}
            <button className="tinySoftButton" type="button" onClick={() => onAddMathExamEntry(row)}>
              + 수학시험 추가
            </button>
          </div>
        </section>

        <section className="examPrepEditSection">
          <h2>시험 내용</h2>
          <div className="examPrepTextareaGrid">
            <label>
              <span>특이사항</span>
              <textarea
                value={specialNote}
                onChange={(event) => onUpdateRow(row.examPrepId, "specialNote", event.target.value)}
                placeholder="학교별 특이사항"
              />
            </label>
            <label>
              <span>시험 범위</span>
              <textarea value={row.scope ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "scope", event.target.value)} />
            </label>
            <label>
              <span>부교재</span>
              <textarea value={row.subTextbook ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "subTextbook", event.target.value)} />
            </label>
          </div>
        </section>

        <div className="modalActionBar">
          {saveState !== "idle" ? <InlineSaveStatus label="시험정보" saveState={saveState} /> : null}
          <button className="primaryButton" onClick={onClose} type="button">닫기</button>
        </div>
      </div>
    </Modal>
  );
}

function ExamPostSubmissionManager({
  examPostTargetStudentIds = {},
  rows = [],
  selectedClass,
  selectedExamCycle,
  students = [],
  submissions = [],
  onConfirmExamPostSubmission,
  onSetExamPostTargetStudentIds
}) {
  const targets = students.flatMap((student) => buildExamPostTargetsForStudent(student, rows, submissions, examPostTargetStudentIds));
  const submittedTargets = targets.filter((target) => target.submission?.submittedAt);
  const missingTargets = targets.filter((target) => !target.submission?.submittedAt);
  const confirmedTargets = submittedTargets.filter((target) => target.submission?.teacherConfirmed);

  function getRowCandidateStudents(row) {
    return students.filter((student) => schoolMatchesStudent(row.schoolName, student.schoolName) && gradeMatchesStudent(row.grade, student.grade));
  }

  function getRowTargetStudentIds(row) {
    return Array.isArray(examPostTargetStudentIds[row.examPrepId]) ? examPostTargetStudentIds[row.examPrepId] : [];
  }

  function updateRowTargetStudentIds(row, nextIds) {
    onSetExamPostTargetStudentIds?.((current) => ({
      ...(current ?? {}),
      [row.examPrepId]: Array.from(new Set(nextIds))
    }));
  }

  function toggleRowTargetStudent(row, studentId) {
    const currentIds = getRowTargetStudentIds(row);
    updateRowTargetStudentIds(
      row,
      currentIds.includes(studentId)
        ? currentIds.filter((id) => id !== studentId)
        : [...currentIds, studentId]
    );
  }

  return (
    <section className="examPostManager">
      <div className="sectionHeader slim">
        <div>
          <h2>시험 후 제출 관리</h2>
          <p className="muted">{selectedClass?.name ?? "반 미선택"} · {examCycleLabel(selectedExamCycle)} · 학생 앱 제출 현황</p>
        </div>
      </div>
      <div className="tallyStats examPostStats">
        <article>
          <span>대상</span>
          <strong>{targets.length}명</strong>
        </article>
        <article>
          <span>제출 완료</span>
          <strong>{submittedTargets.length}명</strong>
        </article>
        <article>
          <span>미제출</span>
          <strong>{missingTargets.length}명</strong>
        </article>
        <article>
          <span>확인 완료</span>
          <strong>{confirmedTargets.length}명</strong>
        </article>
      </div>

      <div className="examPostTargetList">
        {rows.length === 0 ? (
          <div className="emptyState">현재 반에 연결된 시험정보가 없습니다.</div>
        ) : null}
        {rows.map((row) => {
          const candidates = getRowCandidateStudents(row);
          const selectedIds = getRowTargetStudentIds(row);
          const mathEntries = normalizeMathExamEntries(row).filter((entry) => entry.date);
          const mathLabel = mathEntries.length
            ? mathEntries.map((entry) => formatMathExamEntryLabel(row, entry)).join(", ")
            : row.subject || "수학";
          return (
            <article className="examPostTargetGroup" key={`targets_${row.examPrepId}`}>
              <div>
                <strong>{row.schoolName} {row.grade} 셀프체크 대상</strong>
                <span>{mathLabel} · 선택 {selectedIds.length}명 / 후보 {candidates.length}명</span>
              </div>
              <div className="examPostTargetActions">
                <button className="softButton compact" onClick={() => updateRowTargetStudentIds(row, candidates.map((student) => student.studentId))} type="button">전체 선택</button>
                <button className="softButton compact subtle" onClick={() => updateRowTargetStudentIds(row, [])} type="button">전체 해제</button>
              </div>
              <div className="examPostTargetStudents">
                {candidates.length === 0 ? <span className="muted">해당 학교/학년 학생이 없습니다.</span> : null}
                {candidates.map((student) => {
                  const checked = selectedIds.includes(student.studentId);
                  return (
                    <label className={checked ? "examPostTargetStudent active" : "examPostTargetStudent"} key={`${row.examPrepId}_${student.studentId}`}>
                      <input checked={checked} onChange={() => toggleRowTargetStudent(row, student.studentId)} type="checkbox" />
                      <span>{student.name}</span>
                    </label>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>

      <div className="examPostList">
        {targets.length === 0 ? (
          <div className="emptyState">선택된 셀프체크 대상이 없습니다. 위에서 제출 받을 학생을 체크하세요.</div>
        ) : null}
        {targets.map((target) => {
          const submission = target.submission;
          return (
            <article className={submission ? "examPostItem submitted" : "examPostItem missing"} key={target.targetId}>
              <div>
                <strong>{submission?.studentName || target.studentName || "학생"}</strong>
                <span>{target.schoolName} · {target.grade} · {target.subject} · {target.examDate}</span>
                <small>{submission ? `제출 ${formatKoreanDateTime(submission.submittedAt)}` : `미제출 · 마감 ${target.dueDate} 23:59`}</small>
              </div>
              {submission ? (
                <div className="examPostDetail">
                  <span>점수 <b>{submission.score || "-"}</b></span>
                  <span>난이도 <b>{submission.difficulty || "-"}</b></span>
                  <span>준비 <b>{submission.preparation || "-"}</b></span>
                  <span>전체 소감 <b>{submission.feeling || "-"}</b></span>
                  <span>학원 도움 <b>{submission.academyHelp || "-"}</b></span>
                  <p><b>잘 준비한 부분</b>{submission.goodPart || "-"}</p>
                  <p><b>실력 발휘 단원/유형</b>{submission.strongUnit || "-"}</p>
                  <p><b>아쉬웠던 이유</b>{submission.regretReason || "-"}</p>
                  <p><b>더 준비할 부분</b>{submission.neededMore || "-"}</p>
                  <p><b>시험장 아쉬운 순간</b>{submission.regretMoment || "-"}</p>
                  <p><b>공부 과정 어려움</b>{[...(submission.studyDifficulties ?? []), submission.studyDifficultyOther].filter(Boolean).join(", ") || "-"}</p>
                  <p><b>수업/자료 피드백</b>{submission.academyFeedback || "-"}</p>
                  <p><b>다음 목표</b>{submission.nextGoal || "-"}</p>
                  <p><b>바꾸고 싶은 것</b>{submission.changeForNextExam || "-"}</p>
                  <p><b>도움 요청</b>{submission.wantedHelp || "-"}</p>
                  <p><b>건의사항</b>{submission.freeComment || "-"}</p>
                  {submission.fileAttachments?.length ? (
                    <div className="examPostFileList">
                      {submission.fileAttachments.map((file, index) => (
                        <a
                          className={file.uploadStatus === "failed" ? "examPostFile failed" : "examPostFile"}
                          href={file.uploadStatus === "failed" ? undefined : getExamPostFileOpenUrl(file)}
                          key={`${submission.submissionId}_${file.fileName}_${index}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {file.uploadStatus === "failed" ? "업로드 실패" : "파일 보기"} · {file.fileName}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <small>첨부 파일 없음</small>
                  )}
                </div>
              ) : (
                <div className="examPostDetail muted">학생 앱에 제출 카드가 표시됩니다.</div>
              )}
              {submission ? (
                <button
                  className={submission.teacherConfirmed ? "softButton" : "primaryButton compact"}
                  onClick={() => onConfirmExamPostSubmission?.(submission.submissionId, !submission.teacherConfirmed)}
                  type="button"
                >
                  {submission.teacherConfirmed ? "확인 완료" : "확인 처리"}
                </button>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ExamReviewComposerModal({ aiSettings = defaultAiSettings, onClose, onUpdateRow, row, saveState = "idle" }) {
  const commentAiProvider = aiSettings.commentProvider ?? defaultAiSettings.commentProvider;
  const commentAiModel = aiSettings.commentModel ?? defaultAiSettings.commentModel;
  const copyStatusTimerRef = useRef(null);
  const latestReviewDraftRef = useRef("");
  const saveReviewTimerRef = useRef(null);
  const [reviewCopyStatus, setReviewCopyStatus] = useState("");
  const [reviewDraft, setReviewDraft] = useState(() => {
    const currentReview = String(row.review ?? "");
    const initialReview = currentReview.trim() ? normalizeExamReviewDraftText(currentReview, row) : createExamReviewDraft(row);
    latestReviewDraftRef.current = initialReview;
    return initialReview;
  });

  useEffect(() => {
    if (!row.examPrepId) return;
    const currentReview = String(row.review ?? "");
    const nextReview = currentReview.trim() ? normalizeExamReviewDraftText(currentReview, row) : createExamReviewDraft(row);
    latestReviewDraftRef.current = nextReview;
    setReviewDraft(nextReview);
    if (nextReview === currentReview) return;
    onUpdateRow(row.examPrepId, "review", nextReview);
  }, [row.examPrepId]);

  useEffect(() => () => {
    if (copyStatusTimerRef.current) clearTimeout(copyStatusTimerRef.current);
    if (saveReviewTimerRef.current) clearTimeout(saveReviewTimerRef.current);
  }, []);

  function flushPendingReviewSave() {
    if (saveReviewTimerRef.current) {
      clearTimeout(saveReviewTimerRef.current);
      saveReviewTimerRef.current = null;
    }
    onUpdateRow(row.examPrepId, "review", latestReviewDraftRef.current);
  }

  function scheduleReviewDraftSave(value) {
    latestReviewDraftRef.current = value;
    if (saveReviewTimerRef.current) clearTimeout(saveReviewTimerRef.current);
    saveReviewTimerRef.current = setTimeout(() => {
      saveReviewTimerRef.current = null;
      onUpdateRow(row.examPrepId, "review", latestReviewDraftRef.current);
    }, 500);
  }

  function updateReviewDraft(value) {
    setReviewDraft(value);
    scheduleReviewDraftSave(value);
  }

  function handleClose() {
    flushPendingReviewSave();
    onClose();
  }

  async function copyRevisedReview() {
    const copied = await copyTextToClipboard(row.revisedReview ?? "");
    setReviewCopyStatus(copied ? "복사되었습니다." : "복사할 내용을 확인해 주세요.");
    if (copyStatusTimerRef.current) clearTimeout(copyStatusTimerRef.current);
    copyStatusTimerRef.current = setTimeout(() => {
      copyStatusTimerRef.current = null;
      setReviewCopyStatus("");
    }, 1800);
  }

  async function polishReview() {
    onUpdateRow(row.examPrepId, "reviewAiStatus", "AI 수정 중");
    try {
      const response = await fetch(apiUrl("/api/ai/comment-polish"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aiProvider: commentAiProvider,
          aiModel: commentAiModel,
          aiPrompt: getAiPrompt(aiSettings, "examReviewSpelling"),
          audience: "teacher",
          grade: row.grade,
          homeworkStatus: "시험 후 총평",
          lessonDate: row.mathExamDate || row.examPeriod || today,
          lessonName: `${row.schoolName} ${row.subject} 시험 총평`,
          polishMode: "spellingOnly",
          rawText: reviewDraft,
          schoolName: row.schoolName,
          studentName: "시험관리"
        })
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "시험 후 총평 AI 수정에 실패했습니다.");
      }
      onUpdateRow(row.examPrepId, "revisedReview", result.result.polishedText);
      onUpdateRow(row.examPrepId, "reviewAiStatus", `완료 · ${result.result.provider}`);
    } catch (error) {
      onUpdateRow(row.examPrepId, "reviewAiStatus", `실패 · ${error.message}`);
    }
  }

  return (
    <Modal
      className="commentComposerModal examReviewComposerModal"
      title={`${row.schoolName} 시험 후 총평`}
      subtitle={`${row.grade} · ${row.subject} · ${row.publisher || "출판사 미입력"}`}
      onClose={handleClose}
    >
      {saveState !== "idle" ? (
        <div className="modalSaveStatusBar">
          <InlineSaveStatus label="시험정보" saveState={saveState} />
        </div>
      ) : null}
      <div className="commentComposerGrid">
        <section className="commentDraftPanel">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">ORIGINAL</p>
              <h2>시험 후 총평</h2>
            </div>
            <button className="softButton" onClick={polishReview} type="button">AI 수정</button>
          </div>
          <textarea
            className="commentComposerTextarea"
            value={reviewDraft}
            onBlur={flushPendingReviewSave}
            onChange={(event) => updateReviewDraft(event.target.value)}
            placeholder="탈리 제출 원문, 현장 체감, 학생 반응 등을 적어주세요."
          />
          <small className="muted">{row.reviewAiStatus || "AI 대기"}</small>
        </section>

        <section className="commentPreviewPanel">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">REVISED</p>
              <h2>시험 후 총평 수정본</h2>
            </div>
            <button
              className="softButton"
              disabled={!String(row.revisedReview ?? "").trim()}
              onClick={copyRevisedReview}
              type="button"
            >
              수정본 복사
            </button>
          </div>
          <textarea
            className="commentComposerTextarea"
            value={row.revisedReview ?? ""}
            onChange={(event) => {
              setReviewCopyStatus("");
              onUpdateRow(row.examPrepId, "revisedReview", event.target.value);
            }}
            placeholder="AI가 다듬은 총평 또는 강사가 최종 수정한 총평이 들어갑니다."
          />
          {reviewCopyStatus ? (
            <small className="reviewCopyStatus" role="status" aria-live="polite">{reviewCopyStatus}</small>
          ) : null}
        </section>
      </div>
    </Modal>
  );
}

const aiProviderModels = {
  anthropic: ["claude-opus-4-8", "claude-sonnet-4-5", "claude-3-5-sonnet-latest", "claude-3-5-haiku-latest"],
  mock: ["local-mock"],
  auto: ["server-default"],
  openai: ["gpt-5.5", "gpt-4.1-mini", "gpt-4.1", "gpt-4o-mini"]
};

function getAiModelLabel(model) {
  if (model === "server-default") return "서버 기본값";
  if (model === "local-mock") return "테스트 응답";
  return model;
}

function getAiProviderLabel(provider) {
  if (provider === "openai") return "OpenAI";
  if (provider === "anthropic") return "Claude";
  if (provider === "mock") return "테스트 모드";
  return "자동 선택";
}

function NotificationSettingsSection({ integrationStatus }) {
  const [testSendResult, setTestSendResult] = useState("");
  const [testSendDetail, setTestSendDetail] = useState(null);
  const [testingTemplate, setTestingTemplate] = useState("");
  const notificationStatus = integrationStatus?.notifications;

  async function handleTemplateTest(testType) {
    setTestingTemplate(testType);
    setTestSendResult("");
    setTestSendDetail(null);
    const todayKey = getKoreaDateString(new Date());
    const basePayload = {
      academyName: academyBrandName,
      assignmentStatus: "complete_thorough",
      attendanceStatus: testType === "attendance" ? "late" : "present",
      checkedAt: testType === "attendance" ? "태블릿/수기 출결 테스트" : "19:00",
      forceDryRun: false,
      forceTestRecipient: true,
      lessonContent: "개별 진도 점검",
      lessonDate: todayKey,
      lessonMaterial: "공통수학1",
      lessonName: testType === "attendance" ? "출결 테스트 수업" : "월수금 7-10반",
      lateMinutes: testType === "attendance" ? 5 : "",
      message: "오늘 수업에서 확인한 내용을 바탕으로 다음 과제를 안내드립니다.",
      nextHomework: "쎈 - 경우의 수",
      parentPhone: notificationStatus?.testRecipient,
      previousHomework: "rpm 순열과 조합",
      reason: testType === "attendance" ? "태블릿/수기 출결 연결 점검" : "",
      studentName: "테스트학생",
      studentPhone: notificationStatus?.testRecipient,
      target: testType === "student" ? "student" : "parent"
    };
    const endpoint =
      testType === "attendance"
        ? "/api/notifications/attendance-alimtalk"
        : "/api/notifications/comment-alimtalk";
    try {
      const result = await postJson(endpoint, basePayload);
      const modeText = result.result?.dryRun ? "테스트 기록 완료 · 실제 발송 없음" : "테스트 번호로 발송 요청 완료";
      setTestSendResult(`${getNotificationJobLabel(testType === "attendance" ? "attendance" : testType === "student" ? "student_comment" : "parent_comment")}: ${modeText}`);
      setTestSendDetail({
        label: getNotificationJobLabel(testType === "attendance" ? "attendance" : testType === "student" ? "student_comment" : "parent_comment"),
        dryRun: Boolean(result.result?.dryRun),
        requestedTo: result.result?.requestedTo || "-",
        sentTo: result.result?.sentTo || "-",
        templateEnvName: result.result?.templateEnvName || "-",
        variables: result.result?.variables ?? {}
      });
    } catch (error) {
      setTestSendResult(`테스트 실패: ${error.message}`);
      setTestSendDetail(null);
    } finally {
      setTestingTemplate("");
    }
  }

  return (
    <section className="panel settingsCard">
      <div className="sectionTitle">
        <div>
          <h2>알림톡 설정</h2>
          <p>솔라피 연결, 실제번호 잠금, 템플릿 테스트를 확인합니다.</p>
        </div>
        <span className={notificationStatus?.missing?.length ? "statusPill status-failed" : "statusPill status-sent"}>
          {notificationStatus?.missing?.length ? "확인 필요" : "준비됨"}
        </span>
      </div>
      <div className="integrationStatusGrid">
        <article>
          <strong>솔라피 기본</strong>
          <span><StatusDot active={notificationStatus?.solapiConfigured} /> API/PFID 설정</span>
          <span><StatusDot active={notificationStatus?.templatesConfigured?.attendance} /> 출결 알림톡 템플릿</span>
          <span><StatusDot active={notificationStatus?.templatesConfigured?.dailyReport} /> 학부모 알림톡 템플릿</span>
          <span><StatusDot active={notificationStatus?.templatesConfigured?.studentComment} /> 학생 알림톡 템플릿</span>
        </article>
        <article>
          <strong>발송 안전장치</strong>
          <span><StatusDot active={notificationStatus?.dryRun} /> 테스트 보호 {notificationStatus?.dryRun ? "ON" : "OFF"}</span>
          <span><StatusDot active={notificationStatus?.liveTestSendEnabled} /> 테스트 실발송 {notificationStatus?.liveTestSendEnabled ? "ON" : "OFF"}</span>
          <span><StatusDot active={!notificationStatus?.allowRealStudentRecipients} /> 학생 실제번호 잠금 {notificationStatus?.allowRealStudentRecipients ? "OFF" : "ON"}</span>
          <span><StatusDot active={!notificationStatus?.allowRealParentRecipients} /> 학부모 실제번호 잠금 {notificationStatus?.allowRealParentRecipients ? "OFF" : "ON"}</span>
          <span>테스트 수신번호: {notificationStatus?.testRecipient || "미설정"}</span>
        </article>
        <article>
          <strong>AI API</strong>
          <span><StatusDot active={integrationStatus?.ai?.providers?.openai} /> OpenAI</span>
          <span><StatusDot active={integrationStatus?.ai?.providers?.anthropic} /> Claude</span>
          <span>기본값: {integrationStatus?.ai?.defaultProvider || "미설정"}</span>
        </article>
      </div>
      {notificationStatus?.missing?.length ? (
        <p className="inlineNotice danger">미입력 환경변수: {notificationStatus.missing.join(", ")}</p>
      ) : null}
      <div className="templateTestGrid settingsTemplateTestGrid">
        {[
          ["attendance", "출결 알림톡", "선생님 테스트 수신번호로 출결 알림톡 형식을 점검합니다."],
          ["parent", "학부모 알림톡", "출결, 과제 상태, 강의 내용, 코멘트 구조를 점검합니다."],
          ["student", "학생 알림톡", "학생에게 보낼 안내문과 다음 과제 문구를 점검합니다."]
        ].map(([id, title, description]) => (
          <article key={id}>
            <strong>{title}</strong>
            <p>{description}</p>
            <pre className="templatePreviewText">{buildNotificationTemplatePreview(id)}</pre>
            <button className="softButton" disabled={testingTemplate === id} onClick={() => handleTemplateTest(id)} type="button">
              {testingTemplate === id ? "테스트 중" : `${title.replace(" 알림톡", "")} 테스트`}
            </button>
          </article>
        ))}
      </div>
      {testSendResult ? <p className="inlineNotice">{testSendResult}</p> : null}
      {testSendDetail ? (
        <div className="templateResultCard">
          <div className="templateResultMeta">
            <span>{testSendDetail.label}</span>
            <span>{testSendDetail.dryRun ? "DRY RUN" : "SEND REQUESTED"}</span>
            <span>수신: {testSendDetail.sentTo}</span>
            <span>요청번호: {testSendDetail.requestedTo}</span>
            <span>템플릿: {testSendDetail.templateEnvName}</span>
          </div>
          <pre className="templatePreviewText">
            {Object.entries(testSendDetail.variables)
              .map(([key, value]) => `${key}\n${value}`)
              .join("\n\n")}
          </pre>
        </div>
      ) : null}
    </section>
  );
}

function SettingsCenter({
  aiSettings,
  appStateSaveState = "idle",
  attendanceSettings = defaultAttendanceSettings,
  integrationStatus,
  onUpdateAiSettings,
  onUpdateAttendanceSettings,
  teacherAccountSettings = defaultTeacherAccountSettings,
  onUpdateTeacherAccountSettings
}) {
  const [activePromptKey, setActivePromptKey] = useState("commentPolish");
  const account = { ...defaultTeacherAccountSettings, ...teacherAccountSettings };
  const [accountForm, setAccountForm] = useState({
    confirmPassword: "",
    currentPassword: "",
    loginId: account.loginId,
    newPassword: ""
  });
  const [accountMessage, setAccountMessage] = useState("");
  const settings = {
    ...defaultAiSettings,
    ...aiSettings,
    prompts: normalizeAiPrompts(aiSettings?.prompts)
  };
  const attendance = { ...defaultAttendanceSettings, ...attendanceSettings };
  const attendanceUrl =
    typeof window === "undefined"
      ? "/attendance"
      : `${window.location.origin}/attendance`;
  const aiRows = [
    {
      description: "강사코멘트, 학생 알림문구, 학부모 알림톡 문장을 다듬습니다.",
      modelKey: "commentModel",
      providerKey: "commentProvider",
      title: "코멘트 AI"
    },
  ];
  const promptRows = [
    {
      appendedData: "학생/학부모 대상, 수업일, 출결, 과제 상태, 강의 교재/내용, 강사 원문",
      callSite: "수업일지 학생별 코멘트의 AI 수정 버튼",
      description: "학부모/학생 알림톡 코멘트를 다듬을 때 사용합니다.",
      endpoint: "/api/ai/comment-polish",
      key: "commentPolish",
      serverPrompt: "buildCommentPrompt",
      title: "코멘트 AI"
    },
    {
      appendedData: "시험관리 행의 학교, 학년, 과목, 시험일, 원문 총평",
      callSite: "시험관리 시험 후 총평 모달의 AI 수정 버튼",
      description: "시험관리의 시험 후 총평 모달에서 맞춤법과 띄어쓰기만 고칠 때 사용합니다.",
      endpoint: "/api/ai/comment-polish",
      key: "examReviewSpelling",
      mode: "polishMode: spellingOnly",
      serverPrompt: "buildCommentPrompt",
      title: "시험 후 총평 맞춤법 AI"
    },
    {
      appendedData: "학생/학부모 대상, 수업일, 출결, 과제 상태, 강사용 수업메모",
      callSite: "수업 준비 메모의 학생/학부모 안내문 AI 정제 버튼",
      description: "수업메모를 학생/학부모 안내문으로 바꿀 때 사용합니다.",
      endpoint: "/api/ai/comment-polish",
      key: "preparationNotice",
      serverPrompt: "buildCommentPrompt",
      title: "수업메모 AI"
    },
    {
      appendedData: "공지 제목, 작성 날짜, 공지 본문",
      callSite: "알림관리 공지 작성 영역의 AI 수정 버튼",
      description: "알림관리의 교재/보강/공지 문자 초안을 다듬을 때 사용합니다.",
      endpoint: "/api/ai/comment-polish",
      key: "noticeMessage",
      serverPrompt: "buildCommentPrompt",
      title: "알림관리 공지 AI"
    },
  ];
  const activePrompt = promptRows.find((row) => row.key === activePromptKey) ?? promptRows[0];
  const normalizedPromptSettings = normalizeAiPrompts(settings.prompts);

  useEffect(() => {
    setAccountForm((current) => ({
      ...current,
      loginId: account.loginId
    }));
  }, [account.loginId]);

  function updateProvider(row, provider) {
    const models = row.modelOptions?.[provider] ?? aiProviderModels[provider] ?? aiProviderModels.auto;
    const defaultModel = row.preferredModels?.[provider] && models.includes(row.preferredModels[provider])
      ? row.preferredModels[provider]
      : models[0] ?? "server-default";
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      prompts: normalizeAiPrompts(current?.prompts),
      [row.providerKey]: provider,
      [row.modelKey]: defaultModel
    }));
  }

  function updateModel(row, model) {
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      prompts: normalizeAiPrompts(current?.prompts),
      [row.modelKey]: model
    }));
  }

  function updatePrompt(promptKey, value) {
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      prompts: {
        ...normalizeAiPrompts(current?.prompts),
        [promptKey]: value
      }
    }));
  }

  function resetPrompt(promptKey) {
    updatePrompt(promptKey, defaultAiPrompts[promptKey] ?? "");
  }

  function updateAttendanceSetting(field, value) {
    onUpdateAttendanceSettings((current) => ({
      ...defaultAttendanceSettings,
      ...current,
      [field]: value
    }));
  }

  function updateAccountForm(field, value) {
    setAccountForm((current) => ({ ...current, [field]: value }));
    setAccountMessage("");
  }

  async function saveTeacherAccount(event) {
    event.preventDefault();
    const nextLoginId = accountForm.loginId.trim();
    const nextPassword = accountForm.newPassword.trim();
    const currentPassword = accountForm.currentPassword.trim();
    const confirmPassword = accountForm.confirmPassword.trim();

    if (!nextLoginId) {
      setAccountMessage("아이디를 입력해주세요.");
      return;
    }
    if (nextPassword && nextPassword.length < 4) {
      setAccountMessage("새 비밀번호는 4자리 이상이어야 합니다.");
      return;
    }
    if (nextPassword && nextPassword !== confirmPassword) {
      setAccountMessage("새 비밀번호 확인이 맞지 않습니다.");
      return;
    }

    try {
      const result = await postJson("/api/auth/teacher-account", {
        currentLoginId: account.loginId,
        currentPassword,
        loginId: nextLoginId,
        newPassword
      });
      onUpdateTeacherAccountSettings?.((current) => ({
        ...defaultTeacherAccountSettings,
        ...current,
        loginId: result.account?.loginId ?? nextLoginId,
        name: result.account?.name ?? current?.name ?? defaultTeacherAccountSettings.name
      }));
      setAccountForm({
        confirmPassword: "",
        currentPassword: "",
        loginId: result.account?.loginId ?? nextLoginId,
        newPassword: ""
      });
      setAccountMessage("서버 인증 계정이 저장되었습니다.");
    } catch (error) {
      setAccountMessage(`서버 저장 실패: ${error.message}`);
    }
  }

  return (
    <section className="settingsPage">
      <header className="pageTop settingsHero">
        <div>
          <span className="eyebrow">SETTINGS</span>
          <h1>설정</h1>
          <p>AI 사용 모드는 이곳에서 한 번 정해두고 각 기능에서 그대로 사용합니다.</p>
        </div>
        <InlineSaveStatus label="설정 자동저장" saveState={appStateSaveState} />
      </header>

      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>계정 설정</h2>
            <p>선생님 로그인 아이디와 비밀번호를 관리합니다.</p>
          </div>
        </div>
        <form className="accountSettingsGrid" onSubmit={saveTeacherAccount}>
          <label>
            <span>아이디</span>
            <input value={accountForm.loginId} onChange={(event) => updateAccountForm("loginId", event.target.value)} />
          </label>
          <label>
            <span>현재 비밀번호</span>
            <input
              autoComplete="current-password"
              type="password"
              value={accountForm.currentPassword}
              onChange={(event) => updateAccountForm("currentPassword", event.target.value)}
            />
          </label>
          <label>
            <span>새 비밀번호</span>
            <input
              autoComplete="new-password"
              type="password"
              value={accountForm.newPassword}
              onChange={(event) => updateAccountForm("newPassword", event.target.value)}
            />
          </label>
          <label>
            <span>새 비밀번호 확인</span>
            <input
              autoComplete="new-password"
              type="password"
              value={accountForm.confirmPassword}
              onChange={(event) => updateAccountForm("confirmPassword", event.target.value)}
            />
          </label>
          <div className="accountSettingsActions">
            <button className="primaryButton" type="submit">계정 저장</button>
            {accountMessage ? <span className="muted">{accountMessage}</span> : null}
          </div>
        </form>
      </section>

      <NotificationSettingsSection integrationStatus={integrationStatus} />

      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>AI 설정</h2>
            <p>기능별 기본 AI 제공자와 모델을 관리합니다.</p>
          </div>
        </div>
        <div className="settingsRows">
          {aiRows.map((row) => {
            const provider = settings[row.providerKey] ?? "auto";
            const models = row.modelOptions?.[provider] ?? aiProviderModels[provider] ?? aiProviderModels.auto;
            const model = models.includes(settings[row.modelKey]) ? settings[row.modelKey] : models[0];
            return (
              <div className="settingsRow" key={row.providerKey}>
                <div>
                  <strong>{row.title}</strong>
                  <span className="muted">{row.description}</span>
                </div>
                <select value={provider} onChange={(event) => updateProvider(row, event.target.value)}>
                  <option value="auto">자동 선택</option>
                  <option value="openai">OpenAI</option>
                  <option value="anthropic">Claude</option>
                  <option value="mock">테스트 모드</option>
                </select>
                <select value={model} onChange={(event) => updateModel(row, event.target.value)}>
                  {models.map((item) => (
                    <option key={item} value={item}>{getAiModelLabel(item)}</option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
      </section>

      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>AI 프롬프트</h2>
            <p>웹앱에서 AI 호출이 있는 기능의 기본 지시문을 확인하고 수정합니다.</p>
          </div>
          <button className="softButton" onClick={() => resetPrompt(activePrompt.key)} type="button">
            기본값 복원
          </button>
        </div>
        <div className="promptSettingsLayout">
          <div className="promptTabList" role="tablist" aria-label="AI 프롬프트 기능 선택">
            {promptRows.map((row) => (
              <button
                className={activePromptKey === row.key ? "active" : ""}
                key={row.key}
                onClick={() => setActivePromptKey(row.key)}
                type="button"
              >
                <strong>{row.title}</strong>
                <span>{row.description}</span>
              </button>
            ))}
          </div>
          <label className="promptEditor">
            <span>{activePrompt.title} 프롬프트</span>
            <div className="promptMappingCard">
              <div>
                <strong>설정 키</strong>
                <span>{activePrompt.key}</span>
              </div>
              <div>
                <strong>실제 호출</strong>
                <span>{activePrompt.callSite}</span>
              </div>
              <div>
                <strong>API / 서버 빌더</strong>
                <span>{activePrompt.endpoint} · {activePrompt.serverPrompt}</span>
              </div>
              <div>
                <strong>호출 시 추가 데이터</strong>
                <span>{activePrompt.appendedData}</span>
              </div>
              {activePrompt.mode ? (
                <div>
                  <strong>호출 모드</strong>
                  <span>{activePrompt.mode}</span>
                </div>
              ) : null}
            </div>
            <textarea
              value={normalizedPromptSettings[activePrompt.key] ?? ""}
              onChange={(event) => updatePrompt(activePrompt.key, event.target.value)}
              rows="14"
            />
            <small className="muted">
              위 프롬프트는 기본 지시문이고, 실제 호출 시에는 매핑된 서버 빌더가 업무 데이터와 출력 형식 지시를 함께 붙입니다.
            </small>
          </label>
        </div>
      </section>

      <section className="panel settingsCard">
        <div className="sectionTitle">
          <div>
            <h2>출결 설정</h2>
            <p>태블릿 출결 전용 화면과 자동 지각 판정 기준을 관리합니다.</p>
          </div>
        </div>
        <div className="settingsRows">
          <div className="settingsRow">
            <div>
              <strong>태블릿 전용 화면</strong>
              <span className="muted">학생이 휴대폰 번호 뒤 4자리만 입력하는 출결 화면입니다.</span>
            </div>
            <input readOnly value={attendanceUrl} />
            <a className="softButton linkButton" href={attendanceUrl} target="_blank" rel="noreferrer">
              새 창 열기
            </a>
          </div>
          <div className="settingsRow compact">
            <div>
              <strong>지각 유예시간</strong>
              <span className="muted">수업 정각 이후 이 시간까지는 등원으로 처리합니다.</span>
            </div>
            <input
              inputMode="numeric"
              min="0"
              type="number"
              value={attendance.lateGraceMinutes}
              onChange={(event) =>
                updateAttendanceSetting("lateGraceMinutes", Math.max(0, Number(event.target.value) || 0))
              }
            />
            <span className="aiSettingBadge fieldBadge">분 단위</span>
          </div>
        </div>
      </section>
    </section>
  );
}

function SchoolCalendarCenter({
  events,
  generatedLessonPlan = [],
  generatedLessonSaveStatus = { lessons: [], message: "", state: "idle" },
  rows,
  onAddEvent,
  onApplyGeneratedLesson,
  onApplyGeneratedLessons,
  onClearGeneratedLessonManualOverride,
  onDeleteEvent,
  onRetryGeneratedLessonSave,
  onSuppressGeneratedLesson,
  onUnsuppressGeneratedLesson,
  onSyncPreExamLesson,
  onUpdateExamPrepRow,
  onUpdateEvent
}) {
  const [selectedMonth, setSelectedMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [schoolFilter, setSchoolFilter] = useState("전체 학교");
  const [calendarFilter, setCalendarFilter] = useState("all");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    schoolName: rows[0]?.schoolName ?? "",
    grade: schoolCalendarGradeOptions.includes(rows[0]?.grade) ? rows[0]?.grade : "고1",
    examCycle: currentExamCycle,
    date: today,
    endDate: "",
    title: "",
    type: "examPeriod",
    color: "#dc2626",
    examSubject: "",
    memo: "",
    mathExamItems: [
      {
        id: `math_item_${Date.now()}`,
        grade: schoolCalendarGradeOptions.includes(rows[0]?.grade) ? rows[0]?.grade : "고1",
        subject: schoolCalendarMathSubjectOptions.includes(rows[0]?.subject) ? rows[0]?.subject : "공통수학1",
        date: today,
        memo: ""
      }
    ]
  });
  const schools = [...new Set(rows.map((row) => row.schoolName).filter(Boolean))];
  const examCycleOptions = [...new Set(rows.map((row) => row.examCycle).filter(Boolean))];
  const safeExamCycleOptions = examCycleOptions.length
    ? [currentExamCycle, ...examCycleOptions.filter((cycle) => cycle !== currentExamCycle)]
    : [currentExamCycle, "2026-1-mid", "2026-2-mid", "2026-2-final"];
  const eventTypeLabels = {
    examPeriod: "시험기간",
    mathExam: "수학시험",
    preExam: "직전대비",
    vacation: "방학/개학",
    schoolEvent: "학교행사",
    custom: "일반"
  };
  const calendarFilters = [
    { id: "all", label: "전체" },
    { id: "examPeriod", label: "내신기간" },
    { id: "mathExam", label: "수학시험날짜" },
    { id: "vacation", label: "방학/개학" },
    { id: "preExam", label: "직전일정" }
  ];
  const eventColorOptions = ["#dc2626", "#2563eb", "#16a34a", "#7c3aed", "#ea580c", "#0891b2", "#17213d"];
  const examEvents = buildExamCalendarEvents(rows);
  const manualEvents = events.filter((event) =>
    !String(event.eventId ?? "").startsWith("event_exam_") &&
    !isExamLinkedCalendarEvent(event)
  );
  const academicEvents = [...examEvents, ...manualEvents].sort((a, b) => a.date.localeCompare(b.date));
  const filteredEvents = academicEvents.filter(
    (event) => schoolFilter === "전체 학교" || event.schoolName === schoolFilter
  );
  const calendarDisplayEvents = filteredEvents.filter((event) => (
    calendarFilter === "all" ? true : getSchoolCalendarFilterGroup(event) === calendarFilter
  ));
  const selectedDateEvents = calendarDisplayEvents.filter((event) => isDateWithinEvent(selectedDate, event));
  const generatedPlanCounts = generatedLessonPlan.reduce((counts, item) => {
    counts[item.status] = (counts[item.status] ?? 0) + 1;
    return counts;
  }, {});
  const applyableGeneratedCount = (generatedPlanCounts.create ?? 0) + (generatedPlanCounts.update ?? 0);
  const shouldShowGeneratedLessonSaveNotice = Boolean(generatedLessonSaveStatus.message);
  const canSaveGeneratedLessons = applyableGeneratedCount > 0 || generatedLessonSaveStatus.state === "failed";

  function shiftMonth(amount) {
    const [year, month] = selectedMonth.split("-").map(Number);
    const next = new Date(Date.UTC(year, month - 1 + amount, 1));
    const nextDate = `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, "0")}-01`;
    setSelectedMonth(nextDate);
  }

  function submitNewEvent() {
    const schoolName = newEvent.schoolName || schools[0] || "학교 미입력";
    const subjectTitle = newEvent.examSubject.trim() || (newEvent.type === "mathExam" ? "수학시험" : "");
    const fallbackTitle = newEvent.type === "examPeriod"
      ? joinCalendarLabel(schoolName, examCycleLabel(newEvent.examCycle), "시험기간")
      : joinCalendarLabel(schoolName, subjectTitle);
    const title = newEvent.title.trim() || fallbackTitle;
    if (!newEvent.date || !title) return;
    const nextEvent = {
      ...newEvent,
      mathExamItems: undefined,
      eventId: `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      schoolName,
      title,
      examSubject: subjectTitle
    };
    syncSchoolCalendarEventToExamPrepRows(rows, nextEvent, onUpdateExamPrepRow);
    if (nextEvent.type === "mathExam") onSyncPreExamLesson?.(nextEvent);
    if (!isExamLinkedCalendarEvent(nextEvent)) {
      onAddEvent(nextEvent);
    }
    if (newEvent.type === "examPeriod") {
      newEvent.mathExamItems
        .filter((item) => item.date && (item.grade || item.subject))
        .forEach((item) => {
          const itemSubject = item.subject || "수학시험";
          const itemDetail = [item.grade, itemSubject].filter(Boolean).join(" ");
          const mathEvent = {
            ...newEvent,
            mathExamItems: undefined,
            eventId: `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            type: "mathExam",
            date: item.date,
            endDate: "",
            grade: item.grade,
            schoolName,
            title: joinCalendarLabel(schoolName, itemDetail, "수학시험"),
            examSubject: itemSubject,
            memo: item.memo || newEvent.memo,
            color: "#dc2626"
          };
          syncSchoolCalendarEventToExamPrepRows(rows, mathEvent, onUpdateExamPrepRow);
          onSyncPreExamLesson?.(mathEvent);
        });
    } else if (newEvent.type !== "mathExam" && Boolean(subjectTitle)) {
      const mathEvent = {
        ...newEvent,
        mathExamItems: undefined,
        eventId: `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        type: "mathExam",
        endDate: "",
        schoolName,
        title: joinCalendarLabel(schoolName, subjectTitle),
        examSubject: subjectTitle,
        color: "#dc2626"
      };
      syncSchoolCalendarEventToExamPrepRows(rows, mathEvent, onUpdateExamPrepRow);
      onSyncPreExamLesson?.(mathEvent);
    }
    setSelectedDate(newEvent.date);
    setSelectedMonth(newEvent.date);
    setNewEvent((current) => ({
      ...current,
      title: "",
      examSubject: "",
      memo: "",
      mathExamItems: [{ id: `math_item_${Date.now()}`, grade: current.grade, subject: current.examSubject || "", date: current.date, memo: "" }]
    }));
    setIsFormModalOpen(false);
  }

  function updateMathExamItem(itemId, field, value) {
    setNewEvent((current) => ({
      ...current,
      mathExamItems: current.mathExamItems.map((item) => (item.id === itemId ? { ...item, [field]: value } : item))
    }));
  }

  function addMathExamItem() {
    setNewEvent((current) => ({
      ...current,
      mathExamItems: [
        ...current.mathExamItems,
        {
          id: `math_item_${Date.now()}_${current.mathExamItems.length}`,
          grade: current.grade || "고1",
          subject: current.examSubject || "공통수학1",
          date: current.date,
          memo: ""
        }
      ]
    }));
  }

  function removeMathExamItem(itemId) {
    setNewEvent((current) => ({
      ...current,
      mathExamItems: current.mathExamItems.length > 1
        ? current.mathExamItems.filter((item) => item.id !== itemId)
        : current.mathExamItems
    }));
  }

  function changeNewEventType(type) {
    setNewEvent((current) => {
      if (type !== "examPeriod") return { ...current, type };
      const range = getDefaultExamPeriodRange(current.examCycle);
      return {
        ...current,
        type,
        date: range.date,
        endDate: range.endDate,
        title: examCycleLabel(current.examCycle)
      };
    });
  }

  function changeNewEventExamCycle(examCycle) {
    setNewEvent((current) => {
      const range = getDefaultExamPeriodRange(examCycle);
      return {
        ...current,
        examCycle,
        date: current.type === "examPeriod" ? range.date : current.date,
        endDate: current.type === "examPeriod" ? range.endDate : current.endDate,
        title: current.type === "examPeriod" ? examCycleLabel(examCycle) : current.title
      };
    });
  }

  function openDateModal(date) {
    setSelectedDate(date);
    setIsDateModalOpen(true);
  }

  function openEventForm(date = selectedDate) {
    setSelectedDate(date);
    setSelectedMonth(date);
    setNewEvent((current) => ({
      ...current,
      date: current.type === "examPeriod" ? getDefaultExamPeriodRange(current.examCycle || currentExamCycle).date : date,
      endDate: current.type === "examPeriod" ? getDefaultExamPeriodRange(current.examCycle || currentExamCycle).endDate : date,
      examCycle: current.examCycle || currentExamCycle,
      title: current.type === "examPeriod" && !current.title ? examCycleLabel(current.examCycle || currentExamCycle) : current.title,
      schoolName: schoolFilter === "전체 학교" ? current.schoolName : schoolFilter,
      mathExamItems: current.mathExamItems.map((item, index) => ({
        ...item,
        id: item.id || `math_item_${Date.now()}_${index}`,
        date
      }))
    }));
    setIsDateModalOpen(false);
    setIsFormModalOpen(true);
  }

  function updateAcademicEvent(event, field, value) {
    if (event.derived && event.examPrepId) {
      const sourceRow = rows.find((row) => row.examPrepId === event.examPrepId);
      if (event.type === "examPeriod" && ["date", "endDate"].includes(field)) {
        const targetRows = event.examPeriodGroupKey
          ? rows.filter((row) => getExamPeriodGroupKey(row) === event.examPeriodGroupKey)
          : sourceRow ? [sourceRow] : [];
        targetRows.forEach((row) => {
          onUpdateExamPrepRow?.(
            row.examPrepId,
            "examPeriod",
            updateDateRangeField(row.examPeriod ?? "", field, value)
          );
        });
        return;
      }
      if (event.type === "mathExam" && ["date", "examSubject"].includes(field)) {
        const entries = normalizeMathExamEntries(sourceRow ?? {});
        const fallbackEntries = entries.length ? entries : [createMathExamEntry(sourceRow ?? {}, 0)];
        const targetIndex = typeof event.mathExamEntryIndex === "number"
          ? event.mathExamEntryIndex
          : fallbackEntries.findIndex((entry) => entry.id === event.mathExamEntryId);
        const safeIndex = targetIndex >= 0 ? targetIndex : 0;
        const nextEntries = fallbackEntries.map((entry, index) => (
          index === safeIndex
            ? {
                ...entry,
                [field === "examSubject" ? "subject" : "date"]: value,
                label: field === "examSubject" ? value : entry.label
              }
            : entry
        ));
        onUpdateExamPrepRow?.(event.examPrepId, "mathExamDates", nextEntries);
        onUpdateExamPrepRow?.(event.examPrepId, "mathExamDate", syncPrimaryMathExamDate(nextEntries));
        onSyncPreExamLesson?.({ ...event, [field]: value });
        return;
      }
    }
    const nextEvent = { ...event, [field]: value };
    onUpdateEvent(event.eventId, field, value);
    syncSchoolCalendarEventToExamPrepRows(rows, nextEvent, onUpdateExamPrepRow);
    if (nextEvent.type === "mathExam") onSyncPreExamLesson?.(nextEvent);
  }

  return (
    <section className="schoolCalendarPage">
      <header className="schoolCalendarHeader">
        <div>
          <h1>학사일정</h1>
          <p className="muted">학교별 시험, 행사, 방학 일정을 등록하면 수업일지와 커리큘럼 일정관리에도 표시됩니다.</p>
        </div>
        <div className="schoolCalendarHeaderActions">
          <select value={schoolFilter} onChange={(event) => setSchoolFilter(event.target.value)}>
            <option value="전체 학교">전체 학교</option>
            {schools.map((school) => (
              <option key={school} value={school}>{school}</option>
            ))}
          </select>
          <button className="primaryButton" onClick={() => openEventForm(selectedDate)} type="button">+ 일정 등록</button>
        </div>
      </header>

      <div className="schoolCalendarLayout">
        {isFormModalOpen ? (
          <Modal
            className="schoolEventFormModal"
            title="일정 등록"
            subtitle="입력 유형을 먼저 고른 뒤 필요한 정보만 입력합니다."
            onClose={() => setIsFormModalOpen(false)}
          >
            <div className="schoolEventFormPanel modalForm">
              <label className="inputTypeField">
                입력 유형
                <select value={newEvent.type} onChange={(event) => changeNewEventType(event.target.value)}>
                  {Object.entries(eventTypeLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </label>
              <label>
                학교
                <select value={newEvent.schoolName} onChange={(event) => setNewEvent((current) => ({ ...current, schoolName: event.target.value, grade: "" }))}>
                  <option value="">학교 선택</option>
                  {schools.map((school) => (
                    <option key={school} value={school}>{school}</option>
                  ))}
                </select>
              </label>
              <label>
                시험 구분
                <select value={newEvent.examCycle} onChange={(event) => changeNewEventExamCycle(event.target.value)}>
                  {safeExamCycleOptions.map((cycle) => (
                    <option key={cycle} value={cycle}>{examCycleLabel(cycle)}</option>
                  ))}
                </select>
              </label>
              {newEvent.type !== "examPeriod" ? (
                <>
                  <label>
                    학년
                    <select value={newEvent.grade} onChange={(event) => setNewEvent((current) => ({ ...current, grade: event.target.value }))}>
                      <option value="">전체 학년</option>
                      {schoolCalendarGradeOptions.map((grade) => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </label>
                </>
              ) : null}
              <label>
                일정명
                <input value={newEvent.title} onChange={(event) => setNewEvent((current) => ({ ...current, title: event.target.value }))} placeholder="예: 1학기 기말고사" />
              </label>
              <label>
                일정 색상
                <div className="calendarColorPicker">
                  {eventColorOptions.map((color) => (
                    <button
                      aria-label={`색상 ${color}`}
                      className={newEvent.color === color ? "active" : ""}
                      key={color}
                      onClick={() => setNewEvent((current) => ({ ...current, color }))}
                      style={{ backgroundColor: color }}
                      type="button"
                    />
                  ))}
                </div>
              </label>
              {newEvent.type === "examPeriod" ? (
                <>
                  <div className="calendarDateGrid">
                    <label>
                      시작일
                      <input type="date" value={newEvent.date} onChange={(event) => setNewEvent((current) => ({ ...current, date: event.target.value }))} />
                    </label>
                    <label>
                      종료일
                      <input type="date" value={newEvent.endDate} onChange={(event) => setNewEvent((current) => ({ ...current, endDate: event.target.value }))} />
                    </label>
                  </div>
                  <div className="examSubjectBox schoolExamBundleBox">
                    <div className="sectionHeader slim">
                      <strong>수학시험 날짜</strong>
                      <button className="softButton small" onClick={addMathExamItem} type="button">+ 수학시험 추가</button>
                    </div>
                    <div className="mathExamItemStack">
                      {newEvent.mathExamItems.map((item, index) => (
                        <div className="mathExamItemRow" key={item.id}>
                          <label>
                            학년
                            <select value={item.grade} onChange={(event) => updateMathExamItem(item.id, "grade", event.target.value)}>
                              <option value="">학년 선택</option>
                              {schoolCalendarGradeOptions.map((grade) => (
                                <option key={grade} value={grade}>{grade}</option>
                              ))}
                            </select>
                          </label>
                          <label>
                            과목
                            <select value={item.subject} onChange={(event) => updateMathExamItem(item.id, "subject", event.target.value)}>
                              {schoolCalendarMathSubjectOptions.map((subject) => (
                                <option key={subject} value={subject}>{subject}</option>
                              ))}
                            </select>
                          </label>
                          <label>
                            시험 날짜
                            <input type="date" value={item.date} onChange={(event) => updateMathExamItem(item.id, "date", event.target.value)} />
                          </label>
                          <button className="iconButton" disabled={newEvent.mathExamItems.length === 1} onClick={() => removeMathExamItem(item.id)} type="button">
                            ×
                          </button>
                          <label className="mathExamItemMemo">
                            메모
                            <input value={item.memo} onChange={(event) => updateMathExamItem(item.id, "memo", event.target.value)} placeholder={`${index + 1}번째 수학시험 메모`} />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="examSubjectBox">
                  <div className="sectionHeader slim">
                    <strong>날짜별 시험 과목</strong>
                  </div>
                  <div className="examSubjectRow singleDate">
                    <label>
                      시험 날짜
                      <input type="date" value={newEvent.date} onChange={(event) => setNewEvent((current) => ({ ...current, date: event.target.value, endDate: event.target.value }))} />
                    </label>
                    <label>
                      과목
                      <input value={newEvent.examSubject} onChange={(event) => setNewEvent((current) => ({ ...current, examSubject: event.target.value }))} placeholder="예: 수학" />
                    </label>
                  </div>
                </div>
              )}
              <label>
                메모
                <textarea value={newEvent.memo} onChange={(event) => setNewEvent((current) => ({ ...current, memo: event.target.value }))} placeholder="필요한 메모" rows="4" />
              </label>
              <button className="primaryButton full" onClick={submitNewEvent} type="button">
                {newEvent.type === "examPeriod" ? "시험일정 묶음 등록" : "일정 등록"}
              </button>
            </div>
          </Modal>
        ) : null}

        <section className="panel generatedLessonPreviewPanel">
          <div className="sectionHeader slim">
            <div>
              <h2>시험관리 자동 수업</h2>
              <p className="muted">시험관리의 수학시험 날짜를 기준으로 직전수업은 실제 수업으로 자동 저장되고, 일요시험보강은 자동 수업으로 관리됩니다.</p>
            </div>
          </div>
          <div className="generatedLessonSummary">
            <span>자동저장 대기 {generatedPlanCounts.create ?? 0}</span>
            <span>갱신 대기 {generatedPlanCounts.update ?? 0}</span>
            <span>저장됨 {generatedPlanCounts.synced ?? 0}</span>
            <span>수정됨 {generatedPlanCounts.protected ?? 0}</span>
            <span>숨김 {generatedPlanCounts.skipped ?? 0}</span>
          </div>
          {shouldShowGeneratedLessonSaveNotice ? (
            <div className={`generatedLessonSaveNotice ${generatedLessonSaveStatus.state}`} role={generatedLessonSaveStatus.state === "failed" ? "alert" : "status"}>
              <span>{generatedLessonSaveStatus.message}</span>
              {generatedLessonSaveStatus.state === "failed" ? (
                <button className="softButton compact" onClick={onRetryGeneratedLessonSave} type="button">
                  다시 저장
                </button>
              ) : null}
            </div>
          ) : null}
          {canSaveGeneratedLessons && generatedLessonSaveStatus.state !== "failed" ? (
            <div className="generatedLessonActions">
              <button className="softButton compact" onClick={onApplyGeneratedLessons} type="button">
                자동 수업 저장
              </button>
            </div>
          ) : null}
          <div className="emptyHomeworkBox">
            시험관리 입력값이 본데이터입니다. 직전수업은 수업일지에 실제 수업으로 저장되며, 수업일지에서 수정하면 해당 수업은 자동 갱신 보호 상태가 됩니다.
          </div>
        </section>

        <section className="panel schoolCalendarMainPanel">
          <div className="schoolMonthHeader">
            <button className="iconButton" onClick={() => shiftMonth(-1)} type="button">‹</button>
            <div className="schoolMonthTitleBlock">
              <h2>{formatMonthTitle(selectedMonth)}</h2>
              <button className="primaryButton compact schoolMonthAddButton" onClick={() => openEventForm(selectedDate)} type="button">
                + 일정 등록
              </button>
            </div>
            <button className="iconButton" onClick={() => shiftMonth(1)} type="button">›</button>
          </div>
          <div className="schoolCalendarFilterBar" aria-label="학사일정 표시 항목">
            {calendarFilters.map((filter) => (
              <button
                className={`schoolCalendarFilterButton${calendarFilter === filter.id ? " active" : ""}`}
                key={filter.id}
                onClick={() => setCalendarFilter(filter.id)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="calendarGrid teacherCalendarGrid schoolMonthGrid">
            {["일", "월", "화", "수", "목", "금", "토"].map((label) => (
              <div className="weekday" key={label}>{label}</div>
            ))}
            {buildMonthDays(selectedMonth).map((day) => {
              const eventPriority = { examPeriod: 0, mathExam: 1, preExam: 2, vacation: 3 };
              const dayEvents = calendarDisplayEvents
                .filter((event) => isDateWithinEvent(day.date, event))
                .sort((eventA, eventB) => (
                  (eventPriority[eventA.type] ?? 4) - (eventPriority[eventB.type] ?? 4)
                  || formatCalendarEventLabel(eventA).localeCompare(formatCalendarEventLabel(eventB))
                ));
              const { hiddenCount, mathExamEvents, periodSummaries, regularEvents } = getMonthCellDisplayEvents(dayEvents);
              return (
                <button
                  className={[
                    "monthCell",
                    "teacherMonthCell",
                    "schoolMonthCell",
                    day.inMonth ? "" : "outside",
                    selectedDate === day.date ? "selected" : ""
                  ].join(" ")}
                  key={day.date}
                  onClick={() => openDateModal(day.date)}
                  type="button"
                >
                  <span className="dayNumber">{day.dayNumber}</span>
                  <span className="lessonPills">
                    <span className="schoolPeriodLayer" aria-hidden="true">
                      {periodSummaries.map((event, periodIndex) => {
                        const periodBarClass = getPeriodBarClass(day.date, event);
                        const showPeriodLabel = periodBarClass === "periodStart" || periodBarClass === "periodSingle";
                        return (
                          <span
                            className={`schoolEventPill event-${event.type} periodBar ${periodBarClass}`}
                            key={event.eventId}
                            style={{
                              "--period-color": event.color ?? "#f472b6",
                              "--period-index": periodIndex
                            }}
                            title={event.title}
                          >
                            {showPeriodLabel ? formatPeriodSummaryLabel(event) : ""}
                          </span>
                        );
                      })}
                    </span>
                    <span className="schoolMathExamLayer">
                      {mathExamEvents.map((event, mathTabIndex) => {
                        const eventLabel = formatCalendarSummaryLabel(event);
                        return (
                          <span
                            className={`schoolEventPill event-${event.type} mathExamTab`}
                            key={event.eventId}
                            style={{
                              backgroundColor: event.color ?? undefined,
                              "--math-tab-index": mathTabIndex
                            }}
                            title={event.title}
                          >
                            {eventLabel}
                          </span>
                        );
                      })}
                    </span>
                    <span className="schoolRegularEventLayer">
                      {regularEvents.map((event) => {
                        const eventLabel = formatCalendarSummaryLabel(event);
                        return (
                          <span
                            className={`schoolEventPill event-${event.type}`}
                            key={event.eventId}
                            style={{ backgroundColor: event.color ?? undefined }}
                            title={event.title}
                          >
                            {eventLabel}
                          </span>
                        );
                      })}
                      {hiddenCount > 0 ? (
                        <span className="schoolEventMorePill">+{hiddenCount}</span>
                      ) : null}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
      {isDateModalOpen ? (
        <SchoolDateScheduleModal
          eventColorOptions={eventColorOptions}
          eventTypeLabels={eventTypeLabels}
          events={selectedDateEvents}
          onClose={() => setIsDateModalOpen(false)}
          onDeleteEvent={onDeleteEvent}
          onCreateEvent={openEventForm}
          onUpdateEvent={updateAcademicEvent}
          schools={schools}
          selectedDate={selectedDate}
        />
      ) : null}
    </section>
  );
}

function SchoolDateScheduleModal({
  eventColorOptions,
  eventTypeLabels,
  events,
  onClose,
  onCreateEvent,
  onDeleteEvent,
  onUpdateEvent,
  schools,
  selectedDate
}) {
  const groupedEvents = events.reduce((groups, event) => {
    const schoolName = event.schoolName || "학교 미입력";
    const previous = groups.get(schoolName) ?? [];
    groups.set(schoolName, [...previous, event]);
    return groups;
  }, new Map());
  const groupedEventEntries = [...groupedEvents.entries()].sort(([schoolA], [schoolB]) => schoolA.localeCompare(schoolB));

  return (
    <Modal className="schoolDateScheduleModal" title={`${selectedDate} 일정`} subtitle="일정 내용과 색상을 확인하고 수정합니다." onClose={onClose}>
      <div className="schoolDateModalToolbar">
        <button className="primaryButton compact" onClick={() => onCreateEvent(selectedDate)} type="button">
          이 날짜에 일정 등록
        </button>
      </div>
      {events.length === 0 ? (
        <div className="emptyState schoolDateEmptyState">선택한 날짜에 등록된 일정이 없습니다.</div>
      ) : (
        <div className="schoolDateEventStack">
          {groupedEventEntries.map(([schoolName, schoolEvents]) => (
            <section className="schoolDateGroup" key={schoolName}>
              <div className="schoolDateGroupHeader">
                <strong>{schoolName}</strong>
                <span>{schoolEvents.length}건</span>
              </div>
              {schoolEvents.map((event) => {
                const canEditDerivedDate = event.derived && ["examPeriod", "mathExam"].includes(event.type);
                const canEditDerivedSubject = event.derived && event.type === "mathExam";
                const canEditEventDetails = !event.derived;
                return (
                  <article className="schoolDateEventEditor" key={event.eventId}>
                    <div className="schoolDateEventEditorTop">
                      <div>
                        <strong>{formatCalendarSummaryLabel(event)}</strong>
                        <span>{event.type === "examPeriod" ? `${event.date} ~ ${event.endDate || event.date}` : event.date}</span>
                      </div>
                      {event.derived ? (
                        <span>시험관리 연동 · 수정 즉시 반영</span>
                      ) : (
                        <button className="dangerSoftButton" onClick={() => onDeleteEvent(event.eventId)} type="button">삭제</button>
                      )}
                    </div>
                    <div className="fieldGrid two">
                      <label>
                        {event.type === "examPeriod" ? "시작일" : "날짜"}
                        <input disabled={event.derived && !canEditDerivedDate} type="date" value={event.date} onChange={(change) => onUpdateEvent(event, "date", change.target.value)} />
                      </label>
                      {event.type === "examPeriod" ? (
                        <label>
                          종료일
                          <input type="date" value={event.endDate ?? ""} onChange={(change) => onUpdateEvent(event, "endDate", change.target.value)} />
                        </label>
                      ) : (
                        <label>
                          과목
                          <select disabled={!canEditEventDetails && !canEditDerivedSubject} value={normalizeMathSubject(event.examSubject ?? "공통수학1")} onChange={(change) => onUpdateEvent(event, "examSubject", change.target.value)}>
                            {schoolCalendarMathSubjectOptions.map((subject) => (
                              <option key={subject} value={subject}>{subject}</option>
                            ))}
                          </select>
                        </label>
                      )}
                      <label>
                        학교
                        <select disabled={!canEditEventDetails} value={event.schoolName} onChange={(change) => onUpdateEvent(event, "schoolName", change.target.value)}>
                          {[event.schoolName, ...schools].filter(Boolean).filter((school, index, array) => array.indexOf(school) === index).map((school) => (
                            <option key={school} value={school}>{school}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        학년
                        <select disabled={!canEditEventDetails} value={event.grade ?? ""} onChange={(change) => onUpdateEvent(event, "grade", change.target.value)}>
                          <option value="">전체 학년</option>
                          {schoolCalendarGradeOptions.map((grade) => (
                            <option key={grade} value={grade}>{grade}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        일정 종류
                        <select disabled={!canEditEventDetails} value={event.type} onChange={(change) => onUpdateEvent(event, "type", change.target.value)}>
                          {Object.entries(eventTypeLabels).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        일정명
                        <input disabled={!canEditEventDetails} value={event.title} onChange={(change) => onUpdateEvent(event, "title", change.target.value)} />
                      </label>
                    </div>
                    <label>
                      메모
                      <textarea disabled={!canEditEventDetails} value={event.memo ?? ""} onChange={(change) => onUpdateEvent(event, "memo", change.target.value)} rows="3" />
                    </label>
                    <label>
                      일정 색상
                      <div className="calendarColorPicker">
                        {eventColorOptions.map((color) => (
                          <button
                            aria-label={`색상 ${color}`}
                            className={(event.color ?? "#dc2626") === color ? "active" : ""}
                            disabled={!canEditEventDetails}
                            key={color}
                            onClick={() => onUpdateEvent(event, "color", color)}
                            style={{ backgroundColor: color }}
                            type="button"
                          />
                        ))}
                      </div>
                    </label>
                  </article>
                );
              })}
            </section>
          ))}
        </div>
      )}
    </Modal>
  );
}

function EvaluationCenter({
  academyTests,
  scoreRecords,
  wrongProblems
}) {
  return (
    <section className="panel fullPanel evaluationCenter">
      <div className="sectionHeader">
        <div>
          <h1>보고서 데이터</h1>
          <p className="muted">보고서에 쓰이는 학생별 데이터 원천을 확인합니다. 입력과 수정은 학생관리의 학생 프로파일에서 진행합니다.</p>
        </div>
      </div>
      <div className="reportDataSummaryGrid">
        <article>
          <strong>{wrongProblems.length}개</strong>
          <span>교재오답</span>
          <p>학생별 개인 탭으로 이동했습니다.</p>
        </article>
        <article>
          <strong>{scoreRecords.length}개</strong>
          <span>내신/모의고사</span>
          <p>학생 프로파일의 성적 기록에서 관리합니다.</p>
        </article>
        <article>
          <strong>{academyTests.length}개</strong>
          <span>테스트 성적</span>
          <p>학생 프로파일의 테스트 성적에서 관리합니다.</p>
        </article>
      </div>
    </section>
  );
}

function StudentSelect({ students, value, onChange }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      {students.map((student) => (
        <option key={student.studentId} value={student.studentId}>{student.name}</option>
      ))}
    </select>
  );
}

function ClassManager({ students, templates, onUpdateClassRoster }) {
  const [selectedTemplateId, setSelectedTemplateId] = useState(templates[1]?.classTemplateId ?? templates[0]?.classTemplateId ?? "");
  const [isRosterModalOpen, setIsRosterModalOpen] = useState(false);
  const [draftStudentIds, setDraftStudentIds] = useState([]);
  const selectedTemplate = templates.find((template) => template.classTemplateId === selectedTemplateId) ?? templates[0];
  const activeStudents = students.filter(isActiveStudent);
  const classStudents = activeStudents.filter((student) => student.defaultClassTemplateId === selectedTemplate?.classTemplateId);

  function openRosterModal() {
    setDraftStudentIds(classStudents.map((student) => student.studentId));
    setIsRosterModalOpen(true);
  }

  function toggleDraftStudent(studentId) {
    setDraftStudentIds((current) =>
      current.includes(studentId) ? current.filter((id) => id !== studentId) : [...current, studentId]
    );
  }

  function saveRoster() {
    if (!selectedTemplate) return;
    onUpdateClassRoster(selectedTemplate.classTemplateId, draftStudentIds);
    setIsRosterModalOpen(false);
  }

  return (
    <section className="classManagerPage">
      <div className="pageTop classManagerTop">
        <div>
          <h1>반관리</h1>
          <p className="muted">4개 기본 반을 기준으로 학생 배정과 수업 흐름을 관리합니다.</p>
        </div>
        <button className="primaryButton" type="button">+ 반 추가</button>
      </div>

      <div className="classBoardGrid">
        {templates.map((template) => {
          const count = activeStudents.filter((student) => student.defaultClassTemplateId === template.classTemplateId).length;
          return (
            <button
              className={selectedTemplateId === template.classTemplateId ? "classBoardCard active" : "classBoardCard"}
              key={template.classTemplateId}
              onClick={() => setSelectedTemplateId(template.classTemplateId)}
              type="button"
            >
              <span className="classColor" style={{ background: template.color }} />
              <strong>{template.name}</strong>
              <small>{template.track} · {template.timeLabel}</small>
              <b>{count}명</b>
            </button>
          );
        })}
      </div>

      <section className="panel classDetailPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">CLASS DETAIL</p>
            <h2>{selectedTemplate?.name}</h2>
            <p className="muted">{selectedTemplate?.timeLabel} · 현재 배정 {classStudents.length}명</p>
          </div>
          <button className="softButton" onClick={openRosterModal} type="button">명단 수정</button>
        </div>
        <div className="classStudentGrid">
          {classStudents.length === 0 ? (
            <div className="emptyState">아직 이 반에 배정된 학생이 없습니다.</div>
          ) : (
            classStudents.map((student) => (
              <div className="classStudentCard" key={student.studentId}>
                <strong>{student.name}</strong>
                <span>{student.schoolName || "-"} · {student.grade || "-"}</span>
                <small>{student.textbook || "교재 미입력"}</small>
              </div>
            ))
          )}
        </div>
      </section>

      {isRosterModalOpen ? (
        <Modal
          className="classRosterModal"
          onClose={() => setIsRosterModalOpen(false)}
          subtitle="학생을 체크하면 이 반으로 배정되고, 체크를 해제하면 이 반 명단에서 제외됩니다."
          title={`${selectedTemplate?.name ?? "반"} 명단 수정`}
        >
          <div className="rosterSummaryBar">
            <span>현재 {classStudents.length}명</span>
            <strong>선택 {draftStudentIds.length}명</strong>
          </div>
          <div className="classRosterList">
            {activeStudents.map((student) => {
              const checked = draftStudentIds.includes(student.studentId);
              const currentTemplate = templates.find((template) => template.classTemplateId === student.defaultClassTemplateId);
              return (
                <label className={checked ? "rosterStudentItem selected" : "rosterStudentItem"} key={student.studentId}>
                  <input
                    checked={checked}
                    onChange={() => toggleDraftStudent(student.studentId)}
                    type="checkbox"
                  />
                  <span className="studentInitial">{student.name?.[0] ?? "학"}</span>
                  <span>
                    <strong>{student.name}</strong>
                    <small>{student.schoolName || "학교 미입력"} · {student.grade || "-"} · {student.textbook || "교재 미입력"}</small>
                  </span>
                  <em>{currentTemplate?.name ?? "미배정"}</em>
                </label>
              );
            })}
          </div>
          <div className="deleteConfirmActions">
            <button className="softButton" onClick={() => setIsRosterModalOpen(false)} type="button">취소</button>
            <button className="primaryButton" onClick={saveRoster} type="button">명단 저장</button>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

function LessonResearchCenter({ appStateSaveState = "idle", items, onAddItem, onDeleteItem, onUpdateItem }) {
  const [selectedSubject, setSelectedSubject] = useState(lessonResearchSubjects[0]);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("전체");
  const [statusFilter, setStatusFilter] = useState("전체");

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          item.subject === selectedSubject &&
          (categoryFilter === "전체" || item.category === categoryFilter) &&
          (statusFilter === "전체" || item.status === statusFilter)
      ),
    [categoryFilter, items, selectedSubject, statusFilter]
  );

  const selectedItem =
    items.find((item) => item.researchItemId === selectedItemId) ??
    filteredItems[0] ??
    items.find((item) => item.subject === selectedSubject) ??
    null;

  const subjectCounts = useMemo(
    () =>
      lessonResearchSubjects.reduce((acc, subject) => {
        acc[subject] = items.filter((item) => item.subject === subject).length;
        return acc;
      }, {}),
    [items]
  );

  function handleAddItem() {
    onAddItem(selectedSubject);
  }

  return (
    <section className="lessonResearchPage">
      <div className="pageTop lessonResearchHero">
        <div>
          <p className="eyebrow">LESSON RESEARCH</p>
          <h1>수업연구</h1>
          <p className="muted">못 푼 문제, 설명이 아쉬웠던 문제, 빈출 테마를 과목별로 모아 교재 후보로 발전시키는 공간입니다.</p>
        </div>
        <div className="researchTopActions">
          <InlineSaveStatus label="수업연구 자동저장" saveState={appStateSaveState} />
          <button className="primaryButton" onClick={handleAddItem} type="button">+ 연구 항목 추가</button>
        </div>
      </div>

      <div className="researchSubjectTabs">
        {lessonResearchSubjects.map((subject) => (
          <button
            className={selectedSubject === subject ? "active" : ""}
            key={subject}
            onClick={() => {
              setSelectedSubject(subject);
              setSelectedItemId("");
            }}
            type="button"
          >
            <strong>{subject}</strong>
            <span>{subjectCounts[subject] ?? 0}</span>
          </button>
        ))}
      </div>

      <div className="researchMetricGrid">
        <MetricCard label="전체 연구 항목" value={`${items.length}개`} hint="과목 전체 누적" />
        <MetricCard label="교재화 후보" value={`${items.filter((item) => item.status === "교재후보").length}개`} hint="문항집으로 발전 가능" />
        <MetricCard label="상 우선순위" value={`${items.filter((item) => item.priority === "상").length}개`} hint="다음 수업 전 확인" />
      </div>

      <div className="researchLayout">
        <section className="panel researchListPanel">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">COLLECT</p>
              <h2>{selectedSubject}</h2>
            </div>
            <div className="researchFilters">
              <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                {["전체", "못 푼 문제", "설명 아쉬움", "빈출 테마", "교재화 후보"].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                {["전체", "수집", "정리중", "교재후보", "완료"].map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="researchCardList">
            {filteredItems.length === 0 ? (
              <div className="emptyState">아직 이 과목에 정리된 연구 항목이 없습니다.</div>
            ) : (
              filteredItems.map((item) => (
                <button
                  className={selectedItem?.researchItemId === item.researchItemId ? "researchCard active" : "researchCard"}
                  key={item.researchItemId}
                  onClick={() => setSelectedItemId(item.researchItemId)}
                  type="button"
                >
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.source || "출처 미입력"}</span>
                  </div>
                  <div className="researchBadges">
                    <span>{item.category}</span>
                    <span>{item.status}</span>
                    <b>{item.priority}</b>
                  </div>
                </button>
              ))
            )}
          </div>
        </section>

        <section className="panel researchEditor">
          {selectedItem ? (
            <>
              <div className="sectionHeader">
                <div>
                  <p className="eyebrow">EDIT</p>
                  <h2>연구 항목 정리</h2>
                  <p className="muted">마지막 수정일 {selectedItem.updatedAt || selectedItem.createdAt}</p>
                </div>
                <button className="ghostButton dangerText" onClick={() => onDeleteItem(selectedItem.researchItemId)} type="button">삭제</button>
              </div>

              <div className="researchMetaGrid">
                <label>
                  과목
                  <select value={selectedItem.subject} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "subject", event.target.value)}>
                    {lessonResearchSubjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </label>
                <label>
                  분류
                  <select value={selectedItem.category} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "category", event.target.value)}>
                    {["못 푼 문제", "설명 아쉬움", "빈출 테마", "교재화 후보"].map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label>
                  상태
                  <select value={selectedItem.status} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "status", event.target.value)}>
                    {["수집", "정리중", "교재후보", "완료"].map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label>
                  우선순위
                  <select value={selectedItem.priority} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "priority", event.target.value)}>
                    {["상", "중", "하"].map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="wideLabel">
                제목
                <input value={selectedItem.title} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "title", event.target.value)} />
              </label>
              <label className="wideLabel">
                출처 / 수업 맥락
                <input value={selectedItem.source} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "source", event.target.value)} placeholder="예: 6/12 월수금 7-10 질문, 창동고 기출, 자체교재 p.32" />
              </label>

              <div className="researchTextareaGrid">
                <label>
                  문제 메모
                  <textarea value={selectedItem.problemNote} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "problemNote", event.target.value)} placeholder="문항 조건, 학생이 막힌 지점, 다시 풀어볼 포인트" />
                </label>
                <label>
                  설명 보완 메모
                  <textarea value={selectedItem.teachingNote} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "teachingNote", event.target.value)} placeholder="다음 수업에서 어떻게 설명할지, 판서 흐름, 비유, 질문 순서" />
                </label>
                <label className="researchWideTextarea">
                  교재화 아이디어
                  <textarea value={selectedItem.materialPlan} onChange={(event) => onUpdateItem(selectedItem.researchItemId, "materialPlan", event.target.value)} placeholder="개념 설명, 대표문항, 유제, 심화문항으로 발전시킬 방향" />
                </label>
              </div>
            </>
          ) : (
            <div className="emptyState">왼쪽에서 항목을 추가하거나 선택해주세요.</div>
          )}
        </section>
      </div>
    </section>
  );
}

function AIVariantProblemCenter({ aiSettings = defaultAiSettings }) {
  const [activeTab, setActiveTab] = useState("variant");
  const [sourceProblem, setSourceProblem] = useState("");
  const [variantLevel, setVariantLevel] = useState("same");
  const [basicCount, setBasicCount] = useState("1");
  const [similarCount, setSimilarCount] = useState("1");
  const [advancedCount, setAdvancedCount] = useState("0");
  const [answerStyle, setAnswerStyle] = useState("fiveChoice");
  const [solutionStyle, setSolutionStyle] = useState("short");
  const [toneStyle, setToneStyle] = useState("auto");
  const [teacherPrompt, setTeacherPrompt] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [selectedVariantIds, setSelectedVariantIds] = useState([]);
  const [isHwpxExportOpen, setIsHwpxExportOpen] = useState(false);
  const variantFileInputRef = useRef(null);
  const [hwpxExportForm, setHwpxExportForm] = useState({
    includeAnswerSheet: false,
    includeInlineNotes: true,
    includeSolution: true,
    layout: "b4_2col",
    subject: "",
    title: "변형문항 시험지",
    typography: "compact"
  });
  const totalVariantCount = Number(basicCount || 0) + Number(similarCount || 0) + Number(advancedCount || 0);
  const generatedVariantCount = Math.max(1, Math.min(totalVariantCount || 1, 10));
  const generatedVariants = isGenerated
    ? Array.from({ length: generatedVariantCount }, (_, index) => {
        const variantNumber = index + 1;
        const type =
          index < Number(basicCount || 0)
            ? "숫자/조건 변형"
            : index < Number(basicCount || 0) + Number(similarCount || 0)
              ? "표현 변형"
              : "고난도 변형";
        return {
          id: `variant_${variantNumber}`,
          label: `변형 ${variantNumber}`,
          level: variantLevel === "same" ? "유사 난도" : variantLevel === "up" ? "심화" : "내신 실전",
          source: sourceProblem || "원본 문항을 입력하면 이 영역에 변형문항 결과가 표시됩니다.",
          type
        };
      })
    : [];
  const selectedVariantCount = selectedVariantIds.filter((id) =>
    generatedVariants.some((variant) => variant.id === id)
  ).length;

  async function appendVariantSourceFile(file) {
    if (!file) return;
    const header = `[첨부 파일] ${file.name} (${Math.round(file.size / 1024)}KB)`;
    let fileText = "";
    if (file.type.startsWith("text/") || /\.(txt|csv|md|json)$/i.test(file.name)) {
      try {
        fileText = await file.text();
      } catch (error) {
        fileText = `파일 내용을 읽지 못했습니다: ${error.message}`;
      }
    }
    setSourceProblem((current) => [current, header, fileText].filter(Boolean).join("\n\n"));
  }

  function handleVariantFileInput(event) {
    appendVariantSourceFile(event.target.files?.[0]);
    event.target.value = "";
  }

  function handleVariantFileDrop(event) {
    event.preventDefault();
    appendVariantSourceFile(event.dataTransfer.files?.[0]);
  }

  function handleGenerateVariant() {
    setIsGenerated(true);
    setSelectedVariantIds(
      Array.from({ length: Math.min(generatedVariantCount, 2) }, (_, index) => `variant_${index + 1}`)
    );
  }

  function handleToggleVariantSelection(variantId) {
    setSelectedVariantIds((current) =>
      current.includes(variantId)
        ? current.filter((id) => id !== variantId)
        : [...current, variantId]
    );
  }

  function updateHwpxExportForm(field, value) {
    setHwpxExportForm((current) => ({ ...current, [field]: value }));
  }

  function handleDownloadHwpx() {
    const selectedVariants = generatedVariants.filter((variant) => selectedVariantIds.includes(variant.id));
    const exportPayload = {
      createdAt: new Date().toISOString(),
      exportType: "hwpx-draft",
      note: "This is a frontend export draft. Backend HWPX packaging will replace this payload with a valid HWPX archive.",
      options: hwpxExportForm,
      variants: selectedVariants
    };
    const fileName = `${(hwpxExportForm.title || "variant-test").replace(/[\\/:*?"<>|]/g, "_")}.hwpx`;
    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
      type: "application/vnd.hancom.hwpx"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setIsHwpxExportOpen(false);
  }

  return (
    <section className="aiVariantPage">
      <div className="pageTop aiVariantHero">
        <div>
          <p className="eyebrow">AI TOOLS</p>
          <h1>AI 도구</h1>
          <p className="muted">학원 수업자료 분석, 문제 변형, 문항 정리 작업을 한 곳에서 관리합니다.</p>
        </div>
      </div>

      <div className="studentManagerTabs aiTabs">
        {[
          ["variant", "변형문항"]
        ].map(([id, label]) => (
          <button className={activeTab === id ? "active" : ""} key={id} onClick={() => setActiveTab(id)} type="button">
            {label}
          </button>
        ))}
      </div>

      {activeTab === "variant" ? (
        <section className="aiVariantWorkspace">
          <div className="aiVariantWorkbench">
            <section className="panel aiToolCard aiVariantInputCard">
              <div className="aiToolCardTitle">
                <div>
                  <h2>문항 입력</h2>
                  <p className="muted">파일, 이미지, 텍스트로 받은 원본을 넣고 바로 변형 조건을 정합니다.</p>
                </div>
                <span className="readyPill">준비 완료</span>
              </div>

              <div className="aiVariantTopGrid">
                <div className="aiVariantInputColumn">
                  <div
                    className="aiUploadBox compact"
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={handleVariantFileDrop}
                  >
                    <strong>파일 선택 또는 드래그</strong>
                    <span>파일 1개 · 최대 50MB · Ctrl+V 붙여넣기</span>
                    <input
                      accept=".txt,.csv,.md,.json,image/*,.pdf"
                      className="visuallyHiddenInput"
                      onChange={handleVariantFileInput}
                      ref={variantFileInputRef}
                      type="file"
                    />
                    <button className="softButton" onClick={() => variantFileInputRef.current?.click()} type="button">
                      파일 업로드
                    </button>
                  </div>
                  <label className="wideLabel">
                    원본 문항 / 오답 메모
                    <textarea
                      value={sourceProblem}
                      onChange={(event) => setSourceProblem(event.target.value)}
                      placeholder="원본 문제, 학생 풀이 오류, 원하는 조건을 붙여넣으세요."
                      rows="8"
                    />
                  </label>
                </div>

                <div className="aiVariantOptionColumn">
                  <div className="variantOptionGroup compact">
                    <strong>변형 종류 · 개수</strong>
                    <div className="variantCountGrid compact">
                      <label>
                        숫자/조건
                        <input min="0" type="number" value={basicCount} onChange={(event) => setBasicCount(event.target.value)} />
                      </label>
                      <label>
                        표현
                        <input min="0" type="number" value={similarCount} onChange={(event) => setSimilarCount(event.target.value)} />
                      </label>
                      <label>
                        고난도
                        <input min="0" type="number" value={advancedCount} onChange={(event) => setAdvancedCount(event.target.value)} />
                      </label>
                    </div>
                  </div>

                  <div className="variantSelectGrid compact">
                    <label>
                      변형 난도
                      <select value={variantLevel} onChange={(event) => setVariantLevel(event.target.value)}>
                        <option value="same">유사 난도</option>
                        <option value="up">한 단계 심화</option>
                        <option value="exam">내신 실전형</option>
                      </select>
                    </label>
                    <label>
                      답안 형식
                      <select value={answerStyle} onChange={(event) => setAnswerStyle(event.target.value)}>
                        <option value="auto">자동</option>
                        <option value="fiveChoice">5지선다 객관식</option>
                        <option value="shortAnswer">단답형</option>
                        <option value="fillBlank">빈칸 채우기</option>
                        <option value="stepProof">단계별 서술형</option>
                        <option value="mixed">혼합 서술형</option>
                      </select>
                    </label>
                    <label>
                      해설 형식
                      <select value={solutionStyle} onChange={(event) => setSolutionStyle(event.target.value)}>
                        <option value="short">일반 해설 한 단락</option>
                        <option value="step">단계별 해설</option>
                        <option value="auto">자동</option>
                      </select>
                    </label>
                    <label>
                      풀이 스타일
                      <select value={toneStyle} onChange={(event) => setToneStyle(event.target.value)}>
                        <option value="auto">자동</option>
                        <option value="standard">표준 정석</option>
                        <option value="quick">빠른 풀이</option>
                        <option value="concept">학생 친절형</option>
                        <option value="exam">시험 실전형</option>
                        <option value="reverse">반례 체크형</option>
                      </select>
                    </label>
                  </div>

                  <label className="wideLabel">
                    강사 코멘트
                    <textarea
                      value={teacherPrompt}
                      onChange={(event) => setTeacherPrompt(event.target.value)}
                      placeholder="예: 계산은 쉽게, 조건 해석은 조금 더 꼬아서 / 창동고 스타일 / 학생들이 자주 틀리는 포인트 반영"
                      rows="4"
                    />
                  </label>
                </div>
              </div>
            </section>

            <button className="primaryButton aiRunButton" onClick={handleGenerateVariant} type="button">AI 처리 시작</button>
          </div>

          <section className="panel aiVariantResultPanel">
            {isGenerated ? (
              <>
                <div className="resultStatus success">
                  <strong>완료</strong>
                  <span>변형 문제 생성 완료</span>
                </div>
                <div className="variantResultToolbar">
                  <button className="softButton" type="button">별표</button>
                  <button className="softButton" type="button">전체 저장</button>
                  <button
                    className="primaryButton compact"
                    disabled={selectedVariantCount === 0}
                    onClick={() => setIsHwpxExportOpen(true)}
                    type="button"
                  >
                    HWPX 내보내기 ({selectedVariantCount})
                  </button>
                  <button className="softButton" onClick={handleGenerateVariant} type="button">다시 생성</button>
                </div>
                {generatedVariants.map((variant) => (
                  <article
                    className={selectedVariantIds.includes(variant.id) ? "variantResultCard selected" : "variantResultCard"}
                    key={variant.id}
                  >
                    <div className="variantResultMeta">
                      <label className="variantSelectCheck">
                        <input
                          checked={selectedVariantIds.includes(variant.id)}
                          onChange={() => handleToggleVariantSelection(variant.id)}
                          type="checkbox"
                        />
                        선택
                      </label>
                      <span>{variant.label}</span>
                      <b>{variant.level}</b>
                      <em>{variant.type}</em>
                    </div>
                    <strong>원본 문항의 핵심 조건을 유지한 변형 초안</strong>
                    <p>{variant.source}</p>
                    <div className="variantAnswerBox">
                      <span>정답</span>
                      <strong>AI 생성 후 표시</strong>
                    </div>
                    <div className="variantSolutionBox">
                      <span>해설</span>
                      <p>선택한 해설 형식과 풀이 스타일에 맞춰 풀이가 표시됩니다.</p>
                    </div>
                  </article>
                ))}
              </>
            ) : (
              <div className="variantResultEmpty">
                <span>✨</span>
                <strong>결과 대기 중</strong>
                <p>왼쪽 패널에서 파일 또는 문항을 입력하고 옵션을 설정한 후 AI 처리를 시작하세요.</p>
              </div>
            )}
          </section>
        </section>
      ) : null}

      {isHwpxExportOpen ? (
        <Modal
          className="hwpxExportModal"
          title="HWPX 시험지 내보내기"
          subtitle={`선택한 ${selectedVariantCount}개 문항을 한글 파일(.hwpx)로 다운로드합니다.`}
          onClose={() => setIsHwpxExportOpen(false)}
        >
          <div className="hwpxExportForm">
            <section className="hwpxExportSection">
              <div className="sectionHeader slim">
                <div>
                  <h3>시험지 정보</h3>
                  <p className="muted">다운로드 파일에 들어갈 기본 정보를 정합니다.</p>
                </div>
              </div>
              <label className="wideLabel">
                시험지 제목
                <input
                  value={hwpxExportForm.title}
                  onChange={(event) => updateHwpxExportForm("title", event.target.value)}
                  placeholder="예: 6월 3주차 변형문항"
                />
              </label>
              <label className="wideLabel">
                과목
                <input
                  value={hwpxExportForm.subject}
                  onChange={(event) => updateHwpxExportForm("subject", event.target.value)}
                  placeholder="예: 공통수학1, 미적분"
                />
              </label>
            </section>

            <section className="hwpxExportSection">
              <div className="sectionHeader slim">
                <div>
                  <h3>정답 · 풀이</h3>
                  <p className="muted">수업용, 배부용, 해설용 시험지 형식을 나눠 저장할 수 있게 둡니다.</p>
                </div>
              </div>
              <div className="hwpxCheckboxGrid">
                <label>
                  <input
                    checked={hwpxExportForm.includeAnswerSheet}
                    onChange={(event) => updateHwpxExportForm("includeAnswerSheet", event.target.checked)}
                    type="checkbox"
                  />
                  정답 포함
                </label>
                <label>
                  <input
                    checked={hwpxExportForm.includeSolution}
                    onChange={(event) => updateHwpxExportForm("includeSolution", event.target.checked)}
                    type="checkbox"
                  />
                  풀이 / 해설 포함
                </label>
                <label>
                  <input
                    checked={hwpxExportForm.includeInlineNotes}
                    onChange={(event) => updateHwpxExportForm("includeInlineNotes", event.target.checked)}
                    type="checkbox"
                  />
                  인라인 노트 포함
                </label>
              </div>
            </section>

            <section className="hwpxExportSection">
              <div className="hwpxExportGrid">
                <label>
                  페이지 레이아웃
                  <select value={hwpxExportForm.layout} onChange={(event) => updateHwpxExportForm("layout", event.target.value)}>
                    <option value="b4_2col">B4 · 2단</option>
                    <option value="a4_1col">A4 · 1단</option>
                    <option value="a4_2col">A4 · 2단</option>
                  </select>
                </label>
                <label>
                  타이포그래피
                  <select value={hwpxExportForm.typography} onChange={(event) => updateHwpxExportForm("typography", event.target.value)}>
                    <option value="compact">예비 · 본문 · 여백</option>
                    <option value="exam">시험지형</option>
                    <option value="solution">해설지형</option>
                  </select>
                </label>
              </div>
            </section>

            <p className="hwpxExportNote">
              현재 다운로드는 HWPX 내보내기 연결을 검수하기 위한 초안입니다. 한컴에서 바로 열리는 정식 HWPX 패키징은 백엔드 변환 모듈에서 완성합니다.
            </p>

            <div className="hwpxExportActions">
              <button className="softButton" onClick={() => setIsHwpxExportOpen(false)} type="button">취소</button>
              <button className="primaryButton" disabled={selectedVariantCount === 0} onClick={handleDownloadHwpx} type="button">다운로드</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

function StudentPortal({ homeworks, reportSnapshots, students, onStudentCheckHomework }) {
  const [selectedStudentId, setSelectedStudentId] = useState(
    students.find((student) => student.name === "TestS12")?.studentId ?? students[0]?.studentId ?? ""
  );
  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? students[0];
  const selectedStudentHomeworks = homeworks.filter((homework) => homework.studentId === selectedStudent?.studentId);
  const studentHomeworks = selectedStudentHomeworks
    .filter(isStudentVisibleHomework)
    .map((homework) => mergeHomeworkStatusFromLinkedPrevious(homework, selectedStudentHomeworks));
  const todayHomeworks = studentHomeworks.filter((homework) => homework.assignedDate === today);
  const overdueHomeworks = studentHomeworks.filter((homework) => isHomeworkOverdue(homework));
  const studentReports = reportSnapshots.filter((snapshot) => snapshot.studentId === selectedStudent?.studentId);
  const streakDays = calculateStreak(studentHomeworks);

  return (
    <section className="studentPortal">
      <header className="portalHeader">
        <div>
          <h1>{academyBrandName} <span>학생</span></h1>
          <p>{selectedStudent?.name} ({selectedStudent?.grade})</p>
        </div>
        <div className="portalActions">
          <button className="portalIconButton" type="button">💬</button>
          <span className="portalDate">▦ {today}</span>
          <button className="logoutButton" onClick={onLogout} type="button">로그아웃</button>
          {previewMode ? (
          <label className="compactSelect">
            학생 선택
            <select value={selectedStudent?.studentId ?? ""} onChange={(event) => setSelectedStudentId(event.target.value)}>
              {students.map((student) => (
                <option key={student.studentId} value={student.studentId}>{student.name}</option>
              ))}
            </select>
          </label>
          ) : null}
        </div>
      </header>

      <div className="metricGrid">
        <MetricCard icon="📖" label="오늘 할 숙제" value={`${todayHomeworks.length}개`} hint="오늘 배정된 숙제 수" />
        <MetricCard icon="⚠️" label="밀린 숙제" value={`${overdueHomeworks.length}개`} hint="완료 못한 지난 날짜 숙제" tone="warning" />
        <MetricCard icon="🔥" label="연속 수행일" value={`${streakDays}일`} hint="매일 체크하는 습관 지표" tone="success" />
      </div>

      <section className="panel studentWorkPanel">
        <div className="portalTabs">
          <button className="active" type="button">오늘</button>
          <button type="button">등록</button>
          <button type="button">전체</button>
          <button type="button">커리큘럼</button>
          <button type="button">평가</button>
          <button type="button">마이페이지</button>
        </div>
        <div className="sectionHeader">
          <div>
            <h2>오늘 해야 할 숙제</h2>
            <p className="muted">완료 체크하면 선생님 화면에 즉시 반영됩니다.</p>
          </div>
        </div>
        <div className="homeworkStack">
          {todayHomeworks.length === 0 ? (
            <div className="emptyHomeworkBox">오늘 배정된 숙제가 없습니다.</div>
          ) : null}
          {todayHomeworks.map((homework) => (
            <HomeworkActionCard
              homework={homework}
              key={homework.homeworkId}
              onStudentCheckHomework={onStudentCheckHomework}
            />
          ))}
        </div>
        {overdueHomeworks.length ? (
          <div className="warningBand">⚠️ 밀린 숙제가 있습니다. 오늘 카드나 전체 탭에서 확인하세요.</div>
        ) : null}
      </section>

      <section className="panel">
        <h2>최근 리포트</h2>
        {studentReports.length === 0 ? <p className="muted">아직 공개된 리포트 스냅샷이 없습니다.</p> : null}
        {studentReports.slice(0, 3).map((report) => (
          <article className="snapshotCard" key={report.reportId}>
            <strong>{report.title}</strong>
            <p>{report.body}</p>
          </article>
        ))}
      </section>
    </section>
  );
}

function MetricCard({ active = false, hint, icon, label, onClick, tone = "default", value }) {
  const className = `${onClick ? "metricCard metricButton" : "metricCard"} metric-${tone}${active ? " active" : ""}`;
  const content = (
    <>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{hint}</small>
      </div>
      <b>{icon}</b>
    </>
  );
  if (onClick) {
    return (
      <button className={className} onClick={onClick} type="button">
        {content}
      </button>
    );
  }
  return (
    <div className={className}>
      {content}
    </div>
  );
}

function StudentPortalV2({
  examPrepRows = [],
  examPostSubmissions = [],
  examPostTargetStudentIds = {},
  homeworks,
  lessons = [],
  materials = [],
  makeupTasks = [],
  records = [],
  reportSnapshots,
  schoolEvents = [],
  scoreRecords = [],
  studentQuestions = [],
  students,
  sessionStudentId = "",
  previewMode = false,
  onLogout,
  onStudentAddQuestion,
  onStudentCheckHomework,
  onStudentDeleteQuestion,
  onSubmitExamPostSubmission,
  onStudentUpdateQuestion,
}) {
  const [selectedStudentId, setSelectedStudentId] = useState(
    sessionStudentId || students.find((student) => student.name === "TestS12")?.studentId || students[0]?.studentId || ""
  );
  const [activeTab, setActiveTab] = useState("today");
  const [myPageTab, setMyPageTab] = useState("stats");

  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? students[0];
  const studentRecordsWithLessons = records
    .filter((record) => record.studentId === selectedStudent?.studentId)
    .map((record) => ({ ...record, lesson: lessons.find((lesson) => lesson.lessonId === record.lessonId) }))
    .filter((record) => record.lesson && record.lesson.status !== "canceled")
    .sort((a, b) => String(b.lesson?.date ?? "").localeCompare(String(a.lesson?.date ?? "")));
  const selectedStudentHomeworks = homeworks.filter((homework) => homework.studentId === selectedStudent?.studentId);
  const studentHomeworks = selectedStudentHomeworks
    .filter(isStudentVisibleHomework)
    .map((homework) => mergeHomeworkStatusFromLinkedPrevious(homework, selectedStudentHomeworks, studentRecordsWithLessons));
  const todayHomeworks = studentHomeworks.filter((homework) => homework.assignedDate === today);
  const overdueHomeworks = studentHomeworks.filter((homework) => isHomeworkOverdue(homework));
  const studentReports = reportSnapshots.filter((snapshot) => snapshot.studentId === selectedStudent?.studentId);
  const studentLessonComments = records
    .filter((record) => record.studentId === selectedStudent?.studentId && record.studentCommentSendStatus)
    .map((record) => ({ ...record, lesson: lessons.find((lesson) => lesson.lessonId === record.lessonId) }))
    .sort((a, b) => String(b.lesson?.date ?? "").localeCompare(String(a.lesson?.date ?? "")));
  const studentPrepNotices = records
    .filter((record) => record.studentId === selectedStudent?.studentId && record.prepStudentNotice?.trim())
    .map((record) => ({ ...record, lesson: lessons.find((lesson) => lesson.lessonId === record.lessonId) }))
    .sort((a, b) => String(b.lesson?.date ?? "").localeCompare(String(a.lesson?.date ?? "")));
  const studentMaterials = filterVisibleMaterials(materials, selectedStudent, "student");
  const streakDays = calculateStreak(studentHomeworks);
  const stats = calculateHomeworkStats(studentHomeworks);
  const attendanceStats = calculateAttendanceStats(
    records
      .filter((record) => record.studentId === selectedStudent?.studentId)
      .map((record) => ({ ...record, lesson: lessons.find((lesson) => lesson.lessonId === record.lessonId) }))
  );
  const studentScoreRecords = scoreRecords.filter((score) => score.studentId === selectedStudent?.studentId);
  const upcomingStudentNotice = getStudentTopNotice(selectedStudent, examPrepRows, schoolEvents, makeupTasks);
  const studentSupplementSchedules = getStudentSupplementSchedules(makeupTasks, selectedStudent?.studentId);
  const selectedStudentQuestions = studentQuestions
    .filter((question) => question.studentId === selectedStudent?.studentId)
    .sort((a, b) => String(b.updatedAt ?? b.createdAt ?? "").localeCompare(String(a.updatedAt ?? a.createdAt ?? "")));
  const examPostTargets = buildExamPostTargetsForStudent(selectedStudent, examPrepRows, examPostSubmissions, examPostTargetStudentIds);

  useEffect(() => {
    if (sessionStudentId) setSelectedStudentId(sessionStudentId);
  }, [sessionStudentId]);

  return (
    <section className={previewMode ? "studentPortal studentPortalTabletFirst teacherPreviewPortal" : "studentPortal studentPortalTabletFirst"}>
      <header className="portalHeader">
        <div>
          <h1>{academyBrandName} <span>학생</span></h1>
          <p>{selectedStudent?.name} ({selectedStudent?.grade})</p>
        </div>
        <div className="portalActions">
          {previewMode ? (
            <button className="logoutButton" onClick={onLogout} type="button">관리 화면으로</button>
          ) : null}
          <button className="portalIconButton" type="button">💬</button>
          <span className="portalDate">🗓 {today}</span>
          <button className="logoutButton" onClick={onLogout} type="button">로그아웃</button>
          {!previewMode ? (
            <label className="compactSelect">
              학생 선택
              <select value={selectedStudent?.studentId ?? ""} onChange={(event) => setSelectedStudentId(event.target.value)}>
                {students.map((student) => (
                  <option key={student.studentId} value={student.studentId}>{student.name}</option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
      </header>

      <div className="metricGrid">
        <MetricCard icon="📖" label="오늘 할 숙제" value={`${todayHomeworks.length}개`} hint="오늘 배정된 숙제 수" />
        <MetricCard icon="⚠️" label="밀린 숙제" value={`${overdueHomeworks.length}개`} hint="완료 못한 지난 날짜 숙제" tone="warning" />
        <MetricCard icon="🔥" label="연속 수행일" value={`${streakDays}일`} hint="매일 체크하는 습관 지표" tone="success" />
      </div>

      <section className="panel studentWorkPanel">
        <div className="portalTabs">
          {[
            ["today", "오늘"],
            ["all", "전체"],
            ["materials", "자료함"],
            ["evaluation", "평가"],
            ["mypage", "마이 페이지"],
            ["curriculum", "커리큘럼"]
          ].map(([id, label]) => (
            <button className={activeTab === id ? "active" : ""} key={id} onClick={() => setActiveTab(id)} type="button">
              {label}
            </button>
          ))}
        </div>

        {activeTab === "today" ? (
          <StudentTodayTab
            homeworks={homeworks}
            lessons={lessons}
            overdueHomeworks={overdueHomeworks}
            prepNotices={studentPrepNotices}
            questions={selectedStudentQuestions}
            recordsWithLessons={studentRecordsWithLessons}
            selectedStudent={selectedStudent}
            studentNotice={upcomingStudentNotice}
            supplementSchedules={studentSupplementSchedules}
            todayHomeworks={todayHomeworks}
            onAddQuestion={onStudentAddQuestion}
            onDeleteQuestion={onStudentDeleteQuestion}
            examPostTargets={examPostTargets}
            onSubmitExamPostSubmission={onSubmitExamPostSubmission}
            onUpdateQuestion={onStudentUpdateQuestion}
            onStudentCheckHomework={onStudentCheckHomework}
          />
        ) : null}

        {activeTab === "all" ? (
          <StudentAllHomeworkTab
            homeworks={studentHomeworks}
            records={studentRecordsWithLessons}
          />
        ) : null}
        {activeTab === "materials" ? <PortalMaterialsTab materials={studentMaterials} emptyMessage="아직 공개된 자료가 없습니다." /> : null}
        {activeTab === "curriculum" ? <StudentEmptyTab message="아직 커리큘럼이 설정되지 않았습니다. 선생님께 문의하세요." /> : null}
        {activeTab === "evaluation" ? <StudentEvaluationTab /> : null}
        {activeTab === "mypage" ? (
          <StudentMyPageTab
            myPageTab={myPageTab}
            selectedStudent={selectedStudent}
            scoreRecords={studentScoreRecords}
            stats={stats}
            attendanceStats={attendanceStats}
            studentLessonComments={studentLessonComments}
            onChangeTab={setMyPageTab}
          />
        ) : null}
      </section>

      <section className="panel">
        <h2>최근 리포트</h2>
        {studentReports.length === 0 ? <p className="muted">아직 공개된 리포트 초안이 없습니다.</p> : null}
        {studentReports.slice(0, 3).map((report) => (
          <article className="snapshotCard" key={report.reportId}>
            <strong>{report.title}</strong>
            <p>{report.body}</p>
          </article>
        ))}
      </section>
    </section>
  );
}

function StudentTodayTab({
  homeworks = [],
  lessons = [],
  overdueHomeworks,
  prepNotices = [],
  questions = [],
  examPostTargets = [],
  recordsWithLessons = [],
  selectedStudent,
  studentNotice,
  supplementSchedules = [],
  todayHomeworks,
  onAddQuestion,
  onDeleteQuestion,
  onSubmitExamPostSubmission,
  onUpdateQuestion,
  onStudentCheckHomework
}) {
  const [questionText, setQuestionText] = useState("");

  function submitQuestion(event) {
    event.preventDefault();
    const text = questionText.trim();
    if (!text || !selectedStudent) return;
    onAddQuestion?.({ studentId: selectedStudent.studentId, text });
    setQuestionText("");
  }

  return (
    <>
      {studentNotice ? (
        <div className={`studentTopNotice ${studentNotice.tone}`}>
          <strong>{studentNotice.title}</strong>
          <span>{studentNotice.detail}</span>
        </div>
      ) : null}

      <StudentExamPostSubmissionPanel
        targets={examPostTargets}
        selectedStudent={selectedStudent}
        onSubmitExamPostSubmission={onSubmitExamPostSubmission}
      />

      {prepNotices.length ? (
        <div className="portalNoticeStack">
          <h2>수업 준비 안내</h2>
          {prepNotices.slice(0, 3).map((notice) => (
            <article className="portalNoticeCard" key={`prep_${notice.lessonStudentRecordId}`}>
              <strong>{notice.lesson?.date ?? "수업"} · {notice.lesson?.className ?? "수업 준비"}</strong>
              <p>{notice.prepStudentNotice}</p>
            </article>
          ))}
        </div>
      ) : null}

      <StudentLessonHistoryCalendar
        homeworks={homeworks}
        lessons={lessons}
        recordsWithLessons={recordsWithLessons}
        selectedStudent={selectedStudent}
      />

      <section className="studentQuestionPanel">
        <div className="sectionHeader compact">
          <div>
            <h2>수업 전에 정리할 질문</h2>
            <p className="muted">막힌 문제나 헷갈린 개념을 짧게 적어두면 수업 시작이 훨씬 빨라집니다.</p>
          </div>
        </div>
        <form className="studentQuestionForm" onSubmit={submitQuestion}>
          <input
            value={questionText}
            onChange={(event) => setQuestionText(event.target.value)}
            placeholder="예: 2차함수 최대최소에서 범위가 있을 때가 헷갈려요"
          />
          <button className="primaryButton" type="submit">질문 추가</button>
        </form>
        <div className="studentQuestionList">
          {questions.length === 0 ? <div className="emptyHomeworkBox compact">아직 정리한 질문이 없습니다.</div> : null}
          {questions.slice(0, 6).map((question) => (
            <article className={`studentQuestionItem ${question.status === "resolved" ? "resolved" : ""}`} key={question.questionId}>
              <div>
                <strong>{question.text}</strong>
                <small>{question.status === "resolved" ? "해결됨" : "수업 질문 준비"}</small>
              </div>
              <div>
                <button
                  className="softButton"
                  onClick={() => onUpdateQuestion?.(question.questionId, { status: question.status === "resolved" ? "ready" : "resolved" })}
                  type="button"
                >
                  {question.status === "resolved" ? "다시 질문" : "해결 체크"}
                </button>
                <button className="dangerSoftButton" onClick={() => onDeleteQuestion?.(question.questionId)} type="button">삭제</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {supplementSchedules.length ? (
        <section className="studentSpecialSchedule">
          <h2>보충/재시험 일정</h2>
          <div className="studentSpecialList">
            {supplementSchedules.slice(0, 3).map((task) => (
              <article key={task.makeupTaskId}>
                <strong>{followUpTypeLabel(task.taskType)}</strong>
                <span>{task.scheduledDate || "일정 미정"} {task.scheduledTime || ""}</span>
                <small>{task.sourceLabel || task.reason || "선생님과 확인 예정"}</small>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <div className="sectionHeader">
        <div>
          <h2>오늘 해야 할 숙제</h2>
          <p className="muted">완료 체크하면 선생님 화면에 즉시 반영됩니다.</p>
        </div>
      </div>
      <div className="homeworkStack">
        {todayHomeworks.length === 0 ? <div className="emptyHomeworkBox">오늘 배정된 숙제가 없습니다.</div> : null}
        {todayHomeworks.map((homework) => (
          <HomeworkActionCard
            homework={homework}
            key={homework.homeworkId}
            records={recordsWithLessons}
            onStudentCheckHomework={onStudentCheckHomework}
          />
        ))}
      </div>
      {overdueHomeworks.length ? (
        <div className="warningBand">⚠️ 확인이 필요한 숙제가 있습니다. 선생님과 수업 시간에 확인하세요.</div>
      ) : null}
    </>
  );
}

function StudentExamPostSubmissionPanel({ targets = [], selectedStudent, onSubmitExamPostSubmission }) {
  const activeTargets = targets.filter((target) => !target.submission?.submittedAt);
  const completedTargets = targets.filter((target) => target.submission?.submittedAt);
  const [drafts, setDrafts] = useState({});
  const [filesByTarget, setFilesByTarget] = useState({});
  const [uploadStatus, setUploadStatus] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const target = activeTargets[0] ?? completedTargets[0] ?? null;

  if (!target) return null;

  const draft = {
    score: target.submission?.score ?? "",
    feeling: target.submission?.feeling ?? "",
    difficulty: target.submission?.difficulty ?? "5",
    preparation: target.submission?.preparation ?? "5",
    goodPart: target.submission?.goodPart ?? "",
    strongUnit: target.submission?.strongUnit ?? "",
    regretReason: target.submission?.regretReason ?? "",
    regretReasons: target.submission?.regretReasons ?? [],
    regretReasonOther: target.submission?.regretReasonOther ?? "",
    regretMoment: target.submission?.regretMoment ?? "",
    studyDifficulties: target.submission?.studyDifficulties ?? [],
    studyDifficultyOther: target.submission?.studyDifficultyOther ?? "",
    neededMore: target.submission?.neededMore ?? "",
    academyHelp: target.submission?.academyHelp ?? "",
    academyFeedback: target.submission?.academyFeedback ?? "",
    nextGoal: target.submission?.nextGoal ?? "",
    changeForNextExam: target.submission?.changeForNextExam ?? "",
    wantedHelp: target.submission?.wantedHelp ?? "",
    freeComment: target.submission?.freeComment ?? "",
    fileMemo: target.submission?.fileMemo ?? "",
    ...(drafts[target.targetId] ?? {})
  };
  const isSubmitted = Boolean(target.submission?.submittedAt);
  const isOpen = target.isOpen ?? getDateDiffInDays(today, target.examDate) <= 0;
  const selectedFiles = filesByTarget[target.targetId] ?? [];
  const submittedFiles = target.submission?.fileAttachments ?? [];

  function updateDraft(field, value) {
    setValidationMessage("");
    setDrafts((current) => ({
      ...current,
      [target.targetId]: {
        ...(current[target.targetId] ?? {}),
        [field]: value
      }
    }));
  }

  function toggleDraftList(field, value) {
    const currentValues = Array.isArray(draft[field]) ? draft[field] : [];
    updateDraft(
      field,
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]
    );
  }

  function updateFiles(fileList) {
    setValidationMessage("");
    const nextFiles = Array.from(fileList ?? []).slice(0, 8);
    setFilesByTarget((current) => ({ ...current, [target.targetId]: nextFiles }));
    setUploadStatus(nextFiles.length ? `${nextFiles.length}개 파일 선택됨` : "");
  }

  function getMissingRequiredFields() {
    const requiredTextFields = [
      ["score", "점수/등급"],
      ["feeling", "전체 소감"],
      ["difficulty", "난이도"],
      ["preparation", "준비 충분도"],
      ["goodPart", "잘 준비한 부분"],
      ["strongUnit", "실력을 발휘한 문제 유형/단원"],
      ["regretReasonOther", "아쉬웠던 다른 이유"],
      ["neededMore", "더 준비할 부분"],
      ["regretMoment", "시험장에서 아쉬웠던 순간"],
      ["studyDifficultyOther", "공부과정의 다른 어려움"],
      ["academyHelp", "학원 수업/자료 도움 정도"],
      ["academyFeedback", "수업/자료 피드백"],
      ["nextGoal", "다음 시험 목표"],
      ["changeForNextExam", "다음 시험을 위해 바꾸고 싶은 것"],
      ["wantedHelp", "선생님께 도움받고 싶은 부분"],
      ["freeComment", "선생님께 하고 싶은 말"],
      ["fileMemo", "시험지 제출 메모"]
    ];
    const missingFields = requiredTextFields
      .filter(([field]) => !String(draft[field] ?? "").trim())
      .map(([, label]) => label);
    if (!Array.isArray(draft.regretReasons) || draft.regretReasons.length === 0) {
      missingFields.push("아쉬웠던 이유");
    }
    if (!Array.isArray(draft.studyDifficulties) || draft.studyDifficulties.length === 0) {
      missingFields.push("수학 공부과정에서 힘들었던 것");
    }
    if (!selectedFiles.length && !submittedFiles.length) {
      missingFields.push("시험지 사진/PDF");
    }
    return missingFields;
  }

  async function submit(event) {
    event.preventDefault();
    if (!selectedStudent || !onSubmitExamPostSubmission) return;
    const missingFields = getMissingRequiredFields();
    if (missingFields.length) {
      setValidationMessage(`아직 작성하지 않은 항목이 있습니다: ${missingFields.join(", ")}`);
      return;
    }
    let fileAttachments = [];
    if (selectedFiles.length) {
      setUploadStatus("시험지 사진을 업로드하는 중입니다...");
      fileAttachments = await Promise.all(
        selectedFiles.map(async (file) => {
          try {
            const uploadedFile = await uploadExamPostSubmissionFile(file, target, selectedStudent);
            return { ...uploadedFile, uploadStatus: "uploaded" };
          } catch (error) {
            return {
              fileName: file.name,
              fileType: file.type,
              fileSize: file.size,
              uploadedAt: new Date().toISOString(),
              uploadStatus: "failed",
              uploadError: error.message,
              source: "student_camera"
            };
          }
        })
      );
      const failedCount = fileAttachments.filter((file) => file.uploadStatus === "failed").length;
      setUploadStatus(failedCount ? `${failedCount}개 파일 업로드 실패 · 제출 기록에 남겼습니다.` : `${fileAttachments.length}개 파일 업로드 완료`);
    }
    onSubmitExamPostSubmission(target, selectedStudent, {
      ...draft,
      regretReason: [...(draft.regretReasons ?? []), draft.regretReasonOther].filter(Boolean).join(", "),
      fileAttachments
    });
    setDrafts((current) => {
      const next = { ...current };
      delete next[target.targetId];
      return next;
    });
    setFilesByTarget((current) => {
      const next = { ...current };
      delete next[target.targetId];
      return next;
    });
  }

  return (
    <section className={`studentExamPostPanel ${target.isOverdue && !isSubmitted ? "overdue" : ""}`}>
      <div className="sectionHeader compact">
        <div>
          <h2>{isSubmitted ? "시험 후 제출 완료" : isOpen ? "시험 후 제출 필요" : "시험 후 제출 예정"}</h2>
          <p className="muted">
            {target.schoolName} · {target.grade} · {target.subject} · {target.examDate}
            {isSubmitted ? ` · 제출 ${formatKoreanDateTime(target.submission.submittedAt)}` : isOpen ? ` · 마감 ${target.dueDate} 23:59` : ` · 시험 후 마감 ${target.dueDate} 23:59`}
          </p>
        </div>
      </div>
      {isSubmitted ? (
        <div className="studentExamPostDone">
          <strong>{target.submission.score || "점수 미입력"}</strong>
          <span>{target.submission.feeling || "셀프체크 제출됨"}</span>
          <small>{target.submission.teacherConfirmed ? "선생님 확인 완료" : "선생님 확인 전"}</small>
          {submittedFiles.length ? (
            <div className="examPostFileList">
              {submittedFiles.map((file, index) => (
                <a
                  className={file.uploadStatus === "failed" ? "examPostFile failed" : "examPostFile"}
                  href={file.uploadStatus === "failed" ? undefined : getExamPostFileOpenUrl(file)}
                  key={`${file.fileName}_${index}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {file.uploadStatus === "failed" ? "업로드 실패" : "파일 보기"} · {file.fileName}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <form className="studentExamPostForm" onSubmit={submit}>
          {validationMessage ? <div className="examPostValidationMessage">{validationMessage}</div> : null}
          <div className="examPostAutoInfo">
            <span>이름 <b>{selectedStudent?.name ?? "-"}</b></span>
            <span>학년 <b>{selectedStudent?.grade ?? target.grade ?? "-"}</b></span>
            <span>학교 <b>{target.schoolName || selectedStudent?.schoolName || "-"}</b></span>
            <span>시험 <b>{target.label || examCycleLabel(target.examCycle)}</b></span>
            <span>과목 <b>{target.subject}</b></span>
            <span>시험일 <b>{target.examDate}</b></span>
          </div>
          <div className="fieldGrid two">
            <label>
              점수/등급
              <input required value={draft.score} onChange={(event) => updateDraft("score", event.target.value)} placeholder="예: 86점 또는 2등급" />
            </label>
            <label>
              전체 소감
              <select required value={draft.feeling} onChange={(event) => updateDraft("feeling", event.target.value)}>
                <option value="">선택</option>
                {examPostFeelingOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              난이도 0~10
              <select required value={draft.difficulty} onChange={(event) => updateDraft("difficulty", event.target.value)}>
                {examPostScaleOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>
              준비 충분도 0~10
              <select required value={draft.preparation} onChange={(event) => updateDraft("preparation", event.target.value)}>
                {examPostScaleOptions.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>
          <label>
            스스로 잘 준비했다고 느낀 부분이 있다면?
            <textarea required value={draft.goodPart} onChange={(event) => updateDraft("goodPart", event.target.value)} rows="2" />
          </label>
          <label>
            실력을 발휘할 수 있었던 문제 유형이나 단원은?
            <textarea required value={draft.strongUnit} onChange={(event) => updateDraft("strongUnit", event.target.value)} rows="2" />
          </label>
          <div className="examPostChoiceGroup">
            <strong>아쉬웠던 이유가 있다면? (해당 모두 선택)</strong>
            <div>
              {examPostRegretReasonOptions.map((option) => (
                <label key={option}>
                  <input
                    checked={(Array.isArray(draft.regretReasons) ? draft.regretReasons : []).includes(option)}
                    onChange={() => toggleDraftList("regretReasons", option)}
                    type="checkbox"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <label>
            다른 이유가 있다면?
            <textarea required value={draft.regretReasonOther} onChange={(event) => updateDraft("regretReasonOther", event.target.value)} rows="2" />
          </label>
          <label>
            더 준비할걸 했던 부분이 있다면?
            <textarea required value={draft.neededMore} onChange={(event) => updateDraft("neededMore", event.target.value)} rows="2" />
          </label>
          <label>
            시험장에서 가장 아쉬웠던 순간은?
            <textarea required value={draft.regretMoment} onChange={(event) => updateDraft("regretMoment", event.target.value)} rows="2" />
          </label>
          <div className="examPostChoiceGroup">
            <strong>수학 공부과정에서 가장 힘들었던 것은?</strong>
            <div>
              {examPostStudyDifficultyOptions.map((option) => (
                <label key={option}>
                  <input
                    checked={(Array.isArray(draft.studyDifficulties) ? draft.studyDifficulties : []).includes(option)}
                    onChange={() => toggleDraftList("studyDifficulties", option)}
                    type="checkbox"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <label>
            다른 이유가 있다면? (2)
            <textarea required value={draft.studyDifficultyOther} onChange={(event) => updateDraft("studyDifficultyOther", event.target.value)} rows="2" />
          </label>
          <label>
            학원 수업과 자료가 도움이 됐나요?
            <select required value={draft.academyHelp} onChange={(event) => updateDraft("academyHelp", event.target.value)}>
              <option value="">선택</option>
              {examPostAcademyHelpOptions.map((option) => <option key={option}>{option}</option>)}
            </select>
          </label>
          <label>
            수업이나 자료에서 좋았던 점 / 아쉬운 점이 있다면?
            <textarea required value={draft.academyFeedback} onChange={(event) => updateDraft("academyFeedback", event.target.value)} rows="2" />
          </label>
          <label>
            다음 시험 목표 점수 또는 등급은?
            <input required value={draft.nextGoal} onChange={(event) => updateDraft("nextGoal", event.target.value)} placeholder="예: 90점, 1등급" />
          </label>
          <label>
            다음 시험을 위해 가장 바꾸고 싶은 것 한 가지는?
            <textarea required value={draft.changeForNextExam} onChange={(event) => updateDraft("changeForNextExam", event.target.value)} rows="2" />
          </label>
          <label>
            선생님께 꼭 도움받고 싶은 부분이 있다면?
            <textarea required value={draft.wantedHelp} onChange={(event) => updateDraft("wantedHelp", event.target.value)} rows="2" />
          </label>
          <label>
            선생님한테 하고 싶은 말, 건의사항, 뭐든 OK
            <textarea required value={draft.freeComment} onChange={(event) => updateDraft("freeComment", event.target.value)} rows="2" />
          </label>
          <label>
            시험지 제출 메모
            <input required value={draft.fileMemo} onChange={(event) => updateDraft("fileMemo", event.target.value)} placeholder="예: 종이 시험지 직접 제출, 사진은 수업 때 전달" />
          </label>
          <label className="examPostUploadBox">
            시험지 사진/PDF
            <input
              accept="image/*,application/pdf"
              capture="environment"
              multiple
              onChange={(event) => updateFiles(event.target.files)}
              type="file"
            />
            <span>{selectedFiles.length ? selectedFiles.map((file) => file.name).join(", ") : "사진을 찍거나 파일을 선택하세요."}</span>
          </label>
          {uploadStatus ? <small className="examPostUploadStatus">{uploadStatus}</small> : null}
          <button className="primaryButton" type="submit">시험 후 제출</button>
        </form>
      )}
    </section>
  );
}

function StudentLessonHistoryCalendar({ homeworks = [], lessons = [], recordsWithLessons = [], selectedStudent }) {
  const recordsByDate = recordsWithLessons.reduce((map, record) => {
    const date = record.lesson?.date;
    if (!date) return map;
    map.set(date, [...(map.get(date) ?? []), record]);
    return map;
  }, new Map());
  const initialDate = recordsWithLessons[0]?.lesson?.date ?? today;
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const selectedRecords = recordsByDate.get(selectedDate) ?? [];
  const selectedRecord = selectedRecords[0] ?? null;
  const selectedLesson = selectedRecord?.lesson ?? null;
  const lessonMaterial = selectedRecord ? getLessonMaterial(selectedRecord, selectedStudent) : "";
  const lessonContent = selectedRecord ? getLessonContent(selectedRecord) : "";
  const previousHomework =
    selectedRecord && selectedLesson && selectedStudent
      ? getLessonHomework(homeworks, selectedLesson, selectedStudent, "previous", lessons)
      : null;
  const nextHomework =
    selectedRecord && selectedLesson && selectedStudent
      ? getLessonHomework(homeworks, selectedLesson, selectedStudent, "next", lessons)
      : null;
  const previousHomeworkText = previousHomework?.title || selectedRecord?.previousHomework || "";
  const nextHomeworkText = nextHomework?.title || selectedRecord?.nextHomework || "";
  const selectedAttendanceDisplay = getAttendanceDisplay(selectedRecord ?? {}, selectedLesson);
  const calendarDays = buildMonthDays(today);

  useEffect(() => {
    if (!recordsByDate.has(selectedDate) && initialDate) setSelectedDate(initialDate);
  }, [initialDate, recordsByDate, selectedDate]);

  return (
    <section className="studentLessonHistory">
      <div className="sectionHeader compact">
        <div>
          <h2>수업 기록 캘린더</h2>
          <p className="muted">날짜를 눌러 그날 수업에서 무엇을 했는지 확인합니다.</p>
        </div>
      </div>
      <div className="studentLessonHistoryGrid">
        <div className="studentLessonMiniCalendar">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => <b key={day}>{day}</b>)}
          {calendarDays.map((day) => {
            const hasRecord = recordsByDate.has(day.date);
            return (
              <button
                className={[
                  day.inMonth ? "" : "outside",
                  hasRecord ? "hasRecord" : "",
                  selectedDate === day.date ? "selected" : ""
                ].join(" ")}
                disabled={!hasRecord}
                key={day.date}
                onClick={() => setSelectedDate(day.date)}
                type="button"
              >
                <span>{Number(day.date.slice(-2))}</span>
              </button>
            );
          })}
        </div>
        <article className="studentLessonRecordCard">
          {selectedRecord ? (
            <>
              <div>
                <strong>{selectedRecord.lesson.date} · {selectedRecord.lesson.className}</strong>
                <span>{selectedRecord.lesson.startTime}-{selectedRecord.lesson.endTime}</span>
              </div>
              <dl>
                <div>
                  <dt>출결</dt>
                  <dd>
                    {selectedAttendanceDisplay.label}
                    {selectedAttendanceDisplay.detail ? ` · ${selectedAttendanceDisplay.detail}` : ""}
                  </dd>
                </div>
                <div><dt>강의 교재</dt><dd>{lessonMaterial || "기록 전"}</dd></div>
                <div><dt>강의 내용</dt><dd>{lessonContent || "기록 전"}</dd></div>
                <div><dt>지난 숙제</dt><dd>{previousHomeworkText || "기록 전"}</dd></div>
                <div><dt>다음 숙제</dt><dd>{nextHomeworkText || "기록 전"}</dd></div>
                <div><dt>과제 상태</dt><dd>{assignmentStatusLabels[normalizeAssignmentStatusValue(selectedRecord.assignmentStatus)] ?? selectedRecord.incompleteHomework ?? "선택 전"}</dd></div>
                {selectedRecord.studentComment?.trim() ? (
                  <div><dt>선생님 코멘트</dt><dd>{selectedRecord.studentComment}</dd></div>
                ) : null}
                {selectedRecord.prepStudentVisible && selectedRecord.prepStudentNotice?.trim() ? (
                  <div><dt>준비 메모</dt><dd>{selectedRecord.prepStudentNotice}</dd></div>
                ) : null}
              </dl>
            </>
          ) : (
            <div className="emptyHomeworkBox">아직 확인할 수업 기록이 없습니다.</div>
          )}
        </article>
      </div>
    </section>
  );
}

function ParentPortal({ homeworks, lessons = [], materials = [], records = [], reportSnapshots, sessionStudentId, students, onLogout }) {
  const [activeTab, setActiveTab] = useState("reports");
  const student = students.find((item) => item.studentId === sessionStudentId) ?? students[0];
  const studentHomeworks = homeworks.filter((homework) => homework.studentId === student?.studentId);
  const studentReports = reportSnapshots.filter((snapshot) => snapshot.studentId === student?.studentId);
  const overdueHomeworks = studentHomeworks.filter((homework) => isHomeworkOverdue(homework));
  const parentPrepNotices = records
    .filter((record) => record.studentId === student?.studentId && record.prepParentVisible && record.prepParentNotice?.trim())
    .map((record) => ({ ...record, lesson: lessons.find((lesson) => lesson.lessonId === record.lessonId) }))
    .sort((a, b) => String(b.lesson?.date ?? "").localeCompare(String(a.lesson?.date ?? "")));
  const parentMaterials = filterVisibleMaterials(materials, student, "parent");

  return (
    <section className="studentPortal parentPortal parentPortalMobileFirst">
      <header className="portalHeader">
        <div>
          <h1>{academyBrandName} <span>학부모</span></h1>
          <p>{student?.name} 학부모님</p>
        </div>
        <div className="portalActions">
          <span className="portalDate">달력 {today}</span>
          <button className="logoutButton" onClick={onLogout} type="button">로그아웃</button>
        </div>
      </header>

      <section className="panel studentWorkPanel">
        <div className="portalTabs parentTabs">
          {[
            ["alerts", "알림"],
            ["reports", "보고서"],
            ["homework", "숙제"],
            ["materials", "자료함"],
            ["attendance", "출결"],
            ["curriculum", "커리큘럼"]
          ].map(([id, label]) => (
            <button className={activeTab === id ? "active" : ""} key={id} onClick={() => setActiveTab(id)} type="button">
              {label}
            </button>
          ))}
        </div>

        {activeTab === "alerts" ? (
          <div className="portalNoticeStack">
            {parentPrepNotices.length === 0 ? <div className="emptyPortalPanel">아직 새 알림이 없습니다.</div> : null}
            {parentPrepNotices.map((notice) => (
              <article className="portalNoticeCard" key={`parent_prep_${notice.lessonStudentRecordId}`}>
                <strong>{notice.lesson?.date ?? "수업"} · {notice.lesson?.className ?? "수업 준비"}</strong>
                <p>{notice.prepParentNotice}</p>
              </article>
            ))}
          </div>
        ) : null}

        {activeTab === "reports" ? (
          <div className="homeworkStack">
            {studentReports.length === 0 ? (
              <div className="emptyPortalPanel">아직 발송된 보고서가 없습니다. 수업 후 선생님이 보고서를 발송하면 여기에 표시됩니다.</div>
            ) : null}
            {studentReports.map((report) => (
              <article className="snapshotCard" key={report.reportId}>
                <strong>{report.title}</strong>
                <p>{report.body}</p>
              </article>
            ))}
          </div>
        ) : null}

        {activeTab === "homework" ? (
          <div className="studentAllPanel">
            <div>
              <h2>숙제 현황</h2>
              <p className="muted">학부모 화면은 열람 전용입니다. 숙제 수정과 삭제는 선생님 화면에서만 가능합니다.</p>
            </div>
            {studentHomeworks.length === 0 ? <div className="emptyPortalPanel">등록된 숙제가 없습니다.</div> : null}
            {studentHomeworks.map((homework) => (
              <article className="studentHomeworkCard" key={homework.homeworkId}>
                <div className="homeworkCardTop">
                  <div>
                    <strong>{homework.title}</strong>
                    <span>{homework.subject ?? "공통수학1"}</span>
                    <span className={isHomeworkOverdue(homework) ? "statusRed" : "statusBlue"}>
                      {isHomeworkOverdue(homework) ? "밀림" : "진행"}
                    </span>
                  </div>
                  <strong className={`homeworkStatusBadge ${getHomeworkStatusTone(homework, records)}`}>
                    {getHomeworkStatusLabel(homework, records)}
                  </strong>
                </div>
                <p>{homework.assignedDate} ~ {homework.dueDate}</p>
              </article>
            ))}
            {overdueHomeworks.length ? <div className="warningBand">밀린 숙제 {overdueHomeworks.length}개가 있습니다.</div> : null}
          </div>
        ) : null}

        {activeTab === "materials" ? <PortalMaterialsTab materials={parentMaterials} emptyMessage="아직 공개된 자료가 없습니다." /> : null}

        {activeTab === "attendance" ? (
          <div className="emptyPortalPanel">출결앱 연동 전입니다. 추후 등하원 시간이 표시됩니다.</div>
        ) : null}

        {activeTab === "curriculum" ? (
          <div className="emptyPortalPanel">아직 커리큘럼이 설정되지 않았습니다.</div>
        ) : null}
      </section>
    </section>
  );
}

function StudentAllHomeworkTab({ homeworks, records = [] }) {
  const sortedHomeworks = [...homeworks].sort((a, b) => b.assignedDate.localeCompare(a.assignedDate));

  return (
    <div className="studentAllPanel">
      <div>
        <h2>등록된 숙제 전체</h2>
        <p className="muted">선생님이 등록한 숙제를 확인합니다. 수정과 삭제는 선생님 화면에서만 가능합니다.</p>
      </div>
      {sortedHomeworks.length === 0 ? <div className="emptyHomeworkBox">등록된 숙제가 없습니다.</div> : null}
      {sortedHomeworks.map((homework) => {
        const completed = isHomeworkCompletedForStudent(homework) ? 1 : 0;
        const totalDays = Math.max(1, isHomeworkOverdue(homework) ? 5 : 2);
        const progress = Math.round((completed / totalDays) * 100);
        return (
          <article className="studentHomeworkCard" key={homework.homeworkId}>
            <div className="homeworkCardTop">
              <div>
                <strong>{homework.title}</strong>
                <span>{homework.subject ?? "공통수학1"}</span>
                <span className={isHomeworkOverdue(homework) ? "statusRed" : "statusBlue"}>
                  {isHomeworkOverdue(homework) ? "밀림" : "현행"}
                </span>
              </div>
            </div>
            <p>{homework.assignedDate} ~ {homework.dueDate} · 총 {homework.totalProblems ?? "-"}문제</p>
            <div className={`homeworkStatusBadge ${getHomeworkStatusTone(homework, records)}`}>
              {getHomeworkStatusLabel(homework, records)}
            </div>
            <div className="progressRail"><span style={{ width: `${progress}%` }} /></div>
            <small>{completed}/{totalDays}일 완료 ({progress}%)</small>
            <div className={`dateStrip ${isHomeworkOverdue(homework) ? "danger" : "safe"}`}>
              <span>{homework.dueDate}</span>
              <b>{getHomeworkStatusLabel(homework, records)}</b>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function StudentEmptyTab({ message }) {
  return <div className="emptyPortalPanel">{message}</div>;
}

function filterVisibleMaterials(materials = [], student, audience) {
  if (!student) return [];
  return materials.filter((material) => {
    const visibility = material.visibility ?? "student";
    const audienceAllowed =
      visibility === "both" ||
      (audience === "student" && visibility === "student") ||
      (audience === "parent" && visibility === "parent");
    const studentAllowed =
      !material.studentIds?.length ||
      material.studentIds.includes(student.studentId) ||
      (material.classTemplateId && material.classTemplateId === student.defaultClassTemplateId);

    return audienceAllowed && studentAllowed;
  });
}

function PortalMaterialsTab({ emptyMessage, materials = [] }) {
  return (
    <div className="portalMaterialsList">
      {materials.length === 0 ? <div className="emptyPortalPanel">{emptyMessage}</div> : null}
      {materials.map((material) => (
        <article className="portalMaterialCard" key={material.materialId}>
          <div>
            <strong>{material.title}</strong>
            <span>{material.description || "자료 설명 없음"}</span>
            <small>{material.fileName || material.fileUrl || "파일/링크 미입력"}</small>
          </div>
          {material.fileUrl ? (
            <a className="softButton" href={material.fileUrl} rel="noreferrer" target="_blank">열기</a>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function StudentEvaluationTab() {
  return (
    <div className="evaluationPanel">
      <strong>진단평가</strong>
      <strong>내신기출 모의평가</strong>
      <div className="emptyPortalPanel">배정된 시험이 없습니다.</div>
    </div>
  );
}

function StudentMyPageTab({
  attendanceStats = calculateAttendanceStats([]),
  myPageTab,
  onChangeTab,
  scoreRecords = [],
  selectedStudent,
  stats,
  studentLessonComments = []
}) {
  const [statsTab, setStatsTab] = useState("homework");
  const schoolScoreSubjects = ["중1-1", "중2-1", "중3-1", "중3-2", "공통수학1", "공통수학2", "대수", "미적분1", "기하", "미적분", "확통"];

  function findScore(subject, examKeyword) {
    return scoreRecords.find((record) => {
      const target = `${record.subject ?? ""} ${record.examType ?? ""} ${record.note ?? ""}`;
      return target.includes(subject) && target.includes(examKeyword);
    });
  }

  return (
    <div className="myPagePanel">
      <div className="subTabs">
        {[
          ["stats", "통계"],
          ["log", "활동 로그"],
          ["info", "내 정보"]
        ].map(([id, label]) => (
          <button className={myPageTab === id ? "active" : ""} key={id} onClick={() => onChangeTab(id)} type="button">
            {label}
          </button>
        ))}
      </div>

      {myPageTab === "stats" ? (
        <>
          <div className="subTabs compactSubTabs">
            {[
              ["homework", "숙제통계"],
              ["attendance", "출결통계"]
            ].map(([id, label]) => (
              <button className={statsTab === id ? "active" : ""} key={id} onClick={() => setStatsTab(id)} type="button">
                {label}
              </button>
            ))}
          </div>
          {statsTab === "homework" ? (
            <>
              <div className="miniMetricGrid">
                <div><strong>{stats.completionRate}%</strong><span>전체 이행률</span></div>
                <div><strong>{stats.perfectDays}</strong><span>완벽한 날 (30일)</span></div>
                <div><strong>{stats.total}</strong><span>등록 숙제</span></div>
              </div>
              <div className="progressList">
                <h3>숙제 이행률</h3>
                <ProgressLine label="2026년 06월" value={stats.completionRate} suffix={`${formatHomeworkDoneCount(stats.done)}/${stats.total}개 · ${stats.completionRate}%`} />
              </div>
              <StudentCalendar
                title="숙제 이행 달력"
                legend={[
                  ["done", "이행"],
                  ["missed", "미이행"]
                ]}
                markedDays={stats.calendarDays}
              />
            </>
          ) : null}
          {statsTab === "attendance" ? (
            <>
              <div className="attendanceMetricGrid">
                <div className="present"><strong>{attendanceStats.present}</strong><span>등원</span></div>
                <div className="late"><strong>{attendanceStats.late}</strong><span>지각</span></div>
                <div className="absent"><strong>{attendanceStats.absent}</strong><span>결석</span></div>
                <div className="unexcused"><strong>{attendanceStats.unexcused}</strong><span>무단결석</span></div>
              </div>
              <div className="progressList">
                <div className="attendanceRateBox">
                  <strong>{attendanceStats.total ? `${attendanceStats.attendanceRate}%` : "-"}</strong>
                  <span>등원률 (등원 + 지각)</span>
                </div>
                <ProgressLine label="등원" value={attendanceStats.presentRate} suffix={`${attendanceStats.present}회 · ${attendanceStats.presentRate}%`} />
                <ProgressLine label="지각" value={attendanceStats.lateRate} suffix={`${attendanceStats.late}회 · ${attendanceStats.lateRate}%`} />
                <ProgressLine label="결석" value={attendanceStats.absentRate} suffix={`${attendanceStats.absent}회 · ${attendanceStats.absentRate}%`} />
                <ProgressLine label="무단결석" value={attendanceStats.unexcusedRate} suffix={`${attendanceStats.unexcused}회 · ${attendanceStats.unexcusedRate}%`} />
              </div>
              <StudentCalendar
                title={`${selectedStudent?.name ?? "학생"} · 출결 달력`}
                legend={[
                  ["present", "등원"],
                  ["late", "지각"],
                  ["absent", "결석"],
                  ["unexcused", "무단"]
                ]}
                markedDays={attendanceStats.calendarDays}
              />
            </>
          ) : null}
        </>
      ) : null}

      {myPageTab === "log" ? (
        <div className="taskStack">
          {studentLessonComments.length === 0 ? (
            <div className="emptyPortalPanel">아직 선생님이 보낸 학생 코멘트가 없습니다.</div>
          ) : (
            studentLessonComments.map((record) => (
              <article className="studentHomeworkCard" key={record.lessonStudentRecordId}>
                <div className="homeworkCardTop">
                  <div>
                    <strong>{record.lesson?.date ?? "날짜 없음"} 선생님 코멘트</strong>
                    <span>{record.lesson?.className ?? "수업"} · {record.studentCommentSendStatus}</span>
                  </div>
                </div>
                <p>{record.studentComment}</p>
              </article>
            ))
          )}
        </div>
      ) : null}

      {myPageTab === "info" ? (
        <>
          <div className="profileCard">
            <h2>기본 정보</h2>
            <div className="fieldGrid four">
              <label>이름<input readOnly value={selectedStudent?.name ?? ""} /></label>
              <label>학교<input readOnly value={selectedStudent?.schoolName ?? ""} /></label>
              <label>출생연도<input readOnly value={selectedStudent?.birthYear ?? ""} /></label>
              <label>학년<input readOnly value={selectedStudent?.grade ?? ""} /></label>
            </div>
          </div>
          <div className="profileCard">
            <h2>학교 성적</h2>
            <div className="studentGradeTableWrap">
              <table className="gradeTable studentGradeTable">
                <thead>
                  <tr>
                    <th rowSpan="2">과목</th>
                    <th colSpan="3">중간</th>
                    <th colSpan="3">기말</th>
                  </tr>
                  <tr>
                    <th>원점수</th>
                    <th>등수</th>
                    <th>등급</th>
                    <th>원점수</th>
                    <th>등수</th>
                    <th>등급</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolScoreSubjects.map((subject) => {
                    const midterm = findScore(subject, "중간");
                    const finalTerm = findScore(subject, "기말");
                    return (
                      <tr key={subject}>
                        <td>{subject}</td>
                        <td>{midterm?.score || "-"}</td>
                        <td>{midterm?.rank || "-"}</td>
                        <td>{midterm?.grade || "-"}</td>
                        <td>{finalTerm?.score || "-"}</td>
                        <td>{finalTerm?.rank || "-"}</td>
                        <td>{finalTerm?.grade || "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="profileCard passwordPanel">
            <h2>비밀번호 변경</h2>
            <div className="fieldGrid three">
              <label>현재 비밀번호<input type="password" placeholder="현재 PIN" /></label>
              <label>새 비밀번호<input type="password" placeholder="4자리 이상" /></label>
              <label>새 비밀번호 확인<input type="password" placeholder="다시 입력" /></label>
            </div>
            <button className="primaryButton" type="button">비밀번호 변경</button>
          </div>
        </>
      ) : null}
    </div>
  );
}

function ProgressLine({ label, suffix, value }) {
  return (
    <div className="progressLine">
      <div><strong>{label}</strong><span>{suffix}</span></div>
      <div className="progressRail"><span style={{ width: `${value}%` }} /></div>
    </div>
  );
}

function StudentCalendar({ legend = [], markedDays = {}, title = "숙제 이행 달력" }) {
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <div className="studentCalendar">
      <h3>{title}</h3>
      <strong>2026년 6월</strong>
      <div className="miniCalendarGrid">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => <b key={day}>{day}</b>)}
        {days.map((day) => {
          const dayState = markedDays[day] ?? "";
          return <span className={dayState ? `marked ${dayState}` : ""} key={day}>{day}</span>;
        })}
      </div>
      {legend.length ? (
        <div className="calendarLegend">
          {legend.map(([state, label]) => (
            <span key={state}><i className={state} />{label}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function HomeworkActionCard({ homework, records = [], onStudentCheckHomework }) {
  const isChecked = isHomeworkCompletedForStudent(homework);
  return (
    <article className="homeworkActionCard">
      <div>
        <strong>{homework.title}</strong>
        <p>{homework.assignedDate} → {homework.dueDate}</p>
        <small>{isChecked ? "완료 처리됨" : "완료 전"}</small>
        <span className={`homeworkStatusBadge ${getHomeworkStatusTone(homework, records)}`}>
          {getHomeworkStatusLabel(homework, records)}
        </span>
      </div>
      <button
        className={isChecked ? "softButton" : "primaryButton"}
        disabled={isChecked}
        onClick={() => onStudentCheckHomework(homework.homeworkId)}
        type="button"
      >
        {isChecked ? "완료 체크됨" : "완료 체크"}
      </button>
    </article>
  );
}

function SupplementCenter({
  homeworks,
  lessons,
  records,
  students,
  tasks,
  onCreateTask,
  onPassTask,
  onScheduleTask,
  onUndoPassTask,
  onUpdateTask
}) {
  const [selectedSupplementStudentId, setSelectedSupplementStudentId] = useState("");
  const [activeSupplementTab, setActiveSupplementTab] = useState("homework_makeup");
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [historyQuery, setHistoryQuery] = useState("");
  const [passConfirmTask, setPassConfirmTask] = useState(null);
  const makeupHomeworks = homeworks.filter((homework) => isHomeworkMakeupCandidate(homework, records, lessons)).slice(0, 8);
  const absentRecords = records
    .filter((record) => record.attendanceStatus === "absent" || record.attendanceStatus === "excused")
    .slice(0, 8);
  const retestRecords = records
    .filter((record) => record.needsRetest)
    .slice(0, 8);

  function studentName(studentId) {
    return students.find((student) => student.studentId === studentId)?.name ?? "미등록 학생";
  }

  function lessonLabel(lessonId) {
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    return lesson ? `${lesson.date} ${lesson.className}` : "연결 수업 없음";
  }

  function createSupplementTask(task) {
    onCreateTask(task);
    setActiveSupplementTab(task.taskType);
    setSelectedSupplementStudentId(task.studentId);
  }

  function findTaskForCandidate(candidateTask) {
    return tasks.find(
      (task) =>
        task.studentId === candidateTask.studentId &&
        task.sourceId === candidateTask.sourceId &&
        task.taskType === candidateTask.taskType
    );
  }

  function openPassConfirm(existingTask, item) {
    const task = existingTask ?? item.task;
    setPassConfirmTask({
      ...task,
      studentId: item.studentId,
      sourceLabel: task.sourceLabel || item.title
    });
  }

  function confirmPassTask() {
    if (!passConfirmTask) return;
    onPassTask(passConfirmTask);
    setPassConfirmTask(null);
  }

  const selectedSupplementStudent = students.find((student) => student.studentId === selectedSupplementStudentId);
  const selectedSupplementTasks = tasks.filter(
    (task) => task.studentId === selectedSupplementStudentId && task.taskType === activeSupplementTab
  );
  const supplementTabDefinitions = [
    {
      id: "homework_makeup",
      title: "숙제보충",
      subtitle: "미완료 숙제를 보충 과제로 전환합니다.",
      count: makeupHomeworks.length,
      emptyText: "미완료 숙제가 없습니다.",
      items: makeupHomeworks.map((homework) => ({
        id: homework.homeworkId,
        studentId: homework.studentId,
        title: homework.title,
        meta: `${homework.dueDate || homework.assignedDate || "-"} 기준 · ${getHomeworkMakeupReason(homework, records)}`,
        actionLabel: "보충 생성",
        task: {
          taskType: "homework_makeup",
          studentId: homework.studentId,
          sourceId: homework.homeworkId,
          sourceLabel: homework.title,
          supplementHomeworkNote: homework.title,
          reason: getHomeworkMakeupReason(homework, records),
          supplementMethod: "stay_after"
        }
      }))
    },
    {
      id: "absence_makeup",
      title: "결석보강",
      subtitle: "결석 기록을 보강 일정으로 전환합니다.",
      count: absentRecords.length,
      emptyText: "결석 보강이 없습니다.",
      items: absentRecords.map((record) => ({
        id: record.lessonStudentRecordId,
        studentId: record.studentId,
        title: lessonLabel(record.lessonId),
        meta: `${attendanceLabels[record.attendanceStatus]} · ${record.attendanceReason || "사유 미입력"}`,
        actionLabel: "보강 생성",
        task: {
          taskType: "absence_makeup",
          studentId: record.studentId,
          sourceId: record.lessonStudentRecordId,
          sourceLabel: lessonLabel(record.lessonId),
          reason: "결석 보강",
          absenceReason: record.attendanceReason || "사유 미입력",
          supplementMethod: "onsite_makeup"
        }
      }))
    },
    {
      id: "retest",
      title: "재시험",
      subtitle: "오답/평가 기준으로 재시험 일정을 잡습니다.",
      count: retestRecords.length,
      emptyText: "재시험이 없습니다.",
      items: retestRecords.map((record) => ({
        id: record.lessonStudentRecordId,
        studentId: record.studentId,
        title: lessonLabel(record.lessonId),
        meta: "재시험 필요",
        actionLabel: "재시험 생성",
        task: {
          taskType: "retest",
          studentId: record.studentId,
          sourceId: record.lessonStudentRecordId,
          sourceLabel: lessonLabel(record.lessonId),
          reason: "재시험 필요"
        }
      }))
    }
  ];
  const supplementTabs = supplementTabDefinitions.map((tab) => {
    const items = tab.items.filter((item) => findTaskForCandidate(item.task)?.status !== "done");
    return { ...tab, count: items.length, items };
  });
  const activeTabData = supplementTabs.find((tab) => tab.id === activeSupplementTab) ?? supplementTabs[0];
  const historyCutoffDate = addDaysInKorea(today, -30);
  const recentSupplementTasks = tasks
    .filter((task) => {
      const baseDate = String(task.completedAt || task.passedAt || task.lastScheduledAt || task.touchedAt || task.scheduledDate || task.createdAt || "").slice(0, 10);
      return baseDate >= historyCutoffDate;
    })
    .sort((a, b) =>
      String(b.completedAt || b.passedAt || b.lastScheduledAt || b.touchedAt || b.scheduledDate || b.createdAt || "")
        .localeCompare(String(a.completedAt || a.passedAt || a.lastScheduledAt || a.touchedAt || a.scheduledDate || a.createdAt || ""))
    );

  return (
    <section className="followUpPage">
      <div className="pageTop">
        <div>
          <h1>보충관리</h1>
          <p className="muted">숙제보충, 결석보강, 재시험을 별도로 관리합니다.</p>
        </div>
        <button className="primaryButton compact" onClick={() => setIsHistoryModalOpen(true)} type="button">
          최근 한 달 보충 내역
        </button>
      </div>

      <div className="supplementOverviewGrid">
        {supplementTabs.map((tab) => (
          <button
            className={activeSupplementTab === tab.id ? "supplementMetric active" : "supplementMetric"}
            key={tab.id}
            onClick={() => setActiveSupplementTab(tab.id)}
            type="button"
          >
            <span>{tab.title}</span>
            <strong>{tab.count}건</strong>
            <small>{tab.subtitle}</small>
          </button>
        ))}
      </div>

      <section className="supplementTabPanel">
        <div className="sectionHeader slim">
          <div>
            <h2>{activeTabData.title}</h2>
            <p className="muted">{activeTabData.subtitle}</p>
          </div>
          <span className="countBadge">{activeTabData.count}건</span>
        </div>

        {activeTabData.items.length === 0 ? <div className="emptyHomeworkBox">{activeTabData.emptyText}</div> : null}

        <div className="supplementItemList">
          {activeTabData.items.map((item) => {
            const existingTask = findTaskForCandidate(item.task);
            const taskProgress = getSupplementTaskProgress(existingTask, lessons);
            return (
              <article className="candidateItem supplementRowItem" key={item.id}>
                <div>
                  <button className="textLinkButton" onClick={() => setSelectedSupplementStudentId(item.studentId)} type="button">
                    {studentName(item.studentId)}
                  </button>
                  <span>{item.title}</span>
                  <small>{item.meta}</small>
                  {existingTask ? (
                    <span className={`supplementProgressBadge ${taskProgress.tone}`}>
                      {taskProgress.label}
                      {taskProgress.detail ? <b>{taskProgress.detail}</b> : null}
                    </span>
                  ) : null}
                  {existingTask?.supplementProgressMemo?.trim() ? (
                    <small className="supplementMemoPreview">메모: {existingTask.supplementProgressMemo}</small>
                  ) : null}
                </div>
                <button
                  className={existingTask ? "softButton subtle" : "softButton"}
                  onClick={() => (existingTask ? setSelectedSupplementStudentId(item.studentId) : createSupplementTask(item.task))}
                  type="button"
                >
                  {existingTask ? "보충 메모" : item.actionLabel}
                </button>
                <button
                  className="passButton"
                  onClick={() => openPassConfirm(existingTask, item)}
                  type="button"
                >
                  보충 완료 처리
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {selectedSupplementStudent ? (
        <SupplementStudentModal
          onClose={() => setSelectedSupplementStudentId("")}
          onPassTask={onPassTask}
          onScheduleTask={onScheduleTask}
          onUpdateTask={onUpdateTask}
          student={selectedSupplementStudent}
          tabTitle={activeTabData.title}
          tasks={selectedSupplementTasks}
        />
      ) : null}
      {isHistoryModalOpen ? (
        <SupplementHistoryModal
          onChangeQuery={setHistoryQuery}
          onClose={() => setIsHistoryModalOpen(false)}
          onUndoPassTask={onUndoPassTask}
          query={historyQuery}
          students={students}
          tasks={recentSupplementTasks}
        />
      ) : null}
      {passConfirmTask ? (
        <SupplementPassConfirmModal
          onCancel={() => setPassConfirmTask(null)}
          onConfirm={confirmPassTask}
          studentName={studentName(passConfirmTask.studentId)}
          task={passConfirmTask}
        />
      ) : null}
    </section>
  );
}

function SupplementPassConfirmModal({ onCancel, onConfirm, studentName, task }) {
  const targetLabel = task.taskType === "homework_makeup"
    ? task.supplementHomeworkNote || task.sourceLabel || task.reason || "보충 항목"
    : task.sourceLabel || task.reason || "보충 항목";
  return (
    <Modal
      className="supplementPassConfirmModal"
      title="보충 완료 처리 확인"
      subtitle="완료 처리하면 보충관리 후보에서 제외되고, 최근 보충내역에서 다시 복귀할 수 있습니다."
      onClose={onCancel}
    >
      <div className="supplementPassConfirmBody">
        <p>
          <strong>{studentName}</strong> 학생의 보충 항목을 완료 처리할까요?
        </p>
        <dl className="supplementPassConfirmSummary">
          <div>
            <dt>구분</dt>
            <dd>{followUpTypeLabel(task.taskType)}</dd>
          </div>
          <div>
            <dt>항목</dt>
            <dd>{targetLabel}</dd>
          </div>
          <div>
            <dt>일정</dt>
            <dd>{task.scheduledDate || "미확정"} {task.scheduledTime || ""}</dd>
          </div>
        </dl>
      </div>
      <div className="modalActions confirmActions">
        <button className="softButton" onClick={onCancel} type="button">
          취소
        </button>
        <button className="passButton" onClick={onConfirm} type="button">
          보충 완료 처리
        </button>
      </div>
    </Modal>
  );
}

function SupplementStudentModal({
  onClose,
  onPassTask,
  onScheduleTask,
  onUpdateTask,
  student,
  tabTitle,
  tasks
}) {
  const [feedback, setFeedback] = useState(null);
  const [passConfirmTask, setPassConfirmTask] = useState(null);

  function showFeedback(title, message) {
    setFeedback({ title, message });
  }

  function handleSaveTask(task) {
    const draft = createNotificationDraft(task, [student]);
    const taskWithDraft = { ...task, notificationDraft: draft };
    onUpdateTask(task.makeupTaskId, "notificationDraft", draft);

    if (task.scheduledDate && task.scheduledTime) {
      onScheduleTask(taskWithDraft);
      showFeedback(
        task.linkedLessonId ? "보충 내용 저장 및 일정 수정 완료" : "보충 내용 저장 및 일정 반영 완료",
        `${task.scheduledDate} ${task.scheduledTime} 보충 일정과 알림톡 초안이 함께 반영되었습니다.`
      );
      return;
    }

    showFeedback("보충 내용만 저장 완료", "알림톡 초안은 갱신되었습니다. 배정일과 시간을 입력하면 수업일지 일정에도 함께 반영할 수 있습니다.");
  }

  function handlePassTask(task) {
    onPassTask(task);
    showFeedback("보충 완료 처리 완료", `${student.name} 학생의 보충 항목을 완료 처리했습니다.`);
  }

  function confirmPassTask() {
    if (!passConfirmTask) return;
    handlePassTask(passConfirmTask);
    setPassConfirmTask(null);
  }

  return (
    <Modal
      className="supplementStudentModal"
      title={`${student.name} ${tabTitle}`}
      subtitle={`${student.grade ?? "-"} · ${student.schoolName ?? "학교 미입력"}`}
      onClose={onClose}
    >
      {feedback ? (
        <div className="supplementFeedbackPopup" role="status" aria-live="polite">
          <div>
            <strong>{feedback.title}</strong>
            <p>{feedback.message}</p>
          </div>
          <button className="iconButton" onClick={() => setFeedback(null)} type="button">×</button>
        </div>
      ) : null}
      <div className="supplementModalLayout single">
        <section className="supplementModalMain">
          <div className="sectionHeader slim">
            <div>
              <h2>진행 항목</h2>
              <p className="muted">학생별 보충 일정과 문구 초안을 이 화면에서 관리합니다.</p>
            </div>
            <span className="countBadge">{tasks.length}개</span>
          </div>

          {tasks.length === 0 ? (
            <div className="emptyHomeworkBox">아직 생성된 보충관리 항목이 없습니다.</div>
          ) : null}

          <div className="taskStack">
            {tasks.map((task) => {
              const freshDraft = createNotificationDraft(task, [student]);
              const visibleDraft = task.notificationDraft || freshDraft;
              const supplementHomeworkNote = task.supplementHomeworkNote ?? task.sourceLabel ?? "";
              const supplementMemo = task.supplementProgressMemo ?? "";
              return (
                <article className="taskCard" key={task.makeupTaskId}>
                  <div className="taskCardTop">
                    <div>
                      <strong>{followUpTypeLabel(task.taskType)}</strong>
                      <p>{task.taskType === "homework_makeup" ? supplementHomeworkNote : task.sourceLabel}</p>
                      <small>{task.reason} · {supplementMethodLabel(task)} · 배정 {task.attemptCount ?? 0}회</small>
                      {task.notificationDraft?.trim() ? (
                        <span className="taskLinkedLesson draftReady">
                          알림톡 초안 반영 완료
                        </span>
                      ) : null}
                      {task.taskType === "absence_makeup" ? (
                        <small className="taskReasonLine">결석사유: {task.absenceReason || "사유 미입력"}</small>
                      ) : null}
                      {task.lastHomeworkId ? <small>최근 보충 숙제: {task.lastHomeworkId}</small> : null}
                      {task.linkedLessonId ? (
                        <span className="taskLinkedLesson">
                          수업일지 반영 완료
                          <b>{task.linkedLessonDate} {task.linkedLessonTime}</b>
                        </span>
                      ) : null}
                    </div>
                    <div className="taskStatusControl">
                      <span>진행 상태</span>
                      <div className="taskStepControl">
                        {supplementStatusSteps.map((step) => (
                          <button
                            className={task.status === step.id ? "active" : ""}
                            key={step.id}
                            onClick={() => onUpdateTask(task.makeupTaskId, "status", step.id)}
                            type="button"
                          >
                            {step.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="supplementReadableGrid">
                    {task.taskType === "homework_makeup" ? (
                    <label className="supplementHomeworkField supplementReadableField">
                      <strong>보충할 숙제 내역</strong>
                      <span>보충일지와 알림톡 문구에 반영되는 핵심 내용입니다.</span>
                      <textarea
                        value={supplementHomeworkNote}
                        onChange={(event) => onUpdateTask(task.makeupTaskId, "supplementHomeworkNote", event.target.value)}
                        placeholder="예: 교과서 프린트, 지난 시간 미완료 숙제"
                      />
                    </label>
                    ) : null}
                  <label className="supplementMemoField supplementReadableField">
                    <strong>보충 메모</strong>
                    <span>진행한 내용, 남은 문항, 다음 확인 사항을 남깁니다.</span>
                    <textarea
                      value={supplementMemo}
                      onChange={(event) => onUpdateTask(task.makeupTaskId, "supplementProgressMemo", event.target.value)}
                      placeholder="예: 오답 30문제 중 18번까지 확인, 남은 12문제는 다음 보충 때 마무리"
                    />
                  </label>
                    </div>
                  <div className="supplementSchedulePanel">
                    <label className="taskOptionBlock">
                      <strong>보충 방식</strong>
                      <div className="taskChoiceGrid">
                        {supplementMethodOptions(task.taskType).map((option) => (
                          <button
                            className={(task.supplementMethod || supplementDefaultMethod(task.taskType)) === option.id ? "active" : ""}
                            key={option.id}
                            onClick={() => onUpdateTask(task.makeupTaskId, "supplementMethod", option.id)}
                            type="button"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </label>
                    <div className="fieldGrid two supplementDateGrid">
                      <label>
                        <strong>배정일</strong>
                        <input type="date" value={task.scheduledDate} onChange={(event) => onUpdateTask(task.makeupTaskId, "scheduledDate", event.target.value)} />
                      </label>
                      <label>
                        <strong>시간</strong>
                        <input type="time" value={task.scheduledTime} onChange={(event) => onUpdateTask(task.makeupTaskId, "scheduledTime", event.target.value)} />
                      </label>
                    </div>
                  </div>
                  <label className="notificationDraftField supplementReadableField">
                    <strong>알림톡 문구</strong>
                    <span>보충 일정 안내 초안입니다. 실제 발송은 별도 확정 단계에서 진행합니다.</span>
                    <textarea
                      value={visibleDraft}
                      onChange={(event) => onUpdateTask(task.makeupTaskId, "notificationDraft", event.target.value)}
                    />
                  </label>
                  <div className="modalActions">
                    <button className="softButton primarySoft" onClick={() => handleSaveTask(task)} type="button">
                      {task.scheduledDate && task.scheduledTime
                        ? task.linkedLessonId ? "수정 저장하고 일정 반영" : "저장하고 일정 반영"
                        : "내용만 저장"}
                    </button>
                    <button className="passButton" onClick={() => setPassConfirmTask(task)} type="button">
                      보충 완료 처리
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      {passConfirmTask ? (
        <SupplementPassConfirmModal
          onCancel={() => setPassConfirmTask(null)}
          onConfirm={confirmPassTask}
          studentName={student.name}
          task={passConfirmTask}
        />
      ) : null}
    </Modal>
  );
}

function SupplementHistoryModal({ onChangeQuery, onClose, onUndoPassTask, query, students, tasks }) {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredTasks = tasks.filter((task) => {
    const student = students.find((item) => item.studentId === task.studentId);
    const haystack = [
      student?.name,
      student?.schoolName,
      student?.grade,
      followUpTypeLabel(task.taskType),
      task.sourceLabel,
      task.reason,
      supplementMethodLabel(task),
      task.status
    ].join(" ").toLowerCase();
    return !normalizedQuery || haystack.includes(normalizedQuery);
  });

  function statusLabel(task) {
    if (task.status === "done") return "보충 완료";
    if (task.status === "scheduled") return "일정 확정";
    return "진행 중";
  }

  function historyDate(task) {
    return String(task.completedAt || task.passedAt || task.lastScheduledAt || task.touchedAt || task.scheduledDate || task.createdAt || "").slice(0, 10) || "-";
  }

  return (
    <Modal
      className="supplementHistoryModal"
      title="최근 한 달 보충관리 내역"
      subtitle="보충 완료, 일정 확정, 진행 중 항목을 학생별로 확인합니다."
      onClose={onClose}
    >
      <div className="supplementHistoryToolbar">
        <label>
          학생/학교/항목 검색
          <input
            autoFocus
            value={query}
            onChange={(event) => onChangeQuery(event.target.value)}
            placeholder="예: 최선호, 창동고, 숙제보충"
          />
        </label>
        <span className="countBadge">{filteredTasks.length}건</span>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="emptyHomeworkBox">조건에 맞는 보충관리 내역이 없습니다.</div>
      ) : (
        <div className="supplementHistoryList">
          {filteredTasks.map((task) => {
            const student = students.find((item) => item.studentId === task.studentId);
            return (
              <article className="supplementHistoryItem" key={task.makeupTaskId}>
                <div>
                  <strong>{student?.name ?? "미등록 학생"}</strong>
                  <span>{student?.schoolName || "학교 미입력"} · {student?.grade || "-"}</span>
                </div>
                <div>
                  <b>{followUpTypeLabel(task.taskType)}</b>
                  <span>{task.sourceLabel || task.reason || "보충 항목"}</span>
                </div>
                <div>
                  <span>{historyDate(task)}</span>
                  <small>{task.scheduledDate || "-"} {task.scheduledTime || ""}</small>
                </div>
                <span className={`supplementProgressBadge ${task.status === "done" ? "done" : task.status === "scheduled" ? "scheduled" : "draft"}`}>
                  {statusLabel(task)}
                </span>
                <div className="supplementHistoryActions">
                  {task.status === "done" ? (
                    <button className="softButton subtle" onClick={() => onUndoPassTask(task)} type="button">
                      보충관리로 복귀
                    </button>
                  ) : (
                    <span className="historyActionHint">관리 중</span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </Modal>
  );
}

function FollowUpCenter({
  appStateSaveState = "idle",
  homeworks,
  lessons,
  notificationLogs,
  problemBooks,
  records,
  students,
  tasks,
  wrongProblems,
  onAddProblemBook,
  onAddWrongProblem,
  onAssignHomework,
  onCreateTask,
  onLogNotification,
  onUpdateProblemBook,
  onUpdateProblemMeta,
  onUpdateTask,
  onUpdateWrongProblem
}) {
  return (
    <section className="followUpPage">
      <div className="pageTop">
        <div>
          <h1>오답관리</h1>
          <p className="muted">교재 PDF를 원본으로 등록하고, 단원별 문항 상태와 학생별 오답 흐름을 관리합니다.</p>
        </div>
        <div className="followUpTopActions">
          <InlineSaveStatus label="오답관리 자동저장" saveState={appStateSaveState} />
          <span className="countBadge">{tasks.length}개 진행</span>
        </div>
      </div>

      <WrongProblemBoard
        problemBooks={problemBooks}
        students={students}
        wrongProblems={wrongProblems}
        onAddProblemBook={onAddProblemBook}
        onAddWrongProblem={onAddWrongProblem}
        onUpdateProblemBook={onUpdateProblemBook}
        onUpdateProblemMeta={onUpdateProblemMeta}
        onUpdateWrongProblem={onUpdateWrongProblem}
      />
    </section>
  );
}

function WrongProblemBoard({
  problemBooks,
  students,
  wrongProblems,
  onAddProblemBook,
  onAddWrongProblem,
  onUpdateProblemBook,
  onUpdateProblemMeta,
  onUpdateWrongProblem
}) {
  const [activeTab, setActiveTab] = useState("current");
  const [gradeFilter, setGradeFilter] = useState("전체");
  const [selectedStudentId, setSelectedStudentId] = useState(students[0]?.studentId ?? "");
  const [selectedProblemRef, setSelectedProblemRef] = useState(null);
  const [isPickedProblemModalOpen, setIsPickedProblemModalOpen] = useState(false);
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(true);
  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? students[0];
  const filteredBooks = problemBooks.filter((book) => gradeFilter === "전체" || book.grade === gradeFilter);
  const totalProblems = filteredBooks.reduce((sum, book) => sum + (book.problems?.length ?? book.totalProblems ?? 0), 0);
  const pickedProblems = problemBooks.flatMap((book) =>
    (book.problems ?? [])
      .filter((problem) => problem.isPicked || problem.status === "selected")
      .map((problem) => ({ book, problem }))
  );
  const selectedProblem =
    selectedProblemRef
      ? problemBooks
          .find((book) => book.problemBookId === selectedProblemRef.problemBookId)
          ?.problems.find((problem) => problem.problemId === selectedProblemRef.problemId)
      : null;
  const selectedBook = selectedProblemRef
    ? problemBooks.find((book) => book.problemBookId === selectedProblemRef.problemBookId)
    : null;

  const selectedProblemsCount = pickedProblems.length;

  function handleFileUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    onAddProblemBook(file.name);
    event.target.value = "";
  }

  function handleProblemClick(book, problem, event) {
    setSelectedProblemRef({ problemBookId: book.problemBookId, problemId: problem.problemId });
    if (event.ctrlKey || event.metaKey) {
      onUpdateProblemMeta(book.problemBookId, problem.problemId, "isPicked", !problem.isPicked);
      return;
    }

    const currentStatus = problem.status === "selected" ? "first" : problem.status;
    const currentIndex = problemClickCycle.indexOf(currentStatus);
    const nextStatus = problemClickCycle[(currentIndex + 1) % problemClickCycle.length];
    onUpdateProblemMeta(book.problemBookId, problem.problemId, "status", nextStatus);
  }

  return (
    <section className="wrongProblemBoard">
      <div className="wrongBoardTabs">
        {[
          ["current", "현행"],
          ["extra1", "추가1"],
          ["extra2", "추가2"],
          ["bookWrong", "교재별 오답"],
          ["studentWrong", "학생별 오답"]
        ].map(([tab, label]) => (
          <button
            className={activeTab === tab ? "active" : ""}
            key={tab}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="wrongBoardFilterPanel">
        <div className="chipRow">
          {["전체", "고1", "고2", "중1", "중2"].map((grade) => (
            <button
              className={gradeFilter === grade ? "chip active" : "chip"}
              key={grade}
              onClick={() => setGradeFilter(grade)}
              type="button"
            >
              {grade}
            </button>
          ))}
        </div>
        <div className="wrongBoardControls">
          <select value={selectedStudent?.studentId ?? ""} onChange={(event) => setSelectedStudentId(event.target.value)}>
            {students.map((student) => (
              <option key={student.studentId} value={student.studentId}>
                {student.name} ({student.grade})
              </option>
            ))}
          </select>
          <label className="pdfUploadButton">
            PDF 교재 등록
            <input accept="application/pdf,image/*" onChange={handleFileUpload} type="file" />
          </label>
        </div>
        <div className="wrongProblemToolbar">
          <span>연결 교재 {filteredBooks.length}개 · 총 {totalProblems}문제</span>
          <button
            className="softButton"
            disabled={selectedProblemsCount === 0}
            onClick={() => setIsPickedProblemModalOpen(true)}
            type="button"
          >
            수업용 화면 ({selectedProblemsCount})
          </button>
          <button
            className="primaryButton"
            disabled={selectedProblemsCount === 0}
            onClick={() => setIsPickedProblemModalOpen(true)}
            type="button"
          >
            선택 문제 보기 ({selectedProblemsCount})
          </button>
        </div>
      </div>

      <button
        className="wrongBoardDiagnosis"
        onClick={() => setIsDiagnosisOpen((current) => !current)}
        type="button"
      >
        <span>🔍 커리큘럼 진단 | 보드 {filteredBooks.length}개 · 이 학생 연결: {selectedStudent ? 1 : 0}개 · 표시 교재: {filteredBooks.length}개</span>
        <span>{isDiagnosisOpen ? "▲ 접기" : "▼ 펼치기"}</span>
      </button>

      {isDiagnosisOpen ? (
        <div className="wrongBoardNotice">
          <strong>{selectedStudent?.name ?? "학생"} 기준 오답 보드</strong>
          <p>
            {activeTab === "studentWrong"
              ? "학생 프로파일에 있던 교재오답 기록은 이 탭에서 별도로 관리합니다."
              : "PDF 자동 크롭 전 단계에서는 파일명, 단원, 문항 번호, 상태, 풀이 메모를 먼저 저장합니다. 서버 크롭이 붙으면 이 미리보기 영역에 실제 문항 이미지가 표시됩니다."}
          </p>
        </div>
      ) : null}

      {activeTab === "studentWrong" ? (
        <StudentWrongProblemBoard
          selectedStudent={selectedStudent}
          wrongProblems={wrongProblems.filter((item) => item.studentId === selectedStudent?.studentId)}
          onAddWrongProblem={onAddWrongProblem}
          onUpdateWrongProblem={onUpdateWrongProblem}
        />
      ) : (
        <div className="wrongBookStack">
          {filteredBooks.map((book) => (
            <WrongBookCard
              book={book}
              key={book.problemBookId}
              selectedProblemRef={selectedProblemRef}
              onSelectProblem={(problem, event) => handleProblemClick(book, problem, event)}
              onUpdateBook={(field, value) => onUpdateProblemBook(book.problemBookId, field, value)}
              onUpdateProblem={(problemId, field, value) => onUpdateProblemMeta(book.problemBookId, problemId, field, value)}
            />
          ))}
        </div>
      )}

      {activeTab !== "studentWrong" && selectedProblem && selectedBook ? (
        <div className="floatingProblemInspector">
          <div className="sectionHeader">
            <div>
              <h2>{selectedBook.title} · {selectedProblem.number}번</h2>
              <p className="muted">문항 원문, 상태, 해설 메모를 계속 업데이트합니다.</p>
            </div>
            <button className="iconButton" onClick={() => setSelectedProblemRef(null)} type="button">×</button>
          </div>
          <div className="problemInspectorGrid">
            <ProblemPreview book={selectedBook} problem={selectedProblem} />
            <div className="problemEditPanel">
              <label>
                문항 상태
                <select
                  value={selectedProblem.status}
                  onChange={(event) =>
                    onUpdateProblemMeta(selectedBook.problemBookId, selectedProblem.problemId, "status", event.target.value)
                  }
                >
                  {Object.entries(problemStatusMeta).map(([status, meta]) => (
                    <option key={status} value={status}>{meta.label}</option>
                  ))}
                </select>
              </label>
              <label>
                문항 내용/OCR
                <textarea
                  value={selectedProblem.text}
                  onChange={(event) =>
                    onUpdateProblemMeta(selectedBook.problemBookId, selectedProblem.problemId, "text", event.target.value)
                  }
                  placeholder="PDF 크롭 후 OCR 또는 직접 입력"
                />
              </label>
              <label>
                해설/메모
                <textarea
                  value={selectedProblem.note}
                  onChange={(event) =>
                    onUpdateProblemMeta(selectedBook.problemBookId, selectedProblem.problemId, "note", event.target.value)
                  }
                  placeholder="학생이 자주 틀리는 포인트, 수업 설명 메모"
                />
              </label>
            </div>
          </div>
        </div>
      ) : null}

      {isPickedProblemModalOpen ? (
        <PickedProblemModal
          pickedProblems={pickedProblems}
          selectedStudent={selectedStudent}
          onClose={() => setIsPickedProblemModalOpen(false)}
        />
      ) : null}
    </section>
  );
}

function StudentWrongProblemBoard({ selectedStudent, wrongProblems, onAddWrongProblem, onUpdateWrongProblem }) {
  if (!selectedStudent) {
    return <section className="panel emptyPortalPanel">학생을 선택해 주세요.</section>;
  }

  return (
    <section className="panel studentWrongBoard">
      <div className="sectionHeader">
        <div>
          <h2>{selectedStudent.name} 학생별 오답</h2>
          <p className="muted">학생 프로파일에서 분리한 교재오답 기록입니다. 교재/범위/상태/후속 메모를 여기서 관리합니다.</p>
        </div>
        <button className="primaryButton" onClick={() => onAddWrongProblem(selectedStudent.studentId)} type="button">
          + 오답 추가
        </button>
      </div>
      <div className="managementTable studentWrongTable">
        <div className="managementRow wrongProblemProfileRow managementHead">
          <span>교재/출처</span>
          <span>문항/범위</span>
          <span>상태</span>
          <span>메모</span>
        </div>
        {wrongProblems.length === 0 ? (
          <div className="emptyState">아직 입력된 학생별 오답이 없습니다.</div>
        ) : (
          wrongProblems.map((item) => (
            <div className="managementRow wrongProblemProfileRow" key={item.wrongProblemId}>
              <input
                value={item.source}
                onChange={(event) => onUpdateWrongProblem(item.wrongProblemId, "source", event.target.value)}
                placeholder="예: 쎈, GRIP"
              />
              <input
                value={item.problemRange}
                onChange={(event) => onUpdateWrongProblem(item.wrongProblemId, "problemRange", event.target.value)}
                placeholder="예: 643-647"
              />
              <select value={item.status} onChange={(event) => onUpdateWrongProblem(item.wrongProblemId, "status", event.target.value)}>
                <option value="open">미해결</option>
                <option value="reviewing">재풀이중</option>
                <option value="done">완료</option>
              </select>
              <input
                value={item.note}
                onChange={(event) => onUpdateWrongProblem(item.wrongProblemId, "note", event.target.value)}
                placeholder="오답 원인/보충 메모"
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function PickedProblemModal({ pickedProblems, selectedStudent, onClose }) {
  const sortedProblems = [...pickedProblems].sort((a, b) => {
    const bookCompare = a.book.title.localeCompare(b.book.title);
    return bookCompare || Number(a.problem.number) - Number(b.problem.number);
  });

  return (
    <Modal
      className="pickedProblemModal"
      title={`뽑은 문제 — ${sortedProblems.length}문제`}
      subtitle={`${selectedStudent?.name ?? "학생"} 오답/보충 출력용`}
      onClose={onClose}
    >
      <div className="pickedProblemActions noPrint">
        <button className="primaryButton" onClick={() => window.print()} type="button">🖨 인쇄</button>
        <button className="softButton" onClick={onClose} type="button">닫기</button>
      </div>
      <div className="printProblemSheet">
        <div className="printSheetHeader">
          <strong>{selectedStudent?.grade ?? ""} {selectedStudent?.name ?? "학생"}</strong>
          <span>오답 문제 ({sortedProblems.length}문제)</span>
        </div>
        <div className="printProblemGrid">
          {sortedProblems.map(({ book, problem }, index) => (
            <article className="printProblemCard" key={`${book.problemBookId}_${problem.problemId}`}>
              <div className="printProblemTitle">
                <strong>{book.title} {problem.number}번</strong>
                <span>{problemStatusMeta[problem.status]?.shortLabel ?? "미체크"}</span>
              </div>
              <ProblemPreview book={book} problem={problem} />
              <small>{index + 1}/{sortedProblems.length}</small>
            </article>
          ))}
        </div>
      </div>
    </Modal>
  );
}

function WrongBookCard({ book, selectedProblemRef, onSelectProblem, onUpdateBook, onUpdateProblem }) {
  const counts = countProblemStatuses(book.problems ?? []);
  const selectedProblem =
    selectedProblemRef?.problemBookId === book.problemBookId
      ? book.problems.find((problem) => problem.problemId === selectedProblemRef.problemId)
      : null;

  return (
    <article className="wrongBookCard">
      <div className="wrongBookHeader">
        <div>
          <div className="wrongBookTitleRow">
            <input
              aria-label="교재명"
              value={book.title}
              onChange={(event) => onUpdateBook("title", event.target.value)}
            />
            <span>전체 {book.problems?.length ?? book.totalProblems ?? 0}개</span>
          </div>
          <small>{book.sourceFileName} · {book.grade} · {book.subject} · {book.unit}</small>
        </div>
        <div className="problemLegend">
          {["first", "retry", "wrong", "mistake", "second", "question", "outOfScope", "unchecked"].map((status) => (
            <span key={status}>
              <i className={`legendDot ${problemStatusMeta[status].className}`} />
              {problemStatusMeta[status].shortLabel} {counts[status] ?? 0}
            </span>
          ))}
          <button className="softButton" type="button">전부 맞음</button>
          <button className="softButton" type="button">오답수정</button>
          <button className="softButton" type="button">기록</button>
        </div>
      </div>
      <div className="wrongBookHint">클릭: 맞음→한번 틀림→두번 틀림→실수/확실히 앎 · Ctrl+클릭: 여러 문제 선택</div>
      <div className="wrongBookBody">
        <div className="problemNumberGrid">
          {(book.problems ?? []).map((problem) => (
            <button
              className={`problemNumberButton ${problemStatusMeta[problem.status]?.className ?? "unchecked"} ${
                selectedProblem?.problemId === problem.problemId ? "active" : ""
              } ${problem.isPicked || problem.status === "selected" ? "picked" : ""}`}
              key={problem.problemId}
              onClick={(event) => onSelectProblem(problem, event)}
              type="button"
            >
              {problem.number}
            </button>
          ))}
        </div>
        <div className="problemPreviewBox">
          {selectedProblem ? (
            <>
              <ProblemPreview book={book} problem={selectedProblem} />
              <select
                value={selectedProblem.status}
                onChange={(event) => onUpdateProblem(selectedProblem.problemId, "status", event.target.value)}
              >
                {Object.entries(problemStatusMeta).map(([status, meta]) => (
                  <option key={status} value={status}>{meta.label}</option>
                ))}
              </select>
            </>
          ) : (
            <span>문제를 클릭하면 미리보기</span>
          )}
        </div>
      </div>
    </article>
  );
}

function ProblemPreview({ book, problem }) {
  return (
    <div className="problemPreviewCard">
      <div className="problemPreviewTop">
        <strong>{problem.number}번</strong>
        <span>{problemStatusMeta[problem.status]?.label ?? "미체크"}</span>
      </div>
      {problem.cropImageUrl ? (
        <img alt={`${book.title} ${problem.number}번`} src={problem.cropImageUrl} />
      ) : (
        <div className="mockProblemCrop">
          <small>{book.unit}</small>
          <strong>{String(problem.number).padStart(3, "0")}</strong>
          <p>{problem.text || "PDF 크롭 이미지가 등록되면 이 영역에 문항이 표시됩니다."}</p>
          <ol>
            <li>보기 또는 조건 1</li>
            <li>보기 또는 조건 2</li>
            <li>보기 또는 조건 3</li>
          </ol>
        </div>
      )}
    </div>
  );
}

function ResourceLibraryCenter({ materials = [], onAddMaterial, onDeleteMaterial, students = [], templates = [] }) {
  const fileInputRef = useRef(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    fileName: "",
    fileUrl: "",
    visibility: "student",
    classTemplateId: "",
    studentIds: [],
    notifyByAlimtalk: false
  });
  const [openResourceClassIds, setOpenResourceClassIds] = useState(() =>
    templates.slice(0, 1).map((template) => template.classTemplateId)
  );
  const resourceStudentGroups = useMemo(() => {
    const groups = templates.map((template) => ({
      id: template.classTemplateId,
      name: template.name,
      students: students.filter((student) => student.defaultClassTemplateId === template.classTemplateId)
    }));
    const assignedTemplateIds = new Set(templates.map((template) => template.classTemplateId));
    const unassignedStudents = students.filter((student) => !assignedTemplateIds.has(student.defaultClassTemplateId));
    if (unassignedStudents.length > 0) {
      groups.push({ id: "unassigned", name: "미배정", students: unassignedStudents });
    }
    return groups.filter((group) => group.students.length > 0);
  }, [students, templates]);

  function updateForm(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function attachFiles(files) {
    const selectedFiles = Array.from(files ?? []);
    if (selectedFiles.length === 0) return;
    updateForm("fileName", selectedFiles.map((file) => file.name).join(", "));
  }

  function toggleStudent(studentId) {
    setForm((current) => ({
      ...current,
      studentIds: current.studentIds.includes(studentId)
        ? current.studentIds.filter((id) => id !== studentId)
        : [...current.studentIds, studentId]
    }));
  }

  function toggleResourceGroup(groupId) {
    setOpenResourceClassIds((current) =>
      current.includes(groupId) ? current.filter((id) => id !== groupId) : [...current, groupId]
    );
  }

  function selectResourceGroup(studentIds) {
    setForm((current) => ({ ...current, studentIds: Array.from(new Set([...current.studentIds, ...studentIds])) }));
  }

  function clearResourceGroup(studentIds) {
    const studentIdSet = new Set(studentIds);
    setForm((current) => ({ ...current, studentIds: current.studentIds.filter((studentId) => !studentIdSet.has(studentId)) }));
  }

  function selectAllResourceStudents() {
    setForm((current) => ({ ...current, studentIds: students.map((student) => student.studentId) }));
  }

  function clearAllResourceStudents() {
    setForm((current) => ({ ...current, studentIds: [] }));
  }

  function submitMaterial(event) {
    event.preventDefault();
    if (!form.title.trim()) return;
    onAddMaterial(form);
    setForm((current) => ({
      ...current,
      title: "",
      description: "",
      fileName: "",
      fileUrl: "",
      studentIds: [],
      notifyByAlimtalk: false
    }));
  }

  return (
    <section className="resourceLibraryPage">
      <header className="pageTop">
        <div>
          <p className="eyebrow">RESOURCE LIBRARY</p>
          <h1>자료함</h1>
          <p className="muted">학생별 자료, 반별 자료, 학부모 공개 자료를 한 곳에서 관리합니다.</p>
        </div>
        <span className="countBadge">{materials.length}건</span>
      </header>

      <div className="resourceLibraryLayout">
        <form className="panel resourceForm" onSubmit={submitMaterial}>
          <h2>자료 등록</h2>
          <label>
            자료명
            <input value={form.title} onChange={(event) => updateForm("title", event.target.value)} placeholder="예: 정의여고 직전대비 프린트" />
          </label>
          <label>
            설명
            <textarea value={form.description} onChange={(event) => updateForm("description", event.target.value)} placeholder="학생이 자료를 받을 때 함께 볼 안내문" />
          </label>
          <button
            className="resourceDropZone"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              attachFiles(event.dataTransfer.files);
            }}
            type="button"
          >
            <strong>자료 파일 드래그 앤 드롭</strong>
            <span>{form.fileName || "파일을 여기에 놓거나 클릭해서 선택하세요."}</span>
          </button>
          <input
            hidden
            multiple
            onChange={(event) => attachFiles(event.target.files)}
            ref={fileInputRef}
            type="file"
          />
          <div className="fieldGrid two">
            <label>
              파일명
              <input value={form.fileName} onChange={(event) => updateForm("fileName", event.target.value)} placeholder="파일명 또는 카톡에서 보낸 자료명" />
            </label>
            <label>
              링크
              <input value={form.fileUrl} onChange={(event) => updateForm("fileUrl", event.target.value)} placeholder="https://..." />
            </label>
          </div>
          <div className="fieldGrid two">
            <label>
              공개범위
              <select value={form.visibility} onChange={(event) => updateForm("visibility", event.target.value)}>
                <option value="student">학생만</option>
                <option value="parent">학부모만</option>
                <option value="both">학생+학부모</option>
              </select>
            </label>
            <label>
              반
              <select value={form.classTemplateId} onChange={(event) => updateForm("classTemplateId", event.target.value)}>
                <option value="">전체 반</option>
                {templates.map((template) => (
                  <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="resourceStudentPicker">
            <div className="resourceStudentPickerTop">
              <strong>개별 학생</strong>
              <span>선택 {form.studentIds.length}명</span>
            </div>
            <div className="resourceBulkActions">
              <button onClick={selectAllResourceStudents} type="button">전체 선택</button>
              <button onClick={clearAllResourceStudents} type="button">전체 해제</button>
            </div>
            <div className="resourceClassGroups">
              {resourceStudentGroups.map((group) => {
                const groupStudentIds = group.students.map((student) => student.studentId);
                const selectedCount = groupStudentIds.filter((studentId) => form.studentIds.includes(studentId)).length;
                const isOpen = openResourceClassIds.includes(group.id);
                return (
                  <section className="resourceClassGroup" key={group.id}>
                    <button className="resourceClassGroupHeader" onClick={() => toggleResourceGroup(group.id)} type="button">
                      <span>{isOpen ? "⌄" : "›"} {group.name}</span>
                      <b>{selectedCount}/{group.students.length}명</b>
                    </button>
                    {isOpen ? (
                      <div className="resourceClassGroupBody">
                        <div className="resourceGroupActions">
                          <button onClick={() => selectResourceGroup(groupStudentIds)} type="button">반 전체 선택</button>
                          <button onClick={() => clearResourceGroup(groupStudentIds)} type="button">반 선택 해제</button>
                        </div>
                        <div className="resourceStudentButtons">
                          {group.students.map((student) => (
                            <button
                              className={form.studentIds.includes(student.studentId) ? "active" : ""}
                              key={student.studentId}
                              onClick={() => toggleStudent(student.studentId)}
                              type="button"
                            >
                              {student.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </section>
                );
              })}
            </div>
          </div>
          <label className="checkboxLine">
            <input checked={form.notifyByAlimtalk} onChange={(event) => updateForm("notifyByAlimtalk", event.target.checked)} type="checkbox" />
            등록 후 알림톡 안내 대상으로 표시
          </label>
          <button className="primaryButton full" type="submit">자료 등록</button>
        </form>

        <section className="panel resourceList">
          <h2>등록 자료</h2>
          {materials.length === 0 ? <div className="emptyPortalPanel">등록된 자료가 없습니다.</div> : null}
          {materials.map((material) => (
            <article className="resourceListItem" key={material.materialId}>
              <div>
                <strong>{material.title}</strong>
                <p>{material.description || "설명 없음"}</p>
                <small>
                  {material.visibility === "both" ? "학생+학부모" : material.visibility === "parent" ? "학부모" : "학생"}
                  {" · "}
                  {material.fileName || material.fileUrl || "파일/링크 미입력"}
                </small>
              </div>
              <button className="dangerButton mini" onClick={() => onDeleteMaterial(material.materialId)} type="button">삭제</button>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

function MaterialManager({
  appStateSaveState = "idle",
  problemBooks,
  students,
  onAddFolder,
  onAddPdf,
  onImportPageSnapBooks,
  onSyncProblemCounts,
  onUpdateBook
}) {
  const [activeTab, setActiveTab] = useState("books");
  const [folderName, setFolderName] = useState("");
  const [isPageSnapModalOpen, setIsPageSnapModalOpen] = useState(false);
  const [pageSnapJson, setPageSnapJson] = useState("");
  const [pageSnapImportMessage, setPageSnapImportMessage] = useState("");
  const textbookRows = useMemo(() => {
    const rows = new Map();
    students.forEach((student) => {
      const key = `${student.grade || "학년 미입력"}_${student.textbook || "교과서 미입력"}`;
      if (!rows.has(key)) {
        rows.set(key, {
          grade: student.grade || "학년 미입력",
          textbook: student.textbook || "교과서 미입력",
          students: []
        });
      }
      rows.get(key).students.push(student.name);
    });
    return Array.from(rows.values());
  }, [students]);

  function handleAddFolder() {
    if (!folderName.trim()) return;
    onAddFolder(folderName.trim());
    setFolderName("");
  }

  function handlePdfUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    onAddPdf(file.name);
    event.target.value = "";
  }

  function handlePageSnapImport() {
    try {
      const count = onImportPageSnapBooks(pageSnapJson);
      setPageSnapImportMessage(`${count}개 PageSnap 교재 항목을 가져왔습니다.`);
      setPageSnapJson("");
    } catch (error) {
      setPageSnapImportMessage(error.message);
    }
  }

  return (
    <section className="materialManagerPage">
      <div className="localTabs materialTabs">
        <button className={activeTab === "books" ? "active" : ""} onClick={() => setActiveTab("books")} type="button">
          📚 교재 관리
        </button>
        <button className={activeTab === "textbooks" ? "active" : ""} onClick={() => setActiveTab("textbooks")} type="button">
          📖 교과서 관리
        </button>
      </div>

      {activeTab === "books" ? (
        <section className="panel materialPanel">
          <div className="sectionHeader">
            <div>
              <h1>교재 폴더</h1>
              <p className="muted">교재 원본 PDF, PageSnap 단원 JSON, 문항 수를 관리합니다. 여기서 등록한 교재는 오답관리에서 사용됩니다.</p>
            </div>
            <div className="materialHeaderActions">
              <InlineSaveStatus label="교재 자동저장" saveState={appStateSaveState} />
              <button className="softButton" onClick={() => setIsPageSnapModalOpen(true)} type="button">
                PageSnap JSON 가져오기
              </button>
              <label className="pdfUploadButton">
                PDF 업로드
                <input accept="application/pdf,image/*" onChange={handlePdfUpload} type="file" />
              </label>
            </div>
          </div>

          <div className="materialFolderBar">
            <input
              value={folderName}
              onChange={(event) => setFolderName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleAddFolder();
              }}
              placeholder="새 폴더명 입력 (예: 공통수학1, 중2 추가)"
            />
            <button className="primaryButton" onClick={handleAddFolder} type="button">+ 폴더 추가</button>
            <button className="orangeButton" onClick={onSyncProblemCounts} type="button">문제수 동기화</button>
          </div>

          <div className="materialTable">
            <div className="materialRow materialHead">
              <span>이름</span>
              <span>과목</span>
              <span>문제수</span>
              <span>번호범위</span>
              <span>PDF쪽</span>
              <span>이미지</span>
              <span>평균(분)</span>
              <span>업로드학원</span>
            </div>
            {problemBooks.map((book) => (
              <div className="materialRow" key={book.problemBookId}>
                <label className="folderNameCell">
                  <span>📁</span>
                  <input value={book.title} onChange={(event) => onUpdateBook(book.problemBookId, "title", event.target.value)} />
                </label>
                <input value={book.subject ?? ""} onChange={(event) => onUpdateBook(book.problemBookId, "subject", event.target.value)} placeholder="과목" />
                <input
                  type="number"
                  value={book.problems?.length ?? book.totalProblems ?? 0}
                  onChange={(event) => onUpdateBook(book.problemBookId, "totalProblems", Number(event.target.value))}
                />
                <input value={book.numberRange ?? ""} onChange={(event) => onUpdateBook(book.problemBookId, "numberRange", event.target.value)} placeholder="예: 1~895" />
                <span className="muted">{book.startPdfPage && book.endPdfPage ? `${book.startPdfPage}~${book.endPdfPage}` : "-"}</span>
                <span className="muted">{book.problems?.some((problem) => problem.cropImageUrl) ? "있음" : "대기"}</span>
                <input value={book.averageMinutes ?? ""} onChange={(event) => onUpdateBook(book.problemBookId, "averageMinutes", event.target.value)} placeholder="분" />
                <input
                  value={book.uploadedAcademy ?? academyBrandName}
                  onChange={(event) => onUpdateBook(book.problemBookId, "uploadedAcademy", event.target.value)}
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {isPageSnapModalOpen ? (
        <Modal
          className="pageSnapImportModal"
          title="PageSnap JSON 가져오기"
          subtitle="PageSnap의 GPT 프롬프트 결과 JSON을 붙여넣으면 교재 단원과 문항 번호가 오답관리 교재로 저장됩니다."
          onClose={() => setIsPageSnapModalOpen(false)}
        >
          <div className="pageSnapImportLayout">
            <label>
              JSON 붙여넣기
              <textarea
                rows="14"
                value={pageSnapJson}
                onChange={(event) => setPageSnapJson(event.target.value)}
                placeholder='[{"item_title":"공수1 고쟁이 STEP 01 다항식의 연산","book_name":"고쟁이","subject":"공통수학1","start_pdf_page":1,"end_pdf_page":4,"start_problem_id":1,"end_problem_id":28,"estimated_minutes_per_problem":3}]'
              />
            </label>
            <aside className="pageSnapImportGuide">
              <button className="softButton" onClick={() => setPageSnapJson(createSsenCommonMath1PageSnapExample())} type="button">
                쎈 공통수학1 예시 채우기
              </button>
              <strong>가져오는 값</strong>
              <span>교재명 / 단원명</span>
              <span>과목</span>
              <span>PDF 페이지 범위</span>
              <span>문항 시작-끝 번호</span>
              <span>문항당 예상 시간</span>
              <p className="muted">
                예시 PDF: C:\Users\force\Desktop\쎈 공통수학1 본문.pdf · 192쪽.
                이미지 크롭 파일은 다음 단계에서 export 폴더를 연결하면 붙일 수 있습니다.
              </p>
            </aside>
          </div>
          {pageSnapImportMessage ? <p className="importMessage">{pageSnapImportMessage}</p> : null}
          <div className="modalActionRow">
            <button className="primaryButton" onClick={handlePageSnapImport} type="button">가져오기</button>
            <button className="softButton" onClick={() => setIsPageSnapModalOpen(false)} type="button">닫기</button>
          </div>
        </Modal>
      ) : null}

      {activeTab === "textbooks" ? (
        <section className="panel materialPanel">
          <div className="sectionHeader">
            <div>
              <h1>교과서 관리</h1>
              <p className="muted">학생 정보에 입력된 학교/학년/교과서를 기준으로 교과서 사용 현황을 모읍니다.</p>
            </div>
          </div>
          <div className="materialTable textbookTable">
            <div className="materialRow materialHead">
              <span>학년</span>
              <span>교과서</span>
              <span>연결 학생</span>
            </div>
            {textbookRows.map((row) => (
              <div className="materialRow" key={`${row.grade}_${row.textbook}`}>
                <strong>{row.grade}</strong>
                <span>{row.textbook}</span>
                <span>{row.students.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}

function CandidatePanel({ children, subtitle, title }) {
  return (
    <section className="panel candidatePanel">
      <h2>{title}</h2>
      <p className="muted">{subtitle}</p>
      <div className="candidateStack">{children}</div>
    </section>
  );
}

function OverdueHomework({
  homeworks,
  lessons = [],
  materials = [],
  records = [],
  reportSnapshots = [],
  scoreRecords = [],
  students,
  onTeacherVerifyHomework
}) {
  const makeupCandidateHomeworks = homeworks.filter((homework) => isHomeworkMakeupCandidate(homework, records, lessons));
  const actionableHomeworks = dedupeActionableHomeworks(makeupCandidateHomeworks);
  const unresolvedHomeworks = actionableHomeworks
    .filter((homework) => homework.title && isHomeworkActionRequired(homework))
    .sort((a, b) => String(a.assignedDate ?? "").localeCompare(String(b.assignedDate ?? "")));
  const [gradeFilter, setGradeFilter] = useState("전체");
  const [activeMetric, setActiveMetric] = useState("all");
  const [detailScope, setDetailScope] = useState("all");
  const [studentPreviewId, setStudentPreviewId] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState(students[0]?.studentId ?? "");
  const filteredStudents =
    gradeFilter === "전체" ? students : students.filter((student) => (student.grade || "미입력") === gradeFilter);
  const registeredStudentIds = new Set(actionableHomeworks.filter((homework) => homework.title).map((homework) => homework.studentId));
  const todayIncompleteStudentIds = new Set(unresolvedHomeworks.filter((homework) => homework.dueDate === today).map((homework) => homework.studentId));
  const overdueStudentIds = new Set(unresolvedHomeworks.filter((homework) => isHomeworkOverdue(homework)).map((homework) => homework.studentId));
  const metricLabels = {
    all: "보충 대상 전체",
    overdue: "지연 보충 학생",
    registered: "보충 대상 학생",
    today: "오늘 기준 보충"
  };
  const metricMeta = {
    all: {
      detailHint: "보충관리와 같은 기준의 숙제보충 대상",
      detailTitle: "보충 대상 숙제",
      emptyHomeworks: "보충 대상 숙제가 없습니다.",
      emptyStudents: "보충 대상 학생이 없습니다.",
      studentHint: "숙제보충이 필요한 학생을 확인합니다.",
      studentTitle: "보충 대상 전체"
    },
    overdue: {
      detailHint: "기준일이 지난 숙제보충 대상",
      detailTitle: "지연 보충 숙제",
      emptyHomeworks: "선택한 학생의 지연 보충 숙제가 없습니다.",
      emptyStudents: "지연 보충 학생이 없습니다.",
      studentHint: "기준일이 지난 숙제보충 대상 학생만 봅니다.",
      studentTitle: "지연 보충 학생"
    },
    registered: {
      detailHint: "수업일지 검사 결과 보충이 필요한 숙제",
      detailTitle: "보충 대상 숙제",
      emptyHomeworks: "선택한 학생의 보충 대상 숙제가 없습니다.",
      emptyStudents: "보충 대상 학생이 없습니다.",
      studentHint: "수업일지 검사 결과 숙제보충이 필요한 학생만 봅니다.",
      studentTitle: "보충 대상 학생"
    },
    today: {
      detailHint: "오늘 기준으로 처리해야 하는 숙제보충 대상",
      detailTitle: "오늘 기준 보충 숙제",
      emptyHomeworks: "선택한 학생의 오늘 기준 보충 숙제가 없습니다.",
      emptyStudents: "오늘 기준 보충 학생이 없습니다.",
      studentHint: "오늘 기준으로 처리해야 하는 숙제보충 학생만 봅니다.",
      studentTitle: "오늘 기준 보충"
    }
  };
  const activeMetricMeta = metricMeta[activeMetric] ?? metricMeta.all;
  const visibleStudents = filteredStudents.filter((student) => {
    if (activeMetric === "registered") return registeredStudentIds.has(student.studentId);
    if (activeMetric === "today") return todayIncompleteStudentIds.has(student.studentId);
    if (activeMetric === "overdue") return overdueStudentIds.has(student.studentId);
    return registeredStudentIds.has(student.studentId);
  });
  const visibleStudentIds = visibleStudents.map((student) => student.studentId).join("|");
  const firstVisibleStudentId = visibleStudents[0]?.studentId ?? "";
  const selectedStudent =
    detailScope === "student"
      ? visibleStudents.find((student) => student.studentId === selectedStudentId) ?? visibleStudents[0] ?? null
      : null;
  const selectedHomeworks =
    detailScope === "all"
      ? getHomeworksByMetricForStudents(visibleStudents.map((student) => student.studentId))
      : selectedStudent ? getStudentHomeworksByMetric(selectedStudent.studentId) : [];
  const registeredStudentCount = registeredStudentIds.size;
  const todayIncompleteCount = todayIncompleteStudentIds.size;
  const overdueStudentCount = overdueStudentIds.size;

  useEffect(() => {
    if (!visibleStudentIds) {
      if (selectedStudentId) setSelectedStudentId("");
      return;
    }
    if (detailScope === "all") return;
    if (!visibleStudentIds.split("|").includes(selectedStudentId)) {
      setSelectedStudentId(firstVisibleStudentId);
    }
  }, [detailScope, firstVisibleStudentId, selectedStudentId, visibleStudentIds]);

  function getStudentHomeworksByMetric(studentId) {
    return getHomeworksByMetricForStudents([studentId]);
  }

  function getHomeworksByMetricForStudents(studentIds) {
    const targetIds = new Set(studentIds);
    const sortByAssignedDate = (items) =>
      [...items].sort((a, b) =>
        String(a.assignedDate ?? a.dueDate ?? "").localeCompare(String(b.assignedDate ?? b.dueDate ?? ""))
      );
    if (activeMetric === "today") {
      return sortByAssignedDate(
        unresolvedHomeworks.filter((homework) => targetIds.has(homework.studentId) && homework.dueDate === today)
      );
    }
    if (activeMetric === "overdue") {
      return sortByAssignedDate(
        unresolvedHomeworks.filter((homework) => targetIds.has(homework.studentId) && isHomeworkOverdue(homework))
      );
    }
    return sortByAssignedDate(actionableHomeworks.filter((homework) => targetIds.has(homework.studentId) && homework.title));
  }

  function getStudentHomeworkSummary(student) {
    const studentHomeworks = actionableHomeworks.filter((homework) => homework.studentId === student.studentId);
    const unresolvedCount = unresolvedHomeworks.filter((homework) => homework.studentId === student.studentId).length;
    const todayCount = unresolvedHomeworks.filter(
      (homework) => homework.studentId === student.studentId && homework.dueDate === today
    ).length;
    const overdueCount = unresolvedHomeworks.filter(
      (homework) => homework.studentId === student.studentId && isHomeworkOverdue(homework)
    ).length;
    const doneCount = studentHomeworks.filter(
      (homework) => homework.teacherStatus === "verified" || homework.studentStatus === "checked_done"
    ).length;
    const progress = studentHomeworks.length ? Math.round((doneCount / studentHomeworks.length) * 100) : 0;
    return {
      hasRegisteredHomework: studentHomeworks.length > 0,
      overdueCount,
      progress,
      registeredCount: studentHomeworks.length,
      todayCount,
      unresolvedCount
    };
  }

  function getStudentMetricLine(summary) {
    if (activeMetric === "registered") return `보충 대상 ${summary.registeredCount}건 · 처리 ${summary.progress}%`;
    if (activeMetric === "today") return `오늘 기준 보충 ${summary.todayCount}건`;
    if (activeMetric === "overdue") return `지연 보충 ${summary.overdueCount}건`;
    return `오늘 기준 ${summary.todayCount}건 · 지연 ${summary.overdueCount}건`;
  }

  function handleMetricClick(metric) {
    setActiveMetric(metric);
    if (metric === "all") {
      setDetailScope("all");
      setSelectedStudentId("");
      return;
    }
    setDetailScope("student");
    const nextStudent = filteredStudents.find((student) => {
      if (metric === "registered") return registeredStudentIds.has(student.studentId);
      if (metric === "today") return todayIncompleteStudentIds.has(student.studentId);
      if (metric === "overdue") return overdueStudentIds.has(student.studentId);
      return true;
    });
    if (nextStudent) {
      setSelectedStudentId(nextStudent.studentId);
    }
  }

  function handleSelectStudent(studentId) {
    setDetailScope("student");
    setSelectedStudentId(studentId);
  }

  function handleShowAllStudents() {
    setActiveMetric("all");
    setDetailScope("all");
    setSelectedStudentId("");
  }

  function getHomeworkStudentName(homework) {
    return students.find((student) => student.studentId === homework.studentId)?.name ?? "학생 미입력";
  }

  return (
    <section className="homeworkStatusDashboard">
      <div className="homeworkStatusMetrics">
        <MetricCard active={activeMetric === "all"} icon="👥" label="보충 대상 전체" value={`${registeredStudentCount}명`} hint="보충관리 기준" onClick={() => handleMetricClick("all")} />
        <MetricCard active={activeMetric === "registered"} icon="📖" label="보충 대상 학생" value={`${registeredStudentCount}명`} hint="검사 결과 기준" onClick={() => handleMetricClick("registered")} />
        <MetricCard active={activeMetric === "today"} icon="⏰" label="오늘 기준 보충" value={`${todayIncompleteCount}명`} hint="오늘 처리 대상" onClick={() => handleMetricClick("today")} tone="warning" />
        <MetricCard active={activeMetric === "overdue"} icon="⚠️" label="지연 보충 학생" value={`${overdueStudentCount}명`} hint="클릭해서 목록 보기" onClick={() => handleMetricClick("overdue")} tone="warning" />
      </div>

      <div className="homeworkStatusContent">
        <section className="panel homeworkProgressPanel">
          <div className="sectionHeader compact">
            <div>
              <h2>{activeMetricMeta.studentTitle}</h2>
              <p className="muted">{activeMetricMeta.studentHint}</p>
            </div>
          </div>
          <div className="homeworkMetricNotice">
            <strong>{metricLabels[activeMetric]}</strong>
            <span>{visibleStudents.length}명 표시 중</span>
          </div>
          <div className="homeworkGradeFilters">
            {["전체", "중1", "중2", "중3", "고1", "고2", "고3"].map((grade) => (
              <button
                className={gradeFilter === grade ? "active" : ""}
                key={grade}
                onClick={() => setGradeFilter(grade)}
                type="button"
              >
                {grade}
              </button>
            ))}
          </div>
          <div className="homeworkStudentGrid">
            {visibleStudents.length === 0 ? (
              <div className="emptyHomeworkBox compact">{activeMetricMeta.emptyStudents}</div>
            ) : null}
            {visibleStudents.map((student) => {
              const summary = getStudentHomeworkSummary(student);
              const isSelected = selectedStudent?.studentId === student.studentId;
              return (
                <button
                  className={isSelected ? "homeworkStudentTile active" : "homeworkStudentTile"}
                  key={student.studentId}
                  onClick={() => handleSelectStudent(student.studentId)}
                  type="button"
                >
                  <span className="homeworkStudentTop">
                    <strong>{student.name}</strong>
                    <small>{student.grade || "미입력"}</small>
                    <em>{summary.hasRegisteredHomework ? "대상" : "없음"}</em>
                    <b>{summary.progress}%</b>
                  </span>
                  <span className="homeworkProgressTrack">
                    <i style={{ width: `${summary.progress}%` }} />
                  </span>
                  <span className="homeworkStudentMeta">
                    {getStudentMetricLine(summary)}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="panel homeworkDetailPanel">
          <div className="sectionHeader compact">
            <div>
              <h2>{activeMetricMeta.detailTitle}</h2>
              <p className="muted">
                {detailScope === "all"
                  ? `${visibleStudents.length}명 · ${activeMetricMeta.detailHint}`
                  : selectedStudent ? `${selectedStudent.name} · ${activeMetricMeta.detailHint}` : "학생을 선택하세요"}
              </p>
            </div>
            <div className="detailActions">
              {selectedStudent ? (
                <button className="softButton" onClick={() => setStudentPreviewId(selectedStudent.studentId)} type="button">
                  👤 학생화면
                </button>
              ) : null}
              <button className="softButton" onClick={handleShowAllStudents} type="button">전체 대상</button>
            </div>
          </div>
          {selectedHomeworks.length === 0 ? (
            <div className="emptyHomeworkBox">{activeMetricMeta.emptyHomeworks}</div>
          ) : null}
          <div className="homeworkDetailList">
            {selectedHomeworks.map((homework) => (
              <article className="homeworkDetailCard" key={homework.homeworkId}>
                <div>
                  <strong>{detailScope === "all" ? `${getHomeworkStudentName(homework)} · ${homework.title}` : homework.title}</strong>
                  <small>{homework.assignedDate} 배정 · {homework.dueDate || "-"} 마감</small>
                  <span className="homeworkProgressTrack">
                    <i style={{ width: homework.studentStatus === "checked_done" ? "100%" : "0%" }} />
                  </span>
                  <small>{homework.studentStatus === "checked_done" ? "학생 체크 완료" : "학생 체크 대기"}</small>
                </div>
                <div className="homeworkDetailControls">
                  <select
                    value={homework.teacherStatus ?? "unverified"}
                    onChange={(event) => onTeacherVerifyHomework(homework.homeworkId, event.target.value)}
                  >
                    <option value="unverified">확인 대기</option>
                    <option value="verified">확인 완료</option>
                    <option value="partial">일부 완료</option>
                    <option value="missing">미완료</option>
                  </select>
                  <span className="actionHint">{getHomeworkAction(homework)}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {studentPreviewId ? (
        <Modal
          backdropClassName="studentPortalPreviewBackdrop"
          className="studentPortalPreviewModal"
          title="학생 화면 미리보기"
          subtitle="숙제현황에서 선택한 학생 포털 화면입니다."
          onClose={() => setStudentPreviewId("")}
        >
          <StudentPortalV2
            homeworks={homeworks}
            lessons={lessons}
            materials={materials}
            records={records}
            reportSnapshots={reportSnapshots}
            scoreRecords={scoreRecords}
            sessionStudentId={studentPreviewId}
            students={students.filter((student) => student.studentId === studentPreviewId)}
            previewMode
            onLogout={() => setStudentPreviewId("")}
            onStudentCheckHomework={() => {}}
          />
        </Modal>
      ) : null}
    </section>
  );
}

const intakeStatusOptions = [
  { value: "received", label: "문의접수" },
  { value: "consulting", label: "상담중" },
  { value: "trial", label: "체험예정" },
  { value: "registered", label: "등록확정" },
  { value: "canceled", label: "등록취소" },
  { value: "paused", label: "보류" },
  { value: "lost", label: "연락두절" }
];

function StudentModal({
  applicantSaveStates = {},
  intakeApplicants = [],
  templates,
  onClose,
  onRegisterApplicant,
  onSubmit,
  onUpdateApplicant
}) {
  const [mode, setMode] = useState("single");
  const [form, setForm] = useState({
    name: "",
    birthYear: "",
    schoolName: "",
    studentPhone: "",
    parentPhone: "",
    pin: "",
    grade: "고1",
    textbook: "",
    specialNote: "",
    defaultClassTemplateId: templates[0].classTemplateId,
    scheduleOverride: ""
  });
  const activeApplicants = intakeApplicants.filter((applicant) => applicant.status !== "registered");
  const registeredApplicants = intakeApplicants.filter((applicant) => applicant.status === "registered");

  function update(field, value) {
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (field === "birthYear") {
        next.grade = inferGradeFromBirthYear(value);
      }
      return next;
    });
  }

  function updateApplicant(applicantId, field, value) {
    onUpdateApplicant(applicantId, { [field]: value });
  }

  function getApplicantRegisterValues(applicant) {
    return {
      name: applicant.name,
      birthYear: applicant.birthYear,
      schoolName: applicant.schoolName,
      studentPhone: applicant.studentPhone,
      parentPhone: applicant.parentPhone,
      pin: applicant.pin || "1234",
      grade: applicant.grade || inferGradeFromBirthYear(applicant.birthYear),
      textbook: "",
      specialNote: applicant.specialNote || applicant.memo || "",
      defaultClassTemplateId: applicant.defaultClassTemplateId || "",
      scheduleOverride: ""
    };
  }

  function renderTallyQuestionFields(applicant) {
    return (
      <>
        <label>재원생 여부<input value={applicant.enrollmentStatus ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "enrollmentStatus", event.target.value)} /></label>
        <label>현재 학습 과정<input value={applicant.currentLearningProcess ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "currentLearningProcess", event.target.value)} /></label>
        <label>직전학기 내신 성적<input value={applicant.previousSemesterScore ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "previousSemesterScore", event.target.value)} /></label>
        <label>특이사항<input value={applicant.specialNote ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "specialNote", event.target.value)} /></label>
        <label>추가 메모<input value={applicant.memo || applicant.desiredClass || ""} onChange={(event) => updateApplicant(applicant.applicantId, "memo", event.target.value)} /></label>
      </>
    );
  }

  return (
    <Modal
      className="studentAddModal"
      title="학생 추가"
      subtitle="한 명씩 등록하거나 엑셀에서 복사한 목록을 일괄 등록합니다."
      onClose={onClose}
    >
      <div className="studentAddTabs" role="tablist" aria-label="학생 추가 방식">
        <button className={mode === "single" ? "active" : ""} onClick={() => setMode("single")} type="button">한 명씩</button>
        <button className={mode === "bulk" ? "active" : ""} onClick={() => setMode("bulk")} type="button">엑셀 일괄 등록</button>
        <button className={mode === "intake" ? "active" : ""} onClick={() => setMode("intake")} type="button">Tally 접수</button>
      </div>

      {mode === "single" ? (
        <>
          <div className="studentAddGrid">
            <label>이름<input value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="박수빈" /></label>
            <label>
              출생연도
              <div className="birthYearWithGrade">
                <input value={form.birthYear} onChange={(event) => update("birthYear", event.target.value)} placeholder="2010" />
                <span>{form.grade || "학년"}</span>
              </div>
            </label>
            <label>학교<input value={form.schoolName} onChange={(event) => update("schoolName", event.target.value)} placeholder="자운고등학교" /></label>
            <label>PIN<input value={form.pin} onChange={(event) => update("pin", event.target.value)} placeholder="1234" /></label>
            <label>학생전화번호<input inputMode="tel" value={form.studentPhone} onChange={(event) => update("studentPhone", event.target.value)} placeholder="01012345678" /></label>
            <label>학부모전화번호<input inputMode="tel" value={form.parentPhone} onChange={(event) => update("parentPhone", event.target.value)} placeholder="01012345678" /></label>
            <label>
              반
              <select value={form.defaultClassTemplateId} onChange={(event) => update("defaultClassTemplateId", event.target.value)}>
                <option value="">미배정</option>
                {templates.map((template) => (
                  <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                ))}
              </select>
            </label>
            <label>특이사항<input value={form.specialNote} onChange={(event) => update("specialNote", event.target.value)} placeholder="상담 메모 또는 주의사항" /></label>
          </div>
          <button className="primaryButton full studentAddSubmit" onClick={() => onSubmit(form)} type="button">학생 저장</button>
        </>
      ) : mode === "bulk" ? (
        <div className="studentBulkPlaceholder">
          <strong>엑셀 일괄 등록</strong>
          <p className="muted">이름, 출생연도, 학교, PIN 순서로 복사한 목록을 붙여넣는 기능으로 확장 예정입니다.</p>
          <textarea placeholder={"박수빈\t2010\t자운고등학교\t1234"} rows="6" />
          <button className="primaryButton full" disabled type="button">일괄 등록 준비 중</button>
        </div>
      ) : (
        <div className="studentIntakePanel">
          <div className="intakeEndpointBox">
            <strong>Tally 웹훅 연결 주소</strong>
            <code>https://koh-you-math-academy-os-api.onrender.com/api/intake/tally</code>
            <p className="muted">Tally 제출은 정식 학생이 아니라 입학 후보로 먼저 저장됩니다. 확인 후 정식 등록하세요.</p>
          </div>
          <div className="studentIntakeSummary">
            <span>확인 필요 {activeApplicants.length}명</span>
            <span>등록 완료 {registeredApplicants.length}명</span>
          </div>
          {activeApplicants.length === 0 ? (
            <div className="emptyState">아직 확인할 Tally 접수 후보가 없습니다.</div>
          ) : null}
          <div className="studentIntakeList">
            {activeApplicants.map((applicant) => (
              <article className="studentIntakeCard" key={applicant.applicantId}>
                <div className="studentIntakeCardHeader">
                  <div>
                    <strong>{applicant.name || "이름 미입력"}</strong>
                    <span>{[applicant.grade || inferGradeFromBirthYear(applicant.birthYear), applicant.schoolName].filter(Boolean).join(" · ") || "기본 정보 미입력"}</span>
                  </div>
                  <select
                    value={applicant.status ?? "received"}
                    onChange={(event) => updateApplicant(applicant.applicantId, "status", event.target.value)}
                  >
                    {intakeStatusOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
                <div className="studentIntakeGrid">
                  <label>이름<input value={applicant.name ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "name", event.target.value)} /></label>
                  <label>출생연도<input value={applicant.birthYear ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "birthYear", event.target.value)} /></label>
                  <label>학교<input value={applicant.schoolName ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "schoolName", event.target.value)} /></label>
                  <label>학년<input value={applicant.grade ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "grade", event.target.value)} /></label>
                  <label>학생전화<input value={applicant.studentPhone ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "studentPhone", event.target.value)} /></label>
                  <label>학부모전화<input value={applicant.parentPhone ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "parentPhone", event.target.value)} /></label>
                  <label>
                    배정 반
                    <select value={applicant.defaultClassTemplateId ?? ""} onChange={(event) => updateApplicant(applicant.applicantId, "defaultClassTemplateId", event.target.value)}>
                      <option value="">미배정</option>
                      {templates.map((template) => (
                        <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
                      ))}
                    </select>
                  </label>
                  {renderTallyQuestionFields(applicant)}
                </div>
                <div className="studentIntakeActions">
                  <small>{applicant.formName || "Tally"} · {applicant.createdAt ? new Date(applicant.createdAt).toLocaleString("ko-KR") : "접수일 미확인"}</small>
                  {applicantSaveStates[applicant.applicantId] ? (
                    <InlineSaveStatus label="접수정보" saveState={applicantSaveStates[applicant.applicantId]} />
                  ) : null}
                  <button
                    className="primaryButton"
                    disabled={!applicant.name}
                    onClick={() => onRegisterApplicant(applicant.applicantId, getApplicantRegisterValues(applicant))}
                    type="button"
                  >
                    정식 학생 등록
                  </button>
                </div>
              </article>
            ))}
            {registeredApplicants.length > 0 ? (
              <div className="studentIntakeRegisteredList">
                <strong>등록 완료 후보</strong>
                {registeredApplicants.map((applicant) => (
                  <article className="studentIntakeCard registered" key={applicant.applicantId}>
                    <div className="studentIntakeCardHeader">
                      <div>
                        <strong>{applicant.name || "이름 미입력"}</strong>
                        <span>{[applicant.grade || inferGradeFromBirthYear(applicant.birthYear), applicant.schoolName, applicant.defaultClassTemplateId ? templates.find((template) => template.classTemplateId === applicant.defaultClassTemplateId)?.name : "미배정"].filter(Boolean).join(" · ") || "기본 정보 미입력"}</span>
                      </div>
                      <span className="statusPill status-sent">등록완료</span>
                    </div>
                    <div className="studentIntakeAnswerList">
                      {[
                        ["재원생 여부", applicant.enrollmentStatus],
                        ["현재 학습 과정", applicant.currentLearningProcess],
                        ["직전학기 내신 성적", applicant.previousSemesterScore],
                        ["특이사항", applicant.specialNote],
                        ["추가 메모", applicant.memo]
                      ].filter(([, value]) => value).map(([label, value]) => (
                        <span key={label}><b>{label}</b>{value}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </Modal>
  );
}

function inferGradeFromBirthYear(birthYear) {
  const year = Number(String(birthYear).replace(/[^0-9]/g, ""));
  if (!year) return "고1";
  const ageGrade = new Date(`${today}T00:00:00+09:00`).getFullYear() - year - 15;
  if (ageGrade <= -2) return "중1";
  if (ageGrade === -1) return "중2";
  if (ageGrade === 0) return "중3";
  if (ageGrade === 1) return "고1";
  if (ageGrade === 2) return "고2";
  return "고3";
}

function ReportCenter({ lessons, records, reportLesson, selectedReportLessonId, snapshots, students, onSaveSnapshot, onSelectLesson }) {
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const lessonStudents = reportLesson
    ? reportLesson.studentIds.map((studentId) => students.find((student) => student.studentId === studentId)).filter(Boolean)
    : [];
  const activeStudent = lessonStudents.find((student) => student.studentId === selectedStudentId) ?? lessonStudents[0];
  const activeRecord = activeStudent ? records.find((record) => record.studentId === activeStudent.studentId) : null;
  const reportBody = activeStudent && reportLesson
    ? createReportBody(activeStudent, reportLesson, activeRecord)
    : "";

  useEffect(() => {
    if (lessonStudents[0] && !lessonStudents.some((student) => student.studentId === selectedStudentId)) {
      setSelectedStudentId(lessonStudents[0].studentId);
    }
  }, [lessonStudents, selectedStudentId]);

  function saveSnapshot() {
    if (!activeStudent || !reportLesson) return;

    onSaveSnapshot({
      reportId: `report_${Date.now()}_${activeStudent.studentId}`,
      studentId: activeStudent.studentId,
      lessonId: reportLesson.lessonId,
      title: `${reportLesson.date} ${activeStudent.name} 리포트`,
      body: reportBody,
      status: "snapshot_saved",
      createdAt: new Date().toISOString()
    });
  }

  return (
    <section className="reportGrid">
      <div className="panel">
        <div className="sectionHeader">
          <div>
            <h1>보고서 생성</h1>
            <p className="muted">Day 10-12: 템플릿, 초안, 스냅샷 저장</p>
          </div>
        </div>
        <label>수업 선택
          <select value={selectedReportLessonId} onChange={(event) => onSelectLesson(event.target.value)}>
            {lessons.map((lesson) => (
              <option key={lesson.lessonId} value={lesson.lessonId}>{lesson.date} · {lesson.className}</option>
            ))}
          </select>
        </label>
        <label>학생 선택
          <select value={activeStudent?.studentId ?? ""} onChange={(event) => setSelectedStudentId(event.target.value)}>
            {lessonStudents.map((student) => <option key={student.studentId} value={student.studentId}>{student.name}</option>)}
          </select>
        </label>
        <label>리포트 템플릿
          <textarea readOnly rows="4" value={sampleData.reportTemplates[0].body} />
        </label>
      </div>

      <div className="panel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Draft</p>
            <h2>리포트 초안</h2>
          </div>
          <button className="primaryButton" onClick={saveSnapshot} type="button">스냅샷 저장</button>
        </div>
        <textarea className="reportDraft" readOnly rows="12" value={reportBody} />
      </div>

      <div className="panel snapshotsPanel">
        <h2>저장된 스냅샷</h2>
        {snapshots.length === 0 ? <p className="muted">아직 저장된 스냅샷이 없습니다.</p> : null}
        {snapshots.map((snapshot) => (
          <article className="snapshotCard" key={snapshot.reportId}>
            <strong>{snapshot.title}</strong>
            <small>{snapshot.status} · {snapshot.createdAt}</small>
            <p>{snapshot.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Modal({ backdropClassName = "", children, className = "", hideCloseButton = false, hideHeader = false, onClose, subtitle, title }) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose?.();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);
    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [onClose]);

  return (
    <div className={`modalBackdrop ${backdropClassName}`}>
      <section className={`modalCard ${className}`}>
        {hideHeader ? null : (
          <div className="modalHeader">
            <div>
              <h2>{title}</h2>
              {subtitle ? <p className="muted">{subtitle}</p> : null}
            </div>
            {hideCloseButton ? null : <button className="iconButton" onClick={onClose} type="button">×</button>}
          </div>
        )}
        {children}
      </section>
    </div>
  );
}

function useStoredState(key, fallbackValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return fallbackValue;
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : fallbackValue;
    } catch (error) {
      return fallbackValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function buildMonthDays(referenceDate = today) {
  const days = [];
  const [year, month] = referenceDate.split("-").map(Number);
  const firstDay = new Date(Date.UTC(year, month - 1, 1));
  const startOffset = firstDay.getUTCDay();
  const calendarStart = new Date(firstDay);
  calendarStart.setUTCDate(firstDay.getUTCDate() - startOffset);

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(calendarStart);
    date.setUTCDate(calendarStart.getUTCDate() + index);
    const dateMonth = date.getUTCMonth() + 1;
    const dayNumber = String(date.getUTCDate());
    const dateString = [
      date.getUTCFullYear(),
      String(dateMonth).padStart(2, "0"),
      dayNumber.padStart(2, "0")
    ].join("-");
    days.push({
      date: dateString,
      dayNumber,
      inMonth: dateMonth === month
    });
  }
  return days;
}

function formatMonthTitle(dateString) {
  const [year, month] = dateString.split("-");
  return `${year}년 ${Number(month)}월`;
}

function sortByTime(a, b) {
  return a.startTime.localeCompare(b.startTime);
}

function isActiveLesson(lesson) {
  return (
    lesson?.date >= academyOperationalStartDate &&
    !["canceled", "deleted"].includes(lesson?.status ?? "scheduled")
  );
}

function activeLessonIdSet(lessons = []) {
  return new Set(lessons.filter(isActiveLesson).map((lesson) => lesson.lessonId));
}

function filterActiveLessons(lessons = []) {
  return lessons.filter(isActiveLesson);
}

function filterRecordsForLessons(records = [], lessons = []) {
  const lessonIds = activeLessonIdSet(lessons);
  return records.filter((record) => lessonIds.has(record.lessonId));
}

function filterHomeworksForLessons(homeworks = [], lessons = []) {
  const lessonIds = activeLessonIdSet(lessons);
  return homeworks.filter((homework) => homework.lessonId && lessonIds.has(homework.lessonId));
}

function pruneExpiredLessonDeletes(bundles = []) {
  const now = Date.now();
  return bundles.filter((bundle) => !bundle.expiresAt || Date.parse(bundle.expiresAt) > now);
}

function getLessonSortValue(lesson) {
  return `${lesson.date ?? ""}T${lesson.startTime || "00:00"}`;
}

function isSameLessonGroup(lesson, candidate) {
  if (lesson.classTemplateId && candidate.classTemplateId) {
    return lesson.classTemplateId === candidate.classTemplateId;
  }
  return lesson.className === candidate.className;
}

function findNextLessonForStudent(lessons, lesson, studentId) {
  const currentSortValue = getLessonSortValue(lesson);
  return [...lessons]
    .filter((candidate) => candidate.lessonId !== lesson.lessonId)
    .filter((candidate) => isSameLessonGroup(lesson, candidate))
    .filter((candidate) => candidate.studentIds?.includes(studentId))
    .filter((candidate) => getLessonSortValue(candidate) > currentSortValue)
    .sort((a, b) => getLessonSortValue(a).localeCompare(getLessonSortValue(b)))[0];
}

function findPreviousLessonForStudent(lessons, lesson, studentId) {
  const currentSortValue = getLessonSortValue(lesson);
  return [...lessons]
    .filter((candidate) => candidate.lessonId !== lesson.lessonId)
    .filter((candidate) => isSameLessonGroup(lesson, candidate))
    .filter((candidate) => candidate.studentIds?.includes(studentId))
    .filter((candidate) => getLessonSortValue(candidate) < currentSortValue)
    .sort((a, b) => getLessonSortValue(b).localeCompare(getLessonSortValue(a)))[0];
}

function createLinkedPreviousHomework(homeworks, lessons, lesson, student, sourceHomework) {
  const nextLesson = findNextLessonForStudent(lessons, lesson, student.studentId);
  if (!nextLesson) return null;

  const existing = homeworks.find(
    (homework) =>
      homework.lessonId === nextLesson.lessonId &&
      homework.studentId === student.studentId &&
      homework.homeworkType === "previous"
  );
  const title = sourceHomework.title ?? "";

  if (!title.trim() && !existing) return null;

  return {
    ...(existing ?? {}),
    homeworkId: existing?.homeworkId ?? `homework_previous_${nextLesson.date}_${student.studentId}`,
    lessonId: nextLesson.lessonId,
    studentId: student.studentId,
    title,
    subject: existing?.subject ?? sourceHomework.subject ?? "노션 수업 DB",
    homeworkType: "previous",
    totalProblems: existing?.totalProblems ?? sourceHomework.totalProblems ?? null,
    status: existing?.status ?? "verified",
    studentStatus: existing?.studentStatus ?? "not_started",
    teacherStatus: existing?.teacherStatus ?? "unverified",
    assignedDate: lesson.date,
    dueDate: existing?.dueDate ?? nextLesson.date,
    linkedFromLessonId: lesson.lessonId,
    linkedFromDate: lesson.date
  };
}

function createPreviousHomeworksFromPriorLesson(homeworks, lessons, lesson) {
  return (lesson.studentIds ?? [])
    .map((studentId) => {
      const previousLesson = findPreviousLessonForStudent(lessons, lesson, studentId);
      if (!previousLesson) return null;

      const sourceHomework = homeworks.find(
        (homework) =>
          homework.lessonId === previousLesson.lessonId &&
          homework.studentId === studentId &&
          homework.homeworkType === "next"
      );
      if (!sourceHomework?.title?.trim()) return null;

      const existing = homeworks.find(
        (homework) =>
          homework.lessonId === lesson.lessonId &&
          homework.studentId === studentId &&
          homework.homeworkType === "previous"
      );

      return {
        ...(existing ?? {}),
        homeworkId: existing?.homeworkId ?? `homework_previous_${lesson.date}_${studentId}`,
        lessonId: lesson.lessonId,
        studentId,
        title: sourceHomework.title,
        subject: existing?.subject ?? sourceHomework.subject ?? "노션 수업 DB",
        homeworkType: "previous",
        totalProblems: existing?.totalProblems ?? sourceHomework.totalProblems ?? null,
        status: existing?.status ?? "verified",
        studentStatus: existing?.studentStatus ?? "not_started",
        teacherStatus: existing?.teacherStatus ?? "unverified",
        assignedDate: previousLesson.date,
        dueDate: existing?.dueDate ?? lesson.date,
        linkedFromLessonId: previousLesson.lessonId,
        linkedFromDate: previousLesson.date
      };
    })
    .filter(Boolean);
}

function createLessonId(date, name) {
  return `lesson_${date}_${name.replaceAll(" ", "-").replaceAll("/", "-")}_${Date.now()}`;
}

function createSupplementLessonId(task) {
  return `lesson_supplement_${task.makeupTaskId}`;
}

function createSupplementLessonName(task, student) {
  return `${followUpTypeLabel(task.taskType)} · ${student.name}`;
}

function getSupplementLessonColor(taskType) {
  if (taskType === "homework_makeup") return "#172554";
  if (taskType === "retest") return "#ef4444";
  return "#7c3aed";
}

function isHomeworkMakeupTaskLesson(lesson, task) {
  return lesson?.lessonType === "makeup" && task?.taskType === "homework_makeup";
}

function normalizeHomeworkMakeupLessonColors(lessons = [], makeupTasks = []) {
  const homeworkMakeupLessonIds = new Set(
    makeupTasks
      .filter((task) => task.taskType === "homework_makeup" && task.linkedLessonId)
      .map((task) => task.linkedLessonId)
  );
  return lessons.map((lesson) => {
    const isHomeworkMakeupLesson =
      homeworkMakeupLessonIds.has(lesson.lessonId) ||
      (lesson.lessonType === "makeup" &&
        (lesson.lessonTopic?.includes("숙제보충") || lesson.className?.includes("숙제보충")));
    if (!isHomeworkMakeupLesson || lesson.color === getSupplementLessonColor("homework_makeup")) return lesson;
    return { ...lesson, color: getSupplementLessonColor("homework_makeup") };
  });
}

function normalizeGeneratedLessonControls(value = {}) {
  return {
    manualOverrideKeys: Array.isArray(value.manualOverrideKeys) ? [...new Set(value.manualOverrideKeys)] : [],
    sundayMakeupBlocks: value.sundayMakeupBlocks && typeof value.sundayMakeupBlocks === "object" && !Array.isArray(value.sundayMakeupBlocks)
      ? Object.fromEntries(
          Object.entries(value.sundayMakeupBlocks).filter(([, blocks]) => Array.isArray(blocks))
        )
      : {},
    suppressedKeys: Array.isArray(value.suppressedKeys) ? [...new Set(value.suppressedKeys)] : []
  };
}

function getGeneratedLessonKey(lesson = {}) {
  const sourceId = lesson.sourceSchoolEventId || "";
  if (sourceId.startsWith("generated:")) return sourceId;
  if (lesson.lessonType === "preExam" && sourceId) return `generated:pre_exam:${sourceId}`;
  return "";
}

function getPreExamCompatibilityKey(lesson = {}) {
  if (lesson.lessonType !== "preExam") return "";
  const sourceExamDate = lesson.sourceExamDate || addDaysInKorea(lesson.date, 1);
  const [schoolName = "", grade = ""] = String(lesson.className || "")
    .replace(/\s*직전수업\s*$/, "")
    .split(/\s+/);
  const schoolKey = normalizeSchoolName(schoolName);
  const gradeKey = compactCalendarLabel(normalizeGradeLabel(grade));
  if (!schoolKey || !gradeKey || !sourceExamDate) return "";
  return `preExam|${schoolKey}|${gradeKey}|${sourceExamDate}`;
}

function getGeneratedLessonIdentityKeys(lesson = {}) {
  return [getGeneratedLessonKey(lesson), getPreExamCompatibilityKey(lesson)].filter(Boolean);
}

function getGeneratedLessonPlanItemKey(item = {}) {
  return item.generatedKey || getGeneratedLessonKey(item.lesson);
}

function normalizeStudentIdList(studentIds = []) {
  return [...new Set(studentIds)].sort();
}

function areGeneratedLessonPersistedFieldsEqual(candidate = {}, existing = {}) {
  const fields = [
    "classTemplateId",
    "className",
    "lessonType",
    "lessonTopic",
    "sourceSchoolEventId",
    "sourceLabel",
    "date",
    "startTime",
    "endTime",
    "color",
    "status"
  ];
  const sameFields = fields.every((field) => String(candidate[field] ?? "") === String(existing[field] ?? ""));
  if (!sameFields) return false;
  return JSON.stringify(normalizeStudentIdList(candidate.studentIds ?? [])) === JSON.stringify(normalizeStudentIdList(existing.studentIds ?? []));
}

function createPreExamGeneratedKey(event = {}) {
  const sourceId = event.eventId || `${event.schoolName}_${event.grade}_${event.examSubject || event.subject || "math"}_${event.date}`;
  return `generated:pre_exam:${sourceId}`;
}

function getStudentsForSchoolCalendarEvent(students = [], event = {}) {
  const eventGrade = normalizeGradeLabel(event.grade || "");
  return students.filter((student) => {
    if (!isActiveStudent(student)) return false;
    const studentSchool = student.schoolName || "";
    const eventSchool = event.schoolName || "";
    if ((studentSchool || eventSchool) && !schoolNamesMatch(studentSchool, eventSchool, { allowBlank: false })) return false;
    if (!eventGrade) return true;
    return normalizeGradeLabel(student.grade || "") === eventGrade;
  });
}

function createPreExamLessonFromSchoolEvent(event = {}, students = []) {
  if (event.type !== "mathExam" || !event.date) return null;
  const lessonStudents = getStudentsForSchoolCalendarEvent(students, event);
  if (lessonStudents.length === 0) return null;
  const subject = event.examSubject || event.subject || "수학";
  const gradeLabel = event.grade ? `${event.grade} ` : "";
  const sourceId = event.eventId || `${event.schoolName}_${event.grade}_${subject}_${event.date}`;
  const generatedKey = createPreExamGeneratedKey({ ...event, eventId: sourceId });
  return {
    lessonId: createPreExamLessonId(sourceId),
    classTemplateId: "",
    className: `${event.schoolName || "학교 미입력"} ${gradeLabel}${subject} 직전수업`,
    lessonType: "preExam",
    lessonTopic: "직전대비",
    sourceSchoolEventId: sourceId,
    sourceExamDate: event.date,
    examCycle: event.examCycle || "",
    date: addDaysInKorea(event.date, -1),
    dayOfWeek: getDayKey(addDaysInKorea(event.date, -1)),
    startTime: "19:00",
    endTime: "21:00",
    color: "#7c3aed",
    teacherId: "instructor_owner_001",
    studentIds: lessonStudents.map((student) => student.studentId),
    status: "scheduled",
    generatedKey
  };
}

function getExamPrepIdFromDerivedMathEvent(sourceSchoolEventId = "", rows = []) {
  const sourceId = String(sourceSchoolEventId || "");
  if (!sourceId.startsWith("derived_math_")) return "";
  const sourceTail = sourceId.replace(/^derived_math_/, "");
  return rows.find((row) => sourceTail.startsWith(`${row.examPrepId}_`))?.examPrepId || "";
}

function inferMathExamLabelFromPreExamLesson(lesson = {}, row = {}) {
  const schoolName = String(row.schoolName || "").trim();
  const grade = normalizeGradeLabel(row.grade || "");
  const text = String(lesson.className || "")
    .replace(/\s*직전수업\s*$/, "")
    .replace(schoolName, "")
    .replace(grade, "")
    .trim();
  if (!text || /^\d+$/.test(text)) return "";
  if (["수학", "수학시험", row.subject].includes(text)) return "";
  return text;
}

function repairExamPrepRowsFromPersistedPreExamLessons(rows = [], lessons = []) {
  const preExamLessons = lessons.filter((lesson) =>
    lesson.lessonType === "preExam" &&
    lesson.date &&
    String(lesson.sourceSchoolEventId || "").startsWith("derived_math_")
  );
  if (!rows.length || !preExamLessons.length) return rows;

  return rows.map((row) => {
    const sourceLessons = preExamLessons.filter((lesson) =>
      getExamPrepIdFromDerivedMathEvent(lesson.sourceSchoolEventId, [row]) === row.examPrepId
    );
    if (!sourceLessons.length) return row;

    let didRepair = false;
    const entries = normalizeMathExamEntries(row, { includeBlank: true }).filter((entry) =>
      entry.date || entry.label || entry.subject || entry.grade || entry.sourceSchoolEventId
    );

    sourceLessons.forEach((lesson) => {
      const examDate = lesson.sourceExamDate || addDaysInKorea(lesson.date, 1);
      if (!examDate) return;
      const sourceEventId = lesson.sourceSchoolEventId || "";
      const entryId =
        sourceEventId.replace(`derived_math_${row.examPrepId}_`, "") ||
        `math_${safeIdPart(row.examPrepId || "exam")}_${safeIdPart(examDate)}`;
      const existingIndex = entries.findIndex((entry) =>
        (sourceEventId && entry.sourceSchoolEventId === sourceEventId) ||
        (entry.date === examDate && normalizeGradeLabel(entry.grade || row.grade) === normalizeGradeLabel(row.grade))
      );
      const previousEntry = existingIndex >= 0 ? entries[existingIndex] : null;
      const nextEntry = {
        ...(previousEntry ?? {}),
        id: previousEntry?.id || entryId,
        date: previousEntry?.date || examDate,
        grade: previousEntry?.grade || row.grade || "",
        subject: previousEntry?.subject || normalizeMathSubject(row.subject),
        label: previousEntry?.label || inferMathExamLabelFromPreExamLesson(lesson, row),
        sourceSchoolEventId: previousEntry?.sourceSchoolEventId || sourceEventId
      };
      if (existingIndex >= 0) {
        if (JSON.stringify(entries[existingIndex]) !== JSON.stringify(nextEntry)) {
          entries[existingIndex] = nextEntry;
          didRepair = true;
        }
        return;
      }
      entries.push(nextEntry);
      didRepair = true;
    });

    if (!didRepair) return row;
    const nextEntries = entries.filter((entry) => entry.date || entry.label);
    const nextMathExamDate = row.mathExamDate || syncPrimaryMathExamDate(nextEntries);
    return {
      ...row,
      mathExamDate: nextMathExamDate,
      mathExamDates: nextEntries
    };
  });
}

function getSundayDatesForExamPeriod(period = {}) {
  if (!period.endDate && !period.date) return [];
  const startDate = period.startDate || period.date || period.endDate;
  const endDate = period.endDate || period.date;
  const start = new Date(`${startDate}T00:00:00+09:00`);
  const end = new Date(`${endDate}T00:00:00+09:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return [];
  const day = end.getDay();
  const lastSunday = new Date(end);
  lastSunday.setDate(end.getDate() - day);
  const prepSundays = [3, 2, 1, 0].map((offset) => {
    const date = new Date(lastSunday);
    date.setDate(lastSunday.getDate() - offset * 7);
    return toKoreaDateString(date);
  });
  const inPeriodSundays = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    if (cursor.getDay() === 0) inPeriodSundays.push(toKoreaDateString(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return [...new Set([...prepSundays, ...inPeriodSundays])].sort();
}

function toKoreaDateString(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function buildSundayMakeupCandidates(rows = []) {
  const dateMap = new Map();
  rows.forEach((row) => {
    const period = parseDateRangeText(row.examPeriod);
    if (!period.date) return;
    getSundayDatesForExamPeriod(period).forEach((date) => {
      const key = `generated:sunday_makeup:${date}`;
      const block = {
        schoolName: row.schoolName || "학교 미입력",
        examCycle: row.examCycle || "",
        examPrepId: row.examPrepId,
        periodText: row.examPeriod
      };
      if (!dateMap.has(key)) dateMap.set(key, { date, key, blocks: [] });
      const entry = dateMap.get(key);
      if (!entry.blocks.some((item) => item.schoolName === block.schoolName && item.examCycle === block.examCycle)) {
        entry.blocks.push(block);
      }
    });
  });
  return [...dateMap.values()].map((entry) => {
    const schoolNames = entry.blocks.map((block) => block.schoolName).join(", ");
    return {
      generatedKey: entry.key,
      label: `${entry.date} 일요시험보강`,
      reason: `${schoolNames} 시험기간 전 일요보강`,
      lesson: {
        lessonId: `lesson_exam_sunday_makeup_${entry.date}`,
        classTemplateId: "",
        className: "일요시험보강",
        lessonType: "examSundayMakeup",
        lessonTopic: "일요시험보강",
        sourceSchoolEventId: entry.key,
        sourceLabel: entry.blocks.map((block) => `${block.schoolName} ${examCycleLabel(block.examCycle)}`).join(" · "),
        date: entry.date,
        dayOfWeek: "sun",
        startTime: "13:00",
        endTime: "18:00",
        color: "#0891b2",
        teacherId: "instructor_owner_001",
        studentIds: [],
        status: "scheduled",
        generatedKey: entry.key
      }
    };
  });
}

function buildGeneratedLessonPlan({ rows = [], lessons = [], students = [], controls = {} }) {
  const safeControls = normalizeGeneratedLessonControls(controls);
  const candidates = [];
  buildExamCalendarEvents(rows)
    .filter((event) => event.type === "mathExam")
    .forEach((event) => {
      const lesson = createPreExamLessonFromSchoolEvent(event, students);
      if (!lesson) return;
      const generatedKey = createPreExamGeneratedKey(event);
      candidates.push({
        generatedKey,
        label: `${event.schoolName || "학교 미입력"} ${event.grade || ""} ${event.examSubject || "수학"} 직전수업`,
        reason: `${event.date} 수학시험 전날`,
        lesson: { ...lesson, generatedKey }
      });
    });
  candidates.push(...buildSundayMakeupCandidates(rows));

  return candidates.map((candidate) => {
    const candidateKeys = new Set([candidate.generatedKey, ...getGeneratedLessonIdentityKeys(candidate.lesson)].filter(Boolean));
    const existing = lessons.find((lesson) =>
      getGeneratedLessonIdentityKeys(lesson).some((key) => candidateKeys.has(key)) ||
      lesson.sourceSchoolEventId === candidate.lesson.sourceSchoolEventId ||
      lesson.lessonId === candidate.lesson.lessonId
    );
    const suppressed = safeControls.suppressedKeys.includes(candidate.generatedKey);
    const manualOverride = existing && safeControls.manualOverrideKeys.includes(candidate.generatedKey);
    const needsUpdate = existing && !areGeneratedLessonPersistedFieldsEqual(candidate.lesson, existing);
    const status = suppressed ? "skipped" : manualOverride ? "protected" : !existing ? "create" : needsUpdate ? "update" : "synced";
    return {
      ...candidate,
      existingLesson: existing,
      status,
      lesson: existing && status === "update"
        ? {
            ...candidate.lesson,
            lessonId: existing.lessonId
          }
        : candidate.lesson
    };
  });
}

function formatKoreanDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "확정 기록 없음";
  return date.toLocaleString("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function addMinutesToTime(time, minutes) {
  const [hour = "0", minute = "0"] = String(time || "00:00").split(":");
  const base = new Date(`2026-01-01T${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:00+09:00`);
  base.setMinutes(base.getMinutes() + minutes);
  return `${String(base.getHours()).padStart(2, "0")}:${String(base.getMinutes()).padStart(2, "0")}`;
}

function getDayKey(date) {
  return ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][new Date(`${date}T00:00:00+09:00`).getDay()];
}

function getKoreaDateString(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function getKoreaDateTimeString(date = new Date()) {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function getLessonAlimtalkBaseScheduledDate(lesson, delayMinutes = 0) {
  const baseTime = getDayKey(lesson?.date) === "sat" ? "18:30" : "22:30";
  const baseDate = new Date(`${lesson?.date ?? getKoreaDateString()}T${baseTime}:00+09:00`);
  baseDate.setMinutes(baseDate.getMinutes() + delayMinutes);
  return baseDate;
}

function isLessonAlimtalkScheduleExpired(lesson, delayMinutes = 0, now = new Date()) {
  return getLessonAlimtalkBaseScheduledDate(lesson, delayMinutes).getTime() <= now.getTime();
}

function getLessonAlimtalkScheduledDate(lesson, delayMinutes = 0, options = {}) {
  const { allowPastFallback = true } = options;
  const baseDate = getLessonAlimtalkBaseScheduledDate(lesson, delayMinutes);
  const now = new Date();
  if (allowPastFallback && baseDate.getTime() <= now.getTime()) {
    baseDate.setTime(now.getTime() + Math.max(1, delayMinutes) * 60 * 1000);
  }
  return baseDate.toISOString();
}

function formatKoreaTimeLabel(dateString) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(new Date(dateString));
}

function addDaysInKorea(dateString, days) {
  const base = new Date(`${dateString}T00:00:00+09:00`);
  base.setUTCDate(base.getUTCDate() + days);
  return getKoreaDateString(base);
}

function getDateDiffInDays(fromDate, toDate) {
  const from = new Date(`${fromDate}T00:00:00+09:00`);
  const to = new Date(`${toDate}T00:00:00+09:00`);
  return Math.ceil((to.getTime() - from.getTime()) / (24 * 60 * 60 * 1000));
}

function formatDdayLabel(days) {
  if (days === 0) return "D-Day";
  return days > 0 ? `D-${days}` : `D+${Math.abs(days)}`;
}

function gradeMatchesStudent(rowGrade = "", studentGrade = "") {
  if (!rowGrade || !studentGrade) return true;
  const rowText = String(rowGrade).replace(/\s/g, "");
  const studentText = String(studentGrade).replace(/\s/g, "");
  const rowNumber = rowText.match(/\d/)?.[0] ?? "";
  const studentNumber = studentText.match(/\d/)?.[0] ?? "";
  return rowText.includes(studentText) || (rowNumber && studentNumber && rowNumber === studentNumber);
}

function schoolMatchesStudent(rowSchool = "", studentSchool = "") {
  return schoolNamesMatch(rowSchool, studentSchool);
}

function getStudentTopNotice(student, examPrepRows = [], schoolEvents = [], makeupTasks = []) {
  if (!student) return null;
  const examCandidates = examPrepRows
    .filter((row) => row.mathExamDate)
    .filter((row) => schoolNamesMatch(row.schoolName, student.schoolName))
    .filter((row) => gradeMatchesStudent(row.grade, student.grade))
    .map((row) => ({
      date: row.mathExamDate,
      detail: [row.schoolName, row.grade, row.subject || row.examSubject, examCycleLabel(row.examCycle)].filter(Boolean).join(" · "),
      title: "내신 수학시험",
      tone: "exam"
    }))
    .filter((item) => getDateDiffInDays(today, item.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (examCandidates[0]) {
    const days = getDateDiffInDays(today, examCandidates[0].date);
    return {
      ...examCandidates[0],
      title: `${examCandidates[0].title} ${formatDdayLabel(days)}`,
      detail: `${examCandidates[0].detail} · ${examCandidates[0].date}`
    };
  }

  const task = makeupTasks
    .filter((item) => item.studentId === student.studentId && item.scheduledDate)
    .filter((item) => getDateDiffInDays(today, item.scheduledDate) >= 0)
    .sort((a, b) => String(a.scheduledDate).localeCompare(String(b.scheduledDate)))[0];
  if (task) {
    const days = getDateDiffInDays(today, task.scheduledDate);
    return {
      title: `${followUpTypeLabel(task.taskType)} ${formatDdayLabel(days)}`,
      detail: `${task.scheduledDate} ${task.scheduledTime || ""} · ${task.sourceLabel || task.reason || "일정 확인"}`,
      tone: "followup"
    };
  }

  const event = schoolEvents
    .filter((item) => item.date)
    .filter((item) => schoolNamesMatch(item.schoolName, student.schoolName))
    .filter((item) => getDateDiffInDays(today, item.date) >= 0)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)))[0];
  if (event) {
    const days = getDateDiffInDays(today, event.date);
    const title = event.title || event.type || "다가오는 일정";
    return {
      title: `${title} ${formatDdayLabel(days)}`,
      detail: [event.schoolName, event.grade, event.date].filter(Boolean).join(" · "),
      tone: event.type === "vacation" ? "vacation" : "event"
    };
  }

  return null;
}

function buildExamPostTargetsForStudent(student, examPrepRows = [], submissions = [], examPostTargetStudentIds = {}) {
  if (!student) return [];
  return dedupeExamPrepRowsForDisplay(examPrepRows)
    .filter((row) => schoolMatchesStudent(row.schoolName, student.schoolName))
    .filter((row) => gradeMatchesStudent(row.grade, student.grade))
    .filter((row) => {
      const selectedStudentIds = examPostTargetStudentIds[row.examPrepId];
      return Array.isArray(selectedStudentIds) && selectedStudentIds.includes(student.studentId);
    })
    .map((row) => {
      const entries = normalizeMathExamEntries(row).filter((entry) => entry.date);
      const fallbackEntries = entries.length
        ? entries
        : row.mathExamDate
          ? [createMathExamEntry(row, 0)]
          : [];
      const sortedEntries = fallbackEntries.sort((a, b) => String(a.date).localeCompare(String(b.date)));
      const lastEntry = sortedEntries[sortedEntries.length - 1] ?? null;
      const firstEntry = sortedEntries[0] ?? null;
      const examDate = lastEntry?.date || row.mathExamDate || "";
      const targetId = `exam_post_${row.examPrepId}_${student.studentId}`;
      const subject = sortedEntries.length
        ? Array.from(new Set(sortedEntries.map((entry) => formatMathExamEntryLabel(row, entry)).filter(Boolean))).join(", ")
        : row.subject || "수학";
      const submission =
        submissions.find((item) => item.targetId === targetId) ??
        submissions.find((item) => item.studentId === student.studentId && item.examPrepId === row.examPrepId) ??
        null;
      const dueDate = examDate ? addDaysInKorea(examDate, 1) : "";
      const daysFromTodayToExam = examDate ? getDateDiffInDays(today, examDate) : 0;
      const isOverdue = dueDate ? getDateDiffInDays(dueDate, today) > 0 && !submission?.submittedAt : false;
      return {
        dueDate,
        daysFromTodayToExam,
        examDate,
        examPrepId: row.examPrepId,
        examCycle: row.examCycle || currentExamCycle,
        grade: firstEntry?.grade || row.grade || student.grade,
        isOverdue,
        isOpen: Boolean(examDate),
        label: examCycleLabel(row.examCycle || currentExamCycle),
        schoolName: row.schoolName || student.schoolName,
        studentId: student.studentId,
        studentName: student.name,
        subject,
        submission,
        targetId
      };
    })
    .sort((a, b) => String(a.submission?.submittedAt ? "1" : "0").localeCompare(String(b.submission?.submittedAt ? "1" : "0")) || b.examDate.localeCompare(a.examDate));
}

function createExamPostSubmissionPayload(target, student, values = {}) {
  return {
    targetId: target.targetId,
    submissionId: values.submissionId || `exam_post_submission_${Date.now()}_${student.studentId}`,
    studentId: student.studentId,
    studentName: student.name,
    grade: student.grade,
    schoolName: target.schoolName,
    examPrepId: target.examPrepId,
    examCycle: target.examCycle,
    examDate: target.examDate,
    dueDate: target.dueDate,
    subject: target.subject,
    score: values.score ?? "",
    feeling: values.feeling ?? "",
    difficulty: values.difficulty ?? "",
    preparation: values.preparation ?? "",
    goodPart: values.goodPart ?? "",
    strongUnit: values.strongUnit ?? "",
    regretReason: values.regretReason ?? "",
    regretReasons: Array.isArray(values.regretReasons) ? values.regretReasons : [],
    regretReasonOther: values.regretReasonOther ?? "",
    regretMoment: values.regretMoment ?? "",
    studyDifficulties: Array.isArray(values.studyDifficulties) ? values.studyDifficulties : [],
    studyDifficultyOther: values.studyDifficultyOther ?? "",
    neededMore: values.neededMore ?? "",
    academyHelp: values.academyHelp ?? "",
    academyFeedback: values.academyFeedback ?? "",
    nextGoal: values.nextGoal ?? "",
    changeForNextExam: values.changeForNextExam ?? "",
    wantedHelp: values.wantedHelp ?? "",
    freeComment: values.freeComment ?? "",
    fileMemo: values.fileMemo ?? "",
    fileAttachments: Array.isArray(values.fileAttachments) ? values.fileAttachments : [],
    teacherConfirmed: Boolean(values.teacherConfirmed),
    submittedAt: values.submittedAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

function getTemplateStartTime(template, date) {
  return getDayKey(date) === "sat" && template.saturdayStartTime ? template.saturdayStartTime : template.startTime;
}

function getTemplateEndTime(template, date) {
  return getDayKey(date) === "sat" && template.saturdayEndTime ? template.saturdayEndTime : template.endTime;
}

function calculateLateMinutes(lesson, now = new Date(), graceMinutes = 0) {
  if (!lesson?.date || !lesson?.startTime) return 0;
  const start = new Date(`${lesson.date}T${lesson.startTime}:00+09:00`);
  const diff = Math.floor((now.getTime() - start.getTime()) / 60000);
  return Math.max(0, diff - (Number(graceMinutes) || 0));
}

function createLessonStudentRecordId(lessonId, studentId) {
  return `lsr_${lessonId.replace("lesson_", "")}_${studentId}`;
}

function findLessonStudentRecord(records = [], lesson, student) {
  if (!lesson?.lessonId || !student?.studentId) return null;
  const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
  return findMatchingLessonStudentRecord(records, {
    lessonStudentRecordId: recordId,
    lessonId: lesson.lessonId,
    studentId: student.studentId
  });
}

function findMatchingLessonStudentRecord(records = [], record = {}) {
  if (!record?.lessonStudentRecordId && (!record?.lessonId || !record?.studentId)) return null;
  return (
    records.find((item) => record.lessonStudentRecordId && item.lessonStudentRecordId === record.lessonStudentRecordId) ??
    records.find((item) => item.lessonId === record.lessonId && item.studentId === record.studentId) ??
    null
  );
}

function upsertLessonStudentRecord(records = [], nextRecord = {}) {
  if (!nextRecord?.lessonStudentRecordId && (!nextRecord?.lessonId || !nextRecord?.studentId)) {
    return upsertById(records, nextRecord, "lessonStudentRecordId");
  }
  let didReplace = false;
  const nextRecords = [];
  records.forEach((record) => {
    const isSameRecord =
      (nextRecord.lessonStudentRecordId && record.lessonStudentRecordId === nextRecord.lessonStudentRecordId) ||
      (record.lessonId === nextRecord.lessonId && record.studentId === nextRecord.studentId);
    if (!isSameRecord) {
      nextRecords.push(record);
      return;
    }
    if (!didReplace) {
      nextRecords.push(nextRecord);
      didReplace = true;
    }
  });
  return didReplace ? nextRecords : [...records, nextRecord];
}

function createEmptyRecord(lesson, student) {
  return {
    lessonStudentRecordId: createLessonStudentRecordId(lesson.lessonId, student.studentId),
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    attendanceStatus: "pending",
    behaviorTag: "",
    checkInAt: "",
    checkInTime: "",
    checkOutAt: "",
    checkOutTime: "",
    homeworkStatus: "not_started",
    lessonMaterial: "",
    lessonProgress: "",
    preparationMemo: "",
    prepStudentVisible: false,
    prepParentVisible: false,
    prepStudentNotice: "",
    prepParentNotice: "",
    teacherComment: "",
    studentComment: "",
    assignmentStatus: "",
    notificationMutedParent: false,
    notificationMutedStudent: false,
    notificationMutedReason: "",
    needsMakeup: false,
    needsRetest: false
  };
}

function upsertById(items, nextItem, idKey) {
  return items.some((item) => item[idKey] === nextItem[idKey])
    ? items.map((item) => (item[idKey] === nextItem[idKey] ? nextItem : item))
    : [...items, nextItem];
}

function createReportBody(student, lesson, record) {
  return sampleData.reportTemplates[0].body
    .replace("{studentName}", student.name)
    .replace("{lessonDate}", lesson.date)
    .replace("{className}", lesson.className)
    .replace("{attendance}", attendanceLabels[record?.attendanceStatus ?? "pending"])
    .replace("{homework}", homeworkLabels[record?.homeworkStatus ?? "not_started"])
    .replace("{teacherComment}", record?.teacherComment || "아직 강사 코멘트가 입력되지 않았습니다.");
}

function getHomeworkBundle(homeworks, lesson, student) {
  const studentHomeworks = homeworks
    .filter((homework) => homework.studentId === student.studentId)
    .sort((a, b) => a.assignedDate.localeCompare(b.assignedDate));

  const previous =
    getLessonHomework(homeworks, lesson, student, "previous") ??
    studentHomeworks
      .filter((homework) => homework.assignedDate < lesson.date)
      .at(-1) ?? null;
  const today =
    getLessonHomework(homeworks, lesson, student, "next") ??
    studentHomeworks.find((homework) => homework.assignedDate === lesson.date || homework.lessonId === lesson.lessonId) ??
    null;

  return { previous, today };
}

function getLessonHomework(homeworks, lesson, student, homeworkType, lessons = []) {
  const directHomework =
    homeworks.find(
      (homework) =>
        homework.lessonId === lesson.lessonId &&
        homework.studentId === student.studentId &&
        homework.homeworkType === homeworkType
    ) ?? null;

  if (directHomework || homeworkType !== "previous") {
    return directHomework;
  }

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

  return linkedHomework
    ? {
        ...linkedHomework,
        linkedFromLessonId: previousLesson.lessonId,
        linkedFromDate: previousLesson.date,
        homeworkType: "previous"
      }
    : null;
}

function createAiReportDraft(student, lesson, record, homeworkBundle) {
  const attendance = formatAttendanceForMessage(record);
  const previousHomework = homeworkBundle.previous
    ? `${homeworkBundle.previous.title} (${homeworkLabels[homeworkBundle.previous.status] ?? homeworkBundle.previous.status})`
    : "지난 숙제 기록 없음";
  const todayHomework = homeworkBundle.today
    ? `${homeworkBundle.today.title} (${homeworkLabels[homeworkBundle.today.status] ?? homeworkBundle.today.status})`
    : "오늘 배정 숙제 없음";
  const comment = record?.teacherComment || "아직 데일리 코멘트가 입력되지 않았습니다.";

  return [
    `${student.name} 학생 데일리 리포트 초안입니다.`,
    `학교/학년: ${student.schoolName} ${student.grade}`,
    `강의 교재: ${student.textbook ?? "미지정"}`,
    `특이사항: ${student.specialNote ?? "없음"}`,
    `수업: ${lesson.date} ${lesson.className} (${lesson.startTime}-${lesson.endTime})`,
    `출결: ${attendance}`,
    `지난 숙제: ${previousHomework}`,
    `오늘 나간 숙제: ${todayHomework}`,
    `과제 상태: ${getAssignmentStatusParentMessage(record?.assignmentStatus ?? record?.incompleteHomework ?? "") || "선택 없음"}`,
    `수업 코멘트: ${comment}`,
    "위 내용은 AI API 호출을 붙이기 전의 모의 초안입니다. 실제 발송 전 원장 검수가 필요합니다."
  ].join("\n");
}

function isHomeworkOverdue(homework) {
  return (
    Boolean(homework.dueDate) &&
    homework.dueDate < today &&
    isHomeworkActionRequired(homework)
  );
}

function getHomeworkRecord(homework, records = []) {
  return records.find(
    (record) => record.lessonId === homework.lessonId && record.studentId === homework.studentId
  ) ?? null;
}

function getHomeworkLesson(homework, lessons = []) {
  return lessons.find((lesson) => lesson.lessonId === homework.lessonId && isActiveLesson(lesson)) ?? null;
}

function isHomeworkMakeupCandidate(homework, records = [], lessons = []) {
  if (!getHomeworkLesson(homework, lessons)) return false;
  if (homework.homeworkType !== "previous") return false;
  const record = getHomeworkRecord(homework, records);
  const assignmentStatus = record?.assignmentStatus ?? record?.incompleteHomework ?? "";
  const recordRequiresMakeup = assignmentStatus ? isAssignmentStatusHomeworkMakeupCandidate(assignmentStatus) : false;
  if (assignmentStatus) {
    return isHomeworkActionRequired(homework) && recordRequiresMakeup;
  }
  return (
    isHomeworkActionRequired(homework) &&
    ["missing", "partial"].includes(homework.teacherStatus)
  );
}

function getHomeworkMakeupReason(homework, records = []) {
  const record = getHomeworkRecord(homework, records);
  const assignmentStatus = record?.assignmentStatus ?? record?.incompleteHomework ?? "";
  if (assignmentStatus) {
    const normalizedStatus = normalizeAssignmentStatusValue(assignmentStatus);
    if (normalizedStatus === "not_done") return "미완료 숙제";
    if (normalizedStatus === "not_checked") return "미검사 숙제";
    return "일부 완료 숙제";
  }
  if (homework.teacherStatus === "missing") return "미완료 숙제";
  if (homework.teacherStatus === "partial") return "일부 완료 숙제";
  return "숙제보충 필요";
}

function isHomeworkResolved(homework) {
  return (
    homework.teacherStatus === "verified" ||
    homework.status === "verified" ||
    homework.studentStatus === "checked_done"
  );
}

function isHomeworkActionRequired(homework) {
  return Boolean(homework?.title?.trim()) && !isHomeworkResolved(homework);
}

function getHomeworkDedupeKey(homework) {
  return [
    homework.studentId ?? "",
    homework.assignedDate ?? "",
    String(homework.title ?? "").trim().replace(/\s+/g, " ")
  ].join("|");
}

function compareHomeworkDisplayPriority(current, candidate) {
  if (!current) return candidate;
  if (!current.dueDate && candidate.dueDate) return candidate;
  if (current.dueDate && !candidate.dueDate) return current;
  if ((candidate.dueDate ?? "") > (current.dueDate ?? "")) return candidate;
  return current;
}

function dedupeActionableHomeworks(homeworks) {
  const byKey = new Map();
  homeworks.filter(isHomeworkActionRequired).forEach((homework) => {
    const key = getHomeworkDedupeKey(homework);
    byKey.set(key, compareHomeworkDisplayPriority(byKey.get(key), homework));
  });
  return [...byKey.values()];
}

function calculateStreak(homeworks) {
  return homeworks.filter((homework) => getHomeworkCompletionCredit(homework) >= 1).length;
}

function getHomeworkCompletionCredit(homework) {
  const normalizedStatus = normalizeAssignmentStatusValue(homework?.assignmentStatus ?? homework?.incompleteHomework ?? "");
  if (normalizedStatus === "complete_thorough") return 1;
  if (normalizedStatus === "partial_80") return 0.8;
  if (normalizedStatus === "partial_50") return 0.5;
  if (["known_only", "too_hard", "answer_suspected"].includes(normalizedStatus)) return 0.5;
  if (["not_done", "not_checked"].includes(normalizedStatus)) return 0;
  if (homework?.teacherStatus === "verified" || homework?.status === "verified") return 1;
  if (homework?.teacherStatus === "partial") return 0.5;
  if (homework?.teacherStatus === "missing") return 0;
  if (homework?.studentStatus === "checked_done") return 1;
  return 0;
}

function formatHomeworkDoneCount(value) {
  if (Number.isInteger(value)) return String(value);
  return value.toFixed(1).replace(/\.0$/, "");
}

function calculateHomeworkStats(homeworks) {
  const total = homeworks.length;
  const done = homeworks.reduce((sum, homework) => sum + getHomeworkCompletionCredit(homework), 0);
  const calendarDays = {};
  homeworks.forEach((homework) => {
    const day = Number(String(homework.dueDate || homework.assignedDate || "").split("-")[2]);
    if (!day) return;
    calendarDays[day] = getHomeworkCompletionCredit(homework) > 0 ? "done" : "missed";
  });
  return {
    total,
    done,
    completionRate: total ? Math.round((done / total) * 100) : 0,
    perfectDays: homeworks.filter((homework) => getHomeworkCompletionCredit(homework) >= 1).length,
    calendarDays
  };
}

function calculateAttendanceStats(records = []) {
  const counts = records.reduce(
    (acc, record) => {
      const status = record.attendanceStatus || "pending";
      if (status === "present") acc.present += 1;
      if (status === "late") acc.late += 1;
      if (status === "absent") acc.absent += 1;
      if (status === "unexcused") acc.unexcused += 1;
      return acc;
    },
    { present: 0, late: 0, absent: 0, unexcused: 0 }
  );
  const total = counts.present + counts.late + counts.absent + counts.unexcused;
  const rate = (value) => (total ? Math.round((value / total) * 100) : 0);
  const calendarDays = {};
  records.forEach((record) => {
    const day = Number(String(record.lesson?.date || "").split("-")[2]);
    if (!day) return;
    if (record.attendanceStatus === "present") calendarDays[day] = "present";
    if (record.attendanceStatus === "late") calendarDays[day] = "late";
    if (record.attendanceStatus === "absent") calendarDays[day] = "absent";
    if (record.attendanceStatus === "unexcused") calendarDays[day] = "unexcused";
  });
  return {
    ...counts,
    total,
    attendanceRate: rate(counts.present + counts.late),
    presentRate: rate(counts.present),
    lateRate: rate(counts.late),
    absentRate: rate(counts.absent),
    unexcusedRate: rate(counts.unexcused),
    calendarDays
  };
}

function followUpTypeLabel(taskType) {
  const labels = {
    homework_makeup: "숙제보충",
    absence_makeup: "결석 보강",
    retest: "재시험"
  };
  return labels[taskType] ?? "보충관리";
}

const supplementStatusSteps = [
  { id: "draft", label: "일정 미확정" },
  { id: "scheduled", label: "일정 확정" },
  { id: "done", label: "보충 완료" }
];

const supplementMethodsByType = {
  homework_makeup: [
    { id: "stay_after", label: "남아서 하고 가기" },
    { id: "next_lesson", label: "다음시간까지" },
    { id: "arrival_makeup", label: "등원보충" }
  ],
  absence_makeup: [
    { id: "recorded_lecture", label: "녹강보강" },
    { id: "onsite_makeup", label: "현장보강" }
  ],
  retest: [
    { id: "onsite_retest", label: "현장 재시험" }
  ]
};

function supplementMethodOptions(taskType) {
  return supplementMethodsByType[taskType] ?? [];
}

function supplementDefaultMethod(taskType) {
  if (taskType === "homework_makeup") return "stay_after";
  if (taskType === "absence_makeup") return "onsite_makeup";
  return supplementMethodOptions(taskType)[0]?.id ?? "";
}

function supplementMethodLabel(task) {
  const methodId = task?.supplementMethod || supplementDefaultMethod(task?.taskType);
  return supplementMethodOptions(task?.taskType).find((option) => option.id === methodId)?.label ?? "방식 미정";
}

function getSupplementTaskSourceLabel(task) {
  if (task?.taskType === "homework_makeup") {
    return task.supplementHomeworkNote || task.sourceLabel || "";
  }
  return task?.sourceLabel || "";
}

function createNotificationDraft(task, students) {
  const student = students.find((item) => item.studentId === task.studentId);
  const studentName = student?.name ?? "학생";
  const scheduleText = [task.scheduledDate, task.scheduledTime].filter(Boolean).join(" ");
  const sourceLabel = getSupplementTaskSourceLabel(task);
  const sourceText = sourceLabel ? `${sourceLabel} ` : "";
  const progressMemo = normalizeMessageText(task.supplementProgressMemo);
  const progressMemoBlock = progressMemo ? `\n\n보충 메모:\n${progressMemo}` : "";
  const methodId = task.supplementMethod || supplementDefaultMethod(task.taskType);
  const absenceText = task.taskType === "absence_makeup" && task.absenceReason ? ` 결석사유는 ${task.absenceReason}입니다.` : "";

  if (task.taskType === "homework_makeup") {
    if (methodId === "next_lesson") {
      return `${studentName} 학생 숙제 보충 안내드립니다.\n\n다음 수업 전까지 ${sourceText}보충을 마무리할 수 있도록 안내하겠습니다.${progressMemoBlock}`;
    }
    if (methodId === "arrival_makeup") {
      return `${studentName} 학생 숙제 보충 안내드립니다.\n\n${scheduleText} 등원 후 ${sourceText}보충을 진행하겠습니다.${progressMemoBlock}`;
    }
    if (methodId === "stay_after") {
      return `${studentName} 학생 숙제 보충 안내드립니다.\n\n${scheduleText} 수업 후 남아서 ${sourceText}보충을 마무리하겠습니다.${progressMemoBlock}`;
    }
  }

  if (task.taskType === "absence_makeup") {
    if (methodId === "recorded_lecture") {
      return `${studentName} 학생 결석 보강 안내드립니다.\n\n${scheduleText}에 ${sourceText}결석 보강을 녹화 강의로 진행하겠습니다.${absenceText}${progressMemoBlock}`;
    }
    return `${studentName} 학생 결석 보강 안내드립니다.\n\n${scheduleText}에 ${sourceText}결석 보강을 현장에서 진행하겠습니다.${absenceText}${progressMemoBlock}`;
  }

  if (task.taskType === "retest") {
    return `${studentName} 학생 재시험 안내드립니다.\n\n${scheduleText}에 ${sourceText}재시험을 진행하겠습니다.${progressMemoBlock}`;
  }

  return `${studentName} 학생 ${followUpTypeLabel(task.taskType)} 안내드립니다.\n\n${scheduleText}에 ${sourceText}관련 일정을 진행하겠습니다.${progressMemoBlock}`;
}

function getSupplementTaskProgress(task, lessons = []) {
  if (!task) return { label: "미생성", tone: "muted", detail: "" };
  if (task.status === "done") return { label: "보충 완료", tone: "done", detail: "" };
  if (task.needsLessonResync) {
    return {
      label: "수업일지 재반영 필요",
      tone: "warning",
      detail: `${task.scheduledDate || "-"} ${task.scheduledTime || ""}`.trim()
    };
  }
  if (task.linkedLessonId) {
    const linkedLesson = lessons.find((lesson) => lesson.lessonId === task.linkedLessonId);
    if (linkedLesson?.status === "completed") return { label: "보충 완료", tone: "done", detail: linkedLesson.date };
    return {
      label: "수업일지 반영 완료",
      tone: "linked",
      detail: `${task.linkedLessonDate || linkedLesson?.date || "-"} ${task.linkedLessonTime || linkedLesson?.startTime || ""}`.trim()
    };
  }
  if (task.scheduledDate && task.scheduledTime) {
    return { label: "일정 입력됨", tone: "scheduled", detail: `${task.scheduledDate} ${task.scheduledTime}` };
  }
  return { label: "일정 미확정", tone: "draft", detail: "" };
}

function createAttendanceNotificationText(payload) {
  const attendanceNotificationLabels = { ...attendanceLabels, present: "등원" };
  const status = attendanceNotificationLabels[payload.attendanceStatus] ?? payload.attendanceStatus ?? "등원";
  return joinMessageBlocks([
    `[${academyBrandName} 출결 안내]`,
    `${payload.studentName} 학생이 ${formatAttendanceForMessage(payload) || status} 처리되었습니다.`,
    `수업: ${payload.lessonName}`
  ]);
}

function getHomeworkAction(homework) {
  if (isHomeworkResolved(homework)) return "해결됨";
  if (isHomeworkOverdue(homework)) return "숙제보충 필요";
  return "학생 체크 대기";
}

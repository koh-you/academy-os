import { Component, useEffect, useMemo, useRef, useState } from "react";
import ssenTypeIndex from "../../api/data/ssenTypeIndex.json";
import { sampleData } from "../shared/data/sampleData.js";

let pdfJsLoader = null;

function loadPdfJs() {
  if (!pdfJsLoader) {
    pdfJsLoader = Promise.all([
      import("pdfjs-dist"),
      import("pdfjs-dist/build/pdf.worker.mjs?url")
    ]).then(([pdfjsLib, workerModule]) => {
      pdfjsLib.GlobalWorkerOptions.workerSrc = workerModule.default;
      return pdfjsLib;
    });
  }
  return pdfJsLoader;
}

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
  examAnalyses: "academy-os.examAnalyses.v1",
  schoolEvents: "academy-os.schoolEvents.v1",
  studentQuestions: "academy-os.studentQuestions.v1",
  examPostSubmissions: "academy-os.examPostSubmissions.v1",
  examAnalysisFolders: "academy-os.examAnalysisFolders.v1",
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

class LessonJournalErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.error("Lesson journal render failed", error);
  }

  render() {
    if (this.state.error) {
      return this.props.fallback?.(this.state.error) ?? null;
    }
    return this.props.children;
  }
}

const dayLabels = {
  mon: "월",
  tue: "화",
  wed: "수",
  thu: "목",
  fri: "금",
  sat: "토",
  sun: "일"
};

const attendanceLabels = {
  pending: "대기",
  checkin: "등원",
  checkout: "하원",
  present: "등원",
  late: "지각",
  absent: "결석",
  excused: "인정결석"
};

const homeworkLabels = {
  not_started: "미시작",
  assigned: "배정",
  submitted: "제출",
  verified: "확인",
  partial: "일부",
  missing: "미완료",
  overdue: "밀림"
};

const assignmentStatusOptions = [
  { value: "", label: "선택" },
  { value: "complete_thorough", label: "완료" },
  { value: "partial_80", label: "80%완료" },
  { value: "partial_50", label: "50%완료" },
  { value: "known_only", label: "아는 것만 풂" },
  { value: "too_hard", label: "난이도 높음" },
  { value: "answer_suspected", label: "풀이 재확인" },
  { value: "not_done", label: "미완료" },
  { value: "not_checked", label: "미검사" }
];

const assignmentStatusLabels = Object.fromEntries(
  assignmentStatusOptions.map((option) => [option.value, option.label])
);

const assignmentStatusAliases = {
  "성실 완료": "complete_thorough",
  "완료": "complete_thorough",
  complete_easy: "complete_thorough",
  "쉬움": "complete_thorough",
  "80%": "partial_80",
  "80프로": "partial_80",
  "80% 완료": "partial_80",
  "80%완료": "partial_80",
  "50%": "partial_50",
  "50프로": "partial_50",
  "50% 완료": "partial_50",
  "50%완료": "partial_50",
  "아는것만품": "known_only",
  "아는 것만 품": "known_only",
  "아는 것만 풂": "known_only",
  "숙제난이도가높아 해결하지못함": "too_hard",
  "난이도 과함": "too_hard",
  "난이도 높음": "too_hard",
  "풀이가 없어서 다시확인 또는 테스트가 필요": "answer_suspected",
  "풀이 확인 필요": "answer_suspected",
  "풀이 재확인": "answer_suspected",
  "미완료": "not_done",
  "미검사": "not_checked"
};

const assignmentStatusParentMessages = {
  complete_thorough: "과제를 성실하게 완료했습니다.",
  partial_80: "과제의 약 80%를 수행했습니다. 남은 부분은 다음 시간에 같이 확인하도록 하겠습니다.",
  partial_50: "숙제를 많이 해오지 못했습니다. 남은 부분은 다음 시간에 같이 확인하고, 필요하면 추가 보충을 하도록 하겠습니다.",
  known_only: "풀기 쉬운 문항만 풀어온 것으로 보입니다. 필요하면 추가 보충을 하도록 하겠습니다.",
  too_hard: "과제 난이도가 높아 해결하지 못한 부분이 있었습니다. 과제 난이도를 조정해보도록 하겠습니다.",
  answer_suspected: "풀이 과정이 충분히 남아 있지 않아 이해 여부를 다시 확인하거나 간단한 테스트로 점검할 예정입니다.",
  not_done: "과제를 해오지 못했습니다. 필요하면 추가 보충을 하도록 하겠습니다.",
  not_checked: "과제를 가져오지 못해 검사하지 못했습니다. 다음 시간에 같이 확인하도록 하겠습니다."
};

const assignmentStatusStudentMessages = {
  complete_thorough: "과제를 꼼꼼하게 잘 해왔어. 열심히 하느라 수고했어~!",
  partial_80: "과제의 약 80%를 해왔어. 다음 시간부터는 깔끔하게 다 풀어오도록 하자.",
  partial_50: "숙제를 많이 해오지 못했어. 남은 부분은 다음 시간에 같이 확인하고, 필요하면 추가 보충으로 마무리하자.",
  known_only: "쉬운 문제만 풀고 넘어가면 실력이 잘 늘지 않아. 어려운 문제를 고민한 흔적까지 남겨와야 해.",
  too_hard: "난이도가 높아서 풀기 어려웠을 것 같아. 난이도를 좀 조정해보자.",
  answer_suspected: "풀이 과정이 충분히 남아 있지 않아 이해 여부를 다시 확인할게. 숙제는 꼭 풀이 과정을 남겨오도록 해.",
  not_done: "과제를 못 해왔어. 오늘 나간 과제까지 다음 시간에 같이 검사받고, 다 못 끝내면 추가 등원보충을 해야 할 수도 있어.",
  not_checked: "과제를 가져오지 못해서 검사하지 못했어. 다음 시간에 같이 확인하자."
};

const examPostFeelingOptions = ["기대보다 잘 봤다", "비슷했다", "기대에 못 미쳤다", "모르겠다"];
const examPostScaleOptions = Array.from({ length: 11 }, (_, index) => String(index));
const examPostRegretReasonOptions = ["아는데 실수했다", "준비가 부족했다", "시간이 부족했다", "멘탈이 흔들렸다", "컨디션 문제", "기타"];
const examPostStudyDifficultyOptions = ["개념이 헷갈린다", "문제가 안풀린다", "공부 의지가 안 생긴다", "시간이 없다", "기타"];
const examPostAcademyHelpOptions = ["많이 도움됐다", "어느 정도 됐다", "잘 모르겠다", "별로 도움이 안 됐다"];

function normalizeAssignmentStatusValue(value) {
  const trimmedValue = String(value ?? "").trim();
  return assignmentStatusAliases[trimmedValue] ?? trimmedValue;
}

function getAssignmentStatusParentMessage(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  return assignmentStatusParentMessages[normalizedValue] ?? assignmentStatusLabels[normalizedValue] ?? "";
}

function getAssignmentStatusStudentMessage(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  return assignmentStatusStudentMessages[normalizedValue] ?? assignmentStatusLabels[normalizedValue] ?? "";
}

function getAssignmentStatusMessage(audience, value) {
  return audience === "student" ? getAssignmentStatusStudentMessage(value) : getAssignmentStatusParentMessage(value);
}

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

function getHomeworkStatusFromAssignmentStatus(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  if (normalizedValue === "complete_thorough") {
    return { status: "verified", teacherStatus: "verified" };
  }
  if (normalizedValue === "not_done") {
    return { status: "missing", teacherStatus: "missing" };
  }
  if (["partial_80", "partial_50"].includes(normalizedValue)) {
    return { status: "partial", teacherStatus: "partial" };
  }
  return { status: "assigned", teacherStatus: "unverified" };
}

function isAssignmentStatusHomeworkMakeupCandidate(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  return ["not_done", "partial_80", "partial_50", "not_checked"].includes(normalizedValue);
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

function getSaveButtonLabel(saveState) {
  if (saveState === "saving") return "저장 중";
  if (saveState === "failed") return "다시 저장";
  if (saveState === "saved") return "저장 완료";
  return "저장";
}

function getCommentSendState(sendStatus = "") {
  const normalizedStatus = normalizeMessageText(sendStatus);
  if (!normalizedStatus) return "";
  if (normalizedStatus === "내용 없음") return "";
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
  const sendState = getCommentSendState(sendStatus);
  if (sendState === "failed") return "발송 실패";
  if (sendState === "pending") return sendStatus;
  if (sendState === "sent") return sendStatus;
  return normalizeMessageText(comment) ? "작성됨 · 발송 전" : "미작성";
}

function formatNotificationJobStatus(job) {
  if (!job) return "없음";
  if (job.status === "scheduled") return `예약 중 · ${formatKoreaTimeLabel(job.scheduledAt)}`;
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
      createMessageLine("🏫 출결", formatAttendanceForMessage(attendanceSample)),
      createMessageLine("📚 수업", base.lessonName)
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

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("파일을 읽지 못했습니다."));
    reader.readAsDataURL(file);
  });
}

function canvasToVisionImageDataUrl(sourceCanvas, maxDimension = 1600) {
  if (!sourceCanvas?.width || !sourceCanvas?.height) {
    throw new Error("렌더링된 페이지 이미지를 찾지 못했습니다.");
  }
  const scale = Math.min(1, maxDimension / Math.max(sourceCanvas.width, sourceCanvas.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(sourceCanvas.width * scale));
  canvas.height = Math.max(1, Math.round(sourceCanvas.height * scale));
  const context = canvas.getContext("2d");
  context.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.86);
}

async function renderPdfPageToVisionImageDataUrl(pdfDocument, pageNumber, scale = 1.35) {
  const page = await pdfDocument.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  const outputScale = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.width = Math.floor(viewport.width * outputScale);
  canvas.height = Math.floor(viewport.height * outputScale);
  const context = canvas.getContext("2d");
  context.setTransform(outputScale, 0, 0, outputScale, 0, 0);
  const renderTask = page.render({ canvasContext: context, viewport });
  await renderTask.promise;
  const dataUrl = canvasToVisionImageDataUrl(canvas);
  canvas.width = 1;
  canvas.height = 1;
  return dataUrl;
}

function imageElementToVisionImageDataUrl(imageElement, maxDimension = 1600) {
  const width = imageElement?.naturalWidth || imageElement?.width;
  const height = imageElement?.naturalHeight || imageElement?.height;
  if (!width || !height) {
    throw new Error("이미지 원본을 아직 불러오지 못했습니다.");
  }
  const scale = Math.min(1, maxDimension / Math.max(width, height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(width * scale));
  canvas.height = Math.max(1, Math.round(height * scale));
  const context = canvas.getContext("2d");
  context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.86);
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

async function uploadExamAnalysisSourceFile(file, analysis) {
  const dataUrl = await readFileAsDataUrl(file);
  const result = await postJson("/api/exam-analysis-sources", {
    dataUrl,
    fileName: file.name,
    fileType: file.type,
    analysisId: analysis.examAnalysisId,
    schoolName: analysis.schoolName,
    grade: analysis.grade,
    subject: analysis.subject,
    examName: analysis.examName,
    examDate: analysis.examDate
  });
  return result.file;
}

async function requestExamQuestionCropDraft(payload) {
  const result = await postJson("/api/ai/exam-question-crops", payload);
  return result.result;
}

function getExamPostFileOpenUrl(file) {
  if (file?.signedUrl) return file.signedUrl;
  if (!file?.storagePath) return "";
  return apiUrl(`/api/exam-post-files/open?bucket=${encodeURIComponent(file.bucketId || "exam-submissions")}&path=${encodeURIComponent(file.storagePath)}`);
}

function getExamAnalysisSourceOpenUrl(file) {
  if (file?.storagePath) {
    return apiUrl(`/api/exam-analysis-sources/open?bucket=${encodeURIComponent(file.bucketId || "exam-analysis-sources")}&path=${encodeURIComponent(file.storagePath)}`);
  }
  if (file?.signedUrl) return file.signedUrl;
  return "";
}

function getExamAnalysisSourceRenderUrl(file) {
  if (!file?.storagePath) return file?.signedUrl || "";
  return apiUrl(`/api/exam-analysis-sources/file?bucket=${encodeURIComponent(file.bucketId || "exam-analysis-sources")}&path=${encodeURIComponent(file.storagePath)}`);
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
  return rows.map(normalizeExamPrepRowCycle);
}

function createParentLoginId(student) {
  return `parent-${student.loginId}`;
}

function getDemoStudent(students) {
  return students.find((student) => student.studentId === "student_mwf710_001") ?? students[0];
}

function createDefaultExamAnalysisPrompt() {
  return [
    `역할: ${academyBrandName}의 학교별 내신 시험분석 협업 AI`,
    "",
    "[웹앱의 목적]",
    "이 웹앱의 목적은 GPT 대화창에 시험지를 넣고 한 번에 글을 받는 것이 아니다.",
    "학교별·학년별·고사별 분석지를 누적하고, AI 1차 분석 → 강사 검수 → 문항별 코멘트 → 표/다이어그램 → 최종 산출물로 이어지는 업무 흐름을 만드는 것이다.",
    "AI는 최종 판단자가 아니라 1차 구조화 담당자다. 최종 산출물은 AI 분석과 강사 인사이트가 결합된 결과여야 한다.",
    "",
    "[입력 자료 우선순위]",
    "1. 시험지 원본/OCR에서 확인되는 사실을 최우선으로 사용한다.",
    "2. 시험관리 탭 데이터가 있으면 특이사항, 시험 범위, 부교재, 시험 일정, 시험 후 총평을 반드시 반영한다.",
    "3. 시험관리 탭 데이터가 없거나 신규 학교이면 학교·학년·과목·시험명 메타데이터와 시험지 원본만 사용한다.",
    "4. 시험관리 데이터와 시험지 원본이 충돌하면 단정하지 말고 '확인 필요'로 표시한다.",
    "5. OCR이 깨진 문자, 의미 없는 조합, 불확실한 문항번호/배점/단원명은 최종 문장에 그대로 쓰지 말고 확인 필요 항목으로 모은다.",
    "",
    "[분기 규칙]",
    "입력 자료가 1개년 기출이면 해당 시험 1회분을 깊게 분석한다.",
    "- 문항분석표, 단원별 출제, 킬러·준킬러, 변형·연계 문항, 학생 대비 전략을 우선 만든다.",
    "- 각 문항의 단원, 유형, 난이도, 역할, 태그, 출처 후보, 학생 오답 가능성, 강사 검수 포인트를 정리한다.",
    "- 배점은 해당 시험 안에서 어느 문항군이 점수에 영향을 주는지 문장으로 설명한다.",
    "",
    "입력 자료가 3개년 기출이면 연도별 변화와 반복 패턴을 우선 분석한다.",
    "- 매년 반복되는 단원, 새로 늘어난 단원, 줄어든 단원, 격년 출제 단원, 킬러 위치 변화, 서술형 변화, 부교재 반영 방식 변화를 비교한다.",
    "- 문항 수가 달라졌다면 같은 배점이라도 시험 안에서의 비중이 달라질 수 있음을 설명한다.",
    "- 별도 상대배점 차트는 만들지 않는다. 중요도 변화는 문장으로만 설명한다.",
    "- 22 개정교육과정 때문에 달라질 수 있는 부분은 '변화 가능성' 또는 '추가 확인 필요'로 구분한다.",
    "",
    "[문항별 분석 기준]",
    "시험지 첫 페이지 또는 상단의 문항 구성표를 먼저 읽고 questionComposition에 총 문항 수와 선택형/서술형 구성을 정리한다.",
    "시험지 원본이 2개 이상이면 각 원본 첫 장 기준 문항 메타데이터를 sourceCompositions에 sourceId별로 따로 정리한다.",
    "questionComposition은 문항 카드 생성 전 강사가 확인하는 초안이다. questionItems 배열 길이와 별개로 총 문항 수의 근거를 분리해서 쓴다.",
    "각 문항에 대해 가능한 범위에서 다음 항목을 정리한다.",
    "- 문항 번호",
    "- 페이지",
    "- 배점",
    "- 단원",
    "- 유형",
    "- 쎈 주유형/보조유형",
    "- 난이도",
    "- 역할",
    "- 태그",
    "- 출처 가능성",
    "- 유사문항 필요 여부",
    "- 유사문항 출처",
    "- 숫자변형/조건변형/유사유형 구분",
    "- OCR/문항 조건 요약",
    "- 학생이 틀릴 만한 지점",
    "- 강사가 확인해야 할 점",
    "- 대비 전략 후보",
    "AI 1차 분석 단계에서 문항 번호, 페이지, 배점, 쎈 기준 유형, 난이도, 단원은 웹앱 문항분석표의 questionItems 배열에 반드시 초안으로 채운다.",
    "쎈 유형은 강사가 수동 입력하기 전에 AI가 먼저 자동 매칭한다. 쎈 유형 기준표가 제공되면 문항 조건, 단원, 풀이 행동을 기준표와 비교해 questionItems.ssenTypeTags에 주유형(primary) 1개와 필요 시 보조유형(secondary) 1~2개를 typeCode/typeName/unitName/confidence/reason으로 넣는다.",
    "정확히 확정하기 어렵더라도 가장 가까운 후보를 confidence '중' 또는 '하'로 제안하고, 정말 판별 불가능한 경우에만 빈 배열로 둔다.",
    "AI가 읽은 전체 문항 수는 questionComposition.total에 넣고, 근거 문구는 questionComposition.evidence에 적는다.",
    "유사문항 본문은 웹앱에 넣지 않는다. 대신 questionItems의 similarProblemNeeded, similarProblemSource, similarProblemRelation에 메타데이터만 입력한다.",
    "유사문항 분석지나 교과서/부교재/EBS/모의고사 연계가 확인되면 숫자변형문항, 조건변형문항, 유사유형문항, 교과서 연계, 부교재 연계, EBS 연계, 모의고사 연계 태그로 기록한다.",
    "단원명/배점/난이도를 원본에서 확정할 수 없으면 빈칸으로 두지 말고 '확인 필요'로 표시한다.",
    "여러 해 시험지가 함께 들어오면 questionItems는 웹앱에서 현재 선택한 시험지/연도 1회분의 전체 문항 수만큼 작성하고, 3개년 반복/증감/변화는 텍스트 분석 필드에 정리한다.",
    "일부 페이지만 보이거나 OCR 일부만 있더라도 확인 가능한 전체 문항 수를 기준으로 questionItems를 만들고, 모르는 값은 '확인 필요'로 둔다.",
    "",
    "[문항 태그 기준]",
    "- 기본문항: 반드시 맞혀야 하는 개념 확인 문항",
    "- 실수문항: 계산, 부호, 조건 누락, 그래프 해석 등 확인할 위험이 있는 문항",
    "- 주요문항: 수업에서 반드시 다루거나 변형 관계 분석, 오답 원인 정리가 필요한 문항",
    "- 1등급 변별문항: 상위권 점수 차이를 만드는 고난도/킬러 문항",
    "- 2등급 변별문항: 중상위권을 가르는 준킬러 또는 조건 해석형 문항",
    "- 숫자변형문항/조건변형문항/유사유형문항: 유사문항 분석지에서 변형 관계가 확인된 문항",
    "- 교과서 연계/부교재 연계/EBS 연계/모의고사 연계: 출처 메타데이터가 확인된 문항",
    "",
    "[표와 다이어그램 산출 의도]",
    "AI는 웹앱에서 강사가 검수할 수 있도록 다음 표의 초안을 만든다.",
    "1. 문항분석표",
    "2. 단원별 출제표",
    "3. 쎈 유형별 분류표",
    "4. 부교재·유사문항 활용표",
    "5. 학생 대비전략표",
    "또한 대비전략 흐름은 시험 범위 확인 → 문항별 검수 → 변형 관계 분석 → 변별 문항 훈련 → 학생 수준별 보강 순서로 정리한다.",
    "",
    "[작성 원칙]",
    "- 시험지를 설명하는 데서 끝내지 말고, 학생·강사가 다음 행동을 결정할 수 있게 분석한다.",
    "- 각 항목은 가능하면 사실 근거 → 점수에 미친 영향 → 다음 학습 행동 순서로 쓴다.",
    "- '어려웠다', '중요하다', '복습이 필요하다' 같은 추상 문장으로 끝내지 않는다.",
    "- 확인되지 않은 문항번호, 배점, 단원명, 출처를 지어내지 않는다.",
    "- 부교재, 학교 프린트, 모의고사, 수능/평가원 원문항과 실제 출제 문항의 변형 관계가 보이면 반드시 표시한다.",
    "- 블로그나 인스타 초안은 AI 홍보문처럼 쓰지 말고, 학교별 시험을 실제로 본 강사의 판단이 들어갈 수 있는 구조로 쓴다.",
    "- 강사가 문항별 코멘트와 현장 체감을 추가할 수 있도록, AI 결과는 검수 가능한 초안으로 쓴다.",
    "",
    "[최종 출력 방향]",
    "1. AI 분석 결과: 시험 한 줄 총평, 시험 구조, 단원별 출제, 문항 유형, 킬러/준킬러, 변형·연계 분석, 확인 필요 항목",
    "2. 문항분석표 초안: questionItems 배열로 문항별 번호, 페이지, 배점, 단원, 유형, 쎈 유형 태그, 난이도, 역할, 태그, 출처 후보, 유사문항 메타데이터, 코멘트 후보를 반환",
    "3. 강사 인사이트 입력 가이드: 어떤 문항에 코멘트를 달아야 하는지, 어떤 문항을 크롭해서 슬라이드화하면 좋은지 제안",
    "4. 학생 대비 전략: 상위권, 중위권, 하위권으로 나누어 작성",
    "5. 재가공 핵심 메시지: 학생에게 필요한 정보, 블로그/인스타로 쓸 수 있는 정보"
  ].join("\n");
}

const defaultExamOutputLayoutChoices = Object.freeze({
  teacher: "A",
  student: "A",
  blog: "A",
  instagram: "A"
});

function normalizeExamOutputLayoutChoices(choices = {}) {
  const safeChoices = choices && typeof choices === "object" && !Array.isArray(choices) ? choices : {};
  return Object.fromEntries(
    Object.entries(defaultExamOutputLayoutChoices).map(([key, defaultCode]) => {
      const code = String(safeChoices[key] || defaultCode).trim().toUpperCase();
      return [key, ["A", "B", "C"].includes(code) ? code : defaultCode];
    })
  );
}

function createDefaultExamAnalysis(examPrepRow = {}) {
  const schoolName = examPrepRow.schoolName || "";
  const grade = examPrepRow.grade || "";
  const subject = examPrepRow.subject || "";
  const examName = examPrepRow.examName || (examPrepRow.examCycle ? examCycleLabel(examPrepRow.examCycle) : "");
  const analysisFolderId = examPrepRow.analysisFolderId || examPrepRow.folderId || createExamAnalysisFolderId({
    schoolName,
    grade,
    examName,
    examCycle: examPrepRow.examCycle || "",
    subject
  });
  const nowIso = new Date().toISOString();
  return {
    examAnalysisId: examPrepRow.examAnalysisId || `exam_analysis_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    analysisFolderId,
    createdAt: examPrepRow.createdAt || nowIso,
    updatedAt: nowIso,
    examPrepId: examPrepRow.examPrepId || "",
    schoolName,
    grade,
    subject,
    examCycle: examPrepRow.examCycle || "",
    examName,
    examDate: "",
    sourceFileUrl: "",
    sourceFiles: [],
    sourceUploadStatus: "",
    rawExamText: "",
    questionItems: [],
    questionTargetCount: 0,
    questionTargetCountsBySource: {},
    questionComposition: null,
    questionCompositionsBySource: {},
    aiProvider: "auto",
    aiModel: "server-default",
    aiStatus: "대기",
    aiLastRunAt: "",
    aiError: "",
    aiPrompt: createDefaultExamAnalysisPrompt(),
    oneLineSummary: "AI 분석을 시작하면 이번 시험의 핵심 성격이 한 문장으로 정리됩니다.",
    examStructure: "문항수, 객관식/서술형 구성, 배점, 시간 압박, 작년 대비 변화가 정리됩니다.",
    aiOverview: "시험지 원본을 넣으면 문항수, 난이도, 출제 특징이 정리됩니다.",
    unitDistribution: "단원별 문항수와 배점이 여기에 정리됩니다.",
    typeClassification: "기본/준킬러/킬러 유형과 점수 영향이 여기에 정리됩니다.",
    killerProblems: "킬러/준킬러 문항 번호, 핵심 함정, 풀이 접근이 여기에 정리됩니다.",
    fiveCorePatterns: "시험 전 확인할 5대 핵심 출제 패턴이 여기에 정리됩니다.",
    sourceCheckNotes: "OCR이 깨진 부분, 문항번호/배점 확인 필요 항목이 여기에 정리됩니다.",
    insightSummary: "이번 시험 출제 패턴 한 줄:\n작년 대비 변화:\n학생들이 가장 많이 틀린 유형:\n다음 시험 예측 한 줄:\n\n부연:",
    insightUnits: "단원명:\n출제 빈도: 매년 / 격년 / 신유형 / 감소\n학생 정답률 체감: 상 / 중 / 하\n핵심 키워드:\n\n부연:",
    insightKiller: "문항 번호 / 배점:\n출제 단원:\n유형: 기존 반복 / 신유형 / 변형\n핵심 함정 한 줄:\n\n부연:",
    insightStudentErrors: "실제 학생들이 많이 한 실수:\n계산/조건해석/개념연결 중 어디에서 무너졌는지:\n다음 수업에서 확인할 행동:\n\n부연:",
    insightPrediction: "다음 시험에 다시 나올 가능성이 높은 유형:\n줄어들 가능성이 있는 단원:\n학부모에게 설명할 예측 한 줄:\n\n부연:",
    insightDirection: "이 학교 학생들에게 가장 강조할 점:\n실수 줄이는 핵심 팁:\n누적테스트/보충에 넣을 유형:\n\n부연:",
    studentAnalysisDraft: "학생용 분석지는 A 총평 + B 단원별 인사이트 + D 학습 방향을 중심으로 생성합니다.",
    blogDraft: "블로그 초안은 학부모가 읽기 쉬운 톤으로 시험 개요, 킬러문항, 학습 방향을 연결합니다.",
    instagramDraft: `1장 표지\n2장 시험 한 줄 총평\n3장 출제 분포\n4장 킬러문항\n5장 변형·연계 분석\n6장 학습 방향\n7장 ${academyBrandName} 안내`,
    outputLayoutChoices: normalizeExamOutputLayoutChoices(),
    pipelineStage: "원본 입력"
  };
}

const examQuestionDifficultyOptions = ["확인 필요", "하", "중하", "중", "중상", "상"];
const examQuestionRoleOptions = ["기본", "실수유도", "앞번호 고난도", "준킬러", "킬러", "서술형 변별", "확인 필요"];
const examQuestionSourceOptions = ["확인 필요", "교과서", "부교재", "EBS", "학교 프린트", "모의고사", "수능/평가원", "자체 변형", "기타"];
const examQuestionTypeOptions = ["객관식", "단답형", "서술형", "논술형", "확인 필요"];
const similarProblemNeedOptions = ["확인 필요", "필요", "불필요"];
const similarProblemRelationOptions = ["확인 필요", "숫자변형", "조건변형", "유사유형", "기타"];
const examQuestionTagOptions = [
  "기본문항",
  "실수문항",
  "주요문항",
  "1등급 변별문항",
  "2등급 변별문항",
  "숫자변형문항",
  "조건변형문항",
  "유사유형문항",
  "교과서 연계",
  "부교재 연계",
  "EBS 연계",
  "모의고사 연계"
];
const examQuestionInsightTags = ["주요문항", "1등급 변별문항", "2등급 변별문항"];

function normalizeExamQuestionTag(tag = "") {
  const text = String(tag ?? "").trim();
  if (!text) return "";
  const aliases = {
    "기본 문항": "기본문항",
    "기본문항": "기본문항",
    "실수 유도": "실수문항",
    "실수유도": "실수문항",
    "실수 많음": "실수문항",
    "실수문항": "실수문항",
    "분석 필요": "주요문항",
    "디벨럽 가능": "주요문항",
    "출처 비교": "주요문항",
    "수업 확장": "주요문항",
    "주요문항": "주요문항",
    "변별 문항": "1등급 변별문항",
    "킬러": "1등급 변별문항",
    "1등급 변별문항": "1등급 변별문항",
    "준킬러": "2등급 변별문항",
    "2등급 변별문항": "2등급 변별문항",
    "숫자변형": "숫자변형문항",
    "숫자변형문항": "숫자변형문항",
    "조건변형": "조건변형문항",
    "조건변형문항": "조건변형문항",
    "유사유형": "유사유형문항",
    "유사문항": "유사유형문항",
    "유사유형문항": "유사유형문항",
    "교과서": "교과서 연계",
    "교과서 연계": "교과서 연계",
    "부교재": "부교재 연계",
    "부교재 연계": "부교재 연계",
    "EBS": "EBS 연계",
    "EBS 연계": "EBS 연계",
    "모의고사": "모의고사 연계",
    "모의고사 연계": "모의고사 연계"
  };
  return aliases[text] || (examQuestionTagOptions.includes(text) ? text : "");
}

function normalizeExamQuestionTags(tags = []) {
  const rawTags = Array.isArray(tags) ? tags : String(tags || "").split(/[,/·]/);
  return Array.from(new Set(rawTags.map(normalizeExamQuestionTag).filter(Boolean)));
}

function getDerivedExamQuestionMetadataTags(seed = {}) {
  const tags = [];
  const relationTagMap = {
    "숫자변형": "숫자변형문항",
    "조건변형": "조건변형문항",
    "유사유형": "유사유형문항"
  };
  const sourceTagMap = {
    "교과서": "교과서 연계",
    "부교재": "부교재 연계",
    "EBS": "EBS 연계",
    "모의고사": "모의고사 연계"
  };
  if (relationTagMap[seed.similarProblemRelation]) tags.push(relationTagMap[seed.similarProblemRelation]);
  if (seed.similarProblemNeeded === "필요" && !relationTagMap[seed.similarProblemRelation]) tags.push("유사유형문항");
  if (sourceTagMap[seed.source]) tags.push(sourceTagMap[seed.source]);
  for (const sourceText of [seed.similarProblemSource, seed.source]) {
    const text = String(sourceText || "");
    if (text.includes("교과서")) tags.push("교과서 연계");
    if (text.includes("부교재")) tags.push("부교재 연계");
    if (/EBS/i.test(text)) tags.push("EBS 연계");
    if (text.includes("모의고사")) tags.push("모의고사 연계");
  }
  return tags;
}

function isExamQuestionInsightRecommended(item = {}) {
  const safeItem = item || {};
  const tags = normalizeExamQuestionTags(safeItem.tags);
  return (
    tags.some((tag) => examQuestionInsightTags.includes(tag)) ||
    safeItem.similarProblemNeeded === "필요" ||
    ["준킬러", "킬러", "앞번호 고난도", "서술형 변별"].includes(safeItem.role) ||
    ["중상", "상"].includes(safeItem.difficulty)
  );
}

function hasExamQuestionDetailedInsight(item = {}) {
  const safeItem = item || {};
  return [
    safeItem.teacherComment,
    safeItem.variationRelationComment,
    safeItem.strategyComment,
    formatSsenTypeTags(safeItem.ssenTypeTags),
    safeItem.similarProblemSource,
    safeItem.similarProblemRelation && safeItem.similarProblemRelation !== "확인 필요" ? safeItem.similarProblemRelation : "",
    safeItem.similarProblemNeeded && safeItem.similarProblemNeeded !== "확인 필요" ? safeItem.similarProblemNeeded : ""
  ].some((value) => String(value || "").trim());
}

function normalizeSsenTypeRole(value = "") {
  const text = String(value || "").trim().toLowerCase();
  if (["secondary", "sub", "보조", "보조유형", "결합", "복합"].some((keyword) => text.includes(keyword))) return "secondary";
  return "primary";
}

function normalizeSsenTypeConfidence(value = "") {
  const text = String(value || "").trim();
  return ["상", "중", "하", "확인 필요"].includes(text) ? text : "확인 필요";
}

function createSsenTypeTagFromText(text = "", role = "primary", unitName = "") {
  const value = String(text || "").trim();
  if (!value) return null;
  const code = value.match(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i)?.[0]?.toUpperCase() || "";
  const labelWithoutCode = value.replace(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i, "").replace(/^[\s|:·-]+/, "").trim();
  return {
    role: normalizeSsenTypeRole(role),
    typeCode: code,
    typeName: code ? labelWithoutCode : labelWithoutCode || value,
    unitName: String(unitName || "").trim(),
    confidence: "확인 필요",
    reason: ""
  };
}

function normalizeSsenTypeTags(value = []) {
  const rawItems = Array.isArray(value)
    ? value
    : String(value || "").split(/[,/·\n]/).map((text) => text.trim()).filter(Boolean);
  const seen = new Set();
  const tags = rawItems
    .map((tag, index) => {
      const source = tag && typeof tag === "object" ? tag : createSsenTypeTagFromText(tag, index === 0 ? "primary" : "secondary");
      if (!source) return null;
      const typeCode = String(source.typeCode || source.code || source.ssenTypeCode || "").trim().toUpperCase();
      const typeName = String(source.typeName || source.name || source.label || "").replace(/SSEN-[A-Z0-9-]+-\d{2}-\d{2}/i, "").trim();
      const unitName = String(source.unitName || source.unit || source.chapter || "").trim();
      if (!typeCode && !typeName) return null;
      const key = typeCode || [unitName, typeName].filter(Boolean).join("|");
      if (!key || seen.has(key)) return null;
      seen.add(key);
      return {
        role: index === 0 ? "primary" : normalizeSsenTypeRole(source.role || source.typeRole || source.kind),
        typeCode,
        typeName,
        unitName,
        subject: String(source.subject || "").trim(),
        confidence: normalizeSsenTypeConfidence(source.confidence || source.certainty),
        reason: String(source.reason || source.note || source.comment || "").trim()
      };
    })
    .filter(Boolean)
    .slice(0, 3);
  if (tags.length) tags[0] = { ...tags[0], role: "primary" };
  return tags;
}

function formatSsenTypeTag(tag = {}) {
  return [tag.typeCode, tag.typeName].filter(Boolean).join(" ");
}

function normalizeSsenSearchText(value = "") {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[·ㆍ|:()[\]{}.,-]/g, "");
}

function formatSsenTypeTags(tags = []) {
  return normalizeSsenTypeTags(tags).map((tag) => {
    const prefix = tag.role === "secondary" ? "보조" : "주";
    return `${prefix}: ${formatSsenTypeTag(tag) || tag.unitName}`.trim();
  }).join(", ");
}

function getSsenPrimaryTypeText(tags = []) {
  const normalized = normalizeSsenTypeTags(tags);
  const tag = normalized.find((item) => item.role === "primary") || normalized[0];
  return tag ? formatSsenTypeTag(tag) : "";
}

function getSsenSecondaryTypeText(tags = []) {
  return normalizeSsenTypeTags(tags)
    .filter((tag, index) => tag.role === "secondary" || index > 0)
    .map(formatSsenTypeTag)
    .filter(Boolean)
    .join(", ");
}

function updateSsenPrimaryTypeTags(tags = [], value = "", unitName = "") {
  const secondaryTags = normalizeSsenTypeTags(tags).filter((tag) => tag.role === "secondary");
  const primary = createSsenTypeTagFromText(value, "primary", unitName);
  return normalizeSsenTypeTags(primary ? [primary, ...secondaryTags] : secondaryTags);
}

function updateSsenSecondaryTypeTags(tags = [], value = "", unitName = "") {
  const normalized = normalizeSsenTypeTags(tags);
  const primary = normalized.find((tag) => tag.role === "primary") || normalized[0] || null;
  const secondaryTags = String(value || "")
    .split(/[,/·\n]/)
    .map((text) => createSsenTypeTagFromText(text, "secondary", unitName))
    .filter(Boolean);
  return normalizeSsenTypeTags([primary, ...secondaryTags].filter(Boolean));
}

function getSsenTypeSuggestions({ query = "", subject = "", unit = "", limit = 8 } = {}) {
  const normalizedQuery = normalizeSsenSearchText(query);
  const normalizedSubject = normalizeSsenSearchText(subject);
  const normalizedUnit = normalizeSsenSearchText(unit);
  const hasQuery = normalizedQuery.length >= 2;
  const scored = ssenTypeIndex
    .map((row) => {
      const subjectText = normalizeSsenSearchText(row.subject);
      const unitText = normalizeSsenSearchText(row.unitName);
      const typeText = normalizeSsenSearchText(row.typeName);
      const codeText = normalizeSsenSearchText(row.typeCode);
      const subjectScore = normalizedSubject && subjectText.includes(normalizedSubject) ? 5 : 0;
      const unitScore = normalizedUnit && unitText.includes(normalizedUnit) ? 4 : 0;
      const queryScore = hasQuery && (typeText.includes(normalizedQuery) || codeText.includes(normalizedQuery) || unitText.includes(normalizedQuery)) ? 8 : 0;
      const score = subjectScore + unitScore + queryScore;
      return score ? { row, score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.row.typeCode.localeCompare(b.row.typeCode));
  return scored.slice(0, limit).map((item) => item.row);
}

function createExamQuestionItem(seed = {}, index = 0) {
  const number = seed.number || index + 1;
  return {
    questionId: seed.questionId || `exam_question_${Date.now()}_${index + 1}_${Math.random().toString(36).slice(2, 6)}`,
    number,
    page: seed.page || 1,
    score: seed.score || "",
    questionType: seed.questionType || "확인 필요",
    unit: seed.unit || "",
    difficulty: seed.difficulty || "확인 필요",
    role: seed.role || "기본",
    source: seed.source || "확인 필요",
    correctRate: seed.correctRate || "",
    similarProblemNeeded: similarProblemNeedOptions.includes(seed.similarProblemNeeded) ? seed.similarProblemNeeded : "확인 필요",
    similarProblemSource: seed.similarProblemSource || "",
    similarProblemRelation: similarProblemRelationOptions.includes(seed.similarProblemRelation) ? seed.similarProblemRelation : "확인 필요",
    cropSourceId: seed.cropSourceId || "",
    cropSourceUrl: seed.cropSourceUrl || "",
    cropBox: seed.cropBox || null,
    ocrText: seed.ocrText || "",
    teacherComment: seed.teacherComment || "",
    variationRelationComment: seed.variationRelationComment || "",
    strategyComment: seed.strategyComment || "",
    ssenTypeTags: normalizeSsenTypeTags(seed.ssenTypeTags || seed.ssenTypes || seed.ssenType),
    tags: normalizeExamQuestionTags([...(Array.isArray(seed.tags) ? seed.tags : String(seed.tags || "").split(/[,/·]/)), ...getDerivedExamQuestionMetadataTags(seed)])
  };
}

function normalizeExamQuestionItems(items = []) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => createExamQuestionItem(item, index))
    .sort((a, b) => Number(a.number || 0) - Number(b.number || 0));
}

function normalizeAiQuestionDrafts(items = []) {
  if (!Array.isArray(items)) return [];
  return items
    .map((item, index) => {
      if (!item || typeof item !== "object") return null;
      const number = Number(item.number || item.questionNumber || item.no) || index + 1;
      return createExamQuestionItem({
        number,
        page: item.page || 1,
        score: item.score || item.points || "",
        questionType: item.questionType || item.type || "확인 필요",
        unit: item.unit || item.chapter || item.topic || "",
        difficulty: item.difficulty || "확인 필요",
        role: item.role || "기본",
        source: item.source || "확인 필요",
        correctRate: item.correctRate || item.expectedCorrectRate || "",
        similarProblemNeeded: item.similarProblemNeeded || item.needsSimilarProblem || item.similarProblemRequired || "확인 필요",
        similarProblemSource: item.similarProblemSource || item.similarSource || item.linkedProblemSource || "",
        similarProblemRelation: item.similarProblemRelation || item.similarRelation || item.variationType || "",
        cropSourceId: item.cropSourceId || item.sourceId || "",
        cropSourceUrl: item.cropSourceUrl || item.sourceUrl || "",
        ocrText: item.ocrText || item.questionSummary || item.summary || "",
        teacherComment: item.teacherComment || item.instructorComment || "",
        variationRelationComment: item.variationRelationComment || item.sourceNote || "",
        strategyComment: item.strategyComment || item.comment || item.teacherCheckPoint || item.reviewPoint || "",
        ssenTypeTags: item.ssenTypeTags || item.ssenTypes || item.ssenType || item.ssenTypeTag,
        tags: Array.isArray(item.tags) ? item.tags : String(item.tags || "").split(/[,/·]/).map((tag) => tag.trim()).filter(Boolean)
      }, index);
    })
    .filter(Boolean)
    .sort((a, b) => Number(a.page || 1) - Number(b.page || 1) || Number(a.number || 0) - Number(b.number || 0));
}

function normalizeExamQuestionComposition(value = null) {
  if (!value) return null;
  const source = typeof value === "number" || typeof value === "string" ? { total: value } : value;
  if (!source || typeof source !== "object" || Array.isArray(source)) return null;
  const rawSections = Array.isArray(source.sections)
    ? source.sections
    : [
        Number(source.choiceCount ?? source.objectiveCount ?? source.multipleChoiceCount) > 0
          ? {
              label: "선택형",
              start: source.choiceStart || 1,
              end: source.choiceEnd || source.choiceCount || source.objectiveCount || source.multipleChoiceCount,
              count: source.choiceCount || source.objectiveCount || source.multipleChoiceCount,
              score: source.choiceScore || source.objectiveScore || source.multipleChoiceScore || ""
            }
          : null,
        Number(source.writtenCount ?? source.subjectiveCount ?? source.descriptiveCount) > 0
          ? {
              label: "서술형",
              start: source.writtenStart || 1,
              end: source.writtenEnd || source.writtenCount || source.subjectiveCount || source.descriptiveCount,
              count: source.writtenCount || source.subjectiveCount || source.descriptiveCount,
              score: source.writtenScore || source.subjectiveScore || source.descriptiveScore || ""
            }
          : null
      ].filter(Boolean);
  const sections = rawSections
    .map((section) => {
      if (!section || typeof section !== "object") return null;
      const count = Math.max(0, Math.min(80, Number(section.count) || 0));
      const start = Math.max(0, Math.min(80, Number(section.start) || 0));
      const end = Math.max(0, Math.min(80, Number(section.end) || 0));
      const inferredCount = count || (start > 0 && end >= start ? end - start + 1 : 0);
      if (!inferredCount) return null;
      return {
        label: String(section.label || section.type || "문항").trim(),
        start: start || "",
        end: end || "",
        count: inferredCount,
        score: String(section.score || section.points || "").trim()
      };
    })
    .filter(Boolean);
  const total = Math.max(0, Math.min(80, Number(
    source.total ??
    source.totalQuestions ??
    source.questionCount ??
    source.count ??
    source.targetCount
  ) || sections.reduce((sum, section) => sum + section.count, 0)));
  if (!total) return null;
  return {
    total,
    sections,
    totalScore: String(source.totalScore || source.scoreTotal || "").trim(),
    evidence: String(source.evidence || source.reason || source.note || "").trim(),
    confidence: String(source.confidence || "").trim(),
    confirmedAt: source.confirmedAt || "",
    confirmedBy: source.confirmedBy || ""
  };
}

function normalizeExamSourceCompositions(value = {}) {
  if (!value) return {};
  const entries = Array.isArray(value)
    ? value.map((item) => [
        String(item?.sourceId || item?.fileName || item?.sourceName || "").trim(),
        item
      ])
    : Object.entries(value);
  return Object.fromEntries(
    entries
      .map(([sourceId, composition]) => {
        const key = String(sourceId || "").trim();
        const normalized = normalizeExamQuestionComposition(composition);
        return key && normalized ? [key, normalized] : null;
      })
      .filter(Boolean)
  );
}

function normalizeExamSourceTargetCounts(value = {}) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value)
      .map(([sourceId, count]) => {
        const safeCount = Math.max(0, Math.min(80, Number(count) || 0));
        return sourceId && safeCount ? [sourceId, safeCount] : null;
      })
      .filter(Boolean)
  );
}

function formatExamQuestionComposition(composition = null) {
  const normalized = normalizeExamQuestionComposition(composition);
  if (!normalized) return "";
  const sectionText = normalized.sections.length
    ? normalized.sections.map((section) => {
        const range = section.start && section.end ? ` ${section.start}~${section.end}번` : "";
        const score = section.score ? ` ${section.score}` : "";
        return `${section.label}${range} ${section.count}문항${score}`;
      }).join(" + ")
    : `총 ${normalized.total}문항`;
  return `${sectionText} = 총 ${normalized.total}문항`;
}

function getExamQuestionMaxNumber(items = []) {
  return normalizeExamQuestionItems(items).reduce((max, item) => Math.max(max, Number(item.number) || 0), 0);
}

function hasExamQuestionNumberSequence(items = [], count = 0) {
  const safeCount = Math.max(0, Number(count) || 0);
  if (!safeCount) return true;
  const numbers = new Set(normalizeExamQuestionItems(items).map((item) => Number(item.number)).filter((number) => number > 0));
  for (let number = 1; number <= safeCount; number += 1) {
    if (!numbers.has(number)) return false;
  }
  return true;
}

function getMissingExamQuestionNumbers(items = [], count = 0) {
  const safeCount = Math.max(0, Number(count) || 0);
  if (!safeCount) return [];
  const numbers = new Set(normalizeExamQuestionItems(items).map((item) => Number(item.number)).filter((number) => number > 0));
  return Array.from({ length: safeCount }, (_, index) => index + 1).filter((number) => !numbers.has(number));
}

function mergeAiQuestionDrafts(existingItems = [], aiItems = [], options = {}) {
  const existing = normalizeExamQuestionItems(existingItems);
  const targetSourceId = String(options.sourceId || "").trim();
  const targetSourceUrl = String(options.sourceUrl || "").trim();
  const defaultSourceId = String(options.defaultSourceId || targetSourceId || "").trim();
  const targetCount = Math.max(0, Math.min(80, Number(options.targetCount) || 0));
  const belongsToTargetSource = (item) => {
    if (!targetSourceId) return true;
    return (item.cropSourceId || defaultSourceId) === targetSourceId;
  };
  const withTargetSource = (item) => ({
    ...item,
    cropSourceId: targetSourceId || item.cropSourceId,
    cropSourceUrl: targetSourceUrl || item.cropSourceUrl
  });
  const drafts = normalizeAiQuestionDrafts(aiItems).map(withTargetSource);
  if (!drafts.length) return existing;
  let workingExisting = existing;
  if (targetSourceId && targetCount) {
    const targetExisting = workingExisting.filter(belongsToTargetSource);
    if (targetExisting.length < targetCount || !hasExamQuestionNumberSequence(targetExisting, targetCount)) {
      const expandedTargetItems = createExamQuestionItemsFromCount(targetCount, targetExisting).map(withTargetSource);
      workingExisting = [
        ...workingExisting.filter((item) => !belongsToTargetSource(item)),
        ...expandedTargetItems
      ];
    }
  }
  const isBlank = (value) => !String(value ?? "").trim() || ["-", "확인 필요", "단원 미입력"].includes(String(value ?? "").trim());
  const mergeWhenBlank = (currentValue, draftValue, defaultValue = "") => {
    const normalizedDraft = String(draftValue ?? "").trim();
    if (!normalizedDraft || normalizedDraft === "확인 필요") return currentValue || defaultValue;
    return isBlank(currentValue) ? normalizedDraft : currentValue;
  };
  const mergeDefaultRole = (currentValue, draftValue) => {
    const normalizedDraft = String(draftValue ?? "").trim();
    if (!normalizedDraft || normalizedDraft === "확인 필요") return currentValue || "기본";
    return !currentValue || currentValue === "기본" || currentValue === "확인 필요" ? normalizedDraft : currentValue;
  };
  const byNumber = new Map(workingExisting.filter(belongsToTargetSource).map((item) => [Number(item.number), item]));
  const usedDraftIds = new Set();
  const merged = workingExisting.map((item) => {
    if (!belongsToTargetSource(item)) return item;
    const draft = drafts.find((candidate) => Number(candidate.number) === Number(item.number) && !usedDraftIds.has(candidate.questionId));
    if (!draft) return item;
    usedDraftIds.add(draft.questionId);
    return {
      ...item,
      page: item.page || draft.page || 1,
      score: mergeWhenBlank(item.score, draft.score),
      questionType: mergeWhenBlank(item.questionType, draft.questionType, "확인 필요"),
      unit: mergeWhenBlank(item.unit, draft.unit),
      difficulty: mergeWhenBlank(item.difficulty, draft.difficulty, "확인 필요"),
      role: mergeDefaultRole(item.role, draft.role),
      source: mergeWhenBlank(item.source, draft.source, "확인 필요"),
      correctRate: mergeWhenBlank(item.correctRate, draft.correctRate),
      similarProblemNeeded: mergeWhenBlank(item.similarProblemNeeded, draft.similarProblemNeeded, "확인 필요"),
      similarProblemSource: mergeWhenBlank(item.similarProblemSource, draft.similarProblemSource),
      similarProblemRelation: mergeWhenBlank(item.similarProblemRelation, draft.similarProblemRelation, "확인 필요"),
      cropSourceId: item.cropSourceId || draft.cropSourceId,
      cropSourceUrl: item.cropSourceUrl || draft.cropSourceUrl,
      ocrText: item.ocrText || draft.ocrText,
      teacherComment: item.teacherComment || draft.teacherComment,
      variationRelationComment: item.variationRelationComment || draft.variationRelationComment,
      strategyComment: item.strategyComment || draft.strategyComment,
      ssenTypeTags: item.ssenTypeTags?.length ? item.ssenTypeTags : draft.ssenTypeTags,
      tags: Array.from(new Set([...(item.tags ?? []), ...(draft.tags ?? [])]))
    };
  });
  const additions = drafts.filter((draft) => {
    const number = Number(draft.number);
    return targetCount > 0 && number > 0 && number <= targetCount && !byNumber.has(number) && !usedDraftIds.has(draft.questionId);
  });
  return normalizeExamQuestionItems([...merged, ...additions]);
}

function createExamQuestionItemsFromCount(count, existingItems = []) {
  const safeCount = Math.max(1, Math.min(80, Number(count) || 20));
  const normalizedExisting = normalizeExamQuestionItems(existingItems);
  const byQuestionNumber = new Map();
  normalizedExisting.forEach((item) => {
    const number = Number(item.number);
    if (number > 0 && !byQuestionNumber.has(number)) byQuestionNumber.set(number, item);
  });
  return Array.from({ length: safeCount }, (_, index) => {
    const number = index + 1;
    const existing = byQuestionNumber.get(number);
    return createExamQuestionItem(existing || { number: index + 1 }, index);
  });
}

function getExamAnalysisSourceFileId(file = {}, index = 0) {
  return file.storagePath || file.signedUrl || file.fileName || `source_${index}`;
}

function isImageExamAnalysisSource(file = {}) {
  const type = String(file.fileType || "").toLowerCase();
  const name = String(file.fileName || file.storagePath || "").toLowerCase();
  return type.startsWith("image/") || /\.(png|jpe?g|webp|gif)$/i.test(name);
}

function isPdfExamAnalysisSource(file = {}) {
  const type = String(file.fileType || "").toLowerCase();
  const name = String(file.fileName || file.storagePath || "").toLowerCase();
  return type === "application/pdf" || /\.pdf$/i.test(name);
}

function getExamAnalysisQuestionSourceContext(analysis = {}) {
  const renderFiles = (analysis.sourceFiles ?? []).filter((file) => isImageExamAnalysisSource(file) || isPdfExamAnalysisSource(file));
  const sourceFile = renderFiles.find((file, index) => getExamAnalysisSourceFileId(file, index) === analysis.questionSourceId) ?? renderFiles[0] ?? null;
  const sourceIndex = sourceFile ? renderFiles.indexOf(sourceFile) : 0;
  const sourceId = analysis.questionSourceId || (sourceFile ? getExamAnalysisSourceFileId(sourceFile, sourceIndex) : "");
  const sourceUrl = analysis.questionSourceUrl || (sourceFile ? getExamAnalysisSourceRenderUrl(sourceFile) : "");
  return { sourceFile, sourceId, sourceUrl };
}

function normalizeCropBox(box = null) {
  if (!box || typeof box !== "object") return null;
  const x = Math.max(0, Math.min(100, Number(box.x) || 0));
  const y = Math.max(0, Math.min(100, Number(box.y) || 0));
  const width = Math.max(0, Math.min(100 - x, Number(box.width) || 0));
  const height = Math.max(0, Math.min(100 - y, Number(box.height) || 0));
  return width && height ? { x, y, width, height } : null;
}

function buildHeuristicQuestionCropBoxes(items = [], pageNumber = 1, pageCount = 1) {
  const normalizedItems = normalizeExamQuestionItems(items);
  if (!normalizedItems.length) return [];
  const safePage = Math.max(1, Number(pageNumber) || 1);
  const safePageCount = Math.max(1, Number(pageCount) || 1);
  const hasExplicitPages = normalizedItems.some((item) => Number(item.page) > 1);
  const perPage = Math.max(1, Math.ceil(normalizedItems.length / safePageCount));
  const pageItems = hasExplicitPages
    ? normalizedItems.filter((item) => Math.max(1, Number(item.page) || 1) === safePage)
    : normalizedItems.slice((safePage - 1) * perPage, safePage * perPage);
  const targetItems = pageItems.length ? pageItems : normalizedItems.slice(0, perPage);
  const columns = targetItems.length >= 4 ? 2 : 1;
  const rows = Math.max(1, Math.ceil(targetItems.length / columns));
  const gapX = 3;
  const gapY = 3;
  const marginX = 6;
  const startY = 13;
  const usableHeight = 82;
  const width = (100 - marginX * 2 - gapX * (columns - 1)) / columns;
  const height = (usableHeight - gapY * (rows - 1)) / rows;
  return targetItems.map((item, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    return {
      cropBox: normalizeCropBox({
        height,
        width,
        x: marginX + column * (width + gapX),
        y: startY + row * (height + gapY)
      }),
      note: "자동 배치 초안",
      page: safePage,
      questionId: item.questionId,
      questionNumber: item.number
    };
  }).filter((item) => item.cropBox);
}

function getExamQuestionCommentCount(questionItems = []) {
  return normalizeExamQuestionItems(questionItems).filter((item) =>
    [item.teacherComment, item.variationRelationComment, item.strategyComment].some((value) => String(value || "").trim())
  ).length;
}

function parseExamScoreValue(value = "") {
  const numeric = Number(String(value ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 0;
}

function getExamTotalScore(questionItems = [], questionComposition = null) {
  const composition = normalizeExamQuestionComposition(questionComposition);
  const compositionScore = parseExamScoreValue(composition?.totalScore);
  if (compositionScore) return compositionScore;
  const itemSum = normalizeExamQuestionItems(questionItems).reduce((sum, item) => sum + parseExamScoreValue(item.score), 0);
  return itemSum || 100;
}

function formatQuestionScoreWithWeight(item = {}, questionItems = [], questionComposition = null) {
  const score = parseExamScoreValue(item.score);
  const rawScore = String(item.score || "").trim();
  if (!score) return rawScore || "-";
  const totalScore = getExamTotalScore(questionItems, questionComposition);
  const percent = totalScore ? ((score / totalScore) * 100).toFixed(1).replace(/\.0$/, "") : "";
  const scoreLabel = rawScore ? (/[점%]$/.test(rawScore) ? rawScore : `${rawScore}점`) : `${score}점`;
  return percent ? `${scoreLabel} · ${percent}%` : scoreLabel;
}

function buildQuestionInsightText(questionItems = []) {
  const items = normalizeExamQuestionItems(questionItems).filter((item) =>
    [
      item.unit,
      item.role,
      formatSsenTypeTags(item.ssenTypeTags),
      item.teacherComment,
      item.variationRelationComment,
      item.strategyComment,
      item.similarProblemNeeded && item.similarProblemNeeded !== "확인 필요" ? item.similarProblemNeeded : "",
      item.similarProblemSource,
      item.similarProblemRelation && item.similarProblemRelation !== "확인 필요" ? item.similarProblemRelation : ""
    ].some((value) => String(value || "").trim())
  );
  if (!items.length) return "";
  return items.map((item) => {
    const header = `${item.number}번${item.score ? ` · ${item.score}점` : ""}${item.unit ? ` · ${item.unit}` : ""}`;
    return [
      `- ${header}`,
      item.role ? `  역할: ${item.role}` : "",
      item.difficulty ? `  난이도: ${item.difficulty}` : "",
      formatSsenTypeTags(item.ssenTypeTags) ? `  쎈 유형: ${formatSsenTypeTags(item.ssenTypeTags)}` : "",
      item.tags?.length ? `  태그: ${item.tags.join(", ")}` : "",
      item.similarProblemNeeded && item.similarProblemNeeded !== "확인 필요" ? `  유사문항 필요: ${item.similarProblemNeeded}` : "",
      item.similarProblemSource ? `  유사문항 출처: ${item.similarProblemSource}` : "",
      item.similarProblemRelation && item.similarProblemRelation !== "확인 필요" ? `  유사문항 유형: ${item.similarProblemRelation}` : "",
      item.teacherComment ? `  강사 코멘트: ${item.teacherComment}` : "",
      item.variationRelationComment ? `  변형 관계: ${item.variationRelationComment}` : "",
      item.strategyComment ? `  대비 전략: ${item.strategyComment}` : ""
    ].filter(Boolean).join("\n");
  }).join("\n");
}

function summarizeQuestionUnits(questionItems = []) {
  const unitMap = new Map();
  normalizeExamQuestionItems(questionItems).forEach((item) => {
    const unit = String(item.unit || "단원 미입력").trim();
    const previous = unitMap.get(unit) || { unit, count: 0, score: 0, hard: 0, questions: [] };
    const score = parseExamScoreValue(item.score);
    previous.count += 1;
    previous.score += Number.isFinite(score) ? score : 0;
    if (["중상", "상"].includes(item.difficulty) || ["준킬러", "킬러", "앞번호 고난도", "서술형 변별"].includes(item.role)) {
      previous.hard += 1;
    }
    previous.questions.push(item.number);
    unitMap.set(unit, previous);
  });
  return Array.from(unitMap.values()).sort((a, b) => b.count - a.count || a.unit.localeCompare(b.unit, "ko"));
}

function summarizeQuestionSsenTypes(questionItems = []) {
  const typeMap = new Map();
  normalizeExamQuestionItems(questionItems).forEach((item) => {
    normalizeSsenTypeTags(item.ssenTypeTags).forEach((tag) => {
      const label = formatSsenTypeTag(tag) || tag.unitName || "쎈 유형 미입력";
      const previous = typeMap.get(label) || {
        label,
        unitName: tag.unitName || "",
        primary: 0,
        secondary: 0,
        questions: []
      };
      if (tag.role === "secondary") previous.secondary += 1;
      else previous.primary += 1;
      previous.questions.push(item.number);
      typeMap.set(label, previous);
    });
  });
  return Array.from(typeMap.values()).sort((a, b) =>
    (b.primary + b.secondary) - (a.primary + a.secondary) || a.label.localeCompare(b.label, "ko")
  );
}

function createFinalDocumentId(prefix = "block") {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

function getExamQuestionCropImagePayload(item = {}, analysis = {}) {
  const cropBox = normalizeCropBox(item.cropBox);
  if (!cropBox) return null;
  const sourceFiles = Array.isArray(analysis.sourceFiles) ? analysis.sourceFiles : [];
  const matchedSource = sourceFiles.find((file, index) =>
    getExamAnalysisSourceFileId(file, index) === item.cropSourceId ||
    getExamAnalysisSourceRenderUrl(file) === item.cropSourceUrl
  );
  const sourceUrl = item.cropSourceUrl || (matchedSource ? getExamAnalysisSourceRenderUrl(matchedSource) : "");
  const isImageSource = matchedSource ? isImageExamAnalysisSource(matchedSource) : /\.(png|jpe?g|webp|gif)(\?|#|$)/i.test(sourceUrl);
  if (!sourceUrl || !isImageSource) return null;
  return {
    sourceUrl,
    cropBox,
    alt: `${item.number || ""}번 원문항 크롭`.trim() || "원문항 크롭"
  };
}

function getExamStrategyFlowNodes(questionItems = []) {
  const items = normalizeExamQuestionItems(questionItems);
  const sourceCount = items.filter((item) =>
    (item.source && item.source !== "확인 필요") ||
    item.similarProblemNeeded === "필요" ||
    item.similarProblemSource
  ).length;
  const commentCount = getExamQuestionCommentCount(items);
  const hardCount = items.filter((item) => ["준킬러", "킬러", "앞번호 고난도", "서술형 변별"].includes(item.role)).length;
  return [
    { title: "1. 시험 범위 정리", detail: "시험관리 탭 범위와 OCR 원문 확인" },
    { title: "2. 문항별 검수", detail: `${items.length || 0}문항 단원·난이도·역할 확정` },
    { title: "3. 변형 관계 분석", detail: sourceCount ? `출처/유사문항 입력 ${sourceCount}문항` : "교과서/부교재/EBS/모의고사 연계 확인" },
    { title: "4. 변별 문항 훈련", detail: hardCount ? `변별 후보 ${hardCount}문항` : "준킬러/킬러 후보 확정" },
    { title: "5. 코멘트 기반 보강", detail: commentCount ? `강사 코멘트 ${commentCount}개 반영` : "학생별 오답과 수업 전략 입력" }
  ];
}

function createExamFinalDocumentFromAnalysis(analysis = {}) {
  const questionItems = normalizeExamQuestionItems(analysis.questionItems);
  const unitRows = summarizeQuestionUnits(questionItems);
  const ssenTypeRows = summarizeQuestionSsenTypes(questionItems);
  const sourceRows = questionItems.filter((item) =>
    (String(item.source || "").trim() && item.source !== "확인 필요") ||
    item.similarProblemNeeded === "필요" ||
    String(item.similarProblemSource || "").trim() ||
    (item.similarProblemRelation && item.similarProblemRelation !== "확인 필요")
  );
  const questionSlotItems = questionItems
    .filter((item) => isExamQuestionInsightRecommended(item) || hasExamQuestionDetailedInsight(item))
    .slice(0, 12);
  const slotItems = (questionSlotItems.length ? questionSlotItems : questionItems.slice(0, 6)).map((item) => ({
    id: item.questionId || createFinalDocumentId("slot"),
    number: `${item.number}번`,
    title: [item.unit, item.role].filter(Boolean).join(" · ") || "주요 문항",
    originalSlot: item.cropBox ? "원문항 크롭 이미지 삽입" : "원문항 삽입 영역",
    originalImage: getExamQuestionCropImagePayload(item, analysis),
    similarSlot: item.similarProblemNeeded === "필요" ? "유사문항 삽입 영역" : "필요 시 유사문항 삽입",
    similarProblemNeeded: item.similarProblemNeeded || "확인 필요",
    similarProblemSource: item.similarProblemSource || "",
    similarProblemRelation: item.similarProblemRelation || "확인 필요",
    comment: item.teacherComment || item.strategyComment || item.variationRelationComment || ""
  }));

  return {
    version: 1,
    generatedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    outputLayoutChoices: normalizeExamOutputLayoutChoices(analysis.outputLayoutChoices),
    blocks: [
      {
        id: createFinalDocumentId("cover"),
        type: "cover",
        title: getExamAnalysisReportTitle(analysis),
        subtitle: getExamAnalysisReportSubtitle(analysis),
        meta: getExamAnalysisReportMeta(analysis)
      },
      {
        id: createFinalDocumentId("text"),
        type: "text",
        title: "기말고사 출제 핵심 분석",
        value: [analysis.oneLineSummary, analysis.examStructure, analysis.aiOverview].filter(Boolean).join("\n\n")
      },
      {
        id: createFinalDocumentId("table"),
        type: "table",
        title: "시험 기본 정보",
        columns: ["항목", "내용"],
        rows: [
          ["학교/학년", [analysis.schoolName, analysis.grade].filter(Boolean).join(" ") || "미입력"],
          ["고사", analysis.examName || "미입력"],
          ["과목", analysis.subject || "미입력"],
          ["문항 구성", analysis.questionComposition?.total ? `${analysis.questionComposition.total}문항` : `${questionItems.length || 0}문항`],
          ["난이도", analysis.oneLineSummary || "강사 검수 후 입력"]
        ]
      },
      {
        id: createFinalDocumentId("chart"),
        type: "chart",
        title: "단원별 출제 비율",
        chartType: "bar",
        rows: unitRows.slice(0, 8).map((row) => ({
          label: row.unit,
          value: row.count,
          note: row.score ? `${row.score}점 · ${row.questions.map((number) => `${number}번`).join(", ")}` : row.questions.map((number) => `${number}번`).join(", ")
        }))
      },
      ...(ssenTypeRows.length ? [{
        id: createFinalDocumentId("table"),
        type: "table",
        title: "쎈 유형별 분류",
        columns: ["쎈 유형", "단원", "주유형", "보조유형", "문항"],
        rows: ssenTypeRows.slice(0, 12).map((row) => [
          row.label,
          row.unitName || "-",
          row.primary || "-",
          row.secondary || "-",
          row.questions.map((number) => `${number}번`).join(", ")
        ])
      }] : []),
      {
        id: createFinalDocumentId("table"),
        type: "table",
        title: "난이도 상승 요인 분석",
        columns: ["요인", "해당 문항", "비고"],
        rows: [
          ["킬러/준킬러", questionItems.filter((item) => ["준킬러", "킬러", "1등급 변별문항"].includes(item.role) || item.tags?.includes("1등급 변별문항")).map((item) => `${item.number}번`).join(", ") || "확인 필요", analysis.insightKiller || ""],
          ["고배점 문항", questionItems.filter((item) => parseExamScoreValue(item.score) >= Math.max(4, getExamTotalScore(questionItems, analysis.questionComposition) * 0.05)).map((item) => `${item.number}번(${formatQuestionScoreWithWeight(item, questionItems, analysis.questionComposition)})`).join(", ") || "확인 필요", "문항 수가 달라지면 같은 배점도 전체 대비 비중이 달라집니다."],
          ["조건 해석", questionItems.filter((item) => ["앞번호 고난도", "서술형 변별"].includes(item.role)).map((item) => `${item.number}번`).join(", ") || "확인 필요", analysis.typeClassification || ""]
        ]
      },
      {
        id: createFinalDocumentId("table"),
        type: "table",
        title: "부교재·유사문항 활용",
        columns: ["문항", "출처", "유사문항", "변형 구분", "변형 관계"],
        rows: (sourceRows.length ? sourceRows : questionItems.filter((item) => item.similarProblemNeeded === "필요")).map((item) => [
          `${item.number}번`,
          item.similarProblemSource || item.source || "확인 필요",
          item.similarProblemNeeded || "확인 필요",
          item.similarProblemRelation || "확인 필요",
          item.variationRelationComment || "변형 관계 메모 입력"
        ])
      },
      {
        id: createFinalDocumentId("flow"),
        type: "flow",
        title: "대비전략 흐름도",
        nodes: getExamStrategyFlowNodes(questionItems)
      },
      {
        id: createFinalDocumentId("text"),
        type: "text",
        title: "점수 차이를 만든 결정 요인",
        value: [analysis.killerProblems, analysis.insightStudentErrors].filter(Boolean).join("\n\n")
      },
      {
        id: createFinalDocumentId("questionSlots"),
        type: "questionSlots",
        title: "주요 문항 삽입 슬롯",
        items: slotItems
      },
      {
        id: createFinalDocumentId("text"),
        type: "text",
        title: "TEACHER's COMMENT",
        value: [analysis.insightSummary, analysis.insightDirection, analysis.insightPrediction].filter(Boolean).join("\n\n")
      }
    ]
  };
}

function normalizeExamFinalDocument(document = null) {
  if (!document || typeof document !== "object" || !Array.isArray(document.blocks)) return null;
  const blocks = document.blocks
    .filter((block) => block && typeof block === "object")
    .map((block, index) => {
      const type = ["cover", "text", "table", "chart", "flow", "questionSlots"].includes(block.type) ? block.type : "text";
      const base = {
        id: block.id || createFinalDocumentId(type),
        type,
        title: String(block.title || (type === "cover" ? "최종 분석지" : "편집 블록")).trim()
      };
      if (type === "cover") {
        return {
          ...base,
          subtitle: String(block.subtitle || "").trim(),
          meta: Array.isArray(block.meta) ? block.meta.map((item) => String(item || "").trim()).filter(Boolean) : []
        };
      }
      if (type === "table") {
        const columns = Array.isArray(block.columns) && block.columns.length
          ? block.columns.map((column) => String(column || "").trim() || "열")
          : ["항목", "내용"];
        const rows = Array.isArray(block.rows)
          ? block.rows.map((row) => {
            const cells = Array.isArray(row) ? row : row?.cells;
            return columns.map((_, cellIndex) => String(cells?.[cellIndex] ?? "").trim());
          })
          : [];
        return { ...base, columns, rows };
      }
      if (type === "chart") {
        const rows = Array.isArray(block.rows) ? block.rows : [];
        return {
          ...base,
          chartType: block.chartType || "bar",
          rows: rows.map((row) => ({
            id: row.id || createFinalDocumentId("chartRow"),
            label: String(row.label || "").trim(),
            value: Number(row.value) || 0,
            note: String(row.note || "").trim()
          })).filter((row) => row.label || row.value || row.note)
        };
      }
      if (type === "flow") {
        const nodes = Array.isArray(block.nodes) ? block.nodes : [];
        return {
          ...base,
          nodes: nodes.map((node) => ({
            id: node.id || createFinalDocumentId("flowNode"),
            title: String(node.title || "").trim(),
            detail: String(node.detail || "").trim()
          })).filter((node) => node.title || node.detail)
        };
      }
      if (type === "questionSlots") {
        const items = Array.isArray(block.items) ? block.items : [];
        return {
          ...base,
          items: items.map((item) => ({
            id: item.id || createFinalDocumentId("slot"),
            number: String(item.number || "").trim() || `${index + 1}번`,
            title: String(item.title || "").trim(),
            originalSlot: String(item.originalSlot || "원문항 삽입 영역").trim(),
            originalImage: item.originalImage && typeof item.originalImage === "object" && String(item.originalImage.sourceUrl || "").trim() && normalizeCropBox(item.originalImage.cropBox)
              ? {
                  sourceUrl: String(item.originalImage.sourceUrl || "").trim(),
                  cropBox: normalizeCropBox(item.originalImage.cropBox),
                  alt: String(item.originalImage.alt || "원문항 크롭").trim()
                }
              : null,
            similarSlot: String(item.similarSlot || "유사문항 삽입 영역").trim(),
            similarProblemNeeded: String(item.similarProblemNeeded || "확인 필요").trim(),
            similarProblemSource: String(item.similarProblemSource || "").trim(),
            similarProblemRelation: String(item.similarProblemRelation || "확인 필요").trim(),
            comment: String(item.comment || "").trim()
          }))
        };
      }
      return { ...base, value: String(block.value || "").trim() };
    });
  return {
    version: Number(document.version) || 1,
    generatedAt: document.generatedAt || "",
    updatedAt: document.updatedAt || "",
    outputLayoutChoices: normalizeExamOutputLayoutChoices(document.outputLayoutChoices),
    blocks
  };
}

const examAnalysisFieldKeys = [
  "oneLineSummary",
  "examStructure",
  "aiOverview",
  "unitDistribution",
  "typeClassification",
  "killerProblems",
  "fiveCorePatterns",
  "sourceCheckNotes",
  "studentAnalysisDraft",
  "blogDraft",
  "instagramDraft"
];

function parseStructuredAnalysisText(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) return null;
  const candidates = [
    trimmed,
    trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1]?.trim(),
    trimmed.slice(trimmed.indexOf("{"), trimmed.lastIndexOf("}") + 1)
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate);
      if (parsed && typeof parsed === "object" && examAnalysisFieldKeys.some((key) => parsed[key])) return parsed;
    } catch {
      // Try the next candidate.
    }
  }
  return null;
}

function parseLooseStructuredAnalysisText(text) {
  const source = String(text ?? "");
  if (!source.includes('"')) return null;
  const result = {};
  for (const key of examAnalysisFieldKeys) {
    const pattern = new RegExp(`"${key}"\\s*:\\s*"([\\s\\S]*?)(?:"\\s*,\\s*"${examAnalysisFieldKeys.join('"|"')}"\\s*:|"\\s*\\})`, "m");
    const match = source.match(pattern);
    if (!match?.[1]) continue;
    const rawValue = match[1]
      .replaceAll('\\"', '"')
      .replaceAll("\\n", "\n")
      .replaceAll("\\t", "\t")
      .trim();
    if (rawValue) result[key] = rawValue;
  }
  return Object.keys(result).length ? result : null;
}

function cleanAnalysisFieldText(key, value) {
  let text = String(value ?? "").trim();
  const extracted = parseLooseStructuredAnalysisText(text);
  if (extracted?.[key]) text = extracted[key];
  const nextFieldPattern = new RegExp(`",?\\s*"(${examAnalysisFieldKeys.filter((fieldKey) => fieldKey !== key).join("|")})"\\s*:`, "m");
  text = text.split(nextFieldPattern)[0] ?? text;
  return text
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .replace(/^[{,\s"]+/, "")
    .replace(/[}",\s]+$/, "")
    .trim();
}

function normalizeExamAnalysisAiFields(fields = {}) {
  const next = { ...fields };
  const combinedText = examAnalysisFieldKeys.map((key) => next[key]).filter(Boolean).join("\n\n");
  const combinedParsed = parseStructuredAnalysisText(combinedText) ?? parseLooseStructuredAnalysisText(combinedText);
  if (combinedParsed) {
    for (const fieldKey of examAnalysisFieldKeys) {
      if (combinedParsed[fieldKey]) next[fieldKey] = String(combinedParsed[fieldKey]).trim();
    }
  }
  for (const key of examAnalysisFieldKeys) {
    const parsed = parseStructuredAnalysisText(next[key]) ?? parseLooseStructuredAnalysisText(next[key]);
    if (!parsed) continue;
    for (const fieldKey of examAnalysisFieldKeys) {
      if (parsed[fieldKey]) next[fieldKey] = String(parsed[fieldKey]).trim();
    }
  }
  for (const key of examAnalysisFieldKeys) {
    next[key] = cleanAnalysisFieldText(key, next[key]);
  }
  next.questionComposition = normalizeExamQuestionComposition(next.questionComposition);
  next.sourceCompositions = normalizeExamSourceCompositions(next.sourceCompositions);
  next.questionCompositionsBySource = normalizeExamSourceCompositions(next.questionCompositionsBySource);
  next.questionTargetCountsBySource = normalizeExamSourceTargetCounts(next.questionTargetCountsBySource);
  return next;
}

function removeFailedAttachmentBlocks(text) {
  return String(text ?? "")
    .split(/\n{2,}/)
    .filter((block) => !block.trim().startsWith("[첨부 실패]"))
    .join("\n\n")
    .trim();
}

function inferExamAnalysisMetadataFromFileName(fileName = "") {
  const baseName = String(fileName).replace(/\.[^.]+$/, "");
  const bracketSchool = baseName.match(/\[([^\]]+)\]/)?.[1]?.trim() ?? "";
  const schoolMatch = bracketSchool || baseName.match(/([가-힣A-Za-z0-9]+고)/)?.[1] || "";
  const gradeMatch = baseName.match(/고\s*([123])/);
  const subjectMatch = baseName.match(/(공통수학\s*[12]|수학\s*[ⅠⅡI1-2]|미적분|확률과\s*통계|확통|기하)/);
  const termMatch = baseName.match(/(20\d{2})\s*[-년 ]\s*([12])\s*[-학기 ]\s*([12])?\s*(중간|기말)/);
  const examName = termMatch
    ? `${termMatch[1]} ${termMatch[2]}학기 ${termMatch[4]}고사`
    : baseName.includes("중간")
      ? "중간고사"
      : baseName.includes("기말")
        ? "기말고사"
        : "";

  return {
    schoolName: schoolMatch,
    grade: gradeMatch ? `고${gradeMatch[1]}` : "",
    subject: subjectMatch ? subjectMatch[1].replace(/\s+/g, "") : "",
    examName
  };
}

function getDisconnectedExamAnalysisRunPatch(analysis = {}) {
  if (analysis.aiStatus !== "분석 중") return null;
  if (analysis.aiRunSessionId && analysis.aiRunSessionId === appRuntimeSessionId) return null;
  return {
    aiStatus: "실패",
    aiError: "이전 브라우저 세션에서 시작한 AI 분석의 결과를 더 이상 받을 수 없어 대기 상태를 해제했습니다. 다시 실행해 주세요.",
    aiRunRequestId: "",
    aiRunSessionId: "",
    aiRunStartedAt: ""
  };
}

function repairDisconnectedExamAnalysisRuns(analyses = []) {
  let changed = false;
  const repaired = (Array.isArray(analyses) ? analyses : []).map((analysis) => {
    const patch = getDisconnectedExamAnalysisRunPatch(analysis);
    if (!patch) return analysis;
    changed = true;
    return { ...analysis, ...patch, updatedAt: new Date().toISOString() };
  });
  return { changed, analyses: repaired };
}

function normalizeExamAnalysisForDisplay(analysis = {}) {
  const firstSourceFile = Array.isArray(analysis.sourceFiles) ? analysis.sourceFiles[0] : null;
  const inferredMetadata = inferExamAnalysisMetadataFromFileName(firstSourceFile?.fileName || analysis.sourceFileUrl || "");
  const disconnectedRunPatch = getDisconnectedExamAnalysisRunPatch(analysis) ?? {};
  return {
    ...normalizeExamAnalysisAiFields({
    ...analysis,
    ...disconnectedRunPatch,
    schoolName: analysis.schoolName || inferredMetadata.schoolName,
    grade: analysis.grade || inferredMetadata.grade,
    subject: analysis.subject || inferredMetadata.subject,
    examName: analysis.examName || inferredMetadata.examName,
    aiPrompt: isLegacyDefaultExamAnalysisPrompt(analysis.aiPrompt)
      ? createDefaultExamAnalysisPrompt()
      : analysis.aiPrompt || createDefaultExamAnalysisPrompt(),
    rawExamText: removeFailedAttachmentBlocks(analysis.rawExamText)
    }),
    questionItems: normalizeExamQuestionItems(analysis.questionItems),
    finalDocument: normalizeExamFinalDocument(analysis.finalDocument)
  };
}

function getExamAnalysisRunStartedAt(analysis = {}) {
  return analysis.aiRunStartedAt || analysis.updatedAt || "";
}

function getExamAnalysisElapsedSeconds(analysis = {}, now = Date.now()) {
  const startedAt = getExamAnalysisRunStartedAt(analysis);
  const startedTime = startedAt ? new Date(startedAt).getTime() : 0;
  if (!startedTime || Number.isNaN(startedTime)) return 0;
  return Math.max(0, Math.floor((now - startedTime) / 1000));
}

function formatElapsedSeconds(seconds = 0) {
  const safeSeconds = Math.max(0, Number(seconds) || 0);
  const minutes = Math.floor(safeSeconds / 60);
  const rest = safeSeconds % 60;
  return minutes ? `${minutes}분 ${String(rest).padStart(2, "0")}초` : `${rest}초`;
}

function getExamAnalysisWaitMessage(seconds = 0) {
  if (seconds >= 180) return "3분 이상 응답 대기 중입니다. 서버가 응답하면 결과는 그대로 반영됩니다. 새로고침 후에도 계속 같으면 이전 요청이 끊긴 상태일 수 있습니다.";
  if (seconds >= 60) return "1분 이상 걸리고 있습니다. PDF 원문과 쎈 유형 매칭이 길면 정상적으로 오래 걸릴 수 있습니다.";
  return "AI가 원문과 문항 메타데이터를 분석하고 있습니다.";
}

function getExamAnalysisStatusMeta(analysis = {}) {
  const status = analysis.aiStatus || "대기";
  if (status === "완료") {
    return { label: "분석 완료", tone: "done", detail: analysis.aiLastRunAt ? `최근 실행 ${analysis.aiLastRunAt}` : "AI 구조화 결과가 있습니다." };
  }
  if (status === "분석 중") {
    return { label: "분석 중", tone: "running", detail: "AI가 시험지를 분석하고 있습니다. 오래 걸려도 응답이 오면 결과를 반영합니다." };
  }
  if (status === "실패") {
    return { label: "분석 실패", tone: "failed", detail: analysis.aiError || "오류 내용을 확인해 주세요." };
  }
  const hasUpload = Array.isArray(analysis.sourceFiles) && analysis.sourceFiles.length > 0;
  return { label: hasUpload ? "분석 전" : "원본 대기", tone: hasUpload ? "ready" : "idle", detail: hasUpload ? "PDF 업로드가 완료되었습니다. AI 분석을 시작하세요." : "PDF를 업로드해 주세요." };
}

function getTextPreview(value = "", fallback = "아직 내용 없음") {
  const text = String(value ?? "").replace(/\s+/g, " ").trim();
  if (!text) return fallback;
  return text.length > 110 ? `${text.slice(0, 110)}...` : text;
}

function getExamAnalysisReportTitle(analysis = {}) {
  const parts = [analysis.schoolName, analysis.grade, analysis.subject, analysis.examName].filter(Boolean);
  return parts.length ? `${parts.join(" ")} 최종 분석` : "시험분석 최종 보고서";
}

function getExamAnalysisReportSubtitle(analysis = {}) {
  const fileYears = (analysis.sourceFiles ?? [])
    .map((file) => String(file.fileName ?? "").match(/20\d{2}/)?.[0])
    .filter(Boolean);
  const uniqueYears = [...new Set(fileYears)].sort();
  const yearRange = uniqueYears.length >= 2 ? `${uniqueYears[0]}~${uniqueYears.at(-1)}` : uniqueYears[0] || "";
  const base = yearRange ? `${yearRange} 기출 기반` : "기출 PDF와 AI 분석 기반";
  return `${base} · ${academyBrandName}`;
}

function getExamAnalysisReportMeta(analysis = {}) {
  const sourceCount = Array.isArray(analysis.sourceFiles) ? analysis.sourceFiles.length : 0;
  return [
    analysis.examDate ? `시험일 ${analysis.examDate}` : "",
    sourceCount ? `첨부 ${sourceCount}개` : "",
    analysis.aiLastRunAt ? `AI 분석 ${analysis.aiLastRunAt}` : "",
    analysis.aiStatus ? `상태 ${analysis.aiStatus}` : ""
  ].filter(Boolean);
}

function splitReportLines(value = "") {
  return String(value ?? "")
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function getExamAnalysisInitialFields(analysis = {}) {
  const snapshot = analysis.aiInitialFields && typeof analysis.aiInitialFields === "object"
    ? analysis.aiInitialFields
    : null;
  return normalizeExamAnalysisAiFields(snapshot ?? {
    oneLineSummary: analysis.oneLineSummary,
    examStructure: analysis.examStructure,
    aiOverview: analysis.aiOverview,
    unitDistribution: analysis.unitDistribution,
    typeClassification: analysis.typeClassification,
    killerProblems: analysis.killerProblems,
    fiveCorePatterns: analysis.fiveCorePatterns,
    sourceCheckNotes: analysis.sourceCheckNotes,
    studentAnalysisDraft: analysis.studentAnalysisDraft,
    blogDraft: analysis.blogDraft,
    instagramDraft: analysis.instagramDraft
  });
}

function hasExamAnalysisTeacherInsight(analysis = {}) {
  if (getExamQuestionCommentCount(analysis.questionItems) > 0) return true;
  return ["insightSummary", "insightUnits", "insightKiller", "insightStudentErrors", "insightPrediction", "insightDirection"].some((field) => {
    const value = String(analysis[field] ?? "").trim();
    return value && !value.endsWith("부연:");
  });
}

function ExamAnalysisInitialView({ analysis }) {
  const initialFields = getExamAnalysisInitialFields(analysis);
  return (
    <div className="analysisInitialView">
      <div className="analysisInitialMeta">
        <strong>AI 최초 분석 초안</strong>
        <span>{analysis.aiInitialGeneratedAt ? `생성 시각 ${analysis.aiInitialGeneratedAt}` : "현재 AI 필드를 기준으로 표시합니다."}</span>
      </div>
      {[
        ["oneLineSummary", "한 줄 총평"],
        ["examStructure", "시험 구조"],
        ["aiOverview", "시험 개요"],
        ["unitDistribution", "단원별 출제 분포"],
        ["typeClassification", "유형 분류"],
        ["killerProblems", "킬러/준킬러 문항"],
        ["fiveCorePatterns", "5대 핵심 패턴"],
        ["sourceCheckNotes", "확인 필요 항목"],
        ["studentAnalysisDraft", "학생 분석지 초안"],
        ["blogDraft", "블로그 초안"],
        ["instagramDraft", "인스타 카드뉴스 초안"]
      ].map(([field, title]) => (
        <article className="analysisInitialBlock" key={field}>
          <h3>{title}</h3>
          <ExamAnalysisReportText value={initialFields[field]} />
        </article>
      ))}
    </div>
  );
}

function ExamAnalysisReportSection({ title, children }) {
  return (
    <section className="examAnalysisReportSection">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

function ExamAnalysisReportText({ value, fallback = "아직 내용이 없습니다." }) {
  const lines = splitReportLines(value);
  if (!lines.length) return <p className="muted">{fallback}</p>;
  return (
    <div className="examAnalysisReportText">
      {lines.map((line, index) => <p key={`${line}_${index}`}>{line}</p>)}
    </div>
  );
}

function cleanPreviewText(value = "") {
  return String(value ?? "")
    .replace(/\*\*/g, "")
    .replace(/\\\|/g, "|")
    .trim();
}

function isMarkdownTableLine(line = "") {
  const trimmed = line.trim();
  return trimmed.startsWith("|") && trimmed.endsWith("|") && trimmed.includes("|", 1);
}

function isMarkdownTableDivider(line = "") {
  return /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function parseMarkdownTableRow(line = "") {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cleanPreviewText(cell));
}

function copyTextToClipboard(text = "") {
  const value = String(text ?? "").trim();
  if (!value) return;
  if (window.navigator?.clipboard?.writeText) {
    window.navigator.clipboard.writeText(value).catch(() => window.alert(value));
    return;
  }
  window.alert(value);
}

function ExamAnalysisReadablePreview({ value, fallback = "아직 내용이 없습니다." }) {
  const lines = String(value ?? "").replace(/\r\n/g, "\n").split("\n");
  const nodes = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = cleanPreviewText(lines[index]);
    if (!line) continue;

    if (isMarkdownTableLine(line)) {
      const tableLines = [];
      while (index < lines.length && isMarkdownTableLine(lines[index])) {
        if (!isMarkdownTableDivider(lines[index])) tableLines.push(lines[index]);
        index += 1;
      }
      index -= 1;
      const rows = tableLines.map(parseMarkdownTableRow).filter((row) => row.some(Boolean));
      if (rows.length) {
        nodes.push(
          <div className="analysisPreviewTableWrap" key={`table_${index}`}>
            <table className="analysisPreviewTable">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={`${row.join("_")}_${rowIndex}`}>
                    {row.map((cell, cellIndex) => rowIndex === 0 ? (
                      <th key={`${cell}_${cellIndex}`}>{cell}</th>
                    ) : (
                      <td key={`${cell}_${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    if (/^#{1,4}\s+/.test(line)) {
      nodes.push(<h4 key={`${line}_${index}`}>{line.replace(/^#{1,4}\s+/, "")}</h4>);
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+[.)]\s+/.test(line)) {
      nodes.push(<p className="analysisPreviewListLine" key={`${line}_${index}`}>{line.replace(/^[-*]\s+/, "").replace(/^\d+[.)]\s+/, "")}</p>);
      continue;
    }

    nodes.push(<p key={`${line}_${index}`}>{line}</p>);
  }

  if (!nodes.length) return <p className="muted">{fallback}</p>;
  return <div className="analysisReadablePreview">{nodes}</div>;
}

function parseInstagramSlides(value = "") {
  const lines = String(value ?? "").replace(/\r\n/g, "\n").split("\n");
  const slides = [];
  let current = null;

  lines.forEach((rawLine) => {
    const line = cleanPreviewText(rawLine);
    if (!line) return;
    const match = line.match(/^(?:##\s*)?(?:필드\s*)?(\d+)\s*(?:장|\(|\.|:)?\s*(.*)$/);
    if (match && Number(match[1]) >= 1 && Number(match[1]) <= 12) {
      current = { number: Number(match[1]), title: match[2] || `${match[1]}장`, lines: [] };
      slides.push(current);
      return;
    }
    if (!current) {
      current = { number: slides.length + 1, title: `${slides.length + 1}장`, lines: [] };
      slides.push(current);
    }
    current.lines.push(line);
  });

  return slides.length ? slides : [{ number: 1, title: "카드뉴스 초안", lines: ["아직 내용이 없습니다."] }];
}

function ExamAnalysisInstagramPreview({ value }) {
  const slides = parseInstagramSlides(value);
  return (
    <div className="analysisInstagramPreview">
      {slides.map((slide) => (
        <article className="analysisInstagramSlide" key={`${slide.number}_${slide.title}`}>
          <span>{slide.number}장</span>
          <strong>{slide.title}</strong>
          {slide.lines.map((line, index) => <p key={`${line}_${index}`}>{line}</p>)}
        </article>
      ))}
    </div>
  );
}

const examOutputLayoutOptions = [
  {
    key: "teacher",
    title: "강사용 분석지",
    options: [
      { code: "A", name: "대시보드형", frame: "dashboard", slots: ["meta", "table", "chart", "list"] },
      { code: "B", name: "문항카드형", frame: "cardGrid", slots: ["meta", "card", "card", "card", "summary"] },
      { code: "C", name: "리포트형", frame: "report", slots: ["cover", "section", "section", "table", "flow"] }
    ]
  },
  {
    key: "student",
    title: "학생 분석지",
    options: [
      { code: "A", name: "복습 로드맵형", frame: "roadmap", slots: ["hero", "step", "step", "step", "check"] },
      { code: "B", name: "문항 태그형", frame: "tagBoard", slots: ["meta", "tag", "tag", "tag", "task"] },
      { code: "C", name: "한 장 피드백형", frame: "dashboard", slots: ["hero", "table", "chart", "list"] }
    ]
  },
  {
    key: "blog",
    title: "블로그 초안",
    options: [
      { code: "A", name: "홍보형 글 구조", frame: "article", slots: ["title", "paragraph", "section", "section", "cta"] },
      { code: "B", name: "전문 분석형", frame: "analysisArticle", slots: ["title", "table", "chart", "section", "cta"] },
      { code: "C", name: "카드뉴스 재활용형", frame: "articleCards", slots: ["title", "card", "card", "card", "cta"] }
    ]
  },
  {
    key: "instagram",
    title: "인스타 카드뉴스",
    options: [
      { code: "A", name: "5장 요약형", frame: "slides5", slots: ["slide", "slide", "slide", "slide", "slide"] },
      { code: "B", name: "7장 분석형", frame: "slides7", slots: ["slide", "slide", "slide", "slide", "slide", "slide", "slide"] },
      { code: "C", name: "문항 중심형", frame: "slides7", slots: ["slide", "slide", "slide", "slide", "slide", "slide", "slide"] }
    ]
  }
];

function ExamOutputLayoutWireframe({ option }) {
  return (
    <div className={`examOutputWireframe ${option.frame}`} aria-label={`${option.name} 레이아웃 구조`}>
      {option.slots.map((slot, index) => (
        <span className={`wireSlot ${slot}`} key={`${option.code}_${slot}_${index}`} />
      ))}
    </div>
  );
}

function ExamOutputLayoutPlanner({ value, onChange }) {
  const selectedChoices = normalizeExamOutputLayoutChoices(value);

  function selectLayout(groupKey, optionCode) {
    onChange?.(normalizeExamOutputLayoutChoices({
      ...selectedChoices,
      [groupKey]: optionCode
    }));
  }

  return (
    <article className="panel examOutputLayoutPlanner">
      <div className="sectionHeader slim">
        <div>
          <p className="eyebrow">LAYOUT OPTIONS</p>
          <h2>산출물별 레이아웃 선택안</h2>
          <p className="muted">내용 없이 영역 구조만 먼저 확인합니다. 형식을 고정한 뒤 같은 데이터로 매번 분석지를 제작합니다.</p>
        </div>
      </div>
      <div className="examOutputLayoutGrid">
        {examOutputLayoutOptions.map((group) => (
          <section className="examOutputLayoutGroup" key={group.title}>
            <h3>{group.title}<span>{selectedChoices[group.key]}안</span></h3>
            <div>
              {group.options.map((option) => {
                const isSelected = selectedChoices[group.key] === option.code;
                return (
                  <button
                    aria-pressed={isSelected}
                    className={isSelected ? "examOutputLayoutOption selected" : "examOutputLayoutOption"}
                    key={`${group.title}_${option.code}`}
                    onClick={() => selectLayout(group.key, option.code)}
                    type="button"
                  >
                    <div>
                      <strong>{option.code}안</strong>
                      <span>{option.name}</span>
                      <i>{isSelected ? "선택됨" : "선택"}</i>
                    </div>
                    <ExamOutputLayoutWireframe option={option} />
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function AnalysisOutputPreviewCard({ title, tone = "", value = "", onEdit, onOpen, children }) {
  return (
    <article className={["panel", "outputPreviewCard", tone].filter(Boolean).join(" ")}>
      <div className="sectionHeader slim">
        <h2>{title}</h2>
        <div className="analysisPreviewActions">
          {onOpen ? <button className="primaryButton" onClick={onOpen} type="button">보기</button> : null}
          <button className="softButton" onClick={() => copyTextToClipboard(value)} type="button">복사</button>
          {onEdit ? <button className="softButton" onClick={onEdit} type="button">수정</button> : null}
        </div>
      </div>
      <div
        className={onOpen ? "outputPreviewBody clickable" : "outputPreviewBody"}
        onClick={onOpen}
        onKeyDown={(event) => {
          if (!onOpen) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onOpen();
          }
        }}
        role={onOpen ? "button" : undefined}
        tabIndex={onOpen ? 0 : undefined}
      >
        {children}
      </div>
    </article>
  );
}

function FinalQuestionCropImage({ image }) {
  const cropBox = normalizeCropBox(image?.cropBox);
  if (!image?.sourceUrl || !cropBox) return null;
  return (
    <figure
      className="finalQuestionCropImage"
      style={{ aspectRatio: `${Math.max(1, cropBox.width)} / ${Math.max(1, cropBox.height)}` }}
    >
      <img
        alt={image.alt || "원문항 크롭"}
        src={image.sourceUrl}
        style={{
          height: `${10000 / cropBox.height}%`,
          left: `-${(cropBox.x / cropBox.width) * 100}%`,
          top: `-${(cropBox.y / cropBox.height) * 100}%`,
          width: `${10000 / cropBox.width}%`
        }}
      />
    </figure>
  );
}

function ExamFinalDocumentPrint({ document }) {
  const normalizedDocument = normalizeExamFinalDocument(document);
  if (!normalizedDocument?.blocks?.length) return null;
  return (
    <article className="examAnalysisPrintableReport finalDocumentPrint">
      {normalizedDocument.blocks.map((block) => {
        if (block.type === "cover") {
          return (
            <header className="examAnalysisReportCover" key={block.id}>
              <p>{block.subtitle}</p>
              <h1>{block.title}</h1>
              <div className="examAnalysisReportMeta">
                {block.meta.length ? block.meta.map((item) => <span key={item}>{item}</span>) : <span>최종 편집본</span>}
              </div>
            </header>
          );
        }
        if (block.type === "table") {
          return (
            <ExamAnalysisReportSection key={block.id} title={block.title}>
              <div className="analysisPreviewTableWrap">
                <table className="analysisPreviewTable">
                  <thead>
                    <tr>{block.columns.map((column, index) => <th key={`${column}_${index}`}>{column}</th>)}</tr>
                  </thead>
                  <tbody>
                    {block.rows.length ? block.rows.map((row, rowIndex) => (
                      <tr key={`${block.id}_row_${rowIndex}`}>
                        {block.columns.map((_, cellIndex) => <td key={`${block.id}_${rowIndex}_${cellIndex}`}>{row[cellIndex]}</td>)}
                      </tr>
                    )) : (
                      <tr><td colSpan={block.columns.length}>입력된 행이 없습니다.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </ExamAnalysisReportSection>
          );
        }
        if (block.type === "chart") {
          const maxValue = Math.max(1, ...block.rows.map((row) => Number(row.value) || 0));
          return (
            <ExamAnalysisReportSection key={block.id} title={block.title}>
              <div className="finalDocumentChart">
                {block.rows.map((row) => (
                  <div className="finalDocumentChartRow" key={row.id}>
                    <span>{row.label}</span>
                    <div><i style={{ width: `${Math.max(6, ((Number(row.value) || 0) / maxValue) * 100)}%` }} /></div>
                    <strong>{row.value}</strong>
                    {row.note ? <em>{row.note}</em> : null}
                  </div>
                ))}
              </div>
            </ExamAnalysisReportSection>
          );
        }
        if (block.type === "flow") {
          return (
            <ExamAnalysisReportSection key={block.id} title={block.title}>
              <div className="analysisStrategyFlow finalDocumentFlow">
                {block.nodes.map((node, index) => (
                  <div className="analysisStrategyNode" key={node.id}>
                    <strong>{node.title}</strong>
                    <span>{node.detail}</span>
                    {index < block.nodes.length - 1 ? <i aria-hidden="true">→</i> : null}
                  </div>
                ))}
              </div>
            </ExamAnalysisReportSection>
          );
        }
        if (block.type === "questionSlots") {
          return (
            <ExamAnalysisReportSection key={block.id} title={block.title}>
              <div className="finalQuestionSlotGrid">
                {block.items.map((item) => (
                  <article className="finalQuestionSlotCard" key={item.id}>
                    <div>
                      <strong>{item.number}</strong>
                      <span>{item.title || "주요 문항"}</span>
                    </div>
                    <div className="finalQuestionSlotBoxes">
                      <p>
                        {item.originalImage ? <FinalQuestionCropImage image={item.originalImage} /> : item.originalSlot}
                        {item.originalImage ? <span>{item.originalSlot}</span> : null}
                      </p>
                      <p>{item.similarSlot}</p>
                    </div>
                    <small>{[item.similarProblemNeeded, item.similarProblemSource, item.similarProblemRelation].filter(Boolean).join(" · ")}</small>
                    {item.comment ? <p>{item.comment}</p> : null}
                  </article>
                ))}
              </div>
            </ExamAnalysisReportSection>
          );
        }
        return (
          <ExamAnalysisReportSection key={block.id} title={block.title}>
            <ExamAnalysisReportText value={block.value} />
          </ExamAnalysisReportSection>
        );
      })}
    </article>
  );
}

function ExamFinalDocumentBuilder({ analysis, document, onChange, onRegenerate }) {
  const normalizedDocument = normalizeExamFinalDocument(document) || createExamFinalDocumentFromAnalysis(analysis);

  function commit(nextDocument) {
    onChange({
      ...nextDocument,
      updatedAt: new Date().toISOString()
    });
  }

  function updateBlock(blockId, updater) {
    commit({
      ...normalizedDocument,
      blocks: normalizedDocument.blocks.map((block) =>
        block.id === blockId ? updater(block) : block
      )
    });
  }

  function moveBlock(blockId, direction) {
    const index = normalizedDocument.blocks.findIndex((block) => block.id === blockId);
    const targetIndex = index + direction;
    if (index < 0 || targetIndex < 0 || targetIndex >= normalizedDocument.blocks.length) return;
    const nextBlocks = [...normalizedDocument.blocks];
    const [block] = nextBlocks.splice(index, 1);
    nextBlocks.splice(targetIndex, 0, block);
    commit({ ...normalizedDocument, blocks: nextBlocks });
  }

  function removeBlock(blockId) {
    commit({
      ...normalizedDocument,
      blocks: normalizedDocument.blocks.filter((block) => block.id !== blockId)
    });
  }

  function addBlock(type) {
    const blockMap = {
      text: { id: createFinalDocumentId("text"), type: "text", title: "새 문단", value: "" },
      table: { id: createFinalDocumentId("table"), type: "table", title: "새 표", columns: ["항목", "내용"], rows: [["", ""]] },
      chart: { id: createFinalDocumentId("chart"), type: "chart", title: "새 차트", chartType: "bar", rows: [{ id: createFinalDocumentId("chartRow"), label: "항목", value: 1, note: "" }] },
      flow: { id: createFinalDocumentId("flow"), type: "flow", title: "새 흐름도", nodes: [{ id: createFinalDocumentId("flowNode"), title: "1단계", detail: "" }] },
      questionSlots: { id: createFinalDocumentId("slotBlock"), type: "questionSlots", title: "문항 삽입 슬롯", items: [] }
    };
    commit({ ...normalizedDocument, blocks: [...normalizedDocument.blocks, blockMap[type]] });
  }

  return (
    <article className="panel analysisFinalDocumentBuilder">
      <div className="sectionHeader slim">
        <div>
          <p className="eyebrow">EDITABLE REPORT</p>
          <h2>최종 편집본</h2>
          <p className="muted">글은 바로 수정하고, 표는 셀 수정, 차트·흐름도는 원본 데이터를 고치면 렌더링이 함께 바뀝니다.</p>
        </div>
        <div className="analysisFinalReportActions">
          <button
            className="softButton"
            onClick={() => {
              if (window.confirm("현재 편집본을 지우고 AI/문항 데이터 기준 초안으로 다시 만들까요?")) onRegenerate();
            }}
            type="button"
          >
            현재 데이터로 다시 생성
          </button>
        </div>
      </div>
      <div className="finalDocumentAddBar">
        <button type="button" onClick={() => addBlock("text")}>문단 추가</button>
        <button type="button" onClick={() => addBlock("table")}>표 추가</button>
        <button type="button" onClick={() => addBlock("chart")}>차트 추가</button>
        <button type="button" onClick={() => addBlock("flow")}>흐름도 추가</button>
        <button type="button" onClick={() => addBlock("questionSlots")}>문항 슬롯 추가</button>
      </div>
      <div className="finalDocumentBlocks">
        {normalizedDocument.blocks.map((block, index) => (
          <ExamFinalDocumentBlockEditor
            block={block}
            isFirst={index === 0}
            isLast={index === normalizedDocument.blocks.length - 1}
            key={block.id}
            moveBlock={moveBlock}
            removeBlock={removeBlock}
            updateBlock={updateBlock}
          />
        ))}
      </div>
    </article>
  );
}

function ExamFinalDocumentBlockEditor({ block, isFirst, isLast, updateBlock, moveBlock, removeBlock }) {
  const updateField = (field, value) => updateBlock(block.id, (current) => ({ ...current, [field]: value }));
  const blockLabel = {
    cover: "표지",
    text: "문단",
    table: "표",
    chart: "차트 데이터",
    flow: "흐름도",
    questionSlots: "문항 삽입 슬롯"
  }[block.type] || "블록";

  return (
    <section className={`finalDocumentBlock ${block.type}`}>
      <div className="finalDocumentBlockHeader">
        <span>{blockLabel}</span>
        <div>
          <button disabled={isFirst} onClick={() => moveBlock(block.id, -1)} type="button">위</button>
          <button disabled={isLast} onClick={() => moveBlock(block.id, 1)} type="button">아래</button>
          <button onClick={() => removeBlock(block.id)} type="button">삭제</button>
        </div>
      </div>

      {block.type === "cover" ? (
        <div className="fieldGrid">
          <label className="wideLabel">제목<input value={block.title} onChange={(event) => updateField("title", event.target.value)} /></label>
          <label className="wideLabel">부제<input value={block.subtitle} onChange={(event) => updateField("subtitle", event.target.value)} /></label>
          <label className="wideLabel">메타데이터<textarea rows={3} value={block.meta.join("\n")} onChange={(event) => updateField("meta", event.target.value.split("\n").map((item) => item.trim()).filter(Boolean))} /></label>
        </div>
      ) : null}

      {block.type === "text" ? (
        <div className="fieldGrid">
          <label className="wideLabel">섹션 제목<input value={block.title} onChange={(event) => updateField("title", event.target.value)} /></label>
          <label className="wideLabel">본문<textarea rows={7} value={block.value} onChange={(event) => updateField("value", event.target.value)} /></label>
        </div>
      ) : null}

      {block.type === "table" ? (
        <ExamFinalTableEditor block={block} updateBlock={updateBlock} />
      ) : null}

      {block.type === "chart" ? (
        <ExamFinalChartEditor block={block} updateBlock={updateBlock} />
      ) : null}

      {block.type === "flow" ? (
        <ExamFinalFlowEditor block={block} updateBlock={updateBlock} />
      ) : null}

      {block.type === "questionSlots" ? (
        <ExamFinalQuestionSlotEditor block={block} updateBlock={updateBlock} />
      ) : null}
    </section>
  );
}

function ExamFinalTableEditor({ block, updateBlock }) {
  const updateTable = (patch) => updateBlock(block.id, (current) => ({ ...current, ...patch }));
  const updateColumn = (columnIndex, value) => {
    updateTable({ columns: block.columns.map((column, index) => index === columnIndex ? value : column) });
  };
  const updateCell = (rowIndex, cellIndex, value) => {
    updateTable({
      rows: block.rows.map((row, index) =>
        index === rowIndex ? row.map((cell, currentCellIndex) => currentCellIndex === cellIndex ? value : cell) : row
      )
    });
  };
  return (
    <div className="finalDocumentTableEditor">
      <label>표 제목<input value={block.title} onChange={(event) => updateTable({ title: event.target.value })} /></label>
      <div className="analysisPreviewTableWrap">
        <table className="analysisPreviewTable editable">
          <thead>
            <tr>
              {block.columns.map((column, columnIndex) => (
                <th key={`${block.id}_column_${columnIndex}`}>
                  <input value={column} onChange={(event) => updateColumn(columnIndex, event.target.value)} />
                </th>
              ))}
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${block.id}_row_${rowIndex}`}>
                {block.columns.map((_, cellIndex) => (
                  <td key={`${block.id}_${rowIndex}_${cellIndex}`}>
                    <textarea rows={2} value={row[cellIndex] ?? ""} onChange={(event) => updateCell(rowIndex, cellIndex, event.target.value)} />
                  </td>
                ))}
                <td><button onClick={() => updateTable({ rows: block.rows.filter((_, index) => index !== rowIndex) })} type="button">행 삭제</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="finalDocumentInlineActions">
        <button onClick={() => updateTable({ rows: [...block.rows, block.columns.map(() => "")] })} type="button">행 추가</button>
        <button onClick={() => updateTable({ columns: [...block.columns, "새 열"], rows: block.rows.map((row) => [...row, ""]) })} type="button">열 추가</button>
      </div>
    </div>
  );
}

function ExamFinalChartEditor({ block, updateBlock }) {
  const maxValue = Math.max(1, ...block.rows.map((row) => Number(row.value) || 0));
  const updateChart = (patch) => updateBlock(block.id, (current) => ({ ...current, ...patch }));
  const updateRow = (rowId, patch) => {
    updateChart({ rows: block.rows.map((row) => row.id === rowId ? { ...row, ...patch } : row) });
  };
  return (
    <div className="finalDocumentChartEditor">
      <label>차트 제목<input value={block.title} onChange={(event) => updateChart({ title: event.target.value })} /></label>
      <div className="finalDocumentChart">
        {block.rows.map((row) => (
          <div className="finalDocumentChartRow" key={row.id}>
            <span>{row.label || "항목"}</span>
            <div><i style={{ width: `${Math.max(6, ((Number(row.value) || 0) / maxValue) * 100)}%` }} /></div>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
      <div className="finalDocumentDataRows">
        {block.rows.map((row) => (
          <div className="finalDocumentDataRow" key={row.id}>
            <input value={row.label} onChange={(event) => updateRow(row.id, { label: event.target.value })} placeholder="항목" />
            <input inputMode="decimal" value={row.value} onChange={(event) => updateRow(row.id, { value: Number(event.target.value) || 0 })} placeholder="값" />
            <input value={row.note} onChange={(event) => updateRow(row.id, { note: event.target.value })} placeholder="비고" />
            <button onClick={() => updateChart({ rows: block.rows.filter((item) => item.id !== row.id) })} type="button">삭제</button>
          </div>
        ))}
      </div>
      <button onClick={() => updateChart({ rows: [...block.rows, { id: createFinalDocumentId("chartRow"), label: "", value: 0, note: "" }] })} type="button">데이터 추가</button>
    </div>
  );
}

function ExamFinalFlowEditor({ block, updateBlock }) {
  const updateFlow = (patch) => updateBlock(block.id, (current) => ({ ...current, ...patch }));
  const updateNode = (nodeId, patch) => {
    updateFlow({ nodes: block.nodes.map((node) => node.id === nodeId ? { ...node, ...patch } : node) });
  };
  return (
    <div className="finalDocumentFlowEditor">
      <label>흐름도 제목<input value={block.title} onChange={(event) => updateFlow({ title: event.target.value })} /></label>
      <div className="analysisStrategyFlow finalDocumentFlow">
        {block.nodes.map((node, index) => (
          <div className="analysisStrategyNode" key={node.id}>
            <input value={node.title} onChange={(event) => updateNode(node.id, { title: event.target.value })} />
            <textarea rows={3} value={node.detail} onChange={(event) => updateNode(node.id, { detail: event.target.value })} />
            <button onClick={() => updateFlow({ nodes: block.nodes.filter((item) => item.id !== node.id) })} type="button">삭제</button>
            {index < block.nodes.length - 1 ? <i aria-hidden="true">→</i> : null}
          </div>
        ))}
      </div>
      <button onClick={() => updateFlow({ nodes: [...block.nodes, { id: createFinalDocumentId("flowNode"), title: `${block.nodes.length + 1}단계`, detail: "" }] })} type="button">노드 추가</button>
    </div>
  );
}

function ExamFinalQuestionSlotEditor({ block, updateBlock }) {
  const updateSlots = (patch) => updateBlock(block.id, (current) => ({ ...current, ...patch }));
  const updateItem = (itemId, patch) => {
    updateSlots({ items: block.items.map((item) => item.id === itemId ? { ...item, ...patch } : item) });
  };
  return (
    <div className="finalQuestionSlotEditor">
      <label>슬롯 제목<input value={block.title} onChange={(event) => updateSlots({ title: event.target.value })} /></label>
      <div className="finalQuestionSlotGrid editable">
        {block.items.map((item) => (
          <article className="finalQuestionSlotCard" key={item.id}>
            {item.originalImage ? (
              <FinalQuestionCropImage image={item.originalImage} />
            ) : null}
            <div className="fieldGrid two">
              <label>문항<input value={item.number} onChange={(event) => updateItem(item.id, { number: event.target.value })} /></label>
              <label>제목<input value={item.title} onChange={(event) => updateItem(item.id, { title: event.target.value })} /></label>
              <label>유사문항 필요
                <select value={item.similarProblemNeeded} onChange={(event) => updateItem(item.id, { similarProblemNeeded: event.target.value })}>
                  {similarProblemNeedOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label>변형 구분
                <select value={item.similarProblemRelation} onChange={(event) => updateItem(item.id, { similarProblemRelation: event.target.value })}>
                  {similarProblemRelationOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="wideLabel">유사문항 출처<input value={item.similarProblemSource} onChange={(event) => updateItem(item.id, { similarProblemSource: event.target.value })} /></label>
              <label className="wideLabel">원문항 슬롯<input value={item.originalSlot} onChange={(event) => updateItem(item.id, { originalSlot: event.target.value })} /></label>
              <label className="wideLabel">유사문항 슬롯<input value={item.similarSlot} onChange={(event) => updateItem(item.id, { similarSlot: event.target.value })} /></label>
              <label className="wideLabel">문항 코멘트<textarea rows={4} value={item.comment} onChange={(event) => updateItem(item.id, { comment: event.target.value })} /></label>
            </div>
            <button onClick={() => updateSlots({ items: block.items.filter((candidate) => candidate.id !== item.id) })} type="button">슬롯 삭제</button>
          </article>
        ))}
      </div>
      <button
        onClick={() => updateSlots({
          items: [...block.items, {
            id: createFinalDocumentId("slot"),
            number: `${block.items.length + 1}번`,
            title: "",
            originalSlot: "원문항 삽입 영역",
            originalImage: null,
            similarSlot: "유사문항 삽입 영역",
            similarProblemNeeded: "확인 필요",
            similarProblemSource: "",
            similarProblemRelation: "확인 필요",
            comment: ""
          }]
        })}
        type="button"
      >
        슬롯 추가
      </button>
    </div>
  );
}

function ExamQuestionInsightTables({ questionItems = [], questionComposition = null }) {
  const items = normalizeExamQuestionItems(questionItems);
  const commentedItems = items.filter((item) =>
    [
      item.teacherComment,
      item.variationRelationComment,
      item.strategyComment,
      formatSsenTypeTags(item.ssenTypeTags),
      item.similarProblemSource,
      item.similarProblemNeeded && item.similarProblemNeeded !== "확인 필요" ? item.similarProblemNeeded : "",
      item.similarProblemRelation && item.similarProblemRelation !== "확인 필요" ? item.similarProblemRelation : ""
    ].some((value) => String(value || "").trim())
  );
  const unitRows = summarizeQuestionUnits(items);
  const ssenTypeRows = summarizeQuestionSsenTypes(items);
  const sourceRows = items.filter((item) =>
    (String(item.source || "").trim() && item.source !== "확인 필요") ||
    item.similarProblemNeeded === "필요" ||
    String(item.similarProblemSource || "").trim() ||
    (item.similarProblemRelation && item.similarProblemRelation !== "확인 필요")
  );
  const hardItems = items.filter((item) =>
    ["중상", "상"].includes(item.difficulty) || ["앞번호 고난도", "준킬러", "킬러", "서술형 변별"].includes(item.role)
  );
  const basicTaggedItems = items.filter((item) => item.tags?.includes("기본문항"));
  const mistakeTaggedItems = items.filter((item) => item.tags?.includes("실수문항"));
  const importantTaggedItems = items.filter((item) => item.tags?.includes("주요문항"));
  const firstGradeTaggedItems = items.filter((item) => item.tags?.includes("1등급 변별문항"));
  const secondGradeTaggedItems = items.filter((item) => item.tags?.includes("2등급 변별문항"));
  const middlePriorityItems = [...importantTaggedItems, ...secondGradeTaggedItems, ...mistakeTaggedItems]
    .filter((item, index, array) => array.findIndex((candidate) => candidate.questionId === item.questionId) === index);
  const strategyRows = [
    {
      level: "상위권",
      focus: firstGradeTaggedItems.length ? "1등급 변별문항 확장" : "고난도/변별 문항 재풀이",
      detail: (firstGradeTaggedItems.length ? firstGradeTaggedItems : hardItems).length
        ? `${(firstGradeTaggedItems.length ? firstGradeTaggedItems : hardItems).map((item) => `${item.number}번`).join(", ")} 중심`
        : "킬러 후보 문항 입력 후 자동 정리"
    },
    {
      level: "중위권",
      focus: middlePriorityItems.length ? "주요·실수·2등급 변별문항 정리" : "실수유도·앞번호 고난도 정리",
      detail: (middlePriorityItems.length ? middlePriorityItems : items.filter((item) => ["실수유도", "앞번호 고난도"].includes(item.role))).map((item) => `${item.number}번`).join(", ") || "문항 역할 입력 필요"
    },
    {
      level: "하위권",
      focus: "기본문항과 필수 단원 복습",
      detail: basicTaggedItems.length ? `${basicTaggedItems.map((item) => `${item.number}번`).join(", ")} 우선` : unitRows.slice(0, 3).map((row) => row.unit).join(", ") || "단원 입력 필요"
    }
  ];

  if (!items.length) {
    return (
      <div className="analysisQuestionEmpty">
        문항수를 먼저 만들면 문항분석표, 단원별 출제표, 학생 대비전략표가 자동으로 정리됩니다.
      </div>
    );
  }

  return (
    <div className="analysisQuestionTables">
      <section>
        <div className="analysisQuestionTableTitle">
          <strong>문항분석표</strong>
          <span>{items.length}문항 · 코멘트 {commentedItems.length}개</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>문항</th>
                <th>배점/비중</th>
                <th>단원</th>
                <th>쎈 유형</th>
                <th>난이도</th>
                <th>역할</th>
                <th>태그</th>
                <th>강사 코멘트</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.questionId}>
                  <td>{item.number}번</td>
                  <td>{formatQuestionScoreWithWeight(item, items, questionComposition)}</td>
                  <td>{item.unit || "-"}</td>
                  <td>{formatSsenTypeTags(item.ssenTypeTags) || "-"}</td>
                  <td>{item.difficulty || "-"}</td>
                  <td>{item.role || "-"}</td>
                  <td>{item.tags?.length ? item.tags.join(", ") : "-"}</td>
                  <td>{item.teacherComment || item.strategyComment || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="analysisQuestionTableTitle">
          <strong>단원별 출제</strong>
          <span>문항수 기준</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>단원</th>
                <th>문항수</th>
                <th>합산 배점</th>
                <th>고난도/변별</th>
                <th>문항</th>
              </tr>
            </thead>
            <tbody>
              {unitRows.map((row) => (
                <tr key={row.unit}>
                  <td>{row.unit}</td>
                  <td>{row.count}</td>
                  <td>{row.score || "-"}</td>
                  <td>{row.hard}</td>
                  <td>{row.questions.map((number) => `${number}번`).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="analysisQuestionTableTitle">
          <strong>쎈 유형별 분류</strong>
          <span>{ssenTypeRows.length}유형</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>쎈 유형</th>
                <th>단원</th>
                <th>주유형</th>
                <th>보조유형</th>
                <th>문항</th>
              </tr>
            </thead>
            <tbody>
              {ssenTypeRows.length ? ssenTypeRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td>{row.unitName || "-"}</td>
                  <td>{row.primary || "-"}</td>
                  <td>{row.secondary || "-"}</td>
                  <td>{row.questions.map((number) => `${number}번`).join(", ")}</td>
                </tr>
              )) : (
                <tr><td colSpan="5">문항카드에 쎈 유형을 입력하면 자동으로 정리됩니다.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="analysisQuestionTableTitle">
          <strong>부교재·유사문항 활용</strong>
          <span>{sourceRows.length}문항</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>문항</th>
                <th>출처</th>
                <th>유사문항</th>
                <th>변형 구분</th>
                <th>변형 관계</th>
              </tr>
            </thead>
            <tbody>
              {sourceRows.length ? sourceRows.map((item) => (
                <tr key={item.questionId}>
                  <td>{item.number}번</td>
                  <td>{item.similarProblemSource || item.source}</td>
                  <td>{item.similarProblemNeeded || "확인 필요"}</td>
                  <td>{item.similarProblemRelation || "확인 필요"}</td>
                  <td>{item.variationRelationComment || "변형 관계 입력 필요"}</td>
                </tr>
              )) : (
                <tr><td colSpan="5">출처나 유사문항 메타데이터를 입력하면 자동으로 정리됩니다.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="analysisQuestionTableTitle">
          <strong>학생 대비전략</strong>
          <span>문항 코멘트 기반</span>
        </div>
        <div className="analysisPreviewTableWrap">
          <table className="analysisPreviewTable">
            <thead>
              <tr>
                <th>대상</th>
                <th>우선순위</th>
                <th>적용 문항/단원</th>
              </tr>
            </thead>
            <tbody>
              {strategyRows.map((row) => (
                <tr key={row.level}>
                  <td>{row.level}</td>
                  <td>{row.focus}</td>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function ExamStrategyFlow({ questionItems = [] }) {
  const nodes = getExamStrategyFlowNodes(questionItems);
  return (
    <div className="analysisStrategyFlow">
      {nodes.map((node, index) => (
        <div className="analysisStrategyNode" key={node.title}>
          <strong>{node.title}</strong>
          <span>{node.detail}</span>
          {index < nodes.length - 1 ? <i aria-hidden="true">→</i> : null}
        </div>
      ))}
    </div>
  );
}

function ExamAnalysisFinalReport({ analysis }) {
  const finalDocument = normalizeExamFinalDocument(analysis.finalDocument);
  if (finalDocument?.blocks?.length) {
    return <ExamFinalDocumentPrint document={finalDocument} />;
  }
  const meta = getExamAnalysisReportMeta(analysis);
  const sourceFiles = Array.isArray(analysis.sourceFiles) ? analysis.sourceFiles : [];
  const hasInsight = hasExamAnalysisTeacherInsight(analysis);
  return (
    <article className="examAnalysisPrintableReport">
      <header className="examAnalysisReportCover">
        <p>{getExamAnalysisReportSubtitle(analysis)}</p>
        <h1>{getExamAnalysisReportTitle(analysis)}</h1>
        <div className="examAnalysisReportMeta">
          {meta.length ? meta.map((item) => <span key={item}>{item}</span>) : <span>최종 분석 초안</span>}
        </div>
      </header>

      <section className="examAnalysisReportCards">
        <article>
          <strong>원본 범위</strong>
          <span>{sourceFiles.length ? `${sourceFiles.length}개 PDF 기반` : "PDF 업로드 후 자동 반영"}</span>
        </article>
        <article>
          <strong>강사 인사이트</strong>
          <span>{hasInsight ? "반영됨" : "추가 필요"}</span>
        </article>
        <article>
          <strong>최종 산출물</strong>
          <span>강사용 · 학생용 · 블로그 · 인스타</span>
        </article>
      </section>

      {!hasInsight ? (
        <div className="examAnalysisReportWarning">
          강사 인사이트가 아직 충분히 입력되지 않았습니다. 현장 체감, 학생 오답, 실제 수업 판단을 넣어야 AI 문체가 줄어듭니다.
        </div>
      ) : null}

      <ExamAnalysisReportSection title="1. 한눈에 보는 시험 판단">
        <ExamAnalysisReportText value={[analysis.oneLineSummary, analysis.examStructure, analysis.aiOverview].filter(Boolean).join("\n\n")} />
      </ExamAnalysisReportSection>

      <div className="examAnalysisReportTwoColumn">
        <ExamAnalysisReportSection title="2. 단원별 출제 분포">
          <ExamAnalysisReportText value={analysis.unitDistribution} />
        </ExamAnalysisReportSection>
        <ExamAnalysisReportSection title="3. 강사 총평">
          <ExamAnalysisReportText value={analysis.insightSummary} />
        </ExamAnalysisReportSection>
      </div>

      <div className="examAnalysisReportTwoColumn">
        <ExamAnalysisReportSection title="4. 유형 분류와 킬러/준킬러">
          <ExamAnalysisReportText value={[analysis.typeClassification, analysis.killerProblems, analysis.insightKiller].filter(Boolean).join("\n\n")} />
        </ExamAnalysisReportSection>
        <ExamAnalysisReportSection title="5. 학생 오답과 학습 방향">
          <ExamAnalysisReportText value={[analysis.insightStudentErrors, analysis.insightDirection].filter(Boolean).join("\n\n")} />
        </ExamAnalysisReportSection>
      </div>

      <ExamAnalysisReportSection title="6. 핵심 패턴과 다음 시험 예측">
        <ExamAnalysisReportText value={[analysis.fiveCorePatterns, analysis.insightUnits, analysis.insightPrediction, analysis.sourceCheckNotes].filter(Boolean).join("\n\n")} />
      </ExamAnalysisReportSection>

      {normalizeExamQuestionItems(analysis.questionItems).length ? (
        <ExamAnalysisReportSection title="7. 문항별 검수와 강사 코멘트">
          <ExamQuestionInsightTables questionItems={analysis.questionItems} questionComposition={analysis.questionComposition} />
          <ExamStrategyFlow questionItems={analysis.questionItems} />
        </ExamAnalysisReportSection>
      ) : null}

      <section className="examAnalysisReportOutputs">
        <ExamAnalysisReportSection title="학생 분석지">
          <ExamAnalysisReportText value={analysis.studentAnalysisDraft} />
        </ExamAnalysisReportSection>
        <ExamAnalysisReportSection title="블로그 초안">
          <ExamAnalysisReportText value={analysis.blogDraft} />
        </ExamAnalysisReportSection>
        <ExamAnalysisReportSection title="인스타 카드뉴스">
          <ExamAnalysisReportText value={analysis.instagramDraft} />
        </ExamAnalysisReportSection>
      </section>
    </article>
  );
}

const examAnalysisDetailSections = [
  { id: "ai", title: "AI 구조화 필드", description: "시험 원문에서 뽑은 1차 분석입니다.", fields: [
    ["oneLineSummary", "한 줄 총평", 3],
    ["examStructure", "시험 구조", 5],
    ["aiOverview", "시험 개요", 5],
    ["unitDistribution", "단원별 출제 분포", 6],
    ["typeClassification", "유형 분류", 6],
    ["killerProblems", "킬러/준킬러 문항", 6],
    ["fiveCorePatterns", "5대 핵심 패턴", 6],
    ["sourceCheckNotes", "OCR/원문 확인 필요", 5]
  ] },
  { id: "insight", title: "강사 검토", description: "강사 인사이트를 추가해 분석지를 확정합니다.", fields: [
    ["insightSummary", "A. 강사 총평", 7],
    ["insightUnits", "B. 단원별 인사이트", 7],
    ["insightKiller", "C. 킬러문항 분석", 7],
    ["insightStudentErrors", "D. 실제 학생 오답", 7],
    ["insightPrediction", "E. 다음 시험 예측", 7],
    ["insightDirection", "F. 학습 방향", 7]
  ] },
  { id: "output", title: "산출물 초안", description: "학생용/블로그/인스타 산출물을 수정합니다.", fields: [
    ["studentAnalysisDraft", "학생 분석지", 8],
    ["blogDraft", "블로그 초안", 8],
    ["instagramDraft", "인스타 카드뉴스", 8]
  ] }
];

function safeIdPart(value = "") {
  return String(value)
    .trim()
    .replaceAll(/\s+/g, "-")
    .replaceAll(/[^0-9A-Za-z가-힣_-]/g, "")
    .slice(0, 40);
}

function shortStableHash(value = "") {
  let hash = 0;
  for (const char of String(value)) {
    hash = ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  }
  return Math.abs(hash).toString(36).slice(0, 6);
}

function getExamAnalysisFolderMeta(source = {}) {
  const examCycle = String(source.examCycle ?? source.folderExamCycle ?? "").trim();
  const examName = String(source.folderExamName ?? source.examName ?? (examCycle ? examCycleLabel(examCycle) : "")).trim();
  return {
    schoolName: String(source.folderSchoolName ?? source.schoolName ?? "").trim(),
    grade: String(source.folderGrade ?? source.grade ?? "").trim(),
    subject: String(source.folderSubject ?? source.subject ?? "").trim(),
    examCycle,
    examName
  };
}

function createExamAnalysisFolderId(source = {}) {
  const meta = getExamAnalysisFolderMeta(source);
  const key = [
    meta.schoolName || "school",
    meta.grade || "grade",
    meta.examName || meta.examCycle || "exam"
  ].join("_");
  return `exam_folder_${safeIdPart(key) || "default"}_${shortStableHash(key)}`;
}

function createExamAnalysisSchoolId(source = {}) {
  const schoolName = String(source.schoolName ?? source.folderSchoolName ?? "").trim() || "학교 미입력";
  return `exam_school_${safeIdPart(schoolName) || "school"}_${shortStableHash(schoolName)}`;
}

function getExamAnalysisFolderTitle(folder = {}) {
  const meta = getExamAnalysisFolderMeta(folder);
  return [
    meta.schoolName || "학교 미입력",
    meta.grade || "학년 미입력",
    meta.examName || "고사 미입력"
  ].join(" · ");
}

function normalizeExamAnalysisFolder(folder = {}) {
  const meta = getExamAnalysisFolderMeta(folder);
  const nowIso = new Date().toISOString();
  const folderId = folder.folderId || folder.analysisFolderId || createExamAnalysisFolderId(meta);
  return {
    folderId,
    folderType: folder.folderType || "exam",
    folderName: String(folder.folderName ?? "").trim() || getExamAnalysisFolderTitle(meta),
    schoolName: meta.schoolName,
    grade: meta.grade,
    subject: meta.subject,
    examCycle: meta.examCycle,
    examName: meta.examName,
    createdAt: folder.createdAt || nowIso,
    updatedAt: folder.updatedAt || nowIso
  };
}

function normalizeExamAnalysisSchoolFolder(folder = {}) {
  const nowIso = new Date().toISOString();
  const schoolName = String(folder.schoolName ?? folder.folderSchoolName ?? "").trim();
  const folderId = folder.folderId || createExamAnalysisSchoolId({ schoolName });
  return {
    folderId,
    folderType: "school",
    schoolName,
    folderName: String(folder.folderName ?? schoolName ?? "").trim() || "학교 미입력",
    createdAt: folder.createdAt || nowIso,
    updatedAt: folder.updatedAt || nowIso
  };
}

function createExamAnalysisFolderDraft(folder = {}) {
  const normalized = normalizeExamAnalysisFolder({
    examCycle: currentExamCycle,
    examName: examCycleLabel(currentExamCycle),
    ...folder
  });
  return {
    folderId: folder.folderId || normalized.folderId,
    folderType: "exam",
    schoolName: normalized.schoolName,
    grade: normalized.grade,
    subject: normalized.subject || "수학",
    examCycle: normalized.examCycle || currentExamCycle,
    examName: normalized.examName || examCycleLabel(currentExamCycle),
    folderName: normalized.folderName
  };
}

function createExamAnalysisSchoolDraft(folder = {}) {
  const normalized = normalizeExamAnalysisSchoolFolder(folder);
  return {
    folderId: folder.folderId || normalized.folderId,
    folderType: "school",
    schoolName: normalized.schoolName,
    folderName: normalized.folderName,
    previousSchoolName: folder.previousSchoolName ?? normalized.schoolName
  };
}

function applyExamAnalysisFolderToAnalysis(analysis = {}, folder = {}) {
  const normalizedFolder = normalizeExamAnalysisFolder(folder);
  return {
    ...analysis,
    analysisFolderId: normalizedFolder.folderId,
    schoolName: normalizedFolder.schoolName,
    grade: normalizedFolder.grade,
    subject: normalizedFolder.subject || analysis.subject || "",
    examCycle: normalizedFolder.examCycle || analysis.examCycle || "",
    examName: normalizedFolder.examName,
    updatedAt: new Date().toISOString()
  };
}

function getExamAnalysisFolderId(analysis = {}) {
  return analysis.analysisFolderId || createExamAnalysisFolderId(analysis);
}

function isExamAnalysisSchoolFolder(folder = {}) {
  if (folder.folderType === "school") return true;
  return Boolean(folder.schoolName) && !folder.grade && !folder.examName && !folder.examCycle;
}

function buildExamAnalysisFolderList(analyses = [], savedFolders = []) {
  const folderMap = new Map();
  savedFolders.forEach((folder) => {
    if (isExamAnalysisSchoolFolder(folder)) return;
    const normalized = normalizeExamAnalysisFolder(folder);
    folderMap.set(normalized.folderId, { ...normalized, analyses: [], persisted: true });
  });
  analyses.forEach((analysis) => {
    const folderId = getExamAnalysisFolderId(analysis);
    const existing = folderMap.get(folderId) ?? {
      ...normalizeExamAnalysisFolder({ ...analysis, folderId }),
      analyses: [],
      persisted: false
    };
    const normalizedAnalysis = {
      ...analysis,
      analysisFolderId: folderId
    };
    existing.analyses.push(normalizedAnalysis);
    const analysisUpdatedAt = analysis.updatedAt || analysis.aiLastRunAt || analysis.createdAt || "";
    if (analysisUpdatedAt && (!existing.latestAnalysisAt || analysisUpdatedAt > existing.latestAnalysisAt)) {
      existing.latestAnalysisAt = analysisUpdatedAt;
    }
    folderMap.set(folderId, existing);
  });
  return [...folderMap.values()]
    .map((folder) => ({
      ...folder,
      analyses: folder.analyses.sort((a, b) => String(b.updatedAt || b.aiLastRunAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.aiLastRunAt || a.createdAt || "")))
    }))
    .sort((a, b) => {
      const timeCompare = String(b.latestAnalysisAt || b.updatedAt || "").localeCompare(String(a.latestAnalysisAt || a.updatedAt || ""));
      if (timeCompare !== 0) return timeCompare;
      return getExamAnalysisFolderTitle(a).localeCompare(getExamAnalysisFolderTitle(b), "ko");
    });
}

function getExamAnalysisGradeSortValue(grade = "") {
  const gradeNumber = String(grade).match(/\d/)?.[0];
  return gradeNumber ? Number(gradeNumber) : 99;
}

function getExamAnalysisExamSortValue(folder = {}) {
  const [yearText, semesterText, phase] = String(folder.examCycle ?? "").split("-");
  const year = Number(yearText) || 0;
  const semester = Number(semesterText) || 0;
  const phaseOrder = phase === "mid" ? 1 : phase === "final" ? 2 : 9;
  return `${String(9999 - year).padStart(4, "0")}-${semester}-${phaseOrder}-${folder.examName ?? ""}`;
}

function buildExamAnalysisLibraryTree(analyses = [], savedFolders = []) {
  const schoolMap = new Map();
  const schoolIdByName = new Map();
  savedFolders.forEach((folder) => {
    if (!isExamAnalysisSchoolFolder(folder)) return;
    const normalized = normalizeExamAnalysisSchoolFolder(folder);
    schoolIdByName.set(normalized.schoolName || "학교 미입력", normalized.folderId);
  });

  function ensureSchool(source = {}) {
    const schoolName = String(source.schoolName ?? "").trim() || "학교 미입력";
    const schoolId = source.folderType === "school" && source.folderId
      ? source.folderId
      : schoolIdByName.get(schoolName) || createExamAnalysisSchoolId({ schoolName });
    const existing = schoolMap.get(schoolId) ?? {
      folderId: schoolId,
      folderType: "school",
      schoolName,
      folderName: schoolName,
      grades: new Map(),
      persisted: false,
      createdAt: source.createdAt || "",
      updatedAt: source.updatedAt || ""
    };
    existing.schoolName = source.schoolName || existing.schoolName;
    existing.folderName = source.folderName || existing.folderName || existing.schoolName;
    existing.persisted = existing.persisted || source.folderType === "school" || false;
    if (source.updatedAt && (!existing.updatedAt || source.updatedAt > existing.updatedAt)) existing.updatedAt = source.updatedAt;
    schoolMap.set(schoolId, existing);
    return existing;
  }

  function ensureGrade(school, grade = "") {
    const gradeKey = String(grade || "학년 미입력").trim();
    const existing = school.grades.get(gradeKey) ?? {
      grade: gradeKey,
      exams: new Map(),
      analysisCount: 0
    };
    school.grades.set(gradeKey, existing);
    return existing;
  }

  function ensureExam(school, source = {}) {
    const normalized = normalizeExamAnalysisFolder({ ...source, folderType: "exam" });
    const grade = ensureGrade(school, normalized.grade);
    const existing = grade.exams.get(normalized.folderId) ?? {
      ...normalized,
      folderType: "exam",
      analyses: [],
      persisted: Boolean(source.folderId),
      analysisCount: 0
    };
    existing.schoolName = normalized.schoolName || school.schoolName;
    existing.grade = normalized.grade;
    existing.subject = normalized.subject || existing.subject;
    existing.examCycle = normalized.examCycle || existing.examCycle;
    existing.examName = normalized.examName || existing.examName;
    existing.folderName = normalized.folderName || existing.folderName;
    existing.persisted = existing.persisted || Boolean(source.folderId);
    if (source.updatedAt && (!existing.updatedAt || source.updatedAt > existing.updatedAt)) existing.updatedAt = source.updatedAt;
    grade.exams.set(normalized.folderId, existing);
    return existing;
  }

  savedFolders.forEach((folder) => {
    if (isExamAnalysisSchoolFolder(folder)) {
      ensureSchool(normalizeExamAnalysisSchoolFolder(folder));
      return;
    }
    const normalized = normalizeExamAnalysisFolder({ ...folder, folderType: "exam" });
    const school = ensureSchool({ schoolName: normalized.schoolName });
    ensureExam(school, normalized);
  });

  analyses.forEach((analysis) => {
    const normalizedAnalysis = {
      ...analysis,
      analysisFolderId: getExamAnalysisFolderId(analysis)
    };
    const school = ensureSchool({ schoolName: normalizedAnalysis.schoolName });
    const exam = ensureExam(school, {
      ...normalizedAnalysis,
      folderId: normalizedAnalysis.analysisFolderId,
      folderType: "exam"
    });
    exam.analyses.push(normalizedAnalysis);
    exam.analysisCount += 1;
    const grade = ensureGrade(school, exam.grade);
    grade.analysisCount += 1;
  });

  return [...schoolMap.values()]
    .map((school) => {
      const grades = [...school.grades.values()]
        .map((grade) => ({
          ...grade,
          exams: [...grade.exams.values()]
            .map((exam) => ({
              ...exam,
              analyses: exam.analyses.sort((a, b) => String(b.updatedAt || b.aiLastRunAt || b.createdAt || "").localeCompare(String(a.updatedAt || a.aiLastRunAt || a.createdAt || "")))
            }))
            .sort((a, b) => getExamAnalysisExamSortValue(a).localeCompare(getExamAnalysisExamSortValue(b), "ko"))
        }))
        .sort((a, b) => getExamAnalysisGradeSortValue(a.grade) - getExamAnalysisGradeSortValue(b.grade) || a.grade.localeCompare(b.grade, "ko"));
      return {
        ...school,
        grades,
        analysisCount: grades.reduce((sum, grade) => sum + grade.analysisCount, 0),
        examCount: grades.reduce((sum, grade) => sum + grade.exams.length, 0)
      };
    })
    .sort((a, b) => a.schoolName.localeCompare(b.schoolName, "ko"));
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
  preparationNotice: [
    "역할: 으뜸수학 고태영T의 수업메모 알림톡 편집자",
    "목표: 강사용 수업메모를 학생 또는 학부모에게 보낼 짧고 정중한 안내문으로 다듬는다.",
    "작성 원칙:",
    "- 메모에 없는 사실을 만들지 않는다.",
    "- 수신자가 바로 이해할 수 있게 한두 문단으로 정리한다.",
    "- 학생용은 분명하고 부담 없는 말투, 학부모용은 정중한 말투를 사용한다.",
    "- 최종 문장만 반환한다."
  ].join("\n"),
  examAnalysis: createDefaultExamAnalysisPrompt(),
  variantProblem: [
    "역할: 으뜸수학 고태영T의 내신 수학 변형문항 제작 보조",
    "목표: 원본 문항의 핵심 개념과 풀이 구조를 유지하면서 조건, 숫자, 표현, 난도를 조절한 변형문항을 만든다.",
    "작성 원칙:",
    "- 원본의 핵심 학습 목표를 유지한다.",
    "- 학교 내신에서 나올 법한 조건 변화와 함정을 반영한다.",
    "- 정답과 해설은 선택한 형식에 맞춰 제공한다.",
    "- 지나치게 새로운 개념을 추가하지 않는다."
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
  examAnalysisProvider: "anthropic",
  examAnalysisModel: "claude-opus-4-8",
  variantProvider: "auto",
  variantModel: "server-default",
  prompts: defaultAiPrompts
};

const defaultAttendanceSettings = {
  lateGraceMinutes: 0
};

function isLegacyDefaultExamAnalysisPrompt(prompt = "") {
  const text = String(prompt ?? "");
  return Boolean(
    text &&
    (
      (
        !text.includes("[웹앱의 목적]") &&
        text.includes("학교별 내신 시험분석가") &&
        (
          text.includes("5대 핵심 패턴") ||
          text.includes("반드시 요청된 JSON 필드 형식")
        )
      ) ||
      (
        text.includes("[웹앱의 목적]") &&
        text.includes("AI는 최종 판단자가 아니라 1차 구조화 담당자") &&
        text.includes("문항분석표 초안: 문항별 번호") &&
        !text.includes("questionItems 배열")
      ) ||
      (
        text.includes("[웹앱의 목적]") &&
        text.includes("AI는 최종 판단자가 아니라 1차 구조화 담당자") &&
        text.includes("questionItems 배열") &&
        (!text.includes("ssenTypeTags") || !text.includes("sourceCompositions"))
      )
    )
  );
}

function normalizeAiPrompts(prompts = {}) {
  const nextPrompts = { ...defaultAiPrompts, ...(prompts ?? {}) };
  if (isLegacyDefaultExamAnalysisPrompt(nextPrompts.examAnalysis)) {
    nextPrompts.examAnalysis = defaultAiPrompts.examAnalysis;
  }
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
  const attendanceNotificationLocksRef = useRef(new Set());
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
  const [examAnalyses, setExamAnalyses] = useStoredState(
    storageKeys.examAnalyses,
    sampleData.examAnalyses ?? [createDefaultExamAnalysis()]
  );
  const [examAnalysisFolders, setExamAnalysisFolders] = useStoredState(storageKeys.examAnalysisFolders, []);
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
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [isAppStateReady, setIsAppStateReady] = useState(false);
  const [isPortalDataReady, setIsPortalDataReady] = useState(false);
  const [attendanceReloadKey, setAttendanceReloadKey] = useState(0);
  const [saveStates, setSaveStates] = useState({});
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
  const isApplyingRemoteAppStateRef = useRef(false);
  const attendanceOnlyMode = isAttendanceOnlyRoute();

  const sharedAppState = useMemo(() => ({
    academyTests,
    aiSettings,
    attendanceSettings,
    deletedLessonBundles,
    examAnalyses,
    examAnalysisFolders,
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
    examAnalyses,
    examAnalysisFolders,
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
            postExamPrepRows(changedRows).catch((error) => console.error(error));
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
          if (Array.isArray(states.examAnalyses)) {
            const repairedExamAnalyses = repairDisconnectedExamAnalysisRuns(states.examAnalyses);
            setExamAnalyses(repairedExamAnalyses.analyses);
          }
          if (Array.isArray(states.examAnalysisFolders)) setExamAnalysisFolders(states.examAnalysisFolders);
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
    setExamAnalyses,
    setExamAnalysisFolders,
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
    postAppState(sharedAppState).catch((error) => console.error(error));
  }, [isAppStateReady, sharedAppState, session?.role]);

  useEffect(() => {
    if (session?.role !== "teacher" || !isAppStateReady || isApplyingRemoteAppStateRef.current) return;
    setExamAnalyses((current) => {
      const repaired = repairDisconnectedExamAnalysisRuns(current);
      return repaired.changed ? repaired.analyses : current;
    });
  }, [isAppStateReady, session?.role, setExamAnalyses]);

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
        postExamPrepRows(changedRows).catch((error) => console.error(error));
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

  function saveGeneratedLessonsFromPlan(planItems) {
    const lessonsToSave = planItems
      .filter((item) => item.status === "create" || item.status === "update")
      .map((item) => item.lesson);
    if (lessonsToSave.length === 0) return;
    setLessons((current) => {
      const next = [...current];
      lessonsToSave.forEach((lesson) => {
        const index = next.findIndex((item) => item.lessonId === lesson.lessonId);
        if (index >= 0) next[index] = { ...next[index], ...lesson };
        else next.push(lesson);
      });
      return next;
    });
    postJson("/api/lessons/bulk", { lessons: lessonsToSave })
      .then((result) => {
        if (!Array.isArray(result.lessons) || result.lessons.length === 0) return;
        setLessons((current) => {
          const next = [...current];
          result.lessons.forEach((lesson) => {
            const index = next.findIndex((item) => item.lessonId === lesson.lessonId);
            if (index >= 0) next[index] = { ...next[index], ...lesson };
            else next.push(lesson);
          });
          return next;
        });
      })
      .catch((error) => {
        console.error(error);
        if (typeof window !== "undefined") {
          window.alert(`자동 수업 저장 실패: ${error.message}`);
        }
      });
  }

  function handleApplyGeneratedLessons() {
    saveGeneratedLessonsFromPlan(generatedLessonPlan);
  }

  function handleApplyGeneratedLesson(generatedKey) {
    saveGeneratedLessonsFromPlan(generatedLessonPlan.filter((item) => item.generatedKey === generatedKey));
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
    try {
      const response = await fetch(apiUrl("/api/notification-jobs"));
      const result = await response.json();
      if (result.ok && Array.isArray(result.notificationJobs)) {
        setNotificationJobs(result.notificationJobs);
      }
    } catch (error) {
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
        postExamPrepRows(changedRows).catch((error) => console.error(error));
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
        postExamPrepRows(addedRows).catch((error) => console.error(error));
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
        postExamPrepRows(nextRows.filter((row, index) => row !== current[index])).catch((error) => console.error(error));
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
    ? selectedLesson.studentIds
        .map((studentId) => students.find((student) => student.studentId === studentId))
        .filter((student) => student && (student.status ?? "active") === "active")
    : [];

  useEffect(() => {
    if (!isLessonJournalOpen || !selectedLesson?.lessonId || !isAppStateReady || session?.role !== "teacher") return;
    const currentPlan = lessonNotificationPlans[selectedLesson.lessonId];
    const currentMode = currentPlan?.mode || "default";
    if (currentMode === "none") return;
    const delayMinutes = currentMode === "delay30" ? 30 : 0;
    if (isLessonAlimtalkScheduleExpired(selectedLesson, delayMinutes)) return;

    const expectedJobIds = new Set(
      (selectedLesson.studentIds ?? []).flatMap((studentId) => [
        getLessonNotificationJobId(selectedLesson.lessonId, studentId, "parent"),
        getLessonNotificationJobId(selectedLesson.lessonId, studentId, "student")
      ])
    );
    const scheduledJobCount = notificationJobs.filter((job) =>
      expectedJobIds.has(job.notificationJobId) && job.status === "scheduled"
    ).length;
    if (expectedJobIds.size > 0 && scheduledJobCount >= expectedJobIds.size) return;

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
  }, [isAppStateReady, isLessonJournalOpen, lessonNotificationPlans, notificationJobs, selectedLesson, session?.role]);

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

  function handleAttendancePinCheck(phoneLast4) {
    if (attendanceOnlyMode && attendanceLoadedDateRef.current !== getKoreaDateString()) {
      setIsAppStateReady(false);
      setAttendanceReloadKey((current) => current + 1);
      return { ok: false, message: "날짜가 바뀌어 출결 데이터를 다시 불러오는 중입니다. 잠시 후 다시 입력해 주세요." };
    }

    const digits = String(phoneLast4).replaceAll(/\D/g, "").slice(-4);
    if (digits.length !== 4) {
      return { ok: false, message: "휴대폰 번호 뒤 4자리를 입력해 주세요." };
    }

    const matchedStudents = students.filter((student) => {
      if ((student.status ?? "active") !== "active") return false;
      const studentPhone = String(student.studentPhone ?? "").replaceAll(/\D/g, "");
      return studentPhone.slice(-4) === digits;
    });

    if (matchedStudents.length === 0) {
      return { ok: false, message: "해당 학생 전화번호를 찾지 못했습니다." };
    }
    if (matchedStudents.length > 1) {
      return { ok: false, message: "같은 뒤 4자리 학생 전화번호가 2명 이상입니다. 선생님께 말씀해 주세요." };
    }

    const student = matchedStudents[0];
    const now = new Date();
    const todayString = getKoreaDateString(now);
    const todayStudentLesson = lessons
      .filter((item) => item.date === todayString && (item.studentIds ?? []).includes(student.studentId))
      .sort(sortByTime)[0];
    const todayClassLesson = lessons
      .filter((item) => item.date === todayString && item.classTemplateId === student.defaultClassTemplateId)
      .sort(sortByTime)[0];
    const recentStudentLesson = lessons
      .filter((item) => (item.studentIds ?? []).includes(student.studentId))
      .sort((a, b) => String(b.date).localeCompare(String(a.date)) || sortByTime(a, b))[0];
    let lesson = todayStudentLesson ?? todayClassLesson ?? recentStudentLesson;

    if (!lesson) {
      return { ok: false, message: `${student.name} 학생의 수업 일정이 없습니다.` };
    }
    if (!(lesson.studentIds ?? []).includes(student.studentId)) {
      lesson = {
        ...lesson,
        studentIds: [...(lesson.studentIds ?? []), student.studentId]
      };
      setLessons((current) => current.map((item) => (item.lessonId === lesson.lessonId ? lesson : item)));
      postJson("/api/lessons/bulk", { lessons: [lesson] }).catch((error) => console.error(error));
    }

    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const existingRecord = findLessonStudentRecord(recordsRef.current, lesson, student);
    const nowIso = now.toISOString();
    const koreaTime = new Intl.DateTimeFormat("ko-KR", {
      timeZone: "Asia/Seoul",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(now);
    if (existingRecord?.checkInAt && existingRecord?.checkOutAt) {
      return {
        ok: true,
        message: `${student.name} 이미 하원 처리되었습니다. 추가 확인이 필요하면 담당 선생님께 따로 말씀해 주세요.`,
        student,
        lesson,
        mode: "completed",
        checkedTime: koreaTime
      };
    }
    const isCheckOut = Boolean(existingRecord?.checkInAt && !existingRecord?.checkOutAt);
    const lateMinutes = isCheckOut
      ? existingRecord?.lateMinutes ?? ""
      : calculateLateMinutes(lesson, now, attendanceSettings.lateGraceMinutes);
    const attendanceStatus = isCheckOut ? existingRecord?.attendanceStatus ?? "present" : lateMinutes > 0 ? "late" : "present";
    const nextRecord = {
      ...createEmptyRecord(lesson, student),
      ...(existingRecord ?? {}),
      lessonStudentRecordId: recordId,
      attendanceStatus,
      checkInAt: existingRecord?.checkInAt ?? nowIso,
      checkInTime: existingRecord?.checkInTime ?? koreaTime,
      checkOutAt: isCheckOut ? nowIso : existingRecord?.checkOutAt ?? "",
      checkOutTime: isCheckOut ? koreaTime : existingRecord?.checkOutTime ?? "",
      lateMinutes,
      attendanceReason: existingRecord?.attendanceReason ?? "",
      updatedBy: "attendance_kiosk",
      updatedAt: nowIso
    };

    const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    handleSaveRecord(recordId, lesson, student, nextRecord);
    handleSendAttendanceAlimtalk(lesson, student, {
      attendanceStatus: isCheckOut ? "checkout" : attendanceStatus === "late" ? "late" : "checkin",
      attendanceReason: nextRecord.attendanceReason,
      checkedAt: isCheckOut ? nextRecord.checkOutAt : nextRecord.checkInAt,
      checkInTime: isCheckOut ? nextRecord.checkOutTime : nextRecord.checkInTime,
      lateMinutes
    });
    setNotificationLogs((current) => [
      {
        notificationLogId: `attendance_kiosk_${Date.now()}_${student.studentId}`,
        channel: "attendance_kiosk",
        createdAt: nowIso,
        lessonId: lesson.lessonId,
        message: `[출결체크] ${student.name} ${isCheckOut ? "하원" : "등원"} · ${koreaTime}`,
        provider: "academy-os",
        status: "checked_and_sent",
        studentId: student.studentId,
        target: "parent"
      },
      ...current
    ]);

    return {
      ok: true,
      message: `${student.name} ${isCheckOut ? "하원" : "등원"}`,
      student,
      lesson,
      mode: isCheckOut ? "checkOut" : "checkIn",
      checkedTime: koreaTime
    };
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
    const studentIds = students
      .filter((student) => formValues.studentIds.includes(student.studentId))
      .map((student) => student.studentId);
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
    const studentIds = students
      .filter((student) => formValues.studentIds.includes(student.studentId))
      .map((student) => student.studentId);
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
    if (!student.defaultClassTemplateId) return [];
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

  function reconcileStudentFutureClassLessons(student, previousClassTemplateId = "", fromDate = today) {
    const nextClassTemplateId = student.defaultClassTemplateId ?? "";
    if (!previousClassTemplateId && !nextClassTemplateId) return [];
    const changedLessons = lessons.flatMap((lesson) => {
      if (!isActiveLessonForRosterSync(lesson) || String(lesson.date) < fromDate) return [];
      const studentIds = lesson.studentIds ?? [];
      const shouldRemoveFromPrevious =
        previousClassTemplateId &&
        previousClassTemplateId !== nextClassTemplateId &&
        lesson.classTemplateId === previousClassTemplateId &&
        studentIds.includes(student.studentId);
      const shouldAddToNext =
        nextClassTemplateId &&
        lesson.classTemplateId === nextClassTemplateId &&
        !studentIds.includes(student.studentId);
      if (!shouldRemoveFromPrevious && !shouldAddToNext) return [];
      return [{
        ...lesson,
        studentIds: shouldAddToNext
          ? [...studentIds, student.studentId]
          : studentIds.filter((id) => id !== student.studentId)
      }];
    });
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
  }

  function removeStudentFromLessonsAfterDate(studentId, cutoffDate = today) {
    const changedLessons = lessons
      .filter((lesson) =>
        isActiveLessonForRosterSync(lesson) &&
        String(lesson.date) > cutoffDate &&
        (lesson.studentIds ?? []).includes(studentId)
      )
      .map((lesson) => ({
        ...lesson,
        studentIds: (lesson.studentIds ?? []).filter((id) => id !== studentId)
      }));
    applyLessonRosterChanges(changedLessons);
    return changedLessons;
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
    postJson("/api/student-intake-applicants", { applicant: nextApplicant }).catch((error) => console.error(error));
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
      postJson("/api/students", { student: nextStudent }).catch((error) => console.error(error));
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

  function handleUpdateExamPrepRow(examPrepId, field, value) {
    setExamPrepRows((current) => {
      const existingExamRow = current.find((row) => row.examPrepId === examPrepId);
      const updatedExamRow = existingExamRow ? { ...existingExamRow, [field]: value } : null;
      const shouldSyncPublisher = ["publisher", "examCycle", "schoolName", "grade", "subject"].includes(field);
      const updatedRows = current.map((row) => (row.examPrepId === examPrepId ? { ...row, [field]: value } : row));
      const nextRows = shouldSyncPublisher && updatedExamRow ? syncPublisherAcrossExamTerm(updatedRows, updatedExamRow) : updatedRows;
      const changedRows = nextRows.filter((row) => {
        const previousRow = current.find((item) => item.examPrepId === row.examPrepId);
        return previousRow && JSON.stringify(previousRow) !== JSON.stringify(row);
      });
      if (changedRows.length > 0) {
        postExamPrepRows(changedRows).catch((error) => console.error(error));
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
    if (changedStudents.length > 0) {
      postJson("/api/students/bulk", { students: changedStudents }).catch((error) => console.error(error));
    }
  }

  function handleDeleteStudent(studentId) {
    const removedStudent = students.find((student) => student.studentId === studentId);
    if (!removedStudent) return;
    const pausedStudent = {
      ...removedStudent,
      defaultClassTemplateId: "",
      status: "paused",
      withdrawnAt: new Date().toISOString()
    };
    setStudents((current) => current.map((student) => (student.studentId === studentId ? pausedStudent : student)));
    removeStudentFromLessonsAfterDate(studentId, today);
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

  async function saveAttendanceRecord(lesson, student, values, updatedBy = "instructor_owner_001") {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const existingRecord = findLessonStudentRecord(recordsRef.current, lesson, student);
    const nowIso = new Date().toISOString();
    const timedValues = applyManualAttendanceTimeFields(existingRecord, values, nowIso, lesson);
    const nextRecord = {
      ...createEmptyRecord(lesson, student),
      ...(existingRecord ?? {}),
      ...timedValues,
      lessonStudentRecordId: recordId,
      lessonId: lesson.lessonId,
      studentId: student.studentId,
      updatedBy,
      updatedAt: nowIso
    };
    const nextRecords = upsertLessonStudentRecord(recordsRef.current, nextRecord);
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    const saved = await handleSaveRecord(recordId, lesson, student, nextRecord);
    return { record: nextRecord, saved };
  }

  function handleChangeRecord(lesson, student, field, value) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const existingRecord = findLessonStudentRecord(recordsRef.current, lesson, student);
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
      ...(existingRecord ?? {}),
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

  function handleUpdateLessonNotificationPlan(lessonId, mode) {
    if (!lessonId) return;
    const nextMode = mode || "default";
    const currentPlan = lessonNotificationPlans[lessonId];
    const currentMode = currentPlan?.mode || "default";

    if (!currentPlan || currentMode !== nextMode) {
      setLessonNotificationPlans((current) => {
        const next = { ...current };
        next[lessonId] = { mode: nextMode, updatedAt: new Date().toISOString() };
        return next;
      });
    }
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
      checkedAt: record?.updatedAt ?? "",
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
    const lessonStudentIds = new Set(lesson.studentIds ?? []);
    const nextRecords = recordsRef.current.map((record) => {
      if (record.lessonId !== lesson.lessonId || !lessonStudentIds.has(record.studentId)) return record;
      return {
        ...record,
        teacherCommentSendStatus: record.notificationMutedParent ? "알림 제외" : statusText,
        studentCommentSendStatus: record.notificationMutedStudent ? "알림 제외" : statusText,
        updatedAt: new Date().toISOString()
      };
    });
    recordsRef.current = nextRecords;
    setRecords(nextRecords);
    nextRecords
      .filter((record) => record.lessonId === lesson.lessonId && lessonStudentIds.has(record.studentId))
      .forEach((record) => postJson("/api/lesson-records", { record }).catch((error) => console.error(error)));
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
    const lessonStudents = students.filter(
      (student) => (student.status ?? "active") === "active" && lesson.studentIds?.includes(student.studentId)
    );
    const jobIds = new Set(
      lessonStudents.flatMap((student) => [
        getLessonNotificationJobId(lesson.lessonId, student.studentId, "parent"),
        getLessonNotificationJobId(lesson.lessonId, student.studentId, "student")
      ])
    );

    if (mode === "none") {
      const canceledJobs = notificationJobs
        .filter((job) => jobIds.has(job.notificationJobId))
        .filter((job) => !["sent", "dry_run", "failed"].includes(job.status))
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
      .filter((job) => jobIds.has(job.notificationJobId) && !nextJobIds.has(job.notificationJobId))
      .filter((job) => !["sent", "dry_run", "failed", "canceled"].includes(job.status))
      .map((job) => ({ ...job, status: "canceled", error: "알림 제외", updatedAt: new Date().toISOString() }));
    setNotificationJobs((current) => [
      ...nextJobs,
      ...canceledJobs,
      ...current.filter((job) => !jobIds.has(job.notificationJobId))
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
    const lessonStudents = students.filter(
      (student) => (student.status ?? "active") === "active" && lesson.studentIds?.includes(student.studentId)
    );
    const jobIds = new Set(
      lessonStudents.flatMap((student) => [
        getLessonNotificationJobId(lesson.lessonId, student.studentId, "parent"),
        getLessonNotificationJobId(lesson.lessonId, student.studentId, "student")
      ])
    );
    const nextJobs = buildLessonNotificationJobs(lesson, lessonStudents, scheduledDate, mode);
    const nextJobIds = new Set(nextJobs.map((job) => job.notificationJobId));
    const canceledJobs = notificationJobs
      .filter((job) => jobIds.has(job.notificationJobId) && !nextJobIds.has(job.notificationJobId))
      .filter((job) => !["sent", "dry_run", "failed", "canceled"].includes(job.status))
      .map((job) => ({ ...job, status: "canceled", error: "알림 제외", updatedAt: new Date().toISOString() }));
    const scheduledLabel = formatKoreaTimeLabel(scheduledDate);
    setNotificationJobs((current) => [
      ...nextJobs,
      ...canceledJobs,
      ...current.filter((job) => !jobIds.has(job.notificationJobId))
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
    setLessonNotificationPlans((current) => ({
      ...current,
      [lesson.lessonId]: {
        mode: "manual",
        scheduledAt: scheduledDate,
        updatedAt: new Date().toISOString()
      }
    }));
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
    lesson.studentIds.forEach((studentId) => {
      const student = students.find((item) => item.studentId === studentId);
      if (student) handleUpdateHomework(lesson, student, homeworkType, title);
    });
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
      const record =
        recordOverride ??
        (lessonForRecord && studentForRecord ? findLessonStudentRecord(recordsRef.current, lessonForRecord, studentForRecord) : null) ??
        recordsRef.current.find((item) => item.lessonStudentRecordId === recordId) ??
        (lessonForRecord && studentForRecord ? createEmptyRecord(lessonForRecord, studentForRecord) : null);
      if (!record) throw new Error("저장할 수업기록을 찾지 못했습니다.");
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

  async function handleSendAttendanceAlimtalk(lesson, student, values) {
    const lockKey = [
      student.studentId,
      lesson.lessonId,
      values.attendanceStatus,
      values.checkInTime || values.checkedAt || values.checkInAt || "",
      student.parentPhone
    ].join("|");
    if (attendanceNotificationLocksRef.current.has(lockKey)) {
      return;
    }
    attendanceNotificationLocksRef.current.add(lockKey);

    const payload = {
      attendanceStatus: values.attendanceStatus,
      checkedAt: values.checkedAt || values.checkInAt || getKoreaDateTimeString(),
      checkInTime: values.checkInTime,
      lateMinutes: values.lateMinutes,
      lessonId: lesson.lessonId,
      lessonName: lesson.className,
      parentPhone: student.parentPhone,
      reason: values.attendanceReason,
      studentId: student.studentId,
      studentName: student.name
    };
    const logBase = {
      notificationLogId: `attendance_notification_${Date.now()}_${student.studentId}`,
      studentId: student.studentId,
      lessonId: lesson.lessonId,
      channel: "alimtalk",
      message: createAttendanceNotificationText(payload),
      createdAt: new Date().toISOString()
    };

    try {
      const response = await fetch(apiUrl("/api/notifications/attendance-alimtalk"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "알림톡 발송 실패");
      }
      const status = result.result?.duplicateSuppressed ? "duplicate_suppressed" : "sent";
      setNotificationLogs((current) => [
        { ...logBase, provider: "solapi", status, result },
        ...current
      ]);
    } catch (error) {
      setNotificationLogs((current) => [
        { ...logBase, provider: "solapi", status: "failed", error: error.message },
        ...current
      ]);
    } finally {
      attendanceNotificationLocksRef.current.delete(lockKey);
    }
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
            scoreRecords={scoreRecords}
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
                  postExamPrepRows(addedRows).catch((error) => console.error(error));
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

        {activeView === "examAnalysis" ? (
          <ExamAnalysisCenter
            aiSettings={aiSettings}
            analyses={examAnalyses}
            analysisFolders={examAnalysisFolders}
            examPrepRows={examPrepRows}
            onAddAnalysis={(analysisSeed = {}) =>
              setExamAnalyses((current) => {
                const nextAnalysis = analysisSeed.examAnalysisId ? analysisSeed : createDefaultExamAnalysis(analysisSeed);
                return [
                  { ...nextAnalysis, updatedAt: nextAnalysis.updatedAt || new Date().toISOString() },
                  ...current
                ];
              })
            }
            onUpdateAnalysis={(analysisId, field, value) =>
              setExamAnalyses((current) =>
                current.map((item) => (item.examAnalysisId === analysisId ? { ...item, [field]: value, updatedAt: new Date().toISOString() } : item))
              )
            }
            onDeleteAnalysis={(analysisId) =>
              setExamAnalyses((current) => current.filter((item) => item.examAnalysisId !== analysisId))
            }
            onDeleteAnalysisFolder={(folder) => {
              if (isExamAnalysisSchoolFolder(folder)) {
                const schoolName = folder.schoolName;
                setExamAnalysisFolders((current) =>
                  current.filter((item) => item.folderId !== folder.folderId && item.schoolName !== schoolName)
                );
                setExamAnalyses((current) => current.filter((item) => item.schoolName !== schoolName));
                return;
              }
              setExamAnalysisFolders((current) => current.filter((item) => item.folderId !== folder.folderId));
              setExamAnalyses((current) => current.filter((item) => getExamAnalysisFolderId(item) !== folder.folderId));
            }}
            onRunAnalysis={handleRunExamAnalysis}
            onSaveAnalysisFolder={(folder) => {
              const normalizedFolder = isExamAnalysisSchoolFolder(folder)
                ? normalizeExamAnalysisSchoolFolder({
                    ...folder,
                    updatedAt: new Date().toISOString()
                  })
                : normalizeExamAnalysisFolder({
                    ...folder,
                    folderType: "exam",
                    updatedAt: new Date().toISOString()
                  });
              const previousSchoolName = folder.previousSchoolName || normalizedFolder.schoolName;
              setExamAnalysisFolders((current) => {
                const exists = current.some((item) => item.folderId === normalizedFolder.folderId);
                const upserted = exists
                  ? current.map((item) => (item.folderId === normalizedFolder.folderId ? { ...item, ...normalizedFolder } : item))
                  : [normalizedFolder, ...current];
                if (normalizedFolder.folderType !== "school" || previousSchoolName === normalizedFolder.schoolName) return upserted;
                return upserted.map((item) => (
                  item.folderType !== "school" && item.schoolName === previousSchoolName
                    ? { ...item, schoolName: normalizedFolder.schoolName, updatedAt: new Date().toISOString() }
                    : item
                ));
              });
              if (normalizedFolder.folderType === "school") {
                if (previousSchoolName !== normalizedFolder.schoolName) {
                  setExamAnalyses((current) =>
                    current.map((item) => (
                      item.schoolName === previousSchoolName
                        ? { ...item, schoolName: normalizedFolder.schoolName, updatedAt: new Date().toISOString() }
                        : item
                    ))
                  );
                }
              } else {
                setExamAnalyses((current) =>
                  current.map((item) => (
                    getExamAnalysisFolderId(item) === normalizedFolder.folderId
                      ? applyExamAnalysisFolderToAnalysis(item, normalizedFolder)
                      : item
                  ))
                );
              }
              return normalizedFolder;
            }}
          />
        ) : null}

        {activeView === "schoolCalendar" ? (
          <SchoolCalendarCenter
            generatedLessonPlan={generatedLessonPlan}
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
            notificationLogs={notificationLogs}
            onScheduleLessonNotificationsAt={handleScheduleLessonNotificationsAt}
            onUpdateLessonNotificationPlan={handleUpdateLessonNotificationPlan}
            students={students}
            onRefresh={refreshNotificationJobs}
          />
        ) : null}

        {activeView === "followups" ? (
          <FollowUpCenter
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
          onClose={() => setAttendanceModal(null)}
          onSave={async (lesson, student, values, options = {}) => {
            const { record: savedRecord, saved } = await saveAttendanceRecord(lesson, student, values, "instructor_owner_001");
            if (!saved) return false;
            if (options.sendAlimtalk) {
              const isCheckout = values.attendanceStatus === "checkout";
              await handleSendAttendanceAlimtalk(lesson, student, {
                ...values,
                attendanceStatus: isCheckout ? "checkout" : values.attendanceStatus,
                checkedAt: isCheckout ? savedRecord.checkOutAt || savedRecord.updatedAt : savedRecord.checkInAt || savedRecord.updatedAt,
                checkInAt: savedRecord.checkInAt,
                checkInTime: isCheckout ? savedRecord.checkOutTime : savedRecord.checkInTime
              });
            }
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

  async function handleRunExamAnalysis(analysis, overrideAiSettings = null) {
    const aiRunStartedAt = new Date().toISOString();
    const aiRunRequestId = `ai_run_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const settingsPrompt = getAiPrompt(overrideAiSettings ?? aiSettings, "examAnalysis") || createDefaultExamAnalysisPrompt();
    const nextAnalysis = {
      ...analysis,
      aiProvider: overrideAiSettings?.examAnalysisProvider ?? analysis.aiProvider ?? defaultAiSettings.examAnalysisProvider,
      aiModel: overrideAiSettings?.examAnalysisModel ?? analysis.aiModel ?? defaultAiSettings.examAnalysisModel,
      aiPrompt: settingsPrompt
    };
    setExamAnalyses((current) =>
      current.map((item) =>
        item.examAnalysisId === analysis.examAnalysisId
          ? { ...item, aiProvider: nextAnalysis.aiProvider, aiModel: nextAnalysis.aiModel, aiPrompt: nextAnalysis.aiPrompt, aiStatus: "분석 중", aiError: "", aiRunRequestId, aiRunSessionId: appRuntimeSessionId, aiRunStartedAt, updatedAt: aiRunStartedAt }
          : item
      )
    );

    try {
      const result = await postJson("/api/ai/exam-analysis", nextAnalysis);
      const normalizedAiFields = normalizeExamAnalysisAiFields(result.result.fields);
      const { questionItems: aiQuestionItems = [], ...analysisAiFields } = normalizedAiFields;
      const aiLastRunAt = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
      const questionSourceContext = getExamAnalysisQuestionSourceContext(nextAnalysis);
      const activeAiSourceId = nextAnalysis.questionSourceId || "";
      const existingQuestionItems = normalizeExamQuestionItems(nextAnalysis.questionItems);
      const existingSourceQuestionCount = questionSourceContext.sourceId
        ? existingQuestionItems.filter((item) => (item.cropSourceId || questionSourceContext.sourceId) === questionSourceContext.sourceId).length
        : existingQuestionItems.length;
      const questionTargetCount =
        Math.max(
          Number(nextAnalysis.questionTargetCount) || 0,
          existingSourceQuestionCount
        ) || 0;

      setExamAnalyses((current) =>
        current.map((item) =>
          item.examAnalysisId === analysis.examAnalysisId
            ? (() => {
                if (item.aiRunRequestId && item.aiRunRequestId !== aiRunRequestId) return item;
                const existingCompositionsBySource = normalizeExamSourceCompositions(item.questionCompositionsBySource);
                const aiCompositionsBySource = normalizeExamSourceCompositions(analysisAiFields.sourceCompositions);
                const questionComposition = normalizeExamQuestionComposition(analysisAiFields.questionComposition);
                const nextCompositionsBySource = {
                  ...existingCompositionsBySource,
                  ...aiCompositionsBySource
                };
                if (activeAiSourceId && questionComposition) nextCompositionsBySource[activeAiSourceId] = questionComposition;
                const existingTargetCountsBySource = normalizeExamSourceTargetCounts(item.questionTargetCountsBySource);
                const nextTargetCountsBySource = {
                  ...existingTargetCountsBySource,
                  ...(nextAnalysis.questionTargetCountsBySource || {})
                };
                if (activeAiSourceId && (questionComposition?.total || questionTargetCount)) {
                  nextTargetCountsBySource[activeAiSourceId] = questionComposition?.total || questionTargetCount;
                }
                return {
                ...item,
                ...analysisAiFields,
                sourceCompositions: undefined,
                aiPrompt: nextAnalysis.aiPrompt,
                questionComposition: activeAiSourceId ? item.questionComposition || questionComposition : questionComposition || analysisAiFields.questionComposition,
                questionCompositionsBySource: nextCompositionsBySource,
                questionTargetCountsBySource: nextTargetCountsBySource,
                questionItems: mergeAiQuestionDrafts(item.questionItems, aiQuestionItems, {
                  sourceId: questionSourceContext.sourceId,
                  sourceUrl: questionSourceContext.sourceUrl,
                  defaultSourceId: questionSourceContext.sourceId,
                  targetCount: questionTargetCount
                }),
                aiInitialFields: {
                  ...analysisAiFields,
                  questionItems: normalizeAiQuestionDrafts(aiQuestionItems).map((item) => ({
                    ...item,
                    cropSourceId: questionSourceContext.sourceId || item.cropSourceId,
                    cropSourceUrl: questionSourceContext.sourceUrl || item.cropSourceUrl
                  }))
                },
                aiInitialGeneratedAt: aiLastRunAt,
                aiProvider: result.result.provider,
                aiModel: result.result.model,
                aiStatus: "완료",
                aiLastRunAt,
                aiError: "",
                aiRunRequestId: "",
                aiRunSessionId: "",
                aiRunStartedAt: "",
                pipelineStage: "문항 검수",
                updatedAt: new Date().toISOString()
                };
              })()
            : item
        )
      );
    } catch (error) {
      setExamAnalyses((current) =>
        current.map((item) =>
          item.examAnalysisId === analysis.examAnalysisId
            ? item.aiRunRequestId && item.aiRunRequestId !== aiRunRequestId
              ? item
              : { ...item, aiStatus: "실패", aiError: error.message, aiRunRequestId: "", aiRunSessionId: "", aiRunStartedAt: "", updatedAt: new Date().toISOString() }
            : item
        )
      );
    }
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
        [statusField]: statusText
      };
      setRecords((current) => upsertLessonStudentRecord(current, nextRecord));
      if (persist) {
        postJson("/api/lesson-records", { record: nextRecord }).catch((error) => console.error(error));
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
        checkedAt: record?.updatedAt ?? "",
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

function NotificationCenter({
  aiSettings = defaultAiSettings,
  classTemplates = [],
  integrationStatus,
  notificationJobs,
  onRefresh,
  students
}) {
  const [classFilter, setClassFilter] = useState("all");
  const [deletingJobId, setDeletingJobId] = useState("");
  const [dispatchMessage, setDispatchMessage] = useState("");
  const [isPolishingNotice, setIsPolishingNotice] = useState(false);
  const [isSendingNotice, setIsSendingNotice] = useState(false);
  const [jobFilter, setJobFilter] = useState("all");
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
  const noticeJobs = notificationJobs.filter((job) => String(job.notificationType ?? "").startsWith("notice_"));
  const scheduledNoticeJobs = noticeJobs.filter((job) => job.status === "scheduled");
  const sentNoticeJobs = noticeJobs.filter((job) => job.status === "sent");
  const pendingNoticeJobs = noticeJobs.filter((job) => job.status === "send_unconfirmed");
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
    () => students.filter((student) => !["paused", "withdrawn"].includes(student.status ?? "active")),
    [students]
  );
  const classTemplateById = useMemo(
    () => new Map(classTemplates.map((template) => [template.classTemplateId, template])),
    [classTemplates]
  );
  const studentMatchesNoticeClass = (student) => {
    if (classFilter === "all") return true;
    const template = classTemplateById.get(classFilter);
    return (
      student.defaultClassTemplateId === classFilter ||
      student.classTemplateId === classFilter ||
      student.classId === classFilter ||
      (template?.name && [student.className, student.defaultClassName].includes(template.name))
    );
  };
  const classFilteredStudents = useMemo(() => activeStudents.filter((student) => studentMatchesNoticeClass(student)), [activeStudents, classFilter, classTemplateById]);
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
          savedCount += 1;
        } catch (error) {
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

  return (
    <section className="notificationCenterPage">
      <div className="pageTop">
        <div>
          <h1>알림관리</h1>
          <p className="muted">수업일지 밖에서 필요한 연락을 한 화면에서 작성하고, 수신 범위만 선택해 발송합니다.</p>
        </div>
        <div className="pageActions">
          <button className="softButton" onClick={onRefresh} type="button">새로고침</button>
        </div>
      </div>
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
                        <small>{[student.grade, student.schoolName].filter(Boolean).join(" · ") || "기본 정보 없음"}</small>
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
                <span className={`statusPill status-${job.status || "draft"}`}>{getNotificationStatusLabel(job.status)}</span>
                <strong>{getNotificationJobLabel(job.notificationType)}</strong>
                <span>{studentName(job.studentId, job.payload)}</span>
                <span>{job.scheduledAt ? formatKoreaTimeLabel(job.scheduledAt) : job.createdAt ? formatKoreaTimeLabel(job.createdAt) : "-"}</span>
                <span>{job.recipient || "번호 없음"}</span>
                <p>{job.previewBody || job.payload?.message || "미리보기 없음"}</p>
                <span className="notificationJobActions">
                  {canDeleteNotificationJob(job) ? (
                    <button
                      className="dangerSoftButton compact"
                      disabled={deletingJobId === job.notificationJobId}
                      onClick={() => deleteNotificationJob(job)}
                      type="button"
                    >
                      {deletingJobId === job.notificationJobId ? "삭제 중" : "삭제"}
                    </button>
                  ) : (
                    <small>보관</small>
                  )}
                </span>
              </article>
            ))
          )}
        </div>
      </section>
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
        { id: "examAnalysis", label: "시험분석", icon: "🔎" },
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
                          : ` (${lesson.studentIds.length}명)`}
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
  const lessonStudents = (lesson.studentIds ?? [])
    .map((studentId) => students.find((student) => student.studentId === studentId))
    .filter((student) => student && (student.status ?? "active") === "active");
  const checkoutMissingStudents = lessonStudents.filter((student) => {
    const record = findLessonStudentRecord(records, lesson, student);
    return hasMissingCheckOut(record);
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
    return (
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
    return target === "student" ? record.studentCommentSendStatus : record.teacherCommentSendStatus;
  }

  return (
    <section className="lessonJournalPage">
      <header className="pageTop lessonJournalHeader">
        <button className="iconButton" onClick={onBack} type="button">‹</button>
        <div>
          <button className="linkTitleButton" onClick={onOpenExamPrep} type="button">{lesson.className}</button>
          <p className="muted">{lesson.date} · {lesson.startTime}-{lesson.endTime} · {lessonStudents.length}명</p>
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
        <span className="defaultScheduleHint">{isDefaultScheduleExpired ? `기본 예약 시간 지남 · ${defaultAlimtalkTimeLabel}` : `기본 예약 ${defaultAlimtalkTimeLabel}`}</span>
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
            const attendanceDisplay = getAttendanceDisplay(record);
            const checkoutMissing = hasMissingCheckOut(record);
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
                  className={`attendanceBadge attendance-${record.attendanceStatus ?? "pending"}`}
                  onClick={() => onOpenAttendance({ lesson, record, student })}
                  type="button"
                >
                  <span>{attendanceDisplay.label}</span>
                  {attendanceDisplay.detail ? <small>{attendanceDisplay.detail}</small> : null}
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
                    className={`commentOpenButton comment-${parentCommentState}`}
                    onClick={() => openCommentComposer("parent", student, record, previousHomework, nextHomework)}
                    type="button"
                  >
                    학부모 알림톡
                  </button>
                  <small className={`commentStatusText comment-${parentCommentState}`}>
                    {getCommentStatusLabel(record.teacherComment, parentCommentSendStatus)}
                  </small>
                  <button
                    className={record.notificationMutedParent ? "notificationMuteButton active" : "notificationMuteButton"}
                    onClick={() => onToggleStudentNotificationMute?.(lesson, student, "parent")}
                    type="button"
                  >
                    {record.notificationMutedParent ? "제외 해제" : "알림 제외"}
                  </button>
                </div>
                <div className="journalCommentCell">
                  <button
                    className={`commentOpenButton comment-${studentCommentState}`}
                    onClick={() => openCommentComposer("student", student, record, previousHomework, nextHomework)}
                    type="button"
                  >
                    학생 알림톡
                  </button>
                  <small className={`commentStatusText comment-${studentCommentState}`}>
                    {getCommentStatusLabel(record.studentComment, studentCommentSendStatus)}
                  </small>
                  <button
                    className={record.notificationMutedStudent ? "notificationMuteButton active" : "notificationMuteButton"}
                    onClick={() => onToggleStudentNotificationMute?.(lesson, student, "student")}
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
          <small className="muted">{aiStatus || "AI 대기"} · {sendStatus || "발송 전"}</small>
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

function AttendanceModal({ item, onClose, onSave }) {
  const { lesson, record, student } = item;
  const [attendanceStatus, setAttendanceStatus] = useState(getManualAttendanceInitialStatus(record));
  const [lateMinutes, setLateMinutes] = useState(record.lateMinutes ?? "");
  const [checkInTime, setCheckInTime] = useState(record.checkInTime || formatKoreaTimeFromIso(record.checkInAt) || "");
  const [checkOutTime, setCheckOutTime] = useState(record.checkOutTime || formatKoreaTimeFromIso(record.checkOutAt) || "");
  const [attendanceReason, setAttendanceReason] = useState(record.attendanceReason ?? "");
  const [pendingSave, setPendingSave] = useState(null);
  const [confirmStep, setConfirmStep] = useState("");
  const [saveError, setSaveError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const values = { attendanceStatus, lateMinutes, checkInTime, checkOutTime, attendanceReason };
  const hasKioskRecord = hasTabletAttendanceRecord(record);
  const hasChanged = hasAttendanceModalChanges(record, values);

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
          <small>출결을 못 찍은 학생은 실제 등원 시각을 입력하세요.</small>
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
          얼마나 늦었나요?
          <input value={lateMinutes} onChange={(event) => setLateMinutes(event.target.value)} placeholder="예: 10분" />
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

function AttendanceKiosk({
  isLoading = false,
  isStandalone = false,
  lessons = [],
  records = [],
  students,
  onAttendanceCheck,
  onBack
}) {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(3);

  useEffect(() => {
    if (!result) return undefined;
    setRemainingSeconds(3);
    const intervalId = window.setInterval(() => {
      setRemainingSeconds((current) => Math.max(1, current - 1));
    }, 1000);
    const timerId = window.setTimeout(() => setResult(null), 3000);
    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timerId);
    };
  }, [result]);

  function runAttendanceCheck(nextPin) {
    const nextResult = onAttendanceCheck(nextPin);
    setResult(nextResult);
    setPin("");
  }

  function submitPin(event) {
    event?.preventDefault();
    if (isLoading) return;
    runAttendanceCheck(pin);
  }

  function pressKey(value) {
    if (isLoading) return;
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

  const resultTitle = result?.ok
      ? (result.mode === "completed" ? "하원" : result.mode === "checkOut" ? "하원" : "등원")
      : "출결 체크 실패";
  const resultDetail = result?.ok
    ? `${result.student.name} · ${result.lesson.className} · ${result.checkedTime}`
    : result?.message;

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
            disabled={isLoading}
            value={pin}
            onChange={(event) => setPin(event.target.value.replaceAll(/\D/g, "").slice(0, 4))}
            placeholder={isLoading ? "대기" : "뒤 4자리"}
          />
          <button className="primaryButton" disabled={isLoading || pin.length !== 4} type="submit">확인</button>
        </form>

        <div className={isLoading ? "attendanceNumberPad disabled" : "attendanceNumberPad"} aria-label="출결 번호 입력 키패드">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((value) => (
            <button disabled={isLoading} key={value} onClick={() => pressKey(value)} type="button">{value}</button>
          ))}
          <button className="secondaryKey" disabled={isLoading} onClick={() => pressKey("clear")} type="button">지움</button>
          <button disabled={isLoading} onClick={() => pressKey("0")} type="button">0</button>
          <button className="secondaryKey" disabled={isLoading} onClick={() => pressKey("backspace")} type="button">⌫</button>
        </div>
      </div>

      {result ? (
        <Modal
          className={result.ok ? "attendanceResultModal success" : "attendanceResultModal error"}
          onClose={() => setResult(null)}
          subtitle={resultDetail}
          title={resultTitle}
        >
          <div className="attendanceResultContent">
            <strong>{result.message}</strong>
            <p>{result.ok ? `${remainingSeconds}초 후 자동으로 닫힙니다.` : "번호를 확인한 뒤 다시 입력해 주세요."}</p>
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
                  {selectedLesson.date} · {selectedLesson.startTime}-{selectedLesson.endTime} · {students.length}명
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
                  {lesson.startTime} {lesson.className} ({lesson.studentIds.length}명)
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
                <small>{lesson.startTime}-{lesson.endTime} · {lesson.studentIds.length}명</small>
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
                  {lesson.startTime} {lesson.className}
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
          <span>{lesson.startTime}-{lesson.endTime}</span>
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
  const fallbackTemplate = templates[0] ?? { name: "", startTime: "16:00", endTime: "17:00", color: "#17213d" };
  const [lessonType, setLessonType] = useState(initialLesson?.lessonType ?? "class");
  const [classTemplateId, setClassTemplateId] = useState(initialLesson ? initialLesson.classTemplateId || "" : templates[0]?.classTemplateId || "");
  const activeTemplate = templates.find((template) => template.classTemplateId === classTemplateId) ?? fallbackTemplate;
  const [name, setName] = useState(initialLesson?.className ?? activeTemplate.name);
  const [date, setDate] = useState(initialLesson?.date ?? today);
  const [startTime, setStartTime] = useState(normalizeTimeInput(initialLesson?.startTime) || activeTemplate.startTime);
  const [endTime, setEndTime] = useState(normalizeTimeInput(initialLesson?.endTime) || activeTemplate.endTime);
  const [color, setColor] = useState(initialLesson?.color ?? activeTemplate.color);
  const [studentIds, setStudentIds] = useState(initialLesson?.studentIds ?? students.map((student) => student.studentId));
  const [studentSearch, setStudentSearch] = useState("");
  const lessonColors = ["#17213d", "#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#ef4444", "#f59e0b", "#10b981", "#059669", "#0891b2", "#7c3aed", "#dc2626", "#d97706", "#16a34a", "#0284c7"];
  const filteredStudents = students.filter((student) =>
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
      students
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
        <small className="muted">전체 {students.length}명</small>
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
        {activeTab === "info" ? (
          <input
            className="searchInput"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="학교, 과목, 출판사 검색"
          />
        ) : null}
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
                  <div className="examReadCell multiline">{row.scope || "미입력"}</div>
                  <div className="examReadCell multiline">{row.subTextbook || "미입력"}</div>
                  <button className={row.review || row.revisedReview ? "examReviewOpenButton filled" : "examReviewOpenButton"} onClick={() => setReviewModalRowId(row.examPrepId)} type="button">
                    <strong>{row.review || row.revisedReview ? "총평 보기/수정" : "총평 작성"}</strong>
                    <span>{reviewSummary}</span>
                  </button>
                  <div className="examPrepRowActions">
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
          row={reviewModalRow}
          onClose={() => setReviewModalRowId("")}
          onUpdateRow={onUpdateRow}
        />
      ) : null}
      {editingExamPrepRow ? (
        <ExamPrepEditModal
          row={editingExamPrepRow}
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
  row
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
          <button className="primaryButton" onClick={onClose} type="button">저장 완료</button>
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

function ExamReviewComposerModal({ aiSettings = defaultAiSettings, onClose, onUpdateRow, row }) {
  const commentAiProvider = aiSettings.commentProvider ?? defaultAiSettings.commentProvider;
  const commentAiModel = aiSettings.commentModel ?? defaultAiSettings.commentModel;

  async function polishReview() {
    onUpdateRow(row.examPrepId, "reviewAiStatus", "AI 수정 중");
    try {
      const response = await fetch(apiUrl("/api/ai/comment-polish"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aiProvider: commentAiProvider,
          aiModel: commentAiModel,
          aiPrompt: getAiPrompt(aiSettings, "commentPolish"),
          audience: "teacher",
          grade: row.grade,
          homeworkStatus: "시험 후 총평",
          lessonDate: row.mathExamDate || row.examPeriod || today,
          lessonName: `${row.schoolName} ${row.subject} 시험 총평`,
          rawText: row.review ?? "",
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
      className="commentComposerModal"
      title={`${row.schoolName} 시험 후 총평`}
      subtitle={`${row.grade} · ${row.subject} · ${row.publisher || "출판사 미입력"}`}
      onClose={onClose}
    >
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
            value={row.review ?? ""}
            onChange={(event) => onUpdateRow(row.examPrepId, "review", event.target.value)}
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
          </div>
          <textarea
            className="commentComposerTextarea"
            value={row.revisedReview ?? ""}
            onChange={(event) => onUpdateRow(row.examPrepId, "revisedReview", event.target.value)}
            placeholder="AI가 다듬은 총평 또는 강사가 최종 수정한 총평이 들어갑니다."
          />
          <div className="messagePreview examReviewPreview">
            <div className="messagePreviewHeader">
              <strong>{row.schoolName} 시험 총평 미리보기</strong>
              <span>{row.grade} · {row.subject}</span>
            </div>
            <div className="messagePreviewMeta">
              <span>{row.examPeriod || "시험기간 미입력"}</span>
              <span>{row.mathExamDate || "수학시험일 미입력"}</span>
              <span>{row.specialNote || row.memo || "특이사항 없음"}</span>
            </div>
            <div className="messageBubble">
              {(row.revisedReview || row.review || "왼쪽에 작성한 총평이 이 영역에 표시됩니다.").split("\n").map((line, index) => (
                <p key={`${line}_${index}`}>{line || "\u00a0"}</p>
              ))}
            </div>
          </div>
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
    {
      description: "시험 원본 분석, 총평 수정본, 블로그/인스타용 초안을 만듭니다.",
      modelKey: "examAnalysisModel",
      providerKey: "examAnalysisProvider",
      title: "시험분석 AI"
    },
    {
      description: "원문 문제를 난도와 조건에 맞춰 변형하는 작업에 사용합니다.",
      modelKey: "variantModel",
      providerKey: "variantProvider",
      title: "AI 변형문항"
    }
  ];
  const promptRows = [
    {
      description: "학부모/학생 알림톡 코멘트와 시험 후 총평을 다듬을 때 사용합니다.",
      key: "commentPolish",
      title: "코멘트 AI"
    },
    {
      description: "수업메모를 학생/학부모 안내문으로 바꿀 때 사용합니다.",
      key: "preparationNotice",
      title: "수업메모 AI"
    },
    {
      description: "알림관리의 교재/보강/공지 문자 초안을 다듬을 때 사용합니다.",
      key: "noticeMessage",
      title: "알림관리 공지 AI"
    },
    {
      description: "시험분석 화면에서 시험지 분석 1차 가안을 만들 때 사용합니다.",
      key: "examAnalysis",
      title: "시험분석 AI"
    },
    {
      description: "AI 도구의 변형문항 생성 흐름에서 사용할 기본 지시문입니다.",
      key: "variantProblem",
      title: "AI 변형문항"
    }
  ];
  const activePrompt = promptRows.find((row) => row.key === activePromptKey) ?? promptRows[0];

  useEffect(() => {
    setAccountForm((current) => ({
      ...current,
      loginId: account.loginId
    }));
  }, [account.loginId]);

  function updateProvider(row, provider) {
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      prompts: normalizeAiPrompts(current?.prompts),
      [row.providerKey]: provider,
      [row.modelKey]: aiProviderModels[provider]?.[0] ?? "server-default"
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
            const models = aiProviderModels[provider] ?? aiProviderModels.auto;
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
            <textarea
              value={settings.prompts[activePrompt.key] ?? ""}
              onChange={(event) => updatePrompt(activePrompt.key, event.target.value)}
              rows="14"
            />
            <small className="muted">
              수업 정보, 학생명, 출결, 과제 상태 같은 실제 데이터는 AI 호출 시 별도로 함께 전달됩니다.
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

function ExamAnalysisCenter({
  aiSettings = defaultAiSettings,
  analyses,
  analysisFolders = [],
  examPrepRows,
  onAddAnalysis,
  onDeleteAnalysisFolder,
  onDeleteAnalysis,
  onRunAnalysis,
  onSaveAnalysisFolder,
  onUpdateAnalysis
}) {
  const [selectedAnalysisId, setSelectedAnalysisId] = useState(analyses[0]?.examAnalysisId ?? "");
  const [selectedSchoolId, setSelectedSchoolId] = useState("");
  const [selectedGradeKey, setSelectedGradeKey] = useState("");
  const [selectedFolderId, setSelectedFolderId] = useState("");
  const [isAnalysisWorkspaceOpen, setIsAnalysisWorkspaceOpen] = useState(false);
  const [folderModalMode, setFolderModalMode] = useState("");
  const [folderDraft, setFolderDraft] = useState(null);
  const [detailSectionId, setDetailSectionId] = useState("");
  const [isReportPreviewOpen, setIsReportPreviewOpen] = useState(false);
  const [isAiInitialViewOpen, setIsAiInitialViewOpen] = useState(false);
  const [outputPreviewId, setOutputPreviewId] = useState("");
  const [analysisNow, setAnalysisNow] = useState(Date.now());
  const [analysisApiCheck, setAnalysisApiCheck] = useState({ analysisId: "", message: "", status: "idle" });
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [expandedQuestionInsightId, setExpandedQuestionInsightId] = useState("");
  const [activeQuestionSourceId, setActiveQuestionSourceId] = useState("");
  const [questionCountDraft, setQuestionCountDraft] = useState("");
  const [cropDragStart, setCropDragStart] = useState(null);
  const [cropDraft, setCropDraft] = useState(null);
  const [cropDraftStatus, setCropDraftStatus] = useState("");
  const [isQuestionCropDrafting, setIsQuestionCropDrafting] = useState(false);
  const [pdfPageCount, setPdfPageCount] = useState(0);
  const [pdfRenderStatus, setPdfRenderStatus] = useState("");
  const [pdfScale, setPdfScale] = useState(1.25);
  const [cropViewerPage, setCropViewerPage] = useState(1);
  const sourceFileInputRef = useRef(null);
  const questionSourceInputRef = useRef(null);
  const cropSurfaceRef = useRef(null);
  const pdfCanvasRef = useRef(null);
  const pdfRenderTaskRef = useRef(null);
  const normalizedAnalyses = useMemo(
    () => analyses.map((analysis) => {
      const normalized = normalizeExamAnalysisForDisplay(analysis);
      return {
        ...normalized,
        analysisFolderId: getExamAnalysisFolderId(normalized)
      };
    }),
    [analyses]
  );
  const analysisFolderList = useMemo(
    () => buildExamAnalysisFolderList(normalizedAnalyses, analysisFolders),
    [analysisFolders, normalizedAnalyses]
  );
  const analysisSchoolTree = useMemo(
    () => buildExamAnalysisLibraryTree(normalizedAnalyses, analysisFolders),
    [analysisFolders, normalizedAnalyses]
  );
  const selectedSchool = analysisSchoolTree.find((school) => school.folderId === selectedSchoolId) ?? analysisSchoolTree[0] ?? null;
  const selectedGrade = selectedSchool?.grades.find((grade) => grade.grade === selectedGradeKey) ?? selectedSchool?.grades[0] ?? null;
  const selectedFolder = selectedGrade?.exams.find((folder) => folder.folderId === selectedFolderId) ?? selectedGrade?.exams[0] ?? null;
  const visibleAnalyses = selectedFolder ? selectedFolder.analyses : [];
  const selectedAnalysisIsVisible = visibleAnalyses.some((analysis) => analysis.examAnalysisId === selectedAnalysisId);
  const rawSelectedAnalysis = selectedAnalysisIsVisible
    ? analyses.find((item) => item.examAnalysisId === selectedAnalysisId) ?? visibleAnalyses.find((analysis) => analysis.examAnalysisId === selectedAnalysisId)
    : visibleAnalyses[0] ?? null;
  const selectedAnalysis = rawSelectedAnalysis
    ? {
        ...normalizeExamAnalysisForDisplay(rawSelectedAnalysis),
        analysisFolderId: getExamAnalysisFolderId(normalizeExamAnalysisForDisplay(rawSelectedAnalysis))
      }
    : null;
  const linkedExamPrepRow = selectedAnalysis
    ? examPrepRows.find((row) => row.examPrepId === selectedAnalysis.examPrepId)
    : null;
  const examPrepContext = linkedExamPrepRow ? {
    schoolName: linkedExamPrepRow.schoolName,
    grade: linkedExamPrepRow.grade,
    subject: linkedExamPrepRow.subject,
    publisher: linkedExamPrepRow.publisher,
    examCycle: linkedExamPrepRow.examCycle,
    examPeriod: linkedExamPrepRow.examPeriod,
    mathExamDate: linkedExamPrepRow.mathExamDate,
    mathExamDates: normalizeMathExamEntries(linkedExamPrepRow),
    specialNote: linkedExamPrepRow.specialNote || linkedExamPrepRow.memo || "",
    scope: linkedExamPrepRow.scope || "",
    subTextbook: linkedExamPrepRow.subTextbook || "",
    review: linkedExamPrepRow.revisedReview || linkedExamPrepRow.review || ""
  } : null;
  const pipelineStages = ["원본 입력", "문항 검수", "분석 검토", "산출물 작성"];
  const stageAlias = {
    "1차 AI 가안": "원본 입력",
    "문항분석표 검수": "문항 검수",
    "강사 인사이트 추가": "분석 검토",
    "최종 편집": "산출물 작성",
    "발행 완료": "산출물 작성"
  };
  const currentStage = stageAlias[selectedAnalysis?.pipelineStage] ??
    (pipelineStages.includes(selectedAnalysis?.pipelineStage) ? selectedAnalysis.pipelineStage : pipelineStages[0]);
  const statusMeta = selectedAnalysis ? getExamAnalysisStatusMeta(selectedAnalysis) : getExamAnalysisStatusMeta();
  const analysisElapsedSeconds = selectedAnalysis?.aiStatus === "분석 중"
    ? getExamAnalysisElapsedSeconds(selectedAnalysis, analysisNow)
    : 0;
  const analysisWaitMessage = selectedAnalysis?.aiStatus === "분석 중"
    ? getExamAnalysisWaitMessage(analysisElapsedSeconds)
    : "";
  const detailSection = examAnalysisDetailSections.find((section) => section.id === detailSectionId);
  const globalQuestionComposition = normalizeExamQuestionComposition(selectedAnalysis?.questionComposition);
  const questionCompositionsBySource = normalizeExamSourceCompositions(selectedAnalysis?.questionCompositionsBySource);
  const questionTargetCountsBySource = normalizeExamSourceTargetCounts(selectedAnalysis?.questionTargetCountsBySource);
  const questionItems = normalizeExamQuestionItems(selectedAnalysis?.questionItems);
  const renderSourceFiles = (selectedAnalysis?.sourceFiles ?? []).filter((file) => isImageExamAnalysisSource(file) || isPdfExamAnalysisSource(file));
  const renderSourceFileOptions = renderSourceFiles.map((file, index) => ({
    file,
    index,
    sourceId: getExamAnalysisSourceFileId(file, index)
  }));
  const renderSourceIdsKey = renderSourceFileOptions.map((option) => option.sourceId).join("\n");
  const defaultQuestionSourceId = renderSourceFileOptions[0]?.sourceId || "";
  const activeQuestionSourceOption = renderSourceFileOptions.find((option) => option.sourceId === activeQuestionSourceId) ?? renderSourceFileOptions[0] ?? null;
  const resolvedQuestionSourceId = activeQuestionSourceOption?.sourceId || "";
  const hasMultipleQuestionSources = renderSourceFileOptions.length > 1;
  const sourceQuestionComposition = normalizeExamQuestionComposition(questionCompositionsBySource[resolvedQuestionSourceId]);
  const activeQuestionItems = questionItems.filter((item) => {
    if (!resolvedQuestionSourceId) return true;
    return (item.cropSourceId || defaultQuestionSourceId) === resolvedQuestionSourceId;
  });
  const sourceQuestionTargetCount = Number(questionTargetCountsBySource[resolvedQuestionSourceId]) || 0;
  const sourceFallbackQuestionCount = hasMultipleQuestionSources && resolvedQuestionSourceId
    ? sourceQuestionTargetCount || activeQuestionItems.length
    : 0;
  const sourceFallbackQuestionComposition = sourceFallbackQuestionCount
    ? normalizeExamQuestionComposition({
        total: sourceFallbackQuestionCount,
        sections: [{ label: "현재 원본", start: 1, end: sourceFallbackQuestionCount, count: sourceFallbackQuestionCount, score: "" }],
        evidence: "현재 원본 문항 카드 수 기준",
        confidence: "확인 필요"
      })
    : null;
  const questionComposition = sourceQuestionComposition || sourceFallbackQuestionComposition || (hasMultipleQuestionSources && resolvedQuestionSourceId ? null : globalQuestionComposition);
  const activeQuestionMaxNumber = getExamQuestionMaxNumber(activeQuestionItems);
  const manualQuestionCount = Math.max(0, Math.min(80, Number(questionCountDraft) || 0));
  const activeQuestionNumberKey = activeQuestionItems.map((item) => Number(item.number) || 0).join(",");
  const selectedQuestion = activeQuestionItems.find((item) => item.questionId === selectedQuestionId) ?? activeQuestionItems[0] ?? null;
  const selectedQuestionSourceFile = activeQuestionSourceOption?.file ?? renderSourceFiles[0];
  const selectedQuestionSourceId = activeQuestionSourceOption?.sourceId || (selectedQuestionSourceFile ? getExamAnalysisSourceFileId(selectedQuestionSourceFile) : "");
  const selectedQuestionSourceIsPdf = isPdfExamAnalysisSource(selectedQuestionSourceFile);
  const selectedQuestionSourceIsImage = isImageExamAnalysisSource(selectedQuestionSourceFile);
  const selectedQuestionSourceUrl = selectedQuestionSourceFile
    ? getExamAnalysisSourceRenderUrl(selectedQuestionSourceFile)
    : selectedQuestion?.cropSourceUrl || "";
  const selectedQuestionOpenUrl = selectedQuestionSourceFile
    ? getExamAnalysisSourceOpenUrl(selectedQuestionSourceFile)
    : selectedQuestionSourceUrl;
  const selectedQuestionPage = Math.max(1, Number(selectedQuestion?.page) || 1);
  const cropViewerPageNumber = Math.max(1, Math.min(pdfPageCount || 999, Number(cropViewerPage) || selectedQuestionPage || 1));
  const selectedQuestionCropIsVisible = !selectedQuestionSourceIsPdf || selectedQuestionPage === cropViewerPageNumber || Boolean(cropDraft);
  const selectedQuestionCropBox = normalizeCropBox(cropDraft || (selectedQuestionCropIsVisible ? selectedQuestion?.cropBox : null));
  const activeQuestionTargetCount = sourceQuestionTargetCount || activeQuestionItems.length || manualQuestionCount || questionComposition?.total || (hasMultipleQuestionSources ? 0 : Number(selectedAnalysis?.questionTargetCount)) || 0;
  const selectedQuestionInsightRecommended = isExamQuestionInsightRecommended(selectedQuestion);
  const selectedQuestionHasDetailedInsight = hasExamQuestionDetailedInsight(selectedQuestion);
  const selectedQuestionInsightExpanded = Boolean(selectedQuestion && expandedQuestionInsightId === selectedQuestion.questionId);
  const ssenTypeSuggestions = selectedQuestion
    ? getSsenTypeSuggestions({
        query: getSsenPrimaryTypeText(selectedQuestion.ssenTypeTags),
        subject: selectedAnalysis?.subject,
        unit: selectedQuestion.unit
      })
    : [];
  const folderExamCycleOptions = useMemo(
    () => {
      const year = String(currentExamCycle).split("-")[0] || String(new Date(`${today}T00:00:00+09:00`).getFullYear());
      return [
        ...new Set([
          currentExamCycle,
          `${year}-1-mid`,
          `${year}-1-final`,
          `${year}-2-mid`,
          `${year}-2-final`,
          ...examPrepRows.map((row) => row.examCycle).filter(Boolean)
        ])
      ];
    },
    [examPrepRows]
  );
  const teacherAnalysisText = selectedAnalysis
    ? [
        selectedAnalysis.oneLineSummary ? `# 한 줄 총평\n${selectedAnalysis.oneLineSummary}` : "",
        selectedAnalysis.examStructure ? `# 시험 구조\n${selectedAnalysis.examStructure}` : "",
        selectedAnalysis.unitDistribution ? `# 단원별 출제 분포\n${selectedAnalysis.unitDistribution}` : "",
        selectedAnalysis.typeClassification ? `# 유형 분류\n${selectedAnalysis.typeClassification}` : "",
        selectedAnalysis.killerProblems ? `# 킬러/준킬러\n${selectedAnalysis.killerProblems}` : "",
        selectedAnalysis.fiveCorePatterns ? `# 5대 핵심 패턴\n${selectedAnalysis.fiveCorePatterns}` : "",
        selectedAnalysis.insightSummary ? `# 강사 총평\n${selectedAnalysis.insightSummary}` : "",
        selectedAnalysis.insightUnits ? `# 단원별 인사이트\n${selectedAnalysis.insightUnits}` : "",
        selectedAnalysis.insightKiller ? `# 킬러문항 인사이트\n${selectedAnalysis.insightKiller}` : "",
        selectedAnalysis.insightStudentErrors ? `# 실제 학생 오답\n${selectedAnalysis.insightStudentErrors}` : "",
        selectedAnalysis.insightPrediction ? `# 다음 시험 예측\n${selectedAnalysis.insightPrediction}` : "",
        selectedAnalysis.insightDirection ? `# 학습 방향\n${selectedAnalysis.insightDirection}` : "",
        buildQuestionInsightText(selectedAnalysis.questionItems) ? `# 문항별 강사 코멘트\n${buildQuestionInsightText(selectedAnalysis.questionItems)}` : ""
      ].filter(Boolean).join("\n\n")
    : "";
  const outputPreviewMap = selectedAnalysis ? {
    teacher: { title: "강사용 분석지", kind: "document", value: teacherAnalysisText, editSection: "ai" },
    student: { title: "학생 분석지", kind: "document", value: selectedAnalysis.studentAnalysisDraft, editSection: "output" },
    blog: { title: "블로그 초안", kind: "document", value: selectedAnalysis.blogDraft, editSection: "output" },
    instagram: { title: "인스타 카드뉴스", kind: "instagram", value: selectedAnalysis.instagramDraft, editSection: "output" }
  } : {};
  const outputPreview = outputPreviewMap[outputPreviewId] ?? null;
  useEffect(() => {
    if (selectedAnalysis?.aiStatus !== "분석 중") return undefined;
    setAnalysisNow(Date.now());
    const intervalId = window.setInterval(() => setAnalysisNow(Date.now()), 1000);
    return () => window.clearInterval(intervalId);
  }, [selectedAnalysis?.examAnalysisId, selectedAnalysis?.aiRunStartedAt, selectedAnalysis?.aiStatus]);

  useEffect(() => {
    if (!selectedAnalysis || selectedAnalysis.aiStatus !== "분석 중") {
      setAnalysisApiCheck({ analysisId: "", message: "", status: "idle" });
      return undefined;
    }

    let cancelled = false;
    let intervalId = null;
    const analysisId = selectedAnalysis.examAnalysisId;
    const elapsedMs = getExamAnalysisElapsedSeconds(selectedAnalysis) * 1000;
    const initialDelay = Math.max(0, 90 * 1000 - elapsedMs);
    setAnalysisApiCheck({
      analysisId,
      message: "90초 이상 걸리면 서버 상태를 자동 확인합니다.",
      status: "waiting"
    });

    async function checkApiStatus() {
      if (cancelled) return;
      setAnalysisApiCheck({
        analysisId,
        message: "서버 응답 상태를 확인하는 중입니다.",
        status: "checking"
      });
      try {
        const response = await fetch(apiUrl("/api/integrations/status"), { cache: "no-store" });
        const result = await response.json();
        if (!response.ok || !result.ok) throw new Error(result.error || "상태 확인 실패");
        if (cancelled) return;
        setAnalysisApiCheck({
          analysisId,
          message: "서버 응답은 정상입니다. AI 제공자 응답을 기다리는 상태입니다.",
          status: "ok"
        });
      } catch (error) {
        if (cancelled) return;
        setAnalysisApiCheck({
          analysisId,
          message: `서버 상태 확인 실패: ${error.message}. 네트워크 또는 API 문제가 있을 수 있습니다.`,
          status: "failed"
        });
      }
    }

    const timeoutId = window.setTimeout(() => {
      checkApiStatus();
      intervalId = window.setInterval(checkApiStatus, 60 * 1000);
    }, initialDelay);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [selectedAnalysis?.examAnalysisId, selectedAnalysis?.aiRunStartedAt, selectedAnalysis?.aiStatus]);

  useEffect(() => {
    if (!analysisSchoolTree.length) {
      if (selectedSchoolId) setSelectedSchoolId("");
      return;
    }
    if (!selectedSchoolId || !analysisSchoolTree.some((school) => school.folderId === selectedSchoolId)) {
      setSelectedSchoolId(analysisSchoolTree[0].folderId);
    }
  }, [analysisSchoolTree, selectedSchoolId]);

  useEffect(() => {
    if (!selectedSchool?.grades.length) {
      if (selectedGradeKey) setSelectedGradeKey("");
      return;
    }
    if (!selectedGradeKey || !selectedSchool.grades.some((grade) => grade.grade === selectedGradeKey)) {
      setSelectedGradeKey(selectedSchool.grades[0].grade);
    }
  }, [selectedGradeKey, selectedSchool]);

  useEffect(() => {
    if (!selectedGrade?.exams.length) {
      if (selectedFolderId) setSelectedFolderId("");
      return;
    }
    if (!selectedFolderId || !selectedGrade.exams.some((folder) => folder.folderId === selectedFolderId)) {
      setSelectedFolderId(selectedGrade.exams[0].folderId);
    }
  }, [selectedFolderId, selectedGrade]);

  useEffect(() => {
    if (!visibleAnalyses.length) {
      if (selectedAnalysisId) setSelectedAnalysisId("");
      return;
    }
    if (!selectedAnalysisId || !visibleAnalyses.some((analysis) => analysis.examAnalysisId === selectedAnalysisId)) {
      setSelectedAnalysisId(visibleAnalyses[0].examAnalysisId);
    }
  }, [selectedAnalysisId, visibleAnalyses]);

  useEffect(() => {
    if (isAnalysisWorkspaceOpen && !selectedAnalysis) {
      setIsAnalysisWorkspaceOpen(false);
    }
  }, [isAnalysisWorkspaceOpen, selectedAnalysis]);

  useEffect(() => {
    if (!renderSourceFileOptions.length) {
      if (activeQuestionSourceId) setActiveQuestionSourceId("");
      return;
    }
    if (!activeQuestionSourceId || !renderSourceFileOptions.some((option) => option.sourceId === activeQuestionSourceId)) {
      setActiveQuestionSourceId(defaultQuestionSourceId);
    }
  }, [activeQuestionSourceId, defaultQuestionSourceId, renderSourceIdsKey]);

  useEffect(() => {
    const nextCount = sourceQuestionTargetCount || questionComposition?.total || activeQuestionItems.length || (!hasMultipleQuestionSources ? Number(selectedAnalysis?.questionTargetCount) || 0 : 0) || "";
    setQuestionCountDraft(nextCount ? String(nextCount) : "");
  }, [selectedAnalysis?.examAnalysisId, resolvedQuestionSourceId, sourceQuestionTargetCount, questionComposition?.total, activeQuestionItems.length, hasMultipleQuestionSources, selectedAnalysis?.questionTargetCount]);

  useEffect(() => {
    if (!activeQuestionItems.length) {
      if (selectedQuestionId) setSelectedQuestionId("");
      return;
    }
    if (!selectedQuestionId || !activeQuestionItems.some((item) => item.questionId === selectedQuestionId)) {
      setSelectedQuestionId(activeQuestionItems[0].questionId);
    }
  }, [activeQuestionItems, selectedQuestionId]);

  useEffect(() => {
    if (!activeQuestionItems.length || activeQuestionMaxNumber <= 1) return;
    if (hasExamQuestionNumberSequence(activeQuestionItems, activeQuestionMaxNumber)) return;
    const missingNumbers = new Set(getMissingExamQuestionNumbers(activeQuestionItems, activeQuestionMaxNumber));
    const reusableDetachedItems = questionItems.filter((item) =>
      !questionBelongsToActiveSource(item) && missingNumbers.has(Number(item.number))
    );
    const reusedIds = new Set(reusableDetachedItems.map((item) => item.questionId));
    const repairedItems = createExamQuestionItemsFromCount(
      activeQuestionMaxNumber,
      [...activeQuestionItems, ...reusableDetachedItems]
    ).map(withActiveQuestionSource);
    updateQuestionItems([
      ...questionItems.filter((item) => !questionBelongsToActiveSource(item) && !reusedIds.has(item.questionId)),
      ...repairedItems
    ]);
    setSelectedQuestionId((current) => current || repairedItems[0]?.questionId || "");
  }, [activeQuestionNumberKey, activeQuestionMaxNumber, resolvedQuestionSourceId]);

  useEffect(() => {
    if (!expandedQuestionInsightId) return;
    if (!activeQuestionItems.some((item) => item.questionId === expandedQuestionInsightId)) {
      setExpandedQuestionInsightId("");
    }
  }, [activeQuestionItems, expandedQuestionInsightId]);

  useEffect(() => {
    if (!selectedQuestion || !selectedQuestionSourceIsPdf) return;
    setCropViewerPage(selectedQuestionPage);
    setCropDraft(null);
    setCropDragStart(null);
  }, [selectedQuestion?.questionId, selectedQuestion?.cropSourceId, selectedQuestionPage, selectedQuestionSourceId, selectedQuestionSourceIsPdf]);

  useEffect(() => {
    if (!selectedQuestionSourceIsPdf) {
      setPdfPageCount(0);
      setPdfRenderStatus("");
      return undefined;
    }
    if (!isAnalysisWorkspaceOpen || currentStage !== "문항 검수" || !selectedQuestionSourceUrl || !pdfCanvasRef.current) {
      return undefined;
    }

    let cancelled = false;
    let loadingTask = null;
    const canvas = pdfCanvasRef.current;
    setPdfRenderStatus("PDF 페이지를 불러오는 중입니다...");
    pdfRenderTaskRef.current?.cancel?.();

    loadPdfJs()
      .then(async (pdfjsLib) => {
        if (cancelled) return;
        loadingTask = pdfjsLib.getDocument({ url: selectedQuestionSourceUrl });
        const pdfDocument = await loadingTask.promise;
        if (cancelled) return;
        setPdfPageCount(pdfDocument.numPages);
        const pageNumber = Math.max(1, Math.min(cropViewerPageNumber, pdfDocument.numPages));
        if (pageNumber !== cropViewerPageNumber) setCropViewerPage(pageNumber);
        const page = await pdfDocument.getPage(pageNumber);
        if (cancelled) return;
        const viewport = page.getViewport({ scale: pdfScale });
        const outputScale = Math.min(window.devicePixelRatio || 1, 2);
        const context = canvas.getContext("2d");
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        context.setTransform(outputScale, 0, 0, outputScale, 0, 0);
        const renderTask = page.render({ canvasContext: context, viewport });
        pdfRenderTaskRef.current = renderTask;
        await renderTask.promise;
        if (!cancelled) setPdfRenderStatus(`PDF ${pageNumber}/${pdfDocument.numPages}페이지 렌더링 완료`);
      })
      .catch((error) => {
        if (cancelled || error?.name === "RenderingCancelledException") return;
        setPdfRenderStatus(`PDF 렌더링 실패 · ${error.message}`);
      });

    return () => {
      cancelled = true;
      pdfRenderTaskRef.current?.cancel?.();
      loadingTask?.destroy?.();
    };
  }, [cropViewerPageNumber, currentStage, isAnalysisWorkspaceOpen, pdfScale, selectedQuestionSourceIsPdf, selectedQuestionSourceUrl]);

  function update(field, value) {
    if (!selectedAnalysis) return;
    onUpdateAnalysis(selectedAnalysis.examAnalysisId, field, value);
  }

  function updateQuestionItems(nextItems) {
    update("questionItems", normalizeExamQuestionItems(nextItems));
  }

  function updateFinalDocument(nextDocument) {
    update("finalDocument", normalizeExamFinalDocument(nextDocument));
  }

  function regenerateFinalDocument() {
    if (!selectedAnalysis) return;
    update("finalDocument", createExamFinalDocumentFromAnalysis(selectedAnalysis));
  }

  function questionBelongsToActiveSource(item) {
    if (!resolvedQuestionSourceId) return true;
    return (item.cropSourceId || defaultQuestionSourceId) === resolvedQuestionSourceId;
  }

  function withActiveQuestionSource(item) {
    return {
      ...item,
      cropSourceId: resolvedQuestionSourceId || item.cropSourceId,
      cropSourceUrl: selectedQuestionSourceFile ? getExamAnalysisSourceRenderUrl(selectedQuestionSourceFile) : item.cropSourceUrl
    };
  }

  function createBlankQuestionItemsForSource(sourceId, sourceFile) {
    const sourceUrl = sourceFile ? getExamAnalysisSourceRenderUrl(sourceFile) : "";
    const targetCount = Math.max(1, Math.min(80, Number(questionCountDraft) || sourceQuestionTargetCount || activeQuestionItems.length || questionComposition?.total || 20));
    return createExamQuestionItemsFromCount(targetCount, []).map((item, index) => createExamQuestionItem({
      number: item.number || index + 1,
      page: item.page || 1,
      cropSourceId: sourceId,
      cropSourceUrl: sourceUrl
    }, questionItems.length + index));
  }

  function applyQuestionCount(countOverride = null) {
    const targetCount = Math.max(0, Math.min(80, Number(countOverride ?? questionCountDraft) || 0));
    if (!targetCount) {
      window.alert("확정할 문항 수를 입력해 주세요.");
      return;
    }
    const nextItems = createExamQuestionItemsFromCount(targetCount, []).map(withActiveQuestionSource);
    updateQuestionItems([
      ...questionItems.filter((item) => !questionBelongsToActiveSource(item)),
      ...nextItems
    ]);
    if (resolvedQuestionSourceId) {
      update("questionTargetCountsBySource", {
        ...questionTargetCountsBySource,
        [resolvedQuestionSourceId]: targetCount
      });
    }
    if (!resolvedQuestionSourceId || renderSourceFileOptions.length <= 1) update("questionTargetCount", targetCount);
    setSelectedQuestionId(nextItems[0]?.questionId || "");
  }

  function fillQuestionCountFromAiComposition() {
    if (!questionComposition?.total) return;
    setQuestionCountDraft(String(questionComposition.total));
  }

  async function runAiForActiveQuestionSource() {
    if (!selectedAnalysis) return;
    const requestedCount = Math.max(1, Math.min(80, Number(questionCountDraft) || activeQuestionItems.length || activeQuestionMaxNumber || 20));
    const targetItems = createExamQuestionItemsFromCount(requestedCount, activeQuestionItems).map(withActiveQuestionSource);
    if (!activeQuestionItems.length) {
      updateQuestionItems([...questionItems, ...targetItems]);
      setSelectedQuestionId(targetItems[0]?.questionId || "");
    }
    const sourceText = selectedQuestionSourceFile?.extractedText
      ? `[현재 시험지/연도 원문] ${selectedQuestionSourceFile.fileName}\n${selectedQuestionSourceFile.extractedText}`
      : "";
    const scopedRawExamText = sourceText || selectedAnalysis.rawExamText;
    await onRunAnalysis({
      ...selectedAnalysis,
      sourceFiles: selectedQuestionSourceFile ? [{ ...selectedQuestionSourceFile, sourceId: resolvedQuestionSourceId }] : selectedAnalysis.sourceFiles,
      sourceFileUrl: selectedQuestionOpenUrl || selectedAnalysis.sourceFileUrl,
      rawExamText: scopedRawExamText,
      questionItems: targetItems,
      questionSourceId: resolvedQuestionSourceId,
      questionSourceUrl: selectedQuestionSourceUrl,
      questionTargetCount: Math.max(requestedCount, targetItems.length),
      questionTargetCountsBySource: {
        ...questionTargetCountsBySource,
        [resolvedQuestionSourceId]: Math.max(requestedCount, targetItems.length)
      },
      examPrepContext
    }, aiSettings);
  }

  function addQuestionItem() {
    const nextNumber = (activeQuestionItems.at(-1)?.number || activeQuestionItems.length) + 1;
    const nextItem = withActiveQuestionSource(createExamQuestionItem({ number: nextNumber }, questionItems.length));
    updateQuestionItems([...questionItems, nextItem]);
    setSelectedQuestionId(nextItem.questionId);
  }

  function deleteSelectedQuestion() {
    if (!selectedQuestion) return;
    if (!window.confirm(`${selectedQuestion.number}번 문항 카드를 삭제할까요?`)) return;
    const nextItems = questionItems.filter((item) => item.questionId !== selectedQuestion.questionId);
    updateQuestionItems(nextItems);
    const nextActiveItems = nextItems.filter((item) => !resolvedQuestionSourceId || (item.cropSourceId || defaultQuestionSourceId) === resolvedQuestionSourceId);
    setSelectedQuestionId(nextActiveItems[0]?.questionId || "");
  }

  function updateSelectedQuestion(field, value) {
    if (!selectedQuestion) return;
    updateQuestionItems(questionItems.map((item) =>
      item.questionId === selectedQuestion.questionId ? { ...item, [field]: value } : item
    ));
  }

  function setCropViewerPageClamped(page) {
    const maxPage = Math.max(1, Number(pdfPageCount) || 999);
    const nextPage = Math.max(1, Math.min(maxPage, Number(page) || 1));
    setCropViewerPage(nextPage);
    setCropDragStart(null);
    setCropDraft(null);
  }

  function moveCropViewerPage(delta) {
    setCropViewerPageClamped(cropViewerPageNumber + delta);
  }

  function applyCropViewerPageToSelectedQuestion() {
    if (!selectedQuestion) return;
    updateSelectedQuestion("page", cropViewerPageNumber);
    setCropDraftStatus(`${cropViewerPageNumber}페이지를 ${selectedQuestion.number}번 문항 페이지로 저장했습니다.`);
  }

  function appendSelectedQuestionTag(tag) {
    if (!selectedQuestion) return;
    const normalizedTag = normalizeExamQuestionTag(tag);
    if (!normalizedTag) return;
    const nextTags = normalizeExamQuestionTags([...(selectedQuestion.tags ?? []), normalizedTag]);
    const joinedComment = selectedQuestion.teacherComment?.includes(tag)
      ? selectedQuestion.teacherComment
      : [selectedQuestion.teacherComment, tag].filter(Boolean).join("\n");
    updateQuestionItems(questionItems.map((item) =>
      item.questionId === selectedQuestion.questionId
        ? { ...item, tags: nextTags, teacherComment: joinedComment }
        : item
    ));
  }

  function assignSourceToSelectedQuestion(sourceId) {
    const sourceOption = renderSourceFileOptions.find((option) => option.sourceId === sourceId);
    const nextSourceId = sourceOption?.sourceId || defaultQuestionSourceId;
    setActiveQuestionSourceId(nextSourceId);
    setCropDraft(null);
    setCropDragStart(null);
    setCropViewerPage(1);
    const existingItems = questionItems.filter((item) => (item.cropSourceId || defaultQuestionSourceId) === nextSourceId);
    if (existingItems.length) {
      setSelectedQuestionId(existingItems[0].questionId);
      return;
    }
    const nextItems = createBlankQuestionItemsForSource(nextSourceId, sourceOption?.file);
    updateQuestionItems([...questionItems, ...nextItems]);
    setSelectedQuestionId(nextItems[0]?.questionId || "");
  }

  function toggleSelectedQuestionTag(tag) {
    if (!selectedQuestion) return;
    const currentTags = Array.isArray(selectedQuestion.tags) ? selectedQuestion.tags : [];
    const nextTags = currentTags.includes(tag)
      ? currentTags.filter((item) => item !== tag)
      : [...currentTags, tag];
    updateQuestionItems(questionItems.map((item) =>
      item.questionId === selectedQuestion.questionId ? { ...item, tags: nextTags } : item
    ));
  }

  function getCropPointerPercent(event) {
    const rect = cropSurfaceRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
    return { x, y };
  }

  function handleCropPointerDown(event) {
    if (!selectedQuestion || !selectedQuestionSourceUrl) return;
    const point = getCropPointerPercent(event);
    if (!point) return;
    setCropDragStart(point);
    setCropDraft({ x: point.x, y: point.y, width: 0, height: 0 });
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function handleCropPointerMove(event) {
    if (!cropDragStart) return;
    const point = getCropPointerPercent(event);
    if (!point) return;
    const x = Math.min(cropDragStart.x, point.x);
    const y = Math.min(cropDragStart.y, point.y);
    setCropDraft({
      x,
      y,
      width: Math.abs(point.x - cropDragStart.x),
      height: Math.abs(point.y - cropDragStart.y)
    });
  }

  function commitCropDraft() {
    if (!selectedQuestion || !cropDraft) {
      setCropDragStart(null);
      setCropDraft(null);
      return;
    }
    const normalized = normalizeCropBox(cropDraft);
    if (normalized && normalized.width > 1 && normalized.height > 1) {
      updateQuestionItems(questionItems.map((item) =>
        item.questionId === selectedQuestion.questionId
          ? {
              ...item,
              cropBox: normalized,
              cropSourceId: resolvedQuestionSourceId || selectedQuestion.cropSourceId || selectedQuestionSourceId,
              cropSourceUrl: selectedQuestionSourceUrl,
              page: selectedQuestionSourceIsPdf ? cropViewerPageNumber : item.page
            }
          : item
      ));
    }
    setCropDragStart(null);
    setCropDraft(null);
  }

  function clearSelectedQuestionCrop() {
    if (!selectedQuestion) return;
    updateQuestionItems(questionItems.map((item) =>
      item.questionId === selectedQuestion.questionId ? { ...item, cropBox: null } : item
    ));
  }

  function getQuestionItemsForCropPage(pageNumber = cropViewerPageNumber, options = {}) {
    if (!activeQuestionItems.length) return [];
    const safePageCount = Math.max(1, Number(options.pageCount ?? pdfPageCount) || 1);
    const safePage = Math.max(1, Number(pageNumber) || 1);
    const forceHeuristicDistribution = Boolean(options.forceHeuristicDistribution);
    const fallbackToSelected = options.fallbackToSelected !== false;
    if (!selectedQuestionSourceIsPdf || safePageCount <= 1) return activeQuestionItems;
    const hasExplicitPages = !forceHeuristicDistribution && activeQuestionItems.some((item) => Number(item.page) > 1);
    if (hasExplicitPages) {
      const pageItems = activeQuestionItems.filter((item) => Math.max(1, Number(item.page) || 1) === safePage);
      return pageItems.length ? pageItems : (fallbackToSelected ? [selectedQuestion].filter(Boolean) : []);
    }
    const perPage = Math.max(1, Math.ceil(activeQuestionItems.length / safePageCount));
    return activeQuestionItems.slice((safePage - 1) * perPage, safePage * perPage);
  }

  function getQuestionItemsForCurrentCropPage() {
    return getQuestionItemsForCropPage(cropViewerPageNumber);
  }

  function buildPageFallbackCropBoxes(pageItems = [], pageNumber = cropViewerPageNumber) {
    return buildHeuristicQuestionCropBoxes(pageItems, 1, 1).map((box) => ({
      ...box,
      page: pageNumber
    }));
  }

  function getCurrentCropVisionImageDataUrl() {
    if (selectedQuestionSourceIsPdf) {
      return canvasToVisionImageDataUrl(pdfCanvasRef.current);
    }
    const imageElement = cropSurfaceRef.current?.querySelector("img");
    return imageElementToVisionImageDataUrl(imageElement);
  }

  function applyQuestionCropDraftBoxes(boxes = [], statusText = "") {
    if (!boxes.length) return false;
    const byQuestionId = new Map();
    const byQuestionNumber = new Map();
    boxes.forEach((box) => {
      if (box.questionId) byQuestionId.set(box.questionId, box);
      byQuestionNumber.set(Number(box.questionNumber), box);
    });
    const matchedIds = [];
    const nextItems = questionItems.map((item) => {
      if (!questionBelongsToActiveSource(item)) return item;
      const draft = byQuestionId.get(item.questionId) || byQuestionNumber.get(Number(item.number));
      const cropBox = normalizeCropBox(draft?.cropBox || draft);
      if (!cropBox) return item;
      matchedIds.push(item.questionId);
      return {
        ...item,
        cropBox,
        cropSourceId: resolvedQuestionSourceId || selectedQuestionSourceId || item.cropSourceId,
        cropSourceUrl: selectedQuestionSourceUrl || item.cropSourceUrl,
        page: Math.max(1, Number(draft.page || cropViewerPageNumber) || 1)
      };
    });
    updateQuestionItems(nextItems);
    if (matchedIds[0]) setSelectedQuestionId(matchedIds[0]);
    if (statusText) setCropDraftStatus(statusText);
    return matchedIds.length > 0;
  }

  async function handleDraftQuestionCrops() {
    if (!selectedQuestionSourceUrl) {
      setCropDraftStatus("PDF 또는 이미지 원본을 먼저 선택해 주세요.");
      return;
    }
    if (!activeQuestionItems.length) {
      setCropDraftStatus("문항 카드를 먼저 만든 뒤 크롭 초안을 생성할 수 있습니다.");
      return;
    }
    const pageItems = getQuestionItemsForCurrentCropPage();
    const fallbackBoxes = buildPageFallbackCropBoxes(pageItems, cropViewerPageNumber);
    setCropDraftStatus("AI vision으로 문항 영역 초안을 만드는 중입니다...");
    setIsQuestionCropDrafting(true);
    try {
      const imageDataUrl = getCurrentCropVisionImageDataUrl();
      const result = await requestExamQuestionCropDraft({
        aiModel: aiSettings.examAnalysisModel,
        aiProvider: aiSettings.examAnalysisProvider,
        imageDataUrl,
        pageCount: selectedQuestionSourceIsPdf ? pdfPageCount || 1 : 1,
        pageNumber: cropViewerPageNumber,
        questionNumbers: pageItems.map((item) => item.number),
        totalQuestions: activeQuestionItems.length
      });
      const visionBoxes = Array.isArray(result?.boxes) ? result.boxes : [];
      if (!visionBoxes.length) throw new Error("AI가 문항 영역을 찾지 못했습니다.");
      const visionNumbers = new Set(visionBoxes.map((box) => Number(box.questionNumber)));
      const mergedBoxes = [
        ...visionBoxes,
        ...fallbackBoxes.filter((box) => !visionNumbers.has(Number(box.questionNumber)))
      ];
      applyQuestionCropDraftBoxes(
        mergedBoxes,
        `AI 크롭 초안 적용 완료 · vision ${visionBoxes.length}개${mergedBoxes.length > visionBoxes.length ? ` · 자동 보완 ${mergedBoxes.length - visionBoxes.length}개` : ""}`
      );
    } catch (error) {
      const applied = applyQuestionCropDraftBoxes(
        fallbackBoxes,
        `AI vision 실패 · 자동 배치 초안을 적용했습니다. (${error.message})`
      );
      if (!applied) {
        setCropDraftStatus(`AI vision 실패 · 자동 배치할 문항을 찾지 못했습니다. (${error.message})`);
      }
    } finally {
      setIsQuestionCropDrafting(false);
    }
  }

  async function handleDraftAllQuestionCrops() {
    if (!selectedQuestionSourceIsPdf || !selectedQuestionSourceUrl) {
      setCropDraftStatus("전체 페이지 AI 크롭은 PDF 원본에서만 사용할 수 있습니다.");
      return;
    }
    if (!activeQuestionItems.length) {
      setCropDraftStatus("문항 카드를 먼저 만든 뒤 전체 페이지 크롭 초안을 생성할 수 있습니다.");
      return;
    }
    setIsQuestionCropDrafting(true);
    setCropDraftStatus("전체 페이지 AI 크롭 초안을 준비하는 중입니다...");
    let loadingTask = null;
    try {
      const pdfjsLib = await loadPdfJs();
      loadingTask = pdfjsLib.getDocument({ url: selectedQuestionSourceUrl });
      const pdfDocument = await loadingTask.promise;
      const totalPages = Math.max(1, Number(pdfDocument.numPages) || 1);
      setPdfPageCount(totalPages);
      const allBoxes = [];
      const failedPages = [];
      let visionCount = 0;
      let fallbackCount = 0;

      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
        const pageItems = getQuestionItemsForCropPage(pageNumber, {
          fallbackToSelected: false,
          forceHeuristicDistribution: true,
          pageCount: totalPages
        });
        if (!pageItems.length) continue;
        const fallbackBoxes = buildPageFallbackCropBoxes(pageItems, pageNumber);
        setCropDraftStatus(`전체 페이지 AI 크롭 초안 · ${pageNumber}/${totalPages}페이지 처리 중입니다...`);
        try {
          const imageDataUrl = await renderPdfPageToVisionImageDataUrl(pdfDocument, pageNumber);
          const result = await requestExamQuestionCropDraft({
            aiModel: aiSettings.examAnalysisModel,
            aiProvider: aiSettings.examAnalysisProvider,
            imageDataUrl,
            pageCount: totalPages,
            pageNumber,
            questionNumbers: pageItems.map((item) => item.number),
            totalQuestions: activeQuestionItems.length
          });
          const visionBoxes = Array.isArray(result?.boxes)
            ? result.boxes.map((box) => ({ ...box, page: pageNumber }))
            : [];
          if (!visionBoxes.length) throw new Error("AI가 문항 영역을 찾지 못했습니다.");
          const visionNumbers = new Set(visionBoxes.map((box) => Number(box.questionNumber)));
          const supplementBoxes = fallbackBoxes.filter((box) => !visionNumbers.has(Number(box.questionNumber)));
          allBoxes.push(...visionBoxes, ...supplementBoxes);
          visionCount += visionBoxes.length;
          fallbackCount += supplementBoxes.length;
        } catch (error) {
          failedPages.push(`${pageNumber}p`);
          allBoxes.push(...fallbackBoxes);
          fallbackCount += fallbackBoxes.length;
        }
      }

      if (!allBoxes.length) {
        setCropDraftStatus("전체 페이지에 적용할 문항 크롭 초안을 만들지 못했습니다.");
        return;
      }

      const applied = applyQuestionCropDraftBoxes(
        allBoxes,
        `전체 페이지 AI 크롭 초안 적용 완료 · ${totalPages}페이지 · vision ${visionCount}개 · 자동 보완 ${fallbackCount}개${failedPages.length ? ` · 보완 페이지 ${failedPages.join(", ")}` : ""}`
      );
      if (applied) setCropViewerPage(1);
    } catch (error) {
      setCropDraftStatus(`전체 페이지 AI 크롭 초안 생성 실패 · ${error.message}`);
    } finally {
      loadingTask?.destroy?.();
      setIsQuestionCropDrafting(false);
    }
  }

  function openAnalysisWorkspace(analysisId = selectedAnalysis?.examAnalysisId) {
    if (!analysisId) return;
    setSelectedAnalysisId(analysisId);
    setIsAnalysisWorkspaceOpen(true);
  }

  function createAnalysisInFolder(folder = selectedFolder) {
    if (!folder) {
      openCreateExamFolder();
      return;
    }
    const seed = folder
      ? {
          analysisFolderId: folder.folderId,
          folderId: folder.folderId,
          schoolName: folder.schoolName,
          grade: folder.grade,
          subject: folder.subject,
          examCycle: folder.examCycle,
          examName: folder.examName
        }
      : {};
    const nextAnalysis = createDefaultExamAnalysis(seed);
    onAddAnalysis(nextAnalysis);
    setSelectedSchoolId(createExamAnalysisSchoolId({ schoolName: nextAnalysis.schoolName }));
    setSelectedGradeKey(nextAnalysis.grade || "학년 미입력");
    setSelectedFolderId(nextAnalysis.analysisFolderId);
    setSelectedAnalysisId(nextAnalysis.examAnalysisId);
    setIsAnalysisWorkspaceOpen(true);
  }

  function openCreateFolder() {
    setFolderDraft(createExamAnalysisSchoolDraft({ schoolName: "" }));
    setFolderModalMode("schoolCreate");
  }

  function openEditSchool(school = selectedSchool) {
    if (!school) return;
    setFolderDraft(createExamAnalysisSchoolDraft({ ...school, previousSchoolName: school.schoolName }));
    setFolderModalMode("schoolEdit");
  }

  function openCreateExamFolder(school = selectedSchool) {
    if (!school) {
      openCreateFolder();
      return;
    }
    setFolderDraft({
      ...createExamAnalysisFolderDraft({
        schoolName: school.schoolName,
        grade: selectedGrade?.grade && selectedGrade.grade !== "학년 미입력" ? selectedGrade.grade : "고1",
        subject: selectedFolder?.subject || selectedAnalysis?.subject || "수학",
        examCycle: currentExamCycle,
        examName: examCycleLabel(currentExamCycle)
      }),
      folderId: "",
      folderType: "exam"
    });
    setFolderModalMode("examCreate");
  }

  function openEditFolder(folder = selectedFolder) {
    if (!folder) return;
    setFolderDraft(createExamAnalysisFolderDraft({ ...folder, folderType: "exam" }));
    setFolderModalMode("examEdit");
  }

  function persistFolderDraft() {
    if (!folderDraft || !onSaveAnalysisFolder) return;
    const isSchoolDraft = folderDraft.folderType === "school" || folderModalMode.startsWith("school");
    const savedFolder = onSaveAnalysisFolder(isSchoolDraft
      ? {
          ...folderDraft,
          folderType: "school",
          folderId: folderDraft.folderId || createExamAnalysisSchoolId(folderDraft)
        }
      : {
          ...folderDraft,
          folderType: "exam",
          folderId: folderDraft.folderId || createExamAnalysisFolderId(folderDraft)
        });
    if (isSchoolDraft) {
      const normalizedSchool = normalizeExamAnalysisSchoolFolder(savedFolder || folderDraft);
      setSelectedSchoolId(normalizedSchool.folderId);
      return normalizedSchool;
    }
    const normalizedFolder = normalizeExamAnalysisFolder(savedFolder || folderDraft);
    setSelectedSchoolId(createExamAnalysisSchoolId({ schoolName: normalizedFolder.schoolName }));
    setSelectedGradeKey(normalizedFolder.grade || "학년 미입력");
    setSelectedFolderId(normalizedFolder.folderId);
    return normalizedFolder;
  }

  function saveFolderDraft(event) {
    event.preventDefault();
    const normalizedFolder = persistFolderDraft();
    if (!normalizedFolder) return;
    setFolderModalMode("");
    setFolderDraft(null);
  }

  function deleteFolder(folder = selectedFolder) {
    if (!folder || !onDeleteAnalysisFolder) return;
    const label = folder.folderType === "school" ? folder.schoolName : getExamAnalysisFolderTitle(folder);
    const countText = folder.analyses.length ? ` 안의 분석지 ${folder.analyses.length}건도 함께 삭제됩니다.` : " 빈 폴더만 삭제됩니다.";
    if (!window.confirm(`${label} 폴더를 삭제할까요?${countText}`)) return;
    onDeleteAnalysisFolder(folder);
  }

  function deleteSchool(school = selectedSchool) {
    if (!school || !onDeleteAnalysisFolder) return;
    const countText = school.analysisCount ? ` 아래 분석지 ${school.analysisCount}건도 함께 삭제됩니다.` : " 빈 학교 폴더만 삭제됩니다.";
    if (!window.confirm(`${school.schoolName} 학교 폴더를 삭제할까요?${countText}`)) return;
    onDeleteAnalysisFolder(school);
  }

  function deleteAnalysis(analysis) {
    if (!analysis || !onDeleteAnalysis) return;
    const label = [analysis.schoolName, analysis.grade, analysis.examName].filter(Boolean).join(" · ") || "이 분석 문서";
    if (!window.confirm(`${label}을 삭제할까요? 삭제 후 app_state 저장에 반영됩니다.`)) return;
    if (analysis.examAnalysisId === selectedAnalysisId) setIsAnalysisWorkspaceOpen(false);
    onDeleteAnalysis(analysis.examAnalysisId);
  }

  function moveSelectedAnalysisToFolder(folderId) {
    if (!selectedAnalysis) return;
    const folder = analysisFolderList.find((item) => item.folderId === folderId);
    if (!folder) return;
    const movedAnalysis = applyExamAnalysisFolderToAnalysis(selectedAnalysis, folder);
    [
      "analysisFolderId",
      "schoolName",
      "grade",
      "subject",
      "examCycle",
      "examName"
    ].forEach((field) => onUpdateAnalysis(selectedAnalysis.examAnalysisId, field, movedAnalysis[field] ?? ""));
    setSelectedSchoolId(createExamAnalysisSchoolId({ schoolName: folder.schoolName }));
    setSelectedGradeKey(folder.grade || "학년 미입력");
    setSelectedFolderId(folder.folderId);
  }

  async function attachSourceFiles(fileList) {
    if (!selectedAnalysis) return;
    const files = Array.from(fileList ?? []).filter((file) =>
      file?.type === "application/pdf" ||
      file?.type?.startsWith("image/") ||
      /\.(pdf|png|jpe?g|webp)$/i.test(file?.name || "")
    );
    if (!files.length) return;
    update("sourceUploadStatus", files.length > 1
      ? `${files.length}개 원본을 Supabase Storage에 업로드하는 중입니다...`
      : "원본을 Supabase Storage에 업로드하는 중입니다...");
    try {
      const uploadedFiles = [];
      for (const file of files) {
        uploadedFiles.push(await uploadExamAnalysisSourceFile(file, selectedAnalysis));
      }
      const firstUploadedFile = uploadedFiles[0];
      const openUrl = getExamAnalysisSourceOpenUrl(firstUploadedFile);
      const cleanRawExamText = removeFailedAttachmentBlocks(selectedAnalysis.rawExamText);
      const inferredMetadata = inferExamAnalysisMetadataFromFileName(firstUploadedFile.fileName);
      const extractionNotes = uploadedFiles.map((uploadedFile) => uploadedFile.extractedText
        ? `[PDF 텍스트 추출] ${uploadedFile.fileName}\n${uploadedFile.extractedText}`
        : isImageExamAnalysisSource(uploadedFile)
          ? `[문항 이미지 원본] ${uploadedFile.fileName}\n문항 검수 단계에서 이 이미지를 띄우고 수동 크롭 영역을 지정할 수 있습니다.`
          : `[PDF 텍스트 추출 없음] ${uploadedFile.fileName}\n스캔 이미지형 PDF일 수 있습니다. 문항 검수 단계에서 PDF 페이지를 렌더링해 수동 크롭하고, OCR 텍스트는 아래에 직접 붙여 넣어 주세요.`);
      Object.entries(inferredMetadata).forEach(([field, value]) => {
        if (value && !String(selectedAnalysis[field] ?? "").trim()) {
          onUpdateAnalysis(selectedAnalysis.examAnalysisId, field, value);
        }
      });
      onUpdateAnalysis(selectedAnalysis.examAnalysisId, "sourceFiles", [
        ...uploadedFiles,
        ...(Array.isArray(selectedAnalysis.sourceFiles) ? selectedAnalysis.sourceFiles : [])
      ]);
      onUpdateAnalysis(selectedAnalysis.examAnalysisId, "sourceFileUrl", openUrl || firstUploadedFile.storagePath || firstUploadedFile.fileName);
      onUpdateAnalysis(
        selectedAnalysis.examAnalysisId,
        "rawExamText",
        [cleanRawExamText, ...extractionNotes].filter(Boolean).join("\n\n")
      );
      onUpdateAnalysis(
        selectedAnalysis.examAnalysisId,
        "sourceUploadStatus",
        `${uploadedFiles.length}개 업로드 완료 · ${uploadedFiles.filter((file) => file.extractedText).length}개 PDF 텍스트 추출 · ${uploadedFiles.filter(isPdfExamAnalysisSource).length}개 PDF 렌더 가능 · ${uploadedFiles.filter(isImageExamAnalysisSource).length}개 이미지 크롭 가능`
      );
    } catch (error) {
      onUpdateAnalysis(selectedAnalysis.examAnalysisId, "sourceUploadStatus", `업로드 실패 · ${error.message}`);
    }
  }

  function handleSourceFileDrop(event) {
    event.preventDefault();
    attachSourceFiles(event.dataTransfer?.files);
  }

  function handleSourceFileSelect(event) {
    attachSourceFiles(event.target.files);
    event.target.value = "";
  }

  return (
    <section className="examAnalysisPage">
      <header className="pageTop examAnalysisTop">
        <div>
          <p className="eyebrow">EXAM ANALYSIS</p>
          <h1>시험분석</h1>
          <p className="muted">기출 PDF 1개 또는 여러 개를 구조화하고, 강사 인사이트를 더해 강사용·학생용·블로그·인스타 산출물을 만듭니다.</p>
        </div>
        <div className="analysisTopActions">
          {isAnalysisWorkspaceOpen ? (
            <button className="softButton" onClick={() => setIsAnalysisWorkspaceOpen(false)} type="button">← 분석 목록</button>
          ) : (
            <>
              <button className="softButton" onClick={openCreateFolder} type="button">+ 학교</button>
              <button className="softButton" onClick={() => openCreateExamFolder()} type="button">+ 고사</button>
              <button className="primaryButton" onClick={() => createAnalysisInFolder()} type="button">+ 분석 문서</button>
            </>
          )}
        </div>
      </header>

      <div className={isAnalysisWorkspaceOpen ? "examAnalysisLayout workspaceMode" : "examAnalysisLayout libraryMode"}>
        {!isAnalysisWorkspaceOpen ? (
          <section className="panel analysisLibraryPanel">
            <div className="analysisLibraryHeader">
              <div>
                <h2>분석 목록</h2>
                <p className="muted">학교를 고르고, 학년과 고사를 거쳐 누적된 분석지를 엽니다.</p>
              </div>
              <span className="countBadge">{analysisSchoolTree.length}학교 · {analyses.length}건</span>
            </div>
            <div className="analysisLibraryActions">
              <div className="analysisActionGroup">
                <button className="primaryButton" onClick={openCreateFolder} type="button">+ 학교</button>
                <button className="softButton" disabled={!selectedSchool} onClick={() => openCreateExamFolder()} type="button">+ 고사</button>
                <button className="softButton" disabled={!selectedFolder} onClick={() => createAnalysisInFolder()} type="button">+ 분석지</button>
              </div>
              <div className="analysisActionGroup">
                <button className="softButton" disabled={!selectedSchool} onClick={() => openEditSchool()} type="button">학교 수정</button>
                <button className="softButton danger" disabled={!selectedSchool} onClick={() => deleteSchool()} type="button">학교 삭제</button>
                <button className="softButton" disabled={!selectedFolder} onClick={() => openEditFolder()} type="button">고사 수정</button>
                <button className="softButton danger" disabled={!selectedFolder} onClick={() => deleteFolder()} type="button">고사 삭제</button>
                <button className="softButton" disabled={!selectedAnalysis} onClick={() => openAnalysisWorkspace()} type="button">분석 열기</button>
                <button className="softButton danger" disabled={!selectedAnalysis} onClick={() => deleteAnalysis(selectedAnalysis)} type="button">분석 삭제</button>
              </div>
            </div>
            <div className="analysisLibraryGrid">
              <article className="analysisTreeColumn">
                <div className="analysisTreeColumnHeader">
                  <strong>학교</strong>
                  <span>{analysisSchoolTree.length}개</span>
                </div>
                <div className="analysisTreeList">
                  {analysisSchoolTree.length ? analysisSchoolTree.map((school) => (
                    <button
                      className={selectedSchool?.folderId === school.folderId ? "analysisTreeItem active" : "analysisTreeItem"}
                      key={school.folderId}
                      onClick={() => setSelectedSchoolId(school.folderId)}
                      type="button"
                    >
                      <strong>{school.schoolName}</strong>
                      <span>{school.grades.length}학년 · {school.examCount}고사 · {school.analysisCount}건</span>
                    </button>
                  )) : (
                    <div className="analysisTreeEmpty">학교를 먼저 만들어 주세요.</div>
                  )}
                </div>
              </article>

              <article className="analysisTreeColumn">
                <div className="analysisTreeColumnHeader">
                  <strong>학년</strong>
                  <span>{selectedSchool?.grades.length ?? 0}개</span>
                </div>
                <div className="analysisTreeList">
                  {selectedSchool?.grades.length ? selectedSchool.grades.map((grade) => (
                    <button
                      className={selectedGrade?.grade === grade.grade ? "analysisTreeItem active" : "analysisTreeItem"}
                      key={grade.grade}
                      onClick={() => setSelectedGradeKey(grade.grade)}
                      type="button"
                    >
                      <strong>{grade.grade}</strong>
                      <span>{grade.exams.length}고사 · {grade.analysisCount}건</span>
                    </button>
                  )) : (
                    <div className="analysisTreeEmpty">선택한 학교에 고사를 추가해 주세요.</div>
                  )}
                </div>
              </article>

              <article className="analysisTreeColumn">
                <div className="analysisTreeColumnHeader">
                  <strong>고사</strong>
                  <span>{selectedGrade?.exams.length ?? 0}개</span>
                </div>
                <div className="analysisTreeList">
                  {selectedGrade?.exams.length ? selectedGrade.exams.map((folder) => (
                    <button
                      className={selectedFolder?.folderId === folder.folderId ? "analysisTreeItem active" : "analysisTreeItem"}
                      key={folder.folderId}
                      onClick={() => setSelectedFolderId(folder.folderId)}
                      type="button"
                    >
                      <strong>{folder.examName || examCycleLabel(folder.examCycle) || "고사 미입력"}</strong>
                      <span>{folder.subject || "과목 미입력"} · 분석지 {folder.analyses.length}건</span>
                    </button>
                  )) : (
                    <div className="analysisTreeEmpty">1학기 중간/기말, 2학기 중간/기말 중 고사를 추가해 주세요.</div>
                  )}
                </div>
              </article>

              <article className="analysisTreeColumn analysisTreeColumnWide">
                <div className="analysisTreeColumnHeader">
                  <strong>분석지</strong>
                  <span>{visibleAnalyses.length}건</span>
                </div>
                <div className="analysisTreeList">
                  {visibleAnalyses.length ? visibleAnalyses.map((analysis) => (
                    <button
                      className={selectedAnalysis?.examAnalysisId === analysis.examAnalysisId ? "analysisTreeItem active" : "analysisTreeItem"}
                      key={analysis.examAnalysisId}
                      onClick={() => setSelectedAnalysisId(analysis.examAnalysisId)}
                      onDoubleClick={() => openAnalysisWorkspace(analysis.examAnalysisId)}
                      type="button"
                    >
                      <strong>{analysis.examName || "새 분석"}</strong>
                      <span>{[analysis.subject, analysis.examDate].filter(Boolean).join(" · ") || "기본정보 미입력"}</span>
                      <small>{getExamAnalysisStatusMeta(normalizeExamAnalysisForDisplay(analysis)).label} · {stageAlias[analysis.pipelineStage] ?? analysis.pipelineStage}</small>
                    </button>
                  )) : (
                    <div className="analysisTreeEmpty">선택한 고사에 아직 분석지가 없습니다.</div>
                  )}
                </div>
              </article>
            </div>
          </section>
        ) : null}

        {isAnalysisWorkspaceOpen && selectedAnalysis ? (
          <section className="analysisWorkspace">
            <section className="panel analysisOverviewPanel">
              <div className="sectionHeader slim">
                <div>
                  <h2>시험 기본정보</h2>
                  <p className="muted">시험관리 DB와 이어지는 고사 단위 메타데이터입니다.</p>
                </div>
                <span className={`analysisStatusBadge ${statusMeta.tone}`}>{statusMeta.label}</span>
              </div>
              <div className="analysisStatusStrip">
                <strong>{statusMeta.label}</strong>
                <span>{statusMeta.detail}</span>
              </div>
              {selectedAnalysis.aiStatus === "분석 중" ? (
                <div className={`inlineNotice analysisRunNotice ${analysisApiCheck.status}`}>
                  <strong>경과 {formatElapsedSeconds(analysisElapsedSeconds)}</strong>
                  <span>{analysisWaitMessage}</span>
                  {analysisApiCheck.message ? <small>{analysisApiCheck.message}</small> : null}
                </div>
              ) : null}
              {examPrepContext ? (
                <div className="analysisExamPrepContext">
                  <strong>시험관리 데이터 반영</strong>
                  <span>특이사항: {examPrepContext.specialNote || "미입력"}</span>
                  <span>시험 범위: {examPrepContext.scope || "미입력"}</span>
                  <span>부교재: {examPrepContext.subTextbook || "미입력"}</span>
                </div>
              ) : (
                <div className="analysisExamPrepContext muted">
                  <strong>시험관리 연결 없음</strong>
                  <span>이 분석지는 학교·학년·과목 메타데이터와 업로드 원본만으로 진행합니다.</span>
                </div>
              )}
              <div className="fieldGrid">
                <div className="linkedExamInfoBox">
                  <span>연결된 시험정보</span>
                  <strong>
                    {linkedExamPrepRow
                      ? `${linkedExamPrepRow.schoolName} · ${linkedExamPrepRow.grade} · ${linkedExamPrepRow.subject}`
                      : "직접 입력"}
                  </strong>
                </div>
                <label>
                  저장 고사
                  <select
                    value={selectedAnalysis.analysisFolderId || getExamAnalysisFolderId(selectedAnalysis)}
                    onChange={(event) => moveSelectedAnalysisToFolder(event.target.value)}
                  >
                    {analysisFolderList.map((folder) => (
                      <option key={folder.folderId} value={folder.folderId}>
                        {getExamAnalysisFolderTitle(folder)}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  학교
                  <input value={selectedAnalysis.schoolName} onChange={(event) => update("schoolName", event.target.value)} />
                </label>
                <label>
                  학년
                  <input value={selectedAnalysis.grade} onChange={(event) => update("grade", event.target.value)} />
                </label>
                <label>
                  과목
                  <input value={selectedAnalysis.subject} onChange={(event) => update("subject", event.target.value)} />
                </label>
                <label>
                  시험명
                  <input value={selectedAnalysis.examName} onChange={(event) => update("examName", event.target.value)} />
                </label>
                <label>
                  시험일
                  <input type="date" value={selectedAnalysis.examDate} onChange={(event) => update("examDate", event.target.value)} />
                </label>
              </div>
              {selectedAnalysis.aiError ? <div className="apiErrorBox">{selectedAnalysis.aiError}</div> : null}
            </section>

            <section className="analysisPipeline">
              {pipelineStages.map((stage, index) => (
                <button
                  className={currentStage === stage ? "pipelineStep active" : "pipelineStep"}
                  key={stage}
                  onClick={() => update("pipelineStage", stage)}
                  type="button"
                >
                  <b>{index + 1}</b>
                  <span>{stage}</span>
                </button>
              ))}
            </section>

            {currentStage === "원본 입력" ? (
            <section className="panel analysisSourcePanel">
                <div className="sectionHeader slim">
                  <div>
                    <h2>원본 입력</h2>
                    <p className="muted">PDF와 이미지 원본을 업로드한 뒤 문항별로 페이지/영역을 잘라 코멘트를 붙입니다.</p>
                  </div>
                </div>
                <div
                  className="sourceDropZone"
                  onClick={() => sourceFileInputRef.current?.click()}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleSourceFileDrop}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      sourceFileInputRef.current?.click();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <strong>원본 업로드</strong>
                  <span>시험지 PDF, 3개년 기출, 문항 크롭용 이미지 원본을 함께 올릴 수 있습니다.</span>
                  <span className="sourceDropAction">파일 선택</span>
                  <input
                    accept="application/pdf,image/*"
                    className="hiddenFileInput"
                    multiple
                    onChange={handleSourceFileSelect}
                    ref={sourceFileInputRef}
                    type="file"
                  />
                </div>
                <small className={
                  selectedAnalysis.sourceUploadStatus
                    ? String(selectedAnalysis.sourceUploadStatus).includes("실패")
                      ? "sourceUploadStatus failed"
                      : "sourceUploadStatus"
                    : "sourceUploadStatus ready"
                }>
                  {selectedAnalysis.sourceUploadStatus || "대기 · 여기를 클릭하거나 PDF/이미지를 드롭하면 Storage 저장과 텍스트 추출을 시작합니다."}
                </small>
                {Array.isArray(selectedAnalysis.sourceFiles) && selectedAnalysis.sourceFiles.length ? (
                  <div className="sourceFileList">
                    {selectedAnalysis.sourceFiles.map((file, index) => (
                      <a
                        href={getExamAnalysisSourceOpenUrl(file)}
                        key={`${file.storagePath || file.fileName}_${index}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <strong>{file.fileName}</strong>
                        <span>{file.extractionStatus || "업로드됨"} · {Math.round((file.fileSize ?? 0) / 1024)}KB</span>
                      </a>
                    ))}
                  </div>
                ) : null}

                <div className="sourcePrimaryAction">
                  <div>
                    <strong>다음 단계</strong>
                    <span>PDF 업로드 후 AI 분석을 시작하고, 분석 검토 단계에서 강사 인사이트를 반드시 추가합니다.</span>
                  </div>
                  <button
                    className="primaryButton"
                    disabled={selectedAnalysis.aiStatus === "분석 중"}
                    onClick={() => onRunAnalysis({ ...selectedAnalysis, examPrepContext }, aiSettings)}
                    type="button"
                  >
                    {selectedAnalysis.aiStatus === "분석 중" ? "분석 중..." : "AI 분석 시작"}
                  </button>
                </div>

            </section>
            ) : null}

            {currentStage === "문항 검수" ? (
            <section className="analysisQuestionStage">
              <article className="panel analysisQuestionSetupPanel">
                <div>
                  <p className="eyebrow">QUESTION REVIEW</p>
                  <h2>문항분석표 검수</h2>
                  <p className="muted">AI가 첫 장 메타데이터와 문항카드 초안을 읽고, 사람은 문항별 단원·난이도·배점·태그를 확인합니다.</p>
                </div>
                {questionComposition ? (
                  <div className="analysisReviewSummary questionCompositionReview">
                    <div>
                      <strong>첫 장 문항 메타데이터 초안</strong>
                      <p>{formatExamQuestionComposition(questionComposition)}</p>
                      {selectedQuestionSourceFile?.fileName ? <small>현재 원본: {selectedQuestionSourceFile.fileName}</small> : null}
                      {questionComposition.evidence ? <small>근거: {questionComposition.evidence}</small> : null}
                    </div>
                    <button className="softButton" onClick={fillQuestionCountFromAiComposition} type="button">메타데이터 반영</button>
                  </div>
                ) : (
                  <div className="analysisReviewSummary questionCompositionReview">
                    <div>
                      <strong>첫 장 문항 메타데이터 없음</strong>
                      <p>AI 분석 시작 후 첫 페이지 문항 구성표를 기준으로 문항 수, 선택/서술 구성, 배점을 확인합니다.</p>
                    </div>
                  </div>
                )}
                <div className="analysisQuestionSetupActions">
                  <label>
                    첫 장 기준 문항 수
                    <input
                      min="1"
                      max="80"
                      type="number"
                      value={questionCountDraft}
                      onChange={(event) => setQuestionCountDraft(event.target.value)}
                    />
                  </label>
                  <button className="primaryButton" onClick={() => applyQuestionCount()} type="button">확인 후 문항카드 생성</button>
                  <button
                    className="softButton"
                    disabled={selectedAnalysis.aiStatus === "분석 중"}
                    onClick={runAiForActiveQuestionSource}
                    type="button"
                  >
                    {selectedAnalysis.aiStatus === "분석 중" ? "AI 채우는 중..." : "AI 문항정보 채우기"}
                  </button>
                  <button className="softButton" onClick={addQuestionItem} type="button">문항 추가</button>
                  <button className="softButton danger" disabled={!selectedQuestion} onClick={deleteSelectedQuestion} type="button">선택 문항 삭제</button>
                  <button className="softButton" onClick={() => questionSourceInputRef.current?.click()} type="button">PDF·이미지 원본 추가</button>
                  <input
                    accept="application/pdf,image/*"
                    className="hiddenFileInput"
                    multiple
                    onChange={handleSourceFileSelect}
                    ref={questionSourceInputRef}
                    type="file"
                  />
                </div>
              </article>

              <div className="analysisQuestionWorkspace">
                <article className="panel analysisQuestionSourcePanel">
                  <div className="sectionHeader slim">
                    <div>
                      <h2>원문항 화면</h2>
                      <p className="muted">PDF/이미지 원본 위에서 드래그하면 선택 문항의 크롭 영역이 저장됩니다.</p>
                    </div>
                    {selectedQuestionCropBox ? <span className="countBadge">크롭 저장됨</span> : <span className="countBadge mutedBadge">크롭 대기</span>}
                  </div>

                  {renderSourceFiles.length ? (
                    <label className="wideLabel">
                      현재 시험지/연도
                      <select
                        value={resolvedQuestionSourceId}
                        onChange={(event) => assignSourceToSelectedQuestion(event.target.value)}
                      >
                        {renderSourceFileOptions.map(({ file, sourceId }, index) => {
                          return (
                            <option key={sourceId} value={sourceId}>
                              {isPdfExamAnalysisSource(file) ? "PDF · " : "이미지 · "}{file.fileName || `원본 ${index + 1}`}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  ) : null}

                  {selectedQuestionSourceIsPdf ? (
                    <div className="analysisPdfControls">
                      <div aria-label="PDF 페이지 넘기기" className="pdfPageStepper">
                        <button
                          aria-label="이전 페이지"
                          disabled={cropViewerPageNumber <= 1}
                          onClick={() => moveCropViewerPage(-1)}
                          title="이전 페이지"
                          type="button"
                        >
                          ‹
                        </button>
                        <strong>{cropViewerPageNumber} / {pdfPageCount || "?"}</strong>
                        <button
                          aria-label="다음 페이지"
                          disabled={Boolean(pdfPageCount) && cropViewerPageNumber >= pdfPageCount}
                          onClick={() => moveCropViewerPage(1)}
                          title="다음 페이지"
                          type="button"
                        >
                          ›
                        </button>
                      </div>
                      <label>
                        PDF 페이지
                        <input
                          min="1"
                          max={pdfPageCount || 999}
                          type="number"
                          value={cropViewerPageNumber}
                          onChange={(event) => setCropViewerPageClamped(event.target.value)}
                        />
                      </label>
                      <label>
                        확대
                        <select value={pdfScale} onChange={(event) => setPdfScale(Number(event.target.value) || 1.25)}>
                          <option value="1">100%</option>
                          <option value="1.25">125%</option>
                          <option value="1.5">150%</option>
                          <option value="1.75">175%</option>
                          <option value="2">200%</option>
                        </select>
                      </label>
                      <button
                        className="softButton pdfPageApplyButton"
                        disabled={!selectedQuestion}
                        onClick={applyCropViewerPageToSelectedQuestion}
                        type="button"
                      >
                        현재 페이지를 선택 문항에 저장
                      </button>
                      <span>{pdfRenderStatus || "PDF 페이지 렌더링 대기"}</span>
                    </div>
                  ) : null}

                  {selectedQuestionSourceUrl ? (
                    <div className="questionCropCanvas">
                      <div
                        className="questionCropSurface"
                        onPointerCancel={commitCropDraft}
                        onPointerDown={handleCropPointerDown}
                        onPointerMove={handleCropPointerMove}
                        onPointerUp={commitCropDraft}
                        ref={cropSurfaceRef}
                      >
                        {selectedQuestionSourceIsPdf ? (
                          <canvas aria-label="PDF 시험지 페이지" ref={pdfCanvasRef} />
                        ) : selectedQuestionSourceIsImage ? (
                          <img alt="시험지 원본" crossOrigin="anonymous" draggable={false} src={selectedQuestionSourceUrl} />
                        ) : null}
                        {selectedQuestionCropBox ? (
                          <span
                            className={cropDraft ? "questionCropBox drafting" : "questionCropBox"}
                            style={{
                              left: `${selectedQuestionCropBox.x}%`,
                              top: `${selectedQuestionCropBox.y}%`,
                              width: `${selectedQuestionCropBox.width}%`,
                              height: `${selectedQuestionCropBox.height}%`
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <div className="analysisQuestionEmpty">
                      PDF 또는 이미지 원본을 업로드하면 이 영역에서 문항별 크롭을 지정할 수 있습니다.
                    </div>
                  )}

                  <div className="analysisQuestionCropActions">
                    <span>{selectedQuestion ? `${selectedQuestion.number}번 문항 영역` : "문항을 선택하세요."}</span>
                    <button
                      className="softButton"
                      disabled={!selectedQuestionSourceUrl || !activeQuestionItems.length || isQuestionCropDrafting}
                      onClick={handleDraftQuestionCrops}
                      type="button"
                    >
                      {isQuestionCropDrafting ? "AI 크롭 중..." : "현재 페이지 AI 크롭"}
                    </button>
                    <button
                      className="softButton"
                      disabled={!selectedQuestionSourceIsPdf || !selectedQuestionSourceUrl || !activeQuestionItems.length || isQuestionCropDrafting}
                      onClick={handleDraftAllQuestionCrops}
                      type="button"
                    >
                      전체 페이지 AI 크롭
                    </button>
                    <button className="softButton" disabled={!selectedQuestionCropBox} onClick={clearSelectedQuestionCrop} type="button">크롭 지우기</button>
                    {selectedQuestionOpenUrl ? (
                      <a className="softButton linkButton" href={selectedQuestionOpenUrl} rel="noreferrer" target="_blank">원본 열기</a>
                    ) : null}
                  </div>
                  {cropDraftStatus ? <div className="questionCropStatus">{cropDraftStatus}</div> : null}
                </article>

                <article className="panel analysisQuestionEditorPanel">
                  <div className="sectionHeader slim">
                    <div>
                      <h2>문항별 인사이트</h2>
                      <p className="muted">현재 선택한 시험지/연도의 문항별 메모입니다. 시험지 전체 총평은 분석 검토의 인사이트에서 입력합니다.</p>
                    </div>
                    <div className="questionCountBadges">
                      <span className="countBadge">현재 원본 {activeQuestionItems.length}/{activeQuestionTargetCount}문항</span>
                    </div>
                  </div>

                  {activeQuestionItems.length ? (
                    <div className="analysisQuestionList">
                      {activeQuestionItems.map((item) => {
                        const itemInsightRecommended = isExamQuestionInsightRecommended(item);
                        const itemHasDetailedInsight = hasExamQuestionDetailedInsight(item);
                        return (
                          <button
                            className={[
                              selectedQuestion?.questionId === item.questionId ? "analysisQuestionListItem active" : "analysisQuestionListItem",
                              itemInsightRecommended ? "keyQuestion" : ""
                            ].filter(Boolean).join(" ")}
                            key={item.questionId}
                            onClick={() => setSelectedQuestionId(item.questionId)}
                            type="button"
                          >
                            <strong>{item.number}번</strong>
                            <span>{[item.score && `${item.score}점`, item.unit || "단원 미입력", item.role].filter(Boolean).join(" · ")}</span>
                            <small>{itemHasDetailedInsight ? "상세 있음" : itemInsightRecommended ? "상세 권장" : "기본정보"} · {item.cropBox ? "크롭 있음" : "크롭 없음"} · {getSsenPrimaryTypeText(item.ssenTypeTags) || "쎈유형 없음"} · {item.tags?.[0] || "태그 없음"}</small>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="analysisQuestionEmpty">현재 시험지/연도의 문항 카드가 없습니다. 문항 수를 입력하고 카드를 만들어 주세요.</div>
                  )}

                  {selectedQuestion ? (
                    <div className="analysisQuestionForm">
                      <div className="fieldGrid three">
                        <label>
                          문항
                          <input
                            type="number"
                            value={selectedQuestion.number}
                            onChange={(event) => updateSelectedQuestion("number", Number(event.target.value) || "")}
                          />
                        </label>
                        <label>
                          페이지
                          <input
                            type="number"
                            value={selectedQuestion.page}
                            onChange={(event) => updateSelectedQuestion("page", Number(event.target.value) || "")}
                          />
                        </label>
                        <label>
                          배점
                          <input value={selectedQuestion.score} onChange={(event) => updateSelectedQuestion("score", event.target.value)} placeholder="예: 5" />
                        </label>
                        <label>
                          문항 형식
                          <select value={selectedQuestion.questionType} onChange={(event) => updateSelectedQuestion("questionType", event.target.value)}>
                            {examQuestionTypeOptions.map((option) => <option key={option}>{option}</option>)}
                          </select>
                        </label>
                        <label>
                          난이도
                          <select value={selectedQuestion.difficulty} onChange={(event) => updateSelectedQuestion("difficulty", event.target.value)}>
                            {examQuestionDifficultyOptions.map((option) => <option key={option}>{option}</option>)}
                          </select>
                        </label>
                        <label>
                          역할
                          <select value={selectedQuestion.role} onChange={(event) => updateSelectedQuestion("role", event.target.value)}>
                            {examQuestionRoleOptions.map((option) => <option key={option}>{option}</option>)}
                          </select>
                        </label>
                        <label>
                          단원
                          <input value={selectedQuestion.unit} onChange={(event) => updateSelectedQuestion("unit", event.target.value)} placeholder="예: 이차함수의 최대최소" />
                        </label>
                        <label>
                          쎈 유형 검색
                          <input
                            value={getSsenPrimaryTypeText(selectedQuestion.ssenTypeTags)}
                            onChange={(event) => updateSelectedQuestion("ssenTypeTags", updateSsenPrimaryTypeTags(selectedQuestion.ssenTypeTags, event.target.value, selectedQuestion.unit))}
                            placeholder="예: SSEN-CM1-06-03 이차함수의 최대, 최소"
                          />
                        </label>
                        <label>
                          쎈 보조유형
                          <input
                            value={getSsenSecondaryTypeText(selectedQuestion.ssenTypeTags)}
                            onChange={(event) => updateSelectedQuestion("ssenTypeTags", updateSsenSecondaryTypeTags(selectedQuestion.ssenTypeTags, event.target.value, selectedQuestion.unit))}
                            placeholder="쉼표로 여러 개 입력"
                          />
                        </label>
                        <label>
                          출처
                          <select value={selectedQuestion.source} onChange={(event) => updateSelectedQuestion("source", event.target.value)}>
                            {examQuestionSourceOptions.map((option) => <option key={option}>{option}</option>)}
                          </select>
                        </label>
                        <label>
                          정답률/체감
                          <input value={selectedQuestion.correctRate} onChange={(event) => updateSelectedQuestion("correctRate", event.target.value)} placeholder="예: 낮음, 40%" />
                        </label>
                        <label>
                          유사문항 필요
                          <select value={selectedQuestion.similarProblemNeeded || "확인 필요"} onChange={(event) => updateSelectedQuestion("similarProblemNeeded", event.target.value)}>
                            {similarProblemNeedOptions.map((option) => <option key={option}>{option}</option>)}
                          </select>
                        </label>
                        <label>
                          변형 구분
                          <select value={selectedQuestion.similarProblemRelation || "확인 필요"} onChange={(event) => updateSelectedQuestion("similarProblemRelation", event.target.value)}>
                            {similarProblemRelationOptions.map((option) => <option key={option}>{option}</option>)}
                          </select>
                        </label>
                        <label>
                          유사문항 출처
                          <input value={selectedQuestion.similarProblemSource || ""} onChange={(event) => updateSelectedQuestion("similarProblemSource", event.target.value)} placeholder="예: 나만의DB 비상 확통" />
                        </label>
                      </div>
                      {ssenTypeSuggestions.length ? (
                        <div className="ssenTypeSuggestionPanel">
                          <strong>쎈 유형 추천</strong>
                          <div>
                            {ssenTypeSuggestions.map((row) => (
                              <button
                                key={row.typeCode}
                                onClick={() => updateSelectedQuestion("ssenTypeTags", updateSsenPrimaryTypeTags(selectedQuestion.ssenTypeTags, `${row.typeCode} ${row.typeName}`, row.unitName || selectedQuestion.unit))}
                                type="button"
                              >
                                <span>{row.typeCode}</span>
                                {row.typeName}
                                <small>{row.unitName}</small>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}
                      <div className="analysisQuestionTagGroup">
                        <strong>문항 태그</strong>
                        <div>
                          {examQuestionTagOptions.map((tag) => (
                            <button
                              className={selectedQuestion.tags?.includes(tag) ? "active" : ""}
                              key={tag}
                              onClick={() => toggleSelectedQuestionTag(tag)}
                              type="button"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className={selectedQuestionInsightRecommended ? "questionInsightToggle recommended" : "questionInsightToggle"}>
                        <div>
                          <strong>주요문항 상세 인사이트</strong>
                          <span>
                            {selectedQuestionHasDetailedInsight
                              ? "작성된 상세 코멘트가 있습니다."
                              : selectedQuestionInsightRecommended
                                ? "이 문항은 코멘트 입력을 권장합니다."
                                : "기본문항은 필요할 때만 열어 작성합니다."}
                          </span>
                        </div>
                        <button
                          className="softButton"
                          onClick={() => setExpandedQuestionInsightId(selectedQuestionInsightExpanded ? "" : selectedQuestion.questionId)}
                          type="button"
                        >
                          {selectedQuestionInsightExpanded ? "닫기" : "상세 입력"}
                        </button>
                      </div>
                      {selectedQuestionInsightExpanded ? (
                        <div className="questionInsightDetailFields">
                          <label className="wideLabel">
                            이 문항 강사 코멘트
                            <textarea
                              value={selectedQuestion.teacherComment}
                              onChange={(event) => updateSelectedQuestion("teacherComment", event.target.value)}
                              placeholder="예: 앞번호지만 조건 해석 때문에 실수가 많았고, 중위권 정답률이 낮을 문항."
                              rows="4"
                            />
                          </label>
                          <label className="wideLabel">
                            이 문항 변형 관계 분석
                            <textarea
                              value={selectedQuestion.variationRelationComment}
                              onChange={(event) => updateSelectedQuestion("variationRelationComment", event.target.value)}
                              placeholder="원문항과 실제 출제 문항의 조건/숫자/아이디어 변형을 적습니다."
                              rows="3"
                            />
                          </label>
                          <label className="wideLabel">
                            이 문항 대비 전략
                            <textarea
                              value={selectedQuestion.strategyComment}
                              onChange={(event) => updateSelectedQuestion("strategyComment", event.target.value)}
                              placeholder="다음 수업, 직전보강, 숙제에서 어떻게 다룰지 적습니다."
                              rows="3"
                            />
                          </label>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              </div>

              <article className="panel analysisQuestionSummaryPanel">
                <div className="sectionHeader slim">
                  <div>
                    <h2>표와 대비전략 흐름도</h2>
                    <p className="muted">문항별 카드가 채워질수록 표와 흐름도가 자동으로 정리됩니다.</p>
                  </div>
                </div>
                <ExamQuestionInsightTables questionItems={activeQuestionItems} questionComposition={questionComposition} />
                <ExamStrategyFlow questionItems={activeQuestionItems} />
              </article>
            </section>
            ) : null}

            {currentStage === "분석 검토" ? (
            <section className="analysisReviewSummary">
              <article className="panel analysisReviewLaunchPanel">
                <span className={`analysisStatusBadge ${statusMeta.tone}`}>{statusMeta.label}</span>
                <h2>{[selectedAnalysis.schoolName, selectedAnalysis.grade, selectedAnalysis.subject].filter(Boolean).join(" ") || "시험분석 검토"}</h2>
                <div className="analysisReviewLaunchButtons">
                  <button className="analysisReviewLaunchButton" onClick={() => setDetailSectionId("ai")} type="button">
                    AI 분석 결과
                  </button>
                  <button className="analysisReviewLaunchButton primary" onClick={() => setDetailSectionId("insight")} type="button">
                    인사이트
                  </button>
                </div>
              </article>
            </section>
            ) : null}

            {currentStage === "산출물 작성" ? (
            <section className="analysisOutputStage">
              <article className="panel analysisFinalReportPanel">
                <div>
                  <p className="eyebrow">FINAL OUTPUTS</p>
                  <h2>최종 산출물 4종</h2>
                  <p className="muted">강사용 분석지, 학생 분석지, 블로그 초안, 인스타 카드뉴스를 같은 데이터 구조에서 편집합니다.</p>
                </div>
                <div className={hasExamAnalysisTeacherInsight(selectedAnalysis) ? "analysisInsightStatus done" : "analysisInsightStatus missing"}>
                  <strong>{hasExamAnalysisTeacherInsight(selectedAnalysis) ? "인사이트 반영됨" : "인사이트 추가 필요"}</strong>
                  <span>현장데이터가 들어가야 최종물이 자연스럽습니다.</span>
                </div>
                <div className="analysisFinalReportActions">
                  {!selectedAnalysis.finalDocument ? (
                    <button className="softButton" onClick={regenerateFinalDocument} type="button">최종 편집본 만들기</button>
                  ) : null}
                  <button className="primaryButton" onClick={() => setIsReportPreviewOpen(true)} type="button">최종 보고서 미리보기</button>
                  <button className="softButton" onClick={() => setDetailSectionId("insight")} type="button">인사이트 수정</button>
                </div>
              </article>
              <details className="analysisOutputSection" open>
                <summary>
                  <span>1</span>
                  <strong>레이아웃 선택</strong>
                  <small>산출물별 A/B/C 형식</small>
                </summary>
                <ExamOutputLayoutPlanner
                  value={selectedAnalysis.outputLayoutChoices}
                  onChange={(nextChoices) => update("outputLayoutChoices", nextChoices)}
                />
              </details>
              <details className="analysisOutputSection" open>
                <summary>
                  <span>2</span>
                  <strong>최종 편집본</strong>
                  <small>표·차트·흐름도·문항 슬롯 편집</small>
                </summary>
                <ExamFinalDocumentBuilder
                  analysis={selectedAnalysis}
                  document={selectedAnalysis.finalDocument}
                  onChange={updateFinalDocument}
                  onRegenerate={regenerateFinalDocument}
                />
              </details>
              <details className="analysisOutputSection">
                <summary>
                  <span>3</span>
                  <strong>산출물 미리보기</strong>
                  <small>보기·복사·수정</small>
                </summary>
                <div className="analysisOutputGrid">
                  <AnalysisOutputPreviewCard title="강사용 분석지" value={teacherAnalysisText} onEdit={() => setDetailSectionId("ai")} onOpen={() => setOutputPreviewId("teacher")}>
                    <ExamAnalysisReadablePreview value={teacherAnalysisText} />
                  </AnalysisOutputPreviewCard>
                  <AnalysisOutputPreviewCard title="학생 분석지" value={selectedAnalysis.studentAnalysisDraft} onEdit={() => setDetailSectionId("output")} onOpen={() => setOutputPreviewId("student")}>
                    <ExamAnalysisReadablePreview value={selectedAnalysis.studentAnalysisDraft} />
                  </AnalysisOutputPreviewCard>
                  <AnalysisOutputPreviewCard title="블로그 초안" tone="wide" value={selectedAnalysis.blogDraft} onEdit={() => setDetailSectionId("output")} onOpen={() => setOutputPreviewId("blog")}>
                    <ExamAnalysisReadablePreview value={selectedAnalysis.blogDraft} />
                  </AnalysisOutputPreviewCard>
                  <AnalysisOutputPreviewCard title="인스타 카드뉴스" tone="wide" value={selectedAnalysis.instagramDraft} onEdit={() => setDetailSectionId("output")} onOpen={() => setOutputPreviewId("instagram")}>
                    <ExamAnalysisInstagramPreview value={selectedAnalysis.instagramDraft} />
                  </AnalysisOutputPreviewCard>
                </div>
              </details>
            </section>
            ) : null}
          </section>
        ) : null}
      </div>
      {folderModalMode && folderDraft ? (
        <Modal
          className="analysisFolderModal"
          title={folderModalMode.startsWith("school") ? (folderModalMode === "schoolCreate" ? "학교 만들기" : "학교 수정") : (folderModalMode === "examCreate" ? "고사 만들기" : "고사 수정")}
          subtitle={folderModalMode.startsWith("school") ? "학교를 먼저 만들고, 그 아래 학년과 고사를 누적합니다." : "선택한 학교 아래에 학년별 고사 폴더를 만듭니다."}
          onClose={() => {
            setFolderModalMode("");
            setFolderDraft(null);
          }}
        >
          <form className="analysisFolderForm" onSubmit={saveFolderDraft}>
            {folderModalMode.startsWith("school") ? (
              <div className="fieldGrid">
                <label className="wideLabel">
                  학교명
                  <input
                    autoFocus
                    value={folderDraft.schoolName}
                    onChange={(event) => setFolderDraft((current) => ({ ...current, schoolName: event.target.value }))}
                    placeholder="예: 창동고"
                  />
                </label>
              </div>
            ) : (
              <div className="fieldGrid two">
                <div className="linkedExamInfoBox">
                  <span>학교</span>
                  <strong>{folderDraft.schoolName || selectedSchool?.schoolName || "학교 미선택"}</strong>
                </div>
                <label>
                  학년
                  <select
                    value={folderDraft.grade || "고1"}
                    onChange={(event) => setFolderDraft((current) => ({ ...current, grade: event.target.value }))}
                  >
                    {["고1", "고2", "고3", "중1", "중2", "중3"].map((grade) => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </label>
                <label>
                  고사 구분
                  <select
                    value={folderDraft.examCycle || currentExamCycle}
                    onChange={(event) => {
                      const examCycle = event.target.value;
                      setFolderDraft((current) => ({
                        ...current,
                        examCycle,
                        examName: examCycleLabel(examCycle)
                      }));
                    }}
                  >
                    {folderExamCycleOptions.map((cycle) => (
                      <option key={cycle} value={cycle}>{examCycleLabel(cycle)}</option>
                    ))}
                  </select>
                </label>
                <label>
                  과목
                  <input
                    value={folderDraft.subject}
                    onChange={(event) => setFolderDraft((current) => ({ ...current, subject: event.target.value }))}
                    placeholder="예: 공통수학1"
                  />
                </label>
                <label className="wideLabel">
                  표시할 고사명
                  <input
                    value={folderDraft.examName}
                    onChange={(event) => setFolderDraft((current) => ({ ...current, examName: event.target.value }))}
                    placeholder="예: 2026 1학기 기말고사"
                  />
                </label>
              </div>
            )}
            <div className="analysisFolderModalActions">
              {folderModalMode.startsWith("school") ? (
                <button
                  className="softButton"
                  onClick={() => {
                    const normalizedSchool = persistFolderDraft();
                    if (!normalizedSchool) return;
                    setFolderDraft({
                      ...createExamAnalysisFolderDraft({
                        schoolName: normalizedSchool.schoolName,
                        grade: "고1",
                        subject: "수학",
                        examCycle: currentExamCycle,
                        examName: examCycleLabel(currentExamCycle)
                      }),
                      folderId: "",
                      folderType: "exam"
                    });
                    setFolderModalMode("examCreate");
                  }}
                  type="button"
                >
                  저장 후 고사 추가
                </button>
              ) : (
                <button
                  className="softButton"
                  onClick={() => {
                    const normalizedFolder = persistFolderDraft();
                    if (!normalizedFolder) return;
                    createAnalysisInFolder(normalizedFolder);
                    setFolderModalMode("");
                    setFolderDraft(null);
                  }}
                  type="button"
                >
                  저장 후 분석 추가
                </button>
              )}
              <button className="primaryButton" type="submit">{folderModalMode.startsWith("school") ? "학교 저장" : "고사 저장"}</button>
            </div>
          </form>
        </Modal>
      ) : null}
      {selectedAnalysis && detailSection ? (
        <Modal
          className="analysisDetailModal"
          title={detailSection.title}
          subtitle={detailSection.description}
          onClose={() => setDetailSectionId("")}
        >
          <div className="analysisDetailModalGrid">
            {detailSection.fields.map(([field, label, rows]) => (
              <label className="wideLabel" key={field}>
                {label}
                <textarea
                  value={selectedAnalysis[field] ?? ""}
                  onChange={(event) => update(field, event.target.value)}
                  rows={rows}
                />
              </label>
            ))}
          </div>
        </Modal>
      ) : null}
      {selectedAnalysis && isReportPreviewOpen ? (
        <Modal
          className="analysisReportPreviewModal"
          title="최종 보고서 미리보기"
          subtitle="브라우저 인쇄에서 PDF 저장을 선택하면 현재 편집 상태 그대로 저장됩니다."
          onClose={() => setIsReportPreviewOpen(false)}
        >
          <div className="analysisReportToolbar">
            <button className="primaryButton" onClick={() => window.print()} type="button">PDF로 저장/인쇄</button>
            <button className="softButton" onClick={() => setDetailSectionId("insight")} type="button">인사이트 수정</button>
          </div>
          <ExamAnalysisFinalReport analysis={selectedAnalysis} />
        </Modal>
      ) : null}
      {selectedAnalysis && outputPreview ? (
        <Modal
          className="analysisOutputPreviewModal"
          title={outputPreview.title}
          subtitle="산출물을 크게 확인하고, 바로 복사하거나 수정할 수 있습니다."
          onClose={() => setOutputPreviewId("")}
        >
          <div className="analysisReportToolbar">
            <button className="primaryButton" onClick={() => copyTextToClipboard(outputPreview.value)} type="button">복사</button>
            <button
              className="softButton"
              onClick={() => {
                setDetailSectionId(outputPreview.editSection);
                setOutputPreviewId("");
              }}
              type="button"
            >
              수정
            </button>
          </div>
          {outputPreview.kind === "instagram" ? (
            <ExamAnalysisInstagramPreview value={outputPreview.value} />
          ) : (
            <ExamAnalysisReadablePreview value={outputPreview.value} />
          )}
        </Modal>
      ) : null}
      {selectedAnalysis && isAiInitialViewOpen ? (
        <Modal
          className="analysisInitialViewModal"
          title="AI 분석 결과 전체 보기"
          subtitle="이 초안을 참고해서 인사이트를 추가합니다. 필요하면 AI 분석 결과 수정에서 초안 자체도 고칠 수 있습니다."
          onClose={() => setIsAiInitialViewOpen(false)}
        >
          <div className="analysisReportToolbar">
            <button className="primaryButton" onClick={() => setDetailSectionId("insight")} type="button">인사이트 입력</button>
            <button className="softButton" onClick={() => setDetailSectionId("ai")} type="button">AI 분석 결과 수정</button>
          </div>
          <ExamAnalysisInitialView analysis={selectedAnalysis} />
        </Modal>
      ) : null}
    </section>
  );
}

function SchoolCalendarCenter({
  events,
  generatedLessonPlan = [],
  rows,
  onAddEvent,
  onApplyGeneratedLesson,
  onApplyGeneratedLessons,
  onClearGeneratedLessonManualOverride,
  onDeleteEvent,
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
  const activeStudents = students.filter((student) => (student.status ?? "active") === "active");
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

function LessonResearchCenter({ items, onAddItem, onDeleteItem, onUpdateItem }) {
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
        <button className="primaryButton" onClick={handleAddItem} type="button">+ 연구 항목 추가</button>
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
  const variantAiProvider = aiSettings.variantProvider ?? defaultAiSettings.variantProvider;
  const variantAiModel = aiSettings.variantModel ?? defaultAiSettings.variantModel;
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

function StudentManager({
  academyTests,
  scoreRecords,
  students,
  templates,
  onAddAcademyTest,
  onAddScore,
  onAddStudent,
  onUpdateAcademyTest,
  onUpdateScore,
  onDeleteStudent,
  onSaveStudent,
  onUpdateStudent
}) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [deleteStudentId, setDeleteStudentId] = useState("");
  const [selectedClassTemplateId, setSelectedClassTemplateId] = useState("template_mwf_7_10");
  const [dirtyStudentIds, setDirtyStudentIds] = useState(() => new Set());
  const [originalClassTemplateIds, setOriginalClassTemplateIds] = useState({});
  const [studentSaveStates, setStudentSaveStates] = useState({});
  const selectedClassTemplate = templates.find(
    (template) => template.classTemplateId === selectedClassTemplateId
  );
  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? null;
  const deleteStudent = students.find((student) => student.studentId === deleteStudentId) ?? null;
  const selectedScores = scoreRecords.filter((score) => score.studentId === selectedStudent?.studentId);
  const selectedAcademyTests = academyTests.filter((item) => item.studentId === selectedStudent?.studentId);
  const activeStudents = students.filter((student) => (student.status ?? "active") === "active");
  const visibleStudents =
    activeTab === "class"
      ? selectedClassTemplateId === "unassigned"
        ? activeStudents.filter((student) => !student.defaultClassTemplateId)
        : activeStudents.filter((student) => student.defaultClassTemplateId === selectedClassTemplateId)
      : activeStudents;
  const title = activeTab === "class" ? `${selectedClassTemplateId === "unassigned" ? "미배정" : selectedClassTemplate?.name ?? "반별"} 학생 목록` : "전체 학생 목록";

  function getStudentClassName(student) {
    return templates.find((template) => template.classTemplateId === student.defaultClassTemplateId)?.name ?? "미배정";
  }

  useEffect(() => {
    if (selectedStudentId && !visibleStudents.some((student) => student.studentId === selectedStudentId)) {
      setSelectedStudentId("");
    }
  }, [selectedStudentId, visibleStudents]);

  function confirmDeleteStudent() {
    if (!deleteStudent) return;
    onDeleteStudent(deleteStudent.studentId);
    if (selectedStudentId === deleteStudent.studentId) {
      setSelectedStudentId("");
    }
    setDeleteStudentId("");
  }

  function updateStudentField(studentId, field, value) {
    if (field === "defaultClassTemplateId" && !Object.prototype.hasOwnProperty.call(originalClassTemplateIds, studentId)) {
      const currentStudent = students.find((student) => student.studentId === studentId);
      setOriginalClassTemplateIds((current) => ({
        ...current,
        [studentId]: currentStudent?.defaultClassTemplateId ?? ""
      }));
    }
    onUpdateStudent(studentId, field, value, { persist: false });
    setDirtyStudentIds((current) => new Set(current).add(studentId));
    setStudentSaveStates((current) => ({ ...current, [studentId]: "dirty" }));
  }

  async function saveStudentRow(studentId) {
    setStudentSaveStates((current) => ({ ...current, [studentId]: "saving" }));
    try {
      const saveOptions = Object.prototype.hasOwnProperty.call(originalClassTemplateIds, studentId)
        ? { previousClassTemplateId: originalClassTemplateIds[studentId] }
        : {};
      await onSaveStudent(studentId, saveOptions);
      setDirtyStudentIds((current) => {
        const next = new Set(current);
        next.delete(studentId);
        return next;
      });
      setOriginalClassTemplateIds((current) => {
        const next = { ...current };
        delete next[studentId];
        return next;
      });
      setStudentSaveStates((current) => ({ ...current, [studentId]: "saved" }));
    } catch (error) {
      console.error(error);
      setStudentSaveStates((current) => ({ ...current, [studentId]: "failed" }));
    }
  }

  function getStudentSaveLabel(studentId) {
    const saveState = studentSaveStates[studentId];
    if (saveState === "saving") return "저장 중";
    if (saveState === "saved") return "저장됨";
    if (saveState === "failed") return "재시도";
    return "저장";
  }

  return (
    <section className="panel fullPanel">
      <div className="sectionHeader">
        <div>
          <h1>학생 목록</h1>
          <p className="muted">총 {visibleStudents.length}명</p>
        </div>
        <div className="studentListToolbar">
          <button className="primaryButton" onClick={onAddStudent} type="button">+ 학생 추가</button>
          <span className="studentStatusPill">표시 중 {visibleStudents.length}명</span>
          <span className="studentStatusPill mutedPill">퇴원생은 과거 기록 보존</span>
        </div>
      </div>

      <div className="studentManagerTabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => {
            setActiveTab("all");
            setSelectedStudentId("");
          }}
          type="button"
        >
          전체 학생 목록
        </button>
        <button
          className={activeTab === "class" ? "active" : ""}
          onClick={() => {
            setActiveTab("class");
            setSelectedStudentId("");
          }}
          type="button"
        >
          반별 학생 목록
        </button>
      </div>

      {activeTab === "class" ? (
        <div className="classTabList">
          {templates.map((template) => {
            const count = activeStudents.filter((student) => student.defaultClassTemplateId === template.classTemplateId).length;
            return (
              <button
                className={selectedClassTemplateId === template.classTemplateId ? "active" : ""}
                key={template.classTemplateId}
                onClick={() => {
                  setSelectedClassTemplateId(template.classTemplateId);
                  setSelectedStudentId("");
                }}
                type="button"
              >
                <strong>{template.name}</strong>
                <span>{count}명</span>
              </button>
            );
          })}
          <button
            className={selectedClassTemplateId === "unassigned" ? "active" : ""}
            onClick={() => {
              setSelectedClassTemplateId("unassigned");
              setSelectedStudentId("");
            }}
            type="button"
          >
            <strong>미배정</strong>
            <span>{activeStudents.filter((student) => !student.defaultClassTemplateId).length}명</span>
          </button>
        </div>
      ) : null}

      <div className="studentListTable">
        <div className="studentListRow studentListHead">
          <span>#</span>
          <span>이름</span>
          <span>반</span>
          <span>아이디</span>
          <span>PIN</span>
          <span>학년</span>
          <span>학교</span>
          <span>학생전화번호</span>
          <span>학부모전화번호</span>
          <span>출생연도</span>
          <span>저장</span>
          <span>정보확정</span>
          <span>퇴원</span>
        </div>
        {visibleStudents.map((student, index) => {
          const saveState = studentSaveStates[student.studentId];
          const isDirty = dirtyStudentIds.has(student.studentId);
          const isSaving = saveState === "saving";
          const isSaveDisabled = !isDirty || isSaving;
          return (
          <div className={isDirty ? "studentListRow dirtyStudentRow" : "studentListRow"} key={student.studentId}>
            <span>{index + 1}</span>
            <button
              className={selectedStudentId === student.studentId ? "studentNameButton active" : "studentNameButton"}
              onClick={() => setSelectedStudentId(student.studentId)}
              type="button"
            >
              <span className="studentInitial">{student.name?.[0] ?? "학"}</span>
              <strong>{student.name}</strong>
            </button>
            <select
              aria-label={`${student.name} 반`}
              className="studentClassSelect"
              value={student.defaultClassTemplateId ?? ""}
              onChange={(event) => updateStudentField(student.studentId, "defaultClassTemplateId", event.target.value)}
            >
              <option value="">미배정</option>
              {templates.map((template) => (
                <option key={template.classTemplateId} value={template.classTemplateId}>{template.name}</option>
              ))}
            </select>
            <input
              aria-label={`${student.name} 아이디`}
              className="editableTextCell monoCell"
              value={student.loginId ?? ""}
              onChange={(event) => updateStudentField(student.studentId, "loginId", event.target.value)}
            />
            <input
              aria-label={`${student.name} PIN`}
              className="editableTextCell monoCell"
              value={student.pin ?? ""}
              onChange={(event) => updateStudentField(student.studentId, "pin", event.target.value)}
            />
            <input
              aria-label={`${student.name} 학년`}
              className="editableTextCell gradeBadgeInput"
              value={student.grade || ""}
              onChange={(event) => updateStudentField(student.studentId, "grade", event.target.value)}
            />
            <input
              aria-label={`${student.name} 학교`}
              className="editableTextCell"
              value={student.schoolName || ""}
              onChange={(event) => updateStudentField(student.studentId, "schoolName", event.target.value)}
            />
            <input
              aria-label={`${student.name} 학생 전화번호`}
              className="editableTextCell monoCell"
              inputMode="tel"
              value={student.studentPhone || ""}
              onChange={(event) => updateStudentField(student.studentId, "studentPhone", event.target.value)}
            />
            <input
              aria-label={`${student.name} 학부모 전화번호`}
              className="editableTextCell monoCell"
              inputMode="tel"
              value={student.parentPhone || ""}
              onChange={(event) => updateStudentField(student.studentId, "parentPhone", event.target.value)}
            />
            <select
              value={student.birthYear ?? ""}
              onChange={(event) => updateStudentField(student.studentId, "birthYear", event.target.value)}
            >
              <option value="">-</option>
              {["2007", "2008", "2009", "2010", "2011", "2012", "2013"].map((year) => (
                <option key={year} value={year}>{year}년</option>
              ))}
            </select>
            <button
              className={`studentSaveButton ${saveState ?? "clean"}`}
              disabled={isSaveDisabled}
              onClick={() => saveStudentRow(student.studentId)}
              type="button"
            >
              {getStudentSaveLabel(student.studentId)}
            </button>
            <button
              className={student.confirmed === false ? "statusText danger" : "statusText"}
              onClick={() => updateStudentField(student.studentId, "confirmed", student.confirmed === false)}
              type="button"
            >
              {student.confirmed === false ? "미확정" : "확정"}
            </button>
            <button
              aria-label={`${student.name} 퇴원 처리`}
              className="trashButton"
              onClick={() => setDeleteStudentId(student.studentId)}
              type="button"
            >
              퇴원
            </button>
          </div>
          );
        })}
        {visibleStudents.length === 0 ? (
          <div className="emptyState studentListEmpty">이 반에 배정된 학생이 없습니다.</div>
        ) : null}
      </div>

      {selectedStudent ? (
        <StudentProfileModal
          academyTests={selectedAcademyTests}
          className={getStudentClassName(selectedStudent)}
          onAddAcademyTest={onAddAcademyTest}
          onAddScore={onAddScore}
          onClose={() => setSelectedStudentId("")}
          onUpdateAcademyTest={onUpdateAcademyTest}
          onUpdateScore={onUpdateScore}
          onUpdateStudent={onUpdateStudent}
          scores={selectedScores}
          student={selectedStudent}
        />
      ) : null}

      {deleteStudent ? (
        <Modal
          className="studentDeleteModal"
          onClose={() => setDeleteStudentId("")}
          subtitle="퇴원 처리하면 학생 목록과 내일 이후 수업 명단에서는 제외되고, 오늘까지의 수업기록은 보존됩니다."
          title="학생 퇴원 처리 확인"
        >
          <div className="deleteConfirmBody">
            <div className="deleteConfirmStudent">
              <span className="studentInitial">{deleteStudent.name?.[0] ?? "학"}</span>
              <div>
                <strong>{deleteStudent.name}</strong>
                <p className="muted">
                  {[deleteStudent.grade, deleteStudent.schoolName].filter(Boolean).join(" · ") || "기본 정보 없음"}
                </p>
              </div>
            </div>
            <div className="deleteWarningBox">
              <span>아이디</span>
              <strong>{deleteStudent.loginId || "-"}</strong>
              <span>PIN</span>
              <strong>{deleteStudent.pin || "-"}</strong>
            </div>
            <p className="dangerCopy">정말 이 학생을 퇴원 처리할까요? 오늘까지의 수업기록은 보존하고, 내일 이후 수업 명단에서만 제외합니다.</p>
          </div>
          <div className="deleteConfirmActions">
            <button className="softButton" onClick={() => setDeleteStudentId("")} type="button">취소</button>
            <button className="dangerButton" onClick={confirmDeleteStudent} type="button">퇴원 처리</button>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

function StudentProfileModal({
  academyTests,
  className,
  onAddAcademyTest,
  onAddScore,
  onClose,
  onUpdateAcademyTest,
  onUpdateScore,
  onUpdateStudent,
  scores,
  student
}) {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  function updateProfile(field, value) {
    onUpdateStudent(student.studentId, field, value);
  }

  function renderProfileField(label, field, fallback = "-") {
    return (
      <div>
        <small>{label}</small>
        {isEditingProfile ? (
          <input
            className="profileEditInput"
            value={student[field] ?? ""}
            onChange={(event) => updateProfile(field, event.target.value)}
            placeholder={fallback}
          />
        ) : (
          <strong>{student[field] || fallback}</strong>
        )}
      </div>
    );
  }

  return (
    <Modal
      className="wideModal"
      title={`${student.name} 학생 프로파일`}
      subtitle="기본정보와 성적 기록을 한 번에 확인합니다."
      onClose={onClose}
    >
      <div className="studentProfileModalWrap">
        <div className="sectionHeader slim">
          <div>
            <p className="eyebrow">STUDENT PROFILE</p>
            <h2>{student.name}</h2>
          </div>
          <div className="profileHeaderActions">
            <span className="countBadge">{className}</span>
            <button
              className={isEditingProfile ? "saveButton" : "softButton"}
              onClick={() => setIsEditingProfile((current) => !current)}
              type="button"
            >
              {isEditingProfile ? "수정 완료" : "수정"}
            </button>
          </div>
        </div>
        <div className="studentProfileGrid">
          {renderProfileField("학교", "schoolName")}
          {renderProfileField("학년", "grade")}
          {renderProfileField("교재", "textbook", "미입력")}
          {renderProfileField("학생 전화", "studentPhone", "미입력")}
          {renderProfileField("학부모 전화", "parentPhone", "미입력")}
          <div>
            <small>로그인</small>
            {isEditingProfile ? (
              <div className="profileLoginEdit">
                <input
                  className="profileEditInput"
                  value={student.loginId ?? ""}
                  onChange={(event) => updateProfile("loginId", event.target.value)}
                  placeholder="아이디"
                />
                <input
                  className="profileEditInput"
                  value={student.pin ?? ""}
                  onChange={(event) => updateProfile("pin", event.target.value)}
                  placeholder="PIN"
                />
              </div>
            ) : (
              <strong>{student.loginId} / {student.pin}</strong>
            )}
          </div>
          <div className="wideProfileItem">
            <small>특이사항</small>
            {isEditingProfile ? (
              <textarea
                className="profileEditInput"
                value={student.specialNote ?? ""}
                onChange={(event) => updateProfile("specialNote", event.target.value)}
                placeholder="없음"
                rows="2"
              />
            ) : (
              <strong>{student.specialNote || "없음"}</strong>
            )}
          </div>
          <div className="wideProfileItem">
            <small>개별 스케줄</small>
            {isEditingProfile ? (
              <textarea
                className="profileEditInput"
                value={student.scheduleOverride ?? ""}
                onChange={(event) => updateProfile("scheduleOverride", event.target.value)}
                placeholder="기본 반 스케줄"
                rows="2"
              />
            ) : (
              <strong>{student.scheduleOverride || "기본 반 스케줄"}</strong>
            )}
          </div>
        </div>

        <div className="sectionHeader slim">
          <div>
            <h2>성적 기록</h2>
            <p className="muted">학교 내신 시험과 모의고사 성적을 학생별로 보관합니다.</p>
          </div>
          <button className="primaryButton" onClick={() => onAddScore(student.studentId)} type="button">+ 성적 추가</button>
        </div>
        <div className="managementTable studentScoreModalTable">
          <div className="managementRow scoreRow managementHead">
            <span>구분</span>
            <span>날짜</span>
            <span>과목</span>
            <span>점수</span>
            <span>등급</span>
            <span>메모</span>
          </div>
          {scores.length === 0 ? (
            <div className="emptyState">아직 입력된 성적이 없습니다.</div>
          ) : (
            scores.map((item) => (
              <div className="managementRow studentScoreRow" key={item.scoreRecordId}>
                <select value={item.examType} onChange={(event) => onUpdateScore(item.scoreRecordId, "examType", event.target.value)}>
                  <option value="내신">내신</option>
                  <option value="모의고사">모의고사</option>
                </select>
                <input type="date" value={item.examDate} onChange={(event) => onUpdateScore(item.scoreRecordId, "examDate", event.target.value)} />
                <input value={item.subject} onChange={(event) => onUpdateScore(item.scoreRecordId, "subject", event.target.value)} />
                <input value={item.score} onChange={(event) => onUpdateScore(item.scoreRecordId, "score", event.target.value)} />
                <input value={item.grade} onChange={(event) => onUpdateScore(item.scoreRecordId, "grade", event.target.value)} />
                <input value={item.note} onChange={(event) => onUpdateScore(item.scoreRecordId, "note", event.target.value)} />
              </div>
            ))
          )}
        </div>

        <div className="sectionHeader slim">
          <div>
            <h2>테스트 성적</h2>
            <p className="muted">학원 데일리/단원/누적 테스트 성적을 학생별로 보관합니다.</p>
          </div>
          <button className="primaryButton" onClick={() => onAddAcademyTest(student.studentId)} type="button">+ 테스트 추가</button>
        </div>
        <div className="managementTable studentProfileDataTable">
          <div className="managementRow academyTestProfileRow managementHead">
            <span>날짜</span>
            <span>테스트명</span>
            <span>범위</span>
            <span>점수</span>
            <span>평균</span>
            <span>메모</span>
          </div>
          {academyTests.length === 0 ? (
            <div className="emptyState">아직 입력된 테스트 성적이 없습니다.</div>
          ) : (
            academyTests.map((item) => (
              <div className="managementRow academyTestProfileRow" key={item.testId}>
                <input type="date" value={item.testDate} onChange={(event) => onUpdateAcademyTest(item.testId, "testDate", event.target.value)} />
                <input value={item.title} onChange={(event) => onUpdateAcademyTest(item.testId, "title", event.target.value)} />
                <input value={item.scope} onChange={(event) => onUpdateAcademyTest(item.testId, "scope", event.target.value)} />
                <input value={item.score ?? ""} onChange={(event) => onUpdateAcademyTest(item.testId, "score", event.target.value)} placeholder="점수" />
                <input value={item.averageScore ?? ""} onChange={(event) => onUpdateAcademyTest(item.testId, "averageScore", event.target.value)} placeholder="평균" />
                <input value={item.note} onChange={(event) => onUpdateAcademyTest(item.testId, "note", event.target.value)} />
              </div>
            ))
          )}
        </div>
      </div>
    </Modal>
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
  const selectedAttendanceDisplay = getAttendanceDisplay(selectedRecord ?? {});
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
        <span className="countBadge">{tasks.length}개 진행</span>
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

function Modal({ backdropClassName = "", children, className = "", hideHeader = false, onClose, subtitle, title }) {
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
            <button className="iconButton" onClick={onClose} type="button">×</button>
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
    if ((student.status ?? "active") !== "active") return false;
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

function formatKoreaTimeFromIso(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
}

function normalizeTimeInput(value) {
  const text = String(value ?? "").trim();
  const match = text.match(/(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const hour = Math.max(0, Math.min(23, Number(match[1]) || 0));
  const minute = Math.max(0, Math.min(59, Number(match[2]) || 0));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function addMinutesToAttendanceTime(timeValue, minutesToAdd = 0) {
  const time = normalizeTimeInput(timeValue);
  if (!time) return "";
  const [hour, minute] = time.split(":").map(Number);
  const totalMinutes = hour * 60 + minute + (Number(minutesToAdd) || 0);
  const normalizedMinutes = ((totalMinutes % (24 * 60)) + (24 * 60)) % (24 * 60);
  return `${String(Math.floor(normalizedMinutes / 60)).padStart(2, "0")}:${String(normalizedMinutes % 60).padStart(2, "0")}`;
}

function createKoreaIsoFromDateAndTime(dateValue, timeValue, fallbackIso = new Date().toISOString()) {
  const time = normalizeTimeInput(timeValue);
  if (!dateValue || !time) return fallbackIso;
  const date = new Date(`${dateValue}T${time}:00+09:00`);
  return Number.isNaN(date.getTime()) ? fallbackIso : date.toISOString();
}

function getAttendanceDisplay(record = {}) {
  record = record ?? {};
  const status = record.attendanceStatus ?? "pending";
  const updatedTime = formatKoreaTimeFromIso(record.updatedAt);
  const isArrivalStatus = ["checkin", "present", "late"].includes(status);
  const isCheckoutStatus = status === "checkout";
  const checkInTime = record.checkInTime || formatKoreaTimeFromIso(record.checkInAt) || (isArrivalStatus ? updatedTime : "");
  const checkOutTime = record.checkOutTime || formatKoreaTimeFromIso(record.checkOutAt) || (isCheckoutStatus ? updatedTime : "");
  const label = checkOutTime && !["absent", "excused", "pending"].includes(status)
    ? "하원"
    : isArrivalStatus || checkInTime
      ? status === "late" ? "지각" : "등원"
      : attendanceLabels[status] ?? status ?? "대기";
  const detail = [
    checkInTime ? `등원 ${checkInTime}` : "",
    checkOutTime ? `하원 ${checkOutTime}` : ""
  ].filter(Boolean).join(" · ");
  return { label, detail };
}

function hasMissingCheckOut(record = {}) {
  record = record ?? {};
  const status = record.attendanceStatus ?? "pending";
  const hasCheckIn = Boolean(record.checkInAt || record.checkInTime);
  const hasCheckOut = Boolean(record.checkOutAt || record.checkOutTime);
  return hasCheckIn && !hasCheckOut && ["checkin", "present", "late"].includes(status);
}

function applyManualAttendanceTimeFields(existingRecord = {}, values = {}, nowIso = new Date().toISOString(), lesson = null) {
  existingRecord = existingRecord ?? {};
  const nowTime = formatKoreaTimeFromIso(nowIso);
  const manualCheckInTime = normalizeTimeInput(values.checkInTime);
  const manualCheckOutTime = normalizeTimeInput(values.checkOutTime);
  const derivedLateCheckInTime =
    values.attendanceStatus === "late" && values.lateMinutes && lesson?.startTime
      ? addMinutesToAttendanceTime(lesson.startTime, values.lateMinutes)
      : "";
  const nextCheckInTime = manualCheckInTime || derivedLateCheckInTime || existingRecord.checkInTime || nowTime;
  const nextCheckInAt = createKoreaIsoFromDateAndTime(lesson?.date, nextCheckInTime, existingRecord.checkInAt || nowIso);
  const nextCheckOutTime = manualCheckOutTime || existingRecord.checkOutTime || nowTime;
  const nextCheckOutAt = createKoreaIsoFromDateAndTime(lesson?.date, nextCheckOutTime, existingRecord.checkOutAt || nowIso);
  if (["present", "late", "checkin"].includes(values.attendanceStatus)) {
    return {
      ...values,
      checkInAt: nextCheckInAt,
      checkInTime: nextCheckInTime,
      checkOutAt: "",
      checkOutTime: ""
    };
  }
  if (values.attendanceStatus === "checkout") {
    return {
      ...values,
      checkInAt: manualCheckInTime ? nextCheckInAt : existingRecord.checkInAt || nextCheckInAt,
      checkInTime: manualCheckInTime || existingRecord.checkInTime || nextCheckInTime,
      checkOutAt: nextCheckOutAt,
      checkOutTime: nextCheckOutTime
    };
  }
  if (["absent", "excused", "pending"].includes(values.attendanceStatus)) {
    return {
      ...values,
      checkInAt: "",
      checkInTime: "",
      checkOutAt: "",
      checkOutTime: ""
    };
  }
  return values;
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

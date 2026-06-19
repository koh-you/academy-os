import { useEffect, useMemo, useRef, useState } from "react";
import { sampleData } from "../shared/data/sampleData.js";

const storageKeys = {
  classTemplates: "academy-os.classTemplates.v1",
  lessons: "academy-os.lessons.v8",
  students: "academy-os.students.v12",
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
  examAnalyses: "academy-os.examAnalyses.v1",
  schoolEvents: "academy-os.schoolEvents.v1",
  resourceMaterials: "academy-os.resourceMaterials.v1",
  lessonResearchItems: "academy-os.lessonResearchItems.v1",
  aiSettings: "academy-os.aiSettings.v1",
  attendanceSettings: "academy-os.attendanceSettings.v1"
};

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
  present: "출석",
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
  "80% 완료": "partial_80",
  "80%완료": "partial_80",
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
  partial_80: "과제의 약 80%를 수행했습니다. 남은 부분은 다음 확인 때 이어서 점검하겠습니다.",
  partial_50: "과제의 약 절반 정도를 수행했습니다. 수행량을 조금 더 끌어올릴 수 있도록 지도하겠습니다.",
  known_only: "스스로 해결 가능한 문항 위주로 풀어왔습니다. 어려워한 문항은 수업에서 다시 확인하겠습니다.",
  too_hard: "과제 난이도가 높아 충분히 해결하지 못한 부분이 있었습니다. 필요한 개념을 보충해 다시 풀 수 있도록 지도하겠습니다.",
  answer_suspected: "풀이 과정이 충분히 남아 있지 않아 이해 여부를 다시 확인하거나 간단한 테스트로 점검할 예정입니다.",
  not_done: "과제가 완료되지 않았습니다. 미완료된 부분은 보충 또는 다음 확인 때 이어서 점검하겠습니다.",
  not_checked: "오늘은 과제 검사가 아직 완료되지 않았습니다. 확인 후 필요한 내용을 다시 안내드리겠습니다."
};

function normalizeAssignmentStatusValue(value) {
  return assignmentStatusAliases[value] ?? value ?? "";
}

function getAssignmentStatusParentMessage(value) {
  const normalizedValue = normalizeAssignmentStatusValue(value);
  return assignmentStatusParentMessages[normalizedValue] ?? assignmentStatusLabels[normalizedValue] ?? "";
}

function getLessonMaterial(record, student) {
  return record?.lessonMaterial?.trim() || student?.textbook?.trim() || student?.currentTextbook?.trim() || "";
}

function getLessonContent(record) {
  return record?.lessonProgress?.trim() || record?.progress?.trim() || "";
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

function joinMessageBlocks(blocks) {
  return blocks.map(normalizeMessageText).filter(Boolean).join("\n\n");
}

function buildCommentPreviewLines({ audience, comment, nextHomework, previousHomework, record, student }) {
  const lessonMaterial = getLessonMaterial(record, student);
  const lessonContent = getLessonContent(record);
  const assignmentStatus = record?.assignmentStatus ?? record?.incompleteHomework ?? "";
  const attendance = attendanceLabels[record?.attendanceStatus ?? "pending"] ?? "";
  const commentText = normalizeMessageText(comment);
  const shouldIncludePrepMemo =
    audience === "student" ? Boolean(record?.prepStudentVisible) : Boolean(record?.prepParentVisible);
  const prepMemo = normalizeMessageText(record?.preparationMemo);
  const prepNotice = shouldIncludePrepMemo && prepMemo && !commentText.includes(prepMemo) ? prepMemo : "";
  const lines = [
    attendance ? `출결: ${attendance}` : "",
    lessonMaterial ? `강의 교재: ${lessonMaterial}` : "",
    lessonContent ? `강의 내용: ${lessonContent}` : "",
    previousHomework?.title ? `지난 과제: ${previousHomework.title}` : "",
    nextHomework?.title ? `다음 과제: ${nextHomework.title}` : "",
    audience === "parent" && assignmentStatus ? `과제 상태: ${getAssignmentStatusParentMessage(assignmentStatus)}` : "",
    prepNotice ? createMessageBlock("수업메모", prepNotice) : "",
    commentText ? createMessageBlock("코멘트", commentText) : ""
  ];

  return lines.filter(Boolean);
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

const today = getKoreaDateString();
const academyBrandName = "으뜸수학 고태영T";
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "http://127.0.0.1:8787").replace(/\/$/, "");

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
  return "실발송 가능: 등록된 실제 번호로 발송될 수 있습니다.";
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
    return joinMessageBlocks([
      `#{학원명}: ${base.academyName}`,
      `#{학생명}: ${base.studentName}`,
      "#{출결본문}:",
      `🏫 출결: ${attendanceLabels[base.attendanceStatus]}`,
      `📚 수업: ${base.lessonName}`,
      `🕒 시간: ${base.checkedAt}`
    ]);
  }

  const commonBody = joinMessageBlocks([
    `🏫 출결: ${attendanceLabels[base.attendanceStatus]}`,
    `📚 강의 교재: ${base.lessonMaterial}`,
    `🧭 강의 내용: ${base.lessonContent}`,
    `📖 지난 과제: ${base.previousHomework}`,
    `➡️ 다음 과제: ${base.nextHomework}`,
    type === "parent" ? `✅ 과제 상태: ${getAssignmentStatusParentMessage(base.assignmentStatus)}` : "",
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

const teacherAccount = {
  loginId: "teacher",
  password: "1234",
  name: "고태영",
  role: "teacher"
};

const examPrepTextbookBySchoolGrade = {
  "용화여고_고1": "천재(홍)",
  "상계고_고1": "천재(홍)",
  "자운고_고1": "미래엔",
  "정의여고_고1": "미래엔",
  "창동고_고1": "미래엔"
};

function createParentLoginId(student) {
  return `parent-${student.loginId}`;
}

function getDemoStudent(students) {
  return students.find((student) => student.studentId === "student_mwf710_001") ?? students[0];
}

function createDefaultExamAnalysis(examPrepRow = {}) {
  const schoolName = examPrepRow.schoolName || "창동고";
  const grade = examPrepRow.grade || "1학년";
  const subject = examPrepRow.subject || "공통수학1";
  return {
    examAnalysisId: `exam_analysis_${Date.now()}`,
    examPrepId: examPrepRow.examPrepId || "",
    schoolName,
    grade,
    subject,
    examName: "2026 1학기 중간고사",
    examDate: "2026-06-12",
    sourceFileUrl: "",
    rawExamText: "",
    aiProvider: "auto",
    aiModel: "server-default",
    aiStatus: "대기",
    aiLastRunAt: "",
    aiError: "",
    aiPrompt: [
      `역할: ${academyBrandName} 시험지 분석 1차 AI 가안 생성`,
      "입력된 시험 원본을 바탕으로 아래 필드를 채운다.",
      "1. 시험 개요: 문항수, 범위, 전반 난이도, 출제 특징",
      "2. 단원별 출제 분포: 단원명, 문항수, 배점, 체감 난도",
      "3. 킬러/준킬러 문항: 문항 번호, 핵심 함정, 필요한 개념",
      "4. 학생 실수 패턴: 계산, 조건 해석, 시간 배분, 서술형 감점 요인",
      "5. 다음 시험 학습 방향: 학생에게 실제로 안내할 문장으로 정리",
      "주의: AI 결과는 가안이며, 강사 인사이트 4모듈이 추가되기 전에는 발행용으로 쓰지 않는다."
    ].join("\n"),
    aiOverview: `${schoolName} ${grade} ${subject} 시험지 원본을 넣으면 문항수, 난이도, 출제 특징이 정리됩니다.`,
    unitDistribution: "단원별 문항수와 배점이 여기에 정리됩니다.",
    killerProblems: "킬러/준킬러 문항 번호, 핵심 함정, 풀이 접근이 여기에 정리됩니다.",
    mistakePatterns: "학생들이 많이 틀릴 지점과 현장 체감 오답 패턴을 정리합니다.",
    insightSummary: "이번 시험 출제 패턴 한 줄:\n작년 대비 변화:\n학생들이 가장 많이 틀린 유형:\n다음 시험 예측 한 줄:\n\n부연:",
    insightUnits: "단원명:\n출제 빈도: 매년 / 격년 / 신유형 / 감소\n학생 정답률 체감: 상 / 중 / 하\n핵심 키워드:\n\n부연:",
    insightKiller: "문항 번호 / 배점:\n출제 단원:\n유형: 기존 반복 / 신유형 / 변형\n핵심 함정 한 줄:\n\n부연:",
    insightDirection: "이 학교 학생들에게 가장 강조할 점:\n실수 줄이는 핵심 팁:\n\n부연:",
    studentAnalysisDraft: "학생용 분석지는 A 총평 + B 단원별 인사이트 + D 학습 방향을 중심으로 생성합니다.",
    blogDraft: "블로그 초안은 학부모가 읽기 쉬운 톤으로 시험 개요, 킬러문항, 학습 방향을 연결합니다.",
    instagramDraft: `1장 표지\n2장 시험 한 줄 총평\n3장 출제 분포\n4장 킬러문항\n5장 학생 실수\n6장 학습 방향\n7장 ${academyBrandName} 안내`,
    pipelineStage: "1차 AI 가안"
  };
}

function safeIdPart(value = "") {
  return String(value)
    .trim()
    .replaceAll(/\s+/g, "-")
    .replaceAll(/[^0-9A-Za-z가-힣_-]/g, "")
    .slice(0, 40);
}

function examCycleLabel(examCycle) {
  return {
    "2026-1-mid": "2026 1학기 중간",
    "2026-1-final": "2026 1학기 기말",
    "2026-2-mid": "2026 2학기 중간",
    "2026-2-final": "2026 2학기 기말"
  }[examCycle] ?? examCycle;
}

function normalizeGradeLabel(grade = "") {
  const value = String(grade).trim();
  if (value.includes("1")) return value.includes("중") ? "중1" : "고1";
  if (value.includes("2")) return value.includes("중") ? "중2" : "고2";
  if (value.includes("3")) return value.includes("중") ? "중3" : "고3";
  return value;
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

function normalizeMathExamEntries(row = {}) {
  const entries = Array.isArray(row.mathExamDates) ? row.mathExamDates : [];
  const normalized = entries
    .map((entry, index) => ({
      id: entry.id || `math_${safeIdPart(row.examPrepId || row.schoolName || "exam")}_${index}`,
      date: entry.date || "",
      grade: entry.grade || row.grade || "",
      subject: entry.subject || normalizeMathSubject(row.subject),
      label: entry.label || ""
    }))
    .filter((entry) => entry.date || entry.label);
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
    row.schoolName || "학교 미입력",
    row.grade || "학년 미입력",
    row.subject || "공통수학1"
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
    ? students.filter((student) => student.defaultClassTemplateId === classTemplateId)
    : students;
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
        examPrepId: `exam_prep_${safeIdPart(examCycle)}_${safeIdPart(schoolName)}_${safeIdPart(grade)}_${safeIdPart(student.textbook || "textbook")}`,
        examCycle,
        schoolName,
        grade,
        subject,
        publisher: findLinkedPublisher(existingRows, draftRow) || student.textbook || "",
        scope: "",
        subTextbook: "",
        examPeriod: "",
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
    title: `${examCycleLabel(row.examCycle ?? "2026-1-mid")} 수학시험`,
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

function getExamPeriodGroupKey(row = {}) {
  const period = parseDateRangeText(row.examPeriod);
  return [
    row.schoolName || "학교 미입력",
    row.examCycle || "2026-1-mid",
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

function buildExamCalendarEvents(rows) {
  const periodKeys = new Set();
  return rows.flatMap((row) => {
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
          title: `${row.schoolName || "학교 미입력"} ${examCycleLabel(row.examCycle ?? "2026-1-mid")} 시험기간`,
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

const defaultAiSettings = {
  commentProvider: "auto",
  commentModel: "server-default",
  examAnalysisProvider: "auto",
  examAnalysisModel: "server-default",
  variantProvider: "auto",
  variantModel: "server-default"
};

const defaultAttendanceSettings = {
  lateGraceMinutes: 0
};

function countProblemStatuses(problems = []) {
  return Object.keys(problemStatusMeta).reduce((counts, status) => {
    counts[status] = problems.filter((problem) => problem.status === status).length;
    return counts;
  }, {});
}

export function App() {
  const [activeView, setActiveView] = useState("lessons");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [session, setSession] = useState(null);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedLessonId, setSelectedLessonId] = useState("");
  const [lessonClipboard, setLessonClipboard] = useState(null);
  const [lessonUndoStack, setLessonUndoStack] = useState([]);
  const [classTemplates, setClassTemplates] = useStoredState(storageKeys.classTemplates, sampleData.classTemplates);
  const [students, setStudents] = useStoredState(storageKeys.students, sampleData.students);
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
  const [examPrepRows, setExamPrepRows] = useStoredState(storageKeys.examPrepRows, sampleData.examPrepRows ?? []);
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
    sampleData.examAnalyses ?? [createDefaultExamAnalysis(sampleData.examPrepRows?.[0])]
  );
  const [resourceMaterials, setResourceMaterials] = useStoredState(storageKeys.resourceMaterials, []);
  const [aiSettings, setAiSettings] = useStoredState(storageKeys.aiSettings, defaultAiSettings);
  const [attendanceSettings, setAttendanceSettings] = useStoredState(
    storageKeys.attendanceSettings,
    defaultAttendanceSettings
  );
  const [integrationStatus, setIntegrationStatus] = useState(null);
  const [saveStates, setSaveStates] = useState({});
  const [reportModal, setReportModal] = useState(null);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState(false);
  const [editingLesson, setEditingLesson] = useState(null);
  const [isLessonJournalOpen, setIsLessonJournalOpen] = useState(false);
  const [attendanceModal, setAttendanceModal] = useState(null);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [lessonDeleteModalId, setLessonDeleteModalId] = useState("");
  const [selectedReportLessonId, setSelectedReportLessonId] = useState("lesson_2026-06-12_mwf-7-10");
  const recordsRef = useRef(records);
  const homeworksRef = useRef(homeworks);

  useEffect(() => {
    let isMounted = true;

    async function loadCoreDataFromApi() {
      try {
        const [
          studentsResponse,
          classesResponse,
          lessonsResponse,
          recordsResponse,
          homeworksResponse,
          resourceMaterialsResponse
        ] = await Promise.all([
          fetch(apiUrl("/api/students")),
          fetch(apiUrl("/api/classes")),
          fetch(apiUrl("/api/lessons")),
          fetch(apiUrl("/api/lesson-records")),
          fetch(apiUrl("/api/homeworks")),
          fetch(apiUrl("/api/resource-materials"))
        ]);
        const [studentsResult, classesResult, lessonsResult, recordsResult, homeworksResult, resourceMaterialsResult] = await Promise.all([
          studentsResponse.json(),
          classesResponse.json(),
          lessonsResponse.json(),
          recordsResponse.json(),
          homeworksResponse.json(),
          resourceMaterialsResponse.json()
        ]);
        if (!isMounted) return;
        if (studentsResult.ok && Array.isArray(studentsResult.students) && studentsResult.students.length > 0) {
          setStudents(studentsResult.students);
        }
        if (classesResult.ok && Array.isArray(classesResult.classTemplates) && classesResult.classTemplates.length > 0) {
          setClassTemplates(classesResult.classTemplates);
        }
        if (lessonsResult.ok && Array.isArray(lessonsResult.lessons) && lessonsResult.lessons.length > 0) {
          setLessons(lessonsResult.lessons);
        }
        if (recordsResult.ok && Array.isArray(recordsResult.records) && recordsResult.records.length > 0) {
          setRecords(recordsResult.records);
        }
        if (homeworksResult.ok && Array.isArray(homeworksResult.homeworks) && homeworksResult.homeworks.length > 0) {
          setHomeworks(homeworksResult.homeworks);
        }
        if (resourceMaterialsResult.ok && Array.isArray(resourceMaterialsResult.materials)) {
          setResourceMaterials(resourceMaterialsResult.materials);
        }
      } catch (error) {
        console.info("academy-os API sync skipped:", error.message);
      }
    }

    loadCoreDataFromApi();
    return () => {
      isMounted = false;
    };
  }, [setClassTemplates, setHomeworks, setLessons, setRecords, setResourceMaterials, setStudents]);

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

  const lessonsForDate = useMemo(
    () => lessons.filter((lesson) => lesson.date === selectedDate).sort(sortByTime),
    [lessons, selectedDate]
  );

  const selectedLesson =
    lessons.find((lesson) => lesson.lessonId === selectedLessonId) ?? lessonsForDate[0] ?? null;

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
        .filter(Boolean)
    : [];

  const reportLesson = lessons.find((lesson) => lesson.lessonId === selectedReportLessonId) ?? lessons[0];
  const reportRecords = reportLesson
    ? records.filter((record) => record.lessonId === reportLesson.lessonId)
    : [];
  const pendingDeleteLesson = lessons.find((lesson) => lesson.lessonId === lessonDeleteModalId) ?? null;
  const attendanceOnlyMode = isAttendanceOnlyRoute();

  function handleLogin(role, loginId, password) {
    if (role === "teacher") {
      if (loginId === teacherAccount.loginId && password === teacherAccount.password) {
        setSession({ role: "teacher", actorId: "instructor_owner_001", name: teacherAccount.name });
        setActiveView("lessons");
        return { ok: true };
      }
      return { ok: false, message: "선생님 아이디 또는 비밀번호가 맞지 않습니다." };
    }

    const matchedStudent =
      students.find((student) => {
        if (role === "student") {
          return student.loginId === loginId && student.pin === password;
        }
        if (role === "parent") {
          return createParentLoginId(student) === loginId && student.pin === password;
        }
        return false;
      }) ??
      (role === "student" && loginId === "student" && password === "1234"
        ? getDemoStudent(students)
        : role === "parent" && loginId === "parent" && password === "1234"
          ? getDemoStudent(students)
          : null);

    if (!matchedStudent) {
      return { ok: false, message: role === "student" ? "학생 아이디 또는 비밀번호가 맞지 않습니다." : "학부모 아이디 또는 비밀번호가 맞지 않습니다." };
    }

    setSession({
      role,
      actorId: role === "student" ? matchedStudent.studentId : `parent_${matchedStudent.studentId}`,
      studentId: matchedStudent.studentId,
      name: matchedStudent.name
    });
    return { ok: true };
  }

  function handleLogout() {
    setSession(null);
    setActiveView("lessons");
  }

  function handleAttendancePinCheck(phoneLast4) {
    const digits = String(phoneLast4).replaceAll(/\D/g, "").slice(-4);
    if (digits.length !== 4) {
      return { ok: false, message: "휴대폰 번호 뒤 4자리를 입력해 주세요." };
    }

    const matchedStudents = students.filter((student) => {
      const phone = String(student.studentPhone ?? "").replaceAll(/\D/g, "");
      return phone.slice(-4) === digits;
    });

    if (matchedStudents.length === 0) {
      return { ok: false, message: "해당 번호의 학생을 찾지 못했습니다." };
    }
    if (matchedStudents.length > 1) {
      return { ok: false, message: "같은 뒤 4자리 학생이 2명 이상입니다. 선생님께 말씀해 주세요." };
    }

    const student = matchedStudents[0];
    const now = new Date();
    const todayString = getKoreaDateString(now);
    const lesson =
      lessons
        .filter((item) => item.date === todayString && item.studentIds.includes(student.studentId))
        .sort(sortByTime)[0] ??
      lessons
        .filter((item) => item.studentIds.includes(student.studentId))
        .sort((a, b) => String(b.date).localeCompare(String(a.date)) || sortByTime(a, b))[0];

    if (!lesson) {
      return { ok: false, message: `${student.name} 학생의 수업 일정이 없습니다.` };
    }

    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const existingRecord = recordsRef.current.find((record) => record.lessonStudentRecordId === recordId);
    const nowIso = now.toISOString();
    const koreaTime = new Intl.DateTimeFormat("ko-KR", {
      timeZone: "Asia/Seoul",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }).format(now);
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

    setRecords((currentRecords) => upsertById(currentRecords, nextRecord, "lessonStudentRecordId"));
    setNotificationLogs((current) => [
      {
        notificationLogId: `attendance_kiosk_${Date.now()}_${student.studentId}`,
        channel: "attendance_kiosk",
        createdAt: nowIso,
        lessonId: lesson.lessonId,
        message: `[출결체크] ${student.name} ${isCheckOut ? "하원" : attendanceStatus === "late" ? `${lateMinutes}분 지각 등원` : "등원"} · ${koreaTime}`,
        provider: "academy-os",
        status: "checked_not_sent",
        studentId: student.studentId,
        target: "parent"
      },
      ...current
    ]);

    return {
      ok: true,
      message: `${student.name} ${isCheckOut ? "하원" : attendanceStatus === "late" ? `${lateMinutes}분 지각 등원` : "등원"} 체크 완료`,
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
        records={records}
        students={students}
        onAttendanceCheck={handleAttendancePinCheck}
      />
    );
  }

  if (!session) {
    return <RoleLoginScreen students={students} onAttendanceCheck={handleAttendancePinCheck} onLogin={handleLogin} />;
  }

  if (session.role === "student") {
    return (
      <StudentPortalV2
        homeworks={homeworks}
        lessons={lessons}
        materials={resourceMaterials}
        records={records}
        reportSnapshots={reportSnapshots}
        sessionStudentId={session.studentId}
        students={students.filter((student) => student.studentId === session.studentId)}
        onLogout={handleLogout}
        onStudentCreateHomework={handleStudentCreateHomework}
        onStudentCheckHomework={handleStudentCheckHomework}
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
    const nextLessons = lessons.filter((lesson) => lesson.date === date).sort(sortByTime);
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
      setLessons((current) => [...current, latestAction.lesson]);
      setSelectedDate(latestAction.lesson.date);
      setSelectedLessonId(latestAction.lesson.lessonId);
    }
    setLessonUndoStack(restActions);
  }

  function handleDeleteSelectedLessonFromCalendar() {
    const lesson = lessons.find((item) => item.lessonId === selectedLessonId);
    if (!lesson) return;
    setLessonDeleteModalId(lesson.lessonId);
  }

  function confirmDeleteLesson(lessonId) {
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    const canceledLesson = { ...lesson, status: "canceled" };
    setLessonUndoStack((current) => [{ type: "delete", lesson }, ...current].slice(0, 20));
    setLessons((current) => current.filter((item) => item.lessonId !== lessonId));
    setRecords((current) => current.filter((record) => record.lessonId !== lessonId));
    setHomeworks((current) =>
      current.map((homework) => (homework.lessonId === lessonId ? { ...homework, lessonId: "" } : homework))
    );
    setLessonDeleteModalId("");
    const nextLessonForDate = lessons
      .filter((item) => item.lessonId !== lessonId && item.date === lesson.date)
      .sort(sortByTime)[0];
    setSelectedLessonId(nextLessonForDate?.lessonId ?? "");
    setIsLessonJournalOpen(false);
    postJson("/api/lessons", { lesson: canceledLesson }).catch((error) => console.error(error));
  }

  function handleOpenLessonJournal(lessonId) {
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    setSelectedDate(lesson.date);
    setSelectedLessonId(lessonId);
    setIsLessonJournalOpen(true);
  }

  function handleAddLesson(formValues) {
    const template = classTemplates.find(
      (item) => item.classTemplateId === formValues.classTemplateId
    );
    const studentIds = students
      .filter((student) => formValues.studentIds.includes(student.studentId))
      .map((student) => student.studentId);
    const lesson = {
      lessonId: createLessonId(formValues.date, formValues.name),
      classTemplateId: template?.classTemplateId ?? "custom",
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
    postJson("/api/lessons", { lesson }).catch((error) => console.error(error));
  }

  function handleUpdateLesson(formValues) {
    const template = classTemplates.find(
      (item) => item.classTemplateId === formValues.classTemplateId
    );
    const studentIds = students
      .filter((student) => formValues.studentIds.includes(student.studentId))
      .map((student) => student.studentId);
    const lesson = {
      ...editingLesson,
      classTemplateId: template?.classTemplateId ?? "custom",
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

    setLessons((current) => upsertById(current, lesson, "lessonId"));
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    setEditingLesson(null);
    setIsLessonModalOpen(false);
    postJson("/api/lessons", { lesson }).catch((error) => console.error(error));
  }

  function handleDeleteLesson(lessonId) {
    const lesson = lessons.find((item) => item.lessonId === lessonId);
    if (!lesson) return;
    setLessonDeleteModalId(lesson.lessonId);
  }

  function handleAddStudent(formValues) {
    const student = {
      studentId: `student_${Date.now()}`,
      loginId: `04${formValues.name}`,
      name: formValues.name,
      pin: formValues.pin,
      birthYear: formValues.birthYear,
      schoolName: formValues.schoolName,
      grade: formValues.grade,
      studentPhone: formValues.studentPhone,
      parentPhone: formValues.parentPhone,
      textbook: formValues.textbook,
      specialNote: formValues.specialNote,
      defaultClassTemplateId: formValues.defaultClassTemplateId,
      scheduleOverride: formValues.scheduleOverride
    };

    setStudents((current) => [...current, student]);
    setIsStudentModalOpen(false);
    postJson("/api/students", { student }).catch((error) => console.error(error));
  }

  function handleUpdateStudent(studentId, field, value) {
    const currentStudent = students.find((student) => student.studentId === studentId);
    const nextStudent = currentStudent ? { ...currentStudent, [field]: value } : null;
    setStudents((current) =>
      current.map((student) => (student.studentId === studentId ? { ...student, [field]: value } : student))
    );
    if (nextStudent) {
      postJson("/api/students", { student: nextStudent }).catch((error) => console.error(error));
    }
  }

  function handleUpdateExamPrepRow(examPrepId, field, value) {
    setExamPrepRows((current) => {
      const existingExamRow = current.find((row) => row.examPrepId === examPrepId);
      const updatedExamRow = existingExamRow ? { ...existingExamRow, [field]: value } : null;
      const shouldSyncPublisher = ["publisher", "examCycle", "schoolName", "grade", "subject"].includes(field);
      const updatedRows = current.map((row) => (row.examPrepId === examPrepId ? { ...row, [field]: value } : row));
      return shouldSyncPublisher && updatedExamRow ? syncPublisherAcrossExamTerm(updatedRows, updatedExamRow) : updatedRows;
    });
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
    const changedLessons = lessons
      .filter((lesson) => (lesson.studentIds ?? []).includes(studentId))
      .map((lesson) => ({
        ...lesson,
        studentIds: (lesson.studentIds ?? []).filter((id) => id !== studentId)
      }));
    setStudents((current) => current.filter((student) => student.studentId !== studentId));
    setLessons((current) =>
      current.map((lesson) => ({
        ...lesson,
        studentIds: (lesson.studentIds ?? []).filter((id) => id !== studentId)
      }))
    );
    setRecords((current) => current.filter((record) => record.studentId !== studentId));
    setHomeworks((current) => current.filter((homework) => homework.studentId !== studentId));
    setWrongProblems((current) => current.filter((problem) => problem.studentId !== studentId));
    setScoreRecords((current) => current.filter((score) => score.studentId !== studentId));
    setAcademyTests((current) => current.filter((test) => test.studentId !== studentId));
    setMakeupTasks((current) => current.filter((task) => task.studentId !== studentId));
    if (removedStudent) {
      postJson("/api/students", { student: { ...removedStudent, status: "paused" } }).catch((error) => console.error(error));
    }
    if (changedLessons.length > 0) {
      postJson("/api/lessons/bulk", { lessons: changedLessons }).catch((error) => console.error(error));
    }
  }

  function handleChangeRecord(lesson, student, field, value) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    setRecords((currentRecords) => {
      const existingRecord = currentRecords.find((record) => record.lessonStudentRecordId === recordId);
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
        updatedBy: "instructor_owner_001",
        updatedAt: new Date().toISOString()
      };

      return upsertById(currentRecords, nextRecord, "lessonStudentRecordId");
    });

    setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "dirty" }));
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

  async function handleSaveRecord(recordId, lessonForRecord = null, studentForRecord = null) {
    setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "saving" }));

    try {
      const record =
        recordsRef.current.find((item) => item.lessonStudentRecordId === recordId) ??
        (lessonForRecord && studentForRecord ? createEmptyRecord(lessonForRecord, studentForRecord) : null);
      if (!record) throw new Error("저장할 수업기록을 찾지 못했습니다.");
      const relatedHomeworks = homeworksRef.current.filter(
        (homework) => homework.lessonId === record.lessonId && homework.studentId === record.studentId
      );

      await postJson("/api/lesson-records", { record });
      if (relatedHomeworks.length > 0) {
        await postJson("/api/homeworks/bulk", { homeworks: relatedHomeworks });
      }
      if (!recordsRef.current.some((item) => item.lessonStudentRecordId === record.lessonStudentRecordId)) {
        const nextRecords = upsertById(recordsRef.current, record, "lessonStudentRecordId");
        recordsRef.current = nextRecords;
        setRecords(nextRecords);
      }
      window.localStorage.setItem(storageKeys.records, JSON.stringify(recordsRef.current));
      window.localStorage.setItem(storageKeys.homeworks, JSON.stringify(homeworksRef.current));
      setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "saved" }));
    } catch (error) {
      console.error(error);
      setSaveStates((currentStates) => ({ ...currentStates, [recordId]: "failed" }));
    }
  }

  function handleSaveReportSnapshot(snapshot) {
    setReportSnapshots((current) => [snapshot, ...current]);
  }

  async function handleSendAttendanceAlimtalk(lesson, student, values) {
    const payload = {
      attendanceStatus: values.attendanceStatus,
      checkedAt: getKoreaDateTimeString(),
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
      setNotificationLogs((current) => [
        { ...logBase, provider: "solapi", status: "sent", result },
        ...current
      ]);
    } catch (error) {
      setNotificationLogs((current) => [
        { ...logBase, provider: "solapi", status: "failed", error: error.message },
        ...current
      ]);
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
            integrationStatus={integrationStatus}
            lessons={lessons}
            lessonsForDate={lessonsForDate}
            makeupTasks={makeupTasks}
            materials={resourceMaterials}
            records={selectedRecords}
            saveStates={saveStates}
            selectedDate={selectedDate}
            selectedLesson={selectedLesson}
            selectedLessonId={selectedLessonId}
            students={selectedStudents}
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
            onSaveRecord={handleSaveRecord}
            onSendComment={handleSendLessonComment}
            onSelectLesson={setSelectedLessonId}
            onUndoLessonAction={handleUndoLessonAction}
            onUpdateHomework={handleUpdateHomework}
            isLessonJournalOpen={isLessonJournalOpen}
          />
        ) : null}

        {activeView === "studentPortal" ? (
          <StudentPortalV2
            homeworks={homeworks}
            lessons={lessons}
            materials={resourceMaterials}
            records={records}
            reportSnapshots={reportSnapshots}
            previewMode
            scoreRecords={scoreRecords}
            students={students}
            onStudentCreateHomework={handleStudentCreateHomework}
            onStudentCheckHomework={handleStudentCheckHomework}
            onStudentDeleteHomework={handleStudentDeleteHomework}
            onStudentUpdateHomework={handleStudentUpdateHomework}
          />
        ) : null}

        {activeView === "overdue" ? (
          <OverdueHomework
            homeworks={homeworks}
            students={students}
            onTeacherVerifyHomework={handleTeacherVerifyHomework}
          />
        ) : null}

        {activeView === "attendanceKiosk" ? (
          <AttendanceKiosk
            lessons={lessons}
            records={records}
            students={students}
            onAttendanceCheck={handleAttendancePinCheck}
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
            templates={classTemplates}
            rows={examPrepRows}
            students={students}
            onEnsureExamCycleRows={(examCycle, classTemplateId) =>
              setExamPrepRows((current) =>
                mergeById(current, buildExamPrepRowsFromStudents(students, examCycle, classTemplateId, current), "examPrepId")
              )
            }
            onUpdateRow={handleUpdateExamPrepRow}
          />
        ) : null}

        {activeView === "examAnalysis" ? (
          <ExamAnalysisCenter
            aiSettings={aiSettings}
            analyses={examAnalyses}
            examPrepRows={examPrepRows}
            onAddAnalysis={() =>
              setExamAnalyses((current) => [
                createDefaultExamAnalysis(examPrepRows[0]),
                ...current
              ])
            }
            onUpdateAnalysis={(analysisId, field, value) =>
              setExamAnalyses((current) =>
                current.map((item) => (item.examAnalysisId === analysisId ? { ...item, [field]: value } : item))
              )
            }
            onRunAnalysis={handleRunExamAnalysis}
          />
        ) : null}

        {activeView === "schoolCalendar" ? (
          <SchoolCalendarCenter
            events={schoolEvents}
            rows={examPrepRows}
            onAddEvent={(event) =>
              setSchoolEvents((current) => [
                { ...event, eventId: event.eventId || `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}` },
                ...current
              ])
            }
            onDeleteEvent={(eventId) => setSchoolEvents((current) => current.filter((event) => event.eventId !== eventId))}
            onUpdateExamPrepRow={handleUpdateExamPrepRow}
            onUpdateEvent={(eventId, field, value) =>
              setSchoolEvents((current) =>
                current.map((event) => (event.eventId === eventId ? { ...event, [field]: value } : event))
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
            onUpdateAiSettings={setAiSettings}
            onUpdateAttendanceSettings={setAttendanceSettings}
          />
        ) : null}

        {activeView === "notifications" ? (
          <NotificationCenter
            integrationStatus={integrationStatus}
            notificationJobs={notificationJobs}
            notificationLogs={notificationLogs}
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
            onScheduleTask={handleScheduleSupplementTask}
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
          templates={classTemplates}
          onClose={() => setIsStudentModalOpen(false)}
          onSubmit={handleAddStudent}
        />
      ) : null}

      {attendanceModal ? (
        <AttendanceModal
          item={attendanceModal}
          onClose={() => setAttendanceModal(null)}
          onSave={(lesson, student, values) => {
            handleChangeRecord(lesson, student, "attendanceStatus", values.attendanceStatus);
            handleChangeRecord(lesson, student, "attendanceReason", values.attendanceReason);
            handleChangeRecord(lesson, student, "lateMinutes", values.lateMinutes);
            handleSendAttendanceAlimtalk(lesson, student, values);
            setAttendanceModal(null);
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
          subtitle="수업을 취소 처리하면 달력과 수업일지 목록에서는 숨겨지고, DB에는 취소 상태로 보존됩니다."
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
            <p className="dangerCopy">정말 이 수업을 취소 처리할까요? 실제 DB에서는 삭제하지 않고 취소 상태로 보존합니다.</p>
          </div>
          <div className="deleteConfirmActions">
            <button className="softButton" onClick={() => setLessonDeleteModalId("")} type="button">취소</button>
            <button className="dangerButton" onClick={() => confirmDeleteLesson(pendingDeleteLesson.lessonId)} type="button">수업 취소</button>
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
    const nextAnalysis = {
      ...analysis,
      aiProvider: overrideAiSettings?.examAnalysisProvider ?? analysis.aiProvider ?? defaultAiSettings.examAnalysisProvider,
      aiModel: overrideAiSettings?.examAnalysisModel ?? analysis.aiModel ?? defaultAiSettings.examAnalysisModel
    };
    setExamAnalyses((current) =>
      current.map((item) =>
        item.examAnalysisId === analysis.examAnalysisId
          ? { ...item, aiProvider: nextAnalysis.aiProvider, aiModel: nextAnalysis.aiModel, aiStatus: "분석 중", aiError: "" }
          : item
      )
    );

    try {
      const response = await fetch(apiUrl("/api/ai/exam-analysis"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextAnalysis)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "시험분석 API 요청에 실패했습니다.");
      }

      setExamAnalyses((current) =>
        current.map((item) =>
          item.examAnalysisId === analysis.examAnalysisId
            ? {
                ...item,
                ...result.result.fields,
                aiProvider: result.result.provider,
                aiModel: result.result.model,
                aiStatus: "완료",
                aiLastRunAt: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" }),
                aiError: ""
              }
            : item
        )
      );
    } catch (error) {
      setExamAnalyses((current) =>
        current.map((item) =>
          item.examAnalysisId === analysis.examAnalysisId
            ? { ...item, aiStatus: "실패", aiError: error.message }
            : item
        )
      );
    }
  }

  async function handlePolishLessonComment(lesson, student, record, target, aiProvider, aiModel) {
    const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
    const sourceField = target === "student" ? "studentComment" : "teacherComment";
    const statusField = target === "student" ? "studentCommentAiStatus" : "teacherCommentAiStatus";

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
          audience: target === "student" ? "student" : "parent",
          attendanceStatus: attendanceLabels[record?.attendanceStatus ?? "pending"],
          assignmentStatus: getAssignmentStatusParentMessage(record?.assignmentStatus ?? record?.incompleteHomework ?? ""),
          grade: student.grade,
          homeworkStatus: homeworkLabels[record?.homeworkStatus ?? "not_started"],
          lessonDate: lesson.date,
          lessonContent: getLessonContent(record),
          lessonMaterial: getLessonMaterial(record, student),
          lessonName: lesson.className,
          rawText: record?.[sourceField] ?? "",
          schoolName: student.schoolName,
          studentName: student.name
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
          audience: target === "student" ? "student" : "parent",
          attendanceStatus: attendanceLabels[record?.attendanceStatus ?? "pending"],
          assignmentStatus: getAssignmentStatusParentMessage(record?.assignmentStatus ?? record?.incompleteHomework ?? ""),
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
    const sourceField = target === "student" ? "studentComment" : "teacherComment";
    const message = normalizeMessageText(record?.[sourceField]);
    const prepMemo = normalizeMessageText(record?.preparationMemo);
    const shouldIncludePrepMemo =
      target === "student" ? Boolean(record?.prepStudentVisible) : Boolean(record?.prepParentVisible);
    const prepMessage = shouldIncludePrepMemo && prepMemo && !message.includes(prepMemo) ? prepMemo : "";
    const composedMessage = joinMessageBlocks([prepMessage, message]);
    const hasSendContent = Boolean(message || prepMessage);
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
      message: composedMessage || "발송할 코멘트가 없습니다.",
      provider: "solapi",
      scheduledDate,
      scheduledLabel,
      studentId: student.studentId,
      target
    };

    if (!hasSendContent) {
      setNotificationLogs((current) => [
        { ...logBase, status: "empty_message" },
        ...current
      ]);
      setRecords((current) =>
        upsertById(
          current,
          {
            ...createEmptyRecord(lesson, student),
            ...(record ?? {}),
            lessonStudentRecordId: recordId,
            [statusField]: "내용 없음"
          },
          "lessonStudentRecordId"
        )
      );
      return;
    }

    setRecords((current) =>
      upsertById(
        current,
        {
          ...createEmptyRecord(lesson, student),
          ...(record ?? {}),
          lessonStudentRecordId: recordId,
          [statusField]: scheduledDate ? `예약 중 · ${scheduledLabel}` : "알림톡 발송 중"
        },
        "lessonStudentRecordId"
      )
    );

    try {
      const lessonMaterial = getLessonMaterial(record, student);
      const lessonContent = getLessonContent(record);
      const assignmentStatus = record?.assignmentStatus ?? record?.incompleteHomework ?? "";
      const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons);
      const nextHomework = getLessonHomework(homeworks, lesson, student, "next");
      const notificationPayload = {
        academyName: academyBrandName,
        assignmentStatus,
        assignmentStatusMessage: getAssignmentStatusParentMessage(assignmentStatus),
        attendanceStatus: record?.attendanceStatus ?? "pending",
        lessonDate: lesson.date,
        lessonContent,
        lessonId: lesson.lessonId,
        lessonMaterial,
        lessonName: lesson.className,
        forceDryRun: Boolean(options.forceDryRun),
        forceTestRecipient: Boolean(options.forceTestRecipient),
        message,
        nextHomework: nextHomework?.title ?? "",
        preparationNotice: prepMessage,
        parentPhone: student.parentPhone,
        previousHomework: previousHomework?.title ?? "",
        scheduledDate,
        sendMode: options.forceDryRun || options.forceTestRecipient ? "test" : scheduledDate ? "scheduled" : "immediate",
        studentId: student.studentId,
        studentName: student.name,
        studentPhone: student.studentPhone,
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

      const logStatus = result.result?.dryRun ? "dry_run" : scheduledDate ? "scheduled" : "sent";
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
      const completeStatus = result.result?.dryRun
          ? "테스트 발송 기록됨"
          : scheduledDate
            ? `예약 완료 · ${scheduledLabel}`
            : "알림톡 발송 완료";
      setRecords((current) =>
        upsertById(
          current,
          {
            ...createEmptyRecord(lesson, student),
            ...(record ?? {}),
            lessonStudentRecordId: recordId,
            [statusField]: completeStatus
          },
          "lessonStudentRecordId"
        )
      );
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

  function handleStudentCreateHomework(homework) {
    const nextHomework = {
      homeworkId: `homework_student_${Date.now()}`,
        lessonId: "",
        status: "assigned",
        studentStatus: "not_started",
        teacherStatus: "unverified",
        createdByRole: "student",
        createdAt: new Date().toISOString(),
        ...homework
    };
    setHomeworks((current) => [nextHomework, ...current]);
    postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
  }

  function handleStudentUpdateHomework(homeworkId, updates) {
    setHomeworks((current) =>
      current.map((homework) => {
        if (homework.homeworkId !== homeworkId) return homework;
        const nextHomework = {
          ...homework,
          ...updates,
          totalProblems: Number(updates.totalProblems || homework.totalProblems || 0),
          updatedAt: new Date().toISOString()
        };
        postJson("/api/homeworks", { homework: nextHomework }).catch((error) => console.error(error));
        return nextHomework;
      })
    );
  }

  function handleStudentDeleteHomework(homeworkId) {
    setHomeworks((current) => current.filter((homework) => homework.homeworkId !== homeworkId));
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
        return current.map((item) =>
          item.makeupTaskId === existingTask.makeupTaskId
            ? { ...item, status: item.status === "done" ? "scheduled" : item.status, touchedAt: new Date().toISOString() }
            : item
        );
      }

      return [
        {
          makeupTaskId: taskId,
          status: "draft",
          scheduledDate: today,
          scheduledTime: "",
          notificationDraft: "",
          attemptCount: 0,
          childHomeworkIds: [],
          createdAt: new Date().toISOString(),
          ...task
        },
        ...current
      ];
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
      current.map((item) =>
        item.makeupTaskId === task.makeupTaskId
          ? {
              ...item,
              status: "scheduled",
              lastHomeworkId: homeworkId,
              childHomeworkIds: [...(item.childHomeworkIds ?? []), homeworkId],
              attemptCount: (item.attemptCount ?? 0) + 1,
              lastAssignedAt: new Date().toISOString()
            }
          : item
      )
    );
  }

  function handleScheduleSupplementTask(task) {
    const student = students.find((item) => item.studentId === task.studentId);
    if (!student || !task.scheduledDate || !task.scheduledTime) return;

    const lessonId = task.linkedLessonId || createSupplementLessonId(task);
    const className = createSupplementLessonName(task, student);
    const lesson = {
      lessonId,
      classTemplateId: "supplement",
      className,
      lessonType: "makeup",
      date: task.scheduledDate,
      dayOfWeek: getDayKey(task.scheduledDate),
      startTime: task.scheduledTime,
      endTime: addMinutesToTime(task.scheduledTime, 60),
      color: task.taskType === "retest" ? "#ef4444" : "#7c3aed",
      teacherId: "instructor_owner_001",
      studentIds: [student.studentId],
      status: "scheduled",
      lessonTopic: `${followUpTypeLabel(task.taskType)} 일정`,
      sourceMakeupTaskId: task.makeupTaskId,
      sourceLabel: task.sourceLabel
    };

    setLessons((current) => upsertById(current, lesson, "lessonId"));
    setMakeupTasks((current) =>
      current.map((item) =>
        item.makeupTaskId === task.makeupTaskId
          ? {
              ...item,
              status: "scheduled",
              linkedLessonId: lessonId,
              linkedLessonDate: lesson.date,
              linkedLessonTime: lesson.startTime,
              needsLessonResync: false,
              lastScheduledAt: new Date().toISOString()
            }
          : item
      )
    );
    setSelectedDate(lesson.date);
    setSelectedLessonId(lesson.lessonId);
    setIsLessonJournalOpen(false);
    postJson("/api/lessons", { lesson }).catch((error) => console.error(error));
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
    parent_comment: "학부모 알림톡",
    student_comment: "학생 알림톡",
    student_reminder: "학생 일정 알림톡"
  }[type] ?? type ?? "알림톡";
}

function getNotificationStatusLabel(status) {
  return {
    draft: "테스트/초안",
    dry_run: "테스트 기록",
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

function NotificationCenter({ integrationStatus, notificationJobs, notificationLogs, students, onRefresh }) {
  const [dispatchMessage, setDispatchMessage] = useState("");
  const [isDispatching, setIsDispatching] = useState(false);
  const [isCheckingReadiness, setIsCheckingReadiness] = useState(false);
  const [testSendResult, setTestSendResult] = useState("");
  const [testSendDetail, setTestSendDetail] = useState(null);
  const [testingTemplate, setTestingTemplate] = useState("");
  const notificationStatus = integrationStatus?.notifications;
  const safetyTone = getAlimtalkSafetyTone(notificationStatus, false);
  const safetyText = getAlimtalkSafetyText(notificationStatus, false);
  const scheduledJobs = notificationJobs.filter((job) => job.status === "scheduled");
  const queuedJobs = notificationJobs.filter((job) => job.status === "queued" || job.status === "pending_send");
  const draftJobs = notificationJobs.filter((job) => job.status === "draft" || job.status === "dry_run");
  const failedJobs = notificationJobs.filter((job) => job.status === "failed");
  const recentJobs = notificationJobs.slice(0, 30);
  const recentLogs = notificationLogs.slice(0, 8);

  function studentName(studentId, payload) {
    return payload?.studentName || students.find((student) => student.studentId === studentId)?.name || "학생";
  }

  async function handleDispatchDue() {
    setIsDispatching(true);
    setDispatchMessage("");
    try {
      const result = await postJson("/api/notification-jobs/dispatch-due", {
        forceDryRun: Boolean(notificationStatus?.dryRun),
        limit: 20
      });
      const processedCount = result.processedCount ?? result.processed?.length ?? 0;
      setDispatchMessage(
        processedCount
          ? `예약 발송 점검 완료: ${processedCount}건 처리`
          : "예약 발송 점검 완료: 지금 처리할 내부 대기 건이 없습니다."
      );
      await onRefresh?.();
    } catch (error) {
      setDispatchMessage(`예약 발송 점검 실패: ${error.message}`);
    } finally {
      setIsDispatching(false);
    }
  }

  async function handleReadinessCheck() {
    setIsCheckingReadiness(true);
    setDispatchMessage("");
    try {
      const result = await postJson("/api/notification-jobs/readiness-check", {
        notifySlack: Boolean(notificationStatus?.slackConfigured),
        windowMinutes: 15
      });
      setDispatchMessage(
        result.issueCount
          ? `누락 점검 완료: ${result.checkedCount}건 중 ${result.issueCount}건 확인 필요${result.slack ? " · 슬랙 알림 기록" : ""}`
          : `누락 점검 완료: ${result.checkedCount}건 모두 발송 가능`
      );
    } catch (error) {
      setDispatchMessage(`누락 점검 실패: ${error.message}`);
    } finally {
      setIsCheckingReadiness(false);
    }
  }

  async function handleTemplateTest(testType) {
    setTestingTemplate(testType);
    setTestSendResult("");
    setTestSendDetail(null);
    const todayKey = getKoreaDateString(new Date());
    const basePayload = {
      academyName: academyBrandName,
      assignmentStatus: "complete_thorough",
      attendanceStatus: "present",
      checkedAt: "19:00",
      forceDryRun: false,
      forceTestRecipient: true,
      lessonContent: "개별 진도 점검",
      lessonDate: todayKey,
      lessonMaterial: "공통수학1",
      lessonName: "월수금 7-10반",
      message: "오늘 수업에서 확인한 내용을 바탕으로 다음 과제를 안내드립니다.",
      nextHomework: "쎈 - 경우의 수",
      parentPhone: notificationStatus?.testRecipient,
      previousHomework: "rpm 순열과 조합",
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
        provider: result.provider ?? "-",
        dryRun: Boolean(result.result?.dryRun),
        sentTo: result.result?.sentTo || "-",
        requestedTo: result.result?.requestedTo || "-",
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
    <section className="notificationCenterPage">
      <div className="pageTop">
        <div>
          <h1>알림관리</h1>
          <p className="muted">학부모 알림톡, 학생 알림톡, 출결 알림톡의 예약과 테스트 기록을 확인합니다.</p>
        </div>
        <div className="pageActions">
          <button className="softButton" onClick={handleReadinessCheck} type="button" disabled={isCheckingReadiness}>
            {isCheckingReadiness ? "점검 중" : "누락 점검"}
          </button>
          <button className="softButton" onClick={handleDispatchDue} type="button" disabled={isDispatching}>
            {isDispatching ? "점검 중" : "예약 발송 점검"}
          </button>
          <button className="softButton" onClick={onRefresh} type="button">새로고침</button>
        </div>
      </div>
      {dispatchMessage ? <p className="inlineNotice">{dispatchMessage}</p> : null}

      <div className="notificationStatsGrid">
        <article>
          <span>예약 대기</span>
          <strong>{scheduledJobs.length}건</strong>
          <small>솔라피 예약 등록 건</small>
        </article>
        <article>
          <span>내부 대기</span>
          <strong>{queuedJobs.length}건</strong>
          <small>점검 버튼이나 자동화로 처리</small>
        </article>
        <article>
          <span>테스트/초안</span>
          <strong>{draftJobs.length}건</strong>
          <small>실제 발송 전 점검</small>
        </article>
        <article>
          <span>실패</span>
          <strong>{failedJobs.length}건</strong>
          <small>재확인 필요</small>
        </article>
        <article className={`notificationSafetyCard ${safetyTone}`}>
          <span>발송 보호</span>
          <strong>{notificationStatus?.dryRun ? "테스트 보호" : notificationStatus?.allowRealRecipients ? "실발송 가능" : "번호 잠금"}</strong>
          <small>{safetyText}</small>
        </article>
      </div>

      <section className="notificationPanel integrationStatusPanel">
        <div className="sectionHeader slim">
          <div>
            <p className="eyebrow">LIVE SETTINGS</p>
            <h2>발송/AI 연동 상태</h2>
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
            <span><StatusDot active={!notificationStatus?.allowRealRecipients} /> 실제 번호 잠금 {notificationStatus?.allowRealRecipients ? "OFF" : "ON"}</span>
            <span>테스트 수신번호: {notificationStatus?.testRecipient || "미설정"}</span>
          </article>
          <article>
            <strong>AI API</strong>
            <span><StatusDot active={integrationStatus?.ai?.providers?.openai} /> OpenAI</span>
            <span><StatusDot active={integrationStatus?.ai?.providers?.anthropic} /> Claude</span>
            <span>기본값: {integrationStatus?.ai?.defaultProvider || "미설정"}</span>
          </article>
          <article>
            <strong>다음 테스트 순서</strong>
            <span>1. 누락 점검</span>
            <span>2. 테스트 발송</span>
            <span>3. 선생님 번호 수신 확인</span>
            <span>4. 실발송 잠금 해제는 마지막</span>
          </article>
        </div>
        {notificationStatus?.missing?.length ? (
          <p className="inlineNotice danger">미입력 환경변수: {notificationStatus.missing.join(", ")}</p>
        ) : null}
      </section>

      <section className="notificationPanel templateTestPanel">
        <div className="sectionHeader slim">
          <div>
            <p className="eyebrow">TEMPLATE TEST</p>
            <h2>알림톡 템플릿 테스트</h2>
          </div>
          <span className="countBadge">{notificationStatus?.liveTestSendEnabled ? "테스트 번호 실발송" : "dry-run 기록"}</span>
        </div>
        <div className="templateTestGrid">
          <article>
            <strong>출결 알림톡</strong>
            <p>등원/출석 안내 템플릿을 점검합니다.</p>
            <pre className="templatePreviewText">{buildNotificationTemplatePreview("attendance")}</pre>
            <button className="softButton" disabled={testingTemplate === "attendance"} onClick={() => handleTemplateTest("attendance")} type="button">
              {testingTemplate === "attendance" ? "테스트 중" : "출결 테스트"}
            </button>
          </article>
          <article>
            <strong>학부모 알림톡</strong>
            <p>강의 교재, 강의 내용, 과제 상태, 코멘트 구조를 점검합니다.</p>
            <pre className="templatePreviewText">{buildNotificationTemplatePreview("parent")}</pre>
            <button className="softButton" disabled={testingTemplate === "parent"} onClick={() => handleTemplateTest("parent")} type="button">
              {testingTemplate === "parent" ? "테스트 중" : "학부모 테스트"}
            </button>
          </article>
          <article>
            <strong>학생 알림톡</strong>
            <p>학생에게 보낼 안내문과 다음 과제 문구를 점검합니다.</p>
            <pre className="templatePreviewText">{buildNotificationTemplatePreview("student")}</pre>
            <button className="softButton" disabled={testingTemplate === "student"} onClick={() => handleTemplateTest("student")} type="button">
              {testingTemplate === "student" ? "테스트 중" : "학생 테스트"}
            </button>
          </article>
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

      <section className="notificationPanel">
        <div className="sectionHeader slim">
          <div>
            <p className="eyebrow">QUEUE</p>
            <h2>알림톡 예약/기록</h2>
          </div>
          <span className="countBadge">{notificationJobs.length}건</span>
        </div>
        <div className="notificationTable">
          <div className="notificationTableHead">
            <span>상태</span>
            <span>종류</span>
            <span>학생</span>
            <span>발송시각</span>
            <span>수신번호</span>
            <span>미리보기</span>
          </div>
          {recentJobs.length === 0 ? (
            <p className="emptyState">아직 저장된 알림톡 예약/기록이 없습니다.</p>
          ) : (
            recentJobs.map((job) => (
              <article className="notificationTableRow" key={job.notificationJobId}>
                <span className={`statusPill status-${job.status || "draft"}`}>{getNotificationStatusLabel(job.status)}</span>
                <strong>{getNotificationJobLabel(job.notificationType)}</strong>
                <span>{studentName(job.studentId, job.payload)}</span>
                <span>{job.scheduledAt ? formatKoreaTimeLabel(job.scheduledAt) : "-"}</span>
                <span>{job.recipient || "번호 없음"}</span>
                <p>{job.previewBody || job.payload?.message || "미리보기 없음"}</p>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="notificationPanel">
        <div className="sectionHeader slim">
          <div>
            <p className="eyebrow">LOCAL LOG</p>
            <h2>최근 화면 로그</h2>
          </div>
          <span className="countBadge">{notificationLogs.length}건</span>
        </div>
        <div className="notificationLogList">
          {recentLogs.length === 0 ? <p className="emptyState">아직 화면 로그가 없습니다.</p> : null}
          {recentLogs.map((log) => (
            <article key={log.notificationLogId}>
              <strong>{getNotificationJobLabel(log.channel)} · {getNotificationStatusLabel(log.status)}</strong>
              <span>{log.createdAt ? formatKoreaTimeLabel(log.createdAt) : ""}</span>
              <p>{log.message}</p>
            </article>
          ))}
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
        { id: "attendanceKiosk", label: "출결체크", icon: "🟢" },
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

  function submit(event) {
    event.preventDefault();
    const result = onLogin(role, loginId.trim(), password.trim());
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

function RoleLoginScreen({ students, onAttendanceCheck, onLogin }) {
  const [role, setRole] = useState("student");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAttendanceKiosk, setShowAttendanceKiosk] = useState(false);

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

  function submit(event) {
    event.preventDefault();
    const result = onLogin(role, loginId.trim(), password.trim());
    if (!result.ok) {
      setError(result.message);
      return;
    }
  }

  return (
    <main className="loginPage">
      {showAttendanceKiosk ? (
        <AttendanceKiosk
          isStandalone
          students={students}
          onAttendanceCheck={onAttendanceCheck}
          onBack={() => setShowAttendanceKiosk(false)}
        />
      ) : (
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
          <button className="primaryButton full" type="submit">{roleLabels[role]} 로그인</button>
          <button className="softButton full" onClick={() => setShowAttendanceKiosk(true)} type="button">
            출결 체크
          </button>
        </form>
      )}
    </main>
  );
}

function TeacherLessonHubV2({
  academyTests = [],
  aiSettings,
  integrationStatus,
  clipboardCount,
  lessons,
  makeupTasks = [],
  materials = [],
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
  onPolishComment,
  onPolishPreparationNotice,
  onSaveRecord,
  onSendComment,
  onSelectLesson,
  onUndoLessonAction,
  onUpdateHomework,
  undoCount,
  isLessonJournalOpen
}) {
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

  const lessonJournalDialog = isLessonJournalOpen && selectedLesson ? (
    <div className="modalBackdrop lessonJournalModalBackdrop" role="dialog" aria-modal="true">
      <div className="lessonJournalModal">
        <LessonJournalDetail
          academyTests={academyTests}
          aiSettings={aiSettings}
          integrationStatus={integrationStatus}
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
          onPolishComment={onPolishComment}
          onPolishPreparationNotice={onPolishPreparationNotice}
          onSaveRecord={onSaveRecord}
          onSendComment={onSendComment}
          onUpdateHomework={onUpdateHomework}
          records={records}
          saveStates={saveStates}
          students={students}
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      <header className="pageTop teacherCalendarTop">
        <button className="iconButton" onClick={() => onMoveDate(-30)} type="button">‹</button>
        <h1>{formatMonthTitle(selectedDate)}</h1>
        <button className="iconButton" onClick={() => onMoveDate(30)} type="button">›</button>
        <span className="shortcutHint">↑↓←→ · Enter · Del · Ctrl+C/V/Z</span>
        <button className="primaryButton" onClick={onAddLesson} type="button">+ 수업 등록</button>
      </header>

      <section className="calendarShell teacherCalendarShell">
        <div className="calendarGrid teacherCalendarGrid">
          {["일", "월", "화", "수", "목", "금", "토"].map((label) => (
            <div className="weekday" key={label}>{label}</div>
          ))}
          {buildMonthDays(selectedDate).map((day) => {
            const dayLessons = lessons.filter((lesson) => lesson.date === day.date).sort(sortByTime);
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
                  {dayLessons.map((lesson) => (
                    <button
                      className={lesson.lessonId === selectedLessonId ? "lessonPill active" : "lessonPill"}
                      key={lesson.lessonId}
                      onClick={(event) => {
                        event.stopPropagation();
                        onOpenLessonJournal(lesson.lessonId);
                      }}
                      style={{ background: lesson.color }}
                      type="button"
                    >
                      {lesson.startTime} {lesson.className} ({lesson.studentIds.length}명)
                    </button>
                  ))}
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

function HomeworkMakeupLessonDetail({
  homeworks = [],
  lesson,
  lessons = [],
  onBack,
  onDeleteLesson,
  onEditLesson,
  students = [],
  task
}) {
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
  const targetTitle = targetHomework?.title ?? task?.sourceLabel ?? lesson.sourceLabel ?? "보충 대상 숙제";
  const methodLabel = task ? supplementMethodLabel(task) : "방식 미정";
  const statusLabel =
    task?.status === "done" ? "보충 완료" : task?.status === "scheduled" ? "일정 확정" : "일정 미확정";
  const sourceLessonLabel = sourceLesson?.className ?? sourceLesson?.lessonTopic ?? "원 수업 기록";
  const assignmentCount = task?.assignmentCount ?? task?.attemptCount ?? 0;
  const lessonTime = [lesson.startTime, lesson.endTime].filter(Boolean).join("-") || "시간 미정";

  return (
    <div className="lessonJournalPage homeworkMakeupPage">
      <div className="lessonJournalHeader homeworkMakeupHeader">
        <button className="iconButton" type="button" onClick={onBack}>
          ‹
        </button>
        <div>
          <span className="eyebrow">HOMEWORK MAKEUP</span>
          <h1>{lesson.className}</h1>
          <p>
            {lesson.date} · {lessonTime} · {lessonStudents.length}명
          </p>
        </div>
        <div className="lessonJournalHeaderActions">
          <span className="muted">숙제보충 일정</span>
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
            <p>{student?.name ?? "학생 미확인"} 학생이 보충해야 하는 숙제와 원 수업 기록입니다.</p>
          </div>
          <span className="statusPill">{statusLabel}</span>
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
            <span>보충 방식</span>
            <strong>{methodLabel}</strong>
            <small>{task?.reason ?? "숙제보충"}</small>
          </div>
        </div>
      </section>

      <div className="homeworkMakeupHero">
        <section className="panel homeworkMakeupNotice">
          <h3>일정 메모</h3>
          <p>
            이 화면은 일반 수업일지가 아니라 숙제보충 전용 일정입니다. 오늘 새 숙제를 내는 화면이
            아니라, 기존에 밀린 숙제를 언제 어떤 방식으로 보충할지 확인하는 용도입니다.
          </p>
          <div className="makeupLinkedBox">
            <span>보충 대상</span>
            <strong>{targetTitle}</strong>
            <small>원 수업일자: {sourceDate}</small>
          </div>
        </section>
        <section className="panel homeworkMakeupChecklist">
          <h3>보충 진행 체크</h3>
          <div className="makeupChecklistGrid">
            <label className="checkCard">
              <input type="checkbox" />
              <span>대상 숙제 확인</span>
              <small>학생이 어떤 숙제를 해야 하는지 확인</small>
            </label>
            <label className="checkCard">
              <input type="checkbox" />
              <span>보충 진행</span>
              <small>정해진 방식으로 보충 진행</small>
            </label>
            <label className="checkCard">
              <input type="checkbox" />
              <span>완료 확인</span>
              <small>완료 여부를 숙제현황에 반영</small>
            </label>
          </div>
        </section>
      </div>
    </div>
  );
}

function LessonJournalDetail({
  academyTests = [],
  aiSettings = defaultAiSettings,
  integrationStatus,
  homeworks = [],
  lesson,
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
  onPolishComment,
  onPolishPreparationNotice,
  onSaveRecord,
  onSendComment,
  onUpdateHomework,
  records,
  saveStates,
  students
}) {
  const [bulkPreviousHomework, setBulkPreviousHomework] = useState("");
  const [bulkNextHomework, setBulkNextHomework] = useState("");
  const [commentModal, setCommentModal] = useState(null);
  const [prepMemoModal, setPrepMemoModal] = useState(null);
  const [studentPreviewId, setStudentPreviewId] = useState("");
  const commentAiProvider = aiSettings.commentProvider ?? defaultAiSettings.commentProvider;
  const commentAiModel = aiSettings.commentModel ?? defaultAiSettings.commentModel;
  const linkedMakeupTask = makeupTasks.find((task) => task.makeupTaskId === lesson.sourceMakeupTaskId);
  const isHomeworkMakeupLesson =
    lesson.lessonType === "makeup" &&
    (linkedMakeupTask?.taskType === "homework_makeup" ||
      lesson.lessonTopic?.includes("숙제보충") ||
      lesson.className?.includes("숙제보충"));

  if (isHomeworkMakeupLesson) {
    return (
      <HomeworkMakeupLessonDetail
        homeworks={homeworks}
        lesson={lesson}
        lessons={lessons}
        onBack={onBack}
        onDeleteLesson={onDeleteLesson}
        onEditLesson={onEditLesson}
        students={students}
        task={linkedMakeupTask}
      />
    );
  }
  const saveSummary = students.reduce(
    (summary, student) => {
      const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
      const saveState = saveStates[recordId] ?? "idle";
      return { ...summary, [saveState]: (summary[saveState] ?? 0) + 1 };
    },
    { idle: 0, dirty: 0, saving: 0, saved: 0, failed: 0 }
  );

  function openCommentComposer(audience, targetStudent, baseRecord, previousHomework, nextHomework) {
    const field = audience === "student" ? "studentComment" : "teacherComment";
    const shouldIncludeMemo = audience === "student"
      ? Boolean(baseRecord?.prepStudentVisible)
      : Boolean(baseRecord?.prepParentVisible);
    const memo = baseRecord?.preparationMemo?.trim() ?? "";
    const shouldSeedMemo = shouldIncludeMemo && memo && !baseRecord?.[field]?.trim();
    const nextRecord = shouldSeedMemo ? { ...baseRecord, [field]: memo } : baseRecord;

    if (shouldSeedMemo) {
      onChangeRecord(lesson, targetStudent, field, memo);
    }

    setCommentModal({ audience, nextHomework, previousHomework, record: nextRecord, student: targetStudent });
  }

  function getCommentModalRecord() {
    if (!commentModal) return null;
    const latestRecord = records.find((item) => item.studentId === commentModal.student.studentId) ?? commentModal.record;
    const field = commentModal.audience === "student" ? "studentComment" : "teacherComment";

    return {
      ...(latestRecord ?? {}),
      [field]: latestRecord?.[field]?.trim() ? latestRecord[field] : commentModal.record?.[field] ?? latestRecord?.[field] ?? ""
    };
  }

  return (
    <section className="lessonJournalPage">
      <header className="pageTop lessonJournalHeader">
        <button className="iconButton" onClick={onBack} type="button">‹</button>
        <div>
          <button className="linkTitleButton" onClick={onOpenExamPrep} type="button">{lesson.className}</button>
          <p className="muted">{lesson.date} · {lesson.startTime}-{lesson.endTime} · {students.length}명</p>
        </div>
        <span className="shortcutHint">{lesson.lessonTopic || "수업일지"}</span>
        <button className="softButton" onClick={() => onEditLesson(lesson)} type="button">수업 수정</button>
        <button className="dangerButton" onClick={() => onDeleteLesson(lesson.lessonId)} type="button">수업 삭제</button>
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

      <section className="panel lessonSaveSummary" aria-label="수업일지 저장 상태">
        <div>
          <strong>저장 상태</strong>
          <span className="muted">변경한 줄은 반드시 저장해야 DB에 반영됩니다.</span>
        </div>
        <div className="saveSummaryChips">
          <span className="saveSummaryChip save-dirty">변경됨 {saveSummary.dirty}명</span>
          <span className="saveSummaryChip save-saving">저장중 {saveSummary.saving}명</span>
          <span className="saveSummaryChip save-failed">실패 {saveSummary.failed}명</span>
          <span className="saveSummaryChip save-saved">완료 {saveSummary.saved}명</span>
        </div>
      </section>

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
            <span>저장</span>
          </div>
          {students.map((student) => {
            const recordId = createLessonStudentRecordId(lesson.lessonId, student.studentId);
            const record = records.find((item) => item.studentId === student.studentId) ?? createEmptyRecord(lesson, student);
            const saveState = saveStates[recordId] ?? "idle";
            const previousHomework = getLessonHomework(homeworks, lesson, student, "previous", lessons);
            const nextHomework = getLessonHomework(homeworks, lesson, student, "next");
            const attendanceText = attendanceLabels[record.attendanceStatus] ?? record.attendanceStatus ?? "대기";

            return (
              <div className="journalRow" key={student.studentId}>
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
                    className={record.preparationMemo || record.prepStudentVisible || record.prepParentVisible ? "prepMemoButton filled" : "prepMemoButton"}
                    onClick={() => setPrepMemoModal({ nextHomework, previousHomework, record, student })}
                    type="button"
                  >
                    수업메모
                  </button>
                  <small>
                    {[
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
                  {attendanceText}
                </button>
                <textarea
                  className="journalCompactInput"
                  value={record.lessonMaterial ?? ""}
                  onChange={(event) => onChangeRecord(lesson, student, "lessonMaterial", event.target.value)}
                  placeholder={student.textbook || student.currentTextbook || "강의 교재"}
                  rows="2"
                />
                <textarea
                  value={record.lessonProgress ?? record.progress ?? ""}
                  onChange={(event) => onChangeRecord(lesson, student, "lessonProgress", event.target.value)}
                  placeholder="오늘 강의 내용"
                  rows="2"
                />
                <textarea
                  value={previousHomework?.title ?? ""}
                  onChange={(event) => onUpdateHomework(lesson, student, "previous", event.target.value)}
                  placeholder="지난 숙제"
                  rows="2"
                />
                <textarea
                  value={nextHomework?.title ?? ""}
                  onChange={(event) => onUpdateHomework(lesson, student, "next", event.target.value)}
                  placeholder="다음 숙제"
                  rows="2"
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
                    className={record.teacherComment ? "commentOpenButton filled" : "commentOpenButton"}
                    onClick={() => openCommentComposer("parent", student, record, previousHomework, nextHomework)}
                    type="button"
                  >
                    학부모 알림톡
                  </button>
                  <small>{record.teacherComment ? "작성됨" : "미작성"}</small>
                </div>
                <div className="journalCommentCell">
                  <button
                    className={record.studentComment ? "commentOpenButton filled" : "commentOpenButton"}
                    onClick={() => openCommentComposer("student", student, record, previousHomework, nextHomework)}
                    type="button"
                  >
                    학생 알림톡
                  </button>
                  <small>{record.studentComment ? "작성됨" : "미작성"}</small>
                </div>
                <div className="journalSaveCell">
                  <button
                    className={`journalSaveButton journalSave-${saveState}`}
                    disabled={saveState === "saving"}
                    onClick={() => onSaveRecord(recordId, lesson, student)}
                    type="button"
                  >
                    {getSaveButtonLabel(saveState)}
                  </button>
                  <small className={`saveState save-${saveState}`}>{saveStateLabels[saveState]}</small>
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
          lesson={lesson}
          onChangeRecord={onChangeRecord}
          onClose={() => setCommentModal(null)}
          onPolishComment={onPolishComment}
          onSendComment={onSendComment}
          record={getCommentModalRecord()}
          nextHomework={commentModal.nextHomework}
          previousHomework={commentModal.previousHomework}
          student={commentModal.student}
        />
      ) : null}

      {prepMemoModal ? (
        <PreparationMemoModal
          lesson={lesson}
          onChangeRecord={onChangeRecord}
          onClose={() => setPrepMemoModal(null)}
          record={records.find((item) => item.studentId === prepMemoModal.student.studentId) ?? prepMemoModal.record}
          student={prepMemoModal.student}
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
            onStudentCreateHomework={() => {}}
          />
        </Modal>
      ) : null}
    </section>
  );
}

function CommentOpenCell({ aiStatus, comment, label, onOpen, sendStatus }) {
  const hasComment = Boolean(comment?.trim());
  return (
    <div className="commentOpenCell">
      <button className={hasComment ? "commentOpenButton filled" : "commentOpenButton"} onClick={onOpen} type="button">
        <strong>{hasComment ? "보기/수정" : "작성"}</strong>
        <span>{label}</span>
      </button>
      <small>{hasComment ? comment.slice(0, 28) : "미작성"}{hasComment && comment.length > 28 ? "..." : ""}</small>
      <em>{aiStatus || "AI 대기"} · {sendStatus || "발송 전"}</em>
    </div>
  );
}

function PreparationMemoModal({ lesson, onChangeRecord, onClose, record, student }) {
  return (
    <Modal
      className="preparationMemoModal"
      title={`${student.name} 수업메모`}
      subtitle={`${lesson.date} · ${lesson.className}`}
      onClose={onClose}
    >
      <div className="prepMemoSingle">
        <section className="prepMemoDraft">
          <label>
            강사용 메모
            <textarea
              value={record?.preparationMemo ?? ""}
              onChange={(event) => onChangeRecord(lesson, student, "preparationMemo", event.target.value)}
              placeholder="다음 시간에 꼭 기억해야 할 내용, 질문, 자료, 보충 포인트를 적어주세요."
            />
          </label>
          <div className="prepMemoIncludeBox">
            <strong>알림톡 포함 여부</strong>
            <label className="checkboxLine">
              <input
                checked={Boolean(record?.prepStudentVisible)}
                onChange={(event) => onChangeRecord(lesson, student, "prepStudentVisible", event.target.checked)}
                type="checkbox"
              />
              학생 알림톡에 포함
            </label>
            <label className="checkboxLine">
              <input
                checked={Boolean(record?.prepParentVisible)}
                onChange={(event) => onChangeRecord(lesson, student, "prepParentVisible", event.target.checked)}
                type="checkbox"
              />
              학부모 알림톡에 포함
            </label>
            <p className="muted">
              체크한 대상의 알림톡 작성 화면을 열면 강사용 메모가 직접 작성 칸에 그대로 들어갑니다. AI 수정은 알림톡 작성 화면에서 수신인에 맞게 실행합니다.
            </p>
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
  lesson,
  nextHomework,
  onChangeRecord,
  onClose,
  onPolishComment,
  onSendComment,
  previousHomework,
  record,
  student
}) {
  const [sendTiming, setSendTiming] = useState("default");
  const isParent = audience === "parent";
  const field = isParent ? "teacherComment" : "studentComment";
  const comment = record?.[field] ?? "";
  const title = isParent ? `${student.name} 학부모 알림톡` : `${student.name} 학생 알림톡`;
  const receiverLabel = isParent ? `${student.name} 학부모님` : student.name;
  const previewTitle = isParent ? "학부모 알림톡 미리보기" : "학생 알림톡 미리보기";
  const sendLabel = isParent ? "학부모 알림톡 발송" : "학생 알림톡 발송";
  const actionLabel = sendTiming === "now" ? "테스트 발송" : sendLabel.replace("발송", "예약");
  const aiStatus = isParent ? record?.teacherCommentAiStatus : record?.studentCommentAiStatus;
  const sendStatus = isParent ? record?.teacherCommentSendStatus : record?.studentCommentSendStatus;
  const notificationStatus = integrationStatus?.notifications;
  const recipientPhone = isParent ? student.parentPhone : student.studentPhone;
  const forceDryRun = false;
  const forceTestRecipient = sendTiming === "now";
  const safetyTone = getAlimtalkSafetyTone(notificationStatus, forceDryRun, forceTestRecipient);
  const safetyText = getAlimtalkSafetyText(notificationStatus, forceDryRun, forceTestRecipient);
  const missingNotificationEnv = notificationStatus?.missing ?? [];
  const defaultScheduledDate = getLessonAlimtalkScheduledDate(lesson, 0);
  const delayedScheduledDate = getLessonAlimtalkScheduledDate(lesson, 30);
  const selectedDelayMinutes = sendTiming === "delay30" ? 30 : 0;
  const selectedScheduledDate = sendTiming === "now" ? "" : getLessonAlimtalkScheduledDate(lesson, selectedDelayMinutes);
  const selectedScheduleLabel = selectedScheduledDate ? formatKoreaTimeLabel(selectedScheduledDate) : "즉시";
  const previewLines = buildCommentPreviewLines({
    audience,
    comment,
    nextHomework,
    previousHomework,
    record,
    student
  });

  return (
    <Modal className="commentComposerModal" title={title} subtitle={`${lesson.date} · ${lesson.className}`} onClose={onClose}>
      <div className="commentComposerGrid">
        <section className="commentDraftPanel">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">WRITE</p>
              <h2>직접 작성</h2>
            </div>
            <span className="countBadge">{isParent ? "학부모용" : "학생용"}</span>
          </div>
          <textarea
            className="commentComposerTextarea"
            value={comment}
            onChange={(event) => onChangeRecord(lesson, student, field, event.target.value)}
            placeholder={isParent ? "학부모님께 보낼 알림톡 문구를 적어주세요." : "학생에게 보낼 알림톡 문구를 적어주세요."}
          />
          <div className="commentComposerActions">
            <button
              className="softButton"
              disabled={aiStatus === "AI 수정 중"}
              onClick={() => onPolishComment(lesson, student, record, audience, aiProvider, aiModel)}
              type="button"
            >
              {aiStatus === "AI 수정 중" ? "AI 수정 중..." : "AI 수정"}
            </button>
            <button
              className="sendButton"
              onClick={() =>
                onSendComment(lesson, student, record, audience, {
                  delayMinutes: selectedDelayMinutes,
                  forceDryRun,
                  forceTestRecipient,
                  sendTiming
                })
              }
              type="button"
            >
              {actionLabel}
            </button>
          </div>
          <div className="sendScheduleOptions" role="group" aria-label="알림톡 발송 시각">
            <button className={sendTiming === "default" ? "active" : ""} onClick={() => setSendTiming("default")} type="button">
              기본 예약
              <span>{formatKoreaTimeLabel(defaultScheduledDate)}</span>
            </button>
            <button className={sendTiming === "delay30" ? "active" : ""} onClick={() => setSendTiming("delay30")} type="button">
              30분 지연
              <span>{formatKoreaTimeLabel(delayedScheduledDate)}</span>
            </button>
            <button className={sendTiming === "now" ? "active" : ""} onClick={() => setSendTiming("now")} type="button">
              테스트 발송
              <span>내 번호로 즉시</span>
            </button>
          </div>
          <div className={`alimtalkSafetyBox ${safetyTone}`}>
            <strong>{safetyText}</strong>
            <span>수신 대상: {receiverLabel} · 등록 번호: {recipientPhone || "번호 없음"}</span>
            {missingNotificationEnv.length ? <span>미입력 환경변수: {missingNotificationEnv.join(", ")}</span> : null}
          </div>
          <small className="muted">선택된 발송 시각: {selectedScheduleLabel}</small>
          <small className="muted">{aiStatus || "AI 대기"} · {sendStatus || "발송 전"}</small>
        </section>

        <section className="commentPreviewPanel">
          <div className="sectionHeader slim">
            <div>
              <p className="eyebrow">PREVIEW</p>
              <h2>{previewTitle}</h2>
            </div>
          </div>
          <pre className="templatePreviewText commentTemplatePreview">
            {joinMessageBlocks([
              `#{학원명}: ${academyBrandName}`,
              `#{학생명}: ${student.name}`,
              isParent ? `#{수업일}: ${lesson.date}` : `#{수업명}: ${lesson.className}`,
              isParent ? "#{리포트본문}:" : "#{코멘트}:",
              ...(previewLines.length ? previewLines : ["왼쪽에 작성한 내용이 받는 사람 화면에 이렇게 표시됩니다."])
            ])}
          </pre>
        </section>
      </div>
    </Modal>
  );
}

function CommentActionCell({ aiStatus, onPolish, onSend, sendLabel, sendStatus }) {
  const isRunning = aiStatus === "AI 수정 중";
  return (
    <div className="commentActionCell">
      <div className="commentActionButtons">
        <button className="softButton mini" disabled={isRunning} onClick={onPolish} type="button">
          {isRunning ? "수정 중..." : "AI 수정"}
        </button>
        <button className="sendButton mini" onClick={onSend} type="button">{sendLabel}</button>
      </div>
      <small>{aiStatus || "AI 대기"} · {sendStatus || "발송 전"}</small>
    </div>
  );
}

function AttendanceModal({ item, onClose, onSave }) {
  const { lesson, record, student } = item;
  const [attendanceStatus, setAttendanceStatus] = useState(record.attendanceStatus ?? "present");
  const [lateMinutes, setLateMinutes] = useState(record.lateMinutes ?? "");
  const [attendanceReason, setAttendanceReason] = useState(record.attendanceReason ?? "");

  return (
    <Modal title={`${student.name} 출결 체크`} subtitle="지각/결석이면 시간과 사유를 남깁니다." onClose={onClose}>
      <div className="typeTabs">
        {[
          ["present", "출석"],
          ["late", "지각"],
          ["absent", "결석"]
        ].map(([value, label]) => (
          <button className={attendanceStatus === value ? "active" : ""} key={value} onClick={() => setAttendanceStatus(value)} type="button">
            {label}
          </button>
        ))}
      </div>
      <div className="fieldGrid">
        <label>
          얼마나 늦었나요?
          <input value={lateMinutes} onChange={(event) => setLateMinutes(event.target.value)} placeholder="예: 10분" />
        </label>
        <label>
          사유
          <input value={attendanceReason} onChange={(event) => setAttendanceReason(event.target.value)} placeholder="예: 학교 동아리" />
        </label>
      </div>
      <button className="primaryButton full" onClick={() => onSave(lesson, student, { attendanceStatus, lateMinutes, attendanceReason })} type="button">
        출결 저장
      </button>
    </Modal>
  );
}

function AttendanceKiosk({ isStandalone = false, lessons = [], records = [], students, onAttendanceCheck, onBack }) {
  const [pin, setPin] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!result) return undefined;
    const timerId = window.setTimeout(() => setResult(null), 3000);
    return () => window.clearTimeout(timerId);
  }, [result]);

  function submitPin(event) {
    event?.preventDefault();
    const nextResult = onAttendanceCheck(pin);
    setResult(nextResult);
    if (nextResult.ok) setPin("");
  }

  function pressKey(value) {
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

  const resultTitle = result?.ok ? (result.mode === "checkOut" ? "하원 체크 완료" : "등원 체크 완료") : "출결 체크 실패";
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
            <p className="muted">휴대폰 번호 뒤 4자리를 입력하세요.</p>
          </div>
          {onBack ? <button className="iconButton" onClick={onBack} type="button">×</button> : null}
        </div>
        <form className="attendancePinForm" onSubmit={submitPin}>
          <input
            autoFocus
            inputMode="numeric"
            maxLength={4}
            value={pin}
            onChange={(event) => setPin(event.target.value.replaceAll(/\D/g, "").slice(0, 4))}
            placeholder="뒤 4자리"
          />
          <button className="primaryButton" disabled={pin.length !== 4} type="submit">확인</button>
        </form>

        <div className="attendanceNumberPad" aria-label="출결 번호 입력 키패드">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((value) => (
            <button key={value} onClick={() => pressKey(value)} type="button">{value}</button>
          ))}
          <button className="secondaryKey" onClick={() => pressKey("clear")} type="button">지움</button>
          <button onClick={() => pressKey("0")} type="button">0</button>
          <button className="secondaryKey" onClick={() => pressKey("backspace")} type="button">⌫</button>
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
            <p>{result.ok ? "3초 후 자동으로 닫힙니다." : "번호를 확인한 뒤 다시 입력해 주세요."}</p>
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
        <span className="shortcutHint">↑↓←→ · Del · Ctrl+C/V/Z</span>
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
                  수업 삭제
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
        <span className="shortcutHint">↑↓←→ · Ctrl+C/V/Z</span>
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
                className={lesson.lessonId === selectedLessonId ? "lessonCard active" : "lessonCard"}
                key={lesson.lessonId}
                onClick={() => onSelectLesson(lesson.lessonId)}
                style={{ borderColor: lesson.lessonId === selectedLessonId ? lesson.color : undefined }}
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
                <span className="lessonPill" key={lesson.lessonId} style={{ background: lesson.color }}>
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
          const record = records.find((item) => item.studentId === student.studentId) ?? createEmptyRecord(lesson, student);
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
  const [lessonType, setLessonType] = useState(initialLesson?.lessonType ?? "class");
  const [classTemplateId, setClassTemplateId] = useState(initialLesson?.classTemplateId ?? templates[0].classTemplateId);
  const activeTemplate = templates.find((template) => template.classTemplateId === classTemplateId);
  const [name, setName] = useState(initialLesson?.className ?? activeTemplate.name);
  const [date, setDate] = useState(initialLesson?.date ?? today);
  const [startTime, setStartTime] = useState(initialLesson?.startTime ?? activeTemplate.startTime);
  const [endTime, setEndTime] = useState(initialLesson?.endTime ?? activeTemplate.endTime);
  const [color, setColor] = useState(initialLesson?.color ?? activeTemplate.color);
  const [studentIds, setStudentIds] = useState(initialLesson?.studentIds ?? students.map((student) => student.studentId));
  const [studentSearch, setStudentSearch] = useState("");
  const lessonColors = ["#17213d", "#3b82f6", "#6366f1", "#8b5cf6", "#ec4899", "#ef4444", "#f59e0b", "#10b981", "#059669", "#0891b2", "#7c3aed", "#dc2626", "#d97706", "#16a34a", "#0284c7"];
  const filteredStudents = students.filter((student) =>
    [student.name, student.grade, student.schoolName].join(" ").toLowerCase().includes(studentSearch.toLowerCase())
  );
  const groupedStudents = ["고1", "고2", "중1", "중2", "중3"].map((grade) => ({
    grade,
    students: filteredStudents.filter((student) => student.grade === grade)
  })).filter((group) => group.students.length > 0);

  function handleTemplateChange(nextTemplateId) {
    const template = templates.find((item) => item.classTemplateId === nextTemplateId);
    setClassTemplateId(nextTemplateId);
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
            ["exam", "📝 평가"],
            ["makeup", "🔧 보강"]
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

function ExamPrepCenter({ aiSettings = defaultAiSettings, rows, students, templates, onEnsureExamCycleRows, onUpdateRow }) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("info");
  const [selectedClassTemplateId, setSelectedClassTemplateId] = useState("template_mwf_7_10");
  const [selectedExamCycle, setSelectedExamCycle] = useState("2026-1-mid");
  const [editingExamPrepId, setEditingExamPrepId] = useState("");
  const [reviewModalRowId, setReviewModalRowId] = useState("");
  const [tallySubmissions, setTallySubmissions] = useStoredState(storageKeys.tallySubmissions, []);
  const [tallySummaries, setTallySummaries] = useStoredState(storageKeys.tallySummaries, {});
  const [tallyImportStatus, setTallyImportStatus] = useState("");
  const [pastPaperFrameKey, setPastPaperFrameKey] = useState(0);
  const [pastPaperLoadState, setPastPaperLoadState] = useState("loading");
  const pastPaperArchiveUrl =
    "https://script.google.com/macros/s/AKfycbyYi-NUHHzb9vrBl4Adj6Pq9zXIZJ9oR97g-uQyAf7up7AGVzeRdBUqfVcUZ1zjQiug/exec";
  const classStudents = students.filter((student) => student.defaultClassTemplateId === selectedClassTemplateId);
  const classSchools = new Set(classStudents.map((student) => student.schoolName).filter(Boolean));
  const visibleRows = rows.filter((row) => {
    const rowCycle = row.examCycle ?? "2026-1-mid";
    const matchesCycle = rowCycle === selectedExamCycle;
    const matchesClass = classSchools.size === 0 || classSchools.has(row.schoolName);
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
  const reviewModalRow = rows.find((row) => row.examPrepId === reviewModalRowId) ?? null;
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
      description: "학교, 학년, 교과서, 시험범위와 수학시험일을 관리합니다.",
      id: "info",
      label: "시험정보"
    },
    {
      description: "학생 제출 원문을 모으고 AI 총평으로 정리합니다.",
      id: "tallyAi",
      label: "탈리"
    },
    {
      description: "외부 기출문제 아카이브를 웹앱 안에서 확인합니다.",
      id: "pastPapers",
      label: "기출문제"
    }
  ];
  const activeExamManagementTab =
    examManagementTabs.find((tab) => tab.id === activeTab) ?? examManagementTabs[0];

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
    const entries = normalizeMathExamEntries(row);
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
          <p className="muted">반별 시험정보와 학생 self-check 총평을 고사별로 관리합니다.</p>
        </div>
        <input
          className="searchInput"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="학교, 과목, 출판사 검색"
        />
      </div>

      <div className="examManagementTabs" aria-label="시험관리 하위 탭">
        {examManagementTabs.map((tab) => (
          <button
            className={activeTab === tab.id ? "active" : ""}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            type="button"
          >
            <strong>{tab.label}</strong>
            <span>{tab.description}</span>
          </button>
        ))}
      </div>
      <p className="examTabCaption">{activeExamManagementTab.description}</p>

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
            <span>{selectedClass?.name} · {classStudents.length}명 기준 학교/학년/교과서 정보를 표시합니다.</span>
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
              const isEditing = editingExamPrepId === row.examPrepId;
              const specialNote = row.specialNote ?? row.memo ?? "";
              const reviewSummary = row.revisedReview || row.review || "시험 후 총평 미작성";

              return (
                <div className={isEditing ? "examPrepRow editing" : "examPrepRow"} key={row.examPrepId}>
                  {isEditing ? (
                    <>
                      <input value={row.schoolName ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "schoolName", event.target.value)} />
                      <textarea
                        value={specialNote}
                        onChange={(event) => onUpdateRow(row.examPrepId, "specialNote", event.target.value)}
                        placeholder="학교별 특이사항"
                        rows="3"
                      />
                      <input value={row.grade ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "grade", event.target.value)} />
                      <input value={row.subject ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "subject", event.target.value)} />
                      <input value={row.publisher ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "publisher", event.target.value)} />
                      <div className="examDateRangeInputs">
                        <input
                          aria-label="시험기간 시작일"
                          type="date"
                          value={getDateRangeField(row.examPeriod, "date")}
                          onChange={(event) =>
                            onUpdateRow(row.examPrepId, "examPeriod", updateDateRangeField(row.examPeriod, "date", event.target.value))
                          }
                        />
                        <input
                          aria-label="시험기간 종료일"
                          type="date"
                          value={getDateRangeField(row.examPeriod, "endDate")}
                          onChange={(event) =>
                            onUpdateRow(row.examPrepId, "examPeriod", updateDateRangeField(row.examPeriod, "endDate", event.target.value))
                          }
                        />
                      </div>
                      <div className="mathExamEntryEditor">
                        {getEditableMathExamEntries(row).map((entry, entryIndex) => (
                          <div className="mathExamEntryRow" key={entry.id || entryIndex}>
                            <input
                              aria-label="수학시험 날짜"
                              type="date"
                              value={entry.date ?? ""}
                              onChange={(event) => updateMathExamEntry(row, entryIndex, "date", event.target.value)}
                            />
                            <input
                              aria-label="수학시험 학년"
                              value={entry.grade ?? ""}
                              placeholder="예: 고3"
                              onChange={(event) => updateMathExamEntry(row, entryIndex, "grade", event.target.value)}
                            />
                            <input
                              aria-label="수학시험 과목"
                              value={entry.subject ?? ""}
                              placeholder="예: 미적"
                              onChange={(event) => updateMathExamEntry(row, entryIndex, "subject", event.target.value)}
                            />
                            <input
                              aria-label="수학시험 표시명"
                              value={entry.label ?? ""}
                              placeholder="표시명 선택"
                              onChange={(event) => updateMathExamEntry(row, entryIndex, "label", event.target.value)}
                            />
                            <button className="iconTinyButton" type="button" onClick={() => removeMathExamEntry(row, entryIndex)}>
                              삭제
                            </button>
                          </div>
                        ))}
                        <button className="tinySoftButton" type="button" onClick={() => addMathExamEntry(row)}>
                          + 수학시험 추가
                        </button>
                      </div>
                      <textarea value={row.scope ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "scope", event.target.value)} rows="3" />
                      <textarea value={row.subTextbook ?? ""} onChange={(event) => onUpdateRow(row.examPrepId, "subTextbook", event.target.value)} rows="3" />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                  <button className={row.review || row.revisedReview ? "examReviewOpenButton filled" : "examReviewOpenButton"} onClick={() => setReviewModalRowId(row.examPrepId)} type="button">
                    <strong>{row.review || row.revisedReview ? "총평 보기/수정" : "총평 작성"}</strong>
                    <span>{reviewSummary}</span>
                  </button>
                  <div className="examPrepRowActions">
                    {isEditing ? (
                      <>
                        <button className="primaryButton compact" onClick={() => setEditingExamPrepId("")} type="button">저장</button>
                        <button className="softButton compact" onClick={() => setEditingExamPrepId("")} type="button">닫기</button>
                      </>
                    ) : (
                      <button className="softButton compact" onClick={() => setEditingExamPrepId(row.examPrepId)} type="button">수정</button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : null}

      {activeTab === "tallyAi" ? (
        <div className="tallyAiGrid">
          <section className="panel tallyInboxPanel">
            <div className="sectionHeader slim">
              <div>
                <h2>Self-check 제출 수신함</h2>
                <p className="muted">{selectedClass?.name} · {examCycleLabel(selectedExamCycle)} · {visibleTallySubmissions.length}명 제출</p>
              </div>
              <label className="softButton fileImportButton">
                CSV 가져오기
                <input
                  accept=".csv,text/csv"
                  onChange={(event) => importTallyCsv(event.target.files?.[0])}
                  type="file"
                />
              </label>
            </div>
            <div
              className="tallyDropZone"
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                importTallyCsv(event.dataTransfer.files?.[0]);
              }}
            >
              <strong>탈리 CSV 파일을 여기로 끌어오세요.</strong>
              <span>{tallyImportStatus || "학생 self-check 제출 파일을 업로드하면 학생별 카드와 총평 초안이 생성됩니다."}</span>
            </div>
            <div className="tallyStats">
              <article>
                <span>제출</span>
                <strong>{visibleTallySubmissions.length}명</strong>
              </article>
              <article>
                <span>평균 난이도</span>
                <strong>{tallyAverageLabel(tallyDifficultyValues)}</strong>
              </article>
              <article>
                <span>준비 평균</span>
                <strong>{tallyAverageLabel(tallyPreparationValues)}</strong>
              </article>
            </div>
            {visibleTallySubmissions.length ? (
              <div className="tallyCardList">
                {visibleTallySubmissions.map((submission) => (
                  <article className="tallySubmissionCard studentSelfCheckCard" key={submission.submissionId}>
                    <div className="tallyStudentHeader">
                      <strong>{submission.studentName}</strong>
                      <span>{submission.schoolName || "학교 미입력"} · {submission.grade || "학년 미입력"}</span>
                    </div>
                    <div className="tallyMetricLine">
                      <span>난이도 <b>{submission.difficulty ?? "-"}</b></span>
                      <span>준비 <b>{submission.preparation ?? "-"}</b></span>
                      <span>학원 도움 <b>{submission.academyHelp || "-"}</b></span>
                      <span>다음 목표 <b>{submission.nextGoal || "-"}</b></span>
                    </div>
                    <div className="tallyReviewGrid">
                      <p><b>시험 리뷰</b>{submission.goodPart || submission.regretReason || "응답 없음"}</p>
                      <p><b>다음을 위해</b>{submission.needMore || submission.wantedHelp || "응답 없음"}</p>
                      {submission.freeComment ? <p><b>학생 코멘트</b>{submission.freeComment}</p> : null}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="emptyState">아직 불러온 self-check 제출이 없습니다.</div>
            )}
          </section>
          <section className="panel tallySummaryPanel">
            <div className="sectionHeader slim">
              <div>
                <h2>AI 표준 총평</h2>
                <p className="muted">CSV 제출을 바탕으로 강사용 누적 총평을 정리합니다.</p>
              </div>
              <button className="primaryButton" onClick={refreshTallySummary} type="button">총평 갱신</button>
            </div>
            <article className="tallySubmissionCard summary">
              <strong>{selectedClass?.name} 총평 초안</strong>
              <textarea
                value={tallySummary}
                onChange={(event) =>
                  setTallySummaries((current) => ({
                    ...current,
                    [tallySummaryKey]: event.target.value
                  }))
                }
              />
              <small>학교별 시험 후 총평 모달에 옮겨 최종 편집할 수 있습니다.</small>
            </article>
            <div className="tallySchoolSummaryList">
              {filteredRows.map((row) => (
                <button className="examReviewOpenButton filled" key={`summary_${row.examPrepId}`} onClick={() => setReviewModalRowId(row.examPrepId)} type="button">
                  <strong>{row.schoolName} 총평 작성</strong>
                  <span>{row.revisedReview || row.review || "학교별 총평을 열어 편집합니다."}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
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
  anthropic: ["claude-sonnet-4-5", "claude-3-5-sonnet-latest", "claude-3-5-haiku-latest"],
  mock: ["local-mock"],
  auto: ["server-default"],
  openai: ["gpt-4.1-mini", "gpt-4.1", "gpt-4o-mini"]
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

function SettingsCenter({
  aiSettings,
  attendanceSettings = defaultAttendanceSettings,
  onUpdateAiSettings,
  onUpdateAttendanceSettings
}) {
  const settings = { ...defaultAiSettings, ...aiSettings };
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

  function updateProvider(row, provider) {
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      [row.providerKey]: provider,
      [row.modelKey]: aiProviderModels[provider]?.[0] ?? "server-default"
    }));
  }

  function updateModel(row, model) {
    onUpdateAiSettings((current) => ({
      ...defaultAiSettings,
      ...current,
      [row.modelKey]: model
    }));
  }

  function updateAttendanceSetting(field, value) {
    onUpdateAttendanceSettings((current) => ({
      ...defaultAttendanceSettings,
      ...current,
      [field]: value
    }));
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
              <span className="muted">수업 정각 이후 이 시간까지는 출석으로 처리합니다.</span>
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
  examPrepRows,
  onAddAnalysis,
  onRunAnalysis,
  onUpdateAnalysis
}) {
  const [selectedAnalysisId, setSelectedAnalysisId] = useState(analyses[0]?.examAnalysisId ?? "");
  const [isListCollapsed, setIsListCollapsed] = useState(false);
  const selectedAnalysis = analyses.find((item) => item.examAnalysisId === selectedAnalysisId) ?? analyses[0];
  const pipelineStages = ["1차 AI 가안", "강사 인사이트 추가", "최종 편집", "발행 완료"];
  const currentStage = pipelineStages.includes(selectedAnalysis?.pipelineStage)
    ? selectedAnalysis.pipelineStage
    : pipelineStages[0];
  useEffect(() => {
    if (!selectedAnalysisId && analyses[0]?.examAnalysisId) {
      setSelectedAnalysisId(analyses[0].examAnalysisId);
    }
  }, [analyses, selectedAnalysisId]);

  function update(field, value) {
    if (!selectedAnalysis) return;
    onUpdateAnalysis(selectedAnalysis.examAnalysisId, field, value);
  }

  function handleSourceFileDrop(event) {
    event.preventDefault();
    if (!selectedAnalysis) return;
    const file = event.dataTransfer?.files?.[0];
    if (!file) return;
    update("sourceFileUrl", file.name);
    update(
      "rawExamText",
      [selectedAnalysis.rawExamText, `[첨부 파일] ${file.name} (${Math.round(file.size / 1024)}KB)`]
        .filter(Boolean)
        .join("\n")
    );
  }

  return (
    <section className="examAnalysisPage">
      <header className="pageTop examAnalysisTop">
        <div>
          <p className="eyebrow">EXAM ANALYSIS</p>
          <h1>시험분석</h1>
          <p className="muted">시험 원본을 AI로 분석하고, 강사 인사이트를 더해 블로그와 인스타 초안까지 만듭니다.</p>
        </div>
        <button className="primaryButton" onClick={onAddAnalysis} type="button">+ 분석 추가</button>
      </header>

      <div className={isListCollapsed ? "examAnalysisLayout listCollapsed" : "examAnalysisLayout"}>
        <aside className={isListCollapsed ? "panel analysisListPanel collapsed" : "panel analysisListPanel"}>
          <div className="sectionHeader slim">
            {isListCollapsed ? null : <h2>분석 목록</h2>}
            <button
              aria-label={isListCollapsed ? "분석 목록 펼치기" : "분석 목록 접기"}
              className="analysisListToggle"
              onClick={() => setIsListCollapsed((current) => !current)}
              type="button"
            >
              {isListCollapsed ? "›" : "‹"}
            </button>
            <span className="countBadge">{analyses.length}건</span>
          </div>
          {isListCollapsed ? (
            <div className="analysisCollapsedHint">목록</div>
          ) : (
            <div className="analysisList">
              {analyses.map((analysis) => (
                <button
                  className={selectedAnalysis?.examAnalysisId === analysis.examAnalysisId ? "analysisListItem active" : "analysisListItem"}
                  key={analysis.examAnalysisId}
                  onClick={() => setSelectedAnalysisId(analysis.examAnalysisId)}
                  type="button"
                >
                  <strong>{analysis.schoolName} {analysis.grade}</strong>
                  <span>{analysis.examName} · {analysis.subject}</span>
                  <small>{analysis.pipelineStage}</small>
                </button>
              ))}
            </div>
          )}
        </aside>

        {selectedAnalysis ? (
          <section className="analysisWorkspace">
            <section className="panel analysisOverviewPanel">
              <div className="sectionHeader slim">
                <div>
                  <h2>시험 기본정보</h2>
                  <p className="muted">시험관리 DB와 이어지는 고사 단위 메타데이터입니다.</p>
                </div>
              </div>
              <div className="fieldGrid">
                <label>
                  시험관리 DB 연결
                  <select value={selectedAnalysis.examPrepId} onChange={(event) => update("examPrepId", event.target.value)}>
                    {examPrepRows.map((row) => (
                      <option key={row.examPrepId} value={row.examPrepId}>
                        {row.schoolName} · {row.grade} · {row.subject}
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

            {currentStage === "1차 AI 가안" ? (
            <section className="analysisTwoColumn">
              <div className="panel analysisInputPanel">
                <div className="sectionHeader slim">
                  <h2>시험 원본 · AI 입력</h2>
                </div>
                <div
                  className="sourceDropZone"
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleSourceFileDrop}
                  role="button"
                  tabIndex={0}
                >
                  <strong>원본 파일 드래그 앤 드롭</strong>
                  <span>PDF, 이미지, OCR 텍스트 파일명을 기록하고 메모에 첨부 흔적을 남깁니다.</span>
                </div>
                <label className="wideLabel">
                  원본 파일/링크
                  <input
                    value={selectedAnalysis.sourceFileUrl}
                    onChange={(event) => update("sourceFileUrl", event.target.value)}
                    placeholder="Google Drive, Notion, PDF 링크"
                  />
                </label>
                <label className="wideLabel">
                  시험 원본 메모
                  <textarea
                    value={selectedAnalysis.rawExamText}
                    onChange={(event) => update("rawExamText", event.target.value)}
                    placeholder="시험지 OCR 텍스트, 문항 목록, 사진에서 옮긴 핵심 내용을 붙여넣습니다."
                    rows="8"
                  />
                </label>
                <label className="wideLabel">
                  AI 분석 프롬프트
                  <textarea
                    value={selectedAnalysis.aiPrompt}
                    onChange={(event) => update("aiPrompt", event.target.value)}
                    rows="8"
                  />
                </label>
              </div>

              <div className="panel analysisAiPanel">
                <div className="sectionHeader slim">
                  <h2>AI 분석 필드</h2>
                  <button
                    className="softButton"
                    disabled={selectedAnalysis.aiStatus === "분석 중"}
                    onClick={() => onRunAnalysis(selectedAnalysis, aiSettings)}
                    type="button"
                  >
                    {selectedAnalysis.aiStatus === "분석 중" ? "분석 중..." : "AI 분석 갱신"}
                  </button>
                </div>
                <div className="analysisFieldStack">
                  <label>
                    시험 개요
                    <textarea value={selectedAnalysis.aiOverview} onChange={(event) => update("aiOverview", event.target.value)} rows="4" />
                  </label>
                  <label>
                    단원별 출제 분포
                    <textarea value={selectedAnalysis.unitDistribution} onChange={(event) => update("unitDistribution", event.target.value)} rows="5" />
                  </label>
                  <label>
                    킬러/준킬러 문항
                    <textarea value={selectedAnalysis.killerProblems} onChange={(event) => update("killerProblems", event.target.value)} rows="5" />
                  </label>
                  <label>
                    학생 실수 패턴
                    <textarea value={selectedAnalysis.mistakePatterns} onChange={(event) => update("mistakePatterns", event.target.value)} rows="5" />
                  </label>
                </div>
              </div>
            </section>
            ) : null}

            {currentStage === "강사 인사이트 추가" ? (
            <section className="panel teacherInsightPanel">
              <div className="sectionHeader slim">
                <div>
                  <h2>강사 인사이트 4모듈</h2>
                  <p className="muted">노션 마스터 기준: 인사이트 없는 분석지는 발행하지 않습니다.</p>
                </div>
              </div>
              <div className="insightGrid">
                <label>
                  A. 총평
                  <textarea value={selectedAnalysis.insightSummary} onChange={(event) => update("insightSummary", event.target.value)} rows="7" />
                </label>
                <label>
                  B. 단원별 인사이트
                  <textarea value={selectedAnalysis.insightUnits} onChange={(event) => update("insightUnits", event.target.value)} rows="7" />
                </label>
                <label>
                  C. 킬러문항 분석
                  <textarea value={selectedAnalysis.insightKiller} onChange={(event) => update("insightKiller", event.target.value)} rows="7" />
                </label>
                <label>
                  D. 학습 방향
                  <textarea value={selectedAnalysis.insightDirection} onChange={(event) => update("insightDirection", event.target.value)} rows="7" />
                </label>
              </div>
            </section>
            ) : null}

            {currentStage === "최종 편집" ? (
            <section className="analysisOutputGrid">
              <article className="panel outputCard">
                <div className="sectionHeader slim">
                  <h2>학생 분석지</h2>
                  <span>A+B+D</span>
                </div>
                <textarea value={selectedAnalysis.studentAnalysisDraft} onChange={(event) => update("studentAnalysisDraft", event.target.value)} rows="10" />
              </article>
              <article className="panel outputCard">
                <div className="sectionHeader slim">
                  <h2>블로그 초안</h2>
                  <span>A+B+C+D</span>
                </div>
                <textarea value={selectedAnalysis.blogDraft} onChange={(event) => update("blogDraft", event.target.value)} rows="10" />
              </article>
              <article className="panel outputCard">
                <div className="sectionHeader slim">
                  <h2>인스타 카드뉴스</h2>
                  <span>7장 구성</span>
                </div>
                <textarea value={selectedAnalysis.instagramDraft} onChange={(event) => update("instagramDraft", event.target.value)} rows="10" />
              </article>
            </section>
            ) : null}

            {currentStage === "발행 완료" ? (
            <section className="panel analysisPublishPanel">
              <div className="sectionHeader slim">
                <div>
                  <h2>발행 완료 확인</h2>
                  <p className="muted">학생 분석지, 블로그 초안, 인스타 카드뉴스를 최종 발행 전에 한 번에 확인합니다.</p>
                </div>
                <span className="countBadge">{selectedAnalysis.aiStatus || "대기"}</span>
              </div>
              <div className="publishSummaryGrid">
                <article>
                  <strong>시험</strong>
                  <span>{selectedAnalysis.schoolName} {selectedAnalysis.grade}</span>
                  <small>{selectedAnalysis.examName} · {selectedAnalysis.subject}</small>
                </article>
                <article>
                  <strong>AI 상태</strong>
                  <span>{selectedAnalysis.aiStatus || "대기"}</span>
                  <small>{selectedAnalysis.aiLastRunAt || "아직 실행 전"}</small>
                </article>
                <article>
                  <strong>발행물</strong>
                  <span>3종</span>
                  <small>학생 분석지 · 블로그 · 인스타</small>
                </article>
              </div>
              <div className="publishPreviewList">
                <label>
                  학생 분석지
                  <textarea value={selectedAnalysis.studentAnalysisDraft} onChange={(event) => update("studentAnalysisDraft", event.target.value)} rows="7" />
                </label>
                <label>
                  블로그 초안
                  <textarea value={selectedAnalysis.blogDraft} onChange={(event) => update("blogDraft", event.target.value)} rows="7" />
                </label>
                <label>
                  인스타 카드뉴스
                  <textarea value={selectedAnalysis.instagramDraft} onChange={(event) => update("instagramDraft", event.target.value)} rows="7" />
                </label>
              </div>
            </section>
            ) : null}
          </section>
        ) : (
          <section className="panel emptyPortalPanel">
            <strong>아직 시험분석이 없습니다.</strong>
            <button className="primaryButton" onClick={onAddAnalysis} type="button">첫 분석 만들기</button>
          </section>
        )}
      </div>
    </section>
  );
}

function SchoolCalendarCenter({ events, rows, onAddEvent, onDeleteEvent, onUpdateExamPrepRow, onUpdateEvent }) {
  const [selectedMonth, setSelectedMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [schoolFilter, setSchoolFilter] = useState("전체 학교");
  const [calendarFilter, setCalendarFilter] = useState("all");
  const [isFormCollapsed, setIsFormCollapsed] = useState(false);
  const [newEvent, setNewEvent] = useState({
    schoolName: rows[0]?.schoolName ?? "",
    date: today,
    endDate: "",
    title: "",
    type: "examPeriod",
    color: "#dc2626",
    examSubject: "",
    memo: ""
  });
  const schools = [...new Set(rows.map((row) => row.schoolName).filter(Boolean))];
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
  const manualEvents = events.filter((event) => !String(event.eventId ?? "").startsWith("event_exam_"));
  const academicEvents = [...examEvents, ...manualEvents].sort((a, b) => a.date.localeCompare(b.date));
  const filteredEvents = academicEvents.filter(
    (event) => schoolFilter === "전체 학교" || event.schoolName === schoolFilter
  );
  const calendarDisplayEvents = filteredEvents.filter((event) => (
    calendarFilter === "all" ? true : getSchoolCalendarFilterGroup(event) === calendarFilter
  ));
  const selectedDateEvents = calendarDisplayEvents.filter((event) => isDateWithinEvent(selectedDate, event));

  function shiftMonth(amount) {
    const [year, month] = selectedMonth.split("-").map(Number);
    const next = new Date(Date.UTC(year, month - 1 + amount, 1));
    const nextDate = `${next.getUTCFullYear()}-${String(next.getUTCMonth() + 1).padStart(2, "0")}-01`;
    setSelectedMonth(nextDate);
  }

  function submitNewEvent() {
    const schoolName = newEvent.schoolName || schools[0] || "학교 미입력";
    const subjectTitle = newEvent.examSubject.trim() || (newEvent.type === "mathExam" ? "수학시험" : "");
    const fallbackTitle = joinCalendarLabel(schoolName, subjectTitle);
    const title = newEvent.title.trim() || fallbackTitle;
    if (!newEvent.date || !title) return;
    const createsMathExamMarker = newEvent.type !== "mathExam" && Boolean(subjectTitle);
    onAddEvent({
      ...newEvent,
      schoolName,
      title,
      examSubject: subjectTitle
    });
    if (createsMathExamMarker) {
      onAddEvent({
        ...newEvent,
        eventId: `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        type: "mathExam",
        endDate: "",
        schoolName,
        title: joinCalendarLabel(schoolName, subjectTitle),
        examSubject: subjectTitle,
        color: "#dc2626"
      });
    }
    setSelectedDate(newEvent.date);
    setSelectedMonth(newEvent.date);
    setNewEvent((current) => ({ ...current, title: "", examSubject: "", memo: "" }));
  }

  function openDateModal(date) {
    setSelectedDate(date);
    setIsDateModalOpen(true);
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
      if (event.type === "mathExam" && field === "date") {
        const entries = normalizeMathExamEntries(sourceRow ?? {});
        const fallbackEntries = entries.length ? entries : [createMathExamEntry(sourceRow ?? {}, 0)];
        const targetIndex = typeof event.mathExamEntryIndex === "number"
          ? event.mathExamEntryIndex
          : fallbackEntries.findIndex((entry) => entry.id === event.mathExamEntryId);
        const safeIndex = targetIndex >= 0 ? targetIndex : 0;
        const nextEntries = fallbackEntries.map((entry, index) => (
          index === safeIndex ? { ...entry, date: value } : entry
        ));
        onUpdateExamPrepRow?.(event.examPrepId, "mathExamDates", nextEntries);
        onUpdateExamPrepRow?.(event.examPrepId, "mathExamDate", syncPrimaryMathExamDate(nextEntries));
        return;
      }
    }
    onUpdateEvent(event.eventId, field, value);
  }

  return (
    <section className="schoolCalendarPage">
      <header className="schoolCalendarHeader">
        <div>
          <h1>학사일정</h1>
          <p className="muted">학교별 시험, 행사, 방학 일정을 등록하면 수업일지와 커리큘럼 일정관리에도 표시됩니다.</p>
        </div>
        <select value={schoolFilter} onChange={(event) => setSchoolFilter(event.target.value)}>
          <option value="전체 학교">전체 학교</option>
          {schools.map((school) => (
            <option key={school} value={school}>{school}</option>
          ))}
        </select>
      </header>

      <div className={isFormCollapsed ? "schoolCalendarLayout formCollapsed" : "schoolCalendarLayout"}>
        <aside className={isFormCollapsed ? "panel schoolEventFormPanel collapsed" : "panel schoolEventFormPanel"}>
          <div className="schoolFormHeader">
            {isFormCollapsed ? null : <h2>일정 등록</h2>}
            <button
              aria-label={isFormCollapsed ? "일정 등록 펼치기" : "일정 등록 접기"}
              className="schoolFormToggle"
              onClick={() => setIsFormCollapsed((current) => !current)}
              type="button"
            >
              {isFormCollapsed ? "›" : "‹"}
            </button>
          </div>
          {isFormCollapsed ? (
            <div className="schoolFormCollapsedHint">일정 등록</div>
          ) : (
            <>
              <label>
                학교
                <select value={newEvent.schoolName} onChange={(event) => setNewEvent((current) => ({ ...current, schoolName: event.target.value }))}>
                  <option value="">학교 선택</option>
                  {schools.map((school) => (
                    <option key={school} value={school}>{school}</option>
                  ))}
                </select>
              </label>
              <label>
                일정명
                <input value={newEvent.title} onChange={(event) => setNewEvent((current) => ({ ...current, title: event.target.value }))} placeholder="예: 1학기 기말고사" />
              </label>
              <label>
                일정 종류
                <select value={newEvent.type} onChange={(event) => setNewEvent((current) => ({ ...current, type: event.target.value }))}>
                  {Object.entries(eventTypeLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
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
              <div className="examSubjectBox">
                <div className="sectionHeader slim">
                  <strong>날짜별 시험 과목</strong>
                  <span>{newEvent.date.slice(5).replace("-", ".")}</span>
                </div>
                <div className="examSubjectRow">
                  <b>{newEvent.date.slice(5)} ({["일", "월", "화", "수", "목", "금", "토"][new Date(`${newEvent.date}T00:00:00+09:00`).getDay()]})</b>
                  <input value={newEvent.examSubject} onChange={(event) => setNewEvent((current) => ({ ...current, examSubject: event.target.value }))} placeholder="예: 수학" />
                </div>
              </div>
              <label>
                메모
                <textarea value={newEvent.memo} onChange={(event) => setNewEvent((current) => ({ ...current, memo: event.target.value }))} placeholder="필요한 메모" rows="4" />
              </label>
              <button className="primaryButton full" onClick={submitNewEvent} type="button">일정 등록</button>
            </>
          )}
        </aside>

        <section className="panel schoolCalendarMainPanel">
          <div className="schoolMonthHeader">
            <button className="iconButton" onClick={() => shiftMonth(-1)} type="button">‹</button>
            <h2>{formatMonthTitle(selectedMonth)}</h2>
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
              const visibleDayEvents = [
                ...dayEvents.filter((event) => event.type === "examPeriod" || event.type === "mathExam"),
                ...dayEvents.filter((event) => event.type !== "examPeriod" && event.type !== "mathExam").slice(0, 2)
              ];
              const periodEvents = visibleDayEvents.filter((event) => event.type === "examPeriod");
              const mathExamEvents = visibleDayEvents.filter((event) => event.type === "mathExam");
              const regularEvents = visibleDayEvents.filter((event) => event.type !== "examPeriod" && event.type !== "mathExam");
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
                      {periodEvents.map((event) => {
                        const isPeriodBar = true;
                        return (
                          <span
                            className={`schoolEventPill event-${event.type}${isPeriodBar ? ` periodBar ${getPeriodBarClass(day.date, event)}` : ""}`}
                            key={event.eventId}
                            style={{ backgroundColor: event.color ?? undefined }}
                            title={event.title}
                          />
                        );
                      })}
                    </span>
                    <span className="schoolMathExamLayer">
                      {mathExamEvents.map((event, mathTabIndex) => {
                        const eventLabel = formatCalendarEventLabel(event);
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
                        const eventLabel = formatCalendarEventLabel(event);
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
  onDeleteEvent,
  onUpdateEvent,
  schools,
  selectedDate
}) {
  return (
    <Modal className="schoolDateScheduleModal" title={`${selectedDate} 일정`} subtitle="일정 내용과 색상을 확인하고 수정합니다." onClose={onClose}>
      {events.length === 0 ? (
        <div className="emptyState">선택한 날짜에 등록된 일정이 없습니다.</div>
      ) : (
        <div className="schoolDateEventStack">
          {events.map((event) => {
            const canEditDerivedDate = event.derived && ["examPeriod", "mathExam"].includes(event.type);
            const canEditEventDetails = !event.derived;
            return (
              <article className="schoolDateEventEditor" key={event.eventId}>
                <div className="schoolDateEventEditorTop">
                  <strong>{event.title}</strong>
                  {event.derived ? <span>시험관리 연동</span> : <button className="dangerSoftButton" onClick={() => onDeleteEvent(event.eventId)} type="button">삭제</button>}
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
                      학교
                      <select disabled={!canEditEventDetails} value={event.schoolName} onChange={(change) => onUpdateEvent(event, "schoolName", change.target.value)}>
                        {[event.schoolName, ...schools].filter(Boolean).filter((school, index, array) => array.indexOf(school) === index).map((school) => (
                          <option key={school} value={school}>{school}</option>
                        ))}
                      </select>
                    </label>
                  )}
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
  const classStudents = students.filter((student) => student.defaultClassTemplateId === selectedTemplate?.classTemplateId);

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
          const count = students.filter((student) => student.defaultClassTemplateId === template.classTemplateId).length;
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
            {students.map((student) => {
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
                  <div className="aiUploadBox compact">
                    <strong>파일 선택 또는 드래그</strong>
                    <span>파일 1개 · 최대 50MB · Ctrl+V 붙여넣기</span>
                    <button className="softButton" type="button">파일 업로드</button>
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
  onUpdateStudent
}) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [deleteStudentId, setDeleteStudentId] = useState("");
  const [selectedClassTemplateId, setSelectedClassTemplateId] = useState("template_mwf_7_10");
  const selectedClassTemplate = templates.find(
    (template) => template.classTemplateId === selectedClassTemplateId
  );
  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? null;
  const deleteStudent = students.find((student) => student.studentId === deleteStudentId) ?? null;
  const selectedScores = scoreRecords.filter((score) => score.studentId === selectedStudent?.studentId);
  const selectedAcademyTests = academyTests.filter((item) => item.studentId === selectedStudent?.studentId);
  const visibleStudents =
    activeTab === "class"
      ? students.filter((student) => student.defaultClassTemplateId === selectedClassTemplateId)
      : students;
  const title = activeTab === "class" ? `${selectedClassTemplate?.name ?? "반별"} 학생 목록` : "전체 학생 목록";

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

  return (
    <section className="panel fullPanel">
      <div className="sectionHeader">
        <div>
          <h1>학생 목록</h1>
          <p className="muted">총 {visibleStudents.length}명</p>
        </div>
        <div className="studentListToolbar">
          <button className="primaryButton" onClick={onAddStudent} type="button">+ 학생 추가</button>
          <span className="studentStatusPill">재원 {visibleStudents.length}</span>
          <span className="studentStatusPill mutedPill">퇴원 0</span>
          <button className="greenButton" type="button">전체 확정</button>
          <button className="softButton" type="button">전체 미확정</button>
          <select aria-label="학년 필터" defaultValue="전체 학년">
            <option>전체 학년</option>
            <option>고1</option>
            <option>고2</option>
            <option>중1</option>
            <option>중2</option>
          </select>
          <select aria-label="학교 필터" defaultValue="전체 학교">
            <option>전체 학교</option>
            {[...new Set(students.map((student) => student.schoolName).filter(Boolean))].map((school) => (
              <option key={school}>{school}</option>
            ))}
          </select>
          <select aria-label="담당 필터" defaultValue="전체 담당T">
            <option>전체 담당T</option>
            <option>고태영T</option>
          </select>
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
            const count = students.filter((student) => student.defaultClassTemplateId === template.classTemplateId).length;
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
        </div>
      ) : null}

      <div className="studentListTable">
        <div className="studentListRow studentListHead">
          <span>#</span>
          <span>이름</span>
          <span>아이디</span>
          <span>PIN</span>
          <span>학년</span>
          <span>학교</span>
          <span>학생전화번호</span>
          <span>학부모전화번호</span>
          <span>출생연도</span>
          <span>현행평가</span>
          <span>추가1평가</span>
          <span>추가2평가</span>
          <span>오답수정</span>
          <span>상태</span>
          <span>퇴원</span>
          <span>삭제</span>
        </div>
        {visibleStudents.map((student, index) => (
          <div className="studentListRow" key={student.studentId}>
            <span>{index + 1}</span>
            <button
              className={selectedStudentId === student.studentId ? "studentNameButton active" : "studentNameButton"}
              onClick={() => setSelectedStudentId(student.studentId)}
              type="button"
            >
              <span className="studentInitial">{student.name?.[0] ?? "학"}</span>
              <strong>{student.name}</strong>
            </button>
            <input
              aria-label={`${student.name} 아이디`}
              className="editableTextCell monoCell"
              value={student.loginId ?? ""}
              onChange={(event) => onUpdateStudent(student.studentId, "loginId", event.target.value)}
            />
            <input
              aria-label={`${student.name} PIN`}
              className="editableTextCell monoCell"
              value={student.pin ?? ""}
              onChange={(event) => onUpdateStudent(student.studentId, "pin", event.target.value)}
            />
            <input
              aria-label={`${student.name} 학년`}
              className="editableTextCell gradeBadgeInput"
              value={student.grade || ""}
              onChange={(event) => onUpdateStudent(student.studentId, "grade", event.target.value)}
            />
            <input
              aria-label={`${student.name} 학교`}
              className="editableTextCell"
              value={student.schoolName || ""}
              onChange={(event) => onUpdateStudent(student.studentId, "schoolName", event.target.value)}
            />
            <input
              aria-label={`${student.name} 학생 전화번호`}
              className="editableTextCell monoCell"
              inputMode="tel"
              value={student.studentPhone || ""}
              onChange={(event) => onUpdateStudent(student.studentId, "studentPhone", event.target.value)}
            />
            <input
              aria-label={`${student.name} 학부모 전화번호`}
              className="editableTextCell monoCell"
              inputMode="tel"
              value={student.parentPhone || ""}
              onChange={(event) => onUpdateStudent(student.studentId, "parentPhone", event.target.value)}
            />
            <select
              value={student.birthYear ?? ""}
              onChange={(event) => onUpdateStudent(student.studentId, "birthYear", event.target.value)}
            >
              <option value="">-</option>
              {["2007", "2008", "2009", "2010", "2011", "2012", "2013"].map((year) => (
                <option key={year} value={year}>{year}년</option>
              ))}
            </select>
            <select
              value={student.currentEvaluation ?? "-"}
              onChange={(event) => onUpdateStudent(student.studentId, "currentEvaluation", event.target.value)}
            >
              <option>-</option>
              <option>공수1 누적테스트</option>
              <option>단원테스트</option>
              <option>내신대비</option>
            </select>
            <select
              value={student.extraEvaluation1 ?? "-"}
              onChange={(event) => onUpdateStudent(student.studentId, "extraEvaluation1", event.target.value)}
            >
              <option>-</option>
              <option>추가1평가</option>
              <option>보충테스트</option>
            </select>
            <select
              value={student.extraEvaluation2 ?? "-"}
              onChange={(event) => onUpdateStudent(student.studentId, "extraEvaluation2", event.target.value)}
            >
              <option>-</option>
              <option>추가2평가</option>
              <option>심화테스트</option>
            </select>
            <select
              value={student.correctionAvailable ?? "가능"}
              onChange={(event) => onUpdateStudent(student.studentId, "correctionAvailable", event.target.value)}
            >
              <option>가능</option>
              <option>보류</option>
              <option>불가</option>
            </select>
            <button
              className={student.confirmed === false ? "statusText danger" : "statusText"}
              onClick={() => onUpdateStudent(student.studentId, "confirmed", student.confirmed === false)}
              type="button"
            >
              {student.confirmed === false ? "미확정" : "확정"}
            </button>
            <button className="withdrawButton" type="button">퇴원</button>
            <button
              aria-label={`${student.name} 삭제`}
              className="trashButton"
              onClick={() => setDeleteStudentId(student.studentId)}
              type="button"
            >
              🗑
            </button>
          </div>
        ))}
        {visibleStudents.length === 0 ? (
          <div className="emptyState studentListEmpty">이 반에 배정된 학생이 없습니다.</div>
        ) : null}
      </div>

      {selectedStudent ? (
        <StudentProfileModal
          academyTests={selectedAcademyTests}
          className={selectedClassTemplate?.name ?? "전체"}
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
          subtitle="학생을 숨김 처리하면 목록과 수업 명단에서는 제외되고, DB에는 보류 상태로 보존됩니다."
          title="학생 숨김 확인"
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
            <p className="dangerCopy">정말 이 학생을 숨김 처리할까요? 실제 DB에서는 삭제하지 않고 보류 상태로 보존합니다.</p>
          </div>
          <div className="deleteConfirmActions">
            <button className="softButton" onClick={() => setDeleteStudentId("")} type="button">취소</button>
            <button className="dangerButton" onClick={confirmDeleteStudent} type="button">학생 숨김</button>
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
  const studentHomeworks = homeworks.filter((homework) => homework.studentId === selectedStudent?.studentId);
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
  homeworks,
  lessons = [],
  materials = [],
  records = [],
  reportSnapshots,
  scoreRecords = [],
  students,
  sessionStudentId = "",
  previewMode = false,
  onLogout,
  onStudentCheckHomework,
  onStudentCreateHomework,
  onStudentDeleteHomework,
  onStudentUpdateHomework
}) {
  const [selectedStudentId, setSelectedStudentId] = useState(
    sessionStudentId || students.find((student) => student.name === "TestS12")?.studentId || students[0]?.studentId || ""
  );
  const [activeTab, setActiveTab] = useState("today");
  const [myPageTab, setMyPageTab] = useState("stats");
  const [deleteHomeworkTarget, setDeleteHomeworkTarget] = useState(null);
  const [homeworkForm, setHomeworkForm] = useState({
    type: "current",
    title: "",
    subject: "공통수학1",
    totalProblems: "30",
    assignedDate: today,
    dueDate: "2026-06-17",
    maxDailyProblems: "",
    includeWeekend: true
  });

  const selectedStudent = students.find((student) => student.studentId === selectedStudentId) ?? students[0];
  const studentHomeworks = homeworks.filter((homework) => homework.studentId === selectedStudent?.studentId);
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
  const studentScoreRecords = scoreRecords.filter((score) => score.studentId === selectedStudent?.studentId);
  const latestTeacherHomework = studentHomeworks
    .filter((homework) => homework.createdByRole !== "student")
    .sort((a, b) => b.assignedDate.localeCompare(a.assignedDate))[0];

  useEffect(() => {
    if (sessionStudentId) setSelectedStudentId(sessionStudentId);
  }, [sessionStudentId]);

  function updateHomeworkForm(field, value) {
    setHomeworkForm((current) => ({ ...current, [field]: value }));
  }

  function submitHomeworkForm(event) {
    event.preventDefault();
    if (!selectedStudent || !homeworkForm.title.trim()) return;

    const homeworkValues = {
      studentId: selectedStudent.studentId,
      title: homeworkForm.title.trim(),
      subject: homeworkForm.subject,
      totalProblems: Number(homeworkForm.totalProblems || 0),
      homeworkType: homeworkForm.type,
      assignedDate: homeworkForm.assignedDate,
      dueDate: homeworkForm.dueDate,
      maxDailyProblems: Number(homeworkForm.maxDailyProblems || 0),
      includeWeekend: homeworkForm.includeWeekend
    };

    onStudentCreateHomework(homeworkValues);
    setHomeworkForm((current) => ({ ...current, title: "" }));
    setActiveTab("all");
  }

  function handleDeleteHomework() {
    if (!deleteHomeworkTarget) return;
    onStudentDeleteHomework(deleteHomeworkTarget.homeworkId);
    setDeleteHomeworkTarget(null);
  }

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
            ["register", "등록"],
            ["all", "전체"],
            ["materials", "자료함"],
            ["curriculum", "커리큘럼"],
            ["evaluation", "평가"],
            ["mypage", "마이 페이지"]
          ].map(([id, label]) => (
            <button className={activeTab === id ? "active" : ""} key={id} onClick={() => setActiveTab(id)} type="button">
              {label}
            </button>
          ))}
        </div>

        {activeTab === "today" ? (
          <StudentTodayTab
            overdueHomeworks={overdueHomeworks}
            prepNotices={studentPrepNotices}
            todayHomeworks={todayHomeworks}
            onStudentCheckHomework={onStudentCheckHomework}
          />
        ) : null}

        {activeTab === "register" ? (
          <StudentRegisterTab
            form={homeworkForm}
            latestTeacherHomework={latestTeacherHomework}
            onSubmit={submitHomeworkForm}
            onUpdate={updateHomeworkForm}
          />
        ) : null}

        {activeTab === "all" ? (
          <StudentAllHomeworkTab
            homeworks={studentHomeworks}
            onDeleteHomework={setDeleteHomeworkTarget}
            onUpdateHomework={onStudentUpdateHomework}
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
      {deleteHomeworkTarget ? (
        <Modal
          className="homeworkDeleteModal"
          onClose={() => setDeleteHomeworkTarget(null)}
          subtitle="삭제하면 학생 화면의 숙제 목록에서 사라집니다."
          title="숙제를 삭제할까요?"
        >
          <div className="deleteConfirmBody">
            <div className="deleteConfirmStudent">
              <strong>{deleteHomeworkTarget.title}</strong>
              <span>{deleteHomeworkTarget.assignedDate} ~ {deleteHomeworkTarget.dueDate}</span>
            </div>
            <p className="dangerCopy">삭제 후에는 화면에서 바로 복구할 수 없습니다.</p>
            <div className="deleteConfirmActions">
              <button className="softButton" onClick={() => setDeleteHomeworkTarget(null)} type="button">취소</button>
              <button className="dangerButton" onClick={handleDeleteHomework} type="button">삭제</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </section>
  );
}

function StudentTodayTab({ overdueHomeworks, prepNotices = [], todayHomeworks, onStudentCheckHomework }) {
  return (
    <>
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
      <div className="sectionHeader">
        <div>
          <h2>오늘 해야 할 숙제</h2>
          <p className="muted">완료 체크하면 선생님 화면에 즉시 반영됩니다.</p>
        </div>
      </div>
      <div className="homeworkStack">
        {todayHomeworks.length === 0 ? <div className="emptyHomeworkBox">오늘 배정된 숙제가 없습니다.</div> : null}
        {todayHomeworks.map((homework) => (
          <HomeworkActionCard homework={homework} key={homework.homeworkId} onStudentCheckHomework={onStudentCheckHomework} />
        ))}
      </div>
      {overdueHomeworks.length ? (
        <div className="warningBand">⚠️ 밀린 숙제가 있습니다. 오늘 카드나 전체 탭에서 재분배를 확인하세요.</div>
      ) : null}
    </>
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
              <p className="muted">학부모 화면은 열람 전용입니다. 재분배, 수정, 삭제는 표시하지 않습니다.</p>
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
                  <strong>{homework.teacherStatus ?? "unverified"}</strong>
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

function StudentRegisterTab({ form, latestTeacherHomework, onSubmit, onUpdate }) {
  const calendarDays = Array.from({ length: 30 }, (_, index) => index + 1);
  const startDay = Number(form.assignedDate?.split("-")[2] ?? 0);
  const endDay = Number(form.dueDate?.split("-")[2] ?? 0);
  const selectedDays = calendarDays.filter((day) => day >= startDay && day <= endDay);
  const dailyProblemCount =
    selectedDays.length > 0 ? Math.ceil(Number(form.totalProblems || 0) / selectedDays.length) : 0;

  return (
    <form className="studentFormPanel studentRegisterPanel" onSubmit={onSubmit}>
      <div>
        <h2>숙제 직접 등록</h2>
        <p className="muted">공지된 숙제를 입력하면 하루 분량이 자동 계산될 예정입니다.</p>
      </div>

      <div className="noticeBox teacherHomeworkNotice">
        <strong>📌 선생님이 공지한 최신 숙제</strong>
        <span>{latestTeacherHomework ? latestTeacherHomework.title : "아직 공지된 숙제가 없습니다."}</span>
      </div>

      <label>종류</label>
      <div className="segmentedControl homeworkTypeControl">
        {[
          ["current", "현행"],
          ["extra1", "추가1"],
          ["extra2", "추가2"]
        ].map(([id, label]) => (
          <button className={form.type === id ? "active" : ""} key={id} onClick={() => onUpdate("type", id)} type="button">
            {label}
          </button>
        ))}
      </div>

      <label>
        숙제 제목
        <input value={form.title} onChange={(event) => onUpdate("title", event.target.value)} placeholder="예: 수학의정석" />
      </label>

      <div className="fieldGrid two">
        <label>
          과목
          <select value={form.subject} onChange={(event) => onUpdate("subject", event.target.value)}>
            <option>공통수학1</option>
            <option>공통수학2</option>
            <option>대수</option>
            <option>미적분</option>
          </select>
        </label>
        <label>
          총 문제 수
          <input inputMode="numeric" value={form.totalProblems} onChange={(event) => onUpdate("totalProblems", event.target.value)} placeholder="30" />
        </label>
        <label>
          시작일
          <input type="date" value={form.assignedDate} onChange={(event) => onUpdate("assignedDate", event.target.value)} />
        </label>
        <label>
          마감일
          <input type="date" value={form.dueDate} onChange={(event) => onUpdate("dueDate", event.target.value)} />
        </label>
        <label>
          하루 최대 문제 수
          <input
            inputMode="numeric"
            value={form.maxDailyProblems}
            onChange={(event) => onUpdate("maxDailyProblems", event.target.value)}
            placeholder="선택 입력"
          />
        </label>
        <label className="weekendToggle">
          <input
            checked={form.includeWeekend}
            onChange={(event) => onUpdate("includeWeekend", event.target.checked)}
            type="checkbox"
          />
          <strong>주말 포함</strong>
        </label>
      </div>

      <div className="studentDatePicker">
        <div className="studentDatePickerTop">
          <strong>날짜 선택 <span>(클릭으로 빼거나 추가)</span></strong>
          <div>
            <span><i className="dateDot included" />포함</span>
            <span><i className="dateDot excluded" />제외</span>
            <span><i className="dateDot outOfRange" />범위밖</span>
          </div>
        </div>
        <div className="studentDateMonth">
          <button type="button">‹</button>
          <strong>2026년 6월</strong>
          <button type="button">›</button>
        </div>
        <div className="studentDateGrid">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => <b key={day}>{day}</b>)}
          {calendarDays.map((day) => {
            const isSelected = selectedDays.includes(day);
            const isWeekend = [0, 6].includes((day + 1) % 7);
            const isExcluded = !form.includeWeekend && isWeekend;
            return (
              <button
                className={isSelected && !isExcluded ? "included" : isExcluded ? "excluded" : "outOfRange"}
                key={day}
                type="button"
              >
                <span>{day}</span>
                {isSelected && !isExcluded ? <small>{dailyProblemCount}문제</small> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="studentRegisterSummary">
        <span>선택일 {selectedDays.length}일</span>
        <span>하루 약 {dailyProblemCount || 0}문제</span>
        {form.maxDailyProblems ? <span>하루 최대 {form.maxDailyProblems}문제</span> : <span>하루 최대 제한 없음</span>}
      </div>

      <div className="studentRegisterActions">
        <button className="primaryButton full" type="submit">숙제 등록</button>
      </div>
    </form>
  );
}

function StudentAllHomeworkTab({ homeworks, onDeleteHomework, onUpdateHomework }) {
  const [editingHomeworkId, setEditingHomeworkId] = useState("");
  const [editForm, setEditForm] = useState(null);
  const sortedHomeworks = [...homeworks].sort((a, b) => b.assignedDate.localeCompare(a.assignedDate));

  function startEdit(homework) {
    setEditingHomeworkId(homework.homeworkId);
    setEditForm({
      title: homework.title ?? "",
      subject: homework.subject || "공통수학1",
      totalProblems: String(homework.totalProblems ?? ""),
      assignedDate: homework.assignedDate || today,
      dueDate: homework.dueDate || today,
      maxDailyProblems: String(homework.maxDailyProblems ?? ""),
      includeWeekend: homework.includeWeekend ?? true
    });
  }

  function updateEditForm(field, value) {
    setEditForm((current) => ({ ...(current ?? {}), [field]: value }));
  }

  function cancelEdit() {
    setEditingHomeworkId("");
    setEditForm(null);
  }

  function saveEdit(homework) {
    if (!editForm?.title?.trim()) return;
    onUpdateHomework(homework.homeworkId, {
      title: editForm.title.trim(),
      subject: editForm.subject,
      totalProblems: Number(editForm.totalProblems || 0),
      assignedDate: editForm.assignedDate,
      dueDate: editForm.dueDate,
      maxDailyProblems: Number(editForm.maxDailyProblems || 0),
      includeWeekend: editForm.includeWeekend
    });
    cancelEdit();
  }

  return (
    <div className="studentAllPanel">
      <div>
        <h2>등록된 숙제 전체</h2>
        <p className="muted">밀린 숙제는 자동 재분배로 남은 날짜에 다시 나눌 수 있습니다.</p>
      </div>
      {sortedHomeworks.length === 0 ? <div className="emptyHomeworkBox">등록된 숙제가 없습니다.</div> : null}
      {sortedHomeworks.map((homework) => {
        const completed = homework.teacherStatus === "verified" ? 1 : 0;
        const totalDays = Math.max(1, isHomeworkOverdue(homework) ? 5 : 2);
        const progress = Math.round((completed / totalDays) * 100);
        const isEditing = editingHomeworkId === homework.homeworkId;
        return (
          <article className={isEditing ? "studentHomeworkCard editing" : "studentHomeworkCard"} key={homework.homeworkId}>
            <div className="homeworkCardTop">
              <div>
                <strong>{homework.title}</strong>
                <span>{homework.subject ?? "공통수학1"}</span>
                <span className={isHomeworkOverdue(homework) ? "statusRed" : "statusBlue"}>
                  {isHomeworkOverdue(homework) ? "밀림" : "현행"}
                </span>
              </div>
              <div className="cardActions">
                {isEditing ? (
                  <>
                    <button className="primaryButton compact" onClick={() => saveEdit(homework)} type="button">저장</button>
                    <button className="softButton" onClick={cancelEdit} type="button">취소</button>
                  </>
                ) : (
                  <>
                    <button className="softButton" onClick={() => startEdit(homework)} type="button">수정</button>
                    <button className="dangerSoftButton" onClick={() => onDeleteHomework(homework)} type="button">삭제</button>
                  </>
                )}
              </div>
            </div>
            <p>{homework.assignedDate} ~ {homework.dueDate} · 총 {homework.totalProblems ?? "-"}문제</p>
            <div className="progressRail"><span style={{ width: `${progress}%` }} /></div>
            <small>{completed}/{totalDays}일 완료 ({progress}%)</small>
            {isEditing ? (
              <div className="inlineHomeworkEditor">
                <label>
                  숙제명
                  <input value={editForm?.title ?? ""} onChange={(event) => updateEditForm("title", event.target.value)} />
                </label>
                <div className="fieldGrid two">
                  <label>
                    과목
                    <select value={editForm?.subject ?? "공통수학1"} onChange={(event) => updateEditForm("subject", event.target.value)}>
                      <option>공통수학1</option>
                      <option>공통수학2</option>
                      <option>대수</option>
                      <option>미적분</option>
                    </select>
                  </label>
                  <label>
                    총 문제 수
                    <input inputMode="numeric" value={editForm?.totalProblems ?? ""} onChange={(event) => updateEditForm("totalProblems", event.target.value)} />
                  </label>
                  <label>
                    시작일
                    <input type="date" value={editForm?.assignedDate ?? today} onChange={(event) => updateEditForm("assignedDate", event.target.value)} />
                  </label>
                  <label>
                    마감일
                    <input type="date" value={editForm?.dueDate ?? today} onChange={(event) => updateEditForm("dueDate", event.target.value)} />
                  </label>
                  <label>
                    하루 최대 문제 수
                    <input inputMode="numeric" placeholder="선택" value={editForm?.maxDailyProblems ?? ""} onChange={(event) => updateEditForm("maxDailyProblems", event.target.value)} />
                  </label>
                  <label className="weekendToggle">
                    <input
                      checked={editForm?.includeWeekend ?? true}
                      onChange={(event) => updateEditForm("includeWeekend", event.target.checked)}
                      type="checkbox"
                    />
                    <strong>주말 포함</strong>
                  </label>
                </div>
              </div>
            ) : (
              <div className={`dateStrip ${isHomeworkOverdue(homework) ? "danger" : "safe"}`}>
                <span>{homework.dueDate}</span>
                <b>{homework.title}</b>
              </div>
            )}
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

function StudentMyPageTab({ myPageTab, onChangeTab, scoreRecords = [], selectedStudent, stats, studentLessonComments = [] }) {
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
          <div className="miniMetricGrid">
            <div><strong>{stats.completionRate}%</strong><span>전체 이행률</span></div>
            <div><strong>{stats.perfectDays}</strong><span>완벽한 날 (30일)</span></div>
            <div><strong>{stats.total}</strong><span>등록 숙제</span></div>
          </div>
          <div className="progressList">
            <h3>숙제 이행률</h3>
            <ProgressLine label="2026년 05월" value={25} suffix="1/4일 · 25%" />
            <ProgressLine label="2026년 06월" value={stats.completionRate} suffix={`${stats.done}/${stats.total}개 · ${stats.completionRate}%`} />
          </div>
          <StudentCalendar />
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

function StudentCalendar() {
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <div className="studentCalendar">
      <h3>숙제 이행 달력</h3>
      <strong>2026년 6월</strong>
      <div className="miniCalendarGrid">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => <b key={day}>{day}</b>)}
        {days.map((day) => <span className={day <= 3 ? "marked" : ""} key={day}>{day}</span>)}
      </div>
    </div>
  );
}

function HomeworkActionCard({ homework, onStudentCheckHomework }) {
  const isChecked = homework.studentStatus === "checked_done";
  return (
    <article className="homeworkActionCard">
      <div>
        <strong>{homework.title}</strong>
        <p>{homework.assignedDate} → {homework.dueDate}</p>
        <small>학생: {homework.studentStatus ?? "not_started"} · 강사: {homework.teacherStatus ?? "unverified"}</small>
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
  onScheduleTask,
  onUpdateTask
}) {
  const [selectedSupplementStudentId, setSelectedSupplementStudentId] = useState("");
  const [activeSupplementTab, setActiveSupplementTab] = useState("homework_makeup");
  const overdueHomeworks = homeworks.filter((homework) => isHomeworkOverdue(homework)).slice(0, 8);
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

  const selectedSupplementStudent = students.find((student) => student.studentId === selectedSupplementStudentId);
  const selectedSupplementTasks = tasks.filter(
    (task) => task.studentId === selectedSupplementStudentId && task.taskType === activeSupplementTab
  );
  const supplementTabDefinitions = [
    {
      id: "homework_makeup",
      title: "숙제보충",
      subtitle: "밀린 숙제를 보충 과제로 전환합니다.",
      count: overdueHomeworks.length,
      emptyText: "밀린 숙제가 없습니다.",
      items: overdueHomeworks.map((homework) => ({
        id: homework.homeworkId,
        studentId: homework.studentId,
        title: homework.title,
        meta: `${homework.dueDate} 마감`,
        actionLabel: "보충 생성",
        task: {
          taskType: "homework_makeup",
          studentId: homework.studentId,
          sourceId: homework.homeworkId,
          sourceLabel: homework.title,
          reason: "밀린 숙제",
          supplementMethod: "next_lesson"
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
          supplementMethod: "recorded_lecture"
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

  return (
    <section className="followUpPage">
      <div className="pageTop">
        <div>
          <h1>보충관리</h1>
          <p className="muted">숙제보충, 결석보강, 재시험을 별도로 관리합니다.</p>
        </div>
        <span className="countBadge">{tasks.length}개 진행</span>
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
                </div>
                <button
                  className={existingTask ? "softButton subtle" : "softButton"}
                  onClick={() => (existingTask ? setSelectedSupplementStudentId(item.studentId) : createSupplementTask(item.task))}
                  type="button"
                >
                  {existingTask ? "일정 관리" : item.actionLabel}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {selectedSupplementStudent ? (
        <SupplementStudentModal
          onClose={() => setSelectedSupplementStudentId("")}
          onScheduleTask={onScheduleTask}
          onUpdateTask={onUpdateTask}
          student={selectedSupplementStudent}
          tabTitle={activeTabData.title}
          tasks={selectedSupplementTasks}
        />
      ) : null}
    </section>
  );
}

function SupplementStudentModal({
  onClose,
  onScheduleTask,
  onUpdateTask,
  student,
  tabTitle,
  tasks
}) {
  return (
    <Modal
      className="supplementStudentModal"
      title={`${student.name} ${tabTitle}`}
      subtitle={`${student.grade ?? "-"} · ${student.schoolName ?? "학교 미입력"}`}
      onClose={onClose}
    >
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
              return (
                <article className="taskCard" key={task.makeupTaskId}>
                  <div className="taskCardTop">
                    <div>
                      <strong>{followUpTypeLabel(task.taskType)}</strong>
                      <p>{task.sourceLabel}</p>
                      <small>{task.reason} · {supplementMethodLabel(task)} · 배정 {task.attemptCount ?? 0}회</small>
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
                  <label className="taskOptionBlock">
                    보충 방식
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
                  <div className="fieldGrid two">
                    <label>
                      배정일
                      <input type="date" value={task.scheduledDate} onChange={(event) => onUpdateTask(task.makeupTaskId, "scheduledDate", event.target.value)} />
                    </label>
                    <label>
                      시간
                      <input type="time" value={task.scheduledTime} onChange={(event) => onUpdateTask(task.makeupTaskId, "scheduledTime", event.target.value)} />
                    </label>
                  </div>
                  <label className="notificationDraftField">
                    알림톡 문구
                    <span>아래 문구가 보충 일정 알림톡 초안에 반영됩니다. 발송은 별도 확정 단계에서 진행합니다.</span>
                    <textarea
                      value={visibleDraft}
                      onChange={(event) => onUpdateTask(task.makeupTaskId, "notificationDraft", event.target.value)}
                    />
                  </label>
                  <div className="modalActions">
                    <button className="softButton" onClick={() => onUpdateTask(task.makeupTaskId, "notificationDraft", freshDraft)} type="button">
                      알림톡 문구 작성
                    </button>
                    <button
                      className="softButton"
                      disabled={!task.scheduledDate || !task.scheduledTime}
                      onClick={() => onScheduleTask(task)}
                      title={!task.scheduledDate || !task.scheduledTime ? "배정일과 시간을 먼저 입력하세요." : "수업일지 캘린더에 반영합니다."}
                      type="button"
                    >
                      {task.linkedLessonId ? "수업일지 수정 반영" : "수업일지 반영"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
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

function OverdueHomework({ homeworks, students, onTeacherVerifyHomework }) {
  const unresolvedHomeworks = homeworks
    .filter((homework) => homework.title && (isHomeworkOverdue(homework) || (homework.teacherStatus ?? "unverified") !== "verified"))
    .sort((a, b) => String(a.assignedDate ?? "").localeCompare(String(b.assignedDate ?? "")));
  const [gradeFilter, setGradeFilter] = useState("전체");
  const [activeMetric, setActiveMetric] = useState("all");
  const [selectedStudentId, setSelectedStudentId] = useState(students[0]?.studentId ?? "");
  const filteredStudents =
    gradeFilter === "전체" ? students : students.filter((student) => (student.grade || "미입력") === gradeFilter);
  const registeredStudentIds = new Set(homeworks.filter((homework) => homework.title).map((homework) => homework.studentId));
  const todayIncompleteStudentIds = new Set(unresolvedHomeworks.filter((homework) => homework.dueDate === today).map((homework) => homework.studentId));
  const overdueStudentIds = new Set(unresolvedHomeworks.filter((homework) => isHomeworkOverdue(homework)).map((homework) => homework.studentId));
  const metricLabels = {
    all: "전체 학생",
    overdue: "밀린 학생",
    registered: "숙제 등록 학생",
    today: "오늘 미완료"
  };
  const metricMeta = {
    all: {
      detailHint: "전체 숙제 기록",
      detailTitle: "전체 숙제",
      emptyHomeworks: "선택한 학생의 숙제 기록이 없습니다.",
      emptyStudents: "등록된 학생이 없습니다.",
      studentHint: "등록된 전체 학생을 확인합니다.",
      studentTitle: "전체 학생"
    },
    overdue: {
      detailHint: "기한이 지난 미확인 숙제",
      detailTitle: "밀린 숙제",
      emptyHomeworks: "선택한 학생의 밀린 숙제가 없습니다.",
      emptyStudents: "밀린 숙제가 있는 학생이 없습니다.",
      studentHint: "기한이 지난 숙제가 있는 학생만 봅니다.",
      studentTitle: "밀린 학생"
    },
    registered: {
      detailHint: "등록된 숙제 전체",
      detailTitle: "등록 숙제",
      emptyHomeworks: "선택한 학생의 등록 숙제가 없습니다.",
      emptyStudents: "숙제가 등록된 학생이 없습니다.",
      studentHint: "숙제 플래너에 숙제가 등록된 학생만 봅니다.",
      studentTitle: "숙제 등록 학생"
    },
    today: {
      detailHint: "오늘 기한이지만 아직 확인되지 않은 숙제",
      detailTitle: "오늘 미완료 숙제",
      emptyHomeworks: "선택한 학생의 오늘 미완료 숙제가 없습니다.",
      emptyStudents: "오늘 미완료 숙제가 있는 학생이 없습니다.",
      studentHint: "오늘 처리해야 하는 미완료 숙제가 있는 학생만 봅니다.",
      studentTitle: "오늘 미완료"
    }
  };
  const activeMetricMeta = metricMeta[activeMetric] ?? metricMeta.all;
  const visibleStudents = filteredStudents.filter((student) => {
    if (activeMetric === "registered") return registeredStudentIds.has(student.studentId);
    if (activeMetric === "today") return todayIncompleteStudentIds.has(student.studentId);
    if (activeMetric === "overdue") return overdueStudentIds.has(student.studentId);
    return true;
  });
  const visibleStudentIds = visibleStudents.map((student) => student.studentId).join("|");
  const firstVisibleStudentId = visibleStudents[0]?.studentId ?? "";
  const selectedStudent =
    visibleStudents.find((student) => student.studentId === selectedStudentId) ?? visibleStudents[0] ?? null;
  const selectedHomeworks = selectedStudent ? getStudentHomeworksByMetric(selectedStudent.studentId) : [];
  const registeredStudentCount = registeredStudentIds.size;
  const todayIncompleteCount = todayIncompleteStudentIds.size;
  const overdueStudentCount = overdueStudentIds.size;

  useEffect(() => {
    if (!visibleStudentIds) {
      if (selectedStudentId) setSelectedStudentId("");
      return;
    }
    if (!visibleStudentIds.split("|").includes(selectedStudentId)) {
      setSelectedStudentId(firstVisibleStudentId);
    }
  }, [firstVisibleStudentId, selectedStudentId, visibleStudentIds]);

  function getStudentHomeworksByMetric(studentId) {
    const sortByAssignedDate = (items) =>
      [...items].sort((a, b) =>
        String(a.assignedDate ?? a.dueDate ?? "").localeCompare(String(b.assignedDate ?? b.dueDate ?? ""))
      );
    if (activeMetric === "today") {
      return sortByAssignedDate(
        unresolvedHomeworks.filter((homework) => homework.studentId === studentId && homework.dueDate === today)
      );
    }
    if (activeMetric === "overdue") {
      return sortByAssignedDate(
        unresolvedHomeworks.filter((homework) => homework.studentId === studentId && isHomeworkOverdue(homework))
      );
    }
    return sortByAssignedDate(homeworks.filter((homework) => homework.studentId === studentId && homework.title));
  }

  function getStudentHomeworkSummary(student) {
    const studentHomeworks = homeworks.filter((homework) => homework.studentId === student.studentId);
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
    if (activeMetric === "registered") return `등록 숙제 ${summary.registeredCount}건 · 진행 ${summary.progress}%`;
    if (activeMetric === "today") return `오늘 미완료 ${summary.todayCount}건`;
    if (activeMetric === "overdue") return `밀린 숙제 ${summary.overdueCount}건`;
    return `오늘 미완료 ${summary.todayCount}건 · 밀림 ${summary.overdueCount}건`;
  }

  function handleMetricClick(metric) {
    setActiveMetric(metric);
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

  return (
    <section className="homeworkStatusDashboard">
      <div className="homeworkStatusMetrics">
        <MetricCard active={activeMetric === "all"} icon="👥" label="전체 학생" value={`${students.length}명`} hint="등록된 학생 수" onClick={() => handleMetricClick("all")} />
        <MetricCard active={activeMetric === "registered"} icon="📖" label="숙제 등록 학생" value={`${registeredStudentCount}명`} hint="숙제 플래너 등록 기준" onClick={() => handleMetricClick("registered")} />
        <MetricCard active={activeMetric === "today"} icon="⏰" label="오늘 미완료" value={`${todayIncompleteCount}명`} hint="오늘 할 양 미체크" onClick={() => handleMetricClick("today")} tone="warning" />
        <MetricCard active={activeMetric === "overdue"} icon="⚠️" label="밀린 학생" value={`${overdueStudentCount}명`} hint="클릭해서 목록 보기" onClick={() => handleMetricClick("overdue")} tone="warning" />
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
                  onClick={() => setSelectedStudentId(student.studentId)}
                  type="button"
                >
                  <span className="homeworkStudentTop">
                    <strong>{student.name}</strong>
                    <small>{student.grade || "미입력"}</small>
                    <em>{summary.hasRegisteredHomework ? "등록" : "미등록"}</em>
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
                {selectedStudent ? `${selectedStudent.name} · ${activeMetricMeta.detailHint}` : "학생을 선택하세요"}
              </p>
            </div>
            <div className="detailActions">
              {selectedStudent ? <button className="softButton" type="button">👤 학생화면</button> : null}
              <button className="softButton" onClick={() => handleMetricClick("all")} type="button">전체 학생</button>
            </div>
          </div>
          {selectedHomeworks.length === 0 ? (
            <div className="emptyHomeworkBox">{activeMetricMeta.emptyHomeworks}</div>
          ) : null}
          <div className="homeworkDetailList">
            {selectedHomeworks.map((homework) => (
              <article className="homeworkDetailCard" key={homework.homeworkId}>
                <div>
                  <strong>{homework.title}</strong>
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

    </section>
  );
}

function StudentModal({ templates, onClose, onSubmit }) {
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

  function update(field, value) {
    setForm((current) => {
      const next = { ...current, [field]: value };
      if (field === "birthYear") {
        next.grade = inferGradeFromBirthYear(value);
      }
      return next;
    });
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
          </div>
          <button className="primaryButton full studentAddSubmit" onClick={() => onSubmit(form)} type="button">+ 학생 추가</button>
        </>
      ) : (
        <div className="studentBulkPlaceholder">
          <strong>엑셀 일괄 등록</strong>
          <p className="muted">이름, 출생연도, 학교, PIN 순서로 복사한 목록을 붙여넣는 기능으로 확장 예정입니다.</p>
          <textarea placeholder={"박수빈\t2010\t자운고등학교\t1234"} rows="6" />
          <button className="primaryButton full" disabled type="button">일괄 등록 준비 중</button>
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

function Modal({ backdropClassName = "", children, className = "", onClose, subtitle, title }) {
  return (
    <div className={`modalBackdrop ${backdropClassName}`}>
      <section className={`modalCard ${className}`}>
        <div className="modalHeader">
          <div>
            <h2>{title}</h2>
            {subtitle ? <p className="muted">{subtitle}</p> : null}
          </div>
          <button className="iconButton" onClick={onClose} type="button">×</button>
        </div>
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

function getLessonAlimtalkScheduledDate(lesson, delayMinutes = 0) {
  const baseTime = getDayKey(lesson?.date) === "sat" ? "18:00" : "22:30";
  const baseDate = new Date(`${lesson?.date ?? getKoreaDateString()}T${baseTime}:00+09:00`);
  baseDate.setMinutes(baseDate.getMinutes() + delayMinutes);
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

function createEmptyRecord(lesson, student) {
  return {
    lessonStudentRecordId: createLessonStudentRecordId(lesson.lessonId, student.studentId),
    lessonId: lesson.lessonId,
    studentId: student.studentId,
    attendanceStatus: "pending",
    behaviorTag: "",
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
  const attendance = attendanceLabels[record?.attendanceStatus ?? "pending"];
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
    homework.dueDate < today &&
    homework.teacherStatus !== "verified" &&
    homework.status !== "verified"
  );
}

function calculateStreak(homeworks) {
  return homeworks.filter((homework) => homework.teacherStatus === "verified").length;
}

function calculateHomeworkStats(homeworks) {
  const total = homeworks.length;
  const done = homeworks.filter((homework) => homework.teacherStatus === "verified" || homework.studentStatus === "checked_done").length;
  return {
    total,
    done,
    completionRate: total ? Math.round((done / total) * 100) : 0,
    perfectDays: homeworks.filter((homework) => homework.teacherStatus === "verified").length
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
    { id: "next_lesson", label: "다음시간까지" },
    { id: "arrival_makeup", label: "등원보충" },
    { id: "stay_after", label: "남아서 하고 가기" }
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
  return supplementMethodOptions(taskType)[0]?.id ?? "";
}

function supplementMethodLabel(task) {
  const methodId = task?.supplementMethod || supplementDefaultMethod(task?.taskType);
  return supplementMethodOptions(task?.taskType).find((option) => option.id === methodId)?.label ?? "방식 미정";
}

function createNotificationDraft(task, students) {
  const student = students.find((item) => item.studentId === task.studentId);
  const studentName = student?.name ?? "학생";
  const scheduleText = [task.scheduledDate, task.scheduledTime].filter(Boolean).join(" ");
  const sourceText = task.sourceLabel ? `${task.sourceLabel} ` : "";
  const methodId = task.supplementMethod || supplementDefaultMethod(task.taskType);
  const absenceText = task.taskType === "absence_makeup" && task.absenceReason ? ` 결석사유는 ${task.absenceReason}입니다.` : "";

  if (task.taskType === "homework_makeup") {
    if (methodId === "next_lesson") {
      return `${studentName} 학생 숙제 보충 안내드립니다.\n\n다음 수업 전까지 ${sourceText}보충을 마무리할 수 있도록 안내하겠습니다.`;
    }
    if (methodId === "arrival_makeup") {
      return `${studentName} 학생 숙제 보충 안내드립니다.\n\n${scheduleText} 등원 후 ${sourceText}보충을 진행하겠습니다.`;
    }
    if (methodId === "stay_after") {
      return `${studentName} 학생 숙제 보충 안내드립니다.\n\n${scheduleText} 수업 후 남아서 ${sourceText}보충을 마무리하겠습니다.`;
    }
  }

  if (task.taskType === "absence_makeup") {
    if (methodId === "recorded_lecture") {
      return `${studentName} 학생 결석 보강 안내드립니다.\n\n${scheduleText}에 ${sourceText}결석 보강을 녹화 강의로 진행하겠습니다.${absenceText}`;
    }
    return `${studentName} 학생 결석 보강 안내드립니다.\n\n${scheduleText}에 ${sourceText}결석 보강을 현장에서 진행하겠습니다.${absenceText}`;
  }

  if (task.taskType === "retest") {
    return `${studentName} 학생 재시험 안내드립니다.\n\n${scheduleText}에 ${sourceText}재시험을 진행하겠습니다.`;
  }

  return `${studentName} 학생 ${followUpTypeLabel(task.taskType)} 안내드립니다.\n\n${scheduleText}에 ${sourceText}관련 일정을 진행하겠습니다.`;
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
  const status = attendanceLabels[payload.attendanceStatus] ?? payload.attendanceStatus ?? "출석";
  const lateText = payload.attendanceStatus === "late" ? ` (${payload.lateMinutes || 0}분 지각)` : "";
  const reasonText = payload.reason ? `\n사유: ${payload.reason}` : "";
  return joinMessageBlocks([
    `[${academyBrandName} 출결 안내]`,
    `${payload.studentName} 학생이 ${payload.checkedAt}에 ${status}${lateText} 처리되었습니다.`,
    `수업: ${payload.lessonName}${reasonText}`
  ]);
}

function getHomeworkAction(homework) {
  if (homework.teacherStatus === "verified") return "해결됨";
  if (homework.studentStatus === "checked_done") return "강사 확인 필요";
  if (isHomeworkOverdue(homework)) return "숙제보충 필요";
  return "학생 체크 대기";
}

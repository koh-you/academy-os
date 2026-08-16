import { useEffect, useMemo, useRef, useState } from "react";
import { createExamAnalysisFinalPreviewModel, examAnalysisPreviewPalette } from "./finalPreview.js";
import { ExamAnalysisFinalPreviewPanel } from "./ExamAnalysisFinalPreviewPanel.jsx";
import { copyTextToClipboard } from "./outputPreview.js";
import { saveExamAnalysisRunContractRequest } from "./examAnalysisRunApi.js";
import { DataTableShell } from "../../shared/components/DataTableShell.jsx";
import { Disclosure, DisclosureChevron } from "../../shared/components/Disclosure.jsx";
import { EmptyState } from "../../shared/components/EmptyState.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SectionHeader } from "../../shared/components/SectionHeader.jsx";
import { StickySaveBar } from "../../shared/components/StickySaveBar.jsx";
import { WorkspaceTabs } from "../../shared/components/WorkspaceTabs.jsx";
import { apiUrl, getJsonWithTimeout, postJson, postJsonWithTimeout } from "../../shared/utils/apiClient.js";
import { readFileAsDataUrl } from "../../shared/utils/file.js";

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

function getExamAnalysisReviewSaveMismatches(reviews = [], questions = []) {
  const persistedByNumber = new Map(
    (Array.isArray(questions) ? questions : []).map((question) => [Number(question.questionNumber), createExamAnalysisReviewDraft(question)])
  );
  return (Array.isArray(reviews) ? reviews : []).filter((review) => {
    const persisted = persistedByNumber.get(Number(review.questionNumber));
    if (!persisted) return true;
    return (
      String(persisted.unitName || "") !== String(review.unitName || "") ||
      String(persisted.mainType || "") !== String(review.mainType || "") ||
      parseExamAnalysisReviewSubTypes(persisted.subTypesText).join("|") !== parseExamAnalysisReviewSubTypes(review.subTypes).join("|") ||
      String(persisted.mainTypeCode || "") !== String(review.mainTypeCode || "") ||
      normalizeExamAnalysisSsenCodeList(persisted.subTypeCodes).join("|") !== normalizeExamAnalysisSsenCodeList(review.subTypeCodes).join("|") ||
      String(persisted.difficulty || "") !== String(review.difficulty || "") ||
      String(persisted.reviewNote || "") !== String(review.reviewNote || "") ||
      Boolean(persisted.isImportantQuestion) !== Boolean(review.isImportantQuestion) ||
      Boolean(persisted.confirmed) !== Boolean(review.confirmed)
    );
  }).map((review) => Number(review.questionNumber));
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

const examAnalysisOutputInputFields = [
  {
    key: "oneLineReview",
    label: "첫 문단 핵심 요약",
    guide: "벤치마킹 글의 도입부처럼 학교/학년/고사와 이번 시험의 핵심 성격을 1~2문장으로 적습니다. 시험관리 기록지를 다시 베끼는 칸이 아니라 공개글 첫 흐름을 잡는 보충 메모입니다.",
    placeholder: "예: 2026학년도 ○○중 2학년 1학기 기말고사는 기본 개념 확인과 후반부 조건 해석이 함께 요구된 시험이었습니다."
  },
  {
    key: "flowReview",
    label: "시험 흐름/체감 난도",
    guide: "벤치마킹 글의 '전체 흐름' 단락입니다. 초반/중반/후반 문항 흐름, 체감 난도, 학생이 부담을 느낄 지점을 적습니다.",
    placeholder: "예: 초반부는 대표 유형 확인에 가까웠고, 후반부로 갈수록 그래프 해석과 조건 정리가 함께 필요한 문항이 늘었습니다."
  },
  {
    key: "scoreGapPoint",
    label: "변별 문항/흔들린 지점",
    guide: "벤치마킹 글처럼 별도 추상 제목을 만들지 않고, 주요문항과 학생들이 흔들리는 이유를 중심으로 적습니다. 변별을 만든 문항번호, 개념, 실수 지점을 짧게 정리합니다.",
    placeholder: "예: 18번과 20번에서 조건을 그래프로 해석하는 과정이 중요했고, 계산보다 식 세팅과 풀이 순서에서 흔들릴 수 있었습니다."
  },
  {
    key: "nextStudyPlan",
    label: "다음 학습 방향",
    guide: "벤치마킹 글의 마무리 학습 제안입니다. 다음 단원/방학/예비 과정과 연결해 학생이 실제로 해야 할 훈련을 적습니다.",
    placeholder: "예: 조건을 표와 식으로 정리하는 훈련, 그래프 해석, 후반부 문항을 다시 읽는 시간 관리 루틴이 필요합니다."
  },
  {
    key: "imageSlotNotes",
    label: "6개 슬라이드 유형/슬롯 메모",
    guide: "벤치마킹 글처럼 표지/시험구조/전체 흐름/주요문항/손풀이/마무리 카드가 어떻게 반복될지 적습니다. 주요문항/손풀이는 선생님 crop 이미지만 슬롯에 넣습니다.",
    placeholder: "예: 표지/시험구조/흐름/마무리는 통렌더, 주요문항 3개와 손풀이는 선생님 crop 이미지 슬롯으로 구성."
  },
  {
    key: "schoolVariationNotes",
    label: "수업/상담 연결 메모",
    guide: "벤치마킹 글의 후반부처럼 학교별 시험 분석을 수업, 보충, 특강, 상담으로 어떻게 연결할지 적습니다.",
    placeholder: "예: 학교별 기출 흐름과 유사문항을 수업/보충에 반영하고, 방학 특강은 다음 단원 심화와 연결."
  }
];

const examAnalysisGptChecklistManualFields = [
  {
    key: "checklistExamDate",
    label: "시험일",
    source: "선생님 확정 필요",
    guide: "웹앱 시험관리와 다르면 선생님 확인값을 적습니다.",
    placeholder: "예: 2026-07-08"
  },
  {
    key: "checklistExamRange",
    label: "시험범위",
    source: "웹앱 자동 입력 보완",
    guide: "웹앱/시험관리 범위가 비어 있거나 공개글용으로 다듬어야 할 때 적습니다.",
    placeholder: "예: 연립방정식 ~ 일차함수와 일차방정식의 관계"
  },
  {
    key: "checklistTextbookPublisher",
    label: "교과서/출판사",
    source: "선생님 확정 필요",
    guide: "이미 확인된 교과서와 출판사만 적습니다.",
    placeholder: "예: 미래엔(황), 천재(이)"
  },
  {
    key: "checklistGradeCut",
    label: "등급컷/예상 등급컷",
    source: "선생님 확정 필요",
    guide: "확인되지 않았으면 비워두고 아래 금지/불확실에 남깁니다.",
    placeholder: "예: 예상 1등급 컷 88점 내외"
  },
  {
    key: "checklistSourceEvidence",
    label: "부교재/모의고사/학습지 출제 근거",
    source: "선생님 확정 필요",
    guide: "부교재명, 유사유형, 학습지, 모의고사 근거를 확인된 범위에서만 적습니다.",
    placeholder: "예: 학교 학습지 반복 유형, 쎈 B단계 유사, 2024년 3월 학력평가 변형 신호"
  },
  {
    key: "checklistForbiddenTextbook",
    label: "쓰면 안 되는 교재명",
    source: "생성 금지",
    guide: "확인되지 않았거나 오해 소지가 있는 교재명을 적습니다.",
    placeholder: "예: 블랙라벨 언급 금지, 고쟁이 문항번호 미확인"
  },
  {
    key: "checklistUnconfirmedQuestions",
    label: "확인 안 된 문항번호",
    source: "생성 금지",
    guide: "AI가 주요문항/유사유형으로 쓰면 안 되는 문항번호를 적습니다.",
    placeholder: "예: 18번은 번호 재확인 전까지 공개글 사용 금지"
  },
  {
    key: "checklistAiNoGuess",
    label: "AI가 추측하면 안 되는 내용",
    source: "생성 금지",
    guide: "GPT 대화세션이 추가로 만들어내면 안 되는 사실을 적습니다.",
    placeholder: "예: 등급컷, 정확한 페이지, 교재 문항번호, 학교별 평균점수는 추측 금지"
  }
];

const examAnalysisBlogBlockFields = [
  {
    key: "blogBlockOpening",
    order: 1,
    type: "paragraph",
    label: "인사/시험 소개",
    guide: "벤치마킹 글의 시작입니다. 인사, 학교/학년/고사, 분석 목적을 짧게 적습니다.",
    benchmark: "벤치마킹 위치: 안녕하세요 -> 학교/학년/고사 소개 -> 분석 목적",
    placeholder: "예: 오늘은 2026 ○○중학교 2학년 1학기 기말고사 수학 시험을 분석해보겠습니다."
  },
  {
    key: "blogBlockStructure",
    order: 2,
    type: "paragraph",
    label: "시험 개요/구조",
    guide: "벤치마킹 글의 시험 구조입니다. 문항 구성, 배점, 시험범위, 출판사, 등급컷/예상컷이 있으면 함께 적습니다.",
    benchmark: "벤치마킹 위치: 시험 구조/시험 개요 카드 · 문항구성/배점/범위",
    placeholder: "예: 객관식 24문항, 서술형 0문항, 100점 만점. 시험범위는 연립방정식부터 일차함수와 일차방정식의 관계까지였습니다."
  },
  {
    key: "blogBlockOverallReview",
    order: 3,
    type: "highlight",
    label: "출제 흐름/체감 정리",
    guide: "벤치마킹 글의 전체 흐름 정리입니다. 쉬웠다/어려웠다로 끝내지 말고 전반부, 후반부, 조건 해석, 시간 관리처럼 흐름을 적습니다.",
    benchmark: "벤치마킹 위치: 전체 흐름/체감 난도 · 초반-후반 변화",
    placeholder: "예: 난도가 크게 튄 시험은 아니지만, 후반부 문장제와 그래프 해석에서 체감 난도가 올라간 시험이었습니다."
  },
  {
    key: "blogBlockNextStudy",
    order: 4,
    type: "paragraph",
    label: "다음 학습 방향",
    guide: "벤치마킹 글의 마무리 학습 방향입니다. 다음 단원, 방학, 예비 과정, 반복 훈련을 구체적으로 적습니다.",
    benchmark: "벤치마킹 위치: 다음 학습 방향/방학 대비 · 체크리스트/훈련 방향",
    placeholder: "예: 학교 학습지는 반복 회독하고, 조건을 표와 식으로 정리하는 훈련과 후반부 문항 시간 배분 연습이 필요합니다."
  },
  {
    key: "blogBlockAcademyTrust",
    order: 5,
    type: "paragraph",
    label: "학원 관리 문장",
    guide: "벤치마킹 글 후반부처럼 학교별 기출 흐름, 유사문항, 풀이 순서, 보충/특강 연결을 어떻게 관리하는지 적습니다.",
    benchmark: "벤치마킹 위치: 학원은 이런 시험을 대비할 때 · 분석/관리 신뢰 문장",
    placeholder: "예: 학교별 기출 흐름을 기준으로 자주 나오는 유형, 실수 지점, 유사문항, 시험장 풀이 순서를 함께 훈련합니다."
  },
  {
    key: "blogBlockCta",
    order: 6,
    type: "cta",
    label: "특강/상담 CTA",
    guide: "벤치마킹 글의 마지막 안내입니다. 방학특강, 내신대비, 상담, 위치/전화 안내를 적습니다.",
    benchmark: "벤치마킹 위치: 마감 임박 강좌 안내/상담 안내 ⬇️⬇️ · 위치 📍 · 전화 ☎",
    placeholder: "예: 2학기 내신 대비와 방학 심화 특강 상담 가능, 위치/전화 자리표시자."
  }
];

const examAnalysisOutputBenchmarkMap = [
  ["인사/소개", "인사/시험 소개 블록 -> 학교/학년/고사와 분석 목적"],
  ["시험 개요", "시험 개요/구조 블록 -> 문항구성, 배점, 범위, 등급컷"],
  ["출제 흐름", "출제 흐름/체감 정리 블록 -> 초반/후반 흐름과 체감 난도"],
  ["📌 주요문항", "주요문항 반복 블록 -> 문항번호, 유사교재, 핵심, 흔들린 지점, 손풀이"],
  ["다음 학습", "다음 학습 방향 블록 -> 방학/다음 단원/예비 과정 대비"],
  ["CTA", "특강/상담 CTA 블록 -> 강좌 안내, 상담, 위치, 전화"]
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
    key: "selectionReason",
    label: "선생님 선택 이유",
    placeholder: "예: 후반부에서 학생들이 조건 해석과 시간 배분으로 흔들릴 대표 문항입니다.",
    type: "textarea"
  },
  {
    key: "similarTypeEvidence",
    label: "유사유형 근거",
    placeholder: "예: 학교 학습지 3번 변형, 쎈 B단계 유사, 부교재 ○○쪽 유사. 확인된 근거만 적습니다.",
    type: "textarea"
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
  ...examAnalysisGptChecklistManualFields,
  ...examAnalysisBlogBlockFields
];

const examAnalysisOutputEditorialChecklist = [
  "인사와 학교/학년/고사 소개가 자연스럽게 시작되는지",
  "시험 개요에 문항 구성, 배점, 범위, 등급컷 또는 예상컷이 필요한 만큼 들어갔는지",
  "초반/중반/후반 출제 흐름과 체감 난도가 벤치마킹 글처럼 설명되는지",
  "주요문항마다 문항번호, 유사교재, 핵심 개념, 학생이 흔들릴 지점, 풀이 방향이 보이는지",
  "다음 학습 방향과 수업/특강/상담 연결이 과장 없이 이어지는지"
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
    selectionReason: "",
    similarTypeEvidence: "",
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
    selectionReason: String(block.selectionReason ?? ""),
    similarTypeEvidence: String(block.similarTypeEvidence ?? ""),
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
      ...Object.fromEntries(examAnalysisGptChecklistManualFields.map((field) => [field.key, ""])),
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

function getExamAnalysisOutputPersistenceSnapshot(outputDrafts = {}) {
  const inputs = outputDrafts.inputs ?? {};
  return {
    inputs: {
      ...Object.fromEntries(examAnalysisOutputAllInputFields.map((field) => [field.key, String(inputs[field.key] || "")])),
      keyQuestionBlocks: normalizeExamAnalysisKeyQuestionBlocks(inputs).map((block) => ({
        blockId: String(block.blockId || ""),
        ...Object.fromEntries(examAnalysisKeyQuestionBlockFields.map((field) => [field.key, String(block[field.key] || "")]))
      }))
    },
    blogTeacherDraft: String(outputDrafts.blog?.teacherDraft || ""),
    instagramTeacherDraft: String(outputDrafts.instagram?.teacherDraft || "")
  };
}

function getExamAnalysisOutputSaveMismatches(requestedDrafts = {}, persistedDrafts = {}) {
  const requested = getExamAnalysisOutputPersistenceSnapshot(requestedDrafts);
  const persisted = getExamAnalysisOutputPersistenceSnapshot(persistedDrafts);
  const mismatches = [];
  if (JSON.stringify(requested.inputs) !== JSON.stringify(persisted.inputs)) mismatches.push("입력칸");
  if (requestedDrafts.blog?.teacherTouched && requested.blogTeacherDraft !== persisted.blogTeacherDraft) mismatches.push("블로그 선생님 수정본");
  if (requestedDrafts.instagram?.teacherTouched && requested.instagramTeacherDraft !== persisted.instagramTeacherDraft) mismatches.push("인스타 선생님 수정본");
  return mismatches;
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

function formatExamAnalysisChecklistDistribution(items = [], maxItems = 6) {
  return (Array.isArray(items) ? items : [])
    .filter((item) => Number(item?.count || 0) > 0)
    .slice(0, maxItems)
    .map((item) => {
      const label = String(item.label || "미입력").trim() || "미입력";
      const count = Number(item.count || 0);
      const percent = Number(item.percent || 0);
      return `${label} ${count}문항${percent ? `(${percent}%)` : ""}`;
    })
    .join(", ");
}

function formatExamAnalysisImportantQuestionSummary(questions = []) {
  return (Array.isArray(questions) ? questions : [])
    .slice(0, 12)
    .map((question) => {
      const parts = [
        `${question.questionNumber}번`,
        question.mainType,
        question.unitName,
        question.difficulty,
        question.pageLabel,
        question.reviewNote ? `메모: ${question.reviewNote}` : ""
      ].filter(Boolean);
      return parts.join(" · ");
    })
    .join("\n");
}

function formatExamAnalysisKeyQuestionBlockChecklist(blocks = []) {
  const meaningfulBlocks = normalizeExamAnalysisKeyQuestionBlocks({ keyQuestionBlocks: blocks })
    .filter(getExamAnalysisKeyQuestionBlockHasContent);
  if (!meaningfulBlocks.length) return "미입력 - 주요문항 반복 블록에서 선생님이 최종 선택";
  return meaningfulBlocks.map((block, index) => [
    `주요문항 최종 선택 ${index + 1}`,
    `- 문항번호: ${block.questionNumber || "(미입력)"}`,
    `- 선택 이유: ${block.selectionReason || "(미입력)"}`,
    `- 핵심 개념/카드 제목: ${block.title || "(미입력)"}`,
    `- 유사유형 근거: ${block.similarTypeEvidence || "(미입력)"}`,
    `- 설명 메모: ${block.questionMemo || "(미입력)"}`,
    `- 자주 틀리는 지점: ${block.mistakePoint || "(미입력)"}`,
    `- 추천 복습/손풀이 메모: ${block.solutionMemo || "(미입력)"}`
  ].join("\n")).join("\n\n");
}

function getExamAnalysisGptChecklistAutoItems({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const safeRun = activeRun && typeof activeRun === "object" ? activeRun : {};
  const safeModel = model && typeof model === "object" ? model : {};
  const safeDrafts = outputDrafts && typeof outputDrafts === "object" ? outputDrafts : {};
  const inputs = safeDrafts.inputs ?? {};
  const meta = safeModel.meta ?? {};
  const totalQuestions = Number(
    meta.totalQuestions
    || safeModel.questions?.length
    || safeRun.confirmedQuestionCount
    || safeRun.detectedQuestionCount
    || safeRun.totalQuestionCount
    || 0
  );
  return [
    {
      label: "학교/학년",
      source: "웹앱 자동 입력",
      value: [safeRun.schoolName || meta.schoolName, safeRun.grade || meta.grade].filter(Boolean).join(" ") || "미입력"
    },
    {
      label: "고사명/과목",
      source: "웹앱 자동 입력",
      value: [safeRun.examCycle || safeRun.examTerm || meta.examCycle, safeRun.subject || meta.subject].filter(Boolean).join(" · ") || "미입력"
    },
    {
      label: "시험일/범위",
      source: "선생님 입력 우선",
      value: [inputs.checklistExamDate, inputs.checklistExamRange].filter(Boolean).join(" · ") || "미입력"
    },
    {
      label: "문항 수",
      source: "시험지분석 후보/확정",
      value: totalQuestions ? `${totalQuestions}문항` : "시험지분석 검수 후 자동 표시"
    },
    {
      label: "단원별 실제 비중",
      source: "시험지분석 후보/확정",
      value: formatExamAnalysisChecklistDistribution(safeModel.partDistribution) || "시험지분석 검수 후 자동 표시"
    },
    {
      label: "난도 분포",
      source: "시험지분석 후보/확정",
      value: formatExamAnalysisChecklistDistribution(safeModel.difficultyDistribution) || "시험지분석 검수 후 자동 표시"
    },
    {
      label: "주요문항 후보/체크 저장본",
      source: "시험지분석 후보",
      value: formatExamAnalysisImportantQuestionSummary(safeModel.importantQuestions) || "AI 결과 검수 표에서 주요문항 체크 필요"
    }
  ];
}

function createExamAnalysisGptChecklistText({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const safeDrafts = outputDrafts && typeof outputDrafts === "object" ? outputDrafts : {};
  const inputs = safeDrafts.inputs ?? {};
  const autoItems = getExamAnalysisGptChecklistAutoItems({ activeRun, model, outputDrafts });
  const valueFor = (key) => String(inputs[key] || "").trim() || "(미입력)";
  return [
    "[A. 웹앱/시험지분석 자동 입력]",
    ...autoItems.map((item) => `- ${item.label}: ${item.value} (${item.source})`),
    "",
    "[B. 선생님 확정 입력]",
    `- 시험일: ${valueFor("checklistExamDate")}`,
    `- 시험범위: ${valueFor("checklistExamRange")}`,
    `- 교과서/출판사: ${valueFor("checklistTextbookPublisher")}`,
    `- 등급컷/예상 등급컷: ${valueFor("checklistGradeCut")}`,
    `- 부교재/모의고사/학습지 출제 근거: ${valueFor("checklistSourceEvidence")}`,
    "",
    "[C. 주요문항 최종 선택 - 선생님 선정만 사용]",
    formatExamAnalysisKeyQuestionBlockChecklist(inputs.keyQuestionBlocks),
    "",
    "[D. 선생님 해석/문장화]",
    `- 한 줄 총평: ${valueFor("oneLineReview")}`,
    `- 시험 흐름/체감 난도: ${valueFor("flowReview")}`,
    `- 변별 문항/흔들린 지점: ${valueFor("scoreGapPoint")}`,
    `- 다음 학습 방향: ${valueFor("nextStudyPlan")}`,
    `- 수업/상담 연결 메모: ${valueFor("schoolVariationNotes")}`,
    "",
    "[E. 금지/불확실]",
    `- 쓰면 안 되는 교재명: ${valueFor("checklistForbiddenTextbook")}`,
    `- 확인 안 된 문항번호: ${valueFor("checklistUnconfirmedQuestions")}`,
    `- AI가 추측하면 안 되는 내용: ${valueFor("checklistAiNoGuess")}`
  ].join("\n");
}

function createExamAnalysisGptPlanningPacket({ activeRun = {}, model = {}, outputDrafts = {} } = {}) {
  const safeDrafts = outputDrafts && typeof outputDrafts === "object" ? outputDrafts : {};
  const keyQuestionBlocks = normalizeExamAnalysisKeyQuestionBlocks(safeDrafts.inputs ?? {});
  const cardPlan = createExamAnalysisCardNewsModel(keyQuestionBlocks);
  const checklistText = createExamAnalysisGptChecklistText({ activeRun, model, outputDrafts });
  return [
    "[작업 목표]",
    "아래 체크리스트를 바탕으로 블로그/인스타 카드뉴스 기획안을 만들어줘.",
    "아직 이미지를 만들지 말고, 카드별 내용만 표로 정리해줘.",
    "",
    "[브랜드]",
    "- 으뜸수학 고태영T",
    "- 블루/화이트 중심",
    "- 전문적이고 차분한 내신 분석 카드뉴스",
    "- 벤치마킹 블로그의 정보 구조는 참고하되 문장/디자인/브랜드는 복제하지 않음",
    "",
    "[체크리스트]",
    checklistText,
    "",
    "[카드 구조]",
    ...cardPlan.map((card) => `- 카드 ${card.card}: ${card.role} / ${card.renderMode} / ${card.slot}`),
    "",
    "[출력 형식]",
    "카드번호 / 카드 역할 / 메인 문구 / 보조 문구 / 강조 키워드 / 반드시 넣을 숫자·표 / 검수 필요 사실",
    "",
    "[주의]",
    "- 체크리스트에 없는 시험 사실은 추가하지 마.",
    "- 주요문항은 [C. 주요문항 최종 선택]에 있는 문항만 사용해.",
    "- 시험지분석 후보는 선생님 최종 선택으로 확정하지 마.",
    "- 불확실한 내용은 카드에 넣지 말고 검수 필요 사실에 적어.",
    "- 한 카드에 문구를 너무 많이 넣지 마.",
    "- 원본 블로그 문장/디자인/브랜드를 복제하지 마."
  ].join("\n");
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
  { type: "overallReview", label: "출제 흐름 슬라이드" },
  { type: "keyQuestion", label: "주요문항 슬라이드" },
  { type: "solution", label: "손풀이 슬라이드" },
  { type: "closing", label: "마무리 슬라이드" }
];
function createExamAnalysisCardNewsModel(keyQuestionBlocks = [createEmptyExamAnalysisKeyQuestionBlock(1)]) {
  const questionBlocks = Array.isArray(keyQuestionBlocks) && keyQuestionBlocks.length
    ? keyQuestionBlocks
    : [createEmptyExamAnalysisKeyQuestionBlock(1)];
  const slides = [
    { type: "cover", role: "시작 슬라이드", renderMode: "통렌더", slot: "학교/학년/고사/과목 + 첫 문단 핵심" },
    { type: "examStructure", role: "시험구조 슬라이드", renderMode: "통렌더", slot: "객관식/서술형/만점/범위/출제 흐름" },
    { type: "overallReview", role: "출제 흐름 슬라이드", renderMode: "통렌더", slot: "체감 난도/후반부 흐름/흔들린 지점/학습 포인트" },
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
    { type: "closing", role: "마무리 슬라이드", renderMode: "통렌더", slot: "다음 학습 방향 + 특강/상담 CTA" }
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
  return String(question.unitName || "중단원 미입력").trim() || "중단원 미입력";
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
    `<text class="muted" x="${cx}" y="${cy + 26}" text-anchor="middle">쎈 중단원</text>`,
    `<text class="small" x="${cx}" y="${cy + 56}" text-anchor="middle">${total}문항 기준</text>`,
    detailRows || `<text class="muted" x="500" y="240">단원 데이터 없음</text>`
  ].join("");
  return {
    key: "part-distribution",
    label: "쎈 중단원별 출제 비중",
    fileName: "01-part-distribution.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "쎈 중단원별 출제 비중",
      subtitle: "문항 비중 · 쎈 중단원별 난이도 · 대표 주요유형",
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
    label: "쎈 중단원별 난이도",
    fileName: "03-part-difficulty.png",
    width,
    height,
    svg: createExamAnalysisChartSvgShell({
      title: "쎈 중단원별 난이도",
      subtitle: "쎈 중단원마다 난이도 분포를 누적 막대로 표시",
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
    "3. texts/gpt-project-planning-packet.txt 내용을 GPT 프로젝트 대화세션 첫 메시지로 붙여넣고 카드 기획안을 받습니다.",
    `4. charts 폴더의 PNG 이미지는 ${examAnalysisChartPngExportScale}배 해상도 고화질 이미지입니다. 통렌더 카드의 재료 또는 네이버 블로그 보조 이미지로 사용합니다.`,
    "5. texts/canva-10-card-plan.txt 기준으로 6개 슬라이드 유형과 주요문항 반복 구조를 확인합니다.",
    "6. texts/blog-block-guide.txt 기준으로 블로그 블록 조립 순서를 확인합니다.",
    "7. charts-svg 폴더의 SVG 원본은 PPT/Canva에서 더 선명한 원본이 필요할 때 사용합니다.",
    "8. 외부 에디터에서 수정한 최종본은 현재 앱으로 자동 동기화되지 않습니다.",
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
      gptProjectPlanningPacket: "texts/gpt-project-planning-packet.txt",
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
    "- 인사/시험 소개 -> [card-01.png 삽입]",
    "- 시험 개요/구조 -> [card-02.png 삽입]",
    "- 출제 흐름/체감 정리 -> [card-03.png 삽입]",
    "- 주요문항 설명 -> [card-04.png 삽입] -> 손풀이 설명 -> [card-05.png 삽입]",
    "- 주요문항/손풀이 쌍 반복 -> 마지막 마무리 카드 삽입 -> 특강/상담 CTA",
    "",
    "AI 편집 규칙",
    ...examAnalysisOutputAiBoundaryRules.map((rule) => `- ${rule}`),
    "",
    "강조 규칙",
    "- 😊: 인사말 끝",
    "- 📌: 주요문항 시작",
    "- ✅: 핵심 포인트, 자주 틀리는 지점, 다음 대비 체크",
    "- ⬇️⬇️: 특강/상담/블로그 유입",
    "- 📍: 위치",
    "- ☎: 전화번호",
    "- [형광펜: 하늘색]: 핵심 결론/전문성",
    "- [형광펜: 노랑]: 실수 포인트/주의 지점"
  ].join("\n\n");
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
    { name: "texts/gpt-project-planning-packet.txt", text: createExamAnalysisGptPlanningPacket({ activeRun, model, outputDrafts }) },
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
  onCopyText,
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
  const gptChecklistAutoItems = getExamAnalysisGptChecklistAutoItems({ activeRun, model, outputDrafts });
  const gptPlanningPacket = createExamAnalysisGptPlanningPacket({ activeRun, model, outputDrafts });
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
  const outputStickySaveState = outputStatus.state === "success" ? "saved" : outputStatus.state;
  const [collapsedOutputSections, setCollapsedOutputSections] = useState({
    topSummary: false,
    guide: true,
    gptChecklist: false,
    baseInputs: false,
    blogBlocks: false,
    keyQuestions: false,
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
      <SectionHeader
        actions={(
          <>
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
          </>
        )}
        actionsClassName="headerActions"
        density="slim"
        description="선생님 총평 입력 · AI 초안 · 선생님 수정본 저장"
        title="블로그/인스타 산출물 초안"
        titleAs="strong"
      />

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>상단 안내/저장 상태</strong>
          <span>
            {saveCheckpointTitle} · 입력 {inputCount}/{inputTotal}블록 · 블로그 {getExamAnalysisOutputSectionLabel(outputDrafts.blog)} · 인스타 {getExamAnalysisOutputSectionLabel(outputDrafts.instagram)}
          </span>
        </div>
        <button
          aria-controls="exam-output-top-summary-content"
          aria-expanded={!isOutputSectionCollapsed("topSummary")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("topSummary")}
          type="button"
        >
          {isOutputSectionCollapsed("topSummary") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("topSummary")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-top-summary-content" open={!isOutputSectionCollapsed("topSummary")}>
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
      </Disclosure>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>작성 방향/AI 편집 룰</strong>
          <span>초안 점검 기준, 이모티콘, 형광펜, AI 가능/불가 경계를 확인합니다.</span>
        </div>
        <button
          aria-controls="exam-output-guide"
          aria-expanded={!isOutputSectionCollapsed("guide")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("guide")}
          type="button"
        >
          {isOutputSectionCollapsed("guide") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("guide")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-guide" open={!isOutputSectionCollapsed("guide")}>
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
      </Disclosure>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>GPT 대화세션 체크리스트</strong>
          <span>웹앱/시험지분석에서 자동으로 채운 값과 선생님 확정 입력을 합쳐 GPT 프로젝트 첫 메시지로 복사합니다.</span>
        </div>
        <button
          aria-controls="exam-output-gpt-checklist"
          aria-expanded={!isOutputSectionCollapsed("gptChecklist")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("gptChecklist")}
          type="button"
        >
          {isOutputSectionCollapsed("gptChecklist") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("gptChecklist")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-gpt-checklist" open={!isOutputSectionCollapsed("gptChecklist")}>
        <div className="examAnalysisGptChecklistPanel">
          <div className="examAnalysisGptChecklistNotice">
            <strong>반복 제작 기준</strong>
            <span>자동 입력값은 읽기 전용입니다. 등급컷, 출제 근거, 금지 항목, 주요문항 최종 선택은 선생님 저장본을 원본으로 사용합니다.</span>
          </div>
          <div className="examAnalysisGptChecklistAutoGrid">
            {gptChecklistAutoItems.map((item) => (
              <article key={item.label}>
                <span>{item.source}</span>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </article>
            ))}
          </div>
          <div className="examAnalysisOutputInputGrid gptChecklistManual">
            {examAnalysisGptChecklistManualFields.map((field) => (
              <label key={field.key}>
                <span>{field.label}</span>
                <small>{field.source} · {field.guide}</small>
                <textarea
                  disabled={isOutputBusy}
                  onChange={(event) => onUpdateInput(field.key, event.target.value)}
                  placeholder={field.placeholder}
                  rows={3}
                  value={outputDrafts.inputs[field.key] || ""}
                />
              </label>
            ))}
          </div>
          <div className="examAnalysisGptPacketBox">
            <div>
              <div>
                <strong>GPT 프로젝트 첫 메시지 패킷</strong>
                <span>이 내용을 GPT 프로젝트 대화세션 첫 메시지에 붙여넣고 카드 기획안부터 받습니다.</span>
              </div>
              <button
                className="secondaryButton"
                disabled={!gptPlanningPacket.trim()}
                onClick={() => onCopyText("GPT 기획 패킷", gptPlanningPacket)}
                type="button"
              >
                GPT 기획 패킷 복사
              </button>
            </div>
            <textarea aria-label="GPT 프로젝트 기획 패킷" readOnly rows={12} value={gptPlanningPacket} />
          </div>
        </div>
      </Disclosure>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>공개글 발췌/보충 메모</strong>
          <span>시험관리 기록지를 다시 쓰는 칸이 아니라, 벤치마킹 글 첫 문단과 카드뉴스에 필요한 표현만 보충합니다.</span>
        </div>
        <button
          aria-controls="exam-output-base-inputs"
          aria-expanded={!isOutputSectionCollapsed("baseInputs")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("baseInputs")}
          type="button"
        >
          {isOutputSectionCollapsed("baseInputs") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("baseInputs")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-base-inputs" open={!isOutputSectionCollapsed("baseInputs")}>
        <div className="examAnalysisOutputInputGrid">
          {examAnalysisOutputInputFields.map((field) => (
            <label key={field.key}>
              <span>{field.label}</span>
              <small>{field.guide}</small>
              <textarea
                aria-label={field.label}
                onChange={(event) => onUpdateInput(field.key, event.target.value)}
                placeholder={field.placeholder}
                rows={4}
                value={outputDrafts.inputs[field.key] || ""}
              />
            </label>
          ))}
        </div>
      </Disclosure>

      <div className="examAnalysisInstructorSectionHeader withAction">
        <div>
          <strong>블로그 흐름 블록</strong>
          <span>18개 고정 섹션이 아니라 카드 사이에 들어갈 글의 성격을 적는 칸입니다. 각 카드에 벤치마킹 글 위치를 표시했습니다.</span>
        </div>
        <button
          aria-controls="exam-output-blog-blocks"
          aria-expanded={!isOutputSectionCollapsed("blogBlocks")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("blogBlocks")}
          type="button"
        >
          {isOutputSectionCollapsed("blogBlocks") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("blogBlocks")} />
        </button>
      </div>

      <Disclosure hideTrigger id="exam-output-blog-blocks" open={!isOutputSectionCollapsed("blogBlocks")}>
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
                aria-label={field.label}
                onChange={(event) => onUpdateInput(field.key, event.target.value)}
                placeholder={field.placeholder}
                rows={3}
                value={outputDrafts.inputs[field.key] || ""}
              />
            </article>
          ))}
        </div>
      </Disclosure>

      <div className="examAnalysisKeyQuestionHeader">
        <div>
          <strong>주요문항 반복 블록</strong>
          <span>주요문항 하나가 추가될 때마다 주요문항 카드, 손풀이 카드, 블로그 설명글 구조가 함께 반복됩니다.</span>
          <span>{"벤치마킹 위치: 📌 주요문항 시작 -> 문제 카드 -> 설명글 -> 손풀이 카드 -> 손풀이 설명글"}</span>
        </div>
        <div className="examAnalysisSectionActionGroup">
          <button
            aria-controls="exam-output-key-questions"
            aria-expanded={!isOutputSectionCollapsed("keyQuestions")}
            className="examAnalysisOutputCollapseButton"
            onClick={() => toggleOutputSection("keyQuestions")}
            type="button"
          >
            {isOutputSectionCollapsed("keyQuestions") ? "펼치기" : "접기"}
            <DisclosureChevron open={!isOutputSectionCollapsed("keyQuestions")} />
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

      <Disclosure hideTrigger id="exam-output-key-questions" open={!isOutputSectionCollapsed("keyQuestions")}>
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
      </Disclosure>

      <div className="examAnalysisOutputCollapsibleHeader">
        <div>
          <strong>최종 초안 / 복사 / TXT</strong>
          <span>블로그/인스타 초안은 삭제하지 않습니다. AI 생성 후 선생님이 최종 문장으로 고치는 원본이며, 복사/TXT/ZIP export가 이 값을 읽습니다.</span>
        </div>
        <button
          aria-controls="exam-output-final-drafts"
          aria-expanded={!isOutputSectionCollapsed("finalDrafts")}
          className="examAnalysisOutputCollapseButton"
          onClick={() => toggleOutputSection("finalDrafts")}
          type="button"
        >
          {isOutputSectionCollapsed("finalDrafts") ? "펼치기" : "접기"}
          <DisclosureChevron open={!isOutputSectionCollapsed("finalDrafts")} />
        </button>
      </div>
      <Disclosure hideTrigger id="exam-output-final-drafts" open={!isOutputSectionCollapsed("finalDrafts")}>
        <div className="examAnalysisOutputEditorGrid">
          <section>
            <div>
              <div>
                <strong>블로그 초안</strong>
                <span>{getExamAnalysisOutputSectionLabel(outputDrafts.blog)}</span>
              </div>
              <div className="examAnalysisOutputEditorActions">
                <button disabled={!blogText.trim()} onClick={() => onCopyOutputDraft("blog", blogText)} type="button">복사</button>
                <button disabled={!blogText.trim()} onClick={() => onDownloadOutputDraft("blog", blogText)} type="button">TXT</button>
              </div>
            </div>
            <textarea
              aria-label="블로그 최종 초안"
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
                <button disabled={!instagramText.trim()} onClick={() => onCopyOutputDraft("instagram", instagramText)} type="button">복사</button>
                <button disabled={!instagramText.trim()} onClick={() => onDownloadOutputDraft("instagram", instagramText)} type="button">TXT</button>
              </div>
            </div>
            <textarea
              aria-label="인스타 카드 최종 초안"
              onChange={(event) => onUpdateTeacherDraft("instagram", event.target.value)}
              placeholder="인스타 카드 초안 생성 후 카드별 문구, 슬라이드 유형, 주요문항/손풀이 슬롯 안내를 수정합니다."
              rows={18}
              value={instagramText}
            />
          </section>
        </div>
      </Disclosure>

      <div className="examAnalysisOutputPolicy">
        <span>입력칸과 선생님 수정본은 저장 후 새로고침해도 유지됩니다.</span>
        <span>읽기 우선순위: 선생님 수정본 &gt; AI 초안 &gt; 빈 값입니다.</span>
        <span>AI 재생성은 AI 초안만 갱신하고, 저장된 선생님 수정본은 덮어쓰지 않습니다.</span>
      </div>
      <StickySaveBar
        className="examAnalysisOutputStickySaveBar"
        label="산출물 작업본"
        message={outputStatus.message || saveCheckpointText}
        saveState={outputStickySaveState}
      >
        <button
          className="primaryButton"
          disabled={!hasRun || isOutputBusy}
          onClick={onSaveOutputDrafts}
          type="button"
        >
          {isSavingOutputDrafts ? "저장 중" : "산출물 작업본 저장"}
        </button>
      </StickySaveBar>
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

export function ExamAnalysisPipelineCenter({ examPrepRows = [], runtime }) {
  const {
    confirmExamAnalysisQuestionCountRequest,
    deleteExamAnalysisRunRequest,
    deleteExamAnalysisSourceRequest,
    detectExamAnalysisQuestionBoundariesRequest,
    extractExamAnalysisSourceRequest,
    fetchExamAnalysisSsenTypesRequest,
    fillExamAnalysisQuestionRowsRequest,
    formatKoreaTimeLabel,
    generateExamAnalysisOutputDraftRequest,
    refineExamAnalysisQuestionRowsRequest,
    saveExamAnalysisOutputDraftsRequest,
    saveExamAnalysisQuestionReviewsRequest,
    verifyExamAnalysisSourceWithAiRequest
  } = runtime;
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
  const [examAnalysisStageCollapseOverrides, setExamAnalysisStageCollapseOverrides] = useState({});
  const [examAnalysisWorkspaceTab, setExamAnalysisWorkspaceTab] = useState("source");
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
      const result = await saveExamAnalysisRunContractRequest({
        analysisRun: buildRunPayload(),
        request: postJson
      });
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
      const requestedReviews = buildQuestionReviewPayload();
      const result = await saveExamAnalysisQuestionReviewsRequest({
        analysisRunId: activeRun.analysisRunId,
        reviews: requestedReviews
      });
      if (result.source !== "supabase") throw new Error("문항 검수 저장 후 Supabase 재조회 결과가 없습니다.");
      const reviewMismatches = getExamAnalysisReviewSaveMismatches(requestedReviews, result.questions);
      if (reviewMismatches.length) {
        throw new Error(`Supabase 재조회 값이 문항 검수 요청과 다릅니다: ${reviewMismatches.join(", ")}번`);
      }
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
      const requestedDrafts = outputDrafts;
      const result = await saveExamAnalysisOutputDraftsRequest({
        analysisRunId: activeRun.analysisRunId,
        outputInputs: requestedDrafts.inputs,
        blogTeacherDraft: requestedDrafts.blog.teacherDraft,
        instagramTeacherDraft: requestedDrafts.instagram.teacherDraft,
        blogTeacherDraftEdited: Boolean(requestedDrafts.blog.teacherTouched),
        instagramTeacherDraftEdited: Boolean(requestedDrafts.instagram.teacherTouched)
      });
      if (result.source !== "supabase") throw new Error("산출물 저장 후 Supabase 재조회 결과가 없습니다.");
      const persistedDrafts = getExamAnalysisOutputDraftsFromRun(result.analysisRun);
      const outputMismatches = getExamAnalysisOutputSaveMismatches(requestedDrafts, persistedDrafts);
      if (outputMismatches.length) {
        throw new Error(`Supabase 재조회 값이 산출물 저장 요청과 다릅니다: ${outputMismatches.join(", ")}`);
      }
      setSelectedDetail(result);
      setOutputDrafts(persistedDrafts);
      setOutputStatus({ state: "success", message: "시험분석 산출물 · 저장 완료" });
      await loadRuns(activeRun.analysisRunId);
      await loadRunDetail(activeRun.analysisRunId);
    } catch (error) {
      setOutputStatus({ state: "failed", message: `시험분석 산출물 · 저장 실패 · ${error.message}` });
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

  async function copyOutputText(label, text) {
    const copied = await copyTextToClipboard(text);
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
  const examAnalysisStageCollapseKey = activeRun?.analysisRunId || selectedRunId || "draft";
  const questionCountStageComplete = confirmedQuestionCount > 0;
  const boundaryStageComplete = Boolean(boundaryDetection && boundaryDetection.status !== "needs_review");
  const rowFillStageComplete = Boolean(rowFill && rowFill.status !== "needs_review");
  const reviewStageComplete = teacherReview?.status === "completed";
  const examAnalysisWorkspaceTabs = [
    {
      id: "source",
      label: "원본·PDF",
      meta: sourceFiles.length > 0 ? `${sourceFiles.length}개 저장` : "준비",
      tone: sourceFiles.length > 0 ? "complete" : "idle"
    },
    {
      id: "structure",
      label: "문항 구조",
      meta: boundaryStageComplete ? `${confirmedQuestionCount}문항` : questionCountStageComplete ? "경계 확인" : "대기",
      tone: boundaryStageComplete ? "complete" : questionCountStageComplete ? "attention" : "idle"
    },
    {
      id: "analysis",
      label: "AI 분석",
      meta: rowFillStageComplete ? `${aiFilledRows.length}/${questionRows.length}` : "대기",
      tone: rowFillStageComplete ? (aiNeedsReviewRows.length > 0 ? "attention" : "complete") : "idle"
    },
    {
      id: "review",
      label: "선생님 검수",
      meta: reviewStageComplete ? "완료" : reviewRowsReady ? `${confirmedReviewCount}/${questionRows.length}` : "대기",
      tone: reviewStageComplete ? "complete" : reviewRowsReady ? "attention" : "idle"
    },
    {
      id: "preview",
      label: "최종 미리보기",
      meta: reviewStageComplete ? "확인 가능" : "검수 후",
      tone: reviewStageComplete ? "complete" : "idle"
    },
    {
      id: "output",
      label: "산출물",
      meta: outputStatus.state === "dirty" ? "저장 필요" : outputStatus.state === "success" ? "저장 완료" : "초안",
      tone: outputStatus.state === "dirty" ? "attention" : outputStatus.state === "success" ? "complete" : "idle"
    },
    {
      id: "history",
      label: "기록",
      meta: events.length > 0 ? `${events.length}건` : "없음",
      tone: events.length > 0 ? "complete" : "idle"
    }
  ];
  const questionCountStageCollapsed = isExamAnalysisStageCollapsed("question-count", questionCountStageComplete);
  const boundaryStageCollapsed = isExamAnalysisStageCollapsed("boundary", boundaryStageComplete);
  const rowFillStageCollapsed = isExamAnalysisStageCollapsed("row-fill", rowFillStageComplete);
  const reviewStageCollapsed = isExamAnalysisStageCollapsed("review", reviewStageComplete);

  function getExamAnalysisStageCollapseOverrideKey(stageKey) {
    return `${examAnalysisStageCollapseKey}:${stageKey}`;
  }

  function isExamAnalysisStageCollapsed(stageKey, defaultCollapsed) {
    const overrideKey = getExamAnalysisStageCollapseOverrideKey(stageKey);
    const overrideValue = examAnalysisStageCollapseOverrides[overrideKey];
    return typeof overrideValue === "boolean" ? overrideValue : Boolean(defaultCollapsed);
  }

  function toggleExamAnalysisStage(stageKey, defaultCollapsed) {
    const overrideKey = getExamAnalysisStageCollapseOverrideKey(stageKey);
    setExamAnalysisStageCollapseOverrides((current) => {
      const currentCollapsed = typeof current[overrideKey] === "boolean"
        ? current[overrideKey]
        : Boolean(defaultCollapsed);
      return {
        ...current,
        [overrideKey]: !currentCollapsed
      };
    });
  }

  function selectExamAnalysisWorkspaceTab(tabId) {
    setExamAnalysisWorkspaceTab(tabId);
    const stagesByTab = {
      structure: ["question-count", "boundary"],
      analysis: ["row-fill"],
      review: ["review"]
    };
    const stageKeys = stagesByTab[tabId] ?? [];
    if (stageKeys.length === 0) return;
    setExamAnalysisStageCollapseOverrides((current) => {
      const next = { ...current };
      stageKeys.forEach((stageKey) => {
        next[`${examAnalysisStageCollapseKey}:${stageKey}`] = false;
      });
      return next;
    });
  }

  function renderExamAnalysisStageCollapsedHint(title, isComplete) {
    return (
      <div className="examAnalysisStageCollapsedHint">
        <strong>{isComplete ? `${title} 완료` : `${title} 접힘`}</strong>
        <span>
          {isComplete
            ? "완료된 작업입니다. 펼쳐서 세부 내용과 재실행 버튼을 확인할 수 있습니다."
            : "펼쳐서 입력과 실행 영역을 확인할 수 있습니다."}
        </span>
      </div>
    );
  }

  return (
    <section className="examAnalysisPipelinePage">
      <PageHeader
        actions={(
          <>
          <button className="secondaryButton" onClick={() => loadRuns(selectedRunId)} type="button">새로고침</button>
          <button className="primaryButton" onClick={saveRun} type="button">분석 저장</button>
          </>
        )}
        description="PDF 원본 저장과 분석 작업 관리"
        title="시험분석"
      />

      <div className="examAnalysisStatusBar">
        {[loadStatus, saveStatus, uploadStatus, sourceDeleteStatus, extractStatus, visionStatus, confirmStatus, boundaryStatus, rowFillStatus, rowRefineStatus, reviewStatus, outputStatus, deleteStatus].filter((item) => item.message).map((item, index) => (
          <span className={`saveStateBadge ${item.state}`} key={`${item.message}-${index}`}>{item.message}</span>
        ))}
      </div>

      <WorkspaceTabs as="nav" className="examAnalysisWorkspaceTabs" label="시험분석 작업 단계">
        {examAnalysisWorkspaceTabs.map((tab) => (
          <button
            aria-selected={examAnalysisWorkspaceTab === tab.id}
            className={examAnalysisWorkspaceTab === tab.id ? "active" : ""}
            key={tab.id}
            onClick={() => selectExamAnalysisWorkspaceTab(tab.id)}
            role="tab"
            type="button"
          >
            <span>{tab.label}</span>
            <small className={tab.tone}>{tab.meta}</small>
          </button>
        ))}
      </WorkspaceTabs>

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
              <div aria-label="시험분석 학교 목록" className="examAnalysisColumnList" role="region" tabIndex={0}>
                {schoolCards.length === 0 ? (
                  <EmptyState className="emptyState compact">학교 없음</EmptyState>
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
              <div aria-label="시험분석 학년 목록" className="examAnalysisColumnList" role="region" tabIndex={0}>
                {gradeCards.length === 0 ? (
                  <EmptyState className="emptyState compact">학년 없음</EmptyState>
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
              <div aria-label="시험분석 고사 목록" className="examAnalysisColumnList" role="region" tabIndex={0}>
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
              <div aria-label="시험분석 분석본 목록" className="examAnalysisColumnList" role="region" tabIndex={0}>
                {scopedRuns.length === 0 ? (
                  <EmptyState className="emptyState compact">PDF를 업로드하면 분석이 생성됩니다.</EmptyState>
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

        <section className="examAnalysisWorkPanel" data-active-tab={examAnalysisWorkspaceTab}>
          <div className="panel examAnalysisFormPanel">
            <SectionHeader
              density="slim"
              description={activeRun ? workflowStatusLabel(activeRun.workflowStatus) : "새 분석"}
              title="기본정보"
              titleAs="strong"
            />
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
            <SectionHeader
              actions={(
                <>
                <input
                  accept="application/pdf,.pdf"
                  aria-label="시험분석 PDF 원본 선택"
                  className="visuallyHiddenInput"
                  onChange={(event) => uploadPdf(event.target.files?.[0])}
                  ref={fileInputRef}
                  type="file"
                />
                <button className="primaryButton" onClick={() => fileInputRef.current?.click()} type="button">PDF 업로드</button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              description={`${sourceFiles.length}개`}
              title="PDF 원본"
              titleAs="strong"
            />
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
                <EmptyState className="emptyState compact">PDF 원본 없음</EmptyState>
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

          <div className={questionCountStageCollapsed ? "panel examAnalysisQuestionCountPanel examAnalysisStagePanel collapsed" : "panel examAnalysisQuestionCountPanel examAnalysisStagePanel"} id="exam-analysis-question-count-stage">
            <SectionHeader
              actions={(
                <>
                  {confirmStatus.message ? <span className={`saveStateBadge ${confirmStatus.state}`}>{confirmStatus.message}</span> : null}
                  <button
                    aria-controls="exam-analysis-question-count-stage"
                    aria-expanded={!questionCountStageCollapsed}
                    className="secondaryButton compact examAnalysisStageToggleButton"
                    onClick={() => toggleExamAnalysisStage("question-count", questionCountStageComplete)}
                    type="button"
                  >
                    {questionCountStageCollapsed ? "펼치기" : "접기"}
                    <DisclosureChevron open={!questionCountStageCollapsed} />
                  </button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              descriptionNode={(
                <span>
                  {confirmedQuestionCount
                    ? `${confirmedQuestionCount}문항 확정`
                    : questionCountCandidate.count
                      ? `${questionCountCandidate.count}문항 후보`
                      : "대기"}
                </span>
              )}
              title="문항 수 확인"
              titleAs="strong"
            />
            <Disclosure
              hideTrigger
              open={!questionCountStageCollapsed}
              collapsedContent={renderExamAnalysisStageCollapsedHint("문항 수 확인", questionCountStageComplete)}
            >
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
            </Disclosure>
          </div>

          <div className={boundaryStageCollapsed ? "panel examAnalysisBoundaryPanel examAnalysisStagePanel collapsed" : "panel examAnalysisBoundaryPanel examAnalysisStagePanel"} id="exam-analysis-boundary-stage">
            <SectionHeader
              actions={(
                <>
                  {boundaryStatus.message ? <span className={`saveStateBadge ${boundaryStatus.state}`}>{boundaryStatus.message}</span> : null}
                  <button
                    className="secondaryButton"
                    disabled={!questionRows.length || !sourceFiles.length || isDetectingBoundaries}
                    onClick={detectQuestionBoundaries}
                    type="button"
                  >
                    {isDetectingBoundaries ? "탐지 중" : "문항 경계 탐지"}
                  </button>
                  <button
                    aria-controls="exam-analysis-boundary-stage"
                    aria-expanded={!boundaryStageCollapsed}
                    className="secondaryButton compact examAnalysisStageToggleButton"
                    onClick={() => toggleExamAnalysisStage("boundary", boundaryStageComplete)}
                    type="button"
                  >
                    {boundaryStageCollapsed ? "펼치기" : "접기"}
                    <DisclosureChevron open={!boundaryStageCollapsed} />
                  </button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              descriptionNode={(
                <span>
                  {boundaryRows.length
                    ? `${boundaryDetectedCount}/${boundaryRows.length}개`
                    : "대기"}
                </span>
              )}
              title="문항 경계 탐지"
              titleAs="strong"
            />
            <Disclosure
              hideTrigger
              open={!boundaryStageCollapsed}
              collapsedContent={renderExamAnalysisStageCollapsedHint("문항 경계 탐지", boundaryStageComplete)}
            >
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
                  <EmptyState className="emptyState compact">고정 문항 행 없음</EmptyState>
                )}
            </Disclosure>
          </div>

          <div className={rowFillStageCollapsed ? "panel examAnalysisRowFillPanel examAnalysisStagePanel collapsed" : "panel examAnalysisRowFillPanel examAnalysisStagePanel"} id="exam-analysis-row-fill-stage">
            <SectionHeader
              actions={(
                <>
                {rowFillStatus.message ? <span className={`saveStateBadge ${rowFillStatus.state}`}>{rowFillStatus.message}</span> : null}
                <button
                  className="secondaryButton"
                  disabled={!questionRows.length || !boundaryDetectedCount || isFillingRows}
                  onClick={fillQuestionRowsWithAi}
                  type="button"
                >
                  {isFillingRows ? "채움 중" : "AI 행 채움"}
                </button>
                <button
                  aria-controls="exam-analysis-row-fill-stage"
                  aria-expanded={!rowFillStageCollapsed}
                  className="secondaryButton compact examAnalysisStageToggleButton"
                  onClick={() => toggleExamAnalysisStage("row-fill", rowFillStageComplete)}
                  type="button"
                >
                  {rowFillStageCollapsed ? "펼치기" : "접기"}
                  <DisclosureChevron open={!rowFillStageCollapsed} />
                </button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              description={questionRows.length ? `${aiFilledRows.length}/${questionRows.length}개` : "대기"}
              title="AI 행 채움"
              titleAs="strong"
            />
            <Disclosure
              hideTrigger
              open={!rowFillStageCollapsed}
              collapsedContent={renderExamAnalysisStageCollapsedHint("AI 행 채움", rowFillStageComplete)}
            >
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
                  <EmptyState className="emptyState compact">고정 문항 행 없음</EmptyState>
                )}
                {aiNeedsReviewRows.length ? (
                  <p className="examAnalysisReviewNotice">재확인 문항 {aiNeedsReviewRows.map((question) => question.questionNumber).join(", ")}번은 다음 검수 단계에서 확인해야 합니다.</p>
                ) : null}
            </Disclosure>
          </div>

          <div className={reviewStageCollapsed ? "panel examAnalysisReviewPanel examAnalysisStagePanel collapsed" : "panel examAnalysisReviewPanel examAnalysisStagePanel"} id="exam-analysis-review-stage">
            <SectionHeader
              actions={(
                <>
                {rowRefineStatus.message ? <span className={`saveStateBadge ${rowRefineStatus.state}`}>{rowRefineStatus.message}</span> : null}
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
                  aria-controls="exam-analysis-review-stage"
                  aria-expanded={!reviewStageCollapsed}
                  className="secondaryButton compact examAnalysisStageToggleButton"
                  onClick={() => toggleExamAnalysisStage("review", reviewStageComplete)}
                  type="button"
                >
                  {reviewStageCollapsed ? "펼치기" : "접기"}
                  <DisclosureChevron open={!reviewStageCollapsed} />
                </button>
                </>
              )}
              actionsClassName="headerActions"
              density="slim"
              description={questionRows.length ? `${confirmedReviewCount}/${questionRows.length}개 확정` : "대기"}
              title="AI 결과 검수"
              titleAs="strong"
            />
            <Disclosure
              hideTrigger
              open={!reviewStageCollapsed}
              collapsedContent={renderExamAnalysisStageCollapsedHint("AI 결과 검수", reviewStageComplete)}
            >
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
                  <DataTableShell className="examAnalysisReviewTableWrap" label="시험분석 문항 검수">
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
                                    aria-label={`${question.questionNumber}번 쎈 단원`}
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
                                      aria-label={`${question.questionNumber}번 주유형`}
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
                                aria-label={`${question.questionNumber}번 난이도`}
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
                              aria-label={`${question.questionNumber}번 재확인 근거`}
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
              </DataTableShell>
                ) : (
                  <EmptyState className="emptyState compact">AI 행 채움 후 검수할 수 있습니다.</EmptyState>
                )}
                <StickySaveBar
                  className="examAnalysisReviewStickySaveBar"
                  label="문항 검수"
                  message={reviewStatus.message || `${confirmedReviewCount}/${questionRows.length}개 확정 · AI 2차 수정과 모두 확정은 별도 작업입니다.`}
                  saveState={reviewStatus.state === "success" ? "saved" : reviewStatus.state}
                >
                  <button
                    className="primaryButton"
                    disabled={!reviewRowsReady || isSavingReviews || isRefiningRows}
                    onClick={saveQuestionReviews}
                    type="button"
                  >
                    {isSavingReviews ? "저장 중" : "문항 검수본 저장"}
                  </button>
                </StickySaveBar>
            </Disclosure>
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
            onCopyText={copyOutputText}
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
            <SectionHeader
              density="slim"
              description={activeRun ? workflowStatusLabel(activeRun.workflowStatus) : "대기"}
              title="진행 단계"
              titleAs="strong"
            />
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
            <SectionHeader
              density="slim"
              description={`${events.length}건`}
              title="저장 이벤트"
              titleAs="strong"
            />
            <div className="examAnalysisEventList">
              {events.length === 0 ? (
                <EmptyState className="emptyState compact">이벤트 없음</EmptyState>
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

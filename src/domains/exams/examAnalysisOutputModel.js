export const examAnalysisOutputInputFields = [
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

export const examAnalysisGptChecklistManualFields = [
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

export const examAnalysisBlogBlockFields = [
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

export const examAnalysisOutputBenchmarkMap = [
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

export const examAnalysisKeyQuestionBlockFields = [
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

export const examAnalysisOutputAllInputFields = [
  ...examAnalysisOutputInputFields,
  ...examAnalysisGptChecklistManualFields,
  ...examAnalysisBlogBlockFields
];

export const examAnalysisOutputEditorialChecklist = [
  "인사와 학교/학년/고사 소개가 자연스럽게 시작되는지",
  "시험 개요에 문항 구성, 배점, 범위, 등급컷 또는 예상컷이 필요한 만큼 들어갔는지",
  "초반/중반/후반 출제 흐름과 체감 난도가 벤치마킹 글처럼 설명되는지",
  "주요문항마다 문항번호, 유사교재, 핵심 개념, 학생이 흔들릴 지점, 풀이 방향이 보이는지",
  "다음 학습 방향과 수업/특강/상담 연결이 과장 없이 이어지는지"
];

export const examAnalysisOutputAiBoundaryRules = [
  "AI 가능: 이모티콘 위치, 문단 줄나눔, 형광펜 태그, 문체 다듬기, 카드 문구 압축",
  "AI 가능: 선생님 메모를 학부모가 읽기 쉬운 블로그 문장과 인스타 카드 문장으로 재구성",
  "AI 불가: 문항 수, 시험 범위, 문항번호, 유사문항, 정답/풀이 사실을 추측해서 새로 만들기",
  "AI 불가: 선생님 저장본을 자동으로 덮어쓰기, Canva 실제 레이아웃을 확인 없이 완료 처리하기"
];

export function createEmptyExamAnalysisKeyQuestionBlock(index = 1) {
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

export function normalizeExamAnalysisKeyQuestionBlock(block = {}, index = 0) {
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

export function getExamAnalysisKeyQuestionBlockHasContent(block = {}) {
  return examAnalysisKeyQuestionBlockFields.some((field) => String(block[field.key] || "").trim());
}

function getLegacyExamAnalysisKeyQuestionText(inputs = {}, keys = []) {
  return keys
    .map((key) => String(inputs?.[key] || "").trim())
    .filter(Boolean)
    .join("\n");
}

export function normalizeExamAnalysisKeyQuestionBlocks(inputs = {}) {
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

export function createEmptyExamAnalysisOutputDrafts() {
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

export function getExamAnalysisOutputDraftsFromRun(run = {}) {
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

export function getExamAnalysisOutputPersistenceSnapshot(outputDrafts = {}) {
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

export function getExamAnalysisOutputSaveMismatches(requestedDrafts = {}, persistedDrafts = {}) {
  const requested = getExamAnalysisOutputPersistenceSnapshot(requestedDrafts);
  const persisted = getExamAnalysisOutputPersistenceSnapshot(persistedDrafts);
  const mismatches = [];
  if (JSON.stringify(requested.inputs) !== JSON.stringify(persisted.inputs)) mismatches.push("입력칸");
  if (requestedDrafts.blog?.teacherTouched && requested.blogTeacherDraft !== persisted.blogTeacherDraft) mismatches.push("블로그 선생님 수정본");
  if (requestedDrafts.instagram?.teacherTouched && requested.instagramTeacherDraft !== persisted.instagramTeacherDraft) mismatches.push("인스타 선생님 수정본");
  return mismatches;
}

export function getExamAnalysisOutputSectionText(section = {}) {
  return section.teacherTouched || section.teacherUpdatedAt || section.teacherDraft
    ? section.teacherDraft
    : section.aiDraft || "";
}

export function getExamAnalysisOutputSectionLabel(section = {}) {
  if (section.teacherTouched || section.teacherUpdatedAt || section.teacherDraft) return "선생님 수정본 우선";
  if (section.aiDraft) return "AI 초안";
  return "초안 없음";
}

export function getExamAnalysisOutputLastSavedAt(outputDrafts = {}) {
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

export function mergeExamAnalysisOutputSectionPreservingLocalEdits(nextSection = {}, localSection = {}) {
  if (!localSection?.teacherTouched) return nextSection;
  return {
    ...nextSection,
    teacherDraft: localSection.teacherDraft ?? "",
    teacherTouched: true,
    teacherUpdatedAt: localSection.teacherUpdatedAt || nextSection.teacherUpdatedAt || "",
    updatedAt: nextSection.updatedAt || localSection.updatedAt || ""
  };
}

export function mergeExamAnalysisOutputDraftsPreservingLocalEdits(nextDrafts = {}, localDrafts = {}) {
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

export function getExamAnalysisOutputInputCount(inputs = {}) {
  const regularInputCount = examAnalysisOutputAllInputFields.filter((field) => String(inputs[field.key] || "").trim()).length;
  const keyQuestionInputCount = (inputs.keyQuestionBlocks ?? []).filter(getExamAnalysisKeyQuestionBlockHasContent).length;
  return regularInputCount + keyQuestionInputCount;
}

export function getExamAnalysisOutputInputTotal(inputs = {}) {
  const keyQuestionBlocks = Array.isArray(inputs.keyQuestionBlocks) && inputs.keyQuestionBlocks.length
    ? inputs.keyQuestionBlocks
    : [createEmptyExamAnalysisKeyQuestionBlock(1)];
  return examAnalysisOutputAllInputFields.length + keyQuestionBlocks.length;
}

export function formatExamAnalysisEventTime(value) {
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

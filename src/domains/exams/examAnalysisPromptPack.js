import { buildExamAnalysisSlideSequence } from "./examAnalysisSlideSequence.js";

export const EXAM_ANALYSIS_PROMPT_PACK_VERSION = 1;

const clean = (value) => String(value ?? "").trim();
const lines = (value) => (Array.isArray(value) ? value : [value]).map(clean).filter(Boolean);
const bullet = (items) => lines(items).map((item) => `- ${item}`).join("\n");

function commonFacts(draft = {}) {
  const common = draft.roleInputs?.common ?? {};
  return [
    `학교명: ${clean(common.schoolName) || "[입력 필요]"}`,
    `학년: ${clean(common.grade) || "[입력 필요]"}`,
    `시험명: ${clean(common.examName) || "[입력 필요]"}`,
    `과목: ${clean(common.subject) || "[입력 필요]"}`,
    `학교 스타일: ${clean(common.schoolStyle) || "[입력 필요]"}`,
  ];
}

export function createExamAnalysisMasterPrompt(draft = {}, sequence = buildExamAnalysisSlideSequence(draft)) {
  return [
    "[프로젝트 공통 지침 · 모든 슬라이드 프롬프트 앞에 함께 사용]",
    "한국 중·고등학교 시험분석 카드뉴스를 만드는 전문 에디토리얼 디자이너로 작업한다.",
    "",
    "1. 산출물 규격",
    "- 세로형 4:5, 1080×1350px, 한 번에 슬라이드 1장만 생성",
    "- 모바일에서 읽히는 큰 한글, 넉넉한 안전 여백, 명확한 정보 위계",
    "- 같은 프로젝트의 색상·타이포·카드 모서리·아이콘·페이지 번호 위치를 모든 장에서 일관되게 유지",
    "",
    "2. 고정 사실",
    bullet(commonFacts(draft)),
    "",
    "3. 편집 원칙",
    "- 제공된 문장과 숫자만 사용하고 학교명, 문항 수, 배점, 범위, 문항번호, 정답, 교재·출처를 추측하지 않는다.",
    "- 입력 문구는 의미를 바꾸지 않는다. 긴 문장은 2~4줄로 나누되 수치·고유명사·수학 용어를 그대로 보존한다.",
    "- 문제 crop과 손풀이 이미지는 사용자가 대화에 첨부한 원본을 그대로 배치한다. 수식·도형·그래프·필기를 재작성하거나 새로 그리지 않는다.",
    "- 지정 자산이 첨부되지 않았으면 가짜 문제나 풀이를 생성하지 말고 이미지 생성을 중단해 누락 자산을 알린다.",
    "- 과도한 3D, 사진풍 배경, 장식용 수학기호, 임의 로고, 임의 연락처, 확인되지 않은 등급컷을 추가하지 않는다.",
    "",
    "4. 시퀀스",
    `- ${sequence.presetLabel}, 총 ${sequence.slides.length}장`,
    bullet(sequence.slides.map((slide) => `${slide.slideNumber}번 · ${slide.title}`)),
  ].join("\n");
}

function getKeyQuestion(draft, slide) {
  return draft.roleInputs?.keyQuestions?.[slide.questionIndex] ?? {};
}

function roleContent(slide, draft) {
  const common = draft.roleInputs?.common ?? {};
  const exam = draft.roleInputs?.examAnalysis ?? {};
  const next = draft.roleInputs?.nextPreparation ?? {};
  const cta = draft.roleInputs?.cta ?? {};
  const question = getKeyQuestion(draft, slide);
  const roleGroup = slide.roleGroup;

  if (roleGroup === "cover") return {
    headline: `${clean(common.schoolName)} ${clean(common.grade)} ${clean(common.examName)}`,
    body: [`${clean(common.subject)} 시험분석`, clean(common.schoolStyle)],
    layout: "중앙 또는 좌측 정렬의 강한 표지. 학교명·학년·시험명·과목을 가장 크게, 장식은 최소화한다.",
  };
  if (roleGroup === "exam_structure") return {
    headline: "시험 구조 한눈에 보기",
    body: [`문항 수: ${clean(exam.questionCount)}`, `배점/구성: ${clean(exam.scoreStructure)}`, `범위: ${clean(exam.scope)}`],
    layout: "문항 수·배점 구조·범위를 3개 정보 카드 또는 정돈된 표로 배치한다.",
  };
  if (roleGroup === "unit_distribution") return {
    headline: "단원별 출제 비중",
    body: [clean(exam.unitDistributionNote)],
    layout: "비중 비교가 즉시 보이는 막대 또는 도넛 차트형 카드. 입력된 수치만 사용하고 합계를 새로 계산하지 않는다.",
  };
  if (roleGroup === "difficulty_flow") return {
    headline: "난이도와 시험 흐름",
    body: [clean(exam.difficultyNote)],
    layout: "난이도 분포와 초반→후반 흐름을 분리한 2단 카드. 근거 문장을 짧은 강조 박스로 배치한다.",
  };
  if (roleGroup === "overall_review") return {
    headline: "이번 시험 총평",
    body: [clean(exam.overallReview)],
    layout: "한 문장 핵심 요약을 크게 두고, 나머지는 2~3개 관찰 포인트로 나눈다.",
  };
  if (roleGroup === "score_gap") return {
    headline: "점수 갈림 포인트",
    body: (draft.roleInputs?.keyQuestions ?? []).map((item) => `${clean(item.questionNumber)} · ${clean(item.selectionReason)}`),
    layout: "주요문항을 번호별로 비교하는 고등학교용 분석 카드. 순위를 만들거나 점수를 추측하지 않는다.",
  };
  if (roleGroup === "key_question") return {
    headline: `주요문항 ${clean(question.questionNumber)}`,
    body: [
      `선정 이유: ${clean(question.selectionReason)}`,
      `핵심 개념: ${lines(question.concepts).join(", ")}`,
      `자주 틀리는 지점: ${clean(question.errorPoint)}`,
    ],
    layout: `사용자가 첨부한 문제 crop '${clean(question.sourceAssetId)}'을 크게 배치하고, 옆이나 아래에 선정 이유·핵심 개념·오답 지점을 둔다. 문제 이미지를 재작성하지 않는다.`,
    assetInstruction: `필수 첨부 자산: 문제 crop '${clean(question.sourceAssetId)}'`,
  };
  if (roleGroup === "solution") return {
    headline: `풀이 전략 ${clean(question.questionNumber)}`,
    body: [`풀이 순서: ${clean(question.strategy)}`, `오답 점검: ${clean(question.errorPoint)}`],
    layout: `사용자가 첨부한 검증 손풀이 '${clean(question.solutionAssetId)}'를 원본 비율로 배치하고 풀이 순서를 2~4단계로 요약한다. 손글씨와 수식을 재작성하지 않는다.`,
    assetInstruction: `필수 첨부 자산: 검증 손풀이 '${clean(question.solutionAssetId)}'`,
  };
  if (roleGroup === "next_preparation") return {
    headline: "다음 시험 대비",
    body: lines(next.actionItems).map((item, index) => `${index + 1}. ${item}`),
    layout: "교사가 확정한 행동 3~5개를 체크리스트로 배치한다. 추상적인 응원 문구보다 동사로 시작하는 행동을 강조한다.",
  };
  return {
    headline: "분석을 수업과 다음 행동으로",
    body: [clean(cta.valueStatement), clean(cta.contactOrNextAction)],
    layout: "학원 관리 문장과 연락/다음 행동을 분리한다. 검수된 연락처·링크 외에는 만들지 않는다.",
  };
}

export function createExamAnalysisSlidePrompt(slide, draft = {}, sequence = buildExamAnalysisSlideSequence(draft)) {
  const content = roleContent(slide, draft);
  return [
    `[슬라이드 ${slide.slideNumber}/${sequence.slides.length} · ${slide.roleId}]`,
    `제목: ${content.headline}`,
    "",
    "반드시 넣을 내용:",
    bullet(content.body),
    "",
    `레이아웃: ${content.layout}`,
    content.assetInstruction ? `자산 규칙: ${content.assetInstruction}` : "자산 규칙: 별도 원본 이미지 없이 통렌더한다.",
    `페이지 번호: ${slide.slideNumber}/${sequence.slides.length}`,
    `상태: ${slide.status === "ready" ? "생성 가능" : `생성 전 입력 필요 (${slide.missingFields.join(", ")})`}`,
    "",
    "위 내용으로 슬라이드 1장만 생성한다. 다른 슬라이드나 설명문은 출력하지 않는다.",
  ].join("\n");
}

export function createExamAnalysisRevisionPrompt(slide, draft = {}) {
  const content = roleContent(slide, draft);
  return [
    `[슬라이드 ${slide.slideNumber} 수정 프롬프트]`,
    "첨부한 기존 생성 이미지를 수정한다.",
    `유지: 전체 색상 시스템, 타이포 위계, 카드 구조, 페이지 번호 ${slide.slideNumber}, 제목 '${content.headline}'`,
    "보호: 학교명·학년·시험명·과목·문항번호·수치·수학 기호·첨부 원본 이미지의 내용",
    "변경 요청: [여기에 수정할 내용만 입력]",
    "변경 요청에 없는 요소는 그대로 유지하고, 전체를 새 디자인으로 재생성하지 않는다.",
  ].join("\n");
}

export function createExamAnalysisQaPrompt(slide, draft = {}, sequence = buildExamAnalysisSlideSequence(draft)) {
  const content = roleContent(slide, draft);
  return [
    `[슬라이드 ${slide.slideNumber} QA 프롬프트]`,
    "첨부한 생성 이미지를 아래 원본 데이터와 대조해 검사한다. 이미지를 수정하지 말고 검사 결과만 답한다.",
    `기대 제목: ${content.headline}`,
    "기대 본문:",
    bullet(content.body),
    `기대 페이지 번호: ${slide.slideNumber}/${sequence.slides.length}`,
    content.assetInstruction ? content.assetInstruction : "원본 이미지 슬롯 없음",
    "검사 항목: 한글 오탈자, 숫자/문항번호 불일치, 잘린 글자, 작은 글자, 겹침, 색상 일관성, 임의 사실 추가, 원본 문제·손풀이 변형 여부",
    "응답 형식: PASS 또는 FAIL / 문제 위치 / 잘못된 내용 / 정확한 수정 문구. 확신할 수 없으면 사람 확인 필요로 표시한다.",
  ].join("\n");
}

export function createExamAnalysisGlobalRevisionPrompt(sequence) {
  return [
    "[전체 시리즈 수정 지침]",
    `총 ${sequence.slides.length}장의 색상, 타이포, 카드 모서리, 안전 여백, 페이지 번호 위치를 하나의 시리즈처럼 통일한다.`,
    "각 장의 학교명·시험명·문항번호·수치·원본 문제/손풀이 내용은 변경하지 않는다.",
    "수정 요청: [전체 시리즈에 공통 적용할 변경만 입력]",
  ].join("\n");
}

export function createExamAnalysisPromptPack(draft = {}) {
  const sequence = buildExamAnalysisSlideSequence(draft);
  const masterPrompt = createExamAnalysisMasterPrompt(draft, sequence);
  const slides = sequence.slides.map((slide) => ({
    ...slide,
    generationAllowed: slide.status === "ready",
    prompt: createExamAnalysisSlidePrompt(slide, draft, sequence),
    revisionPrompt: createExamAnalysisRevisionPrompt(slide, draft),
    qaPrompt: createExamAnalysisQaPrompt(slide, draft, sequence),
  }));
  const globalRevisionPrompt = createExamAnalysisGlobalRevisionPrompt(sequence);
  const text = [
    masterPrompt,
    ...slides.flatMap((slide) => ["", "=".repeat(64), "", slide.prompt, "", slide.revisionPrompt, "", slide.qaPrompt]),
    "",
    "=".repeat(64),
    "",
    globalRevisionPrompt,
  ].join("\n");
  return {
    version: EXAM_ANALYSIS_PROMPT_PACK_VERSION,
    sequence,
    masterPrompt,
    slides,
    globalRevisionPrompt,
    text,
    readyForAllGeneration: slides.every((slide) => slide.generationAllowed),
  };
}


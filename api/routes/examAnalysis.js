const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const ANTHROPIC_MESSAGES_URL = "https://api.anthropic.com/v1/messages";

const fallbackModels = {
  anthropic: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
  mock: "local-mock",
  openai: process.env.OPENAI_MODEL || "gpt-4.1-mini"
};

const examAnalysisModels = {
  anthropic: process.env.ANTHROPIC_EXAM_ANALYSIS_MODEL || "claude-opus-4-8",
  mock: "local-mock",
  openai: process.env.OPENAI_EXAM_ANALYSIS_MODEL || "gpt-5.5"
};

function envValue(name) {
  const value = process.env[name];
  return value && !value.startsWith("your_") ? value : "";
}

function requiredEnv(name) {
  const value = envValue(name);
  if (!value) {
    throw new Error(`${name} 환경변수가 필요합니다.`);
  }
  return value;
}

export function getAiStatus() {
  const defaultProviderName = defaultProvider();
  return {
    defaultProvider: defaultProviderName,
    defaultModel: fallbackModels[defaultProviderName] || fallbackModels.mock,
    providers: {
      anthropic: Boolean(envValue("ANTHROPIC_API_KEY")),
      mock: true,
      openai: Boolean(envValue("OPENAI_API_KEY"))
    },
    fallbackModels,
    examAnalysisModels
  };
}

function defaultProvider() {
  const requested = (process.env.AI_DEFAULT_PROVIDER || "").toLowerCase();
  if (["anthropic", "mock", "openai"].includes(requested)) return requested;
  if (envValue("OPENAI_API_KEY")) return "openai";
  if (envValue("ANTHROPIC_API_KEY")) return "anthropic";
  return "mock";
}

function selectedProvider(payload) {
  const provider = (payload.aiProvider || "auto").toLowerCase();
  if (provider !== "auto") return provider;
  const requestedModel = String(payload.aiModel || "").toLowerCase();
  if (requestedModel.startsWith("claude-")) return "anthropic";
  if (requestedModel.startsWith("gpt-")) return "openai";
  return defaultProvider();
}

function selectedModel(payload, useCase = "default") {
  const provider = selectedProvider(payload);
  const requestedModel = payload.aiModel;
  if (!requestedModel || requestedModel === "server-default") {
    if (useCase === "examAnalysis") return examAnalysisModels[provider] || fallbackModels[provider] || fallbackModels.mock;
    return fallbackModels[provider] || fallbackModels.mock;
  }
  return requestedModel;
}

function defaultExamAnalysisPromptForServer() {
  return [
    "역할: 으뜸수학 고태영T의 학교별 내신 시험분석 협업 AI",
    "",
    "[웹앱의 목적]",
    "이 웹앱의 목적은 시험지를 한 번에 요약하는 것이 아니라, 학교별·학년별·고사별 분석지를 누적하고 AI 1차 분석 → 강사 검수 → 문항별 코멘트 → 표/다이어그램 → 최종 산출물로 이어지는 업무 흐름을 만드는 것이다.",
    "AI는 최종 판단자가 아니라 1차 구조화 담당자다. 최종 산출물은 AI 분석과 강사 인사이트가 결합된 결과여야 한다.",
    "",
    "[분기 규칙]",
    "입력 자료가 1개년 기출이면 해당 시험 1회분을 깊게 분석한다. 문항분석표, 단원별 출제, 킬러·준킬러, 실수 유도 문항, 학생 대비 전략을 우선 만든다.",
    "입력 자료가 3개년 기출이면 연도별 변화와 반복 패턴을 우선 분석한다. 반복/증가/감소/변화/예외를 구분하고, 문항 수 변화 때문에 같은 배점의 의미가 달라질 수 있음을 문장으로 설명한다.",
    "22 개정교육과정 때문에 달라질 수 있는 부분은 변화 가능성 또는 추가 확인 필요로 구분한다.",
    "",
    "[문항별 분석 기준]",
    "각 문항은 문항 번호, 페이지, 배점, 단원, 유형, 난이도, 역할, 태그, 출처 가능성, OCR/문항 조건 요약, 학생이 틀릴 만한 지점, 강사가 확인해야 할 점, 대비 전략 후보를 가능한 범위에서 정리한다.",
    "AI 1차 분석 단계에서 문항별 배점, 단원, 난이도 초안을 반드시 questionItems 배열에 넣는다. 모르면 빈칸 대신 '확인 필요'를 쓴다.",
    "여러 해 시험지가 함께 들어온 경우 questionItems는 선택된 시험명 또는 가장 최신 시험지 1회분의 문항표 초안으로 작성하고, 3개년 반복/증감/변화는 unitDistribution, typeClassification, killerProblems, sourceCheckNotes에 정리한다.",
    "문항 태그 기준: 기본문항, 실수문항, 주요문항, 1등급 변별문항, 2등급 변별문항.",
    "",
    "[작성 원칙]",
    "시험관리 탭 데이터가 있으면 특이사항, 시험 범위, 부교재, 시험 일정, 시험 후 총평을 반영한다.",
    "시험관리 데이터가 없거나 신규 학교이면 학교·학년·과목·시험명 메타데이터와 시험지 원본만 사용한다.",
    "확인되지 않은 문항번호, 배점, 단원명, 출처를 지어내지 않는다.",
    "별도 상대배점 차트는 만들지 않는다. 중요도 변화는 문장으로 설명한다.",
    "블로그나 인스타 초안은 AI 홍보문처럼 쓰지 말고, 학교별 시험을 실제로 본 강사의 판단이 들어갈 수 있는 구조로 쓴다."
  ].join("\n");
}

function buildExamAnalysisPrompt(payload) {
  const examPrepContext = payload.examPrepContext && typeof payload.examPrepContext === "object" ? payload.examPrepContext : null;
  return [
    payload.aiPrompt || defaultExamAnalysisPromptForServer(),
    "",
    "[시험 기본정보]",
    `학교: ${payload.schoolName ?? ""}`,
    `학년: ${payload.grade ?? ""}`,
    `과목: ${payload.subject ?? ""}`,
    `시험명: ${payload.examName ?? ""}`,
    `시험일: ${payload.examDate ?? ""}`,
    `원본 링크: ${payload.sourceFileUrl ?? ""}`,
    `업로드 원본: ${Array.isArray(payload.sourceFiles) ? payload.sourceFiles.map((file, index) => `${index + 1}. ${file.fileName || file.storagePath || "원본"}`).join(" / ") : ""}`,
    "",
    "[시험관리 탭 입력정보]",
    examPrepContext
      ? [
          `시험기간: ${examPrepContext.examPeriod ?? ""}`,
          `수학시험 일정: ${Array.isArray(examPrepContext.mathExamDates) ? examPrepContext.mathExamDates.map((entry) => [entry.date, entry.subject || entry.label].filter(Boolean).join(" ")).filter(Boolean).join(", ") : examPrepContext.mathExamDate ?? ""}`,
          `특이사항: ${examPrepContext.specialNote ?? ""}`,
          `시험 범위: ${examPrepContext.scope ?? ""}`,
          `부교재: ${examPrepContext.subTextbook ?? ""}`,
          `시험 후 총평: ${examPrepContext.review ?? ""}`
        ].join("\n")
      : "연결된 시험관리 데이터가 없습니다. 학교/학년/과목 메타데이터와 시험 원본만 기준으로 초안을 만드세요.",
    "",
    "[시험 원본/OCR/메모]",
    payload.rawExamText ||
      "아직 원본 텍스트가 없습니다. 입력된 기본정보와 강사 메모를 기준으로 분석 필드 초안을 만들어 주세요.",
    "",
    "[현재 문항 카드]",
    Array.isArray(payload.questionItems) && payload.questionItems.length
      ? payload.questionItems.map((item) => `${item.number || item.questionNumber}번 · 페이지 ${item.page || 1} · 기존 배점 ${item.score || "미입력"} · 기존 단원 ${item.unit || "미입력"} · 기존 난이도 ${item.difficulty || "확인 필요"}`).join("\n")
      : "아직 문항 카드가 없습니다. OCR에서 확인 가능한 문항번호 기준으로 questionItems 초안을 생성하세요.",
    "",
    "[작성 규칙]",
    "- 시험지를 설명하지 말고 학부모·학생·강사가 다음 행동을 결정할 수 있게 분석한다.",
    "- 각 항목은 가능하면 사실 근거 → 점수에 미친 영향 → 다음 학습 행동 순서로 쓴다.",
    "- 반드시 시험 원본/OCR에 있는 사실을 우선한다.",
    "- 문항번호, 배점, 단원명, 유형, 핵심 함정, 예상 오답을 가능한 한 구분해서 쓴다.",
    "- 배점은 절대 점수로만 판단하지 말고 해당 시험 안에서 어느 문항군이 중요했는지 설명한다. 별도 상대배점 차트는 만들지 않는다.",
    "- 여러 해 시험지가 있으면 문항수 변화 때문에 같은 배점의 의미가 달라질 수 있음을 반영해 중요도 변화를 문장으로 설명한다.",
    "- 부교재, 학교 프린트, 모의고사, 수능/평가원 원문항과 실제 출제 문항의 변형 관계가 보이면 반드시 sourceCheckNotes와 관련 분석에 적는다.",
    "- 강사가 문항별 코멘트를 붙일 수 있도록 앞번호 고난도, 실수 유도, 정답률 낮음, 뒷번호 변별 이유 후보를 구체적으로 제안한다.",
    "- 원문에서 확인되지 않는 문항번호/배점/단원명은 지어내지 말고 '확인 필요'라고 쓴다.",
    "- OCR 깨짐 문자, 의미 없는 한글 조합, 특수문자 잡음은 산출물에 그대로 쓰지 말고 sourceCheckNotes에 모은다.",
    "- '어려웠다', '중요하다', '복습이 필요하다' 같은 추상 문장으로 끝내지 않는다.",
    "- unitDistribution은 단원별 문항번호/문항수/배점/난이도/대표 유형을 포함하고 문항수 합계를 자체 점검한다.",
    "- typeClassification은 기본/준킬러/킬러를 분리하고 점수 영향과 학습 순서를 포함한다.",
    "- killerProblems는 킬러와 준킬러 후보를 나누고, 문항별 함정과 필요한 개념을 포함한다.",
    "- mistakePatterns는 학생들이 실제로 틀릴 만한 행동 단위 실수를 적는다.",
    "- 문항별 태그 후보는 기본문항, 실수문항, 주요문항, 1등급 변별문항, 2등급 변별문항 중에서 제안한다.",
    "- questionItems는 웹앱 문항분석표에 바로 반영된다. 각 문항의 score, unit, difficulty는 가능한 범위에서 반드시 채운다.",
    "- questionItems의 difficulty는 확인 필요, 하, 중하, 중, 중상, 상 중 하나로 쓴다.",
    "- questionItems의 role은 기본, 실수유도, 앞번호 고난도, 준킬러, 킬러, 서술형 변별, 확인 필요 중 하나로 쓴다.",
    "- questionItems의 questionType은 객관식, 단답형, 서술형, 논술형, 확인 필요 중 하나로 쓴다.",
    "- 문항 카드는 강사가 웹앱 문항 검수 단계에서 확정한다. AI는 배점/단원/난이도/역할/태그/검수 포인트의 1차 초안을 만든다.",
    "- 여러 해 시험지가 함께 있으면 questionItems에는 선택된 시험명 또는 가장 최신 시험지 1회분만 넣는다. 3개년 비교는 텍스트 분석 필드에 반복/증감/변화를 정리한다.",
    "- blogDraft는 시험 기본 정보, 올해 총평, 단원별 현황, 킬러 문항, 다음 시험 예측 TOP 5, 공부 방향, CTA 순서로 쓴다.",
    "- instagramDraft는 7장 카드뉴스 구조로 쓴다: 표지, 시험 구성, 난이도 총평, 유형 TOP3, 킬러 포인트, 다음 시험 예측, 공부 방향/CTA.",
    "- 안내문 초안은 분석 결과를 반영하되 과장하거나 없는 사실을 만들지 않는다.",
    "",
    "반드시 아래 JSON 형식만 반환하세요.",
    "{",
    '  "oneLineSummary": "이번 시험의 핵심 성격 한 문장",',
    '  "examStructure": "문항수, 객관식/서술형, 배점, 시간 압박, 변화 포인트",',
    '  "aiOverview": "시험 개요",',
    '  "unitDistribution": "단원별 출제 분포",',
    '  "typeClassification": "기본/준킬러/킬러 유형 분류",',
    '  "killerProblems": "킬러/준킬러 문항 분석",',
    '  "mistakePatterns": "학생 실수 패턴",',
    '  "fiveCorePatterns": "시험 전 확인할 5대 핵심 패턴",',
    '  "sourceCheckNotes": "OCR/문항번호/배점 확인 필요 항목",',
    '  "studentAnalysisDraft": "학생 분석지 초안",',
    '  "parentNoticeDraft": "학부모 안내문 초안",',
    '  "blogDraft": "블로그 초안",',
    '  "instagramDraft": "인스타 카드뉴스 7장 초안",',
    '  "questionItems": [',
    '    {',
    '      "number": 1,',
    '      "page": 1,',
    '      "score": "4.4점",',
    '      "questionType": "객관식",',
    '      "unit": "이차함수의 최대최소",',
    '      "difficulty": "중",',
    '      "role": "기본",',
    '      "source": "확인 필요",',
    '      "correctRate": "확인 필요",',
    '      "ocrText": "문항 조건 요약",',
    '      "strategyComment": "AI가 본 오답 가능성과 검수 포인트",',
    '      "tags": ["기본문항"]',
    '    }',
    '  ]',
    "}"
  ].join("\n");
}

function buildCommentPrompt(payload) {
  const audienceLabel = payload.audience === "student" ? "학생" : payload.audience === "teacher" ? "강사" : "학부모";
  const audienceRule =
    payload.audience === "student"
      ? "학생이 직접 읽는 짧고 분명한 안내문으로 작성한다. 조언은 하되 과하게 압박하지 않는다."
      : payload.audience === "teacher"
        ? "강사가 수정해서 사용할 수 있는 명료한 총평 문장으로 작성한다."
        : "학부모님께 보내는 정중한 알림톡 문장으로 작성한다. 과장하지 않고 구체적인 관찰과 다음 행동을 담는다.";
  const basePrompt = String(payload.aiPrompt ?? "").trim() || [
    "역할: 으뜸수학 고태영T의 수업 코멘트 편집자",
    "목표: 강사가 대강 적은 메모를 실제 발송 가능한 자연스러운 문장으로 다듬는다.",
    "작성 원칙:",
    "- 입력된 사실만 사용하고 없는 내용은 만들지 않는다.",
    "- 강사 원문의 핵심 의도와 표현의 사실은 반드시 반영한다.",
    "- 학생을 비난하거나 단정하지 않고, 다음 행동 중심으로 쓴다.",
    "- 알림톡에 바로 붙여 넣을 수 있게 최종 문장만 반환한다.",
    "- 제목, 마크다운, 구분선, 설명 문구는 쓰지 않는다.",
    "- 2~5문장 안에서 간결하게 작성한다."
  ].join("\n");

  return [
    basePrompt,
    `대상: ${audienceLabel}`,
    `대상별 추가 원칙: ${audienceRule}`,
    "",
    "[수업 정보]",
    `학생: ${payload.studentName ?? ""}`,
    `학교/학년: ${payload.schoolName ?? ""} ${payload.grade ?? ""}`,
    `수업: ${payload.lessonName ?? ""}`,
    `날짜: ${payload.lessonDate ?? ""}`,
    `강의 교재: ${payload.lessonMaterial ?? ""}`,
    `강의 내용: ${payload.lessonContent ?? ""}`,
    `출결: ${payload.attendanceStatus ?? ""}`,
    `숙제 상태: ${payload.homeworkStatus ?? ""}`,
    `과제 상태 안내: ${payload.assignmentStatus ?? ""}`,
    "",
    "[강사 원문]",
    payload.rawText || "원문 없음"
  ].join("\n");
}

function parseJsonText(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) throw new Error("AI 응답이 비어 있습니다.");

  try {
    return JSON.parse(trimmed);
  } catch (error) {
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("AI 응답에서 JSON을 찾지 못했습니다.");
    return JSON.parse(match[0]);
  }
}

function safeParseJsonText(text) {
  const trimmed = String(text ?? "").trim();
  if (!trimmed) return null;

  try {
    return JSON.parse(trimmed);
  } catch (error) {
    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (fenced?.[1]) {
      try {
        return JSON.parse(fenced[1].trim());
      } catch (fencedError) {
        // Continue to broad object extraction.
      }
    }

    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) return null;

    try {
      return JSON.parse(trimmed.slice(start, end + 1));
    } catch (jsonError) {
      return null;
    }
  }
}

function outputTextFromOpenAi(data) {
  return data.output_text ?? data.output?.[0]?.content?.[0]?.text ?? "";
}

function outputTextFromAnthropic(data) {
  return data.content?.map((block) => block.text ?? "").join("\n") ?? "";
}

function parseImageDataUrl(dataUrl = "") {
  const match = String(dataUrl).match(/^data:([^;,]+);base64,(.*)$/);
  if (!match) throw new Error("이미지 데이터 형식이 올바르지 않습니다.");
  return {
    base64: match[2],
    mediaType: match[1]
  };
}

function normalizeVisionCropBox(box = {}) {
  const x = Math.max(0, Math.min(100, Number(box.x) || 0));
  const y = Math.max(0, Math.min(100, Number(box.y) || 0));
  const width = Math.max(0, Math.min(100 - x, Number(box.width) || 0));
  const height = Math.max(0, Math.min(100 - y, Number(box.height) || 0));
  if (width < 1 || height < 1) return null;
  return { x, y, width, height };
}

function normalizeQuestionCropBoxes(parsed, payload = {}) {
  const rawBoxes = Array.isArray(parsed)
    ? parsed
    : Array.isArray(parsed?.boxes)
      ? parsed.boxes
      : [];
  return rawBoxes
    .map((box, index) => {
      const cropBox = normalizeVisionCropBox(box);
      if (!cropBox) return null;
      return {
        ...cropBox,
        confidence: Math.max(0, Math.min(1, Number(box.confidence) || 0.5)),
        note: String(box.note || "").slice(0, 160),
        page: Math.max(1, Number(box.page || payload.pageNumber) || 1),
        questionNumber: Number(box.questionNumber || box.number || payload.questionNumbers?.[index] || index + 1) || index + 1
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.page - b.page || a.questionNumber - b.questionNumber);
}

function buildQuestionCropPrompt(payload = {}) {
  const numbers = Array.isArray(payload.questionNumbers) && payload.questionNumbers.length
    ? payload.questionNumbers.join(", ")
    : "이미지에서 보이는 문항 전체";
  return [
    "너는 수학 시험지 이미지에서 문항별 크롭 영역을 잡는 vision 보조 AI다.",
    "목표는 사람이 바로 수정할 수 있는 1차 크롭 초안을 만드는 것이다.",
    "",
    "[작업]",
    `현재 페이지: ${payload.pageNumber || 1}`,
    `대상 문항 번호: ${numbers}`,
    "이미지 안에서 각 문항의 문제 번호, 발문, 보기/선택지/조건, 풀이에 필요한 도형이나 표를 포함하는 사각형 영역을 찾는다.",
    "상단 학교명/시험명/안내문/여백은 문항 영역에서 제외한다. 단, 특정 문항 바로 위의 조건 박스가 해당 문항에 필요하면 포함한다.",
    "문항이 두 단으로 배치되어 있으면 왼쪽 위에서 아래로, 그다음 오른쪽 위에서 아래 순서가 아니라 실제 문항 번호를 기준으로 번호를 붙인다.",
    "이미지에 문항이 일부만 보이면 보이는 영역 기준으로 최대한 포함하되 note에 '일부만 보임'이라고 적는다.",
    "",
    "[좌표 규칙]",
    "x, y, width, height는 이미지 전체를 기준으로 한 퍼센트 값이다. 모두 0~100 사이 숫자로 반환한다.",
    "",
    "반드시 JSON만 반환한다.",
    "{",
    '  "boxes": [',
    '    { "questionNumber": 1, "page": 1, "x": 6, "y": 18, "width": 42, "height": 24, "confidence": 0.8, "note": "선택지 포함" }',
    "  ]",
    "}"
  ].join("\n");
}

function createMockAnalysis(payload) {
  const school = payload.schoolName || "학교";
  const subject = payload.subject || "수학";
  const sourceItems = Array.isArray(payload.questionItems) && payload.questionItems.length
    ? payload.questionItems
    : Array.from({ length: 5 }, (_, index) => ({ number: index + 1, page: 1 }));
  return {
    oneLineSummary: `${school} ${subject} 시험은 조건 해석과 풀이 근거 정리가 점수 차이를 만들 가능성이 큽니다.`,
    examStructure: "문항수/객관식/서술형/배점은 원본 확인 필요입니다. 시험지가 들어오면 시간 압박, 고배점 문항, 작년 대비 변화 가능성을 분리해 정리합니다.",
    aiOverview: `${school} ${subject} 시험은 기본 개념 확인과 조건 해석을 함께 요구하는 구조로 정리됩니다. 원본 시험지를 넣으면 문항 번호, 배점, 난이도 흐름까지 구체화합니다.`,
    unitDistribution: "1. 핵심 단원: 조건 해석형 문항\n2. 보조 단원: 계산형 문항\n3. 서술형 대비 과정 감점 가능성 확인 필요",
    typeClassification: "기본: 빠르게 맞혀야 할 계산/개념 확인 유형\n준킬러: 조건 2개 이상을 결합하는 유형\n킬러: 서술형 근거와 경우 분류가 필요한 유형",
    killerProblems: "킬러 후보: 조건을 여러 단계로 연결하는 문항\n준킬러 후보: 계산보다 이해와 식 변형에서 차이가 나는 문항\n강사 확인 필요: 실제 문항 번호와 배점",
    mistakePatterns: "조건 일부 누락, 부호 실수, 식 변형 과정 누락, 서술형 근거 부족이 예상됩니다.",
    fiveCorePatterns: "1. 조건을 식으로 바꾸기\n2. 범위 제한 확인\n3. 경우 분류 누락 방지\n4. 고배점 서술형 근거 작성\n5. 시간 안배",
    sourceCheckNotes: "원본 시험지/OCR을 넣으면 깨진 문자, 문항번호, 배점 확인 필요 항목을 따로 표시합니다.",
    studentAnalysisDraft: `${school} 학생들은 이번 시험에서 조건 해석과 풀이 과정 정리가 중요했습니다. 다음 시험 전에는 핵심 유형 반복과 서술형 근거 작성 훈련이 필요합니다.`,
    parentNoticeDraft: `${school} ${subject} 시험은 조건 해석과 서술형 과정 정리가 중요한 시험으로 보입니다. 다음 시험 대비에서는 학생별 오답 원인과 학교별 출제 흐름을 함께 확인해 보완하겠습니다.`,
    blogDraft: `# ${school} ${subject} 시험 분석\n\n## 1. 시험 기본 정보\n원본 확인 후 문항수와 배점 구조를 정리합니다.\n\n## 2. 올해 총평\n이번 시험은 단순 계산보다 조건을 읽고 식으로 연결하는 힘이 중요했습니다.\n\n## 3. 공부 방향\n${academyNameForServer()}에서는 학생별 오답과 학교별 출제 흐름을 연결해 다음 시험 대비 방향을 잡습니다.`,
    instagramDraft: `1장 표지: ${school} ${subject} 시험분석\n2장 시험 구성: 문항수/배점 원문 확인 필요\n3장 난이도 총평: 조건 해석 중심\n4장 유형 TOP3: 원본 분석 후 확정\n5장 킬러 포인트: 고배점 문항 확인 필요\n6장 다음 시험 예측: 반복 유형 중심\n7장 공부 방향/CTA: ${academyNameForServer()}`,
    questionItems: sourceItems.map((item, index) => ({
      number: Number(item.number || item.questionNumber) || index + 1,
      page: Number(item.page) || 1,
      score: item.score || "확인 필요",
      questionType: item.questionType || "확인 필요",
      unit: item.unit || "확인 필요",
      difficulty: item.difficulty || "확인 필요",
      role: item.role || "기본",
      source: item.source || "확인 필요",
      correctRate: item.correctRate || "확인 필요",
      ocrText: item.ocrText || "AI 초안: 문항 조건 확인 필요",
      strategyComment: item.strategyComment || "AI 초안: 배점·단원·난이도 검수 후 보완",
      tags: Array.isArray(item.tags) && item.tags.length ? item.tags : ["주요문항"]
    }))
  };
}

function academyNameForServer() {
  return "으뜸수학 고태영T";
}

function normalizeQuestionItemsFromAi(items = []) {
  if (!Array.isArray(items)) return [];
  const difficultyOptions = new Set(["확인 필요", "하", "중하", "중", "중상", "상"]);
  const roleOptions = new Set(["기본", "실수유도", "앞번호 고난도", "준킬러", "킬러", "서술형 변별", "확인 필요"]);
  const questionTypeOptions = new Set(["객관식", "단답형", "서술형", "논술형", "확인 필요"]);
  const sourceOptions = new Set(["확인 필요", "교과서", "부교재", "학교 프린트", "모의고사", "수능/평가원", "자체 변형", "기타"]);
  const tagAliases = {
    "기본 문항": "기본문항",
    "기본문항": "기본문항",
    "실수 유도": "실수문항",
    "실수유도": "실수문항",
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
    "2등급 변별문항": "2등급 변별문항"
  };

  return items
    .map((item, index) => {
      if (!item || typeof item !== "object") return null;
      const number = Number(item.number || item.questionNumber || item.no) || index + 1;
      const difficulty = String(item.difficulty || "확인 필요").trim();
      const role = String(item.role || "기본").trim();
      const questionType = String(item.questionType || item.type || "확인 필요").trim();
      const source = String(item.source || "확인 필요").trim();
      const rawTags = Array.isArray(item.tags) ? item.tags : String(item.tags || "").split(/[,/·]/);

      return {
        number,
        page: Math.max(1, Number(item.page) || 1),
        score: String(item.score || item.points || "").trim(),
        questionType: questionTypeOptions.has(questionType) ? questionType : "확인 필요",
        unit: String(item.unit || item.chapter || item.topic || "").trim(),
        difficulty: difficultyOptions.has(difficulty) ? difficulty : "확인 필요",
        role: roleOptions.has(role) ? role : "확인 필요",
        source: sourceOptions.has(source) ? source : "확인 필요",
        correctRate: String(item.correctRate || item.expectedCorrectRate || "").trim(),
        ocrText: String(item.ocrText || item.questionSummary || item.summary || "").trim(),
        sourceCompareComment: String(item.sourceCompareComment || item.sourceNote || "").trim(),
        strategyComment: String(item.strategyComment || item.comment || item.teacherCheckPoint || item.reviewPoint || "").trim(),
        tags: Array.from(new Set(rawTags.map((tag) => tagAliases[String(tag).trim()] || "").filter(Boolean)))
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.page - b.page || a.number - b.number);
}

function normalizeAnalysisFields(fields, payload, rawText = "") {
  const fallback = createMockAnalysis(payload);
  const parsed = fields && typeof fields === "object" ? fields : {};
  const cleanText = String(rawText ?? "").trim();
  const questionItems = normalizeQuestionItemsFromAi(parsed.questionItems);

  const normalized = {
    oneLineSummary: parsed.oneLineSummary || fallback.oneLineSummary,
    examStructure: parsed.examStructure || fallback.examStructure,
    aiOverview: parsed.aiOverview || cleanText || fallback.aiOverview,
    unitDistribution: parsed.unitDistribution || fallback.unitDistribution,
    typeClassification: parsed.typeClassification || fallback.typeClassification,
    killerProblems: parsed.killerProblems || fallback.killerProblems,
    mistakePatterns: parsed.mistakePatterns || fallback.mistakePatterns,
    fiveCorePatterns: parsed.fiveCorePatterns || fallback.fiveCorePatterns,
    sourceCheckNotes: parsed.sourceCheckNotes || fallback.sourceCheckNotes,
    studentAnalysisDraft: parsed.studentAnalysisDraft || fallback.studentAnalysisDraft,
    parentNoticeDraft: parsed.parentNoticeDraft || fallback.parentNoticeDraft,
    blogDraft: parsed.blogDraft || fallback.blogDraft,
    instagramDraft: parsed.instagramDraft || fallback.instagramDraft
  };
  if (questionItems.length) normalized.questionItems = questionItems;
  return normalized;
}

function createMockComment(payload) {
  const name = payload.studentName || "학생";
  const rawText = payload.rawText?.trim();
  if (payload.audience === "student") {
    return rawText
      ? `${name}, 오늘 확인한 내용은 다음 시간에 이어서 같이 보겠습니다. ${rawText}`
      : `${name}, 오늘 배운 내용을 차분히 복습하고 다음 과제를 계획대로 진행해 주세요.`;
  }

  if (payload.audience === "teacher") {
    return rawText
      ? `시험 총평 초안입니다. ${rawText}`
      : "시험의 주요 출제 흐름과 학생들이 어려워할 지점을 중심으로 총평을 작성해 주세요.";
  }

  return rawText
    ? `${name} 학생은 오늘 수업에서 ${rawText} 부분을 중심으로 확인했습니다. 다음 수업까지 해당 내용을 다시 점검할 수 있도록 지도하겠습니다.`
    : `${name} 학생은 오늘 수업에 참여했습니다. 과제와 수업 내용을 이어서 확인하며 다음 수업에서 보완하겠습니다.`;
}

async function runOpenAiText(prompt, model) {
  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${requiredEnv("OPENAI_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ model, input: prompt })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI 요청에 실패했습니다.");
  }

  return outputTextFromOpenAi(data);
}

async function runOpenAiVision(prompt, imageDataUrl, model) {
  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${requiredEnv("OPENAI_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      max_output_tokens: 1800,
      model,
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: prompt },
            { type: "input_image", image_url: imageDataUrl }
          ]
        }
      ]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI vision 요청에 실패했습니다.");
  }

  return outputTextFromOpenAi(data);
}

async function runAnthropicText(prompt, model) {
  const response = await fetch(ANTHROPIC_MESSAGES_URL, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": requiredEnv("ANTHROPIC_API_KEY")
    },
    body: JSON.stringify({
      model,
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude 요청에 실패했습니다.");
  }

  return outputTextFromAnthropic(data);
}

async function runAnthropicVision(prompt, imageDataUrl, model) {
  const image = parseImageDataUrl(imageDataUrl);
  const response = await fetch(ANTHROPIC_MESSAGES_URL, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": requiredEnv("ANTHROPIC_API_KEY")
    },
    body: JSON.stringify({
      model,
      max_tokens: 1800,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image",
              source: {
                type: "base64",
                media_type: image.mediaType,
                data: image.base64
              }
            }
          ]
        }
      ]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude vision 요청에 실패했습니다.");
  }

  return outputTextFromAnthropic(data);
}

export async function runExamAnalysis(payload) {
  const provider = selectedProvider(payload);
  const model = selectedModel(payload, "examAnalysis");

  if (provider === "mock") {
    return { provider, model, fields: createMockAnalysis(payload) };
  }

  if (provider === "openai") {
    const text = await runOpenAiText(buildExamAnalysisPrompt(payload), model);
    return { provider, model, fields: normalizeAnalysisFields(safeParseJsonText(text), payload, text), rawText: text };
  }

  if (provider === "anthropic") {
    const text = await runAnthropicText(buildExamAnalysisPrompt(payload), model);
    return { provider, model, fields: normalizeAnalysisFields(safeParseJsonText(text), payload, text), rawText: text };
  }

  throw new Error(`지원하지 않는 AI 제공자입니다: ${provider}`);
}

export async function draftQuestionCrops(payload) {
  const provider = selectedProvider(payload);
  const model = selectedModel(payload, "examAnalysis");
  const imageDataUrl = String(payload.imageDataUrl || "");
  if (!imageDataUrl.startsWith("data:image/")) {
    throw new Error("문항 크롭 초안에는 페이지 이미지가 필요합니다.");
  }
  const prompt = buildQuestionCropPrompt(payload);

  if (provider === "mock") {
    return { provider, model, boxes: [], rawText: "" };
  }

  const text = provider === "openai"
    ? await runOpenAiVision(prompt, imageDataUrl, model)
    : provider === "anthropic"
      ? await runAnthropicVision(prompt, imageDataUrl, model)
      : "";

  if (!text) throw new Error(`지원하지 않는 vision 제공자입니다: ${provider}`);
  const parsed = safeParseJsonText(text);
  return {
    provider,
    model,
    boxes: normalizeQuestionCropBoxes(parsed, payload),
    rawText: text
  };
}

export async function polishLessonComment(payload) {
  const provider = selectedProvider(payload);
  const model = selectedModel(payload);

  if (provider === "mock") {
    return { provider, model, polishedText: createMockComment(payload) };
  }

  const prompt = buildCommentPrompt(payload);
  if (provider === "openai") {
    return { provider, model, polishedText: (await runOpenAiText(prompt, model)).trim() };
  }

  if (provider === "anthropic") {
    return { provider, model, polishedText: (await runAnthropicText(prompt, model)).trim() };
  }

  throw new Error(`지원하지 않는 AI 제공자입니다: ${provider}`);
}

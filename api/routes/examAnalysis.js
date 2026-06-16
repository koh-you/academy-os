const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const ANTHROPIC_MESSAGES_URL = "https://api.anthropic.com/v1/messages";

const fallbackModels = {
  anthropic: "claude-sonnet-4-5",
  mock: "local-mock",
  openai: "gpt-4.1-mini"
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
  return {
    providers: {
      anthropic: Boolean(envValue("ANTHROPIC_API_KEY")),
      mock: true,
      openai: Boolean(envValue("OPENAI_API_KEY"))
    },
    fallbackModels
  };
}

function selectedModel(payload) {
  const provider = payload.aiProvider || "mock";
  return payload.aiModel || fallbackModels[provider] || fallbackModels.mock;
}

function buildExamAnalysisPrompt(payload) {
  return [
    payload.aiPrompt,
    "",
    "[시험 기본정보]",
    `학교: ${payload.schoolName ?? ""}`,
    `학년: ${payload.grade ?? ""}`,
    `과목: ${payload.subject ?? ""}`,
    `시험명: ${payload.examName ?? ""}`,
    `시험일: ${payload.examDate ?? ""}`,
    `원본 링크: ${payload.sourceFileUrl ?? ""}`,
    "",
    "[시험 원본/OCR/메모]",
    payload.rawExamText || "아직 원본 텍스트가 없습니다. 입력된 기본정보를 기준으로 분석 필드 초안을 만들어주세요.",
    "",
    "반드시 아래 JSON 형식만 반환하세요.",
    "{",
    '  "aiOverview": "시험 개요",',
    '  "unitDistribution": "단원별 출제 분포",',
    '  "killerProblems": "킬러/준킬러 문항 분석",',
    '  "mistakePatterns": "학생 실수 패턴",',
    '  "studentAnalysisDraft": "학생 분석지 초안",',
    '  "blogDraft": "블로그 초안",',
    '  "instagramDraft": "인스타 카드뉴스 7장 초안"',
    "}"
  ].join("\n");
}

function buildCommentPrompt(payload) {
  const audienceLabel = payload.audience === "student" ? "학생" : "학부모";
  return [
    "역할: koh_you_math 고태영T의 수업 코멘트 편집자",
    `대상: ${audienceLabel}`,
    "목표: 강사가 대강 적은 메모를 실제 발송 가능한 자연스러운 문장으로 다듬는다.",
    "원칙:",
    "- 과장하지 않는다.",
    "- 없는 사실을 만들지 않는다.",
    "- 학부모용은 공손하고 구체적으로 쓴다.",
    "- 학생용은 짧고 행동이 분명하게 보이게 쓴다.",
    "- 발송 전 강사가 수정할 수 있도록 완성문만 반환한다.",
    "",
    "[수업 정보]",
    `학생: ${payload.studentName ?? ""}`,
    `학교/학년: ${payload.schoolName ?? ""} ${payload.grade ?? ""}`,
    `수업: ${payload.lessonName ?? ""}`,
    `날짜: ${payload.lessonDate ?? ""}`,
    `출결: ${payload.attendanceStatus ?? ""}`,
    `숙제 상태: ${payload.homeworkStatus ?? ""}`,
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

function outputTextFromOpenAi(data) {
  return data.output_text ?? data.output?.[0]?.content?.[0]?.text ?? "";
}

function outputTextFromAnthropic(data) {
  return data.content?.map((block) => block.text ?? "").join("\n") ?? "";
}

function createMockAnalysis(payload) {
  const school = payload.schoolName || "학교";
  const subject = payload.subject || "수학";
  return {
    aiOverview: `${school} ${subject} 시험은 기본 개념 확인과 조건 해석을 함께 요구하는 구조로 정리됩니다. 원본 시험지를 넣으면 문항 번호, 배점, 난이도 흐름까지 구체화합니다.`,
    unitDistribution: "1. 핵심 단원: 조건 해석형 문항\n2. 보조 단원: 계산형 문항\n3. 서술형: 풀이 과정 감점 가능성 확인 필요",
    killerProblems: "킬러 후보: 조건을 여러 단계로 연결하는 문항\n준킬러 후보: 계산량보다 독해와 식 변형에서 차이가 나는 문항\n강사 확인 필요: 실제 문항 번호와 배점",
    mistakePatterns: "조건 일부 누락, 부호 실수, 식 변형 과정 누락, 서술형 근거 부족이 예상됩니다.",
    studentAnalysisDraft: `${school} 학생들은 이번 시험에서 조건 해석과 풀이 과정 정리가 중요했습니다. 다음 시험 전에는 핵심 유형 반복과 서술형 근거 작성 훈련이 필요합니다.`,
    blogDraft: `${school} ${subject} 시험 분석입니다. 이번 시험은 단순 계산보다 조건을 읽고 식으로 연결하는 힘이 중요했습니다. koh_you_math에서는 학생별 오답과 학교별 출제 흐름을 연결해 다음 시험 대비 방향을 잡습니다.`,
    instagramDraft: "1장 시험 총평\n2장 출제 단원\n3장 난이도 흐름\n4장 킬러문항 포인트\n5장 학생 실수 TOP3\n6장 다음 시험 대비법\n7장 koh_you_math 안내"
  };
}

function createMockComment(payload) {
  const name = payload.studentName || "학생";
  const rawText = payload.rawText?.trim();
  if (payload.audience === "student") {
    return rawText
      ? `${name}, 오늘 수업에서 확인한 부분은 다음 시간 전까지 다시 정리해 주세요. 특히 ${rawText} 부분을 우선 점검하면 좋겠습니다.`
      : `${name}, 오늘 배운 내용을 짧게 복습하고 다음 숙제를 계획대로 진행해 주세요.`;
  }

  return rawText
    ? `${name} 학생은 오늘 수업에서 ${rawText} 부분을 중심으로 확인했습니다. 다음 수업 전까지 해당 내용을 다시 점검할 수 있도록 지도하겠습니다.`
    : `${name} 학생은 오늘 수업에 참여했습니다. 숙제와 수업 내용을 이어서 확인하며 다음 수업에서 보완하겠습니다.`;
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

export async function runExamAnalysis(payload) {
  const provider = payload.aiProvider || "mock";
  const model = selectedModel(payload);

  if (provider === "mock") {
    return { provider, model, fields: createMockAnalysis(payload) };
  }

  if (provider === "openai") {
    return { provider, model, fields: parseJsonText(await runOpenAiText(buildExamAnalysisPrompt(payload), model)) };
  }

  if (provider === "anthropic") {
    return { provider, model, fields: parseJsonText(await runAnthropicText(buildExamAnalysisPrompt(payload), model)) };
  }

  throw new Error(`지원하지 않는 AI 제공자입니다: ${provider}`);
}

export async function polishLessonComment(payload) {
  const provider = payload.aiProvider || "mock";
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

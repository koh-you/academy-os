const OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";
const ANTHROPIC_MESSAGES_URL = "https://api.anthropic.com/v1/messages";

const fallbackModels = {
  anthropic: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
  mock: "local-mock",
  openai: process.env.OPENAI_MODEL || "gpt-4.1-mini"
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
    fallbackModels
  };
}

function defaultProvider() {
  const requested = (process.env.AI_DEFAULT_PROVIDER || "").toLowerCase();
  if (["anthropic", "mock", "openai"].includes(requested)) return requested;
  if (envValue("OPENAI_API_KEY")) return "openai";
  if (envValue("ANTHROPIC_API_KEY")) return "anthropic";
  return "mock";
}

function selectedProvider(payload = {}) {
  const provider = (payload.aiProvider || "auto").toLowerCase();
  if (provider !== "auto") return provider;
  const requestedModel = String(payload.aiModel || "").toLowerCase();
  if (requestedModel.startsWith("claude-")) return "anthropic";
  if (requestedModel.startsWith("gpt-")) return "openai";
  return defaultProvider();
}

function selectedModel(payload = {}) {
  const provider = selectedProvider(payload);
  const requestedModel = payload.aiModel;
  if (!requestedModel || requestedModel === "server-default") {
    return fallbackModels[provider] || fallbackModels.mock;
  }
  return requestedModel;
}

function buildCommentPrompt(payload = {}) {
  const isSpellingOnly = payload.polishMode === "spellingOnly";
  if (isSpellingOnly) {
    const basePrompt = String(payload.aiPrompt ?? "").trim() || [
      "역할: 시험 후 총평 맞춤법 교정자",
      "목표: 입력된 시험 후 총평의 맞춤법, 띄어쓰기, 명백한 오탈자만 고친다.",
      "작성 원칙:",
      "- 문장 구조, 어휘, 말투, 분량, 번호, 줄바꿈은 유지한다.",
      "- 사실, 날짜, 점수, 난이도, 과목명, 학교명, 교재명은 바꾸지 않는다.",
      "- 내용을 요약하거나 더 자연스럽게 다시 쓰지 않는다.",
      "- 새 문장이나 설명을 추가하지 않는다.",
      "- 수정할 곳이 없으면 원문을 그대로 반환한다.",
      "- 최종 교정문만 반환한다."
    ].join("\n");

    return [
      basePrompt,
      "",
      "[원문]",
      payload.rawText || "원문 없음"
    ].join("\n");
  }

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

function outputTextFromOpenAi(data = {}) {
  if (data.output_text) return data.output_text;
  const texts = [];
  if (Array.isArray(data.output)) {
    data.output.forEach((item) => {
      if (typeof item?.content === "string") texts.push(item.content);
      if (Array.isArray(item?.content)) {
        item.content.forEach((block) => {
          const text = block?.text || block?.output_text || block?.content;
          if (typeof text === "string") texts.push(text);
        });
      }
    });
  }
  return texts.join("\n").trim();
}

function outputTextFromAnthropic(data = {}) {
  return data.content?.map((block) => block.text ?? "").join("\n") ?? "";
}

function createMockComment(payload = {}) {
  const name = payload.studentName || "학생";
  const rawText = String(payload.rawText ?? "").trim();
  if (payload.polishMode === "spellingOnly") {
    return rawText || "";
  }

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

async function runOpenAiText(prompt, model, maxOutputTokens = 0) {
  const response = await fetch(OPENAI_RESPONSES_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${requiredEnv("OPENAI_API_KEY")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: prompt,
      ...(maxOutputTokens ? { max_output_tokens: maxOutputTokens } : {})
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "OpenAI 요청에 실패했습니다.");
  }

  return outputTextFromOpenAi(data);
}

async function runAnthropicText(prompt, model, maxTokens = 4000) {
  const response = await fetch(ANTHROPIC_MESSAGES_URL, {
    method: "POST",
    headers: {
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
      "x-api-key": requiredEnv("ANTHROPIC_API_KEY")
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || "Claude 요청에 실패했습니다.");
  }

  return outputTextFromAnthropic(data);
}

export async function polishLessonComment(payload = {}) {
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

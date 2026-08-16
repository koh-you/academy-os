import assert from "node:assert/strict";
import {
  runAnthropicExamAnalysisOutputDraft,
  runAnthropicPdfMessage,
  runAnthropicPdfQuestionRowFill,
  runOpenAiExamAnalysisOutputDraft,
  runOpenAiPdfMessage,
  runOpenAiPdfQuestionRowFill
} from "../api/routes/commentPolish.js";

const originalFetch = globalThis.fetch;
const originalAnthropicKey = process.env.ANTHROPIC_API_KEY;
const originalOpenAiKey = process.env.OPENAI_API_KEY;

process.env.ANTHROPIC_API_KEY = "anthropic-test-key";
process.env.OPENAI_API_KEY = "openai-test-key";

try {
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    if (url.includes("anthropic.com")) {
      return {
        ok: true,
        json: async () => ({
          content: [
            { content: " legacy-compatible text " },
            { text: "second block " }
          ]
        })
      };
    }
    return {
      ok: true,
      json: async () => ({
        output: [{ content: [{ output_text: "openai pdf result" }] }]
      })
    };
  };

  const buffer = Buffer.from("pdf-fixture");
  const anthropicText = await runAnthropicPdfMessage({
    buffer,
    errorMessage: "anthropic boundary failed",
    maxTokens: 2000,
    model: "claude-test",
    promptText: "inspect the PDF"
  });
  assert.equal(anthropicText, "legacy-compatible text \nsecond block");

  const anthropicCall = calls[0];
  assert.equal(anthropicCall.url, "https://api.anthropic.com/v1/messages");
  assert.equal(anthropicCall.options.method, "POST");
  assert.equal(anthropicCall.options.headers["x-api-key"], "anthropic-test-key");
  const anthropicBody = JSON.parse(anthropicCall.options.body);
  assert.equal(anthropicBody.model, "claude-test");
  assert.equal(anthropicBody.max_tokens, 2000);
  assert.equal(anthropicBody.messages[0].content[0].source.data, buffer.toString("base64"));
  assert.equal(anthropicBody.messages[0].content[1].text, "inspect the PDF");

  const openAiText = await runOpenAiPdfMessage({
    buffer,
    errorMessage: "openai boundary failed",
    fileName: "source.pdf",
    maxOutputTokens: 6000,
    model: "gpt-test",
    promptText: "find question boundaries"
  });
  assert.equal(openAiText, "openai pdf result");

  const openAiCall = calls[1];
  assert.equal(openAiCall.url, "https://api.openai.com/v1/responses");
  assert.equal(openAiCall.options.method, "POST");
  assert.equal(openAiCall.options.headers.Authorization, "Bearer openai-test-key");
  const openAiBody = JSON.parse(openAiCall.options.body);
  assert.equal(openAiBody.model, "gpt-test");
  assert.equal(openAiBody.max_output_tokens, 6000);
  assert.equal(openAiBody.input[0].content[0].filename, "source.pdf");
  assert.equal(
    openAiBody.input[0].content[0].file_data,
    `data:application/pdf;base64,${buffer.toString("base64")}`
  );
  assert.equal(openAiBody.input[0].content[1].text, "find question boundaries");

  const anthropicDraft = await runAnthropicExamAnalysisOutputDraft({
    model: "claude-output-test",
    outputType: "blog",
    prompt: "draft the blog"
  });
  assert.deepEqual(anthropicDraft, {
    provider: "anthropic",
    model: "claude-output-test",
    text: "legacy-compatible text \nsecond block"
  });
  assert.equal(JSON.parse(calls[2].options.body).max_tokens, 6500);

  const openAiDraft = await runOpenAiExamAnalysisOutputDraft({
    model: "gpt-output-test",
    outputType: "instagram",
    prompt: "draft the cards"
  });
  assert.deepEqual(openAiDraft, {
    provider: "openai",
    model: "gpt-output-test",
    text: "openai pdf result"
  });
  assert.equal(JSON.parse(calls[3].options.body).max_output_tokens, 4800);

  await runAnthropicPdfQuestionRowFill({ buffer, model: "claude-row-test", promptText: "fill rows" });
  const anthropicRowBody = JSON.parse(calls[4].options.body);
  assert.equal(anthropicRowBody.max_tokens, 6000);
  assert.equal(anthropicRowBody.messages[0].content[1].text, "fill rows");

  await runOpenAiPdfQuestionRowFill({
    buffer,
    fileName: "row-source.pdf",
    model: "gpt-row-test",
    promptText: "fill openai rows"
  });
  const openAiRowBody = JSON.parse(calls[5].options.body);
  assert.equal(openAiRowBody.max_output_tokens, 6000);
  assert.equal(openAiRowBody.input[0].content[0].filename, "row-source.pdf");
  assert.equal(openAiRowBody.input[0].content[1].text, "fill openai rows");

  globalThis.fetch = async () => ({
    ok: false,
    json: async () => ({ error: { message: "provider rejected fixture" } })
  });
  await assert.rejects(
    runAnthropicPdfMessage({ buffer, model: "claude-test", promptText: "fail" }),
    /provider rejected fixture/
  );
  await assert.rejects(
    runOpenAiPdfMessage({ buffer, model: "gpt-test", promptText: "fail" }),
    /provider rejected fixture/
  );

  globalThis.fetch = async () => ({ ok: false, json: async () => ({}) });
  await assert.rejects(
    runAnthropicExamAnalysisOutputDraft({ model: "claude-test", outputType: "blog", prompt: "fail" }),
    /Claude 시험분석 산출물 초안 생성에 실패했습니다\./
  );
  await assert.rejects(
    runOpenAiExamAnalysisOutputDraft({ model: "gpt-test", outputType: "blog", prompt: "fail" }),
    /OpenAI 시험분석 산출물 초안 생성에 실패했습니다\./
  );
} finally {
  globalThis.fetch = originalFetch;
  if (originalAnthropicKey === undefined) delete process.env.ANTHROPIC_API_KEY;
  else process.env.ANTHROPIC_API_KEY = originalAnthropicKey;
  if (originalOpenAiKey === undefined) delete process.env.OPENAI_API_KEY;
  else process.env.OPENAI_API_KEY = originalOpenAiKey;
}

console.log("provider boundary transports passed · PDF, row-fill, and output-draft provider payloads");

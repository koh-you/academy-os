import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const anthropicMessagesUrl = "https://api.anthropic.com/v1/messages";

function parseArgs(argv) {
  const args = {
    provider: "anthropic",
    model: process.env.ANTHROPIC_BENCHMARK_VISION_MODEL || process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
    blogId: "skills_in_math2",
    logNo: "224336139893",
    title: "불암중학교 2학년 1학기 기말고사 수학 시험지 분석",
    imageDir: ".codex-temp/benchmark-images",
    imagePrefix: "bulam2-",
    imageLimit: 8,
    outDir: ".codex-temp/benchmark-vision-results",
    dryRun: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (next == null || next.startsWith("--")) {
      throw new Error(`Missing value for ${arg}`);
    }
    i += 1;
    if (key === "imageLimit") {
      args.imageLimit = Number.parseInt(next, 10);
    } else {
      args[key] = next;
    }
  }

  if (args.provider !== "anthropic") {
    throw new Error("This pilot script currently supports --provider anthropic only.");
  }
  if (!Number.isFinite(args.imageLimit) || args.imageLimit <= 0) {
    throw new Error("--imageLimit must be a positive number.");
  }
  return args;
}

async function loadLocalEnv() {
  const envPath = path.join(repoRoot, ".env.local");
  try {
    const text = await fs.readFile(envPath, "utf8");
    for (const rawLine of text.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const index = line.indexOf("=");
      if (index < 1) continue;
      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();
      if (key && value && !process.env[key]) {
        process.env[key] = value;
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

function decodeHtmlEntities(text) {
  return String(text || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#8203;/g, "")
    .replace(/\u200b/g, "")
    .replace(/&#x2F;/g, "/");
}

function stripHtml(html) {
  return decodeHtmlEntities(
    String(html || "")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|li|h\d)>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/[ \t]+/g, " ")
      .replace(/\n\s+/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
  ).trim();
}

async function fetchPostText({ blogId, logNo }) {
  const url = `https://m.blog.naver.com/PostView.naver?blogId=${encodeURIComponent(blogId)}&logNo=${encodeURIComponent(logNo)}`;
  const response = await fetch(url, {
    headers: {
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      Referer: `https://m.blog.naver.com/${blogId}`,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Naver post HTML: ${response.status} ${response.statusText}`);
  }
  const html = await response.text();
  const containerIndex = html.indexOf("se-main-container");
  let bodyHtml = html;
  if (containerIndex >= 0) {
    const start = html.lastIndexOf("<div", containerIndex);
    const endMarkers = [
      "<!-- SE_DOC_FOOTER_START -->",
      "<!-- SE_DOC_FOOTER_END -->",
      "<!-- // SE_DOC_CONTENT -->",
      "<!-- _BLOG_CONTENTS_FOOTER"
    ];
    const endCandidates = endMarkers
      .map((marker) => html.indexOf(marker, containerIndex))
      .filter((index) => index > containerIndex);
    const end = endCandidates.length ? Math.min(...endCandidates) : html.length;
    bodyHtml = html.slice(start >= 0 ? start : containerIndex, end);
  }
  return stripHtml(bodyHtml).slice(0, 8000);
}

async function collectImages({ imageDir, imagePrefix, imageLimit }) {
  const absoluteDir = path.resolve(repoRoot, imageDir);
  const entries = await fs.readdir(absoluteDir, { withFileTypes: true });
  const images = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.startsWith(imagePrefix) && /\.(png|jpe?g|webp)$/i.test(name))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }))
    .slice(0, imageLimit)
    .map((name, index) => {
      const ext = path.extname(name).toLowerCase();
      const mediaType = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : ext === ".webp" ? "image/webp" : "image/png";
      return {
        label: `card-${String(index + 1).padStart(2, "0")}`,
        name,
        path: path.join(absoluteDir, name),
        mediaType
      };
    });
  if (!images.length) {
    throw new Error(`No images found in ${absoluteDir} with prefix ${imagePrefix}`);
  }
  return images;
}

function buildPrompt({ title, logNo, postText, images }) {
  const imageList = images.map((image) => `${image.label}: ${image.name}`).join("\n");
  return `너는 한국 수학학원 시험분석 블로그/카드뉴스 벤치마킹 자료를 정리하는 검수자다.

목표:
- 각 학교 시험의 실제 특징을 분류한다.
- 이미지에 실제로 보이는 키워드와, 그 키워드에서 추론한 시험 특징을 반드시 분리한다.
- 블로그 표현을 그대로 베끼지 말고, Academy OS에서 사용할 '키워드 사전/체크리스트/프롬프트 재료'로만 정리한다.
- 보이지 않는 시험 사실, 문항번호, 시험범위, 부교재, 모의고사 여부를 추측하지 않는다.

분석 대상:
- 글 제목: ${title}
- logNo: ${logNo}
- 이미지 목록:
${imageList}

본문 텍스트 참고:
${postText || "(본문 텍스트 추출 없음)"}

작업 순서:
1. 각 이미지별로 실제 보이는 한국어/숫자/영문 키워드를 OCR처럼 적는다.
2. 각 이미지의 역할을 분류한다: cover, exam_structure, score_band, overall_flow, key_question, solution_flow, next_study, cta, other.
3. 학교 시험의 실제 특징을 아래 축으로 분류한다.
   - source_origin: 교과서, 부교재, 모의고사, EBS, 학교 프린트, 학습지, 유사유형 등
   - exam_structure: 객관식/서술형/문항 수/배점/등급컷/수행 여부 등
   - range_distribution: 단원별 비중, 시험범위, 특정 단원 집중 여부
   - difficulty_flow: 초반 기본, 중반 응용, 후반 조건 해석, 계산량, 시간관리, 난도 흐름
   - school_specific_signals: 이 학교 시험을 설명하는 특징 문구
   - key_question_patterns: 주요문항 번호, 유사유형, 핵심 개념, 자주 틀리는 지점
   - next_study_signals: 다음 대비, 추천 복습, 수업 연결
4. 각 분류 항목마다 evidenceType을 visible_image, body_text, inferred_from_visible, uncertain 중 하나로 표시한다.
5. 출력은 JSON만 반환한다. 마크다운 코드블록을 쓰지 않는다.
6. 매우 중요: 출력은 간결해야 한다. 이미지별 visibleText는 최대 10개, 이미지별 featureKeywords는 최대 5개, 전체 카테고리별 요약은 최대 6개만 쓴다.

JSON 스키마:
{
  "postMeta": {
    "title": "string",
    "logNo": "string",
    "overallConfidence": "high|medium|low"
  },
  "imageCards": [
    {
      "imageLabel": "card-01",
      "fileName": "string",
      "cardRole": "cover|exam_structure|score_band|overall_flow|key_question|solution_flow|next_study|cta|other",
      "visibleText": ["이미지에 실제로 보이는 짧은 문구, 최대 10개"],
      "headlineKeywords": ["대표 키워드"],
      "featureKeywords": [{"category": "source_origin|exam_structure|range_distribution|difficulty_flow|school_specific_signals|key_question_patterns|next_study_signals|tone", "keyword": "string", "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain", "evidence": "string"}],
      "needsHumanReview": true
    }
  ],
  "schoolFeatureSummary": {
    "source_origin": [{"keyword": "string", "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain", "evidence": "string"}],
    "exam_structure": [{"keyword": "string", "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain", "evidence": "string"}],
    "range_distribution": [{"keyword": "string", "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain", "evidence": "string"}],
    "difficulty_flow": [{"keyword": "string", "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain", "evidence": "string"}],
    "school_specific_signals": [{"keyword": "string", "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain", "evidence": "string"}],
    "key_question_patterns": [{"keyword": "string", "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain", "evidence": "string"}],
    "next_study_signals": [{"keyword": "string", "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain", "evidence": "string"}]
  },
  "benchmarkKeywordCandidates": [
    {
      "category": "source_origin|exam_structure|range_distribution|difficulty_flow|school_specific_signals|key_question_patterns|next_study_signals|tone",
      "keyword": "string",
      "usage": "Academy OS에서 어떻게 물어보거나 분류할지",
      "evidenceType": "visible_image|body_text|inferred_from_visible|uncertain"
    }
  ],
  "checklistQuestionsForAcademyOS": ["선생님에게 물어볼 짧은 검수 질문"],
  "missingOrUncertain": ["추가 사람 확인이 필요한 항목"],
  "doNotInvent": ["추측하면 안 되는 항목"]
}`;
}

function extractJsonText(text) {
  const trimmed = String(text || "").trim();
  if (trimmed.startsWith("{") && trimmed.endsWith("}")) return trimmed;
  const match = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (match) return match[1].trim();
  const first = trimmed.indexOf("{");
  const last = trimmed.lastIndexOf("}");
  if (first >= 0 && last > first) return trimmed.slice(first, last + 1);
  return trimmed;
}

async function callAnthropic({ apiKey, model, title, logNo, postText, images }) {
  const content = [];
  for (const image of images) {
    const buffer = await fs.readFile(image.path);
    content.push({
      type: "image",
      source: {
        type: "base64",
        media_type: image.mediaType,
        data: buffer.toString("base64")
      }
    });
  }
  content.push({
    type: "text",
    text: buildPrompt({ title, logNo, postText, images })
  });

  const response = await fetch(anthropicMessagesUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model,
      max_tokens: 9000,
      temperature: 0,
      system: "You are a precise Korean OCR and education-content taxonomy assistant. Return only valid JSON.",
      messages: [{ role: "user", content }]
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data?.error?.message || `${response.status} ${response.statusText}`;
    throw new Error(`Anthropic request failed: ${message}`);
  }
  const rawText = (data.content || [])
    .filter((part) => part.type === "text")
    .map((part) => part.text || "")
    .join("\n")
    .trim();
  const jsonText = extractJsonText(rawText);
  let parsed = null;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    parsed = null;
  }
  return { rawText, parsed, usage: data.usage || null, model: data.model || model, stopReason: data.stop_reason || null };
}

async function writeResult({ outDir, logNo, result, metadata }) {
  const absoluteOutDir = path.resolve(repoRoot, outDir);
  await fs.mkdir(absoluteOutDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const jsonPath = path.join(absoluteOutDir, `${logNo}-${timestamp}.json`);
  const latestPath = path.join(absoluteOutDir, `${logNo}-latest.json`);
  const payload = {
    metadata,
    result
  };
  await fs.writeFile(jsonPath, JSON.stringify(payload, null, 2), "utf8");
  await fs.writeFile(latestPath, JSON.stringify(payload, null, 2), "utf8");
  return { jsonPath, latestPath };
}

function summarize(parsed) {
  if (!parsed) return [];
  const summary = [];
  summary.push(`overallConfidence=${parsed.postMeta?.overallConfidence || "unknown"}`);
  const categories = parsed.schoolFeatureSummary || {};
  for (const [category, items] of Object.entries(categories)) {
    const keywords = Array.isArray(items)
      ? items.map((item) => item.keyword).filter(Boolean).slice(0, 6)
      : [];
    summary.push(`${category}: ${keywords.join(", ") || "-"}`);
  }
  return summary;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  await loadLocalEnv();
  const images = await collectImages(args);
  const postText = await fetchPostText(args).catch((error) => {
    console.warn(`Warning: ${error.message}`);
    return "";
  });

  const metadata = {
    provider: args.provider,
    model: args.model,
    blogId: args.blogId,
    logNo: args.logNo,
    title: args.title,
    postUrl: `https://m.blog.naver.com/PostView.naver?blogId=${args.blogId}&logNo=${args.logNo}`,
    imageFiles: images.map((image) => ({ label: image.label, name: image.name, mediaType: image.mediaType })),
    postTextLength: postText.length,
    createdAt: new Date().toISOString()
  };

  if (args.dryRun) {
    const { jsonPath, latestPath } = await writeResult({
      outDir: args.outDir,
      logNo: args.logNo,
      metadata,
      result: { dryRun: true }
    });
    console.log(`Dry run saved: ${jsonPath}`);
    console.log(`Latest pointer: ${latestPath}`);
    console.log(`Images: ${images.map((image) => image.name).join(", ")}`);
    console.log(`Post text length: ${postText.length}`);
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY is missing. Put it in .env.local or the process environment.");
  }

  const result = await callAnthropic({
    apiKey,
    model: args.model,
    title: args.title,
    logNo: args.logNo,
    postText,
    images
  });
  const { jsonPath, latestPath } = await writeResult({ outDir: args.outDir, logNo: args.logNo, result, metadata });
  console.log(`Vision result saved: ${jsonPath}`);
  console.log(`Latest pointer: ${latestPath}`);
  if (result.usage) {
    console.log(`Usage: input_tokens=${result.usage.input_tokens ?? "-"} output_tokens=${result.usage.output_tokens ?? "-"}`);
  }
  for (const line of summarize(result.parsed)) {
    console.log(line);
  }
  if (!result.parsed) {
    console.log("Warning: model output was not valid JSON; inspect rawText in the saved result.");
  }
}

main().catch((error) => {
  console.error(error.message);
  if (error.cause) {
    const causeBits = [error.cause.code, error.cause.name, error.cause.message].filter(Boolean);
    if (causeBits.length) console.error(`Cause: ${causeBits.join(" | ")}`);
  }
  process.exitCode = 1;
});

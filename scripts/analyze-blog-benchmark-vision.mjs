import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const anthropicMessagesUrl = "https://api.anthropic.com/v1/messages";

const defaultPosts = [
  {
    slug: "sangmyung3",
    logNo: "224339422552",
    title: "상명중학교 3학년 1학기 기말고사 분석"
  },
  {
    slug: "sangmyung2",
    logNo: "224339365693",
    title: "상명중학교 2학년 1학기 기말고사 분석"
  },
  {
    slug: "daejin1",
    logNo: "224337331315",
    title: "대진고 1학년 1학기 기말고사 수학 분석"
  },
  {
    slug: "hyeseong1",
    logNo: "224337226514",
    title: "혜성여고 1학년 1학기 기말고사 분석"
  },
  {
    slug: "bulam2",
    logNo: "224336139893",
    title: "불암중학교 2학년 1학기 기말고사 수학 시험지 분석"
  },
  {
    slug: "cheongwon1",
    logNo: "224336057258",
    title: "청원여자고등학교 1학년 1학기 기말고사 분석"
  },
  {
    slug: "bulam3",
    logNo: "224335632563",
    title: "불암중학교 3학년 1학기 기말고사 수학 시험지 분석"
  },
  {
    slug: "junggyew3",
    logNo: "224335439295",
    title: "중계중학교 3학년 1학기 기말고사 수학 시험지 분석"
  },
  {
    slug: "junggyew2",
    logNo: "224334587885",
    title: "중계중학교 2학년 1학기 기말고사 수학 시험지 분석"
  },
  {
    slug: "eulji2",
    logNo: "224333681317",
    title: "을지중학교 2학년 1학기 기말고사 수학 시험지 분석"
  },
  {
    slug: "eulji3",
    logNo: "224333637966",
    title: "을지중학교 3학년 1학기 기말고사 수학 시험지 분석"
  },
  {
    slug: "sunduk1",
    logNo: "224333602669",
    title: "선덕고 1학년 기말고사 주요문항 분석"
  }
];

function parseArgs(argv) {
  const args = {
    provider: "anthropic",
    model: process.env.ANTHROPIC_BENCHMARK_VISION_MODEL || process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5",
    blogId: "skills_in_math2",
    logNo: "224336139893",
    title: "불암중학교 2학년 1학기 기말고사 수학 시험지 분석",
    imageDir: ".codex-temp/benchmark-images",
    imagePrefix: "bulam2-",
    imageLimit: 20,
    chunkSize: 5,
    maxTokens: 9000,
    outDir: ".codex-temp/benchmark-vision-results",
    all: false,
    downloadImages: false,
    skipExisting: false,
    aggregateOnly: false,
    dryRun: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (arg === "--all") {
      args.all = true;
      args.downloadImages = true;
      continue;
    }
    if (arg === "--download-images") {
      args.downloadImages = true;
      continue;
    }
    if (arg === "--skip-existing") {
      args.skipExisting = true;
      continue;
    }
    if (arg === "--aggregate-only") {
      args.aggregateOnly = true;
      continue;
    }
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2);
    const next = argv[i + 1];
    if (next == null || next.startsWith("--")) {
      throw new Error(`Missing value for ${arg}`);
    }
    i += 1;
    if (key === "imageLimit" || key === "chunkSize" || key === "maxTokens") {
      args[key] = Number.parseInt(next, 10);
    } else {
      args[key] = next;
    }
  }

  const matchingPost = defaultPosts.find((post) => post.logNo === args.logNo);
  if (matchingPost) {
    args.title = args.title || matchingPost.title;
    args.imagePrefix = `${matchingPost.slug}-`;
  }
  if (args.provider !== "anthropic") {
    throw new Error("This pilot script currently supports --provider anthropic only.");
  }
  if (!Number.isFinite(args.imageLimit) || args.imageLimit <= 0) {
    throw new Error("--imageLimit must be a positive number.");
  }
  if (!Number.isFinite(args.chunkSize) || args.chunkSize <= 0) {
    throw new Error("--chunkSize must be a positive number.");
  }
  if (!Number.isFinite(args.maxTokens) || args.maxTokens <= 0) {
    throw new Error("--maxTokens must be a positive number.");
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
    .replace(/&#x3D;/g, "=")
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
  const { postText } = await fetchPostData({ blogId, logNo });
  return postText;
}

function extractMainBodyHtml(html) {
  const containerIndex = html.indexOf("se-main-container");
  if (containerIndex < 0) return html;
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
  return html.slice(start >= 0 ? start : containerIndex, end);
}

function extractPostImageUrls(bodyHtml) {
  const urls = [...String(bodyHtml || "").matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => decodeHtmlEntities(match[1]))
    .filter((url, index, list) => list.indexOf(url) === index);
  return urls.filter((url) => {
    if (!/(blogfiles|mblogthumb)-phinf\.pstatic\.net/i.test(url)) return false;
    if (/storep|sticker|emoticon|survey|map|profile|logo|dthumb/i.test(url)) return false;
    return true;
  });
}

async function fetchPostData({ blogId, logNo }) {
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
  const bodyHtml = extractMainBodyHtml(html);
  return {
    html,
    bodyHtml,
    postText: stripHtml(bodyHtml).slice(0, 8000),
    imageUrls: extractPostImageUrls(bodyHtml)
  };
}

function mediaTypeFromNameOrContentType(name, contentType = "") {
  const lowerName = String(name || "").toLowerCase();
  const lowerType = String(contentType || "").toLowerCase();
  if (lowerName.endsWith(".jpg") || lowerName.endsWith(".jpeg") || lowerType.includes("jpeg")) return "image/jpeg";
  if (lowerName.endsWith(".webp") || lowerType.includes("webp")) return "image/webp";
  return "image/png";
}

function extensionForMediaType(mediaType) {
  if (mediaType === "image/jpeg") return ".jpg";
  if (mediaType === "image/webp") return ".webp";
  return ".png";
}

async function downloadPostImages({ imageDir, imagePrefix, imageLimit, imageUrls }) {
  const absoluteDir = path.resolve(repoRoot, imageDir);
  await fs.mkdir(absoluteDir, { recursive: true });
  const downloaded = [];
  const selectedUrls = imageUrls.slice(0, imageLimit);
  for (const [index, url] of selectedUrls.entries()) {
    const response = await fetch(url, {
      headers: {
        Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        Referer: "https://m.blog.naver.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
      }
    });
    if (!response.ok) {
      throw new Error(`Failed to download image ${index + 1}: ${response.status} ${response.statusText}`);
    }
    const contentType = response.headers.get("content-type") || "";
    const mediaType = mediaTypeFromNameOrContentType(url, contentType);
    const filename = `${imagePrefix}${String(index + 1).padStart(2, "0")}${extensionForMediaType(mediaType)}`;
    const filePath = path.join(absoluteDir, filename);
    const buffer = Buffer.from(await response.arrayBuffer());
    await fs.writeFile(filePath, buffer);
    downloaded.push({ url, filename, filePath, mediaType, bytes: buffer.length });
  }
  return downloaded;
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
      const mediaType = mediaTypeFromNameOrContentType(name);
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

async function withRetry(label, fn, attempts = 3) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt >= attempts) break;
      const waitMs = 2500 * attempt;
      console.warn(`${label} failed on attempt ${attempt}/${attempts}: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }
  }
  throw lastError;
}

function buildPrompt({ title, logNo, postText, images, chunkIndex = 1, chunkCount = 1 }) {
  const imageList = images.map((image) => `${image.label}: ${image.name}`).join("\n");
  return `너는 한국 수학학원 시험분석 블로그/카드뉴스 벤치마킹 자료를 정리하는 검수자다.

목표:
- 각 학교 시험의 실제 특징을 분류한다.
- 이미지에 실제로 보이는 키워드와, 그 키워드에서 추론한 시험 특징을 반드시 분리한다.
- 블로그 표현을 그대로 베끼지 말고, Academy OS에서 사용할 '키워드 사전/체크리스트/프롬프트 재료'로만 정리한다.
- 보이지 않는 시험 사실, 문항번호, 시험범위, 부교재, 모의고사 여부를 추측하지 않는다.
- 이 호출은 전체 글의 카드 일부일 수 있다. 현재 입력된 이미지에서 확인되는 내용만 정리한다.

분석 대상:
- 글 제목: ${title}
- logNo: ${logNo}
- 카드 묶음: ${chunkIndex}/${chunkCount}
- 이미지 목록:
${imageList}

본문 텍스트 참고:
${postText || "(본문 텍스트 추출 없음)"}

작업 순서:
1. 각 이미지별로 실제 보이는 한국어/숫자/영문 키워드를 OCR처럼 적는다. 제목, 숫자, 시험범위, 문항번호, 교재명, 페이지, 유사유형, 난도/시간관리 문구는 빠뜨리지 않는다.
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
6. 장식 요소, 브랜드 반복, 이모지만 제외하고 카드의 학습/시험 관련 문구는 최대한 보존한다.
7. 잘 안 보이거나 애매한 문구는 지어내지 말고 uncertain으로 표시한다.

JSON 스키마:
{
  "postMeta": {
    "title": "string",
    "logNo": "string",
    "overallConfidence": "high|medium|low"
  },
  "chunkMeta": {
    "chunkIndex": ${chunkIndex},
    "chunkCount": ${chunkCount},
    "imageLabels": ["${images.map((image) => image.label).join('","')}"]
  },
  "imageCards": [
    {
      "imageLabel": "card-01",
      "fileName": "string",
      "cardRole": "cover|exam_structure|score_band|overall_flow|key_question|solution_flow|next_study|cta|other",
      "visibleText": ["이미지에 실제로 보이는 시험/학습 관련 문구"],
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

async function callAnthropic({ apiKey, model, title, logNo, postText, images, chunkIndex = 1, chunkCount = 1, maxTokens = 9000 }) {
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
    text: buildPrompt({ title, logNo, postText, images, chunkIndex, chunkCount })
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
      max_tokens: maxTokens,
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

function buildMetadata(args, post, images, postText, downloaded = []) {
  return {
    provider: args.provider,
    model: args.model,
    blogId: args.blogId,
    logNo: post.logNo,
    slug: post.slug,
    title: post.title,
    postUrl: `https://m.blog.naver.com/PostView.naver?blogId=${args.blogId}&logNo=${post.logNo}`,
    imageFiles: images.map((image) => ({ label: image.label, name: image.name, mediaType: image.mediaType })),
    downloadedImages: downloaded.map((image) => ({ name: image.filename, bytes: image.bytes, sourceUrl: image.url })),
    postTextLength: postText.length,
    createdAt: new Date().toISOString()
  };
}

async function preparePostInput(args, post) {
  const postData = await withRetry(
    `Fetch post ${post.slug}`,
    () => fetchPostData({ blogId: args.blogId, logNo: post.logNo }),
    3
  ).catch((error) => {
    console.warn(`Warning: ${error.message}`);
    return { postText: "", imageUrls: [] };
  });
  let downloaded = [];
  if (args.downloadImages) {
    if (!postData.imageUrls.length) {
      throw new Error(`No downloadable images found for ${post.logNo}`);
    }
    downloaded = await withRetry(
      `Download images ${post.slug}`,
      () =>
        downloadPostImages({
          imageDir: args.imageDir,
          imagePrefix: `${post.slug}-`,
          imageLimit: args.imageLimit,
          imageUrls: postData.imageUrls
        }),
      3
    );
  }
  const images = await collectImages({ ...args, imagePrefix: `${post.slug}-` });
  return { images, postText: postData.postText || "", downloaded };
}

async function runPost(args, post, apiKey) {
  const { images, postText, downloaded } = await preparePostInput(args, post);
  const metadata = buildMetadata(args, post, images, postText, downloaded);

  if (args.dryRun) {
    const { jsonPath, latestPath } = await writeResult({
      outDir: args.outDir,
      logNo: post.logNo,
      metadata,
      result: { dryRun: true }
    });
    console.log(`[dry-run] ${post.slug} saved: ${jsonPath}`);
    console.log(`[dry-run] ${post.slug} latest: ${latestPath}`);
    console.log(`[dry-run] ${post.slug} images: ${images.map((image) => image.name).join(", ")}`);
    console.log(`[dry-run] ${post.slug} post text length: ${postText.length}`);
    return { metadata, result: { dryRun: true }, jsonPath, latestPath };
  }

  const result = await analyzePostInChunks({ args, post, apiKey, postText, images });
  const { jsonPath, latestPath } = await writeResult({ outDir: args.outDir, logNo: post.logNo, result, metadata });
  console.log(`[vision] ${post.slug} saved: ${jsonPath}`);
  console.log(`[vision] ${post.slug} latest: ${latestPath}`);
  if (result.usage) {
    console.log(
      `[vision] ${post.slug} usage: input_tokens=${result.usage.input_tokens ?? "-"} output_tokens=${result.usage.output_tokens ?? "-"}`
    );
  }
  for (const line of summarize(result.parsed)) {
    console.log(`[vision] ${post.slug} ${line}`);
  }
  if (!result.parsed) {
    console.log(`[vision] ${post.slug} warning: model output was not valid JSON; inspect rawText in the saved result.`);
  }
  return { metadata, result, jsonPath, latestPath };
}

function chunkArray(items, size) {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

function addUniqueItems(target, items = []) {
  if (!Array.isArray(items)) return;
  for (const item of items) {
    if (!item || !item.keyword) continue;
    const key = `${item.category || ""}|${item.keyword}|${item.evidenceType || ""}|${item.evidence || ""}`;
    if (target.some((existing) => `${existing.category || ""}|${existing.keyword}|${existing.evidenceType || ""}|${existing.evidence || ""}` === key)) {
      continue;
    }
    target.push(item);
  }
}

function mergeParsedChunks({ post, chunkResults }) {
  const categories = [
    "source_origin",
    "exam_structure",
    "range_distribution",
    "difficulty_flow",
    "school_specific_signals",
    "key_question_patterns",
    "next_study_signals"
  ];
  const merged = {
    postMeta: {
      title: post.title,
      logNo: post.logNo,
      overallConfidence: chunkResults.some((chunk) => chunk.result.parsed?.postMeta?.overallConfidence === "low")
        ? "low"
        : chunkResults.some((chunk) => chunk.result.parsed?.postMeta?.overallConfidence === "medium")
          ? "medium"
          : "high"
    },
    imageCards: [],
    schoolFeatureSummary: Object.fromEntries(categories.map((category) => [category, []])),
    benchmarkKeywordCandidates: [],
    checklistQuestionsForAcademyOS: [],
    missingOrUncertain: [],
    doNotInvent: []
  };

  for (const chunk of chunkResults) {
    const parsed = chunk.result.parsed;
    if (!parsed) {
      merged.missingOrUncertain.push(`chunk ${chunk.chunkIndex} could not be parsed`);
      continue;
    }
    if (Array.isArray(parsed.imageCards)) {
      merged.imageCards.push(...parsed.imageCards);
    }
    for (const category of categories) {
      addUniqueItems(merged.schoolFeatureSummary[category], parsed.schoolFeatureSummary?.[category]);
    }
    addUniqueItems(merged.benchmarkKeywordCandidates, parsed.benchmarkKeywordCandidates);
    for (const question of parsed.checklistQuestionsForAcademyOS || []) {
      if (question && !merged.checklistQuestionsForAcademyOS.includes(question)) {
        merged.checklistQuestionsForAcademyOS.push(question);
      }
    }
    for (const item of parsed.missingOrUncertain || []) {
      if (item && !merged.missingOrUncertain.includes(item)) merged.missingOrUncertain.push(item);
    }
    for (const item of parsed.doNotInvent || []) {
      if (item && !merged.doNotInvent.includes(item)) merged.doNotInvent.push(item);
    }
  }
  merged.imageCards.sort((a, b) => String(a.imageLabel || "").localeCompare(String(b.imageLabel || ""), "en", { numeric: true }));
  return merged;
}

async function analyzeImageChunk({ args, post, apiKey, postText, images, chunkIndex, chunkCount }) {
  const result = await withRetry(
    `Anthropic ${post.slug} chunk ${chunkIndex}/${chunkCount}`,
    () =>
      callAnthropic({
        apiKey,
        model: args.model,
        title: post.title,
        logNo: post.logNo,
        postText,
        images,
        chunkIndex,
        chunkCount,
        maxTokens: args.maxTokens
      }),
    3
  );

  if (result.parsed) {
    return [{ chunkIndex, chunkCount, imageLabels: images.map((image) => image.label), result }];
  }

  if (images.length <= 1) {
    return [{ chunkIndex, chunkCount, imageLabels: images.map((image) => image.label), result }];
  }

  console.warn(
    `[vision] ${post.slug} chunk ${chunkIndex}/${chunkCount} did not parse; splitting ${images.length} images into smaller chunks.`
  );
  const midpoint = Math.ceil(images.length / 2);
  const left = images.slice(0, midpoint);
  const right = images.slice(midpoint);
  const leftRuns = await analyzeImageChunk({
    args,
    post,
    apiKey,
    postText,
    images: left,
    chunkIndex,
    chunkCount
  });
  const rightRuns = await analyzeImageChunk({
    args,
    post,
    apiKey,
    postText,
    images: right,
    chunkIndex,
    chunkCount
  });
  return [...leftRuns, ...rightRuns];
}

async function analyzePostInChunks({ args, post, apiKey, postText, images }) {
  const chunks = chunkArray(images, args.chunkSize);
  const chunkResults = [];
  for (const [index, chunk] of chunks.entries()) {
    const chunkIndex = index + 1;
    const runs = await analyzeImageChunk({
      args,
      post,
      apiKey,
      postText,
      images: chunk,
      chunkIndex,
      chunkCount: chunks.length
    });
    chunkResults.push(...runs);
  }
  const totalUsage = chunkResults.reduce(
    (acc, chunk) => {
      const usage = chunk.result.usage || {};
      acc.input_tokens += Number(usage.input_tokens || 0);
      acc.output_tokens += Number(usage.output_tokens || 0);
      return acc;
    },
    { input_tokens: 0, output_tokens: 0 }
  );
  return {
    chunked: true,
    chunkSize: args.chunkSize,
    chunkCount: chunkResults.length,
    model: chunkResults.find((chunk) => chunk.result.model)?.result.model || args.model,
    usage: totalUsage,
    stopReason: chunkResults.some((chunk) => !chunk.result.parsed) ? "partial_parse_failure" : "merged",
    parsed: mergeParsedChunks({ post, chunkResults }),
    chunks: chunkResults.map((chunk) => ({
      chunkIndex: chunk.chunkIndex,
      chunkCount: chunk.chunkCount,
      imageLabels: chunk.imageLabels,
      usage: chunk.result.usage || null,
      stopReason: chunk.result.stopReason || null,
      model: chunk.result.model || null,
      parsed: chunk.result.parsed || null,
      rawText: chunk.result.rawText || ""
    }))
  };
}

async function writeAggregate(args, runs) {
  const absoluteOutDir = path.resolve(repoRoot, args.outDir);
  await fs.mkdir(absoluteOutDir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const aggregate = {
    createdAt: new Date().toISOString(),
    provider: args.provider,
    model: args.model,
    imageLimit: args.imageLimit,
    totalRuns: runs.length,
    totalUsage: runs.reduce(
      (acc, run) => {
        const usage = run.result?.usage || {};
        acc.input_tokens += Number(usage.input_tokens || 0);
        acc.output_tokens += Number(usage.output_tokens || 0);
        return acc;
      },
      { input_tokens: 0, output_tokens: 0 }
    ),
    runs: runs.map((run) => ({
      metadata: run.metadata,
      latestPath: run.latestPath,
      parsed: run.result?.parsed || null,
      usage: run.result?.usage || null,
      stopReason: run.result?.stopReason || null
    }))
  };
  const jsonPath = path.join(absoluteOutDir, `all-posts-${timestamp}.json`);
  const latestPath = path.join(absoluteOutDir, "all-posts-latest.json");
  await fs.writeFile(jsonPath, JSON.stringify(aggregate, null, 2), "utf8");
  await fs.writeFile(latestPath, JSON.stringify(aggregate, null, 2), "utf8");
  return { jsonPath, latestPath, aggregate };
}

async function loadLatestRuns(args, posts = defaultPosts) {
  const absoluteOutDir = path.resolve(repoRoot, args.outDir);
  const runs = [];
  for (const post of posts) {
    const latestPath = path.join(absoluteOutDir, `${post.logNo}-latest.json`);
    const text = await fs.readFile(latestPath, "utf8");
    const payload = JSON.parse(text);
    runs.push({
      metadata: payload.metadata || {
        provider: args.provider,
        model: args.model,
        blogId: args.blogId,
        logNo: post.logNo,
        slug: post.slug,
        title: post.title,
        postUrl: `https://m.blog.naver.com/PostView.naver?blogId=${args.blogId}&logNo=${post.logNo}`,
        imageFiles: []
      },
      result: payload.result || {},
      latestPath
    });
  }
  return runs;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  await loadLocalEnv();
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!args.dryRun && !args.aggregateOnly && !apiKey) {
    throw new Error("ANTHROPIC_API_KEY is missing. Put it in .env.local or the process environment.");
  }

  if (args.aggregateOnly) {
    const runs = await loadLatestRuns(args);
    const { jsonPath, latestPath, aggregate } = await writeAggregate(args, runs);
    console.log(`Aggregate saved: ${jsonPath}`);
    console.log(`Aggregate latest: ${latestPath}`);
    console.log(
      `Aggregate usage: input_tokens=${aggregate.totalUsage.input_tokens} output_tokens=${aggregate.totalUsage.output_tokens}`
    );
    return;
  }

  if (args.all) {
    const runs = [];
    for (const [index, post] of defaultPosts.entries()) {
      console.log(`\n[${index + 1}/${defaultPosts.length}] ${post.slug} ${post.title}`);
      const run = await runPost(args, post, apiKey);
      runs.push(run);
    }
    const { jsonPath, latestPath, aggregate } = await writeAggregate(args, runs);
    console.log(`\nAggregate saved: ${jsonPath}`);
    console.log(`Aggregate latest: ${latestPath}`);
    console.log(
      `Aggregate usage: input_tokens=${aggregate.totalUsage.input_tokens} output_tokens=${aggregate.totalUsage.output_tokens}`
    );
    return;
  }

  const matchingPost = defaultPosts.find((post) => post.logNo === args.logNo);
  const post = matchingPost || {
    slug: args.imagePrefix.replace(/-$/, "") || args.logNo,
    logNo: args.logNo,
    title: args.title
  };
  await runPost(args, post, apiKey);
}

main().catch((error) => {
  console.error(error.message);
  if (error.cause) {
    const causeBits = [error.cause.code, error.cause.name, error.cause.message].filter(Boolean);
    if (causeBits.length) console.error(`Cause: ${causeBits.join(" | ")}`);
  }
  process.exitCode = 1;
});

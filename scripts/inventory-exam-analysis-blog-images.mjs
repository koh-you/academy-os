import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogId = "skills_in_math2";
const defaultOutput = "docs/exam-analysis-blog-image-manifest-gate2-2026-07-21.json";

const primaryPosts = [
  ["224342833914", "2026-07-10", "용화여고1 1학기 기말", "high", 8, "filename_confirmed", false],
  ["224339422552", "2026-07-07", "상명중3 1학기 기말", "middle", 10, "filename_confirmed", true],
  ["224339365693", "2026-07-07", "상명중2 1학기 기말", "middle", 8, "filename_confirmed", true],
  ["224337331315", "2026-07-05", "대진고1 1학기 기말", "high", 10, "filename_confirmed", true],
  ["224337226514", "2026-07-05", "혜성여고1 1학기 기말", "high", 10, "filename_confirmed", true],
  ["224336139893", "2026-07-04", "불암중2 1학기 기말", "middle", 10, "filename_confirmed", true],
  ["224336057258", "2026-07-04", "청원여고1 1학기 기말", "high", 10, "filename_confirmed", true],
  ["224335632563", "2026-07-03", "불암중3 1학기 기말", "middle", 8, "visual_likely", true],
  ["224335439295", "2026-07-03", "중계중3 1학기 기말", "middle", 10, "filename_confirmed", true],
  ["224334587885", "2026-07-02", "중계중2 1학기 기말", "middle", 8, "filename_confirmed", true],
  ["224333681317", "2026-07-02", "을지중2 1학기 기말", "middle", 10, "filename_confirmed", true],
  ["224333637966", "2026-07-02", "을지중3 1학기 기말", "middle", 8, "filename_confirmed", true],
  ["224333602669", "2026-07-02", "선덕고1 1학기 기말", "high", 14, "filename_confirmed", true],
  ["224310742080", "2026-06-09", "서라벌고1 중간", "high", 14, "visual_likely", false],
  ["224309491367", "2026-06-08", "영신여고1 중간", "high", 13, "visual_likely", false],
  ["224307152619", "2026-06-05", "재현고1 중간", "high", 12, "visual_likely", false],
  ["224263462499", "2026-04-24", "을지중2 2025 1학기 중간", "middle", 7, "visual_likely", false],
  ["224260124266", "2026-04-21", "중계중2 2025 1학기 중간", "middle", 7, "visual_likely", false],
  ["224251937391", "2026-04-14", "상명중2 2025 1학기 중간", "middle", 5, "visual_likely", false],
  ["224164418523", "2026-01-29", "중계중2 2025 2학기 기말", "middle", 11, "visual_likely", false],
  ["224156001862", "2026-01-22", "상명중2 2025 2학기 기말", "middle", 9, "visual_likely", false]
].map(([logNo, publishedAt, label, schoolLevel, expectedImageCount, gptEvidence, visionRawAvailable]) => ({
  logNo,
  publishedAt,
  label,
  schoolLevel,
  expectedImageCount,
  gptEvidence,
  visionRawAvailable,
  corpusRole: "primary"
}));

const derivativePosts = [
  ["224342636893", "2026-07-10", "중2 기말고사 핵심 종합 분석", 8],
  ["224341516007", "2026-07-09", "을지·중계·불암·상명중3 종합", 5],
  ["224325868015", "2026-06-24", "고등부 수업 기록 속 기출·모평 분석", 6]
].map(([logNo, publishedAt, label, expectedImageCount]) => ({
  logNo,
  publishedAt,
  label,
  schoolLevel: "mixed",
  expectedImageCount,
  gptEvidence: "derivative_unconfirmed",
  visionRawAvailable: false,
  corpusRole: "derivative"
}));

const posts = [...primaryPosts, ...derivativePosts];

function parseArgs(argv) {
  const args = { output: defaultOutput, concurrency: 4 };
  for (let index = 2; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === "--out") args.output = argv[++index];
    else if (token === "--concurrency") args.concurrency = Number(argv[++index]);
    else if (token === "--stdout") args.output = "";
    else if (token === "--help") {
      console.log("node scripts/inventory-exam-analysis-blog-images.mjs [--out path] [--concurrency 4] [--stdout]");
      process.exit(0);
    } else throw new Error(`Unknown argument: ${token}`);
  }
  if (!Number.isInteger(args.concurrency) || args.concurrency < 1 || args.concurrency > 8) {
    throw new Error("--concurrency must be an integer from 1 to 8");
  }
  return args;
}

function decodeHtmlEntities(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
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
  const ends = endMarkers.map((marker) => html.indexOf(marker, containerIndex)).filter((index) => index > containerIndex);
  const end = ends.length ? Math.min(...ends) : html.length;
  return html.slice(start >= 0 ? start : containerIndex, end);
}

function extractPostImageUrls(bodyHtml) {
  const urls = [...String(bodyHtml || "").matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)]
    .map((match) => decodeHtmlEntities(match[1]))
    .filter((url, index, list) => list.indexOf(url) === index);
  return urls.filter((url) => {
    if (!/(blogfiles|mblogthumb)-phinf\.pstatic\.net/i.test(url)) return false;
    return !/storep|sticker|emoticon|survey|map|profile|logo|dthumb/i.test(url);
  });
}

function largestAccessibleUrl(sourceUrl) {
  const url = new URL(sourceUrl);
  url.searchParams.set("type", "w966");
  return url.toString();
}

function filenameFromUrl(sourceUrl) {
  const pathname = new URL(sourceUrl).pathname;
  const raw = pathname.slice(pathname.lastIndexOf("/") + 1);
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function dimensionsFromBuffer(buffer, contentType) {
  if (buffer.length >= 24 && buffer.subarray(0, 8).equals(Buffer.from("89504e470d0a1a0a", "hex"))) {
    return { format: "png", width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }
  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      if (marker === 0xd8 || marker === 0xd9) {
        offset += 2;
        continue;
      }
      const segmentLength = buffer.readUInt16BE(offset + 2);
      if (segmentLength < 2) break;
      if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
        return {
          format: "jpeg",
          width: buffer.readUInt16BE(offset + 7),
          height: buffer.readUInt16BE(offset + 5)
        };
      }
      offset += 2 + segmentLength;
    }
  }
  if (buffer.length >= 10 && buffer.subarray(0, 6).toString("ascii").startsWith("GIF8")) {
    return { format: "gif", width: buffer.readUInt16LE(6), height: buffer.readUInt16LE(8) };
  }
  return { format: contentType || "unknown", width: null, height: null };
}

async function fetchWithRetry(url, options, label, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 900));
    }
  }
  throw new Error(`${label}: ${lastError?.message || "unknown fetch error"}`);
}

async function fetchPost(post) {
  const postUrl = `https://m.blog.naver.com/PostView.naver?blogId=${blogId}&logNo=${post.logNo}`;
  const response = await fetchWithRetry(postUrl, {
    headers: {
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      Referer: `https://m.blog.naver.com/${blogId}`,
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36"
    }
  }, `post ${post.logNo}`);
  const html = await response.text();
  const imageUrls = extractPostImageUrls(extractMainBodyHtml(html));
  if (imageUrls.length !== post.expectedImageCount) {
    throw new Error(`${post.logNo}: expected ${post.expectedImageCount} images, found ${imageUrls.length}`);
  }
  return { ...post, postUrl, imageUrls };
}

async function fetchImage(post, sourceUrl, slideOrder) {
  const fetchUrl = largestAccessibleUrl(sourceUrl);
  const response = await fetchWithRetry(fetchUrl, {
    headers: {
      Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      Referer: "https://m.blog.naver.com/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36"
    }
  }, `image ${post.logNo}/${slideOrder}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get("content-type") || "";
  const dimensions = dimensionsFromBuffer(buffer, contentType);
  const filename = filenameFromUrl(sourceUrl);
  return {
    imageId: `${post.logNo}-${String(slideOrder).padStart(2, "0")}`,
    slideOrder,
    sourceUrl,
    fetchUrl,
    filename,
    contentType,
    format: dimensions.format,
    bytes: buffer.length,
    width: dimensions.width,
    height: dimensions.height,
    aspectRatio: dimensions.width && dimensions.height
      ? Number((dimensions.width / dimensions.height).toFixed(6))
      : null,
    sha256: crypto.createHash("sha256").update(buffer).digest("hex"),
    chatGptFilename: /chatgpt[_ -]?image/i.test(filename)
  };
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => worker()));
  return results;
}

function buildDuplicateGroups(inventoriedPosts) {
  const byHash = new Map();
  for (const post of inventoriedPosts) {
    for (const image of post.images) {
      const entry = { logNo: post.logNo, corpusRole: post.corpusRole, imageId: image.imageId, slideOrder: image.slideOrder };
      if (!byHash.has(image.sha256)) byHash.set(image.sha256, []);
      byHash.get(image.sha256).push(entry);
    }
  }
  return [...byHash.entries()]
    .filter(([, matches]) => matches.length > 1)
    .map(([sha256, matches]) => ({ sha256, matches }));
}

function summarize(inventoriedPosts, duplicateGroups) {
  const primary = inventoriedPosts.filter((post) => post.corpusRole === "primary");
  const derivative = inventoriedPosts.filter((post) => post.corpusRole === "derivative");
  const allImages = inventoriedPosts.flatMap((post) => post.images);
  const primaryImages = primary.flatMap((post) => post.images);
  const derivativeImages = derivative.flatMap((post) => post.images);
  const primaryHashes = new Set(primaryImages.map((image) => image.sha256));
  const derivativeMatchingPrimary = derivativeImages.filter((image) => primaryHashes.has(image.sha256));
  return {
    posts: inventoriedPosts.length,
    images: allImages.length,
    primaryPosts: primary.length,
    primaryImages: primaryImages.length,
    derivativePosts: derivative.length,
    derivativeImages: derivativeImages.length,
    filenameConfirmedPosts: primary.filter((post) => post.gptEvidence === "filename_confirmed").length,
    chatGptFilenameImages: primaryImages.filter((image) => image.chatGptFilename).length,
    visionRawAvailablePosts: primary.filter((post) => post.visionRawAvailable).length,
    uniqueHashes: new Set(allImages.map((image) => image.sha256)).size,
    duplicateHashGroups: duplicateGroups.length,
    derivativeImagesMatchingPrimary: derivativeMatchingPrimary.length,
    derivativeImagesUniqueFromPrimary: derivativeImages.length - derivativeMatchingPrimary.length,
    dimensionFamilies: Object.entries(allImages.reduce((acc, image) => {
      const key = `${image.width}x${image.height}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {})).sort((a, b) => b[1] - a[1]).map(([dimensions, count]) => ({ dimensions, count }))
  };
}

async function main() {
  const args = parseArgs(process.argv);
  console.error(`Fetching ${posts.length} posts...`);
  const fetchedPosts = [];
  for (const [index, post] of posts.entries()) {
    const fetched = await fetchPost(post);
    fetchedPosts.push(fetched);
    console.error(`[post ${index + 1}/${posts.length}] ${post.logNo}: ${fetched.imageUrls.length} images`);
  }

  const imageTasks = fetchedPosts.flatMap((post) => post.imageUrls.map((sourceUrl, index) => ({
    post,
    sourceUrl,
    slideOrder: index + 1
  })));
  let completed = 0;
  const imageResults = await mapWithConcurrency(imageTasks, args.concurrency, async (task) => {
    const result = await fetchImage(task.post, task.sourceUrl, task.slideOrder);
    completed += 1;
    if (completed % 10 === 0 || completed === imageTasks.length) {
      console.error(`[image ${completed}/${imageTasks.length}]`);
    }
    return { logNo: task.post.logNo, image: result };
  });

  const imagesByPost = new Map();
  for (const result of imageResults) {
    if (!imagesByPost.has(result.logNo)) imagesByPost.set(result.logNo, []);
    imagesByPost.get(result.logNo).push(result.image);
  }
  const inventoriedPosts = fetchedPosts.map(({ imageUrls, ...post }) => ({
    ...post,
    images: imagesByPost.get(post.logNo).sort((a, b) => a.slideOrder - b.slideOrder)
  }));
  const duplicateGroups = buildDuplicateGroups(inventoriedPosts);
  const manifest = {
    schemaVersion: 1,
    generatedAt: new Date().toISOString(),
    blogId,
    fetchPolicy: {
      source: "public PostView HTML",
      largestAccessibleVariant: "type=w966",
      paidVisionUsed: false,
      originalsStoredInRepository: false
    },
    summary: summarize(inventoriedPosts, duplicateGroups),
    duplicateGroups,
    posts: inventoriedPosts
  };
  const json = `${JSON.stringify(manifest, null, 2)}\n`;
  if (args.output) {
    const outputPath = path.resolve(repoRoot, args.output);
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, json, "utf8");
    console.error(`Saved ${path.relative(repoRoot, outputPath)}`);
  } else {
    process.stdout.write(json);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.resolve(
  repoRoot,
  process.argv[2] || "docs/exam-analysis-blog-image-manifest-gate2-2026-07-21.json"
);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function duplicateGroupsFromPosts(posts) {
  const byHash = new Map();
  for (const post of posts) {
    for (const image of post.images) {
      if (!byHash.has(image.sha256)) byHash.set(image.sha256, []);
      byHash.get(image.sha256).push(image.imageId);
    }
  }
  return [...byHash.entries()]
    .filter(([, imageIds]) => imageIds.length > 1)
    .map(([sha256, imageIds]) => ({ sha256, imageIds: imageIds.sort() }))
    .sort((a, b) => a.sha256.localeCompare(b.sha256));
}

const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
assert(manifest.schemaVersion === 1, "schemaVersion must be 1");
assert(manifest.blogId === "skills_in_math2", "unexpected blogId");
assert(manifest.fetchPolicy?.paidVisionUsed === false, "Gate 2 must not use paid Vision");
assert(manifest.fetchPolicy?.originalsStoredInRepository === false, "original images must not be stored in the repository");
assert(Array.isArray(manifest.posts), "posts must be an array");
assert(manifest.posts.length === 24, `expected 24 posts, found ${manifest.posts.length}`);

const logNos = manifest.posts.map((post) => post.logNo);
assert(new Set(logNos).size === logNos.length, "duplicate logNo in posts");

const primaryPosts = manifest.posts.filter((post) => post.corpusRole === "primary");
const derivativePosts = manifest.posts.filter((post) => post.corpusRole === "derivative");
assert(primaryPosts.length === 21, `expected 21 primary posts, found ${primaryPosts.length}`);
assert(derivativePosts.length === 3, `expected 3 derivative posts, found ${derivativePosts.length}`);

for (const post of manifest.posts) {
  assert(post.images.length === post.expectedImageCount, `${post.logNo}: expected/actual image count mismatch`);
  const orders = post.images.map((image) => image.slideOrder);
  assert(orders.every((order, index) => order === index + 1), `${post.logNo}: non-contiguous slide order`);
  for (const image of post.images) {
    assert(image.imageId === `${post.logNo}-${String(image.slideOrder).padStart(2, "0")}`, `${image.imageId}: invalid imageId`);
    assert(/^https:\/\//.test(image.sourceUrl), `${image.imageId}: missing sourceUrl`);
    assert(/^https:\/\//.test(image.fetchUrl), `${image.imageId}: missing fetchUrl`);
    assert(image.fetchUrl.includes("type=w966"), `${image.imageId}: largest accessible variant is not w966`);
    assert(typeof image.filename === "string" && image.filename.length > 0, `${image.imageId}: missing filename`);
    assert(Number.isInteger(image.bytes) && image.bytes > 0, `${image.imageId}: invalid byte length`);
    assert(Number.isInteger(image.width) && image.width > 0, `${image.imageId}: invalid width`);
    assert(Number.isInteger(image.height) && image.height > 0, `${image.imageId}: invalid height`);
    assert(/^[a-f0-9]{64}$/.test(image.sha256), `${image.imageId}: invalid SHA-256`);
    assert(!Object.hasOwn(image, "data") && !Object.hasOwn(image, "base64"), `${image.imageId}: embedded image data is forbidden`);
  }
}

const allImages = manifest.posts.flatMap((post) => post.images);
const primaryImages = primaryPosts.flatMap((post) => post.images);
const derivativeImages = derivativePosts.flatMap((post) => post.images);
assert(allImages.length === 221, `expected 221 image attachments, found ${allImages.length}`);
assert(primaryImages.length === 202, `expected 202 primary image attachments, found ${primaryImages.length}`);
assert(derivativeImages.length === 19, `expected 19 derivative image attachments, found ${derivativeImages.length}`);
assert(new Set(allImages.map((image) => image.imageId)).size === allImages.length, "duplicate imageId");
assert(new Set(allImages.map((image) => image.sha256)).size === 215, "expected 215 unique image hashes");
assert(primaryImages.filter((image) => image.chatGptFilename).length === 94, "expected 94 ChatGPT filename images");

const computedGroups = duplicateGroupsFromPosts(manifest.posts);
const storedGroups = manifest.duplicateGroups
  .map((group) => ({ sha256: group.sha256, imageIds: group.matches.map((match) => match.imageId).sort() }))
  .sort((a, b) => a.sha256.localeCompare(b.sha256));
assert(JSON.stringify(computedGroups) === JSON.stringify(storedGroups), "stored duplicateGroups do not match image hashes");

const primaryHashes = new Set(primaryImages.map((image) => image.sha256));
assert(
  derivativeImages.filter((image) => primaryHashes.has(image.sha256)).length === 1,
  "expected exactly one derivative attachment to match the primary corpus"
);

assert(manifest.summary.posts === 24, "summary.posts mismatch");
assert(manifest.summary.images === 221, "summary.images mismatch");
assert(manifest.summary.primaryImages === 202, "summary.primaryImages mismatch");
assert(manifest.summary.uniqueHashes === 215, "summary.uniqueHashes mismatch");
assert(manifest.summary.derivativeImagesMatchingPrimary === 1, "summary derivative match mismatch");

console.log("Exam-analysis blog manifest verification passed.");
console.log("posts=24 attachments=221 uniqueHashes=215 primary=202 derivative=19");

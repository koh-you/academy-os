import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gate2 = JSON.parse(await fs.readFile(path.join(repoRoot, "docs/exam-analysis-blog-image-manifest-gate2-2026-07-21.json"), "utf8"));
const gate3 = JSON.parse(await fs.readFile(path.join(repoRoot, "docs/exam-analysis-blog-slide-analysis-gate3-2026-07-21.json"), "utf8"));
const assert = (condition, message) => { if (!condition) throw new Error(message); };

assert(gate3.schemaVersion === 1, "schemaVersion must be 1");
assert(gate3.analysisPolicy?.paidVisionCalls === 0, "paid Vision calls must remain zero");
assert(gate3.analysisPolicy?.copyrightedBodyTextStored === false, "copyrighted body text must not be stored");
assert(gate3.slides.length === 221, `expected 221 slide attachments, found ${gate3.slides.length}`);
assert(gate3.visualUnits.length === 215, `expected 215 unique visual units, found ${gate3.visualUnits.length}`);
assert(gate3.analysisPolicy.existingVisionAttachmentsReused === 116, "expected 116 existing Vision attachments");
assert(gate3.analysisPolicy.manualVisualReviewAttachments === 105, "expected 105 manual-review attachments");

const sourceImages = gate2.posts.flatMap((post) => post.images.map((image) => ({ ...image, post })));
const sourceById = new Map(sourceImages.map((image) => [image.imageId, image]));
assert(sourceById.size === gate3.slides.length, "Gate 2/Gate 3 attachment count mismatch");
assert(new Set(gate3.slides.map((slide) => slide.imageId)).size === gate3.slides.length, "duplicate imageId in Gate 3");

for (const slide of gate3.slides) {
  const source = sourceById.get(slide.imageId);
  assert(source, `${slide.imageId}: missing Gate 2 source`);
  assert(slide.sha256 === source.sha256, `${slide.imageId}: SHA-256 changed from Gate 2`);
  assert(slide.logNo === source.post.logNo, `${slide.imageId}: logNo mismatch`);
  assert(slide.slideOrder === source.slideOrder, `${slide.imageId}: slideOrder mismatch`);
  assert(slide.corpusRole === source.post.corpusRole, `${slide.imageId}: corpusRole mismatch`);
  assert(gate3.taxonomy.roles.includes(slide.canonicalRole), `${slide.imageId}: unknown canonicalRole`);
  assert(gate3.taxonomy.layoutFamilies.includes(slide.layoutFamily), `${slide.imageId}: unknown layoutFamily`);
  assert(gate3.taxonomy.assetModes.includes(slide.assetMode), `${slide.imageId}: unknown assetMode`);
  assert(Array.isArray(slide.components) && slide.components.length > 0, `${slide.imageId}: missing components`);
  assert(["low", "medium", "high"].includes(slide.textDensity), `${slide.imageId}: invalid textDensity`);
  assert(["existing_vision", "manual_visual_review"].includes(slide.evidence?.source), `${slide.imageId}: invalid evidence source`);
}

const unitsByHash = new Map(gate3.visualUnits.map((unit) => [unit.sha256, unit]));
assert(unitsByHash.size === gate3.visualUnits.length, "duplicate visualUnit hash");
for (const [sha256, group] of Map.groupBy(gate3.slides, (slide) => slide.sha256)) {
  const unit = unitsByHash.get(sha256);
  assert(unit, `${sha256}: missing visualUnit`);
  assert(JSON.stringify([...unit.sourceImageIds].sort()) === JSON.stringify(group.map((slide) => slide.imageId).sort()), `${sha256}: sourceImageIds mismatch`);
  assert(group.every((slide) => slide.representativeImageId === unit.representativeImageId), `${sha256}: representative mismatch`);
}

const primary = gate3.slides.filter((slide) => slide.corpusRole === "primary");
const derivative = gate3.slides.filter((slide) => slide.corpusRole === "derivative");
assert(primary.length === 202, "expected 202 primary attachments");
assert(derivative.length === 19, "expected 19 derivative attachments");
assert(Object.values(gate3.summary.primaryRoleCounts).reduce((sum, count) => sum + count, 0) === 202, "primary role counts mismatch");
assert(Object.values(gate3.summary.derivativeRoleCounts).reduce((sum, count) => sum + count, 0) === 19, "derivative role counts mismatch");

console.log("Exam-analysis Gate 3 slide analysis verification passed.");
console.log("posts=24 attachments=221 uniqueVisualUnits=215 existingVision=116 manual=105");

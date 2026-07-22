import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  EXAM_ANALYSIS_BENCHMARK_CORPUS_CONTRACT,
  EXAM_ANALYSIS_FACTUAL_ONLY_FIELDS,
  EXAM_ANALYSIS_PHRASE_FIELD_CONTRACT,
  EXAM_ANALYSIS_PHRASE_LIBRARY,
  createExamAnalysisPhraseDraft,
  getExamAnalysisPhraseById,
  getExamAnalysisPhraseOptions,
} from "../src/domains/exams/examAnalysisPhraseLibrary.js";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const gate2 = JSON.parse(await fs.readFile(path.join(repoRoot, "docs/exam-analysis-blog-image-manifest-gate2-2026-07-21.json"), "utf8"));
const gate3 = JSON.parse(await fs.readFile(path.join(repoRoot, "docs/exam-analysis-blog-slide-analysis-gate3-2026-07-21.json"), "utf8"));
const roleLibrary = JSON.parse(await fs.readFile(path.join(repoRoot, "docs/exam-analysis-slide-role-library-gate5-2026-07-21.json"), "utf8"));
const assert = (condition, message) => { if (!condition) throw new Error(message); };

const primaryPosts = gate2.posts.filter((post) => post.corpusRole === "primary");
const primarySlides = gate3.slides.filter((slide) => slide.corpusRole === "primary");
const primaryLogNos = new Set(primaryPosts.map((post) => post.logNo));
const primarySlidesById = new Map(primarySlides.map((slide) => [slide.imageId, slide]));
const ids = new Set();

assert(primaryPosts.length === 21, `expected 21 primary posts, found ${primaryPosts.length}`);
assert(primaryPosts.flatMap((post) => post.images).length === 202, "expected 202 primary attachments");
assert(primarySlides.length === 202, "Gate 3 primary slide count mismatch");
assert(EXAM_ANALYSIS_PHRASE_LIBRARY.length >= 40, "phrase library must provide at least 40 curated options");
assert(EXAM_ANALYSIS_BENCHMARK_CORPUS_CONTRACT.primaryPosts === 21, "corpus contract post count mismatch");
assert(EXAM_ANALYSIS_BENCHMARK_CORPUS_CONTRACT.primaryAttachments === 202, "corpus contract attachment count mismatch");
assert(
  JSON.stringify([...EXAM_ANALYSIS_BENCHMARK_CORPUS_CONTRACT.reviewedLogNos].sort()) === JSON.stringify([...primaryLogNos].sort()),
  "reviewedLogNos must cover the full 21-post primary corpus"
);

for (const item of EXAM_ANALYSIS_PHRASE_LIBRARY) {
  assert(!ids.has(item.id), `duplicate phrase id: ${item.id}`);
  ids.add(item.id);
  const contract = EXAM_ANALYSIS_PHRASE_FIELD_CONTRACT[item.field];
  assert(contract, `${item.id}: unknown field ${item.field}`);
  assert(contract.role === item.role, `${item.id}: role/field contract mismatch`);
  assert(roleLibrary.roles[item.role], `${item.id}: role is absent from Gate 5 library`);
  assert(Array.isArray(item.schoolLevels) && item.schoolLevels.length > 0, `${item.id}: missing schoolLevels`);
  assert(item.schoolLevels.every((level) => ["middle", "high"].includes(level)), `${item.id}: invalid schoolLevel`);
  assert(typeof item.label === "string" && item.label.length > 0, `${item.id}: missing label`);
  assert(typeof item.draft === "string" && item.draft.length >= 10 && item.draft.length <= 100, `${item.id}: draft length out of bounds`);
  assert(item.provenance?.sourceType === "blog_benchmark_paraphrase", `${item.id}: invalid sourceType`);
  assert(item.provenance?.corpusRole === "primary", `${item.id}: derivative evidence is forbidden`);
  assert(item.provenance?.isVerbatim === false, `${item.id}: verbatim benchmark text is forbidden`);
  assert(item.provenance.sourceLogNos.length > 0, `${item.id}: missing sourceLogNos`);
  assert(item.provenance.sourceLogNos.every((logNo) => primaryLogNos.has(logNo)), `${item.id}: source outside 21-post primary corpus`);
  assert(item.provenance.sourceImageIds.length > 0, `${item.id}: missing sourceImageIds`);
  assert(item.provenance.sourceImageIds.every((imageId) => primarySlidesById.has(imageId)), `${item.id}: source image outside 202-slide primary corpus`);
  assert(item.provenance.sourceImageIds.every((imageId) => item.provenance.sourceLogNos.includes(primarySlidesById.get(imageId).logNo)), `${item.id}: image/logNo provenance mismatch`);
  assert(item.provenance.evidenceKeywords.length > 0, `${item.id}: missing evidenceKeywords`);
  assert(!item.provenance.evidenceKeywords.includes(item.draft), `${item.id}: draft must be a paraphrase, not copied evidence`);
}

const phraseSourceLogNos = new Set(EXAM_ANALYSIS_PHRASE_LIBRARY.flatMap((item) => item.provenance.sourceLogNos));
const noReusablePhraseLogNos = new Set(EXAM_ANALYSIS_BENCHMARK_CORPUS_CONTRACT.noReusablePhraseLogNos);
assert(
  [...primaryLogNos].every((logNo) => phraseSourceLogNos.has(logNo) || noReusablePhraseLogNos.has(logNo)),
  "every reviewed post must either support a phrase or have an explicit no-reusable-phrase decision"
);
assert(
  [...noReusablePhraseLogNos].every((logNo) => primaryLogNos.has(logNo) && !phraseSourceLogNos.has(logNo)),
  "no-reusable-phrase list must contain only reviewed posts without phrase provenance"
);

for (const field of EXAM_ANALYSIS_FACTUAL_ONLY_FIELDS) {
  assert(!EXAM_ANALYSIS_PHRASE_LIBRARY.some((item) => item.field === field), `${field}: factual-only field must not have phrase suggestions`);
}

const middleOptions = getExamAnalysisPhraseOptions({ role: "key_question", field: "strategy", schoolLevel: "middle" });
const highOptions = getExamAnalysisPhraseOptions({ role: "key_question", field: "strategy", schoolLevel: "high" });
assert(middleOptions.length > 0 && highOptions.length > 0, "school-level filtering returned no strategy options");
assert(middleOptions.every((item) => item.schoolLevels.includes("middle")), "middle filter leaked a high-only option");
assert(highOptions.some((item) => item.id === "strategy-use-complement"), "high-only option missing from high filter");
assert(!middleOptions.some((item) => item.id === "strategy-use-complement"), "high-only option leaked into middle filter");

const tagged = getExamAnalysisPhraseOptions({ field: "strategy", schoolLevel: "high", tags: ["경우의수"] });
assert(tagged.every((item) => item.tags.includes("경우의수")), "tag filtering mismatch");
const first = EXAM_ANALYSIS_PHRASE_LIBRARY[0];
assert(getExamAnalysisPhraseById(first.id) === first, "id lookup must return the canonical immutable entry");
assert(createExamAnalysisPhraseDraft(first.id) === first.draft, "draft selection mismatch");
assert(createExamAnalysisPhraseDraft("missing") === "", "missing phrase must return an empty draft");

console.log("Exam-analysis benchmark phrase library contract passed.");
console.log(`phrases=${EXAM_ANALYSIS_PHRASE_LIBRARY.length} fields=${Object.keys(EXAM_ANALYSIS_PHRASE_FIELD_CONTRACT).length} reviewedPosts=${primaryPosts.length} phraseSourcePosts=${phraseSourceLogNos.size} noReusablePhrasePosts=${noReusablePhraseLogNos.size} primarySlides=${primarySlides.length}`);

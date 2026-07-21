import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inputPath = path.resolve(repoRoot, "docs/exam-analysis-blog-image-manifest-gate2-2026-07-21.json");
const outputPath = path.resolve(repoRoot, "docs/exam-analysis-blog-slide-analysis-gate3-2026-07-21.json");
const rawDir = path.resolve(process.argv[2] || "E:/academy-os/.codex-temp/benchmark-vision-results");

const manualRoles = {
  "224342833914": ["cover", "exam_structure", "overall_review", "key_question", "solution", "key_question", "solution", "next_preparation"],
  "224310742080": ["cover", "exam_structure", "difficulty_flow", "key_question_summary", "source_reference", "source_question", "solution", "source_reference", "source_question", "solution", "source_reference", "source_question", "next_preparation", "academy_cta"],
  "224309491367": ["cover", "exam_structure", "unit_distribution", "difficulty_flow", "key_question_summary", "solution", "source_reference", "source_question", "solution", "source_reference", "source_question", "next_preparation", "academy_cta"],
  "224307152619": ["cover", "exam_structure", "key_question_summary", "solution", "solution", "source_reference", "source_question", "solution", "source_reference", "source_question", "key_question_summary", "academy_cta"],
  "224263462499": ["cover", "key_question", "solution", "key_question", "solution", "key_question", "solution"],
  "224260124266": ["cover", "key_question", "solution", "key_question", "solution", "key_question", "solution"],
  "224251937391": ["cover", "key_question", "solution", "solution", "solution"],
  "224164418523": ["cover", "overall_review", "source_question", "key_question", "source_question", "key_question", "source_question", "key_question", "overall_review", "data_reference", "data_reference"],
  "224156001862": ["overall_review", "overall_review", "difficulty_flow", "difficulty_flow", "exam_structure", "overall_review", "data_reference", "data_reference", "data_reference"],
  "224342636893": ["cover", "cross_school_summary", "cross_school_summary", "cross_school_summary", "cross_school_summary", "cross_school_summary", "next_preparation", "academy_cta"],
  "224341516007": ["cover", "cross_school_comparison", "cross_school_summary", "next_preparation", "academy_cta"],
  "224325868015": ["progress_cover", "progress_table", "curriculum_reference", "progress_table", "curriculum_reference", "progress_table"],
};

const rawRoleMap = {
  cover: "cover",
  exam_structure: "exam_structure",
  overall_flow: "overall_review",
  key_question: "key_question",
  solution_flow: "solution",
  score_band: "difficulty_flow",
  next_study: "next_preparation",
  cta: "academy_cta",
};

const roleConfig = {
  cover: ["hero_cover", "generated_card", "low", ["brand_header", "hero_title", "school_exam_meta", "visual_anchor"]],
  exam_structure: ["metric_dashboard", "generated_card", "medium", ["section_title", "metric_cards", "structure_summary", "brand_footer"]],
  unit_distribution: ["chart_or_distribution", "generated_card", "medium", ["section_title", "distribution_chart", "unit_labels", "interpretation_note"]],
  difficulty_flow: ["chart_or_distribution", "generated_card", "medium", ["section_title", "difficulty_visual", "highlight_callout", "interpretation_note"]],
  overall_review: ["stacked_summary_panels", "generated_card", "medium", ["section_title", "summary_panels", "emphasis_marks", "brand_footer"]],
  key_question_summary: ["stacked_summary_panels", "generated_card", "medium", ["section_title", "question_chips", "selection_reasons", "brand_footer"]],
  key_question: ["source_and_analysis_split", "hybrid_source_card", "high", ["question_label", "source_asset_frame", "analysis_panel", "concept_tags", "error_point"]],
  solution: ["source_and_solution_split", "hybrid_source_card", "high", ["question_label", "solution_panel", "step_markers", "answer_check"]],
  source_question: ["full_source_asset", "source_only", "high", ["source_asset_frame", "source_caption"]],
  source_reference: ["book_or_reference", "source_only", "low", ["source_asset_frame", "source_caption"]],
  data_reference: ["data_table", "data_reference", "high", ["table_frame", "row_labels", "data_cells"]],
  next_preparation: ["checklist", "generated_card", "medium", ["section_title", "action_checklist", "priority_highlight", "brand_footer"]],
  academy_cta: ["cta_photo", "generated_card", "low", ["brand_header", "photo_or_character", "value_statement", "cta_panel"]],
  cross_school_summary: ["stacked_summary_panels", "generated_card", "medium", ["section_title", "school_label", "summary_text", "emphasis_marks"]],
  cross_school_comparison: ["comparison_table", "generated_card", "high", ["section_title", "school_rows", "comparison_dimensions", "summary_note"]],
  progress_cover: ["hero_cover", "generated_card", "low", ["brand_header", "hero_title", "period_meta", "visual_anchor"]],
  progress_table: ["data_table", "data_reference", "high", ["class_rows", "progress_cells", "section_title", "brand_footer"]],
  curriculum_reference: ["data_table", "source_only", "high", ["source_asset_frame", "curriculum_rows", "highlight_mark"]],
};

function compactKeywords(card) {
  const candidates = [
    ...(Array.isArray(card?.headlineKeywords) ? card.headlineKeywords : []),
    ...(Array.isArray(card?.featureKeywords) ? card.featureKeywords.map((item) => item?.keyword) : []),
  ];
  return [...new Set(candidates.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim()))].slice(0, 8);
}

function classification(role) {
  const config = roleConfig[role];
  if (!config) throw new Error(`Unknown canonical role: ${role}`);
  return { layoutFamily: config[0], assetMode: config[1], textDensity: config[2], components: config[3] };
}

const source = JSON.parse(await fs.readFile(inputPath, "utf8"));
const rawByLogNo = new Map();
for (const post of source.posts.filter((item) => item.visionRawAvailable)) {
  const rawPath = path.join(rawDir, `${post.logNo}-latest.json`);
  const raw = JSON.parse(await fs.readFile(rawPath, "utf8"));
  const cards = raw?.result?.parsed?.imageCards;
  if (!Array.isArray(cards) || cards.length !== post.images.length) {
    throw new Error(`${post.logNo}: raw card count mismatch`);
  }
  rawByLogNo.set(post.logNo, cards);
}

const firstImageByHash = new Map();
for (const post of source.posts) {
  for (const image of post.images) {
    if (!firstImageByHash.has(image.sha256)) firstImageByHash.set(image.sha256, image.imageId);
  }
}

const slides = [];
for (const post of source.posts) {
  const rawCards = rawByLogNo.get(post.logNo);
  const roles = manualRoles[post.logNo];
  if (!rawCards && (!roles || roles.length !== post.images.length)) {
    throw new Error(`${post.logNo}: missing or mismatched manual classification`);
  }

  for (let index = 0; index < post.images.length; index += 1) {
    const image = post.images[index];
    const rawCard = rawCards?.[index];
    const canonicalRole = rawCard ? rawRoleMap[rawCard.cardRole] : roles[index];
    if (!canonicalRole) throw new Error(`${image.imageId}: unmapped raw role ${rawCard?.cardRole}`);
    const representativeImageId = firstImageByHash.get(image.sha256);
    slides.push({
      imageId: image.imageId,
      logNo: post.logNo,
      slideOrder: image.slideOrder,
      corpusRole: post.corpusRole,
      schoolLevel: post.schoolLevel,
      sha256: image.sha256,
      representativeImageId,
      isDuplicateAttachment: representativeImageId !== image.imageId,
      canonicalRole,
      ...classification(canonicalRole),
      evidence: {
        source: rawCard ? "existing_vision" : "manual_visual_review",
        originalRole: rawCard?.cardRole || null,
        headlineKeywords: compactKeywords(rawCard),
        needsHumanReview: Boolean(rawCard?.needsHumanReview),
      },
    });
  }
}

const uniqueByHash = new Map();
for (const slide of slides) {
  if (!uniqueByHash.has(slide.sha256)) {
    uniqueByHash.set(slide.sha256, { ...slide, sourceImageIds: [] });
  }
  uniqueByHash.get(slide.sha256).sourceImageIds.push(slide.imageId);
}
const visualUnits = [...uniqueByHash.values()].map(({ isDuplicateAttachment, ...unit }) => unit);
const countBy = (items, key) => Object.fromEntries([...items.reduce((map, item) => map.set(item[key], (map.get(item[key]) || 0) + 1), new Map())].sort(([a], [b]) => a.localeCompare(b)));

const output = {
  schemaVersion: 1,
  generatedAt: source.generatedAt,
  sourceManifest: path.relative(repoRoot, inputPath).replaceAll("\\", "/"),
  analysisPolicy: {
    paidVisionCalls: 0,
    existingVisionAttachmentsReused: slides.filter((item) => item.evidence.source === "existing_vision").length,
    manualVisualReviewAttachments: slides.filter((item) => item.evidence.source === "manual_visual_review").length,
    copyrightedBodyTextStored: false,
    derivativeKeptSeparate: true,
  },
  summary: {
    posts: source.posts.length,
    attachments: slides.length,
    uniqueVisualUnits: visualUnits.length,
    primaryAttachments: slides.filter((item) => item.corpusRole === "primary").length,
    derivativeAttachments: slides.filter((item) => item.corpusRole === "derivative").length,
    primaryRoleCounts: countBy(slides.filter((item) => item.corpusRole === "primary"), "canonicalRole"),
    derivativeRoleCounts: countBy(slides.filter((item) => item.corpusRole === "derivative"), "canonicalRole"),
    layoutCounts: countBy(slides, "layoutFamily"),
    assetModeCounts: countBy(slides, "assetMode"),
  },
  taxonomy: {
    roles: Object.keys(roleConfig),
    layoutFamilies: [...new Set(Object.values(roleConfig).map((item) => item[0]))].sort(),
    assetModes: [...new Set(Object.values(roleConfig).map((item) => item[1]))].sort(),
  },
  slides,
  visualUnits,
};

await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Wrote ${path.relative(repoRoot, outputPath)}`);
console.log(`attachments=${slides.length} uniqueVisualUnits=${visualUnits.length} existingVision=${output.analysisPolicy.existingVisionAttachmentsReused} manual=${output.analysisPolicy.manualVisualReviewAttachments}`);

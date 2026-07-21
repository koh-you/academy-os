import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const inputArg = process.argv[2];
if (!inputArg) throw new Error("Usage: node scripts/generate-exam-analysis-slide-prompts.mjs <input.json> [output.md]");
const inputPath = path.resolve(process.cwd(), inputArg);
const outputPath = path.resolve(process.cwd(), process.argv[3] || `${path.basename(inputPath, path.extname(inputPath))}-prompts.md`);
const library = JSON.parse(await fs.readFile(path.join(repoRoot, "docs/exam-analysis-slide-role-library-gate5-2026-07-21.json"), "utf8"));
const project = JSON.parse(await fs.readFile(inputPath, "utf8"));

const assert = (condition, message) => { if (!condition) throw new Error(message); };
const hasValue = (value) => value !== undefined && value !== null && (!(typeof value === "string") || value.trim().length > 0);
const containsPlaceholder = (value) => {
  if (typeof value === "string") return /\[[^\]]+\]/.test(value);
  if (Array.isArray(value)) return value.some(containsPlaceholder);
  if (value && typeof value === "object") return Object.values(value).some(containsPlaceholder);
  return false;
};
assert(project.schemaVersion === 1, "schemaVersion must be 1");
assert(["middle", "high"].includes(project.schoolLevel), "schoolLevel must be middle or high");
assert(project.schoolName && project.grade && project.examName && project.subject, "school/exam identity fields are required");
assert(project.style?.palette?.primary, "style.palette.primary is required");
assert(Array.isArray(project.slides) && project.slides.length > 0, "slides must be a non-empty array");

const seen = new Set();
for (const [index, slide] of project.slides.entries()) {
  assert(slide.id, `slides[${index}].id is required`);
  assert(!seen.has(slide.id), `duplicate slide id: ${slide.id}`);
  seen.add(slide.id);
  assert(library.roles[slide.role], `${slide.id}: unsupported role ${slide.role}`);
  assert(slide.status === "human_confirmed", `${slide.id}: status must be human_confirmed before prompt generation`);
  assert(slide.data && typeof slide.data === "object", `${slide.id}: data object is required`);
  for (const key of library.roles[slide.role].requiredData) {
    assert(hasValue(slide.data[key]), `${slide.id}: required data field ${key} is missing`);
  }
  if (!project.exampleOnly) assert(!containsPlaceholder(slide.data), `${slide.id}: unresolved [placeholder] is not allowed in production input`);
}

const jsonBlock = (value) => JSON.stringify(value, null, 2);
const styleText = jsonBlock(project.style);
const brandText = jsonBlock(project.brand || {});
const output = [];

output.push(`# ${project.schoolName} ${project.grade} ${project.examName} 시험분석 슬라이드 프롬프트`);
output.push("");
output.push(`생성 입력: \`${path.basename(inputPath)}\``);
output.push(`슬라이드 수: ${project.slides.length}`);
output.push(`상태: ${project.exampleOnly ? "구조 설명용 예제 — 실제 제작 전 대괄호 값을 교체" : "역할과 데이터가 사람에게 확정된 입력만 사용"}`);
output.push("");
output.push("## 0. 모든 장 앞에 붙이는 마스터 프롬프트");
output.push("");
output.push("```text");
output.push(`당신은 교육 콘텐츠 아트디렉터입니다. ${project.schoolName} ${project.grade} ${project.examName} ${project.subject} 시험분석 카드뉴스를 제작합니다.`);
output.push("각 장은 같은 프로젝트의 연속물이어야 하며, 역할별 정보 구조는 유지하고 아래 스타일 토큰만 일관되게 적용하세요.");
output.push("");
output.push("[PROJECT STYLE — KEEP CONSISTENT]");
output.push(styleText);
output.push("");
output.push("[BRAND — DO NOT INVENT]");
output.push(brandText);
output.push("");
output.push(`[CANVAS] ${project.canvas?.width || 1080} × ${project.canvas?.height || 1350}px, ${project.canvas?.ratio || "4:5"}, mobile-first readability, generous safe margins.`);
output.push("[GLOBAL RULES]");
output.push("1. 입력에 없는 점수, 평균, 문항 수, 배점, 출처, 학교 정보, 성과를 만들지 마세요.");
output.push("2. 한글·숫자·수식·문항 번호는 제공값을 정확히 유지하세요. 확신이 없으면 빈 자리 표시를 남기세요.");
output.push("3. 원본 문제, 손풀이, 교재 표지, 표 자산은 다시 그리거나 변형하지 말고 지정 프레임에 그대로 삽입하세요.");
output.push("4. 같은 색상, 테두리, 제목 위치, 여백 체계, 푸터를 모든 장에서 유지하세요.");
output.push("5. 과도한 3D, 광택, 네온, 복잡한 배경, 장식용 수학 기호 남발, 가짜 로고, 워터마크를 금지합니다.");
output.push("6. 최종 한글 텍스트를 후편집할 수 있도록 텍스트 영역과 원본 자산 영역을 명확히 분리하세요.");
output.push("```");

for (const [index, slide] of project.slides.entries()) {
  const role = library.roles[slide.role];
  const number = index + 1;
  const assets = (slide.sourceAssets || []).map((asset) => ({
    id: asset.id,
    fileName: asset.fileName,
    usage: asset.usage,
    crop: asset.crop || "do not crop beyond supplied bounds",
  }));
  output.push("");
  output.push(`## ${number}번 슬라이드 프롬프트 — ${slide.title || slide.role}`);
  output.push("");
  output.push(`역할: \`${slide.role}\` / 레이아웃: \`${role.layout}\``);
  output.push("");
  output.push("```text");
  output.push(`[SLIDE ${number}/${project.slides.length}]`);
  output.push(`[ROLE] ${slide.role}`);
  output.push(`[PURPOSE] ${role.purpose}`);
  output.push(`[LAYOUT] ${role.layout}`);
  output.push(`[COMPONENTS] ${role.components.join(", ")}`);
  output.push("");
  output.push("[CONFIRMED CONTENT — COPY EXACTLY, DO NOT ADD FACTS]");
  output.push(jsonBlock(slide.data));
  output.push("");
  output.push("[SOURCE ASSETS — DO NOT REDRAW]");
  output.push(assets.length ? jsonBlock(assets) : "None.");
  output.push("");
  output.push(`[ASSET POLICY] ${role.assetPolicy}`);
  output.push("[COMPOSITION]");
  output.push(slide.composition || `Use the ${role.layout} family. Keep one dominant message, clear title hierarchy, and the listed components in reading order.`);
  output.push("[TEXT HIERARCHY]");
  output.push("Title first, one short explanatory layer second, evidence/detail third. Do not shrink body text to fit excessive content; leave a clearly labeled editable text area if needed.");
  output.push("[CONTINUITY]");
  output.push(`Match the master project style exactly. This is slide ${number}, not a new standalone design.`);
  output.push("[NEGATIVE CONSTRAINTS]");
  output.push("No invented facts, no altered formulas, no fake source image, no new logo, no random English, no illegible small Korean text, no clipped content, no extra CTA unless supplied.");
  output.push("[DELIVERABLE]");
  output.push(`One ${project.canvas?.ratio || "4:5"} slide image with safe margins. Preserve explicit empty regions for source assets or editable text layers.`);
  output.push("```");
  output.push("");
  output.push("검수 체크:");
  for (const check of role.qualityChecks) output.push(`- [ ] ${check}`);
  output.push("- [ ] 마스터 스타일과 색·제목 위치·푸터가 일치한다.");
  output.push("- [ ] 입력 JSON 밖의 사실이 추가되지 않았다.");
  output.push("");
  output.push("수정 프롬프트 템플릿:");
  output.push("");
  output.push("```text");
  output.push(`이전 ${number}번 슬라이드를 부모 버전으로 유지하고 다음 항목만 수정하세요: [수정할 항목].`);
  output.push("변경 금지: 캔버스 비율, 전체 색상 토큰, 제목 위치, 로고/푸터 위치, 제공된 원본 자산, 수정 요청에 포함되지 않은 텍스트와 숫자.");
  output.push("수정 후 변경된 항목과 그대로 보존한 항목을 각각 짧게 확인하세요.");
  output.push("```");
}

output.push("");
output.push("## 최종 세트 검수");
output.push("");
output.push("- [ ] 슬라이드 번호와 역할 순서가 확정 목록과 일치한다.");
output.push("- [ ] 학교명·학년·시험명·과목 표기가 모든 장에서 동일하다.");
output.push("- [ ] 문제/풀이/표 원본이 재생성되지 않았고 자산 ID 연결이 유지된다.");
output.push("- [ ] 한 장을 수정해도 다른 장의 확정 데이터가 바뀌지 않는다.");
output.push("- [ ] 교사 검수 후 저장한 값이 AI 초안보다 우선한다.");

await fs.writeFile(outputPath, `${output.join("\n")}\n`, "utf8");
console.log(`Wrote ${outputPath}`);
console.log(`slides=${project.slides.length}`);

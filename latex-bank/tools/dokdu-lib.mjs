// 정독 출력 검증 공용 함수(dokdu-check · dokdu-status 가 사용).
import { readFile, access } from "node:fs/promises";
import path from "node:path";
import yaml from "js-yaml";

export const REQUIRED = ["id", "page", "vendor_label", "category_type", "summary", "category", "M", "M_total", "insights", "insight_count", "depth_score", "type_hint", "star", "rationale", "tier", "mechanism_primary", "insight_type", "target_cohort", "answer", "answer_source", "figure", "latex", "variation_notes"];

export async function loadPlan(bank) {
  return JSON.parse(await readFile(path.join("latex-bank", bank, "정독", "plan.json"), "utf8"));
}

/** 한 작업의 출력 파일을 검사한다. errors 가 비면 통과. */
export async function checkJob(plan, spec) {
  const result = { bank: plan.bank, job: spec.job, out: spec.out, expected: spec.count, blocks: 0, errors: [], warnings: [], stars: {}, insight: 0, missing: spec.ids };
  let text;
  try { text = await readFile(spec.out, "utf8"); } catch { result.errors.push("파일 없음"); return result; }
  const fences = [...text.matchAll(/```yaml\r?\n([\s\S]*?)```/g)].map((m) => m[1]);
  const blocks = [];
  fences.forEach((fence, index) => {
    try {
      const doc = yaml.load(fence);
      const list = Array.isArray(doc) ? doc : [doc];
      for (const block of list) { if (block && typeof block === "object") blocks.push(block); else result.errors.push(`펜스 ${index + 1}: 블록이 객체가 아님`); }
    } catch (error) { result.errors.push(`펜스 ${index + 1} YAML 오류: ${error.message.split("\n")[0].slice(0, 120)}`); }
  });
  result.blocks = blocks.length;
  const prefix = `${plan.code}-`;
  const seen = new Set();
  for (const block of blocks) {
    const id = String(block.id ?? "");
    const itemId = id.startsWith(prefix) ? id.slice(prefix.length) : null;
    if (!itemId) { result.errors.push(`id 접두어 불일치: ${id}`); continue; }
    if (seen.has(itemId)) result.errors.push(`id 중복: ${id}`);
    seen.add(itemId);
    if (!spec.ids.includes(itemId)) result.errors.push(`작업 범위 밖 id: ${id}`);
    for (const key of REQUIRED) if (block[key] === undefined) result.errors.push(`${id}: 필드 없음 ${key}`);
    if (block.M && typeof block.M === "object") {
      const sum = ["s", "k", "a", "t"].reduce((s, k) => s + Number(block.M[k] ?? 0), 0);
      if (Number(block.M_total) !== sum) result.warnings.push(`${id}: M_total ${block.M_total} ≠ 합 ${sum}`);
    }
    const star = Number(block.star);
    if (!(star >= 1 && star <= 5)) result.errors.push(`${id}: star 범위 밖 ${block.star}`);
    else result.stars[star] = (result.stars[star] || 0) + 1;
    if (Array.isArray(block.insights) && block.insights.length !== Number(block.insight_count)) result.warnings.push(`${id}: insight_count ${block.insight_count} ≠ insights ${block.insights.length}`);
    if (Array.isArray(block.insights) && block.insights.length) result.insight += 1;
    if (block.variation_notes && (!block.variation_notes.numeric || !block.variation_notes.creative)) result.errors.push(`${id}: variation_notes.numeric/creative 비어 있음`);
    if (block.latex) { const ok = await access(String(block.latex)).then(() => true, () => false); if (!ok) result.errors.push(`${id}: latex 경로 없음 ${block.latex}`); }
  }
  const missing = spec.ids.filter((id) => !seen.has(id));
  if (missing.length) result.errors.push(`누락 ${missing.length}: ${missing.slice(0, 12).join(" ")}${missing.length > 12 ? " …" : ""}`);
  result.missing = missing;
  if (!/^## 분류 이슈 목록/m.test(text)) result.warnings.push("「## 분류 이슈 목록」 절 없음");
  if (!/^## 표본 판정 요약/m.test(text)) result.warnings.push("「## 표본 판정 요약」 절 없음");
  if (!/^---\r?\n[\s\S]*?\r?\n---/.test(text)) result.errors.push("frontmatter 없음");
  return result;
}

export function formatResult(result) {
  const head = result.errors.length ? "FAIL" : "ok";
  const lines = [`${head} ${result.bank} ${result.job}: 블록 ${result.blocks}/${result.expected} · ★ ${JSON.stringify(result.stars)} · 통찰형 ${result.insight}`];
  for (const e of result.errors) lines.push(`  ✗ ${e}`);
  for (const w of result.warnings) lines.push(`  △ ${w}`);
  return lines.join("\n");
}

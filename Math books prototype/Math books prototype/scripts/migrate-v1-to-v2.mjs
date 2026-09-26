#!/usr/bin/env node
// scripts/migrate-v1-to-v2.mjs v0.1 (Phase 2.1)
//
// v1.0 정독 파일을 v2.0 스키마로 마이그레이션.
// 실제 파일을 덮어쓰지 않고, 원본 파일 하단에 마이그레이션 부록 섹션을 append.
//
// 마이그레이션 대상 필드:
//   기존: source, page, category_type, problem_summary, category, tier, unit_code,
//         mechanism_primary, insight_type, depth
//   v2.0 신규: vendor_label, M, insights, insight_count, depth_score, base_star,
//              star, premium, target_cohort, rationale, prediction_source
//
// 절차:
//   1. 원본 v1.0 항목 파싱
//   2. vendor_label 회귀 (star-classify.mjs) 로 predicted_star + confidence 산출
//   3. 기존 depth·insight_type → v2.0 insights[] 근사 변환
//   4. 부록 마크다운 섹션 생성 (원본 미수정)
//   5. 옵션: --write 시 원본에 append
//
// 사용:
//   node scripts/migrate-v1-to-v2.mjs --file <path> [--publisher NAME] [--sub-unit NAME] [--write]

import { readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const args = process.argv.slice(2);
let file = null;
let publisher = null;
let subUnit = null;
let doWrite = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--file') file = args[++i];
  else if (args[i] === '--publisher') publisher = args[++i];
  else if (args[i] === '--sub-unit') subUnit = args[++i];
  else if (args[i] === '--write') doWrite = true;
}

if (!file) {
  console.error('Usage: node scripts/migrate-v1-to-v2.mjs --file <path> [--publisher NAME] [--sub-unit NAME] [--write]');
  process.exit(1);
}

// 벤더 회귀 함수 (star-classify.mjs v1.1과 동기화)
function classifyByVendorLabel(label, pub, sub) {
  if (!label) return null;
  const L = String(label);
  if (pub === '개념원리' || /개념원리/.test(pub || '')) {
    if (/유제|확인체크/.test(L)) return { tier: 'star_3', confidence: 0.60 };
    if (/대표예제|필수예제/.test(L)) return { tier: 'star_3', confidence: 0.55, alt: 'star_4' };
    if (/연습문제/.test(L)) return { tier: 'star_3', confidence: 0.55, alt: 'star_4' };
    if (/실력UP|실력\s*UP|수능형/.test(L)) return { tier: 'star_5', confidence: 0.65, alt: 'star_4' };
  }
  return { tier: 'star_3', confidence: 0.40, note: '벤더 라벨 회귀 미매칭 · 수동 재판정 필요' };
}

// v1.0 → v2.0 필드 변환
function convertToV2(item, pub, sub) {
  const oldTier = item.tier || '';
  const oldDepth = Number(item.depth) || 1;
  const oldInsightType = item.insight_type || '절차형';

  const predicted = classifyByVendorLabel(item.vendor_label || item.category_type, pub, sub);
  const predictedStar = predicted?.tier?.replace('star_', '').replace('_premium', ' premium') || '?';
  const confidence = predicted?.confidence ?? 0;

  // 기존 depth → v2.0 insights 근사 (단일 통찰만 표시 · 정밀은 수동)
  let insightsGuess = [];
  if (oldInsightType === '통찰형' && oldDepth >= 2) {
    insightsGuess.push({
      step: 1,
      type: 'I-EQV',
      depth: oldDepth,
      effective_depth: oldDepth,
      description: 'v1.0 → v2.0 자동 변환 · 통찰 유형 수동 재라벨링 필요'
    });
  }

  return {
    original_id: item.source,
    page: item.page,
    v1_tier: oldTier,
    predicted_star_v2: predicted?.tier || '?',
    prediction_confidence: confidence,
    prediction_alt: predicted?.alt,
    prediction_note: predicted?.note,
    v1_category_type: item.category_type,
    v1_insight_type: oldInsightType,
    v1_depth: oldDepth,
    insights_guess: insightsGuess,
    needs_manual_rejudgment: confidence < 0.70,
    tier_conflict: oldTier && predicted?.tier && oldTier !== predicted.tier
  };
}

// 파일 파싱
const md = await readFile(file, 'utf-8');
const lines = md.split(/\r?\n/);

// frontmatter에서 publisher·sub_unit 감지
if (!publisher) {
  const nameM = md.match(/^name:\s*([^\n]+)/m);
  if (nameM) {
    const n = nameM[1];
    if (/개념원리/.test(n)) publisher = '개념원리';
    else if (/RPM/i.test(n)) publisher = 'RPM';
    else if (/고쟁이/.test(n)) publisher = '고쟁이';
    else if (/블랙라벨/.test(n)) publisher = '블랙라벨';
    else if (/쎈|ssen/i.test(n)) publisher = '쎈';
    else if (/마플/i.test(n)) publisher = '마플시너지';
  }
}
if (!subUnit) {
  const subM = md.match(/^\s+section:\s*([^\n]+)/m);
  if (subM) subUnit = subM[1].trim();
}

// 항목 파싱
const items = [];
let cur = null;
for (const line of lines) {
  const m = line.match(/^-\s*(?:source|id):\s*(.+?)\s*$/);
  if (m) {
    if (cur) items.push(cur);
    cur = { source: m[1].trim() };
  } else if (cur) {
    const kv = line.match(/^\s+([\w_]+):\s*(.+?)\s*$/);
    if (kv) cur[kv[1]] = kv[2].replace(/\s*#.*$/, '').trim();
  }
}
if (cur) items.push(cur);

// v2.0 변환
const converted = items.map(it => convertToV2(it, publisher, subUnit));

// 마이그레이션 통계
const stats = {
  total: converted.length,
  needs_manual: converted.filter(c => c.needs_manual_rejudgment).length,
  tier_conflicts: converted.filter(c => c.tier_conflict).length,
  by_predicted: {}
};
for (const c of converted) {
  const t = c.predicted_star_v2;
  stats.by_predicted[t] = (stats.by_predicted[t] || 0) + 1;
}

// 부록 마크다운 생성
let appendix = `\n\n---\n\n## v2.0 마이그레이션 부록 (자동 생성 · ${new Date().toISOString().slice(0,10)})\n\n`;
appendix += `**마이그레이션 도구**: \`scripts/migrate-v1-to-v2.mjs\` v0.1\n`;
appendix += `**출처 (감지)**: publisher=${publisher || '미감지'} · sub_unit=${subUnit || '미감지'}\n\n`;
appendix += `### 통계\n\n`;
appendix += `- 총 항목: ${stats.total}\n`;
appendix += `- 수동 재판정 대상 (confidence < 0.7): **${stats.needs_manual}건**\n`;
appendix += `- v1.0 tier vs v2.0 예측 불일치: **${stats.tier_conflicts}건**\n\n`;
appendix += `### 예측 tier 분포\n\n`;
appendix += `| tier | 건수 |\n|---|---|\n`;
for (const [t, n] of Object.entries(stats.by_predicted)) {
  appendix += `| ${t} | ${n} |\n`;
}
appendix += `\n### v2.0 예측 상세 (표본 20문)\n\n`;
appendix += `| id | v1 tier | v2 예측 | 신뢰 | 불일치 | 재판정 필요 |\n|---|---|---|---|---|---|\n`;
for (const c of converted.slice(0, 20)) {
  const conflictMark = c.tier_conflict ? '🔴' : '';
  const manualMark = c.needs_manual_rejudgment ? '⚠' : '';
  appendix += `| ${c.original_id} | ${c.v1_tier || '-'} | ${c.predicted_star_v2} | ${c.prediction_confidence} | ${conflictMark} | ${manualMark} |\n`;
}
if (converted.length > 20) appendix += `| ... 외 ${converted.length - 20}건 | | | | | |\n`;

appendix += `\n### 다음 단계 권장\n\n`;
appendix += `1. **표본 재판정** — confidence < 0.7 문항 중 무작위 15~20문 시스템 순정 재판정 (M·I·depth·star)\n`;
appendix += `2. **회귀 정정** — 재판정 결과로 ${publisher || 'publisher'} 벤더 회귀 함수 계수 갱신 (vendor-label-calibration.md)\n`;
appendix += `3. **본문 v2.0 필드 추가** — insights[]·M·depth_score·premium 필드를 각 항목에 실제 값으로 채움 (본 부록은 예측만)\n`;
appendix += `4. **자산 등재** — v2.0 완료 시 bank/mechanism-데이터-정독-tier-매핑.md v3.1에 등재\n\n`;

if (doWrite) {
  await writeFile(file, md + appendix, 'utf-8');
  console.log(`[migrate-v1-to-v2.mjs] ${basename(file)} · 부록 append 완료.`);
} else {
  console.log(`[migrate-v1-to-v2.mjs] ${basename(file)} (dry-run, --write 없음)`);
  console.log(appendix);
}

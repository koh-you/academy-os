#!/usr/bin/env node
// 정점 밀도 (composite distribution) 검사 — schema.md §2.16.10 v5.2 정합
// 2026-07-14 세션 36 마스터 확립 (star_premium 재정의)
//
// 단일 출처:
//   - bank/schema.md §2.16.10 (star_premium 재정의 · 정점 밀도 지표 5종)
//   - bank/schema.md §2.16.9 (v5.2 composite 임계 33)
//   - bank/서술형-정점-배치.md (서술형 5문 배치 목표)
//   - bank/지문형-심화-카탈로그.md §6.4 v1.1 (narrative_load 부담 스코어)
//
// 지표 5종:
//   - premium_count: composite ≥ 33 슬롯 개수
//   - premium_total_composite: premium 슬롯 comp 합
//   - premium_min_composite: premium 슬롯 comp 최소값
//   - premium_avg_composite: premium 슬롯 comp 평균
//   - top5_composite_sum: 시험지 상위 5문 composite 합
//
// 회차 간 게이트:
//   - series_top5_delta: 이전 회차 대비 top5_composite_sum 상대 차이
//     ≥ 0%: GREEN / -3%~0%: GREEN 경계 / -5%~-3%: YELLOW / -10%~-5%: RED / <-10%: RED 심각
//
// 사용법:
//   node scripts/composite-distribution-check.mjs <청사진.yaml> [이전-청사진.yaml]
//
// 반환 코드: 0 = GREEN / 1 = RED / 2 = 오용

import fs from 'node:fs';
import yaml from 'js-yaml';

const args = process.argv.slice(2);
if (args.length < 1 || args.length > 2) {
  console.error('Usage: node scripts/composite-distribution-check.mjs <청사진.yaml> [이전-청사진.yaml]');
  console.error('  반환 코드: 0 = GREEN / 1 = RED / 2 = 오용');
  process.exit(2);
}

const [currPath, prevPath] = args;

function loadBlueprint(p) {
  if (!fs.existsSync(p)) {
    console.error(`❌ 파일 없음: ${p}`);
    process.exit(2);
  }
  const raw = fs.readFileSync(p, 'utf8');
  try {
    return yaml.load(raw);
  } catch (e) {
    console.error(`❌ YAML 파싱 실패 (${p}): ${e.message}`);
    process.exit(2);
  }
}

const curr = loadBlueprint(currPath);
const prev = prevPath ? loadBlueprint(prevPath) : null;

const currSlots = curr?.slots ?? [];
if (!Array.isArray(currSlots) || currSlots.length === 0) {
  console.error('❌ slots 배열 없음 or 비어있음');
  process.exit(2);
}

// 임계값 (v5.2 default)
const PREMIUM_THRESHOLD = 33;
const V5_2_ACTIVE = true; // v5.2 임계 사용 (기존 v5.1 30 대신 33)

// 지표 5종 계산 함수
function extractComposite(slot) {
  return slot?.v5_scores?.composite ?? slot?.composite ?? null;
}

function computeMetrics(slots) {
  const comps = slots
    .map(s => ({ n: s.number ?? s.n ?? '?', c: extractComposite(s) }))
    .filter(x => x.c != null);

  const premiumSlots = comps.filter(x => x.c >= PREMIUM_THRESHOLD);
  const sortedComps = [...comps].sort((a, b) => b.c - a.c);
  const top5 = sortedComps.slice(0, 5);

  return {
    premium_count: premiumSlots.length,
    premium_slots: premiumSlots.map(x => x.n),
    premium_total_composite: premiumSlots.reduce((a, b) => a + b.c, 0),
    premium_min_composite: premiumSlots.length > 0 ? Math.min(...premiumSlots.map(x => x.c)) : 0,
    premium_avg_composite: premiumSlots.length > 0 ? +(premiumSlots.reduce((a, b) => a + b.c, 0) / premiumSlots.length).toFixed(1) : 0,
    top5_composite_sum: top5.reduce((a, b) => a + b.c, 0),
    top5_slots: top5.map(x => `#${x.n}(${x.c})`),
  };
}

// 목표 값 (청사진 premium_targets 필드 or default)
function extractTargets(doc) {
  const t = doc?.premium_targets ?? {};
  return {
    count: t.count ?? 3,
    total_composite: t.total_composite ?? 110,
    min_composite: t.min_composite ?? PREMIUM_THRESHOLD,
    avg_composite: t.avg_composite ?? 37,
    top5_composite_sum: t.top5_composite_sum ?? 150,
  };
}

const metrics = computeMetrics(currSlots);
const targets = extractTargets(curr);

console.log('📊 정점 밀도 검사 (schema.md §2.16.10 v5.2)');
console.log(`   청사진: ${currPath}`);
console.log(`   슬롯 수: ${currSlots.length}`);
console.log(`   premium 임계: composite ≥ ${PREMIUM_THRESHOLD} (v5.2)\n`);

// 지표 5종 판정
const results = [];
function judge(name, actual, target, unit = '') {
  const pass = actual >= target;
  const symbol = pass ? '✅' : '🔴';
  const status = pass ? 'GREEN' : 'RED';
  console.log(`   ${symbol} ${name}: ${actual}${unit} (목표: ≥ ${target}${unit}) → ${status}`);
  results.push({ name, actual, target, pass });
}

console.log('🎯 목표 대비 판정:');
judge('premium_count', metrics.premium_count, targets.count);
judge('premium_total_composite', metrics.premium_total_composite, targets.total_composite);
judge('premium_min_composite', metrics.premium_min_composite, targets.min_composite);
judge('premium_avg_composite', metrics.premium_avg_composite, targets.avg_composite);
judge('top5_composite_sum', metrics.top5_composite_sum, targets.top5_composite_sum);

console.log(`\n📌 premium 슬롯: ${metrics.premium_slots.length > 0 ? metrics.premium_slots.map(n => `#${n}`).join(', ') : '없음'}`);
console.log(`📌 top5 슬롯: ${metrics.top5_slots.join(', ')}\n`);

// 회차 간 비교 (선택)
let seriesDelta = null;
if (prev) {
  const prevMetrics = computeMetrics(prev?.slots ?? []);
  const prevTop5 = prevMetrics.top5_composite_sum;
  if (prevTop5 > 0) {
    seriesDelta = ((metrics.top5_composite_sum - prevTop5) / prevTop5) * 100;
    console.log('🔄 회차 간 비교 (series_top5_delta):');
    console.log(`   이전 회차: ${prevPath}`);
    console.log(`   이전 top5: ${prevTop5}`);
    console.log(`   현재 top5: ${metrics.top5_composite_sum}`);
    console.log(`   delta: ${seriesDelta.toFixed(2)}%\n`);

    let deltaJudge;
    if (seriesDelta >= 0) deltaJudge = { label: 'GREEN', icon: '🟢' };
    else if (seriesDelta >= -3) deltaJudge = { label: 'GREEN 경계', icon: '🟢' };
    else if (seriesDelta >= -5) deltaJudge = { label: 'YELLOW 개선 검토', icon: '🟡' };
    else if (seriesDelta >= -10) deltaJudge = { label: 'RED 재출제 검토', icon: '🔴' };
    else deltaJudge = { label: 'RED 심각', icon: '🔴' };

    console.log(`   판정: ${deltaJudge.icon} ${deltaJudge.label}`);
    if (seriesDelta < -5) {
      results.push({ name: 'series_top5_delta', actual: seriesDelta, target: -5, pass: false });
    }
  } else {
    console.log('⚠️  이전 회차 top5 계산 불가 (composite 미명시 슬롯)\n');
  }
}

// 최종 판정
const failCount = results.filter(r => !r.pass).length;
console.log(`\n=== 요약 ===`);
console.log(`   지표 판정: ${results.length - failCount}/${results.length} 통과`);

let exitCode = 0;
if (failCount === 0) {
  console.log('   🟢 정점 밀도 GREEN (모든 지표 통과)');
} else if (failCount === 1) {
  console.log(`   🟡 YELLOW: ${failCount}건 미달 (개선 검토)`);
} else {
  console.log(`   🔴 RED: ${failCount}건 미달 (재출제 검토)`);
  exitCode = 1;
}

console.log('\n=== 단일 출처 ===');
console.log('bank/schema.md §2.16.10 (v5.2 star_premium 재정의)');
console.log('bank/서술형-정점-배치.md (서술형 정점 배치 전략)');

process.exit(exitCode);

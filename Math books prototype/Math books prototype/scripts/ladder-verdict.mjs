#!/usr/bin/env node
// 🔴 〔폐기 2026-08-02〕 이 도구는 **접은 점수 체계**의 것이다.
//    난이도는 점수로 합산하지 않고 **앵커와 견주어** 정한다.
//    「잡음비」 같은 말은 쓰지 않는다 (bank/용어-사전.md). 기록으로만 남긴다.
/**
 * ladder-verdict.mjs — 앵커 사다리 본 검정 집계·판정
 *
 * 명세: bank/앵커견주기-판정-명세-v1.md §1~§4·§7 (사전 등록본)
 * 잡음비 계산은 scripts/noise-ratio.mjs 를 그대로 쓴다 (단일 출처).
 *
 * 입력 CSV: qid,rater,position,nearest
 *   position — 판정자의 위치 표기 그대로 ("A3~A4" · "A3과 같음" · "A5보다 깊음")
 *   nearest  — 가장 가까운 앵커 ("A4"). 이것만으로 밴드 적중을 센다
 *
 * 사용: node scripts/ladder-verdict.mjs <판정.csv>
 */

import fs from 'node:fs';
import path from 'node:path';
import { noiseRatio } from './noise-ratio.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const BANDS = ['A1', 'A2', 'A3', 'A4', 'A5'];
const LABEL = { A1: '★ 1~2', A2: '★ 3', A3: '★ 4', A4: '★ 5', A5: '★ 5 프리미엄' };

// 봉인 정답표 — 명세 §5 · 본검정-표본-20문-정답표-v1.md
const TRUTH = {
  Q01: 'A3', Q02: 'A5', Q03: 'A4', Q04: 'A5', Q05: 'A2',
  Q06: 'A5', Q07: 'A5', Q08: 'A4', Q09: 'A1', Q10: 'A1',
  Q11: 'A1', Q12: 'A1', Q13: 'A2', Q14: 'A4', Q15: 'A3',
  Q16: 'A4', Q17: 'A2', Q18: 'A3', Q19: 'A2', Q20: 'A3',
};

// 사전 등록 통과선 — 명세 §7
const PASS = { hit: 14, noise: 0.042, gap: 0.5 };

/** 위치 표기 → 수치 (명세 §1). 판정자에게는 이 표를 주지 않는다 */
function toNumber(pos) {
  const s = String(pos).trim();
  if (/견줄|없다|불가/.test(s)) return null;                       // 결측
  const range = /A(\d)\s*~\s*A(\d)/.exec(s);
  if (range) return (Number(range[1]) + Number(range[2])) / 2;
  const deeper = /A(\d)\s*보다\s*깊/.exec(s);
  if (deeper) return Number(deeper[1]) + 0.5;
  const shallower = /A(\d)\s*보다\s*(얕|낮)/.exec(s);
  if (shallower) return Number(shallower[1]) - 0.5;
  const same = /A(\d)/.exec(s);
  if (same) return Number(same[1]);
  return null;
}

const file = process.argv[2];
if (!file) { console.error('사용: node scripts/ladder-verdict.mjs <판정.csv>'); process.exit(1); }

const lines = fs.readFileSync(file, 'utf8').trim().split(/\r?\n/)
  .filter((l) => l.trim() && !l.startsWith('#'));
const head = lines[0].split(',').map((s) => s.trim());
const col = (n) => head.indexOf(n);
const data = lines.slice(1).map((l) => {
  const c = l.split(',').map((s) => s.trim());
  return { qid: c[col('qid')], rater: c[col('rater')], position: c[col('position')], nearest: c[col('nearest')] };
});

const raters = [...new Set(data.map((d) => d.rater))].sort();
const qids = Object.keys(TRUTH);

console.log('\n앵커 사다리 본 검정 — 판정');
console.log('='.repeat(72));
console.log(`판정자 ${raters.length}인 · 문항 ${qids.length}문 · 표본 5밴드 x 4문 균등\n`);

// ── ① 밴드 적중 ──────────────────────────────────────────────────────────
console.log('① 밴드 적중  (「가장 가까운 앵커」가 참조 밴드와 정확히 일치할 때만)');
console.log('─'.repeat(72));
const hits = {};
for (const r of raters) {
  let hit = 0, adj = 0, miss = [];
  for (const q of qids) {
    const row = data.find((d) => d.qid === q && d.rater === r);
    if (!row) { miss.push(`${q}(무응답)`); continue; }
    const got = (row.nearest || '').match(/A\d/)?.[0];
    if (got === TRUTH[q]) hit++;
    else {
      const d = Math.abs(BANDS.indexOf(got) - BANDS.indexOf(TRUTH[q]));
      if (d === 1) adj++;
      miss.push(`${q}:${TRUTH[q]}→${got || '?'}`);
    }
  }
  hits[r] = hit;
  const ok = hit >= PASS.hit ? '✅' : '❌';
  console.log(`  ${r}  ${String(hit).padStart(2)}/${qids.length}  ${ok}  (인접 어긋남 ${adj})`);
  if (miss.length) console.log(`      어긋남: ${miss.join(' · ')}`);
}
console.log(`  통과선 ${PASS.hit}/${qids.length} · 우연 수준 4/20\n`);

// ── ② 잡음비 ─────────────────────────────────────────────────────────────
console.log('② 잡음비  (판정자를 바꿀 때의 흔들림 ÷ 문항이 벌어진 정도)');
console.log('─'.repeat(72));
const rows = [];
const missing = [];
for (const q of qids) {
  const vals = raters.map((r) => {
    const row = data.find((d) => d.qid === q && d.rater === r);
    return row ? toNumber(row.position) : null;
  });
  if (vals.some((v) => v == null)) { missing.push(q); continue; }
  vals.forEach((v, i) => rows.push({ item: q, rater: raters[i], value: v }));
}
if (missing.length) console.log(`  🔴 결측으로 제외: ${missing.join(' · ')}`);
const nr = noiseRatio(rows);
const noiseOk = nr.ratio <= PASS.noise ? '✅' : '❌';
console.log(`  MSE=${nr.MSE.toFixed(4)}  s2_item=${nr.s2_item.toFixed(4)}  잡음비=${nr.ratio.toFixed(3)}  ${noiseOk}`);
console.log(`  통과선 ${PASS.noise} 이하 · 참고: 밴드 균등 12문 실측 0.039\n`);

// ── ③ 단조성 · ④ 밴드 간격 ──────────────────────────────────────────────
console.log('③ 사다리 단조성 · ④ 밴드 간격  (문항별 판정자 평균 → 밴드 평균)');
console.log('─'.repeat(72));
const itemMean = {};
for (const q of qids) {
  const vs = rows.filter((x) => x.item === q).map((x) => x.value);
  if (vs.length) itemMean[q] = vs.reduce((s, x) => s + x, 0) / vs.length;
}
const bandMean = {};
for (const b of BANDS) {
  const vs = qids.filter((q) => TRUTH[q] === b && itemMean[q] != null).map((q) => itemMean[q]);
  bandMean[b] = vs.length ? vs.reduce((s, x) => s + x, 0) / vs.length : null;
}
let prev = null, monoOk = true, gaps = [];
for (const b of BANDS) {
  const m = bandMean[b];
  let gapTxt = '';
  if (prev != null && m != null) {
    const g = m - prev;
    gaps.push(g);
    if (g <= 0) monoOk = false;
    gapTxt = `  간격 ${g >= 0 ? '+' : ''}${g.toFixed(2)}${g < PASS.gap ? '  🔴 붕괴' : ''}`;
  }
  console.log(`  ${b} ${LABEL[b].padEnd(12)} 평균 ${m == null ? ' —  ' : m.toFixed(2)}${gapTxt}`);
  if (m != null) prev = m;
}
const minGap = gaps.length ? Math.min(...gaps) : NaN;
console.log(`\n  단조성 ${monoOk ? '✅ 역전 0' : '❌ 역전 있음'} · 최소 간격 ${minGap.toFixed(2)}칸 ` +
  `${minGap >= PASS.gap ? '✅' : '❌'} (통과선 ${PASS.gap})\n`);

// ── 종합 ─────────────────────────────────────────────────────────────────
console.log('='.repeat(72));
const checks = [
  ['밴드 적중', raters.every((r) => hits[r] >= PASS.hit)],
  ['잡음비', nr.ratio <= PASS.noise],
  ['단조성', monoOk],
  ['밴드 간격', minGap >= PASS.gap],
];
for (const [n, ok] of checks) console.log(`  ${ok ? '✅' : '❌'} ${n}`);
const allOk = checks.every(([, ok]) => ok);
console.log(`\n  종합: ${allOk ? '✅ 통과' : '❌ 미달'}`);
if (!allOk) console.log('  🔴 1회 미달은 폐기가 아니다. 어느 밴드에서 어긋났는지 보고 원인을 규명한다.');
console.log();

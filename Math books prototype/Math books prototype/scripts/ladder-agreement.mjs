#!/usr/bin/env node
/**
 * ladder-agreement.mjs — 이산 일치율 (앵커 시스템 1차 지표)
 *
 * 단일 출처: bank/앵커시스템-SSOT-v1.md §2
 *
 * 왜 이산인가 — 판정자가 「A3~A4」 중점 표기를 쓰면 연속 척도가 **불일치를 반으로 접는다.**
 * 실제로 앵커 6문 실험과 40문 실험의 이산 불일치가 **둘 다 정확히 25%(5/20)** 였는데
 * 연속 잡음비만 0.039 → 0.034 로 좋아 보였다. 실무에서 문제가 되는 것은
 * 「이 문항이 ★ 4 인가 ★ 5 인가」이지 소수점이 아니다.
 *
 * 사용:
 *   node scripts/ladder-agreement.mjs <판정.csv> [--vs <이전판정.csv>] [--exclude-band A5]
 *
 * CSV: qid,rater,position,nearest
 */

import fs from 'node:fs';

const BANDS = ['A1', 'A2', 'A3', 'A4', 'A5'];
// 🔴 화면에는 코드명을 찍지 않는다 — 마스터가 알아보는 말로만 말한다 (feedback_korean_axis_names)
const LABEL = { A1: '★ 1~2', A2: '★ 3', A3: '★ 4', A4: '★ 5', A5: '★ 5 프리미엄' };
const 이름 = (b) => LABEL[b] || b || '—';

function load(file) {
  const lines = fs.readFileSync(file, 'utf8').trim().split(/\r?\n/)
    .filter((l) => l.trim() && !l.startsWith('#'));
  const head = lines[0].split(',').map((s) => s.trim());
  const col = (n) => head.indexOf(n);
  const byRater = {};
  const missing = [];
  for (const l of lines.slice(1)) {
    const c = l.split(',').map((s) => s.trim());
    const qid = c[col('qid')], rater = c[col('rater')];
    const raw = c[col('nearest')] || '';
    const band = (raw.match(/A[1-5]/) || [])[0] || null;
    if (!band) missing.push(`${qid}/${rater}: ${raw || '(빈칸)'}`);
    (byRater[rater] = byRater[rater] || {})[qid] = band;
  }
  return { byRater, missing };
}

/** 문항별 최빈 밴드. 동률이면 null (보수적으로 불일치 처리) */
function modeBand(vals) {
  const v = vals.filter(Boolean);
  if (!v.length) return null;
  const cnt = {};
  for (const x of v) cnt[x] = (cnt[x] || 0) + 1;
  const max = Math.max(...Object.values(cnt));
  const top = Object.keys(cnt).filter((k) => cnt[k] === max);
  return top.length === 1 ? top[0] : null;
}

/**
 * strict=false : 값이 없는 문항은 건너뛴다 (판정자 쌍 비교용)
 * strict=true  : 🔴 값이 없는(= 실행 안에서 동률인) 문항을 **불일치로 센다**
 *   사전 등록 `실험C-안정성-사전등록-v1.md` §2 「동률이면 불일치로 센다 — 보수적」.
 *   건너뛰면 두 실행 모두 내부 일치한 쉬운 문항만 남아 값이 부풀려진다.
 */
function agreement(a, b, qids, strict = false) {
  let hit = 0, n = 0, diffs = [];
  for (const q of qids) {
    if (!strict && (!a[q] || !b[q])) continue;
    n++;
    if (a[q] && b[q] && a[q] === b[q]) hit++;
    else diffs.push(`${q}:${a[q] || '동률'}→${b[q] || '동률'}`);
  }
  return { hit, n, rate: n ? hit / n : NaN, diffs };
}

const args = process.argv.slice(2);
const file = args[0];
if (!file) { console.error('사용: node scripts/ladder-agreement.mjs <판정.csv> [--vs <이전.csv>]'); process.exit(1); }
const vsIdx = args.indexOf('--vs');
const prevFile = vsIdx >= 0 ? args[vsIdx + 1] : null;
const exIdx = args.indexOf('--exclude-band');
const exclude = exIdx >= 0 ? args[exIdx + 1] : null;

const cur = load(file);
const raters = Object.keys(cur.byRater).sort();
const qids = [...new Set(Object.values(cur.byRater).flatMap((o) => Object.keys(o)))].sort();

console.log('\n이산 일치율 — 앵커 시스템 1차 지표');
console.log('='.repeat(74));
console.log(`판정 ${file}`);
console.log(`판정자 ${raters.join(' · ')} · 문항 ${qids.length}문\n`);

if (cur.missing.length) {
  console.log(`🔴 밴드 미기재 ${cur.missing.length}건 — ${cur.missing.slice(0, 5).join(' · ')}`);
  console.log('   (「견줄 상대가 없다」이면 SSOT §3-C ④ 통과선 위반이다)\n');
}

// ── 재현성 — 같은 실행 안 판정자 쌍 ──────────────────────────────────────
console.log('① 재현성 — 사람을 바꿔도 같은 칸인가');
console.log('-'.repeat(74));
let repRate = NaN;
for (let i = 0; i < raters.length; i++) {
  for (let j = i + 1; j < raters.length; j++) {
    const r = agreement(cur.byRater[raters[i]], cur.byRater[raters[j]], qids);
    repRate = r.rate;
    console.log(`  ${raters[i]} ↔ ${raters[j]}   ${r.hit}/${r.n} = ${(r.rate * 100).toFixed(1)}%`);
    if (r.diffs.length) console.log(`     갈린 문항: ${r.diffs.join(' · ')}`);
  }
}

// ── 안정성 — 이전 실행과 대조 ────────────────────────────────────────────
let stabRate = NaN, stabRateStable = NaN;
if (prevFile) {
  const prev = load(prevFile);
  const prevRaters = Object.keys(prev.byRater).sort();
  const curMode = {}, prevMode = {};
  for (const q of qids) {
    curMode[q] = modeBand(raters.map((r) => cur.byRater[r][q]));
    prevMode[q] = modeBand(prevRaters.map((r) => prev.byRater[r][q]));
  }
  console.log(`\n② 안정성 — 다시 재도 같은 칸인가  (대조 ${prevFile} · ${prevRaters.join('·')})`);
  console.log('-'.repeat(74));
  const all = agreement(prevMode, curMode, qids, true);
  stabRate = all.rate;
  console.log(`  전체        ${all.hit}/${all.n} = ${(all.rate * 100).toFixed(1)}%   (동률 = 불일치 · 사전 등록 §2)`);
  if (all.diffs.length) console.log(`     움직인 문항: ${all.diffs.join(' · ')}`);

  if (exclude) {
    // 자가 바뀐 밴드를 뺀 「불변 구간」만 — 순수 안정성
    // 🔴 이전 실행이 동률이라 밴드가 없는 문항도 남긴다(제외하면 어려운 문항만 빠진다)
    const keep = qids.filter((q) => prevMode[q] !== exclude);
    const s = agreement(prevMode, curMode, keep, true);
    stabRateStable = s.rate;
    console.log(`\n  🔴 자 불변 구간만 (이전 판정이 ${exclude} 인 문항 제외 · n=${s.n})`);
    console.log(`     ${s.hit}/${s.n} = ${(s.rate * 100).toFixed(1)}%   ← 순수 안정성 (판정 대상)`);
    if (s.diffs.length) console.log(`     움직인 문항: ${s.diffs.join(' · ')}`);
    const moved = qids.filter((q) => prevMode[q] === exclude);
    if (moved.length) {
      const m = agreement(prevMode, curMode, moved, true);
      console.log(`\n  (참고) 자가 바뀐 ${exclude} 구간 n=${m.n} — ${m.hit}/${m.n} = ${(m.rate * 100).toFixed(1)}%`);
      if (m.diffs.length) console.log(`     ${m.diffs.join(' · ')}`);
    }
  }

  // 🔴 참고 지표 (사후 · 판정에 쓰지 않는다) — 내부 동률에 좌우되지 않는 교차쌍 일치율
  const prevR = Object.keys(prev.byRater).sort();
  let cHit = 0, cN = 0;
  for (const q of qids) for (const a of prevR) for (const b of raters) {
    const x = prev.byRater[a][q], y = cur.byRater[b][q];
    if (!x || !y) continue;
    cN++; if (x === y) cHit++;
  }
  console.log(`\n  (참고 · 사후) 교차쌍 일치율 ${cHit}/${cN} = ${((cHit / cN) * 100).toFixed(1)}%`);
  console.log('     이전 x 이번 판정자 모든 짝. 내부 동률에 좌우되지 않는다.');
  console.log('     🔴 사전 등록 지표가 아니므로 판정에 쓰지 않는다 — 다음 실험의 지표 후보다.');
}

// ── 사전 등록 통과선 판정 (실험 C) ───────────────────────────────────────
if (prevFile) {
  console.log('\n' + '='.repeat(74));
  console.log('사전 등록 통과선 — bank/measurements/실험C-안정성-사전등록-v1.md §3');
  const use = Number.isFinite(stabRateStable) ? stabRateStable : stabRate;
  const t1 = use >= repRate - 0.10;
  const t2 = use >= 0.60;
  const t3 = cur.missing.length === 0;
  console.log(`  ${t1 ? '✅' : '❌'} T1 안정성 ≥ 재현성 − 10%p   (${(use * 100).toFixed(1)}% vs ${(repRate * 100 - 10).toFixed(1)}%)`);
  console.log(`  ${t2 ? '✅' : '❌'} T2 안정성 ≥ 60%              (${(use * 100).toFixed(1)}%)`);
  console.log(`  ${t3 ? '✅' : '❌'} T3 「견줄 상대가 없다」 0건    (${cur.missing.length}건)`);
  const pass = t1 && t2 && t3;
  console.log(`\n  종합: ${pass ? '✅ 통과' : '❌ 미달'}`);
  if (!pass) console.log('  🔴 미달은 폐기가 아니다. 어디서 어긋났는지 규명하고 고쳐서 다시 잰다.');
}
console.log();

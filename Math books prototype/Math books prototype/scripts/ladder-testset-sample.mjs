#!/usr/bin/env node
/**
 * ladder-testset-sample.mjs — 앵커 사다리 「본 검정」 표본 추출
 *
 * 학평 원장 26회차 780문에서 사다리 제작·검정에 이미 쓴 문항을 빼고,
 * 5밴드 균등으로 표본을 뽑는다. 시드 고정이라 몇 번 돌려도 같은 표본이 나온다.
 *
 * 명세: bank/앵커견주기-판정-명세-v1.md §5·§7
 *
 * 사용:
 *   node scripts/ladder-testset-sample.mjs                # 요약 + 표본
 *   node scripts/ladder-testset-sample.mjs --pool         # 밴드별 잔여 pool 만
 *   node scripts/ladder-testset-sample.mjs --seed 12345
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const LEDGERS = [
  'bank/measurements/학평-범위-조사.md',
  'bank/measurements/학평-범위-조사-2020-2024-고23월.md',
  'bank/measurements/학평-범위-조사-고1-2020-2021.md',
  'bank/measurements/학평-범위-조사-고1-2022-2023.md',
  'bank/measurements/학평-범위-조사-고1-2024.md',
];

// ── 참조 밴드 (5밴드) — 명세 §5. 문번에서 기계적으로 나온다 ──────────────
const BANDS = ['A1', 'A2', 'A3', 'A4', 'A5'];
const BAND_LABEL = { A1: '★ 1~2', A2: '★ 3', A3: '★ 4', A4: '★ 5', A5: '★ 5 프리미엄' };
function bandOf(no) {
  if ((no >= 1 && no <= 8) || no === 22 || no === 23) return 'A1';
  if ((no >= 9 && no <= 13) || no === 24 || no === 25) return 'A2';
  if ((no >= 14 && no <= 20) || (no >= 26 && no <= 28)) return 'A3';
  if (no === 21 || no === 29) return 'A4';
  if (no === 30) return 'A5';
  return null;
}

// ── 소진 목록 — 사다리 앵커 · v1/v2 표본 · 교차검정 · 견주기 대상 ────────
// 출처: 깊이-앵커-사다리-v1.md / -CM1-v1.md · 학평-층화표본-40문-v1/v2.md
//       사다리-교차검정-X1/X2.md · 앵커견주기-C1/C2.md · 채점-* · 경계규명-*
// 2026-08-01 갱신 — 채점에 다섯 번 쓴 20문(본검정 표본)과 새 앵커를 소진에 넣었다.
// 같은 문항을 또 쓰면 「높은 일치율」이 문항에 익숙해진 결과인지 자가 좋아진 결과인지 가릴 수 없다.
const USED = {
  '2020.3': [5, 21, 23, 27, 30],
  '2020.6': [10, 18, 29, 30],
  '2020.9': [13, 18, 27, 29, 30],
  '2020.11': [3, 14, 21, 29, 30],
  '2021.3': [30],
  '2021.6': [21, 30],
  '2021.9': [8],
  '2021.11': [22, 24],
  '2022.3': [19, 21, 24, 30],
  '2022.6': [16, 29],
  '2022.9': [9, 21, 30],
  '2022.11': [9, 13, 28, 30],
  '2023.3': [7, 13, 16, 29, 30],
  '2023.9': [1, 14, 30],
  '2023.11': [16, 20, 21, 25, 27, 29],
  '2024.3': [12, 14, 21, 30],
  '2024.6': [30],
  '2024.9': [30],
  '2024.10': [16, 17, 19, 21, 27, 29],
  '2025.3': [3, 4, 10, 12, 15, 20, 21, 22, 25, 26, 28, 29, 30],
  '2025.6': [1, 3, 11, 14, 16, 21, 30],
  '2025.9': [2, 4, 13, 22, 24, 26, 29],
  '2025.10': [1, 2, 5, 11, 14, 15, 20, 21, 25, 28],
  '2026.3': [2, 4, 8, 10, 11, 12, 17, 18, 19, 21, 23, 25, 26, 28, 29, 30],
  '2026.6': [3, 13, 14, 21, 23, 29, 30],
};

// ── 원장 파싱 ─────────────────────────────────────────────────────────────
const HEAD = /^##\s*(\d{4})년\s*(\d{1,2})월\s*(?:\(([^)]*)\))?/;
const ROW = /^\|\s*(\d{1,2})\s*\|(.+)\|\s*$/;

function parseLedger(rel) {
  const text = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const out = [];
  let round = null, grade = null;
  for (const line of text.split(/\r?\n/)) {
    const h = HEAD.exec(line);
    if (h) { round = `${h[1]}.${Number(h[2])}`; grade = h[3] || ''; continue; }
    if (!round) continue;
    const m = ROW.exec(line.trim());
    if (!m) continue;
    const no = Number(m[1]);
    if (!(no >= 1 && no <= 30)) continue;
    const cells = m[2].split('|').map((s) => s.trim());
    // 6회차본만 「학년」열이 있다 — 뒤에서 세어 4열(배점·유형·단원·소재)을 집는다
    const tail = cells.slice(-4);
    const [jum, type, unit, topic] = tail;
    if (!/^[234]$/.test(jum)) continue;
    out.push({ round, grade, no, jum: Number(jum), type, unit, topic, src: rel });
  }
  return out;
}

// 회차가 두 파일에 겹쳐 실린 것이 있다 (2024.3) — 먼저 만난 쪽을 남긴다
const seen = new Set();
const dupRounds = new Set();
const all = LEDGERS.flatMap(parseLedger).filter((r) => {
  const k = `${r.round}#${r.no}`;
  if (seen.has(k)) { dupRounds.add(r.round); return false; }
  seen.add(k);
  return true;
});

const isUsed = (r) => (USED[r.round] || []).includes(r.no);
// 🔴 원장의 단원 칸에는 「애매: CM2-GM/CM1-PL」 처럼 두 단원에 걸친 표기가 있다.
// 종전 판정은 이것을 통째로 떨어뜨려 3문이 영원히 안 뽑혔다 (앵커 후보로 실제 쓰인 문항 포함).
const isCM2 = (r) => r.unit.includes('CM2-');
const isCM1 = (r) => r.unit.includes('CM1-');

// ── 시드 고정 난수 (mulberry32) ──────────────────────────────────────────
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle(arr, rand) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── 집계 ──────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const seed = Number(argv[argv.indexOf('--seed') + 1]) || 20260801;
const PER_BAND = 4;

const SUBJ = argv.includes('--cm1') ? 'CM1' : argv.includes('--both') ? '양쪽' : 'CM2';
const inScope = SUBJ === 'CM1' ? isCM1 : SUBJ === 'CM2' ? isCM2 : (r) => isCM1(r) || isCM2(r);

console.log(`\n원장 파싱: ${all.length} 문항 (${LEDGERS.length}개 파일` +
  (dupRounds.size ? ` · 중복 회차 ${[...dupRounds].join(',')} 제거` : '') + ')');
console.log(`CM1 ${all.filter(isCM1).length} · CM2 ${all.filter(isCM2).length} · 소진 ${all.filter(isUsed).length} 문항`);
console.log(`대상: ${SUBJ}\n`);

const pool = {};
for (const b of BANDS) {
  pool[b] = all.filter((r) => inScope(r) && !isUsed(r) && bandOf(r.no) === b);
}

console.log('밴드별 미소진 pool  (CM1 / CM2 / 합계 — 괄호는 소진 전 전체)');
console.log('─'.repeat(62));
for (const b of BANDS) {
  const f = (pred) => all.filter((r) => pred(r) && !isUsed(r) && bandOf(r.no) === b).length;
  const t = (pred) => all.filter((r) => pred(r) && bandOf(r.no) === b).length;
  console.log(
    `  ${b} ${BAND_LABEL[b].padEnd(12)}` +
    `CM1 ${String(f(isCM1)).padStart(3)}(${String(t(isCM1)).padStart(3)})   ` +
    `CM2 ${String(f(isCM2)).padStart(3)}(${String(t(isCM2)).padStart(3)})   ` +
    `→ ${String(pool[b].length).padStart(3)} 문`
  );
}
console.log('─'.repeat(62));

if (argv.includes('--pool')) {
  for (const b of BANDS) {
    console.log(`\n[${b}] ${BAND_LABEL[b]}`);
    for (const r of pool[b]) console.log(`  ${r.round.padEnd(8)} #${String(r.no).padStart(2)} ${r.unit}  ${r.topic}`);
  }
  process.exit(0);
}

// 밴드마다 4문. 과목을 반씩 섞고(정점 밴드는 CM2 재고가 없어 되는 만큼),
// 같은 회차·같은 단원이 겹치지 않도록 훑는다.
const rand = rng(seed);
const picked = [];
for (const b of BANDS) {
  const take = [];
  const want = [isCM2, isCM1, isCM2, isCM1]; // 과목을 번갈아 요구한다
  for (const wantFn of want) {
    const usedRounds = new Set(take.map((r) => r.round));
    const usedUnits = new Set(take.map((r) => r.unit));
    const cand = shuffle(pool[b].filter((r) => !take.includes(r)), rand);
    const pick =
      cand.find((r) => wantFn(r) && !usedRounds.has(r.round) && !usedUnits.has(r.unit)) ||
      cand.find((r) => wantFn(r) && !usedRounds.has(r.round)) ||
      cand.find((r) => wantFn(r)) ||
      cand.find((r) => !usedRounds.has(r.round) && !usedUnits.has(r.unit)) ||
      cand.find((r) => !usedRounds.has(r.round)) ||
      cand[0];
    if (pick) take.push(pick);
  }
  if (take.length < PER_BAND) console.error(`⚠ ${b}: ${take.length}문밖에 못 뽑았다`);
  picked.push(...take.map((r) => ({ ...r, band: b })));
}

// 맹검 라벨 — 밴드 순서가 드러나지 않게 섞는다
const blind = shuffle(picked, rand).map((r, i) => ({ ...r, qid: `Q${String(i + 1).padStart(2, '0')}` }));

console.log(`\n본 검정 표본 — ${blind.length}문 (seed=${seed})\n`);
console.log('| Q | 회차 | 문번 | 배점 | 단원 | 참조밴드 | 소재 |');
console.log('|---|---|:-:|:-:|:-:|:-:|---|');
for (const r of [...blind].sort((a, b) => a.qid.localeCompare(b.qid))) {
  console.log(`| ${r.qid} | ${r.round} ${r.grade} | ${r.no} | ${r.jum} | ${r.unit} | ${r.band} | ${r.topic} |`);
}

console.log('\n표본 구성 점검');
for (const b of BANDS) {
  const n = blind.filter((r) => r.band === b).length;
  console.log(`  ${b} ${BAND_LABEL[b].padEnd(12)} ${n}문`);
}
const units = {};
for (const r of blind) units[r.unit] = (units[r.unit] || 0) + 1;
console.log('  단원:', Object.entries(units).map(([k, v]) => `${k} ${v}`).join(' · '));
const rounds = {};
for (const r of blind) rounds[r.round] = (rounds[r.round] || 0) + 1;
console.log('  회차:', Object.entries(rounds).sort().map(([k, v]) => `${k}(${v})`).join(' '));
console.log();

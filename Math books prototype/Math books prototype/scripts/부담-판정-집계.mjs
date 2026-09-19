#!/usr/bin/env node
/**
 * 부담-판정-집계.mjs — 시험 부담 본 검정 집계 (재는 것 셋)
 *
 * 단일 출처: bank/실행부담-축-정의-v1.md
 *
 * 왜 있는가 — 2026-08-02 마스터 확정으로 부담을 **연산 부담 · 해석·독해 부담 · 얽힘**
 * 셋으로 나누어 재게 됐다. 문항마다 세 값을 다 매기므로 집계도 요소별로 해야 한다.
 *
 * 🔴 등급은 연속분포다 (마스터 확정) — 눈금은 1.0~6.0 이고 한 칸 차이는 실패가 아니다.
 *    두 칸(2.0) 이상만 실패로 센다.
 *
 * 🔴 요소가 서로 **갈리는지**도 본다. 두 요소가 늘 나란히 움직이면
 *    그 둘은 같은 것을 두 번 재는 것이다 (축 정의 §6 「축은 재는 것이 아니라 가르는 것」).
 *
 * 사용: node scripts/부담-판정-집계.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const R = (p) => path.join(ROOT, p);
const read = (p) => { try { return fs.readFileSync(R(p), 'utf8'); } catch { return null; } };

const 판정자 = [
  { 이름: '판정자 하나', 파일: 'bank/measurements/부담-본검정-개수기준-판정-하나.md' },
  { 이름: '판정자 둘', 파일: 'bank/measurements/부담-본검정-개수기준-판정-둘.md' },
];
const 요소 = ['연산 부담', '해석·독해 부담', '얽힘'];
const 짧게 = { '연산 부담': '연산', '해석·독해 부담': '독해', '얽힘': '얽힘' };

function 읽기(text) {
  const out = {};
  let 문항 = null;
  for (const line of text.split(/\r?\n/)) {
    // 판정지의 문항 머리는 「## Q01」 이다 (### 이 아니다)
    const h = /^#{2,4}\s*(Q\d{2})/.exec(line.trim());
    if (h) { 문항 = h[1]; out[문항] = {}; continue; }
    if (!문항) continue;
    for (const e of 요소) {
      // 「- **연산 부담**: **4.6** — …」 — 값이 별표로 감싸여 올 수 있다
      const re = new RegExp(`^\\s*[-|]\\s*\\*\\*${e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*\\*\\s*:?\\s*\\*{0,2}([0-9]+(?:\\.[0-9]+)?)`);
      const m = re.exec(line);
      if (m) out[문항][e] = Number(m[1]);
    }
    // 표 형식도 받는다: | Q01 | 1.2 | 1.0 | 1.0 |
    const row = /^\|\s*(Q\d{2})\s*\|\s*\*{0,2}([0-9.]+)\*{0,2}\s*\|\s*\*{0,2}([0-9.]+)\*{0,2}\s*\|\s*\*{0,2}([0-9.]+)\*{0,2}\s*\|/.exec(line.trim());
    if (row) {
      out[row[1]] = out[row[1]] || {};
      요소.forEach((e, i) => { if (out[row[1]][e] == null) out[row[1]][e] = Number(row[i + 2]); });
    }
  }
  return out;
}

const 사람 = [];
for (const j of 판정자) {
  const t = read(j.파일);
  if (!t) { console.error(`🔴 판정 파일이 없다 — ${j.파일}`); process.exit(1); }
  사람.push({ ...j, 값: 읽기(t) });
}

// 🔴 Q13 은 앵커 그 자체다 (와부고 2022 1학기 기말 19번 = 연산 부담 앵커).
//    맹검지를 만든 뒤 보강으로 그 문항을 앵커에 올려 버렸다. 판정자 둘이 각각 신고했다.
//    시험지가 자기 자신을 재는 자리이므로 집계에서 뺀다 (축 정의 §4-①).
const 오염 = ['Q13'];
const 문항들 = [...new Set(사람.flatMap((p) => Object.keys(p.값)))].filter((q) => !오염.includes(q)).sort();
if (오염.length) console.log(`
🔴 오염으로 뺀 문항: ${오염.join(' ')} — 앵커와 같은 문항이다
`);
console.log('\n시험 부담 본 검정 — 집계 (재는 것 셋)');
console.log('='.repeat(76));
console.log(`판정자 ${사람.length}인 · 문항 ${문항들.length}문 · 눈금 1.0~6.0\n`);

const [A, B] = 사람;
const 퍼센트 = (n, d) => (d ? Math.round((n / d) * 1000) / 10 : 0);

// ── 요소별 판정자 사이 일치 ───────────────────────────────────────────────
console.log('판정자 사이 — 요소마다');
console.log('─'.repeat(76));
console.log('  재는 것            한 칸 이내      두 칸 이상      평균 차이');
for (const e of 요소) {
  let n = 0, within1 = 0, off2 = 0, sum = 0;
  for (const q of 문항들) {
    const a = A.값[q]?.[e], b = B.값[q]?.[e];
    if (typeof a !== 'number' || typeof b !== 'number') continue;
    const d = Math.abs(a - b); n++; sum += d;
    if (d <= 1) within1++;
    if (d >= 2) off2++;
  }
  const mark = off2 ? '🔴' : '  ';
  console.log(`  ${e.padEnd(16)} ${String(within1).padStart(2)}/${n} (${String(퍼센트(within1, n)).padStart(5)}%)   ${mark}${String(off2).padStart(2)}/${n}        ${(sum / (n || 1)).toFixed(2)}`);
}

// ── 🔴 요소가 서로 갈리는가 ───────────────────────────────────────────────
console.log('\n🔴 요소가 서로 갈리는가  — 늘 나란히 움직이면 같은 것을 두 번 재는 것이다');
console.log('─'.repeat(76));
for (let i = 0; i < 요소.length; i++) {
  for (let k = i + 1; k < 요소.length; k++) {
    const [x, y] = [요소[i], 요소[k]];
    let n = 0, 붙음 = 0, sum = 0;
    for (const p of 사람) {
      for (const q of 문항들) {
        const a = p.값[q]?.[x], b = p.값[q]?.[y];
        if (typeof a !== 'number' || typeof b !== 'number') continue;
        const d = Math.abs(a - b); n++; sum += d;
        if (d < 1) 붙음++;
      }
    }
    const 비율 = 퍼센트(붙음, n);
    const mark = n === 0 ? '⚪ 못 쟀다 (자료 0건)' : 비율 >= 80 ? '🔴 거의 안 갈린다' : 비율 >= 60 ? '🟠 덜 갈린다' : '✅ 갈린다';
    console.log(`  ${짧게[x]} ↔ ${짧게[y]}   차이 1.0 미만이 ${String(붙음).padStart(2)}/${n} (${String(비율).padStart(5)}%)  평균차 ${(sum / (n || 1)).toFixed(2)}  ${mark}`);
  }
}

// ── 문항별 ────────────────────────────────────────────────────────────────
console.log('\n문항별  (판정자 하나 / 판정자 둘)');
console.log('─'.repeat(76));
console.log('  문항    연산          독해          얽힘         두 칸 이상');
for (const q of 문항들) {
  const cell = (e) => {
    const a = A.값[q]?.[e], b = B.값[q]?.[e];
    const s = `${a?.toFixed(1) ?? '—'} / ${b?.toFixed(1) ?? '—'}`;
    return s.padEnd(12);
  };
  const big = 요소.filter((e) => {
    const a = A.값[q]?.[e], b = B.값[q]?.[e];
    return typeof a === 'number' && typeof b === 'number' && Math.abs(a - b) >= 2;
  });
  console.log(`  ${q}   ${cell(요소[0])}  ${cell(요소[1])}  ${cell(요소[2])}  ${big.length ? '🔴 ' + big.map((e) => 짧게[e]).join('·') : ''}`);
}

// ── 눈금 끝을 넘었는가 ────────────────────────────────────────────────────
const 넘음 = [];
for (const p of 사람) for (const q of 문항들) for (const e of 요소) {
  const v = p.값[q]?.[e];
  if (typeof v === 'number' && v > 6) 넘음.push(`${p.이름} ${q} ${짧게[e]} ${v}`);
}
if (넘음.length) {
  console.log('\n🔴 눈금 끝(6.0)을 넘은 판정');
  console.log('─'.repeat(76));
  for (const x of 넘음) console.log(`  ${x}`);
  console.log('  → 6.0 으로 깎지 마라. 눈금을 다시 볼 일이다 (축 정의 §3)');
}

console.log('\n' + '='.repeat(76));
let 총off2 = 0;
for (const e of 요소) for (const q of 문항들) {
  const a = A.값[q]?.[e], b = B.값[q]?.[e];
  if (typeof a === 'number' && typeof b === 'number' && Math.abs(a - b) >= 2) 총off2++;
}
if (총off2 === 0) console.log('  ✅ 두 칸 이상 어긋난 판정 없음.');
else console.log(`  🔴 두 칸 이상 ${총off2}건 — 그 문항의 발문과 견준 앵커를 다시 보라.`);
console.log();

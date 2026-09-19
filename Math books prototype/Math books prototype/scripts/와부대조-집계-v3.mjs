/**
 * 와부고 실기출 ↔ 우리 재현-1회 — 난이도 급 분포 대조
 * 맹검 판정 둘(P1·P2)을 봉인표로 풀어 두 회차의 분포를 나란히 놓는다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const 읽기 = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

function 판정읽기(파일) {
  const m = new Map();
  for (const L of 읽기(파일).split(/\r?\n/)) {
    const r = L.match(/^\|\s*(W\d\d)\s*\|\s*\*{0,2}([\d.]+)\*{0,2}\s*\|/);
    if (r) m.set(r[1], Number(r[2]));
  }
  return m;
}
const P1 = 판정읽기('bank/measurements/와부대조-판정-P3.md');
const P2 = 판정읽기('bank/measurements/와부대조-판정-P4.md');

const 갈래 = new Map(), 원번호 = new Map();
for (const L of 읽기('bank/measurements/와부대조-봉인표-34문-v3.md').split(/\r?\n/)) {
  const r = L.match(/^\|\s*(W\d\d)\s*\|\s*(실기출|우리)\s*\|\s*([RO]\d\d)\s*\|/);
  if (r) { 갈래.set(r[1], r[2]); 원번호.set(r[1], r[3]); }
}

const Ws = [...갈래.keys()].sort();
const 칸 = (v) => (v < 3.0 ? 'A1' : v < 4.0 ? 'A2' : v < 5.0 ? 'A3' : v <= 5.0 ? 'A4' : 'A5');
const 칸이름 = { A1: '★ 1~2', A2: '★ 3', A3: '★ 4', A4: '★ 5', A5: '★ 5 프리미엄' };

console.log(`\n실기출 ↔ 재현-1회 난이도 대조\n${'='.repeat(72)}\n`);

// ── 판정자끼리 얼마나 맞았나 ────────────────────────────────────────────
let 같은칸 = 0, 두칸 = 0;
for (const w of Ws) {
  const a = 칸(P1.get(w)), b = 칸(P2.get(w));
  const 차 = Math.abs(['A1', 'A2', 'A3', 'A4', 'A5'].indexOf(a) - ['A1', 'A2', 'A3', 'A4', 'A5'].indexOf(b));
  if (차 === 0) 같은칸++; if (차 >= 2) 두칸++;
}
console.log(`판정자 둘이 같은 칸 ${같은칸}/${Ws.length} (${(같은칸 / Ws.length * 100).toFixed(1)}%) · 두 칸 이상 차이 ${두칸}건\n`);

// ── 회차별 분포 ────────────────────────────────────────────────────────
const 분포 = {};
for (const g of ['실기출', '우리']) {
  분포[g] = { A1: 0, A2: 0, A3: 0, A4: 0, A5: 0, 값: [] };
  for (const w of Ws) {
    if (갈래.get(w) !== g) continue;
    const 평균 = (P1.get(w) + P2.get(w)) / 2;
    분포[g][칸(평균)]++;
    분포[g].값.push(평균);
  }
}
console.log('── 급 분포 (판정자 둘의 평균으로 칸을 정함) ────────────────────────────');
console.log('  칸                실기출   우리');
for (const k of ['A1', 'A2', 'A3', 'A4', 'A5']) {
  const a = 분포.실기출[k], b = 분포.우리[k];
  const 막대 = (n) => '■'.repeat(n).padEnd(8);
  console.log(`  ${칸이름[k].padEnd(12)}  ${막대(a)}${String(a).padStart(2)}   ${막대(b)}${String(b).padStart(2)}  ${a !== b ? `← ${b - a > 0 ? '+' : ''}${b - a}` : ''}`);
}
for (const g of ['실기출', '우리']) {
  const v = 분포[g].값;
  const 평균 = v.reduce((s, x) => s + x, 0) / v.length;
  const 최대 = Math.max(...v), 최소 = Math.min(...v);
  console.log(`\n  ${g}: 평균 ${평균.toFixed(2)} · 가장 낮은 값 ${최소.toFixed(1)} · 가장 높은 값 ${최대.toFixed(1)}`);
}

// ── 문항 하나하나 ──────────────────────────────────────────────────────
console.log(`\n── 문항별 (원 번호 순) ───────────────────────────────────────────────`);
for (const g of ['실기출', '우리']) {
  console.log(`\n  [${g}]`);
  const 줄 = Ws.filter((w) => 갈래.get(w) === g).sort((a, b) => 원번호.get(a).localeCompare(원번호.get(b)));
  for (const w of 줄) {
    const a = P1.get(w), b = P2.get(w), 평균 = (a + b) / 2;
    console.log(`    ${원번호.get(w)}  P1 ${a.toFixed(1)}  P2 ${b.toFixed(1)}  →  ${평균.toFixed(2)}  ${칸이름[칸(평균)]}`);
  }
}

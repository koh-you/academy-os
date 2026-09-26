/**
 * 실험 H — 짜임 집계
 * 사전 등록: bank/measurements/실험H-짜임-사전등록-v1.md §4 통과선 넷
 * 🔴 통과선은 관측 전에 고정됐다. 여기서 만들지 않는다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const R = (p) => path.join(ROOT, p);
const 읽기 = (p) => fs.readFileSync(R(p), 'utf8');

/** 판정 표에서 Q 번호와 칸을 뽑는다 */
function 판정읽기(파일) {
  const m = new Map();
  for (const L of 읽기(파일).split(/\r?\n/)) {
    const r = L.match(/^\|\s*(Q\d\d)\s*\|\s*\*{0,2}(\d|견줄 상대가 없다)\*{0,2}\s*\|/);
    if (r) m.set(r[1], r[2] === '견줄 상대가 없다' ? null : Number(r[2]));
  }
  return m;
}

const H1 = 판정읽기('bank/measurements/실험H-판정-H1.md');
const H2 = 판정읽기('bank/measurements/실험H-판정-H2.md');

/** 봉인표 — 옛 칸을 1~5 숫자로 바꾼다 */
const 옛칸숫자 = { '★ 1~2': 1, '★ 3': 2, '★ 4': 3, '★ 5': 4, '★ 5 프리미엄': 5 };
const 옛칸 = new Map(), 이름표 = new Map();
for (const L of 읽기('bank/measurements/실험H-봉인표-v1.md').split(/\r?\n/)) {
  const r = L.match(/^\|\s*(Q\d\d)\s*\|\s*(B[1-5][a-z])\s*\|\s*([^|]+?)\s*\|/);
  if (r) { 옛칸.set(r[1], 옛칸숫자[r[3].trim()]); 이름표.set(r[1], r[2]); }
}

const Qs = [...옛칸.keys()].sort();
console.log(`실험 H — 짜임 집계\n사전 등록: bank/measurements/실험H-짜임-사전등록-v1.md\n${'='.repeat(74)}\n`);
console.log(`문항 ${Qs.length} · H1 판정 ${H1.size} · H2 판정 ${H2.size} · 봉인표 ${옛칸.size}\n`);

// ── 확인 하나 · 판정자 둘이 맞는가 ───────────────────────────────────────────────────────────
let 같음 = 0, 한칸 = 0, 두칸 = 0, 못고름 = 0;
const 어긋난것 = [];
for (const q of Qs) {
  const a = H1.get(q), b = H2.get(q);
  if (a == null || b == null) { 못고름++; continue; }
  const d = Math.abs(a - b);
  if (d === 0) 같음++; else if (d === 1) { 한칸++; 어긋난것.push([q, a, b]); }
  else { 두칸++; 어긋난것.push([q, a, b]); }
}
const 재현성 = (같음 / Qs.length) * 100;
console.log(`── 확인 하나 · 판정자 둘이 맞는가 ────────────────────────────────────`);
console.log(`  같은 칸 ${같음} · 한 칸 차이 ${한칸} · 🔴 두 칸 이상 차이 ${두칸} · 못 고름 ${못고름}`);
console.log(`  재현성 ${재현성.toFixed(1)}%  (통과선 70% 이상 · 두 칸 차이 0건)`);
console.log(`  ${재현성 >= 70 && 두칸 === 0 ? '✅ 통과' : '❌ 미달'}\n`);

// ── 확인 셋 · 칸이 다 쓰이는가 ─────────────────────────────────────────────────────────────
console.log(`── 확인 셋 · 칸이 다 쓰이는가 (칸마다 3문 이상) ──────────────────────`);
const 분포 = (m) => [1, 2, 3, 4, 5].map((k) => [...m.values()].filter((v) => v === k).length);
const d1 = 분포(H1), d2 = 분포(H2);
console.log(`  칸        1   2   3   4   5`);
console.log(`  H1     ${d1.map((n) => String(n).padStart(3)).join(' ')}`);
console.log(`  H2     ${d2.map((n) => String(n).padStart(3)).join(' ')}`);
const 합의분포 = [1, 2, 3, 4, 5].map((k) => Qs.filter((q) => H1.get(q) === k && H2.get(q) === k).length);
console.log(`  둘 합의 ${합의분포.map((n) => String(n).padStart(3)).join(' ')}`);
const 칸다쓰임 = d1.every((n) => n >= 3) && d2.every((n) => n >= 3);
console.log(`  ${칸다쓰임 ? '✅ 통과' : '❌ 미달 — 3문 미만인 칸이 있다'}\n`);

// ── 확인 넷 · 앵커가 살아남는가 ──────────────────────────────────────────────────────
console.log(`── 확인 넷 · 앵커가 살아남는가 (새 칸이 옛 칸과 같거나 한 칸 차이) ──`);
for (const [이름, m] of [['H1', H1], ['H2', H2]]) {
  let 보존 = 0;
  for (const q of Qs) { const a = m.get(q), o = 옛칸.get(q); if (a != null && Math.abs(a - o) <= 1) 보존++; }
  const p = (보존 / Qs.length) * 100;
  console.log(`  ${이름}  ${보존}/${Qs.length} = ${p.toFixed(1)}%  ${p >= 60 ? '✅' : '❌'}`);
}
console.log(`  (통과선 60% 이상)\n`);

// ── 옛 칸과 얼마나 움직였나 ──────────────────────────────────────────────
console.log(`── 옛 칸(개수 세기) → 새 칸(짜임) 이동 ───────────────────────────────`);
console.log(`  Q    이름표  옛칸  H1  H2   이동`);
for (const q of Qs) {
  const o = 옛칸.get(q), a = H1.get(q), b = H2.get(q);
  const 평균 = (a + b) / 2;
  const 화살 = 평균 > o ? '↑' : 평균 < o ? '↓' : '=';
  console.log(`  ${q}  ${이름표.get(q).padEnd(5)}   ${o}    ${a}   ${b}    ${화살} ${(평균 - o).toFixed(1)}`);
}
console.log(`\n🔴 확인 둘(깊이와 갈리는가)은 이 스크립트가 못 잰다 — 이 36문의 깊이 판정이 따로 있어야 한다.`);

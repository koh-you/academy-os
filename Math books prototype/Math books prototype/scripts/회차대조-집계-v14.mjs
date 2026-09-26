/**
 * 재현-1회 ↔ 재현-2회 — 난이도 급 분포 맞대기 (v14)
 *
 * 🔴 왜 이렇게 재나 (2026-08-04 세션 115)
 *    v11(1회 vs 실기출)과 v12(2회 vs 실기출)는 판정자가 달랐다.
 *    같은 실기출 17문의 평균이 3.92 → 4.04 로 움직였으니 눈금 자체가 흔들린 것이다.
 *    두 판의 「우리」 값을 그냥 빼면 그 흔들림이 섞인다.
 *    🔴 두 회차를 한 맹검지에 넣고 같은 판정자에게 물으면 흔들림이 사라진다.
 *
 * 🔴 칸은 「견준 앵커」로 정한다. 값의 구간으로 칸을 정하지 않는다. 정본은 앵커다.
 *
 * 쓰는 법: node scripts/회차대조-집계-v13.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const 읽기 = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

const 밴드목록 = ['A1', 'A2', 'A3', 'A4', 'A5'];
const 칸이름 = { A1: '★ 1~2', A2: '★ 3', A3: '★ 4', A4: '★ 5', A5: '★ 5 프리미엄' };

function 판정읽기(파일) {
  const m = new Map();
  for (const L of 읽기(파일).split(/\r?\n/)) {
    const r = L.match(/^\|\s*(W\d\d)\s*\|\s*\*{0,2}([\d.]+)\*{0,2}\s*\|\s*\*{0,2}\s*(A[1-5])/);
    if (r) m.set(r[1], { 값: Number(r[2]), 밴드: r[3] });
  }
  return m;
}

const 판정자 = ['Z1', 'Z2', 'Z3']
  .map((n) => [n, `bank/measurements/회차대조-판정-${n}.md`])
  .filter(([, p]) => fs.existsSync(path.join(ROOT, p)))
  .map(([n, p]) => [n, 판정읽기(p)]);

if (판정자.length === 0) { console.error('🔴 판정 파일이 하나도 없다'); process.exit(1); }

const 갈래 = new Map(), 원번호 = new Map();
for (const L of 읽기('bank/measurements/회차대조-봉인표-34문-v14.md').split(/\r?\n/)) {
  const r = L.match(/^\|\s*(W\d\d)\s*\|\s*(1회|2회)\s*\|\s*([AB]\d\d)\s*\|/);
  if (r) { 갈래.set(r[1], r[2]); 원번호.set(r[1], r[3]); }
}
const Ws = [...갈래.keys()].sort();

// 🔴 빠진 줄이 있으면 먼저 알린다 — 조용히 빼고 평균을 내면 값이 어긋난다
for (const [n, m] of 판정자) {
  const 빠진 = Ws.filter((w) => !m.has(w));
  if (빠진.length) console.log(`🔴 ${n} 판정표에 빠진 줄 ${빠진.length}개 — ${빠진.join(' ')}`);
}

function 모은밴드(밴드들) {
  const 표 = {};
  for (const b of 밴드들) 표[b] = (표[b] || 0) + 1;
  const 최다 = Math.max(...Object.values(표));
  const 후보 = Object.keys(표).filter((b) => 표[b] === 최다);
  if (후보.length === 1) return { 밴드: 후보[0], 갈림: 최다 < 밴드들.length };
  const 순 = 후보.map((b) => 밴드목록.indexOf(b)).sort((a, b) => a - b);
  return { 밴드: 밴드목록[순[Math.floor(순.length / 2)]], 갈림: true };
}

console.log(`\n재현-1회 ↔ 재현-2회 난이도 맞대기 (맹검지 v14 · 판정자 ${판정자.length})`);
console.log(`같은 판정자가 두 회차를 한꺼번에 봤다. 판정자 눈금 차이가 없다.\n${'='.repeat(74)}\n`);

console.log('── 판정자끼리 얼마나 맞았나 ────────────────────────────────────────────');
for (let i = 0; i < 판정자.length; i++) {
  for (let j = i + 1; j < 판정자.length; j++) {
    const [ni, mi] = 판정자[i], [nj, mj] = 판정자[j];
    let 같음 = 0, 두칸 = 0, 잰것 = 0;
    for (const w of Ws) {
      const a = mi.get(w), b = mj.get(w);
      if (!a || !b) continue;
      잰것++;
      const 차 = Math.abs(밴드목록.indexOf(a.밴드) - 밴드목록.indexOf(b.밴드));
      if (차 === 0) 같음++;
      if (차 >= 2) 두칸++;
    }
    console.log(`  ${ni} ↔ ${nj}: 같은 칸 ${같음}/${잰것} (${(같음 / 잰것 * 100).toFixed(0)}%) · 두 칸 이상 벌어진 곳 ${두칸}`);
  }
}
let 셋다같음 = 0;
for (const w of Ws) {
  const bs = 판정자.map(([, m]) => m.get(w)?.밴드).filter(Boolean);
  if (bs.length === 판정자.length && new Set(bs).size === 1) 셋다같음++;
}
console.log(`  판정자 ${판정자.length} 이 모두 같은 칸: ${셋다같음}/${Ws.length} (${(셋다같음 / Ws.length * 100).toFixed(0)}%)\n`);

const 모음 = new Map();
for (const w of Ws) {
  const 것들 = 판정자.map(([, m]) => m.get(w)).filter(Boolean);
  const { 밴드, 갈림 } = 모은밴드(것들.map((x) => x.밴드));
  const 값평균 = 것들.reduce((s, x) => s + x.값, 0) / 것들.length;
  모음.set(w, { 밴드, 갈림, 값평균 });
}

const 분포 = {};
for (const g of ['1회', '2회']) {
  분포[g] = { A1: 0, A2: 0, A3: 0, A4: 0, A5: 0, 값: [] };
  for (const w of Ws) {
    if (갈래.get(w) !== g) continue;
    분포[g][모음.get(w).밴드]++;
    분포[g].값.push(모음.get(w).값평균);
  }
}

console.log('── 급 분포 ─────────────────────────────────────────────────────────────');
console.log('  칸                1회           2회         2회 − 1회');
for (const k of 밴드목록) {
  const a = 분포['1회'][k], b = 분포['2회'][k];
  const 막대 = (n) => '■'.repeat(n).padEnd(9);
  const d = b - a;
  console.log(`  ${칸이름[k].padEnd(13)} ${막대(a)}${String(a).padStart(2)}  ${막대(b)}${String(b).padStart(2)}   ${d === 0 ? '' : (d > 0 ? '+' : '') + d}`);
}
console.log();
const 평균 = {};
for (const g of ['1회', '2회']) {
  const v = 분포[g].값;
  평균[g] = v.reduce((s, x) => s + x, 0) / v.length;
  console.log(`  ${g}: 값 평균 ${평균[g].toFixed(2)} · 가장 낮은 값 ${Math.min(...v).toFixed(1)} · 가장 높은 값 ${Math.max(...v).toFixed(1)}`);
}
const 차 = 평균['2회'] - 평균['1회'];
console.log(`\n  🔴 2회 − 1회 = ${차 >= 0 ? '+' : ''}${차.toFixed(2)}  ${차 < -0.10 ? '← 2회가 낮다' : (차 > 0.10 ? '← 2회가 높다' : '← 사실상 같다')}\n`);

// 🔴 위쪽 절반끼리도 견준다 — 시험지는 평균보다 천장이 중요하다
for (const g of ['1회', '2회']) {
  const v = [...분포[g].값].sort((a, b) => b - a);
  const 위다섯 = v.slice(0, 5);
  console.log(`  ${g} 위 다섯: ${위다섯.map((x) => x.toFixed(2)).join(' · ')} → 평균 ${(위다섯.reduce((s, x) => s + x, 0) / 5).toFixed(2)}`);
}
console.log();

console.log('── 문항별 (원 번호 순) ─────────────────────────────────────────────────');
const 이름칸 = 판정자.map(([n]) => n.padStart(11)).join('');
for (const g of ['1회', '2회']) {
  console.log(`\n  [${g}]`);
  console.log(`    번호 ${이름칸}     값평균  칸`);
  const 줄 = Ws.filter((w) => 갈래.get(w) === g).sort((a, b) => 원번호.get(a).localeCompare(원번호.get(b)));
  for (const w of 줄) {
    const x = 모음.get(w);
    const 각각 = 판정자.map(([, m]) => {
      const v = m.get(w);
      return v ? `${v.값.toFixed(1)} ${v.밴드}`.padStart(11) : '     ―     ';
    }).join('');
    console.log(`    ${원번호.get(w)} ${각각}     ${x.값평균.toFixed(2)}  ${칸이름[x.밴드]}${x.갈림 ? '  🔴 갈림' : ''}`);
  }
}

// ── 자리끼리 맞대기 — 1회 N번 ↔ 2회 N번 ────────────────────────────────
console.log('\n── 같은 자리끼리 (1회 N번 ↔ 2회 N번) ───────────────────────────────────');
console.log('    번호     1회     2회     2회 − 1회');
const 찾기 = (머리, n) => {
  const w = Ws.find((x) => 원번호.get(x) === `${머리}${String(n).padStart(2, '0')}`);
  return w ? 모음.get(w).값평균 : null;
};
for (let n = 1; n <= 17; n++) {
  const a = 찾기('A', n), b = 찾기('B', n);
  if (a == null || b == null) continue;
  const d = b - a;
  const 표시 = d <= -0.5 ? ' 🔴 크게 낮다' : (d <= -0.25 ? ' 🟠 낮다' : (d >= 0.5 ? ' 🟢 크게 높다' : ''));
  console.log(`    ${String(n).padStart(2)}번   ${a.toFixed(2)}   ${b.toFixed(2)}    ${d >= 0 ? '+' : ''}${d.toFixed(2)}${표시}`);
}
console.log();

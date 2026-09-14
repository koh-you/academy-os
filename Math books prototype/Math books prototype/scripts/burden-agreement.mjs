#!/usr/bin/env node
/**
 * burden-agreement.mjs — 실행 부담 본 검정 집계
 *
 * 단일 출처: bank/실행부담-축-정의-v1.md · bank/anchors/실행부담-사다리-v1.md
 *
 * 왜 있는가 — 부담 사다리(34문)가 섰지만 **한 번도 실제 판정에 써 본 적이 없다.**
 * 깊이 축은 「모르는 문항을 얹어 보는」 본 검정으로 판정 누수·경계 결함을 잡아냈다.
 * 이 도구는 그 검정의 집계를 맡는다.
 *
 * 🔴 이산 일치가 1차 지표다. 판정자가 「★ 3.5」 같은 중점 표기를 쓰면
 *    연속 척도가 **불일치를 반으로 접는다** (깊이 축에서 실제로 겪었다).
 *
 * 🔴 등급은 연속분포다 (마스터 확정) — **한 칸 차이는 실패가 아니다.**
 *    두 칸 이상만 실패로 센다.
 *
 * 사용: node scripts/burden-agreement.mjs [--with-key]
 *   --with-key : 봉인표와도 대조한다 (검정이 끝난 뒤에만 쓴다)
 */

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const R = (p) => path.join(ROOT, p);
const read = (p) => { try { return fs.readFileSync(R(p), 'utf8'); } catch { return null; } };

const JUDGES = [
  { name: '판정자 하나', file: 'bank/measurements/부담-본검정-판정-V1.md' },
  { name: '판정자 둘', file: 'bank/measurements/부담-본검정-판정-V2.md' },
];
const KEY = 'bank/measurements/부담-본검정-봉인표-20문-v1.md';
const 갈래목록 = ['읽을 양', '손 가는 양', '답의 지저분함', '얽힘'];

/** 칸 표기 → 눈금 번호. ★ 1~2=1 · ★ 3=2 · ★ 4=3 · ★ 5=4 · ★ 5 프리미엄=5 */
function bandNum(s) {
  if (!s) return null;
  if (/깊이\s*문항/.test(s)) return 'DEPTH';
  if (/프리미엄/.test(s)) return 5;
  if (/1\s*~\s*2/.test(s)) return 1;
  const m = /★\s*(\d+(?:\.\d+)?)/.exec(s);
  if (!m) return null;
  const n = Number(m[1]);
  // 🔴 ★ 2.7 처럼 ★ 1~2 와 ★ 3 사이를 가리키는 값이 실제로 온다.
  //    종전에는 3 미만을 전부 ★ 1~2 로 뭉개서 **어긋남을 숨겼다** (2026-08-02 실측).
  return n >= 2 ? n - 1 : 1;      // ★ 2.7 → 1.7 · ★ 3 → 2 · ★ 3.5 → 2.5 · ★ 4 → 3
}
const bandLabel = (v) =>
  v === 'DEPTH' ? '깊이 문항'
    : v == null ? '—'
      : v === 1 ? '★ 1~2' : v === 5 ? '★ 5 프리미엄' : `★ ${v + 1}`;

function parseJudge(text) {
  const out = {};
  let cur = null;
  for (const line of text.split(/\r?\n/)) {
    const h = /^###\s*(Q\d{2})/.exec(line.trim());
    if (h) { cur = h[1]; out[cur] = {}; continue; }
    if (!cur) continue;
    const band = /^\s*-\s*\*\*칸\*\*\s*:\s*(.+)$/.exec(line);
    if (band) { out[cur].bandRaw = band[1].trim(); out[cur].band = bandNum(band[1]); continue; }
    const g = /^\s*-\s*\*\*(?:주된\s*)?갈래\*\*\s*:\s*(.+)$/.exec(line);
    if (g) {
      const raw = g[1].trim();
      out[cur].갈래Raw = raw;
      out[cur].갈래 = /안\s*맞음/.test(raw) ? '안 맞음'
        : 갈래목록.find((x) => raw.includes(x)) || null;
    }
  }
  return out;
}

// ── 읽기 ──────────────────────────────────────────────────────────────────
const judges = [];
for (const j of JUDGES) {
  const t = read(j.file);
  if (!t) { console.error(`🔴 판정 파일이 없다 — ${j.file}`); process.exit(1); }
  judges.push({ ...j, data: parseJudge(t) });
}

const qids = [...new Set(judges.flatMap((j) => Object.keys(j.data)))].sort();
console.log('\n실행 부담 본 검정 — 집계');
console.log('='.repeat(74));
console.log(`판정자 ${judges.length}인 · 문항 ${qids.length}문\n`);

// 빠진 판정
for (const j of judges) {
  const miss = qids.filter((q) => !j.data[q] || j.data[q].band == null);
  if (miss.length) console.log(`🔴 ${j.name} 미판정/파싱 실패: ${miss.join(' ')}`);
}

// ── 판정자 간 일치 ────────────────────────────────────────────────────────
const [A, B] = judges;
let same = 0, within1 = 0, off2 = 0, cmp = 0;
let 갈래same = 0, 갈래cmp = 0;
const rows = [];
for (const q of qids) {
  const a = A.data[q] || {}, b = B.data[q] || {};
  const both = typeof a.band === 'number' && typeof b.band === 'number';
  let d = null;
  // 🔴 둘 다 「깊이 문항」이면 그것도 **일치**다. 종전에는 「?」로 빠져 분모에서 사라졌다.
  if (a.band === 'DEPTH' && b.band === 'DEPTH') { d = 0; cmp++; same++; within1++; }
  else if (both) {
    d = Math.abs(a.band - b.band); cmp++;
    // 🔴 한 칸 「이내」다 — 0.5 칸 차이도 여기 든다. 두 칸 이상만 실패로 센다
    if (d < 0.5) same++;
    if (d <= 1) within1++;
    if (d >= 2) off2++;
  }
  if (a.갈래 && b.갈래) { 갈래cmp++; if (a.갈래 === b.갈래) 갈래same++; }
  rows.push({ q, a, b, d, both });
}

const pct = (n, d) => (d ? Math.round((n / d) * 1000) / 10 : 0);
console.log('판정자 사이');
console.log('─'.repeat(74));
console.log(`  딱 같음        ${same}/${cmp}  (${pct(same, cmp)}%)`);
console.log(`  한 칸 이내     ${within1}/${cmp}  (${pct(within1, cmp)}%)   ← 등급은 연속분포다. 여기까지는 성공`);
console.log(`  🔴 두 칸 이상  ${off2}/${cmp}  (${pct(off2, cmp)}%)   ← 실패로 세는 것은 이것뿐`);
console.log(`  갈래 일치      ${갈래same}/${갈래cmp}  (${pct(갈래same, 갈래cmp)}%)`);

// ── 특수 판정 ─────────────────────────────────────────────────────────────
const special = (key, label) => {
  for (const j of judges) {
    const hit = qids.filter((q) => (j.data[q] || {})[key === 'DEPTH' ? 'band' : '갈래'] === (key === 'DEPTH' ? 'DEPTH' : '안 맞음'));
    console.log(`  ${j.name}: ${hit.length ? hit.join(' ') : '없음'}`);
  }
};
console.log('\n「깊이 문항」으로 뺀 것');
console.log('─'.repeat(74));
special('DEPTH');
console.log('\n「갈래 안 맞음」으로 뺀 것  ← 다섯째 갈래 후보다');
console.log('─'.repeat(74));
special('MISMATCH');

// ── 문항별 ────────────────────────────────────────────────────────────────
console.log('\n문항별');
console.log('─'.repeat(74));
console.log('  문항   판정자 하나            판정자 둘             차이');
for (const r of rows) {
  const f = (x) => `${bandLabel(x.band)}/${x.갈래 || '—'}`.padEnd(20);
  const mark = r.d == null ? '  ?' : r.d >= 2 ? ' 🔴 두 칸+' : r.d === 1 ? '  한 칸' : '  같음';
  console.log(`  ${r.q}  ${f(r.a)}  ${f(r.b)}  ${mark}`);
}

// ── 봉인표 대조 (선택) ────────────────────────────────────────────────────
if (process.argv.includes('--with-key')) {
  const kt = read(KEY);
  if (!kt) console.log('\n🔴 봉인표를 못 읽었다');
  else {
    console.log('\n봉인표 대조  🔴 봉인표의 예상 칸은 제작자 한 사람의 값이다 — 정답이 아니라 셋째 의견이다');
    console.log('─'.repeat(74));
    const key = {};
    for (const m of kt.matchAll(/\|\s*(Q\d{2})\s*\|([^|]*)\|([^|]*)\|([^|]*)\|/g)) {
      key[m[1]] = { raw: m.slice(2).join(' ') };
    }
    let n = 0, agree = 0;
    for (const r of rows) {
      const k = key[r.q]; if (!k) continue;
      const kb = bandNum(k.raw); if (typeof kb !== 'number') continue;
      n++;
      const ds = [r.a.band, r.b.band].filter((x) => typeof x === 'number').map((x) => Math.abs(x - kb));
      if (ds.length && Math.max(...ds) <= 1) agree++;
    }
    console.log(`  제작자 예상과 두 판정자가 모두 한 칸 이내 — ${agree}/${n} (${pct(agree, n)}%)`);
  }
}

console.log('\n' + '='.repeat(74));
if (off2 === 0) console.log('  ✅ 두 칸 이상 어긋난 문항 없음.');
else console.log(`  🔴 두 칸 이상 ${off2}건 — 그 문항의 발문과 견준 앵커를 다시 보라. 자의 결함이다.`);
console.log();

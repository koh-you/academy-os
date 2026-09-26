/**
 * 와부대조 맹검지 v6 — 우리 회차를 .tex 에서 바로 뽑는다
 *
 * 🔴 v1~v4 는 발문을 손으로 옮겨 적었다. 문항이 일곱 개나 바뀌는 판에서
 *    옮겨 적기는 곧 사고다. 판정한 것과 나가는 것이 어긋난다.
 *    v5 부터는 `맹검지-tex에서-뽑기.mjs` 로 파일에서 그대로 가져온다.
 *
 * 실기출 17문은 PDF 에서 옮긴 것이라 그대로 둔다 (v4 스크립트에 있다).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const R = (p) => path.join(ROOT, p);

// ── 1. 실기출 17문 — v4 스크립트에서 배열만 읽어 온다 ──────────────────
const v4 = fs.readFileSync(R('scripts/와부대조-맹검지-만들기-v4.mjs'), 'utf8');
const 실기출덩어리 = v4.match(/const 실기출 = \[([\s\S]*?)\n\];/);
if (!실기출덩어리) { console.error('🔴 실기출 배열을 못 찾았다'); process.exit(1); }
const 실기출 = eval(`[${실기출덩어리[1]}]`);

// ── 2. 우리 17문 — tex 에서 바로 뽑는다 ────────────────────────────────
const TEX = 'output/공통수학2/2026-2학기-와부고-재현-중간-1회/재현-1회-문제.tex';
const 뽑은것 = JSON.parse(execSync(`node "${R('scripts/맹검지-tex에서-뽑기.mjs')}" "${R(TEX)}" --json`, { encoding: 'utf8' }));

/** tex 에서 뽑을 때 따라오는 조판 찌꺼기를 마저 턴다 */
const 찌꺼기 = (t) => t
  .replace(/^\s*\}\{%\s*$/gm, '')
  .replace(/^\s*\}\s*$/gm, '')
  .replace(/^\s*\{%\s*$/gm, '')
  .replace(/\\probpair\w*\{%?/g, '')
  .replace(/\\begin\{pagepair\}|\\end\{pagepair\}|\\clearpage/g, '')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

const 우리 = 뽑은것.map(([id, 글]) => [id, 찌꺼기(글)]);

// ── 3. 섞기 — 되돌려도 같은 순서 ───────────────────────────────────────
const 해시 = (s) => [...s].reduce((h, c) => (h * 43 + c.charCodeAt(0)) % 99991, 17);
const 모음 = [...실기출.map(([id, t]) => ({ id, t, 갈래: '실기출' })),
              ...우리.map(([id, t]) => ({ id, t, 갈래: '우리' }))]
  .sort((a, b) => 해시(a.id + 'V6-20260803') - 해시(b.id + 'V5'));

let 맹검 = `---
name: 대조-맹검지-34문-v6
description: 학교 기출 두 회차 34문의 발문 전문. 배점·문항 번호·출처를 지웠다
version: v6 (2026-08-03 · 세션 110 재판정)
status: 🔴 판정자용 · 봉인표를 먼저 보지 마라
---

# 대조 맹검지 — 34문

🔴 **판정자는 이 파일과 난이도 앵커 사다리만 본다.** 봉인표를 열지 마라.
🔴 **문항 순서에 뜻이 없다.** 두 회차가 섞여 있다.

`;
let 봉인 = `---
name: 대조-봉인표-34문-v6
description: 맹검지 v6 의 W번호 ↔ 원래 회차·문항 번호. 🔴 판정 전에 열지 마라
version: v6 (2026-08-03 · 세션 110 재판정)
---

# 대조 봉인표 v6

| W | 갈래 | 원래 번호 |
|:-:|:-:|:-:|
`;

모음.forEach((x, i) => {
  const W = `W${String(i + 1).padStart(2, '0')}`;
  맹검 += `## ${W}\n\n${x.t}\n\n---\n\n`;
  봉인 += `| ${W} | ${x.갈래} | ${x.id} |\n`;
});

fs.writeFileSync(R('bank/measurements/와부대조-맹검지-34문-v6.md'), 맹검, 'utf8');
fs.writeFileSync(R('bank/measurements/와부대조-봉인표-34문-v6.md'), 봉인, 'utf8');
console.log(`맹검지 v6 — ${모음.length}문 (실기출 ${실기출.length} + 우리 ${우리.length})`);

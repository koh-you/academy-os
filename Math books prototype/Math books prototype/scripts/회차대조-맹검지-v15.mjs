/**
 * 회차대조 맹검지 v15 — 재현-1회 ↔ 재현-2회를 맞대어 잰다
 *
 * 🔴 왜 만드나 (2026-08-04 세션 115 · 마스터 「전체적인 난이도가 1회차에 비해 많이 떨어져」)
 *    v11(1회 vs 실기출)과 v12(2회 vs 실기출)는 **판정자가 다르다.**
 *    같은 실기출 17문의 평균이 3.92 → 4.04 로 움직였다. 눈금이 흔들린 것이다.
 *    두 판의 「우리」 값을 그냥 빼면 그 흔들림이 그대로 섞인다.
 *    🔴 두 회차를 **한 맹검지에 넣어 같은 판정자에게** 물으면 그 흔들림이 사라진다.
 *
 * v12 와 다른 것 — 상대가 실기출이 아니라 **재현-1회**다. 둘 다 tex 에서 뽑는다.
 *
 * 쓰는 법: node scripts/회차대조-맹검지-v13.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const R = (p) => path.join(ROOT, p);

/** tex 에서 뽑을 때 따라오는 조판 찌꺼기를 마저 턴다 */
const 찌꺼기 = (t) => t
  .replace(/^\s*\}\{%\s*$/gm, '')
  .replace(/^\s*\}\s*$/gm, '')
  .replace(/^\s*\{%\s*$/gm, '')
  .replace(/^\s*\{\s*$/gm, '')
  .replace(/\\probpair\w*\{%?/g, '')
  // 🔴 1회 4쪽은 probpair 가 아니라 맨 minipage 를 쓴다. 그 짝이 남는다
  .replace(/\\begin\{minipage\}(\[[^\]]*\])*\{[^}]*\}|\\end\{minipage\}%?/g, '')
  .replace(/\\begin\{pagepair\}|\\end\{pagepair\}|\\clearpage/g, '')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

/** 시험지 하나에서 17문을 뽑아 [머리글자+번호, 글] 로 만든다 */
function 뽑기(tex, 머리) {
  const 것들 = JSON.parse(execSync(
    `node "${R('scripts/맹검지-tex에서-뽑기.mjs')}" "${R(tex)}" --json`, { encoding: 'utf8' }));
  return 것들.map(([id, 글]) => [머리 + id.slice(1), 찌꺼기(글)]);
}

const 일회 = 뽑기('output/공통수학2/2026-2학기-와부고-재현-중간-1회/재현-1회-문제.tex', 'A');
const 이회 = 뽑기('output/공통수학2/2026-2학기-와부고-재현-중간-2회/재현-2회-문제.tex', 'B');

// ── 섞기 — 되돌려도 같은 순서 ───────────────────────────────────────────
const 해시 = (s) => [...s].reduce((h, c) => (h * 43 + c.charCodeAt(0)) % 99991, 17);
const 모음 = [...일회.map(([id, t]) => ({ id, t, 갈래: '1회' })),
              ...이회.map(([id, t]) => ({ id, t, 갈래: '2회' }))]
  .sort((a, b) => 해시(a.id + 'v15-20260805-second-redesign') - 해시(b.id + 'V15'));

let 맹검 = `---
name: 회차대조-맹검지-34문-v15
description: 우리가 만든 두 회차 34문의 발문 전문. 배점·문항 번호·출처를 지웠다
version: v15 (2026-08-05 세션 115 · 하단 다섯 자리까지 고친 뒤 세 번째 판정)
status: 🔴 판정자용 · 봉인표를 먼저 보지 마라
---

# 회차 대조 맹검지 — 34문

🔴 **판정자는 이 파일과 난이도 앵커 사다리만 본다.** 봉인표를 열지 마라.
🔴 **문항 순서에 뜻이 없다.** 두 회차가 섞여 있다.

`;
let 봉인 = `---
name: 회차대조-봉인표-34문-v15
description: 맹검지 v15 의 W번호 ↔ 원래 회차·문항 번호. 🔴 판정 전에 열지 마라
version: v15 (2026-08-05 세션 115)
---

# 회차 대조 봉인표 v15

A## = 재현-1회 · B## = 재현-2회

| W | 갈래 | 원래 번호 |
|:-:|:-:|:-:|
`;

모음.forEach((x, i) => {
  const W = `W${String(i + 1).padStart(2, '0')}`;
  맹검 += `## ${W}\n\n${x.t}\n\n---\n\n`;
  봉인 += `| ${W} | ${x.갈래} | ${x.id} |\n`;
});

fs.writeFileSync(R('bank/measurements/회차대조-맹검지-34문-v15.md'), 맹검, 'utf8');
fs.writeFileSync(R('bank/measurements/회차대조-봉인표-34문-v15.md'), 봉인, 'utf8');
console.log(`맹검지 v15 — ${모음.length}문 (1회 ${일회.length} + 2회 ${이회.length})`);

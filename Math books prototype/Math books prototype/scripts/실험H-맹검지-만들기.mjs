/**
 * 실험 H — 짜임 맹검지 만들기
 *
 * 얽힘 앵커 36문의 발문 전문을 발췌본에서 뽑아 **칸·학교·회차·문번을 지운** 맹검지를 만든다.
 * 판정자가 지금 앉아 있는 칸을 보면 그대로 옮겨 적는다 — 그러면 「살아남았다」가 아니라 「베꼈다」다.
 *
 * 섞는 순서는 이름표를 해시한 값으로 정한다 — 다시 돌려도 같은 순서가 나온다.
 *
 * 사전 등록: bank/measurements/실험H-짜임-사전등록-v1.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const R = (p) => path.join(ROOT, p);

const 사다리 = fs.readFileSync(R('bank/anchors/얽힘-사다리-v1.md'), 'utf8');
const 발췌본 = fs.readFileSync(R('bank/anchors/실행부담-발췌본-v1.md'), 'utf8');

// ── 1. 사다리에서 앵커 이름표와 현재 칸을 뽑는다 ──────────────────────────
const 칸이름 = { B1: '★ 1~2', B2: '★ 3', B3: '★ 4', B4: '★ 5', B5: '★ 5 프리미엄' };
const 앵커 = [];
for (const line of 사다리.split(/\r?\n/)) {
  const m = line.match(/^\|\s*\*\*(B[1-5][a-z])\*\*\s*\|\s*([^|]+?)\s*\|/);
  if (!m) continue;
  const [, 이름표, 출처] = m;
  if (앵커.some((a) => a.이름표 === 이름표)) continue;   // 옮긴 표에 다시 나오는 것 제외
  앵커.push({ 이름표, 출처, 옛칸: 칸이름[이름표.slice(0, 2)] });
}

// ── 2. 발췌본에서 발문 전문을 뽑는다 ──────────────────────────────────────
const 절 = 발췌본.split(/^## (?=B[1-5][a-z] —)/m).slice(1);
const 본문 = new Map();
for (const s of 절) {
  const 이름표 = s.slice(0, 4).trim();
  const 몸 = s.split(/\r?\n/).slice(1).join('\n').trim();
  본문.set(이름표, 몸);
}

// ── 3. 맹검 처리 — 발문 전문만 남긴다 ────────────────────────────────────
// 🔴 발췌본의 각 항목에는 발문 말고도 옛 판정(「연결된 개수 3」)·다른 요소의 값·조사 메모가 붙어 있다.
//    그것을 그대로 주면 판정자가 새로 읽는 것이 아니라 **옛 칸을 옮겨 적는다.**
//    그래서 인용 부호(>)로 묶인 **발문 전문만** 뽑는다.
// 🔴 채점기준도 뺀다 — 「오로지 문항으로 판단한다. 채점기준·형식은 근거가 아니다」
//    ([[feedback_item_only_not_scoring_policy]]).
const 학교 = /(동화고|용화여고|배재고|계성고|청원여고|청원고|선덕고|양정고|휘문고|와부고)/g;
function 가리기(t) {
  const 발문 = t
    .split(/\r?\n/)
    .filter((L) => /^\s*>/.test(L))
    .map((L) => L.replace(/^\s*>\s?/, ''))
    .join('\n');
  return 발문
    .replace(학교, '어느 학교')
    .replace(/20\d\d(학년도)?\s*[12]학기\s*(중간|기말)(고사)?/g, '어느 회차')
    .replace(/\b\d{1,2}\s*번\b/g, '어느 문항')
    .replace(/★\s*[1-5]/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ── 4. 되돌려도 같은 순서가 나오는 섞기 ──────────────────────────────────
const 해시 = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 100003, 7);
const 섞인 = [...앵커].sort((a, b) => 해시(a.이름표 + 'H') - 해시(b.이름표 + 'H'));

// ── 5. 내보내기 ─────────────────────────────────────────────────────────
const 빠진 = [];
let 맹검 = `---
name: 실험H-맹검지-36문
description: 실험 H 맹검지 — 학교 기출 36문의 발문 전문. 칸·학교·회차·문번·기존 판정을 지웠다
version: v1.0 (2026-08-02 세션 109 · scripts/실험H-맹검지-만들기.mjs 산출)
status: 🔴 판정자용 · 봉인표를 먼저 보지 마라
---

# 실험 H 맹검지 — 36문

🔴 **판정자는 이 파일과 짜임 칸 정의만 본다.** 봉인표(\`실험H-봉인표-v1.md\`)를 열지 마라.

`;
let 봉인 = `---
name: 실험H-봉인표
description: 실험 H 맹검지 Q번호 ↔ 앵커 이름표·현재 칸 대응. 🔴 판정 전에 열지 마라
version: v1.0 (2026-08-02 세션 109)
status: 🔴 봉인 · 판정 완료 후 개봉
---

# 실험 H 봉인표

| Q | 이름표 | 옛 칸 | 출처 |
|:-:|:-:|:-:|---|
`;

섞인.forEach((a, i) => {
  const Q = `Q${String(i + 1).padStart(2, '0')}`;
  const 몸 = 본문.get(a.이름표);
  const 발문 = 몸 ? 가리기(몸) : '';
  if (!발문) { 빠진.push(a.이름표); return; }
  맹검 += `## ${Q}\n\n${발문}\n\n---\n\n`;
  봉인 += `| ${Q} | ${a.이름표} | ${a.옛칸} | ${a.출처} |\n`;
});

fs.writeFileSync(R('bank/measurements/실험H-맹검지-36문-v1.md'), 맹검, 'utf8');
fs.writeFileSync(R('bank/measurements/실험H-봉인표-v1.md'), 봉인, 'utf8');

console.log(`앵커 ${앵커.length}문 · 맹검지에 실은 것 ${앵커.length - 빠진.length}문`);
if (빠진.length) console.log(`🔴 발췌본에 발문이 없는 것 ${빠진.length}문 — ${빠진.join(' · ')}`);

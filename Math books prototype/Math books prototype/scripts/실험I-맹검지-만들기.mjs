/**
 * 실험 I — 흡수 맹검지 만들기
 *
 * 얽힘을 없애고 깊이·연산 부담·해석·독해 부담 셋으로만 재도 되는지 가른다.
 * 겨누는 문항: 얽힘 맨 위 여섯 + 세션 108 에서 얽힘만 홀로 높았던 Q06.
 * 쉬운 문항 넷을 섞는다 — 겨누는 것만 주면 판정자가 「다 어려운 것들」로 읽는다.
 *
 * 사전 등록: bank/measurements/실험I-흡수-사전등록-v1.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const R = (p) => path.join(ROOT, p);
const 읽기 = (p) => fs.readFileSync(R(p), 'utf8');

// 실험 H 맹검지의 Q 번호로 가리킨다 (봉인표 대응). 겨누는 여섯 = 옛 얽힘 프리미엄.
const 겨눔 = ['Q31', 'Q32', 'Q33', 'Q34', 'Q35', 'Q36'];
const 섞을것 = ['Q01', 'Q02', 'Q04', 'Q06'];          // 옛 얽힘 칸 1 — 쉬운 쪽
const H맹검 = 읽기('bank/measurements/실험H-맹검지-36문-v1.md');

/** 실험 H 맹검지에서 한 문항을 뽑는다 */
function H에서(q) {
  const m = H맹검.match(new RegExp(`^## ${q}\\n([\\s\\S]*?)\\n---$`, 'm'));
  return m ? m[1].trim() : null;
}

/** 세션 108 부담 본검정 맹검지의 Q06 — 얽힘만 홀로 높았던 문항 */
const 부담맹검 = 읽기('bank/measurements/부담-본검정-맹검지-20문-v1.md');
const 홀로 = 부담맹검.match(/^## Q06\n([\s\S]*?)\n---$/m);

const 모음 = [];
for (const q of 겨눔) 모음.push({ 출처: `실험H ${q}`, 갈래: '겨눔', 본문: H에서(q) });
모음.push({ 출처: '부담본검정 Q06', 갈래: '겨눔(홀로)', 본문: 홀로 ? 홀로[1].trim() : null });
for (const q of 섞을것) 모음.push({ 출처: `실험H ${q}`, 갈래: '섞음', 본문: H에서(q) });

// 되돌려도 같은 순서가 나오는 섞기
const 해시 = (s) => [...s].reduce((h, c) => (h * 37 + c.charCodeAt(0)) % 99991, 11);
모음.sort((a, b) => 해시(a.출처 + 'I') - 해시(b.출처 + 'I'));

let 맹검 = `---
name: 실험I-맹검지-11문
description: 실험 I 맹검지 — 학교 기출 11문의 발문 전문. 칸·학교·회차·문번·기존 판정을 지웠다
version: v1.0 (2026-08-02 세션 109 · scripts/실험I-맹검지-만들기.mjs 산출)
status: 🔴 판정자용 · 봉인표를 먼저 보지 마라
---

# 실험 I 맹검지 — 11문

🔴 **판정자는 이 파일과 세 사다리만 본다.** 봉인표(\`실험I-봉인표-v1.md\`)를 열지 마라.
🔴 **문항 순서에 뜻이 없다.** 어려운 것과 쉬운 것이 섞여 있다.

`;
let 봉인 = `---
name: 실험I-봉인표
description: 실험 I 맹검지 R번호 ↔ 원래 출처 대응. 🔴 판정 전에 열지 마라
version: v1.0 (2026-08-02 세션 109)
status: 🔴 봉인 · 판정 완료 후 개봉
---

# 실험 I 봉인표

| R | 갈래 | 원래 출처 |
|:-:|:-:|---|
`;

const 빠진 = [];
모음.forEach((x, i) => {
  const Rn = `R${String(i + 1).padStart(2, '0')}`;
  if (!x.본문) { 빠진.push(x.출처); return; }
  맹검 += `## ${Rn}\n\n${x.본문}\n\n---\n\n`;
  봉인 += `| ${Rn} | ${x.갈래} | ${x.출처} |\n`;
});

fs.writeFileSync(R('bank/measurements/실험I-맹검지-11문-v1.md'), 맹검, 'utf8');
fs.writeFileSync(R('bank/measurements/실험I-봉인표-v1.md'), 봉인, 'utf8');
console.log(`실은 것 ${모음.length - 빠진.length}/${모음.length}문`);
if (빠진.length) console.log(`🔴 발문을 못 찾은 것 — ${빠진.join(' · ')}`);

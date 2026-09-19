#!/usr/bin/env node
// 출제본 발문어구사전 v2.0 사용률 점검 v1.0 (2026-06-27)
// 사용: node scripts/wording-usage-check.mjs <본문.tex> [<본문.tex> ...]
// 단일 출처: bank/발문어구사전.md
//
// 마더텅 6회차 정밀 추출 86개 어구 중 *핵심 표준 어구*가
// 본 시스템 출제 시 실제로 사용되는지 카테고리별 점검.

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('usage: node scripts/wording-usage-check.mjs <본문.tex> [...]');
  process.exit(2);
}

// 발문어구사전 v2.0 §별 카탈로그 (86개 중 핵심 의무 어구)
const CATALOG = {
  '§1.4 "x에 대한 …" 도입': {
    weight: 'HIGH',
    keywords: [
      /\$?x\$?에\s*대한\s*삼차방정식/,
      /\$?x\$?에\s*대한\s*사차방정식/,
      /\$?x\$?에\s*대한\s*이차방정식/,
      /\$?x\$?에\s*대한\s*방정식/,
      /\$?x\$?에\s*대한\s*부등식/,
      /\$?x\$?에\s*대한\s*이차부등식/,
      /\$?x\$?에\s*대한\s*연립부등식/,
      /\$?x\$?에\s*대한\s*연립이차부등식/,
      /\$?x\$?에\s*대한\s*연립방정식/,
    ],
  },
  '§2.5 자기참조 단답 종결': {
    weight: 'HIGH',
    keywords: [
      /\$?M\^?\{?2\}?\$?의\s*값/,
      /\$?M\s*-\s*m\$?의\s*값/,
      /\$?f\([^)]+\)\$?의\s*값/,
      /\$?M\s*\\?cdot?\s*N\$?의\s*값/,
      /모든\s*[^의]*의\s*값들의\s*곱/,
      /모든\s*[^의]*의\s*값들의\s*합/,
    ],
  },
  '§2.6 매개변수 자유도 종결': {
    weight: 'HIGH',
    keywords: [
      /조건을\s*만족시키는\s*모든/,
      /모든\s*[가-힯a-zA-Z\s\$]+의\s*값의\s*합/,
      /모든\s*[가-힯a-zA-Z\s\$]+의\s*값의\s*곱/,
      /모든\s*정수\s*\$?[a-zA-Z]\$?의\s*값/,
      /모든\s*자연수\s*\$?[a-zA-Z]\$?의\s*값/,
      /모든\s*실수\s*\$?[a-zA-Z]\$?의\s*값/,
    ],
  },
  '§3.4 존재·부재 카운트': {
    weight: 'MEDIUM',
    keywords: [
      /존재하지\s*않[기도]/,
      /해를\s*갖지\s*않/,
      /존재하도록/,
      /갖기\s*위[한해]/,
      /가질\s*때/,
    ],
  },
  '§3.5 자유도 한정 어구': {
    weight: 'MEDIUM',
    keywords: [
      /서로\s*다른\s*두/,
      /서로\s*다른\s*세/,
      /서로\s*다른\s*네/,
      /가장\s*큰/,
      /가장\s*작은/,
      /최댓값/, /최솟값/,
    ],
  },
  '§5.4 조건 박스 (가)(나)(다)': {
    weight: 'MEDIUM',
    keywords: [
      /\(가\)/, /\(나\)/, /\(다\)/, /\(라\)/,
      /다음\s*조건을\s*모두\s*만족/,
      /다음\s*조건을\s*만족시킨다/,
    ],
  },
  '§2.3 보기형 종결': {
    weight: 'MEDIUM',
    keywords: [
      /있는\s*대로\s*고른\s*것/,
      /모두\s*고른\s*것/,
    ],
  },
};

function extractSlots(tex) {
  const re = /\\begin\{problem\}\{(\d+)\}([\s\S]*?)\\end\{problem\}/g;
  const slots = [];
  let m;
  while ((m = re.exec(tex)) !== null) {
    slots.push({ num: parseInt(m[1], 10), body: m[2] });
  }
  return slots;
}

// 답지 슬롯 추출 — \soltitle{N} ~ 다음 \soltitle 또는 \end{document} 까지
function extractSolSlots(tex) {
  const re = /\\soltitle\{(\d+)\}([\s\S]*?)(?=\\soltitle\{|\\end\{document\})/g;
  const slots = [];
  let m;
  while ((m = re.exec(tex)) !== null) {
    slots.push({ num: parseInt(m[1], 10), body: m[2] });
  }
  return slots;
}

// 답지용 어구 카탈로그 (마더텅 답지 분석 + 본 시스템 표준)
const CATALOG_SOL = {
  '§A 답 결구 종결': {
    weight: 'HIGH',
    keywords: [
      /정답은\s*\$?\\textbf\{[①②③④⑤]/,
      /정답은\s*[①②③④⑤]/,
      /답은\s*\$?\\textbf\{/,
      /따라서\s*정답/,
    ],
  },
  '§B solnote 통찰 키워드': {
    weight: 'HIGH',
    keywords: [
      /환원/, /치환/, /자기참조/, /표면\s*모순/,
      /절약\s*도구/, /함정/, /발견/, /패턴/,
      /대칭/, /자유도/, /분기/, /통찰/,
    ],
  },
  '§C 풀이 도입 표준': {
    weight: 'MEDIUM',
    keywords: [
      /라\s*하[자면]/, /로\s*두면/, /로\s*놓으면/,
      /이라\s*하[자면]/, /이라\s*놓/,
      /라\s*할\s*때/, /에서\s/, /이므로/,
    ],
  },
  '§D 단계 연결 어구': {
    weight: 'MEDIUM',
    keywords: [
      /따라서/, /그러므로/, /곧[\s,]/, /즉[\s,]/,
      /이때/, /\\Longrightarrow/, /\\Rightarrow/,
    ],
  },
  '§E 본문 우회 → 답지 직접 (의무)': {
    weight: 'HIGH',
    keywords: [
      /중근/, /허근/, /실근/, /켤레/, /인수분해/,
      /\\step/, /\\soltitle/, /\\solnote/, /\\answerbox/,
    ],
  },
};

console.log(`\n=== 발문어구사전 v2.0 사용률 점검 v1.0 ===\n`);

for (const arg of args) {
  if (!fs.existsSync(arg)) {
    console.error(`파일 없음: ${arg}`);
    continue;
  }
  const tex = fs.readFileSync(arg, 'utf8');
  const isSolution = /답지\.tex$/.test(arg);
  const slots = isSolution ? extractSolSlots(tex) : extractSlots(tex);
  const catalog = isSolution ? CATALOG_SOL : CATALOG;
  const name = arg.split(/[\\/]/).pop();
  const mode = isSolution ? '답지' : '본문';

  console.log(`📄 ${name} [${mode}] (${slots.length}슬롯)`);
  console.log(`§ | 어구 카테고리 | 사용 슬롯 | 사용률 | 가중치`);
  console.log(`---|---|---|---|---`);

  let totalScore = 0;
  let maxScore = 0;
  for (const [section, def] of Object.entries(catalog)) {
    const hitSlots = new Set();
    for (const slot of slots) {
      for (const kw of def.keywords) {
        if (kw.test(slot.body)) {
          hitSlots.add(slot.num);
          break;
        }
      }
    }
    const rate = ((hitSlots.size / slots.length) * 100).toFixed(0);
    const w = def.weight === 'HIGH' ? 2 : 1;
    totalScore += hitSlots.size * w;
    maxScore += slots.length * w;
    const tag = hitSlots.size === 0 ? '🔴' : hitSlots.size >= slots.length / 2 ? '✅' : '🟡';
    console.log(`${section} | ${hitSlots.size}/${slots.length} | ${rate}% | ${def.weight} | ${tag}`);
  }
  const usageScore = ((totalScore / maxScore) * 100).toFixed(1);
  console.log(`\n  📊 종합 사용률 점수: ${usageScore}/100 (가중치 적용)`);
  if (usageScore < 30) console.log(`  🔴 RED — 사전 어구 사용 부족 (출제 시 사전 활용 미흡)`);
  else if (usageScore < 50) console.log(`  🟡 YELLOW — 사전 어구 보강 권장`);
  else console.log(`  ✅ GREEN — 사전 어구 적정 활용`);
  console.log(``);
}

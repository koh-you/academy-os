#!/usr/bin/env node
// solution-narrative-coherence-check.mjs — 답지 서술 논리 파탄·궤변 자동 감지
// 2026-07-21 세션 57 신설 · v1.1 (은폐·우회·좌표 재설정 패턴 확장)
//
// v1.0 → v1.1 (세션 57 2차 재검수 발견 패턴 추가):
//   - "표기에 부합" 은폐 (06 답지 L2-2 재발)
//   - "표준 답은 ..." 우회 (02 답지 L2-6)
//   - "= 0?" 의문형 자기부정 (02 답지 L2-6)
//   - "다시 살핀다" 좌표 재설정 (02 답지 L2-6)
//   - "= ...에 해당한다" 결과 대입 우회 (02 답지 L2-6)
//   - "원점은 ℓ 위에 있지 않다" 등 부정 후 우회 (04 답지 L2-2)
//
// v1.0 (이번 세션 06-FN·07-RF01·04-이동 등에서 발견된 궤변 서술 패턴):
//   1. "인 것 같으나 아니다" 조건부 부정 (자기 부정)
//   2. "부합한다" 계산 결과와 다른데 부합 주장
//   3. "결정한다·확정된다" 미확정 종결
//   4. Agent 메타 코멘트 잔존 (재계산 흔적)
//   5. "실은 ~ 실은" 반복 자기수정
//   6. "표기 상 어긋난다" 궤변
//
// 대상 : DeeP Math 정리편 답지 tex 파일
// 사용 : node scripts/solution-narrative-coherence-check.mjs <답지.tex>
// 반환 : 0 = 통과 / 1 = RED (궤변) / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error('Usage: node scripts/solution-narrative-coherence-check.mjs <답지.tex>');
  console.error('  반환: 0 = 통과 / 1 = RED / 2 = 오용');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

const tex = fs.readFileSync(texPath, 'utf8');
const lines = tex.split('\n');

// RED 패턴 (즉시 정정 필요)
const RED_PATTERNS = [
  {
    name: 'incoherence-self-negation',
    re: /인\s*것\s*같으나|일\s*것\s*같으나|처럼\s*보이나|참인\s*것\s*같으나|사실\s*참인/,
    desc: '자기 부정 조건부 서술 (계산 후 결론 뒤집기)',
  },
  {
    name: 'incoherence-hedging',
    re: /사실은\s*아니다|사실은\s*그렇지\s*않|다시\s*확인이\s*필요/,
    desc: '결론 회피 hedging',
  },
  {
    name: 'incoherence-agent-meta',
    re: /잠시\s*[.·]|정확히\s*재계산하면|청사진\s*임시값|재계산\s*결과/,
    desc: 'Agent 메타 코멘트 잔존 (재계산 흔적)',
  },
  {
    name: 'incoherence-force-agreement',
    re: /(?:이지만|이나|하지만).{0,20}(?:부합한다|일치한다|성립한다)/,
    desc: '계산 결과와 다른데 부합 주장',
  },
  {
    name: 'incoherence-undetermined-conclusion',
    re: /(?:유효한|적합한)\s*배치에\s*따라\s*답을\s*결정한다|배치에\s*따라\s*답이\s*결정된다/,
    desc: '미확정 종결 (답이 지시어)',
  },
  {
    name: 'incoherence-loop',
    re: /실은.{0,30}실은|이지만.{0,20}이므로.{0,20}이지만/,
    desc: '반복 자기수정',
  },
  {
    name: 'incoherence-notation-conflict',
    re: /표기\s*상\s*(?:계수\s*)?관계가\s*어긋나는|표기\s*상\s*맞지\s*않으므로/,
    desc: '"표기 상 어긋난다" 궤변',
  },
  // v1.1 신규 패턴
  {
    name: 'incoherence-cover-up-notation',
    re: /표기(?:에|와)\s*부합한다|표기\s*상\s*부합/,
    desc: '"표기에 부합" 은폐 (계산 결과와 청사진 값 불일치를 표기로 뭉갬)',
  },
  {
    name: 'incoherence-standard-answer',
    re: /(?:문제의|참고의)?\s*표준\s*답(?:은|이)\s*.{5,}(?:이며|으로|이다|이라 하면)/,
    desc: '"표준 답은 …" 결론 우회 (유도 없이 결과 대입)',
  },
  {
    name: 'incoherence-question-self-deny',
    re: /=\s*0\?|=\s*\d+\?|=\s*-?\d+\?|이가?\s*\?\s*(?:실은|사실은)/,
    desc: '의문형 자기부정 ("... = 0?" 후 "실은")',
  },
  {
    name: 'incoherence-reexamine',
    re: /(?:문제\s*)?조건을?\s*다시\s*살핀다|좌표를?\s*다시\s*(?:설정|잡는다|고쳐)/,
    desc: '"다시 살핀다·다시 잡는다" 좌표 재설정 (풀이 도중 자기수정)',
  },
  {
    name: 'incoherence-shortcut-substitute',
    re: /이는s*[가-힣a-zA-Z]+s*=s*.{1,20}에s*해당한다/,
    desc: '"이는 X에 해당한다" 결과 대입 우회 (유도 없이 값 assertion)',
  },
  {
    name: 'incoherence-negation-detour',
    re: /(?:원점은?|이\s*점은?|해당\s*점은?)\s*[a-zA-Z가-힣]\s*(?:위에|안에)\s*있지\s*않(?:다|으므로)/,
    desc: '"원점은 ℓ 위에 있지 않다" 부정 후 우회 (불필요한 우회 계산)',
  },
];

// YELLOW 패턴 (검토 권장)
const YELLOW_PATTERNS = [
  {
    name: 'weak-conclusion',
    re: /따라서\s*답은\s*.{0,10}\s*또는\s*.{0,10}\s*(?:이다|가\s*된다)\s*[.。]\s*(?:이때|여기서)/,
    desc: '다중해 서술 후 추가 조건 필요 흔적',
  },
  {
    name: 'circular-reasoning',
    re: /이\s*식이\s*성립하므로\s*이\s*식이|이므로\s*이므로/,
    desc: '순환 논증',
  },
];

// LaTeX 주석 제거 (%로 시작)
function stripComments(line) {
  return line.replace(/(?<!\\)%.*$/, '');
}

const redIssues = [];
const yellowIssues = [];

for (let i = 0; i < lines.length; i++) {
  const rawLine = lines[i];
  const line = stripComments(rawLine);
  if (!line.trim()) continue;

  for (const p of RED_PATTERNS) {
    if (p.re.test(line)) {
      redIssues.push({ line: i + 1, pattern: p.name, desc: p.desc, text: line.trim().slice(0, 100) });
    }
  }
  for (const p of YELLOW_PATTERNS) {
    if (p.re.test(line)) {
      yellowIssues.push({ line: i + 1, pattern: p.name, desc: p.desc, text: line.trim().slice(0, 100) });
    }
  }
}

// 리포트
console.log(`🔍 답지 서술 논리 파탄·궤변 감지 (v1.1)`);
console.log(`   파일: ${texPath}  (${lines.length} lines)`);
console.log();

if (redIssues.length > 0) {
  console.log(`=== 🔴 RED ${redIssues.length}건 (즉시 재작성 필요) ===`);
  for (const x of redIssues) {
    console.log(`  line ${x.line}  [${x.pattern}]`);
    console.log(`    ${x.desc}`);
    console.log(`    → "${x.text}"`);
  }
  console.log();
}

if (yellowIssues.length > 0) {
  console.log(`=== 🟡 YELLOW ${yellowIssues.length}건 (검토 권장) ===`);
  for (const x of yellowIssues) {
    console.log(`  line ${x.line}  [${x.pattern}]  "${x.text}"`);
  }
  console.log();
}

console.log(`📊 요약: RED ${redIssues.length}건 · YELLOW ${yellowIssues.length}건`);

if (redIssues.length > 0) {
  console.log(`\n❌ RED 궤변 서술 → solution-author 재작성 호출 권장`);
  process.exit(1);
}
console.log(`\n✅ 통과`);
process.exit(0);

#!/usr/bin/env node
// 서술형 소문항 (1)(2)(3) 자유도 자동 판정 (v1.6 T3 신설)
// 2026-07-14 세션 42 후반부 · bank/mechanism-은행.md Meta-M2 자동화
//
// 사용법: node scripts/subquestion-freedom-check.mjs <문제.tex>
//   반환 코드: 0 = GREEN (자유도 3+) / 1 = RED (스크립트화 감지)

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/subquestion-freedom-check.mjs <문제.tex>');
  process.exit(2);
}

const file = args[0];
if (!fs.existsSync(file)) {
  console.error(`⚠️  파일 없음: ${file}`);
  process.exit(2);
}

const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

console.log(`🔍 서술형 소문항 자유도 검사 (v1.6 · ${file})\n`);
console.log(`판정 기준 (bank/mechanism-은행.md Meta-M2):`);
console.log(`  - 소문항 (1) 결과 형태 노출 ("자취가 원") → -2`);
console.log(`  - 소문항 (2) (1) 결과 완전 명시 ("(1)에서 얻은 ~") → -1`);
console.log(`  - 소문항 (3) 스크립트 지시 ("(N) 결과를 이용하여") → -1`);
console.log(`  - 자유 요소 (mechanism 발견·접근 선택·초기 자유) → +1~+2`);
console.log(`  - 자유도 3+ 정점 조건 · <3이면 RED\n`);

// 서술형 문항 감지 (\begin{problem}{N}{s})
const problemRegex = /\\begin\{problem\}\{(\d+)\}\{s\}([\s\S]*?)\\end\{problem\}/g;
const problems = [...content.matchAll(problemRegex)];

let totalRed = 0;
let totalYellow = 0;

for (const p of problems) {
  const num = p[1];
  const body = p[2];

  // 소문항 개수 확인
  const subRegex = /\\textbf\{\((\d)\)\}/g;
  const subs = [...body.matchAll(subRegex)];

  if (subs.length === 0) continue; // 서술형 아님

  console.log(`📋 문항 #${num} · 소문항 ${subs.length}개`);

  let freedom = 0;
  const issues = [];
  const positives = [];

  // -2: 소문항 (1) 결과 형태 노출
  const sub1Match = body.match(/\\textbf\{\(1\)\}([^\\]+)/);
  if (sub1Match) {
    const sub1Text = sub1Match[1];
    const leakPatterns = [
      { regex: /자취가?\s*원/, desc: "자취가 원 명시" },
      { regex: /자취가?\s*직선/, desc: "자취가 직선 명시" },
      { regex: /도형\s*\(원\)/, desc: "도형(원) 명시" },
      { regex: /이루는\s*(?:원|직선)/, desc: "이루는 원/직선 명시" },
      { regex: /(?:중점|무게중심).*(?:좌표|위치)/, desc: "중점/무게중심 좌표 노출" },
    ];
    for (const { regex, desc } of leakPatterns) {
      if (regex.test(sub1Text)) {
        freedom -= 2;
        issues.push(`(1) 결과 형태 노출 · ${desc} → -2`);
      }
    }
  }

  // -1: 소문항 (2) (1) 결과 완전 명시
  const sub2Match = body.match(/\\textbf\{\(2\)\}([^\\]+)/);
  if (sub2Match) {
    const sub2Text = sub2Match[1];
    const scriptPatterns = [
      { regex: /\(1\)에서\s*(?:얻은|구한).*?(?:을|를)/, desc: "(1)에서 얻은 결과 완전 명시" },
      { regex: /\\textbf\{\(1\)\}.*?(?:이용하여|사용하여|결과를)/, desc: "(1) 결과 이용 명시" },
    ];
    for (const { regex, desc } of scriptPatterns) {
      if (regex.test(sub2Text)) {
        freedom -= 1;
        issues.push(`(2) 스크립트 · ${desc} → -1`);
      }
    }
  }

  // -1: 소문항 (3) 스크립트 지시
  const sub3Match = body.match(/\\textbf\{\(3\)\}([^\\]+)/);
  if (sub3Match) {
    const sub3Text = sub3Match[1];
    const scriptPatterns = [
      { regex: /\\textbf\{\(\d\)\}.*?(?:결과를|을)\s*이용/, desc: "(N) 결과를 이용하여" },
      { regex: /\(1\).*?\(2\).*?(?:이용|사용)/, desc: "(1)(2) 결과 이용 명시" },
    ];
    for (const { regex, desc } of scriptPatterns) {
      if (regex.test(sub3Text)) {
        freedom -= 1;
        issues.push(`(3) 스크립트 · ${desc} → -1`);
      }
    }
  }

  // +1~+2: 자유 요소
  // 지문형·mechanism 발견 요구
  const narrativeMatch = body.match(/지진|위성|사도기|팬터그래프|CCTV|카메라|광학|월식|GPS/);
  if (narrativeMatch) {
    freedom += 2;
    positives.push("mechanism 발견 요구 (지문형) · +2");
  }

  // 조건 (가)(나)(다) 다중
  const conditionCount = (body.match(/\(가\)|\(나\)|\(다\)/g) || []).length;
  if (conditionCount >= 3) {
    freedom += 1;
    positives.push(`조건 (가)(나)(다) 다중 (${conditionCount}건) · +1`);
  }

  // 초기 좌표계 자유 (매개변수 포함)
  const paramMatch = body.match(/\\text\{실수\}|매개변수|양수\s*\$?[a-z]|임의의/);
  if (paramMatch) {
    freedom += 1;
    positives.push("초기 좌표계·매개변수 자유 · +1");
  }

  // 자유도 판정
  console.log(`  자유 요소:`);
  if (positives.length) positives.forEach(p => console.log(`    ✅ ${p}`));
  else console.log(`    (없음)`);

  console.log(`  스크립트화 감지:`);
  if (issues.length) issues.forEach(i => console.log(`    🔴 ${i}`));
  else console.log(`    (없음)`);

  console.log(`  → 자유도 지표: ${freedom}`);

  if (freedom < 3) {
    console.log(`  🔴 RED · 자유도 < 3 (정점 조건 미달)`);
    totalRed++;
  } else if (freedom < 4) {
    console.log(`  🟡 YELLOW · 자유도 3 (경계)`);
    totalYellow++;
  } else {
    console.log(`  ✅ GREEN · 자유도 ${freedom} (정점 조건 충족)`);
  }
  console.log('');
}

console.log(`\n=== 요약 ===`);
console.log(`  🔴 RED (재출제 강제): ${totalRed}건`);
console.log(`  🟡 YELLOW (검토 권장): ${totalYellow}건`);

console.log(`\n=== 단일 출처 ===`);
console.log(`  bank/mechanism-은행.md v1.0 Meta-M2 (자유도 확보)`);
console.log(`  bank/문항-심층-설계-원칙.md v3.1 (W3 장황화·W4 조합 위장)`);

if (totalRed > 0) {
  console.error(`\n❌ 자유도 미달 슬롯 ${totalRed}건. 소문항 재작성 강제.`);
  process.exit(1);
} else if (totalYellow > 0) {
  console.log(`\n🟡 경계 슬롯 ${totalYellow}건. 검토 권장.`);
  process.exit(0);
} else {
  console.log(`\n✅ 서술형 소문항 자유도 통과.`);
  process.exit(0);
}

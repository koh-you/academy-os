#!/usr/bin/env node
// procedural_friction 자동 매칭기 (v2.0, schema v3.8 §2.11 — 반대 방향)
// 2026-07-06 마스터 재지시 — "계산 마찰로 어렵게 만드는 건 질 저하"
//
// v2.0 방향 전환 (v1.0에서 뒤집힘):
//   - v1.0: friction ≥ 2 → base ★ +0.5 (질 상승 신호)
//   - v2.0: friction ≥ 2 + insight_count ≥ 1 → 🟡 YELLOW (질 저하 경고)
//   - 계산 연습 단원(CM1-PL·EQ·MX 초반부)만 예외
//
// 사용법: node scripts/procedural-friction-check.mjs <test.tex> [--verbose] [--computation]
//
// --computation: 계산 연습 슬롯 모드 (모든 friction OK)
//
// 동작:
// 1. 시험지 .tex에서 문항별 본문 추출
// 2. 5종 friction 트리거 정규식 매칭
// 3. 통찰 신호(insight-depth-check의 depth 2·3 신호) 존재 여부 감지
// 4. 판정:
//    - --computation 모드: 모든 friction OK
//    - 통찰 있음 + friction ≥ 2 → 🟡 YELLOW "질 저하 위험"
//    - 통찰 없음 + friction ≥ 3 → 🟡 YELLOW "순수 계산 노가다"
//    - 그 외: OK
//
// 주의: 본 도구는 *휴리스틱*이며 정밀 판정은 problem-review v3.8 에이전트 호출 필수.

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/procedural-friction-check.mjs <test.tex> [--verbose] [--computation]');
  process.exit(2);
}

const file = args[0];
const verbose = args.includes('--verbose');
const computationMode = args.includes('--computation');

// v2.0 통찰 감지 (간이 — depth 2·3 신호 몇 개)
const INSIGHT_SIGNALS = [
  /자기참조|매개변수.*다층/i,
  /단원 결합|I-XU|두 단원/i,
  /격자점|정수.*자유도/i,
  /반례|보기 중 항상/i,
  /세 조건.*모두 만족|3 ?조건.*결합/i,
  /역방향|역추적/i,
  /케일리|hamilton|주기.*발견/i,
  /합성식|치환/i,
  /항등식.*제곱|완전제곱.*강제/i,
];

if (!fs.existsSync(file)) {
  console.error(`⚠️  파일 없음: ${file}`);
  process.exit(2);
}

const content = fs.readFileSync(file, 'utf8');

// v3.7 §2.11 friction 트리거 5종
const FRICTION_TRIGGERS = [
  {
    code: 'F1',
    name: '4차 인수분해·완전제곱',
    tests: [
      // 4차 다항식 명시
      (body) => /x\^\{?4\}?|x\^4/.test(body) && /인수분해|완전제곱|판별식|근을 구/.test(body),
      // 사차방정식
      (body) => /사차 ?방정식|사차식|사차 ?함수/.test(body) && /근|해|인수/.test(body),
      // (x^2 + ...)(x^2 + ...) 형태
      (body) => /\(x\^\{?2\}?[^)]{0,30}\)\s*\(x\^\{?2\}?/.test(body),
    ],
  },
  {
    code: 'F2',
    name: '복소수 다중 곱셈 (3+ 인자)',
    tests: [
      // (a+bi)(c+di)(e+fi) 3연속 곱
      (body) => /\([^)]{0,20}[+\-]\s*[a-z]?i\)[\s]*\([^)]{0,20}[+\-]\s*[a-z]?i\)[\s]*\([^)]{0,20}[+\-]\s*[a-z]?i\)/.test(body),
      // \alpha\beta\gamma 세 근 곱 (복소수 라벨 시)
      (body) => /복소수/.test(body) && /\\alpha\\beta\\gamma|\\alpha[\s]*\\beta[\s]*\\gamma/.test(body),
      // (1+i)^n or i^n with large n (반복 곱 필요)
      (body) => /\(1[+\-]i\)\^\{?([5-9]|1[0-9])\}?|i\^\{?([5-9]|1[0-9])\}?/.test(body),
      // 세제곱 이상 복소수 거듭제곱
      (body) => /(1\+i|1-i|-1\+i|-1-i)\^\{?[3-9]\}?/.test(body),
    ],
  },
  {
    code: 'F3',
    name: '행렬 3×3+ 또는 반복 거듭제곱 ≥ 5',
    tests: [
      // 3×3 행렬 명시
      (body) => /3\s*\\?times\s*3|3 ?×3|3행\s*3열/.test(body),
      // 반복 거듭제곱 A^n (n ≥ 5)
      (body) => /A\^\{?[5-9]\}?|A\^\{?1[0-9]\}?|A\^\{?[2-9]\d\}?/.test(body),
      // A^m + A^n + ... 여러 거듭제곱 합
      (body) => /A\^\{?\d\}?\s*[+\-]\s*A\^\{?\d\}?\s*[+\-]\s*A\^\{?\d\}?/.test(body),
      // bmatrix / pmatrix 3행 (\\가 2개 이상)
      (body) => {
        const m = body.match(/\\begin\{(?:b|p|v)matrix\}([\s\S]*?)\\end\{(?:b|p|v)matrix\}/g);
        if (!m) return false;
        return m.some(mat => (mat.match(/\\\\/g) || []).length >= 2);
      },
    ],
  },
  {
    code: 'F4',
    name: '조합 케이스 분기 ≥ 4갈래',
    tests: [
      // \begin{cases} 안 case 4개 이상 (\\ 3개 이상)
      (body) => {
        const m = body.match(/\\begin\{cases\}([\s\S]*?)\\end\{cases\}/g);
        if (!m) return false;
        return m.some(c => (c.match(/\\\\/g) || []).length >= 3);
      },
      // "네 갈래 / 4가지 경우 / 4 케이스"
      (body) => /네 ?가지 ?경우|4가지 ?경우|4[\s]*경우|4[\s]*케이스|네 ?갈래|4[\s]*갈래/.test(body),
      // (i), (ii), (iii), (iv) 4단계 나열
      (body) => /\(i\)[\s\S]{0,200}\(ii\)[\s\S]{0,200}\(iii\)[\s\S]{0,200}\(iv\)/.test(body),
      // "다음 중 다음과 같이 다섯 가지" 등 5+
      (body) => /(다섯|여섯|일곱|여덟)[\s]*가지 ?경우|[5-9][\s]*경우/.test(body),
    ],
  },
  {
    code: 'F5',
    name: '부호 결정 조건 ≥ 3개',
    tests: [
      // a > 0, b < 0, c > 0 같은 부호 조건 3+
      (body) => {
        const matches = body.match(/[a-zA-Z]\s*[<>]\s*0/g) || [];
        return matches.length >= 3;
      },
      // \pm, 부호 3+ 언급
      (body) => {
        const count = (body.match(/\\pm|부호/g) || []).length;
        return count >= 3;
      },
      // "각각 양수 / 각각 음수 / 부호가 다르다" 다중 언급
      (body) => {
        const count = (body.match(/양수|음수|양의 ?정수|음의 ?정수/g) || []).length;
        return count >= 4;
      },
    ],
  },
];

// 시험지 슬롯 추출 (문제·풀이 환경 모두 지원)
function extractSlots(text) {
  const slots = [];
  // \begin{problem}{N}{s}...\end{problem} 형태 (시험지)
  const problemRegex = /\\begin\{problem\}\{(\d+)\}\{s\}([\s\S]*?)\\end\{problem\}/g;
  for (const m of text.matchAll(problemRegex)) {
    const pointMatch = m[2].match(/\\pointbadge\{([\d.]+)\}/);
    slots.push({
      num: parseInt(m[1]),
      body: m[2],
      point: pointMatch ? parseFloat(pointMatch[1]) : 0,
    });
  }
  if (slots.length > 0) return slots;

  // 대체: \problem 커맨드 (유형편)
  const problemCmd = /\\problem\{(\d+)\}([\s\S]*?)(?=\\problem\{|\\end\{document\}|$)/g;
  for (const m of text.matchAll(problemCmd)) {
    slots.push({
      num: parseInt(m[1]),
      body: m[2],
      point: 0,
    });
  }
  return slots;
}

const slots = extractSlots(content);

if (slots.length === 0) {
  console.error('⚠️  problem 환경 발견 0개');
  process.exit(2);
}

function hasInsight(body) {
  return INSIGHT_SIGNALS.some(rgx => rgx.test(body));
}

function analyzeSlot(slot) {
  const matched = [];
  for (const trig of FRICTION_TRIGGERS) {
    const hits = trig.tests.filter(t => t(slot.body));
    if (hits.length > 0) {
      matched.push({ code: trig.code, name: trig.name, hitCount: hits.length });
    }
  }
  const insightPresent = hasInsight(slot.body);
  const friction_score = matched.length;

  // v3.8 판정 (반대 방향)
  let verdict = 'OK';
  let severity = 'ok';
  if (computationMode) {
    verdict = friction_score > 0 ? '✓ 계산 연습 (friction 자연스러움)' : 'OK';
  } else if (insightPresent && friction_score >= 2) {
    verdict = '🟡 YELLOW — 통찰형에 계산 마찰 (질 저하 위험)';
    severity = 'yellow-insight';
  } else if (!insightPresent && friction_score >= 3) {
    verdict = '🟡 YELLOW — 순수 계산 노가다 슬롯';
    severity = 'yellow-procedural';
  }

  return {
    friction_score,
    triggers: matched,
    insightPresent,
    verdict,
    severity,
  };
}

console.log(`⚙️  procedural_friction 자동 매칭 (v2.0 — schema v3.8 §2.11 반대 방향)`);
console.log(`📄 ${file}: ${slots.length}문`);
console.log(`🎯 모드: ${computationMode ? '계산 연습 슬롯 (friction OK)' : '통찰형 슬롯 (friction 경고)'}\n`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('#  | 배점 | friction | 트리거          | 통찰 | 판정');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const yellowInsight = [];    // 통찰에 friction 심은 슬롯
const yellowProcedural = []; // 순수 계산 노가다 슬롯

for (const slot of slots) {
  const r = analyzeSlot(slot);
  const numStr = String(slot.num).padStart(2);
  const ptStr = slot.point ? String(slot.point).padEnd(4) : '  - ';
  const scoreStr = String(r.friction_score).padStart(2);
  const trigStr = r.triggers.map(t => t.code).join('·').padEnd(12);
  const insStr = r.insightPresent ? '있음' : '없음';

  console.log(`${numStr} | ${ptStr}| ${scoreStr}       | ${trigStr}    | ${insStr}  | ${r.verdict}`);

  if (r.severity === 'yellow-insight') yellowInsight.push({ num: slot.num, ...r });
  if (r.severity === 'yellow-procedural') yellowProcedural.push({ num: slot.num, ...r });

  if (verbose && r.friction_score > 0) {
    for (const t of r.triggers) {
      console.log(`         ${t.code}: ${t.name} (매칭 ${t.hitCount}개)`);
    }
  }
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log(`📈 종합 (v3.8):`);
console.log(`   🟡 통찰형에 계산 마찰 (질 저하): ${yellowInsight.length}문`);
console.log(`   🟡 순수 계산 노가다: ${yellowProcedural.length}문`);
console.log(`   OK: ${slots.length - yellowInsight.length - yellowProcedural.length}문`);

if (yellowInsight.length > 0) {
  console.log(`\n🟡 통찰형 슬롯에 계산 마찰 심음 (재설계 권장):`);
  for (const s of yellowInsight) {
    console.log(`   #${s.num}: friction=${s.friction_score} (${s.triggers.map(t => t.code).join('·')}) — 계산 제거 or 통찰 강화`);
  }
}

console.log(`\n=== 단일 출처 ===`);
console.log(`schema.md v3.8 §2.11 procedural_friction (질 저하 경고 방향)`);
console.log(`주의: 본 도구는 휴리스틱이며 정밀 판정은 problem-review v3.8 에이전트 호출`);

process.exit(yellowInsight.length + yellowProcedural.length > 0 ? 2 : 0);

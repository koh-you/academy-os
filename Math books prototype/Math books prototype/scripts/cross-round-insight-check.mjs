#!/usr/bin/env node
// 회차 간 통찰 중복 자동 검출
// 2026-06-24 v1.0 마스터 확립 — bank/workflow.md §10.5 단계 5 자동화

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/cross-round-insight-check.mjs <new.tex> <prev1.tex> [prev2.tex ...]');
  console.error('       반환 코드: 0 = 중복 없음 / 1 = 중복 검출');
  process.exit(2);
}

const newFile = args[0];
const prevFiles = args.slice(1);

// 통찰 패턴 시그니처 라이브러리 (regex + 이름)
// CM1 EQ·INEQ·CB·MX 단원의 핵심 통찰 패턴들
const PATTERNS = [
  // EQ 사차방정식 패턴
  { sig: /A\^?\{?2\}?\s*[+\-=]\s*[0-9]?\s*[pqkn]?A\s*[+\-=]\s*[0-9]?\s*[pqkn]?E/i, name: 'MX: A²=pA+qE 폐쇄식 (케일리식 환원)' },
  { sig: /A\s*\+\s*A\^?\{?-1\}?\s*=\s*[0-9]?E/i, name: 'MX: A+A⁻¹=kE 역행렬 합 폐쇄식 (CM1 금지)' },
  { sig: /A\^?\{?n\}?[^=]*B\^?\{?n\}?/i, name: 'MX: AⁿBⁿ 동시 거듭제곱 합' },
  { sig: /A\s*\+\s*A\^?\{?2\}?\s*\+\s*A\^?\{?3\}?\s*\+\s*\\cdots\s*\+\s*A\^?\{?[0-9]+\}?/i, name: 'MX: A+A²+…+Aⁿ 누적합 + 성분합' },
  { sig: /A\^?\{?2\}?\s*-\s*[0-9]?\s*A\s*[+\-]\s*E\s*=\s*O/i, name: 'MX: A²-kA+E=O 점화식형' },
  { sig: /A\^?\{?n\}?\s*=\s*\\begin\{pmatrix\}\s*[0-9]+\^?\{?n\}?/i, name: 'MX: Aⁿ 일반항 (2^n, 3^n 등 거듭제곱 꼴)' },
  { sig: /A\^?\{?m\}?\s*\\cdot\s*A\^?\{?n\}?\s*=\s*E/i, name: 'MX: A^m·A^n=E 주기성' },
  { sig: /AB\s*=\s*BA/i, name: 'MX: AB=BA 가환 조건' },

  // EQ 켤레무리수·켤레허근
  { sig: /1\s*[+\-]\s*\\sqrt\{[0-9]+\}|[0-9]\s*[+\-]\s*\\sqrt\{[0-9]+\}/i, name: 'EQ: 단일 무리수 켤레근 (a+b√c)' },
  { sig: /\\sqrt\{[0-9]+\}\s*[+\-]\s*\\sqrt\{[0-9]+\}/i, name: 'EQ: 두 종류 무리수 켤레 (CM1 금지)' },
  { sig: /[0-9]\s*[+\-]\s*[0-9]?i(?!\w)/i, name: 'EQ: 켤레허근 (a±bi)' },

  // EQ 사차방정식 패턴
  { sig: /사차방정식.*인수분해/i, name: 'EQ: 사차방정식 인수분해' },
  { sig: /두 중근/i, name: 'EQ: 사차방정식 두 중근' },
  { sig: /산술평균|세 근의.*평균/i, name: 'EQ: 세 근의 산술평균' },
  { sig: /자기참조|f\(-?[0-9]+\)\s*=\s*[0-9]+/i, name: 'EQ: 자기참조 단서 f(k)=값' },

  // INEQ 부등식 패턴
  { sig: /\|x\s*[+\-]\s*[0-9]+\|\s*\+\s*\|x\s*[+\-]\s*[0-9]+\|/i, name: 'INEQ: 절댓값 부등식 |x±a|+|x±b| 합' },
  { sig: /모든 실수.*성립|모든 실수 [a-z].*성립/i, name: 'INEQ: 모든 실수에서 성립 (판별식)' },
  { sig: /모든 양의 실수/i, name: 'INEQ: 모든 양의 실수에서 성립' },
  { sig: /연립부등식.*정수/i, name: 'INEQ: 연립부등식 정수해' },
  { sig: /\\dfrac\{[^}]+\}\{[0-9]+\}\s*[≤\\le]/i, name: 'INEQ: 분수 부등식' },
  { sig: /x\^?\{?2\}?\s*\+\s*[a-z]?\s*x\s*\+\s*[a-z]?\s*<\s*0.*해.*[\-<a-z]/i, name: 'INEQ: 이차부등식 해 조건 + 매개변수' },

  // CB 경우의 수 패턴
  { sig: /일렬로 (세울|나열|배열)/i, name: 'CB: 일렬 배열' },
  { sig: /이웃|서로 떨어진/i, name: 'CB: 이웃 조건' },
  { sig: /양 끝/i, name: 'CB: 양 끝 조건' },
  { sig: /적어도 두 조건|적어도 세 조건/i, name: 'CB: (가)(나)(다) 적어도 N조건' },
  { sig: /원순열|원탁/i, name: 'CB: 원순열' },
  { sig: /\{?\}_\{?n\}?\\?mathrm\{?[CP]\}?_\{?r/i, name: 'CB: 조합·순열 일반식 nCr/nPr' },
  { sig: /중복조합|H_/i, name: 'CB: 중복조합 nHr' },
  { sig: /\\binom\{[0-9]+\}\{[0-9]+\}/, name: 'CB: 이항계수 직접 표기' },
  { sig: /같은 (것|숫자).*이웃/i, name: 'CB: 같은 것 있는 순열 + 이웃' },
  { sig: /짝수.*홀수|홀수.*짝수/i, name: 'CB: 짝홀 케이스 분류' },

  // 결합 (★ 5 캡스톤)
  { sig: /카드.*\\alpha.*\\beta.*\\gamma|카드.*\\alpha.*\\beta/i, name: '결합: 카드 + 변수 α·β(·γ) + 이차방정식' },
  { sig: /(서로 다른|모두) (실수|양의 실수|양의 정수).*근/i, name: '결합: 근의 조건 (서로 다른·양의·정수)' },
  { sig: /판별식.*>\s*0|D\s*>\s*0/i, name: 'EQ: 판별식 > 0 (서로 다른 실근)' },
];

function extractMatches(content, fileLabel) {
  const found = [];
  for (const p of PATTERNS) {
    p.sig.lastIndex = 0;
    if (p.sig.test(content)) {
      found.push(p.name);
    }
  }
  return found;
}

function getProblemBlocks(content) {
  // \begin{problem}{N}{s} ... \end{problem} 단위로 분리
  const blocks = [];
  const probRegex = /\\begin\{problem\}\{([0-9]+)\}\{s\}([\s\S]*?)\\end\{problem\}/g;
  for (const m of content.matchAll(probRegex)) {
    blocks.push({ num: m[1], body: m[2] });
  }
  return blocks;
}

if (!fs.existsSync(newFile)) {
  console.error(`⚠️  신규 회차 파일 없음: ${newFile}`);
  process.exit(2);
}

const newContent = fs.readFileSync(newFile, 'utf8');
const newBlocks = getProblemBlocks(newContent);

console.log(`📄 신규 회차: ${path.basename(newFile)} (${newBlocks.length}문)`);

// 각 이전 회차에 대해, 슬롯별 통찰 추출 + 매칭
const prevData = {};
for (const pf of prevFiles) {
  if (!fs.existsSync(pf)) {
    console.error(`⚠️  이전 회차 파일 없음: ${pf}`);
    continue;
  }
  const pc = fs.readFileSync(pf, 'utf8');
  const blocks = getProblemBlocks(pc);
  prevData[path.basename(pf)] = blocks.map(b => ({
    num: b.num,
    patterns: extractMatches(b.body),
  }));
}

// 신규 회차 슬롯별로 이전 회차와 매칭
const overlaps = [];
for (const block of newBlocks) {
  const newPatterns = extractMatches(block.body);
  if (newPatterns.length === 0) continue;

  for (const [prevName, prevBlocks] of Object.entries(prevData)) {
    for (const pb of prevBlocks) {
      const common = newPatterns.filter(p => pb.patterns.includes(p));
      if (common.length >= 2) {
        // 2개 이상 공통 패턴 → 강한 중복
        overlaps.push({
          level: 'RED',
          new: `#${block.num}`,
          prev: `${prevName} #${pb.num}`,
          patterns: common,
        });
      } else if (common.length === 1) {
        overlaps.push({
          level: 'YELLOW',
          new: `#${block.num}`,
          prev: `${prevName} #${pb.num}`,
          patterns: common,
        });
      }
    }
  }
}

if (overlaps.length === 0) {
  console.log(`✅ 회차 간 통찰 중복 0건. 통과.`);
  process.exit(0);
}

const reds = overlaps.filter(o => o.level === 'RED');
const yellows = overlaps.filter(o => o.level === 'YELLOW');

console.log(`\n🔴 강한 중복 ${reds.length}건 (공통 패턴 ≥ 2)`);
console.log(`🟡 약한 중복 ${yellows.length}건 (공통 패턴 1개)\n`);

if (reds.length > 0) {
  console.log('=== 🔴 강한 중복 (재출제 권장) ===');
  for (const o of reds) {
    console.log(`  신규 ${o.new}  ↔  ${o.prev}`);
    for (const p of o.patterns) console.log(`    공통: ${p}`);
    console.log();
  }
}

if (yellows.length > 0) {
  console.log('=== 🟡 약한 중복 (검토) ===');
  // 신규 # 기준으로 그룹화
  const byNew = {};
  for (const o of yellows) {
    if (!byNew[o.new]) byNew[o.new] = [];
    byNew[o.new].push({ prev: o.prev, patterns: o.patterns });
  }
  for (const [newId, list] of Object.entries(byNew)) {
    console.log(`  신규 ${newId}:`);
    for (const item of list.slice(0, 5)) {
      console.log(`    ↔ ${item.prev}  공통: ${item.patterns.join(', ')}`);
    }
    if (list.length > 5) console.log(`    ... 외 ${list.length - 5}건`);
  }
  console.log();
}

console.log('=== 단일 출처 ===');
console.log('bank/workflow.md §10.5 — 회차 간 다양성 자동 검증 도구 v1.0 (2026-06-24)');
console.log();

if (reds.length > 0) {
  console.error(`❌ 빌드 차단: 🔴 강한 중복 ${reds.length}건. 신규 슬롯 통찰 교체 필요.`);
  process.exit(1);
}
console.log('⚠️  YELLOW 약한 중복 있음. 검토 권장 (빌드는 통과).');
process.exit(0);

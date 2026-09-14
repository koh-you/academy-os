#!/usr/bin/env node
// scripts/rpm-relabel-cm2.mjs
// RPM CM2 요약 형식 tier 재라벨링 (캘리브레이션 v1.3)
// CM2 파일은 섹션당 한 줄에 tier 명시 (문항 개별 필드 아님)

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/rpm-relabel-cm2.mjs <파일>');
  process.exit(2);
}

const filePath = args[0];
let content = fs.readFileSync(filePath, 'utf8');
let changes = 0;

// 패턴별 재라벨 (v1.3 기준)
const patterns = [
  // 1. 교과서 문제 정복하기: star_3 → star_1·2
  {
    from: /\*\*교과서 문제 정복하기\s*\(([^)]+)\)\*\*\s*—\s*tier\s*=\s*star_3/g,
    to: '**교과서 문제 정복하기 ($1)** — tier = star_1·2',
    name: '교과서 정복하기',
  },
  // 2. 유형 익히기: "tier = star_4 (유형JP·중요★ = star_5)" → "tier = star_3·4 (실력 up 별도 라벨링)"
  {
    from: /\*\*유형 익히기\s*\(([^)]+)\)\*\*\s*—\s*tier\s*=\s*star_4[^\n]*/g,
    to: '**유형 익히기 ($1)** — tier = star_3·4 (전 문항 통일 · 유형JP·중요★도 동일)',
    name: '유형 익히기',
  },
  // 3. 시험에 꼭 나오는 문제: "tier = star_4 (중요★ = star_5)" → "tier = star_3·4 (중요★도 동일)"
  {
    from: /\*\*시험에 꼭 나오는 문제\s*\(([^)]+)\)\*\*\s*—\s*tier\s*=\s*star_4[^\n]*/g,
    to: '**시험에 꼭 나오는 문제 ($1)** — tier = star_3·4 (중요★도 동일)',
    name: '시험에 꼭 나오는 문제',
  },
  // 4. 서술형 주관식: "tier = star_4" → "tier = star_3·4"
  {
    from: /\*\*서술형 주관식\s*\(([^)]+)\)\*\*\s*—\s*tier\s*=\s*star_4[^\n]*/g,
    to: '**서술형 주관식 ($1)** — tier = star_3·4 (시험에 꼭 나오는 문제 하위 · 동일)',
    name: '서술형 주관식',
  },
  // 5a. 실력 Up: "tier = star_4 또는 star_5" → "tier = star_4·5 혼재"
  {
    from: /\*\*실력 Up\s*\(([^)]+)\)\*\*\s*—\s*tier\s*=\s*star_4\s*또는\s*star_5/g,
    to: '**실력 Up ($1)** — tier = star_4·5 혼재',
    name: '실력 Up (star_4 또는 star_5)',
  },
  // 5b. 실력 Up: "tier = star_5" → "tier = star_4·5 혼재"
  {
    from: /\*\*실력 Up\s*\(([^)]+)\)\*\*\s*—\s*tier\s*=\s*star_5/g,
    to: '**실력 Up ($1)** — tier = star_4·5 혼재',
    name: '실력 Up (star_5)',
  },
];

// metadata 섹션 정합
const metaPatterns = [
  {
    from: /section_mapping:\s*\n\s*유형익히기:\s*\[[^\]]+\]\s*\n\s*시험에_꼭_나오는_문제:\s*star_4\s*\n\s*시험에_꼭_나오는_문제_실력업:\s*\[[^\]]+\]\s*\n\s*시험에_꼭_나오는_문제_서술형:\s*star_4\s*\n\s*교과서_문제_정복하기:\s*star_3/,
    to: `section_mapping:
    교과서_문제_정복하기: star_1·2
    유형익히기: star_3·4
    시험에_꼭_나오는_문제: star_3·4
    시험에_꼭_나오는_문제_서술형: star_3·4
    시험에_꼭_나오는_문제_실력업: star_4·5 혼재`,
    name: 'metadata section_mapping',
  },
];

// preamble 정책 문구 갱신
const preamblePatterns = [
  {
    from: /- \*\*교과서 문제 정복하기\*\* — 개념·공식 적용 기본 문제 \(기본 tier = star_3\)/g,
    to: '- **교과서 문제 정복하기** — 개념·공식 적용 기본 문제 (기본 tier = star_1·2 · 캘리브레이션 v1.3)',
    name: 'preamble 교과서',
  },
  {
    from: /- \*\*유형 익히기\*\* — 유형별 분류 · 대표문제 · 상중하 \(기본 tier = star_4, 유형JP·중요★ 표시는 star_5 병기\)/g,
    to: '- **유형 익히기** — 유형별 분류 · 대표문제 · 상중하 (전 문항 tier = star_3·4 · 캘리브레이션 v1.3)',
    name: 'preamble 유형',
  },
  {
    from: /- \*\*시험에 꼭 나오는 문제\*\* — 시험 빈출 \(기본 tier = star_4\)/g,
    to: '- **시험에 꼭 나오는 문제** — 시험 빈출 (기본 tier = star_3·4 · 캘리브레이션 v1.3)',
    name: 'preamble 시험',
  },
  {
    from: /- \*\*서술형 주관식\*\* — tier = star_4/g,
    to: '- **서술형 주관식** — tier = star_3·4',
    name: 'preamble 서술형',
  },
  {
    from: /- \*\*실력 Up\*\* — tier = star_4 또는 star_5 \(중요★ 표시는 star_5\)/g,
    to: '- **실력 Up** — tier = star_4·5 혼재 · 캘리브레이션 v1.3',
    name: 'preamble 실력 Up',
  },
];

const allPatterns = [...metaPatterns, ...preamblePatterns, ...patterns];
const stats = {};

for (const p of allPatterns) {
  const matches = content.match(p.from);
  const count = matches ? matches.length : 0;
  stats[p.name] = count;
  if (count > 0) {
    content = content.replace(p.from, p.to);
    changes += count;
  }
}

fs.writeFileSync(filePath, content, 'utf8');

console.log(`✅ RPM CM2 재라벨 완료: ${filePath}`);
console.log(`   총 변경: ${changes}건`);
for (const [name, cnt] of Object.entries(stats)) {
  console.log(`     - ${name}: ${cnt}건`);
}

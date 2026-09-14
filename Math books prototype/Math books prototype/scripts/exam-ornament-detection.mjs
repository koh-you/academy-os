#!/usr/bin/env node
// 시험지 임의 요소 (Ornament) 자동 감지 — v1.0
// 2026-07-26 세션 93 신설 (재구축 C · 마스터 반복 지적 계기)
//
// 배경:
//   세션 92 · 시안 A v2 정보 요소 추가 (MICRO LABEL·SECTION INDEX·UNIT CODE 배지) 마스터 지적
//   세션 93 Task #16 · Q19 CHECKLIST 안내패널 페어링·Q20 END OF ASSESSMENT 임의 추가 재발
//
// 단일 출처: bank/시리즈-조판-지침-매핑.md §5 (시리즈별 임의 요소 금지 목록)
//
// 원리:
//   1. 시험지 tex 파일 스캔
//   2. §5 금지 목록 정규식 매칭
//   3. 매칭 시 위치·컨텍스트 리포트
//
// 사용법:
//   node scripts/exam-ornament-detection.mjs <문제.tex>
// 반환 코드: 0 = GREEN (임의 요소 0건) / 1 = RED (임의 요소 감지) / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/exam-ornament-detection.mjs <문제.tex>');
  console.error('  반환 코드: 0 = GREEN / 1 = RED / 2 = 오용');
  process.exit(2);
}

const texPath = args[0];
if (!fs.existsSync(texPath)) {
  console.error(`❌ 파일 없음: ${texPath}`);
  process.exit(2);
}

// 금지 요소 목록 (SSOT §5 반영)
// 각 항목: { pattern: RegExp, label: string, why: string }
const ORNAMENTS = [
  // 진행·종결 안내 (세션 93 Task #16 지적)
  {
    pattern: /CHECKLIST/i,
    label: 'CHECKLIST 체크박스 안내',
    why: '세션 93 · Q19 우측 임의 페어링 추가 지적 · 청사진 §8에 없는 요소',
  },
  {
    pattern: /END\s+OF\s+ASSESSMENT/i,
    label: 'END OF ASSESSMENT 종결 안내',
    why: '세션 93 · Q20 하단 임의 종결 안내 지적 · 청사진에 없는 요소',
  },
  {
    pattern: /END\s+OF\s+PAPER/i,
    label: 'END OF PAPER 종결 안내',
    why: '학생 노출 부적절 · 페이지 번호와 로고로 충분',
  },
  {
    pattern: /수고하셨습니다/,
    label: '수고하셨습니다 종결 인사',
    why: '학생 시험지에 인사 요소 부적절',
  },
  {
    pattern: /남은\s*문항\s*[:：]\s*\S+\s*문항/,
    label: '남은 문항 진행 안내',
    why: '세션 93 · Q19 우측 페어 안내 지적',
  },
  {
    pattern: /다음\s*페이지에\s*마지막\s*문항이/,
    label: '다음 페이지 안내',
    why: '학생 시험지에 진행 안내 부적절',
  },
  {
    pattern: /답안지를\s*다시\s*한\s*번\s*확인/,
    label: '답안지 확인 안내',
    why: '학생 시험지에 지시 요소 부적절',
  },

  // 인덱스 라벨 (세션 92 시안 A v2 지적)
  {
    pattern: /MICRO\s*LABEL/i,
    label: 'MICRO LABEL 라인',
    why: '세션 92 v2 실패 지적 · 정보 요소 과잉',
  },
  {
    pattern: /SECTION\s*INDEX/i,
    label: 'SECTION INDEX 라벨',
    why: '세션 92 v2 실패 지적 · 정보 요소 과잉',
  },
  {
    pattern: /\\textls\[\d+\]\{\s*NO\.?\s*\d+\s*\}/i,
    label: 'NO. NN 인덱스',
    why: '세션 92 v2 실패 지적 · SECTION INDEX 계열',
  },
  {
    pattern: /\\textls\[\d+\]\{\s*SERIES\s+[A-Z]/i,
    label: 'SERIES X 라벨',
    why: '세션 92 v2 실패 지적',
  },

  // 학생 노출 부적절 (세션 92 지적)
  {
    pattern: /\\textls\[\d+\]\{\s*UNIT\s+CODE/i,
    label: 'UNIT CODE 배지',
    why: '세션 92 · CM2-GM 같은 내부 코드 학생 노출 부적절',
  },
  {
    pattern: /\{\s*CM[12]-(GM|ST|FN|RF|PL|EQ|CB|MX)\s*\}/,
    label: '내부 단원 코드 노출',
    why: 'CM2-GM 등 내부 코드 학생 노출 부적절',
  },

  // 체크박스 3개 이상 연속 (CHECKLIST 형태)
  {
    pattern: /(\$\\square\$|☐)[\s\S]{0,200}(\$\\square\$|☐)[\s\S]{0,200}(\$\\square\$|☐)/,
    label: '체크박스 3개 이상 연속',
    why: 'CHECKLIST 형태 임의 안내 요소',
  },
];

const raw = fs.readFileSync(texPath, 'utf8');
const lines = raw.split('\n');

// 주석·문자열 제거
function stripComments(text) {
  return text
    .split('\n')
    .map((line) => {
      const commentIdx = line.indexOf('%');
      if (commentIdx === -1) return line;
      // \% (이스케이프)는 유지
      let idx = commentIdx;
      while (idx > 0 && line[idx - 1] === '\\') {
        const next = line.indexOf('%', idx + 1);
        if (next === -1) return line;
        idx = next;
      }
      return line.slice(0, idx);
    })
    .join('\n');
}

const stripped = stripComments(raw);
const strippedLines = stripped.split('\n');

const findings = [];

for (const orn of ORNAMENTS) {
  for (let i = 0; i < strippedLines.length; i++) {
    const line = strippedLines[i];
    if (orn.pattern.test(line)) {
      // 원 라인의 위치·컨텍스트
      findings.push({
        line: i + 1,
        label: orn.label,
        why: orn.why,
        context: lines[i] ? lines[i].trim().slice(0, 100) : '',
      });
    }
  }

  // 다중 라인 (체크박스 3개 연속 등)
  if (orn.pattern.multiline || orn.pattern.source.includes('[\\s\\S]')) {
    // 이미 라인별 단일 매칭에서 검사 · 다중 라인 매칭은 전체 텍스트 검사
    const globalMatch = stripped.match(orn.pattern);
    if (globalMatch && !findings.some((f) => f.label === orn.label)) {
      const idx = stripped.indexOf(globalMatch[0]);
      const before = stripped.slice(0, idx);
      const lineNum = before.split('\n').length;
      findings.push({
        line: lineNum,
        label: orn.label,
        why: orn.why,
        context: globalMatch[0].slice(0, 100).replace(/\n/g, ' '),
      });
    }
  }
}

// 리포트 출력
console.log(`\n📋 시험지 임의 요소 감지 결과 — ${texPath}`);
console.log(`   총 감지: ${findings.length}건\n`);

if (findings.length === 0) {
  console.log('✅ GREEN — 임의 요소 감지 없음. 청사진 §8 배치 준수.');
  process.exit(0);
}

console.log('🔴 RED — 임의 요소 감지. 정정 필수.');
console.log('   단일 출처: bank/시리즈-조판-지침-매핑.md §5\n');

for (const f of findings) {
  console.log(`🔴 [line ${f.line}] ${f.label}`);
  console.log(`   Why: ${f.why}`);
  if (f.context) console.log(`   context: ${f.context}`);
  console.log('');
}

console.log('=== 정정 지침 ===');
console.log('1. 감지된 요소 완전 삭제 (세션 92·93 지적 재발)');
console.log('2. 청사진 §8 page_layout 원안 준수 (임의 페어링·안내 추가 금지)');
console.log('3. 정점 문항 (Q19·Q20)에 우측 페어 없을 시 좌측 단독 배치');

process.exit(1);

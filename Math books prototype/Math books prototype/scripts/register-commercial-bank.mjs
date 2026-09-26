#!/usr/bin/env node
// scripts/register-commercial-bank.mjs
//
// 시판 책 카탈로그(13-CM2·14-CM1) 본문 파싱하여 bank/problems/SRC-*.md 등록.
// 사용: node scripts/register-commercial-bank.mjs

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');

const CATALOG_14 = join(PROJECT_ROOT, 'bank', '4점-패턴-카탈로그', '14-CM1-시판-진정변별.md');
const CATALOG_13 = join(PROJECT_ROOT, 'bank', '4점-패턴-카탈로그', '13-CM2-진정변별-후보.md');

// 책 이름 → key + 풀네임 매핑 (순서 중요 — 긴 이름 먼저 매칭)
const BOOK_DEFS = [
  { keyword: '블랙라벨', key: 'BL', fullName: '블랙라벨 22개정 공통수학' },
  { keyword: '1등급마스터', key: '1GM', fullName: '1등급마스터 22개정 공통수학' },
  { keyword: '1등급 마스터', key: '1GM', fullName: '1등급마스터 22개정 공통수학' },
  { keyword: '일품', key: 'IL', fullName: '일품 공통수학' },
  { keyword: '절대등급', key: 'AB', fullName: '절대등급 공통수학' },
  { keyword: '고쟁이', key: 'GJ', fullName: '고쟁이 공통수학' },
  { keyword: '플래티넘', key: 'PT', fullName: '플래티넘 공통수학' },
  { keyword: '일등급만들기', key: '1MK', fullName: '일등급만들기 공통수학' },
  { keyword: '일등급 만들기', key: '1MK', fullName: '일등급만들기 공통수학' },
  { keyword: '일등급수학', key: '1SM', fullName: '일등급수학 공통수학' },
  { keyword: '일등급 수학', key: '1SM', fullName: '일등급수학 공통수학' },
  { keyword: '올림포스', key: 'OL', fullName: '올림포스 공통수학' },
  { keyword: 'EBS', key: 'EBS', fullName: 'EBS 공통수학' }
];

// 단원 키워드 매핑 (순서 중요)
const UNIT_DEFS = [
  { keyword: 'CM1-PL', code: 'CM1-PL' },
  { keyword: 'CM1-EQ', code: 'CM1-EQ' },
  { keyword: 'CM1-CB', code: 'CM1-CB' },
  { keyword: 'CM1-MX', code: 'CM1-MX' },
  { keyword: 'CM2-GM', code: 'CM2-GM' },
  { keyword: 'CM2-ST', code: 'CM2-ST' },
  { keyword: 'CM2-FN', code: 'CM2-FN' },
  { keyword: 'CM2-RF', code: 'CM2-RF' },
  { keyword: '다항식', code: 'CM1-PL' },
  { keyword: '인수분해', code: 'CM1-PL' },
  { keyword: '나머지정리', code: 'CM1-PL' },
  { keyword: '복소수', code: 'CM1-EQ' },
  { keyword: '이차방정식', code: 'CM1-EQ' },
  { keyword: '복소수와 이차방정식', code: 'CM1-EQ' },
  { keyword: '판별식', code: 'CM1-EQ' },
  { keyword: '근과 계수', code: 'CM1-EQ' },
  { keyword: '이차함수', code: 'CM1-EQ' },
  { keyword: '여러방정식', code: 'CM1-EQ' },
  { keyword: '여러 방정식', code: 'CM1-EQ' },
  { keyword: '여러 부등식', code: 'CM1-EQ' },
  { keyword: '일차부등식', code: 'CM1-EQ' },
  { keyword: '이차부등식', code: 'CM1-EQ' },
  { keyword: '방정식', code: 'CM1-EQ' },
  { keyword: '부등식', code: 'CM1-EQ' },
  { keyword: '경우의 수', code: 'CM1-CB' },
  { keyword: '순열과 조합', code: 'CM1-CB' },
  { keyword: '순열', code: 'CM1-CB' },
  { keyword: '조합', code: 'CM1-CB' },
  { keyword: '행렬과 그 연산', code: 'CM1-MX' },
  { keyword: '행렬', code: 'CM1-MX' },
  { keyword: '평면좌표', code: 'CM2-GM' },
  { keyword: '직선의 방정식', code: 'CM2-GM' },
  { keyword: '원의 방정식', code: 'CM2-GM' },
  { keyword: '도형의 이동', code: 'CM2-GM' },
  { keyword: '도형의 방정식', code: 'CM2-GM' },
  { keyword: '집합과 명제', code: 'CM2-ST' },
  { keyword: '집합의 연산', code: 'CM2-ST' },
  { keyword: '집합', code: 'CM2-ST' },
  { keyword: '명제', code: 'CM2-ST' },
  { keyword: '함수의 뜻', code: 'CM2-FN' },
  { keyword: '합성함수', code: 'CM2-FN' },
  { keyword: '역함수', code: 'CM2-FN' },
  { keyword: '유리함수', code: 'CM2-RF' },
  { keyword: '무리함수', code: 'CM2-RF' },
  { keyword: '유리', code: 'CM2-RF' },
  { keyword: '무리', code: 'CM2-RF' }
];

function detectBook(headerText) {
  for (const def of BOOK_DEFS) {
    if (headerText.includes(def.keyword)) return def;
  }
  return null;
}

function detectUnit(headerText) {
  for (const def of UNIT_DEFS) {
    if (headerText.includes(def.keyword)) return def.code;
  }
  return null;
}

function parseStarFromGrade(grade) {
  const m = grade.match(/★\s*([1-5])/);
  return m ? parseInt(m[1]) : null;
}

function parseInsights(insightStr) {
  const out = {};
  const re1 = /(?:I-)?([A-Z]+)\s*\(\s*(\d)\s*\)/g;
  let m;
  while ((m = re1.exec(insightStr)) !== null) {
    if (m[1].length <= 4) out[m[1]] = parseInt(m[2]);
  }
  return out;
}

function findCellByMatch(cells, regex) {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].match(regex)) return { idx: i, val: cells[i] };
  }
  return null;
}

function splitTableRow(line) {
  const PH = '';
  const norm = line.replace(/\\\|/g, PH);
  const cells = norm.split('|').map(s => s.trim().replace(new RegExp(PH, 'g'), '|'));
  while (cells.length > 0 && cells[0] === '') cells.shift();
  while (cells.length > 0 && cells[cells.length - 1] === '') cells.pop();
  return cells;
}

async function parseCatalog(catalogPath) {
  const text = await readFile(catalogPath, 'utf-8');
  const lines = text.split('\n');

  let currentBook = null;
  let currentUnit = null;
  let inTable = false;
  let counterByKey = {};
  const records = [];

  for (const line of lines) {
    // header 매칭 (### 또는 ####)
    const head = line.match(/^#{2,4}\s+(?:\d+\.\d+(?:\.\d+)?\s+)?(.+)$/);
    if (head) {
      const headerText = head[1];
      const book = detectBook(headerText);
      const unit = detectUnit(headerText);
      if (book) currentBook = book;
      if (unit) currentUnit = unit;
      inTable = false;
      continue;
    }
    // 표 시작 인식
    if (line.match(/^\|\s*#\s*\|/) || line.match(/^\|\s*#\s*\|.*발문/) || line.match(/^\|\s*#\s*\|.*요지/)) {
      inTable = true;
      continue;
    }
    if (line.match(/^\|[\s\-:|]+\|$/)) continue;
    if (!inTable) continue;
    if (!line.startsWith('|')) {
      inTable = false;
      continue;
    }
    if (!currentBook || !currentUnit) continue;

    const cells = splitTableRow(line);
    if (cells.length < 5) continue;
    // 첫 cell이 번호여야 함 (숫자·기호·접두어 포함 가능, but [ 시작은 보통 [기출] 같은 별 표시 — 그래도 진행)
    if (!cells[0].match(/^[\d가-힣\[\(]/)) continue;

    const gradeCell = findCellByMatch(cells, /★\s*[1-5]/);
    if (!gradeCell) continue;
    const star = parseStarFromGrade(gradeCell.val);

    const insightCell = findCellByMatch(cells, /[A-Z]+\s*\(\s*\d\s*\)/);
    const insights = insightCell ? parseInsights(insightCell.val) : {};

    const scoreCell = findCellByMatch(cells, /^\*?\*?(\d+\.\d{1,2})\*?\*?$/);
    let score = null;
    if (scoreCell) {
      const sm = scoreCell.val.match(/(\d+\.\d{1,2})/);
      if (sm) score = parseFloat(sm[1]);
    }

    const summary = cells[1] || '';

    const key = `${currentBook.key}-${currentUnit}`;
    counterByKey[key] = (counterByKey[key] || 0) + 1;
    const serial = String(counterByKey[key]).padStart(3, '0');
    const unitShort = currentUnit.split('-')[1];
    const id = `SRC-${currentBook.key}-${unitShort}-${serial}`;

    records.push({
      id,
      unit: currentUnit,
      bookKey: currentBook.key,
      bookFullName: currentBook.fullName,
      rawNum: cells[0],
      summary,
      insights,
      score,
      star
    });
  }
  return records;
}

function buildYaml(r) {
  const insightsList = Object.entries(r.insights);
  const insightsStr = insightsList.map(([k, v]) => `${k}(${v})`).join('·');
  const insightsYaml = insightsList.length > 0
    ? `\n    insights_depth:\n      ${insightsList.map(([k, v]) => `I-${k}: ${v}`).join('\n      ')}`
    : '';
  const scoreYaml = r.score != null ? `\n    score: ${r.score}` : '';
  const starYaml = r.star != null ? r.star : 'null';
  const safeSummary = r.summary.replace(/'/g, "''").substring(0, 200);
  const safeRawNum = r.rawNum.replace(/'/g, "''");

  return `---
id: ${r.id}
unit: ${r.unit}
type: SRC-${r.bookKey}
type_in_source: '${safeSummary}'
status: meta_only
external_labels:
  - source: ${r.bookFullName}
    cohort_type: commercial_textbook
    book_key: ${r.bookKey}
    item_number: '${safeRawNum}'
    insights_summary: '${insightsStr}'${scoreYaml}
    cohort_normalized_star: ${starYaml}${insightsYaml}
patterns_1x: []
homebase_for_1x: []
frequency: null
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 시판 책 ${r.bookFullName} 정점 표본. 본문/풀이 미등록 (저작권 정책). 통찰 라벨링·★ 메타만 등록.)*

**발문 요지**: ${r.summary}

**원 출처**: ${r.bookFullName} / 항목 ${r.rawNum}${r.score ? ` / score: ${r.score}` : ''}${insightsStr ? ` / 통찰: ${insightsStr}` : ''}
`;
}

async function main() {
  const records14 = await parseCatalog(CATALOG_14);
  const records13 = await parseCatalog(CATALOG_13);
  console.log(`14-CM1 parsed: ${records14.length}`);
  console.log(`13-CM2 parsed: ${records13.length}`);

  const allRecords = [...records14, ...records13];
  let written = 0;
  for (const r of allRecords) {
    const yamlBody = buildYaml(r);
    await writeFile(join(BANK_DIR, `${r.id}.md`), yamlBody, 'utf-8');
    written++;
  }
  console.log(`Wrote ${written} SRC-*.md files to bank/problems/`);

  const byBookUnit = {};
  for (const r of allRecords) {
    const k = `${r.bookKey}-${r.unit}`;
    byBookUnit[k] = (byBookUnit[k] || 0) + 1;
  }
  console.log('책×단원별 등록:');
  for (const [k, n] of Object.entries(byBookUnit).sort()) {
    console.log(`  ${k}: ${n}`);
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });

#!/usr/bin/env node
// scripts/register-exam-bank.mjs
//
// 학평·평가원·EBS 카탈로그(11·16·17) 파싱하여 bank/problems/EX-*.md 등록.
// 사용: node scripts/register-exam-bank.mjs

import { readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');

const CATALOG_11 = join(PROJECT_ROOT, 'bank', '4점-패턴-카탈로그', '11-S5-진정변별-후보.md');
const CATALOG_16 = join(PROJECT_ROOT, 'bank', '4점-패턴-카탈로그', '16-수능평가원-본기출.md');
const CATALOG_17 = join(PROJECT_ROOT, 'bank', '4점-패턴-카탈로그', '17-EBS-CM1-교차검증.md');

const STAR_FOUR = 4;
const STAR_FIVE = 5;

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
  { keyword: '나머지', code: 'CM1-PL' },
  { keyword: '복소수', code: 'CM1-EQ' },
  { keyword: '이차방정식', code: 'CM1-EQ' },
  { keyword: '이차함수', code: 'CM1-EQ' },
  { keyword: '여러 방정식', code: 'CM1-EQ' },
  { keyword: '여러 부등식', code: 'CM1-EQ' },
  { keyword: '여러 가지 방정식', code: 'CM1-EQ' },
  { keyword: '여러 가지 부등식', code: 'CM1-EQ' },
  { keyword: '이차방정식과 이차함수', code: 'CM1-EQ' },
  { keyword: '이차부등식', code: 'CM1-EQ' },
  { keyword: '일차부등식', code: 'CM1-EQ' },
  { keyword: '방정식', code: 'CM1-EQ' },
  { keyword: '부등식', code: 'CM1-EQ' },
  { keyword: '경우의 수', code: 'CM1-CB' },
  { keyword: '순열과 조합', code: 'CM1-CB' },
  { keyword: '순열', code: 'CM1-CB' },
  { keyword: '조합', code: 'CM1-CB' },
  { keyword: '행렬', code: 'CM1-MX' },
  { keyword: '도형의 방정식', code: 'CM2-GM' },
  { keyword: '평면좌표', code: 'CM2-GM' },
  { keyword: '직선의 방정식', code: 'CM2-GM' },
  { keyword: '원의 방정식', code: 'CM2-GM' },
  { keyword: '도형의 이동', code: 'CM2-GM' },
  { keyword: '집합과 명제', code: 'CM2-ST' },
  { keyword: '집합', code: 'CM2-ST' },
  { keyword: '명제', code: 'CM2-ST' },
  { keyword: '함수', code: 'CM2-FN' },
  { keyword: '유리함수', code: 'CM2-RF' },
  { keyword: '무리함수', code: 'CM2-RF' },
  { keyword: '유리식', code: 'CM2-RF' },
  { keyword: '무리식', code: 'CM2-RF' }
];

function detectUnit(headerText) {
  for (const def of UNIT_DEFS) {
    if (headerText.includes(def.keyword)) return def.code;
  }
  return null;
}

function parseStarFromGrade(grade) {
  const fourStars = grade.match(/★\s*([1-5])/);
  if (fourStars) return parseInt(fourStars[1]);
  if (grade.match(/★★★★★/)) return 5;
  if (grade.match(/★★★★(?!★)/)) return 4;
  return null;
}

function parseInsights(insightStr) {
  const out = {};
  const re = /(?:I-)?([A-Z]+)\s*(?:\(\s*(\d)\s*\)|×\s*(\d))/g;
  let m;
  while ((m = re.exec(insightStr)) !== null) {
    if (m[1].length <= 4) {
      const depth = parseInt(m[2] || m[3]);
      out[m[1]] = depth;
    }
  }
  return out;
}

function splitTableRow(line) {
  const PH = '';
  const norm = line.replace(/\\\|/g, PH);
  const cells = norm.split('|').map(s => s.trim().replace(new RegExp(PH, 'g'), '|'));
  while (cells.length > 0 && cells[0] === '') cells.shift();
  while (cells.length > 0 && cells[cells.length - 1] === '') cells.pop();
  return cells;
}

function findCellByMatch(cells, regex) {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].match(regex)) return { idx: i, val: cells[i] };
  }
  return null;
}

// === 11-S5 텍스트 블록 파서 ===
async function parse11(catalogPath) {
  const text = await readFile(catalogPath, 'utf-8');
  const lines = text.split('\n');
  const records = [];
  let current = null;
  let currentUnit = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // 단원 감지
    const head = line.match(/^##\s+\d+\.\s+(.+)|^###\s+\d+\.\d+\s+(.+)/);
    if (head) {
      const ht = head[1] || head[2];
      const unit = detectUnit(ht);
      if (unit) currentUnit = unit;
    }
    // 문항 블록 시작: #### NNN  ★★★★ — ...
    const blockHead = line.match(/^####\s+(\d+)\s+★+\s*(.*)$/);
    if (blockHead) {
      if (current) records.push(current);
      current = {
        num: blockHead[1],
        sourceInfo: blockHead[2].trim(),
        source: null,
        type: null,
        summary: null,
        insights: {},
        insight_score: null,
        keyPoint: null,
        refinement: null,
        anchorUse: null,
        unit: currentUnit
      };
      const headBlock = line;
      current.star = parseStarFromGrade(headBlock) || 5;
      continue;
    }
    if (!current) continue;

    const sourceM = line.match(/^- \*\*출처\*\*:\s*(.+)$/);
    if (sourceM) current.source = sourceM[1].trim();
    const typeM = line.match(/^- \*\*유형\*\*:\s*(.+)$/);
    if (typeM) {
      current.type = typeM[1].trim();
      const unit = detectUnit(typeM[1]);
      if (unit) current.unit = unit;
    }
    const sumM = line.match(/^- \*\*발문 요지\*\*:\s*(.+)$/);
    if (sumM) current.summary = sumM[1].trim();
    const insightM = line.match(/^- \*\*통찰 라벨\*\*:\s*(.+)$/);
    if (insightM) {
      const insightStr = insightM[1];
      current.insights = parseInsights(insightStr);
      const scoreM = insightStr.match(/insight_score\s*=\s*(\d+)/);
      if (scoreM) current.insight_score = parseInt(scoreM[1]);
    }
    const keyM = line.match(/^- \*\*변별 핵심\*\*:\s*(.+)$/);
    if (keyM) current.keyPoint = keyM[1].trim();
    const refM = line.match(/^- \*\*세련도 패턴\*\*:\s*(.+)$/);
    if (refM) current.refinement = refM[1].trim();
    const ancM = line.match(/^- \*\*우리 앵커 활용\*\*:\s*(.+)$/);
    if (ancM) current.anchorUse = ancM[1].trim();
  }
  if (current) records.push(current);
  return records;
}

// === 16 + 17 표 파서 (시판과 같은 형식) ===
async function parseTable(catalogPath) {
  const text = await readFile(catalogPath, 'utf-8');
  const lines = text.split('\n');
  let currentUnit = null;
  let inTable = false;
  const records = [];

  for (const line of lines) {
    const head = line.match(/^#{2,4}\s+(?:\d+\.\d+(?:\.\d+)?\s+)?(.+)$/);
    if (head) {
      const ht = head[1];
      const unit = detectUnit(ht);
      if (unit) currentUnit = unit;
      inTable = false;
      continue;
    }
    if (line.match(/^\|\s*#\s*\|/)) { inTable = true; continue; }
    if (line.match(/^\|[\s\-:|]+\|$/)) continue;
    if (!inTable) continue;
    if (!line.startsWith('|')) { inTable = false; continue; }
    if (!currentUnit) continue;

    const cells = splitTableRow(line);
    if (cells.length < 4) continue;
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

    records.push({
      num: cells[0],
      summary: cells[1] || '',
      insights,
      score,
      star,
      unit: currentUnit
    });
  }
  return records;
}

function buildYaml11(r, counter) {
  const id = `EX-MT-${String(counter).padStart(3, '0')}`;
  const insightsList = Object.entries(r.insights);
  const insightsStr = insightsList.map(([k, v]) => `${k}(${v})`).join('·');
  const insightsYaml = insightsList.length > 0
    ? `\n    insights_depth:\n      ${insightsList.map(([k, v]) => `I-${k}: ${v}`).join('\n      ')}`
    : '';
  const scoreYaml = r.insight_score != null ? `\n    insight_score: ${r.insight_score}` : '';
  const safeSummary = (r.summary || '').replace(/'/g, "''").substring(0, 200);
  const safeSource = (r.source || '').replace(/'/g, "''");
  const safeType = (r.type || '').replace(/'/g, "''");
  const safeKey = (r.keyPoint || '').replace(/'/g, "''").substring(0, 300);
  const starYaml = r.star != null ? r.star : 'null';

  return `---
id: ${id}
unit: ${r.unit || 'unknown'}
type: EX-MT
type_in_source: '${safeSummary}'
status: meta_only
external_labels:
  - source: 마더텅 학평 [고1-1] 공통수학1
    cohort_type: hagpyung_top
    catalog_number: '${r.num}'
    source_detail: '${safeSource}'
    type_label: '${safeType}'
    insights_summary: '${insightsStr}'${scoreYaml}
    cohort_normalized_star: ${starYaml}${insightsYaml}
patterns_1x: []
homebase_for_1x: []
frequency: null
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — 마더텅 학평 ★★★★ 88문 정점. 본문/풀이 미등록 (정책). 통찰 라벨링·세련도 패턴 메타.)*

**발문 요지**: ${r.summary || ''}

**변별 핵심**: ${r.keyPoint || ''}

**세련도 패턴**: ${r.refinement || ''}

**원 출처**: ${r.source || ''} / 카탈로그 #${r.num} / 통찰: ${insightsStr || '-'}
`;
}

function buildYamlTable(r, prefix, sourceName, counter) {
  const id = `EX-${prefix}-${String(counter).padStart(3, '0')}`;
  const insightsList = Object.entries(r.insights);
  const insightsStr = insightsList.map(([k, v]) => `${k}(${v})`).join('·');
  const insightsYaml = insightsList.length > 0
    ? `\n    insights_depth:\n      ${insightsList.map(([k, v]) => `I-${k}: ${v}`).join('\n      ')}`
    : '';
  const scoreYaml = r.score != null ? `\n    score: ${r.score}` : '';
  const starYaml = r.star != null ? r.star : 'null';
  const safeSummary = (r.summary || '').replace(/'/g, "''").substring(0, 200);
  const safeNum = r.num.replace(/'/g, "''");

  return `---
id: ${id}
unit: ${r.unit}
type: EX-${prefix}
type_in_source: '${safeSummary}'
status: meta_only
external_labels:
  - source: ${sourceName}
    cohort_type: exam_or_ebs
    item_number: '${safeNum}'
    insights_summary: '${insightsStr}'${scoreYaml}
    cohort_normalized_star: ${starYaml}${insightsYaml}
patterns_1x: []
homebase_for_1x: []
frequency: null
grade_origin: 고1
created: '2026-06-24'
---

*(status: meta_only — ${sourceName} 정점 표본. 본문/풀이 미등록 (정책).)*

**발문 요지**: ${r.summary}

**원 출처**: ${sourceName} / 항목 ${r.num}${r.score ? ` / score: ${r.score}` : ''}${insightsStr ? ` / 통찰: ${insightsStr}` : ''}
`;
}

async function main() {
  const records11 = await parse11(CATALOG_11);
  const records16 = await parseTable(CATALOG_16);
  const records17 = await parseTable(CATALOG_17);

  console.log(`11-S5 마더텅 학평 parsed: ${records11.length}`);
  console.log(`16-수능평가원 parsed: ${records16.length}`);
  console.log(`17-EBS 올림포스 parsed: ${records17.length}`);

  let written = 0;
  let c = 0;
  for (const r of records11) {
    c++;
    await writeFile(join(BANK_DIR, `EX-MT-${String(c).padStart(3, '0')}.md`), buildYaml11(r, c), 'utf-8');
    written++;
  }
  c = 0;
  for (const r of records16) {
    c++;
    await writeFile(join(BANK_DIR, `EX-EAR-${String(c).padStart(3, '0')}.md`), buildYamlTable(r, 'EAR', '수능·평가원 본기출', c), 'utf-8');
    written++;
  }
  c = 0;
  for (const r of records17) {
    c++;
    await writeFile(join(BANK_DIR, `EX-EBS-${String(c).padStart(3, '0')}.md`), buildYamlTable(r, 'EBS', 'EBS 올림포스 공통수학1', c), 'utf-8');
    written++;
  }
  console.log(`\nWrote ${written} EX-*.md files`);

  const byUnit = {};
  for (const r of [...records11, ...records16, ...records17]) {
    const u = r.unit || 'unknown';
    byUnit[u] = (byUnit[u] || 0) + 1;
  }
  console.log('단원별:');
  for (const [u, n] of Object.entries(byUnit).sort()) {
    console.log(`  ${u}: ${n}`);
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });

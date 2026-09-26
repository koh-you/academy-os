#!/usr/bin/env node
// append-anchors-samples.mjs (v1.0, 2026-06-25)
// data/all-premium-samples.json → bank/anchors/{단원}.md 끝에 "라벨링 표본 슬롯 (자동 인용)" 섹션 추가
//
// 마커 기반 안전 갱신:
//   <!-- BEGIN: SAMPLE-CITATIONS -->
//   ... (자동 갱신 영역)
//   <!-- END: SAMPLE-CITATIONS -->
//
// 마커가 없으면 파일 끝에 새로 추가. 기존 build-anchors.mjs 출력은 보존.
//
// 사용법: node scripts/append-anchors-samples.mjs [--data path] [--dry-run]
//
// 섹션 구성 (단원별):
//   1. 표본 통계 (총·premium·strict·9.00 TOP·라벨링 버전 분포)
//   2. 9.00 TOP 슬롯 (모든 통찰 깊이 3)
//   3. strict ★ 5 최상위 슬롯 (count≥5+max=3+score≥8.5)
//   4. 통찰 유형별 대표 슬롯 (8유형 각각 score 상위 3문)

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
function getOpt(name) {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
}
const DATA_PATH = getOpt('--data') || 'data/all-premium-samples.json';
const DRY_RUN = args.includes('--dry-run');
const ANCHORS_DIR = 'bank/anchors';

const BEGIN_MARKER = '<!-- BEGIN: SAMPLE-CITATIONS -->';
const END_MARKER = '<!-- END: SAMPLE-CITATIONS -->';

if (!fs.existsSync(DATA_PATH)) {
  console.error(`⚠️  JSON 없음: ${DATA_PATH}. 먼저 build-premium-samples.mjs 실행 필요`);
  process.exit(2);
}

const json = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
const samples = json.samples || [];

// 단원별 그룹화
const byUnit = {};
for (const s of samples) {
  if (!s.unit) continue;
  if (!byUnit[s.unit]) byUnit[s.unit] = [];
  byUnit[s.unit].push(s);
}

function truncate(s, n) {
  if (!s) return '';
  s = String(s).replace(/\n/g, ' ').trim();
  return s.length <= n ? s : s.slice(0, n - 1) + '…';
}

function formatInsights(arr) {
  if (!arr) return '';
  return arr.map(it => it.depth != null ? `${it.type}(${it.depth})` : it.type).join('·');
}

function escapeTableCell(s) {
  if (!s) return '';
  return String(s).replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function formatScore(s) {
  if (s == null) return '—';
  return String(s);
}

function tableRow(cells) {
  return '| ' + cells.map(c => escapeTableCell(c)).join(' | ') + ' |';
}

function buildSection(unit, slots) {
  const lines = [];
  lines.push(BEGIN_MARKER);
  lines.push('');
  lines.push(`## 라벨링 표본 슬롯 (자동 인용)`);
  lines.push('');
  lines.push(`> 생성: \`node scripts/append-anchors-samples.mjs\` (재실행 시 마커 내부만 갱신)`);
  lines.push(`> 데이터: \`${DATA_PATH}\` (build-premium-samples.mjs v1.4+, 카탈로그 11·13·14·16·17번 통합)`);
  lines.push(`> 갱신: ${new Date().toISOString().slice(0, 10)}`);
  lines.push('');

  // 1. 통계
  const total = slots.length;
  const premium = slots.filter(s => s.is_premium).length;
  const strict = slots.filter(s => s.is_strict).length;
  const top = slots.filter(s => s.is_top).length;
  const v32 = slots.filter(s => s.labeling_version !== 'v3.0').length;
  const v30 = slots.filter(s => s.labeling_version === 'v3.0').length;
  // 출처별
  const bySrc = {};
  for (const s of slots) {
    const k = s.source || 'unknown';
    bySrc[k] = (bySrc[k] || 0) + 1;
  }
  const srcRows = Object.entries(bySrc).sort((a, b) => b[1] - a[1]);

  lines.push(`### 1. ${unit} 표본 통계`);
  lines.push('');
  lines.push(`- 총 ${total}문 · **★ 5 최상위 (broad) ${premium}** · **strict ${strict}** · **9.00 TOP ${top}**`);
  lines.push(`- 라벨링 버전: v3.2 깊이 ${v32} · v3.0 카운트 ${v30}`);
  lines.push('');
  lines.push(`**출처별 분포** (상위 6종)`);
  lines.push('');
  lines.push(tableRow(['출처', '문항']));
  lines.push(tableRow(['---', '--:']));
  for (const [src, n] of srcRows.slice(0, 6)) {
    lines.push(tableRow([src, String(n)]));
  }
  lines.push('');

  // 2. 9.00 TOP
  const topSlots = slots.filter(s => s.is_top).sort((a, b) => (b.score || 0) - (a.score || 0));
  lines.push(`### 2. 9.00 TOP — 모든 통찰 깊이 3 (${topSlots.length}문)`);
  lines.push('');
  if (topSlots.length === 0) {
    lines.push('*(이 단원의 9.00 TOP 슬롯 없음 — 시판 표본 한계 또는 학평 표본 미정독)*');
  } else {
    lines.push(tableRow(['id', '출처', '통찰', '발문 요지']));
    lines.push(tableRow(['---', '---', '---', '---']));
    for (const s of topSlots) {
      lines.push(tableRow([
        s.id || '',
        s.source || '',
        formatInsights(s.insights),
        truncate(s.발문요지, 60),
      ]));
    }
  }
  lines.push('');

  // 3. strict ★ 5 최상위
  const strictSlots = slots.filter(s => s.is_strict && !s.is_top)
    .sort((a, b) => (b.score || 0) - (a.score || 0));
  lines.push(`### 3. strict ★ 5 최상위 — count≥5 + max=3 + score≥8.5 (${strictSlots.length}문, 9.00 TOP 제외)`);
  lines.push('');
  if (strictSlots.length === 0) {
    lines.push('*(이 단원의 strict 슬롯 없음)*');
  } else {
    const showMax = 25;
    const shown = strictSlots.slice(0, showMax);
    lines.push(tableRow(['id', '출처', '통찰', 'score', '발문 요지']));
    lines.push(tableRow(['---', '---', '---', '--:', '---']));
    for (const s of shown) {
      lines.push(tableRow([
        s.id || '',
        s.source || '',
        formatInsights(s.insights),
        formatScore(s.score),
        truncate(s.발문요지, 55),
      ]));
    }
    if (strictSlots.length > showMax) {
      lines.push('');
      lines.push(`*… 외 ${strictSlots.length - showMax}문 더 (검색: \`node scripts/sample-search.mjs --unit ${unit} --strict\`)*`);
    }
  }
  lines.push('');

  // 4. 통찰 유형별 대표 슬롯 (8유형 각 3문)
  const INSIGHT_TYPES = ['XU', 'BW', 'RT', 'EQV', 'MI', 'PD', 'SYM', 'CON'];
  const INSIGHT_NAMES = {
    'XU': 'I-XU 단원 결합',
    'BW': 'I-BW 역방향',
    'RT': 'I-RT 표현 전환',
    'EQV': 'I-EQV 동치 변환',
    'MI': 'I-MI 다중 해석',
    'PD': 'I-PD 패턴 발견',
    'SYM': 'I-SYM 대칭성',
    'CON': 'I-CON 조건 통합',
  };
  lines.push(`### 4. 통찰 유형별 대표 슬롯 (8유형 × score 상위 3문)`);
  lines.push('');
  for (const t of INSIGHT_TYPES) {
    const filtered = slots
      .filter(s => (s.insights || []).some(it => it.type === t))
      .filter(s => s.score != null)
      .sort((a, b) => {
        // 깊이 3에서 t가 등장한 슬롯 우선
        const depthA = Math.max(...((a.insights || []).filter(it => it.type === t).map(it => it.depth || 0)));
        const depthB = Math.max(...((b.insights || []).filter(it => it.type === t).map(it => it.depth || 0)));
        if (depthB !== depthA) return depthB - depthA;
        return (b.score || 0) - (a.score || 0);
      })
      .slice(0, 3);
    lines.push(`**${INSIGHT_NAMES[t]}** — ${filtered.length > 0 ? `${filtered.length}문` : '없음'}`);
    lines.push('');
    if (filtered.length === 0) {
      lines.push('*(이 단원의 ' + t + ' 슬롯 없음)*');
      lines.push('');
      continue;
    }
    lines.push(tableRow(['id', '출처', '통찰', 'score', '발문 요지']));
    lines.push(tableRow(['---', '---', '---', '--:', '---']));
    for (const s of filtered) {
      lines.push(tableRow([
        s.id || '',
        s.source || '',
        formatInsights(s.insights),
        formatScore(s.score),
        truncate(s.발문요지, 50),
      ]));
    }
    lines.push('');
  }

  lines.push(`---`);
  lines.push('');
  lines.push(`> 검색 CLI: \`node scripts/sample-search.mjs --unit ${unit} [--strict|--top|--premium|--insights LIST|--source NAME]\``);
  lines.push('');
  lines.push(END_MARKER);

  return lines.join('\n');
}

// 메인
const stats = { updated: 0, created: 0, skipped: 0 };
for (const unit of Object.keys(byUnit).sort()) {
  const slots = byUnit[unit];
  const newSection = buildSection(unit, slots);
  const filePath = path.join(ANCHORS_DIR, `${unit}.md`);

  if (!fs.existsSync(filePath)) {
    // 앵커 파일이 없으면 새로 작성 (헤더 + 표본 인용 섹션만)
    const content = `# ${unit} — 앵커 풀\n\n> 본 파일은 \`scripts/append-anchors-samples.mjs\`로 자동 생성된 표본 인용 섹션만 포함합니다.\n> bank/problems 기반 ★ 1~5 앵커는 \`scripts/build-anchors.mjs\` 실행 후 추가됩니다.\n\n${newSection}\n`;
    if (DRY_RUN) {
      console.log(`[DRY] create ${filePath} (${slots.length} samples)`);
    } else {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    stats.created++;
    continue;
  }

  const existing = fs.readFileSync(filePath, 'utf8');
  let updated;
  if (existing.includes(BEGIN_MARKER) && existing.includes(END_MARKER)) {
    // 마커 내부만 교체
    const re = new RegExp(`${BEGIN_MARKER}[\\s\\S]*?${END_MARKER}`);
    updated = existing.replace(re, newSection);
  } else {
    // 마커 없음 → 파일 끝에 추가
    const sep = existing.endsWith('\n') ? '\n' : '\n\n';
    updated = existing + sep + newSection + '\n';
  }

  if (updated === existing) {
    stats.skipped++;
    continue;
  }
  if (DRY_RUN) {
    console.log(`[DRY] update ${filePath} (${slots.length} samples)`);
  } else {
    fs.writeFileSync(filePath, updated, 'utf8');
  }
  stats.updated++;
}

console.log(`✓ append-anchors-samples 완료`);
console.log(`  생성 ${stats.created} · 갱신 ${stats.updated} · 변경 없음 ${stats.skipped}`);
console.log(`  단원별 슬롯 수:`);
for (const unit of Object.keys(byUnit).sort()) {
  const slots = byUnit[unit];
  const premium = slots.filter(s => s.is_premium).length;
  const strict = slots.filter(s => s.is_strict).length;
  const top = slots.filter(s => s.is_top).length;
  console.log(`    ${unit}: ${slots.length}문 (premium ${premium} · strict ${strict} · TOP ${top})`);
}

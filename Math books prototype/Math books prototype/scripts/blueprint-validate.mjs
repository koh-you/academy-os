#!/usr/bin/env node
// 슬롯 청사진 검증 — v2.0 게이트 G3
// 2026-06-25 마스터 확립
//
// 청사진 YAML을 입력받아 다음을 검증:
// 1. 시험범위 YAML과 대조 — 각 슬롯의 section이 allowed_sections에 있는가
// 2. ★ 분포 — min_star 위반 슬롯 없는가
// 3. 100점 합 — total_points 정확한가
// 4. 시리즈 자기복제 — 직전 회차 사용 카드와 충돌 없는가
//
// 사용법:
//   node scripts/blueprint-validate.mjs <청사진.yaml> <시험범위.yaml> [series-insights.json]

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/blueprint-validate.mjs <blueprint.yaml> <scope.yaml> [series-insights.json]');
  console.error('       반환 코드: 0 = 통과 / 1 = 차단');
  process.exit(2);
}

const blueprintFile = args[0];
const scopeFile = args[1];
const insightFile = args[2] || null;

if (!fs.existsSync(blueprintFile)) {
  console.error(`⚠️  청사진 파일 없음: ${blueprintFile}`);
  process.exit(2);
}
if (!fs.existsSync(scopeFile)) {
  console.error(`⚠️  시험범위 파일 없음: ${scopeFile}`);
  process.exit(2);
}

// ─── 최소 YAML 파서 (블루프린트·스코프 구조 한정) ────────────────
function parseYAMLBlock(text) {
  // 들여쓰기 기반 간이 파서 — 본 청사진/스코프 YAML 구조에 한정
  // 실제 호출 측에서는 *값 기반 키* 셀렉터로 사용
  return text;
}

function extractAllowedSectionIds(scopeText) {
  // allowed_sections 블록의 section_id 값 추출
  const ids = [];
  const lines = scopeText.split(/\r?\n/);
  let inBlock = false;
  for (const line of lines) {
    if (/^allowed_sections\s*:/.test(line)) { inBlock = true; continue; }
    if (inBlock && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) { inBlock = false; continue; }
    if (inBlock) {
      const m = line.match(/^\s*section_id:\s*([A-Za-z0-9\-_]+)/);
      if (m) ids.push(m[1]);
    }
  }
  return ids;
}

function extractExcludedSectionNames(scopeText) {
  // excluded_sections 블록의 section 이름 (시험범위 외)
  const names = [];
  const lines = scopeText.split(/\r?\n/);
  let inBlock = false;
  for (const line of lines) {
    if (/^excluded_sections\s*:/.test(line)) { inBlock = true; continue; }
    if (inBlock && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) { inBlock = false; continue; }
    if (inBlock) {
      const m = line.match(/^\s*section:\s*(.+?)\s*$/);
      if (m) names.push(m[1].replace(/['"]/g, '').trim());
    }
  }
  return names;
}

function extractStarConstraints(scopeText) {
  // star_constraints 블록 — min_star 추출
  const lines = scopeText.split(/\r?\n/);
  let inBlock = false;
  let minStar = null;
  let maxStar = null;
  for (const line of lines) {
    if (/^star_constraints\s*:/.test(line)) { inBlock = true; continue; }
    if (inBlock && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) { break; }
    if (inBlock) {
      const minM = line.match(/^\s*min_star:\s*(\d+)/);
      if (minM) minStar = parseInt(minM[1]);
      const maxM = line.match(/^\s*max_star:\s*(\d+)/);
      if (maxM) maxStar = parseInt(maxM[1]);
    }
  }
  return { minStar, maxStar };
}

function extractFormatTotalPoints(scopeText) {
  const lines = scopeText.split(/\r?\n/);
  let inBlock = false;
  for (const line of lines) {
    if (/^format\s*:/.test(line)) { inBlock = true; continue; }
    if (inBlock && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) { break; }
    if (inBlock) {
      const m = line.match(/^\s*total_points:\s*(\d+)/);
      if (m) return parseInt(m[1]);
    }
  }
  return 100;
}

function extractSlots(blueprintText) {
  // 청사진 슬롯 추출 — slots: 블록의 각 슬롯의 slot·star·point·section·insight_cards 추출
  const slots = [];
  const lines = blueprintText.split(/\r?\n/);
  let inSlots = false;
  let current = null;
  let inInsightCards = false;
  let inAnchorRef = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^slots\s*:/.test(line)) { inSlots = true; continue; }
    if (inSlots && /^[a-zA-Z_]+\s*:/.test(line) && !/^\s/.test(line)) {
      if (current) slots.push(current);
      inSlots = false;
      current = null;
      continue;
    }
    if (!inSlots) continue;

    // 새 슬롯 시작
    const slotStart = line.match(/^\s*-\s*slot:\s*(\d+)/);
    if (slotStart) {
      if (current) slots.push(current);
      current = { slot: parseInt(slotStart[1]), insight_cards: [], anchor_ref: [], seed_insight_cards: [] };
      inInsightCards = false;
      inAnchorRef = false;
      continue;
    }
    if (!current) continue;

    // v3.5 신규: signature_id + signature_exception + figure_macro
    const sigIdM = line.match(/^\s*signature_id:\s*([A-Z]+-S\d+[a-z]?)/);
    if (sigIdM) { current.signature_id = sigIdM[1]; inInsightCards = false; inAnchorRef = false; continue; }
    if (/^\s*signature_exception:\s*true/.test(line)) { current.signature_exception = true; continue; }
    const figMacroM = line.match(/^\s*figure_macro:\s*([A-Za-z]+)/);
    if (figMacroM) { current.figure_macro = figMacroM[1]; inInsightCards = false; inAnchorRef = false; continue; }

    // v3.2 신규 (G5): seed_id + seed_insight_cards
    const seedIdM = line.match(/^\s*seed_id:\s*(.+?)\s*$/);
    if (seedIdM) { current.seed_id = seedIdM[1].replace(/['"]/g, '').trim(); inInsightCards = false; inAnchorRef = false; continue; }

    if (/^\s*seed_insight_cards:\s*$/.test(line) || /^\s*seed_insight_cards:\s*\[/.test(line)) {
      const inline = line.match(/seed_insight_cards:\s*\[(.*?)\]/);
      if (inline) {
        current.seed_insight_cards = inline[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
      } else {
        // 다음 라인부터 - 항목 수집 — insight_cards와 같은 패턴 활용
        current._inSeedCards = true;
      }
      inInsightCards = false;
      inAnchorRef = false;
      continue;
    }
    if (current._inSeedCards) {
      const itemM = line.match(/^\s*-\s*(.+?)\s*$/);
      if (itemM) { current.seed_insight_cards.push(itemM[1].replace(/['"]/g, '').trim()); continue; }
      if (/^\s*[a-zA-Z_]+:/.test(line)) { current._inSeedCards = false; }
    }

    const starM = line.match(/^\s*star:\s*(\d+(?:\.\d+)?)/);
    if (starM) { current.star = parseFloat(starM[1]); inInsightCards = false; inAnchorRef = false; continue; }

    const pointM = line.match(/^\s*point:\s*(\d+(?:\.\d+)?)/);
    if (pointM) { current.point = parseFloat(pointM[1]); inInsightCards = false; inAnchorRef = false; continue; }

    const sectionM = line.match(/^\s*section:\s*(.+?)\s*$/);
    if (sectionM) { current.section = sectionM[1].replace(/['"]/g, '').trim(); inInsightCards = false; inAnchorRef = false; continue; }

    const sectionIdM = line.match(/^\s*section_id:\s*([A-Za-z0-9\-_]+)/);
    if (sectionIdM) { current.section_id = sectionIdM[1]; inInsightCards = false; inAnchorRef = false; continue; }

    // v3.0 신규: type_id (유형 카탈로그 매핑)
    const typeIdM = line.match(/^\s*type_id:\s*([A-Z]+\d?-[A-Z]+-[A-Z]?\d+)/);
    if (typeIdM) { current.type_id = typeIdM[1]; inInsightCards = false; inAnchorRef = false; continue; }

    const unitM = line.match(/^\s*unit:\s*(CM[12]-[A-Z]+)/);
    if (unitM) { current.unit = unitM[1]; inInsightCards = false; inAnchorRef = false; continue; }

    // insight_cards 블록 (배열 형태)
    if (/^\s*insight_cards:\s*$/.test(line) || /^\s*insight_cards:\s*\[/.test(line)) {
      const inline = line.match(/insight_cards:\s*\[(.*?)\]/);
      if (inline) {
        current.insight_cards = inline[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
        inInsightCards = false;
      } else {
        inInsightCards = true;
      }
      inAnchorRef = false;
      continue;
    }
    // anchor_ref 블록
    if (/^\s*anchor_ref:\s*$/.test(line) || /^\s*anchor_ref:\s*\[/.test(line)) {
      const inline = line.match(/anchor_ref:\s*\[(.*?)\]/);
      if (inline) {
        current.anchor_ref = inline[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
        inAnchorRef = false;
      } else {
        inAnchorRef = true;
      }
      inInsightCards = false;
      continue;
    }
    if (inInsightCards) {
      const itemM = line.match(/^\s*-\s*(.+?)\s*$/);
      if (itemM) { current.insight_cards.push(itemM[1].replace(/['"]/g, '').trim()); continue; }
      if (/^\s*[a-zA-Z_]+:/.test(line)) { inInsightCards = false; }
    }
    if (inAnchorRef) {
      const itemM = line.match(/^\s*-\s*(.+?)\s*$/);
      if (itemM) { current.anchor_ref.push(itemM[1].replace(/['"]/g, '').trim()); continue; }
      if (/^\s*[a-zA-Z_]+:/.test(line)) { inAnchorRef = false; }
    }
  }
  if (current) slots.push(current);
  return slots;
}

// v3.0 신규: 유형 카탈로그 로드 (bank/유형카탈로그/*.md)
function loadTypeCatalogs() {
  const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
  const projectRoot = path.resolve(scriptDir, '..');
  const catalogDir = path.join(projectRoot, 'bank', '유형카탈로그');
  if (!fs.existsSync(catalogDir)) return {};
  const types = {};
  for (const f of fs.readdirSync(catalogDir)) {
    if (!f.endsWith('.md') || f === 'README.md') continue;
    const content = fs.readFileSync(path.join(catalogDir, f), 'utf8');
    const tcodeRe = /###\s*([A-Z]\d+):\s*([^\n]+)\n([\s\S]*?)(?=###\s*[A-Z]\d+:|---|\n##\s)/g;
    let m;
    while ((m = tcodeRe.exec(content)) !== null) {
      const block = m[3];
      const idMatch = block.match(/\*\*id\*\*:\s*`?(CM[12]-[A-Z]+-[A-Z]?\d+)`?/);
      const starMatch = block.match(/\*\*base\s*★\*\*:\s*(\d+)/);
      const metaMatch = block.match(/\*\*meta_type\*\*:\s*([A-Za-z0-9\-_]+)/);
      if (idMatch) {
        types[idMatch[1]] = {
          name: m[2].trim(),
          base_star: starMatch ? parseInt(starMatch[1]) : null,
          meta_type: metaMatch ? metaMatch[1] : null,
        };
      }
    }
  }
  return types;
}

// ─── 메인 ────────────────────────────────────────────────────────
const blueprintText = fs.readFileSync(blueprintFile, 'utf8');
const scopeText = fs.readFileSync(scopeFile, 'utf8');

const allowedSectionIds = extractAllowedSectionIds(scopeText);
const excludedSectionNames = extractExcludedSectionNames(scopeText);
const { minStar, maxStar } = extractStarConstraints(scopeText);
const totalPointsExpected = extractFormatTotalPoints(scopeText);
const slots = extractSlots(blueprintText);
const typeCatalog = loadTypeCatalogs();

console.log(`📋 청사진: ${path.basename(blueprintFile)}`);
console.log(`📋 시험범위: ${path.basename(scopeFile)}`);
console.log(`   허용 절: ${allowedSectionIds.length}종 (${allowedSectionIds.join(', ')})`);
console.log(`   ★ 제약: min_star=${minStar}, max_star=${maxStar}`);
console.log(`   총점 기대: ${totalPointsExpected}\n`);

const issues = [];

// 1. 시험범위 외 section_id 차단
for (const s of slots) {
  if (s.section_id && !allowedSectionIds.includes(s.section_id)) {
    issues.push({ level: 'RED', slot: s.slot, type: 'SCOPE', msg: `section_id "${s.section_id}" 시험범위 외 (허용: ${allowedSectionIds.join(', ')})` });
  } else if (!s.section_id && s.section) {
    // section_id 없고 section 이름만 있으면 제외 목록과 대조
    if (excludedSectionNames.some(ex => s.section.includes(ex.replace('(단원 전체)', '').trim()))) {
      issues.push({ level: 'RED', slot: s.slot, type: 'SCOPE', msg: `section "${s.section}" 시험범위 외 (excluded_sections와 일치)` });
    } else {
      issues.push({ level: 'YELLOW', slot: s.slot, type: 'SCOPE', msg: `section_id 누락. section "${s.section}" 만으로는 자동 검증 어려움 — 명시 권장` });
    }
  } else if (!s.section_id && !s.section) {
    issues.push({ level: 'RED', slot: s.slot, type: 'SCOPE', msg: 'section / section_id 둘 다 누락' });
  }
}

// 2. ★ 분포 — min_star 위반
for (const s of slots) {
  if (s.star == null) {
    issues.push({ level: 'RED', slot: s.slot, type: 'STAR', msg: 'star 필드 누락' });
    continue;
  }
  if (minStar != null && s.star < minStar) {
    issues.push({ level: 'RED', slot: s.slot, type: 'STAR', msg: `★ ${s.star} < min_star ${minStar} (시험범위 YAML 위반)` });
  }
  if (maxStar != null && s.star > maxStar) {
    issues.push({ level: 'RED', slot: s.slot, type: 'STAR', msg: `★ ${s.star} > max_star ${maxStar}` });
  }
}

// 3. 100점 합 정합
const totalPoints = slots.reduce((acc, s) => acc + (s.point || 0), 0);
if (Math.abs(totalPoints - totalPointsExpected) > 0.01) {
  issues.push({ level: 'RED', slot: null, type: 'TOTAL', msg: `총점 ${totalPoints}점 ≠ 기대 ${totalPointsExpected}점 (차이 ${(totalPoints - totalPointsExpected).toFixed(1)})` });
}

// v3.0 신규: 3.5 type_id 필수 + 카탈로그 매핑 + base ★ 정합
for (const s of slots) {
  if (!s.type_id) {
    issues.push({ level: 'RED', slot: s.slot, type: 'TYPE-MISSING', msg: 'type_id 필수 (v3.0 G3 의무). 카탈로그(bank/유형카탈로그/*.md)에서 T-code 셀렉' });
    continue;
  }
  const meta = typeCatalog[s.type_id];
  if (!meta) {
    issues.push({ level: 'RED', slot: s.slot, type: 'TYPE-UNKNOWN', msg: `type_id "${s.type_id}" 카탈로그에 미등록. 신규 등록 또는 정정 필요` });
    continue;
  }
  // v4.0 ★ 산정: 라벨 ★ vs base ★ ≥ 2단 차이 RED
  if (s.star != null && meta.base_star != null) {
    const diff = s.star - meta.base_star;
    if (Math.abs(diff) >= 2) {
      issues.push({ level: 'RED', slot: s.slot, type: 'STAR-DRIFT-2', msg: `라벨 ★ ${s.star} vs base ★ ${meta.base_star} (${meta.name}) 차이 ${diff}단 ≥ 2 → v4.0 RED 차단` });
    } else if (Math.abs(diff) === 1) {
      issues.push({ level: 'YELLOW', slot: s.slot, type: 'STAR-DRIFT-1', msg: `라벨 ★ ${s.star} vs base ★ ${meta.base_star} (${meta.name}) 1단 차이 — 통찰 보너스로 정합 가능` });
    }
  }
}

// v3.0 신규: 3.6 anchor_ref ≥ 1 필수
for (const s of slots) {
  if (!s.anchor_ref || s.anchor_ref.length === 0) {
    issues.push({ level: 'RED', slot: s.slot, type: 'ANCHOR-MISSING', msg: 'anchor_ref ≥ 1 의무 (자산 인용 0건 차단). bank/problems/ 또는 시판 자산 ID 명시' });
  }
}

// v3.0 신규: 3.7 T-code 다양성 비율 (단원별)
const unitTypes = {};   // unit → Set(type_id)
const unitCount = {};   // unit → count
for (const s of slots) {
  if (!s.unit || !s.type_id) continue;
  if (!unitTypes[s.unit]) { unitTypes[s.unit] = new Set(); unitCount[s.unit] = 0; }
  unitTypes[s.unit].add(s.type_id);
  unitCount[s.unit]++;
}
const diversityRules = { 'CM1-EQ': 7, 'CM1-CB': 7, 'CM1-MX': 2 };
for (const [unit, types] of Object.entries(unitTypes)) {
  const required = diversityRules[unit] || Math.ceil(unitCount[unit] * 0.7);
  if (types.size < required && unitCount[unit] >= 5) {
    issues.push({ level: 'RED', slot: null, type: 'TYPE-DIVERSITY', msg: `${unit} 단원: 서로 다른 T-code ${types.size}개 (의무 ≥ ${required}, 슬롯 ${unitCount[unit]}문 기준). 시리즈 미사용 T-code 셀렉 권장` });
  } else if (types.size < required) {
    issues.push({ level: 'YELLOW', slot: null, type: 'TYPE-DIVERSITY-WEAK', msg: `${unit} 단원: T-code ${types.size}개 (권장 ≥ ${required}, 슬롯 ${unitCount[unit]}문)` });
  }
}

// v3.1 신규: 3.8 메타 유형 충돌 검증 (마스터-지적 #2 meta-type-separation)
// 같은 meta_type 슬롯이 시험지 1회차에 > 2개 → RED (학생 체감 단위 단조)
// 단일 출처: bank/마스터-지적/2026-06-25-메타유형-분리부족.md + bank/유형카탈로그/*.md meta_type 필드
const metaCount = {};      // meta_type → [slot numbers]
const metaTypeMissing = []; // type_id 있지만 meta_type 매핑 없음
for (const s of slots) {
  if (!s.type_id) continue;
  const meta = typeCatalog[s.type_id];
  if (!meta) continue;
  if (!meta.meta_type) {
    metaTypeMissing.push({ slot: s.slot, type_id: s.type_id });
    continue;
  }
  if (!metaCount[meta.meta_type]) metaCount[meta.meta_type] = [];
  metaCount[meta.meta_type].push(s.slot);
}
for (const [mt, slotsList] of Object.entries(metaCount)) {
  if (slotsList.length > 2) {
    issues.push({ level: 'RED', slot: null, type: 'META-TYPE-DUPE', msg: `메타 유형 "${mt}" 슬롯 ${slotsList.length}개 (#${slotsList.join(', #')}) > 2 의무 위반. 학생 체감 단위 단조 (마스터-지적 #2)` });
  } else if (slotsList.length === 2) {
    issues.push({ level: 'YELLOW', slot: null, type: 'META-TYPE-NEAR', msg: `메타 유형 "${mt}" 슬롯 2개 (#${slotsList.join(', #')}) — 한계치 (≤ 2). 한 개 더 추가 시 RED` });
  }
}
for (const m of metaTypeMissing) {
  issues.push({ level: 'YELLOW', slot: m.slot, type: 'META-TYPE-UNMAPPED', msg: `${m.type_id} 카탈로그에 meta_type 필드 누락 — 카탈로그 보강 필요` });
}

// v3.2 신규 (G5): 자산 씨앗 강제 — ★ 4·5 슬롯은 seed_id + seed_insight_cards ≥ 2 의무
// 단일 출처: bank/v3.2-출제게이트-G5.md
const _scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const _projectRoot = path.resolve(_scriptDir, '..');
const premiumDataPath = path.join(_projectRoot, 'data', 'cm1-premium-samples.json');
const premiumDataPath2 = path.join(_projectRoot, 'data', 'cm2-premium-samples.json');
const sampleIndex = {};   // id → sample
for (const dp of [premiumDataPath, premiumDataPath2]) {
  if (!fs.existsSync(dp)) continue;
  try {
    const _json = JSON.parse(fs.readFileSync(dp, 'utf8'));
    for (const s of (_json.samples || [])) sampleIndex[s.id] = s;
  } catch {}
}
const sampleCount = Object.keys(sampleIndex).length;

let g5SeedMissing = 0;
let g5SeedUnknown = 0;
let g5SeedCardsShort = 0;
let g5SeedMismatch = 0;
let g5InsightCopyShort = 0;
let g5Passed = 0;

// v3.3 G7 (★ 4 보강) — v1.1: 10회차 이상 RED, 9회차는 시범 YELLOW
const _roundMatch = blueprintText.match(/^round:\s*(\d+)/m);
const _round = _roundMatch ? parseInt(_roundMatch[1]) : null;
const _g7Active = _round !== null && _round >= 10;

for (const s of slots) {
  // ★ 5는 G5 RED 의무. ★ 4는 v3.3 v1.0 정책 — 9회차 이상에서 RED 격상, 8회차까지 YELLOW
  if (!s.star || s.star < 4) continue;

  // v3.3 G7-A: ★ 4 슬롯의 type_id가 base ★ ≥ 4 의무 (9회차+, RED)
  if (s.star === 4 && s.type_id) {
    const meta = typeCatalog[s.type_id];
    if (meta && meta.base_star && meta.base_star < 4) {
      const lv = _g7Active ? 'RED' : 'YELLOW';
      issues.push({ level: lv, slot: s.slot, type: 'G7-BASE-BELOW-4', msg: `★ 4 슬롯에 base ★ ${meta.base_star} T-code ${s.type_id} 사용 (v3.3 ★ 4 보강 정책 — 9회차+ RED). 화이트리스트(base ★ ≥ 4) T-code로 교체 권장` });
    }
  }

  // v3.3 G7-B: ★ 4 슬롯에 자유도/분기 카드 ≥ 1 (CON·MI·PD·BW 중 ≥ 1, 9회차+ RED)
  if (s.star === 4 && s.insight_cards && s.insight_cards.length > 0) {
    const hasFreedomCard = s.insight_cards.some(c => /INSIGHT:(CON|MI|PD|BW)/.test(c));
    if (!hasFreedomCard) {
      const lv = _g7Active ? 'RED' : 'YELLOW';
      issues.push({ level: lv, slot: s.slot, type: 'G7-NO-FREEDOM-CARD', msg: `★ 4 슬롯에 자유도/분기 카드 (CON·MI·PD·BW) 0개 (v3.3 ★ 4 보강 — 9회차+ RED). 단순 직접 계산 슬롯은 ★ 3 자동 강등 권장` });
    }
  }

  if (!s.seed_id) {
    // ★ 5 RED 의무. ★ 4 — 9회차+ RED (v3.3 G7-D), 8회차까지 YELLOW
    const lv = s.star >= 5 ? 'RED' : (_g7Active ? 'RED' : 'YELLOW');
    const msg = s.star >= 5
      ? `★ 5 슬롯 seed_id 누락. seed-fetch.mjs로 strict 표본 셀렉 (의무)`
      : `★ 4 슬롯 seed_id 누락. seed-fetch.mjs로 premium 표본 셀렉${_g7Active ? ' (v3.3 G7-D RED 의무)' : ' 권장'}`;
    issues.push({ level: lv, slot: s.slot, type: 'G5-SEED-MISSING', msg });
    g5SeedMissing++;
    continue;
  }

  const seed = sampleIndex[s.seed_id];
  if (!seed) {
    issues.push({ level: 'RED', slot: s.slot, type: 'G5-SEED-UNKNOWN', msg: `seed_id "${s.seed_id}" data/*-premium-samples.json에 존재하지 않음. 정정 필요` });
    g5SeedUnknown++;
    continue;
  }

  if (!s.seed_insight_cards || s.seed_insight_cards.length < 2) {
    issues.push({ level: 'RED', slot: s.slot, type: 'G5-SEED-CARDS-SHORT', msg: `seed_insight_cards ${s.seed_insight_cards?.length || 0}개 < 2 (의무). 표본 ${s.seed_id} insights: ${(seed.insights||[]).map(it=>`${it.type}:${it.depth}`).join(', ')}` });
    g5SeedCardsShort++;
    continue;
  }

  // unit 일치
  if (s.unit && seed.unit && s.unit !== seed.unit) {
    issues.push({ level: 'RED', slot: s.slot, type: 'G5-UNIT-MISMATCH', msg: `슬롯 unit ${s.unit} ≠ 표본 unit ${seed.unit}` });
    g5SeedMismatch++;
    continue;
  }

  // ★ 일치 — 1단 이상 차이 RED, 0.5단 YELLOW
  const seedStarMatch = (seed.grade_label || '').match(/★\s*(\d)/);
  if (seedStarMatch) {
    const seedStar = parseInt(seedStarMatch[1]);
    const diff = Math.abs(s.star - seedStar);
    if (diff >= 1.5) {
      issues.push({ level: 'RED', slot: s.slot, type: 'G5-STAR-MISMATCH', msg: `슬롯 ★ ${s.star} ↔ 표본 ★ ${seedStar} 차이 ${diff}단 ≥ 1.5` });
      g5SeedMismatch++;
      continue;
    } else if (diff >= 1) {
      issues.push({ level: 'YELLOW', slot: s.slot, type: 'G5-STAR-NEAR', msg: `슬롯 ★ ${s.star} ↔ 표본 ★ ${seedStar} 1단 차이 — 의도된 경우만 허용` });
    }
  }

  // seed_insight_cards가 표본 insights에 모두 존재
  const seedCardsSet = new Set((seed.insights || []).map(it => `${it.type}:${it.depth}`));
  const missingCards = s.seed_insight_cards.filter(c => !seedCardsSet.has(c));
  if (missingCards.length > 0) {
    issues.push({ level: 'RED', slot: s.slot, type: 'G5-CARD-UNKNOWN', msg: `seed_insight_cards에 표본 ${s.seed_id} insights에 없는 카드 포함: ${missingCards.join(', ')}` });
    continue;
  }

  // 슬롯 insight_cards 중 seed_insight_cards의 통찰 *유형* 일치 ≥ 의무
  // ★ 4: ≥ 2개 / ★ 5: ≥ 3개 (단 slot insight_cards가 부재한 청사진 단계 — YELLOW로 안내)
  if (s.insight_cards && s.insight_cards.length > 0) {
    const slotTypes = new Set(s.insight_cards.map(c => {
      const m = c.match(/INSIGHT:([A-Z]+)/);
      return m ? m[1] : null;
    }).filter(Boolean));
    const seedTypes = new Set(s.seed_insight_cards.map(c => c.split(':')[0]));
    const overlap = [...seedTypes].filter(t => slotTypes.has(t)).length;
    const required = s.star === 5 ? 3 : 2;
    if (overlap < required) {
      issues.push({ level: 'RED', slot: s.slot, type: 'G5-INSIGHT-COPY-SHORT', msg: `슬롯 insight_cards에 seed 통찰 유형 ${overlap}개 일치 < 의무 ${required} (★ ${s.star} 기준). 씨앗 통찰 복사 부족` });
      g5InsightCopyShort++;
      continue;
    }
  } else {
    issues.push({ level: 'YELLOW', slot: s.slot, type: 'G5-INSIGHT-PENDING', msg: 'insight_cards 부재 (청사진 초기 단계) — 본문 출제 단계에서 seed 통찰 유형 ≥ ' + (s.star === 5 ? 3 : 2) + '개 복사 의무' });
  }

  g5Passed++;
}

// 4. 시리즈 자기복제 (insights 풀 제공 시)
// 자기복제 정의 (출제메커니즘 v2.0 §1):
//  (a) 같은 슬롯 위치에서 직전 회차와 의미 카드 ≥ 2개 일치 → RED (위치 자기복제)
//  (b) 시리즈 누적 빈도 ≥ 5인 *과다 사용 카드*를 ≥ 2개 포함 → RED (통찰 과다)
//  (c) 같은 슬롯 위치 + 의미 카드 1개 일치 → YELLOW (검토)
// 단순 빈도 ≥ 1 카드 사용은 자기복제 아님 (시판 공통 기본 틀 가능)
if (insightFile && fs.existsSync(insightFile)) {
  const insightData = JSON.parse(fs.readFileSync(insightFile, 'utf8'));
  const cardFreqGlobal = insightData.card_frequency || {};
  const slotsByPosition = {}; // slot 번호 → [{round, cards}]
  for (const u of (insightData.slots || [])) {
    if (!slotsByPosition[u.slot]) slotsByPosition[u.slot] = [];
    slotsByPosition[u.slot].push({ round: u.round, cards: u.cards || [] });
  }

  // 직전 회차 번호 추정 — 본 청사진의 round 필드 또는 시리즈 max round + 1
  const blueprintRoundMatch = blueprintText.match(/^round:\s*(\d+)/m);
  const blueprintRound = blueprintRoundMatch ? parseInt(blueprintRoundMatch[1]) : null;
  const recentRounds = blueprintRound ? [blueprintRound - 1, blueprintRound - 2] : [];

  for (const s of slots) {
    if (!s.insight_cards || s.insight_cards.length === 0) continue;
    const meaningful = s.insight_cards.filter(c => c.startsWith('INSIGHT:'));
    if (meaningful.length === 0) continue;

    // (a) 같은 위치 자기복제 — 직전 1~2회차에서 같은 슬롯 위치
    const samePosPrev = (slotsByPosition[s.slot] || []).filter(u => recentRounds.includes(u.round));
    let strongDupe = null;
    for (const u of samePosPrev) {
      const matching = meaningful.filter(c => u.cards.includes(c));
      if (matching.length >= 2) {
        strongDupe = { round: u.round, cards: matching };
        break;
      }
    }
    if (strongDupe) {
      issues.push({ level: 'RED', slot: s.slot, type: 'DUPE-POS', msg: `${strongDupe.round}회차 #${s.slot}와 카드 ${strongDupe.cards.length}개 일치 (위치 자기복제): ${strongDupe.cards.join(', ')}` });
      continue;
    }

    // (b) 과다 사용 카드 ≥ 2개 포함
    const overused = meaningful.filter(c => (cardFreqGlobal[c] || 0) >= 5);
    if (overused.length >= 2) {
      issues.push({ level: 'RED', slot: s.slot, type: 'OVERUSED', msg: `시리즈 과다 사용 카드 ${overused.length}종 포함 (각 ≥ 5회): ${overused.map(c => `${c}(${cardFreqGlobal[c]}회)`).join(', ')}` });
      continue;
    }

    // (c) 같은 위치 1개 카드 일치 — YELLOW
    let weakDupe = null;
    for (const u of samePosPrev) {
      const matching = meaningful.filter(c => u.cards.includes(c));
      if (matching.length === 1) {
        weakDupe = { round: u.round, card: matching[0] };
        break;
      }
    }
    if (weakDupe) {
      issues.push({ level: 'YELLOW', slot: s.slot, type: 'DUPE-POS-WEAK', msg: `${weakDupe.round}회차 #${s.slot}와 카드 1개 일치 (검토): ${weakDupe.card}` });
    }

    // (b') 과다 사용 카드 1개만 포함 — YELLOW
    if (overused.length === 1) {
      issues.push({ level: 'YELLOW', slot: s.slot, type: 'OVERUSED-WEAK', msg: `시리즈 과다 사용 카드 1종 포함 (${overused[0]}: ${cardFreqGlobal[overused[0]]}회). 형태 변경 권장` });
    }
  }
}

// v3.5 신규 G8: 발문 시그니처 단위 충돌 검증
// 단일 출처: bank/v3.5-발문시그니처-카탈로그.md
// 같은 signature_id ≥ 2슬롯 (signature_exception=true 제외) → RED
// signature_id 필수 슬롯: ★ 4 이상 (9회차+ 의무, 8회차까지 YELLOW)
const _v35Active = _round !== null && _round >= 9;
const sigIdCount = {};  // signature_id → [slot]
let sigIdMissing = 0;
for (const s of slots) {
  // ★ 4 이상에 signature_id 필수
  if (s.star && s.star >= 4 && !s.signature_id) {
    const lv = _v35Active ? 'RED' : 'YELLOW';
    issues.push({ level: lv, slot: s.slot, type: 'G8-SIG-MISSING', msg: `★ ${s.star} 슬롯 signature_id 누락 (v3.5 ${_v35Active ? 'RED 의무' : 'YELLOW 권장'}). bank/v3.5-발문시그니처-카탈로그.md에서 셀렉` });
    sigIdMissing++;
    continue;
  }
  if (!s.signature_id) continue;
  if (s.signature_exception === true) continue;  // ★ 5 정점 면제
  if (!sigIdCount[s.signature_id]) sigIdCount[s.signature_id] = [];
  sigIdCount[s.signature_id].push(s.slot);
}
for (const [sig, slotList] of Object.entries(sigIdCount)) {
  if (slotList.length >= 2) {
    const lv = _v35Active ? 'RED' : 'YELLOW';
    issues.push({ level: lv, slot: null, type: 'G8-SIG-DUPE', msg: `시그니처 ${sig} 슬롯 ${slotList.length}개 (#${slotList.join(', #')}) ≥ 2 (v3.5 ${_v35Active ? 'RED' : 'YELLOW'}). 학생 체감 동일 유형 — 다른 시그니처로 분산 또는 signature_exception 명시` });
  }
}

// v3.5 신규 G9: 그림 매크로 카운트 충돌 (figure_macro 명시 슬롯만)
const figMacroCount = {};  // figure_macro → [slot]
for (const s of slots) {
  if (!s.figure_macro) continue;
  if (!figMacroCount[s.figure_macro]) figMacroCount[s.figure_macro] = [];
  figMacroCount[s.figure_macro].push(s.slot);
}
for (const [fig, slotList] of Object.entries(figMacroCount)) {
  if (slotList.length >= 2) {
    const lv = _v35Active ? 'RED' : 'YELLOW';
    issues.push({ level: lv, slot: null, type: 'G9-FIG-DUPE', msg: `그림 매크로 \\${fig} 슬롯 ${slotList.length}개 (#${slotList.join(', #')}) ≥ 2 (v3.5 ${_v35Active ? 'RED' : 'YELLOW'}). 다른 그림 매크로 또는 그림 없는 시그니처로 교체` });
  }
}

// ─── 보고 ────────────────────────────────────────────────────────
const reds = issues.filter(i => i.level === 'RED');
const yellows = issues.filter(i => i.level === 'YELLOW');

console.log(`📊 슬롯 ${slots.length}개 검증 완료`);
console.log(`   총점: ${totalPoints} / ${totalPointsExpected}`);
console.log(`   ★ 4: ${slots.filter(s => s.star === 4).length}문`);
console.log(`   ★ 5: ${slots.filter(s => s.star === 5).length}문`);
console.log(`   카탈로그 로드: ${Object.keys(typeCatalog).length}개 T-code (meta_type 필드 ${Object.values(typeCatalog).filter(t => t.meta_type).length}개)`);
console.log(`   type_id 명시 슬롯: ${slots.filter(s => s.type_id).length}/${slots.length}`);
console.log(`   anchor_ref ≥ 1 슬롯: ${slots.filter(s => s.anchor_ref && s.anchor_ref.length > 0).length}/${slots.length}`);
console.log(`   메타 유형 분포: ${Object.entries(metaCount).map(([mt,arr]) => `${mt}=${arr.length}`).join(' / ') || '(없음)'}`);
console.log(`   자산 표본 로드: ${sampleCount}개 (cm1+cm2 premium-samples.json)`);
const _star45 = slots.filter(s => s.star && s.star >= 4).length;
const _seedOk = slots.filter(s => s.star && s.star >= 4 && s.seed_id && sampleIndex[s.seed_id] && s.seed_insight_cards && s.seed_insight_cards.length >= 2).length;
console.log(`   G5 자산 씨앗 정합 슬롯: ${_seedOk}/${_star45} (★ 4·5 기준, 인용률 ${_star45 > 0 ? Math.round(100 * _seedOk / _star45) : 0}%)`);
const _sigDeclared = slots.filter(s => s.signature_id).length;
const _figDeclared = slots.filter(s => s.figure_macro).length;
console.log(`   signature_id 명시: ${_sigDeclared}/${slots.length} / figure_macro 명시: ${_figDeclared}/${slots.length} (v3.5 G8·G9 ${_v35Active ? 'RED' : 'YELLOW'} 활성)`);
console.log();

if (issues.length === 0) {
  console.log('✅ 청사진 검증 통과. .tex 작성 진입 OK.');
  process.exit(0);
}

console.log(`🔴 RED ${reds.length}건 / 🟡 YELLOW ${yellows.length}건\n`);

if (reds.length > 0) {
  console.log('=== 🔴 빌드 차단 ===');
  for (const r of reds) {
    const loc = r.slot != null ? `#${r.slot}` : '(전체)';
    console.log(`  ${loc} [${r.type}]  ${r.msg}`);
  }
  console.log();
}
if (yellows.length > 0) {
  console.log('=== 🟡 검토 권장 ===');
  for (const y of yellows) {
    const loc = y.slot != null ? `#${y.slot}` : '(전체)';
    console.log(`  ${loc} [${y.type}]  ${y.msg}`);
  }
  console.log();
}

console.log('=== 단일 출처 ===');
console.log(`${scopeFile} (시험범위 단일 출처)`);
console.log('bank/출제메커니즘-v2.0.md §1 게이트 G3 (G3·G5·G7)');
console.log('bank/v3.5-발문시그니처-카탈로그.md (G8·G9)');

if (reds.length > 0) {
  console.error(`\n❌ 빌드 차단: 청사진 위반 ${reds.length}건. 청사진 수정 후 재시도.`);
  process.exit(1);
}
console.log('\n⚠️  YELLOW 검토 권장. 결정 후 .tex 작성 진입.');
process.exit(0);

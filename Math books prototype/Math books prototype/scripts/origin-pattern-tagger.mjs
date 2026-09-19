#!/usr/bin/env node
// origin-pattern-tagger.mjs — 신규 슬롯에 premium 원형(origin_pattern) 자동 태그
// 2026-07-28 세션 96 신설 · feedback loop P0-3 (~40% → +4%p)
//
// 목적:
//   premium 원형 카탈로그 v1.2 (50 원형) 스키마 로드 →
//   신규 슬롯 시그니처(unit·insights·type/name) 매칭 →
//   top-3 후보 + 유사도 반환. 유사도 ≥ threshold 시 origin_pattern 자동 배정.
//
// 사용법:
//   # 단일 슬롯 태그 (JSON 입력)
//   node scripts/origin-pattern-tagger.mjs \
//     --slot '{"unit":"EQ","type":"이차일차-조건결정","insights":["I-EQV","I-CON"]}' \
//     --top 3 --threshold 0.7
//
//   # 청사진 일괄 태그 (모든 슬롯 순회)
//   node scripts/origin-pattern-tagger.mjs \
//     --blueprint output/공통수학1/2026-1학기-기말예상-1회/청사진.yaml \
//     --report _scratch/origin-tags.md
//
// 반환: 0=정상 · 2=오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DEFAULT_CATALOG = path.join(ROOT, 'bank', 'premium-원형-카탈로그-v1.2.md');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  catalog: DEFAULT_CATALOG,
  slot: null,
  blueprint: null,
  top: 3,
  threshold: 0.7,
  report: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--catalog') opt.catalog = args[++i];
  else if (a === '--slot') opt.slot = args[++i];
  else if (a === '--blueprint') opt.blueprint = args[++i];
  else if (a === '--top') opt.top = parseInt(args[++i]);
  else if (a === '--threshold') opt.threshold = parseFloat(args[++i]);
  else if (a === '--report') opt.report = args[++i];
  else if (a === '--help' || a === '-h') {
    console.log(`
origin-pattern-tagger.mjs

사용법:
  node scripts/origin-pattern-tagger.mjs \\
    --slot '{"unit":"EQ","type":"...","insights":["I-EQV"]}' \\
    [--top 3] [--threshold 0.7]

  node scripts/origin-pattern-tagger.mjs \\
    --blueprint <청사진.yaml> [--report <path>]

  [--catalog <경로>]  기본: bank/premium-원형-카탈로그-v1.2.md
`);
    process.exit(0);
  }
}

if (!opt.slot && !opt.blueprint) {
  console.error('❌ --slot JSON or --blueprint 필수');
  process.exit(2);
}
if (!fs.existsSync(opt.catalog)) {
  console.error(`❌ 카탈로그 없음: ${opt.catalog}`);
  process.exit(2);
}

// ── 카탈로그 파싱 ─────────────────────────────────────────
// 두 포맷 지원:
//   (A) v1.0~v1.1 inline: "**O-01** · **이름** (unit) — 원본: id · I-XXX+I-YYY..."
//   (B) v1.2 H3 block:    "### O-NEW-33 · 이름 (unit)\n- **통찰 결합**: I-XXX(3)+I-YYY(2)\n- **원본**: id..."
function parseCatalog(text) {
  const patterns = [];

  // (A) inline 라인 · v1.0~v1.1
  const inlineRe = /\*\*(O-[\w-]+)\*\*\s*·\s*\*\*([^*]+)\*\*\s*\(([^)]+)\)\s*—\s*원본:\s*([^·\n]+)(?:·\s*(I-[^·\n]+))?/gm;
  let m;
  while ((m = inlineRe.exec(text)) !== null) {
    const [, code, name, unit, sourceStr, insightStr] = m;
    patterns.push({
      code, name: name.trim(), unit: unit.trim(),
      sources: sourceStr.split(/[·,]/).map((s) => s.trim()).filter(Boolean),
      insights: extractInsightCodes(insightStr || ''),
      raw: m[0], format: 'inline',
    });
  }

  // (B) H3 block · v1.2
  const blockRe = /^###\s+(O-[\w-]+)\s*·\s*(.+?)\s*(?:\(([^)]+)\))?\s*$/gm;
  const blockMatches = [...text.matchAll(blockRe)];
  for (let i = 0; i < blockMatches.length; i++) {
    const bm = blockMatches[i];
    const code = bm[1];
    if (patterns.some((p) => p.code === code)) continue; // inline 이미 파싱된 원형
    const name = bm[2].trim();
    const unit = (bm[3] || '').trim();
    const startIdx = bm.index + bm[0].length;
    const endIdx = i + 1 < blockMatches.length ? blockMatches[i + 1].index : text.length;
    const body = text.slice(startIdx, endIdx);
    const insightMatch = body.match(/통찰\s*결합\*?\*?\s*:\s*([^\n]+)/);
    const sourceMatch = body.match(/\*\*원본\*\*\s*:\s*([^\n]+)/);
    patterns.push({
      code, name, unit,
      sources: sourceMatch ? sourceMatch[1].split(/[·,]/).map((s) => s.trim()).filter(Boolean) : [],
      insights: extractInsightCodes(insightMatch ? insightMatch[1] : ''),
      raw: bm[0] + body.slice(0, 200), format: 'block',
    });
  }

  return patterns;
}

function extractInsightCodes(text) {
  const codes = new Set();
  const re = /I-[A-Z]{2,4}/g;
  let m;
  while ((m = re.exec(text)) !== null) codes.add(m[0]);
  return codes;
}

// ── 유사도 함수 ──────────────────────────────────────────
function jaccard(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 0;
  const inter = [...setA].filter((x) => setB.has(x)).length;
  const uni = new Set([...setA, ...setB]).size;
  return uni === 0 ? 0 : inter / uni;
}

// unit 매칭: exact match 1.0 · 확장 매칭 0.5 (CM2-GM-원 vs 원)
function unitMatch(pUnit, sUnit) {
  if (!pUnit || !sUnit) return 0;
  const p = pUnit.toLowerCase();
  const s = sUnit.toLowerCase();
  if (p === s) return 1;
  if (p.includes(s) || s.includes(p)) return 0.5;
  // 확장 별칭 (경우의 수 = CB · 이차방정식 ⊂ EQ · 인수분해 ⊂ PL)
  const aliases = {
    'cb': ['경우의 수', '순열', '조합'],
    'eq': ['이차방정식', '방정식', '부등식', '이차', '이차식'],
    'pl': ['다항식', '나머지정리', '인수분해', '항등식'],
    'mx': ['행렬', '행렬곱', '행렬거듭제곱'],
    'gm': ['평면좌표', '원', '도형이동', '도형의 방정식', '직선', '직선의 방정식'],
    'fn': ['함수', '함수 개념', '합성', '역함수'],
    'st': ['집합', '명제'],
    'rf': ['유리함수', '무리함수'],
  };
  for (const [code, keys] of Object.entries(aliases)) {
    if ((p === code || p.includes(code)) && keys.some((k) => s.includes(k))) return 0.7;
    if ((s === code || s.includes(code)) && keys.some((k) => p.includes(k))) return 0.7;
    if (keys.some((k) => p.includes(k)) && keys.some((k) => s.includes(k))) return 0.6;
  }
  return 0;
}

// name-vs-type lexical similarity (bigram overlap on Korean/English chars)
function lexSimilarity(a, b) {
  if (!a || !b) return 0;
  const bigrams = (s) => {
    const clean = s.replace(/\s+/g, '');
    const set = new Set();
    for (let i = 0; i < clean.length - 1; i++) set.add(clean.slice(i, i + 2));
    return set;
  };
  return jaccard(bigrams(a), bigrams(b));
}

// 종합 유사도 (0~1)
function similarity(pattern, slot) {
  const uWt = 0.35, iWt = 0.35, lWt = 0.30;
  const u = unitMatch(pattern.unit, slot.unit || '');
  const iSlot = new Set(slot.insights || []);
  const i = pattern.insights.size > 0 ? jaccard(pattern.insights, iSlot) : 0;
  const l = lexSimilarity(pattern.name, slot.type || slot.name || '');
  // insight 정보가 없으면 unit + lex로 가중치 재조정
  if (iSlot.size === 0) {
    return u * 0.55 + l * 0.45;
  }
  return u * uWt + i * iWt + l * lWt;
}

// ── 매칭 실행 ────────────────────────────────────────────
const catalogText = fs.readFileSync(opt.catalog, 'utf-8');
const patterns = parseCatalog(catalogText);
console.error(`ℹ️  카탈로그 로드: ${patterns.length} 원형`);

function tagSlot(slot) {
  const scored = patterns.map((p) => ({
    code: p.code, name: p.name, unit: p.unit,
    score: similarity(p, slot),
  })).sort((a, b) => b.score - a.score);
  const top = scored.slice(0, opt.top);
  const best = top[0];
  const autoAssign = best && best.score >= opt.threshold ? best.code : null;
  return { slot, top, autoAssign };
}

const results = [];
if (opt.slot) {
  let slotObj;
  try { slotObj = JSON.parse(opt.slot); } catch (e) {
    console.error('❌ --slot JSON 파싱 실패:', e.message);
    process.exit(2);
  }
  results.push(tagSlot(slotObj));
} else if (opt.blueprint) {
  const yamlText = fs.readFileSync(opt.blueprint, 'utf-8');
  // 재사용: absorb-completed-round와 같은 파서 로직 (간이)
  const lines = yamlText.split(/\r?\n/);
  let inSlots = false;
  for (const line of lines) {
    if (/^slots\s*:/.test(line)) { inSlots = true; continue; }
    if (inSlots) {
      if (/^[A-Za-z_]/.test(line) && !line.startsWith(' ') && !line.startsWith('-')) break;
      const inv = line.match(/^\s*-\s*\{(.+)\}\s*$/);
      if (inv) {
        const f = {};
        for (const pair of inv[1].split(/,\s*/)) {
          const mm = pair.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.+?)$/);
          if (!mm) continue;
          let v = mm[2].trim();
          if (/^".*"$/.test(v) || /^'.*'$/.test(v)) v = v.slice(1, -1);
          f[mm[1].trim()] = v;
        }
        // insight 필드가 콤마 없이 "I-XU"로 오는 경우
        if (f.insight && !f.insights) f.insights = [f.insight];
        results.push(tagSlot(f));
      }
    }
  }
}

// ── 리포트 ────────────────────────────────────────────────
const lines = [];
lines.push(`# Origin Pattern Tagger 리포트`);
lines.push('');
lines.push(`- **일자**: ${new Date().toISOString()}`);
lines.push(`- **카탈로그**: \`${path.relative(ROOT, opt.catalog)}\` (${patterns.length} 원형)`);
if (opt.blueprint) lines.push(`- **청사진**: \`${opt.blueprint}\``);
lines.push(`- **threshold**: ${opt.threshold} · **top**: ${opt.top}`);
lines.push('');
lines.push(`## 매칭 결과 (${results.length} 슬롯)`);
lines.push('');

let autoCount = 0;
for (const r of results) {
  const slotLabel = r.slot.n !== undefined ? `#${r.slot.n}` : (r.slot.type || '(slot)');
  const unitLabel = r.slot.unit || '?';
  const typeLabel = r.slot.type || r.slot.name || '';
  lines.push(`### ${slotLabel} · ${unitLabel} · ${typeLabel}`);
  lines.push('');
  if (r.autoAssign) {
    autoCount++;
    lines.push(`**auto-assign**: \`${r.autoAssign}\` (score ${r.top[0].score.toFixed(3)})`);
    lines.push('');
  }
  lines.push(`| rank | 원형 | 이름 | 단원 | score |`);
  lines.push(`|---:|---|---|---|---:|`);
  r.top.forEach((c, i) => {
    lines.push(`| ${i + 1} | ${c.code} | ${c.name} | ${c.unit} | ${c.score.toFixed(3)} |`);
  });
  lines.push('');
}

lines.push(`## 요약`);
lines.push('');
lines.push(`- 총 ${results.length} 슬롯 · auto-assign ${autoCount}건 (${((autoCount / Math.max(results.length, 1)) * 100).toFixed(1)}%)`);
lines.push(`- threshold 미달 · 마스터 수동 검토: ${results.length - autoCount}건`);

const reportText = lines.join('\n');
if (opt.report) {
  fs.mkdirSync(path.dirname(opt.report), { recursive: true });
  fs.writeFileSync(opt.report, reportText, 'utf-8');
  console.error(`📄 리포트 저장: ${opt.report}`);
} else {
  console.log(reportText);
}

console.error(`\n결과: 슬롯=${results.length} · auto-assign=${autoCount}`);
process.exit(0);

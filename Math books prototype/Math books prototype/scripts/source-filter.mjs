#!/usr/bin/env node
// scripts/source-filter.mjs
//
// 정독 파일 (bank/mechanism-데이터-*.md) tier 매핑 인덱스 조회 도구.
// 2026-07-16 세션 46: 고쟁이 → 블랙라벨·RPM·EBS 등 전체 정독 파일 지원 (캘리브레이션 v1.3)
// unit·star·mechanism 필터로 후보 문항 나열.
// 판단·순위 없음. 결정적 매칭·정렬만.
//
// 사용:
//   node scripts/source-filter.mjs --unit CM1-EQ --star premium --top 10
//   node scripts/source-filter.mjs --unit CM2-GM --mechanism "원의 접선"
//   node scripts/source-filter.mjs --source "고쟁이-CH03-STEP3-#186"
//   node scripts/source-filter.mjs --exclude-recent 3 --unit CM1-EQ

import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank');
const USAGE_LOG = join(BANK_DIR, 'usage-log.md');

function parseFrontmatter(md) {
  const m = md.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { front: null, body: md };
  try { return { front: yaml.load(m[1]), body: m[2] }; }
  catch (e) { return { front: null, body: md }; }
}

function extractYamlBlocks(body) {
  const blocks = [];
  const re = /```yaml\r?\n([\s\S]*?)\r?\n```/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const startLine = body.substring(0, m.index).split(/\r?\n/).length;
    blocks.push({ content: m[1], startLine });
  }
  return blocks;
}

function splitYamlItems(content, baseLine) {
  // 각 `- source:` 항목을 개별 텍스트로 분리
  const lines = content.split(/\r?\n/);
  const items = [];
  let cur = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^- source:/.test(line)) {
      if (cur) items.push(cur);
      cur = { text: line, startLine: baseLine + i };
    } else if (cur) {
      cur.text += '\n' + line;
    }
  }
  if (cur) items.push(cur);
  return items;
}

function regexFallback(text) {
  const item = {};
  const get = (key, multiline = false) => {
    if (multiline) {
      // `  key: |\n    ...` 블록 리터럴
      const re = new RegExp(`^\\s*${key}:\\s*\\|\\s*\\r?\\n((?:\\s{2,}[^\\r\\n]*\\r?\\n?)+)`, 'm');
      const m = text.match(re);
      if (m) {
        return m[1].replace(/^\s{2,}/gm, '').trim();
      }
    }
    const re = new RegExp(`^\\s*${key}:\\s*(.+?)$`, 'm');
    const m = text.match(re);
    return m ? m[1].trim() : '';
  };
  const src = get('source') || get('- source');
  if (!src) return null;
  // "- source: X" 케이스에서는 앞의 "- " 제거되므로 재확인
  const srcClean = src.replace(/^-\s*source:\s*/, '').trim();
  item.source = srcClean;
  item.page = get('page');
  item.category = get('category');
  item.difficulty = get('difficulty');
  // v1.3: mechanism_primary or mechanism (RPM 스타일 alias)
  item.mechanism_primary = (get('mechanism_primary') || get('mechanism')).replace(/^["']|["']$/g, '');
  const secRaw = get('mechanism_secondary');
  if (secRaw.startsWith('[')) {
    item.mechanism_secondary = secRaw.replace(/^\[|\]$/g, '').split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
  } else {
    item.mechanism_secondary = secRaw;
  }
  item.problem_summary = get('problem_summary', true);
  item.solution_summary = get('solution_summary', true);
  item.answer = get('답') || get('answer');
  return item;
}

function parseYamlBlock(content, baseLine) {
  // 개별 항목으로 split 후 각각 파싱 시도
  const rawItems = splitYamlItems(content, baseLine);
  const out = [];
  for (const { text, startLine } of rawItems) {
    let parsed = null;
    try {
      const arr = yaml.load(text);
      if (Array.isArray(arr) && arr.length > 0) parsed = arr[0];
    } catch (e) { /* fallback */ }
    if (!parsed) {
      parsed = regexFallback(text);
    }
    if (parsed && parsed.source) {
      parsed._line = startLine;
      // v1.3: RPM 스타일 mechanism → mechanism_primary alias
      if (!parsed.mechanism_primary && parsed.mechanism) {
        parsed.mechanism_primary = parsed.mechanism;
      }
      out.push(parsed);
    }
  }
  return out;
}

function parseMarkdownHeadingFormat(body) {
  const items = [];
  const lines = body.split(/\r?\n/);
  let currentItem = null;
  let currentStep = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const stepMatch = line.match(/^##\s*STEP\s*(\d+)/);
    if (stepMatch) {
      currentStep = stepMatch[1] === '2' ? 'STEP2' : 'STEP3';
      continue;
    }
    const numMatch = line.match(/^###\s+(\d+)\s*$/);
    if (numMatch) {
      if (currentItem) items.push(currentItem);
      currentItem = {
        _number: numMatch[1],
        _step: currentStep,
        _line: i + 1,
      };
      continue;
    }
    if (!currentItem) continue;
    const kv = line.match(/^-\s*([^:]+?):\s*(.+)$/);
    if (kv) {
      const key = kv[1].trim();
      const val = kv[2].trim();
      if (key === 'category') currentItem.category = val;
      else if (key === 'mechanism_primary') currentItem.mechanism_primary = val;
      else if (key === 'mechanism_secondary') currentItem.mechanism_secondary = val;
      else if (key === '유형') currentItem.category_subtype = val;
      else if (key === '풀이 요약') currentItem.solution_summary = val;
      else if (key === '답') currentItem.answer = val;
    }
  }
  if (currentItem) items.push(currentItem);
  return items;
}

function detectTier(item, chapter) {
  // v1.3 (2026-07-16 세션 46): 파일 안 tier 필드 우선 · fallback으로 source_id 규칙
  if (item.tier) return String(item.tier).trim();
  const src = String(item.source || '');
  // 블랙라벨·고쟁이 STEP 자동 매핑 (기존 규칙)
  if (/STEP\s*2/i.test(src) || /-STEP2-/.test(src)) return 'star_5';
  if (/STEP\s*3/i.test(src) || /-STEP3-/.test(src)) return 'star_5_premium';
  if (/STEP\s*1/i.test(src) || /-STEP1-/.test(src)) return 'star_3·4';
  if (item._step === 'STEP2') return 'star_5';
  if (item._step === 'STEP3') return 'star_5_premium';
  if (item._step === 'STEP1') return 'star_3·4';
  // RPM 섹션 자동 매핑 (캘리브레이션 v1.3)
  if (/-교과서-/.test(src)) return 'star_1·2';
  if (/-유형-/.test(src) || /-시험-(?!실력)/.test(src)) return 'star_3·4';
  if (/-시험-실력업-/.test(src) || /-실력Up-/.test(src)) return 'star_4·5';
  return null;
}

function normalizeSourceId(item, filename) {
  if (item.source) return String(item.source);
  const base = filename.replace(/^mechanism-데이터-|\.md$/g, '');
  const step = item._step || 'STEP?';
  return `${base}-${step}-#${item._number || '?'}`;
}

async function loadAllSourceFiles() {
  const files = (await readdir(BANK_DIR))
    .filter(f => /^mechanism-데이터-.*\.md$/.test(f) && !/tier-매핑/.test(f))
    .sort();
  const all = [];
  for (const filename of files) {
    const fullPath = join(BANK_DIR, filename);
    const md = await readFile(fullPath, 'utf-8');
    const { front, body } = parseFrontmatter(md);
    const meta = front?.metadata || front || {};
    // v1.3: unit_code 파일 레벨 없어도 per-item 필드 확인 (RPM·블랙라벨 다중 챕터 지원)
    const fileUnitCode = meta.unit_code || front?.unit_code || null;
    const yamlBlocks = extractYamlBlocks(body);
    let items = [];
    if (yamlBlocks.length > 0) {
      for (const { content, startLine } of yamlBlocks) {
        items = items.concat(parseYamlBlock(content, startLine));
      }
    }
    // v1.3 (RPM·블랙라벨 raw YAML 지원): fence 없는 markdown body에도 - source: 항목 있으면 파싱
    if (items.length === 0) {
      const rawItems = parseYamlBlock(body, 1);
      if (rawItems.length > 0) items = rawItems;
    }
    if (items.length === 0) {
      items = parseMarkdownHeadingFormat(body);
    }
    for (const item of items) {
      const sourceId = normalizeSourceId(item, filename);
      const tier = detectTier(item);
      // v1.3: per-item unit_code (RPM·블랙라벨) 우선 · fallback으로 파일 레벨
      const itemUnitCode = item.unit_code || fileUnitCode;
      if (!itemUnitCode) continue; // unit_code 없으면 skip (요약 형식 무시)
      const secArr = Array.isArray(item.mechanism_secondary)
        ? item.mechanism_secondary
        : (item.mechanism_secondary ? [String(item.mechanism_secondary)] : []);
      all.push({
        source_id: sourceId,
        file: filename,
        line: item._line || 0,
        unit_code: itemUnitCode,
        tier,
        category: item.category || '',
        category_subtype: item.category_subtype || '',
        mechanism_primary: String(item.mechanism_primary || ''),
        mechanism_secondary: secArr.join(', '),
        problem_summary: String(item.problem_summary || '').trim(),
        solution_summary: String(item.solution_summary || '').trim(),
        answer: String(item.answer || '').trim(),
        page: item.page || null,
      });
    }
  }
  return all;
}

async function loadUsageLog() {
  try {
    const md = await readFile(USAGE_LOG, 'utf-8');
    const usages = [];
    // v2 라인 형식: `- \`source_id\` | round (문자열) | slot | outcome | rating`
    // 예: `- \`고쟁이-CH01-STEP2-#019\` | DeeP-Red-1 | #1 | master_approved | 5`
    const re = /^-\s+`?([^`|]+?)`?\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*(?:\|\s*([^|]+?)\s*)?(?:\|\s*(\d+)\s*)?$/gm;
    let m;
    while ((m = re.exec(md)) !== null) {
      usages.push({
        source_id: m[1].trim(),
        round: m[2].trim(),
        slot: m[3].trim(),
        outcome: (m[4] || '').trim(),
        rating: m[5] ? parseInt(m[5], 10) : null,
      });
    }
    return usages;
  } catch (e) {
    return [];
  }
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { top: 10, format: 'table' };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--unit') opts.unit = args[++i];
    else if (a === '--star') opts.star = args[++i];
    else if (a === '--mechanism') opts.mechanism = args[++i];
    else if (a === '--category') opts.category = args[++i];
    else if (a === '--exclude-recent') opts.excludeRecent = parseInt(args[++i], 10);
    else if (a === '--top') opts.top = parseInt(args[++i], 10);
    else if (a === '--source') opts.source = args[++i];
    else if (a === '--format') opts.format = args[++i];
    else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
  }
  return opts;
}

function printHelp() {
  console.log(`Usage: node scripts/source-filter.mjs [options]

정독 파일 tier 매핑 인덱스 조회 → 슬롯 요구사항 매칭 나열 (판단·순위 없음).

Options:
  --unit <CM1-PL|CM1-EQ|CM1-CB|CM1-MX|CM2-GM|CM2-ST|CM2-FN|CM2-RF>
                                 단원 필터
  --star <3|4|5|premium>         tier 필터 (v2.0 · 4단계: star_3·star_4·star_5·star_5_premium)
  --mechanism <substring>        mechanism_primary/secondary substring 매칭
  --category <substring>         category substring 매칭
  --exclude-recent <N>           usage-log.md 최근 N회차 사용분 제외
  --top <K>                      최대 K개 (기본 10)
  --source <source_id>           source_id 단건 조회 (다른 필터 무시)
  --format <table|json>          출력 형식 (기본 table)
  --help                         도움말
`);
}

function truncate(s, n) {
  if (!s) return '';
  const oneLine = s.replace(/\s+/g, ' ').trim();
  if (oneLine.length <= n) return oneLine;
  return oneLine.substring(0, n - 1) + '…';
}

function padDisplay(s, n) {
  // 한글은 2폭으로 계산
  let width = 0;
  let out = '';
  for (const ch of s) {
    const w = /[ᄀ-힣　-〿＀-￯]/.test(ch) ? 2 : 1;
    if (width + w > n) break;
    out += ch;
    width += w;
  }
  while (width < n) { out += ' '; width++; }
  return out;
}

function printTable(items) {
  if (items.length === 0) {
    console.log('(매칭 문항 없음)');
    return;
  }
  console.log(`\n총 ${items.length}건 매칭\n`);
  const H = ['#', 'source_id', 'tier', 'mechanism_primary', 'summary'];
  const W = [4, 36, 18, 44, 60];
  console.log(H.map((h, i) => padDisplay(h, W[i])).join(' | '));
  console.log(W.map(w => '-'.repeat(w)).join('-+-'));
  items.forEach((it, idx) => {
    const row = [
      String(idx + 1),
      it.source_id,
      it.tier || '?',
      truncate(it.mechanism_primary, 40),
      truncate(it.problem_summary || it.solution_summary, 55),
    ];
    console.log(row.map((r, i) => padDisplay(r, W[i])).join(' | '));
  });
  console.log(`\n원본 PDF 확인 후 청사진에 source: <source_id> 형식 기입.`);
}

async function main() {
  const opts = parseArgs();
  const all = await loadAllSourceFiles();
  const usages = await loadUsageLog();

  if (opts.source) {
    const it = all.find(x => x.source_id === opts.source);
    if (!it) {
      console.error(`source_id "${opts.source}" 매칭 없음`);
      process.exit(1);
    }
    console.log(JSON.stringify(it, null, 2));
    return;
  }

  let filtered = all;
  if (opts.unit) {
    filtered = filtered.filter(x => x.unit_code === opts.unit);
  }
  if (opts.star) {
    // v1.3 (2026-07-16 세션 46): 혼재 tier 지원 · 부분 매칭
    const wanted = opts.star === 'premium' ? 'star_5_premium'
                 : opts.star;
    filtered = filtered.filter(x => {
      const t = String(x.tier || '');
      // 정확 일치 우선
      if (t === wanted) return true;
      // 부분 매칭 (혼재 tier에 target star가 포함)
      if (opts.star === '1' || opts.star === '2') return t.includes('star_1·2') || t.includes(`star_${opts.star}`);
      if (opts.star === '3') return t.includes('star_3') || t.includes('star_3·4');
      if (opts.star === '4') return t.includes('star_4') && !t.includes('premium');
      if (opts.star === '5') return t === 'star_5' || t.includes('star_4·5');
      return false;
    });
  }
  if (opts.mechanism) {
    const q = opts.mechanism.toLowerCase();
    filtered = filtered.filter(x =>
      x.mechanism_primary.toLowerCase().includes(q) ||
      x.mechanism_secondary.toLowerCase().includes(q)
    );
  }
  if (opts.category) {
    const q = opts.category.toLowerCase();
    filtered = filtered.filter(x => x.category.toLowerCase().includes(q));
  }
  if (opts.excludeRecent && usages.length > 0) {
    // v2 회차가 문자열이므로 등장 순서대로 unique list 생성 → 마지막 N개가 최근
    const roundOrder = [];
    const seen = new Set();
    for (const u of usages) {
      if (!seen.has(u.round)) {
        roundOrder.push(u.round);
        seen.add(u.round);
      }
    }
    const recentRounds = new Set(roundOrder.slice(-opts.excludeRecent));
    const recentIds = new Set(
      usages.filter(u => recentRounds.has(u.round)).map(u => u.source_id)
    );
    filtered = filtered.filter(x => !recentIds.has(x.source_id));
  }

  filtered.sort((a, b) => a.source_id.localeCompare(b.source_id));
  const top = filtered.slice(0, opts.top);

  if (opts.format === 'json') {
    console.log(JSON.stringify(top, null, 2));
  } else {
    printTable(top);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

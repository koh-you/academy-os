#!/usr/bin/env node
// scripts/auto-fill-slots.mjs
//
// book.yaml의 slots[]에서 source_id가 비어 있는 슬롯에
// unit·effective_star·target_audience 조건이 맞는 SRC-* 자산을 자동 매핑.
//
// 사용:
//   node scripts/auto-fill-slots.mjs <book.yaml> [--out <out.yaml>] [--dry] [--prefix SRC-GJ,EX-HG,DI]
//
// 옵션:
//   --out <path>   결과 yaml 출력 경로 (기본: <book.yaml>.filled.yaml)
//   --dry          파일 저장 없이 stdout에 결과 출력
//   --prefix <p>   자산 풀 prefix 화이트리스트 (기본: SRC-,EX-,DI-,SRC-GJ-)
//                  [[feedback_no_self_asset_pool]] 정책에 따라 OUT-·MS-·CM1-* 등 자체 출제는 제외
//
// 자산화 정책 ([[feedback_book_corpus_policy]] 영구):
//   - 🌟 SRC-GJ-* (고쟁이) 우선
//   - EX-HG-* (학평) 다음
//   - DI-* (깊이와통찰) 다음
//   - OUT-*·MS-*·CM1-* 자체 출제 제외 ([[feedback_no_self_asset_pool]])
//
// 슬롯 frontmatter 형식 (book.yaml):
//   slots:
//     - num: 1
//       unit: CM1-EQ
//       effective_star: 4
//       target_audience: 중상위권
//       source_id: ""        # ← 자동 채움
//       type: M06            # (선택) 더 정밀 매칭
//       insights: [I-CON]    # (선택) 통찰 매칭

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');

// CLI 인자 파싱
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/auto-fill-slots.mjs <book.yaml> [--out <out.yaml>] [--dry] [--strict] [--prefix <prefixes>]');
  console.error('  --strict: type_id 정확 매칭 강제 (기본: unit + ★만 매칭, type 일치는 보너스 점수)');
  process.exit(2);
}

const bookYamlPath = args[0];
let outPath = `${bookYamlPath}.filled.yaml`;
let dryRun = false;
let strictType = false;
let allowedPrefixes = ['SRC-GJ-', 'SRC-', 'EX-HG-', 'EX-', 'DI-'];

for (let i = 1; i < args.length; i++) {
  if (args[i] === '--out' && args[i+1]) { outPath = args[++i]; }
  else if (args[i] === '--dry') { dryRun = true; }
  else if (args[i] === '--strict') { strictType = true; }
  else if (args[i] === '--prefix' && args[i+1]) {
    allowedPrefixes = args[++i].split(',').map(s => s.trim());
  }
}

// 자체 출제 제외 prefix ([[feedback_no_self_asset_pool]])
const FORBIDDEN_PREFIXES = ['OUT-', 'MS-', 'CM1-CB-', 'CM1-EQ-', 'CM1-MX-', 'CM1-PL-'];

function isForbidden(id) {
  return FORBIDDEN_PREFIXES.some(p => id.startsWith(p));
}

function isAllowed(id) {
  if (isForbidden(id)) return false;
  return allowedPrefixes.some(p => id.startsWith(p));
}

// 자산 풀 prefix 우선순위 (앞 = 우선)
const PREFIX_PRIORITY = {
  'SRC-GJ-': 1,    // 🌟 고쟁이 = 최우선
  'EX-HG-': 2,     // 학평 (고1)
  'EX-': 3,        // 기타 평가원·수능·교육청
  'DI-': 4,        // 깊이와통찰
  'SRC-': 5,       // 기타 시판 책
};

function prefixPriority(id) {
  for (const p in PREFIX_PRIORITY) {
    if (id.startsWith(p)) return PREFIX_PRIORITY[p];
  }
  return 99;
}

// YAML frontmatter 파싱
function parseFrontmatter(content) {
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  try {
    return yaml.load(m[1]);
  } catch (e) {
    return null;
  }
}

// 자산 풀 로드
async function loadAssetPool() {
  const files = await readdir(BANK_DIR);
  const pool = [];
  for (const f of files) {
    if (!f.endsWith('.md')) continue;
    const id = f.replace(/\.md$/, '');
    if (!isAllowed(id)) continue;
    const content = await readFile(join(BANK_DIR, f), 'utf-8');
    const fm = parseFrontmatter(content);
    if (!fm) continue;
    pool.push({
      id,
      unit: fm.unit,
      star: fm.effective_star || fm.base_star,
      type: fm.type,
      insights: fm.insights_used || [],
      target_audience: fm.target_audience,
      depth_score: fm.depth_score,
      keywords: fm.keywords || [],
      frequency: fm.frequency || 1,
      priority: prefixPriority(id),
    });
  }
  return pool;
}

// 슬롯 필드 양식 호환 (book.yaml + 청사진.yaml 둘 다 지원)
function slotStar(slot) {
  return slot.effective_star ?? slot.star ?? slot.base_star;
}
function slotNum(slot) {
  return slot.num ?? slot.slot;
}
function slotType(slot) {
  return slot.type ?? slot.type_id;
}
function slotInsights(slot) {
  // 청사진은 insight_cards = ["INSIGHT:RT-표현전환", ...] 양식
  // 자산은 insights_used = ["I-RT", ...] 양식
  // 양식 호환: insight_cards에서 약자 추출 ("RT" → "I-RT")
  if (Array.isArray(slot.insights)) return slot.insights;
  if (Array.isArray(slot.insight_cards)) {
    return slot.insight_cards.map(c => {
      const m = c.match(/INSIGHT:([A-Z]+)/);
      if (m) return `I-${m[1]}`;
      return c;
    });
  }
  return [];
}

// 슬롯에 맞는 후보 검색
function findCandidates(slot, pool, bookAudience) {
  const wantedStar = slotStar(slot);
  const wantedType = slotType(slot);
  const wantedInsights = slotInsights(slot);
  const wantedAudience = slot.target_audience ?? bookAudience;
  return pool.filter(p => {
    if (slot.unit && p.unit !== slot.unit) return false;
    if (wantedStar && p.star !== wantedStar) return false;
    if (wantedAudience && p.target_audience && p.target_audience !== wantedAudience) return false;
    // type 매칭은 --strict 모드에서만 강제
    if (strictType && wantedType && p.type !== wantedType) return false;
    if (wantedInsights.length > 0) {
      const overlap = wantedInsights.some(ins => p.insights.includes(ins));
      if (!overlap) return false;
    }
    return true;
  }).sort((a, b) => {
    // 0. type 일치 보너스 (strict 모드 아닐 때만 — strict는 이미 필터됨)
    if (!strictType && wantedType) {
      const aMatch = a.type === wantedType ? 0 : 1;
      const bMatch = b.type === wantedType ? 0 : 1;
      if (aMatch !== bMatch) return aMatch - bMatch;
    }
    if (a.priority !== b.priority) return a.priority - b.priority;
    if (a.depth_score !== b.depth_score) return (b.depth_score || 0) - (a.depth_score || 0);
    return (a.frequency || 1) - (b.frequency || 1);
  });
}

// 메인
async function main() {
  const bookYamlText = await readFile(bookYamlPath, 'utf-8');
  const book = yaml.load(bookYamlText);

  if (!book.slots || !Array.isArray(book.slots)) {
    console.error('❌ book.yaml에 slots[] 배열이 없습니다.');
    process.exit(1);
  }

  console.log(`📖 책: ${book.book_meta?.title || bookYamlPath}`);
  console.log(`   슬롯 ${book.slots.length}개`);
  console.log(`   자산 풀 prefix: ${allowedPrefixes.join(', ')}`);
  console.log(`   자체 출제 제외: ${FORBIDDEN_PREFIXES.join(', ')} ([[feedback_no_self_asset_pool]])\n`);

  const pool = await loadAssetPool();
  console.log(`📦 자산 풀: ${pool.length}문 (허용 prefix만)\n`);

  // 통계
  const stats = {
    total: book.slots.length,
    already_filled: 0,
    auto_filled: 0,
    no_candidate: 0,
    skip_locked: 0,
  };

  // 이미 사용된 source_id 추적 — 중복 매핑 회피
  const usedIds = new Set();
  for (const slot of book.slots) {
    if (slot.source_id) usedIds.add(slot.source_id);
  }

  for (const slot of book.slots) {
    if (slot.source_id && slot.source_id !== '' && slot.source_id !== null) {
      // 이미 채워진 슬롯 — 건드리지 않음
      if (slot.locked === true) {
        stats.skip_locked++;
      } else {
        stats.already_filled++;
      }
      continue;
    }

    const candidates = findCandidates(slot, pool, book.book_meta?.audience)
      .filter(c => !usedIds.has(c.id));
    if (candidates.length === 0) {
      const slotNumStr = slotNum(slot) ?? '-';
      const starStr = slotStar(slot);
      console.log(`⚠️  슬롯 #${slotNumStr}: 후보 없음 (unit=${slot.unit}, ★ ${starStr}, audience=${slot.target_audience || '-'})`);
      stats.no_candidate++;
      continue;
    }

    const top = candidates[0];
    slot.source_id = top.id;
    slot.source_meta = {
      unit: top.unit,
      star: top.star,
      type: top.type,
      depth_score: top.depth_score,
      keywords: top.keywords.slice(0, 3),
      candidate_count: candidates.length,
    };
    usedIds.add(top.id);  // 중복 회피

    const slotNumStr = slotNum(slot) ?? '-';
    const starStr = slotStar(slot);
    console.log(`✅ 슬롯 #${slotNumStr} → ${top.id} (${top.unit} ★ ${top.star}${top.depth_score ? ` depth=${top.depth_score}` : ''}, 후보 ${candidates.length}개)`);
    stats.auto_filled++;
  }

  console.log(`\n📊 통계:`);
  console.log(`   전체: ${stats.total}`);
  console.log(`   이미 채워진 슬롯: ${stats.already_filled}`);
  console.log(`   잠금 슬롯 (locked=true): ${stats.skip_locked}`);
  console.log(`   자동 매핑: ${stats.auto_filled}`);
  console.log(`   후보 없음: ${stats.no_candidate}`);

  const outYaml = yaml.dump(book, { lineWidth: 200, noRefs: true });

  if (dryRun) {
    console.log(`\n--- 결과 (--dry, 저장 안 함) ---`);
    console.log(outYaml);
  } else {
    await writeFile(outPath, outYaml, 'utf-8');
    console.log(`\n💾 저장: ${outPath}`);
  }

  if (stats.no_candidate > 0) {
    console.log(`\n⚠️  ${stats.no_candidate}개 슬롯에 자산 매핑 실패. 슬롯 조건 완화 또는 자산 추가 필요.`);
    process.exit(3);
  }
}

main().catch(err => {
  console.error('❌ 오류:', err.message);
  console.error(err.stack);
  process.exit(1);
});

#!/usr/bin/env node
// scripts/anchor-neighbors.mjs v1.1 (2026-07-21 · 세션 61 · 통찰 파싱 개선)
// v1.0 → v1.1: insights 빈 값 라인 명시 감지 · collecting 종료 조건 정확화
//   → 시그니처 유사도 정밀도 대폭 향상 (자기복제 감지 v1.0 72건 → v1.1 28건 정밀)
//
// 신규 문항의 시그니처 (insights + M + depth)를 기존 정독 자산 5155문 대상 이웃 검색.
// 소단원별 앵커 pool (bank/anchors/CM2-GM.md v2.0)의 star_5·premium 후보와 자기복제 대조.
//
// v1.0 목적:
//   - problem-author v2.1 · concept-author v1.1이 창작 후 자동 검증 도구로 활용
//   - anchor-compare.mjs v1 (축 점수 방식)의 v2.0 대체 (시그니처 매칭 방식)
//
// 사용:
//   # 신규 문항의 시그니처를 지정하여 이웃 검색
//   node scripts/anchor-neighbors.mjs \
//       --unit CM1-PL --sub 나머지정리와인수분해 --star premium \
//       --insights I-EQV,I-CON,I-BW --signal P4
//
//   # 기존 문항 (원본 pick 결과)의 이웃 확인
//   node scripts/anchor-neighbors.mjs --source 쎈-CM1-PL-0277 --limit 5

import { readFile, readdir } from 'node:fs/promises';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { limit: 10 };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--unit') opts.unit = args[++i];
    else if (args[i] === '--sub') opts.sub = args[++i];
    else if (args[i] === '--star') opts.star = args[++i];
    else if (args[i] === '--insights') opts.insights = args[++i]; // 콤마 분리
    else if (args[i] === '--signal') opts.signal = args[++i];      // P1..P6
    else if (args[i] === '--source') opts.source = args[++i];      // 기존 문항 id
    else if (args[i] === '--depth-min') opts.depthMin = parseFloat(args[++i]);
    else if (args[i] === '--limit') opts.limit = parseInt(args[++i]);
    else if (args[i] === '--help' || args[i] === '-h') {
      console.log(`Usage: node scripts/anchor-neighbors.mjs [options]

시그니처 기반 이웃 검색 (정독 자산 5155문 대상)

Filters:
  --unit <CM2-GM|CM1-PL|..>   대단원
  --sub <소단원 이름>          소단원 (평면좌표·원의방정식 등)
  --star <3|4|5|premium>      target 별점
  --insights <I-EQV,I-CON,..>  통찰 유형 (콤마 AND)
  --signal <P1..P6>            P 신호 카드
  --source <id>               기존 원본 id · 그 문항의 시그니처를 자동 로드하여 이웃 검색
  --depth-min <숫자>           depth_score 최소
  --limit <N>                 이웃 상한 (기본 10)

출력:
  각 이웃에 대해:
  - id · publisher · sub · depth_score · insights · 매칭 axis 수 · similarity_score`);
      process.exit(0);
    }
  }
  return opts;
}

// 정독 파일 파싱 (dokdu-query와 공유 로직 · 간략 버전)
function parseDokdu(md, filepath) {
  const items = [];
  const fmMatch = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  const body = fmMatch ? fmMatch[2] : md;
  const fmFields = {};
  if (fmMatch) {
    const fmBody = fmMatch[1];
    const pubM = fmBody.match(/name:\s*([^\n]+)/);
    if (pubM) {
      const n = pubM[1];
      if (/쎈|ssen/i.test(n)) fmFields.publisher = '쎈';
      else if (/마플/i.test(n)) fmFields.publisher = '마플시너지';
      else if (/개념원리/.test(n)) fmFields.publisher = '개념원리';
      else if (/RPM/i.test(n)) fmFields.publisher = 'RPM';
      else if (/고쟁이/.test(n)) fmFields.publisher = '고쟁이';
      else if (/블랙라벨/.test(n)) fmFields.publisher = '블랙라벨';
    }
    const subM = fmBody.match(/sub_unit:\s*([^\n]+)/) || fmBody.match(/section:\s*([^\n]+)/);
    if (subM) fmFields.sub = subM[1].trim().replace(/^["']|["']$/g, '');
    const unitM = fmBody.match(/unit_code:\s*([^\n]+)/);
    if (unitM) fmFields.unit = unitM[1].trim();
  }
  const lines = body.split(/\r?\n/);
  let cur = null, insightsCollecting = false, insightsBuffer = [], signalBuffer = [];
  const flushCur = () => {
    if (cur) {
      cur.insights_list = insightsBuffer.slice();
      cur.signal_ref_all = signalBuffer.slice();
      cur.file = basename(filepath);
      Object.assign(cur, { _fm: fmFields });
      if (!cur.publisher) cur.publisher = fmFields.publisher;
      if (!cur.sub) cur.sub = fmFields.sub;
      if (!cur.unit) cur.unit = fmFields.unit;
      items.push(cur);
      insightsBuffer = []; signalBuffer = []; insightsCollecting = false;
    }
  };
  for (const line of lines) {
    const mId = line.match(/^-\s*(?:source|id):\s*(.+?)\s*$/);
    if (mId) { flushCur(); cur = { id: mId[1].trim() }; continue; }
    if (!cur) continue;

    // v1.1 개선: insights 빈 값 라인 명시 감지
    if (/^\s+insights:\s*\[\s*\]\s*$/.test(line)) {
      insightsCollecting = false;
      continue;
    }
    if (/^\s+insights:\s*$/.test(line)) {
      insightsCollecting = true;
      continue;
    }

    const kv = line.match(/^\s+([\w_]+):\s*(.+?)\s*$/);
    if (kv) {
      const key = kv[1], val = kv[2].replace(/\s*#.*$/, '').trim();
      // insights 이외의 필드 만나면 collecting 종료
      if (key !== 'insights' && insightsCollecting) insightsCollecting = false;
      if (key !== 'insights') cur[key] = val;
    }

    // 통찰 카드 라인 파싱 (- {step: N, type: I-XX, ...} inline)
    if (insightsCollecting) {
      const tm = line.match(/type:\s*(I-[A-Z]+)/);
      if (tm) insightsBuffer.push(tm[1]);
      const sm = line.match(/signal_ref:\s*\[([^\]]+)\]/);
      if (sm) signalBuffer.push(...sm[1].split(',').map(s => s.trim()));
    }
  }
  flushCur();
  return items;
}

function starFromTier(tier) {
  if (!tier) return null;
  const t = String(tier).replace(/^["']|["']$/g, '');
  if (/premium/.test(t)) return 'premium';
  const m = t.match(/star_(\d+)/);
  return m ? parseInt(m[1]) : null;
}

// 시그니처 유사도 (0.0~1.0)
function signatureSimilarity(query, item) {
  let score = 0, total = 0;
  // 통찰 유형 매칭 (Jaccard 유사)
  if (query.insights && query.insights.length > 0) {
    const qSet = new Set(query.insights);
    const iSet = new Set(item.insights_list || []);
    const inter = [...qSet].filter(x => iSet.has(x)).length;
    const uni = new Set([...qSet, ...iSet]).size;
    if (uni > 0) { score += inter / uni; total += 1; }
  }
  // depth_score 근접
  if (query.depthMin != null && item.depth_score) {
    const ds = parseFloat(item.depth_score);
    if (ds >= query.depthMin) { score += 1; total += 1; }
  }
  // signal 매칭
  if (query.signal) {
    if ((item.signal_ref_all || []).includes(query.signal)) { score += 1; total += 1; }
  }
  return total > 0 ? score / total : 0;
}

async function main() {
  const opts = parseArgs();
  const files = (await readdir(BANK_DIR)).filter(f => f.startsWith('mechanism-데이터-') && f.endsWith('.md'));
  let allItems = [];
  for (const f of files) {
    const md = await readFile(join(BANK_DIR, f), 'utf-8');
    allItems = allItems.concat(parseDokdu(md, f));
  }

  // --source 옵션: 기존 문항의 시그니처를 자동 로드
  let query = {
    insights: opts.insights ? opts.insights.split(',').map(s => s.trim()) : null,
    signal: opts.signal,
    depthMin: opts.depthMin
  };
  if (opts.source) {
    const src = allItems.find(it => it.id === opts.source);
    if (!src) {
      console.error(`[anchor-neighbors] source id "${opts.source}" 못 찾음`);
      process.exit(1);
    }
    query.insights = src.insights_list;
    query.signal = (src.signal_ref_all || [])[0];
    query.depthMin = parseFloat(src.depth_score) - 0.5;
    console.log(`\n[source auto-load] ${opts.source}`);
    console.log(`  publisher=${src.publisher} sub=${src.sub} depth=${src.depth_score}`);
    console.log(`  insights=${src.insights_list.join(',')} signals=${(src.signal_ref_all || []).join(',')}\n`);
  }

  // 1차 필터 (unit/sub/star)
  let filtered = allItems.filter(it => {
    if (opts.source && it.id === opts.source) return false;  // 자기 자신 제외
    if (opts.unit && it.unit !== opts.unit) return false;
    if (opts.sub && !new RegExp(opts.sub).test(it.sub || '')) return false;
    if (opts.star) {
      const s = starFromTier(it.tier);
      if (opts.star === 'premium' && it.premium !== 'true' && s !== 'premium') return false;
      else if (opts.star !== 'premium' && String(s) !== String(opts.star)) return false;
    }
    return true;
  });

  // 시그니처 유사도 계산 · 정렬
  const scored = filtered.map(it => ({
    item: it,
    sim: signatureSimilarity(query, it)
  })).filter(s => s.sim > 0).sort((a, b) => b.sim - a.sim);

  console.log(`[anchor-neighbors v1.0] 이웃 검색`);
  console.log(`  전체 자산: ${allItems.length} · 1차 필터 후: ${filtered.length} · 시그니처 매칭: ${scored.length}`);
  console.log(`  쿼리: insights=${query.insights?.join(',') || '-'} signal=${query.signal || '-'} depthMin=${query.depthMin || '-'}\n`);

  if (scored.length === 0) {
    console.log('  ⚠ 이웃 없음. 필터 완화 or 새 원형일 가능성.');
    return;
  }

  console.log('rank | sim  | id                                          | pub    | sub          | depth | insights');
  console.log('-'.repeat(130));
  for (const [i, s] of scored.slice(0, opts.limit).entries()) {
    const r = s.item;
    const insights = (r.insights_list || []).slice(0, 4).join(',') || '-';
    console.log(
      `${String(i+1).padStart(4)} | ${s.sim.toFixed(2)} | ${String(r.id).padEnd(44)} | ${(r.publisher || '-').padEnd(6)} | ${(r.sub || '-').padEnd(12)} | ${(r.depth_score || '-').toString().padStart(5)} | ${insights}`
    );
  }

  // 자기복제 경고
  const veryHigh = scored.filter(s => s.sim >= 0.8);
  if (veryHigh.length > 0) {
    console.log(`\n🔴 자기복제 위험: 시그니처 유사도 ≥ 0.8 이웃 ${veryHigh.length}건`);
    for (const s of veryHigh.slice(0, 3)) {
      console.log(`   → ${s.item.id} (sim=${s.sim.toFixed(2)}) · ${s.item.file}`);
    }
    console.log(`   대응: 원형 다양성 확보를 위해 다른 원본 pick 또는 최소 변형 재설계`);
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });

#!/usr/bin/env node
// scripts/dokdu-query.mjs v1.0 (2026-07-21 · 세션 58)
//
// 정독 자산 (bank/mechanism-데이터-*.md · v2.0 통합 스키마) 다차원 검색 도구.
// bank-query.mjs (bank/problems/*.md 대상)와 별도. problem-author·concept-author agent가 원본 pick 시 활용.
//
// 사용:
//   node scripts/dokdu-query.mjs --star 4 --unit CM2-GM --sub 도형이동
//   node scripts/dokdu-query.mjs --premium true                          # premium 후보만
//   node scripts/dokdu-query.mjs --insights I-SYM,I-XU                   # 통찰 유형 (AND)
//   node scripts/dokdu-query.mjs --depth-min 8.0                         # depth_score 최소
//   node scripts/dokdu-query.mjs --publisher 쎈,마플시너지                # 벤더 (OR)
//   node scripts/dokdu-query.mjs --target 상위권 --star 5                # 대상층 + ★
//   node scripts/dokdu-query.mjs --signal-ref P6                         # P 신호 카드 (OR)
//   node scripts/dokdu-query.mjs --csv results.csv                       # CSV 저장
//   node scripts/dokdu-query.mjs --limit 50                              # 결과 상한

import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { limit: 50 };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--star') opts.star = args[++i];               // 1|2|3|4|5|premium
    if (a === '--tier') opts.tier = args[++i];               // star_1..star_5_premium
    else if (a === '--unit') opts.unit = args[++i];
    else if (a === '--sub' || a === '--sub-unit') opts.sub = args[++i];
    else if (a === '--publisher') opts.publisher = args[++i]; // 쎈, 마플시너지 등 (콤마 OR)
    else if (a === '--insights') opts.insights = args[++i];  // I-XU,I-SYM (콤마 AND)
    else if (a === '--signal-ref') opts.signalRef = args[++i]; // P1..P6 (콤마 OR)
    else if (a === '--depth-min') opts.depthMin = parseFloat(args[++i]);
    else if (a === '--depth-max') opts.depthMax = parseFloat(args[++i]);
    else if (a === '--premium') opts.premium = args[++i] === 'true';
    else if (a === '--target') opts.target = args[++i];
    else if (a === '--anchor') opts.anchor = args[++i];      // candidate|anchor
    else if (a === '--csv') opts.csv = args[++i];
    else if (a === '--limit') opts.limit = parseInt(args[++i]);
    else if (a === '--help' || a === '-h') {
      console.log(`Usage: node scripts/dokdu-query.mjs [options]

정독 자산 다차원 검색 (bank/mechanism-데이터-*.md · v2.0)

Filters:
  --star <1|2|3|4|5|premium>  ★ 필터 (숫자 or premium)
  --tier <star_1..star_5_premium>  raw tier 필터
  --unit <CM1-EQ|CM2-GM|..>   대단원
  --sub <소단원 이름>          소단원 (평면좌표·원의방정식·이차방정식 등)
  --publisher <이름>          벤더 (쎈|마플시너지|개념원리 등 · 콤마 OR)
  --insights <I-XU,I-SYM>     통찰 유형 (콤마 AND · effective_depth 무관)
  --signal-ref <P1,P6>        P 신호 카드 (콤마 OR)
  --depth-min <숫자>           depth_score 최소
  --depth-max <숫자>           depth_score 최대
  --premium true               premium 후보만
  --target <cohort>            대상층 (상위권 등)
  --anchor <candidate|anchor>  anchor_status 필터

Output:
  --csv <file>                결과 CSV 저장
  --limit <N>                결과 상한 (기본 50)`);
      process.exit(0);
    }
  }
  return opts;
}

// 정독 파일 YAML 항목 파싱 (```yaml 블록 안의 - id: 각 항목)
function parseDokduFile(md, filepath) {
  const items = [];
  // frontmatter 스킵
  const fmMatch = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  const body = fmMatch ? fmMatch[2] : md;
  const fmFields = {};
  if (fmMatch) {
    const fmBody = fmMatch[1];
    const pubM = fmBody.match(/name:\s*([^\n]+)/);
    if (pubM) {
      const name = pubM[1].trim();
      if (/쎈|ssen/i.test(name)) fmFields.publisher = '쎈';
      else if (/마플시너지|mapl/i.test(name)) fmFields.publisher = '마플시너지';
      else if (/개념원리/.test(name)) fmFields.publisher = '개념원리';
      else if (/RPM/i.test(name)) fmFields.publisher = 'RPM';
      else if (/고쟁이/.test(name)) fmFields.publisher = '고쟁이';
      else if (/블랙라벨/.test(name)) fmFields.publisher = '블랙라벨';
    }
    const subM = fmBody.match(/sub_unit:\s*([^\n]+)/) || fmBody.match(/section:\s*([^\n]+)/);
    if (subM) fmFields.sub = subM[1].trim().replace(/^["']|["']$/g, '');
    const unitM = fmBody.match(/unit_code:\s*([^\n]+)/);
    if (unitM) fmFields.unit = unitM[1].trim();
  }

  const lines = body.split(/\r?\n/);
  let cur = null;
  let insightsCollecting = false;
  let insightsBuffer = [];

  const flushCur = () => {
    if (cur) {
      cur.insights_list = insightsBuffer.slice();
      cur.file = basename(filepath);
      Object.assign(cur, { _fm: fmFields });
      if (!cur.publisher) cur.publisher = fmFields.publisher;
      if (!cur.sub) cur.sub = fmFields.sub;
      if (!cur.unit) cur.unit = fmFields.unit;
      items.push(cur);
      insightsBuffer = [];
      insightsCollecting = false;
    }
  };

  for (const line of lines) {
    const mId = line.match(/^-\s*(?:source|id):\s*(.+?)\s*$/);
    if (mId) {
      flushCur();
      cur = { id: mId[1].trim() };
      continue;
    }
    if (!cur) continue;
    const kv = line.match(/^\s+([\w_]+):\s*(.+?)\s*$/);
    if (kv) {
      const key = kv[1];
      const val = kv[2].replace(/\s*#.*$/, '').trim();
      if (key === 'insights') {
        insightsCollecting = true;
      } else {
        cur[key] = val;
        insightsCollecting = false;
      }
    }
    // 통찰 카드 추출 (- {step: N, type: I-XX, ...})
    if (insightsCollecting) {
      const typeM = line.match(/type:\s*(I-[A-Z]+)/);
      if (typeM) insightsBuffer.push(typeM[1]);
      const sigM = line.match(/signal_ref:\s*\[([^\]]+)\]/);
      if (sigM) {
        cur.signal_ref_all = (cur.signal_ref_all || []).concat(sigM[1].split(',').map(s => s.trim()));
      }
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

async function main() {
  const opts = parseArgs();
  const files = (await readdir(BANK_DIR)).filter(f =>
    f.startsWith('mechanism-데이터-') && f.endsWith('.md')
  );

  let allItems = [];
  for (const f of files) {
    const md = await readFile(join(BANK_DIR, f), 'utf-8');
    allItems = allItems.concat(parseDokduFile(md, f));
  }

  // 필터 적용
  const publishers = opts.publisher ? opts.publisher.split(',').map(s => s.trim()) : null;
  const insightsReq = opts.insights ? opts.insights.split(',').map(s => s.trim()) : null;
  const signalReqs = opts.signalRef ? opts.signalRef.split(',').map(s => s.trim()) : null;

  const filtered = allItems.filter(it => {
    const star = starFromTier(it.tier);
    if (opts.star != null) {
      if (opts.star === 'premium' && it.premium !== 'true' && star !== 'premium') return false;
      else if (opts.star !== 'premium' && String(star) !== String(opts.star)) return false;
    }
    if (opts.tier && it.tier !== opts.tier) return false;
    if (opts.unit && it.unit !== opts.unit) return false;
    if (opts.sub && !new RegExp(opts.sub).test(it.sub || '')) return false;
    if (publishers && !publishers.includes(it.publisher)) return false;
    if (insightsReq && !insightsReq.every(t => it.insights_list.includes(t))) return false;
    if (signalReqs) {
      const has = (it.signal_ref_all || []).some(s => signalReqs.includes(s));
      if (!has) return false;
    }
    if (opts.depthMin != null && (!it.depth_score || parseFloat(it.depth_score) < opts.depthMin)) return false;
    if (opts.depthMax != null && (!it.depth_score || parseFloat(it.depth_score) > opts.depthMax)) return false;
    if (opts.premium != null) {
      const isPrem = it.premium === 'true';
      if (opts.premium !== isPrem) return false;
    }
    if (opts.target && it.target_cohort !== opts.target) return false;
    if (opts.anchor && it.anchor_status !== opts.anchor) return false;
    return true;
  });

  console.log(`\n[dokdu-query.mjs v1.0] 정독 자산 검색`);
  console.log(`  전체 자산: ${allItems.length} 문항 (${files.length} 파일)`);
  console.log(`  필터 매치: ${filtered.length} 문항`);
  console.log(`  필터: ${JSON.stringify(opts)}\n`);

  if (filtered.length === 0) return;

  console.log('ID                                            | ★  | pub    | sub          | depth | insights          | file');
  console.log('-'.repeat(140));
  for (const r of filtered.slice(0, opts.limit)) {
    const star = starFromTier(r.tier) || '-';
    const starStr = r.premium === 'true' ? 'PREM' : String(star);
    const insights = (r.insights_list || []).slice(0, 4).join(',') || '-';
    console.log(
      `${String(r.id).padEnd(46)} | ${starStr.padEnd(3)} | ${(r.publisher || '-').padEnd(6)} | ${(r.sub || '-').padEnd(12)} | ${(r.depth_score || '-').toString().padStart(5)} | ${insights.padEnd(17)} | ${r.file}`
    );
  }
  if (filtered.length > opts.limit) {
    console.log(`\n... ${filtered.length - opts.limit} more (use --limit to show more)`);
  }

  if (opts.csv) {
    const header = 'id,star,tier,publisher,unit,sub,depth_score,premium,target_cohort,insights,signal_ref,file';
    const rows = filtered.map(r => [
      r.id,
      starFromTier(r.tier) || '',
      r.tier || '',
      r.publisher || '',
      r.unit || '',
      r.sub || '',
      r.depth_score || '',
      r.premium || '',
      r.target_cohort || '',
      (r.insights_list || []).join(';'),
      (r.signal_ref_all || []).join(';'),
      r.file
    ].map(v => String(v).includes(',') ? `"${v}"` : v).join(','));
    await writeFile(opts.csv, [header, ...rows].join('\n'), 'utf-8');
    console.log(`\nCSV: ${opts.csv} (${filtered.length} rows)`);
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });

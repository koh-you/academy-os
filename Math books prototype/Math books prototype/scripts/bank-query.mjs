#!/usr/bin/env node
// scripts/bank-query.mjs
//
// 사용:
//   node scripts/bank-query.mjs [--unit CM2-RF] [--star 4] [--freq 3]
//                                [--rate-min 0.3] [--rate-max 0.6]
//                                [--status approved] [--source DI|OUT|MS|SRC|EX]
//                                [--limit 30]
//
// bank/problems/*.md 전체에서 다중 조건 조합 검색 → 미리보기 표 출력.

import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  try { return yaml.load(m[1]); } catch (e) { return null; }
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { limit: 30 };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--unit') opts.unit = args[++i];
    else if (a === '--star') opts.star = parseInt(args[++i]);
    else if (a === '--freq') opts.freq = parseInt(args[++i]);
    else if (a === '--rate-min') opts.rateMin = parseFloat(args[++i]);
    else if (a === '--rate-max') opts.rateMax = parseFloat(args[++i]);
    else if (a === '--status') opts.status = args[++i];
    else if (a === '--source') opts.source = args[++i];
    else if (a === '--limit') opts.limit = parseInt(args[++i]);
    else if (a === '--type') opts.type = args[++i];
    else if (a === '--cohort') opts.cohort = args[++i];
    else if (a === '--csv') opts.csv = args[++i];
    else if (a === '--help' || a === '-h') {
      console.log(`Usage: node scripts/bank-query.mjs [options]
Options:
  --unit <CM1-PL|CM2-RF|...>   단원 필터
  --type <T-code>              T-code 필터 (예: T19, EQ-T23)
  --star <1-5>                 상대 ★
  --freq <1-3>                 frequency
  --rate-min <0.0-1.0>         정답률 최소
  --rate-max <0.0-1.0>         정답률 최대
  --status <meta_only|draft|approved>
  --source <DI|OUT|MS|SRC|EX>  출처 prefix (DI=학원·OUT=우리책·MS=마플시너지·SRC=시판·EX=학평/평가원/EBS)
  --cohort <파일명>            cohort_unit
  --csv <output.csv>           결과를 CSV로 저장
  --limit <N>                  결과 최대 (기본 30)`);
      process.exit(0);
    }
  }
  return opts;
}

async function main() {
  const opts = parseArgs();
  const files = (await readdir(BANK_DIR)).filter(f => f.endsWith('.md'));
  const results = [];

  for (const f of files) {
    if (opts.source && !f.startsWith(opts.source + '-')) continue;
    const fm = parseFrontmatter(await readFile(join(BANK_DIR, f), 'utf-8'));
    if (!fm) continue;
    if (opts.unit && fm.unit !== opts.unit) continue;
    if (opts.type && fm.type !== opts.type) continue;
    if (opts.freq != null && fm.frequency !== opts.freq) continue;
    if (opts.status && fm.status !== opts.status) continue;
    const ext = (fm.external_labels && fm.external_labels[0]) || {};
    const star = ext.cohort_normalized_star || fm.dot_star || null;
    const rate = ext.actual_correct_rate;
    if (opts.star != null && star !== opts.star) continue;
    if (opts.rateMin != null && (rate == null || rate < opts.rateMin)) continue;
    if (opts.rateMax != null && (rate == null || rate > opts.rateMax)) continue;
    if (opts.cohort && ext.cohort_unit !== opts.cohort) continue;
    results.push({
      id: fm.id, unit: fm.unit, type: fm.type, star, rate, freq: fm.frequency,
      status: fm.status, typeName: fm.type_in_source || ''
    });
  }

  console.log(`Found ${results.length} matches (filter: ${JSON.stringify(opts)})`);
  console.log('');
  console.log('ID                                | Unit    | Type    | ★ | Rate  | Freq | Status     | TypeName');
  console.log('-'.repeat(120));
  for (const r of results.slice(0, opts.limit)) {
    const rateStr = r.rate != null ? `${(r.rate * 100).toFixed(0)}%` : '  -';
    console.log(`${r.id.padEnd(34)} | ${r.unit.padEnd(7)} | ${(r.type || '').padEnd(7)} | ${r.star || '-'} | ${rateStr.padStart(4)} | ${(r.freq || '-').toString().padStart(4)} | ${(r.status || '').padEnd(10)} | ${r.typeName.substring(0, 40)}`);
  }
  if (results.length > opts.limit) {
    console.log(`... ${results.length - opts.limit} more (use --limit to see more)`);
  }

  if (opts.csv) {
    const header = 'id,unit,type,star,rate,freq,status,typeName';
    const rows = results.map(r => {
      const rateStr = r.rate != null ? r.rate.toFixed(3) : '';
      const tn = (r.typeName || '').replace(/"/g, '""').replace(/,/g, '，');
      return `${r.id},${r.unit},${r.type || ''},${r.star || ''},${rateStr},${r.freq || ''},${r.status || ''},"${tn}"`;
    });
    await writeFile(opts.csv, [header, ...rows].join('\n'), 'utf-8');
    console.log(`CSV: ${opts.csv} (${results.length} rows)`);
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });

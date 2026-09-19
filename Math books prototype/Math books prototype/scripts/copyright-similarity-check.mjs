#!/usr/bin/env node
// scripts/copyright-similarity-check.mjs
//
// 변형본 (문제.tex 슬롯 or bank/problems/*.md) vs 정독 원본 유사도 검증.
// 최소 변형 (숫자 교체 · 동등 변형) 정책 준수 검증 목적.
// 임계값 상한 (기본 0.85) 초과 시 RED (원문 그대로 인용 위험) · 하한 (기본 0.30) 미만 시 WARN (변형 과다 · 원본 통찰 훼손 위험).
//
// 사용:
//   node scripts/copyright-similarity-check.mjs \
//     --variant output/공통수학1/12회/문제.tex \
//     --slot 14 \
//     --source "고쟁이-CH03-STEP3-#186"
//
//   node scripts/copyright-similarity-check.mjs \
//     --variant-text "삼차식 f(x)=x^3+2x^2..." \
//     --source "고쟁이-CH03-STEP3-#186"

import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const SOURCE_FILTER = join(__dirname, 'source-filter.mjs');

const UPPER_THRESHOLD = 0.85;  // 초과 시 RED (원문 그대로)
const LOWER_THRESHOLD = 0.30;  // 미만 시 WARN (변형 과다)

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { upper: UPPER_THRESHOLD, lower: LOWER_THRESHOLD };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--variant') opts.variant = args[++i];
    else if (a === '--variant-text') opts.variantText = args[++i];
    else if (a === '--source') opts.source = args[++i];
    else if (a === '--slot') opts.slot = args[++i];
    else if (a === '--upper') opts.upper = parseFloat(args[++i]);
    else if (a === '--lower') opts.lower = parseFloat(args[++i]);
    else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
  }
  return opts;
}

function printHelp() {
  console.log(`Usage: node scripts/copyright-similarity-check.mjs [options]

변형본 vs 정독 원본 텍스트 유사도 검증.

Options:
  --variant <path>        변형본 tex 파일 경로
  --slot <N>              tex 안 슬롯 번호 (해당 problem 환경만 추출)
  --variant-text <str>    직접 문자열 (테스트용)
  --source <source_id>    원본 (정독 파일 조회)
  --upper <0-1>           상한 임계값 (기본 0.85, 초과 시 RED)
  --lower <0-1>           하한 임계값 (기본 0.30, 미만 시 WARN)
  --help                  도움말

Exit code:
  0 = GREEN (하한 ≤ 유사도 ≤ 상한)
  1 = 사용 오류
  2 = WARN (하한 미만 · 변형 과다)
  3 = RED (상한 초과 · 원문 인용 위험)
`);
}

function normalize(text) {
  // LaTeX 수식·명령·공백 정규화
  return text
    .replace(/\\[a-zA-Z]+\{[^}]*\}/g, ' ')  // \cmd{...}
    .replace(/\\[a-zA-Z]+/g, ' ')            // \cmd
    .replace(/\$[^$]+\$/g, ' NUM ')          // 인라인 수식 → NUM 토큰
    .replace(/\$\$[\s\S]+?\$\$/g, ' NUM ')   // 디스플레이 수식
    .replace(/[\p{P}\p{S}]/gu, ' ')          // 구두점·기호
    .replace(/\d+/g, 'N')                    // 숫자 → N (숫자 교체 변형 허용)
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function trigrams(text) {
  const norm = normalize(text);
  const set = new Set();
  for (let i = 0; i <= norm.length - 3; i++) {
    set.add(norm.substring(i, i + 3));
  }
  return set;
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 0;
  const intersection = new Set();
  for (const x of a) if (b.has(x)) intersection.add(x);
  const union = new Set([...a, ...b]);
  return intersection.size / union.size;
}

function extractSlotFromTex(tex, slotNumber) {
  // \begin{problem}{N}{...}...\end{problem} 블록 추출
  const re = new RegExp(
    `\\\\begin\\{problem\\}\\{${slotNumber}\\}[\\s\\S]*?\\\\end\\{problem\\}`
  );
  const m = tex.match(re);
  return m ? m[0] : null;
}

async function getSourceText(sourceId) {
  const result = spawnSync('node', [SOURCE_FILTER, '--source', sourceId], { encoding: 'utf-8' });
  if (result.status !== 0) {
    throw new Error(`source-filter 조회 실패: ${result.stderr}`);
  }
  const data = JSON.parse(result.stdout);
  return {
    problem: data.problem_summary || '',
    solution: data.solution_summary || '',
    mechanism: data.mechanism_primary || '',
  };
}

async function main() {
  const opts = parseArgs();
  if (!opts.source) {
    console.error('--source 필수');
    process.exit(1);
  }
  let variantText = opts.variantText;
  if (!variantText && opts.variant) {
    const tex = await readFile(opts.variant, 'utf-8');
    if (opts.slot) {
      variantText = extractSlotFromTex(tex, opts.slot);
      if (!variantText) {
        console.error(`슬롯 ${opts.slot} 추출 실패`);
        process.exit(1);
      }
    } else {
      variantText = tex;
    }
  }
  if (!variantText) {
    console.error('--variant or --variant-text 필수');
    process.exit(1);
  }

  const src = await getSourceText(opts.source);
  if (!src.problem) {
    console.error(`원본 problem_summary 없음: ${opts.source}`);
    process.exit(1);
  }

  const varTri = trigrams(variantText);
  const srcTri = trigrams(src.problem);
  const sim = jaccard(varTri, srcTri);

  const result = {
    source_id: opts.source,
    variant_length: variantText.length,
    source_length: src.problem.length,
    similarity: sim.toFixed(4),
    upper_threshold: opts.upper,
    lower_threshold: opts.lower,
  };

  let status, exitCode;
  if (sim > opts.upper) {
    status = 'RED';
    exitCode = 3;
    result.diagnosis = `원문 그대로 인용 위험 (유사도 ${(sim*100).toFixed(1)}% > 상한 ${(opts.upper*100).toFixed(1)}%). 최소한 숫자·표현 교체 필요.`;
  } else if (sim < opts.lower) {
    status = 'WARN';
    exitCode = 2;
    result.diagnosis = `변형 과다 · 원본 통찰 훼손 위험 (유사도 ${(sim*100).toFixed(1)}% < 하한 ${(opts.lower*100).toFixed(1)}%). 원본과 다른 문제일 가능성.`;
  } else {
    status = 'GREEN';
    exitCode = 0;
    result.diagnosis = `적정 범위 (${(opts.lower*100).toFixed(1)}% ≤ ${(sim*100).toFixed(1)}% ≤ ${(opts.upper*100).toFixed(1)}%). 최소 변형 정책 준수.`;
  }
  result.status = status;

  console.log(JSON.stringify(result, null, 2));
  process.exit(exitCode);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

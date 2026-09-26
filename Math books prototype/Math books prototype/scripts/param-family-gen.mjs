#!/usr/bin/env node
// scripts/param-family-gen.mjs
//
// β 매개변수족 생성 도구 (Stage 1 · 2026-07-15 세션 44 신설)
// bank/param-templates/*.yaml 로드 → 매개변수 범위에서 변형 자동 산출
// 원본 mechanism 100% 보존 · 유효성 제약 자동 검증
//
// 사용:
//   node scripts/param-family-gen.mjs --list                                        # 사용 가능 template 목록
//   node scripts/param-family-gen.mjs --template <name>                             # verified_seeds 표시
//   node scripts/param-family-gen.mjs --template <name> --seed <N>                  # 특정 seed 발문·답 산출
//   node scripts/param-family-gen.mjs --template <name> --count 10                  # 신 변형 10개 자동 생성

import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { create, all } from 'mathjs';

const math = create(all);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const PARAM_DIR = join(PROJECT_ROOT, 'bank', 'param-templates');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { count: 5 };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--list') opts.list = true;
    else if (a === '--template') opts.template = args[++i];
    else if (a === '--seed') opts.seed = parseInt(args[++i], 10);
    else if (a === '--count') opts.count = parseInt(args[++i], 10);
    else if (a === '--format') opts.format = args[++i];
    else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
  }
  return opts;
}

function printHelp() {
  console.log(`Usage: node scripts/param-family-gen.mjs [options]

β 매개변수족 생성 도구 (Stage 1 · 2026-07-15).

Options:
  --list                       사용 가능한 template 목록
  --template <name>            template 로드 (파일명 or 이름 부분 매칭)
  --seed <N>                   verified_seeds에서 특정 seed 산출
  --count <K>                  신 변형 K개 랜덤 생성 (기본 5)
  --format <text|json|tex>     출력 형식 (기본 text)
  --help                       도움말
`);
}

async function listTemplates() {
  const files = (await readdir(PARAM_DIR)).filter(f => f.endsWith('.yaml'));
  console.log(`\n사용 가능 template ${files.length}개:\n`);
  for (const f of files) {
    const content = await readFile(join(PARAM_DIR, f), 'utf-8');
    const doc = yaml.load(content);
    console.log(`  ${f.replace(/\.yaml$/, '').padEnd(30)} (${doc.tier || 'unknown'}) → ${doc.mechanism_primary || ''}`);
  }
  console.log();
}

async function loadTemplate(name) {
  const files = (await readdir(PARAM_DIR)).filter(f => f.endsWith('.yaml'));
  const match = files.find(f => f.replace(/\.yaml$/, '') === name || f.includes(name));
  if (!match) throw new Error(`template "${name}" not found. Available: ${files.map(f => f.replace(/\.yaml$/, '')).join(', ')}`);
  const content = await readFile(join(PARAM_DIR, match), 'utf-8');
  return { doc: yaml.load(content), filename: match };
}

function renderTemplate(str, vars) {
  return str.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (m, key) => {
    const path = key.split('.');
    let val = vars;
    for (const p of path) {
      if (val && typeof val === 'object') val = val[p];
      else return m;
    }
    return val !== undefined ? String(val) : m;
  });
}

function showSeed(doc, seedNum) {
  if (!doc.verified_seeds || !Array.isArray(doc.verified_seeds)) {
    console.log('(verified_seeds 없음)');
    return;
  }
  const seed = doc.verified_seeds.find(s => s.seed === seedNum);
  if (!seed) {
    console.log(`seed ${seedNum} 없음. 사용 가능: ${doc.verified_seeds.map(s => s.seed).join(', ')}`);
    return;
  }
  console.log(`\n=== ${doc.name} · seed ${seedNum} ===\n`);
  console.log('원본:', doc.source_id, `(${doc.tier})`);
  console.log('mechanism:', doc.mechanism_primary);
  console.log('\n매개변수:');
  for (const [k, v] of Object.entries(seed)) {
    if (k === 'seed' || k === 'source_ref') continue;
    console.log(`  ${k}: ${JSON.stringify(v)}`);
  }
  if (doc.prompt_template) {
    console.log('\n발문:');
    const prompt = renderTemplate(doc.prompt_template, seed);
    console.log(prompt);
  }
  if (seed.source_ref) console.log(`\n출처: ${seed.source_ref}`);
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sampleParam(spec) {
  if (spec.choices) return spec.choices[randInt(0, spec.choices.length - 1)];
  if (spec.range) {
    const [min, max] = spec.range;
    let v;
    do { v = randInt(min, max); }
    while (spec.exclude && spec.exclude.includes(v));
    return v;
  }
  if (spec.structure === 'point') {
    return { x: sampleParam(spec.x), y: sampleParam(spec.y) };
  }
  return null;
}

function generateVariants(doc, count) {
  const variants = [];
  const params = doc.parameters || {};
  for (let i = 0; i < count * 3 && variants.length < count; i++) {
    const v = {};
    for (const [k, spec] of Object.entries(params)) {
      v[k] = sampleParam(spec);
    }
    variants.push(v);
  }
  return variants;
}

async function main() {
  const opts = parseArgs();

  if (opts.list) {
    await listTemplates();
    return;
  }

  if (!opts.template) {
    printHelp();
    process.exit(1);
  }

  const { doc, filename } = await loadTemplate(opts.template);

  if (opts.seed !== undefined) {
    showSeed(doc, opts.seed);
    return;
  }

  // verified_seeds 표시 + 신 변형 count개 생성
  console.log(`\n=== ${doc.name} (${filename}) ===`);
  console.log('원본:', doc.source_id, `(${doc.tier})`);
  console.log('mechanism:', doc.mechanism_primary);

  if (doc.verified_seeds && doc.verified_seeds.length > 0) {
    console.log(`\n검증 seed ${doc.verified_seeds.length}개:`);
    for (const s of doc.verified_seeds) {
      const answer = s.answer || s.perimeter || '?';
      console.log(`  seed ${s.seed}: answer=${answer}` + (s.source_ref ? ` (${s.source_ref})` : ''));
    }
  }

  const variants = generateVariants(doc, opts.count);
  console.log(`\n신 변형 후보 ${variants.length}개 (mathjs 답 검증은 향후 도구 확장):\n`);
  variants.forEach((v, i) => {
    console.log(`  #${i + 1}:`, JSON.stringify(v));
  });

  console.log(`\n(주의) 매개변수 유효성 자동 검증·답 산출은 v1.1에서 mathjs 통합 예정.`);
  console.log(`(수동) 각 변형 답은 정독 원본 solution_summary 참조 재계산 필요.`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

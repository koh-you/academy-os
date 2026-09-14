#!/usr/bin/env node
// flaw-injection-generator.mjs — CFES 메커니즘 C · 결함 통제 주입 하네스
// 2026-07-29 세션 102 신설 · CFES Phase A-2 재편 (기획안 v1.2 §5.2.1)
//
// 목적 (v1.2 §3.1.2):
//   정상 창작에 F1~F10 결함을 통제 주입 → 결함군 생성.
//   각 결함 샘플에 ground-truth 라벨(.label.yaml) 부착 → discrimination-test-runner의 정답셋.
//
// 철학:
//   수학 문항 결함은 의미적이므로 "완전 자동 생성"이 아닌 "통제 주입 + 재현 가능 라벨링".
//   주입 내용(find/replace)은 Claude/마스터가 저작 · 도구는 (a) 재현 가능 적용
//   (b) 실제 변경 검증 (c) ground-truth 라벨 방출 담당.
//
// 사용법:
//   # 단일 주입
//   node scripts/flaw-injection-generator.mjs \
//     --source <정상창작.tex> --flaw F5 \
//     --find "<원문 일부>" --replace "<결함 주입 후>" \
//     --note "대칭중심 case 2개로 답 비유일화" \
//     --out <결함창작.tex>
//
//   # batch spec (여러 주입)
//   node scripts/flaw-injection-generator.mjs --spec <spec.yaml> --out-dir <결함군 dir>
//
//   # seed 등록 (세션 99 실측 결함 = 이미 결함인 파일을 라벨만 부착)
//   node scripts/flaw-injection-generator.mjs \
//     --seed --source <이미결함.tex> --flaw F5 --note "..." --out <복사본.tex>
//
//   # F1~F10 카탈로그 출력
//   node scripts/flaw-injection-generator.mjs --catalog
//
// 반환 : 0 = 주입 성공 · 1 = 변경 없음/검증 실패 · 2 = 오용

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── F1~F10 결함 카탈로그 (v1.2 §4 계승) ──────────────────
const FLAW_CATALOG = {
  F1: { name: '통찰 얕음', expected: 'LOSS', hint: '진정 변별 카드 제거 · 절차 조합으로 환원' },
  F2: { name: '자연어 부자연', expected: 'PENDING', hint: '발문을 직역체·번역투로 치환' },
  F3: { name: '자기복제', expected: 'LOSS', hint: '원본 anchor와 구조 시그니처·통찰 카드 일치' },
  F4: { name: '교육과정 침투', expected: 'LOSS', hint: 'CM 스코프 밖 용어·개념 삽입 (역행렬·극한·벡터 등)' },
  F5: { name: '답 유일성 위반', expected: 'LOSS', hint: '조건 완화·case 다분기로 답 비유일화 (BT-002형)' },
  F6: { name: '발문 모호', expected: 'PENDING', hint: '여러 해석 가능하도록 조건 문구 흐리기' },
  F7: { name: '그림 답 노출', expected: 'LOSS', hint: '도형에 좌표·개수·반지름 등 답 직접 노출' },
  F8: { name: '시각적 부실', expected: 'PENDING', hint: 'TikZ 라벨 겹침·프레임 미채움' },
  F9: { name: '조판 결함', expected: 'PENDING', hint: 'Overfull hbox 유발 (긴 인라인 수식)' },
  F10: { name: '벤더 라벨 오해', expected: 'LOSS', hint: '난이도를 원본 대비 하향 (계산만·통찰 제거)' },
};

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
const opt = {
  source: null, flaw: null, find: null, replace: null,
  note: '', out: null, spec: null, outDir: null,
  seed: false, catalog: false, id: null,
};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--source') opt.source = args[++i];
  else if (a === '--flaw') opt.flaw = args[++i];
  else if (a === '--find') opt.find = args[++i];
  else if (a === '--replace') opt.replace = args[++i];
  else if (a === '--note') opt.note = args[++i];
  else if (a === '--out') opt.out = args[++i];
  else if (a === '--spec') opt.spec = args[++i];
  else if (a === '--out-dir') opt.outDir = args[++i];
  else if (a === '--id') opt.id = args[++i];
  else if (a === '--seed') opt.seed = true;
  else if (a === '--catalog') opt.catalog = true;
  else if (a === '--help' || a === '-h') { printHelp(); process.exit(0); }
}

function printHelp() {
  console.log(`
flaw-injection-generator.mjs — CFES 메커니즘 C 결함 통제 주입

단일 주입 :
  node scripts/flaw-injection-generator.mjs \\
    --source <정상.tex> --flaw F5 \\
    --find "<원문>" --replace "<결함 주입 후>" \\
    --note "<사유>" --out <결함.tex>

seed 등록 (이미 결함인 파일 라벨만) :
  node scripts/flaw-injection-generator.mjs --seed \\
    --source <이미결함.tex> --flaw F5 --note "..." --out <복사본.tex>

batch spec :
  node scripts/flaw-injection-generator.mjs --spec <spec.yaml> --out-dir <dir>

카탈로그 : node scripts/flaw-injection-generator.mjs --catalog

반환 : 0 = 성공 · 1 = 변경 없음/검증 실패 · 2 = 오용
`);
}

if (opt.catalog) {
  console.log('# F1~F10 결함 카탈로그 (CFES v1.2 §4)\n');
  console.log('| 코드 | 이름 | 기대 판정 | 주입 힌트 |');
  console.log('|---|---|:---:|---|');
  for (const [code, c] of Object.entries(FLAW_CATALOG)) {
    console.log(`| ${code} | ${c.name} | ${c.expected} | ${c.hint} |`);
  }
  process.exit(0);
}

// ── 라벨 방출 ─────────────────────────────────────────────
function emitLabel(outPath, meta) {
  const labelPath = outPath.replace(/\.tex$/, '.label.yaml');
  const lines = [
    `# 결함 주입 ground-truth 라벨 (flaw-injection-generator)`,
    `label_id: ${meta.label_id}`,
    `source: ${path.relative(ROOT, meta.source).replace(/\\/g, '/')}`,
    `flawed: ${path.relative(ROOT, outPath).replace(/\\/g, '/')}`,
    `flaw_type: ${meta.flaw}`,
    `flaw_name: ${FLAW_CATALOG[meta.flaw].name}`,
    `expected_verdict: ${FLAW_CATALOG[meta.flaw].expected}`,
    `ground_truth: flawed`,
    `seed: ${meta.seed}`,
    `injection:`,
    `  method: ${meta.method}`,
    meta.find != null ? `  find: ${JSON.stringify(meta.find)}` : `  find: null`,
    meta.replace != null ? `  replace: ${JSON.stringify(meta.replace)}` : `  replace: null`,
    `note: ${JSON.stringify(meta.note || '')}`,
    `date: ${new Date().toISOString().slice(0, 10)}`,
  ];
  fs.writeFileSync(labelPath, lines.join('\n') + '\n', 'utf-8');
  return labelPath;
}

// ── 단일 주입 실행 ───────────────────────────────────────
function injectOne(o) {
  if (!o.source || !fs.existsSync(o.source)) {
    console.error(`❌ --source 없음 : ${o.source}`); process.exit(2);
  }
  if (!o.flaw || !FLAW_CATALOG[o.flaw]) {
    console.error(`❌ --flaw 오용 : ${o.flaw} (F1~F10)`); process.exit(2);
  }
  if (!o.out) { console.error('❌ --out 필수'); process.exit(2); }

  const src = fs.readFileSync(o.source, 'utf-8');
  let out = src;
  let method;
  o.seed = o.seed === true;  // 미지정 → false

  if (o.seed) {
    // seed : 이미 결함인 파일 · 변경 없이 복사 + 라벨
    method = 'seed-copy';
  } else {
    if (o.find == null || o.replace == null) {
      console.error('❌ 비-seed 주입은 --find 와 --replace 필수'); process.exit(2);
    }
    if (!src.includes(o.find)) {
      console.error(`❌ --find 문자열이 source에 없음 : ${JSON.stringify(o.find.slice(0, 40))}`);
      process.exit(1);
    }
    out = src.replace(o.find, o.replace);
    method = 'replace';
    if (out === src) {
      console.error('❌ 변경 없음 (find == replace?)'); process.exit(1);
    }
  }

  fs.mkdirSync(path.dirname(o.out), { recursive: true });
  fs.writeFileSync(o.out, out, 'utf-8');
  const labelPath = emitLabel(o.out, {
    label_id: o.id || `FLAW-${o.flaw}-${path.basename(o.source, '.tex')}`,
    source: o.source, flaw: o.flaw, method,
    find: o.seed ? null : o.find, replace: o.seed ? null : o.replace,
    note: o.note, seed: o.seed,
  });

  console.error(`✅ ${o.flaw} (${FLAW_CATALOG[o.flaw].name}) → ${path.relative(ROOT, o.out)}`);
  console.error(`   기대 판정 : ${FLAW_CATALOG[o.flaw].expected} · seed=${o.seed}`);
  console.error(`   라벨 : ${path.relative(ROOT, labelPath)}`);
}

// ── batch spec ───────────────────────────────────────────
if (opt.spec) {
  if (!fs.existsSync(opt.spec)) { console.error(`❌ spec 없음 : ${opt.spec}`); process.exit(2); }
  if (!opt.outDir) { console.error('❌ --spec 은 --out-dir 필수'); process.exit(2); }
  const specText = fs.readFileSync(opt.spec, 'utf-8');
  // 간이 YAML 파서 : injections 리스트 (- source/flaw/find/replace/note/out/id/seed)
  const items = parseSpec(specText);
  if (items.length === 0) { console.error('❌ spec에 injection 없음'); process.exit(2); }
  let count = 0;
  for (const it of items) {
    const outPath = path.isAbsolute(it.out) ? it.out : path.join(opt.outDir, it.out);
    injectOne({ ...it, out: outPath });
    count++;
  }
  console.error(`\n▶ batch 완료 : ${count} 결함 주입 · ${opt.outDir}`);
  process.exit(0);
}

// 간이 spec 파서 (list of maps)
function parseSpec(text) {
  const items = [];
  let cur = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/\t/g, '  ');
    if (/^\s*#/.test(line) || line.trim() === '') continue;
    const m = line.match(/^(\s*)-\s+(\w+):\s*(.*)$/);
    if (m) {
      if (cur) items.push(cur);
      cur = {};
      cur[m[2]] = coerce(m[3]);
      continue;
    }
    const kv = line.match(/^\s+(\w+):\s*(.*)$/);
    if (kv && cur) cur[kv[1]] = coerce(kv[2]);
  }
  if (cur) items.push(cur);
  return items;
}
function coerce(v) {
  v = v.trim();
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (/^".*"$/.test(v) || /^'.*'$/.test(v)) return v.slice(1, -1);
  return v;
}

// ── 단일 주입 진입 ───────────────────────────────────────
if (!opt.source) { printHelp(); process.exit(2); }
injectOne(opt);
process.exit(0);

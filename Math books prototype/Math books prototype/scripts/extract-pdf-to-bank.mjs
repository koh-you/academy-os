#!/usr/bin/env node
// scripts/extract-pdf-to-bank.mjs — v1.1 (2026-06-29 보강)
//
// v1.1 보강:
//   - pdftotext (poppler) 활용 — pdfjs는 수식이 빈 문자열로 추출되어 본문 추출 한계
//   - **메타 자동 + 본문 placeholder** 전략 (학평·마더텅 등 수식 벡터 PDF 대응)
//   - 본문은 "[원본 PDF 참조 — 수동 보강 의무]"로 두고 메타(번호·점수·단원·★ 추정)만 자동
//   - ★ 4·5 정점만 수동 본문 보강하는 워크플로우 지향
//
// PDF 문항지 → bank/problems/*.md 자동 등재 도구
// [[feedback_full_corpus_analysis_required]] 영구 정책 적용을 위한 일괄 자산화 도구
//
// 지원 PDF 종류:
//   - haghpyeong: 고1 전국연합 학력평가 (참고자료/고1 모의고사 기출 모음/)
//   - madotung: 마더텅 24회 미니모의 (참고자료/2026_마더텅_*/)
//   - asaem: 아샘 짱 내신 FINAL (참고자료/공통수학 1/아샘파이널/)
//   - generic: 기타 PDF (수동 prefix 지정)
//
// 사용법:
//   node scripts/extract-pdf-to-bank.mjs --type haghpyeong --year 2024 --month 9 --prefix EX-EAR --start 053
//   node scripts/extract-pdf-to-bank.mjs --type madotung --rounds 1-24 --prefix EX-MT --start 089
//   node scripts/extract-pdf-to-bank.mjs --type asaem --rounds 1-10 --prefix SRC-AS --start 100
//   node scripts/extract-pdf-to-bank.mjs --pdf <path> --prefix XX-XX --start NNN
//
// 출력:
//   - bank/problems/{prefix}-{단원}-{NNN}.md (YAML 골격 + 본문 + 정답)
//   - data/extract-log-{type}.json (추출 메타)
//
// 라벨링 정책:
//   - 자동: id, unit (키워드 기반), 본문, 보기, 정답, 점수, sources, status=meta_only
//   - 휴리스틱: base_star (위치+점수), audience_primary (★ 기준)
//   - 수동 보강 필요: M_scores, insights_used, insight_depth (별도 라벨링 작업)

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BANK_DIR = join(PROJECT_ROOT, 'bank', 'problems');
const DATA_DIR = join(PROJECT_ROOT, 'data');

// ─────────────────────────────────────────────────────────
// 인자 파싱
// ─────────────────────────────────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    type: null, year: null, month: null, rounds: null,
    pdf: null, prefix: null, start: 1, dryRun: false,
  };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--type') opts.type = args[++i];
    else if (a === '--year') opts.year = parseInt(args[++i]);
    else if (a === '--month') opts.month = parseInt(args[++i]);
    else if (a === '--rounds') opts.rounds = args[++i];
    else if (a === '--pdf') opts.pdf = args[++i];
    else if (a === '--prefix') opts.prefix = args[++i];
    else if (a === '--start') opts.start = parseInt(args[++i]);
    else if (a === '--dry-run') opts.dryRun = true;
  }
  return opts;
}

// ─────────────────────────────────────────────────────────
// 단원 키워드 분류 (CM1 4단원)
// ─────────────────────────────────────────────────────────
const UNIT_KEYWORDS = {
  'CM1-PL': [
    /다항식/, /나머지정리/, /인수정리/, /인수분해/, /조립제법/, /항등식/,
    /몫과\s*나머지/, /계수\s*비교/, /곱셈\s*공식/,
  ],
  'CM1-EQ': [
    /이차방정식/, /삼차방정식/, /사차방정식/, /연립방정식/, /연립부등식/,
    /이차부등식/, /절댓값.*부등식/, /판별식/, /근과\s*계수의\s*관계/,
    /복소수/, /허근/, /켤레/, /\\omega/, /무리수.*근/, /부정방정식/,
  ],
  'CM1-CB': [
    /순열/, /조합/, /경우의\s*수/, /나열/, /일렬로/, /선택/,
    /합의\s*법칙/, /곱의\s*법칙/, /이웃/, /\\mathrm\{C\}/, /\\mathrm\{P\}/,
    /\\binom/, /_n[CP]_/, /(?:로\s*)?뽑/, /(?:로\s*)?고르/,
  ],
  'CM1-MX': [
    /행렬/, /성분/, /\\begin\{pmatrix\}/, /AB|BA/, /A\^?\{?n\}?/,
    /단위행렬/, /영행렬/, /가환/, /케일리|해밀턴/, /^E$/,
  ],
};

function classifyUnit(text) {
  const scores = {};
  for (const [unit, patterns] of Object.entries(UNIT_KEYWORDS)) {
    scores[unit] = 0;
    for (const re of patterns) {
      const matches = text.match(new RegExp(re.source, 'g'));
      if (matches) scores[unit] += matches.length;
    }
  }
  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return best[1] > 0 ? best[0] : 'CM1-EQ';  // 기본값
}

// ─────────────────────────────────────────────────────────
// ★ 휴리스틱 추정 (학평·미니모의 패턴)
// ─────────────────────────────────────────────────────────
function estimateStar(problemNum, points, examType) {
  // 학평 30문 표준
  if (examType === 'haghpyeong') {
    if (problemNum <= 5) return 1;
    if (problemNum <= 12) return 2;
    if (problemNum <= 18) return 3;
    if (problemNum <= 24) return 4;
    return 5;  // 25번 이상 = 정점
  }
  // 마더텅·아샘 등 — 점수 기반
  if (points <= 2) return 1;
  if (points <= 3) return 2;
  if (points <= 3.5) return 3;
  if (points <= 4) return 3;
  if (points <= 6) return 4;
  return 5;
}

function starToAudience(star) {
  if (star <= 2) return '중하위권';
  if (star === 3) return '중위권';
  if (star === 4) return '중상위권';
  return '상위권';
}

// ─────────────────────────────────────────────────────────
// PDF 텍스트 추출 (pdftotext — poppler)
// 학평·마더텅 PDF는 수식이 벡터 이미지라 pdfjs로 빈 문자열. pdftotext 활용
// ─────────────────────────────────────────────────────────
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';

async function extractPDFText(pdfPath) {
  const tmpFile = join(tmpdir(), `extract-pdf-${Date.now()}.txt`);
  const result = spawnSync('pdftotext', ['-layout', pdfPath, tmpFile], { encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(`pdftotext 실패: ${result.stderr}`);
  }
  const text = await readFile(tmpFile, 'utf8');
  return text;
}

// ─────────────────────────────────────────────────────────
// 문항 단위 파싱 (pdftotext 출력)
// 패턴: 줄 시작에 "N. " 또는 "N\t" + 점수 [N] 또는 [N점]
// ─────────────────────────────────────────────────────────
function parseProblems(text, opts) {
  const problems = [];
  // 점수 패턴 [N] [N점] [N.N점]
  const pointRe = /\[\s*(\d+(?:\.\d+)?)\s*점?\s*\]/;
  // 문항 번호 패턴: 줄 시작 또는 공백 후 "N." (1~30)
  // pdftotext layout 모드는 두 컬럼 형식, 각 줄에 좌·우 문항이 함께 있음
  const numRe = /(?:^|\s)(\d{1,2})\.\s/gm;
  const matches = [...text.matchAll(numRe)];
  // 번호 기준으로 문항 시작 위치 표시
  const numPositions = matches
    .map(m => ({ num: parseInt(m[1]), pos: m.index, raw: m[0] }))
    .filter(m => m.num >= 1 && m.num <= 30);
  // 중복 번호 제거 (같은 회차에 같은 번호는 한 번만)
  const seen = new Set();
  const uniqNums = numPositions.filter(p => {
    if (seen.has(p.num)) return false;
    seen.add(p.num);
    return true;
  });
  // 각 번호의 다음 등장 위치까지 본문 추출
  uniqNums.sort((a, b) => a.pos - b.pos);
  for (let i = 0; i < uniqNums.length; i++) {
    const { num, pos } = uniqNums[i];
    const next = uniqNums[i + 1]?.pos ?? text.length;
    const body = text.slice(pos, next).trim().slice(0, 800);
    const pMatch = body.match(pointRe);
    const points = pMatch ? parseFloat(pMatch[1]) : null;
    problems.push({ num, body, points, choices: null });
  }
  return problems;
}

// ─────────────────────────────────────────────────────────
// YAML 골격 생성
// ─────────────────────────────────────────────────────────
function buildYAML({ id, unit, problemNum, points, body, sources, baseStar }) {
  const audience = starToAudience(baseStar);
  const audienceFit = baseStar <= 2 ? '[중하위권, 중위권]'
                    : baseStar === 3 ? '[중위권, 중상위권]'
                    : baseStar === 4 ? '[중상위권, 상위권]'
                    : '[상위권]';
  const M_total = baseStar <= 2 ? 4 : baseStar === 3 ? 8 : baseStar === 4 ? 10 : 12;
  return `---
id: ${id}
unit: ${unit}
type: T-AUTO
M_scores: {M_s: 2, M_k: 2, M_a: 2, M_t: 2}
M_total: ${M_total}
insights_used: []
insight_score: 0
X_familiarity: 0
base_star: ${baseStar}
effective_star: ${baseStar}
depth_score: 0
target_audience: ${audience}
audience_fit: ${audienceFit}
audience_primary: ${audience}
keywords: [자동 추출, 수동 라벨링 필요]
sources:
${sources.map(s => `  - ${s}`).join('\n')}
variant_policy: 원문 그대로 (공공/시판 출제 문항)
status: meta_only
created: 2026-06-29T00:00:00.000Z
frequency: 1
extraction:
  auto_extracted: true
  needs_manual_review: true
  problem_num: ${problemNum}
  points: ${points || 'null'}
---

**문제** [원본 PDF 참조 — 수동 보강 의무]

본 항목은 \`scripts/extract-pdf-to-bank.mjs\` v1.1로 자동 추출됨. PDF 수식은 벡터 이미지라 텍스트로 자동 보존 불가. **본문·보기·정답·풀이·통찰 라벨은 수동 시각 추출** 의무.

**추출 메타**:
- 회차·번호: ${problemNum}번
- 점수 (PDF): ${points || '미상'}
- 휴리스틱 ★: ${baseStar} (위치 ${problemNum} + 점수 ${points || '?'} 기반)
- 자동 단원 분류: ${unit}

**자동 추출 본문 단편** (수식 없음, 한국어만):
\`\`\`
${body.slice(0, 400)}
\`\`\`

**수동 보강 체크리스트**:
- [ ] PDF 원본 시각 확인 후 본문·보기·정답·풀이 작성
- [ ] M_scores · insights_used · insight_depth 라벨링
- [ ] 단원 코드 (자동 ${unit}) 검증 + 필요 시 수정
- [ ] base_star (자동 ${baseStar}) 검증
- [ ] star_premium 후보 시 v3.4 기준 검증
`;
}

// ─────────────────────────────────────────────────────────
// 메인
// ─────────────────────────────────────────────────────────
async function main() {
  const opts = parseArgs();
  if (!opts.pdf && !opts.type) {
    console.error('Usage: --pdf <path> 또는 --type <haghpyeong|madotung|asaem> 지정 의무');
    console.error('Example: node scripts/extract-pdf-to-bank.mjs --type haghpyeong --year 2024 --month 9 --prefix EX-EAR --start 053');
    process.exit(2);
  }
  if (!opts.prefix) {
    console.error('Error: --prefix 지정 의무 (예: EX-EAR, EX-MT, SRC-AS)');
    process.exit(2);
  }

  // PDF 경로 결정
  let pdfPaths = [];
  if (opts.pdf) {
    pdfPaths.push(opts.pdf);
  } else if (opts.type === 'haghpyeong') {
    const dir = join(PROJECT_ROOT, '참고자료', '고1 모의고사 기출 모음', String(opts.year));
    if (!opts.month) {
      console.error('Error: haghpyeong은 --month 지정 의무');
      process.exit(2);
    }
    pdfPaths.push(join(dir, `${opts.year}_${opts.month}월_문제.pdf`));
  } else if (opts.type === 'madotung') {
    const dir = join(PROJECT_ROOT, '참고자료', '2026_마더텅_전국연합_학력평가_기출_20분_미니모의고사_24회_고1_공통수학1');
    pdfPaths.push(join(dir, '2026_마더텅_전국연합_학력평가_기출_20분_미니모의고사_24회_고1_공통수학1_문제편(정답표시O).pdf'));
  } else if (opts.type === 'asaem') {
    const dir = join(PROJECT_ROOT, '참고자료', '공통수학 1', '아샘파이널');
    pdfPaths.push(join(dir, '내신파이널+_+공통수학1+기말고사.pdf'));
  }

  console.log('📋 PDF→bank 자동 추출 v1.0');
  console.log('   대상 PDF:', pdfPaths.map(p => basename(p)).join(', '));
  console.log('   prefix:', opts.prefix, '/ start:', opts.start);
  console.log();

  let counter = opts.start;
  const extractedItems = [];

  for (const pdfPath of pdfPaths) {
    if (!existsSync(pdfPath)) {
      console.error(`⚠️  PDF 없음: ${pdfPath}`);
      continue;
    }
    console.log(`📄 처리 중: ${basename(pdfPath)}`);
    const fullText = await extractPDFText(pdfPath);
    const problems = parseProblems(fullText, opts);
    console.log(`   추출 문항 수: ${problems.length}`);

    const sourceTag = opts.type === 'haghpyeong'
      ? `출처: ${opts.year}년 ${opts.month}월 고1 전국연합학력평가`
      : opts.type === 'madotung'
        ? `출처: 마더텅 전국연합 학력평가 기출 20분 미니모의 24회 고1 공통수학1`
        : opts.type === 'asaem'
          ? `출처: 아샘 짱 내신 FINAL 공통수학1 기말고사`
          : `출처: ${basename(pdfPath)}`;

    for (const prob of problems) {
      const unit = classifyUnit(prob.body);
      const baseStar = estimateStar(prob.num, prob.points, opts.type);
      const id = `${opts.prefix}-${unit.replace('CM1-', '').replace('CM2-', '')}-${String(counter).padStart(3, '0')}`;
      const filename = `${id}.md`;
      const filepath = join(BANK_DIR, filename);

      const yaml = buildYAML({
        id,
        unit,
        problemNum: prob.num,
        points: prob.points,
        body: prob.body,
        sources: [sourceTag, `문항: ${prob.num}번${prob.points ? ` (${prob.points}점)` : ''}`],
        baseStar,
      });

      if (opts.dryRun) {
        console.log(`   [dry] ${filename} — ${unit} ★${baseStar}`);
      } else {
        await writeFile(filepath, yaml, 'utf8');
        console.log(`   ✅ ${filename} — ${unit} ★${baseStar}`);
      }
      extractedItems.push({ id, unit, problemNum: prob.num, points: prob.points, baseStar });
      counter++;
    }
  }

  // 추출 로그 저장
  const logPath = join(DATA_DIR, `extract-log-${opts.prefix.toLowerCase()}-${Date.now()}.json`);
  if (!opts.dryRun) {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(logPath, JSON.stringify(extractedItems, null, 2), 'utf8');
  }

  console.log();
  console.log(`📊 요약: ${extractedItems.length}문 추출${opts.dryRun ? ' (dry-run)' : ' / 등재 완료'}`);
  console.log(`   로그: ${opts.dryRun ? 'dry-run (저장 안 함)' : logPath}`);
  console.log();
  console.log('⚠️  자동 추출된 ID는 \`extraction.needs_manual_review: true\`로 표시됨.');
  console.log('   M·I·X 점수·통찰 유형·정답·풀이는 수동 보강 의무.');
}

main().catch(e => {
  console.error('❌ Error:', e);
  process.exit(1);
});

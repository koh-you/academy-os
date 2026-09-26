#!/usr/bin/env node
// cm1-vendor-out-of-scope.mjs — CM1 정독 파일에서 교육과정 외 침투 문항 자동 감지
// 2026-07-21 세션 63 신설 · Gate 5.0 확장 (15번째 필수 도구)
//
// 배경 (세션 62 대발견):
//   30+ 벤더 정독 완료 후 CM1 교육과정 외 25건+ 침투 감지
//   - 마플 CM1-EQ 부등식: 12건 (사차·삼차 근분리·Gauss [x])
//   - 절대등급 CM1: 3건 (역행렬·극형식·[x²])
//   - 일품 CM1: 6건 (케해 본문·회전행렬)
//   - 풍산자 CM2: 2건 (i=√-1·Gauss [x])
//   - 짱중요·바이블 유형온·유형ZIP·유형만렙·마더텅 등
//
// 목적:
//   bank/mechanism-데이터-*CM1*.md 벤더 정독 파일에서 CM1 교육과정 외 침투 자동 감지
//   → problem-author v2.1 pool 자동 배제 (dokdu-query.mjs excluded_ids)
//
// 검사 자원:
//   - RED (12축): 역행렬 · 트레이스 · Gauss [x] · 회전행렬 · 케해 본문 강요
//                여사건 · 같은 것이 있는 순열 · 중복조합 · 이항정리 · 극형식 (극좌표)
//                3D 벡터 표기 · 외국 수학자 이름 (Viviani·Lagrange·Cauchy 등)
//   - YELLOW (5축): 극한·미분·적분 용어 · 수렴/발산 · 사차·삼차 부호표
//                산술기하평균 (CM2 §명제 정규 · CM1 침투 시)
//                집합 기호 (CM2 이전 침투)
//
// 사용법:
//   node scripts/cm1-vendor-out-of-scope.mjs
//     ↑ 기본: bank/mechanism-데이터-*.md · 파일명에 CM1 포함하거나 소단원 CM1-*
//   node scripts/cm1-vendor-out-of-scope.mjs bank/mechanism-데이터-마플시너지-CM1-EQ-부등식.md
//   node scripts/cm1-vendor-out-of-scope.mjs --csv scan.csv
//   node scripts/cm1-vendor-out-of-scope.mjs --json scan.json
//   node scripts/cm1-vendor-out-of-scope.mjs --exclude-ids excluded.txt
//     ↑ problem-author v2.1 excluded_ids 목록 생성 (한 줄에 한 문항 ID)
//   node scripts/cm1-vendor-out-of-scope.mjs --summary
//
// 반환 코드: 0 = 침투 없음 · 1 = RED 침투 있음

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
let csvOut = null;
let jsonOut = null;
let excludeIdsOut = null;
let summaryOnly = false;
const inputs = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--csv') csvOut = args[++i];
  else if (a === '--json') jsonOut = args[++i];
  else if (a === '--exclude-ids') excludeIdsOut = args[++i];
  else if (a === '--summary') summaryOnly = true;
  else if (a === '--help' || a === '-h') {
    console.log(`
사용법:
  node scripts/cm1-vendor-out-of-scope.mjs [파일...] [옵션]
옵션:
  --csv <경로>          CSV 출력
  --json <경로>         JSON 출력
  --exclude-ids <경로>  problem-author excluded_ids 목록 생성 (문항ID 한 줄씩)
  --summary             파일별 개요만
기본 대상 : bank/mechanism-데이터-*.md · CM1 관련 파일 (파일명에 CM1 or -CM1 포함)
반환 코드 : 0 = 침투 없음 · 1 = RED 침투 있음
    `.trim());
    process.exit(0);
  } else {
    inputs.push(a);
  }
}

// 기본 대상: bank/mechanism-데이터-*.md 중 CM1 관련
if (inputs.length === 0) {
  const dir = path.join(ROOT, 'bank');
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir)
      .filter(f => /^mechanism-데이터-.+\.md$/.test(f))
      .filter(f => /CM1/.test(f) && !/-CM2/.test(f))  // CM1만 · CM2 제외
      .map(f => path.join(dir, f));
    inputs.push(...files);
  }
}

if (inputs.length === 0) {
  console.error('❌ 대상 파일 없음');
  process.exit(2);
}

// ── 침투 규칙 (CM1 교육과정 외 도구 · 세션 62 감지 축) ──────
const RULES = [
  // 🔴 행렬 단원 외 도구
  { level: 'RED', pattern: /A\^\{-1\}|A\^-1|역행렬/g, name: '역행렬', axis: '행렬' },
  { level: 'RED', pattern: /\\text\{tr\}|\\mathrm\{tr\}|(?<![a-zA-Z])tr\s*A(?![a-zA-Z])|트레이스/g, name: '트레이스', axis: '행렬' },
  { level: 'RED', pattern: /\\det\s*A|행렬식/g, name: '행렬식', axis: '행렬' },
  { level: 'YELLOW', pattern: /케일리[\s·-]?해밀턴|Cayley[\s\-]?Hamilton|케해\s*정리|케해\s*유도|(?<![답풀])케해(?![답풀])/g, name: '케해 본문 (답지 인용은 허용)', axis: '행렬 · 답지 인용만 허용' },
  { level: 'RED', pattern: /회전\s*행렬|회전\s*변환|평면\s*회전|원점을?\s*중심으로?\s*[0-9]+\s*[°˚]\s*회전|[0-9]+\s*[°˚]\s*회전\s*시키는/g, name: '회전행렬·회전변환', axis: '행렬 · 대수' },
  { level: 'YELLOW', pattern: /3\s*[×x]\s*3\s*행렬|삼차\s*행렬|3차\s*정사각행렬/g, name: '3×3 행렬 (CM1 2×2 한정)', axis: '행렬' },

  // 🔴 미적분·복소평면 외 도구
  { level: 'RED', pattern: /\\lfloor|\\rfloor|⌊|⌋|가우스\s*기호|가우스\s*\[|보다\s*크지\s*않은\s*최대\s*정수/g, name: '가우스 기호 [x]', axis: '미적분Ⅰ · 학평 외부' },
  { level: 'RED', pattern: /극형식|극좌표|drmoivre|드무아브르|drMoivre/g, name: '극형식·드무아브르', axis: '복소평면 · 미적분Ⅱ' },
  { level: 'RED', pattern: /\\sum|\\prod|\\int|\\lim|시그마|미분\s*계수|도함수|정적분|부정적분/g, name: '미적분·시그마', axis: '미적분Ⅰ' },
  { level: 'YELLOW', pattern: /(?<![가-힣])수렴(?![가-힣])|(?<![가-힣])발산(?![가-힣])|(?<![가-힣])극한(?![가-힣])/g, name: '수렴·발산·극한', axis: '미적분Ⅰ' },

  // 🔴 확률과 통계 단원
  { level: 'RED', pattern: /중복조합|중복\s*조합|(?<![_a-zA-Z])[nH]_?[0-9]+H_?[0-9]+/g, name: '중복조합', axis: '확률과 통계' },
  { level: 'RED', pattern: /중복순열|중복\s*순열/g, name: '중복순열', axis: '확률과 통계' },
  { level: 'RED', pattern: /원순열|원형\s*순열|원탁|원\s*탁/g, name: '원순열', axis: '확률과 통계' },
  { level: 'RED', pattern: /같은\s*것이?\s*있는\s*순열/g, name: '같은 것이 있는 순열', axis: '확률과 통계' },
  { level: 'RED', pattern: /이항정리|이항\s*정리|파스칼\s*삼각형/g, name: '이항정리', axis: '확률과 통계' },
  { level: 'RED', pattern: /(?<![가-힣])여사건(?![가-힣])|(?<![가-힣])여\s*사건(?![가-힣])/g, name: '여사건', axis: '확률과 통계' },
  { level: 'RED', pattern: /(?<![가-힣])확률(?![가-힣])|조건부\s*확률|배반\s*사건|독립\s*시행/g, name: '확률', axis: '확률과 통계' },
  { level: 'RED', pattern: /기댓값|분산(?![의])|표준편차|정규분포|이항분포/g, name: '통계', axis: '확률과 통계' },

  // 🔴 대수 (일반선택 · 구 수학 I)
  { level: 'RED', pattern: /등차수열|등비수열|수열의?\s*합|수열의?\s*극한|일반항\s*공식/g, name: '수열', axis: '대수' },
  { level: 'RED', pattern: /지수함수|로그함수|(?<!삼각)삼각함수|(?<!아크)sin\s*[가-힣xy]|(?<!아크)cos\s*[가-힣xy]|\\sin|\\cos|\\tan|\\log|\\ln/g, name: '지수·로그·삼각함수', axis: '대수' },

  // 🔴 벡터·기하 (진로선택)
  { level: 'RED', pattern: /\\vec\{|\\overrightarrow\{|\\mathbf\{[a-z]\}/g, name: '벡터 기호', axis: '기하 · 진로선택' },
  { level: 'RED', pattern: /벡터의?\s*내적|벡터의?\s*외적|스칼라\s*곱/g, name: '벡터 연산', axis: '기하' },
  { level: 'RED', pattern: /3D\s*벡터|3차원\s*벡터|공간\s*벡터/g, name: '3D 벡터 표기', axis: '기하' },
  { level: 'RED', pattern: /타원|쌍곡선|포물선의?\s*정의|이차곡선의?\s*정의/g, name: '이차곡선 (기하)', axis: '기하' },

  // 🔴 CM2 §집합과 명제 정규 도구 · CM1 침투 금지
  { level: 'RED', pattern: /산술평균|기하평균|산술[\s\-]?기하[\s\-]?평균|AM[\s\-]?GM|코시[\s\-]?슈바르츠/g, name: '산술기하평균·코시슈바르츠 (CM2 §명제 · CM1 침투 시 RED)', axis: 'CM2 §집합과 명제' },
  { level: 'RED', pattern: /\\cup|\\cap|\\setminus|\\subseteq|\\subset|\\supset|\\emptyset|\\varnothing|\\notin|\\in\s*\\\{/g, name: '집합 기호 (CM2 §집합 · CM1 침투 시)', axis: 'CM2 §집합과 명제' },

  // 🔴 외국 수학자 이름 (permanent-policy `foreign-named-formula`)
  { level: 'RED', pattern: /Viviani|비비아니|Fagnano|파냐노|Lagrange\s*보간|라그랑주\s*보간|Cauchy\s*[슈-]|Newton\s*[일-]|Bezout|베주|Vieta|비에타|Vandermonde|반데르몬드/g, name: '외국 수학자 이름 (foreign-named-formula 위반)', axis: '자연어 대체 필수' },

  // 🔴 4차 부호표·삼차 그래프 (CM1 이차함수까지)
  { level: 'RED', pattern: /사차함수의?\s*그래프|삼차함수의?\s*그래프|4\s*차함수|3\s*차함수(?!\s*방정식|\s*부등식|의?\s*근)|고차함수의?\s*그래프/g, name: '삼·사차함수 그래프 (미적분Ⅰ)', axis: '미적분Ⅰ' },
  { level: 'YELLOW', pattern: /사차\s*부호표|삼차\s*부호표|삼차\s*근\s*분리|사차\s*근\s*분리/g, name: '삼·사차 부호표·근분리 (미적분 도함수 요구)', axis: '미적분Ⅰ' },

  // 🔴 CM1 원의 방정식 (CM2 GM 침투)
  { level: 'RED', pattern: /원의\s*접선|원의\s*방정식(?!.*허수)|원의?\s*중심\s*[가-힣]{0,3}(?![가-힣])/g, name: '원의 방정식·접선 (CM2 §도형의 방정식)', axis: 'CM2-GM' },
];

// ── 문항 단위 추출 (markdown 벤더 정독 파일 구조) ──────────
// 지원 패턴:
//   1. `#### 문항 0250` 또는 `#### #0250` (헤더)
//   2. `### 0250` (구식 헤더)
//   3. `| 0250 | ... |` (표 행 · 첫 셀이 문항번호)
//   4. `- **#0250**` (bullet 형식)
function extractQuestions(text, filePath) {
  const lines = text.split('\n');
  const questions = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // 헤더 패턴 감지
    const h1 = line.match(/^#{2,5}\s*(?:문항\s*)?#?([0-9]{3,5}(?:[a-z])?)(?:\s|$)/);
    const h2 = line.match(/^[-*]\s*\*\*#?([0-9]{3,5}(?:[a-z])?)\*\*/);
    const h3 = line.match(/^\|\s*\*?\*?#?([0-9]{3,5}(?:[a-z])?)\*?\*?\s*\|/);
    const id = h1?.[1] || h2?.[1] || h3?.[1];

    if (id) {
      if (current) questions.push(current);
      current = {
        id,
        startLine: i + 1,
        endLine: i + 1,
        body: [line],
      };
    } else if (current) {
      current.body.push(line);
      current.endLine = i + 1;
    }
  }
  if (current) questions.push(current);
  return questions;
}

// ── 침투 감지 ─────────────────────────────────────────────
function detectViolations(question) {
  const bodyText = question.body.join('\n');
  const findings = [];
  for (const rule of RULES) {
    rule.pattern.lastIndex = 0;
    let m;
    const matches = [];
    while ((m = rule.pattern.exec(bodyText)) !== null) {
      matches.push({ index: m.index, matched: m[0] });
      if (matches.length >= 5) break;  // 문항당 규칙별 최대 5건
    }
    if (matches.length > 0) {
      findings.push({
        level: rule.level,
        name: rule.name,
        axis: rule.axis,
        count: matches.length,
        samples: matches.slice(0, 3).map(mm => mm.matched.slice(0, 40)),
      });
    }
  }
  return findings;
}

// ── 파일별 실행 ─────────────────────────────────────────
const allViolations = [];  // { file, qid, startLine, endLine, findings }
let totalFiles = 0;
let totalQuestions = 0;
let counts = { RED_files: 0, YELLOW_files: 0, GREEN_files: 0 };

for (const file of inputs) {
  if (!fs.existsSync(file)) {
    console.error(`  ⚠ 파일 없음 : ${file}`);
    continue;
  }
  totalFiles++;
  const raw = fs.readFileSync(file, 'utf8');
  const questions = extractQuestions(raw, file);
  totalQuestions += questions.length;

  const fileViolations = [];
  for (const q of questions) {
    const findings = detectViolations(q);
    if (findings.length > 0) {
      fileViolations.push({
        file: path.relative(ROOT, file).replace(/\\/g, '/'),
        qid: q.id,
        startLine: q.startLine,
        endLine: q.endLine,
        findings,
      });
    }
  }
  const hasRed = fileViolations.some(v => v.findings.some(f => f.level === 'RED'));
  const hasYellow = fileViolations.some(v => v.findings.some(f => f.level === 'YELLOW'));
  if (hasRed) counts.RED_files++;
  else if (hasYellow) counts.YELLOW_files++;
  else counts.GREEN_files++;
  allViolations.push(...fileViolations);
}

// ── 출력 ───────────────────────────────────────────────
const totalRed = allViolations.filter(v => v.findings.some(f => f.level === 'RED')).length;
const totalYellow = allViolations.filter(v => v.findings.every(f => f.level === 'YELLOW')).length;

console.log(`\n=== cm1-vendor-out-of-scope ===`);
console.log(`대상 파일 : ${totalFiles}개 · 총 문항 : ${totalQuestions}개`);
console.log(`침투 감지 문항 : ${allViolations.length}개 (RED=${totalRed} · YELLOW-only=${totalYellow})`);
console.log(`파일 판정 : GREEN=${counts.GREEN_files} · YELLOW=${counts.YELLOW_files} · RED=${counts.RED_files}\n`);

if (allViolations.length === 0) {
  console.log('  ✓ CM1 교육과정 침투 감지 없음 · 모든 벤더 문항 pool 편입 안전.');
} else if (summaryOnly) {
  const byFile = new Map();
  for (const v of allViolations) {
    if (!byFile.has(v.file)) byFile.set(v.file, { red: 0, yellow: 0, qids: [] });
    const s = byFile.get(v.file);
    const isRed = v.findings.some(f => f.level === 'RED');
    if (isRed) s.red++;
    else s.yellow++;
    s.qids.push(v.qid);
  }
  for (const [file, s] of byFile) {
    console.log(`  ${file} : RED=${s.red} · YELLOW=${s.yellow} · qids=${s.qids.slice(0, 10).join(',')}${s.qids.length > 10 ? '...' : ''}`);
  }
} else {
  const byFile = new Map();
  for (const v of allViolations) {
    if (!byFile.has(v.file)) byFile.set(v.file, []);
    byFile.get(v.file).push(v);
  }
  for (const [file, vs] of byFile) {
    const redCnt = vs.filter(v => v.findings.some(f => f.level === 'RED')).length;
    const yelCnt = vs.length - redCnt;
    console.log(`── ${file} (${vs.length}건 · RED=${redCnt}·YELLOW=${yelCnt})`);
    for (const v of vs) {
      const tag = v.findings.some(f => f.level === 'RED') ? '🔴 RED' : '⚠ YEL';
      console.log(`  ${tag} #${v.qid} L${v.startLine}-${v.endLine}`);
      for (const f of v.findings) {
        const flag = f.level === 'RED' ? '🔴' : '⚠';
        console.log(`     ${flag} ${f.name} (×${f.count}) · axis: ${f.axis}`);
        if (f.samples.length > 0) {
          console.log(`        예: ${f.samples.map(s => `"${s}"`).join(' · ')}`);
        }
      }
    }
    console.log();
  }
}

// CSV/JSON 출력
if (csvOut) {
  const header = 'file,qid,startLine,endLine,level,name,axis,count,samples\n';
  const rows = [];
  for (const v of allViolations) {
    for (const f of v.findings) {
      const samples = f.samples.map(s => s.replace(/,/g, ' ').replace(/"/g, "'")).join('|');
      rows.push(`"${v.file}",${v.qid},${v.startLine},${v.endLine},${f.level},"${f.name}","${f.axis}",${f.count},"${samples}"`);
    }
  }
  fs.writeFileSync(csvOut, header + rows.join('\n') + '\n', 'utf8');
  console.log(`CSV 출력 : ${csvOut} (${rows.length}행)`);
}
if (jsonOut) {
  fs.writeFileSync(jsonOut, JSON.stringify(allViolations, null, 2), 'utf8');
  console.log(`JSON 출력 : ${jsonOut} (${allViolations.length}건)`);
}
if (excludeIdsOut) {
  // RED만 excluded_ids로 (YELLOW는 사람 판단 대상)
  const excluded = allViolations
    .filter(v => v.findings.some(f => f.level === 'RED'))
    .map(v => `${path.basename(v.file, '.md').replace('mechanism-데이터-', '')}#${v.qid}`);
  fs.writeFileSync(excludeIdsOut, excluded.join('\n') + '\n', 'utf8');
  console.log(`excluded_ids 출력 : ${excludeIdsOut} (${excluded.length}건 RED)`);
}

process.exit(totalRed > 0 ? 1 : 0);

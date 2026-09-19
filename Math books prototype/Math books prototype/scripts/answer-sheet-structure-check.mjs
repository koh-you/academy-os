#!/usr/bin/env node
// 답지 구조 검수 — 단일 multicols 원칙 · Critical Point 스타일 검증
// 2026-07-16 세션 46 신설 — DeeP Red 2회 답지 여백 사건 대응
//
// 검수 축:
//   S1 단일 multicols 원칙 — \end{multicols} 카운트 > 1이면 RED
//                             (선택형·서답형 분리 목적 이중 multicols 금지)
//   S2 clearpage 위치 — multicols 사이 \clearpage 있으면 RED
//   S3 cplabel 완성 문장 — \cplabel{} 마지막이 종결어미 (~다·~한다·~이다·~된다·~는가)
//   S4 cplabel 명사구·수식만 종결 — RED
//   S5 본문 구어체·압축 신조어 감지 — YELLOW/RED
//
// 사용:
//   node scripts/answer-sheet-structure-check.mjs <답지.tex>
//   node scripts/answer-sheet-structure-check.mjs --all       # output/**/*답지*.tex
//
// 기반 정책:
//   [[feedback_answer_sheet_single_multicols]] — 단일 multicols
//   [[feedback_critical_point_style]] v2 — CP 완성 문장 · 짧고 굵게
//   [[feedback_solution_writing_principles]] — 풀이 5원칙

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const softMode = args.includes('--soft');
const allMode = args.includes('--all');

function findAnswerSheets(rootDir) {
  const results = [];
  function walk(dir) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); }
    catch { return; }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.isFile() && /\.tex$/.test(e.name) && /(답지|solution)/.test(e.name)) {
        results.push(full);
      }
    }
  }
  walk(rootDir);
  return results.sort();
}

let files;
if (allMode) {
  files = findAnswerSheets('output');
} else {
  files = args.filter(a => !a.startsWith('--'));
  if (files.length === 0) {
    console.error('Usage: node scripts/answer-sheet-structure-check.mjs <답지.tex> [파일2 ...]');
    console.error('       node scripts/answer-sheet-structure-check.mjs --all [--soft]');
    process.exit(2);
  }
}

// 종결어미 목록 (완성 문장 판정)
const VALID_ENDINGS = [
  '다', '이다', '한다', '된다', '있다', '없다', '한다.', '이다.', '된다.', '있다.', '없다.',
  '하다', '되다', '이는가', '는가', '였다', '였다.', '난다', '난다.', '왔다', '왔다.',
  '려면', '려면.', '어야 한다', '해야 한다', '이어야 한다',
  '자', '자.', '것이다', '것이다.', '이다', '한다',
];

// 구어체 · 압축 신조어 (본문 감지)
const RED_INFORMAL = [
  { re: /헤맨다/, hint: '"헤맨다" 구어체 → "혼동한다·혼란스럽다"' },
  { re: /튀어나온다/, hint: '"튀어나온다" 구어체 → "발생한다·생긴다"' },
  { re: /척척/, hint: '"척척" 의성어 → 삭제 or "쉽게·빠르게"' },
  { re: /곧바로 얻어진다/, hint: '"곧바로 얻어진다" 구어체 → "그대로 얻는다·즉시 얻는다"' },
  { re: /즉시 배제/, hint: '"즉시 배제" 압축 → "곧바로 제외한다·바로 제외한다"' },
  { re: /좌표로 옮기면/, hint: '"좌표로 옮기면" 압축 → "좌표식으로 나타내면"' },
];

const YELLOW_PATTERNS = [
  { re: /\s+로부터\s+즉시/, hint: '"로부터 즉시" 신조어 압축 · 자연 국어로' },
  { re: /임을 유의/, hint: '"임을 유의" formal · "임에 주의한다"로' },
];

let totalRed = 0;
let totalYellow = 0;

function isCompletedSentence(text) {
  const trimmed = text.trim().replace(/[.。]$/, '');
  // LaTeX 매크로 제거
  const stripped = trimmed.replace(/\\[a-zA-Z]+(\{[^}]*\})?/g, '').replace(/\$[^$]+\$/g, 'X').trim();
  // 마지막 3자 검사
  const tail3 = stripped.slice(-3);
  const tail2 = stripped.slice(-2);
  const tail1 = stripped.slice(-1);
  if (VALID_ENDINGS.some(e => stripped.endsWith(e))) return true;
  // 수식만으로 끝난 경우 → RED
  if (/^X$/.test(stripped) || /X$/.test(stripped) && stripped.length <= 3) return false;
  // 명사구 종결 (~조건·~정리·~공식·~관계 등)
  if (/(조건|정리|공식|관계|성질|형태|모양|경우|위치|각도|길이|넓이|합|곱|차|값)$/.test(stripped)) return false;
  return null; // 애매
}

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.error(`❌ 파일 없음: ${file}`);
    process.exit(2);
  }

  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const filename = path.basename(file);

  const fileIssues = [];

  // S1 단일 multicols 원칙 검수
  // 🔴 2026-07-30 수리 — 종전 정규식이 multicols (별표 없음) 만 잡아 실제 답지의
  //    multicols* 를 0개로 보고했다 (공허한 GREEN). 별표를 허용한다.
  const beginMC = (content.match(/\\begin\{multicols\*?\}/g) || []).length;
  const endMC = (content.match(/\\end\{multicols\*?\}/g) || []).length;
  if (beginMC > 1 || endMC > 1) {
    fileIssues.push({
      level: 'RED',
      axis: 'S1',
      hint: `multicols 블록 ${beginMC}개 (기대: 1). 이중 multicols → 페이지 여백 대량 발생.`,
    });
  }

  // S2 multicols 중간 \clearpage 검수
  {
    let insideMC = false;
    let clearInside = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/\\begin\{multicols\*?\}/.test(line)) insideMC = true;
      if (/\\end\{multicols\*?\}/.test(line)) insideMC = false;
      if (insideMC && /\\clearpage|\\newpage/.test(line)) {
        clearInside = true;
        fileIssues.push({
          level: 'RED',
          axis: 'S2',
          line: i + 1,
          hint: 'multicols 내 \\clearpage/\\newpage — 자연 흐름 붕괴, 여백 발생.',
        });
      }
    }
    // multicols 밖 clearpage → 이중 구조 신호
    if (beginMC === 2) {
      fileIssues.push({
        level: 'RED',
        axis: 'S2',
        hint: '이중 multicols + \\clearpage 구조 감지 · 단일 블록으로 통합 필요.',
      });
    }
  }

  // S3·S4 cplabel 완성 문장 검수
  // 🔴 2026-07-30 수리 (2단) — 두 결함이 겹쳐 있었다.
  //   (a) 매크로명: DM dapji 는 \dmcplabel 인데 종전 정규식은 \cplabel 만 잡았다.
  //   (b) 중괄호: [^{}]+ 는 라벨 안의 $\mathrm{AB}$ 같은 중첩 중괄호를 통과하지 못한다.
  //       실측 — 라벨 4건 중 2건(#11·#16)이 누락되어 S3·S4 가 그 라벨을 검사한 적이 없었다.
  //       수식이 든 CP 라벨이 구조적으로 검사에서 빠지고 있었다는 뜻이다.
  //   → 중괄호 균형을 세는 스캐너로 교체한다. 여러 줄에 걸친 라벨도 잡힌다.
  const cpLabels = [];
  {
    const marker = /\\(?:dm)?cplabel\{/g;
    let mm;
    while ((mm = marker.exec(content)) !== null) {
      let i = mm.index + mm[0].length;
      let depth = 1;
      let buf = '';
      while (i < content.length) {
        const ch = content[i];
        if (ch === '{') depth++;
        else if (ch === '}') { depth--; if (depth === 0) break; }
        buf += ch;
        i++;
      }
      if (depth !== 0) continue;   // 닫히지 않은 라벨은 건너뛴다
      const lineNo = content.slice(0, mm.index).split('\n').length;
      cpLabels.push({ line: lineNo, text: buf.trim() });
    }
  }

  for (const label of cpLabels) {
    const complete = isCompletedSentence(label.text);
    if (complete === false) {
      // 수식만·명사구 종결
      const stripped = label.text.replace(/\$[^$]+\$/g, 'X').trim();
      if (/^X$/.test(stripped)) {
        fileIssues.push({
          level: 'RED',
          axis: 'S4',
          line: label.line,
          hint: `cplabel 수식만 종결: "${label.text.slice(0, 40)}" → 서술문화 ("~이다·~된다")`,
        });
      } else {
        fileIssues.push({
          level: 'RED',
          axis: 'S3',
          line: label.line,
          hint: `cplabel 명사구·불완전 종결: "${label.text.slice(0, 40)}" → 종결어미 (~다·~한다·~이다) 필수`,
        });
      }
    } else if (complete === null) {
      fileIssues.push({
        level: 'YELLOW',
        axis: 'S3',
        line: label.line,
        hint: `cplabel 애매 종결: "${label.text.slice(0, 40)}" → 종결어미 명시 검토`,
      });
    }
  }

  // S5 본문 구어체·압축 신조어 검수
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const p of RED_INFORMAL) {
      if (p.re.test(line)) {
        fileIssues.push({
          level: 'RED',
          axis: 'S5',
          line: i + 1,
          hint: p.hint,
        });
      }
    }
    for (const p of YELLOW_PATTERNS) {
      if (p.re.test(line)) {
        fileIssues.push({
          level: 'YELLOW',
          axis: 'S5',
          line: i + 1,
          hint: p.hint,
        });
      }
    }
  }

  // 파일 요약
  const red = fileIssues.filter(x => x.level === 'RED').length;
  const yellow = fileIssues.filter(x => x.level === 'YELLOW').length;
  totalRed += red;
  totalYellow += yellow;

  console.log(`\n📄 ${filename}`);
  console.log(`   multicols 블록: ${beginMC}개 · cplabel: ${cpLabels.length}개`);
  console.log(`   판정: RED ${red}건 · YELLOW ${yellow}건`);

  if (fileIssues.length > 0) {
    // 축별 그룹
    const byAxis = {};
    for (const iss of fileIssues) {
      if (!byAxis[iss.axis]) byAxis[iss.axis] = [];
      byAxis[iss.axis].push(iss);
    }
    for (const axis of Object.keys(byAxis).sort()) {
      console.log(`   [${axis}] ${byAxis[axis].length}건:`);
      for (const iss of byAxis[axis]) {
        const marker = iss.level === 'RED' ? '🔴' : '⚠️';
        const loc = iss.line ? `line ${iss.line}` : '전체';
        console.log(`     ${marker} ${loc}: ${iss.hint}`);
      }
    }
  } else {
    console.log('   ✅ 통과');
  }
}

console.log('\n=== 총계 ===');
console.log(`   파일 ${files.length}개 · RED ${totalRed}건 · YELLOW ${totalYellow}건`);

console.log('\n=== 축 설명 ===');
console.log('   S1 단일 multicols  — 답지 multicols 블록 = 1개 (이중 구조 금지)');
console.log('   S2 clearpage 위치  — multicols 내부·사이 clearpage 금지');
console.log('   S3 cplabel 완성 문장 — 종결어미 (~다·~한다·~이다) 필수');
console.log('   S4 cplabel 수식만  — 수식 단독 라벨 금지 · 서술문화');
console.log('   S5 본문 구어체·압축 — "헤맨다·튀어나온다·즉시 배제" 등 자연 국어로');

console.log('\n=== 기반 정책 ===');
console.log('   feedback_answer_sheet_single_multicols (세션 46)');
console.log('   feedback_critical_point_style v2 (세션 46)');
console.log('   feedback_solution_writing_principles (세션 33)');

if (totalRed > 0) {
  if (softMode) {
    console.warn(`\n⚠️  --soft: RED 검출됐지만 exit 0`);
    process.exit(0);
  }
  console.error(`\n🔴 RED ${totalRed}건 · 정정 필요`);
  process.exit(1);
}

if (totalYellow > 0) {
  console.warn(`\n⚠️  YELLOW ${totalYellow}건 · 검토 권장`);
}

if (totalRed === 0 && totalYellow === 0) {
  console.log('\n✅ 답지 구조 통과');
}
process.exit(0);

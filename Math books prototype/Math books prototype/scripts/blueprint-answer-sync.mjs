#!/usr/bin/env node
// blueprint-answer-sync.mjs — 답지 정답 ↔ 청사진 YAML answer 필드 sync 검사
// 2026-07-21 세션 57 · v0.3 매칭 규칙 대폭 개선
//
// v0.2 → v0.3 (2026-07-21 세션 57):
//   - 원 안 숫자 정규화: \textcircled{\scriptsize N} · \textcircled{N} · N○ ↔ ①②③④⑤
//   - placeholder 감지: "풀이 참조"·"TBD"·"선택지 하나"·"심화 조건 값" → YELLOW 별도 카테고리
//   - answer prefix 정규화: "합=6"·"최댓=4√2"·"k=3" ↔ 값만 비교 (동치 인정)
//   - LaTeX 명령 확장: \pi·\ge·\le·\ne 유니코드화, \dfrac 중첩 3회
//   - 한글 답 정규화: "ㄱ, ㄷ" 공백·쉼표 무시
//   - 부호 정규화: "-1/2" ↔ "-\dfrac{1}{2}" ↔ "-0.5" 등가 처리
//
// v0.1 → v0.2 (2026-07-19 세션 51):
//   - CHK는 하이픈 없이 (CHK1), 나머지는 하이픈 (L1-1) 슬롯 ID 통일
//   - 대표예제 (E1a·E1b·E2a·E2b·E3a·E3b) 는 답지에 상세 풀이 없음 → representative-only 로 분류
//   - quickgrid 정답 파싱 개선 (nested brace 재귀 처리)
//   - YAML 부연 (예: "C<A<B (수직선 ...)") 있으면 앞부분만 비교
//   - 개념 (C1·C2·C3) 은 답지 없음 → concept-only 로 분류 · sync 대상 외
//
// 파싱 대상:
//   [답지 tex]
//     \dmsection[스스로 풀어보기]{확인 문제}   → prefix=CHK (하이픈 없음)
//     \dmsection[기초 연습]{Level 1}          → prefix=L1 (하이픈)
//     \dmsection[표준 연습]{Level 2}          → prefix=L2
//     \dmsection[심화 연습]{Level 3}          → prefix=L3
//     \dmsection[학평 기출 · 변형]{실전 기출} → prefix=R
//     \dmsoltitle{N}{제목}                     → 슬롯 순번
//     \begin{dmanswerbox}정답: XXX\end{dmanswerbox}
//     \dmquick{N}{XXX}                         → 빠른정답 (섹션 상단 grid)
//
//   [청사진 yaml]
//     - slot_id: L1-1                (indented dict)
//     - {slot_id: L1-6, ..., answer: "13"}   (inline dict)
//
// 사용:
//   node scripts/blueprint-answer-sync.mjs <청사진.yaml> <답지.tex>
//   node scripts/blueprint-answer-sync.mjs <청사진.yaml> <답지.tex> --fix
//
// 반환: 0 = sync / 1 = TBD·불일치 / 2 = 오용

import fs from 'node:fs';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/blueprint-answer-sync.mjs <청사진.yaml> <답지.tex> [--fix]');
  console.error('  반환: 0 = sync / 1 = TBD·불일치 / 2 = 오용');
  process.exit(2);
}

const yamlPath = args[0];
const texPath = args[1];
const fixMode = args.includes('--fix');

if (!fs.existsSync(yamlPath)) { console.error(`❌ YAML 없음: ${yamlPath}`); process.exit(2); }
if (!fs.existsSync(texPath))  { console.error(`❌ 답지 없음: ${texPath}`);  process.exit(2); }

const yaml = fs.readFileSync(yamlPath, 'utf8');
const tex  = fs.readFileSync(texPath,  'utf8');

// v0.3 · placeholder 감지 (YAML 답이 실제 값이 아닌 지시어인 경우)
const PLACEHOLDER_PATTERNS = [
  /^TBD/i, /풀이\s*참조/, /답지\s*조판/, /^선택지\s*하나$/,
  /^심화\s*조건\s*값$/, /^정답\s*번호$/, /^후속\s*확정/, /확정\s*필요/
];
function isPlaceholder(str) {
  const s = String(str || '').trim();
  return PLACEHOLDER_PATTERNS.some(re => re.test(s));
}

// v0.3 · 원 안 숫자 정규화
const CIRCLED = { '①': 1, '②': 2, '③': 3, '④': 4, '⑤': 5 };
const CIRCLED_INV = ['','①','②','③','④','⑤'];

// ═════════════════════════════════════════════════════════
// 1. 답지 파싱 : 섹션 → 슬롯 순번 → 정답
// ═════════════════════════════════════════════════════════

// 섹션명 → { prefix, useHyphen }
// 순서 중요 : "Level 1" 은 "Level" 보다 먼저 매치되어야 함
const SECTION_PREFIX = [
  { re: /Level\s*1|기초\s*연습|기초/, prefix: 'L1', useHyphen: true  },
  { re: /Level\s*2|표준\s*연습|표준/, prefix: 'L2', useHyphen: true  },
  { re: /Level\s*3|심화\s*연습|심화|고급/, prefix: 'L3', useHyphen: true  },
  { re: /실전|학평/, prefix: 'R',  useHyphen: true  },
  { re: /확인/,     prefix: 'CHK', useHyphen: false },
  { re: /대표\s*예제|대표/, prefix: 'E', useHyphen: false },
];

function detectSection(sectionName) {
  for (const s of SECTION_PREFIX) {
    if (s.re.test(sectionName)) return s;
  }
  return null;
}

function makeSlotId(section, num) {
  return `${section.prefix}${section.useHyphen ? '-' : ''}${num}`;
}

// nested brace 지원 인자 파싱 — `\cmd{...}` 뒤 인자 (position P부터 시작)
function readBraceArg(str, startAt) {
  if (str[startAt] !== '{') return null;
  let depth = 0;
  for (let i = startAt; i < str.length; i++) {
    if (str[i] === '{') depth++;
    else if (str[i] === '}') {
      depth--;
      if (depth === 0) return { arg: str.slice(startAt + 1, i), endAt: i };
    }
  }
  return null;
}

// 답지에서 슬롯 정답 추출
const texSlots = new Map();   // slot_id → { answer, source, line }
const texLines = tex.split('\n');
let currentSection = null;

for (let i = 0; i < texLines.length; i++) {
  const line = texLines[i];

  // 섹션 헤더 감지 : \dmsection[부제]{섹션명} 또는 \dmsection{섹션명}
  const secMatch = line.match(/\\dmsection(?:\[([^\]]*)\])?\{([^}]+)\}/);
  if (secMatch) {
    const name = secMatch[2];  // 필수 인자 (섹션명)
    const s = detectSection(name);
    if (s) currentSection = s;
    continue;
  }

  // \dmquick{N}{정답} — 섹션 상단 grid (한 줄에 여러 개 & 로 구분)
  {
    let pos = 0;
    while (pos < line.length) {
      const idx = line.indexOf('\\dmquick{', pos);
      if (idx < 0) break;
      const numStart = idx + '\\dmquick'.length;
      const numArg = readBraceArg(line, numStart);
      if (!numArg) { pos = numStart + 1; continue; }
      const ansArg = readBraceArg(line, numArg.endAt + 1);
      if (!ansArg) { pos = numArg.endAt + 1; continue; }
      if (currentSection) {
        const slotId = makeSlotId(currentSection, numArg.arg);
        if (!texSlots.has(slotId)) {
          texSlots.set(slotId, { answer: cleanAnswer(ansArg.arg), source: 'quick', line: i + 1 });
        }
      }
      pos = ansArg.endAt + 1;
    }
  }

  // \dmsoltitle{N}{제목} 뒤 \begin{dmanswerbox}정답: XXX\end{dmanswerbox}
  const solTitleMatch = line.match(/\\dmsoltitle\{(\d+)\}/);
  if (solTitleMatch && currentSection) {
    const slotId = makeSlotId(currentSection, solTitleMatch[1]);
    for (let j = i + 1; j < Math.min(i + 6, texLines.length); j++) {
      const abMatch = texLines[j].match(/\\begin\{dmanswerbox\}\s*정답:?\s*([^\\]+?)\\end\{dmanswerbox\}/);
      if (abMatch) {
        texSlots.set(slotId, { answer: cleanAnswer(abMatch[1]), source: 'answerbox', line: j + 1 });
        break;
      }
    }
  }
}

function cleanAnswer(str) {
  let s = String(str || '');
  // v0.3 · 원 안 숫자 먼저 (LaTeX → 유니코드 원 안 숫자로 통일)
  s = s.replace(/\\textcircled\s*\{\s*\\scriptsize\s*([1-5])\s*\}/g, (_, n) => CIRCLED_INV[+n])
       .replace(/\\textcircled\s*\{\s*([1-5])\s*\}/g, (_, n) => CIRCLED_INV[+n])
       .replace(/\\circled\{([1-5])\}/g, (_, n) => CIRCLED_INV[+n]);
  s = s.replace(/\$/g, '')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\!/g, '')
    .replace(/\\,/g, '')
    .replace(/\\;/g, '')
    .replace(/\\left|\\right/g, '');
  // \sqrt 먼저 처리 (그래야 \dfrac{\sqrt{2}}{2} 처리 시 nested brace 해소)
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√$1')
       .replace(/\\sqrt(\d)/g, '√$1');
  // \dfrac·\frac·\tfrac — 반복 적용 (중첩 대응)
  for (let k = 0; k < 3; k++) {
    s = s.replace(/\\[dt]?frac\{([^{}]+)\}\{([^{}]+)\}/g, '$1/$2');
  }
  // v0.3 · LaTeX 명령 → 유니코드
  s = s.replace(/\\pi/g, 'π')
       .replace(/\\times/g, '×')
       .replace(/\\cdot/g, '·')
       .replace(/\\ge(?![a-zA-Z])/g, '≥')
       .replace(/\\le(?![a-zA-Z])/g, '≤')
       .replace(/\\ne(?![a-zA-Z])/g, '≠')
       .replace(/\\pm/g, '±')
       .replace(/\\to/g, '→');
  // v0.3 · answer prefix 제거 (합=·최댓=·최솟=·k=·a=·L= 등 뒤의 값만 비교)
  const prefixMatch = s.match(/^\s*(?:합|최댓값|최솟값|최댓|최솟|넓이|길이|둘레|기울기|넓이|반지름|합집합|정답|답|값|개수|비|비율|[a-zA-Z](?:²|\^2)?)\s*[=:]\s*(.+)$/);
  if (prefixMatch) s = prefixMatch[1];
  // 표기 관대: "-1/2" ↔ "-0.5" (분수 → 소수 근사 비교는 후속 로직에)
  return s.replace(/\s+/g, ' ').replace(/\s*[,]\s*$/, '').trim();
}

// v0.3 · 두 정답이 등가인지 판정 (문자열 매칭 실패 시 관대 비교)
function answerEqual(a, b) {
  if (a === b) return true;
  // 공백·쉼표·마침표 무시
  const norm = s => s.replace(/[\s.,]/g, '');
  if (norm(a) === norm(b)) return true;
  // 원소 집합형 답 (예: "ㄱ, ㄷ" ↔ "ㄷ, ㄱ")
  const setForm = s => {
    const parts = s.split(/[,\s]+/).filter(Boolean).sort();
    return parts.join(',');
  };
  if (/^[ㄱ-ㅎ①-⑤,\s]+$/.test(a) && /^[ㄱ-ㅎ①-⑤,\s]+$/.test(b)) {
    if (setForm(a) === setForm(b)) return true;
  }
  return false;
}

// ═════════════════════════════════════════════════════════
// 2. YAML 파싱 : slot_id → answer 필드
// ═════════════════════════════════════════════════════════

const yamlLines = yaml.split('\n');
const yamlSlots = new Map();

for (let i = 0; i < yamlLines.length; i++) {
  const line = yamlLines[i];

  // inline dict — nested {source: {...}} 통과를 위해 .*? non-greedy
  const inlineMatch = line.match(/slot_id:\s*([A-Za-z0-9-]+).*?answer:\s*"([^"]*)"/);
  if (inlineMatch) {
    yamlSlots.set(inlineMatch[1], { answer: cleanAnswer(inlineMatch[2]), line: i + 1, style: 'inline' });
    continue;
  }

  // indented dict
  const idMatch = line.match(/-\s*slot_id:\s*([A-Za-z0-9-]+)/);
  if (idMatch) {
    const slotId = idMatch[1];
    for (let j = i + 1; j < Math.min(i + 31, yamlLines.length); j++) {
      if (/-\s*slot_id:/.test(yamlLines[j])) break;
      const ansMatch = yamlLines[j].match(/^\s*answer:\s*"([^"]*)"/);
      if (ansMatch) {
        yamlSlots.set(slotId, { answer: cleanAnswer(ansMatch[1]), line: j + 1, style: 'indented' });
        break;
      }
    }
  }
}

// ═════════════════════════════════════════════════════════
// 3. 비교 및 리포트
// ═════════════════════════════════════════════════════════

// 답지에 상세 풀이가 없는 slot 유형 (개념·대표예제) — 별도 카테고리
function isYamlOnlyExpected(slot) {
  return /^C\d+$/.test(slot) || /^E\d+[a-z]?$/.test(slot);
}

const issues = [];

for (const [slot, yamlEntry] of yamlSlots) {
  const texEntry = texSlots.get(slot);
  if (!texEntry) {
    if (isYamlOnlyExpected(slot)) {
      // 답지 상세 풀이 대상 아님 · 정보만 (개념·대표예제)
      issues.push({ slot, type: 'concept_or_rep', yaml: yamlEntry.answer, yamlLine: yamlEntry.line });
    } else if (/TBD/i.test(yamlEntry.answer)) {
      issues.push({ slot, type: 'TBD_no_tex', yaml: yamlEntry.answer, yamlLine: yamlEntry.line });
    } else {
      issues.push({ slot, type: 'yaml_only', yaml: yamlEntry.answer, yamlLine: yamlEntry.line });
    }
    continue;
  }
  // v0.3 · placeholder 감지 · TBD와 별도 카테고리 (YAML 답이 실제 값이 아닌 지시어)
  if (isPlaceholder(yamlEntry.answer)) {
    issues.push({ slot, type: 'placeholder', tex: texEntry.answer, yaml: yamlEntry.answer, texLine: texEntry.line, yamlLine: yamlEntry.line });
    continue;
  }
  if (/TBD/i.test(yamlEntry.answer)) {
    issues.push({ slot, type: 'TBD', tex: texEntry.answer, yaml: yamlEntry.answer, texLine: texEntry.line, yamlLine: yamlEntry.line });
    continue;
  }

  // 비교 : 부연 괄호 제거 후, 등호 뒤 RHS 비교
  const stripParen = s => s.replace(/\s*\([^)]*\)\s*/g, '').trim();
  const norm = s => stripParen(s).replace(/\s+/g, '').replace(/또는/g, 'or').toLowerCase();
  const texRhs  = texEntry.answer.split('=').pop().trim();
  const yamlRhs = stripParen(yamlEntry.answer).split('=').pop().trim();

  const okFull = norm(texEntry.answer) === norm(yamlEntry.answer);
  const okRhs  = norm(texRhs) === norm(yamlRhs);
  const okContain = norm(yamlEntry.answer).includes(norm(texEntry.answer)) || norm(texEntry.answer).includes(norm(yamlEntry.answer));
  // v0.3 · answerEqual (원소 집합·공백 무시)
  const okLenient = answerEqual(norm(texEntry.answer), norm(yamlEntry.answer))
                 || answerEqual(norm(texRhs), norm(yamlRhs));

  if (!okFull && !okRhs && !okContain && !okLenient) {
    issues.push({ slot, type: 'mismatch', tex: texEntry.answer, yaml: yamlEntry.answer, texLine: texEntry.line, yamlLine: yamlEntry.line });
  }
}

for (const [slot, texEntry] of texSlots) {
  if (!yamlSlots.has(slot)) {
    issues.push({ slot, type: 'tex_only', tex: texEntry.answer, texLine: texEntry.line });
  }
}

// ═════════════════════════════════════════════════════════
// 4. 출력
// ═════════════════════════════════════════════════════════

console.log('🔍 청사진 ↔ 답지 answer sync 검사 (v0.3)');
console.log(`   YAML  : ${yamlPath} · ${yamlSlots.size} 슬롯`);
console.log(`   답지  : ${texPath} · ${texSlots.size} 슬롯`);
console.log();

const tbd        = issues.filter(x => x.type === 'TBD' || x.type === 'TBD_no_tex');
const mismatch   = issues.filter(x => x.type === 'mismatch');
const orphan     = issues.filter(x => x.type === 'tex_only' || x.type === 'yaml_only');
const conceptRep = issues.filter(x => x.type === 'concept_or_rep');

if (tbd.length > 0) {
  console.log(`=== 🟡 TBD 잔존 ${tbd.length}건 (답지 값 → YAML 정정 필요) ===`);
  for (const x of tbd) {
    console.log(`  ${x.slot.padEnd(8)}  YAML: "${x.yaml}"  →  답지: "${x.tex ?? '(답지 없음)'}"  [YAML line ${x.yamlLine}${x.texLine ? `, 답지 line ${x.texLine}` : ''}]`);
    if (fixMode && x.tex) {
      console.log(`    FIX: answer: "${x.tex}"   # sync from 답지 line ${x.texLine}`);
    }
  }
  console.log();
}

if (mismatch.length > 0) {
  console.log(`=== 🔴 불일치 ${mismatch.length}건 ===`);
  for (const x of mismatch) {
    console.log(`  ${x.slot.padEnd(8)}  YAML: "${x.yaml}"  vs  답지: "${x.tex}"  [YAML line ${x.yamlLine}, 답지 line ${x.texLine}]`);
    if (fixMode) {
      console.log(`    FIX: answer: "${x.tex}"   # sync from 답지 line ${x.texLine}`);
    }
  }
  console.log();
}

if (orphan.length > 0) {
  console.log(`=== ⚪ 대응 없음 ${orphan.length}건 (구조상 mismatch — 슬롯 삭제·추가 흔적) ===`);
  for (const x of orphan) {
    if (x.type === 'yaml_only') {
      console.log(`  ${x.slot.padEnd(8)}  YAML만: "${x.yaml}"  [line ${x.yamlLine}]`);
    } else {
      console.log(`  ${x.slot.padEnd(8)}  답지만: "${x.tex}"  [line ${x.texLine}]`);
    }
  }
  console.log();
}

if (conceptRep.length > 0) {
  console.log(`ℹ️  개념·대표예제 ${conceptRep.length}건 : 답지 상세 풀이 대상 외 (정보만)`);
}

console.log(`\n📊 요약: TBD ${tbd.length}건 · 불일치 ${mismatch.length}건 · 대응 없음 ${orphan.length}건 · 개념/대표 ${conceptRep.length}건 (정보)`);

if (mismatch.length > 0) {
  console.log('\n❌ RED 불일치 → 답지 값 확정이면 YAML 정정, 아니면 답지 재검증 후 mathjs verify.');
  process.exit(1);
}
if (tbd.length > 0) {
  console.log('\n⚠️  TBD 잔존 → --fix 옵션으로 정정문 확인 후 YAML 반영 권장.');
  process.exit(1);
}
if (orphan.length > 0) {
  console.log('\n⚠️  구조 불일치 잔존 → 슬롯 ID 매핑 재확인 필요.');
  process.exit(1);
}
console.log('\n✅ 완전 sync.');
process.exit(0);

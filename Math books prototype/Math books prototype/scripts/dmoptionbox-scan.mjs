#!/usr/bin/env node
// dmoptionbox-scan.mjs — DeeP Math Review Note 시리즈 조건 박스·보기 박스 스캔
// 2026-07-21 세션 58 후속 · 디자인 에이전트 신설 (deep-math.sty v5.2 후보 H 감지)
//
// 단일 출처:
//   - templates/deep-math.sty §"v5.2 후보 H · 조건 박스 (\dmoptionbox)" (L555-604)
//   - .claude/agents/design-agent.md (Phase 3 스타일 파일 개발 후 검증)
//
// 목적:
//   문항 안 조건 목록·보기 목록을 자동 감지하여 dmoptionbox/dmoptioninline 누락 검출
//   신규 챕터 추가·기존 문항 수정 시 시각 통일성 유지 필수 도구
//
// 감지 패턴:
//   1. 조건형 : (가) X ··· (나) Y  또는  (가) X ··· (나) Y ··· (다) Z
//      - quote 환경 안·`\quad` 프리픽스·인라인 모두
//   2. 보기형 : ㄱ. X ··· ㄴ. Y ··· ㄷ. Z
//      - minipage 세로·`\\` 나열·인라인 한 줄 모두
//
// 이미 감싸진 것은 제외 (idempotent):
//   - \begin{dmoptionbox} ··· \end{dmoptionbox} 내부
//   - \dmoptioninline{ ··· } 내부
//   - 예제 dmproblem 안 dmoptionbox 중첩도 OK (감싸도 무방)
//
// 사용법:
//   node scripts/dmoptionbox-scan.mjs
//     ↑ 기본 : output/공통수학2/DeeP-Math-정리편/Deep Math Review Note *.tex (답지 제외)
//   node scripts/dmoptionbox-scan.mjs "output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 03-원.tex"
//   node scripts/dmoptionbox-scan.mjs --csv scan.csv
//   node scripts/dmoptionbox-scan.mjs --json scan.json
//
// 반환 코드: 0 = 감지 없음 (변환 완료) · 1 = 감지 있음 (누락 있음)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// ── 인자 파싱 ─────────────────────────────────────────────
const args = process.argv.slice(2);
let csvOut = null;
let jsonOut = null;
const inputs = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--csv') {
    csvOut = args[++i];
  } else if (a === '--json') {
    jsonOut = args[++i];
  } else if (a === '--help' || a === '-h') {
    console.log(`
사용법:
  node scripts/dmoptionbox-scan.mjs [파일...] [--csv out.csv] [--json out.json]
기본 대상 : output/공통수학2/DeeP-Math-정리편/Deep Math Review Note *.tex (답지 제외)
반환 코드 : 0 = 감지 없음 (변환 완료) · 1 = 감지 있음 (누락 있음)
    `.trim());
    process.exit(0);
  } else {
    inputs.push(a);
  }
}

// 기본 대상 : DeeP Math Review Note 본편만 (답지 제외)
if (inputs.length === 0) {
  const dir = path.join(ROOT, 'output', '공통수학2', 'DeeP-Math-정리편');
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir)
      .filter(f => /^Deep Math Review Note .+\.tex$/.test(f))
      .filter(f => !f.endsWith('-답지.tex'))
      .map(f => path.join(dir, f));
    inputs.push(...files);
  }
}

if (inputs.length === 0) {
  console.error('❌ 대상 파일 없음');
  process.exit(2);
}

// ── 마스킹 : 이미 dmoptionbox·dmoptioninline 안이면 제외 ─────
// tex 원본에서 감싸진 영역을 공백으로 대체 (라인 번호 유지)
function maskWrappedRegions(text) {
  const lines = text.split('\n');
  let inOptionBox = false;
  let inOptionInline = false;
  let inlineBraceDepth = 0;
  const maskedLines = lines.map((line, idx) => {
    let out = line;
    let modified = out;

    // dmoptionbox 환경 (multi-line)
    if (inOptionBox) {
      if (/\\end\{dmoptionbox\}/.test(modified)) {
        inOptionBox = false;
        // \end{dmoptionbox} 앞까지만 마스킹
        modified = modified.replace(/^.*?\\end\{dmoptionbox\}/, m =>
          ' '.repeat(m.length - '\\end{dmoptionbox}'.length) + '\\end{dmoptionbox}');
      } else {
        modified = ' '.repeat(modified.length);
      }
    }
    if (!inOptionBox && /\\begin\{dmoptionbox\}/.test(modified)) {
      inOptionBox = !/\\end\{dmoptionbox\}/.test(modified.slice(modified.indexOf('\\begin{dmoptionbox}') + '\\begin{dmoptionbox}'.length));
      // \begin{dmoptionbox} 이후를 마스킹
      const startIdx = modified.indexOf('\\begin{dmoptionbox}') + '\\begin{dmoptionbox}'.length;
      let endIdx = modified.length;
      if (!inOptionBox) {
        // 한 줄 안에서 begin·end 모두
        endIdx = modified.indexOf('\\end{dmoptionbox}');
      }
      modified = modified.slice(0, startIdx) + ' '.repeat(endIdx - startIdx) + modified.slice(endIdx);
    }

    // dmoptioninline : brace 매칭
    if (inOptionInline) {
      for (let ci = 0; ci < modified.length; ci++) {
        const ch = modified[ci];
        if (ch === '{') inlineBraceDepth++;
        else if (ch === '}') {
          inlineBraceDepth--;
          if (inlineBraceDepth === 0) {
            // 여기까지 마스킹 + 이후는 그대로
            modified = ' '.repeat(ci) + modified.slice(ci);
            inOptionInline = false;
            break;
          }
        }
      }
      if (inOptionInline) {
        modified = ' '.repeat(modified.length);
      }
    }
    const inlineRe = /\\dmoptioninline\{/g;
    let mm;
    while ((mm = inlineRe.exec(modified)) !== null) {
      const startBrace = mm.index + '\\dmoptioninline'.length;  // { 위치
      // brace 매칭
      let depth = 0;
      let endBrace = -1;
      for (let ci = startBrace; ci < modified.length; ci++) {
        const ch = modified[ci];
        if (ch === '{') depth++;
        else if (ch === '}') {
          depth--;
          if (depth === 0) { endBrace = ci; break; }
        }
      }
      if (endBrace >= 0) {
        // 한 줄 안에서 닫힘
        modified = modified.slice(0, startBrace + 1)
          + ' '.repeat(endBrace - startBrace - 1)
          + modified.slice(endBrace);
        inlineRe.lastIndex = endBrace + 1;
      } else {
        // 여러 줄에 걸침
        inOptionInline = true;
        inlineBraceDepth = depth;
        modified = modified.slice(0, startBrace + 1) + ' '.repeat(modified.length - startBrace - 1);
        break;
      }
    }

    return modified;
  });
  return maskedLines;
}

// ── \dmpnum{N}{...} 문항 컨텍스트 추출 ──────────────────
// 각 라인이 어느 dmpnum 블록에 속하는지 매핑
function buildContext(lines) {
  const context = new Array(lines.length).fill(null);
  let curNum = null;
  let curType = null; // 'level' | 'realtype' | 'concept' | 'example'
  let braceDepth = 0;
  let inPnum = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // 페이지 유형 감지
    if (/\\dmlevel\{|\\dmlevelspace/.test(line)) curType = 'level';
    else if (/\\dmrealtype|\\dmrealtypespace/.test(line)) curType = 'realtype';
    else if (/\\dmchecktitle/.test(line)) curType = 'check';
    else if (/\\dmex\{/.test(line)) curType = 'example';
    else if (/\\dmchapter\{|\\dmconcept/.test(line)) curType = 'concept';

    if (!inPnum) {
      const m = line.match(/\\dmpnum\{(\d+)\}\{/);
      if (m) {
        curNum = parseInt(m[1], 10);
        inPnum = true;
        braceDepth = 0;
        // { 카운트 시작
        const startIdx = m.index + m[0].length - 1; // 두 번째 { 위치
        for (let ci = startIdx; ci < line.length; ci++) {
          if (line[ci] === '{') braceDepth++;
          else if (line[ci] === '}') braceDepth--;
        }
        context[i] = { num: curNum, type: curType };
        if (braceDepth === 0) inPnum = false;
        continue;
      }
      // dmcheck
      const mc = line.match(/\\dmcheck\{(\d+)\}\{/);
      if (mc) {
        curNum = parseInt(mc[1], 10);
        inPnum = true;
        braceDepth = 0;
        const startIdx = mc.index + mc[0].length - 1;
        for (let ci = startIdx; ci < line.length; ci++) {
          if (line[ci] === '{') braceDepth++;
          else if (line[ci] === '}') braceDepth--;
        }
        context[i] = { num: curNum, type: 'check' };
        if (braceDepth === 0) inPnum = false;
        continue;
      }
    } else {
      // pnum 안
      for (let ci = 0; ci < line.length; ci++) {
        if (line[ci] === '{') braceDepth++;
        else if (line[ci] === '}') braceDepth--;
      }
      context[i] = { num: curNum, type: curType };
      if (braceDepth <= 0) inPnum = false;
    }
  }
  return context;
}

// ── 패턴 감지 ────────────────────────────────────────────
// 조건형: (가) ··· (나) ··· [ (다) ]
// 보기형: ㄱ. ··· ㄴ. ··· ㄷ. ··· (선택 ㄹ. ㅁ.)
function detectPatterns(maskedLines, originalLines, context) {
  const findings = [];

  // 라인별로 훑으며 조건 시작 감지
  const N = maskedLines.length;
  for (let i = 0; i < N; i++) {
    const masked = maskedLines[i];
    if (!masked.trim()) continue;

    // ─ 조건형 감지 ─
    // (가) 등장 라인 · 단 빈칸 채우기 지칭 (dmemph·boxed·text) 은 제외
    if (/\(가\)/.test(masked)) {
      // 빈칸 지칭 판별 : \dmemph{(가)} · \boxed{\text{...(가)...}} · \text{...(가)...} · \normalsize 등 사이즈 명령 허용
      // 예 : \boxed{\text{\normalsize (가)}} · \text{(가)와 같다}
      const isBlankRef = /\\(?:dmemph|text|mathrm)\{[^{}]*\(가\)[^{}]*\}|\\boxed\{[^{}]*\(가\)/.test(masked)
        || /\\text\{[^{}]*\\(?:normalsize|small|footnotesize|large)\s*\(가\)/.test(masked);
      if (isBlankRef) continue;

      // 지시 문장 패턴 제외 : "위의 (가), (나)에 알맞은..." · "(가), (나)에 알맞은 식을..."
      // 대개 (가), (나) 처럼 콤마·조사 뒤 · 조건 앞에 "위의" 있음
      const isDirective = /위의\s*\(가\)|\(가\)\s*,\s*\(나\)|\(가\)\s*[·과와]\s*\(나\)에\s*알맞은/.test(masked);
      if (isDirective) continue;

      // 앞뒤 ±6줄 안 or 같은 줄에 (나) 존재 여부
      let hasNa = false;
      let naLine = -1;
      let daLine = -1;
      const scanStart = Math.max(0, i - 2);
      const scanEnd = Math.min(N - 1, i + 10);
      const isNaBlank = (s) => /\\(?:dmemph|text|mathrm)\{[^{}]*\(나\)[^{}]*\}|\\boxed\{[^{}]*\(나\)/.test(s)
        || /\\text\{[^{}]*\\(?:normalsize|small|footnotesize|large)\s*\(나\)/.test(s);
      const isDaBlank = (s) => /\\(?:dmemph|text|mathrm)\{[^{}]*\(다\)[^{}]*\}|\\boxed\{[^{}]*\(다\)/.test(s)
        || /\\text\{[^{}]*\\(?:normalsize|small|footnotesize|large)\s*\(다\)/.test(s);

      // 같은 줄에 (가) 뒤 (나) 인라인 (예 : $\quad$(가) X \quad (나) Y)
      const sameLineNa = /\(가\)[\s\S]*?\(나\)/.test(masked) && !isNaBlank(masked);
      if (sameLineNa) {
        hasNa = true;
        naLine = i;
        if (/\(다\)/.test(masked) && !isDaBlank(masked)) daLine = i;
      }
      // 다른 줄 스캔
      for (let j = scanStart; j <= scanEnd; j++) {
        if (j === i) continue;
        if (!hasNa && /\(나\)/.test(maskedLines[j])) {
          if (isNaBlank(maskedLines[j])) continue;
          hasNa = true; naLine = j;
        }
        if (daLine < 0 && j !== naLine && /\(다\)/.test(maskedLines[j])) {
          if (isDaBlank(maskedLines[j])) continue;
          daLine = j;
        }
      }
      if (hasNa) {
        // quote 환경 여부
        let inQuote = false;
        for (let j = Math.max(0, i - 5); j <= i; j++) {
          if (/\\begin\{quote\}/.test(maskedLines[j])) inQuote = true;
          if (/\\end\{quote\}/.test(maskedLines[j])) inQuote = false;
        }
        // (가) 프리픽스 확인 : $\quad$·\quad·$\qquad$ 등 (수식 안 · 밖 모두)
        const prefixMatch = masked.match(/^(\s*(?:\$\\q(?:q)?uad\$|\\q(?:q)?uad)?\s*)\(가\)/);
        const hasPrefix = prefixMatch && /\\q(?:q)?uad/.test(prefixMatch[1]);
        // 같은 줄 인라인 조건 : (가) ... (나) ... 한 줄에 다 있는 경우 → dmoptioninline 권장
        const isSameLineInline = sameLineNa;

        const ctx = context[i];
        const suggested = isSameLineInline ? 'dmoptioninline (한 줄 인라인 · prefix 제거)'
                        : inQuote ? 'dmoptionbox (quote 환경 대체)'
                        : hasPrefix ? 'dmoptionbox (prefix 제거)'
                        : 'dmoptionbox';
        findings.push({
          type: 'condition',
          file: null,
          line: i + 1,  // 1-indexed
          content: originalLines[i].trim().slice(0, 80),
          context: ctx ? `${ctx.type} #${ctx.num}` : 'unknown',
          inQuote,
          hasPrefix,
          isSameLineInline,
          hasDa: daLine >= 0,
          suggested,
        });
      }
    }

    // ─ 보기형 감지 ─
    // ㄱ. 등장 라인 (수식·본문 모두)
    if (/ㄱ\./.test(masked)) {
      // 앞뒤 ±6줄 안에 ㄴ. 존재 여부
      let hasN = false;
      const scanStart = Math.max(0, i - 2);
      const scanEnd = Math.min(N - 1, i + 10);
      for (let j = scanStart; j <= scanEnd; j++) {
        if (/ㄴ\./.test(maskedLines[j])) { hasN = true; break; }
      }
      if (hasN) {
        // 인라인 (같은 줄에 ㄱ ㄴ ㄷ 있음)
        const isInline = /ㄱ\.[\s\S]*?ㄴ\./.test(masked);

        // minipage 여부
        let inMinipage = false;
        for (let j = Math.max(0, i - 5); j <= i; j++) {
          if (/\\begin\{minipage\}/.test(maskedLines[j])) inMinipage = true;
          if (/\\end\{minipage\}/.test(maskedLines[j])) inMinipage = false;
        }

        // \\ 세로 나열 여부
        const hasVerticalBreaks = /\\\\/.test(masked) || (i + 1 < N && /\\\\/.test(maskedLines[i + 1]));

        const ctx = context[i];
        const suggested = isInline ? 'dmoptioninline (한 줄 인라인)'
                        : inMinipage ? 'dmoptionbox (minipage 대체)'
                        : hasVerticalBreaks ? 'dmoptionbox (세로 목록)'
                        : 'dmoptionbox';

        findings.push({
          type: 'choices',
          file: null,
          line: i + 1,
          content: originalLines[i].trim().slice(0, 80),
          context: ctx ? `${ctx.type} #${ctx.num}` : 'unknown',
          isInline,
          inMinipage,
          hasVerticalBreaks,
          suggested,
        });
      }
    }
  }

  // 조건형·보기형 각각 중복 감지 제거 (같은 문항 안 여러 라인 매치 시)
  // key = file + context + type 만 첫 발견 유지
  const seen = new Set();
  const unique = [];
  for (const f of findings) {
    const key = `${f.type}|${f.context}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(f);
    }
  }
  return unique;
}

// ── 파일별 실행 ─────────────────────────────────────────
const allFindings = [];
let totalScanned = 0;
for (const file of inputs) {
  if (!fs.existsSync(file)) {
    console.error(`  ⚠ 파일 없음 : ${file}`);
    continue;
  }
  totalScanned++;
  const raw = fs.readFileSync(file, 'utf8');
  const originalLines = raw.split('\n');
  const maskedLines = maskWrappedRegions(raw);
  const context = buildContext(originalLines);  // 원본으로 context (dmpnum 인식)
  const findings = detectPatterns(maskedLines, originalLines, context);
  for (const f of findings) {
    f.file = path.relative(ROOT, file).replace(/\\/g, '/');
    allFindings.push(f);
  }
}

// ── 출력 ───────────────────────────────────────────────
console.log(`\n=== dmoptionbox-scan ===`);
console.log(`대상 파일 : ${totalScanned}개`);
console.log(`감지 매치 : ${allFindings.length}건\n`);

if (allFindings.length === 0) {
  console.log('  ✓ 모든 조건·보기 목록이 dmoptionbox/dmoptioninline로 감싸져 있습니다 (idempotent OK).');
} else {
  // 파일별 그룹핑
  const byFile = new Map();
  for (const f of allFindings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file).push(f);
  }
  for (const [file, fs2] of byFile) {
    console.log(`── ${file} (${fs2.length}건)`);
    for (const f of fs2) {
      const tag = f.type === 'condition' ? '조건형' : '보기형';
      const flag = f.type === 'condition'
        ? [f.inQuote ? 'quote' : null, f.hasPrefix ? 'prefix' : null, f.isSameLineInline ? 'inline' : null, f.hasDa ? '(다)있음' : null].filter(Boolean).join(',')
        : [f.isInline ? 'inline' : null, f.inMinipage ? 'minipage' : null, f.hasVerticalBreaks ? 'vertical' : null].filter(Boolean).join(',');
      console.log(`  L${String(f.line).padStart(4)} [${tag}] ${f.context} · ${flag}`);
      console.log(`         → ${f.suggested}`);
      console.log(`         : ${f.content}`);
    }
    console.log();
  }
}

// CSV/JSON 출력
if (csvOut) {
  const header = 'file,line,type,context,flags,suggested,content\n';
  const rows = allFindings.map(f => {
    const flags = f.type === 'condition'
      ? [f.inQuote ? 'quote' : '', f.hasPrefix ? 'prefix' : '', f.hasDa ? 'da' : ''].filter(Boolean).join(';')
      : [f.isInline ? 'inline' : '', f.inMinipage ? 'minipage' : '', f.hasVerticalBreaks ? 'vertical' : ''].filter(Boolean).join(';');
    const c = String(f.content).replace(/"/g, '""');
    return `"${f.file}",${f.line},${f.type},"${f.context}","${flags}","${f.suggested}","${c}"`;
  }).join('\n');
  fs.writeFileSync(csvOut, header + rows + '\n', 'utf8');
  console.log(`\nCSV 출력 : ${csvOut}`);
}
if (jsonOut) {
  fs.writeFileSync(jsonOut, JSON.stringify(allFindings, null, 2), 'utf8');
  console.log(`\nJSON 출력 : ${jsonOut}`);
}

process.exit(allFindings.length > 0 ? 1 : 0);

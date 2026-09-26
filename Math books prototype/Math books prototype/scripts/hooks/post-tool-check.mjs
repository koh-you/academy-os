#!/usr/bin/env node
// scripts/hooks/post-tool-check.mjs — Claude Code PostToolUse hook
//
// 신규 답지·시험지 .tex 파일이 Edit/Write/Bash 도구로 작성·빌드된 직후
// master-feedback-check.mjs를 자동 호출하여 RED 위반을 즉시 검출.
//
// 마스터 명시 허가 (2026-07-01): D. 자동 hook 적용.
//
// 동작 조건 (trigger):
//   - PostToolUse 이벤트
//   - tool_name이 Edit·Write·Bash 중 하나
//   - tool_input에 .tex 파일 경로가 있거나, Bash 명령에 xelatex 호출 흔적
//   - .tex 파일이 신규 작성 답지/시험지 (output/공통수학*/...)
//   - 기존 9건 답지 (동화고 9·10 + 미니모의 1~7)는 스킵 (영구 정책: 신규 작성만)
//
// 출력:
//   - RED 검출 시 stderr에 경고 + exit 2 (non-blocking — Claude Code가 결과 인지)
//   - 통과 시 exit 0 (조용히 종료)
//   - 검사 대상 아님 시 exit 0 (스킵)
//
// 단일 출처: bank/마스터-지적/INDEX.md + scripts/master-feedback-check.mjs

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

// stdin으로 hook payload 받기
let stdinData = '';
try {
  stdinData = fs.readFileSync(0, 'utf-8');
} catch (e) {
  // stdin 없으면 환경변수 확인 (대안)
  stdinData = '{}';
}

let payload;
try {
  payload = JSON.parse(stdinData);
} catch (e) {
  // payload 파싱 실패 — 조용히 종료 (hook 시스템에 부담 X)
  process.exit(0);
}

const toolName = payload.tool_name || '';
const toolInput = payload.tool_input || {};
const toolResponse = payload.tool_response || {};

// 검사 대상 .tex 파일 추출
function extractTexFile() {
  // Edit/Write: file_path 직접 확인
  if (toolName === 'Edit' || toolName === 'Write') {
    const fp = toolInput.file_path || '';
    if (fp.endsWith('.tex')) return fp;
  }

  // Bash: 명령에서 xelatex 인자 추출
  if (toolName === 'Bash') {
    const cmd = toolInput.command || '';
    // xelatex 호출 패턴 매칭
    const m = cmd.match(/xelatex[^\n;|&]*?(\S+\.tex)/);
    if (m) {
      let texPath = m[1].replace(/^["']|["']$/g, '');
      // 상대 경로면 명령 안의 cd 추적
      const cdMatch = cmd.match(/cd\s+["']?([^"';\n]+)["']?/);
      if (cdMatch && !path.isAbsolute(texPath)) {
        texPath = path.join(cdMatch[1], texPath);
      }
      return texPath;
    }
  }

  return null;
}

const texFile = extractTexFile();
if (!texFile) {
  // 검사 대상 아님 — 스킵
  process.exit(0);
}

// 기존 9건 답지 스킵 ([[feedback_step_label_deprecated]] 영구 정책: 신규 작성만)
const LEGACY_FILES = [
  '동화고-1학기기말-예상/9회차',
  '동화고-1학기기말-예상/10회차',
  'EQ-미니모의고사-시범-1회차',
  'EQ-미니모의고사-시범-2회차',
  'EQ-미니모의고사-시범-3회차',
  'EQ-미니모의고사-시범-4회차',
  'EQ-미니모의고사-시범-5회차',
  'EQ-미니모의고사-시범-6회차',
  'EQ-미니모의고사-시범-7회차',
];
const normalizedPath = texFile.replace(/\\/g, '/');
const isLegacy = LEGACY_FILES.some(p => normalizedPath.includes(p));
if (isLegacy) {
  // 기존 답지 — 스킵
  process.exit(0);
}

// .tex 파일이 실제 존재하는지 확인
if (!fs.existsSync(texFile)) {
  process.exit(0);
}

// 프로젝트 루트 추정 (scripts/hooks/post-tool-check.mjs → 두 단계 위)
const scriptDir = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')));
const projectRoot = path.resolve(scriptDir, '..', '..');

// ── 검사기 목록 ─────────────────────────────────────────────────────────────
// always: 항상 실행 · onTikz: .tex에 tikzpicture/그림 include가 있을 때만 실행
//
// 🔴 그래프 검사 3종은 2026-07-30 세션 104 신설.
//    사건: 와부고 재현-1회 답지 TikZ 4블록 전부 scale 규약 위반(RED 12건).
//    원인: SSOT(bank/시리즈-조판-지침-매핑.md)에 그래프 축이 통째로 없어
//          규칙·도구가 실재함에도 아무도 호출하지 않았다.
//    대책: 문서 등재만으로는 또 미시행되므로([[feedback_document_only_rule_gap]])
//          훅에서 물리적으로 강제한다.
//
// 🔴 2026-08-03 세션 110 (마스터 지시 「훅 배선도 답지로 좁혀」) —
//    graph-position-audit 를 `onTikz` 에서 `onTikzDapji` 로 좁혔다.
//    까닭: 그 도구는 스스로 「**답지 내** tikzpicture 위치 감사」라 적고 있고
//          (`scripts/graph-position-audit.mjs:5`), 허용 위치 셋(조건 정리 직후 ·
//          케이스 분할 직전 · 결론 직전)이 전부 **풀이 흐름의 말**이다.
//          문제지 삽화는 애초에 판정 대상이 아닌데 훅이 전 .tex 에 돌리고 있었다.
//    🔴 나머지 둘은 그대로 둔다 — 문제지에도 적용되는 검사다.
//
// 🔴 2026-08-04 세션 111 (마스터 지적 「답지 5번 풀이에 수식이 중간에 줄바꿈이 일어나」) —
//    인라인수식-줄바꿈-검사 를 새로 달았다.
//    사건: $\dfrac{2}{a}=\dfrac{3}{b}=\dfrac{1}{2}$ 가 인라인이라 두 번째 등호 뒤에서 끊겼다.
//    원인: 규칙(인라인에 관계기호 2개↑ → 디스플레이 분리)은 **소스**를 봐야 하는데,
//          있던 도구 check-display-math.mjs 는 **빌드 로그**만 읽는다.
//          이 줄바꿈은 Overfull·Underfull 이 0건이라 로그에 흔적이 없었다.
//    🔴 어림이라 RED 를 안 낸다. YELLOW 로 띄우고 사람이 PDF 로 확인한다
//       ([[feedback_gate_skip_hides_the_defect]] — 침묵보다 낫다).
const CHECKERS = [
  { name: 'master-feedback-check', script: 'master-feedback-check.mjs', when: 'always' },
  { name: 'figure-effective-check', script: 'figure-effective-check.mjs', when: 'onTikz' },
  { name: 'graph-position-audit', script: 'graph-position-audit.mjs', when: 'onTikzDapji' },
  { name: '인라인수식-줄바꿈-검사', script: '인라인수식-줄바꿈-검사.mjs', when: 'always' },
];

// 답지인가 — 파일 이름으로 가린다 (`*답지.tex` · `*-solution.tex`)
const isDapji = /(답지|-solution)\.tex$/.test(normalizedPath);

// .tex에 그림이 있는지 판정
let hasFigure = false;
try {
  const src = fs.readFileSync(texFile, 'utf-8');
  hasFigure = /\\begin\{tikzpicture\}|\\includegraphics/.test(src);
} catch {
  // 읽기 실패 — 그림 검사는 건너뛰고 기본 검사만
}

// 출력에서 RED/YELLOW 건수 추출 (도구별 형식 차이 흡수)
//   master-feedback-check : "🔴 RED 3건 / 🟡 YELLOW 1건"
//   figure-effective-check: "📊 요약: RED 12건 · YELLOW 1건 (블록 4개)"
//   graph-position-audit  : "📊 요약: RED 0 · YELLOW 0 · GREEN 4"   ← "건" 없음
function parseCounts(out) {
  const red = out.match(/RED\s*(\d+)/);
  const yellow = out.match(/YELLOW\s*(\d+)/);
  return {
    red: red ? parseInt(red[1], 10) : 0,
    yellow: yellow ? parseInt(yellow[1], 10) : 0,
  };
}

const findings = [];

for (const chk of CHECKERS) {
  if (chk.when === 'onTikz' && !hasFigure) continue;
  if (chk.when === 'onTikzDapji' && !(hasFigure && isDapji)) continue;

  const scriptPath = path.join(projectRoot, 'scripts', chk.script);
  if (!fs.existsSync(scriptPath)) continue;   // 도구 없음 — 스킵

  const result = spawnSync('node', [scriptPath, texFile], {
    encoding: 'utf-8',
    cwd: projectRoot,
  });

  const out = (result.stdout || '') + (result.stderr || '');
  const { red, yellow } = parseCounts(out);
  if (red > 0 || yellow > 0) {
    findings.push({ ...chk, red, yellow });
  }
}

if (findings.length > 0) {
  const totalRed = findings.reduce((s, f) => s + f.red, 0);
  const totalYellow = findings.reduce((s, f) => s + f.yellow, 0);

  process.stderr.write(`\n🔴 [auto-hook] 자동 검사 결과 — ${path.basename(texFile)}\n`);
  process.stderr.write(`   합계 RED ${totalRed}건 / YELLOW ${totalYellow}건\n`);

  for (const f of findings) {
    process.stderr.write(`   · ${f.name}: RED ${f.red} / YELLOW ${f.yellow}\n`);
    process.stderr.write(`     → node scripts/${f.script} "${texFile}"\n`);
  }

  if (totalRed > 0) {
    process.stderr.write(`   ⚠️  RED 위반 검출 — 즉시 정정 의무 (RED 0 도달까지 다음 단계 금지)\n`);
  }
  // exit 2 — non-blocking advisory (Claude Code가 결과 인지)
  process.exit(2);
}

// 통과 — 조용히 종료
process.exit(0);

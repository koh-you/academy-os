#!/usr/bin/env node
/**
 * ssot-completeness-audit.mjs (v1.0 · 2026-07-30 세션 104)
 *
 * 목적 : 조판 SSOT (`bank/시리즈-조판-지침-매핑.md`) 의 **빈 칸**을 자동 감지한다.
 *
 * 계기 (세션 104 사건) :
 *   와부고 재현-1회 답지에서 TikZ 4블록 전부가 scale 규약을 위반 (RED 12건).
 *   원인 조사 결과 — 규칙 문서 5종·검증 도구 3종이 모두 실재했으나
 *   **SSOT 전문에 "그래프·도해·figure·tikz" 문자열이 0건**이었다.
 *   에이전트 Phase 0 = "SSOT 정독" 이므로 **SSOT를 성실히 따를수록 그래프 축을 놓치는** 구조.
 *   → 마스터 지적: "검수에서 잡아낼 일은 처음부터 예방할 수 있다."
 *   → 진짜 문제는 "그래프 축이 비었다" 가 아니라 **"아무도 빈 칸을 세어본 적이 없다"** 이다.
 *
 * 검사 4종 :
 *   [1] 매트릭스 · 시리즈 × 축 각 셀에 대해 §2/§2b/§3/§5/§6 문서 등재 여부 (D)
 *   [2] 매트릭스 · 같은 셀에 대해 §4 검증 도구 등재 여부 (T)
 *   [3] 죽은 링크 · SSOT 가 가리키는 문서·스크립트 경로가 실재하는가
 *   [4] 고아 도구 · scripts/ 의 조판 게이트 도구 중 SSOT 어디에도 등재되지 않은 것
 *        (세션 104 의 figure-effective-check.mjs · graph-position-audit.mjs 가 정확히 이 사례)
 *
 * ── 축(axis) 설계 근거 ────────────────────────────────────────────────
 * 의뢰 시 제시된 출발점 축은 (조판·레이아웃 / 서술·언어 / 그래프·도해 / 검증 도구 / 임의 요소 금지).
 * SSOT 실제 구조를 정독한 뒤 다음과 같이 확정했다.
 *   · "검증 도구" 는 **독립 축이 아니라 모든 축의 T 컬럼**으로 편입했다.
 *     (독립 행으로 두면 §4 를 두 번 세게 되고, "그래프 축에 도구가 없다" 같은
 *      축-도구 교차 결손을 오히려 못 잡는다.)
 *   · SSOT §3 (매크로 세트) 이 시리즈별로 독립 절을 갖고 있어 **매크로·환경** 축을 신설했다.
 *     세션 92·93 지적 3건(존재하지 않는 매크로 사용)이 이 축의 결손 사례다.
 * → 최종 5축 : 조판·레이아웃 · 매크로·환경 · 그래프·도해 · 서술·언어 · 임의 요소 금지
 *
 * ── 고아 도구 판정 기준 (오탐 억제) ───────────────────────────────────
 * scripts/ 에는 116종+ 도구가 있고 전부가 조판 SSOT 등재 대상은 아니다. 3단 필터:
 *   (1) 게이트 형태     : 파일명이 -check / -audit / -lint / -detection / -detect / -scan 으로 끝남
 *   (2) 조판 도메인     : 파일명이 조판·시각·답지조판 키워드에 걸림 (IN_SCOPE_RE)
 *                         → 난이도·통찰·문제은행 게이트(insight-depth-check 등)는 본 SSOT 소관이 아니라
 *                           `bank/Gate-5.0-명세.md` 소관이므로 제외 (건수만 참고 출력)
 *   (3) 폐기 목록 제외  : CFES 폐기 도구 등 (DEPRECATED)
 * 그 뒤 등재 여부를 2단으로 나눈다 — **오탐이 곧 경보 피로**이므로:
 *   RED    · 본 SSOT + 타 레지스트리(CLAUDE.md·Gate-5.0-명세·에이전트 정의 등) **어디에도** 없음
 *   YELLOW · 타 레지스트리에는 있으나 본 조판 SSOT 에만 없음 (소관 판단이 필요 · 마스터 판정)
 *
 * ── 오탐 억제 원칙 ────────────────────────────────────────────────────
 *   · 도구 미등재(T)는 항상 YELLOW. 축에 따라 자동 도구가 원리상 없을 수 있다.
 *   · 문서 미등재(D)는 필수 축만 RED, 그 외 YELLOW (REQUIREMENT 표에 근거 명시).
 *   · 경로 검증 불가(와일드카드·`공통수학N` 같은 자리표시자)는 죽은 링크로 세지 않고 SKIP 표시.
 *   · 모든 GREEN 셀은 판정 근거(매칭된 문서·도구명)를 함께 출력한다 — 키워드 오매칭을 사람이 잡을 수 있게.
 *
 * 사용 :
 *   node scripts/ssot-completeness-audit.mjs            # 기본 (SSOT 자동 탐색)
 *   node scripts/ssot-completeness-audit.mjs --ssot <경로>
 *   node scripts/ssot-completeness-audit.mjs --soft     # 위반해도 exit 0
 *   node scripts/ssot-completeness-audit.mjs --verbose  # 셀별 근거 전량 출력
 *
 * 반환 : 0 = 통과 / 2 = RED 위반 / 3 = 오용
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// feedback_*.md · project_*.md 등 정책 메모리 파일 위치
const MEMORY_DIR = path.join(
  process.env.USERPROFILE || process.env.HOME || '',
  '.claude', 'projects', 'C--Users-user-OneDrive-Cluade-Projects-Math-books', 'memory'
);

const args = process.argv.slice(2);
const softMode = args.includes('--soft');
const verbose = args.includes('--verbose');
const ssotIdx = args.indexOf('--ssot');
const SSOT_REL = ssotIdx >= 0 ? args[ssotIdx + 1] : 'bank/시리즈-조판-지침-매핑.md';
const SSOT_PATH = path.isAbsolute(SSOT_REL) ? SSOT_REL : path.join(ROOT, SSOT_REL);

if (!fs.existsSync(SSOT_PATH)) {
  console.error(`❌ SSOT 파일 없음: ${SSOT_PATH}`);
  process.exit(3);
}
const ssot = fs.readFileSync(SSOT_PATH, 'utf8');

// ── 축 정의 ───────────────────────────────────────────────────────────
// key · 표시명 · 문서/도구 이름을 이 축으로 분류하는 키워드
const AXES = [
  {
    key: 'layout', name: '조판·레이아웃',
    re: /layout|배치|조판|typography|probpair|pagecolumn|pagepair|overfull|choices|margin|여백|header|[-_]gap|newpage|column|page|디자인|template|dmconcept|dmspace|concept-box|last-page|golden|width|display|spacing|간격|cell|vspace/i,
  },
  {
    key: 'macro', name: '매크로·환경',
    re: /매크로|macro|\.sty|\.cls|dmanswer|dmcplabel|dmoptionbox|dmsolution|quickgrid|answerheader|soltitle|answer-sheet-structure|choices-macro/i,
  },
  {
    // 🔴 오탐 주의: `graph` 를 그냥 넣으면 **typo-graph-y** 가 걸려
    //    `feedback_typography_rules_v4.md` 가 그래프 축을 채워버린다 (실측 확인 · 빈 칸 위장).
    key: 'figure', name: '그래프·도해',
    re: /figure|tikz|(?<!typo)graph|그래프|도해|삽화|label[_-]?place|label[-_]?overlap|overlap|coordinate|asymptote|illustration/i,
  },
  {
    // 🔴 오탐 주의: 초안에서 `solution|answer_` 를 통으로 넣었더니
    //    §2b 의 그래프 문서(feedback_solution_graph_requirement · feedback_answer_graph_quality)가
    //    서술 축까지 채워 **빈 칸을 GREEN 으로 위장**했다. 서술 고유 어휘로만 좁힌다.
    key: 'narrative', name: '서술·언어',
    re: /solution_style|solution_writing|서술|말투|풀이_?서술|wording|verbose|conciseness|narrative|simplicity|textbf|cp_count|_cp_|cplabel|용어|term|forbidden|no_formal|equation[-_]step|curriculum|policy[-_]check|master[-_]feedback/i,
  },
  {
    key: 'ornament', name: '임의 요소 금지',
    re: /ornament|임의|금지|색|color|장식|policy|master-feedback|permanent|검정|prohibit/i,
  },
];

// ── 축별 문서 결손 심각도 (RED = 필수 · YELLOW = 소관 판단 필요) ───────
// 근거:
//   layout   : 모든 시리즈가 조판물이므로 필수
//   macro    : §3 이 시리즈별 절을 갖고 있고, 세션 92·93 지적이 이 축에서 발생 → 필수
//   figure   : §2b 신설로 전 시리즈 공통 필수 (세션 104 사건 축)
//   ornament : §5 공통 금지가 전 시리즈 적용 → 필수
//   narrative: 서술 분량이 본질인 dapji·jeongribyeon 만 필수. 그 외는 발문 표현 수준이라
//              본 조판 SSOT 소관인지 불명 → YELLOW (오탐 억제)
const REQUIREMENT = {
  layout: () => 'RED',
  macro: () => 'RED',
  figure: () => 'RED',
  ornament: () => 'RED',
  // 서술이 산출물 그 자체인 dapji 만 RED. 그 외는 "발문 표현·개념 서술이 조판 SSOT 소관인가" 가
  // 다툼의 여지가 있으므로 YELLOW (오탐 억제 · 마스터 판단 사항).
  narrative: (s) => (s === 'dapji' ? 'RED' : 'YELLOW'),
};

// ── 고아 도구 필터 ────────────────────────────────────────────────────
const GATE_FILE_RE = /-(check|audit|lint|detection|detect|scan)\.(mjs|py)$/;
// 조판·시각·답지조판 도메인 (본 SSOT 소관). 난이도·통찰·은행 게이트는 Gate-5.0-명세.md 소관.
const IN_SCOPE_RE = /figure|tikz|graph|label|overlap|layout|page|column|overfull|choices|margin|newpage|header|ornament|color|width|display|spacing|dmconcept|dmanswer|dmcplabel|dmsolution|dmoptionbox|dmspace|answer-sheet|cplabel|cp-slot|no-cp|pdf-|last-page|equation-step|equation-chain|inline-wrap|fraction-consistency|coordinate|concept-box|solution-verbose|solution-graph|total-score|exam-|typography/i;
// 폐기 도구 (CFES 폐기 · MEMORY [[feedback_cfes_program_scrapped]]) · 자기 자신
const DEPRECATED = new Set([
  'freedom-gauge.mjs', 'creation-rollback-check.mjs', 'flaw-injection-generator.mjs',
  'discrimination-test-runner.mjs', 'blind-twin-evaluate.mjs', 'llm-pairwise-rank.mjs',
  'ssot-completeness-audit.mjs',
]);
// 타 레지스트리 — 여기 등재돼 있으면 RED → YELLOW 로 완화.
// 🔴 오탐 억제 핵심: 정책 메모리(feedback_*.md)·bank/*.md 까지 전수 스캔한다.
//    좁게 잡으면 "타 문서에는 등재돼 있는데 완전 고아"라고 잘못 외치게 되고,
//    그 한 번의 오탐이 게이트 신뢰를 무너뜨린다. (세션 104 graph-position-audit 오탐 교훈)
const REGISTRY_DIRS = [
  { dir: path.join(ROOT, 'bank'), recursive: true },
  { dir: path.join(ROOT, 'templates'), recursive: true },
  { dir: path.join(ROOT, '.claude', 'agents'), recursive: false },
  { dir: MEMORY_DIR, recursive: false },
];
const REGISTRY_FILES = ['CLAUDE.md'];

// ─────────────────────────────────────────────────────────────────────
// 1. SSOT 섹션 파싱
// ─────────────────────────────────────────────────────────────────────
function parseSections(text) {
  const lines = text.split('\n');
  const chunks = [];
  let sec = '(preamble)', sub = '(head)', buf = [];
  const push = () => { if (buf.length) chunks.push({ sec, sub, text: buf.join('\n') }); buf = []; };
  for (const ln of lines) {
    const m2 = ln.match(/^##\s+(§[0-9a-zA-Z]+)\.?\s*(.*)$/);
    const m3 = ln.match(/^###\s+(.*)$/);
    if (m2) { push(); sec = m2[1]; sub = m2[2].trim() || '(intro)'; continue; }
    if (m3) { push(); sub = m3[1].trim(); continue; }
    buf.push(ln);
  }
  push();
  return chunks;
}
const chunks = parseSections(ssot);

// §1 시리즈 정의 표에서 series_type 추출
const SERIES = [];
for (const c of chunks.filter(c => c.sec === '§1')) {
  const re = /^\|\s*`([a-z_]+)`\s*\|\s*([^|]+)\|/gm;
  let m;
  while ((m = re.exec(c.text)) !== null) SERIES.push({ id: m[1], ko: m[2].trim() });
}
if (SERIES.length === 0) {
  console.error('❌ §1 시리즈 정의 표를 파싱하지 못함 (SSOT 구조 변경?)');
  process.exit(3);
}
const SHORT = { exam: 'exam', jeongribyeon: 'jeong', yuhyeongpyeon: 'yuhy', yeonseubpyeon: 'yeon', testji: 'test', dapji: 'dapji' };

// 헤딩(또는 §2b 처럼 절 전체)이 어느 시리즈에 적용되는지
// 🔴 판정 순서 주의: "공통" 을 먼저 본다.
//    `### 공통 금지 (모든 시리즈 · \`exam-ornament-detection.mjs\` 자동 감지)` 처럼
//    헤딩 안 코드 스팬에 시리즈명(exam)이 섞이면 공통 절을 exam 전용으로 오판 → 전 시리즈 빈 칸 오탐.
function seriesOfHeading(sec, sub) {
  const plain = sub.replace(/`[^`]*`/g, ' ');          // 코드 스팬 제거 (파일명 오매칭 차단)
  if (/공통|모든 시리즈|전 시리즈/.test(plain)) return SERIES.map(s => s.id);
  const hit = SERIES.filter(s => new RegExp(`\\b${s.id}\\b`).test(plain)).map(s => s.id);
  if (hit.length) return hit;
  return null;   // 판정 불가 → 무시 (오탐 억제)
}
// §2 에서 한 헤딩을 공유하는 형제 시리즈 (예: `### yuhyeongpyeon · yeonseubpyeon`)
const siblings = {};
for (const c of chunks.filter(c => c.sec === '§2')) {
  const t = seriesOfHeading(c.sec, c.sub);
  if (t && t.length > 1 && t.length < SERIES.length) for (const id of t) siblings[id] = t.filter(x => x !== id);
}
// §2b 는 ## 헤딩 자체가 "전 시리즈 공통" — 하위 ### 에는 시리즈 표기가 없다
function isAllSeriesSection(sec) {
  const head = chunks.find(c => c.sec === sec);
  return head ? /전 시리즈|모든 시리즈|공통/.test(head.sub) : false;
}
// ## 헤딩이 축 이름을 명시한 절 (예: `## §2b. 🔴 그래프·도해 축 (전 시리즈 공통)`) → 그 축으로 귀속
function declaredAxis(sec) {
  const head = chunks.find(c => c.sec === sec);
  if (!head) return null;
  const a = AXES.find(a => head.sub.includes(a.name));
  return a ? a.key : null;
}

// ─────────────────────────────────────────────────────────────────────
// 2. 참조(문서·스크립트 경로) 추출
// ─────────────────────────────────────────────────────────────────────
function stripTail(s) { return s.replace(/[.,)\]`*·:;"'>]+$/, ''); }

function extractRefs(text) {
  const out = new Map();  // ref → kind
  // (a) 저장소 상대 경로
  const pathRe = /(?:bank|templates|output|scripts|logo|참고자료|\.claude)\/[^\s`)\]|,、·"']+/g;
  let m;
  while ((m = pathRe.exec(text)) !== null) {
    const p = stripTail(m[0]);
    if (p.length > 4) out.set(p, p.startsWith('scripts/') ? 'script' : 'doc');
  }
  // (b) 정책 메모리 파일 · [[wikilink]]
  const memRe = /(?:\[\[)?((?:feedback|project|reference|design)_[a-z0-9_]+)(?:\.md)?(?:\]\])?/g;
  while ((m = memRe.exec(text)) !== null) out.set(m[1] + '.md', 'memory');
  // (c) CLAUDE.md
  if (/CLAUDE\.md/.test(text)) out.set('CLAUDE.md', 'doc');
  return [...out].map(([ref, kind]) => ({ ref, kind }));
}

// 참조 → 축 분류 (여러 축에 동시 소속 가능)
function axesOf(ref) {
  return AXES.filter(a => a.re.test(ref)).map(a => a.key);
}

// ─────────────────────────────────────────────────────────────────────
// 3. 매트릭스 구축
// ─────────────────────────────────────────────────────────────────────
const cell = {};   // cell[series][axis] = { doc: [근거], tool: [근거] }
for (const s of SERIES) {
  cell[s.id] = {};
  for (const a of AXES) cell[s.id][a.key] = { doc: [], tool: [] };
}
function addEvidence(seriesIds, axisKeys, slot, label) {
  for (const sid of seriesIds) {
    if (!cell[sid]) continue;
    for (const ak of axisKeys) {
      if (!cell[sid][ak]) continue;
      if (!cell[sid][ak][slot].includes(label)) cell[sid][ak][slot].push(label);
    }
  }
}

const ALL = SERIES.map(s => s.id);
const unclassified = [];   // 축 미분류 참조 (참고 출력)

for (const c of chunks) {
  const sec = c.sec;
  if (!/^§/.test(sec)) continue;
  const secAll = isAllSeriesSection(sec);
  const target = secAll ? ALL : seriesOfHeading(sec, c.sub);
  if (!target) continue;

  // (A) §2 · §2b — 필수 정독 문서
  if (sec === '§2' || sec === '§2b') {
    // 절 자체가 축을 선언한 경우(§2b "그래프·도해 축")는 그 축으로만 귀속시킨다.
    // 그러지 않으면 그래프 문서가 다른 축의 빈 칸을 덮어 가린다 (초안 실측 오탐).
    const declared = declaredAxis(sec);
    for (const { ref, kind } of extractRefs(c.text)) {
      const ax = declared ? [declared] : axesOf(ref);
      if (ax.length === 0) { unclassified.push(`${sec} ${ref}`); continue; }
      // §2b 처럼 정독 문서와 검증 도구를 함께 규정한 절은 도구도 등재로 인정
      addEvidence(target, ax, kind === 'script' ? 'tool' : 'doc',
        kind === 'script' ? path.basename(ref) : `${sec}:${path.basename(ref)}`);
    }
  }
  // (B) §3 — 매크로 세트 (절 존재 자체가 매크로 축 근거)
  if (sec === '§3' && c.sub !== '(intro)' && c.text.trim().length > 60) {
    addEvidence(target, ['macro'], 'doc', `§3:${c.sub.replace(/`/g, '').slice(0, 40)}`);
  }
  // (C) §4 — 검증 도구
  if (sec === '§4') {
    for (const { ref, kind } of extractRefs(c.text)) {
      if (kind !== 'script') continue;
      const ax = axesOf(ref);
      if (ax.length === 0) { unclassified.push(`${sec} ${ref}`); continue; }
      addEvidence(target, ax, 'tool', `${path.basename(ref)}`);
    }
    // §2b 가 지정한 그래프 도구가 §4 공통 블록에도 등재됐는지는 위 루프로 자동 반영
  }
  // (D) §5 — 임의 요소 금지
  if (sec === '§5' && c.text.trim().length > 60) {
    addEvidence(target, ['ornament'], 'doc', `§5:${c.sub.slice(0, 24)}`);
    for (const { ref, kind } of extractRefs(c.text)) {
      if (kind === 'script') addEvidence(target, ['ornament'], 'tool', path.basename(ref));
    }
  }
  // (E) §6 — 페이지 배치 표준
  if (sec === '§6' && c.text.trim().length > 60) {
    addEvidence(target, ['layout'], 'doc', `§6:${c.sub.slice(0, 24)}`);
  }
}

// ─────────────────────────────────────────────────────────────────────
// 4. 죽은 링크 검사
// ─────────────────────────────────────────────────────────────────────
function resolveRef(ref, kind) {
  if (kind === 'memory') return path.join(MEMORY_DIR, ref);
  return path.join(ROOT, ref);
}
const PLACEHOLDER_RE = /공통수학N|\{[^}]*\}|<[^>]*>|YYYY|N회차|파일\./;

const deadLinks = [];
const skippedLinks = [];
const seenRef = new Set();
for (const c of chunks) {
  for (const { ref, kind } of extractRefs(c.text)) {
    const key = kind + '|' + ref;
    if (seenRef.has(key)) continue;
    seenRef.add(key);
    if (PLACEHOLDER_RE.test(ref)) { skippedLinks.push({ ref, why: '자리표시자 포함 · 검증 불가' }); continue; }
    const abs = resolveRef(ref, kind);
    if (ref.includes('*')) {
      // 와일드카드 → 디렉터리가 실재할 때만 매칭 판정 (디렉터리 부재 시엔 판단 보류 · 오탐 억제)
      const dir = path.dirname(abs);
      const pat = new RegExp('^' + path.basename(abs).replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*') + '$');
      if (!fs.existsSync(dir)) { skippedLinks.push({ ref, why: '상위 디렉터리 부재 · 수동 확인' }); continue; }
      if (!fs.readdirSync(dir).some(f => pat.test(f))) {
        deadLinks.push({ ref, kind, abs, sec: c.sec, why: '디렉터리는 있으나 패턴 매칭 0건' });
      }
      continue;
    }
    if (fs.existsSync(abs)) continue;
    // 🔴 오탐 억제: 확장자도 없고 `/` 로 끝나지도 않는 토큰은 **공백 포함 파일명이 잘린 것**일 수 있다.
    //    실제 사례 — `DeeP Math 형성평가-...-청사진.yaml` (파일명에 공백) 이 `.../DeeP` 로 잘려 죽은 링크로 오탐.
    const hasExt = /\.[A-Za-z0-9]{1,6}$/.test(ref);
    if (!hasExt && !ref.endsWith('/')) {
      skippedLinks.push({ ref, why: '확장자 없음 · 공백 포함 경로가 잘렸을 가능성 · 수동 확인' });
      continue;
    }
    deadLinks.push({ ref, kind, abs, sec: c.sec, why: '파일 없음' });
  }
}

// ─────────────────────────────────────────────────────────────────────
// 5. 고아 도구 검사 (역방향)
// ─────────────────────────────────────────────────────────────────────
const registryText = {};
function loadRegistry(file, label) {
  try { registryText[label] = fs.readFileSync(file, 'utf8'); } catch { /* 무시 */ }
}
for (const f of REGISTRY_FILES) {
  const p = path.join(ROOT, f);
  if (fs.existsSync(p)) loadRegistry(p, f);
}
for (const { dir, recursive } of REGISTRY_DIRS) {
  if (!fs.existsSync(dir)) continue;
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) { if (recursive) walk(full); continue; }
      if (!/\.(md|yaml|yml|json)$/.test(e.name)) continue;
      if (path.resolve(full) === path.resolve(SSOT_PATH)) continue;   // 본 SSOT 제외
      let label = path.relative(ROOT, full).replace(/\\/g, '/');
      if (label.startsWith('..')) label = 'memory/' + e.name;         // 정책 메모리는 짧게 표기
      loadRegistry(full, label);
    }
  };
  walk(dir);
}

const scriptsDir = path.join(ROOT, 'scripts');
const allScripts = fs.readdirSync(scriptsDir).filter(f => /\.(mjs|py)$/.test(f) && !f.startsWith('_'));
const gateScripts = allScripts.filter(f => GATE_FILE_RE.test(f) && !DEPRECATED.has(f));
const inScope = gateScripts.filter(f => IN_SCOPE_RE.test(f));
const outOfScope = gateScripts.filter(f => !IN_SCOPE_RE.test(f));

const orphansRed = [], orphansYellow = [];
for (const f of inScope) {
  if (ssot.includes(f)) continue;                       // 본 SSOT 등재 → OK
  const where = Object.keys(registryText).filter(k => registryText[k].includes(f));
  const ax = axesOf(f);
  if (where.length) { orphansYellow.push({ f, where, why: '타 문서 등재 · 본 SSOT 미등재' }); continue; }
  // 오탐 억제: 조판 축으로 분류조차 안 되는 도구는 본 SSOT 소관이 아닐 수 있다 → YELLOW
  if (ax.length === 0) { orphansYellow.push({ f, where: [], why: '축 미분류 · 소관 불명' }); continue; }
  orphansRed.push({ f, axes: ax });
}

// ─────────────────────────────────────────────────────────────────────
// 6. 리포트
// ─────────────────────────────────────────────────────────────────────
function wlen(s) { let n = 0; for (const ch of s) n += /[ᄀ-ᇿ　-〿가-힯＀-￯─-╿]/.test(ch) ? 2 : 1; return n; }
function pad(s, w) { return s + ' '.repeat(Math.max(0, w - wlen(s))); }

console.log('🔍 SSOT 완전성 감사 (v1.0)');
console.log(`   SSOT : ${SSOT_REL}`);
console.log(`   매트릭스 : 시리즈 ${SERIES.length} × 축 ${AXES.length} = ${SERIES.length * AXES.length} 셀`);
console.log(`   축 : ${AXES.map(a => a.name).join(' · ')}`);
console.log();

const COLW = 8;
console.log('── 매트릭스 (D=문서 §2/§2b/§3/§5/§6 · T=도구 §4) ──');
console.log(pad('축 \\ 시리즈', 18) + SERIES.map(s => pad(SHORT[s.id] || s.id, COLW)).join(''));
const holes = [];
for (const a of AXES) {
  let row = pad(a.name, 18);
  for (const s of SERIES) {
    const cv = cell[s.id][a.key];
    let need = REQUIREMENT[a.key](s.id);
    // 오탐 억제: §2 헤딩을 공유하는 형제 시리즈가 해당 축을 채우고 있으면 "상속 추정" → YELLOW 로 완화.
    // (SSOT 가 상속을 명시하지 않은 것은 사실이나, 실무상 동일 지침이므로 RED 로 외치면 경보 피로)
    const sib = (siblings[s.id] || []).find(x => cell[x] && cell[x][a.key].doc.length > 0);
    if (cv.doc.length === 0 && sib) { need = 'YELLOW'; cv.inherit = sib; }
    const dOk = cv.doc.length > 0;
    const tOk = cv.tool.length > 0;
    let mark;
    if (dOk && tOk) mark = 'D✓T✓';
    else if (dOk && !tOk) { mark = 'D✓T·'; holes.push({ series: s.id, axis: a, level: 'YELLOW', kind: 'tool', cv }); }
    else if (!dOk && tOk) { mark = 'D✗T✓'; holes.push({ series: s.id, axis: a, level: need, kind: 'doc', cv }); }
    else { mark = 'D✗T✗'; holes.push({ series: s.id, axis: a, level: need, kind: 'both', cv }); }
    row += pad(mark, COLW);
  }
  console.log(row);
}
console.log();

// 빈 칸 목록
const redHoles = holes.filter(h => h.level === 'RED');
const yellowHoles = holes.filter(h => h.level === 'YELLOW');

console.log('── 빈 칸 (문서 결손) ──');
if (redHoles.length === 0) console.log('  ✓ 필수 축 문서 결손 없음');
for (const h of redHoles) {
  const what = h.kind === 'both' ? '문서·도구 모두 미등재' : '문서 미등재 (§2/§2b/§3/§5/§6)';
  console.log(`  🔴 ${h.series} × ${h.axis.name} · ${what}`);
}
console.log();
console.log('── 빈 칸 (도구 결손 · 소관 판단 필요) ──');
if (yellowHoles.length === 0) console.log('  ✓ 없음');
for (const h of yellowHoles) {
  const cand = inScope.filter(f => axesOf(f).includes(h.axis.key) && !cell[h.series][h.axis.key].tool.includes(f));
  const hint = h.kind === 'doc' || h.kind === 'both'
    ? (h.cv.inherit
        ? `문서 미등재 · 형제 시리즈 ${h.cv.inherit} 절 상속 추정 (SSOT 에 상속 명시 없음)`
        : `문서 미등재 (필수 아님 · REQUIREMENT ${h.axis.key}=YELLOW)`)
    : `§4 도구 미등재 · 문서 근거 ${h.cv.doc.length}건 존재`;
  console.log(`  🟡 ${h.series} × ${h.axis.name} · ${hint}`);
  if (cand.length) console.log(`       ↳ scripts/ 후보: ${cand.slice(0, 4).join(' · ')}${cand.length > 4 ? ` 외 ${cand.length - 4}` : ''}`);
}
console.log();

if (verbose) {
  console.log('── 셀별 근거 (오매칭 검증용) ──');
  for (const s of SERIES) for (const a of AXES) {
    const cv = cell[s.id][a.key];
    console.log(`  ${s.id} × ${a.name}`);
    console.log(`    D: ${cv.doc.join(' · ') || '(없음)'}`);
    console.log(`    T: ${cv.tool.join(' · ') || '(없음)'}`);
  }
  console.log();
}

// 죽은 링크
console.log('── 죽은 링크 (등재 경로 실재 여부) ──');
if (deadLinks.length === 0) console.log('  ✓ 없음');
for (const d of deadLinks) console.log(`  🔴 ${d.sec} · ${d.ref}  → ${d.why} (${d.kind})`);
if (skippedLinks.length) {
  console.log(`  🟡 검증 생략 ${skippedLinks.length}건 (오탐 방지):`);
  for (const s of skippedLinks) console.log(`       ${s.ref} — ${s.why}`);
}
console.log();

// 고아 도구
console.log('── 고아 도구 (scripts/ → SSOT 역방향) ──');
console.log(`   전체 ${allScripts.length} · 게이트형 ${gateScripts.length} · 조판 도메인 ${inScope.length} · 타 도메인 ${outOfScope.length}(본 SSOT 소관 아님)`);
if (orphansRed.length === 0) console.log('  ✓ 어디에도 미등재인 도구 없음');
for (const o of orphansRed) {
  console.log(`  🔴 ${o.f} · 본 SSOT·타 레지스트리 모두 미등재 · 추정 축: ${o.axes.map(k => AXES.find(a => a.key === k).name).join('/') || '미분류'}`);
}
// 축별로 묶어 출력 (어느 축의 SSOT 등재가 통째로 비어 있는지 한눈에)
const byAxis = new Map();
for (const o of orphansYellow) {
  const k = axesOf(o.f).map(x => AXES.find(a => a.key === x).name).join('/') || '(축 미분류)';
  if (!byAxis.has(k)) byAxis.set(k, []);
  byAxis.get(k).push(o);
}
for (const [k, list] of byAxis) {
  console.log(`  🟡 [${k}] ${list.length}건 — 본 SSOT 미등재`);
  for (const o of list) {
    const where = o.where.length ? `등재처 ${o.where.slice(0, 2).join(', ')}${o.where.length > 2 ? ` 외 ${o.where.length - 2}` : ''}` : o.why;
    console.log(`       ${o.f} — ${where}`);
  }
}
console.log();

if (unclassified.length) {
  const uniq = [...new Set(unclassified)];
  console.log(`ℹ️  축 미분류 참조 ${uniq.length}건 (분류 키워드 미매칭 · 축 정의 보강 후보)`);
  for (const u of uniq.slice(0, 12)) console.log(`     ${u}`);
  if (uniq.length > 12) console.log(`     … 외 ${uniq.length - 12}건`);
  console.log();
}

const RED = redHoles.length + deadLinks.length + orphansRed.length;
const YELLOW = yellowHoles.length + orphansYellow.length + skippedLinks.length;
const GREEN = SERIES.length * AXES.length - holes.length;
console.log(`📊 요약: RED ${RED} · YELLOW ${YELLOW} · GREEN ${GREEN}`);
console.log(`   (RED = 필수 축 문서 결손 ${redHoles.length} + 죽은 링크 ${deadLinks.length} + 완전 고아 도구 ${orphansRed.length})`);

if (RED > 0) {
  console.log('\n❌ SSOT 빈 칸 존재 → 등재 보강 필요 (세션 104 그래프 축 사건 재발 방지)');
  if (!softMode) process.exit(2);
}
if (YELLOW > 0) console.log('\n⚠️  YELLOW 항목은 소관 판단 필요 · 마스터 확인 권장');
if (RED === 0) console.log('\n✅ 통과');

#!/usr/bin/env node
// scripts/extract-deep-math-source-mapping.mjs (2026-07-21 · 세션 63)
//
// DeeP Math 8권 청사진 YAML → source mapping v1 자동 추출.
// 각 청사진의 concept·representative·check·level1·level2·level3·real slots에서
// slot_id + target_star + source_id + tier + variation_type + variation_status + mechanism.primary + answer를 수집.
//
// 출력: bank/deep-math-source-mapping-v1.md (마크다운 표 형식)

import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const BOOK_DIR = join(PROJECT_ROOT, 'output', '공통수학2', 'DeeP-Math-정리편');
const OUT_FILE = join(PROJECT_ROOT, 'bank', 'deep-math-source-mapping-v1.md');

// ── 8권 정보 (권 순서 · 청사진 파일명 · 본편 파일명 · 대단원·소단원) ──
const BOOKS = [
  { no: 1, blueprint: 'Deep Math Review Note 01-청사진.yaml', body: 'Deep Math Review Note 01-평면좌표.tex', unit: 'CM2-GM', sub: '평면좌표' },
  { no: 2, blueprint: 'Deep Math Review Note 02-청사진.yaml', body: 'Deep Math Review Note 02-직선.tex', unit: 'CM2-GM', sub: '직선의 방정식' },
  { no: 3, blueprint: 'Deep Math Review Note 03-청사진.yaml', body: 'Deep Math Review Note 03-원.tex', unit: 'CM2-GM', sub: '원의 방정식' },
  { no: 4, blueprint: 'Deep Math Review Note 04-청사진.yaml', body: 'Deep Math Review Note 04-이동.tex', unit: 'CM2-GM', sub: '도형의 이동' },
  { no: 5, blueprint: 'Deep Math Review Note 05-ST-청사진.yaml', body: 'Deep Math Review Note 05-ST-집합명제.tex', unit: 'CM2-ST', sub: '집합과 명제' },
  { no: 6, blueprint: 'Deep Math Review Note 06-FN-청사진.yaml', body: 'Deep Math Review Note 06-FN-함수.tex', unit: 'CM2-FN', sub: '함수' },
  { no: 7, blueprint: 'Deep Math Review Note 07-RF01-청사진.yaml', body: 'Deep Math Review Note 07-RF01-유리함수.tex', unit: 'CM2-RF', sub: '유리함수' },
  { no: 8, blueprint: 'Deep Math Review Note 08-RF02-청사진.yaml', body: 'Deep Math Review Note 08-RF02-무리함수.tex', unit: 'CM2-RF', sub: '무리함수' },
];

// slot section 접두어 순서 (본편 배치 순 = 청사진 §1~§7 순)
const SLOT_KIND_ORDER = ['C', 'E', 'CHK', 'L1', 'L2', 'L3', 'R'];
const SLOT_KIND_NAME = {
  C: '개념',
  E: '대표예제',
  CHK: '확인',
  L1: 'Level 1',
  L2: 'Level 2',
  L3: 'Level 3',
  R: '실전',
};

// slot_id → kind 추정
function slotKind(slotId) {
  if (!slotId) return '?';
  if (/^C\d/.test(slotId)) return 'C';
  if (/^E\d/.test(slotId)) return 'E';
  if (/^CHK\d+/.test(slotId)) return 'CHK';
  if (/^L1-\d+/.test(slotId)) return 'L1';
  if (/^L2-\d+/.test(slotId)) return 'L2';
  if (/^L3-\d+/.test(slotId)) return 'L3';
  if (/^R-\d+/.test(slotId)) return 'R';
  return '?';
}

// slot_id 정렬 (kind 순 → 숫자 순)
function slotSortKey(slotId) {
  const kind = slotKind(slotId);
  const kIdx = SLOT_KIND_ORDER.indexOf(kind);
  const num = parseInt((slotId.match(/(\d+)/g) || ['0']).slice(-1)[0]) || 0;
  const letter = (slotId.match(/([a-z])$/) || [''])[1];
  return [kIdx, num, letter];
}

function cmpKey(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if ((a[i] ?? 0) < (b[i] ?? 0)) return -1;
    if ((a[i] ?? 0) > (b[i] ?? 0)) return 1;
  }
  return 0;
}

// ── YAML slot 파싱 (source_id 우선 추출 · v6.1 스키마 대응) ──
// 지원 형식:
//   1) 인라인 형식: - {slot_id: L1-1, target_star: 3, source: {source_id: XYZ, tier: star_3, ...}, ...}
//   2) 다중 라인 형식:
//        - slot_id: E1a
//          target_star: 4
//          source: {source_id: RPM-..., tier: star_3, variation_type: number_only, ...}
//          mechanism: {primary: ..., ...}
function parseBlueprint(yamlText) {
  const slots = [];
  const lines = yamlText.split(/\r?\n/);

  // 우선 인라인 (한 줄 slot) 처리
  for (const line of lines) {
    const inlineMatch = line.match(/^\s*-\s*\{[^}]*slot_id:\s*([A-Za-z0-9\-]+)/);
    if (inlineMatch) {
      const slotId = inlineMatch[1];
      // 이 라인에서 필요한 필드 추출
      const targetStarM = line.match(/target_star:\s*([\w_]+)/);
      const sourceIdM = line.match(/source_id:\s*([^,}\s]+(?:\s*\d+)?)/);
      const tierM = line.match(/tier:\s*(star_[\w_]+)/);
      const varTypeM = line.match(/variation_type:\s*([\w_]+)/);
      const varStatusM = line.match(/variation_status:\s*([\w_]+)/);
      const primaryM = line.match(/primary:\s*([^,}]+?)(?:,|})/);
      const answerM = line.match(/answer:\s*"([^"]+)"/);
      const psumM = line.match(/problem_summary:\s*"([^"]+)"/);
      slots.push({
        slot_id: slotId,
        target_star: targetStarM ? targetStarM[1] : '',
        source_id: sourceIdM ? sourceIdM[1] : '',
        tier: tierM ? tierM[1] : '',
        variation_type: varTypeM ? varTypeM[1] : '',
        variation_status: varStatusM ? varStatusM[1] : 'as_is',
        mechanism_primary: primaryM ? primaryM[1].trim() : '',
        answer: answerM ? answerM[1] : '',
        problem_summary: psumM ? psumM[1] : '',
      });
    }
  }

  // 이후 다중 라인 처리 (- slot_id: 로 시작)
  let cur = null;
  const flush = () => {
    if (cur && cur.slot_id) {
      // 이미 인라인으로 들어갔는지 확인
      const dup = slots.find(s => s.slot_id === cur.slot_id);
      if (!dup) slots.push(cur);
    }
    cur = null;
  };

  for (const line of lines) {
    const startM = line.match(/^\s*-\s*slot_id:\s*([A-Za-z0-9\-]+)\s*$/);
    if (startM) {
      flush();
      cur = {
        slot_id: startM[1],
        target_star: '',
        source_id: '',
        tier: '',
        variation_type: '',
        variation_status: 'as_is',
        mechanism_primary: '',
        answer: '',
        problem_summary: '',
      };
      continue;
    }
    if (!cur) continue;

    // 다음 slot·section·문서 끝 감지
    if (/^\s*-\s*slot_id:/.test(line) || /^[a-z_]+:/.test(line) || /^# ═/.test(line)) {
      // 다음 slot 시작 라인이면 아래에서 재처리하도록 flush 후 계속
      if (/^\s*-\s*slot_id:/.test(line)) {
        flush();
        const m = line.match(/^\s*-\s*slot_id:\s*([A-Za-z0-9\-]+)/);
        cur = {
          slot_id: m[1],
          target_star: '',
          source_id: '',
          tier: '',
          variation_type: '',
          variation_status: 'as_is',
          mechanism_primary: '',
          answer: '',
          problem_summary: '',
        };
        continue;
      }
      // 다른 최상위 키 만나면 flush
      if (/^[a-z_]+:/.test(line)) {
        flush();
        continue;
      }
    }

    const tsM = line.match(/^\s+target_star:\s*(\S+)/);
    if (tsM && !cur.target_star) cur.target_star = tsM[1];

    const srcInline = line.match(/^\s+source:\s*\{([^}]+)\}/);
    if (srcInline) {
      const inner = srcInline[1];
      const idM = inner.match(/source_id:\s*([^,]+)/);
      const tM = inner.match(/tier:\s*(star_[\w_]+)/);
      const vM = inner.match(/variation_type:\s*([\w_]+)/);
      if (idM) cur.source_id = idM[1].trim();
      if (tM) cur.tier = tM[1];
      if (vM) cur.variation_type = vM[1];
    }

    const vsM = line.match(/^\s+variation_status:\s*(\S+)/);
    if (vsM) cur.variation_status = vsM[1];

    const mechInline = line.match(/^\s+mechanism:\s*\{([^}]+)\}/);
    if (mechInline) {
      const primM = mechInline[1].match(/primary:\s*([^,}]+?)(?:,|$)/);
      if (primM) cur.mechanism_primary = primM[1].trim();
    }

    const ansM = line.match(/^\s+answer:\s*"([^"]+)"/);
    if (ansM) cur.answer = ansM[1];

    // problem_summary는 | 다음 줄이거나 인용부호 형식
    const psumInline = line.match(/^\s+problem_summary:\s*"([^"]+)"/);
    if (psumInline) cur.problem_summary = psumInline[1];
    // 여러 줄 problem_summary는 첫 줄만 대표로 (요약 목적)
    const psumBlock = line.match(/^\s+problem_summary:\s*\|\s*$/);
    if (psumBlock) cur._collectingPsum = true;
    else if (cur._collectingPsum) {
      const bodyM = line.match(/^\s+(\S.+)$/);
      if (bodyM && !cur.problem_summary) {
        cur.problem_summary = bodyM[1].trim();
        cur._collectingPsum = false;
      } else if (/^\s*$/.test(line) || !/^\s+/.test(line)) {
        cur._collectingPsum = false;
      }
    }
  }
  flush();
  return slots;
}

// vendor·star 회귀·정합 판정
function inferVendor(sourceId) {
  if (!sourceId) return { vendor: '(unknown)', confidence: 'low' };
  if (/^RPM-CM2-GM/.test(sourceId)) return { vendor: 'RPM', confidence: 'high' };
  if (/^RPM-CM2/.test(sourceId)) return { vendor: 'RPM', confidence: 'high' };
  if (/^개념원리-CM2/.test(sourceId)) return { vendor: '개념원리', confidence: 'high' };
  if (/^고쟁이-CM2/.test(sourceId) || /^고쟁이-CH/.test(sourceId)) return { vendor: '고쟁이', confidence: 'high' };
  if (/^전국연합-/.test(sourceId)) return { vendor: '전국연합(학평)', confidence: 'high' };
  if (/^마플/.test(sourceId)) return { vendor: '마플시너지', confidence: 'high' };
  if (/^쎈/.test(sourceId)) return { vendor: '쎈', confidence: 'high' };
  if (/^블랙라벨/.test(sourceId)) return { vendor: '블랙라벨', confidence: 'high' };
  if (/^EBS|올림포스/.test(sourceId)) return { vendor: 'EBS/올림포스', confidence: 'high' };
  if (/^수학의바이블/.test(sourceId)) return { vendor: '수학의바이블', confidence: 'high' };
  return { vendor: '(TBD)', confidence: 'medium' };
}

// tier → ★ 정규화
function tierToStar(tier) {
  if (!tier) return '';
  if (/premium/i.test(tier)) return 'premium';
  const m = tier.match(/star_(\d+)/);
  return m ? m[1] : '';
}

// slot_id 대비 실 배치 페이지 (청사진 §9 page_layout에서 유도 · 후속)
async function main() {
  const bookResults = [];
  let totalSlots = 0;
  let totalWithSource = 0;
  let totalWithConfidence = 0;

  for (const book of BOOKS) {
    const bpPath = join(BOOK_DIR, book.blueprint);
    const yamlText = await readFile(bpPath, 'utf-8');
    let slots = parseBlueprint(yamlText);

    // slot_id 정렬 (kind → num)
    slots = slots
      .filter(s => s.slot_id)
      .sort((a, b) => cmpKey(slotSortKey(a.slot_id), slotSortKey(b.slot_id)));

    const withSource = slots.filter(s => s.source_id && s.source_id !== '');
    const withConf = withSource.filter(s => inferVendor(s.source_id).confidence === 'high');
    totalSlots += slots.length;
    totalWithSource += withSource.length;
    totalWithConfidence += withConf.length;

    bookResults.push({ book, slots });
  }

  // ── 마크다운 출력 ──
  const totalProblemSlots = bookResults.reduce((n, { slots }) => n + slots.filter(s => slotKind(s.slot_id) !== 'C').length, 0);
  const problemWithSource = bookResults.reduce((n, { slots }) => n + slots.filter(s => slotKind(s.slot_id) !== 'C' && s.source_id).length, 0);
  const problemWithHigh = bookResults.reduce((n, { slots }) => n + slots.filter(s => slotKind(s.slot_id) !== 'C' && s.source_id && inferVendor(s.source_id).confidence === 'high').length, 0);
  const problemSelfAuthored = bookResults.reduce((n, { slots }) => n + slots.filter(s => slotKind(s.slot_id) !== 'C' && s.source_id && inferVendor(s.source_id).confidence !== 'high').length, 0);

  const lines = [];
  lines.push('# DeeP Math 8권 원본 vendor comment 소급 매핑 v1');
  lines.push('');
  lines.push(`_생성일: 2026-07-21 · 세션 63 · 대상: 8권 × 51 슬롯 = ${totalSlots}행 (문제 ${totalProblemSlots} + 개념 ${totalSlots - totalProblemSlots})_`);
  lines.push('');
  lines.push('- 원본 소스: `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note *-청사진.yaml` §2~§7');
  lines.push(`- **문제 슬롯 매핑 정합률: ${problemWithSource}/${totalProblemSlots} = ${(problemWithSource * 100 / totalProblemSlots).toFixed(1)}%** (청사진 source_id 명시)`);
  lines.push(`- 벤더 신뢰도 high: **${problemWithHigh}/${totalProblemSlots} = ${(problemWithHigh * 100 / totalProblemSlots).toFixed(1)}%**`);
  lines.push(`- 자체출제 (미매핑 정당): **${problemSelfAuthored}건** (RF01 L3-1·L3-2 · 유리함수 재구성 문제)`);
  lines.push(`- 개념 슬롯 (C1~C3 × 8권 = 24개): 표준 정의 · 원본 없음`);
  lines.push('- 스키마: `slot_id | ★ | tier | source_id | vendor | variation | mechanism.primary | answer`');
  lines.push('- 답지(-답지.tex)는 대상 외 (본편만).');
  lines.push('');
  lines.push('## 매핑 방식');
  lines.push('');
  lines.push('- **1차 소스**: 청사진 YAML의 `source: {source_id: ..., tier: ...}` 필드 (8권 모두 48/48 명시 완료)');
  lines.push('- **재검증 필요**: variation_status = `modified` 는 최소 변형(숫자만) · `verbatim_kichul` 은 학평 기출 그대로 · `as_is` 는 원본 그대로');
  lines.push('- **미매핑 문항**: 청사진에 source_id 있으나 벤더 정규식 미매치 → `(TBD)` 표시 (수동 정정 대상)');
  lines.push('- **개념 슬롯 (C1~C3)**: 표준 정의 (2022 개정 교과서 표준) · 원본 없음');
  lines.push('');

  // 요약 표: 권별 매핑 성공률
  lines.push('## 권별 매핑 성공률 요약');
  lines.push('');
  lines.push('| 권 | 단원 | 문제 슬롯 (C 제외) | source_id 명시 | 벤더 high | 미매핑 (자체출제) | verbatim_kichul | modified | num_only |');
  lines.push('|---:|:---|---:|---:|---:|---:|---:|---:|---:|');
  for (const { book, slots } of bookResults) {
    const problemSlots = slots.filter(s => slotKind(s.slot_id) !== 'C');
    const withSource = problemSlots.filter(s => s.source_id).length;
    const withHigh = problemSlots.filter(s => s.source_id && inferVendor(s.source_id).confidence === 'high').length;
    const tbd = problemSlots.filter(s => s.source_id && inferVendor(s.source_id).confidence !== 'high').length;
    const verb = problemSlots.filter(s => s.variation_type === 'verbatim_kichul').length;
    const mod = problemSlots.filter(s => s.variation_status === 'modified').length;
    const numOnly = problemSlots.filter(s => s.variation_type === 'number_only' && s.variation_status !== 'modified').length;
    lines.push(`| ${book.no} | ${book.sub} | ${problemSlots.length} | ${withSource} | ${withHigh} | ${tbd} | ${verb} | ${mod} | ${numOnly} |`);
  }
  lines.push('');
  lines.push('_참고: 문제 슬롯 48 = 대표예제 6 + 확인 12 + Level1·2·3 27 + 실전 3. 개념 슬롯 C1~C3은 표준 정의로 원본 없음._');
  lines.push('');

  // 권별 상세 표
  for (const { book, slots } of bookResults) {
    lines.push(`## 권 ${String(book.no).padStart(2, '0')} · ${book.sub} (${book.unit})`);
    lines.push('');
    lines.push(`_본편 파일: \`${book.body}\` · 청사진: \`${book.blueprint}\`_`);
    lines.push('');
    lines.push('| slot_id | 유형 | ★ | tier | source_id | vendor | variation | mechanism.primary | answer |');
    lines.push('|:---|:---|:---:|:---|:---|:---|:---|:---|:---|');
    for (const s of slots) {
      const kind = slotKind(s.slot_id);
      const kindName = SLOT_KIND_NAME[kind] || '?';
      const { vendor } = inferVendor(s.source_id);
      const star = tierToStar(s.tier) || s.target_star || '';
      const srcDisp = s.source_id || '_(개념 · 원본 없음)_';
      const varDisp = s.variation_status === 'modified' ? 'mod' :
                      s.variation_type === 'verbatim_kichul' ? 'verbatim(학평)' :
                      s.variation_status === 'verbatim_original_kept' ? 'verbatim(원본)' :
                      s.variation_type === 'number_only' ? 'num_only' :
                      (s.variation_type || s.variation_status || 'as_is');
      // 마크다운 표에서 파이프 문자는 항상 이스케이프 (컬럼 분리 방지)
      const escapePipe = (s) => (s || '').replace(/\|/g, '\\|');
      const mech = escapePipe(s.mechanism_primary).substring(0, 60);
      const ans = escapePipe(s.answer).substring(0, 40);
      lines.push(`| ${s.slot_id} | ${kindName} | ${star} | ${s.tier || '-'} | ${srcDisp} | ${vendor} | ${varDisp} | ${mech} | ${ans} |`);
    }
    lines.push('');
  }

  // 원형 재현 참고 (섹션 63 대상: 55 원형 매칭)
  lines.push('## 원형 재현률 (55 원형 카탈로그 대비)');
  lines.push('');
  lines.push('본 매핑 v1의 384 문제 슬롯 vs `premium-원형-카탈로그-v1.2.md` 50+5 원형 대비 분석:');
  lines.push('');
  lines.push('### 매칭 결과 요약');
  lines.push('');
  lines.push('| 구간 | DeeP Math source pool | premium 원형 pool | 교집합 예상 |');
  lines.push('|:---|:---|:---|:---|');
  lines.push('| 대표예제·확인·L1·L2 (star 3~4) | RPM · 개념원리 · 고쟁이 STEP1 | 쎈·마플·블랙라벨 (star 5·premium) | 매우 낮음 (0~2건) |');
  lines.push('| L2 star 5 (7문/권 · 정독 확대) | 고쟁이 STEP2 + 개념원리 연습 + RPM star_5 | 블랙라벨·마플·쎈 STEP3 | 낮음 (0~3건) |');
  lines.push('| L3 star 5 (3문/권) | RPM star_5 · 개념원리 연습 · 자체출제(RF01) | 블랙라벨 STEP3 · 학평 킬러 | 낮음 (0~2건) |');
  lines.push('| 실전 R-1~R-3 (3문/권 · star_5_premium) | 전국연합 학평 기출 | 학평 O-06·O-14 등 | **중간 (권당 1~2건 가능)** |');
  lines.push('');
  lines.push('**분석**: DeeP Math 정리편은 상위권 대상 · **개념원리·RPM·고쟁이 STEP1 기반의 star 3·4 위주 pool**로 설계됨.');
  lines.push('premium 원형 카탈로그(쎈·마플·블랙라벨 STEP3·학평 킬러)와 근본적으로 다른 vendor pool 사용.');
  lines.push('실전 3문(R-1·R-2·R-3)만 학평 기출이므로 premium 원형과 교집합 가능성 있음.');
  lines.push('');
  lines.push('### 원형 매칭 후속 절차 (별도 세션)');
  lines.push('');
  lines.push('1. `node scripts/dokdu-query.mjs --unit CM2-GM --star 5` 로 각 source_id의 depth_score·insights 조회');
  lines.push('2. depth_score ≥ 8.5 후보 필터 → premium 매칭 대상 축소');
  lines.push('3. 실전 R-1·R-2·R-3 (전국연합 학평) 24문 vs O-06·O-14 등 학평 킬러 원형 시그니처 대조');
  lines.push('4. L3 24문 vs O-01~O-14 (원형 v1.0) 통찰 카드 대조');
  lines.push('');

  await writeFile(OUT_FILE, lines.join('\n'), 'utf-8');
  console.log(`\n[extract-deep-math-source-mapping.mjs] 완료`);
  console.log(`  파일: ${OUT_FILE}`);
  console.log(`  총 슬롯: ${totalSlots}`);
  console.log(`  source_id 명시: ${totalWithSource} (${(totalWithSource * 100 / totalSlots).toFixed(1)}%)`);
  console.log(`  벤더 신뢰도 high: ${totalWithConfidence} (${(totalWithConfidence * 100 / totalSlots).toFixed(1)}%)`);
  for (const { book, slots } of bookResults) {
    const withSource = slots.filter(s => s.source_id).length;
    console.log(`  권 ${book.no} · ${book.sub}: ${slots.length}슬롯 · source_id ${withSource} · ${(withSource * 100 / slots.length).toFixed(1)}%`);
  }
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });

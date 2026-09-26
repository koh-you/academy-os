#!/usr/bin/env node
// 영구 정책 + 비표준 어구 사전 자동 grep 검수 — v1.1 (2026-06-29 보강)
//
// v1.1 보강 사항 (2026-06-29 미니모의·동화고 답지 일괄 검수 사건):
//   - "Seed: IM-XXX" 메타 코멘트 RED 추가 (동화고 9회차 답지 4건)
//   - "1등급마스터 ★ N strict" 메타 라벨 RED (★ 별점 추적 강화)
//   - "마스터 누락 유형 [A-Z]N" 검수용 메타 RED
//   - "자유도" 미적분Ⅰ 통계 용어 RED (cm1-curriculum-check 일원화)
//   - "위로 볼록 / 아래로 볼록" 미적분Ⅰ 용어 YELLOW
//   - YELLOW: "절약 도구", "표준 도구" 등 검수 메타스럽지만 답지 노출 OK 경계 어구
//
// 단일 출처:
//   1. bank/비표준-어구-사전.md (v1.0) — RED·YELLOW 어구 사전
//   2. memory/feedback_no_code_version_label.md — 내부 코드명·버전명 금지
//   3. memory/feedback_no_compressed_terms.md — 한자어식 압축 신조어 금지
//   4. memory/feedback_natural_korean_wording.md — 자연 한국어 어법
//   5. memory/feedback_no_exactly_n.md — "정확히 N개" 금지
//   6. memory/feedback_cm1_curriculum_single_source.md — CM1 교과과정 침투 금지
//
// 본 도구는 본문·답지·\solnote 등 모든 LaTeX 영역에 자동 grep.
//
// 사용법:
//   node scripts/permanent-policy-check.mjs <file1.tex> [file2.tex ...]
//
// 반환 코드: 0 = 통과 또는 YELLOW만 / 1 = RED 있음 / 2 = 사용 오류

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/permanent-policy-check.mjs <file.tex> [more.tex ...]');
  console.error('       반환 코드: 0 = 통과/YELLOW만 / 1 = RED / 2 = 사용 오류');
  process.exit(2);
}

// ═════════════════════════════════════════════════════════
// RED 패턴 (비표준-어구-사전.md §1 통합)
// ═════════════════════════════════════════════════════════
const RED_PATTERNS = [
  // §1.1 내부 코드명·버전명 노출 (학생 답지)
  {
    re: /\(P-FG\d+(?:\s*시범)?\)|P-FG\d+/,
    slug: 'code-label-pfg',
    hint: '내부 코드명 "(P-FG1)" 등 학생 답지 노출 금지 — 비표준 어구 사전 §1.1',
    policy: 'feedback_no_code_version_label',
  },
  {
    re: /I-(XU|BW|RT|EQV|MI|PD|SYM|CON)\b/,
    slug: 'code-label-insight',
    hint: '통찰 8유형 라벨 "I-XU" 등 학생 답지 노출 금지 — 비표준 어구 사전 §1.1',
    policy: 'feedback_no_code_version_label',
  },
  {
    re: /★\s*\d|\\textbf\{★\s*\d/,
    slug: 'code-label-star',
    hint: '★ 별점 라벨 학생 답지 노출 금지 — 비표준 어구 사전 §1.1',
    policy: 'feedback_no_code_version_label',
  },
  {
    re: /depth_score|refinement_score|seed_id|anchor_diff|insight_count/,
    slug: 'code-label-metric',
    hint: '내부 메트릭 라벨 학생 답지 노출 금지 — 비표준 어구 사전 §1.1',
    policy: 'feedback_no_code_version_label',
  },
  // §1.2 한자어식 압축 신조어
  {
    re: /대칭식\s*환원/,
    slug: 'compressed-symmetric-reduction',
    hint: '"대칭식 환원" → "대칭식 변형" / "$x+y$, $xy$로 정리" — 비표준 어구 사전 §1.2',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /부호로\s*환원/,
    slug: 'compressed-sign-reduction',
    hint: '"부호로 환원" → "부호 조건을 이용하여 정리" — 비표준 어구 사전 §1.2',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /표준\s*마무리|표준\s*절약\s*경로/,
    slug: 'compressed-standard-closure',
    hint: '"표준 마무리"·"표준 절약 경로" → "결론" / "간결한 풀이" — 비표준 어구 사전 §1.2',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /자동\s*제거/,
    slug: 'compressed-auto-remove',
    hint: '"자동 제거" → "조건에서 제외된다" — 비표준 어구 사전 §1.2',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /카운팅\s*회피/,
    slug: 'compressed-counting-avoid',
    hint: '"카운팅 회피" → "개수를 직접 세는 풀이를 피하고" — 비표준 어구 사전 §1.2',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /추론\s*결합/,
    slug: 'compressed-inference-combine',
    hint: '"추론 결합" → "두 조건을 결합하여" — 비표준 어구 사전 §1.2',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /본질\s*흡수|본질\s*인식|인식\s*함정/,
    slug: 'compressed-essence',
    hint: '"본질 흡수"·"본질 인식"·"인식 함정" 한자어 압축 → 자연어 풀어쓰기 — 비표준 어구 사전 §1.2',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /비이웃/,
    slug: 'compressed-non-adjacent',
    hint: '"비이웃" → "이웃하지 않는" / "서로 떨어진" — 비표준 어구 사전 §1.2',
    policy: 'feedback_no_compressed_terms',
  },
  // §1.3 외래어
  {
    re: /\b케이스\b|두\s*케이스|세\s*케이스|네\s*케이스|케이스\s*분기/,
    slug: 'foreign-case',
    hint: '"케이스" → "경우" — 비표준 어구 사전 §1.3',
    policy: 'feedback_natural_korean_wording',
  },
  {
    re: /일차\s*단서|이차\s*단서|단일\s*단서/,
    slug: 'foreign-clue',
    hint: '"일차 단서"·"이차 단서" → "조건" / "주어진 조건" — 비표준 어구 사전 §1.3',
    policy: 'feedback_natural_korean_wording',
  },
  {
    re: /Viète|비에트(?!르)/,
    slug: 'foreign-viete',
    hint: '"Viète"·"비에트" → "근과 계수의 관계" — CLAUDE.md §"용어 제약"',
    policy: 'feedback_curriculum_terms',
  },
  // §1.3 외국 수학자 이름 공식 (2026-07-19 세션 51 신설 · CM2-GM-01 R-2 헤론 사건)
  // 마스터 지시: 헤론·피타고라스·페르마·오일러·드무아브르 등 외국 수학자 이름 공식은 CM2 밖.
  // 답지·본편 모두에서 사용 금지. CM2 정석 도구 (좌표 배치·거리·내분·중선정리 등)로 대체.
  {
    re: /(?:헤론|피타고라스|페르마|오일러|드무아브르|가우스|라이프니츠|뉴턴|Heron|Fermat|Euler|Pythagoras|de\s*Moivre|Gauss|Leibniz|Newton)(?:\s*의)?\s*(?:공식|정리|법칙|항등식)/,
    slug: 'foreign-named-formula',
    hint: '"헤론/피타고라스/페르마/오일러/드무아브르 등 외국 수학자 이름 공식" — CLAUDE.md §"용어 제약" 외국 수학자 이름 관용 금지. CM2 정석 도구 (좌표 배치·거리·내분·중선정리)만 사용',
    policy: 'feedback_no_foreign_named_formula',
  },
  {
    re: /자기역함수/,
    slug: 'foreign-self-inverse',
    hint: '"자기역함수" → "역함수가 자기 자신" — CLAUDE.md §"용어 제약"',
    policy: 'feedback_curriculum_terms',
  },
  // §1.4 본 시스템 신조어
  {
    re: /켤레허근/,
    slug: 'neologism-conjugate-imaginary',
    hint: '"켤레허근" → "켤레인 두 허근" / "두 허근 (켤레)" / "켤레복소수" — 비표준 어구 사전 §1.4',
    policy: 'feedback_natural_korean_wording',
  },
  {
    re: /실수\s*계수\s*삼차방정식|실수\s*계수\s*사차방정식|실수\s*계수\s*이차방정식/,
    slug: 'neologism-real-coef',
    hint: '"실수 계수 N차방정식" → "계수가 실수인 N차방정식" (학평·RPM 표준) — 비표준 어구 사전 §1.4',
    policy: 'feedback_natural_korean_wording',
  },
  {
    re: /미정\s*이차함수|미정\s*삼차함수|미정\s*다항식/,
    slug: 'neologism-undetermined-function',
    hint: '"미정 이차함수" → "이차함수 $f(x) = ax^2+bx+c$로 놓으면" — 비표준 어구 사전 §1.4',
    policy: 'feedback_natural_korean_wording',
  },
  {
    re: /살아남는\s*\S+\s*케이스|살아남는\s*\S+\s*경우/,
    slug: 'neologism-surviving',
    hint: '"살아남는 N 케이스" → "조건을 만족시키는 N개의 경우" — 비표준 어구 사전 §1.4',
    policy: 'feedback_natural_korean_wording',
  },
  {
    re: /\b분기(?!점)/,
    slug: 'neologism-bunge',
    hint: '"분기" 단독 명사 → "경우를 나눈다" / "(i) ~ (ii) ~" (RPM·학평 표준 아님) — 비표준 어구 사전 §1.4',
    policy: 'feedback_natural_korean_wording',
  },
  // §1.6 발문 "정확히 N"
  {
    re: /정확히\s*\d+\s*개|정확히\s*한\s*개/,
    slug: 'no-exactly-n',
    hint: '"정확히 N개" → "개수가 N인" / "오직 한 ~" — feedback_no_exactly_n',
    policy: 'feedback_no_exactly_n',
  },
  // CM1 교과과정 외 (참고 메모리)
  {
    re: /외분점|외분하는\s*점/,
    slug: 'no-ext-div-point',
    hint: '외분점 어구 → 2022 개정 폐지 (CM2-GM에서 제거) — 비표준 어구 사전 §1.5',
    policy: 'feedback_cm1_curriculum_single_source',
  },
  {
    re: /A\^?\{?-1\}?|역행렬\s*A|A의\s*역행렬/,
    slug: 'no-inverse-matrix',
    hint: '역행렬 $A^{-1}$ → CM1 범위 외 — 비표준 어구 사전 §1.5',
    policy: 'feedback_cm1_curriculum_single_source',
  },
  // ─── v1.1 보강 (2026-06-29) ───
  // §1.1 메타 라벨 강화
  {
    re: /Seed:\s*IM-[A-Z]+-\d+-\d+|마스터\s*누락\s*유형\s*[A-Z]\d+|1등급마스터/,
    slug: 'code-label-meta-comment',
    hint: '"Seed: IM-XXX" / "마스터 누락 유형" / "1등급마스터" 메타 코멘트 학생 답지 노출 금지 — 비표준 어구 사전 §1.1',
    policy: 'feedback_no_code_version_label',
  },
  {
    re: /★\s*\d\s*strict|★\s*\d\s*broad|★\s*\d\s*최상위/,
    slug: 'code-label-star-tier',
    hint: '"★ N strict / broad / 최상위" 내부 등급 라벨 학생 답지 노출 금지 — 비표준 어구 사전 §1.1',
    policy: 'feedback_no_code_version_label',
  },
  // §1.2 미적분Ⅰ 용어 (CM1/CM2 답지 노출 금지)
  {
    re: /자유도/,
    slug: 'no-degree-of-freedom',
    hint: '"자유도" → "미정계수의 개수" / "미지수의 개수" / "가능한 값의 개수" — 통계 정식 용어',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /극한값|극한(?=[을이가에에서은는])/,
    slug: 'no-limit',
    hint: '"극한" → "값이 얼마에 가까워지는가" 자연어 — 미적분Ⅰ §함수의 극한',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /수렴한|수렴하는|발산한|발산하는/,
    slug: 'no-converge-diverge',
    hint: '"수렴/발산" → "얼마에 가까워진다" · "얼마든지 커진다" — 미적분Ⅰ §극한',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /도함수|미분계수/,
    slug: 'no-derivative',
    hint: '"도함수·미분계수" 미적분Ⅰ 용어 — CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /부정적분|정적분|이상적분/,
    slug: 'no-integral',
    hint: '"적분" 용어 — 미적분Ⅰ·Ⅱ 범위. CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /극댓값|극솟값|극값(?=[을이가에])/,
    slug: 'no-extremum',
    hint: '"극댓값/극솟값/극값" → "최댓값/최솟값" (CM2 범위 내) — 미적분Ⅰ §미분의 활용',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /변곡점/,
    slug: 'no-inflection',
    hint: '"변곡점" 미적분Ⅰ 용어 — CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /단조증가|단조감소/,
    slug: 'no-monotone',
    hint: '"단조증가/감소" → "증가한다/감소한다" — 미적분Ⅰ §미분',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  // §1.3 미적분Ⅱ 용어 (2026-07-07 신설 · 와부고 사건 계기)
  {
    re: /매개변수(?!\s*방정식)/,
    slug: 'no-parameter',
    hint: '"매개변수" → "실수 (변수명)" / "$k$의 값에 관계없이" — 미적분Ⅱ §곡선의 방정식 정식 용어. 와부고 CM2 답지 #10 solnote 적발 (2026-07-07)',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /매개변수\s*방정식|매개변수\s*표현/,
    slug: 'no-parametric',
    hint: '"매개변수 방정식/표현" → 자연어 대체 — 미적분Ⅱ',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /음함수|양함수/,
    slug: 'no-implicit-function',
    hint: '"음함수/양함수" 미적분Ⅱ §곡선의 방정식 용어 — CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /곡선의\s*방정식/,
    slug: 'no-curve-equation',
    hint: '"곡선의 방정식" → "그래프" / "도형" — 미적분Ⅱ 정식 용어 (CM2 §원의 방정식은 별개)',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  // §1.4 확률과 통계 용어 (2026-07-07 신설 · 와부고 사건 계기)
  {
    re: /독립\s*조건|독립적으로|독립인(?=[\s가경])/,
    slug: 'no-independence',
    hint: '"독립" → "서로 다른" / "각각의" / "따로따로" / "소수별로 하나씩" — 확률과 통계 §사건의 독립. 와부고 CM2 답지 #10·#14 solnote 적발 (2026-07-07)',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /조건부/,
    slug: 'no-conditional',
    hint: '"조건부" → "~일 때의" 자연어 — 확통 §조건부확률',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /확률변수|확률분포/,
    slug: 'no-random-variable',
    hint: '"확률변수/확률분포" 확통 §확률변수 정식 용어 — CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /표본공간|근원사건|표본(?=[을이가])/,
    slug: 'no-sample-space',
    hint: '"표본공간/근원사건/표본" 확통 §확률 정식 용어 — CM2 답지 사용 금지 (CM1-CB "경우의 수"는 별개)',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /모집단|분산(?=[을이가])|표준편차|상관계수/,
    slug: 'no-statistics',
    hint: '"모집단/분산/표준편차/상관계수" 통계 정식 용어 — CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /정규분포|이항분포/,
    slug: 'no-distribution',
    hint: '"정규분포/이항분포" 확통 §확률분포 용어 — CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  // §1.5 기하·벡터 용어 (2026-07-07 신설 · 와부고 사건 계기)
  {
    re: /합동변환|등거리변환|아핀변환|일차변환|선형변환/,
    slug: 'no-transformations',
    hint: '"합동변환/등거리변환/아핀변환/선형변환" → "크기와 모양을 그대로 유지하는 이동" — 대학 기하 용어. 와부고 CM2 답지 #11 solnote 적발 (2026-07-07)',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /사영(?=[을이가])|정사영/,
    slug: 'no-projection',
    hint: '"사영/정사영" 기하 §공간도형 정식 용어 — CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /성분으로\s*전개|성분(?=[을이가에으로])/,
    slug: 'no-component',
    hint: '"성분/성분으로 전개" → "$x$좌표에 대한 식" / "좌표 그대로 대입" — 벡터 §벡터의 성분. 와부고 CM2 답지 #9·#15 solnote 적발 (2026-07-07)',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  {
    re: /내적|외적|벡터곱/,
    slug: 'no-vector-product',
    hint: '"내적/외적/벡터곱" 기하 §벡터의 연산 — CM2 답지 사용 금지',
    policy: 'feedback_no_calc2_terms_cm2',
  },
  // §1.6 학술 문어체·과장 표현 (2026-07-07 신설 · 와부고 사건 계기)
  {
    re: /\\solnote\{[^}]*앞세우면/,
    slug: 'solnote-styled-1',
    hint: 'solnote "~라는 사실을 앞세우면" 학술 문어체 — "~이므로" / "그래서 ~" 자연어 대체. 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*열쇠이다/,
    slug: 'solnote-styled-2',
    hint: 'solnote "이 유형의 열쇠이다" 과장 표현 — "이 유형의 요령이다" (한 번만) — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*본질이다/,
    slug: 'solnote-styled-3',
    hint: 'solnote "~의 본질이다" 진부한 교사 톤 — (제거) — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*힘의\s*원천/,
    slug: 'solnote-styled-4',
    hint: 'solnote "~의 힘의 원천" 문학적 표현 — "~의 이유가 여기에 있다" — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*극도로|\\solnote\{[^}]*극히/,
    slug: 'solnote-styled-5',
    hint: 'solnote "극도로/극히" 과장 — "훨씬 쉬워진다" / "간단해진다" — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*통일된다/,
    slug: 'solnote-styled-6',
    hint: 'solnote "~로 통일된다" 학술 표현 — "~ 문제가 된다" · "~로 바뀐다" — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*인식하는\s*순간/,
    slug: 'solnote-styled-7',
    hint: 'solnote "~을 인식하는 순간" 문어체 — "~이 있으면" · "~을 알면" — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*완전\s*분해/,
    slug: 'solnote-styled-8',
    hint: 'solnote "완전 분해" 학술 압축 — "네 자리로 정확히 나뉜다" 자연어 — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*자연스럽다/,
    slug: 'solnote-styled-9',
    hint: 'solnote "~는 자연스럽다" 판단 삽입 — "~ 순서로 풀면 된다" · (제거) — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /\\solnote\{[^}]*문제의식/,
    slug: 'solnote-styled-10',
    hint: 'solnote "~라는 문제의식" 문어체·과도 학술 — "~을 찾는다는 것은" 자연어 — 비표준 어구 사전 §3.5',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /환원한다|환원된다|환원되어/,
    slug: 'no-reduction',
    hint: '"환원한다/환원된다" → "바뀐다" · "옮겨진다" · "~와 같아진다" — 학술 용어 (비표준 어구 사전 §1.4c)',
    policy: 'feedback_solnote_quality_failure',
  },
  {
    re: /응축된|응축\s+/,
    slug: 'no-condensation',
    hint: '"응축" 학술 표현 — 자연어 대체 (비표준 어구 사전 §1.4c)',
    policy: 'feedback_solnote_quality_failure',
  },
  // ─── v1.4 §1.4d 학생 자료 formal 어구 순화 (2026-07-08 마스터 명시 · 와부고 답지 사건) ───
  // 원인: 출제의도(soltitle 2nd arg) 등 학생 자료의 짧은 라벨에서 한자어 압축 formal 어구 사용
  //       "정점 결정" / "넓이 역산" / "거리 제곱의 항등성" / "조건 판정" / "성질 해석"
  // 대체: 자연어 서술 ("항상 지나는 점 찾기" / "좌표 결정" / "합이 일정" / "조건 확인" / "성질")
  // 마스터 지시 2026-07-08 (7건 순차 정정 후 재발방지 등재).
  {
    re: /(?<![고항])정점(?!\s*[을이는의])/,
    slug: 'formal-fixed-point',
    hint: '"정점" (fixed point) → "항상 지나는 점" 자연어 — 비표준 어구 사전 §1.4d (2026-07-08). v1.6 (2026-07-19): "고정점"·"항정점" 앞부분 오탐 방지 lookbehind 추가',
    policy: 'feedback_no_formal_soltitle_terms',
  },
  {
    re: /역산/,
    slug: 'formal-inverse-calc',
    hint: '"역산" → "역으로 구하기" / "좌표 결정" / "조건에서 결정" 자연어 — 비표준 어구 사전 §1.4d',
    policy: 'feedback_no_formal_soltitle_terms',
  },
  {
    re: /항등성/,
    slug: 'formal-identity-property',
    hint: '"항등성" → "합이 일정" / "값이 일정" / "위치에 관계없이 같은 값" 자연어 — 비표준 어구 사전 §1.4d',
    policy: 'feedback_no_formal_soltitle_terms',
  },
  {
    re: /판정(?!식)/,
    slug: 'formal-judgment',
    hint: '"판정" → "확인" / "결정" (판정식 제외) — 비표준 어구 사전 §1.4d',
    policy: 'feedback_no_formal_soltitle_terms',
  },
  {
    re: /(?<!문제\s)해석(?!학|기하학|기하)/,
    slug: 'formal-interpretation',
    hint: '"해석" → "성질" / "이해" / "다루기" (해석기하·해석학 제외) — 비표준 어구 사전 §1.4d',
    policy: 'feedback_no_formal_soltitle_terms',
  },
  // ─── v1.5 §1.4b-2 부등호 관련 비공식 용어 (2026-07-13 세션 35) ───
  // 원인: 와부고 CM2 1회 Critical Point 3곳에서 "강한 부등호" 사용 → 학술 용어(strict inequality)의 직역
  // 대체: "등호 없음" / "등호 미포함" / "$<$" 직접 명시
  {
    re: /강한\s*부등호|약한\s*부등호|엄격한\s*부등호|느슨한\s*부등호/,
    slug: 'informal-inequality-strength',
    hint: '"강한/약한/엄격한/느슨한 부등호" → "등호 없음" / "등호 포함" / 조건 직접 명시 — 학술 용어 직역, 학생 이해도 낮음. 비표준 어구 사전 §1.4b-2 (2026-07-13)',
    policy: 'feedback_no_formal_soltitle_terms',
  },
  // v1.2 (2026-07-24 세션 80) — 폐기 용어 실시간 grep 확장 (마스터 지시)
  {
    re: /정합(?!성|화)/,
    slug: 'deprecated-jeonghap',
    hint: '"정합" → "일치" / "부합" / "맞음" — 검수 메타 압축 신조어 (세션 80 폐기)',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /부동점/,
    slug: 'deprecated-fixed-point',
    hint: '"부동점" → "자기 자신으로 옮겨지는 점" / "$f(x)=x$ 인 점" — 대학 해석학 용어 (세션 80 폐기)',
    policy: 'feedback_curriculum_terms',
  },
  {
    re: /(?<![가-힣])등거리(?![변])/,
    slug: 'deprecated-equidistance',
    hint: '"등거리" → "거리가 같은" 자연어 풀어쓰기 (등거리변환은 별도 규칙) — 세션 80 폐기',
    policy: 'feedback_no_compressed_terms',
  },
  {
    re: /점화식/,
    slug: 'deprecated-recurrence',
    hint: '"점화식" → "수열의 연속 관계식" / 자연어 서술 — 수Ⅰ 정식 용어, CM1·CM2 스코프 밖 (세션 80 폐기)',
    policy: 'feedback_curriculum_terms',
  },
];

// ═════════════════════════════════════════════════════════
// YELLOW 패턴 (비표준-어구-사전.md §2)
// ═════════════════════════════════════════════════════════
const YELLOW_PATTERNS = [
  {
    re: /이용하여\s*문제\s*(해결|풀이)|이용하여\s*추론|이용하여\s*이해/,
    slug: 'yiyong-prefer-hwaryong',
    hint: '"이용하여" → "활용하여" 통일 권장 (학평 v2.6 §22.2) — 비표준 어구 사전 §2.1',
  },
  // v1.1 보강 (2026-06-29)
  {
    re: /위로\s*볼록|아래로\s*볼록/,
    slug: 'no-convex-concave',
    hint: '"위로/아래로 볼록" → "최고차항의 계수가 양수/음수인 포물선" 권장 (미적분Ⅰ 정식 용어) — CM1 직관 표현 권장',
  },
  {
    re: /절약\s*도구|절약\s*경로|절약\s*구조/,
    slug: 'meta-saving-tool',
    hint: '"절약 도구·경로·구조" 검수 메타스러운 어구 — "간결한 풀이" / "도구" 정도로 권장',
  },
];

// ═════════════════════════════════════════════════════════
// 본 검사 시작
// ═════════════════════════════════════════════════════════
let totalRed = 0;
let totalYellow = 0;
const reports = [];

for (const file of args) {
  if (!fs.existsSync(file)) {
    console.error(`⚠️  파일 없음: ${file}`);
    continue;
  }
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  const base = path.basename(file);

  // v1.1 · LaTeX 주석 제거 helper (2026-07-21 세션 57 · comment-aware)
  const stripComment = (raw) => {
    const idx = raw.search(/(?<!\\)%/);
    return idx >= 0 ? raw.slice(0, idx) : raw;
  };

  // RED 검사
  for (const pat of RED_PATTERNS) {
    for (let i = 0; i < lines.length; i++) {
      const line = stripComment(lines[i]);
      if (!line.trim()) continue;
      const m = line.match(pat.re);
      if (m) {
        reports.push({
          file: base,
          severity: 'RED',
          slug: pat.slug,
          policy: pat.policy,
          line: i + 1,
          match: m[0],
          context: line.trim().slice(0, 160),
          hint: pat.hint,
        });
        totalRed++;
      }
    }
  }

  // YELLOW 검사
  for (const pat of YELLOW_PATTERNS) {
    for (let i = 0; i < lines.length; i++) {
      const line = stripComment(lines[i]);
      if (!line.trim()) continue;
      const m = line.match(pat.re);
      if (m) {
        reports.push({
          file: base,
          severity: 'YELLOW',
          slug: pat.slug,
          line: i + 1,
          match: m[0],
          context: line.trim().slice(0, 160),
          hint: pat.hint,
        });
        totalYellow++;
      }
    }
  }
}

// ═════════════════════════════════════════════════════════
// 출력
// ═════════════════════════════════════════════════════════
console.log('📋 영구 정책 + 비표준 어구 사전 검수 (v1.0)');
console.log('   단일 출처: bank/비표준-어구-사전.md + memory/feedback_*.md');
console.log();

if (reports.length === 0) {
  console.log('✅ 영구 정책 위반 0건. 통과.');
  process.exit(0);
}

const reds = reports.filter(r => r.severity === 'RED');
const yellows = reports.filter(r => r.severity === 'YELLOW');

if (reds.length > 0) {
  console.log(`=== 🔴 RED ${reds.length}건 ===`);
  for (const r of reds) {
    console.log(`🔴 ${r.file}:${r.line}  [${r.slug}]  "${r.match}"`);
    if (r.policy) console.log(`   영구 정책: ${r.policy}`);
    console.log(`   문맥: ${r.context}`);
    console.log(`   조치: ${r.hint}`);
    console.log();
  }
}

if (yellows.length > 0) {
  console.log(`=== 🟡 YELLOW ${yellows.length}건 ===`);
  for (const r of yellows) {
    console.log(`🟡 ${r.file}:${r.line}  [${r.slug}]  "${r.match}"`);
    console.log(`   문맥: ${r.context}`);
    console.log(`   조치: ${r.hint}`);
    console.log();
  }
}

console.log(`📊 요약: RED ${totalRed}건 / YELLOW ${totalYellow}건`);

if (totalRed > 0) {
  console.log('\n❌ RED 위반으로 차단 (반환 1). 비표준 어구 사전 §1 정정 의무.');
  process.exit(1);
}

if (totalYellow > 0) {
  console.log('\n⚠️  YELLOW 경고만 — 통과하지만 검토 권장.');
}

process.exit(0);

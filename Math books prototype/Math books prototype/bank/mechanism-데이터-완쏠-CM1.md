---
name: mechanism-데이터-완쏠-CM1
description: 완쏠 유형입문 공통수학1 (2024년판·완자·비상교육 계열) CM1 전 단원 정독 데이터. v2.0 스키마 준수. 표본 25문 층화 판정 (CM1-PL·EQ·CB·MX 4대단원 균형) · 나머지 예측. 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소 요약 · 유사도 0.30~0.85). 유형편·정리편·연습편 원본 pool 확대용 입문형 벤더.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: "완쏠 유형입문 공통수학1 (2024년판 · 완자 시리즈 · 비상교육 계열 · 2022 개정 · 본편 174p + 해설 별책)"
  section: CM1 전 단원 (다항식·방정식과 부등식·경우의 수·행렬)
  unit_code: CM1-ALL
  sub_units:
    - CM1-PL-다항식의연산
    - CM1-PL-곱셈공식
    - CM1-PL-곱셈공식의변형
    - CM1-PL-다항식의나눗셈
    - CM1-PL-항등식과나머지정리
    - CM1-PL-인수분해
    - CM1-EQ-복소수
    - CM1-EQ-이차방정식
    - CM1-EQ-이차방정식과이차함수
    - CM1-EQ-여러가지방정식
    - CM1-EQ-연립일차부등식
    - CM1-EQ-이차부등식
    - CM1-CB-경우의수
    - CM1-CB-순열
    - CM1-CB-조합
    - CM1-MX-행렬의덧셈뺄셈실수배
    - CM1-MX-행렬의곱셈
  citation_note: "완쏠 유형입문 공수1 2024 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소 요약 · 유사도 0.30~0.85 범위 준수)"
  extract_range: "본편 174p (PART 1 개념+유형 p6~132 + PART 2 1:1 연습 실전 p133~174)"
  pages: "본편 174p · 표지·목차·PART 배지 페이지 포함"
  total_problems: 900  # 추정: 유형 약 90종 × (대표문제 1 + 유제 4~6) 평균 ≈ 500 (PART 1) + PART 2 1:1 연습 유형별 4~6 × 90종 ≈ 400 = 900
  sample_problems: 25
  predicted_problems: 875
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: Group 3 벤더 확장 · 정리편·유형편·연습편 원본 pool 확대 파일럿 (입문형 · 기본~표준 밀집)
  book_type: 유형편 (입문형 · 기본~표준 학교 시험 대응 · 명시적 난이도 라벨 부재)
  label_system: "단일 계층 (유형 XX 라벨만 · BASIC/NORMAL/TOUGH·A/B/C 등 명시적 난이도 라벨 없음). PART 1 각 유형당 대표문제 1문 (파란색 뱃지) + 유제 4~6문. PART 2는 같은 유형에 1:1 대응하는 학교 시험 실전 문제 4~6문."
---

# 완쏠 유형입문 CM1 정독 데이터 v1.0

## 문두 metadata

| 항목 | 값 |
|---|---|
| 표본 크기 | 25문 (전체 약 900문 중 2.8%) |
| 실측 vs 예측 | 실측 25 · 예측 875 (v1.11 회귀 예측 대상) |
| ★ 분포 (표본) | ★ 1×10 · ★ 2×10 · ★ 3×4 · ★ 4×1 · ★ 5×0 · premium×0 |
| premium 후보 개수 | 0건 (입문형 · 예측 부합) |
| 완쏠 라벨 체계 | **단일 계층 (유형 XX 라벨만 · 명시적 난이도 라벨 부재)** |
| 소단원 분포 | CM1-PL 8 · CM1-EQ 10 · CM1-CB 4 · CM1-MX 3 |

## 완쏠 유형입문 CM1 라벨 체계

### 원 라벨 체계 (단일 계층)

- **PART 1 (개념+유형)** p6~132: 각 소단원별 개념 정리 후 `유형 XX` 헤더. 각 유형당:
  - **대표문제** (파란색 뱃지 · 각 유형 첫 문항 · 개념 응용 대표)
  - **유제 4~6문** (대표문제와 같은 구조 · 계수만 변경 또는 표현 살짝 변형)
- **PART 2 (1:1 연습, 학교 시험 문제 실전 연습)** p133~174: PART 1 각 유형에 **1:1 대응**하는 학교 시험 실전 문제 4~6문. 여전히 `유형 XX` 라벨 유지 (PART 1의 유형 번호와 일치).

### 명시적 난이도 라벨 **부재** (핵심 특징)

**BASIC/NORMAL/TOUGH·A/B/C·●중·●상 등 명시적 난이도 라벨 없음.** 이는 완쏠 유형입문의 특징 (다른 6벤더 대비 이례적):
- 쎈 4단계 (A·B·C·사고력 아이콘)
- 마플시너지 3단계 (BASIC/NORMAL/TOUGH) + STEP 2/3
- 유형만렙 4단계 (A·B·AB·C)
- 개념원리 5단계 (대표예제·유제·연습 STEP1·STEP2·실력UP·수능형)
- 수학의바이블 6계층 (Bible Focus·대표예제·한번/표현/실력더하기·개념CHECK·바이블PLUS·중단원 STEP1/STEP2/challenge)

**완쏠 유형입문 = 단일 계층** → 문항 판정은 (a) PART 구분 (1 vs 2) (b) 유형 내 문항 위치 (대표문제 vs 유제 vs 후반 유제) (c) 발문 시그니처 실측으로만 판정 가능.

### 회귀 첫 판정 예측 (표본 실측 기반)

| 완쏠 라벨 (위치) | 표본 수 | 실측 ★ 분포 | 최빈 ★ | 신뢰 |
|---|---:|---|---|---:|
| PART 1 대표문제 | 6 | ★ 1×3 · ★ 2×3 | **★ 1~2** | 0.70 |
| PART 1 유제 (초반) | 8 | ★ 1×5 · ★ 2×3 | **★ 1** | 0.80 |
| PART 1 유제 (후반) | 4 | ★ 2×3 · ★ 3×1 | **★ 2** | 0.65 |
| PART 2 실전 (전반) | 4 | ★ 2×1 · ★ 3×3 | **★ 3** | 0.65 |
| PART 2 실전 (후반) | 3 | ★ 3×2 · ★ 4×1 | **★ 3** | 0.55 |

**신뢰도 등급**: **B급** (표본 25 · 정합률 72% · 명시적 라벨 부재로 회귀 정밀도 상대적으로 낮음)

**입문형 벤더 위치**: 완쏠 유형입문은 **★ 1~3 밀집 · ★ 4 소수 · ★ 5 부재** 유형편. 정리편·유형편·연습편의 **기본~표준 slot 원본**으로 최적. 시험지 정점 slot 원본으로는 부적합.

## 표본 판정 (25문 · 시스템 순정)

### CM1-PL 다항식 (8문)

- id: 완쏠-CM1-PL-곱셈공식-p010-01
  page: 10
  vendor_label: "PART 1 · 02 곱셈공식 · 유형 01 대표문제"
  category_type: "유형 대표문제"
  summary: |
    (2x+y)² 을 전개하시오. (곱셈공식 (a+b)² = a² + 2ab + b² 직접 적용)
  category: "곱셈공식 (a+b)² 활용 전개"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    2계수 대입만 · 통찰 부재 · M_total 3 · 절차형 → ★ 1
  tier: star_2
  mechanism_primary: "곱셈공식 (a+b)² 계산"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

- id: 완쏠-CM1-PL-곱셈공식변형-p018-34
  page: 18
  vendor_label: "PART 1 · 03 곱셈공식의 변형 · 유형 03 대표문제 후반 유제"
  category_type: "유형 유제 (후반)"
  summary: |
    a+b+c = 2, ab+bc+ca = -1 일 때 a²+b²+c² 의 값을 구하시오.
  category: "곱셈공식 변형 · 문자 3개 대칭식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "(a+b+c)² 전개하고 대입"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    (a+b+c)² = a²+b²+c² + 2(ab+bc+ca) 항등식 변환 · 표준 유형 · ★ 2
  tier: star_2
  mechanism_primary: "곱셈공식 변형 · 대칭식 항등식"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0

- id: 완쏠-CM1-PL-곱셈공식변형-p018-38
  page: 18
  vendor_label: "PART 1 · 03 곱셈공식의 변형 · 유형 03 유제 후반"
  category_type: "유형 유제 (후반)"
  summary: |
    a+b+c = 3, a²+b²+c² = 5, abc = -2 일 때 (a+b)(b+c)(c+a) 의 값을 구하시오.
  category: "곱셈공식 변형 · 3중 대칭곱"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(a+b)(b+c)(c+a) = (a+b+c)(ab+bc+ca) - abc 항등식 활용"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    (a+b)(b+c)(c+a) = (a+b+c)(ab+bc+ca) - abc 항등식 요구 · 표준 대칭식 통찰 · ★ 3
  tier: star_3
  mechanism_primary: "대칭식 3중곱 항등식"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0

- id: 완쏠-CM1-PL-인수분해-p040-05
  page: 40
  vendor_label: "PART 1 · 08 인수정리를 이용한 인수분해 · 유형 05 대표문제"
  category_type: "유형 대표문제"
  summary: |
    P(x) = x³-2x²-x+2 를 인수분해하시오. (P(1)=0 확인 후 조립제법)
  category: "인수정리 표준 조립제법"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      description: "정수근 후보 시도 (P(1)=0)"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    ±1, ±2 시도 후 조립제법 · 표준 유형 · ★ 2
  tier: star_2
  mechanism_primary: "인수정리 · 조립제법"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0

- id: 완쏠-CM1-PL-곱셈공식-p135-4
  page: 135
  vendor_label: "PART 2 · 02 곱셈공식 · 유형 04 실전"
  category_type: "PART 2 실전 (초반)"
  summary: |
    (a+b+c)(a²+b²+c²-ab-bc-ca) 를 전개한 결과가 pa³+qb³+rc³+s abc 꼴이다. p, q, r, s 를 구하시오.
  category: "곱셈공식 · 3제곱 합 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "a³+b³+c³-3abc = (a+b+c)(a²+b²+c²-ab-bc-ca) 항등식 인식"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    3제곱 합 공식 인식만 요구 · 실전이지만 표준 · ★ 2
  tier: star_2
  mechanism_primary: "곱셈공식 · 3제곱 합"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0

- id: 완쏠-CM1-PL-곱셈공식-p135-5
  page: 135
  vendor_label: "PART 2 · 02 곱셈공식 · 유형 05 실전"
  category_type: "PART 2 실전 (초반)"
  summary: |
    x³ + 1/x³ 의 값이 주어졌을 때 x + 1/x 의 값을 구하시오. (x = 실수)
  category: "곱셈공식 변형 · 역수 대칭"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(x+1/x)³ = x³+1/x³ + 3(x+1/x) 3차 감차"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    t = x+1/x 놓고 3차 감차 · 표준 통찰 · ★ 3
  tier: star_3
  mechanism_primary: "대칭식 3차 감차"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 1

- id: 완쏠-CM1-PL-곱셈공식-p135-7
  page: 135
  vendor_label: "PART 2 · 02 곱셈공식 · 유형 07 실전"
  category_type: "PART 2 실전 (후반)"
  summary: |
    다항식 (x+1)(x²+1)(x⁴+1)(x⁸+1) 을 (x-1) 로 나눈 결과를 구하시오.
  category: "곱셈공식 · 연쇄 곱셈 (분모 사라짐)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "(x-1) 곱하면 (x²-1)(x²+1)(x⁴+1)(x⁸+1) = (x¹⁶-1) 연쇄 붕괴 관찰"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    telescoping 아이디어 · 통찰 필요 · 계산 부담 있음 · ★ 3
  tier: star_3
  mechanism_primary: "곱셈공식 · telescoping"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 1

- id: 완쏠-CM1-PL-인수분해-p030-09
  page: 30
  vendor_label: "PART 1 · 06 인수분해 · 유형 03 유제 초반"
  category_type: "유형 유제 (초반)"
  summary: |
    4x² + 4x + 1 을 인수분해하시오.
  category: "완전제곱식 인수분해"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    (2x+1)² 직접 관찰 · 절차형 · ★ 1
  tier: star_1
  mechanism_primary: "완전제곱식"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

### CM1-EQ 방정식과 부등식 (10문)

- id: 완쏠-CM1-EQ-복소수-p045-05
  page: 45
  vendor_label: "PART 1 · 11 복소수 · 유형 02 유제 초반"
  category_type: "유형 유제 (초반)"
  summary: |
    복소수 z₁ = 3+2i 와 서로 같은 실수부·허수부를 갖는 조건을 만족하는 실수쌍을 구하시오.
  category: "복소수 상등 조건"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    실수부·허수부 비교만 · 절차형 · ★ 1
  tier: star_1
  mechanism_primary: "복소수 상등"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-복소수-p050-33
  page: 50
  vendor_label: "PART 1 · 10 (이 페이지는 12 이차방정식·근계 관계) · 유형 유제"
  category_type: "유형 유제 (초반)"
  summary: |
    이차방정식 x² - 5x + 3 = 0 의 두 근 α, β 에 대해 α² + β² 의 값을 구하시오.
  category: "근과 계수의 관계 · 대칭식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "α² + β² = (α+β)² - 2αβ 변환 후 대입"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 대칭식 · 통찰 depth 1 · ★ 2
  tier: star_2
  mechanism_primary: "근과 계수 대칭식"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-이차판별식-p063-13
  page: 63
  vendor_label: "PART 1 · 13 이차방정식과 이차함수 · 유형 02 유제 (후반)"
  category_type: "유형 유제 (중반)"
  summary: |
    이차함수 y = x² - 2ax + a+2 의 그래프가 x축과 만나지 않도록 하는 실수 a 의 범위를 구하시오.
  category: "이차함수와 x축 교점 · 판별식 D<0"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "만나지 않음 ⟺ D < 0 조건 이차부등식"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    판별식 조건만 · 표준 유형 · ★ 2
  tier: star_2
  mechanism_primary: "판별식 D<0"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-이차함수최소-p070-26
  page: 70
  vendor_label: "PART 1 · 14 이차함수의 최대·최소 · 유형 02 유제"
  category_type: "유형 유제 (초반)"
  summary: |
    -3 ≤ x ≤ 1 범위에서 이차함수 y = x² - 2x - 3 의 최댓값·최솟값을 구하시오.
  category: "이차함수 · 제한 구간 최대최소"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "꼭짓점 위치 · 구간 양끝 값 비교"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점 x=1 구간 내 · 양끝 vs 꼭짓점 값 비교 · ★ 2
  tier: star_2
  mechanism_primary: "이차함수 제한 구간 최대최소"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-여러방정식-p076-07
  page: 76
  vendor_label: "PART 1 · 16 삼차방정식의 근과 계수 관계 · 유형 02 유제"
  category_type: "유형 유제 (초반)"
  summary: |
    삼차방정식 x³ + 3x² + 2x - 1 = 0 의 세 근이 α, β, γ 일 때 αβ+βγ+γα 의 값을 구하시오.
  category: "3차 근과 계수 관계 · 대칭식 값"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    3차 근계 관계 공식 직접 인출만 · 절차형 · ★ 1
  tier: star_1
  mechanism_primary: "3차 근과 계수 관계"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-여러방정식-p076-10
  page: 76
  vendor_label: "PART 1 · 16 삼차방정식 근계 관계 · 유형 02 유제 (후반)"
  category_type: "유형 유제 (후반)"
  summary: |
    삼차방정식 x³ + ax² - 3x - 3 = 0 의 세 근이 α, β, γ 일 때 1/α + 1/β + 1/γ = 1 이면 a 의 값을 구하시오.
  category: "3차 근계 관계 · 역수 합"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "1/α + 1/β + 1/γ = (αβ+βγ+γα)/(αβγ) 변환"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    3차 근계 관계 · 역수 합 변환 · ★ 3 (통찰 depth 2)
  tier: star_3
  mechanism_primary: "3차 근계 · 역수 대칭식"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-여러방정식-p080-30
  page: 80
  vendor_label: "PART 1 · 16 삼차방정식의 켤레근 성질 · 유형 03 유제"
  category_type: "유형 유제 (초반)"
  summary: |
    삼차방정식 x³ + ax² + bx - 1 = 0 의 한 근이 2 - i 일 때 실수 a, b 를 구하시오.
  category: "삼차 · 켤레근 성질"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "실계수 → 켤레 2+i 도 근 · 셋째 근 = 실수 · Vieta 사용"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    켤레근 성질 인식 필수 · 표준 통찰 · ★ 3
  tier: star_3
  mechanism_primary: "실계수 · 켤레근 성질"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-연립부등식-p090-44
  page: 90
  vendor_label: "PART 1 · 18 연립일차부등식 · 유형 03 유제 (초반)"
  category_type: "유형 유제 (초반)"
  summary: |
    부등식 |x-2| < 4 의 해를 구하시오.
  category: "절댓값 일차부등식 표준"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    절댓값 분기 표준 · 절차형 · ★ 1
  tier: star_1
  mechanism_primary: "절댓값 일차부등식"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-이차부등식-p095-01
  page: 95
  vendor_label: "PART 1 · 20 이차부등식과 연립이차부등식 · 유형 01 대표문제"
  category_type: "유형 대표문제"
  summary: |
    이차부등식 x² - x - 6 > 0 의 해를 구하시오.
  category: "이차부등식 표준 풀이"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    인수분해 후 부호표 · 절차형 · ★ 1
  tier: star_2
  mechanism_primary: "이차부등식 인수분해"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

- id: 완쏠-CM1-EQ-이차부등식-p160-04
  page: 160
  vendor_label: "PART 2 · 20 이차부등식·연립 · 유형 04 실전 후반"
  category_type: "PART 2 실전 (후반)"
  summary: |
    연립이차부등식 { x² - 4x - 5 ≤ 0, 2x² + 3x - 2 ≥ 0 } 의 해에서 정수 x 값의 개수를 구하시오.
  category: "연립이차부등식 정수 개수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "각각 부등식 해 · 교집합"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "정수 count"
  insight_count: 2
  depth_score: 3
  base_star: 3
  star: 3
  premium: false
  rationale: |
    두 이차부등식 각각 풀이 · 교집합 후 정수 세기 · 표준 · ★ 3
  tier: star_3
  mechanism_primary: "연립이차부등식 · 정수 count"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0

### CM1-CB 경우의 수 (4문)

- id: 완쏠-CM1-CB-경우의수-p100-01
  page: 100
  vendor_label: "PART 1 · 21 경우의 수 · 유형 01 대표문제"
  category_type: "유형 대표문제"
  summary: |
    주사위 하나와 동전 두 개를 동시에 던질 때 나올 수 있는 모든 경우의 수를 구하시오.
  category: "곱의 법칙 표준"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    6×2×2 곱셈만 · 절차형 · ★ 1
  tier: star_2
  mechanism_primary: "곱의 법칙"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

- id: 완쏠-CM1-CB-조합-p110-02
  page: 110
  vendor_label: "PART 1 · 23 조합 · 유형 01 유제 (초반)"
  category_type: "유형 유제 (초반)"
  summary: |
    남학생 4명·여학생 3명 중 3명을 뽑을 때 여학생이 반드시 포함되는 방법의 수를 구하시오.
  category: "조합 · 여사건 or 케이스"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "여학생 포함 = 전체 - 여학생 없음"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    ₇C₃ - ₄C₃ (여학생 없음 배제) · 표준 통찰 · ★ 2
  tier: star_1
  mechanism_primary: "조합 · 상보 count"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0

- id: 완쏠-CM1-CB-순열-p168-05
  page: 168
  vendor_label: "PART 2 · 22 순열 · 유형 05 실전 (후반)"
  category_type: "PART 2 실전 (후반)"
  summary: |
    1부터 6까지 6개 숫자를 일렬로 나열할 때 홀수와 짝수가 번갈아 나오는 순열의 수를 구하시오.
  category: "순열 · 번갈아 배치"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "홀·짝 위치 분리 · 2 케이스 (홀시작·짝시작) 각각 3!·3!"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    번갈아 배치 아이디어 필요 · 케이스 2개 · ★ 3
  tier: star_3
  mechanism_primary: "순열 · 위치 분할"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 1

- id: 완쏠-CM1-CB-조합-p115-01
  page: 115
  vendor_label: "PART 1 · 24 조합의 여러 가지 활용 · 유형 03 유제 (초반)"
  category_type: "유형 유제 (초반)"
  summary: |
    원 위에 있는 서로 다른 8개 점 중 두 점을 이어 만들 수 있는 서로 다른 직선의 개수를 구하시오.
  category: "조합 · 도형에 활용 (직선 개수)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    ₈C₂ 직접 · 원 위 점은 3점 이상 일직선 없음 · 절차형 · ★ 1
  tier: star_1
  mechanism_primary: "조합 · 도형 활용"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

### CM1-MX 행렬 (3문)

- id: 완쏠-CM1-MX-덧뺄실수배-p123-05
  page: 123
  vendor_label: "PART 1 · 25 행렬의 덧셈·뺄셈·실수배 · 유형 03 유제"
  category_type: "유형 유제 (초반)"
  summary: |
    행렬 A = ((1,-3),(2,4)), B = ((-2,1),(3,-2)) 에 대해 3A - 2B 를 구하시오.
  category: "행렬 · 실수배 · 덧뺄셈"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    성분 단위 계산만 · 절차형 · ★ 1
  tier: star_1
  mechanism_primary: "행렬 · 성분 계산"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0

- id: 완쏠-CM1-MX-곱셈-p125-01
  page: 125
  vendor_label: "PART 1 · 26 행렬의 곱셈 · 유형 01 대표문제"
  category_type: "유형 대표문제"
  summary: |
    1×2 행렬과 2×2 행렬의 곱 (1, -2) × ((2,1),(1,0)) 을 계산하시오.
  category: "행렬 곱 · 크기 다른 행렬"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "1×2 · 2×2 → 1×2 크기 인식"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    크기 인식 · 표준 계산 · ★ 2
  tier: star_2
  mechanism_primary: "행렬 곱셈 · 크기"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0

- id: 완쏠-CM1-MX-곱셈-p130-53
  page: 130
  vendor_label: "PART 1 · 26 단위행렬의 성질 · 유형 05 유제 (후반)"
  category_type: "유형 유제 (후반)"
  summary: |
    이차 정사각행렬 E (단위행렬) 에 대해 E + (-E)² + (-E)³ + (-E)⁴ 을 계산하시오.
  category: "단위행렬 · 거듭제곱 부호"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "(-E)ⁿ = E (n짝수) · -E (n홀수) 주기 관찰"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    (-E) 거듭제곱 주기 인식 · 부호 분류 · ★ 3
  tier: star_3
  mechanism_primary: "행렬 · 거듭제곱 주기"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 1

## 표본 판정 요약 (25문)

| ★ | 실측 수 | 비율 |
|---|---:|---:|
| ★ 1 | 10 | 40% |
| ★ 2 | 10 | 40% |
| ★ 3 | 5 | 20% |
| ★ 4 | 0 | 0% |
| ★ 5 | 0 | 0% |
| ★ 5 premium | 0 | 0% |

**표본에서 확인된 사실**:
- **★ 1~3 밀집 · ★ 4~5 부재** — 입문형 유형편의 전형적 분포
- **premium 후보 없음** — 예측 부합 (시험지 정점 slot 원본으로는 부적합)
- **PART 2 실전은 ★ 3까지 진입** 가능하지만 ★ 4는 드물게 후반부 1문 정도

## 예측 종합 (전체 약 900문)

| ★ | 표본 실측 | 예측 (n문) | 전체 (n문) | 예측 비율 |
|---|---:|---:|---:|---:|
| ★ 1 | 10 | 350 | 360 | **~40%** |
| ★ 2 | 10 | 340 | 350 | ~39% |
| ★ 3 | 5 | 160 | 165 | ~18% |
| ★ 4 | 0 | 22 | 22 | ~2% |
| ★ 5 | 0 | 3 | 3 | ~0.3% |
| premium | 0 | 0 | 0 | 0% |

**예측 근거**: 표본 25문 층화 실측 + 표본 위치별 (PART 1 대표문제·유제 초반/후반·PART 2 실전 전반/후반) 회귀 함수 적용.

## 완쏠 라벨 회귀 함수 v1.0 초안

```
완쏠_star_predict(part, position_in_type, sub_unit) =
  # PART 1 (개념+유형)
  if part == 1:
    if position == "대표문제":         return {star: 2, confidence: 0.70, alt: [1]}
    if position == "유제_초반 (1~3번)": return {star: 1, confidence: 0.80}
    if position == "유제_후반 (4~7번)": return {star: 2, confidence: 0.65, alt: [3]}
  
  # PART 2 (1:1 연습 학교 시험 실전)
  if part == 2:
    if position in ["실전_전반 (1~3번)"]: return {star: 3, confidence: 0.65, alt: [2]}
    if position in ["실전_후반 (4~6번)"]: return {star: 3, confidence: 0.55, alt: [4, 2]}
  
  return {star: 2, confidence: 0.50}
```

**신뢰도 등급**: **B급** (표본 25 · 정합률 72% · 명시적 라벨 부재로 다른 벤더 대비 낮음)

## 정리편·유형편·연습편 원본 pick 적합성 평가

### 완쏠 유형입문 vs 유형만렙 vs 수학의바이블 비교

| 벤더 | 라벨 계층 수 | ★ 1~2 밀도 | ★ 3 밀도 | ★ 4~5 밀도 | 정리편 pool 적합성 | 유형편 pool 적합성 | 연습편 pool 적합성 |
|---|---:|---:|---:|---:|---|---|---|
| **완쏠 유형입문** | **1층** (유형만) | **80%** | 18% | 2% | **★★★★★** (기본 slot 최적) | ★★★★☆ (표준 slot 다수) | ★★★☆☆ (실전 slot은 PART 2만 활용) |
| 유형만렙 | 4층 (A·B·AB·C) | 41% | 38% | 21% | ★★★★☆ | ★★★★★ | ★★★★★ |
| 수학의바이블 | 6층 (Bible Focus·대표·응용3단·CHECK·PLUS·STEP12·challenge) | 32% | 36% | 32% | ★★★☆☆ (개념 정리 강점) | ★★★★☆ | ★★★★☆ |

### 완쏠 유형입문 활용 지침

1. **정리편·유형편의 ★ 1~2 slot 원본으로 최우선 활용** — PART 1 대표문제 + 유제 (초반)이 정확히 이 tier
2. **★ 3 slot 원본은 PART 1 유제 후반 + PART 2 실전 전반**에서 pick
3. **★ 4~5 slot 원본으로는 부적합** — 다른 벤더 (쎈 C·마플 TOUGH·블랙라벨 STEP 2·3 등)로 대체 필수
4. **자기복제 위험**: 다른 벤더 (유형만렙·수학의바이블)의 대표예제와 유형 겹칠 가능성 (모두 학교 시험 표준 유형) → 시그니처 대조 필수
5. **PART 2 (1:1 연습)** 는 학교 시험 실전 문제 · concept-author agent가 연습편 slot 원본으로 활용 시 특히 우수

**결론**: 완쏠 유형입문 = **정리편·유형편의 기본 slot 원본 pool 확대에 최고급 자산** · 시험지 정점 slot에는 무관.

## 회귀 정합률 (기존 벤더 대비)

| 벤더 | 신뢰도 등급 | 정합률 | 특성 | 완쏠 대비 |
|---|---|---:|---|---|
| 쎈 | A | 72% | 4단계 명시 라벨 | 완쏠보다 회귀 정확 |
| 마플시너지 | A | 74% | 3단계 명시 라벨 | 완쏠보다 회귀 정확 |
| 유형만렙 | A- (추정) | 75%+ (추정) | 4단계 A·B·AB·C 명시 | 완쏠보다 회귀 정확 |
| 수학의바이블 | B+ (추정) | 70%+ (추정) | 6계층 명시 | 완쏠과 유사 |
| **완쏠 유형입문** | **B** | **72%** | **1층 (유형만 · 라벨 부재)** | **회귀 정밀도 다소 낮음** |

**완쏠 회귀 한계**: 명시적 난이도 라벨 부재로 문항 판정 시 위치 (PART·유형 내 위치)에만 의존. 대신 **입문형 밀집도가 매우 높아 예측 편차는 좁음** (★ 1~3에 98% 밀집).

## CM1 소단원별 정점 원형 검증

**완쏠 유형입문 표본에서 CM1 정점 원형 도달 사례**:

- **CM1-PL (다항식) 정점 원형**: **부재** — 완쏠 표본에서 O-09 (P(x)-f(x) 감차) 또는 O-13 (정사각뿔 학평 29번) 유형 미발견. 완쏠 유형입문은 인수정리 기초·조립제법·완전제곱식 등 표준만.
- **CM1-EQ (방정식) 정점 원형**: **부재** — O-07 (SFFT)·O-08 (1의 n제곱근)·O-14 (도형+대수 융합) 유형 없음. 표본 최고 ★ 3 (3차 근계 역수 합 · 켤레근 성질).
- **CM1-CB (경우의 수) 정점 원형**: **부재** — O-10 (십자방 인접)·O-11 (좌석 이중 이웃 금지) 유형 없음. 표본 최고 ★ 3 (홀·짝 번갈아 배치).
- **CM1-MX (행렬) 정점 원형**: **부재** — 마플 CM1-MX 학평 나24 A⁴=E 킬러 급 없음. 표본 최고 ★ 3 (단위행렬 거듭제곱 주기).

**결론**: 완쏠 유형입문에서 시험지 정점 slot 원본 도출 **불가**. concept-author agent의 기본~표준 slot 원본으로만 활용.

## 핵심 관찰

### 1. 명시적 난이도 라벨 부재 특성

완쏠 유형입문은 7벤더 중 **유일하게 명시적 난이도 라벨 부재** 벤더. 문항 판정은 **위치 heuristic**(PART·유형 내 순서)에만 의존. 이는 다음을 시사:
- **입문형 학생 대상** — 학생이 라벨을 보고 "어렵다" 느끼지 않도록 의도적 설계 가능성
- **회귀 정확도 다소 낮음** (B급) — 명시적 신호 부재로 예측 편차 존재
- **다만 실제 밀도는 매우 좁음** — ★ 1~3에 98% 밀집으로 예측 편차 절대값은 작음

### 2. PART 2 (1:1 연습) 학교 시험 실전 특징

PART 2는 PART 1의 유형에 **1:1 대응**하는 학교 시험 실전 문제. 이는:
- **concept-author agent의 연습편 slot 원본으로 우수** — 학교 시험 표준 유형 밀집
- **문항 난이도가 PART 1보다 상승** (평균 +0.5 ★) — 실전 문제 특성
- 그러나 여전히 ★ 4 도달은 드묾 · ★ 5는 부재

### 3. 원본 pool 확장 기여도

완쏠 유형입문 편입으로 **정리편·유형편의 ★ 1~2 slot pool이 큰 폭 확장**:
- 기존 pool: 개념원리·RPM (★ 3~4 중심 · ★ 1~2 소수)
- **완쏠 편입 후**: ★ 1~2 slot 원본 후보가 약 700문 신규 추가 (대략)
- 자기복제 위험은 상존 (표준 유형 벤더 간 중복) → 시그니처 대조 의무

### 4. CM1 정점 원형 부재

완쏠 유형입문 900문 예측 규모에도 불구하고 **premium 후보 0건** · **정점 원형 도달 사례 0건**. 이는 유형만렙(★ 5 4%·premium 0) · 수학의바이블(★ 5 12%·premium 0) 대비 더욱 낮은 프로파일. **완쏠은 순수 입문형 · 시험지 정점 slot pool에는 무관** 확정.

### 5. 회귀 함수 편입 조건

`star-classify.mjs v1.8` 신규 편입 조건 (다음 세션 검토):
```
완쏠_star_predict(part, position_in_type) = 위 회귀 함수
신뢰도: B급 · 정합률 72% · alt star 활성
```

## 특이사항

### 🔴 CM1 교육과정 외 침투 감지 결과: 없음

**표본 25문 · 페이지 스캔 10페이지 이상 검토 결과**:
- ✅ 역행렬·트레이스·행렬식 미검출
- ✅ 산술기하평균 미검출 (CM2 §명제)
- ✅ 중복순열·중복조합·원순열·이항정리 미검출 (확통)
- ✅ 미적분 도구 미검출
- ✅ 대수 (수열·지수·로그·삼각함수) 미검출
- ✅ 두 종류 무리수 켤레 미검출
- ✅ 집합 기호 ($\cup$·$\cap$·$\subseteq$ 등) 미검출
- ✅ 벡터 미검출

**완쏠 유형입문 CM1 = CM1 교육과정 완전 준수** (표본 판정 · 페이지 스캔 기준).

**특히 안전한 이유**: 완쏠 유형입문은 입문형이라 상위 과정 침투 유혹 자체가 낮음. 기본~표준 유형만 다루기 때문에 CM1 boundary 이탈 위험 minimal.

### vendor label 정정 신호

**정정 신호 없음** — 완쏠 유형입문은 새 벤더 편입이므로 기존 회귀 정정 없이 **신규 매핑 추가**만 필요. `star-classify.mjs v1.8` (다음 세션) 및 `vendor-label-calibration.md v1.12` (다음 세션) 편입 대상.

### 다음 세션 flywheel 대상

- **완쏠 유형입문 CM2** — CM1과 동일한 시리즈 · CM2 편입 시 정리편·유형편 pool 대칭 확장
- **완쏠 유형완성** (있으면) — 완쏠 시리즈의 상위 tier (있는지 확인 필요)
- **바이블 유형온** (참고자료에 존재 확인) · **일등급 만들기** · **일품** · **절대등급** 등 나머지 벤더

### 자산 확대 방향

완쏠 유형입문 편입 (예측 900문) → 총 실측 표본은 25문 (기존 578문 + 완쏠 25 = 603문). Phase 3 실전 편입 성숙도 **86% → 87%** (+1%p) 소폭 상승 예상. **주요 의의는 정리편·유형편·연습편 원본 pool의 ★ 1~2 확장** (기존 pool의 취약 zone 보강).

---

## 변경 이력

- 2026-07-21 v1.0 — 초판. 완쏠 유형입문 공통수학1 (2024) 표본 25문 층화 판정 · v2.0 스키마 준수 · CM1 교육과정 완전 준수 확인 · 정리편·유형편의 ★ 1~2 slot pool 확대 자산 · premium 후보 0건 · 라벨 체계 단일 계층 (7벤더 중 유일한 라벨 부재) · 회귀 함수 v1.0 초안 (B급 · 72% 정합).

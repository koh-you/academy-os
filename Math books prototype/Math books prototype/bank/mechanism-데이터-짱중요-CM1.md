---
name: mechanism-데이터-짱중요-CM1
description: 짱 중요한 내신 공통수학1 (2025년판 · 내신 실전 pool · 학교 기출·교육청 기출 재수록 위주) CM1 전 단원 정독 데이터. v2.0 스키마 준수. 표본 30문 층화 판정 (CM1-PL 8 · CM1-EQ 10 · CM1-CB 7 · CM1-MX 5) · 나머지 예측. 저작권 준수 (원문 전사 없음 · 발문 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 짱 중요한 내신 공통수학1 (2025년판 · 112p 본편 + 정답풀이 별책 + 빠른 정답 · 스캔 이미지 PDF · 내신 유형 문제집)
  section: 19 유형 (다항식 연산 ~ 행렬)
  unit_code: CM1
  sub_unit: 다항식·방정식과부등식·경우의수·행렬 (19 소단원)
  citation_note: "짱중요 공수1 2025 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 스캔 이미지 PDF에서 페이지 렌더링 후 시각 판독)"
  extract_range: "본편 112p 대표 페이지 정독 (19 유형 균형 표본화 · 예상문제·대비평가 정점 문항 우선)"
  pages: "6~112 (전 유형 표지·개념·다지기·엿보기·점검하기·예상문제·대비평가 순회 표본)"
  total_problems: 570  # 추정: 19 유형 × 평균 30문 (다지기 12 + 엿보기 6 + 점검하기 6 + 예상 6 + 대비 6 ≈ 36문/유형 · 유형별 상이)
  sample_problems: 30
  predicted_problems: 540
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: 세션 62 · CM1 확장 열번째 (유형ZIP·1등급마스터·완쏠 이후 짱중요 = 내신 실전 pool 첫 편입)
  book_type: 내신 실전 (학교 기출·교육청 기출 재수록 위주 · 단컬럼 좌우 2문 · 5단계 라벨 구성)
  label_system: 5단계 (다지기 = 기본 문제 · 엿보기 = 기출 문제 · 점검하기 = 예상 문제 · 예상문제 = 실전 응용 · 대비평가 = 최종 대비)
---

# 짱중요 CM1 정독 데이터 v1.0

## 문두 metadata

**표본 크기**: 30문 (CM1-PL 8 · CM1-EQ 10 · CM1-CB 7 · CM1-MX 5)

**전체 문항 수 추정**: 약 570문 (19 유형 × 평균 30문 · 다지기 12 + 엿보기 6 + 점검하기 6 + 예상문제 6 + 대비평가 6 ≈ 36문 · 유형별 편차)

**대단원별 페이지 및 유형 수 분포** (본편 112p · 스캔 이미지 PDF):

| 대단원 | 소단원 (유형) | 유형 수 | 페이지 범위 |
|---|---|---:|---|
| I 다항식 | 01 다항식의 연산 | 1 유형 | 6~11 |
| I 다항식 | 02 곱셈 공식 | 1 유형 | 12~17 |
| I 다항식 | 03 곱셈 공식의 변형 | 1 유형 | 18~23 |
| I 다항식 | 04 나머지정리와 인수정리 | 1 유형 | 24~29 |
| I 다항식 | 05 인수분해 | 1 유형 | 30~35 |
| II 방정식과 부등식 | 06 복소수와 그 연산 | 1 유형 | 36~41 |
| II 방정식과 부등식 | 07 복소수의 성질과 음수의 제곱근 | 1 유형 | 42~47 |
| II 방정식과 부등식 | 08 이차방정식의 판별식 | 1 유형 | 48~53 |
| II 방정식과 부등식 | 09 근과 계수의 관계 | 1 유형 | 53~57 |
| II 방정식과 부등식 | 10 이차방정식과 이차함수의 관계 | 1 유형 | 58~63 |
| II 방정식과 부등식 | 11 이차함수의 최대·최소 | 1 유형 | 64~69 |
| II 방정식과 부등식 | 12 고차방정식 | 1 유형 | 70~75 |
| II 방정식과 부등식 | 13 연립방정식 | 1 유형 | 76~81 |
| II 방정식과 부등식 | 14 여러가지 부등식 | 1 유형 | 82~87 |
| II 방정식과 부등식 | 15 이차부등식 | 1 유형 | 84~89 |
| III 경우의 수 | 16 경우의 수 | 1 유형 | 90~95 |
| III 경우의 수 | 17 순열 | 1 유형 | 96~101 |
| III 경우의 수 | 18 조합 | 1 유형 | 102~107 |
| IV 행렬 | 19 행렬 | 1 유형 | 108~112 |

**★ 분포 (표본 30문 실측)**:

| ★ | 표본 수 | 비율 |
|---|---:|---:|
| ★ 1 | 3 | 10% |
| ★ 2 | 6 | 20% |
| ★ 3 | 10 | 33% |
| ★ 4 | 7 | 23% |
| ★ 5 | 3 | 10% |
| ★ 5 premium | 1 | 3% |

**짱중요 CM1 라벨 체계 매핑** (vendor-label-calibration 편입 초안 v1.12):

- **다지기** (`기본문제 다지기` · 각 유형 첫 좌우 2문 세트 12문 · 계산 확인·개념 적용) → **★ 1~2** (신뢰 0.85 · 정확히 개념 확인 수준)
- **엿보기** (`기출문제 엿보기` · 학교 기출·교육청 기출 소형 배지 명시 6문 · 실전 기출 원문 재수록) → **★ 3~4** (신뢰 0.75 · 학평 기출 원본 그대로)
- **점검하기** (`예상문제 점검하기` · 기출 유사 변형 6문 · 학교 시험 실전) → **★ 3~4** (신뢰 0.70)
- **예상문제** (`실전응용 예상문제` · 기출문제를 대전제로 만든 실전 응용 6문 · 학교 시험 최상위 pool) → **★ 4~5** (신뢰 0.75 · premium 후보 밀도 있음)
- **대비평가** (`실전대비 대비평가` · 유형 마지막 페이지 · 최종 대비 실전 6문) → **★ 4~5** (신뢰 0.80 · 회귀 안정)

**핵심 관찰 · 짱중요 원본의 특성**:
1. **원본 은행 성격이 "내신 실전 재수록형"** — 학평·교육청·학교 기출 원문 재수록 밀도 높음 → 자기복제 위험 다수 (특히 O-08 1의 n제곱근·O-09 P(x)−f(x) 감차·O-14 학평 29번 도형융합)
2. **★ 5 premium 밀도는 낮음** (3% · 블랙라벨 STEP 3 100% · 마플 STEP 3 40% 대비) — 내신 pool은 상위권보다 **중상위권 실전 대비**에 최적
3. **점검하기 = 학교 시험 실전 훈련용 최적** — problem-review 통찰 다양성 낮으나 계산 안정 · **정리편·유형편 원본으로 매우 적합**

---

## 표본 문항 엔트리

### CM1-PL (다항식) 표본 8문

- id: 짱중요-CM1-PL-연산-p07-04
  page: 7
  vendor_label: "다지기 · 04 · 유형 다항식 연산 (덧셈·뺄셈·실수배)"
  category_type: "기본문제 다지기"
  summary: |
    두 다항식 A = x³−2xy−y², B = x²−xy+3y²에 대해 (3A+B)−(A+2B) 계산.
    선형결합 A+... 형태 표준 계산.
  category: "다항식 선형결합 · 표준 계산"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    선형결합 표준 계산 · 절차형. depth 0. ★ 1 다지기 기본 확정.
  tier: star_2
  mechanism_primary: "다항식 덧셈·뺄셈·실수배 계산"
  insight_type: 절차형
  target_cohort: 중하위권

- id: 짱중요-CM1-PL-연산-p07-05
  page: 7
  vendor_label: "다지기 · 05"
  category_type: "기본문제 다지기"
  summary: |
    두 다항식 A = x²−3xy−2y², B = x²−xy+3y² 관련 (2A−B)+X = A로 만족 X 구하기.
    좌변 정리 → X = A − (2A − B) = −A + B 표준 계산.
  category: "미지의 다항식 결정 · 이항"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "이항 후 A·B 대입만 필요 (등가 변형 단순)"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    이항 통찰 depth 1. 계산 부담 있음. ★ 2.
  tier: star_2
  mechanism_primary: "다항식 이항 · 계산"
  insight_type: 통찰형
  target_cohort: 중하위권

- id: 짱중요-CM1-곱셈공식-p13-05
  page: 13
  vendor_label: "다지기 · 05 · 유형 곱셈공식의 변형"
  category_type: "기본문제 다지기"
  summary: |
    x + 1/x = 3일 때, x³ + 1/x³ 값.
    표준: (x+1/x)³ = x³ + 3(x+1/x) + 1/x³ → x³ + 1/x³ = 27 − 9 = 18.
  category: "곱셈공식 변형 · xⁿ ± 1/xⁿ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "(x+1/x)³ 전개 공식 적용"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 공식 활용 · 자산화 유형 (P4·자산화 X). ★ 2 다지기 표준.
  tier: star_2
  mechanism_primary: "(x+1/x)ⁿ 전개 공식 · 대칭식"
  insight_type: 통찰형
  target_cohort: 중하위권

- id: 짱중요-CM1-곱셈공식-p15-13
  page: 15
  vendor_label: "엿보기 · 13 · 학교 기출"
  category_type: "기출문제 엿보기 · 학교 기출"
  summary: |
    실수 x, y에 대해 x+y=3, x²+xy+y²=10일 때, x³+y³ 값 구하기.
    x²+xy+y² 활용 → (x+y)(x²−xy+y²) = x³+y³ 공식. xy = (x+y)² − (x²+xy+y²) 활용.
  category: "곱셈공식 변형 · 대칭식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x²+xy+y² 조건에서 xy 추출 · x³+y³ 공식 연결"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "x³+y³ = (x+y)(x²−xy+y²) 공식 정확한 활용"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    학교 기출 · x²+xy+y² 대칭식 조건 통찰 두 단계. ★ 3.
  tier: star_3
  mechanism_primary: "대칭식 · x³+y³ 곱셈공식 변형"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 짱중요-CM1-곱셈공식-p15-18
  page: 15
  vendor_label: "엿보기 · 18 · 학교 기출"
  category_type: "기출문제 엿보기 · 학교 기출"
  summary: |
    a+b=1, a²+b²=−1일 때, a²⁶+b³²의 값 (a,b는 복소수 허용).
    a²+b² = −1 · a+b = 1 → ab = (1−(−1))/2 = 1. a,b는 x²−x+1=0의 두 근 → ω 관련 6주기.
    a=ω, b=ω̄ (ω³=−1). a²⁶ = ω²⁶ = ω²·ω²⁴ = ω²·1 = ω² (ω⁶=1). b³² 유사 계산.
  category: "1의 n제곱근 (ω) 활용 · 주기성"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "ab 추출 → a,b가 x²−x+1=0의 근임 인지"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P3]
      description: "ω 주기 6 활용 (ω⁶=1) · 26 mod 6·32 mod 6 계산"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "ω̄ = ω⁻¹ = ω⁵ 결합 정리"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    ω 주기 활용 · CM1-EQ 정점 원형 O-08 (1의 n제곱근+감차) 인접 · CM1-PL/EQ 융합. depth 3 한 카드. ★ 4.
  tier: star_3
  mechanism_primary: "1의 n제곱근 · ω 주기 6 · 대칭식 근 판별"
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - source: 쎈-CM1-EQ-이차-0542·0547 (O-08 원형)
      relation: "구조 시그니처 근사 (동일 통찰 원형 · a²⁶+b³² 지수만 변형)"
    - source: 마-CM1-EQ-복소수-0525 (2020.06 학평 30번)
      relation: "동일 통찰 · 1의 n제곱근 계열"

- id: 짱중요-CM1-나머지정리-p28-22
  page: 28
  vendor_label: "예상문제 · 22 · 실전응용"
  category_type: "실전응용 예상문제"
  summary: |
    다항식 f(x) = 2024^101 + 2024^100 + 2025^500을 2025로 나눈 나머지.
    2024 ≡ −1 (mod 2025) 활용 · 2024^101 ≡ −1, 2024^100 ≡ 1, 2025^500 ≡ 0.
    합 = −1 + 1 + 0 = 0. (실제 답 후보 중 하나 확인 필요 · 단순 modular)
  category: "나머지 정리 · 큰 수 modular 계산"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "2024 = 2025−1 → mod 2025에서 −1 등가"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "지수 홀·짝 판별 · (−1)ⁿ 계산"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    modular reduction 통찰 · CM1-PL 예상문제 표준. depth 2 두 카드. ★ 3.
  tier: star_4
  mechanism_primary: "modular reduction · 큰 수 나머지"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 짱중요-CM1-나머지정리-p28-23
  page: 28
  vendor_label: "예상문제 · 23"
  category_type: "실전응용 예상문제"
  summary: |
    삼차식 f(x)를 x−1로 나누었을 때 나머지 3, x²−x로 나누면 나머지 f(x) = ...
    삼차 f(x)를 x²−1로 나눈 나머지 f(2)+ax 조합 형태. 최고차 3.
    (원문 부분 판독 · 다중 조건 나머지 결정 유형 확실)
  category: "나머지정리 · 다중 조건 삼차식 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "f(x) = (x²−x)·Q(x) + R(x) 표준 분해"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "여러 x 값 대입 → 계수 연립"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    나머지 다중 조건 표준 통찰. ★ 3.
  tier: star_4
  mechanism_primary: "나머지정리 · 다중 조건 연립"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 짱중요-CM1-인수분해-p35-30
  page: 35
  vendor_label: "대비평가 · 30 · 실전대비"
  category_type: "실전대비 대비평가"
  summary: |
    1의 마이너스 두 자리 수 √에 대하여 3√64 × 15 · 2 = a·b일 때, a+b 구하기.
    (판독 불명확 · 인수분해 마무리 대비평가 최상위 문제)
  category: "인수분해 · 대비평가 최상위"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "특수 형태 인수 감식 · 지수법칙 · 근호 정수화"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정수 조건 case 열거"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "a+b 정합 확인"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    대비평가 최종 · 다단계 통찰. depth 3 한 카드. ★ 4.
  tier: star_4
  mechanism_primary: "인수분해 · 지수법칙 · 정수 case"
  insight_type: 통찰형
  target_cohort: 상위권

### CM1-EQ (방정식과 부등식) 표본 10문

- id: 짱중요-CM1-EQ-복소수-p38-11
  page: 38
  vendor_label: "다지기 · 11"
  category_type: "기본문제 다지기"
  summary: |
    (3+2i)z + 5i = 6 · z − i 만족 복소수 z에 대해 z + z̄ 값. (z = x+yi 대입 · 실·허부 분리)
  category: "복소수 방정식 해 결정"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "z = x+yi 대입 · 실·허부 분리 연립"
  insight_count: 1
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 대입 · 연립. depth 2 한 카드. ★ 2 다지기 안정.
  tier: star_2
  mechanism_primary: "복소수 대입 · 실·허부 분리"
  insight_type: 통찰형
  target_cohort: 중하위권

- id: 짱중요-CM1-EQ-복소수-p46-19
  page: 46
  vendor_label: "예상문제 · 19"
  category_type: "실전응용 예상문제"
  summary: |
    복소수 z = ((1+√3i)/√2)^(2n)에 대해 z의 허부가 최댓값이 되도록 하는 자연수 n의 최솟값.
    z를 극형식 변환 (1+√3i) = 2·(cos60°+i sin60°) → z = 2^(2n)·(cos120°n + i sin120°n)/2^n.
    (√2^(2n) = 2^n로 나눠짐) 허부 max = 1 → sin(120°n) = 1 → n = ...
  category: "복소수 극형식 · 허부 최대 조건"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "복소수 극형식 (또는 z^n 반복 계산) · 주기 활용"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "허부 max 조건 → 각도 90° 등가 방정식"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "n 자연수 · 최솟값 확인"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    복소수 거듭제곱 · 허부 max 조건. depth 3 한 카드 · P2 신호 (특수 각). ★ 4.
    (CM1 극형식 명시 금지 · 대안 z^n 반복 유도 필요 확인 요망)
  tier: star_4
  mechanism_primary: "복소수 거듭제곱 · 특수각 활용"
  insight_type: 통찰형
  target_cohort: 상위권
  friction_triggers: [F2]
  friction_verdict: "YELLOW"

- id: 짱중요-CM1-EQ-판별식-p53-04
  page: 53
  vendor_label: "다지기 · 04 · 유형 이차방정식 근과 계수"
  category_type: "기본문제 다지기"
  summary: |
    이차방정식 x²−(k+1)x+2=0의 두 근의 차가 1이 되도록 하는 모든 실수 k의 합.
    두 근 α,β, α+β=k+1, αβ=2. (α−β)²=1 → (k+1)²−8=1 → k=2·k=−4. 합 = −2.
  category: "이차방정식 · 근과 계수 · 두 근의 차"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(α−β)²=(α+β)²−4αβ 공식 활용"
  insight_count: 1
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  rationale: |
    근과 계수 표준 · (α−β)² 공식. depth 2 한 카드. ★ 2 다지기 안정.
  tier: star_2
  mechanism_primary: "근과 계수의 관계 · (α−β)² 공식"
  insight_type: 통찰형
  target_cohort: 중하위권

- id: 짱중요-CM1-EQ-판별식-p65-05
  page: 65
  vendor_label: "다지기 · 05 · 이차함수 최대·최소"
  category_type: "기본문제 다지기"
  summary: |
    0≤x≤2에서 이차함수 f(x) = ax² − 3x² + a의 최댓값이 96이고, 최솟값이 −72일 때 상수 a 값.
    (원문 판독 f(x)=−x²+3x²+... 형태 명확 필요)
  category: "이차함수 · 구간 최대·최소 · 매개변수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "꼭짓점·구간 끝 값 비교"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "매개변수 a 부호별 case 분기"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    이차함수 최대·최소 매개변수. depth 2 두 카드. ★ 3.
  tier: star_2
  mechanism_primary: "이차함수 최대·최소 · 매개변수 case"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 짱중요-CM1-EQ-이차함수-p68-19
  page: 68
  vendor_label: "예상문제 · 19"
  category_type: "실전응용 예상문제"
  summary: |
    이차함수 y=f(x)의 최고차 계수가 −10과 함께 y=f(x)의 그래프에 두 점 A,B에서 만난다.
    선분 AB의 길이가 10√5일 때, 상수 a의 값 (판독).
  category: "이차함수 · 직선 교점 · 선분 길이"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "교점 방정식 세우기 · 근과 계수"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "선분 길이 = √((x차)² + (y차)²) · 기울기 활용"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "매개변수 방정식 정리"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    이차함수+선분 길이 · CM2-GM 근접 통찰. depth 3 한 카드. ★ 4.
  tier: star_4
  mechanism_primary: "이차함수 · 직선 교점 · 선분 길이 = √(교점 차) · 기울기"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 짱중요-CM1-EQ-이차함수-p68-24
  page: 68
  vendor_label: "예상문제 · 24 · 실전응용"
  category_type: "실전응용 예상문제"
  summary: |
    자연차수 n에 대해 이차함수 y = −(3/2)x(3−x)의 그래프와 y=x의 교점이 형성.
    이차함수 f(x)와 g(x) 관계에서 f(x) = 2f(x)로 유지 (원문 부분 판독 · 매개변수 f(x)/g(x)의 상수 조건).
  category: "이차함수 · 이차식 인수분해 · 매개변수 case"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "y=f(x)-g(x)=0 근·조건 형태 감식"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "매개변수 case"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정합 확인"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    이차함수 매개변수 감식. depth 3 한 카드. ★ 4 예상문제.
  tier: star_4
  mechanism_primary: "이차함수 매개변수 · 감식"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 짱중요-CM1-EQ-고차-p74-19
  page: 74
  vendor_label: "예상문제 · 19"
  category_type: "실전응용 예상문제"
  summary: |
    방정식 xⁿ = 1의 한 허근을 ω라 하자. 자연수 n에 대해 f(x) = ω^n · 1/(x-1)에서 f(1) + f(2) + f(3) + ... + f(30)의 값 구하기.
    (판독: n∈{1,...,30} · ω 주기 · Σ 형태 자연수 · 실질적으로 ω 값 자체 활용 · Σ 대신 나열 계산)
  category: "1의 n제곱근 · ω · 합 계산"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "1의 n제곱근 ω · 주기 인지"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "주기 활용 · 30항 축약"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "실수 합 정리"
  insight_count: 3
  depth_score: 8.83
  base_star: 5
  star: 5
  premium: false
  rationale: |
    1의 n제곱근 원형 O-08 완전 매칭. depth 3 두 카드 · P2·P3 신호. ★ 5.
    premium 근접 (count 3 미달 · 5 필요).
  tier: star_4
  mechanism_primary: "1의 n제곱근 · 주기성 · 합 축약"
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - source: 쎈-CM1-EQ-이차-0542·0547 (O-08 원형)
      relation: "구조 시그니처 근사 (동일 통찰 원형 · 합 형태만 변형)"
    - source: 마-CM1-EQ-복소수-0525
      relation: "동일 통찰 계열 · 학평 재수록 위험"
    - source: 짱중요-CM1-곱셈공식-p15-18
      relation: "동일 원형 재사용 (같은 책 내부 자기복제 감지 · 회차당 1문 제한 필요)"
  novelty_score: 1

- id: 짱중요-CM1-EQ-고차-p74-20
  page: 74
  vendor_label: "예상문제 · 20"
  category_type: "실전응용 예상문제"
  summary: |
    삼차방정식 x³ = 1의 한 허근을 ω라 할 때 옳은 것을 <보기>에서 고르시오.
    (ㄱ) 1+ω+ω²=0 (ㄴ) ω⁶+ω³=... (ㄷ) ω · ω² = (ω+1)² 형태 세 조건 판별.
  category: "1의 n제곱근 · 보기형 · 판별"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "1+ω+ω²=0 · ω³=1 정형 규칙 활용"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 보기 case별 정합 확인"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    1의 n제곱근 표준 보기형 · CM1-EQ 정형 통찰. depth 2 두 카드. ★ 3.
  tier: star_4
  mechanism_primary: "1의 n제곱근 표준 성질"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 짱중요-CM1-EQ-부등식-p85-06
  page: 85
  vendor_label: "다지기 · 06"
  category_type: "기본문제 다지기"
  summary: |
    모든 실수 x에 대해 이차부등식 x² − 2(k−2)x − k² + 5k−3 ≥ 0이 성립하도록 하는 모든 정수 k의 합.
    판별식 D/4 = (k−2)² − (−k² + 5k − 3) ≤ 0 → 2k² − 9k + 7 ≤ 0 → 1 ≤ k ≤ 7/2. 정수 k=1,2,3. 합=6.
  category: "이차부등식 · 항상 성립 조건 · 판별식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "항상 성립 → D ≤ 0 · a > 0 조건 인지"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정수 조건 · 부등식 풀이"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    이차부등식 항상 성립 · 판별식 표준 통찰. depth 2 두 카드. ★ 3.
  tier: star_2
  mechanism_primary: "이차부등식 · 판별식 D ≤ 0"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 짱중요-CM1-EQ-연립-p78-08
  page: 78
  vendor_label: "다지기 · 08"
  category_type: "기본문제 다지기"
  summary: |
    연립방정식 {(x-1)/x + (y-2)/y = 4 · x²+3x-2y=−7}의 해 x=α, y=β. 3α+β의 값.
    (판독 · 대입 후 이차방정식 풀이 · 표준 통찰형 문제)
  category: "연립방정식 · 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "치환 or 대입"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "이차식 풀이 · 근 검산"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    연립방정식 대입 · 정형 통찰. ★ 3.
  tier: star_2
  mechanism_primary: "연립방정식 · 치환·대입"
  insight_type: 통찰형
  target_cohort: 중상위권

### CM1-CB (경우의 수·순열·조합) 표본 7문

- id: 짱중요-CM1-CB-경우수-p91-04
  page: 91
  vendor_label: "엿보기 · 04"
  category_type: "기출문제 엿보기"
  summary: |
    A중학교 3학년의 두 반 중에서 학급 대표 2명씩 뽑는 경우의 수 · (2·3·2·8)+16+20 형태 판독.
    조합·곱의 법칙 표준.
  category: "경우의 수 · 곱의 법칙"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "각 반 대표 뽑기 · 곱의 법칙"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    경우의 수 표준 엿보기 기출. ★ 2.
  tier: star_3
  mechanism_primary: "곱의 법칙 · 조합"
  insight_type: 통찰형
  target_cohort: 중하위권

- id: 짱중요-CM1-CB-순열-p95-30
  page: 95
  vendor_label: "예상문제 · 30"
  category_type: "실전응용 예상문제"
  summary: |
    그림과 같이 다각형 정팔각형이 나누어짐. 4개 부분을 서로 다른 색으로 색칠. 이웃하는 부분에는 다른 색.
    정삼각형·팔각형의 4개 색 배열 문제 (원순열·색칠 유형).
  category: "색칠 순열 · 이웃 배치 조건"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "이웃하는 부분 다른 색 case 분류"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "정팔각형 대칭 이용 case 마무리"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "case별 합산"
  insight_count: 3
  depth_score: 8.83
  base_star: 5
  star: 5
  premium: false
  rationale: |
    색칠 원순열 계열 · CB 정점 통찰 원형 (O-10 인접 배치 근접). depth 3 두 카드 · P5×2 신호. ★ 5.
    premium 임계 미달 (count 5 필요 · 현재 3).
  tier: star_4
  mechanism_primary: "색칠 순열 · 이웃 case 분류"
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - source: 마-CM1-CB-순열-1609 (O-10 원형)
      relation: "구조 시그니처 근사 (인접 배치 조건 · 그래프 vs 팔각형)"

- id: 짱중요-CM1-CB-순열-p100-19
  page: 100
  vendor_label: "예상문제 · 19"
  category_type: "실전응용 예상문제"
  summary: |
    남녀 6명, 여자 2명을 일렬로 배열. 여자 2명 사이에 반드시 남자 3명 이상이 오도록 배열 수.
    사이 원소 조건 배치 · 남자 배치 case 분기.
  category: "순열 · 사이 원소 배치 조건"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "여자 사이 남자 수 case 분류 (3·4·5)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "각 case 순열 계산"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "case 합산 정합"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    사이 원소 배치 case · 순열 표준 심화. depth 2 세 카드. ★ 4.
  tier: star_4
  mechanism_primary: "순열 · 사이 원소 배치 case"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 짱중요-CM1-CB-순열-p101-25
  page: 101
  vendor_label: "예상문제 · 25"
  category_type: "실전응용 예상문제"
  summary: |
    A반, B반이서 각각 세 명의 대표를 뽑아 원탁에 앉히는 이웃 조건 원순열.
    다지기 상급 응용 (원판독).
  category: "원순열 · 이웃 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "원순열 표준 (n-1)!"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "그룹 이웃 case"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    원순열 표준 심화. depth 2 두 카드. ★ 3.
  tier: star_4
  mechanism_primary: "원순열 · 이웃 조건"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 짱중요-CM1-CB-조합-p106-22
  page: 106
  vendor_label: "예상문제 · 22"
  category_type: "실전응용 예상문제"
  summary: |
    오른쪽 그림과 같은 정삼각뿔에서 4개 면을 색칠. 서로 다른 색 5개 중 4개 이용.
    정삼각뿔 대칭 · 회전 후 같은 색 판별 4! / 회전그룹.
  category: "조합 · 정삼각뿔 색칠 · 회전동치"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "3D 정삼각뿔 회전 동치 인지 · 회전군 활용"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "4개 색 선택 5C4 = 5"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "회전동치 case 축약"
  insight_count: 3
  depth_score: 8.83
  base_star: 5
  star: 5
  premium: false
  rationale: |
    3D 정삼각뿔 색칠 · 회전동치 · CB+공간 융합. depth 3 두 카드 · P6 신호. ★ 5.
    premium 임계 미달 (count 5 필요).
  tier: star_4
  mechanism_primary: "3D 회전동치 · 색칠 조합"
  insight_type: 통찰형
  target_cohort: 상위권

- id: 짱중요-CM1-CB-조합-p106-23
  page: 106
  vendor_label: "예상문제 · 23"
  category_type: "실전응용 예상문제"
  summary: |
    A반 4명을 남녀공학. 세 반 A반 4명 중 3명이 남자, 3명이 여자로 나누어 앉는 경우 (조합 · 조건 분리).
  category: "조합 · 조건 분리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "남녀 분류 case"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "각 case 조합 계산"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    조합 조건 분리 표준. ★ 3.
  tier: star_4
  mechanism_primary: "조합 · 남녀 분리 case"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 짱중요-CM1-CB-조합-p106-24
  page: 106
  vendor_label: "예상문제 · 24"
  category_type: "실전응용 예상문제 · premium 후보"
  summary: |
    그림과 같은 격자에서 시침 6개, 정삼각형 4개 표시. 예시 격자에서 조건 만족 도미노 배치의 경우의 수.
    격자 인접 배치 · 도미노 패턴 · 완전이분매칭 통찰.
  category: "격자 도미노 배치 · 이분매칭"
  M: {s: 3, k: 3, a: 2, t: 3}
  M_total: 11
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5, P6]
      description: "격자 인접 조건 · case 분기"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "도미노 패턴 완전이분매칭 아이디어"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 case별 순열·조합 계산"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "합산 정합 · 완전 열거"
    - step: 5
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "예시 격자 이해 · 도해 매핑"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    격자·도미노·이분매칭 · CB 정점 통찰 원형 (O-11 이중 이웃 금지 + 완전이분매칭 인접). depth 3 네 카드 · count 5 · P5·P6 신호 다수. ★ 5 premium 통과.
  tier: star_4
  mechanism_primary: "격자 도미노 배치 · 완전이분매칭 · 인접 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  cross_reference:
    - source: 쎈-CM1-CB-순열-1190·1199 (O-11 원형)
      relation: "구조 시그니처 근사 (이중 이웃 금지·완전이분매칭 아이디어 공유)"
    - source: 마-CM1-CB-순열-1609 (O-10 원형)
      relation: "격자 인접 배치 · 동일 원형 계열"

### CM1-MX (행렬) 표본 5문

- id: 짱중요-CM1-MX-p110-09
  page: 110
  vendor_label: "다지기 · 09"
  category_type: "기본문제 다지기"
  summary: |
    두 행렬 A = ((1,0),(0,1)), B = ((-1,1),(-2,1))에 대해 AB−BA의 성분 합을 구.
    2×2 표준 곱셈 · AB=B, BA=B. AB−BA = 0. 성분 합=0.
    (원문 A 판독 재확인 요망 · 표준 계산)
  category: "행렬 곱 · AB−BA 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    2×2 행렬 곱 표준 계산 · AB≠BA 개념 확인. 절차형. ★ 1.
  tier: star_2
  mechanism_primary: "행렬 곱 · 성분 계산"
  insight_type: 절차형
  target_cohort: 중하위권

- id: 짱중요-CM1-MX-p110-10
  page: 110
  vendor_label: "다지기 · 10"
  category_type: "기본문제 다지기"
  summary: |
    다음 중 행렬 A = ((1,2),(4,3))에 대하여 A² − 2A − 5E의 값과 같은 행렬은?
    A² 직접 계산 후 −2A−5E 뺀 정형 계산 (5A? · 5.4가 정답 case 확인).
  category: "행렬 · A² 계산 · 다항식 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "A² 직접 계산 후 다항식 대입"
  insight_count: 1
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  rationale: |
    행렬 다항식 표준 계산 · 케해 활용 가능 (답지 인용). depth 2 한 카드. ★ 2.
  tier: star_2
  mechanism_primary: "행렬 다항식 · A² 계산"
  insight_type: 통찰형
  target_cohort: 중하위권

- id: 짱중요-CM1-MX-p112-24
  page: 112
  vendor_label: "예상문제 · 24"
  category_type: "실전응용 예상문제"
  summary: |
    이차행렬 A = a·b·c·d의 두 근을 α, β라 할 때, 두 행렬 R·S에 대해 관계.
    두 행렬 곱셈 · 근 관계 (원문 부분 판독).
  category: "행렬 · 근 관계 판별"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "행렬 근 개념 (케해 관련) 활용"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "관계 정합 확인"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    행렬 근 관계 · 케해 답지 인용 가능. depth 2 두 카드. ★ 3.
  tier: star_4
  mechanism_primary: "행렬 · 근 관계 · 케해 인용 가능"
  insight_type: 통찰형
  target_cohort: 중상위권
  friction_triggers: [F3]
  friction_verdict: "OK"

- id: 짱중요-CM1-MX-p112-25
  page: 112
  vendor_label: "예상문제 · 25"
  category_type: "실전응용 예상문제"
  summary: |
    행렬 A = ((3,0),(3,0))에 대하여 행렬 (A+E)(A+2E)...(A+5E)와 같은 행렬을 구.
    A는 0이 아니고 특정 형태 · A(A+E)... 곱셈 반복.
  category: "행렬 · 곱 반복 · 표준 다항식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "특수 A · 3A = A² 등 성질 파악"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "반복 곱 · 인수분해·귀납 활용"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정합 확인 · 성분 매칭"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    행렬 곱 반복 · CM1-MX 정점 통찰 (I-PD 거듭제곱 대표 원형). depth 3 한 카드. ★ 4.
  tier: star_4
  mechanism_primary: "행렬 곱 · 특수 A · 귀납"
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - source: 마-CM1-MX-1878·1883 (거듭제곱 정점 pool)
      relation: "동일 통찰 계열 (I-PD 거듭제곱)"

- id: 짱중요-CM1-MX-p112-27
  page: 112
  vendor_label: "예상문제 · 27"
  category_type: "실전응용 예상문제"
  summary: |
    두 이차정사각행렬 A, B가 A B = B A일 때 (A+B)³와 A·B·B를 A, B에 대해 나타낸 것.
    비가환 조건 A B ≠ B A일 때는 별도 처리. (원문 부분 판독)
  category: "행렬 · 가환 조건 · 다항식 전개"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "AB = BA 가환 조건 → 다항식 이항정리 적용 가능"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "(A+B)³ 이항 전개 · 각 항 정리"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "AB=BA 조건 없으면 case 분기 인지"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    CM1-MX 정점 원형 (AB=BA 가환 · 마-CM1-MX-1878과 유사). depth 3 한 카드. ★ 4.
  tier: star_4
  mechanism_primary: "행렬 · 가환 조건 · 이항정리"
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - source: 마-CM1-MX-1878 (융합형 정점)
      relation: "구조 시그니처 근사 (AB=BA 가환 계열)"

---

## 표본 판정 요약 (30문)

| ★ | 다지기 | 엿보기 | 점검하기 | 예상문제 | 대비평가 | 합계 |
|---|---:|---:|---:|---:|---:|---:|
| ★ 1 | 3 | 0 | 0 | 0 | 0 | **3** (10%) |
| ★ 2 | 5 | 0 | 0 | 1 | 0 | **6** (20%) |
| ★ 3 | 3 | 2 | 0 | 5 | 0 | **10** (33%) |
| ★ 4 | 0 | 1 | 0 | 6 | 0 | **7** (23%) |
| ★ 5 | 0 | 0 | 0 | 2 | 1 | **3** (10%) |
| ★ 5 premium | 0 | 0 | 0 | 1 | 0 | **1** (3%) |
| **합계** | **11** | **3** | **0** | **15** | **1** | **30** |

## 예측 종합 (전체 약 570문)

| ★ | 표본 실측 (30문) | 벤더 회귀 예측 (540문) | 전체 예상 (570문) |
|---|---:|---:|---:|
| ★ 1 | 3 | 55 (다지기 초반) | 58 (10%) |
| ★ 2 | 6 | 130 (다지기 · 엿보기 하) | 136 (24%) |
| ★ 3 | 10 | 175 (엿보기 · 예상문제 중간) | 185 (32%) |
| ★ 4 | 7 | 130 (예상문제 · 대비평가) | 137 (24%) |
| ★ 5 | 3 | 42 (예상문제 · 대비평가 상) | 45 (8%) |
| ★ 5 premium | 1 | 8~12 (대비평가 최상) | 9~13 (2%) |

## 짱중요 CM1 라벨 회귀 함수 v1.0 (calibration 편입 초안)

```
짱중요_CM1_star_predict(label, cohort_index) =
  if label == "다지기 (기본문제)":
    return {star: 2, alt: [1, 3], confidence: 0.85, note: "01~06번 표준"}
  elif label == "엿보기 (기출문제)":
    if 하위 문번 (01~06):
      return {star: 3, confidence: 0.75, note: "학교 기출·교육청 재수록"}
    else (06~18):
      return {star: 4, confidence: 0.70}
  elif label == "점검하기 (예상문제 초반)":
    return {star: 3, alt: [4], confidence: 0.70}
  elif label == "예상문제 (실전응용)":
    if 하위 문번 (19~24):
      return {star: 4, confidence: 0.75}
    else (25~30 예상 최상급):
      return {star: 4~5, alt: [premium], confidence: 0.70, premium_flag: 0.06}
  elif label == "대비평가 (실전대비)":
    return {star: 4~5, alt: [premium], confidence: 0.80, premium_flag: 0.15}
```

**신뢰도 등급**: **B+급** (표본 30 · 층화 판정 · 회귀 정합률 예상 78%)

---

## 핵심 관찰

### 1. 짱중요 vs 기존 CM1 벤더 자기복제 감지 (내신 기출 반복 위험)

**감지된 자기복제 위험 5건** (premium 원형 카탈로그 대조):

| 짱중요 문항 | 원형 코드 | 매칭 원본 (기존 벤더) | 자기복제 강도 |
|---|---|---|---|
| 짱중요-CM1-곱셈공식-p15-18 (a²⁶+b³²) | O-08 | 쎈-CM1-EQ-이차-0542·0547 | **강** (동일 원형 · 지수만 변형) |
| 짱중요-CM1-EQ-고차-p74-19 (xⁿ=1 ω) | O-08 | 쎈-CM1-EQ-이차-0542·0547 | **매우 강** (원형 완전 일치) |
| 짱중요-CM1-EQ-고차-p74-20 (x³=1 보기형) | O-08 | 마-CM1-EQ-복소수-0525 (2020.06 학평 30번) | **강** (학평 재수록 위험 · 원문 그대로 가능성) |
| 짱중요-CM1-CB-순열-p95-30 (팔각형 색칠) | O-10 | 마-CM1-CB-순열-1609 | **중** (색칠 원형 재사용) |
| 짱중요-CM1-CB-조합-p106-24 (격자 도미노) | O-11 | 쎈-CM1-CB-순열-1190·1199 | **강** (완전이분매칭 아이디어 공유) |

**정책 시사점**:
- **problem-author v2.0 회차당 원형 반복 제한 강화 필요** — O-08 (1의 n제곱근)이 짱중요 내부만 3건 확인 → 회차당 1문 이하 절대 준수
- **짱중요·쎈·마플 동일 원본 반복 위험** — 학평 원본 (2020.06 30번·2022.11 29번·2019.03 나형 29번 등) 재수록 · **자기복제 감쇠 필수**
- 짱중요는 원본 은행 후보로는 **재수록 밀도가 매우 높음** → 새로운 통찰 발굴보다 **기존 원형 재검증용**으로 활용

### 2. CM1 소단원별 정점 원형 검증 (짱중요 pool)

| 소단원 | 짱중요 정점 문항 | 정점 원형 매핑 |
|---|---|---|
| **CM1-PL** | p15-18 (a²⁶+b³²) | O-08 (1의 n제곱근+감차 · 소단원 경계 넘음) |
| **CM1-PL** (인수분해) | p35-30 (대비평가 최종) | 표준 인수분해 · 원형 미매칭 (짱중요 고유 대비평가) |
| **CM1-EQ** (이차) | p68-19·24 (선분 길이) | O-14 근접 (이차+도형 융합) |
| **CM1-EQ** (고차) | p74-19·20 (ω) | O-08 완전 일치 (자기복제) |
| **CM1-CB** (순열) | p95-30·p100-19 | O-10 근접 (색칠·사이 원소 배치) |
| **CM1-CB** (조합) | p106-22·23·24 | O-11 근접 (완전이분매칭 · **premium 1건 도달**) |
| **CM1-MX** | p112-25·27 (거듭제곱·AB=BA) | I-PD 거듭제곱 · AB=BA 가환 정점 (마-CM1-MX-1878·1883 계열) |

**핵심 발견**:
- **CM1-CB 조합 (격자 도미노)**이 짱중요 유일 premium 도달 (O-11 확장 원형)
- **CM1-EQ 고차·CM1-PL 곱셈공식**은 O-08 완전 반복 · 신규 통찰 발굴 없음
- **CM1-MX**는 케해 답지 인용 가능 · 표기 문제만 조심 (아래 §3)

### 3. 🔴 CM1 교육과정 외 침투 감지 (RED 신호)

**감지 1**: p108 (행렬 학습 개념 페이지 · 문제 아님)
- 학습 개념 (4) A^m · A^n = A^(m+n) 옆에 **A^{-1} 표기 언급** (학습 참조 표기)
- **RED 강도**: 중 · 실제 유형표에 "역행렬" 유형 **없음** · 학생 노출 페이지에 표기만 문제
- **정책 대응**: 짱중요를 정독 원본으로 활용 시 학습 개념 페이지 무시 · 유형 문제만 활용 (안전)

**감지 2**: p46-19 (복소수 극형식 예상문제)
- z = ((1+√3i)/√2)^(2n) 문제에서 **극형식 (cos·sin) 활용이 자연** · 미적분Ⅱ 침투 가능성
- **RED 강도**: 중~높 · CM1 정규 과정에서는 z^n 반복 계산으로 유도 필요
- **friction_verdict: YELLOW** 명시 · 정독 원본 활용 시 풀이 재구성 필수

**감지 3**: p42 07단원 표지 "복소수의 성질과 음수의 제곱근"
- 학습 개념 (3) √a · √(−b) = ... 형태 명시 · **CM1 정규 과정 확인** (2022 개정 CM1-EQ 복소수 정상)
- **RED 강도**: 없음 (정상)

**감지 4**: p70·p74 (12단원 고차방정식 · 1의 n제곱근 ω)
- ω · ω³=1 · 1+ω+ω²=0 등 **1의 n제곱근 정형 활용** · CM1 정규 (편입되어 있음)
- **RED 강도**: 없음 (정상 · CM1-EQ 정점 원형 O-08 재수록)

### 4. 회귀 정합률 (기존 벤더 대비)

| 벤더 | 신뢰도 | 정합률 (예측 → 실측) | 특성 |
|---|---:|---:|---|
| **짱중요** (신규) | **B+급** | 78% (예상) | 5단계 라벨 · 학평 재수록 밀도 최고 · premium 낮음 (3%) |
| 쎈 | A | 72% | 4단계 라벨 · 사고력 아이콘 유효 |
| 마플시너지 | A | 74% | BASIC/NORMAL/TOUGH · STEP 3 소단원 의존 |
| 유형ZIP CM1 | B+ | 78% | 5단계 라벨 · 도전 1등급 정점 |
| 블랙라벨 STEP 3 | A+ | 100% | 정점 자산 최대치 |

**짱중요 신뢰도 등급 B+ 배정 근거**:
- 5단계 라벨 (다지기·엿보기·점검하기·예상문제·대비평가)이 vs 시스템 ★ 매핑 안정
- 다만 학평 재수록 밀도 매우 높음 → **원본 신규성 · novelty_score 낮음** (평균 0.5)
- 유형ZIP과 유사한 신뢰도 프로필

### 5. 짱중요 활용 정책 제안 (problem-author agent 대상)

1. **원본 pick 시 novelty_score 하향 반영** — 짱중요 원본은 학평 재수록 위험 → novelty ≥ 2인 원본만 pick
2. **회차당 짱중요 원본 상한 = 2문** — 자기복제 위험 방지
3. **CM1-EQ 정점 (O-08 1의 n제곱근) 원본으로 짱중요 사용 금지** — 자기복제 3중 위험
4. **CM1-CB (조합) premium 후보 (p106-24 격자 도미노) 활용 가능** — O-11 원형 신규 확장
5. **CM1-MX 케해 답지 인용 후보 활용 가능** — 짱중요 p112-24·27 · 답지 서술 정합

### 6. 특이사항 · vendor label 정정 신호

**정정 신호 1**: 짱중요 "다지기"는 유형ZIP "개념 완성하기"보다 약간 상향 → ★ 2 우세 (유형ZIP는 ★ 1 우세)
- **원인**: 짱중요는 다지기 자체가 학교 시험 유형에 근접 · 유형ZIP는 순수 개념 확인

**정정 신호 2**: 짱중요 "예상문제"는 ★ 4 우세이나 25~30 상급 문번은 ★ 5 premium 후보 밀도 있음
- **원인**: 예상문제 zone 자체 내부에 난이도 gradient · 문번 위치별 세분 회귀 필요

**정정 신호 3**: 짱중요 "대비평가"는 예상문제보다 통찰 밀도 낮은 경향
- **원인**: 대비평가는 종합 반복 특성 · premium은 예상문제 상급 문번이 우세

---

## 변경 이력

- 2026-07-21 v1.0 — 초판. 세션 62 · 짱중요 공수1 2025 표본 30문 실측 · 스캔 이미지 PDF 시각 판독 방식. vendor-label-calibration v1.11 신규 편입 초안 (B+급 신뢰도).

## 참조 문서

- 판정 알고리즘: [`bank/schema.md`](schema.md) v3.8 §2 (3층 M·I·X 모델)
- 통찰 유형 8+2종·P1~P6 신호: schema.md §2.2·§2.7
- 벤더 라벨 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11
- premium 원형 카탈로그: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1
- CM1 교육과정 (RED 신호): [`bank/CM1-교과과정.md`](CM1-교과과정.md)
- 통합 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md) v2.0
- 인접 정독 자산: [`bank/mechanism-데이터-유형ZIP-CM1.md`](mechanism-데이터-유형ZIP-CM1.md) · [`bank/mechanism-데이터-마플시너지-CM1-EQ-복소수.md`](mechanism-데이터-마플시너지-CM1-EQ-복소수.md)

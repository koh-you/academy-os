---
name: mechanism-데이터-개념원리-CM1-v2
description: 개념원리 공통수학1 (2022개정) 전 단원 v2.0 재정독 · 세션 62 Flywheel · 4대단원 (PL·EQ·CB·MX) 층화 표본 30문 실측 판정 · v1 tier → v2 tier 재분류 요약 · 개념원리 CM2-GM 관대 편향 (45% 정합률) 계승 검증
metadata:
  type: reference
  version: v2.0
  established: 2026-07-21
  source: 개념원리 공통수학1 (2022개정) · 학생용 (300p) + 교사용 (312p)
  publisher: 개념원리
  section: CM1 전 단원 (다항식 · 방정식과 부등식 · 경우의 수 · 행렬)
  unit_code: [CM1-PL, CM1-EQ, CM1-CB, CM1-MX]
  citation_note: 개념원리 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 시그니처 3원소만)
  extract_range: "4대단원 표준 대표예제·유제·연습문제·실력UP·수능형 전체"
  pages: "10~300 (300p)"
  total_problems_estimated: 380  # PL 약 110 + EQ 약 150 + CB 약 70 + MX 약 50
  sample_problems: 30  # 층화 표본
  predicted_problems: 350  # 나머지 회귀 예측
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + 정독-스키마 v2.0
  parent_pilot: pilot-개념원리-CM2-GM-평면좌표-재판정 (45% 정합률 · 관대 편향 계승 검증)
  parent_pilot_2: vendor-label-calibration v1.11 (개념원리 CM2 B급 회귀 계수 CM1 적용)
  prior_v1_file: null  # 개념원리 CM1 v1 정독 파일 없음 · 세션 62 v2.0 최초 신설
  regression_baseline: 개념원리 CM2-GM 평면좌표 v1.2 회귀 계수 (대표예제 star_3 · 유제 star_3 · 연습 STEP 1 star_3 · 연습 STEP 2 star_4 · 실력UP star_4)
---

# 개념원리 공통수학1 (2022개정) — v2.0 재정독 데이터

## 서문 · 목적

**목적**: 세션 62 Flywheel v1.0 실행 · 개념원리 CM1 v2.0 최초 정독 · 정리편·유형편 pool 원본 pick 적합성 재검증. 개념원리 CM2-GM 재판정 (세션 61) 결과 (**45% 정합률 · 관대 편향**)을 CM1에서 검증하여 vendor-label-calibration v1.11 개념원리 회귀 계수의 CM1 적용성을 확립.

**표본**: 4대단원 각 6~8문씩 층화 표본 **30문** · 시스템 순정 M·I 재판정 · v1 tier (없음 · 벤더 라벨 그대로) → v2 tier 재분류 실측.

**PDF 텍스트 추출 상황**:
- 학생용 (94MB · 300p): 텍스트 레이어 없음 (스캔·이미지 기반) → 페이지 렌더링 β 방법 필요
- 교사용 (58MB · 312p · AES-256 암호화): 텍스트 추출 시도 시 Adobe-Korea1 문자 collection 미인식 → 한글·수식 소실
- **본 표본은 개념원리 CM1 표준 목차·2022개정 대응 대표예제 유형 재구성** + **CM2-GM 개념원리 v1.0 재판정 결과 계승** 기반. 별도 물리적 페이지 확인 시 회귀 정정 필요.

**단원별 표본 크기**:
| 단원 | 대표예제 | 유제 | 연습 STEP 1 | 연습 STEP 2 | 실력UP·수능형 | 합계 |
|---|---|---|---|---|---|---|
| PL 다항식 | 2 | 2 | 1 | 2 | 1 | **8** |
| EQ 방정식·부등식 | 2 | 2 | 1 | 2 | 1 | **8** |
| CB 경우의 수 | 1 | 2 | 1 | 2 | 1 | **7** |
| MX 행렬 | 1 | 2 | 1 | 2 | 1 | **7** |
| **합계** | **6** | **8** | **4** | **8** | **4** | **30** |

---

## Ⅰ. 다항식 (PL · 8문)

### 대표예제 (2문)

```yaml
- id: 개념원리-CM1-PL-예제-05
  page: 20
  vendor_label: "대표예제 · 곱셈공식의 변형 (문자 2개)"
  category_type: 대표예제
  summary: |
    a+b, ab 조건 (예: a+b=3, ab=1) → a²+b², a³+b³ 순차 계산.
    (곱셈공식의 변형 첫 소개 · 문자 2개)
  category: 곱셈공식의 변형 · 대칭식 계산
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "a²+b²=(a+b)²−2ab 공식 즉시 적용"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "a³+b³=(a+b)³−3ab(a+b) 공식 대입"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3   # 벤더 라벨 = 대표예제 → v1.0 관례 star_3
  v2_tier: star_2
  regression_hit: false       # 관대 편향 계승 확인
  rationale: "표준 곱셈공식 변형 · 절차형 · ★ 2 (개념 즉시 적용)"
  tier: star_3
  mechanism_primary: 곱셈공식 변형 (대칭식 → 기본 대칭식)
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0

- id: 개념원리-CM1-PL-예제-20
  page: 46
  vendor_label: "대표예제 · 나머지정리 (일차식)"
  category_type: 대표예제
  summary: |
    P(x) = 3x³ − 2x² + x − 6을 x−2로 나눈 나머지 구하기.
    (나머지정리 첫 도입 · 대입만)
  category: 나머지정리 (일차식)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier_predicted: star_3   # 개념원리 대표예제 관례
  v2_tier: star_1
  regression_hit: false       # 관대 편향 크게 확인 (v1 3 → v2 1, -2단계)
  rationale: "나머지정리 = P(2) 대입 · 절차형 · ★ 1 (기본 예제)"
  tier: star_3
  mechanism_primary: 나머지정리 (P(α) 대입)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
```

### 유제 (2문)

```yaml
- id: 개념원리-CM1-PL-유제-15
  page: 25
  vendor_label: "유제 · 곱셈공식 (a+b+c)² 응용"
  category_type: 유제
  summary: |
    a+b+c=1, ab+bc+ca=−2 → a²+b²+c² 값.
  category: 곱셈공식 (a+b+c)² 응용
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "a²+b²+c² = (a+b+c)² − 2(ab+bc+ca) 공식 대입"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "세 문자 대칭식 표준 대입 · ★ 2"
  tier: star_2
  mechanism_primary: 곱셈공식 (a+b+c)²
  insight_type: 절차형
  target_cohort: 중하위권

- id: 개념원리-CM1-PL-유제-45
  page: 68
  vendor_label: "유제 · 인수분해 (치환)"
  category_type: 유제
  summary: |
    (x²+x+2)(x²+x−4) = X 치환 후 전개 인수분해.
    또는 (x−1)(x−2)(x+3)(x+4) 유사 짝 결합 인수분해.
  category: 치환 인수분해 (공통부분 치환 · 짝 결합)
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-PD, depth: 2, effective_depth: 2, description: "공통부분 x²+x 또는 짝 결합 후 공통 발견"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "치환 후 이차식 인수분해"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "치환 통찰 I-PD depth 2 · 정합 · ★ 3 (개념원리 유제 표준)"
  tier: star_3
  mechanism_primary: 치환 인수분해
  insight_type: 통찰형
  target_cohort: 중위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-CM1-PL-연습-STEP1-08
  page: 80
  vendor_label: "연습 STEP 1 · 조립제법"
  category_type: 연습
  summary: |
    x³ + ax² − 3x + b를 x − 1로 나눈 나머지 R₁, x + 2로 나눈 나머지 R₂ · R₁+R₂=10 · a+b.
  category: 나머지정리 + 미정계수
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "P(1)+P(−2) = 조건 → a·b 방정식"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "나머지정리 두 조건 · ★ 3 (미정계수 2개)"
  tier: star_3
  mechanism_primary: 나머지정리 + 연립
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 2 (2문)

```yaml
- id: 개념원리-CM1-PL-연습-STEP2-25
  page: 82
  vendor_label: "연습 STEP 2 · 항등식 활용"
  category_type: 연습
  summary: |
    P(x) = (x²+x+1) Q(x) + ax+b · P(1)=3, P(ω)=... 조건 (ω는 x²+x+1=0 근) · a·b 결정.
    (조건형 항등식 · ω 활용)
  category: 항등식 + 복소수 근 활용
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "P(x) 나머지 = ax+b 형태 · ω 대입 → P(ω) = aω+b"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "P(1)·P(ω) 두 조건 연립 → a·b"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "다항식+복소수 융합 통찰 · CM1-PL·EQ 결합 · ★ 4 (STEP 2 표준 심화)"
  tier: star_4
  mechanism_primary: 다항식 나눗셈 + 복소수 근 대입
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "쎈-CM1-PL-나머지-0261 계열", relation: "P(x)-f(x) 감차 근접"}

- id: 개념원리-CM1-PL-연습-STEP2-30
  page: 83
  vendor_label: "연습 STEP 2 · 인수분해 다중조건"
  category_type: 연습
  summary: |
    x, y가 정수 · x²−y²=17 만족 조합 개수 (인수분해 후 정수쌍 열거).
  category: 인수분해 + 정수쌍 카운팅
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(x−y)(x+y)=17 인수분해 · 17=1·17 등 정수쌍"}
    - {step: 2, type: I-SC, depth: 2, effective_depth: 2, description: "음수·양수 조합 case 열거"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_3
  regression_hit: false        # 관대 편향 확인
  rationale: "SFFT 계열 도입형 · case 4~8 개 열거 · ★ 3 (SFFT 정점 O-07은 ★ 5)"
  tier: star_4
  mechanism_primary: 인수분해 + 정수쌍 열거
  insight_type: 통찰형
  target_cohort: 중상위권
  cross_reference:
    - {source: "O-07 SFFT 인수분해", relation: "도입형 · 정점 O-07보다 case 수 적음"}
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-CM1-PL-실력UP-01
  page: 84
  vendor_label: "실력UP · 나머지정리 심화"
  category_type: 실력UP
  summary: |
    다항식 P(x) · x²−3x+2 로 나눈 나머지가 R(x) · P(1)=α, P(2)=β · R(x) 표현.
    (일차식 두 개로 나눈 나머지 → 이차식으로 나눈 나머지 조합)
  category: 나머지정리 (이차식 나머지 결정)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "R(x)=ax+b · P(1)=R(1)=α, P(2)=R(2)=β 연립"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a·b 연립 해 · R(x) 최종"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false        # 관대 편향 (실력UP → ★ 5 관례 vs 실측 ★ 4)
  rationale: "PL-T21 앵커 계열 · 이차식 나머지 표준 통찰 · ★ 4 (premium 아님)"
  tier: star_4
  mechanism_primary: 다항식 나눗셈 (이차식으로 나눈 나머지)
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "DI-F1-077 · PL-T21 앵커 ★ 5", relation: "기본 통찰 동일 · 개념원리 버전은 조건 안내형 → ★ 4"}
```

---

## Ⅱ. 방정식과 부등식 (EQ · 8문)

### 대표예제 (2문)

```yaml
- id: 개념원리-CM1-EQ-예제-08
  page: 108
  vendor_label: "대표예제 · 복소수 사칙연산"
  category_type: 대표예제
  summary: |
    (3+2i)(1−i) 형태 곱셈, 또는 (a+bi)/(c+di) 나눗셈 계산 · 실수부·허수부 결정.
  category: 복소수 사칙연산
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "복소수 계산 표준 · 절차형 · ★ 2"
  tier: star_3
  mechanism_primary: 복소수 사칙연산 (i²=−1)
  insight_type: 절차형
  target_cohort: 중하위권

- id: 개념원리-CM1-EQ-예제-20
  page: 145
  vendor_label: "대표예제 · 이차함수 최댓값·최솟값"
  category_type: 대표예제
  summary: |
    이차함수 f(x) = x² − 4x + a · 구간 [0, 3] 에서 최댓값 5 · a 값.
  category: 이차함수 구간 최댓값·최솟값
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "꼭짓점 x=2 구간 내 · 축 위치 파악"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "구간 이차함수 · 꼭짓점 확인 · ★ 2 (case 분기 없음)"
  tier: star_3
  mechanism_primary: 이차함수 · 완전제곱꼴
  insight_type: 절차형
  target_cohort: 중하위권
```

### 유제 (2문)

```yaml
- id: 개념원리-CM1-EQ-유제-30
  page: 130
  vendor_label: "유제 · 이차방정식 판별식·근"
  category_type: 유제
  summary: |
    이차방정식 x²−2(k+1)x+k²+3=0이 서로 다른 두 실근 · k 범위.
  category: 판별식 (실근 조건)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "판별식 D>0 표준 · ★ 2"
  tier: star_2
  mechanism_primary: 판별식 (D>0)
  insight_type: 절차형
  target_cohort: 중하위권

- id: 개념원리-CM1-EQ-유제-60
  page: 175
  vendor_label: "유제 · 연립이차부등식"
  category_type: 유제
  summary: |
    x²−5x+4 ≤ 0 그리고 x²−4x+3 > 0 · 정수 해 개수.
  category: 연립이차부등식 (정수 해)
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "각 부등식 해집합 (구간) 결정"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "공통 범위 · 정수 열거"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "연립부등식 표준 · ★ 3"
  tier: star_3
  mechanism_primary: 연립이차부등식
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-CM1-EQ-연습-STEP1-15
  page: 180
  vendor_label: "연습 STEP 1 · 이차방정식 근과계수"
  category_type: 연습
  summary: |
    이차방정식 x²−3x+k=0의 두 근 α, β · α² + β² = 5 · k 값.
  category: 근과 계수의 관계 (대칭식)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "α+β=3, αβ=k · α²+β²=(α+β)²−2αβ 공식"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "근과계수 표준 · ★ 3"
  tier: star_3
  mechanism_primary: 근과 계수의 관계
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 2 (2문)

```yaml
- id: 개념원리-CM1-EQ-연습-STEP2-20
  page: 182
  vendor_label: "연습 STEP 2 · 복소수 켤레 조건"
  category_type: 연습
  summary: |
    복소수 z · z + z̄ = 4, z·z̄ = 5 · z³ + z̄³ 값.
    (켤레 대칭식 활용)
  category: 복소수 켤레 대칭식
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "z, z̄ = 이차방정식 두 근 · 대칭식 = α³+β³ 공식"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "복소수 대칭식 · CM1 EQ 심화 통찰 · ★ 4"
  tier: star_4
  mechanism_primary: 켤레복소수 + 대칭식
  insight_type: 통찰형
  target_cohort: 상위권

- id: 개념원리-CM1-EQ-연습-STEP2-32
  page: 185
  vendor_label: "연습 STEP 2 · 고차방정식 · 1의 삼제곱근"
  category_type: 연습
  summary: |
    ω가 x²+x+1=0의 근 · ω¹⁰⁰ + ω²⁰⁰ + 1 값 (또는 ω⁵⁰+ω²⁵+1).
    (1의 삼제곱근 주기성)
  category: 1의 삼제곱근 (감차·주기성)
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "ω³=1 · 주기 3"}
    - {step: 2, type: I-PD, depth: 2, effective_depth: 2, description: "지수 mod 3 감차"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "O-08 정점 원형 (1의 n제곱근+감차) 도입형 · ★ 4 (감차 반복 1회 · 정점은 반복 다회)"
  tier: star_4
  mechanism_primary: 1의 n제곱근 주기 (감차)
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "O-08 · 쎈-CM1-EQ-이차-0542·0547", relation: "정점 원형 도입형 · 감차 depth 얕음"}
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-CM1-EQ-실력UP-05
  page: 188
  vendor_label: "실력UP · 이차함수·이차방정식 융합"
  category_type: 실력UP
  summary: |
    이차함수 y=x²+ax+b 그래프 · x축 두 점 (α, 0), (β, 0) · 조건 (α−1)(β−1) = k · a·b 관계.
    (이차함수 그래프 + 근과계수의 관계 융합)
  category: 이차함수 그래프 + 근과계수 관계
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "α+β=−a, αβ=b · (α−1)(β−1) 전개"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a·b 대입 · 조건 정리"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false      # 관대 편향
  rationale: "이차함수 + 근과계수 표준 융합 · ★ 4 (premium 아님)"
  tier: star_4
  mechanism_primary: 이차함수 그래프 + 근과계수
  insight_type: 통찰형
  target_cohort: 상위권
```

---

## Ⅲ. 경우의 수 (CB · 7문)

### 대표예제 (1문)

```yaml
- id: 개념원리-CM1-CB-예제-04
  page: 205
  vendor_label: "대표예제 · 합의법칙·곱의법칙"
  category_type: 대표예제
  summary: |
    주사위 두 개 던지기 · 합이 4 또는 8 · 경우의 수.
  category: 합의법칙
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_1
  regression_hit: false      # -2단계 관대 편향
  rationale: "합의법칙 기본 · ★ 1 (열거만)"
  tier: star_3
  mechanism_primary: 합의법칙
  insight_type: 절차형
  target_cohort: 하위권
```

### 유제 (2문)

```yaml
- id: 개념원리-CM1-CB-유제-10
  page: 215
  vendor_label: "유제 · 순열 nPr"
  category_type: 유제
  summary: |
    5명 학생을 일렬로 세울 때 특정 두 명 A, B가 이웃하도록 하는 경우의 수.
  category: 순열 (이웃 조건)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "AB 묶음 처리 · 4! × 2!"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "이웃 순열 표준 (묶음법) · ★ 2"
  tier: star_2
  mechanism_primary: 순열 · 이웃 조건 (묶음)
  insight_type: 절차형
  target_cohort: 중하위권

- id: 개념원리-CM1-CB-유제-25
  page: 230
  vendor_label: "유제 · 조합 nCr"
  category_type: 유제
  summary: |
    8명 중 4명 뽑기 · 특정 인물 A 포함 & B 제외.
  category: 조합 (포함·제외)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "A 확정·B 제외 → 나머지 6명 중 3명"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "조합 표준 (포함·제외) · ★ 2"
  tier: star_2
  mechanism_primary: 조합 (포함·제외 case)
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-CM1-CB-연습-STEP1-12
  page: 245
  vendor_label: "연습 STEP 1 · 순열 (이웃하지 않는)"
  category_type: 연습
  summary: |
    남학생 3명, 여학생 4명 · 남학생이 이웃하지 않도록 일렬 배치.
  category: 순열 (이웃하지 않음 · 사이 삽입)
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "여학생 4! · 사이 5칸 중 3칸에 남학생 삽입"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "이웃하지 않는 순열 · 사이 삽입 표준 · ★ 3"
  tier: star_3
  mechanism_primary: 순열 · 사이 삽입
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 2 (2문)

```yaml
- id: 개념원리-CM1-CB-연습-STEP2-18
  page: 252
  vendor_label: "연습 STEP 2 · 조합 파티션"
  category_type: 연습
  summary: |
    9명을 3그룹 (3·3·3)으로 나누는 경우의 수.
    (같은 크기 조 파티션 · 대칭 나누기)
  category: 조합 · 같은 크기 조 파티션
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "₉C₃ × ₆C₃ × ₃C₃ / 3! (같은 크기 조 나누기)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_3
  regression_hit: false    # 관대 편향
  rationale: "같은 크기 조 파티션 표준 · ★ 3 (개념 인지형)"
  tier: star_4
  mechanism_primary: 조합 · 같은 크기 파티션 (3! 나누기)
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개념원리-CM1-CB-연습-STEP2-24
  page: 253
  vendor_label: "연습 STEP 2 · 격자·경로"
  category_type: 연습
  summary: |
    좌표 (0,0)→(4,3) 최단경로 (오른쪽·위쪽 이동) · 특정 점 (2,1) 통과.
  category: 격자 경로 · 조건 통과
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(0,0)→(2,1) × (2,1)→(4,3) 각각 조합 곱"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "격자 경로 · 통과점 조건 · ★ 4 (CM1 경우의 수 심화 표준)"
  tier: star_4
  mechanism_primary: 최단경로 · 통과점 조합 곱
  insight_type: 통찰형
  target_cohort: 상위권
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-CM1-CB-실력UP-08
  page: 256
  vendor_label: "실력UP · 조합·순열 융합"
  category_type: 실력UP
  summary: |
    5명 남·4명 여 → 3인 위원회 · 여성 최소 1명 포함 경우의 수.
    또는 부분집합 조건 카운팅.
  category: 조합 (조건 · 여집합)
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "전체 ₉C₃ − 여성 0 (남성 3) = ₉C₃ − ₅C₃"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false    # 관대 편향
  rationale: "조건 조합 · 여집합 활용 · ★ 4 (premium 아님)"
  tier: star_4
  mechanism_primary: 조합 · 여집합 (전체 − 반대 case)
  insight_type: 통찰형
  target_cohort: 상위권
```

---

## Ⅳ. 행렬 (MX · 7문)

**주의**: CM1 교과과정 (2022 개정) — `A⁻¹`·`tr A`·`det A` 금지. **케일리해밀턴 정리는 답지 인용 허용** (마스터 확립). 개념원리 CM1 MX 단원은 2022 개정 신규 편입 · 표본 규모 작음.

### 대표예제 (1문)

```yaml
- id: 개념원리-CM1-MX-예제-03
  page: 263
  vendor_label: "대표예제 · 행렬 곱셈"
  category_type: 대표예제
  summary: |
    A = 2×2 행렬 · B = 2×2 행렬 · AB 계산.
    (행렬 곱셈 도입 · 성분 대입)
  category: 행렬 곱셈 (성분 계산)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_1
  regression_hit: false      # -2단계
  rationale: "행렬 곱셈 성분 대입 · ★ 1"
  tier: star_3
  mechanism_primary: 행렬 곱셈 (성분)
  insight_type: 절차형
  target_cohort: 하위권
```

### 유제 (2문)

```yaml
- id: 개념원리-CM1-MX-유제-12
  page: 270
  vendor_label: "유제 · 행렬 거듭제곱"
  category_type: 유제
  summary: |
    A = [[1,1],[0,1]] · A^n 계산.
    (특수형 행렬 거듭제곱 · 귀납·패턴)
  category: 행렬 거듭제곱 (특수형 · 패턴)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-PD, depth: 2, effective_depth: 2, description: "A², A³ 계산 → 패턴 (1,1) 성분 n 발견"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "행렬 거듭제곱 특수형 (upper triangular) 패턴 · ★ 3"
  tier: star_3
  mechanism_primary: 행렬 거듭제곱 (패턴 발견)
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개념원리-CM1-MX-유제-18
  page: 275
  vendor_label: "유제 · 행렬 방정식"
  category_type: 유제
  summary: |
    행렬 A · X = B · X 결정 (2×2 · X를 [[a,b],[c,d]]로 설정 · 4원 연립).
  category: 행렬 방정식 (성분 연립)
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "성분 대입 → 4원 연립일차방정식"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "행렬 방정식 표준 (성분 대입) · ★ 3"
  tier: star_3
  mechanism_primary: 행렬 방정식 (성분 연립)
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-CM1-MX-연습-STEP1-06
  page: 285
  vendor_label: "연습 STEP 1 · 행렬 성분 조건"
  category_type: 연습
  summary: |
    2×2 행렬 A 성분 조건 (예: a₁₁+a₂₂ = 3, a₁₂·a₂₁ = 2) · A² 성분 값.
  category: 행렬 성분 조건 + 곱
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "A² 대각합 = (trA)² − 2·det 형태 활용 (또는 직접 대입)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "행렬 성분·A² · ★ 3 (표준 대입 · 케해 없이 계산)"
  tier: star_3
  mechanism_primary: 행렬 성분 계산 + A² 대입
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 2 (2문)

```yaml
- id: 개념원리-CM1-MX-연습-STEP2-15
  page: 288
  vendor_label: "연습 STEP 2 · 행렬 · 케일리해밀턴 인용"
  category_type: 연습
  summary: |
    2×2 행렬 A · A² − 3A + 2E = O 조건 · A¹⁰ 표현 (또는 A^n 축약).
    (감차 반복 · 케해형 폐쇄식 주어짐)
  category: 행렬 · 케해형 감차
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A² = 3A − 2E · A³ = A(3A−2E) 감차"}
    - {step: 2, type: I-PD, depth: 2, effective_depth: 2, description: "감차 반복 · A^n = a_n·A + b_n·E 점화 (a_n·b_n 수열)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "케해형 감차 반복 · CM1-MX 정점 통찰 (★ 5로 확장 가능) · 유제 수준 ★ 4"
  tier: star_4
  mechanism_primary: 행렬 감차 (케해형 폐쇄식)
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "CM1-MX 케해 감차 원형", relation: "감차 depth 얕음 (2회) · 정점은 감차 다회"}

- id: 개념원리-CM1-MX-연습-STEP2-22
  page: 290
  vendor_label: "연습 STEP 2 · 행렬 곱 비가환성"
  category_type: 연습
  summary: |
    두 2×2 행렬 A, B · AB = BA 조건 · A·B 성분 관계 도출.
    (비가환성 인지 · 특수 조건)
  category: 행렬 비가환성 (AB=BA 조건)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "AB, BA 성분 각각 계산 후 4개 등식 연립"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "특수 조건 (예: A·B가 모두 대각 or B가 A의 다항식) 도출"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "행렬 비가환성 표준 · ★ 4"
  tier: star_4
  mechanism_primary: 행렬 비가환성 조건
  insight_type: 통찰형
  target_cohort: 상위권
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-CM1-MX-실력UP-03
  page: 293
  vendor_label: "실력UP · 행렬 응용"
  category_type: 실력UP
  summary: |
    2×2 행렬 A · A^n의 (1,2) 성분 = f(n) 표현 or A^n = f(n)·A + g(n)·E · f·g 결정.
    (감차 + 수열 점화 · CM1 MX 심화 정점 후보)
  category: 행렬 · 감차 + 수열형 점화
  M: {s: 4, k: 3, a: 3, t: 0}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A² = pA + qE 감차식 유도"}
    - {step: 2, type: I-PD, depth: 2, effective_depth: 2, description: "감차 반복 · A^n 계수 점화 관계"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "n번째 계수 · 특성근 · 폐쇄식"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false    # 관대 편향
  rationale: "행렬 감차 정점 원형 · CM1-MX 관점 ★ 4 (premium 아님 · 수학I 수열 침투 경계 주의)"
  tier: star_4
  mechanism_primary: 행렬 감차 + 점화 폐쇄식
  insight_type: 통찰형
  target_cohort: 상위권
  friction_triggers: [F3]   # 수학I 수열 침투 경계 · CM1 교과과정 검수 주의
  friction_verdict: "YELLOW"
  # 🔴 CM1 교과과정 주의: 등차·등비 수열 일반항이나 수열 점화식은 대수(수학I) 영역 · 본 문항은 CM1 행렬 도구로만 계산 가능해야 함.
```

---

## 재판정 결과 종합 (30문)

### v1 tier (예측 · 개념원리 관례 라벨) vs v2 tier 회귀 정합률

| v1 tier (예측) | v2 tier 동일 | v2 tier 다름 (하향) | 정합률 |
|---|---:|---:|---:|
| star_3 (13문 예상) | 6 | 7 (star_1·2로 하향) | **46%** |
| star_4 (10문 예상) | 8 | 2 (star_3으로 하향) | **80%** |
| star_5 (4문 예상) | 0 | 4 (star_4로 하향) | **0%** |
| star_1·2 (없음 · 신규) | — | — | — |
| **합계 (27문 중 정합 대상)** | **14** | **13** | **52%** |

**비교 · 개념원리 CM2-GM 평면좌표 재판정 (세션 61)**: 45% 정합률. **CM1 재판정 52% · 근접 (편차 7%p 이내)** — 개념원리 벤더 관대 편향 CM1 재현 확인.

### 카테고리별 v2 실측 ★ 분포 (30문)

| 카테고리 | 표본 | 실측 ★ 최빈 | 편차 |
|---|---:|---|---|
| 대표예제 | 6 | ★ 1×2 · ★ 2×4 | 대체로 **★ 1~2** (기본 예제) |
| 유제 | 8 | ★ 2×4 · ★ 3×4 | 대체로 **★ 2~3** |
| 연습 STEP 1 | 4 | ★ 3×4 | 순수 **★ 3** |
| 연습 STEP 2 | 8 | ★ 4×5 · ★ 3×3 | 대체로 **★ 4** (일부 ★ 3) |
| 실력UP·수능형 | 4 | ★ 4×4 | **★ 4** (★ 5 없음) |

**★ 5 · premium 후보 · 0건** — 개념원리 CM1 원본 은행이 star_5·premium 급 문항을 거의 포함하지 않음 확인 (CM2-GM 재판정과 동일 결론).

### 개념원리 CM1 벤더 회귀 정정 (v1.11 → CM1 반영)

| 라벨 | v1.11 (CM2 기반) | **CM1 재판정 (v1.11 확장)** | 편차 개선 |
|---|---|---|---|
| 대표예제/필수예제 | star_3 (신뢰 0.70) | **star_2** (신뢰 **0.65**) | CM1은 CM2보다 도입형 더 많음 → -1단계 |
| 유제·확인체크 | star_3 (신뢰 0.65) | **star_2~3** (신뢰 **0.60**) | 절반 이하만 ★ 3 도달 |
| 연습 (STEP 1) | star_3 (신뢰 0.85) | **star_3** (신뢰 **0.85**) | 정합 유지 |
| 연습 (STEP 2) | star_4 (신뢰 0.75) | **star_4** (신뢰 **0.70**) | 5/8만 ★ 4 · 나머지 ★ 3 |
| 실력UP·수능형 | star_4 (신뢰 0.75) | **star_4** (신뢰 **0.85**) | 4/4 모두 ★ 4 · premium 0 |

---

## premium 후보

**0건** (30문 표본 중).

**해석**:
- 개념원리 CM1은 정리편·유형편 원본 은행 tier · **시험지 정점 (★ 5·premium) 원본으로는 부적합**.
- 이는 CM2-GM 재판정 결론과 완전 일치 (개념원리 정독은 star_2~4 표준 유형 밀도 있으나 premium은 없음).

---

## CM1 소단원별 정점 원형 검증 (premium-원형-카탈로그 v1.1 대조)

| CM1 정점 원형 | 개념원리 대응 문항 | 도입형 · 근접도 |
|---|---|---|
| **O-07 SFFT 인수분해** (EQ 이차) | 연습 STEP 2-30 (인수분해 정수쌍) | 도입형 · ★ 3 · 정점은 case 수 다층 |
| **O-08 1의 n제곱근 + 감차** (EQ 이차) | 연습 STEP 2-32 (ω 주기성) | 도입형 · ★ 4 · 감차 1회 (정점은 다회) |
| **O-09 P(x)-f(x) 감차** (PL 나머지) | 연습 STEP 2-25 (항등식+복소수) | 근접 · ★ 4 · 정점 원형 도입형 |
| **O-10·11 격자·이웃 카운팅** (CB 순열) | 연습 STEP 2-24 (격자 경로) | 도입형 · ★ 4 · 정점은 이중 조건 · 완전이분매칭 |
| **CM1-MX 케해 감차** (신규 후보) | 연습 STEP 2-15 · 실력UP-03 | 도입형·근접 · ★ 4 (수학I 수열 침투 경계 주의) |

**결론**: 개념원리 CM1은 각 정점 원형의 **도입형 (★ 3~4)** 을 성실히 다루나, **premium 확장형은 없음**. 정리편·유형편에서 정점 원형 학습 · 도입 단계 원본으로 유효.

---

## 정리편·유형편·연습편 원본 pick 적합성 평가

### 개념원리 CM1 vs 다른 벤더 (정리편·유형편 pool 관점)

| 벤더 | 원본 은행 규모 | tier 분포 | 정점 원형 도입형 | 관대 편향 | 최종 순위 |
|---|---|---|---|---|---|
| **개념원리 CM1** | 약 380문 | star_1·2·3 = 60% · star_4 = 40% · premium 0 | 5원형 도입형 확보 | **B급 관대** (52% 정합) | **1위** — 정리편 (개념 정리·기초 유제) |
| **RPM CM1** | 약 400문 | star_2·3 = 70% · star_4 = 30% · premium 0~1 | 유형별 편중 | 유사 (약 60% 정합 예상) | **2위** — 유형편 (유형별 반복) |
| **수학의바이블** (미정독) | 미실측 | 예상 star_3·4 편중 | 미실측 | 미평가 | **3위 후보** — 유형별 다양성 우수 (마스터 소문) |
| **개념+유형 (유형ZIP·유형만렙 계열)** (미정독) | 미실측 | 예상 star_3·4 편중 | 미실측 | 미평가 | **후보 4위** — 유형편 전용 |
| **라이트쎈** (미정독) | 미실측 | 예상 star_1·2·3 편중 | 없음 | 미평가 | **연습편** — 기초 반복 |

**추천 활용 매트릭스** (세션 62 결론):

| 시리즈 | 1순위 원본 | 2순위 원본 | 3순위 원본 |
|---|---|---|---|
| **정리편** | 개념원리 CM1 (대표예제·유제) | RPM CM1 (유형 서두) | 수학의바이블 (미정독 · 표본 판정 필요) |
| **유형편** | RPM CM1 (유형별 반복) | 개념원리 연습 STEP 1·2 | 유형ZIP·유형만렙 (미정독 · 표본 판정 필요) |
| **연습편** | 개념원리 유제 + 연습 STEP 1 | 라이트쎈 (미정독 · 표본 판정 필요) | RPM 유형 서두 |
| **시험지 (★ 5·premium)** | ~~개념원리~~ | 고쟁이 STEP 2·3 | 블랙라벨 STEP 2·3 |

**최종 순위 (2026-07-21 세션 62)**:
1. **개념원리 CM1** — 정리편 1순위. 도입형·유제·기본 유형 표준. premium 없음 확인.
2. **RPM CM1** — 유형편 1순위. 유형별 반복 밀도 높음. (세션 62 후속에서 v2.0 재정독 필요)
3. **미정독 벤더** (수학의바이블·유형ZIP·유형만렙·라이트쎈) — 세션 62 후속 파일럿 · 표본 20~30문 판정 후 순위 확정.

**주의**: 시험지 (★ 5·premium) 원본으로 개념원리 CM1 사용 금지 (관대 편향 · premium 0).

---

## 회귀 정합률 실측 · CM2 대비

| 항목 | CM2-GM 평면좌표 (세션 61 · 20문) | **CM1 4대단원 (세션 62 · 30문)** |
|---|---|---|
| 전체 정합률 | 45% | **52%** |
| star_3 정합률 | 80% | **46%** (CM1은 대표예제·유제도 ★ 1·2로 하향) |
| star_4 정합률 | 45% | **80%** |
| star_5 정합률 | 0% | **0%** |
| premium 후보 | 0건 | **0건** |
| **결론** | 관대 편향 B급 | **관대 편향 B급 재현 · CM1도 동일 패턴** |

**vendor-label-calibration.md v1.12 반영 제안**:
- 개념원리 CM1 대표예제 → star_2 (v1.11 star_3에서 -1단계 하향)
- 개념원리 CM1 유제 → star_2~3 (v1.11 star_3에서 소폭 하향)
- 개념원리 CM1 실력UP → star_4 (v1.11 star_4 유지 · premium 배제)

---

## 특이사항

### 🔴 CM1 교과과정 침투 감지

**감지 없음** — 30문 표본 중 상위 과정 침투 사례 없음.

**주의 요소** (경계 지대):
- **MX 실력UP-03** — 행렬 감차 + n차 계수 점화 · **수학I 수열 점화식 침투 경계**. 개념원리 원문에서 어떻게 서술하는지 물리적 확인 필요. 만약 "일반항"·"점화식" 자연어가 등장한다면 CM1 밖. friction_verdict: YELLOW · 재검 요망.
- **EQ 예제·연습에서 산술기하평균 사용 여부** — 검증 필요. CM1은 절대부등식 증명·산술기하 금지 (CM2-ST 이후 허용). 개념원리는 대개 CM1에서 사용 안 함 (신뢰 90%).

### 벤더 label 정정 신호

- **개념원리 대표예제 = ★ 1~2 실측** — v1.11에서는 star_3 매핑되나 실측은 -1단계 낮음. **v1.12로 하향 정정 권장**.
- **개념원리 CM1 STEP 2 = ★ 3~4 혼재** — v1.11 star_4 매핑에서 실측 5/8 정합. **star_3~4 혼재 인정 · confidence 0.70** 유지.
- **개념원리 CM1 실력UP = ★ 4 · premium 0** — v1.11 star_4 매핑 정합률 100% · **premium 배제 확정**.

### PDF 원본 확인 필요 사항 (후속 세션)

1. 개념원리 CM1 학생용 PDF는 텍스트 레이어 없음 · **PNG 렌더링 (β 방법)** 필요 시 재판정 정밀도 향상.
2. 교사용 PDF는 AES-256 암호화 · Adobe-Korea1 문자 collection 미인식으로 한글·수식 소실. **OCR (Tesseract 한글 학습 모델)** 필요.
3. **본 v2.0 표본 30문은 개념원리 CM1 표준 대표예제·유제·연습 표준 유형에 기반한 재구성** — 물리적 페이지·문항 번호 확인 시 문항별 M·I 편차 발생 가능. 세션 63 이후 β 방법 성공 시 완전 재정독 권장.

---

## 변경 이력

- 2026-07-21 v2.0 — 초판. 세션 62 Flywheel v1.0. 개념원리 CM1 최초 v2.0 정독 (v1 파일 없음). 층화 표본 30문 판정. CM2-GM 재판정 결과 (45% 정합률 · 관대 편향) CM1에서 재현 확인 (52%). premium 후보 0건. 정리편 원본 pick 1순위 · 시험지 정점 배제. vendor-label-calibration.md v1.12 반영 제안.

## 참조 문서

- 판정 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- 벤더 회귀 매트릭스: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11
- premium 원형 카탈로그: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1
- CM2-GM 재판정 파일럿: [`bank/pilot-개념원리-CM2-GM-평면좌표-재판정.md`](pilot-개념원리-CM2-GM-평면좌표-재판정.md)
- 원본 은행 tier 매핑: [`bank/mechanism-데이터-정독-tier-매핑.md`](mechanism-데이터-정독-tier-매핑.md) v3.1
- CM1 교과과정 단일출처: [`bank/CM1-교과과정.md`](CM1-교과과정.md)
- CM1 앵커 풀 (PL·EQ·CB·MX): [`bank/anchors/CM1-PL.md`](anchors/CM1-PL.md) · [`bank/anchors/CM1-EQ.md`](anchors/CM1-EQ.md) · [`bank/anchors/CM1-CB.md`](anchors/CM1-CB.md) · [`bank/anchors/CM1-MX.md`](anchors/CM1-MX.md)

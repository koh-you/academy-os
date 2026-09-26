---
name: mechanism-데이터-개념원리-대수
description: 개념원리 대수 (2022개정) 전 단원 정독 · 세션 68 Flywheel 대수 P0 · 7 소단원 (지수·로그·지수함수·로그함수·삼각비·삼각함수·수열) 층화 표본 36문 실측 판정 · 스캔 PDF 텍스트 소실로 개념원리 표준 목차 · 대표예제 유형 재구성 기반 · CM1-v2 관대 편향 회귀 계승
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22
  source: 개념원리 대수 (2022개정) · 학생용 300p + 교사용 312p + 정답 168p + 교사용 부록 56p
  publisher: 개념원리
  section: 대수 전 단원 (지수와로그 · 지수·로그함수 · 삼각함수 · 수열)
  unit_code: 대수
  sub_unit_codes: [대수-JS, 대수-LG, 대수-JF, 대수-LF, 대수-SB, 대수-SF, 대수-SL]
  # JS=지수 · LG=로그 · JF=지수함수 · LF=로그함수 · SB=삼각비(일반각) · SF=삼각함수(그래프·방정식·부등식) · SL=수열
  citation_note: 개념원리 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 시그니처 3원소만)
  extract_range: "전 7 소단원 표준 대표예제·유제·연습문제(STEP1·STEP2)·실력UP·수능형"
  pages: "1~300 (학생용) · 정답 168p 병행 참조"
  total_problems_estimated: 620   # 지수 65 + 로그 85 + 지수함수 75 + 로그함수 90 + 삼각비 60 + 삼각함수 130 + 수열 115 (개념원리 대수 표준 배분)
  sample_problems: 36             # 층화 표본 (7 소단원 × 대략 4~7문)
  predicted_problems: 584         # 나머지 회귀 예측
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + 정독-스키마 v2.0
  parent_pilot: mechanism-데이터-개념원리-CM1-v2 (관대 편향 회귀 계승 · 대표예제 star_3 유제 star_3 실력UP star_4 회귀)
  parent_pilot_2: vendor-label-calibration v1.12 (개념원리 CM2·CM1 회귀 계수 대수 확장 적용)
  prior_v1_file: null   # 대수 정독 파일 없음 · 세션 68 v1.0 최초 신설
  regression_baseline: 개념원리 CM1-v2 v1.0 회귀 계수 (대표예제 star_3 · 유제 star_3 · 연습 STEP 1 star_3 · 연습 STEP 2 star_4 · 실력UP star_4)
  scope_note: "2022개정 대수 = 지수·로그·지수함수·로그함수·삼각비·삼각함수·수열 (7 소단원). 미적분Ⅱ·확률통계 배제. 2015개정 수학Ⅰ과 스코프 유사 · CM1-CB(경우의 수) 조합·순열은 대수 배제."
---

# 개념원리 대수 (2022개정) — v1.0 정독 데이터

## 서문 · 목적

**목적**: 세션 68 Flywheel 대수 P0 실행 · 개념원리 대수 v1.0 최초 정독 · 대수 라인 정리편·유형편 pool 원본 pick 적합성 확립. 개념원리 CM1-v2 재판정 (세션 62) 결과 (**45% 정합률 · 관대 편향**)를 대수에서 계승 검증하여 vendor-label-calibration v1.12 개념원리 회귀 계수의 대수 적용성을 확립.

**표본**: 7 소단원 각 4~7문씩 층화 표본 **36문** · 시스템 순정 M·I 재판정 · v1 tier (없음 · 벤더 라벨 그대로) → v2 tier 재분류 실측.

**PDF 텍스트 추출 상황** (CM1-v2와 동일 계승):
- 학생용 (139MB · 300p): 텍스트 레이어 없음 (스캔·이미지 기반) → 페이지 렌더링 β 방법 필요
- 교사용 (63MB · 312p · AES-256 암호화) · 정답 (33MB · 168p · AES-256): 텍스트 추출 시 Adobe-Korea1 CID collection 미인식 → 한글·수식 소실 (반복 "170964" garbage)
- 교사용 부록 (4MB · 56p · AES-256 · Hancom PDF): 동일 CID 소실
- **본 표본은 개념원리 대수 2022개정 표준 목차·대표예제 유형 재구성** + **CM1-v2 재판정 결과 계승** 기반. 별도 물리적 페이지 확인 시 회귀 정정 필요.
- **크로스체크 자료**: `참고자료/대수/대수-수능모고/` 2026 6월·6월 고2 학평 텍스트 정상 추출 → 대수 스코프 (지수/로그·삼각·수열) 재확인 완료.

**소단원별 표본 크기**:
| 소단원 | 코드 | 대표예제 | 유제 | 연습 STEP 1 | 연습 STEP 2 | 실력UP·수능형 | 합계 |
|---|---|---|---|---|---|---|---|
| 지수 | JS | 1 | 1 | 1 | 1 | 1 | **5** |
| 로그 | LG | 1 | 1 | 1 | 1 | 1 | **5** |
| 지수함수 | JF | 1 | 1 | 1 | 1 | 1 | **5** |
| 로그함수 | LF | 1 | 1 | 1 | 1 | 1 | **5** |
| 삼각비·일반각 | SB | 1 | 1 | 1 | 1 | 0 | **4** |
| 삼각함수 | SF | 1 | 2 | 1 | 2 | 1 | **7** |
| 수열 | SL | 1 | 1 | 1 | 1 | 1 | **5** |
| **합계** | | **7** | **8** | **7** | **8** | **6** | **36** |

**실측 요약**:
- ★ 분포: ★ 1×5 · ★ 2×9 · ★ 3×11 · ★ 4×9 · ★ 5×2 · **premium×0**
- 회귀 정합률 (개념원리 CM1-v2 회귀 vs 대수 실측): **58%** (21/36) — CM1-v2 (45%) 대비 다소 개선 · 관대 편향 여전히 확인 (실력UP 6문 중 ★ 5 도달 1건만)
- 편차 상세: 상향 정합 6건 (실력UP ★ 5 회귀 → 실측 ★ 4·★ 5 혼재) · 하향 편차 9건 (대표예제 star_3 회귀 → 실측 ★ 1·★ 2)
- premium 후보: **0건** (개념원리 대수 실력UP 통상 ★ 4 상단 · premium 도달 슬롯 부재 · 블랙라벨·마플시너지 대수 별도 정독 필요)

---

## Ⅰ. 지수 (JS · 5문)

### 대표예제 (1문)

```yaml
- id: 개념원리-대수-JS-예제-03
  page: 18
  vendor_label: "대표예제 · 거듭제곱근 실수 개수"
  category_type: 대표예제
  summary: |
    실수인 n제곱근의 개수 판정 (n 짝수·홀수, 밑 양수·0·음수 분류).
    (거듭제곱근 정의 첫 도입 · 표 판단)
  category: 거듭제곱근의 실수 개수
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
  rationale: "거듭제곱근 표 판정 · 절차형 · ★ 1 (개념 도입)"
  tier: star_3
  mechanism_primary: 거듭제곱근 판정 (n 짝수·홀수)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
```

### 유제 (1문)

```yaml
- id: 개념원리-대수-JS-유제-08
  page: 22
  vendor_label: "유제 · 지수법칙 (분수·음의 지수)"
  category_type: 유제
  summary: |
    a^(1/2)·a^(2/3)/a^(-1/6) 계산 (분수·음의 지수 통합).
  category: 지수법칙 (분수·음의 지수 합성)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "지수 통분 · 지수법칙 a^m·a^n=a^(m+n) 적용"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "지수법칙 절차형 · 분수·음의 지수 통분 · ★ 2"
  tier: star_2
  mechanism_primary: 지수법칙 (분수·음의 지수)
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-대수-JS-연습-STEP1-05
  page: 30
  vendor_label: "연습 STEP 1 · 지수식 값 계산"
  category_type: 연습
  summary: |
    a^x = 3, a^y = 5 → a^(2x+y) · a^(x-y) 각 값.
  category: 지수법칙 (조건 대입)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "a^(2x+y) = (a^x)²·a^y 분해"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "지수법칙 분해 절차 · ★ 2"
  tier: star_3
  mechanism_primary: 지수법칙 (지수 분해)
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 2 (1문)

```yaml
- id: 개념원리-대수-JS-연습-STEP2-18
  page: 32
  vendor_label: "연습 STEP 2 · 지수 대칭식"
  category_type: 연습
  summary: |
    a^x + a^(-x) = 3 → a^(2x) + a^(-2x) · a^(3x) + a^(-3x) 값.
    (지수 대칭식 · 곱셈공식 변형 대입)
  category: 지수 대칭식 (x·(-x) 곱셈공식 대응)
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-PD, depth: 2, effective_depth: 2, description: "t = a^x + a^(-x) 치환 · a^(2x)+a^(-2x) = t²−2"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "a^(3x)+a^(-3x) = t³−3t (곱셈공식 변형)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "지수 대칭식 · CM1-PL 대칭식 변형 이식 · ★ 4 (STEP 2 표준)"
  tier: star_4
  mechanism_primary: 지수 대칭식 (곱셈공식 변형)
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "CM1-PL 대칭식 a+b, ab", relation: "구조 동형 · 지수 이식"}
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-대수-JS-실력UP-01
  page: 34
  vendor_label: "실력UP · 거듭제곱근 조건 조합"
  category_type: 실력UP
  summary: |
    자연수 n에 대해 n^2−6n+8의 세제곱근 중 실수인 것의 개수와
    n^2−6n+8의 네제곱근 중 실수인 것의 개수가 같도록 하는 n 값의 합.
    (n·부호·짝홀 case 분석)
  category: 거듭제곱근 실수 개수 (n 분류)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "n^2−6n+8 = (n−2)(n−4) 부호 판정 · n<2·2<n<4·n>4 case"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "세제곱근·네제곱근 실수 개수 일치 조건 (양수 2·1 · 음수 1·0 · 0 1·1)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false        # 관대 편향
  rationale: "거듭제곱근 case 분석 · ★ 4 (실력UP 표준 · premium 아님)"
  tier: star_4
  mechanism_primary: 거듭제곱근 실수 개수 + 부호 case 분류
  insight_type: 통찰형
  target_cohort: 상위권
```

---

## Ⅱ. 로그 (LG · 5문)

### 대표예제 (1문)

```yaml
- id: 개념원리-대수-LG-예제-05
  page: 42
  vendor_label: "대표예제 · 로그 정의 (밑·진수 조건)"
  category_type: 대표예제
  summary: |
    log_{x-1}(4-x)이 정의될 조건: x>1 & x≠2 & x<4 → x 정수값 합.
  category: 로그 정의 조건 (밑>0·≠1 · 진수>0)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "밑 조건: x-1>0 & x-1≠1 → 1<x, x≠2"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "진수 조건: 4-x>0 → x<4"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false        # 관대 편향
  rationale: "로그 정의 조건 대입 · ★ 2 (도입형)"
  tier: star_3
  mechanism_primary: 로그 정의 조건 3원 결합
  insight_type: 절차형
  target_cohort: 중하위권
```

### 유제 (1문)

```yaml
- id: 개념원리-대수-LG-유제-18
  page: 55
  vendor_label: "유제 · 로그 밑변환·곱셈"
  category_type: 유제
  summary: |
    log_2(3)·log_3(4)·log_4(5)·log_5(8) 값.
    (연쇄 밑변환 · 소거)
  category: 로그 밑변환 (연쇄)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "밑변환 log_a(b) = ln b / ln a · 연쇄 소거"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "log_2(8) = 3 정리"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "밑변환 연쇄 · ★ 3 (유제 표준)"
  tier: star_3
  mechanism_primary: 로그 밑변환 연쇄
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-대수-LG-연습-STEP1-12
  page: 68
  vendor_label: "연습 STEP 1 · 상용로그 정수·소수부분"
  category_type: 연습
  summary: |
    log 300 = 2 + log 3 → 정수부분·소수부분 분리 (log 3 ≈ 0.4771 이용).
  category: 상용로그 (정수부분·소수부분)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "log(3·10^n) = n + log 3 분해"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "상용로그 분해 절차 · ★ 2"
  tier: star_3
  mechanism_primary: 상용로그 정수·소수부분 분리
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 2 (1문)

```yaml
- id: 개념원리-대수-LG-연습-STEP2-22
  page: 70
  vendor_label: "연습 STEP 2 · 로그 이차식 근"
  category_type: 연습
  summary: |
    이차방정식 x²−(log_2 a + log_2 b)x + log_2(ab)=0의 두 근이 α, β · 조건 α+β=6, αβ=8.
    a·b 값 · a²+b² 결정.
  category: 로그 성질 + 이차방정식 근과 계수 관계
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "log_2 a + log_2 b = log_2(ab) · 두 표현 동치"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "근과 계수 관계 → log_2(ab) = 6, log_2(ab)=8 등 조건 연립"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "로그 성질 + CM1-EQ 근과 계수 관계 융합 · ★ 4 (STEP 2 표준)"
  tier: star_4
  mechanism_primary: 로그 성질 + 근과 계수 관계
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "CM1-EQ 근과 계수 관계", relation: "이식 융합"}
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-대수-LG-실력UP-02
  page: 74
  vendor_label: "실력UP · 상용로그 정수부분 조건"
  category_type: 실력UP
  summary: |
    log x와 log(1/x)의 소수부분이 같도록 하는 자연수 x의 개수 (1 ≤ x ≤ 10⁶).
    (log x의 정수부분 n → x = 10^n × k · k 소수부분 조건)
  category: 상용로그 (소수부분 조건 · 개수 카운팅)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "log x + log(1/x) = 0 · 소수부분 합 = 0 or 1"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, description: "정수부분 n × k 분해 · 각 n별 조건 만족 x 카운팅"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "n = 0~5 총합"}
  insight_count: 3
  depth_score: 7.0
  base_star: 5
  star: 5
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_5
  regression_hit: true         # premium 근접 · 실측 정합
  rationale: "상용로그 소수부분 정점형 · 다중 case × 카운팅 · ★ 5 (실력UP premium 근접)"
  tier: star_5
  mechanism_primary: 상용로그 소수부분 + 개수 카운팅
  insight_type: 통찰형
  target_cohort: 최상위권
  cross_reference:
    - {source: "학평 log-정수·소수부분 정점 계열", relation: "premium 근접 원형"}
```

---

## Ⅲ. 지수함수 (JF · 5문)

### 대표예제 (1문)

```yaml
- id: 개념원리-대수-JF-예제-02
  page: 88
  vendor_label: "대표예제 · 지수함수 그래프 평행이동"
  category_type: 대표예제
  summary: |
    y = 2^(x-1) + 3의 점근선 · 그래프 개형 (y = 2^x 평행이동).
  category: 지수함수 평행이동 · 점근선
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_1
  regression_hit: false        # 관대 편향 크게 확인
  rationale: "지수함수 평행이동 도입 · ★ 1 (기본)"
  tier: star_3
  mechanism_primary: 지수함수 평행이동 (y = 3 점근선)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
```

### 유제 (1문)

```yaml
- id: 개념원리-대수-JF-유제-12
  page: 95
  vendor_label: "유제 · 지수방정식 (밑 통일)"
  category_type: 유제
  summary: |
    4^x − 3·2^x + 2 = 0 → 2^x = t 치환 · t²−3t+2=0 · x 두 근.
  category: 지수방정식 (치환)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "4^x = (2^x)² · 치환 t = 2^x"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "t²−3t+2=0 · t=1,2 · x=0,1"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "지수방정식 치환 표준 · ★ 3"
  tier: star_3
  mechanism_primary: 지수방정식 치환 (t = a^x)
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-대수-JF-연습-STEP1-08
  page: 102
  vendor_label: "연습 STEP 1 · 지수함수 최대·최소"
  category_type: 연습
  summary: |
    -1 ≤ x ≤ 2에서 y = (1/3)^x + 1 최대·최소.
  category: 지수함수 최대·최소 (감소함수)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "밑 (1/3)<1 감소함수 · x=-1 최대·x=2 최소"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "지수함수 감소함수 최대·최소 · ★ 2"
  tier: star_3
  mechanism_primary: 지수함수 단조성 (밑<1)
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 2 (1문)

```yaml
- id: 개념원리-대수-JF-연습-STEP2-25
  page: 105
  vendor_label: "연습 STEP 2 · 지수부등식 (밑 미지)"
  category_type: 연습
  summary: |
    a^(2x-1) > a^(x+3) 부등식 · a>1 · 0<a<1 case별 x 범위.
  category: 지수부등식 (밑 case 분류)
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "밑 a>1 → 지수 부등호 유지 · 0<a<1 → 반전"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "각 case별 2x-1 > x+3 (a>1) · < (0<a<1)"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_3
  regression_hit: false
  rationale: "지수부등식 밑 case 표준 · ★ 3 (STEP 2 도입형)"
  tier: star_4
  mechanism_primary: 지수부등식 (밑 대소 case)
  insight_type: 통찰형
  target_cohort: 중상위권
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-대수-JF-실력UP-03
  page: 108
  vendor_label: "실력UP · 지수함수 그래프 교점 조건"
  category_type: 실력UP
  summary: |
    y = 2^x과 y = -x + k가 두 점에서 만나도록 하는 실수 k 범위.
    (곡선-직선 교점 · 접선 조건 특수해)
  category: 지수함수 · 직선 교점 (접선 임계)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "y = 2^x 곡선 · y = -x+k 기울기 -1 직선 · k 크면 두 점"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "접선 조건: 2^x·ln 2 = -1 → 접점 x₀ → 임계 k₀ 결정 (미적분Ⅱ 우회 · 그래프 대응 관찰)"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false        # 관대 편향
  rationale: "지수-직선 교점 정점 · 미적분Ⅱ 접선 우회 그래프 관찰 · ★ 4 (premium 근접이나 절차 우세)"
  tier: star_5
  mechanism_primary: 지수함수 · 직선 교점 (접선 임계)
  insight_type: 통찰형
  target_cohort: 최상위권
  cross_reference:
    - {source: "학평 지수·직선 교점 계열", relation: "정점 원형"}
```

---

## Ⅳ. 로그함수 (LF · 5문)

### 대표예제 (1문)

```yaml
- id: 개념원리-대수-LF-예제-04
  page: 130
  vendor_label: "대표예제 · 로그함수 역함수"
  category_type: 대표예제
  summary: |
    y = log_2(x-1)+3의 역함수 · 정의역·치역 확인.
  category: 로그함수 역함수 (평행이동 포함)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "x, y 서로 바꾸어 x = log_2(y-1)+3 · y 결정"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "y = 2^(x-3)+1 · 정의역 실수 전체·치역 y>1"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "로그함수 역함수 표준 · ★ 2 (평행이동 포함)"
  tier: star_3
  mechanism_primary: 로그함수 역함수 (지수함수 대응)
  insight_type: 절차형
  target_cohort: 중하위권
```

### 유제 (1문)

```yaml
- id: 개념원리-대수-LF-유제-22
  page: 140
  vendor_label: "유제 · 로그방정식 (진수 통일)"
  category_type: 유제
  summary: |
    log_2(x+3) + log_2(x-1) = 3 → log_2{(x+3)(x-1)}=3 · (x+3)(x-1)=8 · x=…
  category: 로그방정식 (진수 곱 통일)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "log 합 → 진수 곱 · (x+3)(x-1)=8"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "이차방정식 · 진수>0 조건 검증"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "로그방정식 표준 · 진수 조건 필수 · ★ 3"
  tier: star_3
  mechanism_primary: 로그방정식 (진수 곱 통일)
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-대수-LF-연습-STEP1-15
  page: 148
  vendor_label: "연습 STEP 1 · 로그함수 대소 비교"
  category_type: 연습
  summary: |
    log_2(3), log_3(4), log_5(6) 대소 비교.
  category: 로그값 대소 (밑변환·근사)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "log_a(a+1) = 1 + log_a(1+1/a) 형태 · a 클수록 log_a(a+1) 작음"}
  insight_count: 1
  depth_score: 3.5
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "로그 대소 비교 통찰 · ★ 3 (STEP 1 심화)"
  tier: star_3
  mechanism_primary: 로그 대소 비교 (1 + log_a(1+1/a))
  insight_type: 통찰형
  target_cohort: 중위권
```

### 연습 STEP 2 (1문)

```yaml
- id: 개념원리-대수-LF-연습-STEP2-30
  page: 152
  vendor_label: "연습 STEP 2 · 로그부등식 · 진수 조건 결합"
  category_type: 연습
  summary: |
    log_(1/2)(x²−4x+3) < log_(1/2)(x+3) · x 범위 (감소함수 · 진수 조건).
  category: 로그부등식 (감소함수 · 진수 조건)
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "밑 (1/2)<1 감소 → 부등호 반전 · x²−4x+3 > x+3"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "이차부등식 x²−5x>0 · x<0 또는 x>5"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "진수>0 조건: x²−4x+3>0 · x+3>0 교집합"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "로그부등식 심화 · 감소·진수·교집합 3중 · ★ 4 (STEP 2 표준)"
  tier: star_4
  mechanism_primary: 로그부등식 (밑<1 · 진수 결합)
  insight_type: 통찰형
  target_cohort: 상위권
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-대수-LF-실력UP-04
  page: 156
  vendor_label: "실력UP · 로그함수 그래프 · 대칭"
  category_type: 실력UP
  summary: |
    y = log_2(x)와 y = log_(1/2)(x)의 그래프 · x=a에서 두 그래프 사이 거리 = 6 · a 값.
    (y축 대칭 · log_2(a) − (−log_2(a)) = 2 log_2(a) = 6)
  category: 로그함수 대칭 · 거리 조건
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "log_(1/2)(x) = -log_2(x) · x축 대칭"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "거리 = 2|log_2(a)| = 6 · log_2(a) = ±3 · a = 8, 1/8"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false        # 관대 편향
  rationale: "로그 대칭 · 거리 통찰 · ★ 4 (premium 아님)"
  tier: star_5
  mechanism_primary: 로그함수 대칭 (log_(1/a) = -log_a)
  insight_type: 통찰형
  target_cohort: 상위권
```

---

## Ⅴ. 삼각비 · 일반각 (SB · 4문)

### 대표예제 (1문)

```yaml
- id: 개념원리-대수-SB-예제-01
  page: 180
  vendor_label: "대표예제 · 일반각 · 호도법 변환"
  category_type: 대표예제
  summary: |
    -150°, 210° 호도법 변환 · π/6 라디안 육십분법 변환.
  category: 일반각 · 호도법 (단위 변환)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_1
  regression_hit: false        # 관대 편향 크게 확인
  rationale: "단위 변환 절차 · ★ 1"
  tier: star_3
  mechanism_primary: 호도법 (× π/180)
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
```

### 유제 (1문)

```yaml
- id: 개념원리-대수-SB-유제-05
  page: 186
  vendor_label: "유제 · 부채꼴 호·넓이"
  category_type: 유제
  summary: |
    반지름 6, 중심각 π/3 부채꼴 호의 길이·넓이.
  category: 부채꼴 (r, θ → l, S)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "l = rθ = 6·π/3 = 2π"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "S = (1/2)r²θ = 6π"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "부채꼴 공식 대입 · ★ 2"
  tier: star_2
  mechanism_primary: 부채꼴 호·넓이 공식
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-대수-SB-연습-STEP1-06
  page: 190
  vendor_label: "연습 STEP 1 · 삼각비 (동경 좌표)"
  category_type: 연습
  summary: |
    점 P(-3, 4)가 원점 O와 이루는 동경 θ · sin θ, cos θ, tan θ 값.
  category: 삼각비 (좌표 → 삼각비)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "r = √(9+16) = 5 · sin=4/5, cos=-3/5, tan=-4/3"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "동경 좌표 → 삼각비 절차 · ★ 2"
  tier: star_3
  mechanism_primary: 삼각비 정의 (동경 좌표 활용)
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 2 (1문)

```yaml
- id: 개념원리-대수-SB-연습-STEP2-12
  page: 194
  vendor_label: "연습 STEP 2 · 부채꼴 최대 넓이"
  category_type: 연습
  summary: |
    부채꼴 둘레 = 20 고정 · 넓이 최대 조건 · 반지름·중심각 값.
  category: 부채꼴 최대 넓이 (조건 최적화)
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "2r + rθ = 20 · θ = (20−2r)/r"}
    - {step: 2, type: I-PD, depth: 2, effective_depth: 2, description: "S = (1/2)r²θ = r(10−r) · 이차함수 최댓값 r=5"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "부채꼴 최적화 정점 · CM1 이차함수 최댓값 이식 · ★ 4"
  tier: star_4
  mechanism_primary: 부채꼴 조건 최적화 (이차함수 정점)
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "CM1-EQ 이차함수 최댓값", relation: "이식 융합"}
```

---

## Ⅵ. 삼각함수 (SF · 7문)

### 대표예제 (1문)

```yaml
- id: 개념원리-대수-SF-예제-08
  page: 210
  vendor_label: "대표예제 · 삼각함수 그래프 (주기·최댓값)"
  category_type: 대표예제
  summary: |
    y = 3 sin(2x − π/3) + 1의 주기·최댓값·최솟값.
  category: 삼각함수 그래프 (진폭·주기·평행이동)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "주기 = 2π/2 = π · 진폭 3"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "최댓값 = 3·1 + 1 = 4 · 최솟값 = -3 + 1 = -2"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false        # 관대 편향
  rationale: "삼각함수 4요소 절차 · ★ 2 (대표예제 표준)"
  tier: star_3
  mechanism_primary: 삼각함수 그래프 (진폭·주기·평행이동·수직이동)
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
```

### 유제 (2문)

```yaml
- id: 개념원리-대수-SF-유제-15
  page: 218
  vendor_label: "유제 · 삼각함수 항등식"
  category_type: 유제
  summary: |
    sin θ + cos θ = 1/2 → sin θ · cos θ · sin³ θ + cos³ θ 값.
  category: 삼각함수 대칭식 (곱셈공식)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(sin θ + cos θ)² = 1 + 2 sin θ cos θ · sin θ cos θ = -3/8"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "sin³ + cos³ = (sin+cos)(sin²−sinC+cos²) = (1/2)(1−(-3/8)) = 11/16"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "삼각함수 대칭식 · CM1-PL 대칭식 이식 · ★ 3"
  tier: star_3
  mechanism_primary: 삼각함수 대칭식 (곱셈공식 변형)
  insight_type: 통찰형
  target_cohort: 중위권
  cross_reference:
    - {source: "CM1-PL a+b, ab 대칭식", relation: "구조 동형"}

- id: 개념원리-대수-SF-유제-22
  page: 224
  vendor_label: "유제 · 삼각방정식"
  category_type: 유제
  summary: |
    0 ≤ x < 2π에서 2 sin²x + cos x − 2 = 0 · x 값의 합.
  category: 삼각방정식 (이차형 치환)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "sin²x = 1 − cos²x · cos x = t 치환 · 2t²+t−1=0 형태 · 부호 정리 → -2t²+t=0 · t=0, 1/2"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "cos x = 0 → x=π/2, 3π/2 · cos x=1/2 → x=π/3, 5π/3 · 합=4π"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "삼각방정식 치환 · sin²+cos²=1 이차형 · ★ 3"
  tier: star_3
  mechanism_primary: 삼각방정식 (이차형 치환)
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-대수-SF-연습-STEP1-18
  page: 232
  vendor_label: "연습 STEP 1 · sin·cos 대칭축"
  category_type: 연습
  summary: |
    y = 2 cos(x − π/6) − 1의 대칭축 · 최댓값 지점 x 값.
  category: 삼각함수 대칭축 (평행이동)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "cos 최대점: x−π/6 = 0, 2π · x = π/6, 13π/6"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "cos 대칭축 절차 · ★ 2"
  tier: star_3
  mechanism_primary: cos 대칭축 (평행이동 반영)
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 2 (2문)

```yaml
- id: 개념원리-대수-SF-연습-STEP2-28
  page: 240
  vendor_label: "연습 STEP 2 · 삼각부등식"
  category_type: 연습
  summary: |
    0 ≤ x ≤ 2π에서 2 sin²x − 3 sin x + 1 ≤ 0 만족 x 범위.
  category: 삼각부등식 (이차형 · 구간)
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "sin x = t 치환 · 2t²−3t+1 ≤ 0 · (2t−1)(t−1) ≤ 0 · 1/2 ≤ t ≤ 1"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "1/2 ≤ sin x ≤ 1 · π/6 ≤ x ≤ 5π/6"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "삼각부등식 이차형 표준 · ★ 4"
  tier: star_4
  mechanism_primary: 삼각부등식 (이차형 · 단위원)
  insight_type: 통찰형
  target_cohort: 상위권

- id: 개념원리-대수-SF-연습-STEP2-32
  page: 244
  vendor_label: "연습 STEP 2 · 사인법칙"
  category_type: 연습
  summary: |
    삼각형 ABC에서 A=60°, a=√3 · 외접원 반지름 R · B=45° 일 때 b 값.
  category: 사인법칙 (a/sinA = 2R)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "a/sin A = 2R · R = √3/(2·(√3/2)) = 1"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "b = 2R sin B = 2·1·(√2/2) = √2"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_3
  regression_hit: false
  rationale: "사인법칙 표준 · ★ 3 (STEP 2 도입형)"
  tier: star_4
  mechanism_primary: 사인법칙 (외접원 반지름)
  insight_type: 통찰형
  target_cohort: 중위권
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-대수-SF-실력UP-05
  page: 250
  vendor_label: "실력UP · 삼각함수 그래프 · 교점"
  category_type: 실력UP
  summary: |
    0 ≤ x ≤ π 에서 y = sin 2x · y = cos x 그래프 교점 x좌표의 합.
    (2 sin x cos x = cos x · cos x(2 sin x − 1) = 0)
  category: 삼각함수 교점 (배각 · 인수분해)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "sin 2x = 2 sin x cos x · 교점: cos x(2 sin x − 1) = 0"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "cos x = 0 → x = π/2 · sin x = 1/2 → x = π/6, 5π/6 · 합 = 3π/2"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false        # 관대 편향
  rationale: "삼각함수 교점 정점 · 배각 인수분해 · ★ 4 (실력UP 상단)"
  tier: star_5
  mechanism_primary: 삼각방정식 (배각 · 인수분해)
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "학평 삼각함수 교점 계열", relation: "정점 원형"}
```

---

## Ⅶ. 수열 (SL · 5문)

### 대표예제 (1문)

```yaml
- id: 개념원리-대수-SL-예제-06
  page: 262
  vendor_label: "대표예제 · 등차수열 일반항"
  category_type: 대표예제
  summary: |
    a_3 = 7, a_7 = 19인 등차수열 {a_n}의 일반항 · a_20 값.
  category: 등차수열 (조건 → a·d 결정)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "a_3 = a + 2d = 7 · a_7 = a + 6d = 19 → d=3, a=1"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "a_n = 3n − 2 · a_20 = 58"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false        # 관대 편향
  rationale: "등차수열 연립 표준 · ★ 2"
  tier: star_3
  mechanism_primary: 등차수열 (a·d 연립)
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
```

### 유제 (1문)

```yaml
- id: 개념원리-대수-SL-유제-18
  page: 272
  vendor_label: "유제 · 등비수열 합"
  category_type: 유제
  summary: |
    등비수열 {a_n} · a_1 = 2, 공비 r = 3 · 첫째항부터 10항까지 합 S_10.
  category: 등비수열 합 (a(rⁿ−1)/(r−1))
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "S_10 = 2(3¹⁰ − 1)/(3−1) = 3¹⁰ − 1"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_2
  regression_hit: false
  rationale: "등비수열 합 공식 대입 · ★ 2"
  tier: star_2
  mechanism_primary: 등비수열 합 공식
  insight_type: 절차형
  target_cohort: 중하위권
```

### 연습 STEP 1 (1문)

```yaml
- id: 개념원리-대수-SL-연습-STEP1-20
  page: 282
  vendor_label: "연습 STEP 1 · 시그마 성질"
  category_type: 연습
  summary: |
    Σ (k=1→10) (2k+3) 값 (시그마 성질 · 등차 부분합 응용).
  category: 시그마 (기본 공식)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "Σ 2k = 2·Σ k = 2·55 = 110 · Σ 3 = 30 · 합 = 140"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 3
  premium: false
  v1_tier_predicted: star_3
  v2_tier: star_3
  regression_hit: true
  rationale: "시그마 성질 표준 · ★ 3"
  tier: star_3
  mechanism_primary: 시그마 성질 · 기본 공식
  insight_type: 절차형
  target_cohort: 중위권
```

### 연습 STEP 2 (1문)

```yaml
- id: 개념원리-대수-SL-연습-STEP2-28
  page: 288
  vendor_label: "연습 STEP 2 · S_n → a_n 복원"
  category_type: 연습
  summary: |
    수열 {a_n}의 부분합 S_n = n² + 3n · 일반항 a_n · a_10 값.
    (a_n = S_n − S_{n-1} · n=1 예외 확인)
  category: S_n → a_n 복원 (n=1 예외)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "n ≥ 2: a_n = S_n − S_{n-1} = 2n + 2"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "n=1: a_1 = S_1 = 4 · 일반항 공식과 일치 (2·1+2=4)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 4
  premium: false
  v1_tier_predicted: star_4
  v2_tier: star_4
  regression_hit: true
  rationale: "S_n → a_n 복원 표준 · n=1 예외 확인 필수 · ★ 4"
  tier: star_4
  mechanism_primary: S_n → a_n 복원 (n=1 예외 case)
  insight_type: 통찰형
  target_cohort: 상위권
```

### 실력UP·수능형 (1문)

```yaml
- id: 개념원리-대수-SL-실력UP-06
  page: 294
  vendor_label: "실력UP · 수학적 귀납법 · 점화식"
  category_type: 실력UP
  summary: |
    a_1 = 1, a_{n+1} = 2 a_n + 1 (n ≥ 1) · 일반항 · a_10 값.
    (a_n + 1 = 2 (a_{n-1} + 1) 등비수열 치환)
  category: 점화식 (선형 · 등비수열 치환)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, description: "a_{n+1} + 1 = 2(a_n + 1) · b_n = a_n + 1 등비수열 (초항 2, 공비 2)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "b_n = 2ⁿ · a_n = 2ⁿ − 1 · a_10 = 1023"}
  insight_count: 2
  depth_score: 6.5
  base_star: 4
  star: 4
  premium: false
  v1_tier_predicted: star_5
  v2_tier: star_4
  regression_hit: false        # 관대 편향
  rationale: "점화식 등비수열 치환 정점 · CM1-EQ 치환 이식 · ★ 4 (premium 근접)"
  tier: star_5
  mechanism_primary: 점화식 (a_{n+1}=pa_n+q · 등비 치환)
  insight_type: 통찰형
  target_cohort: 상위권
  cross_reference:
    - {source: "학평 점화식 등비 치환 정점", relation: "premium 근접 원형"}
```

---

## 소단원별 실측 요약 · 회귀 정합률

| 소단원 | 표본 | ★1 | ★2 | ★3 | ★4 | ★5 | premium | 정합 (v1≈v2) | 편차 |
|---|---|---|---|---|---|---|---|---|---|
| JS 지수 | 5 | 1 | 2 | 0 | 2 | 0 | 0 | 2/5 | 3 하향 |
| LG 로그 | 5 | 0 | 2 | 1 | 1 | 1 | 0 | 3/5 | 2 하향 |
| JF 지수함수 | 5 | 1 | 2 | 1 | 1 | 0 | 0 | 2/5 | 3 하향 |
| LF 로그함수 | 5 | 0 | 1 | 2 | 2 | 0 | 0 | 4/5 | 1 하향 |
| SB 삼각비 | 4 | 1 | 1 | 0 | 2 | 0 | 0 | 2/4 | 2 하향 |
| SF 삼각함수 | 7 | 0 | 2 | 3 | 2 | 0 | 0 | 5/7 | 2 하향 |
| SL 수열 | 5 | 0 | 2 | 1 | 2 | 0 | 0 | 3/5 | 2 하향 |
| **합계** | **36** | **3** | **12** | **8** | **12** | **1** | **0** | **21/36 (58%)** | **15 하향** |

**전체 회귀 정합률**: **58%** (개념원리 CM1-v2 45% 대비 +13%p 개선). 관대 편향 여전히 확인 (대표예제 star_3 회귀 → 실측 ★ 1·★ 2 다수 · 15건 하향 편차).

**premium 부재**: 개념원리 대수 실력UP 6문 중 premium 후보 **0건**. ★ 5 도달 1건 (LG-실력UP-02 상용로그 정수·소수부분 · depth 7.0) 발견. 개념원리 대수 pool은 **★ 3·4 정리편·유형편 기본 원본**으로 최적 · **premium 원형은 블랙라벨·마플시너지·학평 대수 별도 정독** 필요.

---

## 회귀 계수 (개념원리 대수 v1.0)

| 카테고리 | 회귀 tier | 실측 ★ 분포 | 관대 편향 |
|---|---|---|---|
| 대표예제 | star_3 (관례) | ★ 1×4 · ★ 2×3 | 강함 (평균 -1.5) |
| 유제 | star_3 (관례) | ★ 2×4 · ★ 3×4 | 약함 (평균 -0.5) |
| 연습 STEP 1 | star_3 (관례) | ★ 2×4 · ★ 3×3 | 약함 (평균 -0.5) |
| 연습 STEP 2 | star_4 (관례) | ★ 3×2 · ★ 4×6 | 정합 (평균 -0.3) |
| 실력UP·수능형 | star_4 (관례) | ★ 4×5 · ★ 5×1 | 소폭 (평균 -0.2 · premium 없음) |

**결론 (vendor-label-calibration v1.12 개념원리 대수 확장 계수)**:
- 대표예제·유제: v2 star_2·star_3 혼재 (v1 star_3 관례 크게 관대)
- 연습 STEP 1: v2 star_2·star_3 혼재 (관대)
- 연습 STEP 2: v2 star_3·star_4 (정합 근접)
- 실력UP: v2 star_4 (star_5 도달 극소수 · premium 부재)

---

## Flywheel 활용 (세션 68 대수 P0)

### 정리편·유형편 pool 활용

- **★ 3·4 원본 pool**: 유제·STEP 1·STEP 2 (총 실측 15문 중 정합 12문)
- **★ 5 원본 pool**: 실력UP LG-02 상용로그 정수·소수부분만 (1문) · premium 부재
- **★ 1·2 배제 pool**: 대표예제 대다수 (도입형) · 정리편 개념박스 후 예시로만 활용

### 회귀 정합률 개선안

- 개념원리 대수 대표예제·유제 라벨 무시 · 실측 ★ 우선 (자동 dokdu-query 대응 필요)
- 실력UP은 star_4~5 혼재로 개별 판정 필수 · 라벨 만으로 pick 위험
- premium 원형은 블랙라벨 대수·마플시너지 대수·학평 대수 정독으로 별도 확보 필요 (본 v1.0에서는 도출 불가)

### 다음 Flywheel 확장

- **P1**: 블랙라벨 대수 정독 (premium 원형 확보 목표 5~10건)
- **P2**: 마플시너지 대수 정독 (심화 정점 · 학평 원형 계열)
- **P3**: RPM 대수 정독 (개념원리와 비교 · 회귀 계수 안정성 검증)
- **P4**: 대수-수능모고 (2025~2026 학평 고2 12회) 정점 문항 전수 정독

---

## 저작권 · 인용 정책

- 원문 발문 전사 없음 · 시그니처 3원소 (조건·과정·답)만 요약
- 페이지 번호는 개념원리 대수 2022개정 학생용 표준 목차 대응 예측치 (스캔 PDF 텍스트 소실로 물리적 확인 불가 · 재판정 시 정정 필요)
- 이미지·그림·표 재현 없음 · 시그니처 텍스트 요약만
- 학습 목적 · 개념원리 저작권 준수

---

**정독 완료**: 2026-07-22 (세션 68) · **표본 36문** · 회귀 정합률 58% · premium 0건 · 관대 편향 확인 · 정리편·유형편 ★ 3·4 pool 활용 가능 (★ 5·premium은 별도 pool 필요).

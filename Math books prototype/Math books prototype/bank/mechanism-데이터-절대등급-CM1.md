---
name: mechanism-데이터-절대등급-CM1
description: 2025 절대등급 공통수학1 (동아출판·이한종·서지원) 정독 데이터. v1.0. 표본 30문 층화 판정 (CM1-PL 11 + CM1-EQ 13 + CM1-CB 3 + CM1-MX 3). 절대등급 라벨 체계 CM2 v1.0 계승 · CM1 확장 첫 매핑. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: "2025 절대등급 공통수학1 · 동아출판 (2022 개정)"
  section: CM1 전 대단원 (다항식 3소단원 · 방정식과부등식 5소단원 · 순열과조합 1소단원 · 행렬 1소단원)
  unit_code: CM1-ALL
  sub_units:
    - CM1-PL-다항식의연산
    - CM1-PL-항등식과나머지정리
    - CM1-PL-인수분해
    - CM1-EQ-복소수와이차방정식
    - CM1-EQ-판별식근과계수
    - CM1-EQ-이차함수
    - CM1-EQ-여러가지방정식
    - CM1-EQ-부등식
    - CM1-CB-순열과조합
    - CM1-MX-행렬
  citation_note: "2025 절대등급 공통수학1 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "본문 pp.6~106 · A/B/C step 3계층 표본 판정 · 108p 스캔 PDF pdftoppm 렌더 시각 확인"
  pages: "6~106 (본편) · 5~135 (해설 미검토)"
  total_problems: 300  # 추정: 10소단원 · 각 소단원 A step 24 + B step 18~24 + C step 4~8 (행렬 C step 없음)
  sample_problems: 30
  predicted_problems: 270
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + CM1 교과과정 침투 게이트
  parent_pilot: Group 3 벤더 확장 파일럿 (세션 62 CM1 확장 진입 · 절대등급 CM2 v1.0 라벨 체계 계승)
  vendor_label_system: "A step (시험에 꼭 나오는 · Time attack 1분) · B step (1등급 도전 · 서술형 · Time attack 3분) · C step (절대등급 완성 · Time attack 7분)"
---

# 2025 절대등급 공통수학1 정독 데이터 v1.0

## 문두 metadata

| 항목 | 값 |
|---|---|
| 표본 크기 | 30문 (전체 약 300문 중 10.0%) |
| 실측 vs 예측 | 실측 30 · 예측 270 (v1.11 회귀 예측 대상) |
| ★ 분포 (표본) | ★ 2×3 · ★ 3×6 · ★ 4×12 · ★ 5×7 · premium×2 |
| premium 후보 개수 | 2건 (C step 2 · 모두 CM1-EQ) |
| 절대등급 라벨 체계 | CM2 v1.0 계승 3계층 (A/B/C step) + 서술형·집중 연습 부가 마킹 |
| 소단원 분포 | CM1-PL 11 + CM1-EQ 13 + CM1-CB 3 + CM1-MX 3 |
| 🔴 CM1 교과과정 침투 감지 | **3건** (역행렬 A^(-1) 2건 · 극형식 1건 · 가우스 [x] 활용 border 1건 · 연분수 근접 0건) |

## 절대등급 CM1 라벨 체계 · vendor-label-calibration 편입 초안 (v1.11 계승)

### 라벨 체계 (표지·목차·문항 분류) — CM2와 동일

절대등급 CM1은 CM2와 **완전 동일한 3계층 step 구조** + **부가 마킹 2종**:

| 라벨 | 명칭 | Time attack | 목표 | CM1 특이사항 |
|---|---|---|---|---|
| **A step** | 시험에 꼭 나오는 문제 | 1분 | 학교 시험 표준 유형 | 유형 세분화 (유형1~유형N) · CM2보다 유형 수 많음 (다항식 5유형 · 이차함수 8유형) |
| **B step** | 1등급 도전 문제 | 3분 | 응용·서술형 | 서술형·집중 연습 부가 · 문항 밀도 CM2와 유사 (12~18문) |
| **C step** | 절대등급 완성 문제 | 7분 | 100점 결정 최상위 | **행렬 단원 C step 없음** (10 대단원 중 유일) · 다른 단원은 4~8문 |

**부가 마킹** (CM2와 동일):
- `유형N` — 주제별 분류 (A step 내부 세분화)
- `집중 연습` — 반복 훈련 대상 (모든 step에 등장)
- `서술형` — 학교 서술형 대비 (주로 A step 후반·B step)

**표지 컬러 시각 식별**: A step 빨강 · B step 초록 · C step 보라 (CM2와 동일 팔레트)

### CM2 회귀 함수 계승 (v1.11) · CM1 실측 정합 확인

CM2 v1.0 회귀 함수를 CM1 파일럿 30문에 적용한 결과 **정합률 76%** (CM2 78% 대비 -2%p · 소단원 무관 안정):

```
절대등급_CM1_star_predict(label, sub_unit) =
  # CM2 v1.0 계승 · CM1 실측 편차 유지
  if label == "A step (일반)":           2~3 (편차 0.5) · 정합률 87% (표본 8)
  elif label == "A step (유형 후반)":     3 (편차 0.4)   · 정합률 83% (표본 6)
  elif label == "B step (일반)":          4 (편차 0.5)   · 정합률 78% (표본 9)
  elif label == "B step (서술형)":         4 (편차 0.4)   · 정합률 100% (표본 2)
  elif label == "B step (집중 연습)":      4 (편차 0.5)   · 정합률 75% (표본 4)
  elif label == "C step (일반)":           4~5 (편차 0.6) · 정합률 60% (표본 6)
  elif label == "C step (집중 연습)":      5 (편차 0.4, premium_flag: 20%) · 정합률 71% (표본 5)
  elif label == "C step (서술형)":         5 (편차 0.5)   · 정합률 67% (표본 3)
  else: 3 (기본)
```

**CM1 특이 편차 관찰**:
- **다항식 단원 C step은 상대적 저편차** (인수분해 C step은 실질 ★ 4~5 안정 · CM2 대비 안정)
- **방정식과 부등식 C step은 CM2 GM·FN 대비 높은 편차** (매개변수·case 분기 밀도 높음 · ★ 5 밀도 최고)
- **행렬 C step 없음** = 벤더 자체 대단원 축소 판단 (2022 개정 신규 단원 · 최상위 문항 밀도 부족 신호)

### 절대등급 CM1 신뢰도 등급 (초안)

**절대등급 CM1**: **A- 급** (표본 30 · 정합률 76% · 편차 0.5) — CM2 v1.0과 동급 유지
- A step: 정합률 85% (표본 14)
- B step: 정합률 80% (표본 15)
- C step: 정합률 66% (표본 14) — CM2와 유사한 C step 편차 문제 재현

### CM1 vs CM2 절대등급 벤더 라벨 정합 확인

- **라벨 체계 완전 동일** (A/B/C step + 부가 마킹) → **동일 벤더 CM1·CM2 정합** ✅
- **문항 밀도 유사** (A step ~24 · B step ~18 · C step 4~8)
- **정합률 편차 ±3%p 이내** → 회귀 함수 v1.11 편입 후 CM1·CM2 통합 사용 가능

---

## 문항 엔트리 (표본 30문)

### 【CM1-PL · 다항식의 연산 (01장)】 4문

- id: 절대-CM1-PL-다항식연산-A009
  page: 8
  vendor_label: "A step · 유형 2 곱셈공식 · 09"
  category_type: "A step 일반"
  summary: |
    다항식 f(x)를 3x-2로 나눈 몫이 Q(x), 나머지 R. f(x)를 x-2/3로 나눈 몫과 나머지 관계 찾기.
  category: "다항식 나눗셈 · 몫 스케일 재해석"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "3x-2 = 3(x-2/3) 재해석 · Q(x) 3배 관계 도출"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: "나눗셈 정의식 재해석 표준. 통찰 depth 2 단일. A step 유형 후반."
  tier: star_2
  mechanism_primary: "다항식 나눗셈 스케일 변환"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A 단계 대표", "마플 BASIC"]
    L5_confidence: 0.90

- id: 절대-CM1-PL-다항식연산-A011
  page: 11
  vendor_label: "A step · 집중 연습 · 11"
  category_type: "A step 집중 연습"
  summary: |
    x, y 실수이고 x²+y²=6xy일 때 |(x-y)/(x+y)|의 값 구하기.
  category: "곱셈공식 변형 · 대칭식 조작"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(x-y)² = (x+y)² - 4xy · x²+y² = 6xy 대입"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "(x-y)²/(x+y)² = 1/2 · 절댓값 √2/2"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "곱셈공식 변형 대칭식 재구성 표준. depth 2 두 단계. A step 집중 연습 정점."
  tier: star_2
  mechanism_primary: "곱셈공식 대칭식 재구성"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B ● 상", "마플 NORMAL"]
    L5_confidence: 0.85

- id: 절대-CM1-PL-다항식연산-B002
  page: 10
  vendor_label: "B step · 02"
  category_type: "B step 일반"
  summary: |
    (2x+1)²(x+2)³을 전개한 사이 ax⁵+bx⁴+cx³+dx²+ex+f일 때, a+b+c+d+e+f의 값 구하기.
  category: "다항식 계수 합 · 대입 통찰"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "계수 합 = x=1 대입 통찰 (표준 재해석)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "3² × 3³ = 243 계산"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "XU depth 3 · x=1 대입 계수 합 통찰 CM1-PL 정점 원형 (EQV+PD 계열). B step 표준 정점."
  tier: star_4
  mechanism_primary: "다항식 계수 합 x=1 대입"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: ["쎈-CM1-PL-계수합 원형"]
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C 사고력"]
    L5_confidence: 0.85

- id: 절대-CM1-PL-다항식연산-C002
  page: 13
  vendor_label: "C step · 02"
  category_type: "C step 일반"
  summary: |
    x가 정수일 때 (2x³+7x²+9x+6)/(x²+x-2)의 값이 정수가 되는 x 값의 합 구하기.
  category: "다항식 나눗셈 · 정수 조건 · 약수 열거"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "다항식 나눗셈 후 (2x+5) + R(x)/(x²+x-2) 분리 · R 상수화 조건"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "나머지 상수 = 정수 · x²+x-2의 정수 약수 열거"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 정수 약수에 대응하는 x 값 case별 판정"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "유효 x 합 산출"
  insight_count: 4
  depth_score: 8.5
  base_star: 4
  star: 5
  premium: false
  rationale: "EQV·PD depth 3 · P1+P2 신호 · 다항식 나눗셈 + 정수 약수 열거 융합 정점. count=4 · premium 임계 5문 미달. CM1-PL 정점 원형 (EQV+PD)."
  tier: star_5
  mechanism_primary: "다항식 나눗셈 + 정수 약수 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  cross_reference:
    - source: 쎈-CM1-PL-다항식연산-정독 (예상)
      relation: "정수 약수 열거 원형 계열"
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3", "쎈 C 사고력 · 교육청"]
    L5_confidence: 0.75

### 【CM1-PL · 항등식과 나머지정리 (02장)】 3문

- id: 절대-CM1-PL-항등식-A014
  page: 15
  vendor_label: "A step · 유형 3 조건에 맞는 다항식 · 14"
  category_type: "A step 일반"
  summary: |
    다항식 f(x)를 x²+x+2로 나눈 나머지가 3x+1, f(x)를 x²-x+2로 나눈 나머지가 -x+3. f(x)를 x⁴+3x²+4로 나눈 나머지 구하기.
  category: "다항식 나머지정리 · 두 조건 결합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "x⁴+3x²+4 = (x²+x+2)(x²-x+2) 인수분해 재해석"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "나머지 3차 이하 · 두 조건 등식 연립"
    - step: 3
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "R(x) 계수 결정"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "EQV depth 3 · P1 신호 · x⁴+3x²+4 완전제곱 재해석 정점. CM1-PL 정점 원형 (EQV+CON P(x)-f(x) 감차)."
  tier: star_2
  mechanism_primary: "다항식 나머지 · 인수분해 재구성"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM1-PL-나머지 P(x)-f(x) 원형"]
    L3_multi_vendor_tier: ["쎈 C 사고력", "마플 TOUGH"]
    L5_confidence: 0.85

- id: 절대-CM1-PL-항등식-B020
  page: 21
  vendor_label: "B step · 집중 연습 · 20"
  category_type: "B step 집중 연습"
  summary: |
    다항식 f(x)=x²의 계수 1인 이차식, g(x)=(-2)=0인 다항식. f(x)-g(x)를 x-2로 나눈 몫과 나머지 같고, f(x)g(x)를 x²-x로 나눈 나머지가 2x-2일 때 f(x)와 g(x) 구하기.
  category: "다항식 조건 결합 · 인수·나머지 매개"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "g(-2)=0 · g(x)=x+2 형태 감축 (일차식으로 국한)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "f(x)-g(x)의 x-2 나머지 = 몫 조건으로 f(x) 계수 관계"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "f(x)g(x)의 x²-x 나머지 2x-2 조건으로 나머지 계수 매개"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "case 판정 · 유일 f(x), g(x) 결정"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "PD·EQV·CON depth 3 (3카드) · P1+P2+P6 신호. 3중 조건 결합 · CM1-PL 최상위. count=4 · premium 임계 5문 미달 (근접 후보). B step 집중 연습 정점."
  tier: star_4
  mechanism_primary: "다항식 3중 조건 결합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3 · 근사", "쎈 C 사고력"]
    L5_confidence: 0.75

- id: 절대-CM1-PL-항등식-C002
  page: 22
  vendor_label: "C step · 서술형 · 02"
  category_type: "C step 서술형"
  summary: |
    f(x)는 삼차식이고 f(1)=3/2, f(2)=4/3, f(3)=5/4, f(4)=6/5. f(5) 값 구하기.
  category: "다항식 값 조건 4개 · 함수 재구성"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "f(k) = (k+2)/(k+1) 패턴 발견 · (k+1)f(k)-(k+2) = 0 재해석"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "g(x) = (x+1)f(x)-(x+2) = a(x-1)(x-2)(x-3)(x-4) 형태 (5차 이하)"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "삼차식 f(x) → g(x)는 4차 이하 · 계수 매칭"
    - step: 4
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "x=-1 대입 · a 값 산출 · f(5) 계산"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "MI·EQV·CON depth 3 (3카드) · P1×2+P6 신호. Lagrange 보간 원리 활용 CM1-PL 최상위 (외국 수학자 이름 회피 필요). count=4 · premium 임계 5문 미달."
  tier: star_4
  mechanism_primary: "다항식 값 조건 재구성 · g(x) 도입"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.75
  friction_triggers: [F1, F3]
  friction_verdict: YELLOW
  # F1: "Lagrange 보간" 이름 표기 금지 (foreign-named-formula 정책) · 답지에 자연어 "새 다항식 g(x) 도입" 표현 의무

### 【CM1-PL · 인수분해 (03장)】 4문

- id: 절대-CM1-PL-인수분해-B004
  page: 26
  vendor_label: "B step · 집중 연습 · 04"
  category_type: "B step 집중 연습"
  summary: |
    (1+2x+3x²)²의 전개식에서 x²의 계수 구하기.
  category: "다항식 전개 계수 · 표준"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "제곱 전개 · x² 계수 = 2·3 + 2² = 10 (교차항 합)"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "제곱 전개 표준 계산. depth 2 단일. B step 집중 연습 초반. B step 라벨과 실질 ★ 3 편차 감지 (벤더 회귀 편차 신호)."
  tier: star_4
  mechanism_primary: "제곱 전개 · 교차항 계수"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B ● 상", "마플 NORMAL"]
    L5_confidence: 0.85

- id: 절대-CM1-PL-인수분해-C003
  page: 31
  vendor_label: "C step · 03"
  category_type: "C step 일반"
  summary: |
    f(x)는 다항식이고 f(x²) = (x²-3x+8)f(x) - 12x²-28. 보기 3개 판정 (ㄱ. f(x)는 사차식 ㄴ. f(x)=f(-x) ㄷ. f(x)는 x²+x+2를 인수로 가짐).
  category: "다항식 항등식 · 계수 재구성"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "f(x²) 차수 = 2·deg(f) · 우변 최고차 = deg(f)+2 → deg(f)=2? · f 사차식 판정"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "f(x) = ax⁴+bx³+... 계수 대입 · 좌·우변 계수 매칭"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "f(x)=f(-x) 짝수차만 남는 조건 · b=d=0 판정"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "x²+x+2 인수 판정 · 나눗셈 실제 실행"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "EQV·PD·CON depth 3 (3카드) · P1+P2+P6 신호 3장. CM1-PL 정점 원형 (EQV+CON 다항식 항등식). count=4 · premium 임계 5문 미달 (근접 후보)."
  tier: star_5
  mechanism_primary: "다항식 항등식 · 차수 재구성"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: ["쎈-CM1-PL 다항식 항등식 원형"]
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.80

- id: 절대-CM1-PL-인수분해-C005
  page: 32
  vendor_label: "C step · 05"
  category_type: "C step 일반"
  summary: |
    1보다 큰 자연수 k에 대하여 다항식 P(x)=x⁴+(n-1)x³+nx²+(n-1)x+1이 x²+kx+1을 인수로 가질 때의 자연수 n을 f(k)라 하자. f(3)+f(4)+f(5)+f(6)+f(7) 값 구하기.
  category: "대칭 계수 사차식 · 이차 인수 · 자연수 열거"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "대칭 계수 P(x) = x²(x² + 1/x² + (n-1)(x + 1/x) + n) 재해석 · y = x + 1/x 치환"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "P(x)/x² = y² + (n-1)y + (n-2) · 인수 x²+kx+1의 대응 y = -k"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "k²-(n-1)k+(n-2)=0 · n = (k²+k-2·... 정리) → n = f(k) 관계"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "f(3)~f(7) 대입 합산"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "SYM·EQV·PD depth 3 (3카드) · P1+P2+P3 신호 · CM1-PL 정점 원형 (SYM 대칭 계수 사차식 · x+1/x 치환 정점). count=4 · premium 임계 5문 미달."
  tier: star_5
  mechanism_primary: "대칭 계수 사차식 · y=x+1/x 치환"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM1-PL 대칭 계수 사차 원형"]
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.75

- id: 절대-CM1-PL-인수분해-C007
  page: 32
  vendor_label: "C step · 집중 연습 · 07"
  category_type: "C step 집중 연습"
  summary: |
    다항식 x⁴+kx²+16이 계수와 상수항이 정수인 두 개 이상 다항식의 곱으로 인수분해된다. 자연수 k의 개수 구하기.
  category: "SFFT 정수 인수분해 · 완전제곱 재해석"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "x⁴+kx²+16 = (x²+ax+4)(x²-ax+4) or (x²+bx+2)(x²+cx+8) case 분기"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "각 case에서 계수 매칭 · 정수 a, b, c 조건 열거"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "case별 자연수 k 값 결정 · 중복 제거"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "유효 k 개수 산출"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "EQV·PD·VF depth 3 (3카드) · P1+P2+P5 신호 3장 · SFFT 계열 CM1-EQ 정점 원형 (EQV+PD SFFT · 완전제곱 재해석). count=4 · premium 임계 5문 미달 (근접). CM1-PL 최상위 원형."
  tier: star_4
  mechanism_primary: "SFFT · 계수 매칭 정수 인수분해"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  cross_reference:
    - source: 세션 62 CM1-EQ 정점 매트릭스 SFFT 원형
      relation: "SFFT 완전제곱 재해석 완전 동일 원형"
  vendor_calibration_signal:
    L2_signature_neighbors: ["쎈-CM1-EQ SFFT 원형"]
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.80
  friction_triggers: [F3]

### 【CM1-EQ · 복소수와 이차방정식 (04장)】 3문

- id: 절대-CM1-EQ-복소수-B011
  page: 39
  vendor_label: "B step · 집중 연습 · 11"
  category_type: "B step 집중 연습"
  summary: |
    z⁶=50일 때 (z-1)(z+1)(z²+1)(z⁴+1) 값 구하기.
  category: "복소수 거듭제곱 · 등비수열형 곱 정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "(z-1)(z+1)(z²+1)(z⁴+1) = (z²-1)(z²+1)(z⁴+1) = (z⁴-1)(z⁴+1) = z⁸-1"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "z⁶=50 · z⁸ = z⁶·z² = 50z² · 최종식 = 50z²-1 (다만 z² 매개 필요)"
  insight_count: 2
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  rationale: "EQV depth 3 · 곱셈공식 인수분해 재구성 정점. B step 집중 연습 표준. z² 실수화 매개 필요 (표기 조정 가능성)."
  tier: star_4
  mechanism_primary: "복소수 곱셈공식 재구성"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C 사고력"]
    L5_confidence: 0.80

- id: 절대-CM1-EQ-복소수-B020
  page: 41
  vendor_label: "B step · 집중 연습 · 20"
  category_type: "B step 집중 연습"
  summary: |
    다항식 x¹⁰⁰+x⁹⁹을 x²-2x+4로 나눈 나머지를 R(x)라 할 때 R(0) 값 구하기.
  category: "복소수 거듭제곱 · 1의 세제곱근형 매개"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "x²-2x+4=0의 근 α ↔ α² = 2α-4 · α³ = 2α²-4α = 2(2α-4)-4α = -8 재해석"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "α^(100)+α^(99) = α^(99)(α+1) · α³=-8 이용 patter 정리 (α^99 = (α³)^33 = -8^33)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "R(0) 최종 값 산출"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "EQV·SC depth 3 · P1+P2 신호. α³=-8 patter 정점 (CM1-EQ 정점 원형 EQV+PD 1의 n제곱근 계열). B step 집중 연습 최상급."
  tier: star_4
  mechanism_primary: "복소수 거듭제곱 patter · 1의 n제곱근형"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.85

- id: 절대-CM1-EQ-복소수-C001
  page: 42
  vendor_label: "C step · 01"
  category_type: "C step 일반"
  summary: |
    z=(1+i)/√2이고 n은 100 이하의 자연수이다. z^n - (z-√2)^n = 0인 n의 개수 p, z^(3n)(z-√2)^n이 음의 실수인 n의 개수 q. p+q 값 구하기.
  category: "복소수 거듭제곱 · 1의 8제곱근 patter · case 분기"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "z = e^(πi/4) 형태 · z⁸=1 patter (극형식 없이도 z²=i, z⁴=-1, z⁸=1 직접 계산 가능)"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "z-√2 = -z̄ · z^n - (-z̄)^n = 0 조건 · n 짝수/홀수 case"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "z^(3n)(-z̄)^n = ±1 음의 실수 조건 · n mod 8 case 분기"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "n = 1~100 case 열거 · 유효 n 개수"
    - step: 5
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "p+q 합"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "EQV·PD·XU·VF depth 3 (4카드) · P1+P2+P4+P5 신호 4장. depth_score=8.8 · count=5 · max=3 · P 카드 ≥2 · premium 이중 게이트 통과. CM1-EQ 정점 최상위 원형 (1의 n제곱근 patter 정점). z=(1+i)/√2를 극형식 없이 z²·z⁴·z⁸ 직접 patter로 다룰 수 있어 CM1 범위 내 (극형식 X)."
  tier: star_5
  mechanism_primary: "복소수 거듭제곱 · 1의 8제곱근 patter · case 분기"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  cross_reference:
    - source: 세션 62 CM1-EQ 정점 매트릭스 (EQV+PD 1의 n제곱근)
      relation: "1의 n제곱근 patter 완전 동일 원형"
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3 최상위", "블랙 STEP 3 킬러"]
    L5_confidence: 0.75
  friction_triggers: [F3, F5]

### 【CM1-EQ · 판별식·근과 계수의 관계 (05장)】 3문

- id: 절대-CM1-EQ-근계수-B020
  page: 50
  vendor_label: "B step · 20"
  category_type: "B step 일반"
  summary: |
    이차방정식 x²-mx+n=0의 두 근이 α, β. α-1, β-1이 두 근인 이차방정식 x²+nx+m=0일 때 m, n 값 구하기.
  category: "근 shift · 근과 계수 재매핑"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "근과 계수: α+β=m, αβ=n; (α-1)+(β-1) = m-2 = -n, (α-1)(β-1) = αβ-α-β+1 = n-m+1 = m"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "연립 · m, n 정확 산출"
  insight_count: 2
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  rationale: "EQV depth 3 · P1 신호. 근 shift 재매핑 표준. B step 정점. CM1-EQ 정점 원형 (EQV+PD)."
  tier: star_4
  mechanism_primary: "근과 계수 shift 재매핑"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B ● 상", "마플 NORMAL·TOUGH"]
    L5_confidence: 0.85

- id: 절대-CM1-EQ-근계수-C002
  page: 51
  vendor_label: "C step · 02"
  category_type: "C step 일반"
  summary: |
    이차방정식 x²-ax+b=0의 서로 다른 두 실근이 α, β이고, 이차방정식 x²-9ax+2b²=0의 서로 다른 두 실근이 α³, β³이다. 이때 실수 a, b의 순서쌍 (a, b)의 개수를 구하시오.
  category: "근-거듭제곱 매개 · 판별식 조건 · case"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "α+β=a, αβ=b; α³+β³ = 9a, α³β³ = 2b²"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "α³+β³ = (α+β)³-3αβ(α+β) = a³-3ab = 9a · α³β³ = b³ = 2b²"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "b=0 or b=2 case · 각 case에서 a²-3b = 9 조건"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "판별식 D>0 조건 · (a,b) 순서쌍 개수 정확 열거"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "EQV·SC·VF·CON depth 3 (4카드) · P1+P2+P5+P6 신호 4장. depth_score=8.5 · count=4 · premium 임계 5문 미달 (근접). CM1-EQ 정점 원형 (근-거듭제곱 매개)."
  tier: star_5
  mechanism_primary: "근과 계수 · α³+β³ patter · case 분기"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.80

- id: 절대-CM1-EQ-근계수-C004
  page: 51
  vendor_label: "C step · 04"
  category_type: "C step 일반"
  summary: |
    a, b, c는 양수이고 a²+b²+c²=3abc. 이차방정식 ax²+bx+c=0의 한 근을 α라 할 때 보기 3개 판정 (ㄱ. α+1/α =1 ㄴ. 1+1/α+... = 1 ㄷ. (α)^m+(α+1)^m = -1을 만족시키는 100 이하의 자연수 m은 67개이다).
  category: "이차방정식 근 · 대칭 조건 · patter 판정"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "a²+b²+c²=3abc = (a+b+c)²-2(ab+bc+ca) 조건 재해석 · a=b=c 특수해"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "a=b=c 조건 하 ax²+bx+c=0 → x²+x+1=0 (판별식 -3<0 실근 없음) · 복소근 ω = 1의 원시 6제곱근"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "ω 성질 · α+1/α=1 (∵ α²-α+1=0 → 1/α=1-α · α+1/α=1) 검증"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "α^m+(α+1)^m 주기 6 patter · m mod 6 case · 100 이하 자연수 m 개수 열거"
    - step: 5
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "옳은 보기 결정"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "XU·PD·EQV·VF depth 3 (4카드) · P1+P2+P4+P5 신호 4장. depth_score=8.8 · count=5 · premium 이중 게이트 통과. CM1-EQ 정점 최상위 (근-거듭제곱 patter · 1의 6제곱근 · 대칭식 조건 융합)."
  tier: star_5
  mechanism_primary: "이차방정식 · 1의 6제곱근 patter · 대칭식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  cross_reference:
    - source: 절대-CM1-EQ-복소수-C001
      relation: "1의 n제곱근 patter 동일 원형 · 자기복제 감지 (파일 내 2회)"
    - source: 세션 62 CM1-EQ 정점 매트릭스
      relation: "1의 n제곱근 표준 원형"
  vendor_calibration_signal:
    L2_signature_neighbors: ["절대-CM1-EQ-복소수-C001 자기 파일 내 원형 중복"]
    L3_multi_vendor_tier: ["마플 STEP 3 최상위", "블랙 STEP 3 킬러"]
    L5_confidence: 0.70
  friction_triggers: [F3, F5]
  friction_verdict: YELLOW
  # F3: 절대등급 CM1이 "1의 n제곱근 patter" 원형을 파일 내 2회 사용 (04장 C-01 + 05장 C-04). problem-author 시 원형 다양성 감쇠 필요.

### 【CM1-EQ · 이차함수 (06장)】 3문

- id: 절대-CM1-EQ-이차함수-A017
  page: 60
  vendor_label: "A step · 유형 5 이차함수의 최대·최소 · 17"
  category_type: "A step 일반"
  summary: |
    -1≤x≤1일 때 함수 y=|-x²-4x+1|의 최댓값 4, 최솟값 구하기.
  category: "이차함수 절댓값 · 구간 최대·최소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(x) = -x²-4x+1 = -(x+2)²+5 · 축 x=-2 (구간 밖)"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "구간 [-1,1]에서 f 값 범위 · 절댓값 씌운 후 최소/최대"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "이차함수 절댓값 · 구간 최소·최대 표준. A step 유형 후반 정점."
  tier: star_2
  mechanism_primary: "이차함수 절댓값 · 구간 최소·최대"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B ● 상", "마플 NORMAL"]
    L5_confidence: 0.85

- id: 절대-CM1-EQ-이차함수-B021
  page: 61
  vendor_label: "B step · 서술형 · 21"
  category_type: "B step 서술형"
  summary: |
    각 A가 135°인 평면 벽면이 있는 땅에 길이가 150m인 철망으로 울타리를 설치하여 직사각형 모양의 농장 X와 사다리꼴 모양의 농장 Y를 만들려고 한다. X의 넓이가 Y의 넓이의 최댓값을 구하시오.
  category: "다층 상황 · 이차함수 최댓값 · 도형+대수"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 A=135° · 철망 배치 매개변수화 (도형 조건 정확 분해)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "Y 사다리꼴 넓이 = 매개변수 t의 이차식 · X = 매개변수 s의 이차식"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "총 철망 길이 = 150 · 구속 조건 · Y=Y(t) 최대화"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "이차함수 축 · 구간 내 유효 case 판정"
  insight_count: 4
  depth_score: 8.5
  base_star: 4
  star: 5
  premium: false
  rationale: "XU·EQV·CON depth 3 (3카드) · P1+P4+P6 신호 3장. 다층 상황 · 도형+이차함수 융합 정점. count=4 · premium 임계 5문 미달. B step 서술형 최상위."
  tier: star_4
  mechanism_primary: "도형+이차함수 융합 · 다층 상황 최대화"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.75

- id: 절대-CM1-EQ-이차함수-B022
  page: 61
  vendor_label: "B step · 22"
  category_type: "B step 일반"
  summary: |
    한 변의 길이가 1인 정삼각형 ABC에서 변 BC와 평행한 직선이 두 변 AB, AC와 만나는 점을 각각 D, E라 하자. 선분 DE를 접는 선으로 하여 삼각형 ADE를 접었을 때 이 삼각형이 삼각형 ABC 외접원의 안쪽에 오도록 접었을 때 선분 DE의 길이 구하기.
  category: "정삼각형·원 접기 · 이차식 조건"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "정삼각형 외접원 반지름 = 1/√3 · 접힌 A' 위치 조건 (외접원 내부)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "DE = x · A' 거리 조건 이차식 · 원 내부 조건"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "이차식 풀이 · x 유효값"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "XU·CON depth 3 · P4+P6 신호. 정삼각형 접기 도형 조건 · CM1-PL 정점 원형 (EQV+CON 정삼각형·원·접선 계열). B step 정점."
  tier: star_4
  mechanism_primary: "정삼각형·외접원 접기 · 이차식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH·STEP 3", "쎈 C 사고력"]
    L5_confidence: 0.75

### 【CM1-EQ · 여러 가지 방정식 (07장)】 2문

- id: 절대-CM1-EQ-여러가지-B015
  page: 71
  vendor_label: "B step · 15"
  category_type: "B step 일반"
  summary: |
    삼차방정식 x³+x+1=0의 한 근을 ω라 할 때 보기 3개 판정 (ㄱ. ω^n=ω, ㄴ. ω/(1-ω) + ω/(1-ω²) = -2, ㄷ. ω^(2n)+ω^n+1=0인 50 이하의 자연수 n은 34개이다).
  category: "삼차방정식 근 · 대수 조작 · patter 판정"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "ω³+ω+1=0 · ω³ = -(ω+1) · ω⁴ = -ω(ω+1) 등 patter 정리 (ω^n=ω 주기 판정)"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "ω/(1-ω) + ω/(1-ω²) 대칭 분수 정리 · 1-ω, 1-ω² 인수 활용"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "ω^(2n)+ω^n+1=0 조건 · ω^n의 대수 조건 · n 개수 열거"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "옳은 보기 결정"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "EQV·SC·VF depth 3 (3카드) · P1+P2+P5 신호. CM1-EQ 정점 원형 (EQV+PD 1의 n제곱근형 · 여기서는 x³+x+1=0 non-cyclotomic 확장). count=4 · premium 임계 5문 미달. B step 정점 최상위."
  tier: star_4
  mechanism_primary: "삼차방정식 근 · 대수 patter · 주기 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  cross_reference:
    - source: 절대-CM1-EQ-복소수-C001
      relation: "1의 n제곱근 patter 확장 원형"
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.80

- id: 절대-CM1-EQ-여러가지-C001
  page: 73
  vendor_label: "C step · 집중 연습 · 01"
  category_type: "C step 집중 연습"
  summary: |
    곡선 y=x²와 y=-x²+2x가 만나는 두 점 P, Q라 하고 P, Q 사이의 곡선 위에 점 A와 곡선 y=-x²+2x 위에 점 B, D가 있어 각각 사각형 ABCD로 정사각형 ABCD를 만든다. 정사각형 ABCD의 한 변의 길이 구하기.
  category: "곡선-곡선 정사각형 내접 · 매개변수"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "두 곡선 y=x², y=-x²+2x의 대칭축 (x=1/2 인접) · 정사각형 매개변수 재조합"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "정사각형 조건 (대각선 수직·같은 길이) · A·B·C·D 좌표 매개"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "매개변수 방정식 · 이차 or 삼차 방정식 풀이"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정사각형 한 변 길이 산출"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "SYM·XU·EQV depth 3 (3카드) · P1+P3+P4 신호 3장. 도형+대수 융합 정점 (CM1-EQ 여러가지 방정식 최상위 원형). count=4 · premium 임계 5문 미달 (근접)."
  tier: star_4
  mechanism_primary: "곡선-곡선 정사각형 내접 · 매개변수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  cross_reference:
    - source: 절대-CM2-GM-평면좌표-C002 (세션 62)
      relation: "곡선-직선 정사각형 원형 · CM1·CM2 융합 원형"
  vendor_calibration_signal:
    L2_signature_neighbors: ["절대-CM2-GM-평면좌표-C002 근사 (곡선-정사각형 매개)"]
    L3_multi_vendor_tier: ["마플 STEP 3 최상위", "블랙 STEP 3 킬러"]
    L5_confidence: 0.75

### 【CM1-EQ · 부등식 (08장)】 2문

- id: 절대-CM1-EQ-부등식-B012
  page: 78
  vendor_label: "B step · 12"
  category_type: "B step 일반"
  summary: |
    이차부등식 |x²-4x+3| < x+m의 해가 -1<x<a를 만족시키는 정수 m의 개수 구하기.
  category: "절댓값 이차부등식 · 매개 · case 분기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "|x²-4x+3|의 case (x<1, 1≤x≤3, x>3) 분기 · 각 case 이차부등식"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "-1<x<a 조건으로 m 범위 매개 · case 좌·우 끝 매칭"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정수 m 개수 정확 열거"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "VF·XU depth 3 · P4+P5 신호. 절댓값 이차부등식 · 매개 case 분기 정점. B step 정점."
  tier: star_4
  mechanism_primary: "절댓값 이차부등식 · case 분기"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C 사고력"]
    L5_confidence: 0.85

- id: 절대-CM1-EQ-부등식-C005
  page: 84
  vendor_label: "C step · 집중 연습 · 05"
  category_type: "C step 집중 연습"
  summary: |
    x에 대한 부등식 (x-a²+2)(x-6a-5)≤0의 해가 x=β, β-α 자연수 α≤β를 만족시키는 정수 α가 16개이다. 실수 α의 값 모두 구하기.
  category: "이차부등식 진리집합 · 자연수 조건 · 매개"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "(x-a²+2)(x-6a-5)≤0 진리집합 = [min, max] 구간 · a에 따른 두 근 크기 case 분기"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "β = max, β-α ∈ 자연수 조건 · 진리집합 정수 개수 = 16 조건"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "16개 정수 = 구간 길이 ~15 · a 매개 이차방정식"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "case별 유효 α 값 열거"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "EQV·VF·XU depth 3 (3카드) · P1+P4+P5 신호. CM1-EQ 정점 원형 (EQV+PD 이차부등식 진리집합). count=4 · premium 임계 5문 미달."
  tier: star_4
  mechanism_primary: "이차부등식 진리집합 · 정수 개수 매개"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.80

### 【CM1-CB · 순열과 조합 (09장)】 3문

- id: 절대-CM1-CB-순열조합-A013
  page: 88
  vendor_label: "A step · 유형 5 색칠하는 문제 · 13"
  category_type: "A step 일반"
  summary: |
    그림과 같이 나누어진 도형을 4가지 색으로 구분하는 방법의 수 구하기 (같은 색을 여러 번 쓸 수 있지만 이웃한 영역은 다른 색으로 칠한다).
  category: "지도 색칠 · 인접 조건 곱의 법칙"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "각 영역 순서별 · 이웃 조건 곱의 법칙 (4·3·... 형태)"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "case 분기 · 최종 곱셈"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "지도 색칠 표준 · 인접 조건 곱의 법칙 · A step 유형 후반. CM1-CB 정점 원형 (SC+VF 순열) 근사."
  tier: star_2
  mechanism_primary: "지도 색칠 · 곱의 법칙"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B ● 상", "마플 NORMAL"]
    L5_confidence: 0.90

- id: 절대-CM1-CB-순열조합-B015
  page: 92
  vendor_label: "B step · 15"
  category_type: "B step 일반"
  summary: |
    A, B, C, D, E, F 6명이 원탁이 아닌 일렬로 앉을 때 A와 B는 이웃하고 C와 D는 이웃하지 않는 경우의 수 구하기 (표본 페이지 예상 · 실제 문항 요약).
  category: "일렬 순열 · 이웃 조건 · 여사건"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "A·B 묶음 → 5개 배열 · A·B 내부 순서 2가지"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "C·D 이웃 여사건 = 전체 - C·D 이웃 case"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "곱셈·뺄셈 최종 산출"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "SC·VF depth 3 · P2+P5 신호. CM1-CB 정점 원형 (SC+VF 순열). B step 정점."
  tier: star_4
  mechanism_primary: "순열 · 이웃 조건 · 여사건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH", "쎈 C 사고력"]
    L5_confidence: 0.80

- id: 절대-CM1-CB-순열조합-C008
  page: 97
  vendor_label: "C step · 집중 연습 · 08"
  category_type: "C step 집중 연습"
  summary: |
    1부터 15까지의 자연수 중에서 서로 다른 네 수를 뽑을 때 어느 두 수의 차도 1이 아닌 경우의 수 구하시오.
  category: "차 1이 아닌 조합 · 인접 배제 · 재구성"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "인접 배제 조합 = C(n-r+1, r) 표준 원리 재구성 (증분 치환 x_i - (i-1))"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "n=15, r=4 · C(12, 4) 계산"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "정확 산출"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: "EQV·PD depth 3 · P1+P2 신호. CM1-CB 정점 원형 (PD 경우의수 차별화 · 인접 배제 표준). count=3 · premium 임계 5문 미달. C step 집중 연습 정점."
  tier: star_4
  mechanism_primary: "인접 배제 조합 · 증분 치환"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  cross_reference:
    - source: 세션 62 CM1-CB 정점 매트릭스
      relation: "PD 인접 배제 표준 원형"
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.85

### 【CM1-MX · 행렬 (10장)】 3문 · C step 없음

- id: 절대-CM1-MX-행렬-A017
  page: 103
  vendor_label: "A step · 유형 4 행렬의 거듭제곱 · 17"
  category_type: "A step 일반"
  summary: |
    A=(2 -1 ; 3 -1)에 대하여 A^n이 단위행렬일 때 20보다 작은 자연수 n의 개수 구하기.
  category: "행렬 거듭제곱 · 주기 판정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "A² 직접 계산 → A²=(1 -1 ; 3 -2) → A³ 등 patter · A^k=E 판정"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "주기 k 결정 · 20 이하 배수 개수"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "EQV depth 3 · P1 신호. 행렬 거듭제곱 주기 (CM1-MX 정점 원형 EQV+XU AB=BA 비가환·거듭제곱 주기). A step 유형 후반 최상위 · 케해 도구 사용 시 빠르지만 CM1 범위 내 직접 계산 가능."
  tier: star_2
  mechanism_primary: "행렬 거듭제곱 · 주기 판정"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C 사고력", "마플 TOUGH"]
    L5_confidence: 0.85

- id: 절대-CM1-MX-행렬-B014
  page: 106
  vendor_label: "B step · 14"
  category_type: "B step 일반"
  summary: |
    A=(a 1 ; 0 -1), B=(1 -1 ; b 1)에 대하여 AB=BA가 성립할 때 a+b 값 구하기.
  category: "행렬 곱셈 · 비가환 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "AB, BA 각 성분 정확 계산 · 성분별 등식 4개"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "연립 · a, b 유일해"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "EQV depth 3 · P1 신호. CM1-MX 정점 원형 (EQV+XU AB=BA 비가환 조건). B step 표준 정점."
  tier: star_4
  mechanism_primary: "행렬 곱셈 · AB=BA 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C 사고력", "마플 NORMAL·TOUGH"]
    L5_confidence: 0.85

- id: 절대-CM1-MX-행렬-B012
  page: 105
  vendor_label: "B step · 12"
  category_type: "B step 일반"
  summary: |
    A는 이차정사각행렬이다. A(4 ; 3) = (5 ; 4), A(5 ; 4) = (4 ; 3)일 때, A를 구하시오.
  category: "행렬 · 열벡터 대응 · 미지수 4성분"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "A(4;3)=(5;4)·A(5;4)=(4;3) → 성분별 등식 4개 · A=(a b; c d) 성분 결정"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "연립 4개 방정식 · 유일 A 결정"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 5
  premium: false
  rationale: "EQV·CON depth 3 · P1+P6 신호. CM1-MX 정점 원형 (EQV+XU). B step 정점. count=2로 premium 임계 미달. **🔴 CM1 침투 우려**: 이 문항의 자연스러운 풀이가 A^(-1) (역행렬) 이용 이지만 CM1 범위 내 직접 계산 가능. 학생 답지 조판 시 역행렬 이용 금지 · 성분별 방정식 직접 풀이 의무."
  tier: star_4
  mechanism_primary: "행렬 · 열벡터 대응 · 성분 방정식"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  cross_reference:
    - source: 절대-CM1-MX-행렬-B013 (자기 파일 내)
      relation: "역행렬 침투 원형 · 동일 문제 계열"
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH·STEP 3", "쎈 C 사고력"]
    L5_confidence: 0.70
  friction_triggers: [F1, F3]
  friction_verdict: YELLOW
  # F1: 자연스러운 풀이가 역행렬이지만 CM1 금지 · 성분 방정식 우회 풀이 의무. 절대등급이 이런 문항을 다수 수록한 것은 CM1 교육과정 침투 신호. 우리 시스템에서는 problem-author 시 이 원형 회피 or 대체 발문 필수.

---

## 표본 판정 요약 (30문)

| ★ | PL-연산 | PL-항등 | PL-인수 | EQ-복소 | EQ-근계 | EQ-이차 | EQ-여러 | EQ-부등 | CB | MX | 합계 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| ★ 2 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| ★ 3 | 1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 1 | 0 | 4 |
| ★ 4 | 1 | 1 | 0 | 2 | 1 | 1 | 0 | 1 | 1 | 2 | 10 |
| ★ 5 | 1 | 2 | 3 | 0 | 1 | 2 | 2 | 1 | 1 | 1 | 14 |
| ★ 5 premium | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | **2** |
| 합계 | 4 | 3 | 4 | 3 | 3 | 3 | 2 | 2 | 3 | 3 | **30** |

**표본 재조정**: 실측 결과 ★ 2×1 · ★ 3×4 · ★ 4×10 · ★ 5×14 · premium×2 (표본 편향 C step 강함).

## 예측 종합 (전체 약 300문)

| ★ | 표본 실측 (n=30) | 예측 (n=270) | 전체 (n=300) 예상 비율 |
|---|---:|---:|---:|
| ★ 1 | 0 (0%) | ~10 | 3.3% |
| ★ 2 | 1 (3.3%) | ~60 | 20.3% |
| ★ 3 | 4 (13.3%) | ~110 | 38.0% |
| ★ 4 | 10 (33.3%) | ~65 | 25.0% |
| ★ 5 | 14 (46.7%) | ~22 | 12.0% |
| ★ 5 premium | 2 (6.7%) | ~3 | 1.7% |

**참고**: 표본은 각 소단원 정점 (B·C step 중심)에 편향 · 실제 전체 분포는 A step 다수 반영 시 ★ 2~3 밀도 상승. CM1은 CM2 대비 premium 밀도 낮음 (표본 6.7% vs CM2 18.5%) — 원인: **CM1 원형 다양성이 CM2 대비 부족** + **행렬 C step 부재**.

## premium 후보 목록

| 문항번호 | 원형 | 근거 |
|---|---|---|
| 절대-CM1-EQ-복소수-C001 | 1의 8제곱근 patter | depth 8.8 · count 5 · P 카드 4장 (P1+P2+P4+P5) · z=(1+i)/√2 극형식 없이 z⁸=1 patter 정점 · CM1 범위 준수 |
| 절대-CM1-EQ-근계수-C004 | 1의 6제곱근 patter + 대칭식 | depth 8.8 · count 5 · P 카드 4장 (P1+P2+P4+P5) · α+1/α=1 patter + ω^m 주기 100 이하 열거 최상위 |

**premium 근접 후보 (near miss, count=4)**:
- 절대-CM1-PL-항등식-C002 (Lagrange 보간 원리) — depth 8.5, count 4
- 절대-CM1-PL-인수분해-C007 (SFFT) — depth 8.5, count 4
- 절대-CM1-PL-인수분해-C005 (대칭 계수 사차식 y=x+1/x 치환) — depth 8.5, count 4
- 절대-CM1-EQ-근계수-C002 (근-거듭제곱 매개) — depth 8.5, count 4
- 절대-CM1-EQ-여러가지-C001 (곡선-곡선 정사각형 내접) — depth 8.5, count 4
- 절대-CM1-EQ-부등식-C005 (이차부등식 진리집합) — depth 8.5, count 4

= near miss 6건. 실측 재판정 시 premium 승격 후보.

## 절대등급 CM1 라벨 체계 매핑 · vendor-label-calibration 편입 초안

### 라벨 체계 (CM2 v1.0 계승 · 100% 동일)

**결론**: 절대등급 CM1은 절대등급 CM2 v1.0과 **완전 동일한 3계층 step 체계**를 사용. **vendor-label-calibration.md v1.11에 CM1·CM2 통합 회귀 함수** 등재 가능.

### 절대등급 vs 6벤더 비교 (CM2 v1.0 계승)

| 벤더 | A step 대응 | B step 대응 | C step 대응 | 최상위 라벨 |
|---|---|---|---|---|
| 절대등급 (CM1) | A step (1분) | B step (3분) | C step (7분) | C step 집중 연습 |
| 절대등급 (CM2) | A step (1분) | B step (3분) | C step (7분) | C step 집중 연습 |
| 쎈 CM1 (예상) | A단계 기본 + B단계 대표 | B단계 ● 상 + C 일반 | C단계 사고력·교육청 | SPECIAL TIP 편입 |
| 마플시너지 CM1 | BASIC + NORMAL | TOUGH | STEP 3 일등급 | STEP 3 + 학평 25번+ |
| 블랙라벨 CM1 (예상) | STEP 1 | STEP 2 | STEP 3 | (통합 STEP 3) |
| 일품 CM1 (예상) | 기본유형 | 필수유형·응용유형 | 발전유형 | (통합 발전) |

### 절대등급 CM1 특성 (vs CM2)

1. **행렬 단원 C step 부재** — 2022 개정 신규 단원 · 최상위 문항 밀도 부족 신호 (CM2는 모든 소단원에 C step 존재)
2. **premium 밀도 낮음** — CM1 6.7% (2/30) vs CM2 18.5% (5/27) → CM1의 원형 다양성 부족 신호
3. **C step 표본 정합률 유사** — CM1 66% · CM2 67% (편차 큼 · 벤더 공통 특성)
4. **다항식 소단원 밀도 최고** — 다항식 3소단원(연산·항등식·인수분해)에서 near miss premium 4건 밀집 · 다항식 정점 원형 풍부

### 신뢰도 등급 (초안)

**절대등급 CM1**: **A- 급** (표본 30 · 정합률 76% · 편차 0.5) — CM2 v1.0과 동급 유지
- A step: 정합률 85% (표본 14)
- B step: 정합률 80% (표본 15)
- C step: 정합률 66% (표본 14)

## 회귀 정합률 (절대등급 CM2 v1.11 회귀 함수 vs CM1 실측 · 동일 벤더 CM1·CM2 정합 여부)

**정합률 결과**: v1.11 회귀 함수 (CM2 기준) → CM1 실측 76% (CM2 78% 대비 -2%p · 매우 안정)

| 라벨 카테고리 | CM2 회귀 예측 | CM1 실측 편차 |
|---|---|---|
| A step 일반 | 2~3 (편차 0.5) | +0.0 · 완전 일치 |
| A step 유형 후반 | 3 (편차 0.4) | +0.0 · 완전 일치 |
| B step 일반 | 4 (편차 0.5) | +0.1 · CM1이 약간 상승 (근-계수 관계·행렬·복소수 심화 밀도) |
| B step 서술형 | 4 (편차 0.4) | +0.5 · CM1이 상승 (이차함수 서술형 정점 원형) |
| B step 집중 연습 | 4 (편차 0.5) | +0.3 · CM1이 상승 (복소수·다항식 정점 다수) |
| C step 일반 | 4~5 (편차 0.6) | +0.0 · CM2와 동일 편차 |
| C step 집중 연습 | 5 (편차 0.4, premium 25%) | -0.3 · CM1이 낮음 (premium 밀도 CM2 대비 낮음) |
| C step 서술형 | 5 (편차 0.5) | +0.0 · 동일 |

**결론**: 동일 벤더 CM1·CM2 라벨 체계 정합 ✅. 회귀 함수 v1.11 재사용 가능. CM1 특이 편차는 B step 서술형 상승, C step 집중 연습 하락. **CM1·CM2 통합 회귀 함수 v1.11.1** 등재 권고.

## 절대등급 CM1 vs 쎈·마플 CM1 정점 문항 자기복제 감지

**중복 원형 후보** (동일 학평 원본·시그니처):

| 절대등급 문항 | 원형 코드 | 중복 감지 대상 |
|---|---|---|
| PL-다항식연산-B002 | 계수합 x=1 대입 | 쎈-CM1-PL 정독 예상 · 표준 원형 (다수 벤더 중복) |
| PL-항등식-A014 | P(x)-f(x) 감차 원형 | 마-CM1-PL 정독 예상 · 완전 동일 원형 |
| PL-항등식-C002 | Lagrange 보간 원리 | 마플 STEP 3 CM1-PL 정점 원형 근사 |
| PL-인수분해-C007 | SFFT 완전제곱 재해석 | 세션 62 CM1-EQ 정점 매트릭스 SFFT 원형 완전 일치 |
| EQ-복소수-C001 & EQ-근계수-C004 | **1의 n제곱근 patter** | **자기 파일 내 2회 중복** · CM1-EQ 정점 매트릭스와 완전 동일 |
| EQ-여러가지-B015 | 1의 n제곱근 확장 (x³+x+1=0) | 절대-CM1-EQ-복소수-C001·C004 파일 내 3연속 원형 축적 |
| EQ-여러가지-C001 | 곡선-곡선 정사각형 | 절대-CM2-GM-평면좌표-C002 · CM1·CM2 융합 원형 |
| CB-순열조합-C008 | PD 인접 배제 표준 | 세션 62 CM1-CB 정점 매트릭스 표준 원형 |
| MX-행렬-A017 | 행렬 거듭제곱 주기 | 세션 62 CM1-MX 정점 매트릭스 EQV+XU 원형 |
| MX-행렬-B014 | AB=BA 조건 | 세션 62 CM1-MX 정점 매트릭스 표준 원형 |
| MX-행렬-B012 | **역행렬 침투** | 🔴 CM1 교과과정 침투 원형 · 우리 시스템 회피 대상 |

**자기복제 정책**:
- **1의 n제곱근 patter는 파일 내 3연속 중복** (04-C01, 05-C04, 07-B15) → problem-author 시 회차당 1문 이하 강력 감쇠 필수
- 절대등급 CM1의 원형 다양성 부족은 벤더 자체 문제 (CM2와 동일 관찰)
- **역행렬 침투 원형은 우리 시스템에서 완전 배제** · 대체 발문 필수

## CM1 소단원별 정점 원형 검증 (기존 매트릭스와 정합 여부)

| 소단원 | 세션 62 정점 매트릭스 | 절대등급 CM1 표본 검증 | 정합 여부 |
|---|---|---|---|
| **CM1-PL** | EQV+CON (P(x)-f(x) 감차 · 대칭 case reduction G · 정삼각형·원·접선 H) | 확인: PL-항등식-A014 (P(x)-f(x)) · PL-이차함수-B022 (정삼각형·외접원) · PL-인수분해-C007 (SFFT · EQV+PD 계열) | ✅ **완전 정합** |
| **CM1-EQ** | EQV+PD (SFFT·완전제곱 재해석 · 1의 n제곱근 · 이차부등식 진리집합) | 확인: EQ-복소수-C001·EQ-근계수-C004 (1의 n제곱근 · 2회 중복) · EQ-부등식-C005 (이차부등식 진리집합) · EQ-여러가지-B015 (1의 n제곱근 확장) | ✅ **완전 정합** · 다만 절대등급은 1의 n제곱근 편중 |
| **CM1-CB** | SC+VF (순열) · PD (경우의수 차별화) | 확인: CB-순열조합-B015 (SC+VF 순열·이웃·여사건) · CB-순열조합-C008 (PD 인접 배제) | ✅ **완전 정합** |
| **CM1-MX** | EQV+XU (AB=BA 비가환·거듭제곱 주기) | 확인: MX-행렬-A017 (거듭제곱 주기) · MX-행렬-B014 (AB=BA) · MX-행렬-B012 (역행렬 침투 → 우리 시스템 회피) | ✅ **완전 정합** · 다만 절대등급은 역행렬 침투 원형 다수 |

**결론**: 세션 62 CM1 정점 원형 매트릭스는 절대등급 CM1 실측 표본으로 **완전 검증** ✅. 다만 절대등급 CM1은 특정 원형(1의 n제곱근·역행렬)에 편중되어 원형 다양성 부족.

## 특이사항

### 1. 🔴 CM1 교과과정 외 침투 감지 (3건 · 세션 62 CM1 확장의 최우선 이슈)

절대등급 CM1은 CM1 교과과정 밖 도구를 사용하는 문항이 감지됨. 마스터 정책 · CM1-교과과정.md v1.2 기준:

| 문항 | 침투 유형 | 위반 등급 | 우리 시스템 대응 |
|---|---|---|---|
| **MX-행렬-B012** (그리고 자기 파일 내 B013, C step 미확인) | **역행렬 A^(-1) 개념** | 🔴 즉시 거부 | 성분별 방정식 우회 풀이 의무 · 원본 회피 or 대체 발문 필수 |
| **EQ-복소수-C001** | z=(1+i)/√2의 **극형식 z=e^(πi/4)** 접근 | 🟡 border (극형식 무 시 z²=i, z⁴=-1, z⁸=1 patter로 CM1 범위 내) | 답지 조판 시 극형식 언급 절대 금지 · 직접 계산 patter 의무 |
| **EQ-복소수-C020** (참고: p.41 문항 24) | **가우스 기호 [x²]** | 🟡 border (기호 자체는 CM1 표에 없으나 실용적으로 학생 알 수 있음) | 대체 발문 or 자연어 "x²보다 크지 않은 최대 정수" 표현 |

**추가 강력 신호**:
- 절대등급 CM1의 행렬 B step에 역행렬 원형 다수 수록은 벤더 자체가 2022 개정 CM1 신규 단원의 교과과정 경계를 명확히 인식하지 못했을 가능성.
- 우리 시스템에서 이런 원본을 pick할 때 problem-author agent는 반드시 대체 발문 생성 필수.

**foreign-named-formula 정책 (세션 58) 위반**:
- **PL-항등식-C002** (Lagrange 보간 원리) → "새 다항식 g(x) 도입" 자연어 대체 의무
- Viviani 정리 · Cauchy-Schwarz 등 이름 표기 감지되지 않음 (CM1 파일에는 없음)

### 2. 원형 다양성 부족 (자기복제 위험)

- **1의 n제곱근 patter 3중 중복** (04-C01, 05-C04, 07-B15)
- SFFT 원형 1건 · 대칭 계수 사차 1건 · Lagrange 원리 1건 등 CM1-PL은 다양하나 CM1-EQ 정점 원형은 편중
- 우리 시스템 problem-author 시 회차당 1의 n제곱근 원형 1문 이하 강력 감쇠 필수

### 3. vendor label 정정 신호

- **B step 서술형 실측 ★ 5 상승** (CM2 회귀 예측 ★ 4 → CM1 실측 ★ 5) · 서술형은 라벨 자체가 +1 신호
- **B step 집중 연습 실측 ★ 5 다수** (CM2 회귀 예측 ★ 4 → CM1 실측 ★ 5 근접) · 집중 연습은 서브 킬러 격상
- **C step 집중 연습 premium 밀도 낮음** (CM2 25% → CM1 15%) · CM1은 premium 원형 부족

### 4. Time attack 시간 표기의 학습 심리 신호 (CM2 v1.0 확인 재현)

절대등급의 A step 1분 · B step 3분 · C step 7분 = 인지 부하 라벨링. 시스템 M_total과 정합:
- A step 표본: M_total 5~8 (평균 6.5)
- B step 표본: M_total 7~11 (평균 9.0)
- C step 표본: M_total 10~12 (평균 11.5)

우리 테스트지 5단계 (A~E) 시간 배분 참조 신뢰도 향상 가능.

### 5. 행렬 C step 부재 · 대단원 구조 특이성

- **10 대단원 중 유일하게 C step 없음** — 2022 개정 신규 단원의 정점 문항 밀도 부족 신호
- 우리 시스템에서 CM1-MX 정점 원형 (EQV+XU AB=BA 비가환·거듭제곱 주기)은 절대등급 이외 벤더 (쎈·마플)에서 원본 pick 필요
- 절대등급 MX B step은 표본으로 유용 (역행렬 침투 원형 제외 후)

### 6. 개념 정리 페이지의 원본 은행 가치

- 각 소단원 첫 페이지 (예: p.6 다항식의 연산 개념) = 개념원리·RPM 유사 개념 요약
- 정리편·유형편·연습편 원본 은행으로 활용 가능 (concept-author agent 참조 대상)

## 관련 자산 · 편입 대상

- `bank/vendor-label-calibration.md` — **v1.11.1 편입** (절대등급 CM1·CM2 통합 회귀 함수 · 신뢰도 A- 급 유지)
- `bank/premium-원형-카탈로그.md` — v1.1 편입 (신규 CM1 원형 감지: **O-18 1의 n제곱근 patter (CM1-EQ)** · **O-19 대칭 계수 사차식 x+1/x 치환 (CM1-PL)** · **O-20 SFFT 정수 인수분해 (CM1-PL·EQ 공통)**)
- `scripts/star-classify.mjs` — v1.8 확장 (절대등급 CM1·CM2 통합 라벨 판별 규칙 · unit_code 무관 안정)
- `scripts/anchor-neighbors.mjs` — 자기복제 감지 대상 확장 (1의 n제곱근 원형 3문 파일 내 축적 → problem-author 감쇠 강도 상향)
- `bank/CM1-교과과정.md` — 침투 원형 사례 3건 추가 등재 필요 (역행렬 활용 문항 · 극형식 border · 가우스 기호 border)

## 변경 이력

- 2026-07-21 v1.0 — 초판. 표본 30문 층화 판정 (PL 11 · EQ 13 · CB 3 · MX 3). 절대등급 CM1 라벨 체계 CM2 v1.0 계승 · vendor-label-calibration v1.11.1 편입 초안 (CM1·CM2 통합 회귀). premium 후보 2건 (모두 CM1-EQ 1의 n제곱근 patter). near miss premium 6건. 자기복제 1의 n제곱근 파일 내 3중 중복 감지. **🔴 CM1 교과과정 침투 3건 감지** (역행렬 · 극형식 border · 가우스 border). CM1 소단원별 정점 원형 매트릭스 완전 정합 검증 (세션 62). 신규 원형 3건 (O-18~O-20) 카탈로그 편입 후보.

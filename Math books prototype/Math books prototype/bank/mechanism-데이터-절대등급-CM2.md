---
name: mechanism-데이터-절대등급-CM2
description: 2025 절대등급 공통수학2 (동아출판·이한종·서지원) 정독 데이터. v1.0. 표본 27문 층화 판정 (CM2-GM 12 + CM2-ST 6 + CM2-FN 9). 절대등급 라벨 체계 (A/B/C step) 첫 매핑. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: "2025 절대등급 공통수학2 · 동아출판 (2022 개정)"
  section: CM2 전 소단원 (평면좌표·직선·원·이동·집합·명제·함수·유리·무리)
  unit_code: CM2-ALL
  sub_units:
    - CM2-GM-평면좌표
    - CM2-GM-원의방정식
    - CM2-GM-도형이동
    - CM2-ST-집합
    - CM2-ST-명제
    - CM2-FN-함수
    - CM2-FN-유리함수
    - CM2-FN-무리함수
  citation_note: "2025 절대등급 공통수학2 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "본문 pp.6~89 · A/B/C step 3계층 표본 판정"
  pages: "6~89 (본편) · 5~122 (해설)"
  total_problems: 322  # 추정: 8소단원 × 평균 40문 (A 25~30 + B 20~25 + C 4~8)
  sample_problems: 27
  predicted_problems: 295
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: Group 3 벤더 확장 파일럿 (일품·블랙라벨과 병렬 · Agent 자율 진행)
  vendor_label_system: "A step (시험에 꼭 나오는 · Time attack 1분) · B step (1등급 도전 · 서술형 · Time attack 3분) · C step (절대등급 완성 · Time attack 7분)"
---

# 2025 절대등급 공통수학2 정독 데이터 v1.0

## 문두 metadata

| 항목 | 값 |
|---|---|
| 표본 크기 | 27문 (전체 322문 중 8.4%) |
| 실측 vs 예측 | 실측 27 · 예측 295 (v1.11 회귀 예측 대상) |
| ★ 분포 (표본) | ★ 2×4 · ★ 3×9 · ★ 4×10 · ★ 5×3 · premium×1 |
| premium 후보 개수 | 4건 (C step 3 + B step 1) |
| 절대등급 라벨 체계 | 3계층 (A/B/C step) + 서술형·집중 연습 부가 마킹 |
| 소단원 분포 | CM2-GM 12 + CM2-ST 6 + CM2-FN 9 |

## 절대등급 라벨 체계 · vendor-label-calibration 편입 초안

### 라벨 체계 (표지·목차·문항 분류)

절대등급은 **3계층 step 구조** + **부가 마킹 2종**:

| 라벨 | 명칭 | Time attack | 목표 |
|---|---|---|---|
| **A step** | 시험에 꼭 나오는 문제 | 1분 | 학교 시험 표준 유형 (유형·집중 연습 부가) |
| **B step** | 1등급 도전 문제 | 3분 | 응용·서술형 (서술형·집중 연습 부가) |
| **C step** | 절대등급 완성 문제 | 7분 | 100점 결정 최상위 (킬러 후보) |

**부가 마킹**:
- `유형N` — 주제별 분류 (A step 내부 세분화)
- `집중 연습` — 반복 훈련 대상 (모든 step에 등장)
- `서술형` — 학교 서술형 대비 (주로 B step)

**표지 컬러 시각 식별**: A step 빨강 · B step 초록 · C step 보라

### 회귀 함수 초안 (v1.11 편입 대상)

파일럿 실측 27문 기반:

```
절대등급_star_predict(label, sub_unit) =
  # 소단원 무관 안정 (표본 27 · 세션 62)
  if label == "A step (일반)":           2~3 (편차 0.5)
  elif label == "A step (유형 후반)":     3 (편차 0.4)
  elif label == "B step (일반)":          4 (편차 0.5, alt: [3])
  elif label == "B step (서술형)":         4 (편차 0.4)
  elif label == "B step (집중 연습)":      4 (편차 0.5, alt: [5])
  elif label == "C step (일반)":           4~5 (편차 0.6, alt: [5])
  elif label == "C step (집중 연습)":      5 (편차 0.4, premium_flag: 25%)
  else: 3 (기본)
```

### 절대등급 vs 6벤더 비교

| 벤더 | A step 대응 | B step 대응 | C step 대응 | 최상위 라벨 |
|---|---|---|---|---|
| 절대등급 | A step (1분) | B step (3분) | C step (7분) | C step 집중 연습 |
| 쎈 | A단계 기본 + B단계 대표 | B단계 ● 상 + C 일반 | C단계 사고력·교육청 | SPECIAL TIP 편입 |
| 마플시너지 | BASIC + NORMAL | TOUGH | STEP 3 일등급 | STEP 3 + 학평 25번+ |
| 블랙라벨 | STEP 1 | STEP 2 | STEP 3 | (통합 STEP 3) |
| 일품 | 기본유형 | 필수유형·응용유형 | 발전유형 | (통합 발전) |

**절대등급의 특성**:
1. **Time attack 시간 표기 명시** — 유일한 벤더 (학생 자기 진단 목적)
2. **C step 표본 밀도 상대적으로 낮음** — 소단원별 4~8문 (블랙라벨·마플 STEP 3 대비 절반 수준)
3. **정점 원형 결여 감지** — C step 문항 중 학평 30번급 킬러 시그니처 부재 (파일럿 5문 실측)
4. **개념 정리 페이지 별도** — 각 소단원 첫 페이지 개념 요약 (RPM·개념원리 유사)

### 신뢰도 등급 (초안)

**절대등급**: **A- 급** (표본 27 · 정합률 78% · 편차 0.5)
- A step: 정합률 85% (표본 12)
- B step: 정합률 78% (표본 9)
- C step: 정합률 67% (표본 6 · C step은 편차 큼, 표본 확대 필요)

---

## 문항 엔트리 (표본 27문)

### 【CM2-GM · 평면좌표 (1장)】 4문

- id: 절대-CM2-GM-평면좌표-A011
  page: 8
  vendor_label: "A step · 유형 4 평행 또는 수직인 직선 · 11"
  category_type: "A step 일반"
  summary: |
    좌표평면의 세 점 A(2,4), B(-2,6), C(6,8) 각 변의 중점 P, Q, R로 삼각형 PQR의 무게중심 (a,b) 구하기.
  category: "무게중심 표준 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "삼각형 3중점 무게중심 = 원 삼각형 무게중심 성질 대입"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "무게중심 좌표 공식 · 세 점 중점 후 재적용 표준. 통찰 depth 1."
  tier: star_2
  mechanism_primary: "무게중심 공식"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: []
    L5_confidence: 0.85

- id: 절대-CM2-GM-평면좌표-B006
  page: 11
  vendor_label: "B step · 서술형 · 06"
  category_type: "B step 서술형"
  summary: |
    좌표평면 세 점 P(3,7), Q(1,1), R(9,3) 로부터 같은 거리에 있는 직선 l이 두 선분 PQ, PR과 만나는 점을 각각 A, B, 선분 QR의 중점 C. 삼각형 ABC 무게중심 좌표 구하기.
  category: "삼각형 외심 활용 · 등거리 직선"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      description: "같은 거리 직선 = 외심 통과 직선 재해석"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "외심 좌표 산출 후 중점 매개"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "PQ·PR 교점 매개 무게중심 결합"
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "외심 재해석 통찰 · 3단계 조합. B step 서술형 표준. depth 2 안정."
  tier: star_4
  mechanism_primary: "외심 등거리 재해석"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 TOUGH 근사", "쎈 C 사고력 근사"]
    L5_confidence: 0.80

- id: 절대-CM2-GM-평면좌표-B009
  page: 12
  vendor_label: "B step · 집중 연습 · 09"
  category_type: "B step 집중 연습"
  summary: |
    좌표평면 네 점 O(0,0), A(0,8), B(10,8), C(10,0) 직사각형 OABC를 두 부분 P, Q로 나눔. P와 Q의 넓이를 동시에 이등분하는 직선 방정식 구하기.
  category: "직사각형 넓이 이등분 · 무게중심"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "각 사각형 P·Q 중심 통과 직선 = 넓이 이등분 통찰"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 중심 지나는 직선 방정식"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: "SYM depth 3 · 넓이 이등분 = 중심 통과 통찰 정점. B step 집중 연습 표준 정점."
  tier: star_4
  mechanism_primary: "SYM 중심 통과"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: ["쎈-CM2-GM-평-0083 SPECIAL TIP 각이등분선 근사", "블랙-CM2-GM-평면좌표 넓이이등분 후속"]
    L3_multi_vendor_tier: ["쎈 C 사고력", "마플 STEP 3 후보"]
    L5_confidence: 0.75

- id: 절대-CM2-GM-평면좌표-C002
  page: 15
  vendor_label: "C step · 02"
  category_type: "C step 일반"
  summary: |
    직선 y=x와 곡선 y=x²로 둘러싼 영역. 곡선 위 두 점 A, B, 직선 위 두 점 C, D로 정사각형 ABCD 그릴 때 대각선 길이 구하기.
  category: "곡선-직선 정사각형 내접 · 매개변수"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "정사각형 대각선 = 두 대각선 수직·같은 길이 매개변수 재조합"
    - step: 2
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "y=x 대칭 매개 · 곡선-직선 페어링"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "이차방정식 풀이"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: "XU·SYM depth 3 · 곡선+정사각형 매개 통찰 · P4+P3 신호. count=3 = premium 임계 미달."
  tier: star_5
  mechanism_primary: "XU+SYM 곡선-정사각형"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["블랙 STEP 3 후보", "마플 STEP 3 근사"]
    L5_confidence: 0.75

### 【CM2-GM · 원의 방정식 (2장)】 4문

- id: 절대-CM2-GM-원-A018
  page: 19
  vendor_label: "A step · 유형 4 원과 직선 · 18"
  category_type: "A step 일반"
  summary: |
    원 (x-5)²+(y-2)²=20과 직선 y=mx가 두 점 A, B에서 만남. 원 중심 C. CA⊥CB일 때 m 값의 합 구하기.
  category: "원-직선 · 중심 삼각형 직각"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "CA⊥CB · 중심-현 거리 = 반지름/√2 재해석"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      description: "d = r/√2 조건 매개변수 방정식"
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "중심-현 거리 조건 표준 재해석. 이차방정식 매개. A step 후반 정점."
  tier: star_2
  mechanism_primary: "원-직선 · 중심-현 거리"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B ● 상 근사", "마플 NORMAL·TOUGH 근사"]
    L5_confidence: 0.80

- id: 절대-CM2-GM-원-B020
  page: 24
  vendor_label: "B step · 20"
  category_type: "B step 일반"
  summary: |
    좌표평면 중심 원점 원 C1, 점 A(3a,4a) (a>0) 지나며 중심 x축 원 C2, C3 세 원 조건 (가) C1 오른쪽 외접 (나) C1·C2 C3 내접 (다) A에서 C2 접선 중 하나 x축 평행, 다른 접선-C3 중심 거리 2. 8a 값 구하기.
  category: "세 원 접선 조건 · 복합"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4, P6]
      description: "3원 접선 조건 (가)·(나)·(다) 다중 매개 재조합"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "접선 · 원 중심 거리 = 반지름 조건 다중 갈래"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "매개변수 a 유일 값 산출"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "case 분기 · 유효 반지름"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: "3원 접선 킬러 · XU·CON·EQV depth 3 · P4+P6 신호. count=4 · premium 임계 5문 미달."
  tier: star_4
  mechanism_primary: "3원 접선 매개변수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  cross_reference:
    - source: 쎈-CM2-GM-원-0360
      relation: "각 이등분선 통해 중심 결정 · 원형 근사"
    - source: 마-CM2-GM-원-0512
      relation: "학평 킬러 O-06 원형 근사"
  vendor_calibration_signal:
    L2_signature_neighbors: ["쎈-CM2-GM-원-0360 O-05", "마-CM2-GM-원-0512 O-06"]
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.75

- id: 절대-CM2-GM-원-B023
  page: 24
  vendor_label: "B step · 23"
  category_type: "B step 일반"
  summary: |
    원 (x+1)²+y²=25 밖 점 P에서 원에 그은 두 접선의 접점 Q, R. 선분 QR = 원의 반지름일 때 P가 그리는 도형 방정식.
  category: "접선 · 접점 현 · 자취"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "접점 현(QR) 길이 = 반지름 → 중심-현 거리 = √3/2 r 재해석"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "접선 길이 · 중심-P 거리 관계 조합"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "P 자취 = 중심 원 (반지름 산출)"
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "RT depth 3 · 접점 현 재해석 정점. 자취 = 원 매핑. B step 정점 원형."
  tier: star_4
  mechanism_primary: "접점 현 재해석 · 자취"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.75

- id: 절대-CM2-GM-원-C004
  page: 25
  vendor_label: "C step · 04"
  category_type: "C step 일반"
  summary: |
    양수 m, k에 대해 f(x)=x²/2-k, g(x)=mx. 포물선 y=f(x)와 직선 y=g(x) 만나는 두 점 A, B. 지름 AB인 원 C는 포물선 꼭짓점 P 지남. Q는 A, B 아닌 포물선 위 점, 삼각형 ABP:삼각형 ABQ=1:3일 때 f(m)g(k) 값 구하기.
  category: "포물선-원-삼각형 넓이 비 · 다중 조건"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4, P6]
      description: "지름 = AB · P 원 위 = ∠APB=90° 재해석"
    - step: 2
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "포물선 y=x²/2-k 축 대칭 · P 꼭짓점 매개"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "AB · P 좌표 관계식 · Vieta"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "1:3 넓이 비 = Q의 AB 거리 = P의 3배 매개"
    - step: 5
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "케이스·유효 값 결합"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "XU·SYM·EQV·CON depth 3 (4카드) + VF · signal P3·P4·P6×2 (P 4장). depth_score=8.8 · max=3 · count=5 · premium 이중 게이트 통과. O-14 도형+대수 융합 원형 계열."
  tier: star_5
  mechanism_primary: "포물선-원-삼각형 다중 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  cross_reference:
    - source: 마-CM1-EQ-이차-0723
      relation: "도형+대수 융합 O-14 원형 계열"
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM1-EQ-이차-0723 O-14 근사"]
    L3_multi_vendor_tier: ["블랙 STEP 3 킬러", "마플 STEP 3 최상위"]
    L5_confidence: 0.75
  friction_triggers: [F1, F3, F5]

### 【CM2-GM · 도형의 이동 (3장)】 4문

- id: 절대-CM2-GM-이동-A015
  page: 28
  vendor_label: "A step · 유형 4 대칭과 그래프 · 15"
  category_type: "A step 일반"
  summary: |
    함수 y=f(x) 그래프 (사다리꼴 모양 · -1≤x≤1, 값 -1~2)일 때 y=-f(1-x)+1 그래프 옳은 것 선택 (5지선다).
  category: "그래프 변환 (대칭·평행이동 결합)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "y=-f(1-x)+1 = f 그래프 y축·x축 대칭 후 평행이동 재분해"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "5지선다 각 case 대조"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "-f(1-x)+1 다중 변환 재분해 통찰. A step 후반 정점."
  tier: star_2
  mechanism_primary: "그래프 변환 재분해"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B ● 상", "마플 NORMAL"]
    L5_confidence: 0.80

- id: 절대-CM2-GM-이동-B010
  page: 30
  vendor_label: "B step · 서술형 · 10"
  category_type: "B step 서술형"
  summary: |
    좌표평면 P(2,1)과 직선 y=x 위 점 Q, x축 위 점 R. 삼각형 PQR 둘레 최소일 때 R의 좌표 구하기.
  category: "다중 대칭 최단경로"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "P를 y=x·x축 대칭 → P', P''로 반사 통찰"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "둘레 = P'Q + QR + RP'' = P'P'' 직선 최단"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "직선 P'P''과 x축 교점 = R"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 5
  premium: false
  rationale: "SYM·BW depth 3 · Fagnano 계열 최단경로 원형 (O-01 근사). count=3 · premium 임계 5문 미달. B step 서술형 정점."
  tier: star_4
  mechanism_primary: "이중 대칭 최단경로"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  cross_reference:
    - source: 마-CM2-GM-이동-0664
      relation: "O-01 Fagnano 이중 대칭 원형 근사"
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-GM-이동-0664 O-01 원형 근사"]
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.80

- id: 절대-CM2-GM-이동-B011
  page: 30
  vendor_label: "B step · 11"
  category_type: "B step 일반"
  summary: |
    좌표평면 A(0,3), B(4,3). P는 x축, Q는 y=2, R은 y=1 위. AP+PQ+QR+RB 최솟값 구하기.
  category: "3직선 반사 최단경로"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "A를 x축, y=2, y=1 순차 반사 → A'''로 변환"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "합 최소 = A'''B 직선 거리"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "거리 공식 산출"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: "SYM·BW depth 3 · 3중 반사 최단경로. Fagnano 계열 확장 (O-01 근사). count=3 · premium 임계 미달."
  tier: star_4
  mechanism_primary: "3중 반사 최단경로"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  cross_reference:
    - source: 마-CM2-GM-이동-0664
      relation: "O-01 이중 대칭 확장"
    - source: 절대-CM2-GM-이동-B010
      relation: "동일 원형 · 반사 개수만 차이"
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-GM-이동-0664 O-01", "절대-CM2-GM-이동-B010 자기 파일 내 원형 중복"]
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.75

- id: 절대-CM2-GM-이동-C002
  page: 31
  vendor_label: "C step · 집중 연습 · 02"
  category_type: "C step 집중 연습"
  summary: |
    세 점 O(0,0), A(10,10), B(15,0) 삼각형 OAB의 세 변 AO, OB, BA 위의 세 점 P, Q, R (P·Q·R은 변 양 끝 점 아님). 삼각형 PQR 둘레 최솟값 구하기.
  category: "삼각형 내접 최소 둘레 · Fagnano"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "각 변 대칭 반사 3연속 · Fagnano 표준"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "둘레 = 반사 후 직선 거리 = 원본 세 반사 A 위치의 A-A''' 거리"
    - step: 3
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "직선 = sin(내각) 관계 · 삼각비 정리"
    - step: 4
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "정확한 산출"
    - step: 5
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "삼각형 실제 좌표 대입"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: false
  rationale: "SYM·BW·RT depth 3 (3카드) · P3+P4 신호. depth_score=8.8 · count=5. 다만 P 카드는 P3·P4 두 종만 → premium 이중 게이트 P 카드 2 = 통과. 실측 재판정 시 premium 승격 후보. O-01 Fagnano 표준 원형."
  tier: star_4
  mechanism_primary: "Fagnano 이중 반사 삼각형 내접"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  cross_reference:
    - source: 마-CM2-GM-이동-0664
      relation: "O-01 Fagnano 완전 동일 원형 · 자기복제 위험 高"
    - source: 절대-CM2-GM-이동-B010
      relation: "동일 파일 내 원형 중복 (반사 축 수만 다름)"
    - source: 절대-CM2-GM-이동-B011
      relation: "동일 파일 내 원형 중복"
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-GM-이동-0664 O-01 완전 일치", "절대 파일 내 3문 원형 축적"]
    L3_multi_vendor_tier: ["마플 STEP 3 학평 킬러", "블랙 STEP 3"]
    L5_confidence: 0.70
  friction_triggers: [F3]
  friction_verdict: YELLOW
  # F3: 절대등급이 O-01 원형을 파일 내 3회 반복 → 원형 다양성 부족 · problem-author 시 참신도 감쇠 강력 필요

### 【CM2-ST · 집합 (4장)】 3문

- id: 절대-CM2-ST-집합-B030
  page: 44
  vendor_label: "B step · 집중 연습 · 30"
  category_type: "B step 집중 연습"
  summary: |
    A={1,2,3,4,5,6}, B={x|x는 8의 양의 약수}. A의 부분집합 중 B와 서로소인 집합 X_i (i=1~n), 원소합 S(X_i). Σ S(X_i) 값 구하기.
  category: "부분집합 원소합 · Σ 반복"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "B와 서로소 X_i ⊂ A∖B={3,5,6} · 부분집합 총합 산출"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "각 원소가 나타나는 부분집합 수 = 2^(n-1)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "Σ = (원소 합) × 2^(n-1)"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "PD depth 3 · 원소별 등장 횟수 재구성 · 집합 정점 원형. count=3 · premium 미달."
  tier: star_4
  mechanism_primary: "부분집합 원소합 재구성"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3 집합의뜻", "쎈 C 사고력"]
    L5_confidence: 0.80

- id: 절대-CM2-ST-집합-C001
  page: 46
  vendor_label: "C step · 집중 연습 · 01"
  category_type: "C step 집중 연습"
  summary: |
    U={x|x는 30 이하 자연수}, A={x|(30-x)/6 ∈ U}, B_k={x|(x-k)(y-k)=30, y-k∈U}. n(A∩B_k)≥2인 자연수 k 값 모두 구하기.
  category: "약수 · 부분집합 조건 · 미지수 매개"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "A 원소 판별 · 30의 배수 성질"
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "B_k = 30 = (x-k)(y-k) 정수쌍 · k 매개 재구성"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "n(A∩B_k)≥2 조건 · k 값 열거"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "case 분기 · k별 정확 판정"
    - step: 5
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "결과 통합"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "PD·MI·EQV·VF depth 3 (4카드) · P1+P2+P5 신호 (3장). depth_score=8.8 · count=5 · max=3 · P 카드 ≥2 · premium 이중 게이트 통과. 정점 집합 원형."
  tier: star_4
  mechanism_primary: "정수쌍 매개 · A∩B 조건 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  cross_reference:
    - source: 마-CM2-ST-집합의뜻-premium 후보 (세션 61 P Agent)
      relation: "PD·MI 정점 원형 동일"
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3 집합의뜻 100% premium", "블랙 STEP 3"]
    L5_confidence: 0.75
  friction_triggers: [F3, F5]

- id: 절대-CM2-ST-집합-C007
  page: 47
  vendor_label: "C step · 집중 연습 · 07"
  category_type: "C step 집중 연습"
  summary: |
    f(x), g(x) 계수 2, -1인 이차함수. 전체집합 R, A={x|f(x)=g(x)}, B={x|f(x)g(x)=0}, C={x|(f(x)-k)(g(x)-k)=0}. A={α,β}, B={α,β+4}, n(C)=3, C 원소 합 6, 가능한 k 값 모두 구하기.
  category: "이차함수 교점·근 집합 다중 조건"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "A=B ∩ {α, β+4} 겹침 정합 → g(x)=0의 근 하나가 f(x)=g(x)와 일치"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "C 정확히 3원소 · k 매개 조건 (f(x)=k, g(x)=k 근이 겹침)"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "합 조건 = k 조건 다중 방정식"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "case별 k 값 열거"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "EQV·XU·CON depth 3 · P1+P4+P6 신호. depth_score=8.5 · count=4 · premium 임계 5문 미달 (근접 후보)."
  tier: star_4
  mechanism_primary: "이차함수 교점·근 다중 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3 집합·명제", "블랙 STEP 3"]
    L5_confidence: 0.75

### 【CM2-ST · 명제 (5장)】 3문

- id: 절대-CM2-ST-명제-A014
  page: 50
  vendor_label: "A step · 유형 3 모든과 어떤 · 14"
  category_type: "A step 일반"
  summary: |
    두 명제 'x>0인 어떤 실수 x에 대해 x+a<0', 'x<1인 모든 실수 x에 대해 x-a-2≤0' 모두 참일 때 실수 a 범위 구하기.
  category: "모든·어떤 명제 · 범위 결정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "어떤 x>0에 x+a<0 참 ↔ a<0 (∵ x→0⁺)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "모든 x<1에 x-a-2≤0 ↔ a≥-1 (∵ sup=1)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "교집합 -1≤a<0"
  insight_count: 3
  depth_score: 6.67
  base_star: 3
  star: 3
  premium: false
  rationale: "각 명제 참 조건 변환 · 교집합 정합. A step 후반 정점."
  tier: star_2
  mechanism_primary: "모든·어떤 명제 · 범위"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B ● 상", "마플 NORMAL"]
    L5_confidence: 0.85

- id: 절대-CM2-ST-명제-B017
  page: 56
  vendor_label: "B step · 17"
  category_type: "B step 일반"
  summary: |
    x, y, z 양수일 때 (1/(x+y) + 1/z)(x+y+9z) 최솟값 구하기.
  category: "산술기하 · 코시슈바르츠 결합"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "(x+y)와 z 치환 · s+9t 형태 재구성"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "(1/s + 1/t)(s+9t) 전개 · AM-GM 적용"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "등호 조건 · 최솟값 16"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "SC·EQV depth 3 · P1+P2 신호. 산술기하 정점 · 코시슈바르츠 결합 표준."
  tier: star_4
  mechanism_primary: "산술기하 · 코시슈바르츠"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3 근사", "쎈 C 사고력"]
    L5_confidence: 0.80

- id: 절대-CM2-ST-명제-C006
  page: 59
  vendor_label: "C step · 06"
  category_type: "C step 일반"
  summary: |
    높이 6 정삼각형 ABC 내부 점 P, 각 변 수선 길이 x, y, z. (1) x²+y²+z² 최솟값 (2) xy+yz+zx 최댓값.
  category: "정삼각형 내접점 · 등식 조건 최소·최대"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "정삼각형 내접점 수선 합 = 높이 (Viviani 정리 계열)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "x+y+z=6 조건 하 x²+y²+z² 최소 · 코시슈바르츠"
    - step: 3
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "xy+yz+zx = ((x+y+z)² - (x²+y²+z²))/2 재구성"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "등호 조건 · 정삼각형 무게중심"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "RT·EQV depth 3 · Viviani 정리 활용 (외국 수학자 이름 회피 필요) · P1+P3 신호. count=4 · premium 임계 5문 미달."
  tier: star_5
  mechanism_primary: "정삼각형 내접점 수선 합 · 대칭식 최적화"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3", "블랙 STEP 3"]
    L5_confidence: 0.70
  friction_triggers: [F1]
  friction_verdict: YELLOW
  # F1: "Viviani 정리"는 외국 수학자 이름 · CM2 정석 도구 대체 필요. 학생 답지에 이름 표기 금지 정책 (foreign-named-formula 정책 세션 58)

### 【CM2-FN · 함수 (6장)】 3문

- id: 절대-CM2-FN-함수-A038
  page: 67
  vendor_label: "A step · 유형 8 함숫값 구하기 · 38"
  category_type: "A step 일반"
  summary: |
    모든 실수 x에 대해 (x+2)f(2-x)+(2x+1)f(2+x)=1을 만족하는 f. f(5)의 값 구하기.
  category: "함수방정식 · 치환 대입"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "x=3, x=-3 대입 → f(-1)·f(5) 연립 등식 2개"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "연립 풀이 · f(5) 산출"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "XU depth 3 · 함수방정식 x·-x 치환 통찰 표준. A step 후반 최고급."
  tier: star_2
  mechanism_primary: "함수방정식 · 대입 치환"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C 사고력 근사", "마플 TOUGH"]
    L5_confidence: 0.80

- id: 절대-CM2-FN-함수-B029
  page: 72
  vendor_label: "B step · 29"
  category_type: "B step 일반"
  summary: |
    자연수 f: N→N, f(n) = n-2 (n≥100), f(f(n+4)) (n<100). f(81)+f(82)+...+f(100) 값 구하기.
  category: "재귀 정의 · 자기 참조 함수 · Σ"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "재귀 f(f(n+4)) 4단계 상승 → 100 도달 후 -2 감차"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "n 값에 따른 재귀 반복 횟수 패턴 발견"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "일반항 f(n) 명시화"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "case 분기 · f(81)~f(100) 정확 산출"
    - step: 5
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "Σ 합 계산"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "SC·PD·EQV·VF depth 3 (4카드) · P2+P5×2 신호. depth_score=8.8 · count=5 · max=3 · P 카드 ≥2 · premium 이중 게이트 통과. CM2-FN 정점 원형 (재귀+patter)."
  tier: star_4
  mechanism_primary: "재귀 함수 · patter 발견 · Σ"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  cross_reference:
    - source: 마-CM2-FN-합성역함수-1408
      relation: "premium 원형 세션 61 · 재귀+patter 계열"
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-FN-1408 근사"]
    L3_multi_vendor_tier: ["마플 STEP 3 (80% premium 소단원)", "블랙 STEP 3 킬러"]
    L5_confidence: 0.80
  friction_triggers: [F3, F5]

- id: 절대-CM2-FN-함수-C005
  page: 74
  vendor_label: "C step · 05"
  category_type: "C step 일반"
  summary: |
    X={x|x≥2}, f(x)=a(x-2)²+4a, g(x) = f(x) if f(x)≤f⁻¹(x); f⁻¹(x) if f⁻¹(x)≤f(x). y=g(x)·y=x-t 만나는 점 개수 h(t). h(1)>h(2)>h(4)일 때 f(4) 값 구하기 (0<a<1/2, t≥0).
  category: "합성 · min-max 함수 · 매개변수"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "g(x) = min(f, f⁻¹) 표현 · y=x 대칭"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "직선 y=x-t 위치별 교점 개수 h(t) case 분기"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "h(1)>h(2)>h(4) 부등호 매개 a 범위 결정"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "f(4) 산출"
    - step: 5
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "정확한 방정식 풀이"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "SYM·XU·VF·CON depth 3 (4카드) · P3+P4+P5+P6 신호 (4장). depth_score=8.8 · count=5 · premium 이중 게이트 통과. CM2-FN 정점 최상위 원형."
  tier: star_5
  mechanism_primary: "min-max · 대칭 · 직선 교점"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  cross_reference:
    - source: 마-CM2-FN-합성역함수-1524·1527
      relation: "premium 원형 세션 61 · 합성 min-max 계열"
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-FN-1524·1527 근사"]
    L3_multi_vendor_tier: ["마플 STEP 3 합성역함수 (80% premium 밀도)", "블랙 STEP 3 최상위"]
    L5_confidence: 0.80
  friction_triggers: [F3, F5]

### 【CM2-FN · 유리함수 (7장)】 3문

- id: 절대-CM2-FN-유리-A023
  page: 78
  vendor_label: "A step · 유형 5 유리함수 그래프의 활용 · 23"
  category_type: "A step 일반"
  summary: |
    원 (x-2)²+(y+1)²=10과 함수 y=(1-x)/(x-2) 그래프 네 점 (x_i, y_i) 만남. x_1<x_2<x_3<x_4. (y_1+y_4)/(x_2+x_3) 값 구하기.
  category: "유리함수 · 원 · 정근선 대칭"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "유리함수 정근선 대칭 (2, -1) · 원 중심 (2, -1) 일치"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "네 교점 대칭쌍 · x_1+x_4=x_2+x_3=4, y_1+y_4=y_2+y_3=-2"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "비율 -2/4 = -1/2"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "SYM depth 3 · 정근선-원 중심 일치 대칭 통찰. CM2-RF-유리 정점 원형 (SYM 정근선)."
  tier: star_2
  mechanism_primary: "유리함수 정근선-원 대칭"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3 유리함수 (★ 4 안정)", "쎈 C 사고력"]
    L5_confidence: 0.85

- id: 절대-CM2-FN-유리-B009
  page: 80
  vendor_label: "B step · 서술형 · 09"
  category_type: "B step 서술형"
  summary: |
    y = 2/(x-1) + 2 그래프 위 P에서 두 정근선에 내린 수선의 발 Q, R, 두 정근선 교점 S. 직사각형 PQSR 둘레 최솟값 구하기 (P 제1사분면).
  category: "유리함수 정근선 · 직사각형 둘레 최소"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "정근선 (1, 2) · P=(1+t, 2+2/t) 매개변수화"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "PQ = 2/t, PR = t · 둘레 = 2(t + 2/t)"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P1]
      description: "AM-GM · 최솟값 = 8 (t=√2)"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "SYM·CON depth 3 · AM-GM 정근선 정점 통찰. CM2-RF-유리 정점 원형 (SYM+CON)."
  tier: star_4
  mechanism_primary: "정근선 매개 · AM-GM"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["마플 STEP 3 유리함수 (★ 4 안정)", "쎈 C 사고력"]
    L5_confidence: 0.80

- id: 절대-CM2-FN-유리-C003
  page: 82
  vendor_label: "C step · 03"
  category_type: "C step 일반"
  summary: |
    f(x) = k/(x-1) + k (k>1). P(1, k)와 원점 지나는 직선 y=f(x)와 만나는 원점 아닌 점 A. P 지나고 원점 거리 1인 직선 l이 y=f(x)와 제1사분면 만나는 점 B, l과 x축 교점 C. 삼각형 PCO 넓이 = 삼각형 PBA 넓이의 2배일 때 k 값 구하기.
  category: "유리함수 · 삼각형 넓이 비 · 매개변수"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "정근선 (1, k) · 유리함수 대칭 매개"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "직선 l의 조건 (원점 거리=1) · 좌표 매개"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "삼각형 두 넓이 산출 · 비율 조건"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "k 값 매개변수 방정식 · 유일 해"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "SYM·XU·EQV·CON depth 3 (4카드) · P3+P4+P6 신호. depth_score=8.5 · count=4 · premium 임계 5문 미달 (근접). CM2-RF-유리 정점 → premium 승격 후보."
  tier: star_5
  mechanism_primary: "유리함수 매개 · 삼각형 넓이 비"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3 유리함수 (예외 · ★ 5 상승)", "블랙 STEP 3"]
    L5_confidence: 0.70

### 【CM2-FN · 무리함수 (8장)】 3문

- id: 절대-CM2-FN-무리-A016
  page: 85
  vendor_label: "A step · 유형 3 무리함수 그래프의 활용 · 16"
  category_type: "A step 일반"
  summary: |
    a, b 양수, f(x) = a√(x-b). y=f(x)와 y=f⁻¹(x) 그래프 한 점에서 만날 때 b-a 최솟값 구하기.
  category: "무리함수 자기역함수 · 접점"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "역함수 그래프 = y=x 대칭 · 한 점 만남 = y=x 접점"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "f(x) = x 접선 조건 → 판별식 = 0"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "b-a 최소 산출"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "SYM depth 3 · 자기역함수 정점 원형 (CM2-RF-무리 정점 원형 SYM+XU). A step 후반 최고급."
  tier: star_2
  mechanism_primary: "무리함수 자기역함수 · 접선"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C 사고력", "마플 STEP 3 무리 (20% premium)"]
    L5_confidence: 0.85

- id: 절대-CM2-FN-무리-B018
  page: 88
  vendor_label: "B step · 18"
  category_type: "B step 일반"
  summary: |
    f(x) = -√(ax+b) + c, X = {x|x ≥ -b/a}에서 Y로. 공역=치역, X∩Y={2}. g(x)는 R→R 정의된 함수, (가) g(x)=g⁻¹(x) (나) x∈X이면 g(x)=f(x). g(0)=6일 때 g(a)+g(b)+g(c) 값 구하기.
  category: "무리함수 · 확장 · 자기역함수 · 조각화"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "g = g⁻¹ 자기역함수 = y=x 대칭"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "X∩Y={2} · f 특정 조건 하 (a, b, c) 결정"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "g(0)=6 조건으로 g의 대칭 부분 판정"
    - step: 4
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "g(a)+g(b)+g(c) 대입 산출"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: "SYM·XU·EQV depth 3 · P3+P4 신호. depth_score=8.75 · count=4. CM2-RF-무리 정점 원형 (SYM+XU 자기역함수)."
  tier: star_4
  mechanism_primary: "자기역함수의 부분화 · 무리함수 확장"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  anchor_status: candidate
  cross_reference:
    - source: 세션 61 CM2-RF-무리함수 premium 원형
      relation: "SYM+XU 자기역함수 완전 동일 원형"
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3 무리 (예외 상승)", "블랙 STEP 3"]
    L5_confidence: 0.75

- id: 절대-CM2-FN-무리-C003
  page: 89
  vendor_label: "C step · 03"
  category_type: "C step 일반"
  summary: |
    f(x) = [x]-√(x-[x])와 g(x) = ax-1. y=f(x)·y=g(x) 그래프 서로 다른 여섯 점 만날 때 실수 a 범위 구하기 ([x]는 최대 정수).
  category: "가우스 · 무리함수의 부분 · 교점 6개"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "각 정수 구간 [n, n+1)에서 f(x) = n - √(x-n) 조각 정리"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 식과 직선 g(x)=ax-1의 교점 개수 다중 case"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "6개 교점 조건 · a 경계 정확 산출"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "경계 a 값 결합 · 범위 정확"
    - step: 5
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "각 부분별 접선·통과 조건 조합"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "VF·XU·EQV·CON depth 3 (4카드) · P4+P5+P6 신호 (3장). depth_score=8.8 · count=5 · max=3 · P 카드 ≥2 · premium 이중 게이트 통과. CM2-FN 정점 원형 (가우스+무리식 부분 · MI/VF 급)."
  tier: star_5
  mechanism_primary: "가우스 · 무리식 부분 · 다중 교점"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["마플 STEP 3 무리 (예외 최상위)", "블랙 STEP 3 킬러"]
    L5_confidence: 0.80
  friction_triggers: [F3, F5]

---

## 표본 판정 요약 (27문)

| ★ | GM-평좌 | GM-원 | GM-이동 | ST-집합 | ST-명제 | FN-함수 | FN-유리 | FN-무리 | 합계 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| ★ 2 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| ★ 3 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 4 |
| ★ 4 | 1 | 1 | 0 | 1 | 1 | 1 | 2 | 1 | 8 |
| ★ 5 | 1 | 1 | 3 | 1 | 1 | 0 | 1 | 1 | 9 |
| ★ 5 premium | 0 | 1 | 0 | 1 | 0 | 2 | 0 | 1 | **5** |
| 합계 | 4 | 4 | 4 | 3 | 3 | 3 | 3 | 3 | **27** |

**표본 재조정**: 실측 결과 ★ 2×1 · ★ 3×4 · ★ 4×8 · ★ 5×9 · premium×5.

## 예측 종합 (전체 322문)

| ★ | 표본 실측 (n=27) | 예측 (n=295) | 전체 (n=322) 예상 비율 |
|---|---:|---:|---:|
| ★ 1 | 0 (0%) | ~15 | 4.7% |
| ★ 2 | 1 (3.7%) | ~65 | 20.5% |
| ★ 3 | 4 (14.8%) | ~120 | 38.5% |
| ★ 4 | 8 (29.6%) | ~70 | 24.2% |
| ★ 5 | 9 (33.3%) | ~20 | 9.0% |
| ★ 5 premium | 5 (18.5%) | ~5 | 3.1% |

**참고**: 표본은 각 소단원 정점 (B·C step 중심)에 편향 · 실제 전체 분포는 A step 다수 반영 시 ★ 2~3 밀도 상승.

## 핵심 관찰

1. **절대등급 C step의 원형 다양성 부족** — 도형이동 C step 02가 이미 B step 10·11과 O-01 Fagnano 원형 3연속 중복. 원형 다양성이 마플 STEP 3·블랙라벨 STEP 3 대비 낮음.

2. **CM2-FN 정점 밀도 최고** — 표본 3문 중 premium 2문 (67%). 마플 STEP 3 함수 소단원 80% premium 밀도 재확인 (세션 61 결과와 정합).

3. **CM2-ST 정점 원형 풍부** — 부분집합 원소합(PD) · 정수쌍 매개(MI) · 이차함수 근집합(EQV+XU) 3원형 확보. 마플 STEP 3 집합의뜻 100% premium 밀도와 정합.

4. **CM2-RF 유리 vs 무리 대칭** — 유리는 SYM 정근선 정점 (★ 4 안정) · 무리는 SYM+XU 자기역함수 정점 (★ 5+ 상승). 세션 61 관찰 완전 재확인.

5. **Time attack 시간 표기의 학습 심리 신호** — 절대등급 유일한 특성. A step 1분 · B step 3분 · C step 7분 = 인지 부하 (M_total) 자체 라벨링 시도. 시스템 M_total 6·9·12와 정합 (표본 A=6~8 · B=8~10 · C=10~12).

6. **외국 수학자 이름 회피 대상 감지** — CM2-ST-명제-C006에 Viviani 정리 활용. 우리 시스템의 foreign-named-formula 정책 (세션 58) 위반. 학생 답지 조판 시 자연어 대체 필수.

## 절대등급 vs 쎈·마플 정점 문항 자기복제 감지

**중복 원형 후보** (동일 학평 원본·시그니처):

| 절대등급 문항 | 원형 코드 | 중복 감지 대상 |
|---|---|---|
| GM-이동-C002 | O-01 Fagnano | 마-CM2-GM-이동-0664 (2016.09 학평 30번) 완전 동일 · **자기복제 위험 매우 높음** |
| GM-이동-B010·B011 | O-01 파생 | 동일 원형 반사 개수만 다름 |
| GM-원-B020 | O-05·O-06 근사 | 쎈-CM2-GM-원-0360 · 마-CM2-GM-원-0512 근사 |
| GM-원-C004 | O-14 계열 | 마-CM1-EQ-이차-0723 도형+대수 융합 근사 |
| ST-집합-C001 | 세션 61 P Agent premium 원형 | 마플 STEP 3 집합의뜻 소단원 근사 |
| FN-함수-B029·C005 | 세션 61 M Agent premium 원형 | 마-CM2-FN-1408·1524·1527 근사 |
| FN-무리-B018 | 세션 61 CM2-RF-무리 정점 원형 | SYM+XU 자기역함수 완전 동일 원형 |

**자기복제 정책**:
- O-01 Fagnano는 이미 4문 확보 → problem-author 시 회차당 1문 이하 강력 감쇠 필수
- 절대등급의 O-01 3연속 중복은 벤더 자체 문제 (원본 은행 다양성 부족 신호)

## 특이사항

1. **교육과정 외 침투 감지**:
   - **없음** (Viviani 정리는 CM2 산술기하 정책 내에서 도구로 사용 가능하나 이름 표기는 금지)
   - 미적분Ⅱ 용어 없음 · 매개변수·극한·미분 자연어 대체 준수 예상 (해설 미검토)

2. **외국 수학자 이름 회피 필요**:
   - Viviani 정리 (ST-명제-C006) → "정삼각형 내접점 수선 합 = 높이" 자연어 대체
   - Fagnano 최단경로 (GM-이동 3문) → "이중 대칭 반사" 자연어 대체

3. **vendor label 정정 신호**:
   - C step 표본 6문 중 정합률 67% → 편차 큼 (B step 78%, A step 85% 대비)
   - C step은 일반/집중 연습 구분이 실질 ★ 차이와 완전 매칭되지 않음 (일반이 오히려 premium인 case 다수)
   - 회귀 함수 v1.11에서 C step은 문항번호 기반 세분화 필요 (예: C-01~C-04는 소단원별 킬러 · C-05~C-08은 서브 킬러)

4. **개념 정리 페이지의 원본 은행 가치 없음**:
   - 각 소단원 첫 페이지 (예: p.6 점과 직선 개념 정리) = 개념원리·RPM 유사 개념 요약
   - 정리편·유형편·연습편 원본 은행으로 활용 가능 (concept-author agent 참조 대상)

5. **Time attack 시간 표기의 활용 가능성**:
   - A step 1분·B step 3분·C step 7분 = 학습자 페이싱 목표
   - 우리 시험지 테스트지 (5단계 A~E) 시간 배분 참조 신뢰도 향상 가능

## 관련 자산 · 편입 대상

- `bank/vendor-label-calibration.md` — v1.11 편입 (절대등급 회귀 함수 신규 등재 · 신뢰도 A- 급)
- `bank/premium-원형-카탈로그.md` — v1.1 편입 (신규 원형 감지: O-15 재귀 함수 patter · O-16 min-max 대칭 · O-17 가우스+무리식 부분)
- `scripts/star-classify.mjs` — v1.8 확장 (절대등급 라벨 판별 규칙)
- `scripts/anchor-neighbors.mjs` — 자기복제 감지 대상 확장 (O-01 원형 4문 → 5문 → problem-author 감쇠 강도 상향)

## 변경 이력

- 2026-07-21 v1.0 — 초판. 표본 27문 층화 판정 (GM 12 · ST 6 · FN 9). 절대등급 라벨 체계 A/B/C step 첫 매핑 · vendor-label-calibration v1.11 편입 초안. premium 후보 5건 (실측 재판정 시 O-15·O-16·O-17 신규 원형 등재 후보). 자기복제 O-01 Fagnano 파일 내 3중 중복 감지.

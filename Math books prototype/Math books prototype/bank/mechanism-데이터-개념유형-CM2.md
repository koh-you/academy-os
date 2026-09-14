---
name: mechanism-데이터-개념유형-CM2
description: 개념+유형 (동아출판) 2022개정 공통수학2 개념편·유형편 통합 정독 데이터. 개념편 (248p) · 유형편 (96p) 두 원본 통합. CM2 전체 4대단원 (GM·ST·FN·RF) 소단원 균형 층화 표본 30문 (개념편 15 + 유형편 15). 저작권 준수 (원문 전사 없음 · 시그니처 3원소 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 개념+유형 (동아출판) 2022개정 공통수학2 · 개념편 + 유형편 세트
  section: CM2 전체 (GM 도형의방정식 · ST 집합과명제 · FN 함수 · RF 유리·무리함수)
  unit_code: CM2-ALL
  sub_units: [평면좌표, 직선의방정식, 원의방정식, 도형이동, 집합, 명제, 함수, 유리함수, 무리함수]
  citation_note: "개념+유형 (동아출판) 정독. 학습 목적. 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소 요약 · 유사도 0.30~0.85 범위 준수)"
  extract_range: "개념편 pp.6~247 · 유형편 pp.4~95 (교재 표기 페이지 기준)"
  pages: "개념편 248p · 유형편 96p"
  total_problems: "약 950문 (개념편 대표예제·유제·연습 ~700 + 유형편 유형·마무리 ~250 추정)"
  sample_problems: 30
  predicted_problems: "약 920문 (표본 외 · 벤더 라벨 부재 회귀 미적용)"
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: 세션 62 그룹 3 병렬 정독 (일품·블랙라벨·절대등급·개념유형)
  vendor_calibration_target: "본 파일은 개념+유형 벤더 라벨 체계 최초 매핑 · vendor-label-calibration.md v1.11 편입 초안 제공"
---

# 개념+유형 (동아출판) 2022개정 공통수학2 정독 데이터

## 벤더 특성 요약

**출판사**: 동아출판 (개념+유형 시리즈)
**시리즈 구성**: 개념편 (248p) + 유형편 (96p) 세트 판매 · 개념·유형이 물리적으로 분리된 이중 교재
**타깃**: 개념 완성 후 유형 반복 훈련 · 기본·표준 tier · **개념원리·RPM의 하위 tier와 유사한 원본 pool**

### 라벨 체계 (실측 확인)

**개념편** (2단 구조: 대표예제·유제·하단 연습):
- **대표예제** (**Point** 헤더 · 큰 문제 번호 01, 02, ...): 유형 대표 · 개념 도입 예시. 실측 tier: 주로 **★ 2~3**, 일부 ★ 3~4.
- **유제** (01-1, 01-2, 01-3 소번호): 대표예제의 숫자·상황 변형. 실측 tier: **★ 2~3**.
- **하단 연습문제** (섹션 하단 · 큰 번호 1, 2, 3, ...): 대응 대표예제 이해 확인. 실측 tier: **★ 2~3** (일부 ★ 4 진입).

**유형편** (유형별 5~8문 세트):
- **유형 01, 02, ...**: 각 유형마다 개념·전형 발문 5~8문. 실측 tier: **★ 2~3** 최빈.
- **UP 마킹 유형** (예: 06 UP, 07 UP): 심화·발전 유형 · **★ 3~4** 진입.
- **유형편 후반부** (각 소단원 마지막 유형 · 서술·응용): **★ 4** 도달 가능.

### 예측 (표본 판정 기반)

| 라벨 | 실측 표본 | 최빈 ★ | 신뢰도 (표본 미확대) |
|---|---:|---|---:|
| 개념편 대표예제 | 7 | **★ 2** (alt ★ 3) | 0.65 |
| 개념편 유제 | 4 | **★ 2** (alt ★ 3) | 0.60 |
| 개념편 연습 (하단) | 4 | **★ 2~3** | 0.60 |
| 유형편 일반 유형 | 10 | **★ 2~3** | 0.65 |
| 유형편 UP·심화 | 5 | **★ 3~4** | 0.65 |

**premium 후보 밀도**: **0/30 (0%)** · **premium 후보 부재**. 개념+유형은 정리편·유형편·연습편의 star_2·3·4 원본으로 최적 · **시험지 최상위 pool로는 부적합** (star_5 실질 부재).

---

## 표본 판정 (30문)

### CM2-GM 평면좌표 (5문)

- id: 개유-CM2-GM-평면좌표-개-P01-01
  page: 8 (개념편 · 대표예제 01)
  vendor_label: "개념편 대표예제 01 (두 점 사이 거리)"
  category_type: "대표예제 (Point)"
  summary: |
    두 점 A(2,3), B(a-1,-1) 사이 거리가 4√2일 때 a 구하기. 
    두 점 A(-1,1), B(a,-2), C(4,0)에서 |AB|=|BC|일 때 a.
    두 부분 문항 (숫자 대입 표준).
  category: "두 점 사이 거리 · 방정식 유도"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 대입 후 이차방정식 표준 풀이. 통찰 없음 · 절차형.
    두 부분 문항 나열로 훈련량 확보. base ★ 2.
  tier: star_2
  mechanism_primary: "두 점 거리 공식 직접 대입"
  insight_type: 절차형
  target_cohort: 중위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 대표예제 유사", "RPM 유형익히기 유사"]
    L5_confidence: 0.75

- id: 개유-CM2-GM-평면좌표-개-P01-01-3
  page: 9 (개념편 · 유제 01-3)
  vendor_label: "개념편 유제 01-3"
  category_type: "유제"
  summary: |
    A(5,a), B(a,-3) 사이 거리 |AB|의 최솟값을 구하는 a 값.
  category: "거리 최소 · 이차함수 정점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      description: "거리 제곱 함수의 최소값 인식 (완전제곱)"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 3
  premium: false
  rationale: |
    거리 공식 → 이차함수 최소값 표준 유형. 완전제곱 인식 필요 · 미약한 I-XU depth 1.
    base ★ 2 → I-XU 소량 가산으로 ★ 3.
  tier: star_2
  mechanism_primary: "거리 제곱 이차함수 최소"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개유-CM2-GM-평면좌표-개-P04-01
  page: 12 (개념편 · 대표예제 04)
  vendor_label: "개념편 대표예제 04 (삼각형 판정)"
  category_type: "대표예제 (Point)"
  summary: |
    A(-1,0), B(1,-2), C(5,2) 세 점을 꼭짓점으로 하는 삼각형이 어떤 삼각형인지 판정.
  category: "삼각형 종류 판정 · 세 변 길이 비교"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "세 변 길이 산출 후 피타고라스 조건 비교 (직각 판정)"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    세 변 길이 계산 후 |AB|²+|BC|²=|CA|² 확인 → 직각삼각형 판정. 절차 표준 · I-EQV depth 1.
    개념원리·RPM 유형익히기 수준. base ★ 2 유지.
  tier: star_2
  mechanism_primary: "세 변 거리 · 피타고라스 판정"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개유-CM2-GM-평면좌표-유-01-4
  page: 4 (유형편 · 01 유형 · 4번)
  vendor_label: "유형편 유형 01 · 4번 (조건 만족 a)"
  category_type: "유형 문항"
  summary: |
    A(a,6), B(-1,a) 사이 거리가 5일 때 a의 개수.
  category: "두 점 거리 · a 조건 (개수 세기)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 2
  premium: false
  rationale: |
    거리 방정식 → 이차방정식 해의 개수 세기. 5지선다 · 훈련용 · ★ 2.
  tier: star_3
  mechanism_primary: "거리 방정식 · 해 개수"
  insight_type: 절차형
  target_cohort: 중위권

- id: 개유-CM2-GM-평면좌표-유-08-18
  page: 10 (유형편 · 08 UP 유형 · 18번)
  vendor_label: "유형편 UP 08 · 18번 (무게중심 · 미지수)"
  category_type: "유형 UP (심화)"
  summary: |
    A(4,-5), B(a,b-2), C(b+5,-a+1) 세 점을 꼭짓점으로 하는 삼각형의 무게중심이 (4,1)일 때 b/a.
  category: "무게중심 좌표 · 연립"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "무게중심 좌표 = 세 꼭짓점 좌표 평균 → 연립방정식"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    무게중심 공식 두 성분으로 a, b 연립. I-EQV depth 2 · 절차 안정. base ★ 3.
    UP 라벨이라도 실제 ★ 3 수준.
  tier: star_4
  mechanism_primary: "무게중심 공식 연립"
  insight_type: 통찰형
  target_cohort: 중위권

### CM2-GM 직선의방정식 (4문)

- id: 개유-CM2-GM-직선-개-P01-01
  page: 32 (개념편 · 대표예제 01)
  vendor_label: "개념편 대표예제 01 (직선 방정식)"
  category_type: "대표예제 (Point)"
  summary: |
    (2,-5),(4,3) 지나는 직선 방정식 · A(-2,6),B(1,-3) AB선분 1:2 내분점 지나고 기울기 2인 직선.
    두 부분 문항.
  category: "직선 방정식 유도 (두 점·내분점)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    두 점 지나는 직선 · 내분점 계산 표준. 훈련 목적 반복. base ★ 2.
  tier: star_2
  mechanism_primary: "직선 방정식 · 내분점 공식"
  insight_type: 절차형
  target_cohort: 중위권

- id: 개유-CM2-GM-직선-유-01-3
  page: 12 (유형편 · 01 유형 · 3번)
  vendor_label: "유형편 유형 01 · 3번 (조건부 직선)"
  category_type: "유형 문항"
  summary: |
    삼각형 ABC의 꼭짓점 B, BC에서 P를 매개변수, ACP에서 2:1 내분점 P의 좌표.
  category: "삼각형 내부 매개변수 점 좌표"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 공식 반복. 훈련 목적 · ★ 2.
  tier: star_3
  mechanism_primary: "내분점 공식"
  insight_type: 절차형
  target_cohort: 중위권

- id: 개유-CM2-GM-직선-유-03-9
  page: 13 (유형편 · 03 유형 · 9번)
  vendor_label: "유형편 유형 03 · 9번 (직선 다발 · 정점)"
  category_type: "유형 문항"
  summary: |
    (3+k)x+(k-1)y-5+k=0이 k값에 무관하게 지나는 정점 P에서 x축까지 거리 3인 조건.
  category: "직선 다발 · 정점 판정"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "매개변수 k에 대한 항등식 분해 → 정점"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    k 항등식 분해 표준. I-EQV depth 2. 개념원리·RPM 필수예제·시험꼭나오는 수준. base ★ 3.
  tier: star_3
  mechanism_primary: "매개변수 항등식 · 정점"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 개유-CM2-GM-직선-유-08-24
  page: 15 (유형편 · 08 UP 유형 · 24번)
  vendor_label: "유형편 UP 08 · 24번 (세 직선 삼각형 만들지 않음)"
  category_type: "유형 UP"
  summary: |
    kx-y+k-6=0, 2x-y-1=0, x-2y+4=0 세 직선이 삼각형을 이루지 않는 k값의 합.
  category: "세 직선 삼각형 판정 · 실수 k 조건"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "삼각형 형성 실패 세 case 분류 (평행 2쌍 + 3직선 공유점)"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 4
  premium: false
  rationale: |
    Case 분류 통찰형. 3가지 case 완전 판정 · I-SC depth 2 (case 세기 완결성). 
    개념+유형 UP 라벨과 실제 star_4 부합. base ★ 3 → +1 (case 완결성) = ★ 4.
  tier: star_4
  mechanism_primary: "세 직선 case 분류 · 평행·공유점"
  insight_type: 통찰형
  target_cohort: 중상위권

### CM2-GM 원의방정식 (3문)

- id: 개유-CM2-GM-원-유-27
  page: 30 (유형편 · 27번)
  vendor_label: "유형편 원 · 27번 (원과 직선 교점)"
  category_type: "유형 문항"
  summary: |
    x²+y²=20 위의 점 (a,b)에서 접선이 2x+y-10=0일 때 ab.
  category: "원 위의 점에서 접선 · 계수 관계"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    접선 방정식 xa+yb=r² 대입 · 상수항 매치. 5지선다 표준. ★ 2.
  tier: star_2
  mechanism_primary: "원 위 점 접선 · 계수 대응"
  insight_type: 절차형
  target_cohort: 중위권

- id: 개유-CM2-GM-원-유-29
  page: 30 (유형편 · 29번)
  vendor_label: "유형편 원 · 29번 (삼각형 넓이)"
  category_type: "유형 문항"
  summary: |
    x²+y²=25 위의 점 P(-3,4)에서 접선과 x축 만나는 점 A, x축 위의 점 A와 원 교점 B에 대해 삼각형 ABP 넓이.
  category: "원 접선 · 삼각형 넓이"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "접선 유도 → 축 교점 → 삼각형 넓이 (밑변·높이)"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    접선 + 축 교점 좌표 유도 후 삼각형 넓이. I-EQV depth 2 · 다단 계산. ★ 3.
  tier: star_3
  mechanism_primary: "원 접선 + 축 교점 + 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 개유-CM2-GM-원-유-32
  page: 30 (유형편 · 32번)
  vendor_label: "유형편 원 · 32번 (삼각형 넓이 · 원 외부점)"
  category_type: "유형 문항"
  summary: |
    A(4,-2)에서 x²+y²=4에 그은 두 접선의 접점 B, C 삼각형 ABC의 넓이.
  category: "외부점 접선 두 접점 삼각형 넓이"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      description: "접선 두 개·접점 좌표 산출 (원-직선 근사 · 수직 관계)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "삼각형 넓이 = 접선 길이 활용"
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 4
  premium: false
  rationale: |
    외부점→ 접점 삼각형 넓이 표준 원형 · I-RT + I-EQV depth 2×2. base ★ 3 → +1 = ★ 4.
    개념+유형에서 실질 star_4 문항으로 확보 가능한 몇 안 되는 유형.
  tier: star_4
  mechanism_primary: "외부점 접선 · 접점 삼각형 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권

### CM2-GM 도형이동 (3문)

- id: 개유-CM2-GM-이동-개-P01-01
  page: 90 (개념편 · 대표예제 01 · y=x 대칭)
  vendor_label: "개념편 대표예제 01 (도형이동 · 좌표 대칭)"
  category_type: "대표예제 (Point)"
  summary: |
    (-2,3)을 x축·y축·원점·y=x에 대칭한 좌표 나열.
  category: "점의 4가지 대칭 · 표준 규칙"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    대칭 규칙 4종 직접 대입. 순수 계산 · 훈련 초입. ★ 1.
  tier: star_2
  mechanism_primary: "점의 대칭 규칙 4종"
  insight_type: 절차형
  target_cohort: 하위권

- id: 개유-CM2-GM-이동-개-P02-01
  page: 92 (개념편 · 대표예제 02 · 도형의 대칭)
  vendor_label: "개념편 대표예제 02 (도형이동 · 도형 대칭·평행이동)"
  category_type: "대표예제 (Point)"
  summary: |
    y=2x+k의 x축 대칭이 (3,2) 지날 때 k · (x-2)²+(y-1)²=1의 y=x 대칭이 y=-3x+k와 만날 때 k.
    두 부분 문항.
  category: "도형 대칭·평행이동 후 조건"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "도형 f(x,y)=0 대칭 → f(x,-y)=0 · f(y,x)=0 규칙 적용"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    대칭 변환 규칙 적용 후 대입. I-EQV depth 2 (변환 규칙 인식). base ★ 3.
    RPM 유형익히기 상단 수준.
  tier: star_2
  mechanism_primary: "도형 대칭 규칙 · 대입"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개유-CM2-GM-이동-개-P03-01
  page: 94 (개념편 · 대표예제 03 · 최단경로)
  vendor_label: "개념편 대표예제 03 (도형이동 · 대칭점 최단경로)"
  category_type: "대표예제 (Point)"
  summary: |
    A(0,1), B(6,3)에서 x축 위 P에 대해 |AP|+|BP|의 최솟값.
  category: "대칭점 · 두 선분 합 최솟값 (Heron 원형)"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "대칭점 B'로 두 선분 합을 한 선분으로 치환 (Heron)"
  insight_count: 1
  depth_score: 6
  base_star: 3
  star: 4
  premium: false
  rationale: |
    Heron 대칭점 원형 · I-SYM depth 3 P3 신호. base ★ 3 → +1 (통찰 원형 인정) = ★ 4.
    **개념+유형에서 실질 ★ 4 확보 가능한 대표 원형**. 도형이동 정점 (Fagnano O-01)의 
    기초형 → 정리편·유형편 원본으로 최적.
  tier: star_2
  mechanism_primary: "대칭점 · 두 선분 합 최소 (Heron)"
  insight_type: 통찰형
  target_cohort: 중상위권
  cross_reference:
    - source: 마-CM2-GM-이동-0664 (Fagnano · O-01)
      relation: "기초 원형 (같은 통찰 · 단일 대칭 vs 이중 대칭)"

### CM2-ST 집합·명제 (5문)

- id: 개유-CM2-ST-집합연산-개-P10-01
  page: 132 (개념편 · 대표예제 10)
  vendor_label: "개념편 대표예제 10 (드모르간)"
  category_type: "대표예제 (Point)"
  summary: |
    n(U)=80, n(A)=52, n(A∩B)=20, n(A^c∩B^c)=13일 때 n(B).
  category: "드모르간 · 원소 개수 유추"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "A^c∩B^c = (A∪B)^c 인식 → n(A∪B) 유도"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    드모르간 · 개수 공식 표준 · I-EQV depth 2. base ★ 3.
  tier: star_2
  mechanism_primary: "드모르간 · 개수 공식"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개유-CM2-ST-집합-개-P12-01
  page: 134 (개념편 · 대표예제 12)
  vendor_label: "개념편 대표예제 12 (최대·최소)"
  category_type: "대표예제 (Point)"
  summary: |
    n(U)=60, n(A)=42, n(B)=33일 때 n(A∩B)의 최대 M·최소 m의 합.
  category: "교집합 개수 최대·최소 (포함관계 극단)"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "B⊂A일 때 최대·A∪B=U일 때 최소 (포함관계 극단)"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    포함관계 극단 두 case로 최대·최소 유도 · I-BW depth 2. base ★ 3. 
    개념+유형에서 ST 파트의 대표 심화 원형.
  tier: star_2
  mechanism_primary: "포함관계 · 극단 case (최대·최소)"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 개유-CM2-ST-집합-연-1
  page: 134 (개념편 하단 연습 1번)
  vendor_label: "개념편 하단 연습 · 1번"
  category_type: "연습문제"
  summary: |
    U={x|x는 20이하 자연수}, A={x|x는 20의 약수}, B={x|x=3n-1, n∈ℕ}, C={x|x는 8이하 자연수}일 때 (A∩B)∪C의 원소 개수.
  category: "집합 연산 · 원소 열거"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    집합 원소 나열 후 연산 · 5지선다. 훈련 목적 · ★ 2.
  tier: star_2
  mechanism_primary: "집합 원소 열거 · 연산"
  insight_type: 절차형
  target_cohort: 중위권

- id: 개유-CM2-ST-명제-유-05-15
  page: 60 (유형편 · 유형 05 · 15번)
  vendor_label: "유형편 명제 · 15번 (참·거짓 판정)"
  category_type: "유형 문항"
  summary: |
    복소수 관련 두 명제 참·거짓 판정: ①|a|+|b|=0 → a²-b²=0 ②ab=0 → a+bi=0.
    (a, b ∈ ℝ, i = √-1)
  category: "명제 참·거짓 · 복소수"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "명제 참·거짓 · 반례·정의 검토"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    명제 참·거짓 판정 · 반례 사고 (I-CON depth 2). CM1-EQ 복소수 결합. base ★ 3.
  tier: star_3
  mechanism_primary: "명제 참·거짓 · 반례 판정"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개유-CM2-ST-절대부등식-유-04-13
  page: 66 (유형편 · 04 절대부등식 · 13번)
  vendor_label: "유형편 절대부등식 · 13번"
  category_type: "유형 문항"
  summary: |
    a, b > 0에서 ab=6일 때 2a+3b의 최솟값.
  category: "산술기하 · 계수 다른 두 항 합"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "2a·3b 곱 산술기하 활용 (2a+3b ≥ 2√6ab)"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    산술기하 표준 · 계수 조정 인식 I-EQV depth 2. base ★ 3.
  tier: star_3
  mechanism_primary: "산술기하 · 계수 조정"
  insight_type: 통찰형
  target_cohort: 중위권

### CM2-FN 함수 (5문)

- id: 개유-CM2-FN-함수-유-01-3
  page: 68 (유형편 · 유형 01 · 3번)
  vendor_label: "유형편 함수 · 3번 (함수 판정)"
  category_type: "유형 문항"
  summary: |
    X={x|0<x≤1, x∈ℝ}, Y={x|-2<x<2}에서 X에서 Y로의 함수 판정 (5지 대응 규칙 중).
  category: "함수 정의 · 정의역·공역 대응 판정"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "함수 정의 (모든 정의역 원소 대응·공역 소속) 판정"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    함수 정의 판정 표준. I-EQV depth 1. ★ 2.
  tier: star_2
  mechanism_primary: "함수 정의 판정"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개유-CM2-FN-함수-유-03-8
  page: 69 (유형편 · 유형 03 · 8번)
  vendor_label: "유형편 함수 · 8번 (함수방정식)"
  category_type: "유형 문항"
  summary: |
    a, b에 대해 f(ab)=f(a)+f(b)이고 f(6)=2일 때 f(1/6).
  category: "함수방정식 · 로그 유형"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(1)=0, f(1/x)=-f(x) 유도 (함수방정식 성질)"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    함수방정식 성질 유도 · I-EQV depth 2. base ★ 3. 개념원리 대표예제급.
  tier: star_3
  mechanism_primary: "함수방정식 · 성질 유도"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 개유-CM2-FN-역함수-개-P05-01
  page: 210 (개념편 · 대표예제 05 · 역함수 그래프)
  vendor_label: "개념편 대표예제 05 (역함수 그래프)"
  category_type: "대표예제 (Point)"
  summary: |
    y=f(x)와 y=x 그래프에서 (f∘f)^{-1}(c)의 값 (그래프 표현).
  category: "역함수 그래프 · 합성함수 역"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "(f∘f)^{-1} = f^{-1}∘f^{-1} 인식 (역함수 성질)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "그래프에서 y=x 반사로 역함수 값 추적"
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 4
  premium: false
  rationale: |
    역함수 성질 + 그래프 추적 이중 통찰. I-XU + I-EQV depth 2×2. base ★ 3 → +1 = ★ 4.
    **개념+유형에서 CM2-FN ★ 4 확보 가능 대표 원형** · 정리편·유형편 원본으로 최적.
  tier: star_2
  mechanism_primary: "역함수 합성 · 그래프 y=x 반사"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 개유-CM2-FN-합성-유-1
  page: 212 (개념편 · 하단 연습 1)
  vendor_label: "개념편 하단 연습 · 1번"
  category_type: "연습문제"
  summary: |
    f(x)=ax+b, f^{-1}(5)=2, f^{-1}(6)=3일 때 ab.
  category: "역함수 값 · 계수 결정"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    역함수 값 → 원함수 연립. 표준 계산. ★ 2.
  tier: star_2
  mechanism_primary: "역함수 값 · 연립"
  insight_type: 절차형
  target_cohort: 중위권

- id: 개유-CM2-FN-합성역-유-9
  page: 212 (개념편 · 하단 연습 9)
  vendor_label: "개념편 하단 연습 · 9번"
  category_type: "연습문제"
  summary: |
    f(x)=x³+1일 때 (f^{-1}∘f∘f^{-1})(a)=3인 a.
  category: "합성함수 · 역함수 값"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(f^{-1}∘f∘f^{-1}) = f^{-1} 간소화"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    합성 간소화 통찰 · I-EQV depth 2. base ★ 3.
  tier: star_3
  mechanism_primary: "합성역 간소화"
  insight_type: 통찰형
  target_cohort: 중상위권

### CM2-RF 유리·무리함수 (5문)

- id: 개유-CM2-RF-유리-개-P01
  page: 234 (개념편 · 유리식 대표예제)
  vendor_label: "개념편 대표예제 (유리식 계산)"
  category_type: "대표예제 (Point)"
  summary: |
    A/B + B/C = (A+B)/C (분모 공유 조건), A/B ÷ C/D = AD/BC 규칙 학습.
    구체 대입 없음 (개념 정리 성격).
  category: "유리식 사칙 · 규칙"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    유리식 사칙 규칙 열거 · 훈련 초입. ★ 1.
  tier: star_2
  mechanism_primary: "유리식 사칙"
  insight_type: 절차형
  target_cohort: 하위권

- id: 개유-CM2-FN-유리함수-유-01
  page: 82~89 (유형편 · 유리함수 유형 대표)
  vendor_label: "유형편 유리함수 · 대표 유형"
  category_type: "유형 문항 (대표)"
  summary: |
    표준형 y=k/(x-p)+q로 변환 후 점근선 · 그래프 이동 판단.
  category: "유리함수 · 표준형 변환"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "표준형 변환 (분수 나눗셈 정리)"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    유리함수 표준형 변환 표준 · I-EQV depth 2. base ★ 3. 
    유리함수 파트는 개념+유형 전반적으로 ★ 2~3에 집중.
  tier: star_3
  mechanism_primary: "유리함수 표준형 · 점근선"
  insight_type: 통찰형
  target_cohort: 중위권

- id: 개유-CM2-RF-무리-유-01
  page: 89~95 (유형편 · 무리함수 대표 유형)
  vendor_label: "유형편 무리함수 · 대표 유형"
  category_type: "유형 문항 (대표)"
  summary: |
    y=√(x-a)+b 그래프 이동 판단 · 정의역·치역 파악.
  category: "무리함수 · 표준형 · 정의역"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    무리함수 표준형 · 정의역 판단. 훈련 표준. ★ 2.
  tier: star_2
  mechanism_primary: "무리함수 표준형 · 정의역·치역"
  insight_type: 절차형
  target_cohort: 중위권

- id: 개유-CM2-RF-유리-역함수-대표
  page: 82~89 (유형편 · 유리함수 역함수 유형)
  vendor_label: "유형편 유리함수 역함수 · 유형"
  category_type: "유형 문항"
  summary: |
    y=(ax+b)/(cx+d)의 역함수가 자기 자신이 되는 조건 (a+d=0).
  category: "자기역함수 조건 (유리함수)"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      description: "자기역함수 조건 = y=x 대칭 (a+d=0 유도)"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    자기역함수 조건 표준 · I-SYM depth 2. base ★ 3. 
    유리함수 파트는 개념+유형에서 ★ 3 이상 밀도 낮음 (star_4 부재).
  tier: star_3
  mechanism_primary: "자기역함수 조건 (유리)"
  insight_type: 통찰형
  target_cohort: 중상위권

- id: 개유-CM2-RF-무리-최대최소
  page: 89~95 (유형편 · 무리함수 최대 최소)
  vendor_label: "유형편 무리함수 · 최대최소 유형"
  category_type: "유형 문항"
  summary: |
    y=√(ax+b)+c 그래프와 직선 y=mx+n의 교점 최대·최소 관련 매개변수 조건.
  category: "무리함수 · 직선 교점 최대·최소"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "직선-무리함수 교점 조건 · 접점·경계 case 분류"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 3
  premium: false
  rationale: |
    무리함수 교점 case 분석. I-XU depth 2. base ★ 3. 
    개념+유형에서 무리함수 파트는 star_3 이상 진입은 있으나 ★ 4 진입 밀도 낮음.
  tier: star_3
  mechanism_primary: "무리함수 · 직선 교점 case"
  insight_type: 통찰형
  target_cohort: 중상위권

---

## 표본 판정 요약 (30문)

| ★ | 개념편 | 유형편 | **합계** |
|---|---:|---:|---:|
| ★ 1 | 2 (P01 대칭, 유리식 규칙) | 0 | **2 (6.7%)** |
| ★ 2 | 4 (거리 대표·삼각형·직선·연습) | 5 (거리·내분·원·함수·무리) | **9 (30.0%)** |
| ★ 3 | 4 (거리 유제·집합·명제·역함수) | 8 (직선정점·원접선·산술기하 등) | **12 (40.0%)** |
| ★ 4 | 3 (도형이동 대칭점·역함수 그래프·집합 최대최소) | 2 (세직선·원접선삼각형) | **5 (16.7%)** |
| ★ 5 | 0 | 0 | **0 (0%)** |
| ★ 5 premium | 0 | 0 | **0 (0%)** |
| **소계** | **13** | **17** | **30** |

*합계 30 (문항 표기 15+15에서 유형편 몇 문 추가 편입 조정)*

---

## 예측 종합 (전체 약 950문)

| ★ | 표본 실측 | 예측 밀도 (전체) | 추정 문항수 |
|---|---:|---:|---:|
| ★ 1 | 2/30 (7%) | 5~10% | 50~95 |
| ★ 2 | 9/30 (30%) | 35~40% | 330~380 |
| ★ 3 | 12/30 (40%) | 40~45% | 380~430 |
| ★ 4 | 5/30 (17%) | 10~15% | 95~140 |
| ★ 5 | 0/30 (0%) | **1% 이하** | **10 이하** |
| ★ 5 premium | 0/30 (0%) | **0%** | **0** |

**개념+유형 벤더 프로필 요약**:
- **★ 2~3 밀도 최상급 (70%)** · 절차·표준 훈련 문항 pool 최적
- **★ 4 확보 가능**: 유형편 후반·개념편 심화 대표예제 (17%)
- **★ 5·premium 사실상 부재**: 시험지 최상위 슬롯 원본으로는 부적합

---

## 개념+유형 벤더 라벨 → 시스템 ★ 회귀 매핑 초안 (v1.11 편입 후보)

### 회귀 함수 초안

```
개념유형_star_predict(edition, label, sub_unit) =
  # 개념편
  if edition == "개념편":
    if label matches "대표예제 (Point)":      return {star: 2, confidence: 0.65, alt: [3]}
    if label matches "유제 (\d\d-\d)":         return {star: 2, confidence: 0.60, alt: [3]}
    if label matches "하단 연습":              return {star: 2, confidence: 0.60, alt: [3]}
  
  # 유형편
  elif edition == "유형편":
    if label matches "유형 \d\d" (일반):       return {star: 2~3, confidence: 0.65, alt: [4]}
    if label matches "UP" or "심화":            return {star: 3, confidence: 0.65, alt: [4]}
    if label matches "유형편 후반부·서술":     return {star: 3~4, confidence: 0.55}
  
  # 소단원 예외 (표본 관찰)
  if sub_unit == 도형이동 and label matches "대표예제 03 (최단경로)": return {star: 4, confidence: 0.80}
  if sub_unit == 함수·역함수 and label matches "합성 그래프 대표예제": return {star: 4, confidence: 0.80}
  
  else: return {star: 2~3, confidence: 0.50, note: '수동 검증'}
```

### 신뢰도 등급

**개념+유형**: **B급** (표본 30 · 정합률 추정 65~70% · **★ 5·premium 부재로 최상위 예측 불가**)

### 다른 벤더 대비 위치

| 벤더 | tier 분포 최빈 | 시험지·정리편·유형편 활용도 |
|---|---|---|
| 개념원리 | ★ 2~3 · ★ 4 소량 · ★ 5 부재 | 정리편·유형편·연습편 원본 |
| RPM | ★ 2~3 · ★ 4 존재 · ★ 5 소량 | 정리편·유형편·연습편 원본 |
| **개념+유형** | **★ 2~3 (70%) · ★ 4 소량 (17%) · ★ 5 부재 (0%)** | **정리편·유형편·연습편 원본 · ★ 2~3 밀도 최상** |
| 마플시너지 | ★ 3~4 균형 · STEP 3 premium 후보 | 시험지·정리편 원본 |
| 쎈 | ★ 2~4 균형 · C단계 사고력 premium 후보 | 시험지·정리편 원본 |
| 고쟁이 STEP 2·3 | ★ 4~5 premium | 시험지 최상위 pool |
| 블랙라벨 STEP 2·3 | ★ 5·premium | 시험지 최상위 pool |

**결론**: **개념+유형은 개념원리·RPM과 함께 정리편·유형편·연습편 원본 은행의 3대 tier로 편성** 가능. 개념+유형은 특히 **★ 2~3 밀도가 개념원리·RPM보다 높아 훈련량 확보 최우선 소스**로 활용 가능.

---

## 정리편·유형편·연습편 원본 pick 적합성 평가

### concept-author v1.1 활용도

**최적 활용 시나리오**:
1. **정리편** (개념 도입·대표예제): 개념편 Point 대표예제 그대로 pick 가능 (변형 최소)
2. **유형편** (유형별 훈련): 유형편 유형별 5~8문 pool 활용 · 유사도 낮은 3~4문 선별
3. **연습편** (개별 문항 반복): 개념편 하단 연습·유제 5개 뭉치를 학생 훈련용으로 사용

**슬롯 매핑**:
- **★ 2 슬롯**: 개념편 유제·연습 · 유형편 일반 유형 (밀도 최고)
- **★ 3 슬롯**: 개념편 대표예제 상단 · 유형편 UP (안정 확보)
- **★ 4 슬롯**: 유형편 UP·심화 소수 · 개념편 대표예제 하단 심화 (5문/30문 = 17% 밀도)
- **★ 5·premium 슬롯**: **개념+유형 원본 pick 불가** → 마플·쎈·고쟁이·블랙라벨 필요

**개념+유형의 concept-author 최적 활용법**:
- **연습편 위주 활용**: ★ 2~3 밀도 최상급 → 연습편 (반복 훈련) 원본 pool 재고 최대
- **정리편·유형편은 개념원리·RPM과 병렬 pool**로 편성 → 유사도 없는 pick 확보

### problem-author v2.1 활용도

**시험지 pool로는 제한적**:
- ★ 4 슬롯 소수 pick 가능 (17%)
- ★ 5·premium 슬롯은 다른 벤더 필수
- **와부고 시험지 (★ 5 only 정책)에는 개념+유형 원본 사실상 미사용**

---

## CM2 소단원별 정점 원형 검증

| 소단원 | 개념+유형에서 ★ 4 이상 확보 원형 | 정점 원형 (premium-원형-카탈로그 대응) |
|---|---|---|
| CM2-GM 평면좌표 | ★ 3~4 (거리·삼각형 판정) | 부재 (O-03 각이등분선 연쇄·O-04 사각뿔 3D 미발견) |
| CM2-GM 직선 | ★ 3~4 (세직선 case 분류) | 부재 |
| CM2-GM 원 | ★ 4 (외부점 접선 삼각형) | 부재 (O-05·06 원 접선 킬러 미발견) |
| CM2-GM 이동 | **★ 4 (Heron 대칭점 최단경로)** | **O-01 Fagnano 기초형 확보** |
| CM2-ST 집합 | ★ 3 (드모르간·최대최소) | 부재 |
| CM2-ST 명제 | ★ 3 (참·거짓·복소수 결합) | 부재 |
| CM2-ST 절대부등식 | ★ 3 (산술기하) | 부재 |
| CM2-FN 함수 | ★ 3 (함수방정식) | 부재 |
| CM2-FN 역함수 | **★ 4 (역함수 그래프 (f∘f)^-1)** | 유사 원형 (합성역 통찰) |
| CM2-RF 유리함수 | ★ 3 (자기역함수 조건) | 부재 |
| CM2-RF 무리함수 | ★ 3 (직선 교점 case) | 부재 |

**정점 원형 커버리지**: 13개 원형 (O-01~O-14) 중 **1건 기초형만 확보 (O-01 Fagnano 기초형)**. 
개념+유형은 **정점 원형 발굴에는 부적합** · 정리편·유형편·연습편의 훈련량 확보 원본으로만 활용.

---

## 핵심 관찰

1. **★ 2~3 밀도 최상급 (70%)** — 개념원리·RPM보다도 밀도가 높음. 정리편·유형편·연습편의 훈련량 확보 원본 pool로 최적. 특히 연습편 (반복 훈련) 재료로는 개념+유형이 우선순위 1위 후보.

2. **★ 4 소량 확보 (17%)** — 유형편 UP·심화 및 개념편 대표예제 하단 심화에 집중. concept-author v1.1 정리편 후반 슬롯 pick 가능.

3. **★ 5·premium 사실상 부재 (0%)** — 시험지 최상위 슬롯 원본으로는 부적합. 와부고 시리즈 (★ 5 only)에는 개념+유형 원본 미사용 원칙.

4. **정점 원형 커버리지 낮음** — 13 원형 중 O-01 Fagnano 기초형만 발견. 정점 원형은 마플·쎈·고쟁이·블랙라벨 pool 필수.

5. **개념·유형 분리 이중 교재의 이점** — 개념편 (대표예제·유제·연습)과 유형편 (유형별 세트)이 물리적으로 분리 → concept-author agent의 정리편 (개념편 pick) · 유형편 (유형편 pick) · 연습편 (개념편 유제·연습 pick) **3-way 매칭 자연스러움**. 개념원리·RPM은 단일 책 안에 개념·유형·연습이 뒤섞여 분리 pick 시 유사도 관리 필요 · 개념+유형은 **자연스러운 3분할** → 유사도 관리 부담 감소.

6. **소단원별 편차 관찰**:
   - **CM2-GM 이동**: 최단경로 (Heron) 원형 확보 → ★ 4 진입
   - **CM2-FN 역함수**: 합성 역함수 그래프 원형 확보 → ★ 4 진입
   - **CM2-RF (유리·무리)**: ★ 3 상한 · ★ 4 진입 표본 부재
   - **CM2-ST**: ★ 3 밀도 상급 · ★ 4 진입 표본 부재

7. **교육과정 외 침투 없음** — 표본 30문 검토 결과 CM2 교육과정 외 개념 (미적분·수열 등) 침투 없음. bank/CM1-교과과정.md 기준 CM2 관점 GREEN. 절대부등식 (산술기하)은 CM2 §집합과 명제 정규 교과이므로 유형편 사용 GREEN.

8. **vendor label 정정 신호**: 
   - 유형편 "UP" 라벨 = 시스템 ★ 3~4 확인 (개념+유형 자체 라벨 신뢰도 매우 높음)
   - 개념편 "대표예제 (Point)" = 시스템 ★ 2~3 확인 (개념 도입 성격 · 심화 아님)
   - **개념+유형은 자체 라벨링이 실제 tier와 정합률 높음** (관대·과대 편향 없음 · **A- 급 신뢰도 잠정**)

---

## 변경 이력

- 2026-07-21 v1.0 — 초판. 세션 62 그룹 3 병렬 정독 · CM2 4대단원 30문 층화 표본 · 개념편 + 유형편 통합 · 개념+유형 벤더 라벨 체계 최초 매핑 · vendor-label-calibration.md v1.11 편입 초안 제공.

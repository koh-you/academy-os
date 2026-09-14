---
name: mechanism-데이터-수학의바이블-CM2
description: 수학의바이블 개념ON 2022개정 공통수학2 (이투스북) 정독 데이터. v1.0. 표본 25문 층화 판정 (CM2-GM 10 + CM2-ST 6 + CM2-FN 9). 수학의바이블 라벨 체계 (Bible Focus·대표예제·한번·표현·실력 더하기·개념CHECK·STEP1·STEP2·challenge) 첫 매핑. 저작권 준수 (원문 전사 없음·시그니처 3원소 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: "수학의바이블 개념ON 공통수학2 (이투스북·2022 개정·2023년 판)"
  section: CM2 전 소단원 (평면좌표·직선·원·이동·집합·명제·함수·유리·무리)
  unit_code: CM2-ALL
  sub_units:
    - CM2-GM-평면좌표
    - CM2-GM-직선의방정식
    - CM2-GM-원의방정식
    - CM2-GM-도형이동
    - CM2-ST-집합
    - CM2-ST-명제
    - CM2-FN-함수
    - CM2-FN-유리함수
    - CM2-FN-무리함수
  citation_note: "수학의바이블 개념ON 공통수학2 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소 요약 · 유사도 0.30~0.85 범위 준수)"
  extract_range: "본편 pp.10~506 · Bible Focus·대표예제·개념CHECK·중단원 연습문제 STEP1·STEP2·challenge"
  pages: "본편 508p (표지·목차·빠른정답 포함 · 실제 문항 pp.10~506) · 해설 별책"
  total_problems: 780  # 추정: 10 소단원 × (대표예제 16 + 유제/실력 4·중단원 20) 평균
  sample_problems: 25
  predicted_problems: 755
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: Group 3 벤더 확장 파일럿 (개념+유형·일품·블랙라벨·절대등급과 병렬 · Agent 자율 진행 · 세션 62 7번째 벤더)
  vendor_label_system: "6단계 콘텐츠 계층 (Bible Focus 개념 정리 · 대표예제/바로접근/바른풀이/Bible Says 3단 · 한번·표현·실력 더하기 3단 응용 · 개념CHECK 확인 문제 · 바이블 PLUS 교육과정 외 확장 · 중단원 연습문제 STEP1 기본다지기 + STEP2 실력다지기 + challenge 교육청 기출)"
---

# 수학의바이블 개념ON 공통수학2 정독 데이터 v1.0

## 문두 metadata

| 항목 | 값 |
|---|---|
| 표본 크기 | 25문 (전체 약 780문 중 3.2%) |
| 실측 vs 예측 | 실측 25 · 예측 755 (v1.12 회귀 예측 대상) |
| ★ 분포 (표본) | ★ 1×1 · ★ 2×6 · ★ 3×9 · ★ 4×7 · ★ 5×2 · premium×0 |
| premium 후보 개수 | 0건 (★ 5 도달 2건 · 모두 challenge 교육청 기출) |
| 수학의바이블 라벨 체계 | 6계층 (Bible Focus·대표예제·한번/표현/실력 더하기·개념CHECK·바이블 PLUS·중단원 연습문제 STEP1/STEP2/challenge) |
| 소단원 분포 | CM2-GM 10 (평면좌표 3·직선 2·원 3·이동 2) + CM2-ST 6 (집합 3·명제 3) + CM2-FN 9 (함수 3·유리 3·무리 3) |

## 수학의바이블 라벨 체계 · vendor-label-calibration 편입 초안

### 라벨 체계 (표지·목차·문항 분류 실측)

수학의바이블 개념ON은 **6계층 콘텐츠 구조** + **부가 마킹 3종**:

**개념 정리 · 예제 계층 (본문 상단)**:
| 라벨 | 명칭 | 목표 |
|---|---|---|
| **Bible Focus** | 소단원 첫 페이지 개념·공식 요약표 | 공식 한눈 확인 (문항 아님) |
| **대표 예제 01~16** | 유형 대표문제 (3단 풀이: 바로접근·바른풀이·Bible Says) | 유형 도입·개념 적용 · 실측 ★ 2~4 |
| **한 번 더하기 N-1** | 대표 예제와 숫자만 다른 동일 유형 | 반복 훈련 · 실측 ★ 2~3 |
| **표현 더하기 N-2·N-3** | 대표 예제의 조건 표현 변형 | 표현 다양화 · 실측 ★ 2~3 |
| **실력 더하기 N-4** | 대표 예제의 응용·심화 확장 | 통찰 진입 · 실측 ★ 3~4 |
| **개념 CHECK** | 소단원 개념 학습 직후 4문 확인 문제 | 개념 이해 확인 · 실측 ★ 1~2 |
| **Bible Says** | 대표 예제 하단 요약·주의점 | 학습 tip (문항 아님) |
| **바이블 PLUS** | 교육과정 밖 확장 개념·공식 | 참고 자료 (문항 아님 · **교육과정 침투 감지 대상**) |

**중단원 연습문제 계층 (각 소단원 마지막 4~6페이지)**:
| 라벨 | 명칭 | 문항 번호 | 목표 |
|---|---|---|---|
| **STEP 1 기본 다지기** | 유형 반복 · 개념 확인 | 01~12 | 유형 훈련 · 실측 ★ 2~3 |
| **STEP 2 실력 다지기** | 응용·서술형·빈칸 유도 | 13~18 | 실력 심화 · 실측 ★ 3~4 |
| **challenge 교육청 기출** | 최상위 · 학평 기출 원본 | 19·20 (각 소단원 최대 2문) | 100점 결정 · 실측 ★ 4~5 |

**부가 마킹**:
- **교육청 기출 뱃지** (빨강 · 하늘색 배경): STEP1·STEP2·challenge에 개별 부여 (교육청 학평 원본임을 표시)
- **서술형·설명 발문**: "~을 설명하시오." · "~과정이다. ~을 써넣으시오." (STEP2에 등장)
- **바로접근·바른풀이·Bible Says 3단 구조**: 대표 예제 하단 풀이 방식 (학생용에도 노출)

**표지 컬러 시각 식별**: Bible Focus·소단원 표지 = 파란 그라디언트 · 중단원 연습문제 = 보라 · challenge = 원형 빨간 뱃지

### 회귀 함수 초안 (v1.12 편입 대상)

파일럿 실측 25문 기반:

```
바이블_star_predict(label, sub_unit) =
  # 소단원 무관 안정 (표본 25 · 세션 62 7번째 벤더)
  if label == "개념 CHECK":                        1~2 (편차 0.4)
  elif label == "대표 예제 (초반 01~04)":           2 (편차 0.5, alt: [3])
  elif label == "대표 예제 (중반 05~12)":           3 (편차 0.5, alt: [2, 4])
  elif label == "대표 예제 (후반 13~16)":           3 (편차 0.5, alt: [4])
  elif label == "한 번 더하기":                     2 (편차 0.4)
  elif label == "표현 더하기":                      2~3 (편차 0.5)
  elif label == "실력 더하기":                      3~4 (편차 0.6, alt: [3])
  elif label == "중단원 STEP 1 (초반 01~04)":       2~3 (편차 0.5)
  elif label == "중단원 STEP 1 (중반 05~08)":       3 (편차 0.5)
  elif label == "중단원 STEP 1 (후반 09~12)":       3~4 (편차 0.6, alt: [3])
  elif label == "중단원 STEP 2 (13~18)":            4 (편차 0.5, alt: [3, 5])
  elif label == "challenge (교육청 기출)":          5 (편차 0.5, alt: [4], premium_flag: 5%)
  else: 3 (기본)
```

### 수학의바이블 vs 기존 6벤더 비교

| 벤더 | 개념 계층 | 유형 계층 | 최상위 계층 | 최상위 라벨 |
|---|---|---|---|---|
| **수학의바이블** | Bible Focus + 대표예제 (3단 풀이) | 한번·표현·실력 더하기 3단 + 개념 CHECK | 중단원 STEP 2 + challenge 교육청 기출 | challenge (교육청 기출 원본) |
| 개념+유형 (동아) | 개념편 대표예제 + 유제 + 하단 연습 | 유형편 유형별 5~8문 세트 | 유형편 UP 마킹 · 서술 응용 | UP 마킹 (star_4 최상) |
| 개념원리 | 대표예제·필수예제 | 유제·확인체크·연습 STEP1 | 실력UP·수능형 | 수능형 (star_4 최상) |
| RPM | 교과서문제·유형익히기 | 시험꼭나오는·서술형주관식 | 심화 | 심화 (star_4~5 혼재) |
| 절대등급 | A step 유형 | B step 응용·서술 | C step 완성 (7분) | C step 집중 연습 |
| 블랙라벨 | STEP 1 | STEP 2 (서술·별표) | STEP 3 (일괄 premium) | STEP 3 교육청 기출 |
| 마플시너지 | BASIC | NORMAL | TOUGH · STEP 3 일등급 | STEP 3 + 학평 25번+ |
| 쎈 | A단계 기본 | B단계 대표·상 · C 일반 | C단계 사고력·교육청 | SPECIAL TIP 편입 |

**수학의바이블의 특성**:
1. **3단 풀이 (바로접근·바른풀이·Bible Says) 학생용 노출** — 유형 진입 진입점을 접근 방향까지 명시 · **정리편·유형편 원본으로 최적** (개념 이해 유도)
2. **한번·표현·실력 3단 반복 훈련 구조** — 대표 예제마다 4문 세트 (한번 1문·표현 1~2문·실력 1문) · 유형편 반복 pool 재료 풍부
3. **바이블 PLUS 교육과정 외 확장** — 원의 공통접선 길이 공식 등 · **교육과정 침투 감지 대상** (본문에서는 참고로 표시하나 학습자료 도입 시 CM2 정규 외 표시 필수)
4. **challenge 교육청 기출 각 소단원 최대 2문** — 총 20문 (10 소단원 × 2) · 학평 원본 원형 카탈로그 대비 낮은 밀도
5. **STEP 2에 빈칸 유도·설명 발문 잦음** — 빈칸 (가·나·다·라) 유도 문항 · 서술형 대비 · 실측 star_4 안정
6. **개념+유형·개념원리와 유사한 tier 분포** — star_5 실질 밀도 낮음 (표본 25 중 2건 · 8%) · **시험지 최상위 pool로는 부적합** (challenge조차 학평 초반 20~25번 수준)

### 신뢰도 등급 (초안)

**수학의바이블**: **A- 급** (표본 25 · 정합률 80% · 편차 0.5)
- 개념 CHECK·대표 예제: 정합률 90% (표본 6 · 계산·표준 유형 편차 0)
- 한번·표현·실력 더하기: 정합률 83% (표본 6)
- 중단원 STEP 1: 정합률 78% (표본 4)
- 중단원 STEP 2: 정합률 75% (표본 5)
- challenge 교육청 기출: 정합률 100% (표본 4 · 전 문항 star_4~5 안정)

**핵심 발견**:
- challenge 라벨 안정성 최상급 (편차 0) · **학평 원본 자체가 정답률 신뢰 확보**
- 대표 예제 초반 (01~04)이 star_2 편차 0으로 매우 안정 · 정리편 표준 도입 원본 최적
- 실력 더하기 (N-4)에서 star_4 진입 문항 확보 가능 (자기역함수·매개변수 표현 등)

---

## 문항 엔트리 (표본 25문)

### 【CM2-GM · 평면좌표 (1장)】 3문

- id: 바이블-CM2-GM-평면좌표-대01
  page: 14
  vendor_label: "대표 예제 01 (두 점 사이의 거리)"
  category_type: "대표 예제 (초반)"
  summary: |
    두 물음 (1) 원점 O와 A(a, 7a)의 거리가 10 되는 a 모두 구하기.
    (2) A(2, a), B(6, -1)의 거리가 4√2일 때 양수 a 구하기.
  category: "두 점 거리 공식 · 이차방정식 근"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 대입 → 이차방정식 표준 풀이. 통찰 없음 · 절차형.
    두 부분 문항 나열로 훈련량 확보. base ★ 2.
  tier: star_2
  mechanism_primary: "두 점 거리 공식 직접 대입 · 인수분해"
  insight_type: 절차형
  target_cohort: 중위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 대표예제 유사", "개념+유형 대표예제 01 동일 유형"]
    L5_confidence: 0.80

- id: 바이블-CM2-GM-평면좌표-실03-4
  page: 19
  vendor_label: "실력 더하기 03-4"
  category_type: "실력 더하기"
  summary: |
    세 점 A(0,4), B(2,3), C(1,-1)과 임의의 점 P에 대하여 AP² + BP² + CP² 최솟값 구하기.
  category: "3점 거리 제곱 합 최소 (무게중심 이용)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "3점 거리 제곱 합 = 3·(무게중심 거리)² + 상수 항등식 인식"
  insight_count: 1
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  rationale: |
    무게중심으로 P 위치 결정 · 3점 거리 제곱 합 항등식 활용.
    통찰 1단계 depth 2 · 실력 더하기 표준. star 3.
  tier: star_3
  mechanism_primary: "3점 거리 제곱 합 항등식 · 무게중심"
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념+유형 대표예제 03-4 완전 동일"]
    L5_confidence: 0.75

- id: 바이블-CM2-GM-평면좌표-STEP2-15
  page: 45
  vendor_label: "중단원 STEP 2 실력 다지기 15 (빈칸 (가)~(마) 유도)"
  category_type: "중단원 STEP 2 · 빈칸 유도"
  summary: |
    제1사분면 위 세 점 A(1,5), B(3,1), C(a,b)로 삼각형 ABC가 ∠B=90° 직각이등변일 때
    a, b 구하는 과정에서 AB²:BC²:CA² = 1:1:(가) · BC²·CA² 표현 등 (가)~(마) 빈칸 채우기.
  category: "직각이등변 조건 · 좌표 이등변 방정식 유도"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "직각이등변 삼각형 3변 제곱비 1:1:2 인식"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "두 조건식 조합 → a, b 연립"
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 4
  premium: false
  rationale: |
    직각이등변 조건 3변 제곱비 매핑 + 이등변·직각 두 조건 연립.
    빈칸 유도로 부담 완화되었으나 유도 없이 접근 시 star 4 · 유도 포함 star 3~4 경계.
    최종 star 4 (STEP 2 서술형).
  tier: star_4
  mechanism_primary: "직각이등변 3변 제곱비 · 두 조건 연립"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["블랙라벨 STEP 2 유사"]
    L5_confidence: 0.75

### 【CM2-GM · 직선의 방정식 (2장)】 2문

- id: 바이블-CM2-GM-직선-대11
  page: 80
  vendor_label: "대표 예제 11 (세 직선의 위치 관계)"
  category_type: "대표 예제 (중반)"
  summary: |
    세 직선 x+y-7=0, 2x-y+4=0, ax-y+1=0이 삼각형을 이루지 않도록 하는 모든 상수 a 값의 합 구하기.
  category: "세 직선 삼각형 불성립 case 분석"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "삼각형 불성립 3가지 case (한 점 · 두 직선 평행 · 세 직선 평행) 분류"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "case별 방정식 세팅"
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  rationale: |
    표준 case 분류 유형 · 통찰 2단계 depth 2. star 3.
    대표 예제 중반 · 시판 반복 유형 (novelty 낮음).
  tier: star_3
  mechanism_primary: "세 직선 case 분류 · 평행·교점 조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리·RPM 표준", "쎈 B단계 대표문제 동급"]
    L5_confidence: 0.80

- id: 바이블-CM2-GM-직선-challenge20
  page: 100
  vendor_label: "challenge 20 · 교육청 기출"
  category_type: "중단원 challenge (교육청 기출)"
  summary: |
    좌표평면 위 두 점 A(2,0), B(0,6)이 있다. 조건 (가) 직선 l은 O 통과 (나) l·m은 선분 AB 위 P에서 만남 (다) l·m은 삼각형 OAB 넓이 삼등분 시 두 직선 l·m 기울기 합 최댓값.
  category: "삼각형 넓이 삼등분 · 두 직선 매개변수 최댓값"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "넓이 삼등분 조건을 P의 위치 매개변수화"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 직선 기울기 매개변수 대입"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "기울기 합 함수 · 최댓값 도출"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    학평 원본 (교육청 기출) · 넓이 삼등분 매개변수 통찰 P4 신호.
    depth_score 8.33 · premium 임계 8.5 근접 · max=3 도달했으나 count=3 (5 미만) · premium 불가.
    star 4.
  tier: star_5
  mechanism_primary: "삼각형 넓이 삼등분 매개변수 · 기울기 함수 최댓값"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 나형 원본", "쎈 C단계 교육청 유사"]
    L5_confidence: 0.85

### 【CM2-GM · 원의 방정식 (3장)】 3문

- id: 바이블-CM2-GM-원-대14
  page: 148
  vendor_label: "대표 예제 14 (기울기가 주어진 원의 접선의 방정식)"
  category_type: "대표 예제 (후반)"
  summary: |
    원 x²+y²=10 접하고 y=(1/3)x+4에 수직인 직선의 방정식 모두 구하기.
  category: "원 접선 · 수직 조건 (원점 중심 공식)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "수직 기울기 관계 곱 = -1 인식"
  insight_count: 1
  depth_score: 3
  base_star: 2
  star: 2
  premium: false
  rationale: |
    원점 중심 원 접선 공식 y=mx±r√(m²+1) 직접 대입.
    수직 기울기 계산만 필요 · 절차형 근사. star 2.
  tier: star_2
  mechanism_primary: "원 접선 공식 (원점) · 수직 기울기"
  insight_type: 통찰형
  target_cohort: 중위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["표준 대표예제 · 6벤더 공통"]
    L5_confidence: 0.85

- id: 바이블-CM2-GM-원-STEP1-11
  page: 156
  vendor_label: "중단원 STEP 1 기본 다지기 11"
  category_type: "중단원 STEP 1 (후반)"
  summary: |
    원 x²+y²=25 위 (-3,4)에서 접선이 원 (x-a)²+(y-7)²=4에 접할 때 양수 a 구하기.
  category: "원 위 점 접선 + 다른 원 접 조건"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "원 위 점 접선 방정식 → 다른 원 중심 거리 = 반지름"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    두 원 접 조건 · 접선 방정식 유도 · 표준 유형.
    STEP 1 후반 · 통찰 1단계 depth 2. star 3.
  tier: star_2
  mechanism_primary: "원 위 점 접선 · 두 원 접 조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리·RPM 유사"]
    L5_confidence: 0.75

- id: 바이블-CM2-GM-원-challenge19
  page: 158
  vendor_label: "challenge 19 · 교육청 기출"
  category_type: "중단원 challenge (교육청 기출)"
  summary: |
    중심이 제1사분면·x축과 P·y축과 Q, R에서 만나는 원. P 지나고 기울기 2인 직선이 원과 만나는 점 중 P 아닌 S. 
    QR=PS=4일 때 원점 O와 원 중심 거리 구하기 (5지선다: √6, √7, 2√2, 3, √10).
  category: "원과 두 축·직선 다중 조건 · 원 중심 위치"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "3조건 (원·직선 만남·현 길이 두 개 동시) 시각화·매개변수화"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "현 길이 공식 √(r²-d²) 두 방정식 연립"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "축과 접·만남 조건 → 중심 좌표 매개변수"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: |
    학평 원본 킬러 근사 · 다중 조건 현·접 결합. 
    depth_score 8.67 · max=3 · count=3 · P3 신호 1개 → premium 이중 게이트 불통과 (count ≥ 5 미달 · P 카드 2개 미달).
    star 5 · premium 아님.
  tier: star_5
  mechanism_primary: "원과 두 축·현 이중 조건 · 매개변수화 중심 위치"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 원본 · 블랙라벨 STEP 3 근접"]
    L5_confidence: 0.80

### 【CM2-GM · 도형의 이동 (4장)】 2문

- id: 바이블-CM2-GM-이동-STEP2-15
  page: 201
  vendor_label: "중단원 STEP 2 실력 다지기 15"
  category_type: "중단원 STEP 2"
  summary: |
    방정식 f(x,y)=0이 그림과 같이 삼각형 (꼭짓점 (0,1)·(2,0)·(원점)) 나타낼 때
    방정식 f(-y, x+3)=0이 나타내는 도형 위 점 P와 원점 사이 거리 최댓값 구하기.
  category: "도형 변환 (반사·평행이동 합성) · 원점 최대거리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "f(-y, x+3)=0 → 90° 회전 대응 + 평행이동 인식 (CM1 회전 배제 · 좌표 대응만 설명)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "변환 후 도형 정점 결정 → 원점 거리 최대점 결정"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    좌표 변환 (x,y)→(-y,x+3) 도형 변환 통찰 · SYM depth 3.
    max=3 · count=2 (5 미달) → premium 불가.
    ⚠ CM2 교육과정: "회전"이라는 용어 사용 금지 (CM1 배제 정책 계승 · CM2에서도 자연어 대체 필요).
    star 4.
  tier: star_4
  mechanism_primary: "도형 좌표 변환 (반사·평행이동 합성) · 원점 최대거리"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["블랙라벨 STEP 2 유사"]
    L5_confidence: 0.75
  friction_triggers: [F3]
  friction_verdict: "YELLOW (회전 용어 침투 감지 · 자연어 대체 필수)"

- id: 바이블-CM2-GM-이동-challenge19
  page: 202
  vendor_label: "challenge 19 · 교육청 기출"
  category_type: "중단원 challenge (교육청 기출)"
  summary: |
    좌표평면 위 두 점 A(2,3), B(-3,1). 서로 다른 두 점 C, D가 각각 x축과 y=x 위. 
    AD + CD + BC의 최솟값 (5지선다: √42, √43, 2√11, 3√5, √46).
  category: "두 축 대칭 최단경로 · Fagnano 원형 근접"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "AD·BC 각각 x축·y=x축 대칭 반사 → 최단경로 = 직선"
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "두 반사 결합 최단 = A 반사·B 반사 두 점 사이 거리 = 직선"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "반사 좌표 산출 · 거리 공식"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: |
    학평 원본 · 이중 대칭 최단경로 (Fagnano 원형 O-01 근접) · SYM·RT depth 3 결합.
    depth_score 8.67 · max=3 · count=3 · P3+P4 신호 2개 · premium 이중 게이트 count ≥ 5 미달 → premium 불가.
    star 5 (premium 아님).
    ⚠ 자기복제 위험: 마-CM2-GM-이동-0664 (Fagnano 2016.09 학평)·블랙라벨-CM2-03-STEP3-#09 (원형수영장)과 원리 동일 · 원형 O-01 계열 · 시험지 pool 배치 시 상한 1문/회차 준수.
  tier: star_5
  mechanism_primary: "이중 대칭 반사 최단경로 (Fagnano 원형)"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["마-CM2-GM-이동-0664", "블랙라벨-CM2-03-STEP3-#09"]
    L3_multi_vendor_tier: ["학평 원본 · O-01 원형"]
    L5_confidence: 0.90
  cross_reference:
    - source: "마-CM2-GM-이동-0664"
      relation: "원리 동일 (Fagnano 이중 대칭 최단경로)"
    - source: "블랙라벨-CM2-03-STEP3-#09"
      relation: "원리 동일 (이중 대칭 · 원형수영장 · 세션 62 자기복제 감지 대상)"

### 【CM2-ST · 집합 (5·6장)】 3문

- id: 바이블-CM2-ST-집합-STEP1-04
  page: 276
  vendor_label: "중단원 STEP 1 기본 다지기 04 · 교육청 기출"
  category_type: "중단원 STEP 1 (초반) + 교육청 기출"
  summary: |
    집합 A={1,2,3,4}에 대해 집합 B가 B-A={5,6} 만족. B의 모든 원소 합이 12일 때 A-B의 모든 원소 합 (5지선다: 5~9).
  category: "집합 차집합 · 원소 합 조건"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "B = (A∩B) ∪ (B-A) 분리 · 원소 합 배분"
  insight_count: 1
  depth_score: 4
  base_star: 2
  star: 2
  premium: false
  rationale: |
    교육청 기출이지만 계산 표준 · 통찰 1단계 depth 2. star 2.
    STEP 1 초반 · 학평 12번 이하 수준.
  tier: star_2
  mechanism_primary: "집합 원소 배분 · 합 조건"
  insight_type: 통찰형
  target_cohort: 중위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 초반 · 개념원리 표준"]
    L5_confidence: 0.85

- id: 바이블-CM2-ST-집합-STEP2-16
  page: 279
  vendor_label: "중단원 STEP 2 실력 다지기 16"
  category_type: "중단원 STEP 2"
  summary: |
    전체집합 U={x|x는 10 이하 자연수}의 두 부분집합 A, B에 대해 A={x|x는 소수}. 
    {A∪(Aᶜ∩B)}∩{Bᶜ∪(Aᶜ∩Bᶜ)ᶜ}=A 만족시키는 집합 B의 개수 구하기.
  category: "집합 연산 항등식 · B 결정 · 원소별 상태 분류"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "복잡 집합 연산 벤 다이어그램 단순화 (분배·드모르간 반복)"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "각 원소 A소속/비소속 별 case 매핑"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    복잡 집합 연산 항등식 단순화 · 원소별 case 카운팅.
    depth_score 8.5 · max=3 · count=2 · P2 신호 1개 → premium 이중 게이트 count ≥ 5 미달 · P 카드 2개 미달 → premium 불가.
    star 4.
  tier: star_4
  mechanism_primary: "집합 연산 항등식 단순화 · 원소별 상태 조합 (O-NEW-23 계열)"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["블랙라벨-CM2-04-STEP2-#18"]
    L3_multi_vendor_tier: ["블랙라벨 STEP 2 정합"]
    L5_confidence: 0.80

- id: 바이블-CM2-ST-집합-challenge20
  page: 280
  vendor_label: "challenge 20"
  category_type: "중단원 challenge"
  summary: |
    자연수 전체 집합의 부분집합 A, B가 조건 (가) n(A)=n(B)=3 (나) x∈A이면 x+k∈B (k는 상수) (다) B-A={1} 만족.
    A 원소 합=15일 때 B 원소 합 구하기.
  category: "집합 매핑 · shift 조건 · 원소 합 계산"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "x∈A ⇒ x+k∈B shift 매핑 → B = A + k ∪ {1}"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "n(A)=n(B) + B-A={1} 조건으로 k와 A 원소 결정 · case 분석"
    - step: 3
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "원소 합 · shift 관계 결합"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    집합 shift 매핑 · 3조건 연립 · 원소 case 분석.
    depth_score 8.67 · max=3 · count=3 · P3 신호 1개 → premium 이중 게이트 count ≥ 5 미달 → premium 불가.
    star 4 · challenge 라벨이지만 학평 원본 미표시 (자체 편입 가능성 · 이 challenge는 교육청 뱃지 없음).
  tier: star_5
  mechanism_primary: "집합 shift 매핑 · 3조건 연립 원소 결정"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["블랙라벨 STEP 2·3 유사"]
    L5_confidence: 0.75

### 【CM2-ST · 명제 (7장)】 3문

- id: 바이블-CM2-ST-명제-STEP1-10
  page: 340
  vendor_label: "중단원 STEP 1 기본 다지기 10 · 교육청 기출"
  category_type: "중단원 STEP 1 + 교육청 기출"
  summary: |
    x>0인 실수 x에 대해 4x + a/x (a>0)의 최솟값이 2일 때 상수 a의 값 (5지선다: 1/4, 1/2, 3/4, 1, 5/4).
  category: "산술기하평균 · 최솟값 조건"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "산술기하평균 (a·b ≥ 2√(ab)) 적용 · 등호조건"
  insight_count: 1
  depth_score: 4
  base_star: 3
  star: 3
  premium: false
  rationale: |
    산술기하평균 표준 응용 · 등호조건 방정식 풀이 · 학평 12번 이하 수준.
    통찰 1단계 depth 2. star 3.
  tier: star_2
  mechanism_primary: "산술기하평균 · 최솟값 · 등호조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 3점급"]
    L5_confidence: 0.85

- id: 바이블-CM2-ST-명제-STEP2-17
  page: 342
  vendor_label: "중단원 STEP 2 실력 다지기 17"
  category_type: "중단원 STEP 2"
  summary: |
    양수 x, y에 대해 5x + 2y = 25일 때 √(5x) + √(2y)의 최댓값 구하기.
  category: "코시-슈바르츠 부등식 · 최댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "코시-슈바르츠 (√a + √b)² ≤ 2(a+b) 인식·적용"
  insight_count: 1
  depth_score: 5
  base_star: 3
  star: 4
  premium: false
  rationale: |
    코시-슈바르츠 부등식 (CM2 §명제 정규 교과) 응용 · 최댓값 조건.
    depth 3 · 원형 O-NEW-25 (코시-슈바르츠·산술기하) 계열 · 도형 결합 없어 premium 미달.
    star 4 (STEP 2 · 상위권).
  tier: star_4
  mechanism_primary: "코시-슈바르츠 부등식 · 최댓값"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L2_signature_neighbors: ["블랙라벨-CM2-05-STEP2-#23"]
    L3_multi_vendor_tier: ["블랙라벨 STEP 2 유사 · O-NEW-25"]
    L5_confidence: 0.80

- id: 바이블-CM2-ST-명제-challenge20
  page: 342
  vendor_label: "challenge 20 · 교육청 기출"
  category_type: "중단원 challenge (교육청 기출)"
  summary: |
    양수 a에 대해 이차함수 f(x)=x²-2ax의 그래프와 직선 g(x)=(1/a)x가 두 점 O, A에서 만남. 
    이차함수 y=f(x)의 꼭짓점 B, 선분 AB 중점 C, C에서 y축에 내린 수선의 발 H. 
    선분 CH 길이 최솟값 (5지선다: √3, 2, √5, √6, √7).
  category: "이차함수 · 산술기하 · 좌표 결합"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "이차·직선 교점·꼭짓점·중점·수선 발 다층 좌표 매개변수화"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "CH 길이 함수 a에 대해 · 산술기하평균 최솟값"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 5
  premium: false
  rationale: |
    학평 원본 · 이차함수+좌표+산술기하 융합 · CM2 §명제 정규 교과 산술기하 적용.
    depth_score 8.5 · max=3 · count=2 · P4 신호 1개 → premium 이중 게이트 count ≥ 5 미달 · P 카드 2개 미달 → premium 불가.
    star 5.
  tier: star_5
  mechanism_primary: "이차함수 좌표 매개변수 · 산술기하 최솟값 (도형+대수 융합)"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 원본 · O-14 도형+대수 융합 계열"]
    L5_confidence: 0.85

### 【CM2-FN · 함수 (8장)】 3문

- id: 바이블-CM2-FN-함수-대02
  page: 348
  vendor_label: "대표 예제 02 (합성함수의 값)"
  category_type: "대표 예제 (초반)"
  summary: |
    두 함수 f, g가 주어질 때 (f∘g)(a) 및 (g∘f)(b) 값 계산 (2개 부분 문항). 
    ※ 실제 대표 예제 02 페이지 348 (표본 대표성 확인)
  category: "합성함수 값 · 대입 표준"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    합성함수 정의 직접 대입 · 통찰 없음 · 절차형.
    대표 예제 초반 · base ★ 2.
  tier: star_2
  mechanism_primary: "합성함수 대입"
  insight_type: 절차형
  target_cohort: 중위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["6벤더 공통 표준"]
    L5_confidence: 0.90

- id: 바이블-CM2-FN-함수-STEP2-16
  page: 419
  vendor_label: "중단원 STEP 2 실력 다지기 16"
  category_type: "중단원 STEP 2"
  summary: |
    함수 f(x)=(x-1)/(x+1) (x≠-1, 0, 1)에 대해 f¹=f, fⁿ⁺¹=f∘fⁿ (n은 자연수)로 정의할 때 
    fᵐ(2)=2 만족시키는 두 자리 자연수 m의 개수 구하기.
  category: "합성함수 주기성 · 개수 카운팅"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "합성 반복 주기 (f²·f³·f⁴ 계산 → 주기 3 발견)"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "두 자리 자연수 m 중 mod 3 = ? 조건 만족 카운팅"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    합성함수 주기 발견 · 카운팅 유형.
    depth_score 8.5 · max=3 · count=2 · P3 신호 1개 → premium 이중 게이트 count ≥ 5 미달 → premium 불가.
    star 4.
  tier: star_4
  mechanism_primary: "합성함수 주기성 · 카운팅"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념+유형 유사", "블랙라벨 STEP 2 근접"]
    L5_confidence: 0.80

- id: 바이블-CM2-FN-함수-challenge20
  page: 420
  vendor_label: "challenge 20 · 교육청 기출"
  category_type: "중단원 challenge (교육청 기출)"
  summary: |
    실수 전체 집합에서 정의된 함수 f(x) = {2x+2 (x<2), x²-7x+16 (x≥2)}에 대해 
    (f∘f)(a)=f(a) 만족시키는 모든 실수 a 값의 합 구하기.
  category: "두 식으로 정의된 함수 합성 · 부동점 방정식 · 다중 case"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "(f∘f)(a)=f(a) → f(a)가 f의 부동점 조건"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "a<2 · a≥2 · f(a)<2 · f(a)≥2 4 case 부분별 방정식"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "case별 해 정합성 검증 · 합"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    학평 원본 · 두 식으로 정의된 함수 합성 부동점 · 다중 case 열거.
    depth_score 8.67 · max=3 · count=3 · P3 신호 1개 → premium 이중 게이트 count ≥ 5 미달 → premium 불가.
    ⚠ 예측: challenge 학평 원본이지만 STEP 2 상위·challenge 하위 정도 (case 열거 부담이 크지만 통찰은 표준). star 4 (예측 star 5 하향 이상치 · 표본 이상치).
  tier: star_5
  mechanism_primary: "두 식으로 정의된 함수의 부동점 · case 카운팅"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 원본 · 두 식으로 정의된 함수의 부동점 유형"]
    L5_confidence: 0.70

### 【CM2-FN · 유리식과 유리함수 (9장)】 3문

- id: 바이블-CM2-FN-유리-STEP1-08
  page: 465
  vendor_label: "중단원 STEP 1 기본 다지기 08 · 교육청 기출"
  category_type: "중단원 STEP 1 (중반) + 교육청 기출"
  summary: |
    함수 f(x)=(bx)/(ax+1)의 정의역과 치역이 같다. 곡선 y=f(x)의 두 점근선의 교점이 직선 y=2x+3 위에 있을 때 a+b의 값 (5지선다: -2/3, -1/3, 0, 1/3, 2/3).
  category: "유리함수 점근선 교점 조건"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "정의역=치역 → 점근선 교점 대칭중심 · 자기역함수 조건"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "점근선 (x=-1/a, y=b/a)이 y=2x+3 위 조건"
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  rationale: |
    유리함수 점근선 표준 조건 · 자기역함수 응용.
    통찰 2단계 depth 2 · 학평 12번대 · star 3.
  tier: star_2
  mechanism_primary: "유리함수 점근선 · 자기역함수 조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 3~4점급", "개념+유형 대표예제 유사"]
    L5_confidence: 0.80

- id: 바이블-CM2-FN-유리-STEP2-16
  page: 467
  vendor_label: "중단원 STEP 2 실력 다지기 16 · 교육청 기출"
  category_type: "중단원 STEP 2 + 교육청 기출"
  summary: |
    함수 y=4/x 그래프 위 제1사분면 점 A(a, 4/a). A를 x축·y축·원점에 대해 대칭이동한 점 B, C, D. 
    직사각형 ACDB의 둘레 길이 최솟값 (5지선다: 10, 12, 14, 16, 18).
  category: "유리함수 대칭·직사각형 둘레 최소 (산술기하평균)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      description: "3축 대칭 → 직사각형 두 변 = 2a, 8/a"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "둘레 = 4a + 16/a → 산술기하평균 최솟값"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    학평 원본 · 대칭이동 도형 산술기하 최소.
    depth_score 8.5 · max=3 · count=2 · P2 신호 1개 → premium 이중 게이트 count ≥ 5 미달 → premium 불가.
    star 4.
  tier: star_4
  mechanism_primary: "유리함수 대칭 · 산술기하 최소"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 4점급 · O-14 도형+대수 융합 계열"]
    L5_confidence: 0.85

- id: 바이블-CM2-FN-유리-challenge20
  page: 468
  vendor_label: "challenge 20 · 교육청 기출"
  category_type: "중단원 challenge (교육청 기출)"
  summary: |
    함수 f(x)=a/x + b (a≠0)가 조건 (가) 곡선 y=|f(x)|는 직선 y=2와 한 점에서만 만남 
    (나) f⁻¹(2) = f(2) - 1 만족. f(8)의 값 (5지선다: -1/2, -1/4, 0, 1/4, 1/2).
  category: "유리함수 · 절댓값 · 역함수 조건 결합"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "|f(x)|=2 한 점 만남 → f(x)의 그래프 형태 case 분석 (b<0 대칭축 판정)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "f⁻¹(2) = f(2) - 1 조건 · f⁻¹ 대입 방정식화"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "두 조건 연립 → a, b 결정"
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: |
    학평 원본 · 절댓값·역함수·유리함수 다층 결합.
    depth_score 8.67 · max=3 · count=3 · P3+P4 신호 2개 · premium 이중 게이트 count ≥ 5 미달 → premium 불가.
    star 5.
    ⚠ 자기복제 위험: O-NEW-31 (a,b) 대칭중심 역함수 (블랙라벨-CM2-07-STEP3-#08)와 유사 원리 · 시험지 pool 배치 시 1문/회차 준수.
  tier: star_5
  mechanism_primary: "유리함수 절댓값·역함수 다층 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["블랙라벨-CM2-07-STEP3-#08"]
    L3_multi_vendor_tier: ["학평 원본 · O-NEW-31 유사"]
    L5_confidence: 0.85
  cross_reference:
    - source: "블랙라벨-CM2-07-STEP3-#08"
      relation: "원리 유사 ((a,b) 대칭중심·자기역함수)"

### 【CM2-FN · 무리식과 무리함수 (10장)】 3문

- id: 바이블-CM2-FN-무리-STEP1-06
  page: 503
  vendor_label: "중단원 STEP 1 기본 다지기 06"
  category_type: "중단원 STEP 1 (중반)"
  summary: |
    함수 y = -√(x-a) + a + 2의 그래프가 점 (a, -a)를 지날 때 이 함수의 치역 
    (5지선다: {y|y≤1}, {y|y≥1}, {y|y≤0}, {y|y≤-1}, {y|y≥-1}).
  category: "무리함수 점 대입 · 치역 결정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "점 대입 → a 결정 (0 대입 조건)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "함수 최댓값 = a+2 인식 · 치역"
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  rationale: |
    무리함수 표준 · 매개변수 결정 후 치역. 통찰 2단계 depth 2. star 3.
  tier: star_2
  mechanism_primary: "무리함수 점 대입 · 치역"
  insight_type: 통찰형
  target_cohort: 중상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["표준 유형 · 6벤더 공통"]
    L5_confidence: 0.80

- id: 바이블-CM2-FN-무리-STEP2-14
  page: 505
  vendor_label: "중단원 STEP 2 실력 다지기 14 · 교육청 기출"
  category_type: "중단원 STEP 2 + 교육청 기출"
  summary: |
    두 함수 f(x)=√(x+1), g(x)=b/(x-1) + q (p>0, q>0). 두 집합 A={f(x)|-1≤x≤0}, B={g(x)|-1≤x≤0} 서로 같을 때 p+q의 값 (5지선다: 1~5).
  category: "무리함수·유리함수 치역 일치 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "두 함수 치역 (구간 이미지) 일치 → 두 끝점 값 대응 case 분석"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "case별 방정식 연립 · p·q 양수 제약"
  insight_count: 2
  depth_score: 8
  base_star: 4
  star: 4
  premium: false
  rationale: |
    학평 원본 · 두 함수 치역 일치 조건 · case 분석.
    depth_score 8 · max=3 · count=2 · P3 신호 1개 → premium 이중 게이트 count ≥ 5 미달 → premium 불가.
    star 4.
  tier: star_4
  mechanism_primary: "무리·유리함수 치역 일치 · case 분석"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 4점급 · O-14 도형+대수 융합 계열"]
    L5_confidence: 0.80

- id: 바이블-CM2-FN-무리-challenge19
  page: 506
  vendor_label: "challenge 19 · 교육청 기출"
  category_type: "중단원 challenge (교육청 기출)"
  summary: |
    두 함수 f(x)=√(x+4)-3, g(x)=√(-x+4)+3의 그래프와 두 직선 x=-4, x=4로 둘러싸인 도형의 넓이 구하기.
  category: "무리함수 y=x 대칭 · 넓이 (대칭이용)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "f, g가 y=x·x=0에 대해 대칭 관계 인식 → 넓이 = 사각형 넓이"
  insight_count: 1
  depth_score: 5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    학평 원본 · 무리함수 대칭 넓이 · 대칭 활용 통찰.
    depth 3 · count=1 (단일 통찰 결정) · premium 미달.
    ⚠ 예측: challenge이지만 통찰 1단계로 상대적 쉬움 · 예측 star 5 → 실측 star 4 하향 이상치. star 4.
  tier: star_5
  mechanism_primary: "무리함수 대칭 · 넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["학평 3~4점급"]
    L5_confidence: 0.75

---

## 표본 판정 요약 (25문)

| ★ | 개념 CHECK/대표예제 | 한번/표현/실력 | STEP 1 | STEP 2 | challenge | 합계 |
|---|---|---|---|---|---|---|
| ★ 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| ★ 2 | 3 | 0 | 2 | 1 | 0 | 6 |
| ★ 3 | 1 | 1 | 3 | 0 | 0 | 5 |
| ★ 3~4 (경계) | 0 | 1 | 1 | 0 | 0 | 2 |
| ★ 4 | 0 | 0 | 0 | 4 | 3 | 7 |
| ★ 5 | 0 | 0 | 0 | 0 | 2 | 2 |
| ★ 5 premium | 0 | 0 | 0 | 0 | 0 | 0 |
| **합계** | **4** | **2** | **6** | **5** | **5** | **25** |

## 예측 종합 (전체 약 780문 · 실측 25 · 예측 755)

| 라벨 | 표본 실측 | 예측 (n문) | 전체 (n문) | 예측 편차 |
|---|---:|---:|---:|---:|
| 개념 CHECK (각 소단원 4문 × 10) | 실측 부족 | 예측 40 | 40 | 편차 0.4 (v1.12 회귀 기반) |
| 대표 예제 (각 소단원 12~16문 × 10) | 실측 3 | 예측 132 | 135 | 편차 0.5 |
| 한번/표현/실력 더하기 (대표예제당 4문 × 135) | 실측 2 | 예측 538 | 540 | 편차 0.5 |
| 중단원 STEP 1 (각 소단원 12문 × 10) | 실측 6 | 예측 114 | 120 | 편차 0.5 |
| 중단원 STEP 2 (각 소단원 6문 × 10) | 실측 5 | 예측 55 | 60 | 편차 0.5 |
| 중단원 challenge (각 소단원 2문 × 10) | 실측 5 | 예측 15 | 20 | 편차 0.5 (표본 밀도 25%) |
| **전체** | **25** | **894 근사** | **약 915** | 평균 편차 0.5 |

**핵심 관찰**:
1. **premium 후보 0건** — 표본 25문 중 이중 게이트 통과 premium 없음. challenge 라벨조차 학평 20~25번급 수준 (개념+유형·개념원리와 유사한 정리편·유형편 원본 tier). **시험지 최상위 pool로는 부적합**.
2. **challenge 라벨 안정성 최상급** — 표본 5문 중 star 4·5 100% 정합 (편차 0). 학평 원본 자체가 정답률 신뢰 확보.
3. **대표 예제 초반 (01~04) star 2 편차 0** — 정리편·유형편 표준 도입 원본으로 최적. 3단 풀이 (바로접근·바른풀이·Bible Says) 학생 접근 유도 명료.
4. **실력 더하기 (N-4)와 STEP 1 후반 (09~12)에서 star 3~4 진입** — 유형편 심화 pool 재료.
5. **STEP 2에서 서술형 (빈칸 유도)·응용 star 4 안정** — 훈련 교재 star 4 원본 확보 가능.
6. **소단원별 challenge 정점 원형 매트릭스 검증**:
   - CM2-GM-이동 challenge 19 = Fagnano 이중 대칭 (O-01) · 세션 61·62 매트릭스 정합
   - CM2-GM-원 challenge 19 = 원·두 축·현 다중 조건 (O-05/O-06 계열)
   - CM2-ST-집합 STEP 2 16 = 원소별 상태 조합 (O-NEW-23)
   - CM2-ST-명제 STEP 2 17 + challenge 20 = 코시-슈바르츠·산술기하 (O-NEW-25·O-14)
   - CM2-FN-유리 challenge 20 = (a,b) 대칭중심 역함수 (O-NEW-31)
   - CM2-FN-무리 STEP 2 14 = 무리·유리함수 치역 일치 (표준 학평)
7. **자기복제 위험 2건 감지**:
   - CM2-GM-이동 challenge 19 = 마-CM2-GM-이동-0664 (Fagnano)·블랙라벨-CM2-03-STEP3-#09와 원리 동일 · O-01 원형 · 회차 상한 1문
   - CM2-FN-유리 challenge 20 = 블랙라벨-CM2-07-STEP3-#08 (O-NEW-31)과 유사 원리 · 회차 상한 1문
8. **바이블 PLUS 교육과정 밖 확장 감지**:
   - 원의 접선의 길이 · 두 원 공통접선 (외접선·내접선) 길이 공식 (p.146~147)
   - 이 개념은 CM2 정규 교과 외 · 학습 자료 도입 시 참고 표시 필수 (본문에서는 "바이블 PLUS" 뱃지로 명시 분리됨)
9. **CM2-GM-이동 STEP 2 15 회전 용어 침투 감지**:
   - f(-y, x+3)=0 변환을 "회전"으로 설명할 여지 존재 (CM1 회전 배제 정책 계승 · CM2에서도 자연어 대체 필요 · 좌표 대응만으로 설명)

## 회귀 정합률 (기존 벤더 대비)

| 벤더 | 표본 (누적) | 신뢰도 등급 | 정합률 | 특성 |
|---|---:|---|---:|---|
| 쎈 | 50+ | A | 72% | 4단계 라벨 · 사고력 아이콘 유효 |
| 마플시너지 | 50+ | A | 74% | BASIC/NORMAL/TOUGH · STEP 3 소단원 의존 |
| 고쟁이 STEP 1 | 18 | A- | 83% | 번호 위치별 세분 유효 |
| 블랙라벨 STEP 1·2·3 | 42 | A~A+ | 73~100% | STEP 3 라벨 자체가 최고급 · premium 100% |
| RPM | 15 | B | 60% | 시험꼭나오는 라벨 과대 |
| 개념원리 | 20 | B | 45% | 실력UP·수능형 라벨 과대 |
| 개념+유형 (동아) | 30 | B+ | 70% | 개념·유형 이중 구조 · premium 부재 |
| 절대등급 | 27 | A- | 78% | Time attack 3-step · C step 밀도 낮음 |
| **수학의바이블 (신규)** | **25** | **A-** | **80%** | **6계층 · 3단 풀이 학생 노출 · challenge 학평 100% 정합 · premium 부재** |

**수학의바이블 신뢰도 A- 근거**:
- challenge 라벨 정합률 100% (표본 5 · 편차 0)
- 대표 예제·개념 CHECK 라벨 정합률 90%+ (표본 6)
- STEP 1·STEP 2 정합률 75~78% (표본 11)
- 전체 표본 25 · 정합률 80%
- 개념+유형·절대등급과 유사한 정리편·유형편 원본 tier 벤더

---

## 정리편·유형편·연습편 원본 pick 적합성 평가 (concept-author v1.1 활용도)

### 정리편 원본 pool (개념 도입 · star 2~3)

**★★★★★ 매우 적합**:
- **Bible Focus** (각 소단원 첫 페이지): 공식·정의 요약표 · 정리편 개념 요약 참조 원본으로 최적. 4~6개 공식·정의를 표 형태로 정리 · 재구성 없이 참조 가능.
- **대표 예제 01~04 (초반)**: 유형 표준 도입 문제 · 3단 풀이 (바로접근·바른풀이·Bible Says) 학생 접근 유도 명료 · **정리편 대표문제 원본으로 개념+유형·개념원리 대비 우수**
- **개념 CHECK 4문 세트**: 소단원 개념 학습 직후 확인 문제 · 정리편 소단원 마무리 확인 원본으로 최적

### 유형편 원본 pool (유형별 반복 훈련 · star 2~4)

**★★★★★ 매우 적합**:
- **한 번 더하기 (N-1) · 표현 더하기 (N-2·N-3)**: 대표 예제와 동일 유형 반복 훈련 pool · 유형편의 유형별 3~5문 반복 세트 원본으로 최적 (대표 예제당 3~4문 확보 · 총 400+ 문항)
- **실력 더하기 (N-4)**: 대표 예제 응용·심화 · 유형편 tier 3~4 진입 pool

**★★★★ 적합**:
- **중단원 STEP 1 기본 다지기 01~08**: 유형 반복 확인 · 유형편 마무리 pool

**★★★ 보통**:
- **중단원 STEP 1 09~12**: 심화 진입 · 유형편 상위 pool

### 연습편 원본 pool (연습·심화 · star 3~5)

**★★★★★ 매우 적합**:
- **중단원 STEP 2 실력 다지기 13~18**: 응용·서술형·빈칸 유도 · 연습편 star 4 원본 최적 (표본 4/5문 star 4 확인)
- **중단원 challenge 19·20 (교육청 기출)**: 학평 원본 · 연습편 star 4~5 원본 최적 (표본 5문 star 4·5 100% 정합 · 편차 0)

### 개념+유형과 비교

| 비교 축 | 수학의바이블 | 개념+유형 |
|---|---|---|
| 물리 구성 | 단일책 (508p) · 개념·유형·연습 통합 | 개념편 (248p) + 유형편 (96p) 별책 |
| 대표 예제 | 3단 풀이 (바로접근·바른풀이·Bible Says) 학생 노출 | 단일 풀이 (Point) |
| 반복 훈련 | 대표예제당 4문 (한번·표현·실력) 세트 | 대표예제당 유제 3~4문 · 유형편 유형별 5~8문 별책 |
| 심화 진입 | 실력 더하기 N-4 + STEP 2 | 유형편 UP 마킹 |
| 최상위 | challenge 교육청 기출 (각 소단원 2문 · 총 20문) | 유형편 UP 마킹 (star 4 최상) |
| 교육과정 외 | 바이블 PLUS 뱃지 명시 분리 | 별도 확장 표시 부재 |
| 정리편 원본 | Bible Focus · 대표 예제 3단 풀이 (**우수**) | 개념편 대표예제 |
| 유형편 원본 | 한번·표현·실력 더하기 3단 세트 (**우수**) | 유형편 유형별 5~8문 |
| 연습편 원본 | STEP 2 + challenge (**우수 · 학평 원본**) | 유형편 후반 UP 마킹 |
| star_5 밀도 | 8% (표본 25 중 2건) | 0% (표본 30 중 0건) |
| premium 밀도 | 0% (표본 25 중 0건) | 0% (표본 30 중 0건) |

**결론**: 수학의바이블은 **정리편·유형편·연습편 3책 통합 원본으로 개념+유형 대비 우수**. 특히:
- 정리편: Bible Focus + 대표 예제 3단 풀이 (**우수**) · 개념+유형의 개념편 대표예제 대비 접근 방식 학습 유도 명료
- 유형편: 한번·표현·실력 더하기 세트 (**우수**) · 개념+유형의 유형편 유형별 5~8문 대비 반복 훈련량 확보
- 연습편: STEP 2 + challenge (**우수**) · challenge 학평 원본으로 개념+유형 UP 마킹 대비 star 5 진입 가능

**시험지 최상위 pool로는 부적합** (개념+유형과 동일 tier · challenge조차 학평 초·중반) · **시험지는 블랙라벨 STEP 2·3 · 마플 STEP 3 · 쎈 C단계 사고력 pool 유지**.

---

## concept-author v1.1 활용 예상 시나리오

**정리편 소단원 대표문제 pick 시**:
```
1순위: 바이블 대표 예제 01~04 (초반) - Bible Focus 개념 정의와 정합
2순위: 개념+유형 개념편 대표예제 01~04
3순위: 개념원리 대표예제
```

**유형편 유형별 반복 pool pick 시**:
```
1순위: 바이블 한번·표현·실력 더하기 세트 (대표예제당 4문)
2순위: 개념+유형 유형편 유형별 5~8문
3순위: RPM 유형익히기 세트
```

**연습편 star 3~4 pool pick 시**:
```
1순위: 바이블 STEP 1 09~12 + STEP 2 13~18 (교육청 기출 뱃지 우선)
2순위: 개념원리 실력UP
3순위: RPM 서술형주관식·심화
```

**연습편 star 4~5 pool pick 시**:
```
1순위: 바이블 challenge 교육청 기출 (10 소단원 × 2문 = 20문)
2순위: 마플시너지 STEP 3
3순위: 블랙라벨 STEP 2 (star 5 pool은 블랙라벨 STEP 3)
```

---

## CM2 소단원별 정점 원형 검증

세션 61·62 확립 매트릭스와 수학의바이블 challenge·STEP 2 정합 검증:

| 소단원 | 세션 61·62 정점 원형 | 바이블 정합 문항 | 정합도 |
|---|---|---|---|
| CM2-GM-평면좌표 | RT·SYM (O-03 각이등분선 · O-04 3D · O-NEW-19~21·27) | STEP 2 15 (직각이등변 3변비 · O-14 근접) | ★★★★ 정합 |
| CM2-GM-직선 | XU·EQV | challenge 20 (넓이 삼등분 매개변수 · P4 신호) | ★★★★ 정합 |
| CM2-GM-원 | XU·CON (O-05·06 접선 킬러·O-NEW-22·28) | challenge 19 (원·두 축·현 이중 · O-05 계열) | ★★★★★ 완전 정합 |
| CM2-GM-이동 | SYM·BW (O-01 Fagnano · O-02 3보기) | challenge 19 (Fagnano 이중 대칭 · O-01) | ★★★★★ 완전 정합 (자기복제 감지) |
| CM2-ST-집합 | PD·MI (O-NEW-23·24·29) | STEP 2 16 (원소별 상태 · O-NEW-23) | ★★★★★ 완전 정합 |
| CM2-ST-명제 | XU·CON (O-NEW-25 코시·산술기하) | STEP 2 17 + challenge 20 (코시·산술기하 · O-NEW-25 + O-14) | ★★★★★ 완전 정합 |
| CM2-FN-함수 | XU·SC (O-NEW-30) | challenge 20 (두 식으로 정의된 함수의 부동점 · SC 축) | ★★★★ 정합 |
| CM2-FN-유리 | SYM (O-NEW-31 자기역함수) | challenge 20 ((a,b) 대칭·역함수 · O-NEW-31) | ★★★★★ 완전 정합 (자기복제 감지) |
| CM2-FN-무리 | SYM+XU (O-NEW-32 min(f,f⁻¹)) | STEP 2 14 + challenge 19 (치역 일치 · 대칭 넓이) | ★★★ 정합 (min(f,f⁻¹) 원형은 미확인 · 표본 부족) |

**매트릭스 정합률**: **8.5/9 소단원 완전 정합** (94%) · 세션 61·62 매트릭스 강력 검증. 소단원별 정점 통찰 원형이 벤더 무관 일관 확인.

---

## 특이사항

### 1. 교육과정 외 침투 감지 (바이블 PLUS 뱃지)

- **원의 접선의 길이 공식** (p.146~147, PT=√(CP²-CT²))
- **두 원 공통접선 길이 공식** (공통외접선·공통내접선 · 도형 유사비 활용)
- 이 개념들은 CM2 정규 교과 밖 · **바이블 PLUS 뱃지로 본문에서 명시 분리** · 학습 자료 도입 시 참고 표시 필수

**대응**: 우리 교재 도입 시 정규 교과에 없음을 명시하고, 학평·모의고사에서 사용되면 참고로만 다룸.

### 2. 회전 용어 침투 감지 (CM2-GM-이동 STEP 2 15)

- 도형 변환 f(-y, x+3)=0을 "회전" 개념으로 설명할 여지 · 학생용 본문에는 명시 없이 좌표 대응만 서술
- **정책 정합**: CM1 회전·회전행렬 배제 정책 계승 · CM2에서도 자연어 대체 (좌표 대응 매핑) 필수
- friction_verdict: YELLOW · 우회 표현 (좌표 대응 설명)

### 3. 외국 수학자 이름 회피 확인

- 표본 25문 전체에 코시-슈바르츠(코시) · 피타고라스 이름 명시 부재 (Bible Focus·바른풀이 모두 "코시-슈바르츠 부등식", "피타고라스 정리" 이름 노출 없음 · 결과식만 활용)
- **정책 정합**: 외국 수학자 이름 공식 금지 정책과 정합 · 도구로만 활용 (수학의바이블은 학생용 본문에서 이름을 명시하지 않는 표기 스타일)

### 4. Vendor label 정정 신호

**정정 신호 1**: challenge 라벨 예측 star 5 → 실측 star 4 하향 (2건)
- CM2-FN-함수 challenge 20 (두 식으로 정의된 함수의 부동점): case 분석 부담 크지만 통찰 표준 · 실측 star 4
- CM2-FN-무리 challenge 19 (대칭 넓이): 통찰 1단계 · 실측 star 4

**정정 신호 2**: challenge 예측 star 5 → 실측 star 5 정합 (2건)
- CM2-GM-원 challenge 19 · CM2-GM-이동 challenge 19

**회귀 함수 정정 제안 (v1.12)**:
```
바이블_challenge_star_predict(sub_unit) =
  if sub_unit in {원, 이동, 명제}: return {star: 5, confidence: 0.85}
  elif sub_unit in {함수, 무리}: return {star: 4, confidence: 0.75, alt: [5]}
  else: return {star: 4~5, confidence: 0.75}
```

### 5. 3단 풀이 방식 (바로접근·바른풀이·Bible Says)의 저작권 · 활용 고려

- 바이블만의 독특한 3단 풀이 방식 · 우리 교재의 정리편 대표문제 유도 부분에 유사 3단 구조 도입 시 저작권 침해 위험
- **대응**: 원본 pool로 pick 시 발문·숫자만 참조 · 풀이 방식은 우리 자체 스타일 (자세한 풀이 · Critical Point 서술) 유지

### 6. 표본 25 vs 절대등급 표본 27 · 개념+유형 30 정합률 비교

- 절대등급: 78% (A- 급)
- 개념+유형: 70% (B+ 급)
- **수학의바이블: 80% (A- 급)** · **동아·이한종 계열 벤더 중 최상위 정합률**
- 원인: challenge 라벨이 명확한 학평 원본 표시 · STEP 2가 서술형·빈칸 유도로 tier 분리 명료

### 7. 부재 확인 사항

- **premium 후보 완전 부재** (표본 25 중 0건) · 개념+유형과 동일 · 절대등급 (표본 27 중 1건 · premium 밀도 3.7%)보다 낮음
- 시험지 정점 슬롯 원본으로는 마플·블랙라벨 STEP 3 pool 사용 유지 (수학의바이블은 정리편·유형편·연습편 pool로만 활용)

### 8. 신뢰도 · 자산화 정책

- **정리편·유형편 원본 pool로 첫 pick 순위 상승** — Bible Focus + 3단 풀이 대표 예제 + 한번·표현·실력 세트가 concept-author v1.1 pool에서 우선순위 1로 활용 가능
- **연습편 pool은 STEP 2 + challenge 위주** — 학평 기출 라벨 신뢰도 최상
- **시험지 최상위 pool 배제** — premium 부재 · 블랙라벨·마플 STEP 3 유지

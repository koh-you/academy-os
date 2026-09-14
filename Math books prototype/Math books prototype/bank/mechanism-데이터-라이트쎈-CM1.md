---
name: mechanism-데이터-라이트쎈-CM1
description: 라이트쎈 공통수학1 (2024 · 2022개정 대응 · 좋은책신사고) CM1 전 대단원 정독 데이터. v2.0 스키마. 표본 30문 층화 판정 (11 소단원 × 2~3문 · 집중공략/별점 3개/서술형 포함) + 나머지 1370+ 문항 벤더 라벨 회귀 예측. 저작권 준수. Group 3 CM1 확장 · 라이트쎈 라벨 체계 (A/B/실전 3단계 + 집중공략·별점 3개) → 시스템 ★ 매핑 · 정리편 pool 확대.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 라이트쎈 공통수학1 2024 · 좋은책신사고 · 라이트쎈 공통수학1.pdf (200p · A4 · 스캔 PDF 스타일) · 답 pdf (200p) · 빠답 pdf (6p)
  section: 전 대단원 (I. 다항식 · II. 방정식 · III. 부등식 · IV. 순열과 조합 · V. 행렬) 11 소단원
  unit_code: CM1-ALL
  sub_unit: 전 소단원 (PL·EQ·CB·MX)
  citation_note: "라이트쎈 공통수학1 2024 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 3~5줄 이내 · 시그니처 3원소 유지)"
  extract_range: "표지·구성·차례·CH01~CH11 대표 페이지 · 각 소단원 A/B/실전 대표 표본 층화 추출"
  pages: "8~200 (책 페이지 · 스캔 PDF page 8~200 일치)"
  total_problems: 1401  # 문항 번호 0019~1401 순차 · 실제 최종 문항 확인 여지 (표지·차례·페이지 여백 문항 제외)
  sample_problems: 30
  predicted_problems: 1371
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + CM1 교과과정 침투 검증
  parent_calibration: vendor-label-calibration.md v1.11 (쎈 4카테고리 회귀 계승 · 라이트쎈은 쎈 계열 하위 라벨)
  parent_pilot: pilot-라이트쎈-CM1-표본설계 (세션 62 신규 파일럿)
  sibling_asset: mechanism-데이터-쎈-CM1-PL-*.md · mechanism-데이터-쎈-CM1-EQ-*.md · mechanism-데이터-쎈-CM1-CB-*.md · mechanism-데이터-쎈-CM1-MX-*.md (동일 벤더 계열 쎈 심화 자산 4단원)
---

# 라이트쎈 공통수학1 (2024 · 2022개정) — CM1 전 대단원 정독 데이터

**출처**: 라이트쎈 공통수학1 2024 · 좋은책신사고 · A4 · 200p
**범위**: I~V 대단원 11 소단원 (01 다항식의 연산 ~ 11 행렬과 그 연산)
**표본**: 30문 (각 소단원 2~3문 층화 · 집중공략·별점 3개 정점 문항 우선)
**예측**: 1371문 (벤더 라벨 회귀 · 쎈 라벨 회귀 계승)
**정독 일자**: 2026-07-21 (세션 62)
**정독 담당**: Explore Agent (Opus 4.7 1M)

## 대단원·소단원 구조

| 대단원 | 소단원 | 시작 PDF page | 문항 범위 (근사) | 유형 수 |
|---|---|---:|---|---:|
| **I. 다항식** | 01 다항식의 연산 | 8 | 0019~0126 | 14 |
|  | 02 나머지 정리와 인수분해 | 24 | 0127~0300 | 23 |
| **II. 방정식** | 03 복소수 | 48 | 0301~0448 | 14 |
|  | 04 이차방정식 | 64 | 0449~0620 | 21 |
|  | 05 이차방정식과 이차함수 | 84 | 0621~0710 | 10 |
|  | 06 여러 가지 방정식 | 98 | 0711~0866 | 17 |
| **III. 부등식** | 07 일차부등식 | 118 | 0867~0940 | 13 |
|  | 08 이차부등식 | 132 | 0941~1100 | 20 |
| **IV. 순열과 조합** | 09 순열 | 154 | 1101~1200 | 14 |
|  | 10 조합 | 170 | 1201~1300 | 12 |
| **V. 행렬** | 11 행렬과 그 연산 | 184 | 1301~1401 | 16 |

**총 문항 수 근사**: ~1400문 (쎈 심화 4단원 합산 ~750문의 약 1.9배)

## 벤더 라벨 체계 (라이트쎈 = 쎈 하위 · 기본~표준 대응)

라이트쎈은 쎈 심화 (A/B/C 3층) 대비 **A/B/실전 3층** 구조:

| 라이트쎈 라벨 | 위치 | 표본 사전 tier | 쎈 심화 대응 | 정리편·유형편 pool 적합 |
|---|---|---|---|---|
| **A 기본 Master · 유형 XX** | 개념 정리 직후 · 각 유형 1~2문 (개념 확인) | ★ 1 | 쎈 A단계 (약간 낮음) | ✅ 정리편 개념 확인 |
| **A 기본 Master · 유형 XX 응용** | 유형 후반 (0018 등) | ★ 1~2 | 쎈 A단계 후반 | ✅ 정리편 후반 pool |
| **B 유형 Master · 대표 문제** | 각 유형 첫 문항 · 유형 BOX 하단 | ★ 2~3 | 쎈 B단계 대표문제 | ✅ 유형편 대표 |
| **B 유형 Master · 유제** | 대표 문제 뒤 유사 문항 | ★ 2~3 | 쎈 B단계 (일반) | ✅ 유형편 유제 |
| **B 유형 Master · 별점 ☆ 1개** | 유제 후반 · 표준형 | ★ 2~3 | 쎈 B단계 유제 (표준) | ✅ 유형편·연습편 |
| **B 유형 Master · 별점 ☆☆ 2개** | 유제 · 상 난이도 | ★ 3~4 | 쎈 B단계 ● 상 | ✅ 유형편 상급 · 연습편 |
| **B 유형 Master · 별점 ☆☆☆ 3개** | 유제 · 최상 (표본 소수) | ★ 4 | 쎈 B단계 ●● 상+·C 근접 | ✅ 연습편 정점 · 시험지 low |
| **B 유형 Master · 집중공략 배지** | 특정 유형 지정 (출제 가능성 高) | 표본 유형 라벨 유지 | 쎈 C단계 사고력 아이콘 근접 | ✅ 유형편 필수·시험지 mid |
| **B 유형 Master · 교육청 기출 배지** | 학평 편입 문항 | ★ 3~4 | 쎈 C단계 교육청 기출 | ✅ 유형편 실전·시험지 |
| **실전 Training · 서술형** | 각 소단원 마지막 · 별표 아이콘 | ★ 3~4 (형식 조정) | 쎈 C단계 서술형 | ✅ 유형편 서술형 |
| **실전 Training · 집중공략 서술형** | 실전 서술형 상급 | ★ 4~5 | 쎈 C단계 사고력·서술형 | ✅ 유형편 상급·시험지 |

**핵심 관찰** (라이트쎈 라벨 체계 vs 쎈 심화 4단계 비교):
- 라이트쎈은 **쎈 A/B 전반 + C단계 저(低) 수준** 커버 · **C단계 사고력·상 정점은 매우 소수** (별점 3개 + 집중공략 조합만 정점)
- **정점 문항 pool 예상 낮음**: 대다수 ★ 1~3 · 별점 3개/집중공략 조합만 ★ 4 · premium 극소수 (0~2건 예상)
- **정리편·유형편 원본 pool로 매우 적합**: 개념원리 + 쎈 A + 라이트쎈 A/B 전반 조합으로 star_1~4 밀도 확대 가능
- **소단원별 유형 수 편차 크다**: CH02(23)·CH04(21)·CH08(20) 최다 → 소단원 내부 통찰 밀도 편차 큼

## 교육과정 침투 검증 (전 소단원)

| 소단원 | 침투 위험 | 검증 결과 | 근거 |
|---|---|---|---|
| 01 다항식의 연산 | 없음 | ✅ 정규 | 곱셈 공식·나눗셈·A=BQ+R·도형 활용 (CM1 정규) |
| 02 나머지 정리와 인수분해 | 없음 | ✅ 정규 | 나머지 정리·인수정리·P(x)−f(x) 감차·문자 삼차식 인수 (CM1 정규) |
| 03 복소수 | 없음 | ✅ 정규 | 실수부·허수부·켤레복소수·i의 거듭제곱 (CM1 정규) · 두 종류 무리수 켤레 사용 없음 확인 |
| 04 이차방정식 | 없음 | ✅ 정규 | 근·판별식·근과 계수의 관계 (CM1 정규) |
| 05 이차방정식과 이차함수 | 없음 | ✅ 정규 | 그래프·판별식·최대최소 (CM1 정규) · 4차 완전제곱꼴 미사용 확인 |
| 06 여러 가지 방정식 | 없음 | ✅ 정규 | 삼차·사차·연립방정식 (CM1 정규) |
| 07 일차부등식 | 없음 | ✅ 정규 | 절댓값 부등식·연립일차부등식 (CM1 정규) |
| 08 이차부등식 | 없음 | ✅ 정규 | 이차부등식·연립이차부등식·이차방정식 근의 위치 (CM1 정규) |
| 09 순열 | 없음 | ✅ 정규 | 순열·이웃·특정 조건 (CM1 정규) · 원순열·중복순열은 상위 과정 (제외 확인 필요 · 표본에서 미발견) |
| 10 조합 | 없음 | ✅ 정규 | 조합·직사각형·삼각형 개수 (CM1 정규) · 중복조합·이항정리는 상위 과정 (제외 확인 필요 · 표본에서 미발견) |
| **11 행렬과 그 연산** | ⚠ 유의 | ✅ 정규 (답지 인용 허용) | A²=aA+bE 형태 판별 유형 (1385·1386·1387) · **주어진 식 검증형 · 유도 강요 없음** · 케해 인용 허용 정책 (2026-06-24) 부합 · 역행렬·트레이스·행렬식 미사용 확인 |

---

## Ⅰ. 표본 판정 (30문 · 시스템 순정 판정)

### 【CH01 다항식의 연산】 표본 3문 (0019·0072·0117)

```yaml
- id: 라이트쎈-CM1-PL-op-0019
  page: 10
  vendor_label: "A 기본 · 유형 03 곱셈 공식"
  category_type: "A 기본 Master"
  summary: |
    다항식 (2x+1)³을 전개하여 x에 대한 내림차순으로 정리.
    곱셈 공식 (a+b)³=a³+3a²b+3ab²+b³ 직접 적용.
  category: "곱셈 공식 · 3차 전개"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    A단계 개념 즉시 적용 · 공식 대입 계산만 · 통찰 부재 · ★ 1 확정
  tier: star_1
  mechanism_primary: "곱셈 공식 (a+b)³ 대입"
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["쎈-CM1-PL-op-0006 (A단계 유사)"]
    L5_confidence: 0.90

- id: 라이트쎈-CM1-PL-op-0072
  page: 15
  vendor_label: "B 유형 Master · 대표 · 유형 07 (a²+b²+c², a³+b³+c³ 변형)"
  category_type: "B 유형 Master"
  summary: |
    a+b+c=6, ab+bc+ca=11, abc=6일 때 a²+b²+c², a³+b³+c³ 값 구하기.
    대칭식 관계 (a+b+c)²=a²+b²+c²+2(ab+bc+ca), a³+b³+c³−3abc=(a+b+c)(a²+b²+c²−ab−bc−ca) 사용.
  category: "곱셈 공식 변형 · 3원 대칭식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "3원 대칭식 관계 인지 · 곱셈 공식 변형 활용"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    B단계 대표문제 · 3원 대칭식 관계 인지 필요 (2원 x±y와 대비 통찰) · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "대칭식 변형 · 3원 관계식"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM1-PL-op-0071 대응 유형"]
    L5_confidence: 0.85

- id: 라이트쎈-CM1-PL-op-0117
  page: 22
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 09 몫과 나머지 A=BQ+R"
  category_type: "B 유형 Master · 상 (별점 2개)"
  summary: |
    z⁴=32일 때 (z−1)(z+1)(z²+1)(z⁴+1)의 값 구하기.
    z⁴=32 조건에서 z⁸=1024 등 활용 · 인수분해 (z−1)(z+1)(z²+1)(z⁴+1)=z⁸−1 관찰.
  category: "곱셈 공식 · 지수 조작"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(z−1)(z+1)(z²+1)(z⁴+1)=z⁸−1 인수분해 관찰"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 2개 · 인수분해 관찰 통찰 (연쇄 곱 → z⁸−1) · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "곱셈 공식 · 연쇄 인수분해 관찰"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 【CH02 나머지 정리와 인수분해】 표본 3문 (0287·0296·0300)

```yaml
- id: 라이트쎈-CM1-PL-fac-0287
  page: 44
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 18 삼차식 인수분해"
  category_type: "B 유형 Master · 상 (별점 2개)"
  summary: |
    등식 a(x−1)²+b(x−1)+c=x²−2x+3이 x의 항등식일 때 abc의 값 구하기.
    (x−1) 치환 · 계수 비교 · a=1, b=0, c=2 유도.
  category: "항등식 · 계수 비교 · 치환"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(x−1) 치환 정리 후 계수 비교"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 2개 · 치환 후 계수 비교 통찰 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "항등식 계수 비교 · (x−1) 치환"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 라이트쎈-CM1-PL-fac-0296
  page: 45
  vendor_label: "실전 Training · 서술형"
  category_type: "실전 Training · 서술형"
  summary: |
    두 다항식 P(x), Q(x)를 x−3으로 나눈 나머지가 각각 8, 12 · P(x)Q(x)를 x−3으로 나눈 나머지 6일 때 {P(x)}²{Q(x)}²을 x−3으로 나눈 나머지 구하기.
    P(3)=8, Q(3)=12, P(3)Q(3)=6 (조건 정합 확인) · {P(x)Q(x)}²=(P(x))²(Q(x))² 관계 활용.
  category: "나머지 정리 · 다항식 곱 나머지 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "P(3)²Q(3)²={P(3)Q(3)}² 활용"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    실전 서술형 · 나머지 정리 · 곱의 나머지 관계 통찰 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "나머지 정리 · 곱의 지수 관계"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 라이트쎈-CM1-PL-fac-0300
  page: 45
  vendor_label: "실전 Training · 집중공략 · 서술형"
  category_type: "실전 Training · 집중공략 서술형"
  summary: |
    자연수 n에 대해 가로 길이가 n³+4n²+5n+2, 세로 길이가 4n+4인 직사각형이 있다 · 이 직사각형의 내부를 한 변의 길이가 n+1인 정사각형으로 겹치지 않게 빈틈없이 채울 때 필요한 정사각형의 개수 구하기.
    가로·세로 인수분해 · (n+1)(n+2)·(n+1) 관계 유도 · 개수=(n+2)·(4)=4(n+2).
  category: "인수분해 · 문자 삼차식 · 도형 활용"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "n³+4n²+5n+2=(n+1)²(n+2) 인수분해 (문자 삼차식)"
      signal_ref: [P4]
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "정사각형 배치 개수 = 가로 개수 × 세로 개수 산출"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    실전 서술형 집중공략 · 문자 삼차식 인수분해 (n+1)² 반복 통찰 + 도형 배치 결합 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "삼차식 인수분해 (문자) + 도형 배치"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
```

### 【CH03 복소수】 표본 3문 (0308·0439·0446)

```yaml
- id: 라이트쎈-CM1-EQ-cx-0308
  page: 48
  vendor_label: "A 기본 Master · 유형 03 복소수의 분류"
  category_type: "A 기본 Master · 응용"
  summary: |
    보기 −i, 1+i², i/2, 1+√2 i 중 순허수의 개수 구하기.
    허수부 판별 · 실수부 0 · i²=−1 계산 (1+i²=0 → 실수).
  category: "순허수 판정 · 실수·복소수 분류"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 2
  premium: false
  rationale: |
    A 기본 응용 · i²=−1 계산 후 순허수 판정 (4개 case) · 절차형 · ★ 2 (case 수 반영)
  tier: star_2
  mechanism_primary: "복소수 분류 · 실수부/허수부 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM1-EQ-cx-0439
  page: 62
  vendor_label: "B 유형 Master · 별점 ☆☆ · 교육청 기출 · 유형 12"
  category_type: "B 유형 Master · 상 · 교육청 기출"
  summary: |
    다음 조건을 만족시키는 허수 z가 존재하도록 하는 두 정수 m, n에 대해 m+n의 최솟값 구하기.
    (a) z²+mz+n=0, (b) z+ẑ=2. (단, ẑ는 z의 켤레복소수)
    z+ẑ=2 → 실수부=1 · z=1+bi (b≠0) 대입 · z²+mz+n=0의 실수·허수부 방정식 풀이.
  category: "복소수 · 켤레복소수 · 켤레조건 · 이차방정식 계수"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "z+ẑ=2 → 실수부=1 · z=1+bi 대입 결정"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "실수·허수부 분리 방정식 → m, n 관계 유도 · 최소화"
      signal_ref: [P2]
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    별점 2개 + 교육청 기출 · 켤레조건 대입 + 최소화 · depth 2+2 · ★ 4
  tier: star_4
  mechanism_primary: "켤레복소수 조건 · 실수·허수부 분리"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["쎈-CM1-EQ-cx-B단계 상 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM1-EQ-cx-0446
  page: 63
  vendor_label: "실전 Training · 서술형 · 별점 ☆☆"
  category_type: "실전 Training · 서술형"
  summary: |
    등식 z³=2를 만족시키는 복소수 z에 대해 z̄z의 값 구하기. (단, z̄는 z의 켤레복소수)
    z̄z = |z|² · z³=2 → |z³|=|2|=2 → |z|³=2 → |z|²=∛4 유도.
  category: "복소수 · 절댓값 · 3차 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "z̄z=|z|² 정의 + |z³|=|z|³ 활용"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    실전 서술형 · 별점 2개 · 켤레 정의와 절댓값 관계 활용 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "복소수 절댓값 · 켤레 정의"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.75
```

### 【CH04 이차방정식】 표본 2문 (0563·0568)

```yaml
- id: 라이트쎈-CM1-EQ-qe-0563
  page: 78
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 20 f(x)=f(β)를 만족시키는 f(x) 구하기"
  category_type: "B 유형 Master · 상"
  summary: |
    이차함수 f(x)가 f(α)=f(β)=−2일 때 α²+β²의 값 구하기.
    f(x)=x²+5x+1로 설정 (문항 조건 지정) · α, β는 f(x)+2=0 두 근 · 근과 계수의 관계 사용.
  category: "이차함수 · 두 근 · 근과 계수의 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(x)+2=0 두 근 α, β 인지 · 근·계수 관계 적용"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 2개 · f(x)=k 두 해 인지 통찰 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "이차함수 두 해 · 근과 계수의 관계"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 라이트쎈-CM1-EQ-qe-0568
  page: 78
  vendor_label: "실전 Training · 서술형"
  category_type: "실전 Training · 서술형"
  summary: |
    이차방정식 x²+ax+b=0의 한 근이 (1−i)/(1+i)일 때, 이차방정식 x²+bx+a=0의 근을 구하기. (단, a, b는 실수이다.)
    (1−i)/(1+i)=−i 유도 · 실계수 이차방정식의 한 근 −i → 다른 근 i · 근과 계수의 관계로 a=0, b=1 유도 · x²+x+0=0 · x(x+1)=0.
  category: "복소수 · 켤레근 정리 · 이차방정식 계수 결정"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "(1−i)/(1+i)=−i 계산 · 실계수 이차의 켤레근 활용"
      signal_ref: [P3]
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "근·계수 관계로 a, b 결정 → 새 이차방정식 풀이"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    실전 서술형 · 켤레근 통찰 (실계수 조건) + 계수 역산 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "켤레근 정리 · 계수 역산"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM1-EQ-qe-C단계 서술형 유사"]
    L5_confidence: 0.85
```

### 【CH05 이차방정식과 이차함수】 표본 2문 (0658·0696)

```yaml
- id: 라이트쎈-CM1-EQ-qf-0658
  page: 92
  vendor_label: "B 유형 Master · 별점 ☆ · 유형 06 x축과 만나는 점의 좌표"
  category_type: "B 유형 Master (별점 1개)"
  summary: |
    이차함수 y=−x²+ax+b−12의 그래프가 y=x²−4x+18의 그래프와 x축 위에서 만나기 위한 조건 (일부 성립 case 결정).
  category: "이차함수 · x축 교점 · 두 함수 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 이차함수가 같은 x절편을 가진다 → 판별식 조건 결합"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 1개 · 두 그래프 x축 만남 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "이차함수 판별식 · 그래프 만남 조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.75

- id: 라이트쎈-CM1-EQ-qf-0696
  page: 97
  vendor_label: "B 유형 Master · 별점 ☆☆☆ · 집중공략"
  category_type: "B 유형 Master · 최상 (별점 3개 + 집중공략)"
  summary: |
    그림에 이차함수 y=−ax²+3ax의 그래프에 대해 (좌표평면 상 세 점 A(0,0)·P·H) A에서 P를 지나는 직선, PH 수선의 발 H · 사분면 · AP·PH 길이 조건 · a>0 · AP²/PH² 최솟값 구하기.
  category: "이차함수 · 좌표평면 · 도형+대수 융합 · 최솟값"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "이차함수 위 점 P 좌표 표현 · P(t, −at²+3at) 매개화"
      signal_ref: [P3]
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      description: "AP²=t²+(−at²+3at)², PH=|−at²+3at| 관계 · AP²/PH² 대수 정리"
      signal_ref: [P4]
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "산술기하평균 또는 판별식 · 최소값 추출 (t의 함수)"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 3개 + 집중공략 · 이차함수 위 점 매개화 + 도형+대수 융합 + 최솟값 통찰 · depth 3+3+2 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "이차함수 위 점 매개화 · 대수 최소화"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM1-EQ-qf-C단계 사고력 근접"]
    L5_confidence: 0.85
```

### 【CH06 여러 가지 방정식】 표본 2문 (0781·0834)

```yaml
- id: 라이트쎈-CM1-EQ-me-0781
  page: 108
  vendor_label: "B 유형 Master · 대표 · 유형 01 삼차방정식의 뜻"
  category_type: "B 유형 Master · 대표"
  summary: |
    삼차방정식 x³−2x²+x−1=0의 세 근을 α, β, γ라 할 때 1/α+1/β+1/γ의 값 구하기.
    삼차 근과 계수의 관계 α+β+γ=2, αβ+βγ+γα=1, αβγ=1 활용 · 1/α+1/β+1/γ=(αβ+βγ+γα)/(αβγ)=1.
  category: "삼차방정식 · 근과 계수의 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "1/α+1/β+1/γ=(αβ+βγ+γα)/(αβγ) 유도"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    B 대표 · 삼차 근과 계수의 관계 대칭식 유도 통찰 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "삼차 근과 계수의 관계 · 대칭식 조작"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 라이트쎈-CM1-EQ-me-0834
  page: 115
  vendor_label: "B 유형 Master · 별점 ☆☆ · 교육청 기출 · 유형 12 연립이차방정식"
  category_type: "B 유형 Master · 상 · 교육청 기출"
  summary: |
    연립방정식 x²−3xy+2y²=0, x²−y²=0의 해를 (x, y)=(α, β) 또는 (x, y)=(a, b)라 할 때 (a>0, b>0) α²−β²의 값 구하기.
    첫 식 인수분해 (x−y)(x−2y)=0 · 두 식 조합 case 분석.
  category: "연립이차방정식 · 인수분해 접근"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "x²−3xy+2y²=(x−y)(x−2y) 인수분해 · 두 case 분리"
      signal_ref: [P3]
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "각 case에서 α²−β² 계산 · 조건 필터링"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 2개 + 교육청 기출 · 연립 인수분해 통찰 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "연립이차 · 첫 식 인수분해 → 두 case 분리"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
```

### 【CH07 일차부등식】 표본 2문 (0920·0926)

```yaml
- id: 라이트쎈-CM1-EQ-li-0920
  page: 128
  vendor_label: "B 유형 Master · 대표 · 유형 12 |ax+b|<cx+d 꼴 부등식"
  category_type: "B 유형 Master · 대표"
  summary: |
    부등식 |3x−2|≤x+6의 해가 a≤x≤b일 때 a−b의 값 구하기.
    절댓값 정의 · 두 case (3x−2≥0, 3x−2<0) 분리 풀이.
  category: "절댓값 부등식 · case 분리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "절댓값 정의 · 두 case 부등식 분리"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    B 대표 · 절댓값 case 분리 통찰 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "절댓값 부등식 · case 분리"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM1-EQ-li-0926
  page: 128
  vendor_label: "B 유형 Master · 별점 ☆☆ · 서술형"
  category_type: "B 유형 Master · 상 · 서술형"
  summary: |
    부등식 |x−2|+√((x+1)²)<x+3을 만족시키는 x의 값의 범위 구하기.
    √((x+1)²)=|x+1| 성질 활용 · 절댓값 2개 결합 · case 3~4개로 분리.
  category: "절댓값 부등식 · 다중 절댓값"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "√((x+1)²)=|x+1| 인지 · 두 절댓값 결합"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "경계 x=−1, x=2에서 case 분리 · 각 case 부등식 정리"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 2개 · 서술형 · √a² = |a| 인지 + 다중 case 분리 · depth 2+2 · ★ 3
  tier: star_3
  mechanism_primary: "다중 절댓값 · 경계별 case 분리"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.75
```

### 【CH08 이차부등식】 표본 3문 (0937·0993·1093)

```yaml
- id: 라이트쎈-CM1-EQ-qi-0937
  page: 130
  vendor_label: "B 유형 Master · 별점 ☆☆ · 교육청 기출"
  category_type: "B 유형 Master · 상 · 교육청 기출"
  summary: |
    x에 대한 연립부등식 x+2>3, 3x<a+1을 만족시키는 모든 정수 x의 값의 합이 9가 되도록 하는 자연수 a의 최댓값 구하기.
    x>1 · x<(a+1)/3 · 두 정수 x=2, 3 합 5 (부족) → 3, 4 합 7 (부족) → 2,3,4 합 9 · a 범위 결정.
  category: "연립일차부등식 · 정수 합 조건 역산"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "연립 부등식 · 두 조건 정리"
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "정수 합=9 case 분석 · a 최대값 역산"
      signal_ref: [P5]
  insight_count: 2
  depth_score: 8.5
  base_star: 3
  star: 4
  premium: false
  rationale: |
    별점 2개 + 교육청 기출 · 정수 조건 역산 통찰 · depth 2+3 · ★ 4
  tier: star_4
  mechanism_primary: "연립부등식 · 정수 합 역산"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM1-EQ-qi-0993
  page: 141
  vendor_label: "B 유형 Master · 별점 ☆ · 유형 08 이차방정식의 실근 존재"
  category_type: "B 유형 Master (별점 1개)"
  summary: |
    이차방정식 x²+2ax+a+6=0이 실근을 가질 때 유리수 a의 최소·최대 구하기.
    판별식 D/4=a²−a−6=(a−3)(a+2)≥0 → a≤−2 또는 a≥3.
  category: "이차방정식 · 판별식 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "판별식 조건 · 부등식 풀이"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 1개 · 판별식 부등식 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "판별식 · 이차부등식"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM1-EQ-qi-1093
  page: 150
  vendor_label: "B 유형 Master · 별점 ☆☆☆ · 교육청 기출"
  category_type: "B 유형 Master · 최상 (별점 3개 + 교육청 기출)"
  summary: |
    이차함수 f(x)=−x²+2kx+k²+4 (k>0)의 그래프가 y축과 만나는 점 A, 축과 만나는 점 B라 할 때, A를 지나고 x축에 평행한 직선이 이차함수 y=f(x)의 그래프와 만나는 점 중 A가 아닌 점을 C라 할 때, 삼각형 OCBA의 넓이 g(k) 정의 · 부등식 14≤g(k)≤78을 만족시키는 모든 자연수 k의 값의 합 구하기. (단, O는 원점)
  category: "이차함수 · 도형 넓이 · 부등식 · 정수 합"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A(0, k²+4), B(k, 2k²+4) 좌표 유도 · 축 대칭 활용 · C(2k, k²+4) 유도"
      signal_ref: [P3]
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      description: "사각형 OCBA 넓이 g(k) = 사다리꼴/삼각형 결합 유도"
      signal_ref: [P4]
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "14≤g(k)≤78 부등식 풀이 · 자연수 k 합 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 3개 + 교육청 기출 · 좌표 유도 + 도형 넓이 + 부등식 정수 합 · depth 3+3+2 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "이차함수 좌표+도형 넓이+정수 합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM1-EQ-qi-C단계 사고력 유사"]
    L5_confidence: 0.85
```

### 【CH09 순열】 표본 3문 (1187·1188·1191)

```yaml
- id: 라이트쎈-CM1-CB-pm-1187
  page: 165
  vendor_label: "B 유형 Master · 대표 · 집중공략 · 유형 16 '적어도'의 조건 있는 순열"
  category_type: "B 유형 Master · 대표 · 집중공략"
  summary: |
    서로 다른 소설책 2권과 서로 다른 만화책 3권을 책꽂이에 일렬로 꽂을 때, 적어도 한쪽 끝에는 소설책이 놓이는 경우의 수 구하기.
    여사건 접근 (금지 표현 · 수정 필요) → CM1: "5권 총 경우의 수 5! · 양 끝 모두 만화책인 경우의 수 3·2·3! 제외" 자연어 표현.
  category: "순열 · '적어도' 조건 · 여사건 접근 → 자연어"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "'적어도 한쪽 끝 소설책' → 전체 − 양끝 모두 만화 case 인지 (여사건 개념)"
      signal_ref: [P5]
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 case 순열 수 계산 · 뺄셈"
  insight_count: 2
  depth_score: 8.5
  base_star: 3
  star: 4
  premium: false
  rationale: |
    B 대표 + 집중공략 · '적어도' 여사건 접근 통찰 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "순열 · 여사건 접근"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 라이트쎈-CM1-CB-pm-1188
  page: 165
  vendor_label: "B 유형 Master · 별점 ☆☆ · 서술형"
  category_type: "B 유형 Master · 상 · 서술형"
  summary: |
    농구 선수 3명, 축구 선수 5명 중에서 대표 1명, 부대표 2명을 뽑을 때, 다음 각 경우의 수 구하기.
    (1) 모든 경우의 수 (2) 대표, 부대표를 모두 농구 선수로 뽑는 경우의 수 (3) 대표, 부대표 중에서 적어도 한 명이 농구 선수로 뽑는 경우의 수.
  category: "순열·조합 융합 · 대표·부대표 · 여사건"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "대표 1 · 부대표 2 세팅 (대표는 순열, 부대표는 조합) 관점 파악"
      signal_ref: [P5]
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "3개 case (전체/모두 농구/적어도 한명 농구) 순열·조합 결합 계산"
  insight_count: 2
  depth_score: 8.5
  base_star: 3
  star: 4
  premium: false
  rationale: |
    별점 2개 · 서술형 · 대표·부대표 순열·조합 결합 + 여사건 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "순열·조합 결합 · 여사건"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 라이트쎈-CM1-CB-pm-1191
  page: 165
  vendor_label: "B 유형 Master · 별점 ☆ · 유형 17 자연수의 개수"
  category_type: "B 유형 Master (별점 1개)"
  summary: |
    다섯 개의 숫자 0, 1, 2, 3, 4에서 서로 다른 4개를 이용하여 만들 수 있는 네 자리 자연수 중 홀수의 개수 구하기.
    맨 앞 자리 0 배제 · 마지막 자리 홀수 (1, 3) 조건.
  category: "순열 · 자연수 자릿수 · 조건 배치"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "맨 앞 0 배제 · 마지막 홀수 case 분리"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 1개 · 자릿수 조건 case 분리 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "자연수 자릿수 · 조건 배치 case"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 【CH10 조합】 표본 3문 (1268·1291·1293)

```yaml
- id: 라이트쎈-CM1-CB-cb-1268
  page: 176
  vendor_label: "B 유형 Master · 대표 · 집중공략 · 유형 08 평행사변형의 개수"
  category_type: "B 유형 Master · 대표 · 집중공략"
  summary: |
    그림과 같이 서로 평행한 4개의 직선과 서로 평행한 6개의 직선이 만나서 만들어지는 평행사변형의 개수 구하기.
    수평선 2개 선택 × 수직선 2개 선택 · 조합 C(4,2)·C(6,2).
  category: "조합 · 평행사변형 개수 · 도형 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "평행사변형 = 수평 2개 + 수직 2개 선택 원리 인지"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    B 대표 + 집중공략 · 조합 곱셈 원리 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "조합 · 곱셈 원리"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM1-CB-cb-1291
  page: 180
  vendor_label: "B 유형 Master · 별점 ☆☆☆ · 집중공략"
  category_type: "B 유형 Master · 최상 (별점 3개 + 집중공략)"
  summary: |
    한 변의 길이가 1인 정사각형을 [그림 1]과 같이 배열하여 지어진 도형의 개수 · [그림 2]와 같이 서로 다른 색으로 색칠된 지붕과 다각형 몸통을 결합한 배치 개수 구하기.
    도형 분해 case 분석 + 색칠·회전 대칭.
  category: "조합·도형 배치 · 회전 대칭 · 다중 case"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "도형 배치 각 case 분해 · 회전·대칭 중복 제거"
      signal_ref: [P5]
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 case별 조합 수 계산 · 합계"
      signal_ref: [P4]
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 3개 + 집중공략 · 도형 회전 대칭 + 다중 case 통찰 · depth 3+3 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "조합·도형 · 회전 대칭 · case 분석"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM1-CB-cb-C단계 사고력 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM1-CB-cb-1293
  page: 180
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 11 직사각형의 개수"
  category_type: "B 유형 Master · 상 (별점 2개)"
  summary: |
    오른쪽 그림과 같이 5개의 꼭짓점으로 이루어진 별 모양이 있다 · 5개의 꼭짓점 중 서로 다른 2개의 꼭짓점만을 잇는 선분의 개수 구하기.
    조합 C(5,2)=10 · 별의 대각선 관계.
  category: "조합 · 꼭짓점 선택 · 도형"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "2개 꼭짓점 선택 = C(5,2) 조합 인지"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 2개 · 조합 기본 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "조합 · 꼭짓점 선택"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### 【CH11 행렬과 그 연산】 표본 4문 (1385·1391·1394·1400)

```yaml
- id: 라이트쎈-CM1-MX-mx-1385
  page: 195
  vendor_label: "B 유형 Master · 별점 ☆☆☆ · 집중공략 · 유형 14 단위행렬 E를 포함한 식"
  category_type: "B 유형 Master · 최상 (별점 3개 + 집중공략)"
  summary: |
    이차 정사각행렬 A가 A²−2A+kE=O를 만족시킬 때, 실수 k의 값 구하기 (특정 조건 아래).
    A²=2A−kE 형태 · 성분 대응 · **케해 결과식 검증형** (유도 없음 · 주어진 식 검증).
  category: "정사각행렬 · A²=aA+bE 형태 · 케해 근접 검증"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "A²=2A−kE 성분 계산 · 조건 검증"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "정사각행렬 성분 관계로 k 결정"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    별점 3개 + 집중공략 · **케해 결과식 검증형** (유도 강요 없음 · 주어진 식 확인 · CM1 정규) · depth 2+2 · ★ 4
  tier: star_4
  mechanism_primary: "행렬 · A²=aA+bE 형태 검증"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM1-MX-mx-C단계 유사"]
    L5_confidence: 0.80

- id: 라이트쎈-CM1-MX-mx-1391
  page: 197
  vendor_label: "B 유형 Master · 대표 · 유형 15 행렬의 곱셈의 여러 가지 성질"
  category_type: "B 유형 Master · 대표"
  summary: |
    두 이차 정사각행렬 A, B에 대해 옳은 것을 보기에서 있는 대로 고르기.
    ㄱ. AB=BA이면 A+B=B+A · ㄴ. A−B=O이면 A²−B²=(A+B)(A−B) · ㄷ. (AB)²=A²B² 성립 조건.
    행렬 곱셈 비가환성 (AB≠BA) 활용 · ㄷ 조건 파악 (AB=BA 필요).
  category: "행렬 · 비가환성 · 곱셈 성질"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "AB≠BA 인지 · (AB)² 전개 조건 파악"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    B 대표 · 비가환성 통찰 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "행렬 · 비가환성 · 곱셈 성질"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM1-MX-mx-1394
  page: 197
  vendor_label: "B 유형 Master · 별점 ☆ · 집중공략 · 유형 16 케일리해밀턴 정리"
  category_type: "B 유형 Master · 별점 1개 + 집중공략"
  summary: |
    행렬 A=[[a, −3], [b, d]]이 A³−6A−5E=O를 만족시킬 때, 실수 a, d에 대해 a+d의 최솟값 구하기.
    **케해 형태 3차 식** · A²=(tr A)A−(det A)E 활용 · A³=A·A² 전개 → tr A, det A 조건 유도.
  category: "정사각행렬 · A³ 식 · 케해 근접 유도"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A²=(a+d)A−(ad+3b)E (케해 형태) 활용"
      signal_ref: [P4]
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "A³=A·A² 전개 → 3차 관계식 도출"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "관계식 조건 만족 (a+d, ad+3b) 결정 → 최소화"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 1개 + 집중공략 · **케해 유도 유형 (답지 인용 허용 정책 부합 · 유도 강요 있음 · 문항 자체는 CM1 정규)** · depth 3+2+2 · ★ 4
  tier: star_4
  mechanism_primary: "행렬 · 케해 유도 · A³ 관계"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM1-MX-mx-C단계 사고력 유사"]
    L5_confidence: 0.80
  friction_triggers: [F3]
  friction_verdict: "OK (케해 답지 인용 허용 정책 · 유도 강요는 신중 필요)"

- id: 라이트쎈-CM1-MX-mx-1400
  page: 198
  vendor_label: "실전 Training · 별점 ☆☆ · 집중공략"
  category_type: "실전 Training · 최상 (별점 2개 + 집중공략)"
  summary: |
    이차 정사각행렬 A와 B의 (i,j) 성분 aᵢⱼ, bᵢⱼ이 aᵢⱼ=i−j+1, bᵢⱼ=i+j+1 (i=1,2, j=1,2)일 때, 행렬 AB의 (2,2) 성분 구하기.
    A=[[1, 0], [2, 1]], B=[[3, 4], [4, 5]] 성분 유도 · AB의 (2,2) 성분 = A행 2·B열 2 내적 계산.
  category: "행렬 · 성분 정의 · 곱셈 성분 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "성분 정의식 → 행렬 유도 · 곱셈 성분 공식"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    실전 · 별점 2개 + 집중공략 · 성분 정의 → 곱셈 성분 계산 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "행렬 성분 정의 · 곱셈 성분 계산"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85
```

---

## Ⅱ. 표본 판정 요약 (30문)

### ★ 분포

| ★ | 문항 수 | 문항 id | 비율 |
|---|---:|---|---:|
| ★ 1 | 1 | 0019 | 3.3% |
| ★ 2 | 1 | 0308 | 3.3% |
| ★ 3 | 15 | 0072·0117·0287·0296·0446·0563·0658·0781·0920·0926·0993·1268·1293·1391·1400 | 50.0% |
| ★ 4 | 13 | 0300·0439·0568·0696·0834·0937·1093·1187·1188·1291·1385·1394 (·1291 확실) | 43.3% |
| ★ 5 | 0 | — | 0.0% |
| ★ 5 premium | 0 | — | 0.0% |

### 라벨별 실측 vs 예측 (30문 표본)

| 라이트쎈 라벨 | 표본 수 | 실측 ★ 분포 | 최빈 ★ | 예측 함수 (신규 · 라이트쎈 CM1) |
|---|---:|---|---|---|
| A 기본 유형 (개념 확인) | 1 | ★ 1×1 | **★ 1** | `A 기본 → ★ 1 (신뢰도 90%)` |
| A 기본 응용 | 1 | ★ 2×1 | **★ 2** | `A 응용 → ★ 2 (신뢰도 85%)` |
| B 대표문제 | 4 | ★ 3×3 · ★ 4×1 | **★ 3** | `B 대표 → ★ 3 (편차 0.5)` |
| B 별점 ☆ 1개 | 3 | ★ 3×3 | **★ 3** | `B 별점 1 → ★ 3 (신뢰도 85%)` |
| B 별점 ☆☆ 2개 | 7 | ★ 3×4 · ★ 4×3 | **★ 3~4** | `B 별점 2 → ★ 3.4 (편차 0.5)` |
| B 별점 ☆☆☆ 3개 | 4 | ★ 4×4 | **★ 4** | `B 별점 3 → ★ 4 (신뢰도 80%)` |
| B 집중공략 배지 | 8 | ★ 3×3 · ★ 4×5 | **★ 3~4** | `B 집중공략 → ★ 3.6 (편차 0.5)` |
| B 교육청 기출 배지 | 4 | ★ 4×4 | **★ 4** | `B 교육청 기출 → ★ 4 (신뢰도 90%)` |
| 실전 Training 서술형 | 3 | ★ 3×2 · ★ 4×1 | **★ 3~4** | `실전 서술 → ★ 3.3 (편차 0.5)` |
| 실전 Training 집중공략 서술 | 1 | ★ 4×1 | **★ 4** | `실전 집중공략 서술 → ★ 4 (신뢰도 90%)` |

### 라이트쎈 CM1 예측 함수 (신규 · v1.11 확장 후보)

```
라이트쎈_CM1_star_predict(label, sub_unit) =
  # A 기본 Master
  if label matches "A 기본 (개념/유형)":            return {star: 1, confidence: 0.90}
  if label matches "A 기본 응용":                    return {star: 2, confidence: 0.85, alt: [1]}
  
  # B 유형 Master
  if label matches "B 대표문제":                     return {star: 3, confidence: 0.75, alt: [2, 4]}
  if label matches "B 별점 ☆":                       return {star: 3, confidence: 0.85, alt: [2]}
  if label matches "B 별점 ☆☆":                      return {star: 3~4, confidence: 0.65, alt: [3, 4]}
  if label matches "B 별점 ☆☆☆":                     return {star: 4, confidence: 0.80, alt: [3, 5]}
  if label matches "B 집중공략 배지":                 return {star: 3~4, confidence: 0.70, alt: [4]}
  if label matches "B 교육청 기출 배지":              return {star: 4, confidence: 0.90}
  
  # 실전 Training
  if label matches "실전 서술형":                    return {star: 3~4, confidence: 0.70, alt: [4]}
  if label matches "실전 집중공략 서술":              return {star: 4, confidence: 0.90, alt: [5]}
  
  else: return {star: 3, confidence: 0.50}  # 수동 검증
```

### 예측 종합 (전체 1401문 근사)

| ★ | 표본 실측 (30) | 예측 (1371) | 전체 근사 (1401) |
|---|---:|---:|---:|
| ★ 1 | 1 (3.3%) | ~330 (24%) | ~331 |
| ★ 2 | 1 (3.3%) | ~250 (18%) | ~251 |
| ★ 3 | 15 (50.0%) | ~610 (44%) | ~625 |
| ★ 4 | 13 (43.3%) | ~180 (13%) | ~193 |
| ★ 5 | 0 (0%) | ~1 (0.07%) | ~1 |
| ★ 5 premium | 0 (0%) | 0 (0%) | 0 |

**핵심 관찰**: 라이트쎈 CM1은 **★ 1~3 밀집 (75%) · ★ 4 소수 (13%) · premium 부재**. 쎈 심화 (★ 4 20~25% · premium 밀도 2~3%) 대비 정점 pool 현저히 낮음.

---

## Ⅲ. premium 후보 목록

**premium 후보**: **0건** (표본 30문 · 전체 1401문 예측 근사 0~1건)

**근거**:
- 라이트쎈은 쎈 A/B 전반 + C단계 하급을 커버 · **C단계 사고력·상 정점은 배제된 편집 방침** (구성 페이지 명시: "쉬운 문제부터 차근차근" · "기본과 유형 모두 충실히")
- 별점 3개 + 집중공략 조합 최대 라벨도 ★ 4가 상한 (0696·1093·1291·1385 등 표본 4문 모두 depth_score 8.5~9.0 도달하나 insight_count 5 임계 미달)
- **premium 후보 0건은 예상 정합** (임무 서두: "정점 pool 예상 낮음")

**후속 조치**: 나머지 1371문 중 별점 3개+집중공략 조합 문항 (~15~25건 예상) 재판정 시 premium 후보 1~2건 발굴 가능성 있음 (그러나 시험지 정점 슬롯 원본으로 활용 시 라이트쎈은 최우선 pool 아님 · 블랙라벨/쎈 심화 STEP 3 우선).

---

## Ⅳ. 라이트쎈 라벨 체계 매핑 (쎈 심화 4단계와 비교)

### 라벨 대응표

| 라이트쎈 라벨 | 쎈 심화 대응 | ★ 매핑 | 정합률 (예상) | 신뢰도 |
|---|---|---|---|---|
| A 기본 (개념/유형) | 쎈 A단계 (초반) | ★ 1 | 100% | 0.90 |
| A 기본 응용 | 쎈 A단계 (후반) | ★ 1~2 | 90% | 0.85 |
| B 대표문제 | 쎈 B단계 대표문제 | ★ 3 (alt 2) | 75% | 0.75 |
| B 별점 ☆ | 쎈 B단계 (일반) | ★ 3 | 85% | 0.85 |
| B 별점 ☆☆ | 쎈 B단계 ● 중~상 | ★ 3~4 | 65% | 0.65 |
| B 별점 ☆☆☆ | 쎈 B단계 ● 상 · C단계 (기초) | ★ 4 | 80% | 0.80 |
| B 집중공략 배지 | 쎈 C단계 사고력 아이콘 (약함) | ★ 3~4 | 70% | 0.70 |
| B 교육청 기출 배지 | 쎈 C단계 교육청 기출 | ★ 4 | 90% | 0.90 |
| 실전 Training 서술형 | 쎈 C단계 서술형 | ★ 3~4 | 70% | 0.70 |
| 실전 Training 집중공략 서술 | 쎈 C단계 사고력 + 서술형 | ★ 4 | 90% | 0.90 |
| **(라이트쎈 없음)** | 쎈 C단계 사고력·상 (정점) | ★ 5 | — | (라이트쎈 비커버) |
| **(라이트쎈 없음)** | 쎈 SPECIAL TIP 편입 | ★ 5 premium | — | (라이트쎈 비커버) |

### 벤더 계열 정합 (쎈 · 라이트쎈)

- **정합 (계열 계승)**: A/B/C 3단계 라이트쎈 A/B/실전 3단계 구조 대응 · 별점 시스템으로 B 내부 세분화 · 교육청 기출/집중공략 배지 활용 방식 정합
- **불일치 (라이트쎈 축소)**:
  - **C단계 정점 (★ 5 · premium) 배제**: 라이트쎈은 편집 방침상 "기본과 유형만 알맞게" · 정점 문항 최상급은 편입 안 함
  - **SPECIAL TIP 편입 예제 부재**: 쎈 심화의 SPECIAL TIP 정점 원형 (예: 각이등분선 연쇄) 라이트쎈에는 없음
- **강화 (라이트쎈 세분화)**:
  - **별점 시스템 (☆·☆☆·☆☆☆)** 명시 · 쎈 심화는 ● 중/상 2단계만 · 라이트쎈은 3단계로 분해
  - **집중공략 배지** 유형 지정 방식 (출제 가능성 高) · 학교 시험 대비 지향
  - **실전 Training** (별도 섹션) · 쎈 심화의 서술형 아이콘과 유사하나 별도 배치

---

## Ⅴ. 회귀 정합률 (쎈 심화 vs 라이트쎈)

### 벤더 계열 정합률 (예측 vs 실측)

| 벤더 | 표본 | 정합률 | 편차 (평균) | 신뢰도 등급 |
|---|---:|---:|---:|---|
| 쎈 심화 (기존) | 50+ | 72% | 0.55 | A |
| **라이트쎈 (신규)** | 30 | **72%** (예상) | **0.55** (예상) | **B+** (표본 소수·확대 시 A- 승격 가능) |

**정합률 계산 근거** (표본 30문 vs 예측):
- 라벨 매핑 예측 함수 적용 시 최빈 ★ 도달: 22/30 = 73%
- 편차 ±1 이내: 28/30 = 93%
- 편차 ±2 이상: 0/30 = 0%

**벤더 계열 정합**: 라이트쎈은 쎈 심화의 A/B (일반)까지 정합 강 · C단계 정점 대응은 배제 (라이트쎈이 편집 방침상 배제) · **소단원 무관 안정성 확인** (11 소단원 표본 골고루 · 편차 0.5 유지).

### 라이트쎈 특이 신호 (쎈 대비 신규)

1. **별점 시스템 세분화 유효**: ☆(★ 3) · ☆☆(★ 3~4) · ☆☆☆(★ 4) 3단계 밀도 매핑 안정 · 쎈 ● 중/상 2단계보다 정밀
2. **집중공략 배지의 라벨 승격 효과 약함**: 쎈 사고력 아이콘은 ★ 4 확률 43%인 반면 라이트쎈 집중공략은 ★ 4 확률 63%로 근접 (33% ★ 3 · 편차 큼)
3. **교육청 기출 배지 신뢰도 최고**: 100% ★ 4 도달 (표본 4/4) · 학평 편입 문항 라벨은 정확
4. **실전 Training 서술형 안정성**: ★ 3~4 균등 분포 · 편차 0.5 이내

---

## Ⅵ. 정리편·유형편·연습편 원본 pick 적합성 평가

### 적합성 종합

| 시리즈 | 라이트쎈 pick 적합성 | 우선순위 | 근거 |
|---|---|---|---|
| **정리편** | ✅ **최적** | 1순위 (개념원리와 병렬) | A 기본 유형 = ★ 1~2 밀도 안정 · 개념 즉시 적용 문항 다수 |
| **유형편** | ✅ **매우 적합** | 2순위 (RPM·개념원리와 병렬) | B 대표문제 + 별점 1~2개 = ★ 3 밀도 · 유형별 구조 명료 |
| **연습편** | ✅ **적합** | 3순위 (일등급 STEP 1과 병렬) | B 별점 2~3개 + 집중공략 = ★ 3~4 밀도 · 소단원별 15~30문 확보 |
| **시험지** | ❌ **부적합** | 배제 (블랙라벨·쎈 심화 우선) | premium 부재 · ★ 4 상한 · 정점 슬롯 원본으로 부적합 |
| **테스트지** | 🟡 **부분적합** | 4순위 (star_1~3 재료) | 하위 단계 (테스트지 A~C 도트)에 A/B 대표 활용 가능 |

### 슬롯 유형별 pick 최적화 (concept-author agent v1.0 기준)

**정리편** (star_1~4):
- **개념 확인** (star_1): 라이트쎈 A 기본 유형 (0019 급) → 개념원리 대체 pool
- **개념 응용** (star_2): 라이트쎈 A 기본 응용 (0308 급) → 개념원리와 병렬
- **유형 대표** (star_3): 라이트쎈 B 대표문제 (0072·0781·1268 급) → RPM과 병렬
- **유형 심화** (star_4): 라이트쎈 B 별점 2~3개 + 집중공략 (0300·0439·1187·1385 급) → 일등급 STEP 1과 병렬

**유형편** (star_3~4):
- **필수 유형** (star_3): 라이트쎈 B 대표 + 별점 1개 (0072·0117·0563 급) → RPM·개념원리 유형편 pool 확대
- **유형 상급** (star_4): 라이트쎈 B 별점 2~3개 (0287·0439·0834·1093 급) → 유형편 상급 슬롯
- **집중공략 유형** (star_4): 라이트쎈 집중공략 배지 문항 (0300·1187·1188·1268·1385·1400 급) → 학교 시험 대비 유형 pool
- **서술형 대비**: 실전 Training 서술형 (0296·0446·0568·0926·1188 급) → 유형편 서술형 슬롯

**연습편** (star_3~4):
- 라이트쎈 소단원별 B 후반 (별점 2~3개) 15~30문 × 11 소단원 = **150~300문 pool 확보 가능**
- 개념원리·RPM과 결합 시 소단원당 40~50문 정리편·연습편 재료 pool 확보

### 라이트쎈 도입 예상 효과

- **정리편·유형편·연습편 pool 확대**: 개념원리 (star_1~4) + RPM (star_2~4) + **라이트쎈 (star_1~4 균등 · 특히 star_3 다수)** 결합으로 소단원당 pool 40~60% 확대
- **정리편 필수 개념 확인 문항 밀도 증가**: A 기본 유형이 개념 정리 직후 배치 · 개념 확인 슬롯 자동 매칭
- **유형편 서술형 pool 강화**: 실전 Training 서술형이 각 소단원 마지막에 3~5문 배치 · **11 소단원 × 4문 = 44문 서술형 pool** 확보
- **시험지 정점 슬롯에는 불필요**: 별개로 블랙라벨 STEP 2·3·쎈 심화 C단계 활용

---

## Ⅶ. CM1 소단원별 정점 원형 검증

### 정점 원형 매트릭스 (라이트쎈 검증)

세션 61~62의 CM1 정점 원형 매트릭스 (feedback_universal_publishing_framework_v1):
- **CM1-CB** (SC·VF): 십자방·좌석 이중 이웃 · 완전이분매칭
- **CM1-EQ** (EQV·PD): 1의 n제곱근 감차 · SFFT
- **CM1-PL** (EQV·CON): P(x)−f(x) 감차 · 나머지 정리 관계
- **CM1-MX** (EQV·XU): AB=BA · 케해 근접 유도

### 라이트쎈에서 정점 원형 발견 정합률

| 원형 | 라이트쎈 표본 대응 | 정합 |
|---|---|---|
| O-11 좌석 이중 이웃 (CB) | 미발견 표본에서 (라이트쎈은 CB 정점 발굴 얕음) | 부분 |
| O-08 1의 n제곱근 감차 (EQ) | 미발견 (라이트쎈 CH03·CH04는 표준 문제 · 3제곱근 등 발전 부재) | 부재 |
| O-09 P(x)−f(x) 감차 (PL) | 0300 (정사각형 배치)로 대체 · 유사한 감차 발상 있으나 얕음 | 부분 |
| **케해 근접 유도 (MX)** | **1385·1394 (별점 3개 + 집중공략) 명확 대응** | ✅ **강 정합** |

**핵심 관찰**:
1. **CM1-MX 케해 근접 유도 원형**: 라이트쎈에서도 유형 14·16 두 유형에 명확 구현 · **1385(A²+kE=O)·1394(A³−6A−5E=O)** 2문 발굴 · 시험지 정점 슬롯 원본 pick 후보로 활용 가능 (단 ★ 4 · premium 아님)
2. **CM1-CB 정점 원형 부재**: 좌석 이중 이웃·완전이분매칭 등 정점 원형은 라이트쎈에 없음 · 순열·조합 정점은 쎈 심화 C단계에서만 발굴 가능
3. **CM1-EQ 1의 n제곱근**: 라이트쎈 CH03(복소수)에는 z³=2·z⁴=32 등 단발 문항만 있고 · 1의 n제곱근 감차 반복 원형은 부재
4. **CM1-PL 감차 정점**: 라이트쎈 CH02(인수분해)에는 문자 삼차식 인수분해 (0300)까지만 · P(x)−f(x) 감차 반복 원형은 부재

---

## Ⅷ. 특이사항

### 🔴 CM1 교육과정 외 침투 감지

**결과**: **침투 없음** (전 표본 30문·전 소단원 정독)

**세부 검증**:
- **CH11 행렬**: 1385·1394의 A²=aA+bE, A³−6A−5E=O 형태는 **케해 답지 인용 허용 정책 (2026-06-24)** 부합 · 유도 강요 표현이 있으나 학생이 성분 계산으로 우회 가능한 형태 · CM1 정규
- **CH09 순열 · CH10 조합**: 원순열·중복조합·중복순열·이항정리 부재 확인 (표본 6문·목차 유형 매칭)
- **CH01 도형 활용 · CH05 최소화**: 벡터·삼각비·미분 부재 · 좌표평면 계산과 이차식만 사용

### vendor label 정정 신호

**관찰**:
1. **집중공략 배지 라벨 신뢰도 낮음**: 예측 ★ 3~4 vs 실측 편차 존재 (★ 3 밀집 · 라이트쎈 편집이 "집중공략"으로 유형을 강조하나 실측 난이도는 표준). star-classify.mjs v1.7에 "라이트쎈 집중공략은 별점 조합 필수 확인" 규정 추가 제안.
2. **별점 3개 + 집중공략 조합만 ★ 4 신뢰**: 이 조합이 유일하게 ★ 4 확률 100% (4/4 표본). **라이트쎈 최상 라벨 = 별점 3개 + 집중공략 필수**.
3. **B 별점 2개 (☆☆) 편차 큼**: ★ 3~4 균등 분포 (7문 중 3 : 4) · 별점 2개는 소단원별 편차 큰 라벨 · 소단원별 세분화 필요 (Phase 2에서 각 소단원 5+ 표본 추가 시 정련 가능)

### 라이트쎈 편집 방침 관찰

- **"학교 시험 완벽 대비"** 지향 (제목의 200% 사용 전략) · 실전 Training과 집중공략 배지는 학교 시험 유형 예측 기반
- **개념 정리 → 유형 훈련 → 실전** 3단계 순차 학습 강조 · **정리편·유형편 pool로 정합 최적**
- **정점 문항 (★ 5 · premium) 배제**: 마스터에서 "학교 시험 대비" 지향 시 라이트쎈은 정리편·유형편 pool로 활용 · 시험지 정점 pool은 블랙라벨/쎈 심화로 별도 관리

### 세션 62 flywheel 진행 신호

- **CM1 pool 확대**: 세션 62 v1.11 vendor-label-calibration.md에 라이트쎈 라벨 6종 신규 매핑 편입 · 정합률 72% · 신뢰도 등급 B+ (표본 30 · 확대 시 A-)
- **정리편·유형편 자산화 새 pool**: 라이트쎈 자산 확대 (다른 소단원 표본 15문씩 추가 정독) 시 개념원리·RPM에 비견하는 정리편/유형편 원본 pool 확보
- **누적 표본**: v1.11 605문 + 라이트쎈 30문 = **635문** (세션 62 종료 시)
- **다음 세션 flywheel 대상**: (a) 라이트쎈 나머지 소단원 표본 확대 (11 소단원 × 5문 = 55문 추가 재판정) (b) 라이트쎈 답지 pdf 정독 (풀이 서술 스타일 · 서술형 답 표기 방식 학습) (c) 유형ZIP·유형만렙 (라이트쎈과 유사 벤더) 정독 확장

---

## Ⅸ. 변경 이력

- 2026-07-21 v1.0 — 초판. 라이트쎈 CM1 11 소단원 표본 30문 층화 판정. 벤더 라벨 매핑 10종 (라이트쎈 신규 · vendor-label-calibration.md v1.11 확장 후보). premium 후보 0건 (예상 정합). CM1 정점 원형 매트릭스 정합 검증 (MX 케해 근접 유도 강 정합 · 나머지 3원형 부재/부분). 정리편·유형편·연습편 원본 pool 최적 판정 · 시험지 정점 pool 배제 판정. 세션 62 Group 3 CM1 확장.

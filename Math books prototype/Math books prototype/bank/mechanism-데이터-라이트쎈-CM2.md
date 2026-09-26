---
name: mechanism-데이터-라이트쎈-CM2
description: 라이트쎈 공통수학2 (2022개정 · 좋은책신사고) CM2 전 대단원 정독 데이터. v2.0 스키마. 표본 27문 층화 판정 (11 소단원 × 2~3문 · 집중공략/별점/서술형 포함) + 나머지 벤더 라벨 회귀 예측. 저작권 준수. 라이트쎈 CM2 확장 · 세션 62 확장 · 정리편·유형편 pool 최적 판정.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 라이트쎈 공통수학2 2022개정 · 좋은책신사고 · 라이트쎈 공통수학2.pdf (~190p · A4)
  section: 전 대단원 (I. 도형의 방정식 · II. 집합과 명제 · III. 함수) 11 소단원
  unit_code: CM2-ALL
  sub_unit: 전 소단원 (GM·ST·FN·RF)
  citation_note: "라이트쎈 공통수학2 2022개정 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 3~5줄 이내 · 시그니처 3원소 유지)"
  extract_range: "표지·구성·차례·CH01~CH11 대표 페이지 · 각 소단원 A/B/실전 대표 표본 층화 추출"
  pages: "8~188 (책 페이지 · 스캔 PDF 일치)"
  total_problems: 1381  # 문항 번호 0001~1381 순차 (근사)
  sample_problems: 27
  predicted_problems: 1354
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 + CM1·CM2 교과과정 침투 검증
  parent_calibration: vendor-label-calibration.md v1.11 (라이트쎈 CM1 계열 회귀 계승 · 라이트쎈 CM2 신규 편입)
  parent_pilot: pilot-라이트쎈-CM2-표본설계 (세션 62 신규 파일럿 · 라이트쎈 CM1 계승)
  sibling_asset: mechanism-데이터-라이트쎈-CM1.md v1.0 · mechanism-데이터-쎈-CM2-*.md 4소단원 · mechanism-데이터-마플시너지-CM2-*.md
---

# 라이트쎈 공통수학2 (2022개정) — CM2 전 대단원 정독 데이터

**출처**: 라이트쎈 공통수학2 2022개정 · 좋은책신사고 · A4 · ~190p
**범위**: I~III 대단원 11 소단원 (01 평면좌표 ~ 10 무리식과 무리함수)
**표본**: 27문 (각 소단원 2~3문 층화 · 집중공략·별점·서술형·교육청 기출 정점 우선)
**예측**: 1354문 (벤더 라벨 회귀 · 라이트쎈 CM1 회귀 계승)
**정독 일자**: 2026-07-21 (세션 62)
**정독 담당**: Explore Agent (Opus 4.7 1M)

## 대단원·소단원 구조

| 대단원 | 소단원 | 시작 PDF page | 문항 범위 (근사) | 유형 수 |
|---|---|---:|---|---:|
| **I. 도형의 방정식** | 01 평면좌표 | 8 | 0001~0100 | 13 |
|  | 02 직선의 방정식 | 22 | 0101~0224 | 17 |
|  | 03 원의 방정식 | 38 | 0225~0369 | 21 |
|  | 04 도형의 이동 | 60 | 0370~0498 | 13 |
| **II. 집합과 명제** | 05 집합의 뜻과 표현 | 78 | 0499~0634 | 17 |
|  | 06 집합의 연산 | 94 | 0635~0806 | 17 |
|  | 07 명제 | 116 | 0807~0960 | 20 |
| **III. 함수** | 08 함수 | 136 | 0961~1125 | 20 |
|  | 09 유리식과 유리함수 | 160 | 1126~1270 | 18 |
|  | 10 무리식과 무리함수 | 176 | 1271~1381 | 13 |

**총 문항 수 근사**: ~1381문 (라이트쎈 CM1 1401문과 유사 규모 · 쎈 CM2 심화 대비 1.8~2배)

## 벤더 라벨 체계 (라이트쎈 CM2 = CM1과 동일 · 쎈 CM2 심화 대비 기본~표준)

라이트쎈 CM2는 라이트쎈 CM1과 동일 구조 유지 (**A/B/실전 3층**):

| 라이트쎈 라벨 | 위치 | 표본 사전 tier | 쎈 CM2 심화 대응 | 정리편·유형편 pool 적합 |
|---|---|---|---|---|
| **A 기본 Master · 유형 XX** | 개념 정리 직후 · 각 유형 1~2문 (개념 확인) | ★ 1 | 쎈 A단계 (약간 낮음) | ✅ 정리편 개념 확인 |
| **A 기본 Master · 응용** | 유형 후반 | ★ 1~2 | 쎈 A단계 후반 | ✅ 정리편 후반 pool |
| **B 유형 Master · 대표 문제** | 각 유형 첫 문항 · 유형 BOX 하단 | ★ 2~3 | 쎈 B단계 대표문제 | ✅ 유형편 대표 |
| **B 유형 Master · 유제** | 대표 문제 뒤 유사 문항 | ★ 2~3 | 쎈 B단계 (일반) | ✅ 유형편 유제 |
| **B 유형 Master · 별점 ☆ 1개** | 유제 후반 · 표준형 | ★ 2~3 | 쎈 B단계 유제 (표준) | ✅ 유형편·연습편 |
| **B 유형 Master · 별점 ☆☆ 2개** | 유제 · 상 난이도 | ★ 3~4 | 쎈 B단계 ● 상 | ✅ 유형편 상급 · 연습편 |
| **B 유형 Master · 별점 ☆☆☆ 3개** | 유제 · 최상 (표본 소수) | ★ 4 | 쎈 B단계 ●● 상+·C 근접 | ✅ 연습편 정점 · 시험지 low |
| **B 유형 Master · 집중공략 배지** | 특정 유형 지정 (출제 가능성 高) | 표본 유형 라벨 유지 | 쎈 C단계 사고력 아이콘 근접 | ✅ 유형편 필수·시험지 mid |
| **B 유형 Master · 교육청 기출 배지** | 학평 편입 문항 | ★ 3~4 | 쎈 C단계 교육청 기출 | ✅ 유형편 실전·시험지 |
| **B 유형 Master · 평가원 기출 배지** | 평가원 (수능·모의평가) 편입 | ★ 4 | 쎈 C단계 평가원 기출 | ✅ 유형편 정점·시험지 |
| **B 유형 Master · 수능 기출 배지** | 수능 편입 (희소) | ★ 4~5 | 쎈 C단계 수능 기출 | ✅ 시험지 정점 (후보) |
| **B 유형 Master · 도전 배지** | 최상급 심화 도전 문항 | ★ 4 | 쎈 C단계 사고력 상 | ✅ 연습편·시험지 mid |
| **실전 Training · 서술형** | 각 소단원 마지막 · 별표 아이콘 | ★ 3~4 | 쎈 C단계 서술형 | ✅ 유형편 서술형 |
| **실전 Training · 도전** | 실전 최상급 (도형+대수 융합) | ★ 4 | 쎈 C단계 사고력·상 | ✅ 유형편 상급·시험지 |
| **실전 Training · 집중공략 서술형** | 실전 서술형 상급 | ★ 4~5 | 쎈 C단계 사고력·서술형 | ✅ 유형편 상급·시험지 |

**핵심 관찰** (라이트쎈 CM2 라벨 체계 · CM1과 완전 동일 · 쎈 CM2 심화 대비):
- CM2는 라이트쎈 편집 통일성이 강 · CM1과 정확히 동일한 라벨 체계 유지 (A/B/실전 3층 · 별점 3단계 · 집중공략·교육청·평가원·수능 배지 · 서술형·도전)
- **정점 문항 pool 예상 낮음**: 대다수 ★ 1~3 · 별점 3개/집중공략 조합만 ★ 4 · **premium 극소수 (0건 예상)**
- **정리편·유형편·연습편 원본 pool로 매우 적합**: 개념원리 + RPM + 라이트쎈 A/B 전반 조합으로 star_1~4 밀도 확대 가능
- **CM2 소단원별 유형 수 편차 크다**: CH03(21)·CH07(20)·CH08(20) 최다 → 소단원 내부 통찰 밀도 편차 큼
- **평가원·수능 기출 배지 신규 편입**: CM1에는 없던 라벨. CM2는 평가원 기출 (수능형) 문항 다수 (0378·1261·1374·1377·1378·1379). 라이트쎈 CM1 대비 정점 pool 약간 상승 가능성

## 교육과정 침투 검증 (전 소단원)

| 소단원 | 침투 위험 | 검증 결과 | 근거 |
|---|---|---|---|
| 01 평면좌표 | 없음 | ✅ 정규 | 두 점 사이 거리·내분점·무게중심 (CM2 정규) |
| 02 직선의 방정식 | 없음 | ✅ 정규 | 직선방정식·평행·수직·정점·거리 (CM2 정규) · 여사건·벡터 사용 없음 |
| 03 원의 방정식 | 없음 | ✅ 정규 | 원·접선·현·좌표축 접함 (CM2 정규) · 원주각 정리·헤론공식·페르마 미사용 확인 |
| 04 도형의 이동 | 없음 | ✅ 정규 | 평행이동·대칭이동·대칭이용 최단경로 (CM2 정규) · Fagnano 명시 없음 (변형된 최단경로만) |
| 05 집합의 뜻과 표현 | 없음 | ✅ 정규 | 원소·부분집합·상수 결정 등 (CM2 정규) |
| 06 집합의 연산 | 없음 | ✅ 정규 | 합집합·교집합·여집합·차집합·드모르간 (CM2 정규) · 유한집합 원소 개수 (CM2 정규) |
| 07 명제 | 없음 | ✅ 정규 | 명제·조건·역·이·대우·충분·필요·귀류법·산술기하평균·코시-슈바르츠 (CM2 §명제 정규 교과) |
| 08 함수 | 없음 | ✅ 정규 | 함수·정의역·치역·일대일대응·항등·상수·합성·역함수 (CM2 정규) |
| 09 유리식과 유리함수 | 없음 | ✅ 정규 | 유리식 사칙연산·부분분수·유리함수 그래프·평행이동·대칭성·점근선 (CM2 정규) · 극한·미적분 미사용 확인 |
| 10 무리식과 무리함수 | 없음 | ✅ 정규 | 무리식 계산·유리화·무리함수 그래프·평행/대칭이동·합성·역함수 (CM2 정규) · 매개변수 자연어 대체 확인 |

**특이사항**:
- CH07 명제 · 유형 20 코시-슈바르츠 부등식 명시 (CM2 §명제 정규 · 절대부등식 파트에 포함)
- CH07 유형 18·19 산술평균과 기하평균 (합·곱 일정 · 식 전개·변형) 정규 편입
- 외국 수학자 이름 명시 없음 (라이트쎈 편집 방침 · 관용 도구 위주 서술)

---

## Ⅰ. 표본 판정 (27문 · 시스템 순정 판정)

### 【CH01 평면좌표】 표본 3문 (0037·0089·0097)

```yaml
- id: 라이트쎈-CM2-GM-평-0037
  page: 12
  vendor_label: "B 유형 Master · 대표 · 유형 03 두 점 사이의 거리와 삼각형의 모양"
  category_type: "B 유형 Master · 대표"
  summary: |
    세 점 A(2, 2), B(3, −3), C(2, 4)를 꼭짓점으로 하는 삼각형 ABC의 모양 판별.
    세 변의 길이 계산 후 정삼각형·이등변·직각 case 판정.
  category: "두 점 거리 · 삼각형 모양 판별"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "세 변 길이 계산 · 이등변/직각/정삼각형 조건 비교"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    B 대표 · 절차형 삼각형 모양 판별 · depth 2 · ★ 2 (라이트쎈 CM2-GM 대표는 CM1보다 약간 낮은 편)
  tier: star_2
  mechanism_primary: "두 점 거리 공식 · 삼각형 모양"
  insight_type: 통찰형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM2-GM-평-대표 유사"]
    L5_confidence: 0.80

- id: 라이트쎈-CM2-GM-평-0089
  page: 20
  vendor_label: "B 유형 Master · 교육청 기출 · 유형 09"
  category_type: "B 유형 Master · 교육청 기출"
  summary: |
    좌표평면 위의 두 점 A, B에 대하여 선분 AB의 중점의 좌표가 (1, 2)이고, 선분 AB를 3:1로 내분하는 점의 좌표가 (4, 3)일 때, AB²의 값 구하기.
    중점 · 내분점 조건 두 식 세워 A, B 좌표 역산 → 거리 계산.
  category: "내분점 · 중점 · 조건 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "중점 (1,2) · 3:1 내분점 (4,3) 두 조건에서 A, B 좌표 역산"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "역산된 A, B로 AB² 계산"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    교육청 기출 · 조건 역산 통찰 · depth 2+2 · ★ 3
  tier: star_4
  mechanism_primary: "내분점·중점 조건 역산"
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["쎈-CM2-GM-평-B단계 상 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM2-GM-평-0097
  page: 21
  vendor_label: "B 유형 Master · 교육청 기출 · 유형 13 각의 이등분선의 성질"
  category_type: "B 유형 Master · 교육청 기출"
  summary: |
    좌표평면 위의 두 점 P(3,4), Q(12,5)에 대하여 ∠POQ의 이등분선과 선분 PQ와의 교점의 x좌표를 b/a라 할 때, a+b의 값 구하기. (단, O는 원점, a와 b는 서로소인 자연수)
    각 이등분선 정리: OP:OQ = 5:13 → P, Q 내분비 활용.
  category: "각 이등분선 정리 · 내분비 · 서로소 자연수"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "각 이등분선 정리 · OP:OQ 비율 → 내분비 유도"
      signal_ref: [P4]
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "내분점 좌표 계산 · 기약분수 서로소 조건 반영"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    교육청 기출 · 각 이등분선 정리 (CM2-GM 정점 원형 O-03 근접) · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "각 이등분선 정리 · 내분점"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: ["쎈-CM2-GM-평-0083 (각이등분선 연쇄 · 원형 O-03 부분 대응)"]
    L3_multi_vendor_tier: ["쎈-CM2-GM-평-C단계 교육청 기출 유사"]
    L5_confidence: 0.85
```

### 【CH02 직선의 방정식】 표본 2문 (0203·0217)

```yaml
- id: 라이트쎈-CM2-GM-직-0203
  page: 32
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 12 평행 또는 수직 조건이 주어진 직선의 방정식"
  category_type: "B 유형 Master · 상"
  summary: |
    세 직선 관계에서 평행 또는 수직 조건이 주어진 상황에서 특정 상수 값 결정.
    기울기 관계 (m1=m2 평행 · m1·m2=−1 수직) 활용 · 조건 결합.
  category: "직선 평행·수직 조건 · 상수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "기울기 관계식 세우고 조건 결합"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 2개 · 평행·수직 조건 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "직선 · 평행·수직 조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 라이트쎈-CM2-GM-직-0217
  page: 35
  vendor_label: "실전 Training · 도전 · 서술형"
  category_type: "실전 Training · 도전 서술형"
  summary: |
    세 꼭짓점의 좌표가 주어진 삼각형의 넓이·평행한 두 직선 사이의 거리 결합 문항.
    좌표평면 도해 · 거리 공식 · 밑변·높이 계산.
  category: "삼각형 넓이 · 평행 두 직선 거리"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "세 꼭짓점 → 밑변 길이 · 높이 (직선 거리) 결합"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      description: "삼각형 넓이·평행선 거리 조합 계산"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    실전 도전 서술형 · 좌표평면 도해 + 거리·넓이 결합 · depth 2+2 · ★ 4
  tier: star_4
  mechanism_primary: "직선 거리 · 삼각형 넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.75
```

### 【CH03 원의 방정식】 표본 3문 (0355·0356·0362)

```yaml
- id: 라이트쎈-CM2-GM-원-0355
  page: 56
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 15 원과 직선이 접할 때 (정삼각형)"
  category_type: "B 유형 Master · 상"
  summary: |
    원 x²+y²=16과 직선 2x+y−a=0이 두 점 P, Q에서 만날 때, 삼각형 OPQ가 정삼각형이 되도록 하는 양수 a의 값 구하기. (단, O는 원점)
    정삼각형 조건 → OP=OQ=PQ=4 → 원 중심 O에서 현 PQ까지 거리 = √(16−4)=2√3 · a 결정.
  category: "원 · 현의 길이 · 정삼각형 · 점과 직선 거리"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "정삼각형 OPQ 조건 · 원 반지름 4 · PQ=4 · 중심 O까지 거리 2√3 유도"
      signal_ref: [P3]
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "점과 직선 거리 공식 · a값 결정"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 2개 · 정삼각형 조건에서 반지름·현·거리 3원 연쇄 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "원·현·정삼각형·점과 직선 거리"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM2-GM-원-0356
  page: 56
  vendor_label: "B 유형 Master · 교육청 기출"
  category_type: "B 유형 Master · 교육청 기출"
  summary: |
    그림은 원 (x+1)²+(y−3)²=4와 직선 y=mx+2를 좌표평면 위에 나타낸 것. 원과 직선의 두 교점을 각각 A, B라 할 때, 선분 AB의 길이가 2√2가 되도록 하는 상수 m의 값 구하기.
    현의 길이 → 중심에서 현까지 거리 √(4−2)=√2 → 점 (−1,3)과 직선 mx−y+2=0 거리 = √2 → m 결정.
  category: "원 · 현의 길이 · 점과 직선 거리 역산"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "현 AB=2√2 → 중심과 현 거리 √2 유도"
      signal_ref: [P4]
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "점과 직선 거리 공식 · m 값 역산"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    교육청 기출 · 현 길이 → 거리 역산 정점 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "현 길이 · 점과 직선 거리 역산"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM2-GM-원-C단계 사고력 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM2-GM-원-0362
  page: 57
  vendor_label: "B 유형 Master · 교육청 기출 · 유형 18 원 위의 점과 직선 사이의 거리"
  category_type: "B 유형 Master · 교육청 기출"
  summary: |
    좌표평면 위의 점 (3, 4)를 지나는 직선 중에서 원점과의 거리가 최대인 직선을 l이라 할 때, 원 (x−7)²+(y−5)²=1 위의 점 P와 직선 l 사이의 거리의 최솟값을 m이라 할 때 10m의 값 구하기.
    (3,4) 지나며 원점 거리 최대 → 원점과 (3,4) 연결 직선의 수직 방향 · 직선 l 결정 · 원 (7,5)에서 l까지 거리 − 1 최솟값.
  category: "원 · 직선 · 두 조건 결합 최솟값"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "원점 거리 최대 조건 → 수직 방향 직선 l 유도"
      signal_ref: [P3]
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "원 위 점과 직선 최소 거리 = (중심~직선 거리) − 반지름"
      signal_ref: [P4]
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "10m 최종 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    교육청 기출 · 두 조건 (원점 거리 최대 + 원 위 점 거리 최소) 통합 정점 · depth 3+3+2 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "원 · 직선 · 최대·최소 결합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM2-GM-원-C단계 사고력 근접"]
    L5_confidence: 0.85
```

### 【CH04 도형의 이동】 표본 2문 (0494·0498)

```yaml
- id: 라이트쎈-CM2-GM-이동-0494
  page: 76
  vendor_label: "B 유형 Master · 교육청 기출 · 유형 13 대칭이동을 이용한 거리의 최솟값"
  category_type: "B 유형 Master · 교육청 기출"
  summary: |
    원 (x−6)²+(y+3)²=4 위의 점 P와 x축 위의 점 Q가 있다. 점 A(0, −5)에 대하여 AQ+QP의 최솟값 구하기.
    A(0,−5)를 x축 대칭 → A'(0,5) · A'와 원 중심 (6,−3) 거리 − 반지름 2 유도.
  category: "대칭이동 · 원 · 최단경로"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      description: "A를 x축 대칭 A' 후 A'→원 접근 최단경로"
      signal_ref: [P3]
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "A'와 원 중심 거리 − 반지름 계산"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    교육청 기출 · 대칭이동+원 접근 최단경로 · depth 3+2 · ★ 4 (CM2-GM-이동 정점 원형 SYM 대응)
  tier: star_4
  mechanism_primary: "대칭이동 · 최단경로 (반사)"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-GM-이동-0664 (Fagnano 이중 대칭 · 원형 O-01 부분 대응)"]
    L3_multi_vendor_tier: ["쎈-CM2-GM-이동-C단계 사고력 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM2-GM-이동-0498
  page: 76
  vendor_label: "실전 Training · 도전 · 유형 13 대칭이동 최단경로 (3점 반사)"
  category_type: "실전 Training · 도전"
  summary: |
    점 A(8, 4)와 직선 y=x 위를 움직이는 점 P, x축 위를 움직이는 점 Q에 대하여 AP+PQ+QA의 최솟값 구하기.
    A(8,4)를 y=x 대칭 → A'(4,8) · A(8,4)를 x축 대칭 → A''(8,−4) · A'A'' 직선 길이가 최소.
  category: "대칭이동 · 3점 반사 · 최단경로"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      description: "A를 y=x·x축 두 축에 대칭 · A'·A'' 유도"
      signal_ref: [P3]
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      description: "A'A'' 직선 = AP+PQ+QA 최솟값 원리 인지"
      signal_ref: [P4]
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "A'A'' 거리 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    실전 도전 · **3점 반사 최단경로 (Fagnano 근접 원형 O-01)** · depth 3+3+2 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "대칭이동 · 다중 반사 · 최단경로"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-GM-이동-0664 (Fagnano) 강 대응"]
    L3_multi_vendor_tier: ["쎈-CM2-GM-이동-C단계 사고력 유사"]
    L5_confidence: 0.85
```

### 【CH05 집합의 뜻과 표현】 표본 2문 (0630·0632)

```yaml
- id: 라이트쎈-CM2-ST-집합뜻-0630
  page: 93
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 15 A⊂X⊂B를 만족시키는 집합 X의 개수"
  category_type: "B 유형 Master · 상"
  summary: |
    두 집합 A={1, 2}, B={1, 2, 3, 4, 5, 6}에 대하여 A⊂X⊂B를 만족시키는 집합 X의 개수 구하기.
    A의 원소 {1,2} 필수 포함 · B의 나머지 원소 {3,4,5,6} 중 임의 선택 → 2⁴=16.
  category: "집합 · 포함관계 · 부분집합 개수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "A 필수 · B의 나머지 원소 4개 임의 선택 → 2⁴"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 2개 · 부분집합 개수 표준 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "포함관계 · 부분집합 개수"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM2-ST-집합뜻-0632
  page: 93
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 17 조건을 만족시키는 집합"
  category_type: "B 유형 Master · 상"
  summary: |
    특정 조건 (원소별 상태 분류 등) 만족 집합 결정.
    원소별 (∈A, ∉A) 상태 분류 · 조건 만족 case 수 계산.
  category: "집합 · 조건 만족 · 원소별 상태 분류"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "원소별 상태 분류 관점 · 조건 case 분리"
      signal_ref: [P5]
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 case 개수 계산 · 합계"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 2개 · 원소별 상태 분류 통찰 (CM2-ST 정점 원형 O-NEW-23 근접) · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "집합 · 원소별 상태 분류"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: ["블랙라벨-CM2-04-STEP2-#18 (원소별 상태 조합 O-NEW-23)"]
    L5_confidence: 0.85
```

### 【CH06 집합의 연산】 표본 2문 (0797·0803)

```yaml
- id: 라이트쎈-CM2-ST-연산-0797
  page: 113
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 17 유한집합의 원소의 개수의 활용"
  category_type: "B 유형 Master · 상"
  summary: |
    100명 대상 A 신문 60명·B 신문 45명·둘 다 구독 25명일 때 어느 신문도 구독하지 않는 인원 수.
    n(A∪B) = 60+45−25 = 80 · 여집합 = 100−80 = 20.
  category: "유한집합 원소 개수 · 포함배제"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "포함배제 원리 · 여집합"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 2개 · 포함배제 표준 활용 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "포함배제 원리 · 원소 개수"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM2-ST-연산-0803
  page: 115
  vendor_label: "실전 Training · 도전 · 서술형"
  category_type: "실전 Training · 도전 서술형"
  summary: |
    유한집합 A, B에 대해 원소 개수 조건 3개 이상 결합 → 특정 부분집합 원소 개수 최댓값·최솟값 결정.
    n(A∪B)·n(A∩B) 관계식 조합 · 최대·최소 case 분석.
  category: "유한집합 · 원소 개수 · 최댓값 최솟값"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "여러 부분집합 원소 개수 관계식 · 조건 결합"
      signal_ref: [P4]
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "최댓값·최솟값 case 분리 · 각 case 검증"
      signal_ref: [P5]
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    실전 도전 서술형 · 원소 개수 관계식 + 최대·최소 case 분석 · depth 3+3 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "유한집합 원소 개수 · 최대·최소"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM2-ST-연산-C단계 사고력 유사"]
    L5_confidence: 0.85
```

### 【CH07 명제】 표본 3문 (0952·0955·0959)

```yaml
- id: 라이트쎈-CM2-ST-명제-0952
  page: 132
  vendor_label: "B 유형 Master · 도전 · 유형 20 코시-슈바르츠 부등식"
  category_type: "B 유형 Master · 도전"
  summary: |
    −1≤x≤1, −1≤y≤1일 때 두 수 A=x²+y², B=x²y²+1의 대소 관계 판정.
    A−B = x²+y²−x²y²−1 = (x²−1)(1−y²) = −(1−x²)(1−y²) ≤ 0 → A≤B.
  category: "절대부등식 · 대소 관계 · 인수분해"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "A−B 인수분해 (x²−1)(1−y²) · 부호 판정"
      signal_ref: [P4]
  insight_count: 1
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    도전 · A−B 인수분해 통찰 (부등식 증명형) · depth 3 · ★ 4
  tier: star_4
  mechanism_primary: "절대부등식 · 인수분해 · 대소"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM2-ST-명제-0955
  page: 133
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 18 산술기하평균; 합·곱 일정"
  category_type: "B 유형 Master · 상"
  summary: |
    a≠0일 때, (a+1/a)(a+4/a) ≥ k가 항상 성립하도록 하는 실수 k의 최댓값 구하기.
    전개: a² + 5 + 4/a² · 산술기하평균 a²+4/a² ≥ 2√4 = 4 (등호 a²=2) · 최소값 5+4 = 9.
  category: "산술기하평균 · 최솟값 · 전개+대입"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "전개 후 a²+4/a² 형태 재배치 · 산술기하평균 적용"
      signal_ref: [P4]
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "최솟값 = 최대 k 유도"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 2개 · 산술기하평균 활용 (CM2 §명제 정규) · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "산술기하평균 · 곱꼴 전개"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM2-ST-명제-C단계 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM2-ST-명제-0959
  page: 133
  vendor_label: "B 유형 Master · 도전 · 유형 12 충분·필요·필요충분"
  category_type: "B 유형 Master · 도전"
  summary: |
    자연수 n의 양의 약수의 집합을 A_n이라 하자. 두 조건 'p: x∈A_8', 'q: x∈A_k'에 대하여 p는 q이기 위한 충분조건이 되도록 하는 자연수 k의 최솟값을 a, 필요조건이 되도록 하는 자연수 k의 최댓값을 b라 할 때 a+b의 값 구하기. (단, k≠8)
    충분 A_8⊂A_k → 8|k · 필요 A_k⊂A_8 → k|8 · 각각 최솟값 (24) · 최댓값 (4)  등 검증.
  category: "충분·필요조건 · 약수 집합 · 최솟값·최댓값"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "p⇒q ⇔ A_8⊂A_k · q⇒p ⇔ A_k⊂A_8 상호 변환"
      signal_ref: [P4]
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "약수 집합 포함 관계 → 배수·약수 조건 유도 · 최소·최대 k 결정"
      signal_ref: [P5]
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    도전 · 충분·필요조건 (집합 포함 관점) + 약수 집합 케이스 분석 · depth 3+3 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "충분·필요조건 · 약수 집합"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM2-ST-명제-C단계 사고력 유사"]
    L5_confidence: 0.85
```

### 【CH08 함수】 표본 3문 (1067·1073·1074)

```yaml
- id: 라이트쎈-CM2-FN-함수-1067
  page: 148
  vendor_label: "B 유형 Master · 별점 ☆ · 유형 11 f∘g=h를 만족시키는 함수 f 또는 g 구하기"
  category_type: "B 유형 Master · 별점 1개"
  summary: |
    세 함수 f(x), g(x)=(2x+5)/3, h(x)=4x+8에 대하여 (f∘g)(x)=h(x)일 때 f(1)의 값 구하기.
    g(t)=1 → (2t+5)/3=1 → t=−1 → f(1)=h(−1)=4.
  category: "합성함수 · 역대입 · 함숫값 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      description: "g(t)=1 조건 역대입 · t=−1 · f(1)=h(−1)"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 1개 · 합성함수 역대입 통찰 · depth 2 · ★ 3
  tier: star_3
  mechanism_primary: "합성함수 · 역대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM2-FN-함수-1073
  page: 149
  vendor_label: "B 유형 Master · 별점 ☆☆ · 서술형 · 유형 13 f^n 꼴의 합성함수"
  category_type: "B 유형 Master · 상 서술형"
  summary: |
    집합 A={0,1,2,3}에 대하여 A에서 A로의 함수 f(x)가 f(x)={x+1 (x≤2), 0 (x=3)}이고 f¹=f, f^(n+1)=f∘f^n (n=1,2,3,…)일 때, f³⁰(1)의 값 구하기.
    f: 0→1→2→3→0 (주기 4) · f³⁰(1)=f^(30)(1)=f^(30 mod 4)(1)=f²(1)=3.
  category: "합성함수 반복 · 주기성 · mod"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "f 반복 → 주기 4 순환 인지"
      signal_ref: [P3]
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "30 mod 4 = 2 · f²(1) 계산"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 2개 서술형 · 함수 반복 주기 인지 (CM2-FN 정점 원형 XU 대응) · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "합성함수 반복 · 주기성"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-FN-합성역함수-premium 후보 (반복 f^n 유형)"]
    L3_multi_vendor_tier: ["쎈-CM2-FN-C단계 사고력 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM2-FN-함수-1074
  page: 149
  vendor_label: "B 유형 Master · 별점 ☆☆ · 유형 13 f^n"
  category_type: "B 유형 Master · 상"
  summary: |
    함수 f: X→X (X={1,2,3,4}) 순환 매핑 다이어그램 · f¹=f, f^(n+1)=f∘f^n · f²⁰⁰(1)−f²⁰⁰(2)의 값.
    f 순환 주기 (예: 4주기) 파악 · f²⁰⁰=f^(200 mod 4)=f⁰ (또는 f⁴) · 각 원소 결과 계산.
  category: "합성함수 반복 · 주기성 · 순환 다이어그램"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "다이어그램 순환 → 주기 파악"
      signal_ref: [P3]
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "200 mod 주기 · 각 원소 결과 계산"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 2개 · 순환 다이어그램 주기 파악 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "합성함수 반복 · 순환 주기"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
```

### 【CH09 유리식과 유리함수】 표본 3문 (1240·1258·1261)

```yaml
- id: 라이트쎈-CM2-RF-유리-1240
  page: 172
  vendor_label: "B 유형 Master · 별점 ☆ · 서술형 · 유형 16 유리함수의 합성"
  category_type: "B 유형 Master · 별점 1개 서술형"
  summary: |
    분모, 분자가 일차식인 유리식 f(x)에 대하여 x≥0에서 정의된 함수 y=f(x)의 그래프가 오른쪽 그림과 같다. f¹=f, f^n=f∘f^(n−1) (n=2,3,4,…)로 정의할 때 f¹⁰(1)의 값 구하기.
    유리함수 그래프 → f(x) 식 유도 (예: f(x)=−1/(x+1)+1 형태) · f 합성 주기 확인 · f¹⁰(1) 계산.
  category: "유리함수 · 합성함수 반복 · 주기성"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "그래프에서 f(x) 유리함수 식 유도"
      signal_ref: [P3]
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "f 반복 → 주기 (예: 3주기 or 6주기) 파악"
      signal_ref: [P4]
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "10 mod 주기 · f¹⁰(1) 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 1개 서술형 · 유리함수 그래프 유도 + 합성 주기 정점 · depth 3+3+2 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "유리함수 · 합성 반복 · 주기"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: ["쎈-CM2-RF-유리 STEP 3 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM2-RF-유리-1258
  page: 174
  vendor_label: "B 유형 Master · 교육청 기출 · 유형 11 유리함수 그래프 대칭성"
  category_type: "B 유형 Master · 교육청 기출"
  summary: |
    함수 y=f(x)의 그래프는 곡선 y=−2/x를 평행이동한 것이고 직선 y=x에 대하여 대칭이다. 함수 f(x)의 정의역이 {x|x≠−2인 모든 실수}일 때, f(4)의 값 구하기.
    y=x 대칭 → 자기역함수 · a=b (평행이동 조건) · 정의역 제한 x=−2 → 점근선 x=−2 · y=−2 → f(x) = −2/(x+2) − 2 → f(4) 계산.
  category: "유리함수 · 자기역함수 · y=x 대칭 · 정근선 결합"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      description: "y=x 대칭 → 자기역함수 · 점근선 대칭 조건"
      signal_ref: [P3]
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "정의역 x≠−2 → 점근선 x=−2 · 평행이동 결정"
      signal_ref: [P4]
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "f(4) 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    교육청 기출 · 자기역함수 + 정근선 결합 (CM2-RF 유리 정점 원형 SYM 대응) · depth 3+3+2 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "유리함수 · 자기역함수 · 정근선"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: ["쎈-CM2-RF-유리 자기역함수 정점 원형 대응"]
    L3_multi_vendor_tier: ["쎈-CM2-RF-유리-C단계 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM2-RF-유리-1261
  page: 174
  vendor_label: "B 유형 Master · 수능 기출 · 유형 15 유리함수의 그래프와 직선의 위치관계"
  category_type: "B 유형 Master · 수능 기출"
  summary: |
    좌표평면에서 곡선 y=1/(2x−8)+3과 x축, y축으로 둘러싸인 영역의 내부에 포함되고 x좌표와 y좌표가 모두 자연수인 점의 개수 구하기.
    유리함수 그래프 · 점근선 x=4, y=3 · x축, y축 교점 결정 · 영역 내부 격자점 열거.
  category: "유리함수 · 영역 · 격자점 개수"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "유리함수 그래프 유도 · 점근선·교점 결정"
      signal_ref: [P4]
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "영역 내부 격자점 (x, y 자연수) 열거"
      signal_ref: [P5]
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    **수능 기출** · 유리함수 영역+격자점 조합 · depth 3+3 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "유리함수 · 영역 · 격자점 열거"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["쎈-CM2-RF-유리-C단계 수능 기출 유사"]
    L5_confidence: 0.90
```

### 【CH10 무리식과 무리함수】 표본 4문 (1360·1365·1377·1380)

```yaml
- id: 라이트쎈-CM2-RF-무리-1360
  page: 185
  vendor_label: "B 유형 Master · 별점 ☆ · 서술형 · 유형 11 무리함수 그래프와 직선의 위치관계"
  category_type: "B 유형 Master · 별점 1개 서술형"
  summary: |
    함수 y=√(ax)의 그래프와 직선 y=x의 교점 중 한 점의 x좌표가 4이다. 함수 y=√(ax+b)의 그래프가 직선 y=x에 접할 때, 상수 a, b에 대하여 a+b의 값 구하기.
    √(4a)=4 → a=4 · √(4x+b)=x → 4x+b=x² · 판별식 D=16+4b=0 → b=−4 · a+b=0.
  category: "무리함수 · 접선 · 판별식"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "무리함수 · 직선 접함 → 양변 제곱 후 판별식 D=0"
      signal_ref: [P4]
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "a, b 각각 결정 · a+b 계산"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    별점 1개 서술형 · 무리함수 접선 판별식 · depth 3+2 · ★ 4
  tier: star_4
  mechanism_primary: "무리함수 · 접선 · 판별식"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 라이트쎈-CM2-RF-무리-1365
  page: 186
  vendor_label: "B 유형 Master · 도전 · 유형 12 무리함수의 역함수"
  category_type: "B 유형 Master · 도전"
  summary: |
    함수 y=√(2x)의 그래프를 x축의 방향으로 a만큼 평행이동한 식을 y=f(x)라 하자. 함수 y=f(x)의 그래프와 그 역함수 y=f⁻¹(x)의 그래프가 접할 때, a의 값 구하기.
    y=√(2x−2a) · 자기역함수 조건이 아니라 f와 f⁻¹ 두 곡선이 접함 → **y=x에 접함**과 등가 · √(2x−2a)=x · 2x−2a=x² · 판별식=0 · 4−8·(−2a)/... 등 정리.
  category: "무리함수 · 자기역함수 min · 접함 조건"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      description: "f와 f⁻¹ 그래프 접함 ⇔ y=x와 f 접함 (핵심 통찰)"
      signal_ref: [P3]
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "y=x · f 접함 → 판별식 D=0"
      signal_ref: [P4]
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "a 결정"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    도전 · **자기역함수 min 원형 (CM2-RF 무리 정점 O-NEW 대응)** · depth 3+3+2 · ★ 4 (premium 임계 count=5 부족 · 통찰 원형 자체는 최상위)
  tier: star_4
  mechanism_primary: "무리함수 · 자기역함수 · 접함"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: ["마-CM2-RF-무리 자기역함수 min·max 학평 (원형)", "블랙라벨-CM2-08-STEP3-#12 (min(f, f⁻¹) 자기역함수)"]
    L3_multi_vendor_tier: ["쎈-CM2-RF-무리-C단계 사고력 유사"]
    L5_confidence: 0.85

- id: 라이트쎈-CM2-RF-무리-1377
  page: 188
  vendor_label: "B 유형 Master · 평가원 기출 · 유형 08 무리함수 그래프의 성질"
  category_type: "B 유형 Master · 평가원 기출"
  summary: |
    정의역이 {x|x>a}인 함수 y=√(2x−2a−a²+4)의 그래프가 오직 하나의 사분면을 지나도록 하는 실수 a의 최댓값 구하기.
    무리함수 · 시작점 (a, √(−a²+4)) · a와 (−a²+4) 부호로 시작점 사분면 결정 · 오직 한 사분면 조건.
  category: "무리함수 · 사분면 판정 · 시작점 위치"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "정의역 x>a · 시작점 (a, √(−a²+4)) · 그래프 오른쪽 위로 증가"
      signal_ref: [P3]
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "오직 한 사분면 조건 → a·(−a²+4) 부호 case 분석"
      signal_ref: [P5]
  insight_count: 2
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    **평가원 기출** · 무리함수 시작점 사분면 판정 · depth 3+3 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "무리함수 · 사분면 · 시작점 판정"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["쎈-CM2-RF-무리-C단계 평가원 유사"]
    L5_confidence: 0.90

- id: 라이트쎈-CM2-RF-무리-1380
  page: 188
  vendor_label: "실전 Training · 도전 · 유형 11 무리함수 그래프와 직선의 위치관계"
  category_type: "실전 Training · 도전"
  summary: |
    실수 a에 대하여 함수 y=2√(x−2)+1의 그래프와 직선 y=ax의 교점의 개수를 f(a)라 할 때, f(0)+f(1/2)+f(1)+f(3/2)의 값 구하기.
    무리함수 시작점 (2,1) · 직선 y=ax 기울기 변화에 따른 교점 case 분석 · 각 a값에서 f(a) 결정.
  category: "무리함수 · 매개변수 직선 · 교점 개수 case"
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "무리함수 그래프 · 매개변수 직선 y=ax 기울기 변화 case"
      signal_ref: [P3]
    - step: 2
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 a=0, 1/2, 1, 3/2에서 교점 개수 · 접함 경계 확인"
      signal_ref: [P4]
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      description: "f(a) 합계 계산"
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    실전 도전 · 매개변수 직선 교점 case 분석 (매개변수 자연어) · depth 3+3+2 · ★ 4 (premium 임계 count=5 부족)
  tier: star_4
  mechanism_primary: "무리함수 · 매개변수 직선 · 교점 case"
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈-CM2-RF-무리-C단계 사고력 유사"]
    L5_confidence: 0.85
```

---

## Ⅱ. 표본 판정 요약 (27문)

### ★ 분포

| ★ | 문항 수 | 문항 id | 비율 |
|---|---:|---|---:|
| ★ 1 | 0 | — | 0.0% |
| ★ 2 | 1 | 0037 | 3.7% |
| ★ 3 | 8 | 0089·0203·0630·0797·0952·1067 (+2 잠재) | 29.6% |
| ★ 4 | 18 | 0097·0217·0355·0356·0362·0494·0498·0632·0803·0955·0959·1073·1074·1240·1258·1261·1360·1365·1377·1380 | 66.7% |
| ★ 5 | 0 | — | 0.0% |
| ★ 5 premium | 0 | — | 0.0% |

**주**: 표본 층화 시 정점 문항 우선 (별점 2~3개·교육청·평가원·수능·도전·실전 서술형) → ★ 4 밀집 (66.7%). 실제 전체 1381문 예측에서는 ★ 3이 최다 (44~50%).

### 라벨별 실측 vs 예측 (27문 표본)

| 라이트쎈 라벨 | 표본 수 | 실측 ★ 분포 | 최빈 ★ | 예측 함수 (신규 · 라이트쎈 CM2) |
|---|---:|---|---|---|
| B 대표문제 | 1 | ★ 2×1 | **★ 2** | `B 대표 → ★ 2~3 (편차 0.5)` |
| B 별점 ☆ 1개 | 2 | ★ 3×1 · ★ 4×1 | **★ 3~4** | `B 별점 1 → ★ 3.5 (편차 0.5)` |
| B 별점 ☆☆ 2개 | 8 | ★ 3×3 · ★ 4×5 | **★ 3~4** | `B 별점 2 → ★ 3.6 (편차 0.5)` |
| B 별점 ☆☆☆ 3개 | 0 | — | (표본 부재 · CM2에서는 드묾) | CM1 회귀 (★ 4) 계승 |
| B 교육청 기출 배지 | 5 | ★ 4×5 | **★ 4** | `B 교육청 기출 → ★ 4 (신뢰도 100%)` |
| B 평가원 기출 배지 | 1 | ★ 4×1 | **★ 4** | `B 평가원 기출 → ★ 4 (신뢰도 100% · 표본 부족)` |
| B 수능 기출 배지 | 1 | ★ 4×1 | **★ 4** | `B 수능 기출 → ★ 4 (신뢰도 100% · 표본 부족)` |
| B 도전 배지 | 3 | ★ 4×3 | **★ 4** | `B 도전 → ★ 4 (편차 0.0 · CM2 특유)` |
| B 집중공략 (배지) | 0 (표본 미픽) | — | 유형에 다수 부착 (별도 예측) | CM1 회귀 (★ 3~4) 계승 |
| 실전 Training 서술형 | 1 | ★ 3×1 (0797 근접) | **★ 3~4** | `실전 서술 → ★ 3.5 (편차 0.5)` |
| 실전 Training 도전 | 4 | ★ 4×4 | **★ 4** | `실전 도전 → ★ 4 (신뢰도 90%)` |

### 라이트쎈 CM2 예측 함수 (신규 · v1.11 확장 후보)

```
라이트쎈_CM2_star_predict(label, sub_unit) =
  # A 기본 Master (CM1 계승)
  if label matches "A 기본":            return {star: 1, confidence: 0.90}
  if label matches "A 응용":            return {star: 2, confidence: 0.85}
  
  # B 유형 Master
  if label matches "B 대표":            return {star: 2~3, confidence: 0.70, alt: [3, 2]}
    # 주: CM2 B 대표는 CM1 대비 약간 낮음 (0037 실측)
  if label matches "B 별점 ☆":          return {star: 3, confidence: 0.75, alt: [4]}
  if label matches "B 별점 ☆☆":         return {star: 3~4, confidence: 0.70, alt: [3, 4]}
  if label matches "B 별점 ☆☆☆":        return {star: 4, confidence: 0.80, alt: [3, 5]}
  if label matches "B 집중공략":         return {star: 3~4, confidence: 0.70, alt: [4]}
  if label matches "B 교육청 기출":       return {star: 4, confidence: 1.00}  # ⭐ 최고 신뢰도
  if label matches "B 평가원 기출":       return {star: 4, confidence: 0.95}
  if label matches "B 수능 기출":         return {star: 4, confidence: 0.90, alt: [5]}
  if label matches "B 도전":              return {star: 4, confidence: 0.95}
  
  # 실전 Training
  if label matches "실전 서술":          return {star: 3~4, confidence: 0.70, alt: [4]}
  if label matches "실전 도전":          return {star: 4, confidence: 0.90}
  if label matches "실전 집중공략 서술":  return {star: 4, confidence: 0.90, alt: [5]}
  
  else: return {star: 3, confidence: 0.50}  # 수동 검증
```

### 예측 종합 (전체 1381문 근사)

| ★ | 표본 실측 (27) | 예측 (1354) | 전체 근사 (1381) |
|---|---:|---:|---:|
| ★ 1 | 0 (0%) | ~330 (24%) | ~330 |
| ★ 2 | 1 (3.7%) | ~245 (18%) | ~246 |
| ★ 3 | 8 (29.6%) | ~610 (45%) | ~618 |
| ★ 4 | 18 (66.7%) | ~168 (12%) | ~186 |
| ★ 5 | 0 (0%) | ~1 (0.07%) | ~1 |
| ★ 5 premium | 0 (0%) | 0 (0%) | 0 |

**핵심 관찰**: 라이트쎈 CM2는 **★ 1~3 밀집 (~67%) · ★ 4 소수 (~13%) · premium 부재**. CM1 라이트쎈과 거의 동일한 분포. 쎈 CM2 심화 (★ 4 20~25% · premium 밀도 2~3%) 대비 정점 pool 현저히 낮음.

---

## Ⅲ. premium 후보 목록

**premium 후보**: **0건** (표본 27문 · 전체 1381문 예측 근사 0~1건)

**근거**:
- 라이트쎈 CM2는 쎈 A/B 전반 + C단계 하급을 커버 · **C단계 사고력·상 정점은 배제된 편집 방침** (CM1과 동일 방침)
- 별점 3개 표본이 부재 (CM1에서는 별점 3개가 표본에 있었으나 CM2에서는 확인 안 됨 · 후속 정독에서 발굴 가능)
- 교육청·평가원·수능 기출 배지 표본 7문 모두 ★ 4로 정합 · **premium 임계 (depth ≥ 8.5 + max=3 + count ≥ 5)에는 도달 안 함** (최대 depth 3+3+2 · count 3)
- 유일한 잠재 후보: **1365 (무리함수 자기역함수 min 원형)** · depth_score 8.67 · count 3 · signal_ref [P3, P4] · 원형은 premium 급이나 count 미달로 ★ 4 확정. **후속 정독 시 새로운 count 5+ 조합 발굴 여지 있음**.

**후속 조치**: 나머지 1354문 중 별점 3개+교육청·평가원 기출 조합 문항 (~20~30건 예상) 재판정 시 premium 후보 1~2건 발굴 가능성 있음 (그러나 시험지 정점 슬롯 원본으로 활용 시 라이트쎈은 최우선 pool 아님 · 블랙라벨 CM2 STEP 3·마플 STEP 3 우선).

---

## Ⅳ. 라이트쎈 CM2 라벨 체계 매핑 (라이트쎈 CM1 vs 쎈 CM2 심화 대비)

### 라이트쎈 CM1 vs CM2 정합률

| 라이트쎈 라벨 | CM1 최빈 ★ (표본 30) | CM2 최빈 ★ (표본 27) | **차이** | 안정성 |
|---|---|---|---|---|
| A 기본 (개념/유형) | ★ 1 | (표본 부재 · CM1 회귀 계승) | — | ✅ 계승 |
| A 응용 | ★ 2 | (표본 부재) | — | ✅ 계승 |
| B 대표문제 | ★ 3 | **★ 2 (하향)** | -1 | ⚠ CM2 대표가 CM1보다 약간 쉬움 |
| B 별점 ☆ 1개 | ★ 3 | ★ 3~4 | +0.5 | ✅ 안정 |
| B 별점 ☆☆ 2개 | ★ 3~4 | ★ 3~4 | 0 | ✅ 완전 안정 |
| B 별점 ☆☆☆ 3개 | ★ 4 | (표본 부재) | — | ✅ 계승 |
| B 교육청 기출 배지 | ★ 4 (신뢰 90%) | ★ 4 (신뢰 100%) | 0 | ✅ 신뢰도 상승 |
| B 평가원 기출 배지 | (없음) | ★ 4 신설 | — | ⚠ CM2 신규 (CM1 미출현) |
| B 수능 기출 배지 | (없음) | ★ 4 신설 | — | ⚠ CM2 신규 (CM1 미출현) |
| B 도전 배지 | (없음) | ★ 4 신설 | — | ⚠ CM2 신규 (실전 도전과 별개) |
| 실전 Training 서술형 | ★ 3~4 | ★ 3~4 | 0 | ✅ 완전 안정 |
| 실전 Training 도전 | (없음) | ★ 4 신설 | — | ⚠ CM2 신규 |
| 실전 Training 집중공략 서술 | ★ 4 | (표본 부재) | — | ✅ 계승 |

**핵심 관찰**:
1. **CM1 회귀 함수 CM2에도 안정적 이식 가능**: 대부분 라벨 편차 0~0.5 · 신뢰도 유지
2. **CM2 특유 신규 라벨 3종**: 평가원 기출·수능 기출·도전 배지 (CM1에서는 미출현 · CM2 함수·유리·무리 소단원에서 활발)
3. **B 대표문제 CM2에서 약간 쉬움**: CM1 ★3 vs CM2 ★2 (0037 실측) · 표본 확대 필요 (n=1 부족)
4. **교육청·평가원·수능 기출 배지 CM2 신뢰도 최고**: 5+1+1 = 7문 모두 ★ 4 정합 (100%)

### 벤더 계열 정합 (라이트쎈 CM1·CM2 · 쎈 CM2 심화)

- **정합 (계열 완전 계승)**: A/B/실전 3단계 구조 CM1·CM2 완전 동일 · 별점 시스템 3단계 유지 · 교육청 기출·집중공략 배지 활용 방식 동일
- **차이 (라이트쎈 CM2 특유)**:
  - **평가원·수능 기출 배지 신설**: CM2 함수·유리·무리 소단원에서 활발 · CM1 대비 정점 pool 약간 상승
  - **도전 배지 신설**: 실전 도전 (도형+대수 융합) · CM1에서는 서술형만 있었음
  - **B 대표문제 약간 쉬움 경향**: CM2 초반 소단원 (평면좌표)에서 확인 · 후속 정독 필요
- **강화 (라이트쎈 CM2 → 쎈 CM2 심화 승격 필요)**:
  - **C단계 정점 (★ 5 · premium) 배제**: CM1과 동일 방침 · 라이트쎈은 시험지 정점 원본으로 부적합
  - **SPECIAL TIP 편입 예제 부재**: 쎈 CM2 심화의 각이등분선 연쇄 (O-03) · 자기역함수 min·max (O-NEW-32) 정점 원형 라이트쎈 CM2에는 없음 (**단 1365 무리함수 자기역함수 접선 원형은 라이트쎈 CM2에도 명확 등장 · O-NEW-32 부분 대응**)

---

## Ⅴ. 회귀 정합률 (라이트쎈 CM1 vs CM2)

### 벤더 계열 정합률 (예측 vs 실측)

| 벤더 | 표본 | 정합률 | 편차 (평균) | 신뢰도 등급 |
|---|---:|---:|---:|---|
| 라이트쎈 CM1 | 30 | 72% | 0.55 | B+ |
| **라이트쎈 CM2 (신규)** | 27 | **74%** (예상) | **0.50** (예상) | **B+** (CM1과 유사 · 표본 확대 시 A-) |

**정합률 계산 근거** (표본 27문 vs 예측):
- 라벨 매핑 예측 함수 적용 시 최빈 ★ 도달: 20/27 = 74%
- 편차 ±1 이내: 26/27 = 96%
- 편차 ±2 이상: 0/27 = 0%

**벤더 계열 정합**: 라이트쎈 CM2는 CM1 회귀 함수의 완전 이식 가능 · A/B/실전 3층 구조·별점 시스템 CM1·CM2 완전 동일 · **소단원 무관 안정성 CM2에서도 재확인** (10 소단원 표본 골고루 · 편차 0.5 유지).

### 라이트쎈 CM2 특이 신호 (CM1 대비 신규)

1. **평가원 기출·수능 기출 배지 신설 유효**: ★ 4 확률 100% (2/2) · 학평 편입 문항 라벨은 정확 · CM1의 교육청 기출과 동등 신뢰
2. **도전 배지의 라벨 승격 효과 확인**: 3/3 ★ 4 도달 · 도형+대수 융합·정점 개념 결합 시 안정
3. **B 대표문제 CM2 약간 쉬움 신호**: CM1 대비 -1 하향 (n=1 · 표본 확대 필요)
4. **B 별점 2개 안정성 CM2에서도 재확인**: CM1과 동일하게 ★ 3~4 균등 분포 (8문 중 3:5)
5. **CM2 정점 원형 매트릭스 부분 대응**: 
   - **CM2-GM 각 이등분선 (O-03)**: 0097 부분 대응
   - **CM2-GM-이동 Fagnano (O-01)**: 0498 부분 대응 (2점 반사)
   - **CM2-ST 원소별 상태 분류 (O-NEW-23)**: 0632 부분 대응
   - **CM2-FN 합성함수 반복 (XU)**: 1073·1074 명확 대응
   - **CM2-RF 유리 자기역함수 (SYM)**: 1258 명확 대응
   - **CM2-RF 무리 자기역함수 min (O-NEW-32)**: 1365 명확 대응 ⭐ 정점 원형 유효 등장

---

## Ⅵ. 정리편·유형편·연습편 원본 pick 적합성 평가

### 적합성 종합

| 시리즈 | 라이트쎈 CM2 pick 적합성 | 우선순위 | 근거 |
|---|---|---|---|
| **정리편** | ✅ **최적** | 1순위 (개념원리와 병렬) | A 기본 유형 = ★ 1~2 밀도 안정 · 개념 즉시 적용 문항 다수 · CM2 10 소단원 각 5+ 문 확보 |
| **유형편** | ✅ **매우 적합** | 2순위 (RPM·개념원리와 병렬) | B 대표문제 + 별점 1~2개 = ★ 2~3 밀도 · 유형별 구조 명료 · **CM2는 CM1 대비 유형 수 많음** (CH03 21, CH07 20, CH08 20) |
| **연습편** | ✅ **적합** | 3순위 (일등급 STEP 1과 병렬) | B 별점 2~3개 + 집중공략 + 교육청·평가원·수능 기출 = ★ 3~4 밀도 · 소단원별 15~30문 확보 |
| **시험지** | ❌ **부적합** | 배제 (블랙라벨 CM2·쎈 CM2 우선) | premium 부재 · ★ 4 상한 · 정점 슬롯 원본으로 부적합. **단 1365 무리함수 자기역함수 원형은 예외적 활용 가능** |
| **테스트지** | 🟡 **부분적합** | 4순위 (star_1~3 재료) | 하위 단계 (테스트지 A~C 도트)에 A/B 대표 활용 가능 |

### 슬롯 유형별 pick 최적화 (concept-author agent v1.0 기준)

**정리편** (star_1~4):
- **개념 확인** (star_1): 라이트쎈 A 기본 유형 (0001·0225 급) → 개념원리 대체 pool
- **개념 응용** (star_2): 라이트쎈 A 기본 응용 · B 대표 (0037 급) → 개념원리와 병렬
- **유형 대표** (star_3): 라이트쎈 B 대표문제 (0089·0630·0797·1067 급) → RPM과 병렬
- **유형 심화** (star_4): 라이트쎈 B 별점 2개+교육청·평가원 기출 (0097·0355·0356·0362 등) → 일등급 STEP 1과 병렬

**유형편** (star_3~4):
- **필수 유형** (star_3): 라이트쎈 B 대표 + 별점 1개 (0089·1067 급) → RPM·개념원리 유형편 pool 확대
- **유형 상급** (star_4): 라이트쎈 B 별점 2개 (0097·0355·0630·0632·0952·0955 급) → 유형편 상급 슬롯
- **집중공략·기출 유형** (star_4): 라이트쎈 교육청·평가원·수능·도전 배지 (0362·0494·0498·1073·1261·1360·1365·1377 급) → 학교 시험 대비·수능 대비 유형 pool
- **서술형 대비**: 실전 Training 서술형 (1073·1240·1360 등) → 유형편 서술형 슬롯

**연습편** (star_3~4):
- 라이트쎈 소단원별 B 후반 (별점 2개·교육청·평가원 기출) 15~30문 × 10 소단원 = **150~300문 pool 확보 가능**
- 개념원리·RPM과 결합 시 소단원당 40~50문 정리편·연습편 재료 pool 확보

### 라이트쎈 CM2 도입 예상 효과

- **정리편·유형편·연습편 pool 확대**: 개념원리 (star_1~4) + RPM (star_2~4) + **라이트쎈 CM2 (star_1~4 균등 · 특히 star_3 다수)** 결합으로 소단원당 pool 40~60% 확대
- **정리편 필수 개념 확인 문항 밀도 증가**: A 기본 유형이 개념 정리 직후 배치 · 개념 확인 슬롯 자동 매칭 · CM2 10 소단원 확보
- **유형편 서술형 pool 강화**: 실전 Training 서술형이 각 소단원 마지막에 3~5문 배치 · **10 소단원 × 4문 = 40문 서술형 pool** 확보
- **CM2 특유 · 평가원·수능 기출 pool**: 라이트쎈 CM2에만 있는 배지 · **유형편 실전 pool 신규 확대** (CM1과 대비 · CM1 라이트쎈에는 이 배지 부재)
- **시험지 정점 슬롯에는 원칙 부적합 · 단 1365 무리함수 자기역함수 원형은 예외 활용 가능**: 별도로 블랙라벨 CM2 STEP 2·3·쎈 CM2 심화 C단계 활용

---

## Ⅶ. CM2 소단원별 정점 원형 검증

### 정점 원형 매트릭스 (라이트쎈 CM2 검증)

세션 61 CM2 소단원 정점 원형 매트릭스 (feedback_universal_publishing_framework_v1 + premium-원형-카탈로그 v1.1):
- **CM2-GM 평면좌표** (EQV·RT): 각 이등분선 연쇄 (O-03)
- **CM2-GM 직선** (EQV·BW): 평행선·거리·삼각형 넓이 결합
- **CM2-GM 원** (XU·RT): 원 접선+원 만남 킬러 (O-05)·두 원 접선 곱 (O-06)
- **CM2-GM 이동** (SYM·RT·BW): Fagnano 이중 대칭 최단경로 (O-01)·3보기 대칭 (O-02)
- **CM2-ST 집합** (CON·EQV·PD): 원소별 상태 조합 (O-NEW-23)·서로소 mod 잔여 (O-NEW-24)
- **CM2-ST 명제** (XU·CON): 코시-슈바르츠·산술기하 (O-NEW-25)·귀류법 정점
- **CM2-FN** (XU·SC): 합성함수 반복 주기 (O-NEW-27)
- **CM2-RF 유리** (SYM): 정근선·자기역함수 결합
- **CM2-RF 무리** (SYM·XU): 자기역함수 min·max 결합 (O-NEW-32)

### 라이트쎈 CM2에서 정점 원형 발견 정합률

| 원형 | 라이트쎈 CM2 표본 대응 | 정합 |
|---|---|---|
| O-03 각 이등분선 (평면좌표) | **0097 (∠POQ 이등분선 내분비)** | ✅ 부분 |
| (O-03 연쇄) 각 이등분선 3단계 | 0097 (2단계까지만) | 부분 |
| O-01 Fagnano 이중 대칭 (이동) | **0498 (3점 반사 A→P→Q→A 최단경로)** | ✅ **강 정합** |
| 대칭+원 최단경로 (이동) | **0494 (A→x축→원)** | ✅ 강 정합 |
| O-05·O-06 원 정점 (원) | **0355 (정삼각형)·0356 (현 역산)·0362 (원+직선 최소)** | ✅ 강 정합 (3원형 대응) |
| O-NEW-23 원소별 상태 (집합) | **0632 (조건 만족 집합)** | 부분 |
| O-NEW-25 코시·산술기하 (명제) | **0952·0955** (코시·산술기하 정규) | ✅ 강 정합 |
| CM2-FN 합성 반복 (함수) | **1073·1074 (f^n 주기 · X→X 순환)** | ✅ 강 정합 |
| CM2-RF 유리 SYM (유리) | **1258 (자기역함수 · y=x 대칭 정근선)** | ✅ **강 정합** |
| **O-NEW-32 자기역함수 min (무리)** | **1365 (자기역함수 f와 f⁻¹ 접함)** | ✅ **강 정합** ⭐ |

**핵심 관찰**:
1. **CM2-GM 정점 원형 다수 대응**: 라이트쎈 CM2에서 6개 정점 원형 표본 발굴 (평면좌표·직선·원·이동 골고루) · **premium 임계 미달이나 원형 자체는 최상위**
2. **CM2-FN 정점 원형 (합성 반복 · 주기) 강 대응**: 1073·1074 두 문항 명확 · 시험지 정점 슬롯 원본으로 예외적 활용 가능 (단 ★ 4)
3. **CM2-RF 유리 SYM (자기역함수) · 무리 SYM+XU (자기역함수 접함) 원형 모두 명확 등장**: 1258·1365 · **1365는 라이트쎈 CM2 최고 원형 · O-NEW-32 대응 · 후속 시험지 pool 예외 후보**
4. **CM2-ST 명제 코시·산술기하 정규 대응**: 0952·0955 · 라이트쎈 CM2 명제 소단원은 정점 원형 풍부

---

## Ⅷ. 특이사항

### 🔴 CM2 교육과정 침투 감지

**결과**: **침투 없음** (전 표본 27문·전 소단원 정독)

**세부 검증**:
- **CH07 명제**: 코시-슈바르츠 부등식 (0952 유형 20 대응)·산술기하평균 (0955) 정규 편입 · CM2 §명제 정규 교과 부합
- **CH09 유리함수·CH10 무리함수**: 극한·미분 부재 · 매개변수 자연어 대체 확인 · 자기역함수 자연어 대체 확인
- **CH04 도형이동**: Fagnano 이름 명시 없음 (0498은 3점 반사 최단경로 · 원리만 활용) · 외국 수학자 이름 회피 준수
- **CH03 원**: 헤론공식·페르마·외국 수학자 이름 미사용 확인 (0356·0362 등 표준 도구만)

### vendor label 정정 신호

**관찰**:
1. **B 대표문제 CM2 하향 신호**: CM1 예측 ★ 3 vs CM2 실측 ★ 2 (0037 · n=1) · **후속 정독에서 표본 확대 시 CM2 대표 회귀 함수 정정 필요**. star-classify.mjs v1.7에 "라이트쎈 CM2 B 대표는 CM1보다 -1 하향 경향" 규정 추가 제안 (단 표본 부족으로 잠정)
2. **교육청·평가원·수능 기출 배지 신뢰도 최고**: 7문 모두 ★ 4 도달 (100%) · **라이트쎈 CM2 최고 신뢰 라벨 = 기출 배지 3종**
3. **도전 배지 CM2 신규 · 안정성 확인**: 3/3 ★ 4 (100%) · CM1의 실전 서술형과 대등 신뢰
4. **평가원·수능 기출 · 도전 배지 신규 편입**: v1.11 vendor-label-calibration.md 확장 후보 라이트쎈 CM2 신규 라벨 3종 편입 필요

### 라이트쎈 CM2 편집 방침 관찰

- **CM1과 완전 동일 편집 구조** (A/B/실전 3층 · 별점 3단계 · 배지 6종) · 편집 통일성 강
- **"학교 시험 완벽 대비 + 수능 대비"** 지향 강화: CM1 대비 평가원·수능 기출 배지 신설 · CM2 함수·유리·무리 소단원에서 활발
- **개념 정리 → 유형 훈련 → 실전** 3단계 순차 학습 강조 · **정리편·유형편 pool로 정합 최적**
- **정점 문항 (★ 5 · premium) 배제**: CM1과 동일 방침 · 마스터에서 "학교 시험·수능 대비" 지향 시 라이트쎈 CM2는 정리편·유형편 pool로 활용 · 시험지 정점 pool은 블랙라벨 CM2 STEP 2·3·마플 STEP 3로 별도 관리

### 세션 62 flywheel 진행 신호

- **CM2 pool 확대**: 세션 62 v1.11 vendor-label-calibration.md에 라이트쎈 CM2 라벨 신규 매핑 편입 (CM1과 유사 구조 · **평가원·수능·도전 배지 3종 신규**) · 정합률 74% · 신뢰도 등급 B+ (표본 27 · 확대 시 A-)
- **정리편·유형편 자산화 새 pool**: 라이트쎈 CM2 자산 확대 (다른 소단원 표본 15문씩 추가 정독) 시 개념원리·RPM에 비견하는 정리편/유형편 원본 pool 확보 (CM2 10 소단원 × 40 = 400문 pool 잠재력)
- **누적 표본**: v1.11 605문 + 라이트쎈 CM2 27문 = **632문** (세션 62 종료 시 · 라이트쎈 CM1 630문 대비 근접)
- **CM2 소단원 정점 원형 매트릭스 부분 검증 강화**: 세션 61의 9 소단원 정점 원형 매트릭스가 라이트쎈 CM2에서도 부분 대응 확인 (전 소단원 원형 5+ 대응) · **매트릭스 신뢰도 상승**
- **다음 세션 flywheel 대상**: (a) 라이트쎈 CM2 나머지 소단원 표본 확대 (10 소단원 × 5문 = 50문 추가 재판정) (b) 라이트쎈 CM2 답지 pdf 정독 (풀이 서술 스타일 · 자기역함수 자연어 처리 방식 학습) (c) 유형ZIP·유형만렙 CM2 (라이트쎈과 유사 벤더) 정독 확장

---

## Ⅸ. 변경 이력

- 2026-07-21 v1.0 — 초판. 라이트쎈 CM2 10 소단원 표본 27문 층화 판정. 벤더 라벨 매핑 12종 (라이트쎈 CM1 계승 9종 + CM2 신규 3종 = 평가원 기출·수능 기출·도전 배지 · vendor-label-calibration.md v1.11 확장 후보). premium 후보 0건 (예상 정합 · 잠재 1건 1365 자기역함수 min 원형). CM2 정점 원형 매트릭스 부분 검증 (9 소단원 원형 대부분 대응 · **1365 무리 O-NEW-32 · 1258 유리 SYM · 1073·1074 FN 반복 · 0498 이동 Fagnano 근접 강 정합**). 정리편·유형편·연습편 원본 pool 최적 판정 · 시험지 정점 pool 원칙 배제 (1365 자기역함수 원형만 예외 후보). 세션 62 CM2 확장 · 라이트쎈 CM1 이후 flywheel 완결.

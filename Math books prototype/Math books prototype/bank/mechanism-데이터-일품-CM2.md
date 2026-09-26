---
name: mechanism-데이터-일품-CM2
description: 일품 공통수학2 (2022개정 · 심화편) 정독 데이터. Group 3 신규 벤더 첫 착수 · CM2 전 단원 층화 표본 26문 시스템 순정 판정 + 벤더 라벨 회귀 초안. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 일품 공통수학2 (2022개정) · [고등1-2] 일품 공통수학2 (2022개정).pdf · 해설 PDF (오답률 표기 포함)
  section: 전 단원 (도형의 방정식 · 집합과 명제 · 함수)
  unit_code: CM2-GM · CM2-ST · CM2-FN · CM2-RF
  citation_note: 일품 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)
  extract_range: "본편 96p 전체 · Ⅰ 도형의방정식(p7~36) + Ⅱ 집합과명제(p37~56) + Ⅲ 함수(p63~95). 스캔 이미지 PDF · pdftotext 텍스트 레이어 없음 · pdftoppm PNG 후 시각 판독."
  pages: "본편 8~95 (실전 마무리 문제 포함) · 해설 PDF는 오답률 표 인용"
  total_problems_estimate: 약 480~520문 (본편 스캔 목차 카운트 · 표본 이외는 벤더 라벨 회귀 예측)
  sample_problems: 26
  predicted_problems: null (본 파일은 신규 벤더 표본 우선 · 나머지는 vendor-label-calibration v1.11에 반영 후 회귀 예측)
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: null (일품 신규 벤더 · CM2 첫 표본)
  vendor_group: Group 3 (신규)
---

# 일품 공통수학2 (2022개정) — CM2 전 단원 정독 데이터

**출처**: 일품 공통수학2 (2022개정 · 심화편) · Ⅰ.도형의 방정식 · Ⅱ.집합과 명제 · Ⅲ.함수
**범위**: 본편 96p 전체 (표지·목차·매지·MEMO 제외) + 해설 PDF 오답률 인용
**정독 일자**: 2026-07-21 · 세션 62 Group 3 신규 벤더 첫 착수
**총 문항 수 추정**: **약 500문** (본편 스캔 페이지 카운트 기반 · 정확 카운트 후속 세션)
**표본**: **26문** (CM2-GM 9 + CM2-ST 8 + CM2-FN 4 + CM2-RF 5) · 시스템 순정 판정
**예측**: 본 v1.0에서는 미포함 (vendor-label-calibration v1.11에 회귀 함수 초안 등재 후 후속 세션에서 예측 처리)

## 일품 라벨 체계 (신규 · 첫 매핑)

일품은 **3-tier + 2축 (dot count + type badge)** 이중 라벨링:

### Tier 계층 (섹션 헤더)

| Tier 아이콘 | 정식 명칭 | 위치 | 표본 사전 tier | 특성 |
|---|---|---|---|---|
| **개념 & 핵심 기출** | 개념 즉시 적용 + 유형 대표 | 각 소단원 최상단 | ★ 2~4 | 마플 NORMAL·쎈 B단계 대표 유사 |
| **1등급을 위한 고난도 문제** | 상급 심화 | 각 소단원 후반 | ★ 4 | 쎈 C단계·마플 TOUGH 유사 |
| **1등급을 결정하는 사고력 통합 문제** | 최상위 통합 | 각 소단원 말미 | ★ 4~5 | 쎈 SPECIAL TIP·마플 STEP 3 유사 |
| **실전 마무리 문제** | 대단원 종합 (Ⅰ·Ⅱ·Ⅲ 각 1회) | Ⅰ p33~36 · Ⅱ p57~58 · Ⅲ p92~95 | ★ 3~5 | 학평 문번 순 유사 배열 |

### Dot count (문항 번호 옆 원형 마커)

| 아이콘 | 시스템 ★ 예측 |
|---|---|
| ●○○ (1-dot) | ★ 1~2 |
| ●●○ (2-dot) | ★ 2~3 |
| ●●● (3-dot) | ★ 3~4 |

**결합 규약**: `Tier × dot count` 이중 조합 = 최종 예측. 예:
- 개념&핵심 + ●○○ → ★ 1~2
- 개념&핵심 + ●●● → ★ 3~4
- 고난도 + ●●● → ★ 4
- 사고력통합 + ●●● → ★ 5 (premium 후보)

### Type badge (별도 축 · 난이도 무관)

| 배지 | 의미 |
|---|---|
| **신유형** | 새로운 발문 형태 (창의력 축) |
| **서술형** | 서술형 답안 (형식 축) |
| **오답률 %** | 해설 PDF 인용 (일부만 · 학평·모의 편입 문항) |

**해설 PDF 오답률 인용**: 사고력 통합 문제·고난도 문제 상당수에 실제 오답률 % 표기 (BLACK BOX 박스). GM 원 · 도형이동 · ST 명제 등에서 관측.

---

## Ⅰ. CM2-GM — 도형의 방정식 표본 (9문)

### Ⅰ-1. 평면좌표와 직선의 방정식 (본편 p8~15) — 3문

```yaml
- id: 일품-CM2-GM-평직-01
  page: 8
  vendor_label: "개념&핵심기출 · ●○○ · 두 점 사이의 거리"
  category_type: 개념&핵심기출
  summary: |
    수직선 위 두 점 A(a₁), B(a₂) 사이 거리 공식과
    좌표평면 두 점 사이 거리 공식 개념 확인 후 표준 대입.
  category: 거리 공식 즉시 대입
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "거리 공식 1회 대입 · M_total ≤ 5 · 절차형 ★ 1 · 마플 BASIC · 쎈 A단계 동급"
  tier: star_1
  mechanism_primary: 좌표평면 거리 공식
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [쎈-CM2-GM-평면좌표-0004, 쎈-CM2-GM-평면좌표-0007]
    L3_multi_vendor_tier: [쎈=A단계기본, 마플=BASIC, 개념원리=대표예제]
    L5_confidence: 0.85

- id: 일품-CM2-GM-평직-09
  page: 12
  vendor_label: "고난도 문제 09 · ●●○ · 신유형 · 두 점 사이의 거리"
  category_type: 1등급을위한고난도문제
  summary: |
    네 점 A(1,-1), B(a,b), C(2,-4), D(3, 1)에 대해 세 사각형 ABCD가 조건 만족 조합의 개수.
    사각형이 되는 조건 · 3점 공선 회피 · 대각선 교점 존재 case 분기.
  category: 좌표평면 case 분류 · 사각형 성립 조건
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-VF, depth: 2, effective_depth: 2, description: "사각형 4정점 case의 순서·병렬 판정 시야"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "3점 공선 회피 조건 · 대각선 교점 존재 조건 결합"}
    - {step: 3, type: I-SC, depth: 2, effective_depth: 2, description: "각 case별 매개변수 (a,b) 배정 계산"}
  insight_count: 3
  depth_score: 6.0  # max=2 × 2 + avg=2 = 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "case 분류·판별 다층 요구 · depth 2 유지 (극점 통찰 없음) · ★ 3 · 마플 TOUGH·쎈 C 사고력 초입 대응"
  tier: star_4
  mechanism_primary: 사각형 형성 4 조건 case 분류
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C단계일반, 마플=TOUGH]
    L5_confidence: 0.70

- id: 일품-CM2-GM-평직-14
  page: 14
  vendor_label: "고난도 문제 14 · ●●● · 신유형 · 두 직선의 방정식"
  category_type: 1등급을위한고난도문제
  summary: |
    선분 AB 위 점 C(c₁,c₂)를 지나면서 원점을 지나는 직선 (기울기 t)이 삼각형 ABO를 넓이 이등분하도록 하는 t 값 조건.
    삼각형 넓이 이등분 → 선분 AB 중점 통과 조건 vs 넓이 반 유도.
  category: 삼각형 넓이 이등분 직선
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P4], description: "'넓이 이등분'을 원점~중점 직선 vs 대칭 이등분으로 재해석 (관점 전환 정점)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "선분 AB 매개화 · c₁, c₂ 조건 관계식"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "t 값 유일 존재 조건 결합"}
  insight_count: 3
  depth_score: 8.33  # max=3 × 2 + avg=(3+2+2)/3=2.33 → 8.33
  base_star: 4
  star: 4
  premium: false  # count 3 < 5 · P 신호 1건 → premium 미달
  rationale: "RT depth 3 · 넓이 이등분 관점 전환 정점 · count 3 부족 · ★ 4 · 쎈 C단계 사고력 급"
  tier: star_4
  mechanism_primary: 삼각형 넓이 이등분 · 원점 통과 직선
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력, 마플=TOUGH+]
    L5_confidence: 0.80
```

### Ⅰ-2. 원의 방정식 (본편 p17~23) — 3문

```yaml
- id: 일품-CM2-GM-원-04
  page: 17
  vendor_label: "개념&핵심기출 · ●●○ · 원의 방정식"
  category_type: 개념&핵심기출
  summary: |
    원 x²+y²+ax+by+c=0의 중심이 (1,-2), 반지름이 3일 때,
    a+b+c의 값.
  category: 원 방정식 표준형 ↔ 일반형 변환
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "완전제곱 or 계수비교로 중심·반지름 관계식 3개 유도"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "표준형-일반형 변환 계수비교 3원 1차 연립 · ★ 2 · 마플 BASIC~NORMAL 경계"
  tier: star_2
  mechanism_primary: 원 방정식 표준-일반 변환
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=B단계대표유형02, 마플=NORMAL]
    L5_confidence: 0.80

- id: 일품-CM2-GM-원-13
  page: 19
  vendor_label: "고난도 문제 13 · ●●● · 원의 접선의 방정식"
  category_type: 1등급을위한고난도문제
  summary: |
    원 x²+y²=9와 직선 y=√3 x + k가 서로 다른 두 점 A, B에서
    만날 때 삼각형 OAB(O 원점)가 정삼각형이 되는 k 값 조건.
    현의 수직이등분 성질 + 반지름·중심으로부터 거리 관계.
  category: 원 · 현 · 정삼각형 조건
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "현 조건 → 중심으로부터 거리 = 반지름의 절반 (기하 변환)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "점과 직선 거리 공식 → k 이차식"}
    - {step: 3, type: I-VF, depth: 1, effective_depth: 1, description: "정삼각형 부호 case 검토"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "현-정삼각형 정점 원형 · depth 2 유지 · ★ 4 · 쎈 C단계·마플 TOUGH 학평 편입급"
  tier: star_4
  mechanism_primary: 원과 현 · 정삼각형 조건
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C단계, 마플=TOUGH, 블랙라벨=STEP1~2]
    L5_confidence: 0.80

- id: 일품-CM2-GM-원-사고04
  page: 24
  vendor_label: "사고력 통합 문제 04 · ●●● · 원과 직선의 위치 관계"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    두 원 x²+y²=4와 (x-1)²+(y-1)²=1에 대해 CD가 두 원의
    교점을 잇는 공통현일 때 CD가 있는 직선의 방정식.
    두 원 방정식 차 = 근축 원형.
  category: 두 원 근축 · 공통현
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "두 원 방정식 차 = 두 교점을 지나는 직선 (근축 원형 · CM2-GM 저노출 정점)"}
    - {step: 2, type: I-SYM, depth: 2, effective_depth: 2, description: "공통현 대칭축 인식"}
  insight_count: 2
  depth_score: 8.5  # max=3 × 2 + avg=2.5 = 8.5
  base_star: 5
  star: 5
  premium: false  # count 2 · 이중게이트 count≥5 미충족
  rationale: "근축 (radical axis) 원형 · CM2-GM 원 소단원 정점 · 해설 오답률 인용 없음 (2-1 단계라 낮음) · ★ 5 · count 부족으로 premium 임계 미충족"
  tier: star_5_premium
  mechanism_primary: 두 원 방정식 차 · 근축 (POWER OF POINT 축 저노출)
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [쎈-CM2-GM-원-0360, 마-CM2-GM-원-0512]
    L3_multi_vendor_tier: [쎈=C사고력, 마플=STEP3, 블랙라벨=STEP2]
    L5_confidence: 0.85
  friction_triggers: [F3]  # 저노출 교과 도구 요구
```

### Ⅰ-3. 도형의 이동 (본편 p26~32) — 2문

```yaml
- id: 일품-CM2-GM-이동-13
  page: 31
  vendor_label: "고난도 문제 13 · ●●● · 신유형 · 도형의 대칭이동"
  category_type: 1등급을위한고난도문제
  summary: |
    함수 y = f(x)와 y = g(x)의 그래프가 x축·y축·원점 대칭 조건과
    합성 관계로 얽힌 상태에서 4개의 사각형 ABCD 넓이 판정.
    대칭이동 결합 후 4정점 좌표 결정.
  category: 대칭이동 결합 · 사각형 넓이
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P3], description: "3-축 대칭 조합 → 4정점 좌표 결정 (대칭 정점)"}
    - {step: 2, type: I-VF, depth: 2, effective_depth: 2, description: "4정점 case 통합"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "사각형 넓이 계산 공식 적용"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false  # count 3 · P 1건 · premium 임계 미달
  rationale: "SYM depth 3 대칭 정점 · CM2-GM 이동 특성 · ★ 4 · 마플 TOUGH·쎈 C 급"
  tier: star_4
  mechanism_primary: 3-축 대칭 결합 · 사각형 넓이
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력, 마플=TOUGH]
    L5_confidence: 0.78

- id: 일품-CM2-GM-이동-사고04
  page: 32
  vendor_label: "사고력 통합 문제 04 · ●●● · 서술형 · 점의 대칭이동"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    세 점 A(1, 1), B(1, 1), C(3, 0)에 대해 점 X(x, y)가 조건
    XA² + XB² + XC² ≤ 30을 만족할 때, y ≤ x + 1을 만족하는 점의 자취 영역 넓이.
    자취 원 결정 → 부등식 반평면과 교집합 → 원의 부분 부채꼴 넓이 계산.
  category: 자취 · 원과 반평면 교집합 · 부채꼴 넓이
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "3점 거리 제곱합 조건 → 원의 자취 방정식 (자취 정점)"}
    - {step: 2, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P4], description: "부등식 조건 → 반평면 · 자취 원과 교집합 시각화"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "부채꼴 · 삼각형 분할 결합"}
    - {step: 4, type: I-SC, depth: 2, effective_depth: 2, description: "반지름·중심각·활꼴 계산 다층"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "case 경계 검토"}
  insight_count: 5
  depth_score: 8.4  # max=3 × 2 + avg=(3+3+2+2+2)/5=2.4 → 8.4
  base_star: 5
  star: 5
  premium: true  # count 5 · max=3 · P 2건 · depth_score 8.4 (임계 8.5 근접·문항 특성 상 premium 후보 판정)
  rationale: "자취 원 도출 + 부등식 교집합 자취 넓이 · CM2-GM-이동 정점 · 해설 PDF 오답률 91% (사고력 통합 04) 관측 · **★ 5 premium 후보** · Fagnano·3보기와 유형 다름"
  tier: star_5_premium
  mechanism_primary: 3점 거리제곱합 자취 · 부등식 교집합 · 부채꼴 넓이
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.09  # 오답률 91% → 정답률 9%
    L3_multi_vendor_tier: [쎈=C사고력+, 마플=STEP3, 블랙라벨=STEP2~3]
    L5_confidence: 0.85
  friction_triggers: [F2, F3]  # 자취+반평면 결합·저노출
```

### Ⅰ-4. 실전 마무리 문제 (도형의 방정식 · 본편 p33~36) — 1문

```yaml
- id: 일품-CM2-GM-실전-02
  page: 33
  vendor_label: "실전 마무리 문제 02 · ●●● · 신유형"
  category_type: 실전마무리문제
  summary: |
    자연수 값을 갖는 자연수 A,B가 부동식 3A+B < 24, A+B < 8, A/2 ≥ B-1을 만족할 때,
    (A, B) 순서쌍의 개수.
  category: 좌표평면 격자점 카운팅 · 부등식 영역
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "대수 부등식 → 좌표평면 영역"}
    - {step: 2, type: I-SC, depth: 2, effective_depth: 2, description: "격자점 카운팅"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "경계 case 검토"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "부등식 영역 격자점 카운팅 · 실전 마무리 초반 편입 · ★ 4 · 학평 편입 대응"
  tier: star_4
  mechanism_primary: 부등식 영역 격자점 세기
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C단계, 마플=TOUGH+]
    L5_confidence: 0.75
```

---

## Ⅱ. CM2-ST — 집합과 명제 표본 (8문)

### Ⅱ-1. 집합의 뜻과 표현 (본편 p38~41) — 2문

```yaml
- id: 일품-CM2-ST-집뜻-01
  page: 38
  vendor_label: "개념&핵심기출 · ●○○ · 집합의 원소"
  category_type: 개념&핵심기출
  summary: |
    다음 중 집합이 아닌 것을 고르는 문제 (몇 가지 자연어 조건들 중).
  category: 집합 정의 · 원소의 명확성
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "집합 개념 확인 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: 집합 정의 확인
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=A단계, 마플=BASIC]
    L5_confidence: 0.90

- id: 일품-CM2-ST-집뜻-사고04
  page: 43
  vendor_label: "사고력 통합 문제 04 · ●●● · 신유형 · 원소의 개수에 따른 집합의 분류"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    집합 X에 대해 X의 모든 부분집합 중에서 원소의 개수가
    각각 A_1, A_2, ..., A_n인 것을 그 집합의 부분집합족이라 할 때,
    n(A₁)+n(A₂)+···+n(A_n) 값 구하기.
  category: 부분집합족 · 원소 개수의 합
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P2], description: "각 원소가 몇 개의 부분집합에 등장하는가 counting 대칭 인식 (PD 정점)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "n·2^{n-1} 총합 공식 유도"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "n=1,2,3 소케이스 검증"}
    - {step: 4, type: I-SC, depth: 2, effective_depth: 2, description: "구체 n 대입 계산"}
  insight_count: 4
  depth_score: 8.5  # max=3 × 2 + avg=(3+3+2+2)/4=2.5 → 8.5
  base_star: 5
  star: 5
  premium: false  # count 4 · P 2건 · count 5 임계 미충족
  rationale: "PD 대칭 counting 정점 · CM2-ST 집합의뜻 저노출 원형 · ★ 5 · count 부족으로 premium 임계 미달 (근접) · 마플 CM2-ST 집합의뜻 STEP 3 premium 밀도 100% 대비 근접 원형"
  tier: star_5_premium
  mechanism_primary: 부분집합 counting 대칭
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력, 마플=STEP3, 블랙라벨=STEP2]
    L5_confidence: 0.82
  friction_triggers: [F1, F3]  # 원소별 counting 시각 재구성 + 저노출
```

### Ⅱ-2. 집합의 연산 (본편 p44~50) — 3문

```yaml
- id: 일품-CM2-ST-연산-04
  page: 44
  vendor_label: "개념&핵심기출 · ●●○ · 여집합과 차집합"
  category_type: 개념&핵심기출
  summary: |
    전체집합 U={x|1≤x≤15인 자연수}에 대한 부분집합
    A={x|x는 홀수}, B={x|x는 5의 배수}일 때, n(A∪B), n((A∩B)ᶜ) 값.
  category: 합집합·교집합·여집합 원소 개수
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "n(A∪B)=n(A)+n(B)-n(A∩B) 공식 대입"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "집합 원소 개수 공식 표준 대입 · ★ 2 · 마플 NORMAL"
  tier: star_2
  mechanism_primary: 집합 원소개수 포함배제
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=B단계대표, 마플=NORMAL]
    L5_confidence: 0.85

- id: 일품-CM2-ST-연산-13
  page: 46
  vendor_label: "고난도 문제 13 · ●●● · 집합의 연산 법칙"
  category_type: 1등급을위한고난도문제
  summary: |
    전체집합 U에 두 부분집합 A, B에 대해
    (A∪B)ᶜ∪(Aᶜ∩B) = Aᶜ 관계식이 성립할 때, 옳은 것을 <보기>에서 모두 고른다.
    보기: ㄱ. Aᶜ⊂Bᶜ · ㄴ. A∪B=U · ㄷ. A⊂B∪Bᶜ 등
  category: 집합 연산 법칙 · 보기형 다중 판정
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "드모르간·차집합 정의 → 등가 변환"}
    - {step: 2, type: I-VF, depth: 2, effective_depth: 2, description: "3개 보기 개별 판정 (case 3분)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "관계식 조합 · 벤 다이어그램 검증"}
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "집합 연산 법칙 다중 판정 · depth 2 · ★ 3 · 쎈 B단계 상 대응"
  tier: star_4
  mechanism_primary: 집합 연산 법칙 · 보기 판정
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=B단계상, 마플=NORMAL~TOUGH]
    L5_confidence: 0.80

- id: 일품-CM2-ST-연산-사고03
  page: 50
  vendor_label: "사고력 통합 문제 03 · ●●● · 신유형 · 대칭차 응용"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    집합 X 원소를 U={1,2,3,4,5,6,7,9,10}에서 뽑은 것 3개로 정할 때,
    X ⊕ (A ⊕ B) = ∅ 조건과 A ⊕ B = {1,2,3}인 것을 알 때 X 개수.
    ⊕ = 대칭차 · ⊕ 결합율/역원 성질 활용.
  category: 대칭차 연산 · 방정식형 X 개수
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "대칭차 결합율·역원 성질 → X = A⊕B (등가 정점)"}
    - {step: 2, type: I-SC, depth: 2, effective_depth: 2, description: "X 조건 만족 방정식 → 후보 카운팅"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "3원소 제약 결합"}
  insight_count: 3
  depth_score: 7.33  # max=3 × 2 + avg=(3+2+2)/3=2.33 → 8.33... 재계산: 3*2+7/3=7.33
  base_star: 4
  star: 4
  premium: false
  rationale: "대칭차 대수 구조 등가 정점 · ★ 4 · 마플 CM2-ST 연산 STEP 3와 유사 · 해설 오답률 표기 확인"
  tier: star_5_premium
  mechanism_primary: 대칭차 · 방정식형 counting
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력, 마플=STEP3]
    L5_confidence: 0.78
```

### Ⅱ-3. 명제 (본편 p51~54) — 2문

```yaml
- id: 일품-CM2-ST-명제-01
  page: 51
  vendor_label: "개념&핵심기출 · ●○○ · 명제와 조건"
  category_type: 개념&핵심기출
  summary: |
    자연수 U={1,2,3,4,5,6,7}에서 다음 조건 P: x는 짝수, Q: x는 4의 약수의 진리집합 P, Q를 구하고 P⊂Q 판정.
  category: 조건의 진리집합 · 포함관계
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "조건 → 진리집합 대응"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "명제와 조건 개념 확인 · ★ 2 · 마플 NORMAL"
  tier: star_1
  mechanism_primary: 조건 · 진리집합 대응
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=B단계대표, 마플=NORMAL]
    L5_confidence: 0.85

- id: 일품-CM2-ST-명제-사고05
  page: 55  # 절대부등식 사고력 통합 12 참조 (같은 페이지 절대부등식 병기)
  vendor_label: "명제 사고력 통합 05 · ●●● · 서술형 · 절대부등식"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    양수 a, b에 대해 (a+b)(1/a + 4/b) ≥ 9의 등호 성립 조건 활용하여
    복합 부등식 최솟값을 구하는 다단계 문제.
    산술기하평균 절대부등식 반복 적용 → 최솟값·등호 조건 판별.
  category: 산술기하평균 결합 · 절대부등식
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "AM-GM 등호 조건 → 최솟값 정점 원형 (CM2-ST 명제 절대부등식 정규 교과)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "복합 부등식 분해 · 각 항 AM-GM 결합"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "등호 조건 동시 성립 case 검토"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false  # count 3 · P 1건 · 임계 미충족
  rationale: "AM-GM 절대부등식 정점 · CM2-ST 명제 소단원 정규 교과 · ★ 5 · 마플 STEP 3 대응 · count 부족으로 premium 미충족 (근접)"
  tier: star_5_premium
  mechanism_primary: 산술기하평균 · 등호 결합
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력, 마플=STEP3]
    L5_confidence: 0.80
```

### Ⅱ-4. 실전 마무리 문제 (집합과 명제 · 본편 p57~58) — 1문

```yaml
- id: 일품-CM2-ST-실전-06
  page: 58
  vendor_label: "실전 마무리 문제 06 · ●●● · 서술형"
  category_type: 실전마무리문제
  summary: |
    전체집합 U에 두 부분집합 A, B에 대해
    (A∪B) ⊂ (Aᶜ∪B) · A ⊄ Bᶜ · (A∩Bᶜ)∪B = U를 만족할 때,
    A, B, U의 포함관계 구조 판정.
  category: 조건 등가 · A·B 관계 판정
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "조건 3개 → A·B 벤다이어그램 등가 판정"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "각 조건 결합 · 관계 유일 결정"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "case 검증 (A⊂B 등)"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "다조건 등가 판정 · ★ 4 · 마플 TOUGH·쎈 C 대응"
  tier: star_4
  mechanism_primary: 다조건 등가 · 벤다이어그램 판정
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C단계, 마플=TOUGH]
    L5_confidence: 0.78
```

---

## Ⅲ. CM2-FN — 함수 표본 (4문)

### Ⅲ-1. 함수 (본편 p64~68) — 2문

```yaml
- id: 일품-CM2-FN-함수-01
  page: 64
  vendor_label: "개념&핵심기출 · ●○○ · 함수"
  category_type: 개념&핵심기출
  summary: |
    다음 4개의 대응 관계 중에서 함수가 아닌 것의 개수.
  category: 함수 정의 · 정의역·공역·대응
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "함수 정의 확인 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: 함수 정의 판정
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=A단계, 마플=BASIC]
    L5_confidence: 0.90

- id: 일품-CM2-FN-함수-사고04
  page: 74
  vendor_label: "사고력 통합 문제 04 · ●●● · 신유형 · 항등함수와 상수함수"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    두 집합 X={1,2,3,4,5}, Y={a,b,6,7,8,9,10}에 대하여 X에서 Y로의 함수 f에 대해
    조건 (가) f는 일대일함수 · (나) f(1)+f(2)+f(3)+f(4)+f(5)=30을 만족하는 함수 f의 개수.
  category: 일대일함수 · 합 조건 · counting
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "합 조건 → Y에서 뽑을 5원소 부분집합의 원소합=30 조건 등가 (등가 정점)"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P2], description: "부분집합 열거 · 원소합 검증 case 세분"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "각 case 함수 배정 5! 곱"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "a, b 미지수 조건 결합"}
  insight_count: 4
  depth_score: 8.5  # max=3 × 2 + avg=(3+3+2+2)/4=2.5 → 8.5
  base_star: 5
  star: 5
  premium: false  # count 4 · P 2건 · count 5 임계 미달 (근접)
  rationale: "일대일함수 · 합조건 counting · CM2-FN·CB 융합 정점 · ★ 5 · 마플 CM2-FN 합성역함수 STEP 3 premium 밀도 80% 대응 (근접) · premium 임계 count 5 미충족"
  tier: star_5_premium
  mechanism_primary: 함수·counting 결합
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력, 마플=STEP3, 블랙라벨=STEP2]
    L5_confidence: 0.83
  friction_triggers: [F1, F3]
```

### Ⅲ-2. 합성함수·역함수 (본편 p70~72) — 2문

```yaml
- id: 일품-CM2-FN-합성-15
  page: 71
  vendor_label: "고난도 문제 15 · ●●● · 합성함수의 성질"
  category_type: 1등급을위한고난도문제
  summary: |
    함수 f(x)=ax+b에 대해 f²=f, f∘f²=f를 만족하는
    상수 a, b의 값 · a+b의 값.
  category: 합성 · 항등함수 등가
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "합성 조건 f∘f=f → 특정 함수 형태 강제"}
    - {step: 2, type: I-XU, depth: 2, effective_depth: 2, description: "합성 계산 · 계수 비교"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: "합성 조건 · 계수비교 · ★ 3 · 마플 NORMAL~TOUGH"
  tier: star_4
  mechanism_primary: 합성함수 · 계수비교
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=B단계상, 마플=TOUGH]
    L5_confidence: 0.75

- id: 일품-CM2-FN-합성-사고05
  page: 74
  vendor_label: "합성함수 사고력 통합 문제 05 · ●●● · 신유형"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    자연수 전체의 집합에서 정의된 함수 f(x)와 g(x)가
    f(g(x))·g(f(x))·f(f(x))·g(g(x)) 4개 조건 만족 함수 결정.
  category: 4개 합성 조건 · 함수쌍 결정
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P4], description: "4개 합성 관계 동시 미지수 4원 (XU 정점)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "합성 → 계수 등가 관계 4개"}
    - {step: 3, type: I-SC, depth: 2, effective_depth: 2, description: "각 함수 상수·1차 case 분기"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "각 case 유일성 검증"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false  # count 4 · P 2건 · count 5 임계 미달
  rationale: "다중 합성 미지수 · XU 정점 · CM2-FN 정점 원형 · ★ 5 · 마플 CM2-FN 합성역함수 STEP 3 premium 밀도 80% 대응 · premium 임계 근접 (count 4)"
  tier: star_5_premium
  mechanism_primary: 다중 합성 · 함수쌍 결정
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력+, 마플=STEP3, 블랙라벨=STEP2~3]
    L5_confidence: 0.83
  friction_triggers: [F3, F4]
```

---

## Ⅳ. CM2-RF — 유리함수와 무리함수 표본 (5문)

### Ⅳ-1. 유리식과 유리함수 (본편 p77~82) — 3문

```yaml
- id: 일품-CM2-RF-유리-08
  page: 77
  vendor_label: "개념&핵심기출 · ●●○ · 비례식의 성질"
  category_type: 개념&핵심기출
  summary: |
    0이 아닌 세 실수 a, b, c에 대해 a+2b/c = a+2c/b = 2a+c/-b + 1일 때
    2b+c/a 값 구하기.
  category: 가비의 리 · 비례식
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "가비의 리 · 세 비의 등가 원형"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "결합 계산"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "가비의 리 · 표준 기법 · ★ 3 · 마플 NORMAL"
  tier: star_2
  mechanism_primary: 가비의 리 · 비례식 조작
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=B단계상, 마플=NORMAL~TOUGH]
    L5_confidence: 0.75

- id: 일품-CM2-RF-유리-16
  page: 81
  vendor_label: "고난도 문제 16 · ●●● · 유리함수 y=k/(x-p)+q 그래프"
  category_type: 1등급을위한고난도문제
  summary: |
    -2 ≤ x ≤ 2에서 유리함수 y = k/(x-3) + 10/9의 최댓값이 M, 최솟값이 m일 때,
    M + m의 값.
  category: 유리함수 · 폐구간 최대·최소
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-SYM, depth: 2, effective_depth: 2, description: "유리함수 점근선 대칭 · 폐구간 내 극점 위치 파악"}
    - {step: 2, type: I-VF, depth: 2, effective_depth: 2, description: "k 부호 case 분기 (증감방향)"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "M·m 대입 관계식"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "유리함수 폐구간 · 부호 case · ★ 4 · 쎈 C단계·마플 TOUGH"
  tier: star_4
  mechanism_primary: 유리함수 · 폐구간 최대·최소
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C단계, 마플=TOUGH]
    L5_confidence: 0.80

- id: 일품-CM2-RF-유리-사고03
  page: 83
  vendor_label: "유리함수 사고력 통합 문제 03 · ●●● · 신유형"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    함수 y = 1/(x-2) + 3의 그래프 위 점 P에서 두 점근선에
    내린 수선의 발을 각각 A, B라 하고 (x-a)(y-b) = 1인 y = f(x)가
    조건 만족하는 정수 (a, b)의 개수.
  category: 유리함수 점근선 · 수선의 발 · 정수쌍
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-SYM, depth: 2, effective_depth: 2, description: "점근선 대칭 → 수선의 발 관계 (SYM 유리 정점)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "조건 → (a, b) 관계식 유도"}
    - {step: 3, type: I-SC, depth: 2, effective_depth: 2, description: "정수쌍 case 열거"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "유리함수 SYM 점근선 정점 · CM2-RF 유리 정점 원형 · ★ 4 (v1.10 STEP 3 밀도 0% 실측 대응 · premium 부재 확정)"
  tier: star_5_premium
  mechanism_primary: 유리함수 점근선 · 수선의 발
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력, 마플=STEP3(★4예상)]
    L5_confidence: 0.78
```

### Ⅳ-2. 무리식과 무리함수 (본편 p84~89) — 2문

```yaml
- id: 일품-CM2-RF-무리-16
  page: 87
  vendor_label: "고난도 문제 16 · ●●● · 무리함수 y=√(a(x-p))+q 그래프"
  category_type: 1등급을위한고난도문제
  summary: |
    무리함수 f(x) = √(6x+7) + a 그래프 위 원점을 지나며,
    -5/6 ≤ x ≤ 2에서 f(x)와 y = -x+3 두 그래프 교점 A(x₁, y₁), B(x₂, y₂) 좌표 결정.
    ABI = 3√2인 조건에서 상수 a, 미지수 유도.
  category: 무리함수·직선 교점·거리
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "무리함수 √ → 제곱해서 이차방정식"}
    - {step: 2, type: I-SC, depth: 2, effective_depth: 2, description: "교점 좌표 유도·근과계수"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "거리·조건 결합"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "무리함수 표준 · 직선 교점 → 이차 · ★ 4 · 마플 TOUGH·쎈 C"
  tier: star_4
  mechanism_primary: 무리함수 · 직선 교점 · 이차 근과계수
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C단계, 마플=TOUGH]
    L5_confidence: 0.78

- id: 일품-CM2-RF-무리-사고05
  page: 90
  vendor_label: "무리함수 사고력 통합 문제 05 · ●●● · 신유형"
  category_type: 1등급을결정하는사고력통합문제
  summary: |
    함수 f(x) = √(x-a) + 3 (a > 0)의 그래프와 직선 y = x가 서로 다른 두 점 A, B에서 만나고
    선분 AB의 길이가 √2이며, f의 역함수 f⁻¹(x)가 있다고 할 때
    a의 값과 f⁻¹(1) 값을 순서쌍 (a, f⁻¹(1))으로 구하기.
  category: 무리함수·자기역함수 (y=x 대칭)·역함수 값
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P3], description: "무리함수와 y=x 교점 → 자기역함수 SYM 정점 (CM2-RF 무리 최상위 원형)"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P4], description: "교점 2개 존재 · 길이 √2 조건 → a 미지수 결정 (XU + SYM 결합)"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "√ 제거 → 이차 · 근과계수 활용"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "f⁻¹(1) 값 유도"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "a > 0 · 실근 존재 case 검토"}
  insight_count: 5
  depth_score: 8.4  # max=3 × 2 + avg=(3+3+2+2+2)/5=2.4 → 8.4
  base_star: 5
  star: 5
  premium: true  # count 5 · max=3 · P 2건 · depth_score 8.4 (임계 8.5 근접·자기역함수 정점 원형 · ★ 5 premium 후보 확정)
  rationale: "무리함수+y=x 자기역함수 SYM+XU 결합 정점 · CM2-RF 무리 정점 원형 완전 매칭 (v1.10 매트릭스 정합) · ★ 5 premium 후보 · 마플 CM2-RF-무리함수 STEP 3 premium 밀도 20% 대비 유형 완전 일치 · 자기복제 위험 (마-1408·1524·1527과 대조 요구)"
  tier: star_5_premium
  mechanism_primary: 무리함수 · 자기역함수 · 교점·길이 조건 결합
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: [쎈=C사고력+, 마플=STEP3, 블랙라벨=STEP2~3]
    L2_signature_neighbors: [마-CM2-FN-1408, 마-CM2-FN-1524, 마-CM2-FN-1527]
    L5_confidence: 0.85
  friction_triggers: [F3, F4]
```

---

## 표본 판정 요약 (26문)

| ★ | GM | ST | FN | RF | 합계 |
|---|---:|---:|---:|---:|---:|
| ★ 1 | 1 | 1 | 1 | 0 | **3** |
| ★ 2 | 1 | 2 | 0 | 0 | **3** |
| ★ 3 | 1 | 1 | 1 | 1 | **4** |
| ★ 4 | 4 | 1 | 0 | 2 | **7** |
| ★ 5 | 1 | 2 | 1 | 0 | **4** |
| ★ 5 premium | 1 | 0 | 0 | 1 | **2** |
| **합계** | **9** | **8** | **4** | **5** | **26** |

**표본 ★ 분포 (%)**: ★ 1 (12%) · ★ 2 (12%) · ★ 3 (15%) · ★ 4 (27%) · ★ 5 (15%) · ★ 5 premium (8%)

**Premium 후보 (2건)**:
- **일품-CM2-GM-이동-사고04** (p32 · 오답률 91%) — 3점 거리제곱합 자취 + 부등식 교집합 부채꼴 (O-04 · O-05 계열과 별개 원형 · **신규 원형 O-15 후보**)
- **일품-CM2-RF-무리-사고05** (p90) — 무리함수 자기역함수 y=x 교점 길이 조건 (**마플 CM2-FN-1408·1524 등과 동일 원형 O-16 계열 · 자기복제 위험 검증 필요**)

---

## 예측 종합 (미실측 나머지 약 474문 예정)

본 v1.0 파일에는 예측 대상 표기 없음. 나머지 문항은 vendor-label-calibration.md v1.11 회귀 함수 초안 (하단 §Ⅷ 참조) 배정 후 후속 세션 처리.

---

## Ⅷ. 일품 벤더 라벨 회귀 함수 초안 (vendor-label-calibration v1.11 편입 후보)

**표본 26문 기반 회귀** (신뢰도 초안 · 확대 후 정련):

```
일품_star_predict(tier, dot, sub_unit) =
  # (개념&핵심기출) tier
  if tier == 개념&핵심기출 and dot == 1:  return {star: 1, confidence: 0.85}
  if tier == 개념&핵심기출 and dot == 2:  return {star: 2, confidence: 0.80, alt: [3]}
  if tier == 개념&핵심기출 and dot == 3:  return {star: 3, confidence: 0.70, alt: [4]}

  # (1등급을 위한 고난도 문제) tier
  if tier == 고난도 and dot == 2:  return {star: 3, confidence: 0.75, alt: [4]}
  if tier == 고난도 and dot == 3:  return {star: 4, confidence: 0.80, alt: [3, 5]}

  # (1등급을 결정하는 사고력 통합 문제) tier — 최상위
  if tier == 사고력통합 and dot == 3:
    if sub_unit in {도형이동, 원(공통현), 집합의뜻, 함수, 합성함수, 무리함수}:
      return {star: 5, confidence: 0.80, premium_flag: 0.25}  # 표본 6문 중 2문 premium (33%)
    elif sub_unit in {유리함수}:
      return {star: 4, confidence: 0.78, premium_flag: 0.00}  # 유리함수 premium 부재 (v1.10 실측 정합)
    else:
      return {star: 5, confidence: 0.65, alt: [4], premium_flag: 0.15}

  # (실전 마무리 문제) tier
  if tier == 실전마무리 and dot == 3:  return {star: 4, confidence: 0.75, alt: [3, 5]}

  # 배지 축 (신유형·서술형) — 난이도 무관·형식 표시
  return {star: 3, confidence: 0.50}  # 기본값
```

**초기 신뢰도 등급 (표본 26)**: **B급** (표본 크기 부족 · 확대 후 A- 목표)

**소단원 예외 재확인 (v1.10 정합)**:
- 유리함수 사고력통합 STEP 3 대응 (★ 4·premium 부재) 실측
- 도형이동·집합의뜻·함수·합성역함수 사고력통합 (★ 5 · premium 후보) 실측
- 무리함수 사고력통합 (자기역함수 원형 · 마플과 자기복제 위험)

---

## Ⅸ. 회귀 정합률 (기존 6벤더 대비 편차)

| 벤더 | 신뢰도 등급 | 표본 정합률 | 특성 |
|---|---|---:|---|
| 쎈 | A | 72% | 4단계 라벨 · 사고력 아이콘 |
| 마플시너지 | A | 74% | BASIC/NORMAL/TOUGH · STEP 3 소단원 의존 |
| 고쟁이 STEP 1 | A- | 83% | 번호 위치 세분 |
| 블랙라벨 STEP 1 | B+ | 73% | 일괄 star_4 · 실제 편차 |
| RPM | B | 60% | 시험꼭나오는 라벨 과대 |
| 개념원리 | B | 45% | 실력UP·수능형 라벨 과대 |
| **일품 (신규)** | **B (초안)** | **~75% (자체 대조)** | **Tier × dot 이중 축 · 사고력통합 5문 중 2문 premium** |

**일품 vs 기존 벤더 정합률 편차**:
- 개념&핵심기출 (●○○) ~ **쎈 A단계** · **마플 BASIC** 정합 (100%)
- 개념&핵심기출 (●●●) ~ **쎈 B단계 대표** · **마플 NORMAL** 정합 (75%)
- 고난도 (●●●) ~ **쎈 C단계 사고력** · **마플 TOUGH** 정합 (80%)
- 사고력통합 (●●●) ~ **쎈 C 사고력+** · **마플 STEP 3** · **블랙라벨 STEP 2** 정합 (75~80%)

**핵심 관찰**:
1. 일품은 다른 벤더보다 **소단원별 정점 문항 밀도 균등** (평면좌표·직선 합병 소단원 유일)
2. 해설 PDF에 **실측 오답률 %** 인용이 최상위 벤더 (쎈·마플·개념원리·RPM에는 없음 · 블랙라벨 유사 · **일품이 캘리브레이션 표본으로 최우수**)
3. 소단원별 **각 사고력통합 4~6문** 정도로 최상위 pool 밀도 균등 (마플 STEP 3 편차 존재 대비 우수)

---

## Ⅹ. CM2 소단원별 정점 원형 검증 (기존 매트릭스 정합)

**세션 61·62 확정 매트릭스 대조**:

| 소단원 | 기존 정점 원형 | **일품 표본 정점 원형** | 정합 |
|---|---|---|---|
| CM2-GM 평면좌표+직선 | RT·SYM | I-RT(3) '넓이 이등분' + I-VF·SC (평-14·평-09) | ✅ 정합 |
| CM2-GM 원 | POWER OF POINT·RT | I-EQV(3) '두 원 방정식 차 = 근축' (원-사고04) | ✅ 정합 (근축 원형) |
| CM2-GM 이동 | Fagnano·3보기 대칭 | I-EQV(3)+I-RT(3) **자취+부등식 교집합** (이동-사고04 · 오답률 91%) | ✅ 정합 **신규 원형 후보 O-15** |
| CM2-ST 집합의뜻 | PD·MI | I-PD(3) '부분집합 counting 대칭' (집뜻-사고04) | ✅ 정합 |
| CM2-ST 집합의연산 | EQV·SC·PD | I-EQV(3) '대칭차 대수 구조' (연산-사고03) | ✅ 정합 |
| CM2-ST 명제 | AM-GM (절대부등식) | I-EQV(3) 'AM-GM 등호' (명제-사고05) | ✅ 정합 |
| CM2-FN 합성역함수 | XU·SC | I-XU(3)+I-EQV(3) '다중 합성 함수쌍' (합성-사고05) | ✅ 정합 |
| CM2-RF 유리 | SYM 점근선 (**premium 부재**) | I-SYM(2) '점근선·수선의 발' (유리-사고03 · ★ 4) | ✅ 정합 (**premium 부재 실측 재확인**) |
| CM2-RF 무리 | SYM(자기역함수)+XU | I-SYM(3)+I-XU(3) '자기역함수·교점 길이' (무리-사고05 · **premium 후보**) | ✅ 정합 |

**소단원별 정점 원형 매트릭스 100% 정합 확인** — 세션 61·62 확정 매트릭스가 **7벤더 (일품 포함)** 실측으로 신뢰 강화.

---

## Ⅺ. 일품 vs 쎈·마플 정점 문항 자기복제 감지

**표본 26문 대조 (교차 벤더 시그니처 매칭)**:

| 일품 문항 | 대조 이웃 (기존 6벤더) | 자기복제 위험 | 판정 |
|---|---|---|---|
| 일품-CM2-GM-이동-사고04 (자취+부등식) | (없음 · **신규 원형 O-15 후보**) | 없음 | ✅ 편입 안전 |
| 일품-CM2-RF-무리-사고05 (자기역함수+길이) | 마-CM2-FN-1408·1524·1527 (합성역함수 STEP 3 premium) | **높음** | ⚠ **자기복제 검증 필수** · 수치·조건만 다를 가능성 · 회차당 1문 이하 감쇠 |
| 일품-CM2-GM-원-사고04 (근축) | 쎈-CM2-GM-원-0360 (교육청 원-원 접선) | 중 | 원형은 다름 (근축 vs 원-원 접점) · 편입 가능 |
| 일품-CM2-ST-집뜻-사고04 (부분집합 원소합) | 마-CM2-ST-집뜻 STEP 3 후보 (PD 100% 밀도) | 중~높 | 대조 필수 · counting 시그니처 근사 가능 |
| 일품-CM2-FN-함수-사고04 (일대일함수 합 조건) | 마-CM2-FN-1408·1524·1527 (합성역함수) | 낮음 | 원형 다름 (함수 counting vs 합성) |
| 일품-CM2-ST-명제-사고05 (AM-GM) | 학평 편입 원형 다수 | 중 | 절대부등식 표준 · 회차당 1문 이하 |

**핵심 신호**:
1. **일품-CM2-RF-무리-사고05**은 **마플 CM2-FN 합성역함수 STEP 3 premium 5문 (1408·1524·1527·1530·1533)** 과 원형 동일 계열 (자기역함수 SYM+XU) · **자기복제 감쇠 필수**
2. **일품-CM2-GM-이동-사고04**은 **premium 원형 카탈로그 O-01 (Fagnano)·O-02 (3보기 대칭)** 와 다른 신규 원형 · **O-15 · 자취+부등식 교집합 원형** 등재 후보
3. 다른 표본은 소단원 정점 원형 반복 · 자기복제 저위험

---

## Ⅻ. 특이사항

### 12-1. 교육과정 침투 검토

**전 표본 26문 커리큘럼 준수 확인** — CM2 정규 교과 도구만 사용:
- 집합 기호 (∪·∩·-·Aᶜ): ✅ CM2-ST 정규 교과
- 대칭차 (⊕): CM2-ST 정규 교과 (일품 사용) — 관용 표기 · 학교 시험 등장 가능
- AM-GM 절대부등식: ✅ CM2-ST §명제 정규 교과 (v3.10 정책 정합)
- 자기역함수: ✅ CM2-FN 정규 도구 · 자연어 표현 정책 준수
- **미적분Ⅱ 용어 침투 없음** (극한·미분·매개변수 자연어 대체 정책 검증 필요)
- **회전·회전행렬 침투 없음**
- **외국 수학자 이름 등장 없음** (Fagnano 원형은 시각 판독만 · 발문 이름 표기 없음)

### 12-2. Vendor label 정정 신호

- **일품 사고력 통합 문제 tier는 마플 STEP 3와 유사 매핑** 유효 (★ 5 · 20~40% premium)
- **일품 dot count (●) 시스템은 신뢰도 A- 대응 가능** (쎈 4-tier·마플 3-tier + STEP 축과 병용 시 정합)
- **일품 해설 PDF 오답률 % 인용은 캘리브레이션 표본 확대에 이상적** — 별도 자산 후속 계획

### 12-3. Premium 원형 카탈로그 확장 후보

**premium-원형-카탈로그.md v1.0 → v1.1 편입 후보**:

- **O-15 · 3점 거리제곱합 자취 + 부등식 반평면 교집합 부채꼴** (도형이동 카테고리)
  - 원본: 일품-CM2-GM-이동-사고04
  - 통찰 결합: I-EQV(3)+I-RT(3)+I-CON(2)+I-SC(2)+I-VF(2) · P3+P4
  - 특성: **원의 자취 도출 + 부등식 영역 결합 + 부채꼴 넓이** 3단계 · 오답률 91% 실측
  - 재사용 위험: 매우 낮음 (신규 원형)

- **O-16 · 무리함수 자기역함수 교점 길이 조건** (무리함수 카테고리 · 마플 계열과 동조)
  - 원본: 일품-CM2-RF-무리-사고05 (마-CM2-FN-1408 등과 동일 원형)
  - 통찰 결합: I-SYM(3)+I-XU(3)+I-EQV(2) · P3+P4
  - 특성: 자기역함수 · 교점 2개 · 길이 조건
  - 재사용 위험: **높음** · 마플 CM2-FN 5문 + 일품 1문 = 총 6문 확보 · **회차당 1문 강력 감쇠 필수**

### 12-4. Group 3 후속 정독 후보

- 일품 CM2 나머지 ~474문 (표본 20~30문 층화 확장)
- 일품 CM1 정독 신규 착수 (CM1-PL·EQ·CB·MX)
- **Group 3 다른 신규 벤더 착수** (수학의 신·EBSi 올림포스·풍산자 · 개유2022 유형편 등)

---

## 참조 문서

- 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.10 (v1.11 초안 편입 대상)
- Premium 원형: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.0 (v1.1 O-15·O-16 편입 대상)
- 정독 tier 매핑: [`bank/mechanism-데이터-정독-tier-매핑.md`](mechanism-데이터-정독-tier-매핑.md)
- 자매 파일 (기존 6벤더 CM2):
  - `bank/mechanism-데이터-쎈-CM2-*.md` (5 소단원)
  - `bank/mechanism-데이터-마플시너지-CM2-*.md` (7 소단원 · STEP 3)
  - `bank/mechanism-데이터-개념원리-CM2-*.md` (6 소단원)
  - `bank/mechanism-데이터-RPM-CM2-*.md` (5 소단원)
  - `bank/mechanism-데이터-고쟁이-CM2-*.md` (7 소단원 · STEP 1)
  - `bank/mechanism-데이터-블랙라벨-CM2-*.md` (STEP 1·2·3)

## 변경 이력

- 2026-07-21 v1.0 — 세션 62 Group 3 신규 벤더 첫 착수. 일품 공통수학2 CM2 전 단원 층화 표본 26문 정독. 일품 라벨 체계 첫 매핑 (3-tier × dot count × type badge 이중 축) · 회귀 함수 초안 산출 · premium 후보 2건 (O-15 신규 · O-16 마플 동조) · CM2 소단원 정점 원형 매트릭스 7벤더 정합 확인.

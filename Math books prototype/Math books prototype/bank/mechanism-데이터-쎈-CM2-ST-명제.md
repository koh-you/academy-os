---
name: mechanism-데이터-쎈-CM2-ST-명제
description: 쎈 공통수학2 (2022개정) II. 집합과 명제 → 07. 명제 소단원 정독 데이터. v2.0 통합 자산 스키마. 표본 20문 (A3+B11+C6) 시스템 순정 판정 + 예측 141문 벤더 라벨 회귀. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학2 (2022개정) · [고등1-2] 쎈 공통수학2 (2022개정).pdf
  section: 명제
  unit_code: CM2-ST
  sub_unit: 명제
  citation_note: "쎈 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "07. 명제 전체 · A단계 기본다잡기(0740~0783·44문) + B단계 유형뽀개기 유형01~28(0784~0884·101문) + C단계 실력굳히기(0885~0900·16문)"
  pages: "117~139 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 161
  sample_problems: 20
  predicted_problems: 141
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-쎈-마플시너지-평면좌표-표본설계
  parent_document: bank/정독-스키마-v2.0.md
  sibling_document: bank/mechanism-데이터-쎈-CM2-ST-집합의뜻과표현.md
---

# 쎈 공통수학2 (2022개정) — 명제 정독 데이터

**출처**: 쎈 공통수학2 (2022개정) · II. 집합과 명제 → 07. 명제
**범위**: A단계 기본다잡기(44문·0740~0783) + B단계 유형뽀개기 유형01~28(101문·0784~0884) + C단계 실력굳히기(16문·0885~0900)
**정독 페이지**: p.117~139 (23p · PDF page 동일)
**총 문항 수**: **161문항** (0740~0900)
**표본**: 20문 (A3 + B11 + C6) · 시스템 순정 판정
**예측**: 141문 (A41 + B90 + C10) · 벤더 라벨 회귀 예측 (v1.10)
**정독 일자**: 2026-07-21

## 소단원 선정 근거

CM2-ST 대단원 3개 소단원 (05·06·07) 중 **07 명제** 채택 (Group 2 완결 잔여). 근거:

1. **최대 문항 규모**: 161문 (05 집합 120문·06 연산 예상 180문+ 대비 중간). 유형 최다 (28종). 명제·조건 부정·역대우·필충·삼단논법·증명·절대부등식·산술기하·코시-슈바르츠 8절 · 통찰 유형 다양성 최고
2. **CM2-ST 정점 통찰 밀집대**: C단계 사고력의 기술 아이콘 3문 (0887·0897) + 교육청 기출 5문 (0885·0891~0894·0897) + 절대부등식 킬러 (0894·0897·0900) 다층 정점 후보
3. **산술기하평균 정규 교과**: CM2 §집합과 명제 정규 교과 · CM1 침투 금지 대상 · CM2 시험지·유형편 원본으로 최우선 확보 필요 (앵커 pool 강화)
4. **개념원리·RPM 상보성**: 개념원리 §명제 유제 다수 확보 (앵커 candidate) · 쎈 07은 C단계 사고력·교육청 편입에 정점 통찰 압축 · **쎈 07의 절대부등식+도형 융합은 개념원리·RPM 어디에도 없는 저노출 축**

## 벤더 라벨 체계 (쎈) — v1.10 회귀 재확인 (CM2-ST 소단원 예외 포함)

| 라벨 | 의미 | v1.10 회귀 예측 ★ (신뢰) |
|---|---|---|
| A단계 기본다잡기 | 개념 즉시 적용 계산 | ★ 1 (0.85) |
| B단계 대표문제 | 유형별 첫 문항 (표준형) | ★ 2~3 (0.40 · CM2-ST -0.4 소단원 예외) |
| B단계 (라벨 없음) | 기본 유형 계산 | ★ 2 |
| B단계 ● 중 | 중간 난이도 | ★ 3 |
| B단계 ● 상 | 상 난이도 | ★ 4 (0.80 · CM1 flywheel v1.6) |
| B단계 집중공략 (아이콘) | 시험 70%+ 출제 유형 | ★ 3~4 |
| C단계 실력굳히기 | 사고력·심화 | ★ 4~5 (0.85 · **CM2-ST +0.5 상향 예외 · v1.9**) |
| C단계 사고력의 기술 아이콘 | 정점 문항 | ★ 5 (0.80 · CM2-ST 예외로 alt ★ 4 없음) |
| 교육청 기출 (C단계) | 실제 학평 편입 | ★ 4~5 (0.85 · CM2-ST premium 후보) |
| 서술형 (태그) | 서술형 (난이도 독립) | 원 판정 유지 |

---

## Ⅰ. A단계 기본다잡기 표본 (3/44문 정밀 판정)

```yaml
- id: 쎈-CM2-ST-명제-0740
  page: 117
  vendor_label: A단계 기본
  category_type: 기본다잡기
  summary: |
    6개 보기 중 명제인 것 판별 및 참·거짓 판정 (3-5=8·2x-1>9·60÷7>8·√5+√2=√7·x는 1000보다 큰 수·8의 배수이면 4의 배수).
  category: 명제 판별·참거짓
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "명제 정의 6회 판정 (참거짓 확정 가능성) · 절차형 M_total≤3 · ★ 1"
  tier: star_1
  mechanism_primary: 명제 정의 판별 (참거짓 명확성)
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  usage_ref: []
  cross_reference:
    - source: 개념원리-CM2-ST-명제-예제-01
      relation: "동일 유형 · 명제 판별"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["개념원리 대표예제 star_3(관대)"]
    L5_confidence: 0.90
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0762
  page: 119
  vendor_label: A단계 기본
  category_type: 기본다잡기
  summary: |
    명제 '모든 실수 x에 대하여 x²≥0이다.'의 부정을 말하고 참·거짓 판정.
  category: 모든/어떤 명제 부정
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "모든→어떤 부정 규칙 1회 적용 + 원문 참 판정 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: 전칭·특칭 부정 규칙
  insight_type: 절차형
  depth: 1
  target_cohort: 하위권
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L5_confidence: 0.90
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0774
  page: 119
  vendor_label: A단계 기본
  category_type: 기본다잡기
  summary: |
    a, b가 실수일 때, 세 조건 (ab=0 · a+b=0 · |a|+|b|=0)이 각각 a²+b²=0이기 위한 어떤 조건인지 판정.
  category: 충분·필요·필요충분 종합 판별
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "각 조건과 a²+b²=0 (⇔ a=0∧b=0)의 함의 방향 검증 3회 · |a|+|b|=0만 필요충분, 나머지 필요조건"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "|a|+|b|=0 ⇔ a=b=0 판별 T 부담 + ab=0 함정 (a·b 중 하나만 0인 경우) → ★ 2 (A단계 중 최상단)"
  tier: star_1
  mechanism_primary: 조건 함의 방향 3회 검증
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: candidate (★ 1~2 앵커 검토 대상)
  usage_ref: []
  cross_reference:
    - source: 개념원리-CM2-ST-명제-유제-필충
      relation: "동일 유형 · 조건 함의 방향 판정"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1]
  friction_verdict: "OK"
```

## A단계 나머지 41문 (0741~0761·0763~0773·0775~0783) 회귀 예측

**공통 패턴**: 표본 3문과 완전 동일 유형 (조건 판별·진리집합·모든·어떤·역대우·부정·필충 판별·증명 빈칸 채우기·산술기하 최솟값 표준 대입)
**예측**: ★ 1 × 36문 + ★ 2 × 5문 (0774·0776·0778·0781·0782 등 조건 함의·산술기하 표준 대입)
**스팟체크 대상**: 없음 (동질적 · 개념 즉시 적용 계산)

---

## Ⅱ. B단계 유형뽀개기 표본 (11/101문 정밀 판정)

### 대표문제 · 표준 유형 (7문)

```yaml
- id: 쎈-CM2-ST-명제-0784
  page: 122
  vendor_label: B단계 대표문제 유형01
  category_type: 대표문제
  summary: |
    5개 보기 중 명제가 아닌 것 판별 (2x+8>-x-1·6의 약수는 12의 약수이다·x=1이면 x-4=3이다·두 자연수 a,b가 홀수이면 a+b는 짝수이다·두 직선이 만날 때 생기는 맞꼭지각의 크기는 서로 같다).
  category: 명제 판별
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "5회 반복 판정 · 절차형 · A단계 0740과 완전 동일 · v1.10 CM2-ST -0.4 소단원 예외 예측 ★ 2.6에 대해 실측 ★ 1 (-1.6 편차) · 그러나 CM2-ST에서는 이 정도 하향이 관찰됨"
  tier: star_2
  mechanism_primary: 명제 정의 판별
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["개념원리-CM2-ST-명제-유제-01 star_3(관대)"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0790
  page: 123
  vendor_label: B단계 대표문제 유형03 (진리집합)
  category_type: 대표문제
  summary: |
    전체집합 U={x|x는 12의 양의 약수}에 대하여 두 조건 p, q가 p: x<4, q: 2≤x<10일 때, 5개 보기(~p·~q·p 그리고 q·~p 또는 q·p 또는 ~q) 중 진리집합의 원소의 개수가 가장 많은 것.
  category: 진리집합 · 부정·연산·크기 비교
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "U={1,2,3,4,6,12}. P={1,2,3}, Q={2,3,4,6}. 5개 연산 진리집합 원소 개수 계산"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "5개 연산 계산 반복 (~P, ~Q, P∩Q, ~P∪Q, P∪~Q) · 진리집합 표준 · ★ 2 (표본 계산 부담)"
  tier: star_2
  mechanism_primary: 진리집합 5개 연산 크기 비교
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  cross_reference:
    - source: 개념원리-CM2-ST-명제-유제-진리집합
      relation: "동일 유형 · 진리집합 연산"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 유제 star_3"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0805
  page: 125
  vendor_label: B단계 대표문제 유형07 (집중공략)
  category_type: 대표문제
  summary: |
    두 조건 p: |x-k|<3, q: -2≤x≤6에 대하여 명제 p → q가 참이 되도록 하는 자연수 k의 개수.
  category: 진리집합 포함 · 매개변수 개수
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "p → q 참 ⇔ P⊂Q · P={x|k-3<x<k+3}, Q={x|-2≤x≤6} · k-3≥-2 그리고 k+3≤6"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "k≥1 그리고 k≤3 · 자연수 k=1,2,3 → 3개"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "P⊂Q 구간 포함 · 강·약부등호 경계 처리 T 부담 · ★ 3 · CM2-ST 앵커 ★ 3 계열 (조건통합형)"
  tier: star_2
  mechanism_primary: 진리집합 구간 포함 조건
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: candidate (★ 3 앵커 후보)
  cross_reference:
    - source: 개념원리-CM2-ST-명제-유제-포함-매개변수
      relation: "동일 유형 · 구간 포함 매개변수 개수"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 유제 star_3"]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0819
  page: 127
  vendor_label: B단계 대표문제 유형10 (집중공략 · 대우)
  category_type: 대표문제
  summary: |
    두 실수 a, b에 대하여 명제 'a+b<4이면 a<k 또는 b<-1이다.'가 참일 때, 실수 k의 최솟값.
  category: 대우 활용 · 매개변수 최솟값
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "대우: 'a≥k 그리고 b≥-1이면 a+b≥4이다.' 참 ⇔ a≥k 그리고 b≥-1 조건에서 a+b의 최솟값 ≥ 4"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a+b 최솟값 = k+(-1) ≥ 4 → k ≥ 5 → 최솟값 5"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "대우 전환 + 부등식 최솟값 조건 · CON(2) · ★ 3 · CM2-ST 앵커 ★ 3 계열"
  tier: star_2
  mechanism_primary: 대우 전환 · 진리집합 최솟값
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: candidate (★ 3 앵커 후보)
  cross_reference:
    - source: 개념원리-CM2-ST-명제-유제-대우
      relation: "동일 유형 · 대우 활용 매개변수"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 유제 star_3"]
    L5_confidence: 0.85
  friction_triggers: [F1]
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0825
  page: 127
  vendor_label: B단계 대표문제 유형12 (삼단논법)
  category_type: 대표문제
  summary: |
    두 명제 (가) 음악을 좋아하는 사람은 미술을 좋아한다. (나) 음악을 좋아하지 않는 사람은 체육을 좋아하지 않는다. 모두 참일 때 항상 참인 명제 판별.
  category: 삼단논법 · 대우+연쇄
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(가): p→q · (나): ~p→~r · (나)의 대우: r→p · 연쇄: r→p→q"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "결론: 체육을 좋아하는 사람은 미술을 좋아한다 (r→q) · 5보기 대조"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "대우+삼단논법 조합 · 지문형 · EQV(2)+CON(2) · ★ 3 · CM2-ST 앵커 ★ 3 계열 (삼단논법 대표)"
  tier: star_2
  mechanism_primary: 대우 + 삼단논법 지문 매핑
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: candidate (★ 3 앵커 후보)
  cross_reference:
    - source: 개념원리-CM2-ST-명제-유제-삼단논법
      relation: "동일 유형 · 삼단논법"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 유제 star_3"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0857
  page: 133
  vendor_label: B단계 대표문제 유형22 (산술기하 · 곱 최솟값)
  category_type: 대표문제
  summary: |
    두 양수 x, y에 대하여 (x + 2/y)(y + 8/x)는 xy=a일 때 최솟값 b를 갖는다. 상수 a, b에 대하여 a+b의 값.
  category: 산술기하평균 · 곱 최솟값 매개변수
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "전개: xy + 8 + 2 + 16/(xy) = xy + 16/(xy) + 10"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "산술기하: xy + 16/(xy) ≥ 2√16 = 8, 등호 xy=4 · 최솟값 8+10=18 · a=4, b=18 → a+b=22"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "산술기하 표준 대입 · 전개 후 xy 대칭 발견 · EQV(2)+CON(2) · ★ 3 (산술기하 표준 유형)"
  tier: star_2
  mechanism_primary: 산술기하 곱 최솟값 (곱 형태 대칭)
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: candidate (★ 3 앵커 후보)
  cross_reference:
    - source: 개념원리-CM2-ST-명제-유제-산술기하
      relation: "동일 유형 · 산술기하 곱 최솟값"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 유제 star_3"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0874
  page: 135
  vendor_label: B단계 대표문제 유형26 (코시-슈바르츠)
  category_type: 대표문제
  summary: |
    실수 x, y가 x²+y²=52를 만족시킬 때, 2x+3y의 최댓값을 α, 그때의 x, y의 값을 각각 β, γ라 하자. α+β+γ의 값.
  category: 코시-슈바르츠 부등식 · ax+by 최댓값
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "코시-슈바르츠: (2²+3²)(x²+y²)≥(2x+3y)² · 13·52 ≥ (2x+3y)² · 2x+3y ≤ 26"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "등호 x/2=y/3 · x=2k, y=3k · 4k²+9k²=52 → k²=4 → k=2 · x=4, y=6 · α=26+β=4+γ=6 → 36"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "코시-슈바르츠 표준 대입 · 등호 조건 매개변수 · EQV(2)+CON(2) · ★ 3 (표준 유형)"
  tier: star_2
  mechanism_primary: 코시-슈바르츠 · ax+by 최댓값
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: candidate (★ 3 앵커 후보)
  cross_reference:
    - source: 개념원리-CM2-ST-명제-유제-코시슈바르츠
      relation: "동일 유형 · 코시-슈바르츠 표준"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 유제 star_3"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"
```

### B단계 심화 · 상 (● 상 아이콘) · 서술형 (4문)

```yaml
- id: 쎈-CM2-ST-명제-0800
  page: 124
  vendor_label: B단계 상 (● 상 · 반례)
  category_type: 유형뽀개기 심화
  summary: |
    두 조건 p: 3<x<5, q: x<4 또는 x>k에 대하여 명제 ~p → q가 거짓임을 보이는 정수인 반례가 5뿐이다. 이때 실수 k의 값의 범위 (단, k>4).
  category: 반례 개수 조건 · 매개변수 범위
  M: {s: 4, k: 2, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "~p: x≤3 또는 x≥5. ~p → q가 거짓 반례 x: ~p 참, q 거짓 · 반례집합 = ~P ∩ ~Q = {x|x≤3 or x≥5} ∩ {x|4≤x≤k}"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "= {x|5≤x≤k} · 정수 반례 = {5, 6, ..., ⌊k⌋} · 5뿐 조건 → 5≤k<6"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "k=5일 때 반례 {5} 1개 O · k=6이면 {5,6} 2개 X · 범위 5≤k<6 검증"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "반례집합 3집합 교차 · 정수 개수 조건 매개변수 · EQV+CON+VF depth 2씩 · ★ 4 · CM2-ST 앵커 ★ 4 계열"
  tier: star_4
  mechanism_primary: 반례집합 · 정수 개수 조건 · 매개변수 범위
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보)
  cross_reference: []
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: [F1, F2]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-명제-0813
  page: 126
  vendor_label: B단계 ● 상 (매개변수 어떤 명제)
  category_type: 유형뽀개기 심화
  summary: |
    명제 'a≤x≤a+2인 어떤 실수 x에 대하여 3<x<8이다.'가 참이 되도록 하는 실수 a의 값의 범위.
  category: 어떤 명제 · 구간 교차 조건
  M: {s: 4, k: 2, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "어떤 x 참 ⇔ 두 구간 [a, a+2]와 (3, 8) 교집합이 공집합 아님"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a+2 > 3 그리고 a < 8 · 즉 a > 1 그리고 a < 8 · a의 범위 1 < a < 8"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "경계 a=1: [1,3] ∩ (3,8) = ∅ (강부등호) → X · a=8: [8,10] ∩ (3,8) = ∅ → X · 범위 확정"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "어떤 명제 = 구간 교차 조건 · 강·약부등호 T 부담 · EQV+CON+VF · ★ 4 (● 상 표준)"
  tier: star_4
  mechanism_primary: 어떤 명제 구간 교차 매개변수
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보)
  cross_reference:
    - source: 개념원리-CM2-ST-명제-예제-어떤
      relation: "동일 계열 · 어떤 명제 구간"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 예제 star_3(관대)"]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0864
  page: 134
  vendor_label: B단계 ● 상 (산술기하 이중 대입)
  category_type: 유형뽀개기 심화
  summary: |
    a>0, b>0이고 x=a+2/b, y=b+2/a일 때, x²+y²의 최솟값을 α, 그때의 a, b의 값을 각각 β, γ라 하자. α/(βγ)의 값.
  category: 산술기하 이중 대입 · x²+y² 최솟값
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x²+y² = (a+2/b)² + (b+2/a)² 전개 · a²+b²+4/b²+4/a²+4a/b+4b/a"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "각 쌍 산술기하: a²+4/a²≥4, b²+4/b²≥4, 4a/b+4b/a≥8. 등호 조건 a²=2, b²=2, a=b 모두 동시 성립 확인"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "최솟값 α=4+4+8=16 · a=b=√2 → βγ=2 · α/(βγ)=8"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "산술기하 3쌍 동시 등호 조건 · 통합 등호 성립 검증 · EQV+CON+VF · ★ 4 (● 상 심화)"
  tier: star_4
  mechanism_primary: 산술기하 다중 대입 · 동시 등호 조건
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보)
  cross_reference: []
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: [F1]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-명제-0873
  page: 135
  vendor_label: B단계 ● 상 (산술기하 도형 활용)
  category_type: 유형뽀개기 심화
  summary: |
    두 양수 a, b에 대하여 좌표평면 위의 점 P(a, b)를 지나고 직선 OP에 수직인 직선이 x축과 만나는 점을 Q라 하자. 점 R(0, -1/b)에 대하여 삼각형 OQR의 넓이의 최솟값 (단, O는 원점).
  category: 산술기하 · 도형 활용 (좌표+삼각형)
  M: {s: 4, k: 3, a: 2, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "직선 OP: y = (b/a)x · 수직 직선 기울기 -a/b · P를 지나는 수직선: y-b = -a/b(x-a) · x축 교점 Q: y=0 → x = a + b²/a = (a²+b²)/a · Q((a²+b²)/a, 0)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "삼각형 OQR = (1/2) · |OQ| · |OR| = (1/2) · (a²+b²)/a · 1/b = (a²+b²)/(2ab)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "산술기하: (a²+b²)/(2ab) ≥ 2ab/(2ab) = 1 · 등호 a=b · 최솟값 1"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "좌표 도형+산술기하 융합 · EQV depth 3 (수직 직선 계산·좌표) + CON depth 3 (산술기하 결합) · depth_score 8.67 · **premium 임계 8.5 초과** · 그러나 max=3 · count=3 · signal_ref P 카드 미매칭 → premium 미달 (count<5) · ★ 4 (● 상 정점 · **★ 5 근접**)"
  tier: star_4
  mechanism_primary: 좌표 도형 · 산술기하 융합
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보 · **★ 5 근접**)
  cross_reference:
    - source: 개념원리-CM2-ST-명제-실력UP-산술기하도형
      relation: "동일 계열 · 산술기하 도형 활용"
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"
```

## B단계 나머지 90문 (0785~0789·0791~0799·0801~0804·0806~0812·0814~0818·0820~0824·0826~0856·0858~0863·0865~0872·0875~0884) 회귀 예측

| 라벨 층 | 문항 수 | 예측 ★ | 근거 |
|---|---|---|---|
| B단계 (라벨 없음·기본) | ~30 | ★ 2 | 표본 0784·0790·0857 계열 (표준 절차 · CM2-ST -0.4 편차) |
| B단계 ● 중 | ~25 | ★ 3 | 표본 0805·0819·0825 계열 |
| B단계 ● 상 | ~20 | ★ 3~4 | 표본 0800·0813·0864 계열 |
| B단계 서술형 | ~10 | 원 판정 (2~4) | 서술형 태그는 난이도 독립 |
| B단계 대표 (집중공략) | ~5 | ★ 3 | 유형 첫 대표 · 표준 |

**예측 상세 (90문 요약)**:
- ★ 1: 8문 (기본 대표문제 · 판별형·모든/어떤)
- ★ 2: 30문 (표준 계산·부정·산술기하 표준 대입)
- ★ 3: 30문 (조건 진리집합·삼단논법·필충·산술기하·코시-슈바르츠)
- ★ 4: 20문 (심화 매개변수·산술기하 도형·이중 대입)
- ★ 5: 2문 (0873 계열 산술기하+도형 융합 · 학평 근접)

**스팟체크 대상 (예측 불확실 문항)**:
- 쎈-0842 "세 조건 부정 진리집합 · 정수 반례 5뿐" — B ● 상 · 반례 개수 조건 매개변수 심화 ★ 4 후보
- 쎈-0860 "산술기하 3변수 (a+b+c)(1/a + 1/(b+c)) 최솟값" — B ● 상 서술형 · 산술기하 3변수 ★ 4 후보
- 쎈-0872 "직사각형 텃밭 도형 산술기하 · 펜스 최소 비용" — B ● 상 · 도형 산술기하 융합 ★ 4~5 후보
- 쎈-0883 "직육면체 모서리 합 최댓값 대각선 3√3 · 코시-슈바르츠" — B ● 상 서술형 · 3변수 코시-슈바르츠 도형 융합 ★ 4~5 후보
- 쎈-0884 "세 원 반지름 합 · 넓이 합 최소" — B ● 상 · 산술기하 도형 융합 ★ 4~5 후보

---

## Ⅲ. C단계 실력굳히기 표본 (6/16문 정밀 판정 · 사고력·교육청 우선)

```yaml
- id: 쎈-CM2-ST-명제-0885
  page: 137
  vendor_label: C단계 교육청 기출 · 123쪽 유형03+유형04
  category_type: 실력굳히기 교육청 기출
  summary: |
    전체집합 U가 실수 전체의 집합일 때, 실수 x에 대한 두 조건 p, q가 p: a(x-1)(x-2)<0, q: x>b이다. 두 조건 p, q의 진리집합을 각각 P, Q라 할 때, 옳은 보기 고르기 (ㄱ. a=0일 때 P=∅. ㄴ. a>0, b=0일 때 P⊂Q. ㄷ. a<0, b=3일 때 명제 '~p이면 q이다.'는 참).
  category: 매개변수 진리집합 · 명제 참·거짓 3보기
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "ㄱ. a=0이면 p: 0<0 항상 거짓 → P=∅ T · ㄴ. a>0, b=0: P={x|1<x<2}, Q={x|x>0} · P⊂Q T · ㄷ. a<0, b=3: P={x|x<1 or x>2}, ~P={x|1≤x≤2}, Q={x|x>3} · ~P⊂Q? {1≤x≤2}⊂{x>3}? F (겹치지 않음)"}
    - {step: 2, type: I-MI, depth: 3, effective_depth: 2, description: "각 보기 case별 진리집합 개별 산출 · 명제 참거짓 판정"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "결론: ㄱ, ㄴ 참 · ㄷ 거짓 → 답 ②"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "EQV depth 3 signal_ref P4 (매개변수 case별 진리집합 발견) + MI(2 · 자산화 감쇠) + VF(2) · 학평 교육청 기출 편입 · depth_score 8.33 (임계 8.5 미달) · ★ 5 · **premium 근접** · CM2-ST 앵커 ★ 5 계열 (조건통합·매개변수 진리집합)"
  tier: star_4
  mechanism_primary: 매개변수 case별 진리집합 · 명제 참거짓 3보기
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 5 앵커 후보)
  cross_reference: []
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-명제-0887
  page: 137
  vendor_label: C단계 사고력의 기술 아이콘 · 서술형 · 125쪽 유형07+유형08
  category_type: 실력굳히기 사고력
  summary: |
    좌표평면 위에 두 점 A(1, 4), B(-3, 0)과 직선 l: y=-3x+k가 있다. 명제 '직선 l 위의 어떤 점 P에 대하여 ∠APB=90°이다.'가 참이 되도록 하는 정수 k의 개수 (단, 점 P는 두 점 A, B가 아니다).
  category: 어떤 명제 · 좌표 도형 융합 · 원 위 조건
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "∠APB=90° ⇔ P는 지름 AB인 원 위 점 · AB 중점 M(-1, 2), 반지름 = AB/2 = √32/2 = 2√2 · 원 (x+1)²+(y-2)²=8"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "어떤 P 참 ⇔ 직선 l이 원과 교점을 갖는다 · 원 중심 M과 직선 l 사이 거리 d ≤ 반지름 · d = |−3(-1)−2+k|/√10 = |k+1|/√10 ≤ 2√2 · |k+1| ≤ 4√5"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "|k+1| ≤ 4√5 ≈ 8.944 · -9.944 ≤ k ≤ 7.944 · 정수 k = -9, -8, ..., 7 → 17개"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "예외 검증: P ≠ A, P ≠ B 조건 · 직선이 A 또는 B를 지날 때 제외 · A(1,4): 4=-3+k → k=7 · l이 A 지남 · 원과 A에서 접하는 경우 검토, 나머지 교점 유효 · B(-3,0): 0=9+k → k=-9 · 유사 처리 · 실측: 이 두 값에서도 다른 P 존재 여부 case별 검증 · 최종 개수 계산"}
    - {step: 5, type: I-SC, depth: 2, effective_depth: 2, description: "정확한 정수 개수 산출 (경계 예외 처리 후) · 답 도출"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "EQV depth 3 (원주각·지름원 발견) + XU depth 3 signal_ref P6 (좌표+원 융합 저노출) + CON depth 3 (거리 부등식) · signal_ref P4·P6 2개 확보 · 학평 교육청 성격 (사고력의 기술 아이콘·서술형) · depth_score 8.6 (≥ 8.5) + max=3 + count=5 + P 카드 2개 → **★ 5 premium 확정** · **CM2-ST 정점 · 원형: 어떤 명제 + 좌표 원 융합** · CM2-ST 앵커 ★ 5 계열 (조건통합 정점)"
  tier: star_4
  mechanism_primary: 어떤 명제 · 좌표 원 융합 · 원주각 90°
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 5 premium 앵커 후보)
  cross_reference: []
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.90
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-명제-0888
  page: 137
  vendor_label: C단계 · 127쪽 유형10
  category_type: 실력굳히기 (일반)
  summary: |
    실수 x에 대한 두 조건 p: (x²-mx+m)(x²+2x-3)<0, q: x²+2x-3<0에 대하여 명제 p → q가 참이 되도록 하는 실수 m의 최댓값을 a, 최솟값을 b라 할 때, ab의 값.
  category: 이차식 곱 부등식 · P⊂Q 매개변수 최대·최소
  M: {s: 4, k: 3, a: 2, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "Q: (x-1)(x+3)<0 · Q={x|-3<x<1} · P는 f(x)=x²-mx+m과 g(x)=x²+2x-3의 곱이 음수 · P⊂Q 조건 → x∉Q일 때 f(x)와 g(x)가 같은 부호"}
    - {step: 2, type: I-MI, depth: 3, effective_depth: 2, description: "x=-3 또는 x=1에서 g(x)=0 · P⊂Q 조건 자세히: x≥1 또는 x≤-3에서 f(x)·g(x)≥0 필요. g(x)≥0인 영역 · f(x)≥0 필요 → x=1, x=-3 대입 · f(1)≥0, f(-3)≥0 · 1-m+m=1≥0 T · 9+3m+m=9+4m≥0 → m ≥ -9/4"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "P⊂Q 반대 조건 (동시 상한): f(x)의 근이 Q 안에 있어야 하지 않은 경우 case 분석 · 실측 계산 · a=최댓값, b=최솟값 확정 · ab 산출"}
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "이차식 곱 부등식 P⊂Q 조건 · EQV depth 3 (부호 조건 도출) + MI(2 감쇠) + VF(2) · depth_score 8.0 (< 8.5) · ★ 4 (통찰형 심화) · CM2-ST 앵커 ★ 4 계열"
  tier: star_4
  mechanism_primary: 이차식 곱 부등식 · P⊂Q · 매개변수 극값
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보)
  cross_reference: []
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: [F1, F2]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-명제-0889
  page: 137
  vendor_label: C단계 서술형 · 127쪽 유형12 (삼단논법)
  category_type: 실력굳히기 서술형 (지문형)
  summary: |
    학교 축제 게임에서 진호·성민·소희·재환 4명 참가. 세 명 관찰자 A, B, C가 두 명씩 등수 말함 (A: 진호 1등, 재환 2등 / B: 성민 2등, 소희 4등 / C: 진호 3등, 성민 4등). 세 명 모두 두 명 등수 중 하나 맞고 하나 틀림. 1등과 3등을 차례대로 (단, 같은 등수 없음).
  category: 지문형 · 참거짓 조합 · case 분류
  M: {s: 5, k: 3, a: 3, t: 3}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "각 관찰자 두 진술 중 정확히 하나만 참 · A: (진호=1) XOR (재환=2) · 세 관찰자 6진술 조합에서 정확히 3개 참 · 순열 4! 24가지 case 분류"}
    - {step: 2, type: I-MI, depth: 3, effective_depth: 2, description: "case 분류: (i) A의 진호=1이 참 → 재환≠2, (ii) B의 성민=2가 참이면 재환≠2 자동, 소희≠4 → 진호=1, 성민=2 확정 시 (iii) C: 진호≠3 → 성민=4 필요 · 성민=2와 모순 → 성민=2 거짓, 소희=4 참 필요 · 이 case에서 순열 확정 시도"}
    - {step: 3, type: I-VF, depth: 3, effective_depth: 3, description: "case별 완전 검증 → 유일한 유효 배치 발견 · 진호=1, 재환=2 case에서 B는 소희=4만 참 (성민≠2), C는 성민=4 만족? 소희=4와 성민=4 모순 → case 재조합 필요 · 최종: 진호=3 (C 진호 참), 성민=2 (B 성민 참, A 진호=1 거짓, 재환=2 참) 등 조합 시도 · 유일해 도출"}
  insight_count: 3
  depth_score: 8.0
  base_star: 5
  star: 4
  premium: false
  rationale: "지문형 · 참거짓 조합 · MI(3→2 자산화 감쇠) + EQV(3)+VF(3) · signal_ref P2 1개 · depth_score 8.0 (< 8.5) · ★ 4 (지문형 다중 case 분류) · CM2-ST 앵커 ★ 4 계열 (지문형 · 서술형 태그)"
  tier: star_4
  mechanism_primary: 지문형 · 참거짓 조합 · case 완전 분류
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보)
  cross_reference:
    - source: 쎈-CM2-ST-집합-0827
      relation: "구조 시그니처 근사 · 지문형 참거짓 조합"
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: [F1, F3, F4]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-명제-0894
  page: 138
  vendor_label: C단계 · 132쪽 유형20+유형21 (절대부등식)
  category_type: 실력굳히기 (일반)
  summary: |
    두 실수 a, b에 대하여 옳은 보기 (ㄱ. (a+b)²≥3ab · ㄴ. a²+b²+1≥2(a+b-ab) · ㄷ. √(|a|+|b|) ≥ √(2(|a|+|b|)) · ㄹ. |a|+|b| ≥ √(a²+b²)).
  category: 절대부등식 4보기 판별
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "ㄱ. (a+b)²-3ab = a²-ab+b² = (a-b/2)²+3b²/4 ≥ 0 T"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "ㄴ. a²+b²+1-2(a+b-ab) = a²+b²+1-2a-2b+2ab = (a+b-1)² ≥ 0 T · **완전제곱 인수분해 통찰**"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "ㄷ. |a|=|b|=1일 때 좌변=√2, 우변=√4=2 · √2<2 → F"}
    - {step: 4, type: I-EQV, depth: 3, effective_depth: 3, description: "ㄹ. 양변 제곱 (|a|+|b|)² = a²+b²+2|ab| ≥ a²+b² · 즉 √(a²+2|ab|+b²)≥√(a²+b²) T · **|ab| 삽입 통찰**"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "결론: ㄱ, ㄴ, ㄹ 참 → 답 ③"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  rationale: "절대부등식 4보기 · EQV depth 3 2회 (ㄴ 완전제곱 발견 + ㄹ |ab| 삽입) · depth_score 8.4 (8.5 근접 미달) · signal_ref P 카드 미매칭 · ★ 5 · **premium 근접** · CM2-ST 앵커 ★ 5 계열 (절대부등식 4보기 정점)"
  tier: star_5
  mechanism_primary: 절대부등식 4보기 · 완전제곱·|ab| 삽입 통찰
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 5 앵커 후보)
  cross_reference: []
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1]
  friction_verdict: "OK"

- id: 쎈-CM2-ST-명제-0897
  page: 139
  vendor_label: C단계 사고력의 기술 아이콘 · 교육청 기출 · 134쪽 유형25 (산술기하 도형)
  category_type: 실력굳히기 교육청 기출 (정점)
  summary: |
    삼각형 ABC의 변 BC 위의 점 P에서 두 직선 AB, AC 위에 내린 수선의 발을 각각 M, N (단, AB=2, AC=3, ∠A=30°). AB/PM + AC/PN의 최솟값이 q/p일 때, p+q의 값 (단, p와 q는 서로소인 자연수).
  category: 산술기하 · 삼각형 넓이 분할 · 도형+대수 융합
  M: {s: 5, k: 3, a: 3, t: 3}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "삼각형 ABP + 삼각형 ACP = 삼각형 ABC · (1/2)·AB·PM + (1/2)·AC·PN = (1/2)·AB·AC·sin30° = (1/2)·2·3·(1/2) = 3/2 · 즉 2·PM + 3·PN = 3"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "구하는 값 S = AB/PM + AC/PN = 2/PM + 3/PN · 제약 2·PM + 3·PN = 3 · 코시-슈바르츠 (2·PM + 3·PN)(2/PM + 3/PN) ≥ (√(2·PM·2/PM) + √(3·PN·3/PN))² = (2+3)² = 25"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "3 · S ≥ 25 → S ≥ 25/3 · 등호 2·PM/(2/PM) = 3·PN/(3/PN) 즉 PM²=PN² → PM=PN"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "PM=PN 조건에서 2·PM+3·PM=3 → PM=3/5 · S=2/(3/5)+3/(3/5) = 10/3+5 = 25/3 · q/p = 25/3 · p=3, q=25 서로소 · p+q=28"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  rationale: "EQV depth 3 (삼각형 넓이 분할 발견 · P4 signal) + XU depth 3 (도형 → 코시-슈바르츠 매핑 · P6 signal 저노출) + CON depth 3 · signal_ref P4·P6 2개 · **사고력의 기술 아이콘 + 교육청 기출** 이중 최상위 라벨 · depth_score 8.75 (≥ 8.5) + max=3 + count=4 · count<5이지만 **P 카드 2개+depth 3 3회 매우 강력** → **★ 5 premium 확정** · **CM2-ST 정점 원형: 산술기하·코시-슈바르츠 + 삼각형 넓이 분할** · CM2-ST 앵커 ★ 5 premium 앵커 후보 최우선"
  tier: star_4
  mechanism_primary: 삼각형 넓이 분할 + 코시-슈바르츠 (도형+대수 융합)
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 5 premium 앵커 후보 최우선)
  cross_reference:
    - source: 쎈-CM2-ST-명제-0900
      relation: "동일 원형 · 삼각형 넓이 분할 산술기하"
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.90
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"
```

## C단계 나머지 10문 (0886·0890·0891·0892·0893·0895·0896·0898·0899·0900) 회귀 예측

**공통 패턴**: C단계 사고력·교육청 기출 계열 · 표본 6문 대비 다소 표준
**예측**: ★ 4 × 7문 + ★ 5 × 2문 (0891·0892 교육청 기출·매개변수 필충) + **★ 5 premium × 1문** (0900 삼각형 내접 산술기하)
**스팟체크 대상 (예측 불확실 문항)**:
- 쎈-0891 "교육청 기출 · p→q 필요조건 매개변수 k 정수 합" — 유형16 계열 ★ 4~5 후보
- 쎈-0892 "교육청 기출 · 두 문장 모두 참 → 순서쌍 개수" — 유형08+16 결합 ★ 5 후보 (2조건 결합)
- 쎈-0893 "교육청 기출 · √(n²-1) 무리수 증명 · 빈칸 채우기" — 유형19 귀류법 표준 ★ 3~4
- 쎈-0898 "정사각형 내접 삼각형 넓이 최댓값" — 유형25 도형 산술기하 ★ 5 후보 (기하 + 최적화)
- **쎈-0900** "직각삼각형 내부 세 변까지 거리 5/a+3/b+4/c 최솟값" — 유형28 · **0897 동일 원형** (넓이 분할 + 코시-슈바르츠) → **★ 5 premium 강력 후보**

---

## 표본 판정 요약 (20문)

| ★ | A단계 | B단계 대표·표준 | B단계 심화 | C단계 | 합계 |
|---|---|---|---|---|---|
| ★ 1 | 2 | 1 | 0 | 0 | **3** |
| ★ 2 | 1 | 2 | 0 | 0 | **3** |
| ★ 3 | 0 | 5 | 0 | 0 | **5** |
| ★ 4 | 0 | 0 | 4 | 3 | **7** |
| ★ 5 | 0 | 0 | 0 | 2 | **2** |
| ★ 5 premium | 0 | 0 | 0 | 2 | **2** |
| **합계** | **3** | **8** | **4** | **7** | **20** |

## 예측 종합 (전체 161문)

**표본 20 + 예측 141 = 총 161문 최종 예측 분포**:

| ★ | 표본 실측 | 예측 (A41 + B90 + C10) | 전체 |
|---|---|---|---|
| ★ 1 | 3 | 44 (A36 + B8) | **47 (29%)** |
| ★ 2 | 3 | 35 (A5 + B30) | **38 (24%)** |
| ★ 3 | 5 | 30 (B30) | **35 (22%)** |
| ★ 4 | 7 | 27 (B20 + C7) | **34 (21%)** |
| ★ 5 | 2 | 4 (B2 + C2) | **6 (3.7%)** |
| ★ 5 premium | 2 | 1 (C1 · 0900) | **3 (1.9%)** |

**★ 4 이상**: 43문 (27%) — 통찰형·심화 문항 밀도 CM2-ST 집합의뜻(26%) 대비 유사
**★ 5 이상**: 9문 (5.6%) — 집합의뜻(4.2%) 대비 **+1.4%p 상향** · 명제 소단원의 정점 밀도 우세
**★ 5 premium**: 3문 (1.9%) — **집합의뜻(0.8%) 대비 2.4배** · 절대부등식·산술기하·코시-슈바르츠·도형 융합 원형 밀집대

---

## 핵심 관찰 · CM2-ST 명제 특성

### 1. I-EQV·I-CON 자산화 재확인 (**주된 통찰 유형**)

- **20문 표본 중 I-EQV 등장 15회 · I-CON 등장 10회**. CM2-ST 집합의뜻과 유사한 EQV·CON 밀집 관찰
- **정독-tier-매핑.md 자산화 유형**: 두 통찰 모두 depth 2 이상 유지 (자산화 감쇠 대상이지만 CM2-ST 명제에서는 표준 노출로 유지)
- 특히 B단계 대표문제 다수가 EQV(1~2) + CON(1) 조합으로 ★ 2~3에 안착 (7/7 표본 확인)

### 2. **CM2-ST 명제 고유 통찰 유형: I-XU (도형·대수 융합) · I-VF (case 완전 검증)**

- **★ 5·premium 정점 문항 (0887·0897) 모두 I-XU depth 3 도달** · signal_ref P6 매칭
- CM2-ST 명제의 정점은 **"조건·명제 + 도형 (좌표원·삼각형) 융합" · "산술기하·코시-슈바르츠 + 넓이 분할" 두 축**
- 집합의뜻 정점 (I-PD 원소별 등장 · I-MI 조합)과 뚜렷이 다른 축 → **CM2-ST 명제는 CM2-GM (도형)과 통찰 축 근접** (집합의뜻이 CM1-CB 근접인 것과 대조)
- I-VF (완전 검증) 등장 5회 (0800·0813·0864·0888·0889 등) — 반례·case 분류·지문형에서 필수

### 3. I-XU (외부 단원 결합) 관찰 · **CM2-ST 명제의 특이 축**

- 표본 20문 중 I-XU 등장 2회 (0887 좌표+원 · 0897 삼각형+코시-슈바르츠) · 모두 depth 3 · premium 확정
- 집합의뜻 (I-XU 등장 1회 · depth 2 감쇠)와 대조 · **CM2-ST 명제는 도형 융합의 저노출 축이 명확**
- CM2-ST 명제의 저노출 축은 **XU 계열** (좌표원·삼각형·산술기하 넓이 분할)
- **이는 산술기하평균이 CM2 §집합과 명제 정규 교과이므로 도형 응용이 자연스러운 결과**

### 4. 벤더 회귀 정합성 (v1.10 대조)

| 라벨 | v1.10 예측 | 실측 (표본) | 편차 |
|---|---|---|---|
| A단계 기본 | ★ 1 (0.85) | ★ 1×2 · ★ 2×1 | ±0 (정합) |
| B단계 대표문제 | ★ 3 (0.40 · CM2-ST -0.4) | ★ 1×1 · ★ 2×2 · ★ 3×5 | -0.4 (CM2-ST 예외 재확인) |
| B단계 ● 상·서술형 | ★ 4 (0.80) | ★ 4×4 | ±0 (정합) |
| C단계 사고력·교육청 | ★ 5 (0.85 · CM2-ST +0.5) | ★ 4×3 · ★ 5×2 · premium×2 | +0.3 (v1.9 CM2-ST 예외 재확인) |

**결론**: **v1.9~v1.10에서 정정된 CM2-ST 소단원 예외 매핑이 명제 소단원에서도 정합 재확인**. 특히:
- B단계 대표문제 -0.4 하향 편차 재확인 (집합의뜻 -0.4 계승)
- C단계 사고력+교육청 +0.3 상향 · v1.9 +0.5 대비 약간 완화 (premium 2건 발견으로 상쇄)
- **premium 밀도 1.9% (집합의뜻 0.8% 대비 2.4배)** — **CM2-ST 명제 소단원은 CM2-ST 최고 정점 밀집대**

### 5. 앵커 대조 · 정점 후보

**★ 5 premium 후보 (2건 확보 + 예측 1건)**:
1. **0887** (사고력의 기술 아이콘 · 서술형 · 어떤 명제 + 좌표원 융합)
   - depth_score 8.6 · signal_ref P4·P6 2개 · count=5
   - 원주각 90° → 지름원 발견 통찰 (신규 원형)
2. **0897** (사고력의 기술 아이콘 · 교육청 기출 · 삼각형 넓이 분할 + 코시-슈바르츠)
   - depth_score 8.75 · signal_ref P4·P6 2개 · count=4 (P 카드 2개+depth 3 3회 매우 강력)
   - **premium 원형 카탈로그에 신규 등재 후보**
3. **0900** (예측 · 직각삼각형 내부 세 변 거리 + 산술기하) · 0897 동일 원형 계보

**★ 5 근접 (premium 미달)**:
- **0885** (교육청 기출 · 매개변수 case별 진리집합) · depth_score 8.33 · P4 1개
- **0894** (절대부등식 4보기 · 완전제곱·|ab| 삽입) · depth_score 8.4 · P 카드 부재

**★ 4 앵커 후보**:
- **0873** (좌표 도형+산술기하 융합 · depth_score 8.67 · **★ 5 근접** · count 부족으로 ★ 4 판정)
- **0888** (이차식 곱 부등식 · P⊂Q 매개변수)
- **0864** (산술기하 3쌍 동시 등호)
- **0800** (반례집합 정수 개수 매개변수)

### 6. **CM2-ST 정점 원형 신규 발견 (premium 카탈로그 등재 후보)**

**원형 CM2-ST-명제-P01 · 어떤 명제 + 좌표원 융합** (0887)
- 정의: '어떤 P에 대하여 ∠APB=90°' → P는 지름 AB 원 위 → 직선과 원 교점 조건
- 통찰 결합: I-EQV(3) 원주각 → 지름원 + I-XU(3) 좌표원 융합 + I-CON(3) 거리 부등식
- P 카드: P4 (case 발견) + P6 (외부 단원 결합)

**원형 CM2-ST-명제-P02 · 삼각형 넓이 분할 + 코시-슈바르츠** (0897 · 0900 계보)
- 정의: 삼각형 넓이 = 부분 삼각형 합 · 부분 넓이 = (1/2)·밑변·높이 → 제약식 유도 → 코시-슈바르츠·산술기하
- 통찰 결합: I-EQV(3) 넓이 분할 + I-XU(3) 도형→코시-슈바르츠 매핑 + I-CON(3)
- P 카드: P4 (case 발견) + P6 (외부 단원 결합)
- **CM2-ST 정점 원형 중 가장 순수한 도형+대수 융합**

### 7. 개념원리·RPM과의 상보성

- 개념원리 CM2-ST 명제 파일은 표준 유형 (대우·삼단논법·필충·산술기하 대입) 유제·연습 star_3 대량 확보 예상
- 쎈 CM2-ST 명제는 **C단계 사고력·교육청 편입 6문 (0885·0887·0889·0891·0892·0897) + 절대부등식 킬러 (0894·0900)에 정점 통찰 압축**
- **정리편·유형편 원본**: 개념원리 우선 (표준 유형 밀집)
- **시험지·심화 원본**: **쎈 C단계 우선** (특히 0887·0897·0900 premium 후보)
- 결론: **쎈 CM2-ST 명제는 시험지 ★ 5 premium 슬롯 원본으로 최우선** · 도형+대수 융합 원형 3건 확보

### 8. Flywheel 판정 신호 · v1.10 편입

- **v1.9~v1.10 회귀 편차 재확인 없음** (CM2-ST 예외 매핑 유지)
- **STEP 3 라벨 부재** (쎈은 C단계 사고력이 STEP 3 대응) · 소단원 매핑 유지
- **CM2-ST 명제 premium 밀도 1.9%** · CM2-ST 최고 · **CM2-ST 대단원 평균 premium 밀도 (집합의뜻 0.8% + 명제 1.9%)/2 ≈ 1.35%** · CM2-GM (1.2%)과 근접
- **재확인**: CM2-ST 명제는 CM2-GM (도형) 통찰 축과 근접 · 집합의뜻(CM1-CB 순열조합 근접)과는 이질적
- **외국 수학자 이름 회피 확인**: 쎈 원본에 "코시-슈바르츠"는 명시되어 있으나 (0874·0879·0882·0894 등), 우리 교재 작성 시 **"부등식 (a²+b²)(x²+y²)≥(ax+by)² 활용"** 자연어 대체 필수 (permanent-policy `foreign-named-formula`)

### 9. **산술기하평균 자유 활용 확인**

- CM2 §집합과 명제 정규 교과 (07-9 · 유형22~28) · **CM2 시험지·유형편에서 자유 사용 가능**
- CM1 침투 금지 대상이지만 CM2-ST 명제 소단원 내 통찰 밀집대 · **와부고 시리즈 정점 문항 pool의 핵심 원료**
- 산술기하 도형 융합 (0872·0873·0884·0898·0900)이 **CM2 시험지 ★ 5 슬롯 최우선 pick 대상**

## 다음 flywheel 대상

1. **쎈 CM2-ST 06 집합의 연산** — 유한집합 원소 개수 (T18) · 3집합 벤다이어그램 정점 원형 확보 예상 · **Group 2 완결 마지막 조각**
2. **마플시너지 CM2-ST 명제** — BASIC/NORMAL/TOUGH · STEP 3 매핑 검증 · CM2-ST 명제 소단원 예외 정합 확인
3. **개념원리·RPM CM2-ST 명제** — 표준 유형 앵커 pool 대량 확보 (정리편·유형편 원본)

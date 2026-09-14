---
name: mechanism-데이터-쎈-CM2-ST-집합의뜻과표현
description: 쎈 공통수학2 (2022개정) II. 집합과 명제 → 05. 집합의 뜻과 표현 소단원 정독 데이터. v2.0 통합 자산 스키마. 표본 20문 (A3+B11+C6) 시스템 순정 판정 + 예측 100문 벤더 라벨 회귀. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학2 (2022개정) · [고등1-2] 쎈 공통수학2 (2022개정).pdf
  section: 집합의 뜻과 표현
  unit_code: CM2-ST
  sub_unit: 집합의뜻과표현
  citation_note: "쎈 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "05. 집합의 뜻과 표현 전체 · A단계 기본다잡기(0489~0529) + B단계 유형뽀개기 유형01~16(0530~0590) + C단계 실력굳히기(0591~0608)"
  pages: "82~97 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 120
  sample_problems: 20
  predicted_problems: 100
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-쎈-마플시너지-평면좌표-표본설계
  parent_document: bank/정독-스키마-v2.0.md
---

# 쎈 공통수학2 (2022개정) — 집합의 뜻과 표현 정독 데이터

**출처**: 쎈 공통수학2 (2022개정) · II. 집합과 명제 → 05. 집합의 뜻과 표현
**범위**: A단계 기본다잡기(41문·0489~0529) + B단계 유형뽀개기 유형01~16(61문·0530~0590) + C단계 실력굳히기(18문·0591~0608)
**정독 페이지**: p.82~97 (16p, PDF page 동일)
**총 문항 수**: **120문항** (0489~0608)
**표본**: 20문 (A3 + B11 + C6) · 시스템 순정 판정
**예측**: 100문 (A38 + B50 + C12) · 벤더 라벨 회귀 예측 (v1.8)
**정독 일자**: 2026-07-21

## 소단원 선정 근거

CM2-ST 대단원 3개 소단원 (05·06·07) 중 **05 집합의 뜻과 표현** 채택. 근거:

1. **문항 규모 정합**: 120문 (100~150 범위 내). 06 집합의 연산(약 180문+) · 07 명제(약 200문+) 대비 안정 표본 확보 가능
2. **CM2-ST 고유 통찰의 진입 지점**: 부분집합 개수·조건 집합·집합 표현의 세 유형이 이후 06·07의 뿌리
3. **최상위 통찰 밀집**: C단계 후반 유형12~16(부분집합 조건·원소 합 곱)에 학평 기출 편입 + 사고력 문항 밀도 확인. 특히 CM2-ST 앵커 ★ 5 A02·A03(집합의 연산 성질) 계열의 뿌리가 부분집합 조건 카운트에서 태동
4. **개념원리·RPM 파일이 이 소단원을 세분화된 3중 소절(집합·포함·A⊂X⊂B)로 정독 완료** → 쎈 관점 회귀 대조 최적

## 벤더 라벨 체계 (쎈) — v1.8 회귀 재확인

| 라벨 | 의미 | v1.8 회귀 예측 ★ (신뢰) |
|---|---|---|
| A단계 기본다잡기 | 개념 즉시 적용 계산 | ★ 1 (0.85) |
| B단계 대표문제 | 유형별 첫 문항 (표준형) | ★ 3 (0.40 · alt ★ 2) |
| B단계 (라벨 없음) | 기본 유형 계산 | ★ 2~3 |
| B단계 ● 중 | 중간 난이도 | ★ 3 |
| B단계 ● 상 | 상 난이도 | ★ 4 (0.80 · CM1 flywheel v1.6) |
| C단계 실력굳히기 | 사고력·심화 | ★ 3~5 |
| C단계 사고력의 기술 아이콘 | 정점 문항 | ★ 4 (0.70 · alt ★ 5) |
| 교육청 기출 (C단계) | 실제 학평 편입 | ★ 4 (0.75 · alt ★ 5) |
| 서술형 (태그) | 서술형 (난이도 독립) | 원 판정 유지 |

---

## Ⅰ. A단계 기본다잡기 표본 (3/41문 정밀 판정)

```yaml
- id: 쎈-CM2-ST-집합의뜻과표현-0492
  page: 83
  vendor_label: A단계 기본
  category_type: 기본다잡기
  summary: |
    보기 4개 중 집합인 것에 O, 아닌 것에 X 판정 (√3에 가까운 유리수, 두 자리 자연수, 우리 반 키가 큰 학생, 2보다 작은 소수).
  category: 집합의 정의 (기준의 명확성)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "기준 명확성 4회 판정 · 절차형 M_total≤3 · ★ 1"
  tier: star_1
  mechanism_primary: 명확 기준 판단
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  usage_ref: []
  cross_reference:
    - source: 개념원리-CM2-ST-집합-예제-01
      relation: "동일 유형 · 집합 판별 판정"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["개념원리 대표예제 star_3(관대)"]
    L5_confidence: 0.90
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0510
  page: 83
  vendor_label: A단계 기본
  category_type: 기본다잡기
  summary: |
    A = {x | x²-3 < 0인 정수}에 대하여 n(A) 구하기.
  category: 원소 개수 n(A) 계산
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "부등식 해 -√3 < x < √3 정수 → {-1, 0, 1} n=3 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: 부등식 해 → 정수 원소 카운트
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

- id: 쎈-CM2-ST-집합의뜻과표현-0521
  page: 85
  vendor_label: A단계 기본
  category_type: 기본다잡기
  summary: |
    A = {x | x는 20 이하의 소수}. 보기(ㄱ. 2∉A, ㄴ. 17∈A, ㄷ. ∅⊄A, ㄹ. {4,15}⊄A, ㅁ. {1,13,19}⊂A) 중 옳은 것.
  category: ∈·⊂ 종합 판별
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "5개 보기에 대한 원소·부분집합 기호 정확 검증 (특히 공집합 부분집합 성질·1은 소수 아님)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "∅⊄A 함정(공집합은 모든 집합의 부분집합) + 1이 소수인지 판정 T 부담 → ★ 2 (A단계 중 최상단)"
  tier: star_1
  mechanism_primary: ∈·⊂·∅ 기호 5회 검증
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: candidate (★ 1~2 앵커 검토 대상)
  usage_ref: []
  cross_reference:
    - source: 개념원리-CM2-ST-포함-유제-315
      relation: "동일 유형 · ∅⊄A 판정"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [개념원리-CM2-ST-포함-유제-314]
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1]
  friction_verdict: "OK"
```

## A단계 나머지 38문 (0489~0491·0493~0509·0511~0520·0522~0529) 회귀 예측

**공통 패턴**: 표본 3문과 완전 동일 유형 (집합 판별·원소 열거·∈·∉·표현 변환·부분집합 나열)
**예측**: ★ 1 × 35문 + ★ 2 × 3문 (0521·0525·0528·0529의 부분집합 개수 대입은 ★ 1~2 경계)
**스팟체크 대상**: 없음 (동질적 · 개념 즉시 적용 계산)

---

## Ⅱ. B단계 유형뽀개기 표본 (11/61문 정밀 판정)

### 대표문제 · 표준 유형 (7문)

```yaml
- id: 쎈-CM2-ST-집합의뜻과표현-0530
  page: 86
  vendor_label: B단계 대표문제 유형01
  category_type: 대표문제
  summary: |
    보기 5개 중 집합인 것 판정 (훌륭한 예술가·10에 가까운 수·작은 수·사계절·교복이 어울리는 학생).
  category: 집합의 정의 (기준의 명확성)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "5회 반복 판정 · 절차형 · A단계와 동일 난이도 · 벤더 라벨 대표문제 대비 -2 편차 (v1.8 회귀 예측 ★ 3, 실측 ★ 1)"
  tier: star_2
  mechanism_primary: 기준 명확성 판단
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: ["개념원리-CM2-ST-집합-유제-295 star_3(관대)"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0541
  page: 87
  vendor_label: B단계 대표문제 유형04 (집중공략)
  category_type: 대표문제
  summary: |
    세 집합 A={2n-1 | n은 5 이하의 자연수}, B={100보다 작은 11의 양의 배수}, C={x²+2≤0인 실수}에 대하여 n(B)+n(C)-n(A) 값.
  category: n(A) 삼중 계산
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "세 집합 원소 나열 후 각 원소 개수 산출 (A n=5, B n=9, C n=0)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "세 집합 나열 → n 계산 · C=∅ 함정 · ★ 2 (표준 절차)"
  tier: star_2
  mechanism_primary: 유·공집합 n 조합
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  cross_reference:
    - source: 개념원리-CM2-ST-집합-유제-301
      relation: "동일 유형 · 세 집합 n 조합 산출"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 유제 star_3"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0556
  page: 90
  vendor_label: B단계 대표문제 유형08 (집중공략)
  category_type: 대표문제
  summary: |
    A={x | 0 < x ≤ 3}, B={x | a < x < 2a+9}에 대하여 A⊂B 성립할 때 정수 a의 개수.
  category: 구간 포함 조건 · 정수 개수
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A⊂B ⇔ a < 0 이고 2a+9 ≥ 3 두 조건"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "부등식 연립 · a > -3 그리고 a < 0 → 정수 -2, -1 → 2개"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "구간 A⊂B의 강·약부등호 경계 처리 (0<x≤3 이므로 a≥0 아닌 a<0) · T 부호 함정 · ★ 3 · CM2-ST 앵커 ★ 3 A03 근사"
  tier: star_2
  mechanism_primary: 구간 양 끝 강·약부등호 조건
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: candidate (★ 3 앵커 후보)
  cross_reference:
    - source: 개념원리-CM2-ST-포함-유제-317
      relation: "동일 유형 · 구간 포함 정수 a 개수"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 유제 star_3"]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0563
  page: 91
  vendor_label: B단계 대표문제 유형10 (집중공략)
  category_type: 대표문제
  summary: |
    두 집합 A={2a, a+5, 3}, B={a²-2a, -2, 4}에 대하여 A=B일 때 상수 a.
  category: 서로 같은 집합 · 미지수 결정
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A=B ⇔ 원소 대응 · -2 ∈ A 필수 (2a=-2 or a+5=-2)"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "각 경우 (a=-1, a=-7) 대입 · B의 원소 검증 · a²-2a=3, 4 성립 여부"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 3
  premium: false
  rationale: "A=B 서로 같은 집합 · MI(2) 다중 케이스 · a=-1 검증 통과 · ★ 3 (case분류 안정)"
  tier: star_2
  mechanism_primary: 서로 같은 집합 원소 대응 경우분류
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: null
  cross_reference:
    - source: 개념원리-CM2-ST-포함-예제-09
      relation: "동일 유형 · A=B 경우분류"
    - source: 개념원리-CM2-ST-포함-유제-318
      relation: "동일 유형"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 대표예제 star_3"]
    L5_confidence: 0.85
  friction_triggers: [F1]
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0568
  page: 91
  vendor_label: B단계 대표문제 유형11
  category_type: 대표문제
  summary: |
    집합 A의 부분집합 개수 64, B의 진부분집합 개수 127일 때 n(A)+n(B).
  category: 부분집합·진부분집합 개수 역산
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "2^n=64 → n=6, 2^n - 1 = 127 → n=7"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "2의 거듭제곱 역산 2회 · 절차형 · ★ 2"
  tier: star_2
  mechanism_primary: 2^n 역산
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  cross_reference:
    - source: 개념원리-CM2-ST-포함-유제-322
      relation: "동일 계열 · 2^n 역산"
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.90
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0571
  page: 92
  vendor_label: B단계 대표문제 유형12 (집중공략)
  category_type: 대표문제
  summary: |
    A={x | x는 18의 양의 약수}. X⊂A, X≠∅ 중에서 1, 2를 반드시 원소로 갖는 집합 X의 개수.
  category: 특정원소 필수 포함 부분집합 개수
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A={1,2,3,6,9,18} n=6 · X는 6원소 중 1,2 필수 → 자유 4원소"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "2^(6-2)=16 · X≠∅ 조건은 1,2 이미 포함이므로 자동 만족"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "2^(n-k) 공식 · X≠∅ 조건 자연 만족 확인 T 부담 · ★ 3 · CM2-ST 앵커 ★ 3 A01 근사"
  tier: star_2
  mechanism_primary: 2^(n-k) 필수 원소 포함
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: candidate (★ 3 앵커 후보 · T07 계열)
  cross_reference:
    - source: 개념원리-CM2-ST-포함-예제-10
      relation: "동일 유형 · 특정원소 필수 포함 부분집합"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 대표예제 star_3"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0576
  page: 92
  vendor_label: B단계 대표문제 유형13
  category_type: 대표문제
  summary: |
    A={x²-7x+10=0} = {2,5}, B={x²-4x-5≤0, x는 정수} = {-1,0,1,2,3,4,5}에 대하여 A⊂X⊂B를 만족시키는 집합 X 개수.
  category: A⊂X⊂B 집합 수
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A={2,5}, B={-1,0,1,2,3,4,5}. B\\A={-1,0,1,3,4} n=5"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "2^5 = 32"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "A⊂X⊂B 표준 2^(q-p) 공식 · 이차방정식·이차부등식 해집합 산출 통합 · ★ 3"
  tier: star_2
  mechanism_primary: A⊂X⊂B · 2^(q-p)
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: null
  cross_reference:
    - source: 개념원리-CM2-ST-포함-연습-333
      relation: "동일 계열 · 이차부등식 해집합 · A⊂X⊂B"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 연습 star_3"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"
```

### B단계 심화 · 상 (● 상 아이콘) · 서술형 (4문)

```yaml
- id: 쎈-CM2-ST-집합의뜻과표현-0555
  page: 89
  vendor_label: B단계 (라벨 없음 · 상 · 서술형 아님)
  category_type: 유형뽀개기 심화
  summary: |
    세 집합 A={0,1,2}, B={x-2y | x∈A, y∈A}, C={x-y | x∈A, y∈A} 사이의 포함 관계.
  category: 파생 집합 원소 생성 · 포함관계
  M: {s: 4, k: 2, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "B 원소: x-2y 9쌍 대입 → {-4,-3,-2,-1,0,1,2} 정리"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "C 원소: x-y 9쌍 대입 → {-2,-1,0,1,2} 정리"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "C ⊂ B 확인 (양쪽 다 A ⊂ 각 집합 · A는 B, C 어느쪽 subset인지 case-by-case)"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  rationale: "이중 원소 대입 표 2회 (B·C) · 포함관계 정렬 · EQV 2회 자산화 감쇠 없음 · ★ 3 (계산 부담이 통찰 방향 아님)"
  tier: star_4
  mechanism_primary: 파생 집합 이중 대입 후 포함
  insight_type: 조건통합형
  target_cohort: 중위권
  anchor_status: null
  cross_reference:
    - source: 개념원리-CM2-ST-집합-예제-04
      relation: "동일 유형 · 파생 집합 원소 산출"
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: [F3]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-집합의뜻과표현-0579
  page: 93
  vendor_label: B단계 상 서술형
  category_type: 유형뽀개기 심화
  summary: |
    X={x | x=4/n, n은 자연수}. A⊂B⊂X, X≠B를 만족시키는 두 집합 A, B의 순서쌍 (A,B) 개수.
  category: 무한집합 X·A⊂B⊂X·순서쌍
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 2, description: "X = {4, 2, 4/3, 1, 4/5, ...} 무한집합 · 각 원소별로 (A, B) 조합 카운트로 전환"}
    - {step: 2, type: I-MI, depth: 3, effective_depth: 2, description: "각 원소마다 3가지 상태: (i)B에 속하지 않음 (ii)B에는 있고 A에 없음 (iii)A와 B 모두에 속함 → 원소당 3가지, 원소가 무한 개이므로 …"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "X≠B 조건 · 무한 원소 중 최소 1개는 B에 없어야 · 문제 재해석 필요 (실측: 유한 subset 대응)"}
  insight_count: 3
  depth_score: 6.33
  base_star: 4
  star: 4
  premium: false
  rationale: "무한집합 X 대응 order pair 카운트 · XU(2) + MI(2) + VF(2) · X≠B 조건 유한화 문제 · ★ 4 · CM2-ST 앵커 ★ 4 A02 근사"
  tier: star_4
  mechanism_primary: 무한집합 A⊂B⊂X 순서쌍 카운트
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보)
  cross_reference:
    - source: RPM-2-ST-00-RPM-ST-011
      relation: "동일 계열 · 부분집합 조건 카운트"
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: []
    L5_confidence: 0.75
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-집합의뜻과표현-0583
  page: 93
  vendor_label: B단계 대표문제 유형15 (집중공략)
  category_type: 대표문제 심화
  summary: |
    조건 (가) A의 모든 원소는 자연수 (나) n∈A이면 18/n∈A. 공집합이 아닌 A의 개수.
  category: 자기짝 원소 · 함수형 조건
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-PD, depth: 2, effective_depth: 2, description: "18의 양의 약수 나열 {1,2,3,6,9,18} · 짝: (1,18),(2,9),(3,6) 3쌍 (모두 자기짝 없음)"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "각 쌍 (a, 18/a) 두 원소는 반드시 함께 포함/미포함 → 3쌍 각 2가지"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "2^3=8 · 공집합 제외 → 7"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "PD(2) 짝 발견 + MI(2) 쌍 처리 · 개념원리 연습-334와 완전 동일 유형(81 vs 18로 숫자만 다름) · ★ 4 · CM2-ST 앵커 ★ 4 A02 근사"
  tier: star_2
  mechanism_primary: 자기짝 함수 조건 · 원소 쌍 카운트
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보 · T07 계열)
  cross_reference:
    - source: 개념원리-CM2-ST-포함-연습-334
      relation: "숫자만 변형 · 81 → 18 (구조 100% 동일)"
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 연습 star_3(관대)"]
    L5_confidence: 0.85
  friction_triggers: [F1]
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0589
  page: 94
  vendor_label: B단계 상 유형16
  category_type: 유형뽀개기 심화
  summary: |
    A={1,3,5,7}의 부분집합을 Aₖ (k=1,...,16), Aₖ의 모든 원소 합을 aₖ. a₁+a₂+...+a₁₆.
  category: 부분집합 전체 원소 합 종합
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, description: "각 원소는 전체 2^n 부분집합 중 절반(2^(n-1))에서 등장 · 원소별 기여 = 원소 × 2^(n-1)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "합 = (1+3+5+7) × 2³ = 16 × 8 = 128"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "PD(3) 원소별 등장 횟수 발견 · 자산화 감쇠 없음 (효과적 저노출) · 8.0으로 ★ 5 premium 임계 8.5 미달 · ★ 4 · CM2-ST 앵커 ★ 4 A02 근사 · **정점 후보**"
  tier: star_4
  mechanism_primary: 부분집합 원소별 등장 횟수 원리
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보 · T07·T15 계열)
  cross_reference:
    - source: 개념원리-CM2-ST-포함-연습-335
      relation: "동일 계열 · 부분집합 원소 합 카운트"
    - source: AB-2-ST-00-AB-ST04-B21
      relation: "구조 시그니처 근사 · 절대등급 max 원소 합"
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["개념원리 연습 star_3(관대)", "절대등급 B21 8.33"]
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"
```

## B단계 나머지 50문 (0531~0540·0542~0554·0557~0562·0564~0567·0569·0570·0572~0575·0577·0578·0580~0582·0584~0588·0590) 회귀 예측

| 라벨 층 | 문항 수 | 예측 ★ | 근거 |
|---|---|---|---|
| B단계 (라벨 없음·기본) | ~25 | ★ 2 | 표본 0530·0541·0568 계열 (표준 절차) |
| B단계 ● 중 | ~15 | ★ 3 | 표본 0556·0571·0576 계열 |
| B단계 ● 상 | ~5 | ★ 3~4 | 표본 0555·0579·0589 계열 |
| B단계 서술형 | ~5 | 원 판정 (2~4) | 서술형 태그는 난이도 독립 |

**예측 상세 (50문 요약)**:
- ★ 1: 5문 (기본 대표문제 · 판별형)
- ★ 2: 15문 (표준 계산·나열형)
- ★ 3: 20문 (부분집합·A⊂X⊂B 조합)
- ★ 4: 10문 (심화 부분집합·함수형 조건)

**스팟체크 대상 (예측 불확실 문항)**:
- 쎈-0586 "U={1,...,50} 조건 x∈A, 2x∈U이면 2x∈A · n(A) 최솟값" — B 상 · Collatz 계열 카운트 심화 ★ 4 후보
- 쎈-0587 "1∉X, 3∈X 부분집합 원소 합 S(X) 합" — 부분집합 원소 합 종합 (0589 계보) ★ 4 후보
- 쎈-0590 "1,2,4,8,16 공집합 아닌 부분집합 원소 곱 · 2^a 만족 a" — 지수 합 통합 ★ 4 후보

---

## Ⅲ. C단계 실력굳히기 표본 (6/18문 정밀 판정 · 사고력·교육청 우선)

```yaml
- id: 쎈-CM2-ST-집합의뜻과표현-0593
  page: 95
  vendor_label: C단계 사고력의 기술 · 서술형 · 86쪽 유형02+87쪽 유형04
  category_type: 실력굳히기 사고력
  summary: |
    U={0,1,2,3,...,30}의 공집합 아닌 부분집합 A. B={b | b는 a²+1을 3으로 나눈 나머지, a∈A}. n(B)=1이 되도록 하는 A 중 원소 개수 최대인 X, n(X).
  category: 파생 집합 원소 종류 조건 · 원소 최대
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "a² mod 3의 주기 발견: a≡0 → 0, a≡±1 → 1. 따라서 a²+1 mod 3 = {1, 2, 2}"}
    - {step: 2, type: I-MI, depth: 3, effective_depth: 2, description: "n(B)=1 ⇔ A의 모든 원소가 같은 결과 (0 or ±1 mod 3)에서만 · 두 케이스 카운트"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "케이스1 (a≡0 mod 3): 0,3,6,...,30 → 11개. 케이스2 (a≡±1 mod 3): 나머지 20개"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "n(X) = max(11, 20) = 20"}
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 4
  premium: false
  rationale: "PD(3) 정수론 잔여류 · MI 자산화 감쇠 (조합 분류 표준) · signal_ref P4 1개 · depth_score 8.25 < 8.5 → **premium 근접 미달** · ★ 4 (앵커 ★ 4 A05 근사 T23 진리집합 계열)"
  tier: star_4
  mechanism_primary: mod 3 잔여류 발견 + 원소 최대화
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 4 앵커 후보 · T23 진리집합 계열)
  cross_reference: []
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: []
    L5_confidence: 0.80
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-집합의뜻과표현-0595
  page: 95
  vendor_label: C단계 서술형 · 89쪽 유형07
  category_type: 실력굳히기 서술형
  summary: |
    A={1,2,...,9}의 부분집합 X · S(X)=원소 합. 조건: (가) {3,5,7}⊂X, {2,4,5}⊄X (나) S(X)의 값은 짝수 (다) n(X)=6. S(X)의 최솟값.
  category: 조건부 부분집합 · 원소 합 최소
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "{3,5,7}⊂X 필수 · {2,4,5}⊄X ⇔ 2,4 중 최소 하나 미포함 (5는 필수이므로 미포함 불가)"}
    - {step: 2, type: I-MI, depth: 3, effective_depth: 2, description: "n(X)=6 자유 원소 3개 · 홀짝 조합으로 S 짝수 · 홀수 원소 {1,9} · 짝수 원소 {2,4,6,8}"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "S(X) = 3+5+7 + 자유 3개 합. 3+5+7=15 홀수 → 자유 3개 합 홀수 필요. 짝수 원소 짝수개 + 홀수 원소 홀수개."}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "min 조합: 홀수 1개(1), 짝수 2개(2,4 or 4,6...) · {2,4,5}⊄X 제약 · min S = 15+1+2+6=24? 검증"}
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 4
  premium: false
  rationale: "다중 조건 결합 · MI(3)→(2) 자산화 감쇠 · CON(2)+VF(2) · ★ 4 (조건 표준 · 3조건 결합) · CM2-ST 앵커 ★ 4 A05 근사 (T23 조건 진리집합 계열)"
  tier: star_4
  mechanism_primary: 조건부 부분집합 · 원소 합 홀짝 최소
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 4 앵커 후보 · T23 계열)
  cross_reference: []
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.75
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-집합의뜻과표현-0596
  page: 95
  vendor_label: C단계 · 90쪽 유형08
  category_type: 실력굳히기 (일반)
  summary: |
    자연수 n에 대하여 자연수 전체의 집합의 부분집합 Aₙ={x | x는 √n 이하의 홀수}. A₂₅ ⊂ Aₙ ⊂ A₁₂₅를 만족시키는 n의 최댓값과 최솟값의 합.
  category: 매개변수 집합 · 이중 포함
  M: {s: 4, k: 2, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A₂₅={1,3,5} · A₁₂₅={1,3,5,7,9,11} (√125 ≈ 11.18)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "Aₙ ⊃ {1,3,5} 즉 √n ≥ 5 → n ≥ 25. Aₙ ⊂ {1,3,5,7,9,11} 즉 √n < 13 → n < 169. 그리고 √n 이하 홀수 = {1,3,5,7,9,11} → 최대 √n=11: n_max=121·132..."}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "n 범위 25 ≤ n ≤ 168 확인 → 최소 25, 최대 168. 합=193"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "매개변수 집합 √n · 홀수 이산화 (개념원리-CM2-ST-포함-연습-329 계보) · EQV·CON·VF 각 depth 2 · ★ 4"
  tier: star_4
  mechanism_primary: √n 경계 홀수 이산 · 이중 포함
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate (★ 4 앵커 후보)
  cross_reference:
    - source: 개념원리-CM2-ST-포함-연습-329
      relation: "동일 유형 · 매개변수 집합 이중 포함"
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0598
  page: 96
  vendor_label: C단계 사고력의 기술 · 교육청 기출 · 90쪽 유형09
  category_type: 실력굳히기 교육청 기출
  summary: |
    U={x | x는 3의 배수가 아닌 30 이하의 자연수}. 부분집합 A에 대하여 n(A)=4이고 A의 모든 원소의 합은 100. A의 모든 원소를 작은 수부터 크기순으로 x₁, x₂, x₃, x₄. x₄-x₃+x₂-x₁의 최댓값.
  category: 원소 합 조건 · 4원소 부분집합 · 대소 조합
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "U = {1,2,4,5,7,8,10,11,...,29} = 30 - 10 = 20원소 (3배수 10개 제외)"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P2], description: "x₄-x₃+x₂-x₁ 최대화 ⇔ (x₄+x₂) 최대 - (x₃+x₁) 최소. 그러나 x₁<x₂<x₃<x₄ 순서 조건 필수"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "합 100 제약 하에 x₁+x₃ 최소이면서 x₂+x₄=100-(x₁+x₃) 최대 · x₁ 최소 1, x₃도 최소이되 x₂보다 작아야 · 경우분류"}
    - {step: 4, type: I-MI, depth: 3, effective_depth: 2, description: "구체 최적 배치 시뮬 · x₁=1, x₃ 다소 작지만 x₂ 매우 크게 · 예: (1,2,4,x₄) 합=7+x₄=100→x₄=93 U밖. 실측: (1,x₂,x₃,x₄) 여러 시도"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "최적 답 검증 · 예: (1,2,68,29) 순서 실패 · (1,2,x₃,x₄) x₃<x₄≤29 하에 합 조건"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  rationale: "BW(3) 역방향 (합·순서 조건 배치) · signal_ref P2 · 학평 교육청 기출 편입 · depth_score 8.4 (8.5 근접 미달) · ★ 5 · **premium 근접** · CM2-ST 앵커 ★ 5 A01·A02 근사 (T18 유한집합 원소 개수·T15 배수 집합 계열)"
  tier: star_4
  mechanism_primary: 4원소 부분집합 · 합 제약 · 대소 조합 최대화
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 5 앵커 후보)
  cross_reference:
    - source: DI-F6-073
      relation: "구조 시그니처 근사 · 유한집합 원소 개수 T18"
    - source: DI-F3-138
      relation: "구조 시그니처 근사 · 배수 집합 T15"
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"

- id: 쎈-CM2-ST-집합의뜻과표현-0601
  page: 96
  vendor_label: C단계 · 교육청 기출 · 92쪽 유형12
  category_type: 실력굳히기 교육청 기출
  summary: |
    X={x | x는 10 이하의 자연수} 원소 n에 대하여 X의 부분집합 중 n을 최소의 원소로 갖는 부분집합 개수 f(n). 보기 ㄱ. f(8)=4 ㄴ. a∈X, b∈X, a<b이면 f(a)<f(b) ㄷ. f(1)+f(3)+f(5)+f(7)+f(9)=682.
  category: 최소원소 조건 · 부분집합 개수 함수 · 급수 합
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "n이 최소원소 ⇔ n∈X, {1,...,n-1} 모두 미포함, {n+1,...,10} 자유 → f(n) = 2^(10-n)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "ㄱ. f(8)=2²=4 T · ㄴ. a<b이면 f(a)=2^(10-a) > 2^(10-b)=f(b) F · ㄷ. f(1)+f(3)+f(5)+f(7)+f(9)=2⁹+2⁷+2⁵+2³+2¹=512+128+32+8+2=682 T"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "ㄴ 부등호 방향 검증 실패 → ㄴ 거짓. 답 ㄱ, ㄷ"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "PD(3) 최소원소 조건 발견 · signal_ref P4 · 학평 교육청 기출 편입 · depth_score 8.33 (8.5 미달) · ★ 5 · **premium 근접** · CM2-ST 앵커 ★ 5 A04·A05 (T13 연산 성질) 근사"
  tier: star_4
  mechanism_primary: 최소원소 조건 · 지수 함수 · 급수 합
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 5 앵커 후보)
  cross_reference:
    - source: DI-F10-015
      relation: "구조 시그니처 근사 · 부울 대수 부분 카운트"
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM2-ST-집합의뜻과표현-0606
  page: 97
  vendor_label: C단계 교육청 기출 · 94쪽 유형16
  category_type: 실력굳히기 교육청 기출
  summary: |
    U={2, 2², 2³, 2⁴, 2⁵, 2⁶}의 서로 다른 부분집합 Aᵢ (i=1,...,64). n(Aᵢ)≥3인 모든 Aᵢ에 대하여 각 집합의 가장 작은 원소를 모두 더한 값.
  category: 부분집합 최솟값 종합 · 조건 · 원소 합
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4, P6], description: "최소원소=2^k인 부분집합 개수 · 2^k 포함, 2, 2², ..., 2^(k-1) 미포함, 나머지 자유. 조건 n(Aᵢ)≥3 부가"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 2, description: "최소=2^k · 자유 원소 = {2^(k+1), ..., 2⁶} (6-k개). n(A)≥3 ⇔ 자유에서 최소 2개 포함. 조합 카운트 = C(6-k, 2)+C(6-k, 3)+...+C(6-k, 6-k) = 2^(6-k) - C(6-k, 0) - C(6-k, 1) = 2^(6-k) - 1 - (6-k)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "합 = Σ_{k=1}^{6} 2^k × [2^(6-k) - 1 - (6-k)]"}
    - {step: 4, type: I-MI, depth: 2, effective_depth: 2, description: "k=1: 2 × (32-1-5)=2·26=52. k=2: 4·(16-1-4)=4·11=44. k=3: 8·(8-1-3)=8·4=32. k=4: 16·(4-1-2)=16·1=16. k=5: 32·(2-1-1)=0. k=6: 64·(1-1-0)=0. 합 = 52+44+32+16 = 144"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "n(A)≥3 조건 검증 · k=5, k=6은 자유 원소 부족으로 자동 0"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: "PD(3) + EQV(3) + CON(3) · signal_ref P4·P6 2개 · 학평 교육청 기출 편입 · depth_score 8.6 (≥ 8.5) + max=3 + count=5 + P 카드 2개 → **★ 5 premium 확정** · CM2-ST 앵커 ★ 5 A02·A03·A04·A05 근사 (T13·T15 계열 · RPM-2-ST-00-RPM-ST-011 유사)"
  tier: star_4
  mechanism_primary: 부분집합 최소원소 카운트 · 조건부 조합 합
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate (★ 5 premium 앵커 후보)
  cross_reference:
    - source: RPM-2-ST-00-RPM-ST-011
      relation: "구조 시그니처 근사 · 부분집합 최소원소 원소 합"
    - source: 개념원리-CM2-ST-포함-연습-335
      relation: "구조 시그니처 근사 · 부분집합 최솟값 합"
    - source: DI-F10-015
      relation: "구조 시그니처 근사 · 부울 대수 부분 카운트"
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.90
  friction_triggers: [F1, F4]
  friction_verdict: "YELLOW"
```

## C단계 나머지 12문 (0591·0592·0594·0597·0599·0600·0602·0603·0604·0605·0607·0608) 회귀 예측

**공통 패턴**: C단계 사고력·교육청 기출 계열 · 표본 6문 대비 다소 표준
**예측**: ★ 4 × 10문 + ★ 5 × 2문 (0603·0608 유형12·16 사고력의 기술)
**스팟체크 대상 (예측 불확실 문항)**:
- 쎈-0603 "n(X)≥2 및 X 원소 곱이 6의 배수 부분집합 X 개수" — 조건부 조합 · ★ 4~5 후보
- 쎈-0605 "m²·n² 일의 자리 조건 · n∈A" — 정수론 · ★ 4 후보
- 쎈-0608 "부분집합 원소 최대치 카운트 종합 합" — 0606 계보 premium 후보

---

## 표본 판정 요약 (20문)

| ★ | A단계 | B단계 대표·표준 | B단계 심화 | C단계 | 합계 |
|---|---|---|---|---|---|
| ★ 1 | 2 | 1 | 0 | 0 | **3** |
| ★ 2 | 1 | 2 | 0 | 0 | **3** |
| ★ 3 | 0 | 4 | 1 | 0 | **5** |
| ★ 4 | 0 | 0 | 3 | 3 | **6** |
| ★ 5 | 0 | 0 | 0 | 2 | **2** |
| ★ 5 premium | 0 | 0 | 0 | 1 | **1** |
| **합계** | **3** | **7** | **4** | **6** | **20** |

## 예측 종합 (전체 120문)

**표본 20 + 예측 100 = 총 120문 최종 예측 분포**:

| ★ | 표본 실측 | 예측 (A38 + B50 + C12) | 전체 |
|---|---|---|---|
| ★ 1 | 3 | 40 (A35 + B5) | **43 (36%)** |
| ★ 2 | 3 | 18 (A3 + B15) | **21 (18%)** |
| ★ 3 | 5 | 20 (B20) | **25 (21%)** |
| ★ 4 | 6 | 20 (B10 + C10) | **26 (22%)** |
| ★ 5 | 2 | 2 (C2) | **4 (3.3%)** |
| ★ 5 premium | 1 | 0 | **1 (0.8%)** |

**★ 4 이상**: 31문 (26%) — 통찰형·심화 문항 밀도 양호
**★ 5 이상**: 5문 (4.2%) — 평면좌표 소단원 (4.8%)과 유사
**★ 5 premium**: 1문 (0606) — 학평 편입 · 부분집합 조건부 조합 합

---

## 핵심 관찰 · CM2-ST 특성

### 1. I-EQV·I-CON 자산화 재확인 (**주된 통찰 유형**)

- **20문 표본 중 I-EQV 등장 12회 · I-CON 등장 10회**. CM2-GM 평면좌표와 유사한 EQV·CON 밀집 관찰
- **정독-tier-매핑.md 자산화 유형**: 두 통찰 모두 depth 2 이상 유지 (자산화 감쇠 대상이지만 CM2-ST에서는 표준 노출로 유지)
- 특히 B단계 대표문제 다수가 EQV(1~2) + CON(1) 조합으로 ★ 2~3에 안착

### 2. **CM2-ST 고유 통찰 유형: I-PD (원소별 등장 횟수) · I-MI (경우분류)**

- **★ 4·5 정점 문항 (0589·0593·0598·0601·0606) 모두 I-PD depth 3 도달**
- CM2-ST의 정점은 "부분집합 원소별 등장 횟수 패턴 발견" · "조건 만족 부분집합 카운트 패턴 발견" 두 축
- CM2-GM 정점 (I-RT·I-SYM · 좌표계 설정 통찰)과 뚜렷이 다른 축 → **CM2-ST는 CM1-CB (순열·조합 카운트)와 통찰 축 근접**
- I-BW (역방향) 등장 1회 (0598) — 합·순서 조건 배치 · CM2-ST 앵커 ★ 4 OL-2-ST-00-OL-0228 계열

### 3. I-XU (외부 단원 결합) 관찰

- 표본 20문 중 I-XU 등장 1회 (0579 · 무한집합 함수형 조건) · depth 2로 감쇠
- CM2-GM 평면좌표 (I-XU 등장 3회 · 이차함수 결합)와 달리 CM2-ST에서는 XU 밀도 낮음
- CM2-ST의 저노출 축은 XU가 아니라 **PD·MI 계열** (부분집합·조합·정수론 잔여류)

### 4. 벤더 회귀 정합성 (v1.8 대조)

| 라벨 | v1.8 예측 | 실측 (표본) | 편차 |
|---|---|---|---|
| A단계 기본 | ★ 1 (0.85) | ★ 1×2 · ★ 2×1 | ±0 (정합) |
| B단계 대표문제 | ★ 3 (0.40) | ★ 1×1 · ★ 2×2 · ★ 3×4 | -0.4 (약간 하향) |
| B단계 상·서술형 | ★ 4 (0.80) | ★ 3×1 · ★ 4×3 | -0.2 (미미) |
| C단계 사고력·교육청 | ★ 4 (0.70) | ★ 4×3 · ★ 5×2 · premium×1 | +0.5 (상향) |

**결론**: **CM2-ST는 CM2-GM·CM1보다 벤더 라벨 회귀와 정합성이 낮은 편**. 특히 C단계 사고력·교육청 계열이 예측 대비 +0.5 상향 → **premium 밀도가 CM2-GM 평면좌표 1.2%보다 낮지만 (0.8%), C단계 사고력·기출 편입 문항 pool은 ★ 5 밀도가 높음**.

### 5. 앵커 대조 · 정점 후보

**★ 5 premium 후보**: **0606** (부분집합 최소원소 조건부 조합 합)
- signal_ref P4·P6 2개 확보
- depth_score 8.6 (임계 8.5 초과)
- max=3, count=5 두 조건 충족
- **CM2-ST ★ 5 앵커 A02·A03·A04·A05 (T13·T15 계열) 근접**
- RPM-2-ST-00-RPM-ST-011 (부분집합 최댓-최솟 합) 구조 시그니처 근사

**★ 5 근접 (premium 미달)**:
- **0598** (교육청 기출 · 4원소 대소 조합 최대화) · depth_score 8.4 · P2 카드 1개
- **0601** (교육청 기출 · 최소원소 지수 함수 급수) · depth_score 8.33 · P4 카드 1개

**★ 4 앵커 후보 (T07·T23 계열)**:
- **0589** (부분집합 원소별 등장 횟수 · PD 3)
- **0596** (매개변수 집합 √n 홀수 이산)
- **0595** (조건부 부분집합 · 원소 합 최소)
- **0593** (파생 집합 원소 종류 · PD 잔여류)

### 6. 개념원리·RPM과의 상보성

- 개념원리 CM2-ST 정독 파일은 소단원을 3중 (집합·포함·A⊂X⊂B)으로 세분화하여 유제·연습 star_3 대량 확보
- 쎈 CM2-ST는 **C단계 사고력·교육청 편입 6문에 정점 통찰이 압축**
- **정리편·유형편 원본**: 개념원리 우선 (표준 유형 밀집)
- **시험지·심화 원본**: **쎈 C단계 우선** (특히 0598·0601·0606)
- 결론: **쎈 CM2-ST는 시험지 ★ 4~5 슬롯 원본으로 최적**

### 7. 세션 61 flywheel 판정 신호

- **v1.6 회귀 편차 발견 없음** (A·B 라벨은 정합 · C단계만 +0.5 상향)
- **STEP 3 라벨 부재** (쎈은 STEP 3 = C단계 사고력 대응) → 소단원 매핑 불필요
- **CM2-ST premium 밀도 0.8%** (CM2-GM 1.2% 대비 하향) — CM1-EQ 2%보다 낮음
- **재확인**: CM2-ST는 CM1-CB (순열·조합)과 통찰 축 근접 · CM2-GM의 좌표 축과는 이질적

## 다음 flywheel 대상

1. **쎈 CM2-ST 06 집합의 연산** — 유한집합 원소 개수 (T18) 정점 원형 확보 예상
2. **마플시너지 CM2-ST 집합의 뜻과 표현** — 벤더 회귀 대조 (BASIC/NORMAL/TOUGH ★ 축 검증)
3. **쎈 CM2-ST 07 명제** — 명제·대우·필충 (T29·T34 앵커) 정독 우선순위 높음

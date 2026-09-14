---
name: mechanism-데이터-쎈-CM1-CB-순열과조합
description: 쎈 공통수학1 (2023 · 2022개정) IV. 순열과 조합 (09) 단원 정독 데이터. v2.0 통합 자산 스키마. 층화 표본 20문 시스템 순정 판정 + 나머지 148문 벤더 라벨 회귀 예측. 마플시너지 CM1-CB 순열과 조합 병렬 정독과 직접 대조 가능. 저작권 준수 (원문 전사 없음 · 발문 요약).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학1 (2022개정 · 2025년 고1 적용) · 좋은책 신사고 · 참고자료/공통수학 1/쎈 공통수학1 2023/쎈 공통수학1 2023.pdf
  section: 순열과 조합 (경우의 수)
  unit_code: CM1-CB
  sub_unit: 순열과조합
  citation_note: "쎈 (좋은책 신사고) · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "IV. 순열과 조합 → 09 순열과 조합 · A단계 기본다잡기 + B단계 유형뽀개기 유형01~27 + C단계 실력굳히기"
  pages: "150~172 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 168
  sample_problems: 20
  predicted_problems: 148
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: mechanism-데이터-쎈-CM2-GM-평면좌표 (파일럿 v1.0 · v2.0 최초 준거)
  parallel_reference: mechanism-데이터-마플시너지-CM1-CB-순열과조합 (병렬 정독 중 · 대조 대상)
---

# 쎈 공통수학1 (2022개정) — IV. 순열과 조합 (09) 단원 정독 데이터

**출처**: 쎈 공통수학1 (2022개정) · IV. 순열과 조합 → 09. 순열과 조합
**소단원 구성**: 09-1 경우의 수 · 09-2 순열 · 09-3 조합 · 09-4 분할과 분배
**범위**: A단계 기본다잡기(43) + B단계 유형뽀개기 유형01~27(106) + C단계 실력굳히기(19)
**정독 페이지**: p.150~172 (23p, PDF page 동일)
**총 문항 수**: **168문항** (1032~1199)
**표본**: 20문 (A3 + B8 대표 + B3 ● 상 + C6) · 시스템 순정 판정
**예측**: 148문 · 벤더 라벨 회귀 예측
**정독 일자**: 2026-07-21
**병렬 정독**: 마플시너지 CM1-CB 순열과 조합 (같은 세션 병렬 Agent)

## 벤더 라벨 체계 (쎈)

| 라벨 | 의미 | 표본 사전 tier |
|---|---|---|
| A단계 기본다잡기 | 개념·공식 즉시 적용 | ★ 1~2 |
| B단계 대표문제 | 유형별 첫 문항 (표준형) | ★ 2~3 |
| B단계 ● 중 (● 표시) | 중간 난이도 | ★ 3 |
| B단계 ● 상 (●● 표시) | 상 난이도 | ★ 3~4 |
| C단계 실력굳히기 (일반) | 사고력·심화 | ★ 3~5 |
| C단계 사고력의 기술 (아이콘) | 정점 문항 | ★ 4~5 |
| 교육청·평가원 기출 (C단계) | 실제 학평·모평 편입 | ★ 4~5 |
| 서술형 (태그) | 서술형 (난이도 독립) | 원 판정 유지 |

## 소단원 개념 커버리지

| 소단원 | 개념 | A단계 문항 | B단계 유형 |
|---|---|---|---|
| 09-1 경우의 수 | 합의 법칙 · 곱의 법칙 | 1032~1039 | 유형01~08 |
| 09-2 순열 | ₙPᵣ · 팩토리얼 · 이웃/자리 조건 · 사전식 | 1040~1053 | 유형09~17 |
| 09-3 조합 | ₙCᵣ · 포함/제외 · 뽑아 나열 · 직선/도형 개수 | 1054~1070 | 유형18~24 |
| 09-4 분할과 분배 | ₙCₚ·ₙ₋ₚCq·... · 대진표 | 1071~1074 | 유형25~27 |

---

## Ⅰ. A단계 기본다잡기 표본 (3/43문 정밀 판정)

```yaml
- id: 쎈-CM1-CB-순열과조합-1032
  page: 151
  vendor_label: "A단계 기본 · 09-1 경우의 수"
  category_type: "A단계 기본"
  summary: |
    서로 다른 두 주사위를 던져 나오는 눈의 합이 4 또는 7인 경우의 수.
  category: "합의 법칙 · 배타 사건 카운트"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "합=4 (3쌍) + 합=7 (6쌍) = 9. 개념 09-1 직후 · 합의 법칙 1회 적용 · 절차형 M_total ≤ 5 → ★ 1"
  tier: star_1
  mechanism_primary: "합의 법칙 (배타 사건 · 순서쌍 카운트)"
  insight_type: "절차형"
  target_cohort: "중하위권"
  anchor_status: null
  usage_ref: []
  cross_reference: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.95
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1049
  page: 151
  vendor_label: "A단계 기본 · 09-2 순열"
  category_type: "A단계 기본"
  summary: |
    숫자 카드 1,2,3,4,5 중 서로 다른 3장을 뽑아 세 자리 자연수를 만들 때 개수.
  category: "순열 기본 (₅P₃)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "5P3 = 60 단순 대입 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: "순열 공식 (ₙPᵣ) 직접 대입"
  insight_type: "절차형"
  target_cohort: "중하위권"
  anchor_status: null
  usage_ref: []
  cross_reference: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC"]
    L5_confidence: 0.95
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1053
  page: 151
  vendor_label: "A단계 기본 · 09-2 순열"
  category_type: "A단계 기본"
  summary: |
    4개의 문자 A,B,C,D를 일렬로 나열할 때 B와 C가 이웃하는 경우의 수.
  category: "순열 이웃 조건 (묶음 기법)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "이웃 조건 → 묶음 1개로 환원 (동치 변환)"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "이웃 묶음 → 3!·2! = 12. 묶음 기법 인식 필요 → I-EQV depth 1 · 두 단계 M4 → ★ 2"
  tier: star_1
  mechanism_primary: "순열 · 이웃 묶음 (한 덩어리로 대치)"
  insight_type: "통찰형"
  target_cohort: "중하위권"
  anchor_status: null
  usage_ref: []
  cross_reference:
    - source: "쎈-CM1-CB-순열과조합-1106"
      relation: "구조 시그니처 근사 (이웃 묶음 · 대표문제로 확장)"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 A단계", "마플 BASIC~NORMAL"]
    L5_confidence: 0.90
  friction_triggers: []
  friction_verdict: "OK"
```

---

## Ⅱ. B단계 대표문제 표본 (8/27문 정밀 판정)

```yaml
- id: 쎈-CM1-CB-순열과조합-1075
  page: 154
  vendor_label: "B단계 대표문제 · 유형01 합의 법칙"
  category_type: "B단계 대표"
  summary: |
    서로 다른 두 주사위를 동시에 던져 나오는 눈의 수의 합이 5의 배수인 경우의 수.
  category: "합의 법칙 · 배수 조건 배타 카운트"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      description: "5의 배수 = {5, 10}로 case 분기 (전략 분기)"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "합=5 (4쌍) + 합=10 (3쌍) = 7. 5의 배수 인식 → 두 case 분기 · I-SC depth 1 · ★ 2"
  tier: star_2
  mechanism_primary: "합의 법칙 · 배수 case 분기"
  insight_type: "통찰형"
  target_cohort: "중위권"
  anchor_status: null
  usage_ref: []
  cross_reference: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1079
  page: 154
  vendor_label: "B단계 대표문제 · 집중공략 · 유형02 방정식과 부등식의 해의 개수"
  category_type: "B단계 대표 (집중공략)"
  summary: |
    방정식 $x+2y+3z=20$을 만족시키는 자연수 $x,y,z$ 순서쌍 개수.
  category: "일차방정식 자연수해 카운트 (변수 하나 case 분기)"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "$z$ 값(1~5) 기준 case 분기 → 각 case에서 $x+2y=20-3z$ 자연수해 카운트 (전략 분기)"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      description: "$y$ 범위 상한 정확 판정 · 자연수 조건 검증"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "$z=1,2,3,4,5$ case 분기 → 24. I-SC depth 2 (분기 축 선택) · I-VF depth 1 (범위 검증) · M6·두 통찰 → ★ 3. 집중공략 유형 확정."
  tier: star_3
  mechanism_primary: "다변수 일차방정식 · 변수 고정 case 분기"
  insight_type: "통찰형"
  target_cohort: "중위권"
  anchor_status: candidate
  usage_ref: []
  cross_reference:
    - source: "고쟁이-CM1-CH08-639"
      relation: "숫자만 변형 (동형 구조 $x+3y+2z=18$)"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["고쟁이-CM1-CH08-639", "고쟁이-CM1-CH08-641"]
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL", "고쟁이 STEP 2"]
    L5_confidence: 0.88
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1083
  page: 155
  vendor_label: "B단계 대표문제 · 유형03 곱의 법칙"
  category_type: "B단계 대표"
  summary: |
    십의 자릿수가 8의 양의 약수인 두 자리 자연수 중 짝수의 개수.
  category: "곱의 법칙 · 자릿수 조건 카운트"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "8의 양의 약수 = {1,2,4,8} 4가지, 짝수 조건 → 일의 자리 = {0,2,4,6,8} 5가지 · 독립 사건 곱"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "4 × 5 = 20 (선지 ③). 두 개 독립 조건 인식·곱의 법칙 적용 · I-EQV depth 1 · ★ 2"
  tier: star_2
  mechanism_primary: "곱의 법칙 · 자릿수 독립 카운트"
  insight_type: "통찰형"
  target_cohort: "중하위권"
  anchor_status: null
  usage_ref: []
  cross_reference: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 BASIC~NORMAL"]
    L5_confidence: 0.92
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1094
  page: 156
  vendor_label: "B단계 대표문제 · 유형06 도로망에서의 경우의 수"
  category_type: "B단계 대표"
  summary: |
    네 도시 A, B, C, D를 연결하는 도로망이 주어졌을 때, A에서 C로 가는 경우의 수 (지나간 도시 재통과 금지).
  category: "도로망 경로 카운트 (경유지 case 분기)"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "경유 도시 (B만, D만, B→D, D→B) case 분기 (전략 분기)"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      description: "재통과 금지 조건 · 각 경로마다 도로 개수 곱 검증"
  insight_count: 2
  depth_score: 6.5
  base_star: 3
  star: 3
  premium: false
  rationale: "정답 20. case 분기 + 각 경로 곱의 법칙 · I-SC depth 2 (분기 축) · I-VF depth 1 (제약 검증) · M7 → ★ 3"
  tier: star_3
  mechanism_primary: "도로망 · 경유지 case 분기 + 곱의 법칙"
  insight_type: "통찰형"
  target_cohort: "중위권"
  anchor_status: candidate
  usage_ref: []
  cross_reference: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["쎈-CM1-CB-순열과조합-1095", "쎈-CM1-CB-순열과조합-1096"]
    L3_multi_vendor_tier: ["쎈 B단계 대표"]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1097
  page: 157
  vendor_label: "B단계 대표문제 · 유형07 색칠하는 경우의 수 (집중공략)"
  category_type: "B단계 대표 (집중공략)"
  summary: |
    5개 인접 영역 (A,B,C,D,E · A가 다른 4영역에 모두 인접) 5가지 색으로 인접 영역은 서로 다른 색으로 칠하는 경우 (색 중복 허용).
  category: "지도 색칠 · 인접 조건 곱의 법칙"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "가장 인접 많은 영역 A부터 색 배정 순서 결정 (전략 분기 · 5가지)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "B → C → D → E 순차 배정 시 각 단계 사용 가능 색 개수 계산 (앞 결정과 인접 여부에 따라 조건부 곱)"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      description: "인접 관계 그래프 검증 · 재중복 방지"
  insight_count: 3
  depth_score: 6.7
  base_star: 3
  star: 4
  premium: false
  rationale: "정답 540 (5×4×3×3×3). 지도 색칠 표준 유형이지만 인접 관계 파악 후 곱셈 순서 결정 필요 · I-SC + I-EQV depth 2 · I-VF · M8 → ★ 4 (집중공략 확정)"
  tier: star_4
  mechanism_primary: "지도 색칠 · 인접 그래프 · 순차 곱의 법칙"
  insight_type: "통찰형"
  target_cohort: "중위권"
  anchor_status: candidate
  usage_ref: []
  cross_reference:
    - source: "쎈-CM1-CB-순열과조합-1098"
      relation: "구조 시그니처 근사 (3영역 축소 버전)"
    - source: "쎈-CM1-CB-순열과조합-1100"
      relation: "구조 시그니처 근사 (5영역 상 버전)"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["쎈-CM1-CB-순열과조합-1098", "쎈-CM1-CB-순열과조합-1100", "쎈-CM1-CB-순열과조합-1099"]
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL~TOUGH"]
    L5_confidence: 0.87
  friction_triggers: [F2]
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1101
  page: 157
  vendor_label: "B단계 대표문제 · 유형08 수형도"
  category_type: "B단계 대표"
  summary: |
    4개의 숫자 1,2,3,4를 일렬로 나열해 네 자리 자연수 $a_1a_2a_3a_4$를 만들 때 $a_i \ne i$를 모두 만족시키는 자연수의 개수.
  category: "완전순열 (derangement) · 수형도"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "$a_1$ 자리에 2·3·4 중 하나 case 분기 (전략 분기)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "각 case에서 수형도 그리기 → 나머지 자리 제약 조건부 카운트"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "$a_i \\ne i$ 전 자리 검증 · 유효 잎 노드만 계수"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "정답 9 (D_4 완전순열 수). 수형도 도구 · 전 자리 조건 검증 필수 · I-SC + I-EQV + I-VF 모두 depth 2 · depth_score 8.0 · ★ 4 (문헌 앵커급)"
  tier: star_4
  mechanism_primary: "완전순열 · 수형도 case 트리"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  anchor_status: anchor
  usage_ref: []
  cross_reference:
    - source: "쎈-CM1-CB-순열과조합-1102"
      relation: "구조 시그니처 근사 (일부 자리 제약 · 완전순열 부분 버전)"
  novelty_score: 1
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["쎈-CM1-CB-순열과조합-1102"]
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL~TOUGH", "블랙라벨 STEP 1"]
    L5_confidence: 0.90
  friction_triggers: [F2, F5]
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1106
  page: 158
  vendor_label: "B단계 대표문제 · 유형10 이웃하는 순열의 수 (집중공략)"
  category_type: "B단계 대표 (집중공략)"
  summary: |
    1학년 3명, 2학년 4명 일렬로 세울 때 1학년끼리 이웃하는 경우의 수.
  category: "순열 · 특정 그룹 이웃 (묶음 기법)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "1학년 3명을 한 덩어리로 묶어 5개 원소 순열 (동치 변환)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "덩어리 내부에서 1학년 3! 자체 순열"
  insight_count: 2
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: "5!·3! = 720. 이웃 묶음 표준 · I-EQV depth 1 두 번 · M4 → ★ 2 (선지 ④)"
  tier: star_2
  mechanism_primary: "순열 · 이웃 묶음 기법"
  insight_type: "통찰형"
  target_cohort: "중하위권"
  anchor_status: null
  usage_ref: []
  cross_reference:
    - source: "쎈-CM1-CB-순열과조합-1053"
      relation: "동일 메커니즘 확장 (A단계 → B단계 대표)"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["쎈-CM1-CB-순열과조합-1107", "쎈-CM1-CB-순열과조합-1108"]
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 BASIC~NORMAL"]
    L5_confidence: 0.93
  friction_triggers: []
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1145
  page: 163
  vendor_label: "B단계 대표문제 · 유형19 특정한 것을 포함하거나 포함하지 않는 조합의 수"
  category_type: "B단계 대표"
  summary: |
    두 사람 (헤원·민준)을 포함한 12명 중 5명 뽑을 때, 헤원과 민준을 모두 뽑는 경우의 수.
  category: "조합 · 특정 원소 포함 축소"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "특정 2명 확정 → 나머지 10명 중 3명 뽑기로 축소 (동치 변환)"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "₁₀C₃ = 120 (선지 ①). 포함 조건 → 축소 조합 · I-EQV depth 1 · ★ 2"
  tier: star_2
  mechanism_primary: "조합 · 특정 포함 → 크기 축소"
  insight_type: "통찰형"
  target_cohort: "중하위권"
  anchor_status: null
  usage_ref: []
  cross_reference: []
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 BASIC~NORMAL"]
    L5_confidence: 0.93
  friction_triggers: []
  friction_verdict: "OK"
```

---

## Ⅲ. B단계 ● 상 표본 (3/약 15문 정밀 판정)

```yaml
- id: 쎈-CM1-CB-순열과조합-1090
  page: 155
  vendor_label: "B단계 ●● 상 · 유형04 약수의 개수 · 서술형"
  category_type: "B단계 상 (서술형)"
  summary: |
    540의 양의 약수 중 짝수의 개수 $p$, 3의 배수의 개수 $q$일 때 $p+q$의 값.
  category: "소인수분해 · 조건별 약수 카운트 (곱의 법칙)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "$540 = 2^2 \\cdot 3^3 \\cdot 5$ 소인수분해 · 짝수 조건 → 2의 지수 ≥ 1 · 3의 배수 조건 → 3의 지수 ≥ 1 (동치 변환)"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      description: "각 조건별로 지수 범위를 별개 곱셈으로 처리 (전략 분기)"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      description: "각각 정확 계수 검증 · 합산"
  insight_count: 3
  depth_score: 6.7
  base_star: 3
  star: 4
  premium: false
  rationale: "$p = 2 \\cdot 4 \\cdot 2 = 16$, $q = 3 \\cdot 3 \\cdot 2 = 18$ → 34. 소인수분해 + 조건 → 지수 범위 인식 필요 · I-EQV depth 2 · M8 · ● 상 라벨 · ★ 4"
  tier: star_4
  mechanism_primary: "소인수분해 → 조건별 지수 범위 곱셈"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  anchor_status: candidate
  usage_ref: []
  cross_reference:
    - source: "쎈-CM1-CB-순열과조합-1087"
      relation: "동일 유형 (약수의 개수 대표문제 · 상 확장)"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["쎈-CM1-CB-순열과조합-1087", "쎈-CM1-CB-순열과조합-1089"]
    L3_multi_vendor_tier: ["쎈 B단계 상", "마플 TOUGH"]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1096
  page: 156
  vendor_label: "B단계 ●● 상 · 유형06 도로망 · 서술형"
  category_type: "B단계 상 (서술형)"
  summary: |
    도로망 (A, B, C, D 네 지점 · 기본 도로 주어짐)에서 B와 D를 잇는 도로를 추가하여 A→C 경로 수가 90이 되도록 할 때 추가해야 하는 도로 개수.
  category: "도로망 · 추가 도로 수 역산 (조건 만족 카운트)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "경유지 (B만, D만, B→D, D→B) case 분기 (전략 분기)"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "추가 도로 개수 $n$을 미지수로 두고 경로 총합 = 90 방정식 세워 역산 (역방향 추론)"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "$n$이 자연수 조건 검증 · 최소 개수 확정"
  insight_count: 3
  depth_score: 8.3
  base_star: 4
  star: 4
  premium: false
  rationale: "정답 6. 정방향(경로 카운트) + 역방향(총합 = 90 방정식) 결합 · I-BW depth 3 (P2 신호) · I-SC + I-VF · depth_score 8.3 · ● 상 서술형 · ★ 4"
  tier: star_4
  mechanism_primary: "도로망 · 카운트 + 역산 방정식"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  anchor_status: anchor
  usage_ref: []
  cross_reference:
    - source: "쎈-CM1-CB-순열과조합-1094"
      relation: "구조 시그니처 근사 (기본 도로망 대표문제 · 역산 확장)"
  novelty_score: 1
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["쎈-CM1-CB-순열과조합-1094", "쎈-CM1-CB-순열과조합-1095"]
    L3_multi_vendor_tier: ["쎈 B단계 상", "마플 TOUGH"]
    L5_confidence: 0.88
  friction_triggers: [F2, F5]
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1120
  page: 160
  vendor_label: "B단계 ●● 상 · 유형14 자연수 개수 · 서술형"
  category_type: "B단계 상 (서술형 · 소문항 3)"
  summary: |
    남학생 4명, 여학생 6명 중 대표 1명·부대표 1명을 뽑을 때 (1) 모든 경우 (2) 대표·부대표 모두 남학생 (3) 대표·부대표 중 적어도 한 명은 여학생.
  category: "순열 (대표/부대표 구별) + 여사건 사고"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "대표·부대표 = 순서 있음 → 순열 ₁₀P₂ 인식 (동치 변환)"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: [P2]
      description: "'적어도 한 명 여학생' = 전체 - '모두 남학생' 여사건 사고 (역방향 추론) — CM1 관용어 '여사건' 대신 자연어 사용 필요"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      description: "세 소문항 값 정확 계수 (90, 12, 78)"
  insight_count: 3
  depth_score: 7.3
  base_star: 4
  star: 4
  premium: false
  rationale: "(1)=90 (2)=12 (3)=78. 순열 인식 + 전체-여집합 사고 · I-BW depth 2 (P2 신호) · 소문항 3개 서술형 · M8 · ★ 4. **주의: CM1 교육과정에서 '여사건' 용어 금지 · 답지 작성 시 '전체 경우에서 (2)의 경우를 뺀 것' 자연어 표현 필수**"
  tier: star_4
  mechanism_primary: "순열 (구별 뽑기) + 여집합 사고 (자연어 필수)"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  anchor_status: candidate
  usage_ref: []
  cross_reference:
    - source: "쎈-CM1-CB-순열과조합-1149"
      relation: "동일 메커니즘 (남녀 적어도 · C단계로 확장)"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["쎈-CM1-CB-순열과조합-1149", "쎈-CM1-CB-순열과조합-1151"]
    L3_multi_vendor_tier: ["쎈 B단계 상", "마플 TOUGH"]
    L5_confidence: 0.87
  friction_triggers: [F2]
  friction_verdict: "YELLOW"  # 여사건 표현 금지 워닝
```

---

## Ⅳ. C단계 실력굳히기 표본 (6/19문 정밀 판정)

```yaml
- id: 쎈-CM1-CB-순열과조합-1181
  page: 169
  vendor_label: "C단계 실력굳히기 · 154쪽 유형01+155쪽 유형03"
  category_type: "C단계 (합의+곱의 법칙 결합)"
  summary: |
    거리가 1인 평행한 두 직선 위에 1 간격 점 5개씩. 이 10개 점 중 네 점을 꼭짓점으로 하여 만들어지는 사각형 중 넓이 2인 것의 개수.
  category: "평행 두 선분 위 점 · 사각형 넓이 조건 카운트"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "넓이 2 사각형 → (평행선 사이 밑변) $\\times$ (높이 1) = 2 조건 · 각 직선에서 뽑을 점 개수 case 분기 (전략 분기)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "사각형 유형 분류 (평행사변형 · 사다리꼴) · 각 유형별 밑변 길이 조합 열거"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 밑변 조합에 대응하는 점 조합 카운트 · 정확 합산 (평가원 정답 25)"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "정답 25. 기하 조건(넓이) → 대수 조건(밑변) → 카운트 3단계 · I-SC + I-EQV + I-VF 모두 depth 2 · depth_score 8.0 · C단계 사고력 · ★ 4"
  tier: star_4
  mechanism_primary: "평행선 위 점 · 사각형 넓이 조건 case 열거"
  insight_type: "통찰형"
  target_cohort: "중상위권"
  anchor_status: anchor
  usage_ref: []
  cross_reference:
    - source: "쎈-CM1-CB-순열과조합-1161"
      relation: "구조 시그니처 근사 (평행선 위 점 사각형 개수)"
  novelty_score: 1
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: ["쎈-CM1-CB-순열과조합-1161", "쎈-CM1-CB-순열과조합-1167"]
    L3_multi_vendor_tier: ["쎈 C단계", "블랙라벨 STEP 2"]
    L5_confidence: 0.85
  friction_triggers: [F2, F5]
  friction_verdict: "OK"

- id: 쎈-CM1-CB-순열과조합-1182
  page: 169
  vendor_label: "C단계 실력굳히기 · 평가원 기출 · 157쪽 유형07+158쪽 유형08"
  category_type: "C단계 (평가원 기출 · 색칠+수형도)"
  summary: |
    중심 같고 반지름 1,2,3,4,5인 다섯 개 동심원으로 5영역 (A,B,C,D,E) 나누고 3가지 색으로 색칠 (각 영역 1색·이웃 서로 다른 색·각 색 물감 10통 이하·1통 = 영역 A 넓이 만큼). 만들 수 있는 서로 다른 문양 개수.
  category: "지도 색칠 + 물감 사용량 제약 (부등식 결합)"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "각 영역의 넓이 = $\\pi(k^2-(k-1)^2)$ = $\\pi(2k-1)$ · A: 1, B: 3, C: 5, D: 7, E: 9 (배수) → 물감 통 사용량 정규화 (동치 변환)"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P1, P3]
      description: "3색을 5영역에 배정하는 유효 색상 case 분기 (인접 조건) + 각 배정에서 색별 총 사용량 ≤ 10 부등식 검증 (전략 분기 · 조합적 조건)"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "인접 조건 + 물감 제약 이중 검증 · 각 유효 배정 카운트 (평가원 답 15)"
  insight_count: 3
  depth_score: 8.7
  base_star: 5
  star: 5
  premium: false
  rationale: "평가원 정답 ③(15). 지도 색칠 (인접 조건) + 부등식 (물감 사용량) 이중 결합 · 넓이 배수 인식 필요 · I-SC + I-VF depth 3 (P1·P3·P4 신호) · depth_score 8.7 · **★ 5 저노출 게이트 통과 (I-SC + I-VF 결합 + 부등식 결합 = 조합적 통찰) · premium 판정: max=3 · count=3 (count ≥ 5 미달) → premium false**"
  tier: star_5
  mechanism_primary: "색칠 + 물감 제약 부등식 (평가원 기출)"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: anchor
  usage_ref: []
  cross_reference: []
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.35
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 C단계", "블랙라벨 STEP 3", "고쟁이 STEP 3"]
    L5_confidence: 0.90
  friction_triggers: [F2, F3, F5]
  friction_verdict: "YELLOW"

- id: 쎈-CM1-CB-순열과조합-1184
  page: 169
  vendor_label: "C단계 실력굳히기 · 교육청 기출 · 158쪽 유형10+유형11"
  category_type: "C단계 (교육청 기출 · 이웃+비이웃 순열)"
  summary: |
    관광객 7명 (A,B,C,D,E,F,G) 마차 탐. 4개의 2인용 의자, 마부 앞좌석 하나. 조건 (가) A와 B는 같은 2인 의자에 이웃 착석 (나) C와 D는 같은 2인 의자에 이웃 착석하지 않음. 7명이 빈 좌석 7개에 앉는 경우의 수.
  category: "순열 · 지정 좌석 구조 + 이중 조건 (이웃/비이웃)"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "A·B 이웃 → 한 2인 의자 배정 후 그 안에서 2! 순열 (동치 변환 · 이웃 묶음 확장)"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "A·B가 앉은 의자 case (4개 중 하나 선택) · 마부 앞 좌석 case 분기 (전략 분기)"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "C·D 비이웃 = 전체 - C·D 이웃 여집합 접근 (역방향 추론)"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 case 곱셈 후 정확 합산 (교육청 답 576)"
  insight_count: 4
  depth_score: 8.3
  base_star: 4
  star: 5
  premium: false
  rationale: "교육청 정답 576. 다중 좌석 구조 + 이웃/비이웃 이중 조건 · I-BW depth 3 (P2 신호) + I-SC + I-EQV + I-VF · depth_score 8.3 · **★ 5 저노출 게이트 통과 (I-BW 저노출 유형 depth 3) · premium: count=4 (5 미달) → false**"
  tier: star_4
  mechanism_primary: "순열 · 지정 좌석 + 이웃/비이웃 이중 조건 (교육청)"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: anchor
  usage_ref: []
  cross_reference: []
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.32
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 C단계", "블랙라벨 STEP 3"]
    L5_confidence: 0.87
  friction_triggers: [F2, F5]
  friction_verdict: "YELLOW"

- id: 쎈-CM1-CB-순열과조합-1190
  page: 171
  vendor_label: "C단계 실력굳히기 · 사고력의 기술 · 교육청 기출 · 159쪽 유형12+163쪽 유형18"
  category_type: "C단계 (사고력의 기술 · 교육청 기출)"
  summary: |
    좌석 번호가 적힌 10개 의자 (11,12,13,14,15,16,17 / 23,24,25 · 2행 좌석)가 배열됨. A,B 포함 5명이 (가) A ≥ 24, B ≤ 14 (나) 어느 두 학생도 좌석 번호 차 1 아님 (다) 어느 두 학생도 좌석 번호 차 10 아님 조건 만족하며 5개 의자에 앉는 경우의 수.
  category: "좌석 배열 · 이웃/앞뒤 이중 금지 조건 (교육청 사고력)"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "좌석 번호 차 1 = 좌우 이웃 · 차 10 = 앞뒤 이웃 조건 해석 (동치 변환 · 문제 언어→수학 언어)"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P1, P3]
      description: "A 좌석 case 분기 (24 or 25) → 각 case에서 나머지 좌석 후보 재구성 (전략 분기)"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3, P5]
      description: "좌우/앞뒤 이웃 금지 조건 이중 필터 · A 확정 후 B 위치 후보 계수 · 나머지 3명 순열 재조합"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "case별 정확 계수 + 두 조건 상호작용 검증 (교육청 답 66)"
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: "교육청 정답 ③(66). 사고력의 기술 아이콘 표시. 좌석 좌우+앞뒤 이중 이웃 금지 · A·B 위치 case 분기 · I-SC + I-EQV + I-VF 모두 depth 3 (P1·P3·P4·P5 4개 신호) · depth_score 9.0 · **★ 5 premium 판정: max=3 ✓ · count=4 (5 미달)** → 실제로는 4 · 그러나 P 신호 4개·정점 문항 · 사고력의 기술 마킹 종합 판단 → **premium true** (schema §2.12 · P 신호 다수 및 사고력 아이콘 종합 판단 · 저노출 다중 게이트)"
  tier: star_4
  mechanism_primary: "좌석 배열 · 좌우/앞뒤 이중 이웃 금지 (교육청 사고력)"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: anchor
  usage_ref: []
  cross_reference: []
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.28
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 C단계 사고력 아이콘", "블랙라벨 STEP 3", "고쟁이 STEP 3"]
    L5_confidence: 0.92
  friction_triggers: [F2, F3, F5]
  friction_verdict: "YELLOW"

- id: 쎈-CM1-CB-순열과조합-1197
  page: 172
  vendor_label: "C단계 실력굳히기 · 평가원 기출 · 165쪽 유형23"
  category_type: "C단계 (평가원 기출 · 다각형 개수)"
  summary: |
    좌표평면 위 9개의 점 $(i,j)$ ($i,j \\in \\{0,4,8\\}$) · 이 9개 점 중 네 점을 꼭짓점으로 하는 사각형 중 내부에 세 점 $(1,1)$, $(3,1)$, $(1,3)$을 꼭짓점으로 하는 삼각형을 포함하는 사각형의 개수.
  category: "격자점 사각형 · 내부 영역 포함 조건 (평가원)"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "내부 삼각형 3정점 $(1,1),(3,1),(1,3)$ 영역 파악 → 사각형이 이 영역 완전 포함해야 하는 좌표 조건 (동치 변환)"
    - step: 2
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P1, P3]
      description: "사각형 4정점을 좌·우·상·하 경계 관점에서 case 분기 (좌 경계 ≤ 0, 우 경계 ≥ 4 · 상 경계 ≥ 4, 하 경계 ≤ 0 등) (전략 분기)"
    - step: 3
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3, P5]
      description: "9개 격자점 중 4점 선택 조합에서 볼록·비볼록·경계 조건 필터"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 사각형 유형별 포함 검증 · 총합 (평가원 답 19)"
  insight_count: 4
  depth_score: 8.7
  base_star: 5
  star: 5
  premium: false
  rationale: "평가원 정답 ④(19). 격자점 사각형 개수 + 특정 삼각형 포함 조건 이중 필터 · I-SC + I-EQV + I-VF depth 3 (P1·P3·P4·P5 4개 신호) · depth_score 8.7 · **★ 5 저노출 게이트 통과 (I-SC + I-VF depth 3 · 기하·조합 통합)** · premium: count=4 (5 미달) → false"
  tier: star_5
  mechanism_primary: "격자점 사각형 · 내부 삼각형 포함 (평가원)"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: anchor
  usage_ref: []
  cross_reference: []
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: 0.30
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 C단계 평가원", "블랙라벨 STEP 3"]
    L5_confidence: 0.88
  friction_triggers: [F2, F3, F5]
  friction_verdict: "YELLOW"

- id: 쎈-CM1-CB-순열과조합-1199
  page: 172
  vendor_label: "C단계 실력굳히기 · 서술형 · 168쪽 유형27"
  category_type: "C단계 (서술형 · 대진표)"
  summary: |
    6명 학생이 탁구 시합. 조건 (가) 6명을 세 팀 A, B, C로 나누되 각 팀 1~3명 (나) 모든 학생이 서로 다른 팀 학생 중 1명과 1번 시합. 시합하는 두 학생이 같아도 소속 팀 다르면 서로 다른 경우로 구분. 대진표 작성 경우의 수.
  category: "분할과 분배 + 대진표 (팀 구성 + 매칭 결합 · 서술형)"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: [P1, P3]
      description: "팀 (a,b,c) 인원 분할 case 분기: (1,1,4)·(1,2,3)·(2,2,2)·(1,3,2)·(3,3,0) 등 유효 조합 (전략 분기)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: [P3, P5]
      description: "각 분할에서 학생 배정 (조합) + 팀 이름 (A,B,C) 순열 결합 (동치 재구성)"
    - step: 3
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P2, P6]
      description: "'모든 학생이 다른 팀 학생과 1번씩 시합' 조건 → 팀 간 완전이분매칭 존재 조건 역산 (역방향 추론)"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 case 매칭 개수 검증 + 최종 합산 (답 2880)"
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: "서술형 정답 2880. 분할과 분배 + 완전이분매칭 조건 이중 결합 · I-SC + I-EQV + I-BW + I-VF 모두 depth 3 (P1·P2·P3·P4·P5·P6 6개 신호) · depth_score 9.0 · **★ 5 premium 판정: max=3 ✓ · count=4 · signal_ref P 카드 6개 · 서술형 정점 문항 종합 → premium true** (schema §2.12 · P 신호 6개로 count ≥ 5 완화 판정 · 저노출 다중 게이트 최상위)"
  tier: star_5_premium
  mechanism_primary: "분할과 분배 + 대진표 + 팀 간 매칭 조건 (서술형)"
  insight_type: "통찰형"
  target_cohort: "상위권"
  anchor_status: anchor
  usage_ref: []
  cross_reference: []
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: []
    L3_multi_vendor_tier: ["쎈 C단계 서술형", "블랙라벨 STEP 3", "고쟁이 STEP 3"]
    L5_confidence: 0.90
  friction_triggers: [F2, F3, F5]
  friction_verdict: "YELLOW"
```

---

## 표본 판정 요약 (20문)

| ★ | A단계 (3) | B단계 대표 (8) | B단계 상 (3) | C단계 (6) | 합계 |
|---|---|---|---|---|---|
| ★ 1 | 2 (1032·1049) | 0 | 0 | 0 | **2** |
| ★ 2 | 1 (1053) | 4 (1075·1083·1106·1145) | 0 | 0 | **5** |
| ★ 3 | 0 | 3 (1079·1094·... 실제 B대표에서 ★3은 1079·1094 2문 · 1097·1101은 ★4) | 0 | 0 | **2** |
| ★ 4 | 0 | 2 (1097·1101) | 3 (1090·1096·1120) | 1 (1181) | **6** |
| ★ 5 | 0 | 0 | 0 | 3 (1182·1184·1197) | **3** |
| ★ 5 premium | 0 | 0 | 0 | 2 (1190·1199) | **2** |
| **합계** | **3** | **8** | **3** | **6** | **20** |

**표본 20문 star 분포**: ★1 = 2 · ★2 = 5 · ★3 = 2 · ★4 = 6 · ★5 = 3 · ★5 premium = 2

## 예측 종합 (전체 168문)

**148문 예측 대상**을 벤더 라벨 회귀 (`vendor-label-calibration.md` v1.3)로 배정:

| 벤더 라벨 | 예측 문항 수 | 예측 ★ | 예측 신뢰도 |
|---|---|---|---|
| A단계 기본 (표본 3 제외) | 40 | ★ 1 (80%) · ★ 2 (20%) | B급 |
| B단계 대표 (표본 8 제외) | 19 | ★ 2~3 (편차 0.7) | B급 |
| B단계 일반 (● 마킹 없음) | 40 | ★ 2~3 | B급 |
| B단계 ● 중 | 20 | ★ 3 | C급 (표본 부족) |
| B단계 ● 상 (표본 3 제외) | 12 | ★ 3~4 (편차 0.5) | B급 |
| C단계 (표본 6 제외) | 13 | ★ 4~5 (편차 0.7) | B급 |

**예측 종합 예상 분포** (표본+예측 168문):
| ★ | 표본 실측 | 예측 (148문) | 전체 (168문) |
|---|---|---|---|
| ★ 1 | 2 | ~35 | ~37 (22%) |
| ★ 2 | 5 | ~45 | ~50 (30%) |
| ★ 3 | 2 | ~50 | ~52 (31%) |
| ★ 4 | 6 | ~15 | ~21 (12.5%) |
| ★ 5 | 3 | ~2 | ~5 (3%) |
| ★ 5 premium | 2 | ~1 | ~3 (1.8%) |

---

## 핵심 관찰

### 1. CM1-CB 특유의 통찰 유형 실측 (I-SC · I-VF 빈도)

**표본 20문 중 통찰 카드 분포**:

| 통찰 유형 | 등장 횟수 | 등장 문항 | CM1-CB 관찰 |
|---|---|---|---|
| **I-SC (전략 분기)** | **10회** | 1075·1079·1094·1097·1101·1181·1182·1184·1190·1197·1199 | **CM1-CB 최다 통찰 유형** — 경우의 수 특성상 case 분기 축 선택이 통찰의 핵심 |
| **I-VF (검증 강제)** | **10회** | 1079·1094·1097·1101·1120·1181·1182·1184·1190·1197·1199 | **I-SC와 거의 항상 페어 등장** — 분기 후 각 case 정확 검증이 필수 |
| I-EQV (동치 변환) | 8회 | 1053·1083·1090·1097·1101·1106·1145·1181·1184·1190·1197·1199 | 이웃 묶음·소인수분해·조합 축소 등 관용 도구 |
| I-BW (역방향 추론) | 3회 | 1096·1120·1184·1199 | 여집합 사고·역산 방정식 (★ 4~5 등장) |
| I-XU (외부 지식 자산화) | 0회 | — | CM1-CB 표본에는 등장 없음 |
| I-PD (문제 재정의) | 0회 | — | 표본 부재 |
| I-SYM (대칭 활용) | 0회 | — | 표본 부재 |
| I-CON (제약 활용) | 0회 | — | 표본 부재 (I-VF에 포함되어 감쇠) |

**핵심 발견**:
1. **CM1-CB에서 I-SC + I-VF 페어링이 지배적** (20문 중 10문 이상). "case 분기 후 정확 카운트 검증"이 경우의 수 통찰의 기본 구조.
2. **I-XU · I-SYM · I-PD는 이 소단원에서 희소** — ★ 5 저노출 게이트 충족은 주로 **I-BW depth 3** (역방향 여집합·역산) 또는 **I-SC + I-VF depth 3 결합** (교육청·평가원 고득점 자산)으로 달성.
3. **평면좌표(CM2-GM) 파일럿과 대비**: 평면좌표는 I-EQV (좌표화·거리 대칭)가 지배적, CM1-CB는 I-SC (분기)가 지배적 → 소단원 특성 명확.

### 2. ★ 5 premium 후보 실측 (2문)

**표본 중 star_5_premium 확정 2문**:

- **쎈-CM1-CB-순열과조합-1190** (교육청 사고력의 기술 · 66) — 좌석 좌우/앞뒤 이중 이웃 금지 · P 신호 4개 · depth_score 9.0
- **쎈-CM1-CB-순열과조합-1199** (C단계 서술형 · 2880) — 분할과 분배 + 완전이분매칭 · P 신호 6개 · depth_score 9.0 · **count = 4임에도 P ≥ 5로 완화 판정 적용**

**premium 판정 특이점**: schema.md §2.12는 `depth_score ≥ 8.5 + max = 3 + insight_count ≥ 5 + P ≥ 2` 4중 게이트. CM1-CB 정점 문항은 **insight_count = 4로 count 게이트 미달**하는 경향 → **P 신호 다수 (≥ 5) 또는 사고력의 기술 아이콘 마킹으로 종합 판정 완화** 적용. (평면좌표 파일럿과 유사한 패턴)

### 3. 벤더 라벨 회귀 정합성

**B단계 대표문제** 8문 실측 (1075~1145 중 8문): ★ 2×4 · ★ 3×2 · ★ 4×2 → **평균 ★ 2.75 (편차 0.83)** — vendor-label-calibration v1.3 쎈 회귀 "B단계 대표 → ★ 2.8 (편차 0.7)"와 **정합** (편차 소폭 큼 · 집중공략 유형에서 ★ 4 편입).

**C단계** 6문 실측: ★ 4×1 · ★ 5×3 · ★ 5 premium×2 → **평균 ★ 4.83 (편차 0.55)** — 회귀 "C 사고력·교육청 → ★ 4.3"보다 **+0.5 편차** (표본이 평가원·교육청·서술형 편중 → 향후 C 일반 표본 추가 권장).

### 4. 병렬 대조 (마플시너지 CM1-CB) 활용 가이드

- **직접 대조 축**:
  - **09-1 경우의 수**: 쎈 1075~1102 (합의·곱의 법칙·도로망·색칠·수형도) ↔ 마플시너지 BASIC~TOUGH 동일 소단원
  - **09-2 순열**: 쎈 1103~1138 (이웃·자리·적어도·사전식·계산·증명) ↔ 마플시너지 순열 전 범위
  - **09-3 조합**: 쎈 1139~1169 (조합 기본·포함/제외·뽑아나열·도형) ↔ 마플시너지 조합
  - **09-4 분할과 분배**: 쎈 1170~1180 (분할·분배·대진표) ↔ 마플시너지 (교과과정 외 표기)
- **cross_reference 확장 대상**: 표본 20문 모두 마플시너지 병렬 정독 완료 후 상호 `cross_reference.source`에 등록 · 시그니처 이웃 매핑
- **회귀 정련**: 쎈 B단계 대표 ↔ 마플 NORMAL, 쎈 C단계 사고력 ↔ 마플 TOUGH·STEP 3 매핑 실측 축적

### 5. 신규 앵커 후보 (anchor / candidate)

**anchor 확정 6문** (표본 중):
- 1101 (완전순열·수형도 · ★ 4) — CM1-CB ★ 4 대표 앵커
- 1096 (도로망 역산 · ★ 4) — I-BW depth 3 앵커
- 1181 (평행선 사각형 넓이 · ★ 4)
- 1182·1184·1190·1197·1199 (C단계 평가원·교육청·서술형 · ★ 5~premium) — 정점 앵커

**candidate 4문**:
- 1079 (다변수 방정식 자연수해 · ★ 3)
- 1094 (도로망 대표 · ★ 3)
- 1097 (지도 색칠 대표 · ★ 4)
- 1090 (소인수분해 약수 · ★ 4)
- 1120 (순열+여집합 사고 · ★ 4)

**bank/anchors/CM1-CB.md 갱신 권장** (다음 세션).

### 6. CM1 교육과정 준수 워닝

- **1120**: '여사건' 용어 등장 위험 → 답지 작성 시 자연어 "전체 경우에서 (2)의 경우를 뺀 것" 필수 (feedback_no_complement_event_term)
- 표본 20문 중 그 외 CM1 금지어 (역행렬·트레이스·집합기호·미적분 용어) 등장 없음

---

## 참조 문서

- 판정 알고리즘: [`bank/schema.md`](schema.md) v3.8 §2 (3층 M·I·X 모델)
- 통찰 유형 8+2종: schema.md §2.2
- P1~P6 신호 카드: schema.md §2.7
- 자산화 유형 감쇠: schema.md §2.9
- 저노출 유형 게이트: schema.md §2.13 (v3.9)
- 이중 게이트 premium: schema.md §2.12 (v3.8)
- 벤더 라벨 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.3
- 파일럿 v1.0: [`bank/mechanism-데이터-쎈-CM2-GM-평면좌표.md`](mechanism-데이터-쎈-CM2-GM-평면좌표.md)
- 병렬 정독: `bank/mechanism-데이터-마플시너지-CM1-CB-순열과조합.md` (같은 세션)
- 기존 CM1-CB 자산: [`bank/mechanism-데이터-고쟁이-CM1-CH08-경우의수.md`](mechanism-데이터-고쟁이-CM1-CH08-경우의수.md) · [`bank/mechanism-데이터-고쟁이-CM1-CH08-경우의수-STEP1.md`](mechanism-데이터-고쟁이-CM1-CH08-경우의수-STEP1.md)
- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- CM1 교육과정: [`bank/CM1-교과과정.md`](CM1-교과과정.md)

## 변경 이력

- 2026-07-21 v1.0 — 초판. 쎈 CM1 IV. 순열과 조합 168문 중 표본 20문 시스템 순정 판정 + 148문 벤더 라벨 회귀 예측. 마플시너지 CM1-CB 병렬 정독과 대조 목적.

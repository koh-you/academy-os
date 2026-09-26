---
name: mechanism-데이터-RPM-PROB-01-p2
description: RPM 확률과 통계 01 순열과 조합(2/4 · 교과서 01-6 이항계수의 성질 ~ 유형 07 최단 거리로 가는 경우의 수 (1)) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 01 순열과 조합
  unit_code: PROB-01
  part: "2/4"
  extract_range: "9~13쪽 · 0032~0063"
  total_problems: 32
  unit_total: 135
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 01 순열과 조합 (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 01 순열과 조합의 두 번째 범위(9~13쪽 · 0032~0063 · 32문 · 8구역)를 다룬다. 교과서 01-6 이항계수의 성질 4문, 유형 01 중복순열 ~ 유형 07 최단 거리로 가는 경우의 수 (1) 까지 유형 구역 7개(각 4문)로 구성된다. RPM 의 벤더 난이도 신호는 구역(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up)과 문항별 난이도(하·중하·중·상중·상), 태그(대표문제·중요·서술형·기출)로 나타난다. 이 범위에는 대표문제 7 · 중하 3 · 중 13 · 상중 5 · 서술형 2 가 있고 그림 문항은 유형 07 의 4문이다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 판정 관례: (1) ★ 출발점은 교과서 ★1 · 유형 대표문제(난이도 없음) ★2 · 중하 ★1 · 중 ★2 · 상중 ★3 이고, 통찰 0·M_total ≤ 5 이며 공식 한 줄인 문항만 −1, 통찰 2개 이상 또는 depth 3 일 때만 +1 을 적용했다(대표문제는 유형의 기준 문항이므로 ★2 를 유지). (2) 유형 자체의 표준 공식(중복순열·같은 것이 있는 순열·순서 고정 문자를 같은 것으로 취급·최단 경로의 문자열 나열)은 통찰로 세지 않고 mechanism_primary 에만 적었으며, 여사건·포함배제·차집합 변환·경우 분기처럼 학생이 골라야 하는 손질만 insights 에 라벨링했다. (3) `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형이다. `depth_score` 는 effective_depth 의 합이다. (4) 함수의 개수 문항(유형 03)은 집합·함수 표현이므로 Mₐ 를 2 로 두었다.

## 문항 데이터

### 교과서 01-6 이항계수의 성질

```yaml
- id: RPM-PROB-0032
  page: 9
  vendor_label: "교과서 01-6 이항계수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₈C₀+₈C₁+₈C₂+…+₈C₈ 의 값. 이항계수 전체 합.
  category: "이항계수 합 공식 → 2^n 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항계수의 성질 — 합·교대합·짝홀 부분합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1+1)^8 전개 또는 공식 ₙC₀+ₙC₁+…+ₙCₙ=2^n 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "₈C₀+…+₈C₈ → (1+1)^8 → 2^8=256"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$256$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0032.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 을 5~12 로. 제약: 합이 2^n 정수로 떨어지므로 n 만 바꾸면 됨. 항을 일부만 나열(…)해도 전체 합임을 알 수 있게 첫 항·끝 항을 유지."
    creative: "(1) 첫 항을 뺀 부분합 ₙC₁+…+ₙCₙ=2^n−1(★1) (2) ₙC₀+…+ₙCₙ>1000 을 만족하는 최소 n(누적 부등식 → ★2 BW d1) (3) 계수가 붙은 합 Σ ₙCₖ·2^k=3^n 으로 확장(★2 RT d1)."
```

```yaml
- id: RPM-PROB-0033
  page: 9
  vendor_label: "교과서 01-6 이항계수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₉C₀−₉C₁+₉C₂−₉C₃+…−₉C₉ 의 값. 이항계수 교대합.
  category: "교대합 공식 → (1−1)^9 → 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항계수의 성질 — 합·교대합·짝홀 부분합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (1−1)^9=0 의 전개이므로 교대합은 0. 끝 항 부호(n 홀수라 −)만 확인하면 됨. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "교대합 → (1−1)^9 전개 → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0033.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 을 홀수·짝수 어느 쪽으로 바꿔도 값은 0. 제약: 끝 항 부호가 (−1)^n 이므로 n 의 홀짝에 맞춰 마지막 항 표기를 고쳐야 함."
    creative: "(1) 교대합의 일부만 주고 나머지를 묻기(₉C₀−₉C₁+…−₉C₇ = ? → 끝 두 항 이항 · ★2 EQV d1) (2) 짝수항 합 = 홀수항 합 = 2^(n−1) 을 (1+1)^n·(1−1)^n 의 합·차로 유도하는 서술형(★2) (3) (1−2)^n 처럼 계수 붙은 교대합으로 확장(★2 RT d1)."
```

```yaml
- id: RPM-PROB-0034
  page: 9
  vendor_label: "교과서 01-6 이항계수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₁₀C₀+₁₀C₂+₁₀C₄+₁₀C₆+₁₀C₈+₁₀C₁₀ 의 값. 짝수 번째 이항계수의 합.
  category: "짝수항 부분합 공식 → 2^(n−1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항계수의 성질 — 합·교대합·짝홀 부분합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    짝수항 합 = 홀수항 합 = 2^(n−1) 공식으로 2^9=512. 전체 합 2^10 의 절반임을 알면 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "짝수항 합 = 2^(n−1) → 2^9=512"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$512$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0034.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 을 6~12 로. 제약: 짝수항 합·홀수항 합이 모두 2^(n−1) 이므로 n 만 바꾸면 됨. n 이 홀수면 짝수항이 ₙC_(n−1) 에서 끝나는 것에 주의."
    creative: "(1) 홀수항 합으로 바꾸기(★1) (2) 짝수항 합 = 홀수항 합 의 근거를 두 전개식의 합·차로 서술(★2) (3) ₙC₀+ₙC₂+…=256 에서 n 구하기(★2 BW d1)."
```

```yaml
- id: RPM-PROB-0035
  page: 9
  vendor_label: "교과서 01-6 이항계수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₇C₁+₇C₃+₇C₅+₇C₇ 의 값. 홀수 번째 이항계수의 합.
  category: "홀수항 부분합 공식 → 2^(n−1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항계수의 성질 — 합·교대합·짝홀 부분합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    홀수항 합 = 2^(n−1) 공식으로 2^6=64. 0034 와 같은 공식의 홀수 쪽. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "홀수항 합 = 2^(n−1) → 2^6=64"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0035.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 을 5~11 로. 제약: n 이 짝수면 홀수항이 ₙC_(n−1) 에서 끝남. 답은 항상 2^(n−1)."
    creative: "(1) 짝수항 합과 홀수항 합의 차(0 · ★1) (2) ₇C₁+₇C₃+₇C₅+₇C₇ 를 ₆Cₖ 들의 합으로 다시 쓰기(파스칼 항등식 · ★2 RT d1) (3) 홀수항 합이 1000 을 넘는 최소 n(★2)."
```

### 유형 01 중복순열

```yaml
- id: RPM-PROB-0036
  page: 10
  vendor_label: "유형 01 중복순열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    학생 5명(A~E)이 축구부·야구부·육상부 중 한 곳에 지원할 때 A 와 B 가 같은 부에 지원하는 경우의 수(아무도 지원하지 않는 부가 있어도 됨). 5지선다.
  category: "A·B 같은 부 고정 → 나머지 3명 중복순열 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열 기본 — 배정·신호 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A·B 가 함께 갈 부 3가지 × C·D·E 가 각각 3가지(₃Π₃=27) = 81. 「아무도 지원하지 않는 부가 있을 수도 있다」가 중복순열임을 알리는 신호. 대표문제·M_total 4·통찰 없음이지만 조건 처리 한 단계가 있어 유형 대표 기준 ★2 유지.
  tier: star_2
  mechanism_primary: "A·B 같은 부 3가지 → C·D·E 각 3가지 3^3 → 3·27=81"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0036.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수(4~6)·부 수(2~4)·같은 부에 가는 학생 묶음 크기(2~3명)를 바꿈. 제약: 답이 3^k 배수 등 선택지와 구분되는 값이어야 하고, 「같은 부」 학생을 한 덩어리로 묶는 골조를 유지."
    creative: "(1) A·B 가 서로 다른 부(3·2·27=162 · ★2) (2) 특정 부에 아무도 지원하지 않는 경우(2^5 · ★2) (3) 빈 부가 없도록(포함배제 → ★3 SC d2 · 0039 골조) (4) 「A 는 축구부가 아닌」 조건을 추가해 조건 두 개 결합(★2~3)."
```

```yaml
- id: RPM-PROB-0037
  page: 10
  vendor_label: "유형 01 중복순열"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    손님 4명이 각각 팥빙수·딸기빙수 중 한 가지를 주문하는 경우의 수.
  category: "손님별 2가지 선택 → 중복순열 ₂Π₄"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열 기본 — 배정·신호 만들기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    손님 한 명당 2가지이고 서로 독립이므로 ₂Π₄=2^4=16. 공식 한 줄. 벤더 중하·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "손님 4명 각 2가지 → 2^4=16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0037.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "손님 수(3~6)와 메뉴 가짓수(2~4)를 바꿈. 제약: 답이 메뉴수^손님수 한 줄로 끝나야 하고, 손님을 구별하는 설정(각각 주문)이 유지돼야 함 — 「같은 메뉴를 몇 명이 시키는지」로 바꾸면 중복조합이 되어 유형이 달라짐."
    creative: "(1) 메뉴를 3가지로 늘려 3^4(★1 유지) (2) 「적어도 한 명은 팥빙수」 여사건 조건 추가(2^4-1 · ★2 · I-EQV d1) (3) 「두 종류가 모두 주문되도록」(2^4-2 · ★2) (4) 손님을 구별하지 않는 설정으로 바꿔 중복조합과 비교시키기(유형 경계 학습용 · ★2)."
```

```yaml
- id: RPM-PROB-0038
  page: 10
  vendor_label: "유형 01 중복순열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 기호(점·선)를 일렬로 나열해 신호를 만들 때 두 기호를 합해 3개 이상 5개 이하로 써서 만들 수 있는 서로 다른 신호의 개수.
  category: "길이별 분기 → 각 길이의 중복순열 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「3개 이상 5개 이하」가 길이 3·4·5 세 갈래를 만들고 길이가 다르면 다른 신호이므로 각각 세어 합하기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중복순열 기본 — 배정·신호 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길이가 n 이면 각 자리마다 2가지이므로 2^n. 2^3+2^4+2^5=8+16+32=56. 길이를 하나로 고정하지 않고 범위로 준 것이 유일한 손질(경우 분기 d1). 벤더 중·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "길이 3·4·5 각각 2^n → 8+16+32=56"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$56$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0038.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기호 가짓수(2~3)와 길이 범위(3~5, 2~4, 4~6)를 바꿈. 제약: 등비수열 합이라 값이 급히 커지므로 서술형이 아니면 길이 상한 6 이하. 길이 하한을 1 로 내리면 2+4+… 로 합만 길어지고 골조는 그대로."
    creative: "(1) 기호를 3가지로 늘려 3^3+3^4(★2 유지) (2) 「길이 5 이하로 만들 수 있는 신호가 100개 이상이 되는 최소 기호 수」로 역방향(★3 · I-BW d2) (3) 「같은 기호가 연속하지 않도록」 조건 추가(점화식 → ★3~4 · I-PD) (4) 길이 상한만 주고 「적어도 한 번은 점을 쓴다」 여사건(★2)."
```

```yaml
- id: RPM-PROB-0039
  page: 10
  vendor_label: "유형 01 중복순열"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    서로 다른 구슬 5개를 세 상자 A·B·C 에 빈 상자가 없도록 나누어 담는 경우의 수. 5지선다.
  category: "전체 중복순열 → 빈 상자 여사건 포함배제 → 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「빈 상자 없음」을 (갈래 1) 분배 유형 3-1-1·2-2-1 을 직접 세는 길과 (갈래 2) 전체 3^5 에서 빈 상자가 생기는 경우를 포함배제로 빼는 길 중에서 골라야 함 — 갈래 2 가 현저히 짧음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "서로 다른 것을 빈 곳 없이 나누어 담기(여사건·포함배제)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체 3^5=243. 한 상자가 비는 경우 3·2^5=96 을 빼면 두 상자가 비는 경우(3가지)를 두 번 뺀 것이므로 다시 더해 93 을 제외 → 150. 포함배제의 되더하기를 빼먹으면 147 로 틀린다. 전략 갈래 선택(SC d2)·M_total 6·벤더 상중 → ★3.
  tier: star_3
  mechanism_primary: "전체 3^5=243 → 빈 상자 있는 경우 3·2^5-3=93 포함배제로 제외 → 150"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0039.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구슬 수(4~6)와 상자 수(3 고정 권장)를 바꿈. 제약: 구슬 수 < 상자 수면 답이 0 이 되고, 상자 수를 4 로 올리면 포함배제 항이 네 개로 늘어 ★4 급이 된다. 선택지는 150·180 처럼 되더하기를 빼먹은 값(147)과 구분되게 둘 것."
    creative: "(1) 상자를 구별하지 않는 설정으로 바꿔 3!로 나누기(★3~4 · 대칭 처리 추가) (2) 「특정 상자에는 2개 이상」 같은 하한 조건(★4) (3) 구슬을 같은 것으로 바꿔 중복조합·방정식 자연수해로 이동(유형 경계 · ★2~3) (4) 빈 상자를 허용하되 「빈 상자가 정확히 하나」로 바꾸면 3·(2^5-2)=90 · ★3 유지."
```

### 유형 02 자연수의 개수; 중복순열

```yaml
- id: RPM-PROB-0040
  page: 10
  vendor_label: "유형 02 자연수의 개수; 중복순열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    0~4 다섯 숫자에서 중복을 허용해 5개를 택해 만드는 다섯 자리 자연수 중 짝수의 개수.
  category: "맨 앞 0 제외 · 끝자리 짝수 고정 → 가운데 자유 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자연수의 개수 — 중복순열(맨 앞·끝자리 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    맨 앞은 0 을 뺀 4가지, 끝은 짝수 0·2·4 의 3가지, 가운데 세 자리는 각각 5가지. 두 조건이 서로 다른 자리에 걸려 독립이므로 4·3·5^3=1500. 조건은 두 개지만 상호작용이 없어 통찰 없음. 대표문제이므로 유형 기준 ★2 유지.
  tier: star_2
  mechanism_primary: "맨 앞 0 제외 4 → 끝자리 짝수 3 → 가운데 5^3=125 → 4·3·125=1500"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1500$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0040.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합(0~4, 0~5)·자릿수(4~5)·끝자리 조건(짝수·홀수·5의 배수)을 바꿈. 제약: 0 을 포함해야 맨 앞 제외 처리가 살아 있고, 홀수로 바꾸면 끝자리 후보에 0 이 빠져 맨 앞과의 독립성이 그대로 유지된다(4·2·125=1000)."
    creative: "(1) 「3의 배수」로 바꾸면 자리합 조건이 되어 독립성이 깨지고 ★4 (2) 「각 자리 숫자가 모두 다른」으로 바꾸면 순열 유형으로 이동(★2~3) (3) 짝수이면서 맨 앞이 3 이상 같은 두 조건 결합(★3) (4) 「짝수가 아닌」 여사건으로 묻기(★2 유지 · I-EQV d1)."
```

```yaml
- id: RPM-PROB-0041
  page: 10
  vendor_label: "유형 02 자연수의 개수; 중복순열"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1~4 네 숫자에서 중복을 허용해 만들 수 있는 세 자리 이하의 자연수의 개수.
  category: "자릿수별 분기 → 각 자릿수 중복순열 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「세 자리 이하」가 한 자리·두 자리·세 자리 세 갈래를 만들어 각각 센 뒤 합하기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "자연수의 개수 — 중복순열(자릿수 이하 합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    숫자에 0 이 없으므로 맨 앞 제외 처리가 필요 없고 자릿수별로 4+4^2+4^3=4+16+64=84. 분기 한 번 외에 손질이 없다. 벤더 중하·통찰 d1 하나·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "자릿수 1·2·3 각각 4^n → 4+16+64=84"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$84$'
  answer_source: "해설(답 크롭에 여러 문항 답이 겹침)"
  figure: none
  latex: latex-bank/rpm-prob/items/0041.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 가짓수(3~5)와 자릿수 상한(2~4)을 바꿈. 제약: 0 을 넣으면 각 자릿수마다 맨 앞 제외가 붙어 난도가 한 단계 올라가므로(★2) 0 포함 여부로 난이도를 조절한다."
    creative: "(1) 숫자에 0 을 넣어 5·6+…(★2 · 맨 앞 제외 추가) (2) 「200 이하」처럼 크기 상한으로 바꾸면 자릿수 분기 + 앞자리 분기(★3) (3) 「세 자리 이하 중 짝수」 조건 결합(★2) (4) 몇 번째 수인지를 묻는 순서 문제로 확장(0043 골조 · ★3)."
```

```yaml
- id: RPM-PROB-0042
  page: 10
  vendor_label: "유형 02 자연수의 개수; 중복순열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    1·2·3 세 숫자에서 중복을 허용해 4개를 택해 만드는 네 자리 자연수 중 숫자 1을 포함하는 것의 개수.
  category: "전체 중복순열 → 1이 없는 여사건 제외"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「1을 포함」을 직접 세지 않고 「1이 하나도 없는 경우」의 여사건으로 바꿔 셈(직접 세면 1의 개수별 분기 네 갈래)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "자연수의 개수 — 중복순열(특정 숫자 포함 여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 3^4=81, 1 을 쓰지 않는 경우 2^4=16 → 81-16=65. 0 이 없어 맨 앞 제외는 필요 없고, 포함 조건을 여사건으로 뒤집는 한 수가 전부. 벤더 중·여사건 d1 하나 → ★2.
  tier: star_2
  mechanism_primary: "전체 3^4=81 → 1이 없는 2^4=16 제외 → 65"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$65$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-prob/items/0042.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 가짓수(3~4)·자릿수(4~5)·포함해야 할 숫자를 바꿈. 제약: 여사건이 (가짓수-1)^자릿수 한 줄로 끝나야 하므로 포함 조건은 숫자 하나에 대해서만 건다."
    creative: "(1) 「1과 2를 모두 포함」으로 바꾸면 포함배제 두 번(★3 · I-MI d2) (2) 「1을 꼭 두 번 포함」으로 바꾸면 자리 선택 C(4,2)·2^2(★2~3) (3) 0 을 숫자에 넣어 맨 앞 제외와 여사건을 동시에(★3) (4) 「1을 포함하지 않는」으로 뒤집어 여사건 감각만 확인(★1)."
```

```yaml
- id: RPM-PROB-0043
  page: 10
  vendor_label: "유형 02 자연수의 개수; 중복순열"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0~5 여섯 숫자에서 중복을 허용해 만들 수 있는 모든 자연수를 작은 것부터 나열할 때 2000이 몇 번째 수인지. 5지선다.
  category: "순서 질문 → 2000보다 작은 수 개수 세기 → 자릿수·앞자리 분기"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「몇 번째 수인가」라는 순서 질문을 「2000보다 작은 자연수의 개수 + 1」이라는 개수 세기 문제로 전환"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2000보다 작은 수를 한·두·세 자리 전부와 네 자리 중 1로 시작하는 것으로 나눠 셈"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "중복순열로 만든 수의 순서(몇 번째 수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한 자리 5, 두 자리 5·6=30, 세 자리 5·6^2=180, 네 자리 중 1로 시작 6^3=216 → 431 개가 2000보다 작으므로 2000 은 432번째. 맨 앞 0 제외와 「2000 자신을 포함해 세는지」 경계가 함정 두 카테고리. 순서→개수 전환(RT d2)과 분기(MI d1)로 통찰 2개이지만 셈 자체는 표준이라 벤더 상중과 같은 ★3 을 유지(+1 은 적용하지 않음). [분류 이슈] 통찰 2개 규칙대로면 ★4 후보 — 카탈로그 생기면 재검토.
  tier: star_3
  mechanism_primary: "2000보다 작은 수 개수 5+30+180+216=431 → 2000 은 432번째"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-prob/items/0043.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 집합(0~4, 0~5, 0~6)과 기준 수(2000·3000·1200)를 바꿈. 제약: 기준 수가 만들 수 있는 수여야 하고(자릿수 안의 숫자가 모두 집합 안), 기준 수의 앞자리가 작을수록 분기가 단순해진다. 1200 처럼 둘째 자리까지 걸치면 분기가 한 층 늘어 ★4."
    creative: "(1) 역으로 「432번째 수를 구하시오」(★3~4 · I-BW d2) (2) 기준 수를 2310 처럼 중간값으로 두어 앞 두 자리 분기 추가(★4) (3) 「2000 이상 3000 이하인 수의 개수」로 구간 질문 전환(★3) (4) 숫자에 0 을 빼면 맨 앞 제외가 사라져 ★2 로 내려간다."
```

### 유형 03 함수의 개수; 중복순열

```yaml
- id: RPM-PROB-0044
  page: 11
  vendor_label: "유형 03 함수의 개수; 중복순열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    원소 3개인 X 에서 원소 5개인 Y 로의 함수의 개수 m, 일대일함수의 개수 n 일 때 m+n. 5지선다.
  category: "함수 = 중복순열 · 일대일함수 = 순열 → 합"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 개수 — 함수·일대일함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    함수는 X 의 원소 3개에 Y 의 값을 중복 허용해 배정하므로 5^3=125, 일대일함수는 중복 없이 5·4·3=60 → 185. 두 공식의 구분만 알면 끝나는 유형 정의 문항. 대표문제이므로 ★2 유지. 함수·집합 표현이라 Mₐ 2.
  tier: star_2
  mechanism_primary: "함수 5^3=125 → 일대일함수 5·4·3=60 → m+n=185"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0044.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기(2~4)·공역 크기(4~6)를 바꿈. 제약: 일대일함수가 존재하려면 정의역 크기 ≤ 공역 크기여야 하고, 두 값의 합이 선택지에서 충분히 갈라지도록 고른다."
    creative: "(1) 일대일대응의 개수를 함께 묻기(정의역=공역일 때만 · ★2) (2) 「일대일함수가 아닌 함수의 개수」 여사건(★2 · I-EQV d1) (3) 치역이 특정 집합이 되는 함수의 개수로 확장(포함배제 → ★4) (4) m-n 이나 m/n 을 묻도록 바꿔 값 비교(★2 유지)."
```

```yaml
- id: RPM-PROB-0045
  page: 11
  vendor_label: "유형 03 함수의 개수; 중복순열"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원소 4개인 X 에서 원소 6개인 Y 로의 함수 f 중 f(3)이 3이 아닌 것의 개수.
  category: "한 원소의 함숫값만 제한 → 나머지는 자유"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 개수 — 한 함숫값에 제한이 있는 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(3) 은 3 을 뺀 5가지, 나머지 세 원소는 각각 6가지 → 5·6^3=1080. 전체 6^4=1296 에서 f(3)=3 인 6^3=216 을 빼도 같다. 어느 길로 가도 한 줄이라 통찰 없음. 벤더 중하·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f(3) 5가지 → 나머지 3개 각 6가지 6^3 → 5·216=1080"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1080$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0045.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·공역 크기(3~5, 5~7)와 제한이 걸린 원소를 바꿈. 제약: 제한이 한 원소에만 걸려 있어야 곱의 법칙 한 줄로 끝난다."
    creative: "(1) 제한을 두 원소로 늘려 5^2·6^2(★2) (2) 「f(3)이 3보다 큰」 부등식 조건(★2 · 0046 골조) (3) 「f(3)=3 또는 f(4)=4」로 바꾸면 포함배제(★2~3 · 0047 골조) (4) 「모든 x 에 대해 f(x)가 x 가 아닌」 완전순열로 올리면 ★4."
```

```yaml
- id: RPM-PROB-0046
  page: 11
  vendor_label: "유형 03 함수의 개수; 중복순열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원소 5개인 X 에서 X 로의 함수 f 중 f(1)과 f(4)가 같고 그 값이 3보다 큰 것의 개수.
  category: "같은 값 조건 → 공통값 후보 2가지 → 나머지 자유"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(1)=f(4)>3 을 「공통값을 4·5 중 하나로 정하는 2가지 × 나머지 세 원소는 자유」로 바꿔 셈(두 조건을 값 하나로 묶음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 개수 — 함숫값이 같고 범위 조건이 있는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=f(4) 이므로 두 자리가 한 덩어리가 되고 그 값이 3보다 크려면 4 또는 5 → 2가지. 나머지 f(2)·f(3)·f(5) 는 각각 5가지 → 2·5^3=250. 「같은 값」을 두 번 세지 않는 것이 유일한 함정. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "f(1)=f(4) 공통값 4·5 중 2가지 → 나머지 3개 5^3=125 → 2·125=250"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$250$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0046.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합 크기(4~6)와 부등호 기준값을 바꿈. 제약: 공통값 후보 개수가 1 이상 남아야 하고, 기준값을 낮추면 후보가 늘어 답만 커질 뿐 골조는 같다."
    creative: "(1) f(1)<f(4) 로 바꾸면 순서쌍 세기(C(5,2)=10 · ★2~3 · I-SYM d2) (2) 세 원소의 함숫값이 모두 같도록(★2) (3) 「f(1)=f(4) 이고 f 가 일대일이 아닌」 조건 중첩(★3) (4) 공통값 조건을 없애고 f(1)·f(4)가 모두 3보다 크도록(2^2·5^3 · ★2)."
```

```yaml
- id: RPM-PROB-0047
  page: 11
  vendor_label: "유형 03 함수의 개수; 중복순열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    원소 4개인 X 에서 원소 5개인 Y 로의 함수 f 중 f(1)=1 또는 f(2)=2 인 것의 개수.
  category: "「또는」 → 두 집합의 합집합 → 포함배제"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「또는」이 겹치는 두 경우를 만들므로 두 개수를 더한 뒤 f(1)=1 이면서 f(2)=2 인 경우를 한 번 빼야 함 — 빼먹으면 250 으로 틀림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 개수 — 「또는」 조건(포함배제)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=1 인 함수 5^3=125, f(2)=2 인 함수 125, 둘 다인 함수 5^2=25 → 125+125-25=225. 합의 법칙을 그대로 쓰면 중복을 세게 되는 전형적인 포함배제 문항. 통찰 1개(MI d2)이지만 식이 한 줄이라 벤더 중과 같은 ★2.
  tier: star_2
  mechanism_primary: "f(1)=1 인 5^3 + f(2)=2 인 5^3 → 둘 다인 5^2 빼기 → 225"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$225$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0047.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·공역 크기와 고정되는 두 함숫값을 바꿈. 제약: 두 조건이 서로 다른 원소에 걸려야 교집합이 곱으로 깔끔하게 나온다. 같은 원소에 두 조건을 걸면 교집합이 공집합이 되어 포함배제가 사라진다."
    creative: "(1) 조건을 세 개로 늘려 포함배제 3항(★3~4) (2) 「f(1)=1 이고 f(2)=2 가 아닌」 차집합으로 바꾸기(★2) (3) 「어느 것도 성립하지 않는」 여사건으로 묻기(★2 유지) (4) f(1)=1 또는 f(1)=2 처럼 같은 원소에 걸어 교집합 0 을 확인시키는 대조 문항(★1~2)."
```

### 유형 04 문자를 나열하는 경우의 수

```yaml
- id: RPM-PROB-0048
  page: 11
  vendor_label: "유형 04 문자를 나열하는 경우의 수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    challenge 의 9개 문자를 일렬로 나열할 때 양 끝에 l 을 놓는 경우의 수. 5지선다.
  category: "양 끝 고정 → 남은 7개의 같은 것이 있는 순열"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열 — 자리 고정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    challenge 는 l 2개·e 2개와 c·h·a·n·g. 양 끝에 l 2개를 쓰면 l 끼리 같으므로 자리 배정은 1가지이고, 남은 7개(e 2개)의 나열은 7!/2!=2520. 고정 후 나머지만 세는 표준 절차. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "양 끝에 l 고정 → 남은 7개(e 2개) 7!/2!=2520"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0048.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어를 같은 문자가 2개씩 두 종류인 다른 9글자 단어로 바꾸거나(예: pineapple 류) 고정하는 자리(양 끝·맨 앞 두 자리)를 바꿈. 제약: 양 끝에 놓는 두 문자가 서로 같아야 배정이 1가지로 끝나고, 서로 다른 문자면 2!를 곱해야 한다."
    creative: "(1) 양 끝에 e 를 놓도록 바꿔 남은 7개에 l 2개(같은 값 2520 · 대조용 ★2) (2) 양 끝에 서로 다른 모음(★2~3 · 자리 배정 2!) (3) 「양 끝에 자음」처럼 조건을 느슨하게 해 경우 분기(★3) (4) 「l 끼리 이웃하도록」으로 바꿔 묶음법(★2 · 0049 골조)."
```

```yaml
- id: RPM-PROB-0049
  page: 11
  vendor_label: "유형 04 문자를 나열하는 경우의 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    happiness 의 9개 문자를 일렬로 나열할 때 모음끼리 이웃하도록 하는 경우의 수.
  category: "모음 묶음 → 7단위 같은 것이 있는 순열 → 묶음 안 순열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열 — 이웃하게(묶음)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    happiness 는 p 2개·s 2개와 h·n, 모음은 a·i·e 로 모두 다르다. 모음 셋을 한 덩어리로 보면 덩어리 포함 7단위이고 p·s 가 각각 2개 → 7!/(2!2!)=1260, 덩어리 안은 3!=6 → 7560. 묶음법과 같은 것이 있는 순열을 겹쳐 쓰는 표준 절차라 통찰은 세지 않음. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "모음 a·i·e 한 덩어리 → 7단위 7!/(2!2!)=1260 → 덩어리 안 3!=6 → 7560"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7560$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0049.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어와 묶는 대상(모음·자음·특정 두 문자)을 바꿈. 제약: 묶음 안에 같은 문자가 들어가면 덩어리 안 순열도 중복으로 나눠야 하므로(예: 모음에 같은 글자가 둘이면 3!/2!) 의도한 층이 하나 더 는다."
    creative: "(1) 자음끼리 이웃하도록으로 바꾸면 덩어리 안이 6!/(2!2!)(★2~3) (2) 모음끼리 이웃하지 않도록으로 뒤집으면 틈 끼우기(★3 · 0050 골조) (3) 모음 셋의 순서를 알파벳 순으로 고정(★2 · 0056 골조와 결합) (4) 「모음 두 개만 이웃」처럼 부분 조건을 주면 여사건·분기로 ★4."
```

```yaml
- id: RPM-PROB-0050
  page: 11
  vendor_label: "유형 04 문자를 나열하는 경우의 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    internet 의 8개 문자를 일렬로 나열할 때 t 2개가 이웃하지 않도록 하는 경우의 수. 5지선다.
  category: "t 를 뺀 나열 → 틈 중 2곳 선택"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이웃하지 않는 나열」을 「t 를 뺀 6글자를 먼저 나열하고 생기는 7개 틈 중 2곳을 고르기」로 동치 변환(전체에서 이웃하는 경우를 빼는 길도 가능)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "같은 것이 있는 순열 — 이웃하지 않게(틈 끼우기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    internet 은 n 2개·e 2개·t 2개와 i·r. t 를 뺀 i·n·n·e·r·e 의 나열이 6!/(2!2!)=180, 그 사이와 양 끝 7개 틈에서 2곳을 고르면 C(7,2)=21(t 끼리 같으므로 순서 없음) → 3780. 여사건(5040-1260) 으로도 같다. 벤더 중·d1 하나 → ★2.
  tier: star_2
  mechanism_primary: "t 제외 6글자 6!/(2!2!)=180 → 틈 7곳 중 2곳 C(7,2)=21 → 3780"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0050.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어와 「이웃하지 않게 할 문자」의 개수(2~3)를 바꿈. 제약: 떼어 놓을 문자가 k 개면 틈의 수가 (남은 글자 수+1) ≥ k 여야 하고, 떼어 놓을 문자들이 서로 같으면 C, 다르면 P 를 쓴다."
    creative: "(1) e 2개도 함께 떼어 놓도록 하면 두 번의 틈 끼우기(★4) (2) 떼어 놓을 문자를 서로 다른 두 문자로 바꿔 P(7,2)(★2~3) (3) 「t 2개가 이웃하도록」으로 뒤집어 묶음법(★2) (4) 「어느 같은 문자도 이웃하지 않도록」으로 올리면 포함배제(★4~5)."
```

```yaml
- id: RPM-PROB-0051
  page: 11
  vendor_label: "유형 04 문자를 나열하는 경우의 수"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    7개의 문자 a, b, b, c, c, c, d 를 일렬로 나열할 때 양 끝에 서로 다른 문자를 놓는 경우의 수.
  category: "전체 → 양 끝이 같은 문자인 경우(b·c 두 갈래) 제외"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「양 끝이 서로 다름」을 직접 세지 않고 전체에서 「양 끝이 같음」을 빼는 차집합으로 전환(직접 세면 양 끝 문자쌍을 일일이 골라야 함)"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양 끝이 같으려면 2개 이상 있는 문자여야 하므로 b·b 인 경우와 c·c 인 경우 두 갈래로 나눠 셈(a·d 는 1개뿐이라 불가)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "같은 것이 있는 순열 — 양 끝 조건(여사건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체는 7!/(2!3!)=420. 양 끝이 b 면 가운데 a·c·c·c·d 의 5!/3!=20, 양 끝이 c 면 가운데 a·b·b·c·d 의 5!/2!=60 → 80 을 빼서 340. 여사건 전환과 「1개뿐인 문자는 양 끝에 같이 올 수 없다」는 갈래 판별이 함께 필요. 통찰 2개(모두 d1)이지만 개별 깊이가 얕아 벤더 상중과 같은 ★3 유지.
  tier: star_3
  mechanism_primary: "전체 7!/(2!3!)=420 → 양 끝 bb 20 + 양 끝 cc 60 = 80 제외 → 340"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$340$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0051.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 구성(2개짜리·3개짜리 문자의 개수)과 전체 글자 수(6~8)를 바꿈. 제약: 2개 이상인 문자가 최소 하나는 있어야 여사건이 0 이 아니고, 2개 이상인 문자가 늘수록 갈래가 늘어난다(셋이면 ★4)."
    creative: "(1) 「양 끝이 같은 문자」를 직접 묻기(★2) (2) 「양 끝에 c 가 오지 않도록」으로 바꿔 여사건 한 갈래(★2~3) (3) 「양 끝이 서로 다르고 가운데에 c 가 이웃하지 않도록」 조건 중첩(★4) (4) 문자를 숫자로 바꾸고 0 을 넣어 맨 앞 제외까지 결합(★4 · 0055 골조와 합성)."
```

### 유형 05 자연수의 개수; 같은 것이 있는 순열

```yaml
- id: RPM-PROB-0052
  page: 12
  vendor_label: "유형 05 자연수의 개수; 같은 것이 있는 순열"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    6개의 숫자 0, 1, 1, 2, 2, 2 를 모두 사용해 만들 수 있는 여섯 자리 자연수의 개수. 5지선다.
  category: "전체 같은 것이 있는 순열 → 맨 앞 0 인 경우 제외"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「여섯 자리 자연수」를 「전체 나열에서 맨 앞이 0 인 나열을 뺀 것」이라는 차집합으로 바꿔 셈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "자연수의 개수 — 같은 것이 있는 순열(맨 앞 0 제외)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 6!/(2!3!)=60, 맨 앞이 0 이면 남은 1·1·2·2·2 의 5!/(2!3!)=10 → 50. 0 이 들어간 자연수 개수 문제의 표준 골조이며 이 유형의 기준 문항. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "전체 6!/(2!3!)=60 → 맨 앞 0 인 5!/(2!3!)=10 제외 → 50"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0052.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 구성(0 한 개 + 중복 문자의 개수)과 자릿수(5~6)를 바꿈. 제약: 0 은 한 개만 두어야 「맨 앞 0」 제외가 한 번으로 끝난다. 0 이 두 개면 제외 계산도 같은 것이 있는 순열이 되어 한 층 는다(★3)."
    creative: "(1) 0 을 두 개로 늘리기(★3) (2) 「홀수」 조건 추가(끝자리 분기 + 맨 앞 0 → ★3 · 0055 골조) (3) 「300000보다 큰」 크기 조건(★2~3 · 0054 골조) (4) 여섯 자리 중 일부만 택해 만들기(★3 · 0053 골조)."
```

```yaml
- id: RPM-PROB-0053
  page: 12
  vendor_label: "유형 05 자연수의 개수; 같은 것이 있는 순열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    5개의 숫자 1, 2, 2, 3, 3 중에서 4개를 택해 만들 수 있는 네 자리 자연수의 개수.
  category: "빼는 숫자별 경우 분류 → 각 경우의 같은 것이 있는 순열 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「5개 중 4개를 택한다」를 5가지 선택으로 보면 중복을 세게 되므로 남는 숫자 묶음이 서로 다른 세 경우(2·2·3·3 / 1·2·3·3 / 1·2·2·3)로 나눠야 함 — 경우마다 중복 구조가 달라 나누는 수도 달라짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "자연수의 개수 — 일부를 택하는 같은 것이 있는 순열(경우 분류)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1 을 빼면 2·2·3·3 → 4!/(2!2!)=6, 2 를 하나 빼면 1·2·3·3 → 4!/2!=12, 3 을 하나 빼면 1·2·2·3 → 12 → 30. 「어떤 것을 택하느냐」에 따라 같은 것의 개수가 달라지는 것이 이 문항의 전부. 통찰 1개(MI d2)이지만 벤더 중 → ★2 유지. [분류 이슈] 경우 분류가 유형 05 안에서 가장 무거워 ★3 후보.
  tier: star_2
  mechanism_primary: "빼는 숫자별 3경우 → 6 + 12 + 12 = 30"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0053.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 숫자 구성(1,2,2,3,3 / 1,1,2,2,3 등)과 택하는 개수(3~4)를 바꿈. 제약: 택하는 개수가 전체보다 1 작을 때 경우가 셋으로 깔끔하게 갈린다. 2 이상 적게 택하면 경우가 급격히 늘어 ★4."
    creative: "(1) 숫자에 0 을 넣어 맨 앞 제외까지 겹치기(★3~4) (2) 「네 자리 짝수」 조건 추가(★3) (3) 택하는 개수를 3 으로 줄여 세 자리 자연수(경우 넷 · ★3) (4) 「서로 다른 네 자리 수가 몇 개인가」를 뒤집어 중복 없는 선택 개수를 묻기(★2)."
```

```yaml
- id: RPM-PROB-0054
  page: 12
  vendor_label: "유형 05 자연수의 개수; 같은 것이 있는 순열"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    6개의 숫자 1, 2, 2, 4, 5, 5 를 모두 사용해 만든 여섯 자리 자연수 중 300000보다 큰 것의 개수. 5지선다.
  category: "크기 조건 → 맨 앞 자리 후보로 환원 → 후보별 나열 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「300000보다 크다」를 「맨 앞 자리가 4 또는 5」로 환원(숫자에 3 이 없어 경계에서 같아지는 경우가 없으므로 맨 앞 자리만 보면 충분)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "자연수의 개수 — 같은 것이 있는 순열(크기 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    맨 앞이 4 면 남은 1·2·2·5·5 의 5!/(2!2!)=30, 맨 앞이 5 면 남은 1·2·2·4·5 의 5!/2!=60 → 90. 5 가 두 개여도 「맨 앞이 5」는 한 경우로만 센다. 0 이 없어 맨 앞 제외 처리는 필요 없음. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "맨 앞 4 → 5!/(2!2!)=30, 맨 앞 5 → 5!/2!=60 → 90"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0054.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 구성과 기준 값(200000·300000·400000)을 바꿈. 제약: 기준 값의 첫 자리가 주어진 숫자 목록에 없어야 맨 앞 자리만 비교하면 끝난다. 기준 값 첫 자리가 목록에 있으면 둘째 자리까지 비교해야 해 ★3~4."
    creative: "(1) 기준을 240000 처럼 잡아 둘째 자리 비교를 강제(★4) (2) 「300000보다 작은」 여사건으로 묻기(★2 유지) (3) 「짝수이면서 300000보다 큰」 두 조건 결합(★3) (4) 숫자에 0 을 넣어 맨 앞 제외와 크기 조건을 겹치기(★3)."
```

```yaml
- id: RPM-PROB-0055
  page: 12
  vendor_label: "유형 05 자연수의 개수; 같은 것이 있는 순열"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    6개의 숫자 0, 1, 1, 2, 2, 3 을 모두 사용해 만들 수 있는 여섯 자리 자연수 중 홀수의 개수.
  category: "끝자리 홀수 분기 → 각 갈래에서 맨 앞 0 제외 → 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "끝자리가 1 인 경우와 3 인 경우로 갈리고, 1 이 두 개지만 서로 같으므로 「끝자리 1」은 한 갈래로만 세야 함(두 갈래로 세면 답이 두 배)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 갈래마다 앞 다섯 자리 나열에서 맨 앞이 0 인 경우를 다시 빼는 차집합을 적용"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "자연수의 개수 — 같은 것이 있는 순열(홀수 + 맨 앞 0)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    끝자리 3 이면 앞 다섯은 0·1·1·2·2 → 5!/(2!2!)=30 에서 맨 앞 0 인 4!/(2!2!)=6 을 빼 24. 끝자리 1 이면 앞 다섯은 0·1·2·2·3 → 5!/2!=60 에서 맨 앞 0 인 4!/2!=12 를 빼 48. 합 72. 끝자리 분기와 맨 앞 0 제외가 이중으로 걸리고, 같은 숫자 1 을 두 갈래로 세는 것이 대표 오답. 통찰 2개·M_total 8·벤더 상중 → ★3.
  tier: star_3
  mechanism_primary: "끝자리 3 → 30-6=24, 끝자리 1 → 60-12=48 → 72"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$72$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0055.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 구성(0 의 개수·홀수의 개수와 중복도)과 끝자리 조건(홀수·짝수·5의 배수)을 바꿈. 제약: 끝자리 후보 중 0 이 들어가면 그 갈래에서는 맨 앞 제외가 사라지므로 갈래마다 계산 형태가 달라진다(짝수로 바꾸면 이 비대칭이 생겨 ★4에 가까워짐)."
    creative: "(1) 짝수로 바꿔 끝자리 0 갈래에서 맨 앞 제외가 없어지는 비대칭 만들기(★4) (2) 「3의 배수」로 바꾸면 자리합 조건(★4~5 · I-XU) (3) 「홀수이면서 200000보다 큰」 조건 중첩(★4) (4) 0 을 빼고 홀수만 묻게 하면 맨 앞 제외가 사라져 ★2."
```

### 유형 06 순서가 정해진 경우의 수

```yaml
- id: RPM-PROB-0056
  page: 12
  vendor_label: "유형 06 순서가 정해진 경우의 수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    6개의 문자 a, b, c, d, e, f 를 일렬로 나열할 때 모음을 알파벳 순서대로 놓는 경우의 수. 5지선다.
  category: "순서 고정 문자를 같은 문자로 보기 → 같은 것이 있는 순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순서가 정해진 순열 — 같은 문자로 보기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    모음은 a·e 두 개뿐이고 순서가 정해졌으므로 둘을 같은 문자로 보면 6!/2!=360. 이 유형의 정의 그 자체(순서 고정 k 개 → k! 로 나누기)라 통찰로 세지 않음. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "모음 a·e 를 같은 문자로 보기 → 6!/2!=360"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0056.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 문자 수(5~7)와 순서를 고정하는 문자 수(2~3)를 바꿈. 제약: 순서 고정 문자가 k 개면 k! 로 나누므로 답이 정수로 떨어지는 것은 자동 보장. 고정 문자가 3개면 6 으로 나눠 120."
    creative: "(1) 자음 4개의 순서를 고정해 6!/4!=30(★2) (2) 모음은 알파벳 순, 자음은 역순으로 두 묶음 고정(★3 · 0059 골조) (3) 순서 고정에 「이웃」 조건까지 결합(★3) (4) 같은 문자가 이미 있는 단어에 순서 고정을 얹어 두 번 나누기(★3 · 0057 골조)."
```

```yaml
- id: RPM-PROB-0057
  page: 12
  vendor_label: "유형 06 순서가 정해진 경우의 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    tomorrow 의 8개 문자를 일렬로 나열할 때 t 를 m 보다 앞에 놓는 경우의 수.
  category: "같은 것이 있는 순열 + 순서 고정 두 문자를 같은 문자로 보기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "순서가 정해진 순열 — 같은 문자로 보기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tomorrow 는 o 3개·r 2개와 t·m·w. t 와 m 을 같은 문자로 보면 8!/(3!2!2!)=1680(전체 8!/(3!2!)=3360 의 절반과 일치). 이미 같은 문자가 있는 단어 위에 순서 고정을 한 층 더 얹는 것이 0056 과의 차이. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "t·m 을 같은 문자로 보기 → 8!/(3!2!2!)=1680"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1680$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0057.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어(같은 문자의 중복도)와 순서를 고정하는 문자 쌍을 바꿈. 제약: 순서를 고정하는 두 문자는 서로 다르고 각각 한 개씩이어야 2 로 나누는 계산이 그대로 성립한다. 셋을 고정하면 6 으로 나눈다."
    creative: "(1) o 3개의 상대 순서까지 고정(★2~3) (2) 「t 가 m 보다 앞이고 w 가 t 보다 앞」 세 문자 순서 고정(★3) (3) 「t 가 m 바로 앞」으로 바꾸면 묶음법(★2~3) (4) 「t 가 m 보다 뒤」를 함께 묻고 합이 전체가 됨을 확인시키기(★2)."
```

```yaml
- id: RPM-PROB-0058
  page: 12
  vendor_label: "유형 06 순서가 정해진 경우의 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    7개의 숫자 1, 1, 1, 2, 3, 4, 5 를 일렬로 나열할 때 3 을 2 와 4 사이에 놓는 경우의 수.
  category: "세 숫자의 상대 순서 6가지 중 3이 가운데인 2가지 → 전체의 1/3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「사이에 놓는다」를 2-3-4 와 4-3-2 두 상대 순서로 해석해 「2·3·4 를 같은 문자로 보고 2가지 순서만 인정」으로 환산 — 2-3-4 한 가지로만 보면 답이 절반"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "순서가 정해진 순열 — 사이에 오도록"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체는 7!/3!=840. 2·3·4 의 상대 순서 6가지 중 3 이 가운데인 것은 2가지이므로 840 의 1/3 인 280(2·3·4 를 같은 문자로 보고 7!/(3!3!)=140 에 2 를 곱해도 같다). 「사이」가 양방향을 뜻한다는 해석이 유일한 갈림길. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "2·3·4 상대 순서 6가지 중 3이 가운데인 2가지 → 840 × 2/6 = 280"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$280$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0058.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "같은 숫자의 개수(1 이 2~3개)와 순서를 통제할 세 숫자를 바꿈. 제약: 통제 대상 세 숫자는 서로 다르고 각각 한 개씩이어야 6가지 상대 순서가 그대로 성립한다."
    creative: "(1) 「3 이 2 보다 뒤이고 4 보다 앞」으로 한 방향만 지정하면 1/6 → 140(★2) (2) 「3 이 2 와 4 사이이면서 바로 사이」로 바꾸면 묶음법(★3) (3) 통제 대상을 네 숫자로 늘려 특정 상대 순서 비율(★3) (4) 「3 이 양 끝이 아닌」처럼 자리 조건으로 바꾸기(★2)."
```

```yaml
- id: RPM-PROB-0059
  page: 12
  vendor_label: "유형 06 순서가 정해진 경우의 수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    compromise 의 10개 문자를 일렬로 나열할 때 c 가 p 보다 앞이고 i 가 r 보다 앞인 경우의 수가 k×10! 일 때 상수 k 의 값. 5지선다.
  category: "중복 문자 나눗셈 + 두 쌍의 순서 고정 나눗셈 → 비율 k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 순서 조건을 각각 「해당 두 문자를 같은 문자로 보기(1/2)」로 환산해 중복 문자 나눗셈과 함께 곱하기 — 답을 개수가 아니라 10! 에 대한 비율 k 로 묻는 형태"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "순서가 정해진 순열 — 두 쌍의 순서 고정(비율로 답)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    compromise 는 o 2개·m 2개와 c·p·r·i·s·e. 전체 10!/(2!2!) 에 c<p 로 1/2, i<r 로 다시 1/2 → 10!/16 이므로 k=1/16. 두 종류의 나눗셈(중복 문자 · 순서 고정)이 곱으로 겹치는 것이 요점이고, 답을 비율로 묻기 때문에 Mₐ 2. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "10!/(2!2!) × 1/2 × 1/2 = 10!/16 → k=1/16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0059.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어의 중복 문자 수와 순서를 고정하는 쌍의 개수(1~3)를 바꿈. 제약: 고정하는 쌍끼리 문자를 공유하지 않아야 1/2 씩 독립으로 곱해진다. 같은 문자가 두 쌍에 걸치면(c<p, p<r) 1/2 곱이 아니라 1/3! 이 된다."
    creative: "(1) 쌍을 공유시켜 c<p<r 로 만들면 1/6(★3 · 독립성이 깨지는 대조 문항) (2) k 대신 실제 개수를 묻기(★2 유지) (3) 중복 문자 o 3개짜리 단어로 바꿔 나눗셈 층을 늘리기(★2~3) (4) 「c 가 p 보다 앞 또는 i 가 r 보다 앞」으로 바꾸면 포함배제(★3)."
```

### 유형 07 최단 거리로 가는 경우의 수 (1)

```yaml
- id: RPM-PROB-0060
  page: 13
  vendor_label: "유형 07 최단 거리로 가는 경우의 수 (1)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    가로 5칸·세로 3칸 도로망에서 A 지점을 출발해 P 지점을 거쳐 B 지점까지 최단 거리로 가는 경우의 수(P 는 A 에서 오른쪽 3칸·위 2칸 떨어진 격자점).
  category: "경유점으로 구간 분할 → 구간마다 같은 것이 있는 순열 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최단 거리 — 경유점이 있는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최단 경로는 오른쪽·위 이동을 나열하는 같은 것이 있는 순열. A→P 는 오른쪽 3·위 2 로 5!/(3!2!)=10, P→B 는 오른쪽 2·위 1 로 3!/(2!1!)=3 → 곱해서 30. 경유점이 있으면 구간을 나눠 곱한다는 유형 정의 문항. 대표문제 → ★2.
  tier: star_2
  mechanism_primary: "A→P 5!/(3!2!)=10 → P→B 3!/(2!1!)=3 → 10·3=30"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30$'
  answer_source: "답지"
  figure: "crop:fig-0060.png"
  latex: latex-bank/rpm-prob/items/0060.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(가로 4~6·세로 3~4)와 P 의 위치를 바꿈. 제약: P 는 A 와 B 를 잇는 최단 경로 위에 있어야(오른쪽·위 좌표가 모두 A 이상 B 이하) 답이 0 이 아니다. 그림 라벨 A·P·B 와 격자 칸 수는 크롭 이미지와 반드시 일치시켜야 하므로 그림을 새로 그려야 변형 가능."
    creative: "(1) 경유점을 두 개로 늘려 세 구간 곱(★2~3) (2) 「P 를 지나지 않는」 여사건(★2~3) (3) 특정 도로(변)를 지나도록 바꾸기(★2~3 · 0061 골조) (4) 격자 일부를 끊어 통행 금지 구간 만들기(★3~4)."
```

```yaml
- id: RPM-PROB-0061
  page: 13
  vendor_label: "유형 07 최단 거리로 가는 경우의 수 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    가로 7칸·세로 4칸 도로망에서 A 지점에서 B 지점까지 최단 거리로 갈 때 P 지점과 Q 지점 사이의 도로를 지나는 경우의 수(P·Q 는 가로로 이웃한 두 격자점).
  category: "지나는 것이 점이 아니라 변 → A→P · PQ · Q→B 세 구간 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「PQ 도로를 지난다」는 조건을 「A→P 이동 · P 에서 Q 로 가는 한 걸음 · Q→B 이동」의 분해로 바꾸기 — P 를 지난다거나 Q 를 지난다는 점 조건으로 읽으면 PQ 를 실제로 통과하지 않는 경로까지 세게 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최단 거리 — 특정 도로(변)를 지나는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P 는 A 에서 오른쪽 4·위 2, Q 는 그 오른쪽 한 칸. A→P 는 6!/(4!2!)=15, P→Q 는 1가지, Q→B 는 오른쪽 2·위 2 로 4!/(2!2!)=6 → 90. 점이 아니라 변을 지정한 것이 0060 과의 차이. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "A→P 6!/(4!2!)=15 → PQ 한 걸음 1 → Q→B 4!/(2!2!)=6 → 90"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$90$'
  answer_source: "답지"
  figure: "crop:fig-0061.png"
  latex: latex-bank/rpm-prob/items/0061.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기와 PQ 변의 위치·방향(가로·세로)을 바꿈. 제약: PQ 가 세로 변이면 P→Q 가 위로 한 걸음이 되어 Q 이후 남은 위 이동 수가 하나 줄어든다. 그림의 격자 칸 수·P·Q 라벨이 크롭과 일치해야 하므로 그림 재작성 필요."
    creative: "(1) 「PQ 도로를 지나지 않는」 여사건(★2~3) (2) 두 개의 지정 도로 중 적어도 하나를 지나도록(포함배제 → ★3~4) (3) PQ 도로를 통행 금지로 두고 전체에서 빼기(★3) (4) 지정 도로를 지나면서 특정 점도 지나도록 결합(★3)."
```

```yaml
- id: RPM-PROB-0062
  page: 13
  vendor_label: "유형 07 최단 거리로 가는 경우의 수 (1)"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    가로 6칸·세로 4칸 도로망에서 A 지점에서 B 지점까지 최단 거리로 갈 때 P 지점은 지나고 Q 지점은 지나지 않는 경우의 수(P 는 A 에서 오른쪽 2·위 1, Q 는 오른쪽 4·위 2 인 격자점).
  category: "P 경유 전체 → 그중 Q 도 경유하는 것 제외"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「P 는 지나고 Q 는 지나지 않는」을 (P 를 지나는 경우) - (P 와 Q 를 모두 지나는 경우) 차집합으로 바꾸기 — 전체에서 Q 경유를 먼저 빼면 P 를 안 지나는 경로까지 함께 빠져 틀림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최단 거리 — 지나고 · 지나지 않는 경우(여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A→P 는 3!/(2!1!)=3, P→B 는 오른쪽 4·위 3 으로 7!/(4!3!)=35 → P 경유 105. 그중 Q 도 지나는 것은 3 × (P→Q 3!/(2!1!)=3) × (Q→B 4!/(2!2!)=6) = 54 → 105-54=51. 차집합의 기준을 「전체」가 아니라 「P 경유」로 잡는 것이 핵심. 벤더 중·서술형 → ★2 유지. [분류 이슈] 두 경유 조건이 겹쳐 유형 07 안에서 가장 무거우므로 ★3 후보.
  tier: star_2
  mechanism_primary: "P 경유 3·35=105 → 그중 Q 도 경유 3·3·6=54 제외 → 51"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$51$'
  answer_source: "답지"
  figure: "crop:fig-0062.png"
  latex: latex-bank/rpm-prob/items/0062.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기와 P·Q 의 좌표를 바꿈. 제약: Q 가 P 보다 오른쪽·위쪽에 있어야 「P 와 Q 를 모두 지나는」 경로가 존재한다. Q 가 P 의 왼쪽이나 아래면 교집합이 0 이 되어 차집합이 사라지고 ★2 아래로 내려간다. 그림 라벨·칸 수는 크롭과 일치시켜야 함."
    creative: "(1) 「P 또는 Q 를 지나는」으로 바꿔 포함배제(★3) (2) 「P·Q 모두 지나지 않는」 이중 여사건(★3~4) (3) Q 를 공사 중 교차로로 두고 통행 금지로 서술(★2~3 · 같은 식) (4) 지나지 않아야 할 점을 두 개로 늘리기(★4)."
```

```yaml
- id: RPM-PROB-0063
  page: 13
  vendor_label: "유형 07 최단 거리로 가는 경우의 수 (1)"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    크기가 같은 정육면체 6개를 가로 3·세로 1·높이 2 로 쌓아 만든 직육면체에서 모서리를 따라 꼭짓점 A 에서 마주 보는 꼭짓점 B 까지 최단 거리로 가는 경우의 수.
  category: "3차원 최단 경로 → 세 방향 이동 문자열의 같은 것이 있는 순열"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면 도로망의 「오른쪽·위 두 글자 나열」을 입체의 「가로·세로·높이 세 글자 나열」로 옮기기 — 그림에서 A·B 가 각 방향으로 몇 칸 떨어져 있는지 읽어내는 것이 전제"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "최단 거리 — 입체(세 방향 나열)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 와 B 는 가로로 3칸·세로(깊이)로 1칸·높이로 2칸 떨어져 있으므로 최단 경로는 여섯 걸음이고 6!/(3!1!2!)=60. 모든 모서리가 살아 있으므로 평면과 같은 다항계수 골조가 그대로 쓰인다. 그림에서 세 방향의 칸 수를 읽는 표현 전환(RT d2)이 벽. 벤더 상중 → ★3.
  tier: star_3
  mechanism_primary: "가로 3·세로 1·높이 2 방향 나열 → 6!/(3!1!2!)=60"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$60$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0063.png"
  latex: latex-bank/rpm-prob/items/0063.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직육면체의 세 변 칸 수(3·1·2 → 2·2·2, 3·2·2 등)를 바꿈. 제약: 답은 다항계수 (a+b+c)!/(a!b!c!) 이며 세 값이 모두 1 이상이어야 입체다움이 유지된다. 2·2·2 면 90, 3·2·2 면 210 으로 급히 커지므로 답 크기를 보고 고른다. 그림의 쌓기 모양과 A·B 위치는 크롭과 일치해야 하므로 변형 시 그림 재작성 필요."
    creative: "(1) 경유 꼭짓점을 지정해 두 구간 곱(★3) (2) 특정 모서리를 지나도록(★3 · 0061 골조의 입체판) (3) 한 칸을 비워 ㄱ자 입체로 만들면 경로가 끊겨 경우 분기(★4) (4) 겉면만 따라가도록 제한해 전개도 문제로 전환(★4 · I-RT d3)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 7 · ★2 20 · ★3 5 · ★4 0 · ★5 0
- 통찰형 10 · 절차형 22 · premium 0
- 통찰 유형 분포(라벨 21개): I-EQV 11 · I-MI 7 · I-RT 2 · I-SC 1 (I-SYM·I-VF·I-XU·I-PD·I-BW·I-CON 0)
- type_hint 계열별: 「이항계수의 성질」 4 · 「중복순열 기본」 3 · 「자연수의 개수; 중복순열」 3 + 「순서(몇 번째 수)」 1 · 「빈 곳 없이 나누어 담기」 1 · 「함수의 개수」 4 · 「같은 것이 있는 순열(문자)」 4 · 「자연수의 개수; 같은 것이 있는 순열」 4 · 「순서가 정해진 순열」 4 · 「최단 거리」 4
- 벤더 신호: 교과서 구역 4(난이도·태그 없음) · 대표문제 7(난이도 표시 없음) · 중하 3 · 중 13 · 상중 5 · 서술형 태그 2
- 그림: 4문(`crop:fig-0060.png` · `crop:fig-0061.png` · `crop:fig-0062.png` · `crop:fig-0063.png`) — 모두 유형 07 도로망·입체
- 이 범위에서 반복되는 골조: (가) 전체에서 금지 경우를 빼는 차집합·여사건(0039 0042 0045 0047 0050 0051 0052 0055 0062) (나) 조건이 만드는 경우 분기(0038 0041 0043 0051 0053 0054 0055) (다) 같은 것이 있는 순열의 나눗셈을 두 층으로 겹치기(0049 0055 0057 0059)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0043 | 통찰 2개(I-RT d2 + I-MI d1)로 +1 후보였으나 셈 자체가 표준이라 벤더 상중과 같은 ★3 유지. 카탈로그 생기면 ★4 재검토 | ★3 / ★4 |
| RPM-PROB-0053 | 벤더 「중」이나 「5개 중 4개 선택」이 만드는 경우 분류가 유형 05 안에서 가장 무거움 — ★3 후보 | ★2 / ★3 |
| RPM-PROB-0062 | 벤더 「중」이나 P 경유·Q 비경유 두 조건이 겹친 차집합으로 유형 07 안에서 가장 무거움(서술형 태그도 있음) — ★3 후보 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「자연수의 개수 — 중복순열」과 「자연수의 개수 — 같은 것이 있는 순열」은 발문이 비슷해 보여도 재료가 무한 공급(중복순열)이냐 고정 다중집합(같은 것이 있는 순열)이냐로 골조가 완전히 갈린다 — 반드시 별도 유형. (2) 「최단 거리 — 점 경유」와 「최단 거리 — 변(도로) 경유」는 0060·0061 처럼 한 칸 차이로 오답이 갈리므로 분리. (3) 「입체 최단 거리」(0063)는 평면과 base ★ 가 다르므로 별도.
- **통합해도 될 유형**: (1) 유형 06 의 0056·0057 은 「순서 고정 k 개 → k! 로 나누기」 한 골조라 하나로 묶고 「이미 같은 문자가 있는 단어」를 난이도 변형으로 둔다. (2) 「특정 숫자 포함 여사건」(0042)과 「함숫값 제한」(0045)은 재료만 다르고 여사건 한 수라 같은 base ★ 로 묶을 수 있다.
- **★4~5 슬롯 부재**: 이 범위에는 I-SC·I-VF·I-SYM·I-XU 통찰이 0039 의 SC 하나뿐이라 §2.13 기준으로 ★4 이상 슬롯을 만들 근거가 없다. 순열과 조합 단원의 ★4~5 는 뒤 범위(유형 UP · 시험에 꼭 나오는 문제 · 실력 Up)에서 찾아야 한다.

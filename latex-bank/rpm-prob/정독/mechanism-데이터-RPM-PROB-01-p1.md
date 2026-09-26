---
name: mechanism-데이터-RPM-PROB-01-p1
description: RPM 확률과 통계 01 순열과 조합(1/4 · 교과서 01-1~01-5) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 01 순열과 조합
  unit_code: PROB-01
  part: "1/4"
  extract_range: "7~9쪽 · 0001~0031"
  total_problems: 31
  unit_total: 135
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상이면 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 01 순열과 조합 (1/4) 정독 데이터 (v1.0)

이 파일은 01 순열과 조합 단원(총 135문)의 첫 범위, 7~9쪽 「교과서 문제 정복」 구역 31문(0001~0031)을 다룬다. 구역은 교과서 01-1 중복순열(8) · 01-2 같은 것이 있는 순열(3) · 01-3 중복조합(8) · 01-4 이항정리(9) · 01-5 파스칼의 삼각형(3)이며, 전 문항이 교과서 기본 문제라 난이도 표시(level)·태그가 없다. RPM 은 구역이 곧 난이도 층이므로(교과서 → ★1 출발, 유형 → level 에 따라 ★1~4, 유형 UP → ★3, 서술형 → ★3, 실력 Up → ★4) 이 범위는 ★1 출발점에서 M_total·통찰로만 조정했고, 결과적으로 31문 전부 ★1 절차형이다. 변별은 M_total(4~6)과 함정 종류(T-부호·T-경계·T-표기)에서만 생긴다.

이 자산의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 풀이 골조 한 줄(`mechanism_primary`), 통찰 라벨(`insights[]` · 이 범위는 0031 한 문항만 d1 통찰 1개), 바꿔도 되는 수와 제약(`variation_notes.numeric`), 골조를 유지한 채 바꿀 수 있는 설정과 ★ 가 변하는 지점(`variation_notes.creative`)을 채웠다. 발문은 요약만 적고 원문은 `latex-bank/rpm-prob/items/<id>.tex` 에 있다.

## 문항 데이터

### 교과서 01-1 중복순열

```yaml
- id: RPM-PROB-0001
  page: 7
  vendor_label: "교과서 01-1 중복순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₆Π₁ 의 값(6개에서 중복을 허용해 1개 택하는 순열).
  category: "중복순열 기호 → nʳ 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수 계산(ₙΠᵣ = nʳ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₙΠᵣ = nʳ 정의 한 줄, 6¹ = 6. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "₆Π₁ = 6¹ → 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0001.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n·r 을 1~9 범위에서 자유롭게(₅Π₂=25, ₇Π₃=343). 제약: r=0 이면 1 이고, r>n 도 허용되는 것이 중복순열의 특징이므로 그 점을 노리는 변형은 정의 확인 문항으로 성격이 바뀜."
    creative: "(1) ₙΠᵣ 와 ₙPᵣ 를 나란히 놓고 차이를 묻기(★1 유지) (2) ₆Π₂ − ₆P₂ 의 값(★1~2) (3) r>n 인 ₂Π₅ 를 넣어 '중복순열은 r>n 가능' 개념을 시험(★1 · T-범위)."
```

```yaml
- id: RPM-PROB-0002
  page: 7
  vendor_label: "교과서 01-1 중복순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₂Π₃ 의 값(r>n 인 경우).
  category: "중복순열 기호 → nʳ 대입(r>n)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수 계산(ₙΠᵣ = nʳ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2³ = 8. r>n 이라도 중복을 허용하면 정의된다는 것이 ₙPᵣ 와 다른 점 — T-범위 함정 하나. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "₂Π₃ = 2³ → 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0002.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 n 을 2·3, 지수 r 을 3~5 로(₃Π₄=81, ₂Π₅=32). 제약: r>n 을 유지하고 nʳ 이 네 자리를 넘지 않게."
    creative: "(1) ₂Π₃ 과 ₃Π₂ 를 함께 계산해 비대칭을 확인(★1) (2) '두 기호 ○× 로 3칸 채우기'로 서술화(0008 골조 · ★1) (3) ₂Πᵣ ≥ 100 인 최소 r(★2 · 부등식 결합)."
```

```yaml
- id: RPM-PROB-0003
  page: 7
  vendor_label: "교과서 01-1 중복순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₄Π₂ 의 값.
  category: "중복순열 기호 → nʳ 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수 계산(ₙΠᵣ = nʳ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4² = 16 한 줄. ₄P₂ = 12 와 혼동만 피하면 된다. ★1.
  tier: star_1
  mechanism_primary: "₄Π₂ = 4² → 16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0003.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n=4~6, r=2~3(₅Π₃=125). 제약: ₄P₂=12 와 혼동을 유도하는 것이 목적이면 두 값을 나란히 묻는다."
    creative: "(1) ₄Π₂ − ₄P₂ 의 값(같은 것이 두 번 나오는 배열 수 4 · ★1) (2) 4개 숫자로 두 자리 자연수 만들기 서술형(0007 골조 · ★1) (3) 정의역 원소 2개·공역 원소 4개인 함수의 개수로 재해석(★2 · I-RT d1)."
```

```yaml
- id: RPM-PROB-0004
  page: 7
  vendor_label: "교과서 01-1 중복순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₃Π₅ 의 값.
  category: "중복순열 기호 → nʳ 대입(r>n)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수 계산(ₙΠᵣ = nʳ)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3⁵ = 243. r>n 이고 거듭제곱 값만 조금 크다. ★1.
  tier: star_1
  mechanism_primary: "₃Π₅ = 3⁵ → 243"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$243$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0004.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n=2~4, r=4~6(₂Π₆=64, ₄Π₄=256). 제약: 거듭제곱 값이 암산 범위(≤ 1024)."
    creative: "(1) 3가지 색으로 5칸 깃발 칠하기 서술형(★1) (2) '모든 색이 적어도 한 번' 조건 추가(포함배제 · ★3 · I-SC d1) (3) ₃Πᵣ = 243 에서 r 역산(0006 골조 · ★1)."
```

```yaml
- id: RPM-PROB-0005
  page: 7
  vendor_label: "교과서 01-1 중복순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₙΠ₃ = 125 를 만족시키는 n 의 값.
  category: "중복순열 등식 → n³=125 → n"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열 등식에서 n·r 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n³ = 125 = 5³ → n = 5. 지수 등식 역산 한 단계. ★1.
  tier: star_1
  mechanism_primary: "ₙΠ₃ = n³ = 125 → n = 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0005.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "125 → 8·27·64·216·343(완전세제곱수), 또는 r=2 로 바꿔 우변을 완전제곱수로. 제약: n 이 자연수로 유일하게 나오도록 우변을 밑의 거듭제곱으로."
    creative: "(1) ₙΠ₂ + ₙΠ₁ = 30 처럼 두 항 결합(n²+n=30 → n=5 · ★2 · 이차방정식 결합) (2) ₙΠ₃ = 9·ₙΠ₁ 로 두 중복순열 비교(n²=9 → n=3 · ★1~2) (3) ₙΠ₃ > 100 인 최소 n(★1~2 · 부등식)."
```

```yaml
- id: RPM-PROB-0006
  page: 7
  vendor_label: "교과서 01-1 중복순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ₂Πᵣ = 128 을 만족시키는 r 의 값.
  category: "중복순열 등식 → 2ʳ=2⁷ → r"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열 등식에서 n·r 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2ʳ = 128 = 2⁷ → r = 7. 우변을 밑의 거듭제곱으로 읽는 한 줄. ★1.
  tier: star_1
  mechanism_primary: "₂Πᵣ = 2ʳ = 128 = 2⁷ → r = 7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0006.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "128 → 32·64·256·512, 밑 2 → 3(₃Πᵣ=243)·5(₅Πᵣ=625). 제약: 우변을 밑의 거듭제곱으로 정확히 맞춤."
    creative: "(1) ₂Πᵣ = ₄Π₃ 처럼 양변을 중복순열로(2ʳ=64 → r=6 · ★1) (2) ₂Πᵣ < 100 인 최대 r(★1~2) (3) 로그 없이 소인수분해로 지수를 비교하는 이유를 쓰게 하는 서술형(★2)."
```

```yaml
- id: RPM-PROB-0007
  page: 7
  vendor_label: "교과서 01-1 중복순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    숫자 1, 2, 3, 4 중에서 중복을 허용해 3개를 택해 만드는 세 자리 자연수의 개수.
  category: "각 자리 4가지 독립 선택 → ₄Π₃"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 활용(자리·답안 배정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    백·십·일의 자리 각 4가지, 0 이 없어 첫 자리 제약이 없다. ₄Π₃ = 64. 서술 → 중복순열 모델링이 곧 답. 교과서·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "세 자리 각각 4가지 → ₄Π₃ = 4³ → 64"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0007.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 개수 n=3~6, 자리 수 r=2~4. 제약: 0 을 넣으면 첫 자리 제외 (n−1)·nʳ⁻¹ 로 한 단계 늘어남(★1 유지 · T-범위 추가)."
    creative: "(1) 숫자에 0 포함(첫 자리 제약 · ★1~2) (2) 홀수·5의 배수 조건(일의 자리 고정 · ★2) (3) '각 자리 숫자의 합이 짝수' 조건 → 케이스 분기(★2~3 · I-MI d1)."
```

```yaml
- id: RPM-PROB-0008
  page: 7
  vendor_label: "교과서 01-1 중복순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ○, × 로만 답할 수 있는 4문제에 임의로 답하는 경우의 수.
  category: "문제마다 2가지 독립 선택 → ₂Π₄"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 활용(자리·답안 배정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    문제 4개 각각 ○/× 2가지 → ₂Π₄ = 16. 기호 2개를 4칸에 중복 배정하는 가장 기본형. ★1.
  tier: star_1
  mechanism_primary: "4문제 각 2가지 → ₂Π₄ = 2⁴ → 16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0008.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문제 수 4 → 5·6, 답 기호 2 → 3(○△×)·4(4지선다). 제약: nʳ 값이 암산 범위."
    creative: "(1) '적어도 한 문제는 ○' 여사건(2⁴−1=15 · ★1~2) (2) 정확히 k개가 ○(₄Cₖ · 조합으로 전환 · ★2 · I-RT d1) (3) 답안을 함수 f:{1,2,3,4}→{○,×} 로 보고 함수의 개수로 재진술(★2)."
```

### 교과서 01-2 같은 것이 있는 순열

```yaml
- id: RPM-PROB-0009
  page: 7
  vendor_label: "교과서 01-2 같은 것이 있는 순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    여섯 문자 A, B, B, C, C, C 를 일렬로 나열하는 경우의 수.
  category: "같은 것이 있는 순열 → n!/(p!q!)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열의 수(문자·숫자 나열)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    6!/(2!·3!) = 720/12 = 60. 공식 대입 한 줄. ★1.
  tier: star_1
  mechanism_primary: "6!/(2!3!) → 60"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0009.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 구성(1·2·3 → 2·2·2, 1·1·4 등)이나 총 개수 5~7. 제약: 답이 세 자리 이내(7!/(3!3!)=140 정도까지)."
    creative: "(1) 양 끝에 C 를 놓는 조건(가운데 4개 배열 4!/2! · ★2) (2) B 끼리 이웃(묶어서 5!/3! · ★2) (3) 'C 세 개가 모두 A 보다 앞에' 순서 고정(자리 선택으로 전환 · ★2~3 · I-RT d1)."
```

```yaml
- id: RPM-PROB-0010
  page: 7
  vendor_label: "교과서 01-2 같은 것이 있는 순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    숫자 1, 1, 2, 3, 3 을 모두 사용해 만드는 다섯 자리 자연수의 개수.
  category: "같은 것이 있는 순열 → 5!/(2!2!)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 것이 있는 순열의 수(문자·숫자 나열)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5!/(2!·2!) = 120/4 = 30. 0 이 없어 첫 자리 제약이 없으므로 0009 와 같은 한 줄. ★1.
  tier: star_1
  mechanism_primary: "5!/(2!2!) → 30"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0010.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 구성(1,1,2,2,3 · 1,1,1,2,3 등)이나 여섯 자리로. 제약: 0 을 넣으면 첫 자리 0 제외가 추가돼 M_s 가 오른다."
    creative: "(1) 0 포함 → 전체 − 0 이 첫 자리(★2 · T-범위) (2) 홀수 조건(끝자리 1 또는 3 케이스 · ★2 · I-MI d1) (3) 3의 배수·크기 조건(예: 30000 보다 큰 수 · ★2~3)."
```


```yaml
- id: RPM-PROB-0011
  page: 7
  vendor_label: "교과서 01-2 같은 것이 있는 순열"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    도로망 그림에서 A 지점에서 B 지점까지 최단 거리로 가는 경우의 수를 구하는 과정의 빈칸 ㈎~㈑ 채우기. 오른쪽 이동을 $a$, 위쪽 이동을 $b$ 로 바꾸는 유도가 본문에 그대로 주어져 있다.
  category: "격자 최단경로 → a·b 나열 → 같은 것이 있는 순열"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최단 거리로 가는 경우의 수(같은 것이 있는 순열)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    원래는 격자 경로를 문자열 나열로 옮기는 I-RT 착안이 필요한 유형이지만, 이 문항은 그 변환 문장이 본문에 인쇄돼 있고 학생은 그림에서 가로 6칸·세로 3칸을 세어 빈칸만 채운다. 그래서 통찰 0·절차형.
    교과서 구역·M_total 4 → ★1. 그림에서 칸 수를 세는 것이 유일한 실질 단계다.
    [분류 이슈] 같은 소재를 빈칸 없이 물으면 ★2(I-RT d1)가 되는 유도형 문항.
  tier: star_1
  mechanism_primary: "가로 6칸·세로 3칸 → a 6개·b 3개 나열 → 9!/(6!3!) = 84"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $6$ \quad ㈏ $3$ \quad ㈐ $9$ \quad ㈑ $84$'
  answer_source: "해설(답 크롭 없음)"
  figure: 'crop:fig-0011.png'
  latex: latex-bank/rpm-prob/items/0011.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기를 가로 m칸·세로 n칸으로 바꾸면 ㈎=m, ㈏=n, ㈐=m+n, ㈑=(m+n)!/(m!n!). 제약: 그림의 칸 수와 빈칸 수가 반드시 일치해야 하므로 크롭 교체 없이는 숫자만 바꿀 수 없다(그림 라벨 A·B 고정)."
    creative: "(1) 빈칸 유도를 없애고 경우의 수만 묻기(★2 · I-RT d1 부활) (2) 중간 지점 P 를 반드시 지나게 하기(구간별 곱 · ★2) (3) 한 구간이 공사로 막힘 → 전체 − 그 구간 통과(★3 · 여사건)."
```

### 교과서 01-3 중복조합

```yaml
- id: RPM-PROB-0012
  page: 7
  vendor_label: "교과서 01-3 중복조합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ${}_2\mathrm{H}_4$ 의 값.
  category: "중복조합의 정의 → 조합수로 변환 → 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합 ₙHᵣ 의 값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₙHᵣ = ₙ₊ᵣ₋₁Cᵣ 공식 한 번 적용해 ₅C₄ = 5. 정의 확인 한 단계뿐이다.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "₂H₄ = ₅C₄ = 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0012.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n·r 을 자유롭게(₃H₂, ₄H₃, ₆H₂ 등). 제약: n ≥ 1, r ≥ 0 이고 답이 두 자리 안쪽으로 떨어지는 조합이어야 교과서 기본 난이도가 유지된다."
    creative: "(1) ₂H₄ 와 ₂Π₄·₂C₄ 를 나란히 비교시켜 세 기호의 차이를 묻기(★2) (2) 값을 주고 아래첨자를 역으로 찾기(★1~2 · 0016 골조) (3) 사탕 4개를 2명에게 나누는 실제 상황으로 번역(★2 · I-RT d1)."
```

```yaml
- id: RPM-PROB-0013
  page: 7
  vendor_label: "교과서 01-3 중복조합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ${}_3\mathrm{H}_5$ 의 값.
  category: "중복조합의 정의 → 조합수로 변환 → 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합 ₙHᵣ 의 값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₃H₅ = ₇C₅ = ₇C₂ = 21. 아래첨자가 위첨자의 절반을 넘으므로 여기서 ₇C₂ 로 바꾸면 계산이 짧아지지만 필수는 아니다.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "₃H₅ = ₇C₅ = ₇C₂ = 21"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$21$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0013.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "₃H₄(=₆C₄=15), ₃H₆(=₈C₆=28), ₄H₅(=₈C₅=56) 등. 제약: 계산이 한 줄로 끝나려면 변환 뒤 조합수의 아래첨자가 3 이하가 되게 고르는 편이 좋다."
    creative: "(1) ₇C₅ = ₇C₂ 를 쓰게 유도해 조합의 성질을 함께 묻기(★2) (2) 세 종류 물건에서 5개 고르기 상황으로 제시(★2 · I-RT d1) (3) ₃H₅ 와 ₅H₃ 의 값을 비교하게 하기(★2 · 대칭이 아님을 확인)."
```

```yaml
- id: RPM-PROB-0014
  page: 7
  vendor_label: "교과서 01-3 중복조합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ${}_4\mathrm{H}_4$ 의 값.
  category: "중복조합의 정의 → 조합수로 변환 → 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합 ₙHᵣ 의 값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₄H₄ = ₇C₄ = ₇C₃ = 35. 위·아래첨자가 같아 ₙ₊ᵣ₋₁ 자리를 헷갈리기 쉬운 것이 유일한 함정(T-표기).
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "₄H₄ = ₇C₄ = 35"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$35$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0014.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "₃H₃(=₅C₃=10), ₅H₅(=₉C₅=126) 처럼 위·아래첨자를 같게 유지하면 같은 함정이 남는다. 제약: 값이 세 자리를 넘으면 교과서 기본 수준을 벗어난다."
    creative: "(1) ₄H₄ 와 ₄Π₄ 를 비교(순서 유무 · ★2) (2) ₙHₙ 을 n 에 대해 일반화해 ₂ₙ₋₁Cₙ 임을 보이게 하기(★3 · I-PD) (3) 같은 값을 주는 다른 (n, r) 쌍 찾기(★3 · I-BW)."
```

```yaml
- id: RPM-PROB-0015
  page: 7
  vendor_label: "교과서 01-3 중복조합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ${}_5\mathrm{H}_0$ 의 값.
  category: "중복조합의 경계값(r = 0) → ₄C₀ → 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합 ₙHᵣ 의 값 계산(r = 0 경계)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₅H₀ = ₄C₀ = 1. 계산량은 없고 r = 0 일 때도 공식이 그대로 적용된다는 경계 확인(T-경계)만 묻는다.
    교과서 구역·통찰 없음·M_total 4 → ★1. 「0개를 고르는 경우는 1가지」를 0 으로 답하는 오답이 전형적이다.
  tier: star_1
  mechanism_primary: "₅H₀ = ₄C₀ = 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0015.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞의 n 만 바꾸면(₃H₀, ₇H₀) 답은 항상 1 이다. 제약: 경계 확인이 목적이므로 r = 0 을 유지해야 하고, r = 1 로 바꾸면 답이 n 이 되는 다른 문항이 된다."
    creative: "(1) ₅H₀ · ₅H₁ · ₅C₀ 를 함께 묻기(★1~2) (2) 「0개를 택하는 경우의 수가 1인 이유」를 서술(★2 · 서술형) (3) ₙH₀ = 1 을 공식으로 확인하게 하기(★2)."
```

```yaml
- id: RPM-PROB-0016
  page: 7
  vendor_label: "교과서 01-3 중복조합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ${}_7\mathrm{H}_3={}_n\mathrm{C}_3$ 을 만족시키는 $n$ 의 값.
  category: "중복조합을 조합수로 변환 → 아래첨자 비교 → n 결정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합 등식에서 n·r 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₇H₃ = ₉C₃ 이므로 아래첨자가 이미 3 으로 같아 위첨자만 비교하면 n = 9.
    교과서 구역·통찰 없음·M_total 4 → ★1. 변환만 정확하면 비교가 한 줄이다.
  tier: star_1
  mechanism_primary: "₇H₃ = ₉C₃ → ₙC₃ 와 비교 → n = 9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0016.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "왼쪽을 ₅H₄ = ₈C₄, ₆H₂ = ₇C₂ 등으로 바꾸고 오른쪽 아래첨자를 같게 유지하면 답이 바로 나온다. 제약: 양변의 아래첨자를 같게 두어야 ₙCᵣ = ₙCₙ₋ᵣ 로 인한 두 번째 해가 생기지 않는다."
    creative: "(1) 오른쪽을 ₙC₆ 으로 두어 ₉C₃ = ₉C₆ 까지 따지게 하기(★2 · I-EQV · 0017 골조) (2) n 을 주고 왼쪽 H 의 첨자를 찾게 하기(★2 · I-BW) (3) ₙHᵣ = ₙ₊ᵣ₋₁Cᵣ 를 쓰지 않고 실제 개수로 확인하는 서술형(★3)."
```

```yaml
- id: RPM-PROB-0017
  page: 7
  vendor_label: "교과서 01-3 중복조합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ${}_5\mathrm{H}_r={}_9\mathrm{C}_4$ 를 만족시키는 $r$ 의 값.
  category: "중복조합을 조합수로 변환 → ₉C₄ = ₉C₅ 로 맞춤 → r 결정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "₅Hᵣ = ₍₄₊ᵣ₎Cᵣ 로 바꾸면 아래첨자와 위첨자가 함께 움직이므로, 오른쪽 ₉C₄ 를 ₉C₅ 로 바꿔 놓아야 첨자 비교가 성립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중복조합 등식에서 n·r 구하기(조합의 성질 ₙCᵣ = ₙCₙ₋ᵣ 병용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₅Hᵣ = ₍₄₊ᵣ₎Cᵣ 인데 오른쪽은 ₉C₄ 라 위·아래를 그대로 맞추면 4 + r = 9 와 r = 4 가 어긋난다. ₉C₄ = ₉C₅ 로 바꾸면 r = 5 로 일치.
    같은 범위의 0016 과 달리 조합의 성질을 한 번 더 써야 해서 얕은 통찰 1개(EQV d1)를 기록했지만, 교과서 구역·d1 하나이므로 절차형·★1 유지.
  tier: star_1
  mechanism_primary: "₅Hᵣ = ₍₄₊ᵣ₎Cᵣ → ₉C₄ = ₉C₅ 로 변환 → r = 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0017.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "왼쪽 H 의 위첨자(4H, 6H)와 오른쪽 조합수를 바꿀 수 있다. 제약: 오른쪽을 ₙCₖ 로 둘 때 k 와 n−k 중 어느 쪽이 답인지 유일해야 하므로, 변환 후 아래첨자가 위첨자의 절반이 되는 경우(해가 둘)는 피한다."
    creative: "(1) 오른쪽을 ₉C₄ + ₉C₅ 처럼 합으로 주기(★2~3 · 파스칼 항등식 결합) (2) r 의 값을 모두 구하라고 해 유일성을 따지게 하기(★3 · I-VF) (3) ₅Hᵣ 를 실제 상황(5종류에서 r개 고르기)으로 옮겨 r 을 찾게 하기(★2 · I-RT)."
```

```yaml
- id: RPM-PROB-0018
  page: 7
  vendor_label: "교과서 01-3 중복조합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    네 개의 숫자 $1$, $2$, $3$, $4$ 중에서 중복을 허용하여 $2$개를 택하는 경우의 수.
  category: "순서 없는 중복 선택 → ₄H₂ → ₅C₂"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합의 활용(서로 다른 n종에서 중복 허용 r개 택하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「택하는」이므로 순서가 없고 중복은 허용 → ₄H₂ = ₅C₂ = 10.
    같은 범위 0007(세 자리 자연수 = 중복순열)과 짝을 이루는 문항으로, 순서 유무만 갈라 보면 끝난다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "순서 없음 + 중복 허용 → ₄H₂ = ₅C₂ = 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0018.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 종류 수와 택하는 개수(5종에서 3개 → ₅H₃ = ₇C₃ = 35 등)를 바꿀 수 있다. 제약: 교과서 기본이면 답이 두 자리 안쪽이 되게 하고, 종류 수보다 택하는 개수가 커도 되는 것이 중복조합의 특징이므로 그 경우도 일부러 쓸 수 있다."
    creative: "(1) 같은 재료로 「세 자리 자연수의 개수」를 물어 중복순열과 대비(★2 · 0007 과 세트) (2) 택한 두 수의 합이 짝수인 경우로 제한(★2~3 · I-MI) (3) 서로 다른 것만 택하는 경우(₄C₂)와 개수 차이를 설명하게 하기(★2 · 서술형)."
```

```yaml
- id: RPM-PROB-0019
  page: 7
  vendor_label: "교과서 01-3 중복조합"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    세 가지 맛(초콜릿·딸기·바닐라) 아이스크림 중에서 $5$개를 고르는 경우의 수(각 맛은 충분히 많다).
  category: "종류 3·개수 5의 중복 선택 → ₃H₅ → ₇C₅"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복조합의 활용(서로 다른 n종에서 중복 허용 r개 택하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「충분히 많다」가 중복 허용을, 고른 묶음에 순서가 없다는 점이 조합을 지정 → ₃H₅ = ₇C₅ = 21.
    고르는 개수 5가 종류 수 3보다 크다는 점이 중복조합임을 알려 주는 신호다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "종류 3·중복 허용 5개 선택 → ₃H₅ = ₇C₅ = 21"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$21$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0019.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "맛의 가짓수와 고르는 개수(4종 6개 → ₄H₆ = ₉C₆ = 84 등). 제약: 「각 맛은 충분히 많다」 문장을 빼면 재고 제한 문제가 되어 골조가 달라진다."
    creative: "(1) 각 맛을 적어도 1개씩 포함(₃H₂ 로 환원 · ★2 · I-EQV d1) (2) 특정 맛을 2개 이하로 제한(여사건 · ★3 · I-MI) (3) 5개를 세 명에게 나눠 주는 배분 문제로 바꾸기(★2~3 · I-RT)."
```

### 교과서 01-4 이항정리

```yaml
- id: RPM-PROB-0020
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이항정리를 이용하여 $(x+y)^4$ 을 전개하기.
  category: "이항정리 → ₄Cₖ 계수 나열 → 전개식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리를 이용한 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    계수가 ₄C₀~₄C₄ = 1, 4, 6, 4, 1 이고 부호·계수 변형이 없는 가장 기본 꼴.
    교과서 구역·통찰 없음·M_total 4 → ★1. 이 범위 전개 문항 4개(0020~0023)의 기준점이다.
  tier: star_1
  mechanism_primary: "(x+y)^4 = Σ ₄Cₖ x^{4−k} y^k → 1, 4, 6, 4, 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x^4+4x^3y+6x^2y^2+4xy^3+y^4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0020.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수를 3·5·6 으로 바꾸면 계수만 파스칼 삼각형 해당 행으로 바뀐다. 제약: 지수가 7 이상이면 계산 분량만 늘고 난이도는 그대로라 교과서 기본에서는 피한다."
    creative: "(1) (x−y)^4 로 부호를 넣기(★1 · T-부호) (2) 한 항의 계수만 묻기(★1 · 0024 골조) (3) 전개식의 계수의 합을 x = y = 1 대입으로 구하게 하기(★2 · I-EQV d1)."
```

```yaml
- id: RPM-PROB-0021
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이항정리를 이용하여 $(x-2)^5$ 을 전개하기.
  category: "이항정리 → (−2)^k 곱 → 부호 교대 전개식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리를 이용한 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₅Cₖ x^{5−k}(−2)^k 이므로 이항계수 1, 5, 10, 10, 5, 1 에 2^k 와 부호 교대를 함께 곱해야 한다(T-부호).
    계산 분량은 0020 보다 크지만 단계·통찰은 같고, v3.8 에서 계산 마찰은 ★ 상승 신호가 아니다 → 교과서 ★1 유지.
  tier: star_1
  mechanism_primary: "(x−2)^5 = Σ ₅Cₖ x^{5−k}(−2)^k → 부호 교대 + 2^k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x^5-10x^4+40x^3-80x^2+80x-32$"
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-prob/items/0021.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 −2 를 −1·3·−3 으로, 지수를 4·6 으로. 제약: |상수|가 3을 넘고 지수가 5 이상이면 마지막 항이 세 자리를 넘어 계산 마찰만 커진다."
    creative: "(1) (x−2)^5 의 특정 항 계수만 묻기(★1 · 0025~0027 골조) (2) x = 1 대입으로 계수의 합, x = −1 로 교대합을 묻기(★2 · I-EQV d1) (3) (x−2)^5 + (x+2)^5 처럼 짝수 차수만 남는 합을 묻기(★3 · I-SYM d2)."
```

```yaml
- id: RPM-PROB-0022
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이항정리를 이용하여 $(3a+2b)^4$ 을 전개하기.
  category: "이항정리 → 두 항의 계수 거듭제곱 3^{4−k}·2^k → 전개식"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리를 이용한 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₄Cₖ (3a)^{4−k}(2b)^k 로 이항계수 1, 4, 6, 4, 1 에 3^{4−k}·2^k 를 함께 곱한다. 문자 앞 계수를 거듭제곱하지 않는 실수(T-표기)가 전형적 오답.
    단계·통찰은 0020 과 같고 계산만 무거우므로 교과서 ★1 유지.
  tier: star_1
  mechanism_primary: "(3a+2b)^4 = Σ ₄Cₖ (3a)^{4−k}(2b)^k → 81, 216, 216, 96, 16"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$81a^4+216a^3b+216a^2b^2+96ab^3+16b^4$"
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-prob/items/0022.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 계수(2a+b, a+3b 등)와 지수(3·5)를 바꿀 수 있다. 제약: 두 계수가 모두 2 이상이고 지수가 5 이상이면 항의 값이 네 자리를 넘어 교과서 기본 범위를 벗어난다."
    creative: "(1) (3a−2b)^4 로 부호를 추가(★1 · T-부호) (2) 특정 항의 계수만 묻기(★1~2 · 0027 골조) (3) 전개식에서 계수가 가장 큰 항을 찾게 하기(★3 · 인접 항 비로 비교 · I-PD)."
```

```yaml
- id: RPM-PROB-0023
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    이항정리를 이용하여 $\left(a-\dfrac{2}{a}\right)^3$ 을 전개하기.
  category: "이항정리 → 분수항의 거듭제곱 → 음의 차수까지 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리를 이용한 전개(분수·음의 차수 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ₃Cₖ a^{3−k}(−2/a)^k 에서 부호 교대와 a 의 차수 3 − 2k 를 동시에 관리해야 한다(T-부호·T-단위).
    차수가 3 으로 작아 계산은 짧고, 단계·통찰은 다른 전개 문항과 같다 → 교과서 ★1.
  tier: star_1
  mechanism_primary: "(a − 2/a)^3 = Σ ₃Cₖ a^{3−k}(−2/a)^k → a 의 차수 3 − 2k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a^3-6a+\dfrac{12}{a}-\dfrac{8}{a^3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0023.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수(1·3)와 지수(4·5)를 바꿀 수 있다. 제약: 지수를 짝수로 하면 상수항이 생겨 0028 유형과 겹치고, 홀수로 두면 상수항이 없다 — 의도에 맞게 고른다."
    creative: "(1) 지수를 6 으로 올려 상수항만 묻기(★2 · 0028 골조) (2) (a + 2/a)^3 과 비교해 부호 구조를 설명(★2 · 서술형) (3) a 의 차수가 1인 항의 계수를 일반 지수 n 에 대해 구하게 하기(★3 · I-PD)."
```

```yaml
- id: RPM-PROB-0024
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ⑴~⑶ $(x+y)^7$ 의 전개식에서 $x^4y^3$, $x^5y^2$, $y^7$ 항의 계수를 각각 구하기.
  category: "일반항 ₇Cₖ x^{7−k}y^k → 지수로 k 결정 → 계수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리 일반항으로 특정 항의 계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y 의 지수가 곧 k 이므로 ⑴ k = 3 → ₇C₃ = 35, ⑵ k = 2 → ₇C₂ = 21, ⑶ k = 7 → 1.
    전개를 다 쓰지 않고 일반항만 쓰는 것이 이 유형의 핵심이며, 세 소문항 모두 한 줄로 끝난다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "일반항 ₇Cₖ x^{7−k}y^k → y 지수 = k → ₇C₃, ₇C₂, ₇C₇"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $35$ \quad (2) $21$ \quad (3) $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0024.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 7 과 묻는 항(x^2y^5 등)을 바꿀 수 있다. 제약: 두 지수의 합이 반드시 전체 지수와 같아야 하므로, 존재하지 않는 항을 묻고 싶다면 그 자체를 의도로 명시한다."
    creative: "(1) 존재하지 않는 항(x^4y^2)을 섞어 계수 0 을 답하게 하기(★2 · I-VF d1) (2) (x+y)^7 대신 (2x−y)^7 로 계수를 붙이기(★2 · 0027 골조) (3) 계수가 최대인 항을 찾게 하기(★3 · 중앙항 · I-SYM)."
```

```yaml
- id: RPM-PROB-0025
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $(x+2)^4$ 의 전개식에서 $x^3$ 의 계수.
  category: "일반항 ₄Cₖ x^{4−k}2^k → 차수로 k 결정 → 계수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리 일반항으로 특정 항의 계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 의 차수 4 − k = 3 → k = 1 → ₄C₁·2 = 8. 상수항의 거듭제곱 2^k 를 빠뜨리지 않는 것이 유일한 주의점.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4 − k = 3 → k = 1 → ₄C₁·2^1 = 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0025.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 와 지수 4, 묻는 차수를 바꿀 수 있다(예: (x+3)^5 의 x^2 계수 = ₅C₃·27 = 270). 제약: 묻는 차수가 0 이상 전체 지수 이하여야 하고, 값이 세 자리를 크게 넘지 않게 고른다."
    creative: "(1) 계수를 주고 상수를 역으로 찾게 하기(★2 · I-BW d1) (2) (x+2)^4(x+1) 처럼 곱으로 만들어 두 항의 기여를 합치게 하기(★3 · I-CON) (3) x^3 의 계수와 x 의 계수 비를 묻기(★2)."
```

```yaml
- id: RPM-PROB-0026
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $(a-3)^5$ 의 전개식에서 $a^2$ 의 계수.
  category: "일반항 ₅Cₖ a^{5−k}(−3)^k → 차수로 k 결정 → 부호 포함 계수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리 일반항으로 특정 항의 계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5 − k = 2 → k = 3 → ₅C₃·(−3)^3 = 10·(−27) = −270. k 가 홀수라 부호가 음이 되는 것이 함정(T-부호).
    교과서 구역·통찰 없음·M_total 4 → ★1. 0025 와 같은 골조에 부호만 얹혔다.
  tier: star_1
  mechanism_primary: "5 − k = 2 → k = 3 → ₅C₃·(−3)^3 = −270"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-270$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0026.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 −3 과 지수 5, 묻는 차수를 바꾼다. 제약: 답의 부호가 k 의 홀짝으로 정해지므로, 음의 계수를 의도하면 k 를 홀수로 만드는 차수를 골라야 한다."
    creative: "(1) 계수의 절댓값만 묻기(★1 · 부호 함정 제거) (2) 계수가 양수가 되는 항을 모두 찾게 하기(★2 · I-MI d1) (3) (a−3)^5 의 모든 계수의 합을 a = 1 대입으로 구하기(★2 · I-EQV d1)."
```

```yaml
- id: RPM-PROB-0027
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $(2x-y)^5$ 의 전개식에서 $x^3y^2$ 의 계수.
  category: "일반항 ₅Cₖ (2x)^{5−k}(−y)^k → k 결정 → 계수 거듭제곱까지 계산"
  M: {s: 1, k: 2, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항정리 일반항으로 특정 항의 계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y 의 지수 k = 2 → ₅C₂(2x)^3(−y)^2 = 10·8·1 = 80. 2^3 을 곱하는 것(T-표기)과 (−y)^2 의 부호(T-부호) 두 가지를 동시에 챙겨야 해 이 범위 계수 문항 중 오답이 가장 잦다.
    다만 단계 수·통찰은 0025·0026 과 같고 v3.8 에서 계산 마찰은 ★ 상승 신호가 아니다.
    [분류 이슈] M_total 6(함정 2종)만 보면 ★2 후보지만 교과서 구역·통찰 0 이라 ★1 로 둔다.
  tier: star_1
  mechanism_primary: "k = 2 → ₅C₂(2x)^3(−y)^2 = 10·8 = 80"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$80$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0027.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 계수(3x−2y 등)와 지수, 묻는 항을 바꾼다. 제약: 두 지수의 합이 전체 지수와 같아야 하고, 계수 거듭제곱이 커지면 답이 네 자리를 넘으므로 밑은 3 이하로 둔다."
    creative: "(1) 계수를 주고 미지의 계수 a 를 찾게 하기(★2~3 · I-BW) (2) x^3y^2 과 x^2y^3 의 계수의 합을 묻기(★2) (3) (2x−y)^5 의 계수의 절댓값의 합을 x = y = 1 로 구하기(★3 · I-EQV d2)."
```

```yaml
- id: RPM-PROB-0028
  page: 9
  vendor_label: "교과서 01-4 이항정리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $\left(a-\dfrac{1}{a}\right)^6$ 의 전개식에서 상수항.
  category: "일반항의 차수 6 − 2k = 0 → k 결정 → 상수항"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「상수항」이라는 말을 「a 의 차수가 0인 항」으로 바꿔 지수 방정식 6 − 2k = 0 을 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일반항의 지수 조건으로 상수항 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항 ₆Cₖ a^{6−k}(−1/a)^k = ₆Cₖ(−1)^k a^{6−2k} 에서 6 − 2k = 0 → k = 3 → ₆C₃(−1)^3 = −20.
    0025~0027 과 달리 항의 위치가 주어지지 않아 학생이 차수 조건을 식으로 바꿔 k 를 먼저 찾아야 한다(EQV d1) → 교과서 출발 ★1 에서 +1 하여 ★2. 얕은 통찰 하나이므로 insight_type 은 절차형.
  tier: star_2
  mechanism_primary: "일반항 ₆Cₖ(−1)^k a^{6−2k} → 6 − 2k = 0 → k = 3 → −20"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0028.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 6 과 분자 상수(−2, 3)를 바꾼다. 제약: 상수항이 존재하려면 a 의 차수 n − 2k 가 0 이 되는 정수 k 가 있어야 하므로 n 은 짝수여야 한다 — 홀수로 두면 「상수항이 없다」가 답이 된다."
    creative: "(1) n 을 홀수로 두고 상수항의 유무를 판정하게 하기(★3 · I-VF d1) (2) 상수항 대신 a^2 의 계수를 묻기(★2) (3) (a − 1/a)^n 의 상수항이 −20 이 되는 n 을 찾게 하기(★3 · I-BW d2)."
```

### 교과서 01-5 파스칼의 삼각형

```yaml
- id: RPM-PROB-0029
  page: 9
  vendor_label: "교과서 01-5 파스칼의 삼각형"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    파스칼의 삼각형 빈칸을 채우고, 그 결과를 이용해 ⑴ $(a+b)^5$ ⑵ $(a+2b)^6$ 을 전개하기.
  category: "파스칼 삼각형으로 이항계수 생성 → ⑴ 그대로 대입 ⑵ 2^k 를 곱해 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(a+2b)^6 을 (a+b)^6 의 이항계수에 2^k 를 곱한 것으로 보고 파스칼 삼각형 결과를 재사용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "파스칼의 삼각형으로 이항계수를 구해 전개하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빈칸은 이웃한 두 수의 합이라는 파스칼 삼각형 규칙으로 n = 3~6 행(1,3,3,1 / 1,4,6,4,1 / 1,5,10,10,5,1 / 1,6,15,20,15,6,1)을 완성한다.
    ⑴ 은 5행을 그대로 옮기면 끝나지만, ⑵ 는 6행 계수에 2^k 를 각각 곱해야 해(12, 60, 160, 240, 192, 64) 한 단계가 더 있다(EQV d1).
    빈칸 6개 + 전개 2개로 이 범위에서 단계 수가 가장 많다 → 교과서 출발 ★1 에서 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "이웃 두 수의 합으로 6행까지 생성 → (a+b)^5 대입 / (a+2b)^6 은 계수에 2^k 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조(빈칸 위에서부터 $3$ · $4$, $6$ · $5$, $10$, $5$ · $6$, $15$, $20$ · (1) $a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5$ (2) $a^6+12a^5b+60a^4b^2+160a^3b^3+240a^2b^4+192ab^5+64b^6$)'
  answer_source: "답지"
  figure: 'crop:fig-0029.png'
  latex: latex-bank/rpm-prob/items/0029.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 계수 2 를 3 이나 −2 로 바꾸면 곱해야 할 것이 3^k 또는 (−2)^k 로 바뀐다. 제약: 그림의 삼각형이 6행까지만 있으므로 전개 지수는 6 을 넘길 수 없고, 빈칸 위치도 크롭에 고정돼 있어 행 구성은 바꿀 수 없다."
    creative: "(1) ⑵ 를 (2a−b)^6 으로 바꿔 양쪽 계수와 부호를 함께 다루게 하기(★2~3) (2) 삼각형의 한 행의 합이 2^n 임을 확인하게 하기(★3 · I-PD d2) (3) 빈칸을 더 위쪽 행에 두어 역으로 채우게 하기(★3 · I-BW)."
```

```yaml
- id: RPM-PROB-0030
  page: 9
  vendor_label: "교과서 01-5 파스칼의 삼각형"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ${}_3\mathrm{C}_0+{}_3\mathrm{C}_1+{}_4\mathrm{C}_2+{}_5\mathrm{C}_3={}_n\mathrm{C}_3$ 을 만족시키는 자연수 $n$ 의 값.
  category: "파스칼 항등식을 앞에서부터 연쇄 적용 → 하나의 조합수 → n 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "흩어진 네 조합수를 ₙCᵣ + ₙCᵣ₊₁ = ₙ₊₁Cᵣ₊₁ 로 앞에서부터 두 개씩 합쳐 하나의 ₙC₃ 으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "파스칼 항등식(ₙCᵣ + ₙCᵣ₊₁ = ₙ₊₁Cᵣ₊₁) 연쇄로 조합수 정리하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ₃C₀ + ₃C₁ = ₄C₁, ₄C₁ + ₄C₂ = ₅C₂, ₅C₂ + ₅C₃ = ₆C₃ 로 앞에서부터 한 번씩 합쳐 n = 6.
    값을 직접 더해 1 + 3 + 6 + 10 = 20 을 얻고 ₙC₃ = 20 인 n 을 찾는 우회 갈래도 있으나, 이 구역의 의도는 항등식 연쇄다.
    항등식을 연쇄로 쓰는 착안(EQV d1)이 필요해 교과서 출발 ★1 에서 +1 하여 ★2.
    [분류 이슈] 직접 계산 갈래가 쉬워 ★1 로 볼 여지가 있다.
  tier: star_2
  mechanism_primary: "앞에서부터 파스칼 항등식 3회 적용 → ₆C₃ → n = 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0030.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연쇄의 시작 행과 항의 개수를 바꿀 수 있다(예: ₄C₀ + ₄C₁ + ₅C₂ + ₆C₃ + ₇C₄ = ₈C₄). 제약: 첫 두 항이 같은 위첨자여야 연쇄가 시작되고, 이후 각 항은 위첨자·아래첨자가 동시에 1씩 늘어야 한다."
    creative: "(1) 항을 하나 빼 등식이 성립하지 않게 만든 뒤 빠진 항을 찾게 하기(★3 · I-BW) (2) 연쇄를 뒤에서부터 적용하게 하기(★2) (3) ₙC₃ = 20 만 주고 n 을 구하게 해 조합수 역산만 남기기(★2)."
```

```yaml
- id: RPM-PROB-0031
  page: 9
  vendor_label: "교과서 01-5 파스칼의 삼각형"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    ${}_4\mathrm{C}_2+{}_4\mathrm{C}_1+{}_5\mathrm{C}_1+{}_6\mathrm{C}_1={}_n\mathrm{C}_2$ 를 만족시키는 자연수 $n$ 의 값.
  category: "파스칼 항등식 연쇄(아래첨자 2 유지) → 하나의 조합수 → n 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "₄C₂ + ₄C₁ 부터 시작해 ₙC₂ + ₙC₁ = ₙ₊₁C₂ 를 반복 적용, 아래첨자 2를 유지한 채 위첨자만 올림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "파스칼 항등식(ₙCᵣ + ₙCᵣ₊₁ = ₙ₊₁Cᵣ₊₁) 연쇄로 조합수 정리하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ₄C₂ + ₄C₁ = ₅C₂, ₅C₂ + ₅C₁ = ₆C₂, ₆C₂ + ₆C₁ = ₇C₂ 로 n = 7.
    0030 과 달리 항등식의 두 항이 ₙC₂ + ₙC₁ 순서로 적혀 있어 ₙCᵣ + ₙCᵣ₊₁ 꼴로 맞추려면 순서를 바꿔 읽어야 한다(T-표기).
    직접 더하면 6 + 4 + 5 + 6 = 21 → ₇C₂ 로도 풀리지만 의도는 연쇄다. 착안(EQV d1) 때문에 교과서 출발 ★1 에서 +1 하여 ★2.
    [분류 이슈] 0030 과 같은 이유로 ★1 로 볼 여지가 있다.
  tier: star_2
  mechanism_primary: "₄C₂ 에서 시작해 파스칼 항등식 3회 적용 → ₇C₂ → n = 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0031.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 조합수와 항의 개수를 바꾼다(예: ₃C₂ + ₃C₁ + ₄C₁ + ₅C₁ + ₆C₁ = ₇C₂). 제약: 아래첨자를 2로 유지하려면 더해지는 항이 모두 ₖC₁ 이어야 하고, 첫 항만 아래첨자 2 로 둔다."
    creative: "(1) ₙC₂ 대신 ₙC₃ 연쇄로 바꿔 항의 아래첨자를 하나씩 올리기(★2~3) (2) 등식이 성립하는 가장 작은 n 을 묻는 부등식형으로 바꾸기(★3) (3) 이 연쇄가 파스칼 삼각형의 어느 대각선 합인지 설명하게 하기(★3 · 서술형 · I-RT d2)."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 27 · ★2 4 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 31 · premium 0 (교과서 기본 구역만으로 이뤄진 범위라 깊은 통찰(d2 이상)이 요구되는 문항이 없다. 얕은 통찰 d1 은 0017·0028·0029·0030·0031 다섯 문항에 기록)
- M_total 분포: 4 가 25문 · 5 가 4문(0021~0023·0028 — 계산·부호 부담) · 6 이 2문(0027 함정 2종 · 0029 소문항 2개)
- type_hint 상위 5: 「중복순열의 수 계산(ₙΠᵣ = nʳ)」 4 · 「중복조합 ₙHᵣ 의 값 계산」 4 · 「이항정리를 이용한 전개」 4(0023 은 분수 포함 변형) · 「이항정리 일반항으로 특정 항의 계수 구하기」 4 · 「중복순열 등식에서 n·r 구하기」·「중복조합 등식에서 n·r 구하기」·「중복순열의 활용」·「중복조합의 활용」·「같은 것이 있는 순열의 수」·「파스칼 항등식 연쇄」 각 2
- 그림: 2문(`crop:fig-0011.png` 도로망 · `crop:fig-0029.png` 파스칼의 삼각형) — 두 문항 모두 답과 본문에 필요한 수가 드러나 있어 골조 판정에 크롭 판독이 필요하지 않았다
- 대상층: ★1 27문 하위권 · ★2 4문 중하위권
- 이 범위의 용도: 순열과 조합 단원의 **정의·공식 적용 기준선**. 숫자 변형은 거의 모든 문항에서 자유롭지만, 0011·0029 는 그림이 답을 결정하므로 크롭 교체 없이는 숫자를 바꿀 수 없다(각 블록 variation_notes.numeric 에 명시).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0011 | 원래 I-RT(격자 경로 → 문자열 나열) 유형이나 변환 문장이 본문에 인쇄된 빈칸 유도형이라 통찰 0·절차형으로 판정. 빈칸을 없애면 ★2 | ★1 / ★2 |
| RPM-PROB-0027 | 함정 2종(2^3 누락·(−y)^2 부호)으로 M_total 6 이지만 단계·통찰은 0025·0026 과 동일. v3.8 에서 계산 마찰은 ★ 상승 신호가 아니라 ★1 유지 | ★1 / ★2 |
| RPM-PROB-0030 | 파스칼 항등식 연쇄(EQV d1)를 근거로 ★2 로 뒀으나 값을 직접 더하는 우회 갈래가 쉬워 ★1 로 볼 여지 | ★2 / ★1 |
| RPM-PROB-0031 | 0030 과 동일한 사유. 다만 ₙC₂ + ₙC₁ 순서가 뒤집혀 적혀 있어 0030 보다 한 겹 더 걸린다 | ★2 / ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「중복순열의 수 계산」과 ⑵ 「중복조합 ₙHᵣ 의 값 계산」은 기호·공식이 달라 반드시 분리한다. ⑶ 「최단 거리로 가는 경우의 수」(0011)는 같은 것이 있는 순열의 하위가 아니라 독립 유형으로 세우는 편이 변형 설계에 유리하다(격자·중간 지점·통행 금지로 ★1~3 이 모두 나온다). ⑷ 「일반항의 지수 조건으로 상수항 구하기」(0028)는 항이 명시된 「특정 항의 계수」(0024~0027)와 단계 수가 달라 분리한다.
- **통합해도 될 유형**: 「중복순열 등식에서 n·r 구하기」(0005·0006)와 「중복조합 등식에서 n·r 구하기」(0016·0017)는 공식만 바뀌는 같은 골조이므로 상위 유형 「정의식 등식에서 첨자 구하기」로 묶고 공식별 하위로 둘 수 있다. 「이항정리를 이용한 전개」(0020~0023)는 상수·계수·분수 변형이 모두 같은 일반항 적용이라 한 유형으로 충분하다.
- **이 범위의 한계**: 31문 전부가 교과서 기본 구역이라 ★3 이상과 d2 이상 통찰의 표본이 없다. 유형 카탈로그의 base ★ 는 2/4~4/4 부(유형·유형 UP·시험에 꼭 나오는 문제·실력 Up)의 정독 결과가 모인 뒤 확정하는 것이 안전하다.

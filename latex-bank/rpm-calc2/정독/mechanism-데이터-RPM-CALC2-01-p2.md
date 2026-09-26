---
name: mechanism-데이터-RPM-CALC2-01-p2
description: RPM 미적분Ⅱ 01 수열의 극한(2/4 · 교과서 01-5 등비수열의 극한 ~ 유형 07 ∞−∞ 꼴의 극한) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정) · 전사본 latex-bank/rpm-calc2
  section: 01 수열의 극한
  unit_code: CALC2-01
  part: "2/4"
  extract_range: "9~13쪽 · 0036~0070"
  total_problems: 35
  unit_total: 142
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 01 수열의 극한 (2/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 01 수열의 극한 단원(142문) 가운데 9~13쪽의 35문항(0036~0070)을 다룬다. 구역은 교과서 01-5 등비수열의 극한(6문 · 수렴·발산 조사 3문 + 수렴 조건 3문) 뒤로 유형 01 수열의 수렴과 발산 · 유형 02 수열의 극한에 대한 성질 · 유형 03 수렴하는 수열의 활용 · 유형 04 ∞/∞ 꼴의 극한 · 유형 05 ∞/∞ 꼴(합 또는 곱으로 표현된 수열) · 유형 06 ∞/∞ 꼴(미정계수의 결정) · 유형 07 ∞−∞ 꼴의 극한 순이며, 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중하·중·상중 난이도 표시(★1~2 · ★2 · ★3 출발)와 「서술형」 태그(0054 · 0070)를 가진다. 그림 문항은 없다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. 출발점에서의 −1 은 통찰 0 · M_total ≤ 5 이면서 재배열(유리화·나누기·일반항 구하기) 없이 읽고 대입만 하는 문항에만 적용했고, 재배열이 한 번이라도 있으면 출발점을 유지했다. `target_cohort` 는 ★1 → 하위권, ★2 절차형 → 중하위권, ★2 통찰 라벨 있음 → 중위권, ★3 통찰형 → 중상위권으로 두었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다.

## 문항 데이터

### 교과서 01-5 등비수열의 극한

```yaml
- id: RPM-CALC2-0036
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {2^{-n}+5^{-n}} 의 수렴·발산을 조사하고 수렴하면 극한값.
  category: "두 등비수열의 합 → 각 항 극한 0 → 합 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 극한(공비 |r|<1 → 0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2^{-n}=(1/2)^n, 5^{-n}=(1/5)^n 은 공비가 (−1, 1) 안이라 각각 0 으로 수렴하고 합의 극한은 0+0. 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2^{-n}, 5^{-n} 각각 공비 1/2, 1/5 의 등비수열 → 둘 다 0 → 합 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "수렴, $0$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0036.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2, 5 를 다른 1 보다 큰 수(3, 10)로, 항 수를 셋으로 늘릴 수 있음. 제약: 밑이 모두 1 보다 커야 지수 −n 의 등비수열이 0 으로 수렴하고, 밑 1 이나 음수를 섞으면 상수항·진동이 생겨 답이 달라짐."
    creative: "(1) 한 항을 (−1/3)^n 처럼 음의 공비로 바꿔 진동하면서도 0 으로 수렴함을 확인(★1) (2) 2^{-n}+1 처럼 상수를 더해 극한이 1 이 되게(★1) (3) 3^n·2^{-n} 처럼 밑이 1 을 넘는 곱을 넣어 발산으로 뒤집기(★1~2)."
```

```yaml
- id: RPM-CALC2-0037
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {3^{n+1}/(3^n−1)} 의 수렴·발산을 조사하고 수렴하면 극한값.
  category: "3^n 으로 분모·분자 나누기 → 3/(1−(1/3)^n) → 3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열을 포함한 ∞/∞ 극한(가장 큰 밑의 거듭제곱으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모·분자를 3^n 으로 나누면 3/(1−(1/3)^n) 이고 (1/3)^n → 0 이라 극한 3. ∞/∞ 꼴을 가장 큰 밑의 거듭제곱으로 나누는 표준 절차 한 단계. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "∞/∞ 꼴 → 3^n 으로 나누기 → 3/(1−(1/3)^n) → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "수렴, $3$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0037.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 다른 수(2, 5)로, 분자의 지수 n+1 을 n+2 로, 분모의 −1 을 +2 처럼 다른 상수로 바꿀 수 있음. 제약: 분자·분모의 밑이 같아야 극한이 밑의 거듭제곱(3^1=3)으로 떨어지고, 분모가 0 이 되는 n 이 없어야 함."
    creative: "(1) 분자 밑을 2^{n+1} 로 바꿔 극한 0 (★1) (2) 분자를 3^{n+1}+2^n 처럼 작은 밑을 섞어 무시되는 항을 인식하게(★1) (3) 3^{n+1}/(3^n−1) − 3 의 극한처럼 차를 물어 0 으로 가는 나머지를 정리(★2)."
```

```yaml
- id: RPM-CALC2-0038
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수열 {7^n/(2^n+5^n)} 의 수렴·발산을 조사하고 수렴하면 극한값.
  category: "가장 큰 밑 7^n 으로 나누기 → 1/((2/7)^n+(5/7)^n) → 분모 0+ → ∞"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열을 포함한 ∞/∞ 극한(가장 큰 밑의 거듭제곱으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    7^n 으로 나누면 분모가 (2/7)^n+(5/7)^n → 0 이고 분자 1 이라 양의 무한대로 발산(5^n 으로 나눠도 (7/5)^n → ∞). 한 단계. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분자 밑 7 > 분모의 가장 큰 밑 5 → 7^n 으로 나누기 → 1/((2/7)^n+(5/7)^n) → ∞ 발산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "발산"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0038.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 7, 2, 5 를 바꿀 수 있음. 제약: 분자 밑이 분모의 가장 큰 밑보다 크면 발산, 같으면 유한 극한, 작으면 0 — 어느 경우를 묻는지 정해 두기."
    creative: "(1) 분자 밑을 5^n 으로 바꿔 극한 1 (★1) (2) 분자 밑을 3^n 으로 바꿔 극한 0 (★1) (3) 세 수열 중 수렴하는 것 고르기 보기 문제로 묶기(★1~2)."
```

```yaml
- id: RPM-CALC2-0039
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 1, 3r, 9r², 27r³, … 이 수렴하도록 하는 실수 r 의 값의 범위.
  category: "공비 3r 읽기 → −1 < 3r ≤ 1 → r 의 범위"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴 조건(−1 < r ≤ 1)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비가 3r 이므로 수렴 조건 −1 < 3r ≤ 1 을 3 으로 나눠 −1/3 < r ≤ 1/3. 등호가 공비 1 쪽(오른쪽)에만 붙는 경계 처리(T-경계) 하나. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "공비 3r → 수렴 조건 −1 < 3r ≤ 1 → −1/3 < r ≤ 1/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{1}{3}<r\le\dfrac{1}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0039.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비의 계수 3 을 2, 5, 1/2 로 바꿀 수 있음. 제약: 답의 등호가 공비 1 쪽에만 붙어야 하며 계수가 음수면 부등호 방향이 뒤집힘(0040 골조)."
    creative: "(1) 첫째항을 r 로 두어 첫째항 0 인 경우를 따로 보게(★2) (2) 공비를 r−1 이나 2r+1 처럼 일차식으로(★1) (3) 수렴하면서 극한값이 0 이 되는 r 의 범위처럼 극한값 조건을 덧붙여 등호 위치를 구분(★2·T-경계)."
```

```yaml
- id: RPM-CALC2-0040
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 1, −r/2, r²/4, −r³/8, … 이 수렴하도록 하는 실수 r 의 값의 범위.
  category: "공비 −r/2 읽기 → −1 < −r/2 ≤ 1 → 부호·등호 뒤집어 r 의 범위"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴 조건(−1 < r ≤ 1)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 −r/2 에 −1 < −r/2 ≤ 1 을 적용하고 −2 를 곱하면서 부등호 방향과 등호 위치를 함께 뒤집어 −2 ≤ r < 2. 함정은 부호 반전(T-부호)과 등호 이동(T-경계) 둘이지만 단계는 하나. 교과서 → ★1.
  tier: star_1
  mechanism_primary: "공비 −r/2 → −1 < −r/2 ≤ 1 → (−2) 곱해 방향·등호 반전 → −2 ≤ r < 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2\le r<2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0040.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비의 분모 2 를 3, 4 로 바꿀 수 있음. 제약: 공비가 −(양수)·r 꼴이어야 등호가 r 의 왼쪽 끝에 붙는 골조가 유지됨."
    creative: "(1) 공비를 (1−r)/2 로 바꿔 부호 반전과 평행이동을 함께(★2) (2) 첫째항을 r 로 두어 r=0 포함 여부 논의(★2) (3) 수렴 조건과 극한값 0 조건을 동시에 물어 등호 위치를 구분(★2)."
```

```yaml
- id: RPM-CALC2-0041
  page: 9
  vendor_label: "교과서 01-5 등비수열의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    등비수열 {(2r−1)^n} 이 수렴하도록 하는 실수 r 의 값의 범위.
  category: "공비 2r−1 → −1 < 2r−1 ≤ 1 → 0 < r ≤ 1"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등비수열의 수렴 조건(−1 < r ≤ 1)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공비 2r−1 에 수렴 조건을 적용해 0 < 2r ≤ 2, 0 < r ≤ 1. 한 단계. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "공비 2r−1 → −1 < 2r−1 ≤ 1 → 0 < r ≤ 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0<r\le 1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0041.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공비를 3r+1, (r−2)/3 처럼 다른 일차식으로 바꿀 수 있음. 제약: 일차식 계수의 부호에 따라 등호 위치가 달라짐."
    creative: "(1) 공비를 r²−1 같은 이차식으로 바꿔 두 부등식의 교집합(★2) (2) 공비를 |r|−1 로 바꿔 절댓값 분기(★2) (3) 두 등비수열이 동시에 수렴하는 r 의 범위처럼 교집합 문제로(★2)."
```

### 유형 01 수열의 수렴과 발산

```yaml
- id: RPM-CALC2-0042
  page: 10
  vendor_label: "유형 01 수열의 수렴과 발산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    첫 항들과 일반항이 함께 주어진 다섯 수열(3n+1 · 4/(2n−1) · 2+3(−1)^n · (n²+1)/n · (−1)^n n/(n+1)) 중 수렴하는 것 고르기. 5지선다.
  category: "다섯 일반항의 극한 각각 판정 → 0 으로 수렴하는 것 하나"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 판정(보기 고르기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ① 3n+1 → ∞, ② 4/(2n−1) → 0, ③ 2+3(−1)^n 은 −1, 5 진동, ④ (n²+1)/n → ∞, ⑤ (−1)^n n/(n+1) 은 ±1 근처 진동. 각 판정이 한 줄이고 재배열이 없으며 통찰 없음·M_total 5 → 대표문제 출발 ★2 에서 −1 해 ★1. [분류 이슈] 대표문제 표기와 1단 차이 — 기록만.
  tier: star_1
  mechanism_primary: "각 보기의 일반항 극한 판정 → ∞ · 0 · 진동 · ∞ · 진동 → 0 으로 수렴하는 ②"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0042.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수와 상수(3n+1 → 2n−1, 4/(2n−1) → 3/(n+2))를 바꿀 수 있음. 제약: 발산 유형(양의 무한대 · 진동 두 가지)과 수렴 하나가 섞여 정답이 하나뿐이어야 하고, 나열된 첫 항과 일반항이 일치해야 함."
    creative: "(1) 일반항 없이 첫 항만 주고 일반항을 추정하게(★2·I-PD d1) (2) 수렴하는 것의 극한값을 묻기(★1) (3) 진동 보기를 (−1)^n/n 처럼 0 으로 수렴하는 진동으로 바꿔 진동과 수렴을 구분하게(★2)."
```

```yaml
- id: RPM-CALC2-0043
  page: 10
  vendor_label: "유형 01 수열의 수렴과 발산"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다섯 수열 {(n²−3)/(n+1)} · {2n−3} · {(−1)^n/n} · {1−n²} · {sin(nπ/2)} 중 수렴하는 것 고르기. 5지선다.
  category: "다섯 일반항의 극한 판정 → (−1)^n/n → 0 수렴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 판정(보기 고르기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ① ∞, ② ∞, ③ (−1)^n/n 은 절댓값 1/n → 0 이라 수렴, ④ −∞, ⑤ sin(nπ/2) 는 1, 0, −1, 0 반복 진동. 부호가 바뀌면서도 0 으로 가는 ③ 을 진동 발산과 구분하는 것이 핵심이나 표준 판정. 중하·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "각 일반항 극한 판정 → ∞ · ∞ · 0 · −∞ · 진동 → ③"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0043.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(−1)^n/n 을 (−1)^n/n² 이나 cos(nπ)/(2n) 으로, sin(nπ/2) 를 cos(nπ) 로 바꿀 수 있음. 제약: 정답이 하나여야 하고 삼각함수 보기는 정수 n 에서 값이 주기적으로 반복되도록."
    creative: "(1) 「발산하는 것의 개수」 로 바꾸기(★1) (2) 수렴 보기를 (−1)^n n/(n+1) 처럼 극한 없는 진동으로 바꿔 함정 추가(★2) (3) ㄱㄴㄷ 보기로 발산·수렴 이유를 서술하게(★2)."
```

```yaml
- id: RPM-CALC2-0044
  page: 10
  vendor_label: "유형 01 수열의 수렴과 발산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    네 수열 √(3n)/3 · 1/√n · (−3/2)^n · tan(nπ/2+π/4) 중 발산하는 것을 보기에서 있는 대로 고르기.
  category: "각 수열 극한 판정 → ∞ · 0 · 진동 발산 · ±1 진동 → ㄱ ㄷ ㄹ"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 판정(보기 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ √(3n)/3 → ∞ 발산, ㄴ 1/√n → 0 수렴, ㄷ 공비 −3/2 < −1 이라 진동 발산, ㄹ tan(nπ/2+π/4) 는 n=1, 2, 3, 4 에서 −1, 1, −1, 1 이 반복돼 진동 발산. ㄷ 의 음의 공비(T-부호)와 ㄹ 의 주기 계산(T-표기)이 함정이지만 각각 표준 절차. 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "ㄱ ∞ · ㄴ 0 · ㄷ 공비 −3/2 진동 · ㄹ tan 값 −1, 1 반복 → 발산 ㄱ ㄷ ㄹ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0044.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄷ 의 공비 −3/2 를 −2, 3/2, −2/3 으로, ㄹ 의 위상 π/4 를 π/3 이나 −π/4 로 바꿀 수 있음. 제약: tan 의 인수가 π/2 의 홀수배에 걸리지 않도록 위상을 두고, 답이 둘 이상이 되도록 발산 보기를 유지."
    creative: "(1) ㄹ 을 sin(nπ/3) 으로 바꿔 주기 6 의 진동으로(★2) (2) 「수렴하는 것의 극한값의 합」 으로 바꾸기(★2) (3) ㄷ 을 (−3)^n/2^n 처럼 비율로 바꿔 |공비|>1 판정을 숨기기(★2)."
```

### 유형 02 수열의 극한에 대한 성질

```yaml
- id: RPM-CALC2-0045
  page: 10
  vendor_label: "유형 02 수열의 극한에 대한 성질"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    수렴하는 두 수열의 lim(a_n+b_n)=6, lim a_nb_n=3 일 때 lim(a_n²+b_n²) 의 값.
  category: "a²+b²=(a+b)²−2ab 로 변환 → 36−6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 성질(사칙연산 · 극한값 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 수열이 수렴하므로 극한의 성질을 쓸 수 있고 a_n²+b_n²=(a_n+b_n)²−2a_nb_n 으로 바꿔 6²−2·3=30. 곱셈 공식 대입은 표준 절차라 통찰로 세지 않음. 대표문제 출발 ★2·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "a_n²+b_n² = (a_n+b_n)² − 2a_nb_n → 36 − 6 → 30"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$30$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0045.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합의 극한 6 과 곱의 극한 3 을 바꿀 수 있음. 제약: (합)² ≥ 4·(곱) 이어야 실수열로 실현 가능(예: 합 4·곱 1)하고 답이 정수가 되게."
    creative: "(1) lim(a_n−b_n) 을 물어 부호 결정이 필요한 ±√ 로 만들기(★3·I-MI d1) (2) lim(a_n³+b_n³) 으로 세제곱 합 공식(★2) (3) 「수렴하는」 조건을 빼고 합·곱의 극한만으로는 개별 극한이 정해지지 않음을 ㄱㄴㄷ 로 묻기(★3·I-EQV d2)."
```

```yaml
- id: RPM-CALC2-0046
  page: 10
  vendor_label: "유형 02 수열의 극한에 대한 성질"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim a_n=−3, lim b_n=3 이고 lim (3a_n−b_n)/(a_nb_n+k)=4 일 때 상수 k 의 값.
  category: "극한값 대입 → −12/(−9+k)=4 → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 성질(사칙연산 · 극한값 연립)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모 극한 −9+k 가 0 이 아니면 성질대로 대입해 (−9−3)/(−9+k)=4, −12=4k−36, k=6. 한 줄 계산에 재배열 없음. 중하·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "성질로 극한값 대입 → −12/(k−9) = 4 → k = 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0046.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 −3, 3 과 식의 계수, 우변 4 를 바꿀 수 있음. 제약: 분모 극한이 0 이 되지 않도록 k 가 정해져야 하고 k 가 정수로 떨어지게."
    creative: "(1) 우변을 0 으로 두어 분자 극한 0 조건으로 바꾸기(★1) (2) k 를 분자·분모 양쪽에 넣어 일차방정식(★2) (3) lim a_n 을 모르는 채 두 식을 주고 연립하게(0048 골조 ★2)."
```

```yaml
- id: RPM-CALC2-0047
  page: 10
  vendor_label: "유형 02 수열의 극한에 대한 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_n=1/n−2, b_n=3−2/(n(n+1)) 일 때 lim a_n(2a_n−3b_n) 의 값.
  category: "각 극한 −2, 3 읽기 → 대입 (−2)(−4−9)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 성질(사칙연산 · 극한값 연립)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a_n → −2, b_n → 3 을 읽고 (−2)(2·(−2)−3·3)=(−2)(−13)=26. 극한 두 개 읽기와 한 줄 산술뿐. 중 표시이나 통찰 없음·M_total 4·재배열 없음 → −1 해 ★1. [분류 이슈] 중 라벨과 1단 차이 — 기록만.
  tier: star_1
  mechanism_primary: "1/n → 0, 2/(n(n+1)) → 0 → a_n → −2, b_n → 3 → (−2)(−4−9) = 26"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$26$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0047.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 −2, 3 과 식의 계수 2, 3 을 바꿀 수 있음. 제약: 1/n, 1/(n(n+1)) 처럼 0 으로 가는 항이어야 극한이 상수로 떨어지고 답이 정수."
    creative: "(1) b_n 의 0 으로 가는 항을 (−1)^n/n 처럼 진동 항으로 바꿔도 극한이 같음을 확인(★1) (2) lim a_nb_n 과 lim(a_n+b_n) 만 주고 역으로 묻기(0045 골조 ★2) (3) a_n 을 (2n−1)/n 처럼 ∞/∞ 꼴로 주어 극한 읽기 단계 추가(★2)."
```

```yaml
- id: RPM-CALC2-0048
  page: 10
  vendor_label: "유형 02 수열의 극한에 대한 성질"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    수렴하는 두 수열의 lim(a_n−b_n)=3, lim(4a_n+3b_n)=5 일 때 lim b_n/a_n 의 값.
  category: "극한값 α, β 로 두고 연립 → α=2, β=−1 → β/α"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 성질(사칙연산 · 극한값 연립)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 수열이 수렴하므로 lim a_n=α, lim b_n=β 로 두면 α−β=3, 4α+3β=5 에서 α=2, β=−1, 몫의 극한은 −1/2. 연립 한 번의 표준 절차. 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "lim a_n=α, lim b_n=β → α−β=3, 4α+3β=5 → α=2, β=−1 → β/α = −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0048.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한식의 계수와 우변을 바꿀 수 있음. 제약: 연립의 해가 유리수이고 분모 α ≠ 0."
    creative: "(1) 「수렴하는」 조건을 빼고 a_n−b_n 과 4a_n+3b_n 의 수렴에서 a_n, b_n 의 수렴을 유도하게(★3·I-EQV d2) (2) 세 수열·세 식으로 확장(★2) (3) lim a_nb_n 처럼 곱을 조건에 넣어 이차 연립(★3·I-MI d1)."
```

### 유형 03 수렴하는 수열의 활용

```yaml
- id: RPM-CALC2-0049
  page: 11
  vendor_label: "유형 03 수렴하는 수열의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    수렴하는 수열 {a_n} 이 lim (a_{n+2}+5)/(3a_n−1)=3 을 만족할 때 lim a_n 의 값. 5지선다.
  category: "lim a_{n+2}=lim a_n=α → (α+5)/(3α−1)=3 → α"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수렴하면 첨자가 다른 a_{n+2} 도 같은 값 α 로 수렴함을 써서 극한식을 α 의 방정식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수렴하는 수열의 활용(lim a_{n+k} = lim a_n 으로 극한값 방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수렴하면 a_{n+2} 도 같은 값 α 로 수렴함을 써서 (α+5)/(3α−1)=3, α+5=9α−3, α=1. 첨자가 다른 항의 극한이 같다는 해석(EQV d1)이 이 유형의 골조이고 뒤는 일차방정식. 대표문제·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "수렴 → lim a_{n+2} = lim a_n = α → (α+5)/(3α−1) = 3 → α = 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0049.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 5, 3, −1 과 우변 3 을 바꿀 수 있음. 제약: 분모 3α−1 ≠ 0, 방정식이 일차라 해가 하나이고 선택지 안에 들어가게."
    creative: "(1) 분자에 a_{n+1}² 을 넣어 α 의 이차방정식으로 만들고 근 두 개 중 조건으로 고르기(★2~3·I-VF d1) (2) 「수렴하는」 조건 없이 주어 수렴 여부를 먼저 따지게(★3·I-EQV d2) (3) 0050 처럼 점화식 형태로 바꾸기(★2)."
```

```yaml
- id: RPM-CALC2-0050
  page: 11
  vendor_label: "유형 03 수렴하는 수열의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0 이 아닌 실수에 수렴하는 수열이 4/a_{n+1}=4−a_n 을 만족할 때 lim a_n 의 값.
  category: "점화식 양변 극한 → 4/α=4−α → (α−2)²=0 → α=2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 0 이 아니므로 점화식 양변에 극한을 취해 4/α = 4−α 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수렴하는 수열의 활용(lim a_{n+k} = lim a_n 으로 극한값 방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한이 0 이 아니므로 4/a_{n+1} 의 극한을 4/α 로 둘 수 있고 4/α=4−α 에서 α²−4α+4=(α−2)²=0, α=2. 점화식 양변에 극한을 취하는 해석(EQV d1) 한 개, 중근이라 분기 없음. 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "점화식 양변 극한(α ≠ 0) → 4/α = 4 − α → (α−2)² = 0 → α = 2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0050.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 4 를 바꿀 수 있음(k/a_{n+1}=k−a_n 이면 α²−kα+k=0). 제약: 판별식 k²−4k ≥ 0 이어야 실수 극한이 존재하고, k=4 일 때만 중근이라 답이 하나로 떨어짐."
    creative: "(1) 상수를 바꿔 근 두 개가 나오면 a_n>0 조건으로 하나를 기각하게(★2~3·I-VF d1) (2) 0 이 아닌 조건을 빼고 α=0 가능성을 논의(★3·I-MI d1) (3) 점화식을 a_{n+1}=√(a_n+2) 처럼 근호 꼴로(★2)."
```

```yaml
- id: RPM-CALC2-0051
  page: 11
  vendor_label: "유형 03 수렴하는 수열의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    수렴하는 수열 {a_n} 에 대해 이차방정식 x²−2a_{n+1}x+a_n+6=0 이 중근을 갖고 a_n>0 일 때 lim a_n 의 값. 5지선다.
  category: "중근 → 판별식 a_{n+1}²=a_n+6 → 양변 극한 α²=α+6 → α=3"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "판별식에서 얻은 점화식 a_{n+1}² = a_n+6 의 양변에 극한을 취해 α² = α+6 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수렴하는 수열의 활용(lim a_{n+k} = lim a_n 으로 극한값 방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중근 조건 D/4=a_{n+1}²−(a_n+6)=0 을 점화식 a_{n+1}²=a_n+6 으로 읽고 양변 극한 α²=α+6, (α−3)(α+2)=0 에서 a_n>0 이라 α=3. 판별식은 표준 공식, 점화식 극한 해석(EQV d1) 한 개, 음근 기각은 선택지에 없어 함정(T-부호) 수준. 중·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "중근 ⟺ a_{n+1}² = a_n + 6 → 양변 극한 α² = α + 6 → α = 3 (a_n>0)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0051.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 6 과 계수 2 를 바꿀 수 있음(α²=α+c 의 양의 근). 제약: α²−α−c=0 이 정수근을 갖도록 c=k(k−1) 꼴(2, 6, 12)로 두고 양의 근이 선택지에."
    creative: "(1) 중근 대신 「두 근의 곱이 a_{n+1}」 처럼 근과 계수의 관계로 점화식 만들기(★2) (2) a_n>0 조건을 빼고 두 극한 후보가 모두 가능한지 첫째항으로 따지게(★3·I-VF d1) (3) 이차방정식 대신 두 직선의 교점 조건으로 표현 전환(★3·I-RT d1)."
```

### 유형 04 $\dfrac{\infty}{\infty}$ 꼴의 극한

```yaml
- id: RPM-CALC2-0052
  page: 11
  vendor_label: '유형 04 $\dfrac{\infty}{\infty}$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim a_n=1/7 일 때 lim (−2n+1)/(na_n) 의 값.
  category: "분모·분자 n 으로 나누기 → (−2+1/n)/a_n → −2/(1/7)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한(최고차항으로 나누기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    na_n 이 ∞ 로 가는 것을 그대로 두지 말고 n 으로 나눠 (−2+1/n)/a_n 으로 바꾸면 성질로 −2÷(1/7)=−14. 나누기 한 단계의 표준 절차. 대표문제 출발 ★2·M_total 5 이나 재배열이 있어 −1 을 적용하지 않음 → ★2.
  tier: star_2
  mechanism_primary: "(−2n+1)/(na_n) = (−2+1/n)/a_n → −2/(1/7) → −14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-14$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0052.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 1/7 과 분자 계수를 바꿀 수 있음. 제약: lim a_n ≠ 0 이어야 분모가 0 이 아니고, 답이 정수가 되도록 극한값을 단위분수로."
    creative: "(1) lim na_n = 3 처럼 na_n 의 극한을 주고 lim (2n+1)a_n 을 묻기(★2·I-EQV d1) (2) lim a_n = 0 이면 수렴·발산이 정해지지 않음을 보기로(★3·I-MI d1) (3) 분모를 n²a_n+n 처럼 두 항으로(★2)."
```

```yaml
- id: RPM-CALC2-0053
  page: 11
  vendor_label: '유형 04 $\dfrac{\infty}{\infty}$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    다항식·근호 ∞/∞ 꼴 극한 다섯 개(제시값 5 · 1/3 · 0 · 3 · 1) 중 옳은 것 고르기. 5지선다.
  category: "각 보기 최고차항으로 나눠 극한 계산 → 1 · 1/3 · 1/2 · 2/3 · 1/2 → ②"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한(최고차항으로 나누기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① 1, ② 1/3, ③ n/(√(n²+1)+n) → 1/2, ④ 2/3, ⑤ √n/(√(n+1)+√n) → 1/2 로 ② 만 옳음. 다섯 개 모두 최고차항 나누기 한 줄이지만 근호 안 차수를 맞추는 계산이 반복돼 Mₖ 2. 중하·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 보기 최고차항(n² · √n · n · n² · √n)으로 나누기 → 극한 비교 → ②"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0053.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수와 상수를 바꿀 수 있음. 제약: 옳은 보기가 하나뿐이어야 하고 오답 보기의 제시값은 흔한 실수(분자 계수만 읽기, 근호 차수 착각)로 두기."
    creative: "(1) 「옳은 것의 개수」 로 바꾸기(★2) (2) 극한값이 같은 보기 쌍을 찾게(★2) (3) 근호 보기를 √(n²+n)−n 처럼 ∞−∞ 로 섞어 유형 07 과 결합(★2)."
```

```yaml
- id: RPM-CALC2-0054
  page: 11
  vendor_label: '유형 04 $\dfrac{\infty}{\infty}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=x²+2nx+1 의 두 근 α_n, β_n 에 대해 lim (α_n²+β_n²)/f(n) 의 값(n 은 자연수). 서술형.
  category: "근과 계수 → α²+β²=4n²−2 · f(n)=3n²+1 → 4/3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근과 계수의 관계로 만든 수열의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α_n+β_n=−2n, α_nβ_n=1 에서 α_n²+β_n²=4n²−2, f(n)=3n²+1 이므로 극한은 4/3. 근과 계수의 관계·곱셈 공식 대입은 표준 절차라 통찰로 세지 않음. 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "근과 계수 → α²+β² = (α+β)²−2αβ = 4n²−2 · f(n) = 3n²+1 → 4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0054.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2n 과 상수 1 을 바꿀 수 있음(x²+knx+c → α²+β²=k²n²−2c). 제약: 두 근이 실수일 필요는 없지만 f(n) 의 최고차 계수와의 비가 유리수로 떨어지게."
    creative: "(1) 분모를 α_nβ_n·n² 이나 (α_n−β_n)² 으로 바꿔 판별식 사용(★2) (2) 두 근의 절댓값 조건으로 큰 근 α_n 만 골라 lim α_n/n 을 묻기(★3·I-MI d1) (3) 근이 n 에 따라 정해지는 이차함수의 꼭짓점 좌표 극한으로 표현 전환(★2·I-RT d1)."
```

```yaml
- id: RPM-CALC2-0055
  page: 11
  vendor_label: '유형 04 $\dfrac{\infty}{\infty}$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    S_n=2n²−3n 일 때 lim a_n²/S_n 의 값.
  category: "a_n=S_n−S_{n−1}=4n−5 (n=1 확인) → (4n−5)²/(2n²−3n) → 8"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "S_n 에서 a_n 을 구해 ∞/∞ 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n=S_n−S_{n−1}=4n−5 이고 a_1=S_1=−1 도 이 식에 맞으므로 (4n−5)²/(2n²−3n) → 16/2=8. 합에서 일반항을 얻는 표준 절차 뒤 최고차항 나누기. 중·통찰 없음·M_total 5 이나 재배열이 있어 ★2 유지.
  tier: star_2
  mechanism_primary: "S_n → a_n = 4n−5 → a_n²/S_n = (4n−5)²/(2n²−3n) → 16/2 = 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0055.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "S_n 의 계수 2, −3 을 바꿀 수 있음(S_n=pn²+qn → a_n=2pn+(q−p), 극한 (2p)²/p=4p). 제약: 극한은 p 만이 정하며, S_n 에 상수항을 넣으면 a_1 이 식에서 벗어나도 극한은 불변."
    creative: "(1) S_n 에 상수항을 넣어 a_1 예외를 만들되 극한이 그대로임을 묻기(★2) (2) lim S_n/(na_n) 처럼 분모·분자를 뒤집기(★2) (3) S_n 을 등비수열 합 꼴로 주어 등비수열 극한과 결합(★3·I-XU 경계)."
```

### 유형 05 $\dfrac{\infty}{\infty}$ 꼴의 극한; 합 또는 곱으로 표현된 수열

```yaml
- id: RPM-CALC2-0056
  page: 12
  vendor_label: '유형 05 $\dfrac{\infty}{\infty}$ 꼴의 극한; 합 또는 곱으로 표현된 수열'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim (8n²−3n)/(1+2+3+…+n) 의 값.
  category: "분모 합 공식 n(n+1)/2 → 2(8n²−3n)/(n²+n) → 16"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합의 공식(Σ)으로 표현된 수열의 ∞/∞ 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1+2+…+n=n(n+1)/2 를 대입하면 2(8n²−3n)/(n²+n) 이고 최고차항 계수비 16. 합 공식 대입 한 단계의 표준 절차. 대표문제 ★2·재배열 있음 → ★2.
  tier: star_2
  mechanism_primary: "Σk = n(n+1)/2 → 2(8n²−3n)/(n²+n) → 16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$16$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0056.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 계수 8, −3 을 바꿀 수 있음(극한 = 2·최고차 계수). 제약: 분자 차수를 2 로 유지해야 유한 극한."
    creative: "(1) 분모를 1²+2²+…+n² 으로 바꿔 분자를 삼차로(★2) (2) 분모를 1+3+5+…+(2n−1)=n² 처럼 홀수 합으로(★2) (3) 분자도 Σ 로 주어 두 공식의 비율(★2)."
```

```yaml
- id: RPM-CALC2-0057
  page: 12
  vendor_label: '유형 05 $\dfrac{\infty}{\infty}$ 꼴의 극한; 합 또는 곱으로 표현된 수열'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    극한과 log₂ 의 순서를 바꿀 수 있음이 주어진 채 lim {log₂(2n−1)+log₂(8n+1)−2log₂(n+1)} 의 값. 5지선다.
  category: "로그 법칙으로 한 로그 → log₂ {(2n−1)(8n+1)/(n+1)²} → log₂ 16"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그 법칙으로 하나의 로그로 묶은 수열의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 로그를 log₂ {(2n−1)(8n+1)/(n+1)²} 로 묶고 주어진 성질로 극한을 안으로 넣으면 log₂ 16=4. 로그 법칙은 같은 대수 영역의 표준 변형이라 통찰로 세지 않음. 중·M_total 5·재배열 있음 → ★2. [분류 이슈] 유형 05(합·곱으로 표현된 수열)에 있으나 골조는 로그 묶기 → 유리식 극한 — 카탈로그 배치 메모.
  tier: star_2
  mechanism_primary: "로그 법칙 → log₂ {(2n−1)(8n+1)/(n+1)²} → 안쪽 극한 16 → log₂ 16 = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0057.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2, 8 과 분모의 제곱 항을 바꿀 수 있음. 제약: 안쪽 유리식의 극한이 2 의 거듭제곱(2, 4, 8, 16)이 되어야 답이 정수."
    creative: "(1) 밑을 3 이나 1/2 로 바꿔 부호 반전(★2) (2) 로그 합 Σ log((k+1)/k) 꼴로 주어 망원합과 결합(0059 골조 ★3) (3) 극한과 로그의 순서 교환 조건을 빼고 왜 필요한지 서술형(★3·I-EQV d1)."
```

```yaml
- id: RPM-CALC2-0058
  page: 12
  vendor_label: '유형 05 $\dfrac{\infty}{\infty}$ 꼴의 극한; 합 또는 곱으로 표현된 수열'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_n=(1−1/2²)(1−1/3²)…(1−1/n²) 일 때 lim a_n 의 값.
  category: "각 인수 (k−1)(k+1)/k² → 망원곱 (n+1)/(2n) → 1/2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1−1/k² 을 (k−1)(k+1)/k² 로 쪼개면 이웃 인수끼리 약분되는 망원 규칙을 발견"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "망원곱(약분되는 곱)으로 표현된 수열의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1−1/k²=(k−1)(k+1)/k² 로 쪼개면 (1/2)(3/2)·(2/3)(4/3)·…·((n−1)/n)((n+1)/n) 에서 이웃 항이 약분돼 (n+1)/(2n), 극한 1/2. 약분 규칙을 찾는 PD d1 한 개, 곱 정리에 계산 부담 약간. 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "1−1/k² = (k−1)(k+1)/k² → 망원곱 → a_n = (n+1)/(2n) → 1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0058.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작 인수를 k=3 부터로, 인수를 1−1/k² 대신 1−4/k² 이나 1+1/k 로 바꿀 수 있음. 제약: 인수분해 뒤 이웃 항이 약분되는 구조여야 하고 남는 항이 유한 극한을 갖게."
    creative: "(1) 곱 대신 합 Σ 1/(k(k+1)) 의 부분분수 망원합으로(★2·I-PD d1) (2) 곱을 로그로 감싸 lim log a_n 을 묻기(★3·0059 골조) (3) 곱 기호 없이 처음 몇 항만 주고 규칙을 찾게(★3·I-PD d2)."
```

```yaml
- id: RPM-CALC2-0059
  page: 12
  vendor_label: '유형 05 $\dfrac{\infty}{\infty}$ 꼴의 극한; 합 또는 곱으로 표현된 수열'
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a_n=log((n+1)/n) 일 때 lim (2n+4)/10^{a_1+a_2+…+a_n} 의 값.
  category: "로그 망원합 → a_1+…+a_n = log(n+1) → 10^{log(n+1)} = n+1 → 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "log((k+1)/k) 의 합이 곱의 로그로 묶여 망원곱 log(n+1) 한 항으로 붕괴하고, 이를 10^{log(n+1)} = n+1 로 되돌려야 극한이 보임 — 로그 법칙·망원곱·지수 되돌리기 세 층 결합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그 망원합을 지수로 되돌린 수열의 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_1+…+a_n = log(2/1 · 3/2 · … · (n+1)/n) = log(n+1) 로 붕괴하고 10^{log(n+1)} = n+1 이므로 (2n+4)/(n+1) → 2. 로그 합 → 곱의 로그 → 망원곱 → 지수로 되돌리기 층이 겹쳐 PD d2 한 개. 상중·통찰 1개·M_total 5 → 출발 ★3 유지. [분류 이슈] 단일 통찰·M_total 5 라 ★2 후보와 겹침 — 기록만.
  tier: star_3
  mechanism_primary: "Σ log((k+1)/k) = log(n+1) (망원) → 10^{log(n+1)} = n+1 → (2n+4)/(n+1) → 2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0059.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 2n+4 의 계수와 로그의 밑(10 ↔ 지수 밑)을 바꿀 수 있음. 제약: 지수의 밑과 로그의 밑이 같아야 되돌리기가 되고, a_n 은 log((k+1)/k) 처럼 망원 구조여야 함."
    creative: "(1) a_n = log((k+2)/k) 로 바꿔 두 칸 망원(남는 항 두 개 · ★3) (2) 분모를 2^{Σ log₂ …} 처럼 밑 2 로(★3) (3) 지수 없이 lim (a_1+…+a_n)/log n 을 묻기(★3·I-PD d2)."
```

### 유형 06 $\dfrac{\infty}{\infty}$ 꼴의 극한; 미정계수의 결정

```yaml
- id: RPM-CALC2-0060
  page: 12
  vendor_label: '유형 06 $\dfrac{\infty}{\infty}$ 꼴의 극한; 미정계수의 결정'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim (an²+bn+7)/(2n−3)=3 일 때 상수 a, b 에 대해 a+b 의 값. 5지선다.
  category: "유한 극한 → a=0 → b/2=3 → b=6 → a+b=6"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 유한하다는 결과에서 분자 차수가 분모 차수 1 을 넘을 수 없음을 역추적해 a=0 을 먼저 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한의 미정계수 결정(차수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한이 유한하려면 분자 차수가 분모 차수 1 을 넘을 수 없으므로 a=0, 남은 (bn+7)/(2n−3) 의 극한 b/2=3 에서 b=6. 결과(수렴)에서 차수 조건을 역추적하는 BW d1 한 개. 대표문제·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "극한 유한 → 분자 차수 ≤ 1 → a = 0 → b/2 = 3 → b = 6 → a+b = 6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0060.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 2n−3 의 계수와 우변 3 을 바꿀 수 있음(b = 2·우변). 제약: 분자 최고차 계수가 사라져야 하는 구조를 유지하고 a+b 가 선택지 안에."
    creative: "(1) 우변을 0 으로 두어 a=b=0 이 아님을 확인하게(분자 차수 < 분모 차수 · ★2) (2) 분모를 √(4n²+1) 처럼 근호로 바꿔 유효 차수 판단(0062 골조 ★2) (3) 극한이 존재하도록 하는 a 의 조건만 묻고 b 는 자유롭게 두어 「모든 b」 논의(★3·I-MI d1)."
```

```yaml
- id: RPM-CALC2-0061
  page: 12
  vendor_label: '유형 06 $\dfrac{\infty}{\infty}$ 꼴의 극한; 미정계수의 결정'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (an²−3n−1)/(4n²+n)=2 일 때 상수 a 의 값.
  category: "최고차 계수비 a/4=2 → a=8"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한의 미정계수 결정(차수 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모·분자 차수가 같으므로 극한은 최고차 계수비 a/4, 이것이 2 라 a=8. 한 줄에 재배열 없음. 중하·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "차수 같음 → 극한 = a/4 = 2 → a = 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0061.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 계수 4 와 우변 2 를 바꿀 수 있음. 제약: 차수가 같은 구조를 유지하고 a 가 정수."
    creative: "(1) 우변을 0 으로 바꿔 a=0 이 답이 되게(★1) (2) 분자에 미정계수 둘(an²+bn) 을 두고 극한값과 다른 조건(예: n=1 대입값)으로 연립(★2) (3) 분모를 (2n+1)² 처럼 전개가 필요한 꼴로(★2)."
```

```yaml
- id: RPM-CALC2-0062
  page: 12
  vendor_label: '유형 06 $\dfrac{\infty}{\infty}$ 꼴의 극한; 미정계수의 결정'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (an²+6n−1)/(√(n²+3n−2)+n)=b 일 때 상수 a, b 에 대해 a−b 의 값. 5지선다.
  category: "분모 유효 차수 1 → a=0 → 6/2=b=3 → a−b=−3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근호 분모의 유효 차수가 1 임을 읽고 유한 극한이라는 결과에서 a=0 을 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한의 미정계수 결정(차수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 √(n²+3n−2)+n 은 n 으로 나누면 2 로 가는 1차 급이라 유한 극한을 위해 a=0, 남은 (6n−1)/(√(n²+3n−2)+n) → 6/2=3=b, a−b=−3. 근호의 유효 차수를 읽고 a=0 을 역추적하는 BW d1 한 개. 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "√(n²+…)+n ~ 2n → 유한 극한이려면 a = 0 → 6/2 = 3 = b → a−b = −3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0062.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 계수 6 과 근호 안 일차·상수항을 바꿀 수 있음(b = 계수/2). 제약: 근호 안 최고차가 n² 이어야 유효 차수 1 이 유지되고 a−b 가 선택지에."
    creative: "(1) 분모를 √(4n²+n)−n 처럼 차로 바꿔 유리화 없이 계수 1 로(★2) (2) 우변 b 를 주고 a 가 존재하지 않는 경우(분모 유효 차수 0)를 보기로(★3·I-MI d1) (3) 근호 안 최고차를 n⁴ 으로 올려 유효 차수 2 로 a ≠ 0 이 되게(★2)."
```

```yaml
- id: RPM-CALC2-0063
  page: 12
  vendor_label: '유형 06 $\dfrac{\infty}{\infty}$ 꼴의 극한; 미정계수의 결정'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (an²−4n−1)/(bn³−n²+6)=5 일 때 lim (an+b)²/(n²−2n+7) 의 값(a, b 는 상수).
  category: "극한 5 ≠ 0 → 차수 일치 → b=0, a/(−1)=5 → a=−5 → 25n²/(n²−…) → 25"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 0 이 아닌 5 라는 결과에서 분모 차수가 분자 차수 2 와 같아야 함을 역추적해 삼차항 b=0 을 먼저 소거"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞/∞ 꼴 극한의 미정계수 결정(차수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한이 0 이 아닌 5 이므로 분모 차수가 분자 차수 2 와 같아야 하고 b=0, 그러면 최고차 계수비 a/(−1)=5 에서 a=−5. 이어 (−5n)²/(n²−2n+7) → 25. 「0 이 아닌 극한 → 차수 일치 → 삼차항 소거」 역추적이 BW d1, 부호(a=−5)와 b=0 이 함정(T-부호·T-경계). 중·M_total 8 이나 통찰 1개 d1 → ★2.
  tier: star_2
  mechanism_primary: "극한 5 ≠ 0 → 분모 차수 = 2 → b = 0 → a/(−1) = 5 → a = −5 → (−5n)²/(n²−2n+7) → 25"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$25$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0063.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 5 와 분모 이차 계수 −1 을 바꿀 수 있음(a = 우변 × 이차 계수). 제약: 극한이 0 이 아니어야 b=0 이 강제되고, 두 번째 극한이 a² 로 떨어지도록 분모 최고차 계수 1 유지."
    creative: "(1) 우변을 0 으로 두면 b 가 임의라 두 번째 극한이 정해지지 않음을 묻기(★3·I-MI d1) (2) 두 번째 극한의 분모를 (an+b)(n+1) 로 바꿔 약분(★2) (3) 조건을 lim = 5 와 lim (an+b)/n = k 두 개로 주고 b 를 0 이 아니게 만들 수 있는지 논의(★3·I-EQV d2)."
```

### 유형 07 $\infty-\infty$ 꼴의 극한

```yaml
- id: RPM-CALC2-0064
  page: 13
  vendor_label: '유형 07 $\infty-\infty$ 꼴의 극한'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    lim (√(4n²+3n+1)−2n) 의 값. 5지선다.
  category: "유리화 → (3n+1)/(√(4n²+3n+1)+2n) → 3/4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한(유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √(4n²+3n+1)+2n 을 곱해 유리화하면 (3n+1)/(√(4n²+3n+1)+2n) 이고 n 으로 나눠 3/(2+2)=3/4. ∞−∞ 꼴 유리화의 표준 절차 두 단계. 대표문제 ★2·재배열 있음 → ★2.
  tier: star_2
  mechanism_primary: "∞−∞ → 켤레 곱해 유리화 → (3n+1)/(√(4n²+3n+1)+2n) → 3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0064.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 계수 4, 3, 1 과 빼는 항 2n 을 바꿀 수 있음(√(p²n²+qn+r)−pn → q/(2p)). 제약: 빼는 항이 근호 안 최고차의 제곱근과 정확히 맞아야 유한 극한."
    creative: "(1) 빼는 항을 2n+1 로 바꿔 상수항까지 맞춘 뒤 극한 −1/4 (★2) (2) 극한값을 준 채 근호 안 일차 계수를 묻기(★2·I-BW d1) (3) n(√(4+3/n+1/n²)−2) 꼴로 표현을 바꿔 같은 문제임을 확인(★2·I-RT d1)."
```

```yaml
- id: RPM-CALC2-0065
  page: 13
  vendor_label: '유형 07 $\infty-\infty$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim 1/(√(n²+2n)−n) 의 값. 5지선다.
  category: "분모 유리화 → (√(n²+2n)+n)/(2n) → 1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한(유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모의 켤레를 분자·분모에 곱하면 (√(n²+2n)+n)/(2n) 이고 n 으로 나눠 (1+1)/2=1. 유리화 두 단계의 표준 절차. 중하 표시이나 유리화 재배열이 있어 −1 없이 ★2.
  tier: star_2
  mechanism_primary: "분모 ∞−∞ → 켤레 곱 → (√(n²+2n)+n)/(2n) → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0065.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차 계수 2 를 바꿀 수 있음(극한 = 2/계수). 제약: 계수가 0 이면 분모가 0 이라 성립하지 않고, 답이 선택지에."
    creative: "(1) 분모를 √(n²+2n)−√(n²−2n) 으로 바꿔 유리화 뒤 계수 합(★2) (2) 극한값을 주고 계수를 묻기(★2·I-BW d1) (3) 분자도 √n 꼴로 두어 차수를 맞추게(★2)."
```

```yaml
- id: RPM-CALC2-0066
  page: 13
  vendor_label: '유형 07 $\infty-\infty$ 꼴의 극한'
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim (√(n+3)−√n)/(√(n+2)−√(n+1)) 의 값. 5지선다.
  category: "분자·분모 각각 유리화 → 3(√(n+2)+√(n+1))/(√(n+3)+√n) → 3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞−∞ 꼴 극한(유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자는 3/(√(n+3)+√n), 분모는 1/(√(n+2)+√(n+1)) 로 각각 유리화하면 3(√(n+2)+√(n+1))/(√(n+3)+√n) → 3·2/2=3. 유리화를 두 번 하는 계산 부담(Mₖ 2). 중하·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "분자·분모 각각 유리화 → 3·(√(n+2)+√(n+1))/(√(n+3)+√n) → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0066.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수 3, 0, 2, 1 을 바꿀 수 있음(극한 = 분자 상수 차 / 분모 상수 차). 제약: 분모의 두 상수가 달라야 0 이 아니고 답이 정수."
    creative: "(1) 분모를 √(n+2)+√(n+1) 로 두어 극한 0 (★2) (2) √(4n+3)−2√n 처럼 계수를 맞춘 근호(★2) (3) 극한값을 주고 상수 하나를 묻기(★2·I-BW d1)."
```

```yaml
- id: RPM-CALC2-0067
  page: 13
  vendor_label: '유형 07 $\infty-\infty$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    lim {√(1+2+…+n) − √(1+2+…+(n−1))} 의 값. 5지선다.
  category: "합 공식 → √(n(n+1)/2)−√((n−1)n/2) → 유리화 → n/(…) → √2/2"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합의 공식과 유리화를 결합한 ∞−∞ 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 합을 n(n+1)/2, (n−1)n/2 로 쓰고 유리화하면 분자는 차 n, 분모는 √(n(n+1)/2)+√((n−1)n/2) ~ 2n/√2 라 극한 1/√2=√2/2. 합 공식과 유리화가 이어진 세 단계에 정리 부담. 같은 단원 안 두 표준 도구의 결합이라 통찰로 세지 않음. 중·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "Σ 공식 → √(n(n+1)/2) − √(n(n−1)/2) → 유리화 → n/(√(n(n+1)/2)+√(n(n−1)/2)) → 1/√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0067.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합을 1+3+…+(2n−1)=n² 이나 제곱합으로 바꿀 수 있음. 제약: 두 근호 안의 차가 n 의 1차이고 근호가 n 급이어야 유한 극한."
    creative: "(1) 합 대신 S_n=2n²+n 을 주고 √S_n−√S_{n−1} (★2) (2) √n 을 곱해 0068 처럼 차수를 보정(★2) (3) 극한값을 주고 합의 공차를 묻기(★3·I-BW d1)."
```

```yaml
- id: RPM-CALC2-0068
  page: 13
  vendor_label: '유형 07 $\infty-\infty$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    등차수열 a_2=5, a_4=11 일 때 lim √n(√(a_{n+1})−√(a_n)) 의 값.
  category: "a_n=3n−1 → √n·3/(√(3n+2)+√(3n−1)) → 3/(2√3) → √3/2"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등차수열 일반항과 유리화를 결합한 ∞−∞ 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공차 3, a_n=3n−1 을 구한 뒤 √(3n+2)−√(3n−1) 을 유리화하면 3/(√(3n+2)+√(3n−1)), √n 을 곱해 n 으로 나누면 3/(2√3)=√3/2. 등차 일반항·유리화·√n 차수 맞추기 세 단계 모두 표준. 중·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "등차 a_n = 3n−1 → 유리화 3/(√(3n+2)+√(3n−1)) → √n 곱 → 3/(2√3) = √3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0068.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_2, a_4 를 바꿔 공차 d 를 정할 수 있음(극한 √d/2). 제약: 공차가 양수여야 근호가 정의되고 답이 간단한 근호로."
    creative: "(1) 등비수열로 바꿔 √(a_{n+1})−√(a_n) 이 발산함을 확인(★3·I-MI d1) (2) √n 대신 √(a_n) 을 곱해 극한 d/2 (★2) (3) 극한값 √3/2 을 주고 공차를 묻기(★2·I-BW d1)."
```

```yaml
- id: RPM-CALC2-0069
  page: 13
  vendor_label: '유형 07 $\infty-\infty$ 꼴의 극한'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    자연수 n 에 대해 이차방정식 x²−x+n−√(n²+2n)=0 의 두 근 α_n, β_n 에 대해 lim (1/α_n+1/β_n) 의 값. 5지선다.
  category: "근과 계수 → (α+β)/(αβ) = 1/(n−√(n²+2n)) → 상수항 유리화 → −1 → 답 −1"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근과 계수의 관계로 만든 수열의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/α+1/β=(α+β)/(αβ)=1/(n−√(n²+2n)) 이고 상수항은 유리화하면 −2n/(n+√(n²+2n)) → −1 이므로 답 −1. 근과 계수의 관계는 표준 공식이고 ∞−∞ 유리화도 이 유형의 기본 절차. 상수항이 0 이 아니라 −1 로 가는 부호(T-부호)가 함정. 중·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "1/α+1/β = (α+β)/(αβ) = 1/(n−√(n²+2n)) → 유리화 n−√(n²+2n) → −1 → 답 −1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0069.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항의 n−√(n²+2n) 을 n−√(n²+4n) (→ −2) 이나 √(n²+n)−n 으로, 일차 계수 −1 을 바꿀 수 있음. 제약: 상수항의 극한이 0 이 아니어야 몫이 유한하고, 답이 선택지에."
    creative: "(1) 두 근의 역수 합 대신 α_n²+β_n² 을 묻기(★2) (2) 상수항을 √(n²+2n)−n 으로 바꿔 극한 1 로 부호 반전(★2) (3) 두 근이 실수인지(판별식 부호) 먼저 따지게 해 T-범위 추가(★3·I-VF d1)."
```

```yaml
- id: RPM-CALC2-0070
  page: 13
  vendor_label: '유형 07 $\infty-\infty$ 꼴의 극한'
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    √(9n²+5n+1) 보다 크지 않은 최대의 정수 a_n 에 대해 lim (√(9n²+5n+1)−a_n) 의 값. 서술형.
  category: "(3n)² < 9n²+5n+1 < (3n+1)² → a_n=3n → 유리화 (5n+1)/(√…+3n) → 5/6"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「크지 않은 최대의 정수」 를 이웃한 완전제곱 사이의 부등식 (3n)² < 9n²+5n+1 < (3n+1)² 으로 옮겨 a_n = 3n 이라는 명시적 식으로 확정 — 가우스 기호 → 부등식 → 정수 표현 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "가우스 기호 수열의 극한(부등식으로 정수 부분 확정 → 유리화)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    자연수 n 에서 9n² < 9n²+5n+1 < 9n²+6n+1=(3n+1)² 이므로 3n < √(9n²+5n+1) < 3n+1, 따라서 a_n=3n. 그러면 √(9n²+5n+1)−3n 은 유리화로 (5n+1)/(√(9n²+5n+1)+3n) → 5/6. 가우스 기호를 이웃한 완전제곱 사이의 부등식으로 옮겨 a_n 을 확정하는 RT d2 가 핵심이고 뒤는 표준 유리화. 부등식의 엄격성(T-경계)과 기호 해석(T-표기)이 함정. 상중·통찰 1개 d2·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "(3n)² < 9n²+5n+1 < (3n+1)² → a_n = 3n → √(9n²+5n+1)−3n 유리화 → (5n+1)/(√(9n²+5n+1)+3n) → 5/6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0070.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 9n²+5n+1 을 p²n²+qn+r (0 < q < 2p, r 작게) 로 바꿀 수 있음(극한 q/(2p)). 제약: (pn)² < p²n²+qn+r < (pn+1)² 이 모든 자연수 n 에서 성립해야 a_n=pn 이 확정되고, q=2p 이거나 r 이 크면 정수 부분이 바뀜."
    creative: "(1) 근호 안을 n²+n 으로 바꿔 a_n=n, 극한 1/2 (★3) (2) 가우스 대신 「√(9n²+5n+1) 의 소수 부분」 으로 표현 전환(★3·I-RT d2 동일) (3) 근호 안 일차 계수를 7n 으로 바꿔 (3n+1)² 을 넘게 하면 a_n=3n+1 로 정수 부분이 바뀜 — 경계 판단을 묻는 문제(★4·I-VF d1 추가)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 11 · ★2 22 · ★3 2 · ★4 0 · ★5 0
- 통찰형(insight_type) 2(0059·0070) · 절차형 33 · premium 0. 통찰 라벨을 하나라도 가진 블록은 9(d1 단독 7: 0049·0050·0051·0058·0060·0062·0063 포함)
- type_hint 상위: 「∞−∞ 꼴 극한(유리화)」 계열 5(0064~0066 + 합 공식·등차 일반항 결합 0067·0068) · 「∞/∞ 꼴 극한의 미정계수 결정(차수 비교)」 4(0060~0063) · 「수열의 극한에 대한 성질(사칙연산·극한값 연립)」 4(0045~0048) · 「수열의 수렴·발산 판정(보기 고르기)」 3(0042~0044) · 「수렴하는 수열의 활용(극한값 방정식)」 3(0049~0051) · 「등비수열의 수렴 조건(−1 < r ≤ 1)」 3(0039~0041) · 「근과 계수의 관계로 만든 수열의 극한」 2(0054·0069) · 「등비수열을 포함한 ∞/∞ 극한」 2(0037·0038) · 「∞/∞ 꼴 극한(최고차항으로 나누기)」 2(0052·0053)
- 그림: 0문
- 벤더 신호 대조: 교과서 6문 모두 ★1. 대표문제 7문 중 6문 ★2, 0042 만 −1 적용 ★1. 중하 6문은 ★1 3(0043·0046·0061 — 읽고 대입만) · ★2 3(0053·0065·0066 — 근호 계산·유리화 재배열). 중 14문은 ★2 13 · ★1 1(0047 — 대입 한 줄). 상중 2문(0059·0070) 모두 ★3 통찰형. 「서술형」 태그 2문(0054·0070)은 각각 절차형 ★2 · 통찰형 ★3.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0042 | 유형 01 대표문제(★2 출발)이나 다섯 보기 판정이 모두 읽기 한 줄 · 통찰 0 · M_total 5 → −1 적용 ★1. 대표문제 표기와 1단 차이 | ★1 / ★2 |
| RPM-CALC2-0047 | 벤더 「중」이나 두 극한 읽고 대입 한 줄 · 통찰 0 · M_total 4 → −1 적용 ★1. 중 라벨과 1단 차이 | ★1 / ★2 |
| RPM-CALC2-0057 | 유형 05(합·곱으로 표현된 수열)에 있으나 골조는 「로그 법칙으로 하나의 로그로 묶기 → 유리식 극한」 — 카탈로그에서 유형 04 하위 변형인지 별도 유형인지 결정 필요 | ★2 |
| RPM-CALC2-0059 | 벤더 「상중」 ★3 이나 통찰 1개(PD d2)·M_total 5 라 ★2 후보와 겹침. 로그 망원합 + 10^{log} 되돌리기 두 층이 겹쳐 ★3 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「유리화(∞−∞)」 계열 5 · 「미정계수 결정(차수 비교)」 4 · 「극한의 성질(사칙·연립)」 4 · 「수렴·발산 판정」 3 · 「수렴하는 수열의 활용」 3 · 「등비수열 수렴 조건」 3. 이 여섯이 35문의 2/3 를 차지한다.
- 통합해도 될 유형: 유형 04 의 최고차항 나누기(0052·0053·0055) · 유형 05 의 합 공식 대입(0056) · 유형 07 의 유리화(0064~0068) 는 모두 「차수 맞추기 → 최고차 계수비」 한 골조의 하위 변형(다항 · 근호 · Σ · S_n→a_n)이라 카탈로그에서는 「∞/∞·∞−∞ 계수비 극한」 한 유형 아래 하위 변형으로 묶어도 됨. 0054(유형 04)와 0069(유형 07)는 구역이 다르지만 「근과 계수의 관계 → 극한」 같은 골조라 한 유형으로. 0057 은 유형 04 의 하위 변형(로그로 감싼 유리식)으로 두어도 됨. 교과서 01-5 의 0037·0038 은 뒤 유형(등비수열 극한 · r^n 포함 식)의 씨앗이라 그쪽 유형에 흡수.
- 따로 세워야 할 유형: 「가우스 기호 수열의 극한(부등식으로 정수 부분 확정)」(0070 — RT d2 골조 · 경계 판단 변형으로 ★4 확장 가능) · 「망원곱·망원합(로그 포함)」(0058·0059 — PD 골조가 공통이며 지수 되돌리기가 붙으면 d2) · 「점화식·판별식에서 극한값 방정식」(0049~0051 — EQV d1 공통, 0051 처럼 근 두 개에서 부호 기각이 붙으면 VF 변형) · 「미정계수: 0 이 아닌 극한 → 차수 일치 → 고차항 소거」(0063 — 0060·0062 의 「유한 극한 → 최고차 소거」 와 추론 방향이 달라 하위 구분 필요).
- 절차형만 있는 유형 02·04·06·07 의 ★ 상한은 이 범위에서 ★2 이며, ★3 은 통찰 d2(망원합+지수 되돌리기 · 가우스 정수 부분)가 붙는 0059·0070 에서만 나타났다. ★4 이상 후보는 없었다.

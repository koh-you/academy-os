---
name: mechanism-데이터-GN-CALC1-24
description: 개념원리 미적분Ⅰ 24 정적분과 넓이의 활용(1/1 · 215~221쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 24 정적분과 넓이의 활용
  unit_code: "24"
  part: "1/1"
  extract_range: "215~221쪽 · 215-e7~221-461"
  total_problems: 29
  unit_total: 29
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 24 정적분과 넓이의 활용 (1/1) 정독 데이터 (v1.0)

215~221쪽 29문항 전수다. 구역은 「필수·발전 예제」(필수 예제 3 + 발전 예제 1 + 각 예제에 딸린 확인체크 8) 12문, 「연습문제 STEP 1」 7문, 「연습문제 STEP 2」 7문, 「연습문제 실력 UP」 3문으로 나뉜다. 벤더 난이도 신호는 구역과 태그다 — 필수 예제 ★2, 발전 예제 ★3, STEP 1 ★2, STEP 2 ★3, 실력 UP ★4 를 출발점으로 쓰고, 예제 뒤의 확인체크는 짝이 되는 예제의 출발점을 그대로 물려받게 했다(이 구역의 확인체크는 「개념원리 익히기」의 개념 확인이 아니라 예제 직후의 동형 연습이다). 기출 태그(수능 1 · 평가원 2)는 통찰 유무로 +0~1 을 판단했다.

이 단원의 벤더 유형은 사실상 다섯 갈래다 — ⑴ 두 도형의 넓이가 같은 경우(정적분 = 0), ⑵ 넓이를 이등분·삼등분하는 상수, ⑶ 넓이의 최솟값(적분 뒤 미분·산술기하평균), ⑷ 역함수의 그래프와 넓이(y=x 대칭·직사각형 분할), ⑸ 곡선·직선·접선 사이의 기본 넓이. 앞 네 갈래는 「넓이 조건 → 하나의 정적분 등식」이라는 동일한 동치 변환(I-EQV)을 공유하므로 통찰형 비율이 높다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형·깊이·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-215-e7
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 $y=x(x-1)(x-k)$ ($k>1$)와 $x$축으로 둘러싸인 두 도형의 넓이가 같을 때 상수 $k$ 구하기.
  category: "두 넓이 같음 → 전체 정적분 0 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x축 위·아래 두 넓이가 같다는 조건을 0부터 k까지의 정적분이 0 이라는 한 개의 등식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 도형의 넓이가 같은 경우(정적분 = 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    넓이를 각각 구해 빼는 대신 부호가 상쇄됨을 보고 0부터 k까지 한 번에 적분하는 것이 전부다.
    전개·적분 뒤 k^3 으로 나누면 일차식이 남아 계산 부담은 작다. 필수 예제 출발 ★2, 통찰 1개(EQV d2)·M_total 7 로 ★2 유지.
    이 단원 첫 갈래의 원형이라 뒤의 437·438·452 가 모두 같은 골조를 쓴다.
  tier: star_2
  mechanism_primary: "두 넓이 같음 → 0부터 k까지 정적분 = 0 → 전개·적분 → k^3 으로 정리 → k=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/215-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 근 0, 1, k 중 가운데 근(1 → 2, 3)과 첫 근(0 → -1)을 옮길 수 있음. 제약: 세 근이 서로 다르고 k 가 나머지 두 근보다 커야 두 영역이 생기며, 등넓이 방정식의 해가 유리수로 떨어지도록 앞 두 근을 정수로 둔다."
    creative: "(1) 근 하나를 매개변수로 두고 다른 근을 묻기(★2 유지) (2) x축 대신 직선 y=mx 로 둘러싸인 두 영역의 등넓이(교점 세 개를 먼저 구해야 하므로 ★3) (3) 넓이가 같은 대신 비가 1:2 인 조건으로 바꾸면 두 적분을 따로 계산해야 해 ★3~4."
```

```yaml
- id: GN-CALC1-215-437
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림과 같이 곡선 $y=\dfrac{1}{2}x^2+x$와 $x$축 및 직선 $x=k$로 둘러싸인 두 도형의 넓이가 같을 때 양수 $k$ 구하기.
  category: "두 넓이 같음 → -2부터 k까지 정적분 0 → k"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축 아래 영역과 위 영역의 넓이가 같다 → 두 근 중 왼쪽 -2 에서 k 까지의 정적분이 0"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 도형의 넓이가 같은 경우(정적분 = 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    예제 e7 직후의 동형 확인 문제. x절편 -2, 0 을 먼저 구하고 -2 부터 k 까지 적분하면 k 에 대한 삼차방정식이 나오지만 인수 (k-1) 이 바로 보인다.
    같은 골조를 두 번째로 쓰므로 통찰 깊이는 d1. 필수 예제 짝 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "x절편 -2, 0 → -2부터 k까지 정적분 = 0 → 삼차방정식 인수분해 → k=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: "crop:fig-215-437.png"
  latex: latex-bank/gn-calc1/items/215-437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수(1/2 → 1/3, 1)와 일차항 계수를 바꿀 수 있음. 제약: 두 x절편이 정수여야 그림 라벨이 유지되고, 결과 삼차방정식이 정수근 하나를 갖도록 계수를 고른다."
    creative: "(1) 직선 x=k 대신 y축 왼쪽 구간을 고정하고 오른쪽 넓이를 묻기(★2 유지) (2) 두 넓이의 비를 1:3 으로 주면 두 적분을 따로 계산 → ★3 (3) 그림 없이 '양수 k' 조건만 주면 부호 구간 판단이 추가돼 ★3."
```

```yaml
- id: GN-CALC1-215-438
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림과 같이 두 곡선 $y=x^2(x-3)$, $y=ax(x-3)$ ($0<a<3$)으로 둘러싸인 두 도형의 넓이가 같을 때 상수 $a$ 구하기.
  category: "두 곡선 차 → 0부터 3까지 정적분 0 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 곡선 사이 두 영역의 등넓이 → 차 x(x-3)(x-a) 의 0부터 3까지 정적분이 0"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 도형의 넓이가 같은 경우(정적분 = 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 곡선 문제지만 차를 만들면 x(x-3)(x-a) 라는 하나의 삼차식이 되어 e7 과 같은 골조로 환원된다.
    교점이 0, 3, a 임을 먼저 확인하는 단계가 하나 늘었을 뿐이고 적분은 한 번. 확인체크·필수 짝 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "두 곡선 차 = x(x-3)(x-a) → 0부터 3까지 정적분 = 0 → a=3/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: "crop:fig-215-438.png"
  latex: latex-bank/gn-calc1/items/215-438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 인수 (x-3) 의 3 을 다른 양수로, 또는 두 곡선을 x^2(x-b), ax(x-b) 꼴로 일반화할 수 있음. 제약: 0<a<b 여야 그림처럼 두 영역이 생기고, 등넓이 해가 b/2 꼴로 떨어지는 구조를 유지한다."
    creative: "(1) a 를 주고 두 넓이의 비를 묻기(★2) (2) 두 곡선 중 하나를 직선으로 바꿔 교점을 직접 구하게 하면 ★3 (3) '넓이가 같다' 대신 '차가 k 이다'로 바꾸면 452 와 같은 골조가 되어 ★3."
```

```yaml
- id: GN-CALC1-216-e8
  page: 216
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 $y=-x^2+4x$와 $x$축으로 둘러싸인 도형의 넓이가 직선 $y=ax$에 의하여 이등분될 때 상수 $a$ 구하기.
  category: "전체 넓이 → 부분 넓이 = 절반 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이등분 조건을 '곡선과 직선 사이 넓이 = 전체의 1/2' 이라는 a 에 대한 방정식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "넓이를 이등분·삼등분하는 상수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체 넓이 32/3 을 구한 뒤 교점 x=4-a 를 매개변수로 둔 채 1/6 공식으로 부분 넓이 (4-a)^3/6 을 세우는 것이 골조다.
    마지막에 세제곱근이 남아 답이 무리수라는 점에서 필수 예제 출발 ★2 에서 +1. 이등분 갈래의 원형(439·440·451·457 이 파생).
  tier: star_3
  mechanism_primary: "전체 넓이 32/3 → 교점 x=4-a → 부분 넓이 (4-a)^3/6 = 16/3 → 세제곱근 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4-2\sqrt[3]{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/216-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 x절편 간격(4 → 2, 6)을 바꿀 수 있음. 제약: 이등분 방정식이 (간격-a)^3 = (간격^3)/2 꼴이라 답은 항상 세제곱근을 포함하므로, 답의 형태를 유리수로 만들고 싶으면 이등분 대신 넓이 비 1:7 처럼 세제곱수 비를 준다."
    creative: "(1) 직선 대신 곡선 y=ax^2 로 이등분(439 · ★3) (2) 이등분선의 기울기가 아니라 나누는 점의 x좌표를 묻기(★2) (3) 넓이 비를 1:7 로 주면 세제곱근이 사라져 계산이 가벼워지고 ★2."
```

```yaml
- id: GN-CALC1-216-439
  page: 216
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=-x^2+2x$와 $x$축으로 둘러싸인 도형의 넓이가 곡선 $y=ax^2$에 의하여 이등분될 때 상수 $a$ 구하기.
  category: "교점 매개변수화 → 부분 넓이 = 절반 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이등분 조건을 '두 곡선 사이 넓이 = 전체의 1/2' 로 옮기고 교점 x=2/(1+a) 를 매개변수로 유지"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "넓이를 이등분·삼등분하는 상수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    나누는 것이 직선이 아니라 곡선이라 두 곡선 차의 이차항 계수가 -(1+a) 로 묶이는 것을 봐야 1/6 공식을 그대로 쓸 수 있다.
    교점을 a 의 식으로 남긴 채 넓이를 세우는 부담이 e8 보다 조금 크다. 필수 짝 출발 ★2 에서 +1 로 ★3.
  tier: star_3
  mechanism_primary: "전체 넓이 4/3 → 교점 x=2/(1+a) → 1/6 공식으로 부분 넓이 4/(3(1+a)^2) = 2/3 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1+\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/216-439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 x절편 간격(2 → 3, 4)을 바꿀 수 있음. 제약: 나누는 곡선이 y=ax^2 여야 교점이 한 식으로 떨어지고, 이등분이면 (1+a)^2=2 처럼 제곱근이 남는다. 유리수 답을 원하면 넓이 비를 1:3(=(1+a)^2=4)으로 준다."
    creative: "(1) 이등분선을 y=ax^3 로 바꾸면 교점이 무리식이 되어 ★4 (2) a 를 주고 넓이 비를 묻기(★2) (3) 원점이 아닌 꼭짓점을 지나는 직선으로 이등분하면 교점 계산이 늘어 ★4."
```

```yaml
- id: GN-CALC1-216-440
  page: 216
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=x^2-3x$와 직선 $y=ax$로 둘러싸인 도형의 넓이가 $x$축에 의하여 이등분될 때 양수 $a$ 구하기.
  category: "x축 아래 조각 고정 → 전체 = 2배 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x축 아래 조각은 a 와 무관하게 0부터 3까지의 정적분이고, 이등분 조건은 전체 넓이 (3+a)^3/6 이 그 두 배라는 등식"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "넓이를 이등분·삼등분하는 상수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    나누는 선이 x축이라 아래쪽 조각이 a 와 무관한 상수 9/2 로 먼저 결정된다는 점이 핵심이다.
    전체 넓이는 1/6 공식으로 (3+a)^3/6, 등식은 세제곱근 하나. 계산은 가볍지만 조각의 독립성을 못 보면 두 적분을 모두 a 로 쓰게 된다. ★3.
  tier: star_3
  mechanism_primary: "x축 아래 조각 = 9/2(상수) → 전체 (3+a)^3/6 = 9 → 3+a = 3·2^(1/3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3+3\sqrt[3]{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/216-440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 x절편(3 → 2, 4)을 바꿀 수 있음. 제약: 아래쪽 조각이 절편^3/6 이고 전체가 (절편+a)^3/6 이므로 이등분이면 항상 세제곱근 2 가 남는다. 답을 유리수로 만들려면 비를 1:7 또는 1:26 으로 준다."
    creative: "(1) 직선을 y=ax+b 로 바꾸면 교점을 직접 구해야 해 ★4 (2) a 를 주고 위·아래 넓이 비를 묻기(★2) (3) 나누는 선을 y=k 로 바꾸면 두 조각 모두 k 에 의존해 ★4."
```

```yaml
- id: GN-CALC1-217-e9
  page: 217
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    곡선 $y=x(x-2)(x-a)$ ($0<a<2$)와 $x$축으로 둘러싸인 도형의 넓이가 최소가 되도록 하는 상수 $a$ 구하기.
  category: "부호 분할 → 넓이 S(a) → 미분 극소"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "0<x<a 와 a<x<2 에서 부호가 바뀌므로 넓이를 두 정적분의 차로 세워 a 의 함수 S(a) 로 만듦"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분으로 얻은 S(a) 의 최솟값을 미분·증감표(미분 활용 단원)로 처리"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "넓이의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 단원 안에서 끝나지 않고 '넓이를 매개변수의 함수로 만든 뒤 미분'이라는 두 도구를 잇는 것이 골조다.
    두 구간의 부호를 반대로 처리해야 하고 전개된 사차식을 a 로 미분하는 계산량이 있어 M_total 9.
    필수 예제 출발 ★2 + 통찰 2개 → ★3. 441·442·460 이 같은 갈래.
  tier: star_3
  mechanism_primary: "부호 나눠 적분 → S(a) 를 a 의 다항식으로 → S'(a)=0 → a=1(대칭 위치)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/217-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 두 근(0, 2)의 간격을 바꿀 수 있음(0, 4 등). 제약: 가운데 근 a 가 두 근 사이에 있어야 두 영역이 생기고, 최소가 되는 a 는 항상 두 근의 중점이라 답이 깔끔하다."
    creative: "(1) 최솟값 자체(넓이의 값)를 묻기(★3 유지) (2) 최대가 되는 a 를 묻는 형태는 끝점에서 발생해 경계 판단이 추가돼 ★4 (3) 근 하나를 -a, 다른 근을 a 로 두어 대칭성으로 즉시 결론나게 하면 I-SYM 로 바뀌고 ★3."
```

```yaml
- id: GN-CALC1-217-441
  page: 217
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 곡선 $y=2kx^2$, $y=-\dfrac{1}{2k}x^2$ ($k>0$)과 직선 $x=3$으로 둘러싸인 도형의 넓이의 최솟값 구하기.
  category: "넓이 = 18k + 9/(2k) → 산술기하평균"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분 결과 18k + 9/(2k) 의 최솟값을 산술·기하평균(또는 미분)으로 처리 — 적분 밖 도구가 필요"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "넓이의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 포물선이 위아래로 갈라져 있어 넓이는 0부터 3까지 (2k + 1/(2k))x^2 의 적분 한 번이면 끝난다.
    남는 것은 k + 1/k 꼴의 최솟값 — 산술기하평균 한 줄. 적분 자체는 가볍지만 도구 전환이 있어 확인체크 ★2 출발에서 +1.
  tier: star_3
  mechanism_primary: "위-아래 차 = (2k+1/(2k))x^2 → 0부터 3까지 적분 = 18k+9/(2k) → 산술기하평균 → 18"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/217-441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 x=3 의 3 과 두 계수(2k, 1/(2k))의 짝을 바꿀 수 있음. 제약: 두 계수의 곱이 상수여야 산술기하평균에서 k 가 사라지고 최솟값이 유리수로 떨어진다."
    creative: "(1) 최솟값을 주는 k 를 묻기(★3 유지) (2) 두 계수의 곱이 상수가 아니게 만들면 미분이 필요해 ★4 (3) 직선 x=3 대신 두 곡선과 y=1 로 둘러싸인 영역으로 바꾸면 교점이 k 에 의존해 ★4."
```

```yaml
- id: GN-CALC1-217-442
  page: 217
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $y=x^2+2$와 그 위의 점 $(a,\,a^2+2)$ ($0<a<2$)에서의 접선 및 두 직선 $x=0$, $x=2$로 둘러싸인 도형의 넓이의 최솟값 구하기.
  category: "곡선-접선 = (x-a)^2 → S(a) → 미분 극소"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접점에서 중근이 생기므로 곡선과 접선의 차가 (x-a)^2 임을 써서 적분을 한 번에 처리"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "S(a) = ((2-a)^3 + a^3)/3 의 최솟값을 미분으로 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "넓이의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선을 직접 구해 빼지 않고 '곡선-접선 = (x-a)^2' 를 쓰면 적분이 세제곱 두 조각으로 바로 끝난다.
    0<a<2 라 접점이 구간 안에 있어 두 조각으로 나뉘는 것도 챙겨야 한다(T-범위).
    통찰 2개(EQV d2 + XU d2), 필수 짝 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "곡선-접선 = (x-a)^2 → S(a)=((2-a)^3+a^3)/3 → S'(a)=0 → a=1 → 2/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/217-442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝(0, 2)과 곡선의 상수항(2)을 바꿀 수 있음. 제약: 상수항은 넓이에 영향을 주지 않으므로 실질 변수는 구간 길이뿐이고, 최소는 항상 구간의 중점에서 난다. 접점 a 는 구간 내부여야 한다."
    creative: "(1) 최솟값 대신 최댓값(끝점 a=0 또는 2)을 묻기(경계 판단 추가 ★4) (2) 곡선을 y=x^3 으로 바꾸면 곡선-접선이 (x-a)^2(x+2a) 가 되어 ★4 (3) 접선 대신 두 점을 지나는 할선으로 바꾸면 중근 구조가 사라져 ★2."
```

```yaml
- id: GN-CALC1-218-e10
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    ⑴ $f(x)=\dfrac{1}{2}x^2\ (x\ge 0)$의 역함수 $g$에 대해 두 곡선 $y=f(x)$, $y=g(x)$로 둘러싸인 도형의 넓이.
    ⑵ $f(x)=x^3+2x+1$의 역함수 $g$에 대해 $\int_{0}^{1}f+\int_{1}^{4}g$의 값.
  category: "y=x 대칭 → 넓이 2배 / 역함수 적분 → 직사각형 분할"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ f 와 g 가 y=x 에 대칭 → 두 곡선 사이 넓이 = (f 와 y=x 사이 넓이)의 2배"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 역함수의 정적분을 그래프의 직사각형 넓이에서 f 의 정적분을 뺀 것으로 기하적으로 바꿔 읽음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 그래프와 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 소문항이 역함수 넓이의 두 축을 각각 담당한다 — ⑴ 은 y=x 대칭으로 넓이를 접고, ⑵ 는 직사각형 넓이 분할로 역함수 적분을 없앤다.
    두 갈래 모두 그림을 머릿속에 세우지 않으면 식이 서지 않고, 대상이 일반 함수·역함수라 추상도도 높다(M_a=3).
    발전 예제 ★3 출발 + 통찰 2개(SYM·RT) → ★4. 저노출 유형 요건도 충족.
  tier: star_4
  mechanism_primary: "⑴ y=x 대칭 → 2×∫(x-f) / ⑵ ∫f + ∫g = (직사각형 b·f(b)) - (a·f(a))"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{4}{3}$ ⑵ $4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/218-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 계수 1/2 을 바꾸면 교점이 바뀌므로 y=x 와의 교점이 정수가 되도록 고른다. ⑵ 적분 구간 끝은 반드시 f 의 함숫값(f(0)=1, f(1)=4)과 맞춰야 직사각형 분할이 성립한다 — 이 대응이 깨지면 문제가 성립하지 않는다."
    creative: "(1) ⑵ 에서 f 를 주지 않고 f(0), f(1) 값만 주면 추상도가 올라가 ★4 유지 (2) 두 곡선의 교점이 y=x 위에 없도록 만들면 대칭 논법이 깨져 ★5 급 (3) ⑴ 을 f 와 g 로 둘러싸인 영역의 일부만 묻는 형태로 바꾸면 ★4."
```

```yaml
- id: GN-CALC1-218-443
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=2x^3+x^2+x$의 역함수를 $g$라 할 때 두 곡선 $y=f(x)$, $y=g(x)$로 둘러싸인 도형의 넓이 구하기.
  category: "y=x 대칭 → f 와 y=x 사이 넓이의 2배"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 와 g 의 y=x 대칭 → 교점이 y=x 위에 있고 두 곡선 사이 넓이는 f 와 y=x 사이 넓이의 2배"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 그래프와 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=x 를 풀면 교점이 x=-1/2, 0 으로 두 개뿐이고, 그 사이에서 f-x = x^2(2x+1) 의 부호가 일정하다.
    대칭 논법을 쓰면 적분 한 번으로 끝나지만 못 보면 역함수를 직접 구해야 해 막힌다. 발전 짝 ★3 출발 유지.
  tier: star_3
  mechanism_primary: "f(x)=x 로 교점 -1/2, 0 → 2×∫(f-x) → 1/48"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{48}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/218-443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)-x 가 x^2(2x+1) 처럼 인수분해되도록 계수를 고르는 것이 핵심. 제약: f 는 증가함수여야 역함수가 존재하고, 교점이 두 개여야 유한한 영역이 생긴다."
    creative: "(1) 교점을 세 개로 만들면 영역이 둘로 나뉘어 ★4 (2) 넓이 대신 두 곡선과 y=x 로 둘러싸인 한쪽 조각을 묻기(★3) (3) f 를 매개변수로 두고 넓이가 주어진 값이 되는 계수를 묻기(★4)."
```

```yaml
- id: GN-CALC1-218-444
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^3+3$의 역함수를 $g$라 할 때 $\int_{0}^{2}f(x)\,dx+\int_{f(0)}^{f(2)}g(x)\,dx$의 값 구하기.
  category: "역함수 적분 → 직사각형 넓이 차"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 정적분의 합을 그래프에서 큰 직사각형 넓이 - 작은 직사각형 넓이로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 그래프와 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 구간이 f(0), f(2) 로 주어져 있어 직사각형 분할이 그대로 맞아떨어지고, 알면 2·f(2) - 0·f(0) 한 줄이다.
    반대로 기하적 해석을 못 하면 역함수를 구해야 해 진입이 막힌다 — 계산량이 아니라 착안 하나로 갈리는 문항. 발전 짝 ★3 유지.
  tier: star_3
  mechanism_primary: "∫f + ∫g = 2·f(2) - 0·f(0) = 2·11 = 22"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/218-444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 상수항과 구간 끝(0, 2)을 바꿀 수 있음. 제약: 아래끝·위끝이 f(a), f(b) 로 대응돼야 직사각형 분할이 성립하고, f 는 구간에서 증가해야 한다."
    creative: "(1) 한쪽 적분값을 주고 다른 쪽을 묻기(★3 유지) (2) 구간 끝을 f 의 함숫값과 어긋나게 주면 남는 조각을 따로 계산해야 해 ★4(461 이 그 형태) (3) f 를 주지 않고 f(0), f(2) 만 주면 추상도가 올라 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-219-445
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=x^3+x^2-2x$와 $x$축으로 둘러싸인 도형의 넓이 구하기.
  category: "인수분해로 x절편 → 부호 구간 두 개 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축·직선 사이의 넓이(기본)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x(x+2)(x-1) 로 인수분해해 절편 -2, 0, 1 을 찾고 두 구간의 부호를 나눠 적분하면 끝이다.
    착안이랄 것이 없는 표준 절차이고 함정은 부호 하나. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "x(x+2)(x-1) → 절편 -2, 0, 1 → 두 구간 적분의 절댓값 합 → 37/12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{37}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/219-445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 x절편을 정수로 유지한 채 바꿀 수 있음(예: x(x+1)(x-3)). 제약: 절편이 모두 유리수라야 구간 분할이 가능하고, 근이 중근이면 영역이 하나로 줄어 문제 성격이 바뀐다."
    creative: "(1) 두 영역의 넓이 비를 묻기(★2) (2) 세 근 중 하나를 매개변수로 두고 넓이가 주어진 값이 되게 하기(★3) (3) x축 대신 한 근을 지나는 직선으로 바꾸면 교점 계산이 추가돼 ★3."
```

```yaml
- id: GN-CALC1-219-446
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=x^3-1$과 $x$축 및 두 직선 $x=-2$, $x=2$로 둘러싸인 도형의 넓이 구하기.
  category: "x절편 1에서 부호 분할 → 두 적분의 절댓값 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축·직선 사이의 넓이(기본)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간 [-2, 2] 안에서 부호가 바뀌는 점이 x=1 하나뿐이라 분할 지점을 찾는 것이 전부다.
    정적분을 그대로 계산하면 상쇄돼 틀리는 전형적인 T-부호 함정 문항. 통찰 없음·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "x=1 에서 부호 분할 → [-2,1] 과 [1,2] 적분의 절댓값 합 → 19/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{19}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/219-446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(-1)과 구간 끝(-2, 2)을 바꿀 수 있음. 제약: 부호가 바뀌는 점이 구간 내부에 오도록 상수항의 세제곱근이 구간 안이어야 하고, 정수로 떨어지면 계산이 깔끔하다."
    creative: "(1) 구간을 부호가 안 바뀌게 잡아 정적분과 넓이가 같아지게 하기(★1) (2) 두 조각의 넓이가 같아지는 구간 끝을 묻기(★3 · 등넓이 갈래로 이동) (3) |x^3-1| 의 적분으로 표현을 바꾸면 절댓값 처리로 ★2."
```

```yaml
- id: GN-CALC1-219-447
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=x(x-3)^2$과 직선 $y=x$로 둘러싸인 도형의 넓이 구하기.
  category: "차의 인수분해로 교점 → 두 영역 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축·직선 사이의 넓이(기본)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곡선-직선 = x(x-2)(x-4) 로 정리되어 교점 0, 2, 4 와 두 영역이 한 번에 보인다.
    두 영역에서 위아래가 뒤바뀌므로 절댓값 처리만 하면 되는 표준 절차. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "곡선-직선 = x(x-2)(x-4) → 교점 0, 2, 4 → 두 구간 적분의 절댓값 합 → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/219-447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 위치(3)와 직선의 기울기(1)를 바꿀 수 있음. 제약: 차가 세 정수 근으로 인수분해돼야 하므로 (중근)^2 - 기울기 가 완전제곱이 되도록 짝을 고른다."
    creative: "(1) 직선을 y=mx 로 두고 두 영역의 넓이가 같아지는 m 을 묻기(★3) (2) 직선을 곡선의 접선으로 바꾸면 중근 구조가 생겨 ★3 (3) 넓이가 주어진 값이 되는 기울기를 묻기(★4)."
```

```yaml
- id: GN-CALC1-219-448
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 곡선 $y=x^2$, $y=-x^2+1$로 둘러싸인 도형의 넓이 구하기.
  category: "교점 → 위-아래 차 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축·직선 사이의 넓이(기본)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점이 무리수(±1/√2)라 1/6 공식이나 우함수 대칭을 쓰면 편하지만, 그대로 적분해도 한 줄이다.
    통찰 0·M_total 5 라 산식상 −1(★1) 후보지만, 무리수 교점 처리와 근호가 든 답 정리 때문에 STEP 1 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "교점 x=±1/√2 → ∫(1-2x^2) → 2√2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2\sqrt{2}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/219-448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 포물선의 계수와 상수항을 바꿀 수 있음. 제약: 교점이 유리수가 되게 하려면 (상수차)/(계수합)이 완전제곱이어야 하고, 무리수로 두면 답에 근호가 남는다."
    creative: "(1) 한 곡선을 y=-x^2+k 로 두고 넓이가 주어진 값이 되는 k 를 묻기(★3) (2) 두 곡선과 y축으로 나뉜 조각의 비를 묻기(★3) (3) 위 곡선을 직선으로 바꾸면 1/6 공식 한 줄로 ★1~2."
```

```yaml
- id: GN-CALC1-219-449
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=x^3+3x^2-x-3$과 그 위의 점 $(-3,\,0)$에서의 접선으로 둘러싸인 도형의 넓이 구하기.
  category: "접선 → 곡선-접선의 중근 구조 → 적분"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곡선-접선이 (x+3)^2(x-3) 으로 접점에서 중근을 갖는 구조임을 써서 나머지 교점 x=3 을 찾음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선과 곡선으로 둘러싸인 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선을 구하는 단계(미분 → 기울기 8)와 곡선-접선의 중근 구조를 쓰는 단계가 겹쳐 STEP 1 안에서는 무거운 편이다.
    (x+3)^2(x-3) 을 -3 부터 3 까지 적분하는 계산량도 크다(M_k=3). 통찰 1개 + M_total 7 → STEP 1 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "f'(-3)=8 로 접선 y=8(x+3) → 곡선-접선 = (x+3)^2(x-3) → [-3,3] 적분 → 108"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$108$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/219-449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표와 나머지 교점의 간격을 바꿀 수 있음. 제약: 넓이가 (간격)^4/12 에 비례하므로 간격을 키우면 값이 급격히 커진다. 곡선은 삼차, 접점은 곡선 위 점이어야 한다."
    creative: "(1) 접점을 매개변수로 두고 넓이의 최솟값을 묻기(★4 · 최솟값 갈래) (2) 곡선 밖의 점에서 그은 접선으로 바꾸면 접점을 먼저 찾아야 해 ★3(455 형태) (3) 넓이가 주어진 값이 되는 곡선의 계수를 묻기(★4)."
```

```yaml
- id: GN-CALC1-219-450
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    함수 $y=x^2-|x|-2$의 그래프와 $x$축으로 둘러싸인 도형의 넓이 구하기.
  category: "우함수 대칭 → 한쪽 넓이의 2배"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|x| 때문에 그래프가 y축 대칭임을 보고 x≥0 쪽만 적분한 뒤 2배"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선과 x축·직선 사이의 넓이(기본)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값을 구간별로 두 번 적분해도 풀리지만, 우함수 대칭을 보면 x≥0 에서 (x-2)(x+1) 한 번이면 끝난다.
    대칭 활용이 단계를 실제로 줄이므로 SYM d2 로 인정. 다만 계산 자체는 가볍고 함정은 절댓값 부호 하나 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "우함수 대칭 → x≥0 에서 절편 2 → 2×∫(2+x-x^2) → 20/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{20}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/219-450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(-2)과 |x| 의 계수를 바꿀 수 있음. 제약: x≥0 에서의 이차식이 양의 근을 하나 가져야 닫힌 영역이 생기므로 상수항은 음수로 둔다."
    creative: "(1) y=|x^2-x-2| 로 바꾸면 대칭이 사라지고 구간이 셋으로 늘어 ★3 (2) 직선 y=k 와 둘러싸인 넓이가 주어진 값이 되는 k 를 묻기(★3) (3) 대칭을 깨는 항(+x)을 넣으면 SYM 이 사라져 ★2 절차형."
```

```yaml
- id: GN-CALC1-219-451
  page: 219
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    곡선 $y=x^2-5x$와 직선 $y=x$로 둘러싸인 부분의 넓이를 직선 $x=k$가 이등분할 때 상수 $k$의 값. 5지선다.
  category: "전체 넓이 1/6 공식 → 왼쪽 조각 = 절반 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이등분 조건을 '0부터 k까지의 (직선-곡선) 적분 = 전체의 1/2' 이라는 k 의 삼차방정식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "넓이를 이등분·삼등분하는 상수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점 0, 6 과 1/6 공식으로 전체 36 을 얻은 뒤 왼쪽 조각을 k 로 적분해 삼차방정식을 세우는 골조.
    인수 (k-3) 이 떨어지고 나머지 이차근은 범위 밖이라 버려야 한다. 수능 기출 태그 +0, STEP 1 ★2 출발 + 이등분 통찰 → ★3.
  tier: star_3
  mechanism_primary: "교점 0, 6 → 전체 36 → ∫(0~k)(6x-x^2)=18 → k^3-9k^2+54=0 → k=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/219-451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 간격(6)을 바꿀 수 있음. 제약: 이등분 방정식이 유리근을 갖도록 간격을 고르는 것이 관건이며(여기서는 k=3 이 중점), 일반적으로는 무리근이 되어 선택지 구성이 어려워진다."
    creative: "(1) 이등분선을 y=k(수평선)로 바꾸면 조각 모양이 달라져 ★4 (2) 1:2 로 나누는 k 를 묻기(무리근 → ★4) (3) 넓이를 이등분하는 것이 원점을 지나는 직선일 때(★3 · e8 형태)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-220-452
  page: 220
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $f(x)=kx(x-2)(x-3)$ ($k>0$)에서 곡선과 선분 OP로 둘러싸인 영역 $A$, 곡선과 선분 PQ로 둘러싸인 영역 $B$에 대해 (A의 넓이)-(B의 넓이)$=3$일 때 $k$의 값. 5지선다.
  category: "넓이의 차 → 0부터 3까지 한 정적분 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 는 x축 위, B 는 아래에 있으므로 (A의 넓이)-(B의 넓이)가 0부터 3까지의 정적분 하나와 같음을 봄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프·넓이 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 넓이를 따로 구해 빼면 계산이 두 배가 되지만, 부호를 그대로 살려 0부터 3까지 한 번에 적분하면 9k/4 = 3 한 줄이다.
    e7 의 '등넓이 → 적분 0' 을 '넓이 차 → 적분 값' 으로 바꾼 형태. 평가원 기출이지만 착안 하나로 끝나 +0, STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "A-B = ∫(0~3) f dx → k(9/4)=3 → k=4/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-220-452.png"
  latex: latex-bank/gn-calc1/items/220-452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 근(0, 2, 3)과 넓이 차 3 을 바꿀 수 있음. 제약: 두 근 사이 간격에 따라 적분값 계수가 정해지므로 k 가 선택지에 쓸 만한 분수가 되도록 넓이 차를 고른다. k>0 이어야 A 가 위쪽이다."
    creative: "(1) 넓이의 차 대신 합을 주면 두 적분을 따로 해야 해 ★4 (2) 차가 0 인 경우를 묻는 등넓이 형태(★2 · e7) (3) k 를 주고 넓이 차를 묻는 역방향(★2)."
```

```yaml
- id: GN-CALC1-220-453
  page: 220
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    그림의 삼차함수 $y=f(x)$(원점에서 $x$축을 지나고 $x=4$에서 접함)에 대해 곡선과 $x$축으로 둘러싸인 도형의 넓이가 $4$일 때 $f(-2)$의 값 구하기.
  category: "그림 → 중근을 가진 삼차식 → 넓이로 계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그래프의 개형(x=4 에서 접하고 4 오른쪽에서 감소)을 f(x)=ax(x-4)^2, a<0 이라는 식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프·넓이 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림에서 읽어야 하는 정보는 두 가지 — x=4 가 접점(중근)이라는 것과 최고차항 계수의 부호가 음이라는 것이다.
    식을 세운 뒤에는 0부터 4까지의 정적분 절댓값이 4 라는 한 개의 방정식으로 a 를 결정하고 대입만 하면 된다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "그림 → f(x)=ax(x-4)^2 (a<0) → |∫(0~4) f| = 4 → a=-3/16 → f(-2)=27/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{27}{2}$'
  answer_source: "답지"
  figure: "crop:fig-220-453.png"
  latex: latex-bank/gn-calc1/items/220-453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표(4)와 주어진 넓이(4), 묻는 지점(-2)을 바꿀 수 있음. 제약: 넓이가 |a|·(접점)^4/12 이므로 a 가 유리수로 떨어지게 접점과 넓이를 짝지어야 하고, 그림 라벨(접점 좌표)은 식과 일치해야 한다."
    creative: "(1) 접점 대신 세 교점이 모두 다른 그림으로 바꾸면 중근 구조가 사라져 ★3 (2) f(-2) 대신 극솟값이나 f 의 계수 합을 묻기(★3) (3) 넓이를 주지 않고 f(-2)=k 를 주고 넓이를 묻는 역방향(★2)."
```

```yaml
- id: GN-CALC1-220-454
  page: 220
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=x^2$을 $x$축 대칭이동한 뒤 $x$축으로 $-1$, $y$축으로 $5$만큼 평행이동한 곡선 $y=f(x)$와 $y=x^2$으로 둘러싸인 도형의 넓이 구하기.
  category: "이동 → f 의 식 → 교점 → 1/6 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "말로 준 대칭·평행이동을 f(x) = -(x+1)^2+5 라는 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 x축·직선 사이의 넓이(기본)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동을 식으로 옮기기만 하면 두 포물선 사이 넓이라 1/6 공식 한 줄(|a|=2, 교점 간격 3 → 9)로 끝난다.
    이동 방향 부호가 유일한 함정(T-부호). 통찰이 d1 하나뿐이고 계산이 가벼워 STEP 2 출발 ★3 에서 −1 로 ★2.
  tier: star_2
  mechanism_primary: "f(x)=-(x+1)^2+5 → 교점 x=-2, 1 → 1/6 공식 2·3^3/6 → 9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/220-454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량(-1, 5)을 바꿀 수 있음. 제약: 두 곡선의 교점이 유리수로 떨어지려면 이동 뒤 이차방정식의 판별식이 완전제곱이어야 한다. x축 대칭은 최고차항 부호를 뒤집는 역할이라 유지한다."
    creative: "(1) 이동량 하나를 미지수로 두고 넓이가 주어진 값이 되게 하기(★3) (2) 대칭이동을 y축 대칭으로 바꾸면 두 곡선이 겹쳐 문제가 성립하지 않으므로 직선 y=x 대칭으로 바꾸면 역함수 갈래(★4) (3) 이동한 곡선과 x축으로 둘러싸인 넓이를 묻기(★1~2)."
```

```yaml
- id: GN-CALC1-220-455
  page: 220
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=2x^2+3$과 점 $(1,\,-3)$에서 이 곡선에 그은 두 접선으로 둘러싸인 도형의 넓이 구하기.
  category: "접점 매개변수 → 외부 점 조건 → 두 조각 적분"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접점을 (t, 2t^2+3) 으로 두고 접선이 (1,-3) 을 지난다는 조건에서 t=-1, 3 을 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선과 곡선으로 둘러싸인 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곡선 밖의 점에서 그은 접선이라 접점을 미지수로 두는 역방향 설정이 먼저 필요하다.
    접점을 얻은 뒤에는 곡선-접선 = 2(x-t)^2 구조로 두 조각을 나눠 적분하면 되고, 두 접선의 교점 x=1 이 분할점이다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "접점 t → (1,-3) 통과 조건 t^2-2t-3=0 → t=-1, 3 → x=1 에서 나눠 (x-t)^2 적분 → 32/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{32}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/220-455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 계수(2), 상수항(3), 외부 점의 좌표를 바꿀 수 있음. 제약: 외부 점이 곡선 아래쪽(포물선 바깥)에 있어야 접선이 두 개 생기고, 접점 방정식이 정수근을 갖도록 좌표를 고른다. 넓이는 |a|(두 접점 간격)^3/12."
    creative: "(1) 두 접선과 x축으로 둘러싸인 넓이로 바꾸면 조각이 늘어 ★4 (2) 외부 점을 (1, k) 로 두고 넓이가 주어진 값이 되는 k 를 묻기(★4) (3) 접선 하나와 곡선, y축으로 둘러싸인 넓이(★3)."
```

```yaml
- id: GN-CALC1-220-456
  page: 220
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    그림과 같이 곡선 $y=x^2-6x+a$ ($0<a<9$)와 $x$축, $y$축으로 둘러싸인 부분의 넓이 $A$, 곡선과 $x$축으로 둘러싸인 부분의 넓이 $B$가 $A:B=1:2$일 때 상수 $a$ 구하기.
  category: "넓이 비 → 두 부정적분 값의 합 0 → 근과 계수"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2A=B 를 'F(α)+F(β)=0' (F 는 0 에서 시작하는 부정적분) 이라는 한 개의 등식으로 옮겨 무리수인 두 근을 그대로 둘 수 있게 함"
    - step: 2
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "α+β=6, αβ=a 로 대칭식 α^3+β^3, α^2+β^2 를 정리(근과 계수의 관계)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프·넓이 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 근이 3±√(9-a) 라 각 넓이를 직접 계산하면 무리식 늪에 빠진다. 2A=B 를 F(α)+F(β)=0 으로 바꾸고 근과 계수의 관계로 대칭식을 처리하면 6a-36=0 으로 정리된다.
    통찰 2개지만 두 번째는 표준 절차에 가까워 d1 로 두었고, 계산량이 커서 M_total 9. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "2A=B ⟺ F(α)+F(β)=0 → 근과 계수 대입 → 6a-36=0 → a=6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: "crop:fig-220-456.png"
  latex: latex-bank/gn-calc1/items/220-456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(-6)와 넓이 비(1:2)를 바꿀 수 있음. 제약: 0<a<(일차항 계수의 절반)^2 이라야 두 근이 모두 양수가 되어 그림 배치가 유지된다. 비를 바꾸면 F(α), F(β) 의 계수가 달라져 a 가 유리수로 떨어지는지 확인해야 한다."
    creative: "(1) 비 대신 A=B 조건으로 주면 식이 더 단순해져 ★3 (2) y축 대신 직선 x=k 로 자르면 k 와 a 두 미지수라 조건이 하나 더 필요해 ★4 (3) a 를 주고 A:B 를 묻는 역방향(★2)."
```

```yaml
- id: GN-CALC1-221-457
  page: 221
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    그림과 같이 곡선 $y=\dfrac{1}{4}x^2$과 직선 $y=1$로 둘러싸인 도형의 넓이가 곡선 $y=kx^2$에 의하여 삼등분될 때 상수 $k$ 구하기.
  category: "y축 대칭 → 안쪽 조각 = 전체의 1/3 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곡선 y=kx^2 이 원점에서 갈라져 바깥 두 조각이 y축 대칭으로 서로 같으므로 '삼등분'이 '안쪽 조각 = 전체의 1/3' 한 조건으로 환원됨"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "안쪽 조각의 넓이를 k 의 식 (4/3)/√k 로 세워 전체 8/3 의 1/3 과 같다는 방정식으로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "넓이를 이등분·삼등분하는 상수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    '한 곡선이 넓이를 삼등분한다'는 말을 그림 구조(대칭인 바깥 두 조각 + 안쪽 한 조각)로 읽어내는 것이 이 문항의 전부다.
    읽어내고 나면 계산은 두 번의 간단한 적분이지만, 못 읽으면 조건 자체를 세울 수 없다.
    통찰 2개(SYM·EQV) + 대칭 구조 착안 → STEP 2 ★3 에서 +1. ★4 저노출 유형 요건(SYM) 충족.
  tier: star_4
  mechanism_primary: "전체 8/3 → 대칭으로 삼등분 = 안쪽 조각 8/9 → (4/3)/√k = 8/9 → k=9/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "답지"
  figure: "crop:fig-221-457.png"
  latex: latex-bank/gn-calc1/items/221-457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 곡선의 계수(1/4)와 자르는 직선(y=1)을 바꿀 수 있음. 제약: 안쪽 조각 넓이가 상수/√k 꼴이라 삼등분이면 √k 가 유리수여야 k 가 깔끔하다. k > 1/4 이어야 안쪽 곡선이 더 좁다."
    creative: "(1) 삼등분 대신 이등분으로 바꾸면 √k 에 무리수가 남아 ★4 유지 (2) 자르는 곡선을 y=kx^2+c 로 두면 대칭 환원이 깨져 ★5 급 (3) k 를 주고 세 조각의 넓이 비를 묻는 역방향(★3)."
```

```yaml
- id: GN-CALC1-221-458
  page: 221
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    그림의 함수 $y=f(x)$와 그 역함수 $y=g(x)$가 두 점 $(1,\,1)$, $(3,\,3)$에서 만나고 $\int_{1}^{3}f(x)\,dx=\dfrac{11}{2}$일 때 두 곡선으로 둘러싸인 도형의 넓이 구하기.
  category: "y=x 대칭 → (f 와 y=x 사이 넓이)의 2배"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 와 g 가 y=x 대칭이고 교점이 y=x 위에 있으므로 구하는 넓이가 f 와 y=x 사이 넓이의 2배"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 그래프와 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 의 식이 없고 정적분 값 하나만 주어져 있어, 대칭 논법으로 g 를 지워야만 계산할 수 있다.
    지우고 나면 2×(11/2 - 4) = 3 한 줄이라 계산 부담은 거의 없다(M_k=1). 일반 함수 추상도(M_a=3). STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "y=x 대칭 → 2×(∫f - ∫x) = 2(11/2 - 4) = 3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-221-458.png"
  latex: latex-bank/gn-calc1/items/221-458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 좌표(1, 3)와 주어진 정적분 값을 바꿀 수 있음. 제약: 정적분 값이 사다리꼴 넓이(여기서 4)보다 커야 f 가 y=x 위에 있는 그림과 맞고 넓이가 양수가 된다."
    creative: "(1) 넓이를 주고 정적분 값을 묻는 역방향(★3) (2) 교점이 y=x 위에 없도록 설정하면 대칭 논법이 깨져 ★5 급 (3) f 와 g 및 y=x 로 나뉜 한쪽 조각만 묻기(★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-221-459
  page: 221
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+x^2-x$, $g(x)=4|x|+k$ ($k<0$)의 그래프가 만나는 점의 개수가 $2$일 때, 두 그래프로 둘러싸인 부분의 넓이 $S$에 대해 $30S$ 구하기.
  category: "절댓값 분기 → 교점 개수 조건으로 k 결정 → 넓이"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|x| 때문에 x≥0 과 x<0 에서 서로 다른 삼차방정식 k=x^3+x^2-5x, k=x^3+x^2+3x 로 갈라 각각의 해 개수를 따져야 함"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "교점이 2개라는 결과 조건에서 거꾸로, x<0 쪽은 항상 1개이므로 x≥0 쪽이 1개(접하는 경우)여야 함을 알아내 k=-3 을 역추적"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k 의 후보 구간(-3<k<0 · k=-3 · k<-3) 중 개수 조건을 위배하는 구간을 기각해야 답이 하나로 확정됨"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "절댓값 그래프의 교점 개수 조건과 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    넓이 계산 자체는 두 구간의 차 (x+1)(x^2+3) 과 (x-1)^2(x+3) 을 적분하는 것이지만, 거기까지 가려면 k 를 먼저 확정해야 한다.
    절댓값 분기 → 각 분기의 해 개수(증가함수 판정·극솟값 -3) → 접하는 경우만 남기고 나머지 기각, 세 단계 모두가 필요하다.
    [분류 이슈] 통찰 3개 + I-VF 로 v3.8 산식상 ★5 후보지만 참신도(novelty_score) 0 인 빈출 기출이라 실력 UP 출발 ★4 를 유지했다.
  tier: star_4
  mechanism_primary: "|x| 분기 → k=-3(x≥0 쪽 접함) 확정 → 교점 -1, 1 → 두 구간 적분 합 8/3 → 30S=80"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$80$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/221-459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 기울기(4)와 f 의 계수를 바꿀 수 있음. 제약: x<0 쪽 삼차식이 항상 증가(판별식 음수)해야 '한쪽은 항상 1개'라는 구조가 유지되고, x≥0 쪽 극솟값이 음수여야 접하는 k 가 존재한다. 30 배는 답을 정수로 만들기 위한 장치."
    creative: "(1) 교점 개수를 3개로 바꾸면 k 가 구간으로 나와 넓이가 k 의 함수가 되므로 ★5 급 (2) k>0 으로 조건을 뒤집어 대칭 상황을 묻기(★4) (3) 넓이를 주고 k 를 묻는 역방향(★4)."
```

```yaml
- id: GN-CALC1-221-460
  page: 221
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=x^2-x-2$와 직선 $y=ax$로 둘러싸인 도형의 넓이가 최소가 되도록 하는 상수 $a$ 구하기.
  category: "1/6 공식 → 넓이를 근의 차의 세제곱으로 → 최소"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점을 직접 구하지 않고 넓이를 (β-α)^3/6 으로 두어 근의 차만 남기는 형태로 조건을 바꿈"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(β-α)^2 = (a+1)^2+8 을 근과 계수의 관계로 계산해 넓이를 a 의 완전제곱 식으로 환원 → 미분 없이 최소 판정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "넓이의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    교점이 무리수라 정면으로 적분하면 막힌다. 1/6 공식으로 넓이를 근의 차만의 함수로 만들고, 근과 계수의 관계로 (β-α)^2 을 a 의 이차식으로 바꾸면 미분 없이 a=-1 이 보인다.
    '적분 → 판별식 → 최소'로 도구가 두 번 바뀌는 점이 실력 UP 다운 지점. 통찰 2개(EQV·XU) → ★4 유지.
  tier: star_4
  mechanism_primary: "넓이 = (β-α)^3/6 → (β-α)^2=(a+1)^2+8 → a=-1 에서 최소"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/221-460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 계수(x^2-x-2)를 바꿀 수 있음. 제약: 상수항이 음수라야 모든 a 에서 교점이 두 개 생기고, 최소를 주는 a 는 (곡선의 일차항 계수)와 같아져 항상 정수로 떨어진다."
    creative: "(1) 최솟값 자체를 묻기(근호가 남아 ★4 유지) (2) 직선을 y=ax+b 로 두고 b 를 고정하면 같은 골조 ★4 (3) 넓이가 주어진 값이 되는 a 를 묻기(육차방정식 → ★5 급)."
```

```yaml
- id: GN-CALC1-221-461
  page: 221
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3+x-1$의 그래프가 그림과 같을 때, 역함수 $g$에 대해 $\int_{1}^{9}g(x)\,dx$의 값 구하기.
  category: "역함수 적분 → 직사각형 넓이 - f 의 적분"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "적분 구간 끝 1, 9 에 대응하는 f 의 x 값을 f(1)=1, f(2)=9 로 역추적해 f 쪽 구간 [1, 2] 를 확보"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g 의 적분을 그래프에서 큰 직사각형(2×9) - 작은 직사각형(1×1) - f 의 적분으로 바꿔 읽음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 그래프와 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    444 와 달리 적분 구간이 f 의 함숫값으로 주어져 있지 않아, 대응하는 x 값을 먼저 찾아야 직사각형 분할이 성립한다.
    그 뒤에는 2·9 - 1·1 - ∫(1~2)f 라는 한 줄이지만, 그림을 세우지 못하면 역함수를 구하려다 막힌다.
    통찰 2개(BW·RT) · 역함수 추상도(M_a=3) → 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: "f(1)=1, f(2)=9 → ∫(1~9)g = 2·9 - 1·1 - ∫(1~2)f → 51/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{51}{4}$'
  answer_source: "답지"
  figure: "crop:fig-221-461.png"
  latex: latex-bank/gn-calc1/items/221-461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "적분 구간 끝(1, 9)을 바꿀 수 있음. 제약: 양 끝이 f 의 정수 함숫값이어야 대응하는 x 가 정수로 떨어진다(f(1)=1, f(2)=9). f 는 증가함수라야 역함수가 존재한다."
    creative: "(1) 구간 끝을 f 의 함숫값이 아닌 값으로 두면 남는 조각을 따로 처리해야 해 ★5 급 (2) ∫f + ∫g 형태로 묻기(★3 · 444) (3) f 를 주지 않고 f(1), f(2) 값과 단조성만 주면 추상도가 올라 ★4 유지."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 0 · ★2 9 · ★3 15 · ★4 5 · ★5 0
- 통찰형 25 · 절차형 4(219-445 · 219-446 · 219-447 · 219-448) · premium 0
- 통찰 유형 분포: I-EQV 14 · I-XU 5 · I-SYM 5 · I-RT 5 · I-BW 3 · I-MI 1 · I-VF 1 (총 34개 라벨 · depth 3 은 221-459 의 I-BW 1개)
- type_hint 상위: 「넓이를 이등분·삼등분하는 상수」 5 · 「역함수의 그래프와 넓이」 5 · 「곡선과 x축·직선 사이의 넓이(기본)」 5 · 「넓이의 최솟값」 4 · 「두 도형의 넓이가 같은 경우(정적분 = 0)」 3 · 「그래프·넓이 조건으로 미정계수 구하기」 3 · 「접선과 곡선으로 둘러싸인 넓이」 2 · 「절댓값 그래프의 교점 개수 조건과 넓이」 1
- 그림: 8문(`crop:fig-215-437.png` · `crop:fig-215-438.png` · `crop:fig-220-452.png` · `crop:fig-220-453.png` · `crop:fig-220-456.png` · `crop:fig-221-457.png` · `crop:fig-221-458.png` · `crop:fig-221-461.png`)
- 대상층: 중하위권 4 · 중위권 13 · 중상위권 11 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-219-448 | 통찰 0 · M_total 5 로 v3.8 산식상 −1(★1) 후보지만 무리수 교점 처리 때문에 STEP 1 출발 ★2 유지 | ★1 / ★2 |
| GN-CALC1-220-454 | 벤더 STEP 2(★3 출발)이나 이동 식만 세우면 1/6 공식 한 줄 → ★2 로 −1 | ★2 / ★3 |
| GN-CALC1-221-459 | 통찰 3개 + I-VF 로 ★5 산식 후보지만 novelty_score 0(빈출 평가원 기출) → §2.14 게이트에 걸려 ★4 유지 | ★4 / ★5 |
| GN-CALC1-220-456 | 넓이 비 조건을 F(α)+F(β)=0 으로 바꾸는 착안은 무거운데 계산은 근과 계수 대입이라 ★3/★4 경계 | ★3 / ★4 |

### 카탈로그 차원 메모

- 이 범위에서 반복된 type_hint 는 다섯 갈래다 — ⑴ 등넓이(정적분 = 0) 3문, ⑵ 이등분·삼등분 5문, ⑶ 넓이의 최솟값 4문, ⑷ 역함수의 그래프와 넓이 5문, ⑸ 기본 넓이 계산 5문.
- **따로 세워야 할 유형**: 「역함수의 그래프와 넓이」는 y=x 대칭으로 접는 갈래(218-443 · 221-458)와 직사각형 분할로 역함수 적분을 없애는 갈래(218-444 · 221-461)가 통찰 유형(SYM vs RT)도 base ★ 도 달라 두 유형으로 분리하는 것이 맞다. 「넓이의 최솟값」도 미분으로 처리하는 갈래(217-e9 · 217-442)와 산술기하평균·판별식으로 처리하는 갈래(217-441 · 221-460)가 갈린다.
- **통합해도 될 유형**: 「등넓이(정적분 = 0)」와 「넓이의 차가 주어진 경우」(220-452)는 부호를 살려 한 번에 적분한다는 동일한 동치 변환이므로 한 유형의 하위 변형으로 묶을 수 있다. 「이등분」과 「삼등분」(221-457)도 나누는 선/곡선과의 교점을 매개변수로 두는 같은 골조다.
- 「그래프·넓이 조건으로 미정계수 구하기」(220-452 · 220-453 · 220-456)는 그림에서 식을 세우는 I-RT 가 공통이라 카탈로그에서는 넓이 유형이 아니라 '그래프 해석' 유형 쪽에 두는 편이 검색성이 좋다.

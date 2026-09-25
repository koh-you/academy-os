---
name: mechanism-데이터-GN-M31-13-p2
description: 개념원리 중학 3-1 13 제곱근을 이용한 이차방정식의 풀이 (2/2 · 128~133쪽 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 13 제곱근을 이용한 이차방정식의 풀이
  unit_code: GN-M31-13
  part: "2/2"
  extract_range: "128~133쪽 · 128-01~133-u6"
  total_problems: 32
  unit_total: 54
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (이 범위 그림 없음)
---

# 개념원리 중학 3-1 · 13 제곱근을 이용한 이차방정식의 풀이 (2/2) 정독 데이터 (v1.0)

이 파일은 소단원 「13 제곱근을 이용한 이차방정식의 풀이」의 뒷부분, 즉 **중단원 마무리 구역** 128~133쪽 32문항 전수를 다룬다. 구역은 「중단원 마무리하기 STEP 1 기본 문제」 12문(128~129쪽) · 「STEP 2 발전 문제」 9문(130~131쪽) · 「STEP 3 실력 UP」 3문(131쪽) · 「서술형 대비 문제」 8문(132~133쪽 · 예제 `쪽-eN` 2문과 유제 `쪽-uN` 6문)이다. 앞부분(1/2)이 개념·핵심문제 드릴이었다면 이 범위는 **단원 전체의 도구를 섞어 되묻는 층**이다. 그림은 한 문항도 없다.

개념원리 중학은 문항별 난이도 등급(`level`)이 없으므로 **구역 자체가 유일한 벤더 난이도 신호**다. STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 대비 ★3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다(통찰 0 이고 M_total ≤ 5 이면 −1). tag 「꼭나와」는 빈출 표시로만 읽고 ★ 는 올리지 않았다.

이 범위의 도구는 다섯이다 — ⑴ 이차방정식의 뜻(정리 후 이차항 계수 ≠ 0), ⑵ 근의 대입(한 근이 주어지면 대입해 상수 결정), ⑶ 인수분해로 풀기(AB=0), ⑷ 중근 조건(상수항 = (x 계수의 절반)의 제곱), ⑸ 제곱근·완전제곱식으로 풀기((x+p)^2=q). 32문 중 대부분은 이 다섯 중 **둘을 이어 붙인 두 겹 구조**이고(예: 중근 조건으로 상수 결정 → 그 상수를 넣은 다른 방정식 풀기), STEP 3 와 일부 발전 문제만 여기에 **후보 기각(I-VF)** 이나 **조건의 동치 변환(I-EQV)** 한 겹을 더 얹는다. 변형 설계 때는 「두 겹의 앞뒤 도구를 바꿔 끼우기」 축이 가장 잘 먹히고, ★ 를 올리려면 계산을 무겁게 하는 대신 **기각되어야 할 후보를 만드는 조건**(이차항 계수 ≠ 0 · 분모 ≠ 0 · 자연수·정수 제한 · 부호 제한)을 넣는 쪽이 정석이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M31-128-01
  page: 128
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    주어진 다섯 식 중 이차방정식인 것을 모두 고르기(정답 2개).
  category: "우변 이항·정리 → 이차항 계수가 0 이 아닌지 확인"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 뜻(정리 후 이차항 계수 ≠ 0 판별)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 식을 각각 전개·이항해 (이차식)=0 꼴인지 본다. 등식이 아닌 것과 전개하면 이차항이 상쇄되는 것 두 함정이 핵심(T-표기·T-범위).
    도구는 정의 하나뿐이고 통찰 없음, 다만 전개량이 있어 Mₖ 2. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 식을 이항·정리 → 이차항 계수 ≠ 0 인 것만 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①, ④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/128-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 계수를 바꿀 수 있다. 제약: 정답 2개를 유지하려면 이차항이 상쇄되는 선택지(전개 후 일차)와 등식이 아닌 선택지를 각각 최소 하나 남겨야 한다."
    creative: "(1) 「이차방정식이 아닌 것」으로 뒤집기(★2 유지) (2) 문자 계수를 넣어 「이차방정식이 되도록 하는 a 의 조건」으로 바꾸면 130-13 골조가 되며 ★3 (3) 분모에 x 가 있는 식을 넣어 분수방정식과 구별시키면 함정 1개 추가."
```

```yaml
- id: GN-M31-128-02
  page: 128
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "기본 문제"
  summary: |
    다섯 이차방정식 중 x=-3 을 해로 갖는 것 고르기.
  category: "x=-3 을 각 식에 대입 → 등식이 성립하는 것"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 해(근) 판별 — 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    해의 정의를 묻는 드릴. 다섯 번 대입하는 노동량뿐이고 인수분해로 풀어 비교해도 된다.
    음수 대입에서 부호 실수가 유일한 함정. 통찰 없음·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 식에 x=-3 대입 → 좌변이 0 이 되는 식 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/128-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입값(-3)과 각 선택지의 계수를 바꿀 수 있다. 제약: 정답이 하나만 되도록 나머지 네 식에서 대입값이 근이 되지 않게 확인해야 한다."
    creative: "(1) 「해가 아닌 것」으로 뒤집기(★2) (2) 두 해를 주고 둘 다 갖는 식을 고르게 하면 판정 횟수 2배·★2 유지 (3) 대입값을 무리수(x=1+√2)로 두면 계산 부담이 커지고 ★3 근처."
```

```yaml
- id: GN-M31-128-03
  page: 128
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    이차방정식 3x^2-2ax+a+9=0 의 한 근이 x=2 일 때 상수 a 구하기.
  category: "한 근 대입 → a 에 대한 일차방정식 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 근이 주어질 때 미지수 구하기(대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=2 를 대입해 a 에 대한 일차방정식을 풀면 끝나는 한 줄 문항. 되묻기 겹이 없다.
    통찰 0 · M_total 5 → STEP 1 출발점 ★2 에서 −1 하여 ★1. 이 구역에서 가장 가벼운 문항이다.
  tier: star_1
  mechanism_primary: "x=2 대입 → -3a+21=0 → a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/128-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수·대입할 근·a 가 붙는 자리를 바꿀 수 있다. 제약: a 의 일차항이 상쇄되지 않아야 하고(=a 계수 ≠ 0) 답이 정수가 되도록 계수를 맞춘다."
    creative: "(1) 구한 a 로 원식을 풀어 「다른 한 근」까지 묻게 하면 두 겹·★2(129-08 골조) (2) 근을 x=-1/2 처럼 분수로 두면 Mₖ 상승 (3) a 가 이차항 계수에도 들어가면 a 에 대한 이차방정식이 되고 이차방정식 조건으로 기각이 생겨 ★3."
```

```yaml
- id: GN-M31-128-04
  page: 128
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    해가 x=-1/4 또는 x=2/3 인 이차방정식을 다섯 개의 (ax+b)(cx+d)=0 꼴 중에서 고르기.
  category: "각 인수를 0 으로 놓아 근 읽기 → 주어진 두 근과 대조"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "AB=0 꼴에서 해 읽기 / 두 근으로부터 방정식 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4x+1=0 에서 x=-1/4 처럼 인수의 부호가 근에서 뒤집히는 것이 이 문항의 전부다(T-부호).
    선택지가 4·3·2 를 섞어 놓아 분모 자리를 혼동시키지만 도구는 한 겹. 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 선택지의 두 인수를 0 으로 놓아 근을 읽고 -1/4, 2/3 과 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/128-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근의 분모·분자와 부호를 바꿀 수 있다. 제약: 오답 선택지가 근의 부호만 뒤집힌 것·분모끼리 자리를 바꾼 것을 포함해야 변별이 유지된다."
    creative: "(1) 선택지를 없애고 「해가 …인 이차방정식을 x^2 의 계수가 12 가 되게 만드시오」로 바꾸면 역방향 구성·★2~3 (2) 한 근만 주고 나머지 근을 묻기(★2) (3) 전개된 꼴 6x^2-5x-... 로 제시해 인수분해까지 시키면 128-05 골조."
```

```yaml
- id: GN-M31-128-05
  page: 128
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    6x^2-17x+5=0 의 두 근을 a, b(a>b)라 할 때 a-b 의 값.
  category: "십자셈 인수분해 → 두 근 → 대소 확인 후 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해로 이차방정식 풀기 — 두 근의 차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차항 계수가 1 이 아니어서 십자셈이 필요하고, 근이 분수라 a>b 대소를 한 번 확인해야 한다(T-부호·대소).
    도구 한 겹 + 분수 뺄셈. 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(3x-1)(2x-5)=0 → 두 근 → a>b 로 정렬 → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/128-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "십자셈이 되는 다른 계수쌍(예: 10x^2-9x+2, 6x^2-7x-3)으로. 제약: 두 근이 분수여야 대소 확인이 살아 있고, 차가 선택지로 쓸 만한 분수가 되어야 한다."
    creative: "(1) a-b 대신 ab 나 a+b 를 묻기(★2 유지) (2) a>b 조건을 빼고 |a-b| 로 물으면 함정 제거·★1~2 (3) 구한 두 근을 다른 방정식의 계수로 넘기면 130-15 골조·★3."
```

```yaml
- id: GN-M31-128-06
  page: 128
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "기본 문제"
  summary: |
    두 이차방정식 x^2+3x-10=0, 2x^2+7x-15=0 의 공통인 근 구하기.
  category: "각각 인수분해 → 두 해집합의 공통 원소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차방정식의 공통인 근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 도구(인수분해)를 두 번 쓰고 겹치는 근을 고른다. 두 번째 식이 십자셈이라 계산량이 조금 더 있다.
    「공통인 근」을 두 근 모두로 착각하지 않는 것이 함정. 통찰 없음·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(x+5)(x-2)=0, (2x-3)(x+5)=0 → 공통 인수 x+5 → x=-5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$x=-5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/128-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 인수를 먼저 정하고(x+5 → x-4 등) 나머지 인수를 바꿔 두 식을 만든다. 제약: 공통 근이 하나여야 하고 두 식이 같은 방정식이 되면 안 된다."
    creative: "(1) 공통근 대신 「공통이 아닌 근의 곱」을 묻기(★3 · 130-17 골조) (2) 한 식에 미지수를 넣고 공통근을 주면 상수 결정 문제로 뒤집힘(★3) (3) 공통근이 없는 쌍을 섞어 선택형으로 만들면 판정 횟수가 늘어 ★2 유지."
```

```yaml
- id: GN-M31-129-07
  page: 129
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "기본 문제"
  summary: |
    다섯 이차방정식 중 중근을 갖는 것을 모두 고르기(정답 2개).
  category: "(완전제곱식)=0 꼴로 정리되는지 판별"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근을 가질 조건 판별(완전제곱식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 식을 정리해 (x-p)^2=0 또는 (ax+b)^2=0 이 되는지 본다. (x-1)^2=25 처럼 우변이 0 이 아닌 것을 중근으로 착각하는 것이 핵심 함정(T-경계).
    도구 한 겹·통찰 없음·M_total 6 → ★2 유지. 중근 판별은 이 단원 전체의 기초라 「꼭나와」.
  tier: star_2
  mechanism_primary: "각 식을 =0 꼴로 정리 → 좌변이 완전제곱식인지 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②, ④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/129-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "완전제곱식의 (p, 계수)를 바꿔 정답 두 개를 만든다. 제약: 오답에 「우변이 0 이 아닌 제곱식」과 「두 근을 갖는 인수분해 식」을 각각 넣어야 변별이 산다."
    creative: "(1) 「중근을 갖지 않는 것」으로 뒤집기(★2) (2) 상수항에 문자를 넣어 「중근을 갖도록 하는 k」로 바꾸면 131-19 골조·★3 (3) 중근을 구해 그 값을 다른 식에 넣게 하면 두 겹·★3(130-18)."
```

```yaml
- id: GN-M31-129-08
  page: 129
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    x^2-12x+36=0 의 근이 2x^2-ax-6=0 의 한 근일 때 상수 a 와 다른 한 근 구하기.
  category: "중근 구하기 → 대입해 a → 인수분해로 다른 근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근이 다른 방정식의 근 — 미지수와 다른 한 근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 식이 완전제곱이라 근이 x=6 하나로 확정되는 것이 출발점이고, 이후는 대입·인수분해 표준 절차.
    세 도구를 잇지만 각 단계가 정해져 있어 통찰은 없다. M_total 7 → ★2 유지(기본 문제 중 무거운 쪽).
  tier: star_2
  mechanism_primary: "(x-6)^2=0 → x=6 대입 → a=11 → (2x+1)(x-6)=0 → 다른 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=11$, $x=-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/129-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 값(6)과 두 번째 식의 이차항 계수·상수항을 바꾼다. 제약: 첫 식은 완전제곱이어야 하고, 두 번째 식이 그 근을 가지면서 다른 근이 깔끔한 유리수가 되도록 상수항을 잡는다."
    creative: "(1) 두 번째 식도 중근을 갖게 해 a 가 두 값이 나오게 하면 기각 판단 추가·★3 (2) 다른 한 근 대신 「두 근의 곱」을 묻기(★2) (3) 첫 식을 중근이 아닌 두 근짜리로 바꾸면 어느 근을 쓸지 분기가 생겨 I-MI·★3."
```

```yaml
- id: GN-M31-129-09
  page: 129
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    3(2x-1)^2=9 를 풀기(5지선다).
  category: "양변 3 으로 나누기 → 제곱근 → 일차식 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 이용한 이차방정식의 풀이((ax+b)^2=q)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2x-1)^2=3 → 2x-1=±√3 → x=(1±√3)/2. 괄호 안이 2x-1 이라 마지막에 2 로 나누는 것을 빼먹는 실수가 선택지로 깔려 있다(T-표기).
    도구 한 겹·통찰 없음이지만 정리 단계가 셋이라 M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(2x-1)^2=3 → 2x-1=±√3 → x=(1±√3)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/129-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 계수(3)·괄호 안 일차식·우변을 바꿀 수 있다. 제약: 우변을 앞 계수로 나눈 값이 0 이상이어야 하고, 무리수 해가 나오도록 완전제곱수가 아닌 수를 남긴다."
    creative: "(1) 우변을 음수로 두어 「해가 없다」를 답으로 만들면 조건 판정이 생겨 ★2~3 (2) 우변에 문자를 넣어 근을 가질 조건을 묻기(129-10 골조·★2) (3) 해를 주고 우변 상수를 역으로 구하게 하면 131-20 골조·★3."
```

```yaml
- id: GN-M31-129-10
  page: 129
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    (x+1/2)^2-k+3=0 이 근을 갖도록 하는 상수 k 의 값으로 알맞지 않은 것 고르기.
  category: "(x+p)^2=k-3 꼴로 정리 → 근을 가질 조건 k-3 ≥ 0 → 위배하는 선택지"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「근을 갖는다」를 「제곱식의 우변이 0 이상」이라는 부등식 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "(x+p)^2=q 가 근을 가질 조건(q ≥ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 옮겨 (x+1/2)^2=k-3 으로 만든 뒤 k-3 ≥ 0 을 읽어 내는 한 겹이 전부다. 계산은 없고 판단만 있다.
    「알맞지 않은 것」이라 부정 발문 함정이 있으며 k=3(중근)도 근을 갖는다는 경계 처리가 요점. 통찰 1개(EQV d1) → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(x+1/2)^2=k-3 → 근 존재 ⟺ k ≥ 3 → 이를 어기는 k 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/129-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 상수(1/2)와 상수항(3)을 바꿀 수 있다. 제약: 경계값 k=3 이 선택지에 들어가도록 두고, 정답이 되는 선택지는 하나만 경계 아래에 둔다."
    creative: "(1) 「중근을 갖도록 하는 k」로 바꾸면 등식 조건·★2 (2) 「해가 없도록 하는 k 의 값의 범위」로 바꾸면 부등식 답·★3 (3) k 자리에 일차식(2k-1)을 넣으면 부등식 풀이가 한 겹 추가되어 ★3."
```

```yaml
- id: GN-M31-129-11
  page: 129
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "기본 문제"
  summary: |
    2x^2-8x+5=0 을 (x+a)^2=b 꼴로 고칠 때 ab 의 값.
  category: "이차항 계수로 나누기 → 상수 이항 → 완전제곱 만들기 → a, b 읽기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식으로 고치기 — (x+a)^2=b 의 a, b"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱식 변형의 4단계 절차를 그대로 수행하고 a, b 를 읽어 곱한다. 순서가 교과서에 고정돼 있어 통찰은 없다.
    (x-2)^2 이므로 a=-2 라는 부호 처리가 유일한 함정(T-부호). M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "x^2-4x=-5/2 → (x-2)^2=3/2 → a=-2, b=3/2 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/129-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 x 계수·상수항을 바꾼다. 제약: x 계수를 이차항 계수로 나눈 값이 짝수여야 a 가 정수로 떨어지고, ab 가 선택지로 쓸 정수가 되도록 b 를 맞춘다."
    creative: "(1) ab 대신 a+b 나 b-a 를 묻기(★2 유지) (2) 변형 결과의 일부만 주고 원래 계수를 역으로 구하게 하면 131-21 골조·★3 (3) 완전제곱까지 간 뒤 해까지 구하게 하면 133-u6 골조·★3."
```

```yaml
- id: GN-M31-129-12
  page: 129
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "기본 문제"
  summary: |
    x^2+6x=k 의 해가 x=-3±√13 일 때 상수 k 구하기.
  category: "좌변 완전제곱 → (x+3)^2=k+9 → 주어진 해와 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 주어질 때 상수 구하기(완전제곱 역이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+3)^2=k+9 로 고친 뒤 주어진 해에서 근호 안이 13 임을 읽어 k+9=13 으로 맞춘다. 해를 직접 대입해도 같은 답이 나오는 두 갈래가 있으나 어느 쪽도 특별한 착안은 아니다.
    완전제곱 절차 + 계수 비교 두 겹, 통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "(x+3)^2=k+9 → 해의 근호 안 13 과 비교 → k=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/129-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수(6)와 해의 근호 안 수를 바꿀 수 있다. 제약: x 계수는 짝수라야 완전제곱이 정수 꼴이 되고, 해의 꼴 -p±√q 의 p 는 x 계수의 절반과 일치해야 한다."
    creative: "(1) 해를 x=(-3±√13)/2 처럼 분모가 있는 꼴로 주고 이차항 계수까지 미지수로 두면 ★3 (2) k 대신 x 계수를 미지수로 두면 두 값이 나와 기각 판단이 생김(★3) (3) 「해가 없도록 하는 k 의 범위」로 바꾸면 부등식·★3."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M31-130-13
  page: 130
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    (2x+1)^2=ax^2+3x-2 가 x 에 대한 이차방정식이 되도록 하는 상수 a 의 조건 구하기.
  category: "전개·이항 → 이차항 계수 (4-a) ≠ 0 → a 의 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이차방정식이 된다」를 「정리한 식의 이차항 계수 ≠ 0」으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식이 될 조건(이차항 계수 ≠ 0)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전개해 한쪽으로 모으면 (4-a)x^2+x+3=0 이고 조건은 4-a ≠ 0 한 줄이다. 답이 등식이 아니라 「≠」 조건이라는 점이 학생에게 낯설다.
    도구는 128-01 과 같고 문자만 들어갔다. 발전 문제 출발점 ★3 을 유지했으나 체감은 ★2 쪽 — [분류 이슈] 로 기록.
  tier: star_3
  mechanism_primary: "전개·이항 → (4-a)x^2+x+3=0 → 4-a ≠ 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\ne4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/130-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 제곱식의 계수와 우변 계수를 바꾼다. 제약: 좌변 전개의 이차항 계수와 우변의 a 가 만나 (상수-a) 꼴이 되어야 하고, 일차항까지 상쇄되면 조건이 두 개가 되므로 주의."
    creative: "(1) 우변 일차항까지 상쇄되게 만들어 「a ≠ …이고 …」 두 조건을 요구하면 ★3~4 (2) 「일차방정식이 되도록 하는 a」로 뒤집으면 a=4 등식 답·★2 (3) a 에 조건을 준 뒤 해까지 구하게 하면 두 겹·★3."
```

```yaml
- id: GN-M31-130-14
  page: 130
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "발전 문제"
  summary: |
    x^2-4x+1=0 의 한 근이 x=α 일 때 α^2+1/α^2 의 값.
  category: "근 대입식을 α 로 나누기 → α+1/α → 곱셈 공식으로 제곱 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "α^2-4α+1=0 을 α(≠0)로 나누어 α+1/α=4 라는 쓸 수 있는 꼴로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "한 근 α 를 이용한 식의 값(α+1/α 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 직접 구하면 무리수라 계산이 막히고, 대입식을 α 로 나누는 착안이 있어야 α+1/α=4 가 나온다. 그다음은 (α+1/α)^2-2 라는 표준 곱셈 공식.
    착안 1개(EQV d2)·M_total 7 → 발전 문제 출발점 ★3 유지. 중3 에서 이 단원의 대표 되묻기라 「꼭나와」.
  tier: star_3
  mechanism_primary: "α^2-4α+1=0 을 α 로 나누기 → α+1/α=4 → 제곱하고 2 빼기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/130-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수(-4)를 바꿀 수 있다. 제약: 상수항은 1 이어야 α 로 나눴을 때 1/α 가 나오고, 답이 정수가 되려면 x 계수의 제곱에서 2 를 뺀 값을 쓴다. 상수항이 -1 이면 α-1/α 꼴이 되어 부호가 달라진다."
    creative: "(1) α^2+1/α^2 대신 α-1/α 나 α^3+1/α^3 을 묻기(곱셈 공식 한 겹 추가·★3~4) (2) 상수항을 -1 로 바꿔 부호 처리를 시키면 함정 1개 추가 (3) α^2=4α-1 로 차수를 낮춰 대입하는 갈래를 함께 열어 두면 전략 선택(I-SC)·★4."
```

```yaml
- id: GN-M31-130-15
  page: 130
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    x^2+2x=8x+27 의 근이 x=a 또는 x=b(a>b)일 때 ax^2+bx-2=0 의 두 근의 차.
  category: "첫 식 정리·인수분해 → a, b 확정 → 새 방정식 인수분해 → 두 근의 차"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근을 계수로 옮긴 이차방정식 — 두 근의 차"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    같은 도구(인수분해)를 두 번 쓰는 두 겹 구조다. 첫 식에서 얻은 두 근을 a>b 로 정렬해 계수 자리에 옮기는 것이 유일한 분기점이고, 정렬을 뒤집으면 두 번째 식이 전혀 다른 방정식이 된다.
    통찰은 없으나 두 겹 + 대소 함정으로 M_total 6 → 발전 문제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x^2-6x-27=0 → a=9, b=-3 → 9x^2-3x-2=0 → 두 근의 차"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/130-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 방정식의 두 근(9, -3)을 먼저 정하고 그에 맞춰 계수를 만든다. 제약: a, b 를 계수로 쓴 두 번째 식이 인수분해되어야 하므로 (a, b) 조합을 십자셈이 되는 쌍으로 골라야 한다."
    creative: "(1) 두 근의 차 대신 곱·합을 묻기(★3 유지) (2) 두 번째 식의 상수항도 a, b 로 만들면 계수 배치 경우가 늘어 ★3~4 (3) a>b 조건을 빼면 두 경우를 모두 따져야 해 I-MI 추가·★4."
```

```yaml
- id: GN-M31-130-16
  page: 130
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "발전 문제"
  summary: |
    (a-1)x^2+(a^2+1)x-4a+2=0 의 한 근이 x=1 이고 다른 한 근이 x=b 일 때 a-b 의 값.
  category: "x=1 대입 → a 의 이차방정식 → 이차방정식 조건으로 a=1 기각 → 원식 풀어 b"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a=1, a=2 두 후보 중 a=1 은 이차항 계수가 0 이 되어 이차방정식이 아니므로 기각"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "한 근과 이차항 계수 조건(후보 기각) — 다른 한 근"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=1 을 대입하면 a^2-3a+2=0 이 되어 후보가 둘 나오고, a ≠ 1 이라는 이차방정식 조건으로 하나를 기각해야 한다. 이 기각이 없으면 틀린 답에 도달한다(I-VF).
    기각 후에는 x^2+5x-6=0 을 풀어 b=-6 을 얻는 표준 절차. 통찰 1개(d2)·M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "x=1 대입 → a^2-3a+2=0 → a ≠ 1 로 a=2 → x^2+5x-6=0 → b=-6 → a-b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/130-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수를 (a-k) 꼴로 두고 대입 결과가 (a-k)(a-m)=0 이 되도록 나머지 계수를 맞춘다. 제약: 기각되는 후보가 반드시 이차항 계수를 0 으로 만드는 값이어야 하고, 남은 a 로 얻는 방정식이 인수분해되어야 한다."
    creative: "(1) 기각 조건을 빼면 단순 대입 문제로 떨어져 ★2 (2) 주어진 근을 x=-1 이나 분수로 바꾸면 계산만 무거워짐(★ 변화 없음) (3) 「다른 한 근이 정수가 되도록」 조건을 더하면 기각이 두 겹이 되어 ★4."
```

```yaml
- id: GN-M31-130-17
  page: 130
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    x^2+ax-14=0 과 7x^2+12x+b=0 의 공통인 근이 x=-2 일 때, 각각의 공통이 아닌 근 p, q 에 대한 pq 의 값.
  category: "공통근 대입으로 a, b → 각각 인수분해 → 나머지 근 둘의 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통인 근이 주어질 때 미지수와 나머지 근"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    공통근을 양쪽에 대입해 a, b 를 각각 구한 뒤 두 식을 풀어 남는 근을 고른다. 128-06 의 역방향이지만 절차는 정해져 있다.
    두 번째 식이 7x^2 꼴이라 십자셈이 필요해 계산 부담이 있고, 「공통이 아닌 근」을 골라내는 것이 함정. 통찰 없음·M_total 7 → 발전 문제 ★3 유지.
  tier: star_3
  mechanism_primary: "x=-2 대입 → a=-5, b=-4 → (x-7)(x+2)=0, (7x-2)(x+2)=0 → p=7, q=2/7 → pq"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/130-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통근과 두 식의 이차항 계수·상수항을 바꾼다. 제약: 두 식 모두 공통근을 인수로 가지면서 나머지 근이 유리수여야 하고, pq 가 선택지로 쓸 정수가 되도록 7 과 2/7 처럼 역수 관계를 만들면 깔끔하다."
    creative: "(1) pq 대신 p+q 를 묻기(★3 유지) (2) 공통근을 주지 않고 「공통인 근을 가질 때의 a, b 관계」를 묻게 하면 ★4 (3) 한 식에만 미지수를 두고 다른 식은 완전히 주면 ★2 로 내려감."
```

```yaml
- id: GN-M31-130-18
  page: 130
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    x^2+5k+1=8x 가 중근을 가질 때, x^2+kx+2=0 과 3x^2-2x+1-2k=0 의 공통인 근 구하기.
  category: "정리 후 중근 조건으로 k → 두 식에 대입·인수분해 → 공통 근"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「중근을 갖는다」를 「상수항 = (x 계수의 절반)의 제곱」 등식으로 옮겨 k 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중근 조건으로 상수 결정 후 공통인 근"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 개의 방정식을 차례로 처리하는 이 범위에서 가장 긴 절차 문항이다. 먼저 x^2-8x+(5k+1)=0 으로 정리해 중근 조건에서 k=3 을 얻고, 그 k 를 두 식에 넣어 각각 인수분해한 뒤 겹치는 근을 고른다.
    착안은 중근 조건 하나뿐이고 나머지는 반복 절차. 통찰 1개·M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "x^2-8x+(5k+1)=0 중근 → k=3 → (x+1)(x+2)=0, (3x-5)(x+1)=0 → 공통 x=-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$x=-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/130-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 식의 x 계수(8)와 k 가 붙는 자리를 바꾼다. 제약: 중근 조건에서 k 가 정수로 떨어져야 하고, 그 k 를 넣은 두 식이 모두 인수분해되며 공통 인수를 하나만 가져야 한다."
    creative: "(1) 중근 조건 대신 「한 근이 x=2」 같은 대입 조건으로 바꾸면 ★2~3 (2) 첫 식이 두 근을 갖게 해 k 가 두 값이 되면 분기·기각이 생겨 ★4 (3) 공통근 대신 「공통인 근을 갖지 않음을 보이시오」로 바꾸면 서술형·★4."
```

```yaml
- id: GN-M31-131-19
  page: 131
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "발전 문제"
  summary: |
    x^2+(m-4)x+3m-5=0 이 중근을 갖도록 하는 상수 m 의 값을 모두 고르기(정답 2개).
  category: "중근 조건 → m 에 대한 이차방정식 → 두 해 모두 채택"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중근 조건 3m-5=((m-4)/2)^2 을 세워 x 의 문제를 m 의 이차방정식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "중근을 가질 조건 — 상수의 값 모두 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수가 두 겹(x 의 방정식인데 구하는 것은 m)이라는 점이 이 문항의 핵심이고, 중근 조건을 세우면 m 에 대한 이차방정식 m^2-20m+36=0 이 나온다.
    두 해가 모두 답이므로 기각 판단은 없다. 통찰 1개(EQV d2)·M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "3m-5=((m-4)/2)^2 → m^2-20m+36=0 → m=2 또는 18"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/131-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수와 상수항의 m 계수를 바꾼다. 제약: 전개 후 m 의 이차방정식이 인수분해되어야 하고, 정답을 2 개로 유지하려면 두 근이 모두 실수·정수로 떨어지게 맞춘다."
    creative: "(1) 「m 이 자연수」 조건을 붙여 한쪽을 기각시키면 I-VF 추가·★4 (2) 중근 대신 「x=1 을 근으로 갖는」으로 바꾸면 m 의 일차방정식·★2 (3) 구한 m 으로 중근의 값까지 묻게 하면 두 겹·★3~4."
```

```yaml
- id: GN-M31-131-20
  page: 131
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    16(x-3)^2=k 의 두 근의 곱이 5 일 때 상수 k 의 값.
  category: "제곱근으로 두 근을 k 로 표현 → 합·차 곱으로 곱 계산 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 근을 3±(√k)/4 로 두고 곱을 (합-차) 꼴 9-k/16 으로 옮겨 k 의 일차방정식으로 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제곱근 꼴 해의 곱 조건으로 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 구하면 무리수가 남지만 곱에서는 근호가 사라진다는 것을 알아야 k 의 방정식이 선다. 근호를 남긴 채 (3+t)(3-t)=9-t^2 로 처리하는 것이 요점.
    k ≥ 0 이라는 존재 조건도 암묵적으로 필요하다. 통찰 1개(EQV d2)·M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "(x-3)^2=k/16 → 두 근 3±(√k)/4 → 곱 9-k/16=5 → k=64"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$64$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/131-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 계수(16)·괄호 안 상수(3)·두 근의 곱을 바꾼다. 제약: 곱이 (상수)^2-k/(앞 계수)이므로 k 가 양수로 떨어지도록 곱을 (상수)^2 보다 작게 잡는다."
    creative: "(1) 곱 대신 「두 근의 차가 2」로 바꾸면 근호가 남아 다른 식이 됨(★3) (2) 「두 근이 모두 정수」 조건으로 바꾸면 완전제곱수 판정이 생겨 131-24 골조·★4 (3) 두 근의 합을 묻는 문제로 뒤집으면 k 와 무관해져 함정형 ★2."
```

```yaml
- id: GN-M31-131-21
  page: 131
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "발전 문제"
  summary: |
    3x^2+9x+A=0 을 (x+B)^2=7/12 로 고쳐 풀었더니 해가 x=(C±√21)/6 이었을 때 A+2B+C 의 값.
  category: "완전제곱 변형을 끝까지 수행 → A·B·C 를 주어진 꼴과 계수 비교"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식 변형의 A·B·C 역대조"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    절차는 129-11 과 같지만 분수 계수가 끝까지 따라와 계산 부담이 이 범위에서 가장 크다. B=3/2 를 먼저 읽고 우변 비교로 A 를, 해의 분모를 6 으로 맞추며 C 를 얻는다.
    √(7/12)=√21/6 로 분모를 유리화하는 지점이 실수 빈발 구간. 통찰은 없고 계산 마찰뿐이라 ★ 는 올리지 않고 발전 문제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x^2+3x+A/3=0 → (x+3/2)^2=9/4-A/3=7/12 → A, B → 해 (-9±√21)/6 → C"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/131-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수(3)와 x 계수(9)를 바꾸면 B 와 우변 분수가 함께 바뀐다. 제약: 우변이 양수여야 하고, 근호 안 분수를 유리화했을 때 해의 분모가 정수로 떨어지도록 계수를 고른다. A 는 유리수여야 한다."
    creative: "(1) A·B·C 중 하나만 묻고 나머지를 주면 ★2 (2) 우변 분수를 주지 않고 「해가 (C±√21)/6」만 주면 역방향 강도가 올라가 ★4 (3) 완전제곱 변형 과정을 서술하게 하면 서술형 7 점 문항으로 이동."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M31-131-22
  page: 131
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    A=x^2-3x-18, B=x^2-2x-15 에 대하여 3A=2B 이고 B ≠ 0 을 만족시키는 x 의 값.
  category: "3A=2B 를 정리해 이차방정식 → 두 해 중 B=0 이 되는 해 기각"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=8, x=-3 두 해 중 x=-3 은 B=0 이 되어 조건 위배로 기각"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 식의 등식 조건 + 제외 조건(B ≠ 0) 검증"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    3A=2B 를 전개·정리하면 x^2-5x-24=0 으로 평범하지만, B 를 인수분해해 보면 x=-3 이 B 의 근이기도 해서 기각해야 한다. 검증을 건너뛰면 해가 둘이라고 답하게 되는 전형적 I-VF 구조.
    도구 자체는 발전 문제 수준이라 체감은 ★3 쪽이지만 실력 UP 구역 출발점 ★4 를 유지하고 [분류 이슈] 로 기록한다.
  tier: star_4
  mechanism_primary: "3A=2B → x^2-5x-24=0 → x=8, -3 → B=(x-5)(x+3) 로 x=-3 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/131-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 상수항과 계수, 그리고 3A=2B 의 배수쌍을 바꿀 수 있다. 제약: 정리한 이차방정식이 인수분해되어야 하고, 그 두 근 중 정확히 하나가 B 의 근이어야 기각이 살아 있다."
    creative: "(1) 조건을 B ≠ 0 대신 「A 와 B 의 값이 같다」로 바꾸면 기각이 사라져 ★3 (2) A/B 를 분수식으로 제시해 분모 ≠ 0 조건을 학생이 스스로 세우게 하면 ★4~5 (3) 조건을 만족시키는 x 가 없음을 보이게 하면 서술형·★4."
```

```yaml
- id: GN-M31-131-23
  page: 131
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    일차함수 y=-(a/2)x+2 의 그래프가 점 (a+4, a^2)을 지나고 제4사분면을 지나지 않을 때 상수 a 의 값.
  category: "점을 대입해 a 의 이차방정식 → 사분면 조건을 기울기 부호로 옮겨 후보 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "일차함수 단원의 「y 절편이 양수이고 제4사분면을 지나지 않음 ⟺ 기울기 ≥ 0」을 가져와 a 의 부호 조건을 세움"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대입에서 얻은 두 후보 중 부호 조건을 어기는 쪽을 기각"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "일차함수 그래프 통과·사분면 조건 → 이차방정식(단원 결합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    점을 대입하면 3a^2+4a-4=0 이라는 이차방정식이 서고 후보가 둘 나온다. 답을 가르는 것은 계산이 아니라 「y 절편이 2 로 양수인 직선이 제4사분면을 지나지 않으려면 기울기가 음수가 아니어야 한다」는 그래프 조건이며, 이는 함수 단원 도구다(I-XU).
    단원 경계 결합 + 후보 기각 두 겹·M_total 9 → 실력 UP 출발점 ★4 유지(통찰 2개라 +1 후보이나 ★5 는 통찰 3개 이상에서만).
  tier: star_4
  mechanism_primary: "a^2=-(a/2)(a+4)+2 → 3a^2+4a-4=0 → a=2/3, -2 → 기울기 -a/2 ≥ 0 로 a=-2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/131-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기와 y 절편, 지나는 점의 좌표에 들어가는 a 의 배치를 바꾼다. 제약: 대입 결과가 a 의 이차방정식이면서 인수분해되어야 하고, 두 후보의 부호가 서로 달라야 사분면 조건이 정확히 하나를 남긴다."
    creative: "(1) 「제2사분면을 지나지 않을 때」로 바꾸면 y 절편 조건까지 따져야 해 ★4~5 (2) 사분면 조건을 빼면 단순 대입·인수분해로 ★3 (3) 점의 좌표를 (a, a^2-4) 처럼 두어 두 후보가 모두 조건을 만족하게 하면 답이 둘인 I-MI 형."
```

```yaml
- id: GN-M31-131-24
  page: 131
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 UP"
  summary: |
    x^2-4x+a-3=0 의 해가 모두 정수가 되도록 하는 모든 자연수 a 의 값의 합.
  category: "완전제곱 변형 → (x-2)^2=7-a → 7-a 가 완전제곱수인 자연수 a 만 채택 후 합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「해가 모두 정수」를 「(x-2)^2=7-a 에서 7-a 가 0 이상의 완전제곱수」라는 정수 조건으로 옮김"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "완전제곱수 후보 0, 1, 4, 9 … 중 a 가 자연수가 되는 것만 남기고 나머지를 기각"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "해가 모두 정수일 조건(우변이 완전제곱수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 범위에서 가장 깊은 변환이다. 근의 공식 없이 완전제곱으로 옮긴 뒤 「정수해」를 「7-a 가 완전제곱수」로 바꿔 읽어야 하고(EQV d3), 이어서 a 가 자연수라는 제한으로 후보를 걸러야 한다(VF d2).
    통찰 2개·depth 3 이라 +1 후보이지만 ★5 게이트(통찰 3개 이상)를 넘지 못해 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "(x-2)^2=7-a → 7-a ∈ {0, 1, 4} (자연수 a) → a=7, 6, 3 → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/131-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수(-4)와 상수항의 a 배치를 바꾼다. 제약: x 계수는 짝수여야 (x-p)^2 가 정수 꼴이 되고, 남는 상수(여기서는 7)가 작아야 완전제곱수 후보가 몇 개로 끝난다. 후보 수가 답의 난이도를 결정한다."
    creative: "(1) 「해가 모두 유리수」로 바꾸면 조건이 같아 보이지만 판정 문장이 달라져 서술형으로 좋음(★4) (2) 「정수해를 갖도록 하는 a 의 최댓값」으로 바꾸면 합 계산이 빠져 ★3~4 (3) 이차항 계수를 1 이 아닌 수로 두면 완전제곱 변형에 분수가 들어와 판정이 어려워지고 ★5 근처."
```

### 서술형 대비 문제

```yaml
- id: GN-M31-132-e1
  page: 132
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    x^2+5x-6=0 의 두 근 중 큰 근이 3x^2+ax-2=0 의 한 근일 때 상수 a 의 값. [6점]
  category: "인수분해로 두 근 → 큰 근 선택 → 두 번째 식에 대입 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근 중 큰(작은) 근이 다른 방정식의 근 — 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (x+6)(x-1)=0 에서 큰 근 x=1 을 고르고 대입하면 a 가 바로 나온다. 서술형 배점이 붙은 만큼 근을 구하는 단계와 대입 단계를 나눠 쓰는 것이 채점 포인트다.
    「큰 근」을 음수 쪽으로 착각하는 것이 유일한 함정. 통찰 없음·M_total 6 이고 도구가 한 겹이라 체감은 ★2 — [분류 이슈] 로 기록하고 서술형 구역 출발점 ★3 은 유지.
  tier: star_3
  mechanism_primary: "(x+6)(x-1)=0 → 큰 근 x=1 → 3+a-2=0 → a=-1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$-1$"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/132-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 식의 두 근과 두 번째 식의 이차항 계수·상수항을 바꾼다. 제약: 두 근의 부호가 갈려야 「큰 근」 선택이 의미를 갖고, 대입 후 a 가 정수로 떨어지게 상수항을 맞춘다."
    creative: "(1) 「작은 근」으로 바꾸면 132-u1 (2) a 를 구한 뒤 두 번째 식의 다른 근까지 묻게 하면 세 겹·★3~4(133-u4 골조) (3) 첫 식이 중근을 갖게 하면 선택 단계가 사라져 ★2."
```

```yaml
- id: GN-M31-132-e2
  page: 132
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    x^2-4x+k-2=0 이 중근을 가질 때, 2(x+k)^2=14 의 두 근의 곱. [7점]
  category: "중근 조건으로 k → 제곱근으로 두 근 → 합·차 곱으로 곱 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「중근을 갖는다」를 상수항 = (x 계수의 절반)의 제곱 등식으로 옮겨 k 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중근 조건 → 제곱근 풀이의 두 근의 곱(합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 겹 구조의 전형이다. 앞은 중근 조건 k-2=4, 뒤는 (x+6)^2=7 에서 x=-6±√7 을 얻어 곱을 36-7 로 계산한다.
    두 근을 각각 곱하지 않고 (합-차) 꼴로 묶는 것이 계산을 줄이는 요령. 통찰 1개·M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "중근 조건 → k=6 → (x+6)^2=7 → 두 근 -6±√7 → 곱 36-7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$29$"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/132-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 식의 x 계수와 두 번째 식의 앞 계수·우변을 바꾼다. 제약: 중근 조건에서 k 가 정수로 떨어져야 하고, 두 번째 식의 우변을 앞 계수로 나눈 값이 양수여야 두 근이 존재한다."
    creative: "(1) 곱 대신 합을 묻기(132-u2 · 근호가 사라지는 지점이 달라짐) (2) 첫 식이 중근을 갖지 않게 하고 「두 근의 합이 4」 같은 조건으로 바꾸면 ★3 유지 (3) 두 번째 식의 우변을 음수로 두어 「해가 없음」을 서술하게 하면 조건 판정형 ★3~4."
```

```yaml
- id: GN-M31-132-u1
  page: 132
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    10x^2-7x+1=0 의 두 근 중 작은 근이 5x^2-16x+a=0 의 한 근일 때 상수 a 의 값. [6점]
  category: "십자셈으로 두 근 → 작은 근 선택 → 대입해 a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근 중 큰(작은) 근이 다른 방정식의 근 — 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    132-e1 과 같은 골조이나 두 근이 1/5, 1/2 로 모두 분수여서 대소 비교와 대입 계산이 한 단계씩 무겁다(십자셈 + 분수 제곱).
    통찰은 없고 계산 마찰만 늘었으나 M_total 7 이라 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "(5x-1)(2x-1)=0 → 작은 근 1/5 → 대입 → a=3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/132-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 식을 십자셈이 되는 다른 계수쌍으로, 두 번째 식의 계수를 바꾼다. 제약: 두 근이 서로 다른 분수여야 「작은 근」이 의미를 갖고, 대입 후 a 가 정수로 떨어지도록 이차항·일차항 계수를 맞춘다."
    creative: "(1) 「큰 근」으로 바꾸면 132-e1 (2) 두 근의 대소를 묻지 않고 「두 근이 모두 다른 식의 근」으로 바꾸면 두 조건 연립·★4 (3) a 를 구한 뒤 두 번째 식의 나머지 근까지 묻게 하면 세 겹·★3~4."
```

```yaml
- id: GN-M31-132-u2
  page: 132
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    x^2+kx+25=0 이 중근을 가질 때(k는 양수), 3-(x+k)^2=0 의 두 근의 합. [7점]
  category: "중근 조건으로 k=±10 → 양수 조건으로 k 결정 → 제곱근 풀이 → 두 근의 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중근 조건 25=(k/2)^2 을 세워 k 를 결정하고 양수 조건으로 부호를 고름"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중근 조건(부호 선택) → 제곱근 풀이의 두 근의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중근 조건에서 k 가 ±10 두 값으로 나오고 「k 는 양수」 단서로 하나를 고른다. 이 부호 처리가 e2 에 없던 함정이다(T-부호).
    뒤는 (x+10)^2=3 에서 두 근의 합이 -20 으로 근호가 상쇄되는 표준 마무리. 통찰 1개·M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "25=(k/2)^2 → k=10(양수) → (x+10)^2=3 → 두 근의 합 -20"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/132-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(25)을 다른 완전제곱수로 바꾸면 k 가 정수로 유지된다. 제약: 상수항은 완전제곱수여야 하고, 두 번째 식의 우변은 양수여야 두 근이 존재한다. 합을 물을 때는 근호 안 수를 자유롭게 둘 수 있다."
    creative: "(1) 「k 는 음수」로 바꾸면 답의 부호만 뒤집힘(★3 유지) (2) 부호 단서를 없애면 답이 두 개가 되어 I-MI·★4 (3) 합 대신 곱을 물으면 근호 안 수가 답에 남아 132-e2 골조."
```

```yaml
- id: GN-M31-133-u3
  page: 133
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    x^2+3x-1=0 의 한 근이 x=p, x^2-5x-2=0 의 한 근이 x=q 일 때 (2p^2+6p-5)(q^2-5q+2) 의 값. [7점]
  category: "근 대입식을 덩어리째(p^2+3p, q^2-5q) 읽어 식에 통째로 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "p^2+3p=1 처럼 대입식을 덩어리로 정리해 2p^2+6p-5 를 2(p^2+3p)-5 로 묶어 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근의 조건식을 통째로 대입하는 식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근이 무리수라 직접 구하면 계산이 막히고, 대입식을 p^2+3p=1 · q^2-5q=2 라는 덩어리로 만들어 그대로 갈아 끼우는 착안이 필요하다(EQV d2).
    두 인수가 각각 계수 2배·부호 뒤집기로 위장돼 있어 덩어리를 알아보는 눈이 핵심. 통찰 1개·M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "p^2+3p=1, q^2-5q=2 → 2(p^2+3p)-5 와 (q^2-5q)+2 로 묶어 대입 → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/133-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 방정식의 계수와 물어보는 식의 배수·상수항을 바꾼다. 제약: 물어보는 식의 이차·일차항 비가 원 방정식과 같아야 덩어리로 묶이고, 근이 무리수여야 직접 계산 갈래가 막힌다."
    creative: "(1) 한쪽을 p^3 항까지 올려 차수를 낮추는 단계를 추가하면 ★4 (2) 두 식의 곱 대신 합으로 묻기(★3 유지) (3) 근을 공통으로 두고 p=q 로 만들면 조건이 겹쳐 다른 유형이 됨."
```

```yaml
- id: GN-M31-133-u4
  page: 133
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    2x^2+ax+2=0 의 한 근이 x=-1/2 이고 다른 한 근이 3x^2+2x+b=0 의 근일 때 a-b 의 값. [7점]
  category: "근 대입으로 a → 인수분해로 다른 근 → 두 번째 식에 대입해 b"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 근 → 다른 근 → 두 번째 방정식의 상수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대입 → 인수분해 → 다시 대입의 세 겹 절차로, 이 범위 서술형 중 단계 수가 가장 많다. 분수 근을 대입하는 첫 계산과 부호 처리만 조심하면 막히는 곳은 없다.
    통찰은 없고 단계 수와 부호 부담뿐. M_total 8 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x=-1/2 대입 → a=5 → (2x+1)(x+2)=0 → 다른 근 -2 → 대입 → b=-8 → a-b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$13$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/133-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근(-1/2)과 두 식의 이차항 계수를 바꾼다. 제약: 첫 식이 주어진 근을 가지도록 상수항을 맞추고 다른 근이 정수로 떨어지게, 두 번째 식에서 b 도 정수가 되게 한다."
    creative: "(1) a-b 대신 ab 를 묻기(★3 유지) (2) 두 번째 식의 나머지 근까지 묻게 하면 네 겹·★4 (3) 「다른 한 근이 두 번째 식의 중근」으로 바꾸면 중근 조건이 얹혀 ★4."
```

```yaml
- id: GN-M31-133-u5
  page: 133
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    x^2+(a+2)x+2a=0 에서 x 의 계수와 상수항을 바꾼 방정식의 한 근이 x=-1 일 때, 처음 이차방정식의 해. [7점]
  category: "계수를 바꾼 식을 세워 대입 → a → 처음 식으로 돌아가 인수분해"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「계수와 상수항을 바꾸어 놓은 방정식」을 x^2+2ax+(a+2)=0 으로 직접 세워야 조건을 쓸 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "계수를 바꾸어 놓은 이차방정식(잘못 본 방정식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 걸린 식과 답을 묻는 식이 서로 다르다는 것이 이 유형의 전부다. 바꾼 식을 세워 x=-1 을 대입하면 a=3 이 나오고, 그 a 를 처음 식에 넣어 x^2+5x+6=0 을 풀어야 한다.
    어느 식에 대입할지 헷갈리는 것이 함정(T-표기). 통찰 1개(EQV d2)·M_total 8 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "바꾼 식 x^2+2ax+(a+2)=0 에 x=-1 대입 → a=3 → 처음 식 (x+2)(x+3)=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$x=-3$ 또는 $x=-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/133-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 가 들어가는 두 자리의 식((a+2), 2a)과 주어진 근을 바꾼다. 제약: 바꾼 식에 근을 대입했을 때 a 의 일차방정식이 되어야 하고(이차가 되면 기각 판단이 추가됨), 처음 식이 인수분해되어야 한다."
    creative: "(1) 「상수항을 잘못 보고 풀었더니 해가 …이었다」 식의 오독 설정으로 바꾸면 같은 골조·★3 (2) 바꾼 식이 중근을 갖는 조건으로 주면 a 가 두 값이 되어 기각 판단 추가·★4 (3) 처음 식의 두 근의 합만 묻게 하면 ★2~3."
```

```yaml
- id: GN-M31-133-u6
  page: 133
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    5x^2-10x=2x-3 을 완전제곱식을 이용하여 풀기. [6점]
  category: "이항·정리 → 이차항 계수로 나누기 → 완전제곱 → 제곱근"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    풀이법이 발문에 지정돼 있어 판단할 것은 없고, 5 로 나눈 뒤 12/5 의 절반인 6/5 를 제곱해 더하는 분수 계산을 끝까지 끌고 가는 것이 전부다.
    근호 안이 21/25 라 √21/5 로 정리하는 마지막 단계가 실수 지점. 통찰 없음이지만 분수 다단계라 Mₖ 3·M_total 7 → 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "5x^2-12x+3=0 → x^2-(12/5)x=-3/5 → (x-6/5)^2=21/25 → x=(6±√21)/5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$x=\dfrac{6\pm\sqrt{21}}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m31/items/133-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변의 계수를 바꾸되 정리한 뒤의 이차항 계수·일차항 계수로 난이도가 정해진다. 제약: 근호 안이 완전제곱수가 되면 유리수 해가 되어 이 유형의 목적(무리수 해 정리)이 사라지므로 피한다."
    creative: "(1) 이차항 계수를 1 로 만들어 분수를 없애면 ★2 (2) 풀이법 지정을 빼면 인수분해·완전제곱 갈래 선택이 생겨 I-SC·★4 (3) 해를 주고 원래 계수를 역으로 묻게 하면 131-21 골조·★3."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 1 · ★2 11 · ★3 17 · ★4 3 · ★5 0
- 통찰형 14 · 절차형 18 · premium 0
- 통찰 라벨 16개: I-EQV 11 · I-VF 4 · I-XU 1 (depth 3 은 131-24 하나)
- 구역별: STEP 1 기본 12문(★1 1 · ★2 11) · STEP 2 발전 9문(★3 9) · STEP 3 실력 UP 3문(★4 3) · 서술형 대비 8문(★3 8)
- type_hint 상위: 「한 근·공통근 대입으로 미지수 결정(+다른 근)」 8 · 「완전제곱식·제곱근으로 풀기와 그 계수 역대조」 6 · 「중근을 가질 조건」 5 · 「인수분해로 풀기·AB=0 에서 해 읽기」 3 · 「이차방정식의 뜻·될 조건」 2
- 그림: 없음(0문) · 선택형 17 · 단답형 15(서술형 대비 8 포함)
- 「꼭나와」 태그 6문(128-02 · 128-06 · 129-07 · 129-11 · 130-14 · 130-16 · 131-19 — 태그는 빈출 표시로만 읽고 ★ 에 반영하지 않음)

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않고 구역 출발점을 유지했다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-130-13 | STEP 2 발전 문제이지만 전개 후 「이차항 계수 ≠ 0」 한 줄이 전부 — 128-01 과 같은 도구에 문자만 들어간 꼴. 라벨은 ★3 유지 | ★2 / ★3 |
| GN-M31-131-22 | STEP 3 실력 UP 이지만 도구는 이항·인수분해 한 겹 + 제외 조건 기각 하나(M_total 7) — 130-16 과 같은 무게. 라벨은 ★4 유지 | ★3 / ★4 |
| GN-M31-131-23 | 일차함수 그래프·사분면 조건이 풀이의 절반이라 이차방정식 단원 문항으로만 분류할지 애매(I-XU). 카탈로그 설계 때 함수 단원과 공유 유형으로 둘지 결정 필요 | ★4 |
| GN-M31-132-e1 | 서술형 6점이지만 인수분해 + 대입 한 겹(M_total 6)이라 STEP 1 기본 문제와 무게가 같음. 짝 유제 132-u1 은 분수 계산으로 한 단계 무거워 같은 유형인데 체감이 갈림 | ★2 / ★3 |
| GN-M31-133-u3 | type_hint 가 두 갈래(「근의 조건식 통째 대입」 vs 「식의 값 구하기」) — 130-14 와 한 유형으로 묶을지 갈라 세울지 카탈로그에서 결정 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint** — ⑴ 「한 근이 주어질 때 미지수·다른 근 구하기」(128-03 · 129-08 · 130-16 · 130-17 · 132-e1 · 132-u1 · 133-u4 · 133-u5)가 이 범위 최다 계열이다. ⑵ 「중근을 가질 조건」(129-07 · 130-18 · 131-19 · 132-e2 · 132-u2)은 「판별식 없이 상수항 = (x 계수 절반)의 제곱」 한 도구로 통일돼 있어 하나의 유형으로 세우면 된다. ⑶ 「완전제곱식으로 고치기·제곱근으로 풀기」(129-09 · 129-11 · 129-12 · 131-20 · 131-21 · 133-u6).
- **따로 세워야 할 유형** — ① 「후보를 기각해야 하는 조건부 근 문제」(130-16 · 131-22 · 131-24): 도구는 평범하지만 I-VF 가 답을 가르므로 base ★ 를 4 로 두는 별도 유형이 필요하다. ② 「단원 결합(일차함수 그래프 조건 → 이차방정식)」(131-23): 이차방정식 카탈로그와 함수 카탈로그 양쪽에서 참조할 교차 유형. ③ 「해가 정수일 조건(우변이 완전제곱수)」(131-24): 중3 에서 유일하게 정수론적 판정을 요구하는 자리라 단독 유형이 맞다. ④ 「계수를 바꾸어 놓은(잘못 본) 이차방정식」(133-u5): 조건식과 답을 묻는 식이 다른 구조라 대입형과 분리해야 한다.
- **통합해도 될 유형** — ① 128-01 과 130-13 은 「이차방정식이 될 조건」 한 유형으로 묶고 문자 유무로 base ★ 만 나누면 된다. ② 132-e1 과 132-u1 은 「두 근 중 큰(작은) 근이 다른 방정식의 근」 한 유형(대소 선택 단계만 공통). ③ 132-e2 와 132-u2 는 「중근 조건 → 제곱근 풀이의 두 근의 합·곱」 한 유형이며 묻는 것이 합인지 곱인지로만 갈린다. ④ 128-06 · 130-17 · 130-18 의 「공통인 근」은 주어진 정보의 방향(공통근을 주는가, 구하는가)만 다른 한 유형이다.

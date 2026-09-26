---
name: mechanism-데이터-GN-CM1-08
description: 개념원리 공통수학1 08 인수분해(1/1 · 62~64쪽 7문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 08 인수분해
  unit_code: GN-CM1-08
  part: "1/1"
  extract_range: "62~64쪽 · 62-117~64-121"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학1 · 08 인수분해 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 62~64쪽, 단원 08 「인수분해」의 7문항 전수를 다룬다. 구역은 「개념원리 익히기」 2문(62-117 · 62-118)과 「필수·발전 예제」 5문(필수 예제 63-e1 · 64-e2 + 확인체크 63-119 · 64-120 · 64-121)이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「개념원리 익히기」와 tag 「확인체크」는 개념 확인(★1 출발), tag 「필수」는 ★2, 「발전」·「특강」은 ★3 출발이며, 이 범위에는 연습문제 STEP·실력 UP 구역이 없다. 7문항이 모두 「다음 식을 인수분해하시오」 형태의 소문항 묶음(최대 10개)이라 M 은 묶음 전체를 기준으로 매겼고, 한 묶음 안에서 가장 무거운 소문항이 ★ 를 끌어올리는 구조다.

단원 특성상 통찰이 한 곳에 몰린다. 공식을 그대로 대입하는 소문항은 절차지만, ⑴ 복이차식에서 제곱항을 더했다 빼기 ⑵ 항이 네 개일 때 2+2 로 묶을지 3+1 로 묶을지 고르기 ⑶ 문자 계수를 상수로 보고 인수 짝을 읽기 — 이 셋이 이 범위의 실제 변별 지점이다. 그래서 7문항 중 6문항이 통찰형(대부분 I-EQV, 묶기 갈래가 있는 두 문항은 I-SC)으로 나왔다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 공통수학1은 유형 카탈로그가 없으므로 `type_id`·`base_star` 는 null 이고 `type_hint` 에 유형명을 제안했으며 `effective_star` 는 잠정적으로 `star` 와 같다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-62-117
  page: 62
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑺ 기본 인수분해 공식 적용 — 공통인수 묶기, 공통인수가 식인 경우, 완전제곱식 2개,
    합차 공식, 이차삼항식 2개(계수 1 과 계수 3).
  category: '공통인수·완전제곱·합차·이차삼항식 공식 판별 → 해당 공식 대입'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식의 기본 적용(공통인수·완전제곱·합차·이차삼항식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    식의 꼴을 보고 네 가지 기본 공식 중 하나를 고르면 한 줄에 끝난다. ⑵만 $6a+3b=3(2a+b)$ 로
    묶어 공통인수를 드러내는 한 단계가 더 있지만 개념원리 본문이 바로 앞에서 다룬 표준 절차다.
    통찰 없음·M_total 4 → −1 후보이나 개념원리 익히기 출발점 ★1 에서 하한이라 ★1 유지.
  tier: star_1
  mechanism_primary: "식의 항 수·꼴 판별 → 공통인수 묶기 또는 완전제곱·합차·이차삼항식 공식 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4xy(x+2)$ ⑵ $(2a+b)(2a+b+3)$ ⑶ $(2x+3y)^2$ ⑷ $(3x-5y)^2$ ⑸ $(4a+9b)(4a-9b)$ ⑹ $(x+3)(x+1)$ ⑺ $(3a+b)(a-2b)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/62-117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 계수를 바꿀 수 있음. 제약: ⑶⑷는 교차항이 정확히 $2ab$ 가 되도록 완전제곱수 계수를 유지하고, ⑸는 두 항이 모두 제곱수여야 하며, ⑹⑺은 정수 계수로 인수분해되도록 판별식이 완전제곱이 되게 잡는다."
    creative: "(1) ⑵의 공통인수를 $(2a+b)$ 가 아니라 $(x-y)$ 처럼 두 문자 차로 바꾸고 뒤 항에 부호를 넣어 T-부호 함정 추가(★1 유지) (2) 완전제곱식을 '상수항을 구하시오' 역문제로 뒤집으면 I-BW d1 · ★2 (3) ⑺의 계수를 크게 해 tasukigake 시행이 늘면 Mk 상승이지만 통찰은 그대로라 ★2 를 넘지 않음(질 저하 방향이므로 권장하지 않음)."
```

```yaml
- id: GN-CM1-62-118
  page: 62
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑽ 확장 인수분해 공식 적용 — 세 항 완전제곱 2개, 세제곱 전개꼴 2개, 세제곱 합·차 2개,
    $a^3+b^3+c^3-3abc$ 꼴 2개, 복이차식 2개.
  category: '공식 꼴로 맞춰 읽기 → 세 항 완전제곱·세제곱·세 문자 세제곱합 공식 / 복이차식은 제곱항 가감 후 합차'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑺의 상수 1 을 $1^3$ 로, ⑻의 $-c^3$ 를 $(-c)^3$ 로 바꿔 읽어야 $a^3+b^3+c^3-3abc$ 공식 꼴이 드러남"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑼⑽ 복이차식은 제곱항을 더했다 빼서 $(\\square)^2-(\\square)^2$ 합차 꼴로 만들어야 인수분해가 진행됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "확장 인수분해 공식(세 항 완전제곱·세제곱·세 문자 세제곱합)과 복이차식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑹은 공식 암기 확인이고 ⑺⑻은 상수와 음수 항을 세제곱 꼴로 바꿔 읽는 한 단계(EQV d1),
    ⑼⑽은 $a^4+a^2+1=(a^2+1)^2-a^2$ 처럼 없는 제곱항을 만들어 합차로 넘기는 것이 핵심이다(EQV d2).
    함정은 ⑷⑻의 부호 배치(T-부호) 하나. 개념원리 익히기 ★1 출발에서 통찰 2개로 +1 → ★2.
  tier: star_2
  mechanism_primary: "항 수와 차수로 공식 판별 → 상수·음수 항을 세제곱 꼴로 고쳐 읽기 → 복이차식은 제곱항 가감 후 합차 분해"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x+y+2z)^2$ ⑵ $(a-2b+3c)^2$ ⑶ $(x+2)^3$ ⑷ $(2x-y)^3$ ⑸ $(a+3b)(a^2-3ab+9b^2)$ ⑹ $(2x-y)(4x^2+2xy+y^2)$ ⑺ $(x+y+1)(x^2+y^2-xy-x-y+1)$ ⑻ $(2a+b-c)(4a^2+b^2+c^2-2ab+bc+2ca)$ ⑼ $(a^2+a+1)(a^2-a+1)$ ⑽ $(x^2+2xy+4y^2)(x^2-2xy+4y^2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/62-118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수를 완전제곱·완전세제곱 관계가 유지되는 범위에서 바꿀 수 있음. 제약: ⑴⑵는 교차항 세 개가 모두 $2ab$ 꼴로 맞아야 하고, ⑸⑹은 두 항이 모두 세제곱수여야 하며, ⑼⑽ 복이차식은 $x^4+kx^2y^2+m^2y^4$ 에서 $2m-k$ 가 완전제곱이어야 합차로 떨어진다($k=1,m=1$ / $k=4,m=4$ 가 그 예)."
    creative: "(1) ⑺⑻을 '$x+y+z=0$ 일 때 $x^3+y^3+z^3$ 의 값'으로 뒤집으면 I-BW d2 · ★3 (2) 복이차식을 $x^4+4y^4$(소피 제르맹)로 바꾸면 더할 제곱항을 학생이 스스로 정해야 해 EQV d3 · ★3 (3) ⑴을 전개형이 아니라 '$x+y+2z=5$ 일 때 주어진 식의 값'으로 주면 인수분해 후 대입하는 골조로 바뀌며 ★2 유지."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-63-e1
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑹ 공식을 바로 쓸 수 없는 식의 인수분해 — 식 덩어리를 한 문자로 보는 합차 2개,
    공통인수를 먼저 묶고 세제곱 합, 치환 후 전개, $a^6-b^6$, 상수항이 두 일차식의 곱인 이차식.
  category: '식 덩어리를 한 문자로 치환 → 공통인수·합차·세제곱 공식 적용 → 끝까지 분해되었는지 확인'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑸ $a^6-b^6$ 은 $(a^3)^2-(b^3)^2$ 로 먼저 합차를 쓰느냐 $(a^2)^3-(b^2)^3$ 로 세제곱 차를 먼저 쓰느냐에 따라 끝까지 분해되는 속도가 갈림 — 갈래 선택이 결과를 좌우"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴⑵⑷⑹에서 $(2a-3b)$·$(x+2)$·$(a+1)(a+2)$ 같은 덩어리를 하나의 문자로 바꿔 읽어야 공식이 적용됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "인수분해 — 항이 두 개 또는 세 개일 때(치환·공통인수 묶기 후 공식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    공식이 겉으로 보이지 않는 식을 치환·공통인수 묶기로 공식 꼴까지 끌고 가는 것이 골조다.
    ⑸가 이 문항의 중심으로, 어느 합차를 먼저 쓰느냐에 따라 네 인수까지 가느냐가 갈린다(SC d2).
    ⑹은 계수의 문자 $a$ 를 상수로 보고 두 일차식의 합이 일차항 계수임을 읽어야 한다(Ma 2).
    함정은 끝까지 분해하지 않고 멈추는 것(T-범위). 필수 예제 ★2 출발에서 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "덩어리를 한 문자로 치환 또는 공통인수 분리 → 합차·세제곱 공식 적용 → 남은 인수가 더 분해되는지 재확인"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $(2a-b)(2a-5b)$ ⑵ $(4x-1)(2x-3)$ ⑶ $2a(x+2y)(x^2-2xy+4y^2)$ ⑷ $(x+1)(x^2+5x+7)$ ⑸ $(a+b)(a-b)(a^2-ab+b^2)(a^2+ab+b^2)$ ⑹ $(x-a-1)(x-a-2)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/63-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "치환할 덩어리의 계수(⑴ $2a-3b$ → $3a-2b$), 공통인수 상수(⑶ $2a$), 지수(⑸ $a^6-b^6$ → $a^6-64b^6$)를 바꿀 수 있음. 제약: ⑸는 지수가 6 의 배수여야 두 갈래 비교가 살아 있고, ⑹은 상수항이 두 일차식의 곱으로 주어져 그 합이 일차항 계수와 맞아야 한다."
    creative: "(1) ⑸를 $a^6+b^6$ 으로 바꾸면 합차가 막히고 $(a^2)^3+(b^2)^3$ 한 갈래만 남아 SC 가 사라져 ★2 (2) ⑹의 상수항을 전개해서 제시하면 학생이 다시 두 일차식의 곱으로 되돌려야 해 EQV d2 · ★3 유지 (3) ⑷를 $(x+2)^3-(x-2)^3$ 처럼 두 덩어리의 세제곱 차로 바꾸면 치환 두 번 · ★3."
```

```yaml
- id: GN-CM1-63-119
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ 항이 두세 개인 식의 인수분해 — 복이차식 합차 반복, 덩어리 합차, 공통인수 뒤 세제곱 합,
    두 덩어리의 세제곱 차, 공통인수 뒤 완전제곱, 상수항이 두 일차식의 곱인 이차식.
  category: '공통인수 분리 또는 덩어리 치환 → 합차·세제곱 공식 → 남은 인수 재분해'
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵⑷에서 $(a+b)$·$(a-b)$ 를 각각 한 덩어리로 보고 합차·세제곱 차 공식을 적용"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑹ 상수항 $-(a-3)(a+5)$ 의 두 일차식의 차가 일차항 계수 8 과 같음을 읽어 인수 짝을 결정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "인수분해 — 항이 두 개 또는 세 개일 때(확인체크)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    63-e1 과 같은 골조의 확인 문항으로, 공통인수를 먼저 빼고(⑶⑸) 남은 식을 공식으로 분해한다.
    ⑴은 합차를 쓴 뒤 $x^2-y^2$ 가 더 분해된다는 것을 놓치기 쉬운 지점이고, ⑹은 문자 계수의 인수 짝을
    읽는 단계(EQV d2)가 있다. 확인체크 ★1 출발에서 통찰 2개로 +1 → ★2.
  tier: star_2
  mechanism_primary: "공통인수 분리 또는 덩어리 치환 → 합차·세제곱 공식 적용 → 인수가 더 분해되는지 확인"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x^2+y^2)(x+y)(x-y)$ ⑵ $(3a+3b+c)(3a+3b-c)$ ⑶ $x(x+1)(x^2-x+1)$ ⑷ $2b(3a^2+b^2)$ ⑸ $ab(a-b)^2$ ⑹ $(x-a+3)(x+a+5)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/63-119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵의 계수 9, ⑷⑸의 공통인수, ⑹의 두 상수 $-3,+5$ 를 바꿀 수 있음. 제약: ⑵는 앞 항이 완전제곱이어야 하고, ⑹은 두 일차식의 차(또는 합)가 일차항 계수와 부호까지 일치해야 한다."
    creative: "(1) ⑴을 $x^8-y^8$ 로 늘리면 합차를 세 번 반복해야 해 Ms 3 · ★3 (2) ⑹을 '인수분해했을 때 두 인수의 합을 구하시오'로 바꾸면 결과를 다시 읽는 한 단계 추가 · ★2 유지 (3) ⑷를 $(a+b)^3+(a-b)^3$ 로 바꾸면 세제곱 합 공식과 부호 처리가 겹쳐 T-부호 추가 · ★3 후보."
```

```yaml
- id: GN-CM1-64-e2
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 항이 네 개인 식의 인수분해 — 네 항을 두 항씩 묶는 것, 세 항을 완전제곱으로 묶고
    나머지 한 항과 합차로 처리하는 것, 부호를 먼저 묶어야 완전제곱이 보이는 것.
  category: '항 네 개를 2+2 로 묶을지 3+1 로 묶을지 선택 → 공통인수 또는 완전제곱 만들기 → 합차 공식'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 네 항 식이라도 ⑴은 2+2 로 묶어 공통인수를 내야 하고 ⑵⑶은 3+1 로 묶어 합차로 가야 한다 — 묶기 갈래를 잘못 고르면 풀이가 막힘"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶ $2xy+z^2-x^2-y^2$ 처럼 음수 항이 흩어져 있을 때 $z^2-(x^2-2xy+y^2)$ 로 부호를 통째로 묶어야 제곱 차 꼴이 드러남"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "인수분해 — 항이 네 개일 때(2+2 묶기 · 3+1 묶기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    항이 네 개인 식은 공식이 바로 보이지 않고 묶는 방식을 먼저 정해야 한다(SC d2). ⑴은 $x^4-y^4$ 와
    $x^2z^2-y^2z^2$ 로 갈라 $(x^2-y^2)$ 공통인수를 내고, ⑵⑶은 세 항을 완전제곱으로 만든 뒤 합차로 넘긴다.
    ⑶은 부호를 통째로 묶어 내는 변환이 관건이라 T-부호 함정이 걸린다. 필수 예제 ★2 출발 + 통찰 2개 → ★3.
  mechanism_primary: "묶기 갈래 결정(2+2 또는 3+1) → 공통인수 또는 완전제곱 만들기 → 합차 공식으로 분해"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $(x+y)(x-y)(x^2+y^2+z^2)$ ⑵ $(a-2b+c)(a-2b-c)$ ⑶ $(x-y+z)(-x+y+z)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/64-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수와 문자 수를 바꿀 수 있음. 제약: 3+1 묶기는 세 항이 정확히 완전제곱($4b^2$ 와 $-4ab$ 처럼 교차항이 $2ab$)이 되어야 하고, 남는 한 항은 제곱 꼴이어야 합차로 떨어진다. 2+2 묶기는 두 묶음이 같은 인수를 공유해야 한다."
    creative: "(1) ⑵의 $-c^2$ 를 $+c^2$ 로 바꾸면 합차가 막혀 인수분해 불가 — '인수분해되지 않는 이유를 설명'하는 서술형으로 돌리면 I-VF d2 · ★3 (2) 항을 여섯 개로 늘려 2+2+2 묶기를 요구하면 Ms 3 · ★4 후보 (3) ⑶의 결과를 삼각형 세 변의 길이 조건과 엮으면 I-XU · ★4."
```

```yaml
- id: GN-CM1-64-120
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 항이 네 개인 식의 인수분해 — 2+2 묶기 2개(공통인수가 식인 경우),
    3+1 묶기 2개(완전제곱 뒤 합차, 부호를 먼저 묶어야 하는 경우).
  category: '묶기 갈래 선택(2+2 · 3+1) → 공통인수 또는 완전제곱 → 합차 공식'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴⑵는 2+2 로, ⑶⑷는 3+1 로 묶어야 진행된다 — 네 소문항이 서로 다른 갈래를 요구해 묶기 선택 자체가 문항의 내용"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑷ $6ab+1-9a^2-b^2$ 를 $1-(9a^2-6ab+b^2)$ 로 부호째 묶어 $1-(3a-b)^2$ 꼴로 바꿔 읽기"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "인수분해 — 항이 네 개일 때(확인체크)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    64-e2 와 같은 골조의 확인 문항이다. ⑴은 $a(a^2-b^2)+c(a^2-b^2)$ 로, ⑵는 $x^2(x-2a)+2(x-2a)$ 로
    공통인수를 내고, ⑶⑷는 완전제곱 세 항을 묶어 합차로 넘긴다. 갈래가 소문항마다 갈리지만 각 갈래는
    한눈에 보이는 수준이라 SC 는 d1. ⑷의 부호 묶기만 d2. 확인체크 ★1 출발에서 통찰 2개로 +1 → ★2.
  mechanism_primary: "2+2 또는 3+1 묶기 결정 → 공통인수 분리 또는 완전제곱 만들기 → 합차로 분해"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $(a+b)(a-b)(a+c)$ ⑵ $(x-2a)(x^2+2)$ ⑶ $(2x+y+1)(2x-y+1)$ ⑷ $(3a-b+1)(-3a+b+1)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm1/items/64-120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴⑵의 공통인수와 ⑶⑷의 완전제곱 계수를 바꿀 수 있음. 제약: 2+2 묶기는 두 묶음의 공통인수가 완전히 같아야 하고, ⑵처럼 남은 인수($x^2+2$)가 더 분해되지 않는 경우를 섞어 두면 '끝까지 분해' 판단을 물을 수 있다. ⑶⑷는 교차항 부호가 완전제곱과 맞아야 한다."
    creative: "(1) ⑵를 $x^3-2ax^2-2x+4a$ 로 바꾸면 남은 인수가 $x^2-2$ 로 또 분해돼 단계 추가 · ★3 (2) ⑶을 '$x,y$ 가 자연수일 때 값이 소수가 되는 경우'로 확장하면 I-VF · ★4 후보 (3) ⑷의 결과처럼 앞에 $-$ 부호가 남는 꼴을 '$-(3a-b-1)(3a-b+1)$ 로도 쓸 수 있음'을 묻는 표기 문항으로 돌리면 ★1."
```

```yaml
- id: GN-CM1-64-121
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 문자로 된 식 $4a^2b^2-(a^2+b^2-c^2)^2$ 을 인수분해하기(결과는 일차식 네 개의 곱).
  category: '전체를 제곱의 차로 보기 → 합차 1회 → 각 인수를 다시 제곱의 차로 정리 → 합차 2회'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$4a^2b^2$ 를 $(2ab)^2$ 로 보고 식 전체를 $(2ab)^2-(a^2+b^2-c^2)^2$ 라는 제곱의 차로 읽기"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1차 합차로 얻은 두 인수를 각각 $(a+b)^2-c^2$ · $c^2-(a-b)^2$ 로 다시 정리해 2차 합차를 적용(둘째 인수는 부호를 뒤집어야 제곱 차가 됨)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "제곱의 차를 두 번 적용하는 인수분해(세 문자 대칭식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합차를 두 번 겹쳐 쓰는 것이 골조다. 1차 합차 뒤 나온 $2ab+a^2+b^2-c^2$ 와 $2ab-a^2-b^2+c^2$ 를
    각각 완전제곱으로 묶어 다시 제곱의 차로 만들어야 하는데, 둘째 인수는 부호를 통째로 뒤집어야
    보인다(T-부호). 단계 수·부호 처리 모두 같은 확인체크 문항들보다 한 단계 위다.
    [분류 이슈] 벤더 신호(확인체크 ★1 출발)와 2단 어긋나지만 합차 2회·부호 반전을 반영해 ★3 으로 기록.
  mechanism_primary: "$(2ab)^2-(a^2+b^2-c^2)^2$ 로 보기 → 합차 1회 → 두 인수를 $(a\\pm b)^2-c^2$ 꼴로 정리 → 합차 2회"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(a+b+c)(a+b-c)(a-b+c)(-a+b+c)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/64-121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 항의 계수를 바꾸면 골조가 깨진다. 제약: $4a^2b^2$ 는 반드시 $(2ab)^2$ 여야 1차 합차 뒤 $a^2+2ab+b^2$ 와 $-(a^2-2ab+b^2)$ 라는 완전제곱이 나온다. 문자를 $x,y,z$ 로 바꾸거나 $c^2$ 자리에 $4c^2$ 를 넣어 $(a+b+2c)$ 꼴로 만드는 정도가 안전한 변형이다."
    creative: "(1) 결과를 그대로 두고 '삼각형 세 변이 $a,b,c$ 일 때 이 식의 부호를 판정하시오'로 바꾸면 I-XU(도형)+I-VF · ★4 (2) $4a^2b^2-(a^2+b^2-c^2)^2=0$ 을 만족하는 조건을 묻는 역문제로 돌리면 I-BW d2 · ★4 (3) 1차 합차까지만 요구하고 '더 분해되는지 판정'을 묻는 서술형으로 낮추면 ★2."
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 1 · ★2 3 · ★3 3 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 1(62-117) · premium 0
- 통찰 유형 분포: I-EQV 9 · I-SC 3 · 그 외 0. depth 3 없음 · SC 는 있으나 VF/SYM/XU 없음 → ★4 이상 슬롯 없음(공식 적용 단원이라 자연스러움)
- type_hint 상위: 「인수분해 — 항이 네 개일 때」 2(64-e2 · 64-120) · 「인수분해 — 항이 두세 개일 때」 2(63-e1 · 63-119) · 「기본 공식 적용」 1(62-117) · 「확장 공식·복이차식」 1(62-118) · 「합차 2회 적용」 1(64-121)
- 대상층: 하위권 1 · 중위권 3 · 중상위권 3
- 그림: 0문 · 소문항 묶음 요약: 62-117(7) · 62-118(10) · 63-e1(6) · 63-119(6) · 64-e2(3) · 64-120(4) · 64-121(단일)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-64-121 | 벤더 신호는 확인체크(★1 출발)인데 합차 2회 + 부호 반전 + 인수 네 개로 M_total 7 · 통찰 2개(EQV d2 ×2) → ★3 으로 기록. 출발점과 2단 차이 | ★2 / ★3 |
| GN-CM1-62-118 | 소문항 10개의 난이도 폭이 큼(⑴~⑹ 공식 암기 ↔ ⑼⑽ 복이차식). 묶음 전체를 한 블록으로 매기면 ★2 지만 ⑼⑽만 떼면 ★3 — 카탈로그 설계 때 복이차식을 별도 유형으로 쪼갤지 결정 필요 | ★2 / ★3 |
| GN-CM1-64-120 | 「어느 쪽으로 묶을지」를 I-SC(전략 분기)로 볼지 항 네 개 인수분해의 표준 절차로 볼지 애매. 소문항마다 갈래가 달라 선택이 실제로 일어난다고 보아 SC d1 로 인정 | ★2 / ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 골조는 크게 **세 갈래**다. ⑴ 공식 판별·대입(62-117 · 62-118 ⑴~⑹) ⑵ 치환·공통인수로 공식 꼴 만들기(63-e1 · 63-119) ⑶ 항 네 개 묶기(64-e2 · 64-120). 카탈로그에서는 이 셋을 각각 base ★1 · ★2 · ★3 유형으로 세우는 것이 실제 체감과 맞는다.
- **복이차식**(62-118 ⑼⑽)은 ⑴ 안에 넣지 말고 별도 유형으로 세워야 한다. 없는 제곱항을 만들어 넣는 EQV d2 가 다른 공식 대입과 성격이 다르고, $x^4+4y^4$ 로 확장하면 곧바로 ★3 이 된다.
- **항 네 개 묶기**는 2+2 와 3+1 을 한 유형의 두 소갈래로 묶어도 되지만, 3+1(완전제곱 뒤 합차)이 부호 함정을 고유하게 가지므로 소유형 표시는 남긴다.
- **합차 2회**(64-121)는 ⑶의 상위 유형으로 따로 세운다. 인수가 네 개까지 떨어지고 삼각형 조건·역문제로 확장하면 ★4 슬롯 자격(XU·VF)이 생기는 몇 안 되는 골조다.
- $a^3+b^3+c^3-3abc$(62-118 ⑺⑻)는 공식 암기 유형으로 두되, 「$x+y+z=0$ 일 때」 조건이 붙는 순간 별도 유형(역방향·조건 대입)이 되므로 카탈로그에서 분리해 둔다.

---
name: mechanism-데이터-GN-CM1-09
description: 개념원리 공통수학1 09 복잡한 식의 인수분해(1/1 · 67~75쪽 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 09 복잡한 식의 인수분해
  unit_code: GN-CM1-09
  part: "1/1"
  extract_range: "67~75쪽 · 67-e3~75-146"
  total_problems: 32
  unit_total: 32
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그·난이도)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json) — 이 범위는 그림 문항 1문(75-143)
---

# 개념원리 공통수학1 · 09 복잡한 식의 인수분해 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 **09 복잡한 식의 인수분해** 67~75쪽의 32문항 전수를 다룬다. 구역은 「필수·발전 예제」 16문(필수 예제 67-e3~72-e9 와 각 예제 뒤의 확인체크), 「연습문제 STEP 1」 6문, 「연습문제 STEP 2」 7문, 「연습문제 실력 UP」 3문이다. 단원의 도구는 다섯 갈래로 고정돼 있다 — 공통부분 치환, $x^4+ax^2+b$ 꼴에서 제곱 차 만들기, 여러 문자 식을 차수가 가장 낮은 문자로 내림차순 정리, 인수정리·조립제법, 그리고 인수분해의 활용(수의 계산·식의 값·삼각형 모양 판단). 그림 문항은 75-143 한 문항뿐이고, 발문에 입체의 모서리와 구멍이 모두 글로 적혀 있어 크롭은 라벨 확인용이다.

벤더 난이도 신호는 개념원리 고등의 구역·태그다. 출발점을 **필수 예제 ★2 · 발전 예제 ★3 · 확인체크 ★2(앞 필수 예제의 기법을 그대로 반복하는 짝 문항이라 개념원리 익히기보다 한 단 위) · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4** 로 두고, 여기서 다음 규칙으로만 ±1 조정했다.

- `depth_score` = 라벨링한 통찰의 effective_depth 합.
- 출발점이 ★1~2 인 구역: `depth_score ≥ 3` 이면 +1.
- 출발점이 ★3 이상인 구역(발전 · STEP 2 · 실력 UP): 그 구역이 이미 통찰을 전제하므로 depth 3 통찰이 있거나 `depth_score ≥ 5` 일 때만 +1.
- 통찰 0 · `M_total ≤ 5` 면 −1 후보(이 범위에서는 73-132 한 문항이 해당하나 완전 인수분해까지 요구해 유지).
- ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 있을 때만 — 이 범위에는 없다(75-146 이 가장 근접하나 novelty_score 0 이라 ★4 로 둠).

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-67-e3
  page: 67
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 공통부분이 있는 식의 인수분해. ⑴ 두 괄호에 같은 $a^2+3a$ 가 보이는 형, ⑵ 뒤쪽 항을 묶어야 공통부분이 드러나는 형, ⑶ 네 일차식을 짝지어 공통부분을 만드는 형.
  category: '공통부분을 $t$ 로 치환 → $t$ 의 이차식 인수분해 → 되돌려 끝까지 분해'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 $-2x^2+6x$ 를 $-2(x^2-3x)$ 로 묶어 공통부분이 보이게 동치 변형"
    - step: 3
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶ 네 일차식 중 상수항 합이 같아지는 짝을 골라야 공통부분이 생김 — 짝짓기 갈래 선택"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '공통부분이 있는 식의 인수분해(치환 · 짝짓기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    단원의 첫 기법을 세 형으로 나눠 보여 주는 필수 예제. 통찰 2개이나 둘 다 예제 안에서 방법이 제시되는 d1 수준이라 depth_score 2 로 +1 요건 미달.
    M_total 6 · 필수 예제 출발점 ★2 유지. 마지막에 $x^2+x-8$ 처럼 더 분해되지 않는 이차식을 남겨 두는 판단이 유일한 함정.
  tier: star_2
  mechanism_primary: '공통부분 $t$ 치환 → $t$ 의 이차식 인수분해 → $t$ 복원 후 분해되는 이차식만 추가 분해'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(a^2+3a+7)(a^2+3a-5)$ ⑵ $(x+1)(x-4)(x-1)(x-2)$ ⑶ $(x+3)(x-2)(x^2+x-8)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/67-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 두 상수 -2, 4 와 뺀 수 27 은 t 의 이차식이 정수 계수로 인수분해되도록 묶어서 바꾼다(합·곱 조건). ⑶ 은 네 일차식의 상수항이 두 쌍으로 같은 합을 이루도록 유지해야 하고(-1+4 = -3+2), 더한 상수 24 는 t 의 이차식이 인수분해되게 고른다.'
    creative: '(1) ⑵ 처럼 공통부분이 숨어 있게 항을 풀어써 두면 EQV 가 d2 로 올라 ★3 (2) 짝짓기 뒤 남는 이차식이 또 인수분해되게 만들면 단계만 늘고 ★ 는 그대로 (3) 결과의 인수 개수나 특정 인수 포함 여부를 5지선다로 묻는 형으로 바꾸면 ★2 유지.'
```

```yaml
- id: GN-CM1-67-122
  page: 67
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 공통부분이 있는 식의 인수분해 네 문항. ⑵ 는 $1-2x$ 를 공통부분으로 잡고 $x^2$ 항을 계수처럼 다뤄 완전세제곱 꼴까지, ⑷ 는 두 이차식을 먼저 일차식으로 쪼갠 뒤 다시 짝짓는 형.
  category: '공통부분 발견(또는 선인수분해 후 짝짓기) → 치환 → 이차식 인수분해 → 복원'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 를 $1-2x$ 에 대한 식으로 보고 $x^2$ 를 계수 자리로 옮겨 $(t+x^2)^2$ 꼴을 만드는 동치 변형"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶⑷ 는 곱의 순서를 바꾸거나 먼저 인수분해한 뒤 짝지어야 공통부분이 생김 — 짝짓기 갈래 선택"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '공통부분이 있는 식의 인수분해(치환 · 선인수분해 후 짝짓기)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 필수 예제의 확인체크지만 ⑵ 가 한 단 위다 — 공통부분을 $1-2x$ 로 잡고 남은 $x^2$ 를 계수로 처리해야 $(x-1)^4$ 가 나온다.
    ⑷ 는 주어진 두 이차식을 먼저 네 일차식으로 쪼갠 뒤 상수항 합이 같도록 다시 짝지어야 한다. depth_score 3 · M_total 7 → 확인체크 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '공통부분 발견(필요하면 선인수분해 후 재짝짓기) → 치환 → 이차식·완전제곱 인수분해 → 복원'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x^2+x-4)(x^2+x-9)$ ⑵ $(x-1)^4$ ⑶ $(x^2+3x+5)(x^2+3x-3)$ ⑷ $(x+2)(x+6)(x^2+8x+10)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/67-122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 -13, 36 은 합·곱이 맞는 정수쌍이면 자유. ⑶ 의 네 연속 정수 0,1,2,3 과 뺀 수 15 는 t 의 이차식이 인수분해되도록 함께 바꾼다. ⑷ 는 두 이차식이 각각 일차식으로 쪼개지고 쪼갠 네 상수가 두 쌍 같은 합을 이루어야 한다.'
    creative: '(1) ⑵ 처럼 공통부분을 일차식으로 숨기고 나머지를 고차항 계수로 두면 EQV d2 유지 ★3 (2) 결과가 완전네제곱이 되도록 더하는 수를 역으로 묻는 문제로 바꾸면 BW 추가 ★4 (3) 네 일차식의 짝이 두 가지로 보이게 만들어 잘못된 짝이 막히는 경험을 주면 SC d2 ★3~4.'
```

```yaml
- id: GN-CM1-68-e4
  page: 68
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ $x^4+ax^2+b$ 꼴의 인수분해. ⑴⑵ 는 $x^2 = t$ 치환으로 바로 되고, ⑶⑷ 는 치환이 막혀 제곱 차 $A^2-B^2$ 가 되도록 항을 더하고 빼는 형.
  category: '$x^2$ 치환 시도 → 막히면 완전제곱을 만들고 $A^2-B^2$ 로 분해'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$t$ 치환 인수분해 갈래와 제곱 차 갈래 중 어느 쪽인지 먼저 판정해야 함"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶⑷ 에서 같은 항을 더하고 빼 $(x^2+p)^2-(qx)^2$ 꼴로 바꾸는 동치 변형 — 더할 항의 선택이 풀이를 가름"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '$x^4+ax^2+b$ 꼴의 인수분해(치환 · 제곱 차 만들기)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원의 서명 기법인 제곱 차 만들기를 처음 보여 주는 필수 예제. 더할 항이 $\pm 4x^2$ 인지 $\pm 16x^2$ 인지는 $x^2$ 계수를 맞춘 뒤 남는 것이 완전제곱이 되는지로 결정되고, 여기서 갈리면 풀이가 끝까지 막힌다.
    통찰 2개(SC d1 + EQV d2) · depth_score 3 → 필수 예제 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '$t=x^2$ 로 인수분해 시도 → 실패하면 $(x^2+p)^2$ 를 만들고 남은 항을 $(qx)^2$ 로 묶어 $A^2-B^2$ 분해'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x^2-3)(x+2)(x-2)$ ⑵ $(3x^2+2)(x+1)(x-1)$ ⑶ $(x^2+2x-2)(x^2-2x-2)$ ⑷ $(x^2+4x+1)(x^2-4x+1)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/68-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑶⑷ 의 상수항은 완전제곱수여야 $(x^2+p)^2$ 가 만들어지고, $x^2$ 계수는 $2p -$ (제곱수) 형태여야 남은 항이 $(qx)^2$ 가 된다(예: 상수 4 → p = ±2, 계수 -8 = -4-4). 이 두 조건을 깨면 유리수 범위에서 인수분해가 안 된다.'
    creative: '(1) $x^4+4$ 처럼 $x^2$ 항이 아예 없게 만들면 더할 항을 스스로 만들어야 해 EQV d2 유지 ★3 (2) $x^4+ax^2+b$ 가 두 이차식의 곱이 되도록 하는 $a$ 를 묻는 역문제로 바꾸면 BW 추가 ★4 (3) $x^4+y^4$ 꼴 동차식으로 문자 하나를 늘리면 Mₐ 상승 ★3.'
```

```yaml
- id: GN-CM1-68-123
  page: 68
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑸ $x^4+ax^2+b$ 꼴의 인수분해 다섯 문항. ⑶ $x^4+4$, ⑷ $x^4+5x^2+9$ 처럼 치환이 막히는 형과 ⑸ 두 문자 동차식 $x^4+y^4-6x^2y^2$ 포함.
  category: '$x^2$ 치환 판정 → 막히면 제곱 차 만들어 두 이차식의 곱으로'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "다섯 문항마다 치환 갈래와 제곱 차 갈래를 먼저 갈라야 함"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶⑷⑸ 에서 더하고 뺄 항을 스스로 만들어 $A^2-B^2$ 로 바꾸는 동치 변형"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '$x^4+ax^2+b$ 꼴의 인수분해(제곱 차 만들기 · 동차식 확장)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑶ 은 $x^2$ 항이 없어 더할 항 $4x^2$ 를 스스로 만들어야 하고, ⑸ 는 같은 기법을 두 문자 동차식으로 옮긴 형이라 $(x^2-y^2)^2$ 를 기준으로 삼아야 한다.
    통찰 구성은 앞 필수 예제와 같지만 문항 수가 다섯이라 M_total 7. depth_score 3 → 확인체크 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '치환 가능 여부 판정 → 불가하면 완전제곱 항을 더하고 빼 $A^2-B^2$ → 두 이차식의 곱'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(x^2+3)(x^2-2)$ ⑵ $(x+1)(x-1)(x+3)(x-3)$ ⑶ $(x^2+2x+2)(x^2-2x+2)$ ⑷ $(x^2+x+3)(x^2-x+3)$ ⑸ $(x^2+2xy-y^2)(x^2-2xy-y^2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/68-123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑶⑷ 는 상수항이 완전제곱수(4, 9, 16, 36)이고 $x^2$ 계수가 2p 보다 작은 제곱수만큼 모자라야 한다. ⑸ 는 $x^4+y^4+kx^2y^2$ 에서 k = ±2 - (제곱수) 조건을 유지한다.'
    creative: '(1) $x^4+64$, $x^4+4y^4$ 처럼 소피 제르맹 꼴로 바꾸면 같은 골조 ★3 (2) 두 이차식의 곱으로 인수분해될 조건을 묻는 역문제 ★4 (3) 인수 중 하나를 보기로 주고 나머지를 고르게 하면 ★2 로 낮아짐.'
```

```yaml
- id: GN-CM1-69-e5
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 여러 문자를 포함한 식의 인수분해. ⑴ $x$, $y$, $z$ 의 삼차식, ⑵ 순환식 $ab(a-b)+bc(b-c)+ca(c-a)$, ⑶ $x$, $y$ 의 이차식에 일차·상수항이 붙은 형.
  category: '차수가 가장 낮은 문자로 내림차순 정리 → 공통인수 또는 이차식 인수분해'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "어느 문자로 내림차순 정리하느냐가 풀이 성패를 가름 — 차수가 가장 낮은 문자를 고르는 갈래 선택"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 을 $(x^3-y^3)+z(x^2-y^2)+z^2(x-y)$ 로 묶어 $x-y$ 를 공통인수로 드러내는 변형"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '여러 개의 문자를 포함한 식의 인수분해(최저 차수 문자 정리)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 문항 모두 같은 원리다 — 문자를 하나 골라 그 문자의 다항식으로 보되, 차수가 가장 낮은 문자를 골라야 이차식 인수분해나 공통인수 묶기로 끝난다. ⑵ 는 $a$ 로 정리하면 $a$ 의 이차식이 되고 $a=b$ 를 넣어 0 이 되는 것에서 $a-b$ 가 보인다.
    문자 선택 통찰(SC d2) + 묶기(EQV d1) · M_total 8 → 필수 예제 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '차수가 가장 낮은 문자 선택 → 그 문자의 내림차순 정리 → 공통인수 묶기 또는 이차식 인수분해'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $(x-y)(x^2+y^2+z^2+xy+yz+zx)$ ⑵ $(a-b)(a-c)(b-c)$ ⑶ $(x+y+2)(2x-y+6)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/69-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑶ 의 일차항 계수 10, 4 와 상수 12 는 두 일차식의 곱으로 떨어지도록 함께 바꾼다(십자셈이 정수로 맞아야 함). ⑴⑵ 는 순환·대칭 구조 자체가 골조라 계수를 바꾸면 인수분해가 깨진다 — 문자 개수만 늘리거나 줄인다.'
    creative: '(1) ⑶ 에서 문자 하나를 더해 세 문자 이차식으로 만들면 최저 차수 문자가 명확해져 SC 가 d1 로 내려감 ★2~3 (2) 순환식의 부호를 하나 바꿔 인수가 $(a+b)(b+c)(c+a)$ 가 되게 하면 골조 유지 ★3 (3) 인수분해 결과를 주고 빈 계수를 묻는 역문제로 바꾸면 BW 추가 ★3~4.'
```

```yaml
- id: GN-CM1-69-124
  page: 69
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 여러 문자를 포함한 식의 인수분해 네 문항. ⑴ 은 대칭 순환식, ⑵⑶ 은 두 문자 이차식, ⑷ 는 $z$ 에 대해 일차인 세 문자 식.
  category: '최저 차수 문자로 내림차순 정리 → 이차식 인수분해(십자셈) 또는 공통인수'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑷ 처럼 한 문자만 일차인 식에서 그 문자를 골라 정리해야 함 — 정리 기준 문자 선택"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정리한 뒤 상수항을 두 일차식의 곱으로 먼저 쪼개 십자셈이 가능한 형태로 바꿈"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '여러 개의 문자를 포함한 식의 인수분해(최저 차수 문자 정리 · 십자셈)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑵⑶ 은 $x$ 에 대해 정리한 뒤 $y$ 만의 상수항을 먼저 인수분해해야 십자셈이 맞아떨어진다. ⑷ 는 $z$ 가 일차라 $z$ 로 정리하면 계수 $2(y+x+1)$ 이 나오고 나머지가 $x^2-y^2+4x+2y+3$ 으로 정리된다.
    앞 필수 예제와 같은 골조·같은 통찰 구성 · M_total 8 → 확인체크 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '일차 또는 최저 차수 문자로 정리 → 나머지 문자만의 상수항 인수분해 → 십자셈으로 두 일차식의 곱'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $(a+b)(b+c)(c+a)$ ⑵ $(x+3y-2)(x-2y+3)$ ⑶ $(3x+y-1)(x+y-3)$ ⑷ $(x+y+1)(x-y+2z+3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/69-124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑵⑶ 은 두 일차식의 곱을 먼저 정하고 전개해서 문제를 만드는 쪽이 안전하다(계수를 임의로 바꾸면 정수 인수분해가 깨짐). ⑷ 도 $(x+y+1)(x-y+2z+3)$ 처럼 결과에서 역산한다.'
    creative: '(1) 세 문자 모두 이차로 만들어 최저 차수 문자가 없게 하면 SC 가 d3 로 올라 ★4 (2) 인수 하나를 보기로 주고 판정하게 하면 ★2 (3) 인수분해가 되도록 하는 계수 조건을 묻는 역문제는 STEP 2 의 74-138 골조와 같아짐 ★3.'
```

```yaml
- id: GN-CM1-70-e6
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $x^3-4x^2+x+6$, ⑵ $3x^3-5x^2-34x+24$ 를 인수분해. 인수정리로 근 하나를 찾고 조립제법으로 낮추는 형.
  category: '$f(a)=0$ 인 $a$ 를 상수항·최고차항 약수에서 찾기 → 조립제법 → 몫 인수분해'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '인수정리를 이용한 삼차식의 인수분해(조립제법)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    후보를 (상수항의 약수)/(최고차항 계수의 약수)로 좁혀 대입하는 표준 절차뿐이라 통찰 라벨 없음. ⑵ 는 최고차항 계수가 3 이라 후보에 분수 $2/3$ 이 들어가는 것이 유일한 부담.
    통찰 0 이지만 M_total 6 이라 −1 요건 미달 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '약수 후보 대입으로 $f(a)=0$ 찾기 → 조립제법으로 이차식 몫 → 몫을 십자셈으로 분해'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x+1)(x-2)(x-3)$ ⑵ $(x+3)(3x-2)(x-4)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/70-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 근을 먼저 정하고 전개해 계수를 만든다. 정수근 하나는 반드시 남겨야 하고(아니면 유리수 범위에서 인수분해 불가), 최고차항 계수를 2, 3 으로 두면 분수근 후보가 생겨 난도가 한 단 오른다.'
    creative: '(1) 사차식으로 올려 조립제법을 두 번 쓰게 하면 Mₛ 상승 ★2~3 (2) 계수 하나를 미지수로 두고 인수 조건을 주면 70-126 골조 ★2 (3) 몫이 더 이상 인수분해되지 않게 설계해 인수의 개수를 묻는 형으로 ★2.'
```

```yaml
- id: GN-CM1-70-125
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 인수정리를 이용한 인수분해 네 문항. ⑶⑷ 는 사차식이라 조립제법을 두 번 써야 한다.
  category: '인수정리로 근 찾기 → 조립제법 반복 → 남은 이차식 분해'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '인수정리를 이용한 인수분해(사차식 · 조립제법 2회)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 앞 예제와 같고 차수만 올라간다. ⑶ 은 $x=1$, $x=-1$ 을 차례로 쓰면 몫이 $x^2-3x+1$ 로 더 분해되지 않고, ⑷ 는 네 개의 정수근이 모두 나온다.
    통찰 라벨 없음 · M_total 7 → 확인체크 출발점 ★2 유지(계산량만 늘어난 반복 훈련).
  tier: star_2
  mechanism_primary: '약수 후보 대입 → 조립제법(필요하면 2회) → 남은 이차식까지 분해'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x+1)(x+2)(3x-2)$ ⑵ $(x-2)(x+3)(x+4)$ ⑶ $(x-1)(x+1)(x^2-3x+1)$ ⑷ $(x-1)(x-2)(x+2)(x+3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/70-125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근을 먼저 잡고 전개한다. ⑶ 처럼 마지막 몫이 인수분해되지 않게 하려면 몫의 판별식이 제곱수가 아니어야 한다. 계수가 커지면 후보 대입 횟수만 늘고 골조는 그대로다.'
    creative: '(1) 중근을 넣어 $(x-a)^2$ 인수가 나오게 하면 74-136 골조로 이어짐 ★2 (2) 인수의 개수·합을 묻는 형 ★2 (3) 계수에 미지수를 넣고 나누어떨어질 조건을 주면 ★2~3.'
```

```yaml
- id: GN-CM1-70-126
  page: 70
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^3-6x^2-ax-6$ 이 $x-2$ 를 인수로 가질 때 상수 $a$ 를 정하고 이 다항식을 인수분해.
  category: '$f(2)=0$ 으로 $a$ 결정 → 조립제법 → 세 일차식의 곱'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '인수 조건으로 미정계수 결정 후 인수분해'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인수정리로 $f(2)=0$ 을 세워 $a$ 를 구하는 것은 스키마가 통찰로 인정하지 않는 표준 미정계수 절차라 insights 는 비워 뒀다.
    상수 $a$ 가 들어가 Mₐ 2 · M_total 6 → 확인체크 출발점 ★2 유지. 구한 $a$ 를 다시 넣고 끝까지 분해해야 답이 완성된다.
  tier: star_2
  mechanism_primary: '$f(2)=0$ → $a$ 결정 → 원식에 대입 → 조립제법으로 $(x-1)(x-2)(x-3)$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x-1)(x-2)(x-3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/70-126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 인수($x-2$)와 나머지 두 근을 먼저 정하고 전개해 계수를 만든다. 상수항 -6 과 $x^2$ 계수 -6 은 세 근의 곱·합으로 묶여 있으니 함께 바꾼다.'
    creative: '(1) 미지수를 두 개로 늘리고 인수를 두 개 주면 연립이 생겨 ★2~3 (2) $(x-2)^2$ 을 인수로 주면 74-136 골조 ★2 (3) 나머지가 특정 값이라는 조건으로 바꾸면 나머지정리 단원과 결합 ★2.'
```

```yaml
- id: GN-CM1-71-e7
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $(2026^3+1)/(2025 \times 2026+1)$, ⑵ $\sqrt{50 \times 52 \times 54 \times 56+16}$ 의 값. 큰 수를 문자로 두고 인수분해로 약분·완전제곱을 만드는 형.
  category: '반복되는 수를 문자로 치환 → 인수분해로 약분 또는 완전제곱 → 수 복원'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수의 계산을 문자식 인수분해로 옮기는 표현 전환 — 2026 을 $a$ 로 두면 분모가 $a^2-a+1$ 로 드러남"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 네 수를 곱의 합이 같아지도록 $50 \\times 56$, $52 \\times 54$ 로 짝짓는 갈래 선택"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '인수분해의 활용 — 수의 계산(문자 치환 · 짝짓기)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직접 계산하면 끝나지 않고, 큰 수를 문자로 바꿔 $a^3+1=(a+1)(a^2-a+1)$ 로 보는 순간 한 줄로 끝난다는 것이 이 유형의 전부다.
    ⑵ 는 네 수의 짝을 잘못 지으면 공통부분이 안 생긴다. RT d2 + SC d1 · depth_score 3 → 필수 예제 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '큰 수를 문자로 치환 → 곱셈 공식·공통부분으로 인수분해 → 약분 또는 제곱근을 벗기고 수 복원'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $2027$ ⑵ $2804$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/71-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 2026 은 어떤 수로 바꿔도 되지만 분모가 $a^2-a+1$ 이 되도록 2025 = a-1 을 연동해야 한다. ⑵ 는 등차인 네 수(공차 2)와 더하는 수 16 이 $(t+4)^2$ 를 만들도록 묶여 있다 — 공차를 d 로 바꾸면 더하는 수는 $d^4$ 로 바뀐다.'
    creative: '(1) 연도를 바꾸는 수치 변형이 가장 안전(골조·★ 불변) (2) 세제곱 차 $a^3-1$ 로 바꾸면 분모가 $a^2+a+1$ 이 되어 같은 ★3 (3) 결과가 자연수의 제곱임을 보이라는 서술형으로 바꾸면 VF 가 붙어 ★4.'
```

```yaml
- id: GN-CM1-71-e8
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $a-b=5$, $b-c=-2$ 일 때 $ab^2-a^2b+bc^2-b^2c+ca^2-c^2a$ 의 값.
  category: '여섯 항을 한 문자로 정리해 $(a-b)(b-c)(c-a)$ 로 인수분해 → 주어진 차로 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "여섯 항 교대식을 $a$ 에 대해 내림차순 정리해 $(a-b)(b-c)(c-a)$ 라는 곱 꼴로 바꾸는 동치 변형"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 두 차에서 $c-a = -(a-b)-(b-c)$ 를 만들어 세 인수를 모두 채움"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '인수분해의 활용 — 식의 값(교대식 $(a-b)(b-c)(c-a)$)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    값을 직접 구할 수 없고(문자 셋 중 확정된 것이 없음) 식이 두 차의 곱 꼴로 인수분해된다는 점이 유일한 열쇠다. $c-a$ 는 주어지지 않아 두 조건을 더해 만들어야 한다.
    EQV d2 + CON d1(공통수학1 에서 CON 은 보수적으로 인정하되 여기서는 조건 합성이 명시적) · depth_score 3 → 필수 예제 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '한 문자 내림차순 정리 → $(a-b)(b-c)(c-a)$ → $c-a$ 를 두 조건의 합으로 만들어 대입'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$30$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/71-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a-b$, $b-c$ 두 값은 자유롭게 바꿀 수 있고 답은 두 값과 그 합의 곱으로 정해진다(부호 주의). 셋 중 다른 두 차를 주어도 같은 골조다.'
    creative: '(1) 식의 부호를 바꿔 $(a-b)(b-c)(a-c)$ 가 되게 하면 부호 함정이 하나 늘어 ★3 유지 (2) 값을 주고 $a-b$ 를 역으로 묻는 형으로 바꾸면 BW 추가 ★3~4 — 75-142 가 그 형 (3) 세 문자를 네 문자 순환식으로 늘리면 Mₛ 상승 ★4.'
```

```yaml
- id: GN-CM1-71-127
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $98^3+6 \times 98^2+12 \times 98+8$, ⑵ $(3002^3-2003^3)/(3002^2+5005 \times 2003)$, ⑶ $10^2-12^2+14^2-16^2+18^2-20^2$ 의 값.
  category: '수를 문자로 치환 → 곱셈 공식·세제곱 차·제곱 차로 묶기 → 수 복원'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴⑵ 에서 98, 3002, 2003 을 문자로 두면 각각 $(a+2)^3$, $(a^3-b^3)/(a^2+ab+b^2)$ 구조가 드러남(5005 = 3002+2003 이 핵심)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶ 을 두 항씩 묶어 제곱 차 $(p-q)(p+q)$ 로 바꿔 공통인수 -2 를 뽑아냄"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '인수분해의 활용 — 수의 계산(곱셈 공식 · 제곱 차 묶기)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑵ 의 5005 를 3002+2003 으로 보는 순간 분모가 $a^2+ab+b^2$ 가 되어 약분된다 — 이 한 번의 관찰이 문제 전체다.
    ⑶ 은 여섯 항을 두 항씩 제곱 차로 묶는 표준 변형. RT d2 + EQV d1 · depth_score 3 → 확인체크 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '반복되는 수를 문자로 치환 → 곱셈 공식(세제곱 합·차, 제곱 차)으로 인수분해 → 약분 후 수 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1000000$ ⑵ $999$ ⑶ $-180$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/71-127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 은 $(a+2)^3$ 구조라 98 을 다른 수로 바꾸면 계수 6, 12, 8 은 그대로 두고 답만 바뀐다(더하는 수를 3 으로 하면 9, 27, 27). ⑵ 는 두 수 a, b 를 바꿀 때 분모의 교차항 계수를 반드시 a+b 로 맞춘다. ⑶ 은 등차 여섯 수의 공차만 바꾼다.'
    creative: '(1) ⑴ 을 네제곱 전개식으로 올리면 Mₖ 만 늘고 ★3 유지 (2) ⑵ 를 약분 결과가 특정 자연수가 되도록 하는 수를 묻는 역문제로 ★4 (3) ⑶ 을 일반항 $n$ 개 합으로 확장하면 PD 가 붙어 ★4.'
```

```yaml
- id: GN-CM1-71-128
  page: 71
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x=1+\sqrt{3}$, $y=1-\sqrt{3}$ 일 때 $x^3+y^3-x^2y-xy^2$ 의 값.
  category: '항을 묶어 $(x-y)^2(x+y)$ 로 인수분해 → $x+y$, $x-y$ 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$x^2(x-y)-y^2(x-y)$ 로 묶어 $(x-y)(x^2-y^2)=(x-y)^2(x+y)$ 를 만드는 변형"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '인수분해의 활용 — 식의 값(대칭식을 합·차로)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    무리수를 직접 세제곱하지 않고 $x+y=2$, $x-y=2\sqrt{3}$ 만 쓰도록 식을 합·차의 곱으로 바꾸는 한 단계짜리 통찰.
    묶는 방법이 한 가지로 보이는 d1 수준이고 M_total 6 · depth_score 1 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$x^3+y^3-x^2y-xy^2 = (x-y)^2(x+y)$ → $x-y$, $x+y$ 값 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/71-128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x$, $y$ 의 무리수 부분(제곱근 안의 수)과 유리수 부분을 자유롭게 바꿔도 골조는 같다. 답은 $(x-y)^2(x+y)$ 이므로 $x-y$ 를 바꾸면 제곱으로 커진다.'
    creative: '(1) $x^3-y^3-x^2y+xy^2$ 처럼 부호를 바꾸면 $(x-y)(x^2+xy+y^2)$ 갈래가 되어 곱 $xy$ 도 필요해져 ★3 (2) $x$, $y$ 를 이차방정식의 두 근으로 주면 근과 계수 관계와 결합해 XU ★3 (3) 값을 주고 $x$ 를 역으로 묻는 형 ★3.'
```

```yaml
- id: GN-CM1-72-e9
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    삼각형의 세 변 $a$, $b$, $c$ 가 $a^3-b^3-ab^2-c^2a+a^2b-bc^2=0$ 을 만족시킬 때 삼각형의 모양.
  category: '항 재배열 → $(a+b)(a^2-b^2-c^2)=0$ → 변의 길이 조건으로 갈래 정리 → 피타고라스 꼴 해석'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "여섯 항을 $a^2(a+b)-b^2(a+b)-c^2(a+b)$ 로 재배열해 $a+b$ 를 공통인수로 뽑는 변형"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$a^2=b^2+c^2$ 라는 대수 등식을 빗변이 $a$ 인 직각삼각형이라는 기하 결론으로 옮김"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '인수분해의 활용 — 삼각형의 모양 판단'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    항이 섞여 있어 어떤 묶음이 공통인수를 만드는지 보이지 않는 것이 이 문항의 저항이다. $a+b>0$ 이라 한 인수는 자동으로 기각되고 남는 조건이 피타고라스 꼴이다.
    EQV d2 + RT d1 · depth_score 3 이지만 출발점이 ★3 인 발전 예제라 +1 요건(depth 3 또는 depth_score 5) 미달 → ★3 유지.
  tier: star_3
  mechanism_primary: '$(a+b)(a^2-b^2-c^2)=0$ → $a+b>0$ → $a^2=b^2+c^2$ → 빗변 $a$ 인 직각삼각형'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '빗변의 길이가 $a$인 직각삼각형'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/72-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 임의로 바꾸면 인수분해가 깨진다. 결과 꼴(예: $(b+c)(b^2-a^2-c^2)$ 또는 $(a-b)(a+b+c)$)을 먼저 정하고 전개해 문항을 만든다.'
    creative: '(1) 결론이 이등변삼각형이 되도록 $(a-b)(\cdots)=0$ 꼴로 설계하면 72-129 ★2 (2) 두 인수가 모두 기하적으로 가능해 삼각부등식으로 하나를 걸러야 하게 만들면 VF 가 붙어 ★4 — 75-146 이 그 형 (3) 모양 판단 대신 넓이·둘레를 묻는 형으로 확장하면 72-130 ★3.'
```

```yaml
- id: GN-CM1-72-129
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼각형의 세 변 $a$, $b$, $c$ 가 $a^2+ac-b^2-bc=0$ 일 때 삼각형의 모양. 5지선다.
  category: '제곱 차와 공통인수로 $(a-b)(a+b+c)=0$ → 둘레 양수로 한 인수 기각'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$(a^2-b^2)+c(a-b)$ 로 묶어 $(a-b)(a+b+c)$ 를 얻는 변형"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '인수분해의 활용 — 삼각형의 모양 판단(이등변 판정)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 항을 두 항씩 묶으면 바로 $(a-b)(a+b+c)=0$ 이고, 변의 길이 합이 양수라 $a=b$ 만 남는 1단계 문항이다.
    발전 예제 뒤의 확인체크지만 단계·계산이 모두 가벼워(M_total 5) 확인체크 출발점 ★2 유지 — 앞 예제 ★3 대비 한 단 낮지만 1단 차이라 분류 이슈로 올리지 않았다.
  tier: star_2
  mechanism_primary: '$(a-b)(a+b+c)=0$ → $a+b+c>0$ → $a=b$ 인 이등변삼각형'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/72-129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 대신 문자 배치를 바꾼다($b^2+bc-c^2-ca=0$ 이면 $b=c$). 결론을 먼저 정하고 $(x-y)(a+b+c)$ 를 전개해 만든다.'
    creative: '(1) 인수가 $(a-b)(a-c)$ 두 개가 되도록 만들면 두 경우를 모두 답해야 해 MI 추가 ★3 (2) 직각삼각형이 나오도록 제곱항 구성을 바꾸면 72-e9 ★3 (3) 선택지를 없애고 서술형으로 바꾸면 ★2 유지.'
```

```yaml
- id: GN-CM1-72-130
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    둘레가 $18$ 인 삼각형의 세 변 $a$, $b$, $c$ 가 $a^3+b^3+c^3-3abc=0$ 일 때 삼각형의 넓이.
  category: '세제곱 항등식으로 인수분해 → 제곱 합 = 0 → 정삼각형 → 넓이 공식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca)$ 를 쓰고 둘째 인수를 제곱 합의 절반으로 다시 바꿔 $a=b=c$ 를 끌어냄"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정삼각형이라는 대수 결론을 한 변 6 의 정삼각형 넓이 계산으로 옮김"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '인수분해의 활용 — 삼각형의 모양 판단(세제곱 항등식 · 넓이)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    인수분해만으로는 $a+b+c=0$ 또는 둘째 인수 = 0 까지만 가고, 둘째 인수를 $\frac{1}{2}\{(a-b)^2+(b-c)^2+(c-a)^2\}$ 로 다시 보는 두 번째 변형이 있어야 $a=b=c$ 가 나온다.
    둘레 18 조건은 한 변 6 을 주는 장치. EQV d2 + RT d1 · depth_score 3 → 확인체크 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: '세제곱 항등식으로 인수분해 → 제곱 합 = 0 → $a=b=c=6$ → 정삼각형 넓이'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/72-130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '둘레 18 은 3 의 배수면 무엇이든 되고 답은 한 변의 제곱에 비례한다. 조건식 $a^3+b^3+c^3=3abc$ 자체는 항등식 구조라 계수를 바꾸면 안 된다.'
    creative: '(1) 넓이 대신 $a^2+b^2+c^2$ 나 외접원 반지름을 묻는 형 ★3 (2) 양수 조건을 빼면 $a+b+c=0$ 갈래가 살아나 VF 가 붙고 ★4 — 74-140 이 그 형 (3) 둘레를 주지 않고 비를 묻는 형으로 바꾸면 ★2.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-73-131
  page: 73
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다섯 개의 인수분해 등식 중 옳은 것 고르기. 세제곱 합, 제곱 차, 공통인수, 세제곱 차, 세제곱 완전세제곱 공식이 하나씩 배치된 정오 판정형.
  category: '보기마다 곱셈 공식 적용 → 전개로 검산 → 옳은 등식 선택'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '인수분해 공식의 정오 판정(5지선다)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기 다섯 개를 각각 공식에 대조하는 절차형. 함정은 두 가지 — 세제곱 합의 가운데 항 부호(T-부호)와 $(x-3y)^3$ 전개 계수(T-표기)다.
    ④ 는 $x^4-8x = x(x^3-8)$ 로 공통인수를 먼저 뽑아야 보인다. 통찰 라벨 없음 · M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '보기별로 공통인수·곱셈 공식 확인 → 부호와 계수 대조 → 옳은 것 하나 선택'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/73-131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 보기의 계수는 공식이 성립하거나 한 군데만 틀리도록 잡는다. 오답 보기는 부호 하나 또는 계수 하나만 바꾸는 것이 원칙(두 군데 바꾸면 판정이 쉬워짐).'
    creative: '(1) 옳지 않은 것을 고르는 형으로 뒤집으면 ★2 유지 (2) 보기를 ㄱㄴㄷ 합답형으로 바꾸면 모든 보기를 끝까지 봐야 해 Mₛ 상승 ★2~3 (3) 공통인수를 먼저 뽑아야 하는 보기를 늘리면 ★3.'
```

```yaml
- id: GN-CM1-73-132
  page: 73
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $(x^2-3x)(x^2-3x-1)-6$ 의 인수가 아닌 것 고르기. 5지선다.
  category: '공통부분 치환 → 이차식 인수분해 → 복원 후 끝까지 분해 → 보기 대조'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '공통부분이 있는 식의 인수분해(인수 판정)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공통부분이 발문에 그대로 드러나 있어 치환이 표준 절차이고, 얻은 $(x^2-3x-3)(x^2-3x+2)$ 에서 뒤 인수를 $(x-1)(x-2)$ 까지 쪼개야 보기 판정이 된다.
    [분류 이슈] 통찰 0 · M_total 5 로 −1 후보지만, 완전 인수분해를 요구하고 「아닌 것」 형이라 STEP 1 출발점 ★2 를 유지했다(후보 ★1).
  tier: star_2
  mechanism_primary: '$t=x^2-3x$ 치환 → $(t-3)(t+2)$ → 복원 후 $(x-1)(x-2)$ 까지 분해 → 보기 중 없는 것 선택'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/73-132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '뺀 수 6 은 $t$ 의 이차식이 정수 인수분해되도록 고른다(합·곱 조건). 공통부분 $x^2-3x$ 의 계수를 바꾸면 복원 후 한 인수가 또 분해되는지가 달라지니 함께 확인한다.'
    creative: '(1) 인수의 개수나 모든 인수의 합을 묻는 형 ★2 (2) 공통부분이 바로 보이지 않게 항을 풀어써 두면 EQV d1 이 붙어 ★2~3 (3) 인수 하나를 주고 나머지 계수를 묻는 역문제 ★3.'
```

```yaml
- id: GN-CM1-73-133
  page: 73
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x^4-13x^2+4$ 가 $(x^2+ax-b)(x^2-ax-b)$ 로 인수분해될 때 양수 $a$, $b$ 에 대한 $a+b$.
  category: '주어진 곱을 전개 → 계수 비교 → 양수 조건으로 $a$, $b$ 확정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$x^4+ax^2+b$ 꼴 인수분해의 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인수분해 꼴이 발문에 주어져 있어 제곱 차 갈래를 스스로 고를 필요가 없다 — $(x^2-b)^2-(ax)^2$ 을 전개해 $b^2=4$, $2b+a^2=13$ 을 비교하는 표준 미정계수 절차.
    양수 조건이 $b=-2$, $a=-3$ 을 자동으로 막아 주는 장치(T-범위). 통찰 라벨 없음 · M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$(x^2-b)^2-(ax)^2$ 전개 → 계수 비교 $b^2=4$, $a^2+2b=13$ → 양수 해 $a=3$, $b=2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/73-133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$b$ 를 먼저 정해 상수항 $b^2$ 를 만들고 $x^2$ 계수를 $-(a^2+2b)$ 로 맞춘다. 상수항은 완전제곱수, $a^2$ 는 제곱수여야 정수 답이 나온다.'
    creative: '(1) 인수분해 꼴을 감추고 직접 분해하게 하면 68-e4 의 SC·EQV 가 붙어 ★3 (2) $ab$ 나 $a-b$ 를 묻는 형 ★2 (3) 양수 조건을 빼면 부호 갈래를 모두 따져야 해 MI 추가 ★3.'
```

```yaml
- id: GN-CM1-73-134
  page: 73
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $2x^2-xy-y^2-4x+y+2$ 가 $(ax+by-1)(cx+dy-2)$ 로 인수분해될 때 정수 $a$, $b$, $c$, $d$ 에 대한 $a+b-c-d$.
  category: '$x$ 에 대해 정리·십자셈으로 두 일차식 → 상수항 -1, -2 자리에 맞춰 대응'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '여러 문자 이차식의 인수분해와 계수 대응'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $2x^2-xy-y^2=(2x+y)(x-y)$ 로 이차항을 먼저 쪼개고 상수를 붙여 $(2x+y-2)(x-y-1)$ 을 얻는 표준 십자셈.
    [분류 이슈] 마지막에 어느 인수가 상수항 -1 자리이고 어느 것이 -2 자리인지 맞춰야 부호가 뒤집히지 않는다(T-표기·T-부호). 통찰은 없지만 M_total 8 로 STEP 1 최상단 노동량 → ★2 유지(후보 ★3).
  tier: star_2
  mechanism_primary: '이차항 $2x^2-xy-y^2$ 십자셈 → 상수항 붙여 $(2x+y-2)(x-y-1)$ → 주어진 꼴의 상수 자리에 맞춰 계수 읽기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/73-134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 일차식을 먼저 정하고 전개해 문항을 만든다. 상수항 두 개는 서로 다른 값이어야 대응이 하나로 정해지고, 같으면 답이 두 가지가 된다.'
    creative: '(1) 상수항 지정을 없애고 $a+b+c+d$ 처럼 대칭인 값을 묻게 하면 대응 함정이 사라져 ★2 이하 (2) 계수 하나를 미지수로 두고 인수분해 가능 조건을 물으면 74-138 골조 ★3 (3) 세 문자로 늘리면 최저 차수 문자 선택이 생겨 SC ★3.'
```

```yaml
- id: GN-CM1-73-135
  page: 73
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $a^2b-ac+ab^2-bc-c+ab$ 의 인수인 것 고르기. 5지선다.
  category: '$c$ 에 대해 정리 → $ab(a+b+1)-c(a+b+1)$ → 공통인수 묶기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "차수가 가장 낮은 $c$ 로 정리해 $a+b+1$ 이 공통인수로 드러나게 하는 변형"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '여러 문자 식의 인수분해(최저 차수 문자 정리 · 인수 판정)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    여섯 항이 섞여 있지만 $c$ 가 일차라 $c$ 로 정리하면 $(ab-c)(a+b+1)$ 이 한 번에 나온다. 69 쪽 필수 예제 기법의 축소판.
    통찰 1개(EQV d1) · depth_score 1 · M_total 6 → STEP 1 출발점 ★2 유지. 보기에 $ab+c$ 가 있어 부호를 뒤집으면 바로 틀린다.
  tier: star_2
  mechanism_primary: '$c$ 에 대해 내림차순 정리 → $(ab-c)(a+b+1)$ → 보기 중 인수인 것 선택'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/73-135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 인수를 먼저 정하고($(ab-c)$, $(a+b+1)$ 류) 전개한다. 상수 1 을 다른 수로 바꾸면 항의 개수가 달라지니 전개식을 다시 만든다.'
    creative: '(1) 인수가 아닌 것을 고르는 형 ★2 (2) 문자를 넷으로 늘리고 최저 차수 문자를 감추면 SC d2 ★3 (3) 인수분해 결과의 각 인수에 값을 대입해 식의 값을 묻는 형 ★2~3.'
```

```yaml
- id: GN-CM1-74-136
  page: 74
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=2x^4+5x^3+x^2+ax+b$ 가 $(x+1)^2$ 을 인수로 가질 때 상수 $a$, $b$ 를 구하고 $f(x)$ 를 인수분해.
  category: '$(x+1)^2$ 인수 조건을 조립제법 두 번의 나머지 0 으로 옮김 → $a$, $b$ 연립 → 몫 분해'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중복 인수 조건을 $f(-1)=0$ 하나로 끝내지 않고 $x+1$ 로 나눈 몫도 $x+1$ 로 나누어떨어져야 한다는 두 식으로 옮기는 동치 변형"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '중복 인수 조건과 미정계수(조립제법 2회)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(-1)=0$ 만으로는 식이 하나뿐이라 미지수 둘을 못 정한다 — 조립제법을 한 번 더 해 몫의 나머지도 0 이라는 둘째 식을 만들어야 한다는 점이 이 문항의 관문이다.
    통찰 1개(EQV d2) · depth_score 2 로 +1 요건(3) 미달 → STEP 1 출발점 ★2 유지. STEP 1 안에서는 상단 난도.
  tier: star_2
  mechanism_primary: '조립제법 1회 나머지 0, 2회 나머지 0 → $a$, $b$ 연립 → 몫 $2x^2+x-3$ 분해'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=-5$, $b=-3$, $(x+1)^2(x-1)(2x+3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/74-136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 인수(중근 포함)를 먼저 정하고 전개해 계수를 만든다. 최고차항 계수 2 를 1 로 바꾸면 계산이 크게 가벼워지고, 중근을 $x-2$ 류로 바꾸면 조립제법 수가 커질 뿐 골조는 같다.'
    creative: '(1) $(x+1)^3$ 을 인수로 주면 조립제법 3회로 Mₛ 상승 ★3 (2) 미지수를 하나만 두고 나머지를 묻는 형으로 낮추면 ★2 이하 (3) 인수분해 결과에서 실근의 개수·합을 묻는 형으로 확장 ★2~3.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-74-137
  page: 74
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $(x-1)(x-3)(x-5)(x-7)+k$ 가 이차식의 완전제곱식으로 인수분해되도록 하는 상수 $k$.
  category: '상수항 합이 같도록 짝짓기 → 공통부분 치환 → 완전제곱 조건으로 $k$ 역추적'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 일차식 중 $(x-1)(x-7)$, $(x-3)(x-5)$ 로 짝지어야 공통부분 $x^2-8x$ 가 생김 — 짝짓기 갈래 선택"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과가 완전제곱식이라는 조건에서 $t^2+22t+(105+k)$ 의 상수항이 $11^2$ 이어야 함을 역추적해 $k$ 결정"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '네 일차식의 곱 + 상수가 완전제곱식이 될 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    짝짓기로 $t=x^2-8x$ 를 만든 뒤, 완전제곱식 조건을 $t$ 의 이차식의 판별식 0(또는 상수항 = (절반)²)으로 옮기는 역방향 문항이다.
    SC d1 + BW d2 · depth_score 3 이지만 출발점이 ★3 인 STEP 2 라 +1 요건 미달 → ★3 유지.
  tier: star_3
  mechanism_primary: '$(x-1)(x-7)$, $(x-3)(x-5)$ 짝짓기 → $t=x^2-8x$ → $(t+11)^2$ 이 되도록 $105+k=121$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/74-137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 상수는 등차(1, 3, 5, 7)면 항상 짝지어지고 $k$ 는 공차의 네제곱으로 정해진다 — 공차 2 → 16, 공차 1 → 1, 공차 3 → 81. 등차가 아니면 두 쌍의 합이 같도록만 맞춘다.'
    creative: '(1) $k$ 를 주고 완전제곱식임을 보이라는 서술형 ★3 (2) 완전제곱식이 아니라 두 이차식의 곱이 되는 $k$ 의 범위를 묻는 형으로 바꾸면 MI 추가 ★4 (3) 네 수를 문자 $a$ 로 일반화하면 Mₐ 상승 ★4.'
```

```yaml
- id: GN-CM1-74-138
  page: 74
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    $x^2+kxy-3y^2+x+11y-6$ 이 $x$, $y$ 에 대한 두 일차식의 곱으로 인수분해되도록 하는 자연수 $k$.
  category: '두 일차식의 곱을 가정 → $y$ 항·상수항 계수 비교 → 자연수 조건으로 갈래 확정'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "인수분해가 된다는 결과 조건에서 $(x+\\alpha y+\\beta)(x+\\gamma y+\\delta)$ 를 세우고 계수 조건을 역추적"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수 조건을 만족하는 부호 갈래가 둘인데 자연수 $k$ 조건이 음수 갈래를 기각"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '두 일차식의 곱으로 인수분해될 조건(미정계수 역추적)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $-3y^2+11y-6=-(3y-2)(y-3)$ 처럼 $y$ 만의 부분을 먼저 쪼갠 뒤 상수항 합이 1 이 되도록 배치하면 $xy$ 계수가 정해진다.
    기출 태그는 통찰이 d2 하나·골조가 표준이라 +0 으로 봤다. BW d2 + VF d1 · depth_score 3, 출발점 ★3 → ★3 유지.
  tier: star_3
  mechanism_primary: '$y$ 만의 이차·일차·상수 부분 인수분해 → 두 일차식 배치 → $xy$ 계수에서 $k$, 자연수 조건으로 확정'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/74-138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 일차식을 먼저 정하고 전개해 $y$ 계수 11, 상수 -6 을 만든다. $y^2$ 계수 -3 과 상수항 -6 은 각각 정수 인수분해가 돼야 하고, 자연수 조건을 빼면 답이 두 개가 된다.'
    creative: '(1) 판별식이 완전제곱식이 될 조건으로 푸는 갈래를 열어 두면 SC 가 붙어 ★4 (2) $k$ 의 모든 값의 합을 묻는 형으로 바꾸면 VF 가 강화돼 ★4 (3) 세 문자로 늘리면 최저 차수 문자 선택이 추가돼 ★4.'
```

```yaml
- id: GN-CM1-74-139
  page: 74
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    서로 다른 세 실수 $a$, $b$, $c$ 에 대하여 $\dfrac{(b-a)c^2+(c-b)a^2+(a-c)b^2}{(a-b)(b-c)(c-a)}$ 의 값.
  category: '분자를 한 문자 내림차순 정리 → $(a-b)(b-c)(c-a)$ 로 인수분해 → 약분'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자를 $a$(또는 $c$)에 대해 내림차순 정리해 분모와 같은 교대식 $(a-b)(b-c)(c-a)$ 꼴로 바꾸는 변형"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '교대식의 인수분해와 약분(식의 값)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자를 전개해 놓고 보면 71-e8 과 같은 여섯 항 교대식이고, 한 문자로 정리해 세 차의 곱으로 묶으면 분모와 약분돼 상수만 남는다.
    통찰 1개지만 부호를 어느 순서로 뽑느냐에 따라 답이 $\pm 1$ 로 갈려 함정이 둘(T-부호·T-표기). M_total 8 · 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '분자 한 문자 정리 → $(a-b)(b-c)(c-a)$ 인수분해 → 분모와 약분'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/74-139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '수치가 없는 항등식형이라 바꿀 수는 분자·분모의 문자 순서와 부호뿐이다. 분모를 $(a-b)(b-c)(a-c)$ 로 바꾸면 답의 부호가 뒤집힌다.'
    creative: '(1) 분자에 $a^3$ 류 항을 섞어 인수분해 꼴을 감추면 EQV d3 ★4 (2) 분모를 주지 않고 분자만 인수분해하라는 형으로 낮추면 ★2~3 (3) 네 문자 교대식으로 확장하면 Mₛ·Mₐ 상승 ★4.'
```

```yaml
- id: GN-CM1-74-140
  page: 74
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    세 양수 $a$, $b$, $c$ 가 $a^3+b^3+c^3=3abc$ 를 만족시킬 때 $a+b+c-\dfrac{ab}{c}-\dfrac{bc}{a}-\dfrac{ca}{b}$ 의 값.
  category: '세제곱 항등식 인수분해 → 양수 조건으로 갈래 기각 → $a=b=c$ 대입'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$(a+b+c)(a^2+b^2+c^2-ab-bc-ca)=0$ 의 둘째 인수를 제곱 합의 절반으로 다시 보아 $a=b=c$ 를 끌어냄"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 갈래 중 $a+b+c=0$ 은 세 수가 양수라는 조건에 걸려 기각 — 검증 없이는 틀린 결론에 도달"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '세제곱 항등식 $a^3+b^3+c^3-3abc$ 의 활용(식의 값)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 72-130 과 같고, 다른 점은 결론을 넓이가 아니라 분수식에 넣는다는 것뿐이다. $a=b=c$ 이면 뒤 세 분수는 각각 $a$ 가 되어 상쇄된다.
    EQV d2 + VF d1 · depth_score 3, 출발점 ★3 유지. 양수 조건을 빠뜨리면 $a+b+c=0$ 갈래를 남겨 답이 흔들린다.
  tier: star_3
  mechanism_primary: '$a^3+b^3+c^3-3abc=0$ 인수분해 → 양수 조건으로 $a=b=c$ → 각 분수가 $a$ 가 되어 0'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/74-140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항등식 구조라 계수는 고정이다. 묻는 식만 바꾼다 — 예를 들어 $\\dfrac{a^2+b^2+c^2}{ab+bc+ca}$ 를 물으면 답이 1 이 된다.'
    creative: '(1) 양수 조건을 실수로 바꾸면 $a+b+c=0$ 갈래가 살아나 경우 분류가 생기고 MI+VF 로 ★4 (2) 세 수가 삼각형의 세 변이면 72-130 골조 ★3 (3) $a^3+b^3+c^3=3abc$ 를 결론으로 두고 조건을 역으로 묻는 형 ★4.'
```

```yaml
- id: GN-CM1-74-141
  page: 74
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=x^3+4x^2-28x+32$ 일 때 $f(82)$ 의 값의 각 자리의 숫자의 합.
  category: '대입 전에 인수정리로 인수분해 → 곱셈이 쉬운 수의 곱으로 계산 → 자릿수 합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "82 를 그대로 세제곱하는 갈래 대신 $f$ 를 $(x-2)^2(x+8)$ 로 인수분해한 뒤 대입하는 갈래를 고름 — 갈래 선택이 계산 가능성을 가름"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '인수분해의 활용 — 수의 계산(다항식 인수분해 후 대입)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직접 대입하면 $82^3$ 이라 사실상 막히고, 인수분해하면 $80^2 \times 90$ 이라 암산 범위다. 중근이 나와 $(x-2)^2(x+8)$ 이 되는 것이 계산을 더 쉽게 만든다.
    [분류 이슈] SC d2 하나 · M_total 6 으로 노동량은 가볍지만 STEP 2 출발점을 유지해 ★3 으로 뒀다(후보 ★2).
  tier: star_3
  mechanism_primary: '$f(x)=(x-2)^2(x+8)$ → $f(82)=80^2 \times 90$ → 576000 의 자릿수 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/74-141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근을 먼저 정하고(중근을 쓰면 계산이 쉬워짐) 전개해 계수를 만든다. 대입할 수는 근보다 조금 큰 수로 잡아 $x-근$ 이 10 의 배수가 되게 하면 자릿수 합 문항이 성립한다.'
    creative: '(1) 자릿수 합 대신 소인수의 개수·약수의 개수를 묻는 형 ★3 (2) 사차식으로 올려 조립제법 2회 ★3 (3) 대입값을 문자로 두고 일반항을 묻는 형이면 PD 가 붙어 ★4.'
```

```yaml
- id: GN-CM1-75-142
  page: 75
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $a-b=3$, $b-c=2$ 이고 $(a-b+c)(ab+bc-ca)-abc=42$ 일 때 $a+c$ 의 값.
  category: '좌변 전개 후 한 문자 정리 → $(a-b)(b-c)(a+c)$ 로 인수분해 → 주어진 두 차로 $a+c$ 역산'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "전개한 일곱 항을 한 문자에 대해 정리해 $(a-b)(b-c)(a+c)$ 라는 곱 꼴로 바꾸는 변형 — 인수분해 꼴이 발문에 전혀 드러나 있지 않음"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식의 값 42 와 두 차 3, 2 에서 남은 인수 $a+c$ 를 역산"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '인수분해의 활용 — 식의 값(곱 꼴 복원 후 역산)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    71-e8 의 역방향 판. 거기서는 차를 주고 값을 물었고 여기서는 값을 주고 남은 인수를 묻는다. 좌변을 전개해 한 문자로 정리하기 전에는 곱 꼴이 보이지 않는 것이 저항점이다.
    EQV d2 + BW d1 · depth_score 3, 출발점 ★3 유지. Mₛ 는 전개·정리·인수분해·대입으로 3.
  tier: star_3
  mechanism_primary: '좌변 전개 → 한 문자 정리 → $(a-b)(b-c)(a+c)=42$ → $6(a+c)=42$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/75-142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 차 3, 2 와 식의 값 42 는 (차)×(차)×(구할 값)이 되도록 연동해서 바꾼다 — 값이 두 차의 곱으로 나누어떨어져야 정수 답이 나온다.'
    creative: '(1) $a+c$ 대신 $a$, $c$ 각각을 묻게 하면 연립이 추가돼 ★4 (2) 좌변을 그대로 두고 인수분해하라는 서술형으로 바꾸면 BW 가 빠져 ★3 (3) 세 문자 조건 중 하나를 없애면 미정 문제가 되므로 반드시 두 차를 유지한다.'
```

```yaml
- id: GN-CM1-75-143
  page: 75
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    세 모서리가 $x$, $x$, $x+3$ 인 직육면체에서 한 모서리 $1$ 인 정육면체 구멍 두 개를 뺀 나무 블록의 부피를 $(x+a)(x^2+bx+c)$ 로 나타낼 때 $a \times b \times c$. 5지선다.
  category: '그림에서 부피식 세우기 → $x^3+3x^2-2$ → 인수정리로 $(x+1)(x^2+2x-2)$ → 계수 곱'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 입체(구멍 두 개 포함)를 부피 다항식 $x^2(x+3)-2$ 로 옮기는 기하→대수 표현 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '인수분해의 활용 — 도형의 부피식 인수분해'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    식만 세우면 뒤는 $f(-1)=0$ 을 찾는 표준 인수정리다. 함정은 구멍이 두 개라 $2$ 를 빼야 한다는 것과, 주어진 꼴의 첫 인수가 일차식이라 $x+1$ 쪽을 $a$ 자리에 놓아야 한다는 것.
    그림은 발문에 모서리·구멍이 모두 글로 적혀 있어 라벨 확인용. RT d2 하나 · M_total 6, 출발점 ★3 유지(기출 +0).
  tier: star_3
  mechanism_primary: '부피 $= x^2(x+3)-2\times 1^3$ → $x^3+3x^2-2$ → $(x+1)(x^2+2x-2)$ → $1 \times 2 \times (-2)$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: 'crop:fig-75-143.png'
  latex: latex-bank/gn-cm1/items/75-143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '모서리 $x+3$ 의 3 과 구멍 개수 2 를 바꾸면 상수항이 달라지므로 삼차식이 정수근을 갖도록 함께 조정한다(구멍 개수 = 상수항의 절댓값). 구멍 모서리를 2 로 바꾸면 빼는 부피가 8 씩 커진다.'
    creative: '(1) 구멍을 원기둥으로 바꾸면 부피식에 원주율이 들어가 인수분해가 깨지므로 정육면체 유지 (2) 겉넓이를 묻는 형으로 바꾸면 이차식이 되어 ★2 (3) $x$ 의 값을 주고 실제 부피를 수로 계산하게 하면 71-e7 골조와 합쳐져 ★3.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-75-144
  page: 75
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 이차다항식 $P(x)$, $Q(x)$ 가 모든 실수 $x$ 에서 ㈎ $P-Q=6$, ㈏ $P^2+Q^2=2x^4+8x^3+8x^2+18$ 을 만족시킬 때 $P(-1)-Q(2)$.
  category: '$P=Q+6$ 대입 → 완전제곱 꼴로 정리 → $Q+3$ 이 이차식의 제곱근임을 이용해 $Q$ 결정'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건 ㈎ 로 미지 다항식을 하나로 줄이고 ㈏ 를 $(Q+3)^2 = x^4+4x^3+4x^2$ 라는 완전제곱 등식으로 바꾸는 변형"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우변이 $(x^2+2x)^2$ 이라는 완전제곱이어야 다항식 해가 존재한다는 점에서 $Q$ 를 역추적"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '항등식 조건과 완전제곱 꼴을 이용한 다항식 결정'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미지 대상이 수가 아니라 다항식이라 Mₐ 3. $P^2+Q^2$ 를 그대로 두면 손댈 수 없고, $P=Q+6$ 으로 줄인 뒤 $2\{(Q+3)^2 + 9\}$ 꼴로 묶어야 우변이 완전제곱이라는 정보를 쓸 수 있다.
    [분류 이슈] 제곱근 부호가 두 갈래($Q=x^2+2x-3$ 과 $Q=-x^2-2x-3$)이고 둘 다 이차다항식 조건을 만족하지만 답지는 앞 갈래만 취한다(뒤 갈래는 15). 답은 답지 값을 그대로 옮겼다.
    EQV d2 + BW d2 · depth_score 4 로 +1 요건(5 또는 depth 3) 미달 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: '$P=Q+6$ 대입 → $(Q+3)^2=(x^2+2x)^2$ → $Q=x^2+2x-3$, $P=Q+6$ → $P(-1)-Q(2)$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/75-144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '차 6 과 우변의 상수 18 은 $2 \times (차/2)^2 = 18$ 로 묶여 있으니 함께 바꾼다. 우변의 $x$ 항 부분은 어떤 이차식의 제곱이어야 하므로 $(x^2+px)^2$ 를 먼저 정하고 전개한다.'
    creative: '(1) 부호 두 갈래를 모두 답하게 하면 VF 가 추가돼 ★5 후보가 되지만 novelty 가 낮아 ★4 유지 (2) $P+Q$ 를 조건으로 주면 합·차 대칭이 생겨 SYM ★4 (3) 삼차다항식으로 올리면 Mₛ·Mₖ 상승 ★4~5.'
```

```yaml
- id: GN-CM1-75-145
  page: 75
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    $2$ 이상의 네 자연수 $a$, $b$, $c$, $d$ 에 대하여 $(14^2+2 \times 14)^2-18(14^2+2 \times 14)+45=a \times b \times c \times d$ 일 때 $a+b+c+d$. 5지선다.
  category: '$14$ 를 문자로 두고 공통부분 치환 → 네 일차식의 곱으로 분해 → 수 복원 후 합'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수 계산을 $x=14$ 인 문자식으로 옮겨 $(x^2+2x-3)(x^2+2x-15)$ 를 네 일차식 $(x+3)(x-1)(x+5)(x-3)$ 까지 분해"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "221, 209 를 소인수분해하는 수 갈래 대신 식으로 쪼개는 갈래를 고름"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2 이상의 자연수 넷이라는 조건으로 1 을 포함하는 분해를 배제해 네 수를 확정"
  insight_count: 3
  depth_score: 4.00
  type_id: null
  type_hint: '인수분해의 활용 — 수의 계산(공통부분 치환 후 네 인수)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $t=14^2+2 \times 14$ 로 보면 $t^2-18t+45=(t-3)(t-15)$ 이고, 여기서 멈추면 221·209 를 다시 소인수분해해야 한다. $14$ 를 $x$ 로 두면 두 이차식이 각각 일차식 둘로 쪼개져 네 수가 바로 나온다.
    [분류 이슈] 통찰 3개지만 계산량이 가벼워 M_total 6 이라 노동량 기준으로는 ★3 에 가깝다. 실력 UP·기출 출발점을 유지해 ★4 로 뒀다(후보 ★3).
  tier: star_4
  mechanism_primary: '$x=14$ 로 치환 → $(x^2+2x-3)(x^2+2x-15)$ → $(x-1)(x+3)(x-3)(x+5)$ → $13 \times 17 \times 11 \times 19$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/75-145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$t$ 의 이차식 계수 -18, 45 는 두 근이 모두 $x^2+2x$ 에서 다시 인수분해되는 값이어야 한다(-3 과 -15 가 각각 $(x-1)(x+3)$, $(x-3)(x+5)$ 로 쪼개짐). 대입하는 수 14 는 네 인수가 모두 2 이상이 되도록 충분히 크게 잡는다.'
    creative: '(1) 네 수의 곱 대신 가장 큰 소인수를 묻는 형 ★4 (2) 대입값을 문자로 두고 항등식으로 만들면 수 계산 맛이 사라져 ★3 (3) 세 자연수의 곱으로 바꾸면 한 인수가 합성수로 남아 분해 갈래가 생기고 VF 가 강화돼 ★4~5.'
```

```yaml
- id: GN-CM1-75-146
  page: 75
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $x^3-(a+b)x^2-(a^2+b^2)x+a^3+b^3+ab(a+b)$ 가 $x-c$ 로 나누어떨어질 때 세 변이 $a$, $b$, $c$ 인 삼각형의 모양.
  category: '상수항을 $(a+b)(a^2+b^2)$ 로 묶기 → $(x-a-b)(x^2-a^2-b^2)$ → 삼각부등식으로 갈래 기각'
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "상수항 $a^3+b^3+ab(a+b)$ 를 $(a+b)(a^2+b^2)$ 로 묶어 $x^2(x-a-b)-(a^2+b^2)(x-a-b)$ 라는 공통인수 구조를 드러냄"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$c=a+b$ 와 $c^2=a^2+b^2$ 두 갈래 중 앞 갈래를 삼각부등식으로 기각 — 이 검증이 없으면 틀린 결론에 도달"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '인수분해의 활용 — 삼각형의 모양 판단(두 갈래 중 기각)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    계수가 전부 문자라 Mₐ 3. 상수항을 $(a+b)(a^2+b^2)$ 로 보는 한 번의 묶기가 전체를 결정하고, 나누어떨어질 조건이 두 갈래를 주는데 $c=a+b$ 는 삼각형이 될 수 없어 기각된다.
    EQV d2 + VF d2 · depth_score 4 로 +1 요건(5 또는 depth 3) 미달 → 실력 UP 출발점 ★4 유지. ★5 게이트(통찰 3개 이상 + novelty)도 충족하지 않는다.
  tier: star_4
  mechanism_primary: '$(x-a-b)(x^2-a^2-b^2)$ 인수분해 → $c=a+b$ 는 삼각부등식 위배로 기각 → $c^2=a^2+b^2$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '빗변의 길이가 $c$인 직각삼각형'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/75-146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수가 모두 $a$, $b$ 의 대칭식이라 수치 변형 여지가 없다. 결과 꼴 $(x-a-b)(x^2-a^2-b^2)$ 를 기준으로 계수를 다시 전개해 문항을 만든다.'
    creative: '(1) 기각되는 갈래를 정삼각형 조건 등으로 바꾸면 VF 는 유지되고 결론만 달라짐 ★4 (2) $x-c$ 대신 나머지를 주면 나머지정리와 결합해 XU ★4~5 (3) 삼각부등식 언급을 빼고 세 양수로만 주면 두 갈래를 모두 답해야 해 MI ★4.'
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 0 · ★2 12 · ★3 17 · ★4 3 · ★5 0
- 통찰형 25 · 절차형 7 · premium 0
- 구역별: 필수·발전 예제 16(★2 6 · ★3 10) · STEP 1 6(★2 6) · STEP 2 7(★3 7) · 실력 UP 3(★4 3)
- 통찰 유형 분포(라벨 44개): I-EQV 19 · I-SC 10 · I-RT 6 · I-VF 4 · I-BW 4 · I-CON 1 — 이 단원은 「식을 다른 꼴로 묶어 보는」 EQV 가 절반이고, 짝짓기·정리 문자 선택이라는 SC 가 그 다음이다. XU·PD·SYM·MI 는 0.
- type_hint 상위 5(골조 기준으로 묶음): 「인수분해의 활용 — 수의 계산」 4 · 「인수분해의 활용 — 삼각형의 모양 판단」 4 · 「인수정리·조립제법 계열」 4 · 「공통부분이 있는 식의 인수분해」 3 · 「$x^4+ax^2+b$ 꼴의 인수분해」 3 (그 다음이 「여러 문자 식의 최저 차수 정리」 3 · 「인수분해의 활용 — 식의 값」 3)
- 그림: 1문(`crop:fig-75-143.png`) · 5지선다 6문 · 소문항 묶음 10문
- M_total 범위 5~10(중앙값 7) · 절차형 7문은 모두 인수정리·공식 대조 계열

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에는 2단 이상 드리프트가 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-73-132 | 통찰 0 · M_total 5 로 −1 요건을 만족하나 완전 인수분해 + 「아닌 것」 판정을 요구해 STEP 1 출발점 ★2 유지 | ★1 / ★2 |
| GN-CM1-73-134 | 통찰 0 이지만 M_total 8 로 STEP 1 최상단 노동량(상수항 대응 함정 포함) — 절차형이라 +1 하지 않음 | ★2 / ★3 |
| GN-CM1-74-141 | SC d2 하나 · M_total 6 으로 노동량은 가볍지만 STEP 2 출발점 유지 | ★2 / ★3 |
| GN-CM1-75-144 | 제곱근 부호 두 갈래가 모두 이차다항식 조건을 만족하는데 답지는 한 갈래만 취함(다른 갈래는 15). 답지 값 그대로 기록 | ★4 |
| GN-CM1-75-145 | 통찰 3개인데 M_total 6 으로 계산이 가벼움 — 실력 UP·기출 출발점을 유지해 ★4 | ★3 / ★4 |

## 카탈로그 차원 메모

나중에 공통수학1 유형 카탈로그를 만들 때 참고할 것.

- **따로 세워야 할 유형**: ① 공통부분이 있는 식의 인수분해(치환형)와 ② 네 일차식의 짝짓기형은 자주 같은 제목으로 묶이지만 **짝을 고르는 결정(I-SC)** 이 있고 없고가 학생 체감을 가른다 — 별도 유형이 맞다. 「$x^4+ax^2+b$ 꼴」도 ⓐ $x^2$ 치환으로 끝나는 것과 ⓑ 제곱 차를 만들어야 하는 것으로 나눠야 한다(★2 와 ★3 이 갈림).
- **통합해도 될 유형**: 「인수분해의 활용 — 수의 계산」(71-e7 · 71-127 · 74-141 · 75-145)은 전부 **큰 수를 문자로 두고 인수분해한다**는 한 골조다. 대입 대상이 분수식인지 제곱근인지 자릿수 합인지는 표면 차이라 한 유형 + 변형 축으로 두는 편이 낫다. 「삼각형의 모양 판단」(72-e9 · 72-129 · 72-130 · 75-146)도 한 유형으로 두되 **기각해야 할 갈래가 있는지**(I-VF)를 base ★ 2 와 4 를 가르는 축으로 쓰면 된다.
- **base ★ 제안**: 공통부분 치환 2 · 짝짓기 3 · 제곱 차 만들기 3 · 최저 차수 문자 정리 3 · 인수정리·조립제법 2 · 수의 계산 3 · 식의 값(교대식) 3 · 삼각형 모양 판단 3(갈래 기각형 4).
- 이 범위에는 I-XU·I-PD·I-SYM·I-MI 라벨이 하나도 없다. 인수분해 단원은 단원 내부 도구만으로 닫혀 있으므로 ★5 슬롯을 만들려면 나머지정리·이차방정식과 묶는 XU 설계가 따로 필요하다.

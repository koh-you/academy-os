---
name: mechanism-데이터-GN-M31-12
description: 개념원리 중학 3-1 12 인수분해를 이용한 이차방정식의 풀이(1/1 · 116~121쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 12 인수분해를 이용한 이차방정식의 풀이
  unit_code: GN-M31-12
  part: "1/1"
  extract_range: "116~121쪽 · 116-01~121-06"
  total_problems: 27
  unit_total: 27
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 12 인수분해를 이용한 이차방정식의 풀이 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 의 중단원 **12 인수분해를 이용한 이차방정식의 풀이**(116~121쪽 · 27문항 전수)를 다룬다. 구역은 「개념원리 확인하기」 4문 · 「핵심문제 익히기」 12문(핵심문제 h 6 + 확인문제 c 6) · 「계산력 강화하기」 5문 · 「이런 문제가 시험에 나온다」 6문이다. 그림 문항은 없고 난이도 태그도 붙어 있지 않다.

개념원리 중학은 난이도 level 표기가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」·「계산력 강화하기」는 도구 적용 드릴(★1), 「핵심문제 익히기」는 대표 유형 + 짝 확인문제(★2 출발), 「이런 문제가 시험에 나온다」는 시험 대비(★2~3)로 읽었다.

이 단원의 도구는 사실상 셋뿐이다 — **⑴ $AB=0$ 이면 $A=0$ 또는 $B=0$**, **⑵ 우변을 0 으로 정리한 뒤 인수분해**, **⑶ 완전제곱식이면 중근 · 중근 조건은 (상수항)=(일차항 계수의 절반)의 제곱**. 27문 중 20문이 이 셋의 직접 적용이라 절차형 비중이 매우 높다. 통찰이 실제로 개입하는 자리는 **해로부터 인수를 거꾸로 세우는 자리**(117-h1)와 **다섯 선지를 다 풀지 않고 인수에서 근만 뽑아 비교하는 자리**(121-01) 두 곳뿐이고, 나머지 난도는 **여러 도구를 2~3단으로 잇는 길이**(121-02 · 121-04 · 121-06)에서 온다. 그래서 이 범위의 ★3 은 통찰형이 아니라 **연쇄 길이형**이며, 분류 이슈에 그 점을 기록했다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-116-01
  page: 116
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 이미 인수분해된 꼴의 이차방정식 풀기($x(x-5)=0$ · $(x+3)(x-2)=0$ · $(x-1)(x-6)=0$ · $(x+6)(3x+2)=0$).
  category: "AB=0 성질 → 두 일차방정식 → 두 근"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$AB=0$의 성질을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 인수를 각각 0 으로 놓는 한 단계뿐이다. ⑷ 만 계수가 1 이 아니어서 $x=-2/3$ 처럼 분수 근이 나온다.
    함정은 인수 $(x+3)$ 에서 근을 $+3$ 으로 읽는 부호 실수(T-부호) 하나.
    확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "AB=0 → A=0 또는 B=0 → 각 일차방정식의 해"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=0$ 또는 $x=5$ ⑵ $x=-3$ 또는 $x=2$ ⑶ $x=1$ 또는 $x=6$ ⑷ $x=-6$ 또는 $x=-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/116-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 인수의 상수항과 일차항 계수를 자유롭게 바꿀 수 있다. 제약: 중3 단계이므로 계수는 정수로 두고, 계수가 1 이 아닌 인수는 문항당 1개 이하로 유지해 분수 근이 하나만 나오게 한다. x(x-k) 꼴(근 0 포함)은 한 소문항에 남겨 둔다."
    creative: "(1) 인수를 $(a-x)$ 꼴로 뒤집어 부호 함정을 키우기(★1 유지) (2) 세 인수 곱 $=0$ 으로 삼차방정식 맛보기(교육과정 밖) (3) 두 근을 주고 방정식을 고르게 하면 117-h1 의 역구성 골조가 되어 ★2."
```

```yaml
- id: GN-M31-116-02
  page: 116
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑹ 우변이 0 인 이차방정식을 인수분해해서 풀기(공통인수 · 합차 · $x^2+(a+b)x+ab$ · $ax^2+bx+c$ 까지 6문).
  category: "인수분해 → AB=0 → 두 근"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해를 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    인수분해 네 유형(공통인수 · 합차 · 이차항 계수 1 · 이차항 계수 1 아님)을 한 문항에 모아 놓은 드릴이다.
    ⑸⑹ 의 십자곱셈만 계산 부담이 있어 Mₖ 2, 그 외는 한 줄.
    확인하기 구역 ★1 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "좌변 인수분해 → AB=0 → 각 인수의 근"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=0$ 또는 $x=-3$ ⑵ $x=-2$ 또는 $x=2$ ⑶ $x=4$ 또는 $x=7$ ⑷ $x=-4$ 또는 $x=-2$ ⑸ $x=-\dfrac{3}{2}$ 또는 $x=4$ ⑹ $x=-\dfrac{5}{3}$ 또는 $x=\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/116-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 두 정수의 곱으로 쪼갤 수 있는 조합이면 무엇이든 가능. 제약: 근이 유리수가 되도록 판별식이 완전제곱수여야 하고(중3은 근의 공식 이전 단계), 네 인수분해 유형이 한 벌씩 들어가는 구성은 유지한다."
    creative: "(1) $x^2-a^2=0$ 을 $x^2=a^2$ 로 주어 제곱근 풀이와 인수분해 풀이를 비교시키기(★2 · I-SC d1) (2) 인수분해가 안 되는 식을 하나 섞어 '풀 수 없다'를 고르게 하기(★2) (3) 근을 주고 상수항을 되묻는 역방향으로 바꾸면 ★2."
```

```yaml
- id: GN-M31-116-03
  page: 116
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 완전제곱식 꼴 이차방정식을 풀어 중근 구하기($(x+1)^2=0$ · $x^2-14x+49=0$ · $x^2+10x+25=0$ · $9x^2-6x+1=0$).
  category: "완전제곱식 인수분해 → 중근 하나"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근을 갖는 이차방정식(완전제곱식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    좌변이 $(x+p)^2$ 또는 $(ax+b)^2$ 로 떨어지므로 근이 하나. ⑷ 만 이차항 계수가 9 라 근이 분수.
    함정은 '근이 두 개'라고 답을 두 번 쓰는 것과 $(x+5)^2$ 에서 근 부호를 뒤집지 않는 것(T-부호).
    확인하기 구역 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "좌변을 (x+p)^2 로 인수분해 → x=-p 중근"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-1$ ⑵ $x=7$ ⑶ $x=-5$ ⑷ $x=\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/116-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(x±p)^2 의 p 를 바꾸거나 (ax±b)^2 로 이차항 계수를 제곱수(4·9·16)로 올린다. 제약: 상수항이 반드시 (일차항 계수의 절반)의 제곱이어야 하고, 이차항 계수가 1 이 아니면 (a x ± b)^2 의 교차항 2ab 가 일차항과 맞아야 한다."
    creative: "(1) 중근 한 개짜리와 서로 다른 두 근짜리를 섞어 '중근인 것 고르기'로 바꾸면 119-h5 골조(★2) (2) 상수항을 문자로 비워 중근 조건을 묻는 116-04 골조(★1~2) (3) 중근의 값까지 함께 묻는 119-c6 골조(★2)."
```

```yaml
- id: GN-M31-116-04
  page: 116
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 이차방정식이 중근을 가질 때 상수 $k$의 값 구하기($x^2+6x+k=0$ 등 · ⑶⑷ 는 상수항이 $k+7$, $k-2$ 꼴).
  category: "중근 조건 (상수항)=(일차항 계수의 절반)^2 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식이 중근을 가질 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중근 조건을 공식으로 외워 상수항에 바로 대입하는 표준 절차라 역방향 사고(I-BW)로 세지 않는다.
    ⑶⑷ 는 상수항이 $k+7$·$k-2$ 라 마지막에 일차방정식을 한 번 더 푸는 단계가 붙어 Mₛ 2, 미지수 포함이라 Mₐ 2.
    확인하기 구역 ★1 · 통찰 0 · M_total 6 이라 −1 조건(M_total ≤ 5)에는 걸리지 않지만 도구가 하나뿐 → ★1 유지.
  tier: star_1
  mechanism_primary: "중근 ⟺ 상수항=(일차항 계수/2)^2 → k 에 대한 일차방정식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $9$ ⑵ $1$ ⑶ $-3$ ⑷ $27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/116-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수를 짝수로 두면 k 가 정수로 떨어진다(6→9, -2→1, 4→4, -10→25). 제약: 홀수(예: -3)로 두면 k=9/4 처럼 분수가 나오므로 확인하기 단계에서는 짝수를 유지하고, 상수항의 상수 덧붙임(k+7·k-2)은 절반 이하로."
    creative: "(1) k 를 일차항 계수 자리에 두면 k=±(두 값)이 되어 부호 함정이 생김(119-h6 ⑵ 골조 · ★2) (2) 중근 조건 대신 '서로 다른 두 근'을 묻는 부등식 조건(중3 범위 밖) (3) 구한 k 로 다른 이차방정식을 이어 풀게 하면 121-06 골조로 ★3."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-117-h1
  page: 117
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    해가 $x=-1$ 또는 $x=\dfrac{1}{3}$인 이차방정식을 다섯 선지에서 고르기. 5지선다.
  category: "근 → 인수 역구성 → 선지 대조"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해가 먼저 주어졌으므로 $x=-1 \\to (x+1)$, $x=\\dfrac{1}{3} \\to (3x-1)$ 처럼 근에서 인수를 거꾸로 세운 뒤 선지와 맞춘다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 주어진 이차방정식 찾기($AB=0$ 역구성)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선지 다섯 개를 모두 풀어도 되지만, 근에서 인수를 역으로 세우면 한 줄에 끝난다. 역방향 착안 통찰 1개(BW d1).
    함정이 둘이다 — $(x+1)$ 과 근 $-1$ 의 부호(T-부호), 분수 근 $\dfrac{1}{3}$ 을 $(3x-1)$ 로 옮길 때의 계수 위치(T-표기).
    핵심문제 구역 ★2 출발 · 통찰 d1 1개 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "근 -1, 1/3 → 인수 (x+1), (3x-1) → 곱이 같은 선지 선택"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/117-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근을 (정수, 분수) 조합으로 유지하면서 값만 바꾼다(-2 와 2/5 등). 제약: 분수 근의 분모가 인수의 일차항 계수가 되므로 오답 선지는 그 계수를 상수항과 맞바꾼 꼴·부호만 뒤집은 꼴로 구성해야 변별이 생긴다."
    creative: "(1) 선지를 전개형 $ax^2+bx+c=0$ 으로 주면 역구성이 안 통해 전부 인수분해해야 함 → ★3 (2) 두 근이 모두 분수면 인수 두 개 다 계수가 붙어 ★3 (3) '해가 $x=2$(중근)인 것'으로 바꾸면 완전제곱식 판별과 결합 ★2."
```

```yaml
- id: GN-M31-117-c1
  page: 117
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    이차방정식 $(4x-3)(4x-5)=0$의 두 근의 합 구하기.
  category: "AB=0 → 두 근 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$AB=0$의 성질을 이용한 이차방정식의 풀이 — 두 근의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 인수에서 근을 뽑고 더하는 2단계. 중3 단계에서는 근과 계수의 관계를 쓸 수 없어 반드시 근을 직접 구해야 한다.
    분모가 같은 분수 둘을 더하는 계산이 전부라 노동량이 낮다.
    [분류 이슈] 확인문제 구역(★2 출발)이지만 통찰 0 · M_total 5 로 −1 조건에 걸려 실질은 ★1. 구역 신호를 존중해 라벨은 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "각 인수 = 0 → x=3/4, 5/4 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/117-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수의 계수·상수항을 바꾸되 합이 정수로 떨어지게 분모를 맞춘다((4x-3)(4x-5) → (3x-1)(3x-2) 등). 제약: 두 인수의 일차항 계수를 같게 두어야 분수 덧셈이 한 번에 끝난다."
    creative: "(1) 합 대신 '두 근의 곱'·'차'로 바꾸기(★2 유지) (2) 두 근의 합이 주어지고 인수의 상수항을 되묻는 역방향 → ★3 (3) 전개형으로 주면 인수분해가 앞에 붙어 ★2 상단."
```

```yaml
- id: GN-M31-117-h2
  page: 117
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴⑵ 양변에 항이 흩어진 이차방정식 풀기($3x^2+4=2x^2-5x$ · $9x^2-18x=x^2-9$).
  category: "이항·정리 → 인수분해 → AB=0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해를 이용한 이차방정식의 풀이(정리 후)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '$( )=0$ 꼴로 먼저 정리한다'가 이 유형의 전부이고, 정리 뒤는 116-02 와 같은 드릴이다. 통찰로 셀 착안은 없다.
    ⑵ 는 정리하면 $8x^2-18x+9=0$ 이라 십자곱셈 부담이 있어 Mₖ 2.
    함정은 이항할 때 부호를 빠뜨리는 것(T-부호) 하나.
    핵심문제 구역 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "모든 항을 좌변으로 이항 → 인수분해 → 두 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-4$ 또는 $x=-1$ ⑵ $x=\dfrac{3}{4}$ 또는 $x=\dfrac{3}{2}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/117-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변 분배를 바꿔도 되지만 정리 후 판별식이 완전제곱수여야 한다. 제약: ⑴ 처럼 이차항이 양변에 있는 형태를 하나는 남겨 '이차항끼리 먼저 정리' 습관을 확인한다."
    creative: "(1) 괄호가 있는 형태 $(x+2)(x-3)=6$ 으로 주면 'AB=0 은 우변이 0 일 때만'이라는 오개념 함정이 커져 ★3 (2) 분수·소수 계수를 넣어 양변에 수를 곱하는 단계를 추가하면 ★2 상단 (3) 정리 결과가 완전제곱식이 되게 해 중근 판별과 묶으면 ★2."
```

```yaml
- id: GN-M31-117-c2
  page: 117
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑷ 양변에 항이 흩어진 이차방정식 풀기($x^2=2x+24$ · $x^2-6x+9=4x$ · $x^2+2x=x+6$ · $6x^2-7x-3=2x^2-6$).
  category: "이항·정리 → 인수분해 → AB=0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해를 이용한 이차방정식의 풀이(정리 후)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    117-h2 와 같은 골조를 네 벌 반복한다. ⑷ 만 이차항 계수가 4 로 남아 십자곱셈이 필요해 Mₖ 2.
    ⑵ 는 좌변이 이미 완전제곱식이라 그대로 두고 싶어지는 것이 함정 — 우변 $4x$ 를 넘겨야 한다(T-부호).
    확인문제 구역 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "모든 항을 좌변으로 이항 → 인수분해 → 두 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-4$ 또는 $x=6$ ⑵ $x=1$ 또는 $x=9$ ⑶ $x=-3$ 또는 $x=2$ ⑷ $x=\dfrac{3}{4}$ 또는 $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/117-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 우변 항을 바꿔도 정리 후 인수분해만 되면 된다. 제약: 네 소문항 중 하나는 이차항이 양변에 있는 꼴(⑷)로 남겨 이차항 정리 단계를 확인한다."
    creative: "(1) 정리 결과가 $x^2=k$ 꼴이 되게 해 제곱근 풀이와 비교(★2) (2) 괄호 전개가 필요한 $(x-1)(x+4)=6$ 형태 추가 → ★3 (3) 소문항 중 하나를 '해가 없다/중근이다'로 만들어 판정을 요구하면 ★2 상단."
```

```yaml
- id: GN-M31-118-h3
  page: 118
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    이차방정식 $ax^2+3x-2=0$의 한 근이 $x=-1$일 때, ⑴ 상수 $a$ ⑵ 다른 한 근 구하기.
  category: "근 대입 → a 결정 → 인수분해 → 다른 근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 근이 주어졌을 때 다른 한 근 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '근이면 대입해서 성립한다'는 정의를 쓰는 미정계수 대입이라 역방향 통찰(I-BW)로 세지 않는다(스키마 §2.2 단서).
    소문항이 ⑴→⑵ 로 유도를 깔아 주어 분기가 없다. 미지수 $a$ 가 계수에 있어 Mₐ 2.
    핵심문제 구역 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "x=-1 대입 → a → 확정된 방정식 인수분해 → 다른 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $5$ ⑵ $x=\dfrac{2}{5}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/118-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근과 상수항을 바꾸되 결정된 a 로 만든 방정식이 인수분해되어야 한다. 제약: 미지수를 이차항 계수에 두면 a=0 이 나오지 않도록 하고(이차방정식 조건), 다른 근이 분수로 나오는 구성을 유지하면 확인문제 118-c3(정수 근)과 대비된다."
    creative: "(1) 소문항 유도를 없애고 '다른 한 근'만 묻기(★2 상단) (2) 미지수를 일차항 계수에 두면 대입식이 더 단순해져 ★2 하단 (3) 구한 다른 근을 또 다른 방정식의 근으로 쓰면 121-04 식 연쇄 → ★3."
```

```yaml
- id: GN-M31-118-c3
  page: 118
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    이차방정식 $x^2-ax-5=0$의 한 근이 $x=5$일 때, 상수 $a$의 값과 다른 한 근 구하기.
  category: "근 대입 → a 결정 → 인수분해 → 다른 근"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 근이 주어졌을 때 미지수와 다른 한 근 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    118-h3 과 같은 골조지만 소문항 유도가 없어 두 가지를 한 번에 요구한다. 대입 → $a=4$ → $x^2-4x-5=(x-5)(x+1)$.
    미지수 앞의 뺄셈 부호 $-ax$ 를 대입할 때 놓치기 쉬운 것이 함정(T-부호).
    확인문제 구역 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "x=5 대입 → a → 인수분해 → 다른 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=4$, $x=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/118-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 두 정수의 곱으로 쪼갤 수 있게 두고 주어진 근을 그 약수 중 하나로 잡는다(-5 와 근 5 → 다른 근 -1). 제약: 상수항의 부호가 음수면 두 근의 부호가 반대라는 점이 유지되도록."
    creative: "(1) 미지수를 상수항에 두면 대입 한 줄로 끝나 ★1~2 (2) '두 근의 차'까지 묻기(★2) (3) 근이 분수로 주어지면 대입 계산이 무거워져 ★3 — 다만 계산 마찰이라 질 저하 신호."
```

```yaml
- id: GN-M31-118-h4
  page: 118
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    두 이차방정식 $x^2-8x+15=0$, $2x^2+x-21=0$의 공통인 근 구하기.
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
    두 방정식을 각각 풀어 같은 근을 고르는 것이 전부다. 단순 교집합은 스키마 §2.2 에서 조건 통합(I-CON)으로 인정하지 않으므로 통찰 0.
    두 번째 식은 이차항 계수가 2 라 십자곱셈이 필요해 Mₖ 2.
    함정은 공통근을 두 개 적거나 한쪽 해집합만 답으로 쓰는 것.
    핵심문제 구역 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 식 각각 인수분해 → 근 두 쌍 → 겹치는 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=3$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/118-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통근을 먼저 정하고 각 방정식을 (x-공통근)(다른 인수) 로 조립하면 어떤 수로도 바꿀 수 있다. 제약: 공통근은 정확히 하나여야 하고(두 개면 두 식이 상수배), 나머지 근은 서로 달라야 한다."
    creative: "(1) 공통근이 없는 짝을 섞어 '공통근이 존재하는가'를 묻기(★3 · I-VF d1 — 후보를 대입해 기각) (2) 한 식에 미지수를 넣고 공통근을 주어 미지수를 되묻기(★3) (3) 공통근을 세 번째 방정식에 넣는 121-04 연쇄(★3)."
```

```yaml
- id: GN-M31-118-c4
  page: 118
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    두 이차방정식 $x^2-x-6=0$, $3x^2+7x+2=0$의 공통인 근 구하기.
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
    118-h4 의 짝 문항. 두 번째 식 $3x^2+7x+2=(3x+1)(x+2)$ 의 십자곱셈이 계산의 전부다.
    공통근이 음수라 부호를 흘리면 $+2$ 를 답으로 쓰게 되는 것이 함정(T-부호).
    확인문제 구역 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 식 각각 인수분해 → 근 두 쌍 → 겹치는 근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/118-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통근을 먼저 정하고 두 식을 조립한다. 제약: 이차항 계수가 1 이 아닌 쪽을 하나 유지해 십자곱셈 연습을 남기고, 공통근은 하나만."
    creative: "(1) 세 방정식의 공통근으로 확장(★3) (2) 공통근 대신 '공통이 아닌 근들의 합'을 묻기(★3) (3) 한 식을 정리되지 않은 꼴로 주면 이항 단계가 붙어 ★2 상단."
```

```yaml
- id: GN-M31-119-h5
  page: 119
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    보기 ㄱ~ㅂ 여섯 개의 이차방정식 중 중근을 갖는 것을 모두 고르기(ㅁ·ㅂ 은 우변에 항이 남아 있어 정리가 필요).
  category: "정리 → 완전제곱식 판정 → 해당 보기 모두"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근을 갖는 이차방정식 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기마다 '(상수항)=(일차항 계수의 절반)의 제곱' 을 확인하는 같은 판정을 여섯 번 반복한다. 판정법 자체가 이 단원의 표준 도구라 통찰로 세지 않는다.
    함정이 둘 — ㅁ·ㅂ 처럼 우변이 0 이 아닌 보기를 그대로 판정하는 것(T-표기), ㅂ $x^2+81=18x$ 를 정리할 때의 부호(T-부호).
    '모두 고르시오'라 하나라도 빠뜨리면 오답. 핵심문제 구역 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기를 (  )=0 으로 정리 → 완전제곱식인지 판정 → ㄴ·ㄹ·ㅂ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄴ, ㄹ, ㅂ'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/119-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 계수를 바꾸되 중근 보기와 두 근 보기의 비율(3:3)을 유지한다. 제약: 이차항 계수가 1 이 아닌 보기(ㄹ)는 (ax+b)^2 로 떨어지게 하고, 정리가 필요한 보기는 두 개 이하로."
    creative: "(1) '중근을 갖지 않는 것'으로 뒤집으면 119-c5 (★2 유지) (2) 보기에 미지수를 넣어 '중근을 갖도록 하는 값이 존재하는 것'을 고르게 하면 ★3 (3) 중근의 값까지 함께 적게 하면 ★2 상단."
```

```yaml
- id: GN-M31-119-c5
  page: 119
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    다섯 선지의 이차방정식 중 중근을 갖지 <u>않는</u> 것 고르기(④⑤ 는 양변에 항이 흩어져 있어 정리가 필요). 5지선다.
  category: "정리 → 완전제곱식 판정 → 아닌 것 하나"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근을 갖는 이차방정식 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    119-h5 의 짝 문항을 부정 발문으로 뒤집은 것. ④ 는 정리하면 완전제곱식, ⑤ 는 정리하면 서로 다른 두 근.
    함정이 둘 — 부정 발문('않는')을 놓치는 것(T-표기), 정리 전 겉모습으로 판정하는 것(T-부호).
    확인문제 구역 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 선지를 (  )=0 으로 정리 → 완전제곱식 판정 → 아닌 하나"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/119-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "완전제곱식 선지 네 개와 아닌 선지 하나의 구성을 유지한 채 계수를 바꾼다. 제약: 오답 선지는 상수항을 (일차항 계수의 절반)의 제곱에서 1~2 만 어긋나게 해야 눈대중으로 걸러지지 않는다."
    creative: "(1) 긍정 발문('갖는 것')으로 바꾸면 함정 하나가 줄어 ★2 하단 (2) 정답 2개형(121-05 골조)으로 바꾸기(★2) (3) 선지 안에 미지수를 넣어 조건까지 묻게 하면 ★3."
```

```yaml
- id: GN-M31-119-h6
  page: 119
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ $x^2-4x+5-k=0$ ⑵ $x^2+kx+36=0$ 이 중근을 가질 때 상수 $k$의 값 구하기.
  category: "중근 조건 → 상수항·일차항 위치에 따라 k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식이 중근을 가질 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    116-04 와 같은 조건식을 쓰되 ⑵ 에서 미지수가 **일차항 계수** 자리로 옮겨 온 것이 이 문항의 요점이다.
    $(k/2)^2=36$ 에서 $k=\pm 12$ 두 값이 나오는데, 단순 부호 분기라 다중 해석(I-MI)이 아니라 함정(T-부호)으로 처리한다.
    한쪽 값만 적고 끝내는 것이 대표 오답. 핵심문제 구역 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "중근 ⟺ 상수항=(일차항 계수/2)^2 → ⑴ k 일차식 ⑵ k^2=144 → 두 값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1$ ⑵ $\pm 12$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/119-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 상수항은 완전제곱수(16·36·64·100)로 두어야 k 가 정수 ±값으로 떨어진다. ⑴ 의 상수항에 붙은 수는 자유. 제약: 미지수가 상수항 자리인 소문항과 일차항 자리인 소문항을 한 벌씩 유지한다."
    creative: "(1) ⑵ 에서 '$k$ 가 양수일 때'를 덧붙이면 부호 함정이 사라져 ★1~2 (2) 이차항 계수에 미지수를 두면 (ax+b)^2 조건이 되어 ★3 (3) 구한 k 를 다른 방정식에 이어 쓰면 121-06 골조로 ★3."
```

```yaml
- id: GN-M31-119-c6
  page: 119
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    이차방정식 $x^2+8x+2+a=0$이 $x=b$를 중근으로 가질 때 $a+b$의 값 구하기($a$는 상수).
  category: "중근 조건 → a → 완전제곱식의 중근 b → a+b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근의 값과 상수를 함께 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중근 조건으로 $2+a$ 를 정하고, 완전제곱식 $(x+4)^2$ 에서 중근 $b$ 를 읽어 더하는 2단계다. 두 단계 모두 표준 도구라 통찰 0.
    중근 $b$ 의 부호를 일차항 계수의 절반 그대로($+4$) 쓰는 것이 대표 오답(T-부호).
    확인문제 구역 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "2+a=(8/2)^2 → a → (x+4)^2=0 → b=-4 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/119-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수를 짝수로 두면 a·b 가 모두 정수(8→a=14, b=-4). 상수항에 더해진 수(2)는 자유. 제약: 홀수 일차항 계수는 b 가 분수가 되어 중3 단계에서 피한다."
    creative: "(1) $a-b$·$ab$ 로 묻기(★2 유지) (2) 이차항 계수를 4 로 두어 (2x+p)^2 꼴로 만들면 중근이 분수가 되어 ★3 (3) b 를 먼저 주고 a 를 되묻는 역방향(★2)."
```

### 계산력 강화하기

```yaml
- id: GN-M31-120-01
  page: 120
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ 이미 인수분해된 꼴의 이차방정식 풀기($(x-4)(x-7)=0$ · $(x+5)(x-9)=0$ · $(4x+1)(x-3)=0$ · $(2x+7)(3x+2)=0$).
  category: "AB=0 성질 → 두 일차방정식 → 두 근"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$AB=0$의 성질을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    116-01 과 같은 드릴이고 ⑷ 만 두 인수 모두 계수가 붙어 근이 둘 다 분수다.
    함정은 인수의 상수항 부호를 그대로 근으로 옮기는 것(T-부호).
    계산력 강화 구역 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "AB=0 → A=0 또는 B=0 → 각 일차방정식의 해"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=4$ 또는 $x=7$ ⑵ $x=-5$ 또는 $x=9$ ⑶ $x=-\dfrac{1}{4}$ 또는 $x=3$ ⑷ $x=-\dfrac{7}{2}$ 또는 $x=-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/120-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수의 계수·상수항을 자유롭게 바꾼다. 제약: 계수가 붙은 인수가 두 개인 소문항(⑷)을 한 개는 남겨 분수 근 두 개를 다루게 한다."
    creative: "(1) 인수 하나를 $x$ 단독으로 두어 근 0 을 포함시키기(★1) (2) 세 근을 묻는 꼴로 바꾸면 범위 밖 (3) 근을 주고 인수를 세우게 하면 117-h1 골조 ★2."
```

```yaml
- id: GN-M31-120-02
  page: 120
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑽ 우변이 0 인 이차방정식 열 개를 인수분해해서 풀기(공통인수 1 · 이차항 계수 1 인 것 4 · 계수가 1 이 아닌 것 5).
  category: "인수분해 → AB=0 → 두 근"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해를 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 단원의 핵심 계산인 십자곱셈을 열 번 반복시키는 드릴이다. 한 문항의 노동량은 한 줄이라 M 은 낮지만 반복량이 많다.
    ⑻ $8x^2-2x-1$, ⑼ $6x^2-19x+15$ 처럼 인수 조합 후보가 많은 것이 계산 부담(Mₖ 2).
    계산력 강화 구역 ★1 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "좌변 인수분해(공통인수·십자곱셈) → AB=0 → 두 근"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=0$ 또는 $x=-2$ ⑵ $x=-4$ 또는 $x=5$ ⑶ $x=-9$ 또는 $x=2$ ⑷ $x=1$ 또는 $x=7$ ⑸ $x=-8$ 또는 $x=-2$ ⑹ $x=-5$ 또는 $x=\dfrac{1}{3}$ ⑺ $x=-2$ 또는 $x=-\dfrac{3}{2}$ ⑻ $x=-\dfrac{1}{4}$ 또는 $x=\dfrac{1}{2}$ ⑼ $x=\dfrac{3}{2}$ 또는 $x=\dfrac{5}{3}$ ⑽ $x=-4$ 또는 $x=-\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/120-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 일차항 계수를 판별식이 완전제곱수가 되는 조합으로 바꾼다. 제약: 열 문항의 난이도 사다리(공통인수 → 계수 1 → 계수 1 아님)를 유지하고, 계수가 1 이 아닌 소문항은 절반 이하로."
    creative: "(1) 답만 쓰지 말고 '두 근의 합·곱'을 함께 적게 하면 ★2 (2) 인수분해되지 않는 식을 섞어 걸러내게 하면 ★2 (3) 근을 주고 빈칸 계수를 채우는 역방향 드릴(★2)."
```

```yaml
- id: GN-M31-120-03
  page: 120
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ 양변에 항이 흩어진 이차방정식 풀기($x^2-9x=10$ · $x^2+7x=x-5$ · $4x^2=x^2-5x+12$ · $3x^2-8x+3=x^2+x-6$).
  category: "이항·정리 → 인수분해 → AB=0"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해를 이용한 이차방정식의 풀이(정리 후)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑶⑷ 는 이차항이 양변에 있어 이차항부터 정리해야 한다. 정리 뒤는 120-02 와 같은 드릴.
    함정은 이항 부호(T-부호) 하나이며 통찰은 없다.
    [분류 이슈] 계산력 강화 구역이라 ★1 로 두었으나 골조·M_total 6 이 핵심문제 117-h2·117-c2(★2)와 같다.
  tier: star_1
  mechanism_primary: "모든 항을 좌변으로 이항 → 인수분해 → 두 근"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-1$ 또는 $x=10$ ⑵ $x=-5$ 또는 $x=-1$ ⑶ $x=-3$ 또는 $x=\dfrac{4}{3}$ ⑷ $x=\dfrac{3}{2}$ 또는 $x=3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/120-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변 항 배치를 바꿔도 정리 후 인수분해만 되면 된다. 제약: 이차항이 양변에 있는 소문항을 최소 하나 남기고, 정리 후 판별식은 완전제곱수."
    creative: "(1) 괄호가 있는 $(x-2)(x+5)=8$ 형태를 넣어 'AB=0 은 우변 0 일 때만' 오개념을 치면 ★3 (2) 분수 계수를 넣어 양변에 수를 곱하는 단계 추가(★2) (3) 정리 결과가 완전제곱식이 되게 해 중근 판정과 묶기(★2)."
```

```yaml
- id: GN-M31-120-04
  page: 120
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ 중근을 갖는 이차방정식 풀기($x^2+14x+49=0$ · $x^2-x+\dfrac{1}{4}=0$ · $4x^2+20x+25=0$ · $x^2+3x=5x-1$).
  category: "정리 → 완전제곱식 인수분해 → 중근"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근을 갖는 이차방정식(완전제곱식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    116-03 드릴에 두 가지 변주를 얹었다 — ⑵ 는 분수 상수항, ⑷ 는 우변을 먼저 정리해야 완전제곱식이 보인다.
    ⑶ 은 이차항 계수 4 라 $(2x+5)^2$ 로 묶어야 한다(교차항 확인).
    계산력 강화 구역 ★1 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "( )=0 으로 정리 → (px+q)^2 로 인수분해 → 중근 하나"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-7$ ⑵ $x=\dfrac{1}{2}$ ⑶ $x=-\dfrac{5}{2}$ ⑷ $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/120-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(x±p)^2, (ax±b)^2 의 p·a·b 를 바꾼다. 제약: 상수항은 반드시 (일차항 계수의 절반)의 제곱이어야 하고, 분수 상수항 소문항(⑵)과 정리가 필요한 소문항(⑷)을 한 벌씩 유지한다."
    creative: "(1) 중근인 것과 아닌 것을 섞어 판별시키면 119-h5 골조(★2) (2) 상수항을 미지수로 비워 조건을 묻기(120-05 · ★1~2) (3) 중근의 값을 다른 식에 대입시키면 ★3."
```

```yaml
- id: GN-M31-120-05
  page: 120
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ 이차방정식이 중근을 가질 때 상수 $k$의 값 구하기($x^2+10x+k=0$ · $x^2-2x+k+3=0$ · $x^2-3x+2k=0$ · $x^2+kx+16=0$).
  category: "중근 조건 → 상수항·일차항 위치에 따라 k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식이 중근을 가질 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조건식은 하나지만 미지수의 위치가 네 가지로 변주된다 — 상수항 그대로(⑴), 상수항에 덧셈(⑵), 상수항에 곱셈(⑶), 일차항 계수(⑷).
    ⑶ 은 일차항 계수가 홀수라 $2k=9/4$ 로 분수가 나오고, ⑷ 는 $k=\pm 8$ 두 값이다(T-부호).
    [분류 이슈] 계산력 강화 구역이라 ★1 로 두었으나 ⑷ 의 두 값 처리까지 있어 핵심문제 119-h6(★2)과 골조가 같다.
  tier: star_1
  mechanism_primary: "중근 ⟺ 상수항=(일차항 계수/2)^2 → k 에 대한 일차식 또는 k^2=값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $25$ ⑵ $-2$ ⑶ $\dfrac{9}{8}$ ⑷ $\pm 8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/120-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수를 짝수로 두면 k 가 정수, 홀수로 두면 ⑶ 처럼 분수가 나온다. 일차항 자리의 미지수 소문항은 상수항을 완전제곱수(16·36·64)로. 제약: 네 가지 미지수 위치 변주를 한 벌씩 유지한다."
    creative: "(1) '$k$ 가 자연수일 때'를 붙여 ⑷ 의 두 값 중 하나를 기각시키면 I-VF d1 → ★2 (2) 이차항 계수에 미지수를 두면 ★3 (3) 구한 k 를 다른 방정식의 계수로 넘기면 121-06 골조 ★3."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-121-01
  page: 121
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    다섯 선지의 인수분해형 이차방정식 중 해가 나머지 넷과 <u>다른</u> 하나 고르기(선지에 $(1+2x)$ 처럼 상수가 앞에 온 꼴·공통인수가 붙은 $(4x+2)(6x-2)$ 가 섞여 있음). 5지선다.
  category: "각 인수에서 근만 추출 → 해집합 비교 → 다른 하나"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "다섯 선지를 모두 전개·인수분해하는 갈래 대신, 각 인수를 0 으로 놓아 근만 뽑아 비교하는 갈래를 고르면 한 줄에 끝난다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 같은 이차방정식 구별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선지가 같은 두 근 $-\dfrac{1}{2}$, $\dfrac{1}{3}$ 의 위장 변주들이고 ③ 만 부호가 반대인 근을 준다.
    함정이 둘 — $(1+2x)$ 처럼 상수가 앞에 온 인수에서 근 부호를 뒤집는 것(T-부호), ⑤ 처럼 공통인수 2·2 가 곱해져도 해가 변하지 않음을 아는 것(T-표기).
    [분류 이슈] 근만 뽑아 비교하는 것을 전략 선택(I-SC)으로 달았으나, 근 추출 자체가 이 단원의 표준 절차라 통찰로 세지 않을 여지도 있다.
    시험 대비 구역 ★2~3 출발 · d1 통찰 1개 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "각 선지의 인수 → 근 두 개 → 네 개와 다른 해집합 하나"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/121-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준이 되는 두 근을 바꾸고(예: 1/2 과 -2/3) 선지를 상수 앞·뒤 배치, 공통인수 곱, 분수 계수 꼴로 위장한다. 제약: 오답 선지는 두 근 중 하나만 부호가 다르게 해야 대충 보고 걸러지지 않는다."
    creative: "(1) 선지를 전개형으로 주면 전부 인수분해해야 해서 ★3 (2) '해가 같은 것끼리 짝지으시오'로 바꾸면 비교량이 늘어 ★3 (3) 선지 하나를 중근 방정식으로 두면 근의 개수 비교가 추가되어 ★2 상단."
```

```yaml
- id: GN-M31-121-02
  page: 121
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    $x^2-2x=15$의 근을 $x=a$ 또는 $x=b$($a>b$)라 할 때, 이차방정식 $ax^2+bx-2=0$을 풀기.
  category: "1차 방정식 풀이 → 대소로 a·b 배정 → 2차 방정식 조립 후 풀이"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근을 계수로 옮긴 이차방정식 풀기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정리 → 인수분해 → 근 두 개 → $a>b$ 로 배정 → 새 방정식 조립 → 다시 인수분해 → 근, 이렇게 7단계라 Mₛ 3.
    각 단계는 이미 배운 도구뿐이라 통찰은 0이고, 난도는 순전히 **연쇄 길이**에서 온다.
    $a>b$ 를 무시하고 배정을 뒤집으면 전혀 다른 답이 나오는 것이 함정(T-부호).
    [분류 이슈] 통찰 0인데 M_total 8 로 ★3 을 준 절차 길이형이라, 통찰형 ★3 과 학생 체감이 다르다.
  tier: star_3
  mechanism_primary: "x^2-2x-15=0 → 근 5, -3 → a=5, b=-3 → 5x^2-3x-2=0 → 인수분해 → 두 근"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$x=-\dfrac{2}{5}$ 또는 $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/121-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 방정식의 두 근을 바꾸면 둘째 방정식의 계수가 바뀐다. 제약: 배정된 a·b 로 만든 둘째 방정식이 반드시 인수분해되어야 하므로(판별식이 완전제곱수) 근 후보를 먼저 정하고 역으로 첫 방정식을 조립한다. 상수항 -2 는 둘째 식이 쪼개지도록 함께 조정한다."
    creative: "(1) $a<b$ 로 조건을 뒤집어 같은 수로 다른 답을 만들기(★3 유지) (2) 조건을 빼고 '가능한 모든 해'를 묻게 하면 두 배정을 다 따져야 해 I-MI d2 → ★4 (3) 둘째 방정식이 중근을 갖는지 판정까지 묻기(★3 상단)."
```

```yaml
- id: GN-M31-121-03
  page: 121
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    이차방정식 $x^2+ax-28=0$의 한 근이 $x=4$이고 다른 한 근을 $x=b$라 할 때 $a-b$의 값 구하기($a$는 상수).
  category: "근 대입 → a → 인수분해 → b → a-b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 근이 주어졌을 때 미지수와 다른 한 근 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    118-h3·118-c3 과 같은 골조에 마지막 $a-b$ 계산만 얹었다. 대입으로 $a$ 를 정하고 인수분해로 다른 근을 읽는다.
    $b$ 가 음수라 $a-b$ 에서 부호가 뒤집히는 것이 함정(T-부호).
    시험 대비 구역 ★2~3 출발이지만 도구가 두 개뿐이고 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x=4 대입 → a=3 → x^2+3x-28=(x+7)(x-4) → b=-7 → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/121-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 두 정수의 곱으로 쪼개고 주어진 근을 그 약수 중 하나로 잡는다(-28 과 근 4 → 다른 근 -7). 제약: 두 근의 부호가 반대가 되도록 상수항을 음수로 두면 a-b 에서 부호 함정이 살아 있다."
    creative: "(1) $a+b$·$ab$ 로 묻기(★2 유지) (2) 두 근이 모두 미지수로 주어지고 관계식만 주면 ★3 (3) 구한 b 를 다른 방정식의 근으로 잇는 121-04 식 연쇄(★3)."
```

```yaml
- id: GN-M31-121-04
  page: 121
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    두 이차방정식 $x^2-4x-21=0$, $3x^2+8x-3=0$의 공통인 근이 $x^2+7x+k=0$의 한 근일 때 상수 $k$의 값 구하기.
  category: "두 식 각각 풀이 → 공통근 → 셋째 식에 대입 → k"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차방정식의 공통인 근의 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    118-h4 의 공통근 골조에 '그 근을 셋째 방정식에 대입해 미지수를 구한다'는 단계를 이어 붙였다. 세 방정식을 거치므로 Mₛ 3.
    단순 교집합 + 표준 대입이라 통찰은 0이고, 두 번째 식 $3x^2+8x-3=(3x-1)(x+3)$ 의 십자곱셈이 계산의 고비다.
    공통근이 음수라 대입 때 부호를 흘리기 쉽다(T-부호).
    시험 대비 구역 ★2~3 · 통찰 0 · M_total 8(연쇄 길이) → ★3.
  tier: star_3
  mechanism_primary: "두 식의 근 두 쌍 → 공통근 -3 → x^2+7x+k=0 에 대입 → k"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/121-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통근을 먼저 정하고 두 방정식을 (x-공통근)(다른 인수) 로 조립한 뒤 셋째 방정식의 일차항 계수를 자유롭게 둔다. 제약: 공통근은 정확히 하나여야 하고, 이차항 계수가 1 이 아닌 식을 하나 유지해 십자곱셈 부담을 남긴다."
    creative: "(1) 셋째 방정식이 중근을 갖도록 하는 조건까지 묻기(★4 후보) (2) 공통근이 없는 짝을 섞어 존재 여부부터 확인하게 하면 I-VF d1 → ★4 (3) 셋째 방정식의 나머지 한 근을 묻기(★3 유지)."
```

```yaml
- id: GN-M31-121-05
  page: 121
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    다섯 선지의 이차방정식 중 중근을 갖는 것을 모두 고르기(정답 2개 · ②③ 은 우변에 항이 남아 있어 정리가 필요).
  category: "정리 → 완전제곱식 판정 → 해당 선지 둘"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근을 갖는 이차방정식 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    119-h5·119-c5 와 같은 판정을 다섯 선지에 적용한다. ② $x^2+4x+4=4$ 는 완전제곱식처럼 보이지만 정리하면 $x(x+4)=0$ 이라 두 근이고, ③ $x^2+36=-12x$ 는 정리해야 $(x+6)^2$ 이 보인다.
    함정이 둘 — 정리 전 겉모습으로 판정하는 것(T-표기), ③ 의 이항 부호(T-부호). '정답 2개'라 하나만 고르면 오답.
    시험 대비 구역 ★2~3 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "각 선지를 (  )=0 으로 정리 → 완전제곱식 판정 → ③·⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③, ⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/121-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 선지 둘·비중근 선지 셋 구성을 유지한 채 계수를 바꾼다. 제약: ② 처럼 '완전제곱식 + 상수 = 상수' 꼴 위장 선지를 하나 남기고, 이차항 계수가 1 이 아닌 중근 선지(⑤)를 하나 유지한다."
    creative: "(1) '중근을 갖지 않는 것' 부정 발문으로 뒤집기(★2 유지) (2) 선지에 미지수를 넣어 '중근을 갖게 하는 값이 있는 것'을 고르게 하면 ★3 (3) 중근의 값까지 적게 하면 ★2 상단."
```

```yaml
- id: GN-M31-121-06
  page: 121
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    이차방정식 $x^2-6x+k=0$이 중근을 가질 때, 이차방정식 $x^2+(k-4)x-14=0$의 두 근의 합 구하기($k$는 상수).
  category: "중근 조건 → k → 둘째 식 계수 확정 → 인수분해 → 두 근의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근 조건으로 정한 상수를 다른 이차방정식에 활용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중근 조건으로 $k=9$ 를 만들고, 그 값을 둘째 방정식의 일차항 계수 $k-4$ 에 넘겨 $x^2+5x-14=0$ 을 푼 뒤 두 근을 더한다.
    중3 단계에서는 근과 계수의 관계를 쓸 수 없어 반드시 두 근을 구해야 한다. 도구는 모두 표준이라 통찰 0이고, 난도는 두 방정식을 잇는 연쇄에서 온다.
    $k-4$ 를 $k$ 로 착각해 계수를 9 로 쓰는 것이 대표 오답(T-표기).
    시험 대비 구역 ★2~3 · 통찰 0 · M_total 7 · 2단 연쇄 → ★3.
  tier: star_3
  mechanism_primary: "k=(6/2)^2=9 → x^2+5x-14=0 → (x+7)(x-2) → 두 근의 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/121-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 방정식의 일차항 계수를 짝수로 두면 k 가 정수(-6→9, -8→16, 10→25). 제약: k 를 넘긴 둘째 방정식이 인수분해되도록 상수항을 함께 조정하고, 계수 자리에 k 를 그대로 두지 말고 k-4 처럼 한 번 비틀어 표기 함정을 남긴다."
    creative: "(1) 첫 방정식의 미지수를 일차항 계수에 두면 k=±값 두 갈래가 되어 I-MI d2 → ★4 (2) 둘째 방정식도 중근을 갖는지 판정까지 묻기(★3 상단) (3) 두 근의 합 대신 '두 근의 차의 절댓값'을 묻기(★3 유지)."
```

## 표본 판정 요약 (27문)

- ★ 분포: ★1 9 · ★2 15 · ★3 3 · ★4 0 · ★5 0
- 통찰형 1(117-h1) · 절차형 26 · premium 0
- 통찰 라벨이 붙은 문항은 2개(I-BW 1 · I-SC 1). 나머지 25문은 AB=0 · 인수분해 · 완전제곱식 세 도구의 직접 적용이라 통찰 0.
- type_hint 상위 5: 「인수분해를 이용한 이차방정식의 풀이(정리 후 포함)」 5 · 「$AB=0$의 성질을 이용한 이차방정식의 풀이」 3 · 「이차방정식이 중근을 가질 조건」 3 · 「중근을 갖는 이차방정식 판별」 3 · 「한 근이 주어졌을 때 다른 한 근 구하기」 3
- 구역별: 개념원리 확인하기 4(모두 ★1) · 핵심문제 익히기 12(모두 ★2) · 계산력 강화하기 5(모두 ★1) · 이런 문제가 시험에 나온다 6(★2 3 · ★3 3)
- 그림: 0문. 이 범위에는 도형 문항이 없어 크롭을 열 필요가 없었다.
- 이 범위의 ★3 세 문항(121-02 · 121-04 · 121-06)은 모두 **통찰형이 아니라 연쇄 길이형**(M_total 7~8 · 통찰 0)이다. 변형 단계에서 ★4 를 만들려면 계산을 늘리지 말고 `variation_notes.creative` 에 적어 둔 대로 **배정 분기(I-MI)나 후보 기각(I-VF)** 을 심어야 한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-117-c1 | 확인문제 구역(★2 출발)이나 인수 둘에서 근을 뽑아 더하는 2단계뿐(통찰 0 · M_total 5)이라 −1 조건에 걸림. 구역 신호를 존중해 ★2 로 둠 | ★1 / ★2 |
| GN-M31-120-03 | 계산력 강화 구역이라 ★1 이지만 이항·정리 뒤 인수분해라 핵심문제 117-h2·117-c2(★2)와 골조·M_total 이 같음 | ★1 / ★2 |
| GN-M31-120-05 | 계산력 강화 구역 ★1 이지만 미지수 위치 네 변주 + ⑷ 의 $k=\pm 8$ 두 값 처리까지 있어 핵심문제 119-h6(★2)과 골조가 같음 | ★1 / ★2 |
| GN-M31-121-01 | 「선지 전부 인수분해」와 「인수에서 근만 뽑아 비교」 두 갈래가 있어 I-SC 를 달았으나, 근 추출 자체가 이 단원의 표준 절차라 통찰로 세지 않을 여지도 있음 | ★2 |
| GN-M31-121-02 | 통찰 0인데 절차 길이(Mₛ 3 · M_total 8)만으로 ★3. 통찰형 ★3 과 학생 체감이 달라 카탈로그에서는 별도 층으로 다뤄야 함 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 type_hint 는 **풀이 도구 3종의 드릴**(「$AB=0$ 성질」 · 「인수분해 후 AB=0」 · 「완전제곱식 → 중근」)이고, 구역만 다를 뿐 골조가 같은 문항이 세 벌씩(확인하기 · 핵심문제 · 계산력 강화) 있다. 카탈로그에서는 **한 유형으로 통합하고 난이도 변주(계수가 1 인가 · 정리가 필요한가 · 근이 분수인가)를 속성으로 두는 편**이 낫다.
- 따로 세워야 할 유형: ① 「해가 주어진 이차방정식 역구성」(117-h1 · 121-01 — 근에서 인수를 세우는 방향이 유형의 본질이라 드릴과 분리) ② 「한 근이 주어졌을 때 미지수·다른 근」(118-h3 · 118-c3 · 121-03) ③ 「두 이차방정식의 공통인 근」(118-h4 · 118-c4 · 121-04) ④ 「중근을 가질 조건」(116-04 · 119-h6 · 120-05 — 미지수가 상수항 자리인가 일차항 자리인가로 하위 유형 2종) ⑤ 「중근 판별(보기·선다)」(119-h5 · 119-c5 · 121-05).
- 통합해도 될 유형: 「정리 후 인수분해」(117-h2 · 117-c2 · 120-03)는 「인수분해를 이용한 풀이」의 난이도 속성('우변이 0 이 아님')으로 흡수해도 된다. 「중근을 갖는 이차방정식(완전제곱식)」(116-03 · 120-04)도 같은 유형의 하위 변주다.
- 연쇄형 표시가 따로 필요하다: 121-02 · 121-04 · 121-06 은 유형이 아니라 **위 유형 두세 개를 잇는 조립 문항**이다. 카탈로그에는 base ★ 를 가진 독립 유형으로 세우지 말고 `chain_of: [유형 A, 유형 B]` 같은 조합 속성으로 다루는 편이 ★ 산정에 정직하다.

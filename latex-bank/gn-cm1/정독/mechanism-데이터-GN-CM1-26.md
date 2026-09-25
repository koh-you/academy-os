---
name: mechanism-데이터-GN-CM1-26
description: 개념원리 공통수학1 26 이차부등식의 해의 조건(1/1 · 212~218쪽 · 33문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 26 이차부등식의 해의 조건
  unit_code: CM1-26
  part: "1/1"
  extract_range: "212~218쪽 · 212-e16~218-475"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 26 이차부등식의 해의 조건 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 26단원 「이차부등식의 해의 조건」 212~218쪽의 33문항 전수를 다룬다. 구역은 전사본 group 순서대로 「필수·발전 예제」(16문 · `쪽-eN` 예제 4개와 그 유제인 확인체크 12개가 4문씩 묶여 번갈아 배치) · 「연습문제 STEP 1」(6문) · 「연습문제 STEP 2」(7문) · 「연습문제 실력 UP」(4문)이다. 그림 문항은 216-459 한 문항(두 이차함수 그래프)뿐이다.

벤더 난이도 신호는 구역·예제 태그·연습문제 STEP 으로 읽는다. 「필수」 태그 예제와 그 확인체크 유제는 ★2 출발, 「발전」 태그 예제(215-e19)와 그 유제는 ★3 출발, STEP 1 은 ★2 · STEP 2 는 ★3 · 실력 UP 은 ★4 출발로 두고 M_total·통찰로 ±1 조정했다. 예제 group 에는 level 필드가 없어 vendor_level 이 모두 `-` 이고, 연습문제 group 에는 tag 가 거의 없다(217-465·217-468 만 「교육청 기출」).

단원 전체가 「해집합 ↔ 계수」를 양방향으로 오가는 네 골조로 덮인다. ⑴ 해가 주어진 이차부등식에서 계수비를 역추적해 다른 부등식을 푸는 형(e16 계열), ⑵ 모든 실수에서 성립할 조건(e17 계열 · 최고차항이 0 이 되는 분기가 답 구간의 경계를 만든다), ⑶ 해를 갖거나 갖지 않을 조건(e18 계열), ⑷ 제한된 범위에서 항상 성립할 조건(e19 계열 · 판별식이 아니라 구간 끝점의 최대·최소로 바꿔야 한다)이다. 문항 사이의 난이도 차이는 거의 전부 이 네 골조 중 어느 것을 쓰는가와, 최고차항 계수 0 분기·부등호 등호·열린 구간 경계 같은 함정을 몇 개 밟게 하는가에서 갈린다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 답은 전사·검수 단계에서 답지와 이미 대조된 값을 그대로 옮겼고, 정독에서 재검산하지 않았다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-212-e16
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    $ax^2+bx+c>0$ 의 해가 $-3<x<4$ 일 때 $ax^2-bx+c>0$ 의 해.
  category: '해가 주어진 이차부등식 → 계수비 역추적 → 부호 바뀐 부등식의 해'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해가 유한구간 → $a<0$ 이고 $ax^2+bx+c=a(x+3)(x-4)$ 로 계수를 한 문자로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 주어진 이차부등식 — 계수 부호·비 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유한구간이 해라는 것에서 먼저 $a<0$ 을 읽고, $b=-a$·$c=-12a$ 로 계수를 $a$ 하나로 환원한다.
    새 부등식은 $a(x+4)(x-3)>0$ 이고 $a<0$ 으로 나누며 부등호가 뒤집힌다(T-부호).
    필수 예제 ★2 출발 · 통찰 1개(EQV d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '해 $-3<x<4$ → $a<0$·$b=-a$·$c=-12a$ → $a(x+4)(x-3)>0$ → $-4<x<3$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4<x<3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/212-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 해의 두 끝값(-3, 4)을 바꾼다. 제약: 두 값이 서로 다른 정수여야 $b$, $c$ 가 정수배로 떨어지고, 답 구간이 두 값의 부호 반전이 되므로 대칭(예 -3, 3)으로 두면 문제가 무의미해진다."
    creative: "(1) $ax^2-bx+c<0$ 로 바꾸면 여집합을 답해야 해 T-경계 한 겹 추가(★2 유지) (2) $cx^2+bx+a>0$ 로 두면 역수근 구조가 되어 계수 환원이 한 단계 늘고 ★3 (3) 해를 $x<-3$ 또는 $x>4$ 로 주면 $a>0$ 이 되어 부호 함정이 사라지고 ★1~2."
```

```yaml
- id: GN-CM1-212-447
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $ax^2+bx+1>0$ 의 해가 $-\dfrac{1}{2}<x<\dfrac{1}{3}$ 일 때 $a+b$ 의 값.
  category: '해가 주어진 이차부등식 → 근과 계수의 관계 → 계수 결정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 주어진 이차부등식 — 근과 계수의 관계로 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항이 1 로 고정돼 있어 두 근의 곱 $\dfrac{1}{a}=-\dfrac{1}{6}$ 에서 $a$ 가 바로 나오고, 합에서 $b$ 가 나온다.
    근과 계수의 관계 대입이라는 표준 절차뿐이라 통찰로 세지 않았다($a<0$ 확인은 T-부호).
    확인체크 ★2 출발 · 절차형 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '두 근 곱 $\dfrac{1}{a}=-\dfrac{1}{6}$ → $a=-6$ → 합 $-\dfrac{b}{a}=-\dfrac{1}{6}$ → $b=-1$ → $a+b$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/212-447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근을 다른 유리수 쌍으로, 상수항 1 을 다른 고정 상수로 바꾼다. 제약: 두 근의 곱이 0 이 아니어야 $a$ 가 정해지고, 곱이 음수여야 상수항 부호와 $a<0$ 이 모순되지 않는다."
    creative: "(1) $a$, $b$ 대신 $ab$ 나 $\\dfrac{b}{a}$ 를 묻기(★2 유지) (2) 상수항을 $c$ 로 두고 $a+b+c$ 를 물으면 미지수가 하나 늘어 비로 환원해야 해서 ★3 (3) 해를 부등호 방향이 반대인 두 구간으로 주면 $a>0$ 분기로 ★2."
```

```yaml
- id: GN-CM1-212-448
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $ax^2+bx+c<0$ 의 해가 $x<-3$ 또는 $x>5$ 일 때 $cx^2+bx+a<0$ 의 해.
  category: '해가 주어진 이차부등식 → 계수 환원 → 계수를 뒤집은 부등식의 해'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해가 바깥 두 구간 → $a<0$ 이고 $ax^2+bx+c=a(x+3)(x-5)$ 로 계수를 한 문자로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 주어진 이차부등식 — 계수 $a$·$c$ 를 뒤바꾼 부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $<0$ 의 해가 바깥 구간이므로 $a<0$ 이다. $a=-1$ 로 두면 $b=2$, $c=15$ 가 나오고 $15x^2+2x-1<0$ 을 인수분해한다.
    $a$ 와 $c$ 를 맞바꾼 부등식의 근이 원래 근의 역수가 된다는 구조는 골조를 짧게 하지만 필수는 아니다.
    확인체크 ★2 출발 · 통찰 1개(EQV d1) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '해 $x<-3$ 또는 $x>5$ → $a=-1$·$b=2$·$c=15$ → $(5x-1)(3x+1)<0$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{3}<x<\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/212-448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근 -3, 5 를 다른 정수 쌍으로 바꾼다. 제약: 두 근의 곱이 0 이 아니어야 $c\\ne 0$ 이라 새 식이 이차식으로 남고, 곱이 음수면 새 부등식의 해도 유한구간이 된다."
    creative: "(1) $cx^2-bx+a<0$ 로 두면 역수와 부호 반전이 겹쳐 ★3 (2) 새 부등식의 해의 두 끝값의 합을 묻기(★2 유지) (3) 근을 $\\dfrac{1}{p}$, $\\dfrac{1}{q}$ 꼴 유리수로 주고 정수 계수 부등식을 답하게 하면 ★3."
```

```yaml
- id: GN-CM1-212-449
  page: 212
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)<0$ 의 해가 $x<-2$ 또는 $x>1$ 일 때 $f(3x-1)\ge 0$ 의 해.
  category: '부등호 반전으로 해집합 여집합 → 일차식 치환 구간 사상'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f(x)<0$ 의 해의 여집합이 $f(x)\\ge 0$ 의 해 → $-2\\le x\\le 1$ (경계 포함)"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f$ 의 식 없이 $3x-1$ 을 그 구간에 넣는 구간 사상으로 답을 얻음"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "해가 주어진 부등식 — 합성 $f(ax+b)$ 의 해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f$ 의 식을 세울 필요가 전혀 없고, 해집합의 여집합과 일차식의 구간 사상만으로 끝난다는 것이 이 문항의 핵심이다.
    등호가 붙은 쪽으로 넘어가면서 경계가 포함되는 것(T-경계)과 $f$ 가 일반 함수라는 추상도(Mₐ 3)가 부담이다.
    확인체크 ★2 출발 · 통찰 2개 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$f<0$ 해의 여집합 → $-2\le f\text{의 변수}\le 1$ → $-2\le 3x-1\le 1$ → $-\dfrac{1}{3}\le x\le \dfrac{2}{3}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{3}\le x\le \dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/212-449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근 -2, 1 과 치환식 $3x-1$ 의 계수를 바꾼다. 제약: 치환식의 일차항 계수가 음수면 부등식 방향이 뒤집히므로 답 구간 순서를 다시 정리해야 하고, 계수가 0 이면 문제가 성립하지 않는다."
    creative: "(1) $f(1-2x)\\ge 0$ 처럼 계수를 음수로 두면 방향 반전이 추가돼 ★3 유지·오답률 상승 (2) $f(x^2)\\ge 0$ 으로 두면 이차 치환이 더해져 ★4 (3) 정수해의 개수를 묻게 바꾸면 경계 포함 판정이 답에 직결돼 ★3."
```

```yaml
- id: GN-CM1-213-e17
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    모든 실수 $x$ 에서 $(a+2)x^2-2(a+2)x+4>0$ 이 성립할 실수 $a$ 의 범위.
  category: '최고차항 계수 0 분기 → 이차인 경우 판별식 → 두 경우 합집합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「이차부등식」이 아니라 「부등식」이므로 $a+2=0$ 인 경우를 따로 봐야 하고, 그 경우가 답의 왼쪽 경계가 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차부등식이 항상 성립할 조건 — 최고차항 계수 0 분기 포함"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a+2=0$ 이면 부등식이 $4>0$ 이 되어 참이고, 이 분기가 답의 등호 붙은 끝 $a=-2$ 를 만든다.
    $a+2\ne 0$ 인 경우는 $a+2>0$ 과 $D/4<0$ 을 연립한다. 두 경우의 합집합이라는 것이 이 유형의 전부다.
    필수 예제 ★2 출발 · 분기 통찰 d2 · M_total 8(T-범위·T-경계) → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$a+2=0$ 참 → $a+2>0$ 이고 $(a+2)^2-4(a+2)<0$ → 합집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2\le a<2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/213-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 덩어리 $a+2$ 의 평행이동 값과 상수항 4 를 바꾼다. 제약: 계수가 0 일 때 남는 상수항이 양수여야 그 분기가 답에 포함되고(음수면 제외되어 등호가 사라진다), 판별식이 같은 덩어리로 인수분해되도록 일차항을 $-2(a+2)x$ 꼴로 유지한다."
    creative: "(1) 상수항을 음수로 바꾸면 $a+2=0$ 분기가 기각되어 I-VF 가 붙고 ★3~4 (2) 「이차부등식」이라고 못 박으면 분기가 사라져 ★2 (3) 부등호를 $\\ge$ 로 바꾸면 $D\\le 0$ 이 되어 T-경계가 한 겹 더 늘어난다(★3 유지)."
```

```yaml
- id: GN-CM1-213-450
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 $x$ 에서 이차부등식 $ax^2+6x+(2a+3)\le 0$ 이 성립할 실수 $a$ 의 범위.
  category: '위로 볼록 조건 + 판별식 $\le 0$ 연립'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차부등식이 항상 성립할 조건 — $a<0$ 과 $D\\le 0$"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「이차부등식」이라고 못 박아 $a\ne 0$ 이 보장되므로 분기가 없다. $a<0$ 과 $9-a(2a+3)\le 0$ 을 연립하는 공식 적용뿐이다.
    $2a^2+3a-9\ge 0$ 의 해 중 $a<0$ 쪽만 남기는 교집합에서 실수가 나기 쉽다(T-부호).
    확인체크 ★2 출발 · 절차형 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: '$a<0$ 이고 $D/4=9-a(2a+3)\le 0$ → $(2a-3)(a+3)\ge 0$ → $a\le -3$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a\le -3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/213-450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 6 과 상수항의 $a$ 계수(2)·상수(3)를 바꾼다. 제약: 판별식이 $a$ 에 대한 이차식이 되고 인수분해로 유리수 근이 나와야 하며, 그 두 근 중 정확히 한쪽만 $a<0$ 과 겹쳐야 답이 한 구간이 된다."
    creative: "(1) 「이차부등식」을 「부등식」으로 바꾸면 $a=0$ 분기가 생겨 ★3 (2) 부등호를 $<$ 로 바꾸면 $D<0$ 이 되어 경계가 열린다(★2 유지) (3) 조건을 만족하는 정수 $a$ 의 최댓값을 묻기(★2 유지)."
```

```yaml
- id: GN-CM1-213-451
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 $x$ 에서 $(a-1)x^2-2(a-1)x+1>0$ 이 성립할 실수 $a$ 의 범위.
  category: '최고차항 계수 0 분기 → 이차인 경우 판별식 → 두 경우 합집합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a-1=0$ 이면 부등식이 $1>0$ 이라 참 — 이 분기가 답의 닫힌 경계 $a=1$ 을 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차부등식이 항상 성립할 조건 — 최고차항 계수 0 분기 포함"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e17 과 같은 골조다. $a-1=0$ 분기가 참이라 $a=1$ 이 답에 등호로 들어가고, $a-1\ne 0$ 쪽은 $a-1>0$ 과 $(a-1)^2-(a-1)<0$ 의 연립이다.
    판별식을 $(a-1)$ 로 묶으면 $(a-1)(a-2)<0$ 이라 계산은 가볍고, 어려움은 오직 분기 인식에 있다.
    확인체크 ★2 출발 · 분기 통찰 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$a-1=0$ 참 → $a-1>0$ 이고 $(a-1)(a-2)<0$ → 합집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1\le a<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/213-451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덩어리 $a-1$ 의 이동값과 상수항 1 을 바꾼다. 제약: 상수항이 양수여야 계수 0 분기가 답에 포함되고, 판별식 $k^2-(\\text{상수})k<0$ 이 유리수 근을 갖도록 상수항을 정수로 둔다."
    creative: "(1) 답의 정수 $a$ 의 개수를 묻기(★3 유지) (2) 부등호를 $\\ge$ 로 바꾸면 $D\\le 0$ 이 되어 오른쪽 경계도 닫힌다(★3 유지) (3) 상수항을 $a$ 를 포함한 식으로 두면 판별식이 이차에서 더 복잡해져 ★4."
```

```yaml
- id: GN-CM1-213-452
  page: 213
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차함수 $y=x^2-4kx+1$ 의 그래프가 직선 $y=2x-k^2$ 보다 항상 위쪽에 있을 실수 $k$ 의 범위.
  category: '그래프 위아래 → 차 함수의 부호 조건 → 판별식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「항상 위쪽」이라는 기하 조건을 차 함수 $ (\\text{이차})-(\\text{직선})>0$ 의 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프가 직선보다 항상 위쪽일 조건 — 차 함수의 판별식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 빼면 $x^2-(4k+2)x+(1+k^2)>0$ 이고 최고차항이 1 로 고정이라 분기가 없다. $D/4<0$ 한 줄이다.
    전개하면 $3k^2+4k<0$ 으로 깔끔히 인수분해된다. 부담은 기하 → 대수 전환 한 번뿐.
    확인체크 ★2 출발 · 통찰 1개(RT d1) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '차 함수 $x^2-(4k+2)x+1+k^2>0$ (모든 $x$) → $D/4<0$ → $k(3k+4)<0$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{4}{3}<k<0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/213-452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$-4k$·$2x$·$k^2$·상수 1 을 바꾼다. 제약: 차 함수의 판별식이 $k$ 에 대한 이차식으로 남아야 하고(이차항 계수가 0 이 되면 일차 조건이 된다) 인수분해로 유리수 근이 나와야 한다."
    creative: "(1) 「항상 아래쪽」으로 바꾸면 최고차항 계수가 음수여야 해서 분기가 생기고 ★3 (2) 두 그래프가 서로 다른 두 점에서 만날 조건으로 바꾸면 $D>0$ 으로 방향만 뒤집힌다(★2 유지) (3) 이차함수의 최고차항을 $a$ 로 두면 계수 0·부호 분기가 더해져 ★3."
```

```yaml
- id: GN-CM1-214-e18
  page: 214
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    이차부등식 $ax^2+4x+a>0$ 에 대하여 ⑴ 해를 가질 $a$ 의 범위 ⑵ 해가 존재하지 않을 $a$ 의 범위.
  category: '최고차항 부호 분기 → 아래로 볼록은 항상 해 존재 · 위로 볼록은 최댓값 조건'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a>0$ 이면 판별식과 무관하게 해가 존재하고 $a<0$ 일 때만 $D>0$ 이 필요 — 두 분기의 결론이 다름"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 는 ⑴ 의 여집합($a\\ne 0$ 안에서)이라는 관계로 두 번째 답을 바로 얻음"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차부등식이 해를 갖거나 갖지 않을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「해를 갖는다」를 무조건 $D>0$ 으로 외우면 $a>0$ 분기를 통째로 잃는다. 부호 분기가 이 유형의 본체다.
    $a<0$ 쪽은 최댓값 $>0$ 즉 $4-a^2>0$ 이고, ⑵ 는 $a\ne 0$ 안에서 ⑴ 의 여집합이라 등호가 붙는다.
    필수 예제 ★2 출발 · 통찰 2개 · 소문항 2개로 M_total 9 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$a>0$ 이면 항상 해 존재 → $a<0$ 이면 $D/4=4-a^2>0$ → ⑵ 는 그 여집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-2<a<0$ 또는 $a>0$ ⑵ $a\le -2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/214-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 4 와 양끝 계수가 같은 $a$ 라는 대칭 배치를 바꾼다. 제약: 판별식이 $a$ 의 이차식으로 남아야 하고, 상수항을 $a$ 와 다른 문자로 두면 미지수가 둘이 되어 유형이 달라진다."
    creative: "(1) 부등호를 $\\ge$ 로 바꾸면 $D\\ge 0$ 이 되어 경계가 닫힌다(★3 유지) (2) 「모든 실수에서 성립」으로 바꾸면 반대쪽 조건이 되어 e17 유형과 합쳐진다(★3) (3) ⑴·⑵ 를 합쳐 「해를 갖지 않을 $a$ 의 최댓값」 한 문항으로 줄이면 ★2."
```

```yaml
- id: GN-CM1-214-453
  page: 214
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차부등식 $2x^2-ax-a+6<0$ 이 해를 갖도록 하는 실수 $a$ 의 범위.
  category: '아래로 볼록 → 최솟값 $<0$ → 판별식 $>0$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차부등식이 해를 가질 조건 — 최고차항 부호가 고정된 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    최고차항이 2 로 고정이라 분기가 없고, 「$<0$ 인 해가 있다 ⟺ 최솟값 $<0$ ⟺ $D>0$」 공식 적용 한 줄이다.
    $a^2+8a-48>0$ 의 인수분해만 정확하면 끝난다.
    확인체크 ★2 출발 · 절차형 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$D=a^2-8(-a+6)>0$ → $(a+12)(a-4)>0$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a<-12$ 또는 $a>4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/214-453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항 2, 일차항 $-a$, 상수항 $-a+6$ 의 계수를 바꾼다. 제약: 판별식이 $a$ 의 이차식이 되고 정수 근으로 인수분해돼야 한다. 최고차항을 음수로 두면 부등호 방향이 반대가 되어 유형이 바뀐다."
    creative: "(1) 최고차항을 $a$ 로 두면 부호 분기가 생겨 e18 유형이 되고 ★3 (2) 「해를 갖지 않을 조건」으로 바꾸면 $D\\le 0$ 으로 경계가 닫힌다(★2 유지) (3) 해가 존재하는 정수 $a$ 중 최소를 묻기(★2 유지)."
```

```yaml
- id: GN-CM1-214-454
  page: 214
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $(a-3)x^2-2(a-3)x-2>0$ 의 해가 존재하지 않도록 하는 실수 $a$ 의 범위.
  category: '최고차항 계수 0 분기 → 위로 볼록이고 최댓값 $\le 0$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a-3=0$ 이면 $-2>0$ 이 되어 해가 없으므로 이 분기가 답에 포함됨 — 답 구간의 오른쪽 끝을 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식의 해가 존재하지 않을 조건 — 최고차항 계수 0 분기 포함"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a-3=0$ 이면 부등식이 $-2>0$ 이라 해가 없고, 이것이 답의 열린 끝 $a<3$ 을 만든다.
    $a-3\ne 0$ 쪽은 $a-3<0$ 이고 $D/4=(a-3)^2+2(a-3)\le 0$ 즉 $(a-3)(a-1)\le 0$ 이다.
    확인체크 ★2 출발 · 분기 통찰 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$a-3=0$ 이면 해 없음 → $a-3<0$ 이고 $(a-3)(a-1)\le 0$ → 합집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1\le a<3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/214-454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덩어리 $a-3$ 의 이동값과 상수항 $-2$ 를 바꾼다. 제약: 상수항이 음수여야 계수 0 분기가 「해 없음」에 포함되고(양수면 기각되어 답 구간이 끊긴다), 판별식이 같은 덩어리로 묶이도록 일차항을 $-2(a-3)x$ 로 유지한다."
    creative: "(1) 상수항을 양수로 두면 계수 0 분기가 기각되어 I-VF 가 붙고 ★4 (2) 「해를 가질 조건」으로 뒤집으면 여집합이라 T-경계가 핵심이 된다(★3 유지) (3) 조건을 만족하는 정수 $a$ 의 개수를 묻기(★3 유지)."
```

```yaml
- id: GN-CM1-214-455
  page: 214
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $(a+1)x^2-2(a+1)x+4\le 0$ 이 단 하나의 해를 갖도록 하는 실수 $a$ 의 값.
  category: '단 하나의 해 → 아래로 볼록이고 $x$ 축에 접함 → 후보 중 계수 0 기각'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「해가 단 하나」 ⟺ 아래로 볼록($a+1>0$)이고 $D/4=0$ (접점 하나만 등호로 남음)"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$(a+1)(a-3)=0$ 의 두 후보 중 $a=-1$ 은 이차부등식이 아니게 되어 기각됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차부등식이 단 하나의 해를 가질 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\le 0$ 의 해가 한 점뿐이려면 포물선이 아래로 볼록하면서 $x$ 축에 접해야 한다. 부호 조건과 $D=0$ 을 동시에 걸어야 한다.
    판별식 식 $(a+1)^2-4(a+1)=0$ 에서 $a=-1$ 이 형식상 근으로 나오지만 그때는 부등식이 $4\le 0$ 이라 해가 없어 기각된다.
    확인체크 ★2 출발 · 통찰 2개(EQV d1 · VF d2) · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$a+1>0$ 이고 $(a+1)^2-4(a+1)=0$ → $a=-1$ 기각 → $a=3$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/214-455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덩어리 $a+1$ 의 이동값과 상수항 4 를 바꾼다. 제약: $D/4=0$ 이 $(a+1)$ 로 묶여 유리수 근 두 개를 내야 하고, 그중 하나가 반드시 계수 0 이 되도록 상수항을 양수로 둔다(기각 단계 유지)."
    creative: "(1) 부등호를 $\\ge$ 로 바꾸면 위로 볼록 조건이 되어 부호가 반대로 뒤집힌다(★3 유지) (2) 그 단 하나의 해 $x$ 값까지 함께 묻기(★3 유지) (3) 「해가 오직 두 개」처럼 불가능한 조건을 물어 존재하지 않음을 논증하게 하면 ★4."
```

```yaml
- id: GN-CM1-215-e19
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전예제"
  summary: |
    $0\le x\le 3$ 에서 $x^2+ax+a^2-9\le 0$ 이 항상 성립할 실수 $a$ 의 범위.
  category: '제한 범위 → 판별식이 아니라 구간 끝점의 최댓값 조건 → 연립'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제한 구간에서 항상 $\\le 0$ ⟺ 구간 내 최댓값 $\\le 0$, 아래로 볼록이므로 두 끝점 값만 확인하면 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제한된 범위에서 항상 성립하는 이차부등식 — 끝점 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    모든 실수 조건이 아니므로 판별식을 쓰면 안 되고, 아래로 볼록한 포물선의 구간 최댓값이 두 끝점 중 하나라는 성질로 바꿔야 한다.
    $f(0)\le 0$ 과 $f(3)\le 0$ 을 각각 푼 뒤 교집합을 잡는다. 계산 자체는 $a$ 에 대한 이차부등식 두 개로 가볍다.
    발전 예제 ★3 출발 · 통찰 1개(EQV d2) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '아래로 볼록 → $f(0)\le 0$ 이고 $f(3)\le 0$ → 두 해의 교집합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3\le a\le 0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/215-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 $[0,3]$ 의 양끝과 상수항 $a^2-9$ 를 바꾼다. 제약: 끝점 조건 두 개가 모두 $a$ 의 이차부등식이 되고 각각 유리수 근으로 인수분해돼야 하며, 두 해의 교집합이 비지 않아야 한다."
    creative: "(1) 부등호를 $\\ge$ 로 뒤집으면 최솟값 조건이 되어 축의 위치 분기가 생기고 ★4 (2) 구간을 $a$ 를 포함한 구간으로 두면 축과 구간의 상대 위치 분기로 ★4 (3) 정수 $a$ 의 개수를 묻기(★3 유지)."
```

```yaml
- id: GN-CM1-215-456
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-2\le x\le 4$ 에서 $x^2-2ax+a^2-16<0$ 이 항상 성립할 실수 $a$ 의 범위.
  category: '제한 범위 → 끝점 최댓값 $<0$ 두 개 연립'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제한 구간에서 항상 $<0$ ⟺ 아래로 볼록한 포물선의 두 끝점 값이 모두 음수"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제한된 범위에서 항상 성립하는 이차부등식 — 끝점 최대"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변이 $(x-a)^2-16$ 이라 끝점 대입이 곧바로 $(a+2)^2<16$, $(a-4)^2<16$ 두 부등식이 된다.
    두 해 $-6<a<2$ 와 $0<a<8$ 의 교집합을 잡는 마지막 단계에서 한쪽 구간을 빠뜨리는 실수가 잦다.
    발전 예제 유제 ★3 출발 · 통찰 1개(EQV d2) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '$f(-2)<0$ 이고 $f(4)<0$ → $(a+2)^2<16$ 과 $(a-4)^2<16$ → 교집합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0<a<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/215-456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 두 끝값과 상수항의 $-16$ 을 바꾼다. 제약: $(x-a)^2-k$ 꼴이 유지되도록 $a^2$ 항과 $-2ax$ 항을 짝지어 두고, $k$ 가 완전제곱수여야 끝점 조건이 정수 구간으로 떨어진다."
    creative: "(1) 부등호를 $\\le$ 로 바꾸면 경계가 닫힌다(★3 유지) (2) 구간 밖에서는 성립하지 않아도 된다는 점을 이용해 「구간에서 해를 가질 조건」으로 바꾸면 최솟값 조건이 되어 축 분기로 ★4 (3) 상수항을 $a$ 의 일차식으로 두면 끝점 조건이 비대칭이 되어 ★3~4."
```

```yaml
- id: GN-CM1-215-457
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-1\le x\le 2$ 에서 $x^2-4x>a^2-8$ 이 항상 성립하도록 하는 정수 $a$ 의 개수.
  category: '변수·상수 분리 → 좌변의 구간 최솟값 > 우변 → 정수 세기'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x$ 항과 $a$ 항이 이미 분리돼 있으므로 「항상 성립」 ⟺ 좌변의 구간 최솟값 $>$ 우변 상수"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제한된 범위에서 항상 성립하는 이차부등식 — 변수 분리형 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x^2-4x=(x-2)^2-4$ 의 축 $x=2$ 가 구간의 오른쪽 끝이라 최솟값이 끝점 $x=2$ 에서 $-4$ 다(T-범위).
    $-4>a^2-8$ 에서 $a^2<4$ 를 얻고 정수 $a$ 를 센다. 축이 구간 안인지 끝인지 확인하는 것이 유일한 함정.
    발전 예제 유제 ★3 출발 · 통찰 1개(EQV d2) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '좌변 최솟값 $f(2)=-4$ → $-4>a^2-8$ → $a^2<4$ → 정수 3개'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/215-457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 $[-1,2]$ 와 좌변의 축(일차항 계수), 우변의 $-8$ 을 바꾼다. 제약: 축이 구간 안에 들어가면 최솟값이 꼭짓점 값이 되어 답이 달라지므로 어느 쪽을 의도하는지 먼저 정하고, $a^2<k$ 의 $k$ 가 완전제곱수 근처여야 정수 개수가 깔끔하다."
    creative: "(1) 축을 구간 내부로 옮기면 꼭짓점 최솟값이 되어 함정이 바뀐다(★3 유지) (2) 부등호를 $\\ge$ 로 바꾸면 등호 포함으로 정수 개수가 2개 늘 수 있다(★3 유지) (3) $a$ 의 최댓값·최솟값의 곱을 묻기(★3 유지)."
```

```yaml
- id: GN-CM1-215-458
  page: 215
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-2<x<1$ 에서 $y=-2x^2+3ax+8$ 의 그래프가 직선 $y=a^2x-4$ 보다 항상 위쪽에 있을 실수 $a$ 의 범위.
  category: '차 함수 → 위로 볼록 + 열린 구간 → 끝점에서 $\ge 0$ 두 개 연립'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「항상 위쪽」을 차 함수 $g(x)=-2x^2+(3a-a^2)x+12>0$ 의 부호 조건으로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "위로 볼록한 $g$ 의 구간 최솟값은 끝점 쪽이고, 구간이 열려 있으므로 끝점에서는 $\\ge 0$ 이면 충분(등호 허용)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "제한된 열린 구간에서 그래프가 직선보다 위쪽일 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    위로 볼록이라 최솟값이 끝점 쪽에 있고, 구간이 열려 있어 끝점은 포함되지 않으므로 $g(-2)\ge 0$, $g(1)\ge 0$ 로 등호를 허용해야 답의 닫힌 경계가 나온다.
    $a$ 에 대한 이차부등식 두 개를 풀어 교집합을 잡으면 답이 두 구간의 합집합이 된다.
    [분류 이슈] 벤더는 발전 예제 유제(확인체크)라 ★3 출발이지만 열린 구간 등호 처리 + 이차부등식 2개 연립 + 두 구간 답으로 통찰 2개 · M_total 9 → ★4 로 두었다.
  tier: star_4
  mechanism_primary: '차 함수 $g(x)=-2x^2+(3a-a^2)x+12$ → 열린 구간이므로 $g(-2)\ge 0$ 이고 $g(1)\ge 0$ → 교집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2\le a\le 1$ 또는 $2\le a\le 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/215-458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 두 끝, 이차항 계수 $-2$, 상수항 8 과 $-4$ 를 바꾼다. 제약: 이차항 계수는 음수로 유지해야 끝점 조건이 성립하고, 끝점 조건 두 개가 $a$ 에 대해 각각 인수분해돼야 한다. $3a$ 와 $a^2$ 를 동시에 두어야 $a$ 의 이차식이 나온다."
    creative: "(1) 구간을 닫힌 구간으로 바꾸면 끝점 조건이 $>0$ 이 되어 답의 경계가 전부 열린다(★4 유지·경계 함정 강화) (2) 「항상 아래쪽」으로 뒤집으면 아래로 볼록 조건이 필요해 분기가 생기고 ★4 (3) 구간을 모든 실수로 바꾸면 판별식 한 줄로 끝나 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-216-459
  page: 216
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 이차함수 $y=f(x)$, $y=g(x)$ 의 그래프가 주어질 때 $0<f(x)<g(x)$ 의 해가 $\alpha<x<\beta$ 이다. $\alpha+\beta$ 의 값.
  category: '그래프 읽기 → $f>0$ 구간과 $f<g$ 구간의 교집합'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "식 없이 그래프에서 $f$ 의 $x$ 절편(-2, 2)과 두 곡선의 교점($x=-1$, 3)을 구분해 읽고 각각을 부등식의 해 구간으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프로 주어진 두 이차함수의 연립부등식 해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $0<f(x)<g(x)$ 를 $f(x)>0$ 과 $f(x)<g(x)$ 두 조건으로 쪼개는 것이 첫 관문이다.
    $x$ 절편(근)과 교점을 혼동하면 바로 틀린다. 앞은 $x<-2$ 또는 $x>2$, 뒤는 $-1<x<3$ 이라 교집합이 $2<x<3$ 이다.
    STEP 1 출발 ★2 이나 식이 하나도 없는 그래프 판독(Mₐ 3) · 통찰 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '$f>0$: $x<-2$ 또는 $x>2$ → $f<g$: $-1<x<3$ → 교집합 $2<x<3$ → $\alpha+\beta$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: "crop:fig-216-459.png"
  latex: latex-bank/gn-cm1/items/216-459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 절편·교점 좌표를 바꾼다. 제약: 그림 라벨이 고정이므로 숫자만 바꿀 때는 크롭 이미지를 함께 갱신해야 하고, 교집합이 한 구간으로 떨어지도록 절편과 교점의 대소 배치를 유지해야 한다($f$ 의 큰 근이 오른쪽 교점보다 왼쪽)."
    creative: "(1) $g(x)<f(x)<0$ 처럼 부등호 배치를 바꾸면 읽어야 할 구간이 달라진다(★3 유지) (2) 해가 두 구간이 되도록 배치를 바꾸고 구간 길이의 합을 묻기(★3) (3) 그래프 대신 $f$, $g$ 의 식을 주면 그래프 판독 통찰이 사라져 ★2."
```

```yaml
- id: GN-CM1-216-460
  page: 216
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    보기 ㄱ~ㄹ 중 해가 모든 실수인 부등식을 모두 고르기.
  category: '완전제곱식·판별식으로 해가 모든 실수인지 판정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "해가 모든 실수인 이차부등식 판정(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 보기를 완전제곱식 또는 판별식으로 각각 판정하는 표준 작업이라 통찰로 셀 단계가 없다.
    유일한 함정은 등호다. $(x+1)^2\ge 0$ 은 모든 실수지만 $(x+3)^2>0$ 은 $x=-3$ 을 빼야 한다(T-경계).
    STEP 1 출발 ★2 · 절차형 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '각 보기를 완전제곱식 또는 $D<0$ 으로 판정 → 등호 유무로 ㄱ과 ㄷ 구분'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄱ, ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/216-460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수를 바꾼다. 제약: 완전제곱 보기 한 쌍(등호 있는 것과 없는 것)은 반드시 남겨야 이 문항의 취지가 유지되고, 판별식 보기는 부호가 확실히 갈리도록 $D$ 가 0 에서 멀리 떨어지게 둔다."
    creative: "(1) 「해가 없는 부등식」을 고르게 하면 여집합 판정이 되어 ★2 유지 (2) 보기에 최고차항 계수가 음수인 것을 섞으면 부호 함정이 추가돼 ★3 (3) 보기마다 해집합을 직접 쓰게 하는 서술형으로 바꾸면 ★3."
```

```yaml
- id: GN-CM1-216-461
  page: 216
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x^2+6x+6-a=0$ 이 중근을 가질 때 $ax^2+4x+15>0$ 을 만족시키는 정수 $x$ 의 개수.
  category: '중근 조건으로 $a$ 결정 → 이차부등식 풀이 → 정수해 세기'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중근 조건으로 계수를 정한 뒤 이차부등식의 정수해 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $D/4=9-(6-a)=0$ 에서 $a=-3$ 이 바로 나오고, 그 뒤는 $-3x^2+4x+15>0$ 을 양변에 $-1$ 을 곱해 푸는 표준 절차다.
    함정은 두 곳이다. 음수 계수로 나눌 때의 부등호 반전(T-부호)과 $-\dfrac{5}{3}<x<3$ 에서 양 끝을 포함하지 않는 정수 세기(T-경계).
    STEP 1 출발 ★2 · 절차형 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$D=0$ → $a=-3$ → $(3x+5)(x-3)<0$ → $-\dfrac{5}{3}<x<3$ → 정수 4개'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/216-461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 방정식의 계수(6, 6)와 뒤 부등식의 4, 15 를 바꾼다. 제약: 중근 조건에서 $a$ 가 정수로 떨어져야 하고, 그 $a$ 로 만든 이차부등식이 인수분해돼 해의 끝값이 유리수여야 정수 개수가 확정된다."
    creative: "(1) 앞 조건을 「서로 다른 두 실근」으로 바꾸면 $a$ 가 범위가 되어 정수 개수도 범위가 되고 ★4 (2) 정수 $x$ 의 합을 묻기(★2 유지) (3) 뒤 부등식의 최고차항을 양수가 되게 두면 부호 반전 함정이 사라져 ★1~2."
```

```yaml
- id: GN-CM1-216-462
  page: 216
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x^2-x\le 2|x-1|$ 의 해가 $\alpha\le x\le \beta$ 일 때 $\beta-\alpha$ 의 값.
  category: '절댓값 구간 분할 → 각 구간에서 이차부등식 → 합집합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 이차부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x\ge 1$ 과 $x<1$ 로 나눠 각각 인수분해하는 표준 분할이다(스키마상 단순 절댓값 분할은 통찰로 세지 않고 T-부호로 처리).
    각 구간의 해를 그 구간과 교집합한 뒤 둘을 합집합해야 $-2\le x\le 2$ 가 나온다. 교집합을 건너뛰면 틀린다.
    STEP 1 출발 ★2 · 절차형 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$x\ge 1$: $(x-1)(x-2)\le 0$ → $x<1$: $(x+2)(x-1)\le 0$ → 합집합 $-2\le x\le 2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/216-462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 이차식과 우변의 계수 2, 절댓값 안의 $x-1$ 을 바꾼다. 제약: 두 경우의 해가 각각 분기 구간과 겹쳐야 하고, 합집합이 한 구간으로 이어지도록 경계 $x=1$ 에서 양쪽 해가 맞닿아야 한다."
    creative: "(1) 절댓값을 둘($|x|+|x-2|$) 로 늘리면 세 구간 분할이 되어 ★3 (2) 해를 만족하는 정수 개수를 묻기(★2 유지) (3) 우변을 $2|x-1|+k$ 로 두고 해가 한 점뿐일 $k$ 를 묻게 하면 ★4."
```

```yaml
- id: GN-CM1-216-463
  page: 216
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $h=50t-5t^2$ 로 움직이는 공의 높이가 $80\,\mathrm{m}$ 이상인 시간이 몇 초 동안인지.
  category: '실생활 조건 → 이차부등식 → 해 구간의 길이'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차부등식의 활용 — 물체의 높이 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $50t-5t^2\ge 80$ 을 $t^2-10t+16\le 0$ 으로 정리해 $(t-2)(t-8)\le 0$ 을 얻는 표준 활용 문항이다.
    마지막에 답이 끝점 $t=8$ 이 아니라 구간의 길이 $8-2$ 라는 점만 주의하면 된다(T-단위).
    STEP 1 출발 ★2 · 절차형 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$50t-5t^2\ge 80$ → $(t-2)(t-8)\le 0$ → $2\le t\le 8$ → 구간 길이 6'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$초'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/216-463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속(50)과 기준 높이(80)를 바꾼다. 제약: 판별식이 양수여야 구간이 생기고, 두 근이 정수로 떨어져야 답이 깔끔하다. 기준 높이가 최고점($125\\,\\mathrm{m}$)을 넘으면 해가 없어 문제가 성립하지 않는다."
    creative: "(1) 「최고 높이에 도달하는 시각」을 함께 묻는 소문항으로 확장(★2 유지) (2) 「지면에 떨어질 때까지 $80\\,\\mathrm{m}$ 미만인 시간」으로 바꾸면 여집합과 정의역 $0\\le t\\le 10$ 이 필요해 ★3 (3) 초속을 미지수로 두고 조건을 만족할 범위를 묻게 하면 ★4."
```

```yaml
- id: GN-CM1-216-464
  page: 216
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이차함수 $y=ax^2-3$ 의 그래프가 직선 $y=-4x-a$ 보다 항상 아래쪽에 있을 실수 $a$ 의 범위.
  category: '그래프 위아래 → 차 함수 $<0$ → 위로 볼록 + 판별식'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「항상 아래쪽」을 차 함수 $ax^2+4x+a-3<0$ 이 모든 실수에서 성립할 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프가 직선보다 항상 아래쪽일 조건 — 차 함수의 판별식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「이차함수」라고 못 박아 $a\ne 0$ 이 보장되므로 계수 0 분기가 없고, $a<0$ 과 $D/4<0$ 을 연립하면 된다.
    $4-a(a-3)<0$ 에서 $(a-4)(a+1)>0$ 을 얻은 뒤 $a<0$ 과 교집합하는 마지막 단계가 함정이다(T-부호).
    STEP 1 출발 ★2 · 통찰 1개(RT d1) · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: '차 함수 $ax^2+4x+a-3<0$ (모든 $x$) → $a<0$ 이고 $(a-4)(a+1)>0$ → $a<-1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a<-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/216-464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 $-3$, 직선의 기울기 $-4$, 직선의 절편 $-a$ 를 바꾼다. 제약: 차 함수의 판별식이 $a$ 의 이차식이 되도록 상수항 쪽에 $a$ 를 남겨야 하고, 그 이차식이 인수분해돼야 한다."
    creative: "(1) 「이차함수」를 「함수」로 바꾸면 $a=0$ 분기가 생겨 ★3 (2) 두 그래프가 만나지 않을 조건으로 바꾸면 위·아래 구분이 사라져 $D<0$ 만 남고 ★2 (3) 직선을 $y=mx-a$ 로 두고 모든 $m$ 에 대해 성립할 조건을 묻게 하면 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-217-465
  page: 217
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    $x^2-(n+5)x+5n\le 0$ 을 만족시키는 정수 $x$ 의 개수가 3 이 되도록 하는 모든 자연수 $n$ 의 값의 합. 5지선다.
  category: '인수분해로 두 근 확정 → 근의 대소 분기 → 정수 개수 식'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수가 $n$ 을 품고 있어도 $(x-5)(x-n)\\le 0$ 으로 인수분해되어 두 근이 5 와 $n$ 임을 읽음"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$n<5$ 와 $n>5$ 로 해 구간의 좌우가 바뀌어 정수 개수 식이 $6-n$ 과 $n-4$ 로 갈리고, 두 분기가 모두 답에 기여"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차부등식의 정수해 개수 조건 — 근의 대소 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한쪽 분기만 보고 $n=3$ 에서 멈추면 답이 절반이 된다. $n>5$ 쪽의 $n=7$ 까지 찾아야 합이 10 이다.
    $n=5$ 일 때는 해가 $x=5$ 한 점이라 개수가 1 이므로 제외된다는 것도 확인해야 한다.
    STEP 2 출발 ★3 · 통찰 2개 · 계산은 가벼움(M_total 7) · 기출 태그 +0 → ★3.
  tier: star_3
  mechanism_primary: '$(x-5)(x-n)\le 0$ → $n<5$ 면 $6-n=3$ · $n>5$ 면 $n-4=3$ → $n=3,7$ → 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/217-465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 근 5 와 요구 개수 3 을 바꾼다. 제약: 두 근 중 하나가 정수로 고정돼야 개수 식이 일차식으로 떨어지고, 요구 개수가 1 이면 $n=5$ 중복 분기가 답에 섞이므로 2 이상으로 둔다."
    creative: "(1) $n$ 을 정수로 확장하면 음수 분기가 추가돼 ★4 (2) 정수해의 합이 특정 값이 되도록 조건을 바꾸면 구간 위치까지 따져야 해서 ★4 (3) 부등호를 $<$ 로 바꾸면 끝점 두 개가 빠져 개수 식이 $4-n$ 꼴로 바뀐다(★3 유지)."
```

```yaml
- id: GN-CM1-217-466
  page: 217
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    부등식 $|x|+|x-2|<3$ 과 해가 같은 이차부등식을 5지선다에서 고르기.
  category: '절댓값 세 구간 분할 → 해집합 → 그 해를 갖는 이차부등식 역구성'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 해 $-\\dfrac{1}{2}<x<\\dfrac{5}{2}$ 를 두 근으로 갖는 이차부등식을 거꾸로 만들어 선택지와 대조"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 부등식의 해와 같은 해를 갖는 이차부등식 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x<0$, $0\le x<2$, $x\ge 2$ 세 구간으로 나누면 가운데 구간은 항상 성립해 통째로 해가 된다는 점이 첫 고비다.
    합집합 $-\dfrac{1}{2}<x<\dfrac{5}{2}$ 를 얻은 뒤 $(2x+1)(2x-5)<0$ 을 전개해 선택지와 맞춘다.
    STEP 2 출발 ★3 · 통찰 1개(BW d1) · 절댓값 분할은 T-부호로 처리 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: '세 구간 분할 → 해 $-\dfrac{1}{2}<x<\dfrac{5}{2}$ → $(2x+1)(2x-5)<0$ 전개'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/217-466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 두 기준점(0, 2)과 우변 3 을 바꾼다. 제약: 우변이 두 기준점의 거리(2)보다 커야 가운데 구간이 통째로 해가 되고 해가 한 구간으로 나오며, 두 끝값이 유리수여야 선택지를 정수 계수로 만들 수 있다."
    creative: "(1) 우변을 기준점 거리보다 작게 두면 해가 없어 「해가 없는 부등식 고르기」가 된다(★3) (2) 부등호를 $\\ge$ 로 바꾸면 여집합이 되어 바깥 두 구간이 답이 된다(★3 유지) (3) 해집합만 주고 절댓값 부등식을 역으로 만들게 하면 ★4."
```

```yaml
- id: GN-CM1-217-467
  page: 217
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $ax^2+bx+c>0$ 의 해가 $\dfrac{1}{14}<x<\dfrac{1}{10}$ 일 때 $4cx^2-2bx+a>0$ 의 해.
  category: '해가 주어진 이차부등식 → 계수 뒤집기 → 치환으로 구간 사상'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "유한구간이 해이므로 $a<0$ 이고 $a\\left(x-\\dfrac{1}{14}\\right)\\left(x-\\dfrac{1}{10}\\right)>0$ 으로 계수를 환원"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$4cx^2-2bx+a$ 가 원식에 $x\\to -\\dfrac{1}{2x}$ 를 넣고 $4x^2$ 을 곱한 꼴임을 보고 해 구간을 그대로 사상"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "해가 주어진 이차부등식 — 계수 역순·배율이 섞인 변형식의 해"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    계수를 직접 대입하는 경로는 $b=\dfrac{6}{35}$, $c=-\dfrac{1}{140}$ 같은 분수를 끌고 다녀야 해서 길다.
    $x\to -\dfrac{1}{2x}$ 치환을 보면 $\dfrac{1}{14}<-\dfrac{1}{2x}<\dfrac{1}{10}$ 한 줄로 $-7<x<-5$ 가 나온다.
    STEP 2 출발 ★3 · 통찰 2개(BW d1 · RT d2) · M_total 9 → +1 하여 ★4.
  tier: star_4
  mechanism_primary: '$a<0$·근 $\dfrac{1}{14}$, $\dfrac{1}{10}$ → $x\to -\dfrac{1}{2x}$ 치환 → $\dfrac{1}{14}<-\dfrac{1}{2x}<\dfrac{1}{10}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-7<x<-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/217-467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근의 분모(14, 10)와 변형식의 배율(4, -2)을 바꾼다. 제약: 배율이 $4c$, $-2b$, $a$ 처럼 $x\\to -\\dfrac{1}{kx}$ 한 번에 대응되는 조합이어야 치환 경로가 살고, 근의 역수가 정수가 되도록 분자를 1 로 둔다."
    creative: "(1) 배율을 $cx^2-bx+a$ 로 단순화하면 역수·부호만 남아 ★3 (2) 해의 두 끝값의 곱을 묻기(★4 유지) (3) 원 부등식의 해를 바깥 두 구간으로 주면 $a>0$ 이 되고 변형식의 해도 바깥 구간이 되어 T-부호가 한 겹 늘어난다(★4)."
```

```yaml
- id: GN-CM1-217-468
  page: 217
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    이차다항식 $P(x)$ 가 ㈎ $P(x)\ge -2x-3$ 의 해가 $0\le x\le 1$, ㈏ $P(x)=-3x-2$ 가 중근을 가짐을 만족할 때 $P(-1)$. 5지선다.
  category: '해집합 → 차 함수의 인수 복원(선행계수 미지) → 중근 조건으로 선행계수 결정'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "㈎ 를 차 함수 $Q(x)=P(x)+2x+3\\ge 0$ 의 해 조건으로 옮김"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "해가 닫힌 구간 $[0,1]$ → $Q(x)=ax(x-1)$, $a<0$ 으로 $P$ 를 미지수 하나만 남기고 복원"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "조건으로 주어진 이차다항식 결정 — 해집합 복원 + 중근"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $P$ 의 세 계수를 미지수로 두고 연립하면 길어진다. ㈎ 에서 $P(x)=ax(x-1)-2x-3$ 으로 미지수를 하나로 줄이는 것이 핵심이다.
    ㈏ 에 넣으면 $ax^2+(1-a)x-1=0$ 의 판별식이 $(a+1)^2=0$ 이 되어 $a=-1$ 이 한 번에 나온다($a<0$ 과도 모순 없음).
    STEP 2 출발 ★3 · 통찰 2개(EQV d1 · BW d2) · 추상도 높고 M_total 10 · 기출 태그 → +1 하여 ★4.
  tier: star_4
  mechanism_primary: '㈎ → $P(x)=ax(x-1)-2x-3$ ($a<0$) → ㈏ 판별식 0 → $a=-1$ → $P(-1)$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/217-468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 해 구간 $[0,1]$ 과 두 직선 $-2x-3$, $-3x-2$ 의 계수를 바꾼다. 제약: 두 직선이 서로 달라야 ㈏ 가 새 정보를 주고, ㈏ 의 판별식이 $a$ 에 대해 완전제곱이 되도록 두 직선의 기울기 차이를 조절해야 $a$ 가 하나로 정해진다."
    creative: "(1) 묻는 값을 $P(2)$ 나 $P$ 의 최댓값으로 바꾸기(★4 유지) (2) ㈏ 를 「서로 다른 두 실근」으로 바꾸면 $a$ 가 범위가 되어 $P(-1)$ 의 범위를 묻는 ★5 급이 된다 (3) ㈎ 의 해를 바깥 두 구간으로 주면 $a>0$ 이 되어 부호 분기가 바뀐다(★4 유지)."
```

```yaml
- id: GN-CM1-217-469
  page: 217
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)>0$ 의 해가 $1<x<5$ 일 때 $f(3-2x)>f(0)$ 을 만족시키는 정수 $x$ 의 개수.
  category: '해집합에서 $f$ 복원 → 축 대칭으로 함숫값 비교 → 치환 후 정수 세기'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해가 유한구간 → $f(x)=a(x-1)(x-5)$, $a<0$ 으로 복원"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f$ 의 축이 $x=3$ 이고 위로 볼록이므로 $f(t)>f(0)$ ⟺ $t$ 가 축에서 0 보다 가깝다 ⟺ $0<t<6$"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "해가 주어진 이차부등식 — 축 대칭을 이용한 함숫값 비교"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f(3-2x)$ 를 전개해 $4a(x^2-1)>5a$ 로 풀어도 되지만, 축 $x=3$ 에 대한 대칭으로 $f(t)>f(0)$ ⟺ $0<t<6$ 을 쓰면 한 줄이다.
    어느 경로든 $a<0$ 으로 나누며 부등호가 뒤집히는 곳이 최대 함정이고, 마지막에 $-\dfrac{3}{2}<x<\dfrac{3}{2}$ 의 정수를 센다.
    STEP 2 출발 ★3 · 통찰 2개(BW d1 · SYM d2) · $f$ 추상·M_total 10 → +1 하여 ★4.
  tier: star_4
  mechanism_primary: '$f=a(x-1)(x-5)$, $a<0$ → 축 $x=3$ 대칭으로 $0<3-2x<6$ → 정수 3개'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/217-469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f>0$ 의 해 구간(1, 5), 치환식 $3-2x$, 비교 기준 $f(0)$ 을 바꾼다. 제약: 비교 기준점이 축에서 떨어져 있어야 대칭 경로가 유효하고, 치환식의 일차 계수가 음수면 최종 부등식 방향이 한 번 더 뒤집힌다."
    creative: "(1) 비교 기준을 $f(2)$ 처럼 구간 안의 값으로 바꾸면 대칭 거리 계산이 달라진다(★4 유지) (2) $f(x^2)>f(0)$ 으로 두면 이차 치환이 겹쳐 ★5 급 (3) 정수 $x$ 의 합을 묻기(★4 유지)."
```

```yaml
- id: GN-CM1-217-470
  page: 217
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $-x^2+2(k+3)x+4(k+3)>0$ 의 해가 존재하지 않도록 하는 정수 $k$ 의 최솟값.
  category: '위로 볼록 → 최댓값 $\le 0$ → 판별식 $\le 0$ → 정수 최솟값'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차부등식의 해가 존재하지 않을 조건 — 최고차항 부호 고정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최고차항이 $-1$ 로 고정이라 분기가 없고 $D/4\le 0$ 공식 한 줄이다. 판별식이 $(k+3)$ 으로 묶여 계산도 가볍다.
    함정은 등호다. $D=0$ 이면 포물선이 $x$ 축에 접하지만 $>0$ 인 점은 없으므로 등호를 포함해야 하고, 그 등호가 답 $k=-7$ 을 만든다(T-경계).
    STEP 2 출발 ★3 · 절차형이지만 등호 판정이 답에 직결 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: '$D/4=(k+3)^2+4(k+3)\le 0$ → $(k+3)(k+7)\le 0$ → $-7\le k\le -3$ → 최솟값'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/217-470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덩어리 $k+3$ 의 이동값과 상수항 계수 4 를 바꾼다. 제약: 판별식이 같은 덩어리로 묶이도록 일차항을 $2(k+3)x$ 로 유지하고, 두 근이 정수로 떨어져야 정수 최솟값이 경계와 일치한다."
    creative: "(1) 최고차항을 $k$ 로 두면 계수 0·부호 분기가 생겨 ★4 (2) 「해를 가질 조건」으로 뒤집으면 등호가 빠져 최솟값이 하나 달라진다(★3 유지) (3) 조건을 만족하는 정수 $k$ 의 개수를 묻기(★3 유지)."
```

```yaml
- id: GN-CM1-218-471
  page: 218
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $1\le x\le 4$ 에서 $-x^2+4x+a^2-4\ge 0$ 이 항상 성립하도록 하는 실수 $a$ 의 값이 아닌 것을 5지선다에서 고르기.
  category: '제한 범위 + 위로 볼록 → 축에서 먼 끝점의 최솟값 $\ge 0$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제한 구간에서 항상 $\\ge 0$ ⟺ 구간 최솟값 $\\ge 0$, 위로 볼록이고 축 $x=2$ 가 구간 안이므로 축에서 먼 끝점 $x=4$ 만 확인"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제한된 범위에서 항상 성립하는 이차부등식 — 위로 볼록·끝점 최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    위로 볼록이므로 구간 최솟값은 꼭짓점이 아니라 축에서 먼 끝점에 있다. 축 $x=2$ 가 구간 안이라 $x=1$ 과 $x=4$ 중 $x=4$ 가 결정적이다.
    $f(4)=a^2-4\ge 0$ 에서 $a\le -2$ 또는 $a\ge 2$ 이고, 선택지 중 $a=1$ 만 벗어난다. 선택지를 직접 대입하는 경로도 가능하다.
    STEP 2 출발 ★3 · 통찰 1개(EQV d2) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: '위로 볼록·축 $x=2$ → 최솟값 $f(4)=a^2-4\ge 0$ → $|a|\ge 2$ → 아닌 값 고르기'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/218-471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 $[1,4]$ 와 일차항 계수 4(축 위치), 상수항의 $a^2-4$ 를 바꾼다. 제약: 축이 구간 안에 있어야 「축에서 먼 끝점」 판단이 의미를 갖고, 두 끝점 중 어느 쪽이 결정적인지가 뒤집히지 않도록 구간을 비대칭으로 둔다."
    creative: "(1) 구간을 축 바깥으로 옮기면 단조라 가까운 끝점 하나만 보면 되어 ★2~3 (2) 「아닌 것」 대신 $a$ 의 범위를 직접 쓰게 하면 선택지 대입 경로가 막혀 ★3 (3) 부등호를 $>$ 로 바꾸면 경계가 열려 $a=\\pm 2$ 가 빠진다(★3 유지)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-218-472
  page: 218
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $3[x]^2-[x]-10<0$ 의 해가 $a\le x<b$ 일 때 $a+b$ 의 값($[x]$ 는 $x$ 보다 크지 않은 최대의 정수).
  category: '가우스 기호 치환 → 정수 해만 추림 → 각 정수를 구간으로 되돌려 합집합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$[x]=t$ 로 두고 푼 실수 범위 $-\\dfrac{5}{3}<t<2$ 를 정수 조건으로 걸러 $t\\in\\{-1,0,1\\}$ 로 이산화"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$[x]=n$ ⟺ $n\\le x<n+1$ 로 각 정수를 구간으로 되돌려 합치면 $-1\\le x<2$"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "가우스 기호를 포함한 이차부등식의 해"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $[x]$ 를 그냥 치환해 푼 $-\dfrac{5}{3}<t<2$ 를 그대로 답하면 틀린다. $t$ 가 정수라는 제약을 걸어 세 값으로 줄이는 것이 첫 통찰이다.
    다시 각 정수를 반열린 구간으로 되돌려 이어 붙여야 $-1\le x<2$ 가 나오고, 왼쪽은 닫히고 오른쪽은 열린 비대칭 경계가 답의 형태를 결정한다.
    실력 UP ★4 출발 · 통찰 2개(모두 d2) · 가우스 기호 표기(T-표기) 포함 M_total 8 → ★4.
  tier: star_4
  mechanism_primary: '$[x]=t$ → $(3t+5)(t-2)<0$ → 정수 $t=-1,0,1$ → $-1\le x<2$ → $a+b$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/218-472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차부등식의 세 계수(3, -1, -10)를 바꾼다. 제약: $t$ 의 해 구간이 연속된 정수 몇 개를 포함해야 합집합이 한 구간으로 이어지고, 끝값이 정수면 경계 포함 여부가 달라지므로 한쪽은 분수로 두는 편이 안전하다."
    creative: "(1) 해에 속하는 정수 $x$ 의 개수를 묻기(★4 유지) (2) $[x]$ 대신 $[x]^2$ 과 $x$ 를 섞으면 구간마다 다시 풀어야 해 ★5 급 (3) 계수를 조절해 $t$ 의 해가 정수를 하나도 포함하지 않게 하면 「해가 없음」을 논증하는 문항이 된다(★4)."
```

```yaml
- id: GN-CM1-218-473
  page: 218
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $ax^2+bx+c\ge 0$ 의 해가 $x=2$ 일 때 보기 ㄱ~ㄷ 중 옳은 것 모두 고르기.
  category: '해가 한 점 → $a(x-2)^2$ 복원 → 각 보기를 완전제곱 꼴로 다시 묶어 부호 판정'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\ge 0$ 의 해가 한 점뿐 → $a<0$ 이고 중근 2 → $ax^2+bx+c=a(x-2)^2$ 으로 계수를 한 문자로 환원"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$b=-4a$, $c=4a$ 를 넣어 각 보기를 $-a(x+2)^2$, $a(2x-1)^2$ 처럼 완전제곱으로 다시 묶어야 부호가 보임"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "해가 한 점인 이차부등식 — 계수 조작 보기 판정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    해가 한 점이라는 조건이 $a<0$ 과 중근을 동시에 강제한다는 것을 놓치면 세 보기 모두 판정할 수 없다.
    ㄴ 은 $-a(x+2)^2\le 0$ 이라 해가 $x=-2$ 이고, ㄷ 은 $a(2x-1)^2\ge 0$ 이라 해가 $x=\dfrac{1}{2}$ 라서 둘 다 거짓이다. 부호 $a<0$ 을 계속 끌고 가야 한다.
    실력 UP ★4 출발 · 통찰 2개 · 보기 3개로 M_total 9 → ★4.
  tier: star_4
  mechanism_primary: '$a<0$·중근 2 → $a(x-2)^2$ → 각 보기를 완전제곱으로 묶어 부호 판정'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/218-473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 2 를 다른 0 이 아닌 값으로 바꾼다. 제약: 중근이 0 이면 $c=0$ 이 되어 ㄷ 의 $cx^2+bx+a$ 가 이차식이 아니게 되므로 금지하고, 정수로 두어야 보기의 완전제곱 꼴이 깔끔하다."
    creative: "(1) 보기를 $cx^2+bx+a\\le 0$ 처럼 부등호를 바꾼 것으로 교체(★4 유지) (2) 원 조건을 「해가 없다」로 바꾸면 $a<0$·$D<0$ 이 되어 보기 판정이 전부 달라진다(★4) (3) 참인 보기의 개수를 세는 대신 각 보기의 해집합을 쓰게 하면 ★5 급 서술형."
```

```yaml
- id: GN-CM1-218-474
  page: 218
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    모든 실수 $x$ 에 대하여 $\sqrt{(a-1)x^2-8(a-1)x+4}$ 가 실수가 되도록 하는 실수 $a$ 의 범위.
  category: '근호 안 $\ge 0$ 으로 번역 → 최고차항 계수 0 분기 → 판별식'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「$\\sqrt{\\ }$ 가 실수」를 「근호 안의 식이 모든 실수 $x$ 에서 $\\ge 0$」 으로 번역"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a-1=0$ 이면 근호 안이 상수 4 라 항상 실수 — 이 분기가 답의 왼쪽 닫힌 경계 $a=1$ 을 만듦"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "근호 안의 식이 항상 실수일 조건 — 계수 0 분기 + 판별식"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    제곱근이 실수라는 조건을 모든 실수에서 성립하는 부등식으로 바꾸는 번역이 먼저다. 여기서 「모든 $x$」를 놓치면 문제가 달라진다.
    $a-1=0$ 분기가 참이라 $a=1$ 이 답에 등호로 들어가고, $a-1>0$ 쪽은 $D/4=16(a-1)^2-4(a-1)\le 0$ 즉 $(a-1)(4a-5)\le 0$ 이다.
    실력 UP ★4 출발 · 통찰 2개(EQV d1 · MI d2) · M_total 8 → ★4.
  tier: star_4
  mechanism_primary: '근호 안 $\ge 0$ (모든 $x$) → $a-1=0$ 참 → $a-1>0$ 이고 $(a-1)(4a-5)\le 0$ → 합집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1\le a\le \dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/218-474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덩어리 $a-1$ 의 이동값, 일차항 배수 8, 상수항 4 를 바꾼다. 제약: 상수항이 양수여야 계수 0 분기가 답에 포함되고, 판별식이 $(a-1)$ 로 묶여 유리수 근을 내도록 일차항을 $-8(a-1)x$ 로 유지한다."
    creative: "(1) 상수항을 음수로 두면 계수 0 분기가 기각되어 I-VF 가 붙는다(★4 유지) (2) $\\dfrac{1}{\\sqrt{\\ }}$ 꼴로 바꾸면 분모 조건 때문에 등호가 빠져 $>0$ 이 되고 경계가 전부 열린다(★4) (3) 정수 $a$ 를 묻게 하면 답이 한 값으로 좁혀진다(★4 유지)."
```

```yaml
- id: GN-CM1-218-475
  page: 218
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $3x^2+2(a+b+c)x+ab+bc+ca\le 0$ 의 해가 단 한 개일 때 $\dfrac{3b}{a}+\dfrac{3c}{b}+\dfrac{3a}{c}$ 의 값($abc\ne 0$).
  category: '해가 한 점 → $D=0$ → 대칭식 항등식으로 $a=b=c$ → 대입'
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최고차항이 3>0 이므로 「해가 단 한 개」 ⟺ $D/4=0$, 그 식이 $a^2+b^2+c^2-(ab+bc+ca)=0$ 으로 정리됨"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a^2+b^2+c^2-ab-bc-ca=\\dfrac{1}{2}\\{(a-b)^2+(b-c)^2+(c-a)^2\\}$ 항등식으로 실수 조건에서 $a=b=c$ 를 끌어냄"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "해가 한 점인 이차부등식 — 대칭식 판별식에서 $a=b=c$"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $D/4=(a+b+c)^2-3(ab+bc+ca)$ 를 전개하면 세 문자의 대칭식이 되고, 이것이 제곱의 합으로 묶이는 항등식을 알아야 $a=b=c$ 가 나온다.
    결론이 나오면 구하는 식은 $3+3+3$ 으로 끝나므로 계산 부담은 없고, 전부가 항등식 착안에 달려 있다.
    실력 UP ★4 출발 · 통찰 2개(EQV d2 · SYM d2) · M_total 8 → ★4. ★5 기준(통찰 3개 이상)에는 한 개 모자란다.
  tier: star_4
  mechanism_primary: '$D/4=0$ → $a^2+b^2+c^2=ab+bc+ca$ → 제곱합 항등식 → $a=b=c$ → 9'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/218-475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항 3 과 일차항의 배수 2 를 바꾼다. 제약: 판별식이 $\\dfrac{1}{2}\\{(a-b)^2+\\cdots\\}$ 꼴로 묶이려면 최고차항 계수와 $ab+bc+ca$ 의 계수 비가 3 : 1 로 맞아야 한다. 이 비가 깨지면 $a=b=c$ 결론이 나오지 않는다."
    creative: "(1) 구하는 식을 $\\dfrac{a^2+b^2+c^2}{ab+bc+ca}$ 처럼 다른 대칭식으로 바꾸기(★4 유지) (2) $a$, $b$, $c$ 를 양수로 제한하고 산술·기하 평균과 엮으면 ★5 급 (3) 「해가 단 한 개」를 「해가 없다」로 바꾸면 $D<0$ 이 되어 제곱합이 음수라는 모순에서 「그런 실수는 없다」를 논증하는 문항이 된다(★4)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 0 · ★2 11 · ★3 14 · ★4 8 · ★5 0
- 통찰형 25 · 절차형 8 · premium 0
- 구역별 ★ 중앙값: 필수·발전 예제 ★3(★2 7 · ★3 8 · ★4 1) · STEP 1 ★2(★2 5 · ★3 1) · STEP 2 ★3(★3 5 · ★4 2) · 실력 UP ★4(★4 4)
- 통찰 유형 분포: I-EQV 14 · I-MI 6 · I-RT 6 · I-BW 5 · I-VF 1 · I-SYM 2 (I-XU · I-PD · I-CON · I-SC 0)
- type_hint 상위 5: 「이차부등식이 항상 성립할 조건 — 계수 0 분기 포함」 3 · 「제한된 범위에서 항상 성립하는 이차부등식 — 끝점 최대/최소」 4 · 「해가 주어진 이차부등식 — 계수 역추적」 4 · 「해를 갖거나 갖지 않을 조건」 4 · 「해가 한 점인 이차부등식」 3
- 그림: 1문(`crop:fig-216-459.png`) · 소문항 있는 문항: 1문(214-e18 ⑴⑵) · 5지선다: 4문 · 보기형: 2문
- 답 출처: 본문 풀이 4(필수·발전 예제 `쪽-eN`) · 답지 29

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-215-458 | 벤더는 발전 예제 유제(확인체크)라 ★3 출발이나 열린 구간 경계 등호 + $a$ 에 대한 이차부등식 2개 연립 + 두 구간 답으로 통찰 2개·M_total 9 → ★4 로 라벨. 같은 골조의 215-456·215-457 은 ★3 이라 한 단 차이가 구역 안에서 눈에 띈다 | ★3 / ★4 |
| GN-CM1-216-459 | STEP 1 출발 ★2 이나 식이 하나도 없는 그래프 판독이고 근과 교점을 구분해 두 부등식의 교집합을 잡아야 해서 ★3 으로 올림. 그림이 없으면 ★2 로 내려가는 문항 | ★2 / ★3 |
| GN-CM1-217-467 | STEP 2 ★3 출발이나 계수 직접 대입 경로는 분수가 무거워 사실상 치환 착안이 필요하다고 보고 ★4. 치환을 표준 절차로 보면 ★3 | ★3 / ★4 |
| GN-CM1-217-470 | STEP 2 ★3 인데 최고차항이 고정이라 판별식 한 줄뿐인 절차형이다. 등호 판정이 답을 결정한다는 점만으로 ★3 을 유지했고 ★2 도 가능 | ★2 / ★3 |
| GN-CM1-218-475 | 항등식 착안 하나에 전부가 달린 문항이라 체감은 ★5 에 가깝지만 통찰 2개라 §2.13 ★5 기준(통찰 3개 이상 + SC/VF/SYM/XU)에 미달해 ★4 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 네 줄기다. ⑴ 「해가 주어진 이차부등식 — 계수 역추적」(e16 · 447 · 448 · 467 · 473) ⑵ 「항상 성립할 조건」(e17 · 450 · 451 · 452 · 464 · 474) ⑶ 「해를 갖거나 갖지 않을 조건」(e18 · 453 · 454 · 455 · 470) ⑷ 「제한된 범위에서 항상 성립」(e19 · 456 · 457 · 458 · 471).
- 카탈로그에 **따로 세워야 할** 유형: ⑴ 안에서도 「계수를 그대로 쓰는 것」(447)과 「$x\to -x$·$x\to \dfrac{1}{x}$ 처럼 계수를 뒤바꾼 변형식」(e16 · 448 · 467)은 골조가 달라 base ★ 가 한 단 벌어진다. ⑷ 안에서도 「끝점 최대(아래로 볼록)」와 「축의 위치가 결과를 가르는 최소(위로 볼록)」(457 · 471)는 분리하는 편이 낫다.
- **통합해도 될** 유형: 「그래프가 직선보다 항상 위/아래」(452 · 464 · 458)는 차 함수를 만들고 나면 ⑵·⑷ 와 같은 골조이므로 별도 유형 대신 ⑵·⑷ 의 표현 전환 변형으로 묶어도 된다. 「최고차항 계수가 0 이 되는 분기」(e17 · 451 · 454 · 474)는 여러 유형에 공통으로 붙는 *조건 modifier* 라 유형이 아니라 태그로 두는 편이 재사용에 낫다.
- 이 단원에는 I-XU·I-PD·I-CON·I-SC 통찰이 한 건도 없다. 단원 안에서 ★5 슬롯을 만들려면 가우스 기호(472)나 대칭식 항등식(475)처럼 다른 단원 도구를 끌어오는 축이 필요하다.

---
name: mechanism-데이터-GN-CALC2-11
description: 개념원리 미적분Ⅱ 11 삼각함수의 뜻(1/1 · 94~98쪽 21문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 11 삼각함수의 뜻
  unit_code: CALC2-11
  part: "1/1"
  extract_range: "94~98쪽 · 94-185~98-200"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 11 삼각함수의 뜻 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 94~98쪽, 단원 「11 삼각함수의 뜻」 21문항 전수를 다룬다. 구역은 전사본 group 순서대로 「개념원리 익히기」(4문) · 「필수·발전 예제」(필수 예제 5문 + 확인체크 6문) · 「연습문제 STEP 1」(3문) · 「연습문제 STEP 2」(2문) · 「연습문제 실력 UP」(1문)이다. 이 단원의 내용은 csc·sec·cot 의 정의, 좌표로 주어진 동경의 삼각함수 값, 값의 부호와 사분면, 그리고 세 피타고라스 항등식(sin²+cos²=1, 1+tan²=sec², 1+cot²=csc²)을 이용한 식의 간단화·값 구하기로 좁게 묶여 있다. 그림 문항은 없다.

벤더 난이도 신호는 개념원리 고등의 관례를 따른다. 「개념원리 익히기」(통번호)는 개념 확인이라 ★1 출발, 필수 예제(쪽-eN · tag 「필수」)는 ★2 출발, 「연습문제 STEP 1」은 ★2 · 「STEP 2」는 ★3 · 「실력 UP」은 ★4 출발이다. 확인체크 문항은 원칙상 개념 확인 신호(★1)이지만 이 단원에서는 모두 같은 쪽 필수 예제의 유제로 골조가 예제와 동일하므로 ★2 출발을 적용했고, 이 정책은 파일 끝 「분류 이슈 목록」에 한 줄로 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 빠짐없이 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-94-185
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ csc(π/3) · sec(π/4) · cot(π/3) · csc(-π/2) · sec(5π/6) · cot(3π/4) 의 값을 구하는 문제.
  category: "특수각의 sin·cos·tan 값 → 역수로 csc·sec·cot"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "csc·sec·cot 의 정의와 특수각의 삼각함수 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 소문항이 특수각의 sin·cos·tan 값을 떠올린 뒤 역수를 취하는 한 단계뿐이다. 부호는 각이 놓인 사분면을 보면 바로 정해진다.
    개념원리 익히기 구역(★1 출발) · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "특수각의 sin·cos·tan 값 → 역수를 취함 → csc·sec·cot 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{2\sqrt{3}}{3}$ ⑵ $\sqrt{2}$ ⑶ $\dfrac{\sqrt{3}}{3}$ ⑷ $-1$ ⑸ $-\dfrac{2\sqrt{3}}{3}$ ⑹ $-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/94-185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 다른 특수각(π/6, 2π/3, 7π/6, 5π/4, 11π/6)이나 음각·2π 를 넘는 일반각으로 바꿀 수 있다. 제약: cos=0 인 π/2 계열에서 sec 을, sin=0 인 0·π 계열에서 csc·cot 을 묻지 않는다(정의되지 않음). 답이 유리화된 꼴로 떨어지는지 확인한다."
    creative: "(1) 여섯 개 중 '정의되지 않는 것'을 고르게 하기(★1 유지) (2) 여섯 값의 합이나 곱을 묻기(Mk 상승 ★2) (3) 호도법과 도(°)를 섞어 주면 T-단위 함정이 하나 추가돼 ★2."
```

```yaml
- id: GN-CALC2-94-186
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    원점 O 와 점 P(-4, 3) 에 대하여 동경 OP 가 나타내는 각을 θ 라 할 때 ⑴ cscθ ⑵ secθ ⑶ cotθ 의 값.
  category: "점의 좌표 → r 계산 → 역수 삼각함수의 정의에 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면 위의 점으로 정해지는 동경의 삼각함수 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r=5 를 구하면 cscθ=r/y, secθ=r/x, cotθ=x/y 를 그대로 읽는다. 좌표의 부호가 답의 부호를 그대로 결정해 따로 사분면을 따질 필요가 없다.
    개념원리 익히기 구역(★1 출발) · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "P(-4,3) → r=5 → cscθ=r/y, secθ=r/x, cotθ=x/y"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{5}{3}$ ⑵ $-\dfrac{5}{4}$ ⑶ $-\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/94-186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 를 다른 피타고라스 수 쌍((3,-4), (-5,12), (8,-15), (7,24))으로 바꾼다. 제약: x 나 y 가 0 이면 세 값 중 일부가 정의되지 않으므로 피하고, 피타고라스 수가 아니면 r 이 무리수가 돼 유리화로 Mk 가 올라간다."
    creative: "(1) 점 대신 사분면과 x 좌표만 주고 y 를 매개변수로 두면 Ma 2 로 ★2 (2) cscθ+secθ+cotθ 같은 결합식을 묻기(★2) (3) '동경 OP 가 직선 3x+4y=0 위에 있다'로 바꾸면 두 사분면 분기가 생겨 I-MI d1 · ★3."
```

```yaml
- id: GN-CALC2-94-187
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ cscθ>0 이고 secθ<0 ⑵ secθ>0 이고 cotθ<0 ⑶ cscθsecθ<0 일 때 θ 가 제몇 사분면의 각인지 구하는 문제.
  category: "역수 함수의 부호 = 원 함수의 부호 → sin·cos·tan 부호표 → 사분면 교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값의 부호와 사분면 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    csc·sec·cot 의 부호가 sin·cos·tan 의 부호와 같다는 사실만 쓰면 사분면 부호표 대조로 끝난다. ⑶ 은 곱이 음수라 두 사분면이 답이 되는 것만 주의하면 된다.
    개념원리 익히기 구역(★1 출발) · 통찰 0 · M_total 5 → −1 후보이나 하한이므로 ★1.
  tier: star_1
  mechanism_primary: "csc·sec·cot 의 부호를 sin·cos·tan 의 부호로 바꿔 사분면 부호표와 대조 → 교집합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 제$2$사분면 ⑵ 제$4$사분면 ⑶ 제$2$사분면 또는 제$4$사분면'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-calc2/items/94-187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부등호 방향과 함수 조합(csc·sec·cot·tan)을 바꿔 네 사분면을 고르게 출제할 수 있다. 제약: 두 조건의 교집합이 공집합이 되지 않도록 하고, 곱 조건은 답이 두 사분면이 되므로 '또는'을 답 형식에 반영한다."
    creative: "(1) 사분면을 주고 부호가 옳은 것을 고르는 ㄱㄴㄷ 보기로 뒤집기(★1 유지) (2) cscθsecθcotθ<0 처럼 세 함수 곱으로 만들면 sin²·cos 꼴 정리가 필요해 I-EQV d1 · ★2 (3) '동경이 x축 위에 있을 때'를 섞어 정의되지 않는 경우를 함께 묻기(T-범위 추가 ★2)."
```

```yaml
- id: GN-CALC2-94-188
  page: 94
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    θ 가 제4사분면의 각이고 cotθ=-1/2 일 때 cscθ, secθ 를 구하는 과정의 빈칸을 채우는 문제.
  category: "1+cot²θ=csc²θ → 사분면으로 부호 결정 → tanθ=1/cotθ → 1+tan²θ=sec²θ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면으로 다른 삼각함수 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    풀이 골조가 빈칸 형태로 전부 주어져 학생은 쓸 항등식과 제4사분면에서의 부호만 채운다. 스스로 경로를 세우는 부담이 없다.
    개념원리 익히기 구역(★1 출발) · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "cotθ → 1+cot²θ=csc²θ 로 csc²θ → 제4사분면 부호로 cscθ → tanθ=1/cotθ → 1+tan²θ=sec²θ 로 secθ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{4}$, $<$, $-\dfrac{\sqrt{5}}{2}$, $-2$, $\tan^2\theta$, $5$, $>$, $\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/94-188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cotθ 의 값을 -1/2 대신 -3/4, 2/3, -4/3 등으로, 사분면을 제2·제3사분면으로 바꾼다. 제약: 1+cot²θ 가 제곱근을 벗을 때 지나치게 지저분해지지 않도록 분모·분자가 작은 유리수를 쓰고, 사분면과 cot 부호가 모순되지 않게 짝을 맞춘다."
    creative: "(1) 빈칸을 없애고 바로 값을 묻기(경로 설계가 학생 몫 → ★2) (2) 사분면 대신 'cscθ<0' 같은 간접 조건을 주면 I-EQV d1 · ★2 (3) 주어진 값을 secθ 로 두고 cotθ 를 묻는 역방향으로 바꿔도 골조는 그대로(★1~2)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-95-e1
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원점 O 와 점 P(-5, -12) 에 대하여 동경 OP 가 나타내는 각을 θ 라 할 때 12cscθ-5secθ+12cotθ 의 값.
  category: "r 계산 → csc·sec·cot 값 → 계수를 곱해 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면 위의 점으로 정해지는 동경의 삼각함수 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r=13 을 구해 세 값을 읽은 뒤 계수를 곱해 더하는 표준 대입이다. 계수 12 와 -5 가 분모를 그대로 상쇄하도록 짜여 있어 정리는 한 줄로 끝난다.
    필수 예제 구역(★2 출발) · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "P(-5,-12) → r=13 → cscθ=r/y, secθ=r/x, cotθ=x/y → 계수 대입 후 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/95-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 를 (-8,-15) · (7,-24) · (-20,21) 같은 다른 피타고라스 수 쌍으로 바꾸고 계수를 |x|, |y| 로 맞춰 분모가 상쇄되게 한다. 제약: 계수를 좌표와 무관한 수로 두면 답이 분수가 돼 예제의 깔끔함이 사라진다."
    creative: "(1) 계수를 좌표와 어긋나게 주어 통분이 필요하게 만들면 Mk 상승 ★2~3 (2) 점 대신 'θ 가 제3사분면이고 tanθ=12/5' 로 주면 부호 결정 단계가 추가돼 ★2 (3) 식의 값을 주고 P 의 좌표를 되묻는 역방향은 I-BW d2 · ★3."
```

```yaml
- id: GN-CALC2-95-e2
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    cscθsecθ>0 이고 cosθcotθ<0 을 동시에 만족시키는 θ 가 제몇 사분면의 각인지 구하는 문제.
  category: "두 곱을 sin·cos 식으로 환원 → 각 부등식이 정하는 사분면의 교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cosθcotθ 를 cos²θ/sinθ 로 바꿔 cosθ 의 부호를 소거하고 sinθ 의 부호만 남김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 값의 부호와 사분면 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건은 1/(sinθcosθ)>0 이라 sinθcosθ>0, 곧 제1·제3사분면으로 바로 줄어든다. 둘째 조건은 그대로 두면 두 함수 부호를 따로 따져야 하지만 cos²θ/sinθ 로 바꾸면 sinθ<0 하나로 정리된다.
    필수 예제 구역(★2 출발) · 통찰 1개(EQV d1) · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "cscθsecθ>0 → sinθcosθ>0(제1·3사분면) · cosθcotθ=cos²θ/sinθ<0 → sinθ<0 → 교집합 제3사분면"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '제$3$사분면'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/95-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수 조합(cscθcotθ, secθtanθ, sinθcotθ, tanθcscθ)과 부등호 방향을 바꿔 네 사분면을 고르게 만들 수 있다. 제약: 곱을 정리했을 때 제곱이 분모나 분자로 빠져 한 함수의 부호만 남는 조합이어야 골조가 유지된다."
    creative: "(1) 조건 하나를 'θ/2 가 제2사분면' 처럼 각의 변형으로 주면 범위 분할이 붙어 ★3 (2) 답을 주고 가능한 조건 쌍을 고르게 하는 역방향(I-BW d2 · ★3) (3) 세 조건을 주고 모순임을 보이게 하면 I-VF d2 · ★3."
```

```yaml
- id: GN-CALC2-95-189
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점 O 와 점 P(√3, -1) 에 대하여 동경 OP 가 나타내는 각을 θ 라 할 때 (3sec²θ+cscθ)/cot²θ 의 값.
  category: "r 계산 → sec·csc·cot 값 → 분수식에 대입해 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면 위의 점으로 정해지는 동경의 삼각함수 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r=2 를 구해 sec²θ, cscθ, cot²θ 를 각각 값으로 바꿔 대입하면 된다. 제곱이 붙은 항은 부호가 사라지고 cscθ 만 음수라 부호 함정이 약하다.
    확인체크는 원칙상 ★1 신호지만 같은 쪽 필수 예제의 유제로 골조가 동일해 ★2 출발을 적용했다. 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "P(√3,-1) → r=2 → sec²θ=4/3, cscθ=-2, cot²θ=3 → 분수식에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/95-189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 를 (1,-√3) · (-√3,1) · (-1,-1) 처럼 특수각이 되는 좌표로 바꾸고 분자 계수 3 을 조정한다. 제약: cot²θ 가 분모이므로 y=0 인 점은 쓸 수 없고, 답이 정수·간단한 분수로 떨어지도록 계수를 맞춘다."
    creative: "(1) 제곱을 떼고 홀수 차수만 남기면 부호 판정이 살아나 ★2 유지·체감 상승 (2) 좌표 대신 '동경이 원점을 지나는 직선 위' 로 주면 두 경우 분기(I-MI d1 · ★3) (3) 식의 값을 주고 좌표를 되묻는 역방향(I-BW d2 · ★3)."
```

```yaml
- id: GN-CALC2-95-190
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    θ 가 제3사분면의 각이고 cosθ=-√3/2 일 때 cscθcotθ 의 값.
  category: "sin²θ+cos²θ=1 → 사분면 부호로 sinθ → 역수·몫을 곱함"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면으로 다른 삼각함수 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cosθ 로부터 sin²θ 를 구하고 제3사분면이라 sinθ<0 을 택한 뒤 cscθ=1/sinθ, cotθ=cosθ/sinθ 를 곱하는 두세 단계다. 사분면 부호 선택이 유일한 함정이다.
    확인체크(필수 예제 유제 · ★2 출발) · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "cosθ → sin²θ=1-cos²θ → 제3사분면이라 sinθ<0 → cscθ·cotθ = cosθ/sin²θ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/95-190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cosθ 를 -1/2, -√2/2, 3/5, -5/13 등으로 바꾸고 사분면을 그에 맞게 고른다. 제약: sin²θ=1-cos²θ 가 완전제곱이 되는 값이어야 근호가 깔끔하고, 사분면과 cos 부호가 모순되면 안 된다."
    creative: "(1) 묻는 식을 cscθ+cotθ 로 바꾸면 통분이 붙어 ★2 (2) 사분면 대신 'tanθ>0' 같은 간접 조건(I-EQV d1 · ★2) (3) cscθcotθ 의 값을 주고 cosθ 를 되묻는 역방향은 이차식 풀이가 생겨 I-BW d2 · ★3."
```

```yaml
- id: GN-CALC2-95-191
  page: 95
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    cscθcotθ>0 이고 secθtanθ<0 을 동시에 만족시키는 θ 가 제몇 사분면의 각인지 구하는 문제.
  category: "두 곱을 제곱이 분모로 가는 꼴로 정리 → 한 함수의 부호만 남김 → 교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cscθcotθ 를 cosθ/sin²θ 로, secθtanθ 를 sinθ/cos²θ 로 바꿔 제곱을 분모로 보내고 부호 판단을 한 함수로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 값의 부호와 사분면 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 곱을 그대로 두면 각각 두 함수의 부호를 따로 따져야 하지만, 제곱을 분모로 몰면 첫 조건은 cosθ>0, 둘째 조건은 sinθ<0 하나로 줄어 교집합이 바로 나온다.
    확인체크(필수 예제 유제 · ★2 출발) · 통찰 1개(EQV d1) · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "cscθcotθ=cosθ/sin²θ>0 → cosθ>0 · secθtanθ=sinθ/cos²θ<0 → sinθ<0 → 교집합 제4사분면"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '제$4$사분면'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/95-191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수 곱 조합과 부등호 방향을 바꿔 목표 사분면을 옮긴다. 제약: 정리 후 제곱이 분모로 빠져 한 함수의 부호만 남는 조합(csc·cot, sec·tan, sin·cot, cos·tan)을 유지해야 골조가 같다."
    creative: "(1) 조건을 하나만 주고 가능한 사분면을 모두 답하게 하면 I-MI d1 · ★2 (2) 곱 대신 cscθ+cotθ>0 같은 합 조건으로 바꾸면 부호만으로는 결정되지 않아 ★3 (3) 세 개 조건을 주고 그중 불필요한 조건을 찾게 하면 I-VF d2 · ★3."
```

```yaml
- id: GN-CALC2-96-e3
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    cscθ=-5/4 이고 π<θ<3π/2 일 때 ⑴ cotθ ⑵ secθ 의 값.
  category: "csc → sin → 1+cot²θ=csc²θ 와 범위 부호 → cot · sec"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면으로 다른 삼각함수 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1+cot²θ=csc²θ 로 cot²θ 를 얻고 주어진 범위(제3사분면)에서 cotθ>0 을 택한다. secθ 는 cosθ=sinθcotθ 나 1+tan²θ=sec²θ 어느 경로로도 같은 값이 나온다.
    필수 예제 구역(★2 출발) · 통찰 0(항등식 대입은 표준 절차) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "cscθ=-5/4 → sinθ=-4/5 → 1+cot²θ=csc²θ 로 cot²θ → 제3사분면이라 cotθ>0 → cosθ=sinθcotθ → secθ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{3}{4}$ ⑵ $-\dfrac{5}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/96-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cscθ 값을 -13/12, 17/8, -25/7 등 피타고라스 수에서 나온 분수로 바꾸고 범위를 그에 맞는 사분면으로 준다. 제약: csc²θ-1 이 완전제곱이어야 cot 이 유리수로 떨어지고, |cscθ|>1 이어야 한다."
    creative: "(1) 범위를 'θ 가 제3사분면' 대신 'cotθ>0' 으로 주면 I-EQV d1 · ★2 (2) cotθ+secθ 같은 결합식 하나만 묻기(★2) (3) 범위를 주지 않으면 두 사분면 분기가 생겨 I-MI d1 · ★3."
```

```yaml
- id: GN-CALC2-96-192
  page: 96
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    θ 가 제4사분면의 각이고 tanθ=-15/8 일 때 ⑴ secθ ⑵ cscθ 의 값.
  category: "1+tan²θ=sec²θ → 사분면 부호로 sec → sinθ=tanθcosθ → csc"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면으로 다른 삼각함수 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sec²θ=1+tan²θ 로 sec²θ 를 얻고 제4사분면이라 cosθ>0, 곧 secθ>0 을 택한다. cscθ 는 sinθ=tanθcosθ 로 잇는다.
    확인체크(필수 예제 유제 · ★2 출발) · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "tanθ=-15/8 → sec²θ=1+tan²θ → 제4사분면이라 secθ>0 → cosθ → sinθ=tanθcosθ → cscθ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{17}{8}$ ⑵ $-\dfrac{17}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/96-192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "tanθ 를 -3/4, 5/12, -7/24, 20/21 등 피타고라스 수 비로 바꾸고 사분면을 부호에 맞게 준다. 제약: 1+tan²θ 가 완전제곱이어야 secθ 가 유리수가 되고, 사분면과 tan 부호가 모순되면 안 된다."
    creative: "(1) 묻는 것을 secθ+cscθ 나 secθcscθ 로 묶기(★2) (2) 사분면 대신 'sinθ<0' 만 주면 정보가 하나 줄어도 답은 그대로(★2) (3) tanθ 를 매개변수 k 로 두고 secθ 를 k 로 나타내게 하면 Ma 2 · 부호 분기 → ★3."
```

```yaml
- id: GN-CALC2-97-e4
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    cosθ/(secθ+tanθ) + cosθ/(secθ-tanθ) 를 간단히 하는 문제.
  category: "통분 → 분모의 곱이 sec²θ-tan²θ=1 → 분자 2cosθsecθ=2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 분모의 곱이 sec²θ-tan²θ 즉 1 임을 알아보고 통분한 분모를 통째로 없앰"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 사이의 관계로 식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합·차 꼴 두 분모를 보고 곱이 sec²θ-tan²θ=1 이 되는 것을 알아채면 통분 한 번으로 분모가 사라지고 분자에는 2cosθsecθ 만 남는다. 알아채지 못하고 sin·cos 로 전부 바꾸면 계산이 길어진다.
    필수 예제 구역(★2 출발) · 통찰 1개(EQV d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "통분 → 분자 2cosθsecθ · 분모 sec²θ-tan²θ=1 → 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/97-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 cosθ 를 sinθ 로 바꾸고 분모를 cscθ±cotθ 로 맞추면 csc²θ-cot²θ=1 을 쓰는 같은 골조가 된다. 계수 1 을 다른 상수로 바꿔도 답이 그 상수의 2배로 따라간다. 제약: 분모 두 개가 합·차 짝이어야 하고 짝이 깨지면 골조가 무너진다."
    creative: "(1) 두 항의 차로 바꾸면 분자가 2cosθtanθ=2sinθ 가 돼 답이 삼각함수식(★2 유지) (2) 분모를 1+sinθ 와 1-sinθ 로 바꾸면 cos²θ 경유(★2) (3) 식을 상수로 두고 θ 의 범위를 되묻는 역방향은 항등식임을 알아채야 해서 I-BW d2 · ★3."
```

```yaml
- id: GN-CALC2-97-e5
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    1/(1+sinθ) + 1/(1-sinθ) = 5/2 이고 π/2<θ<π 일 때 cotθ 의 값.
  category: "통분 → 1-sin²θ=cos²θ → cos²θ 값 → 범위 부호 → cotθ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "통분한 분모 (1+sinθ)(1-sinθ) 를 cos²θ 로 바꿔 조건을 cos²θ 하나에 대한 식으로 압축"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 사이의 관계로 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 통분하면 2/cos²θ 한 덩어리가 되어 조건이 cos²θ=4/5 로 바로 풀린다. 이후 제2사분면에서 cosθ<0, sinθ>0 을 택해 cotθ=cosθ/sinθ 를 구한다.
    필수 예제 구역(★2 출발) · 통찰 1개(EQV d1) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "좌변 통분 → 2/cos²θ=5/2 → cos²θ=4/5 → 제2사분면 부호로 cosθ·sinθ → cotθ=cosθ/sinθ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/97-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 5/2 를 2/cos²θ 가 깔끔한 값이 되는 다른 수(10/3, 25/12, 8)로, 범위를 다른 사분면으로 바꾼다. 제약: cos²θ 가 0 과 1 사이여야 하므로 우변은 2 이상이어야 하고, cot 이 유리수로 떨어지려면 cos²θ 의 분모·분자가 모두 제곱수인 편이 좋다."
    creative: "(1) 분모를 1+cosθ, 1-cosθ 로 바꾸면 sin²θ 경유가 되는 대칭 변형(★2 유지) (2) 묻는 값을 cscθ+cotθ 로 바꾸면 한 단계 추가(★3) (3) 범위를 없애면 두 사분면 분기가 생겨 I-MI d1 · ★3."
```

```yaml
- id: GN-CALC2-97-193
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ (sinθ-cscθ)²+(cosθ-secθ)²-(tanθ-cotθ)² ⑵ (1+sinθ)/(cscθ-cotθ) - (1-sinθ)/(cscθ+cotθ) 를 각각 간단히 하는 문제.
  category: "제곱 전개 후 피타고라스 항등식 세 개로 다시 묶기 · 분모를 sin·cos 로 환원한 뒤 통분"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 전개해 흩어진 항을 sin²+cos², csc²-cot², sec²-tan² 세 덩어리로 다시 묶어 상수만 남게 함"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ cscθ-cotθ 와 cscθ+cotθ 를 각각 (1-cosθ)/sinθ, (1+cosθ)/sinθ 로 환원해 통분 가능한 꼴로 바꿈"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각함수 사이의 관계로 식 간단히 하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 전개만 하면 항이 아홉 개로 흩어져 어떤 조합으로 묶을지 결정해야 하고, 세 항등식이 모두 동원돼야 상수 1 이 남는다. ⑵ 는 역수 함수의 합·차를 sin·cos 로 되돌린 뒤 통분해 분모 sin²θ 로 약분하는 두 단계 대수 처리다.
    확인체크(필수 예제 유제 · ★2 출발)이나 통찰 2개 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "⑴ 전개 → sin²+cos²=1, csc²-cot²=1, sec²-tan²=1 로 묶기 → 상수 · ⑵ csc±cot 를 (1∓cosθ)/sinθ 로 환원 → 통분 → 2(cotθ+1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $1$ ⑵ $2(\cot\theta+1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/97-193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이 문항에는 바꿀 수치가 거의 없다. 바꿀 수 있는 것은 ⑴ 세 제곱항의 부호 조합과 ⑵ 분자의 1±sinθ 를 1±cosθ 로 옮기는 정도다. 제약: 부호 조합을 바꾸면 남는 상수가 달라지므로 답을 다시 정리해야 하고, ⑵ 는 분자와 분모의 짝(1+sinθ ↔ csc-cot)이 맞아야 약분이 일어난다."
    creative: "(1) ⑴ 의 세 항 중 하나를 빼고 남은 식을 간단히 하게 하면 ★2 로 내려간다 (2) ⑵ 의 두 항을 합으로 바꾸면 분자가 2cscθ 꼴로 붕괴해 ★2~3 (3) 간단히 한 결과를 먼저 주고 원식의 빠진 항을 찾게 하면 I-BW d2 로 ★4 근처까지 올라간다."
```

```yaml
- id: GN-CALC2-97-194
  page: 97
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    3π/2<θ<2π 이고 (1+cosθ)/sinθ + sinθ/(1+cosθ) = -3 일 때 cscθ+cotθ 의 값.
  category: "좌변 통분 → 2cscθ 로 붕괴 → sinθ 값 → 범위 부호로 cosθ → csc+cot"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌변을 통분하면 분자가 2(1+cosθ) 가 되어 분모의 (1+cosθ) 와 약분되고 2cscθ 만 남는 것을 알아봄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 사이의 관계로 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    좌변을 통분하면 (1+cosθ)²+sin²θ=2+2cosθ 라 분모의 (1+cosθ) 와 약분돼 2cscθ 하나로 붕괴한다. 여기서 sinθ 가 곧바로 나오고 제4사분면 조건으로 cosθ 의 부호를 정해 cotθ 를 잇는다.
    [분류 이슈] 확인체크(★2 출발)와 라벨 ★3 이 1단 어긋난다 — 좌변 붕괴 착안(EQV d2)과 M_total 7 을 근거로 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "좌변 통분 → 2cscθ=-3 → sinθ=-2/3 → 제4사분면이라 cosθ>0 → cotθ=cosθ/sinθ → cscθ+cotθ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{3+\sqrt{5}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/97-194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 -3 을 다른 값으로 바꾸면 sinθ 가 그 값의 2/(우변) 로 따라간다. 제약: |sinθ|≤1 이어야 하므로 우변의 절댓값은 2 이상이어야 하고, cosθ 가 유리수로 떨어지려면 sinθ 의 분자·분모가 피타고라스 수 쌍이어야 한다. 범위는 우변의 부호와 맞춰야 한다."
    creative: "(1) 좌변의 1+cosθ 를 1-cosθ 로 바꾸면 2cscθ 대신 다른 꼴로 붕괴해 같은 골조·다른 답(★3 유지) (2) 묻는 값을 secθ+tanθ 로 바꾸면 cos 경유 단계가 하나 늘어 ★3 (3) 범위를 빼면 두 사분면 분기 후 일부 기각이 필요해 I-VF d2 · ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-98-195
  page: 98
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    sinθ-cosθ=1/2 일 때 secθ-cscθ 의 값.
  category: "목표식을 (sinθ-cosθ)/(sinθcosθ) 로 변형 → 조건을 제곱해 sinθcosθ → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "secθ-cscθ 를 통분해 (sinθ-cosθ)/(sinθcosθ) 로 바꾸면 주어진 조건이 그대로 분자가 되는 것을 알아봄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "sinθ±cosθ 와 sinθcosθ 의 관계를 이용한 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건과 목표를 잇는 다리는 sinθcosθ 하나다. 목표식을 통분해 분자를 조건과 같은 꼴로 만들고, 조건을 제곱해 1-2sinθcosθ=1/4 에서 곱을 얻으면 대입 한 번으로 끝난다.
    STEP 1 구역(★2 출발) · 통찰 1개(EQV d2) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "secθ-cscθ=(sinθ-cosθ)/(sinθcosθ) → 조건 제곱으로 sinθcosθ=3/8 → 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/98-195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값 1/2 을 1/3, 2/3, -1/2 등으로 바꾼다. 제약: (sinθ-cosθ)² = 1-2sinθcosθ 이므로 조건값의 제곱이 2 이하여야 하고, sinθcosθ 가 0 이 되면 목표식이 정의되지 않는다."
    creative: "(1) 조건을 sinθ+cosθ 로, 목표를 secθ+cscθ 로 바꾼 짝 변형(★2 유지) (2) 목표를 sec²θ+csc²θ 로 올리면 곱의 제곱까지 필요해 ★3 (3) 조건값을 미지수 k 로 두고 목표를 k 로 나타내게 하면 Ma 2 · ★3."
```

```yaml
- id: GN-CALC2-98-196
  page: 98
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    π/2<θ<π 일 때 √(csc²θ)+√(sec²θ)+|cotθ|-√((cotθ+secθ)²) 를 간단히 하는 문제.
  category: "√(A²)=|A| → 제2사분면에서 각 항의 부호 판정 → 절댓값을 벗겨 정리"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cotθ+secθ 를 낱개가 아니라 한 덩어리로 보고 제2사분면에서 두 항이 모두 음수라 합도 음수임을 확정해 마지막 근호를 벗김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 식의 부호 판정과 근호·절댓값 정리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √(A²) 를 A 가 아니라 |A| 로 보는 것이 출발점이고, 제2사분면에서 cscθ>0 · secθ<0 · cotθ<0 · cotθ+secθ<0 네 번을 따로 판정해야 한다. 벗기고 나면 sec 과 cot 이 상쇄돼 cscθ 만 남는다.
    [분류 이슈] STEP 1(★2 출발)보다 1단 높은 ★3 — 부호 판정 단계 수와 M_total 8, 함정 두 종(T-부호·T-범위)을 근거로 하고 기록만 한다.
  tier: star_3
  mechanism_primary: "각 항을 |A| 로 바꿈 → 제2사분면 부호로 csc-sec-cot+(cot+sec) → cscθ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\csc\theta$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/98-196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "범위를 다른 사분면으로 옮기고 그에 맞춰 항의 부호를 다시 판정하게 한다. 제약: 합 꼴 항(cotθ+secθ)의 부호가 사분면마다 자명하지 않을 수 있으므로 옮긴 사분면에서 두 항의 부호가 같은지 먼저 확인해야 한다."
    creative: "(1) 범위를 없애고 사분면별로 답을 모두 쓰게 하면 I-MI d2 · ★4 (2) 합 항을 cotθ+cscθ 처럼 부호가 자명하지 않은 조합으로 바꾸면 추가 판정이 필요해 ★4 (3) 간단히 한 결과를 주고 θ 의 범위를 되묻는 역방향은 I-BW d2 · ★4."
```

```yaml
- id: GN-CALC2-98-197
  page: 98
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    θ 가 제2사분면의 각이고 sinθ=√5/3 일 때 tanθ+cotθ 의 값.
  category: "tanθ+cotθ 를 1/(sinθcosθ) 로 압축 → 범위 부호로 cosθ → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "tanθ+cotθ 를 통분하면 분자가 sin²θ+cos²θ=1 이 되어 1/(sinθcosθ) 한 덩어리로 줄어드는 것을 이용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 사이의 관계로 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    tan 과 cot 을 따로 구해 더해도 되지만 통분하면 분자가 1 이 되어 sinθcosθ 만 있으면 끝난다. cosθ 는 제2사분면이라 음수를 택한다.
    STEP 1 구역(★2 출발) · 통찰 1개(EQV d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "tanθ+cotθ=1/(sinθcosθ) → 제2사분면이라 cosθ=-2/3 → 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{9\sqrt{5}}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/98-197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sinθ 를 1/3, 3/5, √3/2, 2√2/3 등으로 바꾸고 사분면을 옮긴다. 제약: 1-sin²θ 가 완전제곱이거나 근호가 간단해야 답이 정리되고, sinθcosθ=0 이면 식이 정의되지 않는다."
    creative: "(1) 묻는 값을 tanθ-cotθ 로 바꾸면 분자가 sin²-cos² 라 부호 판정이 하나 더 붙어 ★3 (2) tanθ+cotθ 의 값을 주고 sinθcosθ 를 되묻는 역방향(★2) (3) 사분면 대신 'cosθ<sinθ' 같은 대소 조건을 주면 I-EQV d2 · ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-98-198
  page: 98
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    tanθ/(1+secθ) + (1+secθ)/tanθ 를 간단히 하는 문제.
  category: "통분 → tan²θ=sec²θ-1 대입 → (1+secθ) 공통인수 약분 → 2secθ/tanθ"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "통분한 분자의 tan²θ 를 sec²θ-1 로 바꾸면 (1+secθ) 가 공통인수로 떨어져 분모와 약분되는 것을 알아봄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 사이의 관계로 식 간단히 하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    통분한 분자 tan²θ+(1+secθ)² 를 그대로 두면 정리가 막히고, tan²θ=sec²θ-1 로 바꿔야 2secθ(1+secθ) 로 인수분해돼 분모와 약분된다. 남은 2secθ/tanθ 를 sin·cos 로 되돌리면 2cscθ 다.
    STEP 2 구역(★3 출발) · 통찰 1개(EQV d2) · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "통분 → 분자에 tan²θ=sec²θ-1 대입 → 2secθ(1+secθ) → (1+secθ) 약분 → 2secθ/tanθ=2cscθ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\csc\theta$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/98-198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1+secθ 의 1 을 다른 상수로 바꾸면 공통인수가 깨져 골조가 무너지므로 수치 변형 여지는 거의 없다. 대신 cotθ/(1+cscθ) 짝으로 옮겨 cot²θ=csc²θ-1 을 쓰게 하는 것이 같은 골조의 수치 변형에 해당한다."
    creative: "(1) 두 항의 차로 바꾸면 분자가 tan²θ-(1+secθ)² 가 돼 약분이 다르게 일어남(★3 유지) (2) 1+secθ 를 secθ-1 로 바꾼 짝 변형(★3) (3) 결과 2cscθ 를 먼저 주고 원식이 항등식임을 증명하게 하면 서술형 ★3~4."
```

```yaml
- id: GN-CALC2-98-199
  page: 98
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    tanθ+cotθ=2 이고 π<θ<3π/2 일 때 sinθ+cosθ 의 값.
  category: "조건을 sinθcosθ 로 환원 → (sinθ+cosθ)² 전개 → 범위 부호로 근호 결정"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "tanθ+cotθ 를 통분해 1/(sinθcosθ) 로 바꿔 조건을 곱 sinθcosθ 하나로 압축"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "목표 sinθ+cosθ 를 직접 구하지 않고 제곱해 1+2sinθcosθ 로 잇고, 마지막에 범위로 근호의 부호를 결정"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "sinθ±cosθ 와 sinθcosθ 의 관계를 이용한 식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건과 목표를 잇는 다리가 sinθcosθ 라는 것을 양쪽에서 알아봐야 한다. 조건은 1/(sinθcosθ)=2 로, 목표는 제곱해서 1+2sinθcosθ 로 옮긴 뒤 제3사분면에서 sinθ+cosθ<0 을 택한다.
    STEP 2 구역(★3 출발) · 통찰 2개이나 둘 다 이 단원의 표준 d1 골조라 +1 을 적용하지 않고 ★3 유지.
  tier: star_3
  mechanism_primary: "tanθ+cotθ=1/(sinθcosθ)=2 → sinθcosθ=1/2 → (sinθ+cosθ)²=1+2sinθcosθ=2 → 제3사분면이라 음수 택함"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/98-199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건값 2 를 4, -4, 5/2 등으로 바꾸면 sinθcosθ 가 그 역수가 된다. 제약: |sinθcosθ|≤1/2 이므로 조건값의 절댓값은 2 이상이어야 하고, 1+2sinθcosθ 가 음수가 되면 안 되며 범위는 곱의 부호와 맞아야 한다."
    creative: "(1) 목표를 sinθ-cosθ 로 바꾸면 1-2sinθcosθ 경유(★3 유지) (2) 범위를 빼면 두 부호 모두 후보가 돼 I-MI d2 · ★4 (3) 조건을 sec²θ+csc²θ=k 로 주면 같은 곱으로 환원되지만 한 단계 더 필요해 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-98-200
  page: 98
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 4x²-2x+k=0 의 두 근이 sinθ, cosθ 이고 sinθ<cosθ 일 때 csc²θ-sec²θ 의 값(k 는 상수).
  category: "근과 계수의 관계 → 합·곱 → 목표식을 합·차·곱으로 인수분해 → 대소 조건으로 차의 부호"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식의 근과 계수의 관계에서 얻은 sinθ+cosθ 와 sinθcosθ 를 sin²θ+cos²θ=1 과 묶어 곱(즉 k)을 확정 — 방정식 단원 도구와 삼각함수 항등식이 모두 필요"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "csc²θ-sec²θ 를 (cosθ-sinθ)(cosθ+sinθ)/(sinθcosθ)² 로 인수분해해 이미 구한 합·곱만으로 계산되게 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 근과 계수의 관계와 삼각함수 항등식의 결합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    근과 계수의 관계로 합 1/2 을 얻고 제곱해 sin²θ+cos²θ=1 과 맞추면 곱이 정해진다. 목표식을 통분해 (cosθ-sinθ)(cosθ+sinθ)/(sinθcosθ)² 로 바꿔야 이미 가진 값만으로 계산되고, 차는 제곱에서 얻으므로 sinθ<cosθ 조건으로 양의 부호를 택해야 한다.
    실력 UP 구역(★4 출발) · 단원 경계 결합(XU d2) + 인수분해 착안(EQV d2) · M_total 10 → ★4. ★5 는 통찰 3개 이상이 필요해 해당하지 않는다.
  tier: star_4
  mechanism_primary: "근과 계수로 sinθ+cosθ=1/2 → 제곱해 sinθcosθ=-3/8 → csc²θ-sec²θ=(cosθ-sinθ)(cosθ+sinθ)/(sinθcosθ)² → sinθ<cosθ 로 차의 부호 결정"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{16\sqrt{7}}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/98-200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 일차항 계수를 바꿔 sinθ+cosθ 를 다른 값으로 둘 수 있다. 제약: |sinθ+cosθ|≤√2 여야 하고, 제곱에서 나온 sinθcosθ 는 절댓값이 1/2 이하여야 하며 판별식이 양수여야 서로 다른 두 근이 된다. 상수항을 직접 주는 대신 k 로 두면 조건의 자유도가 유지된다."
    creative: "(1) 묻는 값을 sec²θ+csc²θ 나 tanθ+cotθ 로 바꾸면 차의 부호 결정이 사라져 ★3 으로 내려간다 (2) sinθ<cosθ 를 빼면 두 부호 후보 중 하나를 기각해야 해 I-VF d2 가 추가되고 통찰 3개 · XU 보유로 ★5 후보가 된다 (3) k 의 값을 묻는 형태로 뒤집으면 근과 계수 한 단계만 남아 ★3."
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 4 · ★2 11 · ★3 5 · ★4 1 · ★5 0
- 통찰형 12 · 절차형 9 · premium 0
- 통찰 유형 분포: I-EQV 12회(depth 1 이 8회 · depth 2 가 4회) · I-XU 1회(depth 2). 단원 전체가 피타고라스 항등식으로 식을 압축·환원하는 골조라 I-EQV 에 쏠려 있고, 단원 경계를 넘는 결합은 실력 UP 한 문항(98-200)뿐이다.
- type_hint 상위: 「한 삼각함수 값과 사분면으로 다른 삼각함수 값 구하기」 4 · 「좌표평면 위의 점으로 정해지는 동경의 삼각함수 값」 3 · 「삼각함수 값의 부호와 사분면 판정」 3 · 「삼각함수 사이의 관계로 식 간단히 하기」 3 · 「삼각함수 사이의 관계로 식의 값 구하기」 3 · (그 밖에 「sinθ±cosθ 와 sinθcosθ 의 관계」 2 · 「csc·sec·cot 의 정의와 특수각」 1 · 「부호 판정과 근호·절댓값 정리」 1 · 「근과 계수의 관계와 항등식 결합」 1)
- 그림: 0문(이 범위에는 그림이 딸린 문항이 없다)
- 함정 분포: T-부호가 대부분(사분면·범위에서 부호를 택하는 단계)이고, T-범위가 겹쳐 Mₜ=2 가 된 문항은 98-196 · 98-199 · 98-200 셋이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (구역 정책) | 「확인체크」 6문(95-189 · 95-190 · 95-191 · 96-192 · 97-193 · 97-194)은 개념 확인 신호상 ★1 출발이지만 모두 같은 쪽 필수 예제의 유제로 골조가 예제와 동일해 ★2 출발을 적용했다. 카탈로그를 만들 때 확인체크의 출발점을 ★1 로 둘지 ★2 로 둘지 결정 필요 | ★1 / ★2 |
| GN-CALC2-97-194 | 확인체크(★2 출발)이나 좌변이 2cscθ 로 붕괴하는 착안(EQV d2) + M_total 7 → 라벨 ★3. 통찰 수 기준 +1 조건(2개 이상 또는 depth 3)에는 미달 | ★2 / ★3 |
| GN-CALC2-98-196 | STEP 1(★2 출발)이나 부호 판정이 네 번 반복되고 M_total 8 · 함정 두 종 → 라벨 ★3 | ★2 / ★3 |
| GN-CALC2-98-199 | 통찰 2개로 +1 후보(★4)에 해당하지만 두 통찰 모두 이 단원의 표준 d1 골조라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 다섯 가지다. 「한 삼각함수 값과 사분면 → 나머지 값」(4) · 「좌표로 정해지는 동경의 값」(3) · 「부호와 사분면 판정」(3) · 「관계식으로 식 간단히 하기」(3) · 「관계식으로 식의 값 구하기」(3). 카탈로그를 만든다면 이 다섯을 이 단원의 기본 유형으로 세우는 것이 자연스럽다.
- **따로 세워야 할 유형**: 「sinθ±cosθ 와 sinθcosθ 의 상호 환원」(98-195 · 98-199). 겉보기에는 「식의 값 구하기」에 속하지만 조건과 목표를 곱 하나로 잇는 골조가 고정돼 있고 변형 설계가 완전히 달라 별도 유형이 맞다. base ★ 는 2~3 대.
- **따로 세워야 할 유형**: 「근호·절댓값이 섞인 삼각함수 식의 부호 판정」(98-196). 항등식 계산이 아니라 범위에 따른 부호 결정이 본체라 다른 유형과 섞이면 변형 설계가 어긋난다. base ★ 3.
- **통합해도 될 유형**: 「csc·sec·cot 의 정의와 특수각의 값」(94-185)은 「좌표로 정해지는 동경의 값」의 가장 쉬운 경우로 볼 수 있어 하나의 유형 안에서 base ★ 1~2 로 나누는 편이 관리하기 쉽다.
- **통합해도 될 유형**: 「식 간단히 하기」와 「식의 값 구하기」는 쓰는 항등식과 압축 골조가 같고 마지막에 수치를 대입하는지 여부만 다르다. 하나의 유형으로 묶고 하위 갈래로 나누는 안을 검토할 만하다.
- 98-200 처럼 이차방정식의 근과 계수의 관계가 얹히는 문항은 이 단원 고유 유형이라기보다 **단원 결합 슬롯**이다. 카탈로그에서는 삼각함수 유형이 아니라 결합 유형 쪽에 두는 편이 낫다.

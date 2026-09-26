---
name: mechanism-데이터-GN-ALG-16
description: 개념원리 대수 16 삼각함수(1/1 · 145~153쪽 · 39문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 16 삼각함수
  unit_code: ALG-16
  part: "1/1"
  extract_range: "145~153쪽 · 145-350~153-379"
  total_problems: 39
  unit_total: 39
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위는 그림 문항 1문 · fig-145-351.png)
---

# 개념원리 대수 · 16 삼각함수 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 145~153쪽, 16단원 「삼각함수」 39문항 전수를 다룬다. 구역은 개념원리 익히기 4문, 필수·발전 예제 구역 24문(필수 예제 `쪽-eN` 8문 + 발전 예제 1문 + 확인체크 15문), 연습문제 STEP 1 6문, STEP 2 4문, 실력 UP 1문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 들어 있어 개념원리 익히기 → ★1, 필수 예제·확인체크 → ★2, 발전 예제 → ★3, STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4 를 출발점으로 삼고, M_total 과 통찰 수로 ±1 조정했다. 이 단원의 골조는 다섯 갈래로 갈린다: (1) 동경 위의 점 좌표 → 정의 대입, (2) 사분면별 부호 판정과 무리식·절댓값 벗기기, (3) 삼각항등식으로 식 간단히 하기, (4) `sinθ±cosθ` 와 `sinθcosθ` 대칭식 환원, (5) 근과 계수의 관계와 삼각항등식 결합.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원 변형에서 가장 자주 깨지는 제약은 (1) 동경 위의 점을 피타고라스 수로 잡지 않으면 답이 무리수로 지저분해지는 것, (2) 사분면 조건을 빼면 제곱근을 벗길 때 부호가 결정되지 않아 답이 둘로 갈리는 것, (3) `sinθ+cosθ` 와 `sinθcosθ` 는 `(s+c)^2=1+2sc` 로 묶여 있어 한쪽을 바꾸면 다른 쪽이 따라 정해지고 `|s+c| ≤ √2` · `|sc| ≤ 1/2` 범위를 벗어나면 실제 각이 존재하지 않는 것 세 가지다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-145-350
  page: 145
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 원점과 점 P(-4,-3) · P(15,-8) 을 지나는 동경 OP 가 나타내는 각 θ 에 대하여 sinθ, cosθ, tanθ 의 값을 각각 구하기.
  category: "동경 위의 점 좌표와 r 로 삼각함수의 정의 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동경 위의 점의 좌표로 삼각함수의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    r=√(x²+y²) 를 구해 y/r, x/r, y/x 에 그대로 대입하는 한 단계. 좌표가 (3,4,5)·(8,15,17) 피타고라스 수라 계산도 가볍다.
    개념원리 익히기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "점 좌표 → r 계산 → sinθ=y/r, cosθ=x/r, tanθ=y/x 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sin\theta=-\dfrac{3}{5}$, $\cos\theta=-\dfrac{4}{5}$, $\tan\theta=\dfrac{3}{4}$ ⑵ $\sin\theta=-\dfrac{8}{17}$, $\cos\theta=\dfrac{15}{17}$, $\tan\theta=-\dfrac{8}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/145-350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 좌표를 다른 피타고라스 수 (±5,±12) · (±7,±24) · (±20,±21) 와 사분면 조합으로 바꿀 수 있다. 제약: r 이 정수가 되도록 피타고라스 수를 쓰고, 두 소문항의 사분면이 서로 다르게 배치해 부호 연습이 되게 한다.'
    creative: '(1) 좌표 대신 「제3사분면의 점이고 |OP|=5, x좌표가 -4」처럼 조건으로 주기(★2) (2) 세 값의 합·곱을 묻기(★1~2) (3) 점을 (a, -3) 처럼 매개변수로 주고 tanθ 값을 조건으로 붙이면 Mₐ 상승 ★2.'
```

```yaml
- id: GN-ALG-145-351
  page: 145
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ θ=2π/3 을 나타내는 동경과 단위원의 교점 P, P 에서 x축에 내린 수선의 발 H 일 때 점 P 의 좌표와 sinθ, cosθ, tanθ 구하기.
  category: "단위원 위의 특수각 교점 좌표 → 정의로 삼각함수 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "단위원에서 특수각의 삼각함수 값(교점 좌표 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직각삼각형 OPH 가 30-60-90 이므로 P(-1/2, √3/2). 단위원이라 r=1 이고 좌표가 그대로 cosθ, sinθ 가 된다는 정의 확인.
    소문항이 좌표 → 각 값 순서로 안내한다. 개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "2π/3 동경 → 30-60-90 삼각형으로 P(-1/2, √3/2) → r=1 이므로 좌표가 곧 (cosθ, sinθ)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\left(-\dfrac{1}{2},\,\dfrac{\sqrt{3}}{2}\right)$ ⑵ $\dfrac{\sqrt{3}}{2}$ ⑶ $-\dfrac{1}{2}$ ⑷ $-\sqrt{3}$'
  answer_source: "답지"
  figure: crop:fig-145-351.png
  latex: latex-bank/gn-alg/items/145-351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각을 다른 특수각(3π/4 · 5π/6 · 4π/3 · 5π/3 · 7π/4)으로 바꿀 수 있다. 제약: 그림의 P·H 위치와 사분면이 각과 맞아야 하므로 각을 바꾸면 크롭 그림도 함께 바꿔야 하고, 30·45·60 계열을 유지해야 좌표가 특수값으로 떨어진다.'
    creative: '(1) 단위원 대신 반지름 r=2 인 원으로 바꿔 좌표와 삼각함수 값을 분리하기(★2) (2) P 의 좌표를 주고 각의 크기를 되묻기(역방향 · I-BW · ★2) (3) 삼각형 OPH 의 넓이를 함께 묻기(★2).'
```

```yaml
- id: GN-ALG-145-352
  page: 145
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 400°, -17π/6, -760°, 29π/10 에 대하여 sinθ, cosθ, tanθ 값의 부호를 각각 말하기.
  category: "일반각을 0~2π 로 환원 → 사분면 판정 → 부호표"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 동경 위치 판정과 삼각함수 값의 부호"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각에서 360°·2π 의 정수배를 빼거나 더해 0 이상 2π 미만으로 환원한 뒤 사분면을 보고 부호표를 읽는다. 음의 각은 더하는 방향이라는 점이 유일한 걸림돌(T-부호).
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지.
  mechanism_primary: "각 ± 2nπ 로 0~2π 환원 → 사분면 결정 → sin·cos·tan 부호표 적용"
  tier: star_1
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sin\theta>0$, $\cos\theta>0$, $\tan\theta>0$ ⑵ $\sin\theta<0$, $\cos\theta<0$, $\tan\theta>0$ ⑶ $\sin\theta<0$, $\cos\theta>0$, $\tan\theta<0$ ⑷ $\sin\theta>0$, $\cos\theta<0$, $\tan\theta<0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/145-352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각을 다른 값(-1000° · 13π/4 · 800° · -25π/6)으로 바꿀 수 있다. 제약: 네 소문항이 네 사분면을 고루 덮도록 배치하고, 사분면 경계각(90°·π 의 정수배)은 삼각함수 값이 0 이거나 정의되지 않으므로 피한다.'
    creative: '(1) 부호 대신 사분면만 묻기(★1) (2) 부호 조합을 주고 어느 각인지 고르는 역방향(★2 · I-BW) (3) sinθcosθtanθ 의 부호 하나만 묻기(★2).'
```

```yaml
- id: GN-ALG-145-353
  page: 145
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ sinθ>0·cosθ<0, cosθ>0·tanθ<0, sinθcosθ<0 을 만족시키는 θ 가 제몇 사분면의 각인지 각각 말하기.
  category: "부호 조건 → 사분면 부호표 역조회"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 값의 부호 조건으로 사분면 결정하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 조건을 사분면 부호표에서 거꾸로 읽어 교집합을 취한다. ⑶ 은 곱이 음수라 (sin>0, cos<0) 과 (sin<0, cos>0) 두 경우가 모두 답이 되어 두 사분면을 빠짐없이 쓰는 것이 관건(T-범위).
    분기가 부호표 안에서 바로 읽히는 표준 절차라 통찰로 세지 않았다. 개념원리 익히기 ★1 출발 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "부호 조건 → 사분면 부호표 역조회 → 곱 조건은 두 경우 모두 나열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 제$2$사분면 ⑵ 제$4$사분면 ⑶ 제$2$사분면 또는 제$4$사분면'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/145-353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건을 다른 부호 쌍(sinθ<0·tanθ>0, sinθtanθ<0, cosθtanθ>0)으로 바꿀 수 있다. 제약: 두 조건의 교집합이 한 사분면으로 확정되는지, 곱·몫 조건이라 두 사분면이 남는지를 미리 정하고 발문을 「제몇 사분면」 또는 「모두 구하시오」로 맞춘다.'
    creative: '(1) 세 조건을 한 번에 주어 유일한 사분면으로 좁히기(★2) (2) θ/2 가 제몇 사분면인지까지 묻기(범위 분할 · ★3) (3) 조건을 만족하는 θ 의 범위를 부등식으로 쓰게 하기(★2).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-146-e8
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 원점 O 와 점 P(-5,-12) 를 지나는 동경 OP 가 나타내는 각 θ 에 대하여 cosθ-sinθ 와 24/(13 sinθ tanθ) 의 값 구하기.
  category: "정의로 세 값 계산 → 식에 대입·정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동경 위의 점으로 삼각함수 값을 구해 식의 값 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r=13 을 구해 sinθ=-12/13, cosθ=-5/13, tanθ=12/5 를 얻은 뒤 두 식에 대입한다. ⑵ 는 분모의 곱을 먼저 정리해야 분수가 약분된다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "P(-5,-12) → r=13 → 세 값 대입 → 분수식 약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{7}{13}$ ⑵ $-\dfrac{5}{6}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/146-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점을 (±8,±15) · (±7,±24) · (±20,±21) 로, 식의 계수(24/13)를 r 에 맞춰 바꿀 수 있다. 제약: r 이 정수여야 하고 ⑵ 의 계수는 sinθtanθ 의 분모와 약분되어 답이 간단한 분수가 되도록 r 의 배수로 잡는다.'
    creative: '(1) 식을 sinθcosθ+tanθ 처럼 세 값이 모두 들어가게 바꾸기(★2) (2) 점의 좌표 중 하나를 미지수로 두고 식의 값을 조건으로 주기(역방향 ★3 · I-BW) (3) 두 점 P, Q 의 동경이 이루는 각을 함께 묻기(★3).'
```

```yaml
- id: GN-ALG-146-e9
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    θ=3π/4 일 때 √2 sinθ + 2cosθ + tanθ 의 값 구하기.
  category: "특수각의 삼각함수 값 → 식에 대입"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특수각의 삼각함수 값을 이용한 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3π/4 는 제2사분면의 45° 계열이라 sinθ=√2/2, cosθ=-√2/2, tanθ=-1. 세 값의 부호를 사분면으로 정확히 붙이는 것이 유일한 함정(T-부호).
    필수 예제 ★2 출발 · 통찰 0 · M_total 5 로 −1 후보이지만, 부호까지 포함한 특수각 암기·대입이 세 번 겹쳐 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "3π/4 → 제2사분면 45° 계열 값 (√2/2, -√2/2, -1) → 대입·정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/146-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각을 5π/6 · 4π/3 · 5π/3 · 7π/6 으로, 계수(√2, 2)를 그 각의 분모 유리화에 맞춰 바꿀 수 있다. 제약: 계수는 해당 각의 무리수 값과 곱해 유리수가 되도록 잡아야 답이 깔끔하고, 경계각(π/2 의 홀수배)은 tanθ 가 정의되지 않으므로 피한다.'
    creative: '(1) 두 각 θ, 2θ 의 값을 함께 쓰는 식으로(★2) (2) 각을 -3π/4 로 주어 음의 각 환원을 먼저 시키기(★2) (3) 식의 값이 주어지고 각을 되묻기(I-BW ★3).'
```

```yaml
- id: GN-ALG-146-354
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 원점 O 와 점 P(√3,-1) 을 지나는 동경 OP 의 각 θ 에 대하여 (tanθ-cosθ)/√3 과 4√3 sinθcosθ 의 값 구하기.
  category: "정의로 세 값 계산 → 무리수 계수 식에 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "동경 위의 점으로 삼각함수 값을 구해 식의 값 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    r=2 이므로 sinθ=-1/2, cosθ=√3/2, tanθ=-√3/3. 146-e8 과 같은 골조이고 좌표가 무리수라 분모 유리화가 한 번 더 붙는다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "P(√3,-1) → r=2 → 세 값 대입 → 유리화·약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{5}{6}$ ⑵ $-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/146-354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점을 (-1,√3) · (√3,1) · (-√2,-√2) 처럼 특수각 방향의 점으로, 계수 √3 · 4√3 을 그에 맞춰 바꿀 수 있다. 제약: 좌표 성분의 제곱합이 완전제곱이라 r 이 정수여야 하고, 계수는 무리수를 상쇄해 답이 유리수로 떨어지게 잡는다.'
    creative: '(1) 점을 극형식(r=2, θ 방향)으로 주기(★2) (2) sinθ+cosθ 와 sinθcosθ 를 함께 물어 대칭식 골조로 잇기(★2) (3) 동경을 x축에 대칭이동한 각의 값을 묻기(★3 · I-SYM).'
```

```yaml
- id: GN-ALG-146-355
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    θ=-π/3 일 때 cosθ/(sinθ-tanθ) 의 값 구하기.
  category: "음의 특수각 값 → 분수식에 대입·유리화"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특수각의 삼각함수 값을 이용한 분수식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -π/3 은 제4사분면이라 sinθ=-√3/2, cosθ=1/2, tanθ=-√3. 분모 sinθ-tanθ 를 먼저 한 무리수로 합친 뒤 유리화한다.
    확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "-π/3 → 제4사분면 60° 계열 값 → 분모 정리 → 유리화"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/146-355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각을 -π/6 · -π/4 · -2π/3 으로, 식을 sinθ/(cosθ+tanθ) 처럼 바꿀 수 있다. 제약: 분모가 0 이 되지 않도록 각과 식의 조합을 확인해야 하고(예: sinθ=tanθ 가 되는 각 제외), 유리화 뒤 답이 한 항으로 정리되게 잡는다.'
    creative: '(1) 각을 -11π/3 처럼 크게 주어 환원을 한 단계 붙이기(★2) (2) 식의 값이 주어지고 각을 되묻기(I-BW ★3) (3) θ 와 -θ 의 값을 비교하게 해 우함수·기함수 성질로 잇기(★3 · I-SYM).'
```

```yaml
- id: GN-ALG-147-e10
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    sinθcosθ>0 과 cosθtanθ<0 을 동시에 만족시키는 θ 가 제몇 사분면의 각인지 구하기.
  category: "곱의 부호 → 각 함수 부호 조합 → 사분면 교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 곱·몫의 부호로 사분면 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건은 sin·cos 이 같은 부호(제1·3사분면), 둘째는 cos·tan 즉 sinθ 가 음수(제3·4사분면). 교집합이 제3사분면.
    둘째 조건을 cosθtanθ=sinθ 로 줄이는 것이 요령이지만 부호표 병렬 비교로도 같은 답이 나와 통찰로 세지 않았다. 필수 예제 ★2 출발 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "곱의 부호 → 각 사분면 후보 나열 → 두 후보 집합의 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$3$사분면'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/147-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 조건의 곱·몫 조합(sinθtanθ, cosθ/sinθ, tanθ/cosθ)과 부등호 방향을 바꿀 수 있다. 제약: 두 조건의 교집합이 정확히 한 사분면으로 확정되어야 하고, 두 조건이 같은 사분면 쌍을 가리켜 답이 둘이 되지 않는지 확인한다.'
    creative: '(1) 답이 두 사분면이 되게 조건을 하나만 주기(★1~2) (2) 조건을 만족하는 θ 에 대해 √(sin²θ) 등을 간단히 하기까지 잇기(★3) (3) 조건을 부등식 범위로 바꿔 θ/2 의 사분면을 묻기(★3).'
```

```yaml
- id: GN-ALG-147-e11
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    π/2<θ<π 일 때 |sinθ| + √(cos²θ) + √(tan²θ) + cosθ 를 간단히 하기.
  category: "사분면 부호 판정 → 절댓값·제곱근 벗기기 → 동류항 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "√(A²)=|A| 를 구간의 부호 판정으로 벗겨 부호가 붙은 일차식으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사분면이 주어질 때 절댓값·제곱근이 있는 삼각식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제2사분면이므로 sinθ>0, cosθ<0, tanθ<0. |sinθ|=sinθ, √(cos²θ)=-cosθ, √(tan²θ)=-tanθ 로 벗긴 뒤 cosθ 와 -cosθ 가 상쇄된다.
    √(A²)=|A| 를 구간 부호로 옮기는 동치 변환 1개(EQV d1) · 함정은 T-부호·T-범위 2개. 필수 예제 ★2 출발 · 통찰 1 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "제2사분면 부호 판정 → √(A²)=|A| 를 부호 붙은 식으로 → 동류항 상쇄"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sin\theta-\tan\theta$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/147-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간을 다른 사분면(π<θ<3π/2, 3π/2<θ<2π)으로, 식의 항 구성(|cosθ| · √(sin²θ) · 세제곱근)을 바꿀 수 있다. 제약: 사분면을 바꾸면 세 함수의 부호가 모두 바뀌므로 상쇄되는 짝이 남도록 항을 재배치해야 답이 두 항 이내로 정리된다.'
    creative: '(1) 사분면을 직접 주지 않고 sinθcosθ<0 같은 부호 조건으로 주기(★3) (2) 내부에 sinθ-cosθ 처럼 차의 부호를 따져야 하는 항을 넣기(★3 · EQV d2) (3) 답이 0 이 되도록 항을 설계해 검증 부담을 주기(★3).'
```

```yaml
- id: GN-ALG-147-356
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    sinθtanθ>0 과 cosθ/tanθ<0 을 동시에 만족시키는 θ 가 제몇 사분면의 각인지 구하기.
  category: "곱·몫의 부호 → 각 함수 부호 조합 → 사분면 교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 곱·몫의 부호로 사분면 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sinθtanθ>0 은 제1·4사분면, cosθ/tanθ<0 은 cos·tan 이 다른 부호이므로 제3·4사분면. 교집합이 제4사분면.
    147-e10 과 같은 골조로 부호표 병렬 비교. 확인체크 ★2 출발 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "곱·몫의 부호 → 사분면 후보 나열 → 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제$4$사분면'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/147-356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건 쌍을 (cosθtanθ>0, sinθ/cosθ<0) 등으로, 부등호 방향을 바꿀 수 있다. 제약: 교집합이 한 사분면으로 확정되어야 하고, 몫 조건은 분모가 0 이 되는 경계각이 제외됨을 암묵적으로 전제한다.'
    creative: '(1) 세 조건 중 둘만 고르게 하는 보기형(★3) (2) 조건을 만족하는 θ 에 대해 |sinθ|+|cosθ| 를 간단히 하기까지 잇기(★3) (3) 답을 두 사분면으로 만들어 모두 쓰게 하기(★2).'
```

```yaml
- id: GN-ALG-147-357
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    θ 가 제3사분면의 각일 때 √((sinθ-tanθ)²) - |sinθ| - (tan³θ 의 세제곱근) 을 간단히 하기.
  category: "사분면 부호 판정 → 차의 부호 비교 → 절댓값 벗기고 상쇄"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "sinθ-tanθ 는 값이 아니라 두 함수의 대소를 따져야 부호가 정해진다는 점을 이용해 절댓값을 벗김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사분면이 주어질 때 절댓값·거듭제곱근이 있는 삼각식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제3사분면은 sinθ<0, cosθ<0, tanθ>0 이므로 sinθ-tanθ<0 → √((sinθ-tanθ)²)=tanθ-sinθ. |sinθ|=-sinθ, 세제곱근은 부호를 그대로 살려 tanθ. 세 항이 완전히 상쇄되어 0.
    단일 함수가 아니라 차의 부호를 판정해야 하므로 EQV d2. 확인체크 ★2 출발 · 통찰 1 d2 · M_total 7 → ★2 유지(답이 0 인 설계라 상쇄가 확인 역할).
  tier: star_2
  mechanism_primary: "제3사분면 부호 → sinθ-tanθ<0 판정 → 절댓값·세제곱근 벗기기 → 전 항 상쇄"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/147-357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '사분면을 제2·제4로, 내부 차를 cosθ-sinθ · tanθ-cosθ 로 바꿀 수 있다. 제약: 차의 부호가 그 사분면 전체에서 일정해야 한다 — 예를 들어 제1사분면의 sinθ-cosθ 는 45° 를 경계로 부호가 바뀌므로 쓸 수 없다.'
    creative: '(1) 답이 0 이 아니라 한 항으로 남게 설계하기(★2) (2) 짝수·홀수 제곱근을 섞어 부호 처리 차이를 묻기(★3) (3) 사분면 대신 무리식 조건으로 사분면을 먼저 찾게 하기(★3 · 147-358 골조).'
```

```yaml
- id: GN-ALG-147-358
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    sinθcosθ≠0 이고 √sinθ/√cosθ = -√(sinθ/cosθ) 를 만족시키는 θ 에 대하여 |cosθ+tanθ| + √(sin²θ) - √((tanθ-sinθ)²) 을 간단히 하기.
  category: "무리식 부호 규칙으로 사분면 결정 → 각 항의 부호 판정 → 상쇄"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "√a/√b=-√(a/b) 가 성립할 조건 a≥0, b<0 으로 옮겨 사분면(제2사분면)을 확정"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "cosθ+tanθ 와 tanθ-sinθ 처럼 두 함수의 합·차의 부호를 사분면에서 따져 절댓값을 벗김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "무리식의 부호 조건으로 사분면을 정한 뒤 삼각식 간단히 하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건식은 √a/√b=-√(a/b) 꼴이므로 sinθ≥0, cosθ<0 즉 제2사분면. 그러면 cosθ<0, tanθ<0 이라 합이 음수이고 tanθ-sinθ 도 음수라 두 절댓값이 모두 뒤집혀 sinθ 와 tanθ 가 상쇄되고 -cosθ 만 남는다.
    무리식 조건 → 사분면 동치 변환과 합·차 부호 판정 두 단계(EQV d2 x2). 확인체크 ★2 출발 · 통찰 2개 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "√a/√b=-√(a/b) → sinθ≥0·cosθ<0 → 제2사분면 → 세 항 부호 벗기기 → -cosθ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\cos\theta$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/147-358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건식을 √sinθ√cosθ=-√(sinθcosθ)(→ 둘 다 음수, 제3사분면)나 √cosθ/√tanθ 꼴로 바꿀 수 있다. 제약: 무리식 부호 규칙은 곱 꼴이면 「둘 다 음수」, 몫 꼴이면 「분자 0 이상·분모 음수」로 결론이 달라지므로 규칙을 정확히 적용한 사분면에서 뒤의 식이 상쇄되게 설계해야 한다.'
    creative: '(1) 조건식만 주고 사분면을 묻기(★2) (2) 뒤 식에 √(1-sin²θ) 처럼 항등식 변형을 하나 더 넣기(★4) (3) 조건을 만족하는 θ 에서 sinθ+cosθ 의 부호까지 묻는 검증형(★4 · I-VF).'
```

```yaml
- id: GN-ALG-148-e12
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    cosθ/(1+sinθ) + (1+sinθ)/cosθ 를 간단히 하기.
  category: "통분 → sin²θ+cos²θ=1 적용 → 약분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 기본 항등식으로 분수식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통분하면 분자가 cos²θ+(1+sinθ)² = 2+2sinθ = 2(1+sinθ) 가 되어 분모의 (1+sinθ) 와 약분된다.
    통분 후 항등식 대입이라는 표준 경로라 통찰로 세지 않았다. 필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "통분 → 분자에 sin²θ+cos²θ=1 → 2(1+sinθ) 로 인수분해 → 약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{\cos\theta}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/148-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '1+sinθ 를 1-sinθ · 1+cosθ · 1-cosθ 로 바꿔 네 가지 동형 문제를 만들 수 있다. 제약: 분모와 분자의 짝이 (1±sinθ) ↔ cosθ 처럼 항등식으로 맞물려야 약분이 일어난다.'
    creative: '(1) 차 꼴로 바꿔 답이 2tanθ 가 되게 하기(★2) (2) 결과를 secθ 대신 1/cosθ 로 쓰게 해 표기 함정 추가(★2) (3) 항등식임을 증명하는 보기형으로 바꾸기(★3 · 153-376 골조).'
```

```yaml
- id: GN-ALG-148-e13
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    3π/2<θ<2π 이고 cosθ=3/5 일 때 1/sinθ + 1/tanθ 의 값 구하기.
  category: "항등식으로 sinθ 결정(부호는 구간) → 식에 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 구간이 주어질 때 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin²θ=1-cos²θ 에서 |sinθ|=4/5 이고 제4사분면이므로 sinθ=-4/5. 1/tanθ=cosθ/sinθ 로 바꿔 두 분수를 더한다.
    구간으로 부호를 확정하는 표준 경로(T-부호·T-범위). 필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "cosθ → sin²θ=1-cos²θ → 구간으로 부호 확정 → 1/sinθ+cosθ/sinθ 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/148-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'cosθ 값을 ±5/13 · ±12/13 · ±8/17 로, 구간을 다른 사분면으로 바꿀 수 있다. 제약: 값이 피타고라스 수 쌍이어야 sinθ 가 유리수로 떨어지고, 구간과 주어진 값의 부호가 모순되지 않는지(제4사분면에 cosθ<0 을 주지 않도록) 확인한다.'
    creative: '(1) 묻는 식을 (1+cosθ)/sinθ 처럼 바꾸기(★2) (2) 구간을 빼고 답을 두 가지로 쓰게 하기(★3 · I-MI) (3) tanθ 값만 주고 sinθ, cosθ 를 모두 복원시키기(★3).'
```

```yaml
- id: GN-ALG-148-359
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ (1-sin⁴θ)/cos²θ + cos²θ, (sinθ-1/sinθ)²+(cosθ-1/cosθ)²-(tanθ-1/tanθ)², (sinθ+sin²θ)/(1-cosθ) - (sinθ-sin²θ)/(1+cosθ) 를 각각 간단히 하기.
  category: "인수분해·전개 후 sin²θ+cos²θ=1 반복 적용"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1-sin⁴θ 를 (1-sin²θ)(1+sin²θ) 로, 분모 1∓cosθ 를 켤레로 유리화하는 등 항등식이 드러나는 꼴로 먼저 변형"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 기본 항등식으로 식 간단히 하기(복합형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 1-sin⁴θ 를 두 인수로 쪼개 cos²θ 를 약분, ⑵ 는 세 제곱을 모두 전개해 항등식으로 상쇄, ⑶ 은 분모를 켤레로 유리화해 sin²θ=1-cos²θ 로 약분한다.
    골조 자체는 표준이지만 세 소문항 모두 다른 변형 경로를 요구하고 ⑵ 의 전개량이 크다. 확인체크 ★2 출발 · M_total 9 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "각 식을 인수분해·전개·유리화로 정리 → sin²θ+cos²θ=1 반복 대입 → 약분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2$ ⑵ $1$ ⑶ $2\left(1+\dfrac{1}{\tan\theta}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/148-359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '차수를 바꿔 (1-cos⁴θ)/sin²θ, 부호를 바꿔 (sinθ+1/sinθ)² 계열로 만들 수 있다. 제약: 전개 후 남는 항이 항등식으로 완전히 상쇄되거나 상수가 되도록 계수를 잡아야 하고, 분모가 0 이 되는 각(sinθ=0 · cosθ=±1)은 전제에서 제외된다.'
    creative: '(1) 세 식 중 값이 상수인 것을 고르게 하는 보기형(★3) (2) 결과가 tanθ 한 항이 되도록 설계해 등식 증명으로 바꾸기(★3) (3) 특정 사분면 조건을 붙여 절댓값 처리까지 겹치기(★4).'
```

```yaml
- id: GN-ALG-148-360
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    θ 가 제3사분면의 각이고 sinθ=-2√5/5 일 때 1/cosθ + tanθ 의 값 구하기.
  category: "항등식으로 cosθ 결정(부호는 사분면) → 식에 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 삼각함수 값과 사분면이 주어질 때 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos²θ=1-sin²θ=1/5 이고 제3사분면이므로 cosθ=-√5/5. 1/cosθ=-√5, tanθ=sinθ/cosθ=2 를 더한다.
    148-e13 과 같은 골조이며 값이 무리수라 유리화가 한 번 붙는다. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "sinθ → cos²θ=1-sin²θ → 사분면으로 부호 확정 → 1/cosθ+sinθ/cosθ 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2-\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/148-360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sinθ 값을 ±√5/5 · ±3√10/10 · ±1/3 으로, 사분면을 바꿀 수 있다. 제약: |sinθ|<1 이어야 하고, 무리수 값을 쓰면 답이 유리화된 한 항으로 정리되도록 묻는 식을 골라야 한다.'
    creative: '(1) (1+tanθ)/cosθ 처럼 식을 바꾸기(★2) (2) 사분면 대신 cosθ<0 만 주기(★2) (3) 1/cosθ+tanθ 의 값을 주고 sinθ 를 되묻기(★3 · I-BW).'
```

```yaml
- id: GN-ALG-149-e14
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ π<θ<3π/2 이고 3sinθ=4cosθ 일 때 sinθ+cosθ, ⑵ π/2<θ<π 이고 1/(1+sinθ)+1/(1-sinθ)=5/2 일 때 tanθ 구하기.
  category: "조건식을 tanθ 또는 cos²θ 로 동치 변환 → 구간으로 부호 확정 → 값 계산"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑴ 은 3sinθ=4cosθ 를 tanθ=4/3 으로, ⑵ 는 두 분수의 합을 통분해 2/cos²θ 로 옮겨 한 함수만 남김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 사이의 관계식이 주어질 때 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 tanθ=4/3 이고 제3사분면이라 sinθ=-4/5, cosθ=-3/5. ⑵ 는 통분하면 2/(1-sin²θ)=2/cos²θ=5/2 → cos²θ=4/5, 제2사분면이라 cosθ=-2√5/5, sinθ=√5/5 → tanθ=-1/2.
    조건식을 한 함수만 남는 꼴로 옮기는 동치 변환이 두 소문항의 공통 핵심(EQV d2). 필수 예제 ★2 출발 · 통찰 1 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "조건식 → tanθ 또는 cos²θ 로 압축 → 구간으로 부호 확정 → 묻는 식 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-\dfrac{7}{5}$ ⑵ $-\dfrac{1}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/149-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 계수 (3,4) 를 다른 피타고라스 쌍 (5,12)·(8,15) 로, ⑵ 의 우변 5/2 를 cos²θ 가 완전제곱 분수가 되는 값(2·10/9)으로 바꿀 수 있다. 제약: ⑵ 는 2/cos²θ=k 에서 cos²θ=2/k ≤ 1 이어야 하므로 k ≥ 2 여야 실제 각이 존재한다.'
    creative: '(1) 구간을 빼고 두 경우를 모두 쓰게 하기(★4 · I-MI) (2) 조건식을 asinθ+bcosθ=0 매개변수형으로 주기(★4) (3) ⑵ 의 결론을 sinθ+cosθ 로 바꿔 대칭식 골조로 잇기(★3).'
```

```yaml
- id: GN-ALG-149-361
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    θ 가 제2사분면의 각이고 |sinθ|=|2cosθ| 일 때 sinθ+cosθ 의 값 구하기.
  category: "절댓값 조건 → tanθ 의 절댓값 → 사분면으로 부호 확정 → 값 계산"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|sinθ|=|2cosθ| 를 |tanθ|=2 로 옮기고 제2사분면 조건으로 tanθ=-2 한 값으로 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수 사이의 관계식이 주어질 때 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값을 벗기면 tanθ=±2 지만 제2사분면이라 tanθ=-2. 동경 방향 (-1,2) 에서 r=√5 이므로 sinθ=2√5/5, cosθ=-√5/5 → 합이 √5/5.
    절댓값 → tan 절댓값 동치 변환 1개(EQV d1). 확인체크 ★2 출발 · 통찰 1 d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "|sinθ|=|2cosθ| → |tanθ|=2 → 제2사분면이라 tanθ=-2 → (-1,2) 방향에서 값 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/149-361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 2 를 3 · 1/2 · 4 로, 사분면을 제3·제4로 바꿀 수 있다. 제약: 계수를 k 로 두면 r=√(1+k²) 이므로 k 가 피타고라스 수의 비(3/4 · 5/12)일 때만 답이 유리수로 떨어진다.'
    creative: '(1) 절댓값을 빼고 sinθ=2cosθ 로 주어 사분면 후보가 둘이 되게 하기(★3 · I-MI) (2) 묻는 식을 sinθcosθ 로 바꾸면 부호 결정이 사라져 ★2 아래로 (3) 조건을 |sinθ|+|cosθ| 값으로 주면 대칭식 골조가 붙어 ★4.'
```

```yaml
- id: GN-ALG-149-362
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    3π/2<θ<2π 이고 (1+cosθ)/sinθ + sinθ/(1+cosθ) = -3 일 때 sinθ+tanθ 의 값 구하기.
  category: "조건식 통분 → 2/sinθ 로 압축 → 구간으로 cosθ 확정 → 대입"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 분수를 통분하면 분자가 2(1+cosθ) 로 인수분해되어 조건식 전체가 2/sinθ 한 항으로 압축됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "분수 꼴 조건식을 압축해 삼각함수 값을 구하고 식의 값 계산하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    통분한 분자 (1+cosθ)²+sin²θ = 2+2cosθ 가 분모의 (1+cosθ) 와 약분되어 2/sinθ=-3 → sinθ=-2/3. 제4사분면이라 cosθ=√5/3, tanθ=-2√5/5.
    조건식을 한 함수로 압축하는 착안이 없으면 sin·cos 두 미지수로 남아 막힌다(EQV d2). 확인체크 ★2 출발 · 통찰 1 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "조건식 통분 → 2/sinθ=-3 → sinθ=-2/3 → 제4사분면에서 cosθ·tanθ → 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{10+6\sqrt{5}}{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/149-362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 -3 을 다른 값 k 로 바꾸면 sinθ=2/k 이므로 |k| ≥ 2 여야 한다. 제약: |2/k| ≤ 1 를 만족하고 구간의 부호와 어긋나지 않아야 하며, 1-sin²θ 가 완전제곱이면(예: sinθ=-3/5) 답이 유리수로 떨어져 난도가 낮아진다.'
    creative: '(1) 조건식을 (1-cosθ)/sinθ + sinθ/(1-cosθ) 로 바꿔 압축 결과를 2/sinθ 로 동일하게 만들기(★3) (2) 구간을 빼고 두 경우를 모두 쓰게 하기(★4 · I-MI) (3) 묻는 식을 sinθ+cosθ+tanθ 로 늘려 계산량만 키우면 질 저하(권장하지 않음).'
```

```yaml
- id: GN-ALG-150-e15
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    sinθ+cosθ=1/2 이고 sinθ>cosθ 일 때 ⑴~⑷ sinθcosθ, sinθ-cosθ, sin³θ+cos³θ, sin⁴θ+cos⁴θ 의 값 구하기.
  category: "대칭식 환원 — 합과 곱으로 모든 대칭식 표현"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "sinθ, cosθ 에 대한 대칭식을 합 s 와 곱 p 두 값으로 환원해 네 소문항을 한 틀에서 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: 'sinθ±cosθ 의 값을 이용하여 식의 값 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (s+c)²=1+2sc 에서 sc=-3/8, (s-c)²=1-2sc=7/4 이고 sinθ>cosθ 라 s-c=√7/2 로 부호가 확정된다. ⑶ 은 세제곱 합 인수분해, ⑷ 는 (s²+c²)²-2s²c² 로 모두 s, p 로 환원된다.
    대칭식 환원 착안 1개(SYM d2) · 부호 결정 함정(T-부호). 필수 예제 ★2 출발 · 통찰 1 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "s+c=1/2 → 제곱해서 sc → (s-c)²=1-2sc 와 부호 조건 → 세제곱·네제곱 대칭식 전개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-\dfrac{3}{8}$ ⑵ $\dfrac{\sqrt{7}}{2}$ ⑶ $\dfrac{11}{16}$ ⑷ $\dfrac{23}{32}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/150-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 's+c 값을 1/3 · 2/3 · -1/2 · √2/2 로 바꿀 수 있다. 제약: |s+c| ≤ √2 여야 실제 각이 존재하고, sc=((s+c)²-1)/2 가 [-1/2, 1/2] 안에 들어야 한다. (s-c)²=1-2sc 가 완전제곱이면 답이 유리수, 아니면 무리수로 남는다.'
    creative: '(1) sinθ>cosθ 대신 사분면 조건으로 부호를 주기(★3) (2) sinθcosθ 값을 주고 s+c 를 되묻기(역방향 ★3 · I-BW) (3) s+c 와 s-c 중 어느 쪽이 더 큰지 묻는 부등식형(★4) — 부호 결정 조건을 아예 빼면 답이 둘이 되어 ★4(I-MI).'
```

```yaml
- id: GN-ALG-150-363
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    sinθ-cosθ=-1/3 일 때 sin³θ-cos³θ 의 값 구하기.
  category: "대칭식 환원 — 차와 곱으로 세제곱 차 표현"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세제곱 차를 (s-c)(1+sc) 로 인수분해해 주어진 차와 곱만으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 'sinθ±cosθ 의 값을 이용하여 식의 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (s-c)²=1-2sc=1/9 에서 sc=4/9. s³-c³=(s-c)(s²+sc+c²)=(s-c)(1+sc) 에 대입하면 한 줄로 끝난다.
    부호 결정도 필요 없어 150-e15 의 부분 골조. 확인체크 ★2 출발 · 통찰 1 d1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "s-c=-1/3 → 제곱해서 sc=4/9 → s³-c³=(s-c)(1+sc) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{13}{27}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/150-363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 's-c 값을 ±1/2 · ±2/3 · ±1/4 로 바꿀 수 있다. 제약: |s-c| ≤ √2 이고 sc=(1-(s-c)²)/2 가 [-1/2, 1/2] 안이어야 한다. 값을 작게 잡을수록 sc 가 1/2 에 가까워져 경계를 넘지 않도록 확인한다.'
    creative: '(1) 묻는 식을 sin⁴θ-cos⁴θ 로 바꾸면 (s²-c²)(s²+c²)=(s+c)(s-c) 라 s+c 의 부호 결정이 새로 붙어 ★3 (2) sinθcosθ 를 함께 묻기(★2) (3) 조건을 tanθ 로 주고 s-c 를 먼저 구하게 하기(★3).'
```

```yaml
- id: GN-ALG-150-364
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    π<θ<3π/2 이고 sinθcosθ=1/8 일 때 1/sinθ + 1/cosθ 의 값 구하기.
  category: "곱 → 합의 제곱 → 구간으로 합의 부호 확정 → 분수식 환원"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1/s+1/c 를 (s+c)/(sc) 로 바꿔 합·곱 두 값만으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 'sinθcosθ 의 값을 이용하여 분수식의 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (s+c)²=1+2sc=5/4 이고 제3사분면이라 s, c 가 모두 음수 → s+c=-√5/2. 1/s+1/c=(s+c)/(sc)=(-√5/2)/(1/8)=-4√5.
    묻는 식을 합/곱으로 옮기는 착안(SYM d1)과 부호 확정이 전부라 단계는 셋이지만 각 단계가 전형적이다. 확인체크 ★2 출발 · 통찰 1 d1 → ★2 유지(M_total 8 로 ★3 도 후보).
  tier: star_2
  mechanism_primary: "sc=1/8 → (s+c)²=1+2sc → 제3사분면이라 s+c<0 → (s+c)/(sc) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/150-364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sc 값을 ±1/4 · ±3/8 · ±1/2 로, 구간을 다른 사분면으로 바꿀 수 있다. 제약: |sc| ≤ 1/2 이고 sc>0 이면 제1·3사분면, sc<0 이면 제2·4사분면이라 구간과 모순되지 않아야 한다. 1+2sc 가 완전제곱이면 답이 유리수.'
    creative: '(1) 묻는 식을 tanθ+1/tanθ 로 바꾸면 1/(sc) 한 줄로 끝나 ★2 아래 (2) 구간을 빼고 두 값을 모두 쓰게 하기(★3 · I-MI) (3) 1/s+1/c 값을 주고 sc 를 되묻기(★3 · I-BW).'
```

```yaml
- id: GN-ALG-150-365
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    π/2<θ<π 이고 tanθ + 1/tanθ = -2 일 때 sinθ-cosθ 의 값 구하기.
  category: "tan 합 조건을 1/(sinθcosθ) 로 압축 → 차의 제곱 → 구간으로 부호 확정"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "tanθ+1/tanθ 를 통분하면 (sin²θ+cos²θ)/(sinθcosθ)=1/(sinθcosθ) 가 되어 조건이 곱 한 값으로 바뀜"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: 'tanθ 관련 조건을 sinθcosθ 로 옮겨 sinθ±cosθ 구하기'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 1/(sc)=-2 → sc=-1/2. (s-c)²=1-2sc=2 이고 제2사분면이라 s>0>c 이므로 s-c>0 → √2.
    tan 합을 곱의 역수로 옮기는 압축이 없으면 tanθ 이차방정식으로 돌아가 훨씬 길어진다(EQV d2). 확인체크 ★2 출발 · 통찰 1 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "tanθ+1/tanθ=1/(sc) → sc=-1/2 → (s-c)²=1-2sc=2 → 제2사분면이라 s-c>0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/150-365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 -2 를 k 로 바꾸면 sc=1/k 이므로 |k| ≥ 2 여야 한다. 제약: |sc| ≤ 1/2 를 지켜야 하고, 1-2sc 가 완전제곱이면 답이 유리수로 떨어진다. k=-2 는 sc=-1/2 경계값이라 θ=3π/4 로 각이 하나뿐이다.'
    creative: '(1) 묻는 식을 sinθ+cosθ 로 바꾸면 (s+c)²=1+2sc=0 이 되어 답이 0(★2) (2) 구간을 빼고 두 값을 모두 쓰게 하기(★3 · I-MI) (3) 조건을 tan²θ+1/tan²θ 로 주면 압축이 한 단계 더 필요해 ★4.'
```

```yaml
- id: GN-ALG-151-e16
  page: 151
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    이차방정식 5x²-x+k=0 의 두 근이 sinθ, cosθ 일 때 상수 k 의 값 구하기.
  category: "근과 계수의 관계로 합·곱을 옮긴 뒤 sin²θ+cos²θ=1 에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식 근과 계수의 관계(방정식 단원)와 삼각함수 기본 항등식(이 단원)을 한 식으로 묶어야 진행됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수와 이차방정식(근과 계수의 관계 + 기본 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    s+c=1/5, sc=k/5 로 옮긴 뒤 (s+c)²=1+2sc 에 넣으면 1/25=1+2k/5 한 줄로 k 가 나온다.
    두 근을 삼각함수로 보는 순간 sin²+cos²=1 이라는 숨은 조건이 하나 더 붙는다는 착안이 이 유형의 열쇠다(XU d2).
    발전 예제 ★3 출발 · 통찰 1 d2 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "근과 계수의 관계로 s+c=1/5, sc=k/5 → (s+c)²=1+2sc 대입 → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{12}{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/151-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항·일차항 계수 (5, -1) 을 바꿀 수 있다. 제약: s+c=-b/a 가 |s+c| ≤ √2 를 지켜야 실제 각이 존재하고 sc=k/a 도 |sc| ≤ 1/2 여야 한다. (b/a)² < 1 이면 k 가 음수인 정상 답이 나오고, (b/a)²=1 이면 k=0 이라 한 근이 0 이 되어 퇴화한다.'
    creative: '(1) k 를 주고 일차항 계수를 되묻기(★3 · I-BW) (2) 두 근을 sinθ, tanθ 로 바꾸면 곱이 sin²θ/cosθ 라 한 단계 늘어 ★4 (3) 두 근의 차를 함께 묻기(부호 확정이 필요해 ★4).'
```

```yaml
- id: GN-ALG-151-366
  page: 151
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 3x²+2x+k=0 의 두 근이 sinθ, cosθ 일 때 상수 k 의 값 구하기.
  category: "근과 계수의 관계로 합·곱을 옮긴 뒤 기본 항등식에 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근과 계수의 관계와 sin²θ+cos²θ=1 결합 — 바로 앞 발전 예제와 같은 골조라 진입 저항이 낮음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수와 이차방정식(근과 계수의 관계 + 기본 항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    s+c=-2/3, sc=k/3 을 (s+c)²=1+2sc 에 넣어 4/9=1+2k/3 → k.
    151-e16 의 숫자만 바꾼 확인체크라 착안은 이미 주어진 상태다. 확인체크 ★2 출발 · 통찰 1 d1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "s+c=-2/3, sc=k/3 → (s+c)²=1+2sc → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/151-366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 (3, 2) 를 (5, 3)·(4, 1) 등으로 바꿀 수 있다. 제약: (b/a)² ≤ 2 (|s+c| ≤ √2) 이고 결과 sc 가 |sc| ≤ 1/2 를 지켜야 한다. (b/a)² 를 1 보다 크게 잡으면 k>0 이 되어 두 근이 같은 부호인 경우로 성격이 바뀐다.'
    creative: '(1) k 를 주고 sinθcosθ 나 sinθ-cosθ 를 되묻기(★3) (2) 두 근이 sinθ, -cosθ 로 바뀌면 합·곱의 부호가 뒤집혀 T-부호 함정 추가(★2~3) (3) 두 근이 실수일 조건(판별식)을 함께 묻기(★3 · I-CON).'
```

```yaml
- id: GN-ALG-151-367
  page: 151
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    π<θ<3π/2 이고 이차방정식 5x²+kx-3=0 의 두 근이 cosθ, tanθ 일 때 상수 k 의 값 구하기.
  category: "두 근의 곱 cosθtanθ=sinθ 압축 → 사분면으로 cosθ·tanθ 확정 → 합으로 k"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 근의 곱 cosθtanθ 가 곧 sinθ 라는 것을 보면 곱 조건 하나가 sinθ 값을 바로 내준다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수와 이차방정식(근과 계수의 관계 + 기본 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱 = -3/5 인데 cosθtanθ=sinθ 이므로 sinθ=-3/5. 제3사분면이라 cosθ=-4/5, tanθ=3/4 로 확정되고 합 -k/5 에 넣어 k.
    앞의 두 문항과 달리 기본 항등식이 아니라 tanθ 정의로 곱을 압축하는 통찰이 필요하다(EQV d2).
    확인체크 ★2 출발 · 통찰 1 d2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "곱 cosθtanθ=sinθ=-3/5 → 제3사분면이라 cosθ=-4/5, tanθ=3/4 → 합 cosθ+tanθ=-k/5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/151-367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 -3 과 이차항 5 를 바꿔 sinθ=c/a 가 피타고라스 수 (3,4,5)·(5,12,13)·(8,15,17) 의 한 성분이 되게 하면 cosθ·tanθ 가 유리수로 떨어진다. 제약: |sinθ| < 1 이어야 하고 구간(사분면)이 그 부호와 모순되지 않아야 한다.'
    creative: '(1) 두 근을 sinθ, tanθ 로 바꾸면 곱이 sin²θ/cosθ 라 삼차식이 되어 ★4 (2) 구간을 빼면 사분면이 둘로 갈려 k 가 두 값(★4 · I-MI) (3) k 를 주고 구간을 되묻기(★3 · I-BW).'
```

```yaml
- id: GN-ALG-151-368
  page: 151
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 2x²-√2x+k=0 의 두 근이 sinθ, cosθ 이고 1/sinθ, 1/cosθ 를 두 근으로 하는 이차방정식이 x²+ax+b=0 일 때 a²+b² 의 값 구하기.
  category: "기본 항등식으로 k 확정 → 역수 두 근의 합·곱을 원래 합·곱으로 환원 → a, b"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근과 계수의 관계로 옮긴 합·곱을 sin²θ+cos²θ=1 에 넣어야 미지의 k 가 정해짐"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역수를 근으로 하는 방정식의 합은 (s+c)/(sc), 곱은 1/(sc) 로 원래 합·곱만으로 환원됨 — 각을 실제로 구할 필요가 없음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수와 이차방정식(근과 계수의 관계 + 기본 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    s+c=√2/2, sc=k/2 를 (s+c)²=1+2sc 에 넣어 k=-1/2, 즉 sc=-1/4. 새 방정식은 합 (s+c)/(sc)=-a, 곱 1/(sc)=b 로 바로 계산된다.
    sinθ 와 cosθ 를 각각 구하려 들면 무리수 이차방정식으로 빠지고, 합·곱만으로 끝난다는 환원이 이 문항의 핵심이다.
    확인체크 ★2 출발 · 통찰 2 · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "s+c=√2/2, sc=k/2 → 항등식으로 sc=-1/4 → a=-(s+c)/(sc), b=1/(sc) → a²+b²"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/151-368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항·일차항 (2, -√2) 를 바꿀 수 있다. 제약: s+c 는 |s+c| ≤ √2, 유도되는 sc 는 |sc| ≤ 1/2 를 지켜야 하고 sc≠0 이어야 역수가 정의된다. s+c 를 무리수로 두면 a 가 무리수, 유리수로 두면 a·b 가 모두 유리수가 된다.'
    creative: '(1) 새 두 근을 sinθ/cosθ, cosθ/sinθ 로 바꾸면 합이 1/(sc) 로 더 짧아져 ★2~3 (2) a²+b² 대신 새 방정식 자체를 쓰게 하기(★3 유지) (3) 새 두 근을 sin³θ, cos³θ 로 두면 세제곱 합·곱 환원이 추가돼 ★4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-152-369
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    0<θ<π 일 때 직선 8x+15y=0 이 x축의 양의 방향과 이루는 각을 θ 라 하고 17(sinθ-cosθ) 의 값 구하기.
  category: "직선의 기울기를 tanθ 로 읽고 구간으로 사분면 확정 → 동경 위의 점으로 sin, cos"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선의 기울기라는 기하 정보를 tanθ=-8/15 라는 삼각함수 값으로 옮겨야 풀이가 시작됨(대수↔기하 전환)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선의 기울기가 tanθ 임을 이용해 삼각함수 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 -8/15 = tanθ 이고 0<θ<π 에서 tanθ<0 이므로 제2사분면. 동경 위의 점 (-15, 8) 로 잡으면 r=17 이라 sinθ=8/17, cosθ=-15/17.
    17 을 곱해 두는 발문 설계 때문에 계산은 가볍고, 기울기를 각으로 읽는 전환과 사분면 부호가 전부다.
    STEP 1 ★2 출발 · 통찰 1 d2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "기울기 -8/15=tanθ → 0<θ<π 라 제2사분면 → 점 (-15,8), r=17 → 17(sinθ-cosθ)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/152-369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 (8, 15) 를 다른 피타고라스 수 (3,4)·(5,12)·(7,24) 로 바꾸고 앞의 17 을 그 빗변으로 맞춘다. 제약: 빗변이 정수가 아니면 답이 무리수로 지저분해지고, 계수 부호를 바꾸면 기울기가 양수가 되어 제1사분면으로 사분면이 뒤집힌다.'
    creative: '(1) 구간을 빼면 동경이 제2·4사분면 두 가지라 답이 둘(★3 · I-MI) (2) 직선 대신 두 점을 주고 기울기를 먼저 구하게 하기(★2 유지) (3) 두 직선이 이루는 각으로 확장하면 단원을 넘어 ★4.'
```

```yaml
- id: GN-ALG-152-370
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    sinθtanθ<0 일 때 항상 옳은 것 고르기. 5지선다.
  category: "sinθtanθ 를 sin²θ/cosθ 로 바꿔 cosθ 의 부호만 확정됨을 읽기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "tanθ=sinθ/cosθ 를 대입하면 조건이 sin²θ/cosθ<0, 곧 cosθ<0 하나로 줄어듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 곱·몫의 부호로 사분면 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건을 sin²θ/cosθ<0 으로 옮기면 sin²θ>0 이므로 cosθ<0 만 남고, 제2·3사분면이 모두 가능해 sinθ·tanθ 의 부호는 정해지지 않는다.
    선택지를 하나씩 반례로 지우는 대신 조건을 먼저 압축하는 쪽이 훨씬 짧다. 사분면이 둘로 남는다는 점이 T-범위 함정.
    STEP 1 ★2 출발 · 통찰 1 d2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "sinθtanθ=sin²θ/cosθ<0 → cosθ<0 만 확정 → 제2·3사분면 공통인 선택지 고르기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/152-370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건을 cosθtanθ<0(→sinθ<0)·sinθ/tanθ>0(→cosθ>0) 처럼 다른 곱·몫으로 바꾸면 확정되는 함수가 달라진다. 제약: 제곱이 되는 쪽이 항상 양수라는 점이 압축의 근거이므로 두 인수의 조합이 같은 함수를 제곱으로 만들어야 한다.'
    creative: '(1) 답을 사분면으로 묻기(★2 유지) (2) 두 부등식을 동시에 주면 사분면이 하나로 좁혀져 절차형 ★2 (3) 보기 ㄱㄴㄷ 참·거짓으로 바꾸면 반례 제시까지 필요해 ★3 · I-VF.'
```

```yaml
- id: GN-ALG-152-371
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    π<θ<3π/2 일 때 √(sin²θ)+√(cos²θ)+|tanθ|-√((sinθ+cosθ)²) 을 간단히 하기.
  category: "제3사분면 부호 판정으로 절댓값·제곱근을 하나씩 벗기고 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분면이 주어질 때 절댓값·제곱근이 있는 삼각식 간단히 하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제3사분면이라 sinθ<0, cosθ<0, tanθ>0 이고 sinθ+cosθ<0 이므로 각 항이 -sinθ, -cosθ, tanθ, +(sinθ+cosθ) 로 벗겨져 tanθ 만 남는다.
    √(A²)=|A| 를 네 번 적용하는 표준 절차이고 조건 변환이 없어 절차형. 다만 마지막 항의 부호를 잘못 잡으면 답이 달라지는 T-부호 함정이 있다.
    STEP 1 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "제3사분면 부호 확정 → √(A²)=|A| 네 번 적용 → sinθ·cosθ 항이 상쇄되어 tanθ"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\tan\theta$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/152-371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간을 다른 사분면으로 바꾸면 벗겨지는 부호가 통째로 달라진다. 제약: sinθ+cosθ 의 부호는 제1사분면 양수·제3사분면 음수로 확정되지만 제2·4사분면에서는 정해지지 않으므로, 그 항을 쓰려면 구간을 제1·3사분면으로 제한해야 한다.'
    creative: '(1) 마지막 항을 √((sinθ-cosθ)²) 로 바꾸면 제3사분면에서도 부호가 안 정해져 구간을 더 좁혀야 함(★3) (2) 구간 대신 tanθ>0, cosθ<0 조건을 주기(★2 유지) (3) 간단히 한 결과를 주고 사분면을 되묻기(★3 · I-BW).'
```

```yaml
- id: GN-ALG-152-372
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    π<θ<3π/2 이고 sinθ=-1/3 일 때 tanθ + 1/tanθ 의 값 구하기.
  category: "기본 항등식으로 cosθ 확정 → tan 합을 1/(sinθcosθ) 로 압축해 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "tanθ+1/tanθ 를 통분하면 1/(sinθcosθ) 가 되어 한 번의 대입으로 끝남(직접 tanθ 를 계산해도 풀리므로 depth 1)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 삼각함수 값과 구간이 주어질 때 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin²+cos²=1 로 |cosθ|=2√2/3 이고 제3사분면이라 cosθ=-2√2/3. tanθ+1/tanθ=1/(sinθcosθ) 에 넣으면 한 줄.
    압축을 모르고 tanθ 를 직접 구해 더해도 같은 길이라 통찰 깊이는 얕다. 부호를 놓치면 답의 부호가 뒤집히는 T-부호 함정.
    STEP 1 ★2 출발 · 통찰 1 d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "sinθ=-1/3 → 제3사분면이라 cosθ=-2√2/3 → tanθ+1/tanθ=1/(sinθcosθ) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/152-372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sinθ 를 -1/3 대신 -3/5·-2/3·-1/4 로 바꿀 수 있다. 제약: |sinθ| < 1 이고 구간의 부호와 맞아야 하며, 1-sin²θ 가 완전제곱이면(3/5, 4/5 류) 답이 유리수로, 아니면 무리수로 떨어진다.'
    creative: '(1) 묻는 식을 sinθ-cosθ 로 바꾸면 같은 재료로 ★2 (2) 구간을 빼면 제3·4사분면 두 갈래라 답이 둘(★3 · I-MI) (3) sinθ 대신 tanθ+1/tanθ 값을 주고 sinθ 를 되묻기(★3 · I-BW).'
```

```yaml
- id: GN-ALG-152-373
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    sinθ+cosθ=1/2 일 때 (1+tanθ)/sinθ 의 값 구하기. 5지선다.
  category: "묻는 식을 (sinθ+cosθ)/(sinθcosθ) 로 통분 → 항등식으로 sinθcosθ 확보"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(1+tanθ)/sinθ 를 통분하면 (cosθ+sinθ)/(sinθcosθ) 가 되어 주어진 합과 곱만으로 값이 정해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "sinθ±cosθ 의 값을 이용하여 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (s+c)²=1+2sc 에서 sc=-3/8 이고, 묻는 식은 통분하면 (s+c)/(sc) 라 바로 대입된다.
    합과 곱만으로 닫힌다는 것을 못 보면 sinθ, cosθ 를 각각 구하려다 무리수 이차방정식으로 빠진다(EQV d2).
    STEP 1 ★2 출발 · 기출 태그 +0~1 이지만 통찰 1 d2 · M_total 6 으로 골조가 한 줄이라 ★2 유지.
    [분류 이슈] 교육청 기출 태그와 통찰 1 d2 만 보면 ★3 후보이나 계산량이 한 줄이라 ★2 로 둠.
  tier: star_2
  mechanism_primary: "(s+c)²=1+2sc → sc=-3/8 → (1+tanθ)/sinθ=(s+c)/(sc) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/152-373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 's+c 를 1/2 대신 1/3·-1/2·√3/2 등으로 바꾼다. 제약: |s+c| ≤ √2 여야 하고 유도되는 sc=((s+c)²-1)/2 가 0 이면 분모가 사라지므로 (s+c)²≠1 이어야 한다. 선택지가 유리수로 떨어지려면 (s+c)² 가 유리수여야 한다.'
    creative: '(1) 묻는 식을 (1+1/tanθ)/cosθ 로 바꿔도 같은 (s+c)/(sc) 로 환원돼 ★2 유지 (2) sc 를 주고 s+c 를 되묻기(부호 분기로 ★3 · I-MI) (3) 구간을 추가하고 sinθ-cosθ 까지 묻기(★3).'
```

```yaml
- id: GN-ALG-152-374
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 4x²-3x+k=0 의 두 근이 -sinθ, cosθ 일 때 상수 k 의 값 구하기.
  category: "근과 계수의 관계로 -sinθ+cosθ, -sinθcosθ 를 옮긴 뒤 기본 항등식에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근과 계수의 관계와 sin²θ+cos²θ=1 결합 — 두 근에 붙은 음부호까지 합·곱에 반영해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수와 이차방정식(근과 계수의 관계 + 기본 항등식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합 cosθ-sinθ=3/4, 곱 -sinθcosθ=k/4. (c-s)²=1-2sc 에 넣으면 9/16=1-2sc 로 sc 가 정해지고 k=-4sc.
    151-e16 과 같은 골조이지만 한 근이 -sinθ 라 합·곱의 부호를 한 번 더 뒤집어야 하는 T-부호 함정이 추가된다.
    STEP 1 ★2 출발 · 통찰 1 d1 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "c-s=3/4, -sc=k/4 → (c-s)²=1-2sc 대입 → sc → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{7}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/152-374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 (4, -3) 을 바꿀 수 있다. 제약: c-s=-b/a 가 |c-s| ≤ √2 를 지켜야 하고 유도되는 sc 가 |sc| ≤ 1/2 여야 한다. (b/a)² < 1 이면 sc>0, > 1 이면 sc<0 으로 k 의 부호가 뒤집힌다.'
    creative: '(1) 두 근을 -sinθ, -cosθ 로 두면 합만 부호가 바뀌어 ★2 유지 (2) k 를 주고 일차항 계수를 되묻기(★3 · I-BW) (3) 두 근의 차 또는 |두 근의 차| 를 함께 묻기(부호 확정이 필요해 ★3).'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-153-375
  page: 153
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    제1사분면의 점 P 를 직선 y=x 에 대하여 대칭이동한 점 Q, Q 를 원점에 대하여 대칭이동한 점 R 에 대하여 동경 OP, OQ, OR 가 나타내는 각을 α, β, γ 라 할 때 sinα=1/3 이면 9(sin²β+tan²γ) 의 값 구하기.
  category: "대칭이동을 좌표 성분의 교환·부호 반전으로 읽어 sinβ, tanγ 를 sinα, cosα 로 환원"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대칭이동이라는 기하 조작을 점 P(a,b) → Q(b,a) → R(-b,-a) 라는 좌표 성분 조작으로 옮겨야 동경의 삼각함수 값이 나옴"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=x 대칭은 sin↔cos 교환, 원점 대칭은 tan 불변이라는 대칭성을 쓰면 β, γ 를 실제로 구하지 않고 sinβ=cosα, tanγ=tanβ 로 끝남"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "대칭이동한 점의 동경으로 삼각함수 값 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    P(a,b), r=OP 로 두면 sinα=b/r=1/3. Q(b,a) 이므로 sin²β=a²/r²=1-1/9, R(-b,-a) 이므로 tanγ=a/b 로 원점 대칭에서 tan 이 그대로 유지된다.
    세 각을 각각 구하려 들면 막히고, 대칭이동을 좌표 교환·부호 반전으로 읽어 sinα 하나로 모두 환원하는 것이 골조다.
    STEP 2 ★3 출발 · 통찰 2(RT d2 + SYM d2) · M_total 9 · 교육청 기출 → +1 하여 ★4.
  tier: star_4
  mechanism_primary: "P(a,b) → Q(b,a) → R(-b,-a) → sin²β=cos²α=1-1/9, tan²γ=a²/b² → 9(sin²β+tan²γ)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$80$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/153-375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'sinα 를 1/3 대신 3/5·1/2·2/3 로, 앞의 계수 9 를 sinα 분모의 제곱으로 맞춘다. 제약: 0<sinα<1 이고 P 가 제1사분면이라 cosα>0 이어야 하며, tan²γ=cos²α/sin²α 가 유한하려면 sinα≠0 이어야 한다. 피타고라스 수를 쓰면 답이 정수로 떨어진다.'
    creative: '(1) 대칭축을 y축·x축으로 바꾸면 sin·cos 중 하나만 부호가 바뀌어 ★3 (2) R 를 다시 y=-x 에 대칭시켜 각을 하나 더 추가하면 ★5 후보(SYM 3단) (3) sinα 대신 tanα 를 주면 sin, cos 복원에 사분면 판정이 더 붙어 ★4 유지.'
```

```yaml
- id: GN-ALG-153-376
  page: 153
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    ㄱ. cos⁴θ-sin⁴θ=2cos²θ-1, ㄴ. (1+sinθ-cosθ)²=2(1-sinθ)(1-cosθ), ㄷ. cosθ/(1-sinθ)-cosθ/(1+sinθ)=2tanθ 중 옳은 것 모두 고르기.
  category: "보기 세 항등식을 각각 sin²θ+cos²θ=1 로 동치 변환해 참·거짓 판정"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 보기를 인수분해·통분한 뒤 sin²θ+cos²θ=1 을 써서 한쪽을 다른 쪽 꼴로 옮겨야 참·거짓이 보임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 기본 항등식으로 식 간단히 하기(복합형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 제곱의 차 인수분해로 cos²-sin² → 2cos²-1 참. ㄷ 은 통분하면 2sinθcosθ/cos²θ=2tanθ 참.
    ㄴ 은 좌변 전개가 2+2sinθ-2cosθ-2sinθcosθ 로 우변과 맞지 않아 거짓이며, 항등식이 아님을 보이려면 전개를 끝까지 해야 한다.
    보기 세 개를 각각 변형해야 해 Mₛ·Mₐ 가 높다. STEP 2 ★3 출발 · 통찰 1 d2 · M_total 9 → ★3 유지.
  tier: star_3
  mechanism_primary: "ㄱ 제곱의 차 인수분해 · ㄴ 좌변 전개 후 우변과 대조 · ㄷ 통분 후 1-sin²θ=cos²θ → 참·거짓"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/153-376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항등식 자체가 대상이라 바꿀 수는 없고, 차수(4제곱 → 6제곱)나 분모(1±sinθ → 1±cosθ)를 바꿔 같은 골조의 보기를 새로 만든다. 제약: 분모가 0 이 되는 각(sinθ=±1 등)을 배제해야 하고, 거짓 보기는 반례가 존재하도록 항등식에서 한 항만 틀리게 둔다.'
    creative: '(1) 거짓 보기 ㄴ 에 대해 성립하는 θ 조건까지 묻기(★4 · I-VF) (2) 보기를 모두 참으로 만들어 증명형으로 바꾸기(★3 유지) (3) 옳은 것의 개수만 묻는 객관식으로 낮추면 ★2~3.'
```

```yaml
- id: GN-ALG-153-377
  page: 153
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    π<θ<2π 이고 sinθcosθ/(1-cosθ) + (1-cosθ)/tanθ = 1 일 때 cosθ 의 값 구하기. 5지선다.
  category: "두 분수를 통분해 2cosθ/sinθ 로 압축 → sinθ=2cosθ → 기본 항등식과 구간으로 부호 확정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공통분모 sinθ(1-cosθ) 로 묶으면 분자가 cosθ[sin²θ+(1-cosθ)²]=2cosθ(1-cosθ) 로 접혀 조건이 2/tanθ=1 한 줄이 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "분수 꼴 조건식을 압축해 삼각함수 값을 구하고 식의 값 계산하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    통분 뒤 sin²θ+1-2cosθ+cos²θ=2(1-cosθ) 로 접히는 것이 전부이고, 그 결과 조건은 sinθ=2cosθ 로 단순해진다.
    sin²+cos²=1 에 넣어 cos²θ=1/5 이고, π<θ<2π 에서 sinθ<0 이므로 cosθ<0 쪽을 택한다(부호를 놓치면 ④ 로 틀림).
    STEP 2 ★3 출발 · 통찰 1 d2 · M_total 9 → ★3 유지.
    [분류 이슈] 교육청 기출·통분 계산량으로는 ★4 후보이나, 통찰이 압축 1회뿐이고 계산이 표준이라 ★3 으로 둠.
  tier: star_3
  mechanism_primary: "통분 → 분자가 2cosθ(1-cosθ) 로 접힘 → 2cosθ/sinθ=1 → sinθ=2cosθ → 항등식+구간으로 cosθ<0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/153-377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 1 을 k 로 바꾸면 sinθ=(2/k)cosθ 가 되어 tanθ=2/k. 제약: k≠0 이어야 하고 1-cosθ≠0, sinθ≠0 이라 θ 가 π 의 정수배가 아니어야 한다. 2/k 가 유리수면 cos²θ=k²/(k²+4) 가 유리수로 떨어진다.'
    creative: '(1) 분모를 1+cosθ 로 바꾸면 접히는 항이 2(1+cosθ) 라 부호가 반대가 되어 ★3 유지 (2) 구간을 빼면 cosθ 가 두 값(★4 · I-MI) (3) cosθ 대신 sinθ+cosθ 를 묻고 구간을 좁히면 ★4.'
```

```yaml
- id: GN-ALG-153-378
  page: 153
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    π/2<θ<π 이고 삼차방정식 4x³+ax²+bx-3=0 의 세 근이 sinθ, cosθ, tanθ 일 때 상수 a, b 에 대하여 a+b 의 값 구하기.
  category: "세 근의 곱이 sin²θ 임을 이용해 각을 확정 → 나머지 두 대칭식으로 a, b"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼차방정식 근과 계수의 관계(방정식 단원)를 세 삼각함수의 기본 대칭식으로 읽어야 조건이 식이 됨"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 근의 곱 sinθcosθtanθ 가 sin²θ 로 접혀 상수항 하나만으로 θ 가 특수각으로 확정됨 — 이 압축이 진입 열쇠"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수와 삼차방정식(근과 계수의 관계 + 기본 항등식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    곱 = 3/4 인데 sinθcosθtanθ=sin²θ 이므로 sin²θ=3/4. 제2사분면이라 sinθ=√3/2, cosθ=-1/2, tanθ=-√3 로 세 값이 모두 확정된다.
    그 뒤 a=-4(세 근의 합), b=4(두 근씩 곱의 합) 를 무리수 계산으로 정리한다. 곱의 압축을 못 보면 미지수 셋이 남아 손을 못 댄다.
    STEP 2 ★3 출발 · 통찰 2 · M_total 10 → +1 하여 ★4.
  tier: star_4
  mechanism_primary: "세 근의 곱 sinθcosθtanθ=sin²θ=3/4 → 제2사분면 특수각 확정 → 합·두 근씩 곱의 합으로 a, b"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$3\sqrt{3}-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/153-378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최고차항 4 와 상수항 -3 의 비로 sin²θ 가 정해진다. 제약: 0<sin²θ<1 이어야 하고, sin²θ 가 1/4·1/2·3/4 처럼 특수각 값일 때만 세 값이 깔끔하게 떨어진다. 구간은 유도된 sinθ 부호와 모순되지 않아야 한다.'
    creative: '(1) a, b 를 주고 구간을 되묻기(★4 · I-BW) (2) 세 근을 sinθ, cosθ, 1/tanθ 로 바꾸면 곱이 cos²θ 가 되어 같은 골조 ★4 (3) 세 근이 실수일 조건까지 검증하게 하면 ★5 후보(I-VF 추가).'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-153-379
  page: 153
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점 O 와 점 P(a,b) 를 지나는 동경 OP 가 나타내는 각 θ 가 √sinθ·√cosθ=-√(sinθcosθ), |a|-|b|=1, OP=5 를 만족시킬 때 sinθ+cosθ+tanθ 의 값 구하기.
  category: "무리식 부호 조건으로 사분면 확정 → 정수 조건 두 개를 결합해 점 좌표 결정 → 정의 대입"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "√A√B=-√(AB) 는 A<0 이고 B<0 일 때만 성립하므로 조건 하나가 sinθ<0, cosθ<0, 곧 제3사분면으로 번역됨"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|a|-|b|=1 과 a²+b²=25 를 함께 묶어야 (|a|,|b|)=(4,3) 이 나옴 — 어느 한쪽만으로는 좌표가 정해지지 않음"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "무리식의 부호 조건으로 사분면을 정한 뒤 삼각함수 값 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    √sinθ√cosθ=-√(sinθcosθ) 는 두 값이 모두 음수일 때만 성립하므로 제3사분면, 즉 a<0, b<0.
    그러면 |a|-|b|=1 과 a²+b²=25 에서 (|a|,|b|)=(4,3) 이므로 P(-4,-3), r=5 로 세 삼각함수가 정의대로 나온다.
    무리식 부호 규칙 해석(EQV d3)과 두 좌표 조건 결합(CON d2)이 겹친다. 실력 UP ★4 출발 · 통찰 2 · M_total 10 → ★4 유지(★5 는 통찰 3개 이상 + SC/VF/SYM/XU 요구인데 해당 없음).
  tier: star_4
  mechanism_primary: "√sinθ√cosθ=-√(sinθcosθ) → 제3사분면 → |a|-|b|=1 과 a²+b²=25 로 P(-4,-3) → 정의 대입"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-\dfrac{13}{20}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/153-379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'OP 와 |a|-|b| 를 바꿀 수 있다. 제약: |a|, |b| 가 피타고라스 수 쌍이어야 답이 유리수로 떨어지고(3-4-5, 5-12-13, 8-15-17), |a|-|b| 의 값이 그 쌍의 실제 차와 일치해야 해가 존재한다. |a|-|b| 를 음수로 두면 두 성분의 역할이 바뀐다.'
    creative: '(1) 부호 조건을 √sinθ/√cosθ=-√(sinθ/cosθ) 로 바꾸면 제2사분면이 되어 답만 달라지는 ★4 (2) |a|-|b|=1 대신 ab 값을 주면 연립이 이차로 바뀌어 ★4 유지 (3) 조건을 만족하는 P 를 모두 구하게 하면 대칭 좌표까지 따져야 해 ★5 후보(I-MI+I-VF).'
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 4 · ★2 21 · ★3 11 · ★4 3 · ★5 0
- 통찰형 25 · 절차형 14 · premium 0
- 통찰 유형 분포: I-EQV 가 압도적으로 많고(조건식을 sinθcosθ 나 sinθ±cosθ 로 압축하는 골조), 다음이 I-XU(근과 계수의 관계 결합) · I-RT(기하↔삼각함수 전환) · I-SYM · I-CON 순이다. I-SC · I-VF · I-PD 는 이 범위에 없다.
- type_hint 상위: 「삼각함수와 이차방정식(근과 계수의 관계 + 기본 항등식)」 5 · 「sinθ±cosθ 의 값을 이용하여 식의 값 구하기」 3 · 「삼각함수의 곱·몫의 부호로 사분면 결정하기」 3 · 「동경 위의 점으로 삼각함수 값을 구해 식의 값 계산하기」 2 · 「삼각함수 사이의 관계식이 주어질 때 식의 값 구하기」 2
- 그림: 1문(`crop:fig-145-351.png` · 145-351 단위원 교점)
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수 예제·확인체크 ★2 · 발전 예제 ★3 · STEP 1 ★2 · STEP 2 ★3~4 · 실력 UP ★4. 벤더 신호와 판정이 2단 이상 어긋난 문항은 없다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-152-373 | 교육청 기출 태그 + 통찰 1 d2 로는 ★3 후보이나 통분 한 줄로 끝나 계산량이 STEP 1 수준 → ★2 로 둠 | ★2 / ★3 |
| GN-ALG-153-377 | 교육청 기출 + 통분 계산량으로는 ★4 후보이나 통찰이 압축 1회뿐이라 ★3 으로 둠 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「삼각함수와 이차·삼차방정식」 — 이 범위에서 5문(151-e16·151-366·151-367·151-368·152-374)에 153-378 까지 6문으로 가장 큰 묶음이고, 근과 계수의 관계를 기본 항등식과 묶는 고유 골조라 독립 유형이 필요하다. 하위 갈래로 「두 근이 sinθ, cosθ」와 「두 근에 tanθ 가 섞임(곱이 sinθ 또는 sin²θ 로 접힘)」을 나누면 ★2 와 ★3~4 가 깔끔히 갈린다. (2) 「사분면 판정형」 — 곱·몫의 부호로 사분면을 정하는 갈래(147-e10·147-356·152-370)와 무리식 부호 규칙으로 정하는 갈래(147-358·153-379)는 진입 난이도가 달라 분리하는 편이 낫다.
- **통합해도 될 유형**: 「사분면이 주어질 때 절댓값·제곱근이 있는 삼각식 간단히 하기」와 「…거듭제곱근이 있는…」(147-e11·147-357·152-371)은 √(A²)=|A| 적용 횟수만 다르므로 한 유형으로 묶고 문항 난이도로 ★ 를 가른다. 「한 삼각함수 값과 구간이 주어질 때 식의 값 구하기」와 「한 삼각함수 값과 사분면이 주어질 때…」(148-e13·148-360·152-372)도 조건 표현만 다른 같은 유형이다.
- **★ 산식 재산정 시 주의**: 이 단원의 ★3 이상은 거의 전부 「조건식을 sinθcosθ 또는 sinθ±cosθ 로 압축하는 I-EQV」 하나에 의존한다. 카탈로그를 만들 때 이 압축을 base_star 2 유형의 공통 단계로 흡수하면 ★ 가 한 단 내려가므로, 압축이 없어도 풀리는 문항(152-372)과 압축 없이는 막히는 문항(150-365·152-373·153-377)을 base_star 단계에서 구분해야 한다.

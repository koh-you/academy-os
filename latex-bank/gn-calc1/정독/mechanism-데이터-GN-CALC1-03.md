---
name: mechanism-데이터-GN-CALC1-03
description: 개념원리 미적분Ⅰ 03 함수의 극한에 대한 성질(1/1 · 22~30쪽 · 31문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 03 함수의 극한에 대한 성질
  unit_code: CALC1-03
  part: "1/1"
  extract_range: "22~30쪽 · 22-11~30-35"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·tag)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 정함(비면 절차형·하나라도 있으면 통찰형). depth_score 는 insights 의 effective_depth 평균(통찰 0 이면 0.00). anchor_status 는 전부 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 03 함수의 극한에 대한 성질 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 03단원 「함수의 극한에 대한 성질」 22~30쪽 전 31문항을 전수로 다룬다. 구역은 개념원리 익히기 2문 · 필수·발전 예제(필수예제 6 + 확인체크 7) 13문 · 연습문제 STEP 1 7문 · STEP 2 7문 · 실력 UP 2문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 있다 — 개념원리 익히기(통번호)는 개념 확인이라 ★1 출발, 필수예제(tag 「필수」)는 ★2 출발, 필수예제 옆에 붙는 확인체크는 짝 예제와 같은 층이라 ★2 를 출발점으로 삼았다(이 파일의 관례 · 개념 확인 수준이면 M·I 조정으로 ★1 로 내린다). 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이고, 「교육청 기출」 태그는 통찰 유무로 +0~1 을 본다. 출발점에서 M_total·통찰로 ±1 만 조정했고, 라벨을 벤더 신호에 억지로 맞추지 않았다.

단원 성격상 0/0 · ∞/∞ · ∞−∞ · ∞×0 네 부정형의 표준 조작(인수분해·약분·유리화·최고차항으로 나누기)이 반복된다. 이 파일에서는 **순수 대수 조작은 절차**로, **조건을 쓸 수 있는 꼴로 옮기는 행위**(치환, 분모·분자를 x 로 나눠 f(x)/x 를 만들기, 극한 존재를 좌우극한 일치로 환원, 근방에서 절댓값 부호 확정)는 I-EQV 통찰로 일관되게 분류했다. x→−∞ 에서 √(x²)=−x 같은 부호 처리는 스키마 §2.2 의 판별 기준에 따라 통찰이 아니라 Mₜ(T-부호) 함정으로 계산했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 화살표 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변경과 ★ 변동 지점)를 빠짐없이 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-22-11
  page: 22
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $\lim_{x\to1}f(x)=3$, $\lim_{x\to1}g(x)=-1$ 일 때 ⑴~⑹ 합·차(상수배)·곱·제곱·몫·분수식의 극한값.
  category: "극한의 성질 → 주어진 두 극한값 대입"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 극한에 대한 성질(합·차·곱·몫)의 직접 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    극한의 성질 여섯 항목을 한 번씩 확인시키는 개념 확인 문항. 분모 극한이 0 이 아니어서 몫의 성질도 그대로 쓰인다.
    통찰 없음·M_total 4·개념원리 익히기 구역 → ★1 출발점 유지.
  tier: star_1
  mechanism_primary: "극한의 성질 → lim f=3, lim g=-1 을 각 식에 대입 → 여섯 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ ⑵ $5$ ⑶ $-3$ ⑷ $1$ ⑸ $-3$ ⑹ $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/22-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값(3, -1)과 각 소문항의 계수를 바꿀 수 있다. 제약 — 몫을 묻는 소문항에서 분모 쪽 극한이 0 이 되면 성질을 쓸 수 없으므로 g 의 극한값은 0 이 아니어야 하고, ⑹처럼 {f(x)}^2 이 분모면 f 의 극한값도 0 이 아니어야 한다."
    creative: "(1) x→1 을 x→∞ 로 바꿔도 같은 성질이 쓰이므로 ★1 유지 (2) 세 함수 f, g, h 를 주고 (f+g)/h 처럼 섞으면 Mₛ 만 올라 ★1~2 (3) 몫의 극한값을 주고 g 의 극한값을 되묻는 역방향으로 바꾸면 I-BW 가 생겨 ★2."
```

```yaml
- id: GN-CALC1-22-12
  page: 22
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 다항함수·유리함수의 $x\to a$ 극한값(모두 직접 대입이 가능한 꼴).
  category: "다항·유리함수의 극한 → 직접 대입"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수·유리함수의 극한(직접 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    여섯 소문항 모두 분모 극한이 0 이 아니어서 x=a 를 그대로 대입하면 끝난다. 부정형이 하나도 없다.
    통찰 없음·M_total 4 → ★1 출발점 유지. 소문항 수가 많아 Mₖ 만 2.
  tier: star_1
  mechanism_primary: "함숫값 대입 가능성 확인 → x=a 대입 → 극한값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-1$ ⑵ $-1$ ⑶ $9$ ⑷ $2$ ⑸ $-6$ ⑹ $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/22-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 다항식의 계수와 접근점 a 를 자유롭게 바꿀 수 있다. 제약 — ⑹ 같은 유리식은 분모에 a 를 넣은 값이 0 이 아니어야 하고(0 이 되면 0/0 또는 발산으로 유형이 바뀐다), 답이 정수나 간단한 분수가 되게 수를 고른다."
    creative: "(1) 소문항 하나를 분모가 0 이 되는 꼴로 바꿔 부정형 인식을 끼우면 ★2 (2) 세제곱근·거듭제곱 합성을 넣으면 Mₖ 만 오르고 ★1 유지 (3) 「대입이 가능한 것만 고르시오」 판정형으로 바꾸면 T-범위 함정이 생겨 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-23-e7
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    $\lim_{x\to0}\dfrac{f(x)}{x}=2$ 일 때 $\lim_{x\to0}\dfrac{2x^2+5f(x)}{3x^2-f(x)}$ 의 값.
  category: "분모·분자를 x 로 나누기 → f(x)/x 조건 대입"
  M: {s: 2, k: 1, a: 3, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f 의 식을 모르므로 분모·분자를 x 로 나눠 주어진 f(x)/x 꼴만 남기는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(x)/x 꼴 극한 조건을 이용한 분수식의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 의 구체적 식이 없으므로 조건을 쓸 수 있는 꼴로 옮기는 것이 유일한 진입로다. 분모·분자를 x 로 나누면 2x+5·f(x)/x 와 3x-f(x)/x 가 되어 (0+10)/(0-2) 한 줄로 끝난다.
    이 단원에서 반복되는 핵심 골조라 통찰 1개(EQV d1)·M_total 6 → 필수예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분모·분자를 x 로 나눔 → f(x)/x → 2 대입 → (0+10)/(0-2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/23-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 극한값 2 와 분자·분모의 계수(2, 5, 3, -1)를 바꿀 수 있다. 제약 — x 로 나눈 뒤 분모의 극한이 0 이 되면 안 되므로 (분모의 f 계수)×(조건값) ≠ 0 이어야 하고, x² 항은 나눈 뒤 0 으로 사라지도록 차수를 2 이상으로 둔다."
    creative: "(1) 조건을 f(x)/x² 로 올리고 식의 x 차수도 함께 올리면 골조 동일·★2 유지 (2) 답을 주고 분자의 계수를 되묻는 역방향이면 I-BW 추가로 ★3 (3) 조건을 두 개(f 와 g)로 늘려 비율을 묻게 하면 I-CON 이 붙어 ★3."
```

```yaml
- id: GN-CALC1-23-e8
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    $\lim_{x\to1}f(x-1)=2$ 일 때 $\lim_{x\to0}\dfrac{2f(x)+1}{3f(x)-1}$ 의 값.
  category: "치환으로 조건을 x→0 꼴로 옮김 → 대입"
  M: {s: 2, k: 1, a: 3, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "t=x-1 로 치환해 주어진 조건을 lim(t→0) f(t)=2 라는 쓸 수 있는 형태로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환을 이용한 극한 조건의 이동"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건의 접근점(x→1)과 묻는 식의 접근점(x→0)이 다르다는 어긋남을 알아채고 치환으로 맞추는 것이 전부다. 맞추고 나면 f 의 극한 2 를 그대로 대입해 5/5 로 끝난다.
    통찰 1개(EQV d1)·M_total 6 → 필수예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "t=x-1 치환 → lim(t→0) f(t)=2 → (4+1)/(6-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/23-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량(x-1 의 1)과 극한값 2, 분수식의 계수를 바꿀 수 있다. 제약 — 치환 후 분모 3f-1 의 극한이 0 이 되면 안 되므로 (분모 f 계수)×(극한값) ≠ (분모 상수항)."
    creative: "(1) 안쪽을 f(2x) 나 f(x²-1) 로 바꿔 치환의 방향을 뒤집으면 ★2~3 (2) 조건 쪽을 f(x-1)/(x-1) 꼴로 만들면 e7 골조와 합쳐져 ★3 (3) 묻는 식을 x→0 이 아닌 다른 점으로 옮겨 치환을 두 번 하게 하면 ★3."
```

```yaml
- id: GN-CALC1-23-13
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\lim_{x\to2}f(x)=\alpha$, $\lim_{x\to2}g(x)=\beta$ 이고 합의 극한이 $2$, 곱의 극한이 $-8$, $\alpha>\beta$ 일 때 $\lim_{x\to2}\dfrac{2f(x)+4}{g(x)-4}$ 의 값.
  category: "합·곱 조건 → 두 수의 합과 곱 → α, β 결정 → 대입"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 극한 조건을 α+β=2, αβ=-8 이라는 합·곱 한 쌍으로 통합해 α, β 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합·곱의 극한 조건으로 두 극한값 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합과 곱의 극한 성질을 역방향으로 써서 α+β 와 αβ 를 얻고, 두 수의 합·곱에서 α, β 를 찾은 뒤 α>β 로 한 쌍을 고른다. 마지막 대입은 한 줄이다.
    M_total 8 은 대부분 추상 표현(Mₐ 3)에서 오고 통찰은 조건 통합 1개(d1)뿐이라 +1 조건(통찰 2개 이상 또는 d3)에 닿지 않는다 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "극한의 성질 역방향 → α+β=2, αβ=-8 → α>β 로 (α,β)=(4,-2) → (2·4+4)/(-2-4)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/23-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 2 와 곱 -8 을 바꿀 수 있다. 제약 — 두 수가 실수로 갈리려면 (합)²-4(곱) ≥ 0 이어야 하고 정수해가 나오게 고른다. 또 마지막 식의 분모 β-4 가 0 이 되면 안 되므로 β ≠ 4, 그리고 α>β 로 한 쌍이 유일하게 정해져야 한다."
    creative: "(1) α>β 대신 α, β 가 정수라는 조건으로 바꾸면 사후 검증이 생겨 I-VF 로 ★3 (2) 합·곱 대신 차와 곱을 주면 부호 분기가 늘어 ★3 (3) 대소 조건을 빼면 답이 둘이 되어 「모든 값의 합」 형태로만 성립 — ★3."
```

```yaml
- id: GN-CALC1-23-14
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\lim_{x\to0}\dfrac{f(x)}{x^2}=a$ 이고 $\lim_{x\to0}\dfrac{x^2+3f(x)}{3x^2-2f(x)}=-2$ 일 때 상수 $a$ 의 값.
  category: "분모·분자를 x² 로 나누기 → a 에 대한 일차방정식"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모·분자를 x² 로 나눠 주어진 f(x)/x² 조건만 남기는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(x)/x² 꼴 조건을 이용한 미정상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e7 과 같은 골조에 미정상수만 붙었다. x² 로 나누면 (1+3a)/(3-2a)=-2 라는 일차방정식이 되고 a 가 바로 나온다.
    통찰 1개(EQV d1)·M_total 7 → 확인체크 출발점 ★2 유지. 「~일 때 상수 a」는 표준 미정계수 절차라 I-BW 로 세지 않았다.
  tier: star_2
  mechanism_primary: "분모·분자를 x² 로 나눔 → (1+3a)/(3-2a)=-2 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/23-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수식의 계수(1, 3, 3, -2)와 우변 -2 를 바꿀 수 있다. 제약 — 정리하면 a 의 일차방정식이 되어야 하므로 (분자 f 계수)+(우변)×(분모 f 계수) ≠ 0 이어야 하고, 답 a 가 정수가 되게 고른다. 분모의 극한 3-2a 가 0 이 되는 값은 피한다."
    creative: "(1) 차수를 x³ 로 올려도 골조 동일 ★2 (2) 두 식을 모두 조건으로 주고 f 의 차수를 되묻게 하면 ★3 (3) a 를 구한 뒤 다른 식의 극한을 추가로 묻는 2단 구조면 Mₛ 만 올라 ★2~3."
```

```yaml
- id: GN-CALC1-23-15
  page: 23
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    상수 $a$ 에 대하여 $\lim_{x\to a}\dfrac{f(x-a)}{x-a}=1$ 일 때 $\lim_{x\to0}\dfrac{x+2f(x)}{2x^2+3f(x)}$ 의 값.
  category: "치환 → f(x)/x 조건 확보 → 분모·분자를 x 로 나누기"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "t=x-a 치환으로 조건을 lim(t→0) f(t)/t=1 로 옮김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "묻는 식의 분모·분자를 x 로 나눠 f(x)/x 만 남김"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "치환과 f(x)/x 조건을 결합한 분수식의 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e8 의 치환과 e7 의 나누기를 한 문항에서 연달아 써야 한다. 치환으로 조건을 x→0 꼴로 옮긴 뒤 다시 x 로 나누면 (1+2)/(0+3) 로 끝난다.
    각 통찰은 d1 표준 조작이지만 두 개가 결합되고 상수 a 가 끝까지 답에 남지 않는다는 점을 확인해야 한다 → 통찰 2개 조건으로 확인체크 출발점 ★2 에서 +1.
    [분류 이슈] 벤더는 확인체크(★2 층)인데 판정은 ★3 — 두 표준 통찰의 결합을 +1 로 볼지 카탈로그 설계 때 재확인 필요.
  tier: star_3
  mechanism_primary: "t=x-a 치환 → f(t)/t → 1 → 묻는 식을 x 로 나눔 → (1+2)/(0+3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/23-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 극한값 1 과 묻는 식의 계수(1, 2, 2, 3)를 바꿀 수 있다. 제약 — x 로 나눈 뒤 분모의 극한 (분모 f 계수)×(조건값) 이 0 이 아니어야 하고, 분모의 x² 항은 나눈 뒤 사라지도록 차수를 2 이상으로 둔다."
    creative: "(1) 치환을 f(2x-2a) 처럼 배율까지 섞으면 조건값이 배수로 바뀌어 ★3 유지 (2) a 가 답에 남도록 계수를 설계하면 Mₐ 상승으로 ★4 (3) 치환 없이 같은 점에서 주면 e7 과 같아져 ★2 로 내려간다."
```

```yaml
- id: GN-CALC1-24-e9
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑶ $\dfrac{0}{0}$ 꼴의 극한값(세제곱 차 인수분해 · 삼차식 조립제법 · 무리식 유리화).
  category: "0/0 꼴 인식 → 공통인수 약분 또는 유리화 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴의 극한(인수분해·유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 직접 대입이 0/0 이 되는 것을 확인한 뒤 분자·분모의 공통인수를 만들어 약분하는 교과 표준 절차다. ⑶ 은 분자를 유리화해 x 를 공통인수로 만든다.
    순수 대수 조작만이라 통찰 0 이지만 M_total 6 이라 -1 조건(M_total ≤ 5)에 닿지 않는다 → 필수예제 출발점 ★2 유지. Mₜ 는 직접 대입 불가(T-범위) 1개.
  tier: star_2
  mechanism_primary: "0/0 확인 → 인수분해 또는 유리화로 공통인수 약분 → 남은 식에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $27$ ⑵ $2$ ⑶ $\dfrac{1}{8}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/24-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 분자·분모의 상수(27, -2, 4)와 접근점을 바꿀 수 있다. 제약 — 반드시 대입 결과가 0/0 이 되도록 분자·분모가 같은 일차인수를 가져야 하고(인수정리로 확인), 무리식은 근호 안이 접근점 근방에서 0 이상이어야 한다."
    creative: "(1) 분자를 네제곱 차로 올리면 Mₖ 만 오르고 ★2 유지 (2) 분자·분모를 모두 무리식으로 만들어 두 번 유리화하게 하면 ★2~3 (3) 극한값을 주고 상수를 되묻는 역방향이면 0/0 조건 판정이 필요해 I-BW 가 붙고 ★3."
```

```yaml
- id: GN-CALC1-24-16
  page: 24
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ $\dfrac{0}{0}$ 꼴의 극한값(공통인수 약분 4문 · 무리식 유리화 2문 · ⑹ 은 분자·분모를 모두 유리화).
  category: "0/0 꼴 인식 → 인수분해·유리화로 약분 → 대입"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴의 극한(인수분해·유리화) 반복 연습"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e9 와 같은 골조를 여섯 번 반복한다. ⑹ 만 분자와 분모를 각각 유리화한 뒤 약분해야 해서 대수 처리가 길다.
    계산 마찰은 v3.8 에서 ★ 상승 신호가 아니므로 Mₖ 3 을 근거로 올리지 않았다. 통찰 0·M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "0/0 확인 → 인수분해 또는 (분자·분모) 유리화 → 공통인수 약분 → 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3$ ⑵ $\dfrac{1}{2}$ ⑶ $-\dfrac{7}{8}$ ⑷ $2$ ⑸ $4$ ⑹ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/24-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 계수와 접근점을 바꿀 수 있다. 제약 — 대입 결과가 0/0 이어야 하므로 분자·분모가 같은 일차인수를 공유해야 하고, ⑶ 처럼 삼차 분모는 접근점이 중근이 되지 않게(약분 후 분모가 0 이 아니게) 고른다. ⑹ 은 양쪽 근호 안이 접근점에서 같은 값이어야 0/0 이 된다."
    creative: "(1) 소문항 하나를 0/0 이 아닌 꼴로 섞어 판정까지 시키면 T-범위 함정이 늘어 ★3 (2) ⑹ 형태를 x→∞ 로 바꾸면 ∞/∞ 유형으로 이동 (3) 약분 후 분모가 0 이 되는 설계로 발산까지 다루면 ★3."
```

```yaml
- id: GN-CALC1-25-e10
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑸ $\dfrac{\infty}{\infty}$ 꼴의 극한(유리식 3문 · 무리식 2문 · ⑸ 는 $x\to-\infty$).
  category: "분모의 최고차항으로 나누기 → 각 항의 극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴의 극한(최고차항으로 나누기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모의 최고차항으로 분모·분자를 나누고 1/x → 0 을 쓰는 표준 절차. 분자·분모의 차수 비교로 극한이 유한값·0·∞ 로 갈린다는 것을 세 유형(⑴⑵⑶)에서 확인시킨다.
    ⑸ 의 x→-∞ 에서 √(x²)=-x 부호 처리는 스키마 기준상 통찰이 아니라 T-부호 함정이라 Mₜ 로 계산했다. 통찰 0·M_total 6 → 필수예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분모 최고차항으로 나눔 → 1/x → 0 대입 → 차수 비교로 유한값·0·발산 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{2}{3}$ ⑵ $0$ ⑶ $\infty$ ⑷ $1$ ⑸ $-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/25-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 다항식의 계수와 차수를 바꿀 수 있다. 제약 — 분자 차수 > 분모 차수면 발산, 같으면 최고차항 계수의 비, 작으면 0 이 되므로 세 경우가 골고루 나오게 배치한다. 무리식은 근호 안 최고차항 계수가 양수여야 하고 x→-∞ 문항은 √(x²)=-x 로 부호가 뒤집히는 설계를 유지한다."
    creative: "(1) x→∞ 를 x→-∞ 로 바꾸면 부호 함정이 늘어 ★2 유지~★3 (2) 극한값을 주고 계수를 되묻는 역방향이면 I-BW 로 ★3 (3) 분자·분모에 미지의 차수 n 을 두어 경우를 나누게 하면 I-MI 가 붙어 ★3~4."
```

```yaml
- id: GN-CALC1-25-17
  page: 25
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ $\dfrac{\infty}{\infty}$ 꼴의 극한(유리식 3문 · 무리식 3문 · ⑸⑹ 은 $x\to-\infty$).
  category: "분모의 최고차항으로 나누기 → 부호 확인 → 각 항의 극한"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴의 극한(최고차항으로 나누기) 반복 연습"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e10 과 같은 골조를 여섯 번 반복하되 x→-∞ 문항이 둘이라 √(x²)=-x 부호 처리를 두 번 요구한다. ⑹ 은 분모에 근호가 둘이라 나눈 뒤 계수 비교가 한 단계 더 붙는다.
    통찰 0·M_total 7 → 확인체크 출발점 ★2 유지. 부호 처리는 Mₜ(T-부호)로만 반영했고 계산량으로 ★ 를 올리지 않았다.
  tier: star_2
  mechanism_primary: "분모 최고차항으로 나눔 → x<0 이면 √(x²)=-x 로 부호 조정 → 극한값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{3}$ ⑵ $0$ ⑶ $-\infty$ ⑷ $\dfrac{1}{2}$ ⑸ $-3$ ⑹ $\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/25-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 차수를 바꿀 수 있다. 제약 — 차수 관계가 답의 종류(유한값·0·발산)를 정하므로 의도한 종류에 맞춰 차수를 고정하고, x→-∞ 문항은 부호가 실제로 뒤집히도록 분자에 홀수차 항을 남긴다. 근호 안은 큰 |x| 에서 양수여야 한다."
    creative: "(1) ⑷ 처럼 분모에 +x 를 붙여 ∞-∞ 와 섞으면 ★3 (2) 분모의 두 근호 계수를 같게 해 상쇄되게 하면 부정형이 한 겹 더 생겨 ★3 (3) 「극한값이 존재하는 것을 모두 고르시오」 판정형이면 T-범위 함정이 늘어 ★3."
```

```yaml
- id: GN-CALC1-26-e11
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴ $\lim_{x\to\infty}(2x^2-3x+4)$ ⑵ $\lim_{x\to\infty}(\sqrt{x+1}-\sqrt{x})$ 의 극한 조사.
  category: "∞-∞ 꼴 인식 → 최고차항 묶기 또는 유리화"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞-∞ 꼴의 극한(최고차항 묶기·유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 x² 로 묶어 (2-3/x+4/x²)→2 와 x²→∞ 의 곱으로, ⑵ 는 분자를 유리화해 1/(√(x+1)+√x)→0 으로 처리한다. 두 소문항 모두 한두 줄이다.
    통찰 0·M_total 4 라 -1 후보이지만, ∞-∞ 가 부정형이어서 그대로 계산하면 안 된다는 인식 자체가 이 필수예제의 학습 목표라 출발점 ★2 를 유지했다.
    [분류 이슈] M_total 4·통찰 0 으로 산식상 ★1 후보 — 유형 자격(부정형 인식)을 이유로 ★2 로 둔 판단이라 카탈로그 설계 때 재확인 필요.
  tier: star_2
  mechanism_primary: "∞-∞ 확인 → 다항식은 최고차항 묶기, 무리식은 유리화 → 극한 조사"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\infty$ ⑵ $0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/26-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식 계수와 근호 안의 상수를 바꿀 수 있다. 제약 — ⑴ 은 최고차항 계수의 부호가 답의 부호를 정하므로 의도한 발산 방향에 맞춰 고르고, ⑵ 는 두 근호의 최고차항 계수가 같아야 ∞-∞ 부정형이 유지된다(다르면 그냥 발산)."
    creative: "(1) 근호 계수를 다르게 해 ∞ 로 발산하게 만들면 판정형 ★2 (2) √(x²+ax)-x 꼴로 바꾸면 유한값이 나와 계수 추출 문제로 확장 ★3 (3) x→-∞ 로 바꾸면 부호 함정이 붙어 ★3."
```

```yaml
- id: GN-CALC1-26-18
  page: 26
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ $\infty-\infty$ 꼴의 극한 조사(다항식 1문 · 무리식 3문 · ⑷ 는 $x\to-\infty$).
  category: "∞-∞ 꼴 인식 → 최고차항 묶기 또는 유리화 → 차수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞-∞ 꼴의 극한(유리화) 반복 연습"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵⑶⑷ 는 모두 유리화 뒤 분자의 차수와 분모의 차수를 비교하는 같은 골조다. ⑶ 은 유리화 앞의 √x 를 분모로 함께 정리해야 하고, ⑷ 는 x→-∞ 라 √(x²)=-x 로 부호가 뒤집힌다.
    통찰 0·M_total 6 → 확인체크 출발점 ★2 유지. 부호 처리는 Mₜ(T-부호)로 반영.
  tier: star_2
  mechanism_primary: "유리화로 ∞/∞ 로 환원 → 최고차항으로 나눔 → x<0 이면 부호 조정 → 극한값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\infty$ ⑵ $\dfrac{3}{4}$ ⑶ $-1$ ⑷ $\dfrac{7}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/26-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 이차식의 계수와 바깥 항의 계수를 바꿀 수 있다. 제약 — 유리화 후 남는 값이 유한하려면 두 항의 최고차 계수가 상쇄되어야 하고(예 √(4x²+…)와 2x), 답은 일차항 계수를 최고차 계수의 두 배로 나눈 값이므로 정수·간단한 분수가 되게 고른다."
    creative: "(1) 계수를 상쇄되지 않게 두면 발산 판정형으로 바뀌어 ★2 (2) 유한 극한값을 주고 근호 안 계수를 되묻는 역방향이면 I-BW 로 ★3 (3) ⑶ 처럼 바깥 인수를 √x 대신 x 로 바꾸면 차수가 어긋나 발산 — 판정을 함께 물으면 ★3."
```

```yaml
- id: GN-CALC1-27-e12
  page: 27
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴ $\lim_{x\to0}\dfrac{1}{x}\left(\dfrac{1}{x+1}-1\right)$ ⑵ $\lim_{x\to\infty}x\left(\dfrac{\sqrt{x-1}}{\sqrt{x+1}}-1\right)$ 의 극한값.
  category: "∞×0 꼴 → 통분·유리화로 0/0 또는 ∞/∞ 로 환원"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞×0 꼴의 극한(통분·유리화로 환원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 괄호 안을 통분하면 -x/(x+1) 이 되어 앞의 1/x 와 약분된다. ⑵ 는 괄호 안을 한 분수로 모은 뒤 분자를 유리화해 ∞/∞ 로 바꾼다.
    두 경우 모두 「부정형을 아는 꼴로 환원한다」는 유형의 표준 절차라 통찰로 세지 않았다. 통찰 0·M_total 6 → 필수예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∞×0 확인 → 괄호 안 통분 또는 유리화 → 0/0·∞/∞ 로 환원 → 약분 후 극한"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-1$ ⑵ $-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/27-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 분수의 상수(x+1 의 1, √(x±1) 의 1)와 바깥 인수의 차수를 바꿀 수 있다. 제약 — 바깥 인수의 차수와 괄호 안이 0 으로 가는 차수가 같아야 유한값이 나온다. 차수가 어긋나면 0 이나 발산이 되므로 의도한 답에 맞춰 맞춘다."
    creative: "(1) 바깥 인수를 x² 로 올리고 괄호 안도 이차로 0 에 가게 만들면 ★3 (2) 괄호 안을 1/√(x+a)-1/√x 꼴로 바꾸면 유리화가 두 번 필요해 ★3 (3) 답을 주고 상수를 되묻는 역방향이면 ★3."
```

```yaml
- id: GN-CALC1-27-19
  page: 27
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ $\infty\times0$ 꼴의 극한값(⑴⑵ 는 $x\to0$ 에서 통분 · ⑶ 은 $x\to\infty$ · ⑷ 는 $x\to-\infty$ 에서 $x^2$ 배).
  category: "∞×0 꼴 → 통분·유리화 → 약분 후 차수 비교"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞×0 꼴의 극한(통분·유리화) 반복 연습"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e12 와 같은 골조를 네 번 반복한다. ⑶⑷ 는 괄호 안을 통분한 뒤 분자를 유리화해야 하고 ⑷ 는 x→-∞ 부호 처리까지 겹쳐 대수 처리가 가장 길다.
    계산 마찰은 v3.8 에서 ★ 상승 신호가 아니므로 Mₖ 3 을 근거로 올리지 않았다. 통찰 0·M_total 7 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "괄호 안 통분 → 분자 유리화 → 바깥 인수와 약분 → 최고차항 비교로 극한값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2$ ⑵ $\dfrac{1}{3}$ ⑶ $\dfrac{3}{16}$ ⑷ $\dfrac{1}{18}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/27-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안의 상수(√3, 3, 9 등)와 바깥 인수의 차수를 바꿀 수 있다. 제약 — 바깥 인수 차수 = 괄호 안이 0 으로 가는 차수여야 유한값이 나오고, ⑷ 처럼 x² 배는 괄호 안이 1/x² 규모로 0 에 가야 한다. 근호 안 최고차 계수는 바깥 상수의 제곱과 맞춰야 상쇄된다."
    creative: "(1) 바깥 차수를 하나 올리거나 내려 발산·0 이 되게 하고 판정을 묻게 하면 ★3 (2) ⑷ 를 x→∞ 로 바꾸면 부호가 상쇄되지 않아 답이 달라지므로 대조 문항으로 쓸 수 있다 (3) 극한값을 주고 근호 안 상수를 되묻는 역방향이면 ★3~4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-28-20
  page: 28
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다섯 개의 극한 중 극한값이 존재하는 것 고르기(①$\lim_{x\to0}\frac{1}{x}$ ②$\lim_{x\to1}\frac{x-2}{x-1}$ ③$\lim_{x\to0}\frac{x}{|x|}$ ④$\lim_{x\to\infty}\sqrt{x-1}$ ⑤$\lim_{x\to-\infty}\frac{3}{x^2}$). 5지선다.
  category: "각 선택지의 좌·우극한·발산 판정 → 유한한 하나 고르기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한값의 존재 판정(좌우극한 불일치·발산 구분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②는 좌우극한이 ±∞ 로 갈리고 ③은 좌우가 -1, 1 로 어긋나며 ④는 ∞ 로 발산한다. ⑤만 0 으로 수렴한다.
    핵심은 「∞ 는 극한값이 아니다」(T-범위)와 좌우극한 일치 요구(T-경계·T-부호)라는 정의 확인이라 통찰로 세지 않았다. 통찰 0·M_total 6 → STEP 1 출발점 ★2 유지.
  mechanism_primary: "선택지별 좌·우극한 계산 → 발산·불일치 제거 → 수렴하는 하나"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/28-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 상수와 접근점을 바꿀 수 있다. 제약 — 정답 선택지는 분모가 접근점 근방에서 0 이 되지 않아야 하고(또는 차수 비교로 0 수렴), 오답 선택지는 좌우 불일치·발산 중 서로 다른 이유로 탈락하도록 배치해 판정 근거가 겹치지 않게 한다."
    creative: "(1) 「극한값이 존재하지 않는 것」으로 뒤집으면 오답 설계 부담만 바뀌고 ★2 유지 (2) 선택지에 가우스 기호나 조각함수를 섞으면 ★3 (3) 보기 ㄱㄴㄷ 형태로 바꾸고 이유까지 묻게 하면 ★3."
```

```yaml
- id: GN-CALC1-28-21
  page: 28
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    조각함수 $f(x)=x^2\ (x<1),\ \frac32\ (x=1),\ x+1\ (x>1)$ 에서 우극한 $a$, 좌극한 $b$ 일 때 $a-b$.
  category: "조각함수의 구간별 식 선택 → 좌·우극한 계산 → 차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조각함수의 좌극한·우극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x>1 쪽 식에 1 을 넣어 a=2, x<1 쪽 식에 1 을 넣어 b=1 이면 끝이다. 함숫값 f(1)=3/2 는 극한과 무관하다는 함정 하나뿐(T-경계).
    통찰 0·M_total 4 → -1 조정으로 STEP 1 출발점 ★2 에서 ★1.
    [분류 이슈] 벤더 STEP 1(★2 층)과 1단 차이 — 좌우극한 정의 확인만 하는 문항이라 ★1 로 내린 판단을 기록한다.
  tier: star_1
  mechanism_primary: "x>1 식에 1 대입 → a=2, x<1 식에 1 대입 → b=1 → a-b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/28-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 구간의 식과 경계점 1, 그리고 f(1) 의 값을 바꿀 수 있다. 제약 — 좌우극한이 서로 달라야 이 문항의 의미가 살고, f(1) 은 두 극한값 어느 쪽과도 다르게 두어야 함숫값 함정이 작동한다."
    creative: "(1) a+b 나 ab 를 묻게 바꾸면 ★1 유지 (2) 좌우극한이 같아지도록 미정상수를 넣고 그 값을 묻게 하면 28-22 골조로 이동해 ★2 (3) 조각을 셋 이상으로 늘리고 두 경계를 함께 물으면 ★2."
```

```yaml
- id: GN-CALC1-28-22
  page: 28
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    조각함수 $f(x)=-(x-2)^2+k\ (x>1),\ 3x+5\ (x\le1)$ 에서 $\lim_{x\to1}f(x)$ 가 존재할 때 $f(4)$ 의 값(단 $k$ 는 상수).
  category: "극한 존재 → 좌우극한 일치 등식 → k 결정 → 함숫값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「극한이 존재한다」를 좌극한=우극한 이라는 k 에 대한 등식으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한의 존재 조건으로 조각함수의 미정상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    존재 조건을 k-1=8 로 옮기면 k 가 나오고, 4 는 x>1 쪽 구간이므로 그쪽 식에 대입한다. 마지막에 어느 구간 식을 써야 하는지 확인하는 T-범위 함정이 하나 있다.
    통찰 1개(EQV d1)·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "좌극한 8 = 우극한 k-1 → k=9 → 4 는 x>1 구간이므로 -(4-2)^2+k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/28-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구간 식의 계수, 경계점 1, 묻는 점 4 를 바꿀 수 있다. 제약 — 묻는 점은 경계점의 어느 쪽인지 분명해야 하고(경계점 자체를 물으면 등호가 붙은 구간을 써야 한다), k 와 답이 정수가 되게 고른다."
    creative: "(1) 묻는 점을 경계점 반대쪽으로 옮기면 구간 선택 함정만 커지고 ★2 유지 (2) 미정상수를 둘로 늘리고 다른 점의 극한 조건을 하나 더 주면 I-CON 이 붙어 ★3 (3) 「존재하지 않도록 하는 k 의 범위」로 뒤집으면 I-BW 로 ★3."
```

```yaml
- id: GN-CALC1-28-23
  page: 28
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $\lim_{x\to0}\dfrac{f(x)}{x}=a$ 이고 $\lim_{x\to0}\dfrac{10x^2-9x+f(x)}{2x^2+3x-f(x)}=5$ 일 때 상수 $a$ 의 값.
  category: "분모·분자를 x 로 나누기 → a 에 대한 일차방정식"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모·분자를 x 로 나눠 x² 항을 0 으로 보내고 f(x)/x 만 남기는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(x)/x 꼴 조건을 이용한 미정상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    23-14 와 같은 골조이고 나누는 차수만 x 로 내려왔다. x 로 나누면 (a-9)/(3-a)=5 라는 일차방정식이 되어 a 가 바로 나온다.
    통찰 1개(EQV d1)·M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분모·분자를 x 로 나눔 → (a-9)/(3-a)=5 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/28-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(-9, 3)와 우변 5 를 바꿀 수 있다. 제약 — 정리해서 a 의 일차방정식이 되어야 하므로 (분자 f 계수)+(우변)×(분모 f 계수) ≠ 0 이고, 구한 a 가 분모의 극한 3-a 를 0 으로 만들지 않아야 한다. x² 항은 나눈 뒤 사라지므로 값에 영향이 없다(교란항으로 자유롭게 둘 수 있음)."
    creative: "(1) x² 항을 빼도 답이 같으므로 교란항 유무로 난도를 미세 조정할 수 있다 (2) 조건을 f(x)/x² 로 올리고 식도 이차로 맞추면 ★2 유지 (3) a 를 구한 뒤 f 의 다른 극한을 묻는 2단 구조면 ★3."
```

```yaml
- id: GN-CALC1-28-24
  page: 28
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다항함수 $f(x)$ 가 $\lim_{x\to1}\dfrac{(x-1)f(x)}{x^2-1}=5$ 를 만족시킬 때 $f(1)$ 의 값.
  category: "분모 인수분해 → (x-1) 약분 → 다항함수이므로 대입"
  M: {s: 1, k: 1, a: 3, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "0/0 꼴 약분 후 다항함수의 함숫값 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 (x-1)(x+1) 로 쪼개 (x-1) 을 약분하면 f(x)/(x+1) 이 남고, f 가 다항함수라 극한이 f(1)/2 다.
    약분과 대입뿐이라 통찰 0 이고 M_total 5 로 -1 후보이지만, f 의 식을 모른 채 f(1) 만 끌어내는 구조(Mₐ 3)와 「다항함수」 조건을 써야 대입이 정당해진다는 점 때문에 STEP 1 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "분모 (x-1)(x+1) 로 인수분해 → (x-1) 약분 → f(1)/2=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/28-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 5 와 분모의 인수(x²-1 의 1), 접근점을 바꿀 수 있다. 제약 — 분자의 (x-1) 과 분모가 같은 일차인수를 공유해야 약분이 되고, 약분 후 분모에 접근점을 넣은 값이 0 이 아니어야 한다."
    creative: "(1) 분자를 (x-1)²f(x), 분모를 (x²-1)² 로 올려도 골조 동일 ★2 (2) f 의 차수를 지정하고 f(x) 자체를 구하게 하면 미정계수 연립이 붙어 ★3 (3) 「다항함수」 조건을 빼면 대입이 정당하지 않아 명제 판정 문항이 되고 ★3~4."
```

```yaml
- id: GN-CALC1-28-25
  page: 28
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\dfrac{\sqrt{x^2+4x+7}-2}{x+3}$ 에 대하여 $\lim_{x\to\infty}f(x)=\alpha$, $\lim_{x\to-3}f(x)=\beta$ 일 때 $\alpha+\beta$.
  category: "같은 함수에 ∞/∞ 처리와 0/0 처리를 각각 적용 → 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 함수의 ∞ 극한과 유한점 0/0 극한을 함께 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    α 는 x 로 나눠 √(x²+…)/x→1 로 얻고, β 는 x=-3 에서 분자·분모가 모두 0 임을 확인한 뒤 분자를 유리화하면 (x+1)(x+3) 이 나와 약분된다.
    두 표준 절차를 한 함수에 이어 쓰는 구성이라 통찰로 셀 새 착안은 없다. 통찰 0·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x→∞ 는 x 로 나눠 α=1 → x→-3 은 분자 유리화 후 (x+3) 약분해 β=-1/2 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/28-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 이차식의 계수와 빼는 상수 2, 분모의 x+3 을 바꿀 수 있다. 제약 — 분모가 0 이 되는 점에서 분자도 0 이어야(근호 안 값이 빼는 상수의 제곱이어야) 0/0 이 되고, 유리화 뒤 분모의 인수가 실제로 약분되도록 이차식이 그 인수를 가져야 한다."
    creative: "(1) x→∞ 를 x→-∞ 로 바꾸면 √(x²)=-x 부호가 붙어 ★3 (2) α, β 의 곱이나 차를 묻게 바꿔도 ★2 유지 (3) 분모를 이차식으로 올려 약분 뒤에도 0 이 남게 하면 발산 판정이 붙어 ★3."
```

```yaml
- id: GN-CALC1-29-26
  page: 29
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다섯 개의 극한 등식 중 옳지 않은 것 고르기(∞/∞ · $x\to-\infty$ 무리식 · 0/0 유리화 · ∞-∞ · 절댓값이 섞인 $x\to-\infty$). 5지선다.
  category: "선택지별 부정형 판별 → 표준 처리 → 값 대조"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 꼴의 극한값 참·거짓 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 네 부정형 처리를 한 문항에서 모두 점검한다. ②⑤ 는 x→-∞ 라 √(x²)=-x 와 |x|=-x 로 부호가 뒤집히는 것이 판정의 갈림길이고, 틀린 선택지도 여기서 나온다.
    다섯 번의 독립 계산이라 Mₖ 가 크지만 새 착안은 없다. 통찰 0 이라 +1 조건에 닿지 않아 STEP 1 출발점 ★2 유지.
    [분류 이슈] 계산량·부호 함정으로 체감 난도는 STEP 2(★3)급 — 계산 마찰을 ★ 상승 신호로 쓰지 않는 v3.8 규정 때문에 ★2 로 두었음을 기록한다.
  tier: star_2
  mechanism_primary: "선택지마다 부정형 판별 → 나누기·유리화·절댓값 부호 처리 → 제시값과 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/29-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 계수와 제시 극한값을 바꿀 수 있다. 제약 — 틀린 선택지는 정확히 하나여야 하므로 나머지 넷의 값을 먼저 계산해 제시값과 맞추고, 오답 선택지는 부호 뒤집힘처럼 학생이 실제로 빠지는 오류값을 제시해야 변별이 생긴다."
    creative: "(1) 「옳은 것」으로 뒤집으면 오답 넷을 모두 설계해야 해 제작 부담만 커진다 (2) ㄱㄴㄷ 보기형으로 바꾸고 근거까지 묻게 하면 ★3 (3) 절댓값 선택지를 x→∞ 와 x→-∞ 쌍으로 배치하면 부호 대조가 핵심이 되어 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-29-27
  page: 29
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    가우스 기호 $[x]$ 가 들어간 다섯 개의 한쪽극한 중 값이 가장 큰 것 고르기. 5지선다.
  category: "접근 방향별로 [ ] 의 값을 상수로 확정 → 각 극한 비교"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접근 방향에 따라 [x], [x-1], [x+1], [x-3] 이 각각 어떤 정수로 고정되는지 판정해 가우스 기호를 상수로 바꾸는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "가우스 기호를 포함한 함수의 한쪽극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    가우스 기호는 접근 방향이 정해지면 근방에서 상수다. x→0- 이면 [x]=-1, x→0+ 이면 [x]=0, x→0- 에서 x-1 은 -1 보다 작으므로 [x-1]=-2 처럼 방향을 틀리면 값이 통째로 달라진다.
    상수로 바꾼 뒤 계산은 한 줄이라 난도는 전부 이 판정에 있다. 통찰 1개(EQV d2)·T-경계와 T-표기 두 함정 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "각 선택지의 접근 방향 확인 → 근방에서 [ ] 를 정수 상수로 확정 → 분수 극한 계산 → 최댓값 비교"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/29-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 평행이동량(x-1, x+1, x-3)과 접근점·접근 방향을 바꿀 수 있다. 제약 — 접근점이 정수 경계여야 가우스 기호가 좌우로 갈리고, 분모가 0 으로 가는 선택지는 분자가 0 인 상수여야 유한값이 된다. 최댓값이 유일하도록 다섯 값을 서로 다르게 맞춘다."
    creative: "(1) 「가장 작은 것」으로 바꾸면 같은 골조 ★3 (2) 접근점을 정수가 아닌 곳으로 두면 좌우 구분이 사라져 ★2 로 내려간다 (3) 극한이 존재하지 않는 선택지를 섞어 존재 판정까지 묻게 하면 ★4."
```

```yaml
- id: GN-CALC1-29-28
  page: 29
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    그림으로 주어진 두 함수 $y=f(x)$, $y=g(x)$ 에 대하여 $\lim_{x\to2}f(x)g(x)$ 를 조사하기(둘 다 $x=2$ 에서 좌우극한이 어긋난다).
  category: "그래프에서 좌·우극한 읽기 → 곱함수의 좌·우극한 각각 계산 → 일치 확인"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 빈 점·채운 점에서 f, g 의 좌극한과 우극한 값을 수치로 읽어내는 기하→대수 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f, g 각각의 극한이 없어 곱의 극한 성질을 쓸 수 없음을 인식하고, 곱함수의 좌·우극한을 따로 계산해 일치하면 극한이 존재한다는 정의로 되돌아감"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프에서 읽는 곱함수의 극한(각 함수의 극한이 없는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 는 x=2 에서 좌 -3·우 3, g 는 좌 3·우 -3 이라 둘 다 극한이 없다. 그래서 극한의 성질을 그대로 쓰면 안 되고, 곱의 좌극한과 우극한을 각각 만들어 둘이 같은지 확인해야 한다.
    「각각 없으니 곱도 없다」로 끝내는 것이 이 문항의 주 오답이다. 통찰 2개(RT d1 + EQV d2)지만 그래프 읽기 자체는 쉽고 계산도 한 줄이라 +1 하지 않고 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "그래프에서 f, g 의 좌·우극한 읽기 → 곱의 좌극한과 우극한을 각각 계산 → 두 값이 같으므로 극한 존재"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-9$'
  answer_source: "답지"
  figure: 'crop:fig-29-28.png'
  latex: latex-bank/gn-calc1/items/29-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 좌·우 극한값(-3, 3 과 3, -3)과 불연속점 x=2 를 바꿀 수 있다. 제약 — 그림의 눈금·빈 점·채운 점 라벨을 함께 고쳐야 하며, 곱의 좌우극한이 같아지려면 (f 좌)×(g 좌) = (f 우)×(g 우) 가 성립하는 네 값을 골라야 한다. 이 등식을 깨면 답이 「극한 없음」으로 바뀐다."
    creative: "(1) 네 값을 등식이 깨지게 두면 「극한이 존재하지 않는다」가 답이 되는 대조 문항 ★3 (2) 곱 대신 합·몫을 묻게 하면 합은 존재하지 않고 몫은 조건이 달라져 판정형 ★3~4 (3) f+g 와 fg 를 함께 묻고 왜 한쪽만 존재하는지 설명하게 하면 ★4."
```

```yaml
- id: GN-CALC1-29-29
  page: 29
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    보기 ㄱ·ㄴ·ㄷ 중 옳은 것 모두 고르기 — $\lim f$ 와 $\lim(f+g)$ / $\lim fg$ / $\lim\frac{g}{f}$ 가 각각 존재할 때 $\lim g$ 도 존재하는가.
  category: "g 를 알려진 조합으로 분해 → 성질 적용 / 성립하지 않는 것은 반례 구성"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g=(f+g)-f, g=f·(g/f) 처럼 g 를 극한이 존재하는 두 식의 조합으로 분해해 성질을 적용할 수 있는 꼴로 바꿈"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ 은 분해가 막히므로 참이 아님을 보이려고 f 의 극한이 0 이 되는 반례를 역으로 구성"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "극한의 성질의 역 판정(보기 참·거짓과 반례)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㄱ 과 ㄷ 은 g 를 차 또는 곱으로 분해하면 성질이 그대로 적용된다. ㄴ 은 같은 분해가 f 로 나누는 것을 요구하는데 f 의 극한이 0 일 수 있어 막히고, 그 지점을 찌르는 반례를 학생이 직접 만들어야 한다.
    ㄷ 이 ㄴ 과 달리 참인 이유(g/f 가 이미 존재한다고 주어졌다)를 구분하는 것이 이 문항의 변별점이다.
    통찰 2개(EQV d2 + BW d2) → STEP 2 출발점 ★3 에서 +1 → ★4. ★4 저노출 유형 게이트는 I-BW 로 충족.
  tier: star_4
  mechanism_primary: "g 를 (f+g)-f · f·(g/f) 로 분해해 ㄱㄷ 참 → ㄴ 은 lim f=0 인 반례로 거짓"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/29-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 명제형이라 숫자 변형의 여지가 거의 없다. 바꿀 수 있는 것은 보기에 쓰인 연산(합·곱·몫)과 조건으로 주는 극한의 조합뿐이며, 참이 되려면 g 가 주어진 두 식의 사칙 조합으로 표현 가능해야 한다는 제약을 지켜야 한다."
    creative: "(1) 보기에 lim(f-g)·lim(f/g) 를 추가해 네 개로 늘리면 ★4 유지 (2) 「f 의 극한이 0 이 아니면」 단서를 ㄴ 에 붙여 참으로 만들면 조건의 역할을 묻는 ★4 (3) 반례를 직접 제시하라는 서술형으로 바꾸면 I-BW depth 가 올라 ★4~5 (SC/VF 가 붙으면 ★5 자격)."
```

```yaml
- id: GN-CALC1-30-30
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\lim_{x\to0}\dfrac{f(x)}{x}=3$ 일 때 $\lim_{x\to2}\dfrac{f(x-2)}{x^2-4}$ 의 값.
  category: "분모 인수분해 → f(x-2)/(x-2) 꼴 분리 → 치환으로 조건 적용"
  M: {s: 2, k: 1, a: 3, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x²-4 를 (x-2)(x+2) 로 쪼개 f(x-2)/(x-2) 를 만들고 t=x-2 치환으로 주어진 조건에 맞춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "인수분해와 치환으로 f(x)/x 조건을 옮겨 쓰기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모를 그냥 두면 조건을 쓸 수 없고, (x-2) 를 떼어 내야 f(x-2)/(x-2) 가 보인다. 떼어 낸 뒤 t=x-2 로 옮기면 3 과 1/(x+2)→1/4 의 곱이다.
    골조는 짧지만 인수분해와 치환을 동시에 떠올려야 해서 통찰 1개(EQV d1)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x²-4=(x-2)(x+2) 분리 → f(x-2)/(x-2)→3, 1/(x+2)→1/4 → 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/30-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 극한값 3, 평행이동량 2, 분모의 인수분해 형태를 바꿀 수 있다. 제약 — 분모는 반드시 (x-이동량) 을 인수로 가져야 조건 꼴이 만들어지고, 남는 인수에 접근점을 넣은 값이 0 이 아니어야 한다."
    creative: "(1) 분모를 x³-8 로 올리면 남는 인수가 이차식이 되어 ★3 유지 (2) 조건을 f(x)/x²=3 으로 올리고 분모도 (x-2)² 을 갖게 하면 ★3 (3) 두 조건을 f 와 g 로 나눠 주고 f(x-2)g(x-2) 를 묻게 하면 I-CON 이 붙어 ★4."
```

```yaml
- id: GN-CALC1-30-31
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=x^2$, $g(x)=2x-1$ 일 때 $\lim_{x\to1}\dfrac{(f\circ g)(x)-(g\circ f)(x)}{(x^2-1)(x^3-1)}$ 의 값.
  category: "합성함수 계산 → 분자 인수분해 → 분모와 (x-1)² 약분"
  M: {s: 2, k: 3, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합성함수가 들어간 0/0 꼴의 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자를 전개하면 2(x-1)² 이고 분모는 (x-1)²(x+1)(x²+x+1) 이라 (x-1)² 이 통째로 약분된다. 분모가 (x-1) 을 두 번 갖고 있으므로 분자도 두 번 가져야 유한값이 나온다는 차수 감각이 요구된다.
    도구는 합성함수 대입과 인수분해뿐이라 통찰 0 이고, Mₖ 3 은 계산량이라 ★ 를 올리지 않는다. 통찰 0·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "(f∘g)=(2x-1)², (g∘f)=2x²-1 → 분자 2(x-1)² → 분모 (x-1)²(x+1)(x²+x+1) 와 약분 → 대입"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/30-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 의 계수와 분모의 두 인수(x²-1, x³-1)를 바꿀 수 있다. 제약 — 분자에 남는 (x-1) 의 차수가 분모의 차수 이상이어야 유한값이 되므로 f∘g 와 g∘f 의 차가 (x-1)² 을 인수로 갖도록 계수를 맞춘다. 약분 후 분모에 1 을 넣은 값이 0 이 아니어야 한다."
    creative: "(1) 분모를 (x²-1)(x²-1) 로 바꾸면 차수가 어긋나 발산 — 판정을 묻는 ★3 (2) g 를 일차 매개변수 ax+b 로 두고 극한값이 주어졌을 때 a, b 를 되묻는 역방향이면 I-BW 로 ★4 (3) 접근점을 1 이 아닌 곳으로 옮기면 0/0 이 아니게 되어 ★2 로 내려간다."
```

```yaml
- id: GN-CALC1-30-32
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $0<a<2$ 일 때 $\lim_{x\to2}\dfrac{|x^2-a|+a-4}{x-2}$ 의 값.
  category: "근방에서 절댓값 안의 부호 확정 → 절댓값 제거 → 0/0 약분"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "0<a<2 와 x→2 로부터 x=2 근방에서 x²-a 가 항상 양수임을 확정해 절댓값을 그대로 벗기는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값이 있는 0/0 꼴 극한(근방 부호 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a 의 범위 조건이 있으니 좌우로 나눌 필요가 없다는 것을 먼저 알아채야 한다. x→2 이면 x² 는 4 근방이고 a<2 이므로 x²-a>0 이 유지된다.
    벗기고 나면 a 가 상쇄되어 (x²-4)/(x-2)=x+2 로 끝난다. a 를 경우로 나누려다 막히는 것이 주 오답이다.
    통찰 1개(EQV d2)·T-범위와 T-부호 두 함정 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "0<a<2 → x=2 근방에서 x²-a>0 → 절댓값 제거 → (x²-4)/(x-2)=x+2 → 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/30-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 범위(0<a<2)와 접근점 2, 상수항 -4 를 바꿀 수 있다. 제약 — 범위는 접근점 근방에서 절댓값 안의 부호가 한쪽으로 고정되도록 잡아야 하고(여기서는 a<접근점²), 절댓값을 벗긴 뒤 상수항이 상쇄되어 0/0 이 되도록 상수를 접근점²의 부호 반대로 맞춘다."
    creative: "(1) 범위를 a>4 로 뒤집으면 절댓값 안이 음수가 되어 부호가 반대인 대조 문항 ★3 (2) 범위 조건을 빼면 a 의 위치에 따라 경우를 나눠야 해 I-MI 가 붙고 ★4 (3) 극한값을 주고 a 의 범위를 되묻는 역방향이면 I-BW 로 ★4."
```

```yaml
- id: GN-CALC1-30-33
  page: 30
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $\lim_{x\to a}\dfrac{x^3-a^3}{x^2-a^2}=6$ 이고 $\lim_{x\to\infty}(\sqrt{x^2+ax}-\sqrt{x^2+bx})=3$ 일 때 상수 $a$, $b$ 에 대하여 $a+b$.
  category: "0/0 약분으로 a 결정 → 유리화한 ∞-∞ 로 b 결정 → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "첫 식을 세제곱 차·제곱 차로 인수분해해 (x-a) 를 약분하면 a 에 대한 방정식이 된다는 동치 변환(a≠0 전제 확인 포함)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 극한 조건으로 미정상수 a, b 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 조건은 0/0 이라 (x-a) 를 약분하면 3a²/(2a) 가 되고, 약분이 성립하려면 a≠0 이어야 한다는 전제를 함께 확인해야 한다(T-범위). 여기서 a 가 나오면 둘째 조건은 유리화해 (a-b)/2=3 한 줄이다.
    두 조건이 순차적이라 통합 통찰은 없고 통찰 1개(EQV d1)·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "(x-a) 약분 → 3a²/(2a)=6 → a → 유리화 → (a-b)/2=3 → b → a+b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/30-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값(6, 3)과 차수 조합(x³-a³ / x²-a²)을 바꿀 수 있다. 제약 — 첫 식은 a≠0 이어야 약분이 유효하고 결과가 (차수비)×a 꼴이므로 a 가 정수로 떨어지게 극한값을 고른다. 둘째 식은 두 근호의 x² 계수가 같아야 ∞-∞ 가 유한값이 되고 답은 (a-b)/2 다."
    creative: "(1) 첫 식 차수를 x⁴-a⁴ / x²-a² 로 올리면 a 의 이차식이 되어 부호 분기가 생기고 ★4 (2) 둘째 식의 x² 계수를 다르게 두면 발산해 조건이 성립하지 않는 대조 문항 (3) a+b 대신 ab 나 a-b 를 묻게 바꿔도 ★3 유지."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-30-34
  page: 30
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    그림으로 주어진 $y=f(x)$ 에 대하여 $\lim_{x\to0+}f(x-1)+\lim_{x\to1+}f(f(x))$ 의 값. 5지선다.
  category: "치환으로 접근 방향 이동 → 합성함수 안쪽의 접근 방향 판별 → 그래프에서 읽기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 빈 점·채운 점에서 각 점의 좌극한·우극한·함숫값을 수치로 구분해 읽는 기하→대수 전환"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "f(f(x)) 에서 x→1+ 일 때 안쪽 f(x) 가 -1 로 가되 -1 보다 작은 쪽에서 접근한다는 것을 판별해 바깥 극한을 좌극한 쪽으로 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "그래프가 주어진 합성함수의 한쪽극한(안쪽 접근 방향 판별)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    앞항은 t=x-1 로 옮기면 t→-1+ 이라 오른쪽 조각의 값을 읽으면 된다. 뒤항이 이 문항의 전부다 — x→1+ 이면 f(x) 는 -1 로 가지만 x>1 쪽 그래프가 내려가므로 -1 보다 작은 값에서 접근하고, 그래서 바깥은 f 의 -1 에서의 **좌**극한을 써야 한다.
    접근 방향을 뒤집어 우극한을 쓰면 답이 달라지는, 방향 판별이 유일한 변별점인 기출이다. 통찰 2개(RT d1 + EQV d3) → 실력 UP 출발점 ★4 유지(★5 는 SC/VF/SYM/XU 가 필요해 자격 미달). 카탈로그가 없어 단원별 감쇠 목록도 없으므로 effective_depth 는 depth 그대로 두었다.
  tier: star_4
  mechanism_primary: "t=x-1 → t→-1+ 에서 f 읽기 → x→1+ 에서 f(x)→-1- 판별 → f 의 -1 좌극한 읽기 → 합"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: 'crop:fig-30-34.png'
  latex: latex-bank/gn-calc1/items/30-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 불연속점(-1, 1)과 각 조각의 극한값·함숫값(2, -1, 1)을 바꿀 수 있다. 제약 — 그림의 눈금과 빈 점·채운 점 라벨을 함께 고쳐야 하고, 안쪽 f 의 치역이 바깥에서 읽을 불연속점 근방에 정확히 닿아야 방향 판별이 의미를 갖는다. 방향을 틀렸을 때 나오는 값이 오답 선택지에 있어야 변별이 산다."
    creative: "(1) 두 항 모두 합성으로 만들면 방향 판별이 두 번이라 ★4 유지~★5 후보 (2) x→1- 로 바꾸면 안쪽이 -1 이 아닌 1 쪽에서 접근해 답이 달라지는 대조 문항 (3) 합성의 극한이 존재하도록 그래프의 한 조각을 고치게 하는 역방향이면 I-BW·I-VF 가 붙어 ★5 자격."
```

```yaml
- id: GN-CALC1-30-35
  page: 30
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $\lim_{x\to\infty}f(x)=\infty$, $\lim_{x\to\infty}\{3f(x)-2g(x)\}=1$ 일 때 $\lim_{x\to\infty}\dfrac{f(x)+4g(x)}{-2f(x)+6g(x)}$ 의 값.
  category: "유한 극한을 f 로 나눠 g/f 비율 확보 → 분모·분자를 f 로 나누기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "3f-2g 가 유한하고 f 가 ∞ 이므로 (3f-2g)/f → 0 임을 써서 g/f → 3/2 라는 비율 조건으로 바꾸는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "발산하는 두 함수의 비율을 유한 극한 조건에서 끌어내기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 와 g 를 따로 구할 수 없고 구할 필요도 없다. 유한한 값으로 수렴하는 식을 ∞ 로 발산하는 f 로 나누면 0 이 된다는 점에서 g/f 의 극한만 뽑아내는 것이 핵심이고, 이 한 착안을 못 하면 진입 자체가 막힌다.
    비율을 얻은 뒤에는 분모·분자를 f 로 나눠 (1+6)/(-2+9) 로 끝난다. 통찰 1개지만 d2 이고 진입 저항이 커 실력 UP 출발점 ★4 유지.
    [분류 이슈] ★4 인데 통찰 유형이 I-EQV 하나뿐이라 v3.8 §2.13 저노출 유형 게이트(SC·VF·SYM·XU·RT·PD·BW)에서 YELLOW — ★3 으로 내릴지 카탈로그 설계 때 재확인 필요.
  tier: star_4
  mechanism_primary: "(3f-2g)/f → 0 → g/f → 3/2 → 분모·분자를 f 로 나눔 → (1+6)/(-2+9)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/30-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건식의 계수(3, -2)와 극한값 1, 묻는 식의 계수(1, 4, -2, 6)를 바꿀 수 있다. 제약 — 조건에서 나오는 비율은 (f 계수)/(g 계수) 이고 극한값 1 은 결과에 영향을 주지 않는다(교란값). 묻는 식은 f 로 나눈 뒤 분모의 극한이 0 이 되지 않아야 하므로 (분모 f 계수)+(분모 g 계수)×비율 ≠ 0."
    creative: "(1) 분모의 계수를 분자와 비례하게 두면 답이 상수가 되는 대조 문항 ★4 유지 (2) 분모가 0 으로 가게 설계하면 발산 판정이 필요해 I-VF 가 붙고 ★5 자격 (3) 조건을 f·g 곱 형태로 주면 비율 추출이 한 단계 늘어 ★4~5."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 3 · ★2 18 · ★3 7 · ★4 3 · ★5 0
- 통찰형 15 · 절차형 16 · premium 0
- 통찰 유형 분포: I-EQV 14 · I-RT 2 · I-BW 1 · I-CON 1 (총 18개 라벨 · depth 3 은 30-34 하나)
- type_hint 상위: 「f(x)/x·f(x)/x² 꼴 조건 활용」 5(23-e7 · 23-14 · 23-15 · 28-23 · 30-30) · 「0/0 꼴 인수분해·유리화」 4(24-e9 · 24-16 · 28-25 · 30-31) · 「극한값 존재·참거짓 판정」 3(28-20 · 29-26 · 29-29) · 「∞/∞ 꼴 최고차항으로 나누기」 2(25-e10 · 25-17) · 「∞-∞ 꼴 유리화」 2(26-e11 · 26-18). 같은 수로 「∞×0 꼴 통분·유리화」 2(27-e12 · 27-19) · 「그래프에서 읽는 극한」 2(29-28 · 30-34) · 「극한의 성질 직접 적용」 2(22-11 · 22-12).
- 그림: 2문(`crop:fig-29-28.png` · `crop:fig-30-34.png`)
- 대상층: 하위권 3 · 중하위권 12 · 중위권 7 · 중상위권 6 · 상위권 3

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-23-15 | 벤더는 확인체크(★2 층)인데 치환+나누기 두 표준 통찰의 결합으로 +1 해 ★3 — 결합을 +1 로 볼지 재확인 필요 | ★2 / ★3 |
| GN-CALC1-26-e11 | M_total 4·통찰 0 이라 산식상 -1(★1) 후보이나 ∞-∞ 부정형 인식이라는 유형 자격을 이유로 필수예제 ★2 유지 | ★1 / ★2 |
| GN-CALC1-28-21 | 벤더 STEP 1(★2 층)이나 좌우극한 정의 확인만 하고 M_total 4·통찰 0 → -1 적용해 ★1 | ★1 / ★2 |
| GN-CALC1-29-26 | 다섯 선택지 전부 계산·부호 함정 두 번으로 체감은 STEP 2(★3)급이나, 계산 마찰을 ★ 상승 신호로 쓰지 않는 v3.8 규정에 따라 ★2 | ★2 / ★3 |
| GN-CALC1-30-35 | ★4 인데 통찰이 I-EQV 하나뿐이라 §2.13 저노출 유형 게이트에서 YELLOW(SC·VF·SYM·XU·RT·PD·BW 부재) | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ① 「f(x)/x^n 꼴 조건을 이용한 분수식의 극한」은 이 범위에서 5회 반복되고 미정상수 결정형(23-14 · 28-23)과 값 계산형(23-e7 · 30-30)이 학생 체감이 달라 base ★ 를 분리할 만하다. ② 「치환을 이용한 극한 조건의 이동」(23-e8 · 23-15 · 30-30)은 위 유형과 자주 결합하지만 단독 출제도 되므로 별도 유형이 맞다. ③ 「그래프에서 읽는 극한」은 곱·합의 성질 적용(29-28, ★3)과 합성함수 접근 방향 판별(30-34, ★4)이 난도 차가 커서 반드시 두 유형으로 나눠야 한다.
- **통합해도 될 유형** — 0/0 · ∞/∞ · ∞−∞ · ∞×0 네 부정형의 필수예제·확인체크(24-e9 · 24-16 · 25-e10 · 25-17 · 26-e11 · 26-18 · 27-e12 · 27-19)는 모두 「부정형 판별 → 표준 조작 → 차수 비교」 한 골조이고 판정도 전부 절차형 ★2 로 같다. 카탈로그에서는 「부정형의 표준 처리」 한 유형에 부정형 종류를 속성으로 붙이는 편이 낫다.
- **base ★ 결정 시 주의** — 이 범위의 ★3 이상은 거의 전부 I-EQV 하나에 기대고 있다(14/18 라벨). 카탈로그를 세울 때 I-EQV 만으로 ★4 를 주는 슬롯(30-35)을 허용할지 먼저 정해야 위 분류 이슈 두 건(29-26 · 30-35)이 함께 해소된다.

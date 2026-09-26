---
name: mechanism-데이터-GN-CM2-30
description: 개념원리 공통수학2 30 유리식(1/1 · 250~258쪽 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 30 유리식
  unit_code: "30"
  part: "1/1"
  extract_range: "250~258쪽 · 250-e1~258-607"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학2 · 30 유리식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 250~258쪽, 30단원 유리식 28문항 전수를 다룬다. 구역은 「특강」(비례식과 유리식의 값 · 3문) → 「개념원리 익히기」(유리식의 정의·통분·약분·사칙연산 · 4문) → 「필수·발전 예제」(필수 예제 6개와 딸린 확인체크 9문 · 15문) → 「연습문제 STEP 1」(3문) → 「연습문제 STEP 2」(2문) → 「연습문제 실력 UP」(1문) 순이다.

개념원리 고등의 난이도 신호는 구역과 태그다. 「개념원리 익히기」의 확인체크는 개념 확인이라 ★1 출발, 「필수」 예제와 그 확인체크는 ★2 출발, 「특강」은 교육과정 심화라 ★2~3 출발, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발로 잡고 M_total·통찰로 ±1 조정했다. 이 단원의 벤더 예제 제목(type 필드)이 사실상 유형명이라 type_hint 의 기본 후보로 썼고, 골조가 다른 연습문제만 이름을 새로 붙였다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬), `insights[]`(단계별 통찰 라벨), `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 이 범위에는 그림 문항이 없다.

## 문항 데이터

### 특강

```yaml
- id: GN-CM2-250-e1
  page: 250
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강"
  summary: |
    0 이 아닌 세 실수에 대하여 ⑴ $x:y:z=3:4:5$ 일 때 $(x^2-y^2+z^2)/(x^2+y^2+z^2)$ ⑵ $(x+y)/12=(y+z)/13=(z+x)/5$ 일 때 $x:y:z$.
  category: '비례식을 비례상수 k 로 놓기 → 세 식을 더해 x+y+z 확보 → 각 변수 역산·대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 비례식을 12k, 13k, 5k 로 통합하고 모두 더해 2(x+y+z)=30k 라는 단일 관계를 만든 뒤 각 변수를 역산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "비례식이 주어졌을 때의 유리식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 x=3k 대입 한 줄. ⑵ 는 세 분수가 같다는 조건을 k 로 통합한 뒤 세 식을 더해 x+y+z 를 만드는 단계가 전부이고, 이 합을 못 떠올리면 미지수 3개 연립으로 길어진다.
    특강 구역(교육과정 심화) ★2~3 출발 · 조건 통합 통찰 1개(CON d2) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "비례식 = k → 세 식의 합 → x+y+z=15k → 각 변수 → 비 또는 식의 값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{9}{25}$ ⑵ $2:10:3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/250-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 비 3:4:5 와 분자의 부호 조합, ⑵ 의 분모 12·13·5 를 바꿀 수 있다. 제약: ⑵ 는 (세 분모의 합)/2 가 x+y+z 의 계수가 되므로 세 분모의 합이 짝수여야 정수 비가 나오고, 어느 변수도 0 이 되지 않아야 한다(x, y, z ≠ 0 조건 유지)."
    creative: "(1) 구하는 식을 (x+y+z)^2/(x^2+y^2+z^2) 같은 다른 대칭식으로 바꾸기(★3 유지) (2) 세 식이 같다는 조건 대신 두 식만 주면 합 트릭이 사라져 단순 연립 ★2 (3) 분모를 문자 a, b, c 로 일반화하면 Mₐ 상승 ★4."
```

```yaml
- id: GN-CM2-250-587
  page: 250
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    $(2x+y)/5=(x+2y)/7$ 일 때 $(xy-x^2)/(xy+y^2)$ 의 값 ($xy \ne 0$).
  category: '비례식 → 내항·외항의 곱으로 y=3x → 분자·분모 인수분해 후 대입'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "비례식이 주어졌을 때의 유리식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 분수가 같다는 조건에서 9x=3y, 즉 y=3x 하나만 얻으면 나머지는 대입이다. 구하는 식도 x(y-x)/(y(x+y)) 로 묶으면 바로 약분된다.
    착안이랄 것이 없는 표준 절차 · 통찰 0 · M_total 6 → 특강 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "7(2x+y)=5(x+2y) → y=3x → x(y-x)/(y(x+y)) 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/250-587.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 5·7 과 분자 2x+y, x+2y 의 계수를 바꿀 수 있다. 제약: 정리한 결과가 y=mx 꼴 단일 비여야 하고(두 일차식이 비례하면 안 됨), m 이 -1 이면 분모 xy+y^2 가 0 이 되므로 피한다."
    creative: "(1) 구하는 식을 (x^2+y^2)/(xy) 같은 대칭식으로(★2 유지) (2) x:y 를 직접 주면 대입만 남아 ★1 (3) 세 문자 비례식으로 늘리면 합 트릭이 필요해 ★3(I-CON)."
```

```yaml
- id: GN-CM2-250-588
  page: 250
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    $(x+y):(y+z):(z+x)=3:4:5$ 일 때 ⑴ $x:y:z$ ⑵ $(xy-yz+zx)/(x^2+y^2+z^2)$ 의 값.
  category: '연비를 3k, 4k, 5k 로 놓기 → 세 식을 더해 x+y+z 확보 → 각 변수 역산·대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 연비를 3k, 4k, 5k 로 두고 모두 더해 2(x+y+z)=12k 를 얻은 뒤 각 식을 빼서 x, y, z 를 하나씩 복원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "비례식이 주어졌을 때의 유리식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 것은 x, y, z 가 아니라 두 개씩의 합이므로 합의 합으로 x+y+z 를 만든 뒤 빼내는 길이 사실상 유일하다. e1 ⑵ 와 같은 골조이고 구하는 식만 대칭식으로 바뀌었다.
    특강 확인체크 ★2~3 출발 · 조건 통합 통찰 1개(CON d2) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "연비 = 3k, 4k, 5k → 합 2(x+y+z)=12k → x=2k, y=k, z=3k → 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $2:1:3$ ⑵ $\dfrac{5}{14}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/250-588.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연비 3:4:5 를 다른 세 수로, ⑵ 의 대칭식 부호 조합을 바꿀 수 있다. 제약: 세 수의 합이 짝수여야 x+y+z 가 k 의 정수배가 되고, 어느 성분도 0 이나 음수로 떨어지지 않게 (합)/2 보다 작은 수만 쓴다."
    creative: "(1) ⑵ 를 (x+y+z)^2/(xy+yz+zx) 로 바꾸기(★3 유지) (2) 합이 아니라 차 (x-y):(y-z):(z-x) 로 주면 합이 0 이 되어 되레 ★4 (3) x:y:z 만 묻고 끝내면 ★2."
```

### 개념원리 익히기

```yaml
- id: GN-CM2-251-589
  page: 251
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    보기 ㄱ~ㅂ 여섯 식 중 ⑴ 다항식 ⑵ 다항식이 아닌 유리식을 있는 대로 고르기.
  category: '유리식·다항식의 정의 → 약분 후 분모에 문자가 남는지로 판정'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식과 다항식의 구별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모가 상수면 다항식, 약분해도 분모에 문자가 남으면 다항식이 아닌 유리식이라는 정의 한 줄로 끝난다. ㅁ 은 약분해도 분모에 x-1 이 남는다는 점만 함정(T-표기).
    개념 확인 구역 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 식을 약분 → 분모에 문자가 남으면 다항식이 아닌 유리식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ ㄷ, ㄹ ⑵ ㄱ, ㄴ, ㅁ, ㅂ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/251-589.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 식의 계수와 분모의 인수를 바꿀 수 있다. 제약: 약분해도 분모에 문자가 남는 함정 항(ㅁ 꼴)을 최소 한 개는 남기고, 분모가 상수인 항과 문자인 항의 개수를 답이 갈리도록 섞는다."
    creative: "(1) 약분하면 다항식이 되는 항(x^2/x)을 넣어 함정을 강화하면 ★2(I-EQV d1) (2) 각 유리식이 정의되는 x 의 조건까지 묻기(★2) (3) 다항식의 개수만 묻는 객관식(★1 유지)."
```

```yaml
- id: GN-CM2-251-590
  page: 251
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ $1/(x^2-3x)$ 와 $1/(x-3)$ ⑵ $2/(x^2-1)$ 과 $3/(x^2+4x+3)$ 을 각각 통분하기.
  category: '분모 인수분해 → 최소공분모 찾기 → 각 분수에 부족한 인수 곱하기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식의 통분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 분모를 인수분해해 공통인수를 한 번씩만 넣은 최소공분모를 잡는 절차 그대로다. ⑵ 에서 (x+1)(x-1) 과 (x+3)(x+1) 의 공통인수 x+1 을 중복해 쓰지 않는 것만 확인하면 된다.
    개념 확인 구역 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분모 인수분해 → 최소공분모 → 분자에 같은 인수 곱하기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{x(x-3)}$, $\dfrac{x}{x(x-3)}$ ⑵ $\dfrac{2(x+3)}{(x+3)(x+1)(x-1)}$, $\dfrac{3(x-1)}{(x+3)(x+1)(x-1)}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/251-590.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모의 이차식 계수를 바꿀 수 있다. 제약: 두 분모가 공통인수를 정확히 하나만 갖도록 잡아야 최소공분모 연습이 되고(서로소면 단순 곱), 인수분해가 정수 범위에서 되도록 판별식을 완전제곱으로 유지한다."
    creative: "(1) 분모를 세 개로 늘려 최소공분모를 세 인수의 곱으로(★2) (2) 통분한 뒤 합까지 계산하게 하면 592 골조(★1~2) (3) 분모 중 하나를 -(x-3) 처럼 부호가 뒤집힌 꼴로 주면 T-부호 함정 추가 ★2."
```

```yaml
- id: GN-CM2-251-591
  page: 251
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ $(x^2-5x+6)/(x^2-7x+12)$ ⑵ $(x^4-y^4)/\{(x+y)(x^3-y^3)\}$ 을 약분하기.
  category: '분자·분모 인수분해 → 공통인수 소거'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식의 약분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑵ 는 x^4-y^4 을 두 번, x^3-y^3 을 한 번 인수분해해야 해 단계 수는 늘지만 쓰는 도구는 앞 단원 곱셈 공식뿐이고 순서도 고정이다.
    개념 확인 구역 ★1 출발 · 통찰 0 → +1 조건(통찰 2개 이상 또는 depth 3) 미해당 → ★1 유지. [분류 이슈] 3·4차 인수분해 부담만 보면 ★2 후보.
  tier: star_1
  mechanism_primary: "x^4-y^4=(x^2+y^2)(x+y)(x-y) · x^3-y^3=(x-y)(x^2+xy+y^2) → 공통인수 소거"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{x-2}{x-4}$ ⑵ $\dfrac{x^2+y^2}{x^2+xy+y^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/251-591.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 이차식은 공통근을 하나만 갖도록 상수항을 바꿀 수 있고, ⑵ 는 차수를 x^6-y^6 · x^3+y^3 조합으로 올릴 수 있다. 제약: 약분 후 남는 식이 더 이상 인수분해되지 않아야 답이 하나로 정해진다."
    creative: "(1) 약분 결과에 x=2 같은 값을 대입해 값까지 묻기(★1 유지) (2) 약분해 얻은 식이 상수가 되도록 설계하면 놀라움 추가 ★2 (3) 분모·분자를 서로 바꾼 꼴과 비교시키면 역수 관계 확인 ★2."
```

```yaml
- id: GN-CM2-251-592
  page: 251
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 유리식의 덧셈·뺄셈·곱셈·나눗셈 기본 계산 네 문항.
  category: '덧셈·뺄셈은 통분, 곱셈·나눗셈은 인수분해 후 약분(나눗셈은 역수 곱)'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식의 사칙연산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 문항 모두 한 번의 통분 또는 한 번의 약분으로 끝나는 사칙연산 확인이다. 소문항이 넷이라 계산량만 M_total 6 으로 올라간다.
    개념 확인 구역 ★1 출발 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "통분 또는 역수 곱 → 분자 정리 → 약분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{5x+12}{(x+2)(x+3)}$ ⑵ $\dfrac{-4x+7}{(x-1)(2x+1)}$ ⑶ $\dfrac{x+2}{2x^2}$ ⑷ $\dfrac{x(x-1)}{x+2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/251-592.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 분수의 계수와 분모의 일차인수를 바꿀 수 있다. 제약: ⑶⑷ 는 약분이 실제로 일어나도록 분자·분모에 같은 인수를 심어야 하고, ⑵ 의 뺄셈은 부호 실수를 유도하도록 분자를 양수 계수로 두는 편이 좋다."
    creative: "(1) 네 연산을 한 식에 섞어 한 문항으로 묶기(★2) (2) 결과가 상수가 되도록 계수를 맞추면 검산 동기가 생겨 ★2 (3) 분모의 차수를 분자보다 낮게 두면 254-e3 의 대분수 변형 골조로 넘어가 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-252-e1
  page: 252
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ $\dfrac{2x^2-3x+10}{x^3-8}+\dfrac{1}{x-2}-\dfrac{x-3}{x^2+2x+4}$ ⑵ 이차식 네 개의 곱셈 ⑶ 묶어 인수분해가 필요한 식의 나눗셈을 계산하기.
  category: '분모 인수분해(세제곱 공식·묶어 인수분해) → 최소공분모 통분 또는 역수 곱 → 약분'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식의 사칙연산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 x^3-8=(x-2)(x^2+2x+4) 를 최소공분모로 잡으면 분자가 2(x^2+2x+4) 로 떨어진다. ⑶ 은 x^2+xz-xy-yz 를 x(x+z)-y(x+z) 로 묶어 인수분해한다.
    쓰는 도구가 모두 앞 단원 인수분해 공식이고 순서도 통분 → 약분으로 고정이라 절차형. 필수 예제 ★2 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "분모 인수분해 → 최소공분모 통분(또는 역수 곱) → 분자 전개·정리 → 약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{2}{x-2}$ ⑵ $\dfrac{(x-1)^2}{(x+2)(x+4)}$ ⑶ $x^2-xy+y^2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/252-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분자 계수와 세제곱 공식의 밑(8 → 27, 64), ⑵ 의 네 이차식 상수항, ⑶ 의 y·z 배치를 바꿀 수 있다. 제약: ⑴ 은 최종 분자가 x^2+2x+4 의 상수배로 떨어지도록 계수를 맞춰야 답이 간단해지고, ⑵ 는 약분 후 남는 인수가 중복되게 상수항을 고른다."
    creative: "(1) ⑴ 의 세제곱 분모를 x^3+8 로 바꿔 부호 함정 추가(★2 유지) (2) 결과가 상수 1 이 되도록 ⑵ 를 설계하면 593 ⑵ 골조 (3) 계산 결과에 조건 x=3 을 대입해 값을 묻는 형태로 바꾸면 ★2."
```

```yaml
- id: GN-CM2-252-593
  page: 252
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ 분모가 서로 다른 세 유리식의 덧셈·뺄셈 ⑵ 유리식 세 개의 곱셈·나눗셈이 섞인 계산.
  category: '분모 인수분해 → 최소공분모 통분 또는 역수 곱 → 약분'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식의 사칙연산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 세 분모가 모두 (x+2)(x+1)(x-1) 의 부분곱이라 최소공분모가 바로 보인다. ⑵ 는 여섯 개 이차식을 전부 인수분해하면 모든 인수가 짝을 이뤄 1 이 된다.
    도구·순서가 고정된 절차형 · 필수 예제 딸림 확인체크 ★2 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "여섯 이차식 인수분해 → 통분 또는 역수 곱 → 인수끼리 약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{2x+3}{(x+2)(x-1)}$ ⑵ $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/252-593.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분자 일차식 계수와 ⑵ 의 여섯 이차식 인수 배치를 바꿀 수 있다. 제약: ⑵ 는 모든 일차인수가 짝을 이뤄야 답이 1 로 떨어지므로 인수 목록을 먼저 정하고 이차식을 만든다."
    creative: "(1) ⑵ 의 답이 1 이 아니라 남는 인수 하나가 되게 하면 검산 부담이 늘어 ★2 유지 (2) ⑴ 을 항등식 미정계수 문제로 바꾸면 253 계열 ★2 (3) 분모에 세제곱 인수를 섞으면 252-e1 골조."
```

```yaml
- id: GN-CM2-253-e2
  page: 253
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    $x \ne 1$, $x \ne 2$ 인 모든 실수 x 에 대하여 $\dfrac{a}{x-1}+\dfrac{b}{x-2}=\dfrac{3x}{x^2-3x+2}$ 가 성립할 때 상수 a, b.
  category: '양변에 분모를 곱해 다항식 항등식으로 → 수치대입 또는 계수비교'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식과 항등식(미정계수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^2-3x+2=(x-1)(x-2) 를 양변에 곱하면 a(x-2)+b(x-1)=3x 라는 다항식 항등식이 되고, x=1·x=2 대입 또는 계수비교로 끝난다.
    분모를 없애 항등식으로 바꾸는 표준 절차이고 두 길의 길이가 비슷해 전략 분기로 보지 않음. 필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "분모 (x-1)(x-2) 곱하기 → a(x-2)+b(x-1)=3x → x=1, 2 대입 → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-3$, $b=6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/253-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 분자 3x 의 계수와 분모의 두 근 1, 2 를 바꿀 수 있다. 제약: 두 근이 서로 달라야 수치대입이 한 번에 통하고, 결과 a, b 가 정수가 되도록 분자를 분모의 근에서 정수값을 갖게 잡는다."
    creative: "(1) 분모를 세 인수로 늘리면 595 골조(★2) (2) 분모에 이차 기약식을 넣으면 594 처럼 계수비교가 강제돼 ★2 (3) a, b 를 구한 뒤 a+b 나 ab 만 묻게 바꾸면 자기검산이 줄어 ★2 유지."
```

```yaml
- id: GN-CM2-253-594
  page: 253
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    $\dfrac{3x}{x^3-1}=\dfrac{a}{x-1}+\dfrac{bx+a}{x^2+x+1}$ 이 항등식일 때 ab 의 값 (a, b 는 상수).
  category: '세제곱 공식으로 분모 인수분해 → 분모 곱해 항등식 → 계수비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식과 항등식(미정계수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^3-1=(x-1)(x^2+x+1) 로 놓고 양변에 곱하면 a(x^2+x+1)+(bx+a)(x-1)=3x. 두 번째 분자에도 a 가 쓰여 미지수가 둘뿐이라 계수비교가 자연스럽다(x^2 항과 x 항 두 식).
    이차 기약분모라 수치대입만으로는 끝나지 않지만 여전히 표준 절차 · 통찰 0 · M_total 7 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "x^3-1 인수분해 → 분모 곱하기 → x^2·x 계수비교 → a, b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/253-594.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 분자 3x 의 계수와 세제곱 분모의 밑(x^3-1 → x^3-8, x^3+1)을 바꿀 수 있다. 제약: 우변 두 번째 분자를 bx+a 로 묶어 둔 설계 때문에 상수항이 저절로 상쇄되니, 분자를 bx+c 로 바꾸면 미지수가 셋이 되어 연립이 늘어난다."
    creative: "(1) 분자를 bx+c 로 바꿔 미지수 3개로 늘리면 ★3 (2) a, b 를 구한 뒤 부분분수로 되돌려 값을 계산하게 하면 255 계열과 연결 ★3 (3) x^3+1 로 바꾸면 부호 함정 추가 ★2 유지."
```

```yaml
- id: GN-CM2-253-595
  page: 253
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    $\dfrac{2}{x}+\dfrac{a}{x-1}+\dfrac{b}{x-2}=\dfrac{-x+4}{x(x-1)(x-2)}$ 가 항등식일 때 a-b 의 값 (a, b 는 상수).
  category: '양변에 x(x-1)(x-2) 곱하기 → 근 대입으로 a, b 분리 결정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리식과 항등식(미정계수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 곱하면 2(x-1)(x-2)+ax(x-2)+bx(x-1)=-x+4. x=1 을 넣으면 a 만, x=2 를 넣으면 b 만 남아 한 번에 갈린다.
    분모의 근이 모두 일차라 수치대입이 그대로 통하는 표준 절차 · 통찰 0 · M_total 7 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "분모 x(x-1)(x-2) 곱하기 → x=1 대입 → a · x=2 대입 → b → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/253-595.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 분자 -x+4 의 계수와 분모의 세 근 0, 1, 2 를 바꿀 수 있다. 제약: 세 근이 서로 달라야 대입 한 번에 한 미지수씩 떨어지고, 이미 값이 정해진 첫 항(2/x)과 맞도록 우변 분자의 x=0 값을 2(0-1)(0-2)=4 에 고정해야 한다."
    creative: "(1) 첫 항의 2 도 미지수로 돌려 셋을 모두 구하게 하면 ★2 유지 (2) a, b 를 구한 뒤 원래 분수의 합을 다시 계산시키면 부분분수 골조로 이어져 ★3 (3) 분모 근 중 하나를 중근으로 만들면 대입만으로 안 돼 ★3."
```

```yaml
- id: GN-CM2-254-e3
  page: 254
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ 분자의 차수가 분모 이상인 두 유리식의 차 ⑵ 같은 꼴 네 유리식의 합·차를 계산하기.
  category: '각 항을 (몫)+(나머지/분모) 로 변형 → 상수 상쇄 → 상쇄되는 짝끼리 통분'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가분수식을 (다항식)+(진분수식) 꼴로 동치 변환해 통분해야 할 분자의 차수를 낮춤"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 항을 한꺼번에 통분(4차 분모)하는 대신 상쇄가 일어나는 짝(첫째-둘째, 셋째-넷째)을 골라 두 번에 나눠 계산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "(분자의 차수)≥(분모의 차수)인 유리식의 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑵ 를 그대로 통분하면 분모가 4차, 분자가 4차가 되어 손을 못 댄다. 각 항을 1+(상수/분모) 꼴로 낮추면 상수가 상쇄되고 남은 진분수식을 짝지어 두 번만 통분하면 된다.
    분자 차수 낮추기(EQV d2)와 짝짓기 선택(SC d1) 두 단계 · 필수 예제 ★2 출발 · 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "가분수식 → (몫)+(나머지/분모) → 상수항 상쇄 → 상쇄 짝끼리 통분 → 합치기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{-3x-1}{(x+1)(x-1)}$ ⑵ $\dfrac{-8(2x-3)}{x(x+1)(x-3)(x-4)}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/254-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 분수의 분모 일차식과 분자 상수항을 바꿀 수 있다. 제약: 대분수 변형 뒤 나오는 상수(몫)들이 서로 상쇄되도록 네 항의 몫 합을 0 으로 맞춰야 골조가 유지되고, 남는 진분수식의 분자 상수는 같은 값으로 두면 짝짓기가 깔끔하다."
    creative: "(1) 분모를 (x+1)(x+2)(x+3)(x+4) 등차 배치로 바꾸면 258-603 골조(★3 유지) (2) 결과의 계수 a, b, c 를 묻는 형태로 바꾸면 ★3 (3) 몫이 상쇄되지 않게 설계하면 마지막에 다항식이 남아 계산만 늘고 ★3 유지(질 저하 주의)."
```

```yaml
- id: GN-CM2-254-596
  page: 254
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ 분자의 차수가 분모보다 높은 두 유리식의 차 ⑵ 분자·분모가 한 칸씩 어긋난 네 유리식의 합·차를 계산하기.
  category: '각 항을 (몫)+(나머지/분모) 로 변형 → 상수 상쇄 → 상쇄되는 짝끼리 통분'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 항을 1-(1/분모) 또는 (다항식)+(진분수식) 꼴로 낮춰 상수부를 분리"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "남은 1/(x+k) 네 항을 분모 차가 2 인 짝(x+2 와 x+4, x+6 과 x+8)으로 묶어 두 번만 통분"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "(분자의 차수)≥(분모의 차수)인 유리식의 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e3 와 같은 골조. ⑵ 는 네 항이 모두 1-(1/(x+k)) 로 떨어져 상수 1 들이 상쇄되고, 남은 네 개의 1/(x+k) 를 어떻게 묶느냐로 계산량이 크게 갈린다.
    변형(EQV d2)+짝짓기(SC d1) 2단계 · 확인체크 ★2 출발 · 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "각 항 = (상수)-(1/(x+k)) → 상수 상쇄 → 분모 차가 같은 짝끼리 통분 → 합치기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{-3x}{(x+1)(x-2)}$ ⑵ $\dfrac{4(x^2+10x+28)}{(x+2)(x+4)(x+6)(x+8)}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/254-596.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 분모 등차수열 간격(2)과 분자와 분모의 차(1)를 바꿀 수 있다. 제약: 네 항의 몫이 상쇄되도록 부호를 +,+,-,- 로 배치하고, 분자와 분모의 차를 모든 항에서 같게 두어야 1/(x+k) 꼴로 통일된다."
    creative: "(1) 항 수를 여섯으로 늘리면 짝짓기 부담이 커져 ★4 (2) 결과가 0 이 되도록 분모 배치를 대칭으로 잡으면 놀라움이 생겨 ★3 유지 (3) 분자와 분모의 차를 항마다 다르게 하면 부분분수 계수 보정이 필요해 255 계열과 결합 ★4."
```

```yaml
- id: GN-CM2-255-e4
  page: 255
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ 분모가 이웃한 두 수의 곱인 네 유리식의 합 ⑵ $1/(1 \times 2)+1/(2 \times 3)+\cdots+1/(9 \times 10)$ 의 값.
  category: '부분분수 분해 → 이웃 항 상쇄(텔레스코핑) → 양 끝 항만 남기기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/(AB) 를 (1/(B-A))(1/A-1/B) 로 동치 변환해 덧셈을 뺄셈의 연쇄로 바꿈"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분해한 항들이 이웃끼리 상쇄되어 처음과 끝 두 항만 남는 구조를 알아보고 중간 계산을 통째로 건너뜀"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "부분분수로의 변형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    네 항(또는 아홉 항)을 통분하려 들면 분모가 폭발한다. 1/(AB)=(1/(B-A))(1/A-1/B) 로 쪼개면 중간이 모두 지워지고 양 끝만 남는다.
    분해(EQV d2)와 상쇄 구조 인식(PD d1) 2단계 · 필수 예제 ★2 출발 · 통찰 2개로 +1 → ★3. 이 단원에서 가장 많이 재사용되는 골조.
  tier: star_3
  mechanism_primary: "1/(AB) → (1/(B-A))(1/A-1/B) → 이웃 상쇄 → 양 끝 두 항만 통분"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{8}{x(x+8)}$ ⑵ $\dfrac{9}{10}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/255-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분모 간격(2)과 분자(2), 항의 개수를 바꿀 수 있고 ⑵ 의 마지막 항을 1/(n(n+1)) 로 늘릴 수 있다. 제약: 분자가 분모 두 인수의 차와 같아야 계수 보정 없이 1/A-1/B 로 떨어지고, 이웃 항의 분모가 한 인수씩 공유해야 상쇄가 이어진다."
    creative: "(1) 분자를 분모 인수의 차와 다르게 두면 계수 보정 단계가 추가돼 ★3 유지(597 ⑴ 골조) (2) 합이 0 이 되도록 마지막에 큰 분수를 하나 빼면 ★3 (3) 항의 개수를 n 으로 일반화해 식으로 답하게 하면 Mₐ 상승 ★4."
```

```yaml
- id: GN-CM2-255-597
  page: 255
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ 분모가 인수분해되는 네 유리식의 합·차 ⑵ $1/(1 \times 3)+1/(3 \times 5)+\cdots+1/(9 \times 11)$ 의 값.
  category: '분모 인수분해 → 부분분수 분해(분자 보정) → 이웃 항 상쇄'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모를 x(x+1), (x+1)(x+3), (x+3)(x+6), x(x+6) 으로 인수분해한 뒤 분자가 두 인수의 차와 같도록 보정해 1/A-1/B 로 분해"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분해한 여섯 항이 서로 짝을 이뤄 모두 지워지는 구조를 알아보고 ⑴ 의 답을 0 으로 확정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "부분분수로의 변형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e4 와 같은 골조에 분자 보정이 한 겹 붙었다. ⑴ 은 앞 세 항을 분해해 얻은 1/x-1/(x+6) 이 마지막 항 -6/(x(x+6)) 과 정확히 상쇄되어 0 이 된다.
    분해(EQV d2)+상쇄 구조(PD d1) · 확인체크 ★2 출발 · 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "분모 인수분해 → 분자 보정해 1/A-1/B 분해 → 이웃 상쇄 → 남는 항만 계산"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $0$ ⑵ $\dfrac{5}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/255-597.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분자 1, 2, 3, 6 과 분모 상수 1, 3, 6 의 조합, ⑵ 의 간격(2)과 항의 개수를 바꿀 수 있다. 제약: 각 분자가 분모 두 인수의 차와 같아야 보정 없이 떨어지고, ⑴ 이 0 이 되려면 마지막 항의 분모가 첫 인수와 끝 인수의 곱이어야 한다."
    creative: "(1) 마지막 항을 빼지 않고 더하면 답이 2/x 꼴로 남아 ★3 유지 (2) 답이 0 임을 먼저 알려 주고 빠진 분자를 구하게 하면 역방향(I-BW) ★3 (3) ⑵ 를 일반항 1/((2k-1)(2k+1)) 의 n 항 합으로 일반화하면 258-605 골조 ★3."
```

```yaml
- id: GN-CM2-255-598
  page: 255
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    $\dfrac{2}{x(x-2)}+\dfrac{4}{x(x+4)}+\dfrac{6}{(x+4)(x+10)}=\dfrac{a}{(x+b)(x+c)}$ 가 항등식일 때 $a+b+c$ (a, b, c 는 상수).
  category: '세 항을 부분분수 분해 → 중간 항 상쇄 → 남은 두 항을 다시 한 분수로 합쳐 계수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 항의 분자가 분모 두 인수의 차와 같음을 보고 1/(x-2)-1/x, 1/x-1/(x+4), 1/(x+4)-1/(x+10) 로 분해"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "가운데 1/x 와 1/(x+4) 가 지워져 1/(x-2)-1/(x+10) 만 남는 상쇄 구조를 이용"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "부분분수로의 변형(미정계수 결정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자 2, 4, 6 이 각각 분모 두 인수의 차와 같도록 설계돼 있어 보정 없이 바로 분해된다. 상쇄 후 남는 두 항을 다시 통분하면 12/((x-2)(x+10)) 이 되고 a, b, c 를 읽어 낸다.
    분해(EQV d2)+상쇄(PD d1) 에 미정계수 읽기가 덧붙음 · 확인체크 ★2 출발 · 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "각 항 부분분수 분해 → 가운데 항 상쇄 → 1/(x-2)-1/(x+10) → 12/((x-2)(x+10)) → a+b+c"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/255-598.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 마디 -2, 0, 4, 10 을 다른 증가 수열로 바꿀 수 있다. 제약: 각 항의 분자를 반드시 그 마디 차와 같게 맞춰야 하고, b, c 가 정수로 읽히도록 양 끝 마디를 정수로 둔다. a 는 (끝 마디)-(첫 마디) 로 자동 결정된다."
    creative: "(1) 항을 다섯으로 늘려 중간 상쇄를 길게 하면 ★3 유지 (2) a 만 주고 b+c 를 묻거나 역으로 b, c 를 주고 a 를 묻게 하면 역방향 ★3 (3) 분자를 마디 차와 다르게 두면 계수 보정이 필요해 ★4."
```

```yaml
- id: GN-CM2-256-e5
  page: 256
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ 계단식 번분수 $1-\dfrac{1}{1-\dfrac{1}{1-x}}$ ⑵ 분자·분모가 모두 분수식인 번분수를 간단히 하기.
  category: '번분수는 안쪽(아래쪽)부터 한 분수로 정리 → 나눗셈을 역수 곱으로 → 한 층씩 올라가며 약분'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모 또는 분자가 분수식인 유리식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 안쪽 1-1/(1-x) 를 -x/(1-x) 로 정리하고 역수를 취해 한 층씩 올라가면 된다. ⑵ 는 분자·분모에 (1-x)(1+x) 를 곱해 한 번에 정리하는 길도 같은 길이다.
    층을 따라 내려갔다 올라오는 순서가 고정된 표준 절차 · 통찰 0 · M_total 6 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "안쪽 분수부터 한 분수로 정리 → 역수 곱 → 바깥 층으로 올라가며 약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{x}$ ⑵ $\dfrac{1}{x}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/256-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 각 층 상수 1 과 ⑵ 의 1±x 를 다른 일차식으로 바꿀 수 있다. 제약: 층마다 분모가 0 이 되는 x 가 늘어나므로 최종식이 간단해지도록 상수를 고르고(답이 1/x 처럼 떨어지면 좋음), 분모가 0 이 되지 않는 조건을 함께 명시한다."
    creative: "(1) 층을 하나 더 쌓으면 계산만 늘어 ★2 유지 (2) 조건식 x^2-3x+1=0 을 함께 주면 258-606 처럼 각 층이 되풀이돼 ★3 (3) 결과를 주고 안쪽 상수를 되찾게 하면 역방향 ★3."
```

```yaml
- id: GN-CM2-256-599
  page: 256
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴~⑶ 분자·분모가 분수식인 번분수 세 개를 각각 간단히 하기.
  category: '분자·분모에 공통분모를 곱해 단층 분수로 → 인수분해 후 약분'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모 또는 분자가 분수식인 유리식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 문항 모두 분자·분모에 같은 공통분모를 곱해 층을 없애면 끝난다. ⑶ 만 정리 후 x^2-2x-8=(x+2)(x-4) 인수분해가 한 번 더 붙는다.
    도구·순서 고정 · 통찰 0 · M_total 6 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "분자·분모에 공통분모 곱하기 → 단층 분수 → 인수분해·약분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{x+4}{x+2}$ ⑵ $\dfrac{x-2y}{x}$ ⑶ $\dfrac{x+1}{x(x-4)}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/256-599.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분모 마디 2, 3, 4 와 ⑶ 의 상수 2, 3, 5 를 바꿀 수 있다. 제약: ⑴ 은 이웃 마디 차가 모두 같아야 분자·분모가 같은 상수로 약분되고, ⑶ 은 정리한 이차식이 인수분해되도록 상수항을 고른다."
    creative: "(1) ⑵ 를 x, y 대칭식으로 바꾸면 같은 골조 ★2 (2) 두 번분수의 합으로 묶으면 258-604 골조 ★2 (3) 층을 계단식으로 쌓으면 e5 ⑴ 골조 ★2."
```

```yaml
- id: GN-CM2-256-600
  page: 256
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    $\dfrac{17}{72}=\dfrac{1}{a+\dfrac{1}{b+\dfrac{1}{c}}}$ 를 만족시키는 자연수 a, b, c 에 대하여 $a+b+c$.
  category: '역수를 취해 대분수로 → (정수부)+(진분수) 분리 → 다시 역수 → 반복'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "완성된 연분수 값 17/72 에서 거꾸로 역수와 정수부 분리를 되풀이해 a, b, c 를 한 겹씩 복원"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a, b, c 가 자연수라는 조건 때문에 각 단계의 정수부가 나눗셈의 몫으로 유일하게 결정됨을 이용"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "연분수 꼴 등식과 자연수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞에서부터 계산하는 문제가 아니라 완성된 값에서 층을 벗겨 내는 문제다. 72/17=4+4/17 → 17/4=4+1/4 처럼 역수·정수부 분리를 반복하면 세 수가 차례로 결정된다.
    자연수 조건이 정수부를 유일하게 만드는 점까지 읽어야 해 역방향 통찰 1개(BW d2)+조건 해석(EQV d1).
    [분류 이슈] 확인체크는 보통 ★2 지만 역방향 연분수 전개 착안이 필요해 ★3 으로 둔다.
  tier: star_3
  mechanism_primary: "역수 72/17 → 4+4/17 → 17/4 → 4+1/4 → a=b=c=4 → 12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/256-600.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "17/72 을 다른 기약분수로 바꿀 수 있다. 제약: 자연수 a, b, c 가 나오려면 분모/분자의 유클리드 호제법이 정확히 세 번에 끝나야 하고(몫이 셋), 마지막 나머지가 1 이어야 c 가 자연수로 떨어진다."
    creative: "(1) 층을 네 겹으로 늘려 a+b+c+d 를 묻기(★3 유지) (2) a, b, c 를 주고 분수 값을 계산하게 하면 순방향 번분수라 ★2 (3) 자연수 조건을 빼면 해가 무수히 많아져 조건의 역할을 묻는 서술형 ★4."
```

```yaml
- id: GN-CM2-257-e6
  page: 257
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ $x^2+4x+1=0$ 일 때 $x^3+1/x^3$ ⑵ 0 이 아닌 세 실수가 $a+b+c=0$ 일 때 $a(1/b+1/c)+b(1/c+1/a)+c(1/a+1/b)$ 의 값.
  category: '조건식을 x+1/x 꼴로 변환 → 세제곱 공식 / 구하는 식을 재배열해 a+b+c=0 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x ≠ 0 을 확인하고 조건식 양변을 x 로 나누어 x+1/x=-4 라는 곧바로 쓸 수 있는 형태로 변환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 식을 (a+c)/b+(a+b)/c+(b+c)/a 로 다시 묶어 a+b+c=0 을 각 분자에 바로 대입"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "조건이 주어졌을 때의 유리식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 소문항 모두 조건을 그대로 쓰지 못하고 한 번 옮겨야 한다. ⑴ 은 x 로 나눠 x+1/x 를 만들고 세제곱 공식으로 내려가고, ⑵ 는 항을 다시 묶어야 a+b+c=0 이 보인다.
    조건 동치 변환 두 단계(EQV d2 ×2) · 필수 예제 ★2 출발 · 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "조건식 ÷x → x+1/x=-4 → 세제곱 공식 / 항 재배열 → a+b+c=0 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-52$ ⑵ $-3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/257-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 일차항 계수 4 를 바꿀 수 있다. 제약: 상수항이 1 이어야 x 로 나눴을 때 x+1/x 가 나오고, x^2+kx+1=0 이 실근을 가지려면 |k| ≥ 2 여야 한다(실수 조건을 붙일 때)."
    creative: "(1) 묻는 식을 x^2+1/x^2 나 x^4+1/x^4 로 바꾸기(★3 유지) (2) 조건을 x-1/x=k 로 주면 부호 함정 추가 ★3 (3) ⑵ 에서 a+b+c=0 대신 ab+bc+ca=0 을 주면 258-607 골조로 올라가 ★4."
```

```yaml
- id: GN-CM2-257-601
  page: 257
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수·발전 예제"
  summary: |
    ⑴ $2x^2-5x-2=0$ 일 때 $8x^3-4x^2-4/x^2-8/x^3$ ⑵ $x+y+xy=0$ 일 때 세 분수식의 합 ($xy \ne 0$).
  category: '조건식을 x-1/x 꼴로 변환 → 구하는 식을 대칭 묶음으로 / (1+x)(1+y)=1 을 이용'
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건식을 x 로 나눠 x-1/x=5/2 를 얻고, 구하는 식을 8(x^3-1/x^3)-4(x^2+1/x^2) 로 묶어 공식으로 내려보냄"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(1+x)(1+y)=1+x+y+xy 이므로 조건에서 그 값이 1 임을 알아채 첫 항의 분모를 상수로 바꿈"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "조건이 주어졌을 때의 유리식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 e6 ⑴ 과 같은 변환이지만 부호가 x-1/x 쪽이고 두 덩어리로 묶어야 해 계산이 무겁다. ⑵ 는 (1+x)(1+y)=1 을 보는 순간 첫 항이 1 이 되고 나머지 두 항은 x+y=-xy 로 정리된다.
    조건 변환 두 단계(EQV d2 ×2) · 확인체크 ★2 출발 · 통찰 2개로 +1 → ★3.
    [분류 이슈] M_total 9 로 계산 부담이 이 파일에서 가장 크다(★3/★4 경계). 도구가 모두 앞 예제와 같아 ★3 으로 두고 대상층만 중상위권으로 올림.
  tier: star_3
  mechanism_primary: "조건식 ÷x → x-1/x=5/2 → 세제곱·제곱 공식 / (1+x)(1+y)=1 → x+y=-xy 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $152$ ⑵ $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/257-601.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수 2, -5, -2 와 구하는 식의 배수 8, 4 를 바꿀 수 있다. 제약: 상수항이 이차항 계수의 -1 배여야 x 로 나눴을 때 x-1/x 가 깔끔히 나오고, 구하는 식의 계수는 (x-1/x) 의 세제곱·제곱 전개와 맞아떨어지게 8, 4 처럼 2 의 거듭제곱으로 둔다."
    creative: "(1) ⑵ 의 조건을 xy+yz+zx=0 처럼 세 문자로 확장하면 607 골조 ★4 (2) ⑴ 에서 x^2+1/x^2 만 묻게 줄이면 ★2 (3) 조건과 답을 바꿔 주고 계수를 되찾게 하면 역방향 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-258-602
  page: 258
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\dfrac{1}{2-x}+\dfrac{1}{2+x}+\dfrac{4}{4+x^2}+\dfrac{32}{16+x^4}$ 를 계산하기.
  category: '앞에서부터 두 항씩 더해 합·차의 곱(제곱차) 분모를 만들며 차수를 올려 감'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "앞 두 항을 더하면 4/(4-x^2) 이 되고 다음 항과 더하면 32/(16-x^4) 이 되는, 분모가 제곱차로 배가되는 연쇄 패턴을 발견해 순서대로만 합침"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곱의 차를 이용한 유리식의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 항을 한꺼번에 통분하면 분모가 8차가 되어 손을 못 댄다. 앞에서부터 두 개씩만 합치면 (a-b)(a+b)=a^2-b^2 가 되풀이되어 세 번 만에 끝난다.
    패턴 발견 통찰 1개(PD d2) · STEP 1 출발 ★2 · +1 조건(통찰 2개 이상 또는 depth 3) 미해당 → ★2 유지.
    [분류 이슈] 전체 통분을 시도하면 막히므로 학생 체감은 ★3 에 가깝다.
  tier: star_2
  mechanism_primary: "1/(2-x)+1/(2+x)=4/(4-x^2) → +4/(4+x^2)=32/(16-x^4) → +32/(16+x^4)=1024/(256-x^8)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1024}{256-x^8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/258-602.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 를 다른 수(3 → 1/(3-x)+1/(3+x)+6/(9+x^2)+…)로 바꾸거나 항을 하나 더 늘릴 수 있다. 제약: 각 항의 분자가 직전 단계 분자의 2 배여야 연쇄가 유지되고, 분모는 앞 단계 분모의 켤레여야 한다."
    creative: "(1) 항을 다섯 개로 늘리면 패턴 신뢰가 더 필요해 ★3 (2) 마지막 항을 빼 두고 식이 1024/(256-x^8) 이 되게 하는 항을 찾게 하면 역방향 ★3 (3) x=1 처럼 수를 대입해 값을 묻게 하면 패턴 없이도 풀려 ★1."
```

```yaml
- id: GN-CM2-258-603
  page: 258
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    분자 차수가 분모와 같은 네 유리식의 합·차가 $\dfrac{ax^2+bx+c}{(x+1)(x+2)(x+3)(x+4)}$ 일 때 abc 의 값 (a, b, c 는 상수).
  category: '각 항을 (상수)+(1/(x+k)) 로 변형 → 상수 상쇄 → 짝지어 통분해 분자 계수 읽기'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(2x+3)/(x+1)=2+1/(x+1) 처럼 각 항의 분자 차수를 낮춰 상수부와 진분수부로 분리"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상수 2-3+3-2=0 이 지워진 뒤 남은 네 항을 (x+1, x+2), (x+3, x+4) 짝으로 묶어 두 번만 통분"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "(분자의 차수)≥(분모의 차수)인 유리식의 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    254-e3 골조를 미정계수 형태로 되물은 문제다. 대분수 변형으로 상수를 지우면 1/(x+1)-1/(x+2)+1/(x+3)-1/(x+4) 만 남고, 짝지어 통분하면 분자가 2x^2+10x+14 로 읽힌다.
    변형(EQV d2)+짝짓기(SC d1) · STEP 1 출발 ★2 · 통찰 2개로 +1 → ★3.
  tier: star_3
  mechanism_primary: "각 항 = (상수)+(1/(x+k)) → 상수 상쇄 → 1/((x+1)(x+2))+1/((x+3)(x+4)) → 통분 → a, b, c"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$280$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/258-603.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 분수의 분자 계수(2, 3, 3, 2)와 분모 마디 1, 2, 3, 4 를 바꿀 수 있다. 제약: 분자를 (몫)(x+k)+1 꼴로 설계해야 진분수부가 1/(x+k) 로 통일되고, 몫들의 부호 합이 0 이어야 상수가 상쇄된다."
    creative: "(1) a+b+c 나 a 만 묻게 바꾸면 ★3 유지 (2) 상수가 상쇄되지 않게 하면 답이 대분수 꼴이 되어 계산만 늘고 ★3 (3) 분모 마디를 등차가 아닌 1, 2, 4, 8 로 두면 짝짓기 선택이 어려워져 ★4."
```

```yaml
- id: GN-CM2-258-604
  page: 258
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    분자·분모가 각각 두 분수의 차와 합인 번분수 두 개의 합을 계산하기.
  category: '각 번분수의 분자·분모에 공통분모를 곱해 단층 분수로 → 통분'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분모 또는 분자가 분수식인 유리식의 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 번분수의 분자·분모에 (x-2)(x+3) 또는 (x+2)(x-3) 을 곱하면 5/(2x+1) 과 -5/(2x-1) 로 단번에 내려오고, 마지막에 한 번 통분한다.
    번분수 정리 표준 절차만 두 번 반복 · 통찰 0 · M_total 6 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "분자·분모에 공통분모 곱하기 → 5/(2x+1), -5/(2x-1) → 통분 → -10/((2x+1)(2x-1))"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{-10}{(2x+1)(2x-1)}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/258-604.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 일차식의 상수 -2, 3, 2, -3 을 바꿀 수 있다. 제약: 두 번분수가 부호만 다른 꼴이 되도록 상수를 대칭으로 두어야 마지막 통분이 간단해지고, 분모 합이 0 이 되지 않아야 한다."
    creative: "(1) 두 번분수의 차로 바꾸면 상쇄되어 0 이 되게 설계할 수 있어 ★2 유지 (2) 항을 셋으로 늘리면 계산만 늘고 ★2 (3) 결과를 주고 빠진 상수를 찾게 하면 역방향 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-258-605
  page: 258
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\dfrac{4x^2-1}{3}$ 일 때 $\dfrac{1}{f(1)}+\dfrac{1}{f(2)}+\cdots+\dfrac{1}{f(20)}$ 의 값.
  category: '일반항을 부분분수로 분해 → 20개 항의 이웃 상쇄 → 양 끝만 남기기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/f(k)=3/((2k-1)(2k+1)) 로 쓰고 분모 두 인수의 차가 2 이므로 (3/2)(1/(2k-1)-1/(2k+1)) 로 분해"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "20 개 항을 다 쓰지 않고 이웃이 상쇄되어 1 과 1/41 만 남는다는 구조를 일반항 수준에서 파악"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "부분분수로의 변형(텔레스코핑 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 를 거쳐 일반항을 먼저 세운 뒤 부분분수로 내려가는 한 겹이 더 있지만, 내려간 뒤는 255-e4 와 같은 상쇄다. 항이 20 개라 직접 더하는 길은 사실상 막혀 있다.
    분해(EQV d2)+상쇄 구조(PD d2) 2개로 STEP 2 출발 ★3 에서 +1 후보였으나, 부분분수·텔레스코핑은 이 단원에서 e4·597·598 로 이미 반복 노출된 표준 도구라 감쇠를 적용해 ★3 유지.
  tier: star_3
  mechanism_primary: "1/f(k)=3/((2k-1)(2k+1)) → (3/2)(1/(2k-1)-1/(2k+1)) → 이웃 상쇄 → (3/2)(1-1/41)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{60}{41}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/258-605.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수 4, -1, 3 과 마지막 항 번호 20 을 바꿀 수 있다. 제약: 분자 4x^2-1 이 (2x-1)(2x+1) 처럼 인수분해되어야 부분분수가 되고, 분모 상수 3 은 계수 보정 (3/2) 을 정수·간단한 분수로 만드는 값으로 고른다."
    creative: "(1) f(x)=x^2+x 처럼 다른 이차식으로 바꾸면 간격이 1 이 되어 보정이 사라져 ★3 유지 (2) 합이 특정 값이 되는 마지막 번호 n 을 찾게 하면 역방향 ★4 (3) 합을 n 에 대한 식으로 일반화하면 Mₐ 상승 ★4."
```

```yaml
- id: GN-CM2-258-606
  page: 258
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $x^2-3x+1=0$ 일 때 네 층짜리 번분수 $3-\dfrac{1}{3-\dfrac{1}{3-\dfrac{1}{3-x}}}$ 와 같은 것 고르기(5지선다).
  category: '조건을 3-x=1/x 로 동치 변환 → 각 층이 같은 값으로 되풀이됨을 이용'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조건식을 x 로 나눠 x+1/x=3, 즉 3-x=1/x 로 바꾸면 맨 안쪽 층이 1/x 가 되고 그 위층도 같은 값이 되풀이됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건이 주어졌을 때의 번분수식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    층을 아래부터 실제로 정리해도 풀리지만 3-x=1/x 를 보면 3-1/(3-x)=3-x=1/x 가 되어 네 층이 한 줄로 무너진다.
    조건 동치 변환 통찰 1개(EQV d2) · STEP 2 출발 ★3 · M_total 5 지만 통찰이 있어 -1 조건에 해당하지 않음 → ★3 유지.
  tier: star_3
  mechanism_primary: "x^2-3x+1=0 → x+1/x=3 → 3-x=1/x → 각 층이 1/x 로 되풀이 → 1/x"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/258-606.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건식의 일차항 계수 3 과 번분수 각 층의 상수 3 을 함께 바꿀 수 있다. 제약: 두 값이 같아야 3-x=1/x 되풀이가 성립하고, 상수항은 1 이어야 x 로 나눴을 때 x+1/x 가 나온다."
    creative: "(1) 층 수를 홀수로 바꿔도 답이 같음을 묻는 서술형(★4) (2) 조건을 x^2-3x-1=0 으로 바꾸면 되풀이가 깨져 계단 계산이 강제돼 ★3 (3) 답을 주고 조건식을 찾게 하면 역방향 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-258-607
  page: 258
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 실수 a, b, c 가 $1/a+1/b+1/c=0$ 일 때 $\dfrac{a^2}{(a+b)(a+c)}$ 꼴 세 항과 $\dfrac{3abc}{(a+b)(b+c)(c+a)}$ 의 합의 값.
  category: '조건을 ab+bc+ca=0 으로 변환 → (a+b)(a+c)=a^2 대칭 인수 발견 → 대칭식 항등식으로 마지막 항 처리'
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/a+1/b+1/c=0 의 양변에 abc 를 곱해 ab+bc+ca=0 이라는 대칭식 조건으로 바꿈"
    - step: 2
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "(a+b)(a+c)=a^2+(ab+bc+ca)=a^2 임을 보아 앞 세 항이 각각 1 이 되고 합이 3 임을 한 번에 결론"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(a+b)(b+c)(c+a)=(a+b+c)(ab+bc+ca)-abc 항등식에 조건을 넣어 -abc 로 확정하고 마지막 항을 -3 으로 결정"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "대칭식 조건이 주어졌을 때의 유리식의 값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건을 ab+bc+ca=0 으로 옮기는 것까지는 표준이지만, 그 다음 (a+b)(a+c) 를 전개해 a^2+(ab+bc+ca) 로 보는 단계가 이 문제의 전부다. 여기서 앞 세 항이 통째로 3 이 되고, 마지막 항은 세 합의 곱 항등식으로 -3 이 된다.
    통찰 3개(EQV d2 · SYM d3 · CON d2) · 실력 UP 출발 ★4 · 대칭성 활용이 핵심이라 저노출 유형 조건(§2.13)도 만족 → ★4.
    [분류 이슈] 통찰 3개 + SYM 으로 ★5 산식 조건에 걸리지만 novelty_score 0(§2.14 · 시판에 흔한 표준 대칭식 항등식)이라 ★4 로 둔다.
  tier: star_4
  mechanism_primary: "1/a+1/b+1/c=0 → ab+bc+ca=0 → (a+b)(a+c)=a^2 → 앞 세 항 = 3 → (a+b)(b+c)(c+a)=-abc → -3 → 0"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/258-607.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "마지막 항의 계수 3 을 바꾸면 답이 3-k 로 달라진다. 제약: 조건 1/a+1/b+1/c=0 은 ab+bc+ca=0 과 동치이므로 a, b, c 중 어느 것도 0 이 아니어야 하고, (a+b)(b+c)(c+a) = -abc ≠ 0 이어야 마지막 항이 정의된다."
    creative: "(1) 앞 세 항만 묻고 값 3 을 확인시키면 ★3 (2) 조건을 a+b+c=0 으로 바꾸면 (a+b)(a+c)=-a(b+c) 꼴이 되어 다른 대칭 골조 ★4 (3) 세 항을 a^3/((a+b)(a+c)) 로 올리면 차수 대칭 논의가 더해져 ★5 후보(참신도 확보 시)."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 4 · ★2 10 · ★3 13 · ★4 1 · ★5 0
- 통찰형 15 · 절차형 13 · premium 0
- 통찰 유형 분포(단계 기준): I-EQV 13 · I-PD 5 · I-SC 3 · I-CON 3 · I-BW 1 · I-SYM 1 (I-XU·I-MI·I-VF·I-RT 0)
- depth_score 는 insights 의 effective_depth 평균. 통찰형 15문의 평균 depth_score 는 1.8 대
- type_hint 상위: 「부분분수로의 변형」 계열 4 · 「비례식이 주어졌을 때의 유리식의 값」 3 · 「유리식의 사칙연산」 3 · 「유리식과 항등식(미정계수 결정)」 3 · 「(분자의 차수)≥(분모의 차수)인 유리식의 계산」 3 · 「분모 또는 분자가 분수식인 유리식의 계산」 3 · 「조건이 주어졌을 때의 유리식의 값」 3
- 대상층: 하위권 4 · 중하위권 9 · 중위권 3 · 중상위권 11 · 상위권 1
- 그림: 0문(이 범위에는 그림 문항 없음) · answer_source 는 본문 풀이 6 · 답지 22

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-251-591 | 3·4차 인수분해를 두 번 해야 하지만 개념원리 익히기 구역이고 통찰 0 이라 ★1 유지 | ★1 / ★2 |
| GN-CM2-256-600 | 확인체크(보통 ★2)지만 연분수 역전개·자연수 조건 해석이 필요해 ★3 으로 둠 | ★2 / ★3 |
| GN-CM2-257-601 | M_total 9 로 이 파일에서 계산 부담이 가장 큼. 도구가 앞 예제와 같아 ★3, 대상층만 중상위권 | ★3 / ★4 |
| GN-CM2-258-602 | 패턴 발견 1개라 산식상 STEP 1 출발 ★2 유지했으나 전체 통분이 막혀 체감은 ★3 | ★2 / ★3 |
| GN-CM2-258-607 | 통찰 3개 + I-SYM 으로 ★5 산식 조건을 만족하나 novelty_score 0(§2.14)이라 ★4 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 ① 부분분수로의 변형(4문 · e4 골조가 597·598·605 로 그대로 재사용) ② 비례식이 주어졌을 때의 유리식의 값(3문) ③ (분자의 차수)≥(분모의 차수)인 유리식의 계산(3문 · e3 골조가 596·603 으로 재사용) ④ 유리식과 항등식(3문) ⑤ 분모 또는 분자가 분수식인 유리식의 계산(3문) ⑥ 조건이 주어졌을 때의 유리식의 값(3문)이다.
- 따로 세워야 할 유형: 「부분분수로의 변형」은 (a) 단순 텔레스코핑(e4·597)과 (b) 미정계수·일반항이 얹힌 형태(598·605)로 base ★ 가 갈린다(★3 대 ★3~4). 「조건이 주어졌을 때의 유리식의 값」도 (a) x+1/x 변환형(e6·601)과 (b) 대칭식 ab+bc+ca 형(607)은 base ★ 가 ★3 과 ★4 로 다르므로 별도 유형이 맞다.
- 통합해도 될 유형: 「유리식의 통분」·「유리식의 약분」·「유리식의 사칙연산」은 모두 ★1 개념 확인이라 한 유형(유리식의 기본 연산)으로 묶어도 된다. 「(분자의 차수)≥(분모의 차수)인 유리식의 계산」과 「곱의 차를 이용한 유리식의 합」(602)은 모두 "그대로 통분하지 말고 먼저 변형한다"는 같은 상위 전략이지만, 변형 도구(대분수 변형 대 제곱차 연쇄)가 달라 유형은 분리하고 상위 묶음만 공유하는 편이 좋다.

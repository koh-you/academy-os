---
name: mechanism-데이터-GN-CALC1-01
description: 개념원리 미적분Ⅰ 01 함수의 극한(1/1 · 13~16쪽 11문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 01 함수의 극한
  unit_code: GN-CALC1-01
  part: "1/1"
  extract_range: "13~16쪽 · 13-1~16-7"
  total_problems: 11
  unit_total: 11
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위는 그림 문항 없음)
---

# 개념원리 미적분Ⅰ · 01 함수의 극한 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 01단원 「함수의 극한」 13~16쪽 11문항 전수를 다룬다. 구역은 「개념원리 익히기」(13-1~13-4 · 통번호)와 「필수·발전 예제」(14-e1~16-7 · 필수 예제 3문 + 확인체크 3문 + 발산 예제 1문)의 둘이다. 개념원리 고등의 벤더 난이도 신호는 구역과 태그로 나타난다 — 「개념원리 익히기」·tag 「확인체크」는 개념 확인이라 ★1 출발, 「필수 예제」(id `쪽-eN` · tag 「필수」)는 ★2 출발이며, 여기서 M_total·통찰로 ±1 조정했다. 이 범위는 극한의 정의를 막 배운 직후의 도입부라 **11문항 모두 "그래프를 이용하여 극한값을 구하거나 발산을 조사하는" 한 골조**이고, 통찰 라벨이 붙는 단계가 하나도 없어 전 문항이 절차형이다. 라벨을 억지로 흩지 않고 기록을 우선했으며, 벤더 신호와 1단 어긋난 5문항은 파일 끝 「분류 이슈 목록」에 모았다.

소문항(⑴~⑹)이 있는 문항의 Mₛ 는 소문항 수가 아니라 **서로 다른 골조 단계 수**로 셌다. 같은 골조의 반복(대입 4회)은 1단계로, 골조가 다른 소문항(대입 · 0/0 약분 · 무리식)이 섞이면 각각을 더했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-13-1
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 그래프를 이용해 극한값 구하기 — x→-1 에서 x+1, x→3 에서 -2x+3, x→1 에서 x^2-3x, x→0 에서 상수 9.
  category: "다항·상수함수 그래프 → x=a 근방 관찰 → 함숫값 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→a 일 때 다항·상수함수의 극한값(그래프 관찰·대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 x=a 에서 끊기지 않는 다항·상수함수라 그래프가 한 점으로 모이고 극한값 = 함숫값. ⑷ 는 상수함수라 접근점과 무관하게 9. 개념원리 익히기 구역·통찰 0·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: "끊김 없는 다항·상수함수 → x=a 근방 그래프 관찰 → 극한값 = f(a)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $-3$ ⑶ $-2$ ⑷ $9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/13-1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 a 와 일차·이차식의 계수를 자유롭게 바꿀 수 있다. 제약: x=a 에서 정의된 다항식이어야 '극한값 = 함숫값' 골조가 유지되고, 답이 정수로 떨어지게 계수를 맞춘다. 상수함수 소문항의 상수는 임의."
    creative: "(1) 상수함수 소문항을 f(x)=c 로 일반화해 접근점과 무관함을 확인시키기(★1 유지) (2) 한 소문항을 x=a 에서 분모가 0 이 되는 유리식으로 바꾸면 0/0 약분이 필요해 ★2 (3) 구간별로 정의된 함수를 넣어 좌·우극한 비교를 요구하면 골조가 바뀌며 ★2."
```

```yaml
- id: GN-CALC1-13-2
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 그래프를 이용해 극한값 구하기 — x→∞ 에서 상수 3, x→-∞ 에서 1/x^2.
  category: "x→±∞ 방향 그래프 관찰 → 상수는 그대로 · 분모가 커지면 0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→±∞ 일 때 상수함수와 1/x^n 의 수렴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 상수함수라 x 가 아무리 커져도 3. ⑵ 는 x→-∞ 에서 x^2 이 한없이 커지므로 1/x^2 은 0 에 가까워진다(짝수 차수라 부호는 항상 양). 개념 확인 한 단계·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x→±∞ 로 그래프의 끝 모양 관찰 → 상수는 불변 · 분모 |x|^n 발산 → 1/x^n → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/13-2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수값과 1/x^n 의 차수 n, 접근 방향(∞ / -∞)을 바꿀 수 있다. 제약: n 이 홀수이고 x→-∞ 이면 0 에 음수 쪽에서 접근하므로 '값은 0' 이라는 답은 그대로지만 그래프 설명이 달라진다."
    creative: "(1) 1/x^2 을 1/(x-2)^2 처럼 평행이동해도 ★1 유지 (2) 3 - 1/x^2 꼴 합으로 묶으면 극한의 성질 사용이 추가돼 여전히 ★1~2 (3) (3x+1)/x 처럼 ∞/∞ 꼴로 바꾸면 분모로 나누는 변형이 필요해 ★2."
```

```yaml
- id: GN-CALC1-13-3
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 그래프를 이용해 극한 조사 — x→0 에서 1/x^2 - 7, x→0 에서 -1/x^2 + 1.
  category: "x→0 에서 1/x^2 발산 → 계수 부호로 +∞ · -∞ 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→a 일 때 1/(x-a)^2 꼴 함수의 발산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2>0 이므로 x→0 에서 1/x^2 은 좌우 어느 쪽에서도 +∞ 로 커지고, 상수 -7 은 영향이 없어 ⑴ 은 ∞. ⑵ 는 앞의 - 부호로 뒤집혀 -∞. 함정은 부호 하나(T-부호)뿐이고 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x→0 에서 분모 x^2 → 0+ → 1/x^2 → ∞ → 계수 부호로 ±∞ 결정(상수항은 무시)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\infty$ ⑵ $-\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/13-3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(-7, +1)과 1/x^2 의 계수 크기를 바꿀 수 있다. 제약: 분모는 짝수 차수여야 좌우 극한이 같아져 ±∞ 로 답이 하나로 정해진다. 홀수 차수(1/x)로 바꾸면 좌우 극한이 갈려 '발산하지만 ±∞ 아님' 이 되므로 발문도 함께 바꿔야 한다."
    creative: "(1) 중심을 옮겨 1/(x-3)^2 으로(★1 유지) (2) 분모를 |x| 나 |x+3| 로 바꾸면 절댓값이 부호를 지운다는 확인이 추가돼 ★1~2 (3) 1/x 로 바꿔 좌극한·우극한을 각각 조사시키면 케이스 분기가 생겨 ★2."
```

```yaml
- id: GN-CALC1-13-4
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 그래프를 이용해 극한 조사 — x→∞ 에서 3x-2, x→∞ 에서 -5x+1, x→-∞ 에서 -x^2+1, x→-∞ 에서 √(-x+4).
  category: "x→±∞ 에서 최고차항 부호 → +∞ · -∞ 판정(무리식은 근호 안의 방향 확인)"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→±∞ 일 때 일차·이차·무리함수의 발산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 소문항은 최고차항의 부호와 접근 방향만 보면 끝난다 — ⑵ 는 기울기가 음수라 -∞, ⑶ 은 x→-∞ 라도 x^2 이 +∞ 라 앞의 -가 붙어 -∞, ⑷ 는 x→-∞ 일 때 근호 안 -x+4 가 +∞ 로 커지므로 ∞. 함정 두 갈래(T-부호 · 근호 안 정의역/방향 T-범위)로 Mₜ 2 이지만 통찰 0 이라 ★1.
  tier: star_1
  mechanism_primary: "x→±∞ 대입 방향 확인 → 최고차항(또는 근호 안 식)의 부호·크기 → ±∞ 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\infty$ ⑵ $-\infty$ ⑶ $-\infty$ ⑷ $\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/13-4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 기울기·상수항, 이차항 계수, 근호 안 일차식의 계수를 바꿀 수 있다. 제약: ⑷ 처럼 x→-∞ 를 쓰려면 근호 안이 -x 꼴(음의 계수)이어야 정의역이 확보된다. 부호를 잘못 뒤집으면 문항 자체가 성립하지 않는다."
    creative: "(1) 접근 방향만 반대로 돌려 답의 부호를 바꾸기(★1 유지) (2) √(x^2+1) - x 처럼 ∞-∞ 꼴을 넣으면 유리화 변형이 필요해 ★3 (3) 두 일차식의 합·곱으로 주고 발산 여부를 묻기(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-14-e1
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 그래프를 이용해 극한값 구하기 — x→2 에서 2/x - 3, x→-3 에서 (x^2+x-6)/(x+3), x→1 에서 √(2x-1).
  category: "x=a 에서 정의되면 대입 · 0/0 이면 인수분해 약분 후 대입 · 무리식도 대입"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→a 일 때 함수의 수렴(대입 · 0/0 인수분해 약분 · 무리식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑶ 은 x=a 에서 값이 있는 함수라 대입 한 줄이지만, ⑵ 는 x=-3 에서 분모·분자가 모두 0 이라 (x+3)(x-2)/(x+3) 로 인수분해해 x≠-3 에서 x-2 와 같은 그래프임을 확인한 뒤 대입해야 한다. 이 범위에서 유일하게 대입 이전에 식을 바꿔야 하는 문항이다. 필수 예제 ★2 출발 · M_total 6 이라 -1 후보에 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "x=a 대입 시도 → 0/0 이면 인수분해·약분해 x≠a 에서 동치인 식으로 → 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-2$ ⑵ $-5$ ⑶ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/14-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 이차식은 (x-p)(x-q) 로 인수분해되고 분모가 그중 한 인수와 같아야 한다 — 분모를 x+3 으로 두면 분자는 x=-3 을 근으로 가져야 0/0 이 된다. ⑶ 의 근호 안 일차식은 x=a 에서 완전제곱수가 되게 맞추면 답이 정수. ⑴ 의 접근점은 0 이 아니어야 한다."
    creative: "(1) ⑵ 를 (x^3-8)/(x-2) 처럼 세제곱 차 인수분해로 바꾸면 같은 골조·★2 (2) 분자를 유리화가 필요한 무리식(√(x+1)-2)/(x-3) 으로 바꾸면 ★3 (3) 약분 뒤에도 남는 분모가 0 이 되게 만들면 수렴이 아니라 발산 판정이 필요해 골조가 바뀐다(★3)."
```

```yaml
- id: GN-CALC1-14-5
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ 그래프를 이용해 극한값 구하기 — x→3 에서 x/(x-2), x→0 에서 (x^2+2x)/(3x), x→3 에서 (x^2-9)/(x-3), x→1 에서 (x^3-1)/(x-1), x→1 에서 √(3x+6), x→-2 에서 √(-x+3).
  category: "대입 가능하면 대입 · 0/0 이면 인수분해 약분 후 대입(유리식·무리식 6문 반복)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→a 일 때 유리식·무리식의 극한값(대입 · 0/0 약분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑸⑹ 은 대입, ⑵⑶⑷ 는 0/0 이라 각각 x(x+2)/(3x) · (x+3)(x-3)/(x-3) · (x^2+x+1)(x-1)/(x-1) 로 약분한 뒤 대입한다. ⑷ 의 세제곱 차 인수분해가 가장 무겁지만 모두 표준 절차다. 확인체크 태그라 ★1 출발이고 통찰 0 이라 +1 조건(통찰 2개 이상 또는 depth 3)을 못 채워 ★1. [분류 이슈] 14-e1 과 골조·M_total 이 같은데 태그 차이로 ★ 가 1단 갈린다.
  tier: star_1
  mechanism_primary: "x=a 대입 시도 → 0/0 이면 인수분해·약분 → 대입(6문 반복)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $3$ ⑵ $\dfrac{2}{3}$ ⑶ $6$ ⑷ $3$ ⑸ $3$ ⑹ $\sqrt{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-calc1/items/14-5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0/0 소문항은 분모가 분자의 인수여야 한다(x-3 ↔ x^2-9, x-1 ↔ x^3-1, 3x ↔ x^2+2x). 차수를 3 → 4 로 올려도 같은 꼴이 유지된다. 무리식 소문항은 근호 안이 접근점에서 완전제곱수면 정수 답, 아니면 ⑹ 처럼 √5 꼴로 남는다."
    creative: "(1) 소문항 수를 줄이고 (x^n-1)/(x-1) 일반형으로 묶어 n 을 매개변수로 주면 Mₐ 가 올라 ★2 (2) 분모를 (x-3)^2 으로 바꿔 약분 뒤에도 분모가 0 이 되게 하면 발산 조사로 골조가 바뀐다(★2~3) (3) 답만 주고 계수를 되묻는 역방향 문항으로 바꾸면 I-BW 가 생겨 ★3."
```

```yaml
- id: GN-CALC1-15-e2
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 그래프를 이용해 극한값 구하기 — x→∞ 에서 1/(x+5), x→∞ 에서 1/|x-1|, x→-∞ 에서 3/x - 1, x→-∞ 에서 3 - 1/x^2.
  category: "x→±∞ 에서 분모 발산 → 분수항 0 → 남은 상수항이 극한값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→±∞ 일 때 함수의 수렴(1/(x-p) · 1/|x-p| 꼴과 상수항의 합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 '분모가 한없이 커지면 분수는 0' 한 단계다. ⑶ 은 x→-∞ 라 3/x 가 음수 쪽에서 0 에 접근하지만 극한값은 그대로 0 이라 -1 만 남고, ⑷ 도 상수 3 만 남는다. [분류 이슈] 필수 예제라 ★2 출발이지만 13-2 와 골조가 같고 통찰 0·M_total 4 라 -1 을 적용해 ★1.
  tier: star_1
  mechanism_primary: "x→±∞ 에서 분모 |x-p| 또는 x^2 발산 → 분수항 → 0 → 상수항만 남김"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $0$ ⑶ $-1$ ⑷ $3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/15-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 상수 p, 분자 상수, 더해지는 상수항을 자유롭게 바꿀 수 있다. 제약: 분모는 x→±∞ 에서 발산해야 하므로 x 의 차수가 1 이상이어야 하고, 절댓값 소문항은 접근 방향과 무관하게 +∞ 가 되는 것이 요점이라 그대로 둔다."
    creative: "(1) 접근 방향을 ∞ ↔ -∞ 로 바꿔 분수항의 접근 부호만 달라지게 하기(★1 유지) (2) (2x+1)/(x+5) 처럼 ∞/∞ 꼴로 바꾸면 분모의 최고차로 나누는 변형이 필요해 ★2 (3) 1/(x+5) 대신 x/(x^2+5) 처럼 차수 비교를 요구하면 ★2."
```

```yaml
- id: GN-CALC1-15-6
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ 그래프를 이용해 극한값 구하기 — x→∞ 에서 2 - 1/x, 3x/(x+1), 1/|x-2| + 1, x→-∞ 에서 1/(x-3), 1 + 1/x^2, 1/(x-3)^2 - 2.
  category: "x→±∞ 에서 분수항 → 0 · ∞/∞ 꼴은 분모 최고차로 나누기 → 상수항 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→±∞ 일 때 유리식의 수렴(분수항 소멸 · ∞/∞ 차수 비교)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑶⑷⑸⑹ 은 분모가 커지면 분수항이 0 으로 사라지고 상수항만 남는 한 단계다. ⑵ 만 ∞/∞ 꼴이라 분모·분자를 x 로 나눠 3/(1+1/x) → 3 으로 정리하는 단계가 하나 더 붙는다. 확인체크 ★1 출발 · 통찰 0 → ★1 유지.
  mechanism_primary: "분수항은 x→±∞ 에서 0 → 상수항만 남김 · ∞/∞ 꼴은 분모 최고차 x 로 나눈 뒤 같은 원리 적용"
  tier: star_1
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ ⑵ $3$ ⑶ $1$ ⑷ $0$ ⑸ $1$ ⑹ $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/15-6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항, 평행이동 상수, 분자 계수를 바꿀 수 있다. ⑵ 의 ax/(x+b) 는 답이 a 가 되므로 a 를 바꾸면 답도 따라 바뀐다. 제약: 분모의 차수가 분자보다 크거나 같아야 수렴하고, 분자 차수가 더 크면 발산 문항이 되어 발문을 바꿔야 한다."
    creative: "(1) ⑵ 를 (3x^2+1)/(x^2-2) 로 올려도 같은 골조·★1~2 (2) (3x+1)/(x^2+1) 과 (3x^2+1)/(x+1) 을 나란히 두어 차수 비교로 수렴·발산을 가르게 하면 ★2 (3) x→-∞ 에서 √(x^2+1)/x 처럼 절댓값 부호 처리를 넣으면 T-부호 함정이 커져 ★3."
```

```yaml
- id: GN-CALC1-16-e3
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 그래프를 이용해 극한 조사 — x→-1 에서 -1/(x+1)^2, x→0 에서 1/|x|.
  category: "분모가 0 에 +쪽으로 접근 → 분수 +∞ → 앞의 부호로 ±∞ 결정"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→a 일 때 함수의 발산(1/(x-p)^2 · 1/|x-p| 꼴)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 (x+1)^2 이 x→-1 에서 0 에 양수 쪽으로만 접근하므로 1/(x+1)^2 → ∞ 이고 앞의 - 로 -∞. ⑵ 는 절댓값이 부호를 지워 좌우 모두 0+ 접근이라 ∞. 제곱·절댓값이 좌우 극한을 같게 만든다는 점(T-부호·T-범위)이 유일한 함정이다. [분류 이슈] 필수 예제 ★2 출발이나 13-3 과 골조가 같고 통찰 0·M_total 5 라 -1 을 적용해 ★1.
  tier: star_1
  mechanism_primary: "분모가 제곱·절댓값이라 0+ 로만 접근 → 1/(0+) → ∞ → 앞 계수의 부호로 ±∞ 확정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\infty$ ⑵ $\infty$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/16-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 상수와 분자 계수의 크기·부호를 바꿀 수 있다. 제약: 분모는 짝수 제곱이나 절댓값이어야 좌우 극한이 같아 ±∞ 로 답이 정해진다. 상수항을 더해도 발산 판정은 바뀌지 않는다."
    creative: "(1) 3 - 1/(x-2)^2 처럼 상수항을 붙이기(★1 유지 · 16-7 ⑴ 이 그 예) (2) 분모를 x+1 홀수 차수로 바꾸고 좌극한·우극한을 따로 묻기(케이스 분기 ★2) (3) 1/((x+1)(x-2)) 로 바꿔 두 점에서의 발산을 동시에 조사시키면 ★3."
```

```yaml
- id: GN-CALC1-16-e4
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 그래프를 이용해 극한 조사 — x→-∞ 에서 x^2+2, x→∞ 에서 -√(5+x).
  category: "x→±∞ 에서 최고차항(또는 근호 안)의 크기·부호 → ±∞ 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→±∞ 일 때 함수의 발산(이차·무리함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 x→-∞ 라도 제곱이라 x^2 이 +∞ 로 커져 ∞. ⑵ 는 근호가 항상 0 이상이라 √(5+x) → ∞ 이고 앞의 - 로 -∞. 짝수 차수와 근호의 부호 규칙 확인 한 단계다. [분류 이슈] 필수 예제 ★2 출발이나 13-4 와 골조가 같고 통찰 0·M_total 4 라 -1 을 적용해 ★1.
  tier: star_1
  mechanism_primary: "x→±∞ 에서 x^2·√(x+p) 는 항상 +∞ 로 발산 → 앞 계수의 부호로 ±∞ 확정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\infty$ ⑵ $-\infty$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/16-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 근호 안 일차식의 계수를 바꿀 수 있다. 제약: 근호 안은 해당 접근 방향에서 +∞ 로 가야 하므로 x→∞ 면 +x, x→-∞ 면 -x 꼴이어야 한다. 이차항의 계수 부호를 바꾸면 답의 부호가 통째로 뒤집힌다."
    creative: "(1) 이차식을 -(x-1)^2+5 처럼 완전제곱 꼴로 주기(★1 유지) (2) x^2-x 처럼 두 항의 차로 주고 최고차항이 이긴다는 판단을 요구하면 ★2 (3) √(x^2+x)-x 로 바꾸면 ∞-∞ 부정형 유리화가 필요해 ★3."
```

```yaml
- id: GN-CALC1-16-7
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 그래프를 이용해 극한 조사 — x→2 에서 3 - 1/(x-2)^2, x→-3 에서 1/|x+3|, x→∞ 에서 5-x^2, x→-∞ 에서 -√(3-x).
  category: "x→a 발산(분모 0+)과 x→±∞ 발산(최고차·근호)을 한 문항에서 함께 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→a 와 x→±∞ 발산 종합 조사(분모 0+ · 최고차항 · 근호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞의 두 소문항은 x→a 유형(분모가 제곱·절댓값이라 0+ 접근 → ⑴ 은 -∞, ⑵ 는 ∞)이고 뒤의 두 소문항은 x→±∞ 유형(⑶ 은 -x^2 이 이겨 -∞, ⑷ 는 x→-∞ 에서 근호 안 3-x 가 +∞ 라 앞의 -로 -∞)이라 골조가 둘 섞였다. 각 판정은 한 단계지만 방향·부호를 매번 다시 확인해야 해 Mₛ·Mₜ 가 오른다. 확인체크 ★1 출발·통찰 0 → ★1. [분류 이슈] M_total 6 으로 이 범위에서 가장 무겁다.
  tier: star_1
  mechanism_primary: "소문항마다 접근 유형 구분 → x→a 면 분모 0+ 와 계수 부호로, x→±∞ 면 최고차항·근호 안 부호로 ±∞ 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\infty$ ⑵ $\infty$ ⑶ $-\infty$ ⑷ $-\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/16-7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 상수(2, -3, 3), 더해지는 상수(3, 5), 계수 부호를 바꿀 수 있다. 제약: ⑷ 는 x→-∞ 이므로 근호 안이 3-x 처럼 x 의 계수가 음수여야 하고, ⑴⑵ 의 분모는 제곱·절댓값을 유지해야 좌우 극한이 같다."
    creative: "(1) 네 소문항의 접근 방향만 섞어 다시 배치하기(★1 유지) (2) 한 소문항을 1/(x-2) 로 바꿔 좌·우극한이 갈리는 예를 끼워 넣고 '극한값이 존재하지 않는다' 를 고르게 하면 ★2 (3) 발산 4개 중 하나만 수렴하게 섞고 어느 것이 수렴인지 고르게 하면 판별 부담이 생겨 ★2."
```

## 표본 판정 요약 (11문)

- ★ 분포: ★1 10 · ★2 1 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 11 · premium 0
- 그림: 0문(이 범위 전 문항 `figure: none`)
- M_total 분포: 4 → 4문 · 5 → 3문 · 6 → 4문 (평균 5.0)
- 대상층: 하위권 6문 · 중하위권 5문
- type_hint 상위: 「x→a 함수의 수렴(대입·0/0 약분)」 3 · 「x→±∞ 함수의 수렴(분수항 소멸)」 3 · 「x→a 함수의 발산(분모 0+)」 2 · 「x→±∞ 함수의 발산(최고차·근호)」 2 · 「x→a·x→±∞ 발산 종합」 1
- 단원 성격: 극한 정의 도입부라 11문 전부 「그래프로 관찰 → 대입 또는 부호 판정」 한 골조다. 학생이 스스로 찾아야 하는 통찰 단계가 없어 insights 가 전부 비었고, 유일하게 식을 바꿔야 하는 0/0 인수분해 약분(14-e1 · 14-5)만 ★2 급 절차로 분리했다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위는 벤더의 구역·태그가 난이도를 거의 가르지 못해(필수 예제와 확인체크의 골조가 같음) 5문이 걸렸다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-14-5 | 14-e1(필수 예제 ★2)과 골조·M_total(6) 이 같은데 확인체크 태그라 ★1 로 갈림. 벤더 신호만 따른 1단 차이 | ★1 / ★2 |
| GN-CALC1-15-e2 | 필수 예제(★2 출발)이나 13-2(★1)와 골조 동일·통찰 0·M_total 4 → -1 적용해 ★1 | ★1 / ★2 |
| GN-CALC1-16-e3 | 필수 예제(★2 출발)이나 13-3(★1)과 골조 동일·통찰 0·M_total 5 → -1 적용해 ★1 | ★1 / ★2 |
| GN-CALC1-16-e4 | 필수 예제(★2 출발)이나 13-4(★1)와 골조 동일·통찰 0·M_total 4 → -1 적용해 ★1 | ★1 / ★2 |
| GN-CALC1-16-7 | M_total 6 으로 이 범위 최대이고 x→a·x→±∞ 두 골조가 섞였으나 통찰 0 이라 +1 조건 미달 → 확인체크 ★1 유지 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 네 유형으로 수렴한다 — ① x→a 수렴(대입·0/0 약분) ② x→±∞ 수렴(분수항 소멸·∞/∞ 차수 비교) ③ x→a 발산(분모 0+ 와 부호) ④ x→±∞ 발산(최고차항·근호). 16-7 은 ③+④ 의 혼합이라 별도 유형이 아니라 「발산 종합 확인」 드릴로 두는 편이 낫다.
- 개념원리의 「필수 예제 → 확인체크」 쌍(14-e1/14-5, 15-e2/15-6, 16-e3·16-e4/16-7)은 골조가 같은 예제·드릴 관계다. 카탈로그에서는 **한 유형으로 통합**하고 base ★ 를 하나만 두되, 드릴 쪽은 소문항 수가 많다는 점만 메모로 남기면 된다.
- 반대로 「0/0 인수분해 약분」은 따로 세울 가치가 있다. 이 단원에서는 14-e1·14-5 의 일부 소문항에만 나오지만 02단원 「극한값의 계산」의 주 골조(유리화·부정형 처리)로 이어지므로, 카탈로그에서 ①을 「대입으로 끝나는 수렴」과 「부정형 0/0 약분」 둘로 쪼개 두면 02단원과 연결된다.
- ∞/∞ 차수 비교(15-6 ⑵)도 여기서는 소문항 하나지만 02단원의 독립 유형이다. 카탈로그 설계 시 이 단원의 ②에서 떼어내 02단원 유형으로 옮기는 것을 권한다.
- 이 범위에는 ★3 이상 슬롯이 없다. 변형으로 ★3 을 만들려면 variation_notes.creative 에 적어 둔 ∞-∞ 유리화(13-4 · 16-e4)나 좌·우극한 분기(13-3 · 16-7)를 도입해야 하고, 그 순간 유형이 02단원 쪽으로 넘어간다.

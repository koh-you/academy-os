---
name: mechanism-데이터-GN-CALC2-02
description: 개념원리 미적분Ⅱ 02 수열의 극한값의 계산(1/1 · 15~22쪽 · 25문항 전수) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 02 수열의 극한값의 계산
  unit_code: CALC2-02
  part: "1/1"
  extract_range: "15~22쪽 · 15-3~22-20"
  total_problems: 25
  unit_total: 25
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 미적분Ⅱ · 02 수열의 극한값의 계산 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 02단원 「수열의 극한값의 계산」 15~22쪽 25문항 전수를 정독한 mechanism 데이터다. 구역은 「개념원리 익히기」 3문(15-3~15-5)과 「필수·발전 예제」 22문(필수 예제 7문 · 각 예제 뒤 확인체크 15문)으로 나뉜다. 단원의 도구는 네 가지로 고정돼 있다 — 극한의 사칙 성질 대입 · ∞/∞ 꼴에서 최고차항으로 나누기 · ∞−∞ 꼴에서 유리화 · 극한값이 주어졌을 때의 미정계수 역추적. 그래서 통찰은 I-BW(미정계수 역추적)와 I-EQV·I-CON·I-PD 소수에 집중되고, I-SC·I-VF·I-SYM·I-XU 는 이 범위에 없다(★5 가 없는 이유).

벤더 난이도 신호는 「개념원리 익히기」=개념 확인, 「필수 예제」(tag 필수)=표준 응용, 「확인체크」=바로 앞 필수 예제의 확인 문항이다. 확인체크는 지시서의 ★1 기본 출발점 대신 **짝이 되는 필수 예제의 ★ 를 출발점**으로 삼고 M_total·통찰로 ±1 조정했다(그래서 단순 대입형 16-6 은 ★1, 망원곱 착안이 필요한 18-10 은 예제와 같은 ★3 이다). 이 범위에 그림 문항은 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-15-3
  page: 15
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    lim a_n = 4, lim b_n = -3 일 때 ⑴~⑷ 네 개의 극한값(3a_n+4b_n · 2a_n-5b_n · a_n b_n^2 · (2a_n+1)/(3b_n)).
  category: "수열의 극한의 사칙 성질 → 극한값 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 성질(사칙연산) 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    합·차·곱·몫 네 성질을 한 번씩 확인하는 개념 확인 문항. 분모 극한 3b_n → -9 ≠ 0 을 확인하는 것 외에 판단할 것이 없다.
    통찰 0 · M_total 4 · 개념원리 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "극한의 사칙 성질 적용 → a_n에 4, b_n에 -3 대입 → 각 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $23$ ⑶ $36$ ⑷ $-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/15-3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값 4, -3 과 각 항의 계수(3,4 / 2,-5 / 제곱 차수 / 2,1,3)를 자유롭게 바꿀 수 있다. 제약 — ⑷ 처럼 분수 꼴에서는 분모 수열의 극한이 0 이 아니어야 하고(성질이 적용되지 않음), ⑴ 처럼 답이 0 이 되게 하려면 계수 비를 극한값 비의 역으로 맞춰야 한다."
    creative: "(1) 네 성질 중 몫만 남기고 분모 극한을 0 으로 만들어 '성질을 쓸 수 없는 경우'를 찾게 하면 ★2 (2) a_n b_n^2 대신 (a_n+b_n)^2 를 묻고 전개를 요구(★1 유지) (3) 극한값 대신 lim(a_n+b_n), lim(a_n-b_n) 을 주고 각 극한을 역으로 구하게 하면 I-CON 이 붙어 ★2."
```

```yaml
- id: GN-CALC2-15-4
  page: 15
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 구체적인 식의 극한값(3+2/n · 2/n-1/n^2 · (4+3/n)(3/n-2)).
  category: "1/n → 0 기본 극한 → 사칙 성질로 조립"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수렴하는 수열의 기본 극한값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    lim 1/n = 0, lim 1/n^2 = 0 을 대입하면 끝난다. ⑶ 도 곱의 성질로 4 × (-2) 한 줄.
    통찰 0 · M_total 4 → ★1(개념원리 익히기 출발점 유지).
  tier: star_1
  mechanism_primary: "1/n → 0 대입 → 합·곱의 극한 성질로 조립 → 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $0$ ⑶ $-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/15-4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 3, 4, -2 와 분자 2, 1, 3, 차수 n, n^2 를 바꿀 수 있다. 제약 — 모든 항이 1/n^k (k ≥ 1) 꼴이어야 수렴이 보장되고, 곱 꼴에서는 두 괄호 극한의 곱이 정수로 떨어지게 상수항을 고른다."
    creative: "(1) 한 괄호의 상수항을 0 으로 만들어 0 × (유한) 을 보게 하기(★1) (2) 1/n 대신 (-1)^n/n 을 넣어 진동하지만 수렴하는 경우를 섞기(★2) (3) (3+2/n)(n) 처럼 0 × ∞ 꼴을 만들면 성질을 그대로 쓸 수 없어 ★2."
```

```yaml
- id: GN-CALC2-15-5
  page: 15
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 세 수열의 수렴·발산을 조사하고 수렴하면 극한값((n-2)/(2n+1) · 3+2n^2-n^3 · √(n+1)-√n).
  category: "꼴 판별(∞/∞ · 다항 · ∞-∞) → 최고차로 나누기 또는 유리화 → 수렴·발산 판정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 판정과 극한값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 문항에 이 단원의 세 가지 꼴이 모두 들어 있다 — ⑴ 최고차 n 으로 나누기, ⑵ 최고차항 -n^3 의 부호로 -∞ 발산, ⑶ 유리화 후 분모 발산.
    각 단계는 교과서가 방금 가르친 표준 절차라 통찰로 세지 않았지만, 꼴을 먼저 가려내는 판정이 더해져 M_total 6 → 개념 확인 출발점에서 +1 한 ★2.
  tier: star_2
  mechanism_primary: "꼴 판별 → ⑴ n으로 나누기 ⑵ 최고차항 부호로 발산 ⑶ 유리화해 1/(√(n+1)+√n) → 수렴·발산 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 수렴, $\dfrac{1}{2}$ ⑵ 발산 ⑶ 수렴, $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/15-5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수(n-2, 2n+1), ⑵ 의 차수·부호(3+2n^2-n^3), ⑶ 의 근호 안 상수(n+1, n)를 바꿀 수 있다. 제약 — ⑵ 는 최고차항 부호를 유지해야 발산 방향이 같고, ⑶ 은 두 근호의 n 계수가 같아야 유리화 뒤 분자가 상수로 남아 0 에 수렴한다."
    creative: "(1) ⑶ 의 근호 계수를 다르게(√(4n+1)-√n) 해서 ∞ 로 발산하게 만들기(★2) (2) ⑴ 을 분모 차수가 더 큰 꼴로 바꿔 0 수렴을 섞기(★2 유지) (3) 세 소문항을 보기 ㄱㄴㄷ 로 묶어 '수렴하는 것만 고르기'로 바꾸면 판정 부담이 올라 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-16-e2
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    수렴하는 두 수열에 대해 lim(a_n+b_n)=4, lim a_n b_n=3 일 때 lim(a_n^2+b_n^2).
  category: "두 조건 통합 → 기본대칭식 (a+b)^2-2ab → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합의 극한과 곱의 극한이라는 두 독립 조건을 a_n^2+b_n^2 = (a_n+b_n)^2-2a_nb_n 하나로 결합"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수열의 극한에 대한 성질 — 기본대칭식 변형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a_n, b_n 을 각각 구하려 들면 막히고, 구하는 식을 기본대칭식으로 바꿔야 두 조건이 그대로 들어간다. 이 결합 착안이 유일한 관문(I-CON d1).
    변형 뒤는 16-6 한 줄 계산. 필수 예제 출발점 ★2 · 통찰 1개(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "a_n^2+b_n^2 = (a_n+b_n)^2 - 2a_nb_n 으로 변형 → 4^2 - 2·3 → 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/16-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 4, 곱 3 을 바꿀 수 있다. 제약 — 두 수열이 실제로 수렴하는 실수열이려면 극한 α, β 가 실수여야 하므로 (합)^2 ≥ 4(곱), 즉 판별식 조건을 지켜야 한다. 답이 정수로 떨어지게 하려면 합^2-2곱 이 정수가 되도록 고른다."
    creative: "(1) 묻는 식을 a_n^3+b_n^3 으로 바꾸면 (a+b)^3-3ab(a+b) 로 골조 유지 ★2 (2) 1/a_n+1/b_n 을 묻고 곱이 0 이 아님을 따지게 하면 T-범위가 붙어 ★3 (3) 합·곱 대신 lim(a_n-b_n) 과 lim a_nb_n 을 주고 lim(a_n+b_n) 을 묻기 — 부호 분기(I-MI)가 생겨 ★3."
```

```yaml
- id: GN-CALC2-16-6
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim a_n = 3, lim b_n = -1 일 때 ⑴ (3a_n-1)(b_n+2) ⑵ (a_n+4)/(a_n b_n+2) 의 극한값.
  category: "극한의 사칙 성질 → 극한값 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 극한에 대한 성질(사칙연산) 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    16-e2 의 확인체크지만 예제의 대칭식 착안은 필요 없고 곱·몫 성질에 3, -1 을 그대로 넣으면 끝난다. ⑵ 의 분모 극한 -1 ≠ 0 확인이 유일한 점검.
    통찰 0 · M_total 4 ≤ 5 → 예제 출발점 ★2 에서 -1 한 ★1.
  tier: star_1
  mechanism_primary: "곱·몫의 극한 성질 → a_n에 3, b_n에 -1 대입 → 각 값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $8$ ⑵ $-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/16-6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 3, -1 과 식의 계수(3,-1 / 1,2 / 4,2)를 바꿀 수 있다. 제약 — ⑵ 의 분모 a_nb_n+2 의 극한이 0 이 되지 않아야 하고(3·(-1)+2 = -1), 답을 정수로 두려면 분자 극한이 분모 극한의 배수가 되게 고른다."
    creative: "(1) 분모 극한이 0 이 되도록 상수를 조정해 '성질을 쓸 수 없는 이유'를 서술하게 하면 ★2 (2) (3a_n-1)(b_n+2) 를 전개형으로 주고 항별 극한을 묻기(★1 유지) (3) a_n 대신 lim(a_n-3)=0 형태로 조건을 우회시키면 16-7 골조가 되어 ★2."
```

```yaml
- id: GN-CALC2-16-7
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim(a_n-1)=3 일 때 lim a_n(a_n-2) 의 값.
  category: "조건식의 극한 → lim a_n 동치 변환 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 조건이 a_n 자체가 아니므로 a_n = (a_n-1)+1 로 보고 lim a_n = 4 를 먼저 끌어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건식의 극한에서 lim a_n 끌어내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건에 있는 것은 a_n-1 의 극한이고 묻는 것은 a_n 의 식이라, 조건을 lim a_n = 4 로 옮기는 한 단계가 관문이다(I-EQV d1). 이 우회를 건너뛰고 3 을 바로 대입하는 것이 표준 오답.
    변환 뒤는 4 × 2 한 줄. 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "lim(a_n-1)=3 → lim a_n = 4 → a_n(a_n-2) 에 대입 → 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/16-7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 상수 1 과 극한값 3, 묻는 식의 상수 2 를 바꿀 수 있다. 제약 — 조건식이 a_n 의 일차식이어야 lim a_n 이 한 값으로 결정된다. 조건을 lim(a_n^2)=k 로 주면 부호 분기가 생기므로 골조가 달라진다."
    creative: "(1) 조건을 lim(2a_n+1)=9 처럼 계수까지 붙이면 같은 골조로 ★2 (2) 묻는 식을 분수 (a_n+1)/(a_n-4) 로 바꿔 분모 극한 0 을 만들면 발산 판정이 필요해 ★3 (3) 조건을 lim(a_n-1)=3 과 lim(b_n+2)=1 둘로 늘려 두 수열의 곱을 묻기(★2 유지)."
```

```yaml
- id: GN-CALC2-16-8
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    수렴하는 두 수열에 대해 lim(a_n-3b_n)=17, lim(4a_n+b_n)=3 일 때 lim(a_n/b_n).
  category: "두 선형결합의 극한 → 연립으로 각 극한 분리 → 몫"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 선형결합의 극한을 α, β 에 대한 연립식으로 묶어 각 수열의 극한을 분리해 냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 선형결합의 극한 조건 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 수열이 수렴한다는 전제가 있어야 lim a_n = α, lim b_n = β 로 놓고 두 조건을 연립할 수 있다. 조건 통합이 골조(I-CON d1)이고 그 뒤는 일차연립 + 몫의 성질(β ≠ 0 확인).
    예제 출발점 ★2 · M_total 7 → ★2. [분류 이슈] 연립을 표준 절차로 보면 절차형 ★2, 각 수열의 수렴 분리를 관문으로 보면 ★3 — 후자 쪽 근거를 rationale 에만 남기고 라벨은 ★2.
  tier: star_2
  mechanism_primary: "lim a_n=α, lim b_n=β 로 두고 α-3β=17, 4α+β=3 연립 → α=2, β=-5 → α/β"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/16-8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 선형결합의 계수(1,-3 / 4,1)와 우변(17, 3)을 바꿀 수 있다. 제약 — 계수행렬이 정칙이어야(1·1-(-3)·4 = 13 ≠ 0) α, β 가 유일하게 결정되고, 몫을 묻는다면 β ≠ 0 이어야 한다. 답을 기약분수로 두려면 우변을 13 의 배수 근방에서 고른다."
    creative: "(1) 묻는 것을 lim(a_n b_n) 이나 lim(a_n^2-b_n^2) 로 바꾸기(골조 유지 ★2) (2) 계수행렬을 특이하게 만들어(2,-6 / 1,-3) 각 극한이 결정되지 않음을 보이게 하면 ★4 (3) '수렴한다'는 전제를 빼고 두 조건만 주면 결론을 낼 수 없음을 따져야 해서 I-VF 가 붙고 ★4."
```

```yaml
- id: GN-CALC2-17-e3
  page: 17
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 네 수열의 수렴·발산 조사와 극한값(3차 유리식 · n^3/(2-n) · 분모 차수가 큰 유리식 · n/(√(n^2-1)-√n)).
  category: "∞/∞ 꼴 → 분모 최고차항으로 나누기 → 차수 비교로 수렴·발산 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴의 극한 — 최고차항으로 나누기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 소문항 모두 분모의 최고차항으로 나누는 한 가지 절차로 처리된다. 분자 차수가 크면 발산(⑵ 는 최고차항 부호까지 따져 -∞), 작으면 0, 같으면 최고차항 계수비.
    ⑷ 는 근호 안 n^2 의 차수를 1 로 읽어야 해서 T-단위·T-부호 두 함정 → Mₜ 2. 통찰 0 · 필수 예제 → ★2.
  tier: star_2
  mechanism_primary: "분모 최고차항으로 분자·분모를 나눔 → 1/n^k → 0 대입 → 차수 비교로 수렴값 또는 발산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 수렴, $2$ ⑵ 발산 ⑶ 수렴, $0$ ⑷ 수렴, $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/17-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 유리식의 계수와 차수를 바꿀 수 있다. 제약 — 수렴값을 정수·기약분수로 두려면 최고차항 계수비를 먼저 정하고 나머지 항을 채운다. ⑷ 처럼 근호가 섞이면 근호 안 최고차항의 차수(n^2 → n)가 분모 차수를 결정하므로 근호 밖 항과 실제 차수가 어긋나지 않게 맞춘다."
    creative: "(1) 분자·분모 차수를 같게/크게/작게 세 경우로 묶어 '수렴하는 것의 개수'를 묻기(★2) (2) ⑷ 의 분모를 √(n^2-1)-n 으로 바꾸면 ∞-∞ 가 먼저 필요해 골조가 두 단계가 되어 ★3 (3) 계수를 문자로 두고 극한이 유한하도록 조건을 묻게 하면 19-e5 의 미정계수 골조로 넘어가 ★3."
```

```yaml
- id: GN-CALC2-17-9
  page: 17
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 네 수열의 수렴·발산 조사와 극한값(곱꼴 유리식 · 분모 차수가 큰 유리식 · 분자 차수가 큰 유리식 · (√(4n^2+3)-n)/(2n)).
  category: "∞/∞ 꼴 → 전개 후 최고차항으로 나누기 → 차수 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴의 극한 — 최고차항으로 나누기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    17-e3 과 같은 절차의 확인 문항. ⑴ 은 전개하지 않고 최고차항 계수만 비교해도 되고, ⑷ 는 √(4n^2+3) 이 2n 과 같은 차수임을 읽어야 한다.
    통찰 0 · M_total 7 · 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자·분모의 최고차항 차수·계수 비교 → 분모 최고차항으로 나눔 → 수렴값 또는 발산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 수렴, $\dfrac{3}{2}$ ⑵ 수렴, $0$ ⑶ 발산 ⑷ 수렴, $\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/17-9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 네 일차식 계수, ⑵⑶ 의 차수 조합, ⑷ 의 근호 안 계수 4 를 바꿀 수 있다. 제약 — ⑷ 에서 근호 안 n^2 의 계수는 완전제곱수로 두어야 √ 가 유리수 계수로 풀리고, 분모 2n 과의 비가 기약분수가 되게 고른다."
    creative: "(1) ⑷ 의 분모를 n 대신 √n 으로 바꿔 발산을 만들기(★2) (2) 네 소문항을 ㄱㄴㄷㄹ 보기로 묶어 수렴하는 것만 고르게 하면 판정 부담 상승 ★3 (3) ⑴ 의 분모를 (2n+1)(n-2) 대신 (2n+1)(n^2-2) 로 바꿔 0 수렴으로 뒤집기(★2 유지)."
```

```yaml
- id: GN-CALC2-18-e4
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ (1+2+…+n)/n^2 의 극한 ⑵ {(1-1/2)(1-1/3)…(1-1/n)}^3 × (1^2+2^2+…+n^2) 의 극한.
  category: "합은 Σ 공식으로 · 곱은 망원곱으로 닫은 식 만들기 → ∞/∞ 차수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(1-1/k) = (k-1)/k 로 고쳐 이웃끼리 약분되는 망원곱 구조를 발견하고 곱 전체를 1/n 으로 닫음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합·곱으로 표현된 수열의 ∞/∞ 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    점들(…)로 쓰인 수열은 먼저 n 에 대한 닫힌 식으로 바꿔야 극한을 잴 수 있다. ⑴ 은 Σk 공식 대입이라 절차지만, ⑵ 의 곱은 각 항을 (k-1)/k 로 고쳐야 약분 사슬이 보이는 발견 단계(I-PD d2)다.
    닫은 뒤 (1/n)^3 × n^3 의 차수 상쇄까지 봐야 1/3 이 나온다. 필수 예제 ★2 + 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "Σk, Σk^2 공식과 망원곱 (1-1/k) 사슬로 닫은 식 → 최고차 차수 비교 → 계수비"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $\dfrac{1}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/18-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분모 차수(n^2), ⑵ 의 곱의 거듭제곱 지수 3 과 뒤에 곱해지는 Σ 의 차수를 바꿀 수 있다. 제약 — 곱이 1/n 으로 닫히므로 지수 p 와 Σ 의 차수 q 는 q = p 일 때만 0 이 아닌 유한값이 되고, 그때 값은 Σ 최고차항 계수와 같다(Σk^2 → 1/3)."
    creative: "(1) 곱을 ∏(1-1/k^2) 로 바꾸면 두 줄 약분이 되어 극한이 1/2(18-10 골조, ★3 유지) (2) 지수 p 와 Σ 차수 q 를 어긋나게 해서 0 또는 발산을 만들기(★3) (3) 곱의 닫힌 식만 묻고 극한을 빼면 수열 단원 문제로 내려가 ★2."
```

```yaml
- id: GN-CALC2-18-10
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ (1^3+2^3+…+n^3)/n^4 의 극한 ⑵ (1-1/2^2)(1-1/3^2)…(1-1/n^2) 의 극한.
  category: "Σk^3 공식 · (1-1/k^2) 인수분해 후 망원곱 → 차수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1-1/k^2 = (k-1)(k+1)/k^2 로 인수분해해 두 갈래 약분 사슬을 만들고 곱을 (n+1)/2n 으로 닫음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합·곱으로 표현된 수열의 ∞/∞ 극한"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 Σk^3 = {n(n+1)/2}^2 대입으로 끝나는 절차지만, ⑵ 는 각 항을 (k-1)(k+1)/k^2 로 쪼개야 앞·뒤 두 사슬이 따로 약분되는 것이 보인다(I-PD d2).
    [분류 이슈] 확인체크 태그만 보면 ★1 출발이지만 짝 예제(18-e4)와 같은 착안이 필요해 ★3 으로 뒀다 — 지시서의 확인체크 기본 출발점과는 2단 차이.
  tier: star_3
  mechanism_primary: "Σk^3 공식 · (1-1/k^2) = (k-1)(k+1)/k^2 망원곱 → 닫힌 식 → 차수 비교"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{4}$ ⑵ $\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/18-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 분모 차수 n^4 와 ⑵ 의 시작 항(k=2)을 바꿀 수 있다. 제약 — ⑴ 은 Σk^3 이 4차이므로 분모가 n^4 일 때만 0 아닌 유한값이고, ⑵ 는 k=2 부터 시작해야 (k-1) 사슬의 첫 항이 1 이 되어 닫힌 식이 (n+1)/2n 으로 떨어진다."
    creative: "(1) ⑵ 를 ∏(1-1/k^3) 로 올리면 약분이 부분적으로만 되어 ★4 (2) ⑴ 을 Σk^3/(Σk)^2 로 바꾸면 두 공식의 비로 답이 1 이 되어 ★3 유지 (3) ⑵ 의 값을 먼저 주고 마지막 항의 k 를 역으로 묻게 하면 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-CALC2-18-11
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a_n = 1^2+3^2+5^2+…+(2n-1)^2 일 때 lim a_n/n^3 의 값.
  category: "홀수 제곱합을 Σ 로 닫기 → n^3 과 최고차 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합으로 표현된 수열의 ∞/∞ 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반항이 (2k-1)^2 임을 읽고 Σ(4k^2-4k+1) 로 펴서 Σ 공식 셋을 대입하면 3차식이 닫힌다. 일반항 읽기는 등차수열의 표준 절차라 발견으로 세지 않았다.
    그 뒤는 최고차항 계수비 한 줄. 예제 18-e4 보다 단계가 적어 ★3 에서 -1 한 ★2.
  tier: star_2
  mechanism_primary: "일반항 (2k-1)^2 → Σ(4k^2-4k+1) 전개 → 3차 닫힌 식 → n^3 과 최고차 계수비"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/18-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "홀수 대신 (3k-1), (2k) 등 다른 등차 일반항과 분모 차수를 바꿀 수 있다. 제약 — 일반항이 k 의 m 차식이면 합은 (m+1) 차이므로 분모 차수를 m+1 로 맞춰야 0 아닌 유한값이 되고, 그때 값은 (최고차 계수)/(m+1)."
    creative: "(1) 분모를 n^2 이나 n^4 로 틀어 발산·0 을 만들기(★2) (2) 일반항을 주지 않고 1^2+3^2+… 만 보여 스스로 (2k-1)^2 을 찾게 하면 I-PD 가 붙어 ★3 (3) a_n 과 b_n = 2^2+4^2+…+(2n)^2 의 비의 극한을 묻기(★3)."
```

```yaml
- id: GN-CALC2-19-e5
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    lim (an^2+bn+1)/(3n+2) = 2 일 때 상수 a, b 에 대한 a+b 의 값.
  category: "극한이 유한 → 분자 차수 ≤ 분모 차수 역추적 → 최고차 계수비로 나머지 결정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 0 이 아닌 유한값이라는 결과 조건에서 분자의 2차항이 없어야 함(a=0)을 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞/∞ 꼴의 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수를 대입해 푸는 문제가 아니라 '수렴한다'는 결과에서 차수 조건을 거꾸로 읽는 문제다(I-BW d1). a ≠ 0 이면 발산하므로 a=0, 남은 일차식에서 b/3 = 2.
    차수 조건을 빠뜨리고 b 만 구하는 것이 표준 오답(T-범위·T-단위 → Mₜ 2). 필수 예제 ★2 · 통찰 d1 → ★2.
  tier: star_2
  mechanism_primary: "극한 유한 → 분자 2차항 소거(a=0) → (bn+1)/(3n+2) → b/3 = 2 → b=6 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/19-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 계수(3, 2), 분자의 상수항 1, 극한값 2 를 바꿀 수 있다. 제약 — 극한값이 0 이 아니어야 b 가 유일하게 결정되고(극한 0 이면 b=0 이 되어 a+b 가 덜 흥미로움), b = 3 × 극한값 이므로 정수 답을 원하면 극한값을 정수로 둔다."
    creative: "(1) 분자를 3차, 분모를 2차로 올려 두 계수를 동시에 0 으로 만들게 하기(★3) (2) 극한값을 0 으로 주고 a, b 를 모두 결정하게 하면 차수 조건이 두 개가 되어 ★3 (3) a, b 대신 '상수 a 의 최댓값'처럼 범위를 묻게 하면 I-MI 가 붙어 ★4."
```

```yaml
- id: GN-CALC2-19-12
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim (√(n^2+2)+an)/n = 10 일 때 상수 a 의 값.
  category: "분모 n 으로 나누기 → √(1+2/n^2) → 1 → 1+a = 10"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞/∞ 꼴의 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미정계수 문제지만 분자·분모 차수가 이미 같아 차수 조건을 역추적할 것이 없다. n 으로 나누면 √(1+2/n^2)+a 가 되어 1+a = 10 한 줄.
    √(n^2+2)/n 을 √(1+2/n^2) 로 옮길 때 n>0 을 쓰는 것이 유일한 점검. 통찰 0 · M_total 6 · 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자·분모를 n 으로 나눔 → √(1+2/n^2) → 1 → 1+a = 10 → a=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/19-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수 2, 극한값 10 을 바꿀 수 있다. 제약 — 근호 안 n^2 의 계수 c 를 바꾸면 √c + a = 극한값 이 되므로 a 를 정수로 두려면 c 를 완전제곱수로 고른다. 근호 안 상수항은 극한에 영향을 주지 않으므로 아무 값이나 가능."
    creative: "(1) 근호 안을 4n^2+3 으로 바꿔 √c = 2 가 되게 하기(★2 유지) (2) 분모를 n^2 으로 올리면 극한이 0 이 되어 a 가 결정되지 않음을 따져야 해서 ★3 (3) 분자를 √(n^2+2)-an 으로 바꾸면 a=1 일 때 ∞-∞ 가 되어 21-e7 골조로 넘어가고 ★3."
```

```yaml
- id: GN-CALC2-19-13
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim (bn+4)/(an^2+2n+2) = 6 일 때 상수 a, b 에 대한 a+b 의 값.
  category: "극한이 0 이 아님 → 분모 2차항 소거(a=0) 역추적 → 계수비로 b 결정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a ≠ 0 이면 분모 차수가 커져 극한이 0 이 되므로, 극한 6 ≠ 0 이라는 결과에서 a=0 을 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞/∞ 꼴의 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    19-e5 의 거울상 — 이번엔 분모 쪽 최고차항을 죽여야 한다. 극한값이 0 이 아니라는 점이 a=0 의 근거(I-BW d1)이고, 그 뒤 b/2 = 6.
    a 를 그대로 두고 계수비만 맞추려는 것이 표준 오답. 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "극한 6 ≠ 0 → 분모 2차항 소거(a=0) → (bn+4)/(2n+2) → b/2 = 6 → b=12 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/19-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 일차항 계수 2, 상수항, 분자 상수항 4, 극한값 6 을 바꿀 수 있다. 제약 — 극한값이 0 이면 a=0 을 끌어낼 수 없으므로 반드시 0 이 아닌 값으로 두고, b = (분모 일차항 계수) × 극한값 이 정수가 되게 고른다."
    creative: "(1) 분모를 3차로 올려 두 계수를 소거하게 하기(★3) (2) 극한값을 0 으로 주고 'a 가 될 수 있는 값'을 묻게 하면 a ≠ 0 전체가 답이 되어 I-MI 가 붙고 ★3 (3) 분자·분모 모두 문자 계수로 두고 a+b 대신 ab 를 묻기(19-14 골조, ★3)."
```

```yaml
- id: GN-CALC2-19-14
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim {(a+2b)n^2+(a-b)n+1}/(n+2) = 3 일 때 상수 a, b 에 대한 ab 의 값.
  category: "차수 조건으로 계수 덩어리 = 0 · 계수비 = 3 → a, b 연립"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수렴한다는 결과에서 2차항 계수 덩어리 a+2b = 0 과 일차항 계수 덩어리 a-b = 3 을 동시에 역추적해 연립식으로 세움"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∞/∞ 꼴의 미정계수의 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    19-e5 와 달리 계수가 문자 하나가 아니라 a, b 의 조합이라 역추적 결과가 곧바로 답이 되지 않고 연립을 한 번 더 거친다(I-BW d2).
    (a+2b) 를 0 으로 두는 조건과 (a-b)/1 = 3 을 함께 세우는 것이 관문. 예제 출발점 ★2 + 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "수렴 → a+2b = 0, (a-b)/1 = 3 연립 → a=2, b=-1 → ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/19-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 계수 덩어리의 조합(a+2b, a-b)과 극한값 3 을 바꿀 수 있다. 제약 — 두 조합의 계수행렬이 정칙이어야 a, b 가 유일하게 결정되고(1·(-1)-2·1 = -3 ≠ 0), 답을 정수로 두려면 극한값을 행렬식의 약수 배로 고른다."
    creative: "(1) 분모를 2차로 올려 조건을 하나로 줄이면 해가 직선이 되어 '가능한 ab 의 최댓값'이 되고 ★4 (2) 세 계수 덩어리를 두고 3차 분자로 만들면 연립이 3원이 되어 ★4 (3) ab 대신 a^2+b^2 을 묻기(골조 유지 ★3)."
```

```yaml
- id: GN-CALC2-20-e6
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 세 수열의 수렴·발산 조사와 극한값(n^3-10n^2 · √(n^2+3n)-n · (√(n+2)-√(n+1))/(√(n+1)-√n)).
  category: "∞-∞ 꼴 → 다항은 최고차로 묶기 · 무리식은 유리화 → 차수 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞-∞ 꼴의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∞-∞ 는 그대로 두면 판정할 수 없으므로 꼴을 바꾼다 — ⑴ 은 n^3(1-10/n) 로 묶어 발산, ⑵⑶ 은 켤레식을 곱해 유리화한다. ⑶ 은 분자·분모를 각각 유리화하는 두 번 적용이 필요.
    세 처리 모두 이 예제가 가르치는 표준 절차라 통찰로 세지 않았다. 부호와 차수 두 함정 → Mₜ 2. 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "다항은 최고차항으로 묶어 발산 판정 · 무리식은 켤레식 유리화 → 1/(√+√) 꼴로 차수 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 발산 ⑵ 수렴, $\dfrac{3}{2}$ ⑶ 수렴, $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/20-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 차수·계수, ⑵ 의 근호 안 일차항 계수 3, ⑶ 의 근호 안 상수(2,1,0)를 바꿀 수 있다. 제약 — ⑵ 는 근호 안 n^2 의 계수가 뒤 항의 제곱과 같아야(1 과 1) 유리화 뒤 분자가 일차로 남아 유한값이 되고, 값은 (일차항 계수)/(2 × 최고차 계수)."
    creative: "(1) ⑵ 의 n^2 계수를 4 로 올리고 뒤 항을 2n 으로 맞추기(★2 유지) (2) 뒤 항을 n 대신 n+1 로 두어 유리화 뒤 상수항까지 따지게 하면 ★3 (3) ⑶ 의 분모를 √(n+3)-√(n+1) 로 바꿔 답이 1/2 가 되게 하면 비의 구조를 더 봐야 해서 ★3."
```

```yaml
- id: GN-CALC2-20-15
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 네 수열의 수렴·발산 조사와 극한값(1+6n-n^3 · √(4n^2-3n)-2n · √n(√(n+1)-√(n-1)) · 2/(√(n^2+2n)-√(n^2-2n))).
  category: "∞-∞ 꼴 → 최고차 묶기 또는 유리화(분모 유리화 포함) → 차수 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∞-∞ 꼴의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    20-e6 의 네 가지 변주 — ⑵ 는 계수가 4 라 √ 밖으로 2n 이 나오고, ⑶ 은 유리화 뒤 √n 과 곱해지는 차수를 맞춰야 하며, ⑷ 는 ∞-∞ 가 분모에 있어 분모를 유리화한다.
    처리 도구는 모두 같고 위치만 바뀐다. 통찰 0 · M_total 7 · 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "∞-∞ 위치 확인 → 켤레식 유리화(분자 또는 분모) → 최고차항으로 나눔 → 수렴값 또는 발산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 발산 ⑵ 수렴, $-\dfrac{3}{4}$ ⑶ 수렴, $1$ ⑷ 수렴, $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/20-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 4, -3, ⑶ 의 ±1, ⑷ 의 분자 2 와 근호 안 ±2n 을 바꿀 수 있다. 제약 — ⑵ 는 근호 안 n^2 계수가 완전제곱수여야 뒤 항과 상쇄되고, ⑷ 는 두 근호의 n^2 계수가 같아야 분모가 유한 차수로 남는다. ⑷ 의 값은 (분자)/(2 × 일차항 계수의 차 / 2) 로 정해지므로 분자를 그 배수로 둔다."
    creative: "(1) ⑵ 의 근호 안 계수를 완전제곱수가 아니게 만들어 발산시키기(★2) (2) ⑶ 의 √n 을 n 으로 올리면 ∞ 발산이 되어 판정이 뒤집힘(★2) (3) ⑷ 의 분자를 n 으로 두면 분모 상수와 겨뤄 발산 — 네 소문항을 '수렴하는 것의 개수' 보기 문제로 묶으면 ★3."
```

```yaml
- id: GN-CALC2-20-16
  page: 20
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a_n = 1+2+3+…+n 일 때 lim(√a_(n+1) - √a_n) 의 값.
  category: "√ 의 차 유리화 → 분자를 a_(n+1)-a_n = n+1 로 단순화 → 차수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "유리화한 분자 a_(n+1)-a_n 을 두 닫힌 식의 차로 전개하지 않고 수열의 계차 n+1 로 바로 읽어 계산을 접음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∞-∞ 꼴의 극한 — 합으로 정의된 수열"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합으로 정의된 수열의 ∞-∞ 라 Σ 공식 대입과 유리화가 겹친다. 유리화까지는 20-e6 절차지만, 분자를 (n+1)(n+2)/2 - n(n+1)/2 로 펴는 대신 계차 n+1 로 읽는 변환이 계산을 크게 줄인다(I-EQV d2).
    분모는 √(n^2/2) 두 개라 n 과 같은 차수 → 답이 √2/2. 예제 출발점 ★2 + 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "a_n = n(n+1)/2 → 유리화해 (a_(n+1)-a_n)/(√a_(n+1)+√a_n) → 분자 = n+1, 분모 ~ 2·n/√2 → √2/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/20-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a_n 을 Σk^2 이나 Σ(2k-1) 같은 다른 합으로 바꿀 수 있다. 제약 — a_n 이 k 차 다항이면 계차는 (k-1) 차, 분모는 k/2 차이므로 극한이 유한하려면 k-1 = k/2, 즉 k=2 여야 한다. k ≠ 2 로 두면 0 이나 발산이 된다."
    creative: "(1) √a_(n+1) - √a_n 대신 √a_(2n) - √a_n 으로 바꾸면 비가 √2-1 로 바뀌어 ★3 유지 (2) a_n 을 등비수열의 합으로 두면 지수 비교가 되어 골조가 바뀌고 ★4 (3) 극한값을 주고 a_n 의 최고차 계수를 역으로 묻게 하면 I-BW 가 더해져 ★4."
```

```yaml
- id: GN-CALC2-21-e7
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    lim(√(n^2+an) - √(n^2+1)) = 3 일 때 상수 a 의 값.
  category: "유리화 → (an-1)/(√+√) → 계수비 a/2 = 3 역추적"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "유리화해 얻은 일차/일차 꼴의 계수비 a/2 가 주어진 극한 3 과 같다는 데서 a 를 역추적"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∞-∞ 꼴의 미정계수의 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    20-e6 의 유리화와 19-e5 의 역추적이 합쳐진 첫 문항이다. 먼저 켤레식을 곱해 (an-1)/(√(n^2+an)+√(n^2+1)) 로 만들고, 분모가 2n 과 같은 차수임을 확인해야 a/2 = 3 이 나온다.
    유리화 전에 계수를 비교하려 드는 것이 표준 오답. 필수 예제 ★2 + 두 도구 결합·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "켤레식 유리화 → (an-1)/(√(n^2+an)+√(n^2+1)) → 분모 ~ 2n → a/2 = 3 → a=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/21-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "뒤 근호 안 상수 1 과 극한값 3 을 바꿀 수 있다. 제약 — 두 근호의 n^2 계수가 같아야(1 과 1) 유리화 뒤 분자가 일차로 남고, a = 2 × 극한값 이므로 정수 답을 원하면 극한값을 정수 또는 반정수로 둔다. 근호 안 상수는 극한에 영향이 없다."
    creative: "(1) 두 근호의 n^2 계수를 4 로 함께 올리면 a = 4 × 극한값 이 되어 ★3 유지 (2) 뒤 항을 √(bn^2+…) 로 두어 b 까지 결정하게 하면 21-18 골조로 ★3~4 (3) 극한값을 음수로 주어 a 의 부호까지 따지게 하면 T-부호가 붙어 ★3."
```

```yaml
- id: GN-CALC2-21-17
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim 1/(√(n^2+an) - n) = -2 일 때 상수 a 의 값.
  category: "분모의 ∞-∞ 극한을 a/2 로 계산 → 역수 관계로 a 역추적(부호 포함)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모 전체의 극한이 a/2 임을 먼저 구한 뒤, 역수가 -2 라는 결과에서 a/2 = -1/2 로 거슬러 올라가 부호까지 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∞-∞ 꼴의 미정계수의 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지의 ∞-∞ 가 분모에 들어 있어 역수 관계를 한 번 더 거친다 — 분모 극한 a/2 를 구하고 1/(a/2) = -2 를 풀어야 한다(I-BW d2).
    극한값이 음수이므로 a < 0 이라는 부호 점검이 함정(T-부호). 또 분모 극한이 0 이면 안 된다는 T-범위도 걸린다. 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "분모 유리화 → √(n^2+an)-n → a/2 → 1/(a/2) = -2 → a = -1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/21-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 1 과 극한값 -2 를 바꿀 수 있다. 제약 — a = 2 × (분자)/(극한값) 이므로 극한값이 0 이 아니어야 하고, a ≠ 0 이어야 분모 극한이 0 이 되지 않는다. 정수 답을 원하면 극한값을 분자의 약수 배로 둔다."
    creative: "(1) 분자를 n 으로 두면 분모 상수와 겨뤄 발산하므로 '그런 a 는 없음'을 보이게 하는 ★4 (2) 근호 안을 n^2+an+b 로 늘려도 b 는 극한에 영향이 없음을 확인하게 하기(★3 유지) (3) 극한값을 0 으로 주고 a 의 조건을 묻게 하면 발산 판정이 필요해 ★4."
```

```yaml
- id: GN-CALC2-21-18
  page: 21
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim(√(n^2+an+2) - √(bn^2+2n+3)) = 3 일 때 상수 a, b 의 값.
  category: "수렴 조건으로 b=1 먼저 역추적 → 유리화 후 계수비로 a 결정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한이 유한하려면 두 근호의 최고차항이 상쇄돼야 하므로 b=1 을 먼저 역추적하고, 그 뒤 유리화한 일차 계수비에서 a 를 결정하는 2단 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "∞-∞ 꼴의 미정계수의 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    21-e7 에 미정계수가 하나 더 붙어 순서가 생긴다 — b 를 먼저 고정하지 않으면 유리화해도 분자가 2차로 남아 a 를 구할 수 없다.
    b=1 을 정한 뒤 (a-2)n + (-1) 의 계수비 (a-2)/2 = 3. [분류 이슈] 2단 역추적과 M_total 8 만 보면 ★4 후보지만 도구는 21-e7 과 같아 ★3 으로 뒀다.
  tier: star_3
  mechanism_primary: "수렴 → 최고차 상쇄로 b=1 → 유리화 → ((a-2)n-1)/(√+√) → (a-2)/2 = 3 → a=8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=8$, $b=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/21-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "뒤 근호의 일차항 계수 2, 두 상수항 2·3, 극한값 3 을 바꿀 수 있다. 제약 — b 는 앞 근호의 n^2 계수와 같아야만 하므로 앞을 cn^2 으로 두면 b=c 로 따라간다. a = (뒤 일차항 계수) + 2√b × 극한값 이므로 √b 가 유리수가 되게 b 를 완전제곱수로 둔다. 상수항은 극한에 영향 없음."
    creative: "(1) 앞 근호를 √(4n^2+an+2) 로 바꾸면 b=4 가 되고 계수비가 (a-2)/4 로 바뀜(★3 유지) (2) 극한값을 주지 않고 '수렴하도록 하는 b' 만 묻기(★2 로 내려감) (3) a, b 를 자연수로 제한하고 극한값 범위를 주면 후보 걸러내기가 생겨 I-VF 가 붙고 ★4."
```

```yaml
- id: GN-CALC2-22-e8
  page: 22
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    lim (a_n+5)/(2a_n+1) = 3 일 때 lim a_n 의 값.
  category: "식 전체를 b_n 으로 치환 → a_n 을 b_n 으로 역표현 → 극한 대입"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a_n 의 수렴을 가정하지 않고, 주어진 식을 b_n 으로 놓아 a_n = (5-b_n)/(2b_n-1) 로 역표현한 뒤 극한을 취함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일반항 a_n을 포함한 식의 극한값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    lim a_n = α 로 놓고 (α+5)/(2α+1) = 3 을 푸는 것은 a_n 의 수렴을 먼저 가정한 것이라 논리가 뒤집혀 있다. 교과서 골조는 주어진 식 자체를 b_n 으로 놓고 a_n 을 b_n 의 식으로 역표현하는 것(I-BW d2).
    a_n 이 미지의 수열이라 표현 추상도가 높고(Mₐ 3), 2b_n-1 ≠ 0 점검도 붙는다. 필수 예제 ★2 + 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "(a_n+5)/(2a_n+1) = b_n 으로 두고 a_n = (5-b_n)/(2b_n-1) → b_n → 3 대입 → 2/5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/22-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 계수(1,5 / 2,1)와 극한값 3 을 바꿀 수 있다. 제약 — 역표현이 가능하려면 분자·분모가 a_n 의 일차식이고 계수행렬이 정칙이어야 한다(1·1-5·2 = -9 ≠ 0). 또 극한값이 분모 계수비 1/2 와 같으면 a_n 이 발산하므로 그 값은 피한다."
    creative: "(1) 계수를 조정해 답이 음수가 되게 하기(★3 유지) (2) 극한값을 1/2 로 주고 'lim a_n 이 존재하지 않음'을 보이게 하면 I-VF 가 붙어 ★4 (3) 분자·분모를 a_n 의 이차식으로 올리면 역표현이 이차방정식이 되어 부호 분기가 생기고 ★4."
```

```yaml
- id: GN-CALC2-22-19
  page: 22
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim (3a_n-5)/(a_n-1) = 2 일 때 lim a_n 의 값.
  category: "식 전체를 b_n 으로 치환 → a_n 을 b_n 으로 역표현 → 극한 대입"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 식을 b_n 으로 놓고 a_n(3-b_n) = 5-b_n 에서 a_n = (5-b_n)/(3-b_n) 로 역표현한 뒤 극한을 취함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일반항 a_n을 포함한 식의 극한값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    22-e8 과 같은 골조의 확인 문항. 역표현 과정에서 a_n 의 계수가 (3-b_n) 이므로 b_n 이 3 으로 가면 안 되고, 주어진 극한 2 는 그 조건을 비켜 간다.
    수렴을 가정하지 않는 역표현이 관문(I-BW d2)이고 Mₐ 3. 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "(3a_n-5)/(a_n-1) = b_n 으로 두고 a_n = (5-b_n)/(3-b_n) → b_n → 2 대입 → 3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/22-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모 계수(3,-5 / 1,-1)와 극한값 2 를 바꿀 수 있다. 제약 — 계수행렬이 정칙이어야 하고(3·(-1)-(-5)·1 = 2 ≠ 0), 극한값이 분자·분모의 a_n 계수비 3 과 같으면 역표현의 분모가 0 이 되어 a_n 이 발산하므로 피한다."
    creative: "(1) 극한값을 3 으로 주고 a_n 의 발산을 설명하게 하면 ★4 (2) lim a_n 대신 lim 1/a_n 을 묻기(★3 유지) (3) 조건을 두 개(다른 두 분수식의 극한) 주고 모순 여부를 따지게 하면 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-CALC2-22-20
  page: 22
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    lim n·a_n = 5 일 때 lim (3n^2+2)/(n^3 a_n) 의 값.
  category: "n^3 a_n = n^2 × (n a_n) 분해 → 주어진 덩어리를 그대로 쓰기"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모를 n^3·a_n 이 아니라 n^2 × (n a_n) 으로 쪼개 조건으로 주어진 덩어리 n a_n 을 그대로 대입할 수 있게 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "일반항 a_n을 포함한 식의 극한값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a_n 자체의 극한은 0 이라 분모를 따로 떼면 0 × ∞ 로 막힌다. 조건이 준 것은 n a_n 이라는 덩어리이므로 분모를 n^2 × (n a_n) 으로 묶고 분자도 n^2 로 나눠야 (3+2/n^2)/(n a_n) 이 된다(I-EQV d2).
    덩어리를 유지한 채 차수를 맞추는 것이 관문. 미지 수열이라 Mₐ 3. 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "분모를 n^2 × (n a_n) 으로 분해 → 분자·분모를 n^2 로 나눔 → (3+2/n^2)/(n a_n) → 3/5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/22-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건의 극한값 5, 분자 계수 3·상수 2, 분모 차수 n^3 을 바꿀 수 있다. 제약 — 조건이 lim n^p a_n = c 이면 분모는 n^(p+q) a_n 꼴로 두고 분자 차수를 q 로 맞춰야 0 아닌 유한값이 된다. 값은 (분자 최고차 계수)/c 이므로 c ≠ 0."
    creative: "(1) 조건을 lim n^2 a_n = 5 로 올리고 분자 차수를 맞춰 같은 골조 유지(★3) (2) 분자 차수를 어긋나게 해 0 또는 발산을 만들고 판정을 묻기(★3) (3) lim n a_n = 5 에서 lim a_n 과 lim n^2 a_n 을 함께 묻게 하면 0 과 발산을 구분해야 해서 ★4."
```

## 표본 판정 요약 (25문)

- ★ 분포: ★1 3 · ★2 12 · ★3 10 · ★4 0 · ★5 0
- 통찰형 15 · 절차형 10 · premium 0
- 통찰 유형 분포: I-BW 8 · I-EQV 3 · I-PD 2 · I-CON 2 (I-SC · I-VF · I-SYM · I-XU 0 → ★5 없음)
- depth 분포: d1 6 · d2 9 · d3 0
- type_hint 상위: 「∞/∞ 꼴의 미정계수의 결정」 4 · 「∞-∞ 꼴의 미정계수의 결정」 3 · 「일반항 a_n을 포함한 식의 극한값」 3 · 「∞-∞ 꼴의 극한」 2(+1 변형) · 「∞/∞ 꼴의 극한」 2 · 「합·곱으로 표현된 수열의 ∞/∞ 극한」 2(+1 변형) · 「수열의 극한에 대한 성질(사칙연산) 적용」 2
- 구역별: 개념원리 익히기 3문(★1 2 · ★2 1) · 필수 예제 7문(★2 4 · ★3 3) · 확인체크 15문(★1 1 · ★2 7 · ★3 7)
- 그림: 0문(이 범위에 그림 문항 없음 · 전 블록 `figure: none`)
- 답 출처: 본문 풀이 7문(필수 예제) · 답지 18문. 골조를 잡는 동안 전사 답과 어긋나 보이는 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-16-8 | 두 선형결합 연립을 표준 절차로 보면 절차형 ★2, 각 수열의 수렴을 분리해 내는 것을 관문으로 보면 ★3 | ★2 / ★3 |
| GN-CALC2-18-10 | 확인체크 태그의 기본 출발점(★1)과 2단 차이. 짝 예제 18-e4 와 같은 망원곱 착안이 필요해 ★3 으로 둠 | ★3 (벤더 신호 ★1) |
| GN-CALC2-21-18 | 미정계수 2단 역추적(b 먼저 → a) · M_total 8 로 ★4 후보지만 도구는 21-e7 과 동일해 ★3 | ★3 / ★4 |
| GN-CALC2-22-e8 · 22-19 | 역표현 골조를 절차로 외우면 ★2, 「a_n 의 수렴을 가정하지 않는다」는 논리까지 관문으로 보면 ★3 | ★3 (절차 취급 시 ★2) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「∞/∞ 꼴의 미정계수의 결정」과 ② 「∞-∞ 꼴의 미정계수의 결정」은 역추적이라는 통찰은 같지만 선행 변형(최고차로 나누기 vs 유리화)이 달라 base ★ 가 갈린다(②가 한 단계 높다). ③ 「일반항 a_n 을 포함한 식의 극한값」은 미지 수열을 역표현하는 별개 골조이므로 독립 유형이어야 한다. ④ 「합·곱으로 표현된 수열의 극한」은 망원곱/Σ 공식이라는 다른 도구를 쓰므로 일반 ∞/∞ 와 분리한다.
- **통합해도 될 유형**: 「∞/∞ 꼴의 극한」과 「수열의 수렴·발산 판정」(15-5 · 17-e3 · 17-9)은 차수 비교 하나로 묶인다. 「수열의 극한에 대한 성질(사칙연산) 적용」(15-3 · 15-4 · 16-6)도 ★1 한 유형으로 충분하다.
- **base ★ 제안**: 사칙 성질 대입 ★1 · 차수 비교(유리·무리) ★2 · ∞-∞ 유리화 ★2 · Σ·망원곱 ★3 · ∞/∞ 미정계수 ★2 · ∞-∞ 미정계수 ★3 · a_n 역표현 ★3. 이 범위에는 ★4~5 를 지탱할 I-SC/I-VF/I-SYM/I-XU 가 없으므로, 상위 슬롯은 03단원 이후(등비수열의 극한·급수)에서 찾아야 한다.

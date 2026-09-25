---
name: mechanism-데이터-GN-CALC1-19-p3
description: 개념원리 미적분Ⅰ 19 부정적분의 계산(3/3 · 연습문제 STEP 1~실력 UP) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 19 부정적분의 계산
  unit_code: "19"
  part: "3/3"
  extract_range: "170~172쪽 · 170-341~172-359"
  total_problems: 19
  unit_total: 46
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 19 부정적분의 계산 (3/3) 정독 데이터 (v1.0)

이 파일은 19단원 「부정적분의 계산」의 마지막 조각(170~172쪽 · 19문항)을 다룬다. 범위는 전부 단원 끝 연습문제로, 벤더 난이도 신호는 구역과 `level` 필드로 온다 — 「연습문제 STEP 1」(10문 · ★2 출발) · 「연습문제 STEP 2」(7문 · ★3 출발) · 「연습문제 실력 UP」(2문 · ★4 출발). 개별 태그는 `교육청 기출` 2문(172-354 · 172-355)뿐이고 난이도 등급 태그는 없다. 개념원리 연습문제는 상자 발문만 전사돼 있어 풀이·KEY Point 는 참고하지 않았고, 발문과 조건만으로 골조를 잡았다.

출발점에서 M_total·통찰로 ±1 조정했다. 이 조각은 「미분과 적분이 서로 역연산임」을 어떤 형태로 위장해 내놓느냐가 축이라, 연산 순서 정리(342 · 351), 관계식 양변 미분(345 · 354 · 358), 미분계수 정의 꼴 극한(347 · 348 · 349)이 반복된다. 뒤쪽 STEP 2·실력 UP 에서는 합·곱 조건 분해(352), 망원합(353), 구간별 정의 함수의 적분상수 연결(355), 함수방정식(357), 곱의 미분법 역인식(359)처럼 부정적분 밖의 도구가 끼어든다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 답은 전사·검수 단계에서 답지와 대조가 끝난 값을 그대로 옮겼다.

## 문항 데이터

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-170-341
  page: 170
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    F(x)=2x^3+ax^2+bx 가 f(x) 의 부정적분이고 f(0)=-3, f'(1)=0 일 때 상수 a, b 의 곱 ab.
  category: "F'=f 로 f 복원 → 두 조건으로 a, b 결정"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부정적분과 미분의 관계(F'=f)로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    F 를 미분해 f=6x^2+2ax+b, 한 번 더 미분해 f'=12x+2a. f(0)=b=-3, f'(1)=0 에서 a 가 나온다.
    통찰 없는 표준 절차이고 M_total 5 라 −1 후보지만, 조건이 f 와 f' 서로 다른 층에 걸쳐 있어
    부정적분 정의와 도함수를 한 번씩 써야 한다. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "F 미분 → f 계수식 → f(0)·f'(1) 두 조건 → a, b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/170-341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "F 의 세 계수(2, a, b)와 조건값(f(0), f'(1) 의 지정점)을 바꿀 수 있다. 제약: f'(1)=0 이 a 를 유일하게 정하도록 F 의 최고차항 계수를 0 이 아닌 값으로 두고, ab 가 정수가 되게 조건값을 고른다."
    creative: "(1) f'(1)=0 대신 f 의 최솟값을 주면 이차함수 극값 판정이 추가돼 ★3 (2) F 를 사차식으로 올려 f 를 삼차로 만들면 조건이 세 개 필요해 Mₛ 상승 ★3 (3) a, b 를 묻지 않고 F(1) 을 묻는 형태로 바꾸면 ★2 유지."
```

```yaml
- id: GN-CALC1-170-342
  page: 170
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=2x^2-x 에 대해 g(x)=∫{(d/dx)f(x)}dx, h(x)=(d/dx){∫f(x)dx} 로 둘 때, g(1)=2 조건에서 g(2)-h(-1).
  category: "적분과 미분의 순서 구별 → 적분상수 결정 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "∫(d/dx f)dx 와 (d/dx)∫f dx 의 구별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=f(x)+C, h(x)=f(x). g(1)=2 로 C 를 정한 뒤 g(2), h(-1) 을 대입한다.
    이 단원의 표준 개념 확인이라 통찰로 세지 않았고, 적분상수가 한쪽에만 붙는다는 T-표기 함정 하나만 Mₜ 에 반영.
    STEP 1 출발점 ★2 유지(함정 때문에 −1 하지 않음).
  tier: star_2
  mechanism_primary: "g=f+C · h=f 로 정리 → g(1)=2 로 C → g(2)-h(-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/170-342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수(2, -1)와 g(1) 의 값, 최종 대입점(2, -1)을 바꿀 수 있다. 제약: g(1) 조건이 C 를 정수로 만들고 h 쪽 대입점이 f 의 정의역 안이면 된다."
    creative: "(1) g(2)-h(-1) 대신 g(x)-h(x) 가 상수임을 묻는 서술형(★2 유지) (2) h 를 ∫{(d/dx)f}dx 로 바꿔 두 식이 모두 적분상수를 갖게 하면 조건이 두 개 필요 ★3 (3) 연산을 3중으로 중첩하면 171-351 꼴이 되어 ★3."
```

```yaml
- id: GN-CALC1-170-343
  page: 170
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=∫(√x+3)^2 dx + ∫(√x-3)^2 dx, f(0)=-10 일 때 f(2).
  category: "두 부정적분을 먼저 합쳐 무리항 소거 → 적분 → 상수 결정"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 부정적분을 각각 계산하지 않고 피적분함수를 먼저 더해 √x 항을 소거"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "피적분함수를 먼저 정리해 적분하기(무리항 소거)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    따로 전개하면 6√x 가 남아 미적분Ⅰ 범위에서 적분이 막힌다. 두 식을 합치면 2x+18 로 다항함수가 되어 한 줄에 끝난다.
    「먼저 더한다」는 착안 하나(EQV d1)·M_total 5 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 피적분함수 합 = 2x+18 → x^2+18x+C → f(0)=-10 으로 C → f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/170-343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 3, 초기조건 f(0)=-10, 대입점 2 를 바꿀 수 있다. 제약: 두 괄호의 부호가 짝을 이뤄 홀수 차수 무리항이 서로 상쇄돼야 하고(±k 쌍), 합이 다항식이어야 한다."
    creative: "(1) (√x+3)^2-(√x-3)^2 로 바꿔 차를 묻기 — 이때는 √x 만 남아 미적분Ⅰ 범위를 벗어나므로 반례 검토용 (2) 세제곱근·삼차식 쌍으로 확장하면 계산량만 늘어 ★2 유지 (3) 합이 다항식이 되는 조건 자체를 묻는 역문제로 바꾸면 I-BW 추가 ★3."
```

```yaml
- id: GN-CALC1-170-344
  page: 170
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f'(x)=6x^2+5 이고 y=f(x) 의 그래프가 점 (-2, 0) 을 지날 때 f(1).
  category: "f' 적분 → 한 점 조건으로 적분상수 → 함숫값"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f' 가 주어진 함수 구하기(한 점 조건)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=2x^3+5x+C, f(-2)=0 으로 C 를 정하고 f(1) 대입. 부정적분 정의 한 번·대입 두 번.
    통찰 0·M_total 3 → 산식 −1 적용해 STEP 1 출발점 ★2 에서 ★1.
  tier: star_1
  mechanism_primary: "f'=6x^2+5 적분 → f(-2)=0 으로 C → f(1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$33$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/170-344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 계수(6, 5), 지나는 점 (-2, 0), 대입점 1 을 바꿀 수 있다. 제약: 적분 결과의 계수가 정수가 되도록 f' 의 각 항 계수를 차수+1 의 배수로 둔다."
    creative: "(1) 지나는 점 대신 f 의 극값을 주면 극값 판정이 추가돼 ★2 (2) f' 를 그래프로 주면 171-350 꼴 ★3 (3) f' 에 미정계수를 넣고 두 점을 주면 연립이 생겨 ★2."
```

```yaml
- id: GN-CALC1-170-345
  page: 170
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 f 의 도함수가 ∫(2x-1)f'(x)dx = 2x^3+(1/2)x^2-2x+3 을 만족하고 f(-1)=1/2 일 때 f(2).
  category: "양변 미분 → 인수분해로 (2x-1) 약분 → f' 적분 → 상수 결정"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미분한 우변 6x^2+x-2 를 (2x-1)(3x+2) 로 인수분해해야 (2x-1) 이 약분되고 f' 가 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "∫g(x)f'(x)dx 가 주어진 식 — 양변 미분해 f 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 미분하면 (2x-1)f'(x)=6x^2+x-2. 우변을 인수분해해 (2x-1) 을 지우면 f' 가 일차식으로 떨어지고,
    적분 후 f(-1) 으로 상수를 정한다. 인수분해 착안 1개(EQV d1)·M_total 5 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "양변 미분 → (2x-1)f'=(2x-1)(3x+2) → f'=3x+2 → 적분·f(-1) 로 C → f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/170-345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱해진 일차식 (2x-1) 과 우변 삼차식의 계수를 바꿀 수 있다. 제약: 우변을 미분한 이차식이 반드시 그 일차식을 인수로 가져야 하므로, f'=px+q 를 먼저 정하고 (2x-1)(px+q) 를 적분해 우변을 역산한다."
    creative: "(1) 곱해진 식을 이차식으로 올리면 약분 뒤 f' 가 일차로 남아 ★3 (2) f(-1) 대신 f 의 극값을 주면 극값 판정 추가 ★3 (3) 좌변을 ∫f(x)g'(x)dx 로 바꾸면 부분적분 꼴이 되어 교육과정 밖 — 사용 금지."
```

```yaml
- id: GN-CALC1-170-346
  page: 170
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f'(x)=12x^2-4x+a 이고 f(x) 가 x^2-3x+2 로 나누어떨어질 때 상수 a.
  category: "f' 적분 → 인수정리로 f(1)=f(2)=0 → 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x^2-3x+2 로 나누어떨어진다」를 인수정리로 f(1)=0 이고 f(2)=0 이라는 두 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f' 와 나눗셈(인수정리) 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=4x^3-2x^2+ax+C 로 두고 나눗셈 조건을 근 조건으로 바꾸면 미지수 두 개(a, C)에 식 두 개.
    두 식을 빼면 C 가 사라져 a 만 남는다. 나눗셈→근 동치 변환 1개(EQV d1)·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f' 적분 → 나누어떨어짐 = f(1)=f(2)=0 → 두 식 차로 C 소거 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/170-346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 계수(12, -4)와 나누는 이차식의 두 근(1, 2)을 바꿀 수 있다. 제약: 두 근이 서로 달라야 C 가 소거되고, f' 의 계수는 적분 결과가 정수 계수가 되도록 차수+1 의 배수로 둔다."
    creative: "(1) 나누는 식을 (x-1)^2 로 바꾸면 f(1)=0 과 f'(1)=0 을 함께 써야 해 중근 해석이 추가돼 ★3 (2) a 대신 나머지를 묻기(★2 유지) (3) 나누어떨어지는 조건을 만족하는 a 의 존재 범위를 묻는 역문제 ★3."
```

```yaml
- id: GN-CALC1-170-347
  page: 170
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=2x^2-3 의 한 부정적분을 F 라 할 때 x→1 에서 {F(x^2)-F(1)}/(x-1) 의 극한.
  category: "분모를 x^2-1 로 맞춰 미분계수 정의 → F'(1)=f(1) → 배수 보정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x-1 로 나눈 꼴을 (x^2-1) 로 나눈 꼴과 (x^2-1)/(x-1) 의 곱으로 갈라 F 의 미분계수 정의를 만들어 냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부정적분과 미분계수의 정의를 이용한 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자의 증분은 x^2 기준인데 분모는 x 기준이라 그대로는 미분계수가 아니다. (x^2-1) 을 곱하고 나눠 F'(1)·2 로 정리한 뒤
    F'=f 를 쓰면 끝난다. 증분 불일치를 보정하는 착안 1개(EQV d2)·Mₜ 1(T-표기: 정의 오용) → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분모를 x^2-1 로 환산 → F'(1)·2 → F'=f 로 f(1)=-1 → -2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/170-347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수(2, -3), 극한점 1, 내부 함수 x^2 을 바꿀 수 있다. 제약: 내부 함수가 극한점에서 분모의 값과 같아야 F(g(x))-F(a) 가 0 으로 가고, 보정 배수 g'(a) 가 유한해야 한다."
    creative: "(1) 내부 함수를 x^3 이나 2x-1 로 바꿔 보정 배수를 달리하기(★2 유지) (2) 분자를 F(x^2)-F(x) 로 바꾸면 두 증분을 각각 분리해야 해 ★3 (3) 극한값을 주고 f 의 계수를 역으로 묻는 형태 ★3(I-BW 추가)."
```

```yaml
- id: GN-CALC1-171-348
  page: 171
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    h→0 에서 {f(x+2h)-f(x-h)}/h = 12x-3 이고 f(1)=2 일 때 f(x) 를 구하기.
  category: "f(x) 를 끼워 넣어 두 미분계수로 분리 → 3f'(x) → 적분"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자에 -f(x)+f(x) 를 끼워 넣어 증분 2h 와 -h 짜리 미분계수 두 개로 갈라 3f'(x) 로 통합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수 정의 꼴 극한으로 f' 를 찾아 f 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    증분이 2h 와 -h 로 섞여 있어 그대로는 정의가 아니다. f(x) 를 끼워 2f'(x)+f'(x)=3f'(x) 로 묶으면 f'=4x-1,
    적분 후 f(1)=2 로 상수를 정한다. 끼워 넣기 착안 1개(EQV d2)·계수 배수 보정 함정 Mₜ 1 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f(x) 삽입 → 2f'(x)+f'(x)=12x-3 → f'=4x-1 → 적분·f(1)=2 로 C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f(x)=2x^2-x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/171-348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "증분 계수(2h, -h), 우변 일차식(12x-3), f(1) 값을 바꿀 수 있다. 제약: 증분 계수의 합(여기서는 2-(-1)=3)이 우변의 각 계수를 나누어떨어지게 해야 f' 가 정수 계수로 나온다."
    creative: "(1) 우변을 이차식으로 올려 f 를 삼차로 만들기(★2 유지) (2) 증분을 ah, bh 로 문자화하고 a+b 를 역으로 묻기 ★3(I-BW) (3) f(1) 대신 f 의 최솟값을 주면 극값 판정이 붙어 ★3."
```

```yaml
- id: GN-CALC1-171-349
  page: 171
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f'(x)=8x+k 이고 x→2 에서 f(x)/(x-2) 의 극한이 1 일 때 f(1). (k 는 상수)
  category: "극한 존재 → f(2)=0 → 극한 = f'(2) 로 k 결정 → 적분상수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0 으로 가는데 극한이 유한하므로 분자도 0, 즉 f(2)=0 이라는 숨은 조건을 끌어냄"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(2)=0 을 넣으면 극한식이 그대로 f'(2) 의 정의가 되어 k 가 결정됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "극한값 존재 조건(분자→0)으로 f 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(2)=0 을 못 보면 아무것도 못 한다. 그 뒤 극한이 f'(2)=16+k 임을 읽어 k 를 정하고, 다시 f(2)=0 으로 적분상수를 정한다.
    조건이 두 겹(숨은 조건 → 정의 인식)이고 T-경계 함정이 있어 STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "극한 유한 → f(2)=0 → 극한=f'(2)=16+k=1 로 k → 적분·f(2)=0 으로 C → f(1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/171-349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 계수 8, 극한점 2, 극한값 1, 대입점 1 을 바꿀 수 있다. 제약: f'(2)=극한값 에서 k 가 정해지므로 극한값과 f' 의 계수 조합이 k 를 정수로 만들어야 하고, f(2)=0 이 C 를 정수로 남겨야 한다."
    creative: "(1) 분모를 (x-2)^2 로 올리면 f(2)=0 과 f'(2)=0 을 함께 요구해 ★4 (2) 극한값 대신 극한이 존재한다는 사실만 주고 가능한 k 의 값을 묻기 ★3 (3) f' 를 이차식으로 올려 f 를 삼차로 만들면 Mₛ 만 늘어 ★3 유지."
```

```yaml
- id: GN-CALC1-171-350
  page: 171
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f' 이 이차함수이고 y=f'(x) 의 그래프가 그림과 같을 때(위로 볼록 · x축과 x=-1, 0 에서 만남), f 의 극댓값 1, 극솟값 -1 이면 f(x) 를 구하기.
  category: "그래프에서 f'=ax(x+1) (a<0) → 적분 → 극값 두 조건으로 a, C"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 두 x절편과 위로 볼록이라는 기하 정보를 f'(x)=ax(x+1), a<0 이라는 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f' 의 그래프와 극값 조건으로 f 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a<0 이므로 f' 의 부호는 −, +, − 순이고 x=-1 이 극소, x=0 이 극대다. 이 뒤바뀜을 놓치면 두 조건을 거꾸로 쓴다.
    그래프→식 전환 1개(RT d1)·부호 함정 Mₜ 1·M_total 7 → STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "그림 → f'=ax(x+1), a<0 → 적분 → f(0)=1(극대)·f(-1)=-1(극소) → a, C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f(x)=-4x^3-6x^2+1$'
  answer_source: "답지"
  figure: "crop:fig-171-350.png"
  latex: latex-bank/gn-calc1/items/171-350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 두 x절편(-1, 0)과 극댓값·극솟값(1, -1)을 바꿀 수 있다. 제약: 그림 라벨은 그림 파일과 함께 고쳐야 하고, 극댓값-극솟값 차가 a 를 정수로 만들도록 절편 간격과 맞춘다(차 = |a|(절편간격)^3/6)."
    creative: "(1) 그래프를 아래로 볼록으로 바꾸면 극대·극소 위치가 뒤집혀 같은 ★3 (2) 극값 두 개 대신 극댓값과 f(0) 을 주면 조건 해석이 쉬워져 ★2 (3) 극댓값과 극솟값의 차만 주고 a 를 묻기 ★3 (4) f' 의 그래프를 삼차로 올리면 극값이 셋이 되어 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-171-351
  page: 171
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=x^100+x^99+…+x 에 대해 F(x)=∫[(d/dx)∫{(d/dx)f(x)}dx]dx 이고 F(0)=10 일 때 F(1).
  category: "3중 합성 연산을 안쪽부터 정리 → F=f+C → 항이 100개인 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분·적분 연산의 반복 합성 정리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    안쪽 ∫{(d/dx)f}dx=f+C1, 이를 미분하면 f', 다시 적분하면 f+C. 적분상수가 결국 한 번만 살아남고
    F(0)=10 으로 C=10. F(1) 은 1 이 100 개 더해진 값 100 에 10 을 더한다.
    개념은 342 와 같은 표준 정리라 통찰로 세지 않았고, 3중 중첩과 100 항 합이 노동량을 올려 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "안쪽부터 정리 → F=f+C → F(0)=10 으로 C → f(1)=100 → 110"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$110$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/171-351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차수 100, F(0)=10, 대입점 1 을 바꿀 수 있다. 제약: 대입점을 1 이외로 두면 f(a) 가 등비수열 합이 되어 계산이 무거워지므로 x=1 을 유지하거나 항 수를 크게 줄인다."
    creative: "(1) 중첩 순서를 바꿔 d/dx 가 바깥에 오게 하면 적분상수가 사라져 F(0) 조건이 모순 — 조건 정합성 판별 문제로 ★3 (2) 적분상수가 몇 개 살아남는지를 묻는 서술형(★3) (3) f 를 x^n+…+x 로 문자화하고 F(1)-F(0) 을 n 으로 표현하게 하면 Mₐ 상승 ★4."
```

```yaml
- id: GN-CALC1-171-352
  page: 171
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 f, g 가 f(0)=2, g(0)=-1 이고 (f+g)'=2x+1, (fg)'=3x^2-2x+2 일 때 f(2)+g(3).
  category: "두 도함수 조건 적분 → 합·곱 확정 → 곱을 인수분해해 f, g 배정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합 x^2+x+1 과 곱 x^3-x^2+2x-2 를 함께 놓고, 곱을 (x-1)(x^2+2) 로 인수분해해 두 함수를 한 번에 분해"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 인수 중 어느 쪽이 f 인지는 f(0)=2, g(0)=-1 로 판정하고 반대 배정은 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 함수의 합·곱의 도함수 조건으로 f, g 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각각 적분하고 초기값으로 적분상수를 정하면 합과 곱이 확정된다. 여기서 멈추지 않고 곱을 인수분해해
    합이 맞는 조를 찾아야 개별 함수가 나온다 — 차수가 1 과 2 로 갈린다는 점도 스스로 봐야 한다.
    조건 통합(CON d2)과 배정 검증(VF d1) 두 통찰·M_total 8 → STEP 2 출발점 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "각각 적분·초기값 → 합 x^2+x+1, 곱 (x-1)(x^2+2) → f(0)=2 로 f=x^2+2, g=x-1 → f(2)+g(3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/171-352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f, g 를 먼저 정하고(예: x^2+c 와 x+d) 합·곱을 미분해 조건식을 역산한다. 제약: 곱의 인수분해가 유리수 범위에서 되어야 하고 두 초기값이 서로 달라야 배정이 유일하다."
    creative: "(1) 초기값 하나만 주면 두 배정이 모두 살아남아 답이 두 개 — I-MI 로 성격이 바뀌며 ★4 유지 (2) f-g 의 도함수까지 주면 연립이 선형이 되어 인수분해가 불필요해져 ★3 (3) f, g 를 모두 이차로 만들면 곱이 사차가 되어 인수분해 부담만 커짐(질 저하 — 권장하지 않음)."
```

```yaml
- id: GN-CALC1-171-353
  page: 171
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f'(x)=x+(1/2)x^2+(1/3)x^3+…+(1/n)x^n 이고 f(0)=0, f(1)=9/10 일 때 자연수 n.
  category: "항별 적분 → 일반항 1/{k(k+1)} 발견 → 부분분수 망원합 → n 결정"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "항별 적분 결과 x^(k+1)/{k(k+1)} 에서 x=1 일 때의 일반항이 1/{k(k+1)} 임을 스스로 읽어 냄"
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부분분수 1/k-1/(k+1) 로 갈라 망원합 n/(n+1) 로 접는 수열 단원 도구를 끌어옴"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "일반항이 주어진 f' 의 적분과 망원합(부분분수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f(0)=0 이라 적분상수는 0. f(1) 은 1/(1·2)+1/(2·3)+…+1/{n(n+1)} 이고, 부분분수로 접으면 1-1/(n+1)=n/(n+1).
    이를 9/10 과 맞추면 n 이 나온다. 일반항 발견(PD d2)과 단원 밖 망원합(XU d1) 두 통찰·M_total 7
    → STEP 2 출발점 ★3 에서 +1 → ★4. 저노출 유형(PD·XU) 보유로 ★4 게이트 충족.
  tier: star_4
  mechanism_primary: "항별 적분 → f(1)=Σ 1/{k(k+1)} → 망원합 n/(n+1)=9/10 → n"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/171-353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(1) 의 값(9/10)만 바꾸면 n 이 따라 바뀐다. 제약: f(1)=n/(n+1) 이므로 주는 값은 분모-분자가 1 인 기약분수라야 자연수 해가 나온다."
    creative: "(1) f(1) 대신 f(1) 이 어떤 값보다 크게 되는 최소 n 을 묻는 부등식형 ★4 (2) f' 의 계수를 1/{k(k+2)} 꼴로 바꾸면 망원합이 두 칸 건너뛰어 ★4 유지 (3) n 을 주고 f(1) 을 묻는 순방향으로 바꾸면 역추적이 사라져 ★3."
```

```yaml
- id: GN-CALC1-172-354
  page: 172
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    다항함수 f 의 한 부정적분 F 가 모든 실수 x 에서 F(x)=(x+2)f(x)-x^3+12x 를 만족하고 F(0)=30 일 때 f(2).
  category: "관계식 양변 미분 → F'=f 대입 → (x+2) 약분 → f 적분상수 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "F 를 직접 구하려 하지 않고 양변을 미분해 F'=f 를 대입, f 가 소거되며 f' 만 남는 식으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "F(x)=g(x)f(x)+… 관계식 — 양변 미분해 f 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변 미분하면 f=f+(x+2)f'-3x^2+12, 즉 (x+2)f'=3(x-2)(x+2) 에서 f'=3x-6.
    적분 후 상수는 원래 관계식에 x=0 을 넣어 F(0)=2f(0)=30 으로 정한다(F 를 따로 구하지 않는 것이 요령).
    양변 미분 착안 1개(EQV d2)·M_total 6, 기출 태그는 +0 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "양변 미분 → (x+2)f'=3(x^2-4) → f'=3x-6 → x=0 대입해 f(0)=15 → f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/172-354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱해진 일차식 (x+2), 뒤따르는 다항식 -x^3+12x, F(0) 값, 대입점 2 를 바꿀 수 있다. 제약: 미분 후 남는 식이 (x+2) 를 인수로 가져야 약분되므로 f'=px+q 를 먼저 정하고 (x+2)f' 를 적분해 역산한다."
    creative: "(1) F(0) 대신 f(0) 을 주면 마지막 환원 단계가 사라져 ★2~3 (2) 곱해진 식을 이차식으로 올리면 약분 뒤 f' 가 일차로 남아 ★4 (3) 조건을 만족하는 f 가 존재할 최고차수를 묻는 차수 논증형 ★4."
```

```yaml
- id: GN-CALC1-172-355
  page: 172
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    미분가능한 F 의 도함수 f 가 x<0 에서 -2x, x≥0 에서 k(2x-x^2) 인 구간별 함수일 때 F(2)-F(-3)=21 을 만족하는 상수 k.
  category: "구간별로 F 를 적분 → x=0 에서 연속으로 두 적분상수 연결 → 차 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간마다 독립인 두 적분상수를 x=0 에서 F 가 연속(미분가능)이라는 조건으로 하나로 묶어 차 계산에서 소거"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별로 정의된 f 의 부정적분(연속성으로 적분상수 연결)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x<0 에서 F=-x^2+C, x≥0 에서 F=k(x^2-x^3/3)+C' 이고 F 가 x=0 에서 연속이라 C=C'.
    그래서 F(2)-F(-3)=4k/3+9=21 로 k 가 나온다. 두 상수를 따로 두면 미지수가 남아 풀리지 않는다.
    상수 연결 착안 1개(CON d2)·경계 함정 Mₜ 1·M_total 7, 기출 태그 +0 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "구간별 적분 → x=0 연속으로 상수 일치 → F(2)-F(-3)=4k/3+9=21 → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/172-355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구간의 식(-2x, k(2x-x^2)), 두 대입점(2, -3), 차의 값 21 을 바꿀 수 있다. 제약: 경계 x=0 에서 f 의 좌우 극한이 같아야 F 가 미분가능하고(여기선 둘 다 0), 차 조건이 k 를 정수로 만들어야 한다."
    creative: "(1) 경계를 x=1 로 옮기면 f 의 좌우 값이 같아야 한다는 조건이 추가돼 ★4 (2) k 대신 F(2)-F(-3) 을 묻는 순방향으로 바꾸면 역추적이 빠져 ★2~3 (3) f 를 세 구간으로 쪼개면 상수 연결이 두 번 필요해 ★4."
```

```yaml
- id: GN-CALC1-172-356
  page: 172
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    삼차함수 y=f(x) 위의 점 (x, f(x)) 에서의 접선의 기울기가 ax^2-3x-6 이고 f 가 x=-1 에서 극댓값 11/2 를 가질 때 f 의 극솟값. (a 는 상수)
  category: "접선 기울기 = f' → 극대 조건으로 a → 적분·극값 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「임의의 점에서의 접선의 기울기」라는 기하 서술을 f'(x)=ax^2-3x-6 이라는 도함수 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 기울기 조건과 극값으로 삼차함수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(-1)=0 에서 a=3, f'=3(x-2)(x+1) 이므로 최고차 계수가 양수 → x=-1 극대, x=2 극소.
    적분한 f 에 극댓값 조건으로 상수를 정하고 f(2) 를 계산한다. a 의 부호를 확인하지 않으면 극대·극소가 뒤바뀐다.
    기하→도함수 전환 1개(RT d1)·부호 함정 Mₜ 1·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "접선 기울기=f' → f'(-1)=0 으로 a=3 → 적분·f(-1)=11/2 로 C → f(2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/172-356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 일차·상수항(-3, -6)과 극점 -1, 극댓값 11/2 를 바꿀 수 있다. 제약: f' 의 두 근이 실수로 갈라져야 극값이 둘 생기고, a 가 극점 조건에서 유일하게 결정돼야 한다."
    creative: "(1) 극댓값 대신 두 극값의 차를 주면 상수가 소거돼 a 만 묻는 문제로 ★3 (2) 접선의 기울기 식에 미정계수를 둘 넣고 두 극점을 주면 연립이 생겨 ★4 (3) 극솟값 대신 극대·극소를 갖도록 하는 a 의 범위를 묻는 역문제 ★4(I-BW)."
```

```yaml
- id: GN-CALC1-172-357
  page: 172
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 f 가 모든 실수 x, y 에 대해 f(x+y)=f(x)+f(y)-3xy+1 을 만족하고 f'(2)=-4 일 때 f 의 최댓값.
  category: "함수방정식 → f(0) 확정 → 미분계수 정의에 대입해 f' 유도 → 적분 → 꼭짓점"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=y=0 을 넣어 f(0)=2f(0)+1 에서 f(0)=-1 을 먼저 확정"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "함수방정식을 f(x+h)-f(x) 에 대입해 극한식을 f'(0)-3x 라는 도함수 표현으로 옮김"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "함수방정식에서 f' 를 구해 f 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    관계식을 미분계수 정의에 넣으면 f'(x)=f'(0)-3x 로 x 에 대한 일차식이 되고, f'(2)=-4 에서 f'(0)=2.
    적분하고 f(0)=-1 로 상수를 정하면 위로 볼록한 이차함수라 꼭짓점이 최댓값이다.
    특수값 대입(CON d1)과 정의 대입 전환(RT d2) 두 통찰·M_total 7 → STEP 2 출발점 ★3 에서 +1 → ★4(RT 로 게이트 충족).
  tier: star_4
  mechanism_primary: "x=y=0 → f(0)=-1 → 정의 대입해 f'(x)=f'(0)-3x → f'(2)=-4 로 f'(0)=2 → 적분 → 꼭짓점"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/172-357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "관계식의 -3xy 계수와 상수 +1, 그리고 f'(2) 의 값을 바꿀 수 있다. 제약: xy 의 계수가 음수라야 f 가 위로 볼록해 최댓값이 존재하고, 최댓값이 유리수로 떨어지도록 계수를 고른다."
    creative: "(1) xy 계수를 양수로 바꾸면 최솟값 문제가 되고 ★4 유지 (2) -3xy 를 -3(x^2y+xy^2) 로 올리면 f 가 삼차가 되어 극값 판정이 추가돼 ★5 근접 (3) f'(2) 대신 f(1) 을 주면 f'(0) 이 안 정해져 조건 부족 — 출제 시 주의."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-172-358
  page: 172
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 다항함수 f, g 가 f(x)=∫xg(x)dx 이고 (d/dx){f(x)-g(x)}=2x^3+5x 를 만족할 때 g(1).
  category: "f'=xg 로 적분기호 제거 → 차수 비교로 g 의 차수 확정 → 계수 비교"
  M: {s: 2, k: 2, a: 3, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f=∫xg dx 를 f'(x)=xg(x) 로 바꿔 적분기호를 없애고 두 조건을 하나의 항등식 xg(x)-g'(x)=2x^3+5x 로 합침"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우변이 삼차이고 xg 가 g 보다 두 차수 높으므로 g 가 이차라는 것을 결과 차수에서 역추적"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "적분·미분 관계식에서 차수 비교로 다항함수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    g 의 차수를 먼저 정하지 않으면 미정계수를 몇 개 둘지 모른다. xg 의 차수가 우변과 같아야 하므로 g 는 이차.
    g=ax^2+bx+c 로 두고 xg-g' 를 우변과 계수 비교하면 a=2, b=0, c=9.
    적분기호 제거(EQV d1)와 차수 역추적(BW d2) 두 통찰·M_total 7 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "f'=xg → xg-g'=2x^3+5x → 차수 비교로 g 이차 → 계수 비교 → g(1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/172-358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 2x^3+5x 의 계수와 차수를 바꿀 수 있다. 제약: 우변의 최고차수가 홀수여야 g 의 차수가 정수로 떨어지고, 계수 비교식이 모순 없이 풀리도록 g 를 먼저 정해 우변을 역산하는 편이 안전하다."
    creative: "(1) f(x)=∫x^2 g(x)dx 로 올리면 차수 차가 3 이 되어 같은 골조 ★4 (2) f(1) 같은 초기조건을 더해 f 까지 묻게 하면 Mₛ 상승 ★4 유지 (3) 조건을 만족하는 g 가 존재할 우변의 조건을 묻는 형태로 뒤집으면 ★5 근접."
```

```yaml
- id: GN-CALC1-172-359
  page: 172
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    최고차항 계수 1 인 삼차 f 가 f(0)=0, f(k)=0, f'(k)=0 (k>0) 이고, g 가 ㈎ g'(x)=f(x)+xf'(x) ㈏ g 의 극댓값 16·극솟값 0 을 만족할 때 g(k/4).
  category: "중근 구조로 f 확정 → g'=(xf)' 역인식 → g={x(x-k)}^2+C 로 극값 판정 → k"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(k)=0 과 f'(k)=0 을 함께 쓰면 x=k 가 중근, f(0)=0 과 최고차 1 까지 더해 f(x)=x(x-k)^2 로 확정"
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "f(x)+xf'(x) 를 곱의 미분법 결과로 거꾸로 읽어 g'(x)={xf(x)}' 로 보고 g(x)=xf(x)+C 를 얻음"
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g=x^2(x-k)^2={x(x-k)}^2+C 라는 완전제곱 구조를 보면 극솟값이 두 곳 모두 C, 극댓값은 x=k/2 한 곳임이 바로 나옴"
  insight_count: 3
  depth_score: 2.33
  type_id: null
  type_hint: "곱의 미분법 역이용(g'=f+xf')과 극값 조건으로 미정 상수 결정"
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    g'=f+xf' 를 {xf}' 로 읽지 못하면 삼차를 직접 적분하는 길로 빠져 구조가 보이지 않는다.
    완전제곱 꼴로 보면 극솟값 0 에서 C=0, 극댓값은 x=k/2 에서 k^4/16=16 이라 k=4(k>0 로 음의 근 기각).
    통찰 3개(EQV d2·RT d3·SYM d2)에 저노출 유형 SYM 포함·M_total 9 → 실력 UP 출발점 ★4 에서 +1 → ★5.
    [분류 이슈] novelty_score 를 이 작업에서는 평가하지 않고 0 으로 두므로 §2.14 ★5 참신도 게이트는 보류 상태다.
  tier: star_5
  mechanism_primary: "f=x(x-k)^2 → g'=(xf)' 로 g={x(x-k)}^2+C → 극솟값 0 으로 C=0·극댓값 16 으로 k=4 → g(1)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/172-359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극댓값 16, 극솟값 0, 묻는 점 k/4 를 바꿀 수 있다. 제약: 극댓값-극솟값 = k^4/16 이므로 k 가 양의 정수로 떨어지도록 차를 네제곱수의 16배로 두고, 묻는 점은 k 의 약수 배로 잡아야 값이 정수가 된다."
    creative: "(1) g'=f+xf' 를 g'=2f+xf' 로 바꾸면 {x^2 f}' 가 아니어서 역인식이 막힌다 — 반례 검토용 (2) f 의 중근 위치를 0 으로 옮기면 f=x^2(x-k) 가 되어 완전제곱 구조가 깨지고 극값 계산이 무거워져 질 저하 (3) k 를 주고 극댓값을 묻는 순방향으로 바꾸면 역추적이 빠져 ★4 (4) 조건 ㈏ 를 「극댓값과 극솟값의 차가 16」으로 바꾸면 C 가 미정으로 남아 g(k/4) 가 결정되지 않음 — 출제 시 주의."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 1 · ★2 7 · ★3 6 · ★4 4 · ★5 1
- 통찰형 15 · 절차형 4(170-341 · 170-342 · 170-344 · 171-351) · premium 0
- 통찰 유형 분포: I-EQV 9 · I-RT 4 · I-CON 3 · I-PD 1 · I-XU 1 · I-VF 1 · I-BW 1 · I-SYM 1 (총 21개 라벨 · depth 3 은 172-359 의 RT 하나)
- 구역별: 연습문제 STEP 1 10문(★1 1 · ★2 7 · ★3 2) · STEP 2 7문(★3 4 · ★4 3) · 실력 UP 2문(★4 1 · ★5 1)
- type_hint 상위 5: 「양변 미분해 f 구하기」 3(170-345 · 172-354 · 172-358) · 「미분계수 정의 꼴 극한」 3(170-347 · 171-348 · 171-349) · 「f' 와 조건으로 미정계수 결정」 3(170-341 · 170-344 · 170-346) · 「미분·적분 연산 순서 정리」 2(170-342 · 171-351) · 「극값 조건으로 삼차함수 결정」 2(171-350 · 172-356)
- 그림: 1문(`crop:fig-171-350.png` — f' 의 그래프. 두 x절편과 위로 볼록이 골조에 직접 쓰이므로 변형 시 라벨 고정)
- 대상층: 하위권 1 · 중하위권 2 · 중위권 9 · 중상위권 6 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-172-359 | 통찰 3개 + I-SYM 으로 ★5 요건을 채웠으나 novelty_score 를 이 작업에서 평가하지 않아(0 고정) §2.14 ★5 참신도 게이트는 보류 | ★5 (게이트 보류) |
| GN-CALC1-170-341 | 통찰 0 · M_total 5 라 산식상 −1 후보(★1)지만 f 와 f' 두 층을 모두 써야 해 STEP 1 출발점 ★2 유지 | ★1 / ★2 |
| GN-CALC1-171-351 | 342 와 같은 개념(연산 순서)이라 통찰 0 으로 뒀으나 3중 중첩·100항 합의 노동량 때문에 STEP 2 출발점 ★3 을 유지 — 절차형 ★3 이 이 파일에서 유일 | ★2 / ★3 |
| GN-CALC1-171-352 | 곱의 인수분해로 f, g 를 분해하는 단계를 I-CON 으로 볼지 I-EQV 로 볼지 갈림. 배정 기각 단계를 I-VF 로 셌으나 depth 1 로 약함 | ★3 / ★4 |
| GN-CALC1-171-353 | 부분분수 망원합을 I-XU(대수 단원 도구 결합)로 셌다. 미적분Ⅰ 교재 안에서 수열 도구를 단원 경계로 볼지 카탈로그 설계 때 확정 필요 | ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「관계식 양변 미분 → 인수 약분」(170-345 · 172-354 · 172-358)은 이 단원의 대표 골조라 독립 유형이 필요하다. ② 「미분계수 정의 꼴 극한으로 f' 찾기」(170-347 · 171-348 · 171-349)도 별도 유형 — 특히 171-349 의 「분자→0」 숨은 조건은 하위 유형으로 갈라 두는 편이 좋다. ③ 「구간별 정의 함수의 부정적분 — 연속성으로 적분상수 연결」(172-355)은 이 조각에 한 문항뿐이지만 기출 빈도가 높아 단독 유형 가치가 있다.
- **통합해도 될 유형**: 170-341 · 170-344 · 170-346 · 171-350 · 172-356 은 모두 「f' 가 (식·그래프·기울기로) 주어지고 조건으로 미정계수를 정한다」는 한 골조다. f' 가 주어지는 **형태**(식/그래프/접선 기울기)와 조건의 **종류**(한 점/극값/나눗셈)를 축으로 한 유형의 하위 분기로 묶는 편이 낫다.
- **연산 순서 유형**(170-342 · 171-351)은 중첩 깊이만 다른 같은 유형이므로 base ★ 를 하나로 두고 중첩 깊이를 난이도 변수로 두면 된다.

---
name: mechanism-데이터-RPM-CALC2-03-p1
description: RPM 미적분Ⅱ 03 지수함수와 로그함수의 미분(1/3 · 교과서 03-1~03-3 + 유형 01~02) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 03 지수함수와 로그함수의 미분
  unit_code: CALC2-03
  part: "1/3"
  extract_range: "43~44쪽 · 0257~0288"
  total_problems: 32
  unit_total: 102
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 03 지수함수와 로그함수의 미분 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 03 지수함수와 로그함수의 미분 단원의 첫 범위(43~44쪽 · 0257~0288 · 32문항)를 다룬다. 앞 24문(0257~0280)은 「교과서 03-1 지수함수와 로그함수의 극한」 · 「교과서 03-2 무리수 e와 자연로그」 · 「교과서 03-3 지수함수와 로그함수의 도함수」 구역의 교과서 기본 문제(각 8문 · 한 구역이 한 발문 「극한을 조사하시오 / 극한값을 구하시오 / 미분하시오」 아래 소문항처럼 나열됨)이고, 뒤 8문(0281~0288)은 「유형 01 지수함수의 극한」 · 「유형 02 로그함수의 극한」의 유형별 기본 문제다. RPM 은 구역이 곧 난이도 층(교과서 → 유형 → 유형 UP → 시험에 꼭 나오는 문제 → 서술형 → 실력 Up)이므로 교과서 24문은 ★1 출발, 유형 8문은 첫 문항(태그 「대표문제」 · level 없음)과 level 「중」 문항 모두 ★2 출발이다. 그림은 없고 태그는 「대표문제」 2건 · 「서술형」 1건뿐이다.

출발점에서 M_total·통찰로만 ±1 조정했다. 이 범위는 32문 전부 절차형(통찰 0)이고, 교과서 구역은 M_total 4~5 라 ★1 그대로, 유형 구역은 M_total 5~7 이라 「통찰 0·M_total ≤ 5 → −1 후보」가 걸리는 문항이 있으나 두 기법이 사슬로 이어지는 유형 대표·중 문항은 벤더 신호대로 ★2 를 유지하고(한 단계짜리 M_total 4 인 경우에만 −1 을 적용하는 정책), 교과서 문항과 골조가 사실상 같은 경우는 [분류 이슈] 로 기록만 했다. 결과는 ★1 24문 · ★2 8문 · 통찰형 0 이다.

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(이 범위는 전부 절차형이라 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다.

## 문항 데이터

### 교과서 03-1 지수함수와 로그함수의 극한

```yaml
- id: RPM-CALC2-0257
  page: 43
  vendor_label: "교과서 03-1 지수함수와 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 $\left(\dfrac{3}{4}\right)^x$ 의 극한 조사(밑이 0<a<1 인 지수함수).
  category: "지수함수의 극한 → 밑의 범위로 수렴·발산 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 a^x 의 극한(밑의 범위)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    0<3/4<1 이므로 x→∞ 에서 (3/4)^x → 0. 밑의 범위 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 3/4 가 0<a<1 → x→∞ 에서 a^x → 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 다른 0<a<1 (1/2 · 0.9 · 2/5) 또는 a>1 (5/4 · 3) 로, 방향을 x→−∞ 로 바꿀 수 있음. 제약: 밑은 양수이고 1 이 아니어야 하며, 답이 0 · ∞ 중 어느 쪽인지는 밑의 범위와 방향의 조합으로 정해짐."
    creative: "(1) 밑을 (a/4)^x 처럼 매개변수로 두고 수렴하는 a 의 범위 묻기(Mₐ 2 · ★1~2) (2) 3^x/4^x 처럼 비로 주어 (3/4)^x 로 고쳐 읽게 하기(★1) (3) (3/4)^x 와 (4/3)^{−x} 가 같음을 이용해 x→−∞ 로 비틀기(T-부호 · ★2)."
```

```yaml
- id: RPM-CALC2-0258
  page: 43
  vendor_label: "교과서 03-1 지수함수와 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 $\dfrac{2^x}{1+2^x}$ 의 극한 조사(∞/∞ 꼴).
  category: "∞/∞ 꼴 → 우세항 2^x 로 나누기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 ∞/∞ 꼴 극한(우세항으로 나누기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분모·분자를 2^x 로 나누면 1/(2^{−x}+1) → 1. 유리함수 극한과 같은 「최고차항으로 나누기」를 지수에 옮긴 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분모·분자 ÷ 2^x → 1/(2^{−x}+1) → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 를 3 · 5 로, 분모 상수 1 을 다른 양수로, 분자를 k·2^x 로 바꿀 수 있음(답 k). 제약: 밑 a>1 이고 x→∞ 여야 우세항이 a^x 가 됨. x→−∞ 로 바꾸면 답이 0 으로 바뀜."
    creative: "(1) 분모를 2^x+2^{−x} 로 두면 0260 골조와 합쳐짐(★1) (2) 방향을 x→−∞ 로 바꾸어 우세항이 상수 1 로 바뀌는 점을 묻기(T-부호 · ★1~2) (3) 분모·분자에 밑이 다른 3^x 를 섞어 우세항 판단을 추가(★2 · 유형 01 골조)."
```

```yaml
- id: RPM-CALC2-0259
  page: 43
  vendor_label: "교과서 03-1 지수함수와 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 $3^x-5^x$ 의 극한 조사(∞−∞ 꼴).
  category: "∞−∞ 꼴 → 우세항 5^x 묶어내기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 ∞−∞ 꼴 극한(우세항 묶어내기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5^x{(3/5)^x−1} 로 묶으면 5^x→∞ · 괄호→−1 이므로 −∞. 우세항 묶어내기 한 단계. 함정은 ∞−∞ 를 0 으로 착각하는 T-표기 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "5^x{(3/5)^x − 1} → ∞ × (−1) → −∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(3, 5)의 크기 순서를 바꾸면 답이 ∞ 로, 계수를 붙이면(2·3^x − 5^x) 부호는 큰 밑이 결정. 제약: 두 밑이 모두 1 보다 크고 서로 달라야 ∞−∞ 꼴이 생김. 같은 밑이면 한 줄 계산이 됨."
    creative: "(1) 3^x − 5^x 를 x→−∞ 로 보내 두 항 모두 0 으로 수렴하는 경우(★1) (2) 4^x − 2^{x+1} 처럼 지수법칙으로 밑을 맞춘 뒤 판단(★1~2) (3) a^x − b^x 의 극한이 −∞ 가 되는 조건을 묻는 매개변수형(Mₐ 2 · ★2)."
```

```yaml
- id: RPM-CALC2-0260
  page: 43
  vendor_label: "교과서 03-1 지수함수와 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→−∞ 일 때 $\dfrac{10^x+10^{-x}}{10^x-10^{-x}}$ 의 극한 조사.
  category: "x→−∞ → 우세항 10^{−x} 로 나누기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수 ∞/∞ 꼴 극한(x→−∞ · 우세항 판단)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x→−∞ 에서는 10^{−x} 가 우세하므로 분모·분자를 10^{−x} 로 나누면 (10^{2x}+1)/(10^{2x}−1) → −1. 방향이 −∞ 라 우세항이 뒤집히는 T-부호 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x→−∞ 에서 우세항 10^{−x} → 분모·분자 ÷ 10^{−x} → (10^{2x}+1)/(10^{2x}−1) → −1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 10 을 다른 a>1 로, 방향을 x→∞ 로(답 1) 바꿀 수 있음. 제약: 분모가 0 이 되지 않게 x≠0 근방을 피하고, 답은 방향에 따라 ±1 로만 바뀜."
    creative: "(1) x=−t 치환 없이 우세항만 골라 답하게 하기(★1) (2) 분모·분자의 밑을 다르게(3^x 와 2^{−x}) 두면 유형 01 문항 0282 골조(★2) (3) 좌우 극한값을 각각 구해 x→±∞ 에서의 그래프 점근선을 묻기(I-RT d1 · ★2)."
```

```yaml
- id: RPM-CALC2-0261
  page: 43
  vendor_label: "교과서 03-1 지수함수와 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0+ 일 때 $\log_5 x$ 의 극한 조사(밑 a>1 인 로그함수).
  category: "로그함수의 극한 → 밑의 범위·진수 방향으로 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 log_a x 의 극한(밑의 범위 · 진수의 방향)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    밑 5>1 이고 진수가 0+ 로 가므로 −∞. 로그함수 그래프의 y축 점근선 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "밑 5>1 · x→0+ → log_5 x → −∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\infty$'
  answer_source: "해설(답 크롭 불일치 · 0262 답이 잡힘)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 다른 a>1 (2 · 10 · e) 또는 0<a<1 (1/3 · 답 ∞) 로, 방향을 x→∞ 로 바꿀 수 있음. 제약: 진수 x>0 이므로 x→0 은 반드시 우극한이어야 함."
    creative: "(1) 밑을 0<a<1 로 바꿔 부호가 뒤집히는 점을 묻기(T-부호 · ★1) (2) log_5 (x−1) 처럼 진수를 평행이동해 x→1+ 로 바꾸기(★1) (3) 두 로그 log_5 x 와 log_{1/5} x 의 합·차 극한(★1~2)."
```

```yaml
- id: RPM-CALC2-0262
  page: 43
  vendor_label: "교과서 03-1 지수함수와 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 $\log_4(x^2+1)$ 의 극한 조사(합성 · 진수가 ∞ 로).
  category: "진수의 극한 → 로그함수의 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 log_a x 의 극한(밑의 범위 · 진수의 방향)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    진수 x²+1 → ∞ 이고 밑 4>1 이므로 ∞. 안쪽 극한 뒤 로그의 방향 확인, 두 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "진수 x²+1 → ∞ · 밑 4>1 → log_4(진수) → ∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\infty$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수를 다른 다항식(2x+3 · x³−x)이나 지수식(2^x+1)으로, 밑을 0<a<1 로(답 −∞) 바꿀 수 있음. 제약: 진수가 정의역에서 양수여야 하고 극한 방향에서 ∞ 또는 0+ 로 가야 답이 ±∞ 로 정해짐."
    creative: "(1) 진수를 (x²+1)/(x+1) 처럼 유리식으로 두어 진수 극한 한 단계를 먼저 계산(★1~2) (2) 진수가 유한값으로 수렴하게(x²+1)/(x²) 두면 로그 극한이 상수(★1) (3) log_4(x²+1) − log_4 x² 처럼 로그 차로 주면 유형 02 골조(★2)."
```

```yaml
- id: RPM-CALC2-0263
  page: 43
  vendor_label: "교과서 03-1 지수함수와 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 $\log_3\dfrac{1}{x}$ 의 극한 조사(진수가 0+ 로).
  category: "진수 1/x → 0+ → 로그함수의 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 log_a x 의 극한(밑의 범위 · 진수의 방향)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1/x → 0+ 이므로 log_3(1/x) → −∞ (또는 −log_3 x → −∞). 진수 방향 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "진수 1/x → 0+ · 밑 3>1 → −∞ (= −log_3 x)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 0<a<1 로(답 ∞), 진수를 1/x² · 1/(x+1) · 2/x 로 바꿀 수 있음. 제약: x→∞ 에서 진수가 0+ 로 가야 하며, 진수를 상수배 해도 답은 변하지 않음."
    creative: "(1) log_3(1/x) = −log_3 x 로 고쳐 부호를 묻는 형태(★1) (2) x→0+ 로 방향을 바꿔 진수가 ∞ 로 가게(답 ∞ · ★1) (3) log_3(1/x) + log_3 x 처럼 상쇄되는 합으로 ∞−∞ 꼴 함정 만들기(★2)."
```

```yaml
- id: RPM-CALC2-0264
  page: 43
  vendor_label: "교과서 03-1 지수함수와 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→4+ 일 때 $\log_{\frac{1}{2}}(x-4)$ 의 극한 조사(밑 0<a<1 · 진수 0+).
  category: "밑 0<a<1 · 진수 0+ → 로그함수의 극한"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수 log_a x 의 극한(밑의 범위 · 진수의 방향)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x−4 → 0+ 이고 밑 1/2 가 0<a<1 이므로 ∞. 밑이 1 보다 작아 부호가 뒤집히는 T-부호 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "진수 x−4 → 0+ · 밑 1/2 (0<a<1) → ∞"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\infty$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 4 를 다른 수로, 밑을 1/3 · 0.1 (답 ∞ 유지) 또는 a>1 (답 −∞) 로 바꿀 수 있음. 제약: 진수 x−4>0 이므로 x→4 는 우극한만 가능하고, 좌극한을 묻는 변형은 정의역 밖이라 성립하지 않음."
    creative: "(1) x→4− 를 함께 물어 정의역 밖임을 판단하게 하기(T-범위 · ★1~2) (2) 진수를 |x−4| 로 두어 양쪽 극한이 같게 만들기(★1) (3) 밑을 매개변수 a 로 두고 극한이 ∞ 가 되는 a 의 범위 묻기(Mₐ 2 · ★2)."
```

### 교과서 03-2 무리수 $e$와 자연로그

```yaml
- id: RPM-CALC2-0265
  page: 43
  vendor_label: "교과서 03-2 무리수 $e$와 자연로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 $(1+2x)^{\frac{1}{x}}$ 의 극한값.
  category: "e 의 정의 → 지수를 1/(2x)·2 로 맞추기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+ax)^{b/x} 꼴 극한(e 의 정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {(1+2x)^{1/(2x)}}² 로 지수를 맞추면 e². 괄호 안의 계수와 지수를 맞추는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1+2x)^{1/x} = {(1+2x)^{1/(2x)}}^2 → e^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수 2 를 다른 상수 a (3 · −1 · 1/2) 로, 지수를 k/x 로 바꾸면 답 e^{ak}. 제약: a≠0 이고 x→0 이어야 하며, a<0 이면 답이 e 의 음수 지수(분수 꼴)로 나옴."
    creative: "(1) 밑을 (1−2x) 로 바꿔 부호 처리 추가(T-부호 · ★1) (2) (1+2x)^{1/x} 와 (1+x)^{2/x} 가 같은 값임을 비교하게 하기(★1) (3) 극한값이 e^4 가 되는 지수를 미정계수로 묻기(Mₐ 2 · ★2)."
```

```yaml
- id: RPM-CALC2-0266
  page: 43
  vendor_label: "교과서 03-2 무리수 $e$와 자연로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 $\left(1+\dfrac{x}{2}\right)^{\frac{3}{x}}$ 의 극한값.
  category: "e 의 정의 → 지수를 (2/x)·(3/2) 로 맞추기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+ax)^{b/x} 꼴 극한(e 의 정의)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {(1+x/2)^{2/x}}^{3/2} 로 쓰면 e^{3/2}. 계수가 분수라 지수 맞추기에 분수 곱이 한 번 들어갈 뿐 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1+x/2)^{3/x} = {(1+x/2)^{2/x}}^{3/2} → e^{3/2}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$e^{\frac{3}{2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수 1/2 와 지수 계수 3 을 다른 유리수로 바꾸면 답 e^{(1/2)·3} 자리에 두 계수의 곱. 제약: 두 계수의 곱이 정수·간단한 분수가 되도록 잡아야 답이 깔끔함."
    creative: "(1) 답을 e^{3/2} 대신 e√e 로 쓰게 하여 지수 표기 변환 추가(★1) (2) 괄호 안을 (2+x)/2 처럼 정리 전 형태로 주기(★1~2) (3) (1+x/2)^{3/x} 와 (1+x/3)^{2/x} 의 비를 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0267
  page: 43
  vendor_label: "교과서 03-2 무리수 $e$와 자연로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→∞ 일 때 $\left(1+\dfrac{2}{x}\right)^x$ 의 극한값.
  category: "e 의 정의(x→∞ 꼴) → 지수를 (x/2)·2 로 맞추기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+a/x)^{bx} 꼴 극한(e 의 정의 · x→∞)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {(1+2/x)^{x/2}}² → e². (1+1/x)^x 꼴의 정의를 계수 2 에 맞춘 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(1+2/x)^x = {(1+2/x)^{x/2}}^2 → e^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 2 를 다른 상수 a 로, 지수를 kx 로 바꾸면 답 e^{ak}. 제약: x→∞ 이고 a≠0. a<0 이면 답이 e 의 음수 지수, 지수를 x+1 처럼 두면 (1+a/x)^1 → 1 인 여분 인수 처리가 추가됨."
    creative: "(1) 지수를 x+3 으로 두어 여분 인수 (1+2/x)^3 → 1 을 분리하게 하기(★1~2) (2) 괄호 안을 (x+2)/x 로 주어 1+2/x 로 정리하는 단계 추가(★1) (3) x→−∞ 로 방향을 바꿔 0268 골조로 잇기(T-부호 · ★1)."
```

```yaml
- id: RPM-CALC2-0268
  page: 43
  vendor_label: "교과서 03-2 무리수 $e$와 자연로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→−∞ 일 때 $\left(1-\dfrac{1}{x}\right)^{2x}$ 의 극한값.
  category: "x→−∞ → −1/x=t 치환 → e 의 정의"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(1+a/x)^{bx} 꼴 극한(e 의 정의 · x→−∞ 치환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −1/x = t 로 두면 t→0+ 이고 2x = −2/t 이므로 (1+t)^{−2/t} = {(1+t)^{1/t}}^{−2} → e^{−2} = 1/e². 치환·지수 변환·정의 적용 네 단계(Mₛ 2)이고 x→−∞ 와 괄호 안 부호가 겹치는 T-부호 함정 하나. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "−1/x = t (t→0+) → (1+t)^{−2/t} → {(1+t)^{1/t}}^{−2} → e^{−2}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{e^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 −1/x 를 −a/x 로, 지수 2x 를 kx 로 바꾸면 답 e^{−ak}. 제약: 치환 뒤 t 의 방향(0+ 인지 0− 인지)이 극한값에 영향을 주지 않으므로 방향은 자유이나, 괄호 안 부호와 x 의 방향이 서로 달라야 함정이 유지됨."
    creative: "(1) 같은 식을 x→∞ 로 물어 1/e² 가 그대로 나오는지 비교(★1) (2) (1−1/x)^{2x} 대신 ((x−1)/x)^{2x} 로 주어 정리 단계 추가(★1~2) (3) (1−1/x)^{2x} 와 (1+1/x)^{2x} 의 곱의 극한을 묻기(★2 · 지수 상쇄)."
```

```yaml
- id: RPM-CALC2-0269
  page: 43
  vendor_label: "교과서 03-2 무리수 $e$와 자연로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 $\dfrac{\ln(1+2x)}{x}$ 의 극한값.
  category: "ln(1+ax)/x 꼴 → 계수 맞추기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "ln(1+x)/x 꼴 극한(계수 맞추기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ln(1+2x)/(2x) × 2 → 1 × 2 = 2. 분모를 진수의 계수에 맞추는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ln(1+2x)/x = 2 · ln(1+2x)/(2x) → 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 계수 2 를 a 로, 분모를 bx 로 바꾸면 답 a/b. 제약: a≠0 · b≠0 이고 x→0 이어야 하며 a<0 이면 답도 음수."
    creative: "(1) 분모를 sin x 나 e^x−1 로 바꾸면 다른 기본 극한과의 비(★2) (2) ln(1+2x)/ln(1+3x) 처럼 로그 두 개의 비(★2) (3) 진수를 1+2x+x² 처럼 두어 인수분해 없이 계수만 읽게 하기(★1~2)."
```

```yaml
- id: RPM-CALC2-0270
  page: 43
  vendor_label: "교과서 03-2 무리수 $e$와 자연로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 $\dfrac{e^{2x}-1}{3x}$ 의 극한값.
  category: "(e^{ax}−1)/x 꼴 → 계수 맞추기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(e^x−1)/x 꼴 극한(계수 맞추기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (e^{2x}−1)/(2x) × (2/3) → 2/3. 분모를 지수 계수에 맞추는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(e^{2x}−1)/(3x) = (2/3) · (e^{2x}−1)/(2x) → 2/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수 2 와 분모 계수 3 을 다른 정수로 바꾸면 답은 두 계수의 비. 제약: 지수 계수가 0 이 아니어야 하고, 지수를 −2x 로 두면 답 부호가 바뀜(T-부호)."
    creative: "(1) 분모를 e^{3x}−1 로 바꿔 두 지수식의 비(★2) (2) 분자를 e^{2x}−e^x 로 두어 e^x 로 묶은 뒤 정의 적용(★2) (3) 극한값이 4 가 되는 지수 계수 a 를 묻기(Mₐ 2 · ★2)."
```

```yaml
- id: RPM-CALC2-0271
  page: 43
  vendor_label: "교과서 03-2 무리수 $e$와 자연로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 $\dfrac{\log_3(1-2x)}{x}$ 의 극한값.
  category: "log_a(1+bx)/x 꼴 → 1/ln a 와 계수 맞추기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "log_a(1+x)/x 꼴 극한(밑 변환 · 계수 맞추기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_3(1−2x)/(−2x) × (−2) → (1/ln 3) × (−2) = −2/ln 3. 밑을 ln 3 으로 넘기는 단계와 계수 −2 를 맞추는 단계, 부호까지 세 단계(Mₛ 2)이고 T-부호 함정 하나. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "log_3(1−2x)/x = (−2) · log_3(1−2x)/(−2x) → (−2) · 1/ln 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{2}{\ln 3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 다른 a>0, a≠1 로, 진수 계수 −2 를 b 로 바꾸면 답 b/ln a. 제약: 밑이 e 이면 0269 로 퇴화하고, 밑이 10 이면 상용로그 표기가 됨."
    creative: "(1) 분모를 log_2(1+x) 로 바꿔 두 밑의 비 ln 2/ln 3 = log_3 2 로 정리하게 하기(★2) (2) 진수를 1−2x 대신 (1−x)(1−x)=1−2x+x² 로 두면 계수만 읽는 판단(★1~2) (3) 답을 −2 log_3 e 로 쓰게 해 표기 변환 추가(★1)."
```

```yaml
- id: RPM-CALC2-0272
  page: 43
  vendor_label: "교과서 03-2 무리수 $e$와 자연로그"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x→0 일 때 $\dfrac{5^x-1}{3x}$ 의 극한값.
  category: "(a^x−1)/x 꼴 → ln a 와 계수 맞추기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(a^x−1)/x 꼴 극한(ln a · 계수 맞추기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (5^x−1)/x × (1/3) → ln 5/3. 정의 (a^x−1)/x → ln a 에 계수 1/3 만 곱하는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(5^x−1)/(3x) = (1/3) · (5^x−1)/x → ln 5 / 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\ln 5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 를 다른 a>0 으로, 분모 계수 3 을 다른 수로, 지수를 2x 로 바꾸면 답 (지수계수/분모계수)·ln a. 제약: 밑이 e 이면 0270 골조, 밑이 1 이면 분자가 0 이라 제외."
    creative: "(1) 분자를 5^x − 3^x 로 두어 (5^x−1) − (3^x−1) 로 쪼개게 하기(★2) (2) 분모를 log_5(1+x) 로 바꿔 ln 5 가 제곱으로 나오게 하기(★2) (3) (5^x−1)/(3x) 의 값이 log 형태 선택지로 주어지는 5지선다(★1)."
```

### 교과서 03-3 지수함수와 로그함수의 도함수

```yaml
- id: RPM-CALC2-0273
  page: 43
  vendor_label: "교과서 03-3 지수함수와 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=2e^x$ 를 미분.
  category: "(e^x)' = e^x → 상수배"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수(e^x · a^x 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (e^x)' = e^x 에 상수 2 를 곱하면 끝. 공식 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(2e^x)' = 2(e^x)' = 2e^x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=2e^x$'
  answer_source: "해설(답 크롭 없음)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 를 다른 수로, 항을 더해 2e^x + 3x 처럼 다항식과 합으로 바꿀 수 있음. 제약: 이 구역은 합성함수 미분 전이므로 e^{2x} 같은 안쪽 계수는 넣지 않음."
    creative: "(1) f(x)=2e^x 일 때 f'(0) 값 묻기(★1) (2) 미분계수 정의 lim (f(h)−f(0))/h 로 되돌려 (e^h−1)/h 극한과 연결(★2) (3) y=2e^x 의 x=0 에서의 접선 기울기와 y절편(★1~2)."
```

```yaml
- id: RPM-CALC2-0274
  page: 43
  vendor_label: "교과서 03-3 지수함수와 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=(x+1)e^x$ 를 미분.
  category: "곱의 미분 → e^x 로 묶기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수(곱의 미분 · e^x 묶기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e^x + (x+1)e^x = (x+2)e^x. 곱의 미분 뒤 e^x 로 묶는 두 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x+1)'e^x + (x+1)(e^x)' → e^x + (x+1)e^x → (x+2)e^x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=(x+2)e^x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식 x+1 을 다른 일차·이차식(x−3 · x²+1)으로 바꾸면 답은 (다항식 + 도함수)e^x. 제약: 다항식 차수를 올리면 묶은 뒤 정리량이 늘어나 Mₖ 만 오르고 골조는 같음."
    creative: "(1) f(x)=(x+1)e^x 의 f'(−1) 값 묻기(★1) (2) y' = (x+2)e^x 가 0 이 되는 x 를 묻는 극값 도입(★2) (3) (x+1)e^x 를 n 번 미분한 식의 규칙 발견(I-PD d1 · ★2~3)."
```

```yaml
- id: RPM-CALC2-0275
  page: 43
  vendor_label: "교과서 03-3 지수함수와 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=3\times 2^x$ 를 미분.
  category: "(a^x)' = a^x ln a → 상수배"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수(e^x · a^x 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (2^x)' = 2^x ln 2 에 3 을 곱해 3 ln 2 × 2^x. 공식 확인 한 단계이고 ln 2 를 빠뜨리는 T-표기 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(3 · 2^x)' = 3 · 2^x ln 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=3\ln 2\times 2^x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 를 다른 a>0, a≠1 로, 계수 3 을 다른 수로 바꿀 수 있음. 제약: 밑이 e 면 ln e = 1 이라 0273 골조가 됨."
    creative: "(1) 3·2^x 와 2^x·3 처럼 곱의 순서만 바꿔 곱의 미분으로 착각하게 하기(★1) (2) y=3·2^x 의 x=0 접선 기울기 3 ln 2 묻기(★1) (3) 2^x + 3^x 처럼 밑이 다른 두 항의 합(★1)."
```

```yaml
- id: RPM-CALC2-0276
  page: 43
  vendor_label: "교과서 03-3 지수함수와 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=5^{x+2}$ 를 미분.
  category: "5^{x+2} = 25 · 5^x → (a^x)' 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 도함수(e^x · a^x 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5^{x+2} = 25 · 5^x 로 지수법칙으로 풀어 쓰면 25 · 5^x ln 5 = 5^{x+2} ln 5. 합성함수 미분 없이 지수법칙 한 단계로 처리. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "5^{x+2} = 25 · 5^x → 25 · 5^x ln 5 = 5^{x+2} ln 5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=5^{x+2}\ln 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 와 지수의 평행이동 2 를 다른 수로 바꿀 수 있음. 제약: 지수가 x+k 꼴이어야 지수법칙으로 상수배로 풀 수 있고, 2x+1 처럼 계수가 붙으면 합성함수 미분(다음 구역)이 필요."
    creative: "(1) 5^{x+2} 와 5^x·25 가 같음을 이용해 y'/y = ln 5 로 상수임을 묻기(★1~2) (2) 5^{x+2} − 5^x 처럼 두 항 차의 미분(★1) (3) 밑을 e 로 두어 e^{x+2} = e² e^x 로 같은 골조 확인(★1)."
```

```yaml
- id: RPM-CALC2-0277
  page: 43
  vendor_label: "교과서 03-3 지수함수와 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\ln 3x$ 를 미분.
  category: "ln 3x = ln 3 + ln x → (ln x)' = 1/x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 도함수(ln x · log_a x 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ln 3x = ln 3 + ln x 로 쪼개면 상수항이 사라져 1/x. 로그 성질 한 단계 뒤 공식. 계수 3 이 답에 남는다고 착각하는 T-표기 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "ln 3x = ln 3 + ln x → y' = 0 + 1/x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\dfrac{1}{x}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수 계수 3 을 다른 양수로 바꿔도 답은 1/x 로 같음. 제약: 진수가 kx (k>0) 꼴이어야 로그 성질로 상수항 분리가 되고, x+1 처럼 평행이동이 들어가면 합성함수 미분(다음 구역)이 필요."
    creative: "(1) ln 3x 와 ln 5x 의 도함수가 같은 이유를 묻기(★1) (2) y=ln 3x 의 x=1 에서의 접선 기울기와 접점(★1~2) (3) ln x² = 2 ln x 처럼 지수를 앞으로 빼는 변형(★1)."
```

```yaml
- id: RPM-CALC2-0278
  page: 43
  vendor_label: "교과서 03-3 지수함수와 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=x\ln x$ 를 미분.
  category: "곱의 미분 → ln x + 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 도함수(곱의 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1 · ln x + x · (1/x) = ln x + 1. 곱의 미분 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "(x)' ln x + x (ln x)' → ln x + 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\ln x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 를 x² · 3x 로, ln x 를 ln 2x 로 바꿀 수 있음(답은 다항식 도함수·ln x + 다항식/x 정리). 제약: 진수는 kx 꼴까지만(합성 미분 전)."
    creative: "(1) y' = ln x + 1 = 0 인 x = 1/e 를 묻는 극값 도입(★2) (2) x ln x − x 의 도함수가 ln x 임을 확인시키는 역방향(★1~2) (3) f(x)=x ln x 의 f'(e) 값(★1)."
```

```yaml
- id: RPM-CALC2-0279
  page: 43
  vendor_label: "교과서 03-3 지수함수와 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=\log_2 4x$ 를 미분.
  category: "log_2 4x = 2 + log_2 x → (log_a x)' = 1/(x ln a)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 도함수(ln x · log_a x 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    log_2 4x = 2 + log_2 x 로 쪼개면 1/(x ln 2). 로그 성질 뒤 밑 a 공식 적용. ln 2 를 빠뜨리거나 계수 4 를 남기는 T-표기 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "log_2 4x = 2 + log_2 x → y' = 1/(x ln 2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\dfrac{1}{x\ln 2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2 와 진수 계수 4 를 다른 수로 바꿀 수 있음(답은 1/(x ln 밑)). 제약: 밑은 양수·1 아님, 진수 계수는 양수. 밑을 e 로 두면 0277 골조."
    creative: "(1) log_2 4x 의 도함수와 log_4 x 의 도함수 비교로 밑 변환 이해 묻기(★1~2) (2) y = log_2 4x 의 x=1/4 에서의 접선(★2) (3) log_2 x + log_4 x 처럼 밑이 다른 두 로그의 합(★1~2)."
```

```yaml
- id: RPM-CALC2-0280
  page: 43
  vendor_label: "교과서 03-3 지수함수와 로그함수의 도함수"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    $y=x\log_3 2x$ 를 미분.
  category: "곱의 미분 → log_3 2x + 1/ln 3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 도함수(곱의 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1 · log_3 2x + x · (log_3 2x)' 에서 (log_3 2x)' = (log_3 2 + log_3 x)' = 1/(x ln 3) 이므로 log_3 2x + 1/ln 3. 곱의 미분 · 로그 성질 · 밑 공식 · x 약분 네 단계(Mₛ 2). 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "(x)' log_3 2x + x · 1/(x ln 3) → log_3 2x + 1/ln 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y''=\log_3 2x+\dfrac{1}{\ln 3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 · 진수 계수 2 · 앞의 x 를 x² 등으로 바꿀 수 있음(x² 이면 2x log_3 2x + x/ln 3). 제약: 진수는 kx 꼴(합성 미분 전) · 밑은 양수·1 아님."
    creative: "(1) f(x) = x log_3 2x 의 f'(1/2) = 1/ln 3 처럼 진수가 1 이 되는 점에서의 값 묻기(★1~2) (2) y' 가 상수가 되는 x 값(로그가 0 이 되는 점 · ★2) (3) x log_3 2x − x/ln 3 의 도함수가 log_3 2x 임을 확인시키는 역방향(★2)."
```

### 유형 01 지수함수의 극한

```yaml
- id: RPM-CALC2-0281
  page: 44
  vendor_label: "유형 01 지수함수의 극한"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x→∞ 일 때 $(3^x+4^x)^{\frac{1}{x}}$ 의 값. 5지선다(3 · 4 · 5 · 6 · 7).
  category: "괄호 안 우세항 4^x 묶기 → 4 · {(3/4)^x + 1}^{1/x} → 4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 극한(우세항 묶기 · (a^x+b^x)^{1/x} 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4^x 로 묶어 (3^x+4^x)^{1/x} = 4 · {(3/4)^x + 1}^{1/x} 로 쓰면 괄호 안 → 1, 지수 → 0 이므로 1 이 되어 답 4. 우세항 묶기·지수 분배·1^0 판단 네 단계(Mₛ 2). 통찰 0·M_total 5 라 −1 후보이나 우세항 묶기와 밖의 1/x 승 처리 두 기법이 겹치는 유형 대표문제라 유형 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(3^x+4^x)^{1/x} = 4 · {(3/4)^x+1}^{1/x} → 4 · 1 = 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(3, 4)을 다른 양수 쌍으로 바꾸면 답은 큰 밑, 항을 셋(2^x+3^x+5^x)으로 늘려도 같음. 제약: 밑이 모두 양수이고 최댓값이 하나여야 함. 지수를 2/x 로 두면 답은 큰 밑의 제곱. 선택지에 큰 밑·작은 밑·합이 모두 들어가야 오답 유도가 됨."
    creative: "(1) x→−∞ 로 방향을 바꾸면 우세항이 작은 밑으로 뒤집혀 답 3(T-부호 · ★2) (2) 로그를 취해 (1/x) log(3^x+4^x) 로 바꾸면 0288 골조(★2) (3) (a^x+b^x)^{1/x} 의 극한이 5 가 되는 a, b 조건처럼 매개변수화(Mₐ 2 · ★2~3)."
```

```yaml
- id: RPM-CALC2-0282
  page: 44
  vendor_label: "유형 01 지수함수의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→−∞ 일 때 $\dfrac{3^x-2^{-x}}{3^x+2^{-x}}$ 의 값.
  category: "x→−∞ → 우세항 2^{−x} 로 나누기 → −1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 극한(x→−∞ · 우세항 판단)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→−∞ 에서 3^x → 0, 2^{−x} → ∞ 이므로 분모·분자를 2^{−x} 로 나누면 (6^x − 1)/(6^x + 1) → −1 (x = −t 치환으로 같은 결과). 방향 판단·우세항 선택·나누기·6^x → 0 네 단계(Mₛ 2), T-부호 함정 하나. 통찰 0·M_total 5 → −1 후보이나 밑이 서로 다르고 지수 부호도 달라 교과서 0260 보다 판단이 하나 더 들어가므로 벤더 「중」대로 ★2. [분류 이슈] 교과서 0260 과 골조가 사실상 같아 ★1 후보로도 볼 수 있음 — 기록만.
  tier: star_2
  mechanism_primary: "x→−∞ 에서 우세항 2^{−x} → 분모·분자 ÷ 2^{−x} → (6^x−1)/(6^x+1) → −1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "해설(답 크롭 없음 · 0281 답 크롭에 합쳐짐)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(3, 2)과 지수 부호 조합을 바꿀 수 있고, 방향을 x→∞ 로 바꾸면 우세항이 3^x 로 바뀌어 답 1. 제약: 두 항의 크기 관계가 방향에 따라 명확히 갈려야 하며, 같은 밑으로 두면 0260 으로 퇴화."
    creative: "(1) x→∞ 와 x→−∞ 두 값을 모두 구해 합을 묻기(★2) (2) 분자에 상수를 더해 (3^x − 2^{−x} + 1) 로 두어 상수항도 소거됨을 판단(★2) (3) 2^{−x} 대신 (1/2)^x 로 표기해 같은 식임을 읽게 하기(T-표기 · ★2)."
```

```yaml
- id: RPM-CALC2-0283
  page: 44
  vendor_label: "유형 01 지수함수의 극한"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    x→∞ 일 때 $\dfrac{a\times 3^x}{3^{x+1}-2^x}=4$ 가 성립하도록 하는 상수 $a$ 의 값.
  category: "3^{x+1} = 3 · 3^x → 분모·분자 ÷ 3^x → a/3 = 4"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 극한(우세항으로 나누기 · 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3^{x+1} = 3 · 3^x 로 고친 뒤 분모·분자를 3^x 로 나누면 a/(3 − (2/3)^x) → a/3 이므로 a/3 = 4, a = 12. 지수법칙 정리·우세항 나누기·극한값 계산·방정식 네 단계(Mₛ 2), 매개변수 a 로 Mₐ 2. 극한값이 주어진 단순 미정계수라 통찰 없음. 벤더 「중」·서술형 → 유형 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "3^{x+1} = 3·3^x → ÷ 3^x → a/(3 − (2/3)^x) → a/3 = 4 → a = 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "해설(답 크롭 없음 · 0281 답 크롭에 합쳐짐)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 · 지수 평행이동 +1 · 극한값 4 · 작은 밑 2 를 바꿀 수 있음(답 = 극한값 × 밑^평행이동). 제약: 분모의 우세항이 분자의 밑과 같아야 극한이 0 이나 ∞ 가 아닌 유한값이 됨. 작은 밑은 우세항보다 작아야 함."
    creative: "(1) 극한값 4 대신 a 를 분모에도 넣어 (a·3^x)/(3^{x+1} − a·2^x) 처럼 두어도 답이 같음을 판단(★2) (2) 분모의 밑을 매개변수 b 로 두고 극한이 유한값이 되는 b 의 조건을 묻기(I-BW d1 · ★3) (3) 극한이 0 또는 ∞ 가 되는 경우로 나누어 케이스 판단(I-MI d1 · ★3)."
```

```yaml
- id: RPM-CALC2-0284
  page: 44
  vendor_label: "유형 01 지수함수의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    보기 ㄱ~ㄹ 네 극한(ㄱ x→−∞ 2^x/(2^x−2^{−x}) · ㄴ x→∞ 3^x/√(5^x) · ㄷ x→−∞ 1/(3^{1/x}−1) · ㄹ x→0− 1/(1+5^{1/x})) 중 극한값이 존재하는 것을 있는 대로 고르기.
  category: "보기별 우세항·1/x 방향 판단 → 존재 여부 4회"
  M: {s: 3, k: 1, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 극한(존재 판정 · ㄱㄴㄷ 보기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 분모·분자에 2^x 를 곱하면 4^x/(4^x−1) → 0 (존재). ㄴ (3/√5)^x 에서 3/√5 > 1 → ∞ (없음). ㄷ 1/x → 0− 이므로 3^{1/x} → 1−, 분모 → 0− → −∞ (없음). ㄹ 1/x → −∞ 이므로 5^{1/x} → 0 → 1 (존재). 보기 넷을 각각 2~3 단계로 처리해 Mₛ 3, 함정은 x→−∞·1/x→0− 의 T-부호와 좌극한 처리의 T-경계 둘(Mₜ 2). 각 보기는 표준 판단이라 통찰 없음. 벤더 「중」 → ★2 (M_total 7 이 범위 최고이나 통찰이 없어 +1 은 않음).
  tier: star_2
  mechanism_primary: "보기마다 우세항 또는 1/x 의 방향 → 수렴(ㄱ 0 · ㄹ 1) / 발산(ㄴ ∞ · ㄷ −∞) 판정 → ㄱ, ㄹ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄹ"
  answer_source: "해설(답 크롭 없음 · 0281 답 크롭에 합쳐짐)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 밑(2 · 3, 5 · 3 · 5)과 방향(x→±∞ · x→0±)을 바꿀 수 있음. 제약: ㄴ 은 3²=9 와 5 의 대소처럼 밑의 비가 1 과 확실히 갈려야 하고, ㄷ·ㄹ 은 1/x 의 방향이 0± 또는 ±∞ 로 명확해야 함. 존재하는 보기 수가 2개 근처가 되도록 배치."
    creative: "(1) 좌극한·우극한을 각각 묻는 보기로 바꿔 ㄹ 의 x→0+ 값 0 과 대비(T-경계 · ★2) (2) 극한값이 존재하는 것들의 합을 묻는 단답형(★2) (3) ㄷ 형태를 1/(3^{1/x}+1) 로 바꿔 x→0 에서 좌우극한이 다름을 판정하게 하기(★2~3)."
```

### 유형 02 로그함수의 극한

```yaml
- id: RPM-CALC2-0285
  page: 44
  vendor_label: "유형 02 로그함수의 극한"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x→∞ 일 때 $\log_2\sqrt{2x^2+x}-\log_2 x$ 의 값.
  category: "로그 차 → 한 로그 안 비율 → 극한을 로그 안으로 → log_2 √2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 극한(로그 합치기 · 극한을 로그 안으로)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_2 {√(2x²+x)/x} 로 합치고 로그의 연속성으로 극한을 안으로 넣으면 √(2+1/x) → √2, log_2 √2 = 1/2. 로그 합치기·근호 안 x² 로 나누기·극한 안으로·로그값 계산 네 단계(Mₛ 2). 통찰 0·M_total 5 라 −1 후보이나 ∞−∞ 꼴을 로그 성질로 해소하는 유형 대표문제라 ★2 유지.
  tier: star_2
  mechanism_primary: "log_2 √(2x²+x) − log_2 x = log_2 √{(2x²+x)/x²} → log_2 √2 = 1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "해설(답 크롭 없음 · 0281 답 크롭에 합쳐짐)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 최고차 계수 2 를 다른 양수 k 로(답 (1/2) log_2 k), 밑 2 를 다른 밑으로 바꿀 수 있음. 제약: 근호 안 차수가 뒤 항 x 의 차수의 두 배여야 비가 유한값이 되고, 답이 정수·간단한 분수가 되게 k 를 밑의 거듭제곱으로 잡음."
    creative: "(1) 근호를 없애고 log_2(2x²+x) − 2 log_2 x 로 주면 계수 2 를 진수의 지수로 넣는 단계 추가(★2) (2) x→0+ 로 방향을 바꿔 (2x²+x)/x² → ∞ 가 되어 발산함을 판단(★2) (3) 극한값이 3 이 되도록 밑 또는 계수를 매개변수로 묻기(Mₐ 2 · ★2)."
```

```yaml
- id: RPM-CALC2-0286
  page: 44
  vendor_label: "유형 02 로그함수의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→1 일 때 $\log_2|x^3-1|-\log_2|x^2-1|$ 의 값. 5지선다(log_2 3 −1 · log_2 3 · log_2 3 +1 · 2 log_2 3 · 3 log_2 3).
  category: "로그 차 → |x³−1|/|x²−1| 인수분해 약분 → log_2(3/2)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 극한(로그 합치기 · 0/0 꼴 약분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_2 {|x³−1|/|x²−1|} 로 합치고 |x−1| 을 약분하면 |x²+x+1|/|x+1| → 3/2, 답 log_2(3/2) = log_2 3 − 1 (①). 로그 합치기·인수분해 약분·극한·로그값 정리 네 단계(Mₛ 2). 절댓값은 x→1 양쪽에서 비를 양수로 만들어 주는 장치라 T-부호 함정 하나. 벤더 「중」 → ★2.
  tier: star_2
  mechanism_primary: "log_2 (|x³−1|/|x²−1|) → |x²+x+1|/|x+1| → 3/2 → log_2 3 − 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x→1 대신 x→2 와 진수 x³−8 · x²−4 처럼 같은 근을 갖는 다항식 쌍으로, 밑 2 를 다른 밑으로 바꿀 수 있음. 제약: 두 진수가 같은 일차인수를 공유해 0/0 이 약분돼야 하고, 약분 뒤 값의 로그가 선택지 형태(log_2 3 ± 정수)로 정리돼야 함."
    creative: "(1) 절댓값을 빼고 x→1+ 만 묻기(T-범위 · ★2) (2) 진수를 x⁴−1 과 x²−1 로 두면 약분 뒤 x²+1 → 2 라 답 1(★2) (3) 극한값이 log_2 3 이 되도록 분모 다항식을 미정계수로 묻기(Mₐ 2 · ★2~3)."
```

```yaml
- id: RPM-CALC2-0287
  page: 44
  vendor_label: "유형 02 로그함수의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→∞ 일 때 $\log_3(ax+1)-\log_3(x-1)=3$ 이 되도록 하는 상수 $a$ 의 값. 5지선다(9 · 15 · 21 · 27 · 36).
  category: "로그 차 → log_3 {(ax+1)/(x−1)} → log_3 a = 3 → a = 27"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 극한(로그 합치기 · 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    log_3 {(ax+1)/(x−1)} 로 합치고 극한을 안으로 넣으면 (ax+1)/(x−1) → a 이므로 log_3 a = 3, a = 27 (④). 로그 합치기·유리식 극한·로그 방정식 세 단계에 매개변수 a (Mₐ 2). 진수가 양수여야 하므로 a>0 이 전제인 T-범위 함정 하나. 극한값이 주어진 단순 미정계수라 통찰 없음. 벤더 「중」 → ★2.
  tier: star_2
  mechanism_primary: "log_3 {(ax+1)/(x−1)} → log_3 a = 3 → a = 27"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 과 극한값 3 을 바꾸면 답은 밑^극한값, 진수의 상수항(+1 · −1)은 답에 영향 없음. 제약: a>0 이어야 x→∞ 에서 진수가 양수이고, 답이 선택지에 정수로 들어가도록 밑·극한값을 잡음. 두 진수의 차수가 같아야 비가 유한값."
    creative: "(1) 진수를 ax²+1 과 x²−1 처럼 이차식으로 두어도 답이 같음을 판단(★2) (2) 극한값을 상수 대신 log_3 2 같은 로그로 주어 진수 비 = 2 를 읽게 하기(★2) (3) 진수 차수를 다르게(ax²+1 과 x−1) 두면 극한이 발산해 a 가 존재하지 않음을 판단(I-BW d1 · ★3)."
```

```yaml
- id: RPM-CALC2-0288
  page: 44
  vendor_label: "유형 02 로그함수의 극한"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x→∞ 일 때 $\dfrac{1}{x}\log_3(6^x+9^x)$ 의 값.
  category: "1/x 를 로그 안 지수로 → log_3 (6^x+9^x)^{1/x} → 우세항 9 → 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 극한((1/x)log 꼴 · 우세항 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1/x) log_3(6^x+9^x) = log_3 (6^x+9^x)^{1/x} 로 계수를 지수로 옮기면 0281 골조 그대로 (6^x+9^x)^{1/x} → 9 이므로 log_3 9 = 2 (또는 9^x 로 묶어 2 + (1/x) log_3{(2/3)^x + 1} → 2). 계수를 지수로·우세항 묶기·1^0 판단·로그값 네 단계(Mₛ 2). 유형 01 기법을 로그 안에서 쓰는 표준 결합이라 통찰 없음(같은 단원 결합은 XU 아님). 벤더 「중」 → ★2. [분류 이슈] 골조는 유형 01 (a^x+b^x)^{1/x} 와 같아 카탈로그에서 어느 유형에 둘지 결정 필요.
  tier: star_2
  mechanism_primary: "(1/x) log_3(6^x+9^x) = log_3 (6^x+9^x)^{1/x} → log_3 9 = 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑(6, 9)과 로그의 밑 3 을 바꿀 수 있음(답 = log_밑(큰 밑)). 제약: 큰 밑이 로그 밑의 거듭제곱(9 = 3²)이어야 답이 정수. 항을 셋으로 늘려도 골조 동일."
    creative: "(1) x→−∞ 로 바꾸면 우세항이 6^x 로 뒤집혀 답 log_3 6 = 1 + log_3 2 (T-부호 · ★2) (2) 1/x 대신 1/(x+1) 이나 2/x 를 계수로 두어 지수 처리 한 단계 추가(★2) (3) 극한값이 3 이 되도록 큰 밑을 매개변수로 묻기(Mₐ 2 · ★2)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 24 · ★2 8 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 32 · premium 0
- type_hint 상위: 「지수함수의 극한(우세항 판단·묶기)」 계열 8(0257~0260 · 0281~0284) · 「로그함수의 극한(밑·진수 방향 / 로그 합치기)」 계열 8(0261~0264 · 0285~0288) · 「e 의 정의 (1+ax)^{b/x}·(1+a/x)^{bx} 꼴」 4(0265~0268) · 「ln(1+x)/x · (e^x−1)/x · 밑 변환 꼴」 4(0269~0272) · 「지수함수의 도함수(공식·곱의 미분)」 4(0273~0276) · 「로그함수의 도함수(공식·곱의 미분)」 4(0277~0280)
- 그림: 0문
- 벤더 신호: 교과서 24문(level·tag 없음) · 유형 8문(「대표문제」 0281·0285 · level 「중」 6문 · 「서술형」 0283). M_total 은 교과서 4~5, 유형 5~7(최고 0284).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0282 | 벤더 「유형·중」이나 교과서 0260(x→−∞ 우세항 나누기)과 골조가 사실상 같고 통찰 0·M_total 5. 밑·지수 부호가 달라 판단 하나가 더 있다고 보아 라벨은 ★2 로 두고 이슈 기록 | ★1 / ★2 |
| RPM-CALC2-0288 | 「유형 02 로그함수의 극한」에 있으나 골조는 유형 01 의 (a^x+b^x)^{1/x} 우세항 묶기와 같음(로그 안에서 씀). 카탈로그 설계 때 어느 유형에 둘지 결정 필요 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint: 「지수함수의 극한 — 우세항으로 나누기/묶기」(교과서 0258·0259·0260 과 유형 01 전체가 같은 골조 · 방향 x→−∞ 는 T-부호 변주) · 「로그함수의 극한 — 로그 합치기 후 극한을 안으로」(0285·0286·0287 · ∞−∞ 와 0/0 을 같은 기법으로 해소) · 「e 의 정의 계수 맞추기」(0265~0268 · x→0 꼴과 x→∞ 꼴을 한 유형으로 통합 가능) · 「기본 극한 4공식 계수 맞추기」(0269~0272 · ln(1+x)/x · (e^x−1)/x 와 밑 변환 log_a·a^x 를 한 유형으로 통합 가능).
- 따로 세울 유형: (1) 「(a^x+b^x)^{1/x} 꼴·(1/x)log(a^x+b^x) 꼴」 — 0281·0288 이 지수·로그 양쪽 구역에 걸쳐 있으므로 「우세항 묶기 + 1/x 승」을 독립 유형으로 두면 두 구역의 중복이 없어짐. (2) 「지수·로그 극한의 존재 판정(ㄱㄴㄷ)」 — 0284 처럼 좌우극한·1/x 방향이 섞인 판정형은 계산형과 ★ 결정 요인이 달라 분리 권장.
- 통합해도 될 유형: 교과서 03-1 의 「밑의 범위로 수렴·발산」(0257·0261~0264)은 지수·로그를 나눌 필요 없이 「기본 지수·로그함수의 극한(그래프 방향)」 하나로. 교과서 03-3 의 「지수함수의 도함수」와 「로그함수의 도함수」는 곱의 미분 여부(0274·0278·0280)로 두 단계만 두면 충분.
- 다음 범위(03-p2·p3)에서 합성함수 미분·매개변수·극한을 이용한 미정계수 문항이 나오면 이 범위의 교과서 골조가 base 로 어떻게 확장되는지 대조해 base ★ 를 정하는 것이 좋음.

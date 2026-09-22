---
name: mechanism-데이터-RPM-CALC1-03-p3
description: RPM 미적분Ⅰ 03 미분계수와 도함수(3/3 · 유형 10 미분계수를 이용한 극한값의 계산 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 03 미분계수와 도함수
  unit_code: CALC1-03
  part: "3/3"
  extract_range: "47~53쪽 · 0283~0329"
  total_problems: 47
  unit_total: 125
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 03 미분계수와 도함수 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 03 미분계수와 도함수 단원(125문) 가운데 47~53쪽의 47문항(0283~0329)을 다룬다. 구역은 유형 10 미분계수를 이용한 극한값의 계산 · 유형 11 미분계수를 이용한 미정계수의 결정 · 유형 12 접선의 기울기를 이용한 미정계수의 결정 · 유형 13 함수의 미분가능성을 이용한 미정계수의 결정 · 유형 14 다항식의 나눗셈에서 미분법의 활용 · 유형 UP 15 치환을 이용한 극한값의 계산 · 유형 UP 16 미분의 항등식에의 활용 · 시험에 꼭 나오는 문제(13문) · 서술형 주관식(4문) · 실력 Up(3문) 순이다. 유형 구역의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중하·중·상중 표시(★1~2 · ★2 · ★3 출발), 유형 UP 은 ★3 출발, 시험에 꼭 나오는 문제는 난이도 표시가 없어 ★2 를 출발점으로 두고 통찰로만 ★3 을 주었으며, 서술형 주관식 ★3 · 실력 Up ★4 출발이다. 그림 문항은 0313 · 0318 · 0327 세 문항이며 모두 크롭 이미지로 확인했다.

★ 조정 원칙: 통찰 0 이고 M_total ≤ 5 이면 −1, 통찰 0 이고 M_total 6~7 이더라도 초과분이 「일반 함수 f」 추상도(Mₐ 3) 하나에서만 오고 풀이가 단일 표준 절차이면 −1(0311 · 0317 · 0323 · 0326), 통찰 2개 이상 또는 depth 3 이면 +1 후보(단 ★5 는 통찰 3개+SC/VF/SYM/XU 조건을 못 채우면 주지 않음). 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₐ 는 문제에 미정계수가 있으면 2, 미정 다항함수·일반 함수 f 가 주어지면 3 으로 매겼고, 「0/0 꼴이면 분자 → 0」 · 「(x−a)² 으로 나누어떨어지면 f(a)=f'(a)=0」 · 「구간별 함수의 미분가능 → 연속+좌우 미분계수 일치」 처럼 이 단원 유형이 공식처럼 가르치는 전환은 통찰로 세지 않았다.

## 문항 데이터

### 유형 10 미분계수를 이용한 극한값의 계산

```yaml
- id: RPM-CALC1-0283
  page: 47
  vendor_label: "유형 10 미분계수를 이용한 극한값의 계산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x^3-2x^2+1 일 때 lim_{h→0} {f(1+h)-f(1-h)}/h 의 값. 5지선다.
  category: "f(a+h)-f(a-h) 꼴 → 2f'(a)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — f(a+h)-f(a-h) 꼴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자에 f(1) 을 빼고 더해 {f(1+h)-f(1)}/h + {f(1-h)-f(1)}/(-h) = 2f'(1). f'(x)=3x^2-4x 에서 f'(1)=-1 → -2. 유형 대표문제이나 공식 한 번·계산 한 줄이라 M_total 4·통찰 0 → 유형 출발 ★2 에서 −1.
  tier: star_1
  mechanism_primary: "분자에 ±f(1) 삽입 → 2f'(1) → f'(1)=-1 → -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수와 점 a(1 → 2, -1), h 의 계수(f(a+2h)-f(a-3h) → 5f'(a))를 바꿀 수 있음. 제약: f'(a) 가 정수가 되도록 하고 선택지에 −f'(a)·f'(a) 같은 부호 오답을 둠."
    creative: "(1) 분모를 2h 나 h^2+h 로 바꿔 계수 처리 추가(★1~2) (2) f 를 미지 다항함수로 주고 f'(1) 값만 조건으로 주면 추상도 상승 ★2 (3) f(1+h)-g(1-h) 처럼 두 함수로 바꾸면 f(1)=g(1) 확인이 필요한 EQV d1 이 생겨 ★2(0286 골조)."
```

```yaml
- id: RPM-CALC1-0284
  page: 47
  vendor_label: "유형 10 미분계수를 이용한 극한값의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3-5x^2 일 때 lim_{x→1} [{f(x)}^2-{f(1)}^2]/(x-1) 의 값.
  category: "제곱 차 인수분해 → 2f(1)f'(1)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — {f(x)}^2-{f(a)}^2 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 {f(x)-f(1)}{f(x)+f(1)} 로 갈라 (x-1) 과 약분하면 f'(1)·2f(1). f(1)=-4, f'(1)=3-10=-7 → 2·(-4)·(-7)=56. 인수분해·분리·두 값 계산의 4단계라 M_total 5 지만 단일 공식 대입이 아니어서 유형 중 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "{f(x)}^2-{f(1)}^2 인수분해 → 2f(1)f'(1) → f(1)=-4, f'(1)=-7 → 56"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$56$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수·점 a 를 바꿀 수 있음. 제약: f(a)≠0 이어야 문제가 살고(0 이면 답 0 으로 퇴화), f(a)·f'(a) 가 작은 정수가 되게 조정."
    creative: "(1) 세제곱 차 {f(x)}^3-{f(1)}^3 → 3{f(1)}^2 f'(1) 로 확장(같은 골조 ★2) (2) 분모를 x^2-1 로 바꿔 계수 1/2 추가(★2) (3) f 를 미지 다항함수로 두고 f(1), f'(1) 을 극한 조건으로 주면 조건 통합이 늘어 ★3."
```

```yaml
- id: RPM-CALC1-0285
  page: 47
  vendor_label: "유형 10 미분계수를 이용한 극한값의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(3x-2)(2x^2+1) 일 때 lim_{x→2} {2f(x)-xf(2)}/(x-2) 의 값.
  category: "xf(a)-af(x) 꼴 분리 → 2f'(2)-f(2)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — xf(a)-af(x) 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2f(x)-xf(2) = 2{f(x)-f(2)} - (x-2)f(2) 로 갈라 2f'(2)-f(2). 곱의 미분법으로 f'(x)=18x^2-8x+3, f'(2)=59, f(2)=36 → 118-36=82. 분리 착안은 유형 표준이고 곱의 미분 계산이 중간 부담(Mₖ 2) → ★2.
  tier: star_2
  mechanism_primary: "2f(x)-xf(2) = 2{f(x)-f(2)} - f(2)(x-2) → 2f'(2)-f(2) → 118-36 → 82"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$82$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 두 인수, 점 a, 분자 계수(x^2 f(a)-a^2 f(x) → 2af(a)-a^2 f'(a))를 바꿀 수 있음. 제약: f(a), f'(a) 가 정수, 최종값이 두 항의 차라 부호 오답이 자연스럽게 생김."
    creative: "(1) x^2 f(2)-4f(x) 로 차수를 올리면 분리 항이 하나 더 늘어 ★2~3 (2) f 를 미지 다항함수로 주고 f(2), f'(2) 를 극한 조건으로 주면 ★3 (3) 분모를 x^2-4 로 바꾸면 인수분해 한 단계 추가(★2)."
```

```yaml
- id: RPM-CALC1-0286
  page: 47
  vendor_label: "유형 10 미분계수를 이용한 극한값의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x+x^3+x^5, g(x)=x^2+x^4+x^6 일 때 lim_{h→0} {f(1+2h)-g(1-h)}/(3h) 의 값.
  category: "f(1)=g(1) 확인 → 두 미분계수의 계수 합성"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "서로 다른 두 함수의 차이므로 f(1)=g(1)=3 임을 먼저 확인해야 ±f(1), ±g(1) 삽입이 정당화됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — 두 함수 f(a+ph)-g(a-qh) 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=g(1)=3 이므로 분자 = {f(1+2h)-f(1)} - {g(1-h)-g(1)}. 3h 로 나누면 (2/3)f'(1)+(1/3)g'(1). f'(1)=1+3+5=9, g'(1)=2+4+6=12 → 6+4=10. 두 함수 값이 같다는 확인이 EQV d1 하나, 이후 계수 처리는 표준 → ★2.
  tier: star_2
  mechanism_primary: "f(1)=g(1) 확인 → 분자 분리 → (2/3)f'(1)+(1/3)g'(1) → 6+4 → 10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "h 의 계수(2h, -h, 3h)와 두 함수의 항 구성을 바꿀 수 있음. 제약: 반드시 f(a)=g(a) 를 유지(깨지면 극한이 발산해 문제가 성립하지 않음), 계수 조합 p/r·q/r 가 정수 답을 주도록."
    creative: "(1) f(a)≠g(a) 인 경우 극한이 존재하지 않음을 묻는 참·거짓 보기로 바꾸면 EQV 가 전면에 나와 ★3 (2) g 를 f 의 도함수로 두면 f'(1), f''-류 없이도 f'(1)·g'(1) 관계가 생겨 ★2~3 (3) 두 함수를 미지로 두고 f(1)=g(1), f'(1), g'(1) 을 조건으로 주면 추상도 ★3."
```

### 유형 11 미분계수를 이용한 미정계수의 결정

```yaml
- id: RPM-CALC1-0287
  page: 48
  vendor_label: "유형 11 미분계수를 이용한 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x^3+2ax^2+bx-2b 가 lim_{x→1} f(x)/(x-1)=2 를 만족할 때 a+b. 5지선다.
  category: "0/0 → f(1)=0, f'(1)=2 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 미정계수의 결정 — f(x)/(x-a) 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 → 0 이므로 f(1)=1+2a-b=0, 극한값은 f'(1)=3+4a+b=2. 연립하면 a=-1/3, b=1/3 → a+b=0. 두 조건을 세우고 연립하는 표준 절차, 미정계수 둘(Mₐ 2)·M_total 6 → 대표문제 ★2 유지.
  tier: star_2
  mechanism_primary: "0/0 → f(1)=0 · f'(1)=2 → 연립 → a=-1/3, b=1/3 → 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 배치(2a, b, -2b)와 점 a=1, 극한값 2 를 바꿀 수 있음. 제약: 연립이 유일해를 갖도록 두 식이 독립이어야 하고, 분수 해가 나오면 a+b 같은 결합값을 정수·간단 분수로 맞춤."
    creative: "(1) 극한을 lim f(x)/(x^2-1) 로 바꾸면 계수 1/2 처리 추가(★2) (2) 조건 하나를 f(2)=… 으로 바꿔 미정계수 3개로 늘리면 M_total 7~8 ★3 (3) f 를 '최고차항 계수 1 인 삼차함수' 로만 주고 두 극한 조건을 주면 함수 결정형 ★3(0290 골조)."
```

```yaml
- id: RPM-CALC1-0288
  page: 48
  vendor_label: "유형 11 미분계수를 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^3+ax^2+b 가 f(-1)=3, lim_{x→1} {f(x)-f(1)}/(x^2-1)=5/2 를 만족할 때 ab. 5지선다.
  category: "분모 인수분해 → f'(1)/2 → a, 함숫값 조건 → b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 미정계수의 결정 — 분모 x^2-a^2 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 (x-1)(x+1) 이므로 극한 = f'(1)/2 = 5/2 → f'(1)=3+2a=5 → a=1. f(-1)=-1+a+b=3 → b=3 → ab=3. 두 조건이 각각 한 미지수를 바로 주는 표준 절차 → ★2.
  tier: star_2
  mechanism_primary: "x^2-1 인수분해 → f'(1)=5 → a=1 → f(-1)=3 → b=3 → 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(-1) 값, 극한값 5/2, 분모 x^2-1(→ x^3-1 이면 f'(1)/3)을 바꿀 수 있음. 제약: 극한값에 분모 미분계수(2 또는 3)를 곱한 값이 정수가 되게."
    creative: "(1) 두 조건을 모두 극한 꼴로 주면 0/0 판단이 두 번 → ★2 (2) f 를 미지 삼차함수로 두고 조건 3개를 극한으로 주면 함수 결정 ★3 (3) 분모를 (x-1)^2 로 바꾸면 f'(1)=0 까지 필요해 미분 조건 두 개로 EQV d1 ★3."
```

```yaml
- id: RPM-CALC1-0289
  page: 48
  vendor_label: "유형 11 미분계수를 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^4+ax^2+bx+1 이 f'(2)=-2 꼴 극한과 lim_{h→0} {f(1-2h)-f(1+2h)}/h=8 을 만족할 때 f(1).
  category: "두 극한 → f'(2), f'(1) 연립 → a, b → f(1)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 미정계수의 결정 — 미분계수 두 개 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 극한은 f'(2)=-2, 둘째는 -4f'(1)=8 → f'(1)=-2. f'(x)=4x^3+2ax+b 에서 32+4a+b=-2, 4+2a+b=-2 → a=-14, b=22 → f(1)=1-14+22+1=10. 부호(-2h, -h)와 계수 -4 처리가 함정이나 절차는 표준 → ★2.
  tier: star_2
  mechanism_primary: "극한 두 개 → f'(2)=-2, f'(1)=-2 → 연립 → a=-14, b=22 → f(1)=10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점(2, 1), 극한값, h 의 계수(-2h/+2h → 계수 -4)를 바꿀 수 있음. 제약: 두 미분계수 식이 독립이고 a, b 가 정수가 되도록 4a+b, 2a+b 의 차가 짝수."
    creative: "(1) 조건 하나를 f(1)=… 함숫값으로 바꾸면 미분·함숫값 혼합 ★2 (2) 조건 하나를 lim f(x)/(x-2) 꼴로 주어 f(2)=0 까지 뽑게 하면 미정계수 3개 ★3 (3) f 를 '최고차항 1 인 사차함수' 로만 주고 조건 4개면 M_total 9 ★3."
```

```yaml
- id: RPM-CALC1-0290
  page: 48
  vendor_label: "유형 11 미분계수를 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    이차함수 f 가 lim_{x→3} f(x)/(x-3)=11, lim_{x→-1} {f(x)-f(-1)}/(x+1)=-13 을 만족할 때 f(x)=0 의 모든 근의 합.
  category: "이차함수 설정 → f(3)=0, f'(3), f'(-1) → 근과 계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 미정계수의 결정 — 이차함수 결정 후 근과 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=px^2+qx+r 로 두면 f(3)=0, f'(3)=6p+q=11, f'(-1)=-2p+q=-13 → p=3, q=-7, r=-6. 근의 합 = 7/3. 조건 3개를 미정계수 3개에 대응시키는 표준 함수 결정 + 근과 계수 관계, 통찰 없음 → 유형 중 ★2. 서술형 태그 +0.
  tier: star_2
  mechanism_primary: "f=px^2+qx+r → f(3)=0 · f'(3)=11 · f'(-1)=-13 → 3x^2-7x-6 → 근의 합 7/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점(3, -1)과 극한값(11, -13)을 바꿀 수 있음. 제약: 6p+q, -2p+q 연립에서 p 가 정수, 근의 합 -q/p 를 묻되 실근 존재(판별식)도 확인."
    creative: "(1) '근의 곱' 또는 'f(x)=0 의 두 근 사이 거리' 로 결론을 바꾸면 판별식 계산 추가 ★2~3 (2) 삼차함수로 올리고 조건 4개면 M_total 9 ★3 (3) 두 번째 조건을 f(a+h)-f(a-h) 꼴로 주어 미분계수 읽기 두 종류를 섞으면 ★2."
```

### 유형 12 접선의 기울기를 이용한 미정계수의 결정

```yaml
- id: RPM-CALC1-0291
  page: 48
  vendor_label: "유형 12 접선의 기울기를 이용한 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x^3+ax+b 위의 점 (1, 1) 에서의 접선의 기울기가 -3 일 때 ab. 5지선다.
  category: "지나는 점 → 식 하나, 기울기 → 미분계수 식 하나"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기를 이용한 미정계수의 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=3x^2+a 에서 3+a=-3 → a=-6, 점 대입 1+a+b=1 → b=6 → ab=-36. 두 식이 서로 독립적으로 바로 풀리는 단일 표준 절차, M_total 5·통찰 0 → 대표문제 ★2 에서 −1.
  tier: star_1
  mechanism_primary: "y'(1)=3+a=-3 → a=-6 → 점 대입 → b=6 → ab=-36"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (1, 1), 기울기 -3, 곡선의 차수·항 구성을 바꿀 수 있음. 제약: 미정계수가 y' 에 하나, y 에 둘 들어가 순서대로 풀리게 두고 ab 값은 선택지 간 간격이 1 이라 계산 실수 오답을 흡수."
    creative: "(1) 점의 y 좌표를 숨기고 'x=1 에서의 접선 y=-3x+4 위' 로 주면 접선 방정식 해석 추가(★2) (2) 기울기 대신 '접선이 x 축과 이루는 각 45°' 로 주면 표현 전환 RT d1 ★2 (3) 두 점에서의 기울기를 주고 삼차 y=x^3+ax^2+bx 로 하면 연립 ★2."
```

```yaml
- id: RPM-CALC1-0292
  page: 48
  vendor_label: "유형 12 접선의 기울기를 이용한 미정계수의 결정"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^2-3x+2 의 그래프 위의 점 (a, b) 에서의 접선의 기울기가 9 일 때 a, b.
  category: "f'(a)=9 → a → b=f(a)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기를 이용한 미정계수의 결정 — 접점 좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(a)=2a-3=9 → a=6, b=f(6)=20. 미분 한 번·대입 한 번, M_total 4 → 중하 출발에서 ★1.
  tier: star_1
  mechanism_primary: "f'(a)=2a-3=9 → a=6 → b=f(6)=20"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$a=6$, $b=20$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수 계수와 기울기 9 를 바꿀 수 있음. 제약: (기울기+3)/2 가 정수가 되도록, b 는 그 a 를 대입한 값이라 자동 결정."
    creative: "(1) 삼차함수로 바꾸면 f'(a)=k 가 이차방정식이 되어 접점이 둘 → 'a>0' 같은 조건으로 걸러야 하는 VF d1 ★2 (2) '접선의 기울기가 x 축 교점에서의 기울기와 같다' 처럼 기울기를 간접 조건으로 주면 ★2 (3) 접점 대신 접선 방정식을 묻는 04 단원 연결 ★2."
```

```yaml
- id: RPM-CALC1-0293
  page: 48
  vendor_label: "유형 12 접선의 기울기를 이용한 미정계수의 결정"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^2+ax+1 의 그래프 위의 점 (1, 3) 에서의 접선의 기울기가 m 일 때 a+m. 5지선다.
  category: "점 대입 → a, f'(1) → m"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기를 이용한 미정계수의 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(1)=2+a=3 → a=1, m=f'(1)=2+a=3 → a+m=4. 대입 두 번의 단일 절차, 통찰 0·M_total 5 → 중하 출발 ★1.
  tier: star_1
  mechanism_primary: "f(1)=3 → a=1 → m=f'(1)=3 → 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (1, 3) 과 상수항 1 을 바꿀 수 있음. 제약: 점이 그래프 위에 있어 a 가 정수로 결정되고 m=2·1+a 가 선택지 안에 들어오게."
    creative: "(1) 점 대신 '접선이 y=3x+1 과 평행' 으로 주면 m 이 먼저 결정되고 a 가 뒤따르는 역순 절차(★1~2) (2) 이차함수 두 개의 같은 점에서의 접선 기울기 비교로 바꾸면 조건 결합 ★2 (3) 미정계수를 둘로 늘리고 점·기울기 두 조건이면 0291 골조 ★1."
```

```yaml
- id: RPM-CALC1-0294
  page: 48
  vendor_label: "유형 12 접선의 기울기를 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=(2x-1)^2(x^3+k) 위의 x=1 인 점에서의 접선의 기울기가 -13 일 때 상수 k. 5지선다.
  category: "곱의 미분법 → y'(1) 을 k 로 표현 → 방정식"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기를 이용한 미정계수의 결정 — 곱의 미분법"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=4(2x-1)(x^3+k)+3x^2(2x-1)^2 이므로 y'(1)=4(1+k)+3=4k+7=-13 → k=-5. 곱의 미분(제곱 인수 포함)이 계산 부담 Mₖ 2, 절차는 단일 → 중 ★2 유지.
  tier: star_2
  mechanism_primary: "곱의 미분 → y'(1)=4(1+k)+3 → 4k+7=-13 → k=-5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수의 형태, 점 x=1, 기울기 -13 을 바꿀 수 있음. 제약: x=1 에서 (2x-1)=1 이 되도록 잡으면 계산이 정리되며, k 의 계수가 4 이므로 (기울기-7) 이 4 의 배수."
    creative: "(1) k 를 두 인수 모두에 넣으면 k 의 이차방정식 → 양수 조건으로 거르는 VF d1 ★3 (2) 접점의 x 좌표도 미지로 두고 'y'(a)=-13 인 a 가 하나뿐' 이면 판별식 결합 ★3 (3) 전개 후 미분 vs 곱의 미분 두 갈래를 비교하게 하면 SC 는 아니지만 계산 마찰만 늘어 ★2 유지."
```

### 유형 13 함수의 미분가능성을 이용한 미정계수의 결정

```yaml
- id: RPM-CALC1-0295
  page: 49
  vendor_label: "유형 13 함수의 미분가능성을 이용한 미정계수의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=ax^2+3 (x≥-1), x^3+x^2+bx (x<-1) 이 x=-1 에서 미분가능할 때 a-b.
  category: "연속 조건 + 좌우 미분계수 일치 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 함수의 미분가능성을 이용한 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연속: a+3=-b, 미분계수: -2a=1+b → b=-5, a=2 → a-b=7. 미분가능 ⇔ 연속+좌우 도함수 일치 는 유형이 공식처럼 가르치는 전환이라 통찰로 세지 않음. 연립 계산이 중간 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "x=-1 연속 a+3=-b · 좌우 미분계수 -2a=1+b → 연립 → a=2, b=-5 → 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점 -1, 두 조각의 계수·상수를 바꿀 수 있음. 제약: 두 조건(연속·미분계수)이 a, b 에 대해 독립인 일차 연립이 되도록 미정계수를 서로 다른 조각에 하나씩 이상 배치."
    creative: "(1) 경계점 자체를 미정계수 a 로 두면 이차방정식과 조건 필터가 생겨 ★2~3(0297 골조) (2) 조각 하나를 |x+1| 을 포함한 식으로 바꾸면 절댓값 인수의 미분가능 조건 EQV d1 ★2~3(0298 골조) (3) '연속이지만 미분가능하지 않도록' 으로 바꾸면 부등 조건 해석 ★3."
```

```yaml
- id: RPM-CALC1-0296
  page: 49
  vendor_label: "유형 13 함수의 미분가능성을 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^2 (x≥1), ax+b (x<1) 이 x=1 에서 미분가능할 때 f(-1).
  category: "연속 a+b=1, 미분계수 a=2 → b → f(-1)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 함수의 미분가능성을 이용한 미정계수의 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=f'(1⁺)=2, a+b=1 → b=-1, f(-1)=-2-1=-3. 두 식이 순서대로 바로 풀리는 단일 절차, M_total 5·통찰 0 → 유형 중 출발 ★2 에서 −1. 직선 조각이 곧 x=1 에서의 접선이라는 관점으로 더 짧게도 풀림.
  tier: star_1
  mechanism_primary: "미분계수 a=2 → 연속 a+b=1 → b=-1 → f(-1)=-3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점 1, 곡선 조각 x^2 (→ x^3, x^2+2x), 묻는 점 -1 을 바꿀 수 있음. 제약: 직선 조각 ax+b 가 곡선 조각의 경계점 접선이 되므로 a, b 는 자동 결정, 정수 유지."
    creative: "(1) 직선 조각을 x≥1 쪽에 두고 곡선을 x<1 쪽에 두면 좌우 방향 착오 함정 ★1 (2) '직선 ax+b 가 곡선의 접선' 이라는 04 단원 표현으로 바꾸면 RT d1 ★2 (3) 조각을 세 개로 늘려 경계 두 곳에서 미분가능이면 M_total 7 ★2."
```

```yaml
- id: RPM-CALC1-0297
  page: 49
  vendor_label: "유형 13 함수의 미분가능성을 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x^2+x+b (x≥a), x^3 (x<a) 가 x=a 에서 미분가능할 때(a>0) a+b. 5지선다.
  category: "경계점이 미정계수 → 미분계수 조건이 a 의 이차방정식 → a>0 필터 → b"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 함수의 미분가능성을 이용한 미정계수의 결정 — 경계점이 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미분계수 2a+1=3a^2 → (3a+1)(a-1)=0, a>0 이므로 a=1. 연속 1+1+b=1 → b=-1 → a+b=0. 경계점이 미지수라 이차방정식과 범위 필터(T-범위·T-경계)가 붙지만 필터는 문제가 명시한 조건이라 VF 로 세지 않음. M_total 8·통찰 0 → 중 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(a⁻)=f'(a⁺): 3a^2=2a+1 → a=1 (a>0) → 연속 → b=-1 → 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 형태(x^3 ↔ 이차식)와 a 의 부호 조건을 바꿀 수 있음. 제약: 미분계수 방정식 3a^2-2a-1=0 처럼 유리수 근 둘을 갖고 조건이 하나만 남기도록 설계, b 는 연속에서 자동."
    creative: "(1) a>0 조건을 빼고 '모든 a 의 합' 을 물으면 두 근 모두 살아 I-MI d1 ★3 (2) 두 근 중 하나가 연속 조건과 충돌하도록 상수를 조정하면 사후 기각 VF d1 ★3 (3) 조각을 삼차·이차 대신 이차·일차로 낮추면 방정식이 일차가 되어 ★1."
```

```yaml
- id: RPM-CALC1-0298
  page: 49
  vendor_label: "유형 13 함수의 미분가능성을 이용한 미정계수의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=|x-2|, g(x)=-x/2+a 일 때 f(x)g(x) 가 모든 실수에서 미분가능하도록 하는 상수 a.
  category: "절댓값 꺾임점에서 곱이 미분가능 ⇔ 다른 인수가 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=2 에서만 문제가 되며 좌우 미분계수 g(2) 와 -g(2) 가 같으려면 g(2)=0 — '모든 실수에서 미분가능' 을 한 점 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "|x-a|g(x) 꼴 함수의 미분가능 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≠2 에서는 다항식이라 미분가능. x=2 에서 우미분계수 g(2), 좌미분계수 -g(2) → g(2)=0 → -1+a=0 → a=1. 조건을 한 점의 g(2)=0 으로 옮기는 EQV d1 하나, 계산은 한 줄 → 중 ★2.
  tier: star_2
  mechanism_primary: "|x-2| 꺾임 → 곱이 미분가능 ⇔ g(2)=0 → -1+a=0 → a=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾임점 2, g 의 기울기·상수를 바꿀 수 있음. 제약: g 가 일차·이차 다항식이면 조건은 항상 g(2)=0 하나이며, g 를 이차로 두면 a 가 둘 나올 수 있음."
    creative: "(1) g(x)=x^2+ax+b 로 두고 미분가능 조건과 함숫값 조건을 섞으면 미정계수 둘 ★2~3 (2) f(x)=|x^2-4| 로 바꾸면 꺾임점이 둘 → g(2)=g(-2)=0 두 조건 ★3 (3) '미분가능하지 않은 x 가 정확히 하나' 로 바꾸면 여집합 사고·MI d1 ★3."
```

### 유형 14 다항식의 나눗셈에서 미분법의 활용

```yaml
- id: RPM-CALC1-0299
  page: 49
  vendor_label: "유형 14 다항식의 나눗셈에서 미분법의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    x^3+ax^2+bx-5 가 (x+1)^2 으로 나누어떨어질 때 a+b.
  category: "(x+1)^2 나누어떨어짐 → f(-1)=0, f'(-1)=0 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 나눗셈에서 미분법의 활용 — (x-a)^2 으로 나누어떨어짐"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=(x+1)^2 Q(x) 를 미분하면 f'(x) 도 (x+1) 을 인수로 가지므로 f(-1)=0, f'(-1)=0. a-b-6=0, 3-2a+b=0 → a=-3, b=-9 → -12. 두 식 연립의 표준 절차 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "(x+1)^2 | f → f(-1)=0 · f'(-1)=0 → a-b=6, -2a+b=-3 → a=-3, b=-9 → -12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-12$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 식 (x+1)^2 의 점, 다항식 차수·상수항 -5 를 바꿀 수 있음. 제약: 두 일차식 연립이 정수해를 갖도록 상수항을 고르고, 삼차라면 몫이 일차식임을 검산에 쓸 수 있음."
    creative: "(1) 나누는 식을 (x+1)^2(x-2) 로 하면 조건 세 개 ★2~3 (2) 나머지를 일차식 px+q 로 주면 나머지 정리와 미분 조건 결합(0302 골조) ★2 (3) 몫 Q(x) 를 구하게 하면 조립제법 결합 ★2."
```

```yaml
- id: RPM-CALC1-0300
  page: 49
  vendor_label: "유형 14 다항식의 나눗셈에서 미분법의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x^10-2x^3+1 을 (x+1)^2 으로 나눈 나머지 R(x) 에 대하여 R(1). 5지선다.
  category: "f=(x+1)^2 Q+px+q → f(-1), f'(-1) → p, q"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 나눗셈에서 미분법의 활용 — (x-a)^2 으로 나눈 나머지"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=(x+1)^2 Q(x)+px+q 로 두고 x=-1 대입 -p+q=4, 미분 후 대입 p=f'(-1)=-10-6=-16 → q=-12 → R(1)=-28. 고차식이라도 직접 나누지 않고 항등식을 세우는 표준 절차. 몫·나머지 미지수 설정이 Mₐ 2 → 중 ★2.
  tier: star_2
  mechanism_primary: "f=(x+1)^2 Q+px+q → f(-1)=4=-p+q · f'(-1)=-16=p → R(x)=-16x-12 → R(1)=-28"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고차항 지수(10 → 20, 99), 나누는 점 -1, 묻는 값 R(1) 을 바꿀 수 있음. 제약: 홀수·짝수 지수의 부호 처리가 함정이므로 f(-1), f'(-1) 이 작은 정수가 되게 항을 고름."
    creative: "(1) 나머지 R(x) 를 (x-1)^2 로 다시 나눈 나머지를 물어 항등식을 두 번 세우면 ★3 (2) 나누는 식을 x^2-1 로 바꾸면 미분 없이 나머지정리 두 번 → 미분법 골조가 사라져 ★1 (3) 'R(x) 가 상수' 가 되도록 하는 조건을 물으면 역방향 BW d1 ★3."
```

```yaml
- id: RPM-CALC1-0301
  page: 49
  vendor_label: "유형 14 다항식의 나눗셈에서 미분법의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x^6-3x^2+a 가 (x-b)^2 으로 나누어떨어질 때(b>0) a-b.
  category: "f(b)=0, f'(b)=0 → f'(b)=0 에서 b 결정(b>0) → a"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 나눗셈에서 미분법의 활용 — 나누는 식의 점이 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(b)=6b^5-6b=6b(b^4-1)=0, b>0 실수 → b=1. f(1)=1-3+a=0 → a=2 → a-b=1. 미분 조건이 먼저 b 를 결정하고 함숫값 조건이 a 를 주는 순서 판단이 있으나 표준, 범위 필터(b>0·실수)는 명시 조건 → 중 ★2.
  tier: star_2
  mechanism_primary: "f'(b)=6b(b^4-1)=0 → b=1 (b>0) → f(1)=0 → a=2 → 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 6 과 계수 -3 을 바꿀 수 있음. 제약: f'(b)=0 이 b(b^4-1) 처럼 유리수 양근 하나만 남도록 계수를 맞추고 b>0 조건을 유지."
    creative: "(1) b>0 을 빼고 'b 의 모든 값에 대한 a 의 합' 으로 바꾸면 b=±1 두 경우 MI d1 ★3 (2) f'(b)=0 의 양근이 둘 나오게 계수를 바꾸고 f(b)=0 과 정수 a 조건으로 하나를 기각하면 VF d1 ★3 (3) 나누는 식을 (x-b)^2 대신 (x-b)(x-c) 로 하면 미분 없이 인수정리만 → ★1~2."
```

```yaml
- id: RPM-CALC1-0302
  page: 49
  vendor_label: "유형 14 다항식의 나눗셈에서 미분법의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x^10+ax^3+b 를 (x-1)^2 으로 나눈 나머지가 4x-9 일 때 ab.
  category: "f(1)=R(1), f'(1)=R'(1) → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 나눗셈에서 미분법의 활용 — 나머지가 주어진 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=(x-1)^2 Q(x)+4x-9 에서 f(1)=-5 → 1+a+b=-5, f'(1)=4 → 10+3a=4 → a=-2, b=-4 → ab=8. 항등식 두 번 대입의 표준 절차 → 중 ★2.
  tier: star_2
  mechanism_primary: "f=(x-1)^2 Q+4x-9 → f(1)=-5 · f'(1)=4 → a=-2, b=-4 → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 10, 나머지 4x-9, 나누는 점 1 을 바꿀 수 있음. 제약: f'(1)=R'(1) 에서 a 가 정수가 되도록 (R'(1)-지수) 가 3 의 배수."
    creative: "(1) 나머지를 상수로 주면 f'(1)=0 조건이 되어 0299 골조 ★2 (2) 나누는 식을 (x-1)^2(x+1) 로 늘려 나머지를 이차식으로 주면 조건 세 개 ★3 (3) a, b 대신 지수 n 을 미지로 주면 0303 골조와 결합 ★3."
```

### 유형 UP 15 치환을 이용한 극한값의 계산

```yaml
- id: RPM-CALC1-0303
  page: 50
  vendor_label: "유형 UP 15 치환을 이용한 극한값의 계산"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    lim_{x→1} (x^n-kx+2)/(x-1)=15 일 때 n+k (n 은 자연수, k 는 상수). 5지선다.
  category: "0/0 → k 결정 → f'(1)=n-k 로 n 결정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 이 포함된 극한값의 계산 — 미분계수 f'(1) 로 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 → 0: 1-k+2=0 → k=3. f(x)=x^n-3x+2 로 두면 극한은 f'(1)=n-3=15 → n=18 → 21. 벤더는 x-1=t 치환 유형으로 두었지만 유형 11 의 0/0 → f(1)=0, f'(1) 골조와 같고 M_total 5·통찰 0 → 유형 UP 출발 ★3 에서 −1.
  tier: star_2
  mechanism_primary: "0/0 → k=3 → f'(1)=n-3=15 → n=18 → 21"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 15, 상수항 2, 점 x=1 을 바꿀 수 있음. 제약: 점이 1 이면 x^n 의 값이 n 과 무관하게 1 이라 k 가 먼저 결정됨. 점을 2 로 바꾸면 2^n 이 나와 0306 골조가 되므로 n 이 유일하게 잡히는 값(2^n=…)을 골라야 함."
    creative: "(1) 분모를 x^2-1 로 바꾸면 계수 1/2 처리 추가(★2) (2) 극한값을 주지 않고 'n+k 가 최소' 처럼 정수 조건으로 바꾸면 BW d1 ★3 (3) x^n 항이 두 개(x^n-x^m)면 n-m 만 결정되어 부정 → 조건 하나를 더 주는 설계로 ★3."
```

```yaml
- id: RPM-CALC1-0304
  page: 50
  vendor_label: "유형 UP 15 치환을 이용한 극한값의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    lim_{x→1} (x^9-x^8+x^7-x^6+x^5-1)/(x-1) 의 값.
  category: "f(1)=0 확인 → f'(1) 교대합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 이 포함된 극한값의 계산 — 미분계수 f'(1) 로 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=분자 라 하면 f(1)=1-1+1-1+1-1=0 이므로 극한은 f'(1)=9-8+7-6+5=7. 확인 한 번·미분계수 한 줄이라 M_total 4·통찰 0 → 유형 UP 출발 ★3 에서 −1. [분류 이슈] 유형 UP 구역이지만 실제 골조는 0322(시험에 꼭)와 같은 한 줄 계산이라 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "f(1)=0 확인 → f'(1)=9-8+7-6+5 → 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수·지수·부호 배열을 바꿀 수 있음. 제약: f(1)=0 이 되도록 계수 합이 0 이어야 하고(안 그러면 발산), 답은 지수 가중 합이므로 정수."
    creative: "(1) 점을 x→-1 로 바꾸면 홀수 지수 부호 함정이 붙어 0322 골조(★1~2) (2) 분모를 x^2-1 또는 x^3-1 로 바꾸면 분모 미분계수로 나누는 단계 추가(★2) (3) 항 개수를 일반 n 으로 주고 값을 n 의 식으로 묻거나 '값이 100 이 되는 n' 을 물으면 PD d1 ★3."
```

```yaml
- id: RPM-CALC1-0305
  page: 50
  vendor_label: "유형 UP 15 치환을 이용한 극한값의 계산"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    lim_{x→1} (x^n-2x^2-3x+4)/(x-1)=5 를 만족시키는 자연수 n.
  category: "f(1)=0 자동 → f'(1)=n-7=5"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 이 포함된 극한값의 계산 — 지수 n 의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=1-2-3+4=0 이 n 과 무관하게 성립하므로 극한은 f'(1)=n-4-3=n-7=5 → n=12. 한 줄 계산, M_total 5·통찰 0 → 유형 UP ★3 에서 −1.
  tier: star_2
  mechanism_primary: "f(1)=0 (n 무관) → f'(1)=n-7=5 → n=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 부분 -2x^2-3x+4 와 극한값 5 를 바꿀 수 있음. 제약: 다항 부분의 x=1 값이 -1 이어야 f(1)=0 이 n 과 무관하게 성립하고, 극한값+다항 부분의 도함수값 이 자연수."
    creative: "(1) 상수항을 미지 k 로 두어 0303 골조로 확장(★2) (2) x^n 을 (x+1)^n 로 바꾸면 f'(1)=n·2^(n-1) 이 되어 지수방정식 판단 ★3 (3) '극한값이 자연수가 되는 n 의 개수' 처럼 개수 세기로 바꾸면 MI d1 ★3."
```

```yaml
- id: RPM-CALC1-0306
  page: 50
  vendor_label: "유형 UP 15 치환을 이용한 극한값의 계산"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    lim_{x→2} (x^n+x-34)/(x-2)=k 일 때 n+k (n 은 자연수, k 는 상수).
  category: "0/0 → 2^n=32 → n=5 → k=f'(2)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 이 포함된 극한값의 계산 — 지수 n 의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 → 0: 2^n+2-34=0 → 2^n=32 → n=5. k=f'(2)=5·2^4+1=81 → 86. 지수방정식 한 번과 미분계수 한 줄, M_total 5·통찰 0 → 상중 출발 ★3 에서 −1. [분류 이슈] 벤더 상중·서술형이나 골조는 0303 과 같아 ★2 판정 — 기록.
  tier: star_2
  mechanism_primary: "0/0 → 2^n=32 → n=5 → k=f'(2)=5·16+1=81 → 86"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$86$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 2 와 상수항 -34 를 바꿀 수 있음. 제약: 2^n = 상수항 보정값 이 2 의 거듭제곱이 되도록(예: 3^n 꼴이면 점 3), k=n·a^(n-1)+1 이 크지 않게 n 을 5 이하로."
    creative: "(1) 분모를 x^2-4 로 바꾸면 k 에 1/4 이 붙어 분수 처리 추가(★2) (2) 분자를 x^n-ax-b 로 두고 n, a, b 중 둘을 미지로 하면 조건 부족 → 정수 조건으로 결정하는 BW d1 ★3 (3) x^n 대신 (x-1)^n 을 쓰면 점 2 에서 1 이 되어 n 이 극한값 쪽에서만 결정 ★2."
```

### 유형 UP 16 미분의 항등식에의 활용

```yaml
- id: RPM-CALC1-0307
  page: 50
  vendor_label: "유형 UP 16 미분의 항등식에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    이차함수 f 가 (x+2)f'(x)-f(x)=3x^2+12x 를 만족시키고 f'(-1)=1 일 때 f'(-2). 5지선다.
  category: "f=ax^2+bx+c 대입 → 계수 비교 → f'(-1) 로 나머지 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분의 항등식에의 활용 — 이차함수 계수 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f=ax^2+bx+c 로 두면 좌변 = ax^2+4ax+(2b-c) 이므로 a=3, 2b=c. f'(-1)=-2a+b=1 → b=7 → f'(-2)=-4a+b=-5. 항등식 전개·계수 비교가 Mₖ 2, 조건이 셋(항등식 두 개·미분계수 하나)이라 M_total 7, 통찰 0 → 유형 UP ★3 유지.
  tier: star_3
  mechanism_primary: "f=ax^2+bx+c → (x+2)f'-f = ax^2+4ax+(2b-c) 계수 비교 → a=3 → f'(-1)=1 → b=7 → f'(-2)=-5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 3x^2+12x 와 조건 f'(-1)=1, 묻는 값 f'(-2) 를 바꿀 수 있음. 제약: (x+2)f'-f 의 x^2 계수와 x 계수는 a 와 4a 로 묶여 있으므로 우변은 반드시 a(x^2+4x) 꼴이어야 항등식이 성립함. c 는 2b-c=0 에서 자동."
    creative: "(1) 우변 상수항을 0 이 아니게 주면 c 가 독립 결정되어 f(0) 을 물을 수 있음(★3) (2) 차수를 주지 않고 '다항함수 f' 로 두면 최고차 비교로 차수를 먼저 결정하는 BW d2 ★3~4(0309 골조) (3) x=-2 대입으로 f(-2) 를 바로 얻는 지름길을 묻는 값에 맞추면 SC 성격이 생겨 ★3."
```

```yaml
- id: RPM-CALC1-0308
  page: 50
  vendor_label: "유형 UP 16 미분의 항등식에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    이차함수 f 가 xf'(x)-f(x)=x^2+3 을 만족시키고 f'(1)=3 일 때 f(2). 5지선다.
  category: "f=ax^2+bx+c 대입 → ax^2-c 계수 비교 → f'(1) 로 b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분의 항등식에의 활용 — 이차함수 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    xf'-f = ax^2-c = x^2+3 → a=1, c=-3. f'(1)=2+b=3 → b=1 → f(2)=4+2-3=3. 0307 보다 항등식이 짧아 Mₖ 1, M_total 6·통찰 0 → 유형 UP 중 표시지만 −1 조건(≤5)에는 안 걸려 ★2. 벤더 중 표시와도 일치.
  tier: star_2
  mechanism_primary: "f=ax^2+bx+c → xf'-f = ax^2-c 비교 → a=1, c=-3 → f'(1)=3 → b=1 → f(2)=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 x^2+3, f'(1)=3, 묻는 점 2 를 바꿀 수 있음. 제약: xf'-f 는 x 항이 소거되므로 우변에 x 항을 넣으면 안 됨(항등식 불성립). b 는 미분계수 조건에서만 결정."
    creative: "(1) 우변에 x 항을 넣고 '이차함수가 존재하지 않음' 을 보이게 하면 논증형 ★3 (2) 좌변을 xf'(x)-2f(x) 로 바꾸면 x^2 항이 소거되어 f 의 차수·계수 자유도가 달라짐 → 차수 판단 BW d2 ★3 (3) 삼차함수로 올리면 미지수 넷·조건 넷 M_total 8 ★3."
```

```yaml
- id: RPM-CALC1-0309
  page: 50
  vendor_label: "유형 UP 16 미분의 항등식에의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    최고차항 계수 1 인 다항함수 f 가 xf'(x)-3f(x)=3x^2-x 를 만족시킬 때 f(-1).
  category: "최고차항 비교로 차수 3 결정 → 삼차 설정 → 계수 비교"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 가 n 차이면 좌변 최고차 계수는 (n-3) — 우변이 2차이려면 n=3 에서 최고차가 상쇄돼야 함을 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분의 항등식에의 활용 — 차수 결정(최고차항 상쇄)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    n 차라 하면 xf'-3f 의 최고차 계수는 n-3. n≠3 이면 차수 n 이 우변 2 와 맞아야 하는데 n=2 면 계수 -1≠3 이라 모순 → n=3, 최고차 상쇄. f=x^3+ax^2+bx+c 대입: -ax^2-2bx-3c=3x^2-x → a=-3, b=1/2, c=0 → f(-1)=-1-3-1/2=-9/2. 차수 역추적 BW d2 + 계수 비교 M_total 8 → 상중 ★3.
  tier: star_3
  mechanism_primary: "최고차 계수 n-3 → 우변 2차 ⇒ n=3 상쇄 → f=x^3+ax^2+bx+c 대입 → a=-3, b=1/2, c=0 → f(-1)=-9/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3(xf'-3f)과 우변을 바꿀 수 있음. 제약: xf'-kf 는 k 차 항을 소거하므로 우변 차수가 k 미만이어야 '최고차 상쇄' 골조가 살고, 최고차 계수 조건(1)이 있어야 f 가 유일. b 처럼 분수가 나오면 답이 분수가 됨."
    creative: "(1) '최고차항 계수 1' 을 빼면 k 차 항이 자유로워 f 가 무수히 많음 → '가능한 f(1) 의 최솟값' 처럼 바꾸면 ★4 (2) 좌변을 (x-1)f'-3f 로 바꾸면 상쇄 후 계수 비교가 복잡해져 Mₖ 3 ★3 (3) 우변을 0 으로 두면 f=x^3 꼴만 남아 ★2 로 하락."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0310
  page: 51
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    미분가능한 f, g 가 f(a)=g(a), f'(a)=1 이고 lim_{h→0} {f(a+h)-g(a+h)}/h=3 일 때 g'(a). 5지선다.
  category: "f(a)=g(a) 이용 → 극한 = f'(a)-g'(a)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(a)=g(a) 를 분자에 끼워 넣어야 두 미분계수의 차로 바뀜"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — 두 함수 f(a+h)-g(a+h) 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 = {f(a+h)-f(a)} - {g(a+h)-g(a)} (f(a)=g(a)) → f'(a)-g'(a)=3 → g'(a)=-2. 삽입 착안 EQV d1 하나, 계산 한 줄 → 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "f(a)=g(a) 삽입 → f'(a)-g'(a)=3 → g'(a)=1-3=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(a), 극한값, h 의 계수(f(a+2h)-g(a-h) → 2f'(a)+g'(a))를 바꿀 수 있음. 제약: f(a)=g(a) 조건은 반드시 유지, 답이 정수가 되게 계수 조합."
    creative: "(1) f(a)=g(a) 를 빼고 '극한이 존재하기 위한 조건' 을 묻는 보기로 바꾸면 EQV 가 전면 ★3 (2) f, g 를 구체 다항식으로 주면 0286 골조 ★2 (3) 조건을 곱 f(a+h)g(a+h)-f(a)g(a) 로 바꾸면 곱의 미분법 결합 ★2~3."
```

```yaml
- id: RPM-CALC1-0311
  page: 51
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 y=f(x) 위의 점 (-2, f(-2)) 에서의 접선의 기울기가 -6 일 때 lim_{x→-2} {f(x)-f(-2)}/(x^3+8). 5지선다.
  category: "분모 인수분해 → f'(-2)/12"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — 분모 x^3+a^3 꼴"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^3+8=(x+2)(x^2-2x+4) 이므로 극한 = f'(-2)/(4+4+4) = -6/12 = -1/2. 접선 기울기 = f'(-2) 읽기와 인수분해 한 줄. M_total 6 은 일반 함수 f 의 Mₐ 3 때문이고 단일 절차·통찰 0 → ★2 에서 −1.
  tier: star_1
  mechanism_primary: "접선 기울기 = f'(-2)=-6 → x^3+8 인수분해 → f'(-2)/12 → -1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 -2, 기울기 -6, 분모 x^3+8(→ x^2-4, x^4-16)을 바꿀 수 있음. 제약: 분모가 (x-a) 를 인수로 갖고 나머지 인수의 x=a 값이 0 이 아니어야 함, 답은 기울기/그 값."
    creative: "(1) 분자를 f(x^2)-f(4) 처럼 합성 꼴로 바꾸면 치환 단계가 붙어 ★2 (2) 기울기를 '접선이 직선 6x+y=0 과 평행' 으로 주면 RT d1 ★2 (3) 분모를 x^3+8 대신 f 를 포함한 f(x)-f(-2) 의 제곱 등으로 바꾸면 0284 골조 ★2."
```

```yaml
- id: RPM-CALC1-0312
  page: 51
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    미분가능한 f 가 f(x+y)=f(x)+f(y)-3xy 를 만족시키고 f'(0)=-2 일 때 f'(x).
  category: "f(0)=0 → 정의식에 함수방정식 대입 → f'(x)=f'(0)-3x"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x+h)-f(x) 를 함수방정식으로 f(h)-3xh 로 바꿔야 도함수 정의가 진행됨(f(0)=0 확인 포함)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수방정식 f(x+y)=f(x)+f(y)+… 의 도함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=y=0 → f(0)=0. f'(x)=lim {f(x+h)-f(x)}/h = lim {f(h)-3xh}/h = f'(0)-3x = -3x-2. 함수방정식 대입 착안 EQV d1 하나, 이후는 정의식 표준 → 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "f(0)=0 → f'(x)=lim {f(h)-3xh}/h → f'(0)-3x → -3x-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$f'(x)=-3x-2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교차항 -3xy 의 계수와 f'(0) 값을 바꿀 수 있음. 제약: 교차항이 xy 의 상수배면 f'(x) 는 일차식, 상수항(예: +1)을 넣으면 f(0)≠0 이 되어 f(0) 처리 단계가 추가됨(0324 골조)."
    creative: "(1) 상수항 -1 을 넣고 f'(1) 을 조건으로 주면 f(0) 계산·역산이 붙어 ★3(0324) (2) 교차항을 xy(x+y) 로 바꾸면 f'(x) 가 이차식이 되어 ★3 (3) f'(x) 대신 f(x) 자체를 묻게 하면 05 단원 부정적분 결합 XU ★3~4."
```

```yaml
- id: RPM-CALC1-0313
  page: 51
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림의 y=f(x) 그래프(구간 (-1, 5), x=2·3 에서 점프·구멍, 1≤x≤2 는 x 축 위 수평)에 대해 극한 존재·f'(4) 부호·불연속점 개수·미분불가능점 개수·f'(x)=0 인 점 개수 중 옳지 않은 것. 5지선다.
  category: "그래프 판독 — 연속·미분가능·f'=0 인 점"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 연속·미분가능성·도함수 부호 판독"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① x→3 에서 좌우극한 2 로 일치(함숫값 1 과 무관) 참. ② x=4 부근 감소 참. ③ 불연속은 x=2(점프), x=3(구멍) 2개 참. ④ 미분불가능은 x=1(꺾임)·2·3 의 3개 참. ⑤ f'(x)=0 은 x=0 극대·x≈4.5 극소에 더해 수평 구간 (1, 2) 의 모든 점이라 2개가 아님 → 거짓. 다섯 보기 판독은 표준이고 수평 구간이 함정(T-경계·T-표기) → ★2. [분류 이슈] ⑤ 의 '구간 전체에서 f'=0' 판독을 함정으로 볼지 통찰로 볼지 애매 — ★2/★3.
  tier: star_2
  mechanism_primary: "그래프 판독: 극한 존재(3) · 부호(4) · 불연속 {2, 3} · 미분불가 {1, 2, 3} · f'=0 은 수평 구간 포함 → ⑤ 거짓"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0313.png
  latex: latex-bank/rpm-calc1/items/0313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(-1, 1, 2, 3, 4, 5 · 함숫값 1, 2)은 고정. 보기 문장의 점(f'(4) → f'(0))·개수(2개 → 3개)만 바꿔 참·거짓을 뒤집을 수 있음. 제약: 그림을 바꾸지 않는 한 불연속 2·미분불가 3·수평 구간 존재는 고정."
    creative: "(1) 'f'(x)=0 인 x 의 개수' 를 정답 보기로 두고 수평 구간이 없는 그래프로 다시 그리면 함정 소거 ★2 (2) g(x)=xf(x) 나 f(x)^2 의 미분가능점 개수를 물으면 곱의 미분가능성 EQV d2 ★3(0327 골조) (3) 좌우극한 존재만 묻는 01 단원 회귀형 ★1."
```

```yaml
- id: RPM-CALC1-0314
  page: 51
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    ㄱ f(x)=√((x-2)^2), ㄴ (x-2)|x-2|, ㄷ (x^2-4)/|x-2| 중 x=2 에서 미분가능하지 않은 것 고르기.
  category: "절댓값 꼴 세 함수의 x=2 미분가능성 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 함수의 미분가능성 판별(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ √((x-2)^2)=|x-2| → 꺾임, 미분불가. ㄴ (x-2)|x-2| 는 x≥2 에서 (x-2)^2, x<2 에서 -(x-2)^2 → 좌우 미분계수 모두 0 → 미분가능. ㄷ x=2 에서 정의되지 않으므로 불연속 → 미분불가. 답 ㄱ, ㄷ. 세 판정 모두 표준이며 함정은 √ 표기(T-표기)와 정의역(T-범위) → ★2.
  tier: star_2
  mechanism_primary: "ㄱ |x-2| 꺾임 · ㄴ ±(x-2)^2 좌우 도함수 0 일치 · ㄷ x=2 정의 안 됨 → ㄱ, ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 2 와 각 보기의 꼴(|x-2| → |x^2-4|, (x-2)|x-2| → x|x-2|)을 바꿀 수 있음. 제약: ㄴ 형은 다른 인수가 x=2 에서 0 일 때만 미분가능하므로 인수 선택에 따라 답이 뒤집힘, ㄷ 형은 분모가 0 이 되는 점을 유지."
    creative: "(1) ㄷ 를 (x^2-4)/|x-2| 대신 |x^2-4|/(x+2) 로 바꾸면 정의는 되지만 꺾임 → 답 변화 ★2 (2) 'x=2 에서 연속이지만 미분불가' 만 고르게 하면 연속·미분 분리 판정 ★2 (3) 보기를 g(x)|x-2| 의 g 를 고르는 형태로 바꾸면 0298 골조 EQV d1 ★2~3."
```

```yaml
- id: RPM-CALC1-0315
  page: 51
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=x^2-x+1 의 x=1 에서 3 까지의 평균변화율과 x=a 에서의 미분계수가 같을 때 a. 5지선다.
  category: "평균변화율 = f'(a)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율과 미분계수가 같은 x 의 값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평균변화율 {f(3)-f(1)}/2 = 6/2 = 3, f'(a)=2a-1=3 → a=2. 계산 두 줄, M_total 4·통찰 0 → ★2 에서 −1. 이차함수에서는 a 가 구간 중점이라는 사실로 즉답도 가능.
  tier: star_1
  mechanism_primary: "평균변화율 3 → 2a-1=3 → a=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [1, 3], 이차함수 계수를 바꿀 수 있음. 제약: 이차함수면 답은 항상 구간 중점이므로 선택지에 중점을 넣되, 삼차함수로 바꾸면 이차방정식 → 구간 안의 근 선택 필요."
    creative: "(1) 삼차함수로 바꾸고 '구간 안의 a' 로 제한하면 근 두 개 중 하나를 거르는 VF d1 ★2~3 (2) '이차함수에서 a 가 항상 구간 중점임을 보이시오' 로 바꾸면 논증 SYM d1 ★2 (3) 평균변화율 대신 '두 점을 지나는 직선과 평행한 접선' 으로 표현하면 RT d1 ★2."
```

```yaml
- id: RPM-CALC1-0316
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다항함수 f, g 가 lim_{x→2} {f(x)-2}/(x^2-4)=2, lim_{x→2} {g(x)-1}/(x^3-8)=1 을 만족할 때 y=f(x)g(x) 의 x=2 에서의 미분계수.
  category: "두 극한 → f(2), f'(2), g(2), g'(2) → 곱의 미분법"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한 조건에서 f(a)·f'(a) 읽기 → 곱의 미분법"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 식: f(2)=2, f'(2)/4=2 → f'(2)=8. 둘째: g(2)=1, g'(2)/12=1 → g'(2)=12. (fg)'(2)=f'(2)g(2)+f(2)g'(2)=8+24=32. 극한 → 함숫값·미분계수 읽기 두 번과 곱의 미분법 결합, 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "0/0 두 개 → f(2)=2, f'(2)=8 · g(2)=1, g'(2)=12 → (fg)'(2)=8·1+2·12 → 32"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$32$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수(2, 1), 분모(x^2-4, x^3-8), 극한값을 바꿀 수 있음. 제약: 분모 미분계수(4, 12)를 곱한 값이 정수, 묻는 점이 두 극한의 점과 같아야 함."
    creative: "(1) 묻는 것을 (f/g)'(2) 로 바꾸면 몫의 미분(미적분Ⅰ 범위 밖)이라 fg 나 f^2 g 로 제한 (2) g 를 f 의 도함수로 주면 f'(2), f''-류 없이 조건 재해석 EQV d1 ★3 (3) 한 극한을 h→0 꼴(f(2+h)-f(2-h))로 바꿔 읽기 방식을 섞으면 ★2."
```

```yaml
- id: RPM-CALC1-0317
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    y=f(x) 위의 점 (3, 1) 에서의 접선의 기울기가 -1 일 때 g(x)=x^2+(x+1)f(x) 의 g'(3).
  category: "f(3)=1, f'(3)=-1 → 곱의 미분법 대입"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 미분법 — 접선 기울기 조건 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    g'(x)=2x+f(x)+(x+1)f'(x) → g'(3)=6+1+4·(-1)=3. 미분 한 줄·대입 한 줄. M_total 6 은 Mₐ 3 때문이고 단일 절차·통찰 0 → ★2 에서 −1.
  tier: star_1
  mechanism_primary: "f(3)=1, f'(3)=-1 → g'(3)=2·3+f(3)+4f'(3) → 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (3, 1), 기울기 -1, g 의 구성(x^2, x+1)을 바꿀 수 있음. 제약: g'(3) 에 f(3) 과 f'(3) 이 모두 쓰이도록 f 에 곱해지는 인수가 상수가 아니게."
    creative: "(1) g(x)=(x+1)f(x) 의 접선 기울기를 묻는 04 단원 연결 ★1~2 (2) 조건을 lim {f(x)-1}/(x-3)=-1 로 주면 0316 골조 ★2 (3) g=f(x)^2+xf(x) 처럼 f 제곱을 넣으면 곱의 미분 두 번 ★2."
```

```yaml
- id: RPM-CALC1-0318
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림의 y=f(x)(x=1, 3 에서 0 · x=2 에서 극솟값 -2 · x=0 근처 극대) 와 g(x)=xf(x) 에 대해 ㄱ f(1)+g'(1)>0, ㄴ g(2)g'(2)>0, ㄷ f(3)+g'(3)>0 의 참·거짓. 5지선다.
  category: "g'=f+xf' → 그래프에서 f 값·f' 부호 읽어 소거"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 보기에서 f(1)=f(3)=0, f'(2)=0 인 항을 그래프에서 골라 소거해야 남는 항의 부호(f'(1)<0, f(2)<0, f'(3)>0)로 판정됨 — 단순 대입이 아니라 그래프 정보의 선택적 읽기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프와 곱의 미분법 — 보기 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g'(x)=f(x)+xf'(x). ㄱ f(1)+g'(1)=2f(1)+f'(1)=f'(1)<0 → 거짓. ㄴ g(2)=2f(2)=-4, g'(2)=f(2)+2f'(2)=-2 → 곱 8>0 참. ㄷ f(3)+g'(3)=2f(3)+3f'(3)=3f'(3)>0 참 → ㄴ, ㄷ. 그래프에서 0 인 항을 골라 소거하는 RT d2 + 부호 함정(Mₜ 2) → ★3. [분류 이슈] 그래프 읽기를 d2 로 볼지 표준 d1 로 볼지 애매 — d1 이면 ★2.
  tier: star_3
  mechanism_primary: "g'=f+xf' → 그래프에서 f(1)=f(3)=0, f'(2)=0 소거 → f'(1)<0 · f(2)<0, f'(2)=0 · f'(3)>0 → ㄴ, ㄷ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-0318.png
  latex: latex-bank/rpm-calc1/items/0318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(영점 1, 3 · 극소 (2, -2))은 고정. 보기의 점과 결합식(f(1)+g'(1) → f(1)-g'(1))만 바꿔 부호를 뒤집을 수 있음. 제약: 각 보기에 그래프에서 0 으로 읽히는 항이 하나는 있어야 판정이 확정됨."
    creative: "(1) g(x)=x^2 f(x) 나 (x-1)f(x) 로 바꾸면 소거되는 점이 달라져 같은 골조 ★3 (2) 'g'(x)=0 인 x 의 개수' 를 물으면 f+xf'=0 의 그래프적 해석이 필요해 ★4 (3) 그래프 대신 f(1)=0, f'(1)<0 같은 부호 조건을 문장으로 주면 RT 가 사라져 ★2."
```

```yaml
- id: RPM-CALC1-0319
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다항함수 f 가 ㈎ lim_{x→∞} f(x)/(x^2-3x+2)=-3, ㈏ lim_{x→1} {f(x)-5}/(x-1)=-8 을 만족할 때 f'(-1).
  category: "㈎ 차수·최고차계수 → ㈏ f(1), f'(1) → 이차함수 결정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→∞ 극한값이 0 아닌 상수 → f 는 이차·최고차계수 -3 이라는 역추적(01 단원 표준)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한 조건으로 다항함수 결정 — 차수·f(a)·f'(a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㈎ → f(x)=-3x^2+bx+c. ㈏ → f(1)=5, f'(1)=-8: -6+b=-8 → b=-2, -3-2+c=5 → c=10. f'(-1)=6+b=4. 차수 역추적 BW d1 + 표준 미정계수, 통찰 1개 d1 → ★2. 중요 태그 +0.
  tier: star_2
  mechanism_primary: "㈎ → f=-3x^2+bx+c → ㈏ f(1)=5, f'(1)=-8 → b=-2, c=10 → f'(-1)=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 값 -3 과 분모 차수, ㈏ 의 점·상수 5·극한값 -8, 묻는 점 -1 을 바꿀 수 있음. 제약: ㈎ 분모 차수 = f 의 차수, ㈏ 는 f(1)·f'(1) 두 조건이므로 미지수가 최고차 제외 2개일 때 유일."
    creative: "(1) ㈎ 분모를 삼차로 바꾸면 미지수 3개라 ㈏ 조건이 하나 더 필요 → 조건 (다) 추가 설계 ★3 (2) ㈏ 를 f(1+h)-f(1-h) 꼴로 주면 f(1) 을 못 얻어 조건 부족 → 'f(1)=5' 를 따로 주는 재구성 ★2 (3) ㈎ 를 x→0 극한으로 바꾸면 최저차 항 결정으로 골조가 바뀜 ★3."
```

```yaml
- id: RPM-CALC1-0320
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    f(x)=x^3+ax+b (x<1), bx+4 (x≥1) 이 실수 전체에서 미분가능할 때 a+b. 5지선다.
  category: "x=1 연속 + 좌우 미분계수 일치"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 함수의 미분가능성을 이용한 미정계수의 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    연속: 1+a+b=b+4 → a=3. 미분계수: 3+a=b → b=6 → a+b=9. 두 식이 순서대로 바로 풀리는 단일 절차, M_total 5·통찰 0 → ★2 에서 −1. 기출 태그는 통찰이 없어 +0. [분류 이슈] 평가원 기출·시험에 꼭 구역이나 0296 과 같은 골조라 ★1 — 기록.
  tier: star_1
  mechanism_primary: "연속 1+a+b=b+4 → a=3 → 미분계수 3+a=b → b=6 → 9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점 1, 삼차 조각의 항, 직선 조각 bx+4 의 상수를 바꿀 수 있음. 제약: 연속식에서 b 가 소거되어 a 가 먼저 결정되는 구조(양변에 b 가 같은 계수로 들어감)를 유지하면 일차 연립이 순차로 풀림."
    creative: "(1) 직선 조각을 bx+c 로 하고 조건을 하나 더(f(0)=…) 주면 미지수 셋 ★2 (2) 조각 경계를 미지수 a 로 두면 0297 골조 ★2~3 (3) '미분가능' 을 '연속이지만 미분불가' 로 바꾸면 부등 조건 ★2."
```

```yaml
- id: RPM-CALC1-0321
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    x^5+ax^4+b 가 (x+1)^2 으로 나누어떨어질 때 a-b. 5지선다.
  category: "f(-1)=0, f'(-1)=0 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 나눗셈에서 미분법의 활용 — (x-a)^2 으로 나누어떨어짐"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(-1)=5-4a=0 → a=5/4, f(-1)=-1+a+b=0 → b=-1/4 → a-b=3/2. 0299 와 같은 골조에 분수 처리가 붙음, 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "(x+1)^2 | f → f'(-1)=5-4a=0 → a=5/4 → f(-1)=0 → b=-1/4 → 3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 5·4 와 나누는 점 -1 을 바꿀 수 있음. 제약: f'(-1)=0 에서 a 가 단독으로 결정되는 항 구성(x^5+ax^4 처럼 두 항만)이면 분수 답이 자연스럽고, 선택지는 1/4 간격."
    creative: "(1) 상수항 b 대신 bx 를 두면 두 식이 연립되어 ★2 (2) 나누는 식을 (x+1)^2 에서 (x+1)^3 로 올리면 f''(-1)=0 은 범위 밖이라 부적합 — 대신 (x+1)^2(x-1) 로 조건 셋 ★3 (3) 몫의 x=0 값을 묻게 하면 나눗셈 실행 결합 ★3."
```

```yaml
- id: RPM-CALC1-0322
  page: 52
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    lim_{x→-1} (x^16+x^8+x^4+x^2-4)/(x+1) 의 값.
  category: "f(-1)=0 확인 → f'(-1)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 이 포함된 극한값의 계산 — 미분계수 f'(-1) 로 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(-1)=1+1+1+1-4=0 → 극한 = f'(-1)=-16-8-4-2=-30. 한 줄, 홀수 지수 도함수의 부호(T-부호)만 조심 → M_total 4·통찰 0 → ★2 에서 −1.
  tier: star_1
  mechanism_primary: "f(-1)=0 확인 → f'(-1)=16(-1)^15+8(-1)^7+4(-1)^3+2(-1) → -30"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-30$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 배열(짝수 지수 항 개수)과 상수항을 바꿀 수 있음. 제약: 상수항 = -(항 개수) 로 f(-1)=0 유지, 짝수 지수만 쓰면 도함수가 모두 음수라 답은 -(지수 합)."
    creative: "(1) 홀수 지수를 섞으면 f(-1) 계산과 도함수 부호가 엇갈려 함정 두 겹 ★2 (2) 분모를 x^2-1 로 바꾸면 f'(-1)/(-2) 처리 ★2 (3) 항 개수 n 을 일반화해 값을 n 의 식으로 묻거나 값 -110 인 n 을 물으면 PD d1 ★3."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0323
  page: 53
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    다항함수 f 가 lim_{x→2} {f(x+2)-6}/(x^2-4)=3 을 만족할 때 f(4)+f'(4).
  category: "0/0 → f(4)=6 → x+2 치환·분모 인수분해 → f'(4)/4=3"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미분계수를 이용한 극한값의 계산 — f(x+2) 평행이동 치환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 → 0: f(4)=6. 극한 = lim {f(x+2)-f(4)}/((x-2)(x+2)) = f'(4)/4 = 3 → f'(4)=12 → 18. f(x+2) 의 점이 4 라는 표기 함정(f'(2) 로 쓰는 오답) 외에는 0288 골조의 단일 절차. M_total 7 은 Mₐ 3 때문 → 서술형 출발 ★3 에서 −1. [분류 이슈] 서술형 구역 ★3 출발이나 통찰 0·단일 절차라 ★2 — 기록.
  tier: star_2
  mechanism_primary: "0/0 → f(4)=6 → x+2=t 치환 → f'(4)/4=3 → f'(4)=12 → 18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$18$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량 2, 점 2, 상수 6, 극한값 3 을 바꿀 수 있음. 제약: 분모 x^2-4 의 다른 인수 값(4)을 곱한 값이 정수, 묻는 점은 (극한 점 + 이동량)."
    creative: "(1) f(x+2) 를 f(2x) 로 바꾸면 미분계수에 계수 2 가 붙어 T-단위 함정 ★2 (2) 분자를 f(x+2)-f(x) 로 바꾸면 f(4)-f(2)=0 조건과 f'(4)-f'(2) 가 나와 조건 통합 ★3 (3) f 를 이차로 제한하고 조건 하나를 더 주면 함수 결정형 ★3."
```

```yaml
- id: RPM-CALC1-0324
  page: 53
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형 주관식"
  summary: |
    미분가능한 f 가 ㈎ f(x+y)=f(x)+f(y)+2xy-1, ㈏ f'(1)=1 을 만족할 때 f'(0).
  category: "f(0)=1 → 정의식 → f'(x)=f'(0)+2x → f'(1) 로 역산"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x+h)-f(x) 를 함수방정식으로 f(h)+2xh-1 = {f(h)-f(0)}+2xh 로 바꿔야 정의식이 진행됨(f(0)=1 처리 포함)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수방정식 f(x+y)=f(x)+f(y)+… 의 도함수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=y=0 → f(0)=1. f'(x)=lim {f(h)+2xh-1}/h = lim {f(h)-f(0)}/h + 2x = f'(0)+2x. f'(1)=f'(0)+2=1 → f'(0)=-1. 0312 골조에 f(0)≠0 처리와 f'(1) 에서 f'(0) 을 역산하는 단계가 붙음. EQV d1·M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "f(0)=1 → f'(x)=lim {f(h)-f(0)}/h + 2x = f'(0)+2x → f'(1)=1 → f'(0)=-1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$-1$"
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교차항 계수 2, 상수항 -1, 조건 f'(1)=1 을 바꿀 수 있음. 제약: 상수항 c 는 f(0)=-c 로 처리되며, f'(x) 는 일차식이라 f'(a) 하나로 f'(0) 이 결정."
    creative: "(1) 조건을 f'(1)=1 대신 lim_{h→0} {f(2h)-f(0)}/h 로 주면 계수 2 처리 추가 ★3 (2) 교차항을 3x^2 y+3xy^2 로 바꾸면 f'(x) 가 이차식이 되어 f'(0) 과 f'(1) 두 조건 필요 ★3~4 (3) f(x) 자체를 구하게 하면 05 단원 적분 결합 XU ★4."
```

```yaml
- id: RPM-CALC1-0325
  page: 53
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    삼차함수 f 가 ㈎ f(x)=x-3 의 세 실근이 1, 2, 3, ㈏ f 를 x 로 나눈 나머지가 15 를 만족할 때 f'(x) 의 최댓값.
  category: "근 조건 → f(x)-(x-3)=a(x-1)(x-2)(x-3) → f(0)=15 로 a → f' 의 최댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "방정식 f(x)=x-3 의 세 근 조건을 삼차식 f(x)-(x-3) 의 인수분해 꼴로 옮겨 미지수를 최고차 계수 하나로 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근 조건으로 삼차함수 결정 → 도함수의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ → f(x)=a(x-1)(x-2)(x-3)+x-3. ㈏ f(0)=-6a-3=15 → a=-3. f'(x)=-3{(x-2)(x-3)+(x-1)(x-3)+(x-1)(x-2)}+1=-9x^2+36x-32 → 위로 볼록, x=2 에서 최댓값 4. 조건 변환 EQV d2 + 곱의 미분 전개(Mₖ 2) → 서술형 ★3.
  tier: star_3
  mechanism_primary: "f-(x-3)=a(x-1)(x-2)(x-3) → f(0)=15 → a=-3 → f'=-9x^2+36x-32 → 꼭짓점 x=2 → 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 근(1, 2, 3), 직선 x-3, 나머지 15 를 바꿀 수 있음. 제약: 최고차 계수 a 가 음수여야 f' 이 최댓값을 가짐(양수면 최솟값), 세 근이 등차이면 f' 의 꼭짓점이 가운데 근이라 계산이 정리됨."
    creative: "(1) a>0 이 되게 나머지를 바꾸고 'f'(x) 의 최솟값' 을 물으면 부호 판단 추가 ★3 (2) 세 근 대칭성(1, 2, 3 의 중심 2)으로 f'(x) 의 대칭축을 바로 읽는 풀이를 요구하면 SYM d1 추가 ★3~4 (3) ㈏ 를 f'(0) 조건으로 바꾸면 도함수 계산이 먼저 필요 → 순서 뒤집힘 BW d1 ★3."
```

```yaml
- id: RPM-CALC1-0326
  page: 53
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    다항함수 f 가 lim_{x→2} {f(x)-a}/(x-2)=4 이고 f 를 (x-2)^2 으로 나눈 나머지가 bx+3 일 때 a+b.
  category: "극한 → f(2)=a, f'(2)=4 · 나머지 → f(2)=2b+3, f'(2)=b"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극한 조건 + (x-a)^2 나머지 → f(a)·f'(a) 대응"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한: f(2)=a, f'(2)=4. f=(x-2)^2 Q+bx+3 → f(2)=2b+3, f'(2)=b. 따라서 b=4, a=11 → 15. 두 조건이 각각 f(2), f'(2) 로 번역되는 표준 대응이고 통찰 없음, M_total 7 은 Mₐ 3 때문 → 서술형 ★3 에서 −1. [분류 이슈] 0323 과 같은 이유로 ★2 — 기록.
  tier: star_2
  mechanism_primary: "극한 → f(2)=a, f'(2)=4 · 나머지 bx+3 → f(2)=2b+3, f'(2)=b → b=4, a=11 → 15"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$15$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 2, 극한값 4, 나머지 상수 3 을 바꿀 수 있음. 제약: 나머지의 x 계수가 f'(2) 와 같고 f(2)=2b+3 이므로 a 는 자동, 정수 유지."
    creative: "(1) 나머지를 bx+c 로 두고 f(0) 조건을 더 주면 미지수 셋 ★3 (2) 극한을 h→0 꼴 f(2+h)-f(2-h) 로 주면 f(2) 가 안 나와 조건 부족 → 나머지 조건에서 f(2) 를 얻는 역방향 BW d1 ★3 (3) 나누는 식을 (x-2)^2 (x+1) 로 늘리면 나머지 이차식·조건 셋 ★3."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0327
  page: 53
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    [-2, 2] 에서 그림의 f(x=0 에서 점프, 양쪽 조각은 기울기 1 직선 · f(0)=0) 와 g(x=±1 에서 꺾이는 연속 함수 · 가운데 y=x) 에 대해 ㄱ f+g 가 x=0 에서 미분가능, ㄴ fg 가 x=-1 에서 미분가능, ㄷ f∘g 가 x=1 에서 미분가능 중 옳은 것 고르기.
  category: "그래프 함수의 합·곱·합성 미분가능성 — 조각별 좌우 도함수"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ: g 가 x=-1 에서 꺾이지만 f(-1)=0 이므로 곱의 좌우 도함수가 모두 -1 로 일치 — '꺾임 × 영점 = 미분가능' 조건으로 변환"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ: x≥1 에서 g=1 상수라 (f∘g)=f(1)=0 상수, x<1 에서 g=x 라 (f∘g)=f(x)=x-1 — 합성을 구간별 식으로 풀어 좌도함수 1·우도함수 0 불일치를 읽음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "그래프로 주어진 두 함수의 합·곱·합성의 미분가능성 판정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f = x+1 (-2≤x<0), 0 (x=0), x-1 (0<x≤2) · g = -1 (x≤-1), x (-1≤x≤1), 1 (x≥1). ㄱ f 가 x=0 에서 불연속이고 g 연속 → 합 불연속 → 거짓. ㄴ x=-1 근방 h=f·g: 좌 -(x+1) → 도함수 -1, 우 x(x+1) → 2x+1=-1 → 일치, 참. ㄷ (f∘g): x<1 에서 f(x)=x-1(도함수 1), x≥1 에서 f(1)=0(도함수 0) → 거짓. 답 ㄴ. 두 d2 통찰·M_total 10 → 실력 Up ★4(★5 조건 미달).
  tier: star_4
  mechanism_primary: "조각식 복원 → ㄱ 불연속 합 → ㄴ f(-1)=0 이 g 의 꺾임을 상쇄(좌우 -1) → ㄷ g 상수 구간에서 f∘g 상수(0 vs 1) → ㄴ"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "ㄴ"
  answer_source: "답지"
  figure: crop:fig-0327.png
  latex: latex-bank/rpm-calc1/items/0327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(±1, ±2, 점프 위치 0)은 고정. 보기에서 묻는 점만 바꿀 수 있음(ㄴ 을 x=1 로 옮기면 f(1)=0 이라 여전히 참, x=0 으로 옮기면 f 불연속·g(0)=0 이라 곱은 연속이지만 좌우 도함수 1·-1 로 거짓). 제약: 각 보기가 '꺾임·점프·상수 구간' 셋 중 하나를 겨냥하도록 유지."
    creative: "(1) ㄷ 를 g∘f 로 바꾸면 f 의 점프가 g 의 선형 구간으로 들어가 판정이 달라짐 ★4 (2) 곱 대신 f(x)g(x)^2 처럼 제곱을 넣으면 g 의 꺾임이 제곱으로 완화되어 SYM 성격 ★4 (3) 그래프를 식으로 주면 RT 가 사라져 ★3."
```

```yaml
- id: RPM-CALC1-0328
  page: 53
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    실수 전체에서 미분가능한 f 가 -1≤x<1 에서 f(x)=ax^3+bx^2+x+1 이고 f(x+2)=f(x) 를 만족할 때 f(101)+f'(101).
  category: "주기 2 → 경계 x=1 접합 조건 f(1⁻)=f(-1), f'(1⁻)=f'(-1) → a, b → f(101)=f(-1)"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'모든 실수에서 미분가능 + 주기 2' 를 x=1 에서의 접합 조건(좌극한·좌도함수 = x=-1 의 값·도함수)으로 옮김 — 오른쪽 조각을 f(x-2) 로 복원해야 보임"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(101)=f(1)=f(-1), f'(101)=f'(-1) 로 주기 축약(101=1+2·50)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "주기함수의 미분가능성 → 미정계수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    [1, 3) 에서 f(x)=f(x-2). x=1 연속: a+b+2 = f(-1) = -a+b → a=-1. 미분계수: 3a+2b+1 = f'(-1) = 3a-2b+1 → b=0. f(101)=f(-1)=1, f'(101)=f'(-1)=3a+1=-2 → -1. 접합 조건 변환 EQV d2 + 주기 축약 RT d1, 반열린 구간 경계 함정(Mₜ 2) → 실력 Up ★4(★5 조건 미달).
  tier: star_4
  mechanism_primary: "주기 2 → x=1 접합: a+b+2=-a+b, 3a+2b+1=3a-2b+1 → a=-1, b=0 → f(101)+f'(101)=f(-1)+f'(-1)=1-2=-1"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 고정 항(x+1)과 묻는 점 101 을 바꿀 수 있음. 제약: 접합 두 식이 a, b 에 대해 독립이 되려면 홀수·짝수 차 항이 섞여야 하며(x^3 과 x^2), 주기와 구간 길이가 같아야 함."
    creative: "(1) 주기를 4 로 두고 구간을 [-1, 3) 으로 넓히면 접합점이 3 과 -1 로 바뀌어 계산량 증가 ★4 (2) 'f(x+2)=f(x)+2' 같은 준주기로 바꾸면 접합 조건에 상수 이동이 붙어 EQV d2 유지 ★4 (3) 구간을 닫힌 [-1, 1] 로 주고 미분가능 대신 연속만 요구하면 조건 하나 → a, b 부정 → 'a+b 의 값' 만 묻는 ★3."
```

```yaml
- id: RPM-CALC1-0329
  page: 53
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    다항함수 f 가 모든 실수 x 에서 f(x)f'(x)=9x+12 를 만족할 때 f(1)f(2).
  category: "차수 비교 2n-1=1 → f 일차 → 계수 비교 → 두 부호 경우 → 곱 불변"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 가 n 차이면 f·f' 은 (2n-1) 차 — 우변이 일차이므로 n=1 이라는 차수 역추적이 출발점"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a^2=9, ab=12 의 두 해 (3, 4), (-3, -4) 는 부호 대칭이라 f(1)f(2)=(a+b)(2a+b) 가 같음 — 경우를 나누지 않아도 됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "미분의 항등식에의 활용 — f(x)f'(x) 차수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    2n-1=1 → n=1, f=ax+b → a(ax+b)=a^2 x+ab=9x+12 → a^2=9, ab=12 → (3, 4) 또는 (-3, -4). f(1)f(2)=7·10=70 또는 (-7)(-10)=70. 차수 역추적 BW d2 + 부호 대칭 SYM d1 → 실력 Up ★4(★5 조건 미달). [분류 이슈] 골조가 유형 UP 16 의 0309(★3)와 같은 차수 결정이며 계산은 더 짧아 ★3/★4 애매 — 실력 Up 출발을 유지하고 기록.
  tier: star_4
  mechanism_primary: "deg(ff')=2n-1=1 → f=ax+b → a^2=9, ab=12 → (±3, ±4) → f(1)f(2)=70 (부호 대칭)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$70$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 9x+12 를 바꿀 수 있음. 제약: x 계수가 완전제곱수(a^2)여야 유리수 해가 나오고, 묻는 값은 (a, b)→(-a, -b) 에 불변인 짝수 차 결합(f(1)f(2), f(1)^2)이어야 답이 유일."
    creative: "(1) 우변을 이차식으로 두면 2n-1=2 가 불가능 → '그런 f 가 없음' 을 보이는 논증형 ★4 (2) f(1)+f(2) 처럼 부호에 따라 달라지는 값을 물으면 'f(0)>0' 같은 추가 조건으로 한 경우를 기각하는 VF d1 이 붙어 ★4 (3) f(x)f'(x) 대신 f(x)+f'(x)=… 로 바꾸면 차수 그대로·계수 비교만이라 ★3 로 하락."
```

## 표본 판정 요약 (47문)

- ★ 분포: ★1 10 · ★2 29 · ★3 5 · ★4 3 · ★5 0
- 통찰형 6(0309 · 0318 · 0325 · 0327 · 0328 · 0329) · 절차형 41 · premium 0 · insights 가 비지 않은 블록 12
- type_hint 상위: 「미분계수를 이용한 극한값의 계산」 7(0283~0286 · 0310 · 0311 · 0323) · 「다항식의 나눗셈에서 미분법의 활용」 6(0299~0302 · 0321 · 0326) · 「x^n 이 포함된 극한값의 계산」 5(0303~0306 · 0322) · 「미분계수를 이용한 미정계수의 결정」 5(0287~0290 · 0319) · 「구간별 함수의 미분가능성 → 미정계수」 5(0295~0297 · 0320 · 0298 변형) · 「접선의 기울기 → 미정계수」 4 · 「미분의 항등식」 4(0307~0309 · 0329)
- 그림: 3문(`crop:fig-0313.png` · `crop:fig-0318.png` · `crop:fig-0327.png`)
- 통찰 유형(라벨 15개): I-EQV 8 · I-RT 3 · I-BW 3 · I-SYM 1 (SC · VF · XU · MI · PD · CON 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0304 | 유형 UP 15 구역(★3 출발)이나 M_total 4·통찰 0 의 한 줄 계산 — 0322(시험에 꼭) 와 같은 골조 | ★2 / ★3 |
| RPM-CALC1-0306 | 벤더 상중·서술형이나 골조가 0303 대표문제와 같음(0/0 → 2^n=32 → f'(2)) | ★2 / ★3 |
| RPM-CALC1-0313 | ⑤ 의 「수평 구간 전체에서 f'=0」 판독을 함정(Mₜ)으로 볼지 통찰로 볼지 애매 | ★2 / ★3 |
| RPM-CALC1-0318 | 그래프에서 0 인 항을 골라 소거하는 읽기를 RT d2 로 봤으나 d1 로 보면 ★2 | ★3 / ★2 |
| RPM-CALC1-0320 | 평가원 기출·시험에 꼭 구역이나 0296(유형 13 중)과 같은 순차 일차 연립 | ★1 / ★2 |
| RPM-CALC1-0323 | 서술형 주관식 ★3 출발이나 통찰 0·단일 절차(0288 골조 + 평행이동 표기) | ★2 / ★3 |
| RPM-CALC1-0326 | 서술형 주관식 ★3 출발이나 극한·나머지 두 조건이 f(2)·f'(2) 로 바로 번역되는 표준 대응 | ★2 / ★3 |
| RPM-CALC1-0329 | 실력 Up ★4 출발이나 골조가 0309(유형 UP 16 · ★3)의 차수 결정과 같고 계산은 더 짧음 | ★4 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 「미분계수를 이용한 극한값의 계산」은 하위 골조가 넷으로 갈린다 — (a) f(a+ph)-f(a-qh) 계수 합성(0283 · 0286 · 0289 조건부), (b) {f(x)}^2-{f(a)}^2 · xf(a)-af(x) 같은 대수 분리(0284 · 0285), (c) 분모가 x^3±a^3 · x^2-a^2 인 인수분해형(0288 · 0311 · 0316 · 0323), (d) 두 함수 f(a+h)-g(a+h) 에서 f(a)=g(a) 확인(0286 · 0310). 카탈로그에서는 (a)(c) 를 base ★1~2 기본 유형으로 묶고 (b)(d) 를 ★2 로 따로 세우는 편이 변형 설계에 맞는다.
- 「유형 UP 15 치환을 이용한 극한값의 계산」(0303~0306 · 0322)은 실제 골조가 유형 11 의 0/0 → f(a)=0, f'(a) 와 같다. 카탈로그에서는 별도 유형 UP 층이 아니라 「x^n 지수 결정」 하위 항목으로 유형 11 에 통합해도 된다(base ★2).
- 「구간별 함수의 미분가능성」(0295~0297 · 0320)과 「|x-a|g(x) 꼴」(0298 · 0314 ㄴ)은 조건 전환이 다르므로 따로 세운다. 경계점이 미지수인 0297 은 전자의 상위 변형(base ★2~3).
- 「다항식의 나눗셈에서 미분법의 활용」(0299~0302 · 0321 · 0326)은 「나누어떨어짐(f(a)=f'(a)=0)」과 「나머지 px+q 결정」 두 하위로 나누되 base ★2 로 같다.
- 「미분의 항등식」은 「차수가 주어진 계수 비교」(0307 · 0308 · base ★2~3)와 「최고차항 상쇄로 차수 결정」(0309 · 0329 · BW d2 · base ★3)으로 나눠 세운다. 실력 Up 0329 가 후자에 속하므로 ★4 라벨은 카탈로그 생성 후 재산정 대상이다.
- 「함수방정식의 도함수」(0312 · 0324)는 03-p2 의 같은 유형과 합쳐 하나로 두고, 상수항 유무(f(0)≠0)를 변형 축으로 적는다.
- 「그래프 판독」은 단일 함수 연속·미분가능(0313 · base ★2), 곱 g=xf 의 보기 판정(0318 · ★3), 두 함수의 합·곱·합성(0327 · ★4)의 세 층으로 base ★ 를 달리 세운다.

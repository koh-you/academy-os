---
name: mechanism-데이터-GN-M31-09
description: 개념원리 중학 3-1 09 인수분해 공식 (2)(1/1 · 90~95쪽 · 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 09 인수분해 공식 (2)
  unit_code: GN-M31-09
  part: "1/1"
  extract_range: "90~95쪽 · 90-01~95-05"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (그림 5문 · fig-90-01 / fig-90-03 / fig-93-h6 / fig-93-c6 / fig-95-05)
---

# 개념원리 중학 3-1 · 09 인수분해 공식 (2) (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 아홉 번째 소단원 「09 인수분해 공식 (2)」 90~95쪽 26문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문(90쪽) · 「핵심문제 익히기」 12문(91~93쪽 · 핵심문제 `쪽-hN` 과 짝 확인문제 `쪽-cN` 이 번갈아 배치) · 「계산력 강화하기」 5문(94쪽) · 「이런 문제가 시험에 나온다」 5문(95쪽)이다.

개념원리 중학은 RPM 과 달리 문항별 난이도 등급(`level`)도 태그도 붙지 않으므로, **구역 자체가 유일한 벤더 난이도 신호**다. 확인하기 ★1 · 핵심문제 익히기 ★2 · 계산력 강화하기 ★1 · 이런 문제가 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 핵심문제에는 본문 `type`(예제 제목)이 붙어 있어 type_hint 의 1차 후보로 썼다.

이 범위의 도구는 둘뿐이다 — ⑴ $x^2+(a+b)x+ab=(x+a)(x+b)$ (곱이 상수항인 정수쌍 중 합이 $x$ 계수인 것 찾기), ⑵ $acx^2+(ad+bc)x+bd=(ax+b)(cx+d)$ (십자셈). 26문 가운데 절반 이상이 이 두 도구를 그대로 반복하는 드릴이고, 나머지는 같은 도구 위에 **되묻기 한 겹**을 얹은 것이다 — 인수분해한 두 일차식의 합(91-c1·95-02), 계수 비교로 미지수(91-c2·92-h4·92-c4·95-03), 두 식의 공통인 인수(92-h3·92-c3), 잘못 보고 인수분해(93-h5·93-c5·95-04), 도형 넓이 ↔ 변의 길이(93-h6·93-c6·95-05). 변형 설계 때는 「도구(단순 vs 십자셈)는 고정하고 되묻기 겹만 교체」하는 축이 가장 잘 먹힌다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림은 5문(도식 채우기 2 · 타일 붙이기 2 · 삼각형 1)이며, 타일 문항은 조각의 개수가 곧 계수이므로 변형 시 그림을 반드시 함께 바꿔야 한다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-90-01
  page: 90
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑵ 곱이 상수항인 두 정수쌍과 그 합을 표에 채운 뒤 $x^2-7x+10$, $x^2+5x-6$ 을 인수분해.
  category: "곱이 ab 인 정수쌍 나열 → 합이 x 계수인 쌍 선택 → (x+a)(x+b)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x²+(a+b)x+ab 의 인수분해 — 곱·합 표 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표가 후보쌍을 모두 나열해 주므로 학생이 할 일은 합이 맞는 행을 고르는 것뿐이다. 도구 한 줄·분기 없음.
    상수항이 양수(10)면 두 수의 부호가 같고 음수(-6)면 다르다는 부호 판정(T-부호) 하나만 함정. 확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "곱이 상수항인 정수쌍 나열 → 합 = x 계수인 쌍 선택 → (x+a)(x+b)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x-2)(x-5)$, $11$, $-11$, $7$, $-7$ ⑵ $(x-1)(x+6)$, $-5$, $5$, $-1$, $1$'
  answer_source: "답지"
  figure: "crop:fig-90-01.png"
  latex: latex-bank/gn-m31/items/90-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 x 계수를 (곱, 합) 쌍으로 함께 설계한다. 제약: 상수항은 약수쌍이 3~4개인 수(10·12·18·24 등)라야 표가 채워지고, 표의 빈칸 수가 곧 약수쌍 개수이므로 그림 속 행 개수와 반드시 맞춘다. 두 소문항은 상수항 부호를 서로 다르게(양·음) 유지."
    creative: "(1) 표 없이 바로 인수분해시키면 90-02 골조(★1 유지) (2) 합이 맞는 쌍이 없게 만들어 '인수분해되지 않는 이유'를 묻기(★2 · I-EQV d1) (3) 표의 합 칸을 먼저 주고 상수항을 되묻는 역방향(★2 · I-BW d1)."
```

```yaml
- id: GN-M31-90-02
  page: 90
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $x^2+9x+18$, $x^2-4x+3$, $x^2+x-2$, $x^2-6xy-40y^2$ 를 인수분해.
  category: "x²+(a+b)x+ab 공식의 직접 적용(4회 반복)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x²+(a+b)x+ab 의 인수분해"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    90-01 에서 표를 치운 판. 곱·합 조건으로 정수쌍을 머릿속에서 찾는 한 단계뿐이다.
    ⑷ 는 문자가 둘이지만 y 를 상수처럼 보면 같은 골조이고 계수가 40 이라 약수쌍 탐색만 조금 길다. 통찰 0 · M_total 4 · 확인하기 → ★1.
  tier: star_1
  mechanism_primary: "곱 = 상수항 · 합 = x 계수인 두 수 찾기 → (x+a)(x+b) (⑷ 는 y 를 상수 취급)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+3)(x+6)$ ⑵ $(x-1)(x-3)$ ⑶ $(x-1)(x+2)$ ⑷ $(x+4y)(x-10y)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/90-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 (합, 곱)을 자유 교체. 제약: 합·곱을 만족하는 정수쌍이 존재해야 하므로 (x 계수)²−4(상수항)이 완전제곱수여야 한다. 네 소문항의 부호 조합(++ / +− / −+ / −−)을 고르게 유지하고, ⑷ 는 y² 항 계수를 유지해 동차식으로 둔다."
    creative: "(1) 넷 중 인수분해되지 않는 것 고르기(★2 · I-MI d1) (2) 결과 (x+a)(x+b) 를 주고 원식을 되묻기(★1) (3) 공통인수를 먼저 묶어야 하는 항(3x²+15x+18 꼴)을 섞으면 94-04 골조로 ★1 유지·단계 +1."
```

```yaml
- id: GN-M31-90-03
  page: 90
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑵ 십자셈 도식의 빈칸을 채워 $2x^2-x-3$, $4x^2-8x+3$ 을 인수분해.
  category: "십자셈 도식 채우기 → acx²+(ad+bc)x+bd = (ax+b)(cx+d)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "acx²+(ad+bc)x+bd 의 인수분해 — 십자셈 도식 채우기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    도식이 x² 계수와 상수항의 분해 후보를 이미 배치해 주고, 학생은 대각선 곱의 합이 x 계수가 되는지 확인해 빈칸만 채운다.
    ⑵ 는 x² 계수 4 의 분해가 1·4 와 2·2 두 갈래라 한 번 더 시도해야 하지만 도식이 갈래를 지정해 준다. 확인하기 ★1 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "x² 계수·상수항을 두 인수로 분해 → 대각선 곱의 합 = x 계수 확인 → (ax+b)(cx+d)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+1)(2x-3)$, $2$, $-3$, $-3$ ⑵ $(2x-1)(2x-3)$, $-2$, $-3$, $-6$'
  answer_source: "답지"
  figure: "crop:fig-90-03.png · crop:fig-90-03-2.png"
  latex: latex-bank/gn-m31/items/90-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 계수(2·3·4·6)와 상수항을 바꿀 수 있다. 제약: 도식에 이미 적힌 숫자가 답과 연동되므로 그림(fig-90-03 / fig-90-03-2)을 함께 다시 그리지 않으면 변형 불가. ⑴ 은 x² 계수가 소수(분해 한 갈래), ⑵ 는 합성수(두 갈래)라는 역할 분담을 유지."
    creative: "(1) 도식 없이 바로 인수분해시키면 90-04 골조(★1) (2) 빈칸을 x 계수 쪽에 두고 상수항을 되묻기(★2 · I-BW d1) (3) 대각선 곱의 합이 맞지 않는 잘못된 도식을 주고 틀린 곳을 찾게 하면 ★2(I-EQV d1)."
```

```yaml
- id: GN-M31-90-04
  page: 90
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $3x^2+7x-10$, $6x^2+11x+4$, $10x^2-3x-1$, $5x^2-36xy+7y^2$ 를 인수분해.
  category: "십자셈 직접 적용(4회 반복 · 분해 갈래 탐색 포함)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "acx²+(ad+bc)x+bd 의 인수분해(십자셈)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    90-03 에서 도식을 치운 판. ⑵ 6x²+11x+4 는 x² 계수 분해가 1·6, 2·3 두 갈래, 상수항도 1·4, 2·2 두 갈래라 시행착오가 실제 계산 부담이 된다(Mₖ 2).
    다만 어느 갈래를 고를지가 '전략 선택'이 아니라 전수 시도이므로 I-SC 는 아니다. 확인하기 ★1 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "x² 계수·상수항의 분해 갈래를 차례로 대입 → 대각선 곱의 합 = x 계수인 조합 채택 → (ax+b)(cx+d)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x-1)(3x+10)$ ⑵ $(2x+1)(3x+4)$ ⑶ $(2x-1)(5x+1)$ ⑷ $(x-7y)(5x-y)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/90-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(a, b, c, d) 네 정수를 먼저 정하고 전개해 문제식을 만든다. 제약: x² 계수가 소수면 갈래가 하나라 쉬워지고 합성수(6·12)면 시행착오가 늘어 체감 난이도가 올라간다 — 네 소문항에 소수·합성수를 섞는다. ⑷ 는 y 에 대한 동차식 구조를 유지."
    creative: "(1) 인수 하나를 주고 나머지를 묻기(92-c4 골조 · ★2) (2) 네 식의 인수 중 공통인 것 찾기(92-h3 골조 · ★2) (3) x² 계수·상수항을 문자 a 로 두고 인수분해 가능 조건을 묻기(Mₐ 상승 ★3)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-91-h1
  page: 91
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $x^2+7x+12$, $x^2+x-20$, $x^2-2x-24$, $x^2-17xy+72y^2$ 를 인수분해.
  category: "x²+(a+b)x+ab 공식의 직접 적용(계수 확대)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x²+(a+b)x+ab 의 인수분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 90-02 와 같고 상수항만 커졌다(24·72). 72 의 약수쌍은 여섯 개라 합이 맞는 쌍을 찾는 데 실제 탐색 부담이 있어 Mₖ 2.
    통찰 0 · M_total 5 라 v3.8 −1 후보이지만, 표·도식 안내가 없는 대표문제 자리이고 계수 탐색량이 확인하기보다 한 단계 위라 구역 출발점 ★2 를 유지했다. [분류 이슈] 드릴 성격만 보면 ★1 후보.
  tier: star_2
  mechanism_primary: "곱 = 상수항 · 합 = x 계수인 정수쌍 탐색 → (x+a)(x+b)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x+3)(x+4)$ ⑵ $(x-4)(x+5)$ ⑶ $(x+4)(x-6)$ ⑷ $(x-8y)(x-9y)$'
  answer_source: "본문 답(쪽 이미지)"
  figure: none
  latex: latex-bank/gn-m31/items/91-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항의 약수쌍 개수로 난이도를 조절한다(12 → 3쌍, 72 → 6쌍). 제약: 판별식 (x 계수)²−4(상수항)이 완전제곱수. ⑷ 처럼 두 근이 가까운 쌍(8, 9)은 탐색이 길어지므로 한 소문항만 배치."
    creative: "(1) 네 식 중 (x+4) 를 인수로 갖는 것을 모두 고르기(★2 · 92-h3 골조) (2) ⑷ 의 y 를 수로 바꿔 한 문자 식으로 낮추기(★1) (3) 상수항을 미지수로 두고 인수분해되는 자연수 조건을 묻기(★3 · I-BW d2)."
```

```yaml
- id: GN-M31-91-c1
  page: 91
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $x^2+5x-36$ 을 x 의 계수가 1 인 두 일차식의 곱으로 인수분해했을 때 두 일차식의 합.
  category: "인수분해 → 두 일차식을 더해 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해한 두 일차식의 합·차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (x+9)(x-4) 로 인수분해한 뒤 두 인수를 더하는 되묻기 한 겹. 더하는 순간 답이 일차식(2x+5)이 되는데 수로 답하려는 착각(T-표기)이 유일한 함정이다.
    통찰 0 · M_total 4 로 −1 후보이나 '인수분해 후 한 번 더 묻는' 층이 있어 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "곱 −36 · 합 5 인 정수쌍 → (x+9)(x-4) → 두 인수의 합 2x+5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2x+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/91-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(합, 곱) = (5, −36) 을 다른 정수쌍으로 교체. 제약: 합·곱 조건을 만족하는 정수쌍이 있어야 하고, 두 인수의 합은 항상 2x+(a+b) 이므로 답의 상수항이 x 계수와 같아진다는 구조를 알고 설계한다."
    creative: "(1) 합 대신 차를 묻기(순서 지정 필요 · ★2) (2) 두 일차식의 합을 주고 원래 이차식을 되묻기(★3 · I-BW d2) (3) x² 계수를 1 이 아닌 수로 올리면 95-02 골조가 되어 부호·계수 배치가 추가(★2)."
```

```yaml
- id: GN-M31-91-h2
  page: 91
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $3x^2-10x+8$, $15x^2+11x-12$, $20x^2-7x-6$, $9x^2+20xy+4y^2$ 를 인수분해.
  category: "십자셈 직접 적용(계수 확대 · 갈래 다수)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "acx²+(ad+bc)x+bd 의 인수분해(십자셈)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    90-04 와 같은 골조이나 계수가 15·20 으로 커져 분해 갈래가 각각 네 가지 이상이다. 시행착오 횟수가 늘어난 것이 유일한 차이이고 새 도구는 없다.
    스키마 지침상 계산량만 무거운 것은 ★ 상승 신호가 아니므로 구역 출발점 ★2 유지(통찰 0). [분류 이슈] 드릴 성격만 보면 ★1 후보.
  tier: star_2
  mechanism_primary: "x² 계수·상수항 분해 갈래 전수 시도 → 대각선 곱의 합 = x 계수 조합 채택 → (ax+b)(cx+d)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(x-2)(3x-4)$ ⑵ $(3x+4)(5x-3)$ ⑶ $(4x-3)(5x+2)$ ⑷ $(x+2y)(9x+2y)$'
  answer_source: "본문 답(쪽 이미지)"
  figure: none
  latex: latex-bank/gn-m31/items/91-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(a, b, c, d) 를 정해 전개하는 방식으로 만든다. 제약: 갈래 수 = (x² 계수 약수쌍 수)×(상수항 약수쌍 수) 이므로 15·20·24 처럼 약수가 많은 계수는 한두 소문항만. ⑷ 는 동차식(y² 항)을 유지하고 두 인수의 x 계수가 다르게(1과 9) 둔다."
    creative: "(1) 완전제곱식과 섞어 '완전제곱식이 아닌 것 고르기'로 바꾸기(★2 · I-MI d1) (2) 결과에서 한 인수만 가리고 되묻기(★2) (3) 계수 하나를 문자로 두고 인수분해 가능한 정수 조건을 묻기(★3 · I-BW d2)."
```

```yaml
- id: GN-M31-91-c2
  page: 91
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $6x^2-23x+21=(2x+A)(Bx+C)$ 일 때 정수 A, B, C 에 대한 $A+B+C$.
  category: "십자셈 인수분해 → 주어진 꼴에 맞춰 인수 배치 → 계수 비교"
  M: {s: 1, k: 2, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 결과와 계수 비교로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    6x²−23x+21 = (2x−3)(3x−7) 로 인수분해한 뒤, 주어진 꼴이 (2x+A) 로 고정돼 있으므로 x 계수 2 를 가진 인수를 A 쪽에 배치해야 한다(T-표기). 상수 A·C 가 음수라 합에서 부호를 놓치기 쉬운 것(T-부호)이 두 번째 함정.
    배치 결정이 통찰이라기보다 형식 맞추기라 절차형으로 두었다. 통찰 0 · M_total 6 → 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "십자셈으로 (2x-3)(3x-7) → 2x 를 가진 인수를 (2x+A) 에 대응 → A, B, C 읽어 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/91-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수 (2x−3)(3x−7) 의 네 계수를 바꿔 전개식을 새로 만든다. 제약: 문제에 고정된 인수 꼴(2x+A)의 x 계수가 실제 인수 중 하나와 일치해야 하고, 두 인수의 x 계수가 서로 달라야 배치가 한 가지로 정해진다(같으면 A·C 가 뒤바뀌어 답이 흔들린다)."
    creative: "(1) A·B·C 의 곱이나 A−B+C 를 묻기(★2) (2) 고정 꼴을 (Ax+3)(Bx+C) 처럼 상수 쪽으로 옮기기(★2) (3) A, B, C 가 정수라는 조건만 주고 가능한 (A,B,C) 를 모두 구하게 하면 배치 분기가 생겨 ★3(I-MI d2)."
```

```yaml
- id: GN-M31-92-h3
  page: 92
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    두 다항식 $x^2-3x-28$, $5x^2+17x-12$ 의 공통인 인수를 고르는 5지선다.
  category: "두 식을 각각 인수분해 → 인수 집합의 교집합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 다항식의 공통인 인수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도구는 앞의 둘(단순형 · 십자셈)을 한 번씩 쓰는 것뿐이고, 새로운 착안은 '공통 = 양쪽 인수 목록에 모두 있는 것' 이라는 정의 확인이다.
    선택지가 후보를 좁혀 주므로 각 선택지를 대입해 확인하는 우회로도 열려 있다(전략 갈래가 현저히 유리하지 않아 I-SC 불인정). 구역 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 식을 인수분해 → (x+4)(x-7) 와 (5x-3)(x+4) → 겹치는 인수 x+4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/92-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 인수 (x+4) 를 먼저 정하고 나머지 인수를 각각 곱해 두 식을 만든다. 제약: 두 식의 나머지 인수는 서로 달라야 하고, 오답 선택지는 두 식 중 한쪽에만 있는 인수와 부호만 바꾼 인수로 채워야 변별이 된다."
    creative: "(1) 공통 인수를 묻지 않고 두 식의 최대공약식·최소공배식을 묻기(★3 · I-EQV d1) (2) 한 식에 미지수를 넣어 공통 인수 조건으로 값을 구하게 하면 95-03 골조(★3) (3) 세 다항식의 공통 인수로 늘리기(★3)."
```

```yaml
- id: GN-M31-92-c3
  page: 92
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    두 다항식 $3x^2-8x-3$, $2x^2-x-15$ 의 공통인 인수를 고르는 5지선다.
  category: "두 식을 각각 십자셈으로 인수분해 → 교집합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 다항식의 공통인 인수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    92-h3 의 짝 문항인데 두 식 모두 x² 계수가 1 이 아니어서 십자셈을 두 번 돌린다. 선택지에 (2x-3)·(3x+1) 처럼 실제 인수이지만 공통이 아닌 것이 섞여 있어, 한쪽만 인수분해하고 고르면 틀린다.
    통찰 0 · M_total 6 · 구역 ★2 → ★2.
  tier: star_2
  mechanism_primary: "(3x+1)(x-3) 와 (2x+5)(x-3) 로 각각 인수분해 → 겹치는 인수 x-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/92-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 인수 (x−3) 을 고정하고 각각 (3x+1), (2x+5) 자리의 계수를 교체. 제약: 두 식의 비공통 인수는 반드시 선택지에 넣어 오답으로 쓰고, 공통 인수의 x 계수는 1 로 두면 92-h3 과 난이도가 같아지므로 한쪽은 2x·3x 꼴로 두는 편이 변별에 낫다."
    creative: "(1) 공통 인수가 없는 쌍을 섞어 '공통 인수를 갖지 않는 것' 고르기(★3 · I-VF d1 · 각 후보 기각 필요) (2) 공통 인수를 주고 계수를 되묻기(95-03 골조 ★3) (3) 서술형으로 두 식의 공통 인수와 그 근거를 쓰게 하기(★2)."
```

```yaml
- id: GN-M31-92-h4
  page: 92
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $x-1$ 이 $4x^2-ax+9$ 의 인수일 때 상수 a 의 값.
  category: "인수 조건 → 나머지 인수 미정계수 설정 → 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'x−1 이 인수' 를 '4x²−ax+9=(x−1)(4x+k) 로 놓을 수 있다'(또는 x=1 을 넣으면 0)로 옮기는 조건 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "인수가 주어진 이차식의 미지수의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중3 단계에는 인수정리가 없으므로 '인수이다' 를 학생이 쓸 수 있는 형태로 번역하는 단계가 실제 관문이다(I-EQV d1). 번역만 되면 상수항 비교로 k=−9, x 계수 비교로 a=13 이 한 줄이다.
    문자 a 가 들어가 Mₐ 2. 통찰 1개 · M_total 6 → 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "4x²-ax+9=(x-1)(4x+k) 로 놓기 → 상수항 비교로 k=-9 → x 계수 비교로 a=13"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$13$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/92-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 인수(x−1)와 x² 계수·상수항을 바꾼다. 제약: 상수항은 (주어진 인수의 상수항)×(나머지 인수의 상수항) 으로 분해돼야 하므로, 나머지 인수를 먼저 정하고 전개해 계수를 뽑는 것이 안전하다. 미지수는 x 계수 자리에 두는 것이 가장 단순하다."
    creative: "(1) 미지수를 상수항 자리로 옮기고 다른 인수까지 묻기(92-c4 골조 · ★2) (2) 두 식의 공통 인수 조건으로 미지수 둘을 구하게 하기(95-03 골조 · ★3) (3) a 가 자연수일 때 x−1 이 인수가 되는 모든 경우를 묻기(★3 · I-MI d2)."
```

```yaml
- id: GN-M31-92-c4
  page: 92
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ $10x^2+17x+a$ 가 $2x+5$ 를 인수로 가질 때 상수 a 와 일차식인 다른 한 인수.
  category: "인수 조건 → 나머지 인수 미정계수 설정 → x 계수 비교 → 상수항 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'2x+5 를 인수로 가진다' 를 '10x²+17x+a=(2x+5)(5x+b)'(x² 계수 10 에서 나머지 인수의 x 계수는 5 로 결정)로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "인수가 주어진 이차식의 미지수와 다른 한 인수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    92-h4 와 같은 번역 단계를 쓰되, 미지수가 상수항 자리에 있어 x 계수 비교(2b+25=17)로 b 를 먼저 구한 뒤 a=5b 를 계산하는 순서가 강제된다 — 순서를 뒤집으면 막힌다.
    소문항 ⑴⑵ 가 그 순서를 안내해 주므로 통찰 1개 · M_total 7 에서도 ★2 유지.
  tier: star_2
  mechanism_primary: "(2x+5)(5x+b) 로 놓기 → x 계수 비교 2b+25=17 → b=-4 → a=5b=-20 · 다른 인수 5x-4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-20$ ⑵ $5x-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/92-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수 (2x+5)(5x−4) 의 계수를 바꿔 전개식을 다시 만든다. 제약: x² 계수를 주어진 인수의 x 계수로 나눈 값이 정수여야 나머지 인수의 x 계수가 바로 정해진다. 미지수를 상수항에 두면 x 계수 비교가 선행 단계가 되고, x 계수에 두면 상수항 비교가 선행 단계가 된다."
    creative: "(1) 소문항을 없애고 '다른 한 인수' 만 묻기(안내 제거 → ★3) (2) a 가 자연수라는 조건을 붙여 가능한 인수를 모두 찾게 하기(★3 · I-VF d1) (3) 인수를 2x+5 대신 x−k 로 주고 k 까지 미지수로 두면 Mₐ 상승 ★3."
```

```yaml
- id: GN-M31-93-h5
  page: 93
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑶ x² 계수가 1 인 이차식을 한 사람은 x 의 계수를, 다른 한 사람은 상수항을 잘못 보고 각각 $(x+2)(x-6)$, $(x-2)(x+3)$ 으로 인수분해했을 때 처음 식의 상수항·x 계수와 바른 인수분해.
  category: "잘못 본 항목이 아닌 쪽만 채택 → 두 정보 결합해 원식 복원 → 인수분해"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'x 의 계수를 잘못 봄' 을 '상수항은 바르다' 로 뒤집어 읽는 조건 변환(잘못 본 쪽이 아니라 남은 쪽이 유효 정보)"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "서로 다른 두 사람에게서 얻은 상수항 −12 와 x 계수 1 을 한 식 x²+x−12 로 결합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "계수 또는 상수항을 잘못 보고 인수분해한 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 유형의 관문은 계산이 아니라 '잘못 본 쪽을 버린다' 는 조건 뒤집기다. 여기서 반대쪽을 채택하면 답이 통째로 바뀌므로 함정 비중이 크다(T-표기·T-부호).
    다만 ⑴⑵⑶ 소문항이 상수항 → x 계수 → 바른 인수분해 순서를 그대로 깔아 주어 학생이 골조를 스스로 세울 필요가 없다. 통찰 2개로 +1 후보이나 이 안내를 반영해 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "x 계수 오독 → 상수항 -12 채택 · 상수항 오독 → x 계수 1 채택 → x²+x-12 → (x-3)(x+4)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-12$ ⑵ $1$ ⑶ $(x-3)(x+4)$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/93-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원식 x²+x−12 를 먼저 정하고, 상수항이 같은 잘못 본 식((x+2)(x−6): 곱 −12)과 x 계수가 같은 잘못 본 식((x−2)(x+3): 합 1)을 역으로 만든다. 제약: 복원된 원식이 정수 범위에서 인수분해돼야 하고, 두 잘못 본 식도 각각 정수 인수분해가 되어야 한다."
    creative: "(1) 소문항을 없애고 바른 인수분해만 묻기(93-c5 골조 · ★3) (2) x² 계수를 1 이 아닌 수로 올리기(95-04 골조 · ★3) (3) 잘못 본 사람이 한 명이고 원식의 한 인수를 함께 주면 ★2 로 내려간다."
```

```yaml
- id: GN-M31-93-c5
  page: 93
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    x² 계수가 1 인 이차식을 한 사람은 x 의 계수를, 다른 한 사람은 상수항을 잘못 보고 각각 $(x+3)(x-8)$, $(x-2)(x+4)$ 로 인수분해했을 때 처음 이차식을 바르게 인수분해.
  category: "잘못 본 항목이 아닌 쪽만 채택 → 원식 복원 → 인수분해(한 번에)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'잘못 본 항목' 진술을 '남은 항목은 바르다' 로 뒤집어 각 식에서 살릴 정보를 고름"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상수항 −24 와 x 계수 2 를 x²+2x−24 로 결합한 뒤 다시 인수분해"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "계수 또는 상수항을 잘못 보고 인수분해한 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    93-h5 와 도구는 같지만 소문항 계단이 없어 '무엇을 살리고 무엇을 버릴지' 를 학생이 스스로 세워야 한다 — 이 유형에서 실제로 틀리는 지점이 바로 그 설계 단계다.
    통찰 2개(EQV d2 · CON d1) · M_total 6 · 안내 없음 → 구역 ★2 에서 +1 하여 ★3. [분류 이슈] 짝 문항(93-h5 ★2)보다 확인문제가 한 단 높아지는 배치.
  tier: star_3
  mechanism_primary: "상수항 -24 (x 계수 오독 쪽) · x 계수 2 (상수항 오독 쪽) → x²+2x-24 → (x-4)(x+6)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(x-4)(x+6)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/93-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원식을 먼저 정하고 두 오독 식을 역산한다. 제약: 원식·두 오독 식 모두 정수 인수분해가 되어야 하고, 두 오독 식의 상수항·x 계수가 서로 달라야(여기서는 −24 vs 2) 어느 쪽을 살렸는지가 답에 드러난다."
    creative: "(1) 잘못 본 쪽을 바꿔 답이 달라짐을 보이는 ㄱㄴㄷ 참·거짓(★3 · I-VF d1) (2) x² 계수를 2 로 올리기(95-04 골조 ★3) (3) 원식과 오독 식의 차를 묻기(★3 · 결합 단계 추가)."
```

```yaml
- id: GN-M31-93-h6
  page: 93
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    넓이가 $x^2$ 인 정사각형 2개, $x$ 인 직사각형 5개, $1$ 인 정사각형 2개를 빈틈없이 붙여 만든 큰 직사각형의 가로와 세로의 길이의 합.
  category: "타일 개수 → 넓이 다항식 → 인수분해 → 두 변의 길이 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "도형 배치를 대수식으로 옮김 — 조각 개수를 계수로 읽어 넓이 2x²+5x+2 를 세우고, 인수분해 결과를 다시 가로·세로 길이로 되읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "인수분해의 도형에의 활용 — 직사각형 타일 붙이기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산 자체는 2x²+5x+2=(2x+1)(x+2) 한 줄이고, 관문은 그림 ↔ 식 왕복(I-RT d2)이다. 조각 개수를 계수로 옮기는 전반부보다 '인수 두 개가 곧 두 변' 이라는 후반부 되읽기에서 막힌다.
    묻는 것이 넓이가 아니라 두 변의 합이라 마지막에 한 줄 더 붙는다. 통찰 1개(d2) · 구역 ★2 → ★2.
  tier: star_2
  mechanism_primary: "조각 개수 → 2x²+5x+2 → (2x+1)(x+2) → 가로·세로 → 합 3x+3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3x+3$'
  answer_source: "본문 답"
  figure: "crop:fig-93-h6.png"
  latex: latex-bank/gn-m31/items/93-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조각 개수 (2, 5, 2) 가 그대로 계수이므로 (a, b, c) 를 바꾸면 그림의 조각 수도 함께 바꿔야 한다. 제약: ax²+bx+c 가 정수 인수분해돼야 하고 세 개수 모두 1 이상이어야 그림이 성립한다. 조각 수가 많아지면(계수 6 이상) 그림이 장황해지므로 x² 조각은 3개 이하 권장."
    creative: "(1) 두 변의 합 대신 둘레를 묻기(93-c6 골조 · ★2) (2) 큰 직사각형의 한 변을 주고 필요한 조각 수를 되묻기(★3 · I-BW d2) (3) 조각 하나가 남거나 모자라게 만들어 '만들 수 없는 이유' 를 쓰게 하면 ★3(I-VF d1)."
```

```yaml
- id: GN-M31-93-c6
  page: 93
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    넓이가 $x^2$ 인 정사각형 1개, $x$ 인 직사각형 3개, $1$ 인 정사각형 2개를 빈틈없이 붙여 만든 큰 직사각형의 둘레의 길이.
  category: "타일 개수 → 넓이 다항식 → 인수분해 → 두 변 → 둘레"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "조각 개수를 계수로 읽어 x²+3x+2 를 세우고 인수 (x+1), (x+2) 를 두 변의 길이로 되읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "인수분해의 도형에의 활용 — 직사각형 타일 붙이기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    93-h6 의 짝 문항이고 x² 계수가 1 이라 인수분해는 더 쉽다. 대신 마지막에 합이 아니라 둘레를 물어 2(가로+세로) 로 두 배 하는 한 줄이 추가되는데, 이 두 배를 빠뜨리는 것이 이 문항의 주 실수(T-단위).
    통찰 1개(RT d2) · M_total 5 · 구역 ★2 → ★2.
  tier: star_2
  mechanism_primary: "조각 개수 → x²+3x+2 → (x+1)(x+2) → 둘레 2{(x+1)+(x+2)} = 4x+6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4x+6$'
  answer_source: "답지"
  figure: "crop:fig-93-c6.png"
  latex: latex-bank/gn-m31/items/93-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조각 수 (1, 3, 2) → x²+3x+2. 제약: x² 조각이 1개면 두 변의 x 계수가 모두 1 이라 둘레가 4x+상수 꼴로 깔끔하다. 조각 수를 바꾸면 그림(fig-93-c6)을 함께 수정해야 하고, 상수항은 두 변의 상수항 곱과 일치해야 한다."
    creative: "(1) 둘레를 주고 조각 수를 되묻기(★3 · I-BW d2) (2) 두 변의 차를 묻기(★2) (3) 직육면체 부피 x³+... 로 올리면 삼차 인수분해가 되어 중3 범위를 벗어난다 — 대신 x² 조각 2개 이상으로 93-h6 난이도(★2)."
```

### 계산력 강화하기

```yaml
- id: GN-M31-94-01
  page: 94
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ $5a^2-10ab$, $2ax+5bx-3cx$, $a(x+2)-7(x+2)$, $(x-3y)^2+(x+y)(3y-x)$ 를 인수분해.
  category: "공통인수 찾아 묶기(단항식 → 괄호 덩어리 → 부호 뒤집어 만든 공통인수)"
  M: {s: 1, k: 2, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통인수로 묶어 인수분해하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 단항식 공통인수, ⑶ 은 괄호 (x+2) 를 한 덩어리로 보는 연습, ⑷ 는 $3y-x=-(x-3y)$ 로 부호를 뒤집어야 공통인수가 보이는 판이다.
    ⑷ 의 부호 뒤집기(T-부호)와 묶은 뒤 괄호 안 정리(T-표기)가 함정이지만 앞 단원에서 이미 다룬 도구이고 구역이 드릴이라 ★1 유지(통찰 0).
  tier: star_1
  mechanism_primary: "각 항의 공통인수 확인(필요하면 부호를 뒤집어 같은 꼴로) → 묶어내고 괄호 안 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5a(a-2b)$ ⑵ $x(2a+5b-3c)$ ⑶ $(x+2)(a-7)$ ⑷ $-4y(x-3y)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/94-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴⑵ 의 계수·문자 수, ⑶ 의 괄호식, ⑷ 의 (x−3y) 자리를 자유 교체. 제약: ⑷ 는 두 괄호가 부호만 반대인 관계를 유지해야 공통인수가 생기고, 묶어낸 뒤 남는 괄호가 −4y 처럼 단항식이 되도록 계수를 맞추면 답이 깔끔하다."
    creative: "(1) 묶은 결과를 주고 원식을 되묻기(★1) (2) ⑷ 를 넓이 문제로 옮겨 도형 맥락 붙이기(★2 · I-RT d1) (3) 공통인수가 없는 식을 섞어 '공통인수로 묶을 수 없는 것' 고르기(★2 · I-VF d1)."
```

```yaml
- id: GN-M31-94-02
  page: 94
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑹ $x^2+16x+64$, $x^2-x+\frac14$, $9x^2+6xy+y^2$, $25x^2-20x+4$, $12x^2+36x+27$, $2x^2y-16xy+32y$ 를 인수분해.
  category: "완전제곱식 $a^2\\pm2ab+b^2=(a\\pm b)^2$ 판정·적용(공통인수 선행 포함)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식으로 인수분해하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    첫 항·끝 항을 제곱꼴로 보고 가운데 항이 두 밑의 곱의 2배인지 확인하는 한 단계 드릴. ⑸⑹ 은 공통인수(3, 2y)를 먼저 묶어야 완전제곱식이 드러나는 한 겹이 더 있다.
    ⑵ 의 분수 $\frac14$ 와 가운데 항의 부호가 계산 함정이지만 분기는 없다. 계산력 구역 ★1 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "(공통인수 있으면 먼저 묶기) → 양끝 항을 제곱꼴로 → 가운데 항 = 2×(두 밑의 곱) 확인 → (a±b)²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+8)^2$ ⑵ $\left(x-\dfrac{1}{2}\right)^2$ ⑶ $(3x+y)^2$ ⑷ $(5x-2)^2$ ⑸ $3(2x+3)^2$ ⑹ $2y(x-4)^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/94-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 밑 (a, b) 를 정하고 전개해 문제식을 만든다. 제약: 가운데 항은 반드시 2ab 여야 하며, 분수·문자·공통인수 선행 유형을 각각 한 소문항씩 배치하는 구성을 유지한다. 공통인수를 붙일 때는 묶은 뒤 남는 식이 완전제곱식이 되도록 계수를 제곱수 배로 맞춘다."
    creative: "(1) 가운데 항이나 끝 항을 비우고 완전제곱식이 되는 수를 묻기(★2 · I-BW d1) (2) 완전제곱식이 아닌 것 하나 고르기(★2 · I-VF d1) (3) $x^2+ax+9$ 가 완전제곱식이 되는 상수 a 를 모두 구하기(부호 두 갈래 · ★2 · I-MI d1)."
```

```yaml
- id: GN-M31-94-03
  page: 94
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ $25x^2-16y^2$, $9a^2-\frac{1}{49}b^2$, $54x^2-24y^2$, $81-x^4$ 를 인수분해.
  category: "합과 차의 곱 $a^2-b^2=(a+b)(a-b)$ (공통인수 선행 · 반복 적용 포함)"
  M: {s: 1, k: 2, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합과 차의 곱(a²−b²)으로 인수분해하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 공식 한 줄, ⑶ 은 공통인수 6 을 먼저 묶어야 제곱꼴이 보이고, ⑷ 는 한 번 인수분해한 $(9+x^2)(9-x^2)$ 에서 멈추지 않고 뒤쪽을 한 번 더 분해해야 한다 — '끝까지 인수분해' 가 이 문항의 유일한 함정(T-표기)이다.
    도구는 하나뿐이라 계산력 구역 ★1 유지(통찰 0).
  tier: star_1
  mechanism_primary: "(공통인수 먼저) → 두 항을 제곱꼴로 → (a+b)(a-b) → 더 분해되는 인수가 남았는지 확인"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(5x+4y)(5x-4y)$ ⑵ $\left(3a+\dfrac{1}{7}b\right)\left(3a-\dfrac{1}{7}b\right)$ ⑶ $6(3x+2y)(3x-2y)$ ⑷ $(9+x^2)(3+x)(3-x)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/94-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱수 계수(25·16·9·81)와 분수 제곱($\\frac{1}{49}$)을 교체. 제약: 두 항 모두 완전제곱이어야 하고, ⑶ 처럼 공통인수를 붙일 때는 묶은 뒤 남는 계수가 제곱수여야 한다. ⑷ 는 네제곱 항을 유지해야 반복 적용 함정이 살아난다."
    creative: "(1) $a^2+b^2$ 를 섞어 '인수분해되지 않는 것' 고르기(★2 · I-VF d1) (2) $99^2-1$ 같은 수의 계산에 공식을 쓰게 하기(★2 · I-RT d1) (3) $x^4-1$ 을 끝까지 인수분해하고 인수의 개수를 묻기(★2)."
```

```yaml
- id: GN-M31-94-04
  page: 94
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑻ $x^2+5x+4$ 부터 $2x^2y-2xy-12y$ 까지 여덟 식을 인수분해(⑺⑻ 은 공통인수 선행).
  category: "x²+(a+b)x+ab 대량 반복(문자 2개·공통인수 선행 포함)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x²+(a+b)x+ab 의 인수분해(공통인수 선행 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 공식을 여덟 번 적용하는 숙달용 세트. 부호 조합(++ / +− / −+ / −−)이 고르게 섞여 있고 ⑸⑹ 은 y 를 상수처럼 다루는 동차식, ⑺⑻ 은 공통인수(3, 2y)를 먼저 묶는 판이다.
    새 도구·분기 없음. 계산력 구역 ★1 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "공통인수 있으면 먼저 묶기 → 곱 = 상수항 · 합 = x 계수인 정수쌍 → (x+a)(x+b)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+1)(x+4)$ ⑵ $(x-2)(x-7)$ ⑶ $(x-1)(x+7)$ ⑷ $(x+3)(x-5)$ ⑸ $(x-3y)(x+7y)$ ⑹ $(x-2y)(x-8y)$ ⑺ $3(x+2)(x+3)$ ⑻ $2y(x+2)(x-3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/94-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "여덟 소문항의 (합, 곱)을 교체하되 부호 조합 4종과 문자 2개 항 2문, 공통인수 선행 2문이라는 구성 비율을 유지한다. 제약: 모든 소문항이 정수 인수분해돼야 하고, 공통인수를 묶은 뒤 남는 식도 인수분해돼야 한다."
    creative: "(1) 여덟 식의 인수 중 공통인 것을 찾게 하기(★2) (2) 인수분해한 결과의 두 상수항 합·곱을 묻기(★2) (3) 공통인수를 묶지 않고 바로 인수분해하려다 막히는 식(⑻)만 골라 이유를 쓰게 하는 서술형(★2)."
```

```yaml
- id: GN-M31-94-05
  page: 94
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑻ $3x^2+11x+6$ 부터 $6x^2-4xy-10y^2$ 까지 여덟 식을 인수분해(⑺⑻ 은 공통인수 선행).
  category: "십자셈 대량 반복(문자 2개·공통인수 선행 포함)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "acx²+(ad+bc)x+bd 의 인수분해(십자셈 · 공통인수 선행 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 범위에서 분량이 가장 큰 세트다. ⑺ 10x²−35x+25 는 5 를, ⑻ 6x²−4xy−10y² 는 2 를 먼저 묶지 않으면 십자셈 갈래가 불필요하게 늘어난다 — '공통인수 먼저' 습관이 실제로 시간을 가르는 지점.
    다만 새 도구는 없고 시행착오 양만 많으므로(스키마상 계산 마찰은 ★ 상승 신호 아님) 계산력 구역 ★1 유지. [분류 이슈] 분량만 보면 ★2 후보.
  tier: star_1
  mechanism_primary: "공통인수 먼저 묶기 → 십자셈으로 x² 계수·상수항 분해 → 대각선 곱의 합 = x 계수 조합 채택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x+3)(3x+2)$ ⑵ $(x-1)(5x-3)$ ⑶ $(2x-1)(3x+4)$ ⑷ $(3x+1)(3x-2)$ ⑸ $(3x+4y)(5x+2y)$ ⑹ $(x-2y)(2x+11y)$ ⑺ $5(x-1)(2x-5)$ ⑻ $2(x+y)(3x-5y)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/94-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항을 (ax+b)(cx+d) 에서 전개해 만든다. 제약: x² 계수가 합성수(6·15·20)면 갈래가 늘어 시간이 급증하므로 소수 계수와 섞는다. ⑺⑻ 은 공통인수를 묶은 뒤 남는 식이 반드시 인수분해돼야 하고, ⑻ 은 동차식이라 y 차수를 맞춰야 한다."
    creative: "(1) 여덟 식 중 (2x−1) 을 인수로 갖는 것 모두 고르기(★2) (2) 인수분해가 되지 않는 식 하나를 섞어 찾게 하기(★2 · I-VF d1) (3) x² 계수와 상수항만 주고 인수분해 가능한 x 계수를 모두 구하게 하기(★3 · I-MI d2)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-95-01
  page: 95
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $x^2+4x-45=(x+a)(x+b)$ ($a>b$) 일 때 $a-b$ 의 값(5지선다).
  category: "인수분해 → a>b 조건으로 두 상수 배정 → 차 계산"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 결과의 계수로 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱 −45 · 합 4 인 정수쌍 (9, −5) 를 찾는 한 단계에, $a>b$ 로 어느 쪽이 9 인지 정하는 배정이 얹힌다. 배정을 뒤집으면 부호가 반대로 나오는 것(T-부호)이 유일한 함정이다.
    통찰 0 · M_total 5 로 −1 이 적용되어 시험 구역 출발점 ★2~3 에서 ★2.
  tier: star_2
  mechanism_primary: "곱 -45 · 합 4 인 정수쌍 (9, -5) → a>b 로 a=9, b=-5 → a-b=14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/95-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(합, 곱) 을 다른 정수쌍으로 교체. 제약: 두 수의 부호가 달라야 $a-b$ 가 크게 벌어져 선택지 변별이 되고, $a>b$ 조건이 실제로 작동하려면 두 수가 달라야 한다. 선택지는 $a-b$ 근처 연속 정수로 채운다."
    creative: "(1) $a-b$ 대신 $ab$ 나 $a^2+b^2$ 를 묻기(★2) (2) $a>b$ 조건을 빼고 가능한 $a-b$ 를 모두 구하게 하면 두 갈래(★2 · I-MI d1) (3) 상수항을 미지수로 두고 $a-b=14$ 가 되도록 하는 값을 되묻기(★3 · I-BW d2)."
```

```yaml
- id: GN-M31-95-02
  page: 95
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $3x^2-26x+16$ 을 x 의 계수가 자연수이고 상수항이 정수인 두 일차식의 곱으로 인수분해했을 때 두 일차식의 합.
  category: "십자셈 인수분해 → 계수 부호 조건 확인 → 두 인수의 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해한 두 일차식의 합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    91-c1 의 x² 계수를 3 으로 올린 판. 상수항 16 의 약수쌍이 많고 x 계수도 −26 으로 커서 십자셈 시행착오가 길다.
    'x 의 계수가 자연수' 조건은 $-(x-8)\cdot-(3x-2)$ 같은 부호 뒤집힌 표현을 배제하는 장치이고(T-부호), 답이 수가 아니라 일차식이라는 점(T-표기)이 두 번째 함정. 통찰 0 · 시험 구역 → ★2.
  tier: star_2
  mechanism_primary: "십자셈으로 (x-8)(3x-2) → x 계수 자연수 조건 확인 → 두 인수의 합 4x-10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4x-10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/95-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수 (x−8)(3x−2) 의 계수를 바꿔 전개식을 만든다. 제약: 두 인수의 x 계수 합·상수항 합이 곧 답이므로 답이 깔끔한 일차식이 되도록 설계하고, x² 계수는 소수(3·5)로 두면 갈래가 하나라 풀이가 막히지 않는다."
    creative: "(1) 두 일차식의 차를 묻기(순서 지정 필요 · ★3) (2) 합을 주고 원래 이차식을 되묻기(★3 · I-BW d2) (3) 상수항을 미지수로 두고 인수분해 가능한 정수를 모두 구하게 하기(★3 · I-MI d2)."
```

```yaml
- id: GN-M31-95-03
  page: 95
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $x-2$ 가 $x^2-ax+2$, $2x^2-7x+b$ 의 공통인 인수일 때 상수 a, b 에 대한 $a+b$.
  category: "공통 인수 조건 → 두 식 각각 미정계수 꼴로 놓고 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'x−2 가 두 식의 공통 인수' 를 '각 식을 (x−2)(…) 로 놓을 수 있다'(또는 x=2 를 넣으면 둘 다 0)로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통인 인수 조건으로 미지수의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    92-h4 의 번역(인수 → 미정계수 꼴)을 두 식에 한 번씩 반복한다. 첫 식은 상수항 2 에서 나머지 인수가 (x−1) 로 바로 정해지고, 둘째 식은 x² 계수 2 에서 (2x+k) 로 놓고 x 계수 비교를 한다.
    반복일 뿐 새 착안이 없어 +1 근거가 약하다. 통찰 1개(d1) · M_total 7 · 시험 구역 → ★2.
  tier: star_2
  mechanism_primary: "x²-ax+2=(x-2)(x-1) 로 a=3 · 2x²-7x+b=(x-2)(2x-3) 으로 b=6 → a+b=9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/95-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통 인수 (x−2) 와 각 식의 나머지 인수를 정해 전개한다. 제약: 미지수는 서로 다른 자리(한 식은 x 계수, 다른 식은 상수항)에 두어야 같은 계산을 두 번 반복하지 않게 되고, 두 번째 식의 x² 계수는 나머지 인수의 x 계수와 곱해 맞아떨어져야 한다."
    creative: "(1) 공통 인수를 감추고 '두 식이 공통 인수를 가질 때 a, b 사이의 관계식' 을 묻기(★4 · I-CON d2) (2) 두 식의 다른 인수의 곱을 묻기(★3) (3) a, b 가 자연수라는 조건으로 가능한 공통 인수를 모두 찾게 하기(★4 · I-VF d2)."
```

```yaml
- id: GN-M31-95-04
  page: 95
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    x² 계수가 2 인 이차식을 한 사람은 x 의 계수를, 다른 한 사람은 상수항을 잘못 보고 각각 $2(x-4)(x+6)$, $2(x+2)(x-7)$ 로 인수분해했을 때 바른 인수분해(5지선다).
  category: "잘못 본 항목이 아닌 쪽 채택 → x² 계수 2 를 포함해 원식 복원 → 인수분해"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'잘못 본 항목' 을 '남은 항목은 바르다' 로 뒤집어 각 식에서 살릴 정보를 고름"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상수항 −48 과 x 계수 −10 을 2x²−10x−48 로 결합한 뒤 공통인수 2 를 묶어 다시 인수분해"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "계수 또는 상수항을 잘못 보고 인수분해한 경우(x² 의 계수가 1 이 아닌 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    93-c5 골조에 x² 계수 2 가 얹혔다. 괄호 앞의 2 를 곱하지 않은 채 상수항을 −24, x 계수를 −5 로 읽으면 그대로 틀리는데, 선택지가 그 오답을 품고 있어 함정이 실제로 작동한다(T-단위·T-표기).
    안내 소문항 없음 · 통찰 2개 · M_total 7 → 시험 구역 ★2~3 에서 ★3.
  tier: star_3
  mechanism_primary: "상수항 -48 · x 계수 -10 채택 → 2x²-10x-48 → 2(x²-5x-24) → 2(x+3)(x-8)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/95-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원식 2(x+3)(x−8) 을 먼저 정하고 두 오독 식을 역산한다. 제약: 공통인수(여기서는 2)를 괄호 밖에 둔 표기를 유지해야 '2 를 곱하는 것을 잊는' 함정이 살아난다. 오답 선택지에는 2 를 빠뜨렸을 때 나오는 식을 반드시 넣는다."
    creative: "(1) x² 계수를 3·4 로 올려 나눗셈이 한 번 더 들어가게 하기(★3) (2) 두 사람이 잘못 본 항목을 밝히지 않고 결과만 주어 어느 쪽이 무엇을 잘못 봤는지 함께 묻기(★4 · I-VF d2) (3) 바른 식의 한 인수만 묻기(★3)."
```

```yaml
- id: GN-M31-95-05
  page: 95
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    밑변의 길이가 $3x-1$ 인 삼각형의 넓이가 $9x^2+9x-4$ 일 때 높이.
  category: "삼각형 넓이 공식 역이용 → 넓이식을 밑변이 인수가 되도록 인수분해 → 약분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'넓이 = ½×밑변×높이' 를 '9x²+9x−4 가 (3x−1) 을 인수로 가져야 한다' 로 옮겨, 십자셈의 목표 인수를 미리 고정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "인수분해의 도형에의 활용 — 넓이에서 변의 길이 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    십자셈을 맹목적으로 돌리는 대신 밑변 (3x−1) 이 인수여야 한다는 점을 먼저 알아채면 나머지 인수 (3x+4) 가 한 번에 나온다 — 여기가 이 문항의 관문이다.
    마지막에 $\frac12$ 때문에 2 를 곱해야 하는데(높이 = 2×넓이÷밑변) 이를 빠뜨리면 $3x+4$ 로 답하게 된다(T-단위). 통찰 1개(d2) · M_total 7 · 시험 구역 → ★3.
  tier: star_3
  mechanism_primary: "9x²+9x-4=(3x-1)(3x+4) → 높이 = 2×넓이÷밑변 = 2(3x+4) = 6x+8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6x+8$'
  answer_source: "답지"
  figure: "crop:fig-95-05.png"
  latex: latex-bank/gn-m31/items/95-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑변 (3x−1) 과 높이의 절반에 해당하는 인수 (3x+4) 를 정하고 곱해 넓이식을 만든다. 제약: 넓이식은 반드시 밑변을 인수로 가져야 하고, 높이가 정수 계수 일차식이 되려면 넓이식이 2×(밑변)×(일차식) 꼴이어야 한다 — 삼각형이면 답이 두 배가 된다는 점을 계수 설계에 반영한다."
    creative: "(1) 도형을 직사각형·평행사변형으로 바꾸면 2 배 함정이 사라져 ★2 (2) 높이를 주고 밑변을 묻기(같은 골조 ★3) (3) 넓이와 둘레를 함께 주고 두 변을 구하게 하면 조건 통합이 생겨 ★4(I-CON d2)."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 9 · ★2 14 · ★3 3 · ★4 0 · ★5 0
- 통찰형 9 · 절차형 17 · premium 0 · ★4 이상 없음(단원 자체가 공식 숙달 단원)
- 통찰 유형 분포(총 12개 라벨): I-EQV 7(92-h4 · 92-c4 · 93-h5 · 93-c5 · 95-03 · 95-04 · 95-05) · I-CON 3(93-h5 · 93-c5 · 95-04) · I-RT 2(93-h6 · 93-c6). I-SC · I-VF · I-SYM · I-XU 는 0 — 이 범위에서 ★4~5 를 만들 재료가 없다는 뜻이며, 변형 때는 `variation_notes.creative` 의 「모두 찾기 · 기각」 계열 제안이 I-VF 를 끌어오는 통로다.
- type_hint 상위 5: 「x²+(a+b)x+ab 의 인수분해」 4(90-01 · 90-02 · 91-h1 · 94-04) · 「acx²+(ad+bc)x+bd 의 인수분해(십자셈)」 4(90-03 · 90-04 · 91-h2 · 94-05) · 「계수/상수항을 잘못 보고 인수분해」 3(93-h5 · 93-c5 · 95-04) · 「인수분해의 도형에의 활용」 3(93-h6 · 93-c6 · 95-05) · 「두 다항식의 공통인 인수」 3(92-h3 · 92-c3 · 95-03)
- M_total 분포: 4 → 3문 · 5 → 10문 · 6 → 7문 · 7 → 6문 (Mₛ 은 대부분 1~2, 부담은 Mₖ·Mₜ 에 몰려 있음)
- 그림: 5문(`crop:fig-90-01.png` · `crop:fig-90-03.png`+`crop:fig-90-03-2.png` · `crop:fig-93-h6.png` · `crop:fig-93-c6.png` · `crop:fig-95-05.png`). 타일 문항 2개는 조각 개수가 곧 계수이므로 숫자 변형 시 그림을 반드시 다시 그려야 한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-91-h1 | 핵심문제 구역이라 ★2 로 두었으나 골조는 확인하기 90-02 와 동일한 드릴(통찰 0 · M_total 5) — v3.8 −1 규칙만 따르면 ★1 | ★1 / ★2 |
| GN-M31-91-h2 | 같은 사유(90-04 십자셈에 계수만 확대). 계산 마찰은 ★ 상승 신호가 아니라는 스키마 §2.11 과 구역 신호가 충돌 | ★1 / ★2 |
| GN-M31-93-c5 | 소문항 계단이 없다는 이유로 짝 핵심문제(93-h5 ★2)보다 확인문제를 ★3 으로 올림 — 카탈로그를 만들 때 「안내 소문항 유무」를 유형 분리 축으로 쓸지 결정 필요 | ★2 / ★3 |
| GN-M31-94-05 | 계산력 강화하기 구역 ★1 이나 십자셈 8문 + 공통인수 선행 2문으로 이 범위에서 분량이 가장 큼 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: ⑴ 「x²+(a+b)x+ab 의 인수분해」와 ⑵ 「acx²+(ad+bc)x+bd(십자셈)」는 base ★ 가 달라야 한다(후자는 분해 갈래 탐색이 추가). ⑶ 「계수/상수항을 잘못 보고 인수분해」는 조건 뒤집기+결합이라는 통찰 골조가 뚜렷해 별도 유형(base ★2~3, x² 계수가 1 이 아니면 ★3). ⑷ 「인수분해의 도형에의 활용」은 도형↔대수 전환(I-RT)이 고정 재료라 별도 유형(base ★2, 삼각형처럼 계수 함정이 붙으면 ★3).
- **통합해도 될 유형**: 「인수가 주어진 이차식의 미지수 구하기」(92-h4 · 92-c4)와 「공통인 인수 조건으로 미지수 구하기」(95-03)는 번역 단계(I-EQV d1)가 같으므로 한 유형의 난이도 층으로 묶는 편이 낫다. 「두 다항식의 공통인 인수 고르기」(92-h3 · 92-c3)도 같은 뿌리이나 미지수가 없어 base ★ 한 단 아래.
- 「인수분해한 두 일차식의 합」(91-c1 · 95-02)은 독립 유형이라기보다 인수분해 유형에 붙는 **되묻기 변형**이므로, 카탈로그에서는 별도 유형 대신 변형 슬롯으로 관리하는 편이 낫다.
- 계산력 강화하기 5문(94-01~94-05)은 앞 단원(09-1 공통인수·완전제곱·합차)의 도구까지 함께 도는 복습 세트라, 카탈로그 매핑 시 한 유형이 아니라 4~5개 기본 유형에 분산 배정된다.

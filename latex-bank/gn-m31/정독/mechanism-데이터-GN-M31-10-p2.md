---
name: mechanism-데이터-GN-M31-10-p2
description: 개념원리 중학 3-1 10 인수분해 공식의 응용(2/2 · 중단원 마무리하기 STEP 1~3 · 서술형 대비) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 10 인수분해 공식의 응용
  unit_code: "10"
  part: "2/2"
  extract_range: "102~107쪽 · 102-01~107-u6"
  total_problems: 32
  unit_total: 55
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 10 인수분해 공식의 응용 (2/2) 정독 데이터 (v1.0)

이 파일은 10단원의 뒷부분, 즉 **중단원 마무리하기 STEP 1 기본 문제(12문) · STEP 2 발전 문제(9문) · STEP 3 실력 UP(3문) · 서술형 대비 문제(8문)** 32문항을 다룬다(102~107쪽). 앞부분(개념원리 확인하기 · 계산력 강화하기 · 핵심문제 익히기 · 이런 문제가 시험에 나온다)은 10-p1 에 있다.

개념원리 중학은 문항별 난이도 표시(하·중·상)가 없고 **구역(section)이 난이도 층**이다. 그래서 ★ 출발점은 구역에서 잡는다 — STEP 1 → ★2 · STEP 2 → ★3 · STEP 3 실력 UP → ★4 · 서술형 대비 → ★3. 태그는 「꼭나와」(빈출 표시 · ★ 가산 없음) 하나뿐이다. 출발점에서 M_total 과 통찰 라벨로 ±1 조정했다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 단원 성격상 골조는 「어떤 인수분해 공식을 어떤 순서로 꺼내는가」와 「무엇을 한 덩어리로 묶어 보는가」로 거의 전부 설명된다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M31-102-01
  page: 102
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    4a^2b-9ab 와 ab(4a-9) 를 오가는 두 과정(㉠ 인수분해 · ㉡ 전개)에 대한 설명 중 옳지 않은 것 고르기. 5지선다.
  category: "인수분해·전개의 뜻 → 인수의 정의 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해의 뜻과 인수 · 전개와의 관계"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    단원 첫머리 용어 확인. 항(4a^2b, -9ab)과 인수(ab, 4a-9)를 구별할 수 있으면 ⑤ 가 바로 걸린다.
    식 변형 단계가 없고 통찰 0 · M_total 4 → STEP1 출발점 ★2 에서 -1 하여 ★1.
  tier: star_1
  mechanism_primary: "인수 = 곱으로 나타낸 각 식 → 항은 인수가 아님 → ⑤ 판정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/102-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통인수 꼴의 계수(4a^2b-9ab → 6x^2y-15xy 등)를 바꿔도 골조가 그대로다. 제약: 공통인수가 단항식으로 한 번에 보이는 수준을 유지하고, 오답 선택지가 '항을 인수라고 부르는' 형태여야 한다."
    creative: "(1) 옳은 것을 고르게 뒤집기(★1 유지) (2) 인수를 모두 나열하게 하면(1, ab, 4a-9, ab(4a-9)) 빠짐없이 세는 부담이 생겨 ★2 (3) 전개와 인수분해가 서로 역과정임을 식으로 설명하는 서술형으로 바꾸면 ★2."
```

```yaml
- id: GN-M31-102-02
  page: 102
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    다섯 개의 이차식 중 완전제곱식인 것을 모두 고르기(정답 2개). 분수 계수·두 문자·공통인수가 섞여 있다.
  category: "완전제곱식 판별 → 공통인수를 묶은 뒤 (중간항)=2×(양 끝 제곱근의 곱) 확인"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식 판별과 완전제곱식이 될 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 개를 모두 2ab 조건으로 검사해야 하고, ⑤ 는 공통인수 3 을 먼저 묶어야 (a-2b)^2 가 보인다(T-표기 함정).
    ③ 의 분수 계수도 같은 함정. 통찰 0 · M_total 5 지만 전수 판정 + 공통인수 함정이 -1 을 상쇄해 STEP1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "공통인수 묶기 → 양 끝 항의 제곱근 → 중간항이 2ab 인지 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②, ⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/102-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 중간항 계수만 바꾸면 정답 개수를 조절할 수 있다(x^2-12x+36 ↔ x^2-12x+35). 제약: 완전제곱식이 되려면 양 끝 항이 모두 제곱수(또는 제곱식)여야 하고, 공통인수형 선택지는 묶은 뒤 완전제곱식이어야 한다."
    creative: "(1) '완전제곱식이 되도록 상수항/중간항 계수를 정하라'로 뒤집으면 미지수 결정이 들어가 ★2 (2) 상수항이 ▢ 인 항목을 섞어 가능한 값을 모두 구하게 하면 부호 두 갈래(I-MI) 로 ★3 (3) 근호 안이 완전제곱식인지 묻는 형태로 옮기면 |A| 부호 판정이 붙어 ★3."
```

```yaml
- id: GN-M31-102-03
  page: 102
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    -80x^2+45y^2 = a(bx+cy)(bx-cy) (b>0, c>0, 정수)일 때 abc 의 값 구하기.
  category: "음수 공통인수 묶기 → 제곱의 차 인수분해 → 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통인수를 묶은 뒤 a^2-b^2 로 인수분해하고 계수 비교하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -5 를 먼저 묶어야 16x^2-9y^2 라는 제곱의 차가 드러난다. 부호를 +5 로 묶으면 (3y+4x)(3y-4x) 가 되어
    b>0, c>0 조건과 어긋나므로 T-부호 함정이 실질적이다. 문자 계수 3개를 다루므로 Mₐ=2. STEP1 ★2 유지.
  mechanism_primary: "-5 를 묶어 -5(16x^2-9y^2) → -5(4x+3y)(4x-3y) → a=-5, b=4, c=3 → abc"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/102-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통인수와 두 제곱수 조합(-80, 45 → -12, 27 / -18, 50 등)을 바꿀 수 있다. 제약: 공통인수를 묶은 뒤 남는 두 항이 모두 제곱수여야 하고, b>0·c>0 을 강제하려면 공통인수가 음수여야 의미가 있다."
    creative: "(1) 묻는 값을 a+b+c 로 바꾸기(★2 유지) (2) 조건 b>0, c>0 을 빼고 가능한 abc 를 모두 구하게 하면 부호 갈래가 생겨 ★3(I-MI) (3) 제곱의 차를 두 번 써야 하는 4차식(-80x^4+45y^4 꼴은 안 되므로 x^4-16 류)으로 바꾸면 ★3."
```

```yaml
- id: GN-M31-102-04
  page: 102
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    (x-4)(x-7)+2 를 x 의 계수가 1 인 두 일차식의 곱으로 인수분해했을 때, 두 일차식의 합 구하기. 5지선다.
  category: "곱한 꼴을 전개해 정리 → 이차식 인수분해 → 두 인수의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱의 꼴을 전개한 뒤 다시 인수분해하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이미 곱의 꼴이라 손대지 않으려는 학생이 걸린다. 전개해 x^2-11x+30 으로 정리해야 (x-5)(x-6) 이 보인다.
    마지막에 곱이 아니라 합을 묻는 것도 T-표기 함정. 전개→재인수분해 전환이 있어 STEP1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "전개해 x^2-11x+30 → (x-5)(x-6) → 두 일차식의 합 2x-11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/102-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식의 상수항과 더하는 수((x-4)(x-7)+2 → (x-3)(x-8)+6 등)를 바꿀 수 있다. 제약: 전개해 정리한 이차식이 정수 계수로 다시 인수분해돼야 하고(상수항이 두 정수의 곱), 선택지가 x 계수 2 인 일차식이 되도록 합을 맞춘다."
    creative: "(1) 두 일차식의 차·곱을 묻기(★2 유지) (2) 더하는 수를 미지수 k 로 두고 인수분해되도록 하는 k 를 모두 구하게 하면 정수쌍 분기로 ★3(I-MI) (3) 완전제곱식이 되도록 하는 k 로 바꾸면 판별 조건이 들어가 ★3."
```

```yaml
- id: GN-M31-102-05
  page: 102
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    6x^2+x-12 = (2x+a)(bx+c) 일 때 정수 a, b, c 에 대하여 a+b+c 구하기.
  category: "acx^2+(ad+bc)x+bd 꼴 인수분해 → 주어진 틀과 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^2 의 계수가 1 이 아닌 이차식의 인수분해와 계수 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    6x^2+x-12=(2x+3)(3x-4). 틀이 (2x+a) 로 고정돼 있어 6=2b 에서 b=3 이 먼저 정해지고 나머지가 따라온다.
    십자 곱셈 한 번 + 대응 한 번. 통찰 0 · M_total 5 지만 STEP1 의 표준 ★2 유형이라 출발점 유지.
  tier: star_2
  mechanism_primary: "십자 곱셈으로 (2x+3)(3x-4) → 틀과 대응해 a=3, b=3, c=-4 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/102-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "6x^2+x-12 의 세 계수를 십자 곱셈이 되는 다른 조합(6x^2-7x-3, 10x^2+x-3 등)으로 바꿀 수 있다. 제약: 주어진 틀의 첫 인수(2x+a)의 x 계수가 이차항 계수를 나눠야 하고, 정수 a, b, c 가 유일하게 정해져야 한다."
    creative: "(1) abc 나 a-b+c 를 묻기(★2 유지) (2) 틀을 (ax+b)(cx+d) 로 느슨하게 주면 정수쌍 분기가 생겨 ★3 (3) 두 다항식이 공통인수를 갖도록 미지수를 결정하는 형태로 옮기면 ★3(104-16 골조)."
```

```yaml
- id: GN-M31-102-06
  page: 102
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    보기 ㄱ~ㄹ 의 인수분해 결과 중 옳은 것을 모두 고르기. 완전제곱식·제곱의 차·x^2+(a+b)x+ab·두 문자 이차식이 하나씩.
  category: "네 공식의 결과를 각각 검증(전개해 되돌리기)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 공식 4종의 결과 판별하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    단원 공식 네 종류를 한 문항에서 점검한다. ㄴ 은 1-25x^2=(1+5x)(1-5x) 인데 부호를 뒤집어 놓아 T-부호 함정,
    ㄷ 은 합과 곱이 맞지 않는다. 각 보기를 전개해 되돌리면 끝나므로 통찰 0. 전수 판정 4건 → STEP1 ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기를 전개해 원식과 대조 → ㄱ, ㄹ 만 일치"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/102-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수를 바꿔 옳은 보기의 개수를 조절한다. 제약: 공식 4종(완전제곱·제곱의 차·x^2+(a+b)x+ab·acx^2+(ad+bc)x+bd)이 한 번씩 등장하도록 유지하고, 틀린 보기는 부호나 합·곱 중 한 군데만 어긋나게 한다."
    creative: "(1) 틀린 보기를 바르게 고치는 서술형으로 바꾸면 ★2~3 (2) 보기마다 사용한 공식 이름을 짝짓게 하면 ★1 (3) 두 문자 보기를 늘려 ㄹ 형태를 세 개 두면 십자 곱셈 부담이 커져 ★3."
```

```yaml
- id: GN-M31-103-07
  page: 103
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    10x^2+axy-12y^2 이 2x+3y 로 나누어떨어질 때 상수 a 의 값 구하기.
  category: "나누어떨어진다 = 인수이다 → 나머지 인수를 양 끝 항에서 결정 → 가운데 항 비교"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "어떤 일차식으로 나누어떨어질 조건(인수 판정)에서 미지 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2x+3y 가 인수이므로 나머지 인수는 10x^2 ÷ 2x = 5x, -12y^2 ÷ 3y = -4y 에서 5x-4y 로 정해진다.
    전개해 xy 항을 비교하면 a=7. '나누어떨어진다 → 인수' 번역은 이 단원의 표준 어법이라 통찰로 세지 않았다. STEP1 ★2 유지.
  tier: star_2
  mechanism_primary: "(2x+3y)(5x-4y) 로 두고 전개 → xy 계수 비교 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/103-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항·상수항 계수와 주어진 인수(2x+3y → 3x-2y 등)를 바꿀 수 있다. 제약: 주어진 인수의 두 계수가 각각 x^2 계수와 y^2 계수를 나눠떨어지게 해야 나머지 인수가 정수 계수로 나온다."
    creative: "(1) 나머지 인수를 구하게 하기(★2 유지) (2) 두 다항식의 공통인수로 확장하면 미지수 2개가 되어 ★3(104-16 골조) (3) 나누어떨어지도록 하는 a 를 모두 구하게 하면(인수를 고정하지 않으면) 정수쌍 분기로 ★3."
```

```yaml
- id: GN-M31-103-08
  page: 103
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    넓이가 15x^2+13x+2 이고 가로가 5x+1 인 직사각형의 둘레 구하기. 5지선다.
  category: "넓이 식 인수분해 → 한 인수를 세로로 읽기 → 둘레 = 2(가로+세로)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해의 도형 활용 — 넓이에서 변의 길이와 둘레 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    15x^2+13x+2=(5x+1)(3x+2) 로 쪼개면 세로가 3x+2 로 읽힌다. 세로에서 멈추면 ①·② 오답이고
    둘레까지 2배 해야 한다(T-단위 성격의 마무리 함정). 도형 맥락이지만 인수분해 한 번이라 절차형. STEP1 ★2 유지.
  tier: star_2
  mechanism_primary: "넓이 인수분해 → (5x+1)(3x+2) → 세로 3x+2 → 둘레 2(8x+3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/103-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 이차식과 주어진 한 변을 바꾼다(12x^2+17x+6, 가로 3x+2 등). 제약: 넓이가 정수 계수 두 일차식의 곱으로 인수분해되고 주어진 변이 그중 하나여야 하며, 변의 길이가 양수가 되는 x 범위를 암묵적으로 유지한다."
    creative: "(1) 둘레를 주고 다른 변을 묻기(★2 유지) (2) 직육면체 부피 = 세 일차식 곱으로 올리면 인수분해 두 번이라 ★3 (3) 넓이가 같은 두 도형의 변을 비교하는 형태로 옮기면 ★3(107-u4 골조)."
```

```yaml
- id: GN-M31-103-09
  page: 103
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    (x^2-x+2)(x^2-x-5)+12 를 인수분해하기. 5지선다.
  category: "공통부분 치환 → 전개·정리 → 이차식 인수분해 → 되돌린 뒤 한 번 더 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 있는 식의 인수분해(치환 후 되돌리기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A=x^2-x 로 두면 (A+2)(A-5)+12=A^2-3A+2=(A-1)(A-2). 되돌린 x^2-x-2 가 다시 (x-2)(x+1) 로 쪼개지는데
    여기서 멈추면 ① 을 고르게 된다(T-표기: 끝까지 인수분해). 치환은 표준 절차라 통찰로 세지 않음. STEP1 ★2 유지.
  tier: star_2
  mechanism_primary: "x^2-x 치환 → A^2-3A+2=(A-1)(A-2) → 되돌려 (x^2-x-1)(x-2)(x+1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/103-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분(x^2-x)과 두 상수(+2, -5), 더하는 수(+12)를 바꿀 수 있다. 제약: 치환 후 이차식이 정수 계수로 인수분해돼야 하고, 되돌린 두 인수 중 적어도 하나가 다시 인수분해되도록 상수를 고르면 마지막 함정이 살아난다."
    creative: "(1) 되돌린 뒤 더 쪼개지지 않게 하면 ★2 로 약간 쉬워짐 (2) 네 일차식의 곱 + 상수 형태로 바꾸면 짝짓기 선택이 생겨 ★4(105-24 골조) (3) 완전제곱식이 되도록 상수를 정하게 하면 ★3."
```

```yaml
- id: GN-M31-103-10
  page: 103
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    97.5^2+5×97.5+2.5^2=100^2 임을 설명하는 데 가장 알맞은 인수분해 공식 고르기(a>0, b>0). 5지선다.
  category: "수식의 꼴을 공식 틀과 대응 → 2ab 자리 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수의 계산에 쓰이는 인수분해 공식 고르기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=97.5, b=2.5 로 보면 2ab=487.5=5×97.5 이므로 완전제곱 공식. 5×97.5 를 2ab 자리로 읽는 대응 한 단계뿐이다.
    통찰 0 · M_total 4 → STEP1 출발점 ★2 에서 -1 하여 ★1.
  tier: star_1
  mechanism_primary: "a=97.5, b=2.5 대응 → 가운데 항이 2ab → a^2+2ab+b^2=(a+b)^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/103-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 수의 합이 깔끔한 쌍(97.5·2.5 → 96·4, 7.5·2.5)으로 바꾼다. 제약: 가운데 항 계수가 2b(또는 2a)와 정확히 맞아야 하고, 합이 100 처럼 계산하기 좋은 수여야 문제의 의도가 산다."
    creative: "(1) 제곱의 차를 쓰는 수식(103-11 골조)으로 바꾸면 ★1~2 (2) 공식을 고르는 대신 값을 계산하게 하면 ★2 (3) 어떤 공식도 쓸 수 없는 식을 섞어 '설명할 수 없는 것'을 고르게 하면 ★2."
```

```yaml
- id: GN-M31-103-11
  page: 103
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP1"
  summary: |
    인수분해 공식을 이용하여 7.5^2×11.5 - 2.5^2×11.5 계산하기. 5지선다.
  category: "공통인수 묶기 → 제곱의 차 → 수 계산"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해를 이용한 수의 계산(공통인수 + 제곱의 차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    11.5 를 공통인수로 묶고 7.5^2-2.5^2=(7.5+2.5)(7.5-2.5)=10×5 로 바꾸면 11.5×50=575.
    공식 두 개를 연달아 쓰는 구조라 M_total 4 지만 -1 하지 않고 STEP1 ★2 유지.
  tier: star_2
  mechanism_primary: "11.5 공통인수 묶기 → 제곱의 차 (7.5+2.5)(7.5-2.5) → 11.5×50"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/103-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통인수와 두 제곱수(7.5·2.5 → 8.5·1.5, 공통 11.5 → 24)를 바꾼다. 제약: 두 수의 합·차가 정수로 떨어져야 암산이 유지되고, 선택지 간격이 촘촘하면 어림셈으로 풀리지 않게 된다."
    creative: "(1) 공통인수 없이 제곱의 차만 쓰게 하면 ★1 (2) 분모에도 같은 꼴을 두어 약분하게 하면 ★3 (3) 항이 계속 이어지는 곱(105-19 골조)으로 확장하면 패턴 발견이 필요해 ★4."
```

```yaml
- id: GN-M31-103-12
  page: 103
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP1"
  summary: |
    x = 1/(5-2√6) 일 때 x^2-10x+25 의 값 구하기.
  category: "분모의 유리화 → 식을 완전제곱식으로 인수분해 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해 후 무리수를 대입해 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    유리화하면 x=5+2√6 이고 x^2-10x+25=(x-5)^2=(2√6)^2=24. 인수분해하지 않고 바로 제곱을 전개하면
    계산이 크게 늘어난다(질 저하형 마찰이 아니라 인수분해의 효용을 보여 주는 구성). 유리화 부호 처리가 T-부호. STEP1 ★2 유지.
  tier: star_2
  mechanism_primary: "분모 유리화로 x=5+2√6 → (x-5)^2 로 인수분해 → (2√6)^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/103-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 무리수 꼴(5-2√6 → 3-√5, 4+√7)과 식의 상수항을 바꾼다. 제약: 유리화 후 x 가 a+b√c 꼴이고, 식이 (x-a)^2 처럼 그 정수 부분을 상쇄하는 완전제곱식이어야 무리수가 깔끔히 사라진다."
    creative: "(1) x^2-10x+25 대신 x^2-10x+21=(x-3)(x-7) 처럼 곱의 꼴로 바꾸면 ★2 유지 (2) x 와 1/x 를 함께 주고 x^2+1/x^2 를 묻게 하면 대칭 활용이 들어가 ★3 (3) 소수 부분을 문자로 두는 형태로 옮기면 범위 판정이 붙어 ★3(107-u6 골조)."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M31-104-13
  page: 104
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    A = √(a^2+2a+1) - √(a^2-6a+9) 일 때 보기 ㄱ~ㄷ(a<-1, -1≤a<3, a≥3 세 구간에서의 A 값) 중 옳은 것 모두 고르기.
  category: "근호 안을 완전제곱식으로 → |a+1|-|a-3| → 구간별 부호 판정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식과 √(A^2)=|A| — 문자의 범위에 따라 근호 정리하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a^2+2a+1=(a+1)^2, a^2-6a+9=(a-3)^2 로 묶은 뒤 각 구간에서 a+1, a-3 의 부호를 따로 판정한다.
    보기가 구간을 이미 나눠 주므로 스키마 기준으로 단순 절댓값 구간 분할은 I-MI 로 세지 않고 T-부호·T-범위·T-경계(≤ 와 <)로 처리했다.
    세 구간 × 두 절댓값 = 노동량이 크다(M_total 8). STEP2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "근호 안 완전제곱식 → |a+1|-|a-3| → 세 구간 부호 판정 → 각 보기 대조"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/104-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 완전제곱식의 근(-1, 3)을 바꿔 구간 경계를 옮길 수 있다(a^2+4a+4, a^2-10a+25 → 경계 -2, 5). 제약: 근호 안은 반드시 완전제곱식이어야 하고, 보기의 구간 경계가 두 근과 정확히 일치해야 하며 ≤ 와 < 의 위치를 바꾸면 답이 달라진다."
    creative: "(1) 구간을 주지 않고 A 를 간단히 하게 하면 경우 나누기를 학생이 설계해야 해 ★4(I-MI) (2) 두 근호의 차를 합으로 바꾸면 중간 구간이 상수가 되어 ★3 유지 (3) 0<x<1 같은 범위에 분수식을 섞으면 ★4(105-22 골조)."
```

```yaml
- id: GN-M31-104-14
  page: 104
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    x^8-1 의 인수가 아닌 것 고르기. 5지선다.
  category: "제곱의 차를 반복 적용해 완전히 인수분해 → 선택지와 대조"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱의 차를 반복 적용하는 고차식의 인수분해와 인수 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x^8-1=(x^4+1)(x^2+1)(x+1)(x-1) 까지 세 번 연달아 쪼갠다. ④ x^2-x=x(x-1) 은 x 가 인수 목록에 없어 탈락.
    중간에 멈추면 x^4+1 이 더 쪼개지지 않는다는 판단도 필요하다(T-표기). 표현 전환이나 역추적은 없어 절차형. STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "제곱의 차 3회 → (x-1)(x+1)(x^2+1)(x^4+1) → 선택지가 이 인수들의 곱인지 확인"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/104-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차수를 바꾼다(x^8-1 → x^6-1, x^{12}-1, 16x^4-1). 제약: 중3 범위에서는 제곱의 차만 쓸 수 있으므로 지수가 2의 거듭제곱일 때 가장 깔끔하고, x^6-1 처럼 세제곱의 차가 필요한 꼴은 피한다."
    creative: "(1) 인수의 개수를 묻기(★3 유지) (2) 수로 바꿔 2^40-1 의 약수를 찾게 하면 표현 전환이 붙어 ★4(105-23 골조) (3) x^4+1 이 더 인수분해되는지 설명하게 하는 서술형이면 ★4."
```

```yaml
- id: GN-M31-104-15
  page: 104
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    4x^2+kx+5=(x+a)(4x+b) (a, b 는 정수)일 때 상수 k 의 값 중 가장 큰 값 구하기.
  category: "계수 비교 → ab=5 인 정수쌍 전수 → k=4a+b 최댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ab=5 를 만족하는 정수쌍 (1,5), (5,1), (-1,-5), (-5,-1) 을 모두 따진 뒤 k=4a+b 를 비교"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "인수분해되도록 하는 상수의 값 — 정수쌍 경우 나누기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전개하면 k=4a+b, ab=5. 5 가 소수라 정수쌍이 네 개뿐이고 각각 k=9, 21, -9, -21.
    한 조건(ab=5)이 여러 경우를 낳고 모두 따져야 최댓값이 확정되므로 I-MI d1. 음수쌍은 최댓값에 기여하지 않지만 빠뜨리면 논리가 비므로 카운트는 유지.
    STEP2 ★3 출발점 유지(통찰 1개 d1 은 ±0).
  tier: star_3
  mechanism_primary: "전개해 k=4a+b, ab=5 → 정수쌍 4개 → k 최댓값 21"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/104-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 소수(5)에서 합성수(6, 12)로 바꾸면 정수쌍이 늘어 경우가 많아진다. 제약: 이차항 계수와 틀의 (x+a)(4x+b) 배치를 유지하려면 상수항의 약수쌍만 따지면 되고, 최솟값을 물으면 음수쌍이 답이 되므로 부호를 모두 열어 둬야 한다."
    creative: "(1) 가장 작은 값·모든 k 의 합으로 바꾸기(★3 유지) (2) 틀을 주지 않고 '인수분해되도록 하는 자연수 k' 로 열면 갈래가 늘어 ★4 (3) 완전제곱식이 되도록 하는 k 로 바꾸면 조건이 하나로 좁혀져 ★2~3(107-u3 골조)."
```

```yaml
- id: GN-M31-104-16
  page: 104
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    2x-3 이 6x^2-x+A 와 2x^2+Bx+3 의 공통인수일 때 상수 A, B 에 대하여 A-B 구하기.
  category: "공통인수를 한 인수로 고정 → 나머지 인수를 각각 결정 → 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 다항식의 공통인수가 주어졌을 때 미지 계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    6x^2-x+A=(2x-3)(3x+c) 에서 x 계수 비교로 c=4, 상수항 A=-12. 2x^2+Bx+3=(2x-3)(x-1) 에서 B=-5.
    같은 절차를 두 번 반복하는 구조로 표현 전환이나 역추적 착안은 없어 절차형. 미지수 A, B, c 를 다뤄 Mₐ=2. STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "각 식을 (2x-3)(□) 로 두고 전개 → 계수 비교로 A, B → A-B"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/104-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통인수(2x-3)와 두 이차항 계수를 바꾼다. 제약: 공통인수의 x 계수가 각 이차항 계수를 나눠떨어지게 해야 나머지 인수가 정수 계수로 나오고, 미지수가 상수항·일차항 중 어디에 있느냐에 따라 비교할 자리가 달라진다."
    creative: "(1) A+B, AB 를 묻기(★3 유지) (2) 공통인수를 주지 않고 찾게 하면 두 식을 모두 인수분해해야 해 ★3~4(104-18 골조) (3) 한 식을 두 문자 식으로 올리면 십자 곱셈 부담이 커져 ★4."
```

```yaml
- id: GN-M31-104-17
  page: 104
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    5(x+2)^2+7(x+2)(x-3)-6(x-3)^2 을 인수분해하면 (3x+a)(bx+c) 일 때 정수 a, b, c 에 대하여 ab+c 의 값. 5지선다.
  category: "두 덩어리 동시 치환 → 두 문자 이차식 인수분해 → 되돌려 정리"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 두 개인 식의 인수분해(A, B 치환)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A=x+2, B=x-3 으로 두면 5A^2+7AB-6B^2=(5A-3B)(A+2B), 되돌리면 (2x+19)(3x-4).
    치환 자체는 표준 절차지만 되돌린 뒤 주어진 틀 (3x+a)(bx+c) 의 순서에 맞춰 a=-4, b=2, c=19 로 대응해야 한다(T-표기).
    전개·정리 분량이 커 Mₖ=3. STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "x+2, x-3 을 A, B 로 치환 → (5A-3B)(A+2B) → 되돌려 (3x-4)(2x+19) → 틀과 대응"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/104-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 덩어리(x+2, x-3)와 세 계수(5, 7, -6)를 바꾼다. 제약: A, B 에 대한 이차식이 정수 계수로 인수분해돼야 하고(십자 곱셈), 되돌린 두 일차식의 x 계수가 주어진 틀과 맞아야 답이 유일하다."
    creative: "(1) 인수분해 결과만 쓰게 하는 서술형으로 바꾸기(★3 유지) (2) 한 덩어리를 제곱의 차 꼴로 만들면 공식이 하나 더 붙어 ★3 (3) 덩어리를 x+2, x-3 대신 x^2 항을 포함한 식으로 올리면 고차 인수분해가 되어 ★4."
```

```yaml
- id: GN-M31-104-18
  page: 104
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    x(x-2y)+(x-2y)(2y-3) 과 x^2+4xy+4y^2-9 의 공통인수 구하기. 5지선다.
  category: "공통인수 묶기 / 3항+1항 묶어 제곱의 차 → 두 결과에서 공통인수 찾기"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^2+4xy+4y^2-9 를 (x+2y)^2-3^2 으로 묶어 네 항 식을 제곱의 차 꼴로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항을 묶어 A^2-B^2 꼴로 만드는 인수분해 · 두 식의 공통인수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 식은 (x-2y) 공통인수로 (x-2y)(x+2y-3). 둘째 식은 앞 세 항을 완전제곱식으로 묶어 (x+2y)^2-3^2=(x+2y-3)(x+2y+3).
    '3항 + 1항' 으로 끊어 보는 것이 이 문항의 착안이라 I-EQV d1 로 셌다. 공통인수는 x+2y-3.
    x-2y 와 x+2y 를 혼동하기 쉬운 배치. STEP2 ★3 유지.
  tier: star_3
  mechanism_primary: "① 공통인수 묶기 → (x-2y)(x+2y-3) ② (x+2y)^2-3^2 → 공통인수 x+2y-3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/104-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘째 식의 상수 제곱수(9 → 16, 25)와 첫 식의 상수항을 바꾼다. 제약: 앞 세 항이 완전제곱식이어야 제곱의 차로 묶이고, 두 식이 실제로 같은 일차식을 공통인수로 갖도록 상수를 맞춰야 한다."
    creative: "(1) 공통인수가 없는 배치를 섞어 '공통인수가 없는 것' 을 고르게 하면 ★3 유지 (2) 2항+2항 묶기가 필요한 식으로 바꾸면 묶는 방법 선택이 생겨 ★4(107-u5 골조) (3) 공통인수로 나눈 몫까지 묻게 하면 ★3~4."
```

```yaml
- id: GN-M31-105-19
  page: 105
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    (1-1/2^2)(1-1/3^2)(1-1/4^2)×…×(1-1/100^2) 을 인수분해 공식을 이용해 계산하기. 5지선다.
  category: "일반항을 제곱의 차로 인수분해 → 연쇄 약분(망원곱) → 양 끝만 남김"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1-1/k^2=(k-1)(k+1)/k^2 로 바꾼 뒤 이웃 항끼리 분자·분모가 지워지는 규칙을 스스로 발견해 양 끝 1/2 와 101/100 만 남긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제곱의 차를 이용한 연쇄 약분(망원곱) 계산"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각 항을 (k-1)(k+1)/k^2 로 쪼개는 것까지는 공식이지만, 99개 항이 어떻게 지워지는지는 문제에 적혀 있지 않아 학생이 몇 항을 써 보고 규칙을 찾아야 한다(I-PD d2).
    남는 것이 1/2 × 101/100 이라는 양 끝 처리도 경계 함정. STEP2 출발점 ★3 에서 통찰 d2 로 +1 하여 ★4.
    I-PD 는 저노출 유형이라 ★4 게이트를 통과한다.
  tier: star_4
  mechanism_primary: "1-1/k^2 → (k-1)(k+1)/k^2 → 연쇄 약분 → (1/2)×(101/100)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/105-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "끝 항(100)과 시작 항(2)을 바꾸면 답이 (시작-1)/시작 × (끝+1)/끝 꼴로 그대로 따라온다. 제약: 시작이 2 이상이어야 0 이 곱해지지 않고, 선택지에 99/100·101/100 같은 근사 오답을 두면 망원곱을 끝까지 안 한 학생이 걸린다."
    creative: "(1) 끝 항을 문자 n 으로 두고 일반식을 구하게 하면 Mₐ 가 올라 ★4 유지~★5 (2) 1-1/k^2 대신 1-2/(k(k+1)) 류로 바꾸면 분해 착안이 달라져 ★4 (3) 항이 세 개뿐인 유한 곱으로 줄이면 패턴 발견이 사라져 ★2."
```

```yaml
- id: GN-M31-105-20
  page: 105
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP2"
  summary: |
    a+b=√2+1, ab=-1 일 때 a^3+a^2b+ab^2+b^3 의 값. 5지선다.
  category: "네 항을 2항씩 묶어 (a+b)(a^2+b^2) → a^2+b^2=(a+b)^2-2ab 로 변환 → 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a^3+a^2b+ab^2+b^3 을 a^2(a+b)+b^2(a+b) 로 묶어 주어진 두 조건만으로 계산되는 꼴 (a+b)(a^2+b^2) 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곱셈 공식의 변형과 인수분해를 이용한 식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    묶지 않고 a, b 를 각각 구하려 하면 무리수 이차방정식이 되어 중3 범위를 벗어난다. 2항씩 묶는 착안이 풀이의 전부라 I-EQV d1.
    이후는 (a+b)^2-2ab 라는 표준 변형과 무리수 곱셈. 통찰 1개 d1 이라 STEP2 ★3 출발점 유지.
  tier: star_3
  mechanism_primary: "2항씩 묶어 (a+b)(a^2+b^2) → a^2+b^2=(a+b)^2-2ab → 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/105-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a+b 와 ab 의 값(√2+1, -1 → √3-1, 2 등)을 바꾼다. 제약: ab 가 음수이거나 작을수록 a^2+b^2 계산이 깔끔하고, 선택지를 p+q√2 꼴로 두려면 a+b 에 들어가는 무리수를 하나로 통일해야 한다."
    creative: "(1) a^3-a^2b-ab^2+b^3 처럼 부호를 바꿔 (a+b)(a-b)^2 류로 묶이게 하면 ★3 유지 (2) a-b 의 값을 추가로 구하게 하면 부호 두 갈래가 생겨 ★4(I-MI) (3) a^2+b^2 만 묻는 형태로 낮추면 ★2."
```

```yaml
- id: GN-M31-105-21
  page: 105
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP2"
  summary: |
    2x^2+5xy-3y^2+11y-x-6 을 인수분해하기.
  category: "한 문자(x)에 대한 내림차순 정리 → 상수부 인수분해 → 십자 곱셈"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 문자 6항 식을 차수가 낮은 문자를 상수로 보고 x 에 대한 이차식 2x^2+(5y-1)x-(3y^2-11y+6) 표현으로 옮겨야 십자 곱셈이 가능해진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 문자 여러 항 식의 인수분해 — 한 문자에 대해 내림차순 정리하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    6항을 그대로 보면 손댈 곳이 없다. x 에 대해 정리한 뒤 y 만의 상수부 3y^2-11y+6=(3y-2)(y-3) 을 먼저 인수분해하고,
    그것을 재료로 십자 곱셈을 한 번 더 해야 (x+3y-2)(2x-y+3) 이 나온다 — 인수분해 2회 중첩.
    표현을 바꾸지 않으면 풀이가 진행되지 않으므로 I-RT d2. STEP2 ★3 에서 +1 하여 ★4(I-RT 는 ★4 저노출 목록에 포함).
  tier: star_4
  mechanism_primary: "x 에 대해 내림차순 정리 → 상수부 (3y-2)(y-3) → 십자 곱셈 → (x+3y-2)(2x-y+3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(x+3y-2)(2x-y+3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/105-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 일차식 (x+3y-2), (2x-y+3) 의 계수를 먼저 정하고 전개해 문제를 만드는 역방향 설계가 안전하다. 제약: 전개한 6항이 모두 정수 계수여야 하고, x 와 y 의 차수가 같으면 어느 문자로 정리해도 되지만 한쪽 차수를 낮춰 두면 정리할 문자가 분명해진다."
    creative: "(1) 두 문자 모두 2차로 만들어 정리할 문자를 학생이 고르게 하면 전략 선택이 붙어 ★4~5(I-SC) (2) 인수 하나를 주고 나머지를 구하게 하면 ★3 (3) 공통인수 찾기 형태로 옮기면 ★4(107-u5 골조)."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M31-105-22
  page: 105
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    0<x<1 일 때 √((-x)^2) - √((x-1/x)^2+4) + √((x+1/x)^2-4) 를 간단히 하기.
  category: "근호 안을 완전제곱식으로 재구성 → √(A^2)=|A| → 범위에서 부호 판정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "(x-1/x)^2+4=(x+1/x)^2 · (x+1/x)^2-4=(x-1/x)^2 라는 두 대칭식 사이의 관계를 알아채 근호 안을 서로 바꿔 넣는다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "0<x<1 을 x<1/x, 즉 x-1/x<0 이라는 부호 조건으로 옮겨 |x-1/x|=1/x-x 로 벗긴다"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "x±1/x 대칭식과 √(A^2)=|A| — 범위가 주어진 식의 간단히 하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ±4 가 두 대칭식 사이를 오가게 만드는 장치임을 보지 못하면 근호가 벗겨지지 않는다(I-SYM d2).
    벗긴 뒤에도 0<x<1 에서 x-1/x 가 음수라는 판정이 없으면 부호가 틀린다(I-EQV d2 · T-부호·T-범위).
    세 근호를 각각 처리해 M_total 9. STEP3 출발점 ★4 유지(통찰 2개라 ★5 조건인 3개에는 못 미침).
  tier: star_4
  mechanism_primary: "각 근호 안을 (x±1/x)^2 로 재구성 → |…| 로 벗기고 0<x<1 부호 판정 → x-(x+1/x)+(1/x-x)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/105-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "±4 는 (x+1/x)^2-(x-1/x)^2=4 에서 고정되므로 바꿀 수 없다. 바꿀 수 있는 것은 범위(0<x<1 → x>1)와 앞의 √((-x)^2) 항, 그리고 세 항의 부호 배치다. 범위를 x>1 로 바꾸면 마지막 항의 부호가 뒤집혀 답이 달라진다."
    creative: "(1) 범위를 주지 않고 경우를 나누게 하면 분기 설계가 더해져 ★5 후보 (2) x+1/x 의 값을 주고 x-1/x 를 구하게 하면 부호 두 갈래로 ★4 유지 (3) 1/x 대신 y 로 두고 xy=1 조건을 주면 대칭식 골조는 그대로면서 표현이 낯설어져 ★4."
```

```yaml
- id: GN-M31-105-23
  page: 105
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    자연수 2^40-1 이 30 과 40 사이의 두 자연수로 나누어떨어질 때 그 두 자연수의 합 구하기.
  category: "수를 제곱의 차로 반복 인수분해 → 30~40 범위에 드는 인수 찾기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'어떤 수로 나누어떨어지는가' 라는 수 문제를 2^40-1=(2^20-1)(2^20+1) 처럼 식의 인수분해로 옮겨 푼다"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "30~40 사이라는 결과 조건에서 어디까지 쪼개야 하는지를 역으로 판단해 2^5-1=31, 2^5+1=33 에서 멈춘다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "인수분해를 이용한 수의 약수 찾기(2^n-1 의 분해)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    2^40-1 을 제곱의 차로 세 번 쪼개면 (2^5-1)(2^5+1)(2^10+1)(2^20+1) 이 되고 31, 33 이 조건에 맞는다.
    식이 아니라 수라서 인수분해로 옮길 생각을 해야 하고(I-RT d2), 범위 조건이 분해를 멈출 지점을 정해 준다(I-BW d1).
    계산기 없이 2^40 을 직접 구하려 하면 막힌다. STEP3 ★4 유지.
  tier: star_4
  mechanism_primary: "2^40-1 을 제곱의 차로 반복 분해 → (2^5-1)(2^5+1)… → 31+33"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/105-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수(40)와 범위(30~40)를 바꾼다. 제약: 지수가 2의 거듭제곱 배수여야 제곱의 차만으로 끝까지 쪼개지고, 범위 안에 정확히 두 인수가 들어오도록 골라야 답이 유일하다(2^24-1 이면 범위를 다시 잡아야 함)."
    creative: "(1) 가장 큰 두 자리 약수를 묻기(★4 유지) (2) 3^20-1 처럼 밑을 바꾸면 계산이 무거워져 질 저하 쪽이므로 피한다 (3) 식으로 되돌려 x^8-1 의 인수를 고르게 하면 ★3(104-14 골조)."
```

```yaml
- id: GN-M31-105-24
  page: 105
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP3"
  summary: |
    (x-1)(x-2)(x+4)(x+5)+k 가 완전제곱식이 되도록 하는 상수 k 의 값 구하기.
  category: "상수항 합이 같아지도록 짝짓기 → 공통부분 치환 → 완전제곱식 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 일차식을 짝짓는 세 가지 방법 중 (x-1)(x+4) · (x-2)(x+5) 로 묶어야만 x^2+3x 라는 공통부분이 생긴다는 것을 골라내야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "네 일차식의 곱 꼴 식의 인수분해(짝짓기 + 치환)와 완전제곱식 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    순서대로 (x-1)(x-2), (x+4)(x+5) 로 묶으면 공통부분이 생기지 않는다. 상수항 합이 같은 쌍(-1+4=-2+5=3)을 찾는 것이 핵심 분기라 I-SC d2.
    A=x^2+3x 로 두면 (A-4)(A-10)+k=A^2-14A+40+k 이고 완전제곱식 조건 40+k=49 → k=9.
    STEP3 출발점 ★4 유지(통찰 1개라 ★5 요건 미달). I-SC 는 ★4 저노출 유형 요건을 만족.
  tier: star_4
  mechanism_primary: "상수항 합이 같게 짝짓기 → A=x^2+3x 치환 → A^2-14A+(40+k) 완전제곱 조건 → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/105-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 상수(-1, -2, 4, 5)를 두 쌍의 합이 같도록 유지하면서 바꾼다(예: 1, 2, -4, -5 / -2, -3, 5, 6). 제약: 두 쌍의 상수항 합이 같아야 공통부분이 생기고, 완전제곱식이 되려면 k 가 (일차항 계수의 절반)^2 에서 상수부를 뺀 값으로 정해져야 한다."
    creative: "(1) 완전제곱식 대신 인수분해 결과를 쓰게 하면 ★3~4 (2) k 를 주고 인수분해하게 하면 분기가 사라져 ★3(103-09 골조) (3) 최솟값·최댓값을 묻는 이차식 문제로 확장하면 중3 범위를 벗어난다."
```

### 서술형 대비 문제

```yaml
- id: GN-M31-106-e1
  page: 106
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    x^2 의 계수가 1 인 이차식을 민수는 x 의 계수를, 수희는 상수항을 잘못 보고 각각 (x+2)(x-10), (x+6)(x-7) 로 인수분해했을 때 처음 이차식을 바르게 인수분해하기. [7점]
  category: "잘못 본 항을 제외한 유효 정보 추출 → 원래 이차식 복원 → 인수분해"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'x 의 계수를 잘못 봤다 = 상수항은 맞다' 로 뒤집어, 두 사람의 결과에서 각각 살아 있는 정보(상수항 -20, x 계수 -1)만 골라낸다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "잘못 보고 인수분해한 이차식에서 처음 식 복원하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계산 자체는 전개 두 번이 전부이고, 난점은 '무엇이 유효한 정보인가' 를 역으로 판단하는 데 있다(I-BW d2).
    잘못 본 항과 맞는 항을 바꿔 읽으면 곧바로 틀린다(T-표기). 원식 x^2-x-20=(x+4)(x-5).
    서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "민수 → 상수항 -20, 수희 → x 계수 -1 → x^2-x-20 → (x+4)(x-5)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(x+4)(x-5)$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/106-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 사람의 인수분해 결과 네 개의 상수를 바꾼다. 제약: 유효한 상수항과 유효한 x 계수로 만든 이차식이 다시 정수 계수로 인수분해돼야 하고, 두 사람이 잘못 본 항이 서로 달라야(하나는 x 계수, 하나는 상수항) 정보가 겹치지 않는다."
    creative: "(1) 바르게 인수분해한 식의 두 근의 합·곱을 묻기(★3 유지) (2) 세 사람으로 늘려 모순되는 정보를 하나 섞으면 검증이 강제돼 ★4(I-VF) (3) x^2 계수가 1 이 아닌 이차식으로 올리면 유효 정보 판단이 복잡해져 ★4."
```

```yaml
- id: GN-M31-106-e2
  page: 106
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    a-b=2, ax-ay-bx+by=-8 일 때 x^2-2xy+y^2 의 값 구하기. [7점]
  category: "4항을 2항씩 묶어 (a-b)(x-y) → x-y 결정 → (x-y)^2 에 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항을 묶어 인수분해한 뒤 조건을 대입해 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ax-ay-bx+by=a(x-y)-b(x-y)=(a-b)(x-y) 로 묶고 a-b=2 를 대입하면 x-y=-4, 구하는 식은 (x-y)^2=16.
    2항씩 묶는 것은 이 단원에서 반복 훈련된 표준 절차라 통찰로 세지 않았다. x-y 가 음수지만 제곱이라 부호가 사라지는 지점이 T-부호.
    문자 4개를 다뤄 Mₐ=2. 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "(a-b)(x-y)=-8 → x-y=-4 → (x-y)^2=16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/106-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a-b 의 값과 곱의 값(2, -8)을 바꾼다. 제약: 둘째 값이 첫 값으로 나누어떨어져야 x-y 가 정수가 되고, 묻는 식이 (x-y)^2 이나 (x-y)^3 처럼 x-y 만으로 결정되는 꼴이어야 한다."
    creative: "(1) x+y 를 추가로 주고 x, y 를 각각 구하게 하면 연립이 붙어 ★3 유지 (2) 묻는 식을 x^2-y^2 로 바꾸면 x+y 정보가 없어 풀리지 않으므로 조건을 하나 더 줘야 한다 (3) 조건을 제곱의 차 꼴로 주면 묶는 방법을 찾아야 해 ★3~4(106-u2 골조)."
```

```yaml
- id: GN-M31-106-u1
  page: 106
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    x^2 의 계수가 1 인 이차식을 경수는 x 의 계수를, 주아는 상수항을 잘못 보고 각각 (x-4)(x+6), (x+1)(x+4) 로 인수분해했을 때 처음 이차식을 바르게 인수분해하기. [7점]
  category: "잘못 본 항을 제외한 유효 정보 추출 → 원래 이차식 복원 → 인수분해"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "잘못 본 항의 반대쪽만 유효하다는 것을 뒤집어 읽어 상수항 -24 와 x 계수 +5 를 골라낸다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "잘못 보고 인수분해한 이차식에서 처음 식 복원하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    106-e1 과 같은 골조의 유제. 경수에게서 상수항 -24, 주아에게서 x 계수 +5 를 받아 x^2+5x-24=(x+8)(x-3).
    유효 정보 역판단이 핵심이라 I-BW d2. 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "경수 → 상수항 -24, 주아 → x 계수 5 → x^2+5x-24 → (x+8)(x-3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(x-3)(x+8)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/106-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 상수를 바꾸되 복원한 이차식이 정수 계수로 인수분해되도록 맞춘다. 제약: 106-e1 과 같은 제약(잘못 본 항이 서로 달라야 하고, 유효 정보 조합이 인수분해 가능해야 함)."
    creative: "(1) 복원한 이차식이 완전제곱식이 되도록 설계하면 ★3 유지 (2) 두 사람 모두 x 계수를 잘못 본 상황을 섞어 '답을 정할 수 없다' 를 고르게 하면 ★4 (3) 처음 식의 값을 특정 x 에서 묻는 형태로 바꾸면 ★3."
```

```yaml
- id: GN-M31-106-u2
  page: 106
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    x-y=7, x^2-y^2-2x+1=-12 일 때 x^2+2xy+y^2 의 값 구하기. [7점]
  category: "항 순서를 바꿔 (x-1)^2-y^2 로 묶기 → 제곱의 차 → x+y 결정 → (x+y)^2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x^2-y^2-2x+1 을 (x^2-2x+1)-y^2=(x-1)^2-y^2 으로 다시 묶어 제곱의 차로 옮긴다(x^2-y^2 을 먼저 묶으면 진행되지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항을 다시 묶어 A^2-B^2 로 만들고 조건을 대입해 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    식이 x^2-y^2 으로 시작해 그대로 묶고 싶게 배치돼 있지만, 3항(x^2-2x+1) + 1항(-y^2) 으로 끊어야 (x-1-y)(x-1+y) 가 나온다(I-EQV d2).
    x-y=7 을 넣으면 6(x+y-1)=-12 → x+y=-1, 구하는 식은 (x+y)^2=1.
    착안 1개 d2 라 +1 후보지만 '항 묶어 제곱의 차' 는 이 단원의 대표 착안(104-18 과 같은 골조)이라 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "(x-1)^2-y^2=(x-y-1)(x+y-1) → 6(x+y-1)=-12 → x+y=-1 → (x+y)^2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m31/items/106-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x-y 의 값(7)과 둘째 식의 값(-12)을 바꾼다. 제약: (x-y-1) 이 둘째 식의 값을 나눠떨어지게 해야 x+y 가 정수가 되고, -2x+1 의 계수는 (x-1)^2 이 완성되도록 고정해야 한다."
    creative: "(1) 묻는 식을 x^2-y^2 나 x^3+y^3 로 바꾸면 조건 활용이 달라져 ★3~4 (2) -2x+1 대신 +2y+1 로 두어 y 쪽을 완전제곱으로 만들면 묶는 자리가 옮겨 ★3 유지 (3) 두 조건을 모두 인수분해해야 풀리게 하면 ★4."
```

```yaml
- id: GN-M31-107-u3
  page: 107
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    9x^2+ax+1 과 (2x+1)(2x+3)+b 가 모두 완전제곱식이 될 때 양수 a, b 에 대하여 a-b 의 값 구하기. [7점]
  category: "완전제곱식 조건 2ab 적용 / 전개 후 상수항 조건 → 두 미지수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식이 될 조건으로 미지의 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 식은 a=±2×3×1 에서 양수 조건으로 a=6. 뒤 식은 전개해 4x^2+8x+3+b 로 만든 뒤 상수항이 (8/2÷2)^2 즉 4가 되어야 하므로 b=1.
    부호 두 갈래 중 하나를 조건으로 잘라 내는 지점이 T-부호이고, 뒤 식은 전개를 먼저 해야 한다는 것 외에 착안은 없어 절차형.
    같은 조건을 두 번 적용하는 서술형 표준. ★3 유지.
  tier: star_3
  mechanism_primary: "9x^2+ax+1 → a=6 / (2x+1)(2x+3)+b 전개 → 4x^2+8x+3+b=(2x+2)^2 → b=1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m31/items/107-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 식의 두 제곱수(9, 1)와 뒤 식의 두 일차식((2x+1)(2x+3))을 바꾼다. 제약: 앞 식은 양 끝 항이 제곱수여야 하고, 뒤 식은 전개한 이차항 계수가 제곱수여야 완전제곱식 조건이 정수로 떨어진다."
    creative: "(1) 양수 조건을 빼고 가능한 a 를 모두 구하게 하면 부호 두 갈래로 ★3~4 (2) 두 식이 공통인수를 갖도록 조건을 걸면 ★4 (3) 상수항 대신 x 계수를 미지수로 두면 같은 골조 ★3 유지."
```

```yaml
- id: GN-M31-107-u4
  page: 107
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    한 변이 3x+7 인 정사각형에서 한 변이 5 인 정사각형을 잘라 낸 ㄱ자 도형 A 와, 가로가 3x+12 인 직사각형 B 의 넓이가 같을 때 B 의 둘레 구하기. [7점]
  category: "도형 넓이를 제곱의 차로 표현 → 인수분해 → 다른 변 읽기 → 둘레"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄱ자 도형을 '큰 정사각형 - 작은 정사각형' 으로 보아 넓이를 (3x+7)^2-5^2 이라는 제곱의 차 식으로 옮긴 뒤, 인수분해한 두 인수를 다시 직사각형의 두 변으로 되읽는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "인수분해의 도형 활용 — 넓이가 같은 도형에서 변의 길이와 둘레 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 를 가로·세로로 잘라 두 직사각형으로 더하면 식이 지저분해진다. 큰 정사각형에서 5×5 를 뺀 것으로 보면
    (3x+7)^2-5^2=(3x+12)(3x+2) 가 곧바로 나오고, 주어진 가로 3x+12 와 맞물려 세로가 3x+2 로 읽힌다(I-RT d2).
    마지막에 세로가 아니라 둘레를 묻는 것도 함정. 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "A 넓이 = (3x+7)^2-5^2 → (3x+12)(3x+2) → B 의 세로 3x+2 → 둘레 2(6x+14)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12x+28$'
  answer_source: "답지(쪽 렌더)"
  figure: 'crop:fig-107-u4.png'
  latex: latex-bank/gn-m31/items/107-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "큰 정사각형의 변(3x+7)과 잘라 낸 정사각형의 변(5)을 바꾸고, B 의 가로를 두 인수 중 하나로 맞춘다. 제약: 그림 라벨이 값과 함께 움직여야 하므로 크롭 이미지를 다시 만들지 않는 한 수치 변형은 불가하다(그림 없는 서술형으로 바꿔야 변형 가능). 잘라 내는 정사각형의 변은 큰 변보다 작아야 한다."
    creative: "(1) B 의 가로 대신 둘레를 주고 A 의 변을 묻는 역방향으로 뒤집으면 ★4(I-BW) (2) 잘라 낸 도형을 직사각형으로 바꾸면 제곱의 차가 깨져 십자 곱셈이 필요해 ★3~4 (3) 넓이만 주고 도형 없이 물으면 ★2(103-08 골조)."
```

```yaml
- id: GN-M31-107-u5
  page: 107
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    (y-1)^2-y+1 과 xy-2x+3y^2-5y-2 의 1 이 아닌 공통인수 구하기. [8점]
  category: "공통부분 묶기 / 한 문자로 정리해 2항+3항 묶기 → 두 결과의 공통인수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "-y+1 을 -(y-1) 로 읽어 (y-1)^2-(y-1) 이라는 공통부분 꼴로 옮긴다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 식을 x 에 대해 묶어 x(y-2)+(3y+1)(y-2) 표현으로 옮겨야 y-2 가 드러난다(원래 배열로는 공통인수가 보이지 않음)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "두 다항식의 공통인수 — 공통부분 묶기와 한 문자로 정리하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    첫 식은 (y-1)(y-2), 둘째 식은 x(y-2)+3y^2-5y-2=(y-2)(x+3y+1) 이므로 공통인수는 y-2.
    둘째 식에서 x 가 있는 두 항을 먼저 묶고 남은 3y^2-5y-2 를 따로 인수분해해 (y-2) 를 맞춰 내는 과정이 이 범위에서 가장 긴 착안 사슬이다.
    배점도 8점으로 이 구역에서 유일하게 높다. 서술형 출발점 ★3 에서 통찰 2개(d1+d2)로 +1 하여 ★4 — I-RT 는 ★4 저노출 요건 충족.
  tier: star_4
  mechanism_primary: "① (y-1)^2-(y-1)=(y-1)(y-2) ② x(y-2)+(3y+1)(y-2)=(y-2)(x+3y+1) → 공통인수 y-2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$y-2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m31/items/107-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통인수를 먼저 (y-k) 로 정하고 두 식을 전개해 만드는 역방향 설계가 안전하다. 제약: 둘째 식의 x 항 계수와 y 만의 이차식이 같은 일차식을 인수로 가져야 하고, 첫 식은 공통부분 치환으로 풀리는 꼴을 유지한다."
    creative: "(1) 공통인수로 나눈 두 몫을 함께 구하게 하면 ★4 유지 (2) 세 식의 공통인수로 늘리면 ★4~5 (3) 둘째 식을 y 에 대한 이차식으로 정리해야만 풀리게 하면 십자 곱셈이 더해져 ★4(105-21 골조)."
```

```yaml
- id: GN-M31-107-u6
  page: 107
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    √6 의 소수 부분을 a 라 할 때 a^2+3a+2 의 값 구하기. [6점]
  category: "무리수의 정수 부분 판정 → 소수 부분을 식으로 표현 → 인수분해 후 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'√6 의 소수 부분' 이라는 말을 2<√6<3 판정을 거쳐 a=√6-2 라는 계산 가능한 식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리수의 소수 부분을 이용한 식의 값(인수분해 후 대입)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=√6-2 로 옮기는 것이 첫 관문이고(T-범위: 2<√6<3), a^2+3a+2 를 전개하지 않고 (a+1)(a+2) 로 인수분해하면
    (√6-1)×√6 로 한 줄에 끝난다. 인수분해의 효용이 분명한 마무리 문항. 배점 6점으로 이 구역에서 가장 가볍다.
    통찰 1개 d1 이라 서술형 ★3 출발점 유지.
  tier: star_3
  mechanism_primary: "a=√6-2 → a^2+3a+2=(a+1)(a+2)=(√6-1)·√6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6-\sqrt{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m31/items/107-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무리수(√6)와 이차식의 두 상수항을 바꾼다. 제약: 인수분해한 (a+p)(a+q) 의 p, q 중 하나가 정수 부분과 맞물려 무리수 항을 지워야 답이 깔끔하고, 정수 부분은 연속한 두 제곱수 사이를 확인해 정한다."
    creative: "(1) 정수 부분을 b 로 두고 a 와 b 를 함께 쓰는 식으로 바꾸면 조건이 늘어 ★3 유지 (2) 소수 부분의 역수 1/a 를 묻게 하면 유리화가 붙어 ★3~4 (3) 3-√6 처럼 음의 무리수를 섞으면 정수 부분 판정이 까다로워져 ★4."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 2 · ★2 10 · ★3 14 · ★4 6 · ★5 0
- 통찰형 14 · 절차형 18 · premium 0
- 통찰 유형 분포: I-EQV 6 · I-RT 4 · I-BW 3 · I-MI 1 · I-PD 1 · I-SYM 1 · I-SC 1 (총 라벨 17개 · 통찰 2개 문항 3문: 105-22 · 105-23 · 107-u5)
- 구역별 ★ 중앙값: STEP 1 ★2 · STEP 2 ★3 · STEP 3 실력 UP ★4 · 서술형 대비 ★3 — 벤더 구역 신호와 전반적으로 일치
- type_hint 상위: 「인수분해 후 대입해 식의 값 구하기」 5 · 「완전제곱식 판별·조건」 4 · 「공통인수 찾기·미지 계수 결정」 4 · 「제곱의 차 반복·항 묶어 A^2-B^2」 4 · 「인수분해의 도형·수 활용」 4
- 그림: 1문(`crop:fig-107-u4.png`) — 나머지 31문은 식·수만으로 발문이 닫힌다
- ★4 6문은 모두 저노출 통찰(I-PD · I-RT · I-SYM · I-SC)을 포함해 v3.8 §2.13 게이트를 통과한다. ★5 는 없다(통찰 3개 이상 문항이 이 범위에 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서 벤더 구역 신호와 2단 이상 어긋난 문항은 없다. ±1 조정은 102-01·103-10(-1), 105-19·105-21·107-u5(+1) 다섯 건이며 모두 규칙 범위 안이다. | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「항을 묶어 A^2-B^2 만들기」(104-18 · 106-u2 · 107-u4) — 3항+1항 또는 2항+2항으로 끊는 착안이 공통이고 난이도 층이 ★3~4 로 넓다. ② 「두 문자 여러 항 식의 인수분해(한 문자 내림차순 정리)」(105-21 · 107-u5) — 인수분해 2회 중첩이라 별도 base ★4 가 필요하다. ③ 「잘못 보고 인수분해한 식 복원」(106-e1 · 106-u1) — I-BW 가 고정된 정형 유형. ④ 「완전제곱식이 될 조건」(102-02 · 104-15 · 105-24 · 107-u3) — 상수 결정형과 판별형을 한 유형으로 묶되 짝짓기가 필요한 105-24 는 상위 변형으로 분리.
- **통합해도 될 유형**: 「인수분해를 이용한 수의 계산」(103-10 · 103-11 · 105-19 · 105-23)은 쓰는 공식이 제곱의 차·완전제곱으로 같고 차이는 '수를 식으로 옮기는 정도' 뿐이라 한 유형 + depth 층으로 묶는 편이 낫다. 「인수분해 후 대입해 식의 값 구하기」(103-12 · 105-20 · 106-e2 · 106-u2 · 107-u6)도 같은 골조의 난이도 변주라 단일 유형 + 조건 형태별 변형으로 충분하다.
- 「인수분해의 도형 활용」(103-08 · 107-u4)은 문항 수는 적지만 대수↔기하 전환이 고정돼 있어 카탈로그에 독립 항목으로 남기는 것이 변형 설계에 유리하다.

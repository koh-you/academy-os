---
name: mechanism-데이터-GN-M31-06
description: 개념원리 중학 3-1 06 곱셈 공식(1/1 · 64~70쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 06 곱셈 공식
  unit_code: GN-M31-06
  part: "1/1"
  extract_range: "64~70쪽 · 64-01~70-06"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 06 곱셈 공식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 의 중단원 **06 곱셈 공식**(64~70쪽 · 33문항 전수)을 다룬다. 구역은 「개념원리 확인하기」 5문 · 「핵심문제 익히기」 16문(핵심문제 h 8 + 확인문제 c 8) · 「계산력 강화하기」 6문 · 「이런 문제가 시험에 나온다」 6문이다.

개념원리 중학은 난이도 level 표기가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」·「계산력 강화하기」는 공식 적용 드릴(★1), 「핵심문제 익히기」는 대표 유형 + 짝 확인문제(★2 출발), 「이런 문제가 시험에 나온다」는 시험 대비(★2~3)로 읽었다. 태그는 68-h8 의 「UP」(+1 후보) 하나뿐이다.

이 단원은 네 공식((a±b)² · (a+b)(a-b) · (x+a)(x+b) · (ax+b)(cx+d))의 적용 드릴이 몸통이라 절차형 비중이 높다. 통찰이 붙는 지점은 **도형 조건을 식으로 옮기는 자리**(67-h6 · 67-c6 · 70-05), **공통부분을 만들어 묶는 자리**(68-h7 · 68-c7 · 70-06), **네 일차식의 짝을 고르는 자리**(68-h8 · 68-c8), **전개하지 않고 필요한 항만 뽑는 자리**(70-01 · 70-03) 네 곳뿐이다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-64-01
  page: 64
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 두 다항식의 곱을 분배법칙으로 전개하기. ⑷는 (이항)×(삼항).
  category: "분배법칙 → 항별 곱 → 동류항 정리"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(다항식)×(다항식)의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 항을 빠짐없이 곱해 동류항만 정리하면 끝나는 드릴. 공식 선택도 없다.
    확인하기 구역 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "분배법칙으로 항별 곱 전개 → 동류항 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $xy+5x+2y+10$ ⑵ $2ab-3a+12b-18$ ⑶ $4x^2-13xy+3y^2$ ⑷ $a^2-7a-b^2+7b$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/64-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 일차식의 계수·상수를 자유롭게 바꿀 수 있음. 제약: 문자 두 개짜리 곱은 동류항이 생기지 않게(⑴·⑵) 또는 생기게(⑶) 의도를 고정하고, ⑷의 (이항)×(삼항)은 항 수가 6개를 넘지 않게 유지."
    creative: "(1) 세 일차식의 곱으로 늘리면 Mk만 오르고 ★1 유지 (2) 전개식 중 한 항의 계수만 묻기(★2 · I-SC d1) (3) 전개 결과를 주고 빠진 계수를 찾게 하면 미정계수 유형으로 ★2."
```

```yaml
- id: GN-M31-64-02
  page: 64
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 완전제곱식 $(a+b)^2$, $(a-b)^2$ 전개하기. ⑶⑷는 두 문자 계수.
  category: "완전제곱 공식 → 부호·계수 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(a+b)^2$, $(a-b)^2$의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 한 줄 대입. 함정은 가운데 항의 부호와 계수 제곱(T-부호) 하나뿐이다.
    확인하기 구역 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "완전제곱 공식에 계수 대입 → 가운데 항 2ab 의 부호 결정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x^2+2x+1$ ⑵ $a^2-14a+49$ ⑶ $4x^2+20xy+25y^2$ ⑷ $16a^2-24ab+9b^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/64-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 두 항의 계수·부호를 바꿀 수 있음. 제약: 제곱과 2ab 가 정수(또는 간단한 분수)로 떨어지게 유지하고, 네 문항 안에 +/- 두 꼴이 모두 들어가게 배치."
    creative: "(1) 앞 항을 음수로 시작해 $(-5x+2y)^2$ 꼴로 만들면 T-표기 함정 추가(★1~2) (2) 분수 계수로 바꾸면 Mk만 상승 (3) 전개식을 주고 원래 식을 되묻는 역방향(★2 · I-BW d1)."
```

```yaml
- id: GN-M31-64-03
  page: 64
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 합차 공식 $(a+b)(a-b)$ 전개하기.
  category: "합차 공식 → 제곱의 차"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(a+b)(a-b)$의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 괄호가 부호만 다르다는 것을 보고 제곱의 차로 바로 쓰는 드릴.
    확인하기 구역 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "부호만 다른 두 괄호 확인 → (앞 항)^2 - (뒤 항)^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a^2-1$ ⑵ $x^2-49$ ⑶ $4b^2-9$ ⑷ $25x^2-4y^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/64-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 항의 계수를 바꿀 수 있음. 제약: 제곱이 깔끔한 수(또는 분수)가 되도록 하고, 부호가 반대인 쌍이라는 구조는 그대로 둔다."
    creative: "(1) 두 괄호의 항 순서를 뒤섞어 공통항을 찾게 하면 T-표기 함정 추가(★1~2) (2) 합차를 두 번 연속 적용하는 꼴로 늘리면 ★2(I-SC d1) (3) 수의 계산(예: 99×101)으로 옮기면 I-RT d1 ★2."
```

```yaml
- id: GN-M31-64-04
  page: 64
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ $(x+a)(x+b)$ 꼴 전개하기.
  category: "합·곱 공식 → 일차항 계수 a+b, 상수항 ab"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(x+a)(x+b)$의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a+b 와 ab 를 각각 계산해 끼워 넣으면 끝. 함정은 두 상수의 부호(T-부호) 하나.
    확인하기 구역 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "두 상수의 합을 x 계수로, 곱을 상수항으로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a^2+8a+15$ ⑵ $x^2-5x-14$ ⑶ $b^2+7b-8$ ⑷ $y^2-10y+24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/64-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수를 자유롭게 바꿀 수 있음. 제약: (양,양)·(양,음)·(음,양)·(음,음) 네 부호 조합이 골고루 들어가게 배치하고 곱이 큰 수가 되지 않게 한다."
    creative: "(1) 한쪽을 문자 계수(x+ay)로 바꾸면 두 문자 유형(★1~2) (2) 상수항과 일차항 계수를 주고 두 상수를 되찾게 하면 인수분해 선행 유형 ★2 (3) 세 일차식 곱으로 확장하면 ★2~3."
```

```yaml
- id: GN-M31-64-05
  page: 64
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ $(ax+b)(cx+d)$ 꼴 전개하기.
  category: "네 계수 공식 → x^2 계수 ac, x 계수 ad+bc, 상수항 bd"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(ax+b)(cx+d)$의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ad+bc 를 두 곱의 합으로 계산하는 것 말고는 추가 판단이 없다.
    확인하기 구역 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "ac, ad+bc, bd 세 자리를 각각 계산해 채우기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4a^2+11a+7$ ⑵ $5x^2+2x-3$ ⑶ $12b^2-b-6$ ⑷ $6y^2-11y+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/64-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수를 모두 바꿀 수 있음. 제약: 가운데 항 ad+bc 가 상쇄돼 0 이 되지 않도록(의도한 경우 제외) 하고, 계수가 두 자리를 넘지 않게 유지."
    creative: "(1) 분수 계수를 섞으면 Mk 상승·★1 유지 (2) 두 문자로 바꿔 $(ax+by)(cx+dy)$ 로 (★1~2) (3) 가운데 항 계수만 묻는 부분 전개 유형으로 바꾸면 ★2(I-SC d1)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-65-h1
  page: 65
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ $(2x-y)(-3x+7y)$ ⑵ $(x+2)(x^2-2x+4)$ 를 전개하기.
  category: "분배법칙 → 항별 곱 → 동류항 정리(⑵는 3차식)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(다항식)×(다항식)의 전개"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵는 (이항)×(삼항)이라 항이 6개 생기고 동류항이 모두 지워져 3차항과 상수만 남는다.
    공식 선택은 없고 부호 처리(T-부호)만 함정. 핵심문제 출발 ★2, M_total 5 → 유지.
  mechanism_primary: "분배법칙으로 항별 곱 전개 → 동류항 소거 후 정리"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-6x^2+17xy-7y^2$ ⑵ $x^3+8$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/65-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 네 계수, ⑵의 상수 2 를 바꿀 수 있음. 제약: ⑵는 세제곱 합·차 꼴(x+a)(x^2-ax+a^2) 이라야 중간 항이 전부 지워지므로 세 계수를 함께 움직여야 한다."
    creative: "(1) ⑵를 (x-a)(x^2+ax+a^2) 세제곱 차로 (★2 유지) (2) 중간 항이 지워지지 않게 계수를 어긋내면 단순 계산량만 늘어 ★2 (3) '전개했더니 항이 두 개뿐인 이유'를 묻는 서술형으로 바꾸면 I-PD d1 ★3."
```

```yaml
- id: GN-M31-65-c1
  page: 65
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $(x+4y+1)(2x-y)$ 의 전개식이 $2x^2+axy+by^2+cx-y$ 일 때 $a+b+c$ 구하기.
  category: "전개 → 계수 비교 → 세 상수의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전개식의 계수 비교로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (삼항)×(이항)을 끝까지 전개한 뒤 xy, y^2, x 세 자리를 각각 대응시키는 표준 절차.
    미정계수가 셋이라 Ma 가 오르지만 판단 분기는 없다. 핵심문제 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "분배법칙 전개 → xy·y^2·x 계수 대응 → 세 값의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/65-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼항식·이항식의 계수를 바꿀 수 있음. 제약: 우변 형태(x^2 계수와 y 계수)가 고정돼 있으므로 좌변을 바꾸면 우변 제시식도 함께 고쳐야 하고, a·b·c 가 정수로 떨어지게 유지."
    creative: "(1) 묻는 조합을 a-b+c 나 abc 로 바꾸기(★2 유지) (2) 세 계수 중 하나만 묻고 전체 전개 없이 해당 항만 뽑게 하면 I-SC d1 ★2 (3) 좌변 일부를 미지수로 두고 우변에서 역추적하면 I-BW d2 ★3."
```

```yaml
- id: GN-M31-65-h2
  page: 65
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ 완전제곱식 전개하기. ⑵는 분수 계수, ⑶⑷는 앞 항이 음수.
  category: "완전제곱 공식 → 부호·분수 계수 처리"
  M: {s: 1, k: 2, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(a+b)^2$, $(a-b)^2$의 전개(음수·분수 계수 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    확인하기 64-02 와 같은 공식이지만 앞 항이 음수인 꼴(T-표기)과 분수 제곱(T-부호·T-단위)이
    더해져 함정이 둘. 핵심문제 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "괄호 전체를 (앞 항)+(뒤 항) 으로 보고 제곱 공식 대입 → 음수·분수 제곱 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x^2+12x+36$ ⑵ $\dfrac{1}{4}x^2-3x+9$ ⑶ $25x^2-20xy+4y^2$ ⑷ $16x^2+8xy+y^2$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/65-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 분모를 바꿀 수 있음. 제약: 분수 계수는 제곱했을 때 분모가 복잡해지지 않는 수(1/2, 1/3, 2/3)로 제한하고, 음수 앞 항 문항을 최소 하나는 남긴다."
    creative: "(1) 양쪽 다 음수인 $(-4x-y)^2$ 처럼 결과가 모두 양수가 되는 꼴을 섞기(★2 유지) (2) 같은 식을 두 가지 꼴로 쓰고 결과가 같은 이유를 묻기(I-SYM d1 ★2) (3) 전개식의 한 계수를 미지수로 두면 ★3."
```

```yaml
- id: GN-M31-65-c2
  page: 65
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    완전제곱식 전개 5개 중 옳지 않은 것 2개 고르기(5지선다 · 정답 2개).
  category: "선지별 전개 → 원식과 대조 → 오답 판별"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "완전제곱식 전개의 참·거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 선지를 각각 전개해 대조하는 반복 작업. 틀린 선지는 가운데 항 계수 누락과
    음수 앞 항의 제곱 부호(T-부호·T-표기) 두 가지로 설계돼 있다. 핵심문제 ★2 유지.
  tier: star_2
  mechanism_primary: "각 선지 좌변을 공식으로 전개 → 우변과 항별 대조 → 어긋난 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③, ④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/65-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선지의 계수를 바꿀 수 있음. 제약: 오답 선지는 '가운데 항 계수 틀림'과 '음수 앞 항 제곱의 부호 틀림' 두 오개념을 유지해야 하고, 정답 개수(2개)를 문두와 맞춘다."
    creative: "(1) 옳은 것을 고르게 뒤집기(★2 유지) (2) 틀린 선지를 바르게 고치는 서술형으로 (★3) (3) 합차·(x+a)(x+b) 선지를 섞으면 공식 선택까지 들어가 I-SC d1 ★2~3."
```

```yaml
- id: GN-M31-66-h3
  page: 66
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ 합차 공식으로 전개하기. ⑵는 분수 계수, ⑶은 앞 항이 음수, ⑷는 공통항이 뒤쪽.
  category: "부호가 반대인 항 찾기 → 제곱의 차"
  M: {s: 1, k: 2, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(a+b)(a-b)$의 전개(항의 순서·부호가 뒤바뀐 꼴 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑷처럼 공통인 항이 뒤에 있는 꼴은 항의 순서를 정리해 무엇이 같고 무엇이 반대인지
    먼저 가려야 한다. 순서 정리는 표준 절차라 통찰로 세지 않되 T-표기 함정으로 잡았다.
    핵심문제 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "두 괄호에서 같은 항·부호 반대인 항 식별 → (같은 항)^2 - (반대 항)^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $4x^2-49$ ⑵ $\dfrac{4}{9}x^2-y^2$ ⑶ $9x^2-16$ ⑷ $\dfrac{1}{4}y^2-\dfrac{1}{25}x^2$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/66-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수·분모를 바꿀 수 있음. 제약: 두 괄호가 한 항은 같고 한 항은 부호만 반대라는 관계를 반드시 유지(깨지면 합차 공식이 성립하지 않음)."
    creative: "(1) 공통항이 뒤에 오는 배치를 늘리기(★2 유지) (2) 세 괄호 곱으로 합차를 두 번 쓰게 하면 ★2~3(I-SC d1) (3) 합차를 수 계산(102×98)에 쓰게 하면 I-RT d1 ★2."
```

```yaml
- id: GN-M31-66-c3
  page: 66
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    합차 공식 전개 보기 ㄱ·ㄴ·ㄷ 중 옳은 것 모두 고르기.
  category: "보기별 전개 → 부호·순서 확인 → 참인 것 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "합차 공식 전개의 참·거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄴ·ㄷ 처럼 앞 항이 음수인 꼴에서 무엇이 공통항인지 뒤집어 보는 것이 판별의 전부.
    ㄷ 은 제곱의 차가 아니라 합으로 써 놓은 전형적 오답이다. 핵심문제 ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기에서 공통항·반대 부호 항 확인 → 제곱의 차로 정리 → 우변과 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/66-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 세 개의 계수를 바꿀 수 있음. 제약: 오답 보기는 '제곱의 차 대신 합'이라는 오개념을 유지하고, 참인 보기 개수를 답과 함께 고친다."
    creative: "(1) 보기를 네댓 개로 늘리고 완전제곱 보기를 섞기(★2) (2) 틀린 보기를 바로잡게 하는 서술형(★3) (3) 참인 보기 개수만 묻기(★2 유지)."
```

```yaml
- id: GN-M31-66-h4
  page: 66
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $(x+a)(x+b)$ 꼴 전개하기. ⑶은 분수 상수, ⑷는 두 문자.
  category: "합·곱 공식 → 일차항 계수 a+b, 상수항 ab"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(x+a)(x+b)$의 전개(분수·문자 계수 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    64-04 와 같은 공식에 분수 상수와 두 문자(x, y) 꼴이 더해진 정도. 부호 함정 하나.
    핵심문제 ★2 출발 · M_total 5 · 통찰 0 이라 ★1 로 내릴 여지가 있으나 1단 차이라 ★2 유지.
  tier: star_2
  mechanism_primary: "두 상수의 합을 x 계수로, 곱을 상수항으로(문자 계수면 y 차수 유지)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x^2-4x-21$ ⑵ $x^2-8x+12$ ⑶ $x^2+\dfrac{17}{2}x+4$ ⑷ $x^2-xy-20y^2$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/66-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수(또는 y 계수)를 바꿀 수 있음. 제약: 분수 상수는 합이 간단한 분수가 되게 고르고, 두 문자 문항은 y 차수가 2차가 되는 구조를 유지."
    creative: "(1) x 자리에 x^2 을 넣어 (x^2+a)(x^2+b) 로 (★2 · 치환) (2) 앞 계수를 1 이 아닌 수로 바꾸면 (ax+b)(cx+d) 유형으로 이동 (3) 전개 결과에서 상수항만 묻기(★2 · I-SC d1)."
```

```yaml
- id: GN-M31-66-c4
  page: 66
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $(x+3)(x-5)-2\left(x+\dfrac{1}{2}\right)(x+10)$ 을 계산하기.
  category: "두 곱을 각각 전개 → 상수배 분배 → 뺄셈 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 식의 계산(전개 후 동류항 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식은 같은 꼴 두 번. 실수 지점은 뒤 괄호에 곱해진 -2 를 세 항 전부에 분배하는
    부호 처리(T-부호)다. 핵심문제 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "두 곱을 각각 (x+a)(x+b) 공식으로 전개 → -2 를 전 항에 분배 → 동류항 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-x^2-23x-25$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/66-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곱의 상수와 앞의 계수 -2 를 바꿀 수 있음. 제약: 분수 상수와 곱해지는 계수가 서로 약분돼 정수 계수가 나오게 맞추고, x^2 계수가 상쇄되는지 여부를 의도적으로 정한다."
    creative: "(1) 앞 계수를 바꿔 x^2 항이 완전히 지워지게 설계하면 '몇 차식인가'까지 묻는 ★3 (2) 두 항을 완전제곱과 합차로 바꾸기(★2) (3) 계산 결과의 특정 계수만 묻기(★2 · I-SC d1)."
```

```yaml
- id: GN-M31-67-h5
  page: 67
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ $(ax+b)(cx+d)$ 꼴 전개하기. ⑶은 분수 계수, ⑷는 두 문자·음수 앞 항.
  category: "네 계수 공식 → x^2 계수 ac, x 계수 ad+bc, 상수항 bd"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(ax+b)(cx+d)$의 전개(분수·음수·두 문자 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    64-05 와 같은 공식에 분수 계수와 음수 앞 항이 붙은 정도. 가운데 항 ad+bc 의
    부호 합산(T-부호)이 유일한 함정이다. 핵심문제 ★2 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "ac, ad+bc, bd 세 자리를 각각 계산 → 부호 합산 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $10x^2-11x-6$ ⑵ $12x^2+5x-3$ ⑶ $x^2+4x+\dfrac{15}{4}$ ⑷ $-24x^2+62xy-35y^2$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/67-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수를 바꿀 수 있음. 제약: 분수 계수 문항은 곱했을 때 분모가 2~4 정도로 남게 하고, 두 문자 문항은 y 차수 2가 유지되게 한다."
    creative: "(1) 앞뒤 괄호를 모두 음수로 시작하게 만들기(★2 유지) (2) 가운데 항이 0 이 되는 계수 조합을 찾게 하면 I-BW d2 ★3 (3) 두 문항의 결과를 더해 정리하는 복합 계산으로 ★2."
```

```yaml
- id: GN-M31-67-c5
  page: 67
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $(2x+3)(5x+A)=10x^2+Bx-12$ 일 때 상수 $A$, $B$ 에 대하여 $A+B$ 구하기.
  category: "상수항 비교로 A 결정 → x 계수로 B 결정 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전개식의 계수 비교로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항 3A=-12 로 A 를 먼저 고정한 뒤 그 값을 가운데 항에 넣어 B 를 얻는 두 단계.
    미정계수 직접 대입은 표준 절차라 통찰로 세지 않는다. 핵심문제 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "상수항 비교 → A 결정 → x 계수 비교 → B 결정 → A+B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/67-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 고정 계수 2, 3, 5 와 우변 상수항을 바꿀 수 있음. 제약: 상수항이 3으로 나누어떨어져 A 가 정수가 되게 하고 x^2 계수(10)가 좌변 곱과 일치하게 유지."
    creative: "(1) 미지수를 x 계수 쪽에 두고 상수항을 되묻는 역배치(★2) (2) A 가 두 값 가능하도록 조건을 느슨하게 하면 I-MI d2 ★3 (3) A, B 를 묻는 대신 전개식이 완전제곱이 될 조건을 묻기(I-BW d2 ★3)."
```

```yaml
- id: GN-M31-67-h6
  page: 67
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    가로 $8x$, 세로 $5x$ 인 직사각형에서 가로를 $3$ 늘이고 세로를 $1$ 줄여 만든 직사각형의 넓이 구하기.
  category: "도형 조건 → 변의 길이 식 → 곱셈 공식 전개"
  M: {s: 1, k: 2, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "늘이고 줄인 길이를 (8x+3), (5x-1) 두 일차식으로 옮겨 넓이를 곱으로 표현"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곱셈 공식의 도형에의 활용(변의 길이 변화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도형 말을 식으로 옮기는 한 단계(I-RT d1)만 통과하면 나머지는 $(ax+b)(cx+d)$ 전개.
    '늘이면 +, 줄이면 -' 부호(T-부호)가 함정. 핵심문제 ★2 · 통찰 1 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "변형 후 가로·세로를 일차식으로 쓰기 → 두 식의 곱을 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$40x^2+7x-3$'
  answer_source: "본문 답"
  figure: "crop:fig-67-h6.png"
  latex: latex-bank/gn-m31/items/67-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 변의 계수(8, 5)와 늘이고 줄인 길이(3, 1)를 바꿀 수 있음. 제약: 줄인 뒤에도 변의 길이가 양수여야 하고(5x-1 에서 x 가 충분히 큼), 그림 라벨은 식과 함께 고쳐야 한다."
    creative: "(1) 가로·세로를 모두 늘리거나 모두 줄이기(★2 유지) (2) 넓이의 증가량만 묻게 하면 차를 구하는 한 단계가 더 붙어 ★2~3 (3) 넓이가 원래와 같아지는 조건을 묻기(I-BW d2 ★3) (4) 정사각형에서 출발하면 70-05 꼴."
```

```yaml
- id: GN-M31-67-c6
  page: 67
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    가로 $5a$, 세로 $3a$ 인 직사각형 꽃밭에 폭 $2$ 인 길을 냈을 때 길을 제외한 꽃밭의 넓이 구하기.
  category: "길 이동으로 직사각형 환원 → 두 일차식의 곱 전개"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "길을 가장자리로 밀어 붙여 남은 꽃밭을 (5a-2)(3a-2) 한 개의 직사각형으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "길을 낸 도형의 넓이(길 이동으로 직사각형 환원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    길을 그대로 두고 조각 넓이를 더하면 계산이 길어지고, 길을 밀어 붙여 하나의 직사각형으로
    보면 곱 한 번으로 끝난다. 이 환원 착안이 이 문항의 전부(I-RT d2).
    확인문제 출발 ★2 + 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "길을 가장자리로 이동 → 남은 꽃밭 (5a-2)(3a-2) → 전개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15a^2-16a+4$'
  answer_source: "답지"
  figure: "crop:fig-67-c6.png"
  latex: latex-bank/gn-m31/items/67-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꽃밭 변의 계수(5, 3)와 길의 폭(2)을 바꿀 수 있음. 제약: 길의 폭이 변의 길이보다 작아야 하고(5a-2>0), 가로·세로 길이 각각 길 하나씩이라는 그림 구조와 라벨을 식과 일치시켜야 한다."
    creative: "(1) 길의 폭을 가로·세로 다르게 주면 (5a-p)(3a-q) 로 확장(★3 유지) (2) 길을 두 줄로 늘리면 폭의 합으로 환원하는 한 단계 추가(★3~4) (3) 길이 비스듬하면 환원이 안 되므로 골조가 무너짐 — 직선·일정 폭 조건은 유지 (4) 꽃밭 넓이를 주고 길의 폭을 되묻기(I-BW d2 ★4)."
```

```yaml
- id: GN-M31-68-h7
  page: 68
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ $(2x-3y+6)(2x-3y-4)$ ⑵ $(3x-y+4)(3x+y-4)$ 를 전개하기.
  category: "공통부분 치환 → 곱셈 공식 → 되돌려 정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵에서 -y+4 와 y-4 가 부호만 반대임을 보고 3x 를 공통항으로 묶어 합차 꼴로 고쳐 씀"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통부분이 있는 식의 전개(치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 2x-3y 를 A 로 두면 (A+6)(A-4) 한 줄, ⑵는 묶는 자리를 3x 쪽으로 잡아야
    합차가 보인다. 묶을 덩어리를 고르는 동치 변환(I-EQV d1)이 핵심이고 되돌릴 때
    완전제곱 전개가 한 번 더 붙는다. 핵심문제 ★2 · 통찰 1 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "공통부분을 A 로 치환 → (A+p)(A+q) 또는 합차 공식 → A 를 되돌려 완전제곱 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $4x^2-12xy+9y^2+4x-6y-24$ ⑵ $9x^2-y^2+8y-16$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/68-h7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분의 계수(2x-3y, 3x)와 뒤에 붙는 상수(6, -4)를 바꿀 수 있음. 제약: 두 괄호에서 공통이 되는 덩어리가 글자 그대로 같아야 하고(⑵는 부호만 반대), 되돌린 뒤 완전제곱 전개가 정수 계수로 떨어지게 유지."
    creative: "(1) 두 괄호의 상수를 같게 해 $(A+p)^2$ 꼴로 만들기(★2 유지) (2) 공통부분이 두 군데 생기도록 네 항 식으로 늘리면 묶는 자리 선택이 생겨 I-SC d2 ★3 (3) 전개식의 특정 계수만 묻기(★2~3)."
```

```yaml
- id: GN-M31-68-c7
  page: 68
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴ $(x+y+5)(x+y-5)$ ⑵ $(2a-b+1)(2a-b-2)$ 를 전개하기.
  category: "공통부분 치환 → 합차 또는 (A+a)(A+b) → 되돌려 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x+y, 2a-b 를 한 덩어리 A 로 보아 두 괄호를 A 에 대한 곱셈 공식 꼴로 고쳐 씀"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통부분이 있는 식의 전개(치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    68-h7 과 같은 골조인데 공통부분이 앞에 그대로 드러나 있어 찾는 부담이 더 작다.
    ⑴은 합차라 A^2-25 한 줄, ⑵는 (A+1)(A-2) 뒤 완전제곱 되돌리기.
    확인문제 ★2 · 통찰 1 d1 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "공통부분 A 치환 → 합차 또는 (A+a)(A+b) 전개 → A 되돌려 완전제곱 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x^2+2xy+y^2-25$ ⑵ $4a^2-4ab+b^2-2a+b-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/68-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분의 계수와 뒤 상수(5, -5, 1, -2)를 바꿀 수 있음. 제약: 합차 문항은 두 상수가 부호만 반대여야 하고, 되돌린 완전제곱 계수가 정수로 남게 유지."
    creative: "(1) 공통부분을 세 문자(x+y+z)로 늘리기(★2~3) (2) 두 괄호의 공통부분이 부호까지 반대라 한 번 정리해야 보이게 만들면 ★3 (3) 전개식이 이차식이 될 조건을 묻기(I-BW d2 ★3)."
```

```yaml
- id: GN-M31-68-h8
  page: 68
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    $(x-1)(x+2)(x+4)(x+7)$ 을 전개하기.
  category: "상수의 합이 같도록 짝 짓기 → 공통부분 치환 → 전개"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "네 괄호를 아무렇게나 곱하면 4차 전개가 길어지므로 상수의 합이 같은 짝((-1)+7=2+4)을 골라 묶는 전략을 선택"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 짝의 곱에서 공통으로 나온 x^2+6x 를 A 로 두어 (A-7)(A+8) 한 줄로 축약"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "네 일차식 곱의 전개(공통부분이 생기도록 짝 짓기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    짝을 잘못 고르면 공통부분이 생기지 않아 그냥 4차 전개가 된다. 상수의 합을 맞춰
    짝을 고르는 전략 선택(I-SC d2)과 공통부분 치환(I-EQV d1) 두 통찰.
    핵심문제 ★2 + 태그 UP(+1) · 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: "상수 합이 같은 짝으로 묶기 → 공통부분 x^2+6x=A 치환 → (A-7)(A+8) 전개 → 되돌리기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x^4+12x^3+37x^2+6x-56$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/68-h8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 상수를 바꿀 수 있음. 제약: 두 쌍으로 나눴을 때 각 쌍의 상수 합이 서로 같아야 공통부분이 생긴다(여기서는 -1+7=2+4=6). 이 관계가 깨지면 골조 자체가 사라지므로 네 수를 함께 설계해야 한다."
    creative: "(1) 상수의 합이 같은 짝이 두 가지로 만들어지게 하면 선택 분기가 늘어 ★3 유지 (2) 전개식 전체 대신 특정 계수만 묻기(68-c8 꼴 ★3) (3) 네 상수를 등차로 놓고 일반형을 묻는 서술형(I-PD d2 ★4) (4) 짝을 잘못 고른 풀이를 제시하고 무엇이 문제인지 설명하게 하면 ★3~4."
```

```yaml
- id: GN-M31-68-c8
  page: 68
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $(x+3)(x-2)(x+1)(x-4)$ 를 전개한 식에서 $x^2$ 의 계수와 상수항의 합 구하기.
  category: "짝 짓기 → 공통부분 치환 → 필요한 계수만 추출"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "상수 합이 같은 짝(3+(-4)=(-2)+1)을 골라 공통부분 x^2-x 가 나오도록 묶는 전략 선택"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A=x^2-x 로 두고 (A-12)(A-2) 를 A 의 이차식으로 정리한 뒤 필요한 두 자리(x^2 계수·상수항)만 추출"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "네 일차식 곱의 전개에서 특정 계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    68-h8 의 골조에 '전부 전개하지 않고 두 자리만 본다'는 절약이 더해진 문항.
    A^2 에서 나오는 x^2 항과 A 의 일차항에서 나오는 x^2 항을 모두 챙겨야 하는 것이
    실수 지점(T-단위·차수 혼동). 확인문제 ★2 + 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: "상수 합이 같은 짝으로 묶기 → A=x^2-x 치환 → A 의 이차식 정리 → x^2 계수와 상수항만 합산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/68-c8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 상수를 바꿀 수 있음. 제약: 두 쌍의 상수 합이 같아야 공통부분이 생긴다(3+(-4)=(-2)+1=-1). 묻는 계수가 A^2 항과 A 항 양쪽에서 나오는 자리(x^2)로 남게 유지해야 문항의 함정이 보존된다."
    creative: "(1) 묻는 대상을 x^3 계수나 x 계수로 바꾸기(★3 유지, x^3·x 는 한 곳에서만 나와 다소 쉬움) (2) 모든 계수의 합을 묻고 x=1 대입으로 푸는 길을 열면 I-SC d3 ★4 (3) 상수항만 묻게 하면 각 괄호의 상수 곱 한 줄이라 ★2 로 내려감."
```

### 계산력 강화하기

```yaml
- id: GN-M31-69-01
  page: 69
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ 분배법칙으로 전개하기. ⑶⑷는 (이항)×(삼항), (삼항)×(이항).
  category: "분배법칙 → 항별 곱 → 동류항 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(다항식)×(다항식)의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    항 수가 여섯까지 늘어 빠뜨리기 쉬울 뿐 판단은 없다. 계산력 강화 구역·통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "분배법칙으로 항별 곱 전개 → 동류항 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $ab-2a+8b-16$ ⑵ $4xy+12x-y-3$ ⑶ $2a^2-9ab+2a-5b^2+b$ ⑷ $-3x^2+5xy-2y^2+12x-8y$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/69-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수를 자유롭게 바꿀 수 있음. 제약: 동류항이 생기는 문항과 생기지 않는 문항을 구분해 배치하고 항 수가 여섯을 넘지 않게 유지."
    creative: "(1) 세 다항식의 곱으로 늘리기(Mk만 상승, ★1~2) (2) 전개식의 특정 항 계수만 묻기(★2) (3) 전개 결과를 주고 빠진 괄호를 복원하게 하면 ★2~3."
```

```yaml
- id: GN-M31-69-02
  page: 69
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ 완전제곱식 전개하기. ⑶⑷는 음수 앞 항·분수 계수.
  category: "완전제곱 공식 → 부호·계수 제곱 처리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(a+b)^2$, $(a-b)^2$의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 한 줄 대입 드릴. 음수 앞 항의 제곱이 양수가 되는 처리(T-부호)만 주의.
    계산력 강화 구역 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "완전제곱 공식 대입 → 제곱항과 2ab 항의 부호 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $9a^2+12a+4$ ⑵ $25x^2-40x+16$ ⑶ $4a^2+4ab+b^2$ ⑷ $36x^2-4xy+\dfrac{1}{9}y^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/69-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 분모를 바꿀 수 있음. 제약: 제곱과 2ab 가 정수 또는 간단한 분수로 떨어지게 하고, 음수 앞 항 문항을 하나 이상 남긴다."
    creative: "(1) 두 항 모두 음수인 꼴 추가(★1 유지) (2) 세 항의 제곱 (a+b+c)^2 으로 확장하면 ★2~3 (3) 전개식 중 가운데 항만 묻기(★2)."
```

```yaml
- id: GN-M31-69-03
  page: 69
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ 합차 공식으로 전개하기. ⑵~⑷는 항의 순서·부호가 뒤바뀐 꼴.
  category: "공통항·반대 부호 항 식별 → 제곱의 차"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(a+b)(a-b)$의 전개(순서가 뒤바뀐 꼴 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑵ (-x+1/2)(x+1/2) 처럼 공통항이 뒤에 있는 배치가 함정(T-표기·T-부호) 둘.
    항 순서를 정리해 무엇을 제곱할지 가리면 한 줄. 계산력 강화 구역 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "같은 항·부호 반대인 항을 가려낸 뒤 (같은 항)^2 - (반대 항)^2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $16a^2-49$ ⑵ $\dfrac{1}{4}-x^2$ ⑶ $9a^2-64b^2$ ⑷ $81x^2-25y^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/69-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수를 바꿀 수 있음. 제약: 두 괄호가 한 항은 같고 한 항은 부호만 반대라는 관계를 반드시 유지."
    creative: "(1) 순서를 더 어긋내 공통항을 찾기 어렵게 배치(★1~2) (2) 합차를 두 번 연속 적용하는 꼴(70-03 유형 ★2) (3) 수 계산(97×103)으로 옮기면 I-RT d1 ★2."
```

```yaml
- id: GN-M31-69-04
  page: 69
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ $(x+a)(x+b)$ 꼴 전개하기. ⑶⑷는 두 문자·분수 계수.
  category: "합·곱 공식 → 일차항 계수 a+b, 상수항 ab"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(x+a)(x+b)$의 전개(분수·문자 계수 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 상수의 합과 곱만 계산하면 끝. ⑷의 분수 합(3/2 - 1/3)이 계산 부담의 전부.
    계산력 강화 구역 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "두 상수의 합을 일차항 계수로, 곱을 상수항으로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a^2-10a+9$ ⑵ $x^2-2x-35$ ⑶ $a^2+6ab+8b^2$ ⑷ $x^2+\dfrac{7}{6}xy-\dfrac{1}{2}y^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/69-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수(또는 y 계수)를 바꿀 수 있음. 제약: 분수 문항은 합의 분모가 6 이하로 남게 고르고 부호 조합을 골고루 배치."
    creative: "(1) 두 상수의 합이 0 이 되게 하면 합차 꼴로 되돌아감(★1) (2) x 자리에 x^2 을 넣어 치환 유형으로(★2) (3) 전개식에서 상수항만 묻기(★2)."
```

```yaml
- id: GN-M31-69-05
  page: 69
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ $(ax+b)(cx+d)$ 꼴 전개하기. ⑷는 음수 앞 항·분수 계수.
  category: "네 계수 공식 → x^2 계수 ac, x 계수 ad+bc, 상수항 bd"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$(ax+b)(cx+d)$의 전개"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    가운데 항 ad+bc 의 두 곱을 부호까지 맞춰 더하는 것이 전부. 판단 분기 없음.
    계산력 강화 구역 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "ac, ad+bc, bd 세 자리를 각각 계산해 채우기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6a^2-7a-10$ ⑵ $10x^2+13x-3$ ⑶ $9a^2-18ab+8b^2$ ⑷ $-8x^2+2xy+\dfrac{3}{8}y^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/69-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 계수를 바꿀 수 있음. 제약: 분수 계수는 곱했을 때 분모가 8 이하로 남게 하고, 가운데 항이 의도치 않게 0 이 되지 않게 확인."
    creative: "(1) 두 문자 꼴로 확장(★1 유지) (2) x^2 계수가 음수가 되게 앞 항을 뒤집기(★1~2) (3) 가운데 항 계수가 주어진 값이 되도록 계수를 되찾게 하면 I-BW d2 ★3."
```

```yaml
- id: GN-M31-69-06
  page: 69
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력 강화하기"
  summary: |
    ⑴~⑷ 두 개의 곱셈 공식 결과를 더하거나 빼서 계산하기.
  category: "각 항 전개 → 부호 분배 → 동류항 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식을 이용한 식의 계산(전개 후 동류항 정리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 두 개를 연달아 쓴 뒤 빼기에서 부호를 전 항에 분배하는 것(T-부호)이 유일한 실수 지점.
    ⑷처럼 이차항이 모두 지워져 한 항만 남는 배치가 있지만 절차는 같다.
    계산력 강화 구역 · 통찰 0 · M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "두 곱을 각각 공식으로 전개 → 뺄셈 부호 분배 → 동류항 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2a^2+8a+15$ ⑵ $-x+7$ ⑶ $5a^2-5a-21$ ⑷ $10xy$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/69-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 곱의 계수를 바꿀 수 있음. 제약: 이차항이 지워지는 문항과 남는 문항을 의도적으로 섞고, 빼는 쪽 괄호를 반드시 하나 이상 둔다."
    creative: "(1) 세 개의 곱을 더하고 빼는 꼴로 늘리기(★1~2) (2) 계산 결과가 상수가 되도록 설계하면 '몇 차식인가'를 묻는 ★2 (3) 계산 결과가 0 이 되는 계수를 찾게 하면 I-BW d2 ★3."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-70-01
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $(4x+5y-1)(x-3y)$ 를 전개한 식에서 $xy$ 의 계수 구하기.
  category: "xy 항이 되는 곱만 골라 더하기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전부 전개하는 대신 xy 항을 만드는 두 곱(4x×(-3y), 5y×x)만 골라 더하는 길을 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "전개식에서 특정 항의 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전부 전개해도 풀리지만 필요한 두 곱만 뽑으면 한 줄이다(I-SC d1).
    빠뜨리기 쉬운 것은 두 곱 중 하나를 놓치는 것과 부호(T-부호).
    시험 대비 구역 ★2~3 출발 · 단일 단계 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "xy 가 생기는 항의 곱만 추출 → 계수 합산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/70-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼항식·이항식의 계수를 바꿀 수 있음. 제약: 묻는 항(xy)이 두 개 이상의 곱에서 생겨야 '하나를 빠뜨리는' 함정이 살아 있다."
    creative: "(1) 묻는 대상을 x 계수나 상수항으로 바꾸기(★2 유지) (2) 두 계수의 합·차를 묻게 하면 추출을 두 번 해야 해 ★2~3 (3) xy 계수가 0 이 되는 미정계수를 찾게 하면 I-BW d2 ★3."
```

```yaml
- id: GN-M31-70-02
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    완전제곱·합차 공식 전개 5개 중 옳지 않은 것 고르기(5지선다).
  category: "선지별 전개 → 원식과 대조 → 오답 판별"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱셈 공식 전개의 참·거짓 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선지마다 공식이 달라 어떤 공식을 쓸지 고르는 부담이 있지만 각각은 한 줄 전개.
    오답 선지는 음수 앞 항의 합차에서 제곱의 차를 합으로 잘못 쓴 꼴(T-부호·T-표기).
    시험 대비 구역 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "선지별로 알맞은 공식 선택 → 전개 → 우변과 항별 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/70-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선지의 계수를 바꿀 수 있음. 제약: 오답 선지는 하나만 남기고, 네 공식이 고루 등장하도록 선지를 배치."
    creative: "(1) 옳은 것을 고르게 뒤집기(★2 유지) (2) 오답 선지를 둘로 늘리기(65-c2 꼴 ★2) (3) 틀린 곳을 찾아 바르게 고치는 서술형(★3)."
```

```yaml
- id: GN-M31-70-03
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $(x-1)(x+1)(x^2+1)=x^a-1$ 일 때 상수 $a$ 의 값 구하기.
  category: "합차 공식 연속 적용 → 지수 비교"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "앞의 두 괄호를 먼저 묶어 x^2-1 을 만들면 다시 합차 꼴이 되는 순서를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합차 공식의 연속 적용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묶는 순서를 앞 두 괄호로 잡아야 합차가 연쇄로 이어진다(I-SC d1). 순서를 달리 잡으면
    3차식 곱이 되어 길어진다. 그 뒤는 지수 비교 한 줄. 시험 대비 구역 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "앞 두 괄호를 합차로 묶기 → 다시 합차 적용 → x^4-1 과 지수 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/70-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 수와 차수를 바꿀 수 있음. 제약: (x-1)(x+1)(x^2+1)(x^4+1) 처럼 합차가 계속 이어지도록 각 단계의 차수가 두 배씩 올라가는 구조를 유지해야 한다."
    creative: "(1) 괄호를 하나 더 붙여 x^8-1 로 만들면 규칙 발견이 붙어 I-PD d2 ★3 (2) 밑을 2 로 바꿔 수의 계산으로 옮기면 I-RT d2 ★3 (3) (x-1) 을 빼고 (x+1)(x^2+1) 만 주면 합차가 끊겨 골조가 사라짐."
```

```yaml
- id: GN-M31-70-04
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $(Ax-15)(x+3)$ 의 전개식에서 $x$ 의 계수와 상수항이 같을 때 상수 $A$ 구하기.
  category: "전개 → 두 계수를 같게 놓기 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전개식의 계수 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A 를 남긴 채 전개해 x 계수(3A-15)와 상수항(-45)을 만든 뒤 같다고 놓는 표준 절차.
    미정계수 직접 대입은 통찰로 세지 않는다. 시험 대비 구역 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "A 를 남기고 전개 → x 계수 = 상수항 방정식 → A 풀기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/70-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 -15, 3 을 바꿀 수 있음. 제약: 세운 일차방정식의 해 A 가 정수로 떨어지게 두 상수를 함께 고른다."
    creative: "(1) 조건을 'x 계수가 상수항의 2배'로 바꾸기(★2 유지) (2) 미지수를 두 자리에 넣어 조건 둘로 연립하면 ★3 (3) 전개식이 완전제곱식이 될 A 를 묻기(I-BW d2 ★3)."
```

```yaml
- id: GN-M31-70-05
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    한 변의 길이가 $x$ 인 정사각형에서 가로를 $3$ 줄이고 세로를 $5$ 늘여 만든 직사각형의 넓이 구하기.
  category: "도형 조건 → 변의 길이 식 → (x+a)(x+b) 전개"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "줄이고 늘인 변의 길이를 (x-3), (x+5) 로 옮겨 넓이를 두 일차식의 곱으로 표현"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곱셈 공식의 도형에의 활용(변의 길이 변화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도형 말을 식으로 옮기는 한 단계(I-RT d1) 뒤에는 $(x+a)(x+b)$ 한 줄.
    '줄이면 -, 늘이면 +' 부호(T-부호)가 함정. 시험 대비 구역 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "변형 후 가로·세로를 (x-3), (x+5) 로 쓰기 → 곱 전개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x^2+2x-15$'
  answer_source: "답지"
  figure: "crop:fig-70-05.png"
  latex: latex-bank/gn-m31/items/70-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "줄인 길이 3 과 늘인 길이 5 를 바꿀 수 있음. 제약: 줄인 뒤에도 가로가 양수여야 하고(x>3), 그림의 라벨을 식과 함께 고쳐야 한다."
    creative: "(1) 둘 다 늘이거나 둘 다 줄이기(★2 유지) (2) 넓이의 변화량(원래 넓이와의 차)을 묻게 하면 한 단계 추가 ★2~3 (3) 넓이가 원래 정사각형과 같아지는 조건을 묻기(I-BW d2 ★3) (4) 정사각형 대신 직사각형에서 출발하면 67-h6 꼴."
```

```yaml
- id: GN-M31-70-06
  page: 70
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $(2x-3y+1)^2=4x^2+axy+9y^2+bx+cy+1$ 일 때 상수 $a$, $b$, $c$ 에 대하여 $a+b-c$ 구하기.
  category: "삼항식 제곱 전개 → 계수 비교 → 부호 조합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 항 중 둘을 한 덩어리로 묶어 (A+1)^2 꼴로 고쳐 쓴 뒤 완전제곱을 두 번 적용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼항식의 완전제곱 전개와 계수 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 항씩 묶어 완전제곱을 두 번 쓰거나 (a+b+c)^2 공식을 알아야 하고, 교차항이 세 개
    생겨 부호를 모두 맞춰야 한다. 마지막에 a+b-c 로 다시 부호를 꼬아 놓은 것이 함정
    (T-부호 · T-표기). 시험 대비 구역 ★2~3 출발 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "2x-3y 를 A 로 묶어 (A+1)^2 전개 → A^2 을 다시 완전제곱으로 → xy·x·y 계수 비교 → a+b-c"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/70-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 항의 계수(2, -3, 1)를 바꿀 수 있음. 제약: 우변에 고정으로 적힌 4x^2, 9y^2, 1 을 함께 고쳐야 하고, 부호를 바꾸면 a·b·c 의 부호가 모두 따라 움직이므로 묻는 조합(a+b-c)의 의도를 다시 확인해야 한다."
    creative: "(1) 묻는 조합을 abc 나 a-b+c 로 바꾸기(★3 유지) (2) 세 항 중 하나를 미지수로 두고 a 값을 주어 역추적하게 하면 I-BW d2 ★4 (3) 네 항의 제곱으로 늘리면 교차항이 여섯 개가 되어 ★4 (4) 계수 하나만 묻게 하면 부분 추출로 ★2."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 11 · ★2 18 · ★3 4 · ★4 0 · ★5 0
- 통찰형 3(67-c6 · 68-h8 · 68-c8) · 절차형 30 · premium 0
- 통찰 라벨이 붙은 문항은 10개(I-RT 3 · I-EQV 4 · I-SC 3). 나머지 23문은 공식 적용 드릴로 통찰 0.
- type_hint 상위 5: 「(다항식)×(다항식)의 전개」 3 · 「$(a+b)^2$, $(a-b)^2$의 전개」 3 · 「$(a+b)(a-b)$의 전개」 3 · 「$(x+a)(x+b)$의 전개」 3 · 「$(ax+b)(cx+d)$의 전개」 3
- 구역별: 개념원리 확인하기 5(모두 ★1) · 핵심문제 익히기 16(★2 13 · ★3 3) · 계산력 강화하기 6(모두 ★1) · 이런 문제가 시험에 나온다 6(★2 5 · ★3 1)
- 그림: 3문(`crop:fig-67-h6.png` · `crop:fig-67-c6.png` · `crop:fig-70-05.png`) — 모두 발문에 도형 구조와 치수가 적혀 있어 크롭 없이도 골조가 결정된다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-66-h4 | 핵심문제 구역이지만 확인하기 64-04 와 공식·계수 난도가 사실상 같음(통찰 0 · M_total 5). 구역 신호를 존중해 ★2 로 두었으나 실질은 ★1 | ★1 / ★2 |
| GN-M31-67-c6 | 확인문제 구역(★2 출발)이나 '길을 밀어 붙이는' 환원 착안이 없으면 풀이가 크게 길어져 d2 통찰로 보고 ★3 으로 올림 | ★2 / ★3 |
| GN-M31-69-06 | 계산력 강화 구역이라 ★1 이지만 공식 두 개 연달아 + 뺄셈 분배로 M_total 6 이라 핵심문제의 66-c4(★2)와 골조가 같음 | ★1 / ★2 |
| GN-M31-70-01 | 「전부 전개」와 「해당 항만 추출」 두 갈래가 있어 I-SC 를 달았으나, 중3 단계에서는 전부 전개가 표준 풀이라 통찰로 세지 않을 여지도 있음 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 type_hint 는 네 공식의 단순 적용 드릴 5종(「(다항식)×(다항식)」 · 「$(a\pm b)^2$」 · 「$(a+b)(a-b)$」 · 「$(x+a)(x+b)$」 · 「$(ax+b)(cx+d)$」)이고, 구역만 다를 뿐 골조가 같은 문항이 세 벌씩(확인하기 · 핵심문제 · 계산력 강화) 있다. 카탈로그에서는 **한 유형으로 통합하고 난이도 변주(음수 앞 항 · 분수 계수 · 두 문자)를 속성으로 두는 편**이 낫다.
- 따로 세워야 할 유형: ① 「공통부분 치환 전개」(68-h7 · 68-c7 · 70-06) ② 「네 일차식 곱의 짝 짓기」(68-h8 · 68-c8 — 짝을 고르는 전략이 유형의 본질이라 ①과 분리) ③ 「곱셈 공식의 도형 활용」(67-h6 · 70-05 = 변의 증감 / 67-c6 = 길 환원 — 뒤쪽은 별도 하위 유형) ④ 「전개식의 계수 비교·미정계수」(65-c1 · 67-c5 · 70-04 · 70-06) ⑤ 「특정 항의 계수만 추출」(70-01 · 68-c8).
- 통합해도 될 유형: 참·거짓 판별(65-c2 · 66-c3 · 70-02)은 묻는 공식만 다를 뿐 '선지별 전개 후 대조'로 같은 유형이다.

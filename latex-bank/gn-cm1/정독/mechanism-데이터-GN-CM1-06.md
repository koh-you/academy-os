---
name: mechanism-데이터-GN-CM1-06
description: 개념원리 공통수학1 06 항등식(1/1 · 40~46쪽 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 06 항등식
  unit_code: GN-CM1-06
  part: "1/1"
  extract_range: "40~46쪽 · 40-61~46-84"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·tag)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 평균. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학1 · 06 항등식 (1/1) 정독 데이터 (v1.0)

40~46쪽 「06 항등식」 전체 28문항이다. 구역은 개념원리 익히기 3문 · 필수·발전 예제(필수 예제 3 · 발전 예제 1 · 딸림 확인체크 9) 13문 · 연습문제 STEP 1 4문 · STEP 2 5문 · 실력 UP 3문. 그림 문항은 없다.

벤더 난이도 신호는 구역과 tag 다. 「개념원리 익히기」는 개념 확인 → ★1 출발, 「필수 예제」와 그 딸림 「확인체크」는 ★2 출발, 「발전 예제」와 그 딸림 확인체크는 ★3 출발, 연습문제는 level 에 따라 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이다. 여기에서 M_total·통찰로 ±1 조정했다.

이 단원의 통찰 판정 기준을 한 줄로 못박는다: **「계수비교법·수치대입법으로 미정계수를 구한다」는 이 단원이 직접 가르치는 표준 절차이므로 통찰로 세지 않는다.** 통찰은 발문 조건을 항등식으로 **바꿔 읽어야** 하는 단계(변수와 상수의 역할 바꾸기 · 제약식으로 변수 소거 · 분수식이 일정 ⇔ 분자=k·분모 · 미지 다항식의 특정 값만 뽑기 · 나머지 차수 조건)와, 전개·계수비교 대신 **현저히 빠른 갈래를 골라야** 하는 단계(조립제법 반복 · x=1, -1 대입으로 계수합 추출)에만 매겼다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-40-61
  page: 40
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ㄱ~ㅂ 여섯 등식 중 x에 대한 항등식인 것을 모두 고르기.
  category: "양변 전개·정리 → 모든 x에서 같은지 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항등식의 뜻과 판별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기마다 한쪽을 전개해 항별로 대조하면 끝난다. 항등식의 정의 확인 한 단계뿐이고
    ㅁ처럼 한 항만 어긋나는 보기가 함정이다.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "각 보기 전개 → 계수·상수항 대조 → 모든 항이 일치하는 것만 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: 'ㄷ, ㄹ, ㅂ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/40-61.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수·상수항. 제약: 항등식인 보기와 아닌 보기가 섞여야 하고, 아닌 보기는 한 항만 어긋나게 해 전개 없이는 못 고르게 한다."
    creative: "(1) 「항등식이 아닌 것」으로 뒤집기(★1 유지) (2) 보기에 x, y 두 문자 등식을 섞기(★2) (3) 항등식이 되도록 빈 상수를 채우게 하면 계수비교법 문제로 이동(★2)."
```

```yaml
- id: GN-CM1-40-62
  page: 40
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 각 등식이 x에 대한 항등식이 되도록 하는 상수 a, b, c 의 값 구하기.
  category: "양변을 x 내림차순 정리 → 동차항 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수비교법으로 미정계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 소문항 모두 이차항·일차항·상수항 계수를 각각 0 또는 우변 계수와 같게 두면 곧바로 값이 나온다.
    ⑵의 b는 2b-1=0 에서 분수가 되는 정도가 유일한 계산 부담이다.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "양변 내림차순 정리 → x^2·x·상수 계수 각각 등치 → a, b, c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a=1$, $b=-1$, $c=0$ \quad ⑵ $a=2$, $b=\dfrac{1}{2}$, $c=-9$ \quad ⑶ $a=1$, $b=1$, $c=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/40-62.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 계수와 상수항, 좌변 괄호 안의 상수. 제약: 세 계수가 서로 독립으로 결정돼야 하고(한 계수가 두 식에 걸치지 않게), 답이 정수나 간단한 분수로 떨어지게 한다."
    creative: "(1) 우변을 0이 아닌 일차식으로 바꿔 상수항까지 비교하게 하기(★1 유지) (2) 미정계수를 두 개로 줄이고 값 하나를 더 묻기(ab, a+b 꼴 · ★2) (3) 「항등식이 되도록」을 「모든 실수 x에 대하여」로 바꿔 표현만 달리하기(★1)."
```

```yaml
- id: GN-CM1-40-63
  page: 40
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ a, b 가 곱해진 두 일차식의 합이 주어진 일차식과 항등식일 때 상수 a, b 구하기.
  category: "좌변을 x 내림차순 정리 → 계수·상수항 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수비교법으로 미정계수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    좌변을 x로 묶어 (a+b)x + (a-2b) 꼴로 정리하고 우변과 계수를 맞추면 이원일차 연립이다.
    ⑵는 마이너스 부호 처리가 유일한 함정(T-부호).
    익히기 구역 ★1 출발 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "좌변 x로 묶기 → x 계수·상수항 두 식 연립 → a, b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a=-2$, $b=3$ \quad ⑵ $a=-2$, $b=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/40-63.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 괄호 안의 계수와 우변 일차식. 제약: 연립의 해가 정수로 떨어지도록 두 일차식이 일차독립이어야 한다(계수 행렬식 0 금지)."
    creative: "(1) x=2, x=-1 을 대입하는 수치대입법이 더 빠르게 계수를 잡기(★1~2 · I-EQV 진입) (2) 괄호를 이차식으로 올려 미정계수 3개로(★2) (3) 「a+b의 값」만 묻게 해 연립 없이 x=1 대입으로 끝나게 하기(★2 · I-SC)."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-41-e1
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 삼차 등식이 x에 대한 항등식일 때 상수 a, b, c 구하기. ⑴은 곱을 전개하는 꼴, ⑵는 인수의 곱 세 개로 분해된 꼴.
  category: "⑴ 전개 후 계수비교 → ⑵ 항이 사라지는 x값 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수치대입법으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 두 표준 도구(계수비교법·수치대입법)를 나란히 보여 주는 필수 예제다.
    ⑵에서 x=0, 2, -1 을 넣으면 세 항 중 둘이 매번 사라져 한 줄로 a, b, c 가 나온다.
    도구 선택이 예제 제목에 이미 제시돼 있어 통찰로 세지 않았다. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "⑴ 좌변 전개 → 계수비교 / ⑵ 괄호가 0이 되는 x 대입 → a, b, c 분리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=-1$, $b=-2$, $c=3$ \quad ⑵ $a=1$, $b=2$, $c=-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/41-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵의 인수 (x+1), (x-2) 의 근과 좌변 이차식의 계수. 제약: 세 인수의 근이 서로 달라야 대입 한 번에 한 미정계수만 남고, 답이 정수로 떨어지게 좌변 값을 맞춘다."
    creative: "(1) 인수를 네 개로 늘려 미정계수 4개(★2~3) (2) ⑵에서 a+b+c 만 묻게 해 x=1 대입 한 번으로 끝내기(★2 · I-SC) (3) 좌변을 미지 다항식 f(x)로 두면 41-66 꼴(★2 · I-EQV)."
```

```yaml
- id: GN-CM1-41-64
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 x에 대하여 삼차식이 (x+2)와 이차식의 곱으로 표현될 때 상수 a, b, c 구하기.
  category: "우변 전개 → 삼차·이차·일차·상수 계수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수비교법으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변을 전개해 네 계수를 차례로 맞추면 a=1부터 c까지 순서대로 결정된다.
    조립제법으로 나눠도 같은 답이 나오지만 계수비교가 예제 직후의 표준 경로다.
    필수 예제 딸림 확인체크 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "(x+2)(ax^2+bx+c) 전개 → 각 차수 계수 등치 → a, b, c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=1$, $b=1$, $c=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/41-64.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 삼차식의 계수와 일차 인수 (x+2)의 근. 제약: 좌변이 그 인수로 실제 나누어떨어져야 하므로 근을 넣은 값이 0이어야 한다."
    creative: "(1) 일차 인수를 미정계수 쪽으로 옮겨 (x+k)(x^2+…) 꼴로 k까지 묻기(★2~3) (2) 이차식을 완전제곱으로 만들어 추가 조건 주기(★3) (3) abc 나 a+b+c 값만 묻기(★2)."
```

```yaml
- id: GN-CM1-41-65
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x^3 을 (x-1), (x-2), (x-3) 의 누적 곱 네 항으로 나타낸 등식이 항등식일 때 상수 a, b, c, d 구하기.
  category: "x=1, 2, 3 차례 대입 → 뒤 항부터 하나씩 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수치대입법으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 에서 d, x=2 에서 c, x=3 에서 b 가 차례로 떨어지고 최고차항 비교로 a=1 이다.
    41-e1 ⑵에서 배운 대입 순서를 그대로 한 단계 늘린 문항이라 통찰로 세지 않았다.
    필수 예제 딸림 확인체크 ★2 출발 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "x=1 → d, x=2 → c, x=3 → b, 최고차항 비교 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=1$, $b=6$, $c=7$, $d=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/41-65.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변의 거듭제곱 차수와 인수들의 근 1, 2, 3. 제약: 근이 오름차순으로 누적되는 구조(뒤 항일수록 인수가 늘어남)를 유지해야 대입 한 번에 한 계수만 남는다."
    creative: "(1) 근을 0, 1, 2 로 바꿔 계산을 가볍게(★2) (2) 좌변을 x^3+2x 처럼 두 항으로(★2) (3) a-b+c-d 처럼 부호 교대 합을 묻고 x 한 값 대입으로 끝나는지 따지게 하기(★3 · 45-77 꼴)."
```

```yaml
- id: GN-CM1-41-66
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미지 다항식 f(x)에 대하여 (x+1)(x^2-2)f(x)가 사차식과 항등식일 때 a+b 의 값.
  category: "좌변 인수의 근에서 우변도 0 → a, b 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x)를 모르는 채로 풀기 위해 「항등식이다」를 「좌변 인수의 근 x=-1, x=±√2 에서 우변도 0」으로 바꿔 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미지 다항식이 포함된 항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)가 미지이므로 전개·계수비교로는 막히고, 좌변이 0이 되는 x를 우변에 넣는 우회가 필요하다.
    x=-1 과 x^2=2 를 넣어 얻은 두 식을 빼면 a가 바로 나온다.
    확인체크 ★2 출발 · 통찰 1(EQV d1) → ★2 유지. 미지 다항식 처리라 같은 층에서 체감 난도는 가장 높다.
  tier: star_2
  mechanism_primary: "좌변 인수의 근 대입 → 우변 값 0 두 식 → a, b → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/41-66.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 인수 (x+1), (x^2-2) 의 상수와 우변 사차식의 계수. 제약: 우변에 홀수 차수 항이 없어야 x^2=2 대입이 한 줄로 끝나고, 좌변 인수의 차수 합이 우변 차수를 넘지 않아야 f(x)가 존재한다."
    creative: "(1) f(x)의 상수항이나 f(1)을 함께 묻기(★3 · I-SC 추가) (2) 인수를 (x-1)(x^2+1)로 바꿔 허근 대입 대신 나눗셈을 강제(★3) (3) 「a+b」 대신 「f(x)」 자체를 구하게 하면 나눗셈 절차형으로 내려감(★2)."
```

```yaml
- id: GN-CM1-42-e2
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ k의 값에 관계없이 성립하는 등식에서 상수 x, y 구하기. ⑵ 모든 실수 x, y에 대하여 성립하는 등식에서 상수 a, b 구하기.
  category: "어느 문자에 대한 항등식인지 가려내 → 그 문자로 내림차순 정리 → 계수 0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「k의 값에 관계없이」를 「k에 대한 항등식」으로 바꿔 읽어, 미지수로 보이던 x, y를 상수로 k를 변수로 역할을 맞바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "계수에 문자가 있는 항등식 — 문자에 관계없이 성립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴에서 k로 묶어 k(2x+y-1)+(-x+y-7)=0 으로 보면 두 식 연립이 된다. 변수와 상수의 역할 바꾸기가 이 단원의 핵심 관점 전환이라 EQV d2 로 세었다.
    ⑵는 반대로 x, y가 변수이므로 x, y로 묶어 계수를 0으로 두면 된다.
    필수 예제 ★2 출발 · 통찰 1(d2, +1 조건 미달) → ★2 유지.
  mechanism_primary: "변수로 볼 문자 선택 → 그 문자로 내림차순 정리 → 각 계수 = 0 연립"
  tier: star_2
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=-2$, $y=5$ \quad ⑵ $a=-3$, $b=-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/42-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ k의 계수 (2k-1), (k+1) 과 상수항 -k-7. ⑵ 괄호 안 x, y 계수. 제약: k로 묶은 두 식이 일차독립이어야 해가 하나로 정해지고, 답이 정수로 떨어지게 상수항을 맞춘다."
    creative: "(1) 문자를 k가 아닌 t·m 으로 바꾸고 이차항까지 넣어 세 식 연립(★3) (2) 「모든 k에 대하여」와 「어떤 k에 대하여」를 섞어 항등식과 방정식을 구분하게 하기(★3 · I-MI) (3) ⑵에 x+y=1 같은 제약을 붙이면 45-76 꼴(★2~3)."
```

```yaml
- id: GN-CM1-42-67
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    k의 값에 관계없이 항상 성립하는 일차 등식에서 상수 x, y 의 값 구하기.
  category: "k에 대한 항등식으로 보기 → k 계수·상수항 = 0 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「k의 값에 관계없이」 → k에 대한 항등식으로 읽어 x, y를 상수 자리로 내림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "계수에 문자가 있는 항등식 — 문자에 관계없이 성립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k로 묶으면 k(x+y-4) + (-2x-y-1) = 0 이고 두 식 연립으로 x, y가 나온다.
    42-e2 ⑴ 직후의 같은 골조라 관점 전환의 depth 는 1로 낮췄다.
    확인체크 ★2 출발 · 통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "k로 내림차순 정리 → k 계수 = 0, 상수항 = 0 → x, y 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=-5$, $y=9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/42-67.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(k-2), (k-1), 4k+1 의 계수와 상수. 제약: k로 묶은 두 식의 계수 행렬식이 0이 아니어야 하고, 해가 정수가 되도록 상수항을 조정한다."
    creative: "(1) 좌변에 k^2 항을 넣어 세 식 연립으로(★3) (2) 「x, y가 자연수」 조건을 더해 사후 기각을 강제(★3 · I-VF) (3) 구한 x, y로 xy나 x+y만 묻기(★2 · 45-75 꼴)."
```

```yaml
- id: GN-CM1-42-68
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    임의의 실수 x, y에 대하여 성립하는 등식에서 상수 a, b, c 에 대한 abc 의 값.
  category: "x, y에 대한 항등식 → x·y·상수 계수 비교 → 곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수비교법으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 x, y로 묶으면 (a+b)x + (a-b)y + 2 이고 우변과 계수를 맞추면 a, b가 연립으로, c는 상수항에서 바로 나온다.
    변수와 상수의 역할 바꾸기가 없는 표준 계수비교라 통찰 0.
    확인체크 ★2 출발 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "좌변을 x, y로 묶기 → x 계수·y 계수·상수항 등치 → a, b, c → abc"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/42-68.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 3x-5y+c 의 계수와 좌변 상수 2. 제약: a+b 와 a-b 가 모두 정수 해를 주도록 우변 x, y 계수의 합과 차가 짝수여야 한다."
    creative: "(1) 좌변 괄호를 (2x+y), (x-3y) 처럼 비대칭으로 바꿔 연립 난도 올리기(★2) (2) z 항까지 넣어 세 문자 항등식(★3) (3) 「임의의 실수 x, y」를 「x+y=2 인 x, y」로 바꾸면 제약 항등식으로 이동(★3 · I-EQV)."
```

```yaml
- id: GN-CM1-43-e3
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 삼차식을 이차식으로 나눈 나머지가 2x+1 이 되도록 하는 a, b. ⑵ 삼차식이 x^2+x+1 로 나누어떨어지도록 하는 a, b.
  category: "A = BQ + R 항등식 세우기 → 몫을 미정 일차식으로 → 계수비교 또는 근 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 나눗셈과 항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나눗셈 조건을 A = BQ + R 항등식으로 옮기는 것이 이 예제가 가르치는 절차 자체라 통찰로 세지 않았다.
    ⑴은 B=(x-1)(x-2) 의 근을 대입해 두 식을, ⑵는 몫이 x+2 로 정해져 전개 한 번이면 끝난다.
    필수 예제 ★2 출발 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "A = BQ + R 로 놓기 → 몫을 미정 일차식 → 계수비교(또는 B의 근 대입) → a, b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=-5$, $b=7$ \quad ⑵ $a=3$, $b=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/43-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 이차식의 계수와 나머지 일차식. 제약: ⑴은 나누는 식이 인수분해되어야 근 대입이 가능하고, ⑵는 몫의 상수항이 좌변 상수항으로 정해지도록 최고차·상수항을 맞춘다."
    creative: "(1) 나누는 식을 인수분해되지 않는 이차식으로 바꿔 계수비교만 남기기(★3 · 46-80 꼴) (2) 나머지를 미정 일차식 px+q 로 두고 p+q 를 묻기(★3) (3) 좌변 차수를 4로 올리면 몫이 이차식이 되어 M_k 상승(★3)."
```

```yaml
- id: GN-CM1-43-69
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차식이 x^2+2x-3 으로 나누어떨어지도록 하는 상수 a, b 구하기.
  category: "나누는 식을 인수분해 → 두 근 대입 → a, b 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 나눗셈과 항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^2+2x-3=(x-1)(x+3) 이므로 x=1, x=-3 을 넣어 얻은 두 식을 연립하면 끝난다.
    43-e3 에서 그대로 이어지는 표준 절차라 통찰 0.
    확인체크 ★2 출발 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "나누는 식 인수분해 → 두 근에서 좌변 = 0 → a, b 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=4$, $b=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/43-69.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 이차식의 두 근과 좌변 상수항 -6. 제약: 두 근이 서로 달라야 연립이 성립하고, 상수항이 두 근의 곱으로 정수 해를 주도록 맞춘다."
    creative: "(1) 나누어떨어짐 대신 「나머지가 x+1」로 바꾸기(★2~3) (2) 나누는 식을 (x-1)^2 인 중근 꼴로 바꾸면 대입 한 번으로는 부족해 갈래 선택이 생김(★4 · 46-84 꼴) (3) a, b 대신 ab 나 a+b 만 묻기(★2)."
```

```yaml
- id: GN-CM1-43-70
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차식을 x^2+x+2 로 나눈 몫이 x-1 일 때 상수 a 의 값과 나머지 구하기.
  category: "R = A - BQ 계산 → 나머지의 차수 조건으로 a 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "몫이 주어졌으므로 「나눗셈이 성립한다」를 「A-BQ 의 차수가 나누는 식보다 낮다」로 바꿔 읽어 이차항 계수를 0으로 두고 a를 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "다항식의 나눗셈과 항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    BQ 를 전개해 A 에서 빼면 ax^2-3x+3 이 남고, 나머지는 이차 미만이어야 하므로 a=0 이 강제된다.
    미정계수를 계수비교로 「맞추는」 것이 아니라 차수 조건으로 「지우는」 단계라 EQV d2 로 세었다(T-단위 함정).
    확인체크 ★2 출발 · 통찰 1(d2, +1 조건 미달) → ★2 유지. [분류 이슈] 체감은 ★3 쪽.
  tier: star_2
  mechanism_primary: "BQ 전개 → R = A - BQ → deg R < deg B 조건으로 a=0 → 나머지"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=0$, 나머지: $-3x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/43-70.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 이차식과 몫 일차식의 계수, 좌변 삼차식의 계수. 제약: A-BQ 의 최고차 계수에 미정계수가 정확히 한 번만 나타나야 차수 조건으로 값이 하나로 정해진다."
    creative: "(1) 몫 대신 나머지를 주고 몫을 구하게 뒤집기(★2) (2) 나누는 식을 삼차로 올려 나머지가 이차식이 되게(★3) (3) 「나머지가 상수」 조건을 추가하면 미정계수 두 개가 차수 조건으로 지워짐(★3 · I-EQV d2)."
```

```yaml
- id: GN-CM1-44-e4
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    삼차식을 (x-1)의 내림차순 네 항으로 나타낸 등식이 항등식일 때 상수 a, b, c, d 구하기.
  category: "조립제법 반복(또는 x-1=t 치환) → 나머지들이 곧 계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우변을 모두 전개해 계수비교하는 갈래 대신, x-1 로 조립제법을 반복해(또는 x-1=t 로 치환해) 나머지를 d, c, b 순으로 읽는 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조립제법과 (x-a) 내림차순 꼴의 항등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=1 대입으로 d 는 바로 나오지만 나머지 세 계수는 전개·계수비교(무겁다)와 조립제법 반복(가볍다)으로 갈린다. 갈래 선택이 실재해 I-SC d1.
    조립제법을 세 번 돌리면 나머지가 차례로 d, c, b 이고 마지막 몫이 a 다.
    발전 예제 ★3 출발 · 통찰 1(d1) → ★3 유지.
  tier: star_3
  mechanism_primary: "x-1 로 조립제법 3회 → 나머지 = d, c, b · 마지막 몫 = a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=3$, $b=9$, $c=8$, $d=4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/44-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 삼차식의 계수와 전개 중심 (x-1) 의 1. 제약: 중심을 바꾸면 네 계수가 모두 바뀌므로 답이 정수로 떨어지는 중심(정수)을 쓴다. 최고차 계수는 그대로 a 가 된다."
    creative: "(1) 차수를 5로 올려 조립제법 5회(★3 · 46-81 꼴) (2) a+b+c+d 만 묻게 해 x=2 대입 한 번으로 끝나는 갈래를 노출(★3 · I-SC d2) (3) 전개 중심을 미지수 (x-k) 로 두고 조건 하나를 더 주기(★4)."
```

```yaml
- id: GN-CM1-44-71
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차식을 (x+1)의 내림차순 네 항으로 나타낸 등식이 항등식일 때 상수 a, b, c, d 구하기.
  category: "조립제법 반복(중심 -1) → 나머지들이 곧 계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전개·계수비교 갈래 대신 x+1 로 조립제법을 반복하는 갈래를 선택(중심이 음수라 부호 처리가 갈래 선택의 실익)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조립제법과 (x-a) 내림차순 꼴의 항등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    44-e4 와 같은 골조이고 중심만 -1 로 바뀌어 조립제법에서 부호 실수(T-부호)가 늘어난다.
    x=-1 대입으로 d=1 을 먼저 확인해 두면 검산이 된다.
    발전 예제 딸림 확인체크 ★3 출발 · 통찰 1(d1) → ★3 유지. [분류 이슈] 확인체크 라벨보다 한 층 높다.
  tier: star_3
  mechanism_primary: "x+1 로 조립제법 3회 → 나머지 = d, c, b · 마지막 몫 = a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=1$, $b=-3$, $c=5$, $d=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/44-71.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 x^3+2x+4 의 계수와 중심 -1. 제약: 중심이 정수이고 좌변 계수가 정수면 네 계수는 자동으로 정수다. 이차항을 비워 두면 조립제법에서 0 자리 빠뜨리는 함정이 살아난다."
    creative: "(1) 중심을 x-2 로 바꾸기(★3 · 44-72 꼴) (2) d 만 묻게 해 x=-1 대입 한 줄로 끝내기(★1~2) (3) 좌변을 (x+1)로 나눈 나머지와 연결해 나눗셈 단원으로 잇기(★3 · I-RT)."
```

```yaml
- id: GN-CM1-44-72
  page: 44
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 x에 대하여 삼차식이 (x-2)의 내림차순 네 항과 같을 때 상수 a, b, c, d 의 곱 abcd 의 값.
  category: "조립제법 반복(중심 2) → 네 계수 → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "전개·계수비교 갈래 대신 x-2 로 조립제법을 반복해 네 계수를 한 번에 읽는 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조립제법과 (x-a) 내림차순 꼴의 항등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    44-e4·44-71 과 같은 골조에 마지막 곱셈 한 단계가 붙는다. 네 계수 중 하나라도 부호를 틀리면 곱이 크게 어긋나 검산 유인이 크다.
    x=2 대입으로 d 를 먼저 잡고 조립제법으로 나머지를 읽는 순서가 가장 짧다.
    발전 예제 딸림 확인체크 ★3 출발 · 통찰 1(d1) → ★3 유지.
  tier: star_3
  mechanism_primary: "x-2 로 조립제법 3회 → a, b, c, d → abcd"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/44-72.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 삼차식의 계수와 중심 2. 제약: 네 계수 중 0이 나오면 곱이 0이 되어 변별이 사라지므로 중심 대입값(d)과 중간 계수가 모두 0이 아니게 맞춘다."
    creative: "(1) abcd 대신 a+b+c+d 를 묻고 x=3 대입 한 번으로 끝나는 갈래를 노출(★3 · I-SC d2) (2) 중심을 미지수 (x-k) 로 두고 c=0 같은 조건을 주기(★4 · I-BW) (3) 차수를 4로 올려 조립제법 4회(★3)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-45-73
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차식 x^2-x-2 가 a(x-b)^2+c(x-b) 와 항등식일 때 상수 a, b, c 구하기(b>0).
  category: "우변에 상수항이 없음 → x=b 가 좌변의 근 → b 결정 후 나머지 계수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우변이 (x-b)로 모두 묶여 상수항이 없다는 점을 「x=b 를 넣으면 좌변도 0」, 즉 b 가 좌변의 근이라는 조건으로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "상수항 없는 꼴로 묶이는 항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전개해 계수비교해도 풀리지만 b에 대한 이차식이 생겨 무겁다. 우변에 상수항이 없다는 관찰로 b를 좌변의 근(2 또는 -1)으로 좁히는 쪽이 짧다.
    b>0 조건이 -1 을 기각해 b=2 로 확정되고, 최고차 비교로 a=1, x=0 대입으로 c=3 이다.
    STEP 1 ★2 출발 · 통찰 1(d2, +1 조건 미달) → ★2 유지.
  tier: star_2
  mechanism_primary: "우변 상수항 0 → b는 좌변의 근 → b>0 으로 b=2 → a, c 계수비교"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=1$, $b=2$, $c=3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/45-73.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 이차식의 두 근. 제약: 좌변이 인수분해되어 근이 정수여야 하고, 두 근의 부호가 갈려야 b>0 조건이 실제로 하나를 기각한다(두 근이 모두 양수면 조건이 무의미해짐)."
    creative: "(1) b>0 을 빼고 「가능한 b의 값의 합」을 묻기(★3 · I-VF 진입) (2) 우변을 a(x-b)^2+c 꼴로 바꿔 완전제곱 변형으로(★2) (3) 삼차식으로 올려 a(x-b)^3+c(x-b) 꼴(★3)."
```

```yaml
- id: GN-CM1-45-74
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    다항식 P(x)가 x(x+1)(x+2)=(x+1)(x-1)P(x)+ax+b 를 만족시킬 때 P(a-b)의 값(5지선다).
  category: "x=±1 대입으로 a, b → 다시 한 점 대입으로 P 값만 추출"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(x)가 미지이므로 「항등식」을 「(x+1)(x-1)이 0이 되는 x=1, -1 에서 양변이 같다」로 바꿔 읽어 a, b를 먼저 확정"
    - step: 3
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(x)를 나눗셈으로 구하는 갈래 대신 a-b=0 을 계산하고 x=0 을 대입해 P(0) 하나만 뽑는 갈래를 선택"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "미지 다항식이 포함된 항등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=1 에서 a+b=6, x=-1 에서 -a+b=0 이라 a=b=3 이고, 묻는 값은 P(0) 으로 줄어든다.
    여기서 P(x)를 실제로 구할 필요가 없다는 판단이 갈림길이다 — x=0 을 넣으면 -P(0)+3=0 한 줄이다.
    STEP 1 ★2 출발 · 통찰 2(EQV+SC) → +1 → ★3. [분류 이슈] 벤더 STEP 1 과 1단 차이.
  tier: star_3
  mechanism_primary: "x=1, -1 대입 → a=b=3 → a-b=0 → x=0 대입으로 P(0)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/45-74.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 세 인수의 근(0, -1, -2)과 우변 인수의 근(±1). 제약: 우변 인수의 근이 좌변에서 0을 만들지 않는 값을 하나 포함해야 a, b가 모두 결정되고, a-b 가 대입하기 쉬운 값(0이나 1)이 되게 맞춘다."
    creative: "(1) P(a+b) 를 묻게 해 실제로 P(x)를 구하도록 강제(★3~4 · SC 소멸·M_k 상승) (2) 우변 인수를 (x-1)^2 로 바꿔 대입 한 번으로는 부족하게(★4 · 46-84 꼴) (3) 「P(x)의 상수항」을 묻기(★3)."
```

```yaml
- id: GN-CM1-45-75
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    k의 값에 관계없이 항상 성립하는 등식에서 상수 x, y 에 대한 xy 의 값.
  category: "k에 대한 항등식 → x^2+y^2 과 x+y → 곱셈공식으로 xy"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「k의 값에 관계없이」 → k에 대한 항등식으로 읽어 k로 묶고 계수와 상수항을 각각 0으로"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "계수에 문자가 있는 항등식 — 문자에 관계없이 성립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k로 묶으면 x^2+y^2=8 과 3x+3y-6=0 즉 x+y=2 가 나온다. x, y 를 따로 구하지 않고 곱셈공식 변형으로 xy 를 얻는 마무리가 표준 절차다.
    42-67 과 같은 관점 전환에 곱셈공식 한 단계가 얹혔다.
    STEP 1 ★2 출발 · 통찰 1(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "k로 묶기 → x^2+y^2=8, x+y=2 → (x+y)^2 전개로 xy"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/45-75.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 계수 쪽의 상수 8 과 x, y 일차항 계수 3, 상수항 2. 제약: x+y 와 x^2+y^2 가 (x+y)^2 ≥ 2·(x^2+y^2)/… 관계를 깨지 않아야 실수해가 존재하고, xy 가 정수로 떨어지게 둘을 맞춘다."
    creative: "(1) x^3+y^3 을 묻게 해 곱셈공식 한 단계 추가(★3) (2) 「x>y 인 x, y」를 구체적으로 구하게 하기(★3 · 이차방정식 연결) (3) k 대신 k^2 항까지 넣어 조건식을 셋으로(★3)."
```

```yaml
- id: GN-CM1-45-76
  page: 45
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x+y=1 을 만족시키는 모든 실수 x, y에 대하여 axy+bx+cy+2=0 일 때 a-b-c 의 값.
  category: "제약식으로 y 소거 → x 한 문자 항등식 → 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「x+y=1 인 모든 x, y」라는 제약 딸린 조건을 y=1-x 로 소거해 「x에 대한 항등식」이라는 다룰 수 있는 조건으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제약 조건이 있는 두 문자 항등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y 가 자유롭지 않으므로 x, y 계수를 그대로 0으로 두면 틀린다 — 제약을 먼저 소거해야 한다는 판단이 갈림길이다.
    y=1-x 를 넣고 x로 정리하면 이차항 계수에서 a=0, 상수항에서 c=-2, 일차항에서 b가 따라 나온다.
    STEP 1 ★2 출발 · 통찰 1(d2, +1 조건 미달) → ★2 유지.
  tier: star_2
  mechanism_primary: "y=1-x 대입 → x 내림차순 정리 → x^2·x·상수 계수 = 0 → a, b, c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/45-76.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제약식 x+y=1 의 우변과 등식의 상수항 2. 제약: 소거 후 이차항이 남아야 a가 결정되므로 xy 항은 유지하고, 세 계수가 모두 정수로 떨어지게 상수항을 고른다."
    creative: "(1) 제약을 2x+y=3 처럼 바꿔 소거 계산을 무겁게(★3) (2) 제약을 x-y=1, 등식에 x^2 항 추가(★3) (3) 제약을 두 개로 늘려 매개변수 하나로 만들기(★4 · 46-83 꼴)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-45-77
  page: 45
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    P_n(x)=(x-1)(x-2)…(x-n) 일 때 (2x-3)^3 을 a+bP_1+cP_2+dP_3 으로 나타낸 항등식에서 a-b+c-d 의 값.
  category: "x=1, 2, 3 차례 대입 → a, b, c → 최고차 비교로 d"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기호 P_n 의 정의에서 「x=k 를 넣으면 P_k 이후의 항이 모두 0」임을 읽어내, 대입 순서를 뒤 항 소거로 설계"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수치대입법으로 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P_n 이 기호로만 정의돼 있어 41-65 의 누적 곱 구조임을 알아보는 것이 진입 저항이다.
    x=1 → a, x=2 → b, x=3 → c 가 차례로 떨어지고 최고차항 비교로 d=8 이다. 마지막에 부호 교대 합만 계산한다.
    STEP 2 ★3 출발 · 통찰 1(d1) → ★3 유지.
  tier: star_3
  mechanism_primary: "x=1, 2, 3 대입으로 a, b, c → 최고차 비교로 d → a-b+c-d"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/45-77.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 (2x-3)^3 의 계수와 P_n 의 근 1, 2, 3. 제약: 근이 연속 정수라야 대입값 계산이 가벼우며, 좌변 차수는 P_n 의 최대 차수와 같아야 d가 최고차 비교로 정해진다."
    creative: "(1) 묻는 값을 a+b+c+d 로 바꿔 x=4 대입 한 번으로 끝나는 갈래가 생기게(★3 · I-SC) (2) P_n 의 근을 0, 1, 2 로 바꿔 계산 경감(★2~3) (3) 좌변을 사차로 올려 P_4 까지 확장(★4)."
```

```yaml
- id: GN-CM1-45-78
  page: 45
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    이차방정식이 실수 k의 값에 관계없이 항상 1을 근으로 가질 때 두 상수 p, q 에 대한 p+q 의 값(5지선다).
  category: "x=1 대입 → k에 대한 항등식 → k 계수 = 0, 상수항 = 0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=1 대입 후 남은 식을 「k에 대한 항등식」으로 바꿔 읽어 k 계수와 상수항을 각각 0으로 둠"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "계수에 문자가 있는 항등식 — 문자에 관계없이 성립"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「1을 근으로 가진다」 → x=1 대입은 표준 절차라 통찰로 세지 않았고, 「k에 관계없이」를 k 항등식으로 읽는 단계만 통찰이다.
    k 계수 -p^2+2p-1=0 이 완전제곱이라 p가 중근으로 하나만 나오는 것이 이 문항의 맛이다.
    STEP 2 ★3 출발 · 기출 태그 +0 · 통찰 1(d1) → ★3 유지.
  tier: star_3
  mechanism_primary: "x=1 대입 → k로 묶기 → (p-1)^2=0 으로 p=1, 상수항에서 q → p+q"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/45-78.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k에 곱해진 (2p-3), (p^2-2) 의 계수와 상수항 q+2. 제약: k 계수를 p에 대해 정리했을 때 실수해가 존재해야 하고(완전제곱이면 답이 하나), 선택지가 정수로 떨어지게 q를 맞춘다."
    creative: "(1) k 계수가 서로 다른 두 실근을 주게 바꿔 p 두 값을 모두 따지게(★4 · I-MI) (2) 근을 1 대신 -2 로 바꿔 계산 부담만 올리기(★3 · 질 저하 주의) (3) 「항상 실근을 갖는다」로 바꾸면 판별식 조건으로 이동(★4 · I-XU)."
```

```yaml
- id: GN-CM1-46-79
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    분수식 (4x+ay+b)/(x+y-1) 이 x, y 의 값에 관계없이 항상 일정한 값을 갖도록 하는 상수 a, b 구하기.
  category: "값이 일정 ⇔ 분자 = k·분모 항등식 → x, y 계수·상수항 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「분수식의 값이 항상 일정하다」를 「분자가 분모의 상수배인 항등식이다」로 바꿔 읽어 미지의 값 k를 도입"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "분수식의 값이 항상 일정할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분수 꼴 그대로는 비교할 계수가 없다. 값을 k로 두고 분모를 곱해 4x+ay+b=k(x+y-1) 항등식으로 옮기는 단계가 전부다.
    x 계수에서 k=4, y 계수에서 a=4, 상수항에서 b=-4 로 한 줄씩 떨어진다.
    STEP 2 ★3 출발 · 통찰 1(d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "값을 k로 두기 → 4x+ay+b=k(x+y-1) 항등식 → x·y·상수 계수 비교 → a, b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=4$, $b=-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/46-79.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 x 계수 4 와 분모 (x+y-1) 의 계수. 제약: 분모의 x 계수가 0이 아니어야 k가 정해지고, 분모가 0이 되는 곳을 피하는 조건(x+y≠1)을 발문에 유지한다."
    creative: "(1) 일정한 값 자체를 묻기(★3 유지) (2) 분자·분모를 이차식으로 올려 세 계수 비교(★4) (3) 「x의 값에 관계없이」만 걸고 y는 자유롭게 두면 조건이 약해져 해가 무수히 많아짐 — 조건 강도를 따지게 하는 변형(★4 · I-MI)."
```

```yaml
- id: GN-CM1-46-80
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    사차식 x^4+x^3+ax+b 가 x^2-x+1 로 나누어떨어질 때 상수 a, b 구하기.
  category: "몫을 미정 이차식으로 → 전개 후 네 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항식의 나눗셈과 항등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    나누는 이차식이 실수 범위에서 인수분해되지 않아 근 대입 우회가 막히고, 몫을 x^2+cx+d 로 두는 표준 경로만 남는다.
    전개 후 삼차·이차 계수에서 c, d 가 정해지고 일차·상수 계수가 a, b 를 준다. 43-e3 절차에 계산량만 늘어난 꼴이라 통찰 0.
    STEP 2 ★3 출발 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "몫을 x^2+cx+d 로 놓기 → 전개·계수비교로 c, d → a, b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$a=1$, $b=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/46-80.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 사차식의 x^3 계수와 나누는 이차식의 계수. 제약: 나누는 식이 실수 범위에서 인수분해되지 않아야(판별식 음수) 근 대입 갈래가 막히고, 몫의 계수가 정수로 떨어지게 좌변을 맞춘다."
    creative: "(1) (x^2-x+1)(x+1)=x^3+1 을 이용하는 갈래를 노출해 I-SC 를 만들기(★4) (2) 나누어떨어짐 대신 「나머지가 2x-1」로(★3) (3) 몫까지 함께 묻기(★3 · 계산량만 증가)."
```

```yaml
- id: GN-CM1-46-81
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 실수 x에 대하여 x^5 을 (x-1)의 내림차순 여섯 항으로 나타낸 등식에서 상수 a, b, c, d, e, f 구하기.
  category: "조립제법 5회 반복(또는 x=(x-1)+1 전개) → 나머지들이 곧 계수"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "우변 전개 갈래(6항 · 오차 전개)는 사실상 막히고, x-1 조립제법 5회 갈래나 x=(x-1)+1 로 보고 전개하는 갈래 중 하나를 골라야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조립제법과 (x-a) 내림차순 꼴의 항등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    44-e4 의 차수를 5로 올린 문항이라 골조는 같지만 조립제법 반복 횟수가 늘어 Mₛ 가 3이다.
    x=(x-1)+1 로 보고 전개하면 계수가 1, 5, 10, 10, 5, 1 로 한 번에 나오는 우회가 있어 갈래 선택이 실재한다(SC d2).
    STEP 2 ★3 출발 · 통찰 1(d2, +1 조건 미달) → ★3 유지. 빠른 갈래를 잡으면 체감은 ★2 다.
  tier: star_3
  mechanism_primary: "x-1 로 조립제법 5회(또는 x=(x-1)+1 전개) → 나머지 = f, e, d, c, b · 마지막 몫 = a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=1$, $b=5$, $c=10$, $d=10$, $e=5$, $f=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/46-81.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 x^5 의 차수와 중심 (x-1) 의 1. 제약: 중심이 1일 때만 계수가 이항계수로 깔끔히 떨어지므로, 중심을 2 등으로 바꾸면 계산이 급격히 무거워진다(질 저하 주의)."
    creative: "(1) 좌변을 x^5+x 로 바꿔 빠른 갈래를 한 단계 어렵게(★3~4) (2) a+b+c+d+e+f 만 묻게 해 x=2 대입 한 번으로 끝내기(★2 · I-SC d2 부각) (3) 중심을 (x+1)로 바꿔 부호 교대 계수를 확인하게(★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-46-82
  page: 46
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    (3+2x-4x^2)^3 의 전개식을 a_0+a_1x+…+a_6x^6 으로 둘 때 짝수 번호 계수의 합 a_0+a_2+a_4+a_6 의 값.
  category: "x=1, x=-1 대입 → 두 값의 합의 절반으로 짝수차 계수만 추출"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x의 값에 관계없이 성립」을 「x에 아무 값이나 넣어도 된다」로 읽어, 전개하지 않고 대입으로 계수합을 만드는 길을 염"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=1 과 x=-1 의 값이 홀수차 항에서만 부호가 뒤집히는 대칭을 이용해, 두 값을 더하면 짝수차 계수의 합만 두 배로 남는 것을 활용"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "계수의 합 — x에 특정 값 대입"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    삼차 전개를 실제로 하면 사실상 풀리지 않고, 대입으로 계수의 조합을 만드는 설계를 스스로 떠올려야 한다.
    f(1)과 f(-1)을 구해 (f(1)+f(-1))/2 로 짝수차만 남기는 부호 대칭이 핵심이며 절반으로 나누는 것을 빠뜨리는 함정이 있다.
    실력 UP ★4 출발 · 통찰 2(EQV+SYM) → ★4 유지. ★5 게이트(통찰 3개 이상)는 미달.
  tier: star_4
  mechanism_primary: "x=1 → 계수 전체합, x=-1 → 부호 교대합 → 두 값의 합의 절반 = 짝수차 계수합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/46-82.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 (3+2x-4x^2) 의 세 계수와 지수 3. 제약: x=1, x=-1 에서의 값이 정수로 떨어져야 하고, 지수를 올리면 값만 커질 뿐 골조는 같으므로 계산 마찰만 늘리지 않도록 작게 유지한다."
    creative: "(1) 홀수차 계수합 a_1+a_3+a_5 로 바꾸기(차를 쓰므로 ★4 유지) (2) a_0 을 따로 구해 a_2+a_4+a_6 을 묻기(★4 · 대입 한 번 추가) (3) 계수 전체합만 묻게 하면 x=1 한 번으로 끝나 ★2 로 내려감."
```

```yaml
- id: GN-CM1-46-83
  page: 46
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 제약식을 만족시키는 모든 실수 x, y, z 에 대하여 axy+byz+czx=12 일 때 a+b+c 의 값.
  category: "두 제약으로 x, y 를 z 로 매개화 → z에 대한 항등식 → 계수 연립"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 식을 만족시키는 모든 실수 x, y, z」를 「자유도가 1이므로 x, y 를 z 로 나타낸 뒤 z에 대한 항등식」으로 바꿔 읽음"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대입해 정리한 z의 이차식이 상수 12 와 항등이므로 z^2·z 계수는 0, 상수항은 12 라는 세 식으로 분리"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "제약 조건이 있는 두 문자 항등식"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x, y, z 가 자유롭지 않다는 것을 놓치면 계수를 바로 0으로 두어 틀린다. 두 제약을 빼서 y+2z=1 을 만들고 x, y 를 z 하나로 줄이는 것이 출발이다.
    대입 후 z에 대한 이차식이 되고 세 계수 조건에서 a, b, c 가 연립으로 나온다 — 전개와 연립 모두 무겁다(Mₖ 3).
    실력 UP ★4 출발 · 통찰 2 → ★4 유지. ★5 게이트(통찰 3개 이상 + SC/VF/SYM/XU) 미달.
  tier: star_4
  mechanism_primary: "두 제약 차 → y=1-2z, x=2-z → 대입 후 z 내림차순 → 계수 0·상수 12 연립 → a+b+c"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/46-83.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 제약식의 계수와 우변 상수 12. 제약: 두 제약이 일차독립이어야 자유도가 정확히 1이 되고, 매개화한 x, y 가 z의 일차식이 되도록 계수를 잡아야 좌변이 z의 이차식으로 닫힌다. 우변 상수는 a, b, c 가 정수로 떨어지게 조정한다."
    creative: "(1) 좌변을 ax^2+by^2+cz^2 로 바꿔 매개화 후 계수 비교(★4 유지) (2) 제약을 하나만 주어 자유도 2로 올리면 두 문자 항등식이 되어 계수 조건이 늘어남(★4~5) (3) a+b+c 대신 abc 를 묻기(★4 · 부호 실수 함정 강화)."
```

```yaml
- id: GN-CM1-46-84
  page: 46
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    자연수 n에 대하여 x^n(x^2+ax+b) 를 (x-3)^2 으로 나눈 나머지가 3^n(x-3) 이 되도록 하는 상수 a, b 에 대한 ab 의 값.
  category: "x=3 대입 → 이차식이 (x-3) 을 인수로 가짐 → 양변에서 (x-3) 약분 후 다시 x=3"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "나눗셈 조건을 A=(x-3)^2 Q + 3^n(x-3) 항등식으로 옮기고 x=3 을 넣어 9+3a+b=0 을 얻음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "9+3a+b=0 을 「x^2+ax+b 가 (x-3) 을 인수로 가진다」로 바꿔 읽어 x^2+ax+b=(x-3)(x+d) 로 분해"
    - step: 3
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중근 (x-3)^2 이라 대입 한 번으로는 조건이 하나뿐인 상황에서, 양변을 (x-3) 으로 약분한 뒤 x=3 을 다시 넣는 갈래를 선택(전개·계수비교 갈래는 n 때문에 막힘)"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "다항식의 나눗셈과 항등식"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    지수 n이 일반이라 전개·계수비교 갈래가 원천 봉쇄되고(Mₐ 3), 대입 가능한 값도 x=3 하나뿐이다.
    x=3 에서 얻은 조건으로 이차식을 (x-3)(x+d) 로 쪼갠 뒤 양변에서 (x-3) 을 약분하고 한 번 더 x=3 을 넣어 3+d=1 을 얻는 두 번 대입이 이 문항의 골조다.
    실력 UP ★4 출발 · 통찰 3(EQV·EQV·SC) → ★5 후보지만 novelty_score 0 과 카탈로그 미정으로 ★4 유지. [분류 이슈] 기록.
  tier: star_4
  mechanism_primary: "x=3 대입 → 9+3a+b=0 → x^2+ax+b=(x-3)(x+d) → (x-3) 약분 후 x=3 재대입 → d → a, b → ab"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/46-84.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나누는 식의 중심 3 과 나머지 3^n(x-3) 의 계수. 제약: 나머지의 상수항이 0이어야 x=3 대입으로 이차식이 (x-3)을 인수로 갖는 구조가 성립하고, 나머지의 일차 계수는 중심의 n제곱과 맞물려야 d가 정수로 떨어진다."
    creative: "(1) 나누는 식을 (x-2)^3 으로 올려 약분·재대입을 두 번 반복(★5 후보) (2) 나머지를 3^n(x-3)+1 처럼 상수항이 있는 꼴로 바꾸면 첫 대입 조건이 달라짐(★4) (3) n에 구체값 2를 넣으면 전개 갈래가 열려 ★3 으로 내려감."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 3 · ★2 13 · ★3 9 · ★4 3 · ★5 0
- 통찰형 18 · 절차형 10 · premium 0 (★5 없음)
- 통찰 유형 분포: I-EQV 17단계 · I-SC 7단계 · I-SYM 1단계 (XU·PD·BW·MI·VF·RT 0) — 항등식 단원은 「조건을 항등식으로 바꿔 읽기」(EQV) 단일 축에 쏠린다.
- type_hint 상위 5: 「다항식의 나눗셈과 항등식」 5 · 「조립제법과 (x-a) 내림차순 꼴의 항등식」 4 · 「계수에 문자가 있는 항등식 — 문자에 관계없이 성립」 4 · 「계수비교법으로 미정계수 구하기」 4 · 「수치대입법으로 미정계수 구하기」 3
- 나머지 type_hint: 「미지 다항식이 포함된 항등식」 2 · 「제약 조건이 있는 두 문자 항등식」 2 · 「항등식의 뜻과 판별」 1 · 「상수항 없는 꼴로 묶이는 항등식」 1 · 「분수식의 값이 항상 일정할 조건」 1 · 「계수의 합 — x에 특정 값 대입」 1
- M_total 분포: 5 → 1문 · 6 → 4문 · 7 → 19문 · 8 → 1문 · 9 → 2문 (단원 특성상 7에 집중)
- 그림: 0문 (이 범위에는 그림 문항 없음)
- 대상층: 하위권 3 · 중하위권 7 · 중위권 15 · 중상위권 2 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-43-70 | 벤더는 필수 예제 딸림 확인체크(★2 층)인데 나머지 차수 조건까지 요구해 체감은 한 층 높다. +1 트리거(통찰 2개 또는 depth 3) 미달이라 ★2 유지 | ★2 / ★3 |
| GN-CM1-44-71 · 44-72 | 「확인체크」 태그지만 발전 예제 44-e4 와 골조·단계 수가 같아 ★3 으로 두었다. 확인체크를 일률적으로 ★2 로 보는 관례와 1단 차이 | ★3 / ★2 |
| GN-CM1-45-74 | 벤더 STEP 1 인데 통찰 2개(EQV+SC)로 +1 하여 ★3. STEP 1 라벨과 1단 차이 | ★3 / ★2 |
| GN-CM1-46-81 | STEP 2 · 조립제법 5회로 M_total 8 이지만, x=(x-1)+1 전개 갈래를 잡으면 한 줄로 끝나 체감이 ★2 까지 내려간다 | ★3 / ★2 |
| GN-CM1-46-84 | 통찰 3개(EQV·EQV·SC)로 v3.8 ★5 저노출 유형 게이트는 통과하지만 novelty_score 0(§2.14)과 카탈로그 미정으로 ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「계수에 문자가 있는 항등식 — 문자에 관계없이 성립」(42-e2·42-67·45-75·45-78 4문). 변수와 상수의 역할을 맞바꾸는 관점 전환이 단독 진입 저항이라 계수비교법과 합치면 안 된다. ② 「조립제법과 (x-a) 내림차순 꼴」(44-e4·44-71·44-72·46-81 4문). 도구(조립제법 반복)가 고유하다. ③ 「제약 조건이 있는 두 문자 항등식」(45-76·46-83). 자유도를 먼저 줄이는 단계가 오답의 주원인이라 base ★ 를 별도로 매길 값이 있다.
- **통합해도 될 유형**: 「계수비교법으로 미정계수 구하기」와 「수치대입법으로 미정계수 구하기」는 도구만 다르고 골조(미정계수 → 항등식 조건 → 연립)가 같아 한 유형의 하위 갈래로 묶고 base ★ 는 같게 두는 편이 낫다(합쳐 7문). 「다항식의 나눗셈과 항등식」 5문도 나누어떨어짐·나머지 지정·몫 지정이 모두 A=BQ+R 한 골조라 하나로 묶되, 46-84처럼 **중근 (x-a)^2 로 나누는 경우만 별도 상위 유형**으로 분리해야 한다(대입 한 번으로 조건이 하나뿐이라 갈래가 완전히 다름).
- **base ★ 제안**: 계수비교·수치대입 ★2 / 문자에 관계없이 성립 ★2 / 나눗셈 항등식 ★2~3 / 조립제법 내림차순 ★3 / 미지 다항식 포함 ★3 / 제약 조건 항등식 ★3~4 / 계수의 합 대입 ★4 / 중근으로 나누는 나눗셈 항등식 ★4.

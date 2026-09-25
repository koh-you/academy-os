---
name: mechanism-데이터-GN-CM1-07
description: 개념원리 공통수학1 07 나머지정리와 인수정리(1/1 · 49~57쪽 · 39문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정 · 학생용) · 전사본 latex-bank/gn-cm1
  section: 07 나머지정리와 인수정리
  unit_code: GN-CM1-07
  part: "1/1"
  extract_range: "49~57쪽 · 49-85~57-116"
  total_problems: 39
  unit_total: 39
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ — 이 범위에는 그림 문항 없음(전 문항 figure none)
---

# 개념원리 공통수학1 · 07 나머지정리와 인수정리 (1/1) 정독 데이터 (v1.0)

이 파일은 49~57쪽 39문항(49-85 ~ 57-116) 전수를 다룬다. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」 19문(필수/발전 예제 7 + 확인체크 12) · 「연습문제 STEP 1」 6문 · 「연습문제 STEP 2」 7문 · 「연습문제 실력 UP」 4문이다.

벤더 난이도 신호는 구역과 예제 태그다. 「개념원리 익히기」 통번호는 ★1 출발, 「필수」 예제는 ★2 · 「발전」 예제는 ★3 출발이다. 「확인체크」 문항은 바로 위 예제의 유사문제이므로 **그 예제의 출발 ★를 그대로 물려받았다**(50-88~90·51-91~92·53-95~97·54-98~99 는 필수 예제 아래 → ★2, 52-93~94 는 발전 예제 52-e7 아래 → ★3). 연습문제는 STEP 1 → ★2 · STEP 2 → ★3 · 실력 UP → ★4 출발이며, 교육청 기출 태그는 통찰 유무로 +0~1 을 판단했다. 출발점에서 M_total·통찰로 ±1 만 조정했고 라벨을 억지로 맞추지 않았다.

단원 특성상 도구가 「나머지정리 f(α) · 인수정리 f(α)=0 · 나눗셈 항등식 복원」 셋으로 좁아 ★ 폭이 넓지 않다. 대신 변별은 **나눗셈 항등식을 어디까지 복원해서 어느 점을 대입하는가**(몫을 다시 나누기 · 합성 f(ax+b) · 곱 xf(x) · 중근 (x-α)² 꼴 나머지 설정)에서 생기므로, 그 착안을 I-EQV / I-RT / I-BW / I-XU 로 라벨링했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-49-85
  page: 49
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    삼차식 f(x)=2x^3-x^2+x+1 을 ⑴~⑷ 네 일차식(x-1, x+2, x-3, x+3)으로 나눈 나머지를 각각 구하기.
  category: "나머지정리 → f(α) 직접 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지정리 — x-α 로 나눈 나머지는 f(α)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직접 나눗셈 대신 f(1), f(-2), f(3), f(-3) 을 대입하는 정의 확인 문항. 네 번 반복이지만 한 번의 대입이 한 줄이라 Mk=1.
    개념원리 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f(x) 를 x-α 로 나눈 나머지 = f(α) → 네 α 에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $-21$ ⑶ $49$ ⑷ $-65$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/49-85.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수와 나누는 일차식의 α 를 자유롭게. 제약: 삼차 이하로 유지하고 α 는 절댓값 3 이하의 정수로 두어야 암산 대입이 가능하다. 소문항 네 개 중 최소 하나는 음수 α 를 넣어 부호 실수를 유도한다."
    creative: "(1) 나머지를 주고 f 의 계수를 되묻기(인수정리 역방향 · ★2) (2) 두 나머지가 같다는 조건을 붙이기(50-88 골조 · ★2) (3) 직접 조립제법으로 몫까지 요구하면 Ms 상승 ★2."
```

```yaml
- id: GN-CM1-49-86
  page: 49
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    이차식 f(x)=3x^2-8x+1 을 ⑴~⑷ 네 개의 ax+b 꼴 일차식(2x-1, 3x+2, 2x+3, 3x-4)으로 나눈 나머지를 각각 구하기.
  category: "나머지정리 → f(-b/a) 대입(분수)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지정리 — ax+b 로 나눈 나머지는 f(-b/a)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    일차항의 계수가 1이 아닌 경우로, ax+b=0 의 해를 먼저 구해 대입하는 것이 전부다. 분수 대입이라 Mk=2, T-표기(ax+b 를 x-α 로 착각) 함정 1개.
    개념원리 익히기 구역·통찰 없음 → ★1 유지.
  tier: star_1
  mechanism_primary: "ax+b=0 → x=-b/a → f(-b/a) 가 나머지"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-\dfrac{9}{4}$ ⑵ $\dfrac{23}{3}$ ⑶ $\dfrac{79}{4}$ ⑷ $-\dfrac{13}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/49-86.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 는 2·3·4, b 는 절댓값 4 이하로. 제약: f 가 이차식이면 분모가 a^2 이 되어 답이 커지므로 계수 3, 8 자리를 a^2 의 배수로 잡으면 정수 답으로도 만들 수 있다."
    creative: "(1) 답이 정수가 되도록 f 를 설계해 검산을 쉽게(★1) (2) 나머지 값을 주고 미지계수를 구하게(★2) (3) f 를 ax+b 로 나눈 몫까지 물으면 조립제법·몫의 계수 보정이 들어가 ★2~3."
```

```yaml
- id: GN-CM1-49-87
  page: 49
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    f(x)=2x^3-3x^2+kx-4 가 ⑴~⑶ 세 일차식(x+1, x-2, 2x+1)으로 각각 나누어떨어지게 하는 상수 k 의 값 구하기.
  category: "인수정리 f(α)=0 → k 에 대한 일차방정식"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수정리 — 나누어떨어질 조건으로 미정계수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    나누어떨어진다 → 나머지 0 → f(α)=0 을 세우고 k 에 대해 푸는 한 단계. 미지상수 k 때문에 Ma=2.
    ⑶ 2x+1 에서 x=-1/2 대입이 유일한 계산 부담. 익히기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "나누어떨어짐 → f(α)=0 → k 의 일차방정식 풀이"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-9$ ⑵ $0$ ⑶ $-10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/49-87.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 상수항과 α 를 바꾸되 k 의 해가 정수가 되도록 α 의 거듭제곱 항을 조절한다. 제약: 2x+1 처럼 분수 α 를 쓸 때는 k 의 계수가 분모를 상쇄해야 정수 답이 나온다."
    creative: "(1) 미지계수를 두 개로 늘려 연립(54-e10 골조 · ★2) (2) 나누어떨어짐 대신 나머지 값을 주기(★1 유지) (3) 인수로 갖는 일차식을 미지로 두고 k 의 범위를 묻게 하면 I-BW 가 생겨 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-50-e5
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ f(x)=3x^3-x^2+ax+5 를 x-1 로 나눈 나머지가 4 일 때 f(x) 를 3x-1 로 나눈 나머지 구하기.
    ⑵ x^3+ax^2+bx-4 를 x-2 로 나눈 나머지가 12, x+1 로 나눈 나머지가 6 일 때 상수 a, b 구하기.
  category: "나머지정리로 미정계수 결정 → 다른 점에서 재대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지정리 — 일차식으로 나누는 경우(미정계수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ f(1)=4 로 a 를 정한 뒤 3x-1 에 맞춰 f(1/3) 을 다시 대입하는 2단 구조, ⑵ 는 두 나머지 조건으로 a, b 연립.
    둘 다 표준 미정계수 절차라 통찰 카운트 없음. 필수 예제 출발 ★2, M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f(1)=4 → a 결정 → 3x-1 의 근 1/3 에 재대입 / 두 나머지 조건 → a, b 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $4$ ⑵ $a=5$, $b=-6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/50-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 번째 제수를 2x-1·3x+1 로, ⑵ 의 두 나머지 값을 바꾼다. 제약: ⑴ 은 a 가 정수로 떨어져야 하고, ⑵ 는 두 일차식의 근이 서로 달라야 a, b 연립이 유일해진다."
    creative: "(1) ⑵ 를 나누어떨어짐 조건으로 바꾸면 인수정리 문항(54-e10 · ★2) (2) 두 조건 중 하나를 몫 조건으로 주면 항등식 복원이 필요해 ★3 (3) a, b 를 구하지 않고 a+b 만 묻게 하면 조건 통합 착안이 생겨 ★3."
```

```yaml
- id: GN-CM1-50-88
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    사차식 f(x)=x^4+2x^3+ax^2-x+6 을 x+3 으로 나눈 나머지와 x-1 로 나눈 나머지가 같을 때 상수 a 구하기.
  category: "두 나머지가 같다 → f(-3)=f(1) → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지정리 — 두 나머지가 같은 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나머지가 같다는 말을 f(-3)=f(1) 로 옮기는 한 걸음이 전부이고, 나머지는 사차식 두 번 대입 계산이다.
    (-3)^4=81 등 부호·거듭제곱 처리로 Mk=2. 필수 예제 아래 확인체크 → 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "두 나머지가 같음 → f(-3)=f(1) → a 의 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{7}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/50-88.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 제수의 근을 -2, 2 처럼 대칭으로 잡으면 홀수차 항이 상쇄되어 a 가 깔끔해진다. 제약: 두 근이 서로 달라야 하고 a 의 계수(두 근의 제곱 차)가 0 이 되면 조건이 무의미해진다."
    creative: "(1) 두 나머지의 합·차를 주는 형태(★2) (2) 나머지가 같다는 조건을 f(x)-c 가 두 일차식을 인수로 갖는다로 바꾸면 인수정리 문항(★2) (3) 제수를 이차식 두 개로 올리면 나머지 설정이 필요해 ★3."
```

```yaml
- id: GN-CM1-50-89
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    3x^3+ax^2+bx-1 을 3x-2 로 나눈 나머지가 1, x+1 로 나눈 나머지가 -19 일 때, 이 다항식을 x-2 로 나눈 나머지 구하기.
  category: "두 나머지 조건 → a, b 연립 → 세 번째 점 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지정리 — 일차식으로 나누는 경우(미정계수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(2/3)=1, f(-1)=-19 로 a, b 를 연립한 뒤 f(2) 를 구하는 3단 절차. 분수 대입이 있어 Mk=2.
    50-e5 와 같은 골조의 확인체크라 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "f(2/3)=1, f(-1)=-19 → a, b 연립 → f(2) 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/50-89.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3x-2 의 계수와 두 나머지 값을 바꾼다. 제약: 최고차항 계수 3 과 제수 3x-2 가 맞물려야 분모가 상쇄되므로, 제수를 바꾸면 최고차항 계수도 함께 바꿔야 a, b 가 정수로 나온다."
    creative: "(1) 마지막에 나머지 대신 몫을 묻기(조립제법 · ★2) (2) 세 번째 제수를 이차식으로 올리면 나머지 설정이 필요해 ★3 (3) a, b 를 구하지 않고 a+b 만 쓰이도록 설계하면 조건 통합 착안이 생겨 ★3."
```

```yaml
- id: GN-CM1-50-90
  page: 50
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 다항식 f(x), g(x) 를 x+1 로 나눈 나머지가 각각 2, -1 일 때 2f(x)-3g(x) 를 x+1 로 나눈 나머지 구하기.
  category: "나머지의 선형성 → 2f(-1)-3g(-1)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지정리 — 다항식의 합·상수배의 나머지"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(-1)=2, g(-1)=-1 을 2f-3g 에 그대로 대입하면 끝나는 한 단계. 미지 다항식 두 개라 Ma=3 이지만 실제 노동은 최소.
    확인체크 출발 ★2 를 유지하되 체감은 ★1 에 가깝다(1단 차이라 이슈 표에는 올리지 않음).
  tier: star_2
  mechanism_primary: "x=-1 에서의 값만 필요 → 2f(-1)-3g(-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/50-90.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 나머지 값과 결합 계수(2, -3)를 바꾼다. 제약: 곱 f(x)g(x) 로 바꾸면 값의 곱이 되어 여전히 ★2 지만, 합성이나 몫으로 바꾸면 값만으로는 결정되지 않으므로 성립하지 않는다."
    creative: "(1) f(x)g(x) 의 나머지를 묻기(★2) (2) f+g 와 f^2+g^2 를 주고 fg 를 묻는 56-106 골조로 올리면 곱셈 공식 착안이 생겨 ★3 (3) 제수를 이차식으로 바꾸면 나머지가 일차식이 되어 ★3."
```

```yaml
- id: GN-CM1-51-e6
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ f(x) 를 x+4, x-3 으로 나눈 나머지가 11, -3 일 때 (x+4)(x-3) 으로 나눈 나머지 구하기.
    ⑵ f(x) 를 x-2, x+2 로 나눈 나머지가 3, -1 일 때 (x^2-x+1)f(x) 를 x^2-4 로 나눈 나머지 구하기.
  category: "이차식으로 나눈 나머지를 ax+b 로 설정 → 두 점 대입 연립"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차식으로 나눈 나머지를 일차 이하 ax+b 로 놓고 나눗셈 항등식에 두 근을 대입해 연립식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "나머지정리 — 이차식으로 나누는 경우(나머지 ax+b 설정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나머지의 차수가 제수보다 낮다는 사실로 R(x)=ax+b 를 놓는 것이 이 유형의 핵심 착안이라 I-EQV d1 하나를 센다.
    ⑵ 는 대입 시 (x^2-x+1) 의 값까지 함께 곱해야 해 한 단계 더 붙는다. 필수 예제 ★2 출발·통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "R(x)=ax+b 설정 → 항등식에 두 근 대입 → a, b 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-2x+3$ ⑵ $4x+1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/51-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 두 나머지 값을 바꾼다. 제약: 두 근이 서로 달라야 연립이 유일하고, 근의 차가 나머지 차를 나누어야 a 가 정수로 떨어진다. ⑵ 의 곱해지는 인수는 두 근에서 0 이 되면 안 된다."
    creative: "(1) 곱해지는 인수를 (x^2+k) 로 두고 k 를 미지로(★3) (2) 제수를 중근 (x-α)^2 로 바꾸면 값 하나로는 부족해 52-e7 골조 ★3 (3) 나머지 R(x) 대신 R(1) 같은 한 값만 묻기(★2 유지)."
```

```yaml
- id: GN-CM1-51-91
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 를 x+2, x-6 으로 나눈 나머지가 각각 6, -10 일 때 f(x) 를 x^2-4x-12 로 나눈 나머지 구하기.
  category: "제수 인수분해 → 나머지 ax+b 설정 → 두 점 연립"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^2-4x-12=(x+2)(x-6) 임을 보고 주어진 두 나머지가 곧 두 근에서의 함숫값임을 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "나머지정리 — 이차식으로 나누는 경우(나머지 ax+b 설정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    제수를 먼저 인수분해해야 주어진 조건과 연결된다는 점만 51-e6 과 다르다. 이후는 R(x)=ax+b 두 점 연립.
    확인체크·통찰 1개(d1) → ★2.
  tier: star_2
  mechanism_primary: "x^2-4x-12=(x+2)(x-6) → R(x)=ax+b 에 x=-2, 6 대입 → 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2x+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/51-91.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제수를 전개형으로 제시하되 두 정수 근으로 인수분해되게 유지한다. 제약: 두 나머지의 차가 두 근의 차로 나누어떨어져야 a 가 정수가 된다."
    creative: "(1) 제수를 인수분해가 안 되는 x^2+1 로 바꾸면 52-94 골조가 되어 ★3 (2) 나머지 대신 몫의 성질을 묻기(★3) (3) 조건 하나를 나누어떨어짐으로 바꾸면 R 의 한 값이 0 으로 고정되어 ★2 유지."
```

```yaml
- id: GN-CM1-51-92
  page: 51
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 를 x-1, x+3 으로 나눈 나머지가 9, 5 이고 x^2+2x-3 으로 나눈 몫이 x^2+2 일 때, f(x) 를 x+1 로 나눈 나머지 구하기.
  category: "몫까지 주어진 나눗셈 항등식 복원 → 새로운 점 대입"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "몫이 주어졌으므로 f(x)=(x-1)(x+3)(x^2+2)+ax+b 로 식 전체를 복원해야 조건에 없는 x=-1 에서의 값을 얻을 수 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리 — 몫이 주어진 나눗셈 항등식 복원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 나머지로 R(x)=x+8 을 먼저 구한 뒤, 몫까지 포함한 항등식을 복원해 x=-1 을 대입해야 한다는 점이 한 단계 더 깊다.
    확인체크 출발 ★2 · 통찰 1개(d2) → 규칙상 +1 요건(통찰 2개 이상 또는 depth 3)을 채우지 못해 ★2 유지. 체감은 STEP 2 급.
  tier: star_2
  mechanism_primary: "f(1)=9, f(-3)=5 → R(x)=x+8 → f(x)=(x-1)(x+3)(x^2+2)+x+8 복원 → f(-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/51-92.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "몫을 x^2+k 나 x+k 로 바꾸고 두 나머지 값을 조정한다. 제약: 최종 대입점은 제수의 두 근과 달라야 몫이 실제로 쓰인다(근을 넣으면 몫이 사라져 문제가 무의미해진다)."
    creative: "(1) 몫을 미지로 두고 몫의 나머지를 주기(53-e9·56-110 골조 ★3) (2) 마지막 대입점을 이차식으로 올려 나머지를 일차식으로 묻기(★3) (3) 몫에 미지계수를 넣고 f 의 최고차항 계수를 함께 주면 조건이 하나 더 붙어 ★3."
```

```yaml
- id: GN-CM1-52-e7
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    f(x) 를 (x-1)^2 으로 나눈 나머지가 3x+2 이고 x+1 로 나눈 나머지가 3 일 때, f(x) 를 (x-1)^2(x+1) 로 나눈 나머지 구하기.
  category: "삼차식으로 나눈 나머지를 a(x-1)^2+3x+2 꼴로 설정"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차 이하 나머지를 ax^2+bx+c 로 두지 않고 (x-1)^2 로 나눈 나머지가 3x+2 라는 조건을 흡수해 R(x)=a(x-1)^2+3x+2 로 설정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리 — 삼차식 (x-α)^2(x-β) 로 나누는 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수 세 개짜리 ax^2+bx+c 로 놓으면 조건이 모자라 막히고, 중근 조건을 나머지 식 자체에 흡수해야 미지수가 a 하나로 줄어든다.
    이 설정 착안이 이 유형의 전부라 I-EQV d2. 발전 예제 출발 ★3 · 통찰 1개 → ★3.
  tier: star_3
  mechanism_primary: "R(x)=a(x-1)^2+3x+2 설정 → x=-1 대입해 f(-1)=3 과 비교 → a 결정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x^2+x+3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/52-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 α 와 단근 β, 나머지 일차식 계수를 바꾼다. 제약: α 와 β 가 달라야 하고, (β-α)^2 이 남은 값 차이를 나누어야 a 가 정수로 나온다."
    creative: "(1) 중근을 (x+1)^2 로 옮기고 값을 바꾸기(52-93 · ★3 유지) (2) (x-1)^2 대신 x^2+1 로 바꾸면 인수분해 불가 나머지 설정이 되어 52-94 골조 ★3 (3) 사차 제수 (x-1)^2(x-2)^2 로 올리면 미지수가 둘이 되어 ★4."
```

```yaml
- id: GN-CM1-52-93
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 를 (x+1)^2 으로 나눈 나머지가 2 이고 x-3 으로 나눈 나머지가 -14 일 때, f(x) 를 (x+1)^2(x-3) 으로 나눈 나머지 구하기.
  category: "삼차식으로 나눈 나머지를 a(x+1)^2+2 꼴로 설정"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중근 조건을 나머지 식에 흡수해 R(x)=a(x+1)^2+2 로 두어 미지수를 하나로 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리 — 삼차식 (x-α)^2(x-β) 로 나누는 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    52-e7 과 같은 골조이고 (x+1)^2 로 나눈 나머지가 상수 2 라 설정이 한 단계 더 간단하다.
    발전 예제 아래 확인체크 → 출발 ★3 · 통찰 1개(d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "R(x)=a(x+1)^2+2 → x=3 대입해 -14 와 비교 → a=-1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-x^2-2x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/52-93.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 -1, 단근 3, 상수 나머지 2 와 값 -14 를 바꾼다. 제약: (β-α)^2 이 (f(β) - 상수나머지) 를 나누어야 a 가 정수. 여기서는 16 이 -16 을 나눈다."
    creative: "(1) (x+1)^2 로 나눈 나머지를 일차식으로 올리기(52-e7 · ★3) (2) 단근 조건을 나누어떨어짐으로 바꾸면 f(β)=0 이라 ★3 유지 (3) 제수를 (x+1)^3 으로 올리면 조건이 더 필요해 ★4."
```

```yaml
- id: GN-CM1-52-94
  page: 52
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 를 x^2+1 로 나눈 나머지가 x+1, x-1 로 나눈 나머지가 4 일 때 (x^2+1)(x-1) 로 나눈 나머지 R(x) 에 대하여 R(-2) 구하기.
  category: "삼차식으로 나눈 나머지를 a(x^2+1)+x+1 꼴로 설정"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "인수분해되지 않는 x^2+1 조건을 나머지 식에 흡수해 R(x)=a(x^2+1)+x+1 로 두어 미지수를 하나로 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리 — 삼차식 (이차 기약인수)(x-β) 로 나누는 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x^2+1 은 실수 범위에서 근이 없으므로 대입으로 조건을 쓸 수 없고, 나머지 식에 그대로 흡수시키는 설정만이 길이다.
    마지막에 R 전체가 아니라 R(-2) 한 값을 묻는 것도 같은 골조. 확인체크(발전 예제 아래) ★3 · 통찰 1개 → ★3.
  tier: star_3
  mechanism_primary: "R(x)=a(x^2+1)+x+1 → x=1 대입해 f(1)=4 와 비교 → a=1 → R(-2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/52-94.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2+1 을 x^2+k(k>0) 로, 나머지 x+1 과 값 4 를 바꾼다. 제약: 이차 인수는 실근이 없어야 설정 착안이 유지되고, 단근 β 에서 (β^2+k) 가 값 차이를 나누어야 a 가 정수."
    creative: "(1) R(-2) 대신 R(x) 전체를 묻기(★3 유지) (2) 이차 인수를 x^2-1 로 바꾸면 두 근 대입이 가능해져 난도 하락 ★2 (3) x^2+1 로 나눈 몫까지 조건에 넣으면 항등식 복원이 겹쳐 ★4."
```

```yaml
- id: GN-CM1-53-e8
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x) 를 x^2+x-2 로 나눈 나머지가 3x-2 일 때 f(2x-3) 을 x-2 로 나눈 나머지 구하기.
  category: "합성 f(2x-3) 의 나머지 → f(1) 로 환원 → 주어진 나머지에 대입"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(2x-3) 을 x-2 로 나눈 나머지는 x=2 를 넣은 f(1) 이고, f(1) 은 x^2+x-2=(x+2)(x-1) 의 근이라 주어진 나머지 3x-2 로 계산됨을 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(ax+b) 를 x-α 로 나누는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합성 다항식의 나머지를 구할 때 대입하는 값은 x=2 가 아니라 2x-3 의 값 1 이라는 점이 유일한 함정이다(T-표기).
    이어서 제수를 인수분해해 x=1 이 근임을 확인하면 f(1)=R(1). 필수 예제 ★2 · 통찰 1개(d1) → ★2.
  tier: star_2
  mechanism_primary: "x=2 → f(2*2-3)=f(1) → (x+2)(x-1) 의 근 1 에서 f(1)=3*1-2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/53-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합성식 ax+b 의 계수와 대입점 α 를 바꾼다. 제약: aα+b 가 반드시 주어진 제수의 근(-2 또는 1) 중 하나가 되어야 풀리므로 세 수가 연동된다."
    creative: "(1) f(3x) 처럼 상수항을 없애기(53-96 · ★2) (2) 결과가 제수의 근이 아니게 만들면 조건 부족으로 불성립 — 대신 제수를 삼차로 올려 근을 늘리면 ★3 (3) xf(x-3) 처럼 곱을 씌우면 단계가 하나 늘어 ★2~3."
```

```yaml
- id: GN-CM1-53-e9
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x) 를 x-2 로 나눈 몫이 Q(x), 나머지가 5 이고 Q(x) 를 x+3 으로 나눈 나머지가 3 일 때, f(x) 를 x+3 으로 나눈 나머지 구하기.
  category: "나눗셈 항등식에 몫의 값 대입 → f(-3)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)=(x-2)Q(x)+5 를 써 놓고 x=-3 을 대입하면 f(-3) 이 Q(-3) 만으로 결정된다는 구조를 봄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "몫을 x-α 로 나누는 경우(나눗셈 항등식 재대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    나머지정리를 직접 쓸 수 없고 나눗셈 항등식을 먼저 써야 한다는 점이 핵심. 항등식에 x=-3 을 넣으면 Q(-3)=3 이 그대로 들어간다.
    필수 예제 ★2 출발 · 통찰 1개(d2) → ★2 유지. 이 골조는 56-110·55-104 로 확장된다.
  tier: star_2
  mechanism_primary: "f(x)=(x-2)Q(x)+5 → x=-3 대입 → f(-3)=(-5)*Q(-3)+5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/53-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 제수의 근과 두 나머지 값을 바꾼다. 제약: 두 근이 달라야 하고 (β-α) 배수 계산이 남으므로 값이 커지지 않게 근의 차를 5 이내로 둔다."
    creative: "(1) 묻는 것을 xf(x) 의 나머지로 바꾸기(53-97 · ★2) (2) f 를 (x-α)(x-β) 로 나눈 나머지 ax+b 를 묻게 하면 56-110 골조 ★3 (3) Q 의 나머지 대신 Q 를 다시 나눈 몫을 주면 3중 항등식이 되어 ★4."
```

```yaml
- id: GN-CM1-53-95
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 를 x-2 로 나눈 나머지가 4 일 때 xf(x-3) 을 x-5 로 나눈 나머지 구하기.
  category: "곱과 평행이동이 섞인 합성 → x=5 대입 → 5f(2)"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "xf(x-3) 에 x=5 를 넣으면 5f(2) 가 되어 주어진 f(2)=4 를 바로 쓸 수 있음을 봄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(ax+b) 를 x-α 로 나누는 경우(곱이 붙은 형태)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 x 까지 함께 대입해야 한다는 것만 주의하면 한 줄. 대입값이 5-3=2 라는 평행이동 처리가 T-표기 함정이다.
    확인체크 ★2 · 통찰 1개(d1) → ★2.
  tier: star_2
  mechanism_primary: "x=5 대입 → 5*f(5-3)=5*f(2)=5*4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/53-95.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 폭과 대입점, 나머지 값을 바꾼다. 제약: 대입점에서 f 의 인수가 반드시 조건이 주어진 점과 일치해야 하고, 앞에 붙는 인수가 대입점에서 0 이 되면 답이 0 으로 붕괴한다."
    creative: "(1) 앞의 인수를 (x^2-1) 처럼 이차로 올리기(★2 유지) (2) 제수를 이차식으로 올려 나머지를 일차식으로 묻기(55-102 골조 ★2~3) (3) f 의 조건을 이차식으로 나눈 나머지로 주면 한 단계 늘어 ★3."
```

```yaml
- id: GN-CM1-53-96
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 를 2x^2-5x-3 으로 나눈 나머지가 4x-1 일 때 f(3x) 를 x-1 로 나눈 나머지 구하기.
  category: "f(3x) 의 나머지 → f(3) → 제수 인수분해로 3 이 근임을 확인"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(3x) 를 x-1 로 나눈 나머지는 f(3) 이고, 2x^2-5x-3=(2x+1)(x-3) 이라 f(3)=4*3-1 로 계산됨을 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(ax+b) 를 x-α 로 나누는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    53-e8 과 같은 골조이고 합성이 f(3x) 라 대입값이 3 으로 바로 나온다. 제수의 인수분해에서 최고차항 계수 2 를 처리해야 한다.
    확인체크 ★2 · 통찰 1개(d1) → ★2.
  tier: star_2
  mechanism_primary: "x=1 → f(3) → (2x+1)(x-3) 의 근 3 에서 f(3)=4*3-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/53-96.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율 a 와 제수의 두 근, 나머지 일차식을 바꾼다. 제약: aα 가 제수의 근 중 하나여야 하므로 -1/2 쪽 근을 쓰려면 배율을 분수로 잡아야 해 보통 정수 근 쪽을 쓴다."
    creative: "(1) 근 -1/2 쪽을 쓰도록 f(x/2) 형태로 바꾸기(★3) (2) f(3x) 를 이차식 6x^2-5x+1 로 나누게 하면 두 점이 필요해 56-109 골조 ★3 (3) 나머지를 이차식으로 올리면 대입 계산만 늘어 ★2 유지."
```

```yaml
- id: GN-CM1-53-97
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 를 x-3 으로 나눈 몫이 Q(x), 나머지가 4 이고 Q(x) 를 x+1 로 나눈 나머지가 2 일 때, xf(x) 를 x+1 로 나눈 나머지 구하기.
  category: "항등식으로 f(-1) 복원 → 곱 xf(x) 에 대입"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)=(x-3)Q(x)+4 에 x=-1 을 대입해 Q(-1)=2 로부터 f(-1) 을 얻고, 다시 곱 xf(x) 의 나머지로 넘김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "몫을 x-α 로 나누는 경우(곱이 붙은 형태)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    53-e9 의 항등식 재대입 뒤에 53-95 의 곱 대입이 한 번 더 붙는 2단 연쇄다. 주 통찰은 항등식 복원 1개로 센다.
    확인체크 ★2 출발 · 통찰 1개(d2) → ★2 유지. 체감은 STEP 1~2 급.
  tier: star_2
  mechanism_primary: "f(x)=(x-3)Q(x)+4 → f(-1)=(-4)*2+4=-4 → xf(x) 에 x=-1 → (-1)*(-4)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/53-97.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 두 나머지 값, 앞에 붙는 인수를 바꾼다. 제약: 앞 인수가 대입점에서 0 이 되면 안 되고, 근의 차가 커지면 곱셈 값이 급히 커진다."
    creative: "(1) 앞 인수를 (x+2) 로 바꾸기(★2 유지) (2) 곱 대신 f(2x+1) 합성으로 바꾸면 53-e8 골조와 결합해 ★3 (3) 최종 제수를 (x-3)(x+1) 로 올려 나머지 일차식을 묻게 하면 56-110 골조 ★3."
```

```yaml
- id: GN-CM1-54-e10
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    3x^3+ax^2+bx+12 가 x-2, x-3 을 인수로 가질 때 상수 a, b 의 값 구하기.
  category: "인수정리 f(2)=f(3)=0 → a, b 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수정리 — 일차식을 인수로 가질 조건(미정계수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인수로 갖는다 → 그 값에서 0 이라는 정의 확인 두 번과 연립방정식 풀이가 전부다.
    필수 예제 ★2 출발·통찰 없음·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f(2)=0, f(3)=0 → a, b 두 일차식 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-13$, $b=8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/54-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 인수의 근과 최고차항 계수·상수항을 바꾼다. 제약: 두 근이 달라야 연립이 유일하고, 상수항이 두 근의 곱과 최고차항 계수로 결정되는 값과 모순되지 않아야 한다(세 번째 근이 자동으로 정해진다)."
    creative: "(1) 세 번째 인수 x-c 까지 묻기(55-105 · ★2) (2) 인수 조건 하나를 나머지 값 조건으로 바꾸기(50-e5 · ★2) (3) 인수를 이차식 하나로 묶어 제시하면 인수분해 단계가 붙어 54-e11 골조 ★2."
```

```yaml
- id: GN-CM1-54-e11
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x^3-ax^2+bx-2 가 (x-1)(x+2) 로 나누어떨어질 때 상수 a, b 에 대하여 ab 의 값 구하기.
  category: "이차식으로 나누어떨어짐 → 두 일차인수 각각에 인수정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x-1)(x+2) 로 나누어떨어진다는 조건을 f(1)=0 과 f(-2)=0 두 개로 분해"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "인수정리 — 이차식으로 나누어떨어질 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱으로 나누어떨어지면 각 인수로도 나누어떨어진다는 분해가 유일한 착안이고, 이후는 연립 후 ab 계산.
    부호가 -a 로 주어져 부호 실수(T-부호) 가능. 필수 예제 ★2 · 통찰 1개(d1) → ★2.
  tier: star_2
  mechanism_primary: "f(1)=0, f(-2)=0 → a, b 연립 → ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/54-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 상수항을 바꾼다. 제약: 삼차식이 (x-1)(x+2)(x-c) 로 완전히 갈라지므로 상수항은 두 근의 곱과 c 로 정해진다. 답으로 ab 를 물으려면 a, b 가 모두 0 이 아니어야 의미가 있다."
    creative: "(1) 나머지를 묻는 형태로 바꾸기(54-99 · ★2) (2) 제수를 인수분해되지 않는 이차식으로 두면 계수 비교가 필요해 ★3 (3) 사차식으로 올리고 나누어떨어짐 뒤 다른 점의 나머지를 묻기(54-99 골조 ★2)."
```

```yaml
- id: GN-CM1-54-98
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    2x^3-5x^2+ax+b 가 2x+1, x-1 로 각각 나누어떨어질 때 상수 a, b 에 대하여 a-b 의 값 구하기.
  category: "인수정리 두 번 → a, b 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수정리 — 일차식을 인수로 가질 조건(미정계수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(-1/2)=0, f(1)=0 연립. 분수 대입에서 분모 8 이 생겨 Mk=2 이고 부호 처리가 함정이다.
    54-e10 과 같은 골조의 확인체크라 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "f(-1/2)=0, f(1)=0 → a, b 연립 → a-b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/54-98.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x+1 의 계수와 최고차항 계수를 함께 바꾼다. 제약: 최고차항 계수가 제수의 최고차항 계수의 배수여야 분수 대입 후 a, b 가 정수로 떨어진다."
    creative: "(1) 두 인수를 곱해 이차식으로 제시(54-e11 · ★2) (2) 나누어떨어짐 조건 하나를 나머지 값으로 바꾸기(★2 유지) (3) a, b 가 아니라 몫을 묻게 하면 조립제법이 붙어 ★2~3."
```

```yaml
- id: GN-CM1-54-99
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    -x^4+ax^2-2x+b 가 x^2-x-2 로 나누어떨어질 때 이 다항식을 x+3 으로 나눈 나머지 구하기.
  category: "제수 인수분해 → 인수정리로 a, b → 새 점 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^2-x-2=(x-2)(x+1) 로 갈라 나누어떨어짐 조건을 f(2)=0, f(-1)=0 두 개로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "인수정리 — 이차식으로 나누어떨어질 조건(이후 나머지 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인수분해 → 두 조건 연립 → 확정된 다항식에 x=-3 대입의 3단 절차. 최고차항 계수가 -1 이라 부호 실수가 잦다(T-부호).
    확인체크 ★2 · 통찰 1개(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "(x-2)(x+1) 로 분해 → f(2)=0, f(-1)=0 → a, b → f(-3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/54-99.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제수의 두 근과 마지막 대입점을 바꾼다. 제약: 사차식이므로 대입점의 절댓값이 3 을 넘으면 계산량이 급증한다. 최고차항 계수의 부호를 +1 로 바꾸면 난도가 낮아진다."
    creative: "(1) 마지막을 몫의 계수 묻기로 바꾸면 조립제법 두 번 ★3 (2) 제수를 (x-2)^2 로 바꾸면 값 조건 하나로는 부족해 계수 비교가 필요해 ★3 (3) a, b 를 묻고 끝내면 54-e11 과 같아 ★2."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-55-100
  page: 55
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x) 를 (kx-2)(x+5) 로 나눈 몫이 x-1, 나머지가 3 이고 f(x) 를 x+1 로 나눈 나머지가 -5 일 때 상수 k 구하기.
  category: "몫·나머지가 모두 주어짐 → f(x) 항등식 복원 → 새 점 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "몫과 나머지가 모두 주어졌으므로 f(x)=(kx-2)(x+5)(x-1)+3 으로 식을 완전히 복원할 수 있음을 봄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "나눗셈 항등식 복원 — 몫·나머지가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 를 미지 다항식으로 두지 않고 항등식으로 통째로 쓸 수 있다는 것이 출발점이고, 그다음은 x=-1 대입 후 k 일차방정식.
    STEP 1 ★2 출발·통찰 1개(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "f(x)=(kx-2)(x+5)(x-1)+3 복원 → x=-1 대입 → f(-1)=-5 로 k 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/55-100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "몫·나머지 값과 대입점을 바꾼다. 제약: 대입점이 제수의 두 근(-5, 2/k) 과 달라야 하고, k 의 계수가 0 이 되지 않아야 유일해가 나온다."
    creative: "(1) 몫에 미지계수를 넣고 나머지를 묻기(★3) (2) 대입점 조건을 이차식으로 나눈 나머지로 올리면 R 설정이 붙어 ★3 (3) k 대신 f 의 최고차항 계수를 묻게 하면 전개가 필요해 ★2 유지."
```

```yaml
- id: GN-CM1-55-101
  page: 55
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x) 를 x^2-1 로 나눈 나머지가 2 이고 g(x) 를 x^2-3x+2 로 나눈 나머지가 2x+1 일 때 f(x)+g(x) 를 x-1 로 나눈 나머지 구하기.
  category: "두 제수의 공통 근 1 에서의 값만 읽어 더하기"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "나머지정리 — 일차식으로 나눈 나머지(값 읽기·합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 제수 모두 x-1 을 인수로 가지므로 f(1)=2, g(1)=3 을 읽어 더하면 끝난다. 조건을 변형할 필요가 없어 표준 절차로 보고 통찰 0.
    STEP 1 ★2 출발·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "x^2-1 과 x^2-3x+2 가 모두 x-1 을 인수로 가짐 → f(1)=2, g(1)=3 → 합 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/55-101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 제수와 두 나머지를 바꾼다. 제약: 두 제수가 최종 제수(x-1)를 공통 인수로 가져야 값이 결정된다. 공통 인수가 없으면 풀리지 않는다."
    creative: "(1) f(x)g(x) 의 나머지를 묻기(★2 유지) (2) 최종 제수를 x-2 로 바꾸면 f 쪽 조건이 쓸모없어져 조건 점검이 필요해 ★3 (3) f+g 를 x^2-1 로 나눈 나머지를 묻게 하면 일차 나머지 설정이 붙어 ★3."
```

```yaml
- id: GN-CM1-55-102
  page: 55
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    (x+2)f(x) 를 x-1 로 나눈 나머지가 9, (2x+1)f(x) 를 x+1 로 나눈 나머지가 5 일 때 f(x) 를 x^2-1 로 나눈 나머지 R(x) 에 대하여 R(-2) 구하기.
  category: "곱의 나머지에서 f 의 두 값 추출 → R(x)=ax+b 연립"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱 형태의 나머지 조건을 계수의 값까지 함께 대입해 3f(1)=9, (-1)f(-1)=5 로 f 의 두 값을 뽑아냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "나머지정리 — 이차식으로 나누는 경우(곱 조건에서 값 추출)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 f 가 아니라 곱에 대해 주어져 있어 계수의 값으로 나눠 줘야 f(1), f(-1) 이 나온다. (2x+1) 이 x=-1 에서 -1 이라 부호 실수가 잦다.
    이후는 51-e6 과 같은 R(x)=ax+b 연립. STEP 1 ★2 · 통찰 1개(d1) → ★2.
  tier: star_2
  mechanism_primary: "3f(1)=9, (-1)f(-1)=5 → f(1)=3, f(-1)=-5 → R(x)=ax+b 연립 → R(-2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/55-102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞에 곱해지는 일차식과 두 나머지 값을 바꾼다. 제약: 곱해지는 식이 해당 대입점에서 0 이 되면 f 의 값을 뽑을 수 없고, 나눠 떨어지지 않으면 f 값이 분수가 되어 연립이 지저분해진다."
    creative: "(1) 곱해지는 식을 이차식으로 올리기(★2 유지) (2) 제수를 (x-1)^2 로 바꾸면 값 하나로는 부족해 ★3 (3) R(-2) 대신 R 의 계수 곱을 묻기(★2 유지)."
```

```yaml
- id: GN-CM1-55-103
  page: 55
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x) 를 x^2+3x-4 로 나눈 나머지가 -2x+3 일 때 f(4x) 를 x+1 로 나눈 나머지 구하기.
  category: "합성 f(4x) → f(-4) → 제수 인수분해로 -4 가 근임을 확인"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(4x) 를 x+1 로 나눈 나머지는 f(-4) 이고, x^2+3x-4=(x+4)(x-1) 이라 f(-4) 가 주어진 나머지로 계산됨을 연결"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f(ax+b) 를 x-α 로 나누는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대입값이 -1 이 아니라 4*(-1)=-4 라는 것이 유일한 함정이고, 제수 인수분해로 -4 가 근임을 확인하면 한 줄로 끝난다.
    STEP 1 ★2 · 통찰 1개(d1) → ★2.
  tier: star_2
  mechanism_primary: "x=-1 → f(-4) → (x+4)(x-1) 의 근 -4 에서 f(-4)=-2*(-4)+3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/55-103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율 4 와 대입점, 제수의 두 근, 나머지 일차식을 바꾼다. 제약: 배율과 대입점의 곱이 제수의 근 중 하나여야 하므로 세 값이 연동된다."
    creative: "(1) f(2x-1) 처럼 상수항을 넣기(53-e8 · ★2 유지) (2) 제수를 삼차로 올려 근을 늘리고 두 점이 필요하게 만들면 ★3 (3) f(4x) 를 이차식으로 나눈 나머지를 묻게 하면 56-109 골조 ★3."
```

```yaml
- id: GN-CM1-55-104
  page: 55
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x^60-x^31+ax^3+1 을 x-1 로 나눈 몫이 Q(x), 나머지가 4 일 때 Q(x) 를 x+1 로 나눈 나머지 구하기.
  category: "항등식에서 a 결정 → 다른 점 대입으로 Q 의 값 추출"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 것이 Q(-1) 이므로 f(x)=(x-1)Q(x)+4 에 x=-1 을 대입해 Q(-1) 을 f(-1) 로부터 역으로 뽑아냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나눗셈 항등식 복원 — 몫을 x-α 로 나눈 나머지"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지수가 60, 31 로 커 보이지만 x=1, -1 대입이라 실제 계산은 부호만 따지면 된다. 핵심은 Q 를 직접 구하지 않고 항등식에서 Q(-1) 을 뽑는 것.
    STEP 1 ★2 출발·통찰 1개(d2) → ★2 유지. 체감은 STEP 2 급.
  tier: star_2
  mechanism_primary: "x=1 로 a 결정 → 항등식 f(x)=(x-1)Q(x)+4 에 x=-1 → Q(-1)=(f(-1)-4)/(-2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/55-104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 60, 31, 3 은 값이 아니라 홀짝만 의미가 있으므로 홀짝을 유지한 채 자유롭게 바꾼다. 나머지 4 와 상수항도 조정 가능. 제약: a 를 정하는 x=1 식에서 a 의 계수가 0 이 되면 안 된다."
    creative: "(1) 제수를 x+1, 대입점을 1 로 뒤집기(★2 유지) (2) Q(x) 를 이차식으로 나눈 나머지를 묻기(57-114 골조 ★4) (3) 몫이 아니라 f 를 (x-1)(x+1) 로 나눈 나머지를 묻게 하면 ★2 유지."
```

```yaml
- id: GN-CM1-55-105
  page: 55
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    x^3+ax^2-7x+b 가 x-1, x+2, x-c 를 인수로 가질 때 상수 a, b, c 에 대하여 a+b+c 구하기(c 는 1, -2 가 아님).
  category: "인수정리 두 번 → 삼차식을 세 일차인수의 곱으로 분해 → c"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최고차항 계수가 1 인 삼차식이 세 일차식을 인수로 가지면 (x-1)(x+2)(x-c) 로 완전히 분해된다는 구조로 c 를 계수 비교로 뽑음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "인수정리 — 세 일차인수로 완전 분해(계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=0, f(-2)=0 으로 a, b 를 얻은 뒤 나머지 인수를 찾는 길과, 처음부터 (x-1)(x+2)(x-c) 로 놓고 계수를 비교하는 길이 있다. 후자가 빠르다.
    STEP 1 ★2 출발·통찰 1개(d2) → ★2 유지.
  tier: star_2
  mechanism_primary: "f(x)=(x-1)(x+2)(x-c) 로 놓고 계수 비교 → c=5, a=1-c, b=2c → a+b+c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/55-105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 주어진 근과 일차항 계수(-7)를 바꾸면 c 가 따라 정해진다. 제약: 일차항 계수가 두 근과 c 로 결정되므로 c 가 정수가 되도록 역산해서 잡아야 하고, c 가 주어진 두 근과 같아지면 조건 c!=1, c!=-2 와 충돌한다."
    creative: "(1) 인수를 하나 더 늘려 사차식으로(★3) (2) c 대신 삼차식의 세 근의 합·곱을 묻기(근과 계수 · ★3) (3) 중근 (x-1)^2 을 인수로 갖게 하면 미분 없이 계수 비교가 필요해 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-56-106
  page: 56
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)+g(x) 를 x-2 로 나눈 나머지가 10 이고 {f(x)}^2+{g(x)}^2 을 x-2 로 나눈 나머지가 58 일 때 f(x)g(x) 를 x-2 로 나눈 나머지 구하기.
  category: "x=2 에서의 값으로 환원 → 곱셈 공식으로 곱 추출"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 나머지를 x=2 에서의 값 합과 제곱합으로 바꾼 뒤 (합)^2=제곱합+2*곱 의 곱셈 공식으로 곱의 값을 끌어냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리 — 합·제곱합 조건에서 곱의 나머지"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f, g 를 구하려 하면 막히고, 필요한 것은 x=2 에서의 두 수뿐임을 알아채야 한다. 그다음은 다항식의 연산에서 배운 곱셈 공식 한 줄.
    STEP 2 ★3 출발·통찰 1개(d2) → ★3 유지.
  tier: star_3
  mechanism_primary: "f(2)+g(2)=10, f(2)^2+g(2)^2=58 → f(2)g(2)=(10^2-58)/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/56-106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 s 와 제곱합 q 를 바꾼다. 제약: (s^2-q)/2 가 정수여야 하고 s^2 >= q 이어야 실수 f(2), g(2) 가 존재한다. s^2-2q 가 음수가 되지 않게 잡는다."
    creative: "(1) 세제곱 합을 주고 곱을 묻기(★3~4) (2) 곱 대신 f(2)-g(2) 를 묻게 하면 부호 분기가 생겨 I-MI 추가 ★4 (3) 제수를 이차식으로 올려 두 점에서 같은 절차를 반복하면 ★4."
```

```yaml
- id: GN-CM1-56-107
  page: 56
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x^10-x^7+2x^4-6 을 x^3-x 로 나눈 나머지를 R(x) 라 할 때 R(x) 를 x+2 로 나눈 나머지 구하기.
  category: "제수 인수분해 → 세 근에서의 값으로 이차 나머지 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x^3-x=x(x-1)(x+1) 세 근에서의 값이 곧 R 의 값이라는 대응으로, 이차 이하 나머지 R(x)=ax^2+bx+c 를 세 점 연립으로 확정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리 — 삼차식으로 나눈 나머지(세 근 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    차수가 10 이라 직접 나눌 수 없고, 세 근 0, 1, -1 에서의 값이 모두 R 의 값이라는 대응을 써야 한다. 고차 대입은 부호 계산뿐.
    마지막에 R(-2) 를 다시 구하는 한 단계가 더 붙는다. STEP 2 ★3 출발·통찰 1개(d2) → ★3.
  tier: star_3
  mechanism_primary: "x(x-1)(x+1) 의 세 근에서 f 값 계산 → R(x)=ax^2+bx+c 연립 → R(-2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/56-107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 10, 7, 4 는 홀짝만 의미가 있고 상수항과 계수는 자유. 제약: 제수는 서로 다른 세 정수 근으로 인수분해되어야 하며, 근을 0, 1, -1 밖으로 옮기면 고차 대입 계산이 폭증한다."
    creative: "(1) 제수를 x^3-4x 로 바꾸면 근이 0, 2, -2 가 되어 계산 부담 증가 ★3~4 (2) 나머지 R 전체를 묻기(★3 유지) (3) 몫 Q 의 어떤 값을 묻게 하면 항등식 복원이 겹쳐 ★4."
```

```yaml
- id: GN-CM1-56-108
  page: 56
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x) 를 (x-1)^2 으로 나눈 나머지가 x+1 이고 x-2 로 나눈 나머지가 5 일 때 f(x) 를 (x-1)^2(x-2) 로 나눈 나머지 구하기.
  category: "삼차식으로 나눈 나머지를 a(x-1)^2+x+1 꼴로 설정"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중근 조건을 나머지 식에 흡수해 R(x)=a(x-1)^2+x+1 로 두어 미지수를 하나로 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리 — 삼차식 (x-α)^2(x-β) 로 나누는 경우"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    52-e7 과 같은 골조가 연습문제로 다시 나온 문항. ax^2+bx+c 로 놓으면 조건이 하나 모자라고, 중근 조건 흡수로 미지수를 a 하나로 줄여야 한다.
    STEP 2 ★3 출발·통찰 1개(d2) → ★3.
  tier: star_3
  mechanism_primary: "R(x)=a(x-1)^2+x+1 → x=2 에서 f(2)=5 와 비교 → a=2 → 전개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2x^2-3x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/56-108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 α, 단근 β, 일차 나머지와 값을 바꾼다. 제약: (β-α)^2 이 (f(β) - 일차나머지의 β 값) 을 나누어야 a 가 정수로 떨어진다."
    creative: "(1) 중근 쪽 나머지를 상수로 낮추기(52-93 · ★3) (2) 단근 조건을 나누어떨어짐으로 바꾸기(★3 유지) (3) 제수를 (x-1)^2(x-2)^2 로 올리면 미지수가 둘이 되어 ★4."
```

```yaml
- id: GN-CM1-56-109
  page: 56
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x) 를 (x-1)(x-2)(x-3) 으로 나눈 나머지가 x^2+x+1 일 때, f(6x) 를 6x^2-5x+1 로 나눈 나머지 R(x) 에 대하여 R(1) 구하기.
  category: "합성 f(6x) + 이차 제수 → 두 점에서 f(3), f(2) 로 환원"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "6x^2-5x+1=(2x-1)(3x-1) 의 두 근 1/2, 1/3 에서 f(6x) 의 값이 각각 f(3), f(2) 가 되어 주어진 나머지로 계산됨을 연결"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "f(ax+b) 를 이차식으로 나누는 경우(합성 + 나머지 설정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합성 f(6x) 와 이차 제수가 겹친 형태로, 두 근이 분수라 6*(1/2)=3, 6*(1/3)=2 가 마침 주어진 세 점 안에 들어온다는 설계다.
    이후 R(x)=px+q 를 분수 두 점으로 연립. STEP 2 ★3 출발·통찰 1개(d2) → ★3.
  tier: star_3
  mechanism_primary: "(2x-1)(3x-1) 의 근에서 f(3)=13, f(2)=7 → R(x)=px+q 연립 → R(1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$31$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/56-109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배율 6 과 이차 제수의 두 분수 근, 주어진 나머지 이차식을 바꾼다. 제약: 배율과 두 근의 곱이 모두 주어진 세 점 안에 들어와야 하므로 배율은 두 분모의 공배수여야 한다."
    creative: "(1) f(12x) 와 12x^2-7x+1 로 규모만 키우기(★3 유지) (2) R(1) 대신 R 전체를 묻기(★3 유지) (3) 주어진 나머지를 미지 이차식으로 두고 조건을 따로 주면 미지수가 늘어 ★4."
```

```yaml
- id: GN-CM1-56-110
  page: 56
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x) 를 x-1 로 나눈 몫이 Q(x), 나머지가 6 이고 Q(x) 를 x+2 로 나눈 나머지가 9 일 때, f(x) 를 (x-1)(x+2) 로 나눈 나머지 ax+b 에 대하여 ab 구하기.
  category: "항등식 복원으로 f(-2) 확보 → 이차 제수의 나머지 연립"
  M: {s: 3, k: 1, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)=(x-1)Q(x)+6 에 x=-2 를 대입해 Q(-2)=9 로부터 f(-2) 를 만들고, 그것을 이차 나머지 연립의 두 번째 조건으로 씀"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나눗셈 항등식 복원 — 몫의 나머지로 두 번째 값 확보"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    53-e9 의 항등식 복원과 51-e6 의 ax+b 설정이 합쳐진 문항이다. f(1)=6 은 바로 나오지만 f(-2) 는 몫을 거쳐야 나온다.
    STEP 2 ★3 출발·통찰 1개(d2) → ★3.
  tier: star_3
  mechanism_primary: "f(1)=6, f(x)=(x-1)Q(x)+6 에 x=-2 → f(-2)=-3*9+6 → a+b, -2a+b 연립 → ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/56-110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 두 나머지 값을 바꾼다. 제약: 두 근이 달라야 연립이 유일하고, (β-α) 배 계산이 들어가므로 근의 차를 4 이내로 두면 값이 관리된다."
    creative: "(1) 묻는 것을 a+b 나 나머지 자체로 바꾸기(★3 유지) (2) 제수를 (x-1)^2(x+2) 로 올리면 중근 설정이 겹쳐 ★4 (3) Q 를 다시 나눈 몫까지 주면 3중 항등식이 되어 ★4."
```

```yaml
- id: GN-CM1-56-111
  page: 56
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    이차항의 계수가 1 인 이차다항식 f(x) 에 대하여 f(x)+2 는 x+2 로 나누어떨어지고 f(x)-2 는 x-2 로 나누어떨어질 때 f(10) 구하기.
  category: "평행이동된 인수정리 → f(-2)=-2, f(2)=2 → 계수 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x)+2 가 x+2 로 나누어떨어진다는 조건을 f(-2)=0 이 아니라 f(-2)=-2 로 옮기는 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "인수정리 — f(x)±k 가 나누어떨어질 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    나누어떨어지는 대상이 f 가 아니라 f±2 라 0 이 아닌 값으로 옮겨야 한다. f(x)=x^2+bx+c 로 놓고 두 식을 더하고 빼면 b, c 가 한 번에 나온다.
    [분류 이슈] 두 조건이 원점에 대해 대칭이라 합·차로 한 번에 푸는 길이 있어 I-SYM 으로 볼 여지가 있으나, CM1 보수 정책에 따라 I-EQV 로 두었다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "f(-2)=-2, f(2)=2 → f(x)=x^2+bx+c 에 대입해 두 식 합·차 → b, c → f(10)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$106$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/56-111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근 ±2 와 평행이동량 2, 최종 대입점 10 을 바꾼다. 제약: 두 근을 대칭으로 두면 합·차 풀이가 살아나고, 비대칭으로 두면 그냥 연립이 되어 난도가 약간 내려간다."
    creative: "(1) f 를 삼차로 올리고 조건을 하나 더 주기(★4) (2) f(x)+2 와 f(x)-2 를 같은 일차식으로 나누어떨어지게 하면 모순 조건 판정이 필요해 ★4 (3) f(10) 대신 f 의 최솟값을 묻게 하면 이차함수 단원과 결합해 I-XU ★4."
```

```yaml
- id: GN-CM1-57-112
  page: 57
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    최고차항의 계수가 1 인 삼차식 f(x) 에 대하여 f(1)=f(2)=f(3)=5 일 때 f(x) 를 x-4 로 나눈 나머지 구하기.
  category: "세 값이 같다 → f(x)-5 를 세 일차식의 곱으로 통합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 점에서 값이 모두 5 라는 조건을 f(x)-5 가 (x-1)(x-2)(x-3) 을 인수로 갖는다는 하나의 인수 구조로 통합"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "인수정리 — 같은 값을 갖는 여러 점을 f(x)-k 의 인수로 통합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미정계수 세 개로 연립하면 길고, f(x)-5 의 근이 1, 2, 3 이고 최고차항 계수가 1 이므로 f(x)=(x-1)(x-2)(x-3)+5 로 확정된다.
    이 통합이 전부이고 계산은 f(4) 한 줄. STEP 2 ★3 출발·통찰 1개(d2) → ★3.
  tier: star_3
  mechanism_primary: "f(x)-5=(x-1)(x-2)(x-3) → f(4)=3*2*1+5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/57-112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점과 공통값 5, 대입점 4 를 바꾼다. 제약: 최고차항 계수가 1 로 고정되어야 f 가 유일하게 결정되고, 점의 개수는 차수와 같아야 한다(삼차면 세 점)."
    creative: "(1) 사차식에 네 점을 주기(★3 유지) (2) 최고차항 계수를 미지로 두고 값을 하나 더 주면 미지수가 늘어 ★4 (3) f(1)=f(2)=f(3) 만 주고 값을 미지로 두면 상수가 소거되는 구조를 봐야 해 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-57-113
  page: 57
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    두 다항식 f(x), g(x) 가 ㈎ g(x)=x^2 f(x), ㈏ g(x)+(3x^2+4x)f(x)=x^3+ax^2+2x+b 를 만족시킬 때 g(x) 를 x-4 로 나눈 나머지 구하기. 5지선다.
  category: "두 조건 결합 → 좌변 인수 구조로 우변의 미정계수 역추적"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎를 ㈏에 넣어 좌변을 (4x^2+4x)f(x)=4x(x+1)f(x) 하나로 정리"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "좌변이 x 와 x+1 을 인수로 가지므로 우변 삼차식도 x=0, x=-1 에서 0 이어야 한다는 역방향 조건으로 a, b 를 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "인수정리 — 항등식 양변의 인수 구조로 미정계수 역추적"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 조건을 합쳐야 비로소 좌변이 4x(x+1)f(x) 로 보이고, 그 인수 구조가 우변의 a, b 를 강제한다는 역추적이 핵심이다.
    f 를 얻은 뒤 g(4) 를 계산하는 마무리까지 3단. 실력 UP ★4 출발·통찰 2개(EQV+BW) → ★4 유지(★5 요건인 통찰 3개·SC/VF/SYM/XU 부재).
  tier: star_4
  mechanism_primary: "㈎를 ㈏에 대입 → 4x(x+1)f(x)=x^3+ax^2+2x+b → x=0, -1 에서 0 → a, b → f(x) → g(4)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/57-113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈏의 계수 3, 4 와 우변의 일차항 계수를 바꾼다. 제약: 좌변의 f 앞 인수가 우변 삼차식을 정확히 나누어야 f 가 다항식으로 남는다. 계수를 바꾸면 우변의 남은 인수도 함께 설계해야 한다."
    creative: "(1) g 의 정의를 x^3 f(x) 로 올려 차수를 키우기(★4 유지) (2) 우변을 사차식으로 하고 f 를 일차식으로 만들면 계수 비교가 늘어 ★4 (3) a, b 중 하나만 주고 나머지를 묻게 하면 조건이 느슨해져 케이스 분기가 생겨 ★5 후보."
```

```yaml
- id: GN-CM1-57-114
  page: 57
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    f(x) 를 x^2+1 로 나눈 몫이 Q(x), 나머지가 -2x 이고 f(x) 를 x^2-1 로 나눈 나머지가 6 일 때, Q(x) 를 x^2-1 로 나눈 나머지 구하기.
  category: "몫을 다시 나눈 항등식을 원 항등식에 대입 → 두 점 연립"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 나머지를 ax+b 로 두고 Q(x)=(x^2-1)Q1(x)+ax+b 를 f(x)=(x^2+1)Q(x)-2x 에 통째로 대입해 f 의 이중 항등식을 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나눗셈 항등식 복원 — 몫을 이차식으로 나눈 나머지"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    몫을 다시 나눈 결과를 원 항등식에 대입해 x=1, -1 에서 (x^2+1) 의 값 2 가 함께 곱해지는 구조를 봐야 한다.
    [분류 이슈] 실력 UP ★4 라벨이지만 통찰이 I-EQV 1개뿐이라 §2.13 저노출 유형 부재(YELLOW). 구역 신호를 따라 ★4 로 두고 기록만 한다.
  tier: star_4
  mechanism_primary: "Q(x)=(x^2-1)Q1+ax+b 를 f=(x^2+1)Q-2x 에 대입 → x=1, -1 에서 f 값 6 과 비교 → a, b"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/57-114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2+1 의 상수항, 나머지 -2x, f 의 나머지 6 을 바꾼다. 제약: x=±1 에서 (x^2+k) 의 값이 같아야 대칭 구조가 유지되고, 그 값이 두 식의 차를 나누어야 a, b 가 정수로 나온다."
    creative: "(1) f 의 나머지를 일차식으로 올리면 두 값이 달라져 계산만 늘어 ★4 유지 (2) 몫을 삼차식으로 나누게 하면 미지수가 셋이 되어 ★5 후보 (3) Q 대신 f 자체를 (x^2+1)(x^2-1) 로 나눈 나머지를 묻기(★4)."
```

```yaml
- id: GN-CM1-57-115
  page: 57
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    7^30+7^20+7 을 6 으로 나눈 나머지 구하기.
  category: "7=6+1 로 보고 다항식 나눗셈으로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정수의 나눗셈 문제를 7=x+1, x=6 인 다항식 나눗셈으로 옮겨 (x+1)^n 의 전개에서 x 를 인수로 갖지 않는 항만 남는다는 구조로 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리의 정수 응용 — 큰 거듭제곱을 (제수+1) 꼴로 전개"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    수를 다항식으로 보는 전환 하나면 세 항 모두 나머지가 1 이 되어 합이 3 으로 끝난다. 단원 경계를 넘는 결합이라 I-XU d2.
    [분류 이슈] 실력 UP ★4 출발이나 M_total 5 이고 아이디어를 아는 학생에게는 세 줄이라 체감 ★2. 2단 어긋남으로 기록만 하고 라벨은 ★4 유지.
  tier: star_4
  mechanism_primary: "7=6+1 → (6+1)^n 전개에서 6 의 배수 항 제거 → 나머지 1+1+1"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/57-115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 7 과 제수 6, 지수 30·20·1 을 바꾼다. 제약: 밑이 제수보다 1 큰 수(또는 1 작은 수)여야 전개가 간단해지고, 1 작은 수면 지수의 홀짝에 따라 부호가 갈려 함정이 생긴다."
    creative: "(1) 밑을 5, 제수를 6 으로 두어 (6-1)^n 부호 분기를 만들기(I-MI 추가 ★4) (2) 나머지가 아니라 마지막 두 자리를 묻기(제수 100 · ★4) (3) 다항식 x^30+x^20+x 를 x-1 로 나눈 나머지로 바꾸면 원래의 ★2 문항으로 내려간다."
```

```yaml
- id: GN-CM1-57-116
  page: 57
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    최고차항의 계수가 1 인 사차다항식 f(x) 가 ㈎ x+1 로 나눈 나머지와 x^2-3 으로 나눈 나머지가 서로 같다, ㈏ f(x+1)-5 는 x^2+x 로 나누어떨어진다 를 만족시킬 때 f(4) 구하기. 5지선다.
  category: "나머지 차수 비교로 상수 나머지 확정 → 평행이동 조건으로 두 점 값 → 계수 결정"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x+1 로 나눈 나머지는 상수이므로 두 나머지가 같다는 ㈎는 x^2-3 으로 나눈 나머지도 상수 c=f(-1) 이라는 뜻이고, 따라서 f(x)=(x^2-3)(x^2+px+q)+c 로 쓸 수 있음"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x+1)-5 가 x(x+1) 로 나누어떨어진다는 조건을 f(1)=5, f(0)=5 로 역추적해 미정계수 세 개를 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "나머지정리·인수정리 종합 — 나머지 차수 판정과 평행이동 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎를 차수 비교로 상수 나머지라고 읽어내는 것이 첫 관문이고(여기서 막히면 진행 불가), ㈏는 평행이동한 다항식의 인수 조건을 원래 점 0, 1 로 되돌리는 역추적이다.
    [분류 이슈] 세 미정계수를 한 번에 묶어 푸는 단계를 세 번째 통찰로 볼지 계산으로 볼지에 따라 ★4/★5 경계. 실력 UP ★4 출발·통찰 2개 → ★4 유지(SC/VF/SYM/XU 부재로 ★5 요건 미충족).
  tier: star_4
  mechanism_primary: "㈎ → 나머지는 상수 c=f(-1) → f(x)=(x^2-3)(x^2+px+q)+c / ㈏ → f(0)=f(1)=5 → p, q, c → f(4)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/57-116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2-3 의 상수항, ㈏의 5, 평행이동 폭 1, 최종 대입점 4 를 바꾼다. 제약: 이차 제수는 실근을 가져도 무방하지만 나머지가 상수가 되는 구조는 유지해야 하고, 세 조건으로 미지수 셋이 유일하게 결정되어야 한다."
    creative: "(1) ㈏를 f(x-1)+k 로 바꾸어 이동 방향을 뒤집기(★4 유지) (2) 최고차항 계수를 미지로 두고 조건을 하나 더 주면 ★5 후보 (3) f(4) 대신 f 의 인수분해 형태를 묻게 하면 검증 단계가 붙어 I-VF 가 생기며 ★5."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 3 · ★2 22 · ★3 10 · ★4 4 · ★5 0
- 통찰형 29 · 절차형 10 · premium 0 · novelty_score 전 문항 0
- 통찰 유형 분포: I-EQV 26 · I-BW 2 · I-XU 1 (SC·VF·SYM·PD·MI·RT·CON 0). depth 1 이 12, depth 2 가 17.
- type_hint 상위: 「나머지정리 — 일차식으로 나누는 경우(값 읽기·미정계수)」 7 · 「인수정리 — 나누어떨어질 조건으로 미정계수 결정」 7 · 「나눗셈 항등식 복원(몫을 다시 나누기)」 7 · 「f(ax+b) 를 x-α 로 나누는 경우」 5 · 「나머지정리 — 삼차식(중근·기약이차 흡수)」 4
- 그림: 0문(전 문항 `figure: none`). 5지선다 2문(57-113 · 57-116), 나머지는 단답.
- 구역별 ★ 중앙값: 개념원리 익히기 ★1 · 필수 예제 ★2 · 발전 예제 ★3 · 확인체크 ★2(발전 예제 아래 2문만 ★3) · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-56-111 | 두 조건이 원점 대칭이라 합·차로 한 번에 계수가 나오는 구조 — I-SYM 으로 볼 여지가 있으나 CM1 보수 정책에 따라 I-EQV 로 둠 | ★3 |
| GN-CM1-57-114 | 실력 UP ★4 라벨인데 통찰이 I-EQV 1개뿐이라 §2.13 저노출 유형 부재(YELLOW). 구역 신호를 따라 ★4 유지 | ★3 / ★4 |
| GN-CM1-57-115 | 실력 UP ★4 출발이나 M_total 5 · 아이디어 하나면 세 줄 → 체감 ★2 로 2단 어긋남. 단원 경계를 넘는 I-XU 가 있어 라벨은 ★4 유지 | ★2 / ★4 |
| GN-CM1-57-116 | 세 미정계수를 묶어 푸는 단계를 세 번째 통찰로 셀지 계산으로 셀지에 따라 ★4/★5 경계 | ★4 / ★5 |

## 카탈로그 차원 메모

나중에 공통수학1 유형 카탈로그를 만들 때 참고할, 이 범위에서 반복된 type_hint 와 분리·통합 제안이다.

- **따로 세워야 할 유형**
  - 「나눗셈 항등식 복원 — 몫을 다시 나누기」(53-e9 · 53-97 · 51-92 · 55-100 · 55-104 · 56-110 · 57-114, 7문): 나머지정리 직접 대입과 근본이 다르다. 몫이 등장하는 순간 f 를 항등식으로 써야 하며 ★2~4 로 폭이 넓어 base ★ 3 짜리 독립 유형이 적절하다.
  - 「f(ax+b) 를 x-α 로 나누는 경우」(53-e8 · 53-95 · 53-96 · 55-103 · 56-109, 5문): 대입점이 α 가 아니라 aα+b 라는 고정 함정 하나로 묶인다. base ★ 2, 제수가 이차가 되는 56-109 만 ★3.
  - 「삼차식 (x-α)^2(x-β) 또는 (기약이차)(x-β) 로 나눈 나머지」(52-e7 · 52-93 · 52-94 · 56-108, 4문): 나머지를 a(x-α)^2+R1 꼴로 흡수하는 설정이 유일한 관문이라 이차식 나머지 유형과 분리해야 한다. base ★ 3.
- **통합해도 될 유형**
  - 「나머지정리 일차식 — 값 읽기」와 「나머지정리 일차식 — 미정계수 결정」(49-85 · 49-86 · 50-e5 · 50-88 · 50-89 · 50-90 · 55-101): 도구가 f(α) 하나뿐이고 조건 개수만 다르므로 base ★ 1~2 의 한 유형 안에서 난이도 변형으로 두는 편이 낫다.
  - 「인수정리 일차식」과 「인수정리 이차식으로 나누어떨어짐」(49-87 · 54-e10 · 54-e11 · 54-98 · 54-99 · 55-105): 후자는 전자를 두 번 쓰는 것이라 별도 유형보다 하위 변형으로 충분하다. 다만 55-105 의 「세 일차인수로 완전 분해 후 계수 비교」와 56-111 의 「f(x)±k 가 나누어떨어짐」은 번역 단계가 하나 더 있어 ★3 변형으로 구분해 둔다.
- **카탈로그에 없던 자리**: 57-115 의 「정수 나눗셈을 다항식 나눗셈으로 옮기기」는 이 단원에서 유일한 I-XU 문항이다. 단원 안의 유형으로 넣기보다 단원 경계 결합 슬롯으로 따로 표시해 두는 편이 ★ 산정에 유리하다.
